'use strict';

var gulp, config, size, uglify, uglifyTask, pkg, getBundleName, rename;

gulp = require('gulp');
config = require('../config').production;
size = require('gulp-filesize');
uglify = require('gulp-uglify');
rename = require('gulp-rename');
pkg = require('../../package.json');

getBundleName = function() {
  var version, name;

  version = pkg.version;
  name = pkg.name;

  return name + '.' + version + '.' + 'min';
};

uglifyTask = function() {
  return gulp.src(config.jsSrc)
  .pipe(uglify())
  .pipe(rename(function(path) {
    path.basename = path.basename + '.' + pkg.version + '.' + 'min';
  }))
  .pipe(gulp.dest(config.dest))
  .pipe(size());
};

gulp.task('uglifyJs', ['browserify'], uglifyTask);

module.exports = uglifyTask;
