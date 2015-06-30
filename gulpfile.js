// Requires
var gulp = require('gulp');

// Include plugins
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
// var styledown = require('gulp-styledown');

// Common tasks
gulp.task('styles', ['styles-less']);
gulp.task('doallthethings', ['styles','scripts']);

// Styles LESS
gulp.task('styles-less', function () {
  return gulp.src('./src/assets/css/*.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(rename({suffix: '.min'}))
    //.pipe(sourcemaps.init())
    .pipe(minify())
    //.pipe(sourcemaps.write('.', {includeContent: false}))
    .pipe(gulp.dest('./dist/assets/css/'));
});


// Scripts
gulp.task('scripts',function() {
  return gulp.src('./src/assets/js/src/*.js')
    .pipe(uglify())
    .pipe(concat('global.min.js'))
    .pipe(gulp.dest('./dist/assets/js/'));
});

/*
// Styledown (styleguide)
gulp.task('styleguide', function() {
  gulp.src('./src/assets/css/*.less')
  .pipe(styledown({
    config: 'assets/css/config.md',
    filename: 'styleguide.html'
  }))
  .pipe(gulp.dest('.'));
});
*/

// Watcher
gulp.task('watch', function() {
  browserSync({
    proxy: 'http://localhost:5000'
  });
  gulp.watch(['./src/assets/css/*.less'], ['styles-less', browserSync.reload /*,'styleguide'*/ ]);
  gulp.watch(['./src/assets/js/src/*.js'], ['scripts']);
});

gulp.task('default', ['doallthethings']);
