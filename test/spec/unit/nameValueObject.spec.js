'use strict';

var proxyquire, path, testModuleLocation;

proxyquire = require('proxyquireify')(require);

path = require('path');

//var nameValueObject = require('../../../src/helpers/nameValueObject');

/*
mocks:
nameValueStoreFactory = require('./nameValueUtility/nameValueStoreFactory');
nameValueObjectFactory = require('./nameValueUtility/nameValueObjectFactory');

nameValueStore = nameValueStoreFactory.buildNameValueStore({
getValueKey: getValueKey
});

nameValueObjectDefinition.reservedWords.forEach(nameValueStore.addReservedName);

return nameValueObjectFactory.buildNameValueObject(nameValueStore);
 */

testModuleLocation = path.resolve(__dirname, '../../../src/helpers/nameValueObject')

function buildNameValueStoreFactoryMock() {
  var callIdCount, callResults, stub;
  callIdCount = 0;
  callResults = [];
  stub = {
    mockItemName: './nameValueUtility/nameValueStoreFactory',
    mock: {
      buildNameValueStore: function(values) {
        var addedReseredNames, callId;

        callId = callIdCount;
        callIdCount += 1;
        addedReseredNames = [];

        callResults.push({
          buildCalled: true,
          calledWith: values,
          addedReservedNames: addedReseredNames
        });
        return {
          callId: callId,
          addReservedName: function(name) {
            addedReseredNames.push(name);
            return name;
          }
        };
      }
    }
  };


  return {
    callResults: {
      itemName: 'nameValueStore',
      results: callResults
    },
    stub: stub
  };
}

function buildNameValueObjectFactoryMock() {
  var callIdCount, callResults, stub;
  callIdCount = 0;
  callResults = [];

  stub = {
    mockItemName: './nameValueUtility/nameValueObjectFactory',
    mock: {
      buildNameValueObject: function(values){
        var callResult, callId;
        callId = callIdCount;
        callIdCount += 1;

        callResult = {
          callId: callId,
          buildCalled: true,
          calledWith: values
        };
        callResults.push(callResult);

        return {
          callId: callId
        };
      }
    }
  };

  return {
    callResults: {
      itemName: 'nameValueObject',
      results: callResults
    },
    stub: stub
  };
}

function buildMockCotainer(builders) {
  var mockContainer = {
    stubs: {},
    results: {}
  };

  builders.forEach(function(build) {
    var builtTestObject = build();
    mockContainer.stubs[builtTestObject.stub.mockItemName] = builtTestObject.stub.mock;
    mockContainer.results[builtTestObject.callResults.itemName] = builtTestObject.callResults.results;
  });

  return mockContainer;
}

function buildMocks() {
  var mockContainer, stubBuilders;
  stubBuilders = [buildNameValueStoreFactoryMock, buildNameValueObjectFactoryMock];
  mockContainer = buildMockCotainer(stubBuilders);

  return mockContainer;
}

describe('nameValueObject Unit Test', function() {
  var nameValueObject, testResults, valuesPassedIn, expectedResults;

  beforeAll(function(){
    var mockContainer;
    valuesPassedIn = {
      reservedNames: ['foo', '$bar']
    };

    expectedResults = {
      reservedNames: valuesPassedIn.reservedNames
    };

    mockContainer = buildMocks();
    testResults = mockContainer.results;

    nameValueObject = proxyquire(testModuleLocation, mockContainer.stubs);
    testResults.returnedNameValueObject = nameValueObject.createNameValueObject(valuesPassedIn);
  });

  it('should build a nameValueStore', function(){
    expect(testResults.nameValueStore.count).toEqual(1);
    expect(testResults.nameValueStore[0].reservedNames.length).toEqual(expectedResults.reservedNames.length);
    expect(testResults.nameValueStore[0].reservedNames).toEqual(expectedResults.reservedNames);
    expect(testResults.nameValueSTore[0].callId).toEqual(0);
  });

  it('should have return object an $add method attached to it', function() {
    var namedObject = nameValueObject.createNameValueObject({
      constantsObjectName: 'test'
    });

    expect(namedObject.hasOwnProperty('$add')).toBeTruthy();
  });

  it('should allow key value pairs to be added to object', function() {
    var namedObject = nameValueObject.createNameValueObject({
      constantsObjectName: 'test'
    });

    namedObject.$add({test: '123'});

    expect(namedObject.test).toEqual('123');
  });
});
