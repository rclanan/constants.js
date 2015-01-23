(function(window, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory();
  } else {
    // Browser Global (constants is your global library identifier)
    window.constants = factory();
  }
}(this, function() {
  (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
define([
  'definitions/cssClasses',
  'definitions/ids',
  'definitions/attributes',
  'definitions/tags',
  'definitions/events',
  'definitions/localizations'
], function(classes, ids, attributes, tags, events, localizations) {
  'use strict';

  function buildConstantsObject() {
    return {
      classes: classes.buildConstantsObject(),
      ids: ids.buildConstantsObject(),
      attributes: attributes.buildConstantsObject(),
      tags: tags.buildConstantsObject(),
      events: events.buildConstantsObject(),
      localizations: localizations.buildConstantsObject()
    };
  }

  return {
    buildConstantsObject: buildConstantsObject
  };
});

},{}]},{},[1]);

  return require('constants');
}));
//# sourceMappingURL=dist/constants.js.map