'use strict';

var domConstants, build;

domConstants = require('./../helpers/domConstants');

build = function() {
  var ids = domConstants.build({
    dictionaryName: 'ids',
    selectorSymbol: '#'
  });

  ids.$add({});

  return ids;
};

module.exports = {
  build:build
};
