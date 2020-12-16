// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/CustomGridPlot",["dojo/_base/declare","dojo/sniff","dojox/charting/plot2d/Grid"],function(p,k,q){var n=function(a,c){return a.value-c.value};return p(q,{xOffset:0,yOffset:0,xHasHalfTickOffset:!1,yHasHalfTickOffset:!1,baseLineValue:0,optionalParams:{majorHLine:{},minorHLine:{},majorVLine:{},minorVLine:{},hFill:{},vFill:{},hAlternateFill:{},vAlternateFill:{},baseLineVertical:!1,baseLine:{}},render:function(a,c){this.baseLineValue=
this.baseLineValue||0;this.dirty=!0;this.cleanGroup();var d=this.getGroup(),b=this.chart.theme;(k("ios")&&6>k("ios")||k("android")||k("safari")&&!k("ios"))&&d.createRect({x:c.l,y:c.t,width:Math.max(0,a.width-c.l-c.r),height:Math.max(0,a.height-c.t-c.b)});var f,g;if(this._vAxis){var d=this._vAxis.getTicks(),e=this._vAxis.getScaler();d&&e&&(f={ticks:d,vScaler:e,vt:e.scaler.getTransformerFromModel(e)})}this._hAxis&&(d=this._hAxis.getTicks(),e=this._hAxis.getScaler(),d&&e&&(g={ticks:d,hScaler:e,ht:e.scaler.getTransformerFromModel(e)}));
f&&this.opt.hStripes&&this._renderHRect(f.ticks,b.grid,a,c,f.vScaler,f.vt);g&&this.opt.vStripes&&this._renderVRect(g.ticks,b.grid,a,c,g.hScaler,g.ht);f&&(this.opt.hMinorLines&&(d=this.opt.minorHLine||b.grid&&b.grid.minorLine||b.axis.minorTick,this._renderHLines(f.ticks.minor,d,a,c,f.vScaler,f.vt)),this.opt.hMajorLines&&(d=this.opt.majorHLine||b.grid&&b.grid.majorLine||b.axis.majorTick,this._renderHLines(f.ticks.major,d,a,c,f.vScaler,f.vt)));g&&(this.opt.vMinorLines&&(d=this.opt.minorVLine||b.grid&&
b.grid.minorLine||b.axis.minorTick,this._renderVLines(g.ticks.minor,d,a,c,g.hScaler,g.ht)),this.opt.vMajorLines&&(d=this.opt.majorVLine||b.grid&&b.grid.majorLine||b.axis.majorTick,this._renderVLines(g.ticks.major,d,a,c,g.hScaler,g.ht)));0<this.xOffset&&this._renderOffsetVLine(a,c);this.dirty=!1;return this},_getTickOffset:function(a,c,d){var b=0;2<=a.length?b=Math.abs(c(a[0].value)-c(a[1].value)):a.length&&(b=Math.abs(c(a[0].value)));return(d?this.yHasHalfTickOffset:this.xHasHalfTickOffset)?b/2:0},
_renderHLines:function(a,c,d,b,f,g){function e(a,c,e){if(this.opt.renderOnAxis||a.value!==(this._vAxis.opt.leftBottom?f.bounds.from:f.bounds.to))a=d.height-b.b-g(a.value),c=this.createLine(m,{x1:b.l+this.xOffset,y1:a+e,x2:d.width-b.r,y2:a+e}).setStroke(c),this.animate&&this._animateGrid(c,"h",b.l,b.r+b.l-d.width)}var h=this._getTickOffset(a,g,!0);this.opt.baseLineVertical||h||(a=a.filter(function(a){return a.value!==this.baseLineValue},this));var m=this.getGroup();a.forEach(function(a){e.call(this,
a,c,h)},this);this.opt.baseLineVertical||e.call(this,{value:this.baseLineValue},this.opt.baseLine||c,0)},_renderVLines:function(a,c,d,b,f,g){function e(a,c,e){if(this.opt.renderOnAxis||a.value!==(this._hAxis.opt.leftBottom?f.bounds.from:f.bounds.to))a=b.l+g(a.value),c=this.createLine(m,{x1:a+e,y1:b.t+this.yOffset,x2:a+e,y2:d.height-b.b}).setStroke(c),this.animate&&this._animateGrid(c,"v",d.height-b.b,d.height-b.b-b.t)}var h=this._getTickOffset(a,g,!1);this.opt.baseLineVertical&&!h&&(a=a.filter(function(a){return a.value!==
this.baseLineValue},this));var m=this.getGroup();a.forEach(function(a){e.call(this,a,c,h)},this);this.opt.baseLineVertical&&e.call(this,{value:this.baseLineValue},this.opt.baseLine||c,0)},_renderHRect:function(a,c,d,b,f,g){var e,h,m,k=this._getTickOffset(a.major,g,!0);a=a.major.slice();a.sort(n);k&&(a.unshift({value:a[0].value-this._vAxis.opt.majorTickStep}),a.unshift({value:a[0].value-this._vAxis.opt.majorTickStep}));a[0].value>f.bounds.from&&a.unshift({value:f.bounds.from});a[a.length-1].value<
f.bounds.to&&a.push({value:f.bounds.to});f=this.getGroup();for(var l=0;l<a.length-1;l++)if(e=a[l],h=d.height-b.b-g(e.value),m=d.height-b.b-g(a[l+1].value),e=0!==l%2?this.opt.hAlternateFill||c&&c.alternateFill:this.opt.hFill||c&&c.fill)e=this.createRect(f,{x:b.l+this.xOffset,y:m-k,width:d.width-b.r,height:h-m}).setFill(e),this.animate&&this._animateGrid(e,"h",b.l,b.r+b.l-d.width)},_renderVRect:function(a,c,d,b,f,g){var e,h,m,k=this._getTickOffset(a.major,g,!1);a=a.major.slice();a.sort(n);k&&(a.unshift({value:a[0].value-
this._hAxis.opt.majorTickStep}),a.unshift({value:a[0].value-this._hAxis.opt.majorTickStep}));a[0].value>f.bounds.from&&a.unshift({value:f.bounds.from});a[a.length-1].value<f.bounds.to&&a.push({value:f.bounds.to});f=this.getGroup();for(var l=0;l<a.length-1;l++)if(e=a[l],h=b.l+g(e.value),m=b.l+g(a[l+1].value),e=0!==l%2?this.opt.vAlternateFill||c&&c.alternateFill:this.opt.vFill||c&&c.fill)e=this.createRect(f,{x:h+k,y:b.t+this.yOffset,width:m-h,height:d.width-b.r}).setFill(e),this.animate&&this._animateGrid(e,
"v",d.height-b.b,d.height-b.b-b.t)},_renderOffsetVLine:function(a,c){var d=this.chart.theme,d=this.opt.majorVLine||d.grid&&d.grid.majorLine||d.axis.majorTick,b=this.getGroup();this.createLine(b,{x1:c.l+this.xOffset,y1:c.t,x2:c.l+this.xOffset,y2:a.height-c.b}).setStroke(d)}})});