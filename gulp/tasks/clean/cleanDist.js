'use strict';

var gulp,del, config, cleanDistTask;

gulp = require('gulp');
del = require('del');
config = require('../../config');

cleanDistTask = function(done) {
  del([config.dest + '/**'], done);
};

gulp.task('clean-dist', cleanDistTask);

module.exports = cleanDistTask;
