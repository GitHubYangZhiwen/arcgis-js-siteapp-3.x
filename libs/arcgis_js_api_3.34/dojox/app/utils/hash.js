//>>built
define("dojox/app/utils/hash",["dojo/_base/lang"],function(h){var f={getParams:function(a){var b;if(a&&a.length){for(;0<a.indexOf("(");){var c=a.indexOf("("),d=a.indexOf(")"),c=a.substring(c,d+1);b||(b={});b=f.getParamObj(b,c);d=c.substring(1,c.indexOf("\x26"));a=a.replace(c,d)}a=a.split("\x26");for(c=0;c<a.length;c++){var e=a[c].split("\x3d"),d=e[0],e=encodeURIComponent(e[1]||"");d&&e&&(b||(b={}),b[d]=e)}}return b},getParamObj:function(a,b){var c,d=b.substring(1,b.indexOf("\x26"));b=b.substring(b.indexOf("\x26"),
b.length-1).split("\x26");for(var e=0;e<b.length;e++){var g=b[e].split("\x3d"),f=g[0],g=encodeURIComponent(g[1]||"");f&&g&&(c||(c={}),c[f]=g)}a[d]=c;return a},buildWithParams:function(a,b){"#"!==a.charAt(0)&&(a="#"+a);for(var c in b){var d=b[c];h.isObject(d)?a=f.addViewParams(a,c,d):c&&null!=d&&(a=a+"\x26"+c+"\x3d"+b[c])}return a},addViewParams:function(a,b,c){"#"!==a.charAt(0)&&(a="#"+a);var d=a.indexOf(b);if(0<d&&!("#"!=a.charAt(d-1)&&"+"!=a.charAt(d-1)||"\x26"!=a.charAt(d+b.length)&&"+"!=a.charAt(d+
b.length)&&"-"!=a.charAt(d+b.length))){var e=a.substring(d-1,d+b.length+1);c=f.getParamString(c);b=a.charAt(d-1)+"("+b+c+")"+a.charAt(d+b.length);a=a.replace(e,b)}return a},getParamString:function(a){var b="",c;for(c in a){var d=a[c];c&&null!=d&&(b=b+"\x26"+c+"\x3d"+a[c])}return b},getTarget:function(a,b){for(b||(b="");0<a.indexOf("(");){var c=a.indexOf("("),d=a.indexOf(")"),c=a.substring(c,d+1),d=c.substring(1,c.indexOf("\x26"));a=a.replace(c,d)}return((a&&"#"==a.charAt(0)?a.substr(1):a)||b).split("\x26")[0]}};
return f});