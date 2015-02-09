'use strict';

var domConstants, predefinedClasses, build;

domConstants = require('../helpers/domConstants');
predefinedClasses = require('../predefined/cssClasses.json');

build = function() {
  var classes = domConstants.build({
    dictionaryName: 'cssClasses',
    selectorSymbol: '.'
  });

  classes.$add(predefinedClasses);

  return classes;
};

module.exports = {
  build:build
};
