// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/pictureUtil/Converter",["dojo/_base/lang","dojo/_base/Color"],function(m,e){return{DEFAULT_SHAPE:{isShape:!0,shapeJson:{id:"shape",g:[{name:"circle",cx:32,cy:32,r:32,fill:"#DDDDDD"},{name:"line",x1:32,y1:20,x2:32,y2:44,stroke:"#999999",strokeWidth:2},{name:"line",x1:20,y1:32,x2:44,y2:32,stroke:"#999999",strokeWidth:2}],viewBox:{xmin:0,ymin:0,width:64,height:64},style:{width:64,height:64,borderAlpha:0,fillAlpha:1,borderWidth:1}}},
shapeJsonToGFXJson:function(c){function f(a){return"string"===typeof a||"number"===typeof a&&!isNaN(a)}function b(a,b){return f(c.style[a])?c.style[a]:c.themeStyle&&f(c.themeStyle[a])?c.themeStyle[a]:b}var g=new e(b("fillColor","#000000"));g.a=b("fillAlpha",1);var h=new e(b("borderColor","#000000"));h.a=b("borderAlpha",0);for(var n=b("borderWidth",1),k=b("borderDashArray"),l=[],d=0;d<c.g.length;d++){var a=c.g[d],a={shape:m.mixin({type:a.name,path:a.d},a),fill:a.fill||g,stroke:{color:a.stroke||h,width:a.strokeWidth||
n}};k&&(a.stroke.style=k);"polygon"===a.shape.type&&(a.shape.type="polyline",a.shape.points=a.shape.points.trim().replace(/\s+/g," ").split(" ").map(function(a){a=a.split(",");return{x:Number(a[0]),y:Number(a[1])}}));l.push(a)}return{name:"gfxJson",children:l}}}});