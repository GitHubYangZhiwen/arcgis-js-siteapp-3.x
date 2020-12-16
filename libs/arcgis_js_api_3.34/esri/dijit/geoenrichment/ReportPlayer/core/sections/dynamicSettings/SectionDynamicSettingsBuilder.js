// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/dynamicSettings/SectionDynamicSettingsBuilder","dojo/_base/declare dojo/_base/lang dojo/on esri/dijit/geoenrichment/promise/all esri/dijit/geoenrichment/when dojo/dom-class dojo/dom-construct dijit/Destroyable esri/dijit/geoenrichment/OnDemandSelect esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState ./SettingsProvider ./SectionDynamicSettings ./SectionDynamicFilter ./supportClasses/ToolbarAdjuster esri/dijit/geoenrichment/utils/DeviceUtil esri/dijit/geoenrichment/utils/DnDUtil esri/dijit/geoenrichment/utils/MouseUtil esri/dijit/geoenrichment/utils/PopupUtil esri/dijit/geoenrichment/utils/TooltipUtil dojo/i18n!esri/nls/jsapi".split(" "),
function(n,p,h,q,l,m,d,r,t,e,u,v,w,x,y,z,k,f,A,g){g=g.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder;return n(r,{_section:null,_settingsToolbar:null,_buttonBar:null,_settingsButton:null,_filterButton:null,_filtersOnIndicator:null,_featureSelect:null,_settingsWidget:null,_filterWidget:null,_stats:null,_onButtonBarShowCallbacks:null,_needRequerySettingsSet:!1,_getSettingsPromise:null,constructor:function(b,a){this._section=b;p.mixin(this,a);this._createSettings()},_createSettings:function(){var b=
this;this._provideSettingsStats().then(function(){b._stats&&b._section.domNode&&(b._tryAddFeatureSelect(),b._tryAddLocatorExportButton(),b._tryAddFilterButton(),b._tryAddSettingsButton(),b.onButtonsCreated())})},_provideSettingsStats:function(){var b=this;return this._getSettingsPromise=u.getSettingsSet(this._section).then(function(a){b._stats=a})},_tryAddFeatureSelect:function(){var b=this;if(this._stats.multiFeatureSettings&&this._stats.multiFeatureSettings.canSelectFeatures){var a=this._section.viewModel.dynamicReportInfo.analysisAreas.map(function(a,
b){return{value:b,label:a.shortName||a.name}});this._provideSettingsToolbar();var c=d.create("div",{"class":"dijitInline"},this._settingsToolbar,"first");this._featureSelect=(new t({"class":"esriGEOnDemandSelectNoBackground esriGEOnDemandSelectWhite",listClass:"esriGEOnDemandSelectVeryTallList esriGEOnDemandSelectSpacedOut",options:a,value:b._section.currentFeatureIndex||0,allowRepetitiveSelection:!1,onChange:function(a){b._needRequerySettingsSet=!0;b._setFiltersOnIndicatorVisible(!1);var c=b._section.toJson();
c.currentFeatureIndex=a.value;b._section.fromJson(c);b._featureSelect.closePopup();b._reset()}})).placeAt(c);this.own(this._featureSelect)}},_tryAddLocatorExportButton:function(){var b=this;if(this._stats.hasExport&&!this._section.isDataDrillingView){var a=this._createButton("dijitInline sectionDynamicSettings_exportButton");h(a,"click",function(){b._stats.locatorSettings.exportSettings.exportToExcel()});A.setTooltipToNode(a,g.exportInfographicPanel)}},_settingsStateTimeoutH:null,_filterPopupShown:!1,
_filterPopupH:null,_tryAddFilterButton:function(){var b=this;this._stats.hasFilter&&(this._filterButton=this._createButton("dijitInline sectionDynamicSettings_filterButton",function(){b._filterPopupH=b._filterPopupH||f.makePopup(function(){return b._provideFilterWidget()},b._section,b._filterButton,{orient:["before","below"],onShow:function(){b._filterPopupShown=!0;clearTimeout(b._settingsStateTimeoutH);e.isViewingDynamicSettings=!0},onClose:function(){b._filterPopupShown=!1;b._settingsPopupShown||
(b._settingsStateTimeoutH=setTimeout(function(){e.isViewingDynamicSettings=!1}))}})}),this._setFiltersOnIndicatorVisible(this._stats.chartSettings&&this._stats.chartSettings.filter&&this._stats.chartSettings.filter.filter||this._stats.tableSettings&&this._stats.tableSettings.filter&&this._stats.tableSettings.filter.filter))},_settingsPopupShown:!1,_settingsPopupH:null,_tryAddSettingsButton:function(){var b=this;this._stats.hasViewSettings&&(this._settingsButton=this._createButton("dijitInline sectionDynamicSettings_settingsButton",
function(){b._settingsPopupH=b._settingsPopupH||f.makePopup(function(){return b._provideSettingsWidget()},b._section,b._settingsButton,{orient:["before","below"],onShow:function(){b._settingsPopupShown=!0;clearTimeout(b._settingsStateTimeoutH);e.isViewingDynamicSettings=!0},onClose:function(){b._settingsPopupShown=!1;b._filterPopupShown||(b._settingsStateTimeoutH=setTimeout(function(){e.isViewingDynamicSettings=!1}))}})}))},_filterOnMouseOverProvidedFlag:!1,_createButton:function(b,a){this._provideSettingsToolbar(a);
return d.create("div",{"class":b},this._buttonBar)},_provideSettingsToolbar:function(b){function a(a,b){c._section.isDataDrillingView&&(a=!0);c._buttonBar.style.display=!a||!c._section.isDataDrillingView&&e.isViewingDataDrillingZoom?"none":"";a&&c._onButtonBarShowCallbacks.forEach(function(a){return a()});a?c._adjustToolbarPosition():c._closePopup();m[a?"add":"remove"](c._section.domNode,"hasDynamicSettingsToolbar");a&&b&&!c._filterOnMouseOverProvidedFlag&&(c._filterOnMouseOverProvidedFlag=!0,c._provideFilterWidget())}
var c=this;this._settingsToolbar||(this._settingsToolbar=d.create("div",{"class":"sectionDynamicSettings_toolbar"},this._section.domNode),this._buttonBar=d.create("div",{"class":"dijitInline sectionDynamicSettings_buttonBar"},this._section.dynamicSettingsToolbarRoot||this._settingsToolbar),this._onButtonBarShowCallbacks=[],a(!0),a(!1),y.isMobileDevice()?(z.addNoDragClickHandler(this._section.domNode,function(){a(!0)}),this.own(h(document.body,"touchstart",function(b){c.isMouseOver(b)||a(!1)}))):this.own(h(document.body,
"mousemove",function(){a(c.isMouseOver(),!0)})));b&&this._onButtonBarShowCallbacks.push(b)},_closePopup:function(){f.close(this._settingsWidget);f.close(this._filterWidget)},_reset:function(){this._filterWidget&&this._filterWidget.destroy();this._filterWidget=null;this._settingsWidget&&this._settingsWidget.destroy();this._settingsWidget=null;this._filterPopupH&&this._filterPopupH.remove();this._filterPopupH=null;this._settingsPopupH&&this._settingsPopupH.remove();this._settingsPopupH=null},_provideSettingsWidget:function(){function b(){return a._section.getInfographic()&&
a._section.getInfographic().getInnerInfographic()}var a=this;this._needRequerySettingsSet&&(this._needRequerySettingsSet=!1,this._provideSettingsStats());return l(this._getSettingsPromise,function(){if(a._stats&&a._stats.hasViewSettings)return a._settingsWidget||(a._settingsWidget=new v({chartSettings:a._stats.chartSettings&&a._stats.chartSettings.viewSettings,comparisonSettings:a._stats.comparisonSettings&&a._stats.comparisonSettings.viewSettings,locatorSettings:a._stats.locatorSettings&&a._stats.locatorSettings.viewSettings,
mapSettings:a._stats.mapSettings&&a._stats.mapSettings.viewSettings,tableSettings:a._stats.tableSettings&&a._stats.tableSettings.viewSettings,onSortChart:function(b){a._closePopup();a._section.getChart().sortChart(b)},onCalcStateChanged:function(b){a._closePopup();a._section.setChartCalculationState(b)},onChartToTable:function(c,d){d||a._closePopup();(a._section.getChart()||b()||a._section.getTables()[0]).chartToTable(c)},onTableToChart:function(c){a._closePopup();(a._section.getChart()||b()||a._section.getTables()[0]).tableToChart(c)},
onLocatorSummaryChanged:function(a){b().setVisibleSummaryFields(a.visibleFields)},onLegendVisibilityChanged:function(b){a._section.getMapImages()[0].setLegendVisible(b,!0)},onClosePopup:function(){a._closePopup()}}),a.own(a._settingsWidget),a._settingsWidget.setVisualState(a._section.getVisualState())),a._settingsWidget})},_provideFilterWidget:function(){function b(){return a._section.getInfographic().getInnerInfographic()}var a=this;this._needRequerySettingsSet&&(this._needRequerySettingsSet=!1,
this._provideSettingsStats());return l(this._getSettingsPromise,function(){if(a._stats&&a._stats.hasFilter)return a._filterWidget||(a._filterWidget=new w({areaDetailsFilter:a._stats.areaDetailsSettings&&a._stats.areaDetailsSettings.filter,chartFilter:a._stats.chartSettings&&a._stats.chartSettings.filter,comparisonFilter:a._stats.comparisonSettings&&a._stats.comparisonSettings.filter,dynamicInfographicFilter:a._stats.dynamicInfographicSettings&&a._stats.dynamicInfographicSettings.filter,locatorFilter:a._stats.locatorSettings&&
a._stats.locatorSettings.filter,tableFilter:a._stats.tableSettings&&a._stats.tableSettings.filter,onChartFilterChanged:function(b){a._section.getChart().setFilterRanges(b.filterRanges);a._setFiltersOnIndicatorVisible(b.hasFiltersOn)},onLocatorFilterChanged:function(c){b().setSearchText(c.searchText);b().setFilterRanges(c.filterRanges);a._setFiltersOnIndicatorVisible(c.hasFiltersOn)},onAreaDetailsFilterChanged:function(c){b().setSearchText(c.searchText);a._setFiltersOnIndicatorVisible(c.hasFiltersOn)},
onComparisonFilterChanged:function(c){b().setFilterRanges(c.filterRanges);a._setFiltersOnIndicatorVisible(c.hasFiltersOn)},onDynamicInfographicFilterChanged:function(c){b().setFilterRanges(c.filterRanges);a._setFiltersOnIndicatorVisible(c.hasFiltersOn)},onTableFilterChanged:function(b){a._section.getTables()[0].setFilterRanges(b.filterRanges);a._setFiltersOnIndicatorVisible(b.hasFiltersOn)},onClosePopup:function(){a._closePopup()}}),a.own(a._filterWidget)),a._filterWidget.setVisualState(a._section.getVisualState()),
a._setFiltersOnIndicatorVisible(a._filterWidget.hasFiltersOn()),a._filterWidget})},_setFiltersOnIndicatorVisible:function(b){this._filtersOnIndicator&&d.destroy(this._filtersOnIndicator);this._filtersOnIndicator=b&&d.create("div",{"class":"sectionDynamicSettings_filtersOnIndicator",innerHTML:g.on},this._filterButton)},setVisualState:function(b){"number"===typeof b.currentFeatureIndex&&(this._needRequerySettingsSet=!0,this._featureSelect&&this._featureSelect.set("value",b.currentFeatureIndex));return q([this._provideFilterWidget(),
this._provideSettingsWidget()])},notifyShown:function(){this._adjustToolbarPosition()},_panelScale:null,setPanelScale:function(b){this._panelScale=b;this._adjustToolbarPosition()},_adjustToolbarPosition:function(){this._buttonBar&&1<this._buttonBar.children.length&&m.add(this._buttonBar,"hasMultipleButtons");x.adjustToolbarPosition({toolbar:this._settingsToolbar,section:this._section,panelScale:this._panelScale,toolbarNeedsTopOffset:this._stats&&(this._stats.locatorSettings&&!this._stats.locatorSettings.hasTitle||
this._stats.areaDetailsSettings&&!this._stats.areaDetailsSettings.hasTitle||this._stats.comparisonSettings)})},isMouseOver:function(b){return this._section.isMouseOver(b,{noDynamic:!0})||k.isMouseOver(this._settingsToolbar,{event:b})||this._settingsWidget&&(this._settingsWidget.isMouseOver(b)||k.isMouseOver(this._settingsWidget.domNode.parentNode,{event:b}))||this._filterWidget&&(this._filterWidget.isMouseOver(b)||k.isMouseOver(this._filterWidget.domNode.parentNode,{event:b}))||this._featureSelect&&
this._featureSelect.isMouseOver(b)},onButtonsCreated:function(){},destroy:function(){d.destroy(this._settingsToolbar)}})});