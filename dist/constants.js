(function(window, Builder) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(Builder);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = Builder();
  } else {
    // Browser Global (constants is your global library identifier)
    window.constants = Builder();
  }
}(this, function() {
  var _conRq_, itemToExport;

  // this is the what is defined in browserify's "entry" item in the configBundles array.
  // located in gulp/config.js under "browserify"
  itemToExport = 1;

  _conRq_ = (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _conRq_=="function"&&_conRq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _conRq_=="function"&&_conRq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_conRq_,module,exports){
'use strict';

var cssClasses, ids, attributes, tags, events, localizations, build;

cssClasses = _conRq_('./definitions/cssClasses');
ids = _conRq_('./definitions/ids');
attributes = _conRq_('./definitions/attributes');
tags = _conRq_('./definitions/tags');
events = _conRq_('./definitions/events');
localizations = _conRq_('./definitions/localizations');

build = function() {
    return {
      classes: cssClasses.build(),
      ids: ids.build(),
      attributes: attributes.build(),
      tags: tags.build(),
      events: events.build(),
      localizations: localizations.build()
    };
};

module.exports = {
  build: build
};

},{"./definitions/attributes":3,"./definitions/cssClasses":4,"./definitions/events":5,"./definitions/ids":6,"./definitions/localizations":7,"./definitions/tags":8}],2:[function(_conRq_,module,exports){
(function(window, Builder) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(Builder);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = Builder();
  } else {
    // Browser Global (dictionary is your global library identifier)
    window.dictionary = Builder();
  }
}(this, function() {
  var _dicRq_, itemToExport;

  // this is the what is defined in browserify's "entry" item in the configBundles array.
  // located in gulp/config.js under "browserify"
  itemToExport = 1;

  _dicRq_ = (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dicRq_=="function"&&_dicRq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dicRq_=="function"&&_dicRq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dicRq_,module,exports){
'use strict';

var storeManagerBuilder, dictionaryBuilder, buildDictionary;

storeManagerBuilder = _dicRq_('./dictionaryUtility/store/storeManagerBuilder');
dictionaryBuilder = _dicRq_('./dictionaryUtility/dictionaryBuilder');

buildDictionary = function(options) {
  var store, getValueKey;

  options.reservedNames = options.reservedNames ? options.reservedNames : [];

  getValueKey = options.valueKeyFunction || function(nameValue) {
    return nameValue.value;
  };

  store = storeManagerBuilder.build({
    getValueKey: getValueKey
  });

  options.reservedNames.forEach(store.addReservedName);

  return dictionaryBuilder.build(store);
};

module.exports = {
  build: buildDictionary
};

},{"./dictionaryUtility/dictionaryBuilder":3,"./dictionaryUtility/store/storeManagerBuilder":12}],2:[function(_dicRq_,module,exports){
(function(window, Builder) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(Builder);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = Builder();
  } else {
    // Browser Global (strings is your global library identifier)
    window.strings = Builder();
  }
}(this, function() {
  var _strRq_, itemToExport;

  // this is the what is defined in browserify's "entry" item in the configBundles array.
  // located in gulp/config.js under "browserify"
  itemToExport = 1;

  _strRq_ = (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _strRq_=="function"&&_strRq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _strRq_=="function"&&_strRq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_strRq_,module,exports){
'use strict';

var formatting = _strRq_('./utilities/formatting');

module.exports = {
  format: formatting.format
};

},{"./utilities/formatting":2}],2:[function(_strRq_,module,exports){
'use strict';

function format(stringToFormat, values) {
  return stringToFormat.replace(/{(\w+)}/g, function(match, value) {
    return (values[value] !== undefined) ? values[value] : match;
  });
}

module.exports = {
  format: format
};

},{}]},{},[1]);

//# sourceMappingURL=strings.js.map;

  return _strRq_(itemToExport);
}));
},{}],3:[function(_dicRq_,module,exports){
'use strict';

function buildDictionary(store) {
  var dictionary = Object.create(store.data.nameValueMap);

  dictionary.$add = store.add;

  return dictionary;
}

module.exports = {
  build: buildDictionary
};

},{}],4:[function(_dicRq_,module,exports){
'use strict';

var nameExistsErrorDefinitionBuilder, valueExistsErrorDefinitionBuilder, reservedNameErrorDefinitionBuilder;

nameExistsErrorDefinitionBuilder = _dicRq_('./dictionaryErrors/nameExistsErrorDefinitionBuilder');
valueExistsErrorDefinitionBuilder = _dicRq_('./dictionaryErrors/valueExistsErrorDefinitionBuilder');
reservedNameErrorDefinitionBuilder = _dicRq_('./dictionaryErrors/reservedNameErrorDefinitionBuilder');

function addErrorHandling(options) {
  var errorHandling, reservedNameErrorDefinition;

  reservedNameErrorDefinition = reservedNameErrorDefinitionBuilder.build(options.store);

  errorHandling = options.errorHandling;
  errorHandling.addErrorDefinition(nameExistsErrorDefinitionBuilder.build(options.store));
  errorHandling.addErrorDefinition(valueExistsErrorDefinitionBuilder.build(options.store));
  errorHandling.addErrorDefinition(reservedNameErrorDefinition);

  errorHandling.addReservedName = reservedNameErrorDefinition.addReservedName;
}

module.exports = {
  addErrorHandling: addErrorHandling
};

},{"./dictionaryErrors/nameExistsErrorDefinitionBuilder":5,"./dictionaryErrors/reservedNameErrorDefinitionBuilder":6,"./dictionaryErrors/valueExistsErrorDefinitionBuilder":7}],5:[function(_dicRq_,module,exports){
'use strict';

var strings, nameExistsError;

strings = _dicRq_('strings.js');

nameExistsError = 'name "{name}" is already in use, value is {value}';

function buildNameExistsError(nameValue, store) {
  var errorText = strings.format(nameExistsError,
  {
    name: nameValue.name,
    value: store.getValueKey(nameValue)
  });

  return new Error(errorText);
}

function nameExistsErrorCondition(nameValue, store) {
  return !!store.nameValueMap[nameValue.name];
}

function buildValueExistsErrorDefinition (store) {
  return {
    errorName: 'nameExists',
    errorCondition: function(nameValue) { return nameExistsErrorCondition(nameValue, store); },
    errorBuilder: function(nameValue) { return buildNameExistsError(nameValue, store); }
  };
}

module.exports = {
  build: buildValueExistsErrorDefinition
};

},{"strings.js":2}],6:[function(_dicRq_,module,exports){
'use strict';

var strings, nameExistsError;

strings = _dicRq_('strings.js');

nameExistsError = 'name "{name}" is reserved for {type} dictionary';

function buildNameReservedError(nameValue, store) {
  var errorText = strings.format(nameExistsError,
  {
    name: nameValue.name,
    type: store.dictionaryName
  });

  return new Error(errorText);
}

function nameReservedErrorCondition(nameValue, reservedNames) {
  return !!reservedNames[nameValue.name];
}

function addReservedName(name, reservedNames) {
  reservedNames[name] = true;
}

function buildReservedNameErrorDefinition (store) {
  var reservedNames = {};

  return {
    errorName: 'nameReserved',
    errorCondition: function(nameValue) { return nameReservedErrorCondition(nameValue, reservedNames); },
    errorBuilder: function(nameValue) { return buildNameReservedError(nameValue, store); },
    addReservedName: function(name) { addReservedName(name, reservedNames); }
  };
}

module.exports = {
  build: buildReservedNameErrorDefinition
};

},{"strings.js":2}],7:[function(_dicRq_,module,exports){
'use strict';

var strings, valueExistsErrorText;

strings = _dicRq_('strings.js');

valueExistsErrorText = 'given name {givenName} with a value of "{value}" already exists with a name of "{name}"';

function buildValueExistsError(nameValue, store) {
  var errorText = strings.format(valueExistsErrorText,
  {
    givenName: nameValue.name,
    name: store.valueNameMap[store.getValueKey(nameValue)],
    value: store.getValueKey(nameValue)
  });

  return new Error(errorText);
}

function valueExistsErrorCondition(nameValue, store) {
  return !!store.valueNameMap[nameValue.value];
}

function buildValueExistsErrorDefinition (store) {
  return {
    errorName: 'valueExists',
    errorCondition: function(nameValue) { return valueExistsErrorCondition(nameValue, store); },
    errorBuilder: function(nameValue) { return buildValueExistsError(nameValue, store); }
  };
}

module.exports = {
  build: buildValueExistsErrorDefinition
};

},{"strings.js":2}],8:[function(_dicRq_,module,exports){
'use strict';

function throwRelevantError(errorValue, errorDefinitions) {
  errorDefinitions.forEach(function (errorDefinition){
    if(errorDefinition.condition(errorValue)) {
      throw new Error(errorDefinition.buildError(errorValue));
    }
  });
}

function addErrorDefinition(errorDefinition, errorDefinitions) {
  errorDefinitions.push({
    condition: errorDefinition.errorCondition,
    buildError: errorDefinition.errorBuilder
  });
}

function buildErrorHandling(){
  var errorHandling = {
    errorDefinitions: [],
    addErrorDefinition: function(errorDefinition){ addErrorDefinition( errorDefinition, errorHandling.errorDefinitions); },
    throwRelevantError: function(errorValue) { throwRelevantError(errorValue, errorHandling.errorDefinitions);}
  };

  return errorHandling;
}

module.exports = {
  build: buildErrorHandling
};

},{}],9:[function(_dicRq_,module,exports){
'use strict';

var errorHandlingBuilder, dictionaryErrorHandling;

errorHandlingBuilder = _dicRq_('../errorHandlingBuilder');
dictionaryErrorHandling = _dicRq_('../dictionaryErrorHandling');

function addErrorHandling(options) {
  var errorHandling = errorHandlingBuilder.build();

  dictionaryErrorHandling.addErrorHandling({
    store: options.store,
    dictionaryObjectName: options.dictionaryObjectName,
    errorHandling: errorHandling
  });

  options.store.errorHandling = errorHandling;

  return options.store;
}

module.exports = {
  addToStore: addErrorHandling
};

},{"../dictionaryErrorHandling":4,"../errorHandlingBuilder":8}],10:[function(_dicRq_,module,exports){
'use strict';

var storeErrorHandlingManager;

storeErrorHandlingManager = _dicRq_('./errorHandlingManager');

function buildDataStore(options) {
  var storeBase;

  storeBase = {
    dictionaryName: options.dictionaryName,
    nameValueMap: {},
    valueNameMap: {},
    getValueKey: options.getValueKey
  };

  storeBase = storeErrorHandlingManager.addToStore({
    store: storeBase,
    errorHandling: storeBase.errorHandling
  });

  storeBase.errorHandling.addReservedName('$add');

  return storeBase;
}

module.exports = {
  build: buildDataStore
};

},{"./errorHandlingManager":9}],11:[function(_dicRq_,module,exports){
'use strict';

function addSingle(nameValue, store) {
  var nameValueMap, valueNameMap;

  nameValueMap = store.nameValueMap;
  valueNameMap = store.valueNameMap;

  nameValueMap[nameValue.name] = nameValue.value;
  valueNameMap[store.getValueKey(nameValue)] = nameValue.name;
}

function checkAddSingle(options) {
  options.errorHandling.throwRelevantError(options.nameValue);
  addSingle(options.nameValue, options.store);
}

function addAll(nameValues, store) {
  var keys;

  keys = Object.keys(nameValues);

  keys.forEach(function(name) {
    checkAddSingle({
      errorHandling: store.errorHandling,
      store: store,
      nameValue: { name: name, value: nameValues[name]}
    });
  });

}

module.exports = {
  addAll: addAll,
  addSingle: addSingle
};

},{}],12:[function(_dicRq_,module,exports){
'use strict';

var storeBuilder, storeManagement;

storeBuilder = _dicRq_('./storeBuilder');
storeManagement = _dicRq_('./storeManagement');

function addPropertyErrorHandling(options) {
  Object.defineProperty(options.store,
    'errorHandling',
    {
      enumerable: false,
      configurable: false,
      get: function() { return options.storeBase.errorHandling; }
    });
}

function addPropertyAddReservedName(options) {
  Object.defineProperty(options.store,
    'addReservedName',
    {
      enumerable: false,
      configurable: false,
      get: function() { return options.storeBase.errorHandling.addReservedName; }
    });
}

function addProperties(options) {
  addPropertyErrorHandling(options);
  addPropertyAddReservedName(options);
}

function createStore(storeBase) {
  var store;

  store = {
    add: function(nameValues) { storeManagement.addAll(nameValues, storeBase); },
    data: storeBase
  };

  return store;
}

function buildstoreManager(options) {
  var storeBase, store;

  storeBase = storeBuilder.build(options);
  store = createStore(storeBase);

  addProperties({
    store: store,
    storeBase: storeBase
  });

  return store;
}

module.exports = {
  build: buildstoreManager
};

},{"./storeBuilder":10,"./storeManagement":11}]},{},[1]);

//# sourceMappingURL=dictionary.js.map;

  return _dicRq_(itemToExport);
}));
},{}],3:[function(_conRq_,module,exports){
'use strict';

var dictionary, build;

dictionary = _conRq_('dictionary.js');

build = function() {
    var attributes = dictionary.build({
      dictionaryName: 'attributes'
    });

    attributes.$add({
      accesskey: 'accesskey',
      class: 'class',
      contenteditable: 'contenteditable',
      contextmenu: 'contextmenu',
      draggable: 'draggable',
      dropzone: 'dropzone',
      hidden: 'hidden',
      id: 'id',
      inert: 'inert',
      itemid: 'itemid',
      itemprop: 'itemprop',
      itemref: 'itemref',
      itemscope: 'itemscope',
      itemtype: 'itemtype',
      lang: 'lang',
      xmlLang: 'xml:lang',
      spellcheck: 'spellcheck',
      style: 'style',
      tabindex: 'tabindex',
      title: 'title',
      translate: 'translate',
      role: 'role',
      onabort: 'onabort',
      ondragleave: 'ondragleave',
      onload: 'onload',
      onratechange: 'onratechange',
      onblur: 'onblur',
      ondragover: 'ondragover',
      onloadeddata: 'onloadeddata',
      onreset: 'onreset',
      oncancel: 'oncancel',
      ondragstart: 'ondragstart',
      onloadedmetadata: 'onloadedmetadata',
      onscroll: 'onscroll',
      oncanplay: 'oncanplay',
      ondrop: 'ondrop',
      onloadstart: 'onloadstart',
      onseeked: 'onseeked',
      oncanplaythrough: 'oncanplaythrough',
      ondurationchange: 'ondurationchange',
      onmousedown: 'onmousedown',
      onseeking:'onseeking',
      onchange: 'onchange',
      onemptied: 'onemptied',
      onmousemove: 'onmousemove',
      onselect: 'onselect',
      onclick: 'onclick',
      onended: 'onended',
      onmouseout: 'onmouseout',
      onshow: 'onshow',
      onclose: 'onclose',
      onerror: 'onerror',
      onmouseover: 'onmouseover',
      onsort: 'onsort',
      oncontextmenu: 'oncontextmenu',
      onfocus: 'onfocus',
      onmouseup: 'onmouseup',
      onstalled: 'onstalled',
      oncuechange: 'oncuechange',
      oninput: 'oninput',
      onmousewheel: 'onmousewheel',
      onsubmit: 'onsubmit',
      ondblclick: 'ondblclick',
      oninvalid: 'oninvalid',
      onpause: 'onpause',
      onsuspend: 'onsuspend',
      ondrag: 'ondrag',
      onkeydown: 'onkeydown',
      onplay: 'onplay',
      ontimeupdate: 'ontimeupdate',
      ondragend: 'ondragend',
      onkeypress: 'onkeypress',
      onplaying: 'onplaying',
      onvolumechange: 'onvolumechange',
      ondragenter: 'ondragenter',
      onkeyup: 'onkeyup',
      onprogress: 'onprogress',
      onwaiting: 'onwaiting',
      download: 'download',
      href: 'href',
      hreflang: 'hreflang',
      media: 'media',
      ping: 'ping',
      rel: 'rel',
      target: 'target',
      type: 'type',
      alt: 'alt',
      coords: 'coords',
      shape: 'shape',
      autoplay: 'autoplay',
      controls: 'controls',
      crossorigin: 'crossorigin',
      loop: 'loop',
      mediagroup: 'mediagroup',
      muted: 'muted',
      preload: 'preload',
      src: 'src',
      dir: 'dir',
      cite: 'cite',
      onafterprint: 'onafterprint',
      onbeforeprint: 'onbeforeprint',
      onbeforeunload: 'onbeforeunload',
      onhashchange: 'onhashchange',
      onmessage: 'onmessage',
      onoffline: 'onoffline',
      onpagehide: 'onpagehide',
      onpageshow: 'onpageshow',
      onpopstate: 'onpopstate',
      onresize: 'onresize',
      onunload: 'onunload',
      autofocus: 'autofocus',
      disabled: 'disabled',
      form: 'form',
      formaction: 'formaction',
      formenctype: 'formenctype',
      formmethod: 'formethod',
      formonvalidate: 'formonvalidate',
      formtarget: 'formtarget',
      menu: 'menu',
      name: 'name',
      value: 'value',
      height: 'height',
      width: 'width',
      span: 'span',
      checked: 'checked',
      command: 'command',
      icon: 'icon',
      label: 'label',
      radiogroup: 'radiogroup',
      datetime: 'datetime',
      open: 'open',
      acceptcharset: 'accept-charset',
      action: 'action',
      autocomplete: 'autocomplete',
      enctype: 'enctype',
      method: 'method',
      novalidate: 'novalidate',
      manifest: 'manifest',
      xmlns: 'xmlns',
      allowfullscreen: 'allowfullscreen',
      sandbox: 'sandbox',
      seamless: 'seamless',
      srcdoc: 'srcdoc',
      ismap: 'ismap',
      srcset: 'srcset',
      usemap: 'usemap',
      accept: 'accept',
      dirname: 'dirname',
      inputmode: 'inputmode',
      list: 'list',
      max: 'max',
      maxlength: 'maxlength',
      min: 'min',
      multiple: 'multiple',
      pattern: 'pattern',
      placeholder: 'placeholder',
      readonly: 'readonly',
      required: 'required',
      size: 'size',
      step: 'step',
      challenge: 'challenge',
      keytype: 'keytype',
      for: 'for',
      sizes: 'sizes',
      default: 'default',
      charset: 'charset',
      content: 'content',
      httpequiv: 'http-equiv',
      high: 'high',
      low: 'low',
      optimum: 'optimum',
      data: 'data',
      typemustmatch: 'typemustmatch',
      reversed: 'reversed',
      start: 'start',
      selected: 'selected',
      xmlspace: 'xml:space',
      async: 'async',
      defer: 'defer',
      scoped: 'scoped',
      border: 'border',
      sortable: 'sortable',
      colspan: 'colspan',
      headers: 'headers',
      rowspan: 'rowspan',
      cols: 'cols',
      rows: 'rows',
      wrap: 'wrap',
      scope: 'scope',
      sorted: 'sorted',
      pubdate: 'pubdate',
      kind: 'kind',
      srclang: 'srclang',
      poster: 'poster'
  });

  return attributes;
};

module.exports = {
  build: build
};

},{"dictionary.js":2}],4:[function(_conRq_,module,exports){
'use strict';

var domConstants, build;

domConstants = _conRq_('../helpers/domConstants');

build = function() {
  var classes = domConstants.build({
    dictionaryName: 'cssClasses',
    selectorSymbol: '.'
  });

  classes.$add({
    active: 'active',
    inactive: 'inactive'
  });

  return classes;
};

module.exports = {
  build:build
};

},{"../helpers/domConstants":9}],5:[function(_conRq_,module,exports){
'use strict';

var dictionary, build;

dictionary = _conRq_('dictionary.js');

build = function() {
  var events = dictionary.build({
    dictionaryName: 'events'
  });

  events.$add({
    click: 'click',
    abort: 'abort',
    dragleave: 'dragleave',
    load: 'load',
    ratechange: 'ratechange',
    blur: 'blur',
    dragover: 'dragover',
    loadeddata: 'loadeddata',
    reset: 'reset',
    cancel: 'cancel',
    dragstart: 'dragstart',
    loadedmetadata: 'loadedmetadata',
    scroll: 'scroll',
    canplay: 'canplay',
    drop: 'drop',
    loadstart: 'loadstart',
    seeked: 'seeked',
    canplaythrough: 'canplaythrough',
    duratichange: 'duratichange',
    mousedown: 'mousedown',
    seeking:'seeking',
    change: 'change',
    emptied: 'emptied',
    mousemove: 'mousemove',
    select: 'select',
    ended: 'ended',
    mouseout: 'mouseout',
    show: 'show',
    close: 'close',
    error: 'error',
    mouseover: 'mouseover',
    sort: 'sort',
    ctextmenu: 'ctextmenu',
    focus: 'focus',
    mouseup: 'mouseup',
    stalled: 'stalled',
    cuechange: 'cuechange',
    input: 'input',
    mousewheel: 'mousewheel',
    submit: 'submit',
    dblclick: 'dblclick',
    invalid: 'invalid',
    pause: 'pause',
    suspend: 'suspend',
    drag: 'drag',
    keydown: 'keydown',
    play: 'play',
    timeupdate: 'timeupdate',
    dragend: 'dragend',
    keypress: 'keypress',
    playing: 'playing',
    volumechange: 'volumechange',
    dragenter: 'dragenter',
    keyup: 'keyup',
    progress: 'progress',
    waiting: 'waiting',
    afterprint: 'afterprint',
    beforeprint: 'beforeprint',
    beforeunload: 'beforeunload',
    hashchange: 'hashchange',
    message: 'message',
    offline: 'offline',
    pagehide: 'pagehide',
    pageshow: 'pageshow',
    popstate: 'popstate',
    resize: 'resize',
    unload: 'unload'
  });

  return events;
};

module.exports = {
  build:build
};

},{"dictionary.js":2}],6:[function(_conRq_,module,exports){
'use strict';

var domConstants, build;

domConstants = _conRq_('./../helpers/domConstants');

build = function() {
  var ids = domConstants.build({
    dictionaryName: 'ids',
    selectorSymbol: '#'
  });

  ids.$add({});

  return ids;
};

module.exports = {
  build:build
};

},{"./../helpers/domConstants":9}],7:[function(_conRq_,module,exports){
'use strict';

var dictionary, build;

dictionary = _conRq_('dictionary.js');

function buildLocalizationValue(localizationValue, baseDictionary) {
  return {
    name: localizationValue,
    getLocalizedValue: function() { return baseDictionary.$getLocalizedValue(localizationValue); }
  };
}

function extendAddFunction(baseDictionary) {
  var superAdd;

  superAdd = baseDictionary.$add;

  baseDictionary.$add = function(nameValues) {
    var givenValues, nameValueNames;

    givenValues = {};
    nameValueNames = Object.keys(nameValues);

    nameValueNames.forEach(function(localizationName) {
      givenValues[localizationName] = buildLocalizationValue(nameValues[localizationName], baseDictionary);
    });

    superAdd(givenValues);
  };
}

build = function() {
  var localizations;

  // instead of linking the function directly, we link a function that calls the function, this allows us
  // to change or set getLocalizedValue at a later time after adding the localization value.
  localizations = dictionary.build({
    dictionaryName: 'localizations',
    reservedNames: ['$setGetLocalizedValueFunction', '$getLocalizedValue'],
    valueKeyFunction: function(nameValue) {
        return nameValue.value.name;
      }
  });

  localizations.$setGetLocalizedValueFunction = function(getLocalizedValue) {
    localizations.$getLocalizedValue = getLocalizedValue;
  };

  extendAddFunction(localizations);

  localizations.$add({});

  return localizations;
};

module.exports = {
  build: build,
  buildLocalizationValue: buildLocalizationValue,
  extendAddFunction: extendAddFunction
};

},{"dictionary.js":2}],8:[function(_conRq_,module,exports){
'use strict';

var dictionary, build;

dictionary = _conRq_('dictionary.js');

function buildHtmlTagValue(tagName, baseConstantsObject) {
  var html = '<' + tagName + ' />';

  return {
    html: html,
    name: tagName,
    buildElement: function() {
      return baseConstantsObject.$elementBuilder(html);
    }
  };
}

function extendAddFunction(baseConstantsObject) {
  var superAdd;
  superAdd = baseConstantsObject.$add;

  baseConstantsObject.$add = function(nameValues) {
    // we should be able to simply add the name, img, div, span, then make a tag out of it.
    var givenValues, nameValueNames;

    givenValues = {};
    nameValueNames = Object.keys(nameValues);

    nameValueNames.forEach(function(tagName) {
      givenValues[tagName] = buildHtmlTagValue(nameValues[tagName], baseConstantsObject);
    });

    superAdd(givenValues);
  };

}

function addHtmlTags(tags){
  tags.$add({
    anchor: 'a',
    abbr: 'abbr',
    address: 'address',
    area: 'area',
    article: 'article',
    aside: 'aside',
    audio: 'audio',
    b: 'b',
    base: 'base',
    bdi: 'bdi',
    bdo: 'bdo',
    blockquote: 'blockquote',
    body: 'body',
    br: 'br',
    button: 'button',
    canvas: 'canvas',
    caption: 'caption',
    cite: 'cite',
    code: 'code',
    col: 'col',
    colgroup: 'colgroup',
    command: 'command',
    data: 'data',
    datalist: 'datalist',
    dd: 'dd',
    del: 'del',
    details: 'details',
    dfn: 'dfn',
    dialog: 'dialog',
    div: 'div',
    dl: 'dl',
    dt: 'dt',
    em: 'em',
    embed: 'embed',
    fieldset: 'fieldset',
    figcaption: 'figcaption',
    figure: 'figure',
    footer: 'footer',
    form: 'form',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    head: 'head',
    header: 'hedaer',
    hgroup: 'hgroup',
    hr: 'hr',
    html: 'html',
    i: 'i',
    iframe: 'iframe',
    img: 'img',
    input: 'input',
    ins: 'ins',
    kbd: 'kbd',
    keygen: 'keygen',
    label: 'label',
    legend: 'legend',
    li: 'li',
    link: 'link',
    main: 'main',
    map: 'map',
    mark: 'mark',
    menu: 'menu',
    menuitem: 'menuitem',
    meta: 'meta',
    meter: 'meter',
    nav: 'nav',
    noscript: 'noscript',
    object: 'object',
    ol: 'ol',
    optgroup: 'optgroup',
    option: 'option',
    output: 'output',
    p: 'p',
    param: 'param',
    pre: 'pre',
    progress: 'progress',
    q: 'q',
    rp: 'rp',
    rt: 'rt',
    ruby: 'ruby',
    s: 's',
    samp: 'samp',
    script: 'script',
    section: 'section',
    select: 'select',
    small: 'small',
    source: 'source',
    span: 'span',
    strong: 'strong',
    style: 'style',
    sub: 'sub',
    summary: 'summary',
    sup: 'sup',
    table: 'table',
    tbody: 'tbody',
    td: 'td',
    textarea: 'textarea',
    tfoot: 'tfoot',
    th: 'th',
    thead: 'thead',
    time: 'time',
    title: 'title',
    tr: 'tr',
    track: 'track',
    u: 'u',
    ul: 'ul',
    var: 'var',
    video: 'video',
    wbr: 'wbr'
  });
}

build = function() {
  var tags;

  tags = dictionary.build({
    dictionaryName: 'tags',
    reservedNames: ['$elementBuilder', '$setElementBuilderFunction'],
    valueKeyFunction: function(nameValue) {
      return nameValue.value.name;
    }
  });

  tags.$setElementBuilderFunction = function(elementBuilder) {
    tags.$elementBuilder = elementBuilder;
  };

  extendAddFunction(tags);

  addHtmlTags(tags);

  return tags;
};

module.exports = {
  build: build,
  extendAddFunction: extendAddFunction,
  buildHtmlTagValue: buildHtmlTagValue,
  addHtmlTags: addHtmlTags
};

},{"dictionary.js":2}],9:[function(_conRq_,module,exports){
'use strict';

var dictionary, buildDomConstantsObject;

dictionary = _conRq_('dictionary.js');

function buildConstantsObject(options) {
  var domConstants, reservedNames;

  reservedNames = options.reservedNames ? options.reservedNames : [];
  reservedNames.push('$setFindElementsFunction');

  domConstants = dictionary.build({
    reservedNames: reservedNames,
    dictionaryName: options.dictionaryName,
    valueKeyFunction: function(nameValue) {
      return nameValue.value.name;
    }
  });

  return domConstants;
}

function createDomValue(domValue, domConstants, selectorSymbol){
  var selector = selectorSymbol + domValue;

  return {
    name: domValue,
    selector: selector,
    findElements: function() {
      return domConstants.$findElements(selector);
    }
  };
}

function extendAddFunction(addDefinition) {
  var superAdd = addDefinition.constantsBase.$add;

  addDefinition.constantsBase.$add = function(nameValues) {
    var valuesToAdd, nameValueNames;

    valuesToAdd = {};

    nameValueNames = Object.keys(nameValues);

    nameValueNames.forEach(function(domName){
      valuesToAdd[domName] = createDomValue(nameValues[domName], addDefinition.constantsBase, addDefinition.selectorSymbol);
    });

    superAdd(valuesToAdd);
  };
}

buildDomConstantsObject = function(options) {
  var domConstant;

  domConstant = buildConstantsObject(options);

  extendAddFunction({
    selectorSymbol: options.selectorSymbol,
    constantsBase: domConstant
  });

  domConstant.$setFindElementsFunction = function(findElements) {
    domConstant.$findElements = findElements;
  };

  return domConstant;
};

module.exports = {
  build: buildDomConstantsObject,
  extendAddFunction: extendAddFunction,
  createDomValue: createDomValue
};

},{"dictionary.js":2}]},{},[1]);

//# sourceMappingURL=constants.js.map;

  return _conRq_(itemToExport);
}));