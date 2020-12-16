// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/NodeLabelEditor","dojo/_base/declare dojo/_base/lang dojo/on dojo/keys dojo/dom-construct dojo/dom-geometry dojo/dom-style esri/dijit/geoenrichment/utils/MouseUtil esri/dijit/geoenrichment/utils/ObjectUtil".split(" "),function(g,h,d,e,f,k,l,m,n){return g(null,{_textMemo:null,_handlers:null,_textBox:null,_node:null,numericOnly:!1,range:null,keepLabelDimensions:!0,constructor:function(a){h.mixin(this,a)},editNodeLabel:function(a,b){var c=this;this._stopEdit();
this._node=a;this._textMemo="string"===typeof b||"number"===typeof b?b:a.innerHTML;b=k.position(a).w;a.innerHTML="";this._textBox=f.create("input",{type:"text"},a);this._textBox.name="node-label";this._textBox.value=this._textMemo;this._textBox.focus();this._textBox.select();this.keepLabelDimensions&&l.set(this._textBox,"width",b+"px");this._handlers=[d(document.body,"keyup",function(a){a.keyCode===e.ESCAPE?c._cancelEdit():a.keyCode===e.ENTER&&c._applyEdit()}),d(document.body,"click",function(){m.isMouseOver(a)||
c._cancelEdit()})]},_checkCanApply:function(a){if(!this.numericOnly)return!0;a=n.parseNumber(a);return isNaN(a)||this.range&&void 0!==this.range.min&&this.range.min>a||this.range&&void 0!==this.range.max&&this.range.max<a?!1:!0},_applyEdit:function(){var a=this._textBox.value;this._checkCanApply(a)?(this._node.innerHTML=a,this._stopEdit(),this.onApply(a)):this._cancelEdit()},_cancelEdit:function(){this._node.innerHTML=this._textMemo;this._stopEdit();this.onCancel()},_stopEdit:function(){this._handlers&&
this._handlers.forEach(function(a){a.remove()});this._textMemo=this._handlers=null;f.destroy(this._textBox);this._node=this._textBox=null},onApply:function(a){},onCancel:function(){}})});