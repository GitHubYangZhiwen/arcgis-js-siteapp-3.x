// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/resource/templates/ResourceLanguage.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \r\n  \x3c!-- language and country --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'dataLang\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.resource.dataLang}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/common/LanguageCode"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/common/CountryCode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \r\n  \x3c!-- character set --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'dataChar\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.codelist.MD_CharacterSetCode}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/common/CharSetCd"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/resource/ResourceLanguage","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/ResourceLanguage.html ../common/LanguageCode ../common/CountryCode ../common/CharSetCd".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.resource.ResourceLanguage",a,d);return a});