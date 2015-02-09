'use strict';

var definitionsLibrary, attributesBuilder;

definitionsLibrary = require('../../../locationHelpers/definitionsLibrary');
attributesBuilder = definitionsLibrary.attributes;

describe('attributes builder unit test', function() {
  var attributes, given, results, mocks;

  beforeAll(function() {
    given = {};
    results = {};
    mocks = {};

    attributes = attributesBuilder.build();
  });

  it('should contain the $add function as its own property', function() {
    expect(attributes.hasOwnProperty('$add')).toBe(true);
  });
});
