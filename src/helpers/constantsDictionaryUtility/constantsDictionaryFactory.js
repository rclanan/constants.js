'use strict';

function buildDictionary(constantsStore) {
  var dictionary = Object.create(constantsStore.data.nameValueMap);

  dictionary.$add = constantsStore.add;

  return dictionary;
}

module.exports = {
  build: buildDictionary
};
