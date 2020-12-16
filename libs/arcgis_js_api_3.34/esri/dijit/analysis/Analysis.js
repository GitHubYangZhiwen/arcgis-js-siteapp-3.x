// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/Analysis.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n   \x3cdiv data-dojo-type\x3d"dojox/widget/TitleGroup" class\x3d"analysisCategoryCtr" doLayout\x3d"false" style\x3d"width:100%" data-dojo-attach-point\x3d"_featureAccordion"\x3e\r\n      \x3c!--\x3cdiv data-dojo-type\x3d"dijit/TitlePane"  title\x3d"dummy" style\x3d"height:240px;display:none;" data-dojo-attach-point\x3d"_dummyPane"\x3e\r\n      \x3c/div\x3e--\x3e\r\n      \x3cdiv data-dojo-type\x3d"dijit/TitlePane"  data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.summarizeData}"  data-esriHelpTopic\x3d"SummarizeDataCategory" data-dojo-attach-point\x3d"_summarizeTools"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"dijit/TitlePane" data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.findLocations}"  data-esriHelpTopic\x3d"FindLocationsCategory" data-dojo-attach-point\x3d"_locationTools"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"dijit/TitlePane" data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.dataEnrichment}" data-esriHelpTopic\x3d"EnrichLocationsCategory" data-dojo-attach-point\x3d"_geoenrichTools" \x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"dijit/TitlePane" data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.analyzePatterns}" data-esriHelpTopic\x3d"AnalyzePatternsCategory" data-dojo-attach-point\x3d"_analyzePatTools"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"dijit/TitlePane" data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.useProximity}" data-esriHelpTopic\x3d"UseProximityCategory" data-dojo-attach-point\x3d"_proximityTools"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"dijit/TitlePane" data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.manageData}"  data-esriHelpTopic\x3d"ManageDataCategory" data-dojo-attach-point\x3d"_managedataTools" \x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_test"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\x3c!-- end AccordionContainer --\x3e\r\n   \x3cdiv data-dojo-type\x3d"dojox/widget/TitleGroup" class\x3d"analysisCategoryCtr" doLayout\x3d"false" style\x3d"height:600px;width:100%" data-dojo-attach-point\x3d"_rasterAccordion"\x3e\r\n     \x3cdiv data-dojo-type\x3d"dijit/TitlePane" data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.summarizeData}" data-esriHelpTopic\x3d"SummarizeDataCategory" data-dojo-attach-point\x3d"_summarizeRasterTools"\x3e\r\n     \x3c/div\x3e\r\n     \x3cdiv data-dojo-type\x3d"dijit/TitlePane" data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.analyzePatterns}" data-esriHelpTopic\x3d"AnalyzePatternsCategory" data-dojo-attach-point\x3d"_analyzePatRasterTools"\x3e\r\n     \x3c/div\x3e\r\n     \x3cdiv data-dojo-type\x3d"dijit/TitlePane" data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.useProximity}" data-esriHelpTopic\x3d"UseProximityCategory" data-dojo-attach-point\x3d"_proximityRasterTools"\x3e\r\n     \x3c/div\x3e\r\n     \x3cdiv data-dojo-type\x3d"dijit/TitlePane" data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.analyzeImage}" data-esriHelpTopic\x3d"AnalyzeImageCategory" data-dojo-attach-point\x3d"_analyzeImageRasterTools"\x3e\r\n     \x3c/div\x3e\r\n     \x3cdiv data-dojo-type\x3d"dijit/TitlePane" data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.analyzeTerrain}" data-esriHelpTopic\x3d"AnalyzeTerrainCategory" data-dojo-attach-point\x3d"_analyzeTerrainRasterTools"\x3e\r\n     \x3c/div\x3e\r\n     \x3cdiv data-dojo-type\x3d"dijit/TitlePane" data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.manageData}" data-esriHelpTopic\x3d"ManageDataCategory" data-dojo-attach-point\x3d"_managedataRasterTools"\x3e\r\n     \x3c/div\x3e\r\n     \x3cdiv data-dojo-type\x3d"dijit/TitlePane" data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.deepLearning}" data-esriHelpTopic\x3d"DeepLearningCategory" data-dojo-attach-point\x3d"_deepLearningRasterTools"\x3e\r\n     \x3c/div\x3e\r\n     \x3cdiv data-dojo-type\x3d"dijit/TitlePane" data-dojo-props\x3d"open:false,toggleable:true" title\x3d"${i18n.multidimensionAnalysis}" data-esriHelpTopic\x3d"MultidimensionalAnalysisCategory" data-dojo-attach-point\x3d"_multidimensionAnalysisRasterTools"\x3e\r\n     \x3c/div\x3e\r\n   \x3c/div\x3e\x3c!-- end AccordionContainer --\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/Analysis","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/on dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/layout/AccordionContainer dijit/TitlePane dojox/widget/TitleGroup ../../kernel ../../lang ./AnalysisToolItem ./utils ./AnalysisRegistry dojo/i18n!../../nls/jsapi dojo/text!./templates/Analysis.html".split(" "),
function(n,t,d,k,H,I,u,J,K,f,v,c,q,L,w,x,y,z,A,B,C,m,M,D,N,E,F,e,r,h,p,G){var l=[h.Modes.Feature,h.Modes.Raster];n=t([y,z,A,B,C,x],{declaredClass:"esri.dijit.analysis.Analysis",templateString:G,widgetsInTemplate:!0,i18n:null,helpFileName:"Analysis",analysisMode:l[0],showBigData:!1,constructor:function(b,a){this._titlePanes=[];this.isSingleTenant=b&&b.isPortal;this.helpBase=b&&b.helpBase},postMixInProperties:function(){this.inherited(arguments);this.i18n={};d.mixin(this.i18n,p.common);d.mixin(this.i18n,
p.tocPanel);d.mixin(this.i18n,p.analysisTools);this.own(this.watch("analysisMode",d.hitch(this,this._handleAnalysisModeChange)),this.watch("showBigData",d.hitch(this,this._updateHelp)))},startup:function(){this.inherited(arguments);this._handleAnalysisModeChange()},destroy:function(){this.inherited(arguments)},_connect:function(b,a,c){b._handle||(b._handle=w.pausable(b,a,c),this.own(b._handle))},_setSummarizeToolsAttr:function(){var b=c.create("div"),a=new e({name:this.i18n.aggregatePoints,helpTopic:"AggregatePointsTool",
toolIcon:"aggregateIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.buildMultiVariableGrid,helpTopic:"BuildMultiVariableGridTool",toolIcon:"buildMultiVariableGridIcon"},c.create("div",null,b));f.set(a.optionsDiv,"margin-top","0");a.set("showComingSoonLabel",!1);f.set(a.domNode,"display","none");this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.describeDataset,helpTopic:"DescribeDatasetTool",
toolIcon:"describeDatasetIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.joinFeatures,helpTopic:"JoinFeaturesTool",toolIcon:"joinFeaturesIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));var g=new e({name:this.i18n.reconstructTracks,helpTopic:"ReconstructTracksTool",toolIcon:"reconstructIcon"},c.create("div",null,b));f.set(g.optionsDiv,
"margin-top","0");g.set("showComingSoonLabel",!1);f.set(g.domNode,"display","none");this._connect(g,"tool-select",d.hitch(this,"onToolSelect"));g=new e({name:this.i18n.summarizeAttributes,helpTopic:"SummarizeAttributesTool",toolIcon:"sumAttributesIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);f.set(g.domNode,"display","none");this._connect(g,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.summarizeNearby,helpTopic:"SummarizeNearbyTool",toolIcon:"sumNearbyIcon"},
c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.summarizeWithin,helpTopic:"SummarizeWithinTool",toolIcon:"sumWithinIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.summarizeCenterAndDispersion,helpTopic:"SummarizeCenterAndDispersionTool",toolIcon:"summarizeCenterAndDispersionIcon"},c.create("div",null,b));a.set("showComingSoonLabel",
!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.createPanel,helpTopic:"CreatePanelTool",toolIcon:"createInterpolatedSurfaceIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);f.set(a.domNode,"display","none");this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));this._summarizeTools.set("content",b)},_setLocationToolsAttr:function(){var b=c.create("div"),a=new e({name:this.i18n.findExistingLocations,helpTopic:"FindExistingLocationsTool",toolIcon:"findLocationsIcon"},
c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.deriveNewLocations,helpTopic:"DeriveNewLocationsTool",toolIcon:"findNewLocationsIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.detectTrackIncidents,helpTopic:"DetectIncidentsTool",toolIcon:"detectTrackIncidentsIcon"},c.create("div",null,b));a.set("showComingSoonLabel",
!1);f.set(a.domNode,"display","none");this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.findCentroids,helpTopic:"FindCentroidsTool",toolIcon:"findCentroidsIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.findDwellLocations,helpTopic:"FindDwellLocationsTool",toolIcon:"findDwellLocationsIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",
d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.findSimilarLocations,helpTopic:"FindSimilarLocationsTool",toolIcon:"findSimilarLocationsIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.geocodeLocations,helpTopic:"GeocodeLocationsfromTableTool",toolIcon:"geocodeLocationsIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.chooseBestFacilities,
helpTopic:"ChooseBestFacilitiesTool",toolIcon:"chooseBestFacilitiesIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.createViewshed,helpTopic:"CreateViewshedTool",toolIcon:"createViewshedIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.createWatershed,helpTopic:"CreateWatershedsTool",toolIcon:"createWatershedIcon"},
c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.traceDownstream,helpTopic:"TraceDownstreamTool",toolIcon:"traceDownstreamIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));this._locationTools.set("content",b)},_setGeoenrichToolsAttr:function(){var b=c.create("div"),a=new e({name:this.i18n.enrichLayer,helpTopic:"EnrichLayerTool",toolIcon:"geoenrichLayerIcon"},
c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.enrichMultiVariableGrid,helpTopic:"EnrichFromMultiVariableGridTool",toolIcon:"enrichMVGridIcon"},c.create("div",null,b));f.set(a.optionsDiv,"margin-top","0");a.set("showComingSoonLabel",!1);f.set(a.domNode,"display","none");this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));this._geoenrichTools.set("content",b)},_setProximityToolsAttr:function(){var b=
c.create("div"),a=new e({name:this.i18n.createBuffers,helpTopic:"CreateBuffersTool",toolIcon:"buffersIcon"},c.create("div",null,b));this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a.set("showComingSoonLabel",!1);a=new e({name:this.i18n.createDriveTimeAreas,helpTopic:"CreateDriveTimeAreasTool",toolIcon:"driveIcon"},c.create("div",null,b));f.set(a.optionsDiv,"margin-top","0");a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.findNearest,
helpTopic:"FindNearestTool",toolIcon:"findClosestFacilityIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.planRoutes,helpTopic:"PlanRoutesTool",toolIcon:"planRoutesIcon"},c.create("div",null,b));f.set(a.optionsDiv,"margin-top","0");a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.connectOriginsToDestinations,helpTopic:"ConnectOriginsToDestinationsTool",
toolIcon:"connectODIcon"},c.create("div",null,b));f.set(a.optionsDiv,"margin-top","0");a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));this._proximityTools.set("content",b)},_setAnalyzePatternsAttr:function(){var b,a;b=c.create("div");a=new e({name:this.i18n.calculateDensity,helpTopic:"CalculateDensityTool",toolIcon:"createDensitySurfaceIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));
a=new e({name:this.i18n.createSpaceTimeCube,helpTopic:"CreateSpaceTimeCubeTool",toolIcon:"createSpaceTimeCubeIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);f.set(a.domNode,"display","none");this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.findHotSpots,helpTopic:"FindHotSpotsTool",toolIcon:"findHotSpotsIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.findOutliers,
helpTopic:"FindOutliersTool",toolIcon:"findOutliersIcon"},c.create("div",null,b));this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.findPointClusters,helpTopic:"FindPointClustersTool",toolIcon:"findPointClustersIcon"},c.create("div",null,b));this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.forestBasedClassificationAndRegression,helpTopic:"ForestBasedClassificationAndRegressionTool",toolIcon:"forestBasedClassificationAndRegressionIcon"},
c.create("div",null,b));this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.generalizedLinearRegression,helpTopic:"GeneralizedLinearRegressionTool",toolIcon:"generalizedLinearRegressionIcon"},c.create("div",null,b));this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.geographicallyWeightedRegression,helpTopic:"GeographicallyWeightedRegressionTool",toolIcon:"geographicallyWeightedRegressionIcon"},c.create("div",null,b));this._connect(a,
"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.interpolatePoints,helpTopic:"InterpolatePointsTool",toolIcon:"createInterpolatedSurfaceIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));this._analyzePatTools.set("content",b)},_setInterpolateToolsAttr:function(){var b;b=c.create("div");new e({name:this.i18n.createInterpolatedSurface,helpTopic:"SummarizeWithinTool",toolIcon:"createInterpolatedSurfaceIcon"},c.create("div",
null,b));this._interpolateTools.set("content",b)},_setManageDataToolsAttr:function(){var b,a;b=c.create("div");a=new e({name:this.i18n.appendData,helpTopic:"AppendDataTool",toolIcon:"appendDataIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.calculateField,helpTopic:"CalculateFieldTool",toolIcon:"calculateFieldIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",
d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.clipLayer,helpTopic:"ClipLayerTool",toolIcon:"clipLayerIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.copytoDatastore,helpTopic:"CopyToDataStoreTool",toolIcon:"extractDataIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.dissolveBoundaries,helpTopic:"DissolveBoundariesTool",
toolIcon:"dissolveBoundariesIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.extractData,helpTopic:"ExtractDataTool",toolIcon:"extractDataIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.generateTessellations,helpTopic:"GenerateTessellationsTool",toolIcon:"generateTessellationsIcon"},c.create("div",null,
b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.mergeLayers,helpTopic:"MergeLayersTool",toolIcon:"mergeLayersIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.overlayLayers,helpTopic:"OverlayLayersTool",toolIcon:"overlayLayersIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,
"onToolSelect"));this._managedataTools.set("content",b)},_setSummarizeRasterToolsAttr:function(){var b=c.create("div"),a=new e({name:this.i18n.summarizeRasterWithin,helpTopic:"SummarizeRasterWithinTool",toolIcon:"sumRasterWithinIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));this._summarizeRasterTools.set("content",b)},_setLocationRasterToolsAttr:function(){var b=c.create("div"),a=new e({name:this.i18n.findSuitableLocations,
helpTopic:"FindSuitableLocationsTool",toolIcon:"findLocationsIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.filterLocations,helpTopic:"FilterLocationsTool",toolIcon:"findNewLocationsIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));this._locationRasterTools.set("content",b)},_setAnalyzeImageRasterToolsAttr:function(){var b=c.create("div"),
a=new e({name:this.i18n.monitorVegetation,helpTopic:"MonitorVegetationTool",toolIcon:"monitorVegetationIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));this._analyzeImageRasterTools.set("content",b)},_setProximityRasterToolsAttr:function(){var b=c.create("div"),a=new e({name:this.i18n.calculateDistance,helpTopic:"CalculateDistanceTool",toolIcon:"calculateDistanceIcon"},c.create("div",null,b));this._connect(a,"tool-select",d.hitch(this,
"onToolSelect"));a.set("showComingSoonLabel",!1);a=new e({name:this.i18n.determineOptimumTravelCostNetwork,helpTopic:"DetermineOptimumTravelCostNetworkTool",toolIcon:"travelCostNetworkIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.determineTravelCostPathAsPolyline,helpTopic:"DetermineTravelCostPathAsPolylineTool",toolIcon:"determineTravelCostPathAsPolylineIcon"},c.create("div",null,b));a.set("showComingSoonLabel",
!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));this._proximityRasterTools.set("content",b)},_setAnalyzeTerrainRasterToolsAttr:function(){var b=c.create("div"),a=new e({name:this.i18n.calculateSlope,helpTopic:"CalculateSlopeTool",toolIcon:"calculateSlopeIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.deriveAspect,helpTopic:"DeriveAspectTool",toolIcon:"deriveAspectIcon"},c.create("div",
null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.createViewshed,helpTopic:"CreateViewshedRasterTool",toolIcon:"createViewshedRasterIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.watershed,helpTopic:"WatershedTool",toolIcon:"watershedIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",
d.hitch(this,"onToolSelect"));this._analyzeTerrainRasterTools.set("content",b)},_setAnalyzePatternsRasterAttr:function(){var b,a;b=c.create("div");a=new e({name:this.i18n.calculateDensity,helpTopic:"CalculateDensityRasterTool",toolIcon:"createDensityRasterIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.interpolatePoints,helpTopic:"InterpolatePointsEBKTool",toolIcon:"createInterpolatedRasterIcon"},c.create("div",
null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));this._analyzePatRasterTools.set("content",b)},_setManageDataRasterToolsAttr:function(){var b,a;b=c.create("div");a=new e({name:this.i18n.extractRaster,helpTopic:"ExtractRasterTool",toolIcon:"extractRasterIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.remapValues,helpTopic:"RemapValuesTool",toolIcon:"remapIcon"},
c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.convertFeatureToRaster,helpTopic:"ConvertFeatureToRasterTool",toolIcon:"convertFeatureToRasterIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.convertRasterToFeature,helpTopic:"ConvertRasterToFeatureTool",toolIcon:"convertRasterToFeatureIcon"},c.create("div",null,
b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.sample,helpTopic:"SampleTool",toolIcon:"sampleIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));this._managedataRasterTools.set("content",b)},_setDeepLearningRasterToolsAttr:function(){var b,a;b=c.create("div");a=new e({name:this.i18n.classifyObjectsUsingDeepLearning,helpTopic:"ClassifyObjectsUsingDeepLearningTool",
toolIcon:"classifyObjectsUsingDeepLearningIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.classifyPixelsUsingDeepLearning,helpTopic:"ClassifyPixelsUsingDeepLearningTool",toolIcon:"classifyPixelsUsingDeepLearningIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.detectObjectsUsingDeepLearning,helpTopic:"DetectObjectsUsingDeepLearningTool",
toolIcon:"detectObjectsUsingDeepLearningIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));this._deepLearningRasterTools.set("content",b)},_setMultidimensionAnalysisRasterToolsAttr:function(){var b,a;b=c.create("div");a=new e({name:this.i18n.aggregateMultidimensionalRaster,helpTopic:"AggregateMultidimensionalRasterTool",toolIcon:"aggregateMultidimensionalRasterIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,
"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.findArgumentStatistics,helpTopic:"FindArgumentStatisticsTool",toolIcon:"findArgumentStatisticsIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.generateMultidimensionalAnomaly,helpTopic:"GenerateMultidimensionalAnomalyTool",toolIcon:"generateMultidimensionalAnomalyIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,
"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.generateTrendRaster,helpTopic:"GenerateTrendRasterTool",toolIcon:"generateTrendRasterIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,"onToolSelect"));a=new e({name:this.i18n.predictUsingTrendRaster,helpTopic:"PredictUsingTrendRasterTool",toolIcon:"predictUsingTrendRasterIcon"},c.create("div",null,b));a.set("showComingSoonLabel",!1);this._connect(a,"tool-select",d.hitch(this,
"onToolSelect"));this._multidimensionAnalysisRasterTools.set("content",b)},_getSelectedCategoryAttr:function(){var b;if(b=k.filter(this._titlePanes,function(a,b){return a.open})[0])return b.get("data-esrihelptopic")},_getSelectedPaneAttr:function(){return k.filter(this._titlePanes,function(b,a){return b.open})[0]},_setSelectedCategoryAttr:function(b){var a;k.forEach(this._titlePanes,function(c){a=c.get("data-esrihelptopic");a===b&&c.set("open",!0)},this)},_setAnalysisModeAttr:function(b){b&&-1!==
k.indexOf(l,b)?this._set("analysisMode",b):console.log("Invalid value for analysisMode property")},_handleAnalysisModeChange:function(){if(this.analysisMode!==l[0]||this._featureAccordionCreated)this.analysisMode!==l[1]||this._rasterAccordionCreated||(b=[this._summarizeRasterTools,this._analyzePatRasterTools,this._proximityRasterTools,this._managedataRasterTools,this._analyzeImageRasterTools,this._analyzeTerrainRasterTools,this._deepLearningRasterTools,this._multidimensionAnalysisRasterTools],this._fixHelpIDs(b),
this._titlePanes=this._titlePanes.concat(b),this.set("summarizeRasterTools"),this.set("analyzePatternsRaster"),this.set("proximityRasterTools"),this.set("manageDataRasterTools"),this.set("analyzeImageRasterTools"),this.set("analyzeTerrainRasterTools"),this.set("deepLearningRasterTools"),this.set("multidimensionAnalysisRasterTools"),k.forEach("HistogramRasterWithinTool FilterLocationsTool FindSuitableLocationsTool FindShortestPathTool SegmentImageTool ClassifyImageTool DetectDifferencesTool".split(" "),
function(a){this.disable(a,!0)},this),this._rasterAccordion.startup(),this._rasterAccordionCreated=!0);else{var b=[this._summarizeTools,this._locationTools,this._geoenrichTools,this._analyzePatTools,this._proximityTools,this._managedataTools];this._fixHelpIDs(b);this._titlePanes=this._titlePanes.concat(b);this.set("summarizeTools");this.set("locationTools");this.set("geoenrichTools");this.set("analyzePatterns");this.set("proximityTools");this.set("manageDataTools");this._featureAccordion.startup();
r.initHelpLinks(this.domNode,!0,{analysisMode:this._getAnalysisMode(),isSingleTenant:this.isSingleTenant});this._featureAccordionCreated=!0}f.set(this._featureAccordion.domNode,"display",this.analysisMode===l[0]?"block":"none");f.set(this._rasterAccordion.domNode,"display",this.analysisMode===l[1]?"block":"none");this._updateHelp()},_getAnalysisMode:function(){return"feature"===this.analysisMode&&this.showBigData?h.Modes.Bigdata:"feature"===this.analysisMode?h.Modes.Feature:h.Modes.Raster},_setCustomCategoryAttr:function(b){var a=
c.create("div"),g=new D({open:F.isDefined(b.open)?b.open:!0,toggleable:!0,title:b.title});b.analysisMode===h.Modes.Feature||b.analysisMode===h.Modes.Standard||b.analysisMode===h.Modes.Bigdata?this._featureAccordion.addChild(g):b.analysisMode===h.Modes.Raster&&this._rasterAccordion.addChild(g);k.forEach(b.tasks,function(g){var f=new e({name:g.title,toolIcon:"GPWidgetIcon"},c.create("div",null,a));f.set("showComingSoonLabel",!1);f.task=g;f.toolName=b.toolName;this._connect(f,"tool-select",d.hitch(this,
"onToolSelect",f))},this);g.set("data-esrihelptopic",b.title);g.set("content",a);this._titlePanes.push(g)},_updateHelp:function(){r.initHelpLinks(this.domNode,!0,{analysisMode:this._getAnalysisMode(),isSingleTenant:this.isSingleTenant,helpBase:this.helpBase})},_fixHelpIDs:function(b){k.forEach(b,function(a){v.set(a.titleNode,"innerHTML","\x3cspan class\x3d'esriFloatTrailing helpIcon' esriHelpTopic\x3d'"+(a.get("data-esrihelptopic")?a.get("data-esrihelptopic"):a.get("data-esriHelpTopic"))+"' data-dojo-attach-point\x3d'_helpIconNode'\x3e\x3c/span\x3e"+
a.titleNode.innerHTML)},this)},_getNodes:function(b){var a=q("div[data-esrihelptopic \x3d'"+b+"']");0===a.length&&(a=q("a[esrihelptopic \x3d'"+b+"']"));return a},openApplyRFxTool:function(b,a){var d;d=c.create("div");this.set("analysisMode",l[1]);b=new e({name:this.i18n.applyRFxTemplate,helpTopic:"ApplyRFxTemplate",toolIcon:"",rfxTemplateItem:a?null:b,rasterFunction:a?b:null,analysisMode:this.analysisMode},c.create("div",null,d));b.set("showComingSoonLabel",!1);this.onToolSelect(b)},hide:function(b){b=
this._getNodes(b);0<b.length&&b.forEach(function(a){a&&m.getEnclosingWidget(a)&&f.set(m.getEnclosingWidget(a).domNode,"display","none")})},show:function(b){b=this._getNodes(b);0<b.length&&b.forEach(function(a){a&&m.getEnclosingWidget(a)&&f.set(m.getEnclosingWidget(a).domNode,"display","block")})},showTool:function(b,a){a?this.show(b):this.hide(b)},disable:function(b,a){b=this._getNodes(b);0<b.length&&b.forEach(function(b){b&&m.getEnclosingWidget(b)&&(b=m.getEnclosingWidget(b),b.set("showComingSoonLabel",
a),f.set(b.optionsDiv,"display","none"),b._handle&&(a?b._handle.pause():b._handle.resume()))},this)},onToolSelect:function(b){}});u("extend-esri")&&d.setObject("dijit.analysis.Analysis",n,E);return n});