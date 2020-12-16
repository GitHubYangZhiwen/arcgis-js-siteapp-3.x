// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/ReportPlayer/templates/ComparisonSettings.html":'\x3cdiv class\x3d"esriGEReportPlayerToolbar_comparisonSettings esriGENonSelectable"\x3e\r\n    \x3cdiv class\x3d"esriGERow20" data-dojo-attach-point\x3d"showBackgroundImageBlock"\x3e\r\n        ${nls.comparisonSettings}\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"esriGESpaceBefore20"\x3e\r\n        \x3cdiv class\x3d"esriGERow20" data-dojo-attach-point\x3d"showBackgroundImageBlock"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"showBackgroundImageLabel"\x3e\x26nbsp;${nls.showBackgroundImage}\x3c/label\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv class\x3d"esriGERow20"\x3e\r\n            \x3cdiv class\x3d"dijitInline"\x3e\r\n                \x3clabel data-dojo-attach-point\x3d"splitPanelsLabel"\x3e\x26nbsp;${nls.splitPanels}\x3c/label\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"dijitInline esriGESpaceBeforeBig esriGEInfoIcon" data-dojo-attach-point\x3d"splitPanelsInfoIcon"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv class\x3d"esriGERow20"\x3e\r\n            \x3cdiv class\x3d"dijitInline"\x3e${nls.zoomPanels}\x3c/div\x3e\r\n            \x3cdiv class\x3d"dijitInline esriGESpaceBeforeBig esriGEInfoIcon" data-dojo-attach-point\x3d"zoomPanelsInfoIcon"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv class\x3d"esriGERow20 esriGESpaceBefore20" data-dojo-attach-point\x3d"zoomBlock"\x3e\r\n            \x3cdiv class\x3d"dijitInline esriGESpaceAfterBig comparisonSettings_zoomOutButton esriGEIcon16" data-dojo-attach-point\x3d"zoomOutButton"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"dijitInline esriGESpaceAfterBig comparisonSettings_zoomLabel" data-dojo-attach-point\x3d"zoomLabel"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"dijitInline esriGESpaceAfterBig comparisonSettings_zoomInButton esriGEIcon16" data-dojo-attach-point\x3d"zoomInButton"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"dijitInline esriGELink comparisonSettings_resetLink" data-dojo-attach-point\x3d"resetButton"\x3e${nls.reset}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv class\x3d"esriGERow20 esriGESpaceBefore20" data-dojo-attach-point\x3d"zoomSplitBlock"\x3e\r\n            \x3cdiv class\x3d"dijitInline esriGESpaceAfterBig comparisonSettings_zoomOutButton esriGEIcon16" data-dojo-attach-point\x3d"zoomOutSplitButton"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"dijitInline esriGESpaceAfterBig comparisonSettings_zoomLabel" data-dojo-attach-point\x3d"zoomSplitLabel"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"dijitInline esriGESpaceAfterBig comparisonSettings_zoomInButton esriGEIcon16" data-dojo-attach-point\x3d"zoomInSplitButton"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"dijitInline esriGELink comparisonSettings_resetLink" data-dojo-attach-point\x3d"resetSplitButton"\x3e${nls.reset}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/ReportPlayer/toolbar/ComparisonSettings","dojo/_base/declare esri/dijit/geoenrichment/TriStateItem dijit/_WidgetBase dijit/_TemplatedMixin esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/NodeLabelEditor esri/dijit/geoenrichment/utils/TooltipUtil dojo/text!../templates/ComparisonSettings.html dojo/i18n!esri/nls/jsapi".split(" "),function(h,e,k,l,d,f,g,m,c){c=c.geoenrichment.dijit.ReportPlayer.PlayerToolbar;return h([k,l],{templateString:m,nls:c,
player:null,showBackgroundImageCheckbox:null,splitPanelsCheckbox:null,postCreate:function(){var a=this;this.inherited(arguments);this.showBackgroundImageCheckbox=new e(this.showBackgroundImageLabel);this.showBackgroundImageCheckbox.onClick=function(){a._onChange()};this.splitPanelsCheckbox=new e(this.splitPanelsLabel);this.splitPanelsCheckbox.onClick=function(){a._update();a._onChange()};g.setTooltipToNode(this.splitPanelsInfoIcon,c.splitPanelsTooltip);var b=this.player.nlsMap&&this.player.nlsMap.zoomPanelsTooltip||
c.zoomPanelsTooltip;d[b?"show":"hide"](this.zoomPanelsInfoIcon);g.setTooltipToNode(this.zoomPanelsInfoIcon,b);this._initZoomControls();this._initZoomSplitControls()},_zoomEditor:null,_zoom:0,_initZoomControls:function(){var a=this;this._zoomEditor=new f({numericOnly:!0,onApply:function(b){a._setZoom(b)},onCancel:function(){a._updateZoomLabel()}});this.zoomLabel.addEventListener("click",function(){a._zoomEditor.range={min:10,max:500};a._zoomEditor.editNodeLabel(a.zoomLabel,a._zoom)});this.zoomOutButton.addEventListener("click",
function(){a._setZoom(Math.max(10,a._zoom-10))});this.zoomInButton.addEventListener("click",function(){a._setZoom(Math.min(500,a._zoom+10))});this.resetButton.addEventListener("click",function(){a._setZoom(100)})},_setZoom:function(a,b){a=Math.round(a);this._zoom!==a&&(this._zoom=a,this._updateZoomLabel(),this._update(),!b&&this._onChange())},_updateZoomLabel:function(){this.zoomLabel.innerHTML=this._zoom+"%"},_zoomSplitEditor:null,_zoomSplit:0,_initZoomSplitControls:function(){var a=this;this._zoomSplitEditor=
new f({numericOnly:!0,onApply:function(b){a._setZoomSplit(b)},onCancel:function(){a._updateZoomSplitLabel()}});this.zoomSplitLabel.addEventListener("click",function(){a._zoomSplitEditor.range={min:10,max:500};a._zoomSplitEditor.editNodeLabel(a.zoomSplitLabel,a._zoomSplit)});this.zoomOutSplitButton.addEventListener("click",function(){a._setZoomSplit(Math.max(10,a._zoomSplit-10))});this.zoomInSplitButton.addEventListener("click",function(){a._setZoomSplit(Math.min(500,a._zoomSplit+10))});this.resetSplitButton.addEventListener("click",
function(){a._setZoomSplit(100)})},_setZoomSplit:function(a,b){a=Math.round(a);this._zoomSplit!==a&&(this._zoomSplit=a,this._updateZoomSplitLabel(),this._update(),!b&&this._onChange())},_updateZoomSplitLabel:function(){this.zoomSplitLabel.innerHTML=this._zoomSplit+"%"},_update:function(){this.resetButton.style.visibility=100===this._zoom?"hidden":"visible";this.resetSplitButton.style.visibility=100===this._zoomSplit?"hidden":"visible";d.hide([this.zoomBlock,this.zoomSplitBlock]);d.show(this.splitPanelsCheckbox.get("checked")?
this.zoomSplitBlock:this.zoomBlock)},setSettings:function(a){this.showBackgroundImageCheckbox.set("checked",!a.hideBackgroundImage);this.splitPanelsCheckbox.set("checked",a.splitPanels);this._setZoom(100*(a.scale||1),!0);this._setZoomSplit(100*(a.scaleSplit||1),!0);this._update()},getSettings:function(){return{hideBackgroundImage:!this.showBackgroundImageCheckbox.get("checked"),splitPanels:this.splitPanelsCheckbox.get("checked"),scale:this._zoom/100,scaleSplit:this._zoomSplit/100}},_onChange:function(){this._update();
this.onChange()},onChange:function(){}})});