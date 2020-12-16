// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/commands/mapToImage/MapToImageUtil","dojo/_base/lang esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when dojo/dom-construct esri/dijit/geoenrichment/promise/all ./MapToURLUtil ./_MapReplacer".split(" "),function(p,q,g,r,m,e,n){var a={};a.enableCaching=e.enableCaching;a.clearCaching=e.clearCaching;a.replaceMapWithImage=function(f,c){c=c||{};var h=[],a={errors:[],undo:function(){h.map(function(b){b()})}},k=f.collectMaps({allAreas:!0}),
l=[],d={};return m(k.map(function(b){d[b.areaIndex]=d[b.areaIndex]||1;var a=f.getReportData().isMultiFeature?f.getReportData().combinedAreasInfo.name:f.getReportData().analysisAreas[b.areaIndex].name;c=p.mixin({},c);c.mapName=a+" (Map"+(1<d[b.areaIndex]?" "+d[b.areaIndex]:"")+")";d[b.areaIndex]++;return g(e.mapToURL(b.map,b.legend,b.node,c),function(f){var a=n.replaceMapWithImage(b.node);h.push(a.undo);l.push(b);if(c.replaceWithJson)a.mapImage.src=f;else{var d=new q;a.mapImage.onload=function(){a.mapImage.onload=
a.mapImage.onerror=null;d.resolve()};a.mapImage.onerror=function(b){a.mapImage.onload=a.mapImage.onerror=null;console.log(b);r.destroy(a.mapImage);d.resolve()};g(e.urlToSrc(f,c),function(b){a.mapImage.src=b});return d.promise}})})).always(function(){l.length!==k.length&&(k.forEach(function(a){-1===l.indexOf(a)&&(a=n.replaceMapWithImage(a.node),h.push(a.undo))}),a.errors.push(Error("Some maps can't be exported")));return a})};a.mapInfoToDataUrl=function(a,c){return g(e.mapToURL(a.map,a.legend,a.node,
c),function(a){return e.urlToSrc(a,c)})};a.collectMapsAsImages=function(a,c){a=a.collectMaps({allAreas:!0});return m(a.map(function(a){return g(e.mapToURL(a.map,a.legend,a.node,c),function(a){return e.urlToSrc(a,c)}).otherwise(function(){return null}).then(function(c){return{url:c,itemId:a.itemId,areaIndex:a.areaIndex,position:a.position}})}))};return a});