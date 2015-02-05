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
  var require, itemToExport;

  // this is the what is defined in browserify's "entry" item in the configBundles array.
  // located in gulp/config.js under "browserify"
  itemToExport = 1;

  require = (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var cssClasses, ids, attributes, tags, events, localizations, build;

cssClasses = require('./definitions/cssClasses');
ids = require('./definitions/ids');
attributes = require('./definitions/attributes');
tags = require('./definitions/tags');
events = require('./definitions/events');
localizations = require('./definitions/localizations');

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

},{"./definitions/attributes":2,"./definitions/cssClasses":3,"./definitions/events":4,"./definitions/ids":5,"./definitions/localizations":6,"./definitions/tags":7}],2:[function(require,module,exports){
'use strict';

var dictionary, build;

dictionary = require('../helpers/constantsDictionary');

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

},{"../helpers/constantsDictionary":8}],3:[function(require,module,exports){
'use strict';

var domConstants, build;

domConstants = require('../helpers/domConstants');

build = function() {
  var classes = domConstants.build({
    constantsObjectName: 'cssClasses',
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

},{"../helpers/domConstants":19}],4:[function(require,module,exports){
'use strict';

var dictionary, build;

dictionary = require('../helpers/constantsDictionary');

build = function() {
  var events = dictionary.createNameValueObject({
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

},{"../helpers/constantsDictionary":8}],5:[function(require,module,exports){
'use strict';

var domConstants, build;

domConstants = require('./../helpers/domConstants');

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

},{"./../helpers/domConstants":19}],6:[function(require,module,exports){
'use strict';

var dictionary, build;

dictionary = require('../helpers/constantsDictionary');

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
    var givenValues, localizationName;

    givenValues = {};

    for (localizationName in nameValues) {
      if (nameValues.hasOwnProperty(localizationName)) {
        givenValues[localizationName] = buildLocalizationValue(nameValues[localizationName], baseDictionary);
      }
    }

    superAdd(givenValues);
  };
}

build = function() {
  var localizations;

  // instead of linking the function directly, we link a function that calls the function, this allows us
  // to change or set getLocalizedValue at a later time after adding the localization value.
  localizations = dictionary.build({
    dictionaryName: 'localizations',
    reservedWords: ['$setGetLocalizedValueFunction', '$getLocalizedValue'],
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

},{"../helpers/constantsDictionary":8}],7:[function(require,module,exports){
'use strict';

var dictionary, build;

dictionary = require('../helpers/constantsDictionary');

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
    var givenValues, tagName;

    givenValues = {};
    tagName = {};

    for (tagName in nameValues) {
      if (nameValues.hasOwnProperty(tagName)) {
        givenValues[tagName] = buildHtmlTagValue(nameValues[tagName], baseConstantsObject);
      }
    }

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
    reservedWords: ['$elementBuilder', '$setElementBuilderFunction'],
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

},{"../helpers/constantsDictionary":8}],8:[function(require,module,exports){
'use strict';

var constantsStoreManager, constantsDictionaryFactory, createDictionary;

constantsStoreManager = require('./constantsDictionaryUtility/constantsStore/constantsStoreManager');
// needs a better name.
constantsDictionaryFactory = require('./constantsDictionaryUtility/constantsDictionaryFactory');

createDictionary = function(options) {
  var constantsStore, getValueKey;

  options.reservedWords = options.reservedWords ? options.reservedWords : [];

  getValueKey = options.valueKeyFunction || function(nameValue) {
    return nameValue.value;
  };

  constantsStore = constantsStoreManager.build({
    getValueKey: getValueKey
  });

  options.reservedWords.forEach(constantsStore.addReservedName);

  return constantsDictionaryFactory.build(constantsStore);
};


module.exports = {
  build: createDictionary
};

},{"./constantsDictionaryUtility/constantsDictionaryFactory":13,"./constantsDictionaryUtility/constantsStore/constantsStoreManager":15}],9:[function(require,module,exports){
'use strict';

var nameExistsErrorDefinitionFactory, valueExistsErrorDefinitionFactory, reservedNameErrorDefinitionFactory;

nameExistsErrorDefinitionFactory = require('./constantsDictionaryErrors/nameExistsErrorDefinitionFactory');
valueExistsErrorDefinitionFactory = require('./constantsDictionaryErrors/valueExistsErrorDefinitionFactory');
reservedNameErrorDefinitionFactory = require('./constantsDictionaryErrors/reservedNameErrorDefinitionFactory');


function addErrorHandling(options) {
  var errorHandling = options.errorHandling;

  var reservedNameErrorDefinition = reservedNameErrorDefinitionFactory.build(options.constantsStore);

  errorHandling.addErrorDefinition(nameExistsErrorDefinitionFactory.build(options.constantsStore));
  errorHandling.addErrorDefinition(valueExistsErrorDefinitionFactory.build(options.constantsStore));
  errorHandling.addErrorDefinition(reservedNameErrorDefinition);

  errorHandling.addReservedName = reservedNameErrorDefinition.addReservedName;
}


module.exports = {
  addErrorHandling: addErrorHandling
};

},{"./constantsDictionaryErrors/nameExistsErrorDefinitionFactory":10,"./constantsDictionaryErrors/reservedNameErrorDefinitionFactory":11,"./constantsDictionaryErrors/valueExistsErrorDefinitionFactory":12}],10:[function(require,module,exports){
'use strict';
var stringFormatter, nameExistsError;

stringFormatter = require('../../stringFormatter');

nameExistsError = 'name "{name}" is already in use, value is {value}';


function buildNameExistsError(nameValue, constantsStore) {
  var errorText = stringFormatter.format(nameExistsError,
    {
      name: nameValue.name,
      value: constantsStore.getValueKey(nameValue)
    });

    return new Error(errorText);
  }


  function nameExistsErrorCondition(nameValue, constantsStore) {
    return !!constantsStore.nameValueMap[nameValue.name];
  }

  function buildValueExistsErrorDefinition (constantsStore) {
    return {
      errorName: 'nameExists',
      errorCondition: function(nameValue) { return nameExistsErrorCondition(nameValue, constantsStore); },
      errorBuilder: function(nameValue) { return buildNameExistsError(nameValue, constantsStore); }
    };
  }

  module.exports = {
    build: buildValueExistsErrorDefinition
  };

},{"../../stringFormatter":20}],11:[function(require,module,exports){
'use strict';
var stringFormatter, nameExistsError;

stringFormatter = require('../../stringFormatter');

nameExistsError = 'name "{name}" is reserved for {type} constants dictionary';


function buildNameReservedError(nameValue, constantsStore) {
  var errorText = stringFormatter.format(nameExistsError,
    {
      name: nameValue.name,
      type: constantsStore.constantsDictionaryName
    });

    return new Error(errorText);
  }


  function nameReservedErrorCondition(nameValue, reservedNames) {
    return !!reservedNames[nameValue.name];
  }

  function addReservedName(name, reservedNames) {
    reservedNames[name] = true;
  }

  function buildReservedNameErrorDefinition (constantsStore) {
    var reservedNames = {};
    return {
      errorName: 'nameReserved',
      errorCondition: function(nameValue) { return nameReservedErrorCondition(nameValue, reservedNames); },
      errorBuilder: function(nameValue) { return buildNameReservedError(nameValue, constantsStore); },
      addReservedName: function(name) { addReservedName(name, reservedNames); }
    };
  }

  module.exports = {
    build: buildReservedNameErrorDefinition
  };

},{"../../stringFormatter":20}],12:[function(require,module,exports){
'use strict';
var stringFormatter, valueExistsErrorText;

stringFormatter = require('../../stringFormatter');

valueExistsErrorText = 'given name {givenName} with a value of "{value}" already exists with a name of "{name}"';


function buildValueExistsError(nameValue, constantsStore) {
  var errorText = stringFormatter.format(valueExistsErrorText,
    {
      givenName: nameValue.name,
      name: constantsStore.valueNameMap[constantsStore.getValueKey(nameValue)],
      value: constantsStore.getValueKey(nameValue)
    });

  return new Error(errorText);
}


function valueExistsErrorCondition(nameValue, constantsStore) {
  return !!constantsStore.valueNameMap[nameValue.value];
}

function buildValueExistsErrorDefinition (constantsStore) {
  return {
    errorName: 'valueExists',
    errorCondition: function(nameValue) { return valueExistsErrorCondition(nameValue, constantsStore); },
    errorBuilder: function(nameValue) { return buildValueExistsError(nameValue, constantsStore); }
  };
}

module.exports = {
  build: buildValueExistsErrorDefinition
};

},{"../../stringFormatter":20}],13:[function(require,module,exports){
'use strict';

function buildDictionary(constantsStore) {
  var dictionary = Object.create(constantsStore.data.nameValueMap);
  dictionary.$add = constantsStore.add;

  return dictionary;
}

module.exports = {
  build: buildDictionary
};

},{}],14:[function(require,module,exports){
'use strict';

var constantsStoreErrorHandlingManager;

constantsStoreErrorHandlingManager = require('./errorHandlingManager');

function buildDataStore(options) {
  var storeBase;

  storeBase = {
    nameValueMap: {},
    valueNameMap: {},
    getValueKey: options.getValueKey
  };

  storeBase = constantsStoreErrorHandlingManager.addToStore({
    store: storeBase,
    constantsObjectName: options.constantsObjectName,
    errorHandling: storeBase.errorHandling
  });

  storeBase.errorHandling.addReservedName('$add');

  return storeBase;
}

module.exports = {
  build: buildDataStore
};

},{"./errorHandlingManager":16}],15:[function(require,module,exports){
'use strict';

var constantsStoreFactory, storeManagement;

constantsStoreFactory = require('./constantsStoreFactory');
storeManagement = require('./storeManagement');

function addPropertyErrorHandling(options) {
  Object.defineProperty(options.constantsStore,
    'errorHandling',
    {
      enumerable: false,
      configurable: false,
      get: function() { return options.storeBase.errorHandling; }
    });
}

function addPropertyAddReservedName(options) {
  Object.defineProperty(options.constantsStore,
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
  var constantsStore;

  constantsStore = {
    add: function(nameValues) { storeManagement.addAll(nameValues, storeBase); },
    data: storeBase
  };

  return constantsStore;
}

function buildConstantsStoreManager(options) {
  var storeBase, constantsStore;

  storeBase = constantsStoreFactory.build(options);
  constantsStore = createStore(storeBase);

  addProperties({
    constantsStore: constantsStore,
    storeBase: storeBase
  });

  return constantsStore;
}

module.exports = {
  build: buildConstantsStoreManager
};

},{"./constantsStoreFactory":14,"./storeManagement":17}],16:[function(require,module,exports){
'use strict';

var errorHandlingFactory, constantsDictionaryErrorHandling;

errorHandlingFactory = require('../errorHandlingFactory');
constantsDictionaryErrorHandling = require('../constantsDictionaryErrorHandling');

function addErrorHandling(options) {

  var errorHandling = errorHandlingFactory.build();

  constantsDictionaryErrorHandling.addErrorHandling({
    constantsStore: options.store,
    constantsObjectName: options.constantsObjectName,
    errorHandling: errorHandling
  });

  options.store.errorHandling = errorHandling;

  return options.store;
}

module.exports = {
  addToStore: addErrorHandling
};

},{"../constantsDictionaryErrorHandling":9,"../errorHandlingFactory":18}],17:[function(require,module,exports){
'use strict';

function addSingle(nameValue, constantsStore) {
  var nameValueMap, valueNameMap;

  nameValueMap = constantsStore.nameValueMap;
  valueNameMap = constantsStore.valueNameMap;

  nameValueMap[nameValue.name] = nameValue.value;
  valueNameMap[constantsStore.getValueKey(nameValue)] = nameValue.name;
}

function addAll(nameValues, constantsStore) {
  var name, nameValue;

  for (name in nameValues) {
    nameValue = {name: name, value: nameValues[name]};

    if (nameValues.hasOwnProperty(name)) {
      constantsStore.errorHandling.throwRelevantError(nameValue);
      addSingle({name: name, value: nameValues[name]}, constantsStore);
    }
  }
}

module.exports = {
  addAll: addAll,
  addSingle: addSingle
};

},{}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
'use strict';

var nameValueObject, buildDomConstantsObject;

nameValueObject = require('./constantsDictionary');

function buildConstantsObject(domConstantsDefinition) {
  var domConstants, reservedWords;

  reservedWords = domConstantsDefinition.reservedWorlds ? domConstantsDefinition.reservedWorlds : [];
  reservedWords.push('$setFindElementsFunction');

  domConstants = nameValueObject.createNameValueObject({
    reservedWords: reservedWords,
    constantsObjectName: domConstantsDefinition.constantsObjectName,
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
    var domName, valuesToAdd;

    valuesToAdd = {};

    for (domName in nameValues) {
      if (nameValues.hasOwnProperty(domName)) {
        valuesToAdd[domName] = createDomValue(nameValues[domName], addDefinition.constantsBase, addDefinition.selectorSymbol);
      }
    }

    superAdd(valuesToAdd);
  };
}

buildDomConstantsObject = function(domConstantsDefinition) {
  var domConstant;

  domConstant = buildConstantsObject(domConstantsDefinition);

  extendAddFunction({
    selectorSymbol: domConstantsDefinition.selectorSymbol,
    constantsBase: domConstant
  });

  domConstant.$setFindElementsFunction = function(findElements) {
    domConstant.$findElements = findElements;
  };

  return domConstant;
};

module.exports = {
  buildDomConstantsObject: buildDomConstantsObject,
  extendAddFunction: extendAddFunction,
  createDomValue: createDomValue
};

},{"./constantsDictionary":8}],20:[function(require,module,exports){
'use strict';

/*
example:
var format = 'this is test {testGiven} for a showing how to use {name}';
var formattedString = format(fomat, {
  testGiven: 'stringFormatter',
  name: 'format'
});
 */

//TODO: Evaluate if there is a need to pull this into it's own library? Perhaps if we get more utility functions
function format(stringToFormat, values) {
  return stringToFormat.replace(/{(\w+)}/g, function(match, value) {
    return (values[value] !== undefined) ? values[value] : match;
  });
}

module.exports = {
  format: format
};

},{}]},{},[1]);

//# sourceMappingURL=constants.js.map;

  return require(itemToExport);
}));