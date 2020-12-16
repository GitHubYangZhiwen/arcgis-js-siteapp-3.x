// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/GridCellRenderer","dojo/_base/declare dojo/_base/lang dojo/aspect esri/dijit/geoenrichment/ReportPlayer/config esri/dijit/geoenrichment/utils/ObjectUtil esri/dijit/geoenrichment/utils/WaitingUtil ./GridDataUtil ./GridStyleUtil ./GridCellContentScaler ./GridCellContentSynchronizer ../../supportClasses/conditionalStyling/ConditionalStyleUtil ../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ElementUsageTypes esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/SpecificViewModes ./GridQueryUtil ./tooltip/GridCellTooltipBuilder ../../../_devConfig".split(" "),
function(u,z,A,v,B,q,g,C,w,D,x,t,E,F,n,r,y,G,H){function m(a){var b=a.parentGrid;return a[b.hasRealBorders||b.isMultiDataTable()?"getContentWidth":"getWidth"]()}function p(a){var b=a.parentGrid;return a[b.hasRealBorders||b.isMultiDataTable()?"getContentHeight":"getHeight"]()}var I={color:"#FF0000"},J={color:"#AAAAAA",fontStyle:"italic",fontSize:13,horizontalAlign:"center",verticalAlign:"middle"},k=u(null,{_parentState:null,constructor:function(a,b,c){var f=this;w.fitContentInsideCell(a);this._setParentState(a);
c.forEach(function(c){var d=c[1];b.own(A.after(a,c[0],function(){f._checkParentChanged(d,a)&&(w.fitContentInsideCell(a),D.syncParentFieldInfoWithElementState(a,b))}))})},_setParentState:function(a){var b=a.getFullStyle();this._parentState={width:m(a),height:p(a),horizontalAlign:b.horizontalAlign,verticalAlign:b.verticalAlign}},_checkParentChanged:function(a,b){var c;switch(a){case "width":a=m(b);this._parentState.width!==a&&(this._parentState.width=a,c=!0);break;case "height":a=p(b);this._parentState.height!==
a&&(this._parentState.height=a,c=!0);break;case "horizontalAlign":case "verticalAlign":if(a=b.getFullStyle(),this._parentState.horizontalAlign!==a.horizontalAlign||this._parentState.verticalAlign!==a.verticalAlign)this._parentState.horizontalAlign=a.horizontalAlign,this._parentState.verticalAlign=a.verticalAlign,c=!0}return c}});return u(null,{renderCellContent:function(a){var b=a.parentGrid,c=g.getFieldInfo(a);if(H.emulateErrors.reportContainerRenderError)throw Error("Error test: something crashed when building the UI layout!");
try{if(c){if(c.isReportSection)return this._placeReportSectionInCell(b,a);if(c.isInfographic)return this._placeInfographicInCell(b,a);if(c.isChart)return this._placeChartInCell(b,a);if(c.isMap)return this._placeMapInCell(b,a);if(c.isImage)return this._renderCellTooltip(a),this._placeImageInCell(b,a);if(c.isShape)return this._placeShapeInCell(b,a);c.isMissing&&a.setStyle(I);c.isUnsupportedContent&&a.setStyle(J)}this._applyRenderedContent(a,this._getRenderedContent(a));a.setContent(null);this._renderCellTooltip(a)}catch(f){if(console.log(f),
!v.tables.leaveEmptyCellsUponError)throw f;}},_renderCellTooltip:function(a){a.viewModel.dynamicReportInfo&&!v.isPlayerOnServer&&G.setDynamicTooltipToCell(a,a.viewModel.dynamicReportInfo.templateVariableProvider)},updateViewMode:function(a){var b=g.getFieldInfo(a);b&&(b.hasVariable||b.script||b.alias||b.isRichText)&&this._applyRenderedContent(a,this._getRenderedContent(a))},getRenderedContent:function(a){return this._getRenderedContent(a)},_getRenderedContent:function(a,b){var c=g.getFieldInfo(a);
if(c)return a=this._prepareRenderContextForFieldCell(a),z.mixin(a,b),c.isImage&&c.triggerJson&&c.triggerJson.fieldInfo&&(c=c.triggerJson.fieldInfo),t.renderFieldInfoInTableCell(c,a);b=a.gridData[a.column.field];return{formattedValue:null===b||void 0===b||"number"===typeof b&&isNaN(b)?"":b,value:b,formatFunction:null,isUnavailableData:!1,conditionalStyle:null}},_prepareRenderContextForFieldCell:function(a){var b=a.parentGrid,c=b.getViewMode()===n.EDIT,f=this._getCellBenchmarkInfoBuilder(a);return{previewValues:this._isPreviewValues(a),
previewConditionalStyle:!c,getPreviewValueFunction:b.getPreviewValueFunction,fieldData:b.viewModel.dynamicReportInfo&&b.viewModel.dynamicReportInfo.fieldData,currentFeatureIndex:b.getFeatureIndexForCell(a),currentFeatureAttributes:b.currentFeatureAttributes,rowIndex:a.gridData&&a.gridData.index,columnIndex:a.column&&a.column.index,columnField:a.column&&a.column.field,numRows:b.store.data.length,isGraphicReport:b.viewModel.isGraphicStyle,isMultiFeature:b.viewModel.dynamicReportInfo&&b.viewModel.dynamicReportInfo.isMultiFeature,
presetFilter:!c&&b.presetFilter,presetSorting:!c&&b.presetSorting,isBenchmarked:!!f,getBenchmarkInfo:f&&f.getBenchmarkInfo}},_isPreviewValues:function(a){var b=a.parentGrid;a=g.getFieldInfo(a);var c=b.getSpecificViewMode(),b=b.getViewMode()===n.PREVIEW_VALUES;a&&a.name&&0===a.name.indexOf("SiteNote")&&(b=!0);c&&a&&(c[r.RICH_TEXT]===n.PREVIEW_VALUES&&a.isRichText?b=!0:c[r.VARIABLE]===n.PREVIEW_VALUES&&g.isVariableLikeFieldCell(a)?b=!0:c[r.SPECIAL]===n.PREVIEW_VALUES&&g.isSpecialFieldCell(a)?b=!0:c[r.INFOGRAPHIC]===
n.PREVIEW_VALUES&&a.isInfographic&&(b=!0));return b},_applyRenderedContent:function(a,b){b&&(this._setCellFormattedValue(a,b),b.isUnavailableData||("number"!==typeof b.value||isNaN(b.value)||(g.setNumericCellValue(a,b.value),a.setNumberValue(b.value,b.formatFunction,a.parentGrid.enableNumberAnimation)),b.conditionalStyle?(a.setStyle(b.conditionalStyle.style),"string"===typeof b.conditionalStyle.formattedValue&&this._setCellFormattedValue(a,b.conditionalStyle),a.__hasConditionalStyle=!0):!1===b.conditionalStyle||
a.__hasConditionalStyle?(delete a.__hasConditionalStyle,a.setStyle(C.combineCellStyle(a.parentGrid,a.gridData,a.column))):b.modifiedValue&&"string"===typeof b.modifiedValue.formattedValue&&this._setCellFormattedValue(a,b.modifiedValue)),a.parentGrid&&a.parentGrid.viewModel.dynamicReportInfo&&a.setUrl(g.getFieldCellUrl(a)))},_setCellFormattedValue:function(a,b){if("number"===typeof b.value&&!isNaN(b.value)){var c=this._getCellBenchmarkInfoBuilder(a);c&&a.setBenchmarkInfo(c.getBenchmarkInfo(b.value))}g.setFieldCellContent(a,
b.formattedValue)},_getCellBenchmarkInfoBuilder:function(a){var b=this,c=a.parentGrid;return c.viewModel.isBenchmarkedArea&&c.viewModel.isBenchmarkedArea(c.getFeatureIndexForCell(a))&&{isBenchmarked:!0,getBenchmarkInfo:function(f,d){var e=a;d&&(e={gridData:{fieldInfos:{}},column:a.column,parentGrid:c},e.gridData.fieldInfos[e.column.field]=d);d=b._getRenderedContent(e,{currentFeatureIndex:c.viewModel.getBenchmarkController().getAreaIndex()});e=f-d.value;return{ownValue:f,isGreater:0<=e,value:Math.abs(e),
formattedValue:d.formatFunction?d.formatFunction(Math.abs(e)):B.formatNumber(Math.abs(e)),noTextLimit:c.viewModel.getBenchmarkController().hasNoTextLimit()}}}},_placeReportSectionInCell:function(a,b){function c(){if(b.domNode)return f._createReportSectionFromParams(a,b,d)}var f=this,d={"class":"adjustableGrid_inCellSection"};d.json=g.getFieldInfo(b).sectionJson;d.viewModel=a.viewModel;d.theme=a.theme;d.viewPortContainer=a.viewPortContainer;d.parentWidget=b;d.currentFeatureIndex=a.getFeatureIndexForCell(b);
d.currentFeatureAttributes=a.currentFeatureAttributes;d.initialWidth=m(b);d.initialHeight=p(b);d.noContentOffset=y.cellHasFloatingTableParent(b);d.initialViewMode=a.getViewMode();d.parentGridCell=b;d.elementUsageType=(a.isReportContainerPageGrid||a.parentGrid&&a.parentGrid.isReportContainerPageGrid)&&F.PAGE_PANEL_SECTION;var e=a.viewModel.layoutBuilder.getClass("section");return e.isAsync?q.showProgressPromise(b.domNode,e.loadModules()).then(c):c()},_createReportSectionFromParams:function(a,b,c){a=
c.json&&c.json.stack&&c.json.type!==E.EMPTY?a.viewModel.layoutBuilder.createElement("section",c,b.getContentContainerNode()):a.viewModel.layoutBuilder.createElement("emptySection",c,b.getContentContainerNode());b.setContent(a);new k(b,a,[["onWidthChanged","width"],["onHeightChanged","height"]]);return a},_placeInfographicInCell:function(a,b){function c(){if(b.domNode)return f._createInfographicFromParams(a,b,d,e)}var f=this,d=g.getFieldInfo(b).infographicJson,e={viewModel:a.viewModel,theme:a.theme,
parentWidget:b,currentFeatureIndex:a.getFeatureIndexForCell(b),currentFeatureAttributes:a.currentFeatureAttributes,getPreviewValueFunction:a.getPreviewValueFunction,width:m(b),height:p(b),adjustElementsWhenResized:y.cellHasFloatingTableParent(b)},l=a.viewModel.layoutBuilder.getClass("infographic");return l.isAsync?q.showProgressPromise(b.domNode,l.loadModules()).then(c):c()},_createInfographicFromParams:function(a,b,c,f){c=a.viewModel.layoutBuilder.createElement("infographic",{node:b.getContentContainerNode(),
placeFunc:function(a){b.setContent(a)},json:c,creationParams:f});c.setViewMode&&c.setViewMode(a.getViewMode());new k(b,c,[["onWidthChanged","width"],["onHeightChanged","height"]]);return c},_placeChartInCell:function(a,b){function c(){if(b.domNode)return f._createChartPageFromParams(a,b,e,d)}var f=this,d={viewModel:a.viewModel,theme:a.theme,currentFeatureIndex:a.getFeatureIndexForCell(b),currentFeatureAttributes:a.currentFeatureAttributes,parentWidget:b},e=g.getFieldInfo(b).chartJson;e.visualProperties.width=
b.getWidth();e.visualProperties.height=b.getHeight();var l=a.viewModel.layoutBuilder.getClass("chart");return l.isAsync?q.showProgressPromise(b.domNode,l.loadModules()).then(c):c()},_createChartPageFromParams:function(a,b,c,f){a=a.viewModel.layoutBuilder.createElement("chart",{node:b.getContentContainerNode(),placeFunc:function(a){b.setContent(a)},json:c,creationParams:f});new k(b,a,[["onWidthChanged","width"],["onHeightChanged","height"]]);return a},_placeMapInCell:function(a,b){function c(){if(b.domNode)return e=
f._createMapFromParams(a,b,d,l)}var f=this,d=g.getFieldInfo(b).mapJson,e,l={viewModel:a.viewModel,theme:a.theme,parentWidget:b,currentFeatureIndex:a.getFeatureIndexForCell(b),currentFeatureAttributes:a.currentFeatureAttributes},m=a.viewModel.layoutBuilder.getClass("map");return m.isAsync?q.showProgressPromise(b.domNode,m.loadModules()).then(c):c()},_createMapFromParams:function(a,b,c,f){a=a.viewModel.layoutBuilder.createElement("map",{node:b.getContentContainerNode(),placeFunc:function(a){b.setContent(a)},
json:c,creationParams:f});new k(b,a,[["onWidthChanged","width"],["onHeightChanged","height"],["setStyle","horizontalAlign"]]);return a},_placeImageInCell:function(a,b){function c(){if(b.domNode)return k=f._createImageFromParams(a,b,e,q)}var f=this,d=g.getFieldInfo(b),e=d.imageJson,l=m(b),n=p(b);if(d.triggerJson)if(a.viewModel.dynamicReportInfo){var h=t.getValueFromFieldData(d.triggerJson.fieldInfo,{fieldData:a.viewModel.dynamicReportInfo.fieldData,currentFeatureIndex:a.getFeatureIndexForCell(b),currentFeatureAttributes:a.currentFeatureAttributes});
x.processImageJsonForTrigger(e,h.value,d.triggerJson);h.isUnavailableData||"number"!==typeof h.value||isNaN(h.value)||(g.setNumericCellValue(b,h.value),b.setNumberValue(h.value,h.formatFunction,!1))}else(h=t.getConditionalStylePreview(d,b.gridData.index))&&"number"===typeof h.value&&!isNaN(h.value)&&(x.processImageJsonForTrigger(e,h.value,d.triggerJson),g.setNumericCellValue(b,h.value));e.style.width&&e.style.height&&!1!==e.ownSizeInsideParent&&Math.round(e.style.width)!==Math.round(l)&&Math.round(e.style.height)!==
Math.round(n)?e.ownSizeInsideParent=!0:(e.ownSizeInsideParent=!1,e.style.width=l,e.style.height=n);var k,q={viewModel:a.viewModel,theme:a.theme,parentWidget:b,currentFeatureIndex:a.getFeatureIndexForCell(b),currentFeatureAttributes:a.currentFeatureAttributes,alignParams:b.getFullStyle(),imageTriggerJson:d.triggerJson,onInitialized:function(){if(b.domNode){var a=m(b),c=p(b);k&&k.resize({w:a,h:c},b.getFullStyle())}}},d=a.viewModel.layoutBuilder.getClass("image");return d.isAsync?d.loadModules().then(c):
c()},_createImageFromParams:function(a,b,c,f){a=a.viewModel.layoutBuilder.createElement("image",{node:b.getContentContainerNode(),placeFunc:function(a){b.setContent(a)},json:c,creationParams:f});new k(b,a,[["onWidthChanged","width"],["onHeightChanged","height"],["setStyle","horizontalAlign"]]);return a},_placeShapeInCell:function(a,b){function c(){if(b.domNode)return k=f._createShapeFromParams(a,b,d,h)}var f=this,d=g.getFieldInfo(b).shapeJson,e=m(b),l=p(b);d.style.width=e;d.style.height=l;var k,h=
{viewModel:a.viewModel,theme:a.theme,parentWidget:b,currentFeatureIndex:a.getFeatureIndexForCell(b),currentFeatureAttributes:a.currentFeatureAttributes,alignParams:b.getFullStyle(),getPreviewValueFunction:a.getPreviewValueFunction,applyThemeStyle:a.applyThemeStyle},e=a.viewModel.layoutBuilder.getClass("shape");return e.isAsync?e.loadModules().then(c):c()},_createShapeFromParams:function(a,b,c,f){a=a.viewModel.layoutBuilder.createElement("shape",{node:b.getContentContainerNode(),placeFunc:function(a){b.setContent(a)},
json:c,creationParams:f});new k(b,a,[["onWidthChanged","width"],["onHeightChanged","height"],["setStyle","horizontalAlign"]]);return a}})});