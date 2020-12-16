// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/renderer/RasterRenderer",["dojo/_base/declare","dojo/_base/lang","../../../geometry/Extent","../../PixelBlock"],function(d,c,e,f){return d(null,{declaredClass:"esri.layers.rasterLib.renderer.RasterRenderer",raster:null,constructor:function(a){a=a||{};this.raster=a.raster||a.Raster||this.raster;this.draw=c.hitch(this,this.draw);this.bind=c.hitch(this,this.bind);a=c.clone(a);Object.keys(a).forEach(function(b){null==a[b]&&delete a[b]});c.mixin(this,a)},bind:function(a){if(!a)throw"failed to bind without options";
var b=a;a.layer&&(a=a.layer,b={id:a.id,rawRasterInfo:a.raster.rasterInfo,glSetting:a._glSetting,xformSetting:a.tileManager&&a.tileManager.xformSetting,useWebGL:a.useWebGL,resampling:a.tileMode&&a.tileManager&&a.tileManager.xformSetting.requireProjection&&!a._hasTilingEffects&&"Thematic"!==a.raster.dataType?1:0,tileMode:a.tileMode});this._rawRasterInfo=b.rawRasterInfo;this.useWebGL=b.useWebGL;this._function&&this._function.setProcessingContext(c.mixin({useProcessedData:!0},b));this._processingContext=
b},hasTilingEffects:function(){},draw:function(a){return this.useWebGL?this.drawGL(a):this.draw2D(a)},toJson:function(){},_clonePixelData:function(a){if(null==a)return a;var b={};a.extent&&(b.extent=new e(a.extent.xmin,a.extent.ymin,a.extent.xmax,a.extent.ymax,a.extent.spatialReference));a=a.processedPixelBlock||a.pixelBlock;if(null==a)return b;b.pixelBlock=a.clone?a.clone():f.prototype.clone(a);return b}})});