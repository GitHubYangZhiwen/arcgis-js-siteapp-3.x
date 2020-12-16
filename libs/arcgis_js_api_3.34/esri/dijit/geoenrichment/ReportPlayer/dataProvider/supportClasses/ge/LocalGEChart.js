// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/ge/LocalGEChart",["dojo/_base/declare","dojo/_base/lang","./LocalGEBase","../data/AreaDataUtil"],function(f,g,h,k){return f(h,{_fieldNameToPointCache:null,constructor:function(b,e,a,c,d,f){this._fieldNameToPointCache={};b[0]&&b[0].points.forEach(function(a){a.fieldInfo&&(this._fieldNameToPointCache[a.fieldInfo.name]=a)},this);(this._skipThisArea=c)?(a=k.combineAreaDataObjectCalculators(a,e,{removeDuplicates:!0}),c=a.thisAreas.map(function(a,
b){a=g.mixin({},a);a.StdGeographyName=d[b];a.isThisArea=!0;return a}),b={},b[e]={data:c.shift(),comparisonLevels:c.concat(a.comparisonLevels)}):b=a[f||0];this._initGE(null,b,e)},_createField:function(b,e){var a=this.inherited(arguments),c=this._fieldNameToPointCache[b];if(c&&c.fieldInfo){var d=c.fieldInfo;a.alias=c.label||d.alias;a.decimals="number"===typeof d.decimals?d.decimals:-1;a.units=d.showPercent?"pct":d.showCurrency?"currency":a.units;a.type=d.type||a.type}else a.noVariableField=!0;return a},
_filterAttributeField:function(b){return!b.noVariableField}})});