// 'use strict';
//
// var nameValueObject = require('../../../src/helpers/nameValueObject');
//
// describe('nameValueObject Unit Test', function() {
//   it('should have return object an $add method attached to it', function() {
//     var namedObject = nameValueObject.createNameValueObject({
//       constantsObjectName: 'test'
//     });
//
//     expect(namedObject.hasOwnProperty('$add')).toBeTruthy();
//   });
//
//   it('should allow key value pairs to be added to object', function() {
//     var namedObject = nameValueObject.createNameValueObject({
//       constantsObjectName: 'test'
//     });
// 
//     namedObject.$add({test: '123'});
//
//     expect(namedObject.test).toEqual('123');
//   });
// });
