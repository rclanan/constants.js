'use strict';

var nameValueObject, buildConstantsObject;

nameValueObject = require('../helpers/nameValueObject');

function buildLocalizationValue(localizationValue, baseConstantsObject) {
  return {
    name: localizationValue,
    getLocalizedValue: function() { return baseConstantsObject.$getLocalizedValue(localizationValue); }
  };
}

function extendAddFunction(baseConstantsObject) {
  var superAdd;

  superAdd = baseConstantsObject.$add;

  baseConstantsObject.$add = function(nameValues) {
    var givenValues, localizationName;

    givenValues = {};

    for (localizationName in nameValues) {
      if (nameValues.hasOwnProperty(localizationName)) {
        givenValues[localizationName] = buildLocalizationValue(nameValues[localizationName], baseConstantsObject);
      }
    }

    superAdd(givenValues);
  };
}

buildConstantsObject = function() {
  var localizations;

  // instead of linking the function directly, we link a function that calls the function, this allows us
  // to change or set getLocalizedValue at a later time after adding the localization value.


  localizations = nameValueObject.createNameValueObject({
    constantsObjectName: 'localizations',
    reservedWords: ['$setGetLocalizedValueFunction', '$getLocalizedValue'],
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
  buildConstantsObject: buildConstantsObject,
  buildLocalizationValue: buildLocalizationValue,
  extendAddFunction: extendAddFunction
};
