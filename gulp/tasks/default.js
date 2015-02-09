'use strict';

var gulp = require('gulp');

gulp.task('default', ['cleanify', 'jslint', 'karma:all', 'complexity', 'uglifyJs']);
