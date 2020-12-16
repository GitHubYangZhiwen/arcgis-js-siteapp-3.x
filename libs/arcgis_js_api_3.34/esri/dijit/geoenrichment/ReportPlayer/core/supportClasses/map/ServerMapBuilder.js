// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/map/ServerMapBuilder","dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/promise/all esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when dojo/dom-geometry ./StaticMap ../../../dataProvider/supportClasses/data/AreaDataUtil esri/dijit/geoenrichment/utils/DataUtil esri/dijit/geoenrichment/utils/ImageUtil".split(" "),function(g,m,k,n,p,q,r,t,u,v){g=g(null,{_mapInfos:null,_mapDivId:0,_mapImageInfos:null,constructor:function(b){m.mixin(this,
b);this.reset()},reset:function(){this._mapInfos={};this._mapImageInfos=null},collectAreaMaps:function(b){var a=[];b=b||0;var c=this._mapInfos[b],d;for(d in c){var e=c[d],f=e.node;if(f.parentNode){var h=q.position(f);a.push({areaIndex:b,node:f,x:h.x,y:h.y,position:-1,map:e.map,legend:e.legend,itemId:e.itemId})}}a.sort(function(a,b){return a.x-b.x});a.sort(function(a,b){return a.y-b.y});a.forEach(function(a,b){a.position=b});return a},collectAllAreasMaps:function(){var b=[],a;for(a in this._mapInfos)b=
b.concat(this.collectAreaMaps(a));return b},setFallbackMapImageInfos:function(b){b?(this._mapImageInfos={},b.forEach(function(a){var b=a.areaIndex||0;(this._mapImageInfos[b]=this._mapImageInfos[b]||{})[a.itemId]=a},this)):this._mapImageInfos=null},createMap:function(b,a){a.areaIndex=a.areaIndex||0;return p(this._doCreateMap(b,a))},_doCreateMap:function(b,a){if(a.calculatorFieldName){var c=t.getAreaDataValue({fieldName:a.calculatorFieldName,fieldData:a.fieldData,featureIndex:a.areaIndex});if(c)return"string"===
typeof c?this._createStaticMap({url:v.base64DataToDataURL(c)},b,a):this._createStaticMapFromBase64Json(c,b,a)}},_createStaticMapFromBase64Json:function(b,a,c){var d=this,e=!1,f=[];b.webMapJson.operationalLayers.forEach(function(b){if(b.isComparisonLayer){var a=c.stdPolygonsControllers&&c.stdPolygonsControllers.filter(function(a){return a.getCalculatorName()===b.calculatorName&&(a.currentFeatureIndex||0)===c.areaIndex});if(a&&a.length){var d={},g=[];a.forEach(function(a){function b(){c.forEach(function(a){d[a.StdGeographyLevel+
";"+a.StdGeographyID]=1})}var c=a.getShownFeatureAttributes();if(c&&c.length)b();else{var e=function(){h&&h.remove();clearTimeout(l);f.resolve()},f=new n,h,l;h=a.setShownFeaturesChangedListener(function(){(c=a.getShownFeatureAttributes())&&c.length&&(b(),e())});l=setTimeout(e,500);g.push(f.promise)}});f.push(k(g).then(function(){var a=b.featureCollection.layers[0].featureSet,c=a.features.length;a.features=a.features.filter(function(a){a=a.attributes;return d[a.StdGeographyLevel+";"+a.StdGeographyID]});
c!==a.features.length&&(e=!0)}))}}});return k(f).then(function(){var f="data:application/json;base64,"+u.base64FromJson(e?b.webMapJson:b.originalString),g=b.fileName+(e?"-modified":"");return d._createStaticMap({url:f,id:g,isWebMapJson:!!g},a,c)})},_createStaticMap:function(b,a,c){var d=b&&new r(b,a);return d&&d.load().then(function(){return d.loaded?{node:a,map:d,itemId:c.webMapId,legend:null}:null})},getPlayerZoomScale:function(b){}});g.EXPAND_FACTOR=1.5;return g});