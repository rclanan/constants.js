define(['helpers/domConstants'], function(domConstants) {
  'use strict';

  var ids;

  ids = domConstants.buildDomConstantsObject('name', '#');
  ids.$add({});

  return ids;
});
