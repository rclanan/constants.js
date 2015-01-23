'use strict';

var format, createNameValueObject, nameExistsError, valueExistsError;

format = require('./format');

nameExistsError = 'name "{name}" is already in use, value is {value}';
valueExistsError = 'given name {givenName} with a value of "{value}" already exists with a name of "{name}"';

createNameValueObject = function(addErrors, valueKeyFunction) {
  var nameValueObject, valueNameObject, getValueKey;

  getValueKey = valueKeyFunction || function(nameValue) {
    return nameValue.value;
  };

  if (!addErrors) {
    addErrors = {};
  }

  addErrors.add = 'can not overwrite add';

  nameValueObject = {};
  valueNameObject = {};

  function canAdd(nameValue) {
    return !addErrors[nameValue.name] && !nameValueObject[nameValue.name] && !valueNameObject[nameValue.value];
  }

  function addNameValue(nameValue) {
    nameValueObject[nameValue.name] = nameValue.value;
    valueNameObject[getValueKey(nameValue)] = nameValue.name;
  }

  function buildAddErrorsError(nameValue) {
    return new Error(addErrors[nameValue.name]);
  }

  function buildNameExistsError(nameValue) {
    return new Error(format(nameExistsError, nameValue));
  }

  function buildValueExistsError(nameValue) {
    return new Error(format(valueExistsError,
                    {givenName: nameValue.name,
                      name: valueNameObject[getValueKey(nameValue)],
                      value: getValueKey(nameValue)
                    }));
  }

  function throwRelevantError(nameValue) {
    if (addErrors[nameValue.name]) {
      throw buildAddErrorsError(nameValue);
    }

    if (nameValueObject[nameValue.name]) {
      throw buildNameExistsError(nameValue);
    }

    if (valueNameObject[nameValue.name]) {
      throw buildValueExistsError(nameValue);
    }
  }

  function add(nameValues) {
    var name, nameValue;

    for (name in nameValues) {
      nameValue = {name: name, value: nameValues[name]};

      if (nameValues.hasOwnProperty(name)) {
        if (canAdd(nameValue)) {
          addNameValue({name: name, value: nameValues[name]});
        } else {
          throwRelevantError(nameValue);
        }
      }
    }
  }

  nameValueObject.$add = add;

  return nameValueObject;
};

module.exports = createNameValueObject;
