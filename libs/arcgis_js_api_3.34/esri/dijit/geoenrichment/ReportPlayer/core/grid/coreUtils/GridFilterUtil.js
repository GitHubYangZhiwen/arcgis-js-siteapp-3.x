// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/GridFilterUtil","dojo/string ../../supportClasses/tableJson/TableJsonResizeUtil ../../supportClasses/tableJson/TableJsonUtil ./sorting/GridSortUtil ./sorting/GridRowStyler ./GridDataUtil esri/dijit/geoenrichment/utils/ObjectUtil esri/dijit/geoenrichment/utils/JsonXmlConverter dojo/i18n!esri/nls/jsapi".split(" "),function(p,r,t,u,v,l,w,x,f){f=f.geoenrichment.dijit.ReportPlayer.Grid;var n={collectStatsForVariables:function(a){var c=0,
b=[],k={};if(2>a.columns.length||3>a.store.data.length)return null;var m=n.getFirstFilterableRowIndex(a)-1;a.columns.forEach(function(g,h){var e,d={alias:null,fieldName:g.field,columnIndex:h,min:Infinity,max:-Infinity,decimals:0,dataArray:[]};a._getOriginalData().forEach(function(b,h){b=l.getRenderedValue(a,b,g);h<=m?d.alias=d.alias||h===m&&x.unrichHTML(b.formattedValue):"number"===typeof b.numericValue&&(b=b.numericValue,d.min=Math.min(d.min,b),d.max=Math.max(d.max,b),d.decimals=Math.max(d.decimals,
w.getPlaces(b)),d.dataArray.push(b),c++,e=!0,k[h]=!0)});e&&(d.alias=d.alias||p.substitute(f.columnN,[h+1]),b.push(d),d._cIndex=h)});var e={};b.forEach(function(a){(e[a.alias]=e[a.alias]||[]).push(a)});for(var q in e)1<e[q].length&&e[q].forEach(function(a){a.alias+=" ("+p.substitute(f.columnN,[a._cIndex+1])+")"});b.forEach(function(a){delete a._cIndex});return 1<c&&{filterRanges:b,numVariablesTotal:c,numRowsTotal:Object.keys(k).length}},getFirstFilterableRowIndex:function(a){var c=a._getOriginalData(),
b=a.columns[0].field,k=(b=l.getDataColumnSpan(c[0],b)===a.columns.length&&!l.getDataRowSpan(c[0],b))?1:0;a=a.columns.some(function(a){return l.isVariableLikeFieldCell(l.getFieldInfo({gridData:c[k],column:a}))});return b?a?1:2:a?0:1},filterGridData:function(a,c){var b=[],k=0,m=0,e={};c.forEach(function(a){e[a.fieldName]=a});a._saveOriginalData();var f=n.getFirstFilterableRowIndex(a)-1;c=u.getSortableDataInfo(a);a.store.data.forEach(function(c,g){var d=!0,h;g>f&&a.columns.forEach(function(b){var f=
e[b.field];if(f){var g=l.getRenderedValue(a,c,b);"number"===typeof g.numericValue&&(h=!0,g.numericValue<f.min||g.numericValue>f.max?(delete c.fieldInfos[b.field],delete c[b.field],d=!1):k++)}});d&&(b.push(c),h&&m++)});r.resizeTableJsonToFitHeight({data:{data:b,columns:a.columns}},t.getTableHeight({data:{data:a.store.data}}));if(c&&c.styleInfo){var g=b.slice(c.topData.length);v.setAlternatingColors(g,a.columns,c.styleInfo)}a.store.data=b;return{numValuesShown:k,numRowsShown:m}}};return n});