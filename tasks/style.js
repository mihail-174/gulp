import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import errorHandler from 'gulp-plumber-error-handler';
import gulpIf from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';

gulp.task('style', () => {
  gulp.src('src/components/**/*.scss')
    .pipe(plumber({
      errorHandler: errorHandler(`Ошибка в \'Стилях\' task`)
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      // outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      browsers: ['last 200 versions'],
      cascade: true
    }))
    .pipe(rename({
      dirname: '.'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/css'))
});
