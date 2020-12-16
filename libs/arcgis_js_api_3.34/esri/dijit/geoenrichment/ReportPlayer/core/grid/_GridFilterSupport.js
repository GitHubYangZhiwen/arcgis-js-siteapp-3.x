// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/_GridFilterSupport","esri/dijit/geoenrichment/when dojo/_base/declare dojo/dom-construct ./coreUtils/GridFilterUtil ../sections/dynamicSettings/supportClasses/FilterUtil dojo/i18n!esri/nls/jsapi".split(" "),function(g,h,a,e,f,c){c=c.geoenrichment.dijit.ReportPlayer.Grid;return h(null,{presetFilter:null,ignorePresetFilter:!1,_filterStats:null,_filterRanges:null,_numShownElements:null,_emptyDiv:null,_applyFilterToStoreData:function(){if(!this.ignorePresetFilter){var b=
this._getSetRanges();this._emptyDiv&&a.destroy(this._emptyDiv);this._emptyDiv=null;this.mainNode.style.display="";b&&b.length&&(this._numShownElements=e.filterGridData(this,b).numRowsShown,this._numShownElements||(this._emptyDiv=a.create("div",{"class":"esriGEAbsoluteStretched esriGENoDataPlaceHolder"},this.domNode),a.create("div",{"class":"esriGENoDataPlaceHolderLabel",innerHTML:c.noTableData},this._emptyDiv),this.mainNode.style.display="none",this._emptyDiv.style.paddingTop=(this.getHeight(!1,!1)-
20)/2+"px"))}},_getSetRanges:function(){if(!this.presetFilter||this.presetFilter.ranges&&!this.viewModel.dynamicReportInfo)return this._filterRanges;var b=this.getFilterRanges();return this._filterRanges=b&&b.map(function(d){var a=f.filterData(d.dataArray,1===b.length||this.presetFilter.columnIndex===d.columnIndex?this.presetFilter:{method:f.NONE});return{fieldName:d.fieldName,min:a[0],max:a[a.length-1]}},this)},getFilterRanges:function(){return(this._filterStats=e.collectStatsForVariables(this))&&
this._filterStats.filterRanges.length?this._filterStats.filterRanges:null},setFilterRanges:function(b){var a=this;this.presetFilter=null;this._filterRanges=b;return g(this.refresh(),function(){return a._chartViewInfo&&a.tableToChart(a._chartViewInfo)})},getNumElementsTotal:function(){return this._filterStats&&this._filterStats.numRowsTotal||0},getNumElementsShown:function(){return"number"===typeof this._numShownElements?this._numShownElements:this.getNumElementsTotal()}})});