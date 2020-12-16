// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/symbols/jsonUtils","dojo/_base/lang dojo/_base/array dojo/has ../kernel ./SimpleMarkerSymbol ./PictureMarkerSymbol ./SimpleLineSymbol ./CartographicLineSymbol ./SimpleFillSymbol ./PictureFillSymbol ./TextSymbol".split(" "),function(e,l,m,n,f,p,g,h,k,q,r){var d={createDefaultSymbol:function(a){var b;switch(a){case "esriGeometryPoint":case "esriGeometryMultipoint":b=d.createDefaultMarkerSymbol();break;case "esriGeometryPolyline":b=d.createDefaultLineSymbol();break;case "esriGeometryPolygon":case "esriGeometryEnvelope":case "esriGeometryMultiPatch":b=
d.createDefaultFillSymbol()}return b},createDefaultMarkerSymbol:function(){return new f},createDefaultLineSymbol:function(){return new g},createDefaultFillSymbol:function(){return new k},getFirstSupportedSymbol:function(a){var b;l.some(a,function(a){a&&-1<d.supportedSymbolTypes.indexOf(a.type)&&(b=a);return!!b});return b},isPointSymbol:function(a){return a?-1<d.supportedPointSymbolTypes.indexOf(a.type):!1},supportedPointSymbolTypes:["esriSMS","esriPMS","esriTS"],supportedSymbolTypes:"esriSMS esriPMS esriTS esriSLS esriCLS esriSFS esriPFS".split(" "),
fromJson:function(a,b){var c=null;switch(a.type){case "esriSMS":c=new f(a);break;case "esriPMS":c=new p(a);break;case "esriTS":c=new r(a);break;case "esriSLS":c=void 0!==a.cap?new h(a):new g(a);break;case "esriCLS":c=new h(a);break;case "esriSFS":c=new k(a);break;case "esriPFS":c=new q(a);break;default:c=(a=b&&b.geometryType)?d.createDefaultSymbol(a):null}return c},getShapeDescriptors:function(a){return a&&a.getShapeDescriptors?a.getShapeDescriptors():{defaultShape:null,fill:null,stroke:null}}};m("extend-esri")&&
e.mixin(e.getObject("symbol",!0,n),d);return d});