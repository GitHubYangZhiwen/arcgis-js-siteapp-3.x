// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/attachments/AttributesUtil",["dojo/_base/lang","esri/layers/CodedValueDomain","esri/dijit/geoenrichment/utils/DateUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],function(e,f,g,h){var c={composeAttributesFromFieldInfos:function(a,b){return a&&a.filter(function(a){return a.visible}).map(function(a){var k=a.fieldName,d=a.label,c=a.format&&a.format.places,e=a.format&&a.format.digitSeparator,f=a.format&&a.format.dateFormat,g=
b[a.fieldName];a=(a=a.format)&&a.dateFormat?"esriFieldTypeDate":a&&void 0!==a.places?0<a.places?"esriFieldTypeDouble":"esriFieldTypeInteger":"esriFieldTypeString";return{name:k,alias:d,places:c,digitSeparator:e,dateFormat:f,value:g,type:a,domain:null,length:void 0}})},formatAttributeValue:function(a,b){b=b||{};var d=b.hasOwnProperty("unavailableDataValue")?b.unavailableDataValue:"";if(!a||null===a.value||void 0===a.value)return d;if(!b.skipFormattedValue&&a.formattedValue&&a.formattedValue!==d)return a.formattedValue;
var c=a.domain&&"codedValue"===a.domain.type?new f(a.domain):null;c?(b=c.getName(a.value))||(b=a.value+""):"esriFieldTypeString"===a.type?b=a.value:"esriFieldTypeDate"===a.type?b=g.formatDateShort(a.value):(b=b.format,b=h.formatNumber(a.value,{places:b&&void 0!==b.decimals?b.decimals:a.places,noSeparator:b&&void 0!==b.useThousandsSeparator?!b.useThousandsSeparator:!1===a.digitSeparator,preserveTrailingZeroes:!0}));return null===b||void 0===b?d:b},formatAttributeValueForStudyArea:function(a){var b;
a&&null!==a.value&&void 0!==a.value||(b=!0);b||(b=a.domain&&"codedValue"===a.domain.type||"esriFieldTypeDate"===a.type);return b?c.formatAttributeValue(a):a.value},getAttributeTypeForStudyArea:function(a){return"esriFieldTypeDate"===a.type?"esriFieldTypeString":a.type},attributeToJson:function(a){return{name:a.name,alias:a.alias,type:a.type,value:a.value,domain:a.domain&&(a.domain.toJson?a.domain.toJson():e.clone(a.domain)),places:a.places,digitSeparator:a.digitSeparator,dateFormat:a.dateFormat,length:a.length}},
attributeFromJson:function(a){return{name:a.name,alias:a.alias,type:a.type,value:a.value,domain:a.domain,places:a.places,digitSeparator:a.digitSeparator,dateFormat:a.dateFormat,length:a.length}}};return c});