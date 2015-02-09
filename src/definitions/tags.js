'use strict';

var dictionary, predefinedTags, build;

dictionary = require('dictionary.js');
predefinedTags = require('../predefined/tags.json');

function buildHtmlTagValue(tagName, baseConstantsObject) {
  var html = '<' + tagName + ' />';

  return {
    html: html,
    name: tagName,
    buildElement: function() {
      return baseConstantsObject.$elementBuilder(html);
    }
  };
}

function extendAddFunction(baseConstantsObject) {
  var superAdd;
  superAdd = baseConstantsObject.$add;

  baseConstantsObject.$add = function(nameValues) {
    // we should be able to simply add the name, img, div, span, then make a tag out of it.
    var givenValues, nameValueNames;

    givenValues = {};
    nameValueNames = Object.keys(nameValues);

    nameValueNames.forEach(function(tagName) {
      givenValues[tagName] = buildHtmlTagValue(nameValues[tagName], baseConstantsObject);
    });

    superAdd(givenValues);
  };

}

function addHtmlTags(tags){
  tags.$add(predefinedTags);
}

build = function() {
  var tags;

  tags = dictionary.build({
    dictionaryName: 'tags',
    reservedNames: ['$elementBuilder', '$setElementBuilderFunction'],
    valueKeyFunction: function(nameValue) {
      return nameValue.value.name;
    }
  });

  tags.$setElementBuilderFunction = function(elementBuilder) {
    tags.$elementBuilder = elementBuilder;
  };

  extendAddFunction(tags);

  addHtmlTags(tags);

  return tags;
};

module.exports = {
  build: build,
  extendAddFunction: extendAddFunction,
  buildHtmlTagValue: buildHtmlTagValue,
  addHtmlTags: addHtmlTags
};
