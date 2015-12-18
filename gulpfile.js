// Usage Général :
// Tâche "build" : fichiers compilés dans "/dist" (ni minifiés ni concaténés). Le client peut modifier, améliorer et mettre en prod lui-même
// Tâche "prod" : fichiers compilés dans "/dist" (minifiés, concaténés, optimisés, etc.). Le client utilise tel quel.

// Requis
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json
var critical = require('critical').stream; // + critical
var gulpsync = require('gulp-sync')(gulp); // + gulp-sync
var browserSync = require('browser-sync').create(); // + browser-sync
var del = require('del'); // + del

// Variables de chemins
var source = './src/'; // dossier de travail
var destination = './dist/'; // dossier à livrer
var vendor = './src/vendor/'; // dossier des dépendances

var lessFiles = 'assets/css/*.less'; // fichiers LESS à compiler
var jsFiles = 'assets/js/*.js'; // fichiers JavaScript (hors vendor)
var htmlFiles = '{,includes/}*.html'; // fichiers / dossiers HTML à compiler/copier
var phpFiles = '{,includes/}*.php'; // fichiers / dossiers PHP à copier
var fontFiles = 'assets/css/fonts/'; // fichiers de fontes à copier
var imgFiles = 'assets/{,css/}img/*.{png,jpg,jpeg,gif,svg}'; // fichiers images à compresser
var styleguideFiles = 'assets/styleguide/patterns/*.md'; // contenus du styleguide

// dépendances JavaScript dans l'ordre (ajouter jsFiles aussi)
var vendorJS = [
  vendor + 'jquery/dist/jquery.min.js',
  vendor + 'jquery_lazyload/jquery.lazyload.js',
  vendor + 'styledown-skins/dist/Default/styleguide.min.js',
  source + jsFiles
];


// -------------------------------------------
// Tâches de Build : css, html, php, js, img, fonts
// -------------------------------------------
// Les fichiers ne sont ni minifiés ni concaténés

// Tâche "css" = LESS + autoprefixer + CSScomb + beautify (source -> destination)
gulp.task('css', function () {
  return gulp.src(source + 'assets/css/styles.less')
    .pipe(plugins.plumber({
        handleError: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less())
    .pipe(plugins.csscomb())
    .pipe(plugins.cssbeautify({indent: '  '}))
    .pipe(plugins.autoprefixer())
    .pipe(plugins.sourcemaps.write('/maps'))
    .pipe(gulp.dest(destination + 'assets/css/'));
});

// Tâche "html" = includes HTML (source -> destination)
gulp.task('html', function () {
  // lister tous les fichiers HTML
  return gulp.src(source + htmlFiles)
    .pipe(plugins.changed(destination))
    .pipe(plugins.plumber({
        handleError: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
    .pipe(plugins.htmlExtend({
      annotations: false,
      verbose: false
    }))
    .pipe(gulp.dest(destination))
});

// Tâche "php" = simple copie des fichiers PHP (source -> destination)
gulp.task('php', function () {
  return gulp.src(source + phpFiles)
    .pipe(plugins.changed(destination))
    .pipe(gulp.dest(destination));
});

// Tâche "js" = simple copie des fichiers JS (source -> destination)
gulp.task('js', function () {
  // Lister tous les fichiers, penser aux vendor
  return gulp.src(vendorJS)
    .pipe(gulp.dest(destination + 'assets/js/'));
});

// Tâche "img" = images optimisées (source -> destination)
gulp.task('img', function () {
  return gulp.src(source + imgFiles)
    .pipe(plugins.changed(destination + 'assets/'))
    .pipe(plugins.imagemin({
      svgoPlugins: [{
        removeViewBox: false
      }, {
        cleanupIDs: false
      }]
    }))
    .pipe(gulp.dest(destination + 'assets/'));
});

// Tâche "fonts" = simple copie des fontes (source -> destination)
gulp.task('fonts', function () {
  return gulp.src(source + fontFiles + '*')
    .pipe(plugins.changed(destination + fontFiles))
    .pipe(gulp.dest(destination + fontFiles));
});

// Tâche "styleguide" = guide de styles
gulp.task('styleguide', function () {
  gulp.src(source + styleguideFiles)
    .pipe(plugins.plumber({
        handleError: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
    .pipe(plugins.styledown({
      config: source + 'assets/styleguide/config.md',
      filename: 'styleguide.html'
    }))
    .pipe(gulp.dest(destination));
});


// ------------------------------------------------------------------
// Tâches de Prod : (build +) uncss, minify, concat, critical
// ------------------------------------------------------------------

// Tâche "minify" = minification et sourcemaps CSS (destination -> destination)
gulp.task('minify', function () {
  return gulp.src(destination + 'assets/css/styles.css')
    .pipe(plugins.rename({
        suffix: '.min'
      }))
    .pipe(plugins.csso())
    .pipe(gulp.dest(destination + 'assets/css/'));
});

// Tâche "concat" = minification + concaténation JS (destination -> destination)
gulp.task('concat', function () {
  return gulp.src(vendorJS)
    .pipe(plugins.plumber({
        handleError: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
    .pipe(plugins.uglify())
    .pipe(plugins.concat('global.min.js'))
    .pipe(gulp.dest(destination + 'assets/js/'));
});

// Tâche "clean-js" = supprime JS inutiles en prod (destination -> destination)
gulp.task('clean-js', function () {
  return del([
    destination + 'assets/js/*.js',
    // Attention : ne pas supprimer global.min.js
    '!' + destination + 'assets/js/global.min.js'
  ]);
});

// Tâche "uncss" = suppression styles non utilisés (destination -> destination)
gulp.task('uncss', function () {
  return gulp.src(destination + 'assets/css/*.css')
    .pipe(plugins.plumber({
        handleError: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
    .pipe(plugins.uncss({
//   lister tous les fichiers HTML
      html: [destination + htmlFiles]
    }))
    .pipe(gulp.dest(destination + 'assets/css/'));
});

// Tâche "critical" = critical inline CSS (destination -> destination)
 gulp.task('critical', function () {
// Critical ne s'occupe que des fichiers HTML à la racine
  return gulp.src(destination + '*.html')
    .pipe(plugins.plumber({
        handleError: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
    .pipe(critical({
      base: destination,
      inline: true,
      width: 320,
      height: 480,
      minify: true
    }))
    .pipe(gulp.dest(destination));
});

// Tâches, récapitulatif

// Tâche "build"
gulp.task('build', ['css', 'js', 'html', 'img', 'fonts', 'php']);

// Tâche "prod" = Build + (uncss), minify, concat, (critical) (dans l'ordre)
gulp.task('prod', gulpsync.sync(['build', /*'uncss',*/ 'minify', 'concat', 'clean-js', /*'critical'*/]));

// Tâche "watch" = je surveille LESS et HTML et PHP
gulp.task('watch', function () {
  
  // l'adresse par défaut de BrowserSync est http://localhost:3000/
  /*browserSync.init({
    //proxy: 'http://localhost:5000',
    server: {
      baseDir: destination
    }
  });*/
  gulp.watch([source + lessFiles], ['css', browserSync.reload]);
  gulp.watch([source + htmlFiles, source + phpFiles], ['html', 'php']);
  gulp.watch([source + jsFiles], ['js']);
  gulp.watch([source + styleguideFiles], ['styleguide']);
});

// Tâche par défaut
gulp.task('default', ['build']);
