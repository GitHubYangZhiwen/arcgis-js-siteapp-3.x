// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/layers/graphics/optimizedFeatures",["require","exports","../../core/Error","../../core/Logger"],function(ha,r,E,ca){function z(a,b){return Math.round((b-a.translate[0])/a.scale[0])}function A(a,b){return Math.round((a.translate[1]-b)/a.scale[1])}function F(a,b){return b*a.scale[0]+a.translate[0]}function G(a,b){return a.translate[1]-b*a.scale[1]}function H(a){a=a.coords;return{x:a[0],y:a[1]}}function N(a){var b=new x;b.coords[0]=a.x;b.coords[1]=a.y;return b}function O(a){a=
a.coords;return{x:a[0],y:a[1],z:a[2]}}function da(a){var b=new x;b.coords[0]=a.x;b.coords[1]=a.y;b.coords[2]=a.z;return b}function P(a){a=a.coords;return{x:a[0],y:a[1],m:a[2]}}function ea(a){var b=new x;b.coords[0]=a.x;b.coords[1]=a.y;b.coords[2]=a.m;return b}function Q(a){a=a.coords;return{x:a[0],y:a[1],z:a[2],m:a[3]}}function fa(a){var b=new x;b.coords[0]=a.x;b.coords[1]=a.y;b.coords[2]=a.z;b.coords[3]=a.m;return b}function R(a,b,c){for(var d=b?c?4:3:c?3:2,f=[],e=0;e<a.coords.length;e+=d){for(var g=
[],h=0;h<d;h++)g.push(a.coords[e+h]);f.push(g)}return b?c?{points:f,hasZ:b,hasM:c}:{points:f,hasZ:b}:c?{points:f,hasM:c}:{points:f}}function S(a,b,c){var d=b?c?4:3:c?3:2,f=a.coords,e=[],g=0,h=0;for(a=a.lengths;h<a.length;h++){for(var k=a[h],m=[],p=0;p<k;p++){for(var l=[],n=0;n<d;n++)l.push(f[g++]);m.push(l)}e.push(m)}return b?c?{paths:e,hasZ:b,hasM:c}:{paths:e,hasZ:b}:c?{paths:e,hasM:c}:{paths:e}}function T(a,b,c){var d=b?c?4:3:c?3:2,f=a.coords,e=[],g=0,h=0;for(a=a.lengths;h<a.length;h++){for(var k=
a[h],m=[],p=0;p<k;p++){for(var l=[],n=0;n<d;n++)l.push(f[g++]);m.push(l)}e.push(m)}return b?c?{rings:e,hasZ:b,hasM:c}:{rings:e,hasZ:b}:c?{rings:e,hasM:c}:{rings:e}}function U(a,b,c,d){if(!b)return[];switch(b){case "esriGeometryPoint":b=N;d&&c?b=fa:d?b=da:c&&(b=ea);c=[];for(d=0;d<a.length;d++){var f=a[d],e=f.geometry,f=f.attributes,e=e?b(e):void 0;c.push(new B(e,f))}return c;case "esriGeometryMultipoint":b=c?d?4:3:d?3:2;c=[];for(d=0;d<a.length;d++){var e=a[d],g=e.geometry,e=e.attributes,f=void 0;if(g){f=
new x;f.lengths[0]=g.points.length;for(var h=f.coords,k=0,m=0,g=g.points;m<g.length;m++)for(var p=g[m],l=0;l<b;l++)h[k++]=p[l]}c.push(new B(f,e))}return c;case "esriGeometryPolyline":b=c?d?4:3:d?3:2;c=[];for(d=0;d<a.length;d++){e=a[d];p=e.geometry;e=e.attributes;f=void 0;if(p)for(f=new x,h=f.lengths,k=f.coords,g=m=0,p=p.paths;g<p.length;g++){for(var l=p[g],n=0,q=l;n<q.length;n++)for(var D=q[n],r=0;r<b;r++)k[m++]=D[r];h.push(l.length)}c.push(new B(f,e))}return c;case "esriGeometryPolygon":b=c?d?4:
3:d?3:2;c=[];for(d=0;d<a.length;d++){f=a[d];l=f.geometry;e=f.centroid;f=f.attributes;h=void 0;if(l)for(h=new x,k=h.lengths,m=h.coords,p=g=0,l=l.rings;p<l.length;p++){n=l[p];q=0;for(D=n;q<D.length;q++)for(var r=D[q],t=0;t<b;t++)m[g++]=r[t];k.push(n.length)}e?c.push(new B(h,f,N(e))):c.push(new B(h,f))}return c;default:return I.error("convertToFeatureSet:unknown-geometry",new E("Unable to parse unknown geometry type "+b)),[]}}function J(a,b,c,d,f,e){f=V[f];var g=b.coords;b=b.lengths;var h=c?d?4:3:d?
3:2;c=c?d?K:C:d?C:L;a.lengths.length=0;a.coords.length=0;if(!g.length)return a;if(!b.length)return c(a.coords,g,0,0,z(e,g[0]),A(e,g[1])),a.lengths.length=0,a.coords.length=h,a;for(var k,m,p,l=0,n,q=0,r=0;r<b.length;r++){var v=b[r];if(!(v<f)){var t=0;n=q;m=d=z(e,g[l]);p=k=A(e,g[l+1]);c(a.coords,g,n,l,m,p);t++;l+=h;n+=h;for(var w=1;w<v;w++,l+=h)if(m=z(e,g[l]),p=A(e,g[l+1]),m!==d||p!==k)c(a.coords,g,n,l,m-d,p-k),n+=h,t++,d=m,k=p;t>=f&&(a.lengths.push(t),q=n)}}a.coords.length=q;return a.coords.length?
a:null}function M(a,b,c,d,f){var e=b.coords;b=b.lengths;var g=c?d?K:C:d?C:L;c=c?d?4:3:d?3:2;if(!e.length)return a.lengths.length=0,a.coords.length=0,a;if(!b.length)return g(a.coords,e,0,0,F(f,e[0]),G(f,e[1])),a.lengths.length=0,a.coords.length=c,a;var h=f.scale;d=h[0];for(var h=h[1],k=0,m=0;m<b.length;m++){var p=b[m];a.lengths[m]=p;var l=F(f,e[k]),n=G(f,e[k+1]);g(a.coords,e,k,k,l,n);for(var k=k+c,q=1;q<p;q++,k+=c)l+=e[k]*d,n-=e[k+1]*h,g(a.coords,e,k,k,l,n)}a.lengths.length=b.length;a.coords.length=
e.length;return a}function ga(a,b,c,d,f,e){e=f?e?4:3:e?3:2;var g=c,h=c+e,k=0,m=0,p=c=0,l=0,n=0;for(--d;n<d;n++,g+=e,h+=e){var q=b[g],r=b[g+1],v=b[g+2],t=b[h],w=b[h+1],y=b[h+2],u=q*w-t*r,p=p+u,k=k+(q+t)*u,m=m+(r+w)*u;f&&(u=q*y-t*v,c+=(v+y)*u,l+=u);q<a[0]&&(a[0]=q);q>a[1]&&(a[1]=q);r<a[2]&&(a[2]=r);r>a[3]&&(a[3]=r);f&&(v<a[4]&&(a[4]=v),v>a[5]&&(a[5]=v))}0<p&&(p*=-1);0<l&&(l*=-1);if(!p)return null;a=[k,m,.5*p];f&&(a[3]=c,a[4]=.5*l);return a}function W(a,b,c,d,f){f=d?f?4:3:f?3:2;for(var e=b,g=b+f,h=0,
k=0,m=0,p=0,l=0,n=c-1;l<n;l++,e+=f,g+=f){var q=a[e],r=a[e+1],v=a[e+2],t=a[g],w=a[g+1],y=a[g+2],u=d?X(q,r,v,t,w,y):Y(q,r,t,w);u&&(h+=u,d?(q=Z(q,r,v,t,w,y),k+=u*q[0],m+=u*q[1],p+=u*q[2]):(q=aa(q,r,t,w),k+=u*q[0],m+=u*q[1]))}return 0<h?d?[k/h,m/h,p/h]:[k/h,m/h]:0<c?d?[a[b],a[b+1],a[b+2]]:[a[b],a[b+1]]:null}function Y(a,b,c,d){a=c-a;b=d-b;return Math.sqrt(a*a+b*b)}function X(a,b,c,d,f,e){a=d-a;b=f-b;c=e-c;return Math.sqrt(a*a+b*b+c*c)}function aa(a,b,c,d){return[a+.5*(c-a),b+.5*(d-b)]}function Z(a,b,
c,d,f,e){return[a+.5*(d-a),b+.5*(f-b),c+.5*(e-c)]}Object.defineProperty(r,"__esModule",{value:!0});var I=ca.getLogger("esri.tasks.support.optimizedFeatureSet"),V={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},L=function(a,b,c,d,f,e){a[c]=f;a[c+1]=e},C=function(a,b,c,d,f,e){a[c]=f;a[c+1]=e;a[c+2]=b[d+2]},K=function(a,b,c,d,f,e){a[c]=f;a[c+1]=e;a[c+2]=b[d+2];a[c+3]=b[d+3]};r.quantizeX=z;r.quantizeY=A;r.hydrateX=F;r.hydrateY=G;var ba=function(){return function(){this.spatialReference=
this.geometryType=this.geometryProperties=this.geohashFieldName=this.globalIdFieldName=this.objectIdFieldName=null;this.hasM=this.hasZ=!1;this.features=[];this.fields=[];this.transform=null;this.exceededTransferLimit=!1}}();r.OptimizedFeatureSet=ba;var x=function(){return function(a,b){void 0===a&&(a=[]);void 0===b&&(b=[]);this.lengths=a;this.coords=b}}();r.OptimizedGeometry=x;var B=function(){return function(a,b,c){void 0===a&&(a=null);void 0===b&&(b={});this.geometry=a;this.attributes=b;c&&(this.centroid=
c)}}();r.OptimizedFeature=B;r.convertToPoint=function(a,b,c){return b?c?Q(a):O(a):c?P(a):H(a)};r.convertToMultipoint=R;r.convertToPolyline=S;r.convertToPolygon=T;r.convertFromFeatures=U;r.convertToFeatureSet=function(a){var b=[],c=a.objectIdFieldName,d=a.spatialReference,f=a.transform,e=a.fields,g=a.hasM,h=a.hasZ,k=a.features,m=a.geometryType;a=a.exceededTransferLimit;switch(m){case "esriGeometryPoint":b=H;g&&h?b=Q:g?b=O:h&&(b=P);for(var p=[],l=0;l<k.length;l++){var n=k[l],q=n.geometry,n=n.attributes,
q=q?b(q):null;p.push({attributes:n,geometry:q})}b=p;break;case "esriGeometryMultipoint":b=[];for(p=0;p<k.length;p++)q=k[p],l=q.geometry,q=q.attributes,n=void 0,l&&(n=R(l,h,g)),b.push({attributes:q,geometry:n});break;case "esriGeometryPolyline":b=[];for(p=0;p<k.length;p++)q=k[p],l=q.geometry,q=q.attributes,n=void 0,l&&(n=S(l,h,g)),b.push({attributes:q,geometry:n});break;case "esriGeometryPolygon":b=[];for(p=0;p<k.length;p++){var n=k[p],q=n.geometry,l=n.attributes,r=n.centroid,n=void 0;q&&(n=T(q,h,
g));r?(q=H(r),b.push({attributes:l,centroid:q,geometry:n})):b.push({attributes:l,geometry:n})}break;default:I.error("convertToFeatureSet:unknown-geometry",new E("Unable to parse unknown geometry type "+m))}c={features:b,fields:e,geometryType:m,objectIdFieldName:c,spatialReference:d};f&&(c.transform=f);a&&(c.exceededTransferLimit=a);g&&(c.hasM=g);h&&(c.hasZ=h);return c};r.convertFromFeatureSet=function(a){var b=new ba,c=a.hasM,d=a.hasZ,f=a.features,e=a.objectIdFieldName,g=a.spatialReference,h=a.geometryType,
k=a.exceededTransferLimit,m=a.transform;b.fields=a.fields;b.geometryType=h;b.objectIdFieldName=e;b.spatialReference=g;b.features=U(f,h,d,c);k&&(b.exceededTransferLimit=k);c&&(b.hasM=c);d&&(b.hasZ=d);m&&(b.transform=m);return b};r.hydrateOptimizedFeatureSet=function(a){var b=a.transform,c=a.hasM,d=a.hasZ;if(!b)return a;for(var f=0,e=a.features;f<e.length;f++){var g=e[f];M(g.geometry,g.geometry,c,d,b);g.centroid&&M(g.centroid,g.centroid,c,d,b)}a.transform=null;return a};r.quantizeOptimizedFeatureSet=
function(a,b){var c=b.geometryType,d=b.features,f=b.hasM,e=b.hasZ;if("esriGeometryEnvelope"===c)return I.error(new E("optimized-features:invalid-geometry-type",'FeatureSet with geometry type "'+c+'" is not supported')),b;if(!a)return b;for(var g=0;g<d.length;g++){var h=d[g],k=new B(new x,h.attributes);J(k.geometry,h.geometry,f,e,c,a);h.centroid&&(k.centroid=new x,J(k.centroid,h.centroid,f,e,"esriGeometryPoint",a));d[g]=k}b.transform=a;return b};r.quantizeOptimizedGeometry=J;r.quantizeOptimizedGeometryRemoveCollinear=
function(a,b,c,d,f,e){f=V[f];var g=b.coords;b=b.lengths;var h=c?d?4:3:d?3:2;c=c?d?K:C:d?C:L;a.lengths.length=0;a.coords.length=0;if(!g.length)return a;if(!b.length)return c(a.coords,g,0,0,z(e,g[0]),A(e,g[1])),a.lengths.length=0,a.coords.length=h,a;for(var k,m,p,l=0,n,q=0,r=0;r<b.length;r++){var v=b[r];if(!(v<f)){var t=0;n=q;d=k=z(e,g[l]);p=m=A(e,g[l+1]);c(a.coords,g,n,l,d,p);t++;for(var l=l+h,w=!1,y=0,u=0,x=1;x<v;x++,l+=h)if(d=z(e,g[l]),p=A(e,g[l+1]),d!==k||p!==m)k=d-k,m=p-m,w&&(0===y&&0===k||0===
u&&0===m)?(y+=k,u+=m):(w=!0,y=k,u=m,n+=h,t++),c(a.coords,g,n,l,y,u),k=d,m=p;w&&(n+=h,c(a.coords,g,n,l,y,u));t>=f&&(a.lengths.push(t),q=n)}}a.coords.length=q;return a.coords.length?a:null};r.getBoundsOptimizedGeometry=function(a,b,c,d){c=c?d?4:3:d?3:2;b=b.coords;for(var f=d=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY,g=Number.NEGATIVE_INFINITY,h=0;h<b.length;h+=c){var k=b[h],m=b[h+1];d=Math.min(d,k);e=Math.max(e,k);f=Math.min(f,m);g=Math.max(g,m)}a[0]=d;a[1]=f;a[2]=e;a[3]=g;return a};r.getQuantizedBoundsOptimizedGeometry=
function(a,b,c,d){c=c?d?4:3:d?3:2;d=b.coords;var f=Number.POSITIVE_INFINITY,e=Number.POSITIVE_INFINITY,g=Number.NEGATIVE_INFINITY,h=Number.NEGATIVE_INFINITY,k=0,m=0;for(b=b.lengths;m<b.length;m++)for(var p=b[m],l=d[k],n=d[k+1],f=Math.min(l,f),e=Math.min(n,e),g=Math.max(l,g),h=Math.max(n,h),k=k+c,q=1;q<p;q++,k+=c){var r=d[k],v=d[k+1],l=l+r,n=n+v;0>r&&(f=Math.min(f,l));0<r&&(g=Math.max(g,l));0>v?e=Math.min(e,n):0<v&&(h=Math.max(h,n))}a[0]=f;a[1]=e;a[2]=g;a[3]=h;return a};r.hydrateOptimizedGeometry=
M;r.getCentroidOptimizedGeometry=function(a,b,c,d){if(!b||!b.lengths.length)return null;a.lengths.length=0;a.coords.length=0;for(var f=a.coords,e=[],g=c?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],h=b.lengths,k=b.coords,m=c?d?4:3:d?3:2,p=0,l=0;l<h.length;l++){var n=h[l],q=ga(g,k,p,n,c,d);q&&
e.push(q);p+=n*m}e.sort(function(a,b){var d=a[2]-b[2];0===d&&c&&(d=a[4]-b[4]);return d});e.length&&(m=6*e[0][2],f[0]=e[0][0]/m,f[1]=e[0][1]/m,c&&(m=6*e[0][4],f[2]=0!==m?e[0][3]/m:0),f[0]<g[0]||f[0]>g[1]||f[1]<g[2]||f[1]>g[3]||c&&(f[2]<g[4]||f[2]>g[5]))&&(f.length=0);if(!f.length)if(b=b.lengths[0]?W(k,0,h[0],c,d):null)f[0]=b[0],f[1]=b[1],c&&2<b.length&&(f[2]=b[2]);else return null;return a};r.lineCentroid=W;r.getLength2D=Y;r.getLength3D=X;r.getMidpoint2D=aa;r.getMidpoint3D=Z});