// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/symbols/support/symbolConversion","require exports ../../Color ../../symbols ../../core/Error ../../core/lang ../FillSymbol3DLayer ../Font ../IconSymbol3DLayer ../LabelSymbol3D ../LineSymbol3D ../LineSymbol3DLayer ../PictureMarkerSymbol ../PointSymbol3D ../PolygonSymbol3D ../SimpleFillSymbol ../SimpleLineSymbol ../SimpleMarkerSymbol ../TextSymbol ../TextSymbol3DLayer ../WebStyleSymbol".split(" "),function(F,h,k,l,q,r,t,u,v,w,x,y,m,n,z,A,B,e,C,D,E){function p(a){var e=
a.color?a.color.clone():new k([255,255,255]),c,b,f;a instanceof m?(a.color&&0===a.color.r&&0===a.color.g&&0===a.color.b&&(e=new k([255,255,255])),c={href:a.url},b=a.width<=a.height?a.height:a.width):(c=a.style,c in d?c=d[c]:(console.log(c+' cannot be mapped to Icon symbol. Fallback to "circle"'),c="circle"),c={primitive:c},b=a.size,a.outline&&a.outline.color&&0<a.outline.width&&(f={size:a.outline.width,color:a.outline.color.clone()}));return new n(new v({size:b,resource:c,material:{color:e},outline:f}))}
Object.defineProperty(h,"__esModule",{value:!0});var d={};d[e.STYLE_CIRCLE]="circle";d[e.STYLE_CROSS]="cross";d[e.STYLE_DIAMOND]="kite";d[e.STYLE_SQUARE]="square";d[e.STYLE_X]="x";h.to3D=function(a,d,c,b){void 0===d&&(d=!1);void 0===c&&(c=!1);void 0===b&&(b=!0);if(!a)return{symbol:null};if(l.isSymbol3D(a)||a instanceof E)b=a.clone();else if(a instanceof B)b=new x(new y({size:a.width||1,material:{color:a.color?a.color.clone():[255,255,255]}}));else if(a instanceof e)b=p(a);else if(a instanceof m)b=
p(a);else if(a instanceof A)b=new t({material:{color:a.color?a.color.clone():[255,255,255]}}),a.outline&&a.outline.color&&(b.outline={size:a.outline.width||0,color:a.outline.color}),b=new z(b);else if(a instanceof C){var f;f=a.haloColor;var g=a.haloSize;f=f&&0<g?{color:r.clone(f),size:g}:null;g=a.font?a.font.clone():new u;b=new (b?w:n)(new D({size:g.size,font:g,halo:f,material:{color:a.color.clone()},text:a.text}))}else return{error:new q("symbol-conversion:unsupported-2d-symbol","2D symbol of type '"+
(a.type||a.declaredClass)+"' is unsupported in 3D",{symbol:a})};d&&(b.id=a.id);if(c&&l.isSymbol3D(b))for(a=0;a<b.symbolLayers.length;++a)b.symbolLayers.getItemAt(a)._ignoreDrivers=!0;return{symbol:b}}});