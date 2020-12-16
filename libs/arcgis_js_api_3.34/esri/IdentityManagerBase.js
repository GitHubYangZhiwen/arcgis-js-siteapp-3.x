// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.
//>>built
define("esri/IdentityManagerBase","dojo/_base/declare dojo/_base/config dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/_base/json dojo/_base/url dojo/sniff dojo/cookie dojo/io-query dojo/on dojo/regexp ./kernel ./config ./lang ./ServerInfo ./urlUtils ./deferredUtils ./request ./Evented ./OAuthCredential ./arcgis/OAuthInfo".split(" "),function(J,r,p,m,z,D,x,R,B,S,T,U,h,E,u,F,t,K,y,L,M,N){var C={},O=function(a){var b=(new x(a.owningSystemUrl)).host;a=(new x(a.server)).host;var c=/.+\.arcgis\.com$/i;
return c.test(b)&&c.test(a)},G=function(a,b){return!!(O(a)&&b&&m.some(b,function(b){return b.test(a.server)}))},v,I=J(L,{declaredClass:"esri.IdentityManagerBase",constructor:function(){this._portalConfig=p.getObject("esriGeowConfig");this.serverInfos=[];this.oAuthInfos=[];this.credentials=[];this._soReqs=[];this._xoReqs=[];this._portals=[];this._getOAuthHash();T(window,"pageshow",p.hitch(this,this._pageShowHandler))},defaultOAuthInfo:null,defaultTokenValidity:60,tokenValidity:null,signInPage:null,
useSignInPage:!0,normalizeWebTierAuth:!1,_busy:null,_rejectOnPersistedPageShow:!1,_oAuthHash:null,_gwTokenUrl:"/sharing/generateToken",_agsRest:"/rest/services",_agsPortal:/\/sharing(\/|$)/i,_agsAdmin:/(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i,_adminSvcs:/\/rest\/admin\/services(\/|$)/i,_gwDomains:[{regex:/^https?:\/\/www\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/generateToken"},{regex:/^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,
customBaseUrl:"mapsdev.arcgis.com",tokenServiceUrl:"https://dev.arcgis.com/sharing/generateToken"},{regex:/^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,customBaseUrl:"mapsdevext.arcgis.com",tokenServiceUrl:"https://devext.arcgis.com/sharing/generateToken"},{regex:/^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,customBaseUrl:"mapsqa.arcgis.com",tokenServiceUrl:"https://qaext.arcgis.com/sharing/generateToken"},{regex:/^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",
tokenServiceUrl:"https://www.arcgis.com/sharing/generateToken"}],_legacyFed:[],_regexSDirUrl:/http.+\/rest\/services\/?/ig,_regexServerType:/(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|MapServer|MobileServer|NAServer|NetworkDiagramServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer)).*/ig,_gwUser:/http.+\/users\/([^\/]+)\/?.*/i,
_gwItem:/http.+\/items\/([^\/]+)\/?.*/i,_gwGroup:/http.+\/groups\/([^\/]+)\/?.*/i,_errorCodes:[499,498,403,401],_rePortalTokenSvc:/\/sharing(\/rest)?\/generatetoken/i,_publicUrls:[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],_createDefaultOAuthInfo:!0,_hasTestedIfAppIsOnPortal:!1,registerServers:function(a){var b=this.serverInfos;b?(a=m.filter(a,function(a){return!this.findServerInfo(a.server)},this),this.serverInfos=b.concat(a)):this.serverInfos=a;m.forEach(a,function(a){a.owningSystemUrl&&
this._portals.push(a.owningSystemUrl);if(a.hasPortal){this._portals.push(a.server);var b=E.defaults.io.corsEnabledServers,c=this._getOrigin(a.tokenServiceUrl);t.canUseXhr(a.server)||b.push(a.server.replace(/^https?:\/\//i,""));t.canUseXhr(c)||b.push(c.replace(/^https?:\/\//i,""))}},this)},registerOAuthInfos:function(a){var b=this.oAuthInfos;b?(a=m.filter(a,function(a){return!this.findOAuthInfo(a.portalUrl)},this),this.oAuthInfos=b.concat(a)):this.oAuthInfos=a},registerToken:function(a){a=u.mixin({},
a);var b=this._sanitizeUrl(a.server),c=this.findServerInfo(b),d=!0,e;c||(c=new F,c.server=this._getServerInstanceRoot(b),c.tokenServiceUrl=this._getTokenSvcUrl(b),c.hasPortal=!0,this.registerServers([c]));(e=this.findCredential(b,a.userId))?(delete a.server,p.mixin(e,a),d=!1):(e=new v({userId:a.userId,server:c.server,token:a.token,expires:a.expires,ssl:a.ssl,scope:this._isServerRsrc(b)?"server":"portal"}),e.resources=[b],this.credentials.push(e));e.onTokenChange(!1);d||e.refreshServerTokens()},toJson:function(){return u.fixJson({serverInfos:m.map(this.serverInfos,
function(a){return a.toJson()}),oAuthInfos:m.map(this.oAuthInfos,function(a){return a.toJson()}),credentials:m.map(this.credentials,function(a){return a.toJson()})})},initialize:function(a){if(a){p.isString(a)&&(a=D.fromJson(a));var b=a.serverInfos,c=a.oAuthInfos;a=a.credentials;if(b){var d=[];m.forEach(b,function(a){a.server&&a.tokenServiceUrl&&d.push(a.declaredClass?a:new F(a))});d.length&&this.registerServers(d)}if(c){var e=[];m.forEach(c,function(a){a.appId&&e.push(a.declaredClass?a:new N(a))});
e.length&&this.registerOAuthInfos(e)}a&&m.forEach(a,function(a){a.userId&&a.server&&a.token&&a.expires&&a.expires>(new Date).getTime()&&(a=a.declaredClass?a:new v(a),a.onTokenChange(),this.credentials.push(a))},this)}},findServerInfo:function(a){var b;a=this._sanitizeUrl(a);m.some(this.serverInfos,function(c){this._hasSameServerInstance(c.server,a)&&(b=c);return!!b},this);return b},findOAuthInfo:function(a){var b;a=this._sanitizeUrl(a);m.some(this.oAuthInfos,function(c){this._hasSameServerInstance(c.portalUrl,
a)&&(b=c);return!!b},this);return b},findCredential:function(a,b){var c,d;a=this._sanitizeUrl(a);d=this._isServerRsrc(a)?"server":"portal";b?m.some(this.credentials,function(e){this._hasSameServerInstance(e.server,a)&&b===e.userId&&e.scope===d&&(c=e);return!!c},this):m.some(this.credentials,function(b){this._hasSameServerInstance(b.server,a)&&-1!==this._getIdenticalSvcIdx(a,b)&&b.scope===d&&(c=b);return!!c},this);return c},getCredential:function(a,b){var c,d,e=!0;u.isDefined(b)&&(p.isObject(b)?(c=
!!b.token,d=b.error,e=!1!==b.prompt):c=b);a=this._sanitizeUrl(a);var f=new z(K._dfdCanceller),l=this._isAdminResource(a),g=c&&this._doPortalSignIn(a)?this._getEsriAuthCookie():null;if((c=c?this.findCredential(a):null)&&d&&498===d.code)c.destroy(),g&&g.token===b.token&&(B("esri_auth",null,{expires:-1,path:"/",domain:document.domain}),u.endsWith(window.location.hostname,".arcgis.com")&&B("esri_auth",null,{expires:-1,path:"/",domain:"arcgis.com"}));else if(g||c)return a=Error("You are currently signed in as: '"+
(g&&g.email||c&&c.userId)+"'. You do not have access to this resource: "+a),a.code="IdentityManagerBase.1",a.httpCode=d&&d.httpCode,a.messageCode=d?d.messageCode:null,a.subcode=d?d.subcode:null,a.details=d?d.details:null,a.log=!!r.isDebug,f.errback(a),f;if(d=this._findCredential(a,b))return f.callback(d),f;d=this.findServerInfo(a);if(d)!d.hasServer&&this._isServerRsrc(a)&&(d._restInfoDfd=this._getTokenSvcUrl(a,!0),d.hasServer=!0);else{g=this._getTokenSvcUrl(a);if(!g)return a=Error("Unknown resource - could not find token service endpoint."),
a.code="IdentityManagerBase.2",a.log=!!r.isDebug,f.errback(a),f;d=new F;d.server=this._getServerInstanceRoot(a);p.isString(g)?(d.tokenServiceUrl=g,d.hasPortal=!0):(d._restInfoDfd=g,d.hasServer=!0);this.registerServers([d])}e&&d.hasPortal&&void 0===d._selfReq&&!this._findOAuthInfo(a)&&(d._selfReq={owningTenant:b&&b.owningTenant,selfDfd:this._getPortalSelf(d.tokenServiceUrl.replace(this._rePortalTokenSvc,"/sharing/rest/portals/self"),a)});return this._enqueue(a,d,b,f,l)},getResourceName:function(a){return this._isRESTService(a)?
a.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"":this._gwUser.test(a)&&a.replace(this._gwUser,"$1")||this._gwItem.test(a)&&a.replace(this._gwItem,"$1")||this._gwGroup.test(a)&&a.replace(this._gwGroup,"$1")||""},generateToken:function(a,b,c){var d,e,f,l,g,P,k=this._rePortalTokenSvc.test(a.tokenServiceUrl),n=new x(window.location.href.toLowerCase()),Q=this._getEsriAuthCookie(),m,H=!b;l=a.shortLivedTokenValidity;var A;b&&(A=h.id.tokenValidity||l||h.id.defaultTokenValidity,A>l&&
(A=l));c&&(d=c.isAdmin,e=c.serverUrl,f=c.token,P=c.ssl,a.customParameters=c.customParameters);d?l=a.adminTokenServiceUrl:(l=a.tokenServiceUrl,g=new x(l.toLowerCase()),Q&&(m=(m=Q.auth_tier)&&m.toLowerCase()),("web"===m||a.webTierAuth)&&c&&c.serverUrl&&!P&&"http"===n.scheme&&(t.hasSameOrigin(n.uri,l,!0)||"https"===g.scheme&&n.host===g.host&&"7080"===n.port&&"7443"===g.port)&&(l=l.replace(/^https:/i,"http:").replace(/:7443/i,":7080")),H&&k&&(l=l.replace(/\/rest/i,"")));d=p.mixin({url:l,content:p.mixin({request:"getToken",
username:b&&b.username,password:b&&b.password,serverUrl:e,token:f,expiration:A,referer:d||k?window.location.host:null,client:d?"referer":null,f:"json"},a.customParameters),handleAs:"json",callbackParamName:H?"callback":void 0},c&&c.ioArgs);c={usePost:!H,disableIdentityLookup:!0,useProxy:this._useProxy(a,c)};k||(d.withCredentials=!1);k=y(d,c);k.addCallback(function(c){if(!c||!c.token)return c=Error("Unable to generate token"),c.code="IdentityManagerBase.3",c.log=!!r.isDebug,c;var d=a.server;C[d]||
(C[d]={});b&&(C[d][b.username]=b.password);c.validity=A;return c});k.addErrback(function(a){});return k},isBusy:function(){return!!this._busy},checkSignInStatus:function(a){var b=new z;this.checkAppAccess(a,"").then(function(a){b.resolve(a.credential)}).catch(function(a){b.reject(a)});return b},checkAppAccess:function(a,b,c){var d=this,e=!1;return this.getCredential(a,{prompt:!1}).then(function(f){var l,g={f:"json"};if("portal"===f.scope)if(b&&(d._doPortalSignIn(a,!0)||c&&c.force))l=f.server+"/sharing/rest/oauth2/validateAppAccess",
g.client_id=b;else if(f.token)l=f.server+"/sharing/rest";else return{credential:f};else if(f.token)l=f.server+"/rest/services";else return{credential:f};f.token&&(g.token=f.token);return y({url:l,content:g,callbackParamName:"callback"},{disableIdentityLookup:!0}).then(function(a){if(!1===a.valid)throw a=Error("You are currently signed in as: '"+f.userId+"'.  You do not have access to this app: '"+b+"'."),a.code="IdentityManagerBase.1",a.log=!!r.isDebug,a;e=!!a.viewOnlyUserTypeApp;return{credential:f}}).catch(function(a){if("IdentityManagerBase.1"===
a.code||400===a.code)throw a;if(498===a.code)throw f.destroy(),a=Error("User is not signed in."),a.code="IdentityManagerBase.6",a.log=!!r.isDebug,a;return{credential:f}})}).then(function(a){return{credential:a.credential,viewOnly:e}})},setRedirectionHandler:function(a){this._redirectFunc=a},setProtocolErrorHandler:function(a){this._protocolFunc=a},signIn:function(){},oAuthSignIn:function(){},onCredentialCreate:function(){},onCredentialsDestroy:function(){},destroyCredentials:function(){if(this.credentials){var a=
this.credentials.slice();m.forEach(a,function(a){a.destroy()})}this.onCredentialsDestroy()},_getOAuthHash:function(){var a=window.location.hash;if(a){"#"===a.charAt(0)&&(a=a.substring(1));var a=S.queryToObject(a),b=!1;a.access_token&&a.expires_in&&a.state&&a.hasOwnProperty("username")?(a.state=D.fromJson(a.state),this._oAuthHash=a,b=!0):a.error&&a.error_description&&(console.log("IdentityManager OAuth Error: ",a.error," - ",a.error_description),"access_denied"===a.error&&(b=!0));b&&(window.location.hash=
a.state&&a.state.hash||"")}},_pageShowHandler:function(a){a.persisted&&this.isBusy()&&this._rejectOnPersistedPageShow&&(a=Error("ABORTED"),a.code="IdentityManager.2",a.log=!!r.isDebug,this._errbackFunc(a))},_findCredential:function(a,b){var c=-1,d,e,f,l=b&&b.token;b=b&&b.resource;var g=this._isServerRsrc(a)?"server":"portal",h=m.filter(this.credentials,function(b){return this._hasSameServerInstance(b.server,a)&&b.scope===g},this);a=b||a;if(h.length)if(1===h.length)if(b=h[0],e=(d=(f=this.findServerInfo(b.server))&&
f.owningSystemUrl)&&this.findCredential(d,b.userId),c=this._getIdenticalSvcIdx(a,b),l)-1!==c&&(b.resources.splice(c,1),this._removeResource(a,e));else return-1===c&&b.resources.push(a),this._addResource(a,e),b;else{var k,n;m.some(h,function(b){n=this._getIdenticalSvcIdx(a,b);return-1!==n?(k=b,e=(d=(f=this.findServerInfo(k.server))&&f.owningSystemUrl)&&this.findCredential(d,k.userId),c=n,!0):!1},this);if(l)k&&(k.resources.splice(c,1),this._removeResource(a,e));else if(k)return this._addResource(a,
e),k}},_findOAuthInfo:function(a){var b=this.findOAuthInfo(a);b||m.some(this.oAuthInfos,function(c){this._isIdProvider(c.portalUrl,a)&&(b=c);return!!b},this);return b},_addResource:function(a,b){b&&-1===this._getIdenticalSvcIdx(a,b)&&b.resources.push(a)},_removeResource:function(a,b){var c=-1;b&&(c=this._getIdenticalSvcIdx(a,b),-1<c&&b.resources.splice(c,1))},_useProxy:function(a,b){return b&&b.isAdmin&&!t.hasSameOrigin(a.adminTokenServiceUrl,window.location.href)||!this._isPortalDomain(a.tokenServiceUrl)&&
10.1==a.currentVersion&&!t.hasSameOrigin(a.tokenServiceUrl,window.location.href)},_getOrigin:function(a){a=new x(a);return a.scheme+"://"+a.host+(u.isDefined(a.port)?":"+a.port:"")},_getServerInstanceRoot:function(a){var b=a.toLowerCase(),c=b.indexOf(this._agsRest);-1===c&&this._isAdminResource(a)&&(c=this._agsAdmin.test(a)?a.replace(this._agsAdmin,"$1").length:a.search(this._adminSvcs));-1===c&&(c=b.indexOf("/sharing"));-1===c&&"/"===b.substr(-1)&&(c=b.length-1);return-1<c?a.substring(0,c):a},_hasSameServerInstance:function(a,
b){"/"===a.substr(-1)&&(a=a.slice(0,-1));a=a.toLowerCase();b=this._getServerInstanceRoot(b).toLowerCase();a=this._normalizeAGOLorgDomain(a);b=this._normalizeAGOLorgDomain(b);a=a.substr(a.indexOf(":"));b=b.substr(b.indexOf(":"));return a===b},_normalizeAGOLorgDomain:function(a){var b=/^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i,c=/^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,d=/^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;b.test(a)?a=a.replace(b,"https://www.arcgis.com"):
c.test(a)?a=a.replace(c,"https://devext.arcgis.com"):d.test(a)&&(a=a.replace(d,"https://qaext.arcgis.com"));return a},_sanitizeUrl:function(a){var b=(E.defaults.io.proxyUrl||"").toLowerCase(),c=b?a.toLowerCase().indexOf(b+"?"):-1;-1!==c&&(a=a.substring(c+b.length+1));a=t.normalize(a);return t.urlToObject(a).path},_isRESTService:function(a){return-1<a.indexOf(this._agsRest)},_isAdminResource:function(a){return this._agsAdmin.test(a)||this._adminSvcs.test(a)},_isServerRsrc:function(a){return this._isRESTService(a)||
this._isAdminResource(a)},_isIdenticalService:function(a,b){var c;this._isRESTService(a)&&this._isRESTService(b)?(a=this._getSuffix(a).toLowerCase(),b=this._getSuffix(b).toLowerCase(),c=a===b,c||(c=/(.*)\/(MapServer|FeatureServer).*/ig,c=a.replace(c,"$1")===b.replace(c,"$1"))):this._isAdminResource(a)&&this._isAdminResource(b)?c=!0:this._isServerRsrc(a)||this._isServerRsrc(b)||!this._isPortalDomain(a)||(c=!0);return c},_isPortalDomain:function(a){var b=new x(a.toLowerCase()),c=this._portalConfig;
a=m.some(this._gwDomains,function(a){return a.regex.test(b.uri)});!a&&c&&(a=this._hasSameServerInstance(this._getServerInstanceRoot(c.restBaseUrl),b.uri));a||(!this._arcgisUrl&&(c=p.getObject("esri.arcgis.utils.arcgisUrl"))&&(this._arcgisUrl=(new x(c)).authority),this._arcgisUrl&&(a=this._arcgisUrl.toLowerCase()===b.authority));a||(a=m.some(this._portals,function(a){return this._hasSameServerInstance(a,b.uri)},this));return a=a||this._agsPortal.test(b.path)},_isIdProvider:function(a,b){var c=-1,d=
-1;m.forEach(this._gwDomains,function(e,f){-1===c&&e.regex.test(a)&&(c=f);-1===d&&e.regex.test(b)&&(d=f)});var e=!1;if(-1<c&&-1<d)if(0===c||4===c){if(0===d||4===d)e=!0}else if(1===c){if(1===d||2===d)e=!0}else 2===c?2===d&&(e=!0):3===c&&3===d&&(e=!0);if(!e){var f=this.findServerInfo(b),l=f&&f.owningSystemUrl;l&&O(f)&&this._isPortalDomain(l)&&this._isIdProvider(a,l)&&(e=!0)}return e},_isPublic:function(a){a=this._sanitizeUrl(a);return m.some(this._publicUrls,function(b){return b.test(a)})},_getIdenticalSvcIdx:function(a,
b){var c=-1;m.some(b.resources,function(b,e){return this._isIdenticalService(a,b)?(c=e,!0):!1},this);return c},_getSuffix:function(a){return a.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1")},_getTokenSvcUrl:function(a){var b,c;if(this._isRESTService(a)||this._isAdminResource(a))return c=this._getServerInstanceRoot(a),b=c+"/admin/generateToken",a=c+"/rest/info",c=y({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}),c.adminUrl_=b,c;if(this._isPortalDomain(a)){var d=
"";m.some(this._gwDomains,function(b){b.regex.test(a)&&(d=b.tokenServiceUrl);return!!d});d||m.some(this._portals,function(b){this._hasSameServerInstance(b,a)&&(d=b+this._gwTokenUrl);return!!d},this);d||(b=a.toLowerCase().indexOf("/sharing"),-1!==b&&(d=a.substring(0,b)+this._gwTokenUrl));d||(d=this._getOrigin(a)+this._gwTokenUrl);d&&(b=(new x(a)).port,/^http:\/\//i.test(a)&&"7080"===b&&(d=d.replace(/:7080/i,":7443")),d=d.replace(/http:/i,"https:"));return d}if(-1!==a.toLowerCase().indexOf("premium.arcgisonline.com"))return"https://premium.arcgisonline.com/server/tokens"},
_exchangeToken:function(a,b,c){return y({url:a+"/sharing/rest/oauth2/exchangeToken",content:{f:"json",client_id:b,token:c}},{disableIdentityLookup:!0,usePost:!0}).then(function(a){return a.token})},_getPortalSelf:function(a,b){var c="";m.some(this._gwDomains,function(b){b.regex.test(a)&&(c=b.customBaseUrl);return!!c});if(c)return b=new z,b.resolve({allSSL:!0,currentVersion:"4.4",customBaseUrl:c,portalMode:"multitenant",supportsOAuth:!0}),b;"https:"===window.location.protocol?a=a.replace(/^http:/i,
"https:").replace(/:7080/i,":7443"):/^http:/i.test(b)&&(a=a.replace(/^https:/i,"http:").replace(/:7443/i,":7080"));return y({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"},{crossOrigin:!1,disableIdentityLookup:!0})},_hasPortalSession:function(){return!!this._getEsriAuthCookie()},_getEsriAuthCookie:function(){var a=null;if(B.isSupported()){var b=this._getAllCookies("esri_auth"),c,d,e;for(e=0;e<b.length;e++){d=D.fromJson(b[e]);if(d.portalApp){a=d;break}c?c.push(d):c=[d]}if(!a&&
c)for(e=0;e<c.length;e++)if(d=c[e],d.urlKey&&window.location.hostname===d.urlKey.toLowerCase()+"."+d.customBaseUrl){a=d;break}}a&&(b=null,a.expires&&("number"===typeof a.expires?b=a.expires:"string"===typeof a.expires&&(b=Date.parse(a.expires)),isNaN(b)&&(b=null),a.expires=b),b&&b<(new Date).getTime()&&(a=null));return a},_getAllCookies:function(a){var b=[],c=document.cookie.match(new RegExp("(?:^|; )"+U.escapeString(a)+"\x3d([^;]*)","g"));if(c)for(a=0;a<c.length;a++){var d=c[a],e=d.indexOf("\x3d");
-1<e&&(d=d.substring(e+1),b.push(decodeURIComponent(d)))}return b},_doPortalSignIn:function(a,b){if(B.isSupported()){var c=this._getEsriAuthCookie(),d=this._portalConfig,e=window.location.href,f=this.findServerInfo(a);if((b||this.useSignInPage)&&(d||this._isPortalDomain(e)||c)&&(f?f.hasPortal||f.owningSystemUrl&&this._isPortalDomain(f.owningSystemUrl):this._isPortalDomain(a))&&(this._isIdProvider(e,a)||d&&(this._hasSameServerInstance(this._getServerInstanceRoot(d.restBaseUrl),a)||this._isIdProvider(d.restBaseUrl,
a))||t.hasSameOrigin(e,a,!0)))return!0}return!1},_canUsePortalSignInWorkflow:function(a){return this._doPortalSignIn(a)&&(window===window.top||this._hasPortalSession())},_checkProtocol:function(a,b,c,d){var e=!0;d=d?b.adminTokenServiceUrl:b.tokenServiceUrl;0!==p.trim(d).toLowerCase().indexOf("https:")||0===window.location.href.toLowerCase().indexOf("https:")||E.defaults.io.useCors&&(t.canUseXhr(d)||t.canUseXhr(t.getProxyUrl(!0).path))||(e=this._protocolFunc?!!this._protocolFunc({resourceUrl:a,serverInfo:b}):
!1,e||(a=Error("Aborted the Sign-In process to avoid sending password over insecure connection."),a.code="IdentityManagerBase.4",a.log=!!r.isDebug,console.log(a.message),c(a)));return e},_enqueue:function(a,b,c,d,e,f){d||(d=new z(K._dfdCanceller));d.resUrl_=a;d.sinfo_=b;d.options_=c;d.admin_=e;d.refresh_=f;this._busy?this._hasSameServerInstance(this._getServerInstanceRoot(a),this._busy.resUrl_)?(this._oAuthDfd&&this._oAuthDfd.oAuthWin_&&this._oAuthDfd.oAuthWin_.focus(),this._soReqs.push(d)):this._xoReqs.push(d):
this._doSignIn(d);return d},_doSignIn:function(a){this._busy=a;this._rejectOnPersistedPageShow=!1;var b=this,c=function(c){var d=a.options_&&a.options_.resource,e=a.resUrl_,k=a.refresh_,f=!1;-1===m.indexOf(b.credentials,c)&&(k&&-1!==m.indexOf(b.credentials,k)?(k.userId=c.userId,k.token=c.token,k.expires=c.expires,k.validity=c.validity,k.ssl=c.ssl,k.creationTime=c.creationTime,f=!0,c=k):b.credentials.push(c));c.resources||(c.resources=[]);c.resources.push(d||e);c.scope=b._isServerRsrc(e)?"server":
"portal";c.onTokenChange();var d=b._soReqs,l={};b._soReqs=[];m.forEach(d,function(a){if(!this._isIdenticalService(e,a.resUrl_)){var b=this._getSuffix(a.resUrl_);l[b]||(l[b]=!0,c.resources.push(a.resUrl_))}},b);a.callback(c);m.forEach(d,function(a){this._hasSameServerInstance(this._getServerInstanceRoot(e),a.resUrl_)?a.callback(c):this._soReqs.push(a)},b);b._busy=a.resUrl_=a.sinfo_=a.refresh_=null;if(!f)b.onCredentialCreate({credential:c});b._soReqs.length?b._doSignIn(b._soReqs.shift()):b._xoReqs.length&&
b._doSignIn(b._xoReqs.shift())},d=function(c){a.errback(c);b._busy=a.resUrl_=a.sinfo_=a.refresh_=null;b._soReqs.length?b._doSignIn(b._soReqs.shift()):b._xoReqs.length&&b._doSignIn(b._xoReqs.shift())},e=function(e,f,l,m){var k=a.sinfo_,g=!a.options_||!1!==a.options_.prompt,n=k.hasPortal&&b._findOAuthInfo(a.resUrl_),q;if(b._canUsePortalSignInWorkflow(a.resUrl_))f=b._getEsriAuthCookie(),e=b._portalConfig,f?(k.webTierAuth||"web"!==(f.auth_tier&&f.auth_tier.toLowerCase())||(k.webTierAuth=!0),q=new v({userId:f.email,
server:k.server,token:k.webTierAuth?null:f.token,expires:f.expires}),q.token?a._pendingDfd=b._exchangeToken(q.server,n?n.appId:"arcgisonline",q.token).then(function(a){q.token=a;c(q)}).catch(function(){c(q)}):c(q)):g?(g="",n=window.location.href,g=b.signInPage?b.signInPage:e?e.baseUrl+e.signin:b._isIdProvider(n,a.resUrl_)?b._getOrigin(n)+"/home/signin.html":k.tokenServiceUrl.replace(b._rePortalTokenSvc,"")+"/home/signin.html",g=g.replace(/http:/i,"https:"),e&&!1===e.useSSL&&(g=g.replace(/https:/i,
"http:")),0===n.toLowerCase().replace("https","http").indexOf(g.toLowerCase().replace("https","http"))?(k=Error("Cannot redirect to Sign-In page from within Sign-In page. URL of the resource that triggered this workflow: "+a.resUrl_),k.code="IdentityManagerBase.5",k.log=!!r.isDebug,d(k)):(b._rejectOnPersistedPageShow=!0,b._redirectFunc?b._redirectFunc({signInPage:g,returnUrlParamName:"returnUrl",returnUrl:n,resourceUrl:a.resUrl_,serverInfo:k}):window.location=g+"?returnUrl\x3d"+window.escape(n))):
(k=Error("User is not signed in."),k.code="IdentityManagerBase.6",k.log=!!r.isDebug,d(k));else if(e)c(new v({userId:e,server:k.server,token:l,expires:u.isDefined(m)?Number(m):null,ssl:!!f}));else if(n){var h=n._oAuthCred;h||(e=new M(n,window.localStorage),f=new M(n,window.sessionStorage),e.isValid()&&f.isValid()?e.expires>f.expires?(h=e,f.destroy()):(h=f,e.destroy()):h=e.isValid()?e:f,n._oAuthCred=h);h.isValid()?(q=new v({userId:h.userId,server:k.server,token:h.token,expires:h.expires,ssl:h.ssl,_oAuthCred:h}),
n.appId!==h.appId&&b._doPortalSignIn(a.resUrl_,!0)?a._pendingDfd=b._exchangeToken(q.server,n.appId,q.token).then(function(a){q.token=a;h.token=a;h.save();c(q)}).catch(function(){c(q)}):c(q)):b._oAuthHash&&b._oAuthHash.state.portalUrl===n.portalUrl?(g=b._oAuthHash,q=new v({userId:g.username,server:k.server,token:g.access_token,expires:(new Date).getTime()+1E3*Number(g.expires_in),ssl:"true"===g.ssl,oAuthState:g.state,_oAuthCred:h}),h.storage=g.persist?window.localStorage:window.sessionStorage,h.token=
q.token,h.expires=q.expires,h.userId=q.userId,h.ssl=q.ssl,h.save(),b._oAuthHash=null,c(q)):g?a._pendingDfd=b.oAuthSignIn(a.resUrl_,k,n,a.options_).addCallbacks(c,d):(k=Error("User is not signed in."),k.code="IdentityManagerBase.6",k.log=!!r.isDebug,d(k))}else g?b._checkProtocol(a.resUrl_,k,d,a.admin_)&&(g=a.options_,a.admin_&&(g=g||{},g.isAdmin=!0),a._pendingDfd=b.signIn(a.resUrl_,k,g).addCallbacks(c,d)):(k=Error("User is not signed in."),k.code="IdentityManagerBase.6",k.log=!!r.isDebug,d(k))},f=
function(){var e=a.sinfo_,f=e.owningSystemUrl,g=a.options_,h,l,p,w;g&&(h=g.token,l=g.error,p=g.prompt);(w=b._findCredential(f,{token:h,resource:a.resUrl_}))||m.some(b.credentials,function(a){this._isIdProvider(f,a.server)&&(w=a);return!!w},b);w?(g=b.findCredential(a.resUrl_,w.userId))?c(g):G(e,b._legacyFed)?(g=w.toJson(),g.server=e.server,g.resources=null,c(new v(g))):(a._pendingDfd=b.generateToken(b.findServerInfo(w.server),null,{serverUrl:a.resUrl_,token:w.token,ssl:w.ssl})).addCallbacks(function(b){c(new v({userId:w.userId,
server:e.server,token:b.token,expires:u.isDefined(b.expires)?Number(b.expires):null,ssl:!!b.ssl,isAdmin:a.admin_,validity:b.validity}))},d):(b._busy=null,h&&(a.options_.token=null),(a._pendingDfd=b.getCredential(f.replace(/\/?$/,"/sharing"),{resource:a.resUrl_,owningTenant:e.owningTenant,token:h,error:l,prompt:p})).addCallbacks(function(c){b._enqueue(a.resUrl_,a.sinfo_,a.options_,a,a.admin_)},function(a){d(a)}))};this._errbackFunc=d;var l=a.sinfo_.owningSystemUrl,g=this._isServerRsrc(a.resUrl_),h=
a.sinfo_._restInfoDfd;h?h.addCallbacks(function(c){var d=a.sinfo_;d._restInfoDfd&&(d.adminTokenServiceUrl=d._restInfoDfd.adminUrl_,d._restInfoDfd=null,d.tokenServiceUrl=p.getObject("authInfo.tokenServicesUrl",!1,c)||p.getObject("authInfo.tokenServiceUrl",!1,c)||p.getObject("tokenServiceUrl",!1,c),d.shortLivedTokenValidity=p.getObject("authInfo.shortLivedTokenValidity",!1,c),d.currentVersion=c.currentVersion,d.owningTenant=c.owningTenant,(c=d.owningSystemUrl=c.owningSystemUrl)&&b._portals.push(c));
g&&d.owningSystemUrl?f():e()},function(){a.sinfo_._restInfoDfd=null;var b=Error("Unknown resource - could not find token service endpoint.");b.code="IdentityManagerBase.2";b.log=!!r.isDebug;d(b)}):g&&l?f():a.sinfo_._selfReq?a.sinfo_._selfReq.selfDfd.then(function(c){var d={},e,g,f,k;c&&(e=c.user&&c.user.username,d.username=e,d.allSSL=c.allSSL,g=c.supportsOAuth,f=c.currentVersion,"multitenant"===c.portalMode&&(k=c.customBaseUrl));a.sinfo_.webTierAuth=!!e;return e&&b.normalizeWebTierAuth?b.generateToken(a.sinfo_,
null,{ssl:d.allSSL}).addBoth(function(a){d.portalToken=a&&a.token;d.tokenExpiration=a&&a.expires;return d}):!e&&g&&4.4<=parseFloat(f)&&!b._canUsePortalSignInWorkflow(a.resUrl_)?b._generateOAuthInfo({portalUrl:a.sinfo_.server,customBaseUrl:k,owningTenant:a.sinfo_._selfReq.owningTenant}).always(function(){return d}):d}).always(function(b){a.sinfo_._selfReq=null;b?e(b.username,b.allSSL,b.portalToken,b.tokenExpiration):e()}):e()},_generateOAuthInfo:function(a){var b=this,c,d=a.portalUrl,e=a.customBaseUrl,
f=a.owningTenant;if(a=!this.defaultOAuthInfo&&this._createDefaultOAuthInfo&&!this._hasTestedIfAppIsOnPortal){c=window.location.href;var h=c.indexOf("?");-1<h&&(c=c.slice(0,h));h=c.search(/\/(apps|home)\//);c=-1<h?c.slice(0,h):null}a&&c?(this._hasTestedIfAppIsOnPortal=!0,a=y({url:c+"/sharing/rest",content:{f:"json"},handleAs:"json"}).then(function(){b.defaultOAuthInfo=new N({appId:"arcgisonline",popup:!0,popupCallbackUrl:c+"/home/oauth-callback.html"})})):(a=new z,a.resolve(),a=a.promise);return a.then(function(){if(b.defaultOAuthInfo)return d=
d.replace(/^http:/i,"https:"),y({url:d+"/sharing/rest/oauth2/validateRedirectUri",content:{accountId:f,client_id:b.defaultOAuthInfo.appId,redirect_uri:t.getAbsoluteUrl(b.defaultOAuthInfo.popupCallbackUrl),f:"json"},handleAs:"json",callbackParamName:"callback"}).then(function(a){if(a.valid){var c=b.defaultOAuthInfo.clone();c.portalUrl=a.urlKey&&e?"https://"+a.urlKey.toLowerCase()+"."+e:d;b.oAuthInfos.push(c)}})})}});v=J(L,{declaredClass:"esri.Credential",tokenRefreshBuffer:2,constructor:function(a){p.mixin(this,
a);this.resources=this.resources||[];u.isDefined(this.creationTime)||(this.creationTime=(new Date).getTime())},_oAuthCred:null,refreshToken:function(){var a=this,b=this.resources&&this.resources[0],c=h.id.findServerInfo(this.server),d=c&&c.owningSystemUrl,e=!!d&&"server"===this.scope,f=e&&G(c,h.id._legacyFed),l=e&&h.id.findServerInfo(d),g,p=(g=c.webTierAuth)&&h.id.normalizeWebTierAuth,k=C[this.server],k=k&&k[this.userId],n={username:this.userId,password:k},r;if(!g||p)if(e&&!l&&m.some(h.id.serverInfos,
function(a){h.id._isIdProvider(d,a.server)&&(l=a);return!!l}),g=l&&h.id.findCredential(l.server,this.userId),!e||g)if(f)g.refreshToken();else{if(e)r={serverUrl:b,token:g&&g.token,ssl:g&&g.ssl};else if(p)n=null,r={ssl:this.ssl};else if(k)this.isAdmin&&(r={isAdmin:!0});else{var t;b&&(b=h.id._sanitizeUrl(b),this._enqueued=1,t=h.id._enqueue(b,c,null,null,this.isAdmin,this),t.addCallback(function(){a._enqueued=0;a.refreshServerTokens()}).addErrback(function(){a._enqueued=0}));return t}return h.id.generateToken(e?
l:c,e?null:n,r).addCallback(function(b){a.token=b.token;a.expires=u.isDefined(b.expires)?Number(b.expires):null;a.creationTime=(new Date).getTime();a.validity=b.validity;a.onTokenChange();a.refreshServerTokens()}).addErrback(function(){})}},refreshServerTokens:function(){"portal"===this.scope&&m.forEach(h.id.credentials,function(a){var b=h.id.findServerInfo(a.server),c=b&&b.owningSystemUrl;a!==this&&a.userId===this.userId&&c&&"server"===a.scope&&(h.id._hasSameServerInstance(this.server,c)||h.id._isIdProvider(c,
this.server))&&(G(b,h.id._legacyFed)?(a.token=this.token,a.expires=this.expires,a.creationTime=this.creationTime,a.validity=this.validity,a.onTokenChange()):a.refreshToken())},this)},onTokenChange:function(a){clearTimeout(this._refreshTimer);var b=this.server&&h.id.findServerInfo(this.server),c=(b=b&&b.owningSystemUrl)&&h.id.findServerInfo(b);!1!==a&&(!b||"portal"===this.scope||c&&c.webTierAuth&&!h.id.normalizeWebTierAuth)&&(u.isDefined(this.expires)||u.isDefined(this.validity))&&this._startRefreshTimer()},
onDestroy:function(){},destroy:function(){this.userId=this.server=this.token=this.expires=this.validity=this.resources=this.creationTime=null;this._oAuthCred&&(this._oAuthCred.destroy(),this._oAuthCred=null);var a=m.indexOf(h.id.credentials,this);-1<a&&h.id.credentials.splice(a,1);this.onTokenChange();this.onDestroy()},toJson:function(){return this._toJson()},_toJson:function(){var a=u.fixJson({userId:this.userId,server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,
isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope}),b=this.resources;b&&0<b.length&&(a.resources=b.slice());return a},_startRefreshTimer:function(){clearTimeout(this._refreshTimer);var a=6E4*this.tokenRefreshBuffer,b=(this.validity?this.creationTime+6E4*this.validity:this.expires)-(new Date).getTime();0>b&&(b=0);this._refreshTimer=setTimeout(p.hitch(this,this.refreshToken),b>a?b-a:b)}});I.Credential=v;R("extend-esri")&&(h.IdentityManagerBase=I);return I});