// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/tasks/RelationshipQuery",["dojo/_base/declare","dojo/_base/lang","dojo/_base/json","dojo/has","../kernel"],function(a,f,g,h,k){a=a(null,{declaredClass:"esri.tasks.RelationshipQuery",definitionExpression:"",relationshipId:null,returnGeometry:!1,objectIds:null,outSpatialReference:null,outFields:null,orderByFields:null,toJson:function(){var b={definitionExpression:this.definitionExpression,relationshipId:this.relationshipId,returnGeometry:this.returnGeometry,maxAllowableOffset:this.maxAllowableOffset,
geometryPrecision:this.geometryPrecision},a=this.objectIds,d=this.outFields,c=this.outSpatialReference,e=this.orderByFields;a&&(b.objectIds=a.join(","));d&&(b.outFields=d.join(","));c&&(b.outSR=c.wkid||g.toJson(c.toJson()));e&&(b.orderByFields=e.join(","));b._ts=this._ts;return b}});h("extend-esri")&&f.setObject("tasks.RelationshipQuery",a,k);return a});