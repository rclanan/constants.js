'use strict';

var dictionary, predefinedAttributes, build;

dictionary = require('dictionary.js');
predefinedAttributes = require('../predefined/attributes.json');

build = function() {
    var attributes = dictionary.build({
      dictionaryName: 'attributes'
    });

    attributes.$add(predefinedAttributes);

  return attributes;
};

module.exports = {
  build: build
};
