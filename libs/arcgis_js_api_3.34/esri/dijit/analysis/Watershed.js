// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/Watershed.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_WatershedToolContentTitle" class\x3d"analysisTitle"\x3e\r\n         \x3ctable class\x3d"esriFormTable" \x3e\r\n            \x3ctr\x3e\r\n              \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"watershedIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n              \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n                \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.watershed}\x3c/label\x3e\r\n                \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb" style\x3d"font-size:12px;" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.watershed}\x3c/a\x3e\r\n                \x3c/nav\x3e\r\n              \x3c/td\x3e\r\n              \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                  \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                  \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n              \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n         \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n    \x3ctable class\x3d"esriFormTable"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.inputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputFlowDirectionRaster"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"required:true" data-dojo-attach-point\x3d"_inputFlowDirectionRasterSelect" data-dojo-attach-event\x3d"onChange:_handleInputFlowDirectionRasterChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.pourPointLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inPourPointRasterOrFeatures"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"required:true" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.pourPointField}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"pourPointField"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_pourPointField" data-dojo-attach-event\x3d"onChange:_handlePourPointFieldChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"resultLayer"\x3e\x3c/a\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.resultLayerName}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"esriOutputText esriLeadingMargin1" data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e                \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n             \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n               \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n               \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n             \x3c/div\x3e              \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_chooseLayerTypeRow" class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel class\x3d"esriSaveLayerlabel"\x3e${i18n.saveLayerType}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput esriLongLabel" data-dojo-attach-point\x3d"_webLayerTypeSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:55%;"\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n        \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n          \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n        \x3c/label\x3e\r\n      \x3c/div\x3e\r\n    \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n      ${i18n.runAnalysis}\r\n    \x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/Watershed","require dojo/_base/declare dojo/_base/lang dojo/has dojo/_base/array dojo/_base/json dojo/_base/connect dojo/dom-class dojo/dom-style dojo/string dojo/json dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin esri/layers/ArcGISImageServiceLayer ../../kernel ../../lang ./utils ./ItemTypes ./RasterAnalysisMixin ./AnalysisRegistry dojo/i18n!../../nls/jsapi dojo/i18n!./nls/Watershed dojo/text!./templates/Watershed.html".split(" "),
function(h,m,d,n,e,l,z,A,B,C,D,p,q,r,t,u,f,v,E,g,k,w,b,F,x,y){h=m([p,q,r,t,u,w],{declaredClass:"esri.dijit.analysis.Watershed",templateString:y,widgetsInTemplate:!0,browseType:[k.IS,k.FS],checkGeometries:[b.GeometryTypes.Point,b.GeometryTypes.MultiPoint,b.GeometryTypes.Line],tags:["point","line"],inputFlowDirectionRaster:null,inputLayer:null,pourPointField:null,_NOVALUE_:"NOVALUE",toolName:"Watershed",helpFileName:"Watershed",toolNlsName:x,rasterGPToolName:"Watershed",resultParameter:"outputRaster",
constructor:function(a,c){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode);this.inputLayer=a.inPourPointRasterOrFeatures},_getJobParameters:function(){var a=l.toJson(g.constructAnalysisInputLyrObj(this.get("inputLayer"))),c=this.get("pourPointField");return{inputFlowDirectionRaster:l.toJson(g.constructAnalysisInputLyrObj(this.get("inputFlowDirectionRaster"))),inPourPointRasterOrFeatures:a,pourPointField:c}},_handleInputFlowDirectionRasterChange:function(a){"browselayers"===a||
"browse"===a?(this._isAnalysisSelect=!1,this.defaultItemTypes=[],this.set("allowedItemTypes",[k.IS]),this._createBrowseItems({browseValue:a,disableLAAL:!0,disableBoundary:!0},{},this._inputFlowDirectionRasterSelect)):0<=a&&this.set("inputFlowDirectionRaster",this.inputFlowDirectionRasterLayers[a])},_handleBrowseItemsSelect:function(a,c){a&&a.selection&&g.addAnalysisReadyLayer({item:a.selection,layers:this._isAnalysisSelect?this.inputLayers:this.inputFlowDirectionRasterLayers,layersSelect:this._isAnalysisSelect?
this._analysisSelect:this._inputFlowDirectionRasterSelect,browseDialog:this._browseLyrsdlg||this._browsedlg,widget:this},c).always(d.hitch(this,function(){this._isAnalysisSelect?this._handleAnalysisLayerChange(this._analysisSelect.get("value")):this._handleInputFlowDirectionRasterChange(this._inputFlowDirectionRasterSelect.get("value"))}))},_handlePourPointFieldChange:function(a){this.set("pourPointField",a)},_resetUI:function(){this.inputLayer&&this._addPourPointFieldOptions();this.inputFlowDirectionRaster||
(this.inputFlowDirectionRaster=this.inputFlowDirectionRasterLayers[0])},_addPourPointFieldOptions:function(){var a=[];this._pourPointField.removeOption(this._pourPointField.getOptions());e.forEach(this.inputLayer instanceof f||"esri.layers.RasterXLayer"===this.inputLayer.declaredClass?this.inputLayer.hasRasterAttributeTable?this.inputLayer._rasterAttributeTableFields:[{value:"VALUE",label:"VALUE"}]:this.inputLayer.fields,d.hitch(this,function(c){this._isNumberType(c.type)&&a.push({value:c.name,label:c.alias,
selected:c.name===this.pourPointField})}));!this.pourPointField&&a&&a[0]&&this.set("pourPointField",a[0].value);this._pourPointField.addOption(a)},_isNumberType:function(a){return a===b.FieldTypes.Integer||a===b.FieldTypes.Double||a===b.FieldTypes.Short||a===b.FieldTypes.Float},_addInputFlowDirectionRasterLayerOptions:function(){var a=[];this._inputFlowDirectionRasterSelect.removeOption(this._inputFlowDirectionRasterSelect.getOptions());e.forEach(this.inputFlowDirectionRasterLayers,d.hitch(this,function(c,
b){a.push({label:c.name,value:b,selected:this._isSelected(c)})}));this._inputFlowDirectionRasterSelect.addOption(a)},_isSelected:function(a){return this.inputFlowDirectionRaster&&a&&this.inputFlowDirectionRaster.url===a.url},addBrowseOption:function(){g.addReadyToUseLayerOption(this,[{select:this._inputFlowDirectionRasterSelect,disableLAAL:!0}])},_setInputLayerAttr:function(a){this.inputLayer=a},_getInputLayerAttr:function(){return this.inputLayer},_setInputLayersAttr:function(a){this.inputLayers=
e.filter(a,function(a){return a.geometryType===b.GeometryTypes.Point||a.geometryType===b.GeometryTypes.Line||a.geometryType===b.GeometryTypes.MultiPoint||a instanceof f||"esri.layers.RasterXLayer"===a.declaredClass});this.set("inputFlowDirectionRasterLayers",a)},_getInputLayersAttr:function(a){return this.inputLayers},_getInputFlowDirectionRasterAttr:function(){return this.inputFlowDirectionRaster},_setInputFlowDirectionRasterAttr:function(a){if(a instanceof f||"esri.layers.RasterXLayer"===a.declaredClass)this.inputFlowDirectionRaster=
a},_setInputFlowDirectionRasterLayersAttr:function(a){this.inputFlowDirectionRasterLayers=e.filter(a,function(a){return a instanceof f||"esri.layers.RasterXLayer"===a.declaredClass});this._addInputFlowDirectionRasterLayerOptions()},_getInputFlowDirectionRasterLayersAttr:function(){return this.inputFlowDirectionRasterLayers},_setPourPointFieldAttr:function(a){this.pourPointField=a},_getPourPointFieldAttr:function(){return this.pourPointField}});n("extend-esri")&&d.setObject("dijit.analysis.Watershed",
h,v);return h});