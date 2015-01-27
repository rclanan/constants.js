'use strict';
var stringFormatter, valueExistsErrorText;

stringFormatter = require('../../stringFormatter');

valueExistsErrorText = 'given name {givenName} with a value of "{value}" already exists with a name of "{name}"';


function buildValueExistsError(nameValue, nameValueStore) {
  var errorText = stringFormatter.format(valueExistsErrorText,
    {
      givenName: nameValue.name,
      name: nameValueStore.valueNameObject[nameValueStore.getValueKey(nameValue)],
      value: nameValueStore.getValueKey(nameValue)
    });

  return new Error(errorText);
}


function valueExistsErrorCondition(nameValue, nameValueStore) {
  return !!nameValueStore.valueNameMap[nameValue.name];
}

function buildValueExistsErrorDefinition (nameValueStore) {
  return {
    errorCondition: function(nameValue) { return valueExistsErrorCondition(nameValue, nameValueStore); },
    errorBuilder: function(nameValue) { return buildValueExistsError(nameValue, nameValueStore); }
  };
}

module.exports = {
  buildErrorDefinition: buildValueExistsErrorDefinition,
  buildValueExistsError: buildValueExistsError,
  valueExistsErrorCondition: valueExistsErrorCondition
};
