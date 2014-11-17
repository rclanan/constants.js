define(['helpers/domConstants'], function(domConstants) {
  'use strict';

  var classes;

  classes = domConstants.buildDomConstantsObject('.');
  classes.$add({
    active: 'active',
    inactive: 'inactive'
  });

  return classes;
});
