import{$ as k,$a as G,A as ge,Ba as b,C as _e,E as be,Fa as S,G as L,Gb as xe,I as ve,Ia as V,Ib as ke,La as U,Mb as Se,N as Ie,Na as Y,O as ye,Oa as De,P as Ee,R as we,S as j,V as m,W as p,Z as D,_ as d,a as T,aa as P,ab as Z,ba as K,ca as g,h as de,ia as Ae,j as he,m as ue,mb as q,pa as Te,q as C,r as me,ra as Ce,sa as x,u as f,v as fe,va as y,vb as H,y as pe,yb as E,za as B}from"./chunk-MCPLFIMF.js";var X;try{X=typeof Intl<"u"&&Intl.v8BreakIterator}catch{X=!1}var N=(()=>{let i=class i{constructor(e){this._platformId=e,this.isBrowser=this._platformId?xe(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||X)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};i.\u0275fac=function(t){return new(t||i)(d(Te))},i.\u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var M;function tt(){if(M==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>M=!0}))}finally{M=M||!1}return M}function Q(n){return tt()?n:!!n.capture}function Me(n){return n.composedPath?n.composedPath()[0]:n.target}function Fe(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function J(n){return Array.isArray(n)?n:[n]}function ee(n){return n instanceof y?n.nativeElement:n}var Re=new Set,w,it=(()=>{let i=class i{constructor(e,t){this._platform=e,this._nonce=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):st}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&nt(e,this._nonce),this._matchMedia(e)}};i.\u0275fac=function(t){return new(t||i)(d(N),d(Ce,8))},i.\u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();function nt(n,i){if(!Re.has(n))try{w||(w=document.createElement("style"),i&&(w.nonce=i),w.setAttribute("type","text/css"),document.head.appendChild(w)),w.sheet&&(w.sheet.insertRule(`@media ${n} {body{ }}`,0),Re.add(n))}catch(r){console.error(r)}}function st(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Le=(()=>{let i=class i{constructor(e,t){this._mediaMatcher=e,this._zone=t,this._queries=new Map,this._destroySubject=new ue}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Oe(J(e)).some(s=>this._registerQuery(s).mql.matches)}observe(e){let s=Oe(J(e)).map(a=>this._registerQuery(a).observable),o=fe(s);return o=pe(o.pipe(L(1)),o.pipe(ye(1),be(0))),o.pipe(f(a=>{let c={matches:!1,breakpoints:{}};return a.forEach(({matches:h,query:l})=>{c.matches=c.matches||h,c.breakpoints[l]=h}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new he(a=>{let c=h=>this._zone.run(()=>a.next(h));return t.addListener(c),()=>{t.removeListener(c)}}).pipe(Ee(t),f(({matches:a})=>({query:e,matches:a})),we(this._destroySubject)),mql:t};return this._queries.set(e,o),o}};i.\u0275fac=function(t){return new(t||i)(d(it),d(S))},i.\u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();function Oe(n){return n.map(i=>i.split(",")).reduce((i,r)=>i.concat(r)).map(i=>i.trim())}function Ve(n){return n.buttons===0||n.detail===0}function Ue(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var A=function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n}(A||{}),je="cdk-high-contrast-black-on-white",Pe="cdk-high-contrast-white-on-black",te="cdk-high-contrast-active",He=(()=>{let i=class i{constructor(e,t){this._platform=e,this._document=t,this._breakpointSubscription=k(Le).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return A.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,s=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(s&&s.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return A.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return A.BLACK_ON_WHITE}return A.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(te,je,Pe),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===A.BLACK_ON_WHITE?e.add(te,je):t===A.WHITE_ON_BLACK&&e.add(te,Pe)}}};i.\u0275fac=function(t){return new(t||i)(d(N),d(E))},i.\u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var ie=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=g({type:i}),i.\u0275inj=p({});let n=i;return n})();function ct(){return!0}var lt=new D("mat-sanity-checks",{providedIn:"root",factory:ct}),oe=(()=>{let i=class i{constructor(e,t,s){this._sanityChecks=t,this._document=s,this._hasDoneGlobalChecks=!1,e._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(e){return Fe()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[e]}};i.\u0275fac=function(t){return new(t||i)(d(He),d(lt,8),d(E))},i.\u0275mod=g({type:i}),i.\u0275inj=p({imports:[ie,ie]});let n=i;return n})();var u=function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n}(u||{}),ne=class{constructor(i,r,e,t=!1){this._renderer=i,this.element=r,this.config=e,this._animationForciblyDisabledThroughCss=t,this.state=u.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},ze=Q({passive:!0,capture:!0}),se=class{constructor(){this._events=new Map,this._delegateEventHandler=i=>{let r=Me(i);r&&this._events.get(i.type)?.forEach((e,t)=>{(t===r||t.contains(r))&&e.forEach(s=>s.handleEvent(i))})}}addHandler(i,r,e,t){let s=this._events.get(r);if(s){let o=s.get(e);o?o.add(t):s.set(e,new Set([t]))}else this._events.set(r,new Map([[e,new Set([t])]])),i.runOutsideAngular(()=>{document.addEventListener(r,this._delegateEventHandler,ze)})}removeHandler(i,r,e){let t=this._events.get(i);if(!t)return;let s=t.get(r);s&&(s.delete(e),s.size===0&&t.delete(r),t.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,ze)))}},$e={enterDuration:225,exitDuration:150},dt=800,We=Q({passive:!0,capture:!0}),Ke=["mousedown","touchstart"],Ye=["mouseup","mouseleave","touchend","touchcancel"],R=class R{constructor(i,r,e,t){this._target=i,this._ngZone=r,this._platform=t,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,t.isBrowser&&(this._containerElement=ee(e))}fadeInRipple(i,r,e={}){let t=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),s=T(T({},$e),e.animation);e.centered&&(i=t.left+t.width/2,r=t.top+t.height/2);let o=e.radius||ht(i,r,t),a=i-t.left,c=r-t.top,h=s.enterDuration,l=document.createElement("div");l.classList.add("mat-ripple-element"),l.style.left=`${a-o}px`,l.style.top=`${c-o}px`,l.style.height=`${o*2}px`,l.style.width=`${o*2}px`,e.color!=null&&(l.style.backgroundColor=e.color),l.style.transitionDuration=`${h}ms`,this._containerElement.appendChild(l);let v=window.getComputedStyle(l),et=v.transitionProperty,re=v.transitionDuration,W=et==="none"||re==="0s"||re==="0s, 0s"||t.width===0&&t.height===0,I=new ne(this,l,e,W);l.style.transform="scale3d(1, 1, 1)",I.state=u.FADING_IN,e.persistent||(this._mostRecentTransientRipple=I);let ae=null;return!W&&(h||s.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ce=()=>this._finishRippleTransition(I),le=()=>this._destroyRipple(I);l.addEventListener("transitionend",ce),l.addEventListener("transitioncancel",le),ae={onTransitionEnd:ce,onTransitionCancel:le}}),this._activeRipples.set(I,ae),(W||!h)&&this._finishRippleTransition(I),I}fadeOutRipple(i){if(i.state===u.FADING_OUT||i.state===u.HIDDEN)return;let r=i.element,e=T(T({},$e),i.config.animation);r.style.transitionDuration=`${e.exitDuration}ms`,r.style.opacity="0",i.state=u.FADING_OUT,(i._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let r=ee(i);!this._platform.isBrowser||!r||r===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=r,Ke.forEach(e=>{R._eventManager.addHandler(this._ngZone,e,r,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ye.forEach(r=>{this._triggerElement.addEventListener(r,this,We)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===u.FADING_IN?this._startFadeOutTransition(i):i.state===u.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let r=i===this._mostRecentTransientRipple,{persistent:e}=i.config;i.state=u.VISIBLE,!e&&(!r||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let r=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=u.HIDDEN,r!==null&&(i.element.removeEventListener("transitionend",r.onTransitionEnd),i.element.removeEventListener("transitioncancel",r.onTransitionCancel)),i.element.remove()}_onMousedown(i){let r=Ve(i),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+dt;!this._target.rippleDisabled&&!r&&!e&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!Ue(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let r=i.changedTouches;if(r)for(let e=0;e<r.length;e++)this.fadeInRipple(r[e].clientX,r[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let r=i.state===u.VISIBLE||i.config.terminateOnPointerUp&&i.state===u.FADING_IN;!i.config.persistent&&r&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Ke.forEach(r=>R._eventManager.removeHandler(r,i,this)),this._pointerUpEventsRegistered&&Ye.forEach(r=>i.removeEventListener(r,this,We)))}};R._eventManager=new se;var Ge=R;function ht(n,i,r){let e=Math.max(Math.abs(n-r.left),Math.abs(n-r.right)),t=Math.max(Math.abs(i-r.top),Math.abs(i-r.bottom));return Math.sqrt(e*e+t*t)}var ut=["*"],z;function mt(){if(z===void 0&&(z=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(z=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return z}function O(n){return mt()?.createHTML(n)||n}function Ze(n){return Error(`Unable to find icon with the name "${n}"`)}function ft(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}function qe(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Xe(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var _=class{constructor(i,r,e){this.url=i,this.svgText=r,this.options=e}},pt=(()=>{let i=class i{constructor(e,t,s,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=s}addSvgIcon(e,t,s){return this.addSvgIconInNamespace("",e,t,s)}addSvgIconLiteral(e,t,s){return this.addSvgIconLiteralInNamespace("",e,t,s)}addSvgIconInNamespace(e,t,s,o){return this._addSvgIconConfig(e,t,new _(s,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,s,o){let a=this._sanitizer.sanitize(x.HTML,s);if(!a)throw Xe(s);let c=O(a);return this._addSvgIconConfig(e,t,new _("",c,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,s){return this._addSvgIconSetConfig(e,new _(t,null,s))}addSvgIconSetLiteralInNamespace(e,t,s){let o=this._sanitizer.sanitize(x.HTML,t);if(!o)throw Xe(t);let a=O(o);return this._addSvgIconSetConfig(e,new _("",a,s))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(x.RESOURCE_URL,e);if(!t)throw qe(e);let s=this._cachedIconsByUrl.get(t);return s?C($(s)):this._loadSvgIconFromConfig(new _(e,null)).pipe(j(o=>this._cachedIconsByUrl.set(t,o)),f(o=>$(o)))}getNamedSvgIcon(e,t=""){let s=Qe(t,e),o=this._svgIconConfigs.get(s);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(s,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):me(Ze(s))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?C($(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(f(t=>$(t)))}_getSvgFromIconSetConfigs(e,t){let s=this._extractIconWithNameFromAnySet(e,t);if(s)return C(s);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(_e(c=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(x.RESOURCE_URL,a.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(l)),C(null)})));return ge(o).pipe(f(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw Ze(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let s=t.length-1;s>=0;s--){let o=t[s];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),c=this._extractSvgIconFromSet(a,e,o.options);if(c)return c}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(j(t=>e.svgText=t),f(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?C(null):this._fetchIcon(e).pipe(j(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,s){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,s);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),s);let c=this._svgElementFromString(O("<svg></svg>"));return c.appendChild(a),this._setSvgAttributes(c,s)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let s=t.querySelector("svg");if(!s)throw Error("<svg> tag not found");return s}_toSvgElement(e){let t=this._svgElementFromString(O("<svg></svg>")),s=e.attributes;for(let o=0;o<s.length;o++){let{name:a,value:c}=s[o];a!=="id"&&t.setAttribute(a,c)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:s}=e,o=s?.withCredentials??!1;if(!this._httpClient)throw ft();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(x.RESOURCE_URL,t);if(!a)throw qe(t);let c=this._inProgressUrlFetches.get(a);if(c)return c;let h=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(f(l=>O(l)),ve(()=>this._inProgressUrlFetches.delete(a)),Ie());return this._inProgressUrlFetches.set(a,h),h}_addSvgIconConfig(e,t,s){return this._svgIconConfigs.set(Qe(e,t),s),this}_addSvgIconSetConfig(e,t){let s=this._iconSetConfigs.get(e);return s?s.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let s=0;s<this._resolvers.length;s++){let o=this._resolvers[s](t,e);if(o)return gt(o)?new _(o.url,null,o.options):new _(o,null)}}};i.\u0275fac=function(t){return new(t||i)(d(ke,8),d(Se),d(E,8),d(B))},i.\u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();function $(n){return n.cloneNode(!0)}function Qe(n,i){return n+":"+i}function gt(n){return!!(n.url&&n.options)}var _t=new D("MAT_ICON_DEFAULT_OPTIONS"),bt=new D("mat-icon-location",{providedIn:"root",factory:vt});function vt(){let n=k(E),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}var Je=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],It=Je.map(n=>`[${n}]`).join(", "),yt=/^url\(['"]?#(.*?)['"]?\)$/,sn=(()=>{let i=class i{get color(){return this._color||this._defaultColor}set color(e){this._color=e}get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}constructor(e,t,s,o,a,c){this._elementRef=e,this._iconRegistry=t,this._location=o,this._errorHandler=a,this.inline=!1,this._previousFontSetClass=[],this._currentIconFetch=de.EMPTY,c&&(c.color&&(this.color=this._defaultColor=c.color),c.fontSet&&(this.fontSet=c.fontSet)),s||e.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let s=e.childNodes[t];(s.nodeType!==1||s.nodeName.toLowerCase()==="svg")&&s.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(s=>s.length>0);this._previousFontSetClass.forEach(s=>e.classList.remove(s)),t.forEach(s=>e.classList.add(s)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((s,o)=>{s.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(It),s=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)Je.forEach(a=>{let c=t[o],h=c.getAttribute(a),l=h?h.match(yt):null;if(l){let v=s.get(c);v||(v=[],s.set(c,v)),v.push({name:a,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,s]=this._splitIconName(e);t&&(this._svgNamespace=t),s&&(this._svgName=s),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(s,t).pipe(L(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${s}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}};i.\u0275fac=function(t){return new(t||i)(b(y),b(pt),Ae("aria-hidden"),b(bt),b(B),b(_t,8))},i.\u0275cmp=K({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,s){t&2&&(U("data-mat-icon-type",s._usingFontIcon()?"font":"svg")("data-mat-icon-name",s._svgName||s.fontIcon)("data-mat-icon-namespace",s._svgNamespace||s.fontSet)("fontIcon",s._usingFontIcon()?s.fontIcon:null),De(s.color?"mat-"+s.color:""),Y("mat-icon-inline",s.inline)("mat-icon-no-color",s.color!=="primary"&&s.color!=="accent"&&s.color!=="warn"))},inputs:{color:"color",inline:[P.HasDecoratorInputTransform,"inline","inline",H],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],standalone:!0,features:[V,q],ngContentSelectors:ut,decls:1,vars:0,template:function(t,s){t&1&&(G(),Z(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0});let n=i;return n})(),on=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=g({type:i}),i.\u0275inj=p({imports:[oe,oe]});let n=i;return n})();export{sn as a,on as b};
