// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainerGrid/utils/PageQueryUtil",["dojo/dom-geometry","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/DomUtil"],function(q,x,r){var w={getElementPageInfo:function(a){function e(a,d){a=q.position(a.domNode);d=q.position(d.domNode);c.x+=a.x-d.x;c.y+=a.y-d.y}function l(a){p||(a=a.getFullStyle().backgroundColor)&&!x.isTransparent(a)&&(p=a)}function g(b){if(b)if(b.parentGridCell&&l(b.parentGridCell),b.parentElementInPageInfo)b=
b.parentElementInPageInfo,f=b.reportContainer,p=p||b.panelBackgroundColor,c.x+=b.pos.x,c.y+=b.pos.y,m=b.pageGrid,k=b.gridContainer,n=b.pageIndex,h=b.layoutCell,t=b.isBackgroundFloatingPanel,u=b.isForegroundFloatingPanel,v=b.panelIndex;else{var d=b.parentWidget;d&&d.isReportContainerGrid?(f=d,b=w.getNodePositionOnPage(f,b.domNode),d=w.getNodePositionOnPage(f,a.domNode),b&&d&&(c.x+=b.x,c.y+=b.y,m=b.pageGrid,k=b.gridContainer,n=b.pageIndex,h=d.layoutCell,t=d.isBackgroundFloatingPanel,u=d.isForegroundFloatingPanel,
v=d.panelIndex)):d&&(e(b,d),g(d))}}if(a&&a.parentWidget&&(!a.viewModel||a.viewModel.isGraphicStyle)){var f,c={x:0,y:0},m,k,n,h,p,t,u,v;a.isValueField&&a.parentGrid&&a.rowId&&a.columnId?(l(a),e(a,a.parentGrid),g(a.parentGrid)):g(a);return f&&h?{reportContainer:f,documentOptions:f.documentOptions,pos:c,zoom:f.getZoomInfo().scale,pageGrid:m,gridContainer:k,pageIndex:n,layoutCell:h,panelBackgroundColor:p,isFloatingPanel:t||u,isBackgroundFloatingPanel:t,isForegroundFloatingPanel:u,panelIndex:v}:null}},
getReportContainerPageNode:function(a){for(;a;){if(a.reportContainerPageNode)return a.reportContainerPageNode;a=a.parentWidget||a.parentGrid}return null},getParentReportContainerGrid:function(a){if(a&&a.isReportContainerGrid)return a;for(;a;){if(a.parentWidget&&a.parentWidget.isReportContainerGrid)return a.parentWidget;if(a.parentElementInPageInfo)return a.parentElementInPageInfo.reportContainer;a=a.parentWidget||a.parentGrid}return null},getParentReportPlayer:function(a){if(a&&a.isPlayer)return a;
for(;a;){if(a.parentWidget&&a.parentWidget.isPlayer)return a.parentWidget;a=a.parentWidget||a.parentGrid}return null},getNodePositionOnPage:function(a,e){if(!e)return null;var l,g=-1,f,c,m,k;a.getGrids().some(function(a,h){if(a.domNode===e||r.isChildOf(e,a.domNode))return l=a,f=h,a.getFieldCells().some(function(a,c){if(a.domNode===e||r.isChildOf(e,a.domNode))return g=c,k=a,!0}),-1===g&&a.getBackgroundFloatingCells().some(function(a,f){if(a.domNode===e||r.isChildOf(e,a.domNode))return g=f,c=!0,k=a,
!0}),-1===g&&a.getForegroundFloatingCells().some(function(a,c){if(a.domNode===e||r.isChildOf(e,a.domNode))return g=c,m=!0,k=a,!0}),!0});if(!l)return null;a=a.getGridContainer(l);var n=q.position(a),h=q.position(e);return{x:h.x-n.x,y:h.y-n.y,pageGrid:l,gridContainer:a,pageIndex:f,layoutCell:k,isFloatingPanel:c||m,isBackgroundFloatingPanel:c,isForegroundFloatingPanel:m,panelIndex:g}}};return w});