// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/form/templates/Tabs.html":'\x3cdiv class\x3d"gxeTabs gxeIndent" style\x3d"display:none;"\x3e\r\n  \x3cdiv class\x3d"gxeHeader" data-dojo-attach-point\x3d"tabsNode"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"gxeContainer" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/metadata/form/Tabs","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/event dojo/on dojo/keys dojo/topic dojo/dom-class dojo/dom-construct dojo/dom-style dojo/has ../base/Templated dojo/text!./templates/Tabs.html ../base/TabButton ../base/TabRadio ../../../kernel".split(" "),function(e,f,g,m,n,k,q,l,p,h,r,t,u,v,w,x){e=e([t],{_activeTabButton:null,_isGxeTabs:!0,_tabButtons:null,templateString:u,useRadios:!1,showPromptIfRadios:!0,promptLabel:null,postCreate:function(){this.inherited(arguments);
this._tabButtons=[];this.tabsNode.setAttribute("role","tablist")},startup:function(){this._started||(this.noIndent&&l.remove(this.domNode,"gxeIndent"),this.inherited(arguments),this._buildTabs())},_activateTab:function(a){var c=this.useRadios;g.forEach(this._tabButtons,function(b){b===a?(b.domNode.setAttribute("aria-selected","true"),b.tabWgt.domNode.setAttribute("aria-hidden","false"),l.add(b.domNode,"current"),h.set(b.tabWgt.domNode,"display","block"),c&&(b.tabWgt._isOptionallyOff=!1)):(b.domNode.setAttribute("aria-selected",
"false"),b.tabWgt.domNode.setAttribute("aria-hidden","true"),l.remove(b.domNode,"current"),h.set(b.tabWgt.domNode,"display","none"),c&&(b.tabWgt._isOptionallyOff=!0))});try{q.publish("gxe/tab-activated",{tabs:this,button:a})}catch(b){console.error(b)}},_addTab:function(a){var c=this._getLabel(a);h.set(a.domNode,"display","none");var b=null,e=this.id+"_radios",b=this.useRadios?new w({label:c,tabWgt:a,radioName:e,onClick:f.hitch(this,function(a){this._activateTab(a)})}):new v({label:c,tabWgt:a,onClick:f.hitch(this,
function(a){this._activateTab(a)})});this.own(n(b.domNode,"focus",f.hitch(this,function(){b.setChecked&&b.setChecked(!0);this._activateTab(b)})));this.own(n(b.domNode,"keydown",f.hitch(this,function(d){var c=null;if(d.keyCode===k.RIGHT_ARROW)d=this._tabButtons.indexOf(b),-1!==d&&d<this._tabButtons.length-1&&(c=this._tabButtons[d+1]);else if(d.keyCode===k.LEFT_ARROW)d=this._tabButtons.indexOf(b),0<d&&(c=this._tabButtons[d-1]);else if(d.keyCode===k.DOWN_ARROW)"function"===typeof a.focusDown&&(m.stop(d),
a.focusDown(d));else if(d.keyCode===k.UP_ARROW)for(m.stop(d),d=this.getParent();d;){if(d._isGxeTabs){g.some(d._tabButtons,function(a){if(l.contains(a.domNode,"current"))return a.domNode.focus(),!0});break}d=d.getParent()}c&&c.domNode.focus()})));b.domNode.setAttribute("role","tab");b.domNode.setAttribute("aria-controls",a.id);b.domNode.setAttribute("tabindex","0");a.domNode.setAttribute("role","tabpanel");a.domNode.setAttribute("aria-labelledby",b.id);a.tabButton=b;(a.hide||a.notApplicable)&&h.set(b.domNode,
"display","none");p.place(b.domNode,this.tabsNode,"last");this._tabButtons.push(b);return b},_addPrompt:function(){var a=this.promptLabel;null===a&&(a=this.i18nBase.general.choose);var c=p.create("span",{"class":"gxeEditOnly gxeTabsPrompt"},this.tabsNode,"last");this.setNodeText(c,a)},_buildTabs:function(){var a=null;this.useRadios&&this.showPromptIfRadios&&this._addPrompt();g.forEach(this.getChildren(),function(a){this._addTab(a)},this);g.some(this._tabButtons,function(c){if(c.tabWgt&&!c.tabWgt.notApplicable)return a=
c,!0});a&&(a.radioName&&a.setChecked(!0),this._activateTab(a),h.set(this.domNode,"display","block"))},ensureActiveTab:function(a){g.some(this._tabButtons,function(c){if(c.tabWgt===a)return this._activateTab(c),this.useRadios&&c.setChecked&&c.setChecked(!0),!0},this)},_getLabel:function(a){return"function"===typeof a.getLabelString?a.getLabelString():"string"===typeof a.label?a.label:"Untitled"}});r("extend-esri")&&f.setObject("dijit.metadata.form.Tabs",e,x);return e});