// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/accessorSupport/extensions/serializableProperty/shorthands",["require","exports"],function(e,b){function c(a){"boolean"===typeof a.read?a.read={enabled:a.read}:"function"===typeof a.read?a.read={enabled:!0,reader:a.read}:a.read&&"object"===typeof a.read&&void 0===a.read.enabled&&(a.read.enabled=!0)}function d(a){"boolean"===typeof a.write?a.write={enabled:a.write}:"function"===typeof a.write?a.write={enabled:!0,writer:a.write}:a.write&&"object"===typeof a.write&&
void 0===a.write.enabled&&(a.write.enabled=!0)}Object.defineProperty(b,"__esModule",{value:!0});b.process=function(a){a.json||(a.json={});c(a.json);d(a.json);if(a.json.origins)for(var b in a.json.origins)c(a.json.origins[b]),d(a.json.origins[b]);return!0}});