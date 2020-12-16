// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
var __extends=this&&this.__extends||function(){var g=function(l,n){g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,g){l.__proto__=g}||function(l,g){for(var n in g)g.hasOwnProperty(n)&&(l[n]=g[n])};return g(l,n)};return function(l,n){function v(){this.constructor=l}g(l,n);l.prototype=null===n?Object.create(n):(v.prototype=n.prototype,new v)}}();
define("esri/arcade/featureset/actions/Adapted","require exports ../../../graphic ../../kernel ../support/FeatureSet ../support/IdSet ../support/shared ../support/sqlUtils ../../polyfill/promiseUtils ../../polyfill/sql/WhereClause ../../../SpatialReference".split(" "),function(g,l,n,v,x,w,u,p,r,y,B){Object.defineProperty(l,"__esModule",{value:!0});g=function(){function g(){this.sqlRewritable=!1}g.prototype.postInitialization=function(e,a){};return g}();l.AdaptedField=g;var z=function(g){function e(a){var b=
g.call(this)||this;b.field=a;b.sqlRewritable=!0;return b}__extends(e,g);e.prototype.extractValue=function(a){return a.attributes[this.field.name]};e.prototype.rewriteSql=function(a){return{rewritten:this.sqlRewritable,where:a}};return e}(g);l.OriginalField=z;var A=function(g){function e(a,b,c){var f=g.call(this)||this;f.originalField=a;f.sqlRewritable=!0;f.field=u.cloneField(a);f.field.name=b;f.field.alias=c;return f}__extends(e,g);e.prototype.rewriteSql=function(a,b){return{rewritten:this.sqlRewritable,
where:p.reformulateWithoutField(a,this.field.name,this.originalField.name,b.getFieldsIndex())}};e.prototype.extractValue=function(a){return a.attributes[this.originalField.name]};return e}(g);l.FieldRename=A;var C=function(g){function e(a,b,c){var f=g.call(this)||this;f.field=a;f.codefield=b;f.lkp=c;f.reverseLkp={};for(var d in c)f.reverseLkp[c[d]]=d;f.sqlRewritable=!0;return f}__extends(e,g);e.prototype.rewriteSql=function(a,b){var c=this.evaluateNodeToWhereClause(a.parseTree,u.FeatureServiceDatabaseType.Standardised,
this.field.name,this.codefield instanceof y.WhereClause?p.toWhereClause(this.codefield,u.FeatureServiceDatabaseType.Standardised):this.codefield,a.parameters);return 0<=c.indexOf(e.BADNESS)?{rewritten:!1,where:a}:{rewritten:this.sqlRewritable,where:y.WhereClause.create(c,b._parent.getFieldsIndex())}};e.prototype.evaluateNodeToWhereClause=function(a,b,c,f,d){void 0===c&&(c=null);void 0===f&&(f=null);var k;switch(a.type){case "interval":return p.convertIntervalToSql(this.evaluateNodeToWhereClause(a.value,
b,c,f,d),a.qualifier,a.op);case "case_expression":k=" CASE ";"simple"===a.format&&(k+=this.evaluateNodeToWhereClause(a.operand,b,c,e.BADNESS,d));for(f=0;f<a.clauses.length;f++)k+=" WHEN "+this.evaluateNodeToWhereClause(a.clauses[f].operand,b,c,e.BADNESS,d)+" THEN "+this.evaluateNodeToWhereClause(a.clauses[f].value,b,c,e.BADNESS,d);null!==a.else&&(k+=" ELSE "+this.evaluateNodeToWhereClause(a.else,b,c,e.BADNESS,d));return k+" END ";case "param":c=d[a.value.toLowerCase()];if("string"===typeof c)return"'"+
d[a.value.toLowerCase()].toString().replace(/'/g,"''")+"'";if(c instanceof Date)return p.makeDateString(c,b);if(c instanceof Array){a=[];for(f=0;f<c.length;f++)"string"===typeof c[f]?a.push("'"+c[f].toString().replace(/'/g,"''")+"'"):c[f]instanceof Date?a.push(p.makeDateString(c[f],b)):a.push(c[f].toString());return a}return c.toString();case "expr_list":k=[];var q=0;for(a=a.value;q<a.length;q++)k.push(this.evaluateNodeToWhereClause(a[q],b,c,f,d));return k;case "unary_expr":return" ( NOT "+this.evaluateNodeToWhereClause(a.expr,
b,c,e.BADNESS,d)+" ) ";case "binary_expr":switch(a.operator){case "AND":return" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,d)+" AND "+this.evaluateNodeToWhereClause(a.right,b,c,f,d)+") ";case "OR":return" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,d)+" OR "+this.evaluateNodeToWhereClause(a.right,b,c,f,d)+") ";case "IS":if("null"!==a.right.type)throw Error("Unsupported RHS for IS");return" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,d)+" IS NULL )";case "ISNOT":if("null"!==a.right.type)throw Error("Unsupported RHS for IS");
return" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,d)+" IS NOT NULL )";case "IN":k=[];if("expr_list"===a.right.type){if("column_ref"===a.left.type&&a.left.column.toUpperCase()===this.field.name.toUpperCase()){k=[];for(var q=!0,g=0,h=a.right.value;g<h.length;g++){var m=h[g];if("string"===m.type)if(void 0!==this.lkp[m.value])k.push(this.lkp[m.value].toString());else{q=!1;break}else{q=!1;break}}if(q)return" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,d)+" IN ("+k.join(",")+")) "}k=this.evaluateNodeToWhereClause(a.right,
b,c,f,d);return" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,d)+" IN ("+k.join(",")+")) "}k=this.evaluateNodeToWhereClause(a.right,b,c,f,d);return k instanceof Array?" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,d)+" IN ("+k.join(",")+")) ":" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,d)+" IN ("+k+")) ";case "NOT IN":k=[];if("expr_list"===a.right.type){if("column_ref"===a.left.type&&a.left.column.toUpperCase()===this.field.name.toUpperCase()){k=[];q=!0;g=0;for(h=a.right.value;g<h.length;g++)if(m=
h[g],"string"===m.type)if(void 0!==this.lkp[m.value])k.push(this.lkp[m.value].toString());else{q=!1;break}else{q=!1;break}if(q)return" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,d)+" NOT IN ("+k.join(",")+")) "}k=this.evaluateNodeToWhereClause(a.right,b,c,f,d);return" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,d)+" NOT IN ("+k.join(",")+")) "}k=this.evaluateNodeToWhereClause(a.right,b,c,f,d);return k instanceof Array?" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,d)+" NOT IN ("+k.join(",")+
")) ":" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,d)+" NOT IN ("+k+")) ";case "BETWEEN":return f=this.evaluateNodeToWhereClause(a.right,b,c,e.BADNESS,d)," ("+this.evaluateNodeToWhereClause(a.left,b,c,e.BADNESS,d)+" BETWEEN "+f[0]+" AND "+f[1]+" ) ";case "NOTBETWEEN":return f=this.evaluateNodeToWhereClause(a.right,b,c,e.BADNESS,d)," ("+this.evaluateNodeToWhereClause(a.left,b,c,e.BADNESS,d)+" NOT BETWEEN "+f[0]+" AND "+f[1]+" ) ";case "LIKE":return""!==a.escape?" ("+this.evaluateNodeToWhereClause(a.left,
b,c,e.BADNESS,d)+" LIKE "+this.evaluateNodeToWhereClause(a.right,b,c,e.BADNESS,d)+" ESCAPE '"+a.escape+"') ":" ("+this.evaluateNodeToWhereClause(a.left,b,c,e.BADNESS,d)+" LIKE "+this.evaluateNodeToWhereClause(a.right,b,c,e.BADNESS,d)+") ";case "NOT LIKE":return""!==a.escape?" ("+this.evaluateNodeToWhereClause(a.left,b,c,e.BADNESS,d)+" NOT LIKE "+this.evaluateNodeToWhereClause(a.right,b,c,e.BADNESS,d)+" ESCAPE '"+a.escape+"') ":" ("+this.evaluateNodeToWhereClause(a.left,b,c,e.BADNESS,d)+" NOT LIKE "+
this.evaluateNodeToWhereClause(a.right,b,c,e.BADNESS,d)+") ";case "\x3c\x3e":case "\x3d":if("column_ref"===a.left.type&&"string"===a.right.type){if(a.left.column.toUpperCase()===this.field.name.toUpperCase()&&void 0!==this.lkp[a.right.value.toString()])return" ("+f+" "+a.operator+" "+this.lkp[a.right.value.toString()].toString()+") "}else if("column_ref"===a.right.type&&"string"===a.left.type&&a.right.column.toUpperCase()===this.field.name.toUpperCase())return" ("+this.lkp[a.right.value.toString()].toString()+
" "+a.operator+" "+f+") ";return" ("+this.evaluateNodeToWhereClause(a.left,b,c,e.BADNESS,d)+" "+a.operator+" "+this.evaluateNodeToWhereClause(a.right,b,c,e.BADNESS,d)+") ";case "\x3c":case "\x3e":case "\x3e\x3d":case "\x3c\x3d":case "*":case "-":case "+":case "/":return" ("+this.evaluateNodeToWhereClause(a.left,b,c,e.BADNESS,d)+" "+a.operator+" "+this.evaluateNodeToWhereClause(a.right,b,c,e.BADNESS,d)+") "}throw Error("Not Supported Operator "+a.operator);case "null":return"null";case "bool":return!0===
a.value?"1":"0";case "string":return"'"+a.value.toString().replace(/'/g,"''")+"'";case "timestamp":return p.makeDateString(a.value,b);case "date":return p.makeDateString(a.value,b);case "number":return a.value.toString();case "current_time":return p.makeToday("date"===a.mode,b);case "column_ref":return c&&c.toLowerCase()===a.column.toLowerCase()?"("+f+")":a.column;case "function":return d=this.evaluateNodeToWhereClause(a.args,b,c,e.BADNESS,d),p.translateFunctionToDatabaseSpecific(a.name,d,b)}throw Error("Unsupported sql syntax "+
a.type);};e.prototype.extractValue=function(a){return this.codefield instanceof y.WhereClause?this.reverseLkp[this.codefield.calculateValueCompiled(a)]:this.reverseLkp[a.attributes[this.codefield]]};e.BADNESS="_!!!_BAD_LKP_!!!!";return e}(g);l.StringToCodeAdapted=C;g=function(g){function e(a,b){var c=g.call(this)||this;c.field=a;c.sql=b;return c}__extends(e,g);e.prototype.rewriteSql=function(a,b){return{rewritten:!0,where:p.reformulateWithoutField(a,this.field.name,p.toWhereClause(this.sql,u.FeatureServiceDatabaseType.Standardised),
b.getFieldsIndex())}};e.prototype.extractValue=function(a){return this.sql.calculateValueCompiled(a)};return e}(g);l.SqlExpressionAdapted=g;x=function(g){function e(a){var b=g.call(this,a)||this;b._calcFunc=null;b.declaredClass="esri.arcade.featureset.actions.Adapted";b.adaptedFields=null;b._extraFilter=null;b._extraFilter=a.extraFilter;b._parent=a.parentfeatureset;b._maxProcessing=30;b.adaptedFields=a.adaptedFields;return b}__extends(e,g);e.findField=function(a,b){for(var c=0;c<a.length;c++){var f=
a[c];if(f.name.toLowerCase()===b.toString().toLowerCase())return f}return null};e.prototype._initialiseFeatureSet=function(){null!==this._parent?(this.geometryType=this._parent.geometryType,this.objectIdField=this._parent.objectIdField,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField=this._parent.typeIdField,this.types=this._parent.types):(this.spatialReference=new B({wkid:4326}),this.objectIdField="",this.geometryType=u.layerGeometryEsriConstants.point,
this.typeIdField="",this.types=null);this.fields=[];for(var a=0,b=this.adaptedFields;a<b.length;a++){var c=b[a];c.postInitialization(this,this._parent);this.fields.push(c.field)}};e.prototype._getSet=function(a){var b=this;return null===this._wset?this._ensureLoaded().then(function(){return b._extraFilter?b._getFilteredSet("",null,null,null,a):b._parent._getSet(a)}).then(function(c){b._checkCancelled(a);b._wset=new w(c._candidates.slice(0),c._known.slice(0),c._ordered,b._clonePageDefinition(c.pagesDefinition));
return b._wset}):r.resolve(this._wset)};e.prototype._isInFeatureSet=function(a){return this._parent._isInFeatureSet(a)};e.prototype._getFeatures=function(a,b,c,f){var d=this,e=[];-1!==b&&void 0===this._featureCache[b]&&e.push(b);var g=this._maxQueryRate();if(!0===this._checkIfNeedToExpandKnownPage(a,g))return this._expandPagedSet(a,g,0,0,f).then(function(){return d._getFeatures(a,b,c,f)});for(var t=0,h=a._lastFetchedIndex;h<a._known.length&&!(t++,t<=c&&(a._lastFetchedIndex+=1),void 0===this._featureCache[a._known[h]]&&
(a._known[h]!==b&&e.push(a._known[h]),e.length>=g-1));h++);if(0===e.length)return r.resolve("success");a=new w([],e,a._ordered,null);var m=Math.min(e.length,c);return this._parent._getFeatures(a,-1,m,f).then(function(){d._checkCancelled(f);for(var a=[],b=0;b<m;b++){var c=d._parent._featureFromCache(e[b]);void 0!==c&&a.push({geometry:c.geometry,attributes:c.attributes,id:e[b]})}for(b=0;b<a.length;b++){for(var c=a[b],g=[],k=0,h=d.adaptedFields;k<h.length;k++){var q=h[k];g[q.field.name]=q.extractValue(c)}d._featureCache[c.id]=
new n({attributes:g,geometry:v.cloneGeometry(c.geometry)})}return"success"})};e.prototype._fetchAndRefineFeatures=function(){return r.reject(Error("Fetch and Refine should not be called in this featureset"))};e.prototype._getFilteredSet=function(a,b,c,f,d){var e=this,g=!1,t=this.reformulateWithoutAdaptions(c),g=t.cannot;c=t.where;var h=!1;if(null!==f){for(var h=!0,t=[],m=0,l=this.adaptedFields;m<l.length;m++){var n=l[m];if(!(n instanceof z)&&!0===f.scanForField(n.field.name))if(n instanceof A)t.push({field:n.field.name,
newfield:n.originalField.name});else{f=null;h=!1;break}}f&&0<t.length&&(f=f.replaceFields(t))}null!==c?null!==this._extraFilter&&(c=p.combine(this._extraFilter,c)):c=this._extraFilter;return this._ensureLoaded().then(function(){return e._parent._getFilteredSet(a,b,c,f,d)}).then(function(a){e._checkCancelled(d);return!0===g?new w(a._candidates.slice(0).concat(a._known.slice(0)),[],!0===h?a._ordered:!1,e._clonePageDefinition(a.pagesDefinition)):new w(a._candidates.slice(0),a._known.slice(0),!0===h?
a._ordered:!1,e._clonePageDefinition(a.pagesDefinition))})};e.prototype.reformulateWithoutAdaptions=function(a){var b={cannot:!1,where:a};if(null!==a)for(var c=0,f=this.adaptedFields;c<f.length;c++){var d=f[c];if(!0===p.scanForField(a,d.field.name))if(d=d.rewriteSql(a,this),!0===d.rewritten)b.where=d.where;else{b.cannot=!0;b.where=null;break}}return b};e.prototype._stat=function(a,b,c,f,d,e,g){var k=this,h=!1,m=this.reformulateWithoutAdaptions(b),h=m.cannot;b=m.where;m=this.reformulateWithoutAdaptions(d);
h=h||m.cannot;d=m.where;null!==d?null!==this._extraFilter&&(d=p.combine(this._extraFilter,d)):d=this._extraFilter;return!0===h?null===d&&""===c&&null===f?this._manualStat(a,b,e,g):r.resolve({calculated:!1}):this._parent._stat(a,b,c,f,d,e,g).then(function(h){return!1===h.calculated?null===d&&""===c&&null===f?k._manualStat(a,b,e,g):{calculated:!1}:h})};e.prototype._canDoAggregates=function(a,b,c,f,d){if(null===this._parent)return r.resolve(!1);for(var e=0;e<a.length;e++)for(var g=0,l=this.adaptedFields;g<
l.length;g++){var h=l[g];if(a[e].toLowerCase()===h.field.name.toLowerCase()&&!(h instanceof z))return r.resolve(!1)}g=[];for(e=0;e<b.length;e++){h=b[e];if(null!==h.workingexpr){l=this.reformulateWithoutAdaptions(h.workingexpr);if(l.cannot)return r.resolve(!1);h=h.clone();h.workingexpr=l.where}g.push(h)}b=this.reformulateWithoutAdaptions(d);if(b.cannot)return r.resolve(!1);d=b.where;null!==d?null!==this._extraFilter&&(d=p.combine(this._extraFilter,d)):d=this._extraFilter;return this._parent._canDoAggregates(a,
g,c,f,d)};e.prototype._getAggregatePagesDataSourceDefinition=function(a,b,c,f,d,e,g){if(null===this._parent)return r.reject(Error("Should never be called"));for(var k=[],h=0;h<b.length;h++){var m=b[h];if(null!==m.workingexpr){var l=this.reformulateWithoutAdaptions(m.workingexpr);if(l.cannot)return r.reject(Error("Should never be called"));m=m.clone();m.workingexpr=l.where}k.push(m)}b=this.reformulateWithoutAdaptions(d);if(b.cannot)return r.reject(Error("Should never be called"));d=b.where;null!==
d?null!==this._extraFilter&&(d=p.combine(this._extraFilter,d)):d=this._extraFilter;return this._parent._getAggregatePagesDataSourceDefinition(a,k,c,f,d,e,g)};return e}(x);l.AdaptedFeatureSet=x});