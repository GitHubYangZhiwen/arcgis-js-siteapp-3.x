// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/waffle/_ShapeRenderer","dojo/_base/Color dojox/gfx dojox/gfx/utils ../pictureUtil/Converter ../../../../supportClasses/images/ImageDataHolder ../supportClasses/WaffleDirections ../supportClasses/WaffleFlowStyles".split(" "),function(E,D,F,G,H,e,A){var I={packRect:function(b){var g=b.w,a=b.h,d=b.W,f=b.H,h=b.num,c=b.preserveRectShape,l=b.numColumns;b=b.numRows;if(!h||1===h)return d=Math.min(d/g,f/a),{w:g*d,h:a*d,numColumns:1,numRows:1};
for(var g=g/a,a=a*g,f=f*g,t=Math.sqrt(d*f/h),a=Math.max(1,Math.round(d/t)),t=Math.max(1,Math.round(f/t)),k=0,p=0,m=null,n=null,e=0,v=0,x=-100;101>x;x++)for(var y=-100;101>y;y++){var q=a+x,r=t+y;if(!(1>q||1>r||(c?q*r!==h:q*r<h))){var B=Math.min(d/q,f/r);B>k&&(k=B,e=q,v=r);(b||l)&&B>p&&!(b&&b!==r||l&&l!==q)&&(p=B,m=q,n=r)}}return p?{w:p,h:p/g,numColumns:m,numRows:n}:{w:k,h:k/g,numColumns:e,numRows:v}}},J={_configHV:null,_configDiagonal:null,calcPosition:function(b,g,a,d,f){var h=d*f;this._initConfig();
var c=(g===A.DIAGONAL||g===A.DIAGONAL_ZIG_ZAG?this._configDiagonal:this._configHV)[b];b=c[0];var l=c[1],t=c[2],c=c[3],k,p,m,n;k=m=1===b||0===b&&1===t?0:f-1;p=n=1===l||0===l&&1===c?0:d-1;for(var e=0;e<h&&e!==a;e++)if((0===t||(1===t?k<f-1:0<k))&&(0===c||(1===c?p<d-1:0<p)))k+=t,p+=c;else{g===A.DIAGONAL_ZIG_ZAG&&e&&(t*=-1,c*=-1,m=k,n=p);var v=m,x=n;0===b||b===t?(1===l?n<d-1:0<n)?n+=l:m+=b:(1===b?m<f-1:0<m)?m+=b:n+=l;g===A.DIAGONAL_ZIG_ZAG&&e&&(v!==m?n=p:x!==n&&(m=k));k=m;p=n}return{x:k,y:p}},_initConfig:function(){this._configHV||
(this._configHV={},this._configHV[e.DOWN_RIGHT]=[0,1,1,0],this._configHV[e.DOWN_LEFT]=[0,1,-1,0],this._configHV[e.UP_RIGHT]=[0,-1,1,0],this._configHV[e.UP_LEFT]=[0,-1,-1,0],this._configHV[e.RIGHT_UP]=[1,0,0,-1],this._configHV[e.RIGHT_DOWN]=[1,0,0,1],this._configHV[e.LEFT_UP]=[-1,0,0,-1],this._configHV[e.LEFT_DOWN]=[-1,0,0,1],this._configDiagonal={},this._configDiagonal[e.DOWN_RIGHT]=[1,1,1,-1],this._configDiagonal[e.DOWN_LEFT]=[-1,1,-1,-1],this._configDiagonal[e.UP_RIGHT]=[1,-1,1,1],this._configDiagonal[e.UP_LEFT]=
[-1,-1,-1,1],this._configDiagonal[e.RIGHT_UP]=[1,-1,-1,-1],this._configDiagonal[e.RIGHT_DOWN]=[1,1,-1,1],this._configDiagonal[e.LEFT_UP]=[-1,-1,1,-1],this._configDiagonal[e.LEFT_DOWN]=[-1,1,1,1])}},C={renderShape:function(b,g,a,d,f){var h=[],c=[],l=[];b.map(function(b){b.icon&&(h.push(b.icon),b=a.createGroup(),g.series.isEditMode&&(b.rawNode.style.cursor="pointer"),b.openBatch(),c.push(b))});if(h.length){var e=C._calcIconParams(h,d,g);c.forEach(function(b,a){a=h[a];var c=[];l.push(c);for(var f=0;f<
e.numRows;f++)for(var k=0;k<e.numColumns&&(!g.series.waffleNumIcons||c.length!==g.series.waffleNumIcons);k++)c.push(C._renderIcon(c.length,f,k,b,a,d,g,e))})}c.forEach(function(a){a.closeBatch()});var k=function(a){return C._fillIcons(a,h,c,l,b,g,e)};f.push({isShape:!0,func:k});return k},_calcIconParams:function(b,g,a){b=b[0];var d=b.shapeJson||b.imageJson,f,h;if(a.series.waffleNumIcons){b=40;d=b*d.style.height/d.style.width;h=I.packRect({w:b+a.series.waffleColumnSpace,h:d+a.series.waffleRowSpace,
W:g.w+a.series.waffleColumnSpace,H:g.h+a.series.waffleRowSpace,num:a.series.waffleNumIcons,preserveRectShape:!0,numColumns:a.series.waffleNumColumns,numRows:a.series.waffleNumRows});f=h.w-a.series.waffleColumnSpace;var c=h.h-a.series.waffleRowSpace;0>f||0>c?(c=Math.max((b+a.series.waffleColumnSpace)/h.w,(d+a.series.waffleRowSpace)/h.h),1<c&&(b/=2*c,d/=2*c)):(b=f,d=c);f=h.numColumns;h=h.numRows}else{b=40*(d.style.zoom||1);d=b*d.style.height/d.style.width;if(a.series.waffleNumColumns||a.series.waffleNumRows){var e=
c=1E6;a.series.waffleNumColumns&&(c=(g.w+a.series.waffleColumnSpace)/a.series.waffleNumColumns-a.series.waffleColumnSpace,0>c&&(c=(g.w+a.series.waffleColumnSpace)/a.series.waffleNumColumns/2),f=a.series.waffleNumColumns);a.series.waffleNumRows&&(e=(g.h+a.series.waffleRowSpace)/a.series.waffleNumRows-a.series.waffleRowSpace,0>e&&(e=(g.h+a.series.waffleRowSpace)/a.series.waffleNumRows/2),h=a.series.waffleNumRows);c=Math.max(b/c,d/e);1<c&&(b/=c,d/=c)}f=f||Math.max(1,Math.floor((g.w+a.series.waffleColumnSpace)/
(b+a.series.waffleColumnSpace)));h=h||Math.max(1,Math.floor((g.h+a.series.waffleRowSpace)/(d+a.series.waffleRowSpace)))}e=c=0;a.series.waffleStretchIconsToFill?(1===f?b=g.w:(b=(g.w-a.series.waffleColumnSpace*(f-1))/f,c=a.series.waffleColumnSpace),1===h?d=g.h:(d=(g.h-a.series.waffleRowSpace*(h-1))/h,e=a.series.waffleRowSpace)):(c=1===f?0:(g.w-b*f)/(f-1),e=1===h?0:(g.h-d*h)/(h-1));return{iconW:b,iconH:d,numColumns:Math.min(f,1E3),numRows:Math.min(h,1E3),columnSpace:c,rowSpace:e,waffleDirection:a.series.waffleDirection}},
_renderIcon:function(b,e,a,d,f,h,c,l){e=l.numRows;a=l.numColumns;var g=l.iconW,k=l.iconH,p=l.columnSpace;l=l.rowSpace;var m=f.shapeJson||f.imageJson;d=d.createGroup();if(f.shapeJson){var n=G.shapeJsonToGFXJson(m);try{F.deserialize(d,n)}catch(v){console.log(v)}}else d.createImage({x:0,y:0,width:g,height:k,src:H.getImageData(m.fileName)}),d.rawNode.style.opacity=m.style.opacity;d.createRect({x:0,y:0,width:g+p,height:k+l}).setFill(new E([0,0,0,.001]));var n=h.x,u=h.y;b=J.calcPosition(c.series.waffleDirection,
c.series.waffleFlowStyle,b,e,a);n+=b.x*(g+p);u+=b.y*(k+l);1===a&&(n+=(h.w-g)/2);1===e&&(u+=(h.h-k)/2);d.applyTransform(D.matrix.translate(n,u));f.shapeJson&&(c.series.waffleStretchIconsToFill?d.applyTransform(D.matrix.scale(g/m.style.width,k/m.style.height)):d.applyTransform(D.matrix.scale(g/m.style.width)));return d},_fillIcons:function(b,g,a,d,f,h,c){var l=c.iconW,t=c.iconH,k=c.numColumns,p=c.numRows,m=c.waffleDirection;a.forEach(function(a){a.openBatch()});var n=p*k,u=0;f.forEach(function(a){u+=
a.y||0});var v=1,x=f.map(function(a,c){a=b*(a.y||0)/u;h.series.waffleShowWholePictures&&(a=Math.round(n*a)/n);a=Math.max(0,Math.min(1,a));c<f.length-1&&(v-=a);return a});1<f.length&&(x[x.length-1]=v);var y=0;d.forEach(function(a,b){var c=0,d=y;y+=x[b];for(var d=d*n,f=y*n,h=0;h<p;h++)for(var v=0;v<k;v++){var q=a[c];if(!q)break;q.setClip(null);q.rawNode.style.display="none";c++;if(c>d&&c-1<f){q.rawNode.style.display="";var r=Math.max(0,d-(c-1)),z=Math.max(0,c-f);if(0<r||0<z){var w=g[b],u=w.shapeJson?
w.shapeJson.style.width:l,w=w.shapeJson?w.shapeJson.style.height:t;e.isLeftRightStartPosition(m)?e.isDownGrowth(m)?q.setClip({x:0,y:w*r,width:u,height:w*(1-(r+z))}):q.setClip({x:0,y:w*z,width:u,height:w*(1-(r+z))}):e.isLeftGrowth(m)?q.setClip({x:u*z,y:0,width:u*(1-(r+z)),height:w}):q.setClip({x:u*r,y:0,width:u*(1-(r+z)),height:w})}}}});a.forEach(function(a){a.closeBatch()});return{shapes:a}},DEFAULT_ICON_SIZE:40};return C});