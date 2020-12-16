// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/MaterialInfoUtils",["require","exports","./enums","./MaterialInfo","./MaterialKeyInfo"],function(n,g,d,h,l){function m(b){var c=[];c[0]=b.sdf?!0:!1;c[1]=b.vvSizeMinMaxValue?!0:!1;c[2]=b.vvSizeScaleStops?!0:!1;c[3]=b.vvSizeFieldStops?!0:!1;c[4]=b.vvSizeUnitValue?!0:!1;c[5]=b.vvColor?!0:!1;c[6]=b.vvRotation?!0:!1;c[7]=b.vvOpacity?!0:!1;c[8]=b.visibility?!0:!1;c[9]=b.pattern?!0:!1;c[10]=b.heatmap?!0:!1;return c.reduce(function(b,c,a){c&&(b|=1<<a+
2);return b},0)}function k(b){if(b.geometryType===d.WGLGeometryType.UNKNOWN)return-1;var c=m(b)<<3;return b.geometryType+c}Object.defineProperty(g,"__esModule",{value:!0});g.createTextMaterialInfo=function(b,c,e){var f=new h.default,a=new l;a.geometryType=e;a.sdf=!0;a.pattern=!1;a.visibility=!1;a.heatmap=!1;f.texBindingInfo.push(new h.TexBindingInfo(2,b.page,"u_texture"));0===c?a.vvOpacity=a.vvSizeMinMaxValue=a.vvSizeScaleStops=a.vvSizeFieldStops=a.vvSizeUnitValue=a.vvColor=a.vvRotation=!1:(a.vvOpacity=
0!==(c&d.WGLVVFlag.OPACITY),a.vvSizeMinMaxValue=0!==(c&d.WGLVVFlag.SIZE_MINMAX_VALUE),a.vvSizeScaleStops=0!==(c&d.WGLVVFlag.SIZE_SCALE_STOPS),a.vvSizeFieldStops=0!==(c&d.WGLVVFlag.SIZE_FIELD_STOPS),a.vvSizeUnitValue=0!==(c&d.WGLVVFlag.SIZE_UNIT_VALUE),a.vvColor=0!==(c&d.WGLVVFlag.COLOR),a.vvRotation=0!==(c&d.WGLVVFlag.ROTATION));f.materialKey=k(a);f.materialKeyInfo=a;return f};g.createMaterialInfo=function(b,c,e){var f=new h.default,a=new l;a.geometryType=c;b?(b=b.spriteMosaicItem,a.sdf=b.sdf,a.pattern=
!0,f.texBindingInfo.push(new h.TexBindingInfo(1,b.page,"u_texture"))):(a.sdf=!1,a.pattern=!1);0===e?a.vvOpacity=a.vvSizeMinMaxValue=a.vvSizeScaleStops=a.vvSizeFieldStops=a.vvSizeUnitValue=a.vvColor=a.vvRotation=!1:(a.vvOpacity=0!==(e&d.WGLVVFlag.OPACITY),a.vvSizeMinMaxValue=0!==(e&d.WGLVVFlag.SIZE_MINMAX_VALUE),a.vvSizeScaleStops=0!==(e&d.WGLVVFlag.SIZE_SCALE_STOPS),a.vvSizeFieldStops=0!==(e&d.WGLVVFlag.SIZE_FIELD_STOPS),a.vvSizeUnitValue=0!==(e&d.WGLVVFlag.SIZE_UNIT_VALUE),a.vvColor=0!==(e&d.WGLVVFlag.COLOR),
a.vvRotation=0!==(e&d.WGLVVFlag.ROTATION));a.visibility=!1;f.materialKey=k(a);f.materialKeyInfo=a;return f};g.getMaterialKey=k;g.getMaterialVariations=function(b){var c=b&7;b>>=3;return{geometryType:c,variations:[0!==(b&1),0!==(b&2),0!==(b&4),0!==(b&8),0!==(b&16),0!==(b&32),0!==(b&64),0!==(b&128),0!==(b&256),0!==(b&512),0!==(b&1024),0!==(b&2048),0!==(b&4096)]}}});