// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/arcade/functions/centroid",["require","exports","../../geometry/Point"],function(x,m,q){function u(a,b,c){var d={x:0,y:0};b&&(d.z=0);c&&(d.m=0);for(var h=0,e=a[0],f=0;f<a.length;f++){var g=a[f],k;a:if(g.length!==e.length)k=!1;else{for(k=0;k<g.length;k++)if(g[k]!==e[k]){k=!1;break a}k=!0}if(!1===k){k=v(e,g,b);var p=g,l=b,m=c,n={x:(e[0]+p[0])/2,y:(e[1]+p[1])/2};l&&(n.z=(e[2]+p[2])/2);l&&m?n.m=(e[3]+p[3])/2:m&&(n.m=(e[2]+p[2])/2);e=n;e.x*=k;e.y*=k;d.x+=e.x;d.y+=e.y;b&&(e.z*=k,d.z+=e.z);
c&&(e.m*=k,d.m+=e.m);h+=k;e=g}}0<h?(d.x/=h,d.y/=h,b&&(d.z/=h),c&&(d.m/=h)):(d.x=a[0][0],d.y=a[0][1],b&&(d.z=a[0][2]),c&&b?d.m=a[0][3]:c&&(d.m=a[0][2]));return d}function v(a,b,c){var d=b[0]-a[0];a=b[1]-a[1];return c?(b=b[2]-b[2],Math.sqrt(d*d+a*a+b*b)):Math.sqrt(d*d+a*a)}function n(a,b,c){for(void 0===c&&(c=0);a<c;)a+=b;for(c+=b;a>=c;)a-=b;return a}function r(a,b){return Math.atan2(b.y-a.y,b.x-a.x)}function t(a,b,c){var d=a.x-b.x;a=a.y-b.y;var h=c.x-b.x;b=c.y-b.y;return Math.atan2(h*a-d*b,h*d+b*a)}
function w(a,b,c,d,h){var e=a[0];a=a[1];var f=b[0];b=b[1];var g=c[0],k=c[1];c=d[0]-g;var g=e-g,l=f-e;d=d[1]-k;var k=a-k,m=b-a,n=d*l-c*m;if(0===n)return!1;c=(c*k-d*g)/n;g=(l*k-m*g)/n;return 0<=c&&1>=c&&0<=g&&1>=g?(h&&(h[0]=e+c*(f-e),h[1]=a+c*(b-a)),!0):!1}Object.defineProperty(m,"__esModule",{value:!0});m.centroidPolyline=function(a){for(var b={x:0,y:0,spatialReference:a.spatialReference.toJson()},c={x:0,y:0,spatialReference:a.spatialReference.toJson()},d=0,h=0,e=0;e<a.paths.length;e++)if(0!==a.paths[e].length){var f;
f=a.paths[e];var g=!0===a.hasZ;if(1>=f.length)f=0;else{for(var k=0,l=1;l<f.length;l++)k+=v(f[l-1],f[l],g);f=k}0===f?(g=u(a.paths[e],!0===a.hasZ,!0===a.hasM),b.x+=g.x,b.y+=g.y,!0===a.hasZ&&(b.z+=g.z),!0===a.hasM&&(b.m+=g.m),++d):(g=u(a.paths[e],!0===a.hasZ,!0===a.hasM),c.x+=g.x*f,c.y+=g.y*f,!0===a.hasZ&&(c.z+=g.z*f),!0===a.hasM&&(c.m+=g.m*f),h+=f)}return 0<h?(c.x/=h,c.y/=h,!0===a.hasZ&&(c.z/=h),!0===a.hasM&&(c.m/=h),new q(c)):0<d?(b.x/=d,b.y/=d,!0===a.hasZ&&(c.z/=d),!0===a.hasM&&(b.m/=d),new q(b)):
null};m.centroidMultiPoint=function(a){if(0===a.points.length)return null;for(var b=0,c=0,d=0,h=0,e=0;e<a.points.length;e++){var f=a.getPoint(e);!0===f.hasZ&&(d+=f.z);!0===f.hasM&&(h+=f.m);b+=f.x;c+=f.y;h+=f.m}b={x:b/a.points.length,y:c/a.points.length,spatialReference:null};b.spatialReference=a.spatialReference.toJson();!0===a.hasZ&&(b.z=d/a.points.length);!0===a.hasM&&(b.m=h/a.points.length);return new q(b)};m.angleRad=r;m.angle2D=function(a,b){return n(r(a,b),2*Math.PI)*(180/Math.PI)};m.bearing2D=
function(a,b){return n(Math.PI/2-r(a,b),2*Math.PI)*(180/Math.PI)};m.angleBetweenRad=t;m.angleBetween2D=function(a,b,c){return n(t(a,b,c),2*Math.PI)*(180/Math.PI)};m.bearingBetween2D=function(a,b,c){return n(-1*t(a,b,c),2*Math.PI)*(180/Math.PI)};var l=[0,0];m.pathsSelfIntersecting=function(a){for(var b=0;b<a.length;b++){for(var c=a[b],d=0;d<c.length-1;d++)for(var h=c[d],e=c[d+1],f=b+1;f<a.length;f++)for(var g=0;g<a[f].length-1;g++){var k=a[f][g],m=a[f][g+1],n=w(h,e,k,m,l);if(n&&!(l[0]===h[0]&&l[1]===
h[1]||l[0]===k[0]&&l[1]===k[1]||l[0]===e[0]&&l[1]===e[1]||l[0]===m[0]&&l[1]===m[1]))return!0}g=c.length;if(!(3>g))for(d=0;d<=g-2;d++)for(h=c[d],e=c[d+1],f=d+2;f<=g-2;f++)if(k=c[f],m=c[f+1],(n=w(h,e,k,m,l))&&!(l[0]===h[0]&&l[1]===h[1]||l[0]===k[0]&&l[1]===k[1]||l[0]===e[0]&&l[1]===e[1]||l[0]===m[0]&&l[1]===m[1]))return!0}return!1}});