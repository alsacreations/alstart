// Config
var path_less_src = './assets/src/css/*.less';
var path_css_dest = './assets/dist/css/';

var path_js_src = './assets/src/js/*.js';
var path_js_dest = './assets/dist/js/';
var path_js_dest_filename = 'global.min.js';

var path_imgfolders_src = ['./assets/src/img/'];
var path_imgfolders_dest = './assets/dist/img/';

var path_fonts_src = './assets/src/fonts/*';
var path_fonts_dest = './assets/dist/fonts/';

// Requires
var gulp = require('gulp');

// Include plugins
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');
var styledown = require('gulp-styledown');

// behaviour on error
function onError(e) {
  console.log(e);
  this.emit('end');
}

// Common tasks
gulp.task('styles', ['styles-less']);
gulp.task('doallthethings', ['styles','scripts','images']);

// Styles LESS
gulp.task('styles-less', function () {
  return gulp.src(path_less_src)
    .pipe(less())
    .on('error', onError)
    .pipe(autoprefixer())
    .pipe(rename({suffix: '.min'}))
    //.pipe(sourcemaps.init())
    .pipe(minify())
    //.pipe(sourcemaps.write('.', {includeContent: false}))
    .pipe(gulp.dest(path_css_dest));
});

// Scripts
gulp.task('scripts',function() {
  return gulp.src(path_js_src)
    .pipe(uglify())
    .on('error', onError)
    .pipe(concat(path_js_dest_filename))
    .pipe(gulp.dest(path_js_dest));
});

// Fonts déplacées
gulp.task('fonts',function() {
  return gulp.src(path_fonts_src)
    .pipe(gulp.dest(path_fonts_dest));
});

// Images optimisées
gulp.task('images',function() {
  return gulp.src(path_imgfolders_src+'*.{png,jpg,svg}')
    .pipe(imagemin({
      svgoPlugins: [
        {
          removeViewBox: false
        },
        {
          cleanupIDs: false
        }
      ]
    }))
    .on('error', onError)
    .pipe(gulp.dest(path_imgfolders_dest));
});

// Styledown (styleguide)
gulp.task('styleguide', function() {
  gulp.src('./assets/src/css/*.less')
  .pipe(styledown({
    config: 'assets/src/css/config.md',
    filename: 'styleguide.html'
  }))
  .on('error', onError)
  .pipe(gulp.dest('.'));
});

// Watcher
gulp.task('watch', function() {
  /*browserSync.init({
    //proxy: 'http://localhost:5000',
    server: {
        baseDir: './dist/'
    }
  });*/
  gulp.watch([path_less_src], ['styles-less', /*browserSync.reload, */ /*'styleguide'*/ ]);
  gulp.watch([path_js_src], ['scripts']);
});

gulp.task('default', ['doallthethings']);
