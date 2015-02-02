'use strict';

var nameExistsErrorDefinitionFactory, valueExistsErrorDefinitionFactory, reservedNameErrorDefinitionFactory;

nameExistsErrorDefinitionFactory = require('./constantsDictionaryErrors/nameExistsErrorDefinitionFactory');
valueExistsErrorDefinitionFactory = require('./constantsDictionaryErrors/valueExistsErrorDefinitionFactory');
reservedNameErrorDefinitionFactory = require('./constantsDictionaryErrors/reservedNameErrorDefinitionFactory');

function addErrorHandling(options) {
  var errorHandling, reservedNameErrorDefinition;

  reservedNameErrorDefinition = reservedNameErrorDefinitionFactory.build(options.constantsStore);

  errorHandling = options.errorHandling;
  errorHandling.addErrorDefinition(nameExistsErrorDefinitionFactory.build(options.constantsStore));
  errorHandling.addErrorDefinition(valueExistsErrorDefinitionFactory.build(options.constantsStore));
  errorHandling.addErrorDefinition(reservedNameErrorDefinition);

  errorHandling.addReservedName = reservedNameErrorDefinition.addReservedName;
}

module.exports = {
  addErrorHandling: addErrorHandling
};
