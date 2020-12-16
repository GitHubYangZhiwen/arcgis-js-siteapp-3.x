// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/metadata/map/RendererToMetadataConverter",["dojo/_base/lang","esri/dijit/geoenrichment/utils/JsonXmlTypedConverter","esri/dijit/geoenrichment/utils/JsonXmlConverter"],function(e,b,c){var d={convertRendererJson:function(a){switch(a.type){case "simple":"esriPMS"===a.symbol.type&&(a=e.clone(a),delete a.symbol.url)}return c.parseXml(b.parseJson(a,{rootName:"Renderer"}))},convertLabelRendererJson:function(a){a=a.uniqueValueInfos.map(function(a){return{labelExpressionInfo:{expression:"$feature.StdGeographyName"},
where:"StdGeographyLevel\x3d'"+a.value+"'",labelPlacement:"esriServerPolygonPlacementAlwaysHorizontal",symbol:a.symbol}});return d.convertLabelingInfo(a)},convertLabelingInfo:function(a){return c.parseXml(b.parseJson(a,{rootName:"LabelingInfo"}))}};return d});