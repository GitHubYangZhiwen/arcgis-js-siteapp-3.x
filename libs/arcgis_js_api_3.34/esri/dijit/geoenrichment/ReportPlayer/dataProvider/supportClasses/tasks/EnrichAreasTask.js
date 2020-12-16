// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/tasks/EnrichAreasTask","dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/when esri/dijit/geoenrichment/promise/all esri/kernel esri/SpatialReference esri/tasks/FeatureSet esri/geometry/Point ../GEUtil ../areas/AnalysisAreaUtil ../attachments/AttributesUtil ../../../core/supportClasses/map/Projector ../../../countryConfig esri/dijit/geoenrichment/utils/CoordinateUtil".split(" "),function(v,h,k,m,q,n,w,r,x,t,y,z,A,
p){function u(a){return(a=a&&q.id.findCredential(a)||q.id.credentials[0])&&a.token}return v(null,{enrichAreas:function(a){var b={};return k(this._analysisAreasToStudyAreas(a.analysisAreas,a.countryID,a.comparisonLevels),function(d){b.studyAreas=d;a.report?b.analysisVariables=[{itemid:a.report.reportID,url:a.report.portalUrl,token:u(a.portalUrl),outFields:["*"]}]:a.fields&&(b.analysisVariables=a.fields);return this._doRunTask(b,a,"enrich")}.bind(this)).then(this._handleFeatureSetsRequest.bind(this))},
createReport:function(a){var b={f:"bin",format:"xml",reportfields:{}};b.report={itemid:a.report.reportID,url:a.report.portalUrl,token:u(a.portalUrl)};return k(this._analysisAreasToStudyAreas(a.analysisAreas,a.countryID,null,a.getAttributes),function(d){b.studyAreas=d;return this._doRunTask(b,a,"createReport")}.bind(this))},_analysisAreasToStudyAreas:function(a,b,d,f){var e=this;d=d&&d.map(function(a){return{layer:a}});return m(a.map(function(a,l){var c;a.geographies&&a.geographies.length?(c=e._studyAreaFromGeographies(a.geographies,
b,!0),a.feature&&a.feature.attributes&&(c.attributes=h.mixin({},c.attributes,a.feature.attributes))):c={attributes:h.mixin({},a.feature.attributes),geometry:a.feature.geometry.toJson()};d&&(c.comparisonLevels=d);return m([e._getStorePointForArea(a),f&&f(a)]).then(function(a){var b=a[0];a=a[1];c.attributes=c.attributes||{};b&&(c.attributes.STORE_LAT=c.attributes.STORE_LAT||b.STORE_LAT,c.attributes.STORE_LONG=c.attributes.STORE_LONG||b.STORE_LONG);c.attributes.STORE_ID=l+"";a&&a.forEach(function(a){c.attributes[a.name]=
y.formatAttributeValueForStudyArea(a)});return c})}))},_getStorePointForArea:function(a){if(a=a.location&&a.location.geometry||a.buffer&&a.buffer.point){a=a instanceof r?a:new r(a);var b=t.geometryToLatLong(a);return b?b:k(z.projectGeometries(a,new n(p.WGS_84_WKID)),function(a){return t.geometryToLatLong(a)})}},createFeatureForGeographies:function(a,b){return this._createFeaturesForGeographies(a,b,!0).then(function(a){return a[0]})},createFeaturesForGeographies:function(a,b){return this._createFeaturesForGeographies(a,
b,!1)},_createFeaturesForGeographies:function(a,b,d){a={returnGeometry:!0,outSR:b.outSR||new n(p.WEB_MERCATOR_WKID),studyAreas:d?[this._studyAreaFromGeographies(a,b.countryID,!0,b.generalizationLevel)]:a.map(function(a){return this._studyAreaFromGeographies([a],b.countryID,!1,b.generalizationLevel)},this),dataCollections:["GlobalIntersect"]};return this._doRunTask(a,b,"enrich").then(this._handleFeatureSetsRequest.bind(this))},_studyAreaFromGeographies:function(a,b,d,f){var e={sourceCountry:b,layer:null,
ids:null},g=null,l=[],c;a.forEach(function(a){if(!a||!a.id)throw Error("Wrong geography.");var b=a.levelId;if(b)if(!g)g=b;else if(d&&g!==b)throw Error("Geographies have different level IDs.");l.push(a.id);a.sourceCountry&&(e.sourceCountry=a.sourceCountry);a.hierarchy&&(e.hierarchy=a.hierarchy);a.attributes&&(c=h.mixin(c||{},a.attributes))});e.layer=g;e.ids=d?[l.join(",")]:l;e.attributes=c;e.generalizationlevel=f;return e},createFeaturesForBuffer:function(a,b){b=b||{};var d={bufferUnits:a.units,bufferRadii:a.radii||
[a.radius],areaType:a.areaType||"RingBuffer"};"NetworkServiceArea"===d.areaType&&(d.travelMode=a.travelMode,d.networkOptions=a.networkOptions);a=a.point||a.polyline;d={returnGeometry:!0,outSR:b.outSR||a.spatialReference||new n(p.WEB_MERCATOR_WKID),dataCollections:["GlobalIntersect"],studyAreasOptions:d,studyAreas:[{geometry:a.toJson?a.toJson():a}]};return this._doRunTask(d,b,"enrich").then(this._handleFeatureSetsRequest.bind(this))},createFeaturesForBuffers:function(a,b){function d(a){var b=a.point||
a.polyline;return JSON.stringify(b.toJson?b.toJson():b)+";"+a.units+";"+a.areaType+";"+a.travelMode+";"+JSON.stringify(a.networkOptions)}var f={},e=[];a.forEach(function(a){var b=d(a),c=f[b],g=!1;if(c){var k=a.radii||[a.radius];c.radii.some(function(a){return-1!==k.indexOf(a)})&&(c=null,g=!0)}c||(c=h.clone(a),g||(f[b]=c),delete c.radius,c.radii=[],e.push(c));a.radii?c.radii=c.radii.concat(a.radii):c.radii.push(a.radius)});return m(e.map(function(a){return this.createFeaturesForBuffer(a,b)},this)).then(function(a){var b=
[];a.forEach(function(a){b=b.concat(a)});return b})},_doRunTask:function(a,b,d){a=h.mixin({useData:{sourceCountry:b.countryID,hierarchy:b.hierarchy||A.getHierarchyID()},forStorage:!1},a);return x[d](a)},_handleFeatureSetsRequest:function(a){return(new w(a[0])).features}})});