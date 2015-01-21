define([
  'definitions/cssClasses',
  'definitions/ids',
  'definitions/attributes',
  'definitions/tags',
  'definitions/events',
  'definitions/localizations'
], function(classes, ids, attributes, tags, events, localizations) {
  'use strict';

  function buildConstantsObject() {
    return {
      classes: classes.buildConstantsObject(),
      ids: ids.buildConstantsObject(),
      attributes: attributes.buildConstantsObject(),
      tags: tags.buildConstantsObject(),
      events: events.buildConstantsObject(),
      localizations: localizations.buildConstantsObject()
    };
  }

  return {
    buildConstantsObject: buildConstantsObject
  };
});
