// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define(["../core/declare","../core/lang","../core/screenUtils","./LineSymbol"],function(l,b,f,m){var a={STYLE_SOLID:"solid",STYLE_DASH:"dash",STYLE_DOT:"dot",STYLE_DASHDOT:"dash-dot",STYLE_DASHDOTDOT:"long-dash-dot-dot",STYLE_NULL:"none",STYLE_SHORTDASH:"short-dash",STYLE_SHORTDOT:"short-dot",STYLE_SHORTDASHDOT:"short-dash-dot",STYLE_SHORTDASHDOTDOT:"short-dash-dot-dot",STYLE_LONGDASH:"long-dash",STYLE_LONGDASHDOT:"long-dash-dot",CAP_BUTT:"butt",CAP_ROUND:"round",CAP_SQUARE:"square",JOIN_MITER:"miter",
JOIN_ROUND:"round",JOIN_BEVEL:"bevel"},e={color:[0,0,0,1],style:a.STYLE_SOLID,width:.75,cap:a.CAP_BUTT,join:a.JOIN_MITER,miterLimit:7.5},d=l(m,{declaredClass:"esri.symbols.SimpleLineSymbol",properties:{type:"simple-line",style:{value:a.STYLE_SOLID,json:{read:function(g,a){return b.valueOf(this._jsonStyles,g)||void 0},write:function(g,a){a.style=this._jsonStyles[g]}}},cap:{value:a.CAP_BUTT,json:{read:!1,write:!1}},join:{value:a.JOIN_MITER,json:{read:!1,write:!1}},miterLimit:{value:7.5,cast:f.toPt,
json:{read:!1,write:!1}}},_jsonStyles:{solid:"esriSLSSolid",dash:"esriSLSDash",dot:"esriSLSDot","dash-dot":"esriSLSDashDot","long-dash-dot-dot":"esriSLSDashDotDot",none:"esriSLSNull","inside-frame":"esriSLSInsideFrame","short-dash":"esriSLSShortDash","short-dot":"esriSLSShortDot","short-dash-dot":"esriSLSShortDashDot","short-dash-dot-dot":"esriSLSShortDashDotDot","long-dash":"esriSLSLongDash","long-dash-dot":"esriSLSLongDashDot"},getDefaults:function(){return b.mixin(this.inherited(arguments),e)},
normalizeCtorArgs:function(a,b,d,e,h,k){if(a&&"string"!==typeof a)return a;var c={};null!=a&&(c.style=a);null!=b&&(c.color=b);null!=d&&(c.width=f.toPt(d));null!=e&&(c.cap=e);null!=h&&(c.join=h);null!=k&&(c.miterLimit=f.toPt(k));return c},clone:function(){return new d({color:b.clone(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit})}});b.mixin(d,a);d.defaultProps=e;return d});