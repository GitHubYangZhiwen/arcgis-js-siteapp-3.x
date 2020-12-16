// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/labelsRendering/_ColumnsLabelRenderingFix",["dojo/_base/declare","./LabelsUtil","./LabelOverlapFixer"],function(l,k,m){return l(null,{_labelBoxes:null,resetEvents:function(){this.inherited(arguments);this._labelBoxes=[]},createLabel:function(a,c,b,d,g,f,e){this.opt.labels&&(a=k.getLabelInfo(this,c,d,{horizontalAlign:d.series.dataLabelsHorizontalAlign,dataLabelsMaxWidth:d.series.dataLabelsMaxWidth,considerAngle:!0}),"outside"===
this.opt.labelStyle?this._renderOutside(a,c,b,d,g,f,!1,e):"inside"===this.opt.labelStyle&&this._renderInside(a,c,b,d,g,f,e))},_renderOutside:function(a,c,b,d,g,f,e,h){a={x:b.x+b.width/2-a.box.w/2,y:c[c.valueProp]>(h||0)?b.y-this.opt.labelOffset-a.box.h:b.y+b.height+this.opt.labelOffset,w:a.box.w,h:a.box.h,text:a.getText({isAltPosition:e}),angle:a.angle};this._labelBoxes.push(a)},_renderInside:function(a,c,b,d,g,f,e){e=e||0;var h=c[c.valueProp];a.box.h+2*this.opt.labelOffset>b.height?a.box.h<=(h>e?
b.y-f.t-this.opt.labelOffset:g.height-f.b-(b.y+b.height+2*this.opt.labelOffset))&&this._renderOutside(a,c,b,d,g,f,!0,e):(a={x:b.x+b.width/2-a.box.w/2,y:b.y+b.height/2-a.box.h/2,w:a.box.w,h:a.box.h,text:a.getText(),angle:a.angle},this._labelBoxes.push(a))},_renderLabels:function(a,c,b,d){m.fixLabelsOverlap(this._labelBoxes,c,b,this._getFixLabelsParams(),d);this._labelBoxes.forEach(function(a){a.hidden||this.renderLabel(a)},this)},renderLabel:function(a){a=k.renderHTMLLabel(this.chart,a.x,a.y,a.text,
a.w,a.h,a.angle);this.htmlElements.push(a);return a},_getFixLabelsParams:function(){return{allowXShift:!0,allowYShift:!0,xGap:3,yGap:3,xTolerance:0,yTolerance:0}}})});