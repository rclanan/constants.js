'use strict';

var constantsStoreManager, constantsDictionaryFactory, createDictionary;

constantsStoreManager = require('./constantsDictionaryUtility/constantsStore/constantsStoreManager');
// needs a better name.
constantsDictionaryFactory = require('./constantsDictionaryUtility/constantsDictionaryFactory');

createDictionary = function(options) {
  var constantsStore, getValueKey;

  options.reservedWords = options.reservedWords ? options.reservedWords : [];

  getValueKey = options.valueKeyFunction || function(nameValue) {
    return nameValue.value;
  };

  constantsStore = constantsStoreManager.build({
    getValueKey: getValueKey
  });

  options.reservedWords.forEach(constantsStore.addReservedName);

  return constantsDictionaryFactory.build(constantsStore);
};


module.exports = {
  build: createDictionary
};
