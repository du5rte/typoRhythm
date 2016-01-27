var gulp             = require('gulp');
var $                = require('gulp-load-plugins')();
var browserSync      = require('browser-sync').create();

// Error Handler
function errorHandler(error) {
  console.log(error.toString());
  this.emit('end');
}

// Reload
gulp.task('reload', function() {
  browserSync.reload();
});

// Styles
gulp.task('styles', function () {
  return gulp.src('./demo/*.{scss,sass}')
    .pipe($.sass().on('error', errorHandler))
  .pipe(gulp.dest('./demo'))
  .pipe(browserSync.stream({match: '**/*.css'}))
});

// Test (+Mocha +True)
gulp.task('test', function () {
  return gulp.src('./tests/*.js', {read: false})
    .pipe($.mocha().on('error', errorHandler));
});


// Watcher
gulp.task('watch', function () {
  browserSync.init({
    browser: 'google chrome',
    server: './demo',
    files: [
      './demo/*html'
    ]
  })

  gulp.watch(['typorhythm/**/*.{scss}','tests/**/*.{scss}','demo/**/*.{scss,sass}'], gulp.series('styles', 'test'))
});

// Default Tasks
gulp.task('default',
  gulp.series('styles', 'test', 'watch')
);
