// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/ShapeConverter",["dojo/_base/lang","esri/dijit/geoenrichment/utils/JsonXmlConverter","../annotations/shape/ShapeBarFlowDirections","../annotations/shape/ShapeScaleAnchorPositions"],function(l,n,u,v){function d(a){return"string"===typeof a?Number(a.replace("px","")):Number(a)}function g(a){return a?d(a):void 0}function f(a){return"number"===typeof a?a:void 0}var h={},p=/path|ellipse|circle|polygon|rect|line/,w=["fill","fill-opacity","stroke",
"stroke-opacity"],x=["display"];h.svgJsonToShapeObject=function(a,e){function m(a){if(!a)return!1;if(!e.ignoreHiddenElements)return!0;if("none"===a.display)return!1;var b=a.fill&&"none"!==a.fill&&(void 0===a["fill-opacity"]||0!==a["fill-opacity"]);a=a.stroke&&"none"!==a.stroke&&(void 0===a["stroke-opacity"]||0!==a["stroke-opacity"]);return void 0===b&&void 0===a?!0:b||a}e=e||{};if(e.ignoreHiddenElements){var k=function(a,b){b=l.mixin({},b);a.attributes=a.attributes||{};w.forEach(function(c){var d=
a.attributes[c];void 0===d&&(d=a.attributes[c]=b[c]);b[c]=d});x.forEach(function(c){var d=b[c]||a.attributes[c];a.attributes[c]=d;b[c]=d});a.tags&&a.tags.forEach(function(a){k(a,b)})};a=l.clone(a);k(a)}var c={name:e.name||"",g:[],style:{},backgroundStyle:{}},b=a.attributes;if(b.viewBox){var f=b.viewBox.split(" ");c.viewBox={xmin:d(f[0])||0,ymin:d(f[1])||0,width:d(f[2]),height:d(f[3])}}else if(b.width&&b.height)c.viewBox={xmin:0,ymin:0,width:d(b.width),height:d(b.height)};else return c;b.width&&(c.style.width=
d(b.width));b.height&&(c.style.height=d(b.height));b.zoom&&(c.style.zoom=d(b.zoom));c.preserveAspectRatio=b.preserveAspectRatio;c.showAsBar=b.showAsBar;c.showAsBar&&(c.useRange=b.useRange,c.rangeMin=g(b.rangeMin),c.rangeMax=g(b.rangeMax),c.bar_singleIcon=b.barSingleIcon,c.bar_wholeIcons=b.barWholeIcons,c.bar_flowDirection=b.barFlowDirection&&u.toSupportedValue(b.barFlowDirection),c.bar_spaceBetween=g(b.barSpaceBetween));c.scaleByValue=b.scaleByValue;c.scaleByValue&&(c.useRange=b.useRange,c.rangeMin=
g(b.rangeMin),c.rangeMax=g(b.rangeMax),c.scale_minScale=g(b.minScale),c.scale_anchorPosition=b.scaleAnchorPosition&&v.toSupportedValue(b.scaleAnchorPosition));b.showBackground&&(c.showBackground=!0,c.backgroundStyle.fillColor=b.backgroundFill,c.backgroundStyle.fillAlpha=g(b.backgroundFillOpacity),c.backgroundStyle.borderColor=b.backgroundStroke,c.backgroundStyle.borderWidth=g(b.backgroundStrokeWidth),c.backgroundStyle.borderAlpha=g(b.backgroundStrokeOpacity),c.backgroundStyle.borderDashArray=b.backgroundStrokeDashArray);
n.queryJson(a,p).forEach(function(a){var b=a.attributes;if(m(b)){var e;switch(a.name){case "path":e={d:b.d};break;case "ellipse":e={cx:d(b.cx),cy:d(b.cy),rx:d(b.rx),ry:d(b.ry)};break;case "circle":e={cx:d(b.cx),cy:d(b.cy),r:d(b.r)};break;case "polygon":e={points:b.points};break;case "rect":e={x:d(b.x),y:d(b.y),width:d(b.width),height:d(b.height)};break;case "line":e={x1:d(b.x1),y1:d(b.y1),x2:d(b.x2),y2:d(b.y2)}}e&&(e.name=a.name,b["fill-opacity"]&&(e["fill-opacity"]=d(b["fill-opacity"])),c.g.push(e))}});
return c};h.shapeJsonToSvgJson=function(a){var d,m,k;a.showAsBar&&(d={showAsBar:!0,useRange:a.useRange||void 0,rangeMin:f(a.rangeMin),rangeMax:f(a.rangeMax),barSingleIcon:a.bar_singleIcon||void 0,barWholeIcons:a.bar_wholeIcons||void 0,barFlowDirection:a.bar_flowDirection||void 0,barSpaceBetween:f(a.bar_spaceBetween)});a.scaleByValue&&(m={scaleByValue:!0,useRange:a.useRange||void 0,rangeMin:f(a.rangeMin),rangeMax:f(a.rangeMax),minScale:f(a.scale_minScale),scaleAnchorPosition:a.scale_anchorPosition||
void 0});a.showBackground&&(k={showBackground:!0,backgroundFill:a.backgroundStyle.fillColor||void 0,backgroundFillOpacity:f(a.backgroundStyle.fillAlpha),backgroundStroke:a.backgroundStyle.borderColor||void 0,backgroundStrokeWidth:f(a.backgroundStyle.borderWidth),backgroundStrokeOpacity:f(a.backgroundStyle.borderAlpha),backgroundStrokeDashArray:a.backgroundStyle.borderDashArray||void 0});return{name:"svg",attributes:l.mixin({width:a.style.width||void 0,height:a.style.height||void 0,viewBox:a.viewBox.xmin+
" "+a.viewBox.ymin+" "+a.viewBox.width+" "+a.viewBox.height,preserveAspectRatio:a.preserveAspectRatio,zoom:a.style.zoom||void 0},d,m,k),tags:[{name:"g",tags:a.g.map(function(a){var b=l.mixin({},a);delete b.name;return{name:a.name,attributes:b}})}]}};var q={borderColor:"stroke",fillColor:"fill",borderAlpha:"stroke-opacity",fillAlpha:"fill-opacity",borderWidth:"stroke-width",borderDashArray:"stroke-dasharray",strokeMiterLimit:"stroke-miterlimit"},y={"stroke-opacity":1,"fill-opacity":1,"stroke-width":1},
r={},t;for(t in q)r[q[t]]=t;h.applyStylesToSvgJson=function(a,d){n.queryJson(a,p).forEach(function(a){a.attributes=a.attributes||{};for(var e in d){var c=q[e];c&&(a.attributes[c]=d[e])}})};h.getStylesFromSvgJson=function(a){var d={};a=n.queryJson(a,p)[0];if(!a||!a.attributes)return d;for(var f in r){var g=a.attributes[f];void 0!==g&&(d[r[f]]=y[f]?Number(g):g)}return d};return h});