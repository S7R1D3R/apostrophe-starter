var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./lib/modules/apostrophe-assets/public/sass/*')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./lib/modules/apostrophe-assets/public/css/'));
});

// RUN : $ gulp sass:watch
gulp.task('sass:watch', function () {
  gulp.watch('./lib/modules/apostrophe-assets/public/sass/*', ['sass']);
});