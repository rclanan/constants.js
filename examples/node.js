'use strict';

var constantsBuilder, constants, TAGS;

constantsBuilder = require('../dist/constants.js');

console.log(constantsBuilder);

constants = constantsBuilder.buildConstantsObject();

TAGS = constants.tags;

console.log('Div Tag Name: ' + TAGS.div.name); // returns 'div'
console.log('Div Tag Html: ' + TAGS.div.html); // returns '<div />'
