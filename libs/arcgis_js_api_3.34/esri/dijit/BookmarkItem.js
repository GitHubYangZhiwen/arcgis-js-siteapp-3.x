// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/BookmarkItem",["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],function(c,d,e,f){c=c(null,{declaredClass:"esri.dijit.BookmarkItem",constructor:function(a){this.name=a.name;this.extent=a.extent},toJson:function(){var a={},b=this.extent.toJson();a.extent={spatialReference:b.spatialReference,xmax:b.xmax,xmin:b.xmin,ymax:b.ymax,ymin:b.ymin};a.name=this.name;return a}});e("extend-esri")&&d.setObject("dijit.BookmarkItem",c,f);return c});