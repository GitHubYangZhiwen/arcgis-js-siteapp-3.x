// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/accessorSupport/PropertyOrigin",["require","exports"],function(f,c){function d(a){switch(a){case "defaults":return b.DEFAULTS;case "service":return b.SERVICE;case "portal-item":return b.PORTAL_ITEM;case "web-scene":return b.WEB_SCENE;case "web-map":return b.WEB_MAP;case "user":return b.USER}}function e(a){switch(a){case b.DEFAULTS:return"defaults";case b.SERVICE:return"service";case b.PORTAL_ITEM:return"portal-item";case b.WEB_SCENE:return"web-scene";case b.WEB_MAP:return"web-map";
case b.USER:return"user"}}Object.defineProperty(c,"__esModule",{value:!0});var b;(function(a){a[a.DEFAULTS=0]="DEFAULTS";a[a.COMPUTED=1]="COMPUTED";a[a.SERVICE=2]="SERVICE";a[a.PORTAL_ITEM=3]="PORTAL_ITEM";a[a.WEB_SCENE=4]="WEB_SCENE";a[a.WEB_MAP=5]="WEB_MAP";a[a.USER=6]="USER";a[a.NUM=7]="NUM"})(b=c.OriginId||(c.OriginId={}));c.nameToId=d;c.idToName=e;c.readableNameToId=function(a){return d(a)};c.idToReadableName=function(a){return e(a)};c.writableNameToId=function(a){return d(a)};c.idToWritableName=
function(a){return e(a)}});