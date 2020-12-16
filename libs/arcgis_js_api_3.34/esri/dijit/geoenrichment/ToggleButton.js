// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ToggleButton",["dojo/_base/declare","dojo/Stateful","dojo/on","dojo/dom-construct","dojo/dom-class"],function(e,f,g,h,b){return e(f,{domNode:null,checked:!1,disabled:!1,mode:"toggle",constructor:function(a,c,b){c=c||{};var d=c["class"];this.checked=!!c.checked;this.mode=c.mode||"toggle";this.domNode=h.create("div",{"class":(d?d+" ":"")+"esriGEToggleButton"},a,b);this._updateClass();g(this.domNode,"click",function(a){this.disabled||(a.checked=this.toggle(),this.onClick(a))}.bind(this))},
postscript:function(){},_checkedSetter:function(a){this.checked=!!a;this._updateClass()},_modeSetter:function(a){this.mode=a;this._updateClass()},_disabledSetter:function(a){this.disabled=a;this._updateClass()},_updateClass:function(){b.remove(this.domNode,"checked unchecked switch toggle");b.add(this.domNode,"toggle"===this.mode?"toggle":"switch");b.add(this.domNode,this.checked?"checked":"unchecked");b[this.disabled?"add":"remove"](this.domNode,"disabled")},onClick:function(a){},toggle:function(){this.set("checked",
!this.checked);return this.checked}})});