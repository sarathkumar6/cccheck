!function(e){var r={};function t(n){if(r[n])return r[n].exports;var l=r[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var l in e)t.d(n,l,function(r){return e[r]}.bind(null,l));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){t(1),e.exports=t(2)},function(e,r,t){"use strict";
/*!
 * jquery.cccheck v1.0.0
 * measure password strength
 * https://github.com/RuanAragao/cccheck
 * MIT License
 * by Ruan Aragão
 */var n;n=jQuery,window,document,n.cccheck=function(e){var r={inputCCNumber:"#cc-number",elementShowLabel:"#show-cc-label"};e&&(e=jQuery.extend(r,e));var t=n(r.inputCCNumber),l=n(r.elementShowLabel);return t.keyup((function(e){cardLabel=function(e){for(var r=e.replace(/-/gi,""),t=[{regex:/^4[0-9]{5}(?:[0-9]{3})?/,label:"visa"},{regex:/^5[1-5][0-9]{4}/,label:"master"},{regex:/^3[47][0-9]{4}/,label:"amex"},{regex:/^3(?:0[0-5]|[68][0-9])[0-9]{3}/,label:"diners"},{regex:/^6(?:011|5[0-9]{2})[0-9]{4}/,label:"discover"},{regex:/^(?:2131|1800|35\d{3})\d{3}/,label:"jcb"},{regex:/^(?:38|60)\d{4}/,label:"hipercard"},{regex:/^(?:636368|636369|438935|504175|451416|636297|5067|4576|4011|506699)\d{4}/,label:"elo"}],n=0;n<t.length;n++)if(t[n].regex.test(r))return t[n].label;return!1}(t.val()),l.html('<i class="i-icon-payment i-icon-card-'+cardLabel+'"></i>')})),this}},function(e,r,t){e.exports=t.p+"css/cccheck.css"}]);