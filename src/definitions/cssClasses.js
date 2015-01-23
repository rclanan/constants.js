'use strict';

var domConstants, buildConstantsObject;

domConstants = require('../helpers/domConstants');

buildConstantsObject = function() {
  var classes = domConstants.buildDomConstantsObject('.');

  classes.$add({
    active: 'active',
    inactive: 'inactive'
  });

  return classes;
};

module.exports = {
  buildConstantsObject:buildConstantsObject
};
