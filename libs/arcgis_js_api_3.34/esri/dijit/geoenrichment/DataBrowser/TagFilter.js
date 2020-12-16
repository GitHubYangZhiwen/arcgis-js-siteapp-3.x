// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/DataBrowser/TagFilter",["dojo/_base/declare","dojo/_base/array","./VariableUtil"],function(f,d,e){return f(null,{id:null,label:null,isRangeFilter:!1,enumItems:null,rangeMin:0,rangeMax:0,range:null,constructor:function(a){this.id=a.id;this.label=a.aliasname;(this.isRangeFilter="Range"==a.type)?(this.rangeMin=Number(a.rangeMin),this.rangeMax=Number(a.rangeMax),this._match=this._updateRange,this.activate=this._activateRange):(this._index={},this.enumItems=[],d.forEach(a.enumValues.split(","),
this._provideEnumItem,this),this._match=this._updateEnum,this.activate=this._activateEnum)},_provideEnumItem:function(a){if(!a)return null;var c=a.toLowerCase(),b=this._index[c];b||(b={id:c,value:a,selected:!0,leafCount:0},this._index[c]=b,this.enumItems.push(b));return b},_updateEnum:function(a){a=this._provideEnumItem(a.value);if(!a)return!1;a.leafCount++;return!0},_updateRange:function(a){a=e.parseRangeValue(a.value);if(!a)return!1;this.range?(this.range.min>a.min&&(this.range.min=a.min),this.range.max<
a.max&&(this.range.max=a.max)):this.range=a;return!0},activate:function(){},_activateEnum:function(){this._match=this._matchEnum;var a=[],c=0;d.forEach(this.enumItems,function(b){b.leafCount?a.push(b):delete this._index[b.id];c+=b.leafCount},this);this.enumItems=a;c&&(this.isActive=this._isActiveEnum);return 0!=c},_activateRange:function(){this._match=this._matchRange;if(!this.range)return!1;this.isActive=this._isActiveRange;!isNaN(this.rangeMin)&&this.range.min>this.rangeMin?this.range.min=this.rangeMin:
this.rangeMin=this.range.min;!isNaN(this.rangeMax)&&this.range.max<this.rangeMax?this.range.max=this.rangeMax:this.rangeMax=this.range.max;return!0},isActive:function(){return!1},_isActiveEnum:function(){return d.some(this.enumItems,function(a){return!a.selected})},_isActiveRange:function(){return this.rangeMin!=this.range.min||this.rangeMax!=this.range.max},match:function(a,c){return(a=a.filteringTags[this.id])?this._match(a):c?void 0:!0},_matchEnum:function(a){return(a=this._index[a.value.toLowerCase()])&&
a.selected},_matchRange:function(a){(a=e.parseRangeValue(a.value))&&a.min==a.max&&0!=a.max&&(a.max=Math.max(a.max,this.rangeMax));return a&&this.range&&a.min<=this.range.max&&a.max>=this.range.min},updateRange:function(a){this.isRangeFilter&&(this.range.min=Math.min(Math.max(a.min,this.rangeMin),this.rangeMax),this.range.max=Math.min(Math.max(a.max,this.rangeMin),this.rangeMax))}})});