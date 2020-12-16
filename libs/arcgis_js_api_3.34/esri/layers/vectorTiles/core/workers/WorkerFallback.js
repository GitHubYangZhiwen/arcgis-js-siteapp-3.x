// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/workers/WorkerFallback",["require","exports","dojo/has","../global","./utils"],function(h,q,n,c,f){var p=function(){return function(){var b=this,a=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(function(e){b[e]=function(){for(var d=[],b=0;b<arguments.length;b++)d[b]=arguments[b];return a[e].apply(a,d)}})}}(),k=c.MutationObserver||c.WebKitMutationObserver,l=function(){var b;if(c.process&&c.process.nextTick)b=
function(a){c.process.nextTick(a)};else if(c.Promise)b=function(a){c.Promise.resolve().then(a)};else if(k){var a=[],e=document.createElement("div");(new k(function(){for(;0<a.length;)a.shift()()})).observe(e,{attributes:!0});b=function(b){a.push(b);e.setAttribute("queueStatus","1")}}return b}();return function(){function b(){this._dispatcher=new p;this._isInitialized=!1;this._workerPostMessage({type:f.MessageType.HANDSHAKE})}b.prototype.terminate=function(){};Object.defineProperty(b.prototype,"onmessage",
{get:function(){return this._onmessageHandler},set:function(a){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler);(this._onmessageHandler=a)&&this.addEventListener("message",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"onerror",{get:function(){return this._onerrorHandler},set:function(a){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler);(this._onerrorHandler=a)&&this.addEventListener("error",a)},enumerable:!0,configurable:!0});
b.prototype.postMessage=function(a,b){var e=this;l(function(){e._workerMessageHandler(new MessageEvent("message",{data:a}))})};b.prototype.dispatchEvent=function(a){return this._dispatcher.dispatchEvent(a)};b.prototype.addEventListener=function(a,b,d){this._dispatcher.addEventListener(a,b,d)};b.prototype.removeEventListener=function(a,b,d){this._dispatcher.removeEventListener(a,b,d)};b.prototype._workerPostMessage=function(a,b){var d=this;l(function(){d.dispatchEvent(new MessageEvent("message",{data:a}))})};
b.prototype._workerMessageHandler=function(a){var b=this;if(a=f.receiveMessage(a)){var d=a.jobId;switch(a.type){case f.MessageType.CONFIGURE:this._isInitialized||this._workerPostMessage({type:f.MessageType.CONFIGURED});break;case f.MessageType.OPEN:a=a.modulePath,n("esri-webpack")?h(["esri/core/workers/RemoteClient","esri/views/vectorTiles/WorkerTileHandler","esri/views/2d/layers/features/Pipeline","esri/views/3d/layers/PointCloudWorker","esri/views/3d/layers/SceneLayerWorker","esri/layers/graphics/sources/support/CSVSourceWorker",
"esri/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker",a],function(a,g,c,e,h,k,l,m){switch(m){case "esri/views/vectorTiles/WorkerTileHandler":break;case "esri/views/2d/layers/features/Pipeline":g=c;break;case "esri/views/3d/layers/PointCloudWorker":g=e;break;case "esri/views/3d/layers/SceneLayerWorker":g=h;break;case "esri/layers/graphics/sources/support/CSVSourceWorker":g=k;break;case "esri/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker":g=l;break;default:g=m}a=a.connect(g);
b._workerPostMessage({type:f.MessageType.OPENED,jobId:d,data:a})}):h(["./RemoteClient",a],function(a,c){a=a.connect(c);b._workerPostMessage({type:f.MessageType.OPENED,jobId:d,data:a})})}}};return b}()});