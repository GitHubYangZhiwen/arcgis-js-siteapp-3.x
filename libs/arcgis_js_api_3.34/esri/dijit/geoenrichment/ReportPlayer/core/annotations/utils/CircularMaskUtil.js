// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/annotations/utils/CircularMaskUtil",["dojo/dom-construct","dojo/dom-style","dojox/gfx","dojox/gfx/matrix","esri/dijit/geoenrichment/utils/DomUtil"],function(e,f,m,n,g){return{setCircularMask:function(b,a,h,d){function k(){a&&a.__maskNode&&(e.destroy(a.__maskNode),delete a.__maskNode)}function p(){var c=f.get(a,"width"),b=f.get(a,"height"),d=f.get(a,"left"),e=f.get(a,"top");return{w:c,h:b,l:d,t:e,cr:Math.min(c,b)/2,cx:c/2,cy:b/2}}function q(c){var b=
m.createSurface(a.__maskNode,c.w,c.h).createImage({x:0,y:0,width:c.w,height:c.h,src:h});b.setClip({cx:c.cx,cy:c.cy,rx:c.cr,ry:c.cr}).applyTransform(n.rotategAt(d,c.cx,c.cy));b.rawNode.setAttribute("preserveAspectRatio","xMidYMid meet")}d=d||0;if(b&&a){b=p();var l=[b.w,b.h,b.l,b.t,h,d].join("_");a.__maskNode&&a.__maskNode.__renderKey===l||(k(),a.__maskNode=e.create("div"),f.set(a.__maskNode,{position:"absolute",left:b.l+"px",top:b.t+"px"}),q(b),a.__maskNode.__renderKey=l);e.place(a.__maskNode,a,"after");
g.hide(a)}else k(),g.show(a);return a&&a.__maskNode}}});