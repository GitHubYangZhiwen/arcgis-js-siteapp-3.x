// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/DissolveBoundaries.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_dissolveBoundariesToolContentTitle" class\x3d"analysisTitle"\x3e\r\n        \x3ctable class\x3d"esriFormTable" \x3e \r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"dissolveBoundariesIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n            \x3ctd class\x3d"esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.dissolveBoundaries}\x3c/label\x3e\r\n              \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n                \x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n                \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.dissolveBoundaries}\x3c/a\x3e\r\n              \x3c/nav\x3e               \r\n            \x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e              \r\n              \x3c/div\x3e               \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n     \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_dissolveBoundariesTable"\x3e \r\n       \x3ctbody\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_dissolveBoundariesDescription"\x3e${i18n.dissolveBoundariesDefine}\x3c/td\x3e           \r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e           \r\n        \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n          \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e          \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelOne" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e    \r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseDissolveLabel}\x3c/label\x3e\t\t\t\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" width\x3d"1%"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_dissolveFieldsHelpNode" esriHelpTopic\x3d"DissolveFields"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n          \t\x3clabel class\x3d"esriLeadingMargin1"\x3e\r\n               \x3cdiv data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"_overlappingAreasCheck" data-dojo-props\x3d"checked:true"\x3e\x3c/div\x3e\r\n               ${i18n.overlappingAreasLabel}\r\n            \x3c/label\x3e \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n          \t\x3clabel class\x3d"esriLeadingMargin1"\x3e\r\n               \x3cdiv data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"_sameAttributeAreasCheck" data-dojo-props\x3d"checked:false" data-dojo-attach-event\x3d"onChange:_handleAreasChange"\x3e\x3c/div\x3e\r\n               ${i18n.sameAttributeAreasLabel}\r\n            \x3c/label\x3e \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e  \r\n             \x3cselect class\x3d"esriLeadingMargin1  longInput"  multiple\x3d"true" data-dojo-type\x3d"dojox/form/CheckedMultiSelect" data-dojo-attach-point\x3d"_dissolveFieldsSelect"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e        \t\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin2"\x3e\r\n              \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_multiplePartFeatureCheck" data-dojo-props\x3d"checked:true" data-dojo-attach-event\x3d"onChange:_handleMultiPartFeatureChange"\x3e\x3c/div\x3e\r\n              ${i18n.createMultiPartFeature} \r\n            \x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" data-dojo-attach-point\x3d"_multipartHelpNode" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"multiPartFeatures"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e      \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_summaryLabel" \x3e${i18n.summarizeLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_summaryFieldsHelpNode" esriHelpTopic\x3d"SummaryFields"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e             \r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-type\x3d"esri/dijit/analysis/components/AddSummaryFields" data-dojo-attach-point\x3d"_summaryWidget" \r\n        data-dojo-props\x3d"layer:\'\', showGeoAnalyticsParams:${showGeoAnalyticsParams}, addAsRow:true"\x3e            \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_outputNameHelpNode" esriHelpTopic\x3d"OutputName"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e             \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"longTextInput esriLeadingMargin1" data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e                \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n             \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n               \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n               \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n             \x3c/div\x3e              \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e         \r\n      \x3c/tbody\x3e         \r\n     \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e    \r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/DissolveBoundaries","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/on dojox/form/CheckedMultiSelect dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/RadioButton dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect ../../kernel ../../lang ./AnalysisBase ./_AnalysisOptions ./CreditEstimator ./utils ./AnalysisRegistry ./components/AddSummaryFields dojo/i18n!../../nls/jsapi dojo/text!./templates/DissolveBoundaries.html".split(" "),
function(l,q,c,e,p,f,r,E,m,h,g,F,G,t,H,I,u,v,w,x,y,J,K,L,M,N,O,P,Q,R,S,z,k,A,B,T,d,n,U,C,D){l=q([u,v,w,x,y,B,A],{declaredClass:"esri.dijit.analysis.DissolveBoundaries",templateString:D,widgetsInTemplate:!0,inputLayer:null,dissolveFields:null,summaryFields:null,outputLayerName:null,i18n:null,toolName:"DissolveBoundaries",helpFileName:"DissolveBoundaries",resultParameter:"DissolvedLayer",constructor:function(a){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode);a.showGeoAnalyticsParams&&
a.rerun&&(a.multiPartFeatures=a.multipart)},destroy:function(){this.inherited(arguments);e.forEach(this._pbConnects,p.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);c.mixin(this.i18n,C.dissolveBoundaries)},postCreate:function(){this.inherited(arguments);t.add(this._form.domNode,"esriSimpleForm");h.set(this._dissolveFieldsSelect.selectNode,"width","75%");this._outputLayerInput.set("validator",c.hitch(this,this.validateServiceName));this.filterObjects=
[{layer:"inputLayer",select:this._analysisSelect,expressionObj:"attributeExprObj"}];this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},_handleAreasChange:function(){this._dissolveFieldsSelect.set("disabled",!0!==this._sameAttributeAreasCheck.get("checked"));this._dissolveFieldsSelect.set("required",!0===this._sameAttributeAreasCheck.get("checked"));this._dissolveFieldsSelect.validate();this._whetherToDisableSummaryStats()},
_whetherToDisableSummaryStats:function(){this._overlappingAreasCheck.get("value")&&!this._multiplePartFeatureCheck.get("value")?this._summaryWidget.disable():this._summaryWidget.enable()},_handleBrowseItemsSelect:function(a,b){a&&a.selection&&d.addAnalysisReadyLayer({item:a.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,browseDialog:a.dialog||this._browsedlg,widget:this},b).always(c.hitch(this,this._updateAnalysisLayerUI,!0))},_handleShowCreditsClick:function(a){a.preventDefault();
this._form.validate()&&this.getCreditsEstimate(this.toolName,this._buildJobParams()).then(c.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()}))},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var a={};a.jobParams=this._buildJobParams();a.itemParams={description:this.i18n.itemDescription,tags:m.substitute(this.i18n.itemTags,{layername:this.inputLayer.name}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(a.itemParams.folder=
this.get("folderId"));this.showGeoAnalyticsParams&&(this.resultParameter="output",a.isSpatioTemporalDataStore=!0);this.execute(a)}},_buildJobParams:function(){var a={},b;a.inputLayer=f.toJson(this.constructAnalysisInputLyrObj(this.inputLayer));(b=this._summaryWidget.get("summaryFields"))&&0<b.length&&(a.summaryFields=this.showGeoAnalyticsParams?f.toJson(b):b);this.showGeoAnalyticsParams?a.multipart=this.multiPartFeatures:a.multiPartFeatures=this.multiPartFeatures;this.returnFeatureCollection||(a.OutputName=
f.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));!0===this._sameAttributeAreasCheck.get("checked")&&(b=this.get("dissolveFields"),a.dissolveFields=f.toJson(b),this.showGeoAnalyticsParams&&(a.dissolveFields=b.toString()));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=f.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(b={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(b.extent=
this.map.extent._normalize(!0)),a.context=f.toJson(b));return this._updateJobFilterAndSelection(a)},_handleMultiPartFeatureChange:function(a){this.multiPartFeatures=a;this._whetherToDisableSummaryStats()},_save:function(){},_buildUI:function(){var a=!0;this._loadConnections();this.signInPromise.then(c.hitch(this,d.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer}));this.showGeoAnalyticsParams&&(g.set(this._dissolveFieldsHelpNode,"esriHelpTopic","dissolveFields"),g.set(this._multipartHelpNode,
"esriHelpTopic","multipart"),g.set(this._summaryFieldsHelpNode,"esriHelpTopic","summaryFields"),g.set(this._outputNameHelpNode,"esriHelpTopic","outputName"),g.set(this._summaryLabel,"innerHTML",this.i18n.addStatsLabel));k.isDefined(this.multiPartFeatures)||(this.multiPartFeatures=!this.showGeoAnalyticsParams);this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!d.isLayerInLayers(this.inputLayer,this.inputLayers)&&(this.inputLayers.push(this.inputLayer),this._summaryWidget.set("layer",
this.inputLayer)),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),d.populateAnalysisLayers(this,"inputLayer","inputLayers"));d.addReadyToUseLayerOption(this,[this._analysisSelect]);this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this.dissolveFields&&0<this.dissolveFields.length&&this._sameAttributeAreasCheck.set("checked",!0);this.inputLayer&&this._updateAnalysisLayerUI(a);this.summaryFields&&this._summaryWidget.set("summaryFields",
this.summaryFields);h.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&(this.getFolderStore().then(c.hitch(this,function(a){this.folderStore=a;d.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})})),this._createFilterAndSelections());h.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":
"none");h.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none")},_loadConnections:function(){this.on("start",c.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",c.hitch(this,"_onClose",!1))},_updateAnalysisLayerUI:function(a){if(this.inputLayer){g.set(this._dissolveBoundariesDescription,"innerHTML",m.substitute(this.i18n.dissolveBoundariesDefine,{layername:this.inputLayer.name}));if(!this.outputLayerName||a)this.outputLayerName=m.substitute(this.i18n.outputLayerName,
{layername:this.inputLayer.name});a=this.inputLayer.fields;var b=[],c=!1;this._dissolveFieldsSelect.removeOption(this._dissolveFieldsSelect.getOptions());e.forEach(a,function(a,d){-1!==e.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString"],a.type)&&(null!==this.dissolveFields&&(c=-1!==this.dissolveFields.indexOf(a.name)),b.push({value:a.name,label:k.isDefined(a.alias)&&""!==a.alias?a.alias:a.name,selected:c}))},this);this._dissolveFieldsSelect.addOption(b);
this._dissolveFieldsSelect.set("disabled",!0!==this._sameAttributeAreasCheck.get("checked"))}this._multiplePartFeatureCheck.set("checked",this.multiPartFeatures);this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName)},_handleAnalysisLayerChange:function(a){"browse"===a||"browselayers"===a?this._createBrowseItems({browseValue:a,disabledSubResources:[this.inputLayer]},{tags:["polygon"],geometryTypes:[n.GeometryTypes.Polygon]},this._analysisSelect):(this.set("inputLayer",this.inputLayers[a]),
this._dissolveFields=null,this._updateAnalysisLayerUI(!0))},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(a){k.isDefined(a)&&a.geometryType===n.GeometryTypes.Polygon&&(this.inputLayer=a);this._summaryWidget.set("layer",this.inputLayer)},_setInputLayersAttr:function(a){this.inputLayers=e.filter(a,function(a){return a.geometryType===n.GeometryTypes.Polygon})},_setMultiPartFeaturesAttr:function(a){this.multiPartFeatures=
a},_setAttributesAttr:function(a){if(a.inputLayer){var b,c;b=a.inputLayer;c=a.selectWidget;a=b.fields;c.addOption({value:"0",label:this.i18n.attribute});e.forEach(a,function(a){-1!==e.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],a.type)&&a.name!==b.objectIdField&&c.addOption({value:a.name,label:k.isDefined(a.alias)&&""!==a.alias?a.alias:a.name})},this)}},_setStatisticsAttr:function(a){a=a.selectWidget;a.addOption({value:"0",label:this.i18n.statistic});
a.addOption({value:"SUM",label:this.i18n.sum});a.addOption({value:"MIN",label:this.i18n.minimum});a.addOption({value:"MAX",label:this.i18n.maximum});a.addOption({value:"MEAN",label:this.i18n.average});a.addOption({value:"STDDEV",label:this.i18n.standardDev})},_setDissolveFieldsAttr:function(a){this.dissolveFields=a},_getDissolveFieldsAttr:function(){var a=[];this._dissolveFieldsSelect.getOptions().forEach(function(b){!0===b.selected&&"0"!==b.value&&a.push(b.value)});return a},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",
a)},validateServiceName:function(a){return d.validateServiceName(a,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_connect:function(a,b,c){this._pbConnects.push(p.connect(a,b,c))}});r("extend-esri")&&c.setObject("dijit.analysis.DissolveBoundaries",l,z);return l});