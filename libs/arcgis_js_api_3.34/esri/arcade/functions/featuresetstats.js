// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/arcade/functions/featuresetstats","require exports ../languageUtils ./fieldStats ../polyfill/promiseUtils ../polyfill/sql/WhereClause".split(" "),function(r,m,f,k,g,n){function h(b,d,c,a,l,e){if(1===a.length){if(f.isArray(a[0]))return g.resolve(k.calculateStat(b,a[0],f.defaultUndefined(a[1],-1)));if(f.isImmutableArray(a[0]))return g.resolve(k.calculateStat(b,a[0].toArray(),f.defaultUndefined(a[1],-1)))}else if(2===a.length){if(f.isArray(a[0]))return g.resolve(k.calculateStat(b,a[0],f.defaultUndefined(a[1],
-1)));if(f.isImmutableArray(a[0]))return g.resolve(k.calculateStat(b,a[0].toArray(),f.defaultUndefined(a[1],-1)));if(f.isFeatureSet(a[0]))return a[0].load().then(function(c){return p(n.WhereClause.create(a[1],c.getFieldsIndex()),e,l).then(function(e){return a[0].calculateStatistic(b,e,f.defaultUndefined(a[2],1E3),d.abortSignal)})})}else if(3===a.length&&f.isFeatureSet(a[0]))return a[0].load().then(function(c){return p(n.WhereClause.create(a[1],c.getFieldsIndex()),e,l).then(function(e){return a[0].calculateStatistic(b,
e,f.defaultUndefined(a[2],1E3),d.abortSignal)})});return g.resolve(k.calculateStat(b,a,-1))}function p(b,d,c){try{var a=b.getVariables();if(0<a.length){for(var l=[],e=0;e<a.length;e++)l.push(d.evaluateIdentifier(c,{name:a[e]}));return g.all(l).then(function(e){for(var d={},c=0;c<a.length;c++)d[a[c]]=e[c];b.parameters=d;return b})}return g.resolve(b)}catch(q){return g.reject(q)}}Object.defineProperty(m,"__esModule",{value:!0});m.registerFunctions=function(b){"async"===b.mode&&(b.functions.stdev=function(d,
c){return b.standardFunctionAsync(d,c,function(a,c,e){return h("stdev",a,c,e,d,b)})},b.functions.variance=function(d,c){return b.standardFunctionAsync(d,c,function(a,c,e){return h("variance",a,c,e,d,b)})},b.functions.average=function(d,c){return b.standardFunctionAsync(d,c,function(a,c,e){return h("mean",a,c,e,d,b)})},b.functions.mean=function(d,c){return b.standardFunctionAsync(d,c,function(a,c,e){return h("mean",a,c,e,d,b)})},b.functions.sum=function(d,c){return b.standardFunctionAsync(d,c,function(a,
c,e){return h("sum",a,c,e,d,b)})},b.functions.min=function(d,c){return b.standardFunctionAsync(d,c,function(a,c,e){return h("min",a,c,e,d,b)})},b.functions.max=function(d,c){return b.standardFunctionAsync(d,c,function(a,c,e){return h("max",a,c,e,d,b)})},b.functions.count=function(d,c){return b.standardFunctionAsync(d,c,function(a,c,b){f.pcCheck(b,1,1);if(f.isFeatureSet(b[0]))return b[0].count(a.abortSignal);if(f.isArray(b[0])||f.isString(b[0]))return b[0].length;if(f.isImmutableArray(b[0]))return b[0].length();
throw Error("Invalid Parameters for Count");})})}});