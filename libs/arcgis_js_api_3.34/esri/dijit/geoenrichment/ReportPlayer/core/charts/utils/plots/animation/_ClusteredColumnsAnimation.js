// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/animation/_ClusteredColumnsAnimation",["dojo/_base/declare","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState","./_defaults"],function(c,f,g,d){return c(null,{_animateColumn:function(a){if(!a.isAnimating&&!g.isAnimationSuspended){var c=a.shape,e=a.voffset,b=a.vsize;0===b&&(b=1);f.animateTransform({shape:c,duration:this.animate.duration||d.duration,easing:d.easingFunc,transform:[{name:"translate",
start:[0,e-e/b],end:[0,0]},{name:"scale",start:[1,1/b],end:[1,1]}],onEnd:function(){a.isAnimating=!1}})}},renderAnimation:function(){this._animationInfos&&this._animationInfos.forEach(function(a){this._animateColumn(a)},this)}})});