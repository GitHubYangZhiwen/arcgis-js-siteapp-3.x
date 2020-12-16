// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/form/GeoExtentTool","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/query dijit/registry dojo/dom-construct dojo/has ../../../../../kernel ../../../form/tools/ClickableTool ../../../form/tools/GeoExtentDialog ../../../form/tools/GeoExtentView ../../../form/tools/geoExtentUtil".split(" "),function(b,l,w,m,n,p,q,r,t,u,v,f){b=b([t],{postCreate:function(){this.inherited(arguments)},startup:function(){if(!this._started){var a=this.findInputWidget();a&&
a.parentXNode&&a.parentXNode.gxeDocument&&a.parentXNode.gxeDocument.isViewOnly&&setTimeout(l.hitch(this,function(){this._handleRequest(a,!1)}),2E3)}},whenToolClicked:function(a,c){this._handleRequest(c,!0)},_findInputWgt:function(a,c){return(a=m("[data-gxe-path\x3d'"+a+"']",c))&&1===a.length&&(a=n.byNode(a[0]))?a.inputWidget:null},_findViewSection:function(a){return(a=m(".gxeGeoExtentSection .gxeGeoExtentViewSection",a))&&1===a.length?a[0]:null},_handleRequest:function(a,c){if(a&&a.parentXNode&&(a=
a.parentXNode.getParentElement())){var d=a.gxePath+"/",e=a.domNode,b=this._findInputWgt(d+"westBL",e),g=this._findInputWgt(d+"eastBL",e),h=this._findInputWgt(d+"northBL",e),k=this._findInputWgt(d+"southBL",e);b&&g&&h&&k&&(d=null,a.gxeDocument&&a.gxeDocument.isViewOnly?c||(d=this._findViewSection(e))&&new v({gxeDocument:a.gxeDocument,xmin:b.getInputValue(),ymin:k.getInputValue(),xmax:g.getInputValue(),ymax:h.getInputValue()},p.create("div",{},d)):c&&(c=new u({gxeDocument:a.gxeDocument,xmin:b.getInputValue(),
ymin:k.getInputValue(),xmax:g.getInputValue(),ymax:h.getInputValue(),onChange:l.hitch(this,function(a){b.setInputValue(f.formatCoordinate(a.xmin));g.setInputValue(f.formatCoordinate(a.xmax));h.setInputValue(f.formatCoordinate(a.ymax));k.setInputValue(f.formatCoordinate(a.ymin))})}),c.show()))}}});q("extend-esri")&&l.setObject("dijit.metadata.types.arcgis.form.GeoExtentTool",b,r);return b});