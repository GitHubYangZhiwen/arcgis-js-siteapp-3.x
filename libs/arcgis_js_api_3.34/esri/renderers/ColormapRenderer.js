// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/renderers/ColormapRenderer","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has ../kernel ../lang ../symbols/jsonUtils ./Renderer ./arcadeUtils".split(" "),function(a,e,b,f,g,h,l,k,m){a=a(k,{declaredClass:"esri.renderer.ColormapRenderer",constructor:function(c){this.colormapInfos=c&&c.colormapInfos},toJson:function(){var c=h.fixJson,a;a={type:"rasterColormap",colormapInfos:e.map(this.colormapInfos||[],function(a,b){var d={};a.color&&null!==a.color&&3<=a.color.length&&(d.color=
a.color,d.value=a.value||b,d.label=(a.label||b)+"");return c(d)})};a=b.mixin(this.inherited(arguments),a);return c(a)}});f("extend-esri")&&b.setObject("renderer.ColormapRenderer",a,g);return a});