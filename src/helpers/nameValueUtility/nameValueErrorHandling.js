'use strict';

var nameExistsErrorDefinitionFactory, valueExistsErrorDefinitionFactory, reservedNameErrorDefinitionFactory;

nameExistsErrorDefinitionFactory = require('./nameValueErrors/nameExistsErrorDefinitionFactory');
valueExistsErrorDefinitionFactory = require('./nameValueErrors/valueExistsErrorDefinitionFactory');
reservedNameErrorDefinitionFactory = require('./nameValueErrors/reservedNameErrorDefinitionFactory');


function addNameValueObjectErrorHandling(nameValueObjectDefinition) {
  var errorHandling = nameValueObjectDefinition.errorHandling;

  var reservedNameErrorDefinition = reservedNameErrorDefinitionFactory(nameValueObjectDefinition.constantsObjectName);

  errorHandling.addErrorDefinition(nameExistsErrorDefinitionFactory(nameValueObjectDefinition.nameValueStore));
  errorHandling.addErrorDefinition(valueExistsErrorDefinitionFactory(nameValueObjectDefinition.nameValueStore));
  errorHandling.addErrorDefinition(reservedNameErrorDefinition);

  errorHandling.addReservedName = reservedNameErrorDefinition.addReservedName;
}


module.exports = {
  addNameValueObjectErrorHandling: addNameValueObjectErrorHandling
};
