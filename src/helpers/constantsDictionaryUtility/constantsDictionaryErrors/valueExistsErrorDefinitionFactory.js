'use strict';

var stringFormatter, valueExistsErrorText;

stringFormatter = require('../../stringFormatter');

valueExistsErrorText = 'given name {givenName} with a value of "{value}" already exists with a name of "{name}"';

function buildValueExistsError(nameValue, constantsStore) {
  var errorText = stringFormatter.format(valueExistsErrorText,
  {
    givenName: nameValue.name,
    name: constantsStore.valueNameMap[constantsStore.getValueKey(nameValue)],
    value: constantsStore.getValueKey(nameValue)
  });

  return new Error(errorText);
}

function valueExistsErrorCondition(nameValue, constantsStore) {
  return !!constantsStore.valueNameMap[nameValue.value];
}

function buildValueExistsErrorDefinition (constantsStore) {
  return {
    errorName: 'valueExists',
    errorCondition: function(nameValue) { return valueExistsErrorCondition(nameValue, constantsStore); },
    errorBuilder: function(nameValue) { return buildValueExistsError(nameValue, constantsStore); }
  };
}

module.exports = {
  build: buildValueExistsErrorDefinition
};
