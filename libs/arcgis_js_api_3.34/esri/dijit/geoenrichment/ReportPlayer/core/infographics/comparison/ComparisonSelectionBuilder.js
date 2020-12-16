// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/comparison/ComparisonSelectionBuilder","dojo/_base/declare dojo/_base/lang dojo/aspect dojo/on esri/dijit/geoenrichment/when dojo/dom-class dojo/dom-construct ../../comparison/ComparisonSelect esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/MouseUtil esri/dijit/geoenrichment/utils/TooltipUtil dojo/i18n!esri/nls/jsapi".split(" "),function(t,u,n,v,w,x,p,y,z,l,r,h){h=h.geoenrichment.dijit.ReportPlayer.ComparisonTableInfographic;
return t(null,{grid:null,groups:null,fields:null,selectedLevelsCache:null,additionalColumnsCache:null,variablesInColumns:!1,isEditMode:!1,simplifySelectionForSingleGeography:!0,numThisAreas:1,constructor:function(a){u.mixin(this,a);this.grid.own(n.after(this.grid,"refresh",this._initDropDowns.bind(this)));this.grid.canSortCellFunc=function(a){return!l.isMouseOver(a.__geographySelect&&a.__geographySelect.domNode)&&!l.isMouseOver(a.__removeAdditionalColumnOrRowButton)};this._initDropDowns()},_initDropDowns:function(){var a;
w(this.grid.getRenderPromise(),function(){if(this.variablesInColumns){var b=this.grid.getSortRowIndexMapping();a=this.grid.queryCells({columnIndex:0});if(b){var f=[];a.forEach(function(a,c){f[b[c]]=a});a=f}}else a=this.grid.queryCells({rowIndex:0});a.shift();for(var c=0;c<this.numThisAreas;c++)a.shift();this._addDropDownsToCells(a)}.bind(this))},_addDropDownsToCells:function(a){a.forEach(function(a,f){this._addDropDownToCell(a,this.groups[f])},this)},_addDropDownToCell:function(a,b){function f(){var b=
a.getFullStyle();g.style.paddingLeft=g.style.paddingRight=b.horizontalPadding+"px";var c=a.getContentWidth()-2+"px";q.style.maxWidth=g.style.width=c;d?d.domNode.style.maxWidth=c:e.style.maxWidth=c;g.style.textAlign=b.horizontalAlign;q.style.height=q.style.lineHeight=a.getContentHeight()/2+"px";e.style.height=e.style.lineHeight=a.getContentHeight()/2+"px";k&&(k.style.top=(e.clientHeight-k.clientHeight)/2+"px")}var c=this;a.__addDropDownCleanUp&&a.__addDropDownCleanUp();if(b.features.length){var g=
p.create("div",{"class":"esriGEComparisonSelectionBuilder_root"}),q=p.create("div",{innerHTML:b.label,"class":"esriGEComparisonSelectionBuilder_title TrimWithEllipses"},g),e=p.create("div",{"class":"esriGEComparisonSelectionBuilder_select"},g);if(1<b.features.length||!this.simplifySelectionForSingleGeography){var d=(new y({"class":"esriGEOnDemandSelectNoBackground",fields:this.fields,canAddFeatures:!0,addFeatureMessage:this.variablesInColumns?h.showInSeparateRow:h.showInSeparateColumn,featureIsAlreadyAddedMessage:h.alreadyAdded,
onFeatureSelected:function(a,b){c.onFeatureSelected(a,b)},isFeatureAdded:function(a,d){return(c.selectedLevelsCache[b.levelId]||b.features[0].attributes.StdGeographyID)===d?!0:(a=c.additionalColumnsCache[b.levelId])&&-1!==a.indexOf(d)},onAddFeature:function(a,b){c.onAddFeature(a,b)}})).placeAt(e);a.own(d);d.setGroups([b]);d.setValue(b.levelId,this.selectedLevelsCache[b.levelId]||b.features[0].attributes.StdGeographyID);var l=a.getFullStyle().color;d.selectedLabel.style.color=l;d.arrow.style.borderTopColor=
l}else if(e.innerHTML=b.features[0].attributes.StdGeographyName,x.add(e,"TrimWithEllipses"),b.isRemovable){e.style.position="relative";var k=p.create("div",{"class":"esriGEComparisonTableInfographic_removeButton"},e);r.setTooltipToNode(k,this.variablesInColumns?h.removeRow:h.removeColumn);v(k,"click",function(a){a.stopPropagation();c.onRemoveAdditionalFeature(b.levelId,b.additionalFeatureId)});a.__removeAdditionalColumnOrRowButton=k}var m=[];m.push(n.after(a,"setWidth",f));m.push(n.after(a,"setHeight",
f));m.push(n.after(this.grid,"renderCell",function(d){d===a&&c._addDropDownToCell(a,b)},!0));m.forEach(function(b){a.own(b)});z.enableContentAbsolute(e,!this.isEditMode,{isTransparent:!0});a.setContent(g);a.set("value","");f();a.__addDropDownCleanUp=function(){m.forEach(function(a){a.remove()});d&&d.destroy();delete a.__addDropDownCleanUp};a.__geographySelect=d;r.autoTooltip(g)}},onFeatureSelected:function(a,b){},onAddFeature:function(a,b){},onRemoveAdditionalFeature:function(a,b){}})});