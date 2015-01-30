'use strict';

var nameExistsErrorDefinitionFactory, valueExistsErrorDefinitionFactory, reservedNameErrorDefinitionFactory;

nameExistsErrorDefinitionFactory = require('./constantsDictionaryErrors/nameExistsErrorDefinitionFactory');
valueExistsErrorDefinitionFactory = require('./constantsDictionaryErrors/valueExistsErrorDefinitionFactory');
reservedNameErrorDefinitionFactory = require('./constantsDictionaryErrors/reservedNameErrorDefinitionFactory');


function addErrorHandling(options) {
  var errorHandling = options.errorHandling;

  var reservedNameErrorDefinition = reservedNameErrorDefinitionFactory.build(options.constantsStore);

  errorHandling.addErrorDefinition(nameExistsErrorDefinitionFactory.build(options.constantsStore));
  errorHandling.addErrorDefinition(valueExistsErrorDefinitionFactory.build(options.constantsStore));
  errorHandling.addErrorDefinition(reservedNameErrorDefinition);

  errorHandling.addReservedName = reservedNameErrorDefinition.addReservedName;
}


module.exports = {
  addErrorHandling: addErrorHandling
};
