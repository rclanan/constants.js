'use strict';

var storeManagerBuilder, dictionaryBuilder, buildDictionary;

storeManagerBuilder = require('./dictionaryUtility/store/storeManagerBuilder');
dictionaryBuilder = require('./dictionaryUtility/dictionaryBuilder');

buildDictionary = function(options) {
  var store, getValueKey;

  options.reservedWords = options.reservedWords ? options.reservedWords : [];

  getValueKey = options.valueKeyFunction || function(nameValue) {
    return nameValue.value;
  };

  store = storeManagerBuilder.build({
    getValueKey: getValueKey
  });

  options.reservedWords.forEach(store.addReservedName);

  return dictionaryBuilder.build(store);
};

module.exports = {
  build: buildDictionary
};
