// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
var __extends=this&&this.__extends||function(){var A=function(q,r){A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,v){r.__proto__=v}||function(r,v){for(var q in v)v.hasOwnProperty(q)&&(r[q]=v[q])};return A(q,r)};return function(q,r){function B(){this.constructor=q}A(q,r);q.prototype=null===r?Object.create(r):(B.prototype=r.prototype,new B)}}(),__assign=this&&this.__assign||function(){__assign=Object.assign||function(A){for(var q,r=1,B=arguments.length;r<B;r++){q=arguments[r];for(var v in q)Object.prototype.hasOwnProperty.call(q,
v)&&(A[v]=q[v])}return A};return __assign.apply(this,arguments)};
define("esri/arcade/featureset/sources/FeatureLayerDynamicMap","require exports dojox/encoding/digests/_base dojox/encoding/digests/MD5 ../../../graphic ../../../request ../../Attachment ../support/FeatureSet ../support/IdSet ../support/shared ../support/sqlUtils ../support/stats ../../polyfill/promiseUtils ../../../geometry/jsonUtils ../../../layers/FeatureLayer ../../../tasks/query ../../../tasks/QueryTask ../../../tasks/StatisticDefinition".split(" "),function(A,q,r,B,v,E,G,H,C,z,w,I,p,J,K,x,D,
F){return function(q){function d(a){var b=q.call(this,a)||this;b.declaredClass="esri.layers.featureset.sources.FeatureLayerDynamic";b._removeGeometry=!1;b._overrideFields=null;b.formulaCredential=null;b._pageJustIds=!1;b._requestStandardised=!1;a.spatialReference&&(b.spatialReference=a.spatialReference);b._transparent=!0;b._maxProcessing=1E3;b._layer=a.layer;b._wset=null;if(!1===b._layer.loaded)throw Error("Can only create FeatureSets from Loaded FeatureLayers. Use FeatureLayer or FeatureCollection classes");
void 0!==a.outFields&&(b._overrideFields=a.outFields);void 0!==a.includeGeometry&&(b._removeGeometry=!1===a.includeGeometry);return b}__extends(d,q);d.prototype._maxQueryRate=function(){return z.defaultMaxRecords};d.prototype.convertQueryToLruCacheKey=function(a){a=z.stableStringify(a.toJson());return B(a,r.outputTypes.String)};d.prototype.end=function(){return this._layer};d.prototype.load=function(){var a=this;null===this._loadPromise&&(this._loadPromise=p.create(function(b,f){a._initialiseFeatureSet();
b(a)}));return this._loadPromise};d.prototype.optimisePagingFeatureQueries=function(a){this._pageJustIds=a};d.prototype._initialiseFeatureSet=function(){if(!this._layer.getMap())throw Error("Can only use featuresets with layers attached to map");null==this.spatialReference&&(this.spatialReference=this._layer.getMap().spatialReference);this.geometryType=this._layer.geometryType;this.fields=this._layer.fields.slice(0);var a=this._layer.getOutFields();if(1!==a.length||"*"!==a[0]){for(var b=[],f=0,g=
this.fields;f<g.length;f++){var h=g[f];if("esriFieldTypeOID"===h.type)b.push(h);else for(var c=0,l=a;c<l.length;c++){var e=l[c];if(e.toLowerCase()===h.name.toLowerCase()){b.push(h);break}}}this.fields=b}if(null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{b=[];a=[];f=0;for(g=this.fields;f<g.length;f++)if(h=g[f],"esriFieldTypeOID"===h.type)b.push(h),a.push(h.name);else for(c=0,l=this._overrideFields;c<l.length;c++)if(e=l[c],
e.toLowerCase()===h.name.toLowerCase()){b.push(h);a.push(h.name);break}this.fields=b;this._overrideFields=a}this._layer&&(b=this._layer.version,!0===this._layer.useStandardizedQueries?(this._databaseType=z.FeatureServiceDatabaseType.StandardisedNoInterval,void 0!==b&&null!==b&&10.61<=b&&(this._databaseType=z.FeatureServiceDatabaseType.Standardised)):void 0!==b&&null!==b&&(10.5<=b&&(this._databaseType=z.FeatureServiceDatabaseType.StandardisedNoInterval,this._requestStandardised=!0),10.61<=b&&(this._databaseType=
z.FeatureServiceDatabaseType.Standardised)));this.objectIdField=this._layer.objectIdField;this.typeIdField=this._layer.typeIdField;this.types=this._layer.types};d.prototype._isInFeatureSet=function(a){return z.IdState.InFeatureSet};d.prototype._refineSetBlock=function(a,b){return p.resolve(a)};d.prototype._candidateIdTransform=function(a){return a};d.prototype._transformSetWithIdChanges=function(a){};d.prototype._getSet=function(a){var b=this;return null===this._wset?this._ensureLoaded().then(function(){return b._getFilteredSet("",
null,null,null,a)}).then(function(a){return b._wset=a}):p.resolve(this._wset)};d.prototype.nativeCapabilities=function(){return{title:this._layer.name,source:this,canQueryRelated:!0,capabilities:{query:{maxRecordCount:this._layer.maxRecordCount},queryRelated:{supportsOrderBy:this._layer.advancedQueryCapabilities&&this._layer.advancedQueryCapabilities.supportsAdvancedQueryRelated,supportsPagination:this._layer.advancedQueryCapabilities&&this._layer.advancedQueryCapabilities.supportsQueryRelatedPagination}},
databaseType:this._databaseType,requestStandardised:this._requestStandardised}};d.prototype._runDatabaseProbe=function(a){var b=this;return p.create(function(f,g){try{b._ensureLoaded().then(function(){try{var h=new x;h.where=a.replace("OBJECTID",b._layer.objectIdField);b.executeQuery(h,"executeForIds").then(function(a){f(!0)},function(a){try{f(!1)}catch(l){g(l)}})}catch(c){g(c)}})}catch(h){g(h)}})};d.prototype.pbfSupportedForQuery=function(a){return this._layer._canFetchPBFForQuery(a)&&this._layer.supportsQuantizationEditMode};
d.prototype.executeQuery=function(a,b){var f=new D(this._layerUrl()),g="execute"===b&&this.pbfSupportedForQuery(a);g&&(a.quantizationParameters={mode:"edit"});var h=null;if(this.recentlyUsedQueries){var c=this.convertQueryToLruCacheKey(a);(h=this.recentlyUsedQueries.getFromCache(c))&&h.isRejected()&&(h=null,this.recentlyUsedQueries.removeFromCache(c));null===h&&(h=!0!==g?f[b](a):f[b](a,null,null,{format:"pbf"}),this.recentlyUsedQueries.addToCache(c,h))}null===h&&(h=!0!==g?f[b](a):f[b](a,null,null,
{format:"pbf"}));return h};d.prototype._canUsePagination=function(){return void 0!==this._layer.advancedQueryCapabilities&&null!==this._layer.advancedQueryCapabilities&&!0===this._layer.advancedQueryCapabilities.supportsPagination?!0:!1};d.prototype._cacheableFeatureSetSourceKey=function(){return this._layer.url};d.prototype._getFilteredSet=function(a,b,f,g,h){var c=this;return this.databaseType().then(function(l){if(c.isTable()&&b&&null!==a&&""!==a)return new C([],[],!0,null);if(c._canUsePagination())return c._getFilteredSetUsingPaging(a,
b,f,g,h);var e="",d=!1;null!==g&&void 0!==c._layer.advancedQueryCapabilities&&null!==c._layer.advancedQueryCapabilities&&!0===c._layer.advancedQueryCapabilities.supportsOrderBy&&(e=g.constructClause(),d=!0);var k=new x;c._requestStandardised&&(k.sqlFormat="standard");k.where=null===f?null===b?"1\x3d1":"":w.toWhereClause(f,l);k.spatialRelationship=c._makeRelationshipEnum(a);k.outSpatialReference=c.spatialReference;k.orderByFields=""!==e?e.split(","):null;k.geometry=null===b?"":b;k.relationParam=c._makeRelationshipParam(a);
return c.executeQuery(k,"executeForIds").then(function(a){null===a&&(a=[]);c._checkCancelled(h);return new C([],a,d,null)})})};d.prototype._expandPagedSet=function(a,b,f,g,h){return this._expandPagedSetFeatureSet(a,b,f,g,h)};d.prototype._getFilteredSetUsingPaging=function(a,b,f,g,h){var c=this;try{var l="",e=!1;null!==g&&void 0!==this._layer.advancedQueryCapabilities&&null!==this._layer.advancedQueryCapabilities&&!0===this._layer.advancedQueryCapabilities.supportsOrderBy&&(l=g.constructClause(),e=
!0);return this.databaseType().then(function(g){g=null===f?null===b?"1\x3d1":"":w.toWhereClause(f,g);c._layer.getDefinitionExpression()&&(g=""!==g?"(("+c._layer.getDefinitionExpression()+") AND ("+g+"))":c._layer.getDefinitionExpression());var k=c._maxQueryRate();void 0!==c._layer.maxRecordCount&&c._layer.maxRecordCount<k&&(k=c._layer.maxRecordCount);var d=null;if(!0===c._pageJustIds)d=new C([],["GETPAGES"],e,{spatialRel:c._makeRelationshipEnum(a),relationParam:c._makeRelationshipParam(a),outFields:c._layer.objectIdField,
resultRecordCount:k,resultOffset:0,geometry:null===b?"":b,where:g,orderByFields:l,returnGeometry:"false",returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,fullyResolved:!1}});else{var t=!0;!0===c._removeGeometry&&(t=!1);var u=null!==c._overrideFields?c._overrideFields:c._fieldsIncludingObjectId(c._layer.getOutFields()),d=new C([],["GETPAGES"],e,{spatialRel:c._makeRelationshipEnum(a),relationParam:c._makeRelationshipParam(a),outFields:u.join(","),resultRecordCount:k,resultOffset:0,geometry:null===
b?"":b,where:g,orderByFields:l,returnGeometry:t,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,fullyResolved:!1}})}return c._expandPagedSet(d,k,0,1,h).then(function(a){return d})})}catch(t){return p.reject(t)}};d.prototype._clonePageDefinition=function(a){return null===a?null:!0!==a.groupbypage?{groupbypage:!1,spatialRel:a.spatialRel,relationParam:a.relationParam,outFields:a.outFields,resultRecordCount:a.resultRecordCount,resultOffset:a.resultOffset,geometry:a.geometry,where:a.where,orderByFields:a.orderByFields,
returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,internal:a.internal}:{groupbypage:!0,spatialRel:a.spatialRel,relationParam:a.relationParam,outFields:a.outFields,resultRecordCount:a.resultRecordCount,useOIDpagination:a.useOIDpagination,generatedOid:a.generatedOid,groupByFieldsForStatistics:a.groupByFieldsForStatistics,resultOffset:a.resultOffset,outStatistics:a.outStatistics,geometry:a.geometry,where:a.where,orderByFields:a.orderByFields,returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,
internal:a.internal}};d.prototype._getPhysicalPage=function(a,b,f){var g=this;try{var h=a.pagesDefinition.internal.lastRetrieved,c=new x;this._requestStandardised&&(c.sqlFormat="standard");c.spatialRelationship=a.pagesDefinition.spatialRel;c.relationParam=a.pagesDefinition.relationParam;c.outFields=a.pagesDefinition.outFields.split(",");c.num=a.pagesDefinition.resultRecordCount;c.start=a.pagesDefinition.internal.lastRetrieved;c.geometry=a.pagesDefinition.geometry;c.where=a.pagesDefinition.where;c.orderByFields=
""!==a.pagesDefinition.orderByFields?a.pagesDefinition.orderByFields.split(","):null;c.returnGeometry=a.pagesDefinition.returnGeometry;c.outSpatialReference=this.spatialReference;return this.executeQuery(c,"execute").then(function(c){g._checkCancelled(f);if(a.pagesDefinition.internal.lastRetrieved!==h)return"done";for(var b=0;b<c.features.length;b++)void 0===c.features[b].geometry&&(c.features[b].geometry=null),a.pagesDefinition.internal.set[h+b]=c.features[b].attributes[g._layer.objectIdField];if(!1===
g._pageJustIds)for(b=0;b<c.features.length;b++)g._featureCache[c.features[b].attributes[g._layer.objectIdField]]=c.features[b];c.features.length!==a.pagesDefinition.resultRecordCount&&(a.pagesDefinition.internal.fullyResolved=!0);a.pagesDefinition.internal.lastRetrieved=h+a.pagesDefinition.resultRecordCount;return"done"})}catch(l){return p.reject(l)}};d.prototype._fieldsIncludingObjectId=function(a){if(null===a)return[this.objectIdField];a=a.slice(0);if(-1<a.indexOf("*"))return a;for(var b=!1,f=0;f<
a.length;f++)if(a[f].toUpperCase()===this.objectIdField.toUpperCase()){b=!0;break}!1===b&&a.push(this.objectIdField);return a};d.prototype._getFeatures=function(a,b,f,g){var h=this,c=[];try{-1!==b&&void 0===this._featureCache[b]&&c.push(b);if(!0===this._checkIfNeedToExpandKnownPage(a,this._maxProcessingRate()))return this._expandPagedSet(a,this._maxProcessingRate(),0,0,g).then(function(c){return h._getFeatures(a,b,f,g)});for(var l=0,e=a._lastFetchedIndex;e<a._known.length;e++){a._lastFetchedIndex+=
1;l++;if(void 0===this._featureCache[a._known[e]]){var d=!1;if(null!==this._layer._mode&&void 0!==this._layer._mode){var k=this._layer._mode;if(void 0!==k._featureMap[a._known[e]]){var y=k._featureMap[a._known[e]];null!==y&&(d=!0,this._featureCache[a._known[e]]=y)}}if(!1===d&&(a._known[e]!==b&&c.push(a._known[e]),c.length>=this._maxProcessingRate()-1))break}if(l>=f&&0===c.length)break}if(0===c.length)return p.resolve("success");try{var m=new x;this._requestStandardised&&(m.sqlFormat="standard");m.objectIds=
c;m.outFields=null!==this._overrideFields?this._overrideFields:this._fieldsIncludingObjectId(this._layer.getOutFields());m.returnGeometry=!0;!0===this._removeGeometry&&(m.returnGeometry=!1);m.outSpatialReference=this.spatialReference;return this.executeQuery(m,"execute").then(function(a){h._checkCancelled(g);if(void 0!==a.error)return p.reject(Error(a.error));for(var c=0;c<a.features.length;c++)void 0===a.features[c].geometry&&(a.features[c].geometry=null),h._featureCache[a.features[c].attributes[h._layer.objectIdField]]=
a.features[c];return"success"})}catch(u){return p.reject(u)}}catch(u){return p.reject(u)}};d.prototype._layerUrl=function(){return this._layer.url};d.prototype._getDistinctPages=function(a,b,f,g,h,c,l,e,d){var k=this;return this._ensureLoaded().then(function(){for(var t=f.parseTree.column,m=0;m<k._layer.fields.length;m++)if(k._layer.fields[m].name.toLowerCase()===t.toLowerCase()){t=k._layer.fields[m].name;break}return k.databaseType().then(function(u){var m=new x;k._requestStandardised&&(m.sqlFormat=
"standard");u=null===c?null===h?"1\x3d1":"":w.toWhereClause(c,u);k._layer.getDefinitionExpression()&&(u=""!==u?"(("+k._layer.getDefinitionExpression()+") AND ("+u+"))":k._layer.getDefinitionExpression());m.where=u;m.spatialRelationship=k._makeRelationshipEnum(g);m.relationParam=k._makeRelationshipParam(g);m.geometry=null===h?null:h;m.returnDistinctValues=!0;m.returnGeometry=!1;m.outFields=[t];return k.executeQuery(m,"execute").then(function(m){k._checkCancelled(d);if(!m.hasOwnProperty("features"))return p.reject(Error("Unnexected Result querying statistics from layer"));
for(var u=!1,n=0;n<k._layer.fields.length;n++)if(k._layer.fields[n].name===t){"esriFieldTypeDate"===k._layer.fields[n].type&&(u=!0);break}for(n=0;n<m.features.length;n++){if(u){var y=m.features[n].attributes[t];null!==y?e.push(new Date(y)):e.push(y)}else e.push(m.features[n].attributes[t]);if(e.length>=l)break}return 0===m.features.length?e:m.features.length===k._layer.maxRecordCount&&e.length<l?k._getDistinctPages(a+m.features.length,b,f,g,h,c,l,e,d).then(function(a){return{calculated:!0,result:a}}):
e})})})};d.prototype._distinctStat=function(a,b,f,g,h,c,l){return this._getDistinctPages(0,a,b,f,g,h,c,[],l).then(function(a){return{calculated:!0,result:a}})};d.prototype.isTable=function(){return!1};d.prototype._countstat=function(a,b,f,g,h){var c=this;return this.databaseType().then(function(a){var e=new x;c._requestStandardised&&(e.sqlFormat="standard");if(c.isTable()&&f&&null!==b&&""!==b)return{calculated:!0,result:0};a=null===g?null===f?"1\x3d1":"":w.toWhereClause(g,a);c._layer.getDefinitionExpression()&&
(a=""!==a?"(("+c._layer.getDefinitionExpression()+") AND ("+a+"))":c._layer.getDefinitionExpression());e.where=a;e.where=a;e.spatialRelationship=c._makeRelationshipEnum(b);e.relationParam=c._makeRelationshipParam(b);e.geometry=null===f?null:f;e.returnGeometry=!1;new D(c._layerUrl());return c.executeQuery(e,"executeForCount").then(function(a){return{calculated:!0,result:a}})})};d.prototype._stats=function(a,b,f,g,h,c,l){var e=this;return this._ensureLoaded().then(function(){var d=e._layer.advancedQueryCapabilities&&
!0===e._layer.advancedQueryCapabilities.supportsSqlExpression,k=e._layer.advancedQueryCapabilities&&!0===e._layer.advancedQueryCapabilities.supportsStatistics,y=e._layer.advancedQueryCapabilities&&!0===e._layer.advancedQueryCapabilities.supportsDistinct;return"count"===a?y?e._countstat(a,f,g,h,l):{calculated:!1}:!1===k||!1===w.isSingleField(b)&&!1===d||!1===b.isStandardized?""!==f||null!==h?{calculated:!1}:e._manualStat(a,b,c,l):"distinct"===a?!1===y?""!==f||null!==h?{calculated:!1}:e._manualStat(a,
b,c,l):e._distinctStat(a,b,f,g,h,c,l):e.databaseType().then(function(c){if(e.isTable()&&g&&null!==f&&""!==f)return{calculated:!0,result:null};var k=new x;e._requestStandardised&&(k.sqlFormat="standard");var l=null===h?null===g?"1\x3d1":"":w.toWhereClause(h,c);e._layer.getDefinitionExpression()&&(l=""!==l?"(("+e._layer.getDefinitionExpression()+") AND ("+l+"))":e._layer.getDefinitionExpression());k.where=l;k.spatialRelationship=e._makeRelationshipEnum(f);k.relationParam=e._makeRelationshipParam(f);
k.geometry=null===g?null:g;l=new F;l.statisticType=I.decodeStatType(a);l.onStatisticField=w.toWhereClause(b,c);var d=l.outStatisticFieldName="ARCADE_STAT_RESULT";k.returnGeometry=!1;k.outStatistics=[l];return e.executeQuery(k,"execute").then(function(a){if(!a.hasOwnProperty("features")||0===a.features.length)return p.reject(Error("Unnexected Result querying statistics from layer"));for(var c=!1,b=0;b<a.fields.length;b++)if("ARCADE_STAT_RESULT"===a.fields[b].name.toUpperCase()){d=a.fields[b].name;
"esriFieldTypeDate"===a.fields[b].type&&(c=!0);break}return c?(c=a.features[0].attributes[d],null!==c&&(c=new Date(a.features[0].attributes[d])),{calculated:!0,result:c}):{calculated:!0,result:a.features[0].attributes[d]}})})})};d.prototype._stat=function(a,b,f,g,h,c,l){return this._stats(a,b,f,g,h,c,l)};d.prototype._canDoAggregates=function(a,b,f,g,h){var c=this;return this._ensureLoaded().then(function(a){a=!1;var e=c._layer.advancedQueryCapabilities&&!0===c._layer.advancedQueryCapabilities.supportsSqlExpression;
void 0!==c._layer.advancedQueryCapabilities&&null!==c._layer.advancedQueryCapabilities&&!0===c._layer.advancedQueryCapabilities.supportsStatistics&&!0===c._layer.advancedQueryCapabilities.supportsOrderBy&&(a=!0);if(a)for(var f=0;f<b.length-1;f++)null!==b[f].workingexpr&&(!1===b[f].workingexpr.isStandardized?a=!1:!1===w.isSingleField(b[f].workingexpr)&&!1===e&&(a=!1));return!1===a?!1:!0})};d.prototype._makeRelationshipEnum=function(a){return 0<=a.indexOf("esriSpatialRelRelation")?"esriSpatialRelRelation":
a};d.prototype._makeRelationshipParam=function(a){return 0<=a.indexOf("esriSpatialRelRelation")?a.split(":")[1]:""};d.prototype._getAggregatePagesDataSourceDefinition=function(a,b,f,g,h,c,l){var e=this;return this._ensureLoaded().then(function(d){return e.databaseType().then(function(k){var d="",m=!1,t=!1;null!==c&&void 0!==e._layer.advancedQueryCapabilities&&null!==e._layer.advancedQueryCapabilities&&!0===e._layer.advancedQueryCapabilities.supportsOrderBy&&(d=c.constructClause(),t=!0);void 0!==e._layer.advancedQueryCapabilities&&
null!==e._layer.advancedQueryCapabilities&&!1===e._layer.advancedQueryCapabilities.supportsPagination&&(t=!1,m=!0,d=e._layer.objectIdField);for(var q=[],n=0;n<b.length;n++){var p=new F;p.onStatisticField=null!==b[n].workingexpr?w.toWhereClause(b[n].workingexpr,k):"";p.outStatisticFieldName=b[n].field;p.statisticType=b[n].toStatisticsName();q.push(p)}""===d&&(d=a.join(","));n=e._maxQueryRate();void 0!==e._layer.maxRecordCount&&e._layer.maxRecordCount<n&&(n=e._layer.maxRecordCount);k=null===h?null===
g?"1\x3d1":"":w.toWhereClause(h,k);e._layer.getDefinitionExpression()&&(k=""!==k?"(("+e._layer.getDefinitionExpression()+") AND ("+k+"))":e._layer.getDefinitionExpression());return new C([],["GETPAGES"],t,{groupbypage:!0,spatialRel:e._makeRelationshipEnum(f),relationParam:e._makeRelationshipParam(f),outFields:["*"],useOIDpagination:m,generatedOid:l,resultRecordCount:n,resultOffset:0,groupByFieldsForStatistics:a,outStatistics:q,geometry:null===g?null:g,where:k,orderByFields:d,returnGeometry:!1,returnIdsOnly:!1,
internal:{lastMaxId:-1,set:[],lastRetrieved:0,fullyResolved:!1}})})})};d.prototype._getAgregagtePhysicalPage=function(a,b,f){var g=this;try{var h=a.pagesDefinition.where;!0===a.pagesDefinition.useOIDpagination&&(h=""!==h?"("+h+") AND ("+a.pagesDefinition.generatedOid+"\x3e"+a.pagesDefinition.internal.lastMaxId.toString()+")":a.pagesDefinition.generatedOid+"\x3e"+a.pagesDefinition.internal.lastMaxId.toString());var c=a.pagesDefinition.internal.lastRetrieved,d=new x;this._requestStandardised&&(d.sqlFormat=
"standard");d.where=h;d.spatialRelationship=a.pagesDefinition.spatialRel;d.relationParam=a.pagesDefinition.relationParam;d.outFields=a.pagesDefinition.outFields;d.outStatistics=a.pagesDefinition.outStatistics;d.geometry=a.pagesDefinition.geometry;d.groupByFieldsForStatistics=a.pagesDefinition.groupByFieldsForStatistics;d.num=a.pagesDefinition.resultRecordCount;d.start=a.pagesDefinition.internal.lastRetrieved;d.returnGeometry=a.pagesDefinition.returnGeometry;d.orderByFields=""!==a.pagesDefinition.orderByFields?
a.pagesDefinition.orderByFields.split(","):null;return this.isTable()&&d.geometry&&d.spatialRelationship?p.resolve([]):this.executeQuery(d,"execute").then(function(b){g._checkCancelled(f);if(!b.hasOwnProperty("features"))return p.reject(Error("Unnexected Result querying aggregates from layer"));var d=[];if(a.pagesDefinition.internal.lastRetrieved!==c)return[];for(var e=0;e<b.features.length;e++)void 0===b.features[e].geometry&&(b.features[e].geometry=null),a.pagesDefinition.internal.set[c+e]=b.features[e].attributes[a.pagesDefinition.generatedOid];
for(e=0;e<b.features.length;e++)d.push(new v({attributes:b.features[e].attributes,geometry:null}));!0===a.pagesDefinition.useOIDpagination?0===b.features.length?a.pagesDefinition.internal.fullyResolved=!0:a.pagesDefinition.internal.lastMaxId=b.features[b.features.length-1].attributes[a.pagesDefinition.generatedOid]:b.features.length!==a.pagesDefinition.resultRecordCount&&(a.pagesDefinition.internal.fullyResolved=!0);a.pagesDefinition.internal.lastRetrieved=c+a.pagesDefinition.resultRecordCount;return d})}catch(e){return p.reject(e)}};
d.create=function(a,b,f){a=new K({url:a,outFields:null===b?["*"]:b});return new d({layer:a,spatialReference:f})};d.prototype._queryAttachments=function(a){var b=this,f=__assign({},a,{f:"json"});0<f.objectIds.length&&(f.objectIds=f.objectIds.join(","));f.size&&(f.size=f.size.join(","));f.attachmentTypes&&(f.attachmentTypes=f.attachmentTypes.join(","));return p.create(function(a,d){E({url:b._layer._url.path+"/queryAttachments",content:f,callbackParamName:"callback",load:function(c){var b={};if(c&&c.attachmentGroups){var e=
0;for(c=c.attachmentGroups;e<c.length;e++){var d=c[e];void 0===b[d.parentObjectId]&&(b[d.parentObjectId]=[]);for(var f=0,g=d.attachmentInfos;f<g.length;f++){var h=g[f];b[d.parentObjectId].push({id:h.id,globalId:h.globalId,name:h.name,contentType:h.contentType,size:h.size})}}}a(b)},error:function(a){d(a)}})})};d.prototype.queryAttachments=function(a,b,d,g){var f=this;if(this._layer.hasAttachments){var c={objectIds:[a]};if(b&&0<b||d&&0<d)c.size=[b&&0<b?b:0,d&&0<d?d:b+1];g&&0<g.length&&(c.attachmentTypes=
g);return this._queryAttachments(c).then(function(b){var c=[];if(b&&b[a]){var d=f._layer._url.path;b[a].forEach(function(b){c.push(new G(b.id,b.name,b.contentType,b.size,d+"/"+a.toString()+"/attachments/"+b.id.toString()))})}return c})}return p.resolve([])};d.prototype.serviceUrl=function(){return z.extractServiceUrl(this._layer._url.path)};d.prototype.relationshipMetaData=function(){return this._layer.relationships};d.prototype.queryRelatedFeatures=function(a){var b=this,d={f:"json",relationshipId:a.relationshipId.toString(),
definitionExpression:a.definitionExpression,outFields:a.outFields.join(","),returnGeometry:a.returnGeometry.toString()};void 0!==a.resultOffset&&null!==a.resultOffset&&(d.resultOffset=a.resultOffset.toString());void 0!==a.resultRecordCount&&null!==a.resultRecordCount&&(d.resultRecordCount=a.resultRecordCount.toString());a.orderByFields&&(d.orderByFields=a.orderByFields.join(","));0<a.objectIds.length&&(d.objectIds=a.objectIds.join(","));a.outSpatialReference&&(d.outSR=JSON.stringify(a.outSpatialReference.toJson()));
return p.create(function(a,f){E({url:b._layer._url.path+"/queryRelatedRecords",content:d,callbackParamName:"callback",load:function(b){var c={};if(b&&b.relatedRecordGroups)for(var d=b.spatialReference,f=0,g=b.relatedRecordGroups;f<g.length;f++){for(var h=g[f],m=h.objectId,p=[],q=0,h=h.relatedRecords;q<h.length;q++){var n=h[q];n.geometry&&(n.geometry.spatialReference=d);n=new v({geometry:n.geometry?J.fromJson(n.geometry):null,attributes:n.attributes});p.push(n)}c[m]={features:p,exceededTransferLimit:!0===
b.exceededTransferLimit}}a(c)},error:function(a){f(a)}})})};d.prototype.getFeatureByObjectId=function(a,b){var d=new D(this._layerUrl()),g=new x;g.outFields=b;g.returnGeometry=!1;g.outSpatialReference=this.spatialReference;g.where=this.objectIdField+"\x3d"+a.toString();return d.execute(g).then(function(a){return 1===a.features.length?a.features[0]:null})};return d}(H)});