// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ru/GenerateTrendRaster",{toolDefine:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0440\u0430\u0441\u0442\u0440 \u0442\u0440\u0435\u043d\u0434\u0430",outputLayerName:"${layername}_trend",dimensionLabel:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u0435, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0431\u0443\u0434\u0443\u0442 \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0442\u0440\u0435\u043d\u0434 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439",
variablesLabel:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0442\u0440\u0435\u043d\u0434\u0430",variablesListLabel:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 [Dimension Info] (\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435)",trendLineTypeLabel:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0442\u0438\u043f \u043b\u0438\u043d\u0438\u0438 \u0434\u043b\u044f \u043f\u043e\u0434\u0433\u043e\u043d\u043a\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0432\u0434\u043e\u043b\u044c \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f",
linear:"\u041b\u0438\u043d\u0435\u0439\u043d\u044b\u0439",harmonic:"\u0413\u0430\u0440\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439",polynomial:"\u041f\u043e\u043b\u0438\u043d\u043e\u043c\u0438\u0430\u043b\u044c\u043d\u044b\u0439",mannKendall:"\u041c\u0430\u043d\u043d \u041a\u0435\u043d\u0434\u0430\u043b\u043b",seasonalKendall:"\u0421\u0435\u0437\u043e\u043d\u043d\u044b\u0439 \u041a\u0435\u043d\u0434\u0430\u043b\u043b",seasonalPeriod:"\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0435\u0434\u0438\u043d\u0438\u0446\u044b \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0434\u043b\u044f \u0434\u043b\u0438\u043d\u044b \u0441\u0435\u0437\u043e\u043d\u043d\u043e\u0433\u043e \u043f\u0435\u0440\u0438\u043e\u0434\u0430",
cycleLength:"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0433\u0430\u0440\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0430",cycleUnit:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0435\u0434\u0438\u043d\u0438\u0446\u044b \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0433\u0430\u0440\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0430",
years:"\u0413\u043e\u0434\u044b",days:"\u0414\u043d\u0438",months:"\u041c\u0435\u0441\u044f\u0446\u044b",frequencyLabel:"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u0447\u0438\u0441\u043b\u043e \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u043c\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u043f\u043e\u0434\u0433\u043e\u043d\u043a\u0438 \u0433\u0430\u0440\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0442\u0440\u0435\u043d\u0434\u0430",polynomialOrderLabel:"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043f\u043e\u043b\u0438\u043d\u043e\u043c\u0430 \u0434\u043b\u044f \u043f\u043e\u0434\u0433\u043e\u043d\u043a\u0438 \u0442\u0440\u0435\u043d\u0434\u0430",
modelStatistics:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443 \u043c\u043e\u0434\u0435\u043b\u0438 \u0434\u043b\u044f \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0432 \u0440\u0430\u0441\u0442\u0440 \u0442\u0440\u0435\u043d\u0434\u0430",rmse:"RMSE",r2:"R-\u043a\u0432\u0430\u0434\u0440\u0430\u0442",slopePValue:"P-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u0430 \u0443\u043a\u043b\u043e\u043d\u0430",
ignoreNodataLabel:"\u0418\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f\u0445",ignore:"\u0418\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c",analysisLayerLabel:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u043d\u043e\u0433\u043e\u043c\u0435\u0440\u043d\u044b\u0439 \u0441\u043b\u043e\u0439 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0442\u0440\u0435\u043d\u0434\u0430",
itemDescription:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0440\u0430\u0441\u0442\u0440 \u0442\u0440\u0435\u043d\u0434\u0430",itemTags:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0440\u0430\u0441\u0442\u0440\u0430, \u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0440\u0430\u0441\u0442\u0440 \u0442\u0440\u0435\u043d\u0434\u0430, ${layername}",
itemSnippet:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0440\u0430\u0441\u0442\u0440 \u0442\u0440\u0435\u043d\u0434\u0430"});