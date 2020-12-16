// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/InfoWindowLite","dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/array dojo/_base/html dojo/has dojo/dom dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dijit/registry ../kernel ../domUtils ../InfoWindowBase".split(" "),function(r,k,m,n,l,t,u,d,e,p,g,v,w,q,x){var c=r([x],{declaredClass:"esri.dijit.InfoWindowLite",constructor:function(a,b){k.mixin(this,a);a=this.domNode=u.byId(b);a.id=this.id||v.getUniqueId(this.declaredClass);d.add(a,"simpleInfoWindow");
this._title=e.create("div",{"class":"title"},a);this._content=e.create("div",{"class":"content"},a);this._close=e.create("div",{"class":"close"},a)},domNode:null,anchor:"upperright",fixedAnchor:null,coords:null,isShowing:!0,width:250,height:150,title:"Info Window",_bufferWidth:10,_bufferHeight:10,startup:function(){this._anchors=[c.ANCHOR_UPPERRIGHT,c.ANCHOR_LOWERRIGHT,c.ANCHOR_LOWERLEFT,c.ANCHOR_UPPERLEFT];this.resize(this.width,this.height);this.hide();this._closeConnect=m.connect(this._close,"onclick",
this,this.hide)},destroy:function(){this.isShowing&&this.hide();this.destroyDijits(this._title);this.destroyDijits(this._content);m.disconnect(this._closeConnect);e.destroy(this.domNode);this.domNode=this._title=this._content=this._anchors=this._closeConnect=null},setTitle:function(a){a?d.remove(this._title,"empty"):d.add(this._title,"empty");this.destroyDijits(this._title);this.__setValue("_title",a);return this},setContent:function(a){a?d.remove(this._title,"empty"):d.add(this._title,"empty");this.destroyDijits(this._content);
this.__setValue("_content",a);return this},setFixedAnchor:function(a){a&&-1===n.indexOf(this._anchors,a)||(this.fixedAnchor=a,this.isShowing&&this.show(this.mapCoords||this.coords,a),this.onAnchorChange(a))},show:function(a,b,c){if(a&&(a.spatialReference?(this.mapCoords=a,a=this.coords=this.map.toScreen(a,!0)):(this.mapCoords=null,this.coords=a),b&&-1!==n.indexOf(this._anchors,b)||(b=this._getAnchor(a)),b=this.anchor=this.fixedAnchor||b,q.show(this.domNode),this._adjustContentArea(),this._adjustPosition(a,
b),this.isShowing=!0,!c))this.onShow()},hide:function(a,b){q.hide(this.domNode);this.isShowing=!1;if(!b)this.onHide()},move:function(a,b){b?a=this.coords.offset(a.x,a.y):(this.coords=a,this.mapCoords&&(this.mapCoords=this.map.toMap(a)));this._adjustPosition(a,this.anchor)},resize:function(a,b){this.width=a;this.height=b;g.set(this.domNode,{width:a+"px",height:b+"px"});g.set(this._close,{left:a-2+"px",top:"-12px"});this._adjustContentArea();this.coords&&this._adjustPosition(this.coords,this.anchor);
this.onResize(a,b)},onShow:function(){this.__registerMapListeners();this.startupDijits(this._title);this.startupDijits(this._content)},onHide:function(){this.__unregisterMapListeners()},onResize:function(){},onAnchorChange:function(){},setMap:function(a){this.inherited(arguments);e.place(this.domNode,a.root)},_adjustContentArea:function(){var a=p.getContentBox(this.domNode),b=l.coords(this._title),c=l.coords(this._content),f=p.getContentBox(this._content);g.set(this._content,{height:a.h-b.h-(c.h-
f.h)+"px"})},_getAnchor:function(a){var b=this.map;return b&&a?(a.y<b.height/2?"lower":"upper")+(a.x<b.width/2?"right":"left"):"upperright"},_adjustPosition:function(a,b){var d=Math.round(a.x);a=Math.round(a.y);var f=this._bufferWidth,e=this._bufferHeight,h=l.coords(this.domNode);switch(b){case c.ANCHOR_UPPERLEFT:d-=h.w+f;a-=h.h+e;break;case c.ANCHOR_UPPERRIGHT:d+=f;a-=h.h+e;break;case c.ANCHOR_LOWERRIGHT:d+=f;a+=e;break;case c.ANCHOR_LOWERLEFT:d-=h.w+f,a+=e}g.set(this.domNode,{left:d+"px",top:a+
"px"})}});k.mixin(c,{ANCHOR_UPPERRIGHT:"upperright",ANCHOR_LOWERRIGHT:"lowerright",ANCHOR_LOWERLEFT:"lowerleft",ANCHOR_UPPERLEFT:"upperleft"});t("extend-esri")&&k.setObject("dijit.InfoWindowLite",c,w);return c});