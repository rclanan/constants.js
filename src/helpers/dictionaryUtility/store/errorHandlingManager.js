'use strict';

var errorHandlingBuilder, dictionaryErrorHandling;

errorHandlingBuilder = require('../errorHandlingBuilder');
dictionaryErrorHandling = require('../dictionaryErrorHandling');

function addErrorHandling(options) {
  var errorHandling = errorHandlingBuilder.build();

  dictionaryErrorHandling.addErrorHandling({
    store: options.store,
    constantsObjectName: options.constantsObjectName,
    errorHandling: errorHandling
  });

  options.store.errorHandling = errorHandling;

  return options.store;
}

module.exports = {
  addToStore: addErrorHandling
};
