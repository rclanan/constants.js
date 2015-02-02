'use strict';

var constantsStoreErrorHandlingManager;

constantsStoreErrorHandlingManager = require('./errorHandlingManager');

function buildDataStore(options) {
  var storeBase;

  storeBase = {
    nameValueMap: {},
    valueNameMap: {},
    getValueKey: options.getValueKey
  };

  storeBase = constantsStoreErrorHandlingManager.addToStore({
    store: storeBase,
    constantsObjectName: options.constantsObjectName,
    errorHandling: storeBase.errorHandling
  });

  storeBase.errorHandling.addReservedName('$add');

  return storeBase;
}

module.exports = {
  build: buildDataStore
};
