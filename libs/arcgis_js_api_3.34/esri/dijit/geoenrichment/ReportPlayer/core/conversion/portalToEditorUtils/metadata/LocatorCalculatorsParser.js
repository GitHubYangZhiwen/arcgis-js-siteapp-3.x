// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/metadata/LocatorCalculatorsParser",["esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/utils/JsonXmlConverter","../variables/VariableUtil"],function(h,k,f,l){return{parseLocatorCalculators:function(c,m,e){c=f.queryJson(c,"Locator");return h(c.map(function(b){var c=[];f.queryJson(b,/^(PointFields|Fields)$/).forEach(function(a){c=c.concat(f.queryJson(a,/^(Field|Direction|Distance)$/))});
var g=[];c.forEach(function(a){"Direction"===a.name?a.attributes.MapTo="DIRECTION":"Distance"===a.name&&(a.attributes.MapTo="DISTANCE");(a=l.fieldTagToVariable(a,b.attributes.Name))&&g.push(a)});var d={calculatorName:b.attributes.Name,variableObjects:g,layerID:null,layerUrl:null,layerName:b.attributes.LayerName};b.attributes.Points&&0===b.attributes.Points.indexOf("std:")?d.layerID=b.attributes.Points.replace("std:",""):d.layerUrl=b.attributes.Layer;m.metadata.locatorCalculatorsHash[b.attributes.Name]=
d;e.variableProvider.isPlayerOnly&&g.forEach(function(a){e.variableProvider.addVariable(a)});return k(!e.validateLocatorCalculator||e.validateLocatorCalculator(d.layerID,d.layerUrl),function(a){d.isValid=a})}))}}});