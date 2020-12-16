// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/he/ClassifyObjectsUsingDeepLearning",{toolDefine:"\u05e1\u05d9\u05d5\u05d5\u05d2 \u05d0\u05d5\u05d1\u05d9\u05d9\u05e7\u05d8\u05d9\u05dd \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05dc\u05de\u05d9\u05d3\u05d4 \u05dc\u05e2\u05d5\u05de\u05e7",inputFeaturesLabel:"\u05d1\u05d7\u05e8 \u05e9\u05db\u05d1\u05ea \u05d9\u05e9\u05d5\u05ea \u05e2\u05d1\u05d5\u05e8 \u05d0\u05d5\u05d1\u05d9\u05d9\u05e7\u05d8\u05d9\u05dd (\u05d0\u05d5\u05e4\u05e6\u05d9\u05d5\u05e0\u05dc\u05d9)",
outputLayerName:"${layername}_classifiedObjects",modelLabel:"\u05d1\u05d7\u05e8 \u05de\u05d5\u05d3\u05dc \u05e9\u05dc \u05dc\u05de\u05d9\u05d3\u05d4 \u05dc\u05e2\u05d5\u05de\u05e7 \u05dc\u05e1\u05d9\u05d5\u05d5\u05d2 \u05d0\u05d5\u05d1\u05d9\u05d9\u05e7\u05d8\u05d9\u05dd",modelArgsLabel:"\u05e6\u05d9\u05d9\u05df \u05d0\u05e8\u05d2\u05d5\u05de\u05e0\u05d8\u05d9\u05dd \u05dc\u05de\u05d5\u05d3\u05dc \u05e9\u05dc \u05dc\u05de\u05d9\u05d3\u05d4 \u05dc\u05e2\u05d5\u05de\u05e7",classLabelFieldLabel:"\u05d4\u05d2\u05d3\u05e8 \u05e9\u05dd \u05e9\u05d3\u05d4 \u05ea\u05d5\u05d5\u05d9\u05ea \u05e7\u05d1\u05d5\u05e6\u05d4 (\u05d0\u05d5\u05e4\u05e6\u05d9\u05d5\u05e0\u05dc\u05d9)",
processingModeLabel:"\u05de\u05e6\u05d1 \u05e2\u05d9\u05d1\u05d5\u05d3",processAsMosaicLabel:"\u05e2\u05d9\u05d1\u05d5\u05d3 \u05db\u05ea\u05de\u05d5\u05e0\u05ea \u05e4\u05e1\u05d9\u05e4\u05e1",processAsItemsLabel:"\u05e2\u05d9\u05d1\u05d5\u05d3 \u05db\u05dc \u05e4\u05e8\u05d9\u05d8\u05d9 \u05d4\u05e8\u05e1\u05d8\u05e8 \u05d1\u05e0\u05e4\u05e8\u05d3",queryModelArgsMsg:"\u05de\u05d1\u05d5\u05e6\u05e2\u05ea \u05e9\u05d0\u05d9\u05dc\u05ea\u05d4 \u05e9\u05dc \u05d0\u05e8\u05d2\u05d5\u05de\u05e0\u05d8\u05d9\u05dd \u05dc\u05de\u05d5\u05d3\u05dc...",
queryModelArgsErrMsg:"\u05ea\u05e9\u05d0\u05d5\u05dc \u05d0\u05e8\u05d2\u05d5\u05de\u05e0\u05d8\u05d9\u05dd \u05e9\u05dc \u05de\u05d5\u05d3\u05dc \u05e0\u05db\u05e9\u05dc.",valueLabel:"\u05e2\u05e8\u05da",nameLabel:"\u05e9\u05dd",analysisLayerLabel:"\u05d1\u05d7\u05e8 \u05ea\u05de\u05d5\u05e0\u05d4 \u05dc\u05e9\u05d9\u05de\u05d5\u05e9 \u05dc\u05e1\u05d9\u05d5\u05d5\u05d2 \u05d0\u05d5\u05d1\u05d9\u05d9\u05e7\u05d8\u05d9\u05dd",itemDescription:"\u05e0\u05d9\u05ea\u05d5\u05d7 \u05e9\u05d9\u05e8\u05d5\u05ea \u05ea\u05de\u05d5\u05e0\u05d4 \u05e9\u05e0\u05d5\u05e6\u05e8 \u05de'\u05e1\u05d9\u05d5\u05d5\u05d2 \u05d0\u05d5\u05d1\u05d9\u05d9\u05e7\u05d8\u05d9\u05dd \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05dc\u05de\u05d9\u05d3\u05d4 \u05dc\u05e2\u05d5\u05de\u05e7'",
itemTags:"\u05ea\u05d5\u05e6\u05d0\u05ea \u05e0\u05d9\u05ea\u05d5\u05d7 \u05e8\u05e1\u05d8\u05e8, \u05e1\u05d9\u05d5\u05d5\u05d2 \u05d0\u05d5\u05d1\u05d9\u05d9\u05e7\u05d8\u05d9\u05dd \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05dc\u05de\u05d9\u05d3\u05d4 \u05dc\u05e2\u05d5\u05de\u05e7, ${layername}",itemSnippet:"\u05e0\u05d9\u05ea\u05d5\u05d7 \u05e9\u05dc \u05e9\u05d9\u05e8\u05d5\u05ea \u05ea\u05de\u05d5\u05e0\u05d5\u05ea \u05d4\u05e0\u05d5\u05e6\u05e8 \u05de\u05e1\u05d9\u05d5\u05d5\u05d2 \u05d0\u05d5\u05d1\u05d9\u05d9\u05e7\u05d8\u05d9\u05dd \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05dc\u05de\u05d9\u05d3\u05d4 \u05dc\u05e2\u05d5\u05de\u05e7"});