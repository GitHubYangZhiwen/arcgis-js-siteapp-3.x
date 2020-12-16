// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/el/Sample",{toolDefine:"\u0394\u03b5\u03af\u03b3\u03bc\u03b1",outputLayerName:"${layername}_\u03b4\u03b5\u03b9\u03b3\u03bc\u03b1\u03c4\u03bf\u03bb\u03b7\u03c0\u03c4\u03bf\u03cd\u03bc\u03b5\u03bd\u03b5\u03c2 \u03c4\u03b9\u03bc\u03ad\u03c2",locationLayer:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5 \u03c4\u03bf\u03c0\u03bf\u03b8\u03b5\u03c3\u03af\u03b1\u03c2",uniqueIDField:"\u039a\u03b1\u03b8\u03bf\u03c1\u03af\u03c3\u03c4\u03b5 \u03c4\u03bf \u03c0\u03b5\u03b4\u03af\u03bf \u03bc\u03bf\u03bd\u03b1\u03b4\u03b9\u03ba\u03bf\u03cd \u03b1\u03bd\u03b1\u03b3\u03bd\u03c9\u03c1\u03b9\u03c3\u03c4\u03b9\u03ba\u03bf\u03cd.",
acquisitionDefinition:"\u039a\u03b1\u03b8\u03bf\u03c1\u03af\u03c3\u03c4\u03b5 \u03c4\u03b9\u03c2 \u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b1\u03c0\u03cc\u03ba\u03c4\u03b7\u03c3\u03b7 \u03c4\u03c9\u03bd \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd \u03c4\u03bf\u03c0\u03bf\u03b8\u03b5\u03c3\u03af\u03b1\u03c2 (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03ac).",acquisitionDimension:"\u039a\u03b1\u03b8\u03bf\u03c1\u03af\u03c3\u03c4\u03b5 \u03c4\u03b9\u03c2 \u03b4\u03b9\u03b1\u03c3\u03c4\u03ac\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u03c4\u03bf \u03bc\u03bf\u03c1\u03c6\u03cc\u03c4\u03c5\u03c0\u03bf \u03c4\u03c9\u03bd \u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03b9\u03ce\u03bd \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b1\u03c0\u03cc\u03ba\u03c4\u03b7\u03c3\u03b7 \u03c4\u03c9\u03bd \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03ac).",
buffer:"\u039a\u03b1\u03b8\u03bf\u03c1\u03af\u03c3\u03c4\u03b5 \u03c4\u03bf \u03c0\u03b5\u03b4\u03af\u03bf \u03ae \u03c4\u03b7\u03bd \u03c4\u03b9\u03bc\u03ae \u03c4\u03b7\u03c2 \u03b1\u03c0\u03cc\u03c3\u03c4\u03b1\u03c3\u03b7\u03c2 \u03bc\u03b5\u03c4\u03b1\u03be\u03cd \u03b6\u03c9\u03bd\u03ce\u03bd.",formatOptions:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2 \u03bc\u03bf\u03c1\u03c6\u03cc\u03c4\u03c5\u03c0\u03bf\u03c5",dimensionField:"\u03a0\u03b5\u03b4\u03af\u03bf \u03ae \u03c4\u03b9\u03bc\u03ae \u03b4\u03b9\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7\u03c2",
dimensionFieldOrValue:"\u03a0\u03b5\u03b4\u03af\u03bf \u03ae \u03c4\u03b9\u03bc\u03ae \u03b4\u03b9\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7\u03c2",relativeDaysBefore:"\u03a3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ae \u03c4\u03b9\u03bc\u03ae \u03c0\u03c1\u03b9\u03bd",relativeDaysAfter:"\u03a3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ae \u03c4\u03b9\u03bc\u03ae \u03bc\u03b5\u03c4\u03ac",singleFieldOrValue:"\u039c\u03b5\u03bc\u03bf\u03bd\u03c9\u03bc\u03ad\u03bd\u03bf \u03c0\u03b5\u03b4\u03af\u03bf \u03ae \u03bc\u03b5\u03bc\u03bf\u03bd\u03c9\u03bc\u03ad\u03bd\u03b7 \u03c4\u03b9\u03bc\u03ae",
singleFieldWithRelativeValues:"\u039c\u03b5\u03bc\u03bf\u03bd\u03c9\u03bc\u03ad\u03bd\u03bf \u03c0\u03b5\u03b4\u03af\u03bf \u03ae \u03bc\u03b5\u03bc\u03bf\u03bd\u03c9\u03bc\u03ad\u03bd\u03b7 \u03c4\u03b9\u03bc\u03ae \u03bc\u03b5 \u03c3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ad\u03c2 \u03c4\u03b9\u03bc\u03ad\u03c2",startEndFieldsOrValues:"\u03a0\u03b5\u03b4\u03af\u03b1 \u03ae \u03c4\u03b9\u03bc\u03ad\u03c2 \u03b1\u03c1\u03c7\u03ae\u03c2 \u03ba\u03b1\u03b9 \u03c4\u03ad\u03bb\u03bf\u03c5\u03c2",startFieldOrValue:"\u03a0\u03b5\u03b4\u03af\u03bf \u03ae \u03c4\u03b9\u03bc\u03ae \u03b1\u03c1\u03c7\u03ae\u03c2",
endFieldOrValue:"\u03a0\u03b5\u03b4\u03af\u03bf \u03ae \u03c4\u03b9\u03bc\u03ae \u03c4\u03ad\u03bb\u03bf\u03c5\u03c2",statisticsType:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03c4\u03cd\u03c0\u03bf\u03c5 \u03c3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03ce\u03bd \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03c9\u03bd",percentile:"\u0395\u03ba\u03b1\u03c4\u03bf\u03c3\u03c4\u03b7\u03bc\u03cc\u03c1\u03b9\u03bf",percentileValue:"\u03a0\u03bf\u03c3\u03bf\u03c3\u03c4\u03b9\u03b1\u03af\u03b1 \u03c4\u03b9\u03bc\u03ae",
resample:"\u039a\u03b1\u03b8\u03bf\u03c1\u03af\u03c3\u03c4\u03b5 \u03c4\u03b7\u03bd \u03c4\u03b5\u03c7\u03bd\u03b9\u03ba\u03ae \u03b4\u03b5\u03b9\u03b3\u03bc\u03b1\u03c4\u03bf\u03bb\u03b7\u03c8\u03af\u03b1\u03c2.",nearest:"\u039a\u03bf\u03bd\u03c4\u03b9\u03bd\u03cc\u03c4\u03b5\u03c1\u03bf",bilinear:"\u0394\u03b9\u03b3\u03c1\u03b1\u03bc\u03bc\u03b9\u03ba\u03cc",cubic:"\u039a\u03c5\u03b2\u03b9\u03ba\u03cc",outputLayout:"\u039a\u03b1\u03b8\u03bf\u03c1\u03af\u03c3\u03c4\u03b5 \u03c4\u03b7 \u03b4\u03b9\u03ac\u03c4\u03b1\u03be\u03b7 \u03b5\u03be\u03cc\u03b4\u03bf\u03c5.",
layoutRow:"\u039f\u03b9 \u03b4\u03b5\u03b9\u03b3\u03bc\u03b1\u03c4\u03bf\u03bb\u03b7\u03c0\u03c4\u03bf\u03cd\u03bc\u03b5\u03bd\u03b5\u03c2 \u03c4\u03b9\u03bc\u03ad\u03c2 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03c3\u03c4\u03b7 \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae",layoutColumn:"\u039f\u03b9 \u03b4\u03b5\u03b9\u03b3\u03bc\u03b1\u03c4\u03bf\u03bb\u03b7\u03c0\u03c4\u03bf\u03cd\u03bc\u03b5\u03bd\u03b5\u03c2 \u03c4\u03b9\u03bc\u03ad\u03c2 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03c3\u03c4\u03b7 \u03c3\u03c4\u03ae\u03bb\u03b7",
outputType:"\u039a\u03b1\u03b8\u03bf\u03c1\u03af\u03c3\u03c4\u03b5 \u03c4\u03bf\u03bd \u03c4\u03cd\u03c0\u03bf \u03b5\u03be\u03cc\u03b4\u03bf\u03c5.",features:"\u0394\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b5\u03c2",table:"\u03a0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2",removeLayer:"\u039a\u03b1\u03c4\u03ac\u03c1\u03b3\u03b7\u03c3\u03b7 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5",dimensionError:"\u0394\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03b4\u03c5\u03bd\u03b1\u03c4\u03ae \u03b7 \u03c6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7 \u03c4\u03c9\u03bd \u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03b9\u03ce\u03bd \u03b3\u03b9\u03b1 \u03c4\u03b9\u03c2 \u03b4\u03b9\u03b1\u03c3\u03c4\u03ac\u03c3\u03b5\u03b9\u03c2. \u038c\u03bb\u03b5\u03c2 \u03bf\u03b9 \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ad\u03c2 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03ad\u03c7\u03bf\u03c5\u03bd \u03c4\u03b9\u03c2 \u03af\u03b4\u03b9\u03b5\u03c2 \u03b4\u03b9\u03b1\u03c3\u03c4\u03ac\u03c3\u03b5\u03b9\u03c2.",
analysisLayerLabel:"\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03c4\u03b1 imagery layer \u03c0\u03c1\u03bf\u03c2 \u03b4\u03b5\u03b9\u03b3\u03bc\u03b1\u03c4\u03bf\u03bb\u03b7\u03c8\u03af\u03b1.",itemDescription:"Image service \u03b1\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7\u03c2 \u03c0\u03bf\u03c5 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ae\u03b8\u03b7\u03ba\u03b5 \u03b1\u03c0\u03cc \u03c4\u03bf \u03b4\u03b5\u03af\u03b3\u03bc\u03b1",itemTags:"\u0391\u03c0\u03bf\u03c4\u03ad\u03bb\u03b5\u03c3\u03bc\u03b1 \u03b1\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7\u03c2 raster, \u0394\u03b5\u03af\u03b3\u03bc\u03b1 ${layername}",
itemSnippet:"Image service \u03b1\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7\u03c2 \u03c0\u03bf\u03c5 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ae\u03b8\u03b7\u03ba\u03b5 \u03b1\u03c0\u03cc \u03c4\u03bf \u03b4\u03b5\u03af\u03b3\u03bc\u03b1"});