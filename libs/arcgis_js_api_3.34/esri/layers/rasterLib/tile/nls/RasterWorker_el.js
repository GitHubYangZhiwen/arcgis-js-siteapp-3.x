// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/tile/nls/RasterWorker_el",{"dojo/cldr/nls/number":{scientificFormat:"#E0","currencySpacing-afterCurrency-currencyMatch":"[:^S:]",infinity:"\u221e",superscriptingExponent:"\u00d7",list:";",percentSign:"%",minusSign:"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000\u00a0\u03c4\u03c1\u03b9\u03c3'.'","currencySpacing-afterCurrency-insertBetween":"\u00a0",nan:"NaN",plusSign:"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]",
"currencySpacing-beforeCurrency-currencyMatch":"[:^S:]",currencyFormat:"\u00a4#,##0.00;(\u00a4#,##0.00)",perMille:"\u2030",group:".",percentFormat:"#,##0%","decimalFormat-long":"000 \u03c4\u03c1\u03b9\u03c3\u03b5\u03ba\u03b1\u03c4\u03bf\u03bc\u03bc\u03cd\u03c1\u03b9\u03b1",decimalFormat:"#,##0.###",decimal:",","currencySpacing-beforeCurrency-insertBetween":"\u00a0",exponential:"e",_localized:{}},"dojo/cldr/nls/gregorian":{"dateFormatItem-Ehm":"E h:mm a","days-standAlone-short":"\u039a\u03c5 \u0394\u03b5 \u03a4\u03c1 \u03a4\u03b5 \u03a0\u03ad \u03a0\u03b1 \u03a3\u03ac".split(" "),
"months-format-narrow":"\u0399\u03a6\u039c\u0391\u039c\u0399\u0399\u0391\u03a3\u039f\u039d\u0394".split(""),"field-second-relative+0":"\u03c4\u03ce\u03c1\u03b1","quarters-standAlone-narrow":["1","2","3","4"],"field-weekday":"\u0397\u03bc\u03ad\u03c1\u03b1 \u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b1\u03c2","dateFormatItem-yQQQ":"y QQQ","dateFormatItem-yMEd":"E, d/M/y","field-wed-relative+0":"\u03b1\u03c5\u03c4\u03ae\u03bd \u03c4\u03b7\u03bd \u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7","field-wed-relative+1":"\u03b5\u03c0\u03cc\u03bc\u03b5\u03bd\u03b7 \u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7",
"dateFormatItem-GyMMMEd":"E, d MMM y G","dateFormatItem-MMMEd":"E, d MMM",eraNarrow:["\u03c0.\u03a7.","\u03bc.\u03a7."],"field-tue-relative+-1":"\u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7 \u03a4\u03c1\u03af\u03c4\u03b7","days-format-short":"\u039a\u03c5 \u0394\u03b5 \u03a4\u03c1 \u03a4\u03b5 \u03a0\u03ad \u03a0\u03b1 \u03a3\u03ac".split(" "),"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"d MMMM y","field-fri-relative+-1":"\u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7 \u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae",
"field-wed-relative+-1":"\u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7 \u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7","months-format-wide":"\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5 \u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5 \u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5 \u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5 \u039c\u03b1\u0390\u03bf\u03c5 \u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5 \u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5 \u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 \u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5 \u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 \u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5".split(" "),
"dateTimeFormat-medium":"{1}, {0}","dayPeriods-format-wide-pm":"\u03bc.\u03bc.","dateFormat-full":"EEEE, d MMMM y","field-thu-relative+-1":"\u03b5\u03c0\u03cc\u03bc\u03b5\u03bd\u03b7 \u03a0\u03ad\u03bc\u03c0\u03c4\u03b7","dateFormatItem-Md":"d/M","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dayPeriods-format-wide-noon":"noon","dateFormatItem-yMd":"d/M/y","field-era":"\u03a0\u03b5\u03c1\u03af\u03bf\u03b4\u03bf\u03c2","dateFormatItem-yM":"M/y","months-standAlone-wide":"\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2 \u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2 \u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2 \u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2 \u039c\u03ac\u03b9\u03bf\u03c2 \u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2 \u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2 \u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2 \u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2 \u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2 \u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2 \u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split(" "),
"timeFormat-short":"h:mm a","quarters-format-wide":["1\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf","2\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf","3\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf","4\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf"],"dateFormatItem-yQQQQ":"y QQQQ","timeFormat-long":"h:mm:ss a z","field-year":"\u0388\u03c4\u03bf\u03c2","dateFormatItem-yMMM":"MMM y","dateTimeFormats-appendItem-Era":"{1} {0}","field-hour":"\u038f\u03c1\u03b1","months-format-abbr":"\u0399\u03b1\u03bd \u03a6\u03b5\u03b2 \u039c\u03b1\u03c1 \u0391\u03c0\u03c1 \u039c\u03b1\u0390 \u0399\u03bf\u03c5\u03bd \u0399\u03bf\u03c5\u03bb \u0391\u03c5\u03b3 \u03a3\u03b5\u03c0 \u039f\u03ba\u03c4 \u039d\u03bf\u03b5 \u0394\u03b5\u03ba".split(" "),
"field-sat-relative+0":"\u03b1\u03c5\u03c4\u03cc \u03c4\u03bf \u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf","field-sat-relative+1":"\u03b5\u03c0\u03cc\u03bc\u03b5\u03bd\u03bf \u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf","timeFormat-full":"h:mm:ss a zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"\u03c3\u03ae\u03bc\u03b5\u03c1\u03b1","field-thu-relative+0":"\u03b1\u03c5\u03c4\u03ae\u03bd \u03c4\u03b7\u03bd \u03a0\u03ad\u03bc\u03c0\u03c4\u03b7","field-day-relative+1":"\u03b1\u03cd\u03c1\u03b9\u03bf",
"field-thu-relative+1":"\u03b5\u03c0\u03cc\u03bc\u03b5\u03bd\u03b7 \u03a0\u03ad\u03bc\u03c0\u03c4\u03b7","dateFormatItem-GyMMMd":"d MMM y G","dateFormatItem-H":"HH","months-standAlone-abbr":"\u0399\u03b1\u03bd \u03a6\u03b5\u03b2 \u039c\u03ac\u03c1 \u0391\u03c0\u03c1 \u039c\u03ac\u03b9 \u0399\u03bf\u03cd\u03bd \u0399\u03bf\u03cd\u03bb \u0391\u03cd\u03b3 \u03a3\u03b5\u03c0 \u039f\u03ba\u03c4 \u039d\u03bf\u03ad \u0394\u03b5\u03ba".split(" "),"quarters-format-abbr":["\u03a41","\u03a42","\u03a43","\u03a44"],
"quarters-standAlone-wide":["1\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf","2\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf","3\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf","4\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf"],"dateFormatItem-Gy":"y G","dateFormatItem-M":"L","days-standAlone-wide":"\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae \u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1 \u03a4\u03c1\u03af\u03c4\u03b7 \u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7 \u03a0\u03ad\u03bc\u03c0\u03c4\u03b7 \u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae \u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split(" "),
"dayPeriods-format-abbr-noon":"noon","timeFormat-medium":"h:mm:ss a","field-sun-relative+0":"\u03b1\u03c5\u03c4\u03ae\u03bd \u03c4\u03b7\u03bd \u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae","dateFormatItem-Hm":"HH:mm","field-sun-relative+1":"\u03b5\u03c0\u03cc\u03bc\u03b5\u03bd\u03b7 \u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae","quarters-standAlone-abbr":["\u03a41","\u03a42","\u03a43","\u03a44"],eraAbbr:["\u03c0.\u03a7.","\u03bc.\u03a7."],"field-minute":"\u039b\u03b5\u03c0\u03c4\u03cc","field-dayperiod":"\u03c0.\u03bc./\u03bc.\u03bc.",
"days-standAlone-abbr":"\u039a\u03c5\u03c1 \u0394\u03b5\u03c5 \u03a4\u03c1\u03af \u03a4\u03b5\u03c4 \u03a0\u03ad\u03bc \u03a0\u03b1\u03c1 \u03a3\u03ac\u03b2".split(" "),"dateFormatItem-d":"d","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"\u03c7\u03b8\u03b5\u03c2","dateTimeFormat-long":"{1} - {0}","dayPeriods-format-narrow-am":"a","dateFormatItem-h":"h a","dateFormatItem-MMMd":"d MMM","dateFormatItem-MEd":"E, d/M","dateTimeFormat-full":"{1} - {0}",
"field-fri-relative+0":"\u03b1\u03c5\u03c4\u03ae\u03bd \u03c4\u03b7\u03bd \u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae","field-fri-relative+1":"\u03b5\u03c0\u03cc\u03bc\u03b5\u03bd\u03b7 \u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae","field-day":"\u0397\u03bc\u03ad\u03c1\u03b1","days-format-wide":"\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae \u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1 \u03a4\u03c1\u03af\u03c4\u03b7 \u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7 \u03a0\u03ad\u03bc\u03c0\u03c4\u03b7 \u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae \u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split(" "),
"field-zone":"\u0396\u03ce\u03bd\u03b7 \u03ce\u03c1\u03b1\u03c2","months-standAlone-narrow":"\u0399\u03a6\u039c\u0391\u039c\u0399\u0399\u0391\u03a3\u039f\u039d\u0394".split(""),"dateFormatItem-y":"y","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","field-year-relative+-1":"\u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf \u03ad\u03c4\u03bf\u03c2","field-month-relative+-1":"\u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf\u03c2 \u03bc\u03ae\u03bd\u03b1\u03c2",
"dateTimeFormats-appendItem-Year":"{1} {0}","dateFormatItem-hm":"h:mm a","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"PM","days-format-abbr":"\u039a\u03c5\u03c1 \u0394\u03b5\u03c5 \u03a4\u03c1\u03af \u03a4\u03b5\u03c4 \u03a0\u03ad\u03bc \u03a0\u03b1\u03c1 \u03a3\u03ac\u03b2".split(" "),eraNames:["\u03c0\u03c1\u03bf \u03a7\u03c1\u03b9\u03c3\u03c4\u03bf\u03cd","\u03bc\u03b5\u03c4\u03ac \u03a7\u03c1\u03b9\u03c3\u03c4\u03cc\u03bd"],"dateFormatItem-yMMMd":"d MMM y","days-format-narrow":"\u039a\u0394\u03a4\u03a4\u03a0\u03a0\u03a3".split(""),
"field-month":"\u039c\u03ae\u03bd\u03b1\u03c2","days-standAlone-narrow":"\u039a\u0394\u03a4\u03a4\u03a0\u03a0\u03a3".split(""),"dateFormatItem-MMM":"LLL","field-tue-relative+0":"\u03b1\u03c5\u03c4\u03ae\u03bd \u03c4\u03b7\u03bd \u03a4\u03c1\u03af\u03c4\u03b7","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","field-tue-relative+1":"\u03b5\u03c0\u03cc\u03bc\u03b5\u03bd\u03b7 \u03a4\u03c1\u03af\u03c4\u03b7","dayPeriods-format-wide-am":"\u03c0.\u03bc.","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})",
"dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-EHm":"E HH:mm","field-mon-relative+0":"\u03b1\u03c5\u03c4\u03ae\u03bd \u03c4\u03b7 \u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1","field-mon-relative+1":"\u03b5\u03c0\u03cc\u03bc\u03b5\u03bd\u03b7 \u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1","dateFormat-short":"d/M/yy","dateFormatItem-EHms":"E HH:mm:ss","dateFormatItem-Ehms":"E h:mm:ss a","dayPeriods-format-narrow-noon":"n","field-second":"\u0394\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03bf",
"field-sat-relative+-1":"\u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf \u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf","dateFormatItem-yMMMEd":"E, d MMM y","field-sun-relative+-1":"\u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7 \u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae","field-month-relative+0":"\u03c4\u03c1\u03ad\u03c7\u03c9\u03bd \u03bc\u03ae\u03bd\u03b1\u03c2","field-month-relative+1":"\u03b5\u03c0\u03cc\u03bc\u03b5\u03bd\u03bf\u03c2 \u03bc\u03ae\u03bd\u03b1\u03c2",
"dateTimeFormats-appendItem-Timezone":"{0} {1}","dateFormatItem-Ed":"E d","field-week":"\u0395\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b1","dateFormat-medium":"d MMM y","field-week-relative+-1":"\u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7 \u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b1","field-year-relative+0":"\u03c6\u03ad\u03c4\u03bf\u03c2","field-year-relative+1":"\u03b5\u03c0\u03cc\u03bc\u03b5\u03bd\u03bf \u03ad\u03c4\u03bf\u03c2","dayPeriods-format-narrow-pm":"p","dateTimeFormat-short":"{1}, {0}",
"dateFormatItem-Hms":"HH:mm:ss","dateFormatItem-hms":"h:mm:ss a","dateFormatItem-GyMMM":"LLL y G","field-mon-relative+-1":"\u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7 \u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1","field-week-relative+0":"\u03b1\u03c5\u03c4\u03ae\u03bd \u03c4\u03b7\u03bd \u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b1","field-week-relative+1":"\u03b5\u03c0\u03cc\u03bc\u03b5\u03bd\u03b7 \u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b1","field-day-relative+2":"\u03bc\u03b5\u03b8\u03b1\u03cd\u03c1\u03b9\u03bf",
"dateFormatItem-HHmmss":"HH:mm:ss","dateFormatItem-MMMMd":"d MMMM","field-day-relative+-2":"\u03c0\u03c1\u03bf\u03c7\u03b8\u03ad\u03c2","dateFormatItem-yMMMM":"MMMM y","dateFormatItem-HHmm":"HH:mm","dateFormatItem-MMMMEd":"E, d MMMM",_localized:{}}});