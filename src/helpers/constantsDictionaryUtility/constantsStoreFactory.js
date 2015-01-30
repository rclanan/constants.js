'use strict';

var errorHandlingFactory, constantsDictionaryErrorHandling;

errorHandlingFactory = require('./errorHandlingFactory');
constantsDictionaryErrorHandling = require('./constantsDictionaryErrorHandling');

// consider breaking this out. it may be too complex and do too many things.

function addNameValue(nameValue, constantsStore) {
  var nameValueMap, valueNameMap;

  nameValueMap = constantsStore.nameValueMap;
  valueNameMap = constantsStore.valueNameMap;

  nameValueMap[nameValue.name] = nameValue.value;
  valueNameMap[constantsStore.getValueKey(nameValue)] = nameValue.name;
}

function add(nameValues, constantsStore) {
  var name, nameValue;

  for (name in nameValues) {
    nameValue = {name: name, value: nameValues[name]};

    if (nameValues.hasOwnProperty(name)) {
      constantsStore.errorHandling.throwRelevantError(nameValue);
      addNameValue({name: name, value: nameValues[name]}, constantsStore);
    }
  }
}

function addNameBaseValueErrorHandling(options) {
  constantsDictionaryErrorHandling.addErrorHandling({
    constantsStore: options.store,
    constantsObjectName: options.constantsObjectName,
    errorHandling: options.errorHandling
  });

  options.errorHandling.addReservedName('$add');
}

function buildStoreBase(nameValueStoreDefinition) {
  var storeBase;

  storeBase = {
    nameValueMap: {},
    valueNameMap: {},
    getValueKey: nameValueStoreDefinition.getValueKey,
    errorHandling: errorHandlingFactory.buildErrorHandling()
  };

  addNameBaseValueErrorHandling({
    store: storeBase,
    constantsObjectName: nameValueStoreDefinition.constantsObjectName,
    errorHandling: storeBase.errorHandling
  });

  return storeBase;
}

function buildConstantsStore(options) {
  var storeBase, constantsStore;

  storeBase = buildStoreBase(options);

  constantsStore = {
    add: function(nameValues) { add(nameValues, storeBase); },
    data: storeBase
  };

  Object.defineProperty(constantsStore,
    'errorHandling',
    {
      enumerable: false,
      configurable: false,
      get: function() { return storeBase.errorHandling; }
    });

  Object.defineProperty(constantsStore,
    'addReservedName',
    {
      enumerable: false,
      configurable: false,
      get: function() { return storeBase.errorHandling.addReservedName; }
    });

  return constantsStore;
}

module.exports = {
  build: buildConstantsStore,
  buildStoreBase: buildStoreBase,
  add: add,
  addNameValue: addNameValue,
  addNameBaseValueErrorHandling: addNameBaseValueErrorHandling
};
