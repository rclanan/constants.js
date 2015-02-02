'use strict';

var errorHandlingFactory, constantsDictionaryErrorHandling;

errorHandlingFactory = require('../errorHandlingFactory');
constantsDictionaryErrorHandling = require('../constantsDictionaryErrorHandling');

function addErrorHandling(options) {
  var errorHandling = errorHandlingFactory.build();

  constantsDictionaryErrorHandling.addErrorHandling({
    constantsStore: options.store,
    constantsObjectName: options.constantsObjectName,
    errorHandling: errorHandling
  });

  options.store.errorHandling = errorHandling;

  return options.store;
}

module.exports = {
  addToStore: addErrorHandling
};
