// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmi/acquisitionInformation/templates/MI_PlatformPass.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject" data-dojo-props\x3d"target:\'gmi:MI_PlatformPass\',minOccurs:0"\x3e\r\n\r\n    \x3c!-- \r\n      http://www.isotc211.org/2005/gmi/acquisitionInformation.xsd\r\n      \x3cxs:sequence\x3e\r\n        \x3cxs:element name\x3d"identifier" type\x3d"gmd:MD_Identifier_PropertyType"/\x3e\r\n        \x3cxs:element name\x3d"extent" type\x3d"gss:GM_Object_PropertyType" minOccurs\x3d"0"/\x3e\r\n        \x3cxs:element name\x3d"relatedEvent" type\x3d"gmi:MI_Event_PropertyType" minOccurs\x3d"0" maxOccurs\x3d"unbounded"/\x3e\r\n      \x3c/xs:sequence\x3e\r\n     --\x3e\r\n     \r\n    \x3c!-- identifier --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n      data-dojo-props\x3d"target:\'gmi:identifier\',label:\'${i18nIso.MI_PlatformPass.identifier}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/identification/SimpleMD_Identifier"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- extent --\x3e\r\n    \r\n    \x3c!-- relatedEvent (allow MI_Event references) --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n      data-dojo-props\x3d"target:\'gmi:relatedEvent\',minOccurs:0,maxOccurs:\'unbounded\',\r\n        label:\'${i18nIso.MI_PlatformPass.relatedEventReference}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute" data-dojo-props\x3d"target:\'xlink:href\',showHeader:false"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n          \r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmi/acquisitionInformation/MI_PlatformPass","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Attribute ../../../../form/iso/AbstractObject ../../../../form/iso/ObjectReference ../../gmd/identification/SimpleMD_Identifier dojo/text!./templates/MI_PlatformPass.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmi.acquisitionInformation.MI_PlatformPass",
a,f);return a});