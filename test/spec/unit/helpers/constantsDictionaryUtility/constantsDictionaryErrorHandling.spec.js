'use strict';
var constantsDictionaryErrorHandling = require('../../../../../src/helpers/constantsDictionaryUtility/constantsDictionaryErrorHandling');

describe('constantsDictionaryErrorHandling', function(){
  var givenErrorHandling, addedErrors;
  beforeAll(function(){
    addedErrors = [];

    givenErrorHandling = {
      addErrorDefinition: function(errorDefinition) {
        addedErrors.push(errorDefinition);
      }
    };

    constantsDictionaryErrorHandling.addErrorHandling({
      constantsStore: {},
      errorHandling: givenErrorHandling
    });

  });

  it('should add 3 errorDefinitions', function() {
    expect(addedErrors.length).toEqual(3);
  });

  it('should add nameExists, reservedName, and valueExists error definitions', function(){
    var errorNames = addedErrors.map(function(error){
      return error.errorName;
    });
    expect(errorNames).toContain('nameExists');
    expect(errorNames).toContain('nameReserved');
    expect(errorNames).toContain('valueExists');
  });

  it('should add the function "addReservedName" to givenErrorHandling', function(){
    expect(typeof givenErrorHandling.addReservedName).toMatch('function');
  });
});
