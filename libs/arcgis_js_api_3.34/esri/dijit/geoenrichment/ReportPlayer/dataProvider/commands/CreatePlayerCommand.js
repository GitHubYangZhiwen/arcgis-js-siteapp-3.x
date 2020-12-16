// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/commands/CreatePlayerCommand","require dojo/_base/declare esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when esri/dijit/geoenrichment/promise/all ../../PlayerCommands ../supportClasses/GEUtil ../../core/supportClasses/map/WebMapsUtil ../../core/supportClasses/templateJsonUtils/TemplateJsonAnalyzer esri/dijit/geoenrichment/ReportPlayer/config dojo/i18n!esri/nls/jsapi".split(" "),function(p,q,r,f,t,u,v,w,x,h,g){function y(){if(d)return f(d.promise);
d=new r;p(["dijit/Dialog","esri/dijit/geoenrichment/utils/FileUtil","./mapToImage/MapToImageUtil","./supportClasses/DynamicHTMLPageBuilder"],function(a,c,b,z){k=a;l=c;m=b;n=z;d.resolve()});return d.promise}g=g.geoenrichment.dijit.ReportPlayer.ReportPlayer;var k,l,m,n,d;return q(null,{id:u.DYNAMIC_HTML,label:g.createDynamicHTMLCommandLabel,errorMessage:g.exportInfographicError,execute:function(a,c){c=c||{};var b=c.printableContainer;c.reportTitle=a.getReportTitle();c.allowDataDrilling=b.allowDataDrilling();
c.getImageInfos=function(){return!b.allowFallbackMaps()||c.skipFallbackMaps?null:m.collectMapsAsImages(a,{saveImagesAsDataUrl:!0})};c.loadStdFeatures=function(){return a._viewModel.loadAllStdFeatures()};c.reportDataToJson=function(b,e){return a.reportDataToJson({loadDataDrillingData:c.allowDataDrilling,mapImageInfos:b,loadedMapPortalItems:e})};c.templateJson=a.getReportData().templateJson;return this._execute(c).always(function(a){return f(b.stop(),function(){return a})})},executeOnData:function(a,
c,b){b=b||{};b.reportTitle=c.reportObject.title;b.allowDataDrilling=!0;b.reportDataToJson=function(b,e){return a.reportDataToJson(c,{loadedMapPortalItems:e})};b.templateJson=c.templateJson;return this._execute(b)},_execute:function(a){a=a||{};var c=this;return y().then(function(){return t({mapImageInfos:a.getImageInfos&&a.getImageInfos(),stdFeatures:a.loadStdFeatures&&a.loadStdFeatures(),loadedMapPortalItems:h.createPlayerCommand.loadMapPortalItems&&w.loadItems(x.collectMapItemIds(a.templateJson))}).then(function(b){var d;
return f(a.reportDataToJson(b.mapImageInfos,b.loadedMapPortalItems),function(b){b.config.portalUrl="https://www.arcgis.com";delete b.config.geometryServiceUrl;delete b.config.printMapTaskUrl;if(a.returnReportDataJson)d=b;else return f(n.buildHTMLPageString(b,a.reportTitle,a.allowDataDrilling,a.disableExportOptions),function(b){d=b;var e=a.fileName||a.reportTitle+".html";return b&&!a.returnAsHtmlText&&c._confirmSaveFile(e,function(){return l.saveTextFile(b,e,"text/html",{addDownloadIntervals:a.addDownloadIntervals})})})}).then(function(){!a.skipCreditConsumption&&
!h.createPlayerCommand.skipCreditConsumption&&a.creditsTaskIDs&&a.creditsTaskIDs.forEach(function(a){v.consumeCredits(a)});return d})}).otherwise(c._handleError.bind(c))})},_handleError:function(a){console.log(a);(new k({title:"Error",content:this.errorMessage})).show()},_confirmSaveFile:function(a,c){return c()}})});