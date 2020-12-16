// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/DnDUtil",["dojo/on","dojo/sniff","./DeviceUtil","./KeyboardUtil"],function(c,q,r,u){var m={MOBILE_TOLERANCE:10,LONG_PRESS_TIMEOUT:500,addNoDragClickHandler:function(a,c,b){b=b||{};return r.isMobileDevice()?m._addMobile(a,c,b):m._addPC(a,c,b)},_addPC:function(a,n,b){var g=b.tolerance||0,h,d,e=c(a,"mousedown",function(a){d&&d.remove();var b=a.clientX,e=a.clientY,l;h=c(document.body,"mousemove",function(a){if(!a.shiftKey&&!u.isCtrl(a)){var c=a.clientY;if(0<Math.abs(a.clientX-
b)||0<Math.abs(c-e))l=!0}});d=c.once(document.body,"mouseup",function(a){h.remove();var c=a.clientX,d=a.clientY;!l&&Math.abs(c-b)<=g&&Math.abs(d-e)<=g&&n(a)})});return{remove:function(){h&&h.remove();d&&d.remove();e&&e.remove()}}},_addMobile:function(a,n,b){function g(){e&&e.remove();k&&k.remove();p&&p.remove();clearTimeout(v)}var h=b.tolerance||m.MOBILE_TOLERANCE,d,e,k,p,v;d=c(a,"touchstart",function(d){function l(a){return Math.abs(d.clientX-a.clientX)<h&&Math.abs(d.clientY-a.clientY)<h}g();var f;
if(b.detectLongPress){var w;k=c(a,"touchmove",function(a){w=a});v=setTimeout(function(){l(w||d)&&(b.ignoreReleaseIfLongPressHappened&&(f=!0),b.longPressCallback(d))},b.longPressTimeout||m.LONG_PRESS_TIMEOUT)}e=c.once(a,"touchend",function(a){!f&&l(a)&&n(a);g()});p=c.once(a,"touchcancel",g)});return{remove:function(){d&&d.remove();g()}}},addGlobalDragHanlder:function(a){function n(){b&&b.remove();g&&g.remove();h&&h.remove();d&&d.remove();e&&a.destroyDnDBox&&a.destroyDnDBox(e)}a.tolerance=0<a.tolerance?
a.tolerance:5;var b,g,h,d,e;return c(a.node,a.downEventName||r.press,function(k){n();if(!a.onMouseDown||a.onMouseDown(k)){var p=k.clientX,m=k.clientY,l=p,t=m;b=c(document.body,r.move,function(f){function k(){n();a.dragEnded&&a.dragEnded()}f.shiftKey||u.isCtrl(f)||!(Math.abs(p-f.clientX)>=a.tolerance||Math.abs(m-f.clientY)>=a.tolerance)||(b.remove(),a.dragStarted&&!a.dragStarted(f,f.clientX-l,f.clientY-t))||(l=f.clientX,t=f.clientY,e=a.createDnDBox&&a.createDnDBox(),g=c(document.body,r.move,function(b){a.dragMoved&&
a.dragMoved(b,b.clientX-l,b.clientY-t,k);l=b.clientX;t=b.clientY}),h=c.once(document.body,q("ie")||q("trident")?"mouseup, touchend, click":"mouseup, touchend",function(){k()}),d=c(document.body,"keyup",function(b){27==b.keyCode&&(n(),a.dragCanceled&&a.dragCanceled())}))});c.once(document.body,q("ie")||q("trident")?"mouseup, touchend, click":"mouseup, touchend",function(){b.remove()})}})}};return m});