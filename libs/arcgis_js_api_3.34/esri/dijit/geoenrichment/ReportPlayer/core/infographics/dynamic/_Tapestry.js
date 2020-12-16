// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/themes/common/images/upDown_down.svg":'\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"16" height\x3d"11" viewBox\x3d"0 0 16 11"\x3e\r\n  \x3cpath stroke\x3d"var(--upDown-stroke, #FFFFFF)" fill\x3d"none" stroke-width\x3d"2" d\x3d"M1 1 L8 8 L15 1"/\x3e\r\n\x3c/svg\x3e\r\n',"url:esri/dijit/geoenrichment/themes/common/images/upDown_up.svg":'\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"16" height\x3d"11" viewBox\x3d"0 0 16 11"\x3e\r\n  \x3cpath stroke\x3d"var(--upDown-stroke, #FFFFFF)" fill\x3d"none" stroke-width\x3d"2" d\x3d"M1 9 L8 2 L15 9"/\x3e\r\n\x3c/svg\x3e\r\n',
"url:esri/dijit/geoenrichment/themes/common/images/acrobat.svg":'\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"16" height\x3d"16" viewBox\x3d"0 0 16 16"\x3e\r\n\x3cpath fill\x3d"var(--acrobat-stroke, #7FBBDF)" d\x3d"M11.4004 0H1v16h14V3.5996L11.4004 0zM14 15H2V1h8v4h4v10zm0-11h-3V1h.3105L14 3.6895V4zm-9.7228 9.65c-.439 0-.7579-.2128-.879-.424-.3273-.571.3694-1.2701.9175-1.6011.1247-.0756.792-.4739 1.6851-.8825l.3798-.9843c.3038-.8362.6011-1.654.845-2.3674-.3747-.826-.6293-1.6355-.6497-2.0821-.0161-.3598.1324-.7514.3881-1.0228.186-.1974.4096-.3074.6296-.3105.2357.0036.4235.094.5736.277.1879.2293.3724.6914.183 1.5908-.0676.3208-.2012.7761-.42 1.434.2368.495.5058.9098.8014 1.2531.1863.217.3685.441.5484.6615.1524.1876.276.3372.4001.4857.7828-.075 1.268-.111 1.6455-.111.9797 0 1.2408.2385 1.3587.4456.2285.401.2609.7474.0964 1.0295-.206.3562-.6972.5371-1.4594.5371-.7132 0-1.3279-.5849-1.835-1.157-.799.0993-1.3867.235-1.6036.2884-.3454.0858-.8018.2493-1.3199.4734l-.0735.1326c-.655 1.8293-1.4982 2.2754-2.0906 2.3283a1.4111 1.4111 0 0 1-.1215.0057zm1.2181-1.9598c-.4274.221-.7352.404-.8527.4744-.38.2302-.6317.5469-.682.6887.0683.1187.1721.1645.3202.1645a.7379.7379 0 0 0 .1506-.016c.4101-.0853.8262-.514 1.1716-1.2068.0097-.0205.001-.0745-.0142-.091-.003-.001-.0534-.023-.0567-.023a.2263.2263 0 0 0-.0368.0092zm5.8409-1.4947c-.2717 0-.5955.021-.9625.0627.3038.4647.6376.6882.9476.6882.579 0 .854-.1192.9136-.2215.0398-.0694.007-.2092-.09-.384-.0904-.0709-.2968-.1454-.8087-.1454zM7.6193 8.2727c-.0103.0005-.0467.0247-.0506.034-.158.4646-.331.942-.507 1.4283l-.1802.497c.0506.0052.0982.0072.1432.0072.1816 0 .3181-.0375.4412-.072.094-.0256.182-.0493.2657-.0699.3326-.0822.7211-.1655 1.111-.24l.0496-.0462a.0876.0876 0 0 0-.0131-.092l-.0283-.052-.0755-.095c-.1917-.235-.3554-.4354-.522-.6286A6.4448 6.4448 0 0 1 7.737 8.25l-.0938.036-.0002-.001a.0265.0265 0 0 0-.0224-.0124h-.0013zm-.03-3.6647c-.1545.0252-.397.349-.3822.6708.0093.2092.099.5695.24.9627.2074-.204.254-.3793.2848-.5274.1586-.7535-.0103-1.046-.089-1.0948-.0012 0-.0513-.0113-.0536-.0113zm.004 3.6971c.0019-.0036.0127-.0067.0237-.0093l-.0236.0093z"/\x3e\r\n\x3c/svg\x3e\r\n'}});
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/dynamic/_Tapestry","dojo/_base/declare dojo/_base/lang dojo/query esri/dijit/geoenrichment/utils/ColorUtil esri/dijit/geoenrichment/utils/DynamicStyleUtil ../../conversion/ConversionUtil esri/dijit/geoenrichment/infographicPanels/Tapestry dojo/text!../../../../themes/common/images/upDown_down.svg dojo/text!../../../../themes/common/images/upDown_up.svg dojo/text!../../../../themes/common/images/acrobat.svg".split(" "),function(l,g,h,
k,m,n,p,q,r,t){return l(p,{documentStyleProvider:null,titleStyle:null,backgroundColor:null,tableBackgroundColor:null,tableBorderColor:null,textStyle:null,subtextStyle:null,hyperlinkTextStyle:null,detailsValueBorderColor:null,_themeAddedFlag:!1,_needStyleArrows:!1,_needStyleHyperlink:!1,_updateUI:function(){function c(a){return n.composeStyleString(a,{addPx:{"font-size":1}})}function a(a,b){e+="#"+d+" "+a+" { "+b+(";"===b.charAt(b.length-1)?"":";")+" } "}this.inherited(arguments);if(!this._themeAddedFlag){var d=
this.parent.id,e="";this.backgroundColor&&(this.ui.domNode.style.backgroundColor=this.backgroundColor);var b=this.tableBorderColor||this.backgroundColor;b&&(a(".Tapestry_Main_Button","border-color:"+b),a(".Tapestry_Details_Table","border-color:"+b));this.titleStyle&&a(".BaseWidget_Title",c(this.titleStyle));this.tableBackgroundColor&&a(".Tapestry_Main_Table","background-color:"+this.tableBackgroundColor);if(this.backgroundColor||this.tableBackgroundColor){var f;[this.tableBackgroundColor,this.ui.domNode.style.backgroundColor,
this.documentStyleProvider.backgroundColor].some(function(a){if(a&&!k.isTransparent(a))return f=a,!0});f&&a(".Tapestry_LifeMode:hover","background-color:"+k.getHighlightColor(f,{method:"darker"}).toCss())}this.textStyle&&(b=c(this.textStyle),a(".Tapestry_Main_Label",b),a(".Tapestry_Main_Pct_Value",b),b=g.mixin({},this.textStyle),delete b.fontSize,a(".Tapestry_Details_Label",c(b)),b.color&&(this._needStyleArrows=!0,a(".Tapestry_Main_Arrow svg *","--upDown-stroke:"+b.color)));this.subtextStyle&&(b=
c(this.subtextStyle),a(".Tapestry_Main_Value",b),a(".Tapestry_Main_Pct_Label",b),b=g.mixin({},this.subtextStyle),delete b.fontSize,a(".Tapestry_Details_Label + div",c(b)),a(".Tapestry_Details_Image div:nth-child(2)",c(b)));this.detailsValueBorderColor&&a(".Tapestry_Details_FieldCellContent","border-color:"+this.detailsValueBorderColor);this.hyperlinkTextStyle&&(this.hyperlinkTextStyle.color&&(this._needStyleHyperlink=!0,a(".Tapestry_Details_LinkIcon svg *","--acrobat-stroke:"+this.hyperlinkTextStyle.color)),
a(".Tapestry_Details_Link.Wizard_Link",c(this.hyperlinkTextStyle)),a(".Tapestry_Details_Link.Wizard_Link:hover","text-decoration:underline"));e&&m.addStyle([e],d);this._themeAddedFlag=!0;this._updateIcons()}},_toMainView:function(){this.inherited(arguments);this._updateIcons();this.onExpandedStateChanged()},_toDetailView:function(){this.inherited(arguments);this._updateIcons();this.onExpandedStateChanged()},_updateIcons:function(){if(this._needStyleArrows)for(var c=h(".Tapestry_Main_Arrow",this.ui.domNode),
a=0;a<c.length;a++){var d=c[a].children[0];d.style.backgroundImage="none";d.style.backgroundPosition="center";d.innerHTML=this._openRowIndex===a?r:q}if(this._needStyleHyperlink)for(c=h(".Tapestry_Details_LinkIcon",this.ui.domNode),a=0;a<c.length;a++)d=c[a],d.style.backgroundImage="none",d.innerHTML=t},onExpandedStateChanged:function(){}})});