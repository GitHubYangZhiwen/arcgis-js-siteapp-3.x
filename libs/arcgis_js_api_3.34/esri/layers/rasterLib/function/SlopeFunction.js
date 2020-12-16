// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/function/SlopeFunction","dojo/_base/declare dojo/_base/lang ./RasterFunctionX ../../../WKIDUnitConversion ../../PixelBlock ./pixelShaders ./RasterFunctionWebGLMixin ./surfaceUtils".split(" "),function(d,g,h,k,p,l,m,n){return d([h,m],{declaredClass:"esri.layers.rasterLib.function.SlopeFunction",functionName:"Slope",supportWebGL:!0,support2D:!0,constructor:function(a){this.functionArguments=this.mixinIgnoreCase({zFactor:1,slopeType:1,psPower:.664,psFactor:.024,raster:null},
a)},bind:function(a){a=this.getSourceRasterInfo(a);if(!a.raster)return Error("The raster input to slope function is invalid.");this.rasterInfo=g.mixin(a.raster,{bandCount:1,pixelType:this._calculatePixelType(this.outputPixelType,"F32"),statistics:1===this.slopeType||3===this.slopeType?[{min:0,max:90}]:null,histograms:null});this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{};this.rasterInfo.keyProperties.DataType="Generic";return!0},read2D:function(a){this._performance.start();a=a.raster;
a=n.slope(a,{zFactor:this.functionArguments.zFactor,psPower:this.functionArguments.psPower,psFactor:this.functionArguments.psFactor,slopeType:this.functionArguments.slopeType,isGCS:a.extent.spatialReference.wkid&&null==k[a.extent.spatialReference.wkid]});this._addPerformanceMetric(this._performance.elapsed());return a},readGL:function(a){this._performance.start();this._initializeProgram({fragment:l.slope,fragmentName:"Slope"});var e=this._setupTextureData(a.raster),d=this.bindFrameBuffer(),b=this.gl,
f=b.drawingBufferWidth,b=b.drawingBufferHeight,c=e.extent;this._setUniforms({u_resolution:a&&a.raster&&a.raster.pixelBlock?[1/a.raster.pixelBlock.width,1/a.raster.pixelBlock.height]:[1/f,1/b],u_cellSize:[(c.xmax-c.xmin)/f,(c.ymax-c.ymin)/b],u_zfactor:this.functionArguments.zFactor});this._bindTexture(e.texture,"u_image");this._drawGL();this._addPerformanceMetric(this._performance.elapsed());return{extent:e.extent,texture:d.texture}}})});