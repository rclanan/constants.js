'use strict';

var dictionary, predefinedAttributes, build;

dictionary = require('dictionary.js');
predefinedAttributes = require('../predefined/attributes').predefined;

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
