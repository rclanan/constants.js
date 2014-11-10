define(['helpers/domConstants'], function(domConstants) {
  'use strict';

  var classes;

  classes = domConstants.buildDomConstantsObject('names', '.');
  classes.$add({
    active: 'active',
    inactive: 'inactive'
  });

  return classes;
});
