// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/RasterFunctionEditor/RFxBandMatrix","dojo/_base/declare dojo/has ../../kernel dojo/_base/lang dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ./EditableGridMixin ./RFxGridBase".split(" "),function(d,h,k,e,l,m,n,p,q,f){d=d("RFxBandMatrix",[m,n,p,l,q],{templateString:"\x3cdiv\x3e\x3cdiv data-dojo-attach-point\x3d'bandMatrix'\x3e\x3c/div\x3e\x3c/div\x3e",baseClass:"esriRFxBandMatrix",nCols:0,displayNames:[],dataType:f.DATA_TYPES.double,_store:null,
_grid:null,postCreate:function(){this.inherited(arguments);this._initializeGrid();this._grid.on("grid-data-change",e.hitch(this,function(a){this._updateValue(a)}))},_initializeGrid:function(){var a=this._getGridSchema(),b=this._createDataObject(this.value);this._grid=new f({schema:a,data:b,hasIdColumn:!0},this.bandMatrix);this._grid.startup()},_getGridSchema:function(){var a=[];return a=this.displayNames.map(function(b,a){return{label:b,name:a+1,dataType:this.dataType}},this)},_createDataObject:function(){var a=
[],b=e.clone(this._getProcessedValue?this._getProcessedValue():this.value);if(b)for(;b.length;){var g={};b.splice(0,this.nCols).forEach(function(a,b){g[b+1]=a});a.push(g)}return a},_updateValue:function(a){var b=[];a.forEach(function(a){"*"!==a.idNum&&Object.keys(a).forEach(function(c){c&&!isNaN(a[c])&&"id"!==c&&"idNum"!==c&&b.push(a[c])})});this.value=this._createComplexValue?this._createComplexValue(b):b}});h("extend-esri")&&e.setObject("dijit.RasterFunctionEditor.RFxBandMatrix",d,k);return d});