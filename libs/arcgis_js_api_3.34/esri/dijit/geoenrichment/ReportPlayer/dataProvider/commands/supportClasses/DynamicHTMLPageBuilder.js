// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/commands/supportClasses/DynamicHTMLPageBuilder","esri/dijit/geoenrichment/when esri/dijit/geoenrichment/utils/FileUtil esri/dijit/geoenrichment/utils/JsonCompressor esri/dijit/geoenrichment/ReportPlayer/config ../createHTML/HTMLPageBuilder ./FeatureServiceDataLoader ../../../_devConfig".split(" "),function(h,k,f,a,l,m,b){return{buildHTMLPageString:function(c,d,n,p){var e;e=a.createPlayerCommand.prettifyDataJson||b.createPlayerCommand.saveDataJsonAsTextFile?
JSON.stringify(c,void 0,4):JSON.stringify(a.createPlayerCommand.compressData?f.compress(c,function(a){return a.replace(/dataCollectionsCalculator/g,"_dcc")}):c);b.createPlayerCommand.saveDataJsonAsTextFile&&k.saveTextFile(e,"reportDataJson");var g=[];g.push('html, body, #layoutNode { padding: 0px; margin: 0px; height: 100%; overflow: hidden; font-size: 13px; font-family: "Avenir Next"; }');return h(this._prepareScripts(),function(c){return l.composeHtmlStringFromParts({reportTitle:d,links:[b.createPlayerCommand.useTestBuild?
b.createPlayerCommand.esriDijitCssUrl:a.esriDijitCssUrl,b.createPlayerCommand.useTestBuild?b.createPlayerCommand.esriCssUrl:a.esriCssUrl],cssFiles:g,scripts:c.concat(['require(["require", "esri/dijit/geoenrichment/nlsFix"],\nfunction (relativeRequire, nlsFix) {\n   nlsFix.load(null, relativeRequire);\n   require([\n       "dojo/sniff",\n       "esri/dijit/geoenrichment/ReportPlayer/ReportPlayer",\n       "esri/dijit/geoenrichment/ReportPlayer/DataProviderGE",\n       "esri/dijit/geoenrichment/ReportPlayer/PlayerViewModes",\n       "esri/dijit/geoenrichment/ReportPlayer/PlayerCommands",\n       "esri/dijit/geoenrichment/utils/UrlUtil",\n       "dojo/domReady!"\n   ],\n   function (\n       has,\n       ReportPlayer,\n       DataProviderGE,\n       PlayerViewModes,\n       PlayerCommands,\n       UrlUtil\n   ) {\n       esriConfig.defaults.io.proxyUrl \x3d UrlUtil.getVariableValue(window.location.href, "proxy") || null;\n       '+
(a.createPlayerCommand.compressData?f.getDecompressMinified():"function decompress(d) { return d; };")+"\n       var reportDataJson \x3d decompress("+e+");\n       "+m.getMinifiedFunction()+"\n       enrichReportDataWithFeatureServiceData(reportDataJson, function () {\n           var dataProvider \x3d new DataProviderGE();\n"+(p?"":'           dataProvider.registerCommand(PlayerCommands.PRINT);\n           if (!has("ie") \x26\x26 !has("trident"))\n               dataProvider.registerCommand(PlayerCommands.IMAGE);\n')+
'           var player \x3d new ReportPlayer({\n               dataProvider: dataProvider,\n               viewMode: UrlUtil.getVariableValue(window.location.href, "viewMode") || PlayerViewModes.FULL_PAGES,\n               enableDataDrilling: '+n+",\n               onError: function(e) {\n                   console.log(e);\n               }\n           }).placeAt(layoutNode);\n           player.reportDataFromJson(reportDataJson);\n       });\n   });\n});"]),contentString:'\x3cdiv id\x3d"layoutNode"\x3e\x3c/div\x3e'})})},
_prepareScripts:function(){function c(b){switch(a.env){case "dev":return b.replace("js.arcgis.com","jsdev.arcgis.com");case "qa":return b.replace("js.arcgis.com","jsqa.arcgis.com");default:return b}}a.playerSourceRootUrl=c(a.playerSourceRootUrl);a.esriDijitCssUrl=c(a.esriDijitCssUrl);a.esriCssUrl=c(a.esriCssUrl);var d=[];b.createPlayerCommand.useTestBuild?(d.push({src:b.createPlayerCommand.configUrl}),d.push({"data-dojo-config":"baseUrl: '"+b.createPlayerCommand.baseUrl+"', isDebug: 1, waitSeconds: 60",
src:b.createPlayerCommand.mainUrl})):(a.configScriptText&&d.push(a.configScriptText),d.push({src:a.playerSourceRootUrl}));return d}}});