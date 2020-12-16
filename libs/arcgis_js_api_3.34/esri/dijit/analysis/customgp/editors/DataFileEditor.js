// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/customgp/editors/DataFileEditor.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"modeSelection" style\x3d"display:none"\x3e\r\n    \x3cdiv class\x3d"field"\x3e\r\n      \x3cinput name\x3d"dataFileMode" type\x3d"radio" class\x3d"jimu-radio-btn" data-dojo-attach-point\x3d"urlMode"\r\n        data-dojo-attach-event\x3d"onclick: _onUrlModeSelect" style\x3d"font-size: 12px;"\x3e\r\n        \x3clabel style\x3d"width: auto;" class\x3d"jimu-leading-margin05"\x3e${nls.useUrlForGPInput}\x3c/label\x3e\r\n      \x3cinput name\x3d"dataFileMode" type\x3d"radio" data-dojo-attach-point\x3d"itemMode"\r\n        style\x3d"font-size: 12px;" data-dojo-attach-event\x3d"onclick: _onItemModeSelect"\r\n        class\x3d"jimu-leading-margin35 jimu-radio-btn"\x3e\x3clabel style\x3d" width: auto;"\r\n        class\x3d"jimu-leading-margin05"\x3e${nls.useUploadForGPInput}\x3c/label\x3e\r\n      \x3cinput name\x3d"dataFileMode" type\x3d"radio" data-dojo-attach-point\x3d"imgServerMode"\r\n        style\x3d"font-size: 12px;" data-dojo-attach-event\x3d"onclick: _onSelectModeClick"\r\n        class\x3d"jimu-leading-margin35 jimu-radio-btn"\x3e\x3clabel style\x3d" width: auto;"\r\n        class\x3d"jimu-leading-margin05"\x3e${chooseLayerName}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"settingNode"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"urlNode" data-dojo-props\x3d"label:urlNode"\x3e\r\n        \x3cdiv\x3e\r\n          \x3cinput type\x3d"text" data-dojo-attach-point\x3d"urlEditor" style\x3d"width:100%"\r\n            data-dojo-type\x3d"esri/dijit/analysis/customgp/common/dijit/URLInput" data-dojo-props\x3d"rest:false" class\x3d"common-input"/\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"fileNode" data-dojo-props\x3d"label:fileNode"\x3e\r\n        \x3cdiv\x3e\r\n          \x3cform data-dojo-attach-point\x3d"fileForm"\r\n                enctype\x3d"multipart/form-data"\r\n                method\x3d"POST" data-dojo-type\x3d"dijit/form/Form"\x3e\r\n            \x3cinput id\x3d"${uniqueID}_file" type\x3d"file" multiple\x3d"false" name\x3d"file"\r\n              data-dojo-attach-point\x3d"fileInput"\r\n              data-dojo-attach-event\x3d"onChange: _onUpload" style\x3d"display:none"/\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-leading-margin10 jimu-float-leading"\x3e\r\n              \x3clabel class\x3d"file-input-label" for\x3d"${uniqueID}_file"\x3e\r\n                ${nls.selectFileToUpload}\r\n              \x3c/label\x3e\r\n            \x3c/div\x3e\r\n            \x3cinput type\x3d"hidden" name\x3d"f" value\x3d"json"/\x3e\r\n          \x3c/form\x3e\r\n          \x3cspan data-dojo-attach-point\x3d"uploadFileName" class\x3d"jimu-leading-margin2"\x3e\x3c/span\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"ImgSvclayerNode" data-dojo-props\x3d"label:imgServNode"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/customgp/editors/DataFileEditor","dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/dom-style dojo/dom-attr dojo/_base/json dojo/on dojo/Deferred dojo/text!./DataFileEditor.html dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin esri/tasks/DataFile esri/request ../common/dijit/ViewStack ../common/dijit/Message ./SelectFeatureSetFromLayer ../../ItemTypes ../BaseEditor dijit/form/Form ../common/dijit/URLInput".split(" "),function(l,g,m,n,e,d,y,f,h,
p,q,r,t,u,v,k,w,b,x){return l([x,q,r],{baseClass:"jimu-gp-editor-base jimu-gp-editor-datafile",templateString:p,editorName:"DataFileEditor",mode:"url",_url:"",_itemID:null,uniqueID:null,constructor:function(a){this.inherited(arguments);this.chooseLayerName="GPRasterDataLayer"===a.param.dataType?a.nls.useImageServiceLayer:a.nls.useBrowseLayerPortal;this.uniqueID=(new Date).getTime()},postCreate:function(){this.inherited(arguments);this.value&&this.parseDefaultValue();d.set(this.urlEditor,"tooltip",
this.param.tooltip);this.config.showDrawOption=!1;this.selectFeature=new w({cssClass:{featureSetSelect:"esriTableFixedLayout fullSpread esriLongLabel esriAnalysisSelect",layerChooseCtr:""},param:{},widgetUID:void 0,widget:this.widget,config:this.config,appConfig:this.appConfig,map:this.map,nls:this.i18n,editorManager:this.editorManager,style:{width:"100%"}});this.selectFeature.defaultItemTypes=[b.FILE,b.DOC,b.IMG,b.PDF,b.CSVS];this.selectFeature.availableItemTypeFilters=[b.FILE,b.DOC,b.IMG,b.PDF,
b.CSVS];this.ImgSvclayerNode.appendChild(this.selectFeature.domNode);"setting"===this.context?(this.viewStack=null,e.set(this.fileNode,"display","none")):(this.viewStack=new v({viewType:"dom",views:[this.urlNode,this.fileNode,this.ImgSvclayerNode]}),this.viewStack.placeAt(this.settingNode),this.viewStack.startup());!0===this.config.serverInfo.supportsUpload&&e.set(this.modeSelection,"display","");"item"===this.mode&&this.config.serverInfo.supportsUpload?(d.set(this.itemMode,"checked",!0),f.emit(this.itemMode,
"click",{cancelable:!0,bubble:!0})):"layer"===this.mode?(d.set(this.selectMode,"checked",!0),f.emit(this.selctMode,"click",{cancelable:!0,bubble:!0})):(d.set(this.urlMode,"checked",!0),f.emit(this.urlMode,"click",{cancelable:!0,bubble:!0}),this.urlEditor.set("value",this._url));if(this.param.filter&&this.param.filter.type&&"file"===this.param.filter.type.toLowerCase()&&this.param.filter.list&&0<this.param.filter.list.length){var a=n.map(this.param.filter.list,function(a){return"."+a});m.setAttr(this.fileInput,
"accept",a.join(","))}},parseDefaultValue:function(){0===this.value.indexOf("itemID:")?this.mode="item":(0===this.value.indexOf("url:")&&(this._url=this.value.substring(4)),this.mode="url")},hasValidValue:function(){if("item"===this.mode)return!0;if("layer"===this.mode)return this.selectFeature&&this.selectFeature.getSelectedLayer()?!0:!1;if("url"===this.mode)return this.urlEditor.isValid()},getValue:function(){return"url"===this.mode?"url:"+this._getUrl():"item"===this.mode?"itemID:":""},getGPValue:function(){var a=
new h,c=new t;"url"===this.mode?c.url=this._getUrl():"layer"===this.mode?c.url=this.selectFeature.getSelectedLayer()&&this.selectFeature.getSelectedLayer().url:c.itemID=this.itemIDInput;c.url||c.itemID?a.resolve(c):a.resolve(null);return a},_getUrl:function(){return this.urlEditor.isValid()?this.urlEditor.get("value"):""},_onUrlModeSelect:function(){this.mode="url";this.viewStack?this.viewStack.switchView(0):e.set(this.urlNode,"display","block")},_onItemModeSelect:function(){this.mode="item";this.viewStack?
this.viewStack.switchView(1):(e.set(this.urlNode,"display","none"),e.set(this.ImgSvclayerNode,"display","none"))},_onSelectModeClick:function(){this.mode="layer";this.viewStack?this.viewStack.switchView(2):(e.set(this.urlNode,"display","none"),e.set(this.ImgSvclayerNode,"display","block"))},_onUpload:function(){d.get(this.fileInput,"value")&&this._doUpload().then(g.hitch(this,function(a){a&&new k({message:this.nls.uploadSuccess})}),function(a){new k({message:a.message||a})})},_doUpload:function(){var a=
new h,c=d.get(this.fileInput,"value"),c=c.replace(/\\/g,"/"),c=c.substr(c.lastIndexOf("/")+1);u({url:this.config.serverInfo.url+"uploads/upload",form:this.fileForm.domNode,handleAs:"json"}).then(g.hitch(this,function(b){b.success&&(this.itemIDInput=b.item.itemID,d.set(this.fileInput,"value",""),d.set(this.uploadFileName,"innerHTML",c));a.resolve(b.success)}),function(b){a.reject(b)});return a}})});