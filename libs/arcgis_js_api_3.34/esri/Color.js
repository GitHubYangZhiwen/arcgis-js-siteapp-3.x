// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/Color",["dojo/_base/declare","dojo/_base/Color","dojo/has","./kernel"],function(b,e,f,g){var c=b([e],{declaredClass:"esri.Color"});c.toJsonColor=function(a){return a&&[a.r,a.g,a.b,1<a.a?a.a:Math.round(255*a.a)]};c.toDojoColor=function(a){return a&&new c([a[0],a[1],a[2],a[3]/255])};var d="named blendColors fromRgb fromHex fromArray fromString".split(" ");for(b=0;b<d.length;b++)c[d[b]]=e[d[b]];f("extend-esri")&&(g.Color=c);return c});