// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ja/DetermineOptimumTravelCostNetwork",{inputLayerLabel:"\u4f4d\u7f6e\u60c5\u5831\u3068\u3057\u3066\u3001\u30e9\u30b9\u30bf\u30fc\u307e\u305f\u306f\u30d5\u30a3\u30fc\u30c1\u30e3\u30ec\u30a4\u30e4\u30fc\u3092\u9078\u629e\u3057\u3066\u3001\u533a\u9593\u306e\u79fb\u52d5\u7d4c\u8def\u3092\u6c7a\u5b9a",inputCostRasterLabel:"\u79fb\u52d5\u30b3\u30b9\u30c8 \u30e9\u30b9\u30bf\u30fc \u30ec\u30a4\u30e4\u30fc\u306e\u9078\u629e",outputOptimumNetworkName:"\u7d50\u679c\u306e\u6700\u9069\u7d4c\u8def\u30dd\u30ea\u30e9\u30a4\u30f3 \u30ec\u30a4\u30e4\u30fc\u306e\u540d\u524d",
outputNeighborNetworkName:"\u7d50\u679c\u306e\u96a3\u63a5\u7d4c\u8def\u30dd\u30ea\u30e9\u30a4\u30f3 \u30ec\u30a4\u30e4\u30fc\u306e\u540d\u524d",outputLayerName:"${layername} \u306e\u6700\u9069\u79fb\u52d5\u30b3\u30b9\u30c8\u306e\u6c7a\u5b9a",itemDescription:"${layerName} \u306b\u5bfe\u3057\u3066 [\u6700\u9069\u79fb\u52d5\u30b3\u30b9\u30c8 \u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u6c7a\u5b9a] \u3092\u5b9f\u884c\u3057\u3066\u751f\u6210\u3055\u308c\u305f\u30d5\u30a3\u30fc\u30c1\u30e3 \u30ec\u30a4\u30e4\u30fc\u3002 ",
itemTags:"\u89e3\u6790\u7d50\u679c\u3001\u6700\u9069\u79fb\u52d5\u30b3\u30b9\u30c8 \u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u6c7a\u5b9a\u3001${layername} ${fieldname}",itemSnippet:"[\u6700\u9069\u79fb\u52d5\u30b3\u30b9\u30c8 \u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u6c7a\u5b9a] \u304b\u3089\u751f\u6210\u3055\u308c\u305f\u30d5\u30a3\u30fc\u30c1\u30e3 \u30ec\u30a4\u30e4\u30fc\u3002"});