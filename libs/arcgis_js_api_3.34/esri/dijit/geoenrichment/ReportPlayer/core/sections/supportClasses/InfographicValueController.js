// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/supportClasses/InfographicValueController",["dojo/_base/declare","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer","../../supportClasses/conditionalStyling/ConditionalStyleUtil"],function(p,n,h){function q(a){var b=-Infinity;a.forEach(function(a){b=Math.max(b,a)});return b}return p(null,{_sections:null,_variableTables:null,constructor:function(){this._sections=[]},_samplePercentValues:[52,30,18,90,70,100],setVariableTables:function(a){this._variableTables=
a},addSection:function(a){this._sections.push(a)},getValueInfo:function(a,b){b=b||{};var e=!a.viewModel.dynamicReportInfo;a=this._sections.indexOf(a);var c=this._variableTables[a],d=c.variable.fieldInfo;b.fieldInfo=b.fieldInfo||d;d=!1;c.description&&c.description.fieldInfo&&c.description.fieldInfo.templateName===b.fieldInfo.templateName&&(d=!0);c=this._getValueAt(a,b,a,e);if(d||c.isStandAlone)return this._enrichWithConditionalColor(c.value,b);d=c.value.value;if(c.shapeJson.useRange){a=c.shapeJson.rangeMin;
c=c.shapeJson.rangeMax;if("number"!==typeof a||"number"!==typeof c||c<=a)return this._enrichWithConditionalColor({value:0,percent:0},b);e&&(d=a+.62123*(c-a));return this._enrichWithConditionalColor({value:d,percent:d,normalizedValue:(d-a)/(c-a)},b)}var f=[];this._getValues(b,a,e).forEach(function(a){a.shapeJson&&!a.shapeJson.useRange&&(a.shapeJson.showAsBar||a.shapeJson.scaleByValue)&&f.push(a.value.value)});c=q(f);return this._enrichWithConditionalColor({value:d,percent:d,normalizedValue:d/c},b)},
_enrichWithConditionalColor:function(a,b){null!=a.value&&b.fieldInfo.triggerJson&&(a.conditionalStyling=h.getConditionalStyle(a.value,b.fieldInfo.triggerJson));return a},_getValues:function(a,b,e){return this._variableTables.map(function(c,d){return this._getValueAt(d,a,b,e)},this)},_getValueAt:function(a,b,e,c){return c?this._getSampleValueAt(a,b,e):this._getRealValueAt(a,b,e)},_getRealValueAt:function(a,b,e){var c=this._variableTables[a],d=this._sections[0],f=a===e?b.fieldInfo:c.variable.fieldInfo,
k="number"===typeof b.currentFeatureIndex?b.currentFeatureIndex:d.currentFeatureIndex,g=b.currentFeatureAttributes||d.currentFeatureAttributes,l=c.shape&&c.shape.shapeJson,h=!l||!l.showAsBar&&!l.scaleByValue,m=void 0;a===e&&b.sectionPreviewValueFunction&&(a=b.sectionPreviewValueFunction(b))&&(m=a);void 0===m&&(m={value:n.getFieldDataValue(f,{fieldData:d.viewModel.dynamicReportInfo.fieldData,featureIndex:k,featureAttributes:g})});return{value:m,variable:c.variable,shapeJson:l,isStandAlone:h}},_getSampleValueAt:function(a,
b,e){var c=this._variableTables[a],d=a===e?b.fieldInfo:c.variable.fieldInfo,f=c.shape&&c.shape.shapeJson,k=!f||!f.showAsBar&&!f.scaleByValue,g=void 0;d.triggerJson?(e=h.getStatistics(d.triggerJson))&&(g={value:e.min+(e.max-e.min)/2}):a===e&&b.sectionPreviewValueFunction&&(e=b.sectionPreviewValueFunction(b))&&(g=e);void 0===g&&(g=k?n.renderFieldInfoInTableCell(b.fieldInfo,{previewValues:!0}):{value:this._samplePercentValues[a]||this._samplePercentValues[0]});return{value:g,variable:c.variable,shapeJson:f,
isStandAlone:k}}})});