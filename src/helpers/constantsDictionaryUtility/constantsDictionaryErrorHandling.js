'use strict';

var nameExistsErrorDefinitionFactory, valueExistsErrorDefinitionFactory, reservedNameErrorDefinitionFactory;

nameExistsErrorDefinitionFactory = require('./constantsDictionaryErrors/nameExistsErrorDefinitionFactory');
valueExistsErrorDefinitionFactory = require('./constantsDictionaryErrors/valueExistsErrorDefinitionFactory');
reservedNameErrorDefinitionFactory = require('./constantsDictionaryErrors/reservedNameErrorDefinitionFactory');


function addNameValueObjectErrorHandling(options) {
  var errorHandling = options.errorHandling;

  var reservedNameErrorDefinition = reservedNameErrorDefinitionFactory.buildErrorDefinition(options.constantsObjectName);

  errorHandling.addErrorDefinition(nameExistsErrorDefinitionFactory.buildErrorDefinition(options.constantsStore));
  errorHandling.addErrorDefinition(valueExistsErrorDefinitionFactory.buildErrorDefinition(options.constantsStore));
  errorHandling.addErrorDefinition(reservedNameErrorDefinition);

  errorHandling.addReservedName = reservedNameErrorDefinition.addReservedName;
}


module.exports = {
  addNameValueObjectErrorHandling: addNameValueObjectErrorHandling
};
