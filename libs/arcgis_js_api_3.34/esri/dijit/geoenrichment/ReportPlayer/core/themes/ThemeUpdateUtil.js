// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/themes/ThemeUpdateUtil",["dojo/_base/lang","esri/dijit/geoenrichment/utils/ObjectUtil","./ThemeLibrary","./ThemeUtil"],function(b,e,f,c){return{populateMissingStyles:function(a){if(a){a.table&&a.table.overrideStyles||(a.table={overrideStyles:b.mixin({},a.table)});a.icon||(a.icon=b.clone(a.infographic.staticInfographic.icon),a.highlightedIcon=b.clone(a.infographic.staticInfographic.highlightedIcon));a.chart.icon||(a.chart.icon=b.clone(a.infographic.staticInfographic.icon));
a.chart.xAxis.lineColor||(a.chart.xAxis.lineColor=a.chart.xAxis.axisStyle.color,a.chart.yAxis.lineColor=a.chart.yAxis.axisStyle.color);var g=c.getThemeColors(a),h=a.chart.colors.slice(),k=a.chart.colors3series&&a.chart.colors3series.slice(),d=f.getDefaultTheme({defaultFontFamilty:a.document.fontFamily,defaultFontSize:a.document.fontSize});c.applyThemeColorsToTheme({theme:d,colors:g,chartColors:h,colors3series:k});e.populateObject(a,d,!1)}}}});