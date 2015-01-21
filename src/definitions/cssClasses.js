define(['helpers/domConstants'], function(domConstants) {
  'use strict';

  function buildConstantsObject() {
    var classes = domConstants.buildDomConstantsObject('.');

    classes.$add({
      active: 'active',
      inactive: 'inactive'
    });

    return classes;
  }

  return {
    buildConstantsObject: buildConstantsObject
  };
});
