define([], function() {
  'use strict';

  function buildDomConstantsObject(mainValueName, selectorSymbol) {
    var domConstant, valueNames, selectors;

    function addSelector(name) {
      if (!selectors) {
        selectors = {};
      }

      selectors[name] = selectorSymbol + valueNames[name];
    }

    // nameValues: {name:'', value:''}, can be array of this object.
    function addNames(nameValues) {
      var name;

      for (name in valueNames) {
        if (nameValues.hasOwnProperty(name)) {
          if (name !== 'add') {
            valueNames[name] = nameValues[name];
          } else {
            throw new Error('can not overwrite add');
          }
        }
      }

      addSelector(name);
    }

    domConstant = {};
    selectors = {};
    valueNames = {};

    Object.defineProperty(domConstant, mainValueName, { get: function() { return valueNames;}});
    Object.defineProperty(domConstant, 'selectors', { get: function() { return selectors;}});
    domConstant.add = addNames;

    return domConstant;
  }

  return {
    buildDomConstantsObject: buildDomConstantsObject
  };
});
