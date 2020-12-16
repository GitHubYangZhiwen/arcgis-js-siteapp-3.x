// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/_SerializationSupport","require dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when ./supportClasses/areas/AnalysisAreaJsonUtil ./supportClasses/areas/AnalysisAreaUtil ./supportClasses/PortalManager ../core/infographics/InfographicTypes ../core/supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil esri/dijit/geoenrichment/ReportPlayer/countryConfig esri/dijit/geoenrichment/utils/UrlUtil esri/dijit/geoenrichment/ReportPlayer/_devConfig".split(" "),
function(u,v,w,x,e,f,y,z,n,A,g,h,B){function k(){var a=new x;u("./supportClasses/attachments/AttachmentsStoreSerializer ./supportClasses/GEUtil ../core/supportClasses/templateJsonUtils/TemplateJsonSerializer ../core/supportClasses/templateJsonUtils/TemplateJsonAnalyzer ../core/infographics/utils/InfographicJsonUtil ../core/conversion/portalToEditorUtils/variables/PlayerVariableProvider ../core/infographics/InfographicTypes ./commands/mapToImage/MapToURLUtil esri/dijit/geoenrichment/utils/ProjectionUtil".split(" "),
function(b,c,d,C,f,e,g,h,k){l=b;p=c;m=d;q=e;n=g;r=h;t=k;a.resolve()});return a.promise}var l,p,m,q,r,t;return v(null,{reportDataToJson:function(a,b){var c=this;b=b||{};var d=!1;A.processTemplateFieldInfos(a.templateJson,function(a){a.isInfographic&&a.infographicJson.type===n.ATTACHMENTS&&(d=!0)});return k().then(function(){return e(null,function(){return e(a.attachmentsStore&&l.getAttachmentsStoreJson(a.attachmentsStore,{numAreas:a.analysisAreas.length,saveImages:d}),function(d){var e=w.mixin({},
a.config);!1!==b.forceFixedDataMode&&delete e.geoenrichmentUrl;d={isMultiFeature:a.isMultiFeature,reportTitle:a.reportTitle,templateJson:m.serialize(a.templateJson),reportObject:c._prepareReportObjectJson(a.reportObject),fieldData:a.fieldData,analysisAreas:f.areasToJson(a.analysisAreas),combinedAreasInfo:a.combinedAreasInfo&&f.combinedAreasInfoToJson(a.combinedAreasInfo),reverseAnalysisAreasOnMap:a.reverseAnalysisAreasOnMap,attachmentsStore:d,templateVariableProvider:a.templateVariableProvider&&a.templateVariableProvider.toJson(),
config:e,countryConfig:g.toJson(),mapImageInfos:b.mapImageInfos,loadedMapPortalItems:b.loadedMapPortalItems,customLogo:a.customLogo};B.logData&&(console.log("_SerializationSupport.js \x3d\x3e reportDataJson"),console.log(d));return d})})})},_prepareReportObjectJson:function(a){var b={},c;for(c in a)a[c]&&"object"!==typeof a[c]&&(b[c]=a[c]);return b},reportDataFromJson:function(a){return k().then(function(){var b=a.fieldData;b.featureData&&(b.areaData=b.featureData.map(function(a){return{mainCalculator:{data:a}}}),
delete b.featureData);var c={isMultiFeature:a.isMultiFeature,reportTitle:a.reportTitle,templateJson:m.deserialize(a.templateJson),reportObject:a.reportObject,fieldData:b,analysisAreas:f.areasFromJson(a.analysisAreas),combinedAreasInfo:a.combinedAreasInfo&&f.combinedAreasInfoFromJson(a.combinedAreasInfo)||{},reverseAnalysisAreasOnMap:a.reverseAnalysisAreasOnMap,attachmentsStore:a.attachmentsStore&&l.getAttachmentsStoreFromJson(a.attachmentsStore),templateVariableProvider:a.templateVariableProvider&&
new q(a.templateVariableProvider),config:a.config||{},mapImageInfos:a.mapImageInfos,loadedMapPortalItems:a.loadedMapPortalItems,customLogo:a.customLogo};y.populateCombinedAreasInfo(c.combinedAreasInfo,c.analysisAreas);p.setGeoenrichmentUrl(null);b=!1;c.config.portalUrl&&h.setArcgisUrl(h.getPortalUrl(c.config.portalUrl));c.config.geometryServiceUrl?t.setGeometryServiceUrl(c.config.geometryServiceUrl):b=!0;c.config.printMapTaskUrl?r.setPrintMapTaskUrl(c.config.printMapTaskUrl):b=!0;g.fromJson(a.countryConfig);
return e(b&&z.tryConfigureServicesFromAGOLPublic()).then(function(){return c})})}})});