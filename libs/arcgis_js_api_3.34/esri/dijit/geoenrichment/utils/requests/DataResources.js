// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/requests/DataResources","dojo/_base/declare esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/promise/all esri/dijit/geoenrichment/utils/DataUtil ./DataResource ./FileContent".split(" "),function(b,h,k,e,l,f){function g(c,a,d){d=d||function(a){return f.getContentConversionType(e.getContentType(a))};return a.getFileContent(!0).then(function(a){var b=d(c,a);if(b){switch(b){case "json":case "text":a=decodeURIComponent(escape(a.data));if("json"==b)try{a=
JSON.parse(a)}catch(m){return h.reject(m)}break;case "base64":a=a.getBase64Data();break;default:a=a.data}return{name:c,data:a}}})}b=b(null,{items:null,constructor:function(){this.items=[]},addDataResource:function(c,a){this.items.push({name:c,resource:a})},addFileResource:function(c,a,b){"object"==typeof a&&(a instanceof ArrayBuffer||a.buffer instanceof ArrayBuffer)?a=a.buffer||a:(a=f.fromFileData(c,a,b).data,a=e.binaryStringToByteArray(a).buffer);this.addDataResource(c,new l(a))},getResourceFiles:function(b){return k(this.items.map(function(a){return g(a.name,
a.resource,b)}))}});b.getResourceFile=g;return b});