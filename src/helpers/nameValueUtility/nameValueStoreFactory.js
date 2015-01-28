'use strict';

var errorHandlingFactory, nameValueErrorHandling;

errorHandlingFactory = require('./errorHandlingFactory');
nameValueErrorHandling = require('./nameValueErrorHandling');

function addNameValue(nameValue, nameValueStore) {
  var nameValueMap, valueNameMap;

  nameValueMap = nameValueStore.nameValueMap;
  valueNameMap = nameValueStore.valueNameMap;

  nameValueMap[nameValue.name] = nameValue.value;
  valueNameMap[nameValueStore.getValueKey(nameValue)] = nameValue.name;
}

function add(nameValues, nameValueStore) {
  var name, nameValue;

  for (name in nameValues) {
    nameValue = {name: name, value: nameValues[name]};

    if (nameValues.hasOwnProperty(name)) {
      nameValueStore.errorHandling.throwRelevantError(nameValue);
      addNameValue({name: name, value: nameValues[name]}, nameValueStore);
    }
  }
}

function addNameBaseValueErrorHandling(nameValueErrorHandlingDefinition) {
  nameValueErrorHandling.addNameValueErrorHandling({
    nameValueStore: nameValueErrorHandlingDefinition.store,
    constantsObjectName: nameValueErrorHandlingDefinition.constantsObjectName,
    errorHandling: nameValueErrorHandlingDefinition.errorHandling
  });

  nameValueErrorHandlingDefinition.errorHandling.addReservedName('$add');
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

function buildNameValueStore(nameValueStoreDefinition) {
  var storeBase, nameValueStore;

  storeBase = buildStoreBase(nameValueStoreDefinition);

  nameValueStore = {
    add: function(nameValues) { add(nameValues, storeBase); },
    nameValueStore: storeBase
  };

  Object.defineProperty(nameValueStore,
    'errorHandling',
    {
      enumerable: false,
      configurable: false,
      get: function() { return storeBase.errorHandling; }
    });

  return nameValueStore;
}

module.exports = {
  buildNameValueStore: buildNameValueStore,
  buildStoreBase: buildStoreBase,
  add: add,
  addNameValue: addNameValue,
  addNameBaseValueErrorHandling: addNameBaseValueErrorHandling
};
