// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
var __extends=this&&this.__extends||function(){var f=function(d,b){f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,e){b.__proto__=e}||function(b,e){for(var c in e)e.hasOwnProperty(c)&&(b[c]=e[c])};return f(d,b)};return function(d,b){function g(){this.constructor=d}f(d,b);d.prototype=null===b?Object.create(b):(g.prototype=b.prototype,new g)}}();
define("esri/arcade/ImmutablePathArray",["require","exports","./ImmutableArray","./ImmutablePointArray"],function(f,d,b,g){return function(b){function c(a,c,d,e,f){a=b.call(this,a)||this;a._lazyPath=[];a._hasZ=!1;a._hasM=!1;a._hasZ=d;a._hasM=e;a._spRef=c;a._cacheId=f;return a}__extends(c,b);c.prototype.get=function(a){if(void 0===this._lazyPath[a]){var b=this._elements[a];if(void 0===b)return;this._lazyPath[a]=new g(b,this._spRef,this._hasZ,this._hasM,this._cacheId,a)}return this._lazyPath[a]};c.prototype.equalityTest=
function(a){return a===this?!0:null===a||!1===a instanceof c?!1:a.getUniqueHash()===this.getUniqueHash()};c.prototype.getUniqueHash=function(){return this._cacheId.toString()};return c}(b)});