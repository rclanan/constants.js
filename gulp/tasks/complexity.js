'use strict';

var gulp, complexity, handleErrors, config, complexityTask;

gulp = require('gulp');
complexity = require('gulp-complexity');
handleErrors = require('../util/handleErrors');
config = require('../config');

complexityTask = function() {
  return gulp.src([config.src + '/**/*.js', '!' + config.src + '/_*.js'])
  .pipe(complexity())
  .on('error', handleErrors);
};

gulp.task('complexity', complexityTask);

module.exports = complexityTask;
