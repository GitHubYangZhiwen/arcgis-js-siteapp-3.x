// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
var __extends=this&&this.__extends||function(){var u=function(h,l){u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,m){l.__proto__=m}||function(l,m){for(var h in m)m.hasOwnProperty(h)&&(l[h]=m[h])};return u(h,l)};return function(h,l){function v(){this.constructor=h}u(h,l);h.prototype=null===l?Object.create(l):(v.prototype=l.prototype,new v)}}();
define("esri/arcade/featureset/actions/GroupBy","require exports ../../../graphic ../../languageUtils ./Adapted ./AttributeFilter ./OrderBy ../support/FeatureSet ../support/IdSet ../support/OrderbyClause ../support/shared ../support/sqlUtils ../support/sqlUtils ../support/stats ../support/StatsField dojox/encoding/digests/_base dojox/encoding/digests/MD5 ../../polyfill/promiseUtils ../../polyfill/sql/WhereClause ../../../SpatialReference ../../../layers/Field ../../polyfill/sql/FieldsIndex".split(" "),function(u,
h,l,v,m,D,E,A,w,F,q,x,n,r,B,G,H,k,t,I,y,J){function K(l){if(!l)return"COUNT";switch(l.toLowerCase()){case "max":return"MAX";case "var":case "variance":return"VAR";case "avg":case "average":case "mean":return"AVG";case "min":return"MIN";case "sum":return"SUM";case "stdev":case "stddev":return"STDDEV"}return"COUNT"}var C=function(h){function g(c){var a=h.call(this,c)||this;a._decodedStatsfield=[];a._decodedGroupbyfield=[];a._candosimplegroupby=!0;a.phsyicalgroupbyfields=[];a.objectIdField="ROW__ID";
a._internalObjectIdField="ROW__ID";a._adaptedFields=[];a.declaredClass="esri.arcade.featureset.actions.Aggregate";a._uniqueIds=1;a._maxQuery=10;a._maxProcessing=10;a._parent=c.parentfeatureset;a._config=c;return a}__extends(g,h);g.prototype.isTable=function(){return!0};g.prototype._getSet=function(c){var a=this;return null===this._wset?this._getFilteredSet("",null,null,null,c).then(function(c){a._wset=c;return a._wset}):k.resolve(this._wset)};g.prototype._isInFeatureSet=function(){return q.IdState.InFeatureSet};
g.prototype.nextUniqueName=function(c){for(;1===c["T"+this._uniqueIds.toString()];)this._uniqueIds++;var a="T"+this._uniqueIds.toString();c[a]=1;return a};g.prototype.convertToEsriFieldType=function(c){return c};g.prototype._initialiseFeatureSet=function(){var c={},a=!1,e=1,b=this._parent?this._parent.getFieldsIndex():new J([]);for(this.objectIdField="ROW__ID";!1===a;){for(var f=!1,d=0;d<this._config.groupbyfields.length;d++)if(this._config.groupbyfields[d].name.toLowerCase()===this.objectIdField.toLowerCase()){f=
!0;break}if(!1===f)for(d=0;d<this._config.statsfields.length;d++)if(this._config.statsfields[d].name.toLowerCase()===this.objectIdField.toLowerCase()){f=!0;break}!1===f?a=!0:(this.objectIdField="ROW__ID"+e.toString(),e++)}a=0;for(e=this._config.statsfields;a<e.length;a++)d=e[a],f=new B,f.field=d.name,f.tofieldname=d.name,f.workingexpr=d.expression instanceof t.WhereClause?d.expression:t.WhereClause.create(d.expression,b),f.typeofstat=K(d.statistic),this._decodedStatsfield.push(f);this._decodedGroupbyfield=
[];a=0;for(e=this._config.groupbyfields;a<e.length;a++)d=e[a],d={name:d.name,singlefield:null,tofieldname:d.name,expression:d.expression instanceof t.WhereClause?d.expression:t.WhereClause.create(d.expression,b)},this._decodedGroupbyfield.push(d);if(null!==this._parent){this.geometryType=this._parent.geometryType;this.spatialReference=this._parent.spatialReference;this.hasM=this._parent.hasM;this.hasZ=this._parent.hasZ;this.typeIdField="";b=0;for(a=this._parent.fields;b<a.length;b++)d=a[b],c[d.name.toUpperCase()]=
1;this.types=null}else this.geometryType=q.layerGeometryEsriConstants.point,this.typeIdField="",this.types=null,this.spatialReference=new I({wkid:4326});this.fields=[];b=new B;b.field=this.nextUniqueName(c);b.tofieldname=this.objectIdField;b.workingexpr=t.WhereClause.create(this._parent.objectIdField,this._parent.getFieldsIndex());b.typeofstat="MIN";this._decodedStatsfield.push(b);d=0;for(e=this._decodedGroupbyfield;d<e.length;d++){a=e[d];b=new y;a.name=this.nextUniqueName(c);b.name=a.tofieldname;
b.alias=b.name;if(x.isSingleField(a.expression)){f=this._parent.getField(n.toWhereClause(a.expression,q.FeatureServiceDatabaseType.Standardised));if(!f)throw Error("Field is not present for Aggregation");a.name=f.name;a.singlefield=f.name;this.phsyicalgroupbyfields.push(f.name);b.type=f.type}else b.type=this.convertToEsriFieldType(n.predictType(a.expression,this._parent.fields)),f=new y,f.name=a.name,f.alias=f.name,this.phsyicalgroupbyfields.push(a.name),this._adaptedFields.push(new m.SqlExpressionAdapted(f,
a.expression)),this._candosimplegroupby=!1;this.fields.push(b)}if(0<this._adaptedFields.length)for(b=0,a=this._parent.fields;b<a.length;b++)d=a[b],this._adaptedFields.push(new m.OriginalField(d));for(d=0;d<this._decodedStatsfield.length;d++){b=new y;f=null;a=this._decodedStatsfield[d];a.field=this.nextUniqueName(c);a.tofieldname===this.objectIdField&&(this._internalObjectIdField=a.field);b.name=a.tofieldname;b.alias=b.name;a=null!==a.workingexpr?x.isSingleField(a.workingexpr)?n.toWhereClause(a.workingexpr,
q.FeatureServiceDatabaseType.Standardised):"":"";switch(this._decodedStatsfield[d].typeofstat){case "SUM":if(""!==a){f=this._parent.getField(a);if(!f)throw Error("Field is not present for Aggregation");b.type=f.type}else b.type="double";break;case "MIN":case "MAX":if(""!==a){f=this._parent.getField(a);if(!f)throw Error("Field is not present for Aggregation");b.type=f.type}else b.type="double";break;case "COUNT":b.type="integer";break;case "STDDEV":case "VAR":case "AVG":if(""!==a&&(f=this._parent.getField(a),
!f))throw Error("Field is not present for Aggregation");b.type="double"}this.fields.push(b)}};g.prototype._canDoAggregates=function(){return k.resolve(!1)};g.prototype._getFeatures=function(c,a,e,b){var f=this,d=[];-1!==a&&void 0===this._featureCache[a]&&d.push(a);d=this._maxQuery;return!0===this._checkIfNeedToExpandKnownPage(c,d)?this._expandPagedSet(c,d,0,0,b).then(function(){return f._getFeatures(c,a,e,b)}):k.resolve("success")};g.prototype._getFilteredSet=function(c,a,e,b,f){var d=this;if(""!==
c)return k.resolve(new w([],[],!0,null));var g=null,p=!1,z=!1;return this._ensureLoaded().then(function(){if(null!==e)for(var a=0;a<d._decodedStatsfield.length;a++)if(!0===x.scanForField(e,d._decodedStatsfield[a].tofieldname)){z=!0;e=null;break}if(null!==b){p=!0;for(a=0;a<d._decodedStatsfield.length;a++)if(!0===b.scanForField(d._decodedStatsfield[a].tofieldname)){b=null;p=!1;break}if(null!==b)for(var a=0,c=d._decodedGroupbyfield;a<c.length;a++){var f=c[a];if(null===f.singlefield&&!0===b.scanForField(f.tofieldname)){b=
null;p=!1;break}}}return!1===d._candosimplegroupby?k.resolve(!1):d._parent._canDoAggregates(d.phsyicalgroupbyfields,d._decodedStatsfield,"",null,null)}).then(function(a){if(a){a=null;e&&(a=d._reformulateWhereClauseWithoutGroupByFields(e));var c=null;b&&(c=d._reformulateOrderClauseWithoutGroupByFields(b));return d._parent._getAggregatePagesDataSourceDefinition(d.phsyicalgroupbyfields,d._decodedStatsfield,"",null,a,c,d._internalObjectIdField).then(function(a){d._checkCancelled(f);return g=!0===z?new w(a._candidates.slice(0).concat(a._known.slice(0)),
[],!0===p?a._ordered:!1,d._clonePageDefinition(a.pagesDefinition)):new w(a._candidates.slice(0),a._known.slice(0),!0===p?a._ordered:!1,d._clonePageDefinition(a.pagesDefinition))})}a=d._parent;0<d._adaptedFields.length&&(a=new m.AdaptedFeatureSet({parentfeatureset:d._parent,adaptedFields:d._adaptedFields,extraFilter:null}));!0!==z&&null!==e&&(c=null,e&&(c=d._reformulateWhereClauseWithoutGroupByFields(e)),a=new D({parentfeatureset:a,whereclause:c}));return g=new w(["GETPAGES"],[],!1,{aggregatefeaturesetpagedefinition:!0,
resultOffset:0,resultRecordCount:d._maxQuery,internal:{fullyResolved:!1,workingItem:null,type:"manual",iterator:null,set:[],subfeatureset:new E({parentfeatureset:a,orderbyclause:new F(d.phsyicalgroupbyfields.join(",")+","+d._parent.objectIdField+" ASC")})}})})};g.prototype._reformulateWhereClauseWithoutStatsFields=function(c){for(var a=0,e=this._decodedStatsfield;a<e.length;a++){var b=e[a];c=n.reformulateWithoutField(c,b.tofieldname,n.toWhereClause(b.workingexpr,q.FeatureServiceDatabaseType.Standardised),
this._parent.getFieldsIndex())}return c};g.prototype._reformulateWhereClauseWithoutGroupByFields=function(c){for(var a=0,e=this._decodedGroupbyfield;a<e.length;a++){var b=e[a];b.tofieldname!==b.name&&(c=n.reformulateWithoutField(c,b.tofieldname,n.toWhereClause(b.expression,q.FeatureServiceDatabaseType.Standardised),this._parent.getFieldsIndex()))}return c};g.prototype._reformulateOrderClauseWithoutGroupByFields=function(c){for(var a=[],e=0,b=this._decodedGroupbyfield;e<b.length;e++){var f=b[e];f.tofieldname!==
f.name&&a.push({field:f.tofieldname,newfield:f.name})}return 0<a.length?c.replaceFields(a):c};g.prototype._clonePageDefinition=function(c){return null===c?null:!0===c.aggregatefeaturesetpagedefinition?{aggregatefeaturesetpagedefinition:!0,resultRecordCount:c.resultRecordCount,resultOffset:c.resultOffset,internal:c.internal}:this._parent._clonePageDefinition(c)};g.prototype._refineSetBlock=function(c,a,e){var b=this;try{if(!0===this._checkIfNeedToExpandCandidatePage(c,this._maxQuery))return this._expandPagedSet(c,
this._maxQuery,0,0,e).then(function(){return b._refineSetBlock(c,a,e)});this._checkCancelled(e);this._refineKnowns(c,a);return k.resolve(c)}catch(f){return k.reject(f)}};g.prototype._expandPagedSet=function(c,a,e,b,f){return this._expandPagedSetFeatureSet(c,a,e,b,f)};g.prototype._getPhysicalPage=function(c,a,e){var b=this;return!0===c.pagesDefinition.aggregatefeaturesetpagedefinition?k.create(function(a,d){b._sequentialGetPhysicalItem(c,c.pagesDefinition.resultRecordCount,e,[]).then(function(b){a(b)},
d)}):this._getAgregagtePhysicalPage(c,a,e).then(function(a){for(var c=0;c<a.length;c++){for(var f=a[c],e={geometry:f.geometry,attributes:{}},g=0,h=b._decodedGroupbyfield;g<h.length;g++){var k=h[g];e.attributes[k.tofieldname]=f.attributes[k.name]}g=0;for(h=b._decodedStatsfield;g<h.length;g++)k=h[g],e.attributes[k.tofieldname]=f.attributes[k.field];b._featureCache[e.attributes[b.objectIdField]]=new l(e)}return a.length})};g.prototype._sequentialGetPhysicalItem=function(c,a,e,b){var f=this;return k.create(function(d,
g){null===c.pagesDefinition.internal.iterator&&(c.pagesDefinition.internal.iterator=c.pagesDefinition.internal.subfeatureset.iterator(e));!0===c.pagesDefinition.internal.fullyResolved?d(b.length):0===a?d(b.length):f._nextAggregateItem(c,a,e,b,function(g){null===g?d(b.length):(--a,d(f._sequentialGetPhysicalItem(c,a,e,b)))},g)})};g.prototype._nextAggregateItem=function(c,a,e,b,f,d){var g=this;try{v.tick(c.pagesDefinition.internal.iterator.next()).then(function(h){if(null===h){if(null!==c.pagesDefinition.internal.workingItem){var k=
g._calculateAndAppendAggregateItem(c.pagesDefinition.internal.workingItem);b.push(k);c.pagesDefinition.internal.workingItem=null;c.pagesDefinition.internal.set.push(k.attributes[g.objectIdField])}c.pagesDefinition.internal.fullyResolved=!0;f(null)}else{var l=g._generateAggregateHash(h);if(null===c.pagesDefinition.internal.workingItem)c.pagesDefinition.internal.workingItem={features:[h],id:l};else{if(l!==c.pagesDefinition.internal.workingItem.id){k=g._calculateAndAppendAggregateItem(c.pagesDefinition.internal.workingItem);
b.push(k);c.pagesDefinition.internal.workingItem=null;c.pagesDefinition.internal.set.push(k.attributes[g.objectIdField]);--a;c.pagesDefinition.internal.workingItem={features:[h],id:l};f(k);return}c.pagesDefinition.internal.workingItem.features.push(h)}g._nextAggregateItem(c,a,e,b,f,d)}},d)}catch(p){d(p)}};g.prototype._calculateFieldStat=function(c,a,e){for(var b=[],f=0;f<c.features.length;f++)if(null!==a.workingexpr){var d=a.workingexpr.calculateValue(c.features[f]);null!==d&&b.push(d)}else b.push(null);
switch(a.typeofstat){case "MIN":e.attributes[a.tofieldname]=r.calculateStat("min",b,-1);break;case "MAX":e.attributes[a.tofieldname]=r.calculateStat("max",b,-1);break;case "SUM":e.attributes[a.tofieldname]=r.calculateStat("sum",b,-1);break;case "COUNT":e.attributes[a.tofieldname]=b.length;break;case "VAR":e.attributes[a.tofieldname]=r.calculateStat("var",b,-1);break;case "STDDEV":e.attributes[a.tofieldname]=r.calculateStat("stddev",b,-1);break;case "AVG":e.attributes[a.tofieldname]=r.calculateStat("avg",
b,-1)}return!0};g.prototype._calculateAndAppendAggregateItem=function(c){for(var a={attributes:{},geometry:null},e=0,b=this._decodedGroupbyfield;e<b.length;e++){var f=b[e],d=f.singlefield?c.features[0].attributes[f.singlefield]:f.expression.calculateValue(c.features[0]);a.attributes[f.tofieldname]=d}e=0;for(b=this._decodedStatsfield;e<b.length;e++)this._calculateFieldStat(c,b[e],a);e=[];for(b=0;b<this._decodedStatsfield.length;b++)e.push(this._calculateFieldStat(c,this._decodedStatsfield[b],a));this._featureCache[a.attributes[this.objectIdField]]=
new l({attributes:a.attributes,geometry:a.geometry});return a};g.prototype._generateAggregateHash=function(c){for(var a="",e=0,b=this._decodedGroupbyfield;e<b.length;e++)var f=b[e],f=f.singlefield?c.attributes[f.singlefield]:f.expression.calculateValue(c),a=null===f||void 0===f?a+":":a+(":"+f.toString());return H(a,G.outputTypes.String)};g.prototype._stat=function(){return k.resolve({calculated:!1})};g.prototype.getFeatureByObjectId=function(){return k.resolve(null)};return g}(A);A._featuresetFunctions.groupby=
function(h,g){return new C({parentfeatureset:this,groupbyfields:h,statsfields:g})};return C});