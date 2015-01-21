define(['helpers/domConstants'], function(domConstants) {
  'use strict';

  function buildDomConstantsObject() {
    var ids = domConstants.buildDomConstantsObject('#');

    ids.$add({});

    return ids;
  }

  return {
    buildDomConstantsObject: buildDomConstantsObject
  };
});
