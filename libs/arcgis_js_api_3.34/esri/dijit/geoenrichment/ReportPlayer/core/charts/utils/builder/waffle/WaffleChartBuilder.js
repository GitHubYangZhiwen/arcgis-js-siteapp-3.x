// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/builder/waffle/WaffleChartBuilder","dojo/_base/declare dojo/_base/lang ../../plots/waffle/Waffle ../../plots/_TouchPlotEvents ../ChartPlots ./_SeriesCalculator".split(" "),function(c,d,e,f,g,a){return{configureChart:function(b){var a=d.mixin({type:c([e,f]),labelFunc:function(a){return ChartDataLabelBuilder.formatDataLabel(a,b.visualProperties)},animate:b.viewModel.isAnimationAllowed()});b.chart.addPlot(g.PRIMARY,a)},calcSeries:function(b){return a.calcSeries(b)}}});