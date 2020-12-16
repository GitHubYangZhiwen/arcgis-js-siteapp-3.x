// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/components/FilterAndSelection/FilterAndSelection.html":'\x3cdiv class\x3d"esriLeadingMargin1 esriFloatTrailing marginTop1"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/ToggleButton" class\x3d"esriActionButton" data-dojo-props\x3d"label:\'${i18n.selectLabel}\',iconClass:\'esriAnalysisSelectFilterIcon\',showLabel:false" data-dojo-attach-point\x3d"_selectBtn" data-dojo-attach-event\x3d"onChange:_handleSelectionButtonClick"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriActionButton" data-dojo-props\x3d"label:\'${i18n.queryLabel}\',iconClass:\'esriAnalysisAttributeFiltercon\',showLabel:false" data-dojo-attach-point\x3d"_queryBtn" data-dojo-attach-event\x3d"onClick:_handleQueryButtonClick"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.expression}" data-dojo-props\x3d"closable:false" data-dojo-attach-point\x3d"_expDialog" style\x3d"width:65em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_expressionForm" data-dojo-type\x3d"esri/dijit/analysis/ExpressionForm" data-dojo-props\x3d"showFirstRow:false,primaryActionButttonClass:\'btn calcite blue\'"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/analysis/components/FilterAndSelection/FilterAndSelection","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/Color dojo/_base/connect dojo/has dojo/string dojo/dom-attr dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/form/Button dijit/form/ToggleButton dijit/Dialog ../../../../kernel ../../../../lang ../../../../layers/FeatureLayer ../../ExpressionForm ../../../../geometry/Extent ../../../../geometry/ScreenPoint ../../../../symbols/CartographicLineSymbol ../../../../symbols/SimpleMarkerSymbol ../../../../symbols/SimpleLineSymbol ../../../../symbols/SimpleFillSymbol ../../../../tasks/query ../../ItemTypes ../../AnalysisRegistry dojo/i18n!../../../../nls/jsapi dojo/text!./FilterAndSelection.html".split(" "),
function(n,e,g,l,r,y,t,k,z,A,B,G,H,I,C,J,h,K,D,u,p,v,m,w,E,f,q,x,F){n=n([z,A,B],{declaredClass:"esri.dijit.analysis.components.FilterAndSelection.FilterAndSelection",templateString:F,_pbConnects:[],i18n:{},map:{},layer:{},msgContainer:null,expression:{},inputQuery:"",postMixInProperties:function(){this.inherited(arguments);e.mixin(this.i18n,x.expressionGrid);e.mixin(this.i18n,x.common)},destroy:function(){this.inherited(arguments);g.forEach(this._pbConnects,r.disconnect);delete this._pbConnects},
postCreate:function(){this.inherited(arguments);this.own(this._expressionForm.on("add-expression",e.hitch(this,this._handleExpressionFormAdd)));this.own(this._expressionForm.on("cancel-expression",e.hitch(this,this._handleExpressionFormCancel)))},startup:function(){},_handleSelectionButtonClick:function(a){a&&!this._mapClickHandle?(this._mapClickHandle=this.map.on("click",e.hitch(this,this._handleMapClick)),this.emit("selecttool-activate",{}),this.set("expression",void 0)):(this._mapClickHandle&&
(this._mapClickHandle.remove(),this._mapClickHandle=null),this.emit("selecttool-deactivate",{}))},_setInputQueryForRerun:function(){var a=this.layer&&(this.layer.type===f.BDATAFEATURE||this.layer.type===f.BTABLE);this.layer&&this.layer.filter&&-1!==this.layer.filter.indexOf(" AND ")?(this.set("inputQuery",this.layer.filter.substring(this.layer.filter.indexOf(" AND ")+5)),a||this.layer.setDefinitionExpression(this.layer.filter.substring(0,this.layer.filter.indexOf(" AND ")))):this.layer&&this.layer.filter&&
-1===this.layer.filter.indexOf(" AND ")&&(this.set("inputQuery",this.layer.filter),a||this.layer.setDefinitionExpression(null));this.inputQuery===(this.expression&&this.expression.expression.where)?k.set(this.msgContainer,"innerHTML",this.expression.expression._attributeText):0===this._getObjectIds().length&&k.set(this.msgContainer,"innerHTML","")},_handleQueryButtonClick:function(){this._expDialog.set("title",this.i18n.queryLabel);this._selectBtn.set("checked",!1);this._isAttrFlag=!0;this._expressionForm.set("showUnique",
!(this.layer&&(this.layer.type===f.BDATAFEATURE||this.layer.type===f.TABLE||this.layer.type===f.BTABLE)));this.expression?(this._expressionForm.set("action","edit"),this._expressionForm.set("expression",this.expression.expression)):this._expressionForm.set("action","add");this._expDialog.show()},_handleExpressionFormAdd:function(a){this.selectionLayer&&this.selectionLayer.clearSelection();if("add"===a.action||"edit"===a.action)this.set("expression",a),this.set("inputQuery",a.expression&&a.expression.where||
""),a=this._getQuery(),this.selectionLayer&&this.selectionLayer.selectFeatures(a,h.SELECTION_ADD);this._expDialog.hide()},_handleExpressionFormCancel:function(){this._expDialog.hide()},clear:function(){this.selectionLayer&&(this.selectionLayer.clearSelection(),this.map.removeLayer(this.selectionLayer),this.selectionLayer=null,this.set("inputQuery",""));this._mapClickHandle&&(this._mapClickHandle.remove(),delete this._mapClickHandle)},_handleMapClick:function(a){var b,c,d;!this._isAttrFlag&&this.expression&&
this.selectionLayer.clearSelection();c=6;(b=this.layer.renderer)&&"esri.renderer.SimpleRenderer"===b.declaredClass?(d=b.symbol,d.xoffset&&(c=Math.max(c,Math.abs(d.xoffset))),d.yoffset&&(c=Math.max(c,Math.abs(d.yoffset)))):!b||"esri.renderer.UniqueValueRenderer"!==b.declaredClass&&"esri.renderer.ClassBreaksRenderer"!==b.declaredClass||g.forEach(b.infos,function(a){d=a.symbol;d.xoffset&&(c=Math.max(c,Math.abs(d.xoffset)));d.yoffset&&(c=Math.max(c,Math.abs(d.yoffset)))});b=a.screenPoint;a=this.map.toMap(new u(b.x-
c,b.y+c));b=this.map.toMap(new u(b.x+c,b.y-c));a=new D(a.x,a.y,b.x,b.y,this.map.spatialReference);a=this._getQuery({extent:a});this.layer.getDefinitionExpression&&(a.where=this.layer.getDefinitionExpression());this.layer.queryFeatures(a).then(e.hitch(this,function(a){if(a){var b=[],c=[],d=[];this.selectionLayer&&0<this.selectionLayer.getSelectedFeatures().length&&(c=g.map(this.selectionLayer.getSelectedFeatures(),function(a){return a.attributes[this.selectionLayer.objectIdField]},this));g.forEach(a.features,
function(a){0===c.length?b.push(a.attributes[this.selectionLayer.objectIdField]):-1===g.indexOf(c,a.attributes[this.selectionLayer.objectIdField])?b.push(a.attributes[this.selectionLayer.objectIdField]):d.push(a.attributes[this.selectionLayer.objectIdField])},this);0<b.length&&(a=this._getQuery({oids:b}),this.selectionLayer.selectFeatures(a,h.SELECTION_ADD));0<d.length&&(a=this._getQuery({oids:d}),this.selectionLayer.selectFeatures(a,h.SELECTION_SUBTRACT))}}))},_handleLayerSelectionComplete:function(){var a=
this.selectionLayer.getSelectedFeatures(),b;!this._isAttrFlag&&0<a.length&&(b="",g.forEach(a,function(a){b+=this.selectionLayer.objectIdField+" \x3d "+a.attributes[this.selectionLayer.objectIdField]+" OR ";return a.attributes[this.selectionLayer.objectIdField]},this),b=b.substring(0,b.lastIndexOf(" OR ")),this.set("inputQuery",b),k.set(this.msgContainer,"innerHTML",t.substitute(this.i18n.selectedFeaturesLabel,{total:a.length})));this._isAttrFlag||0!==a.length||(k.set(this.msgContainer,"innerHTML",
""),this.set("inputQuery",""))},_onSelectionLayerLoad:function(a,b){b.setScaleRange(a.minScale,a.maxScale);this._connect(a,"onScaleRangeChange",e.hitch(this,function(a,b){a.setScaleRange(b.minScale,b.maxScale)},b,a));this.map.addLayer(b);b.geometryType===q.GeometryTypes.Point||"esriGeometryMultPoint"===b.geometryType?(a=new v,a.setStyle(v.STYLE_TARGET),a._setDim(16,16,0),a.setOutline(new p(m.STYLE_SOLID,new l([0,255,255]),2,p.CAP_ROUND,p.JOIN_ROUND)),a.setColor(new l([0,0,0,0])),b.setSelectionSymbol(a)):
b.geometryType===q.GeometryTypes.Line?b.setSelectionSymbol(new m(m.STYLE_SOLID,new l([0,255,255]),2)):b.geometryType===q.GeometryTypes.Polygon&&b.setSelectionSymbol(new w(w.STYLE_NULL,new m(m.STYLE_SOLID,new l([0,255,255]),2),new l([0,0,0,0])));this.selectionLayer&&this.inputQuery&&(this.inputQuery.match(/ OR /g)||!this.expression?this._isAttrFlag=!1:(this._isAttrFlag=!0,this.set("expression",{action:"edit",expression:this.expression.expression})),b=this._getQuery(),this.selectionLayer.selectFeatures(b,
h.SELECTION_ADD))},_isLayerPresentInMap:function(a){var b=!1;this.map.getLayersVisibleAtScale().forEach(function(c){b=b||c.url===a.url});return b},_getObjectIds:function(){var a=this.get("inputQuery"),a=a?a.split(" OR "):[],a=g.map(a,function(a){return a.split(" \x3d ")[1]});k.set(this.msgContainer,"innerHTML",t.substitute(this.i18n.selectedFeaturesLabel,{total:a.length}));return a},_getQuery:function(a){var b;b=new E;b.returnGeometry=!0;if(!a)return this._isAttrFlag?b.where=this.get("inputQuery"):
b.objectIds=this._getObjectIds(),b;a.extent&&(b.geometry=a.extent);a.oids&&(b.objectIds=a.oids);return b},_setMapAttr:function(a){this.map=a},_getMapAttr:function(){return this.map},_getInputQueryAttr:function(){return this.inputQuery},_setInputQueryAttr:function(a){this.inputQuery=a},_getLayerAttr:function(){return this.selectionLayer},_setLayerAttr:function(a){if(a&&a.url){var b=this.layer&&(this.layer.type===f.BDATAFEATURE||this.layer.type===f.BTABLE||this.layer.type===f.TABLE);this.layer=a;this.set("inputQuery",
"");this.selectionLayer&&this.clear();this._selectBtn.set("checked",!1);this._expressionForm.set("showUnique",!b);this._expressionForm.set("showFirstRow",!1);this._expressionForm.set("firstOperands",[a]);this._expressionForm.set("inputOperands",[a]);this._expressionForm.set("selectedFirstOperand",a);this._expressionForm.init();this._queryBtn.set("disabled",!1);this._setInputQueryForRerun();if(this._isLayerPresentInMap(a))if(this._selectBtn.set("disabled",!1),this.selectionLayer=new h(a.url&&!a._collection?
a.url:this.layer.toJson(),{outFields:["*"],mode:a.url&&!a._collection?h.MODE_SELECTION:h.MODE_SNAPSHOT}),this.selectionLayer.setRenderer(null),this.selectionLayer.on("selection-complete",e.hitch(this,this._handleLayerSelectionComplete)),this.selectionLayer.loaded)this._onSelectionLayerLoad(a,this.selectionLayer);else this.selectionLayer.on("load",e.hitch(this,this._onSelectionLayerLoad,a,this.selectionLayer));else this._selectBtn.set("disabled",!0)}else this._selectBtn.set("disabled",!0),this._queryBtn.set("disabled",
!0)},_setExpressionAttr:function(a){a?(this._isAttrFlag=!0,this.expression=a,this.expression.expression&&(k.set(this.msgContainer,"innerHTML",this.expression.expression._attributeText),this.set("inputQuery",this.expression.expression.where))):(this._isAttrFlag=!1,this.expression=void 0)},_getExpressionAttr:function(){return this.expression},_connect:function(a,b,c){this._pbConnects.push(r.connect(a,b,c))}});y("extend-esri")&&e.setObject("dijit.analysis.components.FilterAndSelection.FilterAndSelection",
n,C);return n});