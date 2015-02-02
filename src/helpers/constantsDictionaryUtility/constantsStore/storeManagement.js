'use strict';

function addSingle(nameValue, constantsStore) {
  var nameValueMap, valueNameMap;

  nameValueMap = constantsStore.nameValueMap;
  valueNameMap = constantsStore.valueNameMap;

  nameValueMap[nameValue.name] = nameValue.value;
  valueNameMap[constantsStore.getValueKey(nameValue)] = nameValue.name;
}

function addAll(nameValues, constantsStore) {
  var name, nameValue;

  for (name in nameValues) {
    nameValue = {name: name, value: nameValues[name]};

    if (nameValues.hasOwnProperty(name)) {
      constantsStore.errorHandling.throwRelevantError(nameValue);
      addSingle({name: name, value: nameValues[name]}, constantsStore);
    }
  }
}

module.exports = {
  addAll: addAll,
  addSingle: addSingle
};
