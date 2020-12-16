// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/parsers/infographic/AreaDetailsInfographicParser",["../../../ConversionUtil","../../../../sections/SectionTypes","../../../../supportClasses/tableJson/TableJsonUtil","../../../../infographics/areaDetails/AreaDetailsLayouts"],function(e,c,m,n){return{portalToEditor:function(a,b){var f,g,h,p=n.toSupportedValue(a.attributes.attributesLayout);1.5<=b.revisionVersion?a.tags.forEach(function(a){switch(a.attributes.type){case c.INFOGRAPHIC_HEADER:f=
b.parsers.getParser("section").parseSection(a,b);break;case c.INFOGRAPHIC_ATTRIBUTES:g=b.parsers.getParser("section").parseSection(a,b);break;case c.INFOGRAPHIC_NOTES:h=b.parsers.getParser("section").parseSection(a,b)}}):a.tags.forEach(function(d){switch(d.name){case "header":d=b.parsers.getParser("section").parseTable(d.tags[0],b);f={type:c.INFOGRAPHIC_HEADER,stack:[d]};break;case "attributes":if(a.attributes.showAttributes){var e=b.parsers.getParser("section").parseTableCellAttributes(d.attributes||
{},null,b),k=m.createTable({numColumns:p===n.ATTRS_2COLUMNS?4:2,numRows:3,useDefaultTheme:!1});k.data.columns.forEach(function(a){k.data.data.forEach(function(b){b.style.fields[a.field]=e})});g={type:c.INFOGRAPHIC_ATTRIBUTES,stack:[k]}}break;case "notes":if(a.attributes.showNotes){var q=b.parsers.getParser("section").parseTableCellAttributes(d.attributes||{},null,b),l=m.createTable({numColumns:1,numRows:3,useDefaultTheme:!1});l.data.columns.forEach(function(a){l.data.data.forEach(function(b){b.style.fields[a.field]=
q})});h={type:c.INFOGRAPHIC_NOTES,stack:[l]}}}});return{type:a.attributes.type,style:{width:e.ptToPx(a.attributes.width),height:e.ptToPx(a.attributes.height),padding:a.attributes.padding?e.ptToPx(a.attributes.padding):void 0,backgroundColor:a.attributes.backgroundColor},scaleToFitHeight:!1!==a.attributes.scaleToFitHeight,titleSectionJson:f,attributesSectionJson:g,showAttributesTitle:!1!==a.attributes.showAttributesTitle,attributesLayout:p,notesSectionJson:h,showNotesTitle:!1!==a.attributes.showNotesTitle}}}});