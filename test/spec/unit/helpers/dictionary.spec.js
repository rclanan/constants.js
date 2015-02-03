'use strict';

describe('dictionary Unit Test', function() {
  var dictionary, testResults, valuesPassedIn, expectedResults, given;

  beforeAll(function(){
    given = {};

    given.dictionaryBuilderOptions = {
      constantsObjectName: 'constantsTest',
      reservedNames: ['foo', '$bar']
    };

    given.nameValues = {
      test: '123',
      stuff: 'moreStuff'
    };

    expectedResults = {
      reservedNames: given.dictionaryBuilderOptions.reservedNames,
      nameValues: given.nameValues
    };

    testResults = {};

    dictionary = require('../../../../src/helpers/dictionary');
    testResults.returnedDictionary = dictionary.build(given.dictionaryBuilderOptions);
    testResults.returnedDictionary.$add(given.nameValues);
  });

  it('should have return object an $add method attached to it', function() {
    expect(testResults.returnedDictionary.hasOwnProperty('$add')).toBeTruthy();
  });

  it('should allow key value pairs to be added to object', function() {
    expect(testResults.returnedDictionary.test).toEqual(expectedResults.nameValues.test);
    expect(testResults.returnedDictionary.stuff).toEqual(expectedResults.nameValues.stuff);
  });
});
