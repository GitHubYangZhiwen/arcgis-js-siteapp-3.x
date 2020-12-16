// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/supportClasses/SectionLayoutManager",["dojo/_base/declare","./SectionContentFitModes","../../grid/coreUtils/GridDataUtil","../../infographics/InfographicTypes","esri/dijit/geoenrichment/utils/FitUtil"],function(g,f,h,k,l){g=g(null,{section:null,_width:0,_height:0,constructor:function(a){this.section=a},getWidth:function(){return this._width},setWidth:function(a,b){b=b||{};a=Math.max(0,a);var c=this._width;this._width=a;this.section.domNode.style.width=
a+"px";this.section.hasFixedLayout?this.section.getTables().forEach(function(c){(c.getMaxWidth()!==a||b.forceResize)&&c.setMaxWidth(a,{resizeToFitAllowedWidth:b.resizeContentToFit,preserveRightOffset:b.preserveRightOffset})}):b.resizeContentProportionally&&c&&a&&c!==a&&this.scaleFloatingContentProportionally({xScale:a/c,yScale:1})},getHeight:function(a){if(!this.section.hasFixedLayout)return this._height;var b=0;this.section._stackElements.forEach(function(c){switch(c.stackId){case "table":b+=c.getHeight(a);
c.isLocatorTable&&c.isLocatorTable()&&(b+=c.getLocatorTablePreviewExtraHeight());break;case "hr":case "pageBreak":b+=c.clientHeight}});return b},getResizedHeight:function(){return this.section.hasFixedLayout?this.getHeight(!0):this._height},setHeight:function(a,b){this._setHeight(a,b);if(this.section.hasFixedLayout){var c=this;this.section.getTables().forEach(function(a){a.needScaleToFitHeight()&&c._scaleFixedTableToFitHeight(a)})}},updateHeightAfterContentChange:function(){this.section.hasFixedLayout&&
this._setHeight(this.getResizedHeight())},_setHeight:function(a,b){a=Math.max(0,a);if(this.section.hasFixedLayout){var c=this.section.getLastTable();c&&c.setSpaceAfter(a-this.getHeight())}c=this._height;this._height=a;this.section.domNode.style.height=a+"px";!this.section.hasFixedLayout&&b&&b.resizeContentProportionally&&c&&a&&c!==a&&this.scaleFloatingContentProportionally({xScale:1,yScale:a/c})},scaleFloatingContentProportionally:function(a){this.section.hasFixedLayout||1===a.xScale&&1===a.yScale||
1<this.section._stackElements.length||this.section._stackElements.forEach(function(b){switch(b.stackId){case "table":b.scaleProportionallyWithinParent(a);break;case "img":case "map":b.scaleProportionallyWithinParent(a)}})},getFloatingContentBox:function(){var a,b,c,d;function e(e){a=Math.min(a,e.l);b=Math.min(b,e.t);c=Math.max(c,e.l+e.w);d=Math.max(d,e.t+e.h)}b=a=Infinity;d=c=0;this.section._stackElements.forEach(function(a){switch(a.stackId){case "table":e(a.getTableBox());break;case "img":case "map":e(a.getImageBox(!1))}});
return{l:a,t:b,w:c-a,h:d-b}},fitContentNicely:function(a,b){a=a||{};this.section.hasFixedLayout?this._fitFixedTablesNicely(a,b):this._fitFloatingContentNicely(a,b)},_fitFixedTablesNicely:function(a,b){if(a.fitMode!==f.NONE){a.fitMode===f.ALL&&delete a.fitMode;var c=this;(b||this.section.getTables()).forEach(function(b){"table"===b.stackId&&(a.fitMode!==f.WIDTH&&a.fitMode||b.resizeToFitAllowedWidth(),a.fitMode!==f.HEIGHT&&a.fitMode||c._scaleFixedTableToFitHeight(b))});this.section._notifyContentChanged()}},
_scaleFixedTableToFitHeight:function(a){a.resizeToFitHeight(this.section.getResizedHeight());a.setSpaceAfter(0)},_fitFloatingContentNicely:function(a,b){a=a.fitMode;if(a!==f.NONE&&(b=b||this.section._stackElements,b.length&&!(1<this.section._stackElements.length))){var c;1===b.length&&(c=this._getTransformParamsForSpecificSingleElement(b));c=c||this._getTransformParamsForOtherElement(b,a);b.forEach(function(a){switch(a.stackId){case "table":case "img":case "map":a.scaleProportionallyWithinParent(c.scaleParams),
a.setPosition(c.deltaLeft+a.getLeft(),c.deltaTop+a.getTop())}})}},_getTransformParamsForSpecificSingleElement:function(a){var b,c,d,e=this.section.getTables()[0],e=e&&e.isSingleCelledTable()&&h.getFieldInfo(e.getFirstCell());if("img"===a[0].stackId||e&&e.isImage||e&&e.isShape)a=this.getFloatingContentBox(),d=l.fitBox(a,{w:this._width,h:this._height},{hAlign:"center",vAlign:"middle"}),b={xScale:d.ratio,yScale:d.ratio},c=d.x-a.l*b.xScale,d=d.y-a.t*b.yScale;return b&&{scaleParams:b,deltaLeft:c,deltaTop:d}},
_getTransformParamsForOtherElement:function(a,b){var c=this.getFloatingContentBox();b===f.SINGLE_ALL_COMPLEX_WIDTH&&(b=1<a.length?f.WIDTH:f.ALL);var d=this._getContentFitOffset(a),e=this.section.getWidth()-2*d,g=this._height-2*d;1<a.length&&c.h>g&&(b=f.ALL);a={xScale:b===f.HEIGHT?1:e/c.w,yScale:b===f.WIDTH?1:g/c.h};return{scaleParams:a,deltaLeft:d-c.l*a.xScale,deltaTop:d-c.t*a.yScale}},_getContentFitOffset:function(a){var b=this.section.getTables()[0],c=b&&b.isSingleCelledTable()&&h.getFieldInfo(b.getFirstCell()),
d=c&&c.isInfographic&&c.infographicJson.style&&c.infographicJson.style.padding;return this.section.noContentOffset?0:1<a.length?5:this.section.hasMapImages()||this.section.hasChart()?0:this.section.hasInfographic(k.ATTACHMENTS)?d||0:k.isTableLike(this.section.getInfographicType())?"number"===typeof d?d:this.section.viewModel.getCurrentTheme(this.section.theme).table.dataTablePadding||0:this.section.hasInfographic()?"number"===typeof d?d:this.section.viewModel.getStaticInfographicDefaultStyles(this.section.theme).padding||
0:b&&(this.section.isImageTable(b)||c&&c.isShape)?0:this.section.viewModel.getCurrentTheme(this.section.theme).table.dataTablePadding||0},getPreferredHeight:function(){var a=this.section.getInfographicWithTable();if(!a||!a.infographic.getPreferredHeight)return 0;var b=a.table.getTableBox(),c=b.t,b=this.getResizedHeight()-b.t-b.h,a=a.infographic.getPreferredHeight()||0;return c+b+a}});g.IMAGE_FIT_PRETTY_OFFSET=0;return g});