define(['helpers/domConstants'], function(domConstants) {
  'use strict';

  var ids;

  ids = domConstants.buildDomConstantsObject('#');
  ids.$add({});

  return ids;
});
