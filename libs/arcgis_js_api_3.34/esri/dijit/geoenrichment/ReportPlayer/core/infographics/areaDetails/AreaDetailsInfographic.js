// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/areaDetails/AreaDetailsInfographic","dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/when dojo/dom-class ../paginatableTable/PaginatableTableInfographic ./AttributesNotesSectionsBuilder ./DefaultAttachmentsStore ../../grid/coreUtils/GridStyleUtil esri/dijit/geoenrichment/utils/RegExpUtil dojo/i18n!esri/nls/jsapi".split(" "),function(b,e,f,g,c,h,k,l,m,d){d=d.geoenrichment.dijit.ReportPlayer.AreaDetailsInfographic;b=b(c,{noDataText:d.noDetails,
hasResizableColumns:!1,allowSorting:!1,_stats:null,postCreate:function(){this.inherited(arguments);g.add(this.domNode,"esriGEAreaDetailsInfographic")},_buildSectionJsonsAndStat:function(){return f(this._buildDataInfo(),function(a){this._stats=a&&a.stats;return a}.bind(this))},_buildDataInfo:function(){return h.buildDataInfo({attachmentsStore:this._getAttachmentsStore(),infographicJson:this._currentInfographicJson,currentFeatureIndex:this.currentFeatureIndex,titleHeight:this._getTitleHeight(),defaultCellStyle:this._getDefaultCellStyle(),
minRowHeight:this.minRowHeight,scaleToFitHeight:this._currentInfographicJson.scaleToFitHeight,footerHeight:c.BOTTOM_AREA_HEIGHT,searchTextRe:this._searchTextRe,forceSinglePage:this.isEditMode,width:this.width,height:this.height,benchmarkController:this.viewModel.getBenchmarkController&&this.viewModel.getBenchmarkController()})},_getAttachmentsStore:function(){return this.viewModel.dynamicReportInfo?this.viewModel.dynamicReportInfo.attachmentsStore:k.getDefaultAttachmentsStore()},_getDefaultCellStyle:function(a){a=
this.viewModel.getDocumentDefaultStyles(this.theme);return l.filterCellStyles(e.mixin({},a,this.viewModel.getTableDefaultStyles(this.theme,"Default")))},_resizeSection:function(a){this.isEditMode&&this.inherited(arguments)},_searchText:null,_searchTextRe:null,setSearchText:function(a){this._searchTextRe=(this._searchText=a)&&m.createRegExp(a,"i",!0);return this._updateContent()},getNumItemsTotal:function(){return this._stats&&this._stats.numAttributesTotal+this._stats.numNotesTotal||0},getNumItemsShown:function(){return this._stats&&
this._stats.numAttributesShown+this._stats.numNotesShown||0},getVisualState:function(){return this._searchText&&{type:this._currentInfographicJson.type,searchText:this._searchText}},setVisualState:function(a){return a&&a.searchText&&this.setSearchText(a.searchText)},_destroySections:function(){this.inherited(arguments);this._stats=null}});b.MIN_ROW_HEIGHT=c.MIN_ROW_HEIGHT;return b});