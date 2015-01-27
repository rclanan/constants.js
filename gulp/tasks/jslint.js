'use strict';

var gulp, jshint, handleErrors, config, lintTask;

gulp = require('gulp');
jshint = require('gulp-jshint');
handleErrors = require('../util/handleErrors');
config = require('../config');

lintTask = function(done) {
  return gulp.src(config.src + '/constants.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'), done)
  .on('error', handleErrors);
};

gulp.task('jslint', lintTask);

module.exports = lintTask;
