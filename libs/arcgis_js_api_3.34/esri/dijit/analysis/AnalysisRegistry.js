// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/AnalysisRegistry",["dojo/_base/lang","dojo/has","../../kernel"],function(b,c,d){var a={Modes:{Raster:"raster",Bigdata:"bigdata",Standard:"standard",Feature:"feature"},Tools:{FindCentroids:"FindCentroids",ChooseBestFacilities:"ChooseBestFacilities"},ProcessInfoTools:{DescribeDataset:{Name:"DescribeDataset",Gax:!0,Std:!1},GeneralizedLinearRegression:{Name:"GeneralizedLinearRegression",Gax:!0,Std:!1},ForestBasedClassificationAndRegression:{Name:"ForestBasedClassificationAndRegression",
Gax:!0,Std:!1},GeographicallyWeightedRegression:{Name:"GeographicallyWeightedRegression",Gax:!0,Std:!1},FindSimilarLocations:{Name:"FindSimilarLocations",Gax:!0,Std:!0},FindHotSpots:{Name:"FindHotSpots",Gax:!1,Std:!0},FindOutliers:{Name:"FindOutliers",Gax:!0,Std:!0}},ToolCategory:{Gax:"GeoAnalyticsTools",Std:"SpatialAnalysisTools"},GeometryTypes:{Polygon:"esriGeometryPolygon",Line:"esriGeometryPolyline",Point:"esriGeometryPoint",MultiPoint:"esriGeometryMultipoint"},PseudoGeometryTypes:{Point:"point",
Line:"line",Polygon:"polygon"},TimeTypes:{Instant:"instant",Interval:"interval"},FieldTypes:{ObjectId:"esriFieldTypeOID",String:"esriFieldTypeString",Short:"esriFieldTypeSmallInteger",Integer:"esriFieldTypeInteger",Float:"esriFieldTypeSingle",Double:"esriFieldTypeDouble",Date:"esriFieldTypeDate"},PseudoFieldTypes:{Number:"number",String:"string",Date:"date"},Shapes:{square:"SQUARE",hexagon:"HEXAGON",transverseHexagon:"TRANSVERSEHEXAGON",triangle:"TRIANGLE",diamond:"DIAMOND"},DistanceMethods:{geodesic:"Geodesic",
planar:"Planar"}};c("extend-esri")&&b.setObject("dijit.analysis.AnalysisRegistry",a,d);return a});