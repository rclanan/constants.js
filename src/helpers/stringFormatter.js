'use strict';

//TODO: Evaluate if there is a need to pull this into it's own library? Perhaps if we get more utility functions
function format(stringToFormat, values) {
  return stringToFormat.replace(/{(\w+)}/g, function(match, value) {
    return (values[value] !== undefined) ? values[value] : match;
  });
}

module.exports = {
  format: format
};
