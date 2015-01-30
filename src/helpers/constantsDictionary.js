'use strict';

var constantsStoreFactory, constantsDictionaryFactory, createDictionary;

constantsStoreFactory = require('./constantsDictionaryUtility/constantsStoreFactory');
// needs a better name.
constantsDictionaryFactory = require('./constantsDictionaryUtility/constantsDictionaryFactory');

// consider calling this a "dictionary". NameValueDictionary. beats the hell out of nameValueObject.
createDictionary = function(options) {
  var constantsStore, getValueKey;

  options.reservedWords = options.reservedWords ? options.reservedWords : [];

  getValueKey = options.valueKeyFunction || function(nameValue) {
    return nameValue.value;
  };

  constantsStore = constantsStoreFactory.build({
    getValueKey: getValueKey
  });

  options.reservedWords.forEach(constantsStore.addReservedName);

  return constantsDictionaryFactory.build(constantsStore);
};


module.exports = {
  build: createDictionary
};
