define(['helpers/nameValueObject'], function(nameValueObject) {
  'use strict';

  function buildDomConstantsObject(selectorSymbol) {
    var domConstant, superAdd, createDomValue;

    domConstant = nameValueObject.createNameValueObject({}, function(nameValue) {
      return nameValue.value.name;
    });

    superAdd = domConstant.$add;

    createDomValue = function(domValue) {
      var selector = selectorSymbol + domValue;

      return {
        name: domValue,
        selector: selector,
        findElements: function() {
          return domConstant.$findElements(selector);
        }
      };
    };

    domConstant.$add = function(nameValues) {
      var domName, valuesToAdd;

      valuesToAdd = {};

      for (domName in nameValues) {
        if (nameValues.hasOwnProperty(domName)) {
          valuesToAdd[domName] = createDomValue(nameValues[name]);
        }
      }

      superAdd(valuesToAdd);
    };

    domConstant.$setFindElementsFunction = function(findElements) {
      domConstant.$findElements = findElements;
    };

    return domConstant;
  }

  return {
    buildDomConstantsObject: buildDomConstantsObject
  };
});
