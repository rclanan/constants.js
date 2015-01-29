'use strict';

var nameValueStoreFactory, nameValueObjectFactory, createNameValueObject;

nameValueStoreFactory = require('./nameValueUtility/nameValueStoreFactory');
nameValueObjectFactory = require('./nameValueUtility/nameValueObjectFactory');


createNameValueObject = function( nameValueObjectDefinition) {
  var nameValueStore, getValueKey;

  nameValueObjectDefinition.reservedWords = nameValueObjectDefinition.reservedWords ? nameValueObjectDefinition.reservedWords : [];

  getValueKey = nameValueObjectDefinition.valueKeyFunction || function(nameValue) {
    return nameValue.value;
  };

  nameValueStore = nameValueStoreFactory.buildNameValueStore({
    getValueKey: getValueKey
  });

  nameValueObjectDefinition.reservedNames.forEach(nameValueStore.addReservedName);

  return nameValueObjectFactory.buildNameValueObject(nameValueStore);
};

module.exports = {
  createNameValueObject: createNameValueObject
};
