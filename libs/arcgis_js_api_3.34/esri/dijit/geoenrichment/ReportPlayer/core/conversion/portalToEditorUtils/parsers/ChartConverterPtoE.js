// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/parsers/ChartConverterPtoE","dojo/_base/lang esri/dijit/geoenrichment/utils/ColorUtil esri/dijit/geoenrichment/utils/ImageUtil esri/dijit/geoenrichment/utils/JsonXmlConverter ../../ConversionUtil esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartJsonUtil esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartTypes esri/dijit/geoenrichment/ReportPlayer/core/charts/legends/ChartLegendTypes esri/dijit/geoenrichment/ReportPlayer/core/charts/legends/ChartLegendPlacements esri/dijit/geoenrichment/ReportPlayer/core/charts/legends/ChartLegendSymbols esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartDataLabelsTypes esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartBarThickness esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartSorting esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartLineStyles esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartLineMarkers esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/supportClasses/GaugeLabelPlacements esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/supportClasses/WaffleLabelPlacements esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/supportClasses/WaffleDirections esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/supportClasses/WaffleFlowStyles ./_FieldInfoBuilder dojo/i18n!esri/nls/jsapi".split(" "),
function(x,G,R,l,k,J,z,K,L,S,T,H,U,v,I,V,W,X,Y,y,w){function c(b,c){b=Number(b);return isNaN(b)?void 0:c?c(b):b}function E(b,g){return c(b,1.7<=g.revisionVersion?k.ptToPx:null)}function h(b){return k.ptToPxObj(k.parseStyleString(b))}function Z(b,h){return l.queryTopJson(b,"series")[0].tags.map(function(e){if(!e.tags)return null;e.attributes=e.attributes||{};var d={_originalAttrs:e.attributes,label:e.attributes.Text||"",color:g(e.attributes.color),points:e.tags.map(function(a,c){a.attributes=a.attributes||
{};var d=(b.attributes.type===z.GAUGE||b.attributes.type===z.WAFFLE)&&c===e.tags.length-1;if((c=(c=(c=a.tags&&a.tags[0])&&c.attributes&&c.attributes.f)&&y.getCalculatorOrScriptFieldInfo(c,h))||d){d&&(c=null);c&&c.isMissing&&(d=a.attributes.Text,!d&&h.variableProvider.isPlayerOnly&&(d=(d=h.variableProvider.toCalculator(c.templateName))&&d.variable.alias),c.alias=d?d+" ("+w.missingVariable+")":w.missingVariable);var d=(d=a.attributes.CaptionField)&&y.getCalculatorOrScriptFieldInfo(d,h),f=l.queryJson(a,
"pointIcon")[0],f=f&&h.parsers.getParser("field").parseField(f.tags[0],f,h);return J.createChartPoint(c,a.attributes.Text||"",g(a.attributes.color),f,d)}}).filter(function(a){return!!a})};if(z.isLineLike(b.attributes.type)){d.lineStyle=v.isSupported(e.attributes.lineStyle)?e.attributes.lineStyle:void 0;d.lineMarker=I.isSupported(e.attributes.lineMarker)?e.attributes.lineMarker:void 0;d.lineMarkerColor=g(e.attributes.lineMarkerColor);d.lineMarkerSize=c(e.attributes.lineMarkerSize,k.ptToPx);d.lineMarkerFillColor=
g(e.attributes.lineMarkerFillColor);d.fillColor=g(e.attributes.fillColor);var a=l.queryJson(e,"multiFeatureLineStyles")[0];a&&(d.multiFeatureLineStyles=[],a.tags.forEach(function(a){var b={};a.attributes&&(b.color=g(a.attributes.color),b.lineStyle=v.isSupported(a.attributes.lineStyle)?a.attributes.lineStyle:void 0,b.lineMarker=I.isSupported(a.attributes.lineMarker)?a.attributes.lineMarker:void 0,b.lineMarkerColor=g(a.attributes.lineMarkerColor),b.lineMarkerSize=c(a.attributes.lineMarkerSize,k.ptToPx),
b.lineMarkerFillColor=g(a.attributes.lineMarkerFillColor),b.lineThickness=c(a.attributes.lineThickness,k.ptToPx),b.fillColor=g(a.attributes.fillColor));d.multiFeatureLineStyles.push(b)}))}return d}).filter(function(b){return b&&b.points&&!!b.points.length})}function M(b,h,e){var d={gridLines:b.gridlines,gridLinesCentered:b.gridlinesCentered,gridLinesOpacity:c(b.gridlinesOpacity),gridLinesColor:g(b.gridlinesColor),gridLinesThickness:E(b.gridlinesThickness,e),gridLinesStyle:v.isSupported(b.gridlinesStyle)?
b.gridlinesStyle:void 0,gridStripes:b.gridStripes,gridStripesColor:g(b.gridStripesColor),gridStripesColorAlt:g(b.gridStripesColorAlt)};h&&x.mixin(d,{hideBaseLine:void 0!==b.baseLine?!b.baseLine:b.hideBaseLine,baseLineColor:g(b.baseLineColor),baseLineOpacity:c(b.baseLineOpacity),baseLineThickness:E(b.baseLineThickness,e),baseLineStyle:v.isSupported(b.baseLineStyle)?b.baseLineStyle:void 0,baseLineValue:c(b.baseLineValue)});return d}function aa(b){var l=T.toSupportedValue(b.dataLabels),e=b.dataLabelsShowLabelUnder,
d;d=b.CustomPercentFormat||b.CustomValueFormat;"string"!==typeof d?d=0:(d=d.replace("%",""),d="0"===d?0:d.replace("0.","").length);return{dataLabels:l,dataLabelsShowLabelUnder:e,dataLabelsDecimals:d,dataLabelsStyle:h(b.dataLabelsStyle),dataLabelsLabelStyle:b.dataLabelsLabelStyle?h(b.dataLabelsLabelStyle):h(b.dataLabelsStyle),dataLabelsAltColor:g(b.dataLabelsAltColor),dataLabelsEnableAltColor:b.dataLabelsEnableAltColor,dataLabelsInside:b.dataLabelsInside,dataLabelsStackedInColumns:b.dataLabelsStackedInColumns,
dataLabelsHorizontalAlign:b.dataLabelsHorizontalAlign,dataLabelsVerticalAlign:b.dataLabelsVerticalAlign,dataLabelsShowValuePercentSymbol:b.dataLabelsShowValuePercentSymbol,dataLabelsShowValueCurrencySymbol:b.dataLabelsShowValueCurrencySymbol,dataLabelsAngle:c(b.dataLabelsAngle),dataLabelsMaxWidth:c(b.dataLabelsMaxWidth,k.ptToPx)}}function N(b,c){b=l.queryTopJson(b,"templateValueFields")[0];if(!b)return null;b=l.queryTopJson(b,"d");if(!b||!b.length)return null;var e={};b.forEach(function(b){var a=
y.getCalculatorOrScriptFieldInfo(b.attributes.f,c);(e[b.attributes.templateField]=e[b.attributes.templateField]||{})[b.attributes.pointField]=a});return e}function ba(b){return(b=l.queryTopJson(b,"BackImage")[0])&&b.tags&&b.tags[0].text?R.base64DataToDataURL(b.tags[0].text):null}function g(b){b&&"string"===typeof b&&(b=6===b.length&&-1===b.indexOf("#")?"#"+b:G.toCSSColor(b));return b}w=w.geoenrichment.dijit.ReportPlayer.ReportPlayer;return{portalToEditor:function(b,w,e){if(!z.isSupported(b.attributes.type))throw Error("Chart type is not supported.");
var d=Z(b,e);if(!d.length)return null;var a=b.attributes,f=l.queryTopJson(b,"chartTitle")[0],y=l.queryTopJson(b,"legend")[0],t=l.queryTopJson(b,"xAxis")[0],u=l.queryTopJson(b,"yAxis")[0],B=l.queryTopJson(b,"chartIcons")[0],C=l.queryTopJson(b,"floatingIcons")[0],D=l.queryTopJson(b,"floatingTexts")[0],p=l.queryTopJson(b,"trigger")[0],O=l.queryTopJson(b,"filter")[0],r=l.queryTopJson(b,"tooltip")[0],m=l.queryTopJson(b,"comparisonInfo")[0],A=l.queryTopJson(b,"dataDrillingPanels")[0];f.attributes=f.attributes||
{};var q=t&&t.attributes,n=u&&u.attributes,P=q,Q=n;e.report.isGraphicReport&&1.3>e.revisionVersion&&(P=n,Q=q);var t=t&&t.tags&&t.tags[0].attributes&&t.tags[0].attributes,u=u&&u.tags&&u.tags[0].attributes&&u.tags[0].attributes,G=ba(b),f={isChart:!0,type:a._type||a.type,isMultiFeatureChart:!!a.isMultiFeatureChart,seriesItems:d,visualProperties:x.mixin({width:k.ptToPx(a.width),height:k.ptToPx(a.height),marginTop:c(a.marginTop,k.ptToPx),marginRight:c(a.marginRight,k.ptToPx),marginBottom:c(a.marginBottom,
k.ptToPx),marginLeft:c(a.marginLeft,k.ptToPx),backgroundColor:g(a.backColor),backgroundColorOpacity:c(a.backgroundColorOpacity),plotAreaOutlineColor:g(a.plotAreaOutlineColor),plotAreaOutlineOpacity:c(a.plotAreaOutlineOpacity),plotAreaOutlineThickness:c(a.plotAreaOutlineThickness,k.ptToPx),plotAreaOutlineStyle:v.isSupported(a.plotAreaOutlineStyle)?a.plotAreaOutlineStyle:void 0,panelBackgroundColor:g(a.panelBackgroundColor),backgroundImageData:G,noTableView:!!a.noTableView,title:{text:f.attributes.text,
align:f.attributes.align&&f.attributes.align.toLowerCase(),style:h(f.attributes.style),verticalShift:c(f.attributes.verticalShift,k.ptToPx)},xAxis:q&&x.mixin({show:"None"!==q.placement,hideLine:void 0!==q.line?!q.line:q.hideLine,showTicks:q.ticks,ticksInside:q.ticksInside||void 0,hideLabels:q.hideLabels||void 0,placement:"OtherSide"===q.placement?"OtherSide":void 0,title:t&&t.text,titleStyle:t&&h(t.style),style:h(q.style),labelsAngle:c(q.labelsAngle),lineColor:g(q.lineColor)},M(P,!1,e)),yAxis:n&&
x.mixin({show:"None"!==n.placement,hideLine:void 0!==n.line?!n.line:n.hideLine,showTicks:n.ticks,ticksInside:n.ticksInside,hideLabels:n.hideLabels||void 0,placement:"OtherSide"===n.placement?"OtherSide":void 0,title:u&&u.text,titleStyle:u&&h(u.style),style:h(n.style),labelsAngle:c(n.labelsAngle),lineColor:g(n.lineColor),showPercentSymbol:n.showPercentSymbol,showCurrencySymbol:n.showCurrencySymbol,showSymbolForAllLabels:n.showSymbolForAllLabels,showValuesAsWeightsInSeries:n.showValuesAsWeightsInSeries,
nonZeroInclusive:n.nonZeroInclusive},M(Q,!0,e)),isStacked:a.isStacked,showValuesAsWeightInStack:a.showValuesAsWeightInStack,columnBarGap:c(a.columnBarGap,k.ptToPx),columnBarOpacity:c(a.columnBarOpacity),renderColumnBarsInOppositeDirections:a.renderColumnBarsInOppositeDirections,showColumnBarBackground:a.showColumnBarBackground,columnBarBackgroundColor:g(a.columnBarBackgroundColor),columnBarBackgroundOpacity:c(a.columnBarBackgroundOpacity),fillOpacity:c(a.fillOpacity),outlineOpacity:c(void 0!==a.columnBarLineOpacity?
a.columnBarLineOpacity:a.outlineOpacity),outlineColor:g(void 0!==a.columnBarLineColor?a.columnBarLineColor:a.outlineColor),outlineThickness:c(void 0!==a.columnBarLineThickness?a.columnBarLineThickness:a.outlineThickness,k.ptToPx),outlineStyle:void 0!==a.columnBarLineStyle?v.isSupported(a.columnBarLineStyle)?a.columnBarLineStyle:void 0:v.isSupported(a.outlineStyle)?a.outlineStyle:void 0,lineOpacity:c(void 0!==a.lineOpacity?a.lineOpacity:a.lineAreaOpacity),fillLineMarkers:void 0!==a.fillLineMarkers?
a.fillLineMarkers:a.fillLineArea,lineMarkersFillOpacity:c(void 0!==a.lineMarkersFillOpacity?a.lineMarkersFillOpacity:a.lineAreaOpacity),fillLineArea:a.fillLineArea,lineAreaOpacity:c(a.lineAreaOpacity),donutHolePercent:c(a.donutHolePercent),donutGap:c(a.donutGap),donutArcPercent:c(a.donutArcPercent),gaugeHolePercent:c(a.gaugeHolePercent),gaugeRangeMin:c(a.gaugeRangeMin),gaugeRangeMax:c(a.gaugeRangeMax),gaugeGap:c(a.gaugeGap),gaugeStartAngle:c(a.gaugeStartAngle),gaugeArcPercent:c(a.gaugeArcPercent),
gaugeLabelStyle:h(a.gaugeLabelStyle),gaugeLabelPlacement:a.gaugeLabelPlacement?V.toSupportedValue(a.gaugeLabelPlacement):void 0,gaugeShowArrow:a.gaugeShowArrow||void 0,gaugeArrowLineColor:g(a.gaugeArrowLineColor),gaugeArrowFillColor:g(a.gaugeArrowFillColor),gaugeConditionalStylingOthers:void 0!==a.gaugeConditionalStylingIgnoreOthers?a.gaugeConditionalStylingIgnoreOthers:a.gaugeConditionalStylingOthers||void 0,gaugeConditionalStylingLabel:a.gaugeConditionalStylingLabel||void 0,gaugeShowFromToLabels:a.gaugeShowFromToLabels||
void 0,gaugeFromLabelStyle:h(a.gaugeFromLabelStyle),gaugeToLabelStyle:h(a.gaugeToLabelStyle),waffleDirection:a.waffleDirection?X.toSupportedValue(a.waffleDirection):void 0,waffleFlowStyle:Y.isSupported(a.waffleFlowStyle)?a.waffleFlowStyle:void 0,waffleShowWholePictures:a.waffleShowWholePictures||void 0,waffleStretchIconsToFill:a.waffleStretchIconsToFill||void 0,waffleRangeMin:c(a.waffleRangeMin),waffleRangeMax:c(a.waffleRangeMax),waffleLabelPlacement:a.waffleLabelPlacement?W.toSupportedValue(a.waffleLabelPlacement):
void 0,waffleLabelOffset:c(a.waffleLabelOffset,k.ptToPx),waffleHideValue:a.waffleHideValue||void 0,waffleHideLabel:a.waffleHideLabel||void 0,waffleShowLabelAbove:a.waffleShowLabelAbove||void 0,waffleValueStyle:h(a.waffleValueStyle),waffleLabelStyle:h(a.waffleLabelStyle),waffleColumnSpace:c(a.waffleColumnSpace,k.ptToPx),waffleRowSpace:c(a.waffleRowSpace,k.ptToPx),waffleConditionalStylingOthers:void 0!==a.waffleConditionalStylingIgnoreOthers?a.waffleConditionalStylingIgnoreOthers:a.waffleConditionalStylingOthers||
void 0,waffleConditionalStylingValue:a.waffleConditionalStylingValue||void 0,waffleConditionalStylingLabel:a.waffleConditionalStylingLabel||void 0,waffleNumIcons:c(a.waffleNumIcons),waffleNumRows:c(a.waffleNumRows),waffleNumColumns:c(a.waffleNumColumns),ringBackgroundColor:g(a.ringBackgroundColor),ringBackgroundOpacity:c(a.ringBackgroundOpacity),columnBarShowWholePictures:void 0!==a.showWholePictures?a.showWholePictures:a.columnBarShowWholePictures,showAxisIcons:a.showAxisIcons,showChartIcons:a.showChartIcons,
sorting:U.isSupported(a.sorting)?a.sorting:void 0},aa(a))},F=c(d[0]._originalAttrs.thickness);z.isColumnBarLike(a.type)?f.visualProperties.columnThickness=1<F?H.LARGE:1>F?H.SMALL:H.MEDIUM:z.isLineLike(a.type)&&(f.visualProperties.lineThickness=E(F,e),d.forEach(function(a){a._originalAttrs.thickness!==F&&(a.lineThickness=c(a._originalAttrs.thickness,k.ptToPx))}));d.forEach(function(a){delete a._originalAttrs});y&&(d=y&&y.attributes||{},f.visualProperties.legend={type:K.toSupportedValue(d.type)},f.visualProperties.legend.type===
K.MIN_MAX?x.mixin(f.visualProperties.legend,{minMax:{placement:L.toSupportedValue(d.placement),placementOffset:c(d.placementOffset),titleStyle:h(d.titleStyle),minVariableLabelStyle:h(d.minVariableLabelStyle),maxVariableLabelStyle:h(d.maxVariableLabelStyle)}}):x.mixin(f.visualProperties.legend,{series:{placement:L.toSupportedValue(d.placement),placementOffset:c(d.placementOffset),hasBorder:d.hasBorder,labelParts:d.labelParts,style:h(d.style),symbol:S.isSupported(d.symbol)?d.symbol:void 0,hideOthers:d.hideOthers||
void 0,showComparison:d.showComparison||void 0}}));1.2>e.revisionVersion&&(void 0!==f.visualProperties.donutGap&&(f.visualProperties.donutGap/=2*Math.PI),void 0!==f.visualProperties.gaugeGap&&(f.visualProperties.gaugeGap/=2*Math.PI));(B=B&&B.tags)&&B.length&&(f.visualProperties.chartIcons=B.map(function(a){return a.tags&&a.tags[0]?e.parsers.getParser("field").parseField(a.tags[0],a,e):null}));(C=C&&C.tags)&&C.length&&(f.visualProperties.floatingIcons=C.map(function(a){return e.parsers.getParser("section").parseTable(a.tags[0],
e)}));(D=D&&D.tags)&&D.length&&(f.visualProperties.floatingTexts=D.map(function(a){return e.parsers.getParser("section").parseTable(a.tags[0],e)}));p&&(f.visualProperties.conditionalStyling=e.parsers.getParser("field").parseFieldTrigger(p));O&&(f.visualProperties.filter=e.parsers.getParser("filter").getFilter(O));r&&(p=r.attributes||{},f.visualProperties.tooltip={title:!!p.title,value:!!p.value,weight:!!p.weight,min:!!p.min,max:!!p.max,avg:!!p.avg,conditional:!!p.conditional,fieldInfo:null,style:h(p.style),
linkStyle:h(p.linkStyle)},p=l.queryTopJson(r,"template")[0],f.visualProperties.tooltip.fieldInfo=p&&e.parsers.getParser("field").parseRichTextTag(p,e),f.visualProperties.tooltip.templateValues=N(r,e));A&&(A=(r=l.queryTopJson(A,"dataDrillingPanel")[0])&&l.queryTopJson(r,"section")[0])&&(f.dataDrillingPanelInfo={sectionJson:e.parsers.getParser("section").parseSection(A,e),templateValues:N(r,e),showOnClick:r.attributes&&r.attributes.showOnClick});m&&(m=m.attributes,r=m.name,A=e.templateJson.metadata.comparisonCalculatorsHash[r])&&
(f.comparisonInfo={calculatorName:r,chartType:m.chartType,color:g(m.color),lineThickness:E(m.lineThickness,e),lineStyle:v.isSupported(m.lineStyle)?m.lineStyle:void 0,lineMarker:I.isSupported(m.lineMarker)?m.lineMarker:void 0,lineMarkerColor:g(m.lineMarkerColor),lineMarkerSize:c(m.lineMarkerSize,k.ptToPx),lineMarkerFillColor:g(m.lineMarkerFillColor),levels:A.levels,defaultLevel:m.defaultLevel});m={};w.attributes&&w.attributes.style&&x.mixin(m,k.parseStyleString(w.attributes.style));k.ptToPxObj(m);
J.provideDefaultValueForMissing(f,{font:m});e.postProcessChartJson(b,f);return f}}});