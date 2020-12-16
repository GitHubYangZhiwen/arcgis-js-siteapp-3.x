// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicsPageStack","dojo/_base/declare esri/dijit/geoenrichment/promise/all esri/dijit/geoenrichment/when dojo/dom-class dojo/dom-construct dijit/_WidgetBase dijit/_TemplatedMixin ../themes/BackgroundThemeUtil esri/dijit/geoenrichment/utils/async/AsyncQueue esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ElementUsageTypes esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes ../supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil ../sections/sectionUtils/SectionJsonUtil esri/dijit/geoenrichment/utils/ColorUtil dojo/i18n!esri/nls/jsapi".split(" "),
function(q,k,l,r,g,t,u,v,m,w,x,n,y,z,h){function p(a){var b=n.getParentBox(a);return b&&b.w?b:y.calcSectionJsonBox(a)}h=h.geoenrichment.dijit.ReportPlayer.Infographics;return q([t,u],{templateString:"\x3cdiv class\x3d'esriGEReportPlayer_infographicsPageStack'\x3e\x3c/div\x3e",nls:h,viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,scaleSectionsToFit:!0,isVertical:!0,hideBackgroundImage:!1,_asyncQueue:null,_sections:null,_maxWidth:0,_maxHeight:0,_panelIndexToScaleCache:null,postCreate:function(){this.inherited(arguments);
this._sections=[];this._panelIndexToScaleCache={};!this.isVertical&&r.add(this.domNode,"isHorizontal")},getRenderPromise:function(){return this._asyncQueue&&this._asyncQueue.getPromise()},setItems:function(a){var b=this;this._destroySections();this._asyncQueue=new m;this._calcMaxSectionSize(a);a.forEach(function(a,c){b._asyncQueue.add(function(){b._createPanel(a,c)},{delayAfter:0})});return this.getRenderPromise()},_calcMaxSectionSize:function(a){this._maxHeight=this._maxWidth=0;a.forEach(function(a){if(a=
p(a))this._maxWidth=Math.max(this._maxWidth,a.w),this._maxHeight=Math.max(this._maxHeight,a.h)},this)},_createPanel:function(a,b){var d=g.create("div",{"class":"infographicPageStack_infographicRow "+(this.isVertical?"":"dijitInline")},this.domNode),d=g.create("div",{"class":"dijitInline infographicPageStack_infographicRowContent"},d),c=g.create("div",{"class":"infographicPageStack_infographicSectionNode"},d),f=p(a);c.style.width=f.w+"px";c.style.height=f.h+"px";var e={"class":"adjustableGrid_inCellSection"};
e.json=a;e.viewModel=this.viewModel;e.theme=this.theme;e.parentWidget=this;e.initialWidth=f.w;e.initialHeight=f.h;e.currentFeatureIndex=this.currentFeatureIndex;e.elementUsageType=w.PAGE_PANEL_SECTION;e.initialViewMode=x.PREVIEW_VALUES;e=this.viewModel.layoutBuilder.createElement("section",e,c);this._sections.push(e);e.__creationInfo={sectionNode:c,rowNodeContent:d,panelIndex:b};this._scaleSectionToFit(e);this._renderPanelBackground(c,a,f);this.onSectionCreated(e)},_scaleSectionToFit:function(a){var b=
a.__creationInfo,d=b.rowNodeContent,c=b.sectionNode,b=b.panelIndex;if(this.scaleSectionsToFit){c.style.width=a.getWidth()+"px";c.style.height=a.getHeight()+"px";var f;this.isVertical?(f=this._maxWidth/a.getWidth(),d.style.width=this._maxWidth+"px",d.style.height=a.getHeight()*f+"px",d.style.marginBottom="10px"):(f=this._maxHeight/a.getHeight(),d.style.width=a.getWidth()*f+"px",d.style.height=this._maxHeight+"px",d.style.marginRight="10px");c.style.transform="scale("+f+")";c.style.webkitTransform=
"scale("+f+")";c.style.position="absolute";c.style.left="1px";c.style.top="1px";c.style.margin="0px";this._panelIndexToScaleCache[b]=f||1}else c.style.margin="10px"},_renderPanelBackground:function(a,b,d){b=n.getParentStyle(b);var c=this.viewModel.getDocumentDefaultStyles(this.theme);a=g.create("div",{"class":"esriGEAbsoluteStretched"},a,"first");a.style.backgroundColor=b&&b.backgroundColor&&!z.isTransparent(b.backgroundColor)?b.backgroundColor:c.backgroundColor;c&&v.renderThemeBackgroundImage(a,
this.hideBackgroundImage?null:c.backgroundImage,{documentOptions:this.parentWidget.documentOptions,pos:d},{nodeClass:"infographicPageStack_infographicSectionNode_background"})},getSections:function(){return this._sections},getPanelScaleAt:function(a){return this._panelIndexToScaleCache[a]||1},onSectionCreated:function(a){},resizePanelsToShowContent:function(){var a=this;return k(this.getSections().map(function(b){var d=b.getPreferredHeight();if(d>b.getHeight())return b.setHeight(d+10,{resizeContentProportionally:!0}),
a._scaleSectionToFit(b),b.getRenderPromise()}))},notifyShown:function(){this._sections.forEach(function(a){a.notifyShown()})},refresh:function(){var a=this;return l(this.getRenderPromise(),function(){a._asyncQueue=new m;a._sections.forEach(function(b){a._asyncQueue.add(function(){b.refresh()},{delayAfter:0})});return a.getRenderPromise()})},getVisualState:function(){return{type:"infographicsPageStack",sections:this._sections.map(function(a){return a.getVisualState()})}},setVisualState:function(a){var b=
this;if(a&&a.sections&&a.sections.length===this._sections.length)return l(this.getRenderPromise(),function(){return k(a.sections.map(function(a,c){return(c=b._sections[c])&&c.setVisualState(a)}))})},_destroySections:function(){this._asyncQueue&&this._asyncQueue.destroy();this._asyncQueue=null;this._sections.forEach(function(a){a.destroy()});this._sections.length=0;this.domNode.innerHTML=""},destroy:function(){this._destroySections();this.inherited(arguments)}})});