// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmd/constraints/templates/ResourceConstraints.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n    data-dojo-props\x3d"target:\'gmd:resourceConstraints\',minOccurs:0,maxOccurs:\'unbounded\',\r\n      label:\'${i18nIso.AbstractMD_Identification.resourceConstraints}\'"\x3e\r\n      \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/ElementChoice"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nBase.general.none}\'"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/constraints/MD_Constraints"\r\n        data-dojo-props\x3d"label:\'${i18nIso.MD_Constraints.caption}\'"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/constraints/MD_LegalConstraints"\r\n        data-dojo-props\x3d"label:\'${i18nIso.MD_LegalConstraints.caption}\'"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/constraints/MD_SecurityConstraints"\r\n        data-dojo-props\x3d"label:\'${i18nIso.MD_SecurityConstraints.caption}\'"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n  \x3c/div\x3e\r\n\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmd/constraints/ResourceConstraints","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/ElementChoice ../../../../form/Section ../../../../form/iso/ObjectReference ./MD_Constraints ./MD_LegalConstraints ./MD_SecurityConstraints dojo/text!./templates/ResourceConstraints.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmd.constraints.ResourceConstraints",
a,f);return a});