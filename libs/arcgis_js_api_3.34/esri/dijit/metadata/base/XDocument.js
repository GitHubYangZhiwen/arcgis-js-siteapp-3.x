// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/base/XDocument","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-class dojo/dom-construct dojo/has ./xml/XmlGenerator ../../../kernel".split(" "),function(c,d,l,e,f,g,h,k){c=c(null,{_hasNamespaces:null,datestamp:null,documentType:null,gxeContext:null,isViewOnly:!1,originalTitle:null,rootDescriptor:null,rootElement:null,ArcGISFormat:null,ArcGISProfile:null,ArcGISStyle:null,isAgsItemDescription:!1,isAgsFGDC:!1,isAgsISO19139:!1,isAgsINSPIRE:!1,isAgsNAP:!1,constructor:function(a){this.datestamp=
new Date;d.mixin(this,a)},afterInitializeAttribute:function(a){this.documentType&&this.documentType.afterInitializeAttribute(this,a)},afterInitializeElement:function(a){this.documentType&&this.documentType.afterInitializeElement(this,a)},beforeInitializeAttribute:function(a){this.documentType&&this.documentType.beforeInitializeAttribute(this,a)},beforeInitializeElement:function(a){this.documentType&&this.documentType.beforeInitializeElement(this,a)},generateXml:function(a,b){return(new h({})).generate(this,
this.rootElement,a,b)},getNamespaces:function(){return this.documentType?this.documentType.getNamespaces():null},hasNamespaces:function(){var a,b=!1;null===this._hasNamespaces&&(a=this.getNamespaces(),null!==a&&0<a.length&&(b=!0),this._hasNamespaces=b);return this._hasNamespaces},initialize:function(a,b,c){this.documentType=a;this.rootDescriptor=a.newRootDescriptor(this,c);this.rootDescriptor._isGxeRootDescriptor=!0;this.rootDescriptor.gxeDocument=this;b&&(f.place(this.rootDescriptor.domNode,b,"replace"),
this.rootDescriptor.startup(),this.rootElement&&this.rootElement.elementHeader&&e.add(this.rootElement.elementHeader.domNode,"gxeRootLabel"))}});g("extend-esri")&&d.setObject("dijit.metadata.base.XDocument",c,k);return c});