// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/templates/LocateButton.html":'\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\r\n    \x3cdiv class\x3d"${_css.container}"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_locateNode" role\x3d"button" class\x3d"${_css.locate}" tabindex\x3d"0"\x3e\x3cspan\x3e${_i18n.widgets.locateButton.locate.button}\x3c/span\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/LocateButton","require dojo/Evented dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../config dijit/_WidgetBase dijit/a11yclick dijit/_TemplatedMixin dojo/on dojo/Deferred dojo/text!./templates/LocateButton.html dojo/i18n!../nls/jsapi dojo/dom-class dojo/dom-style dojo/dom-attr ../geometry/webMercatorUtils ../geometry/Point ../SpatialReference ../graphic ../symbols/PictureMarkerSymbol ../tasks/ProjectParameters".split(" "),function(g,p,q,d,r,t,l,u,v,w,m,h,x,y,e,n,k,z,A,B,
C,D,E){g=q("esri.dijit.LocateButton",[u,w,p],{templateString:x,options:{theme:"LocateButton",map:null,visible:!0,highlightLocation:!0,symbol:new D(g.toUrl("./images/sdk_gps_location.png"),28,28),infoTemplate:null,scale:null,useTracking:!1,clearOnTrackingStop:!1,setScale:!0,centerAt:!0,timeout:15E3,graphicsLayer:null,geolocationOptions:{maximumAge:0,timeout:15E3,enableHighAccuracy:!0}},constructor:function(a,b){a=d.mixin({},this.options,a);this.domNode=b;this._i18n=y;b=navigator.geolocation;var c=
window.hasOwnProperty("isSecureContext"),c=c&&window.isSecureContext||!c&&"https:"===window.location.protocol;c&&b||(a.visible=!1);b||console.log("LocateButton::navigator.geolocation unsupported.");c||console.log("LocateButton::navigator.geolocation requires a secure origin.");this.set("map",a.map);this.set("theme",a.theme);this.set("visible",a.visible);this.set("scale",a.scale);this.set("highlightLocation",a.highlightLocation);this.set("symbol",a.symbol);this.set("infoTemplate",a.infoTemplate);this.set("geolocationOptions",
a.geolocationOptions);this.set("useTracking",a.useTracking);this.set("setScale",a.setScale);this.set("centerAt",a.centerAt);this.set("timeout",a.timeout);this.set("graphicsLayer",a.graphicsLayer);this.set("clearOnTrackingStop",a.clearOnTrackingStop);this.watch("theme",this._updateThemeWatch);this.watch("visible",this._visible);this.watch("tracking",this._locate);this.watch("useTracking",d.hitch(this,function(){this.get("tracking")&&!this.get("useTracking")&&this._stopTracking();this._setTitle()}));
this._css={container:"locateContainer",locate:"zoomLocateButton",loading:"loading",tracking:"tracking"}},postCreate:function(){this.inherited(arguments);this.own(m(this._locateNode,v,d.hitch(this,this.locate)))},startup:function(){this.inherited(arguments);this.get("map")||(this.set("visible",!1),console.log("LocateButton::map required"));if(this.get("map").loaded)this._init();else m.once(this.get("map"),"load",d.hitch(this,function(){this._init()}))},destroy:function(){this.clear();this._graphicsEvent&&
this._graphicsEvent.remove();this._removeWatchPosition();this.inherited(arguments)},clear:function(){var a=this.get("highlightGraphic"),b=this.get("graphicsLayer");a&&(b?b.remove(a):this.get("map").graphics.remove(a),this.set("highlightGraphic",null))},locate:function(){this.get("useTracking")&&this.set("tracking",!this.get("tracking"));return this._locate()},show:function(){this.set("visible",!0)},hide:function(){this.set("visible",!1)},_setTitle:function(){this.get("useTracking")?this.get("tracking")?
k.set(this._locateNode,"title",this._i18n.widgets.locateButton.locate.stopTracking):k.set(this._locateNode,"title",this._i18n.widgets.locateButton.locate.tracking):k.set(this._locateNode,"title",this._i18n.widgets.locateButton.locate.title)},_removeWatchPosition:function(){this.get("watchId")&&(navigator.geolocation.clearWatch(this.get("watchId")),this.set("watchId",null));this._removePrivateVars()},_stopTracking:function(){e.remove(this._locateNode,this._css.tracking);this._removeWatchPosition();
this.get("clearOnTrackingStop")&&this.clear();this._hideLoading()},_positionToObject:function(a){return a?{coords:d.mixin({},a.coords),timestamp:a.timestamp}:{}},_startTracking:function(){e.add(this._locateNode,this._css.tracking);this._removeWatchPosition();var a=navigator.geolocation.watchPosition(d.hitch(this,function(a){a=this._positionToObject(a);this._setPosition(a).then(d.hitch(this,function(a){this._locateEvent(a)}),d.hitch(this,function(a){a||(a=Error("LocateButton::Error setting the position."));
this._locateError(a)}))}),d.hitch(this,function(a){this.set("tracking",!1);a||(a=Error("LocateButton::Could not get tracking position."));this._locateError(a)}),this.get("geolocationOptions"));this.set("watchId",a)},_removePrivateVars:function(){this._scale=this._position=this._graphic=null},_getCurrentPosition:function(){var a=new h;this._removePrivateVars();var b=setTimeout(d.hitch(this,function(){clearTimeout(b);a.reject(Error("LocateButton::time expired for getting location."))}),this.get("timeout"));
navigator.geolocation.getCurrentPosition(d.hitch(this,function(c){c=this._positionToObject(c);clearTimeout(b);this._setPosition(c).then(d.hitch(this,function(b){a.resolve(b)}),d.hitch(this,function(b){b||(b=Error("LocateButton::Error setting map position."));a.reject(b)}))}),d.hitch(this,function(b){b||(b=Error("LocateButton::Could not get current position."));a.reject(b)}),this.get("geolocationOptions"));return a.promise},_locate:function(){var a=new h;this._showLoading();if(navigator.geolocation)this.get("useTracking")?
this.get("tracking")?(this._startTracking(),a.resolve({tracking:!0})):(this._stopTracking(),a.resolve({tracking:!1})):this._getCurrentPosition().then(d.hitch(this,function(b){this._locateEvent(b);a.resolve(b)}),d.hitch(this,function(b){b||(b=Error("LocateButton::Could not get current position."));this._locateError(b);a.reject(b)}));else{var b=Error("LocateButton::geolocation unsupported");this._locateError(b);a.reject(b)}this._setTitle();return a.promise},_projectPoint:function(a){var b=new h,c=this.get("map").spatialReference,
f=c.wkid;c.isWebMercator()?(a=z.geographicToWebMercator(a),b.resolve(a)):l.defaults.geometryService&&4326!==f?(f=new E,f.geometries=[a],f.outSR=c,l.defaults.geometryService.project(f).then(d.hitch(this,function(a){a&&a.length?b.resolve(a[0]):b.reject(Error("LocateButton::Point was not projected."))}),function(a){a||(a=Error("LocateButton::please specify a geometry service on esri/config to project."));b.reject(a)})):b.resolve(a);return b.promise},_getScale:function(a){var b=this.get("scale");return a&&
a.coords?b||a.coords.accuracy||5E4:b||5E4},_createPoint:function(a){var b;a&&a.coords&&(b=new A([a.coords.longitude,a.coords.latitude],new B({wkid:4326})));return b},_setPosition:function(a){var b=new h,c,f;this._removePrivateVars();if((this._position=a)&&a.coords){if(c=this._createPoint(a))this._graphic=f=this._createGraphic(c,a);var e=this._getScale(a);this._scale=e;c?this._projectPoint(c).then(d.hitch(this,function(c){this._graphic=f=this._createGraphic(c,a);var g={graphic:f,scale:e,position:a};
this.get("setScale")&&this.get("map").setScale(e);this.get("centerAt")?this.get("map").centerAt(c).then(d.hitch(this,function(){b.resolve(g)}),d.hitch(this,function(a){a||(a=Error("LocateButton::Could not center map."));b.reject(a)})):b.resolve(g)}),d.hitch(this,function(a){a||(a=Error("LocateButton::Error projecting point."));b.reject(a)})):(c=Error("LocateButton::Invalid point"),b.reject(c))}else c=Error("LocateButton::Invalid position"),b.reject(c);return b.promise},_createGraphic:function(a,b){var c;
a&&(b={position:b},c=new C(a,this.get("symbol"),b,this.get("infoTemplate")));return c},_locateEvent:function(a){if(a.graphic){var b=this.get("highlightGraphic"),c=this.get("graphicsLayer");b?(b.setGeometry(a.graphic.geometry),b.setAttributes(a.graphic.attributes),b.setInfoTemplate(a.graphic.infoTemplate),b.setSymbol(a.graphic.symbol)):(b=a.graphic,this.get("highlightLocation")&&(c?c.add(b):this.get("map").graphics.add(b)));this.set("highlightGraphic",b)}this._hideLoading();this.emit("locate",a)},
_locateError:function(a){a={graphic:this._graphic,scale:this._scale,position:this._position,error:a};this._hideLoading();this.emit("locate",a)},_showLoading:function(){this.get("useTracking")||e.add(this._locateNode,this._css.loading)},_hideLoading:function(){this.get("useTracking")||e.remove(this._locateNode,this._css.loading)},_init:function(){this._visible();this._setTitle();this.get("tracking")&&this.get("useTracking")&&this._locate();this.set("loaded",!0);this.emit("load",{})},_updateThemeWatch:function(a,
b,c){e.remove(this.domNode,b);e.add(this.domNode,c)},_visible:function(){this.get("visible")?n.set(this.domNode,"display","block"):n.set(this.domNode,"display","none")}});r("extend-esri")&&d.setObject("dijit.LocateButton",g,t);return g});