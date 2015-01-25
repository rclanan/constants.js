[![Stories in Ready](https://badge.waffle.io/rclanan/constants.js.png?label=ready&title=Ready)](https://waffle.io/rclanan/constants.js)
# constants.js

constants handling library for JavaScript

constants.js is designed to be used with [Common.js](http://www.commonjs.org/) and [Browserify](http://browserify.org/)

This library is set up to help have a common place to declare constants and use between files, as well as help get rid of commonly repeated code related to these constants.

Suggested use is to make a dedicated constants file to use between files, this will contain your Classes, Ids, Attributes, and Events. Already included are HTML tags and browser events.

### Getting Started

The project depends on [Bower](https://github.com/bower/bower) and [Gulp.js](http://gulpjs.com). Assuming
you already have **Node.js** installed on your system, run the following command:

```bash
npm install -g gulp bower
```

Next, clone the repository and install project dependencies:
```bash
# Fetch only the latest commits.
git clone --depth=1 git@github.com:fusionalliance/constants.js.git

cd constants.js

bower install
npm install
```

### Usage

#### Setup:

Defining the constants file:

```javascript
'use strict';

var $, constantsBuilder, constants;

$ = require('jQuery'); // for finding and building elements
constantsBuilder = require('constants'); // constants library

constants = constantsBuilder.buildConstantsObject();

// This defines the IDS that are going to be used
constants.ids.$add({
  listCreateName: 'listCreateName',
  listCreateDescription: 'listCreateDescription',
});

// Define the custom Classes we want to add
constants.classes.$add({
  buttonPrimary: 'button-primary',
  inputLabel: 'input-label',
});

// defining custom events
constants.events.$add({
  nameChange: 'change:name',
  typeChange: 'change:type',
  descriptionChange: 'change:description'
});

// defining custom attributes, the base attributes for HTML should already exist.
constants.attributes.$add({
  attributeId: 'attrid'
});

// defining localization values that we will be using
constants.localizations.$add({
  description: 'DESCRIPTION',
  detailListTypeStandard: 'DETAIL_LIST_TYPE_STANDARD',
});

// Here, we define what helper methods to call, this section helps to utilize
// existing libraries in use with our constants to help cut down on copy-pasta and
// long lines of code.

// this defines the localizations.getLocalizedValue() method.
// example call: constants.localizations.description.getLocalizedValue();
constants.localizations.$setGetLocalizedValueFunction(function(localizationValue){
  return globalize.getLocalizedValue(localizationValue); // Make a call to some function that returns our localized value
});

// this defines the HTML element building function, here we are using JQuery, but any
// library can be used, what gets passed in is the HTML for the element.
// example call:
// var divEl = constants.tags.div.buildElement();
constants.tags.$setElementBuilderFunction(function(elementHtml){
  return $(elementHtml);
});

// this defines the findElements function for constants.classes. this function should return
// all instances of the class.
// to be used (so, if the class was 'input-label', you would get passed '.input-label')
// example call:
// var inputLabel = constants.classes.inputLabel.findElements();
constants.classes.$setFindElementsFunction(function(selector){
  return $(selector);
});

// this defines the findElements function for constants.ids. this function should return
// all instances of the ID.
// to be used (so, if the ID was 'listCreateName', you would get passed '#listCreateName')
// example call:
// var listCreateNameEl = constants.IDS.listCreateName.findElements();
constants.ids.$setFindElementsFunction(function(selector){
  return $(selector);
});

module.exports = { constants: constants };
```

When using the defined constants file, the usage is also simple. If the file above was named "listContants.js", and was defined in Require to be "listContants" the usage would be like the following:

```javascript
  'use strict';

  var listConstants, CLASSES, IDS, TAGS, LOCALS, EVENTS, ATTRIBUTES;

  listConstants = require('./listConstants');

  CLASSES = listConstants.classes;
  ATTRIBUTES = listConstants.attributes;
  IDS = listConstants.ids;
  TAGS = listConstants.tags;
  LOCALS = listConstants.localizations;
  EVENTS = listConstants.events;

  //classes examples:
  var className = CLASSES.inputLabel.name; // 'input-label'
  var classSelector = CLASSES.inputLabel.selector // '.input-label'
  var classEl = CLASSES.inputLabel.findElements(); // should return all instances if findElements is defined for classes in the constants file correctly.

  // ids examples
  var idName = IDS.listCreateName.name; // 'listCreateName'
  var idSelector = IDS.listCreateName.selector // '#listCreateName'
  var idEl = IDS.listCreateName.findElements(); // should return all instances if findElements is defined for classes in the constants file correctly.

  // Localizations examples
  var localizationName = LOCALS.description.name; // return "DESCRIPTION", as defined in the listConstants.js
  var localizationText = LOCALS.description.getLocalizedValue(); // returns what the localization function would return if "DESCRIPTION" was passed into it.

  // Attributes examples
  var attributeName = ATTRIBUTES.attributeId; // returns 'attrId'

  // Events examples
  var eventName = EVENTS.click; // this wasn't defined in listConstants, but is a common browser event and already defined. returns 'click';

  // HTML Tag examples:
  var divName = TAGS.div.name; // returns 'div'
  var divHtml = TAGS.div.html; // returns '<div />'
  var divEl = TAGS.div.buildElement(); // returns a new div Element if correctly defined in listConstants.js
```

#### Predefined constants:

In the definitions folder, you can find the files for tags, css classes, attributes, and events. In those files, are the predefined names and values that are accessible through any of the cooresponding objects.

If you find that you are using the same name and values in your files that are not predefined, it's suggested that you add them to the predefined values so they do not have to be defined repeatedly.

The predefined constants are based on HTML5 Canidate Recommendations from the W3C, HTML 5.1 Editor's Draft, and the "living" HTML specification from Web Hypertext Application Technology Working Group (WHATWG).


### Tests

Simply run:

```
gulp karma
```

### Contributing

If you have any suggestions, or found a bug please open a GitHub issue and we will
get to it as soon as we can.

### License

constants.js is distributed under the terms of the MIT license.

See LICENSE for details.
