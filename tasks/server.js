import gulp from 'gulp';
var browserSync = require('browser-sync').create();
import htmlInjector from 'bs-html-injector';

gulp.task('server', function() {
  browserSync.use(htmlInjector, {
    files: 'dist/*.html',
  })
  browserSync.init({
    server: {
      baseDir: ['dist', 'src']
    },
    open: false,
    injectChanges: true,
    tunnel: true,
    notify: true
  });
});
