// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/form/iso/gemet/GemetConceptTool","dojo/_base/declare dojo/_base/lang dojo/has ../../tools/ClickableTool ../../../base/etc/docUtil ./ConceptDialog ../../../../../kernel".split(" "),function(c,d,e,f,g,h,k){c=c([f],{postCreate:function(){this.inherited(arguments)},startup:function(){if(!this._started){var a=g.findGxeContext(this);a&&a.gemetUrl&&a.gemetConceptThesaurus||(this.domNode.style.display="none")}},whenToolClicked:function(a,b){b&&b.parentXNode&&(a=b.getInputValue(),
(new h({gxeDocument:b.parentXNode.gxeDocument,initialValue:a,onSelect:d.hitch(this,function(a){b.setInputValue(a)})})).show())}});e("extend-esri")&&d.setObject("dijit.metadata.form.iso.gemet.GemetConceptTool",c,k);return c});