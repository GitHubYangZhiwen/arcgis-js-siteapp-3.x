// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/action2d/Highlight","dojo/_base/lang dojo/_base/declare dojo/_base/Color dojo/_base/connect dojox/charting/action2d/PlotAction dojo/fx/easing dojox/gfx/fx esri/dijit/geoenrichment/utils/ColorUtil".split(" "),function(e,k,l,m,n,p,q,r){var t=function(a){return function(){return a}},f=function(a){return r.getHighlightColor(a)},u=function(a){a=f(a);a.a=.7;return a};return k("dojox.charting.action2d.Highlight",n,{defaultParams:{duration:400,
easing:p.backOut},optionalParams:{highlight:"red"},_useStroke:!0,constructor:function(a,d,c){this.colorFunc=(a=(c=c||{},c.highlight))?e.isFunction(a)?a:t(a):f;this._useStroke=!!c.stroke;this.connect()},process:function(a){if(a.shape&&a.type in this.overOutEvents&&"spider_circle"!==a.element&&"spider_plot"!==a.element){"spider_poly"===a.element&&this.colorFunc===f&&(this.colorFunc=u);var d=a.run.name,c=a.index,b;d in this.anim?b=this.anim[d][c]:this.anim[d]={};if(b)b.action.stop(!0);else{b=this._useStroke?
(b=a.shape.getStroke())&&b.color:a.shape.getFill();if(!(b&&b instanceof l))return;this.anim[d][c]=b={start:b,end:this.colorFunc(b)}}var g=b.start,h=b.end;if("onmouseout"===a.type)var e=g,g=h,h=e;b.action=q[this._useStroke?"animateStroke":"animateFill"]({shape:a.shape,duration:this.duration,easing:this.easing,color:{start:g,end:h},_isMouseOverAction:"onmouseover"===a.type});"onmouseout"===a.type&&m.connect(b.action,"onEnd",this,function(){this.anim[d]&&delete this.anim[d][c]});b.action.play()}}})});