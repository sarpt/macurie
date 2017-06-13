const browserify = require('gulp-browserify');
const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('uglify-es');
const composer = require('gulp-uglify/composer');

// uses uglify-es instead of normal uglify, because the lattter cannot (yet) parse ES6
const minify = composer(uglify, console);

gulp.task('browserify', () => {
  gulp.src(['./frontend/macurie.main.js'], { read: false })
    .pipe(browserify({
      // debug: false,
    }))
    .pipe(minify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./public/'));
});

gulp.task('move-views', () => {
  gulp.src(['./frontend/**/*.html'])
    .pipe(gulp.dest('./public/'));
});

gulp.task('frontend-prepare', () => {
  gulp.start(['browserify', 'move-views']);
});
