'use strict';
var stringFormatter, nameExistsError;

stringFormatter = require('../../stringFormatter');

nameExistsError = 'name "{name}" is already in use, value is {value}';


function buildNameExistsError(nameValue, constantsStore) {
  var errorText = stringFormatter.format(nameExistsError,
    {
      name: nameValue.name,
      value: constantsStore.getValueKey(nameValue)
    });

    return new Error(errorText);
  }


  function nameExistsErrorCondition(nameValue, constantsStore) {
    return !!constantsStore.nameValueMap[nameValue.name];
  }

  function buildValueExistsErrorDefinition (constantsStore) {
    return {
      errorName: 'nameExists',
      errorCondition: function(nameValue) { return nameExistsErrorCondition(nameValue, constantsStore); },
      errorBuilder: function(nameValue) { return buildNameExistsError(nameValue, constantsStore); }
    };
  }

  module.exports = {
    build: buildValueExistsErrorDefinition
  };
