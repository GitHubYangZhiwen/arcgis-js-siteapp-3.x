// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/supportClasses/PlayerToFullScreenAnimator",["esri/dijit/geoenrichment/utils/animation/AnimationUtil","esri/dijit/geoenrichment/utils/DelayUtil"],function(b,d){return{animateTo:function(a){if(!a._isAnimatedTo){a._isAnimatedTo=!0;var c=b.animateResize({duration:300,domNode:a.domNode,startScaleX:.3,startScaleY:.3,fromOffset:{x:"c",y:"c"},toBox:{x:0,y:0,w:document.body.clientWidth,h:document.body.clientHeight}});b.animateFadeIn({domNode:a.domNode,duration:300});
return c.then(function(){return d.delay(100)})}},animateFrom:function(a){if(a._isAnimatedTo){a._isAnimatedTo=!1;var c=b.animateResize({duration:300,domNode:a.domNode,endScaleX:.3,endScaleY:.3,toOffset:{x:"c",y:"c"},toBox:{x:(document.body.clientWidth-300)/2,y:(document.body.clientHeight-200)/2,w:300,h:200}});b.animateFadeOut({domNode:a.domNode,duration:300});return c.then(function(){return d.delay(100)})}}}});