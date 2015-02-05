'use strict';

var dictionary, buildDomConstantsObject;

dictionary = require('dictionary');

function buildConstantsObject(options) {
  var domConstants, reservedNames;

  reservedNames = options.reservedNames ? options.reservedNames : [];
  reservedNames.push('$setFindElementsFunction');

  domConstants = dictionary.build({
    reservedNames: reservedNames,
    dictionaryObjectName: options.dictionaryObjectName,
    valueKeyFunction: function(nameValue) {
      return nameValue.value.name;
    }
  });

  return domConstants;
}

function createDomValue(domValue, domConstants, selectorSymbol){
  var selector = selectorSymbol + domValue;

  return {
    name: domValue,
    selector: selector,
    findElements: function() {
      return domConstants.$findElements(selector);
    }
  };
}

function extendAddFunction(addDefinition) {
  var superAdd = addDefinition.constantsBase.$add;

  addDefinition.constantsBase.$add = function(nameValues) {
    var domName, valuesToAdd;

    valuesToAdd = {};

    for (domName in nameValues) {
      if (nameValues.hasOwnProperty(domName)) {
        valuesToAdd[domName] = createDomValue(nameValues[domName], addDefinition.constantsBase, addDefinition.selectorSymbol);
      }
    }

    superAdd(valuesToAdd);
  };
}

buildDomConstantsObject = function(options) {
  var domConstant;

  domConstant = buildConstantsObject(options);

  extendAddFunction({
    selectorSymbol: options.selectorSymbol,
    constantsBase: domConstant
  });

  domConstant.$setFindElementsFunction = function(findElements) {
    domConstant.$findElements = findElements;
  };

  return domConstant;
};

module.exports = {
  buildDomConstantsObject: buildDomConstantsObject,
  extendAddFunction: extendAddFunction,
  createDomValue: createDomValue
};
