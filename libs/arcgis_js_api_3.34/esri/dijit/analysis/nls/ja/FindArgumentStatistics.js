// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ja/FindArgumentStatistics",{toolDefine:"\u5f15\u6570\u306e\u7d71\u8a08\u3092\u691c\u7d22",outputLayerName:"${layername}_argumentStatistics",dimensionLabel:"\u7d71\u8a08\u3092\u62bd\u51fa\u3059\u308b\u30c7\u30a3\u30e1\u30f3\u30b7\u30e7\u30f3\u3092\u9078\u629e",variablesLabel:"\u89e3\u6790\u3059\u308b\u5909\u6570\u3092\u9078\u629e",variablesListLabel:"\u5909\u6570 [\u30c7\u30a3\u30e1\u30f3\u30b7\u30e7\u30f3\u60c5\u5831] (\u8aac\u660e)",statisticsTypeLabel:"\u7d71\u8a08\u60c5\u5831\u306e\u7a2e\u985e\u3092\u9078\u629e",
multipleOccurrenceValueLabel:"\u6700\u5927\u51fa\u73fe\u5024\u3092\u6307\u5b9a (\u30aa\u30d7\u30b7\u30e7\u30f3)",minValueLabel:"\u6700\u5c0f\u5024\u3092\u6307\u5b9a",maxValueLabel:"\u6700\u5927\u5024\u3092\u6307\u5b9a",argumentMinLabel:"\u6700\u5c0f\u5024\u306e\u5f15\u6570",argumentMaxLabel:"\u6700\u5927\u5024\u306e\u5f15\u6570",argumentMedianLabel:"\u4e2d\u592e\u5024\u306e\u5f15\u6570",durationLabel:"\u671f\u9593",dimensionDefinitionLabel:"\u30c7\u30a3\u30e1\u30f3\u30b7\u30e7\u30f3\u5b9a\u7fa9\u3092\u9078\u629e",
intervalKeywordLabel:"\u9593\u9694\u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u9078\u629e",all:"\u3059\u3079\u3066",intervalKeyword:"\u9593\u9694\u30ad\u30fc\u30ef\u30fc\u30c9",hourly:"\u6bce\u6642\u9593",daily:"\u6bce\u65e5",weekly:"\u6bce\u9031",monthly:"\u6bce\u6708",quarterly:"\u56db\u534a\u671f",yearly:"\u6bce\u5e74",recurringDaily:"\u6bce\u65e5\u7e70\u308a\u8fd4\u3057",recurringWeekly:"\u6bce\u9031\u7e70\u308a\u8fd4\u3057",recurringMonthly:"\u6bce\u6708\u7e70\u308a\u8fd4\u3057",recurringQuarterly:"\u6bce\u56db\u534a\u671f\u7e70\u308a\u8fd4\u3057",
ignoreNodataLabel:"\u8a08\u7b97\u6642\u306b\u6b20\u640d\u5024\u3092\u7121\u8996",ignore:"\u7121\u8996",analysisLayerLabel:"\u89e3\u6790\u3059\u308b\u591a\u6b21\u5143\u307e\u305f\u306f\u30de\u30eb\u30c1\u30d0\u30f3\u30c9\u753b\u50cf\u30ec\u30a4\u30e4\u30fc\u3092\u9078\u629e",itemDescription:"[\u5f15\u6570\u306e\u7d71\u8a08\u3092\u691c\u7d22] \u304b\u3089\u751f\u6210\u3055\u308c\u305f\u5206\u6790\u30a4\u30e1\u30fc\u30b8 \u30b5\u30fc\u30d3\u30b9",itemTags:"\u30e9\u30b9\u30bf\u30fc\u89e3\u6790\u7d50\u679c\u3001\u5f15\u6570\u306e\u7d71\u8a08\u3092\u691c\u7d22\u3001${layername}",
itemSnippet:"[\u5f15\u6570\u306e\u7d71\u8a08\u3092\u691c\u7d22] \u304b\u3089\u751f\u6210\u3055\u308c\u305f\u5206\u6790\u30a4\u30e1\u30fc\u30b8 \u30b5\u30fc\u30d3\u30b9"});