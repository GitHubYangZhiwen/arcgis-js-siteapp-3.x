// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/RenderMode",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","../sniff","../kernel"],function(f,m,k,h,n){var p=!!h("esri-pbf"),q=!!h("esri-featurelayer-pbf");f=f(null,{declaredClass:"esri.layers._RenderMode",enablePBFQuery:p&&q,initialize:function(a){this.map=a;this._init=!0},startup:function(){this._started=!0},propertyChangeHandler:function(a){},destroy:function(){this._init=this._started=!1},drawFeature:function(a){},suspend:function(){},resume:function(){},refresh:function(){},
hasAllFeatures:function(){return!0},hasUpdateError:function(){return!1},canFetchPBF:function(a){return!(!this.featureLayer._canFetchPBF()||!this.enablePBFQuery)},_incRefCount:function(a){(a=this._featureMap[a])&&a._count++},_decRefCount:function(a){(a=this._featureMap[a])&&a._count--},_getFeature:function(a){return this._featureMap[a]},_addFeatureIIf:function(a,b){var c=this._featureMap,d=c[a],e=this.featureLayer;d||(c[a]=b,e._add(b),b._count=0);return d||b},_removeFeatureIIf:function(a){var b=this._featureMap[a],
c=this.featureLayer;if(b){if(b._count)return;delete this._featureMap[a];c._remove(b)}return b},_registerFeature:function(a,b){var c=this._featureMap,d=c[a];d?(d.attributes=b.attributes,d.geometry=b.geometry):(c[a]=b,b._count=0,b._layer=b._graphicsLayer=b._sourceLayer=this.featureLayer);return d||b},_unregisterFeature:function(a){var b=this._featureMap,c=b[a];c&&!c._count&&(delete b[a],c._graphicsLayer=null)},_clearIIf:function(){var a;a=this.featureLayer;var b=a.graphics,c=a._selectedFeatures,d=a.getSelectedFeatures().length,
e=a.objectIdField;if(d)for(a=b.length-1;0<=a;a--){var d=b[a],g=d.attributes[e];g in c?d._count=1:(d._count=0,this._removeFeatureIIf(g))}else a.clear(),this._featureMap={}},_cancelPendingRequest:function(a){if(a)try{a.cancel()}catch(b){}},_toggleVisibility:function(a){var b=this.featureLayer,c=b.graphics,d=a?"show":"hide",e,g=c.length;a=a&&b._ager;for(e=0;e<g;e++){var l=c[e];l[d]();a&&b._repaint(l)}},_applyTimeFilter:function(a){var b=this.featureLayer;if(b.timeInfo&&!b.suspended){a||b._fireUpdateStart();
var c=b._trackManager;c&&c.clearTracks();var d=b.getTimeDefinition(),e=b._getOffsettedTE(b._mapTimeExtent);e?(e=b._getTimeOverlap(d,e))?(d=b._filterByTime(b.graphics,e.startTime,e.endTime),c&&c.addFeatures(d.match),k.forEach(d.match,function(a){var c=a._shape;a.visible||(a.show(),(c=a._shape)&&c._moveToFront());b._ager&&c&&b._repaint(a)}),k.forEach(d.noMatch,function(a){a.visible&&a.hide()})):this._toggleVisibility(!1):(c&&c.addFeatures(b.graphics),this._toggleVisibility(!0));c&&(c.moveLatestToFront(),
c.drawTracks());a||b._fireUpdateEnd()}}});h("extend-esri")&&m.setObject("layers._RenderMode",f,n);return f});