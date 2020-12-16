// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/el/countries",{countryCodes:{WORLD:"\u039a\u03cc\u03c3\u03bc\u03bf\u03c2",AD:"\u0391\u03bd\u03b4\u03cc\u03c1\u03b1",AE:"\u0397\u03bd\u03c9\u03bc\u03ad\u03bd\u03b1 \u0391\u03c1\u03b1\u03b2\u03b9\u03ba\u03ac \u0395\u03bc\u03b9\u03c1\u03ac\u03c4\u03b1",AF:"\u0391\u03c6\u03b3\u03b1\u03bd\u03b9\u03c3\u03c4\u03ac\u03bd",AG:"\u0391\u03bd\u03c4\u03af\u03b3\u03ba\u03bf\u03c5\u03b1 \u03ba\u03b1\u03b9 \u039c\u03c0\u03b1\u03c1\u03bc\u03c0\u03bf\u03cd\u03bd\u03c4\u03b1",AI:"\u0391\u03bd\u03b3\u03ba\u03bf\u03c5\u03af\u03bb\u03b1",
AL:"\u0391\u03bb\u03b2\u03b1\u03bd\u03af\u03b1",AM:"\u0391\u03c1\u03bc\u03b5\u03bd\u03af\u03b1",AO:"\u0391\u03bd\u03b3\u03ba\u03cc\u03bb\u03b1",AQ:"\u0391\u03bd\u03c4\u03b1\u03c1\u03ba\u03c4\u03b9\u03ba\u03ae",AR:"\u0391\u03c1\u03b3\u03b5\u03bd\u03c4\u03b9\u03bd\u03ae",AS:"\u0391\u03bc\u03b5\u03c1\u03b9\u03ba\u03b1\u03bd\u03b9\u03ba\u03ae \u03a3\u03b1\u03bc\u03cc\u03b1",AT:"\u0391\u03c5\u03c3\u03c4\u03c1\u03af\u03b1",AU:"\u0391\u03c5\u03c3\u03c4\u03c1\u03b1\u03bb\u03af\u03b1",AW:"\u0391\u03c1\u03bf\u03cd\u03bc\u03c0\u03b1",
AZ:"\u0391\u03b6\u03b5\u03c1\u03bc\u03c0\u03b1\u03ca\u03c4\u03b6\u03ac\u03bd",BA:"\u0392\u03bf\u03c3\u03bd\u03af\u03b1 \u03ba\u03b1\u03b9 \u0395\u03c1\u03b6\u03b5\u03b3\u03bf\u03b2\u03af\u03bd\u03b7",BB:"\u039c\u03c0\u03b1\u03c1\u03bc\u03c0\u03ac\u03bd\u03c4\u03bf\u03c2",BD:"\u039c\u03c0\u03b1\u03b3\u03ba\u03bb\u03b1\u03bd\u03c4\u03ad\u03c2",BE:"\u0392\u03ad\u03bb\u03b3\u03b9\u03bf",BF:"\u039c\u03c0\u03bf\u03c5\u03c1\u03ba\u03af\u03bd\u03b1 \u03a6\u03ac\u03c3\u03bf",BG:"\u0392\u03bf\u03c5\u03bb\u03b3\u03b1\u03c1\u03af\u03b1",
BH:"\u039c\u03c0\u03b1\u03c7\u03c1\u03ad\u03b9\u03bd",BI:"\u039c\u03c0\u03bf\u03c5\u03c1\u03bf\u03c5\u03bd\u03c4\u03af",BJ:"\u039c\u03c0\u03b5\u03bd\u03af\u03bd",BL:"\u0386\u03b3\u03b9\u03bf\u03c2 \u0392\u03b1\u03c1\u03b8\u03bf\u03bb\u03bf\u03bc\u03b1\u03af\u03bf\u03c2",BM:"\u0392\u03b5\u03c1\u03bc\u03bf\u03cd\u03b4\u03b5\u03c2",BN:"\u039c\u03c0\u03c1\u03bf\u03c5\u03bd\u03ad\u03b9 \u039d\u03c4\u03b1\u03c1\u03bf\u03c5\u03c3\u03b1\u03bb\u03ac\u03bc",BO:"\u03a0\u03bf\u03bb\u03c5\u03b5\u03b8\u03bd\u03b9\u03ba\u03cc \u03ba\u03c1\u03ac\u03c4\u03bf\u03c2 \u03c4\u03b7\u03c2 \u0392\u03bf\u03bb\u03b9\u03b2\u03af\u03b1\u03c2",
BQ:"\u039c\u03c0\u03bf\u03bd\u03b1\u03af\u03c1, \u0386\u03b3\u03b9\u03bf\u03c2 \u0395\u03c5\u03c3\u03c4\u03ac\u03b8\u03b9\u03bf\u03c2 \u03ba\u03b1\u03b9 \u03a3\u03ac\u03bc\u03c0\u03b1",BR:"\u0392\u03c1\u03b1\u03b6\u03b9\u03bb\u03af\u03b1",BS:"\u039c\u03c0\u03b1\u03c7\u03ac\u03bc\u03b5\u03c2",BT:"\u039c\u03c0\u03bf\u03c5\u03c4\u03ac\u03bd",BV:"\u039d\u03ae\u03c3\u03bf\u03c2 \u039c\u03c0\u03bf\u03c5\u03b2\u03ad",BW:"\u039c\u03c0\u03bf\u03c4\u03c3\u03bf\u03c5\u03ac\u03bd\u03b1",BY:"\u039b\u03b5\u03c5\u03ba\u03bf\u03c1\u03c9\u03c3\u03af\u03b1",
BZ:"\u039c\u03c0\u03b5\u03bb\u03af\u03b6",CA:"\u039a\u03b1\u03bd\u03b1\u03b4\u03ac\u03c2",CD:"\u039b\u03b1\u03ca\u03ba\u03ae \u0394\u03b7\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1 \u03c4\u03bf\u03c5 \u039a\u03bf\u03bd\u03b3\u03ba\u03cc",CF:"\u039a\u03b5\u03bd\u03c4\u03c1\u03bf\u03b1\u03c6\u03c1\u03b9\u03ba\u03b1\u03bd\u03b9\u03ba\u03ae \u0394\u03b7\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1",CG:"\u039a\u03bf\u03bd\u03b3\u03ba\u03cc",CH:"\u0395\u03bb\u03b2\u03b5\u03c4\u03af\u03b1",CI:"\u0391\u03ba\u03c4\u03ae \u0395\u03bb\u03b5\u03c6\u03b1\u03bd\u03c4\u03bf\u03c3\u03c4\u03bf\u03cd",
CK:"\u039d\u03ae\u03c3\u03bf\u03b9 \u039a\u03bf\u03c5\u03ba",CL:"\u03a7\u03b9\u03bb\u03ae",CM:"\u039a\u03b1\u03bc\u03b5\u03c1\u03bf\u03cd\u03bd",CN:"\u039a\u03af\u03bd\u03b1",CO:"\u039a\u03bf\u03bb\u03bf\u03bc\u03b2\u03af\u03b1",CR:"\u039a\u03cc\u03c3\u03c4\u03b1 \u03a1\u03af\u03ba\u03b1",CU:"\u039a\u03bf\u03cd\u03b2\u03b1",CV:"\u03a0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf \u0391\u03ba\u03c1\u03c9\u03c4\u03ae\u03c1\u03b9",CW:"\u039a\u03bf\u03c5\u03c1\u03b1\u03c3\u03ac\u03bf",CY:"\u039a\u03cd\u03c0\u03c1\u03bf\u03c2",
CZ:"\u0394\u03b7\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1 \u03c4\u03b7\u03c2 \u03a4\u03c3\u03b5\u03c7\u03af\u03b1\u03c2",DE:"\u0393\u03b5\u03c1\u03bc\u03b1\u03bd\u03af\u03b1",DJ:"\u03a4\u03b6\u03b9\u03bc\u03c0\u03bf\u03c5\u03c4\u03af",DK:"\u0394\u03b1\u03bd\u03af\u03b1",DM:"\u039d\u03c4\u03bf\u03bc\u03af\u03bd\u03b9\u03ba\u03b1",DO:"\u0394\u03bf\u03bc\u03b9\u03bd\u03b9\u03ba\u03b1\u03bd\u03ae \u0394\u03b7\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1",DZ:"\u0391\u03bb\u03b3\u03b5\u03c1\u03af\u03b1",
EC:"\u0395\u03ba\u03bf\u03c5\u03b1\u03b4\u03cc\u03c1",EE:"\u0395\u03c3\u03b8\u03bf\u03bd\u03af\u03b1",EG:"\u0391\u03af\u03b3\u03c5\u03c0\u03c4\u03bf\u03c2",EH:"\u0394\u03c5\u03c4\u03b9\u03ba\u03ae \u03a3\u03b1\u03c7\u03ac\u03c1\u03b1",ER:"\u0395\u03c1\u03c5\u03b8\u03c1\u03b1\u03af\u03b1",ES:"\u0399\u03c3\u03c0\u03b1\u03bd\u03af\u03b1",ET:"\u0391\u03b9\u03b8\u03b9\u03bf\u03c0\u03af\u03b1",FI:"\u03a6\u03b9\u03bd\u03bb\u03b1\u03bd\u03b4\u03af\u03b1",FJ:"\u03a6\u03af\u03c4\u03b6\u03b9",FK:"\u039d\u03ae\u03c3\u03bf\u03b9 \u03a6\u03ce\u03ba\u03bb\u03b1\u03bd\u03c4 (\u039c\u03b1\u03bb\u03b2\u03af\u03bd\u03b1\u03c2)",
FM:"\u039f\u03bc\u03cc\u03c3\u03c0\u03bf\u03bd\u03b4\u03b5\u03c2 \u03a0\u03bf\u03bb\u03b9\u03c4\u03b5\u03af\u03b5\u03c2 \u03c4\u03b7\u03c2 \u039c\u03b9\u03ba\u03c1\u03bf\u03bd\u03b7\u03c3\u03af\u03b1\u03c2",FO:"\u039d\u03ae\u03c3\u03bf\u03b9 \u03a6\u03b5\u03c1\u03cc\u03b5\u03c2",FR:"\u0393\u03b1\u03bb\u03bb\u03af\u03b1",GA:"\u0393\u03ba\u03b1\u03bc\u03c0\u03cc\u03bd",GB:"\u0397\u03bd\u03c9\u03bc\u03ad\u03bd\u03bf \u0392\u03b1\u03c3\u03af\u03bb\u03b5\u03b9\u03bf",GD:"\u0393\u03c1\u03b5\u03bd\u03ac\u03b4\u03b1",
GE:"\u0393\u03b5\u03c9\u03c1\u03b3\u03af\u03b1",GF:"\u0393\u03b1\u03bb\u03bb\u03b9\u03ba\u03ae \u0393\u03bf\u03c5\u03b9\u03ac\u03bd\u03b1",GG:"\u0393\u03ba\u03ad\u03c1\u03bd\u03c3\u03b5\u03ca",GH:"\u0393\u03ba\u03ac\u03bd\u03b1",GI:"\u0393\u03b9\u03b2\u03c1\u03b1\u03bb\u03c4\u03ac\u03c1",GL:"\u0393\u03c1\u03bf\u03b9\u03bb\u03b1\u03bd\u03b4\u03af\u03b1",GM:"\u0393\u03ba\u03ac\u03bc\u03c0\u03b9\u03b1",GN:"\u0393\u03bf\u03c5\u03b9\u03bd\u03ad\u03b1",GP:"\u0393\u03bf\u03c5\u03b1\u03b4\u03b5\u03bb\u03bf\u03cd\u03c0\u03b7",
GQ:"\u0399\u03c3\u03b7\u03bc\u03b5\u03c1\u03b9\u03bd\u03ae \u0393\u03bf\u03c5\u03b9\u03bd\u03ad\u03b1",GR:"\u0395\u03bb\u03bb\u03ac\u03b4\u03b1",GS:"\u039d\u03cc\u03c4\u03b9\u03b1 \u0393\u03b5\u03c9\u03c1\u03b3\u03af\u03b1 \u03ba\u03b1\u03b9 \u039d\u03cc\u03c4\u03b9\u03bf\u03b9 \u03bd\u03ae\u03c3\u03bf\u03b9 \u03a3\u03ac\u03bd\u03c4\u03bf\u03c5\u03b9\u03c4\u03c2",GT:"\u0393\u03bf\u03c5\u03b1\u03c4\u03b5\u03bc\u03ac\u03bb\u03b1",GW:"\u0393\u03bf\u03c5\u03b9\u03bd\u03ad\u03b1-\u039c\u03c0\u03b9\u03c3\u03ac\u03bf\u03c5",
GY:"\u0393\u03bf\u03c5\u03b9\u03ac\u03bd\u03b1",HK:"\u03a7\u03bf\u03bd\u03b3\u03ba \u039a\u03bf\u03bd\u03b3\u03ba",HM:"\u039d\u03ae\u03c3\u03bf\u03c2 \u03a7\u03b5\u03c1\u03bd\u03c4 \u03ba\u03b1\u03b9 \u039d\u03ae\u03c3\u03bf\u03b9 \u039c\u03b1\u03ba\u03bd\u03c4\u03cc\u03bd\u03b1\u03bb\u03bd\u03c4",HN:"\u039f\u03bd\u03b4\u03bf\u03cd\u03c1\u03b1",HR:"\u039a\u03c1\u03bf\u03b1\u03c4\u03af\u03b1",HT:"\u0391\u03ca\u03c4\u03ae",HU:"\u039f\u03c5\u03b3\u03b3\u03b1\u03c1\u03af\u03b1",ID:"\u0399\u03bd\u03b4\u03bf\u03bd\u03b7\u03c3\u03af\u03b1",
IE:"\u0399\u03c1\u03bb\u03b1\u03bd\u03b4\u03af\u03b1",IL:"\u0399\u03c3\u03c1\u03b1\u03ae\u03bb",IM:"\u039d\u03b7\u03c3\u03af \u039c\u03b1\u03bd",IN:"\u0399\u03bd\u03b4\u03af\u03b1",IO:"\u0392\u03c1\u03b5\u03c4\u03b1\u03bd\u03b9\u03ba\u03cc \u03ad\u03b4\u03b1\u03c6\u03bf\u03c2 \u0399\u03bd\u03b4\u03b9\u03ba\u03bf\u03cd \u03a9\u03ba\u03b5\u03b1\u03bd\u03bf\u03cd",IQ:"\u0399\u03c1\u03ac\u03ba",IR:"\u0399\u03c3\u03bb\u03b1\u03bc\u03b9\u03ba\u03ae \u0394\u03b7\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1 \u03c4\u03bf\u03c5 \u0399\u03c1\u03ac\u03bd",
IS:"\u0399\u03c3\u03bb\u03b1\u03bd\u03b4\u03af\u03b1",IT:"\u0399\u03c4\u03b1\u03bb\u03af\u03b1",JE:"\u03a4\u03b6\u03ad\u03c1\u03c3\u03b5\u03ca",JM:"\u03a4\u03b6\u03b1\u03bc\u03ac\u03b9\u03ba\u03b1",JO:"\u0399\u03bf\u03c1\u03b4\u03b1\u03bd\u03af\u03b1",JP:"\u0399\u03b1\u03c0\u03c9\u03bd\u03af\u03b1",KE:"\u039a\u03ad\u03bd\u03c5\u03b1",KG:"\u039a\u03b9\u03c1\u03b3\u03b9\u03c3\u03c4\u03ac\u03bd",KH:"\u039a\u03b1\u03bc\u03c0\u03cc\u03c4\u03b6\u03b7",KI:"\u039a\u03b9\u03c1\u03b9\u03bc\u03c0\u03ac\u03c4\u03b9",
KM:"\u039a\u03bf\u03bc\u03cc\u03c1\u03b5\u03c2",KN:"\u03a3\u03b1\u03b9\u03bd\u03c4 \u039a\u03b9\u03c4\u03c2 \u03ba\u03b1\u03b9 \u039d\u03ad\u03b2\u03b9\u03c2",KP:"\u039b\u03b1\u03ca\u03ba\u03ae \u0394\u03b7\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1 \u03c4\u03b7\u03c2 \u039a\u03bf\u03c1\u03ad\u03b1\u03c2",KR:"\u0394\u03b7\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1 \u03c4\u03b7\u03c2 \u039a\u03bf\u03c1\u03ad\u03b1\u03c2",KW:"\u039a\u03bf\u03c5\u03b2\u03ad\u03b9\u03c4",KY:"\u039d\u03ae\u03c3\u03bf\u03b9 \u039a\u03ad\u03b9\u03bc\u03b1\u03bd",
KZ:"\u039a\u03b1\u03b6\u03b1\u03ba\u03c3\u03c4\u03ac\u03bd",LA:"\u039b\u03b1\u03ca\u03ba\u03ae \u0394\u03b7\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1 \u03c4\u03bf\u03c5 \u039b\u03ac\u03bf\u03c2",LB:"\u039b\u03af\u03b2\u03b1\u03bd\u03bf\u03c2",LC:"\u0391\u03b3\u03af\u03b1 \u039b\u03bf\u03c5\u03ba\u03af\u03b1",LI:"\u039b\u03b9\u03c7\u03c4\u03b5\u03bd\u03c3\u03c4\u03ac\u03b9\u03bd",LK:"\u03a3\u03c1\u03b9 \u039b\u03ac\u03bd\u03ba\u03b1",LR:"\u039b\u03b9\u03b2\u03b5\u03c1\u03af\u03b1",LS:"\u039b\u03b5\u03c3\u03cc\u03c4\u03bf",
LT:"\u039b\u03b9\u03b8\u03bf\u03c5\u03b1\u03bd\u03af\u03b1",LU:"\u039b\u03bf\u03c5\u03be\u03b5\u03bc\u03b2\u03bf\u03cd\u03c1\u03b3\u03bf",LV:"\u039b\u03b5\u03c4\u03bf\u03bd\u03af\u03b1",LY:"\u039b\u03b9\u03b2\u03cd\u03b7",MA:"\u039c\u03b1\u03c1\u03cc\u03ba\u03bf",MC:"\u039c\u03bf\u03bd\u03b1\u03ba\u03cc",MD:"\u0394\u03b7\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1 \u03c4\u03b7\u03c2 \u039c\u03bf\u03bb\u03b4\u03b1\u03b2\u03af\u03b1\u03c2",ME:"\u039c\u03b1\u03c5\u03c1\u03bf\u03b2\u03bf\u03cd\u03bd\u03b9\u03bf",
MF:"\u0386\u03b3\u03b9\u03bf\u03c2 \u039c\u03b1\u03c1\u03c4\u03af\u03bd\u03bf\u03c2 (\u0393\u03b1\u03bb\u03bb\u03b9\u03ba\u03cc \u03c4\u03bc\u03ae\u03bc\u03b1)",MG:"\u039c\u03b1\u03b4\u03b1\u03b3\u03b1\u03c3\u03ba\u03ac\u03c1\u03b7",MH:"\u039d\u03b7\u03c3\u03b9\u03ac \u039c\u03ac\u03c1\u03c3\u03b1\u03bb",MK:"\u03a0\u03c1\u03ce\u03b7\u03bd \u0393\u03b9\u03bf\u03c5\u03b3\u03ba\u03bf\u03c3\u03bb\u03b1\u03b2\u03b9\u03ba\u03ae \u0394\u03b7\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1 \u03c4\u03b7\u03c2 \u039c\u03b1\u03ba\u03b5\u03b4\u03bf\u03bd\u03af\u03b1\u03c2 (F.Y.R.O.M.)",
ML:"\u039c\u03ac\u03bb\u03b9",MM:"\u039c\u03b9\u03b1\u03bd\u03bc\u03ac\u03c1",MN:"\u039c\u03bf\u03b3\u03b3\u03bf\u03bb\u03af\u03b1",MO:"\u039c\u03b1\u03ba\u03ac\u03bf",MP:"\u039d\u03b7\u03c3\u03b9\u03ac \u0392\u03cc\u03c1\u03b5\u03b9\u03b5\u03c2 \u039c\u03b1\u03c1\u03b9\u03ac\u03bd\u03bd\u03b5\u03c2",MQ:"\u039c\u03b1\u03c1\u03c4\u03b9\u03bd\u03af\u03ba\u03b1",MR:"\u039c\u03b1\u03c5\u03c1\u03b9\u03c4\u03b1\u03bd\u03af\u03b1",MS:"\u039c\u03bf\u03bd\u03c3\u03b5\u03c1\u03ac\u03c4",MT:"\u039c\u03ac\u03bb\u03c4\u03b1",
MU:"\u039c\u03b1\u03c5\u03c1\u03af\u03ba\u03b9\u03bf\u03c2",MV:"\u039c\u03b1\u03bb\u03b4\u03af\u03b2\u03b5\u03c2",MW:"\u039c\u03b1\u03bb\u03ac\u03bf\u03c5\u03b9",MX:"\u039c\u03b5\u03be\u03b9\u03ba\u03cc",MY:"\u039c\u03b1\u03bb\u03b1\u03b9\u03c3\u03af\u03b1",MZ:"\u039c\u03bf\u03b6\u03b1\u03bc\u03b2\u03af\u03ba\u03b7",NA:"\u039d\u03b1\u03bc\u03af\u03bc\u03c0\u03b9\u03b1",NC:"\u039d\u03ad\u03b1 \u039a\u03b1\u03bb\u03b7\u03b4\u03bf\u03bd\u03af\u03b1",NE:"\u039d\u03af\u03b3\u03b7\u03c1\u03b1\u03c2",NG:"\u039d\u03b9\u03b3\u03b7\u03c1\u03af\u03b1",
NI:"\u039d\u03b9\u03ba\u03b1\u03c1\u03ac\u03b3\u03bf\u03c5\u03b1",NL:"\u039f\u03bb\u03bb\u03b1\u03bd\u03b4\u03af\u03b1",NO:"\u039d\u03bf\u03c1\u03b2\u03b7\u03b3\u03af\u03b1",NP:"\u039d\u03b5\u03c0\u03ac\u03bb",NR:"\u039d\u03b1\u03bf\u03cd\u03c1\u03bf\u03c5",NU:"\u039d\u03b9\u03bf\u03cd\u03b5",NZ:"\u039d\u03ad\u03b1 \u0396\u03b7\u03bb\u03b1\u03bd\u03b4\u03af\u03b1",OM:"\u039f\u03bc\u03ac\u03bd",PA:"\u03a0\u03b1\u03bd\u03b1\u03bc\u03ac\u03c2",PE:"\u03a0\u03b5\u03c1\u03bf\u03cd",PF:"\u0393\u03b1\u03bb\u03bb\u03b9\u03ba\u03ae \u03a0\u03bf\u03bb\u03c5\u03bd\u03b7\u03c3\u03af\u03b1",
PG:"\u03a0\u03b1\u03c0\u03bf\u03cd\u03b1 \u039d\u03ad\u03b1 \u0393\u03bf\u03c5\u03b9\u03bd\u03ad\u03b1",PH:"\u03a6\u03b9\u03bb\u03b9\u03c0\u03c0\u03af\u03bd\u03b5\u03c2",PK:"\u03a0\u03b1\u03ba\u03b9\u03c3\u03c4\u03ac\u03bd",PL:"\u03a0\u03bf\u03bb\u03c9\u03bd\u03af\u03b1",PM:"\u03a3\u03b5\u03bd \u03a0\u03b9\u03ad\u03c1 \u03ba\u03b1\u03b9 \u039c\u03b9\u03ba\u03b5\u03bb\u03cc\u03bd (\u039d\u03ae\u03c3\u03bf\u03b9 \u0391\u03b3\u03af\u03bf\u03c5 \u03a0\u03ad\u03c4\u03c1\u03bf\u03c5 \u03ba\u03b1\u03b9 \u039c\u03b9\u03c7\u03b1\u03ae\u03bb)",
PN:"\u039d\u03ae\u03c3\u03bf\u03b9 \u03a0\u03af\u03c4\u03ba\u03b5\u03c1\u03bd",PS:"\u039a\u03c1\u03ac\u03c4\u03bf\u03c2 \u03c4\u03b7\u03c2 \u03a0\u03b1\u03bb\u03b1\u03b9\u03c3\u03c4\u03af\u03bd\u03b7\u03c2",PT:"\u03a0\u03bf\u03c1\u03c4\u03bf\u03b3\u03b1\u03bb\u03af\u03b1",PW:"\u03a0\u03b1\u03bb\u03ac\u03bf\u03c5",PY:"\u03a0\u03b1\u03c1\u03b1\u03b3\u03bf\u03c5\u03ac\u03b7",QA:"\u039a\u03b1\u03c4\u03ac\u03c1",RE:"\u03a1\u03b5\u03ca\u03bd\u03b9\u03cc\u03bd",RO:"\u03a1\u03bf\u03c5\u03bc\u03b1\u03bd\u03af\u03b1",
RS:"\u03a3\u03b5\u03c1\u03b2\u03af\u03b1",RU:"\u03a1\u03c9\u03c3\u03b9\u03ba\u03ae \u039f\u03bc\u03bf\u03c3\u03c0\u03bf\u03bd\u03b4\u03af\u03b1",RW:"\u03a1\u03bf\u03c5\u03ac\u03bd\u03c4\u03b1",SA:"\u03a3\u03b1\u03bf\u03c5\u03b4\u03b9\u03ba\u03ae \u0391\u03c1\u03b1\u03b2\u03af\u03b1",SB:"\u039d\u03b7\u03c3\u03b9\u03ac \u03a3\u03bf\u03bb\u03bf\u03bc\u03ce\u03bd\u03c4\u03b1",SC:"\u03a3\u03b5\u03cb\u03c7\u03ad\u03bb\u03bb\u03b5\u03c2",SD:"\u03a3\u03bf\u03c5\u03b4\u03ac\u03bd",SE:"\u03a3\u03bf\u03c5\u03b7\u03b4\u03af\u03b1",
SG:"\u03a3\u03b9\u03b3\u03ba\u03b1\u03c0\u03bf\u03cd\u03c1\u03b7",SH:"\u039d\u03ae\u03c3\u03bf\u03b9 \u0391\u03b3\u03af\u03b1 \u0395\u03bb\u03ad\u03bd\u03b7, \u0391\u03c3\u03b5\u03bd\u03c3\u03b9\u03cc\u03bd \u03ba\u03b1\u03b9 \u03a4\u03c1\u03b9\u03c3\u03c4\u03ac\u03bd \u03bd\u03c4\u03b1 \u039a\u03bf\u03cd\u03bd\u03b9\u03b1",SI:"\u03a3\u03bb\u03bf\u03b2\u03b5\u03bd\u03af\u03b1",SJ:"\u0391\u03c1\u03c7\u03b9\u03c0\u03ad\u03bb\u03b1\u03b3\u03bf\u03c2 \u03a3\u03b2\u03ac\u03bb\u00b5\u03c0\u03b1\u03c1\u03bd\u03c4 \u03ba\u03b1\u03b9 \u039d\u03ae\u03c3\u03bf\u03c2 \u0393\u03b9\u03b1\u03bd \u039c\u03b1\u03b3\u03b9\u03ad\u03bd",
SK:"\u03a3\u03bb\u03bf\u03b2\u03b1\u03ba\u03af\u03b1",SL:"\u03a3\u03b9\u03ad\u03c1\u03b1 \u039b\u03b5\u03cc\u03bd\u03b5",SM:"\u0386\u03b3\u03b9\u03bf\u03c2 \u039c\u03b1\u03c1\u03af\u03bd\u03bf\u03c2",SN:"\u03a3\u03b5\u03bd\u03b5\u03b3\u03ac\u03bb\u03b7",SO:"\u03a3\u03bf\u03bc\u03b1\u03bb\u03af\u03b1",SR:"\u03a3\u03bf\u03c5\u03c1\u03b9\u03bd\u03ac\u03bc",SS:"\u039d\u03cc\u03c4\u03b9\u03bf \u03a3\u03bf\u03c5\u03b4\u03ac\u03bd",ST:"\u03a3\u03ac\u03bf \u03a4\u03bf\u03bc\u03ad \u03ba\u03b1\u03b9 \u03a0\u03c1\u03af\u03bd\u03c3\u03b9\u03c0\u03b5",
SV:"\u0395\u03bb \u03a3\u03b1\u03bb\u03b2\u03b1\u03b4\u03cc\u03c1",SX:"\u0386\u03b3\u03b9\u03bf\u03c2 \u039c\u03b1\u03c1\u03c4\u03af\u03bd\u03bf\u03c2 (\u039f\u03bb\u03bb\u03b1\u03bd\u03b4\u03b9\u03ba\u03cc \u03c4\u03bc\u03ae\u03bc\u03b1)",SY:"\u0391\u03c1\u03b1\u03b2\u03b9\u03ba\u03ae \u0394\u03b7\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1 \u03c4\u03b7\u03c2 \u03a3\u03c5\u03c1\u03af\u03b1\u03c2",SZ:"\u03a3\u03bf\u03c5\u03b1\u03b6\u03b9\u03bb\u03ac\u03bd\u03b4\u03b7",TC:"\u039d\u03b7\u03c3\u03b9\u03ac \u03a4\u03b1\u03c1\u03ba \u03ba\u03b1\u03b9 \u039a\u03ac\u03b9\u03ba\u03bf\u03c2",
TD:"\u03a4\u03c3\u03b1\u03bd\u03c4",TF:"\u0393\u03b1\u03bb\u03bb\u03b9\u03ba\u03ac \u039d\u03cc\u03c4\u03b9\u03b1 \u0395\u03b4\u03ac\u03c6\u03b7",TG:"\u03a4\u03cc\u03b3\u03ba\u03bf",TH:"\u03a4\u03b1\u03ca\u03bb\u03ac\u03bd\u03b4\u03b7",TJ:"\u03a4\u03b1\u03c4\u03b6\u03b9\u03ba\u03b9\u03c3\u03c4\u03ac\u03bd",TK:"\u03a4\u03bf\u03ba\u03b5\u03bb\u03ac\u03bf\u03c5",TL:"\u039b\u03b1\u03ca\u03ba\u03ae \u0394\u03b7\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1 \u03c4\u03bf\u03c5 \u0391\u03bd\u03b1\u03c4\u03bf\u03bb\u03b9\u03ba\u03bf\u03cd \u03a4\u03b9\u03bc\u03cc\u03c1",
TM:"\u03a4\u03bf\u03c5\u03c1\u03ba\u03bc\u03b5\u03bd\u03b9\u03c3\u03c4\u03ac\u03bd",TN:"\u03a4\u03c5\u03bd\u03b7\u03c3\u03af\u03b1",TO:"\u03a4\u03cc\u03bd\u03b3\u03ba\u03b1",TR:"\u03a4\u03bf\u03c5\u03c1\u03ba\u03af\u03b1",TT:"\u03a4\u03c1\u03b9\u03bd\u03b9\u03bd\u03c4\u03ac\u03bd\u03c4 \u03ba\u03b1\u03b9 \u03a4\u03bf\u03bc\u03c0\u03ac\u03b3\u03ba\u03bf",TV:"\u03a4\u03bf\u03c5\u03b2\u03b1\u03bb\u03bf\u03cd",TW:"\u03a4\u03b1\u03ca\u03b2\u03ac\u03bd, \u0395\u03c0\u03b1\u03c1\u03c7\u03af\u03b1 \u039a\u03af\u03bd\u03b1\u03c2",
TZ:"\u0397\u03bd\u03c9\u03bc\u03ad\u03bd\u03b7 \u0394\u03b7\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1 \u03c4\u03b7\u03c2 \u03a4\u03b1\u03bd\u03b6\u03b1\u03bd\u03af\u03b1\u03c2",UA:"\u039f\u03c5\u03ba\u03c1\u03b1\u03bd\u03af\u03b1",UG:"\u039f\u03c5\u03b3\u03ba\u03ac\u03bd\u03c4\u03b1",UM:"\u0391\u03c0\u03bf\u03bc\u03b1\u03ba\u03c1\u03c5\u03c3\u03bc\u03ad\u03bd\u03b5\u03c2 \u039d\u03b7\u03c3\u03af\u03b4\u03b5\u03c2 \u03c4\u03c9\u03bd \u0397\u03bd\u03c9\u03bc\u03ad\u03bd\u03c9\u03bd \u03a0\u03bf\u03bb\u03b9\u03c4\u03b5\u03b9\u03ce\u03bd",
US:"\u0397\u03bd\u03c9\u03bc\u03ad\u03bd\u03b5\u03c2 \u03a0\u03bf\u03bb\u03b9\u03c4\u03b5\u03af\u03b5\u03c2",UY:"\u039f\u03c5\u03c1\u03bf\u03c5\u03b3\u03bf\u03c5\u03ac\u03b7",UZ:"\u039f\u03c5\u03b6\u03bc\u03c0\u03b5\u03ba\u03b9\u03c3\u03c4\u03ac\u03bd",VA:"\u0392\u03b1\u03c4\u03b9\u03ba\u03b1\u03bd\u03cc (\u03a0\u03cc\u03bb\u03b7 \u03c4\u03bf\u03c5 \u0392\u03b1\u03c4\u03b9\u03ba\u03b1\u03bd\u03bf\u03cd)",VC:"\u0386\u03b3\u03b9\u03bf\u03c2 \u0392\u03b9\u03ba\u03ad\u03bd\u03c4\u03b9\u03bf\u03c2 \u03ba\u03b1\u03b9 \u0393\u03c1\u03b5\u03bd\u03b1\u03b4\u03af\u03bd\u03b5\u03c2",
VE:"\u0394\u03b7\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1 \u03c4\u03b7\u03c2 \u0392\u03b5\u03bd\u03b5\u03b6\u03bf\u03c5\u03ad\u03bb\u03b1\u03c2",VG:"\u0392\u03c1\u03b5\u03c4\u03b1\u03bd\u03b9\u03ba\u03ad\u03c2 \u03a0\u03b1\u03c1\u03b8\u03ad\u03bd\u03bf\u03b9 \u039d\u03ae\u03c3\u03bf\u03b9",VN:"\u0392\u03b9\u03b5\u03c4\u03bd\u03ac\u03bc",VU:"\u0392\u03b1\u03bd\u03bf\u03c5\u03ac\u03c4\u03bf\u03c5",WF:"\u039f\u03c5\u03cc\u03bb\u03b9\u03c2 \u03ba\u03b1\u03b9 \u03a6\u03bf\u03c5\u03c4\u03bf\u03cd\u03bd\u03b1",
WS:"\u03a3\u03b1\u03bc\u03cc\u03b1",XK:"\u0394\u03b7\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1 \u03c4\u03bf\u03c5 \u039a\u03bf\u03c3\u03c3\u03c5\u03c6\u03bf\u03c0\u03b5\u03b4\u03af\u03bf\u03c5",YE:"\u03a5\u03b5\u03bc\u03ad\u03bd\u03b7",YT:"\u039c\u03b1\u03b3\u03b9\u03cc\u03c4",ZA:"\u039d\u03cc\u03c4\u03b9\u03b1 \u0391\u03c6\u03c1\u03b9\u03ba\u03ae",ZM:"\u0396\u03ac\u03bc\u03c0\u03b9\u03b1",ZW:"\u0396\u03b9\u03bc\u03c0\u03ac\u03bc\u03c0\u03bf\u03c5\u03b5"}});