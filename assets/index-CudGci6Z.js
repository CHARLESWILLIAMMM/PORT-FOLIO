var Lm=t=>{throw TypeError(t)};var qu=(t,e,n)=>e.has(t)||Lm("Cannot "+n);var ee=(t,e,n)=>(qu(t,e,"read from private field"),n?n.call(t):e.get(t)),ot=(t,e,n)=>e.has(t)?Lm("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Xe=(t,e,n,i)=>(qu(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),qt=(t,e,n)=>(qu(t,e,"access private method"),n);var wl=(t,e,n,i)=>({set _(r){Xe(t,e,r,n)},get _(){return ee(t,e,i)}});function n1(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Ax(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cx={exports:{}},pu={},Rx={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cl=Symbol.for("react.element"),i1=Symbol.for("react.portal"),r1=Symbol.for("react.fragment"),o1=Symbol.for("react.strict_mode"),s1=Symbol.for("react.profiler"),a1=Symbol.for("react.provider"),l1=Symbol.for("react.context"),c1=Symbol.for("react.forward_ref"),u1=Symbol.for("react.suspense"),d1=Symbol.for("react.memo"),f1=Symbol.for("react.lazy"),Dm=Symbol.iterator;function h1(t){return t===null||typeof t!="object"?null:(t=Dm&&t[Dm]||t["@@iterator"],typeof t=="function"?t:null)}var Px={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lx=Object.assign,Dx={};function Ys(t,e,n){this.props=t,this.context=e,this.refs=Dx,this.updater=n||Px}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Nx(){}Nx.prototype=Ys.prototype;function rp(t,e,n){this.props=t,this.context=e,this.refs=Dx,this.updater=n||Px}var op=rp.prototype=new Nx;op.constructor=rp;Lx(op,Ys.prototype);op.isPureReactComponent=!0;var Nm=Array.isArray,Ix=Object.prototype.hasOwnProperty,sp={current:null},Ux={key:!0,ref:!0,__self:!0,__source:!0};function Fx(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Ix.call(e,i)&&!Ux.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:cl,type:t,key:o,ref:s,props:r,_owner:sp.current}}function p1(t,e){return{$$typeof:cl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ap(t){return typeof t=="object"&&t!==null&&t.$$typeof===cl}function m1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Im=/\/+/g;function Ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?m1(""+t.key):e.toString(36)}function pc(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case cl:case i1:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Ku(s,0):i,Nm(r)?(n="",t!=null&&(n=t.replace(Im,"$&/")+"/"),pc(r,e,n,"",function(c){return c})):r!=null&&(ap(r)&&(r=p1(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Im,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Nm(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Ku(o,a);s+=pc(o,e,n,l,r)}else if(l=h1(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Ku(o,a++),s+=pc(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function bl(t,e,n){if(t==null)return t;var i=[],r=0;return pc(t,i,"","",function(o){return e.call(n,o,r++)}),i}function g1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},mc={transition:null},x1={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:mc,ReactCurrentOwner:sp};function Ox(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:bl,forEach:function(t,e,n){bl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return bl(t,function(){e++}),e},toArray:function(t){return bl(t,function(e){return e})||[]},only:function(t){if(!ap(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=Ys;Je.Fragment=r1;Je.Profiler=s1;Je.PureComponent=rp;Je.StrictMode=o1;Je.Suspense=u1;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x1;Je.act=Ox;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Lx({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=sp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ix.call(e,l)&&!Ux.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:cl,type:t.type,key:r,ref:o,props:i,_owner:s}};Je.createContext=function(t){return t={$$typeof:l1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:a1,_context:t},t.Consumer=t};Je.createElement=Fx;Je.createFactory=function(t){var e=Fx.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:c1,render:t}};Je.isValidElement=ap;Je.lazy=function(t){return{$$typeof:f1,_payload:{_status:-1,_result:t},_init:g1}};Je.memo=function(t,e){return{$$typeof:d1,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=mc.transition;mc.transition={};try{t()}finally{mc.transition=e}};Je.unstable_act=Ox;Je.useCallback=function(t,e){return dn.current.useCallback(t,e)};Je.useContext=function(t){return dn.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};Je.useEffect=function(t,e){return dn.current.useEffect(t,e)};Je.useId=function(){return dn.current.useId()};Je.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return dn.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};Je.useRef=function(t){return dn.current.useRef(t)};Je.useState=function(t){return dn.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return dn.current.useTransition()};Je.version="18.3.1";Rx.exports=Je;var D=Rx.exports;const ue=Ax(D),kx=n1({__proto__:null,default:ue},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v1=D,_1=Symbol.for("react.element"),y1=Symbol.for("react.fragment"),S1=Object.prototype.hasOwnProperty,E1=v1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M1={key:!0,ref:!0,__self:!0,__source:!0};function Bx(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)S1.call(e,i)&&!M1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:_1,type:t,key:o,ref:s,props:r,_owner:E1.current}}pu.Fragment=y1;pu.jsx=Bx;pu.jsxs=Bx;Cx.exports=pu;var j=Cx.exports,zx={exports:{}},kn={},Vx={exports:{}},Hx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,F){var W=R.length;R.push(F);e:for(;0<W;){var se=W-1>>>1,ce=R[se];if(0<r(ce,F))R[se]=F,R[W]=ce,W=se;else break e}}function n(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var F=R[0],W=R.pop();if(W!==F){R[0]=W;e:for(var se=0,ce=R.length,Ee=ce>>>1;se<Ee;){var be=2*(se+1)-1,ze=R[be],Z=be+1,q=R[Z];if(0>r(ze,W))Z<ce&&0>r(q,ze)?(R[se]=q,R[Z]=W,se=Z):(R[se]=ze,R[be]=W,se=be);else if(Z<ce&&0>r(q,W))R[se]=q,R[Z]=W,se=Z;else break e}}return F}function r(R,F){var W=R.sortIndex-F.sortIndex;return W!==0?W:R.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,v=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(R){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=R)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function y(R){if(g=!1,_(R),!v)if(n(l)!==null)v=!0,H(b);else{var F=n(c);F!==null&&Y(y,F.startTime-R)}}function b(R,F){v=!1,g&&(g=!1,f(L),L=-1),p=!0;var W=h;try{for(_(F),d=n(l);d!==null&&(!(d.expirationTime>F)||R&&!P());){var se=d.callback;if(typeof se=="function"){d.callback=null,h=d.priorityLevel;var ce=se(d.expirationTime<=F);F=t.unstable_now(),typeof ce=="function"?d.callback=ce:d===n(l)&&i(l),_(F)}else i(l);d=n(l)}if(d!==null)var Ee=!0;else{var be=n(c);be!==null&&Y(y,be.startTime-F),Ee=!1}return Ee}finally{d=null,h=W,p=!1}}var E=!1,A=null,L=-1,w=5,S=-1;function P(){return!(t.unstable_now()-S<w)}function U(){if(A!==null){var R=t.unstable_now();S=R;var F=!0;try{F=A(!0,R)}finally{F?z():(E=!1,A=null)}}else E=!1}var z;if(typeof x=="function")z=function(){x(U)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,G=O.port2;O.port1.onmessage=U,z=function(){G.postMessage(null)}}else z=function(){m(U,0)};function H(R){A=R,E||(E=!0,z())}function Y(R,F){L=m(function(){R(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,H(b))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var W=h;h=F;try{return R()}finally{h=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,F){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var W=h;h=R;try{return F()}finally{h=W}},t.unstable_scheduleCallback=function(R,F,W){var se=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?se+W:se):W=se,R){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=W+ce,R={id:u++,callback:F,priorityLevel:R,startTime:W,expirationTime:ce,sortIndex:-1},W>se?(R.sortIndex=W,e(c,R),n(l)===null&&R===n(c)&&(g?(f(L),L=-1):g=!0,Y(y,W-se))):(R.sortIndex=ce,e(l,R),v||p||(v=!0,H(b))),R},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(R){var F=h;return function(){var W=h;h=F;try{return R.apply(this,arguments)}finally{h=W}}}})(Hx);Vx.exports=Hx;var w1=Vx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b1=D,On=w1;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gx=new Set,Ua={};function Oo(t,e){Is(t,e),Is(t+"Capture",e)}function Is(t,e){for(Ua[t]=e,t=0;t<e.length;t++)Gx.add(e[t])}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sf=Object.prototype.hasOwnProperty,T1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Um={},Fm={};function A1(t){return sf.call(Fm,t)?!0:sf.call(Um,t)?!1:T1.test(t)?Fm[t]=!0:(Um[t]=!0,!1)}function C1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R1(t,e,n,i){if(e===null||typeof e>"u"||C1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Yt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Yt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Yt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Yt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Yt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Yt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Yt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Yt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Yt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var lp=/[\-:]([a-z])/g;function cp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lp,cp);Yt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lp,cp);Yt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lp,cp);Yt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Yt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});Yt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Yt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function up(t,e,n,i){var r=Yt.hasOwnProperty(e)?Yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(R1(e,n,r,i)&&(n=null),i||r===null?A1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ur=b1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tl=Symbol.for("react.element"),is=Symbol.for("react.portal"),rs=Symbol.for("react.fragment"),dp=Symbol.for("react.strict_mode"),af=Symbol.for("react.profiler"),Wx=Symbol.for("react.provider"),Xx=Symbol.for("react.context"),fp=Symbol.for("react.forward_ref"),lf=Symbol.for("react.suspense"),cf=Symbol.for("react.suspense_list"),hp=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),jx=Symbol.for("react.offscreen"),Om=Symbol.iterator;function ra(t){return t===null||typeof t!="object"?null:(t=Om&&t[Om]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Object.assign,Qu;function ya(t){if(Qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qu=e&&e[1]||""}return`
`+Qu+t}var Zu=!1;function Ju(t,e){if(!t||Zu)return"";Zu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Zu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ya(t):""}function P1(t){switch(t.tag){case 5:return ya(t.type);case 16:return ya("Lazy");case 13:return ya("Suspense");case 19:return ya("SuspenseList");case 0:case 2:case 15:return t=Ju(t.type,!1),t;case 11:return t=Ju(t.type.render,!1),t;case 1:return t=Ju(t.type,!0),t;default:return""}}function uf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rs:return"Fragment";case is:return"Portal";case af:return"Profiler";case dp:return"StrictMode";case lf:return"Suspense";case cf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xx:return(t.displayName||"Context")+".Consumer";case Wx:return(t._context.displayName||"Context")+".Provider";case fp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hp:return e=t.displayName||null,e!==null?e:uf(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return uf(t(e))}catch{}}return null}function L1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uf(e);case 8:return e===dp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $x(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function D1(t){var e=$x(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Al(t){t._valueTracker||(t._valueTracker=D1(t))}function Yx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=$x(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ic(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function df(t,e){var n=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function km(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qx(t,e){e=e.checked,e!=null&&up(t,"checked",e,!1)}function ff(t,e){qx(t,e);var n=Wr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hf(t,e.type,n):e.hasOwnProperty("defaultValue")&&hf(t,e.type,Wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hf(t,e,n){(e!=="number"||Ic(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Sa=Array.isArray;function ms(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Wr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function pf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(Sa(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wr(n)}}function Kx(t,e){var n=Wr(e.value),i=Wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Cl,Zx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Cl=Cl||document.createElement("div"),Cl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Cl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},N1=["Webkit","ms","Moz","O"];Object.keys(ba).forEach(function(t){N1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ba[e]=ba[t]})});function Jx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ba.hasOwnProperty(t)&&ba[t]?(""+e).trim():e+"px"}function ev(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Jx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var I1=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gf(t,e){if(e){if(I1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function xf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vf=null;function pp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _f=null,gs=null,xs=null;function Hm(t){if(t=fl(t)){if(typeof _f!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=_u(e),_f(t.stateNode,t.type,e))}}function tv(t){gs?xs?xs.push(t):xs=[t]:gs=t}function nv(){if(gs){var t=gs,e=xs;if(xs=gs=null,Hm(t),e)for(t=0;t<e.length;t++)Hm(e[t])}}function iv(t,e){return t(e)}function rv(){}var ed=!1;function ov(t,e,n){if(ed)return t(e,n);ed=!0;try{return iv(t,e,n)}finally{ed=!1,(gs!==null||xs!==null)&&(rv(),nv())}}function Oa(t,e){var n=t.stateNode;if(n===null)return null;var i=_u(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var yf=!1;if(tr)try{var oa={};Object.defineProperty(oa,"passive",{get:function(){yf=!0}}),window.addEventListener("test",oa,oa),window.removeEventListener("test",oa,oa)}catch{yf=!1}function U1(t,e,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ta=!1,Uc=null,Fc=!1,Sf=null,F1={onError:function(t){Ta=!0,Uc=t}};function O1(t,e,n,i,r,o,s,a,l){Ta=!1,Uc=null,U1.apply(F1,arguments)}function k1(t,e,n,i,r,o,s,a,l){if(O1.apply(this,arguments),Ta){if(Ta){var c=Uc;Ta=!1,Uc=null}else throw Error(ae(198));Fc||(Fc=!0,Sf=c)}}function ko(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gm(t){if(ko(t)!==t)throw Error(ae(188))}function B1(t){var e=t.alternate;if(!e){if(e=ko(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Gm(r),t;if(o===i)return Gm(r),e;o=o.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function av(t){return t=B1(t),t!==null?lv(t):null}function lv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lv(t);if(e!==null)return e;t=t.sibling}return null}var cv=On.unstable_scheduleCallback,Wm=On.unstable_cancelCallback,z1=On.unstable_shouldYield,V1=On.unstable_requestPaint,Lt=On.unstable_now,H1=On.unstable_getCurrentPriorityLevel,mp=On.unstable_ImmediatePriority,uv=On.unstable_UserBlockingPriority,Oc=On.unstable_NormalPriority,G1=On.unstable_LowPriority,dv=On.unstable_IdlePriority,mu=null,Ai=null;function W1(t){if(Ai&&typeof Ai.onCommitFiberRoot=="function")try{Ai.onCommitFiberRoot(mu,t,void 0,(t.current.flags&128)===128)}catch{}}var fi=Math.clz32?Math.clz32:$1,X1=Math.log,j1=Math.LN2;function $1(t){return t>>>=0,t===0?32:31-(X1(t)/j1|0)|0}var Rl=64,Pl=4194304;function Ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Ea(a):(o&=s,o!==0&&(i=Ea(o)))}else s=n&~r,s!==0?i=Ea(s):o!==0&&(i=Ea(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-fi(e),r=1<<n,i|=t[n],e&=~r;return i}function Y1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-fi(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=Y1(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Ef(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fv(){var t=Rl;return Rl<<=1,!(Rl&4194240)&&(Rl=64),t}function td(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ul(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fi(e),t[e]=n}function K1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-fi(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function gp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-fi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function hv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pv,xp,mv,gv,xv,Mf=!1,Ll=[],Ur=null,Fr=null,Or=null,ka=new Map,Ba=new Map,Mr=[],Q1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xm(t,e){switch(t){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ba.delete(e.pointerId)}}function sa(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=fl(e),e!==null&&xp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Z1(t,e,n,i,r){switch(e){case"focusin":return Ur=sa(Ur,t,e,n,i,r),!0;case"dragenter":return Fr=sa(Fr,t,e,n,i,r),!0;case"mouseover":return Or=sa(Or,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return ka.set(o,sa(ka.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Ba.set(o,sa(Ba.get(o)||null,t,e,n,i,r)),!0}return!1}function vv(t){var e=go(t.target);if(e!==null){var n=ko(e);if(n!==null){if(e=n.tag,e===13){if(e=sv(n),e!==null){t.blockedOn=e,xv(t.priority,function(){mv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);vf=i,n.target.dispatchEvent(i),vf=null}else return e=fl(n),e!==null&&xp(e),t.blockedOn=n,!1;e.shift()}return!0}function jm(t,e,n){gc(t)&&n.delete(e)}function J1(){Mf=!1,Ur!==null&&gc(Ur)&&(Ur=null),Fr!==null&&gc(Fr)&&(Fr=null),Or!==null&&gc(Or)&&(Or=null),ka.forEach(jm),Ba.forEach(jm)}function aa(t,e){t.blockedOn===e&&(t.blockedOn=null,Mf||(Mf=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,J1)))}function za(t){function e(r){return aa(r,t)}if(0<Ll.length){aa(Ll[0],t);for(var n=1;n<Ll.length;n++){var i=Ll[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ur!==null&&aa(Ur,t),Fr!==null&&aa(Fr,t),Or!==null&&aa(Or,t),ka.forEach(e),Ba.forEach(e),n=0;n<Mr.length;n++)i=Mr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Mr.length&&(n=Mr[0],n.blockedOn===null);)vv(n),n.blockedOn===null&&Mr.shift()}var vs=ur.ReactCurrentBatchConfig,Bc=!0;function eE(t,e,n,i){var r=lt,o=vs.transition;vs.transition=null;try{lt=1,vp(t,e,n,i)}finally{lt=r,vs.transition=o}}function tE(t,e,n,i){var r=lt,o=vs.transition;vs.transition=null;try{lt=4,vp(t,e,n,i)}finally{lt=r,vs.transition=o}}function vp(t,e,n,i){if(Bc){var r=wf(t,e,n,i);if(r===null)dd(t,e,i,zc,n),Xm(t,i);else if(Z1(r,t,e,n,i))i.stopPropagation();else if(Xm(t,i),e&4&&-1<Q1.indexOf(t)){for(;r!==null;){var o=fl(r);if(o!==null&&pv(o),o=wf(t,e,n,i),o===null&&dd(t,e,i,zc,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else dd(t,e,i,null,n)}}var zc=null;function wf(t,e,n,i){if(zc=null,t=pp(i),t=go(t),t!==null)if(e=ko(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zc=t,null}function _v(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H1()){case mp:return 1;case uv:return 4;case Oc:case G1:return 16;case dv:return 536870912;default:return 16}default:return 16}}var Lr=null,_p=null,xc=null;function yv(){if(xc)return xc;var t,e=_p,n=e.length,i,r="value"in Lr?Lr.value:Lr.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return xc=r.slice(t,1<i?1-i:void 0)}function vc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Dl(){return!0}function $m(){return!1}function Bn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Dl:$m,this.isPropagationStopped=$m,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),e}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yp=Bn(qs),dl=bt({},qs,{view:0,detail:0}),nE=Bn(dl),nd,id,la,gu=bt({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==la&&(la&&t.type==="mousemove"?(nd=t.screenX-la.screenX,id=t.screenY-la.screenY):id=nd=0,la=t),nd)},movementY:function(t){return"movementY"in t?t.movementY:id}}),Ym=Bn(gu),iE=bt({},gu,{dataTransfer:0}),rE=Bn(iE),oE=bt({},dl,{relatedTarget:0}),rd=Bn(oE),sE=bt({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),aE=Bn(sE),lE=bt({},qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cE=Bn(lE),uE=bt({},qs,{data:0}),qm=Bn(uE),dE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hE[t])?!!e[t]:!1}function Sp(){return pE}var mE=bt({},dl,{key:function(t){if(t.key){var e=dE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sp,charCode:function(t){return t.type==="keypress"?vc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gE=Bn(mE),xE=bt({},gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=Bn(xE),vE=bt({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sp}),_E=Bn(vE),yE=bt({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),SE=Bn(yE),EE=bt({},gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ME=Bn(EE),wE=[9,13,27,32],Ep=tr&&"CompositionEvent"in window,Aa=null;tr&&"documentMode"in document&&(Aa=document.documentMode);var bE=tr&&"TextEvent"in window&&!Aa,Sv=tr&&(!Ep||Aa&&8<Aa&&11>=Aa),Qm=" ",Zm=!1;function Ev(t,e){switch(t){case"keyup":return wE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function TE(t,e){switch(t){case"compositionend":return Mv(e);case"keypress":return e.which!==32?null:(Zm=!0,Qm);case"textInput":return t=e.data,t===Qm&&Zm?null:t;default:return null}}function AE(t,e){if(os)return t==="compositionend"||!Ep&&Ev(t,e)?(t=yv(),xc=_p=Lr=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sv&&e.locale!=="ko"?null:e.data;default:return null}}var CE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!CE[t.type]:e==="textarea"}function wv(t,e,n,i){tv(i),e=Vc(e,"onChange"),0<e.length&&(n=new yp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ca=null,Va=null;function RE(t){Uv(t,0)}function xu(t){var e=ls(t);if(Yx(e))return t}function PE(t,e){if(t==="change")return e}var bv=!1;if(tr){var od;if(tr){var sd="oninput"in document;if(!sd){var e0=document.createElement("div");e0.setAttribute("oninput","return;"),sd=typeof e0.oninput=="function"}od=sd}else od=!1;bv=od&&(!document.documentMode||9<document.documentMode)}function t0(){Ca&&(Ca.detachEvent("onpropertychange",Tv),Va=Ca=null)}function Tv(t){if(t.propertyName==="value"&&xu(Va)){var e=[];wv(e,Va,t,pp(t)),ov(RE,e)}}function LE(t,e,n){t==="focusin"?(t0(),Ca=e,Va=n,Ca.attachEvent("onpropertychange",Tv)):t==="focusout"&&t0()}function DE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xu(Va)}function NE(t,e){if(t==="click")return xu(e)}function IE(t,e){if(t==="input"||t==="change")return xu(e)}function UE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pi=typeof Object.is=="function"?Object.is:UE;function Ha(t,e){if(pi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!sf.call(e,r)||!pi(t[r],e[r]))return!1}return!0}function n0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function i0(t,e){var n=n0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=n0(n)}}function Av(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Av(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cv(){for(var t=window,e=Ic();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ic(t.document)}return e}function Mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function FE(t){var e=Cv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Av(n.ownerDocument.documentElement,n)){if(i!==null&&Mp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=i0(n,o);var s=i0(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var OE=tr&&"documentMode"in document&&11>=document.documentMode,ss=null,bf=null,Ra=null,Tf=!1;function r0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tf||ss==null||ss!==Ic(i)||(i=ss,"selectionStart"in i&&Mp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ra&&Ha(Ra,i)||(Ra=i,i=Vc(bf,"onSelect"),0<i.length&&(e=new yp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ss)))}function Nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var as={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionend:Nl("Transition","TransitionEnd")},ad={},Rv={};tr&&(Rv=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function vu(t){if(ad[t])return ad[t];if(!as[t])return t;var e=as[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rv)return ad[t]=e[n];return t}var Pv=vu("animationend"),Lv=vu("animationiteration"),Dv=vu("animationstart"),Nv=vu("transitionend"),Iv=new Map,o0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(t,e){Iv.set(t,e),Oo(e,[t])}for(var ld=0;ld<o0.length;ld++){var cd=o0[ld],kE=cd.toLowerCase(),BE=cd[0].toUpperCase()+cd.slice(1);Qr(kE,"on"+BE)}Qr(Pv,"onAnimationEnd");Qr(Lv,"onAnimationIteration");Qr(Dv,"onAnimationStart");Qr("dblclick","onDoubleClick");Qr("focusin","onFocus");Qr("focusout","onBlur");Qr(Nv,"onTransitionEnd");Is("onMouseEnter",["mouseout","mouseover"]);Is("onMouseLeave",["mouseout","mouseover"]);Is("onPointerEnter",["pointerout","pointerover"]);Is("onPointerLeave",["pointerout","pointerover"]);Oo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Oo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Oo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Oo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Oo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Oo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function s0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,k1(i,e,void 0,t),t.currentTarget=null}function Uv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;s0(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;s0(r,a,c),o=l}}}if(Fc)throw t=Sf,Fc=!1,Sf=null,t}function xt(t,e){var n=e[Lf];n===void 0&&(n=e[Lf]=new Set);var i=t+"__bubble";n.has(i)||(Fv(e,t,2,!1),n.add(i))}function ud(t,e,n){var i=0;e&&(i|=4),Fv(n,t,i,e)}var Il="_reactListening"+Math.random().toString(36).slice(2);function Ga(t){if(!t[Il]){t[Il]=!0,Gx.forEach(function(n){n!=="selectionchange"&&(zE.has(n)||ud(n,!1,t),ud(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Il]||(e[Il]=!0,ud("selectionchange",!1,e))}}function Fv(t,e,n,i){switch(_v(e)){case 1:var r=eE;break;case 4:r=tE;break;default:r=vp}n=r.bind(null,e,n,t),r=void 0,!yf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function dd(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=go(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}ov(function(){var c=o,u=pp(n),d=[];e:{var h=Iv.get(t);if(h!==void 0){var p=yp,v=t;switch(t){case"keypress":if(vc(n)===0)break e;case"keydown":case"keyup":p=gE;break;case"focusin":v="focus",p=rd;break;case"focusout":v="blur",p=rd;break;case"beforeblur":case"afterblur":p=rd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=rE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=_E;break;case Pv:case Lv:case Dv:p=aE;break;case Nv:p=SE;break;case"scroll":p=nE;break;case"wheel":p=ME;break;case"copy":case"cut":case"paste":p=cE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Km}var g=(e&4)!==0,m=!g&&t==="scroll",f=g?h!==null?h+"Capture":null:h;g=[];for(var x=c,_;x!==null;){_=x;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,f!==null&&(y=Oa(x,f),y!=null&&g.push(Wa(x,y,_)))),m)break;x=x.return}0<g.length&&(h=new p(h,v,null,n,u),d.push({event:h,listeners:g}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==vf&&(v=n.relatedTarget||n.fromElement)&&(go(v)||v[nr]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?go(v):null,v!==null&&(m=ko(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(g=Ym,y="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(g=Km,y="onPointerLeave",f="onPointerEnter",x="pointer"),m=p==null?h:ls(p),_=v==null?h:ls(v),h=new g(y,x+"leave",p,n,u),h.target=m,h.relatedTarget=_,y=null,go(u)===c&&(g=new g(f,x+"enter",v,n,u),g.target=_,g.relatedTarget=m,y=g),m=y,p&&v)t:{for(g=p,f=v,x=0,_=g;_;_=Ho(_))x++;for(_=0,y=f;y;y=Ho(y))_++;for(;0<x-_;)g=Ho(g),x--;for(;0<_-x;)f=Ho(f),_--;for(;x--;){if(g===f||f!==null&&g===f.alternate)break t;g=Ho(g),f=Ho(f)}g=null}else g=null;p!==null&&a0(d,h,p,g,!1),v!==null&&m!==null&&a0(d,m,v,g,!0)}}e:{if(h=c?ls(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var b=PE;else if(Jm(h))if(bv)b=IE;else{b=DE;var E=LE}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=NE);if(b&&(b=b(t,c))){wv(d,b,n,u);break e}E&&E(t,h,c),t==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&hf(h,"number",h.value)}switch(E=c?ls(c):window,t){case"focusin":(Jm(E)||E.contentEditable==="true")&&(ss=E,bf=c,Ra=null);break;case"focusout":Ra=bf=ss=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,r0(d,n,u);break;case"selectionchange":if(OE)break;case"keydown":case"keyup":r0(d,n,u)}var A;if(Ep)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else os?Ev(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Sv&&n.locale!=="ko"&&(os||L!=="onCompositionStart"?L==="onCompositionEnd"&&os&&(A=yv()):(Lr=u,_p="value"in Lr?Lr.value:Lr.textContent,os=!0)),E=Vc(c,L),0<E.length&&(L=new qm(L,t,null,n,u),d.push({event:L,listeners:E}),A?L.data=A:(A=Mv(n),A!==null&&(L.data=A)))),(A=bE?TE(t,n):AE(t,n))&&(c=Vc(c,"onBeforeInput"),0<c.length&&(u=new qm("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=A))}Uv(d,e)})}function Wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Oa(t,n),o!=null&&i.unshift(Wa(t,o,r)),o=Oa(t,e),o!=null&&i.push(Wa(t,o,r))),t=t.return}return i}function Ho(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function a0(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Oa(n,o),l!=null&&s.unshift(Wa(n,l,a))):r||(l=Oa(n,o),l!=null&&s.push(Wa(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var VE=/\r\n?/g,HE=/\u0000|\uFFFD/g;function l0(t){return(typeof t=="string"?t:""+t).replace(VE,`
`).replace(HE,"")}function Ul(t,e,n){if(e=l0(e),l0(t)!==e&&n)throw Error(ae(425))}function Hc(){}var Af=null,Cf=null;function Rf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pf=typeof setTimeout=="function"?setTimeout:void 0,GE=typeof clearTimeout=="function"?clearTimeout:void 0,c0=typeof Promise=="function"?Promise:void 0,WE=typeof queueMicrotask=="function"?queueMicrotask:typeof c0<"u"?function(t){return c0.resolve(null).then(t).catch(XE)}:Pf;function XE(t){setTimeout(function(){throw t})}function fd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),za(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);za(e)}function kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function u0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),wi="__reactFiber$"+Ks,Xa="__reactProps$"+Ks,nr="__reactContainer$"+Ks,Lf="__reactEvents$"+Ks,jE="__reactListeners$"+Ks,$E="__reactHandles$"+Ks;function go(t){var e=t[wi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nr]||n[wi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=u0(t);t!==null;){if(n=t[wi])return n;t=u0(t)}return e}t=n,n=t.parentNode}return null}function fl(t){return t=t[wi]||t[nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function _u(t){return t[Xa]||null}var Df=[],cs=-1;function Zr(t){return{current:t}}function vt(t){0>cs||(t.current=Df[cs],Df[cs]=null,cs--)}function mt(t,e){cs++,Df[cs]=t.current,t.current=e}var Xr={},nn=Zr(Xr),yn=Zr(!1),Ro=Xr;function Us(t,e){var n=t.type.contextTypes;if(!n)return Xr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function Gc(){vt(yn),vt(nn)}function d0(t,e,n){if(nn.current!==Xr)throw Error(ae(168));mt(nn,e),mt(yn,n)}function Ov(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,L1(t)||"Unknown",r));return bt({},n,i)}function Wc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xr,Ro=nn.current,mt(nn,t),mt(yn,yn.current),!0}function f0(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=Ov(t,e,Ro),i.__reactInternalMemoizedMergedChildContext=t,vt(yn),vt(nn),mt(nn,t)):vt(yn),mt(yn,n)}var Xi=null,yu=!1,hd=!1;function kv(t){Xi===null?Xi=[t]:Xi.push(t)}function YE(t){yu=!0,kv(t)}function Jr(){if(!hd&&Xi!==null){hd=!0;var t=0,e=lt;try{var n=Xi;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Xi=null,yu=!1}catch(r){throw Xi!==null&&(Xi=Xi.slice(t+1)),cv(mp,Jr),r}finally{lt=e,hd=!1}}return null}var us=[],ds=0,Xc=null,jc=0,Wn=[],Xn=0,Po=null,Yi=1,qi="";function uo(t,e){us[ds++]=jc,us[ds++]=Xc,Xc=t,jc=e}function Bv(t,e,n){Wn[Xn++]=Yi,Wn[Xn++]=qi,Wn[Xn++]=Po,Po=t;var i=Yi;t=qi;var r=32-fi(i)-1;i&=~(1<<r),n+=1;var o=32-fi(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Yi=1<<32-fi(e)+r|n<<r|i,qi=o+t}else Yi=1<<o|n<<r|i,qi=t}function wp(t){t.return!==null&&(uo(t,1),Bv(t,1,0))}function bp(t){for(;t===Xc;)Xc=us[--ds],us[ds]=null,jc=us[--ds],us[ds]=null;for(;t===Po;)Po=Wn[--Xn],Wn[Xn]=null,qi=Wn[--Xn],Wn[Xn]=null,Yi=Wn[--Xn],Wn[Xn]=null}var Nn=null,Dn=null,yt=!1,li=null;function zv(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function h0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nn=t,Dn=kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nn=t,Dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Po!==null?{id:Yi,overflow:qi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nn=t,Dn=null,!0):!1;default:return!1}}function Nf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function If(t){if(yt){var e=Dn;if(e){var n=e;if(!h0(t,e)){if(Nf(t))throw Error(ae(418));e=kr(n.nextSibling);var i=Nn;e&&h0(t,e)?zv(i,n):(t.flags=t.flags&-4097|2,yt=!1,Nn=t)}}else{if(Nf(t))throw Error(ae(418));t.flags=t.flags&-4097|2,yt=!1,Nn=t}}}function p0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function Fl(t){if(t!==Nn)return!1;if(!yt)return p0(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rf(t.type,t.memoizedProps)),e&&(e=Dn)){if(Nf(t))throw Vv(),Error(ae(418));for(;e;)zv(t,e),e=kr(e.nextSibling)}if(p0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dn=kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dn=null}}else Dn=Nn?kr(t.stateNode.nextSibling):null;return!0}function Vv(){for(var t=Dn;t;)t=kr(t.nextSibling)}function Fs(){Dn=Nn=null,yt=!1}function Tp(t){li===null?li=[t]:li.push(t)}var qE=ur.ReactCurrentBatchConfig;function ca(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function Ol(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function m0(t){var e=t._init;return e(t._payload)}function Hv(t){function e(f,x){if(t){var _=f.deletions;_===null?(f.deletions=[x],f.flags|=16):_.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function r(f,x){return f=Hr(f,x),f.index=0,f.sibling=null,f}function o(f,x,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<x?(f.flags|=2,x):_):(f.flags|=2,x)):(f.flags|=1048576,x)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,x,_,y){return x===null||x.tag!==6?(x=yd(_,f.mode,y),x.return=f,x):(x=r(x,_),x.return=f,x)}function l(f,x,_,y){var b=_.type;return b===rs?u(f,x,_.props.children,y,_.key):x!==null&&(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Sr&&m0(b)===x.type)?(y=r(x,_.props),y.ref=ca(f,x,_),y.return=f,y):(y=bc(_.type,_.key,_.props,null,f.mode,y),y.ref=ca(f,x,_),y.return=f,y)}function c(f,x,_,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=Sd(_,f.mode,y),x.return=f,x):(x=r(x,_.children||[]),x.return=f,x)}function u(f,x,_,y,b){return x===null||x.tag!==7?(x=Ao(_,f.mode,y,b),x.return=f,x):(x=r(x,_),x.return=f,x)}function d(f,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return x=yd(""+x,f.mode,_),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Tl:return _=bc(x.type,x.key,x.props,null,f.mode,_),_.ref=ca(f,null,x),_.return=f,_;case is:return x=Sd(x,f.mode,_),x.return=f,x;case Sr:var y=x._init;return d(f,y(x._payload),_)}if(Sa(x)||ra(x))return x=Ao(x,f.mode,_,null),x.return=f,x;Ol(f,x)}return null}function h(f,x,_,y){var b=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:a(f,x,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Tl:return _.key===b?l(f,x,_,y):null;case is:return _.key===b?c(f,x,_,y):null;case Sr:return b=_._init,h(f,x,b(_._payload),y)}if(Sa(_)||ra(_))return b!==null?null:u(f,x,_,y,null);Ol(f,_)}return null}function p(f,x,_,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(_)||null,a(x,f,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Tl:return f=f.get(y.key===null?_:y.key)||null,l(x,f,y,b);case is:return f=f.get(y.key===null?_:y.key)||null,c(x,f,y,b);case Sr:var E=y._init;return p(f,x,_,E(y._payload),b)}if(Sa(y)||ra(y))return f=f.get(_)||null,u(x,f,y,b,null);Ol(x,y)}return null}function v(f,x,_,y){for(var b=null,E=null,A=x,L=x=0,w=null;A!==null&&L<_.length;L++){A.index>L?(w=A,A=null):w=A.sibling;var S=h(f,A,_[L],y);if(S===null){A===null&&(A=w);break}t&&A&&S.alternate===null&&e(f,A),x=o(S,x,L),E===null?b=S:E.sibling=S,E=S,A=w}if(L===_.length)return n(f,A),yt&&uo(f,L),b;if(A===null){for(;L<_.length;L++)A=d(f,_[L],y),A!==null&&(x=o(A,x,L),E===null?b=A:E.sibling=A,E=A);return yt&&uo(f,L),b}for(A=i(f,A);L<_.length;L++)w=p(A,f,L,_[L],y),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?L:w.key),x=o(w,x,L),E===null?b=w:E.sibling=w,E=w);return t&&A.forEach(function(P){return e(f,P)}),yt&&uo(f,L),b}function g(f,x,_,y){var b=ra(_);if(typeof b!="function")throw Error(ae(150));if(_=b.call(_),_==null)throw Error(ae(151));for(var E=b=null,A=x,L=x=0,w=null,S=_.next();A!==null&&!S.done;L++,S=_.next()){A.index>L?(w=A,A=null):w=A.sibling;var P=h(f,A,S.value,y);if(P===null){A===null&&(A=w);break}t&&A&&P.alternate===null&&e(f,A),x=o(P,x,L),E===null?b=P:E.sibling=P,E=P,A=w}if(S.done)return n(f,A),yt&&uo(f,L),b;if(A===null){for(;!S.done;L++,S=_.next())S=d(f,S.value,y),S!==null&&(x=o(S,x,L),E===null?b=S:E.sibling=S,E=S);return yt&&uo(f,L),b}for(A=i(f,A);!S.done;L++,S=_.next())S=p(A,f,L,S.value,y),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?L:S.key),x=o(S,x,L),E===null?b=S:E.sibling=S,E=S);return t&&A.forEach(function(U){return e(f,U)}),yt&&uo(f,L),b}function m(f,x,_,y){if(typeof _=="object"&&_!==null&&_.type===rs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Tl:e:{for(var b=_.key,E=x;E!==null;){if(E.key===b){if(b=_.type,b===rs){if(E.tag===7){n(f,E.sibling),x=r(E,_.props.children),x.return=f,f=x;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Sr&&m0(b)===E.type){n(f,E.sibling),x=r(E,_.props),x.ref=ca(f,E,_),x.return=f,f=x;break e}n(f,E);break}else e(f,E);E=E.sibling}_.type===rs?(x=Ao(_.props.children,f.mode,y,_.key),x.return=f,f=x):(y=bc(_.type,_.key,_.props,null,f.mode,y),y.ref=ca(f,x,_),y.return=f,f=y)}return s(f);case is:e:{for(E=_.key;x!==null;){if(x.key===E)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){n(f,x.sibling),x=r(x,_.children||[]),x.return=f,f=x;break e}else{n(f,x);break}else e(f,x);x=x.sibling}x=Sd(_,f.mode,y),x.return=f,f=x}return s(f);case Sr:return E=_._init,m(f,x,E(_._payload),y)}if(Sa(_))return v(f,x,_,y);if(ra(_))return g(f,x,_,y);Ol(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,x!==null&&x.tag===6?(n(f,x.sibling),x=r(x,_),x.return=f,f=x):(n(f,x),x=yd(_,f.mode,y),x.return=f,f=x),s(f)):n(f,x)}return m}var Os=Hv(!0),Gv=Hv(!1),$c=Zr(null),Yc=null,fs=null,Ap=null;function Cp(){Ap=fs=Yc=null}function Rp(t){var e=$c.current;vt($c),t._currentValue=e}function Uf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function _s(t,e){Yc=t,Ap=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_n=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(Ap!==t)if(t={context:t,memoizedValue:e,next:null},fs===null){if(Yc===null)throw Error(ae(308));fs=t,Yc.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return e}var xo=null;function Pp(t){xo===null?xo=[t]:xo.push(t)}function Wv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Pp(e)):(n.next=r.next,r.next=n),e.interleaved=n,ir(t,i)}function ir(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Er=!1;function Lp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Br(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ir(t,n)}return r=i.interleaved,r===null?(e.next=e,Pp(i)):(e.next=r.next,r.next=e),i.interleaved=e,ir(t,n)}function _c(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gp(t,n)}}function g0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qc(t,e,n,i){var r=t.updateQueue;Er=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,u=c=l=null,a=o;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,g=a;switch(h=e,p=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=bt({},d,h);break e;case 2:Er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Do|=s,t.lanes=s,t.memoizedState=d}}function x0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var hl={},Ci=Zr(hl),ja=Zr(hl),$a=Zr(hl);function vo(t){if(t===hl)throw Error(ae(174));return t}function Dp(t,e){switch(mt($a,e),mt(ja,t),mt(Ci,hl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mf(e,t)}vt(Ci),mt(Ci,e)}function ks(){vt(Ci),vt(ja),vt($a)}function jv(t){vo($a.current);var e=vo(Ci.current),n=mf(e,t.type);e!==n&&(mt(ja,t),mt(Ci,n))}function Np(t){ja.current===t&&(vt(Ci),vt(ja))}var Mt=Zr(0);function Kc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pd=[];function Ip(){for(var t=0;t<pd.length;t++)pd[t]._workInProgressVersionPrimary=null;pd.length=0}var yc=ur.ReactCurrentDispatcher,md=ur.ReactCurrentBatchConfig,Lo=0,wt=null,Ot=null,Wt=null,Qc=!1,Pa=!1,Ya=0,KE=0;function Kt(){throw Error(ae(321))}function Up(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pi(t[n],e[n]))return!1;return!0}function Fp(t,e,n,i,r,o){if(Lo=o,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yc.current=t===null||t.memoizedState===null?eM:tM,t=n(i,r),Pa){o=0;do{if(Pa=!1,Ya=0,25<=o)throw Error(ae(301));o+=1,Wt=Ot=null,e.updateQueue=null,yc.current=nM,t=n(i,r)}while(Pa)}if(yc.current=Zc,e=Ot!==null&&Ot.next!==null,Lo=0,Wt=Ot=wt=null,Qc=!1,e)throw Error(ae(300));return t}function Op(){var t=Ya!==0;return Ya=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?wt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Kn(){if(Ot===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Wt===null?wt.memoizedState:Wt.next;if(e!==null)Wt=e,Ot=t;else{if(t===null)throw Error(ae(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Wt===null?wt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function qa(t,e){return typeof e=="function"?e(t):e}function gd(t){var e=Kn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((Lo&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,wt.lanes|=u,Do|=u}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,pi(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,wt.lanes|=o,Do|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xd(t){var e=Kn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);pi(o,e.memoizedState)||(_n=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function $v(){}function Yv(t,e){var n=wt,i=Kn(),r=e(),o=!pi(i.memoizedState,r);if(o&&(i.memoizedState=r,_n=!0),i=i.queue,kp(Qv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,Ka(9,Kv.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(ae(349));Lo&30||qv(n,e,r)}return r}function qv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kv(t,e,n,i){e.value=n,e.getSnapshot=i,Zv(e)&&Jv(t)}function Qv(t,e,n){return n(function(){Zv(e)&&Jv(t)})}function Zv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pi(t,n)}catch{return!0}}function Jv(t){var e=ir(t,1);e!==null&&hi(e,t,1,-1)}function v0(t){var e=_i();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:t},e.queue=t,t=t.dispatch=JE.bind(null,wt,t),[e.memoizedState,t]}function Ka(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function e_(){return Kn().memoizedState}function Sc(t,e,n,i){var r=_i();wt.flags|=t,r.memoizedState=Ka(1|e,n,void 0,i===void 0?null:i)}function Su(t,e,n,i){var r=Kn();i=i===void 0?null:i;var o=void 0;if(Ot!==null){var s=Ot.memoizedState;if(o=s.destroy,i!==null&&Up(i,s.deps)){r.memoizedState=Ka(e,n,o,i);return}}wt.flags|=t,r.memoizedState=Ka(1|e,n,o,i)}function _0(t,e){return Sc(8390656,8,t,e)}function kp(t,e){return Su(2048,8,t,e)}function t_(t,e){return Su(4,2,t,e)}function n_(t,e){return Su(4,4,t,e)}function i_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function r_(t,e,n){return n=n!=null?n.concat([t]):null,Su(4,4,i_.bind(null,e,t),n)}function Bp(){}function o_(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Up(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function s_(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Up(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function a_(t,e,n){return Lo&21?(pi(n,e)||(n=fv(),wt.lanes|=n,Do|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=n)}function QE(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=md.transition;md.transition={};try{t(!1),e()}finally{lt=n,md.transition=i}}function l_(){return Kn().memoizedState}function ZE(t,e,n){var i=Vr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},c_(t))u_(e,n);else if(n=Wv(t,e,n,i),n!==null){var r=cn();hi(n,t,i,r),d_(n,e,i)}}function JE(t,e,n){var i=Vr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(c_(t))u_(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,pi(a,s)){var l=e.interleaved;l===null?(r.next=r,Pp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Wv(t,e,r,i),n!==null&&(r=cn(),hi(n,t,i,r),d_(n,e,i))}}function c_(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function u_(t,e){Pa=Qc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function d_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gp(t,n)}}var Zc={readContext:qn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},eM={readContext:qn,useCallback:function(t,e){return _i().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:_0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sc(4194308,4,i_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sc(4,2,t,e)},useMemo:function(t,e){var n=_i();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=_i();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ZE.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=_i();return t={current:t},e.memoizedState=t},useState:v0,useDebugValue:Bp,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=v0(!1),e=t[0];return t=QE.bind(null,t[1]),_i().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=wt,r=_i();if(yt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Xt===null)throw Error(ae(349));Lo&30||qv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,_0(Qv.bind(null,i,o,t),[t]),i.flags|=2048,Ka(9,Kv.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=_i(),e=Xt.identifierPrefix;if(yt){var n=qi,i=Yi;n=(i&~(1<<32-fi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ya++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=KE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tM={readContext:qn,useCallback:o_,useContext:qn,useEffect:kp,useImperativeHandle:r_,useInsertionEffect:t_,useLayoutEffect:n_,useMemo:s_,useReducer:gd,useRef:e_,useState:function(){return gd(qa)},useDebugValue:Bp,useDeferredValue:function(t){var e=Kn();return a_(e,Ot.memoizedState,t)},useTransition:function(){var t=gd(qa)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:$v,useSyncExternalStore:Yv,useId:l_,unstable_isNewReconciler:!1},nM={readContext:qn,useCallback:o_,useContext:qn,useEffect:kp,useImperativeHandle:r_,useInsertionEffect:t_,useLayoutEffect:n_,useMemo:s_,useReducer:xd,useRef:e_,useState:function(){return xd(qa)},useDebugValue:Bp,useDeferredValue:function(t){var e=Kn();return Ot===null?e.memoizedState=t:a_(e,Ot.memoizedState,t)},useTransition:function(){var t=xd(qa)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:$v,useSyncExternalStore:Yv,useId:l_,unstable_isNewReconciler:!1};function ii(t,e){if(t&&t.defaultProps){e=bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ff(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Eu={isMounted:function(t){return(t=t._reactInternals)?ko(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=Vr(t),o=Zi(i,r);o.payload=e,n!=null&&(o.callback=n),e=Br(t,o,r),e!==null&&(hi(e,t,r,i),_c(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=Vr(t),o=Zi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Br(t,o,r),e!==null&&(hi(e,t,r,i),_c(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=Vr(t),r=Zi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Br(t,r,i),e!==null&&(hi(e,t,i,n),_c(e,t,i))}};function y0(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ha(n,i)||!Ha(r,o):!0}function f_(t,e,n){var i=!1,r=Xr,o=e.contextType;return typeof o=="object"&&o!==null?o=qn(o):(r=Sn(e)?Ro:nn.current,i=e.contextTypes,o=(i=i!=null)?Us(t,r):Xr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Eu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function S0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Eu.enqueueReplaceState(e,e.state,null)}function Of(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Lp(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=qn(o):(o=Sn(e)?Ro:nn.current,r.context=Us(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Ff(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Eu.enqueueReplaceState(r,r.state,null),qc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e){try{var n="",i=e;do n+=P1(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function vd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function kf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iM=typeof WeakMap=="function"?WeakMap:Map;function h_(t,e,n){n=Zi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){eu||(eu=!0,Yf=i),kf(t,e)},n}function p_(t,e,n){n=Zi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){kf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){kf(t,e),typeof i!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function E0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new iM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=xM.bind(null,t,e,n),e.then(t,t))}function M0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function w0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zi(-1,1),e.tag=2,Br(n,e,1))),n.lanes|=1),t)}var rM=ur.ReactCurrentOwner,_n=!1;function an(t,e,n,i){e.child=t===null?Gv(e,null,n,i):Os(e,t.child,n,i)}function b0(t,e,n,i,r){n=n.render;var o=e.ref;return _s(e,r),i=Fp(t,e,n,i,o,r),n=Op(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,rr(t,e,r)):(yt&&n&&wp(e),e.flags|=1,an(t,e,i,r),e.child)}function T0(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!$p(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,m_(t,e,o,i,r)):(t=bc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ha,n(s,i)&&t.ref===e.ref)return rr(t,e,r)}return e.flags|=1,t=Hr(o,i),t.ref=e.ref,t.return=e,e.child=t}function m_(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Ha(o,i)&&t.ref===e.ref)if(_n=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(_n=!0);else return e.lanes=t.lanes,rr(t,e,r)}return Bf(t,e,n,i,r)}function g_(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(ps,Pn),Pn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,mt(ps,Pn),Pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,mt(ps,Pn),Pn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,mt(ps,Pn),Pn|=i;return an(t,e,r,n),e.child}function x_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bf(t,e,n,i,r){var o=Sn(n)?Ro:nn.current;return o=Us(e,o),_s(e,r),n=Fp(t,e,n,i,o,r),i=Op(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,rr(t,e,r)):(yt&&i&&wp(e),e.flags|=1,an(t,e,n,r),e.child)}function A0(t,e,n,i,r){if(Sn(n)){var o=!0;Wc(e)}else o=!1;if(_s(e,r),e.stateNode===null)Ec(t,e),f_(e,n,i),Of(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=qn(c):(c=Sn(n)?Ro:nn.current,c=Us(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&S0(e,s,i,c),Er=!1;var h=e.memoizedState;s.state=h,qc(e,i,s,r),l=e.memoizedState,a!==i||h!==l||yn.current||Er?(typeof u=="function"&&(Ff(e,n,u,i),l=e.memoizedState),(a=Er||y0(e,n,a,i,h,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,Xv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ii(e.type,a),s.props=c,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=Sn(n)?Ro:nn.current,l=Us(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&S0(e,s,i,l),Er=!1,h=e.memoizedState,s.state=h,qc(e,i,s,r);var v=e.memoizedState;a!==d||h!==v||yn.current||Er?(typeof p=="function"&&(Ff(e,n,p,i),v=e.memoizedState),(c=Er||y0(e,n,c,i,h,v,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),s.props=i,s.state=v,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return zf(t,e,n,i,o,r)}function zf(t,e,n,i,r,o){x_(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&f0(e,n,!1),rr(t,e,o);i=e.stateNode,rM.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Os(e,t.child,null,o),e.child=Os(e,null,a,o)):an(t,e,a,o),e.memoizedState=i.state,r&&f0(e,n,!0),e.child}function v_(t){var e=t.stateNode;e.pendingContext?d0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&d0(t,e.context,!1),Dp(t,e.containerInfo)}function C0(t,e,n,i,r){return Fs(),Tp(r),e.flags|=256,an(t,e,n,i),e.child}var Vf={dehydrated:null,treeContext:null,retryLane:0};function Hf(t){return{baseLanes:t,cachePool:null,transitions:null}}function __(t,e,n){var i=e.pendingProps,r=Mt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),mt(Mt,r&1),t===null)return If(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=bu(s,i,0,null),t=Ao(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Hf(n),e.memoizedState=Vf,t):zp(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return oM(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Hr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Hr(a,o):(o=Ao(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Hf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Vf,i}return o=t.child,t=o.sibling,i=Hr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function zp(t,e){return e=bu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function kl(t,e,n,i){return i!==null&&Tp(i),Os(e,t.child,null,n),t=zp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oM(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=vd(Error(ae(422))),kl(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=bu({mode:"visible",children:i.children},r,0,null),o=Ao(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Os(e,t.child,null,s),e.child.memoizedState=Hf(s),e.memoizedState=Vf,o);if(!(e.mode&1))return kl(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ae(419)),i=vd(o,i,void 0),kl(t,e,s,i)}if(a=(s&t.childLanes)!==0,_n||a){if(i=Xt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,ir(t,r),hi(i,t,r,-1))}return jp(),i=vd(Error(ae(421))),kl(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=vM.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Dn=kr(r.nextSibling),Nn=e,yt=!0,li=null,t!==null&&(Wn[Xn++]=Yi,Wn[Xn++]=qi,Wn[Xn++]=Po,Yi=t.id,qi=t.overflow,Po=e),e=zp(e,i.children),e.flags|=4096,e)}function R0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Uf(t.return,e,n)}function _d(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function y_(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(an(t,e,i.children,n),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&R0(t,n,e);else if(t.tag===19)R0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(mt(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Kc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),_d(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Kc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}_d(e,!0,n,null,o);break;case"together":_d(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ec(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Do|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sM(t,e,n){switch(e.tag){case 3:v_(e),Fs();break;case 5:jv(e);break;case 1:Sn(e.type)&&Wc(e);break;case 4:Dp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;mt($c,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(mt(Mt,Mt.current&1),e.flags|=128,null):n&e.child.childLanes?__(t,e,n):(mt(Mt,Mt.current&1),t=rr(t,e,n),t!==null?t.sibling:null);mt(Mt,Mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return y_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),mt(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,g_(t,e,n)}return rr(t,e,n)}var S_,Gf,E_,M_;S_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gf=function(){};E_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,vo(Ci.current);var o=null;switch(n){case"input":r=df(t,r),i=df(t,i),o=[];break;case"select":r=bt({},r,{value:void 0}),i=bt({},i,{value:void 0}),o=[];break;case"textarea":r=pf(t,r),i=pf(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Hc)}gf(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ua.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ua.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&xt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};M_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ua(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function aM(t,e,n){var i=e.pendingProps;switch(bp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return Sn(e.type)&&Gc(),Qt(e),null;case 3:return i=e.stateNode,ks(),vt(yn),vt(nn),Ip(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Fl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,li!==null&&(Qf(li),li=null))),Gf(t,e),Qt(e),null;case 5:Np(e);var r=vo($a.current);if(n=e.type,t!==null&&e.stateNode!=null)E_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Qt(e),null}if(t=vo(Ci.current),Fl(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[wi]=e,i[Xa]=o,t=(e.mode&1)!==0,n){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(r=0;r<Ma.length;r++)xt(Ma[r],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":km(i,o),xt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},xt("invalid",i);break;case"textarea":zm(i,o),xt("invalid",i)}gf(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ul(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ul(i.textContent,a,t),r=["children",""+a]):Ua.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&xt("scroll",i)}switch(n){case"input":Al(i),Bm(i,o,!0);break;case"textarea":Al(i),Vm(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Hc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[wi]=e,t[Xa]=i,S_(t,e,!1,!1),e.stateNode=t;e:{switch(s=xf(n,i),n){case"dialog":xt("cancel",t),xt("close",t),r=i;break;case"iframe":case"object":case"embed":xt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ma.length;r++)xt(Ma[r],t);r=i;break;case"source":xt("error",t),r=i;break;case"img":case"image":case"link":xt("error",t),xt("load",t),r=i;break;case"details":xt("toggle",t),r=i;break;case"input":km(t,i),r=df(t,i),xt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=bt({},i,{value:void 0}),xt("invalid",t);break;case"textarea":zm(t,i),r=pf(t,i),xt("invalid",t);break;default:r=i}gf(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?ev(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zx(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fa(t,l):typeof l=="number"&&Fa(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ua.hasOwnProperty(o)?l!=null&&o==="onScroll"&&xt("scroll",t):l!=null&&up(t,o,l,s))}switch(n){case"input":Al(t),Bm(t,i,!1);break;case"textarea":Al(t),Vm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Wr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?ms(t,!!i.multiple,o,!1):i.defaultValue!=null&&ms(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Hc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)M_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=vo($a.current),vo(Ci.current),Fl(e)){if(i=e.stateNode,n=e.memoizedProps,i[wi]=e,(o=i.nodeValue!==n)&&(t=Nn,t!==null))switch(t.tag){case 3:Ul(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ul(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[wi]=e,e.stateNode=i}return Qt(e),null;case 13:if(vt(Mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&Dn!==null&&e.mode&1&&!(e.flags&128))Vv(),Fs(),e.flags|=98560,o=!1;else if(o=Fl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ae(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ae(317));o[wi]=e}else Fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),o=!1}else li!==null&&(Qf(li),li=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Mt.current&1?Bt===0&&(Bt=3):jp())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return ks(),Gf(t,e),t===null&&Ga(e.stateNode.containerInfo),Qt(e),null;case 10:return Rp(e.type._context),Qt(e),null;case 17:return Sn(e.type)&&Gc(),Qt(e),null;case 19:if(vt(Mt),o=e.memoizedState,o===null)return Qt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)ua(o,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Kc(t),s!==null){for(e.flags|=128,ua(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return mt(Mt,Mt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Lt()>zs&&(e.flags|=128,i=!0,ua(o,!1),e.lanes=4194304)}else{if(!i)if(t=Kc(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ua(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!yt)return Qt(e),null}else 2*Lt()-o.renderingStartTime>zs&&n!==1073741824&&(e.flags|=128,i=!0,ua(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Lt(),e.sibling=null,n=Mt.current,mt(Mt,i?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return Xp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function lM(t,e){switch(bp(e),e.tag){case 1:return Sn(e.type)&&Gc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ks(),vt(yn),vt(nn),Ip(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Np(e),null;case 13:if(vt(Mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(Mt),null;case 4:return ks(),null;case 10:return Rp(e.type._context),null;case 22:case 23:return Xp(),null;case 24:return null;default:return null}}var Bl=!1,tn=!1,cM=typeof WeakSet=="function"?WeakSet:Set,Me=null;function hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Pt(t,e,i)}else n.current=null}function Wf(t,e,n){try{n()}catch(i){Pt(t,e,i)}}var P0=!1;function uM(t,e){if(Af=Bc,t=Cv(),Mp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=s),h===o&&++u===i&&(l=s),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cf={focusedElem:t,selectionRange:n},Bc=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,m=v.memoizedState,f=e.stateNode,x=f.getSnapshotBeforeUpdate(e.elementType===e.type?g:ii(e.type,g),m);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(y){Pt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return v=P0,P0=!1,v}function La(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Wf(e,n,o)}r=r.next}while(r!==i)}}function Mu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Xf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function w_(t){var e=t.alternate;e!==null&&(t.alternate=null,w_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wi],delete e[Xa],delete e[Lf],delete e[jE],delete e[$E])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function b_(t){return t.tag===5||t.tag===3||t.tag===4}function L0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||b_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hc));else if(i!==4&&(t=t.child,t!==null))for(jf(t,e,n),t=t.sibling;t!==null;)jf(t,e,n),t=t.sibling}function $f(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for($f(t,e,n),t=t.sibling;t!==null;)$f(t,e,n),t=t.sibling}var jt=null,ai=!1;function dr(t,e,n){for(n=n.child;n!==null;)T_(t,e,n),n=n.sibling}function T_(t,e,n){if(Ai&&typeof Ai.onCommitFiberUnmount=="function")try{Ai.onCommitFiberUnmount(mu,n)}catch{}switch(n.tag){case 5:tn||hs(n,e);case 6:var i=jt,r=ai;jt=null,dr(t,e,n),jt=i,ai=r,jt!==null&&(ai?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(ai?(t=jt,n=n.stateNode,t.nodeType===8?fd(t.parentNode,n):t.nodeType===1&&fd(t,n),za(t)):fd(jt,n.stateNode));break;case 4:i=jt,r=ai,jt=n.stateNode.containerInfo,ai=!0,dr(t,e,n),jt=i,ai=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Wf(n,e,s),r=r.next}while(r!==i)}dr(t,e,n);break;case 1:if(!tn&&(hs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Pt(n,e,a)}dr(t,e,n);break;case 21:dr(t,e,n);break;case 22:n.mode&1?(tn=(i=tn)||n.memoizedState!==null,dr(t,e,n),tn=i):dr(t,e,n);break;default:dr(t,e,n)}}function D0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cM),e.forEach(function(i){var r=_M.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,ai=!1;break e;case 3:jt=a.stateNode.containerInfo,ai=!0;break e;case 4:jt=a.stateNode.containerInfo,ai=!0;break e}a=a.return}if(jt===null)throw Error(ae(160));T_(o,s,r),jt=null,ai=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)A_(e,t),e=e.sibling}function A_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),vi(t),i&4){try{La(3,t,t.return),Mu(3,t)}catch(g){Pt(t,t.return,g)}try{La(5,t,t.return)}catch(g){Pt(t,t.return,g)}}break;case 1:Zn(e,t),vi(t),i&512&&n!==null&&hs(n,n.return);break;case 5:if(Zn(e,t),vi(t),i&512&&n!==null&&hs(n,n.return),t.flags&32){var r=t.stateNode;try{Fa(r,"")}catch(g){Pt(t,t.return,g)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&qx(r,o),xf(a,s);var c=xf(a,o);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?ev(r,d):u==="dangerouslySetInnerHTML"?Zx(r,d):u==="children"?Fa(r,d):up(r,u,d,c)}switch(a){case"input":ff(r,o);break;case"textarea":Kx(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?ms(r,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?ms(r,!!o.multiple,o.defaultValue,!0):ms(r,!!o.multiple,o.multiple?[]:"",!1))}r[Xa]=o}catch(g){Pt(t,t.return,g)}}break;case 6:if(Zn(e,t),vi(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(g){Pt(t,t.return,g)}}break;case 3:if(Zn(e,t),vi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{za(e.containerInfo)}catch(g){Pt(t,t.return,g)}break;case 4:Zn(e,t),vi(t);break;case 13:Zn(e,t),vi(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Gp=Lt())),i&4&&D0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(c=tn)||u,Zn(e,t),tn=c):Zn(e,t),vi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Me=t,u=t.child;u!==null;){for(d=Me=u;Me!==null;){switch(h=Me,p=h.child,h.tag){case 0:case 11:case 14:case 15:La(4,h,h.return);break;case 1:hs(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(g){Pt(i,n,g)}}break;case 5:hs(h,h.return);break;case 22:if(h.memoizedState!==null){I0(d);continue}}p!==null?(p.return=h,Me=p):I0(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Jx("display",s))}catch(g){Pt(t,t.return,g)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(g){Pt(t,t.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Zn(e,t),vi(t),i&4&&D0(t);break;case 21:break;default:Zn(e,t),vi(t)}}function vi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(b_(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Fa(r,""),i.flags&=-33);var o=L0(t);$f(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=L0(t);jf(t,a,s);break;default:throw Error(ae(161))}}catch(l){Pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dM(t,e,n){Me=t,C_(t)}function C_(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Bl;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||tn;a=Bl;var c=tn;if(Bl=s,(tn=l)&&!c)for(Me=r;Me!==null;)s=Me,l=s.child,s.tag===22&&s.memoizedState!==null?U0(r):l!==null?(l.return=s,Me=l):U0(r);for(;o!==null;)Me=o,C_(o),o=o.sibling;Me=r,Bl=a,tn=c}N0(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Me=o):N0(t)}}function N0(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||Mu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ii(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&x0(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}x0(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&za(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}tn||e.flags&512&&Xf(e)}catch(h){Pt(e,e.return,h)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function I0(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function U0(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mu(4,e)}catch(l){Pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Pt(e,r,l)}}var o=e.return;try{Xf(e)}catch(l){Pt(e,o,l)}break;case 5:var s=e.return;try{Xf(e)}catch(l){Pt(e,s,l)}}}catch(l){Pt(e,e.return,l)}if(e===t){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var fM=Math.ceil,Jc=ur.ReactCurrentDispatcher,Vp=ur.ReactCurrentOwner,Yn=ur.ReactCurrentBatchConfig,nt=0,Xt=null,Ft=null,$t=0,Pn=0,ps=Zr(0),Bt=0,Qa=null,Do=0,wu=0,Hp=0,Da=null,vn=null,Gp=0,zs=1/0,Wi=null,eu=!1,Yf=null,zr=null,zl=!1,Dr=null,tu=0,Na=0,qf=null,Mc=-1,wc=0;function cn(){return nt&6?Lt():Mc!==-1?Mc:Mc=Lt()}function Vr(t){return t.mode&1?nt&2&&$t!==0?$t&-$t:qE.transition!==null?(wc===0&&(wc=fv()),wc):(t=lt,t!==0||(t=window.event,t=t===void 0?16:_v(t.type)),t):1}function hi(t,e,n,i){if(50<Na)throw Na=0,qf=null,Error(ae(185));ul(t,n,i),(!(nt&2)||t!==Xt)&&(t===Xt&&(!(nt&2)&&(wu|=n),Bt===4&&wr(t,$t)),En(t,i),n===1&&nt===0&&!(e.mode&1)&&(zs=Lt()+500,yu&&Jr()))}function En(t,e){var n=t.callbackNode;q1(t,e);var i=kc(t,t===Xt?$t:0);if(i===0)n!==null&&Wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Wm(n),e===1)t.tag===0?YE(F0.bind(null,t)):kv(F0.bind(null,t)),WE(function(){!(nt&6)&&Jr()}),n=null;else{switch(hv(i)){case 1:n=mp;break;case 4:n=uv;break;case 16:n=Oc;break;case 536870912:n=dv;break;default:n=Oc}n=F_(n,R_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function R_(t,e){if(Mc=-1,wc=0,nt&6)throw Error(ae(327));var n=t.callbackNode;if(ys()&&t.callbackNode!==n)return null;var i=kc(t,t===Xt?$t:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=nu(t,i);else{e=i;var r=nt;nt|=2;var o=L_();(Xt!==t||$t!==e)&&(Wi=null,zs=Lt()+500,To(t,e));do try{mM();break}catch(a){P_(t,a)}while(!0);Cp(),Jc.current=o,nt=r,Ft!==null?e=0:(Xt=null,$t=0,e=Bt)}if(e!==0){if(e===2&&(r=Ef(t),r!==0&&(i=r,e=Kf(t,r))),e===1)throw n=Qa,To(t,0),wr(t,i),En(t,Lt()),n;if(e===6)wr(t,i);else{if(r=t.current.alternate,!(i&30)&&!hM(r)&&(e=nu(t,i),e===2&&(o=Ef(t),o!==0&&(i=o,e=Kf(t,o))),e===1))throw n=Qa,To(t,0),wr(t,i),En(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:fo(t,vn,Wi);break;case 3:if(wr(t,i),(i&130023424)===i&&(e=Gp+500-Lt(),10<e)){if(kc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Pf(fo.bind(null,t,vn,Wi),e);break}fo(t,vn,Wi);break;case 4:if(wr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-fi(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*fM(i/1960))-i,10<i){t.timeoutHandle=Pf(fo.bind(null,t,vn,Wi),i);break}fo(t,vn,Wi);break;case 5:fo(t,vn,Wi);break;default:throw Error(ae(329))}}}return En(t,Lt()),t.callbackNode===n?R_.bind(null,t):null}function Kf(t,e){var n=Da;return t.current.memoizedState.isDehydrated&&(To(t,e).flags|=256),t=nu(t,e),t!==2&&(e=vn,vn=n,e!==null&&Qf(e)),t}function Qf(t){vn===null?vn=t:vn.push.apply(vn,t)}function hM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!pi(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wr(t,e){for(e&=~Hp,e&=~wu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fi(e),i=1<<n;t[n]=-1,e&=~i}}function F0(t){if(nt&6)throw Error(ae(327));ys();var e=kc(t,0);if(!(e&1))return En(t,Lt()),null;var n=nu(t,e);if(t.tag!==0&&n===2){var i=Ef(t);i!==0&&(e=i,n=Kf(t,i))}if(n===1)throw n=Qa,To(t,0),wr(t,e),En(t,Lt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fo(t,vn,Wi),En(t,Lt()),null}function Wp(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(zs=Lt()+500,yu&&Jr())}}function No(t){Dr!==null&&Dr.tag===0&&!(nt&6)&&ys();var e=nt;nt|=1;var n=Yn.transition,i=lt;try{if(Yn.transition=null,lt=1,t)return t()}finally{lt=i,Yn.transition=n,nt=e,!(nt&6)&&Jr()}}function Xp(){Pn=ps.current,vt(ps)}function To(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,GE(n)),Ft!==null)for(n=Ft.return;n!==null;){var i=n;switch(bp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Gc();break;case 3:ks(),vt(yn),vt(nn),Ip();break;case 5:Np(i);break;case 4:ks();break;case 13:vt(Mt);break;case 19:vt(Mt);break;case 10:Rp(i.type._context);break;case 22:case 23:Xp()}n=n.return}if(Xt=t,Ft=t=Hr(t.current,null),$t=Pn=e,Bt=0,Qa=null,Hp=wu=Do=0,vn=Da=null,xo!==null){for(e=0;e<xo.length;e++)if(n=xo[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}xo=null}return t}function P_(t,e){do{var n=Ft;try{if(Cp(),yc.current=Zc,Qc){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Qc=!1}if(Lo=0,Wt=Ot=wt=null,Pa=!1,Ya=0,Vp.current=null,n===null||n.return===null){Bt=1,Qa=e,Ft=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=$t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=M0(s);if(p!==null){p.flags&=-257,w0(p,s,a,o,e),p.mode&1&&E0(o,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var g=new Set;g.add(l),e.updateQueue=g}else v.add(l);break e}else{if(!(e&1)){E0(o,c,e),jp();break e}l=Error(ae(426))}}else if(yt&&a.mode&1){var m=M0(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),w0(m,s,a,o,e),Tp(Bs(l,a));break e}}o=l=Bs(l,a),Bt!==4&&(Bt=2),Da===null?Da=[o]:Da.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=h_(o,l,e);g0(o,f);break e;case 1:a=l;var x=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(zr===null||!zr.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=p_(o,a,e);g0(o,y);break e}}o=o.return}while(o!==null)}N_(n)}catch(b){e=b,Ft===n&&n!==null&&(Ft=n=n.return);continue}break}while(!0)}function L_(){var t=Jc.current;return Jc.current=Zc,t===null?Zc:t}function jp(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Xt===null||!(Do&268435455)&&!(wu&268435455)||wr(Xt,$t)}function nu(t,e){var n=nt;nt|=2;var i=L_();(Xt!==t||$t!==e)&&(Wi=null,To(t,e));do try{pM();break}catch(r){P_(t,r)}while(!0);if(Cp(),nt=n,Jc.current=i,Ft!==null)throw Error(ae(261));return Xt=null,$t=0,Bt}function pM(){for(;Ft!==null;)D_(Ft)}function mM(){for(;Ft!==null&&!z1();)D_(Ft)}function D_(t){var e=U_(t.alternate,t,Pn);t.memoizedProps=t.pendingProps,e===null?N_(t):Ft=e,Vp.current=null}function N_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lM(n,e),n!==null){n.flags&=32767,Ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Ft=null;return}}else if(n=aM(n,e,Pn),n!==null){Ft=n;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);Bt===0&&(Bt=5)}function fo(t,e,n){var i=lt,r=Yn.transition;try{Yn.transition=null,lt=1,gM(t,e,n,i)}finally{Yn.transition=r,lt=i}return null}function gM(t,e,n,i){do ys();while(Dr!==null);if(nt&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(K1(t,o),t===Xt&&(Ft=Xt=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zl||(zl=!0,F_(Oc,function(){return ys(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Yn.transition,Yn.transition=null;var s=lt;lt=1;var a=nt;nt|=4,Vp.current=null,uM(t,n),A_(n,t),FE(Cf),Bc=!!Af,Cf=Af=null,t.current=n,dM(n),V1(),nt=a,lt=s,Yn.transition=o}else t.current=n;if(zl&&(zl=!1,Dr=t,tu=r),o=t.pendingLanes,o===0&&(zr=null),W1(n.stateNode),En(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(eu)throw eu=!1,t=Yf,Yf=null,t;return tu&1&&t.tag!==0&&ys(),o=t.pendingLanes,o&1?t===qf?Na++:(Na=0,qf=t):Na=0,Jr(),null}function ys(){if(Dr!==null){var t=hv(tu),e=Yn.transition,n=lt;try{if(Yn.transition=null,lt=16>t?16:t,Dr===null)var i=!1;else{if(t=Dr,Dr=null,tu=0,nt&6)throw Error(ae(331));var r=nt;for(nt|=4,Me=t.current;Me!==null;){var o=Me,s=o.child;if(Me.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Me=c;Me!==null;){var u=Me;switch(u.tag){case 0:case 11:case 15:La(8,u,o)}var d=u.child;if(d!==null)d.return=u,Me=d;else for(;Me!==null;){u=Me;var h=u.sibling,p=u.return;if(w_(u),u===c){Me=null;break}if(h!==null){h.return=p,Me=h;break}Me=p}}}var v=o.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Me=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Me=s;else e:for(;Me!==null;){if(o=Me,o.flags&2048)switch(o.tag){case 0:case 11:case 15:La(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,Me=f;break e}Me=o.return}}var x=t.current;for(Me=x;Me!==null;){s=Me;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,Me=_;else e:for(s=x;Me!==null;){if(a=Me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mu(9,a)}}catch(b){Pt(a,a.return,b)}if(a===s){Me=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Me=y;break e}Me=a.return}}if(nt=r,Jr(),Ai&&typeof Ai.onPostCommitFiberRoot=="function")try{Ai.onPostCommitFiberRoot(mu,t)}catch{}i=!0}return i}finally{lt=n,Yn.transition=e}}return!1}function O0(t,e,n){e=Bs(n,e),e=h_(t,e,1),t=Br(t,e,1),e=cn(),t!==null&&(ul(t,1,e),En(t,e))}function Pt(t,e,n){if(t.tag===3)O0(t,t,n);else for(;e!==null;){if(e.tag===3){O0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zr===null||!zr.has(i))){t=Bs(n,t),t=p_(e,t,1),e=Br(e,t,1),t=cn(),e!==null&&(ul(e,1,t),En(e,t));break}}e=e.return}}function xM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&($t&n)===n&&(Bt===4||Bt===3&&($t&130023424)===$t&&500>Lt()-Gp?To(t,0):Hp|=n),En(t,e)}function I_(t,e){e===0&&(t.mode&1?(e=Pl,Pl<<=1,!(Pl&130023424)&&(Pl=4194304)):e=1);var n=cn();t=ir(t,e),t!==null&&(ul(t,e,n),En(t,n))}function vM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),I_(t,n)}function _M(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),I_(t,n)}var U_;U_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)_n=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _n=!1,sM(t,e,n);_n=!!(t.flags&131072)}else _n=!1,yt&&e.flags&1048576&&Bv(e,jc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ec(t,e),t=e.pendingProps;var r=Us(e,nn.current);_s(e,n),r=Fp(null,e,i,t,r,n);var o=Op();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(o=!0,Wc(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Lp(e),r.updater=Eu,e.stateNode=r,r._reactInternals=e,Of(e,i,t,n),e=zf(null,e,i,!0,o,n)):(e.tag=0,yt&&o&&wp(e),an(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ec(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=SM(i),t=ii(i,t),r){case 0:e=Bf(null,e,i,t,n);break e;case 1:e=A0(null,e,i,t,n);break e;case 11:e=b0(null,e,i,t,n);break e;case 14:e=T0(null,e,i,ii(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Bf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),A0(t,e,i,r,n);case 3:e:{if(v_(e),t===null)throw Error(ae(387));i=e.pendingProps,o=e.memoizedState,r=o.element,Xv(t,e),qc(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Bs(Error(ae(423)),e),e=C0(t,e,i,n,r);break e}else if(i!==r){r=Bs(Error(ae(424)),e),e=C0(t,e,i,n,r);break e}else for(Dn=kr(e.stateNode.containerInfo.firstChild),Nn=e,yt=!0,li=null,n=Gv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fs(),i===r){e=rr(t,e,n);break e}an(t,e,i,n)}e=e.child}return e;case 5:return jv(e),t===null&&If(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Rf(i,r)?s=null:o!==null&&Rf(i,o)&&(e.flags|=32),x_(t,e),an(t,e,s,n),e.child;case 6:return t===null&&If(e),null;case 13:return __(t,e,n);case 4:return Dp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Os(e,null,i,n):an(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),b0(t,e,i,r,n);case 7:return an(t,e,e.pendingProps,n),e.child;case 8:return an(t,e,e.pendingProps.children,n),e.child;case 12:return an(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,mt($c,i._currentValue),i._currentValue=s,o!==null)if(pi(o.value,s)){if(o.children===r.children&&!yn.current){e=rr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Zi(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Uf(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ae(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Uf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}an(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_s(e,n),r=qn(r),i=i(r),e.flags|=1,an(t,e,i,n),e.child;case 14:return i=e.type,r=ii(i,e.pendingProps),r=ii(i.type,r),T0(t,e,i,r,n);case 15:return m_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Ec(t,e),e.tag=1,Sn(i)?(t=!0,Wc(e)):t=!1,_s(e,n),f_(e,i,r),Of(e,i,r,n),zf(null,e,i,!0,t,n);case 19:return y_(t,e,n);case 22:return g_(t,e,n)}throw Error(ae(156,e.tag))};function F_(t,e){return cv(t,e)}function yM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,i){return new yM(t,e,n,i)}function $p(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SM(t){if(typeof t=="function")return $p(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fp)return 11;if(t===hp)return 14}return 2}function Hr(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bc(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")$p(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case rs:return Ao(n.children,r,o,e);case dp:s=8,r|=8;break;case af:return t=jn(12,n,e,r|2),t.elementType=af,t.lanes=o,t;case lf:return t=jn(13,n,e,r),t.elementType=lf,t.lanes=o,t;case cf:return t=jn(19,n,e,r),t.elementType=cf,t.lanes=o,t;case jx:return bu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wx:s=10;break e;case Xx:s=9;break e;case fp:s=11;break e;case hp:s=14;break e;case Sr:s=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=jn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Ao(t,e,n,i){return t=jn(7,t,i,e),t.lanes=n,t}function bu(t,e,n,i){return t=jn(22,t,i,e),t.elementType=jx,t.lanes=n,t.stateNode={isHidden:!1},t}function yd(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function Sd(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function EM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=td(0),this.expirationTimes=td(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=td(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Yp(t,e,n,i,r,o,s,a,l){return t=new EM(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=jn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lp(o),t}function MM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:is,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function O_(t){if(!t)return Xr;t=t._reactInternals;e:{if(ko(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(Sn(n))return Ov(t,n,e)}return e}function k_(t,e,n,i,r,o,s,a,l){return t=Yp(n,i,!0,t,r,o,s,a,l),t.context=O_(null),n=t.current,i=cn(),r=Vr(n),o=Zi(i,r),o.callback=e??null,Br(n,o,r),t.current.lanes=r,ul(t,r,i),En(t,i),t}function Tu(t,e,n,i){var r=e.current,o=cn(),s=Vr(r);return n=O_(n),e.context===null?e.context=n:e.pendingContext=n,e=Zi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Br(r,e,s),t!==null&&(hi(t,r,s,o),_c(t,r,s)),s}function iu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function k0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qp(t,e){k0(t,e),(t=t.alternate)&&k0(t,e)}function wM(){return null}var B_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kp(t){this._internalRoot=t}Au.prototype.render=Kp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));Tu(t,e,null,null)};Au.prototype.unmount=Kp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;No(function(){Tu(null,t,null,null)}),e[nr]=null}};function Au(t){this._internalRoot=t}Au.prototype.unstable_scheduleHydration=function(t){if(t){var e=gv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mr.length&&e!==0&&e<Mr[n].priority;n++);Mr.splice(n,0,t),n===0&&vv(t)}};function Qp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function B0(){}function bM(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=iu(s);o.call(c)}}var s=k_(e,i,t,0,null,!1,!1,"",B0);return t._reactRootContainer=s,t[nr]=s.current,Ga(t.nodeType===8?t.parentNode:t),No(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=iu(l);a.call(c)}}var l=Yp(t,0,!1,null,null,!1,!1,"",B0);return t._reactRootContainer=l,t[nr]=l.current,Ga(t.nodeType===8?t.parentNode:t),No(function(){Tu(e,l,n,i)}),l}function Ru(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=iu(s);a.call(l)}}Tu(e,s,t,r)}else s=bM(n,e,t,r,i);return iu(s)}pv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ea(e.pendingLanes);n!==0&&(gp(e,n|1),En(e,Lt()),!(nt&6)&&(zs=Lt()+500,Jr()))}break;case 13:No(function(){var i=ir(t,1);if(i!==null){var r=cn();hi(i,t,1,r)}}),qp(t,1)}};xp=function(t){if(t.tag===13){var e=ir(t,134217728);if(e!==null){var n=cn();hi(e,t,134217728,n)}qp(t,134217728)}};mv=function(t){if(t.tag===13){var e=Vr(t),n=ir(t,e);if(n!==null){var i=cn();hi(n,t,e,i)}qp(t,e)}};gv=function(){return lt};xv=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};_f=function(t,e,n){switch(e){case"input":if(ff(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=_u(i);if(!r)throw Error(ae(90));Yx(i),ff(i,r)}}}break;case"textarea":Kx(t,n);break;case"select":e=n.value,e!=null&&ms(t,!!n.multiple,e,!1)}};iv=Wp;rv=No;var TM={usingClientEntryPoint:!1,Events:[fl,ls,_u,tv,nv,Wp]},da={findFiberByHostInstance:go,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AM={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ur.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=av(t),t===null?null:t.stateNode},findFiberByHostInstance:da.findFiberByHostInstance||wM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{mu=Vl.inject(AM),Ai=Vl}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TM;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qp(e))throw Error(ae(200));return MM(t,e,null,n)};kn.createRoot=function(t,e){if(!Qp(t))throw Error(ae(299));var n=!1,i="",r=B_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Yp(t,1,!1,null,null,n,!1,i,r),t[nr]=e.current,Ga(t.nodeType===8?t.parentNode:t),new Kp(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=av(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return No(t)};kn.hydrate=function(t,e,n){if(!Cu(e))throw Error(ae(200));return Ru(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!Qp(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=B_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=k_(e,null,t,1,n??null,r,!1,o,s),t[nr]=e.current,Ga(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Au(e)};kn.render=function(t,e,n){if(!Cu(e))throw Error(ae(200));return Ru(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!Cu(t))throw Error(ae(40));return t._reactRootContainer?(No(function(){Ru(null,null,t,!1,function(){t._reactRootContainer=null,t[nr]=null})}),!0):!1};kn.unstable_batchedUpdates=Wp;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Cu(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Ru(t,e,n,!1,i)};kn.version="18.3.1-next-f1338f8080-20240426";function z_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z_)}catch(t){console.error(t)}}z_(),zx.exports=kn;var pl=zx.exports;const V_=Ax(pl);var H_,z0=pl;H_=z0.createRoot,z0.hydrateRoot;const CM=1,RM=1e6;let Ed=0;function PM(){return Ed=(Ed+1)%Number.MAX_SAFE_INTEGER,Ed.toString()}const Md=new Map,V0=t=>{if(Md.has(t))return;const e=setTimeout(()=>{Md.delete(t),Ia({type:"REMOVE_TOAST",toastId:t})},RM);Md.set(t,e)},LM=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,CM)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?V0(n):t.toasts.forEach(i=>{V0(i.id)}),{...t,toasts:t.toasts.map(i=>i.id===n||n===void 0?{...i,open:!1}:i)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},Tc=[];let Ac={toasts:[]};function Ia(t){Ac=LM(Ac,t),Tc.forEach(e=>{e(Ac)})}function DM({...t}){const e=PM(),n=r=>Ia({type:"UPDATE_TOAST",toast:{...r,id:e}}),i=()=>Ia({type:"DISMISS_TOAST",toastId:e});return Ia({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:r=>{r||i()}}}),{id:e,dismiss:i,update:n}}function NM(){const[t,e]=D.useState(Ac);return D.useEffect(()=>(Tc.push(e),()=>{const n=Tc.indexOf(e);n>-1&&Tc.splice(n,1)}),[t]),{...t,toast:DM,dismiss:n=>Ia({type:"DISMISS_TOAST",toastId:n})}}function kt(t,e,{checkForDefaultPrevented:n=!0}={}){return function(r){if(t==null||t(r),n===!1||!r.defaultPrevented)return e==null?void 0:e(r)}}function H0(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function G_(...t){return e=>{let n=!1;const i=t.map(r=>{const o=H0(r,e);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let r=0;r<i.length;r++){const o=i[r];typeof o=="function"?o():H0(t[r],null)}}}}function mi(...t){return D.useCallback(G_(...t),t)}function Pu(t,e=[]){let n=[];function i(o,s){const a=D.createContext(s),l=n.length;n=[...n,s];const c=d=>{var f;const{scope:h,children:p,...v}=d,g=((f=h==null?void 0:h[t])==null?void 0:f[l])||a,m=D.useMemo(()=>v,Object.values(v));return j.jsx(g.Provider,{value:m,children:p})};c.displayName=o+"Provider";function u(d,h){var g;const p=((g=h==null?void 0:h[t])==null?void 0:g[l])||a,v=D.useContext(p);if(v)return v;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${o}\``)}return[c,u]}const r=()=>{const o=n.map(s=>D.createContext(s));return function(a){const l=(a==null?void 0:a[t])||o;return D.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,IM(r,...e)]}function IM(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(o){const s=i.reduce((a,{useScope:l,scopeName:c})=>{const d=l(o)[`__scope${c}`];return{...a,...d}},{});return D.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return n.scopeName=e.scopeName,n}function Zf(t){const e=UM(t),n=D.forwardRef((i,r)=>{const{children:o,...s}=i,a=D.Children.toArray(o),l=a.find(OM);if(l){const c=l.props.children,u=a.map(d=>d===l?D.Children.count(c)>1?D.Children.only(null):D.isValidElement(c)?c.props.children:null:d);return j.jsx(e,{...s,ref:r,children:D.isValidElement(c)?D.cloneElement(c,void 0,u):null})}return j.jsx(e,{...s,ref:r,children:o})});return n.displayName=`${t}.Slot`,n}function UM(t){const e=D.forwardRef((n,i)=>{const{children:r,...o}=n;if(D.isValidElement(r)){const s=BM(r),a=kM(o,r.props);return r.type!==D.Fragment&&(a.ref=i?G_(i,s):s),D.cloneElement(r,a)}return D.Children.count(r)>1?D.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var W_=Symbol("radix.slottable");function FM(t){const e=({children:n})=>j.jsx(j.Fragment,{children:n});return e.displayName=`${t}.Slottable`,e.__radixId=W_,e}function OM(t){return D.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===W_}function kM(t,e){const n={...e};for(const i in e){const r=t[i],o=e[i];/^on[A-Z]/.test(i)?r&&o?n[i]=(...a)=>{const l=o(...a);return r(...a),l}:r&&(n[i]=r):i==="style"?n[i]={...r,...o}:i==="className"&&(n[i]=[r,o].filter(Boolean).join(" "))}return{...t,...n}}function BM(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function zM(t){const e=t+"CollectionProvider",[n,i]=Pu(e),[r,o]=n(e,{collectionRef:{current:null},itemMap:new Map}),s=g=>{const{scope:m,children:f}=g,x=ue.useRef(null),_=ue.useRef(new Map).current;return j.jsx(r,{scope:m,itemMap:_,collectionRef:x,children:f})};s.displayName=e;const a=t+"CollectionSlot",l=Zf(a),c=ue.forwardRef((g,m)=>{const{scope:f,children:x}=g,_=o(a,f),y=mi(m,_.collectionRef);return j.jsx(l,{ref:y,children:x})});c.displayName=a;const u=t+"CollectionItemSlot",d="data-radix-collection-item",h=Zf(u),p=ue.forwardRef((g,m)=>{const{scope:f,children:x,..._}=g,y=ue.useRef(null),b=mi(m,y),E=o(u,f);return ue.useEffect(()=>(E.itemMap.set(y,{ref:y,..._}),()=>void E.itemMap.delete(y))),j.jsx(h,{[d]:"",ref:b,children:x})});p.displayName=u;function v(g){const m=o(t+"CollectionConsumer",g);return ue.useCallback(()=>{const x=m.collectionRef.current;if(!x)return[];const _=Array.from(x.querySelectorAll(`[${d}]`));return Array.from(m.itemMap.values()).sort((E,A)=>_.indexOf(E.ref.current)-_.indexOf(A.ref.current))},[m.collectionRef,m.itemMap])}return[{Provider:s,Slot:c,ItemSlot:p},v,i]}var VM=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],bn=VM.reduce((t,e)=>{const n=Zf(`Primitive.${e}`),i=D.forwardRef((r,o)=>{const{asChild:s,...a}=r,l=s?n:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),j.jsx(l,{...a,ref:o})});return i.displayName=`Primitive.${e}`,{...t,[e]:i}},{});function X_(t,e){t&&pl.flushSync(()=>t.dispatchEvent(e))}function jr(t){const e=D.useRef(t);return D.useEffect(()=>{e.current=t}),D.useMemo(()=>(...n)=>{var i;return(i=e.current)==null?void 0:i.call(e,...n)},[])}function HM(t,e=globalThis==null?void 0:globalThis.document){const n=jr(t);D.useEffect(()=>{const i=r=>{r.key==="Escape"&&n(r)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[n,e])}var GM="DismissableLayer",Jf="dismissableLayer.update",WM="dismissableLayer.pointerDownOutside",XM="dismissableLayer.focusOutside",G0,j_=D.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Zp=D.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:o,onInteractOutside:s,onDismiss:a,...l}=t,c=D.useContext(j_),[u,d]=D.useState(null),h=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=D.useState({}),v=mi(e,A=>d(A)),g=Array.from(c.layers),[m]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),f=g.indexOf(m),x=u?g.indexOf(u):-1,_=c.layersWithOutsidePointerEventsDisabled.size>0,y=x>=f,b=$M(A=>{const L=A.target,w=[...c.branches].some(S=>S.contains(L));!y||w||(r==null||r(A),s==null||s(A),A.defaultPrevented||a==null||a())},h),E=YM(A=>{const L=A.target;[...c.branches].some(S=>S.contains(L))||(o==null||o(A),s==null||s(A),A.defaultPrevented||a==null||a())},h);return HM(A=>{x===c.layers.size-1&&(i==null||i(A),!A.defaultPrevented&&a&&(A.preventDefault(),a()))},h),D.useEffect(()=>{if(u)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(G0=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(u)),c.layers.add(u),W0(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=G0)}},[u,h,n,c]),D.useEffect(()=>()=>{u&&(c.layers.delete(u),c.layersWithOutsidePointerEventsDisabled.delete(u),W0())},[u,c]),D.useEffect(()=>{const A=()=>p({});return document.addEventListener(Jf,A),()=>document.removeEventListener(Jf,A)},[]),j.jsx(bn.div,{...l,ref:v,style:{pointerEvents:_?y?"auto":"none":void 0,...t.style},onFocusCapture:kt(t.onFocusCapture,E.onFocusCapture),onBlurCapture:kt(t.onBlurCapture,E.onBlurCapture),onPointerDownCapture:kt(t.onPointerDownCapture,b.onPointerDownCapture)})});Zp.displayName=GM;var jM="DismissableLayerBranch",$_=D.forwardRef((t,e)=>{const n=D.useContext(j_),i=D.useRef(null),r=mi(e,i);return D.useEffect(()=>{const o=i.current;if(o)return n.branches.add(o),()=>{n.branches.delete(o)}},[n.branches]),j.jsx(bn.div,{...t,ref:r})});$_.displayName=jM;function $M(t,e=globalThis==null?void 0:globalThis.document){const n=jr(t),i=D.useRef(!1),r=D.useRef(()=>{});return D.useEffect(()=>{const o=a=>{if(a.target&&!i.current){let l=function(){Y_(WM,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=l,e.addEventListener("click",r.current,{once:!0})):l()}else e.removeEventListener("click",r.current);i.current=!1},s=window.setTimeout(()=>{e.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),e.removeEventListener("pointerdown",o),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>i.current=!0}}function YM(t,e=globalThis==null?void 0:globalThis.document){const n=jr(t),i=D.useRef(!1);return D.useEffect(()=>{const r=o=>{o.target&&!i.current&&Y_(XM,n,{originalEvent:o},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function W0(){const t=new CustomEvent(Jf);document.dispatchEvent(t)}function Y_(t,e,n,{discrete:i}){const r=n.originalEvent.target,o=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?X_(r,o):r.dispatchEvent(o)}var qM=Zp,KM=$_,$r=globalThis!=null&&globalThis.document?D.useLayoutEffect:()=>{},QM="Portal",q_=D.forwardRef((t,e)=>{var a;const{container:n,...i}=t,[r,o]=D.useState(!1);$r(()=>o(!0),[]);const s=n||r&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return s?V_.createPortal(j.jsx(bn.div,{...i,ref:e}),s):null});q_.displayName=QM;function ZM(t,e){return D.useReducer((n,i)=>e[n][i]??n,t)}var Jp=t=>{const{present:e,children:n}=t,i=JM(e),r=typeof n=="function"?n({present:i.isPresent}):D.Children.only(n),o=mi(i.ref,ew(r));return typeof n=="function"||i.isPresent?D.cloneElement(r,{ref:o}):null};Jp.displayName="Presence";function JM(t){const[e,n]=D.useState(),i=D.useRef(null),r=D.useRef(t),o=D.useRef("none"),s=t?"mounted":"unmounted",[a,l]=ZM(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return D.useEffect(()=>{const c=Hl(i.current);o.current=a==="mounted"?c:"none"},[a]),$r(()=>{const c=i.current,u=r.current;if(u!==t){const h=o.current,p=Hl(c);t?l("MOUNT"):p==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(u&&h!==p?"ANIMATION_OUT":"UNMOUNT"),r.current=t}},[t,l]),$r(()=>{if(e){let c;const u=e.ownerDocument.defaultView??window,d=p=>{const g=Hl(i.current).includes(p.animationName);if(p.target===e&&g&&(l("ANIMATION_END"),!r.current)){const m=e.style.animationFillMode;e.style.animationFillMode="forwards",c=u.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=m)})}},h=p=>{p.target===e&&(o.current=Hl(i.current))};return e.addEventListener("animationstart",h),e.addEventListener("animationcancel",d),e.addEventListener("animationend",d),()=>{u.clearTimeout(c),e.removeEventListener("animationstart",h),e.removeEventListener("animationcancel",d),e.removeEventListener("animationend",d)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:D.useCallback(c=>{i.current=c?getComputedStyle(c):null,n(c)},[])}}function Hl(t){return(t==null?void 0:t.animationName)||"none"}function ew(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var tw=kx[" useInsertionEffect ".trim().toString()]||$r;function nw({prop:t,defaultProp:e,onChange:n=()=>{},caller:i}){const[r,o,s]=iw({defaultProp:e,onChange:n}),a=t!==void 0,l=a?t:r;{const u=D.useRef(t!==void 0);D.useEffect(()=>{const d=u.current;d!==a&&console.warn(`${i} is changing from ${d?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),u.current=a},[a,i])}const c=D.useCallback(u=>{var d;if(a){const h=rw(u)?u(t):u;h!==t&&((d=s.current)==null||d.call(s,h))}else o(u)},[a,t,o,s]);return[l,c]}function iw({defaultProp:t,onChange:e}){const[n,i]=D.useState(t),r=D.useRef(n),o=D.useRef(e);return tw(()=>{o.current=e},[e]),D.useEffect(()=>{var s;r.current!==n&&((s=o.current)==null||s.call(o,n),r.current=n)},[n,r]),[n,i,o]}function rw(t){return typeof t=="function"}var ow=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),sw="VisuallyHidden",Lu=D.forwardRef((t,e)=>j.jsx(bn.span,{...t,ref:e,style:{...ow,...t.style}}));Lu.displayName=sw;var aw=Lu,em="ToastProvider",[tm,lw,cw]=zM("Toast"),[K_,fN]=Pu("Toast",[cw]),[uw,Du]=K_(em),Q_=t=>{const{__scopeToast:e,label:n="Notification",duration:i=5e3,swipeDirection:r="right",swipeThreshold:o=50,children:s}=t,[a,l]=D.useState(null),[c,u]=D.useState(0),d=D.useRef(!1),h=D.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${em}\`. Expected non-empty \`string\`.`),j.jsx(tm.Provider,{scope:e,children:j.jsx(uw,{scope:e,label:n,duration:i,swipeDirection:r,swipeThreshold:o,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:D.useCallback(()=>u(p=>p+1),[]),onToastRemove:D.useCallback(()=>u(p=>p-1),[]),isFocusedToastEscapeKeyDownRef:d,isClosePausedRef:h,children:s})})};Q_.displayName=em;var Z_="ToastViewport",dw=["F8"],eh="toast.viewportPause",th="toast.viewportResume",J_=D.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:i=dw,label:r="Notifications ({hotkey})",...o}=t,s=Du(Z_,n),a=lw(n),l=D.useRef(null),c=D.useRef(null),u=D.useRef(null),d=D.useRef(null),h=mi(e,d,s.onViewportChange),p=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),v=s.toastCount>0;D.useEffect(()=>{const m=f=>{var _;i.length!==0&&i.every(y=>f[y]||f.code===y)&&((_=d.current)==null||_.focus())};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[i]),D.useEffect(()=>{const m=l.current,f=d.current;if(v&&m&&f){const x=()=>{if(!s.isClosePausedRef.current){const E=new CustomEvent(eh);f.dispatchEvent(E),s.isClosePausedRef.current=!0}},_=()=>{if(s.isClosePausedRef.current){const E=new CustomEvent(th);f.dispatchEvent(E),s.isClosePausedRef.current=!1}},y=E=>{!m.contains(E.relatedTarget)&&_()},b=()=>{m.contains(document.activeElement)||_()};return m.addEventListener("focusin",x),m.addEventListener("focusout",y),m.addEventListener("pointermove",x),m.addEventListener("pointerleave",b),window.addEventListener("blur",x),window.addEventListener("focus",_),()=>{m.removeEventListener("focusin",x),m.removeEventListener("focusout",y),m.removeEventListener("pointermove",x),m.removeEventListener("pointerleave",b),window.removeEventListener("blur",x),window.removeEventListener("focus",_)}}},[v,s.isClosePausedRef]);const g=D.useCallback(({tabbingDirection:m})=>{const x=a().map(_=>{const y=_.ref.current,b=[y,...ww(y)];return m==="forwards"?b:b.reverse()});return(m==="forwards"?x.reverse():x).flat()},[a]);return D.useEffect(()=>{const m=d.current;if(m){const f=x=>{var b,E,A;const _=x.altKey||x.ctrlKey||x.metaKey;if(x.key==="Tab"&&!_){const L=document.activeElement,w=x.shiftKey;if(x.target===m&&w){(b=c.current)==null||b.focus();return}const U=g({tabbingDirection:w?"backwards":"forwards"}),z=U.findIndex(O=>O===L);wd(U.slice(z+1))?x.preventDefault():w?(E=c.current)==null||E.focus():(A=u.current)==null||A.focus()}};return m.addEventListener("keydown",f),()=>m.removeEventListener("keydown",f)}},[a,g]),j.jsxs(KM,{ref:l,role:"region","aria-label":r.replace("{hotkey}",p),tabIndex:-1,style:{pointerEvents:v?void 0:"none"},children:[v&&j.jsx(nh,{ref:c,onFocusFromOutsideViewport:()=>{const m=g({tabbingDirection:"forwards"});wd(m)}}),j.jsx(tm.Slot,{scope:n,children:j.jsx(bn.ol,{tabIndex:-1,...o,ref:h})}),v&&j.jsx(nh,{ref:u,onFocusFromOutsideViewport:()=>{const m=g({tabbingDirection:"backwards"});wd(m)}})]})});J_.displayName=Z_;var ey="ToastFocusProxy",nh=D.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:i,...r}=t,o=Du(ey,n);return j.jsx(Lu,{"aria-hidden":!0,tabIndex:0,...r,ref:e,style:{position:"fixed"},onFocus:s=>{var c;const a=s.relatedTarget;!((c=o.viewport)!=null&&c.contains(a))&&i()}})});nh.displayName=ey;var ml="Toast",fw="toast.swipeStart",hw="toast.swipeMove",pw="toast.swipeCancel",mw="toast.swipeEnd",ty=D.forwardRef((t,e)=>{const{forceMount:n,open:i,defaultOpen:r,onOpenChange:o,...s}=t,[a,l]=nw({prop:i,defaultProp:r??!0,onChange:o,caller:ml});return j.jsx(Jp,{present:n||a,children:j.jsx(vw,{open:a,...s,ref:e,onClose:()=>l(!1),onPause:jr(t.onPause),onResume:jr(t.onResume),onSwipeStart:kt(t.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:kt(t.onSwipeMove,c=>{const{x:u,y:d}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${d}px`)}),onSwipeCancel:kt(t.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:kt(t.onSwipeEnd,c=>{const{x:u,y:d}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${d}px`),l(!1)})})})});ty.displayName=ml;var[gw,xw]=K_(ml,{onClose(){}}),vw=D.forwardRef((t,e)=>{const{__scopeToast:n,type:i="foreground",duration:r,open:o,onClose:s,onEscapeKeyDown:a,onPause:l,onResume:c,onSwipeStart:u,onSwipeMove:d,onSwipeCancel:h,onSwipeEnd:p,...v}=t,g=Du(ml,n),[m,f]=D.useState(null),x=mi(e,O=>f(O)),_=D.useRef(null),y=D.useRef(null),b=r||g.duration,E=D.useRef(0),A=D.useRef(b),L=D.useRef(0),{onToastAdd:w,onToastRemove:S}=g,P=jr(()=>{var G;(m==null?void 0:m.contains(document.activeElement))&&((G=g.viewport)==null||G.focus()),s()}),U=D.useCallback(O=>{!O||O===1/0||(window.clearTimeout(L.current),E.current=new Date().getTime(),L.current=window.setTimeout(P,O))},[P]);D.useEffect(()=>{const O=g.viewport;if(O){const G=()=>{U(A.current),c==null||c()},H=()=>{const Y=new Date().getTime()-E.current;A.current=A.current-Y,window.clearTimeout(L.current),l==null||l()};return O.addEventListener(eh,H),O.addEventListener(th,G),()=>{O.removeEventListener(eh,H),O.removeEventListener(th,G)}}},[g.viewport,b,l,c,U]),D.useEffect(()=>{o&&!g.isClosePausedRef.current&&U(b)},[o,b,g.isClosePausedRef,U]),D.useEffect(()=>(w(),()=>S()),[w,S]);const z=D.useMemo(()=>m?ly(m):null,[m]);return g.viewport?j.jsxs(j.Fragment,{children:[z&&j.jsx(_w,{__scopeToast:n,role:"status","aria-live":i==="foreground"?"assertive":"polite","aria-atomic":!0,children:z}),j.jsx(gw,{scope:n,onClose:P,children:pl.createPortal(j.jsx(tm.ItemSlot,{scope:n,children:j.jsx(qM,{asChild:!0,onEscapeKeyDown:kt(a,()=>{g.isFocusedToastEscapeKeyDownRef.current||P(),g.isFocusedToastEscapeKeyDownRef.current=!1}),children:j.jsx(bn.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":g.swipeDirection,...v,ref:x,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:kt(t.onKeyDown,O=>{O.key==="Escape"&&(a==null||a(O.nativeEvent),O.nativeEvent.defaultPrevented||(g.isFocusedToastEscapeKeyDownRef.current=!0,P()))}),onPointerDown:kt(t.onPointerDown,O=>{O.button===0&&(_.current={x:O.clientX,y:O.clientY})}),onPointerMove:kt(t.onPointerMove,O=>{if(!_.current)return;const G=O.clientX-_.current.x,H=O.clientY-_.current.y,Y=!!y.current,R=["left","right"].includes(g.swipeDirection),F=["left","up"].includes(g.swipeDirection)?Math.min:Math.max,W=R?F(0,G):0,se=R?0:F(0,H),ce=O.pointerType==="touch"?10:2,Ee={x:W,y:se},be={originalEvent:O,delta:Ee};Y?(y.current=Ee,Gl(hw,d,be,{discrete:!1})):X0(Ee,g.swipeDirection,ce)?(y.current=Ee,Gl(fw,u,be,{discrete:!1}),O.target.setPointerCapture(O.pointerId)):(Math.abs(G)>ce||Math.abs(H)>ce)&&(_.current=null)}),onPointerUp:kt(t.onPointerUp,O=>{const G=y.current,H=O.target;if(H.hasPointerCapture(O.pointerId)&&H.releasePointerCapture(O.pointerId),y.current=null,_.current=null,G){const Y=O.currentTarget,R={originalEvent:O,delta:G};X0(G,g.swipeDirection,g.swipeThreshold)?Gl(mw,p,R,{discrete:!0}):Gl(pw,h,R,{discrete:!0}),Y.addEventListener("click",F=>F.preventDefault(),{once:!0})}})})})}),g.viewport)})]}):null}),_w=t=>{const{__scopeToast:e,children:n,...i}=t,r=Du(ml,e),[o,s]=D.useState(!1),[a,l]=D.useState(!1);return Ew(()=>s(!0)),D.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),a?null:j.jsx(q_,{asChild:!0,children:j.jsx(Lu,{...i,children:o&&j.jsxs(j.Fragment,{children:[r.label," ",n]})})})},yw="ToastTitle",ny=D.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return j.jsx(bn.div,{...i,ref:e})});ny.displayName=yw;var Sw="ToastDescription",iy=D.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return j.jsx(bn.div,{...i,ref:e})});iy.displayName=Sw;var ry="ToastAction",oy=D.forwardRef((t,e)=>{const{altText:n,...i}=t;return n.trim()?j.jsx(ay,{altText:n,asChild:!0,children:j.jsx(nm,{...i,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${ry}\`. Expected non-empty \`string\`.`),null)});oy.displayName=ry;var sy="ToastClose",nm=D.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t,r=xw(sy,n);return j.jsx(ay,{asChild:!0,children:j.jsx(bn.button,{type:"button",...i,ref:e,onClick:kt(t.onClick,r.onClose)})})});nm.displayName=sy;var ay=D.forwardRef((t,e)=>{const{__scopeToast:n,altText:i,...r}=t;return j.jsx(bn.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...r,ref:e})});function ly(t){const e=[];return Array.from(t.childNodes).forEach(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent&&e.push(i.textContent),Mw(i)){const r=i.ariaHidden||i.hidden||i.style.display==="none",o=i.dataset.radixToastAnnounceExclude==="";if(!r)if(o){const s=i.dataset.radixToastAnnounceAlt;s&&e.push(s)}else e.push(...ly(i))}}),e}function Gl(t,e,n,{discrete:i}){const r=n.originalEvent.currentTarget,o=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?X_(r,o):r.dispatchEvent(o)}var X0=(t,e,n=0)=>{const i=Math.abs(t.x),r=Math.abs(t.y),o=i>r;return e==="left"||e==="right"?o&&i>n:!o&&r>n};function Ew(t=()=>{}){const e=jr(t);$r(()=>{let n=0,i=0;return n=window.requestAnimationFrame(()=>i=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(i)}},[e])}function Mw(t){return t.nodeType===t.ELEMENT_NODE}function ww(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function wd(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var bw=Q_,cy=J_,uy=ty,dy=ny,fy=iy,hy=oy,py=nm;function my(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=my(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function gy(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=my(t))&&(i&&(i+=" "),i+=e);return i}const j0=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,$0=gy,Tw=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return $0(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:o}=e,s=Object.keys(r).map(c=>{const u=n==null?void 0:n[c],d=o==null?void 0:o[c];if(u===null)return null;const h=j0(u)||j0(d);return r[c][h]}),a=n&&Object.entries(n).reduce((c,u)=>{let[d,h]=u;return h===void 0||(c[d]=h),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,u)=>{let{class:d,className:h,...p}=u;return Object.entries(p).every(v=>{let[g,m]=v;return Array.isArray(m)?m.includes({...o,...a}[g]):{...o,...a}[g]===m})?[...c,d,h]:c},[]);return $0(t,s,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xy=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=D.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:o,iconNode:s,...a},l)=>D.createElement("svg",{ref:l,...Cw,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:xy("lucide",r),...a},[...s.map(([c,u])=>D.createElement(c,u)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=(t,e)=>{const n=D.forwardRef(({className:i,...r},o)=>D.createElement(Rw,{ref:o,iconNode:e,className:xy(`lucide-${Aw(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=Bo("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=Bo("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=Bo("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=Bo("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=Bo("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=Bo("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=Bo("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),im="-",Ow=t=>{const e=Bw(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:s=>{const a=s.split(im);return a[0]===""&&a.length!==1&&a.shift(),vy(a,e)||kw(s)},getConflictingClassGroupIds:(s,a)=>{const l=n[s]||[];return a&&i[s]?[...l,...i[s]]:l}}},vy=(t,e)=>{var s;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?vy(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const o=t.join(im);return(s=e.validators.find(({validator:a})=>a(o)))==null?void 0:s.classGroupId},Y0=/^\[(.+)\]$/,kw=t=>{if(Y0.test(t)){const e=Y0.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},Bw=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return Vw(Object.entries(t.classGroups),n).forEach(([o,s])=>{ih(s,i,o,e)}),i},ih=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const o=r===""?e:q0(e,r);o.classGroupId=n;return}if(typeof r=="function"){if(zw(r)){ih(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([o,s])=>{ih(s,q0(e,o),n,i)})})},q0=(t,e)=>{let n=t;return e.split(im).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},zw=t=>t.isThemeGetter,Vw=(t,e)=>e?t.map(([n,i])=>{const r=i.map(o=>typeof o=="string"?e+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,a])=>[e+s,a])):o);return[n,r]}):t,Hw=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(o,s)=>{n.set(o,s),e++,e>t&&(e=0,i=n,n=new Map)};return{get(o){let s=n.get(o);if(s!==void 0)return s;if((s=i.get(o))!==void 0)return r(o,s),s},set(o,s){n.has(o)?n.set(o,s):r(o,s)}}},_y="!",Gw=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,r=e[0],o=e.length,s=a=>{const l=[];let c=0,u=0,d;for(let m=0;m<a.length;m++){let f=a[m];if(c===0){if(f===r&&(i||a.slice(m,m+o)===e)){l.push(a.slice(u,m)),u=m+o;continue}if(f==="/"){d=m;continue}}f==="["?c++:f==="]"&&c--}const h=l.length===0?a:a.substring(u),p=h.startsWith(_y),v=p?h.substring(1):h,g=d&&d>u?d-u:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:v,maybePostfixModifierPosition:g}};return n?a=>n({className:a,parseClassName:s}):s},Ww=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},Xw=t=>({cache:Hw(t.cacheSize),parseClassName:Gw(t),...Ow(t)}),jw=/\s+/,$w=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,o=[],s=t.trim().split(jw);let a="";for(let l=s.length-1;l>=0;l-=1){const c=s[l],{modifiers:u,hasImportantModifier:d,baseClassName:h,maybePostfixModifierPosition:p}=n(c);let v=!!p,g=i(v?h.substring(0,p):h);if(!g){if(!v){a=c+(a.length>0?" "+a:a);continue}if(g=i(h),!g){a=c+(a.length>0?" "+a:a);continue}v=!1}const m=Ww(u).join(":"),f=d?m+_y:m,x=f+g;if(o.includes(x))continue;o.push(x);const _=r(g,v);for(let y=0;y<_.length;++y){const b=_[y];o.push(f+b)}a=c+(a.length>0?" "+a:a)}return a};function Yw(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=yy(e))&&(i&&(i+=" "),i+=n);return i}const yy=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=yy(t[i]))&&(n&&(n+=" "),n+=e);return n};function qw(t,...e){let n,i,r,o=s;function s(l){const c=e.reduce((u,d)=>d(u),t());return n=Xw(c),i=n.cache.get,r=n.cache.set,o=a,a(l)}function a(l){const c=i(l);if(c)return c;const u=$w(l,n);return r(l,u),u}return function(){return o(Yw.apply(null,arguments))}}const gt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},Sy=/^\[(?:([a-z-]+):)?(.+)\]$/i,Kw=/^\d+\/\d+$/,Qw=new Set(["px","full","screen"]),Zw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Jw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,eb=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,tb=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,nb=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ui=t=>Ss(t)||Qw.has(t)||Kw.test(t),fr=t=>Qs(t,"length",ub),Ss=t=>!!t&&!Number.isNaN(Number(t)),bd=t=>Qs(t,"number",Ss),fa=t=>!!t&&Number.isInteger(Number(t)),ib=t=>t.endsWith("%")&&Ss(t.slice(0,-1)),Ye=t=>Sy.test(t),hr=t=>Zw.test(t),rb=new Set(["length","size","percentage"]),ob=t=>Qs(t,rb,Ey),sb=t=>Qs(t,"position",Ey),ab=new Set(["image","url"]),lb=t=>Qs(t,ab,fb),cb=t=>Qs(t,"",db),ha=()=>!0,Qs=(t,e,n)=>{const i=Sy.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},ub=t=>Jw.test(t)&&!eb.test(t),Ey=()=>!1,db=t=>tb.test(t),fb=t=>nb.test(t),hb=()=>{const t=gt("colors"),e=gt("spacing"),n=gt("blur"),i=gt("brightness"),r=gt("borderColor"),o=gt("borderRadius"),s=gt("borderSpacing"),a=gt("borderWidth"),l=gt("contrast"),c=gt("grayscale"),u=gt("hueRotate"),d=gt("invert"),h=gt("gap"),p=gt("gradientColorStops"),v=gt("gradientColorStopPositions"),g=gt("inset"),m=gt("margin"),f=gt("opacity"),x=gt("padding"),_=gt("saturate"),y=gt("scale"),b=gt("sepia"),E=gt("skew"),A=gt("space"),L=gt("translate"),w=()=>["auto","contain","none"],S=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto",Ye,e],U=()=>[Ye,e],z=()=>["",Ui,fr],O=()=>["auto",Ss,Ye],G=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],H=()=>["solid","dashed","dotted","double","none"],Y=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],R=()=>["start","end","center","between","around","evenly","stretch"],F=()=>["","0",Ye],W=()=>["auto","avoid","all","avoid-page","page","left","right","column"],se=()=>[Ss,Ye];return{cacheSize:500,separator:":",theme:{colors:[ha],spacing:[Ui,fr],blur:["none","",hr,Ye],brightness:se(),borderColor:[t],borderRadius:["none","","full",hr,Ye],borderSpacing:U(),borderWidth:z(),contrast:se(),grayscale:F(),hueRotate:se(),invert:F(),gap:U(),gradientColorStops:[t],gradientColorStopPositions:[ib,fr],inset:P(),margin:P(),opacity:se(),padding:U(),saturate:se(),scale:se(),sepia:F(),skew:se(),space:U(),translate:U()},classGroups:{aspect:[{aspect:["auto","square","video",Ye]}],container:["container"],columns:[{columns:[hr]}],"break-after":[{"break-after":W()}],"break-before":[{"break-before":W()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...G(),Ye]}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:w()}],"overscroll-x":[{"overscroll-x":w()}],"overscroll-y":[{"overscroll-y":w()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",fa,Ye]}],basis:[{basis:P()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Ye]}],grow:[{grow:F()}],shrink:[{shrink:F()}],order:[{order:["first","last","none",fa,Ye]}],"grid-cols":[{"grid-cols":[ha]}],"col-start-end":[{col:["auto",{span:["full",fa,Ye]},Ye]}],"col-start":[{"col-start":O()}],"col-end":[{"col-end":O()}],"grid-rows":[{"grid-rows":[ha]}],"row-start-end":[{row:["auto",{span:[fa,Ye]},Ye]}],"row-start":[{"row-start":O()}],"row-end":[{"row-end":O()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Ye]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Ye]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...R()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...R(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...R(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Ye,e]}],"min-w":[{"min-w":[Ye,e,"min","max","fit"]}],"max-w":[{"max-w":[Ye,e,"none","full","min","max","fit","prose",{screen:[hr]},hr]}],h:[{h:[Ye,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Ye,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Ye,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Ye,e,"auto","min","max","fit"]}],"font-size":[{text:["base",hr,fr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",bd]}],"font-family":[{font:[ha]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Ye]}],"line-clamp":[{"line-clamp":["none",Ss,bd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ui,Ye]}],"list-image":[{"list-image":["none",Ye]}],"list-style-type":[{list:["none","disc","decimal",Ye]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...H(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ui,fr]}],"underline-offset":[{"underline-offset":["auto",Ui,Ye]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:U()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ye]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ye]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...G(),sb]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",ob]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},lb]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...H(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:H()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...H()]}],"outline-offset":[{"outline-offset":[Ui,Ye]}],"outline-w":[{outline:[Ui,fr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[Ui,fr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",hr,cb]}],"shadow-color":[{shadow:[ha]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...Y(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Y()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",hr,Ye]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[_]}],sepia:[{sepia:[b]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[_]}],"backdrop-sepia":[{"backdrop-sepia":[b]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Ye]}],duration:[{duration:se()}],ease:[{ease:["linear","in","out","in-out",Ye]}],delay:[{delay:se()}],animate:[{animate:["none","spin","ping","pulse","bounce",Ye]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[y]}],"scale-x":[{"scale-x":[y]}],"scale-y":[{"scale-y":[y]}],rotate:[{rotate:[fa,Ye]}],"translate-x":[{"translate-x":[L]}],"translate-y":[{"translate-y":[L]}],"skew-x":[{"skew-x":[E]}],"skew-y":[{"skew-y":[E]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Ye]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ye]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":U()}],"scroll-mx":[{"scroll-mx":U()}],"scroll-my":[{"scroll-my":U()}],"scroll-ms":[{"scroll-ms":U()}],"scroll-me":[{"scroll-me":U()}],"scroll-mt":[{"scroll-mt":U()}],"scroll-mr":[{"scroll-mr":U()}],"scroll-mb":[{"scroll-mb":U()}],"scroll-ml":[{"scroll-ml":U()}],"scroll-p":[{"scroll-p":U()}],"scroll-px":[{"scroll-px":U()}],"scroll-py":[{"scroll-py":U()}],"scroll-ps":[{"scroll-ps":U()}],"scroll-pe":[{"scroll-pe":U()}],"scroll-pt":[{"scroll-pt":U()}],"scroll-pr":[{"scroll-pr":U()}],"scroll-pb":[{"scroll-pb":U()}],"scroll-pl":[{"scroll-pl":U()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ye]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Ui,fr,bd]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},pb=qw(hb);function zo(...t){return pb(gy(t))}const mb=bw,My=D.forwardRef(({className:t,...e},n)=>j.jsx(cy,{ref:n,className:zo("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));My.displayName=cy.displayName;const gb=Tw("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),wy=D.forwardRef(({className:t,variant:e,...n},i)=>j.jsx(uy,{ref:i,className:zo(gb({variant:e}),t),...n}));wy.displayName=uy.displayName;const xb=D.forwardRef(({className:t,...e},n)=>j.jsx(hy,{ref:n,className:zo("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",t),...e}));xb.displayName=hy.displayName;const by=D.forwardRef(({className:t,...e},n)=>j.jsx(py,{ref:n,className:zo("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:j.jsx(Fw,{className:"h-4 w-4"})}));by.displayName=py.displayName;const Ty=D.forwardRef(({className:t,...e},n)=>j.jsx(dy,{ref:n,className:zo("text-sm font-semibold",t),...e}));Ty.displayName=dy.displayName;const Ay=D.forwardRef(({className:t,...e},n)=>j.jsx(fy,{ref:n,className:zo("text-sm opacity-90",t),...e}));Ay.displayName=fy.displayName;function vb(){const{toasts:t}=NM();return j.jsxs(mb,{children:[t.map(function({id:e,title:n,description:i,action:r,...o}){return j.jsxs(wy,{...o,children:[j.jsxs("div",{className:"grid gap-1",children:[n&&j.jsx(Ty,{children:n}),i&&j.jsx(Ay,{children:i})]}),r,j.jsx(by,{})]},e)}),j.jsx(My,{})]})}var K0=["light","dark"],_b="(prefers-color-scheme: dark)",yb=D.createContext(void 0),Sb={setTheme:t=>{},themes:[]},Eb=()=>{var t;return(t=D.useContext(yb))!=null?t:Sb};D.memo(({forcedTheme:t,storageKey:e,attribute:n,enableSystem:i,enableColorScheme:r,defaultTheme:o,value:s,attrs:a,nonce:l})=>{let c=o==="system",u=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(v=>`'${v}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,d=r?K0.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(v,g=!1,m=!0)=>{let f=s?s[v]:v,x=g?v+"|| ''":`'${f}'`,_="";return r&&m&&!g&&K0.includes(v)&&(_+=`d.style.colorScheme = '${v}';`),n==="class"?g||f?_+=`c.add(${x})`:_+="null":f&&(_+=`d[s](n,${x})`),_},p=t?`!function(){${u}${h(t)}}()`:i?`!function(){try{${u}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${c})){var t='${_b}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${h(s?"x[e]":"e",!0)}}${c?"":"else{"+h(o,!1,!1)+"}"}${d}}catch(e){}}()`:`!function(){try{${u}var e=localStorage.getItem('${e}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${h(s?"x[e]":"e",!0)}}else{${h(o,!1,!1)};}${d}}catch(t){}}();`;return D.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:p}})});var Mb=t=>{switch(t){case"success":return Tb;case"info":return Cb;case"warning":return Ab;case"error":return Rb;default:return null}},wb=Array(12).fill(0),bb=({visible:t,className:e})=>ue.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":t},ue.createElement("div",{className:"sonner-spinner"},wb.map((n,i)=>ue.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${i}`})))),Tb=ue.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},ue.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Ab=ue.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},ue.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Cb=ue.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},ue.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Rb=ue.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},ue.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Pb=ue.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},ue.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),ue.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Lb=()=>{let[t,e]=ue.useState(document.hidden);return ue.useEffect(()=>{let n=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),t},rh=1,Db=class{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{let e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}),this.publish=t=>{this.subscribers.forEach(e=>e(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var e;let{message:n,...i}=t,r=typeof(t==null?void 0:t.id)=="number"||((e=t.id)==null?void 0:e.length)>0?t.id:rh++,o=this.toasts.find(a=>a.id===r),s=t.dismissible===void 0?!0:t.dismissible;return this.dismissedToasts.has(r)&&this.dismissedToasts.delete(r),o?this.toasts=this.toasts.map(a=>a.id===r?(this.publish({...a,...t,id:r,title:n}),{...a,...t,id:r,dismissible:s,title:n}):a):this.addToast({title:n,...i,dismissible:s,id:r}),r},this.dismiss=t=>(this.dismissedToasts.add(t),t||this.toasts.forEach(e=>{this.subscribers.forEach(n=>n({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t),this.message=(t,e)=>this.create({...e,message:t}),this.error=(t,e)=>this.create({...e,message:t,type:"error"}),this.success=(t,e)=>this.create({...e,type:"success",message:t}),this.info=(t,e)=>this.create({...e,type:"info",message:t}),this.warning=(t,e)=>this.create({...e,type:"warning",message:t}),this.loading=(t,e)=>this.create({...e,type:"loading",message:t}),this.promise=(t,e)=>{if(!e)return;let n;e.loading!==void 0&&(n=this.create({...e,promise:t,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let i=t instanceof Promise?t:t(),r=n!==void 0,o,s=i.then(async l=>{if(o=["resolve",l],ue.isValidElement(l))r=!1,this.create({id:n,type:"default",message:l});else if(Ib(l)&&!l.ok){r=!1;let c=typeof e.error=="function"?await e.error(`HTTP error! status: ${l.status}`):e.error,u=typeof e.description=="function"?await e.description(`HTTP error! status: ${l.status}`):e.description;this.create({id:n,type:"error",message:c,description:u})}else if(e.success!==void 0){r=!1;let c=typeof e.success=="function"?await e.success(l):e.success,u=typeof e.description=="function"?await e.description(l):e.description;this.create({id:n,type:"success",message:c,description:u})}}).catch(async l=>{if(o=["reject",l],e.error!==void 0){r=!1;let c=typeof e.error=="function"?await e.error(l):e.error,u=typeof e.description=="function"?await e.description(l):e.description;this.create({id:n,type:"error",message:c,description:u})}}).finally(()=>{var l;r&&(this.dismiss(n),n=void 0),(l=e.finally)==null||l.call(e)}),a=()=>new Promise((l,c)=>s.then(()=>o[0]==="reject"?c(o[1]):l(o[1])).catch(c));return typeof n!="string"&&typeof n!="number"?{unwrap:a}:Object.assign(n,{unwrap:a})},this.custom=(t,e)=>{let n=(e==null?void 0:e.id)||rh++;return this.create({jsx:t(n),id:n,...e}),n},this.getActiveToasts=()=>this.toasts.filter(t=>!this.dismissedToasts.has(t.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},xn=new Db,Nb=(t,e)=>{let n=(e==null?void 0:e.id)||rh++;return xn.addToast({title:t,...e,id:n}),n},Ib=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",Ub=Nb,Fb=()=>xn.toasts,Ob=()=>xn.getActiveToasts();Object.assign(Ub,{success:xn.success,info:xn.info,warning:xn.warning,error:xn.error,custom:xn.custom,message:xn.message,promise:xn.promise,dismiss:xn.dismiss,loading:xn.loading},{getHistory:Fb,getToasts:Ob});function kb(t,{insertAt:e}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",e==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}kb(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Wl(t){return t.label!==void 0}var Bb=3,zb="32px",Vb="16px",Q0=4e3,Hb=356,Gb=14,Wb=20,Xb=200;function Jn(...t){return t.filter(Boolean).join(" ")}function jb(t){let[e,n]=t.split("-"),i=[];return e&&i.push(e),n&&i.push(n),i}var $b=t=>{var e,n,i,r,o,s,a,l,c,u,d;let{invert:h,toast:p,unstyled:v,interacting:g,setHeights:m,visibleToasts:f,heights:x,index:_,toasts:y,expanded:b,removeToast:E,defaultRichColors:A,closeButton:L,style:w,cancelButtonStyle:S,actionButtonStyle:P,className:U="",descriptionClassName:z="",duration:O,position:G,gap:H,loadingIcon:Y,expandByDefault:R,classNames:F,icons:W,closeButtonAriaLabel:se="Close toast",pauseWhenPageIsHidden:ce}=t,[Ee,be]=ue.useState(null),[ze,Z]=ue.useState(null),[q,ve]=ue.useState(!1),[Ie,Te]=ue.useState(!1),[We,_t]=ue.useState(!1),[He,at]=ue.useState(!1),[N,$e]=ue.useState(!1),[Ke,it]=ue.useState(0),[Se,pt]=ue.useState(0),Re=ue.useRef(p.duration||O||Q0),Ge=ue.useRef(null),C=ue.useRef(null),M=_===0,V=_+1<=f,J=p.type,ne=p.dismissible!==!1,K=p.className||"",Pe=p.descriptionClassName||"",pe=ue.useMemo(()=>x.findIndex(ie=>ie.toastId===p.id)||0,[x,p.id]),De=ue.useMemo(()=>{var ie;return(ie=p.closeButton)!=null?ie:L},[p.closeButton,L]),Ce=ue.useMemo(()=>p.duration||O||Q0,[p.duration,O]),re=ue.useRef(0),le=ue.useRef(0),Ue=ue.useRef(0),Le=ue.useRef(null),[_e,Be]=G.split("-"),I=ue.useMemo(()=>x.reduce((ie,xe,Oe)=>Oe>=pe?ie:ie+xe.height,0),[x,pe]),me=Lb(),he=p.invert||h,de=J==="loading";le.current=ue.useMemo(()=>pe*H+I,[pe,I]),ue.useEffect(()=>{Re.current=Ce},[Ce]),ue.useEffect(()=>{ve(!0)},[]),ue.useEffect(()=>{let ie=C.current;if(ie){let xe=ie.getBoundingClientRect().height;return pt(xe),m(Oe=>[{toastId:p.id,height:xe,position:p.position},...Oe]),()=>m(Oe=>Oe.filter(Qe=>Qe.toastId!==p.id))}},[m,p.id]),ue.useLayoutEffect(()=>{if(!q)return;let ie=C.current,xe=ie.style.height;ie.style.height="auto";let Oe=ie.getBoundingClientRect().height;ie.style.height=xe,pt(Oe),m(Qe=>Qe.find(Tt=>Tt.toastId===p.id)?Qe.map(Tt=>Tt.toastId===p.id?{...Tt,height:Oe}:Tt):[{toastId:p.id,height:Oe,position:p.position},...Qe])},[q,p.title,p.description,m,p.id]);let oe=ue.useCallback(()=>{Te(!0),it(le.current),m(ie=>ie.filter(xe=>xe.toastId!==p.id)),setTimeout(()=>{E(p)},Xb)},[p,E,m,le]);ue.useEffect(()=>{if(p.promise&&J==="loading"||p.duration===1/0||p.type==="loading")return;let ie;return b||g||ce&&me?(()=>{if(Ue.current<re.current){let xe=new Date().getTime()-re.current;Re.current=Re.current-xe}Ue.current=new Date().getTime()})():Re.current!==1/0&&(re.current=new Date().getTime(),ie=setTimeout(()=>{var xe;(xe=p.onAutoClose)==null||xe.call(p,p),oe()},Re.current)),()=>clearTimeout(ie)},[b,g,p,J,ce,me,oe]),ue.useEffect(()=>{p.delete&&oe()},[oe,p.delete]);function te(){var ie,xe,Oe;return W!=null&&W.loading?ue.createElement("div",{className:Jn(F==null?void 0:F.loader,(ie=p==null?void 0:p.classNames)==null?void 0:ie.loader,"sonner-loader"),"data-visible":J==="loading"},W.loading):Y?ue.createElement("div",{className:Jn(F==null?void 0:F.loader,(xe=p==null?void 0:p.classNames)==null?void 0:xe.loader,"sonner-loader"),"data-visible":J==="loading"},Y):ue.createElement(bb,{className:Jn(F==null?void 0:F.loader,(Oe=p==null?void 0:p.classNames)==null?void 0:Oe.loader),visible:J==="loading"})}return ue.createElement("li",{tabIndex:0,ref:C,className:Jn(U,K,F==null?void 0:F.toast,(e=p==null?void 0:p.classNames)==null?void 0:e.toast,F==null?void 0:F.default,F==null?void 0:F[J],(n=p==null?void 0:p.classNames)==null?void 0:n[J]),"data-sonner-toast":"","data-rich-colors":(i=p.richColors)!=null?i:A,"data-styled":!(p.jsx||p.unstyled||v),"data-mounted":q,"data-promise":!!p.promise,"data-swiped":N,"data-removed":Ie,"data-visible":V,"data-y-position":_e,"data-x-position":Be,"data-index":_,"data-front":M,"data-swiping":We,"data-dismissible":ne,"data-type":J,"data-invert":he,"data-swipe-out":He,"data-swipe-direction":ze,"data-expanded":!!(b||R&&q),style:{"--index":_,"--toasts-before":_,"--z-index":y.length-_,"--offset":`${Ie?Ke:le.current}px`,"--initial-height":R?"auto":`${Se}px`,...w,...p.style},onDragEnd:()=>{_t(!1),be(null),Le.current=null},onPointerDown:ie=>{de||!ne||(Ge.current=new Date,it(le.current),ie.target.setPointerCapture(ie.pointerId),ie.target.tagName!=="BUTTON"&&(_t(!0),Le.current={x:ie.clientX,y:ie.clientY}))},onPointerUp:()=>{var ie,xe,Oe,Qe;if(He||!ne)return;Le.current=null;let Tt=Number(((ie=C.current)==null?void 0:ie.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),It=Number(((xe=C.current)==null?void 0:xe.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Ii=new Date().getTime()-((Oe=Ge.current)==null?void 0:Oe.getTime()),hn=Ee==="x"?Tt:It,Qn=Math.abs(hn)/Ii;if(Math.abs(hn)>=Wb||Qn>.11){it(le.current),(Qe=p.onDismiss)==null||Qe.call(p,p),Z(Ee==="x"?Tt>0?"right":"left":It>0?"down":"up"),oe(),at(!0),$e(!1);return}_t(!1),be(null)},onPointerMove:ie=>{var xe,Oe,Qe,Tt;if(!Le.current||!ne||((xe=window.getSelection())==null?void 0:xe.toString().length)>0)return;let It=ie.clientY-Le.current.y,Ii=ie.clientX-Le.current.x,hn=(Oe=t.swipeDirections)!=null?Oe:jb(G);!Ee&&(Math.abs(Ii)>1||Math.abs(It)>1)&&be(Math.abs(Ii)>Math.abs(It)?"x":"y");let Qn={x:0,y:0};Ee==="y"?(hn.includes("top")||hn.includes("bottom"))&&(hn.includes("top")&&It<0||hn.includes("bottom")&&It>0)&&(Qn.y=It):Ee==="x"&&(hn.includes("left")||hn.includes("right"))&&(hn.includes("left")&&Ii<0||hn.includes("right")&&Ii>0)&&(Qn.x=Ii),(Math.abs(Qn.x)>0||Math.abs(Qn.y)>0)&&$e(!0),(Qe=C.current)==null||Qe.style.setProperty("--swipe-amount-x",`${Qn.x}px`),(Tt=C.current)==null||Tt.style.setProperty("--swipe-amount-y",`${Qn.y}px`)}},De&&!p.jsx?ue.createElement("button",{"aria-label":se,"data-disabled":de,"data-close-button":!0,onClick:de||!ne?()=>{}:()=>{var ie;oe(),(ie=p.onDismiss)==null||ie.call(p,p)},className:Jn(F==null?void 0:F.closeButton,(r=p==null?void 0:p.classNames)==null?void 0:r.closeButton)},(o=W==null?void 0:W.close)!=null?o:Pb):null,p.jsx||D.isValidElement(p.title)?p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title:ue.createElement(ue.Fragment,null,J||p.icon||p.promise?ue.createElement("div",{"data-icon":"",className:Jn(F==null?void 0:F.icon,(s=p==null?void 0:p.classNames)==null?void 0:s.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||te():null,p.type!=="loading"?p.icon||(W==null?void 0:W[J])||Mb(J):null):null,ue.createElement("div",{"data-content":"",className:Jn(F==null?void 0:F.content,(a=p==null?void 0:p.classNames)==null?void 0:a.content)},ue.createElement("div",{"data-title":"",className:Jn(F==null?void 0:F.title,(l=p==null?void 0:p.classNames)==null?void 0:l.title)},typeof p.title=="function"?p.title():p.title),p.description?ue.createElement("div",{"data-description":"",className:Jn(z,Pe,F==null?void 0:F.description,(c=p==null?void 0:p.classNames)==null?void 0:c.description)},typeof p.description=="function"?p.description():p.description):null),D.isValidElement(p.cancel)?p.cancel:p.cancel&&Wl(p.cancel)?ue.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||S,onClick:ie=>{var xe,Oe;Wl(p.cancel)&&ne&&((Oe=(xe=p.cancel).onClick)==null||Oe.call(xe,ie),oe())},className:Jn(F==null?void 0:F.cancelButton,(u=p==null?void 0:p.classNames)==null?void 0:u.cancelButton)},p.cancel.label):null,D.isValidElement(p.action)?p.action:p.action&&Wl(p.action)?ue.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||P,onClick:ie=>{var xe,Oe;Wl(p.action)&&((Oe=(xe=p.action).onClick)==null||Oe.call(xe,ie),!ie.defaultPrevented&&oe())},className:Jn(F==null?void 0:F.actionButton,(d=p==null?void 0:p.classNames)==null?void 0:d.actionButton)},p.action.label):null))};function Z0(){if(typeof window>"u"||typeof document>"u")return"ltr";let t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}function Yb(t,e){let n={};return[t,e].forEach((i,r)=>{let o=r===1,s=o?"--mobile-offset":"--offset",a=o?Vb:zb;function l(c){["top","right","bottom","left"].forEach(u=>{n[`${s}-${u}`]=typeof c=="number"?`${c}px`:c})}typeof i=="number"||typeof i=="string"?l(i):typeof i=="object"?["top","right","bottom","left"].forEach(c=>{i[c]===void 0?n[`${s}-${c}`]=a:n[`${s}-${c}`]=typeof i[c]=="number"?`${i[c]}px`:i[c]}):l(a)}),n}var qb=D.forwardRef(function(t,e){let{invert:n,position:i="bottom-right",hotkey:r=["altKey","KeyT"],expand:o,closeButton:s,className:a,offset:l,mobileOffset:c,theme:u="light",richColors:d,duration:h,style:p,visibleToasts:v=Bb,toastOptions:g,dir:m=Z0(),gap:f=Gb,loadingIcon:x,icons:_,containerAriaLabel:y="Notifications",pauseWhenPageIsHidden:b}=t,[E,A]=ue.useState([]),L=ue.useMemo(()=>Array.from(new Set([i].concat(E.filter(ce=>ce.position).map(ce=>ce.position)))),[E,i]),[w,S]=ue.useState([]),[P,U]=ue.useState(!1),[z,O]=ue.useState(!1),[G,H]=ue.useState(u!=="system"?u:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),Y=ue.useRef(null),R=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),F=ue.useRef(null),W=ue.useRef(!1),se=ue.useCallback(ce=>{A(Ee=>{var be;return(be=Ee.find(ze=>ze.id===ce.id))!=null&&be.delete||xn.dismiss(ce.id),Ee.filter(({id:ze})=>ze!==ce.id)})},[]);return ue.useEffect(()=>xn.subscribe(ce=>{if(ce.dismiss){A(Ee=>Ee.map(be=>be.id===ce.id?{...be,delete:!0}:be));return}setTimeout(()=>{V_.flushSync(()=>{A(Ee=>{let be=Ee.findIndex(ze=>ze.id===ce.id);return be!==-1?[...Ee.slice(0,be),{...Ee[be],...ce},...Ee.slice(be+1)]:[ce,...Ee]})})})}),[]),ue.useEffect(()=>{if(u!=="system"){H(u);return}if(u==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?H("dark"):H("light")),typeof window>"u")return;let ce=window.matchMedia("(prefers-color-scheme: dark)");try{ce.addEventListener("change",({matches:Ee})=>{H(Ee?"dark":"light")})}catch{ce.addListener(({matches:be})=>{try{H(be?"dark":"light")}catch(ze){console.error(ze)}})}},[u]),ue.useEffect(()=>{E.length<=1&&U(!1)},[E]),ue.useEffect(()=>{let ce=Ee=>{var be,ze;r.every(Z=>Ee[Z]||Ee.code===Z)&&(U(!0),(be=Y.current)==null||be.focus()),Ee.code==="Escape"&&(document.activeElement===Y.current||(ze=Y.current)!=null&&ze.contains(document.activeElement))&&U(!1)};return document.addEventListener("keydown",ce),()=>document.removeEventListener("keydown",ce)},[r]),ue.useEffect(()=>{if(Y.current)return()=>{F.current&&(F.current.focus({preventScroll:!0}),F.current=null,W.current=!1)}},[Y.current]),ue.createElement("section",{ref:e,"aria-label":`${y} ${R}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},L.map((ce,Ee)=>{var be;let[ze,Z]=ce.split("-");return E.length?ue.createElement("ol",{key:ce,dir:m==="auto"?Z0():m,tabIndex:-1,ref:Y,className:a,"data-sonner-toaster":!0,"data-theme":G,"data-y-position":ze,"data-lifted":P&&E.length>1&&!o,"data-x-position":Z,style:{"--front-toast-height":`${((be=w[0])==null?void 0:be.height)||0}px`,"--width":`${Hb}px`,"--gap":`${f}px`,...p,...Yb(l,c)},onBlur:q=>{W.current&&!q.currentTarget.contains(q.relatedTarget)&&(W.current=!1,F.current&&(F.current.focus({preventScroll:!0}),F.current=null))},onFocus:q=>{q.target instanceof HTMLElement&&q.target.dataset.dismissible==="false"||W.current||(W.current=!0,F.current=q.relatedTarget)},onMouseEnter:()=>U(!0),onMouseMove:()=>U(!0),onMouseLeave:()=>{z||U(!1)},onDragEnd:()=>U(!1),onPointerDown:q=>{q.target instanceof HTMLElement&&q.target.dataset.dismissible==="false"||O(!0)},onPointerUp:()=>O(!1)},E.filter(q=>!q.position&&Ee===0||q.position===ce).map((q,ve)=>{var Ie,Te;return ue.createElement($b,{key:q.id,icons:_,index:ve,toast:q,defaultRichColors:d,duration:(Ie=g==null?void 0:g.duration)!=null?Ie:h,className:g==null?void 0:g.className,descriptionClassName:g==null?void 0:g.descriptionClassName,invert:n,visibleToasts:v,closeButton:(Te=g==null?void 0:g.closeButton)!=null?Te:s,interacting:z,position:ce,style:g==null?void 0:g.style,unstyled:g==null?void 0:g.unstyled,classNames:g==null?void 0:g.classNames,cancelButtonStyle:g==null?void 0:g.cancelButtonStyle,actionButtonStyle:g==null?void 0:g.actionButtonStyle,removeToast:se,toasts:E.filter(We=>We.position==q.position),heights:w.filter(We=>We.position==q.position),setHeights:S,expandByDefault:o,gap:f,loadingIcon:x,expanded:P,pauseWhenPageIsHidden:b,swipeDirections:t.swipeDirections})})):null}))});const Kb=({...t})=>{const{theme:e="system"}=Eb();return j.jsx(qb,{theme:e,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})},Qb=["top","right","bottom","left"],Yr=Math.min,Ln=Math.max,ru=Math.round,Xl=Math.floor,Ri=t=>({x:t,y:t}),Zb={left:"right",right:"left",bottom:"top",top:"bottom"},Jb={start:"end",end:"start"};function oh(t,e,n){return Ln(t,Yr(e,n))}function or(t,e){return typeof t=="function"?t(e):t}function sr(t){return t.split("-")[0]}function Zs(t){return t.split("-")[1]}function rm(t){return t==="x"?"y":"x"}function om(t){return t==="y"?"height":"width"}const e3=new Set(["top","bottom"]);function bi(t){return e3.has(sr(t))?"y":"x"}function sm(t){return rm(bi(t))}function t3(t,e,n){n===void 0&&(n=!1);const i=Zs(t),r=sm(t),o=om(r);let s=r==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(s=ou(s)),[s,ou(s)]}function n3(t){const e=ou(t);return[sh(t),e,sh(e)]}function sh(t){return t.replace(/start|end/g,e=>Jb[e])}const J0=["left","right"],eg=["right","left"],i3=["top","bottom"],r3=["bottom","top"];function o3(t,e,n){switch(t){case"top":case"bottom":return n?e?eg:J0:e?J0:eg;case"left":case"right":return e?i3:r3;default:return[]}}function s3(t,e,n,i){const r=Zs(t);let o=o3(sr(t),n==="start",i);return r&&(o=o.map(s=>s+"-"+r),e&&(o=o.concat(o.map(sh)))),o}function ou(t){return t.replace(/left|right|bottom|top/g,e=>Zb[e])}function a3(t){return{top:0,right:0,bottom:0,left:0,...t}}function Cy(t){return typeof t!="number"?a3(t):{top:t,right:t,bottom:t,left:t}}function su(t){const{x:e,y:n,width:i,height:r}=t;return{width:i,height:r,top:n,left:e,right:e+i,bottom:n+r,x:e,y:n}}function tg(t,e,n){let{reference:i,floating:r}=t;const o=bi(e),s=sm(e),a=om(s),l=sr(e),c=o==="y",u=i.x+i.width/2-r.width/2,d=i.y+i.height/2-r.height/2,h=i[a]/2-r[a]/2;let p;switch(l){case"top":p={x:u,y:i.y-r.height};break;case"bottom":p={x:u,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:d};break;case"left":p={x:i.x-r.width,y:d};break;default:p={x:i.x,y:i.y}}switch(Zs(e)){case"start":p[s]-=h*(n&&c?-1:1);break;case"end":p[s]+=h*(n&&c?-1:1);break}return p}const l3=async(t,e,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:s}=n,a=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:d}=tg(c,i,l),h=i,p={},v=0;for(let g=0;g<a.length;g++){const{name:m,fn:f}=a[g],{x,y:_,data:y,reset:b}=await f({x:u,y:d,initialPlacement:i,placement:h,strategy:r,middlewareData:p,rects:c,platform:s,elements:{reference:t,floating:e}});u=x??u,d=_??d,p={...p,[m]:{...p[m],...y}},b&&v<=50&&(v++,typeof b=="object"&&(b.placement&&(h=b.placement),b.rects&&(c=b.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):b.rects),{x:u,y:d}=tg(c,h,l)),g=-1)}return{x:u,y:d,placement:h,strategy:r,middlewareData:p}};async function Za(t,e){var n;e===void 0&&(e={});const{x:i,y:r,platform:o,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:p=0}=or(e,t),v=Cy(p),m=a[h?d==="floating"?"reference":"floating":d],f=su(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(m)))==null||n?m:m.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),x=d==="floating"?{x:i,y:r,width:s.floating.width,height:s.floating.height}:s.reference,_=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),y=await(o.isElement==null?void 0:o.isElement(_))?await(o.getScale==null?void 0:o.getScale(_))||{x:1,y:1}:{x:1,y:1},b=su(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:x,offsetParent:_,strategy:l}):x);return{top:(f.top-b.top+v.top)/y.y,bottom:(b.bottom-f.bottom+v.bottom)/y.y,left:(f.left-b.left+v.left)/y.x,right:(b.right-f.right+v.right)/y.x}}const c3=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:o,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:u=0}=or(t,e)||{};if(c==null)return{};const d=Cy(u),h={x:n,y:i},p=sm(r),v=om(p),g=await s.getDimensions(c),m=p==="y",f=m?"top":"left",x=m?"bottom":"right",_=m?"clientHeight":"clientWidth",y=o.reference[v]+o.reference[p]-h[p]-o.floating[v],b=h[p]-o.reference[p],E=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let A=E?E[_]:0;(!A||!await(s.isElement==null?void 0:s.isElement(E)))&&(A=a.floating[_]||o.floating[v]);const L=y/2-b/2,w=A/2-g[v]/2-1,S=Yr(d[f],w),P=Yr(d[x],w),U=S,z=A-g[v]-P,O=A/2-g[v]/2+L,G=oh(U,O,z),H=!l.arrow&&Zs(r)!=null&&O!==G&&o.reference[v]/2-(O<U?S:P)-g[v]/2<0,Y=H?O<U?O-U:O-z:0;return{[p]:h[p]+Y,data:{[p]:G,centerOffset:O-G-Y,...H&&{alignmentOffset:Y}},reset:H}}}),u3=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:r,middlewareData:o,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:g=!0,...m}=or(t,e);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const f=sr(r),x=bi(a),_=sr(a)===a,y=await(l.isRTL==null?void 0:l.isRTL(c.floating)),b=h||(_||!g?[ou(a)]:n3(a)),E=v!=="none";!h&&E&&b.push(...s3(a,g,v,y));const A=[a,...b],L=await Za(e,m),w=[];let S=((i=o.flip)==null?void 0:i.overflows)||[];if(u&&w.push(L[f]),d){const O=t3(r,s,y);w.push(L[O[0]],L[O[1]])}if(S=[...S,{placement:r,overflows:w}],!w.every(O=>O<=0)){var P,U;const O=(((P=o.flip)==null?void 0:P.index)||0)+1,G=A[O];if(G&&(!(d==="alignment"?x!==bi(G):!1)||S.every(R=>R.overflows[0]>0&&bi(R.placement)===x)))return{data:{index:O,overflows:S},reset:{placement:G}};let H=(U=S.filter(Y=>Y.overflows[0]<=0).sort((Y,R)=>Y.overflows[1]-R.overflows[1])[0])==null?void 0:U.placement;if(!H)switch(p){case"bestFit":{var z;const Y=(z=S.filter(R=>{if(E){const F=bi(R.placement);return F===x||F==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(F=>F>0).reduce((F,W)=>F+W,0)]).sort((R,F)=>R[1]-F[1])[0])==null?void 0:z[0];Y&&(H=Y);break}case"initialPlacement":H=a;break}if(r!==H)return{reset:{placement:H}}}return{}}}};function ng(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function ig(t){return Qb.some(e=>t[e]>=0)}const d3=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:i="referenceHidden",...r}=or(t,e);switch(i){case"referenceHidden":{const o=await Za(e,{...r,elementContext:"reference"}),s=ng(o,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:ig(s)}}}case"escaped":{const o=await Za(e,{...r,altBoundary:!0}),s=ng(o,n.floating);return{data:{escapedOffsets:s,escaped:ig(s)}}}default:return{}}}}},Ry=new Set(["left","top"]);async function f3(t,e){const{placement:n,platform:i,elements:r}=t,o=await(i.isRTL==null?void 0:i.isRTL(r.floating)),s=sr(n),a=Zs(n),l=bi(n)==="y",c=Ry.has(s)?-1:1,u=o&&l?-1:1,d=or(e,t);let{mainAxis:h,crossAxis:p,alignmentAxis:v}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof v=="number"&&(p=a==="end"?v*-1:v),l?{x:p*u,y:h*c}:{x:h*c,y:p*u}}const h3=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:r,y:o,placement:s,middlewareData:a}=e,l=await f3(e,t);return s===((n=a.offset)==null?void 0:n.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:o+l.y,data:{...l,placement:s}}}}},p3=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:r}=e,{mainAxis:o=!0,crossAxis:s=!1,limiter:a={fn:m=>{let{x:f,y:x}=m;return{x:f,y:x}}},...l}=or(t,e),c={x:n,y:i},u=await Za(e,l),d=bi(sr(r)),h=rm(d);let p=c[h],v=c[d];if(o){const m=h==="y"?"top":"left",f=h==="y"?"bottom":"right",x=p+u[m],_=p-u[f];p=oh(x,p,_)}if(s){const m=d==="y"?"top":"left",f=d==="y"?"bottom":"right",x=v+u[m],_=v-u[f];v=oh(x,v,_)}const g=a.fn({...e,[h]:p,[d]:v});return{...g,data:{x:g.x-n,y:g.y-i,enabled:{[h]:o,[d]:s}}}}}},m3=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:i,placement:r,rects:o,middlewareData:s}=e,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=or(t,e),u={x:n,y:i},d=bi(r),h=rm(d);let p=u[h],v=u[d];const g=or(a,e),m=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(l){const _=h==="y"?"height":"width",y=o.reference[h]-o.floating[_]+m.mainAxis,b=o.reference[h]+o.reference[_]-m.mainAxis;p<y?p=y:p>b&&(p=b)}if(c){var f,x;const _=h==="y"?"width":"height",y=Ry.has(sr(r)),b=o.reference[d]-o.floating[_]+(y&&((f=s.offset)==null?void 0:f[d])||0)+(y?0:m.crossAxis),E=o.reference[d]+o.reference[_]+(y?0:((x=s.offset)==null?void 0:x[d])||0)-(y?m.crossAxis:0);v<b?v=b:v>E&&(v=E)}return{[h]:p,[d]:v}}}},g3=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,i;const{placement:r,rects:o,platform:s,elements:a}=e,{apply:l=()=>{},...c}=or(t,e),u=await Za(e,c),d=sr(r),h=Zs(r),p=bi(r)==="y",{width:v,height:g}=o.floating;let m,f;d==="top"||d==="bottom"?(m=d,f=h===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(f=d,m=h==="end"?"top":"bottom");const x=g-u.top-u.bottom,_=v-u.left-u.right,y=Yr(g-u[m],x),b=Yr(v-u[f],_),E=!e.middlewareData.shift;let A=y,L=b;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(L=_),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(A=x),E&&!h){const S=Ln(u.left,0),P=Ln(u.right,0),U=Ln(u.top,0),z=Ln(u.bottom,0);p?L=v-2*(S!==0||P!==0?S+P:Ln(u.left,u.right)):A=g-2*(U!==0||z!==0?U+z:Ln(u.top,u.bottom))}await l({...e,availableWidth:L,availableHeight:A});const w=await s.getDimensions(a.floating);return v!==w.width||g!==w.height?{reset:{rects:!0}}:{}}}};function Nu(){return typeof window<"u"}function Js(t){return Py(t)?(t.nodeName||"").toLowerCase():"#document"}function In(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ni(t){var e;return(e=(Py(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Py(t){return Nu()?t instanceof Node||t instanceof In(t).Node:!1}function gi(t){return Nu()?t instanceof Element||t instanceof In(t).Element:!1}function Li(t){return Nu()?t instanceof HTMLElement||t instanceof In(t).HTMLElement:!1}function rg(t){return!Nu()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof In(t).ShadowRoot}const x3=new Set(["inline","contents"]);function gl(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=xi(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!x3.has(r)}const v3=new Set(["table","td","th"]);function _3(t){return v3.has(Js(t))}const y3=[":popover-open",":modal"];function Iu(t){return y3.some(e=>{try{return t.matches(e)}catch{return!1}})}const S3=["transform","translate","scale","rotate","perspective"],E3=["transform","translate","scale","rotate","perspective","filter"],M3=["paint","layout","strict","content"];function am(t){const e=lm(),n=gi(t)?xi(t):t;return S3.some(i=>n[i]?n[i]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||E3.some(i=>(n.willChange||"").includes(i))||M3.some(i=>(n.contain||"").includes(i))}function w3(t){let e=qr(t);for(;Li(e)&&!Vs(e);){if(am(e))return e;if(Iu(e))return null;e=qr(e)}return null}function lm(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const b3=new Set(["html","body","#document"]);function Vs(t){return b3.has(Js(t))}function xi(t){return In(t).getComputedStyle(t)}function Uu(t){return gi(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function qr(t){if(Js(t)==="html")return t;const e=t.assignedSlot||t.parentNode||rg(t)&&t.host||Ni(t);return rg(e)?e.host:e}function Ly(t){const e=qr(t);return Vs(e)?t.ownerDocument?t.ownerDocument.body:t.body:Li(e)&&gl(e)?e:Ly(e)}function Ja(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=Ly(t),o=r===((i=t.ownerDocument)==null?void 0:i.body),s=In(r);if(o){const a=ah(s);return e.concat(s,s.visualViewport||[],gl(r)?r:[],a&&n?Ja(a):[])}return e.concat(r,Ja(r,[],n))}function ah(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Dy(t){const e=xi(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=Li(t),o=r?t.offsetWidth:n,s=r?t.offsetHeight:i,a=ru(n)!==o||ru(i)!==s;return a&&(n=o,i=s),{width:n,height:i,$:a}}function cm(t){return gi(t)?t:t.contextElement}function Es(t){const e=cm(t);if(!Li(e))return Ri(1);const n=e.getBoundingClientRect(),{width:i,height:r,$:o}=Dy(e);let s=(o?ru(n.width):n.width)/i,a=(o?ru(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const T3=Ri(0);function Ny(t){const e=In(t);return!lm()||!e.visualViewport?T3:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function A3(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==In(t)?!1:e}function Io(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),o=cm(t);let s=Ri(1);e&&(i?gi(i)&&(s=Es(i)):s=Es(t));const a=A3(o,n,i)?Ny(o):Ri(0);let l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,u=r.width/s.x,d=r.height/s.y;if(o){const h=In(o),p=i&&gi(i)?In(i):i;let v=h,g=ah(v);for(;g&&i&&p!==v;){const m=Es(g),f=g.getBoundingClientRect(),x=xi(g),_=f.left+(g.clientLeft+parseFloat(x.paddingLeft))*m.x,y=f.top+(g.clientTop+parseFloat(x.paddingTop))*m.y;l*=m.x,c*=m.y,u*=m.x,d*=m.y,l+=_,c+=y,v=In(g),g=ah(v)}}return su({width:u,height:d,x:l,y:c})}function um(t,e){const n=Uu(t).scrollLeft;return e?e.left+n:Io(Ni(t)).left+n}function Iy(t,e,n){n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=i.left+e.scrollLeft-(n?0:um(t,i)),o=i.top+e.scrollTop;return{x:r,y:o}}function C3(t){let{elements:e,rect:n,offsetParent:i,strategy:r}=t;const o=r==="fixed",s=Ni(i),a=e?Iu(e.floating):!1;if(i===s||a&&o)return n;let l={scrollLeft:0,scrollTop:0},c=Ri(1);const u=Ri(0),d=Li(i);if((d||!d&&!o)&&((Js(i)!=="body"||gl(s))&&(l=Uu(i)),Li(i))){const p=Io(i);c=Es(i),u.x=p.x+i.clientLeft,u.y=p.y+i.clientTop}const h=s&&!d&&!o?Iy(s,l,!0):Ri(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x+h.x,y:n.y*c.y-l.scrollTop*c.y+u.y+h.y}}function R3(t){return Array.from(t.getClientRects())}function P3(t){const e=Ni(t),n=Uu(t),i=t.ownerDocument.body,r=Ln(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),o=Ln(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+um(t);const a=-n.scrollTop;return xi(i).direction==="rtl"&&(s+=Ln(e.clientWidth,i.clientWidth)-r),{width:r,height:o,x:s,y:a}}function L3(t,e){const n=In(t),i=Ni(t),r=n.visualViewport;let o=i.clientWidth,s=i.clientHeight,a=0,l=0;if(r){o=r.width,s=r.height;const c=lm();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:o,height:s,x:a,y:l}}const D3=new Set(["absolute","fixed"]);function N3(t,e){const n=Io(t,!0,e==="fixed"),i=n.top+t.clientTop,r=n.left+t.clientLeft,o=Li(t)?Es(t):Ri(1),s=t.clientWidth*o.x,a=t.clientHeight*o.y,l=r*o.x,c=i*o.y;return{width:s,height:a,x:l,y:c}}function og(t,e,n){let i;if(e==="viewport")i=L3(t,n);else if(e==="document")i=P3(Ni(t));else if(gi(e))i=N3(e,n);else{const r=Ny(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return su(i)}function Uy(t,e){const n=qr(t);return n===e||!gi(n)||Vs(n)?!1:xi(n).position==="fixed"||Uy(n,e)}function I3(t,e){const n=e.get(t);if(n)return n;let i=Ja(t,[],!1).filter(a=>gi(a)&&Js(a)!=="body"),r=null;const o=xi(t).position==="fixed";let s=o?qr(t):t;for(;gi(s)&&!Vs(s);){const a=xi(s),l=am(s);!l&&a.position==="fixed"&&(r=null),(o?!l&&!r:!l&&a.position==="static"&&!!r&&D3.has(r.position)||gl(s)&&!l&&Uy(t,s))?i=i.filter(u=>u!==s):r=a,s=qr(s)}return e.set(t,i),i}function U3(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t;const s=[...n==="clippingAncestors"?Iu(e)?[]:I3(e,this._c):[].concat(n),i],a=s[0],l=s.reduce((c,u)=>{const d=og(e,u,r);return c.top=Ln(d.top,c.top),c.right=Yr(d.right,c.right),c.bottom=Yr(d.bottom,c.bottom),c.left=Ln(d.left,c.left),c},og(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function F3(t){const{width:e,height:n}=Dy(t);return{width:e,height:n}}function O3(t,e,n){const i=Li(e),r=Ni(e),o=n==="fixed",s=Io(t,!0,o,e);let a={scrollLeft:0,scrollTop:0};const l=Ri(0);function c(){l.x=um(r)}if(i||!i&&!o)if((Js(e)!=="body"||gl(r))&&(a=Uu(e)),i){const p=Io(e,!0,o,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else r&&c();o&&!i&&r&&c();const u=r&&!i&&!o?Iy(r,a):Ri(0),d=s.left+a.scrollLeft-l.x-u.x,h=s.top+a.scrollTop-l.y-u.y;return{x:d,y:h,width:s.width,height:s.height}}function Td(t){return xi(t).position==="static"}function sg(t,e){if(!Li(t)||xi(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return Ni(t)===n&&(n=n.ownerDocument.body),n}function Fy(t,e){const n=In(t);if(Iu(t))return n;if(!Li(t)){let r=qr(t);for(;r&&!Vs(r);){if(gi(r)&&!Td(r))return r;r=qr(r)}return n}let i=sg(t,e);for(;i&&_3(i)&&Td(i);)i=sg(i,e);return i&&Vs(i)&&Td(i)&&!am(i)?n:i||w3(t)||n}const k3=async function(t){const e=this.getOffsetParent||Fy,n=this.getDimensions,i=await n(t.floating);return{reference:O3(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function B3(t){return xi(t).direction==="rtl"}const z3={convertOffsetParentRelativeRectToViewportRelativeRect:C3,getDocumentElement:Ni,getClippingRect:U3,getOffsetParent:Fy,getElementRects:k3,getClientRects:R3,getDimensions:F3,getScale:Es,isElement:gi,isRTL:B3};function Oy(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function V3(t,e){let n=null,i;const r=Ni(t);function o(){var a;clearTimeout(i),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const c=t.getBoundingClientRect(),{left:u,top:d,width:h,height:p}=c;if(a||e(),!h||!p)return;const v=Xl(d),g=Xl(r.clientWidth-(u+h)),m=Xl(r.clientHeight-(d+p)),f=Xl(u),_={rootMargin:-v+"px "+-g+"px "+-m+"px "+-f+"px",threshold:Ln(0,Yr(1,l))||1};let y=!0;function b(E){const A=E[0].intersectionRatio;if(A!==l){if(!y)return s();A?s(!1,A):i=setTimeout(()=>{s(!1,1e-7)},1e3)}A===1&&!Oy(c,t.getBoundingClientRect())&&s(),y=!1}try{n=new IntersectionObserver(b,{..._,root:r.ownerDocument})}catch{n=new IntersectionObserver(b,_)}n.observe(t)}return s(!0),o}function H3(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=cm(t),u=r||o?[...c?Ja(c):[],...Ja(e)]:[];u.forEach(f=>{r&&f.addEventListener("scroll",n,{passive:!0}),o&&f.addEventListener("resize",n)});const d=c&&a?V3(c,n):null;let h=-1,p=null;s&&(p=new ResizeObserver(f=>{let[x]=f;x&&x.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var _;(_=p)==null||_.observe(e)})),n()}),c&&!l&&p.observe(c),p.observe(e));let v,g=l?Io(t):null;l&&m();function m(){const f=Io(t);g&&!Oy(g,f)&&n(),g=f,v=requestAnimationFrame(m)}return n(),()=>{var f;u.forEach(x=>{r&&x.removeEventListener("scroll",n),o&&x.removeEventListener("resize",n)}),d==null||d(),(f=p)==null||f.disconnect(),p=null,l&&cancelAnimationFrame(v)}}const G3=h3,W3=p3,X3=u3,j3=g3,$3=d3,ag=c3,Y3=m3,q3=(t,e,n)=>{const i=new Map,r={platform:z3,...n},o={...r.platform,_c:i};return l3(t,e,{...r,platform:o})};var K3=typeof document<"u",Q3=function(){},Cc=K3?D.useLayoutEffect:Q3;function au(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,i,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;i--!==0;)if(!au(t[i],e[i]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(i=n;i--!==0;)if(!{}.hasOwnProperty.call(e,r[i]))return!1;for(i=n;i--!==0;){const o=r[i];if(!(o==="_owner"&&t.$$typeof)&&!au(t[o],e[o]))return!1}return!0}return t!==t&&e!==e}function ky(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function lg(t,e){const n=ky(t);return Math.round(e*n)/n}function Ad(t){const e=D.useRef(t);return Cc(()=>{e.current=t}),e}function Z3(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:i=[],platform:r,elements:{reference:o,floating:s}={},transform:a=!0,whileElementsMounted:l,open:c}=t,[u,d]=D.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[h,p]=D.useState(i);au(h,i)||p(i);const[v,g]=D.useState(null),[m,f]=D.useState(null),x=D.useCallback(R=>{R!==E.current&&(E.current=R,g(R))},[]),_=D.useCallback(R=>{R!==A.current&&(A.current=R,f(R))},[]),y=o||v,b=s||m,E=D.useRef(null),A=D.useRef(null),L=D.useRef(u),w=l!=null,S=Ad(l),P=Ad(r),U=Ad(c),z=D.useCallback(()=>{if(!E.current||!A.current)return;const R={placement:e,strategy:n,middleware:h};P.current&&(R.platform=P.current),q3(E.current,A.current,R).then(F=>{const W={...F,isPositioned:U.current!==!1};O.current&&!au(L.current,W)&&(L.current=W,pl.flushSync(()=>{d(W)}))})},[h,e,n,P,U]);Cc(()=>{c===!1&&L.current.isPositioned&&(L.current.isPositioned=!1,d(R=>({...R,isPositioned:!1})))},[c]);const O=D.useRef(!1);Cc(()=>(O.current=!0,()=>{O.current=!1}),[]),Cc(()=>{if(y&&(E.current=y),b&&(A.current=b),y&&b){if(S.current)return S.current(y,b,z);z()}},[y,b,z,S,w]);const G=D.useMemo(()=>({reference:E,floating:A,setReference:x,setFloating:_}),[x,_]),H=D.useMemo(()=>({reference:y,floating:b}),[y,b]),Y=D.useMemo(()=>{const R={position:n,left:0,top:0};if(!H.floating)return R;const F=lg(H.floating,u.x),W=lg(H.floating,u.y);return a?{...R,transform:"translate("+F+"px, "+W+"px)",...ky(H.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:F,top:W}},[n,a,H.floating,u.x,u.y]);return D.useMemo(()=>({...u,update:z,refs:G,elements:H,floatingStyles:Y}),[u,z,G,H,Y])}const J3=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:i,padding:r}=typeof t=="function"?t(n):t;return i&&e(i)?i.current!=null?ag({element:i.current,padding:r}).fn(n):{}:i?ag({element:i,padding:r}).fn(n):{}}}},eT=(t,e)=>({...G3(t),options:[t,e]}),tT=(t,e)=>({...W3(t),options:[t,e]}),nT=(t,e)=>({...Y3(t),options:[t,e]}),iT=(t,e)=>({...X3(t),options:[t,e]}),rT=(t,e)=>({...j3(t),options:[t,e]}),oT=(t,e)=>({...$3(t),options:[t,e]}),sT=(t,e)=>({...J3(t),options:[t,e]});var aT="Arrow",By=D.forwardRef((t,e)=>{const{children:n,width:i=10,height:r=5,...o}=t;return j.jsx(bn.svg,{...o,ref:e,width:i,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:j.jsx("polygon",{points:"0,0 30,0 15,10"})})});By.displayName=aT;var lT=By;function cT(t){const[e,n]=D.useState(void 0);return $r(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const i=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const o=r[0];let s,a;if("borderBoxSize"in o){const l=o.borderBoxSize,c=Array.isArray(l)?l[0]:l;s=c.inlineSize,a=c.blockSize}else s=t.offsetWidth,a=t.offsetHeight;n({width:s,height:a})});return i.observe(t,{box:"border-box"}),()=>i.unobserve(t)}else n(void 0)},[t]),e}var zy="Popper",[Vy,Hy]=Pu(zy),[hN,Gy]=Vy(zy),Wy="PopperAnchor",Xy=D.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:i,...r}=t,o=Gy(Wy,n),s=D.useRef(null),a=mi(e,s);return D.useEffect(()=>{o.onAnchorChange((i==null?void 0:i.current)||s.current)}),i?null:j.jsx(bn.div,{...r,ref:a})});Xy.displayName=Wy;var dm="PopperContent",[uT,dT]=Vy(dm),jy=D.forwardRef((t,e)=>{var q,ve,Ie,Te,We,_t;const{__scopePopper:n,side:i="bottom",sideOffset:r=0,align:o="center",alignOffset:s=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:c=[],collisionPadding:u=0,sticky:d="partial",hideWhenDetached:h=!1,updatePositionStrategy:p="optimized",onPlaced:v,...g}=t,m=Gy(dm,n),[f,x]=D.useState(null),_=mi(e,He=>x(He)),[y,b]=D.useState(null),E=cT(y),A=(E==null?void 0:E.width)??0,L=(E==null?void 0:E.height)??0,w=i+(o!=="center"?"-"+o:""),S=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},P=Array.isArray(c)?c:[c],U=P.length>0,z={padding:S,boundary:P.filter(hT),altBoundary:U},{refs:O,floatingStyles:G,placement:H,isPositioned:Y,middlewareData:R}=Z3({strategy:"fixed",placement:w,whileElementsMounted:(...He)=>H3(...He,{animationFrame:p==="always"}),elements:{reference:m.anchor},middleware:[eT({mainAxis:r+L,alignmentAxis:s}),l&&tT({mainAxis:!0,crossAxis:!1,limiter:d==="partial"?nT():void 0,...z}),l&&iT({...z}),rT({...z,apply:({elements:He,rects:at,availableWidth:N,availableHeight:$e})=>{const{width:Ke,height:it}=at.reference,Se=He.floating.style;Se.setProperty("--radix-popper-available-width",`${N}px`),Se.setProperty("--radix-popper-available-height",`${$e}px`),Se.setProperty("--radix-popper-anchor-width",`${Ke}px`),Se.setProperty("--radix-popper-anchor-height",`${it}px`)}}),y&&sT({element:y,padding:a}),pT({arrowWidth:A,arrowHeight:L}),h&&oT({strategy:"referenceHidden",...z})]}),[F,W]=qy(H),se=jr(v);$r(()=>{Y&&(se==null||se())},[Y,se]);const ce=(q=R.arrow)==null?void 0:q.x,Ee=(ve=R.arrow)==null?void 0:ve.y,be=((Ie=R.arrow)==null?void 0:Ie.centerOffset)!==0,[ze,Z]=D.useState();return $r(()=>{f&&Z(window.getComputedStyle(f).zIndex)},[f]),j.jsx("div",{ref:O.setFloating,"data-radix-popper-content-wrapper":"",style:{...G,transform:Y?G.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ze,"--radix-popper-transform-origin":[(Te=R.transformOrigin)==null?void 0:Te.x,(We=R.transformOrigin)==null?void 0:We.y].join(" "),...((_t=R.hide)==null?void 0:_t.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:j.jsx(uT,{scope:n,placedSide:F,onArrowChange:b,arrowX:ce,arrowY:Ee,shouldHideArrow:be,children:j.jsx(bn.div,{"data-side":F,"data-align":W,...g,ref:_,style:{...g.style,animation:Y?void 0:"none"}})})})});jy.displayName=dm;var $y="PopperArrow",fT={top:"bottom",right:"left",bottom:"top",left:"right"},Yy=D.forwardRef(function(e,n){const{__scopePopper:i,...r}=e,o=dT($y,i),s=fT[o.placedSide];return j.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:j.jsx(lT,{...r,ref:n,style:{...r.style,display:"block"}})})});Yy.displayName=$y;function hT(t){return t!==null}var pT=t=>({name:"transformOrigin",options:t,fn(e){var m,f,x;const{placement:n,rects:i,middlewareData:r}=e,s=((m=r.arrow)==null?void 0:m.centerOffset)!==0,a=s?0:t.arrowWidth,l=s?0:t.arrowHeight,[c,u]=qy(n),d={start:"0%",center:"50%",end:"100%"}[u],h=(((f=r.arrow)==null?void 0:f.x)??0)+a/2,p=(((x=r.arrow)==null?void 0:x.y)??0)+l/2;let v="",g="";return c==="bottom"?(v=s?d:`${h}px`,g=`${-l}px`):c==="top"?(v=s?d:`${h}px`,g=`${i.floating.height+l}px`):c==="right"?(v=`${-l}px`,g=s?d:`${p}px`):c==="left"&&(v=`${i.floating.width+l}px`,g=s?d:`${p}px`),{data:{x:v,y:g}}}});function qy(t){const[e,n="center"]=t.split("-");return[e,n]}var mT=Xy,gT=jy,xT=Yy,[Fu,pN]=Pu("Tooltip",[Hy]),fm=Hy(),Ky="TooltipProvider",vT=700,cg="tooltip.open",[_T,Qy]=Fu(Ky),Zy=t=>{const{__scopeTooltip:e,delayDuration:n=vT,skipDelayDuration:i=300,disableHoverableContent:r=!1,children:o}=t,s=D.useRef(!0),a=D.useRef(!1),l=D.useRef(0);return D.useEffect(()=>{const c=l.current;return()=>window.clearTimeout(c)},[]),j.jsx(_T,{scope:e,isOpenDelayedRef:s,delayDuration:n,onOpen:D.useCallback(()=>{window.clearTimeout(l.current),s.current=!1},[]),onClose:D.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>s.current=!0,i)},[i]),isPointerInTransitRef:a,onPointerInTransitChange:D.useCallback(c=>{a.current=c},[]),disableHoverableContent:r,children:o})};Zy.displayName=Ky;var Jy="Tooltip",[mN,Ou]=Fu(Jy),lh="TooltipTrigger",yT=D.forwardRef((t,e)=>{const{__scopeTooltip:n,...i}=t,r=Ou(lh,n),o=Qy(lh,n),s=fm(n),a=D.useRef(null),l=mi(e,a,r.onTriggerChange),c=D.useRef(!1),u=D.useRef(!1),d=D.useCallback(()=>c.current=!1,[]);return D.useEffect(()=>()=>document.removeEventListener("pointerup",d),[d]),j.jsx(mT,{asChild:!0,...s,children:j.jsx(bn.button,{"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute,...i,ref:l,onPointerMove:kt(t.onPointerMove,h=>{h.pointerType!=="touch"&&!u.current&&!o.isPointerInTransitRef.current&&(r.onTriggerEnter(),u.current=!0)}),onPointerLeave:kt(t.onPointerLeave,()=>{r.onTriggerLeave(),u.current=!1}),onPointerDown:kt(t.onPointerDown,()=>{r.open&&r.onClose(),c.current=!0,document.addEventListener("pointerup",d,{once:!0})}),onFocus:kt(t.onFocus,()=>{c.current||r.onOpen()}),onBlur:kt(t.onBlur,r.onClose),onClick:kt(t.onClick,r.onClose)})})});yT.displayName=lh;var ST="TooltipPortal",[gN,ET]=Fu(ST,{forceMount:void 0}),Hs="TooltipContent",eS=D.forwardRef((t,e)=>{const n=ET(Hs,t.__scopeTooltip),{forceMount:i=n.forceMount,side:r="top",...o}=t,s=Ou(Hs,t.__scopeTooltip);return j.jsx(Jp,{present:i||s.open,children:s.disableHoverableContent?j.jsx(tS,{side:r,...o,ref:e}):j.jsx(MT,{side:r,...o,ref:e})})}),MT=D.forwardRef((t,e)=>{const n=Ou(Hs,t.__scopeTooltip),i=Qy(Hs,t.__scopeTooltip),r=D.useRef(null),o=mi(e,r),[s,a]=D.useState(null),{trigger:l,onClose:c}=n,u=r.current,{onPointerInTransitChange:d}=i,h=D.useCallback(()=>{a(null),d(!1)},[d]),p=D.useCallback((v,g)=>{const m=v.currentTarget,f={x:v.clientX,y:v.clientY},x=CT(f,m.getBoundingClientRect()),_=RT(f,x),y=PT(g.getBoundingClientRect()),b=DT([..._,...y]);a(b),d(!0)},[d]);return D.useEffect(()=>()=>h(),[h]),D.useEffect(()=>{if(l&&u){const v=m=>p(m,u),g=m=>p(m,l);return l.addEventListener("pointerleave",v),u.addEventListener("pointerleave",g),()=>{l.removeEventListener("pointerleave",v),u.removeEventListener("pointerleave",g)}}},[l,u,p,h]),D.useEffect(()=>{if(s){const v=g=>{const m=g.target,f={x:g.clientX,y:g.clientY},x=(l==null?void 0:l.contains(m))||(u==null?void 0:u.contains(m)),_=!LT(f,s);x?h():_&&(h(),c())};return document.addEventListener("pointermove",v),()=>document.removeEventListener("pointermove",v)}},[l,u,s,c,h]),j.jsx(tS,{...t,ref:o})}),[wT,bT]=Fu(Jy,{isInside:!1}),TT=FM("TooltipContent"),tS=D.forwardRef((t,e)=>{const{__scopeTooltip:n,children:i,"aria-label":r,onEscapeKeyDown:o,onPointerDownOutside:s,...a}=t,l=Ou(Hs,n),c=fm(n),{onClose:u}=l;return D.useEffect(()=>(document.addEventListener(cg,u),()=>document.removeEventListener(cg,u)),[u]),D.useEffect(()=>{if(l.trigger){const d=h=>{const p=h.target;p!=null&&p.contains(l.trigger)&&u()};return window.addEventListener("scroll",d,{capture:!0}),()=>window.removeEventListener("scroll",d,{capture:!0})}},[l.trigger,u]),j.jsx(Zp,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:d=>d.preventDefault(),onDismiss:u,children:j.jsxs(gT,{"data-state":l.stateAttribute,...c,...a,ref:e,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[j.jsx(TT,{children:i}),j.jsx(wT,{scope:n,isInside:!0,children:j.jsx(aw,{id:l.contentId,role:"tooltip",children:r||i})})]})})});eS.displayName=Hs;var nS="TooltipArrow",AT=D.forwardRef((t,e)=>{const{__scopeTooltip:n,...i}=t,r=fm(n);return bT(nS,n).isInside?null:j.jsx(xT,{...r,...i,ref:e})});AT.displayName=nS;function CT(t,e){const n=Math.abs(e.top-t.y),i=Math.abs(e.bottom-t.y),r=Math.abs(e.right-t.x),o=Math.abs(e.left-t.x);switch(Math.min(n,i,r,o)){case o:return"left";case r:return"right";case n:return"top";case i:return"bottom";default:throw new Error("unreachable")}}function RT(t,e,n=5){const i=[];switch(e){case"top":i.push({x:t.x-n,y:t.y+n},{x:t.x+n,y:t.y+n});break;case"bottom":i.push({x:t.x-n,y:t.y-n},{x:t.x+n,y:t.y-n});break;case"left":i.push({x:t.x+n,y:t.y-n},{x:t.x+n,y:t.y+n});break;case"right":i.push({x:t.x-n,y:t.y-n},{x:t.x-n,y:t.y+n});break}return i}function PT(t){const{top:e,right:n,bottom:i,left:r}=t;return[{x:r,y:e},{x:n,y:e},{x:n,y:i},{x:r,y:i}]}function LT(t,e){const{x:n,y:i}=t;let r=!1;for(let o=0,s=e.length-1;o<e.length;s=o++){const a=e[o],l=e[s],c=a.x,u=a.y,d=l.x,h=l.y;u>i!=h>i&&n<(d-c)*(i-u)/(h-u)+c&&(r=!r)}return r}function DT(t){const e=t.slice();return e.sort((n,i)=>n.x<i.x?-1:n.x>i.x?1:n.y<i.y?-1:n.y>i.y?1:0),NT(e)}function NT(t){if(t.length<=1)return t.slice();const e=[];for(let i=0;i<t.length;i++){const r=t[i];for(;e.length>=2;){const o=e[e.length-1],s=e[e.length-2];if((o.x-s.x)*(r.y-s.y)>=(o.y-s.y)*(r.x-s.x))e.pop();else break}e.push(r)}e.pop();const n=[];for(let i=t.length-1;i>=0;i--){const r=t[i];for(;n.length>=2;){const o=n[n.length-1],s=n[n.length-2];if((o.x-s.x)*(r.y-s.y)>=(o.y-s.y)*(r.x-s.x))n.pop();else break}n.push(r)}return n.pop(),e.length===1&&n.length===1&&e[0].x===n[0].x&&e[0].y===n[0].y?e:e.concat(n)}var IT=Zy,iS=eS;const UT=IT,FT=D.forwardRef(({className:t,sideOffset:e=4,...n},i)=>j.jsx(iS,{ref:i,sideOffset:e,className:zo("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n}));FT.displayName=iS.displayName;var ku=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Bu=typeof window>"u"||"Deno"in globalThis;function ri(){}function OT(t,e){return typeof t=="function"?t(e):t}function kT(t){return typeof t=="number"&&t>=0&&t!==1/0}function BT(t,e){return Math.max(t+(e||0)-Date.now(),0)}function ch(t,e){return typeof t=="function"?t(e):t}function zT(t,e){return typeof t=="function"?t(e):t}function ug(t,e){const{type:n="all",exact:i,fetchStatus:r,predicate:o,queryKey:s,stale:a}=t;if(s){if(i){if(e.queryHash!==hm(s,e.options))return!1}else if(!tl(e.queryKey,s))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||r&&r!==e.state.fetchStatus||o&&!o(e))}function dg(t,e){const{exact:n,status:i,predicate:r,mutationKey:o}=t;if(o){if(!e.options.mutationKey)return!1;if(n){if(el(e.options.mutationKey)!==el(o))return!1}else if(!tl(e.options.mutationKey,o))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function hm(t,e){return((e==null?void 0:e.queryKeyHashFn)||el)(t)}function el(t){return JSON.stringify(t,(e,n)=>uh(n)?Object.keys(n).sort().reduce((i,r)=>(i[r]=n[r],i),{}):n)}function tl(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(n=>tl(t[n],e[n])):!1}function rS(t,e){if(t===e)return t;const n=fg(t)&&fg(e);if(n||uh(t)&&uh(e)){const i=n?t:Object.keys(t),r=i.length,o=n?e:Object.keys(e),s=o.length,a=n?[]:{},l=new Set(i);let c=0;for(let u=0;u<s;u++){const d=n?u:o[u];(!n&&l.has(d)||n)&&t[d]===void 0&&e[d]===void 0?(a[d]=void 0,c++):(a[d]=rS(t[d],e[d]),a[d]===t[d]&&t[d]!==void 0&&c++)}return r===s&&c===r?t:a}return e}function fg(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function uh(t){if(!hg(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!hg(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function hg(t){return Object.prototype.toString.call(t)==="[object Object]"}function VT(t){return new Promise(e=>{setTimeout(e,t)})}function HT(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?rS(t,e):e}function GT(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function WT(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var pm=Symbol();function oS(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===pm?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var yo,Tr,Ts,_x,XT=(_x=class extends ku{constructor(){super();ot(this,yo);ot(this,Tr);ot(this,Ts);Xe(this,Ts,e=>{if(!Bu&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){ee(this,Tr)||this.setEventListener(ee(this,Ts))}onUnsubscribe(){var e;this.hasListeners()||((e=ee(this,Tr))==null||e.call(this),Xe(this,Tr,void 0))}setEventListener(e){var n;Xe(this,Ts,e),(n=ee(this,Tr))==null||n.call(this),Xe(this,Tr,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){ee(this,yo)!==e&&(Xe(this,yo,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof ee(this,yo)=="boolean"?ee(this,yo):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},yo=new WeakMap,Tr=new WeakMap,Ts=new WeakMap,_x),sS=new XT,As,Ar,Cs,yx,jT=(yx=class extends ku{constructor(){super();ot(this,As,!0);ot(this,Ar);ot(this,Cs);Xe(this,Cs,e=>{if(!Bu&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){ee(this,Ar)||this.setEventListener(ee(this,Cs))}onUnsubscribe(){var e;this.hasListeners()||((e=ee(this,Ar))==null||e.call(this),Xe(this,Ar,void 0))}setEventListener(e){var n;Xe(this,Cs,e),(n=ee(this,Ar))==null||n.call(this),Xe(this,Ar,e(this.setOnline.bind(this)))}setOnline(e){ee(this,As)!==e&&(Xe(this,As,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return ee(this,As)}},As=new WeakMap,Ar=new WeakMap,Cs=new WeakMap,yx),lu=new jT;function $T(){let t,e;const n=new Promise((r,o)=>{t=r,e=o});n.status="pending",n.catch(()=>{});function i(r){Object.assign(n,r),delete n.resolve,delete n.reject}return n.resolve=r=>{i({status:"fulfilled",value:r}),t(r)},n.reject=r=>{i({status:"rejected",reason:r}),e(r)},n}function YT(t){return Math.min(1e3*2**t,3e4)}function aS(t){return(t??"online")==="online"?lu.isOnline():!0}var lS=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Cd(t){return t instanceof lS}function cS(t){let e=!1,n=0,i=!1,r;const o=$T(),s=g=>{var m;i||(h(new lS(g)),(m=t.abort)==null||m.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>sS.isFocused()&&(t.networkMode==="always"||lu.isOnline())&&t.canRun(),u=()=>aS(t.networkMode)&&t.canRun(),d=g=>{var m;i||(i=!0,(m=t.onSuccess)==null||m.call(t,g),r==null||r(),o.resolve(g))},h=g=>{var m;i||(i=!0,(m=t.onError)==null||m.call(t,g),r==null||r(),o.reject(g))},p=()=>new Promise(g=>{var m;r=f=>{(i||c())&&g(f)},(m=t.onPause)==null||m.call(t)}).then(()=>{var g;r=void 0,i||(g=t.onContinue)==null||g.call(t)}),v=()=>{if(i)return;let g;const m=n===0?t.initialPromise:void 0;try{g=m??t.fn()}catch(f){g=Promise.reject(f)}Promise.resolve(g).then(d).catch(f=>{var E;if(i)return;const x=t.retry??(Bu?0:3),_=t.retryDelay??YT,y=typeof _=="function"?_(n,f):_,b=x===!0||typeof x=="number"&&n<x||typeof x=="function"&&x(n,f);if(e||!b){h(f);return}n++,(E=t.onFail)==null||E.call(t,n,f),VT(y).then(()=>c()?void 0:p()).then(()=>{e?h(f):v()})})};return{promise:o,cancel:s,continue:()=>(r==null||r(),o),cancelRetry:a,continueRetry:l,canStart:u,start:()=>(u()?v():p().then(v),o)}}var qT=t=>setTimeout(t,0);function KT(){let t=[],e=0,n=a=>{a()},i=a=>{a()},r=qT;const o=a=>{e?t.push(a):r(()=>{n(a)})},s=()=>{const a=t;t=[],a.length&&r(()=>{i(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||s()}return l},batchCalls:a=>(...l)=>{o(()=>{a(...l)})},schedule:o,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{r=a}}}var ln=KT(),So,Sx,uS=(Sx=class{constructor(){ot(this,So)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),kT(this.gcTime)&&Xe(this,So,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Bu?1/0:5*60*1e3))}clearGcTimeout(){ee(this,So)&&(clearTimeout(ee(this,So)),Xe(this,So,void 0))}},So=new WeakMap,Sx),Rs,Eo,Hn,Mo,en,al,wo,oi,Hi,Ex,QT=(Ex=class extends uS{constructor(e){super();ot(this,oi);ot(this,Rs);ot(this,Eo);ot(this,Hn);ot(this,Mo);ot(this,en);ot(this,al);ot(this,wo);Xe(this,wo,!1),Xe(this,al,e.defaultOptions),this.setOptions(e.options),this.observers=[],Xe(this,Mo,e.client),Xe(this,Hn,ee(this,Mo).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,Xe(this,Rs,JT(this.options)),this.state=e.state??ee(this,Rs),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=ee(this,en))==null?void 0:e.promise}setOptions(e){this.options={...ee(this,al),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&ee(this,Hn).remove(this)}setData(e,n){const i=HT(this.state.data,e,this.options);return qt(this,oi,Hi).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e,n){qt(this,oi,Hi).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var i,r;const n=(i=ee(this,en))==null?void 0:i.promise;return(r=ee(this,en))==null||r.cancel(e),n?n.then(ri).catch(ri):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(ee(this,Rs))}isActive(){return this.observers.some(e=>zT(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===pm||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>ch(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!BT(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=ee(this,en))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=ee(this,en))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),ee(this,Hn).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(ee(this,en)&&(ee(this,wo)?ee(this,en).cancel({revert:!0}):ee(this,en).cancelRetry()),this.scheduleGc()),ee(this,Hn).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||qt(this,oi,Hi).call(this,{type:"invalidate"})}fetch(e,n){var c,u,d;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(ee(this,en))return ee(this,en).continueRetry(),ee(this,en).promise}if(e&&this.setOptions(e),!this.options.queryFn){const h=this.observers.find(p=>p.options.queryFn);h&&this.setOptions(h.options)}const i=new AbortController,r=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(Xe(this,wo,!0),i.signal)})},o=()=>{const h=oS(this.options,n),v=(()=>{const g={client:ee(this,Mo),queryKey:this.queryKey,meta:this.meta};return r(g),g})();return Xe(this,wo,!1),this.options.persister?this.options.persister(h,v,this):h(v)},a=(()=>{const h={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:ee(this,Mo),state:this.state,fetchFn:o};return r(h),h})();(c=this.options.behavior)==null||c.onFetch(a,this),Xe(this,Eo,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=a.fetchOptions)==null?void 0:u.meta))&&qt(this,oi,Hi).call(this,{type:"fetch",meta:(d=a.fetchOptions)==null?void 0:d.meta});const l=h=>{var p,v,g,m;Cd(h)&&h.silent||qt(this,oi,Hi).call(this,{type:"error",error:h}),Cd(h)||((v=(p=ee(this,Hn).config).onError)==null||v.call(p,h,this),(m=(g=ee(this,Hn).config).onSettled)==null||m.call(g,this.state.data,h,this)),this.scheduleGc()};return Xe(this,en,cS({initialPromise:n==null?void 0:n.initialPromise,fn:a.fetchFn,abort:i.abort.bind(i),onSuccess:h=>{var p,v,g,m;if(h===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(h)}catch(f){l(f);return}(v=(p=ee(this,Hn).config).onSuccess)==null||v.call(p,h,this),(m=(g=ee(this,Hn).config).onSettled)==null||m.call(g,h,this.state.error,this),this.scheduleGc()},onError:l,onFail:(h,p)=>{qt(this,oi,Hi).call(this,{type:"failed",failureCount:h,error:p})},onPause:()=>{qt(this,oi,Hi).call(this,{type:"pause"})},onContinue:()=>{qt(this,oi,Hi).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),ee(this,en).start()}},Rs=new WeakMap,Eo=new WeakMap,Hn=new WeakMap,Mo=new WeakMap,en=new WeakMap,al=new WeakMap,wo=new WeakMap,oi=new WeakSet,Hi=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...ZT(i.data,this.options),fetchMeta:e.meta??null};case"success":return Xe(this,Eo,void 0),{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const r=e.error;return Cd(r)&&r.revert&&ee(this,Eo)?{...ee(this,Eo),fetchStatus:"idle"}:{...i,error:r,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),ln.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),ee(this,Hn).notify({query:this,type:"updated",action:e})})},Ex);function ZT(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:aS(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function JT(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var yi,Mx,eA=(Mx=class extends ku{constructor(e={}){super();ot(this,yi);this.config=e,Xe(this,yi,new Map)}build(e,n,i){const r=n.queryKey,o=n.queryHash??hm(r,n);let s=this.get(o);return s||(s=new QT({client:e,queryKey:r,queryHash:o,options:e.defaultQueryOptions(n),state:i,defaultOptions:e.getQueryDefaults(r)}),this.add(s)),s}add(e){ee(this,yi).has(e.queryHash)||(ee(this,yi).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=ee(this,yi).get(e.queryHash);n&&(e.destroy(),n===e&&ee(this,yi).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){ln.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return ee(this,yi).get(e)}getAll(){return[...ee(this,yi).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(i=>ug(n,i))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(i=>ug(e,i)):n}notify(e){ln.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){ln.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){ln.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},yi=new WeakMap,Mx),Si,sn,bo,Ei,yr,wx,tA=(wx=class extends uS{constructor(e){super();ot(this,Ei);ot(this,Si);ot(this,sn);ot(this,bo);this.mutationId=e.mutationId,Xe(this,sn,e.mutationCache),Xe(this,Si,[]),this.state=e.state||nA(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){ee(this,Si).includes(e)||(ee(this,Si).push(e),this.clearGcTimeout(),ee(this,sn).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){Xe(this,Si,ee(this,Si).filter(n=>n!==e)),this.scheduleGc(),ee(this,sn).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){ee(this,Si).length||(this.state.status==="pending"?this.scheduleGc():ee(this,sn).remove(this))}continue(){var e;return((e=ee(this,bo))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var o,s,a,l,c,u,d,h,p,v,g,m,f,x,_,y,b,E,A,L;const n=()=>{qt(this,Ei,yr).call(this,{type:"continue"})};Xe(this,bo,cS({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(w,S)=>{qt(this,Ei,yr).call(this,{type:"failed",failureCount:w,error:S})},onPause:()=>{qt(this,Ei,yr).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>ee(this,sn).canRun(this)}));const i=this.state.status==="pending",r=!ee(this,bo).canStart();try{if(i)n();else{qt(this,Ei,yr).call(this,{type:"pending",variables:e,isPaused:r}),await((s=(o=ee(this,sn).config).onMutate)==null?void 0:s.call(o,e,this));const S=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,e));S!==this.state.context&&qt(this,Ei,yr).call(this,{type:"pending",context:S,variables:e,isPaused:r})}const w=await ee(this,bo).start();return await((u=(c=ee(this,sn).config).onSuccess)==null?void 0:u.call(c,w,e,this.state.context,this)),await((h=(d=this.options).onSuccess)==null?void 0:h.call(d,w,e,this.state.context)),await((v=(p=ee(this,sn).config).onSettled)==null?void 0:v.call(p,w,null,this.state.variables,this.state.context,this)),await((m=(g=this.options).onSettled)==null?void 0:m.call(g,w,null,e,this.state.context)),qt(this,Ei,yr).call(this,{type:"success",data:w}),w}catch(w){try{throw await((x=(f=ee(this,sn).config).onError)==null?void 0:x.call(f,w,e,this.state.context,this)),await((y=(_=this.options).onError)==null?void 0:y.call(_,w,e,this.state.context)),await((E=(b=ee(this,sn).config).onSettled)==null?void 0:E.call(b,void 0,w,this.state.variables,this.state.context,this)),await((L=(A=this.options).onSettled)==null?void 0:L.call(A,void 0,w,e,this.state.context)),w}finally{qt(this,Ei,yr).call(this,{type:"error",error:w})}}finally{ee(this,sn).runNext(this)}}},Si=new WeakMap,sn=new WeakMap,bo=new WeakMap,Ei=new WeakSet,yr=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),ln.batch(()=>{ee(this,Si).forEach(i=>{i.onMutationUpdate(e)}),ee(this,sn).notify({mutation:this,type:"updated",action:e})})},wx);function nA(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var ji,si,ll,bx,iA=(bx=class extends ku{constructor(e={}){super();ot(this,ji);ot(this,si);ot(this,ll);this.config=e,Xe(this,ji,new Set),Xe(this,si,new Map),Xe(this,ll,0)}build(e,n,i){const r=new tA({mutationCache:this,mutationId:++wl(this,ll)._,options:e.defaultMutationOptions(n),state:i});return this.add(r),r}add(e){ee(this,ji).add(e);const n=jl(e);if(typeof n=="string"){const i=ee(this,si).get(n);i?i.push(e):ee(this,si).set(n,[e])}this.notify({type:"added",mutation:e})}remove(e){if(ee(this,ji).delete(e)){const n=jl(e);if(typeof n=="string"){const i=ee(this,si).get(n);if(i)if(i.length>1){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}else i[0]===e&&ee(this,si).delete(n)}}this.notify({type:"removed",mutation:e})}canRun(e){const n=jl(e);if(typeof n=="string"){const i=ee(this,si).get(n),r=i==null?void 0:i.find(o=>o.state.status==="pending");return!r||r===e}else return!0}runNext(e){var i;const n=jl(e);if(typeof n=="string"){const r=(i=ee(this,si).get(n))==null?void 0:i.find(o=>o!==e&&o.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){ln.batch(()=>{ee(this,ji).forEach(e=>{this.notify({type:"removed",mutation:e})}),ee(this,ji).clear(),ee(this,si).clear()})}getAll(){return Array.from(ee(this,ji))}find(e){const n={exact:!0,...e};return this.getAll().find(i=>dg(n,i))}findAll(e={}){return this.getAll().filter(n=>dg(e,n))}notify(e){ln.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return ln.batch(()=>Promise.all(e.map(n=>n.continue().catch(ri))))}},ji=new WeakMap,si=new WeakMap,ll=new WeakMap,bx);function jl(t){var e;return(e=t.options.scope)==null?void 0:e.id}function pg(t){return{onFetch:(e,n)=>{var u,d,h,p,v;const i=e.options,r=(h=(d=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:d.fetchMore)==null?void 0:h.direction,o=((p=e.state.data)==null?void 0:p.pages)||[],s=((v=e.state.data)==null?void 0:v.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let g=!1;const m=_=>{Object.defineProperty(_,"signal",{enumerable:!0,get:()=>(e.signal.aborted?g=!0:e.signal.addEventListener("abort",()=>{g=!0}),e.signal)})},f=oS(e.options,e.fetchOptions),x=async(_,y,b)=>{if(g)return Promise.reject();if(y==null&&_.pages.length)return Promise.resolve(_);const A=(()=>{const P={client:e.client,queryKey:e.queryKey,pageParam:y,direction:b?"backward":"forward",meta:e.options.meta};return m(P),P})(),L=await f(A),{maxPages:w}=e.options,S=b?WT:GT;return{pages:S(_.pages,L,w),pageParams:S(_.pageParams,y,w)}};if(r&&o.length){const _=r==="backward",y=_?rA:mg,b={pages:o,pageParams:s},E=y(i,b);a=await x(b,E,_)}else{const _=t??o.length;do{const y=l===0?s[0]??i.initialPageParam:mg(i,a);if(l>0&&y==null)break;a=await x(a,y),l++}while(l<_)}return a};e.options.persister?e.fetchFn=()=>{var g,m;return(m=(g=e.options).persister)==null?void 0:m.call(g,c,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function mg(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function rA(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var Rt,Cr,Rr,Ps,Ls,Pr,Ds,Ns,Tx,oA=(Tx=class{constructor(t={}){ot(this,Rt);ot(this,Cr);ot(this,Rr);ot(this,Ps);ot(this,Ls);ot(this,Pr);ot(this,Ds);ot(this,Ns);Xe(this,Rt,t.queryCache||new eA),Xe(this,Cr,t.mutationCache||new iA),Xe(this,Rr,t.defaultOptions||{}),Xe(this,Ps,new Map),Xe(this,Ls,new Map),Xe(this,Pr,0)}mount(){wl(this,Pr)._++,ee(this,Pr)===1&&(Xe(this,Ds,sS.subscribe(async t=>{t&&(await this.resumePausedMutations(),ee(this,Rt).onFocus())})),Xe(this,Ns,lu.subscribe(async t=>{t&&(await this.resumePausedMutations(),ee(this,Rt).onOnline())})))}unmount(){var t,e;wl(this,Pr)._--,ee(this,Pr)===0&&((t=ee(this,Ds))==null||t.call(this),Xe(this,Ds,void 0),(e=ee(this,Ns))==null||e.call(this),Xe(this,Ns,void 0))}isFetching(t){return ee(this,Rt).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return ee(this,Cr).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=ee(this,Rt).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),n=ee(this,Rt).build(this,e),i=n.state.data;return i===void 0?this.fetchQuery(t):(t.revalidateIfStale&&n.isStaleByTime(ch(e.staleTime,n))&&this.prefetchQuery(e),Promise.resolve(i))}getQueriesData(t){return ee(this,Rt).findAll(t).map(({queryKey:e,state:n})=>{const i=n.data;return[e,i]})}setQueryData(t,e,n){const i=this.defaultQueryOptions({queryKey:t}),r=ee(this,Rt).get(i.queryHash),o=r==null?void 0:r.state.data,s=OT(e,o);if(s!==void 0)return ee(this,Rt).build(this,i).setData(s,{...n,manual:!0})}setQueriesData(t,e,n){return ln.batch(()=>ee(this,Rt).findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=ee(this,Rt).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=ee(this,Rt);ln.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=ee(this,Rt);return ln.batch(()=>(n.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){const n={revert:!0,...e},i=ln.batch(()=>ee(this,Rt).findAll(t).map(r=>r.cancel(n)));return Promise.all(i).then(ri).catch(ri)}invalidateQueries(t,e={}){return ln.batch(()=>(ee(this,Rt).findAll(t).forEach(n=>{n.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const n={...e,cancelRefetch:e.cancelRefetch??!0},i=ln.batch(()=>ee(this,Rt).findAll(t).filter(r=>!r.isDisabled()&&!r.isStatic()).map(r=>{let o=r.fetch(void 0,n);return n.throwOnError||(o=o.catch(ri)),r.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(i).then(ri)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=ee(this,Rt).build(this,e);return n.isStaleByTime(ch(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(ri).catch(ri)}fetchInfiniteQuery(t){return t.behavior=pg(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(ri).catch(ri)}ensureInfiniteQueryData(t){return t.behavior=pg(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return lu.isOnline()?ee(this,Cr).resumePausedMutations():Promise.resolve()}getQueryCache(){return ee(this,Rt)}getMutationCache(){return ee(this,Cr)}getDefaultOptions(){return ee(this,Rr)}setDefaultOptions(t){Xe(this,Rr,t)}setQueryDefaults(t,e){ee(this,Ps).set(el(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...ee(this,Ps).values()],n={};return e.forEach(i=>{tl(t,i.queryKey)&&Object.assign(n,i.defaultOptions)}),n}setMutationDefaults(t,e){ee(this,Ls).set(el(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...ee(this,Ls).values()],n={};return e.forEach(i=>{tl(t,i.mutationKey)&&Object.assign(n,i.defaultOptions)}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...ee(this,Rr).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=hm(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===pm&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...ee(this,Rr).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){ee(this,Rt).clear(),ee(this,Cr).clear()}},Rt=new WeakMap,Cr=new WeakMap,Rr=new WeakMap,Ps=new WeakMap,Ls=new WeakMap,Pr=new WeakMap,Ds=new WeakMap,Ns=new WeakMap,Tx),sA=D.createContext(void 0),aA=({client:t,children:e})=>(D.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),j.jsx(sA.Provider,{value:t,children:e}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cu(){return cu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},cu.apply(this,arguments)}var Nr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Nr||(Nr={}));const gg="popstate";function lA(t){t===void 0&&(t={});function e(i,r){let{pathname:o,search:s,hash:a}=i.location;return dh("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:fS(r)}return uA(e,n,null,t)}function wn(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function dS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cA(){return Math.random().toString(36).substr(2,8)}function xg(t,e){return{usr:t.state,key:t.key,idx:e}}function dh(t,e,n,i){return n===void 0&&(n=null),cu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?zu(e):e,{state:n,key:e&&e.key||i||cA()})}function fS(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function zu(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function uA(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=Nr.Pop,l=null,c=u();c==null&&(c=0,s.replaceState(cu({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function d(){a=Nr.Pop;let m=u(),f=m==null?null:m-c;c=m,l&&l({action:a,location:g.location,delta:f})}function h(m,f){a=Nr.Push;let x=dh(g.location,m,f);c=u()+1;let _=xg(x,c),y=g.createHref(x);try{s.pushState(_,"",y)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(y)}o&&l&&l({action:a,location:g.location,delta:1})}function p(m,f){a=Nr.Replace;let x=dh(g.location,m,f);c=u();let _=xg(x,c),y=g.createHref(x);s.replaceState(_,"",y),o&&l&&l({action:a,location:g.location,delta:0})}function v(m){let f=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof m=="string"?m:fS(m);return x=x.replace(/ $/,"%20"),wn(f,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,f)}let g={get action(){return a},get location(){return t(r,s)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(gg,d),l=m,()=>{r.removeEventListener(gg,d),l=null}},createHref(m){return e(r,m)},createURL:v,encodeLocation(m){let f=v(m);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:p,go(m){return s.go(m)}};return g}var vg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(vg||(vg={}));function dA(t,e,n){return n===void 0&&(n="/"),fA(t,e,n,!1)}function fA(t,e,n,i){let r=typeof e=="string"?zu(e):e,o=mS(r.pathname||"/",n);if(o==null)return null;let s=hS(t);hA(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=wA(o);a=EA(s[l],c,i)}return a}function hS(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(wn(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Ms([i,l.relativePath]),u=n.concat(l);o.children&&o.children.length>0&&(wn(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),hS(o.children,e,u,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:yA(c,o.index),routesMeta:u})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of pS(o.path))r(o,s,l)}),e}function pS(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=pS(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function hA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:SA(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const pA=/^:[\w-]+$/,mA=3,gA=2,xA=1,vA=10,_A=-2,_g=t=>t==="*";function yA(t,e){let n=t.split("/"),i=n.length;return n.some(_g)&&(i+=_A),e&&(i+=gA),n.filter(r=>!_g(r)).reduce((r,o)=>r+(pA.test(o)?mA:o===""?xA:vA),i)}function SA(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function EA(t,e,n){let{routesMeta:i}=t,r={},o="/",s=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,u=o==="/"?e:e.slice(o.length)||"/",d=yg({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!d&&c&&n&&!i[i.length-1].route.index&&(d=yg({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(r,d.params),s.push({params:r,pathname:Ms([o,d.pathname]),pathnameBase:bA(Ms([o,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(o=Ms([o,d.pathnameBase]))}return s}function yg(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=MA(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,d)=>{let{paramName:h,isOptional:p}=u;if(h==="*"){let g=a[d]||"";s=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}const v=a[d];return p&&!v?c[h]=void 0:c[h]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:t}}function MA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),dS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function wA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return dS(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function mS(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const Ms=t=>t.join("/").replace(/\/\/+/g,"/"),bA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function TA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const gS=["post","put","patch","delete"];new Set(gS);const AA=["get",...gS];new Set(AA);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uu(){return uu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},uu.apply(this,arguments)}const CA=D.createContext(null),RA=D.createContext(null),xS=D.createContext(null),Vu=D.createContext(null),Hu=D.createContext({outlet:null,matches:[],isDataRoute:!1}),vS=D.createContext(null);function mm(){return D.useContext(Vu)!=null}function _S(){return mm()||wn(!1),D.useContext(Vu).location}function PA(t,e){return LA(t,e)}function LA(t,e,n,i){mm()||wn(!1);let{navigator:r}=D.useContext(xS),{matches:o}=D.useContext(Hu),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=_S(),u;if(e){var d;let m=typeof e=="string"?zu(e):e;l==="/"||(d=m.pathname)!=null&&d.startsWith(l)||wn(!1),u=m}else u=c;let h=u.pathname||"/",p=h;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(m.length).join("/")}let v=dA(t,{pathname:p}),g=FA(v&&v.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:Ms([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Ms([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,n,i);return e&&g?D.createElement(Vu.Provider,{value:{location:uu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Nr.Pop}},g):g}function DA(){let t=zA(),e=TA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:r},n):null,null)}const NA=D.createElement(DA,null);class IA extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(Hu.Provider,{value:this.props.routeContext},D.createElement(vS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function UA(t){let{routeContext:e,match:n,children:i}=t,r=D.useContext(CA);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(Hu.Provider,{value:e},i)}function FA(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=i)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let u=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||wn(!1),s=s.slice(0,Math.min(s.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<s.length;u++){let d=s[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:h,errors:p}=n,v=d.route.loader&&h[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||v){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((u,d,h)=>{let p,v=!1,g=null,m=null;n&&(p=a&&d.route.id?a[d.route.id]:void 0,g=d.route.errorElement||NA,l&&(c<0&&h===0?(v=!0,m=null):c===h&&(v=!0,m=d.route.hydrateFallbackElement||null)));let f=e.concat(s.slice(0,h+1)),x=()=>{let _;return p?_=g:v?_=m:d.route.Component?_=D.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=u,D.createElement(UA,{match:d,routeContext:{outlet:u,matches:f,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?D.createElement(IA,{location:n.location,revalidation:n.revalidation,component:g,error:p,children:x(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):x()},null)}var fh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(fh||{});function OA(t){let e=D.useContext(RA);return e||wn(!1),e}function kA(t){let e=D.useContext(Hu);return e||wn(!1),e}function BA(t){let e=kA(),n=e.matches[e.matches.length-1];return n.route.id||wn(!1),n.route.id}function zA(){var t;let e=D.useContext(vS),n=OA(fh.UseRouteError),i=BA(fh.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function VA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function hh(t){wn(!1)}function HA(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Nr.Pop,navigator:o,static:s=!1,future:a}=t;mm()&&wn(!1);let l=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:l,navigator:o,static:s,future:uu({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof i=="string"&&(i=zu(i));let{pathname:u="/",search:d="",hash:h="",state:p=null,key:v="default"}=i,g=D.useMemo(()=>{let m=mS(u,l);return m==null?null:{location:{pathname:m,search:d,hash:h,state:p,key:v},navigationType:r}},[l,u,d,h,p,v,r]);return g==null?null:D.createElement(xS.Provider,{value:c},D.createElement(Vu.Provider,{children:n,value:g}))}function GA(t){let{children:e,location:n}=t;return PA(ph(e),n)}new Promise(()=>{});function ph(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(i,r)=>{if(!D.isValidElement(i))return;let o=[...e,r];if(i.type===D.Fragment){n.push.apply(n,ph(i.props.children,o));return}i.type!==hh&&wn(!1),!i.props.index||!i.props.children||wn(!1);let s={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=ph(i.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const WA="6";try{window.__reactRouterVersion=WA}catch{}const XA="startTransition",Sg=kx[XA];function jA(t){let{basename:e,children:n,future:i,window:r}=t,o=D.useRef();o.current==null&&(o.current=lA({window:r,v5Compat:!0}));let s=o.current,[a,l]=D.useState({action:s.action,location:s.location}),{v7_startTransition:c}=i||{},u=D.useCallback(d=>{c&&Sg?Sg(()=>l(d)):l(d)},[l,c]);return D.useLayoutEffect(()=>s.listen(u),[s,u]),D.useEffect(()=>VA(i),[i]),D.createElement(HA,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:i})}var Eg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Eg||(Eg={}));var Mg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Mg||(Mg={}));/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gm="181",$A=0,wg=1,YA=2,yS=1,qA=2,Gi=3,Kr=0,Mn=1,$i=2,Ji=0,ws=1,bg=2,Tg=3,Ag=4,KA=5,po=100,QA=101,ZA=102,JA=103,eC=104,tC=200,nC=201,iC=202,rC=203,mh=204,gh=205,oC=206,sC=207,aC=208,lC=209,cC=210,uC=211,dC=212,fC=213,hC=214,xh=0,vh=1,_h=2,Gs=3,yh=4,Sh=5,Eh=6,Mh=7,SS=0,pC=1,mC=2,Gr=0,gC=1,xC=2,vC=3,_C=4,yC=5,SC=6,EC=7,ES=300,Ws=301,Xs=302,wh=303,bh=304,Gu=306,Th=1e3,Ki=1001,Ah=1002,Un=1003,MC=1004,$l=1005,$n=1006,Rd=1007,_o=1008,ar=1009,MS=1010,wS=1011,nl=1012,xm=1013,Uo=1014,Qi=1015,ea=1016,vm=1017,_m=1018,il=1020,bS=35902,TS=35899,AS=1021,CS=1022,di=1023,rl=1026,ol=1027,RS=1028,ym=1029,Sm=1030,Em=1031,Mm=1033,Rc=33776,Pc=33777,Lc=33778,Dc=33779,Ch=35840,Rh=35841,Ph=35842,Lh=35843,Dh=36196,Nh=37492,Ih=37496,Uh=37808,Fh=37809,Oh=37810,kh=37811,Bh=37812,zh=37813,Vh=37814,Hh=37815,Gh=37816,Wh=37817,Xh=37818,jh=37819,$h=37820,Yh=37821,qh=36492,Kh=36494,Qh=36495,Zh=36283,Jh=36284,ep=36285,tp=36286,wC=3200,bC=3201,TC=0,AC=1,br="",Gn="srgb",js="srgb-linear",du="linear",dt="srgb",Go=7680,Cg=519,CC=512,RC=513,PC=514,PS=515,LC=516,DC=517,NC=518,IC=519,Rg=35044,Pg="300 es",Ti=2e3,fu=2001;function LS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function hu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function UC(){const t=hu("canvas");return t.style.display="block",t}const Lg={};function Dg(...t){const e="THREE."+t.shift();console.log(e,...t)}function je(...t){const e="THREE."+t.shift();console.warn(e,...t)}function Dt(...t){const e="THREE."+t.shift();console.error(e,...t)}function sl(...t){const e=t.join(" ");e in Lg||(Lg[e]=!0,je(...t))}function FC(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}class ta{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pd=Math.PI/180,np=180/Math.PI;function xl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function tt(t,e,n){return Math.max(e,Math.min(n,t))}function OC(t,e){return(t%e+e)%e}function Ld(t,e,n){return(1-n)*t+n*e}function pa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,n=0){ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],h=o[s+0],p=o[s+1],v=o[s+2],g=o[s+3];if(a<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a>=1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=g;return}if(d!==g||l!==h||c!==p||u!==v){let m=l*h+c*p+u*v+d*g;m<0&&(h=-h,p=-p,v=-v,g=-g,m=-m);let f=1-a;if(m<.9995){const x=Math.acos(m),_=Math.sin(x);f=Math.sin(f*x)/_,a=Math.sin(a*x)/_,l=l*f+h*a,c=c*f+p*a,u=u*f+v*a,d=d*f+g*a}else{l=l*f+h*a,c=c*f+p*a,u=u*f+v*a,d=d*f+g*a;const x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=o[s],h=o[s+1],p=o[s+2],v=o[s+3];return e[n]=a*v+u*d+l*p-c*h,e[n+1]=l*v+u*h+c*d-a*p,e[n+2]=c*v+u*p+a*h-l*d,e[n+3]=u*v-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(o/2),h=l(i/2),p=l(r/2),v=l(o/2);switch(s){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(o-c)*p,this._z=(s-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(o-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(s-r)/p,this._x=(o+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-i*c,this._z=o*u+s*c+i*l-r*a,this._w=s*u-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,o=-o,s=-s,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+o*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+o*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,i=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ng.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ng.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),u=2*(a*n-o*r),d=2*(o*i-s*n);return this.x=n+l*c+s*d-a*u,this.y=i+l*u+a*c-o*d,this.z=r+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dd.copy(this).projectOnVector(e),this.sub(Dd)}reflect(e){return this.sub(Dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dd=new Q,Ng=new vl;class qe{constructor(e,n,i,r,o,s,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c)}set(e,n,i,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=o,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],v=i[8],g=r[0],m=r[3],f=r[6],x=r[1],_=r[4],y=r[7],b=r[2],E=r[5],A=r[8];return o[0]=s*g+a*x+l*b,o[3]=s*m+a*_+l*E,o[6]=s*f+a*y+l*A,o[1]=c*g+u*x+d*b,o[4]=c*m+u*_+d*E,o[7]=c*f+u*y+d*A,o[2]=h*g+p*x+v*b,o[5]=h*m+p*_+v*E,o[8]=h*f+p*y+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*s*u-n*a*c-i*o*u+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,h=a*l-u*o,p=c*o-s*l,v=n*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*s)*g,e[3]=h*g,e[4]=(u*n-r*l)*g,e[5]=(r*o-a*n)*g,e[6]=p*g,e[7]=(i*l-c*n)*g,e[8]=(s*n-i*o)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Nd.makeScale(e,n)),this}rotate(e){return this.premultiply(Nd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nd=new qe,Ig=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ug=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kC(){const t={enabled:!0,workingColorSpace:js,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===dt&&(r.r=er(r.r),r.g=er(r.g),r.b=er(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===dt&&(r.r=bs(r.r),r.g=bs(r.g),r.b=bs(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===br?du:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return sl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return sl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[js]:{primaries:e,whitePoint:i,transfer:du,toXYZ:Ig,fromXYZ:Ug,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Ig,fromXYZ:Ug,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),t}const st=kC();function er(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Wo;class BC{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wo===void 0&&(Wo=hu("canvas")),Wo.width=e.width,Wo.height=e.height;const r=Wo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Wo}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=hu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=er(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(er(n[i]/255)*255):n[i]=er(n[i]);return{data:n,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zC=0;class wm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zC++}),this.uuid=xl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Id(r[s].image)):o.push(Id(r[s]))}else o=Id(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Id(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?BC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let VC=0;const Ud=new Q;class un extends ta{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Ki,r=Ki,o=$n,s=_o,a=di,l=ar,c=un.DEFAULT_ANISOTROPY,u=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VC++}),this.uuid=xl(),this.name="",this.source=new wm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ud).x}get height(){return this.source.getSize(Ud).y}get depth(){return this.source.getSize(Ud).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){je(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){je(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ES)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Th:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case Ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Th:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case Ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=ES;un.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,b=(f+1)/2,E=(u+h)/4,A=(d+g)/4,L=(v+m)/4;return _>y&&_>b?_<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(_),r=E/i,o=A/i):y>b?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=E/r,o=L/r):b<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(b),i=A/o,r=L/o),this.set(i,r,o,n),this}let x=Math.sqrt((m-v)*(m-v)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(d-g)/x,this.z=(h-u)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this.w=tt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this.w=tt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HC extends ta{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const r={width:e,height:n,depth:i.depth},o=new un(r);this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new wm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fo extends HC{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class DS extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class GC extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _l{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,ei):ei.fromBufferAttribute(o,s),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yl.copy(i.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),ql.subVectors(this.max,ma),Xo.subVectors(e.a,ma),jo.subVectors(e.b,ma),$o.subVectors(e.c,ma),pr.subVectors(jo,Xo),mr.subVectors($o,jo),io.subVectors(Xo,$o);let n=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-io.z,io.y,pr.z,0,-pr.x,mr.z,0,-mr.x,io.z,0,-io.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-io.y,io.x,0];return!Fd(n,Xo,jo,$o,ql)||(n=[1,0,0,0,1,0,0,0,1],!Fd(n,Xo,jo,$o,ql))?!1:(Kl.crossVectors(pr,mr),n=[Kl.x,Kl.y,Kl.z],Fd(n,Xo,jo,$o,ql))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ei=new Q,Yl=new _l,Xo=new Q,jo=new Q,$o=new Q,pr=new Q,mr=new Q,io=new Q,ma=new Q,ql=new Q,Kl=new Q,ro=new Q;function Fd(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){ro.fromArray(t,o);const a=r.x*Math.abs(ro.x)+r.y*Math.abs(ro.y)+r.z*Math.abs(ro.z),l=e.dot(ro),c=n.dot(ro),u=i.dot(ro);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const WC=new _l,ga=new Q,Od=new Q;class bm{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):WC.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const n=ga.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ga,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Od)),this.expandByPoint(ga.copy(e.center).sub(Od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Oi=new Q,kd=new Q,Ql=new Q,gr=new Q,Bd=new Q,Zl=new Q,zd=new Q;class XC{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,n),Oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){kd.copy(e).add(n).multiplyScalar(.5),Ql.copy(n).sub(e).normalize(),gr.copy(this.origin).sub(kd);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ql),a=gr.dot(this.direction),l=-gr.dot(Ql),c=gr.lengthSq(),u=Math.abs(1-s*s);let d,h,p,v;if(u>0)if(d=s*l-a,h=s*a-l,v=o*u,d>=0)if(h>=-v)if(h<=v){const g=1/u;d*=g,h*=g,p=d*(d+s*h+2*a)+h*(s*d+h+2*l)+c}else h=o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+c;else h=-o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+c):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+c);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(kd).addScaledVector(Ql,h),p}intersectSphere(e,n){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),r=Oi.dot(Oi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(o=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(o=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,n,i,r,o){Bd.subVectors(n,e),Zl.subVectors(i,e),zd.crossVectors(Bd,Zl);let s=this.direction.dot(zd),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;gr.subVectors(this.origin,e);const l=a*this.direction.dot(Zl.crossVectors(gr,Zl));if(l<0)return null;const c=a*this.direction.dot(Bd.cross(gr));if(c<0||l+c>s)return null;const u=-a*gr.dot(zd);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,n,i,r,o,s,a,l,c,u,d,h,p,v,g,m){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c,u,d,h,p,v,g,m)}set(e,n,i,r,o,s,a,l,c,u,d,h,p,v,g,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Yo.setFromMatrixColumn(e,0).length(),o=1/Yo.setFromMatrixColumn(e,1).length(),s=1/Yo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*u,p=s*d,v=a*u,g=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=h-g*c,n[9]=-a*l,n[2]=g-h*c,n[6]=v+p*c,n[10]=s*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,v=c*u,g=c*d;n[0]=h+g*a,n[4]=v*a-p,n[8]=s*c,n[1]=s*d,n[5]=s*u,n[9]=-a,n[2]=p*a-v,n[6]=g+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,v=c*u,g=c*d;n[0]=h-g*a,n[4]=-s*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=s*u,n[9]=g-h*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*u,p=s*d,v=a*u,g=a*d;n[0]=l*u,n[4]=v*c-p,n[8]=h*c+g,n[1]=l*d,n[5]=g*c+h,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*c,v=a*l,g=a*c;n[0]=l*u,n[4]=g-h*d,n[8]=v*d+p,n[1]=d,n[5]=s*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+v,n[10]=h-g*d}else if(e.order==="XZY"){const h=s*l,p=s*c,v=a*l,g=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+g,n[5]=s*u,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*u,n[10]=g*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jC,e,$C)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),xr.crossVectors(i,Cn),xr.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),xr.crossVectors(i,Cn)),xr.normalize(),Jl.crossVectors(Cn,xr),r[0]=xr.x,r[4]=Jl.x,r[8]=Cn.x,r[1]=xr.y,r[5]=Jl.y,r[9]=Cn.y,r[2]=xr.z,r[6]=Jl.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],v=i[2],g=i[6],m=i[10],f=i[14],x=i[3],_=i[7],y=i[11],b=i[15],E=r[0],A=r[4],L=r[8],w=r[12],S=r[1],P=r[5],U=r[9],z=r[13],O=r[2],G=r[6],H=r[10],Y=r[14],R=r[3],F=r[7],W=r[11],se=r[15];return o[0]=s*E+a*S+l*O+c*R,o[4]=s*A+a*P+l*G+c*F,o[8]=s*L+a*U+l*H+c*W,o[12]=s*w+a*z+l*Y+c*se,o[1]=u*E+d*S+h*O+p*R,o[5]=u*A+d*P+h*G+p*F,o[9]=u*L+d*U+h*H+p*W,o[13]=u*w+d*z+h*Y+p*se,o[2]=v*E+g*S+m*O+f*R,o[6]=v*A+g*P+m*G+f*F,o[10]=v*L+g*U+m*H+f*W,o[14]=v*w+g*z+m*Y+f*se,o[3]=x*E+_*S+y*O+b*R,o[7]=x*A+_*P+y*G+b*F,o[11]=x*L+_*U+y*H+b*W,o[15]=x*w+_*z+y*Y+b*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],g=e[7],m=e[11],f=e[15];return v*(+o*l*d-r*c*d-o*a*h+i*c*h+r*a*p-i*l*p)+g*(+n*l*p-n*c*h+o*s*h-r*s*p+r*c*u-o*l*u)+m*(+n*c*d-n*a*p-o*s*d+i*s*p+o*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*s*d-i*s*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],g=e[13],m=e[14],f=e[15],x=d*m*c-g*h*c+g*l*p-a*m*p-d*l*f+a*h*f,_=v*h*c-u*m*c-v*l*p+s*m*p+u*l*f-s*h*f,y=u*g*c-v*d*c+v*a*p-s*g*p-u*a*f+s*d*f,b=v*d*l-u*g*l-v*a*h+s*g*h+u*a*m-s*d*m,E=n*x+i*_+r*y+o*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(g*h*o-d*m*o-g*r*p+i*m*p+d*r*f-i*h*f)*A,e[2]=(a*m*o-g*l*o+g*r*c-i*m*c-a*r*f+i*l*f)*A,e[3]=(d*l*o-a*h*o-d*r*c+i*h*c+a*r*p-i*l*p)*A,e[4]=_*A,e[5]=(u*m*o-v*h*o+v*r*p-n*m*p-u*r*f+n*h*f)*A,e[6]=(v*l*o-s*m*o-v*r*c+n*m*c+s*r*f-n*l*f)*A,e[7]=(s*h*o-u*l*o+u*r*c-n*h*c-s*r*p+n*l*p)*A,e[8]=y*A,e[9]=(v*d*o-u*g*o-v*i*p+n*g*p+u*i*f-n*d*f)*A,e[10]=(s*g*o-v*a*o+v*i*c-n*g*c-s*i*f+n*a*f)*A,e[11]=(u*a*o-s*d*o-u*i*c+n*d*c+s*i*p-n*a*p)*A,e[12]=b*A,e[13]=(u*g*r-v*d*r+v*i*h-n*g*h-u*i*m+n*d*m)*A,e[14]=(v*a*r-s*g*r-v*i*l+n*g*l+s*i*m-n*a*m)*A,e[15]=(s*d*r-u*a*r+u*i*l-n*d*l-s*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,u=s+s,d=a+a,h=o*c,p=o*u,v=o*d,g=s*u,m=s*d,f=a*d,x=l*c,_=l*u,y=l*d,b=i.x,E=i.y,A=i.z;return r[0]=(1-(g+f))*b,r[1]=(p+y)*b,r[2]=(v-_)*b,r[3]=0,r[4]=(p-y)*E,r[5]=(1-(h+f))*E,r[6]=(m+x)*E,r[7]=0,r[8]=(v+_)*A,r[9]=(m-x)*A,r[10]=(1-(h+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Yo.set(r[0],r[1],r[2]).length();const s=Yo.set(r[4],r[5],r[6]).length(),a=Yo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const c=1/o,u=1/s,d=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,n.setFromRotationMatrix(ti),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Ti,l=!1){const c=this.elements,u=2*o/(n-e),d=2*o/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let v,g;if(l)v=o/(s-o),g=s*o/(s-o);else if(a===Ti)v=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===fu)v=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Ti,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,g;if(l)v=1/(s-o),g=s/(s-o);else if(a===Ti)v=-2/(s-o),g=-(s+o)/(s-o);else if(a===fu)v=-1/(s-o),g=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Yo=new Q,ti=new zt,jC=new Q(0,0,0),$C=new Q(1,1,1),xr=new Q,Jl=new Q,Cn=new Q,Fg=new zt,Og=new vl;class lr{constructor(e=0,n=0,i=0,r=lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Fg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Og.setFromEuler(this),this.setFromQuaternion(Og,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lr.DEFAULT_ORDER="XYZ";class NS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YC=0;const kg=new Q,qo=new vl,ki=new zt,ec=new Q,xa=new Q,qC=new Q,KC=new vl,Bg=new Q(1,0,0),zg=new Q(0,1,0),Vg=new Q(0,0,1),Hg={type:"added"},QC={type:"removed"},Ko={type:"childadded",child:null},Vd={type:"childremoved",child:null};class Fn extends ta{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YC++}),this.uuid=xl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new Q,n=new lr,i=new vl,r=new Q(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new zt},normalMatrix:{value:new qe}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new NS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qo.setFromAxisAngle(e,n),this.quaternion.multiply(qo),this}rotateOnWorldAxis(e,n){return qo.setFromAxisAngle(e,n),this.quaternion.premultiply(qo),this}rotateX(e){return this.rotateOnAxis(Bg,e)}rotateY(e){return this.rotateOnAxis(zg,e)}rotateZ(e){return this.rotateOnAxis(Vg,e)}translateOnAxis(e,n){return kg.copy(e).applyQuaternion(this.quaternion),this.position.add(kg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bg,e)}translateY(e){return this.translateOnAxis(zg,e)}translateZ(e){return this.translateOnAxis(Vg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ec.copy(e):ec.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(xa,ec,this.up):ki.lookAt(ec,xa,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),qo.setFromRotationMatrix(ki),this.quaternion.premultiply(qo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hg),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(QC),Vd.child=e,this.dispatchEvent(Vd),Vd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hg),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,e,qC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,KC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),p=s(e.animations),v=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Fn.DEFAULT_UP=new Q(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new Q,Bi=new Q,Hd=new Q,zi=new Q,Qo=new Q,Zo=new Q,Gg=new Q,Gd=new Q,Wd=new Q,Xd=new Q,jd=new Nt,$d=new Nt,Yd=new Nt;class ui{constructor(e=new Q,n=new Q,i=new Q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ni.subVectors(e,n),r.cross(ni);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){ni.subVectors(r,n),Bi.subVectors(i,n),Hd.subVectors(e,n);const s=ni.dot(ni),a=ni.dot(Bi),l=ni.dot(Hd),c=Bi.dot(Bi),u=Bi.dot(Hd),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,v=(s*u-a*l)*h;return o.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,zi.x),l.addScaledVector(s,zi.y),l.addScaledVector(a,zi.z),l)}static getInterpolatedAttribute(e,n,i,r,o,s){return jd.setScalar(0),$d.setScalar(0),Yd.setScalar(0),jd.fromBufferAttribute(e,n),$d.fromBufferAttribute(e,i),Yd.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(jd,o.x),s.addScaledVector($d,o.y),s.addScaledVector(Yd,o.z),s}static isFrontFacing(e,n,i,r){return ni.subVectors(i,n),Bi.subVectors(e,n),ni.cross(Bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ni.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return ui.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Qo.subVectors(r,i),Zo.subVectors(o,i),Gd.subVectors(e,i);const l=Qo.dot(Gd),c=Zo.dot(Gd);if(l<=0&&c<=0)return n.copy(i);Wd.subVectors(e,r);const u=Qo.dot(Wd),d=Zo.dot(Wd);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(i).addScaledVector(Qo,s);Xd.subVectors(e,o);const p=Qo.dot(Xd),v=Zo.dot(Xd);if(v>=0&&p<=v)return n.copy(o);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Zo,a);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return Gg.subVectors(o,r),a=(d-u)/(d-u+(p-v)),n.copy(r).addScaledVector(Gg,a);const f=1/(m+g+h);return s=g*f,a=h*f,n.copy(i).addScaledVector(Qo,s).addScaledVector(Zo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const IS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},tc={h:0,s:0,l:0};function qd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ft{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=OC(e,1),n=tt(n,0,1),i=tt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=qd(s,o,e+1/3),this.g=qd(s,o,e),this.b=qd(s,o,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,n=Gn){function i(o){o!==void 0&&parseFloat(o)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=IS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return st.workingToColorSpace(Jt.copy(this),e),Math.round(tt(Jt.r*255,0,255))*65536+Math.round(tt(Jt.g*255,0,255))*256+Math.round(tt(Jt.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,o=Jt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Gn){st.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+n,vr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(vr),e.getHSL(tc);const i=Ld(vr.h,tc.h,n),r=Ld(vr.s,tc.s,n),o=Ld(vr.l,tc.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new ft;ft.NAMES=IS;let ZC=0;class Wu extends ta{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZC++}),this.uuid=xl(),this.name="",this.type="Material",this.blending=ws,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=po,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){je(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){je(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==Kr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mh&&(i.blendSrc=this.blendSrc),this.blendDst!==gh&&(i.blendDst=this.blendDst),this.blendEquation!==po&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Go&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Go&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Go&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class US extends Wu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=SS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new Q,nc=new ct;let JC=0;class Pi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:JC++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Rg,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)nc.fromBufferAttribute(this,n),nc.applyMatrix3(e),this.setXY(n,nc.x,nc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=pa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=pa(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=pa(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=pa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=pa(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),o=gn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rg&&(e.usage=this.usage),e}}class FS extends Pi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class OS extends Pi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Co extends Pi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let e2=0;const Vn=new zt,Kd=new Fn,Jo=new Q,Rn=new _l,va=new _l,Gt=new Q;class eo extends ta{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e2++}),this.uuid=xl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(LS(e)?OS:FS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new qe().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return Kd.lookAt(e),Kd.updateMatrix(),this.applyMatrix4(Kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jo).negate(),this.translate(Jo.x,Jo.y,Jo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Co(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const o=e[r];n.setXYZ(r,o.x,o.y,o.z||0)}e.length>n.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];Rn.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];va.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Rn.min,va.min),Rn.expandByPoint(Gt),Gt.addVectors(Rn.max,va.max),Rn.expandByPoint(Gt)):(Rn.expandByPoint(va.min),Rn.expandByPoint(va.max))}Rn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Gt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(Jo.fromBufferAttribute(e,c),Gt.add(Jo)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new Q,l[L]=new Q;const c=new Q,u=new Q,d=new Q,h=new ct,p=new ct,v=new ct,g=new Q,m=new Q;function f(L,w,S){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,S),h.fromBufferAttribute(o,L),p.fromBufferAttribute(o,w),v.fromBufferAttribute(o,S),u.sub(c),d.sub(c),p.sub(h),v.sub(h);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(P),a[L].add(g),a[w].add(g),a[S].add(g),l[L].add(m),l[w].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,w=x.length;L<w;++L){const S=x[L],P=S.start,U=S.count;for(let z=P,O=P+U;z<O;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const _=new Q,y=new Q,b=new Q,E=new Q;function A(L){b.fromBufferAttribute(r,L),E.copy(b);const w=a[L];_.copy(w),_.sub(b.multiplyScalar(b.dot(w))).normalize(),y.crossVectors(E,w);const P=y.dot(l[L])<0?-1:1;s.setXYZW(L,_.x,_.y,_.z,P)}for(let L=0,w=x.length;L<w;++L){const S=x[L],P=S.start,U=S.count;for(let z=P,O=P+U;z<O;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new Q,o=new Q,s=new Q,a=new Q,l=new Q,c=new Q,u=new Q,d=new Q;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,g),s.fromBufferAttribute(n,m),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new Pi(h,u,d)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new eo,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wg=new zt,oo=new XC,ic=new bm,Xg=new Q,rc=new Q,oc=new Q,sc=new Q,Qd=new Q,ac=new Q,jg=new Q,lc=new Q;class cr extends Fn{constructor(e=new eo,n=new US){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){ac.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(Qd.fromBufferAttribute(d,e),s?ac.addScaledVector(Qd,u):ac.addScaledVector(Qd.sub(n),u))}n.add(ac)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(o),oo.copy(e.ray).recast(e.near),!(ic.containsPoint(oo.origin)===!1&&(oo.intersectSphere(ic,Xg)===null||oo.origin.distanceToSquared(Xg)>(e.far-e.near)**2))&&(Wg.copy(o).invert(),oo.copy(e.ray).applyMatrix4(Wg),!(i.boundingBox!==null&&oo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,oo)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,h=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,g=h.length;v<g;v++){const m=h[v],f=s[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,b=_;y<b;y+=3){const E=a.getX(y),A=a.getX(y+1),L=a.getX(y+2);r=cc(this,f,e,i,c,u,d,E,A,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const x=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=cc(this,s,e,i,c,u,d,x,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=h.length;v<g;v++){const m=h[v],f=s[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,b=_;y<b;y+=3){const E=y,A=y+1,L=y+2;r=cc(this,f,e,i,c,u,d,E,A,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const x=m,_=m+1,y=m+2;r=cc(this,s,e,i,c,u,d,x,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function t2(t,e,n,i,r,o,s,a){let l;if(e.side===Mn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Kr,a),l===null)return null;lc.copy(a),lc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(lc);return c<n.near||c>n.far?null:{distance:c,point:lc.clone(),object:t}}function cc(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,rc),t.getVertexPosition(l,oc),t.getVertexPosition(c,sc);const u=t2(t,e,n,i,rc,oc,sc,jg);if(u){const d=new Q;ui.getBarycoord(jg,rc,oc,sc,d),r&&(u.uv=ui.getInterpolatedAttribute(r,a,l,c,d,new ct)),o&&(u.uv1=ui.getInterpolatedAttribute(o,a,l,c,d,new ct)),s&&(u.normal=ui.getInterpolatedAttribute(s,a,l,c,d,new Q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Q,materialIndex:0};ui.getNormal(rc,oc,sc,h.normal),u.face=h,u.barycoord=d}return u}class yl extends eo{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,s,o,0),v("z","y","x",1,-1,i,n,-e,s,o,1),v("x","z","y",1,1,e,i,n,r,s,2),v("x","z","y",1,-1,e,i,-n,r,s,3),v("x","y","z",1,-1,e,n,i,r,o,4),v("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Co(c,3)),this.setAttribute("normal",new Co(u,3)),this.setAttribute("uv",new Co(d,2));function v(g,m,f,x,_,y,b,E,A,L,w){const S=y/A,P=b/L,U=y/2,z=b/2,O=E/2,G=A+1,H=L+1;let Y=0,R=0;const F=new Q;for(let W=0;W<H;W++){const se=W*P-z;for(let ce=0;ce<G;ce++){const Ee=ce*S-U;F[g]=Ee*x,F[m]=se*_,F[f]=O,c.push(F.x,F.y,F.z),F[g]=0,F[m]=0,F[f]=E>0?1:-1,u.push(F.x,F.y,F.z),d.push(ce/A),d.push(1-W/L),Y+=1}}for(let W=0;W<L;W++)for(let se=0;se<A;se++){const ce=h+se+G*W,Ee=h+se+G*(W+1),be=h+(se+1)+G*(W+1),ze=h+(se+1)+G*W;l.push(ce,Ee,ze),l.push(Ee,be,ze),R+=6}a.addGroup(p,R,w),p+=R,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=$s(t[n]);for(const r in i)e[r]=i[r]}return e}function n2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function kS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const i2={clone:$s,merge:on};var r2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Wu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r2,this.fragmentShader=o2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=n2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class BS extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new Q,$g=new ct,Yg=new ct;class ci extends BS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=np*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return np*2*Math.atan(Math.tan(Pd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,$g,Yg),n.subVectors(Yg,$g)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const es=-90,ts=1;class s2 extends Fn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ci(es,ts,e,n);r.layers=this.layers,this.add(r);const o=new ci(es,ts,e,n);o.layers=this.layers,this.add(o);const s=new ci(es,ts,e,n);s.layers=this.layers,this.add(s);const a=new ci(es,ts,e,n);a.layers=this.layers,this.add(a);const l=new ci(es,ts,e,n);l.layers=this.layers,this.add(l);const c=new ci(es,ts,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class zS extends un{constructor(e=[],n=Ws,i,r,o,s,a,l,c,u){super(e,n,i,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class a2 extends Fo{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zS(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new yl(5,5,5),o=new Di({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Ji});o.uniforms.tEquirect.value=n;const s=new cr(r,o),a=n.minFilter;return n.minFilter===_o&&(n.minFilter=$n),new s2(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}class uc extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l2={type:"move"};class Zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(l2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new uc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class c2 extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new lr,this.environmentIntensity=1,this.environmentRotation=new lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class u2 extends un{constructor(e=null,n=1,i=1,r,o,s,a,l,c=Un,u=Un,d,h){super(null,s,a,l,c,u,r,o,d,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jd=new Q,d2=new Q,f2=new qe;class ho{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Jd.subVectors(i,n).cross(d2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Jd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||f2.getNormalMatrix(e),r=this.coplanarPoint(Jd).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const so=new bm,h2=new ct(.5,.5),dc=new Q;class VS{constructor(e=new ho,n=new ho,i=new ho,r=new ho,o=new ho,s=new ho){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ti,i=!1){const r=this.planes,o=e.elements,s=o[0],a=o[1],l=o[2],c=o[3],u=o[4],d=o[5],h=o[6],p=o[7],v=o[8],g=o[9],m=o[10],f=o[11],x=o[12],_=o[13],y=o[14],b=o[15];if(r[0].setComponents(c-s,p-u,f-v,b-x).normalize(),r[1].setComponents(c+s,p+u,f+v,b+x).normalize(),r[2].setComponents(c+a,p+d,f+g,b+_).normalize(),r[3].setComponents(c-a,p-d,f-g,b-_).normalize(),i)r[4].setComponents(l,h,m,y).normalize(),r[5].setComponents(c-l,p-h,f-m,b-y).normalize();else if(r[4].setComponents(c-l,p-h,f-m,b-y).normalize(),n===Ti)r[5].setComponents(c+l,p+h,f+m,b+y).normalize();else if(n===fu)r[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),so.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(so)}intersectsSprite(e){so.center.set(0,0,0);const n=h2.distanceTo(e.center);return so.radius=.7071067811865476+n,so.applyMatrix4(e.matrixWorld),this.intersectsSphere(so)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(dc.x=r.normal.x>0?e.max.x:e.min.x,dc.y=r.normal.y>0?e.max.y:e.min.y,dc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class HS extends un{constructor(e,n,i=Uo,r,o,s,a=Un,l=Un,c,u=rl,d=1){if(u!==rl&&u!==ol)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:d};super(h,r,o,s,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class GS extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sl extends eo{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,p=[],v=[],g=[],m=[];for(let f=0;f<u;f++){const x=f*h-s;for(let _=0;_<c;_++){const y=_*d-o;v.push(y,-x,0),g.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const _=x+c*f,y=x+c*(f+1),b=x+1+c*(f+1),E=x+1+c*f;p.push(_,y,E),p.push(y,b,E)}this.setIndex(p),this.setAttribute("position",new Co(v,3)),this.setAttribute("normal",new Co(g,3)),this.setAttribute("uv",new Co(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.width,e.height,e.widthSegments,e.heightSegments)}}class p2 extends Wu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m2 extends Wu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class WS extends BS{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class g2 extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function qg(t,e,n,i){const r=x2(i);switch(n){case AS:return t*e;case RS:return t*e/r.components*r.byteLength;case ym:return t*e/r.components*r.byteLength;case Sm:return t*e*2/r.components*r.byteLength;case Em:return t*e*2/r.components*r.byteLength;case CS:return t*e*3/r.components*r.byteLength;case di:return t*e*4/r.components*r.byteLength;case Mm:return t*e*4/r.components*r.byteLength;case Rc:case Pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Lc:case Dc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rh:case Lh:return Math.max(t,16)*Math.max(e,8)/4;case Ch:case Ph:return Math.max(t,8)*Math.max(e,8)/2;case Dh:case Nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case kh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case zh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case jh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case $h:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case qh:case Kh:case Qh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Zh:case Jh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ep:case tp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function x2(t){switch(t){case ar:case MS:return{byteLength:1,components:1};case nl:case wS:case ea:return{byteLength:2,components:1};case vm:case _m:return{byteLength:2,components:4};case Uo:case xm:case Qi:return{byteLength:4,components:1};case bS:case TS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gm}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function XS(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function v2(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){const v=d[h],g=d[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++h,d[h]=g)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){const g=d[p];t.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var _2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,S2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,C2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,D2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,N2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,I2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,U2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,V2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,H2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,G2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,W2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,X2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q2="gl_FragColor = linearToOutputTexel( gl_FragColor );",K2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Z2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,J2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,aR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_R=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ER=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,CR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,UR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,OR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$R=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,YR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_P=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,CP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,OP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$P=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:_2,alphahash_pars_fragment:y2,alphamap_fragment:S2,alphamap_pars_fragment:E2,alphatest_fragment:M2,alphatest_pars_fragment:w2,aomap_fragment:b2,aomap_pars_fragment:T2,batching_pars_vertex:A2,batching_vertex:C2,begin_vertex:R2,beginnormal_vertex:P2,bsdfs:L2,iridescence_fragment:D2,bumpmap_pars_fragment:N2,clipping_planes_fragment:I2,clipping_planes_pars_fragment:U2,clipping_planes_pars_vertex:F2,clipping_planes_vertex:O2,color_fragment:k2,color_pars_fragment:B2,color_pars_vertex:z2,color_vertex:V2,common:H2,cube_uv_reflection_fragment:G2,defaultnormal_vertex:W2,displacementmap_pars_vertex:X2,displacementmap_vertex:j2,emissivemap_fragment:$2,emissivemap_pars_fragment:Y2,colorspace_fragment:q2,colorspace_pars_fragment:K2,envmap_fragment:Q2,envmap_common_pars_fragment:Z2,envmap_pars_fragment:J2,envmap_pars_vertex:eR,envmap_physical_pars_fragment:dR,envmap_vertex:tR,fog_vertex:nR,fog_pars_vertex:iR,fog_fragment:rR,fog_pars_fragment:oR,gradientmap_pars_fragment:sR,lightmap_pars_fragment:aR,lights_lambert_fragment:lR,lights_lambert_pars_fragment:cR,lights_pars_begin:uR,lights_toon_fragment:fR,lights_toon_pars_fragment:hR,lights_phong_fragment:pR,lights_phong_pars_fragment:mR,lights_physical_fragment:gR,lights_physical_pars_fragment:xR,lights_fragment_begin:vR,lights_fragment_maps:_R,lights_fragment_end:yR,logdepthbuf_fragment:SR,logdepthbuf_pars_fragment:ER,logdepthbuf_pars_vertex:MR,logdepthbuf_vertex:wR,map_fragment:bR,map_pars_fragment:TR,map_particle_fragment:AR,map_particle_pars_fragment:CR,metalnessmap_fragment:RR,metalnessmap_pars_fragment:PR,morphinstance_vertex:LR,morphcolor_vertex:DR,morphnormal_vertex:NR,morphtarget_pars_vertex:IR,morphtarget_vertex:UR,normal_fragment_begin:FR,normal_fragment_maps:OR,normal_pars_fragment:kR,normal_pars_vertex:BR,normal_vertex:zR,normalmap_pars_fragment:VR,clearcoat_normal_fragment_begin:HR,clearcoat_normal_fragment_maps:GR,clearcoat_pars_fragment:WR,iridescence_pars_fragment:XR,opaque_fragment:jR,packing:$R,premultiplied_alpha_fragment:YR,project_vertex:qR,dithering_fragment:KR,dithering_pars_fragment:QR,roughnessmap_fragment:ZR,roughnessmap_pars_fragment:JR,shadowmap_pars_fragment:eP,shadowmap_pars_vertex:tP,shadowmap_vertex:nP,shadowmask_pars_fragment:iP,skinbase_vertex:rP,skinning_pars_vertex:oP,skinning_vertex:sP,skinnormal_vertex:aP,specularmap_fragment:lP,specularmap_pars_fragment:cP,tonemapping_fragment:uP,tonemapping_pars_fragment:dP,transmission_fragment:fP,transmission_pars_fragment:hP,uv_pars_fragment:pP,uv_pars_vertex:mP,uv_vertex:gP,worldpos_vertex:xP,background_vert:vP,background_frag:_P,backgroundCube_vert:yP,backgroundCube_frag:SP,cube_vert:EP,cube_frag:MP,depth_vert:wP,depth_frag:bP,distanceRGBA_vert:TP,distanceRGBA_frag:AP,equirect_vert:CP,equirect_frag:RP,linedashed_vert:PP,linedashed_frag:LP,meshbasic_vert:DP,meshbasic_frag:NP,meshlambert_vert:IP,meshlambert_frag:UP,meshmatcap_vert:FP,meshmatcap_frag:OP,meshnormal_vert:kP,meshnormal_frag:BP,meshphong_vert:zP,meshphong_frag:VP,meshphysical_vert:HP,meshphysical_frag:GP,meshtoon_vert:WP,meshtoon_frag:XP,points_vert:jP,points_frag:$P,shadow_vert:YP,shadow_frag:qP,sprite_vert:KP,sprite_frag:QP},ge={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Mi={basic:{uniforms:on([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:on([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ft(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:on([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:on([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:on([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ft(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:on([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:on([ge.points,ge.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:on([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:on([ge.common,ge.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:on([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:on([ge.sprite,ge.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:on([ge.common,ge.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:on([ge.lights,ge.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Mi.physical={uniforms:on([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const fc={r:0,b:0,g:0},ao=new lr,ZP=new zt;function JP(t,e,n,i,r,o,s){const a=new ft(0);let l=o===!0?0:1,c,u,d=null,h=0,p=null;function v(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:e).get(y)),y}function g(_){let y=!1;const b=v(_);b===null?f(a,l):b&&b.isColor&&(f(b,1),y=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,y){const b=v(y);b&&(b.isCubeTexture||b.mapping===Gu)?(u===void 0&&(u=new cr(new yl(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:$s(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ao.copy(y.backgroundRotation),ao.x*=-1,ao.y*=-1,ao.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ao.y*=-1,ao.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ZP.makeRotationFromEuler(ao)),u.material.toneMapped=st.getTransfer(b.colorSpace)!==dt,(d!==b||h!==b.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=b,h=b.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new cr(new Sl(2,2),new Di({name:"BackgroundMaterial",uniforms:$s(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=st.getTransfer(b.colorSpace)!==dt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||h!==b.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=b,h=b.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,y){_.getRGB(fc,kS(t)),i.buffers.color.setClear(fc.r,fc.g,fc.b,y,s)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:g,addToRenderList:m,dispose:x}}function eL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let o=r,s=!1;function a(S,P,U,z,O){let G=!1;const H=d(z,U,P);o!==H&&(o=H,c(o.object)),G=p(S,z,U,O),G&&v(S,z,U,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(G||s)&&(s=!1,y(S,P,U,z),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function d(S,P,U){const z=U.wireframe===!0;let O=i[S.id];O===void 0&&(O={},i[S.id]=O);let G=O[P.id];G===void 0&&(G={},O[P.id]=G);let H=G[z];return H===void 0&&(H=h(l()),G[z]=H),H}function h(S){const P=[],U=[],z=[];for(let O=0;O<n;O++)P[O]=0,U[O]=0,z[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,P,U,z){const O=o.attributes,G=P.attributes;let H=0;const Y=U.getAttributes();for(const R in Y)if(Y[R].location>=0){const W=O[R];let se=G[R];if(se===void 0&&(R==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),R==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),W===void 0||W.attribute!==se||se&&W.data!==se.data)return!0;H++}return o.attributesNum!==H||o.index!==z}function v(S,P,U,z){const O={},G=P.attributes;let H=0;const Y=U.getAttributes();for(const R in Y)if(Y[R].location>=0){let W=G[R];W===void 0&&(R==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),R==="instanceColor"&&S.instanceColor&&(W=S.instanceColor));const se={};se.attribute=W,W&&W.data&&(se.data=W.data),O[R]=se,H++}o.attributes=O,o.attributesNum=H,o.index=z}function g(){const S=o.newAttributes;for(let P=0,U=S.length;P<U;P++)S[P]=0}function m(S){f(S,0)}function f(S,P){const U=o.newAttributes,z=o.enabledAttributes,O=o.attributeDivisors;U[S]=1,z[S]===0&&(t.enableVertexAttribArray(S),z[S]=1),O[S]!==P&&(t.vertexAttribDivisor(S,P),O[S]=P)}function x(){const S=o.newAttributes,P=o.enabledAttributes;for(let U=0,z=P.length;U<z;U++)P[U]!==S[U]&&(t.disableVertexAttribArray(U),P[U]=0)}function _(S,P,U,z,O,G,H){H===!0?t.vertexAttribIPointer(S,P,U,O,G):t.vertexAttribPointer(S,P,U,z,O,G)}function y(S,P,U,z){g();const O=z.attributes,G=U.getAttributes(),H=P.defaultAttributeValues;for(const Y in G){const R=G[Y];if(R.location>=0){let F=O[Y];if(F===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(F=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(F=S.instanceColor)),F!==void 0){const W=F.normalized,se=F.itemSize,ce=e.get(F);if(ce===void 0)continue;const Ee=ce.buffer,be=ce.type,ze=ce.bytesPerElement,Z=be===t.INT||be===t.UNSIGNED_INT||F.gpuType===xm;if(F.isInterleavedBufferAttribute){const q=F.data,ve=q.stride,Ie=F.offset;if(q.isInstancedInterleavedBuffer){for(let Te=0;Te<R.locationSize;Te++)f(R.location+Te,q.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Te=0;Te<R.locationSize;Te++)m(R.location+Te);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Te=0;Te<R.locationSize;Te++)_(R.location+Te,se/R.locationSize,be,W,ve*ze,(Ie+se/R.locationSize*Te)*ze,Z)}else{if(F.isInstancedBufferAttribute){for(let q=0;q<R.locationSize;q++)f(R.location+q,F.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let q=0;q<R.locationSize;q++)m(R.location+q);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let q=0;q<R.locationSize;q++)_(R.location+q,se/R.locationSize,be,W,se*ze,se/R.locationSize*q*ze,Z)}}else if(H!==void 0){const W=H[Y];if(W!==void 0)switch(W.length){case 2:t.vertexAttrib2fv(R.location,W);break;case 3:t.vertexAttrib3fv(R.location,W);break;case 4:t.vertexAttrib4fv(R.location,W);break;default:t.vertexAttrib1fv(R.location,W)}}}}x()}function b(){L();for(const S in i){const P=i[S];for(const U in P){const z=P[U];for(const O in z)u(z[O].object),delete z[O];delete P[U]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const U in P){const z=P[U];for(const O in z)u(z[O].object),delete z[O];delete P[U]}delete i[S.id]}function A(S){for(const P in i){const U=i[P];if(U[S.id]===void 0)continue;const z=U[S.id];for(const O in z)u(z[O].object),delete z[O];delete U[S.id]}}function L(){w(),s=!0,o!==r&&(o=r,c(o.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function tL(t,e,n){let i;function r(c){i=c}function o(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function s(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)s(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g]*h[g];n.update(v,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function nL(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==di&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ar&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Qi&&!L)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=v>0,E=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:b,maxSamples:E}}function iL(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new ho,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||v===null||v.length===0||o&&!m)o?u(null):c();else{const x=o?0:i,_=x*4;let y=f.clippingState||null;l.value=y,y=u(v,h,_,p);for(let b=0;b!==_;++b)y[b]=n[b];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,v){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const f=p+g*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,y=p;_!==g;++_,y+=4)s.copy(d[_]).applyMatrix4(x,a),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function rL(t){let e=new WeakMap;function n(s,a){return a===wh?s.mapping=Ws:a===bh&&(s.mapping=Xs),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===wh||a===bh)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new a2(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const Ir=4,Kg=[.125,.215,.35,.446,.526,.582],mo=20,oL=256,_a=new WS,Qg=new ft;let ef=null,tf=0,nf=0,rf=!1;const sL=new Q;class Zg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,o={}){const{size:s=256,position:a=sL}=o;ef=this._renderer.getRenderTarget(),tf=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),rf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ex(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ef,tf,nf),this._renderer.xr.enabled=rf,e.scissorTest=!1,ns(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ef=this._renderer.getRenderTarget(),tf=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),rf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:ea,format:di,colorSpace:js,depthBuffer:!1},r=Jg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jg(e,n,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=aL(o)),this._blurMaterial=cL(o,e,n)}return r}_compileMaterial(e){const n=new cr(new eo,e);this._renderer.compile(n,_a)}_sceneToCubeUV(e,n,i,r,o){const l=new ci(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Qg),d.toneMapping=Gr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new cr(new yl,new US({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let f=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,f=!0):(m.color.copy(Qg),f=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+u[_],o.y,o.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+u[_],o.z)):(l.up.set(0,c[_],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+u[_]));const b=this._cubeSize;ns(r,y*b,_>2?b:0,b,b),d.setRenderTarget(r),f&&d.render(g,l),d.render(e,l)}d.toneMapping=p,d.autoClear=h,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ws||e.mapping===Xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ex());const o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;const a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;ns(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,_a)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,o=this._pingPongRenderTarget;if(this._ggxMaterial===null){const x=3*Math.max(this._cubeSize,16),_=4*this._cubeSize;this._ggxMaterial=lL(this._lodMax,x,_)}const s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=.05+c*.95,p=d*h,{_lodMax:v}=this,g=this._sizeLods[i],m=3*g*(i>v-Ir?i-v+Ir:0),f=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,ns(o,m,f,3*g,2*g),r.setRenderTarget(o),r.render(a,_a),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=v-i,ns(e,m,f,3*g,2*g),r.setRenderTarget(e),r.render(a,_a)}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*mo-1),g=o/v,m=isFinite(o)?1+Math.floor(u*g):mo;m>mo&&je(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mo}`);const f=[];let x=0;for(let A=0;A<mo;++A){const L=A/g,w=Math.exp(-L*L/2);f.push(w),A===0?x+=w:A<m&&(x+=2*w)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-i;const y=this._sizeLods[r],b=3*y*(r>_-Ir?r-_+Ir:0),E=4*(this._cubeSize-y);ns(n,b,E,3*y,2*y),l.setRenderTarget(n),l.render(d,_a)}}function aL(t){const e=[],n=[],i=[];let r=t;const o=t-Ir+1+Kg.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);e.push(a);let l=1/a;s>t-Ir?l=Kg[s-t+Ir-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,g=3,m=2,f=1,x=new Float32Array(g*v*p),_=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let E=0;E<p;E++){const A=E%3*2/3-1,L=E>2?0:-1,w=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];x.set(w,g*v*E),_.set(h,m*v*E);const S=[E,E,E,E,E,E];y.set(S,f*v*E)}const b=new eo;b.setAttribute("position",new Pi(x,g)),b.setAttribute("uv",new Pi(_,m)),b.setAttribute("faceIndex",new Pi(y,f)),i.push(new cr(b,null)),r>Ir&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Jg(t,e,n){const i=new Fo(t,e,n);return i.texture.mapping=Gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ns(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function lL(t,e,n){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:oL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function cL(t,e,n){const i=new Float32Array(mo),r=new Q(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:mo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function ex(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function tx(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Xu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uL(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===wh||l===bh,u=l===Ws||l===Xs;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Zg(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Zg(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function dL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&sl("WebGLRenderer: "+i+" extension not supported."),r}}}function fL(t,e,n,i){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",s),delete r[h.id];const p=o.get(h);p&&(e.remove(p),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,v=d.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let _=0,y=x.length;_<y;_+=3){const b=x[_+0],E=x[_+1],A=x[_+2];h.push(b,E,E,A,A,b)}}else if(v!==void 0){const x=v.array;g=v.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const b=_+0,E=_+1,A=_+2;h.push(b,E,E,A,A,b)}}else return;const m=new(LS(h)?OS:FS)(h,1);m.version=g;const f=o.get(d);f&&e.remove(f),o.set(d,m)}function u(d){const h=o.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function hL(t,e,n){let i;function r(h){i=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function l(h,p){t.drawElements(i,p,o,h*s),n.update(p,i,1)}function c(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,o,h*s,v),n.update(p,i,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,h,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];n.update(m,i,1)}function d(h,p,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/s,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,h,0,g,0,v);let f=0;for(let x=0;x<v;x++)f+=p[x]*g[x];n.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function pL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:Dt("WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function mL(t,e,n){const i=new WeakMap,r=new Nt;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let b=a.attributes.position.count*y,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*E*4*d),L=new DS(A,b,E,d);L.type=Qi,L.needsUpdate=!0;const w=y*4;for(let P=0;P<d;P++){const U=f[P],z=x[P],O=_[P],G=b*E*4*P;for(let H=0;H<U.count;H++){const Y=H*w;v===!0&&(r.fromBufferAttribute(U,H),A[G+Y+0]=r.x,A[G+Y+1]=r.y,A[G+Y+2]=r.z,A[G+Y+3]=0),g===!0&&(r.fromBufferAttribute(z,H),A[G+Y+4]=r.x,A[G+Y+5]=r.y,A[G+Y+6]=r.z,A[G+Y+7]=0),m===!0&&(r.fromBufferAttribute(O,H),A[G+Y+8]=r.x,A[G+Y+9]=r.y,A[G+Y+10]=r.z,A[G+Y+11]=O.itemSize===4?r.w:1)}}h={count:d,texture:L,size:new ct(b,E)},i.set(a,h),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:o}}function gL(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}const jS=new un,nx=new HS(1,1),$S=new DS,YS=new GC,qS=new zS,ix=[],rx=[],ox=new Float32Array(16),sx=new Float32Array(9),ax=new Float32Array(4);function na(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=ix[r];if(o===void 0&&(o=new Float32Array(r),ix[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ju(t,e){let n=rx[e];n===void 0&&(n=new Int32Array(e),rx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function xL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function vL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function _L(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function yL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function SL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(Vt(n,i))return;ax.set(i),t.uniformMatrix2fv(this.addr,!1,ax),Ht(n,i)}}function EL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(Vt(n,i))return;sx.set(i),t.uniformMatrix3fv(this.addr,!1,sx),Ht(n,i)}}function ML(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(Vt(n,i))return;ox.set(i),t.uniformMatrix4fv(this.addr,!1,ox),Ht(n,i)}}function wL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function bL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function TL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function AL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function CL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function RL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function PL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function LL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function DL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(nx.compareFunction=PS,o=nx):o=jS,n.setTexture2D(e||o,r)}function NL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||YS,r)}function IL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||qS,r)}function UL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$S,r)}function FL(t){switch(t){case 5126:return xL;case 35664:return vL;case 35665:return _L;case 35666:return yL;case 35674:return SL;case 35675:return EL;case 35676:return ML;case 5124:case 35670:return wL;case 35667:case 35671:return bL;case 35668:case 35672:return TL;case 35669:case 35673:return AL;case 5125:return CL;case 36294:return RL;case 36295:return PL;case 36296:return LL;case 35678:case 36198:case 36298:case 36306:case 35682:return DL;case 35679:case 36299:case 36307:return NL;case 35680:case 36300:case 36308:case 36293:return IL;case 36289:case 36303:case 36311:case 36292:return UL}}function OL(t,e){t.uniform1fv(this.addr,e)}function kL(t,e){const n=na(e,this.size,2);t.uniform2fv(this.addr,n)}function BL(t,e){const n=na(e,this.size,3);t.uniform3fv(this.addr,n)}function zL(t,e){const n=na(e,this.size,4);t.uniform4fv(this.addr,n)}function VL(t,e){const n=na(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function HL(t,e){const n=na(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function GL(t,e){const n=na(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function WL(t,e){t.uniform1iv(this.addr,e)}function XL(t,e){t.uniform2iv(this.addr,e)}function jL(t,e){t.uniform3iv(this.addr,e)}function $L(t,e){t.uniform4iv(this.addr,e)}function YL(t,e){t.uniform1uiv(this.addr,e)}function qL(t,e){t.uniform2uiv(this.addr,e)}function KL(t,e){t.uniform3uiv(this.addr,e)}function QL(t,e){t.uniform4uiv(this.addr,e)}function ZL(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);Vt(i,o)||(t.uniform1iv(this.addr,o),Ht(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||jS,o[s])}function JL(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);Vt(i,o)||(t.uniform1iv(this.addr,o),Ht(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||YS,o[s])}function eD(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);Vt(i,o)||(t.uniform1iv(this.addr,o),Ht(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||qS,o[s])}function tD(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);Vt(i,o)||(t.uniform1iv(this.addr,o),Ht(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||$S,o[s])}function nD(t){switch(t){case 5126:return OL;case 35664:return kL;case 35665:return BL;case 35666:return zL;case 35674:return VL;case 35675:return HL;case 35676:return GL;case 5124:case 35670:return WL;case 35667:case 35671:return XL;case 35668:case 35672:return jL;case 35669:case 35673:return $L;case 5125:return YL;case 36294:return qL;case 36295:return KL;case 36296:return QL;case 35678:case 36198:case 36298:case 36306:case 35682:return ZL;case 35679:case 36299:case 36307:return JL;case 35680:case 36300:case 36308:case 36293:return eD;case 36289:case 36303:case 36311:case 36292:return tD}}class iD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=FL(n.type)}}class rD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nD(n.type)}}class oD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const of=/(\w+)(\])?(\[|\.)?/g;function lx(t,e){t.seq.push(e),t.map[e.id]=e}function sD(t,e,n){const i=t.name,r=i.length;for(of.lastIndex=0;;){const o=of.exec(i),s=of.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){lx(n,c===void 0?new iD(a,t,e):new rD(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new oD(a),lx(n,d)),n=d}}}class Nc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);sD(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function cx(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const aD=37297;let lD=0;function cD(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}const ux=new qe;function uD(t){st._getMatrix(ux,st.workingColorSpace,t);const e=`mat3( ${ux.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case du:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function dx(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),o=(t.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+o+`

`+cD(t.getShaderSource(e),a)}else return o}function dD(t,e){const n=uD(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function fD(t,e){let n;switch(e){case gC:n="Linear";break;case xC:n="Reinhard";break;case vC:n="Cineon";break;case _C:n="ACESFilmic";break;case SC:n="AgX";break;case EC:n="Neutral";break;case yC:n="Custom";break;default:je("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const hc=new Q;function hD(){st.getLuminanceCoefficients(hc);const t=hc.x.toFixed(4),e=hc.y.toFixed(4),n=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function mD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function gD(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function wa(t){return t!==""}function fx(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xD=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(t){return t.replace(xD,_D)}const vD=new Map;function _D(t,e){let n=Ze[e];if(n===void 0){const i=vD.get(e);if(i!==void 0)n=Ze[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ip(n)}const yD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function px(t){return t.replace(yD,SD)}function SD(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function mx(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ED(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===yS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===qA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function MD(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case Gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wD(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function bD(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case SS:e="ENVMAP_BLENDING_MULTIPLY";break;case pC:e="ENVMAP_BLENDING_MIX";break;case mC:e="ENVMAP_BLENDING_ADD";break}return e}function TD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function AD(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=ED(n),c=MD(n),u=wD(n),d=bD(n),h=TD(n),p=pD(n),v=mD(o),g=r.createProgram();let m,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(wa).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(wa).join(`
`),f.length>0&&(f+=`
`)):(m=[mx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),f=[mx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gr?"#define TONE_MAPPING":"",n.toneMapping!==Gr?Ze.tonemapping_pars_fragment:"",n.toneMapping!==Gr?fD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,dD("linearToOutputTexel",n.outputColorSpace),hD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wa).join(`
`)),s=ip(s),s=fx(s,n),s=hx(s,n),a=ip(a),a=fx(a,n),a=hx(a,n),s=px(s),a=px(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Pg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Pg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=x+m+s,y=x+f+a,b=cx(r,r.VERTEX_SHADER,_),E=cx(r,r.FRAGMENT_SHADER,y);r.attachShader(g,b),r.attachShader(g,E),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(P){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(g)||"",z=r.getShaderInfoLog(b)||"",O=r.getShaderInfoLog(E)||"",G=U.trim(),H=z.trim(),Y=O.trim();let R=!0,F=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(R=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,b,E);else{const W=dx(r,b,"vertex"),se=dx(r,E,"fragment");Dt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+W+`
`+se)}else G!==""?je("WebGLProgram: Program Info Log:",G):(H===""||Y==="")&&(F=!1);F&&(P.diagnostics={runnable:R,programLog:G,vertexShader:{log:H,prefix:m},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(b),r.deleteShader(E),L=new Nc(r,g),w=gD(r,g)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(g,aD)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lD++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=E,this}let CD=0;class RD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new PD(e),n.set(e,i)),i}}class PD{constructor(e){this.id=CD++,this.code=e,this.usedTimes=0}}function LD(t,e,n,i,r,o,s){const a=new NS,l=new RD,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,P,U,z){const O=U.fog,G=z.geometry,H=w.isMeshStandardMaterial?U.environment:null,Y=(w.isMeshStandardMaterial?n:e).get(w.envMap||H),R=Y&&Y.mapping===Gu?Y.image.height:null,F=v[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&je("WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const W=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,se=W!==void 0?W.length:0;let ce=0;G.morphAttributes.position!==void 0&&(ce=1),G.morphAttributes.normal!==void 0&&(ce=2),G.morphAttributes.color!==void 0&&(ce=3);let Ee,be,ze,Z;if(F){const Qe=Mi[F];Ee=Qe.vertexShader,be=Qe.fragmentShader}else Ee=w.vertexShader,be=w.fragmentShader,l.update(w),ze=l.getVertexShaderID(w),Z=l.getFragmentShaderID(w);const q=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),Ie=z.isInstancedMesh===!0,Te=z.isBatchedMesh===!0,We=!!w.map,_t=!!w.matcap,He=!!Y,at=!!w.aoMap,N=!!w.lightMap,$e=!!w.bumpMap,Ke=!!w.normalMap,it=!!w.displacementMap,Se=!!w.emissiveMap,pt=!!w.metalnessMap,Re=!!w.roughnessMap,Ge=w.anisotropy>0,C=w.clearcoat>0,M=w.dispersion>0,V=w.iridescence>0,J=w.sheen>0,ne=w.transmission>0,K=Ge&&!!w.anisotropyMap,Pe=C&&!!w.clearcoatMap,pe=C&&!!w.clearcoatNormalMap,De=C&&!!w.clearcoatRoughnessMap,Ce=V&&!!w.iridescenceMap,re=V&&!!w.iridescenceThicknessMap,le=J&&!!w.sheenColorMap,Ue=J&&!!w.sheenRoughnessMap,Le=!!w.specularMap,_e=!!w.specularColorMap,Be=!!w.specularIntensityMap,I=ne&&!!w.transmissionMap,me=ne&&!!w.thicknessMap,he=!!w.gradientMap,de=!!w.alphaMap,oe=w.alphaTest>0,te=!!w.alphaHash,ie=!!w.extensions;let xe=Gr;w.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(xe=t.toneMapping);const Oe={shaderID:F,shaderType:w.type,shaderName:w.name,vertexShader:Ee,fragmentShader:be,defines:w.defines,customVertexShaderID:ze,customFragmentShaderID:Z,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Te,batchingColor:Te&&z._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&z.instanceColor!==null,instancingMorph:Ie&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:q===null?t.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:js,alphaToCoverage:!!w.alphaToCoverage,map:We,matcap:_t,envMap:He,envMapMode:He&&Y.mapping,envMapCubeUVHeight:R,aoMap:at,lightMap:N,bumpMap:$e,normalMap:Ke,displacementMap:h&&it,emissiveMap:Se,normalMapObjectSpace:Ke&&w.normalMapType===AC,normalMapTangentSpace:Ke&&w.normalMapType===TC,metalnessMap:pt,roughnessMap:Re,anisotropy:Ge,anisotropyMap:K,clearcoat:C,clearcoatMap:Pe,clearcoatNormalMap:pe,clearcoatRoughnessMap:De,dispersion:M,iridescence:V,iridescenceMap:Ce,iridescenceThicknessMap:re,sheen:J,sheenColorMap:le,sheenRoughnessMap:Ue,specularMap:Le,specularColorMap:_e,specularIntensityMap:Be,transmission:ne,transmissionMap:I,thicknessMap:me,gradientMap:he,opaque:w.transparent===!1&&w.blending===ws&&w.alphaToCoverage===!1,alphaMap:de,alphaTest:oe,alphaHash:te,combine:w.combine,mapUv:We&&g(w.map.channel),aoMapUv:at&&g(w.aoMap.channel),lightMapUv:N&&g(w.lightMap.channel),bumpMapUv:$e&&g(w.bumpMap.channel),normalMapUv:Ke&&g(w.normalMap.channel),displacementMapUv:it&&g(w.displacementMap.channel),emissiveMapUv:Se&&g(w.emissiveMap.channel),metalnessMapUv:pt&&g(w.metalnessMap.channel),roughnessMapUv:Re&&g(w.roughnessMap.channel),anisotropyMapUv:K&&g(w.anisotropyMap.channel),clearcoatMapUv:Pe&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:re&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:le&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&g(w.sheenRoughnessMap.channel),specularMapUv:Le&&g(w.specularMap.channel),specularColorMapUv:_e&&g(w.specularColorMap.channel),specularIntensityMapUv:Be&&g(w.specularIntensityMap.channel),transmissionMapUv:I&&g(w.transmissionMap.channel),thicknessMapUv:me&&g(w.thicknessMap.channel),alphaMapUv:de&&g(w.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ke||Ge),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(We||de),fog:!!O,useFog:w.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:xe,decodeVideoTexture:We&&w.map.isVideoTexture===!0&&st.getTransfer(w.map.colorSpace)===dt,decodeVideoTextureEmissive:Se&&w.emissiveMap.isVideoTexture===!0&&st.getTransfer(w.emissiveMap.colorSpace)===dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===$i,flipSided:w.side===Mn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ie&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&w.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function f(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)S.push(P),S.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(x(S,w),_(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function x(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function _(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){const S=v[w.type];let P;if(S){const U=Mi[S];P=i2.clone(U.uniforms)}else P=w.uniforms;return P}function b(w,S){let P;for(let U=0,z=u.length;U<z;U++){const O=u[U];if(O.cacheKey===S){P=O,++P.usedTimes;break}}return P===void 0&&(P=new AD(t,S,w,o),u.push(P)),P}function E(w){if(--w.usedTimes===0){const S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:b,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:L}}function DD(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function ND(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function gx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function xx(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,h,p,v,g,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function a(d,h,p,v,g,m){const f=s(d,h,p,v,g,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,v,g,m){const f=s(d,h,p,v,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||ND),i.length>1&&i.sort(h||gx),r.length>1&&r.sort(h||gx)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function ID(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new xx,t.set(i,[s])):r>=o.length?(s=new xx,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function UD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new ft};break;case"SpotLight":n={position:new Q,direction:new Q,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":n={color:new ft,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return t[e.id]=n,n}}}function FD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let OD=0;function kD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function BD(t){const e=new UD,n=FD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Q);const r=new Q,o=new zt,s=new zt;function a(c){let u=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,v=0,g=0,m=0,f=0,x=0,_=0,y=0,b=0,E=0,A=0;c.sort(kD);for(let w=0,S=c.length;w<S;w++){const P=c[w],U=P.color,z=P.intensity,O=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*z,d+=U.g*z,h+=U.b*z;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],z);A++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,R=n.get(P);R.shadowIntensity=Y.intensity,R.shadowBias=Y.bias,R.shadowNormalBias=Y.normalBias,R.shadowRadius=Y.radius,R.shadowMapSize=Y.mapSize,i.directionalShadow[p]=R,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=P.shadow.matrix,x++}i.directional[p]=H,p++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(U).multiplyScalar(z),H.distance=O,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[g]=H;const Y=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,Y.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[g]=Y.matrix,P.castShadow){const R=n.get(P);R.shadowIntensity=Y.intensity,R.shadowBias=Y.bias,R.shadowNormalBias=Y.normalBias,R.shadowRadius=Y.radius,R.shadowMapSize=Y.mapSize,i.spotShadow[g]=R,i.spotShadowMap[g]=G,y++}g++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(U).multiplyScalar(z),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const Y=P.shadow,R=n.get(P);R.shadowIntensity=Y.intensity,R.shadowBias=Y.bias,R.shadowNormalBias=Y.normalBias,R.shadowRadius=Y.radius,R.shadowMapSize=Y.mapSize,R.shadowCameraNear=Y.camera.near,R.shadowCameraFar=Y.camera.far,i.pointShadow[v]=R,i.pointShadowMap[v]=G,i.pointShadowMatrix[v]=P.shadow.matrix,_++}i.point[v]=H,v++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(z),H.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[f]=H,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==v||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==x||L.numPointShadows!==_||L.numSpotShadows!==y||L.numSpotMaps!==b||L.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+b-E,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,L.directionalLength=p,L.pointLength=v,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=x,L.numPointShadows=_,L.numSpotShadows=y,L.numSpotMaps=b,L.numLightProbes=A,i.version=OD++)}function l(c,u){let d=0,h=0,p=0,v=0,g=0;const m=u.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const _=c[f];if(_.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(_.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),s.identity(),o.copy(_.matrixWorld),o.premultiply(m),s.extractRotation(o),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),v++}else if(_.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function vx(t){const e=new BD(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function o(u){n.push(u)}function s(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function zD(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new vx(t),e.set(r,[a])):o>=s.length?(a=new vx(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const VD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GD(t,e,n){let i=new VS;const r=new ct,o=new ct,s=new Nt,a=new p2({depthPacking:bC}),l=new m2,c={},u=n.maxTextureSize,d={[Kr]:Mn,[Mn]:Kr,[$i]:$i},h=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:VD,fragmentShader:HD}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new eo;v.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new cr(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yS;let f=this.type;this.render=function(E,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Ji),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=f!==Gi&&this.type===Gi,O=f===Gi&&this.type!==Gi;for(let G=0,H=E.length;G<H;G++){const Y=E[G],R=Y.shadow;if(R===void 0){je("WebGLShadowMap:",Y,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const F=R.getFrameExtents();if(r.multiply(F),o.copy(R.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/F.x),r.x=o.x*F.x,R.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/F.y),r.y=o.y*F.y,R.mapSize.y=o.y)),R.map===null||z===!0||O===!0){const se=this.type!==Gi?{minFilter:Un,magFilter:Un}:{};R.map!==null&&R.map.dispose(),R.map=new Fo(r.x,r.y,se),R.map.texture.name=Y.name+".shadowMap",R.camera.updateProjectionMatrix()}t.setRenderTarget(R.map),t.clear();const W=R.getViewportCount();for(let se=0;se<W;se++){const ce=R.getViewport(se);s.set(o.x*ce.x,o.y*ce.y,o.x*ce.z,o.y*ce.w),U.viewport(s),R.updateMatrices(Y,se),i=R.getFrustum(),y(A,L,R.camera,Y,this.type)}R.isPointLightShadow!==!0&&this.type===Gi&&x(R,L),R.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,P)};function x(E,A){const L=e.update(g);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Fo(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(A,null,L,h,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(A,null,L,p,g,null)}function _(E,A,L,w){let S=null;const P=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)S=P;else if(S=L.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=S.uuid,z=A.uuid;let O=c[U];O===void 0&&(O={},c[U]=O);let G=O[z];G===void 0&&(G=S.clone(),O[z]=G,A.addEventListener("dispose",b)),S=G}if(S.visible=A.visible,S.wireframe=A.wireframe,w===Gi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=t.properties.get(S);U.light=L}return S}function y(E,A,L,w,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Gi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const z=e.update(E),O=E.material;if(Array.isArray(O)){const G=z.groups;for(let H=0,Y=G.length;H<Y;H++){const R=G[H],F=O[R.materialIndex];if(F&&F.visible){const W=_(E,F,w,S);E.onBeforeShadow(t,E,A,L,z,W,R),t.renderBufferDirect(L,null,z,W,E,R),E.onAfterShadow(t,E,A,L,z,W,R)}}}else if(O.visible){const G=_(E,O,w,S);E.onBeforeShadow(t,E,A,L,z,G,null),t.renderBufferDirect(L,null,z,G,E,null),E.onAfterShadow(t,E,A,L,z,G,null)}}const U=E.children;for(let z=0,O=U.length;z<O;z++)y(U[z],A,L,w,S)}function b(E){E.target.removeEventListener("dispose",b);for(const L in c){const w=c[L],S=E.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const WD={[xh]:vh,[_h]:Eh,[yh]:Mh,[Gs]:Sh,[vh]:xh,[Eh]:_h,[Mh]:yh,[Sh]:Gs};function XD(t,e){function n(){let I=!1;const me=new Nt;let he=null;const de=new Nt(0,0,0,0);return{setMask:function(oe){he!==oe&&!I&&(t.colorMask(oe,oe,oe,oe),he=oe)},setLocked:function(oe){I=oe},setClear:function(oe,te,ie,xe,Oe){Oe===!0&&(oe*=xe,te*=xe,ie*=xe),me.set(oe,te,ie,xe),de.equals(me)===!1&&(t.clearColor(oe,te,ie,xe),de.copy(me))},reset:function(){I=!1,he=null,de.set(-1,0,0,0)}}}function i(){let I=!1,me=!1,he=null,de=null,oe=null;return{setReversed:function(te){if(me!==te){const ie=e.get("EXT_clip_control");te?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),me=te;const xe=oe;oe=null,this.setClear(xe)}},getReversed:function(){return me},setTest:function(te){te?q(t.DEPTH_TEST):ve(t.DEPTH_TEST)},setMask:function(te){he!==te&&!I&&(t.depthMask(te),he=te)},setFunc:function(te){if(me&&(te=WD[te]),de!==te){switch(te){case xh:t.depthFunc(t.NEVER);break;case vh:t.depthFunc(t.ALWAYS);break;case _h:t.depthFunc(t.LESS);break;case Gs:t.depthFunc(t.LEQUAL);break;case yh:t.depthFunc(t.EQUAL);break;case Sh:t.depthFunc(t.GEQUAL);break;case Eh:t.depthFunc(t.GREATER);break;case Mh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=te}},setLocked:function(te){I=te},setClear:function(te){oe!==te&&(me&&(te=1-te),t.clearDepth(te),oe=te)},reset:function(){I=!1,he=null,de=null,oe=null,me=!1}}}function r(){let I=!1,me=null,he=null,de=null,oe=null,te=null,ie=null,xe=null,Oe=null;return{setTest:function(Qe){I||(Qe?q(t.STENCIL_TEST):ve(t.STENCIL_TEST))},setMask:function(Qe){me!==Qe&&!I&&(t.stencilMask(Qe),me=Qe)},setFunc:function(Qe,Tt,It){(he!==Qe||de!==Tt||oe!==It)&&(t.stencilFunc(Qe,Tt,It),he=Qe,de=Tt,oe=It)},setOp:function(Qe,Tt,It){(te!==Qe||ie!==Tt||xe!==It)&&(t.stencilOp(Qe,Tt,It),te=Qe,ie=Tt,xe=It)},setLocked:function(Qe){I=Qe},setClear:function(Qe){Oe!==Qe&&(t.clearStencil(Qe),Oe=Qe)},reset:function(){I=!1,me=null,he=null,de=null,oe=null,te=null,ie=null,xe=null,Oe=null}}}const o=new n,s=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],v=null,g=!1,m=null,f=null,x=null,_=null,y=null,b=null,E=null,A=new ft(0,0,0),L=0,w=!1,S=null,P=null,U=null,z=null,O=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const R=t.getParameter(t.VERSION);R.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(R)[1]),H=Y>=1):R.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),H=Y>=2);let F=null,W={};const se=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),Ee=new Nt().fromArray(se),be=new Nt().fromArray(ce);function ze(I,me,he,de){const oe=new Uint8Array(4),te=t.createTexture();t.bindTexture(I,te),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ie=0;ie<he;ie++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(me+ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return te}const Z={};Z[t.TEXTURE_2D]=ze(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=ze(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=ze(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=ze(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),q(t.DEPTH_TEST),s.setFunc(Gs),$e(!1),Ke(wg),q(t.CULL_FACE),at(Ji);function q(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function ve(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function Ie(I,me){return d[I]!==me?(t.bindFramebuffer(I,me),d[I]=me,I===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=me),I===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=me),!0):!1}function Te(I,me){let he=p,de=!1;if(I){he=h.get(me),he===void 0&&(he=[],h.set(me,he));const oe=I.textures;if(he.length!==oe.length||he[0]!==t.COLOR_ATTACHMENT0){for(let te=0,ie=oe.length;te<ie;te++)he[te]=t.COLOR_ATTACHMENT0+te;he.length=oe.length,de=!0}}else he[0]!==t.BACK&&(he[0]=t.BACK,de=!0);de&&t.drawBuffers(he)}function We(I){return v!==I?(t.useProgram(I),v=I,!0):!1}const _t={[po]:t.FUNC_ADD,[QA]:t.FUNC_SUBTRACT,[ZA]:t.FUNC_REVERSE_SUBTRACT};_t[JA]=t.MIN,_t[eC]=t.MAX;const He={[tC]:t.ZERO,[nC]:t.ONE,[iC]:t.SRC_COLOR,[mh]:t.SRC_ALPHA,[cC]:t.SRC_ALPHA_SATURATE,[aC]:t.DST_COLOR,[oC]:t.DST_ALPHA,[rC]:t.ONE_MINUS_SRC_COLOR,[gh]:t.ONE_MINUS_SRC_ALPHA,[lC]:t.ONE_MINUS_DST_COLOR,[sC]:t.ONE_MINUS_DST_ALPHA,[uC]:t.CONSTANT_COLOR,[dC]:t.ONE_MINUS_CONSTANT_COLOR,[fC]:t.CONSTANT_ALPHA,[hC]:t.ONE_MINUS_CONSTANT_ALPHA};function at(I,me,he,de,oe,te,ie,xe,Oe,Qe){if(I===Ji){g===!0&&(ve(t.BLEND),g=!1);return}if(g===!1&&(q(t.BLEND),g=!0),I!==KA){if(I!==m||Qe!==w){if((f!==po||y!==po)&&(t.blendEquation(t.FUNC_ADD),f=po,y=po),Qe)switch(I){case ws:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bg:t.blendFunc(t.ONE,t.ONE);break;case Tg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ag:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Dt("WebGLState: Invalid blending: ",I);break}else switch(I){case ws:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Tg:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ag:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",I);break}x=null,_=null,b=null,E=null,A.set(0,0,0),L=0,m=I,w=Qe}return}oe=oe||me,te=te||he,ie=ie||de,(me!==f||oe!==y)&&(t.blendEquationSeparate(_t[me],_t[oe]),f=me,y=oe),(he!==x||de!==_||te!==b||ie!==E)&&(t.blendFuncSeparate(He[he],He[de],He[te],He[ie]),x=he,_=de,b=te,E=ie),(xe.equals(A)===!1||Oe!==L)&&(t.blendColor(xe.r,xe.g,xe.b,Oe),A.copy(xe),L=Oe),m=I,w=!1}function N(I,me){I.side===$i?ve(t.CULL_FACE):q(t.CULL_FACE);let he=I.side===Mn;me&&(he=!he),$e(he),I.blending===ws&&I.transparent===!1?at(Ji):at(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),o.setMask(I.colorWrite);const de=I.stencilWrite;a.setTest(de),de&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Se(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?q(t.SAMPLE_ALPHA_TO_COVERAGE):ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(I){S!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),S=I)}function Ke(I){I!==$A?(q(t.CULL_FACE),I!==P&&(I===wg?t.cullFace(t.BACK):I===YA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ve(t.CULL_FACE),P=I}function it(I){I!==U&&(H&&t.lineWidth(I),U=I)}function Se(I,me,he){I?(q(t.POLYGON_OFFSET_FILL),(z!==me||O!==he)&&(t.polygonOffset(me,he),z=me,O=he)):ve(t.POLYGON_OFFSET_FILL)}function pt(I){I?q(t.SCISSOR_TEST):ve(t.SCISSOR_TEST)}function Re(I){I===void 0&&(I=t.TEXTURE0+G-1),F!==I&&(t.activeTexture(I),F=I)}function Ge(I,me,he){he===void 0&&(F===null?he=t.TEXTURE0+G-1:he=F);let de=W[he];de===void 0&&(de={type:void 0,texture:void 0},W[he]=de),(de.type!==I||de.texture!==me)&&(F!==he&&(t.activeTexture(he),F=he),t.bindTexture(I,me||Z[I]),de.type=I,de.texture=me)}function C(){const I=W[F];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function M(){try{t.compressedTexImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function V(){try{t.compressedTexImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function J(){try{t.texSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function ne(){try{t.texSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Pe(){try{t.compressedTexSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function pe(){try{t.texStorage2D(...arguments)}catch(I){I("WebGLState:",I)}}function De(){try{t.texStorage3D(...arguments)}catch(I){I("WebGLState:",I)}}function Ce(){try{t.texImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function re(){try{t.texImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function le(I){Ee.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Ee.copy(I))}function Ue(I){be.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),be.copy(I))}function Le(I,me){let he=c.get(me);he===void 0&&(he=new WeakMap,c.set(me,he));let de=he.get(I);de===void 0&&(de=t.getUniformBlockIndex(me,I.name),he.set(I,de))}function _e(I,me){const de=c.get(me).get(I);l.get(me)!==de&&(t.uniformBlockBinding(me,de,I.__bindingPointIndex),l.set(me,de))}function Be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},F=null,W={},d={},h=new WeakMap,p=[],v=null,g=!1,m=null,f=null,x=null,_=null,y=null,b=null,E=null,A=new ft(0,0,0),L=0,w=!1,S=null,P=null,U=null,z=null,O=null,Ee.set(0,0,t.canvas.width,t.canvas.height),be.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:q,disable:ve,bindFramebuffer:Ie,drawBuffers:Te,useProgram:We,setBlending:at,setMaterial:N,setFlipSided:$e,setCullFace:Ke,setLineWidth:it,setPolygonOffset:Se,setScissorTest:pt,activeTexture:Re,bindTexture:Ge,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:V,texImage2D:Ce,texImage3D:re,updateUBOMapping:Le,uniformBlockBinding:_e,texStorage2D:pe,texStorage3D:De,texSubImage2D:J,texSubImage3D:ne,compressedTexSubImage2D:K,compressedTexSubImage3D:Pe,scissor:le,viewport:Ue,reset:Be}}function jD(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return p?new OffscreenCanvas(C,M):hu("canvas")}function g(C,M,V){let J=1;const ne=Ge(C);if((ne.width>V||ne.height>V)&&(J=V/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor(J*ne.width),Pe=Math.floor(J*ne.height);d===void 0&&(d=v(K,Pe));const pe=M?v(K,Pe):d;return pe.width=K,pe.height=Pe,pe.getContext("2d").drawImage(C,0,0,K,Pe),je("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+K+"x"+Pe+")."),pe}else return"data"in C&&je("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){t.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(C,M,V,J,ne=!1){if(C!==null){if(t[C]!==void 0)return t[C];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=M;if(M===t.RED&&(V===t.FLOAT&&(K=t.R32F),V===t.HALF_FLOAT&&(K=t.R16F),V===t.UNSIGNED_BYTE&&(K=t.R8)),M===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.R8UI),V===t.UNSIGNED_SHORT&&(K=t.R16UI),V===t.UNSIGNED_INT&&(K=t.R32UI),V===t.BYTE&&(K=t.R8I),V===t.SHORT&&(K=t.R16I),V===t.INT&&(K=t.R32I)),M===t.RG&&(V===t.FLOAT&&(K=t.RG32F),V===t.HALF_FLOAT&&(K=t.RG16F),V===t.UNSIGNED_BYTE&&(K=t.RG8)),M===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.RG8UI),V===t.UNSIGNED_SHORT&&(K=t.RG16UI),V===t.UNSIGNED_INT&&(K=t.RG32UI),V===t.BYTE&&(K=t.RG8I),V===t.SHORT&&(K=t.RG16I),V===t.INT&&(K=t.RG32I)),M===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.RGB8UI),V===t.UNSIGNED_SHORT&&(K=t.RGB16UI),V===t.UNSIGNED_INT&&(K=t.RGB32UI),V===t.BYTE&&(K=t.RGB8I),V===t.SHORT&&(K=t.RGB16I),V===t.INT&&(K=t.RGB32I)),M===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),V===t.UNSIGNED_INT&&(K=t.RGBA32UI),V===t.BYTE&&(K=t.RGBA8I),V===t.SHORT&&(K=t.RGBA16I),V===t.INT&&(K=t.RGBA32I)),M===t.RGB&&(V===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),M===t.RGBA){const Pe=ne?du:st.getTransfer(J);V===t.FLOAT&&(K=t.RGBA32F),V===t.HALF_FLOAT&&(K=t.RGBA16F),V===t.UNSIGNED_BYTE&&(K=Pe===dt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(C,M){let V;return C?M===null||M===Uo||M===il?V=t.DEPTH24_STENCIL8:M===Qi?V=t.DEPTH32F_STENCIL8:M===nl&&(V=t.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Uo||M===il?V=t.DEPTH_COMPONENT24:M===Qi?V=t.DEPTH_COMPONENT32F:M===nl&&(V=t.DEPTH_COMPONENT16),V}function b(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Un&&C.minFilter!==$n?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function E(C){const M=C.target;M.removeEventListener("dispose",E),L(M),M.isVideoTexture&&u.delete(M)}function A(C){const M=C.target;M.removeEventListener("dispose",A),S(M)}function L(C){const M=i.get(C);if(M.__webglInit===void 0)return;const V=C.source,J=h.get(V);if(J){const ne=J[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&w(C),Object.keys(J).length===0&&h.delete(V)}i.remove(C)}function w(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const V=C.source,J=h.get(V);delete J[M.__cacheKey],s.memory.textures--}function S(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let ne=0;ne<M.__webglFramebuffer[J].length;ne++)t.deleteFramebuffer(M.__webglFramebuffer[J][ne]);else t.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)t.deleteFramebuffer(M.__webglFramebuffer[J]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=C.textures;for(let J=0,ne=V.length;J<ne;J++){const K=i.get(V[J]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),s.memory.textures--),i.remove(V[J])}i.remove(C)}let P=0;function U(){P=0}function z(){const C=P;return C>=r.maxTextures&&je("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),P+=1,C}function O(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function G(C,M){const V=i.get(C);if(C.isVideoTexture&&pt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){const J=C.image;if(J===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(V,C,M);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+M)}function H(C,M){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Z(V,C,M);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+M)}function Y(C,M){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Z(V,C,M);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+M)}function R(C,M){const V=i.get(C);if(C.version>0&&V.__version!==C.version){q(V,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+M)}const F={[Th]:t.REPEAT,[Ki]:t.CLAMP_TO_EDGE,[Ah]:t.MIRRORED_REPEAT},W={[Un]:t.NEAREST,[MC]:t.NEAREST_MIPMAP_NEAREST,[$l]:t.NEAREST_MIPMAP_LINEAR,[$n]:t.LINEAR,[Rd]:t.LINEAR_MIPMAP_NEAREST,[_o]:t.LINEAR_MIPMAP_LINEAR},se={[CC]:t.NEVER,[IC]:t.ALWAYS,[RC]:t.LESS,[PS]:t.LEQUAL,[PC]:t.EQUAL,[NC]:t.GEQUAL,[LC]:t.GREATER,[DC]:t.NOTEQUAL};function ce(C,M){if(M.type===Qi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===$n||M.magFilter===Rd||M.magFilter===$l||M.magFilter===_o||M.minFilter===$n||M.minFilter===Rd||M.minFilter===$l||M.minFilter===_o)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,F[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,F[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,F[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,W[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,W[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,se[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Un||M.minFilter!==$l&&M.minFilter!==_o||M.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ee(C,M){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",E));const J=M.source;let ne=h.get(J);ne===void 0&&(ne={},h.set(J,ne));const K=O(M);if(K!==C.__cacheKey){ne[K]===void 0&&(ne[K]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,V=!0),ne[K].usedTimes++;const Pe=ne[C.__cacheKey];Pe!==void 0&&(ne[C.__cacheKey].usedTimes--,Pe.usedTimes===0&&w(M)),C.__cacheKey=K,C.__webglTexture=ne[K].texture}return V}function be(C,M,V){return Math.floor(Math.floor(C/V)/M)}function ze(C,M,V,J){const K=C.updateRanges;if(K.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,V,J,M.data);else{K.sort((re,le)=>re.start-le.start);let Pe=0;for(let re=1;re<K.length;re++){const le=K[Pe],Ue=K[re],Le=le.start+le.count,_e=be(Ue.start,M.width,4),Be=be(le.start,M.width,4);Ue.start<=Le+1&&_e===Be&&be(Ue.start+Ue.count-1,M.width,4)===_e?le.count=Math.max(le.count,Ue.start+Ue.count-le.start):(++Pe,K[Pe]=Ue)}K.length=Pe+1;const pe=t.getParameter(t.UNPACK_ROW_LENGTH),De=t.getParameter(t.UNPACK_SKIP_PIXELS),Ce=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let re=0,le=K.length;re<le;re++){const Ue=K[re],Le=Math.floor(Ue.start/4),_e=Math.ceil(Ue.count/4),Be=Le%M.width,I=Math.floor(Le/M.width),me=_e,he=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,Be,I,me,he,V,J,M.data)}C.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,pe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,De),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ce)}}function Z(C,M,V){let J=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=t.TEXTURE_3D);const ne=Ee(C,M),K=M.source;n.bindTexture(J,C.__webglTexture,t.TEXTURE0+V);const Pe=i.get(K);if(K.version!==Pe.__version||ne===!0){n.activeTexture(t.TEXTURE0+V);const pe=st.getPrimaries(st.workingColorSpace),De=M.colorSpace===br?null:st.getPrimaries(M.colorSpace),Ce=M.colorSpace===br||pe===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let re=g(M.image,!1,r.maxTextureSize);re=Re(M,re);const le=o.convert(M.format,M.colorSpace),Ue=o.convert(M.type);let Le=_(M.internalFormat,le,Ue,M.colorSpace,M.isVideoTexture);ce(J,M);let _e;const Be=M.mipmaps,I=M.isVideoTexture!==!0,me=Pe.__version===void 0||ne===!0,he=K.dataReady,de=b(M,re);if(M.isDepthTexture)Le=y(M.format===ol,M.type),me&&(I?n.texStorage2D(t.TEXTURE_2D,1,Le,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,le,Ue,null));else if(M.isDataTexture)if(Be.length>0){I&&me&&n.texStorage2D(t.TEXTURE_2D,de,Le,Be[0].width,Be[0].height);for(let oe=0,te=Be.length;oe<te;oe++)_e=Be[oe],I?he&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,le,Ue,_e.data):n.texImage2D(t.TEXTURE_2D,oe,Le,_e.width,_e.height,0,le,Ue,_e.data);M.generateMipmaps=!1}else I?(me&&n.texStorage2D(t.TEXTURE_2D,de,Le,re.width,re.height),he&&ze(M,re,le,Ue)):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,le,Ue,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){I&&me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Le,Be[0].width,Be[0].height,re.depth);for(let oe=0,te=Be.length;oe<te;oe++)if(_e=Be[oe],M.format!==di)if(le!==null)if(I){if(he)if(M.layerUpdates.size>0){const ie=qg(_e.width,_e.height,M.format,M.type);for(const xe of M.layerUpdates){const Oe=_e.data.subarray(xe*ie/_e.data.BYTES_PER_ELEMENT,(xe+1)*ie/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,xe,_e.width,_e.height,1,le,Oe)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,re.depth,le,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,Le,_e.width,_e.height,re.depth,0,_e.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?he&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,re.depth,le,Ue,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,Le,_e.width,_e.height,re.depth,0,le,Ue,_e.data)}else{I&&me&&n.texStorage2D(t.TEXTURE_2D,de,Le,Be[0].width,Be[0].height);for(let oe=0,te=Be.length;oe<te;oe++)_e=Be[oe],M.format!==di?le!==null?I?he&&n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,le,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,Le,_e.width,_e.height,0,_e.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?he&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,le,Ue,_e.data):n.texImage2D(t.TEXTURE_2D,oe,Le,_e.width,_e.height,0,le,Ue,_e.data)}else if(M.isDataArrayTexture)if(I){if(me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Le,re.width,re.height,re.depth),he)if(M.layerUpdates.size>0){const oe=qg(re.width,re.height,M.format,M.type);for(const te of M.layerUpdates){const ie=re.data.subarray(te*oe/re.data.BYTES_PER_ELEMENT,(te+1)*oe/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,re.width,re.height,1,le,Ue,ie)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,le,Ue,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,re.width,re.height,re.depth,0,le,Ue,re.data);else if(M.isData3DTexture)I?(me&&n.texStorage3D(t.TEXTURE_3D,de,Le,re.width,re.height,re.depth),he&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,le,Ue,re.data)):n.texImage3D(t.TEXTURE_3D,0,Le,re.width,re.height,re.depth,0,le,Ue,re.data);else if(M.isFramebufferTexture){if(me)if(I)n.texStorage2D(t.TEXTURE_2D,de,Le,re.width,re.height);else{let oe=re.width,te=re.height;for(let ie=0;ie<de;ie++)n.texImage2D(t.TEXTURE_2D,ie,Le,oe,te,0,le,Ue,null),oe>>=1,te>>=1}}else if(Be.length>0){if(I&&me){const oe=Ge(Be[0]);n.texStorage2D(t.TEXTURE_2D,de,Le,oe.width,oe.height)}for(let oe=0,te=Be.length;oe<te;oe++)_e=Be[oe],I?he&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,le,Ue,_e):n.texImage2D(t.TEXTURE_2D,oe,Le,le,Ue,_e);M.generateMipmaps=!1}else if(I){if(me){const oe=Ge(re);n.texStorage2D(t.TEXTURE_2D,de,Le,oe.width,oe.height)}he&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le,Ue,re)}else n.texImage2D(t.TEXTURE_2D,0,Le,le,Ue,re);m(M)&&f(J),Pe.__version=K.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function q(C,M,V){if(M.image.length!==6)return;const J=Ee(C,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+V);const K=i.get(ne);if(ne.version!==K.__version||J===!0){n.activeTexture(t.TEXTURE0+V);const Pe=st.getPrimaries(st.workingColorSpace),pe=M.colorSpace===br?null:st.getPrimaries(M.colorSpace),De=M.colorSpace===br||Pe===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,le=[];for(let te=0;te<6;te++)!Ce&&!re?le[te]=g(M.image[te],!0,r.maxCubemapSize):le[te]=re?M.image[te].image:M.image[te],le[te]=Re(M,le[te]);const Ue=le[0],Le=o.convert(M.format,M.colorSpace),_e=o.convert(M.type),Be=_(M.internalFormat,Le,_e,M.colorSpace),I=M.isVideoTexture!==!0,me=K.__version===void 0||J===!0,he=ne.dataReady;let de=b(M,Ue);ce(t.TEXTURE_CUBE_MAP,M);let oe;if(Ce){I&&me&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Be,Ue.width,Ue.height);for(let te=0;te<6;te++){oe=le[te].mipmaps;for(let ie=0;ie<oe.length;ie++){const xe=oe[ie];M.format!==di?Le!==null?I?he&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie,0,0,xe.width,xe.height,Le,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie,Be,xe.width,xe.height,0,xe.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie,0,0,xe.width,xe.height,Le,_e,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie,Be,xe.width,xe.height,0,Le,_e,xe.data)}}}else{if(oe=M.mipmaps,I&&me){oe.length>0&&de++;const te=Ge(le[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Be,te.width,te.height)}for(let te=0;te<6;te++)if(re){I?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,le[te].width,le[te].height,Le,_e,le[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,le[te].width,le[te].height,0,Le,_e,le[te].data);for(let ie=0;ie<oe.length;ie++){const Oe=oe[ie].image[te].image;I?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie+1,0,0,Oe.width,Oe.height,Le,_e,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie+1,Be,Oe.width,Oe.height,0,Le,_e,Oe.data)}}else{I?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Le,_e,le[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,Le,_e,le[te]);for(let ie=0;ie<oe.length;ie++){const xe=oe[ie];I?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie+1,0,0,Le,_e,xe.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie+1,Be,Le,_e,xe.image[te])}}}m(M)&&f(t.TEXTURE_CUBE_MAP),K.__version=ne.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ve(C,M,V,J,ne,K){const Pe=o.convert(V.format,V.colorSpace),pe=o.convert(V.type),De=_(V.internalFormat,Pe,pe,V.colorSpace),Ce=i.get(M),re=i.get(V);if(re.__renderTarget=M,!Ce.__hasExternalTextures){const le=Math.max(1,M.width>>K),Ue=Math.max(1,M.height>>K);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,K,De,le,Ue,M.depth,0,Pe,pe,null):n.texImage2D(ne,K,De,le,Ue,0,Pe,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Se(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ne,re.__webglTexture,0,it(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ne,re.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(C,M,V){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const J=M.depthTexture,ne=J&&J.isDepthTexture?J.type:null,K=y(M.stencilBuffer,ne),Pe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=it(M);Se(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,K,M.width,M.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,K,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,K,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Pe,t.RENDERBUFFER,C)}else{const J=M.textures;for(let ne=0;ne<J.length;ne++){const K=J[ne],Pe=o.convert(K.format,K.colorSpace),pe=o.convert(K.type),De=_(K.internalFormat,Pe,pe,K.colorSpace),Ce=it(M);V&&Se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,De,M.width,M.height):Se(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,De,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,De,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const ne=J.__webglTexture,K=it(M);if(M.depthTexture.format===rl)Se(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(M.depthTexture.format===ol)Se(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function We(C){const M=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=J}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const J=C.texture.mipmaps;J&&J.length>0?Te(M.__webglFramebuffer[0],C):Te(M.__webglFramebuffer,C)}else if(V){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=t.createRenderbuffer(),Ie(M.__webglDepthbuffer[J],C,!1);else{const ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,K)}}else{const J=C.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Ie(M.__webglDepthbuffer,C,!1);else{const ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,K)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function _t(C,M,V){const J=i.get(C);M!==void 0&&ve(J.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&We(C)}function He(C){const M=C.texture,V=i.get(C),J=i.get(M);C.addEventListener("dispose",A);const ne=C.textures,K=C.isWebGLCubeRenderTarget===!0,Pe=ne.length>1;if(Pe||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=M.version,s.memory.textures++),K){V.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[pe]=[];for(let De=0;De<M.mipmaps.length;De++)V.__webglFramebuffer[pe][De]=t.createFramebuffer()}else V.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)V.__webglFramebuffer[pe]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Pe)for(let pe=0,De=ne.length;pe<De;pe++){const Ce=i.get(ne[pe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=t.createTexture(),s.memory.textures++)}if(C.samples>0&&Se(C)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pe=0;pe<ne.length;pe++){const De=ne[pe];V.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[pe]);const Ce=o.convert(De.format,De.colorSpace),re=o.convert(De.type),le=_(De.internalFormat,Ce,re,De.colorSpace,C.isXRRenderTarget===!0),Ue=it(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,le,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,V.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),Ie(V.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),ce(t.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let De=0;De<M.mipmaps.length;De++)ve(V.__webglFramebuffer[pe][De],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De);else ve(V.__webglFramebuffer[pe],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(M)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let pe=0,De=ne.length;pe<De;pe++){const Ce=ne[pe],re=i.get(Ce);let le=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,re.__webglTexture),ce(le,Ce),ve(V.__webglFramebuffer,C,Ce,t.COLOR_ATTACHMENT0+pe,le,0),m(Ce)&&f(le)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,J.__webglTexture),ce(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let De=0;De<M.mipmaps.length;De++)ve(V.__webglFramebuffer[De],C,M,t.COLOR_ATTACHMENT0,pe,De);else ve(V.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,pe,0);m(M)&&f(pe),n.unbindTexture()}C.depthBuffer&&We(C)}function at(C){const M=C.textures;for(let V=0,J=M.length;V<J;V++){const ne=M[V];if(m(ne)){const K=x(C),Pe=i.get(ne).__webglTexture;n.bindTexture(K,Pe),f(K),n.unbindTexture()}}}const N=[],$e=[];function Ke(C){if(C.samples>0){if(Se(C)===!1){const M=C.textures,V=C.width,J=C.height;let ne=t.COLOR_BUFFER_BIT;const K=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Pe=i.get(C),pe=M.length>1;if(pe)for(let Ce=0;Ce<M.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const De=C.texture.mipmaps;De&&De.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);const re=i.get(M[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,V,J,0,0,V,J,ne,t.NEAREST),l===!0&&(N.length=0,$e.length=0,N.push(t.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&C.resolveDepthBuffer===!1&&(N.push(K),$e.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,$e)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,N))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let Ce=0;Ce<M.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);const re=i.get(M[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function it(C){return Math.min(r.maxSamples,C.samples)}function Se(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function pt(C){const M=s.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function Re(C,M){const V=C.colorSpace,J=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==js&&V!==br&&(st.getTransfer(V)===dt?(J!==di||ne!==ar)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",V)),M}function Ge(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=R,this.rebindTextures=_t,this.setupRenderTarget=He,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Se}function $D(t,e){function n(i,r=br){let o;const s=st.getTransfer(r);if(i===ar)return t.UNSIGNED_BYTE;if(i===vm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===_m)return t.UNSIGNED_SHORT_5_5_5_1;if(i===bS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===TS)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===MS)return t.BYTE;if(i===wS)return t.SHORT;if(i===nl)return t.UNSIGNED_SHORT;if(i===xm)return t.INT;if(i===Uo)return t.UNSIGNED_INT;if(i===Qi)return t.FLOAT;if(i===ea)return t.HALF_FLOAT;if(i===AS)return t.ALPHA;if(i===CS)return t.RGB;if(i===di)return t.RGBA;if(i===rl)return t.DEPTH_COMPONENT;if(i===ol)return t.DEPTH_STENCIL;if(i===RS)return t.RED;if(i===ym)return t.RED_INTEGER;if(i===Sm)return t.RG;if(i===Em)return t.RG_INTEGER;if(i===Mm)return t.RGBA_INTEGER;if(i===Rc||i===Pc||i===Lc||i===Dc)if(s===dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Rc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Dc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Rc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Dc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ch||i===Rh||i===Ph||i===Lh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Ch)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ph)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dh||i===Nh||i===Ih)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Dh||i===Nh)return s===dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Ih)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uh||i===Fh||i===Oh||i===kh||i===Bh||i===zh||i===Vh||i===Hh||i===Gh||i===Wh||i===Xh||i===jh||i===$h||i===Yh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Uh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$h)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qh||i===Kh||i===Qh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===qh)return s===dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zh||i===Jh||i===ep||i===tp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Zh)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Jh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ep)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===il?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const YD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new GS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Di({vertexShader:YD,fragmentShader:qD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new cr(new Sl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QD extends ta{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null;const g=typeof XRWebGLBinding<"u",m=new KD,f={},x=n.getContextAttributes();let _=null,y=null;const b=[],E=[],A=new ct;let L=null;const w=new ci;w.viewport=new Nt;const S=new ci;S.viewport=new Nt;const P=[w,S],U=new g2;let z=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let q=b[Z];return q===void 0&&(q=new Zd,b[Z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(Z){let q=b[Z];return q===void 0&&(q=new Zd,b[Z]=q),q.getGripSpace()},this.getHand=function(Z){let q=b[Z];return q===void 0&&(q=new Zd,b[Z]=q),q.getHandSpace()};function G(Z){const q=E.indexOf(Z.inputSource);if(q===-1)return;const ve=b[q];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,c||s),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<b.length;Z++){const q=E[Z];q!==null&&(E[Z]=null,b[Z].disconnect(q))}z=null,O=null,m.reset();for(const Z in f)delete f[Z];e.setRenderTarget(_),p=null,h=null,d=null,r=null,y=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){o=Z,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",H),r.addEventListener("inputsourceschange",Y),x.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ie=null,Te=null;x.depth&&(Te=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=x.stencil?ol:rl,Ie=x.stencil?il:Uo);const We={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:o};d=this.getBinding(),h=d.createProjectionLayer(We),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Fo(h.textureWidth,h.textureHeight,{format:di,type:ar,depthTexture:new HS(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ve={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,ve),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Fo(p.framebufferWidth,p.framebufferHeight,{format:di,type:ar,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(Z){for(let q=0;q<Z.removed.length;q++){const ve=Z.removed[q],Ie=E.indexOf(ve);Ie>=0&&(E[Ie]=null,b[Ie].disconnect(ve))}for(let q=0;q<Z.added.length;q++){const ve=Z.added[q];let Ie=E.indexOf(ve);if(Ie===-1){for(let We=0;We<b.length;We++)if(We>=E.length){E.push(ve),Ie=We;break}else if(E[We]===null){E[We]=ve,Ie=We;break}if(Ie===-1)break}const Te=b[Ie];Te&&Te.connect(ve)}}const R=new Q,F=new Q;function W(Z,q,ve){R.setFromMatrixPosition(q.matrixWorld),F.setFromMatrixPosition(ve.matrixWorld);const Ie=R.distanceTo(F),Te=q.projectionMatrix.elements,We=ve.projectionMatrix.elements,_t=Te[14]/(Te[10]-1),He=Te[14]/(Te[10]+1),at=(Te[9]+1)/Te[5],N=(Te[9]-1)/Te[5],$e=(Te[8]-1)/Te[0],Ke=(We[8]+1)/We[0],it=_t*$e,Se=_t*Ke,pt=Ie/(-$e+Ke),Re=pt*-$e;if(q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Re),Z.translateZ(pt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(q.projectionMatrix),Z.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const Ge=_t+pt,C=He+pt,M=it-Re,V=Se+(Ie-Re),J=at*He/C*Ge,ne=N*He/C*Ge;Z.projectionMatrix.makePerspective(M,V,J,ne,Ge,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function se(Z,q){q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let q=Z.near,ve=Z.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),U.near=S.near=w.near=q,U.far=S.far=w.far=ve,(z!==U.near||O!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,O=U.far),U.layers.mask=Z.layers.mask|6,w.layers.mask=U.layers.mask&3,S.layers.mask=U.layers.mask&5;const Ie=Z.parent,Te=U.cameras;se(U,Ie);for(let We=0;We<Te.length;We++)se(Te[We],Ie);Te.length===2?W(U,w,S):U.projectionMatrix.copy(w.projectionMatrix),ce(Z,U,Ie)};function ce(Z,q,ve){ve===null?Z.matrix.copy(q.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(q.projectionMatrix),Z.projectionMatrixInverse.copy(q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=np*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Z){return f[Z]};let Ee=null;function be(Z,q){if(u=q.getViewerPose(c||s),v=q,u!==null){const ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ie=!1;ve.length!==U.cameras.length&&(U.cameras.length=0,Ie=!0);for(let He=0;He<ve.length;He++){const at=ve[He];let N=null;if(p!==null)N=p.getViewport(at);else{const Ke=d.getViewSubImage(h,at);N=Ke.viewport,He===0&&(e.setRenderTargetTextures(y,Ke.colorTexture,Ke.depthStencilTexture),e.setRenderTarget(y))}let $e=P[He];$e===void 0&&($e=new ci,$e.layers.enable(He),$e.viewport=new Nt,P[He]=$e),$e.matrix.fromArray(at.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(at.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(N.x,N.y,N.width,N.height),He===0&&(U.matrix.copy($e.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ie===!0&&U.cameras.push($e)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){d=i.getBinding();const He=d.getDepthInformation(ve[0]);He&&He.isValid&&He.texture&&m.init(He,r.renderState)}if(Te&&Te.includes("camera-access")&&g){e.state.unbindTexture(),d=i.getBinding();for(let He=0;He<ve.length;He++){const at=ve[He].camera;if(at){let N=f[at];N||(N=new GS,f[at]=N);const $e=d.getCameraImage(at);N.sourceTexture=$e}}}}for(let ve=0;ve<b.length;ve++){const Ie=E[ve],Te=b[ve];Ie!==null&&Te!==void 0&&Te.update(Ie,q,c||s)}Ee&&Ee(Z,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),v=null}const ze=new XS;ze.setAnimationLoop(be),this.setAnimationLoop=function(Z){Ee=Z},this.dispose=function(){}}}const lo=new lr,ZD=new zt;function JD(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,kS(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,x,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),d(m,f)):f.isMeshPhongMaterial?(o(m,f),u(m,f)):f.isMeshStandardMaterial?(o(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(o(m,f),v(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),g(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,x,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Mn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Mn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),_=x.envMap,y=x.envMapRotation;_&&(m.envMap.value=_,lo.copy(y),lo.x*=-1,lo.y*=-1,lo.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(lo.y*=-1,lo.z*=-1),m.envMapRotation.value.setFromMatrix4(ZD.makeRotationFromEuler(lo)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=_*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Mn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eN(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const y=_.program;i.uniformBlockBinding(x,y)}function c(x,_){let y=r[x.id];y===void 0&&(v(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",m));const b=_.program;i.updateUBOMapping(x,b);const E=e.render.frame;o[x.id]!==E&&(h(x),o[x.id]=E)}function u(x){const _=d();x.__bindingPointIndex=_;const y=t.createBuffer(),b=x.__size,E=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,b,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function d(){for(let x=0;x<a;x++)if(s.indexOf(x)===-1)return s.push(x),x;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const _=r[x.id],y=x.uniforms,b=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let E=0,A=y.length;E<A;E++){const L=Array.isArray(y[E])?y[E]:[y[E]];for(let w=0,S=L.length;w<S;w++){const P=L[w];if(p(P,E,w,b)===!0){const U=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let O=0;for(let G=0;G<z.length;G++){const H=z[G],Y=g(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,U+O,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,O),O+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,_,y,b){const E=x.value,A=_+"_"+y;if(b[A]===void 0)return typeof E=="number"||typeof E=="boolean"?b[A]=E:b[A]=E.clone(),!0;{const L=b[A];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return b[A]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function v(x){const _=x.uniforms;let y=0;const b=16;for(let A=0,L=_.length;A<L;A++){const w=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,P=w.length;S<P;S++){const U=w[S],z=Array.isArray(U.value)?U.value:[U.value];for(let O=0,G=z.length;O<G;O++){const H=z[O],Y=g(H),R=y%b,F=R%Y.boundary,W=R+F;y+=F,W!==0&&b-W<Y.storage&&(y+=b-W),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=Y.storage}}}const E=y%b;return E>0&&(y+=b-E),x.__size=y,x.__cache={},this}function g(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):je("WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const y=s.indexOf(_.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete o[_.id]}function f(){for(const x in r)t.deleteBuffer(r[x]);s=[],r={},o={}}return{bind:l,update:c,dispose:f}}const tN=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Vi=null;function nN(){return Vi===null&&(Vi=new u2(tN,32,32,Sm,ea),Vi.minFilter=$n,Vi.magFilter=$n,Vi.wrapS=Ki,Vi.wrapT=Ki,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class iN{constructor(e={}){const{canvas:n=UC(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const v=new Set([Mm,Em,ym]),g=new Set([ar,Uo,nl,il,vm,_m]),m=new Uint32Array(4),f=new Int32Array(4);let x=null,_=null;const y=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let A=!1;this._outputColorSpace=Gn;let L=0,w=0,S=null,P=-1,U=null;const z=new Nt,O=new Nt;let G=null;const H=new ft(0);let Y=0,R=n.width,F=n.height,W=1,se=null,ce=null;const Ee=new Nt(0,0,R,F),be=new Nt(0,0,R,F);let ze=!1;const Z=new VS;let q=!1,ve=!1;const Ie=new zt,Te=new Q,We=new Nt,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function at(){return S===null?W:1}let N=i;function $e(T,k){return n.getContext(T,k)}try{const T={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gm}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",te,!1),n.addEventListener("webglcontextcreationerror",ie,!1),N===null){const k="webgl2";if(N=$e(k,T),N===null)throw $e(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let Ke,it,Se,pt,Re,Ge,C,M,V,J,ne,K,Pe,pe,De,Ce,re,le,Ue,Le,_e,Be,I,me;function he(){Ke=new dL(N),Ke.init(),Be=new $D(N,Ke),it=new nL(N,Ke,e,Be),Se=new XD(N,Ke),it.reversedDepthBuffer&&h&&Se.buffers.depth.setReversed(!0),pt=new pL(N),Re=new DD,Ge=new jD(N,Ke,Se,Re,it,Be,pt),C=new rL(E),M=new uL(E),V=new v2(N),I=new eL(N,V),J=new fL(N,V,pt,I),ne=new gL(N,J,V,pt),Ue=new mL(N,it,Ge),Ce=new iL(Re),K=new LD(E,C,M,Ke,it,I,Ce),Pe=new JD(E,Re),pe=new ID,De=new zD(Ke),le=new JP(E,C,M,Se,ne,p,l),re=new GD(E,ne,it),me=new eN(N,pt,it,Se),Le=new tL(N,Ke,pt),_e=new hL(N,Ke,pt),pt.programs=K.programs,E.capabilities=it,E.extensions=Ke,E.properties=Re,E.renderLists=pe,E.shadowMap=re,E.state=Se,E.info=pt}he();const de=new QD(E,N);this.xr=de,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=Ke.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ke.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(R,F,!1))},this.getSize=function(T){return T.set(R,F)},this.setSize=function(T,k,X=!0){if(de.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}R=T,F=k,n.width=Math.floor(T*W),n.height=Math.floor(k*W),X===!0&&(n.style.width=T+"px",n.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(R*W,F*W).floor()},this.setDrawingBufferSize=function(T,k,X){R=T,F=k,W=X,n.width=Math.floor(T*X),n.height=Math.floor(k*X),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(z)},this.getViewport=function(T){return T.copy(Ee)},this.setViewport=function(T,k,X,$){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,k,X,$),Se.viewport(z.copy(Ee).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(be)},this.setScissor=function(T,k,X,$){T.isVector4?be.set(T.x,T.y,T.z,T.w):be.set(T,k,X,$),Se.scissor(O.copy(be).multiplyScalar(W).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(T){Se.setScissorTest(ze=T)},this.setOpaqueSort=function(T){se=T},this.setTransparentSort=function(T){ce=T},this.getClearColor=function(T){return T.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,X=!0){let $=0;if(T){let B=!1;if(S!==null){const fe=S.texture.format;B=v.has(fe)}if(B){const fe=S.texture.type,ye=g.has(fe),Ae=le.getClearColor(),we=le.getClearAlpha(),ke=Ae.r,Ve=Ae.g,Ne=Ae.b;ye?(m[0]=ke,m[1]=Ve,m[2]=Ne,m[3]=we,N.clearBufferuiv(N.COLOR,0,m)):(f[0]=ke,f[1]=Ve,f[2]=Ne,f[3]=we,N.clearBufferiv(N.COLOR,0,f))}else $|=N.COLOR_BUFFER_BIT}k&&($|=N.DEPTH_BUFFER_BIT),X&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",te,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),le.dispose(),pe.dispose(),De.dispose(),Re.dispose(),C.dispose(),M.dispose(),ne.dispose(),I.dispose(),me.dispose(),K.dispose(),de.dispose(),de.removeEventListener("sessionstart",hn),de.removeEventListener("sessionend",Qn),to.stop()};function oe(T){T.preventDefault(),Dg("WebGLRenderer: Context Lost."),A=!0}function te(){Dg("WebGLRenderer: Context Restored."),A=!1;const T=pt.autoReset,k=re.enabled,X=re.autoUpdate,$=re.needsUpdate,B=re.type;he(),pt.autoReset=T,re.enabled=k,re.autoUpdate=X,re.needsUpdate=$,re.type=B}function ie(T){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function xe(T){const k=T.target;k.removeEventListener("dispose",xe),Oe(k)}function Oe(T){Qe(T),Re.remove(T)}function Qe(T){const k=Re.get(T).programs;k!==void 0&&(k.forEach(function(X){K.releaseProgram(X)}),T.isShaderMaterial&&K.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,X,$,B,fe){k===null&&(k=_t);const ye=B.isMesh&&B.matrixWorld.determinant()<0,Ae=KS(T,k,X,$,B);Se.setMaterial($,ye);let we=X.index,ke=1;if($.wireframe===!0){if(we=J.getWireframeAttribute(X),we===void 0)return;ke=2}const Ve=X.drawRange,Ne=X.attributes.position;let et=Ve.start*ke,ut=(Ve.start+Ve.count)*ke;fe!==null&&(et=Math.max(et,fe.start*ke),ut=Math.min(ut,(fe.start+fe.count)*ke)),we!==null?(et=Math.max(et,0),ut=Math.min(ut,we.count)):Ne!=null&&(et=Math.max(et,0),ut=Math.min(ut,Ne.count));const At=ut-et;if(At<0||At===1/0)return;I.setup(B,$,Ae,X,we);let Ct,ht=Le;if(we!==null&&(Ct=V.get(we),ht=_e,ht.setIndex(Ct)),B.isMesh)$.wireframe===!0?(Se.setLineWidth($.wireframeLinewidth*at()),ht.setMode(N.LINES)):ht.setMode(N.TRIANGLES);else if(B.isLine){let Fe=$.linewidth;Fe===void 0&&(Fe=1),Se.setLineWidth(Fe*at()),B.isLineSegments?ht.setMode(N.LINES):B.isLineLoop?ht.setMode(N.LINE_LOOP):ht.setMode(N.LINE_STRIP)}else B.isPoints?ht.setMode(N.POINTS):B.isSprite&&ht.setMode(N.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)sl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))ht.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Fe=B._multiDrawStarts,St=B._multiDrawCounts,rt=B._multiDrawCount,Tn=we?V.get(we).bytesPerElement:1,Vo=Re.get($).currentProgram.getUniforms();for(let An=0;An<rt;An++)Vo.setValue(N,"_gl_DrawID",An),ht.render(Fe[An]/Tn,St[An])}else if(B.isInstancedMesh)ht.renderInstances(et,At,B.count);else if(X.isInstancedBufferGeometry){const Fe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,St=Math.min(X.instanceCount,Fe);ht.renderInstances(et,At,St)}else ht.render(et,At)};function Tt(T,k,X){T.transparent===!0&&T.side===$i&&T.forceSinglePass===!1?(T.side=Mn,T.needsUpdate=!0,Ml(T,k,X),T.side=Kr,T.needsUpdate=!0,Ml(T,k,X),T.side=$i):Ml(T,k,X)}this.compile=function(T,k,X=null){X===null&&(X=T),_=De.get(X),_.init(k),b.push(_),X.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),T!==X&&T.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),_.setupLights();const $=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const fe=B.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){const Ae=fe[ye];Tt(Ae,X,B),$.add(Ae)}else Tt(fe,X,B),$.add(fe)}),_=b.pop(),$},this.compileAsync=function(T,k,X=null){const $=this.compile(T,k,X);return new Promise(B=>{function fe(){if($.forEach(function(ye){Re.get(ye).currentProgram.isReady()&&$.delete(ye)}),$.size===0){B(T);return}setTimeout(fe,10)}Ke.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let It=null;function Ii(T){It&&It(T)}function hn(){to.stop()}function Qn(){to.start()}const to=new XS;to.setAnimationLoop(Ii),typeof self<"u"&&to.setContext(self),this.setAnimationLoop=function(T){It=T,de.setAnimationLoop(T),T===null?to.stop():to.start()},de.addEventListener("sessionstart",hn),de.addEventListener("sessionend",Qn),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(k),k=de.getCamera()),T.isScene===!0&&T.onBeforeRender(E,T,k,S),_=De.get(T,b.length),_.init(k),b.push(_),Ie.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Z.setFromProjectionMatrix(Ie,Ti,k.reversedDepth),ve=this.localClippingEnabled,q=Ce.init(this.clippingPlanes,ve),x=pe.get(T,y.length),x.init(),y.push(x),de.enabled===!0&&de.isPresenting===!0){const fe=E.xr.getDepthSensingMesh();fe!==null&&$u(fe,k,-1/0,E.sortObjects)}$u(T,k,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(se,ce),He=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,He&&le.addToRenderList(x,T),this.info.render.frame++,q===!0&&Ce.beginShadows();const X=_.state.shadowsArray;re.render(X,T,k),q===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=x.opaque,B=x.transmissive;if(_.setupLights(),k.isArrayCamera){const fe=k.cameras;if(B.length>0)for(let ye=0,Ae=fe.length;ye<Ae;ye++){const we=fe[ye];Am($,B,T,we)}He&&le.render(T);for(let ye=0,Ae=fe.length;ye<Ae;ye++){const we=fe[ye];Tm(x,T,we,we.viewport)}}else B.length>0&&Am($,B,T,k),He&&le.render(T),Tm(x,T,k);S!==null&&w===0&&(Ge.updateMultisampleRenderTarget(S),Ge.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(E,T,k),I.resetDefaultState(),P=-1,U=null,b.pop(),b.length>0?(_=b[b.length-1],q===!0&&Ce.setGlobalState(E.clippingPlanes,_.state.camera)):_=null,y.pop(),y.length>0?x=y[y.length-1]:x=null};function $u(T,k,X,$){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){$&&We.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ie);const ye=ne.update(T),Ae=T.material;Ae.visible&&x.push(T,ye,Ae,X,We.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){const ye=ne.update(T),Ae=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),We.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),We.copy(ye.boundingSphere.center)),We.applyMatrix4(T.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ae)){const we=ye.groups;for(let ke=0,Ve=we.length;ke<Ve;ke++){const Ne=we[ke],et=Ae[Ne.materialIndex];et&&et.visible&&x.push(T,ye,et,X,We.z,Ne)}}else Ae.visible&&x.push(T,ye,Ae,X,We.z,null)}}const fe=T.children;for(let ye=0,Ae=fe.length;ye<Ae;ye++)$u(fe[ye],k,X,$)}function Tm(T,k,X,$){const{opaque:B,transmissive:fe,transparent:ye}=T;_.setupLightsView(X),q===!0&&Ce.setGlobalState(E.clippingPlanes,X),$&&Se.viewport(z.copy($)),B.length>0&&El(B,k,X),fe.length>0&&El(fe,k,X),ye.length>0&&El(ye,k,X),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Am(T,k,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[$.id]===void 0&&(_.state.transmissionRenderTarget[$.id]=new Fo(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?ea:ar,minFilter:_o,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const fe=_.state.transmissionRenderTarget[$.id],ye=$.viewport||z;fe.setSize(ye.z*E.transmissionResolutionScale,ye.w*E.transmissionResolutionScale);const Ae=E.getRenderTarget(),we=E.getActiveCubeFace(),ke=E.getActiveMipmapLevel();E.setRenderTarget(fe),E.getClearColor(H),Y=E.getClearAlpha(),Y<1&&E.setClearColor(16777215,.5),E.clear(),He&&le.render(X);const Ve=E.toneMapping;E.toneMapping=Gr;const Ne=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),_.setupLightsView($),q===!0&&Ce.setGlobalState(E.clippingPlanes,$),El(T,X,$),Ge.updateMultisampleRenderTarget(fe),Ge.updateRenderTargetMipmap(fe),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ut=0,At=k.length;ut<At;ut++){const Ct=k[ut],{object:ht,geometry:Fe,material:St,group:rt}=Ct;if(St.side===$i&&ht.layers.test($.layers)){const Tn=St.side;St.side=Mn,St.needsUpdate=!0,Cm(ht,X,$,Fe,St,rt),St.side=Tn,St.needsUpdate=!0,et=!0}}et===!0&&(Ge.updateMultisampleRenderTarget(fe),Ge.updateRenderTargetMipmap(fe))}E.setRenderTarget(Ae,we,ke),E.setClearColor(H,Y),Ne!==void 0&&($.viewport=Ne),E.toneMapping=Ve}function El(T,k,X){const $=k.isScene===!0?k.overrideMaterial:null;for(let B=0,fe=T.length;B<fe;B++){const ye=T[B],{object:Ae,geometry:we,group:ke}=ye;let Ve=ye.material;Ve.allowOverride===!0&&$!==null&&(Ve=$),Ae.layers.test(X.layers)&&Cm(Ae,k,X,we,Ve,ke)}}function Cm(T,k,X,$,B,fe){T.onBeforeRender(E,k,X,$,B,fe),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(E,k,X,$,T,fe),B.transparent===!0&&B.side===$i&&B.forceSinglePass===!1?(B.side=Mn,B.needsUpdate=!0,E.renderBufferDirect(X,k,$,B,T,fe),B.side=Kr,B.needsUpdate=!0,E.renderBufferDirect(X,k,$,B,T,fe),B.side=$i):E.renderBufferDirect(X,k,$,B,T,fe),T.onAfterRender(E,k,X,$,B,fe)}function Ml(T,k,X){k.isScene!==!0&&(k=_t);const $=Re.get(T),B=_.state.lights,fe=_.state.shadowsArray,ye=B.state.version,Ae=K.getParameters(T,B.state,fe,k,X),we=K.getProgramCacheKey(Ae);let ke=$.programs;$.environment=T.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(T.isMeshStandardMaterial?M:C).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",xe),ke=new Map,$.programs=ke);let Ve=ke.get(we);if(Ve!==void 0){if($.currentProgram===Ve&&$.lightsStateVersion===ye)return Pm(T,Ae),Ve}else Ae.uniforms=K.getUniforms(T),T.onBeforeCompile(Ae,E),Ve=K.acquireProgram(Ae,we),ke.set(we,Ve),$.uniforms=Ae.uniforms;const Ne=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=Ce.uniform),Pm(T,Ae),$.needsLights=ZS(T),$.lightsStateVersion=ye,$.needsLights&&(Ne.ambientLightColor.value=B.state.ambient,Ne.lightProbe.value=B.state.probe,Ne.directionalLights.value=B.state.directional,Ne.directionalLightShadows.value=B.state.directionalShadow,Ne.spotLights.value=B.state.spot,Ne.spotLightShadows.value=B.state.spotShadow,Ne.rectAreaLights.value=B.state.rectArea,Ne.ltc_1.value=B.state.rectAreaLTC1,Ne.ltc_2.value=B.state.rectAreaLTC2,Ne.pointLights.value=B.state.point,Ne.pointLightShadows.value=B.state.pointShadow,Ne.hemisphereLights.value=B.state.hemi,Ne.directionalShadowMap.value=B.state.directionalShadowMap,Ne.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ne.spotShadowMap.value=B.state.spotShadowMap,Ne.spotLightMatrix.value=B.state.spotLightMatrix,Ne.spotLightMap.value=B.state.spotLightMap,Ne.pointShadowMap.value=B.state.pointShadowMap,Ne.pointShadowMatrix.value=B.state.pointShadowMatrix),$.currentProgram=Ve,$.uniformsList=null,Ve}function Rm(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Nc.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Pm(T,k){const X=Re.get(T);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function KS(T,k,X,$,B){k.isScene!==!0&&(k=_t),Ge.resetTextureUnits();const fe=k.fog,ye=$.isMeshStandardMaterial?k.environment:null,Ae=S===null?E.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:js,we=($.isMeshStandardMaterial?M:C).get($.envMap||ye),ke=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ve=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ne=!!X.morphAttributes.position,et=!!X.morphAttributes.normal,ut=!!X.morphAttributes.color;let At=Gr;$.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(At=E.toneMapping);const Ct=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ht=Ct!==void 0?Ct.length:0,Fe=Re.get($),St=_.state.lights;if(q===!0&&(ve===!0||T!==U)){const rn=T===U&&$.id===P;Ce.setState($,T,rn)}let rt=!1;$.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==St.state.version||Fe.outputColorSpace!==Ae||B.isBatchedMesh&&Fe.batching===!1||!B.isBatchedMesh&&Fe.batching===!0||B.isBatchedMesh&&Fe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Fe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Fe.instancing===!1||!B.isInstancedMesh&&Fe.instancing===!0||B.isSkinnedMesh&&Fe.skinning===!1||!B.isSkinnedMesh&&Fe.skinning===!0||B.isInstancedMesh&&Fe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Fe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Fe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Fe.instancingMorph===!1&&B.morphTexture!==null||Fe.envMap!==we||$.fog===!0&&Fe.fog!==fe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ce.numPlanes||Fe.numIntersection!==Ce.numIntersection)||Fe.vertexAlphas!==ke||Fe.vertexTangents!==Ve||Fe.morphTargets!==Ne||Fe.morphNormals!==et||Fe.morphColors!==ut||Fe.toneMapping!==At||Fe.morphTargetsCount!==ht)&&(rt=!0):(rt=!0,Fe.__version=$.version);let Tn=Fe.currentProgram;rt===!0&&(Tn=Ml($,k,B));let Vo=!1,An=!1,ia=!1;const Et=Tn.getUniforms(),pn=Fe.uniforms;if(Se.useProgram(Tn.program)&&(Vo=!0,An=!0,ia=!0),$.id!==P&&(P=$.id,An=!0),Vo||U!==T){Se.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Et.setValue(N,"projectionMatrix",T.projectionMatrix),Et.setValue(N,"viewMatrix",T.matrixWorldInverse);const mn=Et.map.cameraPosition;mn!==void 0&&mn.setValue(N,Te.setFromMatrixPosition(T.matrixWorld)),it.logarithmicDepthBuffer&&Et.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Et.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),U!==T&&(U=T,An=!0,ia=!0)}if(B.isSkinnedMesh){Et.setOptional(N,B,"bindMatrix"),Et.setOptional(N,B,"bindMatrixInverse");const rn=B.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Et.setValue(N,"boneTexture",rn.boneTexture,Ge))}B.isBatchedMesh&&(Et.setOptional(N,B,"batchingTexture"),Et.setValue(N,"batchingTexture",B._matricesTexture,Ge),Et.setOptional(N,B,"batchingIdTexture"),Et.setValue(N,"batchingIdTexture",B._indirectTexture,Ge),Et.setOptional(N,B,"batchingColorTexture"),B._colorsTexture!==null&&Et.setValue(N,"batchingColorTexture",B._colorsTexture,Ge));const zn=X.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Ue.update(B,X,Tn),(An||Fe.receiveShadow!==B.receiveShadow)&&(Fe.receiveShadow=B.receiveShadow,Et.setValue(N,"receiveShadow",B.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(pn.envMap.value=we,pn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(pn.envMapIntensity.value=k.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=nN()),An&&(Et.setValue(N,"toneMappingExposure",E.toneMappingExposure),Fe.needsLights&&QS(pn,ia),fe&&$.fog===!0&&Pe.refreshFogUniforms(pn,fe),Pe.refreshMaterialUniforms(pn,$,W,F,_.state.transmissionRenderTarget[T.id]),Nc.upload(N,Rm(Fe),pn,Ge)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Nc.upload(N,Rm(Fe),pn,Ge),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Et.setValue(N,"center",B.center),Et.setValue(N,"modelViewMatrix",B.modelViewMatrix),Et.setValue(N,"normalMatrix",B.normalMatrix),Et.setValue(N,"modelMatrix",B.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const rn=$.uniformsGroups;for(let mn=0,Yu=rn.length;mn<Yu;mn++){const no=rn[mn];me.update(no,Tn),me.bind(no,Tn)}}return Tn}function QS(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function ZS(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,k,X){const $=Re.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Re.get(T.texture).__webglTexture=k,Re.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:X,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const X=Re.get(T);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0};const JS=N.createFramebuffer();this.setRenderTarget=function(T,k=0,X=0){S=T,L=k,w=X;let $=!0,B=null,fe=!1,ye=!1;if(T){const we=Re.get(T);if(we.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(N.FRAMEBUFFER,null),$=!1;else if(we.__webglFramebuffer===void 0)Ge.setupRenderTarget(T);else if(we.__hasExternalTextures)Ge.rebindTextures(T,Re.get(T.texture).__webglTexture,Re.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ne=T.depthTexture;if(we.__boundDepthTexture!==Ne){if(Ne!==null&&Re.has(Ne)&&(T.width!==Ne.image.width||T.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(T)}}const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ye=!0);const Ve=Re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[k])?B=Ve[k][X]:B=Ve[k],fe=!0):T.samples>0&&Ge.useMultisampledRTT(T)===!1?B=Re.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?B=Ve[X]:B=Ve,z.copy(T.viewport),O.copy(T.scissor),G=T.scissorTest}else z.copy(Ee).multiplyScalar(W).floor(),O.copy(be).multiplyScalar(W).floor(),G=ze;if(X!==0&&(B=JS),Se.bindFramebuffer(N.FRAMEBUFFER,B)&&$&&Se.drawBuffers(T,B),Se.viewport(z),Se.scissor(O),Se.setScissorTest(G),fe){const we=Re.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,we.__webglTexture,X)}else if(ye){const we=k;for(let ke=0;ke<T.textures.length;ke++){const Ve=Re.get(T.textures[ke]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ke,Ve.__webglTexture,X,we)}}else if(T!==null&&X!==0){const we=Re.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,we.__webglTexture,X)}P=-1},this.readRenderTargetPixels=function(T,k,X,$,B,fe,ye,Ae=0){if(!(T&&T.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){Se.bindFramebuffer(N.FRAMEBUFFER,we);try{const ke=T.textures[Ae],Ve=ke.format,Ne=ke.type;if(!it.textureFormatReadable(Ve)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Ne)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-$&&X>=0&&X<=T.height-B&&(T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ae),N.readPixels(k,X,$,B,Be.convert(Ve),Be.convert(Ne),fe))}finally{const ke=S!==null?Re.get(S).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,k,X,$,B,fe,ye,Ae=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we)if(k>=0&&k<=T.width-$&&X>=0&&X<=T.height-B){Se.bindFramebuffer(N.FRAMEBUFFER,we);const ke=T.textures[Ae],Ve=ke.format,Ne=ke.type;if(!it.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.bufferData(N.PIXEL_PACK_BUFFER,fe.byteLength,N.STREAM_READ),T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ae),N.readPixels(k,X,$,B,Be.convert(Ve),Be.convert(Ne),0);const ut=S!==null?Re.get(S).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,ut);const At=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await FC(N,At,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,fe),N.deleteBuffer(et),N.deleteSync(At),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,X=0){const $=Math.pow(2,-X),B=Math.floor(T.image.width*$),fe=Math.floor(T.image.height*$),ye=k!==null?k.x:0,Ae=k!==null?k.y:0;Ge.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,ye,Ae,B,fe),Se.unbindTexture()};const e1=N.createFramebuffer(),t1=N.createFramebuffer();this.copyTextureToTexture=function(T,k,X=null,$=null,B=0,fe=null){fe===null&&(B!==0?(sl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=B,B=0):fe=0);let ye,Ae,we,ke,Ve,Ne,et,ut,At;const Ct=T.isCompressedTexture?T.mipmaps[fe]:T.image;if(X!==null)ye=X.max.x-X.min.x,Ae=X.max.y-X.min.y,we=X.isBox3?X.max.z-X.min.z:1,ke=X.min.x,Ve=X.min.y,Ne=X.isBox3?X.min.z:0;else{const zn=Math.pow(2,-B);ye=Math.floor(Ct.width*zn),Ae=Math.floor(Ct.height*zn),T.isDataArrayTexture?we=Ct.depth:T.isData3DTexture?we=Math.floor(Ct.depth*zn):we=1,ke=0,Ve=0,Ne=0}$!==null?(et=$.x,ut=$.y,At=$.z):(et=0,ut=0,At=0);const ht=Be.convert(k.format),Fe=Be.convert(k.type);let St;k.isData3DTexture?(Ge.setTexture3D(k,0),St=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Ge.setTexture2DArray(k,0),St=N.TEXTURE_2D_ARRAY):(Ge.setTexture2D(k,0),St=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const rt=N.getParameter(N.UNPACK_ROW_LENGTH),Tn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Vo=N.getParameter(N.UNPACK_SKIP_PIXELS),An=N.getParameter(N.UNPACK_SKIP_ROWS),ia=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ct.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ct.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ke),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ve),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ne);const Et=T.isDataArrayTexture||T.isData3DTexture,pn=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const zn=Re.get(T),rn=Re.get(k),mn=Re.get(zn.__renderTarget),Yu=Re.get(rn.__renderTarget);Se.bindFramebuffer(N.READ_FRAMEBUFFER,mn.__webglFramebuffer),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,Yu.__webglFramebuffer);for(let no=0;no<we;no++)Et&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.get(T).__webglTexture,B,Ne+no),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.get(k).__webglTexture,fe,At+no)),N.blitFramebuffer(ke,Ve,ye,Ae,et,ut,ye,Ae,N.DEPTH_BUFFER_BIT,N.NEAREST);Se.bindFramebuffer(N.READ_FRAMEBUFFER,null),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||Re.has(T)){const zn=Re.get(T),rn=Re.get(k);Se.bindFramebuffer(N.READ_FRAMEBUFFER,e1),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,t1);for(let mn=0;mn<we;mn++)Et?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zn.__webglTexture,B,Ne+mn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,zn.__webglTexture,B),pn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,rn.__webglTexture,fe,At+mn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,rn.__webglTexture,fe),B!==0?N.blitFramebuffer(ke,Ve,ye,Ae,et,ut,ye,Ae,N.COLOR_BUFFER_BIT,N.NEAREST):pn?N.copyTexSubImage3D(St,fe,et,ut,At+mn,ke,Ve,ye,Ae):N.copyTexSubImage2D(St,fe,et,ut,ke,Ve,ye,Ae);Se.bindFramebuffer(N.READ_FRAMEBUFFER,null),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else pn?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(St,fe,et,ut,At,ye,Ae,we,ht,Fe,Ct.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(St,fe,et,ut,At,ye,Ae,we,ht,Ct.data):N.texSubImage3D(St,fe,et,ut,At,ye,Ae,we,ht,Fe,Ct):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,fe,et,ut,ye,Ae,ht,Fe,Ct.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,fe,et,ut,Ct.width,Ct.height,ht,Ct.data):N.texSubImage2D(N.TEXTURE_2D,fe,et,ut,ye,Ae,ht,Fe,Ct);N.pixelStorei(N.UNPACK_ROW_LENGTH,rt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Tn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Vo),N.pixelStorei(N.UNPACK_SKIP_ROWS,An),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ia),fe===0&&k.generateMipmaps&&N.generateMipmap(St),Se.unbindTexture()},this.initRenderTarget=function(T){Re.get(T).__webglFramebuffer===void 0&&Ge.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ge.setTextureCube(T,0):T.isData3DTexture?Ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ge.setTexture2DArray(T,0):Ge.setTexture2D(T,0),Se.unbindTexture()},this.resetState=function(){L=0,w=0,S=null,Se.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}const rN=()=>{const t=D.useRef(null);return D.useEffect(()=>{if(!t.current)return;const e=t.current,n=new c2,i=new WS(-1,1,1,-1,0,1),r=new iN;r.setSize(window.innerWidth,window.innerHeight),r.domElement.style.position="fixed",r.domElement.style.top="0",r.domElement.style.left="0",r.domElement.style.zIndex="0",r.domElement.style.display="block",e.appendChild(r.domElement);const o=new Di({uniforms:{iTime:{value:0},iResolution:{value:new ct(window.innerWidth,window.innerHeight)}},vertexShader:"void main() { gl_Position = vec4(position, 1.0); }",fragmentShader:`
                uniform float iTime; uniform vec2 iResolution;
                #define NUM_OCTAVES 3
                float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
                float noise(vec2 p){ vec2 ip=floor(p);vec2 u=fract(p);u=u*u*(3.0-2.0*u);float res=mix(mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);return res*res; }
                float fbm(vec2 x) { float v=0.0;float a=0.3;vec2 shift=vec2(100);mat2 rot=mat2(cos(0.5),sin(0.5),-sin(0.5),cos(0.50));for(int i=0;i<NUM_OCTAVES;++i){v+=a*noise(x);x=rot*x*2.0+shift;a*=0.4;}return v;}
                void main() {
                    vec2 p=((gl_FragCoord.xy)-iResolution.xy*0.5)/iResolution.y*mat2(6.,-4.,4.,6.);vec4 o=vec4(0.);float f=2.+fbm(p+vec2(iTime*5.,0.))*.5;
                    for(float i=0.;i++<35.;){vec2 v=p+cos(i*i+(iTime+p.x*.08)*.025+i*vec2(13.,11.))*3.5;float tailNoise=fbm(v+vec2(iTime*.5,i))*.3*(1.-(i/35.));vec4 auroraColors=vec4(.1+.3*sin(i*.2+iTime*.4),.3+.5*cos(i*.3+iTime*.5),.7+.3*sin(i*.4+iTime*.3),1.);vec4 currentContribution=auroraColors*exp(sin(i*i+iTime*.8))/length(max(v,vec2(v.x*f*.015,v.y*1.5)));float thinnessFactor=smoothstep(0.,1.,i/35.)*.6;o+=currentContribution*(1.+tailNoise*.8)*thinnessFactor;}
                    o=tanh(pow(o/100.,vec4(1.6)));gl_FragColor=o*1.5;
                }`}),s=new Sl(2,2),a=new cr(s,o);n.add(a);let l;const c=()=>{l=requestAnimationFrame(c),o.uniforms.iTime.value+=.016,r.render(n,i)},u=()=>{r.setSize(window.innerWidth,window.innerHeight),o.uniforms.iResolution.value.set(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",u),c(),()=>{cancelAnimationFrame(l),window.removeEventListener("resize",u),e.contains(r.domElement)&&e.removeChild(r.domElement),r.dispose(),o.dispose(),s.dispose()}},[]),j.jsx("div",{ref:t})},co={logo:{initials:"MT",name:"Meng To"},navLinks:[{label:"About",href:"#about"},{label:"Projects",href:"#projects"},{label:"Skills",href:"#skills"}],resume:{label:"Resume",onClick:()=>{}},hero:{titleLine1:"Creative Developer &",titleLine2Gradient:"Digital Designer",subtitle:"I craft beautiful digital experiences through code and design. Specializing in modern web development, UI/UX design, and bringing innovative ideas to life."},ctaButtons:{primary:{label:"View My Work",onClick:()=>{}},secondary:{label:"Get In Touch",onClick:()=>{}}},projects:[{title:"FinTech Mobile App",description:"React Native app with AI-powered financial insights.",tags:["React Native","Node.js"],imageContent:void 0},{title:"Data Visualization Platform",description:"Interactive dashboard for complex data analysis.",tags:["D3.js","Python"],imageContent:void 0},{title:"3D Portfolio Site",description:"Immersive WebGL experience with 3D elements.",tags:["Three.js","WebGL"],imageContent:void 0}],stats:[{value:"50+",label:"Projects Completed"},{value:"5+",label:"Years Experience"},{value:"15+",label:"Happy Clients"}]},oN=({logo:t=co.logo,navLinks:e=co.navLinks,resume:n=co.resume,hero:i=co.hero,ctaButtons:r=co.ctaButtons,projects:o=co.projects,stats:s=co.stats,showAnimatedBackground:a=!0})=>j.jsxs("div",{className:"bg-background text-foreground geist-font",children:[a&&j.jsx(rN,{}),j.jsxs("div",{className:"relative",children:[j.jsx("nav",{className:"w-full px-6 py-4",children:j.jsxs("div",{className:"max-w-7xl mx-auto flex justify-between items-center",children:[j.jsxs("div",{className:"flex items-center space-x-2",children:[j.jsx("div",{className:"w-8 h-8 rounded-lg bg-border backdrop-blur-md border border-border flex items-center justify-center",children:j.jsx("span",{className:"geist-font text-sm font-bold text-foreground",children:t.initials})}),j.jsx("span",{className:"geist-font text-lg font-medium text-foreground",children:t.name})]}),j.jsx("div",{className:"hidden md:flex items-center space-x-8",children:e.map(l=>j.jsx("a",{href:l.href,className:"text-muted-foreground hover:text-foreground transition-colors inter-font text-sm",children:l.label},l.label))}),j.jsx("button",{onClick:n.onClick,className:"glass-button px-4 py-2 rounded-lg text-foreground text-sm font-medium inter-font",children:n.label})]})}),j.jsx("div",{className:"divider"}),j.jsx("main",{id:"about",className:"w-full min-h-screen flex flex-col items-center justify-center px-6 py-20",children:j.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[j.jsxs("div",{className:"mb-8 float-animation",children:[j.jsxs("h1",{className:"md:text-6xl lg:text-7xl leading-[1.1] geist-font text-5xl font-light text-foreground tracking-tight mb-4",children:[i.titleLine1,j.jsx("span",{className:"gradient-text block tracking-tight",children:i.titleLine2Gradient})]}),j.jsx("p",{className:"md:text-xl max-w-3xl leading-relaxed inter-font text-lg font-light text-muted-foreground mx-auto",children:i.subtitle})]}),j.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center mb-16",children:[j.jsx("button",{onClick:r.primary.onClick,className:"primary-button px-6 py-3 text-foreground rounded-lg font-medium text-sm min-w-[160px]",children:r.primary.label}),j.jsx("button",{onClick:r.secondary.onClick,className:"glass-button min-w-[160px] inter-font text-sm font-medium text-foreground rounded-lg px-6 py-3",children:r.secondary.label})]}),j.jsx("div",{className:"divider mb-16"}),j.jsx("div",{id:"projects",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16",children:o.map((l,c)=>j.jsxs("div",{className:"glass-card rounded-2xl p-6 text-left",children:[j.jsx("div",{className:"project-image rounded-xl h-32 mb-4 flex items-center justify-center",children:l.imageContent}),j.jsx("h3",{className:"text-lg font-medium text-card-foreground mb-2 geist-font",children:l.title}),j.jsx("p",{className:"text-muted-foreground text-sm inter-font mb-4",children:l.description}),j.jsx("div",{className:"flex flex-wrap gap-2",children:l.tags.map(u=>j.jsx("span",{className:"skill-badge px-2 py-1 rounded text-xs text-muted-foreground",children:u},u))})]},c))}),j.jsx("div",{className:"divider mb-16"}),j.jsx("div",{id:"skills",className:"flex flex-col sm:flex-row justify-center items-center gap-8 text-center",children:s.map((l,c)=>j.jsxs(ue.Fragment,{children:[j.jsxs("div",{children:[j.jsx("div",{className:"text-3xl md:text-4xl font-light text-foreground mb-1 geist-font tracking-tight",children:l.value}),j.jsx("div",{className:"text-muted-foreground text-sm inter-font font-normal",children:l.label})]}),c<s.length-1&&j.jsx("div",{className:"hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-input to-transparent"})]},l.label))})]})})]})]}),sN={logo:{initials:"CW",name:"Charles william"},navLinks:[{label:"About",href:"#about"},{label:"Projects",href:"#projects"},{label:"Skills",href:"#skills"}],resume:{label:"Resume",onClick:()=>alert("Resume download coming soon!")},hero:{titleLine1:"Creative Developer &",titleLine2Gradient:"Digital Designer",subtitle:"I craft beautiful digital experiences through code and design. Specializing in modern web development, UI/UX design, and bringing innovative ideas to life."},ctaButtons:{primary:{label:"View My Work",onClick:()=>{var t;(t=document.getElementById("projects"))==null||t.scrollIntoView({behavior:"smooth"})}},secondary:{label:"Get In Touch",onClick:()=>{window.location.href="mailto:charleswilliamjoseph78@gmail.com"}}},projects:[{title:"FinTech Mobile App",description:"React Native app with AI-powered financial insights and real-time analytics.",tags:["React Native","Node.js","AI"],imageContent:j.jsx(Pw,{className:"w-12 h-12 text-primary/60"})},{title:"Data Visualization Platform",description:"Interactive dashboard for complex data analysis with beautiful charts.",tags:["D3.js","Python","PostgreSQL"],imageContent:j.jsx(Uw,{className:"w-12 h-12 text-accent/60"})},{title:"3D Portfolio Site",description:"Immersive WebGL experience with stunning 3D elements and animations.",tags:["Three.js","WebGL","GLSL"],imageContent:j.jsx(Nw,{className:"w-12 h-12 text-primary/60"})},{title:"Digital Marketing Campaign",description:"Full-scale digital marketing strategy with SEO optimization and social media integration.",tags:["SEO","Social Media","Analytics"],imageContent:j.jsx(Dw,{className:"w-12 h-12 text-primary/60"})},{title:"Innovative Brand Identity",description:"Complete brand redesign with modern aesthetics and comprehensive style guide.",tags:["Branding","Design System","UI/UX"],imageContent:j.jsx(Lw,{className:"w-12 h-12 text-accent/60"})},{title:"Custom Web & App Development",description:"End-to-end development of responsive web applications and mobile apps.",tags:["React","TypeScript","Mobile"],imageContent:j.jsx(Iw,{className:"w-12 h-12 text-primary/60"})}],stats:[{value:"50+",label:"Projects Completed"},{value:"5+",label:"Years Experience"},{value:"15+",label:"Happy Clients"}],showAnimatedBackground:!0},aN=()=>j.jsx(oN,{...sN}),lN=()=>{const t=_S();return D.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),j.jsx("div",{className:"flex min-h-screen items-center justify-center bg-muted",children:j.jsxs("div",{className:"text-center",children:[j.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),j.jsx("p",{className:"mb-4 text-xl text-muted-foreground",children:"Oops! Page not found"}),j.jsx("a",{href:"/",className:"text-primary underline hover:text-primary/90",children:"Return to Home"})]})})},cN=new oA,uN=()=>j.jsx(aA,{client:cN,children:j.jsxs(UT,{children:[j.jsx(vb,{}),j.jsx(Kb,{}),j.jsx(jA,{children:j.jsxs(GA,{children:[j.jsx(hh,{path:"/",element:j.jsx(aN,{})}),j.jsx(hh,{path:"*",element:j.jsx(lN,{})})]})})]})});H_(document.getElementById("root")).render(j.jsx(uN,{}));
