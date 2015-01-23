'use strict';

var nameValueObject, buildConstantsObject;

nameValueObject = require('./helpers/nameValueObject');

buildConstantsObject = function() {
  var tags, superAdd;

  function buildHtmlTagValue(tagName) {
    var html = '<' + tagName + ' />';

    return {
      html: html,
      name: tagName,
      buildElement: function() {
        return tags.$elementBuilder(html);
      }
    };
  }

  tags = nameValueObject.createNameValueObject({}, function(nameValue) {
    return nameValue.value.name;
  });

  superAdd = tags.$add;

  tags.$add = function(nameValues) {
    // we should be able to simply add the name, img, div, span, then make a tag out of it.
    var givenValues, tagName;

    givenValues = {};
    tagName = {};

    for (tagName in nameValues) {
      if (nameValues.hasOwnProperty(tagName)) {
        givenValues[tagName] = buildHtmlTagValue(nameValues[tagName]);
      }
    }

    superAdd(givenValues);
  };

  tags.$setElementBuilderFunction = function(elementBuilder) {
    tags.$elementBuilder = elementBuilder;
  };

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

  return tags;
};

module.exports = {
  buildConstantsObject:buildConstantsObject
};
