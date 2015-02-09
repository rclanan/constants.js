'use strict';

var constantsBuilder;
constantsBuilder = require('../../../../src/constants');


describe('constasts integration test', function() {
  var constants;

  beforeAll(function(){
    constants = constantsBuilder.build();
  });

  it('should contain a html tags library', function(){
    expect(constants.tags).not.toBe(undefined);
    expect(constants.tags.div.html).toBe('<div />');
  });

  it('should contain an html attributes library', function(){
    expect(constants.attributes).not.toBe(undefined);
    expect(constants.attributes.class).toBe('class');
  });

  it('should contain a css classes library', function(){
    expect(constants.classes).not.toBe(undefined);
    expect(constants.classes.active.name).toBe('active');
  });

  it('should contain an IDs library', function(){
    expect(constants.ids).not.toBe(undefined);
    constants.ids.$add({foo:'fooIdThing'});
    expect(constants.ids.foo.name).toBe('fooIdThing');
  });

  it('should contain an events library', function(){
    expect(constants.events).not.toBe(undefined);
    expect(constants.events.click).toBe('click');
  });

  it('should contain a localizations library', function(){
    expect(constants.localizations).not.toBe(undefined);
    constants.localizations.$add({foo: 'fooLocalization'});
    expect(constants.localizations.foo.name).toBe('fooLocalization');
  });
});
