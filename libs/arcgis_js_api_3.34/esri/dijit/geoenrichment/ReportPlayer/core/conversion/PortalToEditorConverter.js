// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/PortalToEditorConverter","esri/dijit/geoenrichment/when esri/dijit/geoenrichment/ReportPlayer/config ./portalToEditorUtils/layout/LayoutParser ./portalToEditorUtils/metadata/MetadataParser ./portalToEditorUtils/ImageCollector ./portalToEditorUtils/parsers/Parsers ./portalToEditorUtils/variables/PlayerVariableProvider ../supportClasses/DefaultStyles ../supportClasses/images/ImageDataHolder ../themes/conversion/CssParser esri/dijit/geoenrichment/utils/async/AsyncQueue esri/dijit/geoenrichment/utils/DelayUtil".split(" "),
function(e,u,v,w,l,n,x,y,p,z,A,B){return{provideEditorJson:function(m,a){function C(){function f(b,q,c){return e(a.preProcessFile&&a.preProcessFile(b,q,d),function(f){if(!1!==f)return e(c&&c(),function(){return a.postProcessFile&&a.postProcessFile(b,q,d)})})}if(g&&g.files&&g.files){var l=a.filesToProcess||["theme.css.txt","metadata.xml","report.xml"],r={"theme.css.txt":function(b){return f(b,"theme.css.txt",function(){d.theme=z.fromCssText(b.data,a)})},"metadata.xml":function(b){return f(b,"metadata.xml",
function(){return w.parseMetadataXML(b,d,a)})},"report.xml":function(b){return f(b,"report.xml",function(){return v.parseReportXML({report:m,parsers:n,file:b,templateJson:d,variableProvider:a.variableProvider,useVariableProviderToCollectOnly:a.useVariableProviderToCollectOnly,tableDefaultStyles:a.tableDefaultStyles,processFileName:k,putImageData:function(a,c){a=k(a);c=c||h[a];p.putImageData(a,c);return c},log:D,queryMetaDataFunc:function(b){return a.queryMetaDataFunc&&a.queryMetaDataFunc(b,d)},postProcessChartJson:function(b,
c){a.postProcessChartJson&&a.postProcessChartJson(d,b,c)},postProcessMapJson:function(b,c){a.postProcessMapJson&&a.postProcessMapJson(d,b,c)},postProcessInfographicJson:function(b,c){a.postProcessInfographicJson&&a.postProcessInfographicJson(d,b,c)},postProcessTableInSection:function(b,c){a.postProcessTableInSection&&a.postProcessTableInSection(d,b,c)}})})},generic:function(a,d){return f(a,d)}},t=new A;l.forEach(function(a){var b=g.files.filter(function(b){return b.name===a})[0],c=b&&(r[a]||r.generic);
c&&t.add(function(){return e(u.isPlayerOnServer?e():B.delay(50)).then(function(){return c(b,a)}).otherwise(function(a){d.metadata.parseErrors.push(a);console.log(a)})})});return t.getPromise()}}a=a||{};a.variableProvider=a.variableProvider||new x;a.tableDefaultStyles=a.tableDefaultStyles||new y;var d={documentOptions:{},metadata:{specialTradeAreaCalculatorName:null,parseErrors:[],mapImageInfosHash:{},comparisonCalculatorsHash:{},locatorCalculatorsHash:{}},theme:null},g=m.portalJson,h={};a.getImageData=
function(a){return h[k(a)]};var k=function(a){return a?a.toLowerCase():""},D=a.log||function(a){};return e(n.initialize(),function(){return e(l.collectImageResources(g,h,k),function(){for(var a in h)p.putImageData(a,h[a]);return e(C(),function(){d.metadata.parseErrors.length||(m.templateJson=d)})})})}}});