'use strict';

describe('constantsDictionary Unit Test', function() {
  var constantsDictionary, testResults, valuesPassedIn, expectedResults;

  beforeAll(function(){
    valuesPassedIn = {
      constantsObjectName: 'constantsTest',
      reservedNames: ['foo', '$bar']
    };

    expectedResults = {
      reservedNames: valuesPassedIn.reservedNames
    };

    testResults = {};

    constantsDictionary = require('../../../../src/helpers/constantsDictionary');
    testResults.returnedDictionary = constantsDictionary.build(valuesPassedIn);
  });

  it('should have return object an $add method attached to it', function() {
    var dictionary = constantsDictionary.build({
      constantsObjectName: 'test'
    });

    expect(dictionary.hasOwnProperty('$add')).toBeTruthy();
  });

  it('should allow key value pairs to be added to object', function() {
    var dictionary = constantsDictionary.build({
      constantsObjectName: 'test'
    });

    dictionary.$add({test: '123'});

    expect(dictionary.test).toEqual('123');
  });
});
