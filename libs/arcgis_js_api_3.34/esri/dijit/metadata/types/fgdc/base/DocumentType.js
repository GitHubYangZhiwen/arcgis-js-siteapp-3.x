// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/fgdc/base/DocumentType","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/DocumentType ./Root ./PortalItemTransformer dojo/i18n!../../../nls/i18nFgdc ../../../../../kernel".split(" "),function(a,e,f,g,h,k,d,l){a=a(g,{caption:d.documentTypes.fgdc.caption,description:d.documentTypes.fgdc.description,key:"fgdc",metadataStandardName:"FGDC Content Standard for Digital Geospatial Metadata",metadataStandardVersion:"FGDC-STD-001-1998",beforeInitializeElement:function(a,
b){var c=b.gxePath;"/metadata/idinfo/ptcontac/cntinfo"===c?b.label=d.idinfo.ptcontac:"/metadata/dataqual/lineage/srcinfo/srccite/citeinfo"===c?b.label=d.dataqual.srcinfo.srccite:"/metadata/dataqual/lineage/procstep/proccont/cntinfo"===c?b.minOccurs=1:"/metadata/distinfo/distrib/cntinfo"===c?b.minOccurs=1:"/metadata/metainfo/metc/cntinfo"===c?b.minOccurs=1:this.inherited(arguments)},newPortalItemTransformer:function(a){return new k},newRootDescriptor:function(){return new h}});f("extend-esri")&&e.setObject("dijit.metadata.types.fgdc.base.DocumentType",
a,l);return a});