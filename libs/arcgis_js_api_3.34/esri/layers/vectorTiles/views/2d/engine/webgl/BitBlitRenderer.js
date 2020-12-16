// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/BitBlitRenderer","require exports ./shaders/glShaderSnippets ../../../webgl/BufferObject ../../../webgl/Program ../../../webgl/VertexArrayObject".split(" "),function(l,m,d,g,h,k){return function(){function c(){this._initialized=!1}c.prototype.dispose=function(){this._program&&(this._program.dispose(),this._program=null);this._vertexArrayObject&&(this._vertexArrayObject.dispose(),this._vertexArrayObject=null)};c.prototype.render=function(b,e,c,
a){b&&(this._initialized||this._initialize(b),b.setBlendFunctionSeparate(1,771,1,771),b.bindVAO(this._vertexArrayObject),b.bindProgram(this._program),e.setSamplingMode(c),b.bindTexture(e,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",a),b.drawArrays(5,0,4),b.bindVAO())};c.prototype._initialize=function(b){if(this._initialized)return!0;var c={a_pos:0,a_tex:1},f=new h(b,d.bitblitVS,d.bitblitFS,c);if(!f)return!1;var a=new Int8Array(16);a[0]=-1;a[1]=-1;a[2]=0;a[3]=0;a[4]=
1;a[5]=-1;a[6]=1;a[7]=0;a[8]=-1;a[9]=1;a[10]=0;a[11]=1;a[12]=1;a[13]=1;a[14]=1;a[15]=1;b=new k(b,c,{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:4,normalized:!1,divisor:0},{name:"a_tex",count:2,type:5120,offset:2,stride:4,normalized:!1,divisor:0}]},{geometry:g.createVertex(b,35044,a)});this._program=f;this._vertexArrayObject=b;return this._initialized=!0};return c}()});