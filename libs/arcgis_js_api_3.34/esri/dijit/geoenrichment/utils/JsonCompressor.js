// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/JsonCompressor",[],function(){return{compress:function(m,g){var d=[],b=JSON.stringify(m);m=b.length;b=g?g(b):b;b=unescape(encodeURIComponent(b));for(g=0;b;){for(var c={},l=(b+"").split(""),e=[],h=void 0,a=l[0],k=256,n=void 0,f=1;f<l.length;f++)if(h=l[f],null!=c["_"+a+h])a+=h;else if(e.push(1<a.length?c["_"+a]:a.charCodeAt(0)),c["_"+a+h]=k,k++,a=h,55E3<k){n=b.substr(f+1);break}e.push(1<a.length?c["_"+a]:a.charCodeAt(0));for(f=0;f<e.length;f++)e[f]=String.fromCharCode(e[f]);
b=[e.join(""),n];g+=b[0].length;d.push(b[0]);b=b[1]}return{method:"lzw",compression:Number((g/m).toFixed(2)),src:d}},decompress:function(m){var g="";m.src.forEach(function(d){var b={};d=(d+"").split("");for(var c=d[0],l=c,e=[c],h=256,a,k=1;k<d.length;k++)a=d[k].charCodeAt(0),a=256>a?d[k]:b["_"+a]?b["_"+a]:l+c,e.push(a),c=a.charAt(0),b["_"+h]=l+c,h++,l=a;g+=e.join("")});return JSON.parse(decodeURIComponent(escape(g)))},getDecompressMinified:function(){return'function decompress(r){var e\x3d"";return r.src.forEach(function(r){for(var o,c\x3d{},n\x3d(r+"").split(""),a\x3dn[0],t\x3da,s\x3d[a],p\x3d256,h\x3d1;h\x3cn.length;h++){var d\x3dn[h].charCodeAt(0);o\x3dd\x3c256?n[h]:c["_"+d]?c["_"+d]:t+a,s.push(o),a\x3do.charAt(0),c["_"+p]\x3dt+a,p++,t\x3do}e+\x3ds.join("")}),JSON.parse(decodeURIComponent(escape(e)))}'}}});