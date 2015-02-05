'use strict';

var dictionary, build;

dictionary = require('dictionary');

function buildLocalizationValue(localizationValue, baseDictionary) {
  return {
    name: localizationValue,
    getLocalizedValue: function() { return baseDictionary.$getLocalizedValue(localizationValue); }
  };
}

function extendAddFunction(baseDictionary) {
  var superAdd;

  superAdd = baseDictionary.$add;

  baseDictionary.$add = function(nameValues) {
    var givenValues;

    givenValues = {};

    nameValues.forEach(function(localizationName) {
      givenValues[localizationName] = buildLocalizationValue(nameValues[localizationName], baseDictionary);
    });

    superAdd(givenValues);
  };
}

build = function() {
  var localizations;

  // instead of linking the function directly, we link a function that calls the function, this allows us
  // to change or set getLocalizedValue at a later time after adding the localization value.
  localizations = dictionary.build({
    dictionaryName: 'localizations',
    reservedNames: ['$setGetLocalizedValueFunction', '$getLocalizedValue'],
    valueKeyFunction: function(nameValue) {
        return nameValue.value.name;
      }
  });

  localizations.$setGetLocalizedValueFunction = function(getLocalizedValue) {
    localizations.$getLocalizedValue = getLocalizedValue;
  };

  extendAddFunction(localizations);

  localizations.$add({});

  return localizations;
};

module.exports = {
  build: build,
  buildLocalizationValue: buildLocalizationValue,
  extendAddFunction: extendAddFunction
};
