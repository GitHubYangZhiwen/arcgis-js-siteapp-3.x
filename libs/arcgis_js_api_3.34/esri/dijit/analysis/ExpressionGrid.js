// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/ExpressionGrid.html":'\x3cdiv class\x3d"esriAnalysisExpressionGrid"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit.layout.ContentPane" style\x3d"padding:1px;width:100%;height:200px;"  data-dojo-attach-point\x3d"_gridPane"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_gridDiv" style\x3d"height:90%"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_textDiv" style\x3d"border:1px #EFEEEF solid;display:none;height:90%"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv style\x3d"clear:both;"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit.layout.ContentPane" style\x3d"padding:1px;width:100%;"\x3e\r\n    \x3ctable style\x3d"width:100%;"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd style\x3d"width:20%;"\x3e\r\n            \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriTertiaryActionBtn calcite green tiny" data-dojo-attach-point\x3d"_addBtn" data-dojo-attach-event\x3d"onClick:_handleAddButtonClick" class\x3d""\x3e\r\n              ${i18n.addExpr}\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"esriFloatTrailing"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin025"\x3e\r\n              \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriActionButton" data-dojo-props\x3d"label:\'${i18n.edit}\',iconClass:\'esriAnalysisEditIcon\',showLabel: false, disabled:true" data-dojo-attach-point\x3d"_editBtn" data-dojo-attach-event\x3d"onClick:_handleEditButtonClick"\x3e\x3c/div\x3e\r\n              \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriActionButton" data-dojo-props\x3d"label:\'${i18n.remove}\',iconClass:\'esriAnalysisRemoveIcon\',showLabel: false, disabled:true" data-dojo-attach-point\x3d"_removeBtn" data-dojo-attach-event\x3d"onClick:_handleRemoveButtonClick"\x3e\x3c/div\x3e     \r\n              \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriActionButton" data-dojo-props\x3d"label:\'${i18n.groupLabel}\',iconClass:\'esriAnalysisGroupIcon\',showLabel: false, disabled:true" data-dojo-attach-point\x3d"_groupBtn" data-dojo-attach-event\x3d"onClick:_handleGroupButtonClick"\x3e\x3c/div\x3e\r\n              \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriActionButton" data-dojo-props\x3d"label:\'${i18n.ungroupLabel}\',iconClass:\'esriAnalysisUngroupIcon\',showLabel: false, disabled:true" data-dojo-attach-point\x3d"_ungroupBtn" data-dojo-attach-event\x3d"onClick:_handleUngroupButtonClick"\x3e\x3c/div\x3e\r\n              \x3cdiv data-dojo-type\x3d"dijit/form/ToggleButton" class\x3d"esriActionButton" data-dojo-props\x3d"label:\'${i18n.viewText}\',iconClass:\'esriAnalysisTextIcon\',showLabel: false, checked: false, disabled:true" data-dojo-attach-point\x3d"_viewBtn" data-dojo-attach-event\x3d"onChange:_handleViewButtonClick"\x3e\x3c/div\x3e           \r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n      \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.expression}" data-dojo-props\x3d"closable:false" data-dojo-attach-point\x3d"_expDialog" style\x3d"width:65em;"\x3e\r\n    \x3c!--\x3cdiv data-dojo-attach-point\x3d"_testdiv"\x3etesting\x3c/div\x3e--\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_expressionForm" data-dojo-type\x3d"esri/dijit/analysis/ExpressionForm" data-dojo-props\x3d"primaryActionButttonClass:\'${primaryActionButttonClass}\'"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e   \r\n\x3c/div\x3e'}});
define("esri/dijit/analysis/ExpressionGrid","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/store/Memory dojo/store/Observable dojo/Evented dojo/_base/event dojo/window dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/ToggleButton dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/Dialog dijit/InlineEditBox dgrid/OnDemandGrid dgrid/Keyboard dgrid/Selection dgrid/selector dgrid/extensions/DijitRegistry dgrid/util/mouse ./tree put-selector/put ../../kernel ../../lang ./ExpressionForm dojo/i18n!../../nls/jsapi dojo/text!./templates/ExpressionGrid.html".split(" "),
function(p,t,g,d,O,P,x,u,Q,k,q,l,R,S,y,z,A,r,B,C,D,E,F,G,T,U,V,W,X,Y,Z,aa,ba,ca,da,H,I,J,ea,K,fa,v,L,M,m,ga,n,N){var w;w=t([v,H,J,I,K]);p=t([C,D,E,F,G,A],{declaredClass:"esri.dijit.analysis.ExpressionGrid",templateString:N,widgetsInTemplate:!0,indentWidth:10,refreshOptions:{keepScrollPosition:!0},allowAllInputOperands:!1,isServerAdvanceLicensed:!0,_selectedIds:[],constructor:function(a){a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments)},postMixInProperties:function(){this.inherited(arguments);
this.i18n={};g.mixin(this.i18n,n.common);g.mixin(this.i18n,n.analysisTools);g.mixin(this.i18n,n.analysisMsgCodes);g.mixin(this.i18n,n.expressionGrid)},postCreate:function(){this.inherited(arguments);var a;this.expressionStore=z(new y({idProperty:"id",allExpressionText:"",data:this.data||[{id:0,operator:"",expressionText:""}],getChildren:function(b){return this.query({parent:b.id})},getAllChildren:function(b){var a,e;a=this.getChildren(b);0<a.total&&d.forEach(a,function(b){e=this.getAllChildren(b);
0<e.total&&d.forEach(e,function(b){a[a.total]=b;a.total+=1},this)},this);return a},getExpressions:function(b,a){var c,h,f,g;c=this.getChildren(b);0<c.total?(f=[],a={},a.operator=b.operator,a.layer=b.layer,b.where?a.where=b.where:(a.selectingLayer=b.selectingLayer,a.spatialRel=b.spatialRel,b.distance&&(a.distance=b.distance,a.units=b.units)),-1===this.allExpressionText.indexOf(b.text)&&(this.allExpressionText+=b.operator+" ( "+b.text+" "),f.push(a),d.forEach(c,function(a,b){h=this.getExpressions(a,
b===c.total-1?!0:!1);g=this.getChildren(a);0<g.total&&(a._isAdd||(this.allExpressionText+=")"),a._isAdd=!0);f.push(h)},this)):(f={},f.operator=b.operator,f.layer=b.layer,b.where?f.where=b.where:(f.selectingLayer=b.selectingLayer,f.spatialRel=b.spatialRel,b.distance&&(f.distance=b.distance,f.units=b.units)),-1===this.allExpressionText.indexOf(b.text)&&(this.allExpressionText+=b.operator+" "+b.text+" ",a&&!0===a&&(this.allExpressionText+=")")));return f},getLabel:function(a){return a.text},mayHaveChildren:function(a){return 1!==
a.id}}));a={operator:v({label:"",renderCell:g.hitch(this,this._renderExpOperatorCell),shouldExpand:function(){return!0},sortable:!1,indentWidth:10,renderExpando:function(a,c,e,h){a=L("div.dgrid-expando-icon[style\x3dwidth:0;height:0;]");a.innerHTML=" ";return a}})};this.expressiongrid=new w({store:this.expressionStore,query:{expressionText:""},selectionMode:"extended",columns:a,showHeader:!1,allowSelectAll:!0,allowSelect:function(a){return a&&a.data&&0===a.data.id?!1:!0}},this._gridDiv);this.expressiongrid.on("dgrid-select",
g.hitch(this,this._handleExpressiongridSelect));this.expressiongrid.startup();this.expressiongrid.keepScrollPosition=!0;this.allowAllInputOperands?this._expressionForm.set("firstOperands",this.inputLayers):(this._expressionForm.set("firstOperands",[this.analysisLayer]),this.data&&this._updateFirstOperands());this._expressionForm.set("selectedFirstOperand",this.analysisLayer);this._expressionForm.set("inputOperands",this.inputLayers);this._expressionForm.set("showReadyToUseLayers",this.get("showReadyToUseLayers"));
this._expressionForm.set("showBrowseLayers",this.get("showBrowseLayers"));this._expressionForm.set("showReadyLayersForFirst",this.allowAllInputOperands);this._expressionForm.set("owningWidget",this.get("owningWidget"));this._expressionForm.set("isServerAdvanceLicensed",this.isServerAdvanceLicensed);this._expressionForm.init();this._expressionForm.on("add-expression",g.hitch(this,this._handleExpressionFormAdd));this._expressionForm.on("cancel-expression",g.hitch(this,this._handleExpressionFormCancel))},
_handleExpressiongridSelect:function(a){var b,c;if((this._selectedObj=a.grid.selection)&&this._selectedIds&&0<this._selectedIds.length){c=!0;a=this._selectedIds.toString();for(b in this._selectedObj)this._selectedObj.hasOwnProperty(b)&&(b=parseInt(b,10),c=-1!==a.indexOf(b));if(c)return}this._selectedIds=[];this._selectedRows=[];for(b in this._selectedObj)this._selectedObj.hasOwnProperty(b)&&(b=parseInt(b,10),!0===this._selectedObj[b]&&0!==b&&(this._selectedIds.push(b),this._selectedRows.push(this.expressiongrid.cell(b).row),
a=this.expressiongrid.cell(b).row.data,a=this.expressionStore.getAllChildren(a),0<a.total&&d.forEach(a,function(a){this._selectedIds.push(a.id);this._selectedRows.push(this.expressiongrid.cell(a.id).row);this.expressiongrid.select(a.id)},this)),!0===this._selectedObj[b]&&0===b&&(this._groupBtn.set("disabled",!0),this._ungroupBtn.set("disabled",!0),this._removeBtn.set("disabled",!0),this._editBtn.set("disabled",!0),this._addBtn.set("disabled",!1),this._viewBtn.set("disabled",!0)));0<this._selectedIds.length&&
(b=1===this._selectedIds.length,this._groupBtn.set("disabled",b||3>=this.expressionStore.data.length),this._ungroupBtn.set("disabled",b||3>=this.expressionStore.data.length),this._removeBtn.set("disabled",!1),this._editBtn.set("disabled",!b),this._addBtn.set("disabled",!b),this._viewBtn.set("disabled",!1))},_renderExpOperatorCell:function(a,b,c,e){if(!a.expressionText)1===this.expressionStore.data.length?l.create("label",{innerHTML:this.i18n.addExprDescription,style:{fontStyle:"italic",textAlign:"center",
display:"inline-block",width:"105%",fontWeight:"lighter"}},c):k.set(c,"display","none");else if(a.expressionText){var h,f,d,m;m=0;f=this._gridPane.isRTL?"marginRight":"marginLeft";h=l.create("table",{"class":"esriExpressionTable"},c);1<e.level?(d=e.level*e.level*this.indentWidth+8+"px",k.set(h,f,d)):k.set(h,f,"5px");h=l.create("tr",{},h);f=this.expressionStore.getAllChildren(a);0<e.level&&0<f.total&&(m=1===e.level?2*this.indentWidth*e.level+24:this.indentWidth*e.level*2+this.indentWidth);e=l.create("td",
{"class":"expressionTd"},h);k.set(e,"width","32px");f=l.create("td",{"class":"expressionTd"},h);k.set(f,"width",m+"px");f=l.create("div",{},f);k.set(f,"width",m+"px");b?l.create("div",{innerHTML:this.i18n[b],name:a.operator,id:a.id,"class":"esriAnalysisOperatorButton",onclick:g.hitch(this,function(a){r.stop(a);a=a.target;var b,c;b=this.expressionStore.get(a.id);this.expressiongrid.clearSelection();this._selectedRows=[];this._selectedIds=[];c=q.get(a,"name");a.innerHTML="and"===c?this.i18n.or:this.i18n.and;
q.set(a,"name","and"===c?"or":"and");b.operator="and"===c?"or":"and";this.expressionStore.put(b);this.expressiongrid.refresh(this.refreshOptions)})},e,"first"):l.create("div",{style:"width:32px;"},e);b=l.create("td",{"class":"esriAnalysisExpression expressionTd"},h);l.create("label",{"class":"",title:this.expressionStore.getLabel(a),innerHTML:a.expressionText},b)}return c},_clear:function(){this._selectedIds=[];this.expressiongrid.clearSelection();this.expressiongrid.refresh(this.refreshOptions);
this._groupBtn.set("disabled",!0);this._ungroupBtn.set("disabled",!0);this._removeBtn.set("disabled",!0);this._editBtn.set("disabled",!0);this._addBtn.set("disabled",!1);this._viewBtn.set("disabled",1===this.expressionStore.data.length?!0:!1);1===this.expressionStore.data.length&&(this.allowAllInputOperands?this._expressionForm.set("firstOperands",this.inputLayers):this._expressionForm.set("firstOperands",[this.analysisLayer]),this._expressionForm.set("selectedFirstOperand",this.analysisLayer),this._expressionForm.set("inputOperands",
this.inputLayers))},_handleAddButtonClick:function(a){this._expDialog.set("title",this.i18n.addExpr);this._expressionForm.set("action","add");this._expressionForm.clear();this._expDialog.show()},_handleEditButtonClick:function(a){r.stop(a);this._expDialog.set("title",this.i18n.editExpr);if(this._selectedIds&&0===this._selectedIds.length)return!1;a=this.expressionStore.get(this._selectedIds[0]);this._expressionForm.set("action","edit");this._expressionForm.clear();this._expressionForm.set("expression",
a);this._expDialog.show()},_handleRemoveButtonClick:function(a){r.stop(a);if(this._selectedIds&&0===this._selectedIds.length)return!1;d.forEach(this._selectedIds,function(a){this.expressionStore.remove(a)},this);this._clear();this.emit("update-expressions",this.expressionStore.query())},_handleGroupButtonClick:function(a){var b,c;if(this._selectedIds&&0===this._selectedIds.length)return!1;a=d.map(this._selectedIds,function(a){return parseInt(a,10)});b=this._arrayMin(a);d.forEach(this._selectedRows,
function(a,d){c=this.expressiongrid.cell(this._selectedRows[d].id);1<this._selectedRows[d].id&&this._selectedRows[d].id!==b&&(0===c.row.data.parent&&this.expressionStore.mayHaveChildren(this.expressionStore.get(b))&&(c.row.data.parent=b),this.expressionStore.put(c.row.data));this.expressiongrid.refresh(this.refreshOptions)},this);this._clear()},_handleUngroupButtonClick:function(a){var b,c;if(this._selectedIds&&0===this._selectedIds.length)return!1;a=d.map(this._selectedIds,function(a){return parseInt(a,
10)});b=this._arrayMin(a);d.forEach(this._selectedRows,function(a,d){c=this.expressiongrid.cell(this._selectedRows[d].id);1<this._selectedRows[d].id&&this._selectedRows[d].id!==b&&(c.row.data.parent===b&&(c.row.data.parent=0),this.expressionStore.put(c.row.data));this.expressiongrid.refresh(this.refreshOptions)},this);this._clear()},_handleExpressionFormAdd:function(a){var b={},c;"add"===a.action?(b={id:this.expressionStore.data.length,operator:1===this.expressionStore.data.length?"":"and"},0===this._selectedIds.length?
b.parent=0:1===this._selectedIds.length&&(c=parseInt(this._selectedIds[0],10),b.parent=this.expressionStore.mayHaveChildren(this.expressionStore.get(c))?c:0)):(b=this.expressionStore.get(parseInt(this._selectedIds[0],10)),b.where&&a.expression.spatialRel&&delete b.where,b.spatialRel&&a.expression.where&&(delete b.spatialRel,delete b.selectingLayer,b.distance&&(delete b.distance,delete b.units)));g.mixin(b,a.expression);b.expressionText=a.displayText;b.text=a.text;this.expressionStore.put(b);this.expressiongrid.refresh(this.refreshOptions);
this._expDialog.hide();this.allowAllInputOperands||this._updateFirstOperands(a.expression);this._clear();this.validate();this.emit("update-expressions",this.expressionStore.query())},_handleExpressionFormCancel:function(){this._expDialog.hide();this._clear()},_handleViewButtonClick:function(a){this._viewBtn.set("label",a?this.i18n.viewGrid:this.i18n.viewText);this._viewBtn.set("iconClass",a?"esriAnalysisGridIcon":"esriAnalysisTextIcon");a&&(this._groupBtn.set("disabled",a),this._ungroupBtn.set("disabled",
a),this._removeBtn.set("disabled",a),this._editBtn.set("disabled",a),this._addBtn.set("disabled",a));this.get("expressions");k.set(this._textDiv,"display",a?"":"none");k.set(this._gridDiv,"display",a?"none":"");q.set(this._textDiv,"innerHTML",a?this.expressionStore.allExpressionText:"");a||this._clear()},_updateFirstOperands:function(a){a=this.get("selectedLayers");this._expressionForm.set("firstOperands",a)},_getInputLayerById:function(a){d.forEach(this.inputLayers,function(b){if(b.id===a)return b},
this)},_arrayMin:function(a){return Math.min.apply(Math,a)},_setInputLayersAttr:function(a){this.inputLayers=a},_getInputLayersAttr:function(){return this.inputLayers},_setAnalysisLayerAttr:function(a){this.analysisLayer=a},_getAnalysisLayerAttr:function(){return this.analysisLayer},_setSelectedLayersAttr:function(a){this.selectedLayers=a},_getSelectedLayersAttr:function(){var a=[],b=[];d.forEach(this.expressionStore.data,function(c,e){m.isDefined(c.layer)&&-1===d.indexOf(a,c.layer)&&(a.push(c.layer),
b.push(this.inputLayers[c.layer]));m.isDefined(c.selectingLayer)&&-1===d.indexOf(a,c.selectingLayer)&&(a.push(c.selectingLayer),b.push(this.inputLayers[c.selectingLayer]))},this);this.selectedLayers=b;this.set("selectedLayerIds",a);return this.selectedLayers},_setSelectedLayerIdsAttr:function(a){this.selectedLayerIds=a},_getSelectedLayerIdsAttr:function(){return this.selectedLayerIds},_getSelectedLayersMapAttr:function(){var a={};a.inputLayers=this.get("inputLayers");a.selectedLayers=this.get("selectedLayers");
a.selectedLayerIds=this.get("selectedLayerIds");return a},_setDataAttr:function(a){this.data=a},_getExpressionsAttr:function(){var a=[],b,c;this.expressionStore.allExpressionText="";d.forEach(this.expressionStore.data,function(a,b){a._isAdd=!1});d.forEach(this.expressionStore.data,function(e,d){0!==d&&(c={},c.operator=e.operator,c.layer=e.layer,e.where?c.where=e.where:(c.selectingLayer=e.selectingLayer,c.spatialRel=e.spatialRel,e.distance&&(c.distance=e.distance,c.units=e.units)),this._findElementInMultiArray(a,
c)||(b=this.expressionStore.getExpressions(e),a.push(b)))},this);return a},_getExpressionMapAttr:function(){var a,b;a=this.get("selectedLayersMap");b=this.get("expressions");b=this._updateExpressions(b,a);return{data:this.expressionStore.data,expressions:b,inputLayers:a.selectedLayers,expressionString:this.expressionStore.allExpressionText}},_setExpressionMapAttr:function(a){this.expressionsMap=a},_setShowReadyToUseLayersAttr:function(a){this._set("showReadyToUseLayers",a)},_setShowBrowseLayersAttr:function(a){this._set("showBrowseLayers",
a)},_setOwningWidgetAttr:function(a){this._set("owningWidget",a)},_updateExpressions:function(a,b){d.forEach(a,function(a,e){a instanceof Array||a.length?a=this._updateExpressions(a,b):(m.isDefined(a.layer)&&-1!==d.indexOf(b.selectedLayerIds,a.layer)&&(a.layer=d.indexOf(b.selectedLayerIds,a.layer)),m.isDefined(a.selectingLayer)&&-1!==d.indexOf(b.selectedLayerIds,a.selectingLayer)&&(a.selectingLayer=d.indexOf(b.selectedLayerIds,a.selectingLayer)))},this);return a},_findElementInMultiArray:function(a,
b){var c=!1;d.forEach(a,function(a,d){if(u.stringify(b)===u.stringify(a))return c=!0;if(a instanceof Array||a.length)c=this._findElementInMultiArray(a,b)},this);return c},_setPrimaryActionButttonClassAttr:function(a){this.primaryActionButttonClass=a},_getCssClassesAttr:function(){return this.primaryActionButttonClass},validate:function(){var a;(a=1!==this.expressionStore.data.length)?k.set(this.expressiongrid.domNode,"borderColor","#bba"):(B.scrollIntoView(this.expressiongrid.domNode),this.expressiongrid.focus(),
k.set(this.expressiongrid.domNode,"borderColor","#f94"));return a}});x("extend-esri")&&g.setObject("dijit.analysis.ExpressionGrid",p,M);return p});