// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/uk/DetermineOptimumTravelCostNetwork",{inputLayerLabel:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0440\u0430\u0441\u0442\u0440 \u0430\u0431\u043e \u0448\u0430\u0440 \u043c\u0456\u0441\u0446\u044f \u0440\u043e\u0437\u0442\u0430\u0448\u0443\u0432\u0430\u043d\u043d\u044f \u043e\u0431'\u0454\u043a\u0442\u0443, \u043c\u0456\u0436 \u044f\u043a\u0438\u043c\u0438 \u0442\u0440\u0435\u0431\u0430 \u0432\u0438\u0437\u043d\u0430\u0447\u0438\u0442\u0438 \u0448\u043b\u044f\u0445\u0438 \u043f\u043e\u0434\u043e\u0440\u043e\u0436\u0443\u0432\u0430\u043d\u043d\u044f",
inputCostRasterLabel:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0440\u0430\u0441\u0442\u0440\u043e\u0432\u0438\u0439 \u0448\u0430\u0440 \u0432\u0430\u0440\u0442\u043e\u0441\u0442\u0456 \u043f\u043e\u0434\u043e\u0440\u043e\u0436\u0456",outputOptimumNetworkName:"\u0406\u043c'\u044f \u0448\u0430\u0440\u0443 \u043f\u043e\u043b\u0456\u043b\u0456\u043d\u0456\u0439 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0445 \u0448\u043b\u044f\u0445\u0456\u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456\u0432",
outputNeighborNetworkName:"\u0406\u043c'\u044f \u0448\u0430\u0440\u0443 \u043f\u043e\u043b\u0456\u043b\u0456\u043d\u0456\u0439 \u0441\u0443\u0441\u0456\u0434\u043d\u0456\u0445 \u0448\u043b\u044f\u0445\u0456\u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456\u0432 (\u043e\u043f\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e)",outputLayerName:"\u0412\u0438\u0437\u043d\u0430\u0447\u0438\u0442\u0438 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u0443 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u043f\u043e\u0434\u043e\u0440\u043e\u0436\u0456 ${layername}",
itemDescription:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u0438\u0439 \u0448\u0430\u0440, \u0437\u0433\u0435\u043d\u0435\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u043c\u0435\u0440\u0435\u0436\u0456 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0457 \u0432\u0430\u0440\u0442\u043e\u0441\u0442\u0456 \u043f\u043e\u0434\u043e\u0440\u043e\u0436\u0456 \u0434\u043b\u044f ${layerName}. ",
itemTags:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0430\u043d\u0430\u043b\u0456\u0437\u0443, \u0412\u0438\u0437\u043d\u0430\u0447\u0438\u0442\u0438 \u043c\u0435\u0440\u0435\u0436\u0443 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0457 \u0432\u0430\u0440\u0442\u043e\u0441\u0442\u0456 \u043f\u043e\u0434\u043e\u0440\u043e\u0436\u0456, ${layername} ${fieldname}",itemSnippet:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u0438\u0439 \u0448\u0430\u0440, \u0437\u0433\u0435\u043d\u0435\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456 \u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u043c\u0435\u0440\u0435\u0436\u0456 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0457 \u0432\u0430\u0440\u0442\u043e\u0441\u0442\u0456 \u043f\u043e\u0434\u043e\u0440\u043e\u0436\u0456."});