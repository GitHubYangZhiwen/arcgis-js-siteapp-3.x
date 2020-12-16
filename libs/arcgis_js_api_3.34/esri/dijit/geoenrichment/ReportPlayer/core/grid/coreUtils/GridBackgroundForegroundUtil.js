// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/GridBackgroundForegroundUtil",["dojo/_base/lang","dojo/dom-construct"],function(h,g){var e={renderBackground:function(a,c,d){return e._renderSection(a,c,d,!0)},renderForeground:function(a,c,d){return e._renderSection(a,c,d,!1)},_renderSection:function(a,c,d,f){var b=f?a.backgroundNode:a.foregroundNode;b&&(b.innerHTML="");if(!c)return null;b={};b["class"]="esriGEAbsoluteStretched "+(f?"adjustableGrid_backgroundSection":"adjustableGrid_foregroundSection");
b.initialWidth=a.getAllowedWidth();b.initialHeight=a.getHeight();b.json=c;b.viewModel=a.viewModel;b.theme=a.theme;b.parentWidget=a;b.currentFeatureIndex=a.currentFeatureIndex;b.initialViewMode=a.getViewMode();b.initialSpecificViewMode=a.getSpecificViewMode();h.mixin(b,d);return a.viewModel.layoutBuilder.createElement("section",b,e._provideNode(a,f))},_provideNode:function(a,c){return c?a.backgroundNode=a.backgroundNode||g.create("div",{"class":"adjustableGridBackgroundNode"},a.domNode,"first"):a.foregroundNode=
a.foregroundNode||g.create("div",{"class":"adjustableGridForegroundNode"},a.domNode)}};return e});