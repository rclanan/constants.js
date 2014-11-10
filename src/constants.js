define(['definitions/cssClasses',
  'definitions/ids',
  'definitions/attributes',
  'definitions/tags',
  'definitions/events',
  'definitions/localizations'
], function(classes, ids, attributes, tags, events, localizations) {
  'use strict';

  // Object constructor
  var constants = function(obj) {
    return obj;
  };

  // Properties
  constants.VERSION = '0.0.0';

  constants.classes = classes;
  constants.ids = ids;
  constants.attributes = attributes;
  constants.tags = tags;
  constants.events = events;
  constants.localizations = localizations;

  return constants;
});
