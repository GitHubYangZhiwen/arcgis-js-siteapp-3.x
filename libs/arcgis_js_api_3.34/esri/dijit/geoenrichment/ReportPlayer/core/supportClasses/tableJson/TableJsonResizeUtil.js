// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/tableJson/TableJsonResizeUtil",[],function(){var f={resizeTableJsonToFitWidth:function(b,d,a){a=a&&a.columnWidths;var e=0;b.data.columns.forEach(function(a){var c=a.style.width;"string"===typeof c&&-1!==c.indexOf("%")&&(c=Number(c.replace("%",""))/100*d,a.style.width=c);e+=c});b.style.width=d;var g=d/e;b.data.columns.forEach(function(a){a.style.width*=g});a&&a.length&&(a.forEach(function(a,c){if(c=b.data.columns[c])c.style.width=a}),
f.resizeTableJsonToFitWidth(b,d))},resizeTableJsonToFitHeight:function(b,d){var a=0;b.data.data.forEach(function(b){a+=b.style.height});var e=d/a;b.data.data.forEach(function(a){a.style.height*=e})}};return f});