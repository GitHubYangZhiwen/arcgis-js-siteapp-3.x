// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/map/layers/LayerInfoLoader",["esri/dijit/geoenrichment/utils/CacheUtil","esri/dijit/geoenrichment/utils/requests/UniversalClient","../WebMapsUtil"],function(d,e,f){return{getInfo:function(a){var c=d.get("LayerInfoLoader");c[a]||(c[a]=e.request(a).otherwise(function(){return f.executeItemUrl({url:a})}).then(function(b){return{url:a,name:b.name,rendererJson:b.drawingInfo&&b.drawingInfo.renderer,geometryType:b.geometryType}}).otherwise(function(a){console.log(a);
return null}));return c[a]}}});