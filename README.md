# constants.js

A small library providing utility methods to get and set constants as well as provides default constants

### Getting Started

The project depends on [Bower](https://github.com/bower/bower) and [Gulp.js](http://gulpjs.com). Assuming
you already have **Node.js** installed on your system, run the following command:

```
sudo npm install -g gulp bower
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

```javascript
var TAGS, IDS, CLASSES, EVENTS, ATTRIBUTES, LOCALS;

// These are not needed, just added for shorthand access. For example, you could call constants.tags.$add({}) instead.
TAGS = constants.tags;
IDS = constants.ids;
CLASSES = constants.classes;
EVENTS = constants.events;
ATTRIBUTES = constants.attributes;
LOCALS = constants.localizations;

IDS.$add({
 {name}: '{value}'
});

CLASSES.$add({
  {name}: '{value}'
});

EVENTS.$add({
  {name}: '{value}'
});

ATTRIBUTES.$add({
  {name}: '{value}'
});

LOCALS.$add({
  {name}: '{value}'
});

LOCALS.$setGetLocalizedValueFunction(function(localizationValue){
  // Replace with implementation of localization lookup
  return localizationValue;
});

TAGS.$setElementBuilderFunction(function(elementHtml){
  // For native JavaScript
  return document.querySelectorAll(elementHtml);

  // For jquery support
  //return $(elementHtml);
});

CLASSES.$setFindElementsFunction(function(selector){
  // For native JavaScript
  return document.getElementsByClassName(selector);

  // For jquery support
  //return $(selector);
});

IDS.$setFindElementsFunction(function(selector){
  // For native JavaScript
  return document.getElementById(selector);

  // For jquery support
  //return $(selector);
});
```

#### Usage:

```javascript
TAGS.{element}.buildElement();
TAGS.{element}.{html, name}

IDS.{someId}.findElements();
IDS.{someId}.{name, selector}

CLASSES.{someClass}.findElements();
CLASSES.{someClass}.{name, selector}

EVENTS.{name}

ATTRIBUTES.{name}

LOCALS.{name}.getLocalizedValue();
```

#### Predefined constants:

In the definitions folder, you can find the files for tags, css classes, attributes, and events. In those files, are the predefined names and values that are accessible through any of the cooresponding objects.

If you find that you are using the same name and values in your files that are not predefined, it's suggested that you add them to the predefined values so they do not have to be defined repeatedly.

The predefined constants are based on HTML5 Canidate Recommendations from the W3C, HTML 5.1 Editor's Draft, and the "living" HTML specification from Web Hypertext Application Technology Working Group (WHATWG).


### Tests

Simply run:

```
npm test
```

### Contributing

If you have any suggestions, or found a bug please open a GitHub issue and we will
get to it as soon as we can.

### License

constants.js is distributed under the terms of the MIT license.

See LICENSE for details.
