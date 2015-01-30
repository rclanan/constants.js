'use strict';
var stringFormatter, nameExistsError;

stringFormatter = require('../../stringFormatter');

nameExistsError = 'name "{name}" is reserved for {type} constants dictionary';


function buildNameReservedError(nameValue, constantsStore) {
  var errorText = stringFormatter.format(nameExistsError,
    {
      name: nameValue.name,
      type: constantsStore.constantsDictionaryName
    });

    return new Error(errorText);
  }


  function nameReservedErrorCondition(nameValue, reservedNames) {
    return !!reservedNames[nameValue.name];
  }

  function addReservedName(name, reservedNames) {
    reservedNames[name] = true;
  }

  function buildReservedNameErrorDefinition (constantsStore) {
    var reservedNames = {};
    return {
      errorName: 'nameReserved',
      errorCondition: function(nameValue) { return nameReservedErrorCondition(nameValue, reservedNames); },
      errorBuilder: function(nameValue) { return buildNameReservedError(nameValue, constantsStore); },
      addReservedName: function(name) { addReservedName(name, reservedNames); }
    };
  }

  module.exports = {
    build: buildReservedNameErrorDefinition
  };
