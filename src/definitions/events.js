define(['helpers/nameValueObject'], function(nameValueObject) {
  'use strict';

  var events;

  events = nameValueObject.createNameValueObject();
  events.$add({
    click: 'click'
  });

  return events;
});
