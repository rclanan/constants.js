'use strict';

describe('dictionary Unit Test', function() {
  var dictionary, testResults, valuesPassedIn, expectedResults;

  beforeAll(function(){
    valuesPassedIn = {
      constantsObjectName: 'constantsTest',
      reservedNames: ['foo', '$bar']
    };

    expectedResults = {
      reservedNames: valuesPassedIn.reservedNames
    };

    testResults = {};

    dictionary = require('../../../../src/helpers/dictionary');
    testResults.returnedDictionary = dictionary.build(valuesPassedIn);
  });

  it('should have return object an $add method attached to it', function() {
    var dictionary = dictionary.build({
      constantsObjectName: 'test'
    });

    expect(dictionary.hasOwnProperty('$add')).toBeTruthy();
  });

  it('should allow key value pairs to be added to object', function() {
    var dictionary = dictionary.build({
      constantsObjectName: 'test'
    });

    dictionary.$add({test: '123'});

    expect(dictionary.test).toEqual('123');
  });
});
