define(['helpers/nameValueObject'], function(nameValueObject) {
  'use strict';

  var attributes;

  attributes = nameValueObject.createNameValueObject();
  attributes.$add({
    href: 'href',
    source: 'src',
    alt: 'alt',
    title: 'title',
    type: 'type',
    width: 'width',
    height: 'height',
    style: 'style'
  });

  return attributes;
});
