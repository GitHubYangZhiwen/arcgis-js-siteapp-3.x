// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/function/RasterFunctionWebGLMixin","dojo/_base/declare dojo/_base/lang ./RasterFunctionX ./pixelShaders ./vertexShaders ./webglHelper ./convolutionKernel".split(" "),function(l,v,w,m,k,f,x){return l(null,{gl:null,rgbaFloatData:null,originalTexture:null,lastTexture:null,renderTexture:!1,constructor:function(b){this._isProgramInitialized=!1;this.gl=b&&b.gl;b&&b.renderTexture&&(this.renderTexture=b.renderTexture);this._xformSetting=b&&b._xformSetting||{requireProjection:!1,
meshSize:[20,20]}},bindFrameBuffer:function(){var b=this.gl;this._setupPingPongTextures();this._setupBranchingTextures();var a;a=this._glSetting;this.isBranch?(a.branchIndex=(a.branchIndex+1)%a.branchCount,a=a.branches[a.branchIndex]):(a.pingpongIndex=(a.pingpongIndex+1)%a.pingpong.length,a=a.pingpong[a.pingpongIndex]);b.bindFramebuffer(b.FRAMEBUFFER,a.frameBuffer);b.viewport(0,0,b.drawingBufferWidth,b.drawingBufferHeight);return a},_initializeProgram:function(b){if(this.gl)try{var a=this.gl;a.viewport(0,
0,a.drawingBufferWidth,a.drawingBufferHeight);var c=this._glSetting.programUniforms,d="local"===this.functionName?"local"+this.functionArguments.operation:this.functionName,e=c[d];if(e)this._uniforms=e.uniforms,this.rasterProgram=e.program;else{var r=(this._useMesh=this._tileMode&&this._xformSetting.requireProjection)?k.mesh:k.basic,g=k.getShader(a,b.vertex||r),h=m.getShader(a,b.fragment),n=this._loadProgram(g,h),p={rasterProgram:f.getUniforms(a,n)};c[d]={uniforms:p,program:n};this.rasterProgram=
n;this._uniforms=p}a.useProgram(this.rasterProgram);var q=a.getAttribLocation(this.rasterProgram,"a_texCoord"),l=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,l);var t=f.createMesh(this._xformSetting.meshSize);a.bufferData(a.ARRAY_BUFFER,t,a.STATIC_DRAW);a.enableVertexAttribArray(q);a.vertexAttribPointer(q,2,a.FLOAT,!1,0,0);a.disable(a.DEPTH_TEST);a.blendFunc(a.SRC_ALPHA,a.ZERO);a.disable(a.BLEND);a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1);this._shaderInfo=
{fragment:b.fragmentName}}catch(u){console.error("webgl exception: "+u.message)}else console.error("WebGL is required.")},_setUniform:function(b,a,c){null!=a&&(c&&!this._uniforms[c]&&(this._uniforms[c]=f.getUniforms(this.gl,this[c])),c=c?this._uniforms[c]:this._uniforms.rasterProgram,(b=c[b]||c[b+"[0]"])&&f.setUniform(this.gl,b,a))},_setUniforms:function(b,a){var c=Object.keys(b),d,e=c.length;for(d=0;d<e;d++)this._setUniform(c[d],b[c[d]],a);this.rawInput?this._setUniform("u_flipY",!0,a):this._setUniform("u_flipY",
!1,a);this._tileMode?(this.rawInput?(b=this._xformSetting.offset,c=this._xformSetting.scale):(b=[0,0],c=[1,1]),this._setUniform("u_xformOffset",b,a),this._setUniform("u_xformScale",c,a),this._xformSetting.requireProjection&&(this.rawInput?(this._setupXformTexture(),this._setUniform("u_projection",!0,a),this._setUniform("u_transformGridSize",this._xformSetting.gridConfig.size,a),this._setUniform("u_transformSpacing",this._xformSetting.gridConfig.spacing,a),this._setUniform("u_targetImageSize",new Float32Array([this.gl.drawingBufferWidth,
this.gl.drawingBufferHeight]),a)):this._setUniform("u_projection",!1,a))):(b=[0,0],c=[1,1],this._setUniform("u_xformOffset",b,a),this._setUniform("u_xformScale",c,a));this.rawInput&&this._rawResolution&&("RSP_BilinearInterpolation"===this.interpolation||"RSP_CubicConvolution"===this.interpolation)?(this._setUniform("u_resampling",1),this._setUniform("u_rawResolution",this._rawResolution)):this._setUniform("u_resampling",0)},_setupTextureData:function(b,a){if(b.texture)return b;b.raster&&b.raster.pixelBlock&&
(b=b.raster);this.rawInput=!0;var c=a&&a.notOriginal,d=a&&a.bandIDs;a&&a.reCreate?a=!1:(a=this._tileMode?!this._xformSetting.hasNewTexture:!this._glSetting.hasNewTexture)&&this._originalBandIDs&&(a=d?this._originalBandIDs.join("")===d.join(""):!1);0<this._glSetting.branchCount&&(a=!1);if(a&&this.originalTexture)return{extent:b.extent,texture:this.originalTexture};a=this._createTexture();c||(this.originalTexture=a,this._originalBandIDs=d);var c=this.gl,e=b.pixelBlock;this._rawResolution=e?[1/b.pixelBlock.width,
1/b.pixelBlock.height]:[1/this.gl.drawingBufferWidth,1/this.gl.drawingBufferHeight];var f=0;d&&0<d.length&&e&&(f=Math.max.apply(null,d),e.pixels.length>f&&d&&(e.pixels=d.map(function(a){return e.pixels[a]}),e.statistics&&(e.statistics=d.map(function(a){return e.statistics[a]}))));d=e.width;f=e.height;c.getExtension("OES_texture_float");var g=e.getAsRGBAFloat();c.texImage2D(c.TEXTURE_2D,0,c.RGBA,d,f,0,c.RGBA,c.FLOAT,g);return{extent:b.extent,texture:a}},_setupPingPongTextures:function(){var b=this._glSetting;
if(!b||!b.pingpong){b.pingpong=[];var a=f.createBufferTexture(this.gl,!1);b.pingpong.push(a);a=f.createBufferTexture(this.gl,!1);b.pingpong.push(a);b.pingpongIndex=1}},_setupBranchingTextures:function(){var b=this._glSetting;if(!b||!b.branches){b.branches=[];var a=0,c,d=b.branchCount;if(0<d){for(a=0;a<d;a++)c=f.createBufferTexture(this.gl,!1),b.branches.push(c);b.branchIndex=d-1}}},_setupXformTexture:function(b){for(var a=this._createTexture(),c=this.gl,d=4*this._xformSetting.gridConfig.size[0],e=
this._xformSetting.gridConfig.size[1],f=new Float32Array(d*e*4),g=0,h=0;h<this._xformSetting.gridConfig.coefficients.length;h++)f[g++]=this._xformSetting.gridConfig.coefficients[h],2===h%3&&(f[g++]=1);c.getExtension("OES_texture_float");c.texImage2D(c.TEXTURE_2D,0,c.RGBA,d,e,0,c.RGBA,c.FLOAT,f);this._bindTexture(a,"u_transformGrid",b)},_createTexture:function(b){return f.createTexture(this.gl,b)},_bindTexture:function(b,a,c){a=a||"u_image";c=this._uniforms[c||"rasterProgram"];var d=this._getTextureIndex(a);
if(-1!==d){var e=this.gl;e.uniform1i(c[a].location,d);e.activeTexture(e.TEXTURE0+d);e.bindTexture(e.TEXTURE_2D,b)}},_getTextureIndex:function(b,a){a=this._uniforms[a||"rasterProgram"];if(!a||!a[b]||a[b].info.type!==this.gl.SAMPLER_2D)return-1;if("u_transformGrid"===b)return 0;b="u_image"===b?0:parseInt(b.replace("u_image",""));return this._xformSetting.requireProjection?b+1:b},_drawGL:function(b){var a=this.gl;this.renderTexture?(a.enable(a.BLEND),a.bindFramebuffer(a.FRAMEBUFFER,null)):a.disable(a.BLEND);
b||a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight);b=this._xformSetting.meshSize||[1,1];a.drawArrays(a.TRIANGLES,0,b[0]*b[1]*6);this._drawMesh()},_drawMesh:function(){if(this.renderTexture&&this._glSetting.drawMesh){this.meshProgram=this.meshProgram||this._setupMeshProgram();var b=this.gl;b.useProgram(this.meshProgram);b.bindFramebuffer(b.FRAMEBUFFER,null);var a=b.getAttribLocation(this.meshProgram,"a_texCoord"),c=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,c);var c=this._xformSetting.meshSize||
[1,1],d=f.createMesh(c,!0);b.bufferData(b.ARRAY_BUFFER,d,b.STATIC_DRAW);b.enableVertexAttribArray(a);b.vertexAttribPointer(a,2,b.FLOAT,!1,0,0);b.disable(b.DEPTH_TEST);b.blendFunc(b.ONE,b.ZERO);this._setUniforms({u_color:[0,0,1,1],u_drawMeshLines:!0},"meshProgram");b.drawArrays(b.LINES,0,c[0]*c[1]*10)}},_setupMeshProgram:function(){var b=k.getShader(this.gl,k.mesh),a=m.getShader(this.gl,m.constant);return this._loadProgram(b,a)},_loadProgram:function(b,a){return f.loadProgram(this.gl,b,a)},_getShaderScript:function(b,
a){a=document.getElementById(a);if(!a)return null;b="";for(a=a.firstChild;a;)3==a.nodeType&&(b+=a.textContent),a=a.nextSibling;return b}})});