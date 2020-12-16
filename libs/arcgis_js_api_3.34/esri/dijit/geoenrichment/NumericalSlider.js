// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/templates/NumericalSlider.html":'\x3cdiv class\x3d"esriGENumericalSlider esriGENonSelectable"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"divLabel" class\x3d"esriGENumericalSliderLabel"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"divChartContainer" class\x3d"esriGENumericalSliderContent"\x3e\r\n        \x3cdiv class\x3d"esriGENumericalSliderMinValueTextBox" data-dojo-attach-point\x3d"divMinValue"\x3e\x3c/div\x3e\r\n        \x3cdiv  class\x3d"esriGENumericalSliderContainer"\x3e\r\n            \x3cdiv class\x3d"esriGEAbsoluteStretched numericalSlider_statisticsContainer" data-dojo-attach-point\x3d"statisticsContainer"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"hLineDiv" class\x3d"numericalSlider_hLineDiv"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"minThumbDiv" class\x3d"numericalSlider_minThumbDiv"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"maxThumbDiv" class\x3d"numericalSlider_maxThumbDiv"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e \r\n        \x3cdiv class\x3d"esriGENumericalSliderMaxValueTextBox" data-dojo-attach-point\x3d"divMaxValue"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/NumericalSlider","dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/on dojox/timing dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/form/TextBox esri/dijit/geoenrichment/utils/DeviceUtil esri/dijit/geoenrichment/utils/DnDUtil esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/ObjectUtil dojo/text!./templates/NumericalSlider.html".split(" "),function(q,r,t,u,d,v,w,x,y,h,e,n,z,f,A){var p=e.isMobileDevice()?40:20;
return q([x,y,w],{templateString:A,decimals:0,minValue:0,maxValue:0,lowerValue:0,upperValue:0,maxNumStatBlocks:20,minNumStatBlocks:10,minNumDataForStatistics:2,value:null,timeIntervalLength:null,_timer:null,constructor:function(a){a&&this.setData(a)},postCreate:function(){this.inherited(arguments);this.label?this.divLabel.innerHTML=this.label:z.hide(this.divLabel);e.isMobileDevice()&&t.add(this.domNode,"isMobile");this._createMinTextBox();this._createMaxTextBox();this._updateTextBoxes();this._createThumbs()},
_createMinTextBox:function(){var a=this;this.tbxMinValue=(new h).placeAt(this.divMinValue);d(this.tbxMinValue.textbox,"keyup",function(b){13===b.keyCode&&a._onChangeMinValue()});this.own(this.tbxMinValue);d(this.tbxMinValue,e.clickOrRelease,function(b){a.tbxMinValue.textbox.select()})},_createMaxTextBox:function(){var a=this;this.tbxMaxValue=(new h).placeAt(this.divMaxValue);d(this.tbxMaxValue.textbox,"keyup",function(b){13===b.keyCode&&a._onChangeMaxValue()});this.own(this.tbxMaxValue);d(this.tbxMaxValue,
e.clickOrRelease,function(b){a.tbxMaxValue.textbox.select()})},_createThumbs:function(){var a=this;n.addGlobalDragHanlder({node:this.minThumbDiv,tolerance:0,dragMoved:function(b,c,f){a.minThumbDiv.style.left=a.minThumbDiv.offsetLeft+c+"px";a.lowerValue=Math.min(a.upperValue,Math.max(a.minValue,a._thumbToValue(a.minThumbDiv)));a._updateThumbs();a._updateTextBoxes();a._emitChangeEvent()}});n.addGlobalDragHanlder({node:this.maxThumbDiv,tolerance:0,dragMoved:function(b,c,f){a.maxThumbDiv.style.left=a.maxThumbDiv.offsetLeft+
c+"px";a.upperValue=Math.max(a.lowerValue,Math.min(a.maxValue,a._thumbToValue(a.maxThumbDiv)));a._updateThumbs();a._updateTextBoxes();a._emitChangeEvent()}});this._updateThumbs()},setData:function(a){a.timeIntervalLength&&(a.timeIntervalLength=a.timeIntervalLength,this._timer=new v.Timer,this._timer.onTick=this._onTick.bind(this));"number"!==typeof a.minValue&&a.dataArray&&(a.minValue=Math.min.apply(null,a.dataArray));"number"!==typeof a.maxValue&&a.dataArray&&(a.maxValue=Math.max.apply(null,a.dataArray));
"number"!==typeof a.lowerValue&&"number"===typeof a.minValue&&(a.lowerValue=a.minValue);"number"!==typeof a.upperValue&&"number"===typeof a.maxValue&&(a.upperValue=a.maxValue);r.mixin(this,a)},setValue:function(a,b){var c="rtl"===document.dir?0:1;this.lowerValue=a["rtl"===document.dir?1:0];this.upperValue=a[c];this._updateTextBoxes();this._updateThumbs();!0===b&&this._onTick()},_updateTextBoxes:function(){this._setMinValue(this.numberToText(this.lowerValue));this._setMaxValue(this.numberToText(this.upperValue))},
_setMinValue:function(a){this.tbxMinValue.set("value",a);this.tbxMinValue.textbox.title=a},_setMaxValue:function(a){this.tbxMaxValue.set("value",a);this.tbxMaxValue.textbox.title=a},_updateThumbs:function(){this._valueToThumb(this.minThumbDiv,this.lowerValue);this._valueToThumb(this.maxThumbDiv,this.upperValue)},_valueToThumb:function(a,b){a.style.left=(b-this.minValue)/(this.maxValue-this.minValue)*(this.hLineDiv.clientWidth||115)-(a.clientWidth||p)/2+(this.hLineDiv.offsetLeft||5)+"px"},_thumbToValue:function(a){return(a.offsetLeft+
(a.clientWidth||p)/2-(this.hLineDiv.offsetLeft||5))/(this.hLineDiv.clientWidth||115)*(this.maxValue-this.minValue)+this.minValue},_onChangeMinValue:function(a){a=this.textToNumber(this.tbxMinValue.get("value"));a=Math.min(this.maxValue,Math.max(this.minValue,a));isNaN(a)||(this.lowerValue=a,this.upperValue=a<=this.upperValue?this.upperValue:a,this.setValue([this.lowerValue,this.upperValue]),this._emitChangeEvent());this._updateTextBoxes()},_onChangeMaxValue:function(a){a=this.textToNumber(this.tbxMaxValue.get("value"));
a=Math.min(this.maxValue,Math.max(this.minValue,a));isNaN(a)||(this.lowerValue=a>=this.lowerValue?this.lowerValue:a,this.upperValue=a,this.setValue([this.lowerValue,this.upperValue]),this.upperValue=a,this._emitChangeEvent());this._updateTextBoxes()},_emitChangeEvent:function(){this._timer?(this._timer.stop(),this._timer.setInterval(this.timeIntervalLength),this._timer.start()):this._onTick()},_onTick:function(){var a={lowerValue:this.lowerValue,upperValue:this.upperValue};this._timer&&this._timer.stop();
this.onChange(a)},setStatistics:function(a){a=a.filter(function(a){return a>=this.minValue&&a<=this.maxValue},this);if(!(a.length<this.minNumDataForStatistics)){a.sort(function(a,b){return a-b});for(var b=Infinity,c=0;c<a.length;c++)if(0!==c){var d=Math.abs(a[c]-a[c-1]);0<d&&(b=Math.min(d))}var b=isFinite(b)?Math.max(Math.round((this.maxValue-this.minValue)/b)+1,this.minNumStatBlocks):1E6,b=Math.min(this.maxNumStatBlocks,b),e=(this.maxValue-this.minValue)/b,l=this.minValue+e,g=[0],m=0,k=Math.max(1,
f.getBestPrecision(this.maxValue));a.forEach(function(a){if(!(f.roundNumber(a,k)<=f.roundNumber(l,k)))for(;f.roundNumber(a,k)>f.roundNumber(l,k);)l+=e,g.push(0);g[g.length-1]++;m=Math.max(m,g[g.length-1])});this.statisticsContainer.innerHTML="";var h=(this.statisticsContainer.clientWidth||115)/b;g.forEach(function(a,b){var c=u.create("div",{"class":"esriGENumericalSlider_statisticsContainerBlock"},this.statisticsContainer);c.style.width=h-1+"px";a=0<a?18*a/m+2:0;c.style.height=a+"px";c.style.left=
h*b+"px";c.style.top=20-a+"px"},this)}},numberToText:function(a){return a.toFixed(this.decimals)},textToNumber:function(a){return parseFloat(a)},round:function(a){return this.textToNumber(this.numberToText(a))},onChange:function(a){}})});