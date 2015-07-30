// Config
var path_less_src = './src/assets/css/*.less';
var path_css_dest = './dist/assets/css/';

var path_js_src = './src/assets/js/src/*.js';
var path_js_dest = './dist/assets/js/';
var path_js_dest_filename = 'global.min.js';

var path_svgfolders_src = ['./src/assets/img/svg/'];
var path_jpgpngfolders_src = ['./src/assets/img/'];
var path_svgfolders_dest = ['./dist/assets/img/svg/'];
var path_jpgpngfolders_dest = ['./dist/assets/img/'];

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
// var styledown = require('gulp-styledown');

// Common tasks
gulp.task('styles', ['styles-less']);
gulp.task('doallthethings', ['styles','scripts','images']);

// Styles LESS
gulp.task('styles-less', function () {
  return gulp.src(path_less_src)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(rename({suffix: '.min'}))
    //.pipe(sourcemaps.init())
    .pipe(minify())
    //.pipe(sourcemaps.write('.', {includeContent: false}))
    .pipe(gulp.dest(path_css_dest));
});

// Scripts
gulp.task('scripts',function() {
  return gulp.src(path_js)
    .pipe(uglify())
    .pipe(concat(path_js_dest_filename))
    .pipe(gulp.dest(path_js_dest));
});

// Images optimisées
gulp.task('images',function() {
  var tasks_svg = path_svgfolders_src.map(function(folder) {
    return gulp.src(folder+'*.svg')
      .pipe(imagemin({
        svgoPlugins: [{removeViewBox: false}, {cleanupIDs:false}],
      }))
      .pipe(gulp.dest(path_svgfolders_dest));
  });
  var tasks_jpgpng = path_jpgpngfolders_src.map(function(folder) {
    return gulp.src(folder+'*.{png,jpg}')
      .pipe(imagemin())
      .pipe(gulp.dest(path_jpgpngfolders_dest));
  });
  return merge(tasks_svg,tasks_jpgpng);
});

// Styledown (styleguide)
gulp.task('styleguide', function() {
  gulp.src('./src/assets/css/*.less')
  .pipe(styledown({
    config: 'assets/css/config.md',
    filename: 'styleguide.html'
  }))
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
