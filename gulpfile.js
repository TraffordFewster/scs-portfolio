var gulp = require('gulp')
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('css', function () {
  gulp.src('./css/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('run', gulp.parallel("sass", "css"));

gulp.task('watch', function() {
    gulp.watch('./scss/*.scss', gulp.parallel('sass'));
    gulp.watch('./css/*.css', gulp.parallel('css'));
});

gulp.task('default', gulp.parallel("run", "watch"));