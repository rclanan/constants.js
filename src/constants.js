'use strict';

var cssClasses, ids, attributes, tags, events, localizations, buildConstantsObject;

cssClasses = require('./definitions/cssClasses');
ids = require('./definitions/ids');
attributes = require('./definitions/attributes');
tags = require('./definitions/tags');
events = require('./definitions/events');
localizations = require('./definitions/localizations');

buildConstantsObject = function() {
    return {
      classes: cssClasses.buildConstantsObject(),
      ids: ids.buildConstantsObject(),
      attributes: attributes.buildConstantsObject(),
      tags: tags.buildConstantsObject(),
      events: events.buildConstantsObject(),
      localizations: localizations.buildConstantsObject()
    };
};

module.exports = {
  buildConstantsObject: buildConstantsObject
};
