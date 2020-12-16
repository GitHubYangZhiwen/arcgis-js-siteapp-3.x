// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/ShapeUtil","dojo/dom-style dojo/_base/lang dojo/dom-geometry esri/dijit/geoenrichment/utils/CacheUtil esri/dijit/geoenrichment/utils/ColorUtil esri/dijit/geoenrichment/utils/DomUtil".split(" "),function(l,k,m,n,h,p){var q={fillColor:"#FFFFFF",fillAlpha:1,borderAlpha:0,borderWidth:1},g={createSVGNode:function(a,c){var d=document.createElementNS("http://www.w3.org/2000/svg","svg");c&&l.set(d,c);a=[a.xmin||0,a.ymin||0,a.width,a.height].join(" ");d.setAttribute("viewBox",
a);d.setAttribute("xmlns","http://www.w3.org/2000/svg");return d},createPathNode:function(a,c){var d=document.createElementNS("http://www.w3.org/2000/svg","path");d.setAttribute("d",a);g._setSettingsToNode(d,c);return d},createEllipseNode:function(a,c,d,b,f){var e=document.createElementNS("http://www.w3.org/2000/svg","ellipse");e.setAttribute("cx",a||0);e.setAttribute("cy",c||0);e.setAttribute("rx",d);e.setAttribute("ry",b);g._setSettingsToNode(e,f);return e},createCircleNode:function(a,c,d,b){var f=
document.createElementNS("http://www.w3.org/2000/svg","circle");f.setAttribute("cx",a||0);f.setAttribute("cy",c||0);f.setAttribute("r",d);g._setSettingsToNode(f,b);return f},createRectNode:function(a,c,d,b,f){var e=document.createElementNS("http://www.w3.org/2000/svg","rect");e.setAttribute("x",a||0);e.setAttribute("y",c||0);e.setAttribute("width",d);e.setAttribute("height",b);g._setSettingsToNode(e,f);return e},createLineNode:function(a,c,d,b,f){var e=document.createElementNS("http://www.w3.org/2000/svg",
"line");e.setAttribute("x1",a||0);e.setAttribute("y1",c||0);e.setAttribute("x2",d||0);e.setAttribute("y2",b||0);g._setSettingsToNode(e,f);return e},createPolygonNode:function(a,c){var d=document.createElementNS("http://www.w3.org/2000/svg","polygon");d.setAttribute("points",a);g._setSettingsToNode(d,c);return d},createNodeByAttributes:function(a,c,d){var b=null;switch(a.name){case "path":b=g.createPathNode(a.d,c);break;case "ellipse":b=g.createEllipseNode(a.cx,a.cy,a.rx,a.ry,c);break;case "circle":b=
g.createCircleNode(a.cx,a.cy,a.r,c);break;case "rect":b=g.createRectNode(a.x,a.y,a.width,a.height,c);break;case "line":b=g.createLineNode(a.x1,a.y1,a.x2,a.y2,c);break;case "polygon":b=g.createPolygonNode(a.points,c)}b&&(a=a["fill-opacity"],void 0===a||d&&d.overrideFillOpacity||(b.hasAttribute("fill-opacity")&&(a*=b.getAttribute("fill-opacity")),b.setAttribute("fill-opacity",a)));return b},_setSettingsToNode:function(a,c){if(c.borderWidth){var d=g.toColor(c,"border","#000000");a.setAttribute("stroke",
h.toCSSColor(d,!0));a.setAttribute("stroke-width",c.borderWidth);a.setAttribute("stroke-opacity",d.a);c.borderDashArray&&a.setAttribute("stroke-dasharray",Array.isArray(c.borderDashArray)?c.borderDashArray.join(","):c.borderDashArray);c.strokeMiterLimit&&a.setAttribute("stroke-miterlimit",c.strokeMiterLimit);c.borderScale||a.setAttribute("vector-effect","non-scaling-stroke")}c.fillColor&&(d=g.toColor(c,"fill","#FFFFFF"),a.setAttribute("fill",h.toCSSColor(d,!0)),a.setAttribute("fill-opacity",d.a))},
toColor:function(a,c,d,b){d=h.toColor(a[c+"Color"],d);1===d.a&&(a=a[c+"Alpha"],isNaN(a)&&(a=b),isNaN(a)||(d.a=a));return d},createSVGFromJson:function(a,c,d,b,f){f=f||{};b=k.mixin({},!f.noDefaults&&q,b);void 0===b.borderColor&&(b.borderColor=b.fillColor);var e=g.createSVGNode(a.viewBox,{width:c+"px",height:d+"px",overflow:"visible"});f.preserveAspectRatio&&e.setAttribute("preserveAspectRatio",f.preserveAspectRatio);b.borderScale=f.borderScale;a.g.forEach(function(a){(a=g.createNodeByAttributes(a,
b,{overrideFillOpacity:f.overrideFillOpacity}))&&e.appendChild(a)});return e},_iBoxCache:{},calcContentBox:function(a,c,d,b,f){var e=n.get("ShapeUtil"),h=JSON.stringify(a.viewBox)+";"+JSON.stringify(a.g)+";"+c+";"+d+";"+JSON.stringify(f||{});if(e[h])return k.mixin({},e[h]);a=g.createSVGFromJson(a,c,d,b,f);a.style.position="absolute";a.style.left="0";a.style.top="0";document.body.appendChild(a);b=p.getNodesBox(a.children);f=m.position(a);document.body.removeChild(a);b.x-=f.x;b.y-=f.y;b.r=c-(b.x+b.w);
b.b=d-(b.y+b.h);e[h]=k.mixin({},b);return b}};return g});