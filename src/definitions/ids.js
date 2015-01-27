'use strict';

var domConstants, buildConstantsObject;

domConstants = require('./../helpers/domConstants');

buildConstantsObject = function() {
  var ids = domConstants.buildDomConstantsObject({
    constantsObjectName: 'ids',
    selectorSymbol: '#'
  });

  ids.$add({});

  return ids;
};

module.exports = {
  buildConstantsObject:buildConstantsObject
};
