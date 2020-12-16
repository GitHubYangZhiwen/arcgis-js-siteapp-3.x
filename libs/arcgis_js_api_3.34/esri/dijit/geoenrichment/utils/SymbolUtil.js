// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/SymbolUtil","esri/symbols/jsonUtils esri/symbols/PictureFillSymbol esri/symbols/PictureMarkerSymbol esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleFillSymbol esri/symbols/SimpleLineSymbol ../ReportPlayer/dataProvider/commands/imageUtils/NodeToCanvasUtil ./ColorUtil ./PatternLibrary ./ImageUtil".split(" "),function(k,l,f,g,m,h,n,p,q,r){var e={simpleFillSymbolToPictureFillSymbol:function(a){if(!a)return null;var b=q.createSvgForPictureFillSymbol({fillStyle:a.style,
fillColor:a.color.toCss(!1),fillAlpha:a.color.a});return n.svgNodeToCanvasFunc(b,10,10).then(function(b){try{var c=new l(b.toDataURL("image/png"),a.outline,10,10);c.contentType="image/png";return c}catch(t){return console.log(t),null}}).otherwise(function(a){console.log(a);return null})},prepareGraphicSymbol:function(a,b){if(!a)return{symbol:null};var c=!1,d=null;a=e.copySymbol(a);b&&b.forEach(function(b){switch(b.variable.type){case "sizeInfo":d=b.value;break;case "colorInfo":a.color&&(a.color.r=
b.value.r,a.color.g=b.value.g,a.color.b=b.value.b,a.color.a*=b.value.a);break;case "opacityInfo":a.color&&(a.color.a=b.value);break;case "rotationInfo":a.setAngle&&a.setAngle(b.value)}});a instanceof m?c=!0:(a instanceof g?(null!=d&&a.setSize(d),c=!0):a instanceof f?null!=d&&e.setMarkerSymbolSize(a,d):d=!1,!1!==d&&(d=e.getMarkerSymbolSize(a)));c&&!a.getStroke()&&(a.setOutline(new h(h.STYLE_SOLID,p.toColor(0))),a.outline.setWidth(0));b={symbol:a,isSimple:c};d&&(b.size=d);return b},copySymbol:function(a){if(a instanceof
f){var b=new f;b.setUrl(a.url);b.setAngle(a.angle);b.setWidth(a.width);b.setHeight(a.height);b.setOffset(a.xoffset,a.yoffset);var c=r.getContentType(b.url);c&&(b.contentType=c,b.imageData=a.imageData);a.pictureId&&(b.pictureId=a.pictureId);return b}return a&&a.toJson?k.fromJson(a.toJson()):null},getMarkerSymbolSize:function(a){if(a instanceof g){var b=a.getStroke();return a.size+(b?"x"==a.style?1.414*b.width:b.width:0)}return Math.max(a.height,a.width)||0},setMarkerSymbolSize:function(a,b){var c=
e.getMarkerSymbolSize(a);if(!b)return a;b/=c;a instanceof f?(a.setWidth(a.width*b),a.setHeight(a.height*b),a.setOffset(a.xoffset*b,a.yoffset*b)):a instanceof g&&(a.setSize(a.size*b),(c=a.getStroke())&&c.setWidth&&c.setWidth(c.width*b));return a}};return e});