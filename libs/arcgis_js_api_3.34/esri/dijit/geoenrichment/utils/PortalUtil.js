// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/PortalUtil",["dojo/_base/lang","esri/kernel","esri/request","./requests/EveryRequest"],function(l,g,m,n){var f={query:function(e,a,c,b){a=a||{};c=c||"results";b=b||100;var h="number"===typeof a.num?a.num:-1,k=a.num=0>h||a.num>b?b:a.num;a.start=a.start||1;return e(a).then(function(b){var g=b[c],d=b.total-a.start+1;0<=h&&d>h&&(d=h);d-=k;if(0>=d)return b;a.num=k;for(var f=[];0<d;)a.start+=k,f.push(e.bind(null,l.mixin({},a))),d-=k;return n(f,{stopOnError:!0}).then(function(a){a.forEach(function(a){Array.prototype.push.apply(g,
a[c])});return b})})},queryCommon:function(e,a){return f.query(function(c){var b=g.id.findCredential(e)||g.id.credentials[0];return m({url:e,content:l.mixin({f:"json",token:b?b.token:void 0},a,c),handleAs:"json"},{usePost:!0})}).then(function(a){return a.results})}};return f});