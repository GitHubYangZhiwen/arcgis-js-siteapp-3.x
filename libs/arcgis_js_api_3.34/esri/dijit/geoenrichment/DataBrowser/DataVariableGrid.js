// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/DataBrowser/DataVariableGrid","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/dom-class dojo/on dijit/Tooltip dgrid1/OnDemandGrid dgrid1/Tree ../_Invoke ../SelectableTree ../TriStateItem ./VariableUtil ./VariableToggle".split(" "),function(p,e,f,k,h,l,m,q,r,t,u,v,w,x){return p([q,r,t],{manager:null,showHeader:!1,keepScrollPosition:!0,groupCategories:!0,animateSelection:null,queryID:"/",_selectionHandler:null,_cellHash:null,_tooltipIcon:null,
_tooltipHidden:!1,_inUpdate:!1,_expansionHash:null,_lastToggledIndex:0,_maxGroupSize:0,buildRendering:function(){var a={label:"",renderCell:e.hitch(this,this._renderNode),sortable:!1,renderExpando:this.groupCategories};this.treeIndentWidth=this.manager.variables.favorites?1:this.manager.multipleSelectIsAllowed()?16:8;this.columns=[a];this._cellHash={};this.setVariables([]);this.inherited(arguments)},refresh:function(){this._cellHash={};this.inherited(arguments)},setVariables:function(a,b){this._cleanup();
a=this._prepareVariables(a);a.length&&(this._selectionHandler=this.manager.watch("selection",e.hitch(this,this._selectionUpdated)));this.groupCategories&&(a.length&&!b?(this._expansionHash=this._expansionHash||{},this._expanded=e.mixin({},this._expansionHash[this.queryID]),1==a.length&&(this._expanded[a[0].id]=!0)):this._expansionHash&&(this._expansionHash[this.queryID]=e.mixin({},this._expanded)));this.store=b=new u(a,{isDstoreTree:!0});this.set("collection",b)},_prepareVariables:function(a){if(!a.length)return[];
this._lastToggledIndex=this._maxGroupSize=0;this.groupCategories?(a=this._prepareVariableCategories(a),this.manager.multipleSelectIsAllowed()&&f.forEach(a,function(a,c){a.index=c+1;f.forEach(a.children,function(a,b){a.index=b+1});this._maxGroupSize=Math.max(this._maxGroupSize,a.children.length+2)},this)):a=f.map(a,this._prepareVariableItem,this);return a},_prepareVariableCategories:function(a){var b={};f.forEach(a,function(a){var c=a.fieldCategory,d=b[c];d||(d={label:c,id:c,children:[]},b[c]=d);d.children.push(this._prepareVariableItem(a))},
this);a=[];for(var c in b)a.push(b[c]);return this.manager.variables.queryEngine({},{sort:[{attribute:"label"}]})(a)},_prepareVariableItem:function(a){var b=this._prepareVariableNode(a);b.id=this.manager.variables.getIdentity(a);return b},_prepareVariableNode:function(a){var b={label:a.description,variable:a};b.group=w.getToggleGroup(this.manager.variables,this.manager.variables.getIdentity(a));if(a=this.manager.getSelectionGroups().hash[b.group.value])b.selected=!0,b.group.value=a.value;return b},
renderHeader:function(){},_renderNode:function(a,b,c){this._cellHash[this.store.getIdentity(a)]=c;h.add(c,"DataBrowserVarCell");if(a.variable)if(this.manager.variables.favorites){if(b=this._addVariableFavoriteIcon(a,c)){var d=this._getFavoriteId(a);this._updateFavorite(b,this.manager.variables.favorites.contains(d));l(b,"click",e.hitch(this,this._toggleFavorite,b,d));c.__favoriteIcon=b}this._addSpacer(c)}else this.manager.multipleSelectIsAllowed()&&this._addSpacer(c);if(this.manager.multipleSelectIsAllowed()){var g=
new v(c,{"class":"dijitInline DataBrowserVarIcon DataBrowserCheckBox DataBrowserVarFloatStart"});g.autoToggle=!1;g.node=a;c.__cellCheckbox=g;this._updateCheckboxState(g);this._addSpacer(c)}if(b=this._addVariableInfoIcon(a,c))l(b,"click",e.hitch(this,this._toggleTooltip,b,a.variable)),l(b,"mouseover",e.hitch(this,this._showTooltip,b,a.variable)),l(b,"mouseout",e.hitch(this,this._hideTooltip));a.variable&&a.group.states&&(b=new x(a.group,k.create("div",{"class":"dijitInline DataBrowserVarFloatEnd"},
c)),l(b,"change",e.hitch(this,this._onVariableToggleChange,a,b)),c.__varToggle=b,this._addSpacer(c,!0));b=k.create("div",{"class":"TrimWithEllipses "+(a.variable?"DataBrowserVarLabel":"DataBrowserVarGroup"),innerHTML:a.label},c);d=e.hitch(this,this._onRowClick,a,b);g&&(g.onClick=d);a.variable?this.manager.selectionLimit&&(h.add(b,"DataBrowser_Clickable"),l(b,"click",d),1===this.manager.selectionLimit&&h.add(c,"DataBrowser_Selectable")):(h.add(b,"DataBrowser_Clickable"),l(b,"click",e.hitch(this,this._onCategoryExpand,
a.id)))},_addVariableFavoriteIcon:function(a,b){return k.create("div",{"class":"dijitInline DataBrowserVarIcon FavoriteItemIcon DataBrowserVarFloatStart"},b)},_getFavoriteId:function(a){return a.id},_addVariableInfoIcon:function(a,b){if(a.variable&&this.manager.variableInfo){var c=k.create("div",{"class":"dijitInline DataBrowserVarIcon DataBrowserVarFloatStart DataBrowserInfoIcon"},b);this._addSpacer(b)}return c},_addSpacer:function(a,b){k.create("div",{"class":"dijitInline DataBrowserVarSpacer "+
(b?"DataBrowserVarFloatEnd":"DataBrowserVarFloatStart"),innerHTML:"\x26nbsp;"},a)},_onCategoryExpand:function(a){this.expand(a,!(this._expanded&&this._expanded[a]))},_toggleFavorite:function(a,b){var c=this.manager.variables.favorites;c.contains(b)?c.remove(b):c.add(b);b=c.contains(b);this._updateFavorite(a,b);this.invoke("_saveFavorites",1E3);return b},_updateFavorite:function(a,b){b?(h.remove(a,"FavoriteItem"),h.add(a,"FavoriteItemChecked")):(h.remove(a,"FavoriteItemChecked"),h.add(a,"FavoriteItem"))},
_saveFavorites:function(){this.manager.variables.favorites.save()},_toggleTooltip:function(a,b){(this._tooltipHidden=!this._tooltipHidden)?this._hideTooltip():this._showTooltip(a,b)},_showTooltip:function(a,b){this._tooltipHidden||this._tooltipIcon===a||(this._tooltipIcon=a,this.manager.variableInfo.set("variable",b),m.show(this.manager.variableInfo.domNode.outerHTML,a,["above","below"]))},_hideTooltip:function(){this._tooltipIcon&&(m.hide(this._tooltipIcon),this._tooltipIcon=null)},_onRowClick:function(a,
b,c){if(this.manager.multipleSelectIsAllowed()){if(c.shiftKey&&this._applyMultiSelect(a))return;this._updateLastItem(a)}c=1===this.manager.selectionLimit;var d=a.children?this.store.getDescendingNodes(a,a.selected?null:!1,!0):[a],g=f.map(d,function(a){return a.group.value});this._inUpdate=!0;var e=c||!a.selected,g=e?this.manager.addToSelection(g):this.manager.removeFromSelection(g,!!a.children);this._inUpdate=!1;g?(this._updateSelection(d,g,e),a.children&&!c&&(a.selected=e),this._synchronizeWithStore(),
e&&this.animateSelection&&this.animateSelection(b)):e&&d.length&&!c&&(a.children?a.selected=!0:a.parent.selected=!0)},_updateSelection:function(a,b,c){f.forEach(a,function(a){b[a.group.value]&&this.store.changeSelect(a,c)},this)},_onVariableToggleChange:function(a,b){a.group.value=b.value;this._inUpdate=!0;this.manager.updateSelection(b.value);this._inUpdate=!1;this.manager.allowMultipleSelectInGroup&&this._selectionUpdated()},_selectionUpdated:function(){if(!this._inUpdate){var a=this.manager.getSelectionGroups();
f.forEach(this.store.data,function(b){f.forEach(b.children||[b],function(b){var c=a.hash[b.group.value];c&&(b.group.value=c.value);this.store.changeSelect(b,!!c)},this)},this);this._synchronizeWithStore()}},_synchronizeWithStore:function(){var a=this.manager.getSelectionGroups(),b;for(b in this._cellHash){var c=this._cellHash[b],d=c.__cellCheckbox;d&&this._updateCheckboxState(d);(d=(c=c.__varToggle)&&a.hash[c.value])&&c.set("value",d.value)}},_updateCheckboxState:function(a){var b=this.store.getSelectionState(a.node);
a.set("checked",b)},_getNodeIndex:function(a){var b=a.index;return b=a.children?b*this._maxGroupSize:b+a.parent.index*this._maxGroupSize},_updateLastItem:function(a){this._lastToggledIndex=this._getNodeIndex(a);a.children&&(this._lastToggledIndex+=a.children.length+1)},_applyMultiSelect:function(a){var b=this,c=this._lastToggledIndex,d=this._lastToggledIndex=this._getNodeIndex(a);if(!c||d==c)return!1;d<c?--c:(d=c+1,a.children&&(this._lastToggledIndex+=a.children.length+1),c=this._lastToggledIndex);
var e=[],f=[];a=Math.floor(d/this._maxGroupSize);for(var h=Math.floor(c/this._maxGroupSize),d=d%this._maxGroupSize,c=c%this._maxGroupSize,l=this.store.root.children,k=a;k<=h;k++,d=1)for(var n=l[k-1].children,m=k!=h?n.length:Math.min(n.length,c),d=Math.max(d-1,0);d<m;d++)a=n[d],(a.selected?e:f).push(a);this._inUpdate=!0;e.length&&this.manager.removeFromSelection(e.map(function(a){b.store.changeSelect(a,!1);return a.group.value}),!0);0<this.manager.selectionLimit&&(f.length=Math.max(0,Math.min(f.length,
this.manager.selectionLimit-this.manager.get("selection").length)));f.length&&this.manager.addToSelection(f.map(function(a){b.store.changeSelect(a,!0);return a.group.value}));this._inUpdate=!1;this._synchronizeWithStore();return!0},destroy:function(){this._cleanup();this.inherited(arguments)},_cleanup:function(){this._selectionHandler&&(this._selectionHandler.remove(),delete this._selectionHandler);this._cellHash={}}})});