// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/textMeshUtils","require exports ../../../../core/screenUtils ./color ./enums ./Geometry ./MaterialInfoUtils ./MeshData ./number ./SymbolProperties ./TextShaping ./visualVariablesUtils ./WGLDisplayRecord".split(" "),function(V,M,G,N,R,x,K,O,c,S,T,U,P){Object.defineProperty(M,"__esModule",{value:!0});var B=[],Q=c.i8888to32(255,255,255,255);M.createTextDisplayRecords=function(h,C,L,m,q,r,H){B.length=0;var f=C.symbol;q=q.get(f);if(!q.glyphMosaicItems||
0===q.glyphMosaicItems.length)return B;var u=f.text;q=(new T([q.glyphMosaicItems],240,24,0,[24*r.offsetX,24*r.offsetY],r.hAnchor,r.vAnchor,.5)).getShaping(u,!1);if(!q||0===q.length)return B;C=C.vv;var u=c.numTo32(L),k=K.createTextMaterialInfo(q[0].glyphMosaicItem,C,H).materialKeyInfo,b=0,g=0,n=0,d=0,v=k.vvColor||k.vvOpacity||k.vvRotation||k.vvSizeMinMaxValue||k.vvSizeScaleStops||k.vvSizeFieldStops||k.vvSizeUnitValue;if(v){b=m.vvFields;n=b.rotation?m.getValue(h,b.rotation):0;g=b.opacity?m.getValue(h,
b.opacity):0;d=b.color?m.getValue(h,b.color):0;b=b.size&&!k.vvSizeScaleStops?m.getValue(h,b.size):0;k.vvSizeUnitValue&&(b=U.getVisualVariableSizeValueRepresentationRatio(b,m.vvRanges.size.unitValue.valueRepresentation));if(null===b||isNaN(b))b=NaN;if(null===n||isNaN(n))n=NaN;if(null===d||isNaN(d))d=NaN;if(null===g||isNaN(g))g=NaN;b=c.toUint32(b);g=c.toUint32(g);n=c.toUint32(n);d=c.toUint32(d)}m=[b,d,g,n];h=h.centroid||h.geometry;var k=h.x,d=h.y,y,D,E;h=f.color&&N.copyAndPremultiply(f.color);b=f.haloColor&&
N.copyAndPremultiply(f.haloColor);h=h&&c.i8888to32(h[0],h[1],h[2],h[3])||4294967295;var I=b&&c.i8888to32(b[0],b[1],b[2],b[3])||0,b=[G.pt2px(f.xoffset),G.pt2px(f.yoffset)],k=k+b[0],d=d+b[1],b=f.font.size,f=10*(null!=f.haloSize?G.pt2px(G.toPt(f.haloSize)):0);if(0<f)for(var J=c.i1616to32(2*k+1,2*d),n=0;n<q.length;n++){var e=q[n],a=[],F=[],p=e.glyphMosaicItem,g=Math.round(p.rect.x/4);y=Math.round(p.rect.y/4);D=g+Math.round(p.rect.width/4);E=y+Math.round(p.rect.height/4);var l=e.x+0+p.metrics.left,e=e.y+
-17-p.metrics.top,l=new x.Point(l-4,e-4),e=new x.Point(l.x+p.rect.width,l.y+p.rect.height),z=new x.Point(l.x,e.y),A=new x.Point(e.x,l.y);if(0!==r.angle){var t=Math.cos(r.angle),w=Math.sin(r.angle);l.rotate(t,w);e.rotate(t,w);z.rotate(t,w);A.rotate(t,w)}t=K.createTextMaterialInfo(p,C,H);p=new O;a.push(J);a.push(u);a.push(I);a.push(c.i1616to32(32*l.x,32*l.y));a.push(c.i8888to32(g,y,b,f));v&&a.push.apply(a,m);a.push(J);a.push(u);a.push(I);a.push(c.i1616to32(32*A.x,32*A.y));a.push(c.i8888to32(D,y,b,f));
v&&a.push.apply(a,m);a.push(J);a.push(u);a.push(I);a.push(c.i1616to32(32*z.x,32*z.y));a.push(c.i8888to32(g,E,b,f));v&&a.push.apply(a,m);a.push(J);a.push(u);a.push(I);a.push(c.i1616to32(32*e.x,32*e.y));a.push(c.i8888to32(D,E,b,f));v&&a.push.apply(a,m);F.push(Q);p.update({geometry:a,visibility:F},4,[0,1,2,1,3,2]);g=new P(L,R.WGLGeometryType.TEXT,t);g.meshData=p;B.push(g)}k=c.i1616to32(2*k,2*d);for(n=0;n<q.length;n++)e=q[n],a=[],F=[],d=e.glyphMosaicItem,g=Math.round(d.rect.x/4),y=Math.round(d.rect.y/
4),D=g+Math.round(d.rect.width/4),E=y+Math.round(d.rect.height/4),l=e.x+0+d.metrics.left,e=e.y+-17-d.metrics.top,l=new x.Point(l-4,e-4),e=new x.Point(l.x+d.rect.width,l.y+d.rect.height),z=new x.Point(l.x,e.y),A=new x.Point(e.x,l.y),0!==r.angle&&(t=Math.cos(r.angle),w=Math.sin(r.angle),l.rotate(t,w),e.rotate(t,w),z.rotate(t,w),A.rotate(t,w)),d=K.createTextMaterialInfo(d,C,H),p=new O,a.push(k),a.push(u),a.push(h),a.push(c.i1616to32(32*l.x,32*l.y)),a.push(c.i8888to32(g,y,b,f)),v&&a.push.apply(a,m),a.push(k),
a.push(u),a.push(h),a.push(c.i1616to32(32*A.x,32*A.y)),a.push(c.i8888to32(D,y,b,f)),v&&a.push.apply(a,m),a.push(k),a.push(u),a.push(h),a.push(c.i1616to32(32*z.x,32*z.y)),a.push(c.i8888to32(g,E,b,f)),v&&a.push.apply(a,m),a.push(k),a.push(u),a.push(h),a.push(c.i1616to32(32*e.x,32*e.y)),a.push(c.i8888to32(D,E,b,f)),v&&a.push.apply(a,m),F.push(Q),p.update({geometry:a,visibility:F},4,[0,1,2,1,3,2]),g=new P(L,H,d),g.meshData=p,B.push(g);S.TextProperties.pool.release(r);return B}});