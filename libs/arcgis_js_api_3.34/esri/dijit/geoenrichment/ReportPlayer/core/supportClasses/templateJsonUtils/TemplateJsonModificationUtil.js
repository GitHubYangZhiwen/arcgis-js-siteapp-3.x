// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/TemplateJsonModificationUtil",["esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/GridLayoutCalculator"],function(g,h){var d={},l={getJsonStat:function(a){var b=0,c=0,k=[];a.sectionsTables.forEach(function(a){var d=0;a.data.columns.forEach(function(b){d+=e.getFieldWidth(a,a.data.data[0],b)});b=Math.max(b,d);var f=0;a.data.data.forEach(function(b){f+=
e.getDataHeight(a,b,a.data.columns[0])});c=Math.max(c,f);k.push({totalW:d,totalH:f})});return{tableInfos:k,totalWMax:b,totalHMax:c}}},e={getFieldWidth:function(a,b,c){return h.getFieldWidth({looseResize:!0},b,c)||c.style.width},getDataHeight:function(a,b,c){return h.getDataHeight({looseResize:!0},b,c.field)},getAverageFieldWidth:function(a,b){var c=0;a.data.data.forEach(function(d){c+=e.getFieldWidth(a,d,b)});return c/a.data.data.length},getAverageDataHeight:function(a,b){var c=0;a.data.columns.forEach(function(d){c+=
e.getDataHeight(a,b,d)});return c/a.data.columns.length}};d.adjustDocumentOptions=function(a){if(a.documentOptions){var b=l.getJsonStat(a);b.totalWMax&&b.totalHMax&&!isNaN(b.totalWMax)&&!isNaN(b.totalHMax)&&(a=a.documentOptions,a.pagesize=g.combineCustomSizeString(a.left+a.right+b.totalWMax,a.top+a.bottom+b.totalHMax,"px"),(b=g.getClosestStandrdSizes(a)[0])&&.001>b.score&&b.orientation===a.orientation&&(a.pagesize=b.pagesize))}};d.JsonStatCollector=l;d.DataUtil=e;return d});