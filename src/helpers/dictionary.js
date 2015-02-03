'use strict';

var storeManager, dictionaryBuilder, buildDictionary;

storeManager = require('./dictionaryUtility/constantsStore/storeManager');
dictionaryBuilder = require('./dictionaryUtility/dictionaryBuilder');

buildDictionary = function(options) {
  var constantsStore, getValueKey;

  options.reservedWords = options.reservedWords ? options.reservedWords : [];

  getValueKey = options.valueKeyFunction || function(nameValue) {
    return nameValue.value;
  };

  constantsStore = storeManager.build({
    getValueKey: getValueKey
  });

  options.reservedWords.forEach(constantsStore.addReservedName);

  return dictionaryBuilder.build(constantsStore);
};

module.exports = {
  build: buildDictionary
};
