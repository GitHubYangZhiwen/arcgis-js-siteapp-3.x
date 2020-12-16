// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/mesh/templates/WGLLabelTemplate","require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/Logger ../../../../../../core/screenUtils ../../../../../../core/libs/gl-matrix/mat2d ../../../../../../core/libs/gl-matrix/vec2 ../../../../../../geometry/support/centroid ../../color ../../enums ../../fontUtils ../../number ../../TextShaping ../../WGLDisplayRecord ../../collisions/BoundingBox ./WGLMeshTemplate ./WGLTextTemplate".split(" "),
function(q,w,E,F,t,x,r,G,y,z,H,u,v,A,I,J,K){Object.defineProperty(w,"__esModule",{value:!0});var L=F.getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate"),B=24*1.2,C=u.i8888to32(255,255,255,255),D={xOffset:0,yOffset:0,width:0,height:0};q=function(q){function e(b,a,d){var c=q.call(this)||this;c.geometryType=z.WGLGeometryType.LABEL;c.vvFlags=0;c._textBoxVerticalOffset=0;c._textBoxHorizontalOffset=0;c._refTemplate=D;c._xOffset=a.xoffset;c._yOffset=-a.yoffset;c._decorationOffset=H.getFontDecorationOffset(a.font);
var h=a.haloColor;c._color=(a.color&&y.premultiplyAlphaRGBA(a.color))|0;var f=a.yoffset/a.font.size;c._shapingXOffset=a.xoffset/a.font.size*24;c._shapingYOffset=24*f;c._haloColor=(h&&y.premultiplyAlphaRGBA(h))|0;c._haloSize=10*t.pt2px(t.toPt(a.haloSize||0));c._textPropSize=t.pt2px(a.font.size);c._textPropAngle=a.angle*Math.PI/180;c._textPropHJustification="left"===a.horizontalAlignment?0:"right"===a.horizontalAlignment?1:.5;h=0;f=.5;switch(d){case "above-center":case "above-left":case "above-right":h=
-.5;f=0;break;case "below-center":case "below-left":case "below-right":h=.5,f=1}var g=0,e=.5;switch(d){case "above-left":case "center-left":case "below-left":g=-.5;e=1;break;case "above-right":case "center-right":case "below-right":g=.5,e=0}c._textPropHAnchorPlacement=e;c._textPropVAnchorPlacement=f;c._placementDirection=[g,h];c._materialStore=b;c.symbolId=a.id;c.anchor=r.create();return c}E(e,q);e.fromText=function(b,a,d,c,h,f){return new e(b,d,h)};Object.defineProperty(e.prototype,"bounds",{get:function(){return this._bounds},
enumerable:!0,configurable:!0});e.prototype.computeGlyphs=function(b,a){var d=a.text;if(!d||!d.length)return this._computedGlyphs=[],1;b=this._computeShaping(b,240,B,0,this._shapingXOffset,this._shapingYOffset,this._textPropHAnchorPlacement,this._textPropVAnchorPlacement,this._textPropHJustification).getShaping(d,a.rtl);isNaN(this._decorationOffset)||v.addDecoration(b,this._decorationOffset);a=Array(b.length);for(d=0;d<b.length;d++){var c=this._textPropAngle,e=this._textPropSize,f=this._haloSize,
g=this._materialStore.createGlyphMaterial(b[d].glyphMosaicItem,z.WGLGeometryType.LABEL,this.vvFlags);a[d]=K.ComputedGlyph.from(b[d],g,c,e,f)}this._computedGlyphs=a;if(!b||0===b.length)return 2;b=v.getBox(b);a=this._textPropSize/24;b.width*=a;b.height*=a;b.x*=a;b.y*=a;0>this._placementDirection[0]?this._textBoxHorizontalOffset=-b.x-b.width:0<this._placementDirection[0]&&(this._textBoxHorizontalOffset=-b.x);0>this._placementDirection[1]?this._textBoxVerticalOffset=-b.y:0<this._placementDirection[1]&&
(this._textBoxVerticalOffset=-b.y+b.height);d=b.width/2;c=b.height/2;this._textPropAngle&&(a=r.fromValues(-d,-c),d=r.fromValues(d,c),c=x.create(),x.rotate(c,c,this._textPropAngle),r.transformMat2d(a,a,c),r.transformMat2d(d,d,c),c=Math.abs(d[1]-a[1]),b.width=Math.abs(d[0]-a[0]),b.height=c);this._bounds=new I.default(b.x,b.y,b.width+10,b.height+10);b=this._placementDirection[1]*(this._refTemplate.height+this._bounds.height);this._bounds.center[0]=this._placementDirection[0]*(this._refTemplate.width+
this._bounds.width)+this._xOffset;this._bounds.center[1]=b+this._yOffset;return 0};e.prototype.bindReferenceTemplate=function(b){this._refTemplate=b?b:D};e.prototype.computeAnchor=function(b,a){var d=this._refTemplate.xOffset,c=this._refTemplate.yOffset;switch(b){case "esriGeometryPoint":a=a.geometry;b=a.x;a=a.y;this._setAnchor(b,a);break;case "esriGeometryMultipoint":b=a.geometry;a=this._computeAnchorMultipoint(b.points);b=a.x;a=a.y;this._setAnchor(b,a);break;case "esriGeometryPolygon":if(a.centroid){b=
a.centroid;this._setAnchor(b.x,b.y);break}b=a.geometry;a=this._computeAnchorRings(b.rings);if(!a)break;b=a.x;a=a.y;this._setAnchor(b,a);break;case "esriGeometryPolyline":b=a.geometry;a=this._computeAnchorRings(b.paths);if(!a)break;b=a.x;a=a.y;this._setAnchor(b,a);break;default:L.error("Unable to handle geometryType: "+b)}return r.fromValues(this.anchor[0]+d,this.anchor[1]+c)};e.prototype.writeMesh=function(b,a,d,c,e,f,g){d=a.indexVector;e=a.get("geometry");f=a.get("visibility");a=a.get("visibilityRange");
g=this._getOffset(e);var h=u.i8888to32(this._refTemplate.xOffset,-this._refTemplate.yOffset,this._placementDirection[0]*(this._refTemplate.width+10)+this._textBoxHorizontalOffset,this._placementDirection[1]*(this._refTemplate.height+10)+this._textBoxVerticalOffset);this._writeVertices(b,d,e,f,a,c,g,h,this.anchor[0],this.anchor[1])};e.prototype._setAnchor=function(b,a){this.anchor[0]=b;this.anchor[1]=a};e.prototype._computeAnchorMultipoint=function(b){return b.length&&b[0].length?{x:b[0][0],y:b[0][1]}:
null};e.prototype._computeAnchorRings=function(b){if(!b.length||!b[0].length||!b[0][0].length)return null;b=G.ringsCentroid(b,!1);return{x:b[0],y:b[1]}};e.prototype._computeShaping=function(b,a,d,c,e,f,g,n,l){return this._shaping=new v([b],240,B,0,[e,f],g,n,l)};e.prototype._getOffset=function(b){return b.length/5};e.prototype._writeVertices=function(b,a,d,c,e,f,g,n,l,m){var h=this._computedGlyphs,r=u.i1616to32(2*l,2*m);l=u.i1616to32(2*l+1,2*m);m=0;var q=u.i8888to32(0,(f&16711680)>>16,(f&65280)>>8,
f&255);if(this._haloSize)for(var p=0;p<h.length;p++,m+=4){var k=h[p].materialId,t=this._materialStore.get(k),k=new A(f,this.geometryType,k);k.vertexFrom=g+m;k.indexFrom=a.length;this._writeGlyph(k,d,c,e,q,l,this._haloColor,n,h[p],t);this._writeIndices(k,a,g+m);b.push(k)}for(p=0;p<h.length;p++,m+=4)k=h[p].materialId,t=this._materialStore.get(k),k=new A(f,this.geometryType,k),k.vertexFrom=g+m,k.indexFrom=a.length,this._writeGlyph(k,d,c,e,q,r,this._color,n,h[p],t),this._writeIndices(k,a,g+m),b.push(k)};
e.prototype._writeGlyph=function(b,a,d,c,e,f,g,n,l,m){a.push(f);a.push(g);a.push(l.vertexOffsetUpperLeft);a.push(l.texFontSizeUpperLeft);a.push(n);a.push(f);a.push(g);a.push(l.vertexOffsetUpperRight);a.push(l.texFontSizeUpperRight);a.push(n);a.push(f);a.push(g);a.push(l.vertexOffsetLowerLeft);a.push(l.texFontSizeLowerLeft);a.push(n);a.push(f);a.push(g);a.push(l.vertexOffsetLowerRight);a.push(l.texFontSizeLowerRight);a.push(n);d.push(4294967295);c.push(C);c.push(C);b.vertexCount+=4};e.prototype._writeIndices=
function(b,a,d){a.push(d+0);a.push(d+1);a.push(d+2);a.push(d+1);a.push(d+3);a.push(d+2);b.indexCount+=6};return e}(J.default);w.default=q});