// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/MapImageLayer","dojo/_base/declare dojo/_base/connect dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/dom-style ../kernel ../config ../sniff ../domUtils ../geometry/Point ../geometry/webMercatorUtils ./layer".split(" "),function(w,l,u,x,m,f,k,y,n,t,v,r,z){var p=w([z],{declaredClass:"esri.layers.MapImageLayer","-chains-":{constructor:"manual"},constructor:function(a){this.inherited(arguments,[null,a]);this._mapImages=[];var b=u.hitch;this._panStart=b(this,this._panStart);
this._pan=b(this,this._pan);this._extentChange=b(this,this._extentChange);this._zoom=b(this,this._zoom);this._zoomStart=b(this,this._zoomStart);this._scale=b(this,this._scale);this._resize=b(this,this._resize);l.connect(this,"onSuspend",this,this._onSuspend);l.connect(this,"onResume",this,this._onResume);this.loaded=!0;this.onLoad(this)},opacity:1,addImage:function(a){var b=this._mapImages.push(a),b=b-1;a._idx=b;a._layer=this;this._div&&this._createImage(a,b)},removeImage:function(a){if(a){var b=
a._idx,c=this._mapImages;if(c[b]===a){delete c[b];if(b=a._node)this._clearEvents(b),b.e_idx=b.e_bl=b.e_tr=b.e_l=b.e_t=b.e_w=b.e_h=null,b.parentNode&&(b.parentNode.removeChild(b),m.destroy(b));a._node=a._idx=a._layer=null}}},removeAllImages:function(){var a=this._mapImages,b,c=a.length;for(b=0;b<c;b++){var d=a[b];d&&this.removeImage(d)}this._mapImages=[]},getImages:function(){var a=this._mapImages,b=[],c,d=a.length;for(c=0;c<d;c++)a[c]&&b.push(a[c]);return b},setOpacity:function(a){this.opacity!=a&&
(this._opacityChanged(this.opacity=a),this.onOpacityChange())},onOpacityChange:function(){},_opacityChanged:function(a){var b=this._div,c,d;if(b)if(!n("ie")||8<n("ie"))f.set(b,"opacity",a);else for(d=b.childNodes,c=d.length,b=0;b<c;b++)f.set(d[b],"opacity",a)},_createImage:function(a,b){var c=m.create("img");f.set(c,{position:"absolute"});1>a.opacity?f.set(c,"opacity",a.opacity):8>=n("ie")&&f.set(c,"opacity",this.opacity);!a.rotation||9>n("ie")||f.set(c,k._css.names.transform,k._css.rotate(360-a.rotation));
a._node=c;c.e_idx=b;c.e_layer=this;c.e_load=l.connect(c,"onload",p.prototype._imageLoaded);c.e_error=l.connect(c,"onerror",p.prototype._imageError);c.e_abort=l.connect(c,"onabort",p.prototype._imageError);c.src=a.href},_imageLoaded:function(a,b){a=b||a.target||a.currentTarget;b=a.e_layer;var c=b._mapImages[a.e_idx],d=b._map;d&&(d.__zooming||d.__panning||!b._sr)?b._standby.push(a):(b._clearEvents(a),c&&c._node===a&&d&&b._attach(c))},_imageError:function(a){a=a.target||a.currentTarget;var b=a.e_layer,
c=b._mapImages[a.e_idx];b._clearEvents(a);c&&(c._node=null)},_clearEvents:function(a){var b=l.disconnect;b(a.e_load);b(a.e_error);b(a.e_abort);a.e_load=a.e_error=a.e_abort=a.e_layer=null},_attach:function(a){var b=a.extent,c=b.spatialReference,d=this._sr,e=this._div,h=a._node,f=new v({x:b.xmin,y:b.ymin,spatialReference:c}),b=new v({x:b.xmax,y:b.ymax,spatialReference:c});d.equals(c)||(d.isWebMercator()&&4326===c.wkid?(f=r.geographicToWebMercator(f),b=r.geographicToWebMercator(b)):c.isWebMercator()&&
4326===d.wkid&&(f=r.webMercatorToGeographic(f),b=r.webMercatorToGeographic(b)));h.e_bl=f;h.e_tr=b;a.visible&&(this._setPos(h,e._left,e._top),(this._active||e).appendChild(h))},_setPos:function(a,b,c){var d=a.e_bl,e=a.e_tr,h=this._map,d=h.toScreen(d),e=h.toScreen(e);b=d.x-b;c=e.y-c;var q=Math.abs(e.x-d.x),d=Math.abs(d.y-e.y),e={width:q+"px",height:d+"px"},g=this._mapImages[a.e_idx];"css-transforms"===h.navigationMode?e[k._css.names.transform]=k._css.translate(b,c)+(g.rotation?" "+k._css.rotate(360-
g.rotation):""):(e.left=b+"px",e.top=c+"px");f.set(a,e);a.e_l=b;a.e_t=c;a.e_w=q;a.e_h=d},managedSuspension:!0,_setMap:function(a,b){this.inherited(arguments);var c=this._div=m.create("div",null,b),d=k._css.names,e={position:"absolute"},h=a.__visibleDelta;if(!n("ie")||8<n("ie"))e.opacity=this.opacity;"css-transforms"===a.navigationMode?(e[d.transform]=k._css.translate(h.x,h.y),f.set(c,e),c._left=h.x,c._top=h.y,e={position:"absolute",width:a.width+"px",height:a.height+"px",overflow:"visible"},this._active=
m.create("div",null,c),f.set(this._active,e),this._passive=m.create("div",null,c),f.set(this._passive,e)):(c._left=0,c._top=0,f.set(c,e));this._standby=[];d=this._mapImages;h=d.length;for(e=0;e<h;e++){var q=d[e];q._node||this._createImage(q,q._idx)}t.hide(c);return c},_unsetMap:function(a,b){this._disconnect();var c=this._div;if(c){var d=this._mapImages,e,f=d.length;for(e=0;e<f;e++){var k=d[e];if(k){var g=k._node;g&&(this._clearEvents(g),g.e_idx=g.e_bl=g.e_tr=g.e_l=g.e_t=g.e_w=g.e_h=null);k._node=
null}}b.removeChild(c);m.destroy(c)}this._map=this._div=this._sr=this._active=this._passive=this._standby=null;this.inherited(arguments)},_onSuspend:function(){this._disconnect();t.hide(this._div)},_onResume:function(a){a.firstOccurrence&&(this._sr=this._map.spatialReference,this._processStandbyList());a=this._map;var b=this._div,c=a.__visibleDelta;"css-transforms"===a.navigationMode&&(b._left=c.x,b._top=c.y,f.set(b,k._css.names.transform,k._css.translate(b._left,b._top)));this._redraw("css-transforms"===
a.navigationMode);this._connect(a);t.show(b)},_connect:function(a){if(!this._connections){var b=l.connect,c="css-transforms"===a.navigationMode;this._connections=[b(a,"onPanStart",this._panStart),b(a,"onPan",this._pan),b(a,"onExtentChange",this._extentChange),c&&b(a,"onZoomStart",this._zoomStart),c?b(a,"onScale",this._scale):b(a,"onZoom",this._zoom),c&&b(a,"onResize",this._resize)];c&&this._resize(a.extent,a.width,a.height)}},_disconnect:function(){this._connections&&(x.forEach(this._connections,
l.disconnect),this._connections=null)},_panStart:function(){this._panL=this._div._left;this._panT=this._div._top},_pan:function(a,b){a=this._div;a._left=this._panL+b.x;a._top=this._panT+b.y;"css-transforms"===this._map.navigationMode?f.set(a,k._css.names.transform,k._css.translate(a._left,a._top)):f.set(a,{left:a._left+"px",top:a._top+"px"})},_extentChange:function(a,b,c){c?this._redraw("css-transforms"===this._map.navigationMode):b&&this._pan(a,b);this._processStandbyList()},_processStandbyList:function(){var a,
b=this._standby;if(b&&b.length)for(a=b.length-1;0<=a;a--)this._imageLoaded(null,b[a]),b.splice(a,1)},_redraw:function(a){if(a){a=this._passive;var b=k._css.names;f.set(a,b.transition,"none");this._moveImages(a,this._active);f.set(a,b.transform,"none")}a=this._active||this._div;var b=this._div._left,c=this._div._top,d,e=a.childNodes.length,h;for(d=0;d<e;d++)h=a.childNodes[d],this._setPos(h,b,c)},_zoom:function(a,b,c){a=this._div;var d=a._left,e=a._top,h,k=a.childNodes.length,g;for(h=0;h<k;h++){g=a.childNodes[h];
var l=g.e_w*b,n=g.e_h*b,m=(c.x-d-g.e_l)*(l-g.e_w)/g.e_w,p=(c.y-e-g.e_t)*(n-g.e_h)/g.e_h,m=isNaN(m)?0:m,p=isNaN(p)?0:p;f.set(g,{left:g.e_l-m+"px",top:g.e_t-p+"px",width:l+"px",height:n+"px"})}},_zoomStart:function(){this._moveImages(this._active,this._passive)},_moveImages:function(a,b){a=a.childNodes;var c;c=a.length;if(0<c)for(--c;0<=c;c--)b.appendChild(a[c])},_scale:function(a,b){var c=k._css.names,d=this._passive;f.set(d,c.transition,b?"none":c.transformName+" "+y.defaults.map.zoomDuration+"ms ease");
({})[c.transform]=k._css.matrix(a);f.set(d,c.transform,k._css.matrix(a))},_resize:function(a,b,c){f.set(this._active,{width:b+"px",height:c+"px"});f.set(this._passive,{width:b+"px",height:c+"px"})}});n("extend-esri")&&u.setObject("layers.MapImageLayer",p,k);return p});