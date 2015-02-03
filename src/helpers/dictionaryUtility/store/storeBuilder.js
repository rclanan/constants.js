'use strict';

var storeErrorHandlingManager;

storeErrorHandlingManager = require('./errorHandlingManager');

function buildDataStore(options) {
  var storeBase;

  storeBase = {
    nameValueMap: {},
    valueNameMap: {},
    getValueKey: options.getValueKey
  };

  storeBase = storeErrorHandlingManager.addToStore({
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
