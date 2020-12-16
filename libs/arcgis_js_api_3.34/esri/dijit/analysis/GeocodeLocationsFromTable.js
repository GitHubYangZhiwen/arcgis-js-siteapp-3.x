// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/GeocodeLocationsFromTable.html":'\x3cdiv class\x3d"esriAnalysis" style\x3d"width:100%;height:100%;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv class\x3d"analysisTitle"\x3e\r\n        \x3ctable class\x3d"esriFormTable" \x3e\r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"geocodeLocationsIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n            \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.geocodeLocations}\x3c/label\x3e\r\n              \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n                \x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n                \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.geocodeLocations}\x3c/a\x3e\r\n              \x3c/nav\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n       \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e\r\n         \x3ctbody\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n            \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_toolDescription" \x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseFromTable}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputTable"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n            \x3ctd  colspan\x3d"3" class\x3d"padTop0"\x3e\r\n              \x3cselect class\x3d"esriAnalysisSelect esriLeadingMargin1 longInput esriLongLabel"   data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseLocator}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"geocodeServiceURL"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd  colspan\x3d"3" class\x3d"padTop0"\x3e\r\n              \x3cselect class\x3d"esriAnalysisSelect esriLeadingMargin1 longInput esriLongLabel"   data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_locatorSelect" data-dojo-props\x3d"required:true" data-dojo-attach-event\x3d"onChange:_handleLocatorChange"\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_countryRow"\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n               \x3clabel class\x3d"esriLeadingMargin1"\x3e${i18n.country}\x3c/label\x3e\r\n               \x3cselect data-dojo-attach-point\x3d"_countryCodes" data-dojo-type\x3d"dijit/form/Select" class\x3d"esriAnalysisSelect mediumInput esriMediumLabel" data-dojo-props\x3d"maxHeight:200"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_dataLoadingRow" style\x3d"display:none;"\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"_loadingDiv" style\x3d"height:3em;" class\x3d"esriLoadingBar"\x3e\x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_dataFieldSelectRow" style\x3d"display:none;"\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"padTop0"\x3e\r\n              \x3cdiv class\x3d"esriSwitchField"\x3e\r\n                \x3cdiv class\x3d"esriSwitchTitle"\x3e${i18n.selectDataFields}\x3c/div\x3e\r\n                \x3cinput type\x3d"radio" id\x3d"${id}_singleswitch" name\x3d"datafieldmode" data-dojo-attach-point\x3d"_singleswitch" data-dojo-attach-event\x3d"onchange:_handleSwitchChange"  /\x3e\r\n                \x3clabel for\x3d"${id}_singleswitch"\x3e${i18n.singeField}\x3c/label\x3e\r\n                \x3cinput type\x3d"radio" id\x3d"${id}_multipleswitch" data-dojo-attach-point\x3d"_multipleswitch" data-dojo-attach-event\x3d"onchange:_handleSwitchChange" name\x3d"datafieldmode"  checked/\x3e\r\n                \x3clabel for\x3d"${id}_multipleswitch"\x3e${i18n.multipleFields}\x3c/label\x3e\r\n              \x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_dataGridRow"\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cdiv class\x3d"esriLeadingMargin1 longInput" style\x3d"max-height:15em;" data-dojo-attach-point\x3d"_dataGridDiv"\x3e\x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_dataFieldErrorRow" style\x3d"display:none;"\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_dataErrorMessagePane" style\x3d"display:none;"\x3e\r\n                \x3c!--\x3ca href\x3d"#" title\x3d\'${i18n.close}\' class\x3d"esriFloatTrailing esriAnalysisInfoPaneCloseIcon"\x3e\x3c/a\x3e\r\n                \x3c/a\x3e--\x3e\r\n                \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n              \x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_chooseOutputTypeLblRow"\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel" data-dojo-attach-point\x3d"_datastoreLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseOutputFormat}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputType"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_chooseOutputTypeRow"\x3e\r\n            \x3ctd  colspan\x3d"3" class\x3d"padTop0"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 esriAnalysisSelect longInput esriLongLabel"   data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_formatSelect"\x3e\r\n                \x3coption value\x3d"csv"\x3e${i18n.csv}\x3c/option\x3e\r\n                \x3coption value\x3d"xls"\x3e${i18n.xls}\x3c/option\x3e\r\n                \x3coption value\x3d"Feature Service"\x3e${i18n.featureLayer}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_includeAttributesLabelRow"\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel" data-dojo-attach-point\x3d"_includeAttributesStepsLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.forEachLocation}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"includeAttributes"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_includeAttributesRow"\x3e\r\n            \x3ctd  colspan\x3d"3" class\x3d"padTop0"\x3e\r\n              \x3clabel class\x3d"esriLeadingMargin1 esriSelectLabel"\x3e\r\n                \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_includeAttributesCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"includeAttributes" value\x3d"true"/\x3e\r\n                  ${i18n.includeAttributesLabel}\r\n              \x3c/label\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_includeAttributesClearRow"\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel" data-dojo-attach-point\x3d"_outputNumLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputName"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 longInput" data-dojo-props\x3d"trim:true,required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n               \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n                 \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n                 \x3cinput class\x3d"longInput esriFolderSelect" data-dojo-attach-point\x3d"_webMapFolderSelect" dojotype\x3d"dijit/form/FilteringSelect" trim\x3d"true"\x3e\x3c/input\x3e\r\n               \x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/tbody\x3e\r\n       \x3c/table\x3e\r\n       \x3cdiv class\x3d"dijitDialogUnderlayWrapper" data-dojo-attach-point\x3d"_underlay" style\x3d"position:absolute;z-index:949;display:none;top:10%;left:0px;width:100%;height:80%;"\x3e\r\n         \x3cdiv class\x3d"dijitDialogUnderlay" tabindex\x3d"-1" style\x3d"width:100%;height:100%"\x3e\x3c/div\x3e\r\n         \x3cdiv class\x3d"esriLoadingLarge" style\x3d"height:100%;"\x3e\x3c/div\x3e\r\n       \x3c/div\x3e\r\n     \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n     \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/GeocodeLocationsFromTable","require dojo/aspect dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/_base/kernel dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/promise/all dojo/store/Memory dojo/store/Observable dojo/data/ObjectStore dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/Dialog dgrid1/OnDemandGrid dgrid1/Editor dgrid1/Keyboard dgrid1/Selection dgrid1/Selector dgrid1/extensions/ColumnResizer dgrid1/extensions/DijitRegistry dstore/Filter ../../kernel ../../lang ../../request ./AnalysisBase ./utils ./CreditEstimator ./_AnalysisOptions ./storeUtils ./ItemTypes ../../tasks/Geoprocessor dojo/i18n!../../nls/jsapi dojo/i18n!./nls/countries dojo/text!./templates/GeocodeLocationsFromTable.html".split(" "),
function(m,aa,u,d,f,v,g,w,x,ba,k,n,p,ca,da,y,z,A,B,C,D,E,F,G,H,ea,fa,ga,ha,I,ia,ja,ka,la,ma,J,K,L,M,N,O,P,Q,R,q,S,T,c,na,U,r,e,V,W,X,Y){var Z=u([J,K,L,M,N,O,P]);m=u([D,E,F,G,H,U,T],{declaredClass:"esri.dijit.analysis.GeocodeLocationsFromTable",templateString:Y,widgetsInTemplate:!0,inputTable:null,inputTables:[],outputLayerName:null,i18n:null,toolName:"BatchGeocode",analyzeToolName:"AnalyzeGeocodeInput",helpFileName:"GeocodeLocationsfromTable",resultParameter:"geocodeResult",checkCreditLimits:!1,allowWorldGeocoder:!0,
showChooseExtent:!1,constructor:function(a){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode);a.showGeoAnalyticsParams&&(this.toolName="GeocodeLocations")},destroy:function(){this.inherited(arguments);f.forEach(this._pbConnects,v.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);d.mixin(this.i18n,W.geocodeFromTableTool);d.mixin(this.i18n,X)},postCreate:function(){this.inherited(arguments);y.add(this._form.domNode,"esriSimpleForm");this._outputLayerInput.set("validator",
d.hitch(this,this.validateServiceName));this.filterObjects=[{layer:"inputLayer",layerForTool:"inputTable",select:this._analysisSelect,expressionObj:"attributeExprObj"}];this.inputTable&&this.inputTable.itemid?(this.inputTable.itemId=this.inputTable.itemid,this.signInPromise.then(d.hitch(this,function(){this.getItemInfo(this.inputTable.itemId).then(d.hitch(this,function(a){this.inputTable=d.mixin(this.inputTable,a);this.inputTable.name=a.title;this.inputTable&&!c.isLayerInLayers(this.inputTable,this.inputTables)&&
this.inputTables.push(this.inputTable);this._buildUI()}),d.hitch(this,function(a){console.log(a)}))}))):this._buildUI()},startup:function(){},_buildJobParams:function(){var a={},b;this.showGeoAnalyticsParams?a.inputLayer=this.constructAnalysisInputLyrObj(this.inputTable,!0):this.inputTable.itemId&&-1!==f.indexOf([e.CSV,e.XLS],this.inputTable.type)?a.inputFileItem=g.toJson({itemid:this.inputTable.itemId}):a.inputTable=this.constructAnalysisInputLyrObj(this.inputTable,!0);a.geocodeServiceUrl=this.locator.url;
a.geocodeParameters=g.toJson(this.get("geocodeParameters"));this.showGeoAnalyticsParams||(a.outputType=this._formatSelect.get("value"));this.showGeoAnalyticsParams&&(a.includeAttributes=this._includeAttributesCheck.get("checked"));c.isEsriWorldGeocoder(a.geocodeServiceUrl)&&(a.sourceCountry="world"===this._countryCodes.get("value")?"":this._countryCodes.get("value"));this.showGeoAnalyticsParams?this.returnFeatureCollection||(a.OutputName=g.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})):
this.returnFeatureCollection||"Feature Service"!==a.outputType?this.returnFeatureCollection||"Feature Service"===a.outputType||(a.OutputName={itemProperties:{title:this._outputLayerInput.get("value"),description:k.substitute(this.i18n.itemDescription,{inputTableName:this.inputTable.name}),tags:k.substitute(this.i18n.itemTags,{inputTableName:this.inputTable.name}),snippet:this.i18n.itemSnippet}},this.showSelectFolder&&(a.OutputName.itemProperties.folderId=this.get("folderId")),a.OutputName=g.toJson(a.OutputName)):
a.OutputName=g.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}});this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=g.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(b={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(b.extent=this.map.extent._normalize(!0)),a.context=g.toJson(b));return this._updateJobFilterAndSelection(a)},_onClose:function(a){this._aspectHandle&&(this._aspectHandle.remove(),
this._aspectHandle=null);a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},_handleSaveBtnClick:function(){var a={};this._form.validate()&&(this.set("disableRunAnalysis",!0),this.showGeoAnalyticsParams&&this.set("analysisGpServer",this.helperServices.geoanalytics&&this.helperServices.geoanalytics.url?this.helperServices.geoanalytics.url:null),a.jobParams=this._buildJobParams(),a.jobParams.OutputName&&g.fromJson(a.jobParams.OutputName).serviceProperties&&(a.itemParams={description:k.substitute(this.i18n.itemDescription,
{inputTableName:this.inputTable.name}),tags:k.substitute(this.i18n.itemTags,{inputTableName:this.inputTable.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(a.itemParams.folder=this.get("folderId"))),this.showGeoAnalyticsParams&&(this.resultParameter="output",a.isSpatioTemporalDataStore=!0),this.execute(a))},_handleShowCreditsClick:function(a){a.preventDefault();this._form.validate()&&this.getCreditsEstimate(this.toolName,this._buildJobParams()).then(d.hitch(this,function(a){this._usageForm.set("content",
a);this._usageDialog.show()}))},_handleBrowseItemsSelect:function(a,b){a&&a.selection&&c.addAnalysisReadyLayer({item:a.selection,layers:this.inputTables,layersSelect:this._analysisSelect,browseDialog:a.dialog||this._browsedlg,widget:this},b).always(d.hitch(this,this._updateAnalysisLayerUI,!0))},_save:function(){},_buildUI:function(){this._standardUX=[this._chooseOutputTypeLblRow,this._chooseOutputTypeRow];this._bigdataUX=[this._includeAttributesLabelRow,this._includeAttributesRow,this._includeAttributesClearRow];
c.updateDisplay(this._standardUX,!this.get("showGeoAnalyticsParams"),"table-row");c.updateDisplay(this._bigdataUX,this.get("showGeoAnalyticsParams"),"table-row");this._loadConnections();var a=!0,b=0;c.initHelpLinks(this.domNode,this.showHelp);n.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");this.get("showSelectAnalysisLayer")&&(this.inputTables&&this.inputTable&&!c.isLayerInLayers(this.inputTable,this.inputTables)&&this.inputTables.push(this.inputTable),this.get("inputTable")||
!this.get("inputTables")||this.rerun||this.set("inputTable",this.inputTables[0]),c.populateAnalysisLayers(this,"inputTable","inputTables"));c.addReadyToUseLayerOption(this,[this._analysisSelect]);this.helperServices&&this.helperServices.geocode&&(this.locators=f.filter(this.helperServices.geocode,function(a){var b=!!a.batch;return this.showGeoAnalyticsParams?c.isAgoWorldGeocodeServer(a.url)?!1:c.isAgoWorldGeocodeServerProxy(a.url)?!a.isEsriBatchGeocoder&&!a.isAGOWorldLocator&&this.allowWorldGeocoder&&
b:b:c.isEsriWorldGeocoder(a.url)?this.allowWorldGeocoder&&b:b},this),f.forEach(this.locators,function(a,c){var h=this.geocodeServiceUrl&&this.geocodeServiceUrl==a.url;h&&(b=""+c);this._locatorSelect.addOption({value:""+c,label:a.name,selected:h})},this),this._locatorSelect.set("value",b));this.outputType&&this._formatSelect.set("value",this.outputType);this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);n.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?
"block":"none");this.showSelectFolder&&this.getFolderStore().then(d.hitch(this,function(a){this.folderStore=a;c.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));n.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this._outputNumLabel&&this.showGeoAnalyticsParams?(p.set(this._includeAttributesStepsLabel,"innerHTML",this.i18n.threeLabel),
p.set(this._outputNumLabel,"innerHTML",this.i18n.fourLabel)):this._outputNumLabel&&!this.showGeoAnalyticsParams&&p.set(this._outputNumLabel,"innerHTML",this.i18n.fourLabel);q.isDefined(this.includeAttributes)&&this._includeAttributesCheck.set("checked",this.includeAttributes);this._buildCountryList();this._updateAnalysisLayerUI(a);this._createFilterAndSelections()},_buildDataFields:function(a){this._showLoading(!1);this.set("disableRunAnalysis",!1);c.updateDisplay([this._dataFieldErrorRow],!1,"table-row");
c.hideMessages(this._dataErrorMessagePane);c.updateDisplay([this._dataGridRow,this._dataFieldSelectRow],!0,"table-row");r.createStore(a);f.forEach(this.inputTable.fields,function(a){q.isDefined(a.alias)||(a.alias=a.name)});var b={identifier:"name",label:"alias",items:[{name:this.i18n.notUsed,alias:this.i18n.notUsed}].concat(this.inputTable.fields)},b=new C({objectStore:B(new A({data:b})),labelProperty:"alias"}),b=[{label:this.i18n.locatorInputs,field:"locatorField"},{label:this.i18n.dataFields,field:"mappedField",
editor:I,editOn:"click",editorArgs:{store:b,style:"width:120px;",maxHeight:-1},autoSave:!0}],h;h=f.filter(a,function(a){return this._multipleswitch.checked?!a.isSingle:a.isSingle},this);this._curdata=a;this.dataFieldGrid?(this.dataFieldGrid.set("columns",b),this.dataFieldGrid.set("collection",r.createStore(h))):(this.dataFieldGrid=new Z({collection:r.createStore(h),cellNavigation:!1,columns:b,selectionMode:"single"},this._dataGridDiv),this.dataFieldGrid.startup())},_handleSwitchChange:function(a){this._curdata&&
this._buildDataFields(this._curdata)},_buildCountryList:function(){var a=[],b={},b=(b.user||{}).region||b.region||b.ipCntryCode||"";""===this.sourceCountry&&(this.sourceCountry="world");for(var c in this.i18n.countryCodes)a.push({label:this.i18n.countryCodes[c],value:c.toLowerCase(),selected:this.sourceCountry&&this.sourceCountry===c.toLowerCase()});a=a.sort(function(a,b){return a.label<b.label?-1:a.label>b.label?1:0});this._countryCodes.set("options",a);this._countryCodes.set("value",this.i18n.countryCodes[b]?
b.toLowerCase():"world")},_loadConnections:function(){this.on("start",d.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",d.hitch(this,"_onClose",!1));this.own(this.watch("locator",d.hitch(this,this._locatorWatcher)),this.watch("inputTable",d.hitch(this,this.analyzeGeocodeInput)))},_handleAnalysisLayerChange:function(a){this._isAnalysisSelect=!0;if("browselayers"===a)if(this.showGeoAnalyticsParams)this.set("allowedItemTypes",[e.CSV,e.XLS]),this._createBrowseItems(a,{layerTypes:[e.TABLE,
e.BTABLE]},this._analysisSelect);else{var b=['typekeywords:"'+e.TABLE+'"','typekeywords:"'+e.CSV+'"','typekeywords:"'+e.XLS+'"'];this.set("allowedItemTypes",[e.CSV,e.XLS]);this._createBrowseItems(a,{layerTypes:[e.CSV,e.XLS,e.TABLE],custom:b},this._analysisSelect)}else this.set("inputTable",this.inputTables[a]),this._updateAnalysisLayerUI(!0)},_handleLocatorChange:function(a){this.set("locator",this.locators[a])},_updateAnalysisLayerUI:function(a){this.inputTable&&a&&(this.outputLayerName=k.substitute(this.i18n.outputLayerName,
{inputTableName:this.inputTable.name}),this._outputLayerInput.set("value",this.outputLayerName))},_locatorWatcher:function(a,b,e){a=!1;e&&e.url&&(a=c.isWorldGeoLocator(e.url),this._countryRow&&c.updateDisplay([this._countryRow],a,"table-row"));this.analyzeGeocodeInput()},analyzeGeocodeInput:function(){this.locator&&this.inputTable&&this.analysisGpServer&&this.signInPromise.then(d.hitch(this,function(){var a={geocodeServiceUrl:this.locator.url,locale:w.locale};this.inputTable.itemId&&-1!==f.indexOf([e.CSV,
e.XLS],this.inputTable.type)?(a.inputFileItem=g.toJson({itemid:this.inputTable.itemId}),a.inputFileParameters=g.toJson({fileType:this.inputTable.type===e.XLS?"xlsx":this.inputTable.type.toLowerCase(),headerRowExists:"true",columnDelimiter:"",textQualifier:""})):a.inputTable=this.constructAnalysisInputLyrObj(this.inputTable,!0);this.analyzeGP=new V(this.analysisGpServer+"/"+this.analyzeToolName);this.analyzeGP.setUpdateDelay(1E3);this._showLoading(!0);this.analyzeGP.submitJob(a,d.hitch(this,this._getAnalyzeGeocodeData),
d.hitch(this,this._analyzeJobFailed),d.hitch(this,this._analyzeJobFailed))}))},_getAnalyzeGeocodeData:function(a){var b=[];"esriJobSucceeded"===a.jobStatus&&(b.push(S({url:this.locator.url,content:{f:"json"}})),b.push(this.analyzeGP.getResultData(a.jobId,"geocodeParameters")),z(b).then(d.hitch(this,this._handleAnalyzeReponse)))},_analyzeJobFailed:function(a){if("esriJobFailed"===a.jobStatus||"esriJobCancelled"===a.jobStatus)this._showLoading(!1),c.updateDisplay([this._dataGridRow,this._dataFieldSelectRow],
!1,"table-row"),c.updateDisplay([this._dataFieldErrorRow],!0,"table-row"),c.showMessages("Mapping locator fields with input data fields failed, please use another locator.",this._bodyNode,this._dataErrorMessagePane),this.set("disableRunAnalysis",!0)},_handleAnalyzeReponse:function(a){var b=a&&a[0]&&a[0].addressFields?a[0].addressFields:null,c=a&&a[1].value&&a[1].value.field_mapping?g.fromJson(a[1].value.field_mapping):null,e=[],d=[],t=[],l;b&&(e=f.map(b,function(a){return a.name},this),c&&0<c.length&&
(c=this.rerun&&this.geocodeParameters&&this.geocodeParameters.field_mapping?g.fromJson(this.geocodeParameters.field_mapping):c,f.forEach(c,function(c){var d=-1;c[1]&&(d=f.indexOf(e,c[1]));-1!==d&&(b[d].map=c[0]);this.rerun&&a&&a[0]&&a[0].singleLineAddressField&&c[1]===a[0].singleLineAddressField.name&&(l=c[0]);t.push({name:c[0],alias:c[0]})},this),d=f.map(b,function(a){return{locatorField:a.name,mappedField:a.map||this.i18n.notUsed,isSingle:!1}},this)));a&&a[0]&&a[0].singleLineAddressField&&(d.push({locatorField:a[0].singleLineAddressField.name,
mappedField:l?l:this.i18n.notUsed,isSingle:!0}),l&&(this._singleswitch.checked=!0,this._multipleswitch.checked=!1));!this.inputTable.fields&&t&&(this.inputTable.fields=t);this.rerun&&this.geocodeParameters&&this.locator.url===this.geocodeServiceUrl?this.set("geocodeParameters",this.geocodeParameters):this.set("geocodeParameters",a[1].value);this._buildDataFields(d)},_checkFieldInDataField:function(a){return this._curdata?f.some(this._curdata,function(b){return b.mappedField===a}):!1},_filterLayer:function(a){var b=
[e.CSV,e.XLS,e.TABLE,e.BTABLE];this.showGeoAnalyticsParams&&(b=[e.TABLE,e.BTABLE]);return q.isDefined(a)&&(a.type&&-1!==f.indexOf(b,a.type)||!!a.itemid&&this.rerun)},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputTableAttr:function(a){this._filterLayer(a)?this._set("inputTable",a):this._set("inputTable",void 0)},_setInputTablesAttr:function(a){a=f.filter(a,function(a){return this._filterLayer(a)},this);
this._set("inputTables",a)},_setLocatorAttr:function(a){this._set("locator",a)},_setGeocodeParametersAttr:function(a){this._set("geocodeParameters",a)},_getGeocodeParametersAttr:function(){var a=new Q,b,c,e=[];if(!this.geocodeParameters)return null;this.dataFieldGrid&&(f.forEach(g.fromJson(this.geocodeParameters.field_mapping),function(d){b=a.eq("mappedField",d[0]);c=this.dataFieldGrid.collection.filter(b);var f=!1;c.forEach(function(a){a&&a.locatorField&&(d[1]=a.locatorField,f=!0)},this);!f&&this._checkFieldInDataField(d[0])&&
""!==d[1]&&(d[1]="");e.push(d)},this),this.geocodeParameters.field_mapping=g.toJson(e));return this.geocodeParameters},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_setAllowWorldGeocoderAttr:function(a){this._set("allowWorldGeocoder",a)},validateServiceName:function(a){return c.validateServiceName(a,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_connect:function(a,b,c){this._pbConnects.push(v.connect(a,b,c))},_showLoading:function(a){c.updateDisplay([this._dataGridRow,
this._dataFieldSelectRow,this._dataFieldErrorRow],!a,"table-row");c.updateDisplay([this._dataLoadingRow],a,"table-row");this.set("disableRunAnalysis",a);this._locatorSelect.set("disabled",a);this._analysisSelect.set("disabled",a)}});x("extend-esri")&&d.setObject("dijit.analysis.GeocodeLocationsFromTable",m,R);return m});