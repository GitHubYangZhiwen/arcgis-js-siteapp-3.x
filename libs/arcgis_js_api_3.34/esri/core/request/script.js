// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/core/request/iframe.html":'\x3c!DOCTYPE html\x3e\r\n\x3chtml\x3e\r\n\x3chead\x3e\r\n  \x3cmeta http-equiv\x3d"Content-Security-Policy" content\x3d"default-src \'none\'; script-src * \'unsafe-inline\'"\x3e\r\n\r\n  \x3cscript\x3e\r\n    var dojoConfig \x3d {\r\n      async: true,\r\n      baseUrl: "../../../dojo/",\r\n      has: {\r\n        "csp-restrictions": true,\r\n        "dojo-preload-i18n-Api": false\r\n      }\r\n    };\r\n  \x3c/script\x3e\r\n  \x3c!--\r\n  This src is relative to this page and assumes dojo is a sibling to esri.\r\n  It is updated when this file is set as the iframe\'s `srcdoc` value.\r\n  --\x3e\r\n  \x3cscript src\x3d"../../../dojo/dojo.js"\x3e\x3c/script\x3e\r\n\r\n  \x3cscript\x3e\r\n    function windowMessageHandler(event) {\r\n      window.removeEventListener("message", windowMessageHandler);\r\n\r\n      var port \x3d event.ports[0];\r\n\r\n      require([\r\n        "dojo/request/script"\r\n      ], function(script) {\r\n        port.postMessage("ready");\r\n\r\n        port.addEventListener("message", function(event) {\r\n          var data \x3d event.data;\r\n          script.get(data.url, data.options)\r\n              .then(function(response) {\r\n                port.postMessage({\r\n                  id: data.id,\r\n                  response: response\r\n                });\r\n              })\r\n              .otherwise(function(error) {\r\n                port.postMessage({\r\n                  id: data.id,\r\n                  isError: true,\r\n                  message: error.message\r\n                });\r\n              });\r\n        });\r\n        port.start();\r\n      });\r\n    }\r\n\r\n    window.addEventListener("message", windowMessageHandler);\r\n  \x3c/script\x3e\r\n\x3c/head\x3e\r\n\x3cbody\x3e\r\n\x3c/body\x3e\r\n\x3c/html\x3e\r\n'}});
define("esri/core/request/script","require exports dojo/Deferred dojo/request/script dojo/text!./iframe.html ../sniff".split(" "),function(k,l,p,q,r,m){function t(){var a=document.createElement("iframe");a.name="esri_core_jsonp_iframe";a.style.display="none";a.setAttribute("sandbox","allow-scripts");if(!m("ff")&&"srcdoc"in a){var b=k.toUrl("dojo/dojo.js"),c=r.replace("../../../dojo/dojo.js",b),b=b.slice(0,-7),c=c.replace("../../../dojo/",b);a.srcdoc=c}else c=k.toUrl("./iframe.html"),"http:"===window.location.protocol&&
0===c.indexOf("https:")&&(c=c.replace("https:","http:")),a.src=c;document.body.appendChild(a);return a}function u(){var a=new MessageChannel;a.port1.addEventListener("message",v);a.port1.start();return a}function v(a){var b=a.data;if("ready"===b){for(var b=0,c=d;b<c.length;b++)a=c[b],n(a,g);d=null}else if(a=e[b.id])delete e[b.id],b.isError?a.dfd.reject(Error(b.message)):a.dfd.resolve(b.response)}function w(a,b){a.addEventListener("load",function(){a.contentWindow.postMessage("init","*",[b.port2])})}
function n(a,b){e[a.message.id]=a;b.port1.postMessage(a.message)}Object.defineProperty(l,"__esModule",{value:!0});var h,g,x=0,d=[],e={};l.get=function(a,b){if(!m("esri-script-sandbox"))return q.get(a,b);var c=null;b&&(c={jsonp:b.jsonp,preventCache:b.preventCache,query:b.query,timeout:b.timeout});b=new p(function(){if(d){var a=d.indexOf(f);-1<a&&d.splice(a,1)}else f.message.id in e&&delete e[f.message.id]});var f={dfd:b,message:{id:"id"+(++x+Math.random()),url:a,options:c}};h||(h=t(),g=u(),w(h,g));
d?d.push(f):n(f,g);return b.promise}});