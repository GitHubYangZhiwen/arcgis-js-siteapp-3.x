// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/_DataDrillingSupport",["dojo/_base/declare","../dataDrilling/DataDrillingVisualizer","../dataDrilling/DataDrillingButtonsBuilder","./coreUtils/GridDataUtil","../supportClasses/WidgetQueryUtil"],function(d,e,f,c,g){return d(null,{_ddButtonsBuilder:null,_trySetupDataDrilling:function(a){var b=this;this.viewModel.dynamicReportInfo&&this.viewModel.enableDataDrilling&&!g.isDataDrillingView(this)&&c.getDataDrilling(a)&&(this._ddButtonsBuilder=this._ddButtonsBuilder||
new f({parentWidget:this}),this._ddButtonsBuilder.setDataDrillingButtonForTableCell(a,function(){b._showDataDrilling(a)}))},_showDataDrilling:function(a){var b=new e({viewModel:this.viewModel,theme:this.theme,parentWidget:this,domNode:this.domNode,currentFeatureIndex:this.currentFeatureIndex,closeZoomedDDWhenClickedOutside:!0,closeZoomedDDOnEsc:!0,onClose:function(){b.play(!1,!0)}});b.play(!0,!0,null,c.getDataDrilling(a).sectionJson)}})});