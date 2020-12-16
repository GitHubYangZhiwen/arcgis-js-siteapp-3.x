// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/customgp/common/dijit/Popup","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/fx dojo/_base/window dojo/on dojo/sniff dojo/touch dojo/query dojo/dnd/move dijit/_WidgetBase".split(" "),function(p,e,g,b,n,q,h,r,t,l,u,v){var m=0;return p(v,{declaredClass:"esri.dijit.analysis.customgp.common.dijit.Popup",baseClass:"jimu-popup",titleLabel:"",content:null,container:null,buttons:[],enabledButtons:[],disabledButtons:[],onClose:null,_fixedHeight:!1,
autoHeight:!1,maxHeight:800,maxWidth:1024,constructor:function(){this.buttons=[];this.enabledButtons=[];this.disabledButtons=[];this.pauseKeyHandles=[];this.container=q.body()},postCreate:function(){this._preProcessing();this.inherited(arguments);this._initDomNode();this._positioning();b.place(this.domNode,this.container);setTimeout(e.hitch(this,function(){this._moveToMiddle()}),50);this.own(h(window,"resize",e.hitch(this,function(){this._fixedHeight||this.autoHeight?(this._calculatePosition(),this._moveToMiddle()):
this._positioning()})));this.overlayNode=b.create("div",{"class":"jimu-overlay"},this.container);this._increaseZIndex();n.animateProperty({node:this.domNode,properties:{opacity:1},duration:200}).play();this.domNode.focus()},_preProcessing:function(){"number"===typeof this.height&&(this._fixedHeight=!0,this.autoHeight=!1);this.autoHeight&&(this.maxHeight=598)},_createTitleNode:function(){this.titleNode=b.create("div",{"class":"title"},this.domNode);this.titleLabeNode=b.create("span",{"class":"title-label jimu-float-leading",
innerHTML:this.titleLabel||"\x26nbsp"},this.titleNode);this.closeBtnNode=b.create("div",{"class":"close-btn jimu-icon jimu-icon-close jimu-float-trailing"},this.titleNode);var a=null,a="ontouchstart"in document?t.press:"click";this.own(h(this.closeBtnNode,a,e.hitch(this,this.close)))},_initDomNode:function(){this._createTitleNode();this.contentContainerNode=b.create("div",{"class":"content"},this.domNode);this.content&&("string"===typeof this.content?this.contentContainerNode.innerHTML=this.content:
this.content.domNode?(this.content.placeAt(this.contentContainerNode),this.content.popup=this):1===this.content.nodeType&&b.place(this.content,this.contentContainerNode));this.buttonContainer=b.create("div",{"class":"button-container"},this.domNode);0===this.buttons.length&&b.setStyle(this.buttonContainer,"display","none");for(var a=this.buttons.length-1;-1<a;a--)this._createButton(this.buttons[a]),this.buttons[a].disable&&this.disableButton(a)},_limitButtonsMaxWidth:function(){var a=this.enabledButtons.length;
if(0!==a){var d=b.getContentBox(this.buttonContainer),c=b.getMarginExtents(this.enabledButtons[0]),f=b.getPadBorderExtents(this.enabledButtons[0]),k=0,f=8===r("ie")?f.l+f.r:0,k=(d.w-(c.l+c.r+f)*a)/a;0<k&&(g.forEach(this.enabledButtons,e.hitch(this,function(a){b.setStyle(a,"maxWidth",k+"px")})),g.forEach(this.disabledButtons,e.hitch(this,function(a){b.setStyle(a,"maxWidth",k+"px")})))}},_moveableNode:function(a,d){this.moveable&&(this.moveable.destroy(),this.moveable=null);var c=b.getMarginBox(this.container);
c.l=c.l-a+d;c.w+=2*(a-d);this.moveable=new u.boxConstrainedMoveable(this.domNode,{box:c,handle:this.titleNode||this.contentContainerNode,within:!0});this.own(h(this.moveable,"Moving",e.hitch(this,this.onMoving)));this.own(h(this.moveable,"MoveStop",e.hitch(this,this.onMoveStop)))},_getHeaderBox:function(){return 0===l("#header").length?{t:0,l:0,w:0,h:0}:b.getMarginBox("header")},_getFooterBox:function(){return 0===l(".footer",this.container).length?{t:0,l:0,w:0,h:0}:b.getMarginBox(l(".footer",this.container)[0])},
_calculatePosition:function(){var a=b.getContentBox(this.container),d=this._getHeaderBox(),c=this._getFooterBox(),c=a.h-d.h-c.h-40,f=0;f=this._fixedHeight?this.height:this.autoHeight?c-200:this.height=c>this.maxHeight?this.maxHeight:c;c=(c-f)/2+d.h+20;c=c<d.h?d.h:c;this.width=this.width||this.maxWidth;b.setStyle(this.domNode,{left:(a.w-this.width)/2+"px",top:c+"px",width:this.width+"px"})},_calculateHeight:function(){this.autoHeight?(b.setStyle(this.domNode,"height","auto"),b.addClass(this.contentContainerNode,
"content-static"),0===this.buttons.length&&b.setStyle(this.contentContainerNode,{marginBottom:"15px"})):(b.setStyle(this.domNode,"height",this.height+"px"),b.addClass(this.contentContainerNode,"content-absolute"),b.addClass(this.buttonContainer,"button-container-absolute"),0===this.buttons.length&&b.setStyle(this.contentContainerNode,{bottom:"15px"}));this._moveableNode(this.width,100)},_moveToMiddle:function(){if(this.autoHeight){var a=b.getMarginBox(this.domNode),d=b.getContentBox(this.container),
c=this._getHeaderBox(),f=this._getFooterBox(),f=d.h-c.h-f.h-40,e=0,e=a.h||f-200,a=(f-e)/2+c.h+20,a=a<c.h?c.h:a;b.setStyle(this.domNode,{left:(d.w-this.width)/2+"px",top:a+"px",width:this.width+"px"})}},_positioning:function(){this._calculatePosition();this._calculateHeight()},_increaseZIndex:function(){b.setStyle(this.domNode,"zIndex",m+200+1);b.setStyle(this.overlayNode,"zIndex",m+200);m++},setTitleLabel:function(a){this.titleNode.innerHTML=a},onMoving:function(a){b.setStyle(a.node,"opacity",.9)},
onMoveStop:function(a){b.setStyle(a.node,"opacity",1)},close:function(){if(!this.onClose||!1!==this.onClose()){var a=this.domNode.parentNode,d=e.clone(this.domNode);b.setStyle(this.domNode,"display","none");b.destroy(this.overlayNode);this.destroy();this.moveable.destroy();b.place(d,a);n.animateProperty({node:d,properties:{opacity:0},duration:200,onEnd:function(){b.destroy(d)}}).play()}},addButton:function(a){this._createButton(a)},_createButton:function(a){var d=" ";a.classNames&&0<a.classNames.length&&
"function"===typeof a.classNames.join&&(d+=a.classNames.join(" "));var c=b.create("div",{"class":"jimu-btn jimu-popup-action-btn jimu-float-trailing jimu-trailing-margin1 "+d,innerHTML:a.label,title:a.title||a.label},this.buttonContainer);this.enabledButtons.unshift(c);d=b.create("div",{"class":"jimu-btn jimu-state-disabled jimu-float-trailing jimu-trailing-margin1 "+d,title:a.title||a.label,innerHTML:a.label,style:{display:"none"}},this.buttonContainer);this.disabledButtons.unshift(d);this.own(h(c,
"click",e.hitch(this,function(b){if(a.onClick)a.onClick(b);else this.close()})))},setButtonProps:function(a,d){"number"===typeof a&&isFinite(a)||(d=a,a=0);if(d&&0!==this.enabledButtons.length)for(var c in d)"title"===c?(b.setAttr(this.enabledButtons[a],"title",d[c]),b.setAttr(this.disabledButtons[a],"title",d[c])):"label"===c&&(b.setProp(this.enabledButtons[a],"innerHTML",d[c]),b.setProp(this.disabledButtons[a],"innerHTML",d[c]))},enableButton:function(a){"number"===typeof a&&isFinite(a)&&a<this.enabledButtons.length?
(b.setStyle(this.enabledButtons[a],"display","inline-block"),b.setStyle(this.disabledButtons[a],"display","none")):(g.forEach(this.enabledButtons[a],e.hitch(this,function(a){b.setStyle(a,"display","inline-block")})),g.forEach(this.disabledButtons[a],e.hitch(this,function(a){b.setStyle(a,"display","none")})))},disableButton:function(a){"number"===typeof a&&isFinite(a)&&a<this.disabledButtons.length?(b.setStyle(this.disabledButtons[a],"display","inline-block"),b.setStyle(this.enabledButtons[a],"display",
"none")):(g.forEach(this.disabledButtons,e.hitch(this,function(a){b.setStyle(a,"display","inline-block")})),g.forEach(this.enabledButtons,e.hitch(this,function(a){b.setStyle(a,"display","none")})))},showButton:function(a){this.enableButton(a)},hideButton:function(a){"number"===typeof a&&isFinite(a)&&a<this.disabledButtons.length?(b.setStyle(this.disabledButtons[a],"display","none"),b.setStyle(this.enabledButtons[a],"display","none")):(g.forEach(this.disabledButtons,e.hitch(this,function(a){b.setStyle(a,
"display","none")})),g.forEach(this.enabledButtons,e.hitch(this,function(a){b.setStyle(a,"display","none")})))}})});