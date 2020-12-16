// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmd/identification/templates/DataIdentification.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n    data-dojo-props\x3d"target:\'gmd:identificationInfo\',\r\n      label:\'${i18nIso.MD_Metadata.identificationInfo}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n      data-dojo-props\x3d"target:\'gmd:MD_DataIdentification\',minOccurs:0"\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n          \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/citation/ResourceCitation"\r\n          data-dojo-props\x3d"label:\'${i18nIso.identificationSection.citation}\'"\x3e\x3c/div\x3e\r\n          \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/identification/ResourceDescription"\r\n          data-dojo-props\x3d"label:\'${i18nIso.identificationSection.description}\'"\x3e\x3c/div\x3e\r\n          \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/citation/ResourceContact"\r\n          data-dojo-props\x3d"label:\'${i18nIso.identificationSection.contact}\'"\x3e\x3c/div\x3e\r\n          \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/identification/ResourceThumbnail"\r\n          data-dojo-props\x3d"label:\'${i18nIso.identificationSection.thumbnail}\'"\x3e\x3c/div\x3e\r\n          \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/identification/ResourceKeywords"\r\n          data-dojo-props\x3d"label:\'${i18nIso.identificationSection.keywords}\'"\x3e\x3c/div\x3e\r\n          \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/constraints/ResourceConstraints"\r\n          data-dojo-props\x3d"label:\'${i18nIso.identificationSection.constraints}\'"\x3e\x3c/div\x3e\r\n          \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/identification/DataResourceTab"\r\n          data-dojo-props\x3d"label:\'${i18nIso.identificationSection.resource}\'"\x3e\x3c/div\x3e\r\n                          \r\n      \x3c/div\x3e\r\n      \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmd/identification/DataIdentification","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Tabs ../../../../form/iso/AbstractObject ../../../../form/iso/ObjectReference ../citation/ResourceCitation ../citation/ResourceContact ../constraints/ResourceConstraints ./ResourceDescription ./ResourceThumbnail ./ResourceKeywords ./DataResourceTab dojo/text!./templates/DataIdentification.html ../../../../../../kernel".split(" "),function(a,
b,c,d,g,h,k,l,m,n,p,q,r,t,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmd.identification.DataIdentification",a,f);return a});