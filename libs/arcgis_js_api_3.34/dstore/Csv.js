//>>built
define("dstore/Csv",["dojo/_base/lang","dojo/_base/declare"],function(r,t){function u(d,h){var k={},b=d.length,a;for(a=0;a<b;a++)k[d[a]]=h[a];return k}var v=/^\s*"([\S\s]*)"\s*$/,w=/""/g,x=/"/g;return t(null,{fieldNames:null,delimiter:",",newline:"\r\n",trim:!1,parse:function(d){var h=[];d=d.split(this.newline);var k=this.fieldNames,b=0,a=[],e="",l="",f,g,c,m,n,p,q;n=0;c=d.length;a:for(;n<c;n++)if(r.trim(d[n])){f=d[n].split(this.delimiter);p=0;for(m=f.length;p<m;p++){g=f[p];q=-1;e+=l+g;for(l="";0<=
(q=g.indexOf('"',q+1));)b++;if(0===b%2){if(0<b)if(b=v.exec(e))a.push(b[1].replace(w,'"'));else{console.warn("Csv: discarding row with invalid value: "+e);a=[];e="";b=0;continue a}else a.push(this.trim||!k?r.trim(e):e);e="";b=0}else l=this.delimiter}0===b?(k?h.push(u(k,a)):k=this.fieldNames=a,a=[]):l=this.newline}return h},toCsv:function(d){return this.stringify(this.data,d)},stringify:function(d,h){h=h||{};var k=h.alwaysQuote,b=this.fieldNames,a=this.delimiter,e=this.newline,l="",f,g,c,m;for(f=-1;f<
d.length;f++)for(-1<f&&(l+=e),g=0;g<b.length;g++){c=0>f?b[g]:d[f][b[g]];if(null===c||void 0===c)c="";"string"!==typeof c&&(c=c.toString());m=k||0<=c.indexOf('"')||0<=c.indexOf(a);l+=(0<g?a:"")+(m?'"'+c.replace(x,'""')+'"':c)}h.trailingNewline&&(l+=e);return l}})});