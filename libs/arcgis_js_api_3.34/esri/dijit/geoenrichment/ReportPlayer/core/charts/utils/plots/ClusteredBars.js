// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/ClusteredBars",["dojo/_base/declare","./_ClusteredBarsBase"],function(k,l){return k(l,{_drawBar:function(f,a,b,c,h,d,g,e){this._drawBarBackground(f,a,b,c,h,d,g,e);return{shape:this.createRect(g,f,b).setFill(c.series.fill).setStroke(c.series.stroke),rect:b}},_drawBarBackground:function(f,a,b,c,h,d,g,e){c.series.showColumnBarBackground&&(a=a[a.valueProp],this.createRect(g,f,{x:0>a?d.l:d.l+e,y:b.y,width:0>a?e:h.width-d.l-e-d.r,height:b.height}).setFill(c.series.columnBarBackgroundColor))}})});