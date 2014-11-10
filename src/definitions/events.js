define(['helpers/nameValueObject'], function(nameValueObject) {
  'use strict';

  var events;

  events = nameValueObject.createNameValueObject();
  events.$add({
    click: 'click',
    global: 'global'
  });

  return events;
});
