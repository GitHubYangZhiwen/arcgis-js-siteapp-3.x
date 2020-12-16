// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/th/FindArgumentStatistics",{toolDefine:"\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e2a\u0e16\u0e34\u0e15\u0e34\u0e2d\u0e32\u0e23\u0e4c\u0e01\u0e34\u0e27\u0e40\u0e21\u0e19\u0e15\u0e4c",outputLayerName:"${layername}_argumentStatistics",dimensionLabel:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e02\u0e19\u0e32\u0e14\u0e17\u0e35\u0e48\u0e08\u0e30\u0e17\u0e33\u0e01\u0e32\u0e23\u0e41\u0e22\u0e01\u0e2a\u0e16\u0e34\u0e15\u0e34",variablesLabel:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e17\u0e33\u0e01\u0e32\u0e23\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c",
variablesListLabel:"\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23 [\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e02\u0e19\u0e32\u0e14] (\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22)",statisticsTypeLabel:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e2a\u0e16\u0e34\u0e15\u0e34",multipleOccurrenceValueLabel:"\u0e23\u0e30\u0e1a\u0e38\u0e04\u0e48\u0e32\u0e01\u0e32\u0e23\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19\u0e2b\u0e25\u0e32\u0e22\u0e04\u0e23\u0e31\u0e49\u0e07 (\u0e17\u0e32\u0e07\u0e40\u0e25\u0e37\u0e2d\u0e01)",
minValueLabel:"\u0e23\u0e30\u0e1a\u0e38\u0e04\u0e48\u0e32\u0e15\u0e48\u0e33\u0e2a\u0e38\u0e14",maxValueLabel:"\u0e23\u0e30\u0e1a\u0e38\u0e04\u0e48\u0e32\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14",argumentMinLabel:"\u0e2d\u0e32\u0e23\u0e4c\u0e01\u0e34\u0e27\u0e40\u0e21\u0e19\u0e15\u0e4c\u0e02\u0e2d\u0e07\u0e04\u0e48\u0e32\u0e15\u0e48\u0e33\u0e2a\u0e38\u0e14",argumentMaxLabel:"\u0e2d\u0e32\u0e23\u0e4c\u0e01\u0e34\u0e27\u0e40\u0e21\u0e19\u0e15\u0e4c\u0e02\u0e2d\u0e07\u0e04\u0e48\u0e32\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14",
argumentMedianLabel:"\u0e2d\u0e32\u0e23\u0e4c\u0e01\u0e34\u0e27\u0e40\u0e21\u0e19\u0e15\u0e4c\u0e02\u0e2d\u0e07\u0e21\u0e31\u0e18\u0e22\u0e10\u0e32\u0e19",durationLabel:"\u0e23\u0e30\u0e22\u0e30\u0e40\u0e27\u0e25\u0e32",dimensionDefinitionLabel:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e02\u0e49\u0e2d\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e02\u0e2d\u0e07\u0e02\u0e19\u0e32\u0e14",intervalKeywordLabel:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e33\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e02\u0e2d\u0e07\u0e0a\u0e48\u0e27\u0e07",
all:"\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",intervalKeyword:"\u0e04\u0e33\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e02\u0e2d\u0e07\u0e0a\u0e48\u0e27\u0e07",hourly:"\u0e23\u0e32\u0e22\u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",daily:"\u0e23\u0e32\u0e22\u0e27\u0e31\u0e19",weekly:"\u0e23\u0e32\u0e22\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c",monthly:"\u0e23\u0e32\u0e22\u0e40\u0e14\u0e37\u0e2d\u0e19",quarterly:"\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a",yearly:"\u0e23\u0e32\u0e22\u0e27\u0e31\u0e19",recurringDaily:"\u0e40\u0e01\u0e34\u0e14\u0e0b\u0e49\u0e33\u0e23\u0e32\u0e22\u0e27\u0e31\u0e19",
recurringWeekly:"\u0e40\u0e01\u0e34\u0e14\u0e0b\u0e49\u0e33\u0e23\u0e32\u0e22\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c",recurringMonthly:"\u0e40\u0e01\u0e34\u0e14\u0e0b\u0e49\u0e33\u0e23\u0e32\u0e22\u0e40\u0e14\u0e37\u0e2d\u0e19",recurringQuarterly:"\u0e40\u0e01\u0e34\u0e14\u0e0b\u0e49\u0e33\u0e23\u0e32\u0e22\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a",ignoreNodataLabel:"\u0e40\u0e1e\u0e34\u0e01\u0e40\u0e09\u0e22\u0e04\u0e48\u0e32\u0e17\u0e35\u0e48\u0e2b\u0e32\u0e22\u0e44\u0e1b\u0e43\u0e19\u0e01\u0e32\u0e23\u0e04\u0e33\u0e19\u0e27\u0e13",
ignore:"\u0e40\u0e1e\u0e34\u0e01\u0e40\u0e09\u0e22",analysisLayerLabel:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e20\u0e32\u0e1e\u0e2b\u0e25\u0e32\u0e22\u0e21\u0e34\u0e15\u0e34\u0e2b\u0e23\u0e37\u0e2d\u0e2b\u0e25\u0e32\u0e22\u0e41\u0e1a\u0e19\u0e14\u0e4c\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e17\u0e33\u0e01\u0e32\u0e23\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c",itemDescription:"\u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e27\u0e34\u0e2a\u0e20\u0e32\u0e1e\u0e01\u0e32\u0e23\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e36\u0e49\u0e19\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e2a\u0e16\u0e34\u0e15\u0e34\u0e2d\u0e32\u0e23\u0e4c\u0e01\u0e34\u0e27\u0e40\u0e21\u0e19\u0e15\u0e4c",
itemTags:"\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e41\u0e23\u0e2a\u0e40\u0e15\u0e2d\u0e23\u0e4c, \u0e04\u0e49\u0e19\u0e2b\u0e32\u0e2a\u0e16\u0e34\u0e15\u0e34\u0e2d\u0e32\u0e23\u0e4c\u0e01\u0e34\u0e27\u0e40\u0e21\u0e19\u0e15\u0e4c, ${layername}",itemSnippet:"\u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e27\u0e34\u0e2a\u0e20\u0e32\u0e1e\u0e01\u0e32\u0e23\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e36\u0e49\u0e19\u0e08\u0e32\u0e01\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e2a\u0e16\u0e34\u0e15\u0e34\u0e2d\u0e32\u0e23\u0e4c\u0e01\u0e34\u0e27\u0e40\u0e21\u0e19\u0e15\u0e4c"});