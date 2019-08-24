// gulpfile.js
const gulp = require('gulp');
const del = require('del');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', function(done) {
  del.sync(['dist']);
  done();
})

gulp.task('index', function() {
  return gulp.src('src/index.html')
          .pipe(gulp.dest('./dist/'))
})

gulp.task('css', function() {
  return gulp.src('src/sass/input.scss')
          .pipe(sass())
          .pipe(cleanCSS({compatibility: 'ie8'}))
          .pipe(autoprefixer())
          .pipe(gulp.dest('./dist/css/'));
})

gulp.task('imageMin', function() {
  return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/images/"))
})

gulp.task('watch', function() {
  gulp.watch('src/sass/*.scss', gulp.series('css'));
  gulp.watch('src/index.html', gulp.series('index'));
});

gulp.task('build', gulp.series('clean', 'css', 'imageMin', 'index'));
