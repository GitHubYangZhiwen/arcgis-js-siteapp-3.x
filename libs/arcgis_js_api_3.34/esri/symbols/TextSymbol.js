// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/symbols/TextSymbol","dojo/_base/declare dojo/_base/lang dojo/has dojox/gfx/_base ../kernel ../lang ../Color ./Symbol ./Font".split(" "),function(e,f,p,c,m,n,g,q,h){var k={type:"textsymbol",x:0,y:0,text:"",rotated:!1,kerning:!0,color:[0,0,0,1],font:c.defaultFont,angle:0,xoffset:0,yoffset:0,horizontalAlignment:"center"},r={start:"left",middle:"center",end:"right"},t={left:"start",center:"middle",right:"end",justify:"start"},u={top:"text-before-edge",middle:"central",baseline:"alphabetic",
bottom:"text-after-edge"},l=document.createElement("canvas");e=e(q,{declaredClass:"esri.symbol.TextSymbol",angle:0,xoffset:0,yoffset:0,constructor:function(a,b,d){f.mixin(this,k);this.font=new h(this.font);this.color=new g(this.color);a&&(f.isObject(a)?(f.mixin(this,a),this.color&&n.isDefined(this.color[0])&&(this.color=g.toDojoColor(this.color)),this.type="textsymbol",this.font=new h(this.font),this.xoffset=c.pt2px(this.xoffset),this.yoffset=c.pt2px(this.yoffset),this.angle&&(this.angle*=-1),this.haloSize&&
(this.haloSize=c.pt2px(this.haloSize)),this.haloColor&&(this.haloColor=g.toDojoColor(this.haloColor))):(this.text=a,b&&(this.font=b),d&&(this.color=d)));this.setAlign(this.align||this.getSVGAlign())},setFont:function(a){this.font=a;return this},setSize:function(a){this.font.size=a;return this},setAngle:function(a){this.angle=a;return this},setOffset:function(a,b){this.xoffset=a;this.yoffset=b;return this},setHaloColor:function(a){this.haloColor=a;return this},setHaloSize:function(a){this.haloSize=
a;return this},setAlign:function(a){this.align=a;this.setHorizontalAlignment(a&&r[a.toLowerCase()]||"center");return this},setHorizontalAlignment:function(a){this.horizontalAlignment=a;return this},getSVGAlign:function(){var a=this.horizontalAlignment;return a=a&&t[a.toLowerCase()]||"middle"},setVerticalAlignment:function(a){this.verticalAlignment=a;return this},getSVGBaseline:function(){var a=this.verticalAlignment;return a&&u[a.toLowerCase()]||"alphabetic"},getSVGBaselineShift:function(){return"bottom"===
this.verticalAlignment?"super":null},setDecoration:function(a){this.decoration=a;this.font||this.setFont(new h);this.font.setDecoration(a);return this},setRotated:function(a){this.rotated=a;return this},setKerning:function(a){this.kerning=a;return this},setText:function(a){this.text=a;return this},getStroke:function(){return null},getFill:function(){return this.color},getWidth:function(){var a=l&&l.getContext&&l.getContext("2d");if(a){var b=this.font;a.font=(b.style?b.style:c.defaultFont.style)+" "+
(b.weight?b.weight:c.defaultFont.weight)+" "+(b.size?b.size:c.defaultFont.size)+"px "+(b.family?b.family:c.defaultFont.family);return a.measureText(this.text).width}var a=this.getHeight(),b=0,d,e;for(d=0;d<this.text.length;d++)e=this.text.charAt(d),b=e==e.toUpperCase()?b+.7*a:b+.5*a;return b},getHeight:function(){return c.normalizedLength(this.font.size)},getShapeDescriptors:function(){var a=this.font,b;a&&(b={},a.size&&(b.size=a.size),a.style&&(b.style=a.style),a.variant&&(b.variant=a.variant),a.decoration&&
(b.decoration=a.decoration),a.weight&&(b.weight=a.weight),a.family&&(b.family=a.family));return{defaultShape:{type:"text",text:this.text,x:0,y:this.getHeight()/4,align:"middle",decoration:this.decoration||a&&a.decoration,rotated:this.rotated,kerning:this.kerning},font:b,fill:this.getFill(),stroke:this.getStroke()}},toJson:function(){var a=c.px2pt(this.xoffset),b=c.px2pt(this.yoffset),d=c.px2pt(this.haloSize),a=isNaN(a)?void 0:a,b=isNaN(b)?void 0:b,d=isNaN(d)?void 0:d;return n.fixJson(f.mixin(this.inherited("toJson",
arguments),{type:"esriTS",backgroundColor:this.backgroundColor,borderLineColor:this.borderLineColor,borderLineSize:this.borderLineSize,haloSize:d,haloColor:this.haloColor&&g.toJsonColor(this.haloColor),verticalAlignment:this.verticalAlignment,horizontalAlignment:this.horizontalAlignment,rightToLeft:this.rightToLeft,width:this.width,angle:this.angle&&-1*this.angle,xoffset:a,yoffset:b,text:this.text,rotated:this.rotated,kerning:this.kerning,font:this.font.toJson()}))}});f.mixin(e,{ALIGN_START:"start",
ALIGN_MIDDLE:"middle",ALIGN_END:"end",DECORATION_NONE:"none",DECORATION_UNDERLINE:"underline",DECORATION_OVERLINE:"overline",DECORATION_LINETHROUGH:"line-through"});e.defaultProps=k;p("extend-esri")&&(f.setObject("symbol.TextSymbol",e,m),m.symbol.defaultTextSymbol=k);return e});