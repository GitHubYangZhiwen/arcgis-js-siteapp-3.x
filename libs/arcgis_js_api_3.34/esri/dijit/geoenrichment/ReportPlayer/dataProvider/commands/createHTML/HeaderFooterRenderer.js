// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/commands/createHTML/HeaderFooterRenderer",["dojo/_base/lang","dojo/dom-construct","dojo/dom-style","esri/dijit/geoenrichment/utils/ColorUtil"],function(m,d,k,l){var n={fixStyles:function(a,b){function c(a){return"string"!==typeof a||l.isTransparent(a)||"#ffffff"===a.toLowerCase()}if(!b)return a;a=m.mixin({},a);b=b.backgroundColor?l.toCSSColor(b.backgroundColor):null;var d=a.backgroundColor?l.toCSSColor(a.backgroundColor):null,g=a.color?l.toCSSColor(a.color):
null;c(b)&&c(d)&&c(g)&&(a.color="#000000");return a}},h={applyStyleToNode:function(a,b,c){b&&(b=n.fixStyles(b,c),b.backgroundColor&&k.set(a,"backgroundColor",b.backgroundColor),b.color&&k.set(a,"color",b.color),b.fontFamily&&k.set(a,"fontFamily",b.fontFamily))}},p={buildHeader:function(a){var b=a.headerFooterParams.header,c=a.documentOptions,f=a.headerFooterParams.documentStyle;if(!b||!b.show)return!1;var g=b.style;a=d.create("div",{"class":"esriGEReportPlayerPrint_reportHeader"},a.pageNode,"first");
h.applyStyleToNode(a,g.headerStyle,f);k.set(a,{paddingLeft:c.left+"px",paddingRight:c.right+"px"});var c=d.create("div",{"class":"esriGEReportPlayerPrint_reportHeaderTitleRow"},a),e=d.create("div",{"class":"esriGEReportPlayerPrint_titleLabel",innerHTML:b.title},c);h.applyStyleToNode(e,g.titleStyle,f);c=d.create("div",{"class":"esriGEReportPlayerPrint_subtitleLabel",innerHTML:b.subtitle},!b.siteInfo&&c);if(b=b.siteInfo){e=d.create("div",{"class":"esriGEReportPlayerPrint_reportHeaderRow"},a);d.place(c,
e);d.create("div",{"class":"esriGEReportPlayerPrint_siteNameLabel",innerHTML:b.siteName},e);c=b.siteAddr||b.siteDesc;if(b.latitude||c)e=d.create("div",{"class":"esriGEReportPlayerPrint_reportHeaderRow"},a),b.latitude&&h.applyStyleToNode(d.create("div",{"class":"esriGEReportPlayerPrint_siteLatLabel",innerHTML:"Latitude: "+b.latitude},e),g.latLongStyle,f),c&&d.create("div",{"class":"esriGEReportPlayerPrint_siteAddrLabel",innerHTML:c},e);c=c&&c!==b.siteDesc&&b.siteDesc;if(b.longitude||c)a=d.create("div",
{"class":"esriGEReportPlayerPrint_reportHeaderRow"},a),b.longitude&&h.applyStyleToNode(d.create("div",{"class":"esriGEReportPlayerPrint_siteLongLabel",innerHTML:"Longitude: "+b.longitude},a),g.latLongStyle,f),c&&d.create("div",{"class":"esriGEReportPlayerPrint_siteDescLabel",innerHTML:c},a)}return!0}},q={buildDataSource:function(a){var b=a.headerFooterParams.dataSource,c=a.documentOptions,f=a.headerFooterParams.documentStyle;if(!b||!b.show)return!1;a=d.create("div",{"class":"esriGEReportPlayerPrint_reportDataSource"},
a.pageNode);h.applyStyleToNode(a,b.style.dataSourceStyle,f);k.set(a,{paddingLeft:c.left+"px",paddingRight:c.right+"px"});c=d.create("div",{"class":"esriGEReportPlayerPrint_reportDataSourceRow"},a);d.create("div",{"class":"esriGEReportPlayerPrint_dataSourceLabel",innerHTML:b.sourceText},c);return!0}},r={buildFooter:function(a){var b=a.headerFooterParams.footer,c=a.documentOptions,f=a.headerFooterParams.documentStyle,g=a.pageIndex,e=a.numPages;if(!b||!b.show)return!1;var l=b.style;a=d.create("div",
{"class":"esriGEReportPlayerPrint_reportFooter"},a.pageNode);h.applyStyleToNode(a,l.footerStyle,f);k.set(a,{paddingLeft:c.left+"px",paddingRight:c.right+"px"});c=d.create("div",{"class":"esriGEReportPlayerPrint_reportFooterRow"},a);d.create("div",{"class":"esriGEReportPlayerPrint_dateLabel",innerHTML:b.formattedDate},c);d.create("div",{"class":"esriGEReportPlayerPrint_copyrightLabel",innerHTML:b.copyrightText},c);d.create("div",{"class":"esriGEReportPlayerPrint_pageLabel",innerHTML:"Page "+(g+1)+
" of "+e},c);return!0}};return{addHeaderAndFooterToPage:function(a){if(!a.headerFooterParams)return!1;a.headerFooterParams.documentStyle&&h.applyStyleToNode(a.pageNode,a.headerFooterParams.documentStyle,a.headerFooterParams.documentStyle);var b=p.buildHeader(a),b=q.buildDataSource(a)||b;return b=r.buildFooter(a)||b}}});