// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/images/ImageDataHolder",["esri/dijit/geoenrichment/utils/CacheUtil"],function(e){function d(){return e.get("ImageDataHolder.imageData")}function f(){return e.get("ImageDataHolder.fileNameToOriginal")}return{putImageData:function(a,c){if("string"===typeof a&&c){var b=a.toLowerCase();f()[b]=a;d()[b]=c}else console.error("Invalid image filename or data!")},getImageData:function(a){return"string"!==typeof a?null:d()[a.toLowerCase()]},findFileNameByData:function(a){var c=
d(),b;for(b in c)if(a===c[b])return f()[b];return null}}});