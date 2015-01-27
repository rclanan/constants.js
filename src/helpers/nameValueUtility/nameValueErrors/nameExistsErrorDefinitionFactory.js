'use strict';
var stringFormatter, nameExistsError;

stringFormatter = require('../../stringFormatter');

nameExistsError = 'name "{name}" is already in use, value is {value}';


function buildNameExistsError(nameValue, nameValueStore) {
  var errorText = stringFormatter.format(nameExistsError,
    {
      name: nameValue.name,
      value: nameValueStore.getValueKey(nameValue)
    });

    return new Error(errorText);
  }


  function nameExistsErrorCondition(nameValue, nameValueStore) {
    return !!nameValueStore.nameValueMap[nameValue.name];
  }

  function buildValueExistsErrorDefinition (nameValueStore) {
    return {
      errorCondition: function(nameValue) { return nameExistsErrorCondition(nameValue, nameValueStore); },
      errorBuilder: function(nameValue) { return buildNameExistsError(nameValue, nameValueStore); }
    };
  }

  module.exports = {
    buildErrorDefinition: buildValueExistsErrorDefinition,
    buildNameExistsError: buildNameExistsError,
    nameExistsErrorCondition: nameExistsErrorCondition
  };
