// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
var merge=function(a,c,e){a&&"object"==typeof a&&(c=c||{},Object.keys(a).forEach(function(d){void 0!==a[d]&&(c[d]=a[d])},e||this));return c},mixin=function(a,c){return merge(c,a.prototype)},geomToBbox=function(a){function c(a,b){a.length||(a=[Infinity,Infinity,-Infinity,-Infinity]);b[0]<a[0]&&(a[0]=b[0]);b[1]<a[1]&&(a[1]=b[1]);2<b.length?(b[2]>a[2]&&(a[2]=b[2]),b[3]>a[3]&&(a[3]=b[3])):(b[0]>a[2]&&(a[2]=b[0]),b[1]>a[3]&&(a[3]=b[1]));return a}var e=[];if(a.x&&a.y)return[a.x,a.y,a.x,a.y];if(a.points){var d=
a.points,f=d.length;for(a=-1;++a<f;)e=c(e,d[a]);return e}if(a.paths||a.rings){var d=a.paths||a.rings,f=d.length,k,g,h;for(a=-1;++a<f;)for(g=d[a],k=g.length,h=-1;++h<k;)e=c(e,g[h]);return e}};