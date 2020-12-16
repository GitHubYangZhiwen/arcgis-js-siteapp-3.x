// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/tile/nls/RasterWorker_es-mx",{"dojo/cldr/nls/number":{scientificFormat:"#E0","currencySpacing-afterCurrency-currencyMatch":"[:^S:]",infinity:"\u221e",superscriptingExponent:"\u00d7",list:";",percentSign:"%",minusSign:"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000\u00a0B","currencySpacing-afterCurrency-insertBetween":"\u00a0",nan:"NaN",plusSign:"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencySpacing-beforeCurrency-currencyMatch":"[:^S:]",
currencyFormat:"#,##0.00\u00a0\u00a4",perMille:"\u2030",group:",",percentFormat:"#,##0%","decimalFormat-long":"000 billones",decimalFormat:"#,##0.###",decimal:".","currencySpacing-beforeCurrency-insertBetween":"\u00a0",exponential:"E",timeSeparator:":",_localized:{}},"dojo/cldr/nls/gregorian":{"dateFormatItem-Ehm":"E h:mm a","days-standAlone-short":"do lu ma mi ju vi s\u00e1".split(" "),"months-format-narrow":"EFMAMJJASOND".split(""),"field-second-relative+0":"ahora","quarters-standAlone-narrow":["1T",
"2T","3T","4T"],"field-weekday":"D\u00eda de la semana","dateFormatItem-yQQQ":"QQQ y","dateFormatItem-yMEd":"EEE, d/M/y","field-wed-relative+0":"este mi\u00e9rcoles","field-wed-relative+1":"el mi\u00e9rcoles pr\u00f3ximo","dateFormatItem-GyMMMEd":"E, d MMM y G","dateFormatItem-MMMEd":"E d 'de' MMM",eraNarrow:["a. C.","d. C."],"field-tue-relative+-1":"el martes pasado","days-format-short":"do lu ma mi ju vi s\u00e1".split(" "),"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"d 'de' MMMM 'de' y",
"field-fri-relative+-1":"el viernes pasado","field-wed-relative+-1":"el mi\u00e9rcoles pasado","months-format-wide":"enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre".split(" "),"dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-pm":"p. m.","dateFormat-full":"EEEE, d 'de' MMMM 'de' y","field-thu-relative+-1":"el jueves pasado","dateFormatItem-Md":"d/M","dayPeriods-format-abbr-am":"a. m.","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dayPeriods-format-wide-noon":"noon",
"dateFormatItem-yMd":"d/M/y","field-era":"Era","dateFormatItem-yM":"M/y","months-standAlone-wide":"Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre".split(" "),"timeFormat-short":"H:mm","quarters-format-wide":["1er. trimestre","2\u00ba. trimestre","3er. trimestre","4o. trimestre"],"dateFormatItem-yQQQQ":"QQQQ 'de' y","timeFormat-long":"H:mm:ss z","field-year":"A\u00f1o","dateFormatItem-yMMM":"MMM y","dateTimeFormats-appendItem-Era":"{1} {0}","field-hour":"Hora",
"months-format-abbr":"ene feb mar abr may jun jul ago sep oct nov dic".split(" "),"field-sat-relative+0":"este s\u00e1bado","field-sat-relative+1":"el s\u00e1bado pr\u00f3ximo","timeFormat-full":"H:mm:ss (zzzz)","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"hoy","field-thu-relative+0":"este jueves","field-day-relative+1":"ma\u00f1ana","field-thu-relative+1":"el jueves pr\u00f3ximo","dateFormatItem-GyMMMd":"d MMM y G","dateFormatItem-H":"H","months-standAlone-abbr":"ene feb mar abr may jun jul ago sep oct nov dic".split(" "),
"quarters-format-abbr":["1er. trim.","2\u00ba. trim.","3er. trim.","4\u00ba trim."],"quarters-standAlone-wide":["1er. trimestre","2\u00ba. trimestre","3er. trimestre","4\u00ba trimestre"],"dateFormatItem-Gy":"y G","dateFormatItem-M":"L","days-standAlone-wide":"Domingo Lunes Martes Mi\u00e9rcoles Jueves Viernes S\u00e1bado".split(" "),"dayPeriods-format-abbr-noon":"noon","timeFormat-medium":"H:mm:ss","field-sun-relative+0":"este domingo","dateFormatItem-Hm":"H:mm","field-sun-relative+1":"el domingo pr\u00f3ximo",
"quarters-standAlone-abbr":["1er. trim.","2\u00ba. trim.","3er. trim.","4\u00ba trim."],eraAbbr:["a. C.","d. C."],"field-minute":"Minuto","field-dayperiod":"a. m./p. m.","days-standAlone-abbr":"Dom. Lun. Mar. Mi\u00e9. Jue. Vie. S\u00e1b.".split(" "),"dateFormatItem-d":"d","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1T","2T","3T","4T"],"field-day-relative+-1":"ayer","dateTimeFormat-long":"{1}, {0}","dayPeriods-format-narrow-am":"a.m.","dateFormatItem-h":"h a","dateFormatItem-MMMd":"d MMM",
"dateFormatItem-MEd":"E, d/M","dateTimeFormat-full":"{1}, {0}","field-fri-relative+0":"este viernes","field-fri-relative+1":"el viernes pr\u00f3ximo","field-day":"D\u00eda","days-format-wide":"domingo lunes martes mi\u00e9rcoles jueves viernes s\u00e1bado".split(" "),"field-zone":"Zona horaria","months-standAlone-narrow":"EFMAMJJASOND".split(""),"dateFormatItem-y":"y","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","field-year-relative+-1":"el a\u00f1o pasado","field-month-relative+-1":"el mes pasado",
"dateTimeFormats-appendItem-Year":"{1} {0}","dateFormatItem-hm":"h:mm a","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"p. m.","days-format-abbr":"dom. lun. mar. mi\u00e9. jue. vie. s\u00e1b.".split(" "),eraNames:["antes de Cristo","despu\u00e9s de Cristo"],"dateFormatItem-yMMMd":"d MMM y","days-format-narrow":"DLMMJVS".split(""),"field-month":"Mes","days-standAlone-narrow":"DLMXJVS".split(""),"dateFormatItem-MMM":"LLL","field-tue-relative+0":"este martes","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})",
"field-tue-relative+1":"el martes pr\u00f3ximo","dayPeriods-format-wide-am":"a. m.","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-EHm":"E H:mm","field-mon-relative+0":"este lunes","field-mon-relative+1":"el lunes pr\u00f3ximo","dateFormat-short":"dd/MM/yy","dateFormatItem-EHms":"E H:mm:ss","dateFormatItem-Ehms":"E h:mm:ss a","dayPeriods-format-narrow-noon":"del mediod\u00eda","field-second":"Segundo","field-sat-relative+-1":"el s\u00e1bado pasado",
"dateFormatItem-yMMMEd":"EEE, d 'de' MMMM 'de' y","field-sun-relative+-1":"el domingo pasado","field-month-relative+0":"este mes","field-month-relative+1":"el mes pr\u00f3ximo","dateTimeFormats-appendItem-Timezone":"{0} {1}","dateFormatItem-Ed":"E d","field-week":"Semana","dateFormat-medium":"dd/MM/y","field-week-relative+-1":"la semana pasada","field-year-relative+0":"este a\u00f1o","field-year-relative+1":"el a\u00f1o pr\u00f3ximo","dayPeriods-format-narrow-pm":"p.m.","dateTimeFormat-short":"{1} {0}",
"dateFormatItem-Hms":"H:mm:ss","dateFormatItem-hms":"h:mm:ss a","dateFormatItem-GyMMM":"MMM y G","field-mon-relative+-1":"el lunes pasado","field-week-relative+0":"esta semana","field-week-relative+1":"la semana pr\u00f3xima","dateFormatItem-yMM":"MM/y","dateFormatItem-MMMdd":"dd-MMM","dateFormatItem-MMdd":"dd/MM","field-day-relative+2":"pasado ma\u00f1ana","dateFormatItem-MMMMd":"d 'de' MMMM","field-day-relative+-2":"antier","dateFormatItem-yMMMM":"MMMM 'de' y","dateFormatItem-MMd":"d/MM","dayPeriods-format-narrow-morning1":"de la madrugada",
"dayPeriods-format-narrow-morning2":"ma\u00f1ana","dayPeriods-format-narrow-evening1":"de la tarde","dayPeriods-format-narrow-night1":"de la noche","dayPeriods-standAlone-abbr-am":"a. m.","dayPeriods-standAlone-abbr-pm":"p. m.","dayPeriods-standAlone-narrow-am":"a. m.","dayPeriods-standAlone-narrow-pm":"p. m.","dayPeriods-standAlone-wide-am":"a. m.","dayPeriods-standAlone-wide-pm":"p. m.","field-wed-short-relative+-1":"el mi\u00e9r. pasado","field-wed-short-relative+0":"este mi\u00e9r.","field-wed-short-relative+1":"el pr\u00f3ximo mi\u00e9r.",
"field-fri-short-relative+-1":"el vier. pasado","field-fri-short-relative+0":"este vier.","field-fri-short-relative+1":"el pr\u00f3ximo vier.",_localized:{}}});