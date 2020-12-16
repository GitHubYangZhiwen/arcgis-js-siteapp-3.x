// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/Ring","dojo/_base/lang dojo/_base/declare dojox/charting/plot2d/Base dojox/charting/plot2d/_PlotEvents dojox/charting/plot2d/common dojox/gfx/matrix dojox/lang/functional dojox/lang/utils ./animation/_RingAnimation ./labelsRendering/LabelsUtil".split(" "),function(t,w,D,E,F,G,z,u,H,l){var K={createPath:function(b,f,k,m,c,v,a,l,g){var p=function(h){function g(a,d,g,h){var c=v-(h&&h.width||0),n=f+c/2,m=d-a,e=k.cx+n*Math.cos(a),I=
k.cy+n*Math.sin(a),J=k.cx+n*Math.cos(d),p=k.cy+n*Math.sin(d),c=n-c,l=k.cx+c*Math.cos(a);a=k.cy+c*Math.sin(a);var q=k.cx+c*Math.cos(d);d=k.cy+c*Math.sin(d);return b.createPath().moveTo(l,a).lineTo(e,I).arcTo(n,n,0,m>Math.PI,!0,J,p).lineTo(q,d).arcTo(c,c,0,m>Math.PI,!1,l,a).closePath().setFill(g).setStroke(h)}var d=m;0>h?(d+=2*Math.PI*h,h=Math.abs(h)):0<=h&&.001>h&&(h=.001);var p={cx:k.cx,cy:k.cy,r:f};h=d+2*h*Math.PI;var l=a.series.stroke||{};return{bgShape:g(h,d+2*Math.PI,a.series.ringBackgroundColor||
"#DDDDDD"),shape:g(d,h,c,l),end:h,ac:p}};g.push({sliceIndex:l,func:p});return p}};return w([D,E,H],{_animationInfos:null,defaultParams:{labels:!0,ticks:!1,fixed:!0,precision:1,labelOffset:20,labelStyle:"default",radGrad:"native",fanSize:5,startAngle:0,animate:null},optionalParams:{radius:0,omitLabels:!1,labelFunc:null,stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:"",labelWiring:{}},_lastRenderResults:null,constructor:function(b,f){this.opt=t.clone(this.defaultParams);
u.updateWithObject(this.opt,f);u.updateWithPattern(this.opt,f,this.optionalParams);this.axes=[];this.run=null;this.dyn=[];this.runFilter=[]},clear:function(){this.inherited(arguments);this.dyn=[];this.run=null;return this},setAxis:function(b){return this},addSeries:function(b){this.run=b;return this},getSeriesStats:function(){return t.delegate(F.defaultStats)},getRequiredColors:function(){return this.run?this.run.data.length:0},getRenderResults:function(){return this._lastRenderResults},render:function(b,
f){if(!this.dirty)return this;this.resetEvents();this.dirty=!1;this._eventSeries={};this.cleanGroup();var k=this.group,m=this.chart.theme;if(!this.run||!this.run.data.length)return this;var c=(b.width-f.l-f.r)/2,v=(b.height-f.t-f.b)/2,a=Math.min(c,v),t=G._degToRad(90),g,p,h=this.events(),r=this.run.data.map(function(e,a){"number"!==typeof e&&e.hidden&&(this.runFilter.push(a),e.hidden=!1);return this.runFilter.some(function(e){return e===a})?"number"===typeof e?0:{y:0,text:e.text}:e},this);this.dyn=
[];"radius"in this.opt&&(a=this.opt.radius);var d={cx:f.l+c,cy:f.t+v,r:a},y=0;g=[];r.forEach(function(e){g.push(e.y);y+=Math.abs(e.y)});g=g.map(function(e){return 0===y?0:e/y});this.opt.labels&&(p=g.map(function(e,a){return l.getLabelInfo(this,r[a],m,{forceOneLine:!0,minSpace:20})},this));var u=z.map(r,function(e,a){a=[this.opt,this.run];null!=e&&"number"!==typeof e&&a.push(e);this.opt.styleFunc&&a.push(this.opt.styleFunc(e));return m.next("slice",a,!0)},this),q=0;this.opt.labels&&(p.forEach(function(a){q=
Math.max(q,a.box.w)}),c=d.cx+a+q+f.r-b.width,0<c&&(f=d.cx-a,f>c?d.cx-=c:(c=(c-f)/2,d.cx-=f+c,a-=c)));d.cx-=d.cx-a-(b.width-(2*a+q))/2;var A=Array(g.length),x=Math.min(a/10,.5*a/g.length),B=a,a=a-x/2,C=[],n=[];this._animationInfos=[];g.some(function(e,b){var c=r[b],f=u[b],g;g=f.series.fill;e=K.createPath(k,a,d,t,g,x,f,b,this._animationInfos)(e);var l=e.shape;m.series.isEditMode&&(l.rawNode.style.cursor="pointer");n.push(e.ac);this.dyn.push({fill:g,stroke:f.series.stroke});h&&(c={element:"slice",index:b,
run:this.run,shape:l,x:b,y:"number"===typeof c?c:c.y,cx:d.cx,cy:d.cy,cr:a},this._connectEvents(c),A[b]=c);C.push({x:d.cx,y:d.cy+a});a-=x+3;return!1},this);this.opt.labels&&(C.forEach(function(a,b){b=p[b];k.createPath().moveTo(a.x-5,a.y).lineTo(a.x+B-5,a.y).setStroke(m.series.labelWiring);this.renderLabel({x:a.x+B,y:a.y-b.box.h/2,text:b.getText({forceOneLine:!0,spaceToWidth:q})})},this),m.series.show100PercentLabel&&this._show100PercentLabel(m,a,d));var w=0;this._eventSeries[this.run.name]=z.map(r,
function(a){return 0>=a?null:A[w++]});this._lastRenderResults={labels:this.opt.labels,slicePies:n,maxLabelWidth:q};this.opt.animate&&this._renderAnimation(k,g);return this},_show100PercentLabel:function(b,f,k){b=l.getSimpleLabelInfo({text:"100%",font:b.series.dataLabelsFont,fontSize:Math.min(50,.6*f),fontColor:b.series.dataLabelsColor});this.renderLabel({x:k.cx-b.box.w/2,y:k.cy-b.box.h/2,text:b.text}).style.opacity="0.5"},renderLabel:function(b){b=l.renderHTMLLabel(this.chart,b.x,b.y,b.text);this.htmlElements.push(b);
return b}})});