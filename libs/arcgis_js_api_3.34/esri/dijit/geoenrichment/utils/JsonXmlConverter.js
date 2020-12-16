// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/JsonXmlConverter",["dojo/_base/declare","./RegExpUtil"],function(q,m){function r(a,b,d,c){return n(d,c)+"\x3c"+a+(b?p(b):"")+"\x3e"+(c?"\n":"")}function t(a,b,d){return n(b,d)+"\x3c/"+a+"\x3e"+(d?"\n":"")}function u(a,b,d,c){return n(d,c)+"\x3c"+a+(b?p(b):"")+" /\x3e"+(c?"\n":"")}function v(a,b,d){a=m.encodeXML(a,!1);return n(b,d)+a+(d?"\n":"")}function p(a){var b="",d;for(d in a){var c=a[d];Array.isArray(c)&&(c=c.join(";"));void 0===c||null===c||""===c||"number"===
typeof c&&isNaN(c)||(b+=" "+d+'\x3d"'+m.encodeXML(c,!0)+'"')}return b}function n(a,b){if(!b)return"";b="";for(var d=0;d<a;d++)b+="     ";return b}return q(null,{parseJson:function(a,b){function d(a,b){a.text||"#text"===a.name?f+=v(a.text,b,c):a.name&&(a.tags&&a.tags.length?(f+=r(a.name,a.attributes,b,c),a.tags&&a.tags.forEach(function(a){d(a,b+1)}),f+=t(a.name,b,c)):f+=u(a.name,a.attributes,b,c))}var c=b&&b.prettify,f="";b&&b.addDocumentOptions&&(f+='\x3c?xml version\x3d"1.0" encoding\x3d"utf-8"?\x3e');
d(a,0);return f=decodeURIComponent(encodeURIComponent(f).replace("%19",""))},parseXml:function(a,b){function d(a,h){a.name=h.nodeName;b.saveInnerHTML&&(a.innerHTML=h.innerHTML);if(h.attributes&&h.attributes.length){a.attributes={};for(var g=0;g<h.attributes.length;g++){var k=h.attributes[g],e=k.value;if(!0===e||"true"===e)e=!0;else if(!1===e||"false"===e)e=!1;else if(c&&e){var l=Number(e);isNaN(l)||(e=l)}a.attributes[k.nodeName]=e}}if(h.childNodes&&h.childNodes.length)for(a.tags=[],g=0;g<h.childNodes.length;g++){if(e=
k=h.childNodes[g],"#text"!==e.nodeName||(f?e.nodeValue.trim():e.nodeValue))e={},a.tags.push(e),d(e,k)}else"#text"===h.nodeName&&(delete a.name,a.text=m.decodeXML(h.nodeValue))}b=b||{};var c=b.parseNumbers,f=b.ignoreWhiteSpacedTextNodes,f=void 0===f?!0:f,l={},k;a=(new DOMParser).parseFromString(a,"text/xml").childNodes;for(var g=0;g<a.length;g++)if(1===a[g].nodeType){k=a[g];break}k&&d(l,k);return l},queryTopJson:function(a,b){return this.queryJson(a,b,!0)},queryJson:function(a,b,d){function c(a,k){a.tags&&
a.tags.forEach(function(a){(b.test?b.test(a.name):a.name===b)&&f.push(a);d&&0===k||c(a,k+1)})}var f=[];c(a,0);return f},traverseJson:function(a,b){function d(a){c||(!0===b(a)?c=!0:a.tags&&a.tags.forEach(d))}var c=!1;d(a)},getInnerHTML:function(a){return a.innerHTML?a.innerHTML.trim():this.parseJson(a).replace(/^<[^<]*>/,"").replace(/<\/[^<]*>$/,"").trim()},_IS_RICH_RE:/<.+>.*<\/.+>|<br\s*\/>|<\/br>/,_UNRICH_RE:/<.*?>/g,isRichText:function(a){return(a=String(a))&&this._IS_RICH_RE.test(a)},unrichHTML:function(a){if(!a)return"";
a=m.decodeXML(String(a).trim()).replace(this._UNRICH_RE,"");0===a.indexOf("\x3c")&&-1!==a.indexOf("\x3e")&&(a="");return a}})()});