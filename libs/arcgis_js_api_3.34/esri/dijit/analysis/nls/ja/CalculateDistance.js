// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ja/CalculateDistance",{inputLayerLabel:"\u4f4d\u7f6e\u60c5\u5831\u3068\u3057\u3066\u30e9\u30b9\u30bf\u30fc\u307e\u305f\u306f\u30d5\u30a3\u30fc\u30c1\u30e3 \u30ec\u30a4\u30e4\u30fc\u3092\u9078\u629e\u3057\u3066\u3001\u8ddd\u96e2\u3092\u8a08\u7b97",inputRaster:"\u30d0\u30ea\u30a2\u3092\u8868\u3059\u30e9\u30b9\u30bf\u30fc\u307e\u305f\u306f\u30d5\u30a3\u30fc\u30c1\u30e3 \u30ec\u30a4\u30e4\u30fc\u3092\u9078\u629e (\u30aa\u30d7\u30b7\u30e7\u30f3)",maxDistanceLabel:"\u8a08\u7b97\u3059\u308b\u6700\u5927\u8ddd\u96e2 (\u30aa\u30d7\u30b7\u30e7\u30f3)",
outputCellSize:"\u51fa\u529b\u30bb\u30eb \u30b5\u30a4\u30ba (\u30aa\u30d7\u30b7\u30e7\u30f3)",distanceMethod:"\u8ddd\u96e2\u8a08\u7b97\u306e\u65b9\u6cd5",resultDistLayerName:"\u7d50\u679c\u306e\u8ddd\u96e2\u30ec\u30a4\u30e4\u30fc\u306e\u540d\u524d",resultDirectionLayerName:"\u7d50\u679c\u306e\u65b9\u5411\u30ec\u30a4\u30e4\u30fc\u306e\u540d\u524d(\u30aa\u30d7\u30b7\u30e7\u30f3)",resultAllocationLayerName:"\u7d50\u679c\u306e\u30a2\u30ed\u30b1\u30fc\u30b7\u30e7\u30f3 \u30ec\u30a4\u30e4\u30fc\u306e\u540d\u524d(\u30aa\u30d7\u30b7\u30e7\u30f3)",
outputBackDirectionName:"\u7d50\u679c\u306e\u30d0\u30c3\u30af\u65b9\u5411\u30ec\u30a4\u30e4\u30fc\u306e\u540d\u524d (\u30aa\u30d7\u30b7\u30e7\u30f3)",outputLayerName:"${layername} \u306e\u8a08\u7b97\u3055\u308c\u305f\u8ddd\u96e2",allocationFieldLabel:"\u5272\u308a\u5f53\u3066\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u9078\u629e (\u30aa\u30d7\u30b7\u30e7\u30f3)",itemDescription:"${layerName} \u306b\u5bfe\u3057\u3066 [\u8ddd\u96e2\u306e\u8a08\u7b97] \u3092\u5b9f\u884c\u3057\u3066\u751f\u6210\u3055\u308c\u305f\u30d5\u30a3\u30fc\u30c1\u30e3 \u30ec\u30a4\u30e4\u30fc\u3002 ",
itemTags:"\u89e3\u6790\u7d50\u679c\u3001\u8ddd\u96e2\u306e\u8a08\u7b97\u3001${layername}${fieldname}",itemSnippet:"[\u8ddd\u96e2\u306e\u8a08\u7b97] \u304b\u3089\u751f\u6210\u3055\u308c\u305f\u30d5\u30a3\u30fc\u30c1\u30e3 \u30ec\u30a4\u30e4\u30fc",planar:"\u5e73\u9762",geodesic:"\u6e2c\u5730\u7dda",selectDistance:"-- \u9078\u629e --"});