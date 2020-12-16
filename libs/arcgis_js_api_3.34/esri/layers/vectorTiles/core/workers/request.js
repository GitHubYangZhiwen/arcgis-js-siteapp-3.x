// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/workers/request",["require","exports","../tsSupport/assignHelper","../Error","../global"],function(r,l,m,n,q){Object.defineProperty(l,"__esModule",{value:!0});var f;l.execute=function(e,c){void 0===c&&(c={});var a=c.responseType;a?"json"!==a&&"text"!==a&&"blob"!==a&&"array-buffer"!==a&&(a="text"):a="json";return q.invokeStaticMessage("request",{url:e,options:c}).then(function(d){var g=d.data,h,k,b;if(g&&("json"===a||"text"===a||"blob"===a)&&(h=new Blob([g]),"json"===
a||"text"===a)&&(f||(f=new FileReaderSync),k=f.readAsText(h),"json"===a)){try{b=JSON.parse(k||null)}catch(p){throw d=m({},p,{url:e,requestOptions:c}),new n("request:server",p.message,d);}if(b.error)throw d=m({},b.error,{url:e,requestOptions:c}),new n("request:server",b.error.message,d);}switch(a){case "json":break;case "text":b=k;break;case "blob":b=h;break;default:b=g}return{data:b,requestOptions:c,ssl:d.ssl,url:e}})}});