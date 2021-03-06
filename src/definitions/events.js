'use strict';

var dictionary, build;

dictionary = require('dictionary.js');

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
