'use strict';

function buildNameValueObject(nameValueStore) {
  var nameValueObject = Object.create(nameValueStore.nameValueMap);
  nameValueObject.$add = nameValueStore.add;

  return nameValueObject;
}

module.exports = {
  buildNameValueObject: buildNameValueObject
};
