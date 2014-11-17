define(['helpers/nameValueObject'], function(nameValueObject) {
  'use strict';

  var tags, superAdd;

  function buildHtmlTagValue(tagName) {
    var html = '<' + tagName + ' />';

    return {
      html: html,
      name: tagName,
      buildElement: function() {
        return tags.$elementBuilder(html);
      }
    };
  }

  tags = nameValueObject.createNameValueObject({}, function(nameValue) {
    return nameValue.value.name;
  });

  superAdd = tags.$add;

  tags.$add = function(nameValues) {
    // we should be able to simply add the name, img, div, span, then make a tag out of it.
    var givenValues, tagName;

    tagName = {};

    for (tagName in nameValues) {
      if (nameValues.hasOwnProperty(tagName)) {
        givenValues[tagName] = buildHtmlTagValue(nameValues[tagName]);
      }
    }

    superAdd(givenValues);
  };

  tags.$setElementBuilderFunction = function(elementBuilder) {
    tags.$elementBuilder = elementBuilder;
  };

  tags.$add({
    image: 'img',
    div: 'div',
    span: 'span',
    anchor: 'a',
    input: 'input',
    body: 'body',
    head: 'head',
    italic: 'i'
  });

  return tags;
});
