//>>built
define("dgrid/util/has-css3",["dojo/has"],function(d){function e(a,c){a=a.style;var b;if(c in a)return!0;c=c.slice(0,1).toUpperCase()+c.slice(1);for(b=f.length;b--;)if(f[b]+c in a)return f[b];return!1}var f=["ms","O","Moz","Webkit"];d.add("css-transitions",function(a,c,b){return e(b,"transitionProperty")});d.add("css-transforms",function(a,c,b){return e(b,"transform")});d.add("css-transforms3d",function(a,c,b){return e(b,"perspective")});d.add("transitionend",function(){var a=d("css-transitions");
return a?!0===a?"transitionend":{ms:"MSTransitionEnd",O:"oTransitionEnd",Moz:"transitionend",Webkit:"webkitTransitionEnd"}[a]:!1});return d});