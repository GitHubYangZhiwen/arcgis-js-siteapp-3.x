// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/tableViewRendering/TableViewRenderer","dojo/_base/declare dojo/_base/lang dijit/Destroyable esri/dijit/geoenrichment/ReportPlayer/config ../../supportClasses/tableJson/TableJsonUtil esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes ../../sections/sectionUtils/SectionJsonUtil ../utils/builder/utils/ChartDataUtil ../utils/ChartTypes ../../grid/coreUtils/GridDataUtil dojo/i18n!esri/nls/jsapi".split(" "),function(v,C,w,K,L,M,
N,D,O,E,h){h=h.geoenrichment.dijit.ReportPlayer.ChartContainer;var P=/_P$/i,Q={buildSectionJsonFromSeriesItems:function(a,F,d,g,m,e,f,r){function k(a,b,e){var c,G=(b=(a=d[a-1]&&d[a-1].data[b-1])||w)&&b.point.fieldInfo&&P.test(b.point.fieldInfo.name);a&&a.isUnavailableData&&(b=0,c=K.tables.showUnavailableData?h.unavailableDataShort:"");b=void 0!==e?e:a&&a.originalValue;c=void 0!==c?c:void 0!==b?D.formatNumber(b,g,G):"";a&&c&&a.isBenchmarked&&!a.isUnavailableData&&(c=D.formatNumber(a.unbenchmarkedValue,
g,G)+" ("+(0<b?"+":"")+c+")");return{value:b||0,formattedValue:c||""}}d=d.map(function(a){a=C.mixin({},a);a.data=a.data.slice();a.data.sort(function(a,d){return a.unsortedIndex-d.unsortedIndex});return a});if(F&&O.isColumnBarLike(a)){var H=[];d[0].data.forEach(function(a,b){H.push({name:a.name,data:d.map(function(a){return C.mixin({},a.data[b],{name:a.name})})})});d=H}var x=-1,y=-1,z=-1,A=-1,l=d[0].data.length+1;a=l;r.showTotalsBelow&&(x=l++);r.showAvgBelow&&(y=l++);var t=d.length+1,B=t;r.showTotalsAfter&&
(z=t++);r.showAvgAfter&&(A=t++);var v=f/l-2,n=L.createTable({numColumns:t,numRows:l,width:e,height:f,processTableCell:function(a,b,d,c,e){a.style.fields[b].verticalAlign="middle";a.style.fields[b].horizontalPadding=5;a.style.fields[b].fontSize=Math.round(Math.min(v,15-4*l/50))}}),w=d[0]&&d[0].data[0],u={},p={},I={},q={},J={};n.data.data.forEach(function(a,b){n.data.columns.forEach(function(a,c){u[b+";"+c]=k(c,b)})});for(e=0;e<a;e++){for(f=q[e]=0;f<B;f++)q[e]+=u[e+";"+f].value;J[e]=q[e]/(B-1)}for(f=
0;f<B;f++){for(e=p[f]=0;e<a;e++)p[f]+=u[e+";"+f].value;I[f]=p[f]/(a-1)}n.data.data.forEach(function(a,b){n.data.columns.forEach(function(e,c){0===b?a[e.field]=0===c?g.xAxis&&g.xAxis.title||"":1===c?m?F||2<d.length?d[c-1].name||"":h.thisArea:1<d.length?d[c-1].name||"":g.yAxis&&g.yAxis.title||"":c===z?h.total:c===A?h.average:d[c-1].name||"":0===c?(e=e.field,c=0!==b?b===x?h.total:b===y?h.average:d[0].data[b-1].name||"":void 0,a[e]=c):(c=c===z?k(c,b,q[b]):c===A?k(c,b,J[b]):b===x?k(c,b,p[c]):b===y?k(c,
b,I[c]):u[b+";"+c],E.setNumericDataValue(c.value,a,e.field),a[e.field]=c.formattedValue)})});return{sectionJson:N.wrapInDetailsSectionJson(n),numberFormatFunction:function(a,b){return k(b.column.index,b.gridData.index,a).formattedValue}}}};return v(w,{_tableSection:null,_sorting:null,renderTableForChart:function(a){var h=this;this._destroyTable();if(a.chartSeries&&a.chartSeries.length){var d={"class":"chartContainer_tableSection"};d.initialWidth=a.width;d.initialHeight=a.height;var g=Q.buildSectionJsonFromSeriesItems(a.chartType,
a.isMultiFeatureChart,a.chartSeries,a.visualProperties,a.hasComparison,a.width,a.height,a.tableViewInfo);d.json=g.sectionJson;var m=a.viewModel.getDocumentDefaultStyles(a.theme);m.backgroundImage&&m.backgroundImage.data&&(d.json.style={backgroundColor:m.backgroundColor});a.showAnimation||(g.numberFormatFunction=null);d.viewModel=a.viewModel;d.theme=a.theme;d.tableClass="chartContainerChartTable";d.parentWidget=a.parentWidget;d.initialViewMode=this._viewMode||M.PREVIEW_VALUES;d.tableParams={enableNumberAnimation:a.showAnimation,
_postCreateFieldCell:function(a){if(g.numberFormatFunction){var d=g.numberFormatFunction;a.setNumberValue(E.getNumericCellValue(a),function(e){return d(e,a)},!0);setTimeout(function(){g.numberFormatFunction=null})}},onSortingChanged:function(a){h._sorting=a}};this._tableSection=a.viewModel.layoutBuilder.createElement("section",d,a.tableNode);this._tableSection.getTables()[0].setSorting(this._sorting)}},_viewMode:null,setViewMode:function(a){this._viewMode!==a&&(this._viewMode=a,this._tableSection&&
this._tableSection.setViewMode(a))},getVisualState:function(){return{type:"tableViewRenderer",tableSection:this._tableSection&&this._tableSection.getVisualState()}},setVisualState:function(a){return a&&a.tableSection&&this._tableSection&&this._tableSection.setVisualState(a.tableSection)},destroyTable:function(){this._destroyTable()},_destroyTable:function(){this._tableSection&&this._tableSection.destroy();this._tableSection=null},destroy:function(){this._destroyTable();this.inherited(arguments)}})});