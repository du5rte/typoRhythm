var gulp             = require('gulp');
var $                = require('gulp-load-plugins')();
var browserSync      = require('browser-sync').create();

// SwalloError
function swallowError (error) {
  console.log(error.toString());
  this.emit('end');
}

// Reload
gulp.task('reload', function() {
  browserSync.reload();
});

// Styles (+Sass +Sourcemaps +Autoprefixer)
gulp.task('styles', function () {
  return gulp.src('./demo/*.{scss,sass}')
    .pipe($.sass().on('error', swallowError))
  .pipe(gulp.dest('./demo'));
});

// Test (+Mocha +True)
gulp.task('test', function () {
  return gulp.src('./tests/*.js', {read: false})
    .pipe($.mocha().on('error', swallowError));
});


// Server (BrowserSync)
gulp.task('server', function () {
  browserSync.init({
    browser: 'google chrome',
    server: {baseDir: './demo'},
    files: ['./demo/*html']
  });
  // Watch
  gulp.watch([
      './typorhythm/**/*.{scss,sass}',
      'tests/**/*.{scss,sass}',
      './demo/**/*.{scss,sass}'
    ], gulp.series('styles', gulp.parallel('reload', 'test'))
  );
});

// Default Tasks
gulp.task('default',
  gulp.series('styles', 'test', 'server')
);
