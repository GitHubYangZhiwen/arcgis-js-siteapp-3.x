// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/sorting/GridRowStyler",[],function(){var e={_getCellStyle:function(a,c){a.style=a.style||{};a=a.style.fields=a.style.fields||{};return a[c.field]=a[c.field]||{}},_getCellStyleState:function(a){return{backgroundColor:a.backgroundColor,overrideStyle:a.overrideStyle,key:a.backgroundColor+"."+a.overrideStyle}},getStyleInfo:function(a,c){function b(d){var a;return c.some(function(b){b=e._getCellStyle(d,b);b=e._getCellStyleState(b);if(a&&
a.key!==b.key)return!0;a=b})?!1:a}e.resetStyling(a,c);var d=[];return a.some(function(a){var c=b(a);if(!c)return!0;if(d.length)if(1===d.length){if(d[0].key===c.key)return!0;d.push(c)}else{if((c.backgroundColor||c.overrideStyle)&&!d.some(function(a){return a.key===c.key}))return!0}else d.push(c)})?null:{states:d}},setAlternatingColors:function(a,c,b,d){e.resetStyling(a,c);b&&b.states.length&&(1===b.states.length&&"Default"===b.states[0].overrideStyle&&b.states.push({overrideStyle:"AlternatingRow"}),
1===b.states.length&&"AlternatingRow"===b.states[0].overrideStyle&&b.states.unshift({overrideStyle:"Default"}),a.forEach(function(a,g){var f=g%2?b.states[1]:b.states[0];c.forEach(function(b){b=e._getCellStyle(a,b);d&&d.forceOverrideOriginal?b.backgroundColor=f.backgroundColor:(b.__isStyled=!0,b.__originalBackgroundColor=b.backgroundColor,b.backgroundColor=f.backgroundColor,b.__originalOverrideStyle=b.overrideStyle);b.overrideStyle=f.overrideStyle})}))},resetStyling:function(a,c){a.forEach(function(b){c.forEach(function(a){a=
e._getCellStyle(b,a);a.__isStyled&&(delete a.__isStyled,a.backgroundColor=a.__originalBackgroundColor,delete a.__originalBackgroundColor,a.overrideStyle=a.__originalOverrideStyle,delete a.__originalOverrideStyle)})})}};return e});