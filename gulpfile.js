/* jshint node: true */
'use strict';

/**
 * Usage général :
 *
 *  - tâche "gulp" : fichiers compilés dans "/dist" (ni minifiés ni concaténés).
 *    Le client peut modifier, améliorer et mettre en prod lui-même.
 *
 *  - tâche "gulp --prod" : fichiers compilés dans "/dist" (minifiés, concaténés,
 *    optimisés, etc.). Le client utilise tel quel.
 */


/**
 * Chargement et initialisation des composants utilisés (browserSync et documentation ne sont chargés ci-après que hors env. de production donc en l'absence de l'argument --prod)
 */
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    argv = require('yargs').argv,
    del = require('del');

/**
 * Tâche (et packages) de production si ajout de l'argument "--prod" (seulement à la fin ?)
 */
var isProduction = argv.prod;
if (isProduction) {
  console.log("VOUS ÊTES EN ENVIRONNEMENT DE PRODUCTION !");
}
var browserSync = (isProduction) ? null : require('browser-sync').create();
var documentation = (isProduction) ? null : require('gulp-documentation');


/**
 * Configuration générale du projet et des composants utilisés
 */
var project = {
  name: 'projectName', // nom du projet, utilisé notamment pour le fichier ZIP
  url: 'http://localhost/', // url du projet, utilisée par browserSync en mode proxy
  zip: {
    namespace: 'bretzel', // préfixe du fichier ZIP
  },
  plugins: { // activation ou désactivation de certains plugins à la carte
    browserSync: {
      status: true, // utilisation du plugin browserSync lors du Watch ?
      proxyMode: false, // utilisation du plugin browserSync en mode proxy (si false en mode standalone)
    },
    babel: false // utilisation de Babel pour transpiler JavaScript
  },
  configuration: { // configuration des différents composants de ce projet
    // Browserslist : chaîne des navigateurs supportés, paramètrage pour Autoprefixer (annoncé : IE11+, last Chr/Fx/Edge/Opera et iOS 9+, Android 5+ ; ici c'est plus large)
    //  ⇒ Couverture (mondiale, pas française) de 94,73% (mai 2017) d'après
    //  ⇒ http://browserl.ist/?q=%3E+1%25%2C+last+2+versions%2C+IE+%3E%3D+10%2C+Edge+%3E%3D+12%2C++Chrome+%3E%3D+42%2C++Firefox+%3E%3D+42%2C+Firefox+ESR%2C++Safari+%3E%3D+8%2C++ios_saf+%3E%3D+8%2C++Android+%3E%3D+4.4
    //  ⇒ http://browserl.ist et > 1%, last 2 versions, IE >= 10, Edge >= 12,  Chrome >= 42,  Firefox >= 42, Firefox ESR,  Safari >= 8,  ios_saf >= 8,  Android >= 4.4
    browsersList: [
      '> 1%',
      'last 2 versions',
      'IE >= 10', 'Edge >= 12',
      'Chrome >= 42',
      'Firefox >= 42', 'Firefox ESR',
      'Safari >= 8',
      'ios_saf >= 8',
      'Android >= 4.4'],
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
  },
};


/**
 * Chemins vers les ressources ciblées
 */
var paths = {
  root: './', // dossier actuel
  src: './src/', // dossier de travail
  dest: './dist/', // dossier destiné à la livraison
  doc: './doc/', // dossier destiné à la documentation
  vendors: './node_modules/', // dossier des dépendances du projet
  assets: 'assets/',
  styles: {
    root: 'assets/css/', // fichier contenant les fichiers CSS & Sass
    css: {
      mainFile: 'assets/css/styles.css', // fichier CSS principal
      files: 'assets/css/*.css', // cible tous les fichiers CSS
    },
    sass: {
      mainFile: 'assets/css/styles.scss', // fichier Sass principal
      styleguideFile: 'assets/css/styleguide.scss', // fichier Sass spécifique au Styleguide
      files: 'assets/css/{,*/}*.scss', // fichiers Sass à surveiller (css/ et tous ses sous-répertoires)
    },
  },
  scripts: {
    root: 'assets/js/', // dossier contenant les fichiers JavaScript
    files: 'assets/js/*.js', // fichiers JavaScript (hors vendor)
    mainFile: 'global.min.js', // nom du fichier JS après concaténation
    styleguideFiles: 'assets/js/styleguide-scroll.js', // fichier(s) JS spécifiques au styleguide
    destStyleguideFiles: 'styleguide.min.js', // nom du fichier JS que chargera spécifiquement le styleguide (contiendra son ou ses scritps concaténés et minifiés)
  },
  html: {
    racine: '*.html', // fichiers & dossiers HTML à compiler / copier à la racine uniquement
    allFiles: '{,includes/}*.html', // fichiers & dossiers HTML à compiler / copier à la racine et dans le dossier includes/
  },
  styleguide: {
    config: 'assets/styleguide/config.md', // fichier config du styleguide
    files: 'assets/styleguide/patterns/*.md', // fichiers .MD du styleguide
    title: "Styleguide HTML CSS", // value for the title element in the head of the Styleguide
  },
  php: '{,includes/}*.php', // fichiers & dossiers PHP à copier
  fonts: 'assets/css/fonts/', // fichiers typographiques à copier,
  images: 'assets/{,css/}img/{,*/}*.{png,jpg,jpeg,gif,svg}', // fichiers images à compresser
  misc: '*.{ico,htaccess,txt}', // fichiers divers à copier
  maps: '/maps', // fichiers provenant de sourcemaps
};


/**
 * Ressources JavaScript utilisées par ce projet (vendors + scripts JS spécifiques)
 */
 var jsFiles = [
   // paths.vendors + 'jquery/dist/jquery.min.js',
   // paths.vendors + 'styledown-skins/dist/Default/styleguide.min.js',
   // paths.vendors + 'swiper/dist/js/swiper.min.js',
   paths.src + paths.scripts.files,
   '!' + paths.src + paths.scripts.styleguideFiles, // exclusion des JS spécifiques au styleguide de la liste construite précédemment
 ];
// Spécifique au styleguide
var jsStyleguideFiles = [
  paths.vendors + 'styledown-skins/dist/Default/styleguide.min.js',
  paths.src + paths.scripts.styleguideFiles,
];
// Copie du vendor jQuery (hors des scripts du projet et du styleguide). Ne sera pas concaténé même en env. de prod
var jqueryFile = [
  paths.vendors + 'jquery/dist/jquery.min.js',
];


/**
 * Tâche de gestion des erreurs à la volée
 */
var onError = {
  errorHandler: function (err) {
    console.log(err);
    this.emit('end');
  }
};

/* ------------------------------------------------
 * Tâches de Build : css, html, php, js, img, fonts
 * ------------------------------------------------
 */

// Tâche CSS : Sass + Autoprefixer + CSScomb + beautify + minify (si prod)
// (1/2) Pour LA CSS du projet
gulp.task('css:main', () => {
  return gulp.src(paths.src + paths.styles.sass.mainFile)
    .pipe($.plumber(onError))
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.csscomb())
    .pipe($.cssbeautify(project.configuration.cssbeautify))
    .pipe($.autoprefixer( {browsers: project.configuration.browsersList} ))
    // En dév, on évite d'écrire 2 fois le même fichier (ni renommage ni CSSO en dév et pourtant on écrit du CSS à 2 reprises… identique avec le même nom)
    // En env. de prod, on écrit une CSS non-minifiée puis avec le suffixe .min.css une CSS minifiée
    .pipe($.if(!isProduction, gulp.dest(paths.dest + paths.styles.root)))
    .pipe($.if(isProduction, $.rename({suffix: '.min'})))
    .pipe($.if(isProduction, $.csso()))
    // En env de prod, pas de sourcemaps. En dév, les sourcemaps concernent la CSS non minifiée
    .pipe($.if(!isProduction, $.sourcemaps.write(paths.maps)))
    .pipe(gulp.dest(paths.dest + paths.styles.root));
});
// (2/2) Styles spécifiques au styleguide qui n'ont pas à figurer dans les pages du site (on se dispense de sourcemap ou de minification ici…)
gulp.task('css:guide', () => {
  return gulp.src(paths.src + paths.styles.sass.styleguideFile)
    .pipe($.plumber(onError))
    .pipe($.sass())
    .pipe($.csscomb())
    .pipe($.cssbeautify(project.configuration.cssbeautify))
    .pipe($.autoprefixer( {browsers: project.configuration.browsersList} ))
    .pipe(gulp.dest(paths.dest + paths.styles.root));
});
gulp.task('css', gulp.series('css:main', 'css:guide'));


// Tâche HTML : includes HTML
gulp.task('html', () => {
  return gulp.src(paths.src + paths.html.allFiles)
    .pipe($.plumber(onError))
    .pipe($.htmlExtend(project.configuration.htmlExtend))
    .pipe(gulp.dest(paths.dest));
});

// Tâche PHP : simple copie des fichiers PHP (s'il y en a)
gulp.task('php', () => {
  return gulp.src(paths.src + paths.php)
    .pipe(gulp.dest(paths.dest));
});

// Tâches JS : copie des fichiers JS et vendor + babel (+ concat et uglify dans global.min.js si prod)
//             pour le projet puis ce qui est spécifique au Styleguide (évite d'inclure
//             ces derniers dans global.min.js)
//             puis le vendor jQuery
gulp.task('js:main', () => {
  return gulp.src(jsFiles)
    .pipe($.plumber(onError))
    .pipe($.if(project.plugins.babel,$.babel({presets:['env']})))
    .pipe(gulp.dest(paths.dest + paths.scripts.root))
    .pipe($.if(isProduction, $.concat(paths.scripts.mainFile)))
    .pipe($.if(isProduction, $.uglify()))
    .pipe(gulp.dest(paths.dest + paths.scripts.root));
});
gulp.task('js:guide', () => {
  return gulp.src(jsStyleguideFiles)
    .pipe($.plumber(onError))
    .pipe($.concat(paths.scripts.destStyleguideFiles))
    .pipe($.uglify())
    .pipe(gulp.dest(paths.dest + paths.scripts.root))
});
// Copie du vendor jQuery 3.x
gulp.task('js:jquery', () => {
  return gulp.src(jqueryFile)
    .pipe($.plumber(onError))
    // .pipe($.uglify()) déjà minifié
    .pipe(gulp.dest(paths.dest + paths.scripts.root))
});
gulp.task('js', gulp.series('js:main', 'js:guide', 'js:jquery'));

// Tâche IMG : optimisation des images
gulp.task('img', () => {
  return gulp.src(paths.src + paths.images)
    .pipe($.changed(paths.dest + paths.assets))
    .pipe($.imagemin(project.configuration.imagemin))
    .pipe(gulp.dest(paths.dest + paths.assets));
});

// Tâche FONTS : copie des fichiers typographiques
gulp.task('fonts', () => {
  return gulp.src(paths.src + paths.fonts + '**/*')
    .pipe($.changed(paths.dest + paths.fonts))
    .pipe(gulp.dest(paths.dest + paths.fonts));
});

// Tâche MISC : copie des fichiers divers depuis la source vers la destination, y compris les .dotfiles
gulp.task('misc', () => {
  var dottedFiles = { dot: true };
  return gulp.src(paths.src + paths.misc, dottedFiles)
    .pipe($.changed(paths.dest))
    .pipe(gulp.dest(paths.dest));
});


/* ------------------------------------------------
 * Tâches autonomes : styleguide, zip, clean, doc
 * ------------------------------------------------
 */

// Tâche STYLEGUIDE : création automatique d'un guide des styles
gulp.task('styleguide:styledown', () => {
  return gulp.src(paths.src + paths.styleguide.files)
    .pipe($.plumber(onError))
    .pipe($.philippevay.styledown({
      config: paths.src + paths.styleguide.config,
      template:
        [
          "<!doctype html>",
          "<html lang='fr'>",
          "<head>",
          "<meta charset='utf-8'>",
          "<title>" + paths.styleguide.title + "</title>",
          "</head>",
          "<body>",
          "</body>",
          "</html>"
        ].join("\n"),
      filename: 'styleguide.html'
    }))
    .pipe(gulp.dest(paths.dest));
});

// Tâche DOC : documentation JavaScript du projet vers Markdown
gulp.task('doc-md', () => {
  return gulp.src(paths.src+'**/*.js')
    .pipe(documentation('md'))
    .pipe(gulp.dest('paths.doc'));
});

// Tâche DOC : documentation JavaScript du projet vers HTML
gulp.task('doc-html', () => {
  return gulp.src(paths.src+'**/*.js')
    .pipe(documentation('html'))
    .pipe(gulp.dest(paths.doc));
});

// Tâche ARCHIVE (voir ZIP ci-dessous) : création de fichier .zip du projet
gulp.task('archive', () => {
  if(argv.prod) {
    project.zip.name = 'prod';
  } else {
    project.zip.name = 'build';
  }
  var now = new Date(),
      date = now.getFullYear() + '-' + ( now.getMonth() + 1 ) + '-' + now.getDate() + '-' + now.getHours() + 'h' + now.getMinutes(),
      zipName = project.zip.namespace + '-' + project.name + '-' + project.zip.name + '-' + date + '.zip';
  return gulp.src(paths.dest + '/**/')
    .pipe($.zip(zipName))
    .pipe(gulp.dest(paths.root));
});

// Tâche CLEAN : supprime les fichiers CSS et JavaScript inutiles en production
gulp.task('clean', () => {
  return del([
    paths.doc, // on supprime la documentation
    paths.dest + paths.scripts.files, // on supprime tous les fichiers JS de production
    paths.dest + paths.styles.css.files, // on supprime tous les fichiers CSS de production
    '!' + paths.dest + paths.scripts.root + paths.scripts.mainFile, // sauf les JS concaténés finaux
    '!' + paths.dest + paths.styles.root + 'styles.min.css', // sauf les CSS concaténés finaux
  ]);
});

// Tâche d'upload vers AWS S3 (facultatif)
gulp.task('s3', () => {

  // Fichier contenant les identifiants d'accès
  const awsCredentialsFile = 'aws-credentials.json';

  // Dossier du bucket dans lequel synchroniser
  const s3_dir = '';

  var fs = require('fs');
  var awspublish;

  if(!fs.existsSync(awsCredentialsFile)) {
    console.error('Le fichier '+awsCredentialsFile+' est absent. Consultez la documentation pour le créer.');
    return false;
  }
  try {
    awspublish = require('gulp-awspublish');
  } catch (e) {
    console.error('Le module gulp-awspublish est absent. Consultez la documentation pour l\'installer :');
    console.error('npm install --save-dev gulp-awspublish');
    throw e;
    return false;
  }

  var credentials = JSON.parse(fs.readFileSync(awsCredentialsFile, 'utf8'));
  var publisher = awspublish.create(credentials);

  // Custom headers
  var headers = {
    // 'Cache-Control': 'max-age=315360000, no-transform, public'
    // ...
  };

  return gulp.src(paths.dest+'**')
    // gzip, en-t$ete Content-Encoding et extension .gz
    // .pipe(awspublish.gzip({ ext: '.gz' }))

    // publisher ajoute les en-têtes Content-Length, Content-Type et headers (déclaré avant)
    // Si rien d'autre n'est indiqué, x-amz-acl est à public-read par défaut
    .pipe(publisher.publish(headers))

    // Cache pour accélérer les syncs successifs
    .pipe(publisher.cache())

    // Sync (envoie, et efface les fichiers distants si nécessaire)
    .pipe(publisher.sync(s3_dir))
    // Variante : On ignore *.pdf pour ne pas les effacer du bucket lors de la sync
    // .pipe(publisher.sync(s3_dir, [/\.pdf$/]))

    // Informations à la console
    .pipe(awspublish.reporter());
});

/* ----------------------------------
 * Tâches principales : récapitulatif
 * ----------------------------------
 */

// Tâche BUILD : tapez "gulp" ou "gulp build"
gulp.task('build', gulp.series('css', 'js', 'html', 'img', 'fonts', 'php', 'misc'));

// Tâche PROD : tapez "gulp build --prod"

// Tâche STYLEGUIDE : (tapez "gulp styleguide")
gulp.task('styleguide', gulp.series('css', 'styleguide:styledown', 'js:guide', 'js:jquery'));

// Tâche ZIP : (tapez "gulp zip" ou "gulp zip --prod")
gulp.task('zip', gulp.series('build', 'archive'));

// Tâche WATCH : surveillance Sass, HTML et PHP
gulp.task('watch', () => {
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
        /* startPath: "url/index.html", */
        server: {
          baseDir: paths.dest,
        }
      };
    }
    // on initialise le plugin browserSync
    browserSync.init(browserSyncConf);
  }

  // Watch des _partials Scss, du code HTML, du JS et des includes du styleguide
  gulp.watch([paths.styles.sass.files], {cwd: paths.src}, gulp.series('css', browserSync.reload));
  gulp.watch([paths.html.allFiles, paths.php], {cwd: paths.src}, gulp.series('html', 'php', browserSync.reload));
  gulp.watch([paths.scripts.files], {cwd: paths.src}, gulp.series('js', browserSync.reload));
  gulp.watch([paths.styleguide.files], {cwd: paths.src}, gulp.series('styleguide:styledown', browserSync.reload));
});

// Tâche par défaut
gulp.task('default', gulp.series('build'));
