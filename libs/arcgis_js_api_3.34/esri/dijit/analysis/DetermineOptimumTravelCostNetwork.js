// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/DetermineOptimumTravelCostNetwork.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_determineOptimumTravelCostNetworkToolContentTitle" class\x3d"analysisTitle"\x3e\r\n      \x3ctable class\x3d"esriFormTable"\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"esriToolIconTd"\x3e\r\n            \x3cdiv class\x3d"travelCostNetworkIcon"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.determineOptimumTravelCostNetwork}\x3c/label\x3e\r\n            \x3cnav class\x3d"breadcrumbs" data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb" style\x3d"font-size:12px;" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.determineOptimumTravelCostNetwork}\x3c/a\x3e\r\n            \x3c/nav\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n              \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n    \x3ctable class\x3d"esriFormTable"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.inputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputRegionsRasterOrFeatures"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"required:true"\r\n              data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/components/AddPointFeatures/AddPointFeatures" data-dojo-attach-point\x3d"_sourceDrawBtn"\r\n              class\x3d"right esriActionButton" data-dojo-props\x3d"iconUrl:\'http://static.arcgis.com/images/Symbols/Basic/GreenStickpin.png\', layerName:\'${i18n.drawnPointLayer}\', label:\'${i18n.drawLabel}\'"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.inputCostRasterLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputCostRaster"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"required:true" data-dojo-attach-point\x3d"_inputCostRasterSelect" data-dojo-attach-event\x3d"onChange:_handleInputCostRasterChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputOptimumNetworkName"\x3e\x3c/a\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputOptimumNetworkName}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"esriOutputText esriLeadingMargin1"\r\n              data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fiveLabel}\x3c/label\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputNeighborNetworkName"\x3e\x3c/a\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputNeighborNetworkName}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true" class\x3d"esriOutputText esriLeadingMargin1"\r\n              data-dojo-attach-point\x3d"_outputNeighborNetworkNameInput"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n              \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true"\r\n                style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_chooseLayerTypeRow" class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel class\x3d"esriSaveLayerlabel"\x3e${i18n.saveLayerType}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput esriLongLabel" data-dojo-attach-point\x3d"_webLayerTypeSelect" data-dojo-type\x3d"dijit/form/FilteringSelect"\r\n                trim\x3d"true" style\x3d"width:55%;"\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n    \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n      \x3ca class\x3d"esriFloatTrailing esriSmallFont" href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n      \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n        \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true"\r\n          name\x3d"extent" value\x3d"true" /\x3e ${i18n.useMapExtent}\r\n      \x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton"\r\n      data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n      ${i18n.runAnalysis}\r\n    \x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator" data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/analysis/DetermineOptimumTravelCostNetwork","../../kernel ./AnalysisRegistry ./RasterAnalysisMixin ./utils ./ItemTypes dijit/_FocusMixin dijit/_OnDijitClickMixin dijit/_TemplatedMixin dijit/_WidgetBase dijit/_WidgetsInTemplateMixin dojo/_base/array dojo/_base/declare dojo/_base/json dojo/_base/lang dojo/has dojo/i18n!./nls/DetermineOptimumTravelCostNetwork dojo/text!./templates/DetermineOptimumTravelCostNetwork.html".split(" "),function(l,c,d,e,f,m,n,p,q,r,g,t,k,h,u,v,w){d=t([q,
p,r,n,m,d],{declaredClass:"esri.dijit.analysis.DetermineOptimumTravelCostNetwork",templateString:w,widgetsInTemplate:!0,browseType:[f.IS,f.FS],checkGeometries:[c.GeometryTypes.Point,c.GeometryTypes.MultiPoint,c.GeometryTypes.Line],tags:["point","line"],inputFlowDirectionRaster:null,inputLayer:null,allocationField:null,maximumDistance:{},outputCellSize:{},analysisType:"feature",toolName:"DetermineOptimumTravelCostNetwork",helpFileName:"DetermineOptimumTravelCostNetwork",toolNlsName:v,rasterGPToolName:"DetermineOptimumTravelCostNetwork",
outputName:"outputOptimumNetworkName",resultParameter:["outputOptimumNetworkFeatures","outputNeighborNetworkFeatures"],secondaryOutputs:["outputNeighborNetworkFeatures"],secondaryOutputNames:["outputNeighborNetworkName"],constructor:function(a,b){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},_getJobParameters:function(){var a=e.constructAnalysisInputLyrObj(this.get("inputLayer")),b=e.constructAnalysisInputLyrObj(this.get("inputCostRaster"));this.get("inputLayer").drawnLayer&&
(a.drawnLayer=this.get("inputLayer").drawnLayer);return{inputRegionsRasterOrFeatures:k.toJson(a),inputCostRaster:k.toJson(b),outputOptimumNetworkName:this.get("outputOptimumNetworkName")}},_setDefaultInputs:function(){this.inputCostRaster&&this.inputCostRasters&&!e.isLayerInLayers(this.inputCostRaster,this.inputCostRasters)&&this.inputCostRasters.push(this.inputCostRaster);this._addInputCostRasterLayerOptions();this._outputLayerInput.set("value",this.outputOptimumNetworkName&&this.outputOptimumNetworkName.serviceProperties.name);
this._outputNeighborNetworkNameInput.set("value",this.outputDirectionName&&this.outputDirectionName.serviceProperties.name);this.addPointAnalysisLayer()},_addInputCostRasterLayerOptions:function(){var a=[];this._inputCostRasterSelect.removeOption(this._inputCostRasterSelect.getOptions());var b=!1;g.forEach(this.inputCostRasters,h.hitch(this,function(c,e){var d=this._isSelected(c,this.inputCostRaster);b=b||d;a.push({label:c.name,value:e.toString(),selected:d})}));this._inputCostRasterSelect.addOption(a);
b||this._handleInputCostRasterChange(0)},_handleInputCostRasterChange:function(a){"browselayers"===a||"browse"===a?(this._isAnalysisSelect=!1,this.defaultItemTypes=[],this.set("allowedItemTypes",[f.IS]),this._createBrowseItems({browseValue:a,disableLAAL:!0,disableBoundary:!0,disabledSubResources:[this.inputCostRaster]},{},this._inputCostRasterSelect)):0<=a&&this.set("inputCostRaster",this.inputCostRasters[a])},_handleBrowseItemsSelect:function(a,b){a&&a.selection&&e.addAnalysisReadyLayer({item:a.selection,
layers:this._isAnalysisSelect?this.inputLayers:this.inputCostRasters,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._inputCostRasterSelect,browseDialog:this._browseLyrsdlg||this._browsedlg,widget:this},b).always(h.hitch(this,function(){this._isAnalysisSelect?this._handleAnalysisLayerChange(this._analysisSelect.get("value")):this._handleInputCostRasterChange(this._inputCostRasterSelect.get("value"))}))},_isSelected:function(a,b){return b&&a&&b.url===a.url},addBrowseOption:function(){e.addReadyToUseLayerOption(this,
[{disableLAAL:!0,select:this._inputCostRasterSelect}])},_setInputLayerAttr:function(a){this.inputLayer=a},_getInputLayerAttr:function(){return this.inputLayer},_setInputLayersAttr:function(a){this.inputLayers=g.filter(a,function(a){return a.geometryType===c.GeometryTypes.Point||a.geometryType===c.GeometryTypes.Polygon||a.geometryType===c.GeometryTypes.Line||a.geometryType===c.GeometryTypes.MultiPoint||this.isImageServiceLayer(a)},this);this.set("inputCostRasters",a)},_getInputLayersAttr:function(a){return this.inputLayers},
_getInputCostRasterAttr:function(){return this.inputCostRaster},_setInputFlowDirectionRasterAttr:function(a){this.isImageServiceLayer(a)&&(this.inputCostRaster=a)},_getInputCostRastersAttr:function(){return this.inputCostRasters},_setInputCostRastersAttr:function(a){this.inputCostRasters=g.filter(a,function(a){return this.isImageServiceLayer(a)},this)},_setOutputOptimumNetworkNameAttr:function(a){this.outputOptimumNetworkName=a},_getOutputOptimumNetworkNameAttr:function(){return this._outputLayerInput.get("value")},
_setOutputNeighborNetworkNameAttr:function(a){this.outputNeighborNetworkName=a},_getOutputNeighborNetworkNameAttr:function(){return this._outputNeighborNetworkNameInput.get("value")}});u("extend-esri")&&h.setObject("dijit.analysis.DetermineOptimumTravelCostNetwork",d,l);return d});