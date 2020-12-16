// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
/*
 MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
(function(){function q(c,h,f){this.obj=c;this.right=this.left=null;this.parent=f;this.dimension=h}function t(c,h,f){function g(a,b,d){var c=b%f.length,e;if(0===a.length)return null;if(1===a.length)return new q(a[0],c,d);a.sort(function(a,d){return a[f[c]]-d[f[c]]});e=Math.floor(a.length/2);d=new q(a[e],c,d);d.left=g(a.slice(0,e),b+1,d);d.right=g(a.slice(e+1),b+1,d);return d}function p(a){function b(a){a.left&&(a.left.parent=a,b(a.left));a.right&&(a.right.parent=a,b(a.right))}m.root=a;b(m.root)}var m=
this;Array.isArray(c)?this.root=g(c,0,null):p(c,h,f);this.toJSON=function(a){a||(a=this.root);var b=new q(a.obj,a.dimension,null);a.left&&(b.left=m.toJSON(a.left));a.right&&(b.right=m.toJSON(a.right));return b};this.insert=function(a){function b(e,c){if(null===e)return c;c=f[e.dimension];return a[c]<e.obj[c]?b(e.left,e):b(e.right,e)}var d=b(this.root,null),c,e;null===d?this.root=new q(a,0,null):(c=new q(a,(d.dimension+1)%f.length,d),e=f[d.dimension],a[e]<d.obj[e]?d.left=c:d.right=c)};this.remove=
function(a){function c(e){if(null===e)return null;if(e.obj===a)return e;var d=f[e.dimension];return a[d]<e.obj[d]?c(e.left,e):c(e.right,e)}function d(a){function c(a,d){var b,e,k;if(null===a)return null;b=f[d];if(a.dimension===d)return null!==a.right?c(a.right,d):a;e=a.obj[b];k=c(a.left,d);d=c(a.right,d);null!==k&&k.obj[b]>e&&(a=k);null!==d&&d.obj[b]>a.obj[b]&&(a=d);return a}function b(a,c){var d,k,e;if(null===a)return null;d=f[c];if(a.dimension===c)return null!==a.left?b(a.left,c):a;k=a.obj[d];e=
b(a.left,c);c=b(a.right,c);null!==e&&e.obj[d]<k&&(a=e);null!==c&&c.obj[d]<a.obj[d]&&(a=c);return a}var k,e;null===a.left&&null===a.right?null===a.parent?m.root=null:(k=f[a.parent.dimension],a.obj[k]<a.parent.obj[k]?a.parent.left=null:a.parent.right=null):(k=null!==a.left?c(a.left,a.dimension):b(a.right,a.dimension),e=k.obj,d(k),a.obj=e)}var h;h=c(m.root);null!==h&&d(h)};this.nearest=function(a,c,d,g){function e(b){var g;g=f[b.dimension];var k=h(a,b.obj),m={},n;for(n=0;n<f.length;n+=1)m[f[n]]=n===
b.dimension?a[f[n]]:b.obj[f[n]];m=h(m,b.obj);if(null===b.right&&null===b.left){if(l.size()<c||k<l.peek()[1])if(!d||d(b.obj))l.push([b,k]),l.size()>c&&l.pop()}else{g=null===b.right?b.left:null===b.left?b.right:a[g]<b.obj[g]?b.left:b.right;e(g);if(l.size()<c||k<l.peek()[1])if(!d||d(b.obj))l.push([b,k]),l.size()>c&&l.pop();if(l.size()<c||Math.abs(m)<l.peek()[1])b=g===b.left?b.right:b.left,null!==b&&e(b)}}var b,l;l=new r(function(a){return-a[1]});if(g)for(b=0;b<c;b+=1)l.push([null,g]);e(m.root);g=[];
for(b=0;b<c&&b<l.content.length;b+=1)l.content[b][0]&&g.push([l.content[b][0].obj,l.content[b][1]]);return g};this.balanceFactor=function(){function a(b){return null===b?0:Math.max(a(b.left),a(b.right))+1}function b(a){return null===a?0:b(a.left)+b(a.right)+1}return a(m.root)/(Math.log(b(m.root))/Math.log(2))}}function r(c){this.content=[];this.scoreFunction=c}r.prototype={push:function(c){this.content.push(c);this.bubbleUp(this.content.length-1)},pop:function(){var c=this.content[0],h=this.content.pop();
0<this.content.length&&(this.content[0]=h,this.sinkDown(0));return c},peek:function(){return this.content[0]},remove:function(c){for(var h=this.content.length,f=0;f<h;f++)if(this.content[f]==c){var g=this.content.pop();f!=h-1&&(this.content[f]=g,this.scoreFunction(g)<this.scoreFunction(c)?this.bubbleUp(f):this.sinkDown(f));return}throw Error("Node not found.");},size:function(){return this.content.length},bubbleUp:function(c){for(var h=this.content[c];0<c;){var f=Math.floor((c+1)/2)-1,g=this.content[f];
if(this.scoreFunction(h)<this.scoreFunction(g))this.content[f]=h,this.content[c]=g,c=f;else break}},sinkDown:function(c){for(var h=this.content.length,f=this.content[c],g=this.scoreFunction(f);;){var p=2*(c+1),m=p-1,a=null;if(m<h){var b=this.scoreFunction(this.content[m]);b<g&&(a=m)}p<h&&this.scoreFunction(this.content[p])<(null==a?g:b)&&(a=p);if(null!=a)this.content[c]=this.content[a],this.content[a]=f,c=a;else break}}};this.kdTree=t;"undefined"!==typeof exports&&(exports.kdTree=t,exports.BinaryHeap=
r)})();