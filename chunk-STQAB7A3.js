import{b as H2}from"./chunk-C3BP3FBF.js";import{$a as M2,Aa as p2,Ba as E,La as d2,Ma as C2,Mb as x2,Ta as Q,Ua as a1,V as q1,Va as I1,W as s2,Xa as b2,ab as g2,ba as K,ca as m2,da as v2,ea as z1,gb as c1,mb as e1,ta as h2,va as z2,xa as u2}from"./chunk-MCPLFIMF.js";function L2(a,c){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);c&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),e.push.apply(e,n)}return e}function s(a){for(var c=1;c<arguments.length;c++){var e=arguments[c]!=null?arguments[c]:{};c%2?L2(Object(e),!0).forEach(function(n){b(a,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):L2(Object(e)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))})}return a}function y1(a){"@babel/helpers - typeof";return y1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},y1(a)}function k3(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function V2(a,c){for(var e=0;e<c.length;e++){var n=c[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function A3(a,c,e){return c&&V2(a.prototype,c),e&&V2(a,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function b(a,c,e){return c in a?Object.defineProperty(a,c,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[c]=e,a}function J1(a,c){return P3(a)||q3(a,c)||X2(a,c)||E3()}function m1(a){return w3(a)||O3(a)||X2(a)||I3()}function w3(a){if(Array.isArray(a))return D1(a)}function P3(a){if(Array.isArray(a))return a}function O3(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function q3(a,c){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var n=[],i=!0,r=!1,t,o;try{for(e=e.call(a);!(i=(t=e.next()).done)&&(n.push(t.value),!(c&&n.length===c));i=!0);}catch(f){r=!0,o=f}finally{try{!i&&e.return!=null&&e.return()}finally{if(r)throw o}}return n}}function X2(a,c){if(a){if(typeof a=="string")return D1(a,c);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return D1(a,c)}}function D1(a,c){(c==null||c>a.length)&&(c=a.length);for(var e=0,n=new Array(c);e<c;e++)n[e]=a[e];return n}function I3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var y2=function(){},K1={},J2={},K2=null,Q2={mark:y2,measure:y2};try{typeof window<"u"&&(K1=window),typeof document<"u"&&(J2=document),typeof MutationObserver<"u"&&(K2=MutationObserver),typeof performance<"u"&&(Q2=performance)}catch{}var Z3=K1.navigator||{},N2=Z3.userAgent,S2=N2===void 0?"":N2,T=K1,d=J2,k2=K2,u1=Q2,M5=!!T.document,q=!!d.documentElement&&!!d.head&&typeof d.addEventListener=="function"&&typeof d.createElement=="function",a3=~S2.indexOf("MSIE")||~S2.indexOf("Trident/"),p1,d1,C1,b1,M1,w="___FONT_AWESOME___",R1=16,c3="fa",e3="svg-inline--fa",W="data-fa-i2svg",j1="data-fa-pseudo-element",T3="data-fa-pseudo-element-pending",Q1="data-prefix",a2="data-icon",A2="fontawesome-i2svg",F3="async",D3=["HTML","HEAD","STYLE","SCRIPT"],n3=function(){try{return!0}catch{return!1}}(),p="classic",C="sharp",c2=[p,C];function v1(a){return new Proxy(a,{get:function(e,n){return n in e?e[n]:e[p]}})}var t1=v1((p1={},b(p1,p,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),b(p1,C,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),p1)),o1=v1((d1={},b(d1,p,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),b(d1,C,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),d1)),f1=v1((C1={},b(C1,p,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),b(C1,C,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),C1)),R3=v1((b1={},b(b1,p,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),b(b1,C,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),b1)),j3=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,i3="fa-layers-text",_3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,G3=v1((M1={},b(M1,p,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),b(M1,C,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),M1)),r3=[1,2,3,4,5,6,7,8,9,10],W3=r3.concat([11,12,13,14,15,16,17,18,19,20]),B3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],_={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l1=new Set;Object.keys(o1[p]).map(l1.add.bind(l1));Object.keys(o1[C]).map(l1.add.bind(l1));var Y3=[].concat(c2,m1(l1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_.GROUP,_.SWAP_OPACITY,_.PRIMARY,_.SECONDARY]).concat(r3.map(function(a){return"".concat(a,"x")})).concat(W3.map(function(a){return"w-".concat(a)})),i1=T.FontAwesomeConfig||{};function $3(a){var c=d.querySelector("script["+a+"]");if(c)return c.getAttribute(a)}function U3(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}d&&typeof d.querySelector=="function"&&(w2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],w2.forEach(function(a){var c=J1(a,2),e=c[0],n=c[1],i=U3($3(e));i!=null&&(i1[n]=i)}));var w2,t3={styleDefault:"solid",familyDefault:"classic",cssPrefix:c3,replacementClass:e3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};i1.familyPrefix&&(i1.cssPrefix=i1.familyPrefix);var X=s(s({},t3),i1);X.autoReplaceSvg||(X.observeMutations=!1);var v={};Object.keys(t3).forEach(function(a){Object.defineProperty(v,a,{enumerable:!0,set:function(e){X[a]=e,r1.forEach(function(n){return n(v)})},get:function(){return X[a]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(c){X.cssPrefix=c,r1.forEach(function(e){return e(v)})},get:function(){return X.cssPrefix}});T.FontAwesomeConfig=v;var r1=[];function X3(a){return r1.push(a),function(){r1.splice(r1.indexOf(a),1)}}var Z=R1,A={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function J3(a){if(!(!a||!q)){var c=d.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=a;for(var e=d.head.childNodes,n=null,i=e.length-1;i>-1;i--){var r=e[i],t=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(n=r)}return d.head.insertBefore(c,n),a}}var K3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function s1(){for(var a=12,c="";a-- >0;)c+=K3[Math.random()*62|0];return c}function J(a){for(var c=[],e=(a||[]).length>>>0;e--;)c[e]=a[e];return c}function e2(a){return a.classList?J(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(c){return c})}function o3(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Q3(a){return Object.keys(a||{}).reduce(function(c,e){return c+"".concat(e,'="').concat(o3(a[e]),'" ')},"").trim()}function k1(a){return Object.keys(a||{}).reduce(function(c,e){return c+"".concat(e,": ").concat(a[e].trim(),";")},"")}function n2(a){return a.size!==A.size||a.x!==A.x||a.y!==A.y||a.rotate!==A.rotate||a.flipX||a.flipY}function a4(a){var c=a.transform,e=a.containerWidth,n=a.iconWidth,i={transform:"translate(".concat(e/2," 256)")},r="translate(".concat(c.x*32,", ").concat(c.y*32,") "),t="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),o="rotate(".concat(c.rotate," 0 0)"),f={transform:"".concat(r," ").concat(t," ").concat(o)},m={transform:"translate(".concat(n/2*-1," -256)")};return{outer:i,inner:f,path:m}}function c4(a){var c=a.transform,e=a.width,n=e===void 0?R1:e,i=a.height,r=i===void 0?R1:i,t=a.startCentered,o=t===void 0?!1:t,f="";return o&&a3?f+="translate(".concat(c.x/Z-n/2,"em, ").concat(c.y/Z-r/2,"em) "):o?f+="translate(calc(-50% + ".concat(c.x/Z,"em), calc(-50% + ").concat(c.y/Z,"em)) "):f+="translate(".concat(c.x/Z,"em, ").concat(c.y/Z,"em) "),f+="scale(".concat(c.size/Z*(c.flipX?-1:1),", ").concat(c.size/Z*(c.flipY?-1:1),") "),f+="rotate(".concat(c.rotate,"deg) "),f}var e4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function f3(){var a=c3,c=e3,e=v.cssPrefix,n=v.replacementClass,i=e4;if(e!==a||n!==c){var r=new RegExp("\\.".concat(a,"\\-"),"g"),t=new RegExp("\\--".concat(a,"\\-"),"g"),o=new RegExp("\\.".concat(c),"g");i=i.replace(r,".".concat(e,"-")).replace(t,"--".concat(e,"-")).replace(o,".".concat(n))}return i}var P2=!1;function E1(){v.autoAddCss&&!P2&&(J3(f3()),P2=!0)}var n4={mixout:function(){return{dom:{css:f3,insertCss:E1}}},hooks:function(){return{beforeDOMElementCreation:function(){E1()},beforeI2svg:function(){E1()}}}},P=T||{};P[w]||(P[w]={});P[w].styles||(P[w].styles={});P[w].hooks||(P[w].hooks={});P[w].shims||(P[w].shims=[]);var N=P[w],l3=[],i4=function a(){d.removeEventListener("DOMContentLoaded",a),N1=1,l3.map(function(c){return c()})},N1=!1;q&&(N1=(d.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(d.readyState),N1||d.addEventListener("DOMContentLoaded",i4));function r4(a){q&&(N1?setTimeout(a,0):l3.push(a))}function h1(a){var c=a.tag,e=a.attributes,n=e===void 0?{}:e,i=a.children,r=i===void 0?[]:i;return typeof a=="string"?o3(a):"<".concat(c," ").concat(Q3(n),">").concat(r.map(h1).join(""),"</").concat(c,">")}function O2(a,c,e){if(a&&a[c]&&a[c][e])return{prefix:c,iconName:e,icon:a[c][e]}}var t4=function(c,e){return function(n,i,r,t){return c.call(e,n,i,r,t)}},Z1=function(c,e,n,i){var r=Object.keys(c),t=r.length,o=i!==void 0?t4(e,i):e,f,m,l;for(n===void 0?(f=1,l=c[r[0]]):(f=0,l=n);f<t;f++)m=r[f],l=o(l,c[m],m,c);return l};function o4(a){for(var c=[],e=0,n=a.length;e<n;){var i=a.charCodeAt(e++);if(i>=55296&&i<=56319&&e<n){var r=a.charCodeAt(e++);(r&64512)==56320?c.push(((i&1023)<<10)+(r&1023)+65536):(c.push(i),e--)}else c.push(i)}return c}function _1(a){var c=o4(a);return c.length===1?c[0].toString(16):null}function f4(a,c){var e=a.length,n=a.charCodeAt(c),i;return n>=55296&&n<=56319&&e>c+1&&(i=a.charCodeAt(c+1),i>=56320&&i<=57343)?(n-55296)*1024+i-56320+65536:n}function q2(a){return Object.keys(a).reduce(function(c,e){var n=a[e],i=!!n.icon;return i?c[n.iconName]=n.icon:c[e]=n,c},{})}function G1(a,c){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=e.skipHooks,i=n===void 0?!1:n,r=q2(c);typeof N.hooks.addPack=="function"&&!i?N.hooks.addPack(a,q2(c)):N.styles[a]=s(s({},N.styles[a]||{}),r),a==="fas"&&G1("fa",c)}var g1,x1,H1,Y=N.styles,l4=N.shims,s4=(g1={},b(g1,p,Object.values(f1[p])),b(g1,C,Object.values(f1[C])),g1),i2=null,s3={},m3={},v3={},h3={},z3={},m4=(x1={},b(x1,p,Object.keys(t1[p])),b(x1,C,Object.keys(t1[C])),x1);function v4(a){return~Y3.indexOf(a)}function h4(a,c){var e=c.split("-"),n=e[0],i=e.slice(1).join("-");return n===a&&i!==""&&!v4(i)?i:null}var u3=function(){var c=function(r){return Z1(Y,function(t,o,f){return t[f]=Z1(o,r,{}),t},{})};s3=c(function(i,r,t){if(r[3]&&(i[r[3]]=t),r[2]){var o=r[2].filter(function(f){return typeof f=="number"});o.forEach(function(f){i[f.toString(16)]=t})}return i}),m3=c(function(i,r,t){if(i[t]=t,r[2]){var o=r[2].filter(function(f){return typeof f=="string"});o.forEach(function(f){i[f]=t})}return i}),z3=c(function(i,r,t){var o=r[2];return i[t]=t,o.forEach(function(f){i[f]=t}),i});var e="far"in Y||v.autoFetchSvg,n=Z1(l4,function(i,r){var t=r[0],o=r[1],f=r[2];return o==="far"&&!e&&(o="fas"),typeof t=="string"&&(i.names[t]={prefix:o,iconName:f}),typeof t=="number"&&(i.unicodes[t.toString(16)]={prefix:o,iconName:f}),i},{names:{},unicodes:{}});v3=n.names,h3=n.unicodes,i2=A1(v.styleDefault,{family:v.familyDefault})};X3(function(a){i2=A1(a.styleDefault,{family:v.familyDefault})});u3();function r2(a,c){return(s3[a]||{})[c]}function z4(a,c){return(m3[a]||{})[c]}function G(a,c){return(z3[a]||{})[c]}function p3(a){return v3[a]||{prefix:null,iconName:null}}function u4(a){var c=h3[a],e=r2("fas",a);return c||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function F(){return i2}var t2=function(){return{prefix:null,iconName:null,rest:[]}};function A1(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=c.family,n=e===void 0?p:e,i=t1[n][a],r=o1[n][a]||o1[n][i],t=a in N.styles?a:null;return r||t||null}var I2=(H1={},b(H1,p,Object.keys(f1[p])),b(H1,C,Object.keys(f1[C])),H1);function w1(a){var c,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,i=n===void 0?!1:n,r=(c={},b(c,p,"".concat(v.cssPrefix,"-").concat(p)),b(c,C,"".concat(v.cssPrefix,"-").concat(C)),c),t=null,o=p;(a.includes(r[p])||a.some(function(m){return I2[p].includes(m)}))&&(o=p),(a.includes(r[C])||a.some(function(m){return I2[C].includes(m)}))&&(o=C);var f=a.reduce(function(m,l){var h=h4(v.cssPrefix,l);if(Y[l]?(l=s4[o].includes(l)?R3[o][l]:l,t=l,m.prefix=l):m4[o].indexOf(l)>-1?(t=l,m.prefix=A1(l,{family:o})):h?m.iconName=h:l!==v.replacementClass&&l!==r[p]&&l!==r[C]&&m.rest.push(l),!i&&m.prefix&&m.iconName){var z=t==="fa"?p3(m.iconName):{},u=G(m.prefix,m.iconName);z.prefix&&(t=null),m.iconName=z.iconName||u||m.iconName,m.prefix=z.prefix||m.prefix,m.prefix==="far"&&!Y.far&&Y.fas&&!v.autoFetchSvg&&(m.prefix="fas")}return m},t2());return(a.includes("fa-brands")||a.includes("fab"))&&(f.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(f.prefix="fad"),!f.prefix&&o===C&&(Y.fass||v.autoFetchSvg)&&(f.prefix="fass",f.iconName=G(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||t==="fa")&&(f.prefix=F()||"fas"),f}var p4=function(){function a(){k3(this,a),this.definitions={}}return A3(a,[{key:"add",value:function(){for(var e=this,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];var t=i.reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(o){e.definitions[o]=s(s({},e.definitions[o]||{}),t[o]),G1(o,t[o]);var f=f1[p][o];f&&G1(f,t[o]),u3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,n){var i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(function(r){var t=i[r],o=t.prefix,f=t.iconName,m=t.icon,l=m[2];e[o]||(e[o]={}),l.length>0&&l.forEach(function(h){typeof h=="string"&&(e[o][h]=m)}),e[o][f]=m}),e}}]),a}(),E2=[],$={},U={},d4=Object.keys(U);function C4(a,c){var e=c.mixoutsTo;return E2=a,$={},Object.keys(U).forEach(function(n){d4.indexOf(n)===-1&&delete U[n]}),E2.forEach(function(n){var i=n.mixout?n.mixout():{};if(Object.keys(i).forEach(function(t){typeof i[t]=="function"&&(e[t]=i[t]),y1(i[t])==="object"&&Object.keys(i[t]).forEach(function(o){e[t]||(e[t]={}),e[t][o]=i[t][o]})}),n.hooks){var r=n.hooks();Object.keys(r).forEach(function(t){$[t]||($[t]=[]),$[t].push(r[t])})}n.provides&&n.provides(U)}),e}function W1(a,c){for(var e=arguments.length,n=new Array(e>2?e-2:0),i=2;i<e;i++)n[i-2]=arguments[i];var r=$[a]||[];return r.forEach(function(t){c=t.apply(null,[c].concat(n))}),c}function B(a){for(var c=arguments.length,e=new Array(c>1?c-1:0),n=1;n<c;n++)e[n-1]=arguments[n];var i=$[a]||[];i.forEach(function(r){r.apply(null,e)})}function O(){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);return U[a]?U[a].apply(null,c):void 0}function B1(a){a.prefix==="fa"&&(a.prefix="fas");var c=a.iconName,e=a.prefix||F();if(c)return c=G(e,c)||c,O2(d3.definitions,e,c)||O2(N.styles,e,c)}var d3=new p4,b4=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,B("noAuto")},M4={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return q?(B("beforeI2svg",c),O("pseudoElements2svg",c),O("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,r4(function(){x4({autoReplaceSvgRoot:e}),B("watch",c)})}},g4={icon:function(c){if(c===null)return null;if(y1(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:G(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],n=A1(c[0]);return{prefix:n,iconName:G(n,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(v.cssPrefix,"-"))>-1||c.match(j3))){var i=w1(c.split(" "),{skipLookups:!0});return{prefix:i.prefix||F(),iconName:G(i.prefix,i.iconName)||i.iconName}}if(typeof c=="string"){var r=F();return{prefix:r,iconName:G(r,c)||c}}}},L={noAuto:b4,config:v,dom:M4,parse:g4,library:d3,findIconDefinition:B1,toHtml:h1},x4=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.autoReplaceSvgRoot,n=e===void 0?d:e;(Object.keys(N.styles).length>0||v.autoFetchSvg)&&q&&v.autoReplaceSvg&&L.dom.i2svg({node:n})};function P1(a,c){return Object.defineProperty(a,"abstract",{get:c}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(n){return h1(n)})}}),Object.defineProperty(a,"node",{get:function(){if(q){var n=d.createElement("div");return n.innerHTML=a.html,n.children}}}),a}function H4(a){var c=a.children,e=a.main,n=a.mask,i=a.attributes,r=a.styles,t=a.transform;if(n2(t)&&e.found&&!n.found){var o=e.width,f=e.height,m={x:o/f/2,y:.5};i.style=k1(s(s({},r),{},{"transform-origin":"".concat(m.x+t.x/16,"em ").concat(m.y+t.y/16,"em")}))}return[{tag:"svg",attributes:i,children:c}]}function L4(a){var c=a.prefix,e=a.iconName,n=a.children,i=a.attributes,r=a.symbol,t=r===!0?"".concat(c,"-").concat(v.cssPrefix,"-").concat(e):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:s(s({},i),{},{id:t}),children:n}]}]}function o2(a){var c=a.icons,e=c.main,n=c.mask,i=a.prefix,r=a.iconName,t=a.transform,o=a.symbol,f=a.title,m=a.maskId,l=a.titleId,h=a.extra,z=a.watchable,u=z===void 0?!1:z,g=n.found?n:e,V=g.width,y=g.height,S=i==="fak",M=[v.replacementClass,r?"".concat(v.cssPrefix,"-").concat(r):""].filter(function(I){return h.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(h.classes).join(" "),x={children:[],attributes:s(s({},h.attributes),{},{"data-prefix":i,"data-icon":r,class:M,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(V," ").concat(y)})},k=S&&!~h.classes.indexOf("fa-fw")?{width:"".concat(V/y*16*.0625,"em")}:{};u&&(x.attributes[W]=""),f&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(l||s1())},children:[f]}),delete x.attributes.title);var H=s(s({},x),{},{prefix:i,iconName:r,main:e,mask:n,maskId:m,transform:t,symbol:o,styles:s(s({},k),h.styles)}),R=n.found&&e.found?O("generateAbstractMask",H)||{children:[],attributes:{}}:O("generateAbstractIcon",H)||{children:[],attributes:{}},j=R.children,O1=R.attributes;return H.children=j,H.attributes=O1,o?L4(H):H4(H)}function Z2(a){var c=a.content,e=a.width,n=a.height,i=a.transform,r=a.title,t=a.extra,o=a.watchable,f=o===void 0?!1:o,m=s(s(s({},t.attributes),r?{title:r}:{}),{},{class:t.classes.join(" ")});f&&(m[W]="");var l=s({},t.styles);n2(i)&&(l.transform=c4({transform:i,startCentered:!0,width:e,height:n}),l["-webkit-transform"]=l.transform);var h=k1(l);h.length>0&&(m.style=h);var z=[];return z.push({tag:"span",attributes:m,children:[c]}),r&&z.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),z}function V4(a){var c=a.content,e=a.title,n=a.extra,i=s(s(s({},n.attributes),e?{title:e}:{}),{},{class:n.classes.join(" ")}),r=k1(n.styles);r.length>0&&(i.style=r);var t=[];return t.push({tag:"span",attributes:i,children:[c]}),e&&t.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),t}var T1=N.styles;function Y1(a){var c=a[0],e=a[1],n=a.slice(4),i=J1(n,1),r=i[0],t=null;return Array.isArray(r)?t={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(_.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(_.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(_.PRIMARY),fill:"currentColor",d:r[1]}}]}:t={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:c,height:e,icon:t}}var y4={found:!1,width:512,height:512};function N4(a,c){!n3&&!v.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(c,'" is missing.'))}function $1(a,c){var e=c;return c==="fa"&&v.styleDefault!==null&&(c=F()),new Promise(function(n,i){var r={found:!1,width:512,height:512,icon:O("missingIconAbstract")||{}};if(e==="fa"){var t=p3(a)||{};a=t.iconName||a,c=t.prefix||c}if(a&&c&&T1[c]&&T1[c][a]){var o=T1[c][a];return n(Y1(o))}N4(a,c),n(s(s({},y4),{},{icon:v.showMissingIcons&&a?O("missingIconAbstract")||{}:{}}))})}var T2=function(){},U1=v.measurePerformance&&u1&&u1.mark&&u1.measure?u1:{mark:T2,measure:T2},n1='FA "6.5.1"',S4=function(c){return U1.mark("".concat(n1," ").concat(c," begins")),function(){return C3(c)}},C3=function(c){U1.mark("".concat(n1," ").concat(c," ends")),U1.measure("".concat(n1," ").concat(c),"".concat(n1," ").concat(c," begins"),"".concat(n1," ").concat(c," ends"))},f2={begin:S4,end:C3},L1=function(){};function F2(a){var c=a.getAttribute?a.getAttribute(W):null;return typeof c=="string"}function k4(a){var c=a.getAttribute?a.getAttribute(Q1):null,e=a.getAttribute?a.getAttribute(a2):null;return c&&e}function A4(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(v.replacementClass)}function w4(){if(v.autoReplaceSvg===!0)return V1.replace;var a=V1[v.autoReplaceSvg];return a||V1.replace}function P4(a){return d.createElementNS("http://www.w3.org/2000/svg",a)}function O4(a){return d.createElement(a)}function b3(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=c.ceFn,n=e===void 0?a.tag==="svg"?P4:O4:e;if(typeof a=="string")return d.createTextNode(a);var i=n(a.tag);Object.keys(a.attributes||[]).forEach(function(t){i.setAttribute(t,a.attributes[t])});var r=a.children||[];return r.forEach(function(t){i.appendChild(b3(t,{ceFn:n}))}),i}function q4(a){var c=" ".concat(a.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var V1={replace:function(c){var e=c[0];if(e.parentNode)if(c[1].forEach(function(i){e.parentNode.insertBefore(b3(i),e)}),e.getAttribute(W)===null&&v.keepOriginalSource){var n=d.createComment(q4(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(c){var e=c[0],n=c[1];if(~e2(e).indexOf(v.replacementClass))return V1.replace(c);var i=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var r=n[0].attributes.class.split(" ").reduce(function(o,f){return f===v.replacementClass||f.match(i)?o.toSvg.push(f):o.toNode.push(f),o},{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}var t=n.map(function(o){return h1(o)}).join(`
`);e.setAttribute(W,""),e.innerHTML=t}};function D2(a){a()}function M3(a,c){var e=typeof c=="function"?c:L1;if(a.length===0)e();else{var n=D2;v.mutateApproach===F3&&(n=T.requestAnimationFrame||D2),n(function(){var i=w4(),r=f2.begin("mutate");a.map(i),r(),e()})}}var l2=!1;function g3(){l2=!0}function X1(){l2=!1}var S1=null;function R2(a){if(k2&&v.observeMutations){var c=a.treeCallback,e=c===void 0?L1:c,n=a.nodeCallback,i=n===void 0?L1:n,r=a.pseudoElementsCallback,t=r===void 0?L1:r,o=a.observeMutationsRoot,f=o===void 0?d:o;S1=new k2(function(m){if(!l2){var l=F();J(m).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!F2(h.addedNodes[0])&&(v.searchPseudoElements&&t(h.target),e(h.target)),h.type==="attributes"&&h.target.parentNode&&v.searchPseudoElements&&t(h.target.parentNode),h.type==="attributes"&&F2(h.target)&&~B3.indexOf(h.attributeName))if(h.attributeName==="class"&&k4(h.target)){var z=w1(e2(h.target)),u=z.prefix,g=z.iconName;h.target.setAttribute(Q1,u||l),g&&h.target.setAttribute(a2,g)}else A4(h.target)&&i(h.target)})}}),q&&S1.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function I4(){S1&&S1.disconnect()}function E4(a){var c=a.getAttribute("style"),e=[];return c&&(e=c.split(";").reduce(function(n,i){var r=i.split(":"),t=r[0],o=r.slice(1);return t&&o.length>0&&(n[t]=o.join(":").trim()),n},{})),e}function Z4(a){var c=a.getAttribute("data-prefix"),e=a.getAttribute("data-icon"),n=a.innerText!==void 0?a.innerText.trim():"",i=w1(e2(a));return i.prefix||(i.prefix=F()),c&&e&&(i.prefix=c,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&n.length>0&&(i.iconName=z4(i.prefix,a.innerText)||r2(i.prefix,_1(a.innerText))),!i.iconName&&v.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=a.firstChild.data)),i}function T4(a){var c=J(a.attributes).reduce(function(i,r){return i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i},{}),e=a.getAttribute("title"),n=a.getAttribute("data-fa-title-id");return v.autoA11y&&(e?c["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(n||s1()):(c["aria-hidden"]="true",c.focusable="false")),c}function F4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:A,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function j2(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Z4(a),n=e.iconName,i=e.prefix,r=e.rest,t=T4(a),o=W1("parseNodeAttributes",{},a),f=c.styleParser?E4(a):[];return s({iconName:n,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:i,transform:A,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:f,attributes:t}},o)}var D4=N.styles;function x3(a){var c=v.autoReplaceSvg==="nest"?j2(a,{styleParser:!1}):j2(a);return~c.extra.classes.indexOf(i3)?O("generateLayersText",a,c):O("generateSvgReplacementMutation",a,c)}var D=new Set;c2.map(function(a){D.add("fa-".concat(a))});Object.keys(t1[p]).map(D.add.bind(D));Object.keys(t1[C]).map(D.add.bind(D));D=m1(D);function _2(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q)return Promise.resolve();var e=d.documentElement.classList,n=function(h){return e.add("".concat(A2,"-").concat(h))},i=function(h){return e.remove("".concat(A2,"-").concat(h))},r=v.autoFetchSvg?D:c2.map(function(l){return"fa-".concat(l)}).concat(Object.keys(D4));r.includes("fa")||r.push("fa");var t=[".".concat(i3,":not([").concat(W,"])")].concat(r.map(function(l){return".".concat(l,":not([").concat(W,"])")})).join(", ");if(t.length===0)return Promise.resolve();var o=[];try{o=J(a.querySelectorAll(t))}catch{}if(o.length>0)n("pending"),i("complete");else return Promise.resolve();var f=f2.begin("onTree"),m=o.reduce(function(l,h){try{var z=x3(h);z&&l.push(z)}catch(u){n3||u.name==="MissingIcon"&&console.error(u)}return l},[]);return new Promise(function(l,h){Promise.all(m).then(function(z){M3(z,function(){n("active"),n("complete"),i("pending"),typeof c=="function"&&c(),f(),l()})}).catch(function(z){f(),h(z)})})}function R4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;x3(a).then(function(e){e&&M3([e],c)})}function j4(a){return function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(c||{}).icon?c:B1(c||{}),i=e.mask;return i&&(i=(i||{}).icon?i:B1(i||{})),a(n,s(s({},e),{},{mask:i}))}}var _4=function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,i=n===void 0?A:n,r=e.symbol,t=r===void 0?!1:r,o=e.mask,f=o===void 0?null:o,m=e.maskId,l=m===void 0?null:m,h=e.title,z=h===void 0?null:h,u=e.titleId,g=u===void 0?null:u,V=e.classes,y=V===void 0?[]:V,S=e.attributes,M=S===void 0?{}:S,x=e.styles,k=x===void 0?{}:x;if(c){var H=c.prefix,R=c.iconName,j=c.icon;return P1(s({type:"icon"},c),function(){return B("beforeDOMElementCreation",{iconDefinition:c,params:e}),v.autoA11y&&(z?M["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(g||s1()):(M["aria-hidden"]="true",M.focusable="false")),o2({icons:{main:Y1(j),mask:f?Y1(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:R,transform:s(s({},A),i),symbol:t,title:z,maskId:l,titleId:g,extra:{attributes:M,styles:k,classes:y}})})}},G4={mixout:function(){return{icon:j4(_4)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=_2,e.nodeCallback=R4,e}}},provides:function(c){c.i2svg=function(e){var n=e.node,i=n===void 0?d:n,r=e.callback,t=r===void 0?function(){}:r;return _2(i,t)},c.generateSvgReplacementMutation=function(e,n){var i=n.iconName,r=n.title,t=n.titleId,o=n.prefix,f=n.transform,m=n.symbol,l=n.mask,h=n.maskId,z=n.extra;return new Promise(function(u,g){Promise.all([$1(i,o),l.iconName?$1(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(V){var y=J1(V,2),S=y[0],M=y[1];u([e,o2({icons:{main:S,mask:M},prefix:o,iconName:i,transform:f,symbol:m,maskId:h,title:r,titleId:t,extra:z,watchable:!0})])}).catch(g)})},c.generateAbstractIcon=function(e){var n=e.children,i=e.attributes,r=e.main,t=e.transform,o=e.styles,f=k1(o);f.length>0&&(i.style=f);var m;return n2(t)&&(m=O("generateAbstractTransformGrouping",{main:r,transform:t,containerWidth:r.width,iconWidth:r.width})),n.push(m||r.icon),{children:n,attributes:i}}}},W4={mixout:function(){return{layer:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.classes,r=i===void 0?[]:i;return P1({type:"layer"},function(){B("beforeDOMElementCreation",{assembler:e,params:n});var t=[];return e(function(o){Array.isArray(o)?o.map(function(f){t=t.concat(f.abstract)}):t=t.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(m1(r)).join(" ")},children:t}]})}}}},B4={mixout:function(){return{counter:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.title,r=i===void 0?null:i,t=n.classes,o=t===void 0?[]:t,f=n.attributes,m=f===void 0?{}:f,l=n.styles,h=l===void 0?{}:l;return P1({type:"counter",content:e},function(){return B("beforeDOMElementCreation",{content:e,params:n}),V4({content:e.toString(),title:r,extra:{attributes:m,styles:h,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(m1(o))}})})}}}},Y4={mixout:function(){return{text:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?A:i,t=n.title,o=t===void 0?null:t,f=n.classes,m=f===void 0?[]:f,l=n.attributes,h=l===void 0?{}:l,z=n.styles,u=z===void 0?{}:z;return P1({type:"text",content:e},function(){return B("beforeDOMElementCreation",{content:e,params:n}),Z2({content:e,transform:s(s({},A),r),title:o,extra:{attributes:h,styles:u,classes:["".concat(v.cssPrefix,"-layers-text")].concat(m1(m))}})})}}},provides:function(c){c.generateLayersText=function(e,n){var i=n.title,r=n.transform,t=n.extra,o=null,f=null;if(a3){var m=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();o=l.width/m,f=l.height/m}return v.autoA11y&&!i&&(t.attributes["aria-hidden"]="true"),Promise.resolve([e,Z2({content:e.innerHTML,width:o,height:f,transform:r,title:i,extra:t,watchable:!0})])}}},$4=new RegExp('"',"ug"),G2=[1105920,1112319];function U4(a){var c=a.replace($4,""),e=f4(c,0),n=e>=G2[0]&&e<=G2[1],i=c.length===2?c[0]===c[1]:!1;return{value:_1(i?c[0]:c),isSecondary:n||i}}function W2(a,c){var e="".concat(T3).concat(c.replace(":","-"));return new Promise(function(n,i){if(a.getAttribute(e)!==null)return n();var r=J(a.children),t=r.filter(function(j){return j.getAttribute(j1)===c})[0],o=T.getComputedStyle(a,c),f=o.getPropertyValue("font-family").match(_3),m=o.getPropertyValue("font-weight"),l=o.getPropertyValue("content");if(t&&!f)return a.removeChild(t),n();if(f&&l!=="none"&&l!==""){var h=o.getPropertyValue("content"),z=~["Sharp"].indexOf(f[2])?C:p,u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?o1[z][f[2].toLowerCase()]:G3[z][m],g=U4(h),V=g.value,y=g.isSecondary,S=f[0].startsWith("FontAwesome"),M=r2(u,V),x=M;if(S){var k=u4(V);k.iconName&&k.prefix&&(M=k.iconName,u=k.prefix)}if(M&&!y&&(!t||t.getAttribute(Q1)!==u||t.getAttribute(a2)!==x)){a.setAttribute(e,x),t&&a.removeChild(t);var H=F4(),R=H.extra;R.attributes[j1]=c,$1(M,u).then(function(j){var O1=o2(s(s({},H),{},{icons:{main:j,mask:t2()},prefix:u,iconName:x,extra:R,watchable:!0})),I=d.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?a.insertBefore(I,a.firstChild):a.appendChild(I),I.outerHTML=O1.map(function(S3){return h1(S3)}).join(`
`),a.removeAttribute(e),n()}).catch(i)}else n()}else n()})}function X4(a){return Promise.all([W2(a,"::before"),W2(a,"::after")])}function J4(a){return a.parentNode!==document.head&&!~D3.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(j1)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function B2(a){if(q)return new Promise(function(c,e){var n=J(a.querySelectorAll("*")).filter(J4).map(X4),i=f2.begin("searchPseudoElements");g3(),Promise.all(n).then(function(){i(),X1(),c()}).catch(function(){i(),X1(),e()})})}var K4={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=B2,e}}},provides:function(c){c.pseudoElements2svg=function(e){var n=e.node,i=n===void 0?d:n;v.searchPseudoElements&&B2(i)}}},Y2=!1,Q4={mixout:function(){return{dom:{unwatch:function(){g3(),Y2=!0}}}},hooks:function(){return{bootstrap:function(){R2(W1("mutationObserverCallbacks",{}))},noAuto:function(){I4()},watch:function(e){var n=e.observeMutationsRoot;Y2?X1():R2(W1("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},$2=function(c){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(n,i){var r=i.toLowerCase().split("-"),t=r[0],o=r.slice(1).join("-");if(t&&o==="h")return n.flipX=!0,n;if(t&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(t){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)},a5={mixout:function(){return{parse:{transform:function(e){return $2(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,n){var i=n.getAttribute("data-fa-transform");return i&&(e.transform=$2(i)),e}}},provides:function(c){c.generateAbstractTransformGrouping=function(e){var n=e.main,i=e.transform,r=e.containerWidth,t=e.iconWidth,o={transform:"translate(".concat(r/2," 256)")},f="translate(".concat(i.x*32,", ").concat(i.y*32,") "),m="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),l="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(f," ").concat(m," ").concat(l)},z={transform:"translate(".concat(t/2*-1," -256)")},u={outer:o,inner:h,path:z};return{tag:"g",attributes:s({},u.outer),children:[{tag:"g",attributes:s({},u.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:s(s({},n.icon.attributes),u.path)}]}]}}}},F1={x:0,y:0,width:"100%",height:"100%"};function U2(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||c)&&(a.attributes.fill="black"),a}function c5(a){return a.tag==="g"?a.children:[a]}var e5={hooks:function(){return{parseNodeAttributes:function(e,n){var i=n.getAttribute("data-fa-mask"),r=i?w1(i.split(" ").map(function(t){return t.trim()})):t2();return r.prefix||(r.prefix=F()),e.mask=r,e.maskId=n.getAttribute("data-fa-mask-id"),e}}},provides:function(c){c.generateAbstractMask=function(e){var n=e.children,i=e.attributes,r=e.main,t=e.mask,o=e.maskId,f=e.transform,m=r.width,l=r.icon,h=t.width,z=t.icon,u=a4({transform:f,containerWidth:h,iconWidth:m}),g={tag:"rect",attributes:s(s({},F1),{},{fill:"white"})},V=l.children?{children:l.children.map(U2)}:{},y={tag:"g",attributes:s({},u.inner),children:[U2(s({tag:l.tag,attributes:s(s({},l.attributes),u.path)},V))]},S={tag:"g",attributes:s({},u.outer),children:[y]},M="mask-".concat(o||s1()),x="clip-".concat(o||s1()),k={tag:"mask",attributes:s(s({},F1),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,S]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:c5(z)},k]};return n.push(H,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(M,")")},F1)}),{children:n,attributes:i}}}},n5={provides:function(c){var e=!1;T.matchMedia&&(e=T.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var n=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:s(s({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var t=s(s({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:s(s({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:s(s({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:s(s({},t),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:s(s({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:s(s({},t),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:s(s({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:s(s({},t),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},i5={hooks:function(){return{parseNodeAttributes:function(e,n){var i=n.getAttribute("data-fa-symbol"),r=i===null?!1:i===""?!0:i;return e.symbol=r,e}}}},r5=[n4,G4,W4,B4,Y4,K4,Q4,a5,e5,n5,i5];C4(r5,{mixoutsTo:L});var g5=L.noAuto,x5=L.config,H5=L.library,L5=L.dom,H3=L.parse,V5=L.findIconDefinition,y5=L.toHtml,L3=L.icon,N5=L.layer,t5=L.text,o5=L.counter;var l5=["*"],s5=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},m5=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},v5=a=>{let c={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:a.rotate!==null,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(c).map(e=>c[e]?e:null).filter(e=>e)},h5=a=>a.prefix!==void 0&&a.iconName!==void 0,z5=(a,c)=>h5(a)?a:typeof a=="string"?{prefix:c,iconName:a}:{prefix:a[0],iconName:a[1]},u5=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};c.\u0275fac=function(i){return new(i||c)},c.\u0275prov=q1({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),p5=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...n){for(let i of n){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let r of i.icon[2])typeof r=="string"&&(this.definitions[i.prefix][r]=i)}}addIconPacks(...n){for(let i of n){let r=Object.keys(i).map(t=>i[t]);this.addIcons(...r)}}getIconDefinition(n,i){return n in this.definitions&&i in this.definitions[n]?this.definitions[n][i]:null}};c.\u0275fac=function(i){return new(i||c)},c.\u0275prov=q1({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),d5=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(n){if("size"in n)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(i){return new(i||c)},c.\u0275dir=v2({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[z1]});let a=c;return a})(),C5=(()=>{let c=class c{constructor(n,i){this.renderer=n,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(n){"size"in n&&(n.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${n.size.currentValue}`),n.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${n.size.previousValue}`))}};c.\u0275fac=function(i){return new(i||c)(E(u2),E(z2))},c.\u0275cmp=K({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[z1,e1],ngContentSelectors:l5,decls:1,vars:0,template:function(i,r){i&1&&(M2(),g2(0))},encapsulation:2});let a=c;return a})(),V3=(()=>{let c=class c{set spin(n){this.animation=n?"spin":void 0}set pulse(n){this.animation=n?"spin-pulse":void 0}constructor(n,i,r,t,o){this.sanitizer=n,this.config=i,this.iconLibrary=r,this.stackItem=t,this.classes=[],o!=null&&t==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(n){if(this.icon==null&&this.config.fallbackIcon==null){m5();return}if(n){let i=this.icon!=null?this.icon:this.config.fallbackIcon,r=this.findIconDefinition(i);if(r!=null){let t=this.buildParams();this.renderIcon(r,t)}}}render(){this.ngOnChanges({})}findIconDefinition(n){let i=z5(n,this.config.defaultPrefix);if("icon"in i)return i;let r=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return r??(s5(i),null)}buildParams(){let n={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?H3.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:[...v5(n),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(n,i){let r=L3(n,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))}};c.\u0275fac=function(i){return new(i||c)(E(x2),E(u5),E(p5),E(d5,8),E(C5,8))},c.\u0275cmp=K({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,r){i&2&&(b2("innerHTML",r.renderedIconHTML,h2),d2("title",r.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[z1,e1],decls:0,vars:0,template:function(i,r){},encapsulation:2});let a=c;return a})();var y3=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=m2({type:c}),c.\u0275inj=s2({});let a=c;return a})();var N3={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var T5=(()=>{let c=class c{constructor(){this.githubIcon=N3}};c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=K({type:c,selectors:[["app-about"]],standalone:!0,features:[e1],decls:13,vars:1,consts:[[1,"about-container"],[1,"about-item"],["href","https://github.com/wendellwcl","target","_blank"],[3,"icon"],["href","https://github.com/wendellwcl/TaskManager","target","_blank"],["src","assets/logo.svg"]],template:function(i,r){i&1&&(Q(0,"section",0)(1,"div",1)(2,"span"),c1(3,"Projeto criado por:"),a1(),Q(4,"a",2),I1(5,"fa-icon",3),c1(6," Wendellwcl "),a1()(),Q(7,"div",1)(8,"span"),c1(9,"Reposit\xF3rio do projeto:"),a1(),Q(10,"a",4),I1(11,"img",5),c1(12," TaskManager "),a1()()()),i&2&&(p2(5),C2("icon",r.githubIcon))},dependencies:[H2,y3,V3],styles:["[_nghost-%COMP%]   .about-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:var(--rem-lg)}[_nghost-%COMP%]   .about-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:var(--rem-sm)}[_nghost-%COMP%]   .about-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;gap:var(--rem-sm);color:var(--color-primary);font-size:1.6rem;font-weight:700}[_nghost-%COMP%]   .about-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .about-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:1em}"],changeDetection:0});let a=c;return a})();export{T5 as AboutComponent};
