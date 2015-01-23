'use strict';

var nameValueObject, buildConstantsObject;

nameValueObject = require('../helpers/nameValueObject');

buildConstantsObject = function() {
  var localization, superAdd;

  // instead of linking the function directly, we link a function that calls the function, this allows us
  // to change or set getLocalizedValue at a later time after adding the localization value.
  function buildLocalizationValue(localizationValue) {
    return {
      name: localizationValue,
      getLocalizedValue: function() { return localization.$getLocalizedValue(localizationValue); }
    };
  }

  localization = nameValueObject.createNameValueObject({}, function(nameValue) {
    return nameValue.value.name;
  });

  superAdd = localization.$add;

  localization.$add = function(nameValues) {
    var givenValues, localizationName;

    givenValues = {};

    for (localizationName in nameValues) {
      if (nameValues.hasOwnProperty(localizationName)) {
        givenValues[localizationName] = buildLocalizationValue(nameValues[localizationName]);
      }
    }

    superAdd(givenValues);
  };

  localization.$setGetLocalizedValueFunction = function(getLocalizedValue) {
    localization.$getLocalizedValue = getLocalizedValue;
  };

  localization.$add({});

  return localization;
};

module.exports = {
  buildConstantsObject:buildConstantsObject
};
