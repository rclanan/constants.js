var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });

// var del, gulp, rjs, gutil, clean, jshint, karma, pkg, browserSync;
//
// gulp = require('gulp');
// gutil = require('gulp-util');
// clean = require('gulp-clean');
// jshint = require('gulp-jshint');
//
// del = require('del');
// rjs = require('requirejs');
// karma = require('karma').server;
// browserSync = require('browser-sync');
//
// // Error handling
// function handleError(err) {
//   console.log(err.message);
//   this.emit('end');
// }
//
// // Cleaning task
// gulp.task('clean', ['clean-reports', 'clean-dist']);
//
// gulp.task('clean-reports', function(done) {
//   del(['reports/**'], done);
// });
//
// gulp.task('clean-dist', function(done) {
//   del(['dist/**'], done);
// });
//
// // Running livereload server
// gulp.task('server', function() {
//   browserSync({
//     server: {
//       baseDir: './'
//     }
//   });
// });
//
// // JSHint validation
// gulp.task('lint', function() {
//   return gulp.src(['src/**/*.js', '!src/_*.js'])
//   .pipe(jshint('.jshintrc'))
//   .pipe(jshint.reporter('default'));
// });
//
// // Karma testing
// gulp.task('karma', function(done) {
//   karma.start({
//     configFile: __dirname + '/karma.conf.js',
//     singleRun: true,
//   }, done);
// });
//
// gulp.task('karma:all', function(done) {
//   karma.start({
//     configFile: __dirname + '/karma.conf.js',
//     singleRun: true,
//     browsers: ['PhantomJS', 'Chrome', 'ChromeCanary', 'Firefox', 'Opera', 'IE']
//   }, done);
// });
//
// gulp.task('karma:debug', function(done){
//   karma.start({
//     configFile: __dirname + '/karma.conf.js',
//     singleRun: false,
//     browsers: ['Chrome'],
//     flags: ['--debug'],
//     preprocessors: {},
//   }, done);
// });
//
// gulp.task('karma:watch', function(done) {
//   karma.start({
//     configFile: __dirname + '/karma.conf.js'
//   }, done);
// });
//
// // JavaScript compilation
// gulp.task('js', function() {
//   return gulp.src()
// })
//
//
// gulp.task('requirejs', function() {
//   rjs.optimize({
//     // All paths will be relative to this baseUrl.
//     baseUrl: 'src',
//     // Tells r.js that you want everything in one file.
//     out: 'dist/constants.js',
//     // Set paths for modules (shortcut alias for "include").
//     paths: {
//       almond: '../bower_components/almond/almond'
//     },
//     // Include "almond" and "constants" into the final file
//     // specified in "out" property.
//     include: ['almond', 'constants'],
//     // Wrapper for AMD, CommonJS and Browser compatibility.
//     wrap: {
//       startFile: 'src/_start.js',
//       endFile: 'src/_end.js'
//     },
//     // Minify the file.
//     optimize: 'uglify2',
//     // Strip comments.
//     preserveLicenseComments: false,
//     // Add source maps for the original modules.
//     generateSourceMaps: true
//   });
// });
//
//
//
//
//
// gulp.task('watch', ['clean', 'lint', 'karma', 'requirejs'], function() {
//   gulp.watch(['src/**/*.js', '!src/_*.js'], ['lint', 'karma','requirejs']);
// });
//
// gulp.task('default', ['clean', 'karma', 'lint', 'requirejs', 'watch']);
