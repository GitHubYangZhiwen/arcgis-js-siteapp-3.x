// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/GlyphMosaic","require exports dojo/has ../../core/promiseUtils ./Rect ./RectangleBinPack ../webgl/Texture".split(" "),function(F,G,y,C,D,B,E){var w;y("stable-symbol-rendering")&&(w=new Set);return function(){function m(c,e,b){this.height=this.width=0;this._dirties=[];this._glyphData=[];this._currentPage=0;this._glyphIndex={};this._textures=[];this._rangePromises=new Map;(0>=c||0>=e)&&console.error("Glyph mosaic width and height must be greater than zero!");
this.width=c;this.height=e;this._glyphSource=b;this._binPack=new B(c-4,e-4);this._glyphData.push(new Uint8Array(c*e));this._dirties.push(!0);this._textures.push(void 0)}m.prototype.getGlyphItems=function(c,e,b){var a=this,h=[],m=this._glyphSource,n=new Set;c=1/256;for(var k=0;k<b.length;k++)n.add(Math.floor(b[k]*c));var f=[];n.forEach(function(b){if(256>=b){var d=e+b;a._rangePromises.has(d)?f.push(a._rangePromises.get(d)):(b=m.getRange(e,b).always(function(){a._rangePromises["delete"](d)}),a._rangePromises.set(d,
b),f.push(b))}});return C.all(f).then(function(c){c=a._glyphIndex[e];c||(c={},a._glyphIndex[e]=c);var d;if(y("stable-symbol-rendering")){w.clear();for(var l=0;l<b.length;l++)d=b[l],w.add(d);var f=[];n.forEach(function(a){f.push(a)});f.sort();d=[];for(l=0;l<f.length;l++)for(var k=f[l],g=0;256>g;++g)d.push(256*k+g)}else d=b;l=0;for(k=d;l<k.length;l++)if(d=k[l],g=c[d]){if(!y("stable-symbol-rendering")||w.has(d))h[d]={rect:g.rect,metrics:g.metrics,page:g.page}}else{var q=m.getGlyph(e,d);if(q&&q.metrics){var g=
q.metrics,p=void 0;if(0===g.width)p=new D(0,0,0,0);else{var u=g.width+6,x=g.height+6,v=u%4?4-u%4:4,r=x%4?4-x%4:4;1===v&&(v=5);1===r&&(r=5);p=a._binPack.allocate(u+v,x+r);p.isEmpty&&(a._dirties[a._currentPage]||(a._glyphData[a._currentPage]=null),a._currentPage=a._glyphData.length,a._glyphData.push(new Uint8Array(a.width*a.height)),a._dirties.push(!0),a._textures.push(void 0),a._binPack=new B(a.width-4,a.height-4),p=a._binPack.allocate(u+v,x+r));var v=a._glyphData[a._currentPage],q=q.bitmap,t=r=void 0;
if(q)for(var z=0;z<x;z++)for(var r=u*z,t=a.width*(p.y+z+1)+p.x,A=0;A<u;A++)v[t+A+1]=q[r+A]}c[d]={rect:p,metrics:g,tileIDs:null,page:a._currentPage};if(!y("stable-symbol-rendering")||w.has(d))h[d]={rect:p,metrics:g,page:a._currentPage};a._dirties[a._currentPage]=!0}}return h})};m.prototype.removeGlyphs=function(c){for(var e in this._glyphIndex){var b=this._glyphIndex[e];if(b){var a=void 0,h;for(h in b)if(a=b[h],a.tileIDs["delete"](c),0===a.tileIDs.size){for(var m=this._glyphData[a.page],n=a.rect,k=
void 0,f=void 0,t=0;t<n.height;t++)for(k=this.width*(n.y+t)+n.x,f=0;f<n.width;f++)m[k+f]=0;delete b[h];this._dirties[a.page]=!0}}}};m.prototype.bind=function(c,e,b,a){void 0===a&&(a=0);this._textures[b]||(this._textures[b]=new E(c,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));var h=this._textures[b];h.setSamplingMode(e);this._dirties[b]&&h.setData(this._glyphData[b]);c.bindTexture(h,a);this._dirties[b]=!1};m.prototype.dispose=function(){this._binPack=
null;for(var c=0,e=this._textures;c<e.length;c++){var b=e[c];b&&b.dispose()}this._textures.length=0};return m}()});