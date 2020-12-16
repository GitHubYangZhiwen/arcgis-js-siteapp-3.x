// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/UrlUtil",["dojo/_base/url","esri/config","esri/kernel","esri/urlUtils","esri/arcgis/utils"],function(h,e,f,g,k){var d={getDomain:function(a){if("string"!==typeof a)return null;a=a.replace(/^(http:\/\/|https:\/\/)/i,"");var b=a.indexOf("/");return 0>b?a:a.substr(0,b)},getPortalUrl:function(a){if("string"!==typeof a)return null;a=a.replace(/\?.*$/,"");var b=a.match(/^(.+)\/sharing(\/|$)/i);return b||(b=a.match(/^(.+)\/home$/i))?b[1]:(b=a.match(/^(.+)\/portal(\/|$)/i))?
b[1]+"/portal":a},getProxyUrl:function(a){var b=e.defaults.io.proxyUrl;b&&!/^http/i.test(b)&&(b=g.getAbsoluteUrl(b));b&&a&&(b=d.toHttpsUrl(b));return b},registerCORS:function(a){(a=d.getDomain(a))&&-1==e.defaults.io.corsEnabledServers.indexOf(a)&&e.defaults.io.corsEnabledServers.push(a);d._fixCORS()},_fixCORS:function(){e.defaults.io.corsEnabledServers=e.defaults.io.corsEnabledServers.filter(function(a){return a.indexOf&&0===a.indexOf("null://")?(console.log("WARNING: incorrect CORS URL detected: "+
a),!1):!0})},indexOfQuery:function(a){var b=a.indexOf("?");0<=b&&(a=a.substr(b+1),/^(http:\/\/|https:\/\/)/i.test(a)&&(a=a.indexOf("?"),b=0<=a?b+1+a:-1));return b},removeQuery:function(a){var b=d.indexOfQuery(a);return 0>b?a:a.substr(0,b)},addQueryPart:function(a,b){var c=0>d.indexOfQuery(a)?"?":"\x26";return a+c+b},getVariableValue:function(a,b){if(a&&"string"===typeof b){var c=g.urlToObject(a);if(c.query){var d={};Object.keys(c.query).forEach(function(a){d[a.toLowerCase()]=c.query[a]});return d[b.toLowerCase()]}}},
addUrlVariable:function(a,b,c){b=encodeURIComponent(b);c=encodeURIComponent(c);return d.addQueryPart(a,b+"\x3d"+c)},securePortsMap:{80:"443",8080:"8443"},toHttpUrl:function(a){return!a||/^http/i.test(a)?a:"http://"+a},toHttpsUrl:function(a){a&&(a=d.toHttpUrl(a));if(!a||!/^http:\/\//i.test(a))return a;var b=new h(a);a=a.replace(/^http/i,"https");var c=d.securePortsMap[b.port];c&&(a=a.replace(":"+b.port,":"+c));return a},combine:function(a,b){"number"===typeof b&&(b+="");if(b){if(/^(http:\/\/|https:\/\/)/i.test(b)||
!a)return b;"/"!=b.charAt(0)&&(b="/"+b);if(1==b.length)return a;var c=a.length-1;"/"==a.charAt(c)&&(a=a.substr(0,c));var e=g.urlToObject(a);a=d.removeQuery(a);c=a.length-b.length;0<=c&&a.substr(c).toLowerCase()==b.toLowerCase()&&(a=a.substr(0,c));a+=b;for(var f in e.query)d.addQueryPart(a,e.query[f])}return a},combineMulti:function(a){for(var b=a[0],c=1;c<a.length;c++)b=d.combine(b,a[c]);return b},openUrl:function(a,b){if(b)return window.open(a,"_blank");b=window.open();b.opener=null;b.referrer=null;
b.location=a;return b},isPageRunOnWebService:function(){return/^http/i.test(window.location.protocol)},getToken:function(a){return(a=a&&f.id.findCredential(a)||f.id.credentials[0])&&a.token},setArcgisUrl:function(a){a&&(k.arcgisUrl=d.combine(a,"/sharing/rest/content/items"))}};return d});