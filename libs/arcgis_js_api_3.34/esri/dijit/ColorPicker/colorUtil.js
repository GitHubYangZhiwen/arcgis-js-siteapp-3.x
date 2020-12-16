// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/ColorPicker/colorUtil",["dojo/_base/lang","../../Color"],function(g,d){var c={equal:function(a,b){return a&&b&&a.r===b.r&&a.g===b.g&&a.b===b.b&&a.a===b.a},normalizeHex:function(a){return"#"+g.trim(a).replace(/#/g,"").substr(0,6)},normalizeColor:function(a){return new d(a)},isValidHex:function(a){return c.isShorthandHex(a)||c.isLonghandHex(a)},_shortHandHex:/^#[0-9A-F]{3}$/i,isShorthandHex:function(a){return a&&4===a.length&&c._shortHandHex.test(a)},_longhandHex:/^#[0-9A-F]{6}$/i,
isLonghandHex:function(a){return a&&7===a.length&&c._longhandHex.test(a)},getContrastingColor:function(a){return c.isBright(a)?this.darker(a):this.brighter(a,3)},isBright:function(a){return 127<=.299*a.r+.587*a.g+.114*a.b},darker:function(a,b){b=Math.pow(.7,b?b:1);return new d([Math.round(a.r*b),Math.round(a.g*b),Math.round(a.b*b),a.a])},brighter:function(a,b){b=Math.pow(.7,b?b:1);var c=a.r,e=a.g,f=a.b;30>c&&(c=30);30>e&&(e=30);30>f&&(f=30);return new d([Math.min(255,Math.round(c/b)),Math.min(255,
Math.round(e/b)),Math.min(255,Math.round(f/b)),a.a])}};return c});