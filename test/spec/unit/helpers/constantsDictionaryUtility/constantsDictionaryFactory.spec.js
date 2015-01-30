'use strict';

var constantsDictionaryFactory;

constantsDictionaryFactory = require('../../../../../src/helpers/constantsDictionaryUtility/constantsDictionaryFactory.js');

describe('constantsDictionaryFactory', function(){
  var constantsDictionary, givenConstantsStore;

  beforeAll(function(){
    givenConstantsStore = {
      data: {
        nameValueMap: {
          isOriginal: 'yes.'
        }
      },
      add: function(){
        return 'add test succeeded';
      }
    };

    constantsDictionary = constantsDictionaryFactory.build(givenConstantsStore);
  });

  it('should build an object that contains properties of givenConstantsStore.data.nameValueMap', function() {
    expect(constantsDictionary.isOriginal).toMatch(givenConstantsStore.data.nameValueMap.isOriginal);
  });

  it('should contain the add function as its own property', function() {
    expect(constantsDictionary.hasOwnProperty('$add')).toBe(true);
  });

  it('should contain the same add function as the given constantsStore object', function(){
    expect(constantsDictionary.$add).toBe(givenConstantsStore.add);
  });
});
