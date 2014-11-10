define(['helpers/nameValueObject'], function(nameValueObject) {
  'use strict';

  var tags, superAdd;

  function buildHtmlTagValue(tagName) {
    return {
      html: '<' + tagName + ' />',
      name: tagName
    };
  }

  tags = nameValueObject.createNameValueObject({}, function(nameValue) {
    return nameValue.value.name;
  });

  superAdd = tags.$add;

  tags.$add = function(nameValues) {
    // we should be able to simply add the name, img, div, span, then make a tag out of it.
    var givenValues, tagName = {};

    for (tagName in nameValues) {
      if (nameValues.hasOwnProperty(tagName)) {
        givenValues[tagName] = buildHtmlTagValue(nameValues[tagName]);
      }
    }

    superAdd(givenValues);
  };

  tags.$add({
    image: 'img',
    div: 'div',
    span: 'span',
    anchor: 'a',
    input: 'input'
  });

  return tags;
});
