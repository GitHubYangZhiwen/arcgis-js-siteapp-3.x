// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/tasks/datareviewer/SessionOptions",["dojo/_base/declare","dojo/json","dojo/has","dojo/_base/lang","../../kernel"],function(a,b,c,e,f){a=a(null,{declaredClass:"esri.tasks.datareviewer.SessionOptions",userName:null,versionName:null,duplicateFilter:null,storeGeometry:!1,constructor:function(a,d,b,c){this.userName=a;void 0!==d&&(this.versionName=d);this.duplicateFilter=b;this.storeGeometry=c},toJsonSessionOptions:function(){return b.stringify({userName:this.userName,versionName:this.versionName,
duplicateFilter:this.duplicateFilter,storeGeometry:this.storeGeometry})}});c("extend-esri")&&e.setObject("tasks.datareviewer.SessionOptions",a,f);return a});