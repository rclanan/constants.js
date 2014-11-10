define(['helpers/nameValueObject'], function(nameValueObject) {
  'use strict';

  var localization, superAdd;

  function buildLocalizationRequest(localizationValue) {
    return function() {
      return localization.$localizationValueRequest(localizationValue);
    };
  }

  function buildLocalizationValue(localizationValue) {
    return {
      name: localizationValue,
      getLocalizedValue: buildLocalizationRequest(localizationValue)
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

  localization.$setLocalizationRequest = function(localizationRequestFunction) {
    localization.$localizationValueRequest = localizationRequestFunction;
  };

  localization.$add({});

  return localization;
});
