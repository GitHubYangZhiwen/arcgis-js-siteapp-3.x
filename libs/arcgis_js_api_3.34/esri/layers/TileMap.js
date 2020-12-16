// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/TileMap","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/io-query ../request ../urlUtils".split(" "),function(l,k,m,n,p,q,r){return l(null,{declaredClass:"esri.layers.TileMap",constructor:function(a){this.layer=a;this._tileMaps={}},getTile:function(a,b,d,c,e){a={id:c,level:a,row:b,col:d};b=this._getResamplingBudget();0<b?this._process({tile:a,requestedTile:a,callback:e,resamplingBudget:b}):(e||this.callback).call(this,a,a)},statusOf:function(a,b,d){var c=
this._getResamplingBudget();a={level:a,row:b,col:d};if(0===c)return 1;for(;0<=c;){b=this._tileToTileMap(a);if(!this._tileMaps[b.uid])return-1;b=this._tileMaps[b.uid];if(!b.promise.isFulfilled())return-1;if(this._isTileAvailable(a,b))return 1;a=this._parentTile(a);if(!a)break;c--}return 0},style:function(a,b){if(a.level!==b.level||a.row!==b.row||a.col!==b.col){for(var d=this.layer.tileInfo,c=d.lods,e=d.cols,d=d.rows,f,g,h=c.length-1;!f||!g;)f||c[h].level!==a.level||(f=c[h]),g||c[h].level!==b.level||
(g=c[h]),h--;c=Math.round(f.resolution/g.resolution);a=b.col%c*-1*e;b=b.row%c*-1*d;c={width:e*c+"px",height:d*c+"px",margin:b+"px 0 0 "+a+"px","will-change":"transform"};a=0===a?0:-1*a;b=0===b?0:-1*b;c.clip="rect("+b+"px,"+(a+e)+"px,"+(b+d)+"px,"+a+"px)";return c}},_process:function(a){var b=a.tile,d=this._tileToTileMap(b),c=this._parentTile(b);this._getTileMap(d).then(k.hitch(this,function(e){d=e;this._isTileAvailable(b,d)?(a.callback||this.callback).call(this,b,a.requestedTile):0<a.resamplingBudget&&
c?(a.resamplingBudget--,a.tile=c,this._process(a)):(a.callback||this.callback).call(this,a.requestedTile,a.requestedTile)}),k.hitch(this,function(){(a.callback||this.callback).call(this,a.requestedTile,a.requestedTile)}))},_getTileMap:function(a){var b,d,c,e,f=null;this._tileMaps[a.uid]?(a=this._tileMaps[a.uid],b=a.promise):(this._tileMaps[a.uid]=a,d=new n,q({url:this._getTileMapUrl(a.level,a.row,a.col),handleAs:"json",content:{f:"json"},callbackParamName:"callback",timeout:3E3,load:function(b){k.mixin(a,
b);if(a.data&&0<a.data.length){e=a.data.length;if(1===e)f=a.data[0];else for(f=a.data[0],c=1;c<e;c++)if(a.data[c]!==f){f=null;break}null!==f&&(delete a.data,a.value=f);null==a.valid&&(a.valid=!0)}d.resolve(a)},error:function(b){b&&422===b.code?(k.mixin(a,{location:{top:a.row,left:a.col,width:8,height:8},valid:!0,value:0}),d.resolve(a)):d.reject()}}),b=a.promise=d.promise);return b},_parentTile:function(a){var b=this.layer.tileInfo.lods,d,c,e=null;m.some(b,function(b,e){return a.level===b.level?(d=
b,c=e,!0):!1});0<c&&(b=b[c-1],e={id:a.id,level:b.level,row:Math.floor(a.row*d.resolution/b.resolution+.01),col:Math.floor(a.col*d.resolution/b.resolution+.01)});return e},_tileToTileMap:function(a){var b=8*Math.floor(a.row/8),d=8*Math.floor(a.col/8);return{uid:a.level+"_"+b+"_"+d,level:a.level,row:b,col:d}},_isTileAvailable:function(a,b){var d,c;b.valid?void 0!==b.value?a=b.value:(d=b.location.left,c=b.location.top,a=(a.row-c)*b.location.width+(a.col-d),a=a<b.data.length?b.data[a]:0):a=0;return a},
_getTileMapUrl:function(a,b,d){var c=this.layer,e=c.tileServers,f=c._getToken(),g=c._url.query;a=(e?e[b%e.length]:c._url.path)+"/tilemap/"+a+"/"+b+"/"+d+"/8/8";g&&(a+="?"+p.objectToQuery(g));!f||g&&g.token||(a+=(-1===a.indexOf("?")?"?":"\x26")+"token\x3d"+f);return a=c.addTimestampToURL(a)},_getResamplingBudget:function(){var a=this.layer,b=0;a.resampling&&(b=a._resamplingTolerance,null===b||void 0===b)&&(b=a.tileInfo.lods.length);return b}})});