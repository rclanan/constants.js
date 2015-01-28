'use strict';

var nameExistsErrorDefinitionFactory, valueExistsErrorDefinitionFactory, reservedNameErrorDefinitionFactory;

nameExistsErrorDefinitionFactory = require('./nameValueErrors/nameExistsErrorDefinitionFactory');
valueExistsErrorDefinitionFactory = require('./nameValueErrors/valueExistsErrorDefinitionFactory');
reservedNameErrorDefinitionFactory = require('./nameValueErrors/reservedNameErrorDefinitionFactory');


function addNameValueObjectErrorHandling(nameValueObjectDefinition) {
  var errorHandling = nameValueObjectDefinition.errorHandling;

  var reservedNameErrorDefinition = reservedNameErrorDefinitionFactory.buildErrorDefinition(nameValueObjectDefinition.constantsObjectName);

  errorHandling.addErrorDefinition(nameExistsErrorDefinitionFactory.buildErrorDefinition(nameValueObjectDefinition.nameValueStore));
  errorHandling.addErrorDefinition(valueExistsErrorDefinitionFactory.buildErrorDefinition(nameValueObjectDefinition.nameValueStore));
  errorHandling.addErrorDefinition(reservedNameErrorDefinition);

  errorHandling.addReservedName = reservedNameErrorDefinition.addReservedName;
}


module.exports = {
  addNameValueObjectErrorHandling: addNameValueObjectErrorHandling
};
