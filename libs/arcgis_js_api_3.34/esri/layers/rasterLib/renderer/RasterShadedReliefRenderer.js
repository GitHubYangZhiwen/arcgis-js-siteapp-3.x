// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/renderer/RasterShadedReliefRenderer","dojo/_base/declare dojo/_base/lang ./RasterRenderer ../function/HillshadeFunction ../function/ContrastBrightnessFunction ../function/ColormapFunction ../function/rasterUtils".split(" "),function(c,d,e,f,g,k,h){return c([e],{declaredClass:"esri.layers.rasterLib.renderer.RasterShadedReliefRenderer",rendererName:"ShadedRelief",hillshadeType:null,azimuth:315,altitude:45,zFactor:1,slopeType:null,psPower:.664,psFactor:.024,raster:null,
constructor:function(a){this.hillshadeType="number"===typeof this.hillshadeType?this.hillshadeType:["traditional","multi-directional"].indexOf(this.hillshadeType);a&&a.scalingType&&(this.slopeType="adjusted"===a.scalingType?3:1);a&&a.pixelSizePower&&(this.psPower=a.pixelSizePower);a&&a.pixelSizeFactor&&(this.psFactor=a.pixelSizeFactor);a=d.mixin({},a,{hillshadeType:this.hillshadeType,psPower:this.psPower,psFactor:this.psFactor,slopeType:this.slopeType});Object.keys(a).forEach(function(b){null==a[b]&&
delete a[b]});this._function=new g(a);this._hillshadeFunction=new f(a);this._hillshadeFunction.outputPixelType="U8";this._hillshadeFunction.renderTexture=!1;this._function.functionArguments.raster=this._hillshadeFunction},hasTilingEffects:function(){return this._hillshadeFunction.hasTilingEffects()},draw2D:function(a){this._updateHillshadeParameters();a=this._clonePixelData(a);a=this._hillshadeFunction.read2D({raster:a});if(this.contrastOffset||this.brightnessOffset)a.pixelBlock=h.contrastBrightnessStretch(a.pixelBlock,
{contrastOffset:this.contrastOffset,brightnessOffset:this.brightnessOffset});return a},drawGL:function(a){this._updateHillshadeParameters();this.contrastOffset||this.brightnessOffset?(this._hillshadeFunction.renderTexture=!1,this._function.renderTexture=!0,a=this._hillshadeFunction.readGL({raster:a}),this._function._cbGL(a)):(this._hillshadeFunction.renderTexture=!0,this._hillshadeFunction.readGL({raster:a}))},toJson:function(){var a=this._hillshadeFunction.toJson().rasterFunctionArguments;a.colorRamp=
this.colorRamp||"";this.invert&&(a.invert=!0);a.contrastOffset=this.contrastOffset;a.brightnessOffset=this.brightnessOffset;return{rendererName:this.rendererName,rendererArguments:a}},toCommonRendererJson:function(){return{type:"rasterShadedRelief",hillshadeType:["traditional","multi-directional"][this.hillshadeType]||"traditional",azimuth:this.azimuth,altitude:this.altitude,zFactor:this.zFactor,scalingType:3===this.slopeType?"adjusted":"none",pixelSizePower:this.psPower,pixelSizeFactor:this.psFactor,
colorRamp:this.colorRamp&&this.colorRamp.toJson?this.colorRamp.toJson():this.colorRamp}},_updateHillshadeParameters:function(){var a=this._hillshadeFunction.functionArguments;a.hillshadeType=this.hillshadeType;a.azimuth=this.azimuth;a.altitude=this.altitude;a.zFactor=this.zFactor;a.slopeType=this.slopeType;a.psPower=this.psPower;a.psFactor=this.psFactor}})});