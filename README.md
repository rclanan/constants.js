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

Setup:

```javascript
var TAGS, IDS, CLASSES, EVENTS, ATTRIBUTES, LOCALS;

TAGS = constants.tags;
IDS = constants.ids;
CLASSES = constants.classes;
EVENTS = constants.events;
ATTRIBUTES = constants.attributes;
LOCALS = constants.localizations;

IDS.$add({

});

CLASSES.$add({

});

EVENTS.$add({

});

ATTRIBUTES.$add({

});

LOCALS.$add({

});

LOCALS.$setGetLocalizedValueFunction(function(localizationValue){
  return strings.GetStringResource(localizationValue);
});

TAGS.$setElementBuilderFunction(function(elementHtml){
  return $(elementHtml);
});

CLASSES.$setFindElementsFunction(function(selector){
  return $(selector);
});

IDS.$setFindElementsFunction(function(selector){
  return $(selector);
});
```

Usage:

```javascript
TAGS.{element}.buildElement();
TAGS.{element}.{html, name}
LOCALS.{name}.getLocalizedValue();
CLASSES.{someClass}.findElements();
CLASSES.{someClass}.{name, selector}
IDS.{someId}.findElements();
IDS.{someId}.{name, selector}
ATTRIBUTES.{name}
```

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
