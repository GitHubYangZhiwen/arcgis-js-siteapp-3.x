// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/query/_SectionJsonCollector",["dojo/_base/lang","esri/dijit/geoenrichment/utils/MathUtil","esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/GridDataUtil","../../tableJson/TableJsonUtil"],function(v,w,t,x){var l={},y={provideParentInfo:function(a,b,c,d,f,e){k.collectStatistics(b);var g;a:{switch(f){case "floating":g=b.style.left+e.left;break a;case "page":g=k.calcX(b,c,d)+e.left;break a}g=void 0}a:{switch(f){case "floating":f=
b.style.top+e.top;break a;case "page":f=k.calcY(b,c,d)+e.top;break a}f=void 0}a._parentBox={x:g,y:f,w:k.calcFullWidth(b,c,d),h:k.calcFullHeight(b,c,d)};b=d.field;c.style.fields=c.style.fields||{};c=(c.style.fields[b]=c.style.fields[b]||{}).backgroundColor;a._parentStyle={backgroundColor:c}},sanitize:function(a){k.sanitize(a)}},k={collectStatistics:function(a){if(!a._measureInfo){var b={},c={},d;a.data.columns.forEach(function(a){d&&(c[d.field]=a);d=a;b[a.field]=a});var f={},e={},g={},r={},m={},z=
{};a.data.data.forEach(function(b,c){a.data.columns.forEach(function(a,d){var n=m[d]||0,u=z[c]||0,h=k._getDataHeight(b,a.field);a=k._getFieldWidth(b,a);n+=h;u+=a;m[d]=n;z[c]=u;h=d+"_"+c;e[h]=n;f[h]=u;g[h]=f[d-1+"_"+c]||0;r[h]=e[d+"_"+(c-1)]||0})});a._measureInfo={xPositions:g,yPositions:r,columnsHash:b,nextColumnHash:c}}},calcX:function(a,b,c){c=a.data.columns.indexOf(c);b=a.data.data.indexOf(b);return a._measureInfo.xPositions[c+"_"+b]||0},calcY:function(a,b,c){c=a.data.columns.indexOf(c);b=a.data.data.indexOf(b);
return a._measureInfo.yPositions[c+"_"+b]||0},calcFullWidth:function(a,b,c){c=c.field;var d=k._getFieldWidth(b,a._measureInfo.columnsHash[c]),f=b.columnSpans&&b.columnSpans[c]||1;if(1<f)for(var e,g=0;g<f-1;g++)e=a._measureInfo.nextColumnHash[e?e.field:c],d+=k._getFieldWidth(b,e);return d},_getFieldWidth:function(a,b){a.style.fields=a.style.fields||{};return(a.style.fields[b.field]=a.style.fields[b.field]||{}).width||b.style.width},calcFullHeight:function(a,b,c){c=c.field;var d=a.data.data.indexOf(b),
f=k._getDataHeight(b,c);b=b.rowSpans&&b.rowSpans[c]||1;if(1<b)for(var e=d+1,g=0;g<b-1;g++)d=a.data.data[e++],f+=k._getDataHeight(d,c);return f},_getDataHeight:function(a,b){a.style.fields=a.style.fields||{};return(a.style.fields[b]=a.style.fields[b]||{}).height||a.style.height},sanitize:function(a){delete a._measureInfo}},A={getIntersectingTableJsonsBehind:function(a,b,c,d,f){function e(a){var d=a.data.data[0].fieldInfos[a.data.columns[0].field];return t.isTextLikeCell(d)||t.isShapeCell(d)||t.isImageCell(d)?
w.checkRectsIntersect([c,{x:a.style.left+b.left,y:a.style.top+b.top,w:x.getTableWidth(a),h:x.getTableHeight(a)}]):!1}function g(a){return w.checkRectsIntersect([c,{x:a.style.left+b.left,y:a.style.top+b.top,w:a.style.width,h:a.style.height}])}var r=[],m=[];a.backgroundFloatingTablesSectionJson&&a.backgroundFloatingTablesSectionJson.stack.forEach(function(a,b){if(-1===d||f||d!==b)if("table"===a.id&&e(a)||"img"===a.id&&g(a))-1===d||f||d>b?r.push(a):m.push(a)});a.foregroundFloatingTablesSectionJson&&
a.foregroundFloatingTablesSectionJson.stack.forEach(function(a,b){if(f&&d===b)return!0;if("table"===a.id&&e(a)||"img"===a.id&&g(a))f&&d>b?r.push(a):m.push(a)});return{elementJsonsBehind:r,elementJsonsAbove:m}}};l.collectSectionJsons=function(a,b){b=b||{};var c=[];if(!a)return[];if(a.sections)return a.sections;if(!a.sectionsTables)return[];b.processSectionJson=b.processSectionJson||function(){};a.sectionsTables.forEach(function(d,f){var e={addBackground:function(){!1!==b.backgroundForeground&&d.backgroundSectionJson&&
d.backgroundSectionJson.stack&&c.push(d.backgroundSectionJson)},addBackgroundTables:function(e){var g=[];!1!==b.floatingTables&&d.backgroundFloatingTablesSectionJson&&d.backgroundFloatingTablesSectionJson.stack.forEach(function(c,e){"table"===c.id&&l._processTableJson(c,g,"floating",a.documentOptions,b,d,e,!1)});e&&g.reverse();g.forEach(function(a){b.processSectionJson(a,{pageIndex:f,source:"foreground",floatingIndex:a.__floatingIndex});delete a.__floatingIndex});c=c.concat(g)},addInGridSections:function(){var e=
[];l._processTableJson(d,e,"page",a.documentOptions,b,d);e.forEach(function(a){b.processSectionJson(a,{pageIndex:f,source:"grid",index:a.__inGridIndex});delete a.__inGridIndex});c=c.concat(e)},addForegroundTables:function(e){var g=[];!1!==b.floatingTables&&d.foregroundFloatingTablesSectionJson&&d.foregroundFloatingTablesSectionJson.stack.forEach(function(c,e){"table"===c.id&&l._processTableJson(c,g,"floating",a.documentOptions,b,d,e,!0)});e&&g.reverse();g.forEach(function(a){b.processSectionJson(a,
{pageIndex:f,source:"foreground",floatingIndex:a.__floatingIndex});delete a.__floatingIndex});c=c.concat(g)},addForeground:function(){!1!==b.backgroundForeground&&d.foregroundSectionJson&&d.foregroundSectionJson.stack&&c.push(d.foregroundSectionJson)}};b.topFirst?(e.addForeground(),e.addForegroundTables(!0),e.addInGridSections(),e.addBackgroundTables(!0),e.addBackground()):(e.addBackground(),e.addBackgroundTables(),e.addInGridSections(),e.addForegroundTables(),e.addForeground())});return c};l._processTableJson=
function(a,b,c,d,f,e,g,k){a.data.data.forEach(function(m,l){m.fieldInfos&&a.data.columns.forEach(function(n,r){var p=m.fieldInfos[n.field];if(p&&p.sectionJson&&p.sectionJson.stack){f.processFieldInfoFunc&&f.processFieldInfoFunc(p);(!1!==f.saveParentInfo||f.populateWithFloatingElementsBehind)&&y.provideParentInfo(p.sectionJson,a,m,n,c,d);if(f.populateWithFloatingElementsBehind){n=function(a){a=v.clone(a);a.isContextFloatingElement=!0;a.style.left=a.style.left+d.left-h._parentBox.x;if("table"===a.id)a.style.top=
a.style.top+d.top-h._parentBox.y;else if("img"===a.id||"map"===a.id)a.style.top=a.style.top+d.top-h._parentBox.y;return a};var h=v.clone(p.sectionJson),q;"page"===c?q=A.getIntersectingTableJsonsBehind(e,d,h._parentBox,-1,void 0):"floating"===c&&(q=A.getIntersectingTableJsonsBehind(e,d,h._parentBox,g,k));p=q.elementJsonsBehind.map(n);q=q.elementJsonsAbove.map(n);h.stack=p.concat(h.stack);h.stack=h.stack.concat(q);b.push(h)}else b.push(p.sectionJson);q=b[b.length-1];"page"===c?q.__inGridIndex=l*a.data.columns.length+
r:q.__floatingIndex=g}})});y.sanitize(a)};l.getParentBox=function(a){return a&&a._parentBox};l.setParentBox=function(a,b){a._parentBox=b};l.getParentStyle=function(a){return a&&a._parentStyle};return l});