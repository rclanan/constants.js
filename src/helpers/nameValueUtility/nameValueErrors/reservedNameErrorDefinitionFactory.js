'use strict';
var stringFormatter, nameExistsError;

stringFormatter = require('../../stringFormatter');

nameExistsError = 'name "{name}" is reserved for {type} constants object';


function buildNameReservedError(nameValue, constantsObjectName) {
  var errorText = stringFormatter.format(nameExistsError,
    {
      name: nameValue.name,
      type: constantsObjectName
    });

    return new Error(errorText);
  }


  function nameReservedErrorCondition(nameValue, reservedNames) {
    return !!reservedNames[nameValue.name];
  }

  function addReservedName(name, reservedNames) {
    reservedNames[name] = true;
  }

  function buildValueExistsErrorDefinition (constantsObjectName) {
    var reservedNames = {};
    return {
      errorCondition: function(nameValue) { return nameReservedErrorCondition(nameValue, reservedNames); },
      errorBuilder: function(nameValue) { return buildNameReservedError(nameValue, constantsObjectName); },
      addReservedName: function(name) { addReservedName(name, reservedNames); }
    };
  }

  module.exports = {
    buildErrorDefinition: buildValueExistsErrorDefinition,
    buildNameReservedError: buildNameReservedError,
    nameReservedErrorCondition: nameReservedErrorCondition,
    addReservedName: addReservedName
  };
