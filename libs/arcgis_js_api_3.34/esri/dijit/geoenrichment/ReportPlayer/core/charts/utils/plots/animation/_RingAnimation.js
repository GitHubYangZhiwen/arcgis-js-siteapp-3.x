// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/animation/_RingAnimation",["dojo/_base/declare","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState","./_defaults"],function(b,l,m,h){return b(null,{_animationMemo:null,_isAnimating:!1,renderAnimation:function(){!this._isAnimating&&this._animationMemo&&this._renderAnimation(this._animationMemo.s,this._animationMemo.slices)},_renderAnimation:function(c,k){function b(){n();
c.children.forEach(function(a){a.rawNode&&(a.rawNode.style.display="")});e._isAnimating=!1}function n(){f.forEach(function(a){c.remove(a)});g.forEach(function(a){c.remove(a)})}var e=this;if(this._animationInfos.length&&this.opt.animate&&(this._animationMemo={s:c,slices:k},!m.isAnimationSuspended)){var f=[],g=[];(function(){c.children.forEach(function(a){a.rawNode&&(a.rawNode.style.display="none")})})();this._isAnimating=!0;(function(){e._animationInfos.forEach(function(a,d){l.animateProperty({duration:e.opt.animate.duration||
h.duration,properties:{slice:{start:0,end:k[d],easing:h.easingFunc}},progressFunction:function(b,e){f[d]&&c.remove(f[d]);g[d]&&c.remove(g[d]);b=a.func(e);f[d]=b.shape;g[d]=b.bgShape},endFunction:b})})})()}}})});