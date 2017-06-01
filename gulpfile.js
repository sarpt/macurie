"use strict";
const gulp = require('gulp');
const ts = require('gulp-typescript');

gulp.task('default', function() {
  return gulp.start(['compile']);
});

gulp.task('compile', function() {
  return gulp.src('./src/**/*.ts')
  .pipe(ts("./tsconfig.json"))
  .pipe(gulp.dest('./server'));
});
