// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/customgp/editors/SelectFeatureSetFromLayer.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"inputNode" class\x3d"fullSpread"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"layerChooseNode" class\x3d"left ${cssClass.layerChooseCtr}"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"left" style\x3d"min-width:40px"\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"selectBtnNode"\x3e\x3c/span\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"drawBtnNode"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"featuresetNode"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/customgp/editors/SelectFeatureSetFromLayer","dojo/_base/declare dojo/Deferred dojo/Evented dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/on dijit/_TemplatedMixin ../BaseEditor ../common/dijit/DrawLayer dijit/form/Select dijit/form/ToggleButton dojo/text!./SelectFeatureSetFromLayer.html esri/dijit/analysis/utils esri/tasks/query esri/toolbars/draw esri/layers/FeatureLayer esri/graphic esri/symbols/PictureMarkerSymbol esri/symbols/jsonUtils ../../mixins/browselayers/BrowseLayerMixin ../../AnalysisRegistry".split(" "),
function(n,z,p,e,d,l,m,q,r,t,u,A,v,f,B,g,w,x,C,k,y,h){return n([r,q,p,y],{templateString:v,editorName:"SelectFeatureSetFromLayer",cssClass:{featureSetSelect:"fullSpread esriAnalysisSelect esriLongLabel longInputGP",layerChooseCtr:"layerChooseCtr"},constructor:function(a){this.inherited(arguments);a.cssClass&&e.mixin(this.cssClass,a.cssClass)},postCreate:function(){this.inherited(arguments);this._analysisSelect=this.spatialFilterByFeatures=new u({"class":this.cssClass.featureSetSelect});this.analysisLayers=
this.config.analysisLayers;this.param&&this.param.filter&&this.param.filter.list?this.analysisLayers=d.filter(this.analysisLayers,function(a){return-1!==d.indexOf(this.param.filter.list,a.geometryType)},this):this.param&&this.param.defaultValue&&this.param.defaultValue.geometryType&&(this.analysisLayers=d.filter(this.analysisLayers,function(a){return this.param.defaultValue&&this.param.defaultValue.geometryType===a.geometryType},this));this.analysisLayer||(this.analysisLayer=this.analysisLayers&&
this.analysisLayers[0]);f.populateAnalysisLayers(this,"analysisLayer","analysisLayers",{posIncrement:1});this.showBrowseLayers=this.widget?this.widget.showBrowseLayers:!0;this.showReadyToUseLayers=this.widget?this.widget.showReadyToUseLayers:!0;this.useArcGISComponents=this.widget?this.widget.useArcGISComponents:!1;this.helpFileName=this.widget&&this.widget.helpFileName;this.isBrowseInDialog=this.widget&&this.widget.isBrowseInDialog;this.portalUrl=this.config.portalUrl;this.isSingleTenant=!0;this.showGeoAnalyticsParams=
this.config.showGeoAnalyticsParams;f.addReadyToUseLayerOption(this,[this._analysisSelect]);this.own(m(this.spatialFilterByFeatures,"change",e.hitch(this,this._onLayerChanged)));this.spatialFilterByFeatures.placeAt(this.layerChooseNode);var a;if(this.showDrawOption=void 0===this.config.showDrawOption?!0:this.config.showDrawOption)a=this._getGeometryType(),this._drawBtn=new t({types:a||["polygon","point","polyline"],selectBtnNode:this.selectBtnNode,drawBtnNode:this.drawBtnNode}),m(this._drawBtn,"change",
e.hitch(this,this._handleDrawBtnChange)),this._type=a,this._updateDrawnLayerName(),this._initDefaultSymbols();this.on("add-ready-to-use-layer",e.hitch(this,function(a){this.widget&&this.widget.emit("add-ready-to-use-layer",a)}))},_getGeometryType:function(){var a;return this.param&&this.param.filter&&this.param.filter.list?this.param.filter.list.map(function(a){a=a.toLowerCase();return-1!==a.indexOf("point")?"point":-1!==a.indexOf("polygon")?"polygon":"polyline"}):this.param&&this.param.defaultValue&&
this.param.defaultValue.geometryType?(a=this.param.defaultValue.geometryType&&this.param.defaultValue.geometryType.toLowerCase())&&(-1!==a.indexOf("polygon")?"polygon":-1!==a.indexOf("point")?"point":"polyline"):null},_updateDrawnLayerName:function(){var a=[],b=this.widget&&this.widget.drawLayer;b&&0<b.length&&(a=d.filter(b,function(a){return a.geometryType&&-1!==a.geometryType.toLowerCase().indexOf(this._type)},this));a=0===a.length?"":"_"+a.length;"point"===this._type?this.set("drawnLayerName",
this.widget&&this.widget.drawPointLayerName?this.widget.drawPointLayerName:this.nls?this.nls.drawnPointLayer:this.i18n.drawnPointLayer):"polyline"===this._type?this.set("drawnLayerName",this.widget&&this.widget.drawLineLayerName?this.widget.drawLineLayerName:this.nls?this.nls.drawnPolylineLayer:this.i18n.drawnPolylineLayer):"polygon"===this._type?this.set("drawnLayerName",this.widget&&this.widget.drawPolyLayerName?this.widget.drawPolyLayerName:this.nls?this.nls.drawnPolygonLayer:this.i18n.drawnPolygonLayer):
this.set("drawnLayerName",this.widget&&this.widget.drawnLayerName?this.widget.drawnLayerName:this.nls?this.nls.drawnLayerName:this.i18n.drawnLayerName);""!==a&&this._type&&this.set("drawnLayerName",this.get("drawnLayerName")+a)},_handleDrawBtnChange:function(a,b){this._type!=b&&(this._removeDrawnFeatColl(),this._type=b);a?(this.emit("drawtool-activate",{}),this._featureLayer||this._createFeatColl(),this._drawtoolbar.activate("point"===this._type?g.POINT:"polyline"===this._type?g.FREEHAND_POLYLINE:
g.POLYGON)):this._drawtoolbar.deactivate()},_onLayerChanged:function(a){var b,c;b=this._getGeometryType();"browse"===a||"browselayers"===a?this.param&&this.param.filter&&this.param.filter.list?(b=b.map(function(a){return"polyline"===a?"line":a}),this._createBrowseItems({browseValue:a,isDialog:this.isBrowseInDialog},{tags:b,geometryTypes:this.param.filter.list},this._analysisSelect)):this.param&&this.param.defaultValue&&this.param.defaultValue.geometryType?("point"===b?c=h.GeometryTypes.Point:"polygon"===
b?c=h.GeometryTypes.Polygon:c=h.GeometryTypes.Line,"polyline"===b&&(b="line"),this._createBrowseItems({browseValue:a,isDialog:this.isBrowseInDialog},{tags:[b],geometryTypes:[c]},this._analysisSelect)):this._createBrowseItems({browseValue:a,isDialog:this.isBrowseInDialog},{},this._analysisSelect):(this.analysisLayer=this.analysisLayers[a-1],this.emit("analysislayer-change",{analysisLayer:this.analysisLayer}))},_handleBrowseItemsSelect:function(a,b){a&&a.selection&&f.addAnalysisReadyLayer({item:a.selection,
layers:this.analysisLayers,layersSelect:this._analysisSelect,browseDialog:a.dialog||this._browsedlg,posIncrement:1,widget:this},b)},_createFeatColl:function(){this._updateDrawnLayerName();this._initDefaultSymbols();var a=this.createFeatureCollection(this.drawnLayerName);this._featureLayer=new w(a,{id:this.drawnLayerName});this.map.addLayer(this._featureLayer);l.connect(this._featureLayer,"onClick",e.hitch(this,function(a){this.map.infoWindow.setFeatures([a.graphic])}));this.widget&&this.widget.set("drawLayer",
this._featureLayer)},createFeatureCollection:function(a){var b,c=h.GeometryTypes[this._type&&"polyline"===this._type?"Line":this._type.charAt(0).toUpperCase()+this._type.substr(1)];b={layerDefinition:null,featureSet:{features:[],geometryType:c||this.param.defaultValue.geometryType}};b.layerDefinition={objectIdField:"OBJECTID",templates:[],type:"Feature Layer",drawingInfo:{},name:a,hasAttachments:!1,capabilities:"Query",types:[],geometryType:c||this.param.defaultValue.geometryType,fields:this.param.defaultValue.fields||
[]};return b},_getRandomColor:function(){return[Math.floor(256*Math.random()),Math.floor(256*Math.random()),Math.floor(256*Math.random()),Math.floor(256*Math.random())]},_initDefaultSymbols:function(){var a=this.drawnLayerName&&-1!==this.drawnLayerName.search(/_[0-9]$/),b={style:"esriSMSCircle",color:a?this._getRandomColor():[0,0,128,128],name:"Circle",outline:{color:a?this._getRandomColor():[0,0,128,255],width:1},type:"esriSMS",size:18},c={style:"esriSLSSolid",color:a?this._getRandomColor():[79,
129,189,255],width:3,name:"Blue 1",type:"esriSLS"},a={style:"esriSFSSolid",color:a?this._getRandomColor():[79,129,189,128],type:"esriSFS",outline:{style:"esriSLSSolid",color:a?this._getRandomColor():[54,93,141,255],width:1.5,type:"esriSLS"}};this.pointSymbol=k.fromJson(b);this.polylineSymbol=k.fromJson(c);this.polygonSymbol=k.fromJson(a)},_createGraphic:function(a){return new x(a)},_addFeatures:function(a){a=this._createGraphic(a);var b=[];b.push(a);this._featureLayer.applyEdits(b,null,null);if(0===
this.analysisLayers.length||this.analysisLayers[this.analysisLayers.length-1]!==this._featureLayer)a=this.analysisLayers.push(this._featureLayer),b=this._analysisSelect.getOptions(),this._analysisSelect.removeOption(b),b=d.map(b,function(a){a.selected=!1;return a}),b.push({value:a,label:this._featureLayer.name,selected:!0}),this._analysisSelect.addOption(b),this._onLayerChanged(a);this._drawBtn.set("checked",!1);this._drawtoolbar.deactivate()},_removeDrawnFeatColl:function(){if(this._featureLayer){this.map.removeLayer(this._featureLayer);
d.forEach(this.analysisLayers,function(a,c){a===this._featureLayer&&(this._analysisSelect.removeOption({value:c+1,label:this._featureLayer.name}),this.analysisLayers.splice(c,1))},this);var a=this.widget.get("drawLayer");void 0!==a&&0<a.length&&(a=d.filter(a,function(a){return a.name!==this._featureLayer.name},this),this.widget.drawLayer=a);this._featureLayer=null}},clear:function(){this._removeDrawnFeatColl();this._handleDrawBtnChange(!1)},_setDrawnLayerNameAttr:function(a){this.drawnLayerName=a},
_getDrawnLayerNameAttr:function(){return this._featureLayer?this._featureLayer.name:this.drawnLayerName},_getDrawLayerAttr:function(){return this._featureLayer},getGPValue:function(){return this.wrapValueToDeferred(this.getSelectedLayer())},getSelectedLayer:function(){var a=this.analysisLayers[this._analysisSelect.get("value")-1];return a?f.constructAnalysisInputLyrObj(a,!0):null},_setMapAttr:function(a){this.map=a;this._drawtoolbar=new g(this.map);l.connect(this._drawtoolbar,"onDrawEnd",e.hitch(this,
this._addFeatures))},_setAnalysisLayerAttr:function(a){this._set("analysisLayer",a)},_getAnalysisLayerAttr:function(){return this.analysisLayers&&this.analysisLayers[this._analysisSelect.get("value")-1]}})});