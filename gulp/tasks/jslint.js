'use strict';

var gulp, jshint, handleErrors, config, lintTask;

gulp = require('gulp');
jshint = require('gulp-jshint');
handleErrors = require('../util/handleErrors');
config = require('../config');

lintTask = function() {
  return gulp.src([config.src + '/**/*.js', '!' + config.src + '/_*.js'])
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter('jshint-stylish'))
  .on('error', handleErrors);
};

gulp.task('jslint', lintTask);

module.exports = lintTask;
