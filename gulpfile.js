var gulp                 = require('gulp');
var $                    = require('gulp-load-plugins')();
var browserSync          = require('browser-sync').create();
var webpack              = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

// Project Settings
var settings = require('./settings.js')

// Error Handler
function errorHandler(error) {
  console.log(error.toString());
  this.emit('end');
}

// Webpack Compilers
var compiler = webpack(require('./webpack.config.js'))

// Webpack Logger
function webpackLog(done) {
  return function(error, stats) {
    if (error) { throw new errorHandler(error)
    } else {
      console.log(stats.toString({colors: true}))
    }
    if (done) done()
  }
}

// Styles
gulp.task('styles', function () {
  return gulp.src(`${settings.paths.demo}/*.{scss,sass}`)
    .pipe($.sass().on('error', errorHandler))
  .pipe(gulp.dest( settings.paths.demo ))
  .pipe(browserSync.stream({match: '**/*.css'}))
});

// Test Styles (Mocha with True)
gulp.task('test', function () {
  return gulp.src(`${settings.paths.tests}/*.js`, {read: false})
    .pipe($.mocha()
    .on('error', errorHandler))
})

// Webpack Bundler
gulp.task('bundle', function(done) {

  compiler.run(webpackLog(done))

  return gulp.src(`${settings.paths.source}/${settings.name}.js`)
    .pipe($.babel())
    .pipe($.rename( {suffix: '.es5'} ))
    .pipe(gulp.dest( settings.paths.source ))
})

// Watcher
gulp.task('watch', function () {
  browserSync.init({
    browser: 'google chrome',
    server: settings.paths.demo,
    middleware: [
      webpackDevMiddleware(compiler, {
        // noInfo: true,
        stats: { colors: true, chunkModules: false }
      }),
      webpackHotMiddleware(compiler)
    ],
    files: [
      `${settings.paths.demo}/*.html`
    ]
  })

  gulp.watch([`${settings.paths.source}/*.{scss}`, `${settings.paths.demo}/*.{scss,sass}`], gulp.series('styles'))
  gulp.watch(`${settings.paths.tests}/*.{js,scss}`, gulp.series('test'))
});

// Default Tasks
gulp.task('default',
  gulp.series('styles', 'test', settings.development ? 'watch' : 'bundle')
);
