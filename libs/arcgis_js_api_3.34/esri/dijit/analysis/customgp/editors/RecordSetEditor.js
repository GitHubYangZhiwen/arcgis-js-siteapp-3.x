// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/customgp/editors/RecordSetEditor",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","../BaseEditor"],function(b,c,d,e){return b([e],{baseClass:"jimu-gp-editor-base jimu-gp-editor-rse",editorName:"RecordSetEditor",popupConfig:null,args:null,constructor:function(a){this.args=c.mixin({},a)},postCreate:function(){this.inherited(arguments);this.value={};if(this.args&&this.args.param&&this.args.param.defaultValue){this.value=c.clone(this.args.param.defaultValue);var a=
this.value.fields;if(this.value.output&&this.value.output.fields){var b=d.map(this.value.output.fields,function(a){return a.name});d.forEach(a,function(a){0<=b.indexOf(a.name)?a.visible=!0:a.visible=!1})}}else this.domNode.innerHTML="table"},destroy:function(){this.popupConfig&&(this.popupConfig.destroy(),this.popupConfig=null);this.inherited(arguments)},getValue:function(){if(this.popupConfig){var a=this.popupConfig.getConfig();this.value.output={title:a.title,fields:a.fields};this.value.fields=
this.args.param.defaultValue.fields}return this.value}})});