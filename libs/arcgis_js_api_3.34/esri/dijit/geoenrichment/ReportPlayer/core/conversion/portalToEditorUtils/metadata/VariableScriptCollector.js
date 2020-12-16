// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/metadata/VariableScriptCollector",["esri/dijit/geoenrichment/utils/JsonXmlConverter","../variables/VariableUtil"],function(f,h){var g={getObjects:function(a,e){e=g._getVariableInfo(a,e);a=g._getScriptObjects(a,e.fieldNameToVariableCache);return{variables:e.variables,variableObjects:e.variableObjects,scriptObjects:a}},_getVariableInfo:function(a,e){var c=[];f.queryJson(a,e?/^(RawFields|Fields)$/:"Fields").forEach(function(b){c=
c.concat(f.queryJson(b,/^(Field|PortalField)$/))});var k=[],d=[],l={};c.forEach(function(b){k.push(b.attributes.MapTo);if(b=h.fieldTagToVariable(b,a.attributes.Name))l[b.fieldName]=b,d.push(b)});return{variables:k,variableObjects:d,fieldNameToVariableCache:l}},_getScriptObjects:function(a,e){var c=f.queryJson(a,"Scripts"===a.name?"Fields":"CalculatedFields")[0],c=c&&f.queryJson(c,"Script")||[];"Scripts"===a.name&&(c=c.filter(function(a){return!("STORE_ID"===a.attributes.Name||"AREA_ID"===a.attributes.Name)}));
return c.map(function(c){var d=h.scriptTagToVariable(c,a.attributes.Name);d.usedFields&&(d.usedMapTos=[],d.usedFields.forEach(function(a){var b=e[a];b?b.usedMapTos?d.usedMapTos=d.usedMapTos.concat(b.usedMapTos):d.usedMapTos.push(b.fullName):console.log("Error parsing used fields for "+a)}),e[d.fieldName]=d);return d})}};return g});