// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/htmlToSvg/supportClasses/Clipper",["./ElementBuilder"],function(d){return{_pathId:0,addClipping:function(a,b,c){var e="HTMLtoSVGConverter_clip_path_"+this._pathId++;a={width:a.style.getPaddings().bw,height:a.style.getPaddings().bh,x:a.box.x+a.style.getBorder().l.width,y:a.box.y+a.style.getBorder().t.width,rx:a.style.getBorder().radius,ry:a.style.getBorder().radius};c&&(a=this._intersect(a,c.clipParams));if(!a)return null;c=d.buildElement("clipPath",{id:e},d.buildElement("rect",
a));b.push(c);return{clipId:e,clipParams:a}},_intersect:function(a,b){return a.x+a.width<b.x||a.x>b.x+b.width||a.y+a.height<b.y||a.y>b.y+b.height?null:{x:a.x<b.x?b.x:a.x,y:a.y<b.y?b.y:a.y,width:a.x<b.x?a.x+a.width-b.x:Math.min(a.width,b.x+b.width-a.x),height:a.y<b.y?a.y+a.height-b.y:Math.min(a.height,b.y+b.height-a.y)}}}});