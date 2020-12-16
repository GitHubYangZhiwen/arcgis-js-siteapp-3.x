// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ja/Sample",{toolDefine:"\u30b5\u30f3\u30d7\u30eb",outputLayerName:"${layername}_sampled",locationLayer:"\u4f4d\u7f6e\u30ec\u30a4\u30e4\u30fc\u306e\u9078\u629e",uniqueIDField:"\u4e00\u610f\u306e ID \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u6307\u5b9a",acquisitionDefinition:"\u4f4d\u7f6e\u30c7\u30fc\u30bf\u306e\u53d6\u5f97\u60c5\u5831\u3092\u6307\u5b9a (\u30aa\u30d7\u30b7\u30e7\u30f3)",acquisitionDimension:"\u30c7\u30a3\u30e1\u30f3\u30b7\u30e7\u30f3\u3068\u53d6\u5f97\u60c5\u5831\u306e\u5f62\u5f0f\u3092\u6307\u5b9a (\u30aa\u30d7\u30b7\u30e7\u30f3)",
buffer:"\u30d0\u30c3\u30d5\u30a1\u30fc\u8ddd\u96e2\u30d5\u30a3\u30fc\u30eb\u30c9\u307e\u305f\u306f\u5024\u3092\u6307\u5b9a",formatOptions:"\u66f8\u5f0f\u8a2d\u5b9a\u30aa\u30d7\u30b7\u30e7\u30f3",dimensionField:"\u30c7\u30a3\u30e1\u30f3\u30b7\u30e7\u30f3 \u30d5\u30a3\u30fc\u30eb\u30c9\u307e\u305f\u306f\u5024",dimensionFieldOrValue:"\u30c7\u30a3\u30e1\u30f3\u30b7\u30e7\u30f3 \u30d5\u30a3\u30fc\u30eb\u30c9\u307e\u305f\u306f\u5024",relativeDaysBefore:"\u524d\u306e\u76f8\u5bfe\u5024",relativeDaysAfter:"\u5f8c\u306e\u76f8\u5bfe\u5024",
singleFieldOrValue:"1 \u3064\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u307e\u305f\u306f\u5024",singleFieldWithRelativeValues:"\u76f8\u5bfe\u5024\u3092\u542b\u3080 1 \u3064\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u307e\u305f\u306f\u5024",startEndFieldsOrValues:"\u958b\u59cb\u304a\u3088\u3073\u7d42\u4e86\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u307e\u305f\u306f\u5024",startFieldOrValue:"\u30d5\u30a3\u30fc\u30eb\u30c9\u307e\u305f\u306f\u5024\u306e\u958b\u59cb",endFieldOrValue:"\u30d5\u30a3\u30fc\u30eb\u30c9\u307e\u305f\u306f\u5024\u306e\u7d42\u4e86",
statisticsType:"\u7d71\u8a08\u60c5\u5831\u306e\u7a2e\u985e\u3092\u9078\u629e",percentile:"\u30d1\u30fc\u30bb\u30f3\u30bf\u30a4\u30eb",percentileValue:"\u30d1\u30fc\u30bb\u30f3\u30bf\u30a4\u30eb\u5024",resample:"\u30ea\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u624b\u6cd5\u3092\u6307\u5b9a",nearest:"\u6700\u8fd1\u96a3\u5185\u633f\u6cd5",bilinear:"\u5171\u4e00\u6b21\u5185\u633f\u6cd5",cubic:"\u4e09\u6b21\u305f\u305f\u307f\u8fbc\u307f\u5185\u633f\u6cd5",outputLayout:"\u51fa\u529b\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u6307\u5b9a",
layoutRow:"\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3055\u308c\u305f\u5024\u306f\u884c\u306b\u8868\u793a\u3055\u308c\u307e\u3059",layoutColumn:"\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3055\u308c\u305f\u5024\u306f\u5217\u306b\u8868\u793a\u3055\u308c\u307e\u3059",outputType:"\u51fa\u529b\u30bf\u30a4\u30d7\u3092\u6307\u5b9a",features:"\u30d5\u30a3\u30fc\u30c1\u30e3",table:"\u30c6\u30fc\u30d6\u30eb",removeLayer:"\u30ec\u30a4\u30e4\u30fc\u306e\u524a\u9664",dimensionError:"\u30c7\u30a3\u30e1\u30f3\u30b7\u30e7\u30f3\u60c5\u5831\u3092\u8aad\u307f\u8fbc\u3081\u307e\u305b\u3093\u3002 \u3059\u3079\u3066\u306e\u5909\u6570\u306e\u30c7\u30a3\u30e1\u30f3\u30b7\u30e7\u30f3\u306f\u540c\u3058\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059",
analysisLayerLabel:"\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3059\u308b\u753b\u50cf\u30ec\u30a4\u30e4\u30fc\u3092\u9078\u629e",itemDescription:"\u30b5\u30f3\u30d7\u30eb\u304b\u3089\u751f\u6210\u3055\u308c\u305f\u5206\u6790\u30a4\u30e1\u30fc\u30b8 \u30b5\u30fc\u30d3\u30b9",itemTags:"\u30e9\u30b9\u30bf\u30fc\u5206\u6790\u7d50\u679c\u3001\u30b5\u30f3\u30d7\u30eb\u3001 ${layername}",itemSnippet:"\u30b5\u30f3\u30d7\u30eb\u304b\u3089\u751f\u6210\u3055\u308c\u305f\u5206\u6790\u30a4\u30e1\u30fc\u30b8 \u30b5\u30fc\u30d3\u30b9"});