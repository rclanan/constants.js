!function(e,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n():e.constants=n()}(this,function(){var e,n,t;return function(i){function r(e,n){return O.call(e,n)}function a(e,n){var t,i,r,a,o,u,c,f,s,l,d,m=n&&n.split("/"),p=g.map,v=p&&p["*"]||{};if(e&&"."===e.charAt(0))if(n){for(m=m.slice(0,m.length-1),e=e.split("/"),o=e.length-1,g.nodeIdCompat&&$.test(e[o])&&(e[o]=e[o].replace($,"")),e=m.concat(e),s=0;s<e.length;s+=1)if(d=e[s],"."===d)e.splice(s,1),s-=1;else if(".."===d){if(1===s&&(".."===e[2]||".."===e[0]))break;s>0&&(e.splice(s-1,2),s-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((m||v)&&p){for(t=e.split("/"),s=t.length;s>0;s-=1){if(i=t.slice(0,s).join("/"),m)for(l=m.length;l>0;l-=1)if(r=p[m.slice(0,l).join("/")],r&&(r=r[i])){a=r,u=s;break}if(a)break;!c&&v&&v[i]&&(c=v[i],f=s)}!a&&c&&(a=c,u=f),a&&(t.splice(0,u,a),e=t.join("/"))}return e}function o(e,n){return function(){return m.apply(i,j.call(arguments,0).concat([e,n]))}}function u(e){return function(n){return a(n,e)}}function c(e){return function(n){h[e]=n}}function f(e){if(r(b,e)){var n=b[e];delete b[e],y[e]=!0,d.apply(i,n)}if(!r(h,e)&&!r(y,e))throw new Error("No "+e);return h[e]}function s(e){var n,t=e?e.indexOf("!"):-1;return t>-1&&(n=e.substring(0,t),e=e.substring(t+1,e.length)),[n,e]}function l(e){return function(){return g&&g.config&&g.config[e]||{}}}var d,m,p,v,h={},b={},g={},y={},O=Object.prototype.hasOwnProperty,j=[].slice,$=/\.js$/;p=function(e,n){var t,i=s(e),r=i[0];return e=i[1],r&&(r=a(r,n),t=f(r)),r?e=t&&t.normalize?t.normalize(e,u(n)):a(e,n):(e=a(e,n),i=s(e),r=i[0],e=i[1],r&&(t=f(r))),{f:r?r+"!"+e:e,n:e,pr:r,p:t}},v={require:function(e){return o(e)},exports:function(e){var n=h[e];return"undefined"!=typeof n?n:h[e]={}},module:function(e){return{id:e,uri:"",exports:h[e],config:l(e)}}},d=function(e,n,t,a){var u,s,l,d,m,g,O=[],j=typeof t;if(a=a||e,"undefined"===j||"function"===j){for(n=!n.length&&t.length?["require","exports","module"]:n,m=0;m<n.length;m+=1)if(d=p(n[m],a),s=d.f,"require"===s)O[m]=v.require(e);else if("exports"===s)O[m]=v.exports(e),g=!0;else if("module"===s)u=O[m]=v.module(e);else if(r(h,s)||r(b,s)||r(y,s))O[m]=f(s);else{if(!d.p)throw new Error(e+" missing "+s);d.p.load(d.n,o(a,!0),c(s),{}),O[m]=h[s]}l=t?t.apply(h[e],O):void 0,e&&(u&&u.exports!==i&&u.exports!==h[e]?h[e]=u.exports:l===i&&g||(h[e]=l))}else e&&(h[e]=t)},e=n=m=function(e,n,t,r,a){if("string"==typeof e)return v[e]?v[e](n):f(p(e,n).f);if(!e.splice){if(g=e,g.deps&&m(g.deps,g.callback),!n)return;n.splice?(e=n,n=t,t=null):e=i}return n=n||function(){},"function"==typeof t&&(t=r,r=a),r?d(i,e,n,t):setTimeout(function(){d(i,e,n,t)},4),m},m.config=function(e){return m(e)},e._defined=h,t=function(e,n,t){n.splice||(t=n,n=[]),r(h,e)||r(b,e)||(b[e]=[e,n,t])},t.amd={jQuery:!0}}(),t("almond",function(){}),t("helpers/domConstants",[],function(){function e(e){var n,t,i;return n=nameValueObject.createNameValueObject({},function(e){return e.value.name}),t=n.$add,i=function(t){var i=e+t;return{name:t,selector:i,findElements:function(){return n.$findElements(i)}}},n.$add=function(e){var n,r;r={};for(n in e)e.hasOwnProperty(n)&&(r[n]=i(e[name]));t(r)},n.$setFindElementsFunction=function(e){n.$findElements=e},n}return{buildDomConstantsObject:e}}),t("definitions/cssClasses",["helpers/domConstants"],function(e){var n;return n=e.buildDomConstantsObject("."),n.$add({active:"active",inactive:"inactive"}),n}),t("definitions/ids",["helpers/domConstants"],function(e){var n;return n=e.buildDomConstantsObject("#"),n.$add({}),n}),t("helpers/format",[],function(){function e(e,n){return e.replace(/{(\w+)}/g,function(e,t){return void 0!==n[t]?n[t]:e})}return e}),t("helpers/nameValueObject",["helpers/format"],function(e){function n(n,r){function a(e){return!n[e.name]&&!d[e.name]&&!m[e.value]}function o(e){d[e.name]=e.value,m[p(e)]=e.name}function u(e){return new Error(n[e.name])}function c(n){return new Error(e(t),n)}function f(n){return new Error(e(i),{givenName:n.name,name:m[p(n)],value:p(n)})}function s(e){if(n[e.name])throw u(e);if(d[e.name])throw c(e);if(m[e.name])throw f(e)}function l(e){var n,t;for(n in e)t={name:n,value:e[n]},e.hasOwnProperty(n)&&(a(t)?o({name:n,value:e[n]}):s(t))}var d,m,p;return p=r||function(e){return e.value},n||(n={}),n.add="can not overwrite add",d={},m={},d.add=l,d}var t,i;return t='name "{name}" is already in use, value is {value}',i='given name {givenName} with a value of "{value}" already exists with a name of "{name}"',{createNameValueObject:n}}),t("definitions/attributes",["helpers/nameValueObject"],function(e){var n;return n=e.createNameValueObject(),n.$add({href:"href",source:"src",alt:"alt",title:"title",type:"type",width:"width",height:"height",style:"style"}),n}),t("definitions/tags",["helpers/nameValueObject"],function(e){function n(e){var n="<"+e+" />";return{html:n,name:e,buildElement:function(){return t.$elementBuilder(n)}}}var t,i;return t=e.createNameValueObject({},function(e){return e.value.name}),i=t.$add,t.$add=function(e){var t,r;r={};for(r in e)e.hasOwnProperty(r)&&(t[r]=n(e[r]));i(t)},t.$setElementBuilderFunction=function(e){t.$elementBuilder=e},t.$add({image:"img",div:"div",span:"span",anchor:"a",input:"input",body:"body",head:"head",italic:"i"}),t}),t("definitions/events",["helpers/nameValueObject"],function(e){var n;return n=e.createNameValueObject(),n.$add({click:"click"}),n}),t("definitions/localizations",["helpers/nameValueObject"],function(e){function n(e){return function(){return i.$localizationValueRequest(e)}}function t(e){return{name:e,getLocalizedValue:n(e)}}var i,r;return i=e.createNameValueObject({},function(e){return e.value.name}),r=i.$add,i.$add=function(e){var n,i;n={};for(i in e)e.hasOwnProperty(i)&&(n[i]=t(e[i]));r(n)},i.$setLocalizationRequest=function(e){i.$localizationValueRequest=e},i.$add({}),i}),t("constants",["definitions/cssClasses","definitions/ids","definitions/attributes","definitions/tags","definitions/events","definitions/localizations"],function(e,n,t,i,r,a){var o=function(e){return e};return o.VERSION="0.0.0",o.classes=e,o.ids=n,o.attributes=t,o.tags=i,o.events=r,o.localizations=a,o}),n("constants")});
//# sourceMappingURL=constants.js.map