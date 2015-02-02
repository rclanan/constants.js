'use strict';

var constantsStoreFactory, storeManagement;

constantsStoreFactory = require('./constantsStoreFactory');
storeManagement = require('./storeManagement');

function addPropertyErrorHandling(options) {
  Object.defineProperty(options.constantsStore,
    'errorHandling',
    {
      enumerable: false,
      configurable: false,
      get: function() { return options.storeBase.errorHandling; }
    });
}

function addPropertyAddReservedName(options) {
  Object.defineProperty(options.constantsStore,
    'addReservedName',
    {
      enumerable: false,
      configurable: false,
      get: function() { return options.storeBase.errorHandling.addReservedName; }
    });
}

function addProperties(options) {
  addPropertyErrorHandling(options);
  addPropertyAddReservedName(options);
}

function createStore(storeBase) {
  var constantsStore;

  constantsStore = {
    add: function(nameValues) { storeManagement.addAll(nameValues, storeBase); },
    data: storeBase
  };

  return constantsStore;
}

function buildConstantsStoreManager(options) {
  var storeBase, constantsStore;

  storeBase = constantsStoreFactory.build(options);
  constantsStore = createStore(storeBase);

  addProperties({
    constantsStore: constantsStore,
    storeBase: storeBase
  });

  return constantsStore;
}

module.exports = {
  build: buildConstantsStoreManager
};
