'use strict';
var sinon, storeErrorHandlingManager;

sinon = require('sinon');
storeErrorHandlingManager = require('../../../../../../src/helpers/dictionaryUtility/store/errorHandlingManager');

//require('jasmine-sinon');

/*
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

 */

describe('storeBuilder', function(){
  var storeBuilder, given, results, mocks;

  beforeAll(function(){

    given = {
      storeBuilderOptions: {
        dictionaryName: 'test',
        getValueKey: function(item) { return item; }
      }
    };

    mocks = {
      errorHandling: {
        addReservedName: function(value) {results.reserved.push(value);}
      }
    };

    results = {
      reserved: []
    };
    // stub
    sinon.stub(storeErrorHandlingManager, 'addToStore', function(given){
      results.given = given;
      given.store.errorHandling = mocks.errorHandling;
      return given.store;
    });

    storeBuilder = require('../../../../../../src/helpers/dictionaryUtility/store/storeBuilder');
    results.store = storeBuilder.build(given.storeBuilderOptions);

    storeErrorHandlingManager.addToStore.restore();
  });

  // this is where I could use mocking. I could confirm not only that they are there, but they are the correct object...
  it('should return a store object', function(){
    var store = results.store;
    expect(store).not.toBe(undefined);
    expect(typeof store.nameValueMap).toMatch('object');
    expect(typeof store.valueNameMap).toMatch('object');
    expect(store.dictionaryName).toMatch(given.storeBuilderOptions.dictionaryName);
    expect(store.errorHandling).toBe(mocks.errorHandling);
    expect(store.getValueKey).toBe(given.storeBuilderOptions.getValueKey);
  });

  it('adds $add to the reservedName list', function(){
    expect(results.reserved).toContain('$add');
  });

});
