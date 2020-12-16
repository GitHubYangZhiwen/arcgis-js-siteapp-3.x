// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/builder/columnBarLine/_LineChartSeriesCalculator","dojo/_base/lang ../../ThemeCalculator ../../ChartTypes ../../ChartLineStyles ../../ChartLineMarkers ../../AxisUtil ../utils/TooltipInfoBuilder ../ChartPlots esri/dijit/geoenrichment/utils/ColorUtil ./_AxisBuilder ./_PointLabelUtil ./_StatsBuilder".split(" "),function(L,q,J,y,v,M,N,O,w,P,I,Q){var R={calcLineStyle:function(a,z,g,f){var b=f.comparisonInfo,G=f.themeSettings,c=f.visualProperties,
t=a.lineThickness||c.lineThickness||1,h=1,H=1,D=1;c.fillLineArea?(h="number"===typeof c.lineOpacity?c.lineOpacity:c.lineAreaOpacity,H=c.lineAreaOpacity):"number"===typeof c.lineOpacity&&(h=c.lineOpacity);g=q.calcColorForPoint({point:null,seriesItem:a,pointIndex:0,seriesIndex:z,numSeries:g.length,chartType:J.LINE,themeSettings:G,isComparisonSeries:a.isComparisonSeries,comparisonInfo:b,isMultiFeature:f.isMultiFeatureChart});1>h&&g&&(g=w.toColor(g),g.a=h);var G=a.lineStyle||y.SOLID,k,d,n,x=a.lineMarkerSize,
u=w.toColor(a.fillColor||g);u.a=H;n=w.toColor(a.lineMarkerColor||g);n.a=h;D="number"===typeof c.lineMarkersFillOpacity?c.lineMarkersFillOpacity:H;c=w.toColor(a.lineMarkerFillColor||u);c.a=D;a.isComparisonSeries&&b?(b.lineThickness&&(t=b.lineThickness),b.lineStyle&&(G=b.lineStyle),b.lineMarkerSize&&(x=b.lineMarkerSize),b.lineMarker?(d=v.getMarkerPath(b.lineMarker),k=v.getMarkerPath(b.lineMarker,x)):(d=q.getComparisonSymbol(),k=q.getComparisonSymbol(x)),b.lineMarkerColor&&(n=w.toColor(b.lineMarkerColor),
n.a=h),b.lineMarkerFillColor&&(c=w.toColor(b.lineMarkerFillColor),c.a=H)):f.viewModel.isGraphicStyle&&(d=a.lineMarker&&v.getMarkerPath(a.lineMarker)||v.getMarkerPathAt(z),k=a.lineMarker&&v.getMarkerPath(a.lineMarker,x)||v.getMarkerPathAt(z,x));return{lineColor:g,width:t,style:y.toGFXValue(G),marker:k,unscaledMarker:d,markerColor:n,markerFillColor:c,fillColor:u}}};return{calcSeriesLine:function(a){var z=a.chart,g=a.chartType,f=a.visualProperties,b=a.seriesItems,v=1===b.length,c=a.seriesItemsWithComparison||
b,t=a.isSecondaryPlot,h=a.reverseXY||g===J.VERTICAL_LINE,w=a.comparisonInfo,D=a.themeSettings,k=a.viewModel,d=[],n=new Q({visualProperties:f,seriesItems:c,viewModel:k,currentFeatureIndex:a.currentFeatureIndex,isMultiFeatureChart:a.isMultiFeatureChart,comparisonFeatureAttributes:a.comparisonFeatureAttributes,chartType:g,isSecondaryPlot:t,oppositeDirections:a.oppositeDirections,excludedSeriesHash:a.excludedSeriesHash}),x=a.primaryPlotStat&&a.primaryPlotStat.pointIndexToTooltipsHash||{},u=n.getTotalStats();
c.forEach(function(b,A){if(b.points.length){var l=R.calcLineStyle(b,A,c,a),B={name:b.label,data:[],isComparisonSeries:b.isComparisonSeries,params:{plot:t?O.SECONDARY:void 0,fill:f.fillLineArea?l.fillColor:"transparent",stroke:{color:l.lineColor,width:l.width,style:l.style},marker:l.marker,unscaledMarker:l.unscaledMarker,markerStroke:{color:l.markerColor,width:l.width,style:y.toGFXValue(y.SOLID)},markerFill:f.fillLineMarkers?l.markerFillColor:"transparent",outline:!1}},m=n.getStatisticsForSeriesAt(A);
b.points.forEach(function(e,d){function l(){return t&&a.oppositeDirections?1===A?a.reverseOrder?1:-1:a.reverseOrder?-1:1:1}function n(){return t&&!a.oppositeDirections&&2===a.primarySeries.length?0===A?-.15:.15:0}if(!e.hidden){var C=m.values[d],q=C.value,E=q||0,F=d+1;t||I.updatePointIndexToLabelMap(z,F,A,e,k);var r=a.isMultiFeatureChart&&u.crossSeriesStats[d],p={originalValue:q,isUnavailableData:isNaN(q),unsortedIndex:d,originalIndex:e.originalIndex||d,name:I.getPointLabel(e,k),valuesSumsInSeries:m.absSumInSeries,
seriesItem:b,seriesIndex:A,point:e,isBenchmarked:C.isBenchmarked,unbenchmarkedValue:C.ownValue};h?(p.x=E*l(),p.y=F+n(),p.valueProp="x"):(p.x=F+n(),p.y=E*l(),p.valueProp="y");f.showValuesAsWeightInStack?p[h?"x":"y"]=m.weightsInStack?100*m.weightsInStack[d]:0:f.yAxis.showValuesAsWeightsInSeries&&(p[h?"x":"y"]/=m.absSumInSeries/100);E=I.getPointLabel(c[0].points[d]||e,k);e=N.getTooltipInfo({yValue:q,pointLabel:E,seriesLabel:b.label,minInSeriesValue:m.minInSeries,maxInSeriesValue:m.maxInSeries,sumInSeriesValue:m.sumInSeries,
absSumInSeriesValue:m.absSumInSeries,avgInSeriesValue:m.avgInSeries,weightInStack:m.weightsInStack&&m.weightsInStack[d],minInAreasValue:r&&r.min,maxInAreasValue:r&&r.max,sumInAreasValue:r&&r.sum,absSumInAreasValue:r&&r.absSum,avgInAreasValue:r&&r.avg,visualProperties:f,chartType:g,isMultiFeature:a.isMultiFeatureChart,conditionalStyling:null,fieldInfo:e.fieldInfo,isThisAreaSpecific:w&&!a.isMultiFeatureChart?!b.isComparisonSeries:void 0,isThisAreaSingleSeries:v,decimals:e.value&&e.value.decimals,fill:B.params.markerFill,
stroke:B.params.markerStroke.color,marker:B.params.unscaledMarker||B.params.marker,isBenchmarked:C.isBenchmarked,unbenchmarkedValue:C.ownValue,chartContainer:a.chartContainer,viewModel:k,theme:a.theme,themeSettings:D,dataDrillingPanelInfo:a.dataDrillingPanelInfo,pointName:E,seriesName:e.originalSeriesName||b.label,areaName:e.areaName,featureIndex:C.featureIndex,isComparisonPoint:e.isComparisonPoint,comparisonFeatureAttribute:e.comparisonFeatureAttribute});var y=x[F]=x[F]||[];y.push(e);e.getGroup=
function(){return y};p.tooltip=e;B.data.push(p)}});d.push(B)}},this);if(t){if(a.primaryPlotStat&&(a.primaryPlotStat.minYValue=Math.min(u.minYValue,a.primaryPlotStat.minYValue),a.primaryPlotStat.maxYValue=Math.max(u.maxYValue,a.primaryPlotStat.maxYValue),b=M.getPrettifyYAxisParameters(a.primaryPlotStat.minYValue,a.primaryPlotStat.maxYValue,{baseLineValue:f.yAxis.baseLineValue,renderColumnBarsInOppositeDirections:a.oppositeDirections,previewBelowZero:!k.dynamicReportInfo,nonZeroInclusive:f.yAxis.nonZeroInclusive}),
L.mixin(z.axes.y.opt,{majorTickStep:b.majorTickStep,minorTickStep:b.minorTickStep,min:b.min,max:b.max})),1===a.primarySeries.length){var q=h?"y":"x",K=[];a.primarySeries[0].data.forEach(function(a){var b=d[0].data[a.unsortedIndex];b[q]=a.x;K.push(b)});d[0].data=K}}else P.prettifyYAxis(u.minYValue,u.maxYValue,z,f,g,D,k);return d}}});