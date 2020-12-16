// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/map/WebMapsUtil","dojo/_base/lang dojo/_base/Deferred esri/dijit/geoenrichment/promise/all esri/dijit/geoenrichment/when esri/kernel esri/arcgis/utils esri/geometry/Extent esri/request esri/dijit/geoenrichment/utils/CacheUtil esri/dijit/geoenrichment/utils/UrlUtil ./UrlToItemUtil".split(" "),function(g,x,r,l,y,u,v,z,n,q,A){var e={};q.isPageRunOnWebService()||(y.id.getCredential=function(){var a=new x;a.reject(Error("Can't get credentials"));
return a});var p={loadItem:function(a){var c=n.get("WebMapsUtil.itemsCache");c[a]||(c[a]=u.getItem(a));return l(c[a],function(b){return(c[a]=b)&&g.clone(b)})},loadServiceInfo:function(a,c){var b=n.get("WebMapsUtil.siCache");b[a]||(b[a]=c({url:a,content:{f:"json"}}));return b[a]}};e.loadItems=function(a){var c={};a.forEach(function(a){c[a]=p.loadItem(a)});return r(c)};e.setLoadedItemsCache=function(a){n.set("WebMapsUtil.itemsCache",g.mixin(n.get("WebMapsUtil.itemsCache"),a))};e.getItem=function(a){return p.loadItem(a)};
e.isWebMapType=function(a){return a&&"Web Map"===a.type};e.createMap=function(a,c,b){b=b||{};if(a&&a.item)return l(e.isWebMapType(a.item)&&b.additionalLayerInfos&&e._addAdditionalLayerInfosToOperationalLayers(a.itemData.operationalLayers,b.additionalLayerInfos,b.requestFunc),function(){return l(!e.isWebMapType(a.item)&&e.createItemDataForNonWebMapItem(a,{defaultBasemapId:b.defaultBasemapId,additionalLayerInfos:b.additionalLayerInfos}),function(){!a.itemData.baseMap.baseMapLayers.length&&a.itemData.operationalLayers.length&&
a.itemData.baseMap.baseMapLayers.push(a.itemData.operationalLayers.shift());a.itemData.operationalLayers.forEach(function(a){a.featureCollection&&a.featureCollection.layers.forEach(function(a){a.featureSet&&a.layerDefinition&&(a.layerDefinition.fields=a.layerDefinition.fields||a.featureSet.fields&&a.featureSet.fields.slice())})});return u.createMap(a,c,{usePopupManager:!0,mapOptions:b.mapOptions||{}})})})};e.createItemDataForNonWebMapItem=function(a,c){function b(){return e.executeItemUrl(d,c.requestFunc)}
function k(f){a.itemData={baseMap:null,operationalLayers:f};return l(c.additionalLayerInfos&&e._addAdditionalLayerInfosToOperationalLayers(f,c.additionalLayerInfos,c.requestFunc),function(){return l(!1!==c.defaultBasemapId&&e.provideDefaultBaseMapForItemData(a.itemData,c),function(){return a})})}function w(a,b){return-1!==a.indexOf(b)?a.substr(a.lastIndexOf(b)+b.length,a.length):null}function t(a,b,c){var f=a.id;return g.mixin({url:q.combine(d.url,f),capabilities:b.capabilities||"Query",visibility:b.visibility||
a.defaultVisibility,mode:1,title:a.title||a.name,description:a.description},c,{id:b.idPrefix+f})}function n(a,b){var f;a.layers.some(function(a){b==a.id&&(f=a);return!!f});return f}c=c||{};var d=a.item,h=a.itemData;if("Feature Service"===d.type){var m=w(d.url,"FeatureServer/"),p=h&&h.layers?h.layers.reduce(function(a,b){a[b.id]=b;return a},{}):{};return b().then(function(a){var b=[],f=m&&n(a,m);if(f)b.push(t(f,{capabilities:a.capabilities,idPrefix:"featureServiceLayer_",visibility:!0},p[m]));else for(f=
0;f<a.layers.length;f++)b.unshift(t(a.layers[f],{capabilities:a.capabilities,idPrefix:"featureServiceLayer_"},p[a.layers[f].id]));return k(b)})}if("Map Service"===d.type)return m=w(d.url,"MapServer/"),b().then(function(a){a=m&&a.layers[m]?t(a.layers[m],{capabilities:a.capabilities,idPrefix:"mapServiceLayer_",visibility:!0}):{url:d.url,id:"mapServiceLayer01",visibility:!0,title:a.title||a.name};a=[g.mixin(a,h)];return k(a)});if("Image Service"===d.type)return b().then(function(a){a=[g.mixin({url:d.url,
id:"imageServiceLayer01",visibility:!0,title:a.title||a.name},h)];return k(a)});if("Vector Tile Service"===d.type)return b().then(function(a){a=[g.mixin({url:d.url,id:"vectorTileServiceLayer01",visibility:!0,title:a.title||a.name,styleUrl:q.combineMulti([d.url,a.defaultStyles,"root.json"]),type:"VectorTileLayer",layerType:"VectorTileLayer"},h)];return k(a)});if("WMSServer"===d.type)return b().then(function(a){a=[g.mixin({url:d.url,id:"wmsLayer01",visibility:!0,title:a.title||a.name},h)];return k(a)});
if("WMTS"===d.type)return b().then(function(a){a=[g.mixin({url:d.url,id:"wmtsLayer01",visibility:!0,title:a.title||a.name},h)];return k(a)});if("WFS"===d.type)return b().then(function(a){a=[g.mixin({url:d.url,id:"wfsLayer01",visibility:!0,title:a.title||a.name},h)];return k(a)});if("KML"===d.type){q.registerCORS(d.url);var r=[g.mixin({url:d.url,id:"kmlLayer01",visibility:!0,title:"KML Layer",type:"KML"},h)];return k(r)}};e.executeItemUrl=function(a,c){a.url=function(a){["FeatureServer","MapServer",
"ImageServer"].some(function(b){if(-1!==a.indexOf(b))return a=a.substr(0,a.lastIndexOf(b)+b.length),!0});return a}(a.url);c=c||z;q.registerCORS(a.url);return p.loadServiceInfo(a.url,c).then(function(b){return l(function(a,b){a.extent||(b=b.initialExtent||b.fullExtent||b.extent,!b||b instanceof v||(b=new v(b)),a.extent=b)}(a,b),function(){return b})})};e.provideDefaultBaseMapForItemData=function(a,c){c=c||{};if(!a.baseMap)return l(function(){var a={title:"My basemap",baseMapLayers:[{id:"basemapLayer01",
opacity:c.hideBasemap?0:1,visibility:!c.hideBasemap,url:"http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer"}]};return c.defaultBasemapId?e.getItem(c.defaultBasemapId).then(function(b){return b&&b.itemData&&b.itemData.baseMap||a}):a}(),function(b){a.baseMap=b;return a})};e._addAdditionalLayerInfosToOperationalLayers=function(a,c,b){return r(c.map(function(a,c){return/Server$/.test(a.url)?e.createItemDataForNonWebMapItem({item:A.tryCreateItemFromServerUrl(a.url)},{requestFunc:b}).then(function(a){return a.itemData.operationalLayers}):
[{url:a.url,id:"additionalLayer"+c,visibility:!0}]})).then(function(b){b.forEach(function(b){b.forEach(function(b){a.push(b)})})})};return e});