// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/layout/LayoutBuilder",["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","dojo/dom-construct"],function(f,e,g,h){return f(null,{_moduleMap:null,_getModulePaths:function(){return{core:{section:"esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionRenderer",grid:"esri/dijit/geoenrichment/ReportPlayer/core/grid/AdjustableGrid",image:"esri/dijit/geoenrichment/ReportPlayer/core/annotations/image/ImageRenderer",chart:"esri/dijit/geoenrichment/ReportPlayer/core/charts/ChartRenderer",
map:"esri/dijit/geoenrichment/ReportPlayer/core/map/MapRenderer"},classic:{reportContainer:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainer/ReportContainer"},graphicCore:{shape:"esri/dijit/geoenrichment/ReportPlayer/core/annotations/shape/ShapeRenderer",infographic:"esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicRenderer"},graphic_fullPages:{reportContainerGrid:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainerGrid/ReportContainerGrid"},graphic_panelsInSlides:{reportContainerPagination:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainerPagination/ReportContainerPagination",
infographicPage:"esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicsPage"},graphic_panelsInStack:{reportContainerStack:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainerStack/ReportContainerStack",infographicPageStack:"esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicsPageStack"},graphic_panelsInStackAll:{reportContainerStack:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainerStack/ReportContainerStack",reportContainerStackAll:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainerStack/ReportContainerStackAll",
infographicPageStack:"esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicsPageStack"},graphic_panelsInRow:{reportContainerStack:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainerStack/ReportContainerStack",infographicPageStack:"esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicsPageStack"}}},initCoreComponents:function(){var a=this._getModulePaths();return this._initPaths(e.mixin({},a.core,a.graphicCore))},initClassicComponents:function(){var a=this._getModulePaths();
return this._initPaths(e.mixin({},a.core,a.classic))},initGraphicComponents:function(a){var b=this._getModulePaths();return this._initPaths(e.mixin({},b.core,b.graphicCore,b["graphic_"+a]||b.graphic_fullPages))},_initPaths:function(a){var b=this;this._moduleMap=this._moduleMap||{};var c=[],d;for(d in a)c.push({id:d,path:a[d]});var e=new g;require(c.map(function(a){return a.path}),function(){for(var a=0;a<arguments.length;a++)b._moduleMap[c[a].id]=arguments[a];e.resolve()});return e.promise},createElement:function(a,
b,c,d){switch(a){case "grid":case "reportContainer":case "reportContainerGrid":case "reportContainerPagination":case "reportContainerStack":case "reportContainerStackAll":case "infographicPage":case "infographicPageStack":return new this._moduleMap[a](b,c?h.create("div",null,c,d):void 0);case "section":return this._moduleMap.section.createSection(b,c,d);case "emptySection":return this._moduleMap.section.createEmptySection(b,c,d);case "image":return this._moduleMap.image.createImageContainer(b);case "shape":return this._moduleMap.shape.createShapeContainer(b);
case "chart":return this._moduleMap.chart.createChartPage(b);case "infographic":return this._moduleMap.infographic.createInfographicPage(b);case "map":return this._moduleMap.map.createMapContainer(b)}return!1},getClass:function(a){return this._moduleMap[a]}})});