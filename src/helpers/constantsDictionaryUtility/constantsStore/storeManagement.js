'use strict';

function addSingle(nameValue, constantsStore) {
  var nameValueMap, valueNameMap;

  nameValueMap = constantsStore.nameValueMap;
  valueNameMap = constantsStore.valueNameMap;

  nameValueMap[nameValue.name] = nameValue.value;
  valueNameMap[constantsStore.getValueKey(nameValue)] = nameValue.name;
}

function checkAddSingle(options) {
  options.errorHandling.throwRelevantError(options.nameValue);
  addSingle(options.nameValue, options.constantsStore);
}

function addAll(nameValues, constantsStore) {
  var keys;

  keys = Object.keys(nameValues);

  keys.forEach(function(name) {
    checkAddSingle({
      errorHandling: constantsStore.errorHandling,
      constantsStore: constantsStore,
      nameValue: { name: name, value: nameValues[name]}
    });
  });

}

module.exports = {
  addAll: addAll,
  addSingle: addSingle
};
