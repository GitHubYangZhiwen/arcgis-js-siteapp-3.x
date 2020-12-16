// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/geometry/projection","require exports dojo/Deferred ./pe ../SpatialReference ./GeographicTransformation".split(" "),function(q,d,r,h,n,k){function l(b,c,a,f,d){void 0===f&&(f=null);void 0===d&&(d=!1);if(null===f){var e=k.cacheKey(c,a);void 0!==m[e]?f=m[e]:(f=p(c,a,null),null===f&&(f=new k),m[e]=f)}return g._project(b,c,a instanceof n||!1===d?a:new n(a),f,d)}function p(b,c,a){void 0===a&&(a=null);b=g._getTransformation(b,c,a);return null!==b?k.fromGE(b):null}Object.defineProperty(d,"__esModule",
{value:!0});var g=null;d.isLoaded=function(){return!!g&&h.isLoaded()};d.isSupported=function(){return h.isSupported()};var e=null;d.load=function(){if(e)return e.promise;e=new r;var b=h.load();q(["./geometryEngine"],function(c){g=c;b.then(function(){g._enableProjection(h);e.resolve()},function(a){e.reject(a)})});return e.promise};d.project=function(b,c,a){void 0===a&&(a=null);return b instanceof Array?0===b.length?[]:l(b,b[0].spatialReference,c,a):l([b],b.spatialReference,c,a)[0]};var m={};d.projectMany=
l;d.getTransformation=p;d.getTransformations=function(b,c,a){void 0===a&&(a=null);b=g._getTransformationBySuitability(b,c,a);if(null!==b){c=[];for(a=0;a<b.length;a++)c.push(k.fromGE(b[a]));return c}return[]}});