// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/_ChartEventSupport","dojo/_base/declare ./utils/builder/ChartPlots ./utils/ChartTypes ./level/LevelLineBuilder ./tooltips/ChartTooltip esri/dijit/geoenrichment/utils/DeviceUtil".split(" "),function(c,f,h,g,l,m){return c(null,{showLevelLine:!0,_levelLineBuilder:null,_addPlotEventListeners:function(){var a=this;this.chart&&h.hasAxis(this._currentChartType)&&(this._levelLineBuilder=this._levelLineBuilder||this.showLevelLine&&new g({lineContainerNode:this.domNode}),
f.getWorkingPlots(this.chart).forEach(function(c,f){this.chart.connectToPlot(c,function(b){if(b.shape&&b.shape.shape&&b.shape.rawNode){var e=b.type,c=b.shape.rawNode,k=0===f?a._currentChartType:a._getComparisonChartType(),d=!1,g=!h.isXAxisVertical(a._currentChartType);a._currentVisualProperties.renderColumnBarsInOppositeDirections?(d=a.chart.series.filter(function(a){return b.run.plot===a.plot}),d=d.indexOf(b.run)>=d.length/2):d=b.y<a._currentVisualProperties.yAxis.baseLineValue;a._levelLineBuilder&&
a._levelLineBuilder.supportsLevelLine(k)&&("onmouseout"===e?a._levelLineBuilder.hideLevelLine():"onmouseover"===e&&a._levelLineBuilder.showLevelLine(a.chart,c,k,g,d));"onmouseover"===e&&a._currentDataDrillingPanelInfo&&a._currentDataDrillingPanelInfo.showOnClick&&(c.style.cursor="pointer");"onclick"===e&&!m.isMobileDevice()&&a.viewModel.dynamicReportInfo&&l.tryShowDataDrillingForShownTooltip()}})},this))}})});