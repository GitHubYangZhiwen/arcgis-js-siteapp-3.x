// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/arcade/treeAnalysis",["require","exports"],function(E,m){function r(a,b){return"0"!==a.min&&b.length<Number(a.min)||"*"!==a.max&&b.length>Number(a.max)?-2:1}function v(a,b,c){if(null!==c.localScope&&void 0!==c.localScope[a.toLowerCase()]){var d=c.localScope[a.toLowerCase()];if("FormulaFunction"===d.type||"any"===d.type)return void 0===d.signature&&(d.signature={min:"0",max:"*"}),r(d.signature,b)}return void 0!==c.globalScope[a.toLowerCase()]&&(d=c.globalScope[a.toLowerCase()],"FormulaFunction"===
d.type||"any"===d.type)?(void 0===d.signature&&(d.signature={min:"0",max:"*"}),r(d.signature,b)):-1}function q(a,b){if(a)for(var c=0;c<a.length;c++)e(a[c],b)}function e(a,b){if(a&&!1!==b(a))switch(a.type){case "ArrayExpression":q(a.elements,b);break;case "AssignmentExpression":case "BinaryExpression":e(a.left,b);e(a.right,b);break;case "BlockStatement":q(a.body,b);break;case "CallExpression":e(a.callee,b);q(a.arguments,b);break;case "ConditionalExpression":e(a.test,b);e(a.alternate,b);e(a.consequent,
b);break;case "DoWhileStatement":e(a.test,b);e(a.body,b);break;case "ExpressionStatement":e(a.expression,b);break;case "ForInStatement":e(a.left,b);e(a.right,b);e(a.body,b);break;case "ForStatement":e(a.init,b);e(a.test,b);e(a.update,b);e(a.body,b);break;case "FunctionDeclaration":case "FunctionDeclaration":case "FunctionExpression":e(a.id,b);q(a.params,b);e(a.body,b);break;case "IfStatement":e(a.test,b);e(a.consequent,b);e(a.alternate,b);break;case "LogicalExpression":e(a.left,b);e(a.right,b);break;
case "MemberExpression":e(a.object,b);e(a.property,b);break;case "NewExpression":e(a.callee,b);q(a.arguments,b);break;case "ObjectExpression":q(a.properties,b);break;case "Program":q(a.body,b);break;case "Property":e(a.key,b);e(a.value,b);break;case "ReturnStatement":e(a.argument,b);break;case "UnaryExpression":e(a.argument,b);break;case "UpdateExpression":e(a.argument,b);break;case "VariableDeclaration":q(a.declarations,b);break;case "VariableDeclarator":e(a.id,b);e(a.init,b);break;case "TemplateLiteral":q(a.expressions,
b),q(a.quasis,b)}}function h(a,b){void 0===b&&(b=!0);var c=k(a,"SYNTAX","UNREOGNISED");try{switch(a.type){case "VariableDeclarator":return null!==a.init&&"FunctionExpression"===a.init.type?k(a,"SYNTAX","FUNCTIONVARIABLEDECLARATOR"):"Identifier"!==a.id.type?k(a,"SYNTAX","VARIABLEMUSTHAVEIDENTIFIER"):null!==a.init?h(a.init,!1):"";case "VariableDeclaration":for(var d=0;d<a.declarations.length;d++)if(c=h(a.declarations[d],b),""!==c)return c;return"";case "ForInStatement":c=h(a.left,b);if(""!==c)break;
if("VariableDeclaration"===a.left.type){if(1<a.left.declarations.length)return k(a,"SYNTAX","ONLY1VAR");if(null!==a.left.declarations[0].init)return k(a,"SYNTAX","CANNOTDECLAREVAL")}else if("Identifier"!==a.left.type)return k(a,"SYNTAX","LEFTNOTVAR");c=h(a.right,b);if(""!==c)break;c=h(a.body,b);if(""!==c)break;return"";case "ForStatement":if(null!==a.test&&(c=h(a.test,b),""!==c))break;if(null!==a.init&&(c=h(a.init,b),""!==c))break;if(null!==a.update&&(c=h(a.update,b),""!==c))break;if(null!==a.body&&
(c=h(a.body,b),""!==c))break;return"";case "ContinueStatement":return"";case "EmptyStatement":return"";case "BreakStatement":return"";case "IfStatement":c=h(a.test,b);if(""!==c)break;if(null!==a.consequent&&(c=h(a.consequent,!1),""!==c))break;if(null!==a.alternate&&(c=h(a.alternate,!1),""!==c))break;return"";case "BlockStatement":for(var f=[],d=0;d<a.body.length;d++)"EmptyStatement"!==a.body[d].type&&f.push(a.body[d]);a.body=f;for(d=0;d<a.body.length;d++)if(c=h(a.body[d],b),""!==c)return c;return"";
case "FunctionDeclaration":return!1===b?k(a,"SYNTAX","GLOBALFUNCTIONSONLY"):"Identifier"!==a.id.type?k(a,"SYNTAX","FUNCTIONMUSTHAVEIDENTIFIER"):h(a.body,!1);case "ReturnStatement":return null!==a.argument?h(a.argument,b):"";case "UpdateExpression":return"Identifier"!==a.argument.type&&"MemberExpression"!==a.argument.type?k(a,"SYNTAX","ASSIGNMENTTOVARSONLY"):h(a.argument,b);case "AssignmentExpression":if("Identifier"!==a.left.type&&"MemberExpression"!==a.left.type)return k(a,"SYNTAX","ASSIGNMENTTOVARSONLY");
c=h(a.left,b);if(""!==c)break;switch(a.operator){case "\x3d":case "/\x3d":case "*\x3d":case "%\x3d":case "+\x3d":case "-\x3d":break;default:return k(a,"SYNTAX","OPERATORNOTRECOGNISED")}return h(a.right,!1);case "ExpressionStatement":return h(a.expression,!1);case "Identifier":c="";break;case "MemberExpression":c=h(a.object,b);if(""!==c)break;return!0===a.computed?h(a.property,b):"";case "Literal":return"";case "TemplateElement":return"";case "CallExpression":if("Identifier"!==a.callee.type)return k(a,
"SYNTAX","ONLYNODESSUPPORTED");c="";for(d=0;d<a.arguments.length;d++)if(c=h(a.arguments[d],b),""!==c)return c;return"";case "UnaryExpression":c=h(a.argument,b);break;case "BinaryExpression":c=h(a.left,b);if(""!==c)break;c=h(a.right,b);if(""!==c)break;switch(a.operator){case "|":case "\x26":case "\x3e\x3e":case "\x3c\x3c":case "\x3e\x3e":case "\x3e\x3e\x3e":case "^":case "\x3d\x3d":case "!\x3d":case "\x3c":case "\x3c\x3d":case "\x3e":case "\x3e\x3d":case "+":case "-":case "*":case "/":case "%":break;
default:return k(a,"SYNTAX","OPERATORNOTRECOGNISED")}return"";case "LogicalExpression":c=h(a.left,b);if(""!==c)break;c=h(a.right);if(""!==c)break;switch(a.operator){case "\x26\x26":case "||":break;default:return k(a,"SYNTAX","OPERATORNOTRECOGNISED")}return"";case "ConditionalExpression":return k(a,"SYNTAX","NOTSUPPORTED");case "ArrayExpression":c="";for(d=0;d<a.elements.length&&(c=h(a.elements[d],b),""===c);d++);break;case "TemplateLiteral":c="";for(d=0;d<a.quasis.length;d++)if(c=h(a.quasis[d],b),
""!==c)return c;for(d=0;d<a.expressions.length&&(c=h(a.expressions[d],b),""===c);d++);break;case "ObjectExpression":c="";for(d=0;d<a.properties.length;d++){c="";if(null!==a.properties[d].key&&("Literal"!==a.properties[d].key.type&&"Identifier"!==a.properties[d].key.type&&(c=k(a,"SYNTAX","OBJECTPROPERTYMUSTBESTRING")),"Literal"===a.properties[d].key.type)){var f=a.properties[d].key,e="value"in f?f.value:null;"string"===typeof e||e instanceof String||(c=k(a,"SYNTAX","OBJECTPROPERTYMUSTBESTRING"))}""===
c&&(c=h(a.properties[d],b));if(""!==c)break}break;case "Property":if("Literal"!==a.key.type&&"Identifier"!==a.key.type)return k(a,"SYNTAX","ONLYLITERAL");if("Identifier"!==a.key.type&&(c=h(a.key,b),""!==c))break;c=h(a.value,b)}return c}catch(g){throw g;}}function n(a,b){var c=k(a,"SYNTAX","UNREOGNISED"),d=null,f="";try{switch(a.type){case "VariableDeclarator":if(null!==a.init&&"FunctionExpression"===a.init.type)return k(a,"SYNTAX","FUNCTIONVARIABLEDECLARATOR");var e=null===a.init?"":n(a.init,b);if(""!==
e)return e;"Identifier"===a.id.type&&(null===b.localScope?b.globalScope[a.id.name.toLowerCase()]={type:"any"}:b.localScope[a.id.name.toLowerCase()]={type:"any"});return"";case "FunctionDeclaration":d=w(a.id.name.toLowerCase(),a);f=y(a,b);if(""!==f)return f;if(null!==b.localScope)return k(a,"SYNTAX","GLOBALFUNCTIONSONLY");d.isnative=!1;b.globalScope[a.id.name.toLowerCase()]={type:"FormulaFunction",signature:[d]};return"";case "VariableDeclaration":for(var c="",g=0;g<a.declarations.length&&(c=n(a.declarations[g],
b),""===c);g++);break;case "IfStatement":c=n(a.test,b);if(""!==c)break;if("AssignmentExpression"===a.test.type||"UpdateExpression"===a.test.type)return k(a.test,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION");if(null!==a.consequent&&(c=n(a.consequent,b),""!==c))break;if(null!==a.alternate&&(c=n(a.alternate,b),""!==c))break;return"";case "EmptyStatement":return"";case "BlockStatement":for(g=0;g<a.body.length;g++)if(c=n(a.body[g],b),""!==c)return c;return"";case "ReturnStatement":return null!==a.argument?
n(a.argument,b):"";case "ForInStatement":if("VariableDeclaration"===a.left.type){if(1<a.left.declarations.length)return k(a,"SYNTAX","ONLY1VAR");if(null!==a.left.declarations[0].init)return k(a,"SYNTAX","CANNOTDECLAREVAL")}else if("Identifier"!==a.left.type)return k(a,"SYNTAX","LEFTNOTVAR");c=n(a.left,b);if(""!==c)break;c=n(a.right,b);if(""!==c)break;c=n(a.body,b);if(""!==c)break;return"";case "ForStatement":if(null!==a.init&&(c=n(a.init,b),""!==c))break;if(null!==a.test&&(c=n(a.test,b),""!==c))break;
if(null!==a.body&&(c=n(a.body,b),""!==c))break;if(null!==a.update&&(c=n(a.update,b),""!==c))break;return"";case "BreakStatement":return"";case "ContinueStatement":return"";case "UpdateExpression":if("Identifier"!==a.argument.type&&"MemberExpression"!==a.argument.type)return k(a,"SYNTAX","ASSIGNMENTTOVARSONLY");var h=!1;if("MemberExpression"===a.argument.type)return n(a.argument,b);null!==b.localScope&&void 0!==b.localScope[a.argument.name.toLowerCase()]&&(h=!0);void 0!==b.globalScope[a.argument.name.toLowerCase()]&&
(h=!0);return!1===h?"Identifier "+a.argument.name+" has not been declared.":"";case "AssignmentExpression":if("Identifier"!==a.left.type&&"MemberExpression"!==a.left.type)return k(a,"SYNTAX","ASSIGNMENTTOVARSONLY");var l=n(a.right,b);if(""!==l)return l;h=!1;if("MemberExpression"===a.left.type)return l=n(a.left,b),""!==l?l:"";null!==b.localScope&&void 0!==b.localScope[a.left.name.toLowerCase()]&&(h=!0);void 0!==b.globalScope[a.left.name.toLowerCase()]&&(h=!0);return!1===h?"Identifier "+a.left.name+
" has not been declared.":"";case "ExpressionStatement":return n(a.expression,b);case "Identifier":var m=a.name.toLowerCase();if(null!==b.localScope&&void 0!==b.localScope[m])return"";c=void 0!==b.globalScope[m]?"":k(a,"SYNTAX","VARIABLENOTFOUND");break;case "MemberExpression":c=n(a.object,b);if(""!==c)break;return!0===a.computed?n(a.property,b):"";case "Literal":return"";case "TemplateElement":return"";case "CallExpression":if("Identifier"!==a.callee.type)return k(a,"SYNTAX","ONLYNODESSUPPORTED");
c="";for(g=0;g<a.arguments.length;g++)if(c=n(a.arguments[g],b),""!==c)return c;var p=v(a.callee.name,a.arguments,b);-1===p&&(c=k(a,"SYNTAX","NOTFOUND"));-2===p&&(c=k(a,"SYNTAX","WRONGSIGNATURE"));break;case "UnaryExpression":c=n(a.argument,b);break;case "BinaryExpression":c=n(a.left,b);if(""!==c)break;c=n(a.right,b);if(""!==c)break;return"";case "LogicalExpression":c=n(a.left,b);if(""!==c)break;if("AssignmentExpression"===a.left.type||"UpdateExpression"===a.left.type)return k(a.left,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION");
c=n(a.right,b);if(""!==c)break;return"AssignmentExpression"===a.right.type||"UpdateExpression"===a.right.type?k(a.right,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):"";case "ConditionalExpression":return k(a,"SYNTAX","NOTSUPPORTED");case "ArrayExpression":c="";for(g=0;g<a.elements.length&&(c=n(a.elements[g],b),""===c);g++);break;case "TemplateLiteral":c="";for(g=0;g<a.quasis.length;g++)if(c=n(a.quasis[g],b),""!==c)return c;for(g=0;g<a.expressions.length&&(c=n(a.expressions[g],b),""===c);g++);break;
case "ObjectExpression":c="";for(g=0;g<a.properties.length;g++){c="";if(null!==a.properties[g].key&&("Literal"!==a.properties[g].key.type&&"Identifier"!==a.properties[g].key.type&&(c=k(a,"SYNTAX","OBJECTPROPERTYMUSTBESTRING")),"Literal"===a.properties[g].key.type)){var q=a.properties[g].key,r="value"in q?q.value:null;"string"===typeof r||r instanceof String||(c=k(a,"SYNTAX","OBJECTPROPERTYMUSTBESTRING"))}""===c&&(c=n(a.properties[g],b));if(""!==c)break}break;case "Property":if("Literal"!==a.key.type&&
"Identifier"!==a.key.type)return k(a,"SYNTAX","ONLYLITERAL");if("Identifier"!==a.key.type&&(c=n(a.key,b),""!==c))break;c=n(a.value,b)}return c}catch(C){throw C;}}function z(a,b){var c=!1,d=b.toLowerCase();e(a,function(a){if(c)return!1;"Identifier"===a.type&&a.name&&a.name.toLowerCase()===d&&(c=!0);return!0});return c}function w(a,b){var c=[];if(void 0!==b.params&&null!==b.params)for(var d=0;d<b.params.length;d++)c.push("any");return{name:a,return:"any",params:c}}function y(a,b){b={globalScope:b.globalScope,
localScope:{}};for(var c=0;c<a.params.length;c++)b.localScope[a.params[c].name.toLowerCase()]={type:"any"};return n(a.body,b)}function x(a,b,c,d){var f={};if(void 0===a||null===a)a={};if(void 0===c||null===c)c={};f.infinity={type:"any"};f.textformatting={type:"any"};f.pi={type:"any"};for(var e in b)"sync"===d&&void 0!==b[e].min?f[e]={type:"FormulaFunction",signature:{min:b[e].min,max:b[e].max}}:"sync"!==d&&void 0!==b[e].fmin&&(f[e]={type:"FormulaFunction",signature:{min:b[e].fmin,max:b[e].fmax}});
for(b=0;b<c.length;b++)e=c[b],f[e.name]={type:"FormulaFunction",signature:e};for(e in a)f[e]=a[e],f[e].type="any";return f}function k(a,b,c){var d="";switch(b){case "SYNTAX":d="Syntax Error: ";break;case "RUNTIME":d="Runtime Error: ";break;default:d="Syntax Error: "}try{switch(a.type){case "IfStatement":switch(c){case "CANNOT_USE_ASSIGNMENT_IN_CONDITION":d+=" Assignments not be made in logical tests";break;case "CANNOT_USE_NONBOOLEAN_IN_CONDITION":d+=" Non Boolean used as Condition"}break;case "UpdateExpression":case "AssignmentExpression":switch(c){case "CANNOT_USE_ASSIGNMENT_IN_CONDITION":d+=
" Assignments not be made in logical tests";break;case "ASSIGNMENTTOVARSONLY":d+=" Assignments can only be made to identifiers"}break;case "ExpressionStatement":d+=" Assignments can only be made to identifiers";break;case "FunctionDeclaration":switch(c){case "GLOBALFUNCTIONSONLY":d+=" Functions cannot be declared as variables";break;case "FUNCTIONMUSTHAVEIDENTIFIER":d+=" Function Definition must have an identifier"}break;case "VariableDeclaration":d+=" Only 1 variable can be declared at a time";break;
case "VariableDeclarator":switch(c){case "FUNCTIONVARIABLEDECLARATOR":d+=" Functions cannot be declared as variables";break;case "VARIABLEMUSTHAVEIDENTIFIER":d+=" Variable Definition must have an identifier"}break;case "Identifier":d+=" Identifier Not Found. ";d+=a.name;break;case "ObjectExpression":switch(c){case "OBJECTPROPERTYMUSTBESTRING":d+=" Property name must be a string"}break;case "ForStatement":switch(c){case "CANNOT_USE_NONBOOLEAN_IN_CONDITION":d+=" Non Boolean used as Condition"}break;
case "ForInStatement":switch(c){case "ONLY1VAR":d+=" Can only declare 1 var for use with IN";break;case "CANNOTDECLAREVAL":d+=" Can only declare value for use with IN";break;case "LEFTNOVAR":d+="Must provide a variable to iterate with.";break;case "VARIABLENOTDECLARED":d+="Variable must be declared before it is used..";break;case "CANNOTITERATETHISTYPE":d+="This type cannot be used in an IN loop"}break;case "MemberExpression":switch(c){case "PROPERTYNOTFOUND":d+="Cannot find member property. ";d+=
!1===a.computed?"Identifier"===a.property.type?a.property.name:"":"";break;case "OUTOFBOUNDS":d+="Out of Bounds. ";d+=!1===a.computed?"Identifier"===a.property.type?a.property.name:"":"";break;case "NOTFOUND":d+="Cannot call member method on null. ";d+=!1===a.computed?"Identifier"===a.property.type?a.property.name:"":"";break;case "INVALIDTYPE":d+="Cannot call member property on object of this type. ",d+=!1===a.computed?"Identifier"===a.property.type?a.property.name:"":""}break;case "Property":switch(c){case "ONLYLITERAL":d+=
"Property names must be literals or identifiers"}break;case "Literal":break;case "CallExpression":switch(c){case "WRONGSIGNATURE":d+="Function signature does not match: ";d+="Identifier"===a.callee.type?a.callee.name:"";break;case "ONLYNODESUPPORTED":d+="Functions must be declared.";d+="Identifier"===a.callee.type?a.callee.name:"";break;case "NOTAFUNCTION":d+="Not a Function: ";d+="Identifier"===a.callee.type?a.callee.name:"";break;case "NOTFOUND":d+="Function Not Found: "+("Identifier"===a.callee.type?
a.callee.name:"")}break;case "UnaryExpression":switch(c){case "NOTSUPPORTEDUNARYOPERATOR":d+="Operator "+a.operator+" not allowed in this context. Only ! can be used with boolean, and - with a number";break;case "NOTSUPPORTEDTYPE":d+="Unary operator "+a.operator+" cannot be used with this argument."}case "BinaryExpression":switch(c){case "OPERATORNOTRECOGNISED":d+="Binary Operator not recognised "+a.operator}break;case "LogicalExpression":switch(c){case "ONLYBOOLEAN":d+="Operator "+a.operator+" cannot be used. Only || or \x26\x26 are allowed values";
break;case "ONLYORORAND":d+="Logical Expression "+a.operator+" being applied to parameters that are not boolean."}break;case "ConditionalExpression":d+="Conditional statements not supported.";break;case "ArrayExpression":switch(c){case "FUNCTIONCONTEXTILLEGAL":d+=" Cannot Put Function inside Array."}break;default:d+="Expression contains unrecognised code structures."}}catch(f){throw f;}return d}function p(a,b,c){return{line:a.loc.start.line,character:a.loc.start.column,reason:k(a,b,c)}}function A(a,
b,c,d){b={globalScope:b.globalScope,localScope:{}};for(var f=0;f<a.params.length;f++)b.localScope[a.params[f].name.toLowerCase()]={type:"any"};l(a.body,b,c,d,!1)}function l(a,b,c,d,f){void 0===f&&(f=!0);if(null===a)throw Error("Unnexpexted Expression Syntax");var e=null;try{switch(a.type){case "VariableDeclarator":if(null!==a.init&&"FunctionExpression"===a.init.type){d.push(p(a,"SYNTAX","FUNCTIONVARIABLEDECLARATOR"));break}"Identifier"!==a.id.type?d.push(p(a,"SYNTAX","VARIABLEMUSTHAVEIDENTIFIER")):
(a.id.name.toLowerCase(),null===b.localScope?b.globalScope[a.id.name.toLowerCase()]={type:"any"}:b.localScope[a.id.name.toLowerCase()]={type:"any"});null!==a.init&&l(a.init,b,c,d,f);break;case "FunctionDeclaration":!1===f&&d.push(p(a,"SYNTAX","GLOBALFUNCTIONSONLY"));"Identifier"!==a.id.type&&d.push(p(a,"SYNTAX","FUNCTIONMUSTHAVEIDENTIFIER"));e=w("",a);A(a,b,c,d);null!==b.localScope&&d.push(p(a,"SYNTAX","GLOBALFUNCTIONSONLY"));e.isnative=!1;"Identifier"===a.id.type&&(b.globalScope[a.id.name.toLowerCase()]=
{type:"FormulaFunction",signature:[e]});break;case "VariableDeclaration":for(var g=0;g<a.declarations.length;g++)l(a.declarations[g],b,c,d,f);break;case "IfStatement":null!==a.test&&(l(a.test,b,c,d,f),"AssignmentExpression"!==a.test.type&&"UpdateExpression"!==a.test.type||d.push(p(a.test,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION")));null!==a.consequent&&l(a.consequent,b,c,d,f);null!==a.alternate&&l(a.alternate,b,c,d,f);break;case "EmptyStatement":break;case "BlockStatement":if(null!==a.body)for(g=
0;g<a.body.length;g++)l(a.body[g],b,c,d,f);break;case "ReturnStatement":null!==a.argument&&l(a.argument,b,c,d,f);break;case "ForInStatement":"VariableDeclaration"===a.left.type?(1<a.left.declarations.length&&d.push(p(a,"SYNTAX","ONLY1VAR")),null!==a.left.declarations[0].init&&d.push(p(a,"SYNTAX","CANNOTDECLAREVAL"))):"Identifier"!==a.left.type&&d.push(p(a,"SYNTAX","LEFTNOTVAR"));l(a.left,b,c,d,f);l(a.right,b,c,d,f);l(a.body,b,c,d,f);break;case "ForStatement":null!==a.init&&l(a.init,b,c,d,f);null!==
a.test&&l(a.test,b,c,d,f);null!==a.body&&l(a.body,b,c,d,f);null!==a.update&&l(a.update,b,c,d,f);break;case "BreakStatement":break;case "ContinueStatement":break;case "UpdateExpression":"Identifier"!==a.argument.type&&"MemberExpression"!==a.argument.type?d.push(p(a,"SYNTAX","ASSIGNMENTTOVARSONLY")):("Identifier"===a.argument.type&&(e=!1,!1===c&&(null!==b.localScope&&void 0!==b.localScope[a.argument.name.toLowerCase()]&&(e=!0),void 0!==b.globalScope[a.argument.name.toLowerCase()]&&(e=!0),!1===e&&d.push({line:null===
a?0:a.loc.start.line,character:null===a?0:a.loc.start.column,reason:"Identifier "+a.argument.name+" has not been declared."}))),"MemberExpression"===a.argument.type&&l(a.argument,b,c,d,f));break;case "AssignmentExpression":"Identifier"!==a.left.type&&"MemberExpression"!==a.left.type&&d.push(p(a,"SYNTAX","ASSIGNMENTTOVARSONLY"));switch(a.operator){case "\x3d":case "/\x3d":case "*\x3d":case "%\x3d":case "+\x3d":case "-\x3d":break;default:d.push(p(a,"SYNTAX","OPERATORNOTRECOGNISED"))}l(a.right,b,c,d,
f);e=!1;"Identifier"===a.left.type&&(null!==b.localScope&&void 0!==b.localScope[a.left.name.toLowerCase()]&&(e=!0),void 0!==b.globalScope[a.left.name.toLowerCase()]&&(e=!0),!1===c&&!1===e&&d.push({line:null===a?0:a.loc.start.line,character:null===a?0:a.loc.start.column,reason:"Identifier "+a.left.name+" has not been declared."}));"MemberExpression"===a.left.type&&l(a.left,b,c,d,f);break;case "ExpressionStatement":l(a.expression,b,c,d,f);break;case "Identifier":var h=a.name.toLowerCase();if(null!==
b.localScope&&void 0!==b.localScope[h]||void 0!==b.globalScope[h])break;!1===c&&d.push(p(a,"SYNTAX","VARIABLENOTFOUND"));break;case "MemberExpression":l(a.object,b,c,d,f);!0===a.computed&&l(a.property,b,c,d,f);break;case "Literal":break;case "TemplateElement":break;case "CallExpression":"Identifier"!==a.callee.type&&d.push(p(a,"SYNTAX","ONLYNODESSUPPORTED"));for(g=0;g<a.arguments.length;g++)l(a.arguments[g],b,c,d,f);if("Identifier"===a.callee.type){var k=v(a.callee.name,a.arguments,b);!1===c&&-1===
k&&d.push(p(a,"SYNTAX","NOTFOUND"));-2===k&&d.push(p(a,"SYNTAX","WRONGSIGNATURE"))}break;case "UnaryExpression":l(a.argument,b,c,d,f);break;case "BinaryExpression":l(a.left,b,c,d,f);l(a.right,b,c,d,f);switch(a.operator){case "\x3d\x3d":case "!\x3d":case "\x3c":case "\x3c\x3d":case "\x3e":case "\x3e\x3d":case "+":case "-":case "*":case "/":case "%":case "\x26":case "|":case "^":case "\x3c\x3c":case "\x3e\x3e":case "\x3e\x3e\x3e":break;default:d.push(p(a,"SYNTAX","OPERATORNOTRECOGNISED"))}break;case "LogicalExpression":switch(a.operator){case "\x26\x26":case "||":break;
default:d.push(p(a,"SYNTAX","OPERATORNOTRECOGNISED"))}l(a.left,b,c,d,f);"AssignmentExpression"!==a.left.type&&"UpdateExpression"!==a.left.type||d.push(p(a,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));l(a.right,b,c,d,f);"AssignmentExpression"!==a.right.type&&"UpdateExpression"!==a.right.type||d.push(p(a,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));break;case "ConditionalExpression":d.push(p(a,"SYNTAX","NOTSUPPORTED"));break;case "ArrayExpression":for(g=0;g<a.elements.length;g++)l(a.elements[g],
b,c,d,f);break;case "TemplateLiteral":for(g=0;g<a.quasis.length;g++)l(a.quasis[g],b,c,d,f);for(g=0;g<a.expressions.length;g++)l(a.expressions[g],b,c,d,f);break;case "ObjectExpression":for(g=0;g<a.properties.length;g++)l(a.properties[g],b,c,d,f);break;case "Property":"Literal"!==a.key.type&&"Identifier"!==a.key.type&&d.push(p(a,"SYNTAX","ONLYLITERAL"));"Literal"===a.key.type&&l(a.key,b,c,d,f);l(a.value,b,c,d,f);break;default:d.push(p(a,"SYNTAX","UNRECOGNISED"))}}catch(F){d.push({line:null===a?0:a.loc.start.line,
character:null===a?0:a.loc.start.column,reason:"Unnexpected Syntax"})}}function t(a){var b=[];e(a,function(a){"CallExpression"===a.type&&"Identifier"===a.callee.type&&b.push(a.callee.name.toLowerCase());return!0});return b}Object.defineProperty(m,"__esModule",{value:!0});m.functionDecls={concatenate:{min:"0",max:"*"},split:{min:"2",max:"4"},guid:{min:"0",max:"1"},today:{min:"0",max:"0"},angle:{min:"2",max:"3"},bearing:{min:"2",max:"3"},urlencode:{min:"1",max:"1"},now:{min:"0",max:"0"},timestamp:{min:"0",
max:"0"},day:{min:"1",max:"1"},month:{min:"1",max:"1"},year:{min:"1",max:"1"},hour:{min:"1",max:"1"},second:{min:"1",max:"1"},millisecond:{min:"1",max:"1"},minute:{min:"1",max:"1"},weekday:{min:"1",max:"1"},toutc:{min:"1",max:"1"},tolocal:{min:"1",max:"1"},date:{min:"0",max:"7"},datediff:{min:"2",max:"3"},dateadd:{min:"2",max:"3"},trim:{min:"1",max:"1"},text:{min:"1",max:"2"},left:{min:"2",max:"2"},right:{min:"2",max:"2"},mid:{min:"2",max:"3"},upper:{min:"1",max:"1"},proper:{min:"1",max:"2"},lower:{min:"1",
max:"1"},find:{min:"2",max:"3"},iif:{min:"3",max:"3"},decode:{min:"2",max:"*"},when:{min:"2",max:"*"},defaultvalue:{min:"2",max:"2"},isempty:{min:"1",max:"1"},domaincode:{min:"2",max:"4"},domainname:{min:"2",max:"4"},polygon:{min:"1",max:"1"},point:{min:"1",max:"1"},polyline:{min:"1",max:"1"},extent:{min:"1",max:"1"},multipoint:{min:"1",max:"1"},ringisclockwise:{min:"1",max:"1"},geometry:{min:"1",max:"1"},count:{min:"0",max:"*"},number:{min:"1",max:"2"},acos:{min:"1",max:"1"},asin:{min:"1",max:"1"},
atan:{min:"1",max:"1"},atan2:{min:"2",max:"2"},ceil:{min:"1",max:"2"},floor:{min:"1",max:"2"},round:{min:"1",max:"2"},cos:{min:"1",max:"1"},exp:{min:"1",max:"1"},log:{min:"1",max:"1"},min:{min:"0",max:"*"},constrain:{min:"3",max:"3"},console:{min:"0",max:"*"},max:{min:"0",max:"*"},pow:{min:"2",max:"2"},random:{min:"0",max:"0"},sqrt:{min:"1",max:"1"},sin:{min:"1",max:"1"},tan:{min:"1",max:"1"},abs:{min:"1",max:"1"},isnan:{min:"1",max:"1"},stdev:{min:"0",max:"*"},average:{min:"0",max:"*"},mean:{min:"0",
max:"*"},sum:{min:"0",max:"*"},variance:{min:"0",max:"*"},distinct:{min:"0",max:"*"},first:{min:"1",max:"1"},top:{min:"2",max:"2"},boolean:{min:"1",max:"1"},dictionary:{min:"0",max:"*"},typeof:{min:"1",max:"1"},reverse:{min:"1",max:"1"},replace:{min:"3",max:"4"},sort:{min:"1",max:"2"},feature:{min:"1",max:"*"},haskey:{min:"2",max:"2"},indexof:{min:"2",max:"2"},disjoint:{min:"2",max:"2"},intersects:{min:"2",max:"2"},touches:{min:"2",max:"2"},crosses:{min:"2",max:"2"},within:{min:"2",max:"2"},contains:{min:"2",
max:"2"},overlaps:{min:"2",max:"2"},equals:{min:"2",max:"2"},relate:{min:"3",max:"3"},intersection:{min:"2",max:"2"},union:{min:"1",max:"2"},difference:{min:"2",max:"2"},symmetricdifference:{min:"2",max:"2"},clip:{min:"2",max:"2"},cut:{min:"2",max:"2"},area:{min:"1",max:"2"},areageodetic:{min:"1",max:"2"},length:{min:"1",max:"2"},lengthgeodetic:{min:"1",max:"2"},distancegeodetic:{min:"2",max:"3"},distance:{min:"2",max:"3"},densify:{min:"2",max:"3"},densifygeodetic:{min:"2",max:"3"},generalize:{min:"2",
max:"4"},buffer:{min:"2",max:"3"},buffergeodetic:{min:"2",max:"3"},offset:{min:"2",max:"6"},rotate:{min:"2",max:"3"},issimple:{min:"1",max:"1"},simplify:{min:"1",max:"1"},centroid:{min:"1",max:"1"},isselfintersecting:{min:"1",max:"1"},multiparttosinglepart:{min:"1",max:"1"},setgeometry:{min:"2",max:"2"},portal:{min:"1",max:"1"},subtypes:{min:"1",max:"1"},subtypecode:{min:"1",max:"1"},subtypename:{min:"1",max:"1"},domain:{min:"2",max:"3"},schema:{min:"1",max:"1"}};for(var u in m.functionDecls)m.functionDecls[u].fmin=
m.functionDecls[u].min,m.functionDecls[u].fmax=m.functionDecls[u].max;var B="featureset featuresetbyid featuresetbyname featuresetbyassociation featuresetbyrelationshipname featuresetbyurl attachments featuresetbyportalitem".split(" "),D="disjoint intersects touches crosses within contains overlaps equals relate intersection union difference symmetricdifference clip cut area areageodetic length lengthgeodetic distance distancegeodetic densify densifygeodetic generalize buffer buffergeodetic offset rotate issimple simplify multiparttosinglepart".split(" ");
m.addFunctionDeclaration=function(a,b){var c=m.functionDecls[a.name.toLowerCase()];void 0===c?"sync"===b?m.functionDecls[a.name.toLowerCase()]={min:a.min,max:a.max}:m.functionDecls[a.name.toLowerCase()]={fmin:a.min,fmax:a.max}:"sync"===b?(c.min=a.min,c.max=a.max):(c.fmin=a.min,c.fmax=a.max)};m.checkFunctionSignature=r;m.findFunction=v;m.walk=e;m.validateLanguageNode=h;m.testValidityOfExpression=n;m.referencesMember=z;m.referencesFunction=function(a,b){var c=!1,d=b.toLowerCase();e(a,function(a){return c?
!1:"CallExpression"===a.type&&"Identifier"===a.callee.type&&a.callee.name&&a.callee.name.toLowerCase()===d?(c=!0,!1):!0});return c};m.findFieldLiterals=function(a){var b=[];e(a,function(a){if("MemberExpression"!==a.type||"Identifier"!==a.object.type)return!0;!1===a.computed&&a.object&&a.object.name&&a.property&&"Identifier"===a.property.type&&a.property.name?b.push(a.object.name.toLowerCase()+"."+a.property.name.toLowerCase()):a.object&&a.object.name&&a.property&&"Literal"===a.property.type&&"string"===
typeof a.property.value&&b.push(a.object.name.toLowerCase()+"."+a.property.value.toString().toLowerCase());return!1});return b};m.extractFunctionDeclaration=w;m.validateFunction=y;m.constructGlobalScope=x;m.validateScript=function(a,b,c,d){void 0===c&&(c="async");void 0===d&&(d=m.functionDecls);b={globalScope:x(b.vars,d,b.customFunctions,c),localScope:null};return n(a.body[0].body,b)};m.validateLanguage=function(a){return"BlockStatement"!==a.body[0].body.type?"Invalid formula content.":h(a.body[0].body)};
m.nodeErrorMessage=k;m.makeError=p;m.extractAllIssuesInFunction=A;m.extractAllIssues=l;m.checkScript=function(a,b,c,d,e){void 0===d&&(d="async");void 0===e&&(e=m.functionDecls);var f=[];if("BlockStatement"!==a.body[0].body.type)return[{line:0,character:0,reason:"Invalid Body"}];if(null===b||void 0===b)b={vars:{},customFunctions:[]};b={globalScope:x(b.vars,e,b.customFunctions,d),localScope:null};try{l(a.body[0].body,b,c,f)}catch(g){}return f};m.findFunctionCalls=t;m.findScriptDependencies=function(a,
b){void 0===b&&(b=[]);var c=null;if(void 0===a.usesFeatureSet){null===c&&(c=t(a));a.usesFeatureSet=!1;for(var d=0;d<c.length;d++)-1<B.indexOf(c[d])&&(a.usesFeatureSet=!0,a.isAsync=!0);if(!1===a.usesFeatureSet&&b&&0<b.length)for(d=0;d<b.length;d++)if(z(a,b[d])){a.usesFeatureSet=!0;a.isAsync=!0;break}}if(void 0===a.usesGeometry)for(a.usesGeometry=!1,null===c&&(c=t(a)),d=0;d<c.length;d++)-1<D.indexOf(c[d])&&(a.usesGeometry=!0)};m.scriptUsesFeatureSet=function(a){a=t(a);for(var b=0;b<a.length;b++)if(-1<
B.indexOf(a[b]))return!0;return!1}});