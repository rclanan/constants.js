define([], function() {
  'use strict';

  function format(stringToFormat, values) {
    return stringToFormat.replace(/{(\w+)}/g, function(match, value) {
      return (values[value] !== undefined) ? values[value] : match;
    });
  }

  return format;
});
