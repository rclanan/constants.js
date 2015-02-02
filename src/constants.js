'use strict';

var cssClasses, ids, attributes, tags, events, localizations, build;

cssClasses = require('./definitions/cssClasses');
ids = require('./definitions/ids');
attributes = require('./definitions/attributes');
tags = require('./definitions/tags');
events = require('./definitions/events');
localizations = require('./definitions/localizations');

build = function() {
    return {
      classes: cssClasses.build(),
      ids: ids.build(),
      attributes: attributes.build(),
      tags: tags.build(),
      events: events.build(),
      localizations: localizations.build()
    };
};

module.exports = {
  build: build
};
