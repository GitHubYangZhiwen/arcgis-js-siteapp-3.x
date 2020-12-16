// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ThemeCalculator","dojo/_base/lang dojox/charting/Theme ../../themes/ThemeLibrary ./ChartTypes ./ChartLineMarkers ./ChartLineStyles esri/dijit/geoenrichment/utils/ColorUtil".split(" "),function(l,w,p,k,q,x,m){function t(c,b,f){var e;switch(c){case k.COLUMN:e=b.column&&b.column.colors;break;case k.BAR:e=b.bar&&b.bar.colors;break;case k.LINE:e=b.line&&b.line.colors;break;case k.VERTICAL_LINE:e=b.line&&b.line.colors;break;case k.PIE:e=b.pie&&
b.pie.colors;break;case k.DONUT:e=b.donut&&b.donut.colors;break;case k.GAUGE:e=b.gauge&&b.gauge.colors;break;case k.WAFFLE:e=b.waffle&&b.waffle.colors;break;case k.RING:e=b.ring&&b.ring.colors;break;case k.PICTURE_COLUMN:e=b.pictureColumn&&b.pictureColumn.colors;break;case k.PICTURE_BAR:e=b.pictureBar&&b.pictureBar.colors}e&&e.length||(e=null);return 3>=f&&b.colors3series&&b.colors3series.length&&b.colors3series||e||b.colors||u}var g={},u=["#AAAAAA","#888888","#555555","#333333"];g.DEFAULT_LINE_THICKNESS=
1;g.DEFAULT_COLUMN_THICKNESS="Medium";g.DEFAULT_DONUT_HOLE_PERCENT=50;g.DEFAULT_DONUT_GAP=3;g.DEFAULT_DONUT_ARC_PERCENT=100;g.DEFAULT_GAUGE_HOLE_PERCENT=80;g.DEFAULT_GAUGE_GAP=2;g.DEFAULT_GAUGE_ANGLE=0;g.DEFAULT_GAUGE_ARC_PERCENT=100;g.getThemeForSettings=function(c,b,f){var e=f.isEditMode;f=f.isBenchmarked;var a=new w({colors:b.colors||u});if(!c)return a;var d=c.visualProperties;a.plotarea.fill=d.backgroundColor||b.backgroundColor;"number"!==typeof d.backgroundColorOpacity||m.isTransparent(a.plotarea.fill)||
(a.plotarea.fill=m.toColor(a.plotarea.fill),a.plotarea.fill.a=d.backgroundColorOpacity);a.plotarea.stroke={width:0};d.plotAreaOutlineColor&&(a.plotarea.stroke.color=d.plotAreaOutlineColor,"number"!==typeof d.plotAreaOutlineOpacity||m.isTransparent(a.plotarea.stroke.color)||(a.plotarea.stroke.color=m.toColor(a.plotarea.stroke.color),a.plotarea.stroke.color.a=d.plotAreaOutlineOpacity),a.plotarea.stroke.width=d.plotAreaOutlineThickness||0,d.plotAreaOutlineStyle&&(a.plotarea.stroke.style=x.toGFXValue(d.plotAreaOutlineStyle)));
a.chart.fill="transparent";a.axis.title.font="normal normal normal 11px Verdana";k.hasBackgroundImage(c.type)&&(a.plotarea.backgroundImageData=d.backgroundImageData);var h=l.mixin({},b.dataLabelsStyle,d.dataLabelsStyle);a.series.dataLabelsColor=h.color;a.series.dataLabelsAltColor=d.dataLabelsEnableAltColor&&(d.dataLabelsAltColor||b.dataLabelsAltColor);a.series.dataLabelsFont=g.combineFontString(h);a.series.dataLabelsHorizontalAlign=d.dataLabelsHorizontalAlign||"center";a.series.dataLabelsVerticalAlign=
d.dataLabelsVerticalAlign||"middle";a.series.dataLabelsAngle=d.dataLabelsAngle;a.series.dataLabelsMaxWidth=d.dataLabelsMaxWidth;var v=l.mixin({},h,d.dataLabelsLabelStyle);a.series.dataLabelsLabelColor=v.color;a.series.dataLabelsLabelFont=g.combineFontString(v);a.series.dataLabelsPercentColor=h.color;a.series.dataLabelsPercentFont=g.combineFontString(h);k.isColumnBarLike(c.type)&&(a.series.showColumnBarBackground=d.showColumnBarBackground,a.series.columnBarBackgroundColor=d.columnBarBackgroundColor||
b.columnBarBackground&&b.columnBarBackground.backgroundColor,a.series.columnBarBackgroundColor&&(a.series.columnBarBackgroundColor=1>d.columnBarBackgroundOpacity?m.getColorWithAlpha(a.series.columnBarBackgroundColor,d.columnBarBackgroundOpacity):a.series.columnBarBackgroundColor),a.series.renderColumnBarsInOppositeDirections=d.renderColumnBarsInOppositeDirections);k.hasAxis(c.type)&&(a.series.baseLineValue=d.yAxis.baseLineValue);c.type===k.DONUT&&(a.series.donutHolePercent=void 0!==d.donutHolePercent?
d.donutHolePercent:g.DEFAULT_DONUT_HOLE_PERCENT,a.series.donutGap=void 0!==d.donutGap?d.donutGap:g.DEFAULT_DONUT_GAP,a.series.donutArcPercent=void 0!==d.donutArcPercent?d.donutArcPercent:g.DEFAULT_DONUT_ARC_PERCENT,a.series.donutArcPercent=Math.min(100,Math.max(50,a.series.donutArcPercent)));c.type===k.GAUGE&&(a.series.donutHolePercent=void 0!==d.gaugeHolePercent?d.gaugeHolePercent:g.DEFAULT_GAUGE_HOLE_PERCENT,a.series.donutGap=void 0!==d.gaugeGap?d.gaugeGap:g.DEFAULT_GAUGE_GAP,a.series.startAngle=
void 0!==d.gaugeStartAngle?d.gaugeStartAngle:g.DEFAULT_GAUGE_ANGLE,a.series.donutArcPercent=void 0!==d.gaugeArcPercent?d.gaugeArcPercent:g.DEFAULT_GAUGE_ARC_PERCENT,a.series.donutArcPercent=Math.min(100,Math.max(50,a.series.donutArcPercent)),a.series.donutShowIcons=d.showChartIcons,d.gaugeShowArrow&&(a.series.gaugeShowArrowIndicator=!0,a.series.donutGap=0,100!==a.series.donutArcPercent&&(a.series.startAngle=0),a.series.gaugeArrowIndicatorLineColor=d.gaugeArrowLineColor||b.gauge&&b.gauge.arrowIndicator.lineColor,
a.series.gaugeArrowIndicatorFillColor=d.gaugeArrowFillColor||b.gauge&&b.gauge.arrowIndicator.backgroundColor),h=l.mixin({},b.gauge&&b.gauge.dataLabelStyle,d.gaugeLabelStyle),a.series.gaugeMainLabelPosition=d.gaugeLabelPlacement,a.series.gaugeMainLabelFont=g.combineFontString(h),a.series.gaugeMainLabelFontColor=d.gaugeConditionalStylingLabel?null:h.color,a.series.gaugeMainLabelFontColorFromConditionalStyling=d.gaugeConditionalStylingLabel&&!!d.conditionalStyling,a.series.gaugeMainLabelFontSize=d.gaugeLabelStyle&&
d.gaugeLabelStyle.fontSize,a.series.gaugeMainLabelTextDecoration=h.textDecoration,d.gaugeShowFromToLabels&&(a.series.gaugeShowFromToLabels=d.gaugeShowFromToLabels,h=l.mixin({},b.gauge&&b.gauge.dataLabelStyle,d.gaugeFromLabelStyle),a.series.gaugeFromLabelValue=d.gaugeRangeMin||0,a.series.gaugeFromLabelFont=g.combineFontString(h),a.series.gaugeFromLabelFontColor=h.color,a.series.gaugeFromLabelFontSize=h.fontSize,a.series.gaugeFromLabelTextDecoration=h.textDecoration,h=l.mixin({},b.gauge&&b.gauge.dataLabelStyle,
d.gaugeToLabelStyle),a.series.gaugeToLabelValue=d.gaugeRangeMax||"",a.series.gaugeToLabelFont=g.combineFontString(h),a.series.gaugeToLabelFontColor=h.color,a.series.gaugeToLabelFontSize=h.fontSize,a.series.gaugeToLabelTextDecoration=h.textDecoration));c.type===k.WAFFLE&&(a.series.waffleDirection=d.waffleDirection,a.series.waffleFlowStyle=d.waffleFlowStyle,a.series.waffleShowWholePictures=d.waffleShowWholePictures,a.series.waffleStretchIconsToFill=d.waffleStretchIconsToFill,a.series.waffleLabelPlacement=
d.waffleLabelPlacement,a.series.waffleLabelOffset=d.waffleLabelOffset,a.series.waffleColumnSpace=d.waffleColumnSpace,a.series.waffleRowSpace=d.waffleRowSpace,a.series.waffleNumIcons=d.waffleNumIcons,a.series.waffleNumRows=d.waffleNumRows,a.series.waffleNumColumns=d.waffleNumColumns,a.series.waffleHideValue=d.waffleHideValue,h=l.mixin({},b.waffle&&b.waffle.dataValueStyle,d.waffleValueStyle),a.series.waffleValueFont=g.combineFontString(h),a.series.waffleValueFontColor=d.waffleConditionalStylingValue?
null:h.color,a.series.waffleValueFontColorFromConditionalStyling=d.waffleConditionalStylingValue&&!!d.conditionalStyling,a.series.waffleValueFontSize=h.fontSize,a.series.waffleValueTextDecoration=h.textDecoration,a.series.waffleHideLabel=d.waffleHideLabel,h=l.mixin({},b.waffle&&b.waffle.dataLabelStyle,d.waffleLabelStyle),a.series.waffleLabelFont=g.combineFontString(h),a.series.waffleLabelFontColor=d.waffleConditionalStylingLabel?null:h.color,a.series.waffleLabelFontColorFromConditionalStyling=d.waffleConditionalStylingLabel&&
!!d.conditionalStyling,a.series.waffleLabelFontSize=h.fontSize,a.series.waffleLabelTextDecoration=h.textDecoration,a.series.waffleShowLabelAbove=d.waffleShowLabelAbove);c.type===k.RING&&(a.series.show100PercentLabel=!f,a.series.ringBackgroundColor=d.ringBackgroundColor||b.ring&&b.ring.ringBackground&&b.ring.ringBackground.backgroundColor,a.series.ringBackgroundColor&&(a.series.ringBackgroundColor=1>d.ringBackgroundOpacity?m.getColorWithAlpha(a.series.ringBackgroundColor,d.ringBackgroundOpacity):a.series.ringBackgroundColor));
k.isPictureLike(c.type)&&(a.series.columnBarShowWholePictures=d.columnBarShowWholePictures);a.marker.fill="#FFFFFF";a.series.outline=null;a.series.isEditMode=e;return a};g.getComparisonSymbol=function(c){return q.getMarkerPath(q.CIRCLE,c)};g.calcColorForPoint=function(c){var b=c.point,f=c.seriesItem,e=c.pointIndex,a=c.isOthersPoint,d=c.seriesIndex,h=c.numSeries,l=c.chartType,n=c.themeSettings,m=c.isComparisonSeries;c=c.comparisonInfo;var p=f&&f.points.length;l===k.WAFFLE&&p--;var f=f&&f.color,q=k.isSingleSeries(l)||
k.isColumnBarLike(l)&&!n.renderSingleDataSeriesWithSameColor&&1===h,h=t(l,n,q?p:h),r;if(k.isLineLike(l))m&&c?e=c.color||n.comparisonInfo.lineColor:(r=h[d%h.length],e=f||r||"#000000");else if(m&&c&&c.color)e=c.color;else{b=k.isPictureLike(l)?b&&g.getPointIconStyle(b).fillColor:b&&b.color;if(l===k.GAUGE&&a&&n.gauge.othersColor)return b||n.gauge.othersColor;if(l===k.WAFFLE&&a&&n.waffle.othersColor)return b||n.waffle.othersColor;r=r||(q?h[e%h.length]:h[d%h.length]);e=b||!k.isSingleSeries(l)&&f||r||"#000000"}return e};
g.pointCanHaveColor=function(c){return k.isPictureLike(c.chartType)?!!(c.point.iconFieldInfo&&c.point.iconFieldInfo.shapeJson&&c.point.iconFieldInfo.shapeJson.g.length):!0};g.setPointColor=function(c,b){delete c.color;c.iconFieldInfo?c.iconFieldInfo.shapeJson&&(delete c.iconFieldInfo.shapeJson.style.fillColor,delete c.iconFieldInfo.shapeJson.style.borderColor,b&&(c.iconFieldInfo.shapeJson.style.fillColor=b,c.iconFieldInfo.shapeJson.style.borderColor=b)):b&&(c.color=b)};g.calcColorForSeries=function(c){var b=
c.seriesItem,f=c.seriesIndex,e=c.numSeries,a=c.chartType,d=c.themeSettings;if(k.isSingleSeries(a))return null;c=k.isColumnBarLike(a)&&!d.renderSingleDataSeriesWithSameColor&&1===e;e=t(a,d,e);f=k.isLineLike(a)?e[f%e.length]:c?null:e[f%e.length];return b&&b.color||f||"#000000"};g.provideMissingIconsForPoints=function(c,b){if(k.isPictureLike(b)){var f,e=[];c.forEach(function(a){a.iconFieldInfo?(f=a.iconFieldInfo,e.forEach(function(a){a.iconFieldInfo=l.clone(f)}),e.length=0):f?a.iconFieldInfo=l.clone(f):
e.push(a)})}};g.setWaffleChartPointIcon=function(c,b,f){var e=c&&c.shapeJson;0===b?f.forEach(function(a,b){if(a.fieldInfo||e){var d=g.getPointIconStyle(a);a.iconFieldInfo=0===b?c:c&&l.clone(c);a.iconFieldInfo&&a.iconFieldInfo.shapeJson&&0!==b&&(a.iconFieldInfo.shapeJson.style.fillColor=d.fillColor,a.iconFieldInfo.shapeJson.style.borderColor=d.borderColor)}}):f[b].iconFieldInfo=c;b=f[0];f=f[f.length-1];!f.iconFieldInfo&&b.iconFieldInfo&&b.iconFieldInfo.shapeJson&&(f.iconFieldInfo=l.clone(b.iconFieldInfo),
delete f.iconFieldInfo.shapeJson.style.fillColor,delete f.iconFieldInfo.shapeJson.style.borderColor)};g.getPointIconStyle=function(c,b){function f(a,b){return"number"===typeof a?a:b}var e=c&&(c.iconFieldInfo||c.icon);if(!e||!e.shapeJson)return{fillColor:null,fillAlpha:null,borderColor:null,borderAlpha:null,borderWidth:null,borderDashArray:null};c=e.shapeJson.style;b=b&&b.considerTheme&&e.shapeJson.themeStyle;return{fillColor:c&&c.fillColor||b&&b.fillColor,fillAlpha:f(c&&c.fillAlpha,b&&b.fillAlpha),
borderColor:c&&c.borderColor||b&&b.borderColor,borderAlpha:f(c&&c.borderAlpha,b&&b.borderAlpha),borderWidth:f(c&&c.borderWidth,b&&b.borderWidth),borderDashArray:c&&c.borderDashArray||b&&b.borderDashArray}};g.calcIconForPoint=function(c,b,f){if(!k.isPictureLike(f))return null;(c=c.iconFieldInfo)&&c.shapeJson&&b&&(c=l.clone(c),c.shapeJson.themeStyle={fillColor:b,borderColor:b});return c};g.calcBackgroundIconForPoint=function(c,b,f,e){if(!k.isPictureLike(b))return null;b=e.columnBarBackgroundColor||
f.columnBarBackground&&f.columnBarBackground.backgroundColor;return(c=c.iconFieldInfo)&&c.shapeJson&&b?(c=l.clone(c),c.shapeJson.themeStyle={fillColor:b,borderColor:b},c):null};g.combineFontString=function(c){c=c||{};return(c.fontStyle||"normal")+" normal "+(c.fontWeight||"normal")+" "+((c.fontSize||p.CHART_DATA_FONT_SIZE)+"px")+" "+(c.fontFamily||p.DEFAULT_FONT_FAMILY_CLASSIC)};return g});