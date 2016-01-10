/*jshint node: true */
'use strict';

/**
 * Usage général :
 *
 *  - tâche "build" : fichiers compilés dans "/dist" (ni minifiés ni concaténés).
 *    Le client peut modifier, améliorer et mettre en prod lui-même.
 *
 *  - tâche "prod" : fichiers compilés dans "/dist" (minifiés, concaténés,
 *    optimisés, etc.). Le client utilise tel quel.
 */


/**
 * Chargement et initialisation des composants utilisés
 */
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    gulpSync = require('gulp-sync')(gulp),
    browserSync = require('browser-sync').create(),
    del = require('del');


/**
 * Configuration générale du projet et des composants utilisés
 */
var project = {
  name: 'projectName', // nom du projet, utilisé notamment pour le fichier ZIP
  url: 'http://localhost/', // url du projet, utilisée par browserSync en mode proxy
  zip: {
    name: '', // "build" ou "prod" selon la tâche, généré automatiquement par ce script
    namespace: 'alsacreations', // préfixe du fichier ZIP
  },
  globalJSFile: 'global.min.js', // nom du fichier JS après concaténation
  plugins: { // activation ou désactivation de certains plugins à la carte
    browserSync: {
      status: false, // utilisation du plugin browserSync lors du Watch ?
      proxyMode: false, // utilisation du plugin browserSync en mode proxy (si false en mode standalone)
    },
    critical: false, // utilisation du plugin critical pour insérer le CSS critique en INLINE dans le HTML
    uncss: false, // utilisation du plugin uncss pour supprimer le CSS non utilisé (avec fichiers HTML seulement)
  },
  configuration: { // configuration des différents composants de ce projet
    critical: {
      base: './',
      inline: true,
      width: 320,
      height: 480,
      minify: true,
    },
    cssbeautify: {
      indent: '  ',
    },
    htmlExtend: {
      annotations: false,
      verbose: false,
    },
    imagemin: {
      svgoPlugins: [
        {
          removeViewBox: false,
        }, {
          cleanupIDs: false,
        },
      ],
    },
    styledown: {
      config: './dist/assets/css/config.md',
      filename: 'styleguide.html',
    },
  },
};


/**
 * Chemins vers les ressources ciblées
 */
var paths = {
  root: './', // dossier actuel
  src: './src/', // dossier de travail
  dest: './dist/', // dossier destiné à la livraison
  vendors: './src/vendor/', // dossier des dépendances du projet
  assets: 'assets/',
  styles: {
    root: 'assets/css/', // fichier contenant les fichiers CSS & Less
    css: {
      mainFile: 'assets/css/styles.css', // fichier CSS principal
      files: 'assets/css/*.css', // cible tous les fichiers CSS
      styleguide: 'assets/css/config.md', // fichier MD de configuration du styleguide
    },
    less: {
      mainFile: 'assets/css/styles.less', // fichier Less principal
      files: 'assets/css/{,includes/}*.less', // fichiers Less à surveiller
    },
  },
  scripts: {
    root: 'assets/js/', // dossier contenant les fichiers JavaScript
    files: 'assets/js/*.js', // fichiers JavaScript (hors vendor)
  },
  html: {
    racine: '*.html', // fichiers & dossiers HTML à compiler / copier à la racine uniquement
    allFiles: '{,includes/}*.html', // fichiers & dossiers HTML à compiler / copier à la racine et dans le dossier includes/
  },
  php: '{,includes/}*.php', // fichiers & dossiers PHP à copier
  fonts: 'assets/css/fonts/', // fichiers typographiques à copier,
  images: 'assets/{,css/}img/*.{png,jpg,jpeg,gif,svg}', // fichiers images à compresser
  misc: '*.{ico,htaccess,txt}', // fichiers divers à copier
  maps: '/maps', // fichiers provenant de sourcemaps
};


/**
 * Ressources JavaScript utilisées par ce projet (vendors + scripts JS spécifiques)
 */
var vendors = [
  paths.vendors + 'jquery/dist/jquery.min.js',
  paths.vendors + 'swiper/dist/js/swiper.min.js',
  paths.src + paths.scripts.files,
];


/**
 * Tâche de gestion des erreurs à la volée
 */
var onError = {
  errorHandler: function (err) {
    $.util.beep();
    console.log(err);
    this.emit('end');
  }
};


/* ------------------------------------------------
 * Tâches de Build : css, html, php, js, img, fonts
 * ------------------------------------------------
 * Les fichiers ne sont ni minifiés, ni concaténés
 */

// Tâche CSS : Less + autoprefixer + CSScomb + beautify (source -> destination)
gulp.task('css', function () {
  project.zip.name = 'build';
  return gulp.src(paths.src + paths.styles.less.mainFile)
    .pipe($.plumber(onError))
    .pipe($.sourcemaps.init())
    .pipe($.less())
    .pipe($.csscomb())
    .pipe($.cssbeautify(project.configuration.cssbeautify))
    .pipe($.autoprefixer())
    .pipe($.sourcemaps.write(paths.maps))
    .pipe(gulp.dest(paths.dest + paths.styles.root));
});

// Tâche HTML : includes HTML (source -> destination)
gulp.task('html', function () {
  return gulp.src(paths.src + paths.html.allFiles)
    .pipe($.plumber(onError))
    .pipe($.htmlExtend(project.configuration.htmlExtend))
    .pipe(gulp.dest(paths.dest));
});

// Tâche PHP : simple copie des fichiers PHP (source -> destination)
gulp.task('php', function () {
  return gulp.src(paths.src + paths.php)
    .pipe(gulp.dest(paths.dest));
});

// Tâche JS : simple copie des fichiers JS (source -> destination)
gulp.task('js', function () {
  return gulp.src(vendors)
    .pipe(gulp.dest(paths.dest + paths.scripts.root));
});

// Tâche IMG : images optimisées (source -> destination)
gulp.task('img', function () {
  return gulp.src(paths.src + paths.images)
    .pipe($.changed(paths.dest + paths.assets))
    .pipe($.imagemin(project.configuration.imagemin))
    .pipe(gulp.dest(paths.dest + paths.assets));
});

// Tâche FONTS : simple copie des fichiers typographiques (source -> destination)
gulp.task('fonts', function () {
  return gulp.src(paths.src + paths.fonts + '*')
    .pipe($.changed(paths.dest + paths.fonts))
    .pipe(gulp.dest(paths.dest + paths.fonts));
});

// Tâche MISC : simple copie des fichiers divers (source -> destination)
gulp.task('misc', function () {
  var dottedFiles = { dot: true };
  return gulp.src(paths.src + paths.misc, dottedFiles)
    .pipe($.changed(paths.dest))
    .pipe(gulp.dest(paths.dest));
});

// Tâche STYLEGUIDE : création automatique d'un guide des styles
gulp.task('styleguide', function () {
  return gulp.src(paths.dest + paths.styles.css.mainFile)
    .pipe($.plumber(onError))
    .pipe($.styledown(project.configuration.styledown))
    .pipe(gulp.dest(paths.dest));
});


/* ----------------------------------------------------------
 * Tâches de Prod : (build +) minify, concat, uncss, critical
 * ----------------------------------------------------------
 */

// Tâche MINIFY : minification CSS (destination -> destination)
gulp.task('minify', function () {
  project.zip.name = 'prod';
  return gulp.src(paths.dest + paths.styles.css.mainFile)
    .pipe($.rename({suffix: '.min'}))
    .pipe($.csso())
    .pipe(gulp.dest(paths.dest + paths.styles.root));
});

// Tâche CONCAT : minification + concaténation JS (destination -> destination)
gulp.task('concat', function () {
  return gulp.src(vendors)
    .pipe($.plumber(onError))
    .pipe($.uglify())
    .pipe($.concat(project.globalJSFile))
    .pipe(gulp.dest(paths.dest + paths.scripts.root));
});

// Tâche CLEAN-JS : supprime les scripts JavaScript inutiles en production (destination -> destination)
gulp.task('clean-js', function () {
  return del([
    paths.dest + paths.scripts.files, // on supprime tous les fichiers JS du répertoire de production
    '!' + paths.dest + paths.scripts.root + project.globalJSFile, // sauf le fichier concaténé final
  ]);
});

// Tâche UNCSS : supprime les styles non utilisés (destination -> destination)
gulp.task('clean-css', function () {
  if (project.plugins.uncss) {
    return gulp.src(paths.dest + paths.styles.css.files)
      .pipe($.plumber(onError))
      .pipe($.uncss({
        html: [paths.dest + paths.html.allFiles],
      }))
      .pipe(gulp.dest(paths.dest + paths.styles.root));
  }
});

// Tâche CRITICAL : critical inline CSS (destination -> destination)
gulp.task('critical', function () {
  if (project.plugins.critical) {
    return gulp.src(paths.dest + paths.html.racine)
      .pipe($.plumber(onError))
      .pipe($.critical(project.configuration.critical))
      .pipe(gulp.dest(paths.dest));
  }
});

// Tâche ZIP : création de fichier .zip du projet
gulp.task('zip', function () {
  var now = new Date(),
      date = now.getFullYear() + '-' + ( now.getMonth() + 1 ) + '-' + now.getDate() + '-' + now.getHours() + 'h' + now.getMinutes(),
      zipName = project.zip.namespace + '-' + project.name + '-' + project.zip.name + '-' + date + '.zip';
  return gulp.src(paths.dest + '/**/')
    .pipe($.zip(zipName))
    .pipe(gulp.dest(paths.root));
});


/* ----------------------------------
 * Tâches principales : récapitulatif
 * ----------------------------------
 */

// Tâche BUILD
gulp.task('build', ['css', 'js', 'html', 'img', 'fonts', 'php', 'misc']);

// Tâche PROD : build + (uncss) + minify + concat + (critical) (dans l'ordre)
gulp.task('prod', gulpSync.sync(['build', 'clean-css', 'minify', 'concat', 'clean-js', 'critical']));

// Tâche BUILD-ZIP : build + création d'un fichier .zip
gulp.task('build-zip', gulpSync.sync(['build', 'zip']));

// Tâche PROD-ZIP : prod + création d'un fichier .zip
gulp.task('prod-zip', gulpSync.sync(['prod', 'zip']));

// Tâche WATCH : surveillance Less, HTML et PHP
gulp.task('watch', function () {
  // si demandé, on créé la configuration du plugin browserSync et on l'initialise
  if (project.plugins.browserSync.status === true) {
    var browserSyncConf; // variable contenant la configuration de browserSync
    if (project.plugins.browserSync.proxyMode === true) {
      // initialisation du mode proxy si demandé
      browserSyncConf = {
        proxy: project.url,
      };
    } else {
      // sinon on initialise le mode standalone
      browserSyncConf = {
        server: {
          baseDir: paths.dest,
        }
      };
    }
    // on initialise le plugin browserSync
    browserSync.init(browserSyncConf);
  }

  gulp.watch([paths.src + paths.styles.less.files], ['css', browserSync.reload]);
  gulp.watch([paths.src + paths.html.allFiles, paths.src + paths.php], ['html', 'php', browserSync.reload]);
  gulp.watch([paths.src + paths.scripts.files], ['js', browserSync.reload]);
});

// Tâche par défaut
gulp.task('default', ['build']);
