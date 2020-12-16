// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/layers/support/TileInfo","require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../geometry ../../core/JSONSupport ../../core/kebabDictionary ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ../../geometry/support/aaBoundingRect ../../geometry/support/scaleUtils ../../geometry/support/spatialReferenceUtils ../../geometry/support/webMercatorUtils ./LOD".split(" "),
function(C,D,v,w,d,h,x,y,f,q,r,z,l,A,B){var t=y({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc"});return function(u){function b(a){a=u.call(this)||this;a.dpi=96;a.format=null;a.origin=null;a.minScale=0;a.maxScale=0;a.size=null;a.spatialReference=null;return a}w(b,u);m=b;b.create=function(a){void 0===a&&(a={size:256,spatialReference:h.SpatialReference.WebMercator});
var c=a.resolutionFactor||1,k=a.scales,e=a.size||256;a=a.spatialReference||h.SpatialReference.WebMercator;var b=l.getInfo(a),b=b?new h.Point(b.origin[0],b.origin[1],a):new h.Point(0,0,a),n=1/(39.37*z.getMetersPerUnitForSR(a)*96),f=[];if(k)for(var d=0;d<k.length;d++){var g=k[d],p=g*n;f.push({level:d,scale:g,resolution:p})}else for(g=l.isGeographic(a)?512/e*1.47748799285417E8:256/e*5.91657527591555E8,k=Math.ceil(24/c),f.push({level:0,scale:g,resolution:g*n}),d=1;d<k;d++)g/=Math.pow(2,c),p=g*n,f.push({level:d,
scale:g,resolution:p});return new m({dpi:96,lods:f,origin:b,size:e,spatialReference:a})};Object.defineProperty(b.prototype,"isWrappable",{get:function(){var a=this.spatialReference,c=this.origin;if(a&&c){var b=l.getInfo(a);return a.isWrappable&&Math.abs(b.origin[0]-c.x)<=b.dx}return!1},enumerable:!0,configurable:!0});b.prototype.readOrigin=function(a,c){return h.Point.fromJSON(v({spatialReference:c.spatialReference},a))};Object.defineProperty(b.prototype,"lods",{set:function(a){var c=this,b=0,e=0,
d=[];this._levelToLOD={};a&&(b=-Infinity,e=Infinity,a.forEach(function(a){d.push(a.scale);b=a.scale>b?a.scale:b;e=a.scale<e?a.scale:e;c._levelToLOD[a.level]=a}));this._set("scales",d);this._set("minScale",b);this._set("maxScale",e);this._set("lods",a);this._initializeUpsampleLevels()},enumerable:!0,configurable:!0});b.prototype.readSize=function(a,c){return[c.cols,c.rows]};b.prototype.writeSize=function(a,c){c.cols=a[0];c.rows=a[0]};b.prototype.zoomToScale=function(a){var c=this.scales;if(0>=a)return c[0];
if(a>=c.length)return c[c.length-1];var b=Math.round(a);return c[b]+(b-a)*(c[Math.round(a-.5)]-c[b])};b.prototype.scaleToZoom=function(a){for(var c=this.scales,b=c.length-1,e=0;e<b;e++){var d=c[e],f=c[e+1];if(d<=a)break;if(f===a)return e+1;if(d>a&&f<a)return e+1-(a-f)/(d-f)}return e};b.prototype.snapScale=function(a,c){void 0===c&&(c=.95);a=this.scaleToZoom(a);return a%Math.floor(a)>=c?this.zoomToScale(Math.ceil(a)):this.zoomToScale(Math.floor(a))};b.prototype.tileAt=function(a,c,b,e){var d=this.lodAt(a);
if(!d)return null;var f;if("number"===typeof c)f=c,c=b;else{if(l.equals(c.spatialReference,this.spatialReference))f=c.x,c=c.y;else{e=A.project(c,this.spatialReference);if(!e)return null;f=e.x;c=e.y}e=b}b=d.resolution*this.size[0];d=d.resolution*this.size[1];e||(e={id:null,level:0,row:0,col:0,extent:r.create()});e.level=a;e.row=Math.floor((this.origin.y-c)/d+.001);e.col=Math.floor((f-this.origin.x)/b+.001);this.updateTileInfo(e);return e};b.prototype.updateTileInfo=function(a){var c=this.lodAt(a.level),
b=c.resolution*this.size[0],c=c.resolution*this.size[1];a.id=a.level+"/"+a.row+"/"+a.col;a.extent||(a.extent=r.create());a.extent[0]=this.origin.x+a.col*b;a.extent[1]=this.origin.y-(a.row+1)*c;a.extent[2]=a.extent[0]+b;a.extent[3]=a.extent[1]+c};b.prototype.upsampleTile=function(a){var c=this._upsampleLevels[a.level];if(!c||-1===c.parentLevel)return!1;a.level=c.parentLevel;a.row=Math.floor(a.row/c.factor+.001);a.col=Math.floor(a.col/c.factor+.001);this.updateTileInfo(a);return!0};b.prototype.getTileBounds=
function(a,c){var b=this.lodAt(c.level).resolution,d=b*this.size[0],b=b*this.size[1];a[0]=this.origin.x+c.col*d;a[1]=this.origin.y-(c.row+1)*b;a[2]=a[0]+d;a[3]=a[1]+b;return a};b.prototype.lodAt=function(a){return this._levelToLOD&&this._levelToLOD[a]||null};b.prototype.clone=function(){return m.fromJSON(this.write({}))};b.prototype._initializeUpsampleLevels=function(){var a=this.lods;this._upsampleLevels=[];for(var b=null,d=0;d<a.length;d++){var e=a[d];this._upsampleLevels[e.level]={parentLevel:b?
b.level:-1,factor:b?b.resolution/e.resolution:0};b=e}};d([f.property({type:Number,json:{write:!0}})],b.prototype,"compressionQuality",void 0);d([f.property({type:Number,json:{write:!0}})],b.prototype,"dpi",void 0);d([f.property({type:String,json:{read:t.read,write:t.write}})],b.prototype,"format",void 0);d([f.property({readOnly:!0,dependsOn:["spatialReference","origin"]})],b.prototype,"isWrappable",null);d([f.property({type:h.Point,json:{write:!0}})],b.prototype,"origin",void 0);d([f.reader("origin")],
b.prototype,"readOrigin",null);d([f.property({type:[B],value:null,json:{write:!0}})],b.prototype,"lods",null);d([f.property({readOnly:!0})],b.prototype,"minScale",void 0);d([f.property({readOnly:!0})],b.prototype,"maxScale",void 0);d([f.property({readOnly:!0})],b.prototype,"scales",void 0);d([f.property({cast:function(a){return Array.isArray(a)?a:"number"===typeof a?[a,a]:[256,256]}})],b.prototype,"size",void 0);d([f.reader("size",["rows","cols"])],b.prototype,"readSize",null);d([f.writer("size",
{cols:{type:q.Integer},rows:{type:q.Integer}})],b.prototype,"writeSize",null);d([f.property({type:h.SpatialReference,json:{write:!0}})],b.prototype,"spatialReference",void 0);return b=m=d([f.subclass("esri.layers.support.TileInfo")],b);var m}(f.declared(x))});