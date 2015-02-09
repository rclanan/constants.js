'use strict';

var dictionary, predefinedEvents, build;

dictionary = require('dictionary.js');
predefinedEvents = require('../predefined/events.json');

build = function() {
  var events = dictionary.build({
    dictionaryName: 'events'
  });

  events.$add(predefinedEvents);

  return events;
};

module.exports = {
  build:build
};
