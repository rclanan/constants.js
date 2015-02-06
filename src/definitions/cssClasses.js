'use strict';

var domConstants, build;

domConstants = require('../helpers/domConstants');

build = function() {
  var classes = domConstants.build({
    dictionaryName: 'cssClasses',
    selectorSymbol: '.'
  });

  classes.$add({
    active: 'active',
    inactive: 'inactive'
  });

  return classes;
};

module.exports = {
  build:build
};
