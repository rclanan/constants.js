'use strict';

var domConstants, predefinedIds, build;

domConstants = require('./../helpers/domConstants');
predefinedIds = require('../predefined/ids.json')

build = function() {
  var ids = domConstants.build({
    dictionaryName: 'ids',
    selectorSymbol: '#'
  });

  ids.$add(predefinedIds);

  return ids;
};

module.exports = {
  build:build
};
