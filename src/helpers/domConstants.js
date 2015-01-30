'use strict';

var nameValueObject, buildDomConstantsObject;

nameValueObject = require('./constantsDictionary');

function buildConstantsObject(domConstantsDefinition) {
  var domConstants, reservedWords;

  reservedWords = domConstantsDefinition.reservedWorlds ? domConstantsDefinition.reservedWorlds : [];
  reservedWords.push('$setFindElementsFunction');

  domConstants = nameValueObject.createNameValueObject({
    reservedWords: reservedWords,
    constantsObjectName: domConstantsDefinition.constantsObjectName,
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

buildDomConstantsObject = function(domConstantsDefinition) {
  var domConstant;

  domConstant = buildConstantsObject(domConstantsDefinition);

  extendAddFunction({
    selectorSymbol: domConstantsDefinition.selectorSymbol,
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
