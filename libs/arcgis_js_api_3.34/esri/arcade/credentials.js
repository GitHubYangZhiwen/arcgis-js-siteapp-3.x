// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/arcade/credentials",["require","exports","./polyfill/promiseUtils"],function(f,g,e){return function(){function b(){this._password=this._username="";this._token=null}b.fromUserName=function(a,c){var d=new b;d._username=a;d._password=c;d._token=null;return d};b.fromArcadeDictionary=function(a){var c=new b;a.hasField("username")&&(c._username=a.field("username"));a.hasField("password")&&(c._password=a.field("password"));a.hasField("token")&&(c._token=a.field("token"));return c};b.fromToken=
function(a){var c=new b;c._token=a;return c};Object.defineProperty(b.prototype,"username",{get:function(){return this._username},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"password",{get:function(){return this._password},enumerable:!0,configurable:!0});b.prototype.getToken=function(){var a=this;return e.create(function(c,b){null===a._token?b("No Token Provided"):c(a._token)})};return b}()});