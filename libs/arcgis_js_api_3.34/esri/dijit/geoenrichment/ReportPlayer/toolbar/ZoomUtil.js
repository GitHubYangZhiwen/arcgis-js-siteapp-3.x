// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/toolbar/ZoomUtil",["dojo/i18n!esri/nls/jsapi"],function(d){var b={};d=d.geoenrichment.dijit.ReportPlayer.PlayerToolbar;b.FIT_PAGE="fitPage";b.FIT_PAGE_WIDTH="fitPageWidth";b.FIT_PAGE_HEIGHT="fitPageHeight";b.getOptions=function(){var c=[{value:b.FIT_PAGE,label:d.fitPage},{value:b.FIT_PAGE_WIDTH,label:d.fitPageWidth},{value:b.FIT_PAGE_HEIGHT,label:d.fitPageHeight}];[{value:400,label:"400%"},{value:200,label:"200%"},{value:150,label:"150%"},{value:125,label:"125%"},
{value:100,label:"100%"},{value:90,label:"90%"},{value:80,label:"80%"},{value:70,label:"70%"},{value:60,label:"60%"},{value:50,label:"50%"}].forEach(function(a){c.push({isCustom:!0,value:-1,label:""});c.push(a)});c.push({isCustom:!0,value:-1,label:""});return c};b.getClosestZoomAndUpdateOptions=function(c,a){a.forEach(function(b){b.isCustom&&(b.value=-1,b.hidden=!0)});var b=[];a.forEach(function(a){a.isCustom||"number"!==typeof a.value||b.push({option:a,value:a.value,score:c<a.value?c/a.value:a.value/
c})});b.sort(function(a,b){return b.score-a.score});var d=b[0];if(1===d.score)return d.value;var e=a.indexOf(d.option);a=a[e+(c>d.value?-1:1)];a.value=c;a.label=Math.round(c)+"%";a.hidden=!1;return a.value};return b});