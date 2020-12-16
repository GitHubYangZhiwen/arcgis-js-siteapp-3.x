// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/function/LocalFunction","dojo/_base/declare dojo/_base/lang ./RasterFunctionX ../../PixelBlock ./pixelShaders ./RasterFunctionWebGLMixin ./rasterUtils".split(" "),function(k,h,l,p,m,n,g){return k([l,n],{declaredClass:"esri.layers.rasterLib.function.LocalFunction",functionName:"Local",supportWebGL:!0,support2D:!0,constructor:function(a){this.functionArguments=this.mixinIgnoreCase({operation:null,rasters:null},a)},bind:function(a){a=this.getSourceRasterInfo(a);var b=0;
a.raster?b=a.raster.bandCount:a.rasters&&(b=Math.max.apply(null,a.rasters.map(function(a){return a.bandCount})));if(0===b)return Error("The raster input to local function is invalid. It only takes single band input.");a=a.raster||a.rasters.filter(function(a){return!!a.extent})[0];this.rasterInfo=h.mixin(a,{bandCount:1,pixelType:this._calculatePixelType(this.pixelType,"F32"),statistics:null,histograms:null});this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{};this.rasterInfo.keyProperties.DataType=
"Generic";return!0},read2D:function(a){var b=[],b=a.raster?a.raster2?[a.raster,a.raster2]:[a.raster]:a.rasters;a=b.map(function(a){return a.pixelBlock});var c=this.functionArguments.operation;if(null===c)return b[0];this._performance.start();var e=this._getOperations(),d=e.operators[c-1],e=e.functors[c-1];if(!this.functionArguments.rasters){if(1!==d)throw"no sufficient rasters, require "+d;}else if(999!==d&&this.functionArguments.rasters.length!==d)throw"number of rasters does not meet (short or exceed) the operation requirment, require "+
d;var f;f=31===c?g.isNull(a[0]):50===c?g.setNull(a[0]):g.local(a,{rasterCountNeeded:d,functor:e});"Unknown"!==this.pixelType&&(f.pixelType=this.pixelType,f.pixels=f.pixels.map(h.hitch(this,function(a){return this._clampBand(a,f.pixelType)})));f.statistics||f.calculateStatistics();return{extent:b[0].extent,pixelBlock:f}},readGL:function(a){this._performance.start();var b=this.functionArguments.operation,c=this._getWebGLOperations(),e=c.operators[b-1],d=m.local,c="result\x3d"+c.functors[b-1]+";";31!==
b&&50!==b&&(c+="result \x3d vec4(result.rgb, a.a);");var d=d.replace("vec4 replaceme"+e+";",c),c=this.gl.getParameter(this.gl.VERSION),f="";if(-1<c.toLowerCase().indexOf("webgl 1.0")||-1<c.toLowerCase().indexOf("webgl 0."))f=this._getPolyfill(b);d=d.replace("vec4 polyfill;",f);1<e&&(d=d.replace("gl_FragColor \x3d localOp1();","gl_FragColor \x3d localOp1();".replace("1",e.toString())));this._initializeProgram({fragment:d,fragmentName:"Local"});b=a.rasters;if(null!=b&&0!==b.length){for(var b=b.length,
g,c=this.bindFrameBuffer(),e=0;e<b;e++)d=0<e?e.toString():"",g=this._setupTextureData(a.rasters[e],{reCreate:!0}),this._bindTexture(g.texture,"u_image"+d);this._setUniforms({});this._drawGL();this._addPerformanceMetric(this._performance.elapsed());return{extent:g.extent,texture:c.texture}}},_getOperations:function(){return{operators:[2,2,2,1,2,1,1,1,1,1,2,2,1,2,2,2,2,1,2,2,1,1,2,2,1,1,1,2,2,1,1,1,2,2,1,1,1,999,999,999,999,999,999,2,1,2,999,1,1,1,1,1,1,999,999,1,1,999,1,1,2,2,2,999,999,999,999,999,
999,999,999,999,999,3],functors:[function(a,b){return a+b},function(a,b){return a-b},function(a,b){return a*b},function(a){return Math.sqrt(a)},function(a,b){return Math.pow(a,b)},function(a){return Math.acos(a)},function(a){return Math.asin(a)},function(a){return Math.atan(a)},function(a){return Math.atanh(a)},function(a){return Math.abs(a)},function(a,b){return a&b},function(a,b){return a<<b},function(a){return~a},function(a,b){return a|b},function(a,b){return a>>b},function(a,b){return a^b},function(a,
b){return a&&b},function(a){return!a},function(a,b){return a||b},function(a,b){return a!=b},function(a){return Math.cos(a)},function(a,b){return Math.cosh(a)},function(a,b){return a/b},function(a,b){return a==b},function(a){return Math.exp(a)},function(a){return Math.pow(10,a)},function(a){return Math.pow(2,a)},function(a,b){return a>b?1:0},function(a,b){return a>=b?1:0},function(a,b){return Math.floor(a)},function(a){return!a},function(a){return a},function(a,b){return a<b?1:0},function(a,b){return a<=
b?1:0},function(a){return Math.log(a)},function(a,b){return Math.log10(a)},function(a,b){return Math.log2(a)},999,999,999,999,999,999,function(a,b){return a%b},function(a){return-a},function(a,b){return a!=b?1:0},999,function(a,b){return Math.floor(a)},function(a,b){return Math.ceil(a)},function(a,b){return b?0:a},function(a,b){return Math.sin(a)},function(a,b){return Math.sinh(a)},function(a,b){return a*a},999,999,function(a){return Math.tan(a)},function(a){return Math.tanh(a)},999,function(a){return Math.acosh(a)},
function(a){return Math.asinh(a)},function(a,b){return Math.atan2(a,b)},function(a,b){return a/b},function(a,b){return Math.floor(a/b)},999,999,999,999,999,999,999,999,999,999,function(a,b,c){return a?b:c}]}},_polyfill:{sinh:"vec4 sinh(vec4 x) {\nvec4 halfexp \x3d exp(x)/2.0;\nreturn halfexp - 1.0/halfexp;\n}",asinh:"vec4 asinh(vec4 x) {\nvec4 halfexp \x3d exp(x)/2.0;\nreturn 1.0/(halfexp - 1.0/halfexp);\n}",cosh:"vec4 cosh(vec4 x) {\nvec4 halfexp \x3d exp(x)/2.0;\nreturn halfexp + 1.0/halfexp;\n}",
acosh:"vec4 acosh(vec4 x) {\nvec4 halfexp \x3d exp(x)/2.0;\nreturn 1.0/(halfexp + 1.0/halfexp);\n}",tanh:"vec4 tanh(vec4 x) {\nvec4 expx \x3d exp(x);\nreturn (expx - 1.0/expx)/(expx + 1.0/expx);\n}",atanh:"vec4 atanh(vec4 x) {\nvec4 expx \x3d exp(x);\nreturn (expx + 1.0/expx)/(expx - 1.0/expx);\n}"},_getPolyfill:function(a){var b="";switch(a){case 9:b=this._polyfill.atanh;break;case 22:b=this._polyfill.cosh;break;case 52:b=this._polyfill.sinh;break;case 57:b=this._polyfill.tanh;break;case 59:b=this._polyfill.acosh;
break;case 60:b=this._polyfill.asinh}return b},_getWebGLOperations:function(){return{operators:[2,2,2,1,2,1,1,1,1,1,2,2,1,2,2,2,2,1,2,2,1,1,2,2,1,1,1,2,2,1,1,1,2,2,1,1,1,999,999,999,999,999,999,2,1,2,999,1,1,1,1,1,1,999,999,1,1,999,1,1,2,2,2,999,999,999,999,999,999,999,999,999,999,3],functors:["(a + b)","(a - b)","(a * b)","sqrt(a)","pow(a, b)","acos(a)","asin(a)","atan(a)","atanh(a)","abs(a)","a","a","a","a","a","a","(a.r\x3d\x3d0.0 || b.r\x3d\x3d0.0) ? vec4(0.0,0.0,0.0,a.a) : vec4(1.0,1.0,1.0,a.a)",
"a.r\x3d\x3d0.0?vec4(1.0,1.0,1.0,a.a) : vec4(0.0,0.0,0.0,a.a)","(a.r\x3d\x3d0.0 \x26\x26 b.r\x3d\x3d0.0) ? vec4(0.0,0.0,0.0,a.a) : vec4(1.0,1.0,1.0,a.a)","(a.r\x3d\x3d0.0 ^^ b.r\x3d\x3d0.0) ? vec4(1.0,1.0,1.0,a.a) : vec4(0.0,0.0,0.0,a.a)","cos(a)","cosh(a)","a / b","a.r \x3d\x3d b.r? vec4(1.0,1.0,1.0,a.a) : vec4(0.0,0.0,0.0,a.a)","exp(a)","pow(10.0, a)","pow(2.0, a)","a.r \x3e b.r ? vec4(1.0,1.0,1.0,a.a) : vec4(0.0,0.0,0.0,a.a)","a.r \x3e\x3d b.r ? vec4(1.0,1.0,1.0,a.a) : vec4(0.0,0.0,0.0,a.a)","floor(a)",
"a.a \x3d\x3d 0.0? vec4(1.0,1.0,1.0,1.0) : vec4(0.0,0.0,0.0,1.0)","a","a.r \x3c b.r ? vec4(1.0,1.0,1.0,a.a) : vec4(0.0,0.0,0.0,a.a)","a.r \x3c\x3d b.r ? vec4(1.0,1.0,1.0,a.a) : vec4(0.0,0.0,0.0,a.a)","log(a)","log2(a) / log2(10.0)","log2(a)",999,999,999,999,999,999,"mod(a, b)","-a","a.r !\x3d b.r ? vec4(1.0,1.0,1.0,a.a) : vec4(0.0,0.0,0.0,a.a)",999,"floor(a)","ceil(a)","a.r !\x3d 0.0 ? vec4(0.0,0.0,0.0,0.0) : a","sin(a)","sinh(a)","a * a",999,999,"tan(a)","tanh(a)",999,"acosh(a)","asinh(a)","atan(a, b)",
"a / b","floor(a / b)",999,999,999,999,999,999,999,999,999,999,"a.r!\x3d0 ? b : c"]}}})});