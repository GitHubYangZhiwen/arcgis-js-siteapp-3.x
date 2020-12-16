// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/dynamicSettings/SettingsProvider","esri/dijit/geoenrichment/promise/all esri/dijit/geoenrichment/when ./areaDetails/_AreaDetailsSettingsBuilder ./chart/_ChartSettingsBuilder ./comparison/_ComparisonSettingsBuilder ./dynamicInfographic/_DynamicInfographicSettingsBuilder ./locator/_LocatorSettingsBuilder ./map/_MapSettingsBuilder ./multiFeature/_MultiFeatureSettingsBuilder ./table/_TableSettingsBuilder".split(" "),function(c,d,e,f,g,h,k,l,
m,n){return{getSettingsSet:function(a){return d(a.getRenderPromise(),function(){return c({areaDetailsSettings:e.provideAreaDetailsSettings(a),chartSettings:f.provideChartSettings(a),comparisonSettings:g.provideComparisonSettings(a),dynamicInfographicSettings:h.provideDynamicInfogarphicSettings(a),locatorSettings:k.provideLocatorSettings(a),mapSettings:l.provideMapSettings(a),multiFeatureSettings:m.provideMultiFeatureSettings(a),tableSettings:n.provideTableSettings(a)}).then(function(b){Object.keys(b).forEach(function(a){if(a=
b[a])a.exportSettings&&(b.hasExport=!0),a.viewSettings&&(b.hasViewSettings=!0),a.filter&&(b.hasFilter=!0)});return b.hasExport||b.hasViewSettings||b.hasFilter||b.multiFeatureSettings?b:null})})}}});