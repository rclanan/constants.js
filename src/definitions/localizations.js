define(['helpers/nameValueObject'], function(nameValueObject) {
  'use strict';

  var localization, superAdd;

  function buildLocalizationValue(localizationValue) {
    return {
      name: localizationValue,
      getLocalizedValue: localization.$getLocalizedValue(localizationValue)
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
});
