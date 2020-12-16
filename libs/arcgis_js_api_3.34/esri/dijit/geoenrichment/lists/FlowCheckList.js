// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/lists/FlowCheckList","esri/declare dojo/dom-class dojo/dom-construct dojo/query dojo/on ./FlowList ./FlowListDefaultItemRenderer".split(" "),function(h,l,k,m,n,p,q){var r=new h(q,{_lastClickedItem:null,createPresentation:function(a,b,c,d,h){var g=this;b=k.create("div",{"class":"TrimWithEllipses listItem"},c);k.create("div",{"class":"dijit dijitInline esriTriStateCheckBoxIcon esriTriStateCheckBox"},b);k.create("span",{innerHTML:"\x26nbsp;"+a[d.labelProperty]},b);this.setSelected(b,
d.isSelected(a));n(b,"click",function(b){var c=d.items||d.store.data;if(b.shiftKey&&g._lastClickedItem&&-1!==c.indexOf(g._lastClickedItem)){var e=c.indexOf(g._lastClickedItem),f=c.indexOf(a);b=Math.max(e,f);for(e=Math.min(e,f);e<=b;e++)f=c[e],f!==g._lastClickedItem&&d.setSelected(f,!d.isSelected(f))}else d.setSelected(a,!d.isSelected(a));d.onSelectionChanged();g._lastClickedItem=a});return b},setSelected:function(a,b){var c=m(".esriTriStateCheckBox",a)[0];l[b?"add":"remove"](c,"esriTriStateCheckBoxChecked");
l[b?"add":"remove"](a,"listItemSelected")},selectPresentation:function(){}});return h("esri.dijit.geoenrichment.FlowCheckList",p,{_selection:null,buildRendering:function(){this._selection={};this.itemRenderer=new r;this.inherited(arguments)},getSelection:function(){return Object.keys(this._selection)},getSelectedItems:function(){for(var a=[],b=this.items||this.store.data,c=0;c<b.length;c++)this._selection[b[c][this.idProperty]]&&a.push(b[c]);return a},setSelection:function(a){this._selection={};a&&
a.forEach(function(a){this._selection[a]=!0},this);(this.items||this.store.data).forEach(function(a){this.setSelected(a,this.isSelected(a))},this)},selectAll:function(){this.setSelection((this.items||this.store.data).map(function(a){return a[this.idProperty]},this))},isSelected:function(a){return this._selection[a?a[this.idProperty]:a]},setSelected:function(a,b){b?this._selection[a[this.idProperty]]=!0:delete this._selection[a[this.idProperty]];a=this.getItemNode(a);this.itemRenderer.setSelected(a,
b)},onSelectionChanged:function(){}})});