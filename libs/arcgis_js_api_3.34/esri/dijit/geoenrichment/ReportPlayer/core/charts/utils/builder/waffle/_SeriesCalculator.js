// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/builder/waffle/_SeriesCalculator","../../ThemeCalculator ../../ChartTypes ../../ChartJsonUtil ../../../../supportClasses/conditionalStyling/ConditionalStyleUtil ../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder ../utils/ChartDataUtil ../utils/TooltipInfoBuilder".split(" "),function(w,k,H,x,I,y,J){return{calcSeries:function(d){var f=k.WAFFLE,z=d.themeSettings,A=d.viewModel,c=d.visualProperties,B=d.currentFeatureIndex,
C=[],l=d.seriesItems[0],D={name:"data",data:[]},m=[],n=0,E=0,p=1E6,q=-1E6,F,b=l.points;1===b.length&&(b=b.slice(),b.push(H.getWaffleOthersPoint()));if(k.isConditionalStylingSupported(f)&&c.conditionalStyling){var G=x.getStatistics(c.conditionalStyling);F=G&&y.getChartData({conditionalStats:G,numPoints:b.length})}var K=b.every(function(a){return!a.fieldInfo||I.isFieldInfoInPercentState(a.fieldInfo)}),r=0>c.waffleRangeMin;b.forEach(function(a,d){d<b.length-1?(a=y.getPointValue({point:a,index:d,seriesIndex:0,
maxValue:!1,chartType:f,visualProperties:c,viewModel:A,currentFeatureIndex:B,chartData:F,numPoints:b.length}),r=r||0>a):(a=m.reduce(function(a,b){return a+b},0),a=c.waffleRangeMax?Math.max(0,c.waffleRangeMax-a):K?Math.max(0,100-a):0);a=(m[d]=a)||0;n+=a;E+=Math.abs(a);p=Math.min(p,a);q=Math.max(q,a)});var L=n/b.length;b.forEach(function(a,g){var h=g===b.length-1,t=m[g],u=t||0,e;k.isConditionalStylingSupported(f)&&c.conditionalStyling&&(e=(e=x.getConditionalStyle(u,c.conditionalStyling))&&e.backgroundColor,
h&&!c.waffleConditionalStylingOthers&&(e=void 0));e=e||w.calcColorForPoint({point:a,seriesItem:l,pointIndex:g,isOthersPoint:h,seriesIndex:0,numSeries:1,chartType:f,themeSettings:z});var v=u;h||c.waffleRangeMin&&(v=Math.max(0,v-c.waffleRangeMin));D.data.push({originalValue:t,x:1,y:v,isUnavailableData:isNaN(t),valueProp:"y",unsortedIndex:g,name:a.label,point:a,fill:e,icon:w.calcIconForPoint(a,e,f),fieldInfo:a.fieldInfo||b[0].fieldInfo,seriesIndex:0,isOthersPoint:h,tooltip:J.getTooltipInfo({yValue:u,
pointLabel:a.label,seriesLabel:null,minInSeriesValue:p,maxInSeriesValue:q,sumInSeriesValue:n,absSumInSeriesValue:E,avgInSeriesValue:L,visualProperties:c,chartType:f,conditionalStyling:c.conditionalStyling,fieldInfo:a.fieldInfo||b[0].fieldInfo,decimals:a.value&&a.value.decimals,hasNegativeValues:r,fill:e,chartContainer:d.chartContainer,viewModel:A,theme:d.theme,themeSettings:z,dataDrillingPanelInfo:d.dataDrillingPanelInfo,pointName:a.label,seriesName:l.label,areaName:null,featureIndex:B,isComparisonPoint:!1,
comparisonFeatureAttribute:null}),stroke:{width:0}})});C.push(D);return C}}});