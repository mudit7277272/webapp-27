(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function Qm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var xu={exports:{}},ko={},yu={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function C_(){if(ip)return mt;ip=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),p=Symbol.iterator;function y(b){return b===null||typeof b!="object"?null:(b=p&&b[p]||b["@@iterator"],typeof b=="function"?b:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function x(b,H,Y){this.props=b,this.context=H,this.refs=A,this.updater=Y||S}x.prototype.isReactComponent={},x.prototype.setState=function(b,H){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,H,"setState")},x.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function _(){}_.prototype=x.prototype;function D(b,H,Y){this.props=b,this.context=H,this.refs=A,this.updater=Y||S}var R=D.prototype=new _;R.constructor=D,w(R,x.prototype),R.isPureReactComponent=!0;var L=Array.isArray,W=Object.prototype.hasOwnProperty,F={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function de(b,H,Y){var V,re={},ce=null,Ee=null;if(H!=null)for(V in H.ref!==void 0&&(Ee=H.ref),H.key!==void 0&&(ce=""+H.key),H)W.call(H,V)&&!O.hasOwnProperty(V)&&(re[V]=H[V]);var xe=arguments.length-2;if(xe===1)re.children=Y;else if(1<xe){for(var _e=Array(xe),Ye=0;Ye<xe;Ye++)_e[Ye]=arguments[Ye+2];re.children=_e}if(b&&b.defaultProps)for(V in xe=b.defaultProps,xe)re[V]===void 0&&(re[V]=xe[V]);return{$$typeof:r,type:b,key:ce,ref:Ee,props:re,_owner:F.current}}function Me(b,H){return{$$typeof:r,type:b.type,key:H,ref:b.ref,props:b.props,_owner:b._owner}}function E(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function I(b){var H={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(Y){return H[Y]})}var le=/\/+/g;function fe(b,H){return typeof b=="object"&&b!==null&&b.key!=null?I(""+b.key):H.toString(36)}function z(b,H,Y,V,re){var ce=typeof b;(ce==="undefined"||ce==="boolean")&&(b=null);var Ee=!1;if(b===null)Ee=!0;else switch(ce){case"string":case"number":Ee=!0;break;case"object":switch(b.$$typeof){case r:case e:Ee=!0}}if(Ee)return Ee=b,re=re(Ee),b=V===""?"."+fe(Ee,0):V,L(re)?(Y="",b!=null&&(Y=b.replace(le,"$&/")+"/"),z(re,H,Y,"",function(Ye){return Ye})):re!=null&&(E(re)&&(re=Me(re,Y+(!re.key||Ee&&Ee.key===re.key?"":(""+re.key).replace(le,"$&/")+"/")+b)),H.push(re)),1;if(Ee=0,V=V===""?".":V+":",L(b))for(var xe=0;xe<b.length;xe++){ce=b[xe];var _e=V+fe(ce,xe);Ee+=z(ce,H,Y,_e,re)}else if(_e=y(b),typeof _e=="function")for(b=_e.call(b),xe=0;!(ce=b.next()).done;)ce=ce.value,_e=V+fe(ce,xe++),Ee+=z(ce,H,Y,_e,re);else if(ce==="object")throw H=String(b),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Ee}function Q(b,H,Y){if(b==null)return b;var V=[],re=0;return z(b,V,"","",function(ce){return H.call(Y,ce,re++)}),V}function j(b){if(b._status===-1){var H=b._result;H=H(),H.then(function(Y){(b._status===0||b._status===-1)&&(b._status=1,b._result=Y)},function(Y){(b._status===0||b._status===-1)&&(b._status=2,b._result=Y)}),b._status===-1&&(b._status=0,b._result=H)}if(b._status===1)return b._result.default;throw b._result}var oe={current:null},k={transition:null},$={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:k,ReactCurrentOwner:F};function X(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:Q,forEach:function(b,H,Y){Q(b,function(){H.apply(this,arguments)},Y)},count:function(b){var H=0;return Q(b,function(){H++}),H},toArray:function(b){return Q(b,function(H){return H})||[]},only:function(b){if(!E(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},mt.Component=x,mt.Fragment=n,mt.Profiler=a,mt.PureComponent=D,mt.StrictMode=s,mt.Suspense=h,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,mt.act=X,mt.cloneElement=function(b,H,Y){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var V=w({},b.props),re=b.key,ce=b.ref,Ee=b._owner;if(H!=null){if(H.ref!==void 0&&(ce=H.ref,Ee=F.current),H.key!==void 0&&(re=""+H.key),b.type&&b.type.defaultProps)var xe=b.type.defaultProps;for(_e in H)W.call(H,_e)&&!O.hasOwnProperty(_e)&&(V[_e]=H[_e]===void 0&&xe!==void 0?xe[_e]:H[_e])}var _e=arguments.length-2;if(_e===1)V.children=Y;else if(1<_e){xe=Array(_e);for(var Ye=0;Ye<_e;Ye++)xe[Ye]=arguments[Ye+2];V.children=xe}return{$$typeof:r,type:b.type,key:re,ref:ce,props:V,_owner:Ee}},mt.createContext=function(b){return b={$$typeof:f,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:c,_context:b},b.Consumer=b},mt.createElement=de,mt.createFactory=function(b){var H=de.bind(null,b);return H.type=b,H},mt.createRef=function(){return{current:null}},mt.forwardRef=function(b){return{$$typeof:u,render:b}},mt.isValidElement=E,mt.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:j}},mt.memo=function(b,H){return{$$typeof:g,type:b,compare:H===void 0?null:H}},mt.startTransition=function(b){var H=k.transition;k.transition={};try{b()}finally{k.transition=H}},mt.unstable_act=X,mt.useCallback=function(b,H){return oe.current.useCallback(b,H)},mt.useContext=function(b){return oe.current.useContext(b)},mt.useDebugValue=function(){},mt.useDeferredValue=function(b){return oe.current.useDeferredValue(b)},mt.useEffect=function(b,H){return oe.current.useEffect(b,H)},mt.useId=function(){return oe.current.useId()},mt.useImperativeHandle=function(b,H,Y){return oe.current.useImperativeHandle(b,H,Y)},mt.useInsertionEffect=function(b,H){return oe.current.useInsertionEffect(b,H)},mt.useLayoutEffect=function(b,H){return oe.current.useLayoutEffect(b,H)},mt.useMemo=function(b,H){return oe.current.useMemo(b,H)},mt.useReducer=function(b,H,Y){return oe.current.useReducer(b,H,Y)},mt.useRef=function(b){return oe.current.useRef(b)},mt.useState=function(b){return oe.current.useState(b)},mt.useSyncExternalStore=function(b,H,Y){return oe.current.useSyncExternalStore(b,H,Y)},mt.useTransition=function(){return oe.current.useTransition()},mt.version="18.3.1",mt}var rp;function Ed(){return rp||(rp=1,yu.exports=C_()),yu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp;function P_(){if(sp)return ko;sp=1;var r=Ed(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(u,h,g){var v,p={},y=null,S=null;g!==void 0&&(y=""+g),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(v in h)s.call(h,v)&&!c.hasOwnProperty(v)&&(p[v]=h[v]);if(u&&u.defaultProps)for(v in h=u.defaultProps,h)p[v]===void 0&&(p[v]=h[v]);return{$$typeof:e,type:u,key:y,ref:S,props:p,_owner:a.current}}return ko.Fragment=n,ko.jsx=f,ko.jsxs=f,ko}var op;function L_(){return op||(op=1,xu.exports=P_()),xu.exports}var Lt=L_(),ut=Ed();const Ce=Qm(ut);var nl={},Su={exports:{}},Un={},Mu={exports:{}},Eu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function D_(){return ap||(ap=1,function(r){function e(k,$){var X=k.length;k.push($);e:for(;0<X;){var b=X-1>>>1,H=k[b];if(0<a(H,$))k[b]=$,k[X]=H,X=b;else break e}}function n(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var $=k[0],X=k.pop();if(X!==$){k[0]=X;e:for(var b=0,H=k.length,Y=H>>>1;b<Y;){var V=2*(b+1)-1,re=k[V],ce=V+1,Ee=k[ce];if(0>a(re,X))ce<H&&0>a(Ee,re)?(k[b]=Ee,k[ce]=X,b=ce):(k[b]=re,k[V]=X,b=V);else if(ce<H&&0>a(Ee,X))k[b]=Ee,k[ce]=X,b=ce;else break e}}return $}function a(k,$){var X=k.sortIndex-$.sortIndex;return X!==0?X:k.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,u=f.now();r.unstable_now=function(){return f.now()-u}}var h=[],g=[],v=1,p=null,y=3,S=!1,w=!1,A=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(k){for(var $=n(g);$!==null;){if($.callback===null)s(g);else if($.startTime<=k)s(g),$.sortIndex=$.expirationTime,e(h,$);else break;$=n(g)}}function L(k){if(A=!1,R(k),!w)if(n(h)!==null)w=!0,j(W);else{var $=n(g);$!==null&&oe(L,$.startTime-k)}}function W(k,$){w=!1,A&&(A=!1,_(de),de=-1),S=!0;var X=y;try{for(R($),p=n(h);p!==null&&(!(p.expirationTime>$)||k&&!I());){var b=p.callback;if(typeof b=="function"){p.callback=null,y=p.priorityLevel;var H=b(p.expirationTime<=$);$=r.unstable_now(),typeof H=="function"?p.callback=H:p===n(h)&&s(h),R($)}else s(h);p=n(h)}if(p!==null)var Y=!0;else{var V=n(g);V!==null&&oe(L,V.startTime-$),Y=!1}return Y}finally{p=null,y=X,S=!1}}var F=!1,O=null,de=-1,Me=5,E=-1;function I(){return!(r.unstable_now()-E<Me)}function le(){if(O!==null){var k=r.unstable_now();E=k;var $=!0;try{$=O(!0,k)}finally{$?fe():(F=!1,O=null)}}else F=!1}var fe;if(typeof D=="function")fe=function(){D(le)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,Q=z.port2;z.port1.onmessage=le,fe=function(){Q.postMessage(null)}}else fe=function(){x(le,0)};function j(k){O=k,F||(F=!0,fe())}function oe(k,$){de=x(function(){k(r.unstable_now())},$)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(k){k.callback=null},r.unstable_continueExecution=function(){w||S||(w=!0,j(W))},r.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Me=0<k?Math.floor(1e3/k):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_getFirstCallbackNode=function(){return n(h)},r.unstable_next=function(k){switch(y){case 1:case 2:case 3:var $=3;break;default:$=y}var X=y;y=$;try{return k()}finally{y=X}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(k,$){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var X=y;y=k;try{return $()}finally{y=X}},r.unstable_scheduleCallback=function(k,$,X){var b=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?b+X:b):X=b,k){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=X+H,k={id:v++,callback:$,priorityLevel:k,startTime:X,expirationTime:H,sortIndex:-1},X>b?(k.sortIndex=X,e(g,k),n(h)===null&&k===n(g)&&(A?(_(de),de=-1):A=!0,oe(L,X-b))):(k.sortIndex=H,e(h,k),w||S||(w=!0,j(W))),k},r.unstable_shouldYield=I,r.unstable_wrapCallback=function(k){var $=y;return function(){var X=y;y=$;try{return k.apply(this,arguments)}finally{y=X}}}}(Eu)),Eu}var lp;function N_(){return lp||(lp=1,Mu.exports=D_()),Mu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function I_(){if(cp)return Un;cp=1;var r=Ed(),e=N_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)s.add(i[t])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},p={};function y(t){return h.call(p,t)?!0:h.call(v,t)?!1:g.test(t)?p[t]=!0:(v[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,l,d,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,D);x[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,D);x[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,D);x[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function R(t,i,o,l){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,d,l)&&(o=null),l||d===null?y(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,l=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var L=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),F=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),Me=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),I=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),k=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var X=Object.assign,b;function H(t){if(b===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);b=i&&i[1]||""}return`
`+b+t}var Y=!1;function V(t,i){if(!t||Y)return"";Y=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var l=ne}Reflect.construct(t,[],i)}else{try{i.call()}catch(ne){l=ne}t.call(i.prototype)}else{try{throw Error()}catch(ne){l=ne}t()}}catch(ne){if(ne&&l&&typeof ne.stack=="string"){for(var d=ne.stack.split(`
`),m=l.stack.split(`
`),M=d.length-1,U=m.length-1;1<=M&&0<=U&&d[M]!==m[U];)U--;for(;1<=M&&0<=U;M--,U--)if(d[M]!==m[U]){if(M!==1||U!==1)do if(M--,U--,0>U||d[M]!==m[U]){var B=`
`+d[M].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=M&&0<=U);break}}}finally{Y=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?H(t):""}function re(t){switch(t.tag){case 5:return H(t.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return t=V(t.type,!1),t;case 11:return t=V(t.type.render,!1),t;case 1:return t=V(t.type,!0),t;default:return""}}function ce(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case F:return"Portal";case Me:return"Profiler";case de:return"StrictMode";case fe:return"Suspense";case z:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case I:return(t.displayName||"Context")+".Consumer";case E:return(t._context.displayName||"Context")+".Provider";case le:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q:return i=t.displayName||null,i!==null?i:ce(t.type)||"Memo";case j:i=t._payload,t=t._init;try{return ce(t(i))}catch{}}return null}function Ee(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(i);case 8:return i===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function xe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _e(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(t){var i=_e(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){l=""+M,m.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function qe(t){t._valueTracker||(t._valueTracker=Ye(t))}function q(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=_e(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function At(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ve(t,i){var o=i.checked;return X({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Ke(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=xe(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ze(t,i){i=i.checked,i!=null&&R(t,"checked",i,!1)}function xt(t,i){ze(t,i);var o=xe(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?P(t,i.type,o):i.hasOwnProperty("defaultValue")&&P(t,i.type,xe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function rt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function P(t,i,o){(i!=="number"||At(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var T=Array.isArray;function te(t,i,o,l){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&l&&(t[o].defaultSelected=!0)}else{for(o=""+xe(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function pe(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return X({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function me(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(T(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:xe(o)}}function Se(t,i){var o=xe(i.value),l=xe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function He(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Ae(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ue(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Ae(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $e,st=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,d)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for($e=$e||document.createElement("div"),$e.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=$e.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function he(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var vt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ot=["Webkit","ms","Moz","O"];Object.keys(vt).forEach(function(t){ot.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),vt[i]=vt[t]})});function tt(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||vt.hasOwnProperty(t)&&vt[t]?(""+i).trim():i+"px"}function je(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,d=tt(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,d):t[o]=d}}var Oe=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nt(t,i){if(i){if(Oe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Mt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function et(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rt=null,N=null,we=null;function ue(t){if(t=Eo(t)){if(typeof Rt!="function")throw Error(n(280));var i=t.stateNode;i&&(i=va(i),Rt(t.stateNode,t.type,i))}}function be(t){N?we?we.push(t):we=[t]:N=t}function Pe(){if(N){var t=N,i=we;if(we=N=null,ue(t),i)for(t=0;t<i.length;t++)ue(i[t])}}function at(t,i){return t(i)}function wt(){}var pt=!1;function It(t,i,o){if(pt)return t(i,o);pt=!0;try{return at(t,i,o)}finally{pt=!1,(N!==null||we!==null)&&(wt(),Pe())}}function _t(t,i){var o=t.stateNode;if(o===null)return null;var l=va(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Dt=!1;if(u)try{var Ut={};Object.defineProperty(Ut,"passive",{get:function(){Dt=!0}}),window.addEventListener("test",Ut,Ut),window.removeEventListener("test",Ut,Ut)}catch{Dt=!1}function br(t,i,o,l,d,m,M,U,B){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(o,ne)}catch(ve){this.onError(ve)}}var yn=!1,pi=null,Rr=!1,ji=null,Zo={onError:function(t){yn=!0,pi=t}};function Qo(t,i,o,l,d,m,M,U,B){yn=!1,pi=null,br.apply(Zo,arguments)}function Hl(t,i,o,l,d,m,M,U,B){if(Qo.apply(this,arguments),yn){if(yn){var ne=pi;yn=!1,pi=null}else throw Error(n(198));Rr||(Rr=!0,ji=ne)}}function Ai(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Jo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function C(t){if(Ai(t)!==t)throw Error(n(188))}function Z(t){var i=t.alternate;if(!i){if(i=Ai(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){o=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return C(d),t;if(m===l)return C(d),i;m=m.sibling}throw Error(n(188))}if(o.return!==l.return)o=d,l=m;else{for(var M=!1,U=d.child;U;){if(U===o){M=!0,o=d,l=m;break}if(U===l){M=!0,l=d,o=m;break}U=U.sibling}if(!M){for(U=m.child;U;){if(U===o){M=!0,o=m,l=d;break}if(U===l){M=!0,l=m,o=d;break}U=U.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function se(t){return t=Z(t),t!==null?ae(t):null}function ae(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ae(t);if(i!==null)return i;t=t.sibling}return null}var ie=e.unstable_scheduleCallback,Le=e.unstable_cancelCallback,Xe=e.unstable_shouldYield,Je=e.unstable_requestPaint,Fe=e.unstable_now,dt=e.unstable_getCurrentPriorityLevel,lt=e.unstable_ImmediatePriority,ct=e.unstable_UserBlockingPriority,Ot=e.unstable_NormalPriority,Sn=e.unstable_LowPriority,$t=e.unstable_IdlePriority,Rn=null,Tt=null;function ft(t){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Rn,t,void 0,(t.current.flags&128)===128)}catch{}}var Mn=Math.clz32?Math.clz32:ea,Gt=Math.log,bi=Math.LN2;function ea(t){return t>>>=0,t===0?32:31-(Gt(t)/bi|0)|0}var mi=64,Yi=4194304;function Yt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qn(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,d=t.suspendedLanes,m=t.pingedLanes,M=o&268435455;if(M!==0){var U=M&~d;U!==0?l=Yt(U):(m&=M,m!==0&&(l=Yt(m)))}else M=o&~d,M!==0?l=Yt(M):m!==0&&(l=Yt(m));if(l===0)return 0;if(i!==0&&i!==l&&!(i&d)&&(d=l&-l,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if(l&4&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-Mn(i),d=1<<o,l|=t[o],i&=~d;return l}function ro(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,m=t.pendingLanes;0<m;){var M=31-Mn(m),U=1<<M,B=d[M];B===-1?(!(U&o)||U&l)&&(d[M]=ro(U,i)):B<=i&&(t.expiredLanes|=U),m&=~U}}function Cr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ta(){var t=mi;return mi<<=1,!(mi&4194240)&&(mi=64),t}function is(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function so(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Mn(i),t[i]=o}function Kg(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-Mn(o),m=1<<d;i[d]=0,l[d]=-1,t[d]=-1,o&=~m}}function Gl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-Mn(o),d=1<<l;d&i|t[l]&i&&(t[l]|=i),o&=~d}}var Nt=0;function Id(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ud,Vl,Fd,Od,kd,Wl=!1,na=[],qi=null,$i=null,Ki=null,oo=new Map,ao=new Map,Zi=[],Zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zd(t,i){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":oo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(i.pointerId)}}function lo(t,i,o,l,d,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Eo(i),i!==null&&Vl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Qg(t,i,o,l,d){switch(i){case"focusin":return qi=lo(qi,t,i,o,l,d),!0;case"dragenter":return $i=lo($i,t,i,o,l,d),!0;case"mouseover":return Ki=lo(Ki,t,i,o,l,d),!0;case"pointerover":var m=d.pointerId;return oo.set(m,lo(oo.get(m)||null,t,i,o,l,d)),!0;case"gotpointercapture":return m=d.pointerId,ao.set(m,lo(ao.get(m)||null,t,i,o,l,d)),!0}return!1}function Bd(t){var i=Pr(t.target);if(i!==null){var o=Ai(i);if(o!==null){if(i=o.tag,i===13){if(i=Jo(o),i!==null){t.blockedOn=i,kd(t.priority,function(){Fd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ia(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=jl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);bt=l,o.target.dispatchEvent(l),bt=null}else return i=Eo(o),i!==null&&Vl(i),t.blockedOn=o,!1;i.shift()}return!0}function Hd(t,i,o){ia(t)&&o.delete(i)}function Jg(){Wl=!1,qi!==null&&ia(qi)&&(qi=null),$i!==null&&ia($i)&&($i=null),Ki!==null&&ia(Ki)&&(Ki=null),oo.forEach(Hd),ao.forEach(Hd)}function co(t,i){t.blockedOn===i&&(t.blockedOn=null,Wl||(Wl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Jg)))}function uo(t){function i(d){return co(d,t)}if(0<na.length){co(na[0],t);for(var o=1;o<na.length;o++){var l=na[o];l.blockedOn===t&&(l.blockedOn=null)}}for(qi!==null&&co(qi,t),$i!==null&&co($i,t),Ki!==null&&co(Ki,t),oo.forEach(i),ao.forEach(i),o=0;o<Zi.length;o++)l=Zi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Zi.length&&(o=Zi[0],o.blockedOn===null);)Bd(o),o.blockedOn===null&&Zi.shift()}var rs=L.ReactCurrentBatchConfig,ra=!0;function ev(t,i,o,l){var d=Nt,m=rs.transition;rs.transition=null;try{Nt=1,Xl(t,i,o,l)}finally{Nt=d,rs.transition=m}}function tv(t,i,o,l){var d=Nt,m=rs.transition;rs.transition=null;try{Nt=4,Xl(t,i,o,l)}finally{Nt=d,rs.transition=m}}function Xl(t,i,o,l){if(ra){var d=jl(t,i,o,l);if(d===null)cc(t,i,l,sa,o),zd(t,l);else if(Qg(d,t,i,o,l))l.stopPropagation();else if(zd(t,l),i&4&&-1<Zg.indexOf(t)){for(;d!==null;){var m=Eo(d);if(m!==null&&Ud(m),m=jl(t,i,o,l),m===null&&cc(t,i,l,sa,o),m===d)break;d=m}d!==null&&l.stopPropagation()}else cc(t,i,l,null,o)}}var sa=null;function jl(t,i,o,l){if(sa=null,t=et(l),t=Pr(t),t!==null)if(i=Ai(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Jo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return sa=t,null}function Gd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dt()){case lt:return 1;case ct:return 4;case Ot:case Sn:return 16;case $t:return 536870912;default:return 16}default:return 16}}var Qi=null,Yl=null,oa=null;function Vd(){if(oa)return oa;var t,i=Yl,o=i.length,l,d="value"in Qi?Qi.value:Qi.textContent,m=d.length;for(t=0;t<o&&i[t]===d[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===d[m-l];l++);return oa=d.slice(t,1<l?1-l:void 0)}function aa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function la(){return!0}function Wd(){return!1}function Hn(t){function i(o,l,d,m,M){this._reactName=o,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(o=t[U],this[U]=o?o(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?la:Wd,this.isPropagationStopped=Wd,this}return X(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),i}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Hn(ss),fo=X({},ss,{view:0,detail:0}),nv=Hn(fo),$l,Kl,ho,ca=X({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ql,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?($l=t.screenX-ho.screenX,Kl=t.screenY-ho.screenY):Kl=$l=0,ho=t),$l)},movementY:function(t){return"movementY"in t?t.movementY:Kl}}),Xd=Hn(ca),iv=X({},ca,{dataTransfer:0}),rv=Hn(iv),sv=X({},fo,{relatedTarget:0}),Zl=Hn(sv),ov=X({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),av=Hn(ov),lv=X({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cv=Hn(lv),uv=X({},ss,{data:0}),jd=Hn(uv),dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=hv[t])?!!i[t]:!1}function Ql(){return pv}var mv=X({},fo,{key:function(t){if(t.key){var i=dv[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=aa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ql,charCode:function(t){return t.type==="keypress"?aa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?aa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gv=Hn(mv),vv=X({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yd=Hn(vv),_v=X({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ql}),xv=Hn(_v),yv=X({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sv=Hn(yv),Mv=X({},ca,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ev=Hn(Mv),wv=[9,13,27,32],Jl=u&&"CompositionEvent"in window,po=null;u&&"documentMode"in document&&(po=document.documentMode);var Tv=u&&"TextEvent"in window&&!po,qd=u&&(!Jl||po&&8<po&&11>=po),$d=" ",Kd=!1;function Zd(t,i){switch(t){case"keyup":return wv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function Av(t,i){switch(t){case"compositionend":return Qd(i);case"keypress":return i.which!==32?null:(Kd=!0,$d);case"textInput":return t=i.data,t===$d&&Kd?null:t;default:return null}}function bv(t,i){if(os)return t==="compositionend"||!Jl&&Zd(t,i)?(t=Vd(),oa=Yl=Qi=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return qd&&i.locale!=="ko"?null:i.data;default:return null}}var Rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Rv[t.type]:i==="textarea"}function ef(t,i,o,l){be(l),i=pa(i,"onChange"),0<i.length&&(o=new ql("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var mo=null,go=null;function Cv(t){xf(t,0)}function ua(t){var i=ds(t);if(q(i))return t}function Pv(t,i){if(t==="change")return i}var tf=!1;if(u){var ec;if(u){var tc="oninput"in document;if(!tc){var nf=document.createElement("div");nf.setAttribute("oninput","return;"),tc=typeof nf.oninput=="function"}ec=tc}else ec=!1;tf=ec&&(!document.documentMode||9<document.documentMode)}function rf(){mo&&(mo.detachEvent("onpropertychange",sf),go=mo=null)}function sf(t){if(t.propertyName==="value"&&ua(go)){var i=[];ef(i,go,t,et(t)),It(Cv,i)}}function Lv(t,i,o){t==="focusin"?(rf(),mo=i,go=o,mo.attachEvent("onpropertychange",sf)):t==="focusout"&&rf()}function Dv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ua(go)}function Nv(t,i){if(t==="click")return ua(i)}function Iv(t,i){if(t==="input"||t==="change")return ua(i)}function Uv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ii=typeof Object.is=="function"?Object.is:Uv;function vo(t,i){if(ii(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var d=o[l];if(!h.call(i,d)||!ii(t[d],i[d]))return!1}return!0}function of(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function af(t,i){var o=of(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=of(o)}}function lf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?lf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function cf(){for(var t=window,i=At();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=At(t.document)}return i}function nc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Fv(t){var i=cf(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&lf(o.ownerDocument.documentElement,o)){if(l!==null&&nc(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,m=Math.min(l.start,d);l=l.end===void 0?m:Math.min(l.end,d),!t.extend&&m>l&&(d=l,l=m,m=d),d=af(o,m);var M=af(o,l);d&&M&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),m>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ov=u&&"documentMode"in document&&11>=document.documentMode,as=null,ic=null,_o=null,rc=!1;function uf(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;rc||as==null||as!==At(l)||(l=as,"selectionStart"in l&&nc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),_o&&vo(_o,l)||(_o=l,l=pa(ic,"onSelect"),0<l.length&&(i=new ql("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=as)))}function da(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ls={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},sc={},df={};u&&(df=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function fa(t){if(sc[t])return sc[t];if(!ls[t])return t;var i=ls[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in df)return sc[t]=i[o];return t}var ff=fa("animationend"),hf=fa("animationiteration"),pf=fa("animationstart"),mf=fa("transitionend"),gf=new Map,vf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(t,i){gf.set(t,i),c(i,[t])}for(var oc=0;oc<vf.length;oc++){var ac=vf[oc],kv=ac.toLowerCase(),zv=ac[0].toUpperCase()+ac.slice(1);Ji(kv,"on"+zv)}Ji(ff,"onAnimationEnd"),Ji(hf,"onAnimationIteration"),Ji(pf,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(mf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bv=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function _f(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Hl(l,i,void 0,t),t.currentTarget=null}function xf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],d=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var M=l.length-1;0<=M;M--){var U=l[M],B=U.instance,ne=U.currentTarget;if(U=U.listener,B!==m&&d.isPropagationStopped())break e;_f(d,U,ne),m=B}else for(M=0;M<l.length;M++){if(U=l[M],B=U.instance,ne=U.currentTarget,U=U.listener,B!==m&&d.isPropagationStopped())break e;_f(d,U,ne),m=B}}}if(Rr)throw t=ji,Rr=!1,ji=null,t}function zt(t,i){var o=i[mc];o===void 0&&(o=i[mc]=new Set);var l=t+"__bubble";o.has(l)||(yf(i,t,2,!1),o.add(l))}function lc(t,i,o){var l=0;i&&(l|=4),yf(o,t,l,i)}var ha="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[ha]){t[ha]=!0,s.forEach(function(o){o!=="selectionchange"&&(Bv.has(o)||lc(o,!1,t),lc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ha]||(i[ha]=!0,lc("selectionchange",!1,i))}}function yf(t,i,o,l){switch(Gd(i)){case 1:var d=ev;break;case 4:d=tv;break;default:d=Xl}o=d.bind(null,i,o,t),d=void 0,!Dt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function cc(t,i,o,l,d){var m=l;if(!(i&1)&&!(i&2)&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var U=l.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(M===4)for(M=l.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;M=M.return}for(;U!==null;){if(M=Pr(U),M===null)return;if(B=M.tag,B===5||B===6){l=m=M;continue e}U=U.parentNode}}l=l.return}It(function(){var ne=m,ve=et(o),ye=[];e:{var ge=gf.get(t);if(ge!==void 0){var De=ql,Be=t;switch(t){case"keypress":if(aa(o)===0)break e;case"keydown":case"keyup":De=gv;break;case"focusin":Be="focus",De=Zl;break;case"focusout":Be="blur",De=Zl;break;case"beforeblur":case"afterblur":De=Zl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=Xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=xv;break;case ff:case hf:case pf:De=av;break;case mf:De=Sv;break;case"scroll":De=nv;break;case"wheel":De=Ev;break;case"copy":case"cut":case"paste":De=cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=Yd}var Ge=(i&4)!==0,Kt=!Ge&&t==="scroll",K=Ge?ge!==null?ge+"Capture":null:ge;Ge=[];for(var G=ne,ee;G!==null;){ee=G;var Te=ee.stateNode;if(ee.tag===5&&Te!==null&&(ee=Te,K!==null&&(Te=_t(G,K),Te!=null&&Ge.push(So(G,Te,ee)))),Kt)break;G=G.return}0<Ge.length&&(ge=new De(ge,Be,null,o,ve),ye.push({event:ge,listeners:Ge}))}}if(!(i&7)){e:{if(ge=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",ge&&o!==bt&&(Be=o.relatedTarget||o.fromElement)&&(Pr(Be)||Be[Ri]))break e;if((De||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,De?(Be=o.relatedTarget||o.toElement,De=ne,Be=Be?Pr(Be):null,Be!==null&&(Kt=Ai(Be),Be!==Kt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(De=null,Be=ne),De!==Be)){if(Ge=Xd,Te="onMouseLeave",K="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Ge=Yd,Te="onPointerLeave",K="onPointerEnter",G="pointer"),Kt=De==null?ge:ds(De),ee=Be==null?ge:ds(Be),ge=new Ge(Te,G+"leave",De,o,ve),ge.target=Kt,ge.relatedTarget=ee,Te=null,Pr(ve)===ne&&(Ge=new Ge(K,G+"enter",Be,o,ve),Ge.target=ee,Ge.relatedTarget=Kt,Te=Ge),Kt=Te,De&&Be)t:{for(Ge=De,K=Be,G=0,ee=Ge;ee;ee=cs(ee))G++;for(ee=0,Te=K;Te;Te=cs(Te))ee++;for(;0<G-ee;)Ge=cs(Ge),G--;for(;0<ee-G;)K=cs(K),ee--;for(;G--;){if(Ge===K||K!==null&&Ge===K.alternate)break t;Ge=cs(Ge),K=cs(K)}Ge=null}else Ge=null;De!==null&&Sf(ye,ge,De,Ge,!1),Be!==null&&Kt!==null&&Sf(ye,Kt,Be,Ge,!0)}}e:{if(ge=ne?ds(ne):window,De=ge.nodeName&&ge.nodeName.toLowerCase(),De==="select"||De==="input"&&ge.type==="file")var We=Pv;else if(Jd(ge))if(tf)We=Iv;else{We=Dv;var Ze=Lv}else(De=ge.nodeName)&&De.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(We=Nv);if(We&&(We=We(t,ne))){ef(ye,We,o,ve);break e}Ze&&Ze(t,ge,ne),t==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&P(ge,"number",ge.value)}switch(Ze=ne?ds(ne):window,t){case"focusin":(Jd(Ze)||Ze.contentEditable==="true")&&(as=Ze,ic=ne,_o=null);break;case"focusout":_o=ic=as=null;break;case"mousedown":rc=!0;break;case"contextmenu":case"mouseup":case"dragend":rc=!1,uf(ye,o,ve);break;case"selectionchange":if(Ov)break;case"keydown":case"keyup":uf(ye,o,ve)}var Qe;if(Jl)e:{switch(t){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else os?Zd(t,o)&&(it="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(it="onCompositionStart");it&&(qd&&o.locale!=="ko"&&(os||it!=="onCompositionStart"?it==="onCompositionEnd"&&os&&(Qe=Vd()):(Qi=ve,Yl="value"in Qi?Qi.value:Qi.textContent,os=!0)),Ze=pa(ne,it),0<Ze.length&&(it=new jd(it,t,null,o,ve),ye.push({event:it,listeners:Ze}),Qe?it.data=Qe:(Qe=Qd(o),Qe!==null&&(it.data=Qe)))),(Qe=Tv?Av(t,o):bv(t,o))&&(ne=pa(ne,"onBeforeInput"),0<ne.length&&(ve=new jd("onBeforeInput","beforeinput",null,o,ve),ye.push({event:ve,listeners:ne}),ve.data=Qe))}xf(ye,i)})}function So(t,i,o){return{instance:t,listener:i,currentTarget:o}}function pa(t,i){for(var o=i+"Capture",l=[];t!==null;){var d=t,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=_t(t,o),m!=null&&l.unshift(So(t,m,d)),m=_t(t,i),m!=null&&l.push(So(t,m,d))),t=t.return}return l}function cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sf(t,i,o,l,d){for(var m=i._reactName,M=[];o!==null&&o!==l;){var U=o,B=U.alternate,ne=U.stateNode;if(B!==null&&B===l)break;U.tag===5&&ne!==null&&(U=ne,d?(B=_t(o,m),B!=null&&M.unshift(So(o,B,U))):d||(B=_t(o,m),B!=null&&M.push(So(o,B,U)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var Hv=/\r\n?/g,Gv=/\u0000|\uFFFD/g;function Mf(t){return(typeof t=="string"?t:""+t).replace(Hv,`
`).replace(Gv,"")}function ma(t,i,o){if(i=Mf(i),Mf(t)!==i&&o)throw Error(n(425))}function ga(){}var uc=null,dc=null;function fc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var hc=typeof setTimeout=="function"?setTimeout:void 0,Vv=typeof clearTimeout=="function"?clearTimeout:void 0,Ef=typeof Promise=="function"?Promise:void 0,Wv=typeof queueMicrotask=="function"?queueMicrotask:typeof Ef<"u"?function(t){return Ef.resolve(null).then(t).catch(Xv)}:hc;function Xv(t){setTimeout(function(){throw t})}function pc(t,i){var o=i,l=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(l===0){t.removeChild(d),uo(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=d}while(o);uo(i)}function er(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function wf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),gi="__reactFiber$"+us,Mo="__reactProps$"+us,Ri="__reactContainer$"+us,mc="__reactEvents$"+us,jv="__reactListeners$"+us,Yv="__reactHandles$"+us;function Pr(t){var i=t[gi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ri]||o[gi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=wf(t);t!==null;){if(o=t[gi])return o;t=wf(t)}return i}t=o,o=t.parentNode}return null}function Eo(t){return t=t[gi]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function va(t){return t[Mo]||null}var gc=[],fs=-1;function tr(t){return{current:t}}function Bt(t){0>fs||(t.current=gc[fs],gc[fs]=null,fs--)}function kt(t,i){fs++,gc[fs]=t.current,t.current=i}var nr={},hn=tr(nr),Pn=tr(!1),Lr=nr;function hs(t,i){var o=t.type.contextTypes;if(!o)return nr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Ln(t){return t=t.childContextTypes,t!=null}function _a(){Bt(Pn),Bt(hn)}function Tf(t,i,o){if(hn.current!==nr)throw Error(n(168));kt(hn,i),kt(Pn,o)}function Af(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,Ee(t)||"Unknown",d));return X({},o,l)}function xa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Lr=hn.current,kt(hn,t),kt(Pn,Pn.current),!0}function bf(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Af(t,i,Lr),l.__reactInternalMemoizedMergedChildContext=t,Bt(Pn),Bt(hn),kt(hn,t)):Bt(Pn),kt(Pn,o)}var Ci=null,ya=!1,vc=!1;function Rf(t){Ci===null?Ci=[t]:Ci.push(t)}function qv(t){ya=!0,Rf(t)}function ir(){if(!vc&&Ci!==null){vc=!0;var t=0,i=Nt;try{var o=Ci;for(Nt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ci=null,ya=!1}catch(d){throw Ci!==null&&(Ci=Ci.slice(t+1)),ie(lt,ir),d}finally{Nt=i,vc=!1}}return null}var ps=[],ms=0,Sa=null,Ma=0,$n=[],Kn=0,Dr=null,Pi=1,Li="";function Nr(t,i){ps[ms++]=Ma,ps[ms++]=Sa,Sa=t,Ma=i}function Cf(t,i,o){$n[Kn++]=Pi,$n[Kn++]=Li,$n[Kn++]=Dr,Dr=t;var l=Pi;t=Li;var d=32-Mn(l)-1;l&=~(1<<d),o+=1;var m=32-Mn(i)+d;if(30<m){var M=d-d%5;m=(l&(1<<M)-1).toString(32),l>>=M,d-=M,Pi=1<<32-Mn(i)+d|o<<d|l,Li=m+t}else Pi=1<<m|o<<d|l,Li=t}function _c(t){t.return!==null&&(Nr(t,1),Cf(t,1,0))}function xc(t){for(;t===Sa;)Sa=ps[--ms],ps[ms]=null,Ma=ps[--ms],ps[ms]=null;for(;t===Dr;)Dr=$n[--Kn],$n[Kn]=null,Li=$n[--Kn],$n[Kn]=null,Pi=$n[--Kn],$n[Kn]=null}var Gn=null,Vn=null,Vt=!1,ri=null;function Pf(t,i){var o=ei(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Lf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Gn=t,Vn=er(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Gn=t,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Dr!==null?{id:Pi,overflow:Li}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ei(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Gn=t,Vn=null,!0):!1;default:return!1}}function yc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sc(t){if(Vt){var i=Vn;if(i){var o=i;if(!Lf(t,i)){if(yc(t))throw Error(n(418));i=er(o.nextSibling);var l=Gn;i&&Lf(t,i)?Pf(l,o):(t.flags=t.flags&-4097|2,Vt=!1,Gn=t)}}else{if(yc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Vt=!1,Gn=t}}}function Df(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gn=t}function Ea(t){if(t!==Gn)return!1;if(!Vt)return Df(t),Vt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!fc(t.type,t.memoizedProps)),i&&(i=Vn)){if(yc(t))throw Nf(),Error(n(418));for(;i;)Pf(t,i),i=er(i.nextSibling)}if(Df(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Vn=er(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Vn=null}}else Vn=Gn?er(t.stateNode.nextSibling):null;return!0}function Nf(){for(var t=Vn;t;)t=er(t.nextSibling)}function gs(){Vn=Gn=null,Vt=!1}function Mc(t){ri===null?ri=[t]:ri.push(t)}var $v=L.ReactCurrentBatchConfig;function wo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var d=l,m=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var U=d.refs;M===null?delete U[m]:U[m]=M},i._stringRef=m,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function wa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function If(t){var i=t._init;return i(t._payload)}function Uf(t){function i(K,G){if(t){var ee=K.deletions;ee===null?(K.deletions=[G],K.flags|=16):ee.push(G)}}function o(K,G){if(!t)return null;for(;G!==null;)i(K,G),G=G.sibling;return null}function l(K,G){for(K=new Map;G!==null;)G.key!==null?K.set(G.key,G):K.set(G.index,G),G=G.sibling;return K}function d(K,G){return K=dr(K,G),K.index=0,K.sibling=null,K}function m(K,G,ee){return K.index=ee,t?(ee=K.alternate,ee!==null?(ee=ee.index,ee<G?(K.flags|=2,G):ee):(K.flags|=2,G)):(K.flags|=1048576,G)}function M(K){return t&&K.alternate===null&&(K.flags|=2),K}function U(K,G,ee,Te){return G===null||G.tag!==6?(G=hu(ee,K.mode,Te),G.return=K,G):(G=d(G,ee),G.return=K,G)}function B(K,G,ee,Te){var We=ee.type;return We===O?ve(K,G,ee.props.children,Te,ee.key):G!==null&&(G.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===j&&If(We)===G.type)?(Te=d(G,ee.props),Te.ref=wo(K,G,ee),Te.return=K,Te):(Te=qa(ee.type,ee.key,ee.props,null,K.mode,Te),Te.ref=wo(K,G,ee),Te.return=K,Te)}function ne(K,G,ee,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==ee.containerInfo||G.stateNode.implementation!==ee.implementation?(G=pu(ee,K.mode,Te),G.return=K,G):(G=d(G,ee.children||[]),G.return=K,G)}function ve(K,G,ee,Te,We){return G===null||G.tag!==7?(G=Hr(ee,K.mode,Te,We),G.return=K,G):(G=d(G,ee),G.return=K,G)}function ye(K,G,ee){if(typeof G=="string"&&G!==""||typeof G=="number")return G=hu(""+G,K.mode,ee),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case W:return ee=qa(G.type,G.key,G.props,null,K.mode,ee),ee.ref=wo(K,null,G),ee.return=K,ee;case F:return G=pu(G,K.mode,ee),G.return=K,G;case j:var Te=G._init;return ye(K,Te(G._payload),ee)}if(T(G)||$(G))return G=Hr(G,K.mode,ee,null),G.return=K,G;wa(K,G)}return null}function ge(K,G,ee,Te){var We=G!==null?G.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return We!==null?null:U(K,G,""+ee,Te);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case W:return ee.key===We?B(K,G,ee,Te):null;case F:return ee.key===We?ne(K,G,ee,Te):null;case j:return We=ee._init,ge(K,G,We(ee._payload),Te)}if(T(ee)||$(ee))return We!==null?null:ve(K,G,ee,Te,null);wa(K,ee)}return null}function De(K,G,ee,Te,We){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return K=K.get(ee)||null,U(G,K,""+Te,We);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case W:return K=K.get(Te.key===null?ee:Te.key)||null,B(G,K,Te,We);case F:return K=K.get(Te.key===null?ee:Te.key)||null,ne(G,K,Te,We);case j:var Ze=Te._init;return De(K,G,ee,Ze(Te._payload),We)}if(T(Te)||$(Te))return K=K.get(ee)||null,ve(G,K,Te,We,null);wa(G,Te)}return null}function Be(K,G,ee,Te){for(var We=null,Ze=null,Qe=G,it=G=0,an=null;Qe!==null&&it<ee.length;it++){Qe.index>it?(an=Qe,Qe=null):an=Qe.sibling;var Pt=ge(K,Qe,ee[it],Te);if(Pt===null){Qe===null&&(Qe=an);break}t&&Qe&&Pt.alternate===null&&i(K,Qe),G=m(Pt,G,it),Ze===null?We=Pt:Ze.sibling=Pt,Ze=Pt,Qe=an}if(it===ee.length)return o(K,Qe),Vt&&Nr(K,it),We;if(Qe===null){for(;it<ee.length;it++)Qe=ye(K,ee[it],Te),Qe!==null&&(G=m(Qe,G,it),Ze===null?We=Qe:Ze.sibling=Qe,Ze=Qe);return Vt&&Nr(K,it),We}for(Qe=l(K,Qe);it<ee.length;it++)an=De(Qe,K,it,ee[it],Te),an!==null&&(t&&an.alternate!==null&&Qe.delete(an.key===null?it:an.key),G=m(an,G,it),Ze===null?We=an:Ze.sibling=an,Ze=an);return t&&Qe.forEach(function(fr){return i(K,fr)}),Vt&&Nr(K,it),We}function Ge(K,G,ee,Te){var We=$(ee);if(typeof We!="function")throw Error(n(150));if(ee=We.call(ee),ee==null)throw Error(n(151));for(var Ze=We=null,Qe=G,it=G=0,an=null,Pt=ee.next();Qe!==null&&!Pt.done;it++,Pt=ee.next()){Qe.index>it?(an=Qe,Qe=null):an=Qe.sibling;var fr=ge(K,Qe,Pt.value,Te);if(fr===null){Qe===null&&(Qe=an);break}t&&Qe&&fr.alternate===null&&i(K,Qe),G=m(fr,G,it),Ze===null?We=fr:Ze.sibling=fr,Ze=fr,Qe=an}if(Pt.done)return o(K,Qe),Vt&&Nr(K,it),We;if(Qe===null){for(;!Pt.done;it++,Pt=ee.next())Pt=ye(K,Pt.value,Te),Pt!==null&&(G=m(Pt,G,it),Ze===null?We=Pt:Ze.sibling=Pt,Ze=Pt);return Vt&&Nr(K,it),We}for(Qe=l(K,Qe);!Pt.done;it++,Pt=ee.next())Pt=De(Qe,K,it,Pt.value,Te),Pt!==null&&(t&&Pt.alternate!==null&&Qe.delete(Pt.key===null?it:Pt.key),G=m(Pt,G,it),Ze===null?We=Pt:Ze.sibling=Pt,Ze=Pt);return t&&Qe.forEach(function(R_){return i(K,R_)}),Vt&&Nr(K,it),We}function Kt(K,G,ee,Te){if(typeof ee=="object"&&ee!==null&&ee.type===O&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case W:e:{for(var We=ee.key,Ze=G;Ze!==null;){if(Ze.key===We){if(We=ee.type,We===O){if(Ze.tag===7){o(K,Ze.sibling),G=d(Ze,ee.props.children),G.return=K,K=G;break e}}else if(Ze.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===j&&If(We)===Ze.type){o(K,Ze.sibling),G=d(Ze,ee.props),G.ref=wo(K,Ze,ee),G.return=K,K=G;break e}o(K,Ze);break}else i(K,Ze);Ze=Ze.sibling}ee.type===O?(G=Hr(ee.props.children,K.mode,Te,ee.key),G.return=K,K=G):(Te=qa(ee.type,ee.key,ee.props,null,K.mode,Te),Te.ref=wo(K,G,ee),Te.return=K,K=Te)}return M(K);case F:e:{for(Ze=ee.key;G!==null;){if(G.key===Ze)if(G.tag===4&&G.stateNode.containerInfo===ee.containerInfo&&G.stateNode.implementation===ee.implementation){o(K,G.sibling),G=d(G,ee.children||[]),G.return=K,K=G;break e}else{o(K,G);break}else i(K,G);G=G.sibling}G=pu(ee,K.mode,Te),G.return=K,K=G}return M(K);case j:return Ze=ee._init,Kt(K,G,Ze(ee._payload),Te)}if(T(ee))return Be(K,G,ee,Te);if($(ee))return Ge(K,G,ee,Te);wa(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,G!==null&&G.tag===6?(o(K,G.sibling),G=d(G,ee),G.return=K,K=G):(o(K,G),G=hu(ee,K.mode,Te),G.return=K,K=G),M(K)):o(K,G)}return Kt}var vs=Uf(!0),Ff=Uf(!1),Ta=tr(null),Aa=null,_s=null,Ec=null;function wc(){Ec=_s=Aa=null}function Tc(t){var i=Ta.current;Bt(Ta),t._currentValue=i}function Ac(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function xs(t,i){Aa=t,Ec=_s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(Dn=!0),t.firstContext=null)}function Zn(t){var i=t._currentValue;if(Ec!==t)if(t={context:t,memoizedValue:i,next:null},_s===null){if(Aa===null)throw Error(n(308));_s=t,Aa.dependencies={lanes:0,firstContext:t}}else _s=_s.next=t;return i}var Ir=null;function bc(t){Ir===null?Ir=[t]:Ir.push(t)}function Of(t,i,o,l){var d=i.interleaved;return d===null?(o.next=o,bc(i)):(o.next=d.next,d.next=o),i.interleaved=o,Di(t,l)}function Di(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var rr=!1;function Rc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function sr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,Ct&2){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,Di(t,o)}return d=l.interleaved,d===null?(i.next=i,bc(l)):(i.next=d.next,d.next=i),l.interleaved=i,Di(t,o)}function ba(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Gl(t,o)}}function zf(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=M:m=m.next=M,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ra(t,i,o,l){var d=t.updateQueue;rr=!1;var m=d.firstBaseUpdate,M=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var B=U,ne=B.next;B.next=null,M===null?m=ne:M.next=ne,M=B;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,U=ve.lastBaseUpdate,U!==M&&(U===null?ve.firstBaseUpdate=ne:U.next=ne,ve.lastBaseUpdate=B))}if(m!==null){var ye=d.baseState;M=0,ve=ne=B=null,U=m;do{var ge=U.lane,De=U.eventTime;if((l&ge)===ge){ve!==null&&(ve=ve.next={eventTime:De,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Be=t,Ge=U;switch(ge=i,De=o,Ge.tag){case 1:if(Be=Ge.payload,typeof Be=="function"){ye=Be.call(De,ye,ge);break e}ye=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Ge.payload,ge=typeof Be=="function"?Be.call(De,ye,ge):Be,ge==null)break e;ye=X({},ye,ge);break e;case 2:rr=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,ge=d.effects,ge===null?d.effects=[U]:ge.push(U))}else De={eventTime:De,lane:ge,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ve===null?(ne=ve=De,B=ye):ve=ve.next=De,M|=ge;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;ge=U,U=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(ve===null&&(B=ye),d.baseState=B,d.firstBaseUpdate=ne,d.lastBaseUpdate=ve,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Or|=M,t.lanes=M,t.memoizedState=ye}}function Bf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=o,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var To={},vi=tr(To),Ao=tr(To),bo=tr(To);function Ur(t){if(t===To)throw Error(n(174));return t}function Cc(t,i){switch(kt(bo,i),kt(Ao,t),kt(vi,To),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ue(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ue(i,t)}Bt(vi),kt(vi,i)}function ys(){Bt(vi),Bt(Ao),Bt(bo)}function Hf(t){Ur(bo.current);var i=Ur(vi.current),o=Ue(i,t.type);i!==o&&(kt(Ao,t),kt(vi,o))}function Pc(t){Ao.current===t&&(Bt(vi),Bt(Ao))}var Xt=tr(0);function Ca(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Lc=[];function Dc(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var Pa=L.ReactCurrentDispatcher,Nc=L.ReactCurrentBatchConfig,Fr=0,jt=null,en=null,sn=null,La=!1,Ro=!1,Co=0,Kv=0;function pn(){throw Error(n(321))}function Ic(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ii(t[o],i[o]))return!1;return!0}function Uc(t,i,o,l,d,m){if(Fr=m,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Pa.current=t===null||t.memoizedState===null?e_:t_,t=o(l,d),Ro){m=0;do{if(Ro=!1,Co=0,25<=m)throw Error(n(301));m+=1,sn=en=null,i.updateQueue=null,Pa.current=n_,t=o(l,d)}while(Ro)}if(Pa.current=Ia,i=en!==null&&en.next!==null,Fr=0,sn=en=jt=null,La=!1,i)throw Error(n(300));return t}function Fc(){var t=Co!==0;return Co=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?jt.memoizedState=sn=t:sn=sn.next=t,sn}function Qn(){if(en===null){var t=jt.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var i=sn===null?jt.memoizedState:sn.next;if(i!==null)sn=i,en=t;else{if(t===null)throw Error(n(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},sn===null?jt.memoizedState=sn=t:sn=sn.next=t}return sn}function Po(t,i){return typeof i=="function"?i(t):i}function Oc(t){var i=Qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=en,d=l.baseQueue,m=o.pending;if(m!==null){if(d!==null){var M=d.next;d.next=m.next,m.next=M}l.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,l=l.baseState;var U=M=null,B=null,ne=m;do{var ve=ne.lane;if((Fr&ve)===ve)B!==null&&(B=B.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),l=ne.hasEagerState?ne.eagerState:t(l,ne.action);else{var ye={lane:ve,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};B===null?(U=B=ye,M=l):B=B.next=ye,jt.lanes|=ve,Or|=ve}ne=ne.next}while(ne!==null&&ne!==m);B===null?M=l:B.next=U,ii(l,i.memoizedState)||(Dn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=B,o.lastRenderedState=l}if(t=o.interleaved,t!==null){d=t;do m=d.lane,jt.lanes|=m,Or|=m,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function kc(t){var i=Qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do m=t(m,M.action),M=M.next;while(M!==d);ii(m,i.memoizedState)||(Dn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,l]}function Gf(){}function Vf(t,i){var o=jt,l=Qn(),d=i(),m=!ii(l.memoizedState,d);if(m&&(l.memoizedState=d,Dn=!0),l=l.queue,zc(jf.bind(null,o,l,t),[t]),l.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,Lo(9,Xf.bind(null,o,l,d,i),void 0,null),on===null)throw Error(n(349));Fr&30||Wf(o,i,d)}return d}function Wf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Xf(t,i,o,l){i.value=o,i.getSnapshot=l,Yf(i)&&qf(t)}function jf(t,i,o){return o(function(){Yf(i)&&qf(t)})}function Yf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ii(t,o)}catch{return!0}}function qf(t){var i=Di(t,1);i!==null&&li(i,t,1,-1)}function $f(t){var i=_i();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:t},i.queue=t,t=t.dispatch=Jv.bind(null,jt,t),[i.memoizedState,t]}function Lo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Kf(){return Qn().memoizedState}function Da(t,i,o,l){var d=_i();jt.flags|=t,d.memoizedState=Lo(1|i,o,void 0,l===void 0?null:l)}function Na(t,i,o,l){var d=Qn();l=l===void 0?null:l;var m=void 0;if(en!==null){var M=en.memoizedState;if(m=M.destroy,l!==null&&Ic(l,M.deps)){d.memoizedState=Lo(i,o,m,l);return}}jt.flags|=t,d.memoizedState=Lo(1|i,o,m,l)}function Zf(t,i){return Da(8390656,8,t,i)}function zc(t,i){return Na(2048,8,t,i)}function Qf(t,i){return Na(4,2,t,i)}function Jf(t,i){return Na(4,4,t,i)}function eh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function th(t,i,o){return o=o!=null?o.concat([t]):null,Na(4,4,eh.bind(null,i,t),o)}function Bc(){}function nh(t,i){var o=Qn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ic(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function ih(t,i){var o=Qn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ic(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function rh(t,i,o){return Fr&21?(ii(o,i)||(o=ta(),jt.lanes|=o,Or|=o,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,Dn=!0),t.memoizedState=o)}function Zv(t,i){var o=Nt;Nt=o!==0&&4>o?o:4,t(!0);var l=Nc.transition;Nc.transition={};try{t(!1),i()}finally{Nt=o,Nc.transition=l}}function sh(){return Qn().memoizedState}function Qv(t,i,o){var l=cr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},oh(t))ah(i,o);else if(o=Of(t,i,o,l),o!==null){var d=wn();li(o,t,l,d),lh(o,i,l)}}function Jv(t,i,o){var l=cr(t),d={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(oh(t))ah(i,d);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,U=m(M,o);if(d.hasEagerState=!0,d.eagerState=U,ii(U,M)){var B=i.interleaved;B===null?(d.next=d,bc(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}o=Of(t,i,d,l),o!==null&&(d=wn(),li(o,t,l,d),lh(o,i,l))}}function oh(t){var i=t.alternate;return t===jt||i!==null&&i===jt}function ah(t,i){Ro=La=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function lh(t,i,o){if(o&4194240){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Gl(t,o)}}var Ia={readContext:Zn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},e_={readContext:Zn,useCallback:function(t,i){return _i().memoizedState=[t,i===void 0?null:i],t},useContext:Zn,useEffect:Zf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Da(4194308,4,eh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Da(4194308,4,t,i)},useInsertionEffect:function(t,i){return Da(4,2,t,i)},useMemo:function(t,i){var o=_i();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=_i();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Qv.bind(null,jt,t),[l.memoizedState,t]},useRef:function(t){var i=_i();return t={current:t},i.memoizedState=t},useState:$f,useDebugValue:Bc,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=$f(!1),i=t[0];return t=Zv.bind(null,t[1]),_i().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=jt,d=_i();if(Vt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),on===null)throw Error(n(349));Fr&30||Wf(l,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,Zf(jf.bind(null,l,m,t),[t]),l.flags|=2048,Lo(9,Xf.bind(null,l,m,o,i),void 0,null),o},useId:function(){var t=_i(),i=on.identifierPrefix;if(Vt){var o=Li,l=Pi;o=(l&~(1<<32-Mn(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Co++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Kv++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},t_={readContext:Zn,useCallback:nh,useContext:Zn,useEffect:zc,useImperativeHandle:th,useInsertionEffect:Qf,useLayoutEffect:Jf,useMemo:ih,useReducer:Oc,useRef:Kf,useState:function(){return Oc(Po)},useDebugValue:Bc,useDeferredValue:function(t){var i=Qn();return rh(i,en.memoizedState,t)},useTransition:function(){var t=Oc(Po)[0],i=Qn().memoizedState;return[t,i]},useMutableSource:Gf,useSyncExternalStore:Vf,useId:sh,unstable_isNewReconciler:!1},n_={readContext:Zn,useCallback:nh,useContext:Zn,useEffect:zc,useImperativeHandle:th,useInsertionEffect:Qf,useLayoutEffect:Jf,useMemo:ih,useReducer:kc,useRef:Kf,useState:function(){return kc(Po)},useDebugValue:Bc,useDeferredValue:function(t){var i=Qn();return en===null?i.memoizedState=t:rh(i,en.memoizedState,t)},useTransition:function(){var t=kc(Po)[0],i=Qn().memoizedState;return[t,i]},useMutableSource:Gf,useSyncExternalStore:Vf,useId:sh,unstable_isNewReconciler:!1};function si(t,i){if(t&&t.defaultProps){i=X({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Hc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:X({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ua={isMounted:function(t){return(t=t._reactInternals)?Ai(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=wn(),d=cr(t),m=Ni(l,d);m.payload=i,o!=null&&(m.callback=o),i=sr(t,m,d),i!==null&&(li(i,t,d,l),ba(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=wn(),d=cr(t),m=Ni(l,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=sr(t,m,d),i!==null&&(li(i,t,d,l),ba(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=wn(),l=cr(t),d=Ni(o,l);d.tag=2,i!=null&&(d.callback=i),i=sr(t,d,l),i!==null&&(li(i,t,l,o),ba(i,t,l))}};function ch(t,i,o,l,d,m,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,M):i.prototype&&i.prototype.isPureReactComponent?!vo(o,l)||!vo(d,m):!0}function uh(t,i,o){var l=!1,d=nr,m=i.contextType;return typeof m=="object"&&m!==null?m=Zn(m):(d=Ln(i)?Lr:hn.current,l=i.contextTypes,m=(l=l!=null)?hs(t,d):nr),i=new i(o,m),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ua,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=m),i}function dh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ua.enqueueReplaceState(i,i.state,null)}function Gc(t,i,o,l){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},Rc(t);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Zn(m):(m=Ln(i)?Lr:hn.current,d.context=hs(t,m)),d.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Hc(t,i,m,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ua.enqueueReplaceState(d,d.state,null),Ra(t,o,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,i){try{var o="",l=i;do o+=re(l),l=l.return;while(l);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:i,stack:d,digest:null}}function Vc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Wc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var i_=typeof WeakMap=="function"?WeakMap:Map;function fh(t,i,o){o=Ni(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ga||(Ga=!0,su=l),Wc(t,i)},o}function hh(t,i,o){o=Ni(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;o.payload=function(){return l(d)},o.callback=function(){Wc(t,i)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){Wc(t,i),typeof l!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function ph(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new i_;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(o)||(d.add(o),t=v_.bind(null,t,i,o),i.then(t,t))}function mh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function gh(t,i,o,l,d){return t.mode&1?(t.flags|=65536,t.lanes=d,t):(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ni(-1,1),i.tag=2,sr(o,i,1))),o.lanes|=1),t)}var r_=L.ReactCurrentOwner,Dn=!1;function En(t,i,o,l){i.child=t===null?Ff(i,null,o,l):vs(i,t.child,o,l)}function vh(t,i,o,l,d){o=o.render;var m=i.ref;return xs(i,d),l=Uc(t,i,o,l,m,d),o=Fc(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ii(t,i,d)):(Vt&&o&&_c(i),i.flags|=1,En(t,i,l,d),i.child)}function _h(t,i,o,l,d){if(t===null){var m=o.type;return typeof m=="function"&&!fu(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,xh(t,i,m,l,d)):(t=qa(o.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!(t.lanes&d)){var M=m.memoizedProps;if(o=o.compare,o=o!==null?o:vo,o(M,l)&&t.ref===i.ref)return Ii(t,i,d)}return i.flags|=1,t=dr(m,l),t.ref=i.ref,t.return=i,i.child=t}function xh(t,i,o,l,d){if(t!==null){var m=t.memoizedProps;if(vo(m,l)&&t.ref===i.ref)if(Dn=!1,i.pendingProps=l=m,(t.lanes&d)!==0)t.flags&131072&&(Dn=!0);else return i.lanes=t.lanes,Ii(t,i,d)}return Xc(t,i,o,l,d)}function yh(t,i,o){var l=i.pendingProps,d=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Es,Wn),Wn|=o;else{if(!(o&1073741824))return t=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,kt(Es,Wn),Wn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=m!==null?m.baseLanes:o,kt(Es,Wn),Wn|=l}else m!==null?(l=m.baseLanes|o,i.memoizedState=null):l=o,kt(Es,Wn),Wn|=l;return En(t,i,d,o),i.child}function Sh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Xc(t,i,o,l,d){var m=Ln(o)?Lr:hn.current;return m=hs(i,m),xs(i,d),o=Uc(t,i,o,l,m,d),l=Fc(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ii(t,i,d)):(Vt&&l&&_c(i),i.flags|=1,En(t,i,o,d),i.child)}function Mh(t,i,o,l,d){if(Ln(o)){var m=!0;xa(i)}else m=!1;if(xs(i,d),i.stateNode===null)Oa(t,i),uh(i,o,l),Gc(i,o,l,d),l=!0;else if(t===null){var M=i.stateNode,U=i.memoizedProps;M.props=U;var B=M.context,ne=o.contextType;typeof ne=="object"&&ne!==null?ne=Zn(ne):(ne=Ln(o)?Lr:hn.current,ne=hs(i,ne));var ve=o.getDerivedStateFromProps,ye=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==l||B!==ne)&&dh(i,M,l,ne),rr=!1;var ge=i.memoizedState;M.state=ge,Ra(i,l,M,d),B=i.memoizedState,U!==l||ge!==B||Pn.current||rr?(typeof ve=="function"&&(Hc(i,o,ve,l),B=i.memoizedState),(U=rr||ch(i,o,U,l,ge,B,ne))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),M.props=l,M.state=B,M.context=ne,l=U):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,kf(t,i),U=i.memoizedProps,ne=i.type===i.elementType?U:si(i.type,U),M.props=ne,ye=i.pendingProps,ge=M.context,B=o.contextType,typeof B=="object"&&B!==null?B=Zn(B):(B=Ln(o)?Lr:hn.current,B=hs(i,B));var De=o.getDerivedStateFromProps;(ve=typeof De=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==ye||ge!==B)&&dh(i,M,l,B),rr=!1,ge=i.memoizedState,M.state=ge,Ra(i,l,M,d);var Be=i.memoizedState;U!==ye||ge!==Be||Pn.current||rr?(typeof De=="function"&&(Hc(i,o,De,l),Be=i.memoizedState),(ne=rr||ch(i,o,ne,l,ge,Be,B)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Be,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Be,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),M.props=l,M.state=Be,M.context=B,l=ne):(typeof M.componentDidUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return jc(t,i,o,l,m,d)}function jc(t,i,o,l,d,m){Sh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return d&&bf(i,o,!1),Ii(t,i,m);l=i.stateNode,r_.current=i;var U=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=vs(i,t.child,null,m),i.child=vs(i,null,U,m)):En(t,i,U,m),i.memoizedState=l.state,d&&bf(i,o,!0),i.child}function Eh(t){var i=t.stateNode;i.pendingContext?Tf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Tf(t,i.context,!1),Cc(t,i.containerInfo)}function wh(t,i,o,l,d){return gs(),Mc(d),i.flags|=256,En(t,i,o,l),i.child}var Yc={dehydrated:null,treeContext:null,retryLane:0};function qc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Th(t,i,o){var l=i.pendingProps,d=Xt.current,m=!1,M=(i.flags&128)!==0,U;if((U=M)||(U=t!==null&&t.memoizedState===null?!1:(d&2)!==0),U?(m=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),kt(Xt,d&1),t===null)return Sc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=l.children,t=l.fallback,m?(l=i.mode,m=i.child,M={mode:"hidden",children:M},!(l&1)&&m!==null?(m.childLanes=0,m.pendingProps=M):m=$a(M,l,0,null),t=Hr(t,l,o,null),m.return=i,t.return=i,m.sibling=t,i.child=m,i.child.memoizedState=qc(o),i.memoizedState=Yc,t):$c(i,M));if(d=t.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return s_(t,i,M,l,U,d,o);if(m){m=l.fallback,M=i.mode,d=t.child,U=d.sibling;var B={mode:"hidden",children:l.children};return!(M&1)&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=dr(d,B),l.subtreeFlags=d.subtreeFlags&14680064),U!==null?m=dr(U,m):(m=Hr(m,M,o,null),m.flags|=2),m.return=i,l.return=i,l.sibling=m,i.child=l,l=m,m=i.child,M=t.child.memoizedState,M=M===null?qc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=t.childLanes&~o,i.memoizedState=Yc,l}return m=t.child,t=m.sibling,l=dr(m,{mode:"visible",children:l.children}),!(i.mode&1)&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function $c(t,i){return i=$a({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Fa(t,i,o,l){return l!==null&&Mc(l),vs(i,t.child,null,o),t=$c(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function s_(t,i,o,l,d,m,M){if(o)return i.flags&256?(i.flags&=-257,l=Vc(Error(n(422))),Fa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(m=l.fallback,d=i.mode,l=$a({mode:"visible",children:l.children},d,0,null),m=Hr(m,d,M,null),m.flags|=2,l.return=i,m.return=i,l.sibling=m,i.child=l,i.mode&1&&vs(i,t.child,null,M),i.child.memoizedState=qc(M),i.memoizedState=Yc,m);if(!(i.mode&1))return Fa(t,i,M,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var U=l.dgst;return l=U,m=Error(n(419)),l=Vc(m,l,void 0),Fa(t,i,M,l)}if(U=(M&t.childLanes)!==0,Dn||U){if(l=on,l!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(l.suspendedLanes|M)?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Di(t,d),li(l,t,d,-1))}return du(),l=Vc(Error(n(421))),Fa(t,i,M,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=__.bind(null,t),d._reactRetry=i,null):(t=m.treeContext,Vn=er(d.nextSibling),Gn=i,Vt=!0,ri=null,t!==null&&($n[Kn++]=Pi,$n[Kn++]=Li,$n[Kn++]=Dr,Pi=t.id,Li=t.overflow,Dr=i),i=$c(i,l.children),i.flags|=4096,i)}function Ah(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Ac(t.return,i,o)}function Kc(t,i,o,l,d){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=o,m.tailMode=d)}function bh(t,i,o){var l=i.pendingProps,d=l.revealOrder,m=l.tail;if(En(t,i,l.children,o),l=Xt.current,l&2)l=l&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ah(t,o,i);else if(t.tag===19)Ah(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(kt(Xt,l),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Ca(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Kc(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Ca(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}Kc(i,!0,o,null,m);break;case"together":Kc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Oa(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ii(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Or|=i.lanes,!(o&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=dr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=dr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function o_(t,i,o){switch(i.tag){case 3:Eh(i),gs();break;case 5:Hf(i);break;case 1:Ln(i.type)&&xa(i);break;case 4:Cc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;kt(Ta,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(kt(Xt,Xt.current&1),i.flags|=128,null):o&i.child.childLanes?Th(t,i,o):(kt(Xt,Xt.current&1),t=Ii(t,i,o),t!==null?t.sibling:null);kt(Xt,Xt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,t.flags&128){if(l)return bh(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt(Xt,Xt.current),l)break;return null;case 22:case 23:return i.lanes=0,yh(t,i,o)}return Ii(t,i,o)}var Rh,Zc,Ch,Ph;Rh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Zc=function(){},Ch=function(t,i,o,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,Ur(vi.current);var m=null;switch(o){case"input":d=Ve(t,d),l=Ve(t,l),m=[];break;case"select":d=X({},d,{value:void 0}),l=X({},l,{value:void 0}),m=[];break;case"textarea":d=pe(t,d),l=pe(t,l),m=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ga)}nt(o,l);var M;o=null;for(ne in d)if(!l.hasOwnProperty(ne)&&d.hasOwnProperty(ne)&&d[ne]!=null)if(ne==="style"){var U=d[ne];for(M in U)U.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?m||(m=[]):(m=m||[]).push(ne,null));for(ne in l){var B=l[ne];if(U=d!=null?d[ne]:void 0,l.hasOwnProperty(ne)&&B!==U&&(B!=null||U!=null))if(ne==="style")if(U){for(M in U)!U.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in B)B.hasOwnProperty(M)&&U[M]!==B[M]&&(o||(o={}),o[M]=B[M])}else o||(m||(m=[]),m.push(ne,o)),o=B;else ne==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(m=m||[]).push(ne,B)):ne==="children"?typeof B!="string"&&typeof B!="number"||(m=m||[]).push(ne,""+B):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(B!=null&&ne==="onScroll"&&zt("scroll",t),m||U===B||(m=[])):(m=m||[]).push(ne,B))}o&&(m=m||[]).push("style",o);var ne=m;(i.updateQueue=ne)&&(i.flags|=4)}},Ph=function(t,i,o,l){o!==l&&(i.flags|=4)};function Do(t,i){if(!Vt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function mn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function a_(t,i,o){var l=i.pendingProps;switch(xc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Ln(i.type)&&_a(),mn(i),null;case 3:return l=i.stateNode,ys(),Bt(Pn),Bt(hn),Dc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ea(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,ri!==null&&(lu(ri),ri=null))),Zc(t,i),mn(i),null;case 5:Pc(i);var d=Ur(bo.current);if(o=i.type,t!==null&&i.stateNode!=null)Ch(t,i,o,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return mn(i),null}if(t=Ur(vi.current),Ea(i)){l=i.stateNode,o=i.type;var m=i.memoizedProps;switch(l[gi]=i,l[Mo]=m,t=(i.mode&1)!==0,o){case"dialog":zt("cancel",l),zt("close",l);break;case"iframe":case"object":case"embed":zt("load",l);break;case"video":case"audio":for(d=0;d<xo.length;d++)zt(xo[d],l);break;case"source":zt("error",l);break;case"img":case"image":case"link":zt("error",l),zt("load",l);break;case"details":zt("toggle",l);break;case"input":Ke(l,m),zt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!m.multiple},zt("invalid",l);break;case"textarea":me(l,m),zt("invalid",l)}nt(o,m),d=null;for(var M in m)if(m.hasOwnProperty(M)){var U=m[M];M==="children"?typeof U=="string"?l.textContent!==U&&(m.suppressHydrationWarning!==!0&&ma(l.textContent,U,t),d=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&ma(l.textContent,U,t),d=["children",""+U]):a.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&zt("scroll",l)}switch(o){case"input":qe(l),rt(l,m,!0);break;case"textarea":qe(l),He(l);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(l.onclick=ga)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ae(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[gi]=i,t[Mo]=l,Rh(t,i,!1,!1),i.stateNode=t;e:{switch(M=Mt(o,l),o){case"dialog":zt("cancel",t),zt("close",t),d=l;break;case"iframe":case"object":case"embed":zt("load",t),d=l;break;case"video":case"audio":for(d=0;d<xo.length;d++)zt(xo[d],t);d=l;break;case"source":zt("error",t),d=l;break;case"img":case"image":case"link":zt("error",t),zt("load",t),d=l;break;case"details":zt("toggle",t),d=l;break;case"input":Ke(t,l),d=Ve(t,l),zt("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=X({},l,{value:void 0}),zt("invalid",t);break;case"textarea":me(t,l),d=pe(t,l),zt("invalid",t);break;default:d=l}nt(o,d),U=d;for(m in U)if(U.hasOwnProperty(m)){var B=U[m];m==="style"?je(t,B):m==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&st(t,B)):m==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&he(t,B):typeof B=="number"&&he(t,""+B):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?B!=null&&m==="onScroll"&&zt("scroll",t):B!=null&&R(t,m,B,M))}switch(o){case"input":qe(t),rt(t,l,!1);break;case"textarea":qe(t),He(t);break;case"option":l.value!=null&&t.setAttribute("value",""+xe(l.value));break;case"select":t.multiple=!!l.multiple,m=l.value,m!=null?te(t,!!l.multiple,m,!1):l.defaultValue!=null&&te(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=ga)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(t&&i.stateNode!=null)Ph(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Ur(bo.current),Ur(vi.current),Ea(i)){if(l=i.stateNode,o=i.memoizedProps,l[gi]=i,(m=l.nodeValue!==o)&&(t=Gn,t!==null))switch(t.tag){case 3:ma(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ma(l.nodeValue,o,(t.mode&1)!==0)}m&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[gi]=i,i.stateNode=l}return mn(i),null;case 13:if(Bt(Xt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Vt&&Vn!==null&&i.mode&1&&!(i.flags&128))Nf(),gs(),i.flags|=98560,m=!1;else if(m=Ea(i),l!==null&&l.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[gi]=i}else gs(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;mn(i),m=!1}else ri!==null&&(lu(ri),ri=null),m=!0;if(!m)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,i.mode&1&&(t===null||Xt.current&1?tn===0&&(tn=3):du())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return ys(),Zc(t,i),t===null&&yo(i.stateNode.containerInfo),mn(i),null;case 10:return Tc(i.type._context),mn(i),null;case 17:return Ln(i.type)&&_a(),mn(i),null;case 19:if(Bt(Xt),m=i.memoizedState,m===null)return mn(i),null;if(l=(i.flags&128)!==0,M=m.rendering,M===null)if(l)Do(m,!1);else{if(tn!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(M=Ca(t),M!==null){for(i.flags|=128,Do(m,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)m=o,t=l,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,t=M.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return kt(Xt,Xt.current&1|2),i.child}t=t.sibling}m.tail!==null&&Fe()>ws&&(i.flags|=128,l=!0,Do(m,!1),i.lanes=4194304)}else{if(!l)if(t=Ca(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Do(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!Vt)return mn(i),null}else 2*Fe()-m.renderingStartTime>ws&&o!==1073741824&&(i.flags|=128,l=!0,Do(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(o=m.last,o!==null?o.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Fe(),i.sibling=null,o=Xt.current,kt(Xt,l?o&1|2:o&1),i):(mn(i),null);case 22:case 23:return uu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&i.mode&1?Wn&1073741824&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function l_(t,i){switch(xc(i),i.tag){case 1:return Ln(i.type)&&_a(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ys(),Bt(Pn),Bt(hn),Dc(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return Pc(i),null;case 13:if(Bt(Xt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));gs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Bt(Xt),null;case 4:return ys(),null;case 10:return Tc(i.type._context),null;case 22:case 23:return uu(),null;case 24:return null;default:return null}}var ka=!1,gn=!1,c_=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Ms(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){qt(t,i,l)}else o.current=null}function Qc(t,i,o){try{o()}catch(l){qt(t,i,l)}}var Lh=!1;function u_(t,i){if(uc=ra,t=cf(),nc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var M=0,U=-1,B=-1,ne=0,ve=0,ye=t,ge=null;t:for(;;){for(var De;ye!==o||d!==0&&ye.nodeType!==3||(U=M+d),ye!==m||l!==0&&ye.nodeType!==3||(B=M+l),ye.nodeType===3&&(M+=ye.nodeValue.length),(De=ye.firstChild)!==null;)ge=ye,ye=De;for(;;){if(ye===t)break t;if(ge===o&&++ne===d&&(U=M),ge===m&&++ve===l&&(B=M),(De=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=De}o=U===-1||B===-1?null:{start:U,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(dc={focusedElem:t,selectionRange:o},ra=!1,ke=i;ke!==null;)if(i=ke,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ke=t;else for(;ke!==null;){i=ke;try{var Be=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Ge=Be.memoizedProps,Kt=Be.memoizedState,K=i.stateNode,G=K.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:si(i.type,Ge),Kt);K.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ee=i.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){qt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,ke=t;break}ke=i.return}return Be=Lh,Lh=!1,Be}function No(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var m=d.destroy;d.destroy=void 0,m!==void 0&&Qc(i,o,m)}d=d.next}while(d!==l)}}function za(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Jc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Dh(t){var i=t.alternate;i!==null&&(t.alternate=null,Dh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[gi],delete i[Mo],delete i[mc],delete i[jv],delete i[Yv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Nh(t){return t.tag===5||t.tag===3||t.tag===4}function Ih(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Nh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function eu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ga));else if(l!==4&&(t=t.child,t!==null))for(eu(t,i,o),t=t.sibling;t!==null;)eu(t,i,o),t=t.sibling}function tu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(tu(t,i,o),t=t.sibling;t!==null;)tu(t,i,o),t=t.sibling}var un=null,oi=!1;function or(t,i,o){for(o=o.child;o!==null;)Uh(t,i,o),o=o.sibling}function Uh(t,i,o){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Rn,o)}catch{}switch(o.tag){case 5:gn||Ms(o,i);case 6:var l=un,d=oi;un=null,or(t,i,o),un=l,oi=d,un!==null&&(oi?(t=un,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):un.removeChild(o.stateNode));break;case 18:un!==null&&(oi?(t=un,o=o.stateNode,t.nodeType===8?pc(t.parentNode,o):t.nodeType===1&&pc(t,o),uo(t)):pc(un,o.stateNode));break;case 4:l=un,d=oi,un=o.stateNode.containerInfo,oi=!0,or(t,i,o),un=l,oi=d;break;case 0:case 11:case 14:case 15:if(!gn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var m=d,M=m.destroy;m=m.tag,M!==void 0&&(m&2||m&4)&&Qc(o,i,M),d=d.next}while(d!==l)}or(t,i,o);break;case 1:if(!gn&&(Ms(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(U){qt(o,i,U)}or(t,i,o);break;case 21:or(t,i,o);break;case 22:o.mode&1?(gn=(l=gn)||o.memoizedState!==null,or(t,i,o),gn=l):or(t,i,o);break;default:or(t,i,o)}}function Fh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new c_),i.forEach(function(l){var d=x_.bind(null,t,l);o.has(l)||(o.add(l),l.then(d,d))})}}function ai(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var d=o[l];try{var m=t,M=i,U=M;e:for(;U!==null;){switch(U.tag){case 5:un=U.stateNode,oi=!1;break e;case 3:un=U.stateNode.containerInfo,oi=!0;break e;case 4:un=U.stateNode.containerInfo,oi=!0;break e}U=U.return}if(un===null)throw Error(n(160));Uh(m,M,d),un=null,oi=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(ne){qt(d,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Oh(i,t),i=i.sibling}function Oh(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ai(i,t),xi(t),l&4){try{No(3,t,t.return),za(3,t)}catch(Ge){qt(t,t.return,Ge)}try{No(5,t,t.return)}catch(Ge){qt(t,t.return,Ge)}}break;case 1:ai(i,t),xi(t),l&512&&o!==null&&Ms(o,o.return);break;case 5:if(ai(i,t),xi(t),l&512&&o!==null&&Ms(o,o.return),t.flags&32){var d=t.stateNode;try{he(d,"")}catch(Ge){qt(t,t.return,Ge)}}if(l&4&&(d=t.stateNode,d!=null)){var m=t.memoizedProps,M=o!==null?o.memoizedProps:m,U=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&ze(d,m),Mt(U,M);var ne=Mt(U,m);for(M=0;M<B.length;M+=2){var ve=B[M],ye=B[M+1];ve==="style"?je(d,ye):ve==="dangerouslySetInnerHTML"?st(d,ye):ve==="children"?he(d,ye):R(d,ve,ye,ne)}switch(U){case"input":xt(d,m);break;case"textarea":Se(d,m);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var De=m.value;De!=null?te(d,!!m.multiple,De,!1):ge!==!!m.multiple&&(m.defaultValue!=null?te(d,!!m.multiple,m.defaultValue,!0):te(d,!!m.multiple,m.multiple?[]:"",!1))}d[Mo]=m}catch(Ge){qt(t,t.return,Ge)}}break;case 6:if(ai(i,t),xi(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,m=t.memoizedProps;try{d.nodeValue=m}catch(Ge){qt(t,t.return,Ge)}}break;case 3:if(ai(i,t),xi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{uo(i.containerInfo)}catch(Ge){qt(t,t.return,Ge)}break;case 4:ai(i,t),xi(t);break;case 13:ai(i,t),xi(t),d=t.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(ru=Fe())),l&4&&Fh(t);break;case 22:if(ve=o!==null&&o.memoizedState!==null,t.mode&1?(gn=(ne=gn)||ve,ai(i,t),gn=ne):ai(i,t),xi(t),l&8192){if(ne=t.memoizedState!==null,(t.stateNode.isHidden=ne)&&!ve&&t.mode&1)for(ke=t,ve=t.child;ve!==null;){for(ye=ke=ve;ke!==null;){switch(ge=ke,De=ge.child,ge.tag){case 0:case 11:case 14:case 15:No(4,ge,ge.return);break;case 1:Ms(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){l=ge,o=ge.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(Ge){qt(l,o,Ge)}}break;case 5:Ms(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Bh(ye);continue}}De!==null?(De.return=ge,ke=De):Bh(ye)}ve=ve.sibling}e:for(ve=null,ye=t;;){if(ye.tag===5){if(ve===null){ve=ye;try{d=ye.stateNode,ne?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=ye.stateNode,B=ye.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=tt("display",M))}catch(Ge){qt(t,t.return,Ge)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=ne?"":ye.memoizedProps}catch(Ge){qt(t,t.return,Ge)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ai(i,t),xi(t),l&4&&Fh(t);break;case 21:break;default:ai(i,t),xi(t)}}function xi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Nh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(he(d,""),l.flags&=-33);var m=Ih(t);tu(t,m,d);break;case 3:case 4:var M=l.stateNode.containerInfo,U=Ih(t);eu(t,U,M);break;default:throw Error(n(161))}}catch(B){qt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function d_(t,i,o){ke=t,kh(t)}function kh(t,i,o){for(var l=(t.mode&1)!==0;ke!==null;){var d=ke,m=d.child;if(d.tag===22&&l){var M=d.memoizedState!==null||ka;if(!M){var U=d.alternate,B=U!==null&&U.memoizedState!==null||gn;U=ka;var ne=gn;if(ka=M,(gn=B)&&!ne)for(ke=d;ke!==null;)M=ke,B=M.child,M.tag===22&&M.memoizedState!==null?Hh(d):B!==null?(B.return=M,ke=B):Hh(d);for(;m!==null;)ke=m,kh(m),m=m.sibling;ke=d,ka=U,gn=ne}zh(t)}else d.subtreeFlags&8772&&m!==null?(m.return=d,ke=m):zh(t)}}function zh(t){for(;ke!==null;){var i=ke;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:gn||za(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!gn)if(o===null)l.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:si(i.type,o.memoizedProps);l.componentDidUpdate(d,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Bf(i,m,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Bf(i,M,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var ve=ne.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&uo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}gn||i.flags&512&&Jc(i)}catch(ge){qt(i,i.return,ge)}}if(i===t){ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,ke=o;break}ke=i.return}}function Bh(t){for(;ke!==null;){var i=ke;if(i===t){ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ke=o;break}ke=i.return}}function Hh(t){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{za(4,i)}catch(B){qt(i,o,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(B){qt(i,d,B)}}var m=i.return;try{Jc(i)}catch(B){qt(i,m,B)}break;case 5:var M=i.return;try{Jc(i)}catch(B){qt(i,M,B)}}}catch(B){qt(i,i.return,B)}if(i===t){ke=null;break}var U=i.sibling;if(U!==null){U.return=i.return,ke=U;break}ke=i.return}}var f_=Math.ceil,Ba=L.ReactCurrentDispatcher,nu=L.ReactCurrentOwner,Jn=L.ReactCurrentBatchConfig,Ct=0,on=null,Zt=null,dn=0,Wn=0,Es=tr(0),tn=0,Io=null,Or=0,Ha=0,iu=0,Uo=null,Nn=null,ru=0,ws=1/0,Ui=null,Ga=!1,su=null,ar=null,Va=!1,lr=null,Wa=0,Fo=0,ou=null,Xa=-1,ja=0;function wn(){return Ct&6?Fe():Xa!==-1?Xa:Xa=Fe()}function cr(t){return t.mode&1?Ct&2&&dn!==0?dn&-dn:$v.transition!==null?(ja===0&&(ja=ta()),ja):(t=Nt,t!==0||(t=window.event,t=t===void 0?16:Gd(t.type)),t):1}function li(t,i,o,l){if(50<Fo)throw Fo=0,ou=null,Error(n(185));so(t,o,l),(!(Ct&2)||t!==on)&&(t===on&&(!(Ct&2)&&(Ha|=o),tn===4&&ur(t,dn)),In(t,l),o===1&&Ct===0&&!(i.mode&1)&&(ws=Fe()+500,ya&&ir()))}function In(t,i){var o=t.callbackNode;Cn(t,i);var l=qn(t,t===on?dn:0);if(l===0)o!==null&&Le(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&Le(o),i===1)t.tag===0?qv(Vh.bind(null,t)):Rf(Vh.bind(null,t)),Wv(function(){!(Ct&6)&&ir()}),o=null;else{switch(Id(l)){case 1:o=lt;break;case 4:o=ct;break;case 16:o=Ot;break;case 536870912:o=$t;break;default:o=Ot}o=Zh(o,Gh.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Gh(t,i){if(Xa=-1,ja=0,Ct&6)throw Error(n(327));var o=t.callbackNode;if(Ts()&&t.callbackNode!==o)return null;var l=qn(t,t===on?dn:0);if(l===0)return null;if(l&30||l&t.expiredLanes||i)i=Ya(t,l);else{i=l;var d=Ct;Ct|=2;var m=Xh();(on!==t||dn!==i)&&(Ui=null,ws=Fe()+500,zr(t,i));do try{m_();break}catch(U){Wh(t,U)}while(!0);wc(),Ba.current=m,Ct=d,Zt!==null?i=0:(on=null,dn=0,i=tn)}if(i!==0){if(i===2&&(d=Cr(t),d!==0&&(l=d,i=au(t,d))),i===1)throw o=Io,zr(t,0),ur(t,l),In(t,Fe()),o;if(i===6)ur(t,l);else{if(d=t.current.alternate,!(l&30)&&!h_(d)&&(i=Ya(t,l),i===2&&(m=Cr(t),m!==0&&(l=m,i=au(t,m))),i===1))throw o=Io,zr(t,0),ur(t,l),In(t,Fe()),o;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Br(t,Nn,Ui);break;case 3:if(ur(t,l),(l&130023424)===l&&(i=ru+500-Fe(),10<i)){if(qn(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){wn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=hc(Br.bind(null,t,Nn,Ui),i);break}Br(t,Nn,Ui);break;case 4:if(ur(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var M=31-Mn(l);m=1<<M,M=i[M],M>d&&(d=M),l&=~m}if(l=d,l=Fe()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*f_(l/1960))-l,10<l){t.timeoutHandle=hc(Br.bind(null,t,Nn,Ui),l);break}Br(t,Nn,Ui);break;case 5:Br(t,Nn,Ui);break;default:throw Error(n(329))}}}return In(t,Fe()),t.callbackNode===o?Gh.bind(null,t):null}function au(t,i){var o=Uo;return t.current.memoizedState.isDehydrated&&(zr(t,i).flags|=256),t=Ya(t,i),t!==2&&(i=Nn,Nn=o,i!==null&&lu(i)),t}function lu(t){Nn===null?Nn=t:Nn.push.apply(Nn,t)}function h_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var d=o[l],m=d.getSnapshot;d=d.value;try{if(!ii(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(t,i){for(i&=~iu,i&=~Ha,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Mn(i),l=1<<o;t[o]=-1,i&=~l}}function Vh(t){if(Ct&6)throw Error(n(327));Ts();var i=qn(t,0);if(!(i&1))return In(t,Fe()),null;var o=Ya(t,i);if(t.tag!==0&&o===2){var l=Cr(t);l!==0&&(i=l,o=au(t,l))}if(o===1)throw o=Io,zr(t,0),ur(t,i),In(t,Fe()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Br(t,Nn,Ui),In(t,Fe()),null}function cu(t,i){var o=Ct;Ct|=1;try{return t(i)}finally{Ct=o,Ct===0&&(ws=Fe()+500,ya&&ir())}}function kr(t){lr!==null&&lr.tag===0&&!(Ct&6)&&Ts();var i=Ct;Ct|=1;var o=Jn.transition,l=Nt;try{if(Jn.transition=null,Nt=1,t)return t()}finally{Nt=l,Jn.transition=o,Ct=i,!(Ct&6)&&ir()}}function uu(){Wn=Es.current,Bt(Es)}function zr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Vv(o)),Zt!==null)for(o=Zt.return;o!==null;){var l=o;switch(xc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&_a();break;case 3:ys(),Bt(Pn),Bt(hn),Dc();break;case 5:Pc(l);break;case 4:ys();break;case 13:Bt(Xt);break;case 19:Bt(Xt);break;case 10:Tc(l.type._context);break;case 22:case 23:uu()}o=o.return}if(on=t,Zt=t=dr(t.current,null),dn=Wn=i,tn=0,Io=null,iu=Ha=Or=0,Nn=Uo=null,Ir!==null){for(i=0;i<Ir.length;i++)if(o=Ir[i],l=o.interleaved,l!==null){o.interleaved=null;var d=l.next,m=o.pending;if(m!==null){var M=m.next;m.next=d,l.next=M}o.pending=l}Ir=null}return t}function Wh(t,i){do{var o=Zt;try{if(wc(),Pa.current=Ia,La){for(var l=jt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}La=!1}if(Fr=0,sn=en=jt=null,Ro=!1,Co=0,nu.current=null,o===null||o.return===null){tn=1,Io=i,Zt=null;break}e:{var m=t,M=o.return,U=o,B=i;if(i=dn,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ne=B,ve=U,ye=ve.tag;if(!(ve.mode&1)&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var De=mh(M);if(De!==null){De.flags&=-257,gh(De,M,U,m,i),De.mode&1&&ph(m,ne,i),i=De,B=ne;var Be=i.updateQueue;if(Be===null){var Ge=new Set;Ge.add(B),i.updateQueue=Ge}else Be.add(B);break e}else{if(!(i&1)){ph(m,ne,i),du();break e}B=Error(n(426))}}else if(Vt&&U.mode&1){var Kt=mh(M);if(Kt!==null){!(Kt.flags&65536)&&(Kt.flags|=256),gh(Kt,M,U,m,i),Mc(Ss(B,U));break e}}m=B=Ss(B,U),tn!==4&&(tn=2),Uo===null?Uo=[m]:Uo.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var K=fh(m,B,i);zf(m,K);break e;case 1:U=B;var G=m.type,ee=m.stateNode;if(!(m.flags&128)&&(typeof G.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(ar===null||!ar.has(ee)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=hh(m,U,i);zf(m,Te);break e}}m=m.return}while(m!==null)}Yh(o)}catch(We){i=We,Zt===o&&o!==null&&(Zt=o=o.return);continue}break}while(!0)}function Xh(){var t=Ba.current;return Ba.current=Ia,t===null?Ia:t}function du(){(tn===0||tn===3||tn===2)&&(tn=4),on===null||!(Or&268435455)&&!(Ha&268435455)||ur(on,dn)}function Ya(t,i){var o=Ct;Ct|=2;var l=Xh();(on!==t||dn!==i)&&(Ui=null,zr(t,i));do try{p_();break}catch(d){Wh(t,d)}while(!0);if(wc(),Ct=o,Ba.current=l,Zt!==null)throw Error(n(261));return on=null,dn=0,tn}function p_(){for(;Zt!==null;)jh(Zt)}function m_(){for(;Zt!==null&&!Xe();)jh(Zt)}function jh(t){var i=Kh(t.alternate,t,Wn);t.memoizedProps=t.pendingProps,i===null?Yh(t):Zt=i,nu.current=null}function Yh(t){var i=t;do{var o=i.alternate;if(t=i.return,i.flags&32768){if(o=l_(o,i),o!==null){o.flags&=32767,Zt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tn=6,Zt=null;return}}else if(o=a_(o,i,Wn),o!==null){Zt=o;return}if(i=i.sibling,i!==null){Zt=i;return}Zt=i=t}while(i!==null);tn===0&&(tn=5)}function Br(t,i,o){var l=Nt,d=Jn.transition;try{Jn.transition=null,Nt=1,g_(t,i,o,l)}finally{Jn.transition=d,Nt=l}return null}function g_(t,i,o,l){do Ts();while(lr!==null);if(Ct&6)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=o.lanes|o.childLanes;if(Kg(t,m),t===on&&(Zt=on=null,dn=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Va||(Va=!0,Zh(Ot,function(){return Ts(),null})),m=(o.flags&15990)!==0,o.subtreeFlags&15990||m){m=Jn.transition,Jn.transition=null;var M=Nt;Nt=1;var U=Ct;Ct|=4,nu.current=null,u_(t,o),Oh(o,t),Fv(dc),ra=!!uc,dc=uc=null,t.current=o,d_(o),Je(),Ct=U,Nt=M,Jn.transition=m}else t.current=o;if(Va&&(Va=!1,lr=t,Wa=d),m=t.pendingLanes,m===0&&(ar=null),ft(o.stateNode),In(t,Fe()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],l(d.value,{componentStack:d.stack,digest:d.digest});if(Ga)throw Ga=!1,t=su,su=null,t;return Wa&1&&t.tag!==0&&Ts(),m=t.pendingLanes,m&1?t===ou?Fo++:(Fo=0,ou=t):Fo=0,ir(),null}function Ts(){if(lr!==null){var t=Id(Wa),i=Jn.transition,o=Nt;try{if(Jn.transition=null,Nt=16>t?16:t,lr===null)var l=!1;else{if(t=lr,lr=null,Wa=0,Ct&6)throw Error(n(331));var d=Ct;for(Ct|=4,ke=t.current;ke!==null;){var m=ke,M=m.child;if(ke.flags&16){var U=m.deletions;if(U!==null){for(var B=0;B<U.length;B++){var ne=U[B];for(ke=ne;ke!==null;){var ve=ke;switch(ve.tag){case 0:case 11:case 15:No(8,ve,m)}var ye=ve.child;if(ye!==null)ye.return=ve,ke=ye;else for(;ke!==null;){ve=ke;var ge=ve.sibling,De=ve.return;if(Dh(ve),ve===ne){ke=null;break}if(ge!==null){ge.return=De,ke=ge;break}ke=De}}}var Be=m.alternate;if(Be!==null){var Ge=Be.child;if(Ge!==null){Be.child=null;do{var Kt=Ge.sibling;Ge.sibling=null,Ge=Kt}while(Ge!==null)}}ke=m}}if(m.subtreeFlags&2064&&M!==null)M.return=m,ke=M;else e:for(;ke!==null;){if(m=ke,m.flags&2048)switch(m.tag){case 0:case 11:case 15:No(9,m,m.return)}var K=m.sibling;if(K!==null){K.return=m.return,ke=K;break e}ke=m.return}}var G=t.current;for(ke=G;ke!==null;){M=ke;var ee=M.child;if(M.subtreeFlags&2064&&ee!==null)ee.return=M,ke=ee;else e:for(M=G;ke!==null;){if(U=ke,U.flags&2048)try{switch(U.tag){case 0:case 11:case 15:za(9,U)}}catch(We){qt(U,U.return,We)}if(U===M){ke=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,ke=Te;break e}ke=U.return}}if(Ct=d,ir(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Rn,t)}catch{}l=!0}return l}finally{Nt=o,Jn.transition=i}}return!1}function qh(t,i,o){i=Ss(o,i),i=fh(t,i,1),t=sr(t,i,1),i=wn(),t!==null&&(so(t,1,i),In(t,i))}function qt(t,i,o){if(t.tag===3)qh(t,t,o);else for(;i!==null;){if(i.tag===3){qh(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ar===null||!ar.has(l))){t=Ss(o,t),t=hh(i,t,1),i=sr(i,t,1),t=wn(),i!==null&&(so(i,1,t),In(i,t));break}}i=i.return}}function v_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=wn(),t.pingedLanes|=t.suspendedLanes&o,on===t&&(dn&o)===o&&(tn===4||tn===3&&(dn&130023424)===dn&&500>Fe()-ru?zr(t,0):iu|=o),In(t,i)}function $h(t,i){i===0&&(t.mode&1?(i=Yi,Yi<<=1,!(Yi&130023424)&&(Yi=4194304)):i=1);var o=wn();t=Di(t,i),t!==null&&(so(t,i,o),In(t,o))}function __(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),$h(t,o)}function x_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),$h(t,o)}var Kh;Kh=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Pn.current)Dn=!0;else{if(!(t.lanes&o)&&!(i.flags&128))return Dn=!1,o_(t,i,o);Dn=!!(t.flags&131072)}else Dn=!1,Vt&&i.flags&1048576&&Cf(i,Ma,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Oa(t,i),t=i.pendingProps;var d=hs(i,hn.current);xs(i,o),d=Uc(null,i,l,t,d,o);var m=Fc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(l)?(m=!0,xa(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Rc(i),d.updater=Ua,i.stateNode=d,d._reactInternals=i,Gc(i,l,t,o),i=jc(null,i,l,!0,m,o)):(i.tag=0,Vt&&m&&_c(i),En(null,i,d,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Oa(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=S_(l),t=si(l,t),d){case 0:i=Xc(null,i,l,t,o);break e;case 1:i=Mh(null,i,l,t,o);break e;case 11:i=vh(null,i,l,t,o);break e;case 14:i=_h(null,i,l,si(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:si(l,d),Xc(t,i,l,d,o);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:si(l,d),Mh(t,i,l,d,o);case 3:e:{if(Eh(i),t===null)throw Error(n(387));l=i.pendingProps,m=i.memoizedState,d=m.element,kf(t,i),Ra(i,l,null,o);var M=i.memoizedState;if(l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ss(Error(n(423)),i),i=wh(t,i,l,o,d);break e}else if(l!==d){d=Ss(Error(n(424)),i),i=wh(t,i,l,o,d);break e}else for(Vn=er(i.stateNode.containerInfo.firstChild),Gn=i,Vt=!0,ri=null,o=Ff(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(gs(),l===d){i=Ii(t,i,o);break e}En(t,i,l,o)}i=i.child}return i;case 5:return Hf(i),t===null&&Sc(i),l=i.type,d=i.pendingProps,m=t!==null?t.memoizedProps:null,M=d.children,fc(l,d)?M=null:m!==null&&fc(l,m)&&(i.flags|=32),Sh(t,i),En(t,i,M,o),i.child;case 6:return t===null&&Sc(i),null;case 13:return Th(t,i,o);case 4:return Cc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=vs(i,null,l,o):En(t,i,l,o),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:si(l,d),vh(t,i,l,d,o);case 7:return En(t,i,i.pendingProps,o),i.child;case 8:return En(t,i,i.pendingProps.children,o),i.child;case 12:return En(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,m=i.memoizedProps,M=d.value,kt(Ta,l._currentValue),l._currentValue=M,m!==null)if(ii(m.value,M)){if(m.children===d.children&&!Pn.current){i=Ii(t,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){M=m.child;for(var B=U.firstContext;B!==null;){if(B.context===l){if(m.tag===1){B=Ni(-1,o&-o),B.tag=2;var ne=m.updateQueue;if(ne!==null){ne=ne.shared;var ve=ne.pending;ve===null?B.next=B:(B.next=ve.next,ve.next=B),ne.pending=B}}m.lanes|=o,B=m.alternate,B!==null&&(B.lanes|=o),Ac(m.return,o,i),U.lanes|=o;break}B=B.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(n(341));M.lanes|=o,U=M.alternate,U!==null&&(U.lanes|=o),Ac(M,o,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}En(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,xs(i,o),d=Zn(d),l=l(d),i.flags|=1,En(t,i,l,o),i.child;case 14:return l=i.type,d=si(l,i.pendingProps),d=si(l.type,d),_h(t,i,l,d,o);case 15:return xh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:si(l,d),Oa(t,i),i.tag=1,Ln(l)?(t=!0,xa(i)):t=!1,xs(i,o),uh(i,l,d),Gc(i,l,d,o),jc(null,i,l,!0,t,o);case 19:return bh(t,i,o);case 22:return yh(t,i,o)}throw Error(n(156,i.tag))};function Zh(t,i){return ie(t,i)}function y_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,i,o,l){return new y_(t,i,o,l)}function fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function S_(t){if(typeof t=="function")return fu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===le)return 11;if(t===Q)return 14}return 2}function dr(t,i){var o=t.alternate;return o===null?(o=ei(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function qa(t,i,o,l,d,m){var M=2;if(l=t,typeof t=="function")fu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case O:return Hr(o.children,d,m,i);case de:M=8,d|=8;break;case Me:return t=ei(12,o,i,d|2),t.elementType=Me,t.lanes=m,t;case fe:return t=ei(13,o,i,d),t.elementType=fe,t.lanes=m,t;case z:return t=ei(19,o,i,d),t.elementType=z,t.lanes=m,t;case oe:return $a(o,d,m,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:M=10;break e;case I:M=9;break e;case le:M=11;break e;case Q:M=14;break e;case j:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ei(M,o,i,d),i.elementType=t,i.type=l,i.lanes=m,i}function Hr(t,i,o,l){return t=ei(7,t,l,i),t.lanes=o,t}function $a(t,i,o,l){return t=ei(22,t,l,i),t.elementType=oe,t.lanes=o,t.stateNode={isHidden:!1},t}function hu(t,i,o){return t=ei(6,t,null,i),t.lanes=o,t}function pu(t,i,o){return i=ei(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function M_(t,i,o,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=is(0),this.expirationTimes=is(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=is(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function mu(t,i,o,l,d,m,M,U,B){return t=new M_(t,i,o,U,B),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ei(3,null,null,i),t.current=m,m.stateNode=t,m.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rc(m),t}function E_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Qh(t){if(!t)return nr;t=t._reactInternals;e:{if(Ai(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Ln(o))return Af(t,o,i)}return i}function Jh(t,i,o,l,d,m,M,U,B){return t=mu(o,l,!0,t,d,m,M,U,B),t.context=Qh(null),o=t.current,l=wn(),d=cr(o),m=Ni(l,d),m.callback=i??null,sr(o,m,d),t.current.lanes=d,so(t,d,l),In(t,l),t}function Ka(t,i,o,l){var d=i.current,m=wn(),M=cr(d);return o=Qh(o),i.context===null?i.context=o:i.pendingContext=o,i=Ni(m,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=sr(d,i,M),t!==null&&(li(t,d,M,m),ba(t,d,M)),M}function Za(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ep(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function gu(t,i){ep(t,i),(t=t.alternate)&&ep(t,i)}function w_(){return null}var tp=typeof reportError=="function"?reportError:function(t){console.error(t)};function vu(t){this._internalRoot=t}Qa.prototype.render=vu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ka(t,i,null,null)},Qa.prototype.unmount=vu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;kr(function(){Ka(null,t,null,null)}),i[Ri]=null}};function Qa(t){this._internalRoot=t}Qa.prototype.unstable_scheduleHydration=function(t){if(t){var i=Od();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Zi.length&&i!==0&&i<Zi[o].priority;o++);Zi.splice(o,0,t),o===0&&Bd(t)}};function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ja(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function np(){}function T_(t,i,o,l,d){if(d){if(typeof l=="function"){var m=l;l=function(){var ne=Za(M);m.call(ne)}}var M=Jh(i,l,t,0,null,!1,!1,"",np);return t._reactRootContainer=M,t[Ri]=M.current,yo(t.nodeType===8?t.parentNode:t),kr(),M}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var U=l;l=function(){var ne=Za(B);U.call(ne)}}var B=mu(t,0,!1,null,null,!1,!1,"",np);return t._reactRootContainer=B,t[Ri]=B.current,yo(t.nodeType===8?t.parentNode:t),kr(function(){Ka(i,B,o,l)}),B}function el(t,i,o,l,d){var m=o._reactRootContainer;if(m){var M=m;if(typeof d=="function"){var U=d;d=function(){var B=Za(M);U.call(B)}}Ka(i,M,t,d)}else M=T_(o,i,t,d,l);return Za(M)}Ud=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Yt(i.pendingLanes);o!==0&&(Gl(i,o|1),In(i,Fe()),!(Ct&6)&&(ws=Fe()+500,ir()))}break;case 13:kr(function(){var l=Di(t,1);if(l!==null){var d=wn();li(l,t,1,d)}}),gu(t,1)}},Vl=function(t){if(t.tag===13){var i=Di(t,134217728);if(i!==null){var o=wn();li(i,t,134217728,o)}gu(t,134217728)}},Fd=function(t){if(t.tag===13){var i=cr(t),o=Di(t,i);if(o!==null){var l=wn();li(o,t,i,l)}gu(t,i)}},Od=function(){return Nt},kd=function(t,i){var o=Nt;try{return Nt=t,i()}finally{Nt=o}},Rt=function(t,i,o){switch(i){case"input":if(xt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var d=va(l);if(!d)throw Error(n(90));q(l),xt(l,d)}}}break;case"textarea":Se(t,o);break;case"select":i=o.value,i!=null&&te(t,!!o.multiple,i,!1)}},at=cu,wt=kr;var A_={usingClientEntryPoint:!1,Events:[Eo,ds,va,be,Pe,cu]},Oo={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b_={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=se(t),t===null?null:t.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||w_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Rn=tl.inject(b_),Tt=tl}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A_,Un.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_u(i))throw Error(n(200));return E_(t,i,null,o)},Un.createRoot=function(t,i){if(!_u(t))throw Error(n(299));var o=!1,l="",d=tp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=mu(t,1,!1,null,null,o,!1,l,d),t[Ri]=i.current,yo(t.nodeType===8?t.parentNode:t),new vu(i)},Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=se(i),t=t===null?null:t.stateNode,t},Un.flushSync=function(t){return kr(t)},Un.hydrate=function(t,i,o){if(!Ja(i))throw Error(n(200));return el(null,t,i,!0,o)},Un.hydrateRoot=function(t,i,o){if(!_u(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,d=!1,m="",M=tp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Jh(i,null,t,1,o??null,d,!1,m,M),t[Ri]=i.current,yo(t),l)for(t=0;t<l.length;t++)o=l[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Qa(i)},Un.render=function(t,i,o){if(!Ja(i))throw Error(n(200));return el(null,t,i,!1,o)},Un.unmountComponentAtNode=function(t){if(!Ja(t))throw Error(n(40));return t._reactRootContainer?(kr(function(){el(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1},Un.unstable_batchedUpdates=cu,Un.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Ja(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return el(t,i,o,!1,l)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var up;function Jm(){if(up)return Su.exports;up=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Su.exports=I_(),Su.exports}var dp;function U_(){if(dp)return nl;dp=1;var r=Jm();return nl.createRoot=r.createRoot,nl.hydrateRoot=r.hydrateRoot,nl}var F_=U_();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wd="161",O_=0,fp=1,k_=2,eg=1,z_=2,Hi=3,wr=0,zn=1,Gi=2,Sr=0,js=1,hp=2,pp=3,mp=4,B_=5,Kr=100,H_=101,G_=102,gp=103,vp=104,V_=200,W_=201,X_=202,j_=203,ld=204,cd=205,Y_=206,q_=207,$_=208,K_=209,Z_=210,Q_=211,J_=212,e0=213,t0=214,n0=0,i0=1,r0=2,Cl=3,s0=4,o0=5,a0=6,l0=7,tg=0,c0=1,u0=2,Mr=0,d0=1,f0=2,h0=3,p0=4,m0=5,g0=6,ng=300,$s=301,Ks=302,ud=303,dd=304,Ul=306,fd=1e3,fi=1001,hd=1002,An=1003,_p=1004,zo=1005,kn=1006,wu=1007,Qr=1008,Er=1009,v0=1010,_0=1011,Td=1012,ig=1013,yr=1014,Vi=1015,jo=1016,rg=1017,sg=1018,Jr=1020,x0=1021,hi=1023,y0=1024,S0=1025,es=1026,Zs=1027,M0=1028,og=1029,E0=1030,ag=1031,lg=1033,Tu=33776,Au=33777,bu=33778,Ru=33779,xp=35840,yp=35841,Sp=35842,Mp=35843,cg=36196,Ep=37492,wp=37496,Tp=37808,Ap=37809,bp=37810,Rp=37811,Cp=37812,Pp=37813,Lp=37814,Dp=37815,Np=37816,Ip=37817,Up=37818,Fp=37819,Op=37820,kp=37821,Cu=36492,zp=36494,Bp=36495,w0=36283,Hp=36284,Gp=36285,Vp=36286,ug=3e3,ts=3001,T0=3200,A0=3201,dg=0,b0=1,ni="",fn="srgb",Xi="srgb-linear",Ad="display-p3",Fl="display-p3-linear",Pl="linear",Ht="srgb",Ll="rec709",Dl="p3",As=7680,Wp=519,R0=512,C0=513,P0=514,fg=515,L0=516,D0=517,N0=518,I0=519,Xp=35044,jp="300 es",pd=1035,Wi=2e3,Nl=2001;class Js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let c=0,f=a.length;c<f;c++)a[c].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pu=Math.PI/180,md=180/Math.PI;function Yo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[n&63|128]+vn[n>>8&255]+"-"+vn[n>>16&255]+vn[n>>24&255]+vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]).toLowerCase()}function bn(r,e,n){return Math.max(e,Math.min(n,r))}function U0(r,e){return(r%e+e)%e}function Lu(r,e,n){return(1-n)*r+n*e}function Yp(r){return(r&r-1)===0&&r!==0}function gd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Bo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,n=0){Et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,a=e.elements;return this.x=a[0]*n+a[3]*s+a[6],this.y=a[1]*n+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(bn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),a=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*a+e.x,this.y=c*a+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,n,s,a,c,f,u,h,g){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,s,a,c,f,u,h,g)}set(e,n,s,a,c,f,u,h,g){const v=this.elements;return v[0]=e,v[1]=a,v[2]=u,v[3]=n,v[4]=c,v[5]=h,v[6]=s,v[7]=f,v[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,c=this.elements,f=s[0],u=s[3],h=s[6],g=s[1],v=s[4],p=s[7],y=s[2],S=s[5],w=s[8],A=a[0],x=a[3],_=a[6],D=a[1],R=a[4],L=a[7],W=a[2],F=a[5],O=a[8];return c[0]=f*A+u*D+h*W,c[3]=f*x+u*R+h*F,c[6]=f*_+u*L+h*O,c[1]=g*A+v*D+p*W,c[4]=g*x+v*R+p*F,c[7]=g*_+v*L+p*O,c[2]=y*A+S*D+w*W,c[5]=y*x+S*R+w*F,c[8]=y*_+S*L+w*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],a=e[2],c=e[3],f=e[4],u=e[5],h=e[6],g=e[7],v=e[8];return n*f*v-n*u*g-s*c*v+s*u*h+a*c*g-a*f*h}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],c=e[3],f=e[4],u=e[5],h=e[6],g=e[7],v=e[8],p=v*f-u*g,y=u*h-v*c,S=g*c-f*h,w=n*p+s*y+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=p*A,e[1]=(a*g-v*s)*A,e[2]=(u*s-a*f)*A,e[3]=y*A,e[4]=(v*n-a*h)*A,e[5]=(a*c-u*n)*A,e[6]=S*A,e[7]=(s*h-g*n)*A,e[8]=(f*n-s*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,a,c,f,u){const h=Math.cos(c),g=Math.sin(c);return this.set(s*h,s*g,-s*(h*f+g*u)+f+e,-a*g,a*h,-a*(-g*f+h*u)+u+n,0,0,1),this}scale(e,n){return this.premultiply(Du.makeScale(e,n)),this}rotate(e){return this.premultiply(Du.makeRotation(-e)),this}translate(e,n){return this.premultiply(Du.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<9;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Du=new gt;function hg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Il(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function F0(){const r=Il("canvas");return r.style.display="block",r}const qp={};function Ys(r){r in qp||(qp[r]=!0,console.warn(r))}const $p=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kp=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),il={[Xi]:{transfer:Pl,primaries:Ll,toReference:r=>r,fromReference:r=>r},[fn]:{transfer:Ht,primaries:Ll,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Fl]:{transfer:Pl,primaries:Dl,toReference:r=>r.applyMatrix3(Kp),fromReference:r=>r.applyMatrix3($p)},[Ad]:{transfer:Ht,primaries:Dl,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Kp),fromReference:r=>r.applyMatrix3($p).convertLinearToSRGB()}},O0=new Set([Xi,Fl]),Ft={enabled:!0,_workingColorSpace:Xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!O0.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,n){if(this.enabled===!1||e===n||!e||!n)return r;const s=il[e].toReference,a=il[n].fromReference;return a(s(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return il[r].primaries},getTransfer:function(r){return r===ni?Pl:il[r].transfer}};function qs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Nu(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let bs;class pg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bs===void 0&&(bs=Il("canvas")),bs.width=e.width,bs.height=e.height;const s=bs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=bs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Il("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),c=a.data;for(let f=0;f<c.length;f++)c[f]=qs(c[f]/255)*255;return s.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(qs(n[s]/255)*255):n[s]=qs(n[s]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let k0=0;class mg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Yo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let f=0,u=a.length;f<u;f++)a[f].isDataTexture?c.push(Iu(a[f].image)):c.push(Iu(a[f]))}else c=Iu(a);s.url=c}return n||(e.images[this.uuid]=s),s}}function Iu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let z0=0;class Bn extends Js{constructor(e=Bn.DEFAULT_IMAGE,n=Bn.DEFAULT_MAPPING,s=fi,a=fi,c=kn,f=Qr,u=hi,h=Er,g=Bn.DEFAULT_ANISOTROPY,v=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Yo(),this.name="",this.source=new mg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=c,this.minFilter=f,this.anisotropy=g,this.format=u,this.internalFormat=null,this.type=h,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof v=="string"?this.colorSpace=v:(Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=v===ts?fn:ni),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fd:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fd:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===fn?ts:ug}set encoding(e){Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ts?fn:ni}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=ng;Bn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,s=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,a){return this.x=e,this.y=n,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*s+f[8]*a+f[12]*c,this.y=f[1]*n+f[5]*s+f[9]*a+f[13]*c,this.z=f[2]*n+f[6]*s+f[10]*a+f[14]*c,this.w=f[3]*n+f[7]*s+f[11]*a+f[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,a,c;const h=e.elements,g=h[0],v=h[4],p=h[8],y=h[1],S=h[5],w=h[9],A=h[2],x=h[6],_=h[10];if(Math.abs(v-y)<.01&&Math.abs(p-A)<.01&&Math.abs(w-x)<.01){if(Math.abs(v+y)<.1&&Math.abs(p+A)<.1&&Math.abs(w+x)<.1&&Math.abs(g+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(g+1)/2,L=(S+1)/2,W=(_+1)/2,F=(v+y)/4,O=(p+A)/4,de=(w+x)/4;return R>L&&R>W?R<.01?(s=0,a=.707106781,c=.707106781):(s=Math.sqrt(R),a=F/s,c=O/s):L>W?L<.01?(s=.707106781,a=0,c=.707106781):(a=Math.sqrt(L),s=F/a,c=de/a):W<.01?(s=.707106781,a=.707106781,c=0):(c=Math.sqrt(W),s=O/c,a=de/c),this.set(s,a,c,n),this}let D=Math.sqrt((x-w)*(x-w)+(p-A)*(p-A)+(y-v)*(y-v));return Math.abs(D)<.001&&(D=1),this.x=(x-w)/D,this.y=(p-A)/D,this.z=(y-v)/D,this.w=Math.acos((g+S+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class B0 extends Js{constructor(e=1,n=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const a={width:e,height:n,depth:1};s.encoding!==void 0&&(Ys("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===ts?fn:ni),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new Bn(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,n,s=1){(this.width!==e||this.height!==n||this.depth!==s)&&(this.width=e,this.height=n,this.depth=s,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new mg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends B0{constructor(e=1,n=1,s={}){super(e,n,s),this.isWebGLRenderTarget=!0}}class gg extends Bn{constructor(e=null,n=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class H0 extends Bn{constructor(e=null,n=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(e=0,n=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=a}static slerpFlat(e,n,s,a,c,f,u){let h=s[a+0],g=s[a+1],v=s[a+2],p=s[a+3];const y=c[f+0],S=c[f+1],w=c[f+2],A=c[f+3];if(u===0){e[n+0]=h,e[n+1]=g,e[n+2]=v,e[n+3]=p;return}if(u===1){e[n+0]=y,e[n+1]=S,e[n+2]=w,e[n+3]=A;return}if(p!==A||h!==y||g!==S||v!==w){let x=1-u;const _=h*y+g*S+v*w+p*A,D=_>=0?1:-1,R=1-_*_;if(R>Number.EPSILON){const W=Math.sqrt(R),F=Math.atan2(W,_*D);x=Math.sin(x*F)/W,u=Math.sin(u*F)/W}const L=u*D;if(h=h*x+y*L,g=g*x+S*L,v=v*x+w*L,p=p*x+A*L,x===1-u){const W=1/Math.sqrt(h*h+g*g+v*v+p*p);h*=W,g*=W,v*=W,p*=W}}e[n]=h,e[n+1]=g,e[n+2]=v,e[n+3]=p}static multiplyQuaternionsFlat(e,n,s,a,c,f){const u=s[a],h=s[a+1],g=s[a+2],v=s[a+3],p=c[f],y=c[f+1],S=c[f+2],w=c[f+3];return e[n]=u*w+v*p+h*S-g*y,e[n+1]=h*w+v*y+g*p-u*S,e[n+2]=g*w+v*S+u*y-h*p,e[n+3]=v*w-u*p-h*y-g*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,a){return this._x=e,this._y=n,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const s=e._x,a=e._y,c=e._z,f=e._order,u=Math.cos,h=Math.sin,g=u(s/2),v=u(a/2),p=u(c/2),y=h(s/2),S=h(a/2),w=h(c/2);switch(f){case"XYZ":this._x=y*v*p+g*S*w,this._y=g*S*p-y*v*w,this._z=g*v*w+y*S*p,this._w=g*v*p-y*S*w;break;case"YXZ":this._x=y*v*p+g*S*w,this._y=g*S*p-y*v*w,this._z=g*v*w-y*S*p,this._w=g*v*p+y*S*w;break;case"ZXY":this._x=y*v*p-g*S*w,this._y=g*S*p+y*v*w,this._z=g*v*w+y*S*p,this._w=g*v*p-y*S*w;break;case"ZYX":this._x=y*v*p-g*S*w,this._y=g*S*p+y*v*w,this._z=g*v*w-y*S*p,this._w=g*v*p+y*S*w;break;case"YZX":this._x=y*v*p+g*S*w,this._y=g*S*p+y*v*w,this._z=g*v*w-y*S*p,this._w=g*v*p-y*S*w;break;case"XZY":this._x=y*v*p-g*S*w,this._y=g*S*p-y*v*w,this._z=g*v*w+y*S*p,this._w=g*v*p+y*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],a=n[4],c=n[8],f=n[1],u=n[5],h=n[9],g=n[2],v=n[6],p=n[10],y=s+u+p;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(v-h)*S,this._y=(c-g)*S,this._z=(f-a)*S}else if(s>u&&s>p){const S=2*Math.sqrt(1+s-u-p);this._w=(v-h)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(c+g)/S}else if(u>p){const S=2*Math.sqrt(1+u-s-p);this._w=(c-g)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(h+v)/S}else{const S=2*Math.sqrt(1+p-s-u);this._w=(f-a)/S,this._x=(c+g)/S,this._y=(h+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,n/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,a=e._y,c=e._z,f=e._w,u=n._x,h=n._y,g=n._z,v=n._w;return this._x=s*v+f*u+a*g-c*h,this._y=a*v+f*h+c*u-s*g,this._z=c*v+f*g+s*h-a*u,this._w=f*v-s*u-a*h-c*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const s=this._x,a=this._y,c=this._z,f=this._w;let u=f*e._w+s*e._x+a*e._y+c*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=f,this._x=s,this._y=a,this._z=c,this;const h=1-u*u;if(h<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*s+n*this._x,this._y=S*a+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const g=Math.sqrt(h),v=Math.atan2(g,u),p=Math.sin((1-n)*v)/g,y=Math.sin(n*v)/g;return this._w=f*p+this._w*y,this._x=s*p+this._x*y,this._y=a*p+this._y*y,this._z=c*p+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=Math.random(),n=Math.sqrt(1-e),s=Math.sqrt(e),a=2*Math.PI*Math.random(),c=2*Math.PI*Math.random();return this.set(n*Math.cos(a),s*Math.sin(c),s*Math.cos(c),n*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,s=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Zp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Zp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*s+c[6]*a,this.y=c[1]*n+c[4]*s+c[7]*a,this.z=c[2]*n+c[5]*s+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,c=e.elements,f=1/(c[3]*n+c[7]*s+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*a+c[12])*f,this.y=(c[1]*n+c[5]*s+c[9]*a+c[13])*f,this.z=(c[2]*n+c[6]*s+c[10]*a+c[14])*f,this}applyQuaternion(e){const n=this.x,s=this.y,a=this.z,c=e.x,f=e.y,u=e.z,h=e.w,g=2*(f*a-u*s),v=2*(u*n-c*a),p=2*(c*s-f*n);return this.x=n+h*g+f*p-u*v,this.y=s+h*v+u*g-c*p,this.z=a+h*p+c*v-f*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*s+c[8]*a,this.y=c[1]*n+c[5]*s+c[9]*a,this.z=c[2]*n+c[6]*s+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,a=e.y,c=e.z,f=n.x,u=n.y,h=n.z;return this.x=a*h-c*u,this.y=c*f-s*h,this.z=s*u-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Uu.copy(this).projectOnVector(e),this.sub(Uu)}reflect(e){return this.sub(Uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(bn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return n*n+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const a=Math.sin(n)*e;return this.x=a*Math.sin(s),this.y=Math.cos(n)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(n),this.y=s*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uu=new J,Zp=new qo;class $o{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n+=3)this.expandByPoint(ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,s=e.count;n<s;n++)this.expandByPoint(ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,u=c.count;f<u;f++)e.isMesh===!0?e.getVertexPosition(f,ci):ci.fromBufferAttribute(c,f),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),rl.copy(s.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const a=e.children;for(let c=0,f=a.length;c<f;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),sl.subVectors(this.max,Ho),Rs.subVectors(e.a,Ho),Cs.subVectors(e.b,Ho),Ps.subVectors(e.c,Ho),hr.subVectors(Cs,Rs),pr.subVectors(Ps,Cs),Gr.subVectors(Rs,Ps);let n=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-Gr.z,Gr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,Gr.z,0,-Gr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-Gr.y,Gr.x,0];return!Fu(n,Rs,Cs,Ps,sl)||(n=[1,0,0,0,1,0,0,0,1],!Fu(n,Rs,Cs,Ps,sl))?!1:(ol.crossVectors(hr,pr),n=[ol.x,ol.y,ol.z],Fu(n,Rs,Cs,Ps,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new J,new J,new J,new J,new J,new J,new J,new J],ci=new J,rl=new $o,Rs=new J,Cs=new J,Ps=new J,hr=new J,pr=new J,Gr=new J,Ho=new J,sl=new J,ol=new J,Vr=new J;function Fu(r,e,n,s,a){for(let c=0,f=r.length-3;c<=f;c+=3){Vr.fromArray(r,c);const u=a.x*Math.abs(Vr.x)+a.y*Math.abs(Vr.y)+a.z*Math.abs(Vr.z),h=e.dot(Vr),g=n.dot(Vr),v=s.dot(Vr);if(Math.max(-Math.max(h,g,v),Math.min(h,g,v))>u)return!1}return!0}const G0=new $o,Go=new J,Ou=new J;class bd{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):G0.setFromPoints(e).getCenter(s);let a=0;for(let c=0,f=e.length;c<f;c++)a=Math.max(a,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const n=Go.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),a=(s-this.radius)*.5;this.center.addScaledVector(Go,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Ou)),this.expandByPoint(Go.copy(e.center).sub(Ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new J,ku=new J,al=new J,mr=new J,zu=new J,ll=new J,Bu=new J;class V0{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,n),Oi.distanceToSquared(e))}distanceSqToSegment(e,n,s,a){ku.copy(e).add(n).multiplyScalar(.5),al.copy(n).sub(e).normalize(),mr.copy(this.origin).sub(ku);const c=e.distanceTo(n)*.5,f=-this.direction.dot(al),u=mr.dot(this.direction),h=-mr.dot(al),g=mr.lengthSq(),v=Math.abs(1-f*f);let p,y,S,w;if(v>0)if(p=f*h-u,y=f*u-h,w=c*v,p>=0)if(y>=-w)if(y<=w){const A=1/v;p*=A,y*=A,S=p*(p+f*y+2*u)+y*(f*p+y+2*h)+g}else y=c,p=Math.max(0,-(f*y+u)),S=-p*p+y*(y+2*h)+g;else y=-c,p=Math.max(0,-(f*y+u)),S=-p*p+y*(y+2*h)+g;else y<=-w?(p=Math.max(0,-(-f*c+u)),y=p>0?-c:Math.min(Math.max(-c,-h),c),S=-p*p+y*(y+2*h)+g):y<=w?(p=0,y=Math.min(Math.max(-c,-h),c),S=y*(y+2*h)+g):(p=Math.max(0,-(f*c+u)),y=p>0?c:Math.min(Math.max(-c,-h),c),S=-p*p+y*(y+2*h)+g);else y=f>0?-c:c,p=Math.max(0,-(f*y+u)),S=-p*p+y*(y+2*h)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(ku).addScaledVector(al,y),S}intersectSphere(e,n){Oi.subVectors(e.center,this.origin);const s=Oi.dot(this.direction),a=Oi.dot(Oi)-s*s,c=e.radius*e.radius;if(a>c)return null;const f=Math.sqrt(c-a),u=s-f,h=s+f;return h<0?null:u<0?this.at(h,n):this.at(u,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,a,c,f,u,h;const g=1/this.direction.x,v=1/this.direction.y,p=1/this.direction.z,y=this.origin;return g>=0?(s=(e.min.x-y.x)*g,a=(e.max.x-y.x)*g):(s=(e.max.x-y.x)*g,a=(e.min.x-y.x)*g),v>=0?(c=(e.min.y-y.y)*v,f=(e.max.y-y.y)*v):(c=(e.max.y-y.y)*v,f=(e.min.y-y.y)*v),s>f||c>a||((c>s||isNaN(s))&&(s=c),(f<a||isNaN(a))&&(a=f),p>=0?(u=(e.min.z-y.z)*p,h=(e.max.z-y.z)*p):(u=(e.max.z-y.z)*p,h=(e.min.z-y.z)*p),s>h||u>a)||((u>s||s!==s)&&(s=u),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,n)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,n,s,a,c){zu.subVectors(n,e),ll.subVectors(s,e),Bu.crossVectors(zu,ll);let f=this.direction.dot(Bu),u;if(f>0){if(a)return null;u=1}else if(f<0)u=-1,f=-f;else return null;mr.subVectors(this.origin,e);const h=u*this.direction.dot(ll.crossVectors(mr,ll));if(h<0)return null;const g=u*this.direction.dot(zu.cross(mr));if(g<0||h+g>f)return null;const v=-u*mr.dot(Bu);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,n,s,a,c,f,u,h,g,v,p,y,S,w,A,x){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,s,a,c,f,u,h,g,v,p,y,S,w,A,x)}set(e,n,s,a,c,f,u,h,g,v,p,y,S,w,A,x){const _=this.elements;return _[0]=e,_[4]=n,_[8]=s,_[12]=a,_[1]=c,_[5]=f,_[9]=u,_[13]=h,_[2]=g,_[6]=v,_[10]=p,_[14]=y,_[3]=S,_[7]=w,_[11]=A,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,s=e.elements,a=1/Ls.setFromMatrixColumn(e,0).length(),c=1/Ls.setFromMatrixColumn(e,1).length(),f=1/Ls.setFromMatrixColumn(e,2).length();return n[0]=s[0]*a,n[1]=s[1]*a,n[2]=s[2]*a,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*f,n[9]=s[9]*f,n[10]=s[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,a=e.y,c=e.z,f=Math.cos(s),u=Math.sin(s),h=Math.cos(a),g=Math.sin(a),v=Math.cos(c),p=Math.sin(c);if(e.order==="XYZ"){const y=f*v,S=f*p,w=u*v,A=u*p;n[0]=h*v,n[4]=-h*p,n[8]=g,n[1]=S+w*g,n[5]=y-A*g,n[9]=-u*h,n[2]=A-y*g,n[6]=w+S*g,n[10]=f*h}else if(e.order==="YXZ"){const y=h*v,S=h*p,w=g*v,A=g*p;n[0]=y+A*u,n[4]=w*u-S,n[8]=f*g,n[1]=f*p,n[5]=f*v,n[9]=-u,n[2]=S*u-w,n[6]=A+y*u,n[10]=f*h}else if(e.order==="ZXY"){const y=h*v,S=h*p,w=g*v,A=g*p;n[0]=y-A*u,n[4]=-f*p,n[8]=w+S*u,n[1]=S+w*u,n[5]=f*v,n[9]=A-y*u,n[2]=-f*g,n[6]=u,n[10]=f*h}else if(e.order==="ZYX"){const y=f*v,S=f*p,w=u*v,A=u*p;n[0]=h*v,n[4]=w*g-S,n[8]=y*g+A,n[1]=h*p,n[5]=A*g+y,n[9]=S*g-w,n[2]=-g,n[6]=u*h,n[10]=f*h}else if(e.order==="YZX"){const y=f*h,S=f*g,w=u*h,A=u*g;n[0]=h*v,n[4]=A-y*p,n[8]=w*p+S,n[1]=p,n[5]=f*v,n[9]=-u*v,n[2]=-g*v,n[6]=S*p+w,n[10]=y-A*p}else if(e.order==="XZY"){const y=f*h,S=f*g,w=u*h,A=u*g;n[0]=h*v,n[4]=-p,n[8]=g*v,n[1]=y*p+A,n[5]=f*v,n[9]=S*p-w,n[2]=w*p-S,n[6]=u*v,n[10]=A*p+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W0,e,X0)}lookAt(e,n,s){const a=this.elements;return Xn.subVectors(e,n),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),gr.crossVectors(s,Xn),gr.lengthSq()===0&&(Math.abs(s.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),gr.crossVectors(s,Xn)),gr.normalize(),cl.crossVectors(Xn,gr),a[0]=gr.x,a[4]=cl.x,a[8]=Xn.x,a[1]=gr.y,a[5]=cl.y,a[9]=Xn.y,a[2]=gr.z,a[6]=cl.z,a[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,c=this.elements,f=s[0],u=s[4],h=s[8],g=s[12],v=s[1],p=s[5],y=s[9],S=s[13],w=s[2],A=s[6],x=s[10],_=s[14],D=s[3],R=s[7],L=s[11],W=s[15],F=a[0],O=a[4],de=a[8],Me=a[12],E=a[1],I=a[5],le=a[9],fe=a[13],z=a[2],Q=a[6],j=a[10],oe=a[14],k=a[3],$=a[7],X=a[11],b=a[15];return c[0]=f*F+u*E+h*z+g*k,c[4]=f*O+u*I+h*Q+g*$,c[8]=f*de+u*le+h*j+g*X,c[12]=f*Me+u*fe+h*oe+g*b,c[1]=v*F+p*E+y*z+S*k,c[5]=v*O+p*I+y*Q+S*$,c[9]=v*de+p*le+y*j+S*X,c[13]=v*Me+p*fe+y*oe+S*b,c[2]=w*F+A*E+x*z+_*k,c[6]=w*O+A*I+x*Q+_*$,c[10]=w*de+A*le+x*j+_*X,c[14]=w*Me+A*fe+x*oe+_*b,c[3]=D*F+R*E+L*z+W*k,c[7]=D*O+R*I+L*Q+W*$,c[11]=D*de+R*le+L*j+W*X,c[15]=D*Me+R*fe+L*oe+W*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],a=e[8],c=e[12],f=e[1],u=e[5],h=e[9],g=e[13],v=e[2],p=e[6],y=e[10],S=e[14],w=e[3],A=e[7],x=e[11],_=e[15];return w*(+c*h*p-a*g*p-c*u*y+s*g*y+a*u*S-s*h*S)+A*(+n*h*S-n*g*y+c*f*y-a*f*S+a*g*v-c*h*v)+x*(+n*g*p-n*u*S-c*f*p+s*f*S+c*u*v-s*g*v)+_*(-a*u*v-n*h*p+n*u*y+a*f*p-s*f*y+s*h*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],c=e[3],f=e[4],u=e[5],h=e[6],g=e[7],v=e[8],p=e[9],y=e[10],S=e[11],w=e[12],A=e[13],x=e[14],_=e[15],D=p*x*g-A*y*g+A*h*S-u*x*S-p*h*_+u*y*_,R=w*y*g-v*x*g-w*h*S+f*x*S+v*h*_-f*y*_,L=v*A*g-w*p*g+w*u*S-f*A*S-v*u*_+f*p*_,W=w*p*h-v*A*h-w*u*y+f*A*y+v*u*x-f*p*x,F=n*D+s*R+a*L+c*W;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=D*O,e[1]=(A*y*c-p*x*c-A*a*S+s*x*S+p*a*_-s*y*_)*O,e[2]=(u*x*c-A*h*c+A*a*g-s*x*g-u*a*_+s*h*_)*O,e[3]=(p*h*c-u*y*c-p*a*g+s*y*g+u*a*S-s*h*S)*O,e[4]=R*O,e[5]=(v*x*c-w*y*c+w*a*S-n*x*S-v*a*_+n*y*_)*O,e[6]=(w*h*c-f*x*c-w*a*g+n*x*g+f*a*_-n*h*_)*O,e[7]=(f*y*c-v*h*c+v*a*g-n*y*g-f*a*S+n*h*S)*O,e[8]=L*O,e[9]=(w*p*c-v*A*c-w*s*S+n*A*S+v*s*_-n*p*_)*O,e[10]=(f*A*c-w*u*c+w*s*g-n*A*g-f*s*_+n*u*_)*O,e[11]=(v*u*c-f*p*c-v*s*g+n*p*g+f*s*S-n*u*S)*O,e[12]=W*O,e[13]=(v*A*a-w*p*a+w*s*y-n*A*y-v*s*x+n*p*x)*O,e[14]=(w*u*a-f*A*a-w*s*h+n*A*h+f*s*x-n*u*x)*O,e[15]=(f*p*a-v*u*a+v*s*h-n*p*h-f*s*y+n*u*y)*O,this}scale(e){const n=this.elements,s=e.x,a=e.y,c=e.z;return n[0]*=s,n[4]*=a,n[8]*=c,n[1]*=s,n[5]*=a,n[9]*=c,n[2]*=s,n[6]*=a,n[10]*=c,n[3]*=s,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,a))}makeTranslation(e,n,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),a=Math.sin(n),c=1-s,f=e.x,u=e.y,h=e.z,g=c*f,v=c*u;return this.set(g*f+s,g*u-a*h,g*h+a*u,0,g*u+a*h,v*u+s,v*h-a*f,0,g*h-a*u,v*h+a*f,c*h*h+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,a,c,f){return this.set(1,s,c,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,s){const a=this.elements,c=n._x,f=n._y,u=n._z,h=n._w,g=c+c,v=f+f,p=u+u,y=c*g,S=c*v,w=c*p,A=f*v,x=f*p,_=u*p,D=h*g,R=h*v,L=h*p,W=s.x,F=s.y,O=s.z;return a[0]=(1-(A+_))*W,a[1]=(S+L)*W,a[2]=(w-R)*W,a[3]=0,a[4]=(S-L)*F,a[5]=(1-(y+_))*F,a[6]=(x+D)*F,a[7]=0,a[8]=(w+R)*O,a[9]=(x-D)*O,a[10]=(1-(y+A))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,s){const a=this.elements;let c=Ls.set(a[0],a[1],a[2]).length();const f=Ls.set(a[4],a[5],a[6]).length(),u=Ls.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],ui.copy(this);const g=1/c,v=1/f,p=1/u;return ui.elements[0]*=g,ui.elements[1]*=g,ui.elements[2]*=g,ui.elements[4]*=v,ui.elements[5]*=v,ui.elements[6]*=v,ui.elements[8]*=p,ui.elements[9]*=p,ui.elements[10]*=p,n.setFromRotationMatrix(ui),s.x=c,s.y=f,s.z=u,this}makePerspective(e,n,s,a,c,f,u=Wi){const h=this.elements,g=2*c/(n-e),v=2*c/(s-a),p=(n+e)/(n-e),y=(s+a)/(s-a);let S,w;if(u===Wi)S=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(u===Nl)S=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=g,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,s,a,c,f,u=Wi){const h=this.elements,g=1/(n-e),v=1/(s-a),p=1/(f-c),y=(n+e)*g,S=(s+a)*v;let w,A;if(u===Wi)w=(f+c)*p,A=-2*p;else if(u===Nl)w=c*p,A=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*g,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*v,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=A,h[14]=-w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<16;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}}const Ls=new J,ui=new Jt,W0=new J(0,0,0),X0=new J(1,1,1),gr=new J,cl=new J,Xn=new J,Qp=new Jt,Jp=new qo;class Ol{constructor(e=0,n=0,s=0,a=Ol.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,a=this._order){return this._x=e,this._y=n,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const a=e.elements,c=a[0],f=a[4],u=a[8],h=a[1],g=a[5],v=a[9],p=a[2],y=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(bn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,g),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(h,g)):(this._y=Math.atan2(-p,c),this._z=0);break;case"ZXY":this._x=Math.asin(bn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-p,S),this._z=Math.atan2(-f,g)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-bn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-f,g));break;case"YZX":this._z=Math.asin(bn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,g),this._y=Math.atan2(-p,c)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-bn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,g),this._y=Math.atan2(u,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return Qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qp,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jp.setFromEuler(this),this.setFromQuaternion(Jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ol.DEFAULT_ORDER="XYZ";class vg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let j0=0;const em=new J,Ds=new qo,ki=new Jt,ul=new J,Vo=new J,Y0=new J,q0=new qo,tm=new J(1,0,0),nm=new J(0,1,0),im=new J(0,0,1),$0={type:"added"},K0={type:"removed"};class xn extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new J,n=new Ol,s=new qo,a=new J(1,1,1);function c(){s.setFromEuler(n,!1)}function f(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Jt},normalMatrix:{value:new gt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(tm,e)}rotateY(e){return this.rotateOnAxis(nm,e)}rotateZ(e){return this.rotateOnAxis(im,e)}translateOnAxis(e,n){return em.copy(e).applyQuaternion(this.quaternion),this.position.add(em.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(tm,e)}translateY(e){return this.translateOnAxis(nm,e)}translateZ(e){return this.translateOnAxis(im,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?ul.copy(e):ul.set(e,n,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Vo,ul,this.up):ki.lookAt(ul,Vo,this.up),this.quaternion.setFromRotationMatrix(ki),a&&(ki.extractRotation(a.matrixWorld),Ds.setFromRotationMatrix(ki),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(K0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,a=this.children.length;s<a;s++){const f=this.children[s].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,s=[]){this[e]===n&&s.push(this);const a=this.children;for(let c=0,f=a.length;c<f;c++)a[c].getObjectsByProperty(e,n,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,Y0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,q0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,a=n.length;s<a;s++){const c=n[s];(c.matrixWorldAutoUpdate===!0||e===!0)&&c.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const a=this.children;for(let c=0,f=a.length;c<f;c++){const u=a[c];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let g=0,v=h.length;g<v;g++){const p=h[g];c(e.shapes,p)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,g=this.material.length;h<g;h++)u.push(c(e.materials,this.material[h]));a.material=u}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];a.animations.push(c(e.animations,h))}}if(n){const u=f(e.geometries),h=f(e.materials),g=f(e.textures),v=f(e.images),p=f(e.shapes),y=f(e.skeletons),S=f(e.animations),w=f(e.nodes);u.length>0&&(s.geometries=u),h.length>0&&(s.materials=h),g.length>0&&(s.textures=g),v.length>0&&(s.images=v),p.length>0&&(s.shapes=p),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),w.length>0&&(s.nodes=w)}return s.object=a,s;function f(u){const h=[];for(const g in u){const v=u[g];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}xn.DEFAULT_UP=new J(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new J,zi=new J,Hu=new J,Bi=new J,Ns=new J,Is=new J,rm=new J,Gu=new J,Vu=new J,Wu=new J;class Mi{constructor(e=new J,n=new J,s=new J){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,a){a.subVectors(s,n),di.subVectors(e,n),a.cross(di);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,s,a,c){di.subVectors(a,n),zi.subVectors(s,n),Hu.subVectors(e,n);const f=di.dot(di),u=di.dot(zi),h=di.dot(Hu),g=zi.dot(zi),v=zi.dot(Hu),p=f*g-u*u;if(p===0)return c.set(0,0,0),null;const y=1/p,S=(g*h-u*v)*y,w=(f*v-u*h)*y;return c.set(1-S-w,w,S)}static containsPoint(e,n,s,a){return this.getBarycoord(e,n,s,a,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,n,s,a,c,f,u,h){return this.getBarycoord(e,n,s,a,Bi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,Bi.x),h.addScaledVector(f,Bi.y),h.addScaledVector(u,Bi.z),h)}static isFrontFacing(e,n,s,a){return di.subVectors(s,n),zi.subVectors(e,n),di.cross(zi).dot(a)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,a){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,s,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),di.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Mi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,s,a,c){return Mi.getInterpolation(e,this.a,this.b,this.c,n,s,a,c)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,a=this.b,c=this.c;let f,u;Ns.subVectors(a,s),Is.subVectors(c,s),Gu.subVectors(e,s);const h=Ns.dot(Gu),g=Is.dot(Gu);if(h<=0&&g<=0)return n.copy(s);Vu.subVectors(e,a);const v=Ns.dot(Vu),p=Is.dot(Vu);if(v>=0&&p<=v)return n.copy(a);const y=h*p-v*g;if(y<=0&&h>=0&&v<=0)return f=h/(h-v),n.copy(s).addScaledVector(Ns,f);Wu.subVectors(e,c);const S=Ns.dot(Wu),w=Is.dot(Wu);if(w>=0&&S<=w)return n.copy(c);const A=S*g-h*w;if(A<=0&&g>=0&&w<=0)return u=g/(g-w),n.copy(s).addScaledVector(Is,u);const x=v*w-S*p;if(x<=0&&p-v>=0&&S-w>=0)return rm.subVectors(c,a),u=(p-v)/(p-v+(S-w)),n.copy(a).addScaledVector(rm,u);const _=1/(x+A+y);return f=A*_,u=y*_,n.copy(s).addScaledVector(Ns,f).addScaledVector(Is,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Xu(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class St{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,s)}set(e,n,s){if(n===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,n),this}setRGB(e,n,s,a=Ft.workingColorSpace){return this.r=e,this.g=n,this.b=s,Ft.toWorkingColorSpace(this,a),this}setHSL(e,n,s,a=Ft.workingColorSpace){if(e=U0(e,1),n=bn(n,0,1),s=bn(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,f=2*s-c;this.r=Xu(f,c,e+1/3),this.g=Xu(f,c,e),this.b=Xu(f,c,e-1/3)}return Ft.toWorkingColorSpace(this,a),this}setStyle(e,n=fn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=a[1],u=a[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=fn){const s=_g[e.toLowerCase()];return s!==void 0?this.setHex(s,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}copyLinearToSRGB(e){return this.r=Nu(e.r),this.g=Nu(e.g),this.b=Nu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return Ft.fromWorkingColorSpace(_n.copy(this),e),Math.round(bn(_n.r*255,0,255))*65536+Math.round(bn(_n.g*255,0,255))*256+Math.round(bn(_n.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ft.workingColorSpace){Ft.fromWorkingColorSpace(_n.copy(this),n);const s=_n.r,a=_n.g,c=_n.b,f=Math.max(s,a,c),u=Math.min(s,a,c);let h,g;const v=(u+f)/2;if(u===f)h=0,g=0;else{const p=f-u;switch(g=v<=.5?p/(f+u):p/(2-f-u),f){case s:h=(a-c)/p+(a<c?6:0);break;case a:h=(c-s)/p+2;break;case c:h=(s-a)/p+4;break}h/=6}return e.h=h,e.s=g,e.l=v,e}getRGB(e,n=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(_n.copy(this),n),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=fn){Ft.fromWorkingColorSpace(_n.copy(this),e);const n=_n.r,s=_n.g,a=_n.b;return e!==fn?`color(${e} ${n.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,n,s){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+n,vr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(vr),e.getHSL(dl);const s=Lu(vr.h,dl.h,n),a=Lu(vr.s,dl.s,n),c=Lu(vr.l,dl.l,n);return this.setHSL(s,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*s+c[6]*a,this.g=c[1]*n+c[4]*s+c[7]*a,this.b=c[2]*n+c[5]*s+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new St;St.NAMES=_g;let Z0=0;class eo extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=js,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(s.blending=this.blending),this.side!==wr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ld&&(s.blendSrc=this.blendSrc),this.blendDst!==cd&&(s.blendDst=this.blendDst),this.blendEquation!==Kr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Cl&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wp&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(s.stencilFail=this.stencilFail),this.stencilZFail!==As&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(c){const f=[];for(const u in c){const h=c[u];delete h.metadata,f.push(h)}return f}if(n){const c=a(e.textures),f=a(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const a=n.length;s=new Array(a);for(let c=0;c!==a;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xg extends eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new J,fl=new Et;class wi{constructor(e,n,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=Xp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ys("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)fl.fromBufferAttribute(this,n),fl.applyMatrix3(e),this.setXY(n,fl.x,fl.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix3(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let s=this.array[e*this.itemSize+n];return this.normalized&&(s=Bo(s,this.array)),s}setComponent(e,n,s){return this.normalized&&(s=Fn(s,this.array)),this.array[e*this.itemSize+n]=s,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),s=Fn(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,a){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),s=Fn(s,this.array),a=Fn(a,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,n,s,a,c){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),s=Fn(s,this.array),a=Fn(a,this.array),c=Fn(c,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xp&&(e.usage=this.usage),e}}class yg extends wi{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class Sg extends wi{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class Ti extends wi{constructor(e,n,s){super(new Float32Array(e),n,s)}}let Q0=0;const ti=new Jt,ju=new xn,Us=new J,jn=new $o,Wo=new $o,ln=new J;class Ar extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hg(e)?Sg:yg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new gt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,n,s){return ti.makeTranslation(e,n,s),this.applyMatrix4(ti),this}scale(e,n,s){return ti.makeScale(e,n,s),this.applyMatrix4(ti),this}lookAt(e){return ju.lookAt(e),ju.updateMatrix(),this.applyMatrix4(ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const n=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Ti(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const c=n[s];jn.setFromBufferAttribute(c),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new J,1/0);return}if(e){const s=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const u=n[c];Wo.setFromBufferAttribute(u),this.morphTargetsRelative?(ln.addVectors(jn.min,Wo.min),jn.expandByPoint(ln),ln.addVectors(jn.max,Wo.max),jn.expandByPoint(ln)):(jn.expandByPoint(Wo.min),jn.expandByPoint(Wo.max))}jn.getCenter(s);let a=0;for(let c=0,f=e.count;c<f;c++)ln.fromBufferAttribute(e,c),a=Math.max(a,s.distanceToSquared(ln));if(n)for(let c=0,f=n.length;c<f;c++){const u=n[c],h=this.morphTargetsRelative;for(let g=0,v=u.count;g<v;g++)ln.fromBufferAttribute(u,g),h&&(Us.fromBufferAttribute(e,g),ln.add(Us)),a=Math.max(a,s.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,a=n.position.array,c=n.normal.array,f=n.uv.array,u=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*u),4));const h=this.getAttribute("tangent").array,g=[],v=[];for(let E=0;E<u;E++)g[E]=new J,v[E]=new J;const p=new J,y=new J,S=new J,w=new Et,A=new Et,x=new Et,_=new J,D=new J;function R(E,I,le){p.fromArray(a,E*3),y.fromArray(a,I*3),S.fromArray(a,le*3),w.fromArray(f,E*2),A.fromArray(f,I*2),x.fromArray(f,le*2),y.sub(p),S.sub(p),A.sub(w),x.sub(w);const fe=1/(A.x*x.y-x.x*A.y);isFinite(fe)&&(_.copy(y).multiplyScalar(x.y).addScaledVector(S,-A.y).multiplyScalar(fe),D.copy(S).multiplyScalar(A.x).addScaledVector(y,-x.x).multiplyScalar(fe),g[E].add(_),g[I].add(_),g[le].add(_),v[E].add(D),v[I].add(D),v[le].add(D))}let L=this.groups;L.length===0&&(L=[{start:0,count:s.length}]);for(let E=0,I=L.length;E<I;++E){const le=L[E],fe=le.start,z=le.count;for(let Q=fe,j=fe+z;Q<j;Q+=3)R(s[Q+0],s[Q+1],s[Q+2])}const W=new J,F=new J,O=new J,de=new J;function Me(E){O.fromArray(c,E*3),de.copy(O);const I=g[E];W.copy(I),W.sub(O.multiplyScalar(O.dot(I))).normalize(),F.crossVectors(de,I);const fe=F.dot(v[E])<0?-1:1;h[E*4]=W.x,h[E*4+1]=W.y,h[E*4+2]=W.z,h[E*4+3]=fe}for(let E=0,I=L.length;E<I;++E){const le=L[E],fe=le.start,z=le.count;for(let Q=fe,j=fe+z;Q<j;Q+=3)Me(s[Q+0]),Me(s[Q+1]),Me(s[Q+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new wi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const a=new J,c=new J,f=new J,u=new J,h=new J,g=new J,v=new J,p=new J;if(e)for(let y=0,S=e.count;y<S;y+=3){const w=e.getX(y+0),A=e.getX(y+1),x=e.getX(y+2);a.fromBufferAttribute(n,w),c.fromBufferAttribute(n,A),f.fromBufferAttribute(n,x),v.subVectors(f,c),p.subVectors(a,c),v.cross(p),u.fromBufferAttribute(s,w),h.fromBufferAttribute(s,A),g.fromBufferAttribute(s,x),u.add(v),h.add(v),g.add(v),s.setXYZ(w,u.x,u.y,u.z),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(x,g.x,g.y,g.z)}else for(let y=0,S=n.count;y<S;y+=3)a.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),f.fromBufferAttribute(n,y+2),v.subVectors(f,c),p.subVectors(a,c),v.cross(p),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(u,h){const g=u.array,v=u.itemSize,p=u.normalized,y=new g.constructor(h.length*v);let S=0,w=0;for(let A=0,x=h.length;A<x;A++){u.isInterleavedBufferAttribute?S=h[A]*u.data.stride+u.offset:S=h[A]*v;for(let _=0;_<v;_++)y[w++]=g[S++]}return new wi(y,v,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ar,s=this.index.array,a=this.attributes;for(const u in a){const h=a[u],g=e(h,s);n.setAttribute(u,g)}const c=this.morphAttributes;for(const u in c){const h=[],g=c[u];for(let v=0,p=g.length;v<p;v++){const y=g[v],S=e(y,s);h.push(S)}n.morphAttributes[u]=h}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let u=0,h=f.length;u<h;u++){const g=f[u];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const g in h)h[g]!==void 0&&(e[g]=h[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const h in s){const g=s[h];e.data.attributes[h]=g.toJSON(e.data)}const a={};let c=!1;for(const h in this.morphAttributes){const g=this.morphAttributes[h],v=[];for(let p=0,y=g.length;p<y;p++){const S=g[p];v.push(S.toJSON(e.data))}v.length>0&&(a[h]=v,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(n));const a=e.attributes;for(const g in a){const v=a[g];this.setAttribute(g,v.clone(n))}const c=e.morphAttributes;for(const g in c){const v=[],p=c[g];for(let y=0,S=p.length;y<S;y++)v.push(p[y].clone(n));this.morphAttributes[g]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let g=0,v=f.length;g<v;g++){const p=f[g];this.addGroup(p.start,p.count,p.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sm=new Jt,Wr=new V0,hl=new bd,om=new J,Fs=new J,Os=new J,ks=new J,Yu=new J,pl=new J,ml=new Et,gl=new Et,vl=new Et,am=new J,lm=new J,cm=new J,_l=new J,xl=new J;class Ei extends xn{constructor(e=new Ar,n=new xg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const a=n[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=a.length;c<f;c++){const u=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=c}}}}getVertexPosition(e,n){const s=this.geometry,a=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;n.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(c&&u){pl.set(0,0,0);for(let h=0,g=c.length;h<g;h++){const v=u[h],p=c[h];v!==0&&(Yu.fromBufferAttribute(p,e),f?pl.addScaledVector(Yu,v):pl.addScaledVector(Yu.sub(n),v))}n.add(pl)}return n}raycast(e,n){const s=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),hl.copy(s.boundingSphere),hl.applyMatrix4(c),Wr.copy(e.ray).recast(e.near),!(hl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(hl,om)===null||Wr.origin.distanceToSquared(om)>(e.far-e.near)**2))&&(sm.copy(c).invert(),Wr.copy(e.ray).applyMatrix4(sm),!(s.boundingBox!==null&&Wr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,n,Wr)))}_computeIntersections(e,n,s){let a;const c=this.geometry,f=this.material,u=c.index,h=c.attributes.position,g=c.attributes.uv,v=c.attributes.uv1,p=c.attributes.normal,y=c.groups,S=c.drawRange;if(u!==null)if(Array.isArray(f))for(let w=0,A=y.length;w<A;w++){const x=y[w],_=f[x.materialIndex],D=Math.max(x.start,S.start),R=Math.min(u.count,Math.min(x.start+x.count,S.start+S.count));for(let L=D,W=R;L<W;L+=3){const F=u.getX(L),O=u.getX(L+1),de=u.getX(L+2);a=yl(this,_,e,s,g,v,p,F,O,de),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),A=Math.min(u.count,S.start+S.count);for(let x=w,_=A;x<_;x+=3){const D=u.getX(x),R=u.getX(x+1),L=u.getX(x+2);a=yl(this,f,e,s,g,v,p,D,R,L),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(f))for(let w=0,A=y.length;w<A;w++){const x=y[w],_=f[x.materialIndex],D=Math.max(x.start,S.start),R=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let L=D,W=R;L<W;L+=3){const F=L,O=L+1,de=L+2;a=yl(this,_,e,s,g,v,p,F,O,de),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let x=w,_=A;x<_;x+=3){const D=x,R=x+1,L=x+2;a=yl(this,f,e,s,g,v,p,D,R,L),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}}}function J0(r,e,n,s,a,c,f,u){let h;if(e.side===zn?h=s.intersectTriangle(f,c,a,!0,u):h=s.intersectTriangle(a,c,f,e.side===wr,u),h===null)return null;xl.copy(u),xl.applyMatrix4(r.matrixWorld);const g=n.ray.origin.distanceTo(xl);return g<n.near||g>n.far?null:{distance:g,point:xl.clone(),object:r}}function yl(r,e,n,s,a,c,f,u,h,g){r.getVertexPosition(u,Fs),r.getVertexPosition(h,Os),r.getVertexPosition(g,ks);const v=J0(r,e,n,s,Fs,Os,ks,_l);if(v){a&&(ml.fromBufferAttribute(a,u),gl.fromBufferAttribute(a,h),vl.fromBufferAttribute(a,g),v.uv=Mi.getInterpolation(_l,Fs,Os,ks,ml,gl,vl,new Et)),c&&(ml.fromBufferAttribute(c,u),gl.fromBufferAttribute(c,h),vl.fromBufferAttribute(c,g),v.uv1=Mi.getInterpolation(_l,Fs,Os,ks,ml,gl,vl,new Et),v.uv2=v.uv1),f&&(am.fromBufferAttribute(f,u),lm.fromBufferAttribute(f,h),cm.fromBufferAttribute(f,g),v.normal=Mi.getInterpolation(_l,Fs,Os,ks,am,lm,cm,new J),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const p={a:u,b:h,c:g,normal:new J,materialIndex:0};Mi.getNormal(Fs,Os,ks,p.normal),v.face=p}return v}class Ko extends Ar{constructor(e=1,n=1,s=1,a=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:a,heightSegments:c,depthSegments:f};const u=this;a=Math.floor(a),c=Math.floor(c),f=Math.floor(f);const h=[],g=[],v=[],p=[];let y=0,S=0;w("z","y","x",-1,-1,s,n,e,f,c,0),w("z","y","x",1,-1,s,n,-e,f,c,1),w("x","z","y",1,1,e,s,n,a,f,2),w("x","z","y",1,-1,e,s,-n,a,f,3),w("x","y","z",1,-1,e,n,s,a,c,4),w("x","y","z",-1,-1,e,n,-s,a,c,5),this.setIndex(h),this.setAttribute("position",new Ti(g,3)),this.setAttribute("normal",new Ti(v,3)),this.setAttribute("uv",new Ti(p,2));function w(A,x,_,D,R,L,W,F,O,de,Me){const E=L/O,I=W/de,le=L/2,fe=W/2,z=F/2,Q=O+1,j=de+1;let oe=0,k=0;const $=new J;for(let X=0;X<j;X++){const b=X*I-fe;for(let H=0;H<Q;H++){const Y=H*E-le;$[A]=Y*D,$[x]=b*R,$[_]=z,g.push($.x,$.y,$.z),$[A]=0,$[x]=0,$[_]=F>0?1:-1,v.push($.x,$.y,$.z),p.push(H/O),p.push(1-X/de),oe+=1}}for(let X=0;X<de;X++)for(let b=0;b<O;b++){const H=y+b+Q*X,Y=y+b+Q*(X+1),V=y+(b+1)+Q*(X+1),re=y+(b+1)+Q*X;h.push(H,Y,re),h.push(Y,V,re),k+=6}u.addGroup(S,k,Me),S+=k,y+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(r){const e={};for(const n in r){e[n]={};for(const s in r[n]){const a=r[n][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][s]=null):e[n][s]=a.clone():Array.isArray(a)?e[n][s]=a.slice():e[n][s]=a}}return e}function Tn(r){const e={};for(let n=0;n<r.length;n++){const s=Qs(r[n]);for(const a in s)e[a]=s[a]}return e}function ex(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function Mg(r){return r.getRenderTarget()===null?r.outputColorSpace:Ft.workingColorSpace}const tx={clone:Qs,merge:Tn};var nx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nx,this.fragmentShader=ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class Eg extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new J,um=new Et,dm=new Et;class Yn extends Eg{constructor(e=50,n=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=md*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return md*2*Math.atan(Math.tan(Pu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,s){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,um,dm),n.subVectors(dm,um)}setViewOffset(e,n,s,a,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pu*.5*this.fov)/this.zoom,s=2*n,a=this.aspect*s,c=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,g=f.fullHeight;c+=f.offsetX*a/h,n-=f.offsetY*s/g,a*=f.width/h,s*=f.height/g}const u=this.filmOffset;u!==0&&(c+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zs=-90,Bs=1;class rx extends xn{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Yn(zs,Bs,e,n);a.layers=this.layers,this.add(a);const c=new Yn(zs,Bs,e,n);c.layers=this.layers,this.add(c);const f=new Yn(zs,Bs,e,n);f.layers=this.layers,this.add(f);const u=new Yn(zs,Bs,e,n);u.layers=this.layers,this.add(u);const h=new Yn(zs,Bs,e,n);h.layers=this.layers,this.add(h);const g=new Yn(zs,Bs,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[s,a,c,f,u,h]=n;for(const g of n)this.remove(g);if(e===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Nl)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,u,h,g,v]=this.children,p=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(n,c),e.setRenderTarget(s,1,a),e.render(n,f),e.setRenderTarget(s,2,a),e.render(n,u),e.setRenderTarget(s,3,a),e.render(n,h),e.setRenderTarget(s,4,a),e.render(n,g),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,a),e.render(n,v),e.setRenderTarget(p,y,S),e.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class wg extends Bn{constructor(e,n,s,a,c,f,u,h,g,v){e=e!==void 0?e:[],n=n!==void 0?n:$s,super(e,n,s,a,c,f,u,h,g,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sx extends ns{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];n.encoding!==void 0&&(Ys("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ts?fn:ni),this.texture=new wg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ko(5,5,5),c=new Tr({name:"CubemapFromEquirect",uniforms:Qs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:zn,blending:Sr});c.uniforms.tEquirect.value=n;const f=new Ei(a,c),u=n.minFilter;return n.minFilter===Qr&&(n.minFilter=kn),new rx(1,10,this).update(e,f),n.minFilter=u,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,s,a){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,s,a);e.setRenderTarget(c)}}const qu=new J,ox=new J,ax=new gt;class qr{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,a){return this.normal.set(e,n,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const a=qu.subVectors(s,n).cross(ox.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const s=e.delta(qu),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||ax.getNormalMatrix(e),a=this.coplanarPoint(qu).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new bd,Sl=new J;class Rd{constructor(e=new qr,n=new qr,s=new qr,a=new qr,c=new qr,f=new qr){this.planes=[e,n,s,a,c,f]}set(e,n,s,a,c,f){const u=this.planes;return u[0].copy(e),u[1].copy(n),u[2].copy(s),u[3].copy(a),u[4].copy(c),u[5].copy(f),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,n=Wi){const s=this.planes,a=e.elements,c=a[0],f=a[1],u=a[2],h=a[3],g=a[4],v=a[5],p=a[6],y=a[7],S=a[8],w=a[9],A=a[10],x=a[11],_=a[12],D=a[13],R=a[14],L=a[15];if(s[0].setComponents(h-c,y-g,x-S,L-_).normalize(),s[1].setComponents(h+c,y+g,x+S,L+_).normalize(),s[2].setComponents(h+f,y+v,x+w,L+D).normalize(),s[3].setComponents(h-f,y-v,x-w,L-D).normalize(),s[4].setComponents(h-u,y-p,x-A,L-R).normalize(),n===Wi)s[5].setComponents(h+u,y+p,x+A,L+R).normalize();else if(n===Nl)s[5].setComponents(u,p,A,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const n=this.planes,s=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const a=n[s];if(Sl.x=a.normal.x>0?e.max.x:e.min.x,Sl.y=a.normal.y>0?e.max.y:e.min.y,Sl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tg(){let r=null,e=!1,n=null,s=null;function a(c,f){n(c,f),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function lx(r,e){const n=e.isWebGL2,s=new WeakMap;function a(g,v){const p=g.array,y=g.usage,S=p.byteLength,w=r.createBuffer();r.bindBuffer(v,w),r.bufferData(v,p,y),g.onUploadCallback();let A;if(p instanceof Float32Array)A=r.FLOAT;else if(p instanceof Uint16Array)if(g.isFloat16BufferAttribute)if(n)A=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)A=r.SHORT;else if(p instanceof Uint32Array)A=r.UNSIGNED_INT;else if(p instanceof Int32Array)A=r.INT;else if(p instanceof Int8Array)A=r.BYTE;else if(p instanceof Uint8Array)A=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)A=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:w,type:A,bytesPerElement:p.BYTES_PER_ELEMENT,version:g.version,size:S}}function c(g,v,p){const y=v.array,S=v._updateRange,w=v.updateRanges;if(r.bindBuffer(p,g),S.count===-1&&w.length===0&&r.bufferSubData(p,0,y),w.length!==0){for(let A=0,x=w.length;A<x;A++){const _=w[A];n?r.bufferSubData(p,_.start*y.BYTES_PER_ELEMENT,y,_.start,_.count):r.bufferSubData(p,_.start*y.BYTES_PER_ELEMENT,y.subarray(_.start,_.start+_.count))}v.clearUpdateRanges()}S.count!==-1&&(n?r.bufferSubData(p,S.offset*y.BYTES_PER_ELEMENT,y,S.offset,S.count):r.bufferSubData(p,S.offset*y.BYTES_PER_ELEMENT,y.subarray(S.offset,S.offset+S.count)),S.count=-1),v.onUploadCallback()}function f(g){return g.isInterleavedBufferAttribute&&(g=g.data),s.get(g)}function u(g){g.isInterleavedBufferAttribute&&(g=g.data);const v=s.get(g);v&&(r.deleteBuffer(v.buffer),s.delete(g))}function h(g,v){if(g.isGLBufferAttribute){const y=s.get(g);(!y||y.version<g.version)&&s.set(g,{buffer:g.buffer,type:g.type,bytesPerElement:g.elementSize,version:g.version});return}g.isInterleavedBufferAttribute&&(g=g.data);const p=s.get(g);if(p===void 0)s.set(g,a(g,v));else if(p.version<g.version){if(p.size!==g.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");c(p.buffer,g,v),p.version=g.version}}return{get:f,remove:u,update:h}}class kl extends Ar{constructor(e=1,n=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:a};const c=e/2,f=n/2,u=Math.floor(s),h=Math.floor(a),g=u+1,v=h+1,p=e/u,y=n/h,S=[],w=[],A=[],x=[];for(let _=0;_<v;_++){const D=_*y-f;for(let R=0;R<g;R++){const L=R*p-c;w.push(L,-D,0),A.push(0,0,1),x.push(R/u),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let D=0;D<u;D++){const R=D+g*_,L=D+g*(_+1),W=D+1+g*(_+1),F=D+1+g*_;S.push(R,L,F),S.push(L,W,F)}this.setIndex(S),this.setAttribute("position",new Ti(w,3)),this.setAttribute("normal",new Ti(A,3)),this.setAttribute("uv",new Ti(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ux=`#ifdef USE_ALPHAHASH
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
#endif`,dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,px=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mx=`#ifdef USE_AOMAP
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
#endif`,gx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,_x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,xx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ex=`#ifdef USE_BUMPMAP
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
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dx=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Nx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ix=`vec3 transformedNormal = objectNormal;
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
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Hx=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xx=`#ifdef USE_ENVMAP
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
#endif`,jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kx=`#ifdef USE_GRADIENTMAP
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
}`,Zx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ty=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,ny=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,iy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ay=`PhysicalMaterial material;
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
#endif`,ly=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,cy=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,uy=`#if defined( RE_IndirectDiffuse )
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
#endif`,dy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,py=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,my=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xy=`#if defined( USE_POINTS_UV )
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
#endif`,yy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,My=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ey=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ty=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,by=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ly=`#ifdef USE_NORMALMAP
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
#endif`,Dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,ky=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,By=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$y=`#ifdef USE_SKINNING
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
#endif`,Ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zy=`#ifdef USE_SKINNING
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
#endif`,Qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tS=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nS=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iS=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cS=`uniform sampler2D t2D;
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
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`#include <common>
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
}`,mS=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gS=`#define DISTANCE
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
}`,vS=`#define DISTANCE
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
}`,_S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 diffuse;
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
}`,MS=`#include <common>
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
}`,ES=`uniform vec3 diffuse;
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
}`,wS=`#define LAMBERT
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
}`,TS=`#define LAMBERT
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
}`,AS=`#define MATCAP
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
}`,bS=`#define MATCAP
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
}`,RS=`#define NORMAL
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
}`,CS=`#define NORMAL
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
}`,PS=`#define PHONG
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
}`,LS=`#define PHONG
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
}`,DS=`#define STANDARD
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
}`,NS=`#define STANDARD
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
}`,IS=`#define TOON
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
}`,US=`#define TOON
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
}`,FS=`uniform float size;
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
}`,OS=`uniform vec3 diffuse;
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
}`,kS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,zS=`uniform vec3 color;
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
}`,BS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,HS=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:cx,alphahash_pars_fragment:ux,alphamap_fragment:dx,alphamap_pars_fragment:fx,alphatest_fragment:hx,alphatest_pars_fragment:px,aomap_fragment:mx,aomap_pars_fragment:gx,batching_pars_vertex:vx,batching_vertex:_x,begin_vertex:xx,beginnormal_vertex:yx,bsdfs:Sx,iridescence_fragment:Mx,bumpmap_pars_fragment:Ex,clipping_planes_fragment:wx,clipping_planes_pars_fragment:Tx,clipping_planes_pars_vertex:Ax,clipping_planes_vertex:bx,color_fragment:Rx,color_pars_fragment:Cx,color_pars_vertex:Px,color_vertex:Lx,common:Dx,cube_uv_reflection_fragment:Nx,defaultnormal_vertex:Ix,displacementmap_pars_vertex:Ux,displacementmap_vertex:Fx,emissivemap_fragment:Ox,emissivemap_pars_fragment:kx,colorspace_fragment:zx,colorspace_pars_fragment:Bx,envmap_fragment:Hx,envmap_common_pars_fragment:Gx,envmap_pars_fragment:Vx,envmap_pars_vertex:Wx,envmap_physical_pars_fragment:ny,envmap_vertex:Xx,fog_vertex:jx,fog_pars_vertex:Yx,fog_fragment:qx,fog_pars_fragment:$x,gradientmap_pars_fragment:Kx,lightmap_fragment:Zx,lightmap_pars_fragment:Qx,lights_lambert_fragment:Jx,lights_lambert_pars_fragment:ey,lights_pars_begin:ty,lights_toon_fragment:iy,lights_toon_pars_fragment:ry,lights_phong_fragment:sy,lights_phong_pars_fragment:oy,lights_physical_fragment:ay,lights_physical_pars_fragment:ly,lights_fragment_begin:cy,lights_fragment_maps:uy,lights_fragment_end:dy,logdepthbuf_fragment:fy,logdepthbuf_pars_fragment:hy,logdepthbuf_pars_vertex:py,logdepthbuf_vertex:my,map_fragment:gy,map_pars_fragment:vy,map_particle_fragment:_y,map_particle_pars_fragment:xy,metalnessmap_fragment:yy,metalnessmap_pars_fragment:Sy,morphcolor_vertex:My,morphnormal_vertex:Ey,morphtarget_pars_vertex:wy,morphtarget_vertex:Ty,normal_fragment_begin:Ay,normal_fragment_maps:by,normal_pars_fragment:Ry,normal_pars_vertex:Cy,normal_vertex:Py,normalmap_pars_fragment:Ly,clearcoat_normal_fragment_begin:Dy,clearcoat_normal_fragment_maps:Ny,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Uy,opaque_fragment:Fy,packing:Oy,premultiplied_alpha_fragment:ky,project_vertex:zy,dithering_fragment:By,dithering_pars_fragment:Hy,roughnessmap_fragment:Gy,roughnessmap_pars_fragment:Vy,shadowmap_pars_fragment:Wy,shadowmap_pars_vertex:Xy,shadowmap_vertex:jy,shadowmask_pars_fragment:Yy,skinbase_vertex:qy,skinning_pars_vertex:$y,skinning_vertex:Ky,skinnormal_vertex:Zy,specularmap_fragment:Qy,specularmap_pars_fragment:Jy,tonemapping_fragment:eS,tonemapping_pars_fragment:tS,transmission_fragment:nS,transmission_pars_fragment:iS,uv_pars_fragment:rS,uv_pars_vertex:sS,uv_vertex:oS,worldpos_vertex:aS,background_vert:lS,background_frag:cS,backgroundCube_vert:uS,backgroundCube_frag:dS,cube_vert:fS,cube_frag:hS,depth_vert:pS,depth_frag:mS,distanceRGBA_vert:gS,distanceRGBA_frag:vS,equirect_vert:_S,equirect_frag:xS,linedashed_vert:yS,linedashed_frag:SS,meshbasic_vert:MS,meshbasic_frag:ES,meshlambert_vert:wS,meshlambert_frag:TS,meshmatcap_vert:AS,meshmatcap_frag:bS,meshnormal_vert:RS,meshnormal_frag:CS,meshphong_vert:PS,meshphong_frag:LS,meshphysical_vert:DS,meshphysical_frag:NS,meshtoon_vert:IS,meshtoon_frag:US,points_vert:FS,points_frag:OS,shadow_vert:kS,shadow_frag:zS,sprite_vert:BS,sprite_frag:HS},Re={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Si={basic:{uniforms:Tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new St(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Tn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Tn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new St(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Tn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Tn([Re.points,Re.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Tn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Tn([Re.common,Re.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Tn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Tn([Re.sprite,Re.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Tn([Re.common,Re.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Tn([Re.lights,Re.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Si.physical={uniforms:Tn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Ml={r:0,b:0,g:0};function GS(r,e,n,s,a,c,f){const u=new St(0);let h=c===!0?0:1,g,v,p=null,y=0,S=null;function w(x,_){let D=!1,R=_.isScene===!0?_.background:null;R&&R.isTexture&&(R=(_.backgroundBlurriness>0?n:e).get(R)),R===null?A(u,h):R&&R.isColor&&(A(R,1),D=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?s.buffers.color.setClear(0,0,0,1,f):L==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),R&&(R.isCubeTexture||R.mapping===Ul)?(v===void 0&&(v=new Ei(new Ko(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:Qs(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(W,F,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),v.material.uniforms.envMap.value=R,v.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,v.material.toneMapped=Ft.getTransfer(R.colorSpace)!==Ht,(p!==R||y!==R.version||S!==r.toneMapping)&&(v.material.needsUpdate=!0,p=R,y=R.version,S=r.toneMapping),v.layers.enableAll(),x.unshift(v,v.geometry,v.material,0,0,null)):R&&R.isTexture&&(g===void 0&&(g=new Ei(new kl(2,2),new Tr({name:"BackgroundMaterial",uniforms:Qs(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(g)),g.material.uniforms.t2D.value=R,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=Ft.getTransfer(R.colorSpace)!==Ht,R.matrixAutoUpdate===!0&&R.updateMatrix(),g.material.uniforms.uvTransform.value.copy(R.matrix),(p!==R||y!==R.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,p=R,y=R.version,S=r.toneMapping),g.layers.enableAll(),x.unshift(g,g.geometry,g.material,0,0,null))}function A(x,_){x.getRGB(Ml,Mg(r)),s.buffers.color.setClear(Ml.r,Ml.g,Ml.b,_,f)}return{getClearColor:function(){return u},setClearColor:function(x,_=1){u.set(x),h=_,A(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(x){h=x,A(u,h)},render:w}}function VS(r,e,n,s){const a=r.getParameter(r.MAX_VERTEX_ATTRIBS),c=s.isWebGL2?null:e.get("OES_vertex_array_object"),f=s.isWebGL2||c!==null,u={},h=x(null);let g=h,v=!1;function p(z,Q,j,oe,k){let $=!1;if(f){const X=A(oe,j,Q);g!==X&&(g=X,S(g.object)),$=_(z,oe,j,k),$&&D(z,oe,j,k)}else{const X=Q.wireframe===!0;(g.geometry!==oe.id||g.program!==j.id||g.wireframe!==X)&&(g.geometry=oe.id,g.program=j.id,g.wireframe=X,$=!0)}k!==null&&n.update(k,r.ELEMENT_ARRAY_BUFFER),($||v)&&(v=!1,de(z,Q,j,oe),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n.get(k).buffer))}function y(){return s.isWebGL2?r.createVertexArray():c.createVertexArrayOES()}function S(z){return s.isWebGL2?r.bindVertexArray(z):c.bindVertexArrayOES(z)}function w(z){return s.isWebGL2?r.deleteVertexArray(z):c.deleteVertexArrayOES(z)}function A(z,Q,j){const oe=j.wireframe===!0;let k=u[z.id];k===void 0&&(k={},u[z.id]=k);let $=k[Q.id];$===void 0&&($={},k[Q.id]=$);let X=$[oe];return X===void 0&&(X=x(y()),$[oe]=X),X}function x(z){const Q=[],j=[],oe=[];for(let k=0;k<a;k++)Q[k]=0,j[k]=0,oe[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:j,attributeDivisors:oe,object:z,attributes:{},index:null}}function _(z,Q,j,oe){const k=g.attributes,$=Q.attributes;let X=0;const b=j.getAttributes();for(const H in b)if(b[H].location>=0){const V=k[H];let re=$[H];if(re===void 0&&(H==="instanceMatrix"&&z.instanceMatrix&&(re=z.instanceMatrix),H==="instanceColor"&&z.instanceColor&&(re=z.instanceColor)),V===void 0||V.attribute!==re||re&&V.data!==re.data)return!0;X++}return g.attributesNum!==X||g.index!==oe}function D(z,Q,j,oe){const k={},$=Q.attributes;let X=0;const b=j.getAttributes();for(const H in b)if(b[H].location>=0){let V=$[H];V===void 0&&(H==="instanceMatrix"&&z.instanceMatrix&&(V=z.instanceMatrix),H==="instanceColor"&&z.instanceColor&&(V=z.instanceColor));const re={};re.attribute=V,V&&V.data&&(re.data=V.data),k[H]=re,X++}g.attributes=k,g.attributesNum=X,g.index=oe}function R(){const z=g.newAttributes;for(let Q=0,j=z.length;Q<j;Q++)z[Q]=0}function L(z){W(z,0)}function W(z,Q){const j=g.newAttributes,oe=g.enabledAttributes,k=g.attributeDivisors;j[z]=1,oe[z]===0&&(r.enableVertexAttribArray(z),oe[z]=1),k[z]!==Q&&((s.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,Q),k[z]=Q)}function F(){const z=g.newAttributes,Q=g.enabledAttributes;for(let j=0,oe=Q.length;j<oe;j++)Q[j]!==z[j]&&(r.disableVertexAttribArray(j),Q[j]=0)}function O(z,Q,j,oe,k,$,X){X===!0?r.vertexAttribIPointer(z,Q,j,k,$):r.vertexAttribPointer(z,Q,j,oe,k,$)}function de(z,Q,j,oe){if(s.isWebGL2===!1&&(z.isInstancedMesh||oe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const k=oe.attributes,$=j.getAttributes(),X=Q.defaultAttributeValues;for(const b in $){const H=$[b];if(H.location>=0){let Y=k[b];if(Y===void 0&&(b==="instanceMatrix"&&z.instanceMatrix&&(Y=z.instanceMatrix),b==="instanceColor"&&z.instanceColor&&(Y=z.instanceColor)),Y!==void 0){const V=Y.normalized,re=Y.itemSize,ce=n.get(Y);if(ce===void 0)continue;const Ee=ce.buffer,xe=ce.type,_e=ce.bytesPerElement,Ye=s.isWebGL2===!0&&(xe===r.INT||xe===r.UNSIGNED_INT||Y.gpuType===ig);if(Y.isInterleavedBufferAttribute){const qe=Y.data,q=qe.stride,At=Y.offset;if(qe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<H.locationSize;Ve++)W(H.location+Ve,qe.meshPerAttribute);z.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let Ve=0;Ve<H.locationSize;Ve++)L(H.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,Ee);for(let Ve=0;Ve<H.locationSize;Ve++)O(H.location+Ve,re/H.locationSize,xe,V,q*_e,(At+re/H.locationSize*Ve)*_e,Ye)}else{if(Y.isInstancedBufferAttribute){for(let qe=0;qe<H.locationSize;qe++)W(H.location+qe,Y.meshPerAttribute);z.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let qe=0;qe<H.locationSize;qe++)L(H.location+qe);r.bindBuffer(r.ARRAY_BUFFER,Ee);for(let qe=0;qe<H.locationSize;qe++)O(H.location+qe,re/H.locationSize,xe,V,re*_e,re/H.locationSize*qe*_e,Ye)}}else if(X!==void 0){const V=X[b];if(V!==void 0)switch(V.length){case 2:r.vertexAttrib2fv(H.location,V);break;case 3:r.vertexAttrib3fv(H.location,V);break;case 4:r.vertexAttrib4fv(H.location,V);break;default:r.vertexAttrib1fv(H.location,V)}}}}F()}function Me(){le();for(const z in u){const Q=u[z];for(const j in Q){const oe=Q[j];for(const k in oe)w(oe[k].object),delete oe[k];delete Q[j]}delete u[z]}}function E(z){if(u[z.id]===void 0)return;const Q=u[z.id];for(const j in Q){const oe=Q[j];for(const k in oe)w(oe[k].object),delete oe[k];delete Q[j]}delete u[z.id]}function I(z){for(const Q in u){const j=u[Q];if(j[z.id]===void 0)continue;const oe=j[z.id];for(const k in oe)w(oe[k].object),delete oe[k];delete j[z.id]}}function le(){fe(),v=!0,g!==h&&(g=h,S(g.object))}function fe(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:p,reset:le,resetDefaultState:fe,dispose:Me,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:L,disableUnusedAttributes:F}}function WS(r,e,n,s){const a=s.isWebGL2;let c;function f(v){c=v}function u(v,p){r.drawArrays(c,v,p),n.update(p,c,1)}function h(v,p,y){if(y===0)return;let S,w;if(a)S=r,w="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),w="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[w](c,v,p,y),n.update(p,c,y)}function g(v,p,y){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<y;w++)this.render(v[w],p[w]);else{S.multiDrawArraysWEBGL(c,v,0,p,0,y);let w=0;for(let A=0;A<y;A++)w+=p[A];n.update(w,c,1)}}this.setMode=f,this.render=u,this.renderInstances=h,this.renderMultiDraw=g}function XS(r,e,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const g=f||e.has("WEBGL_draw_buffers"),v=n.logarithmicDepthBuffer===!0,p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_TEXTURE_SIZE),w=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),A=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=y>0,L=f||e.has("OES_texture_float"),W=R&&L,F=f?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:f,drawBuffers:g,getMaxAnisotropy:a,getMaxPrecision:c,precision:u,logarithmicDepthBuffer:v,maxTextures:p,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:w,maxAttributes:A,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:D,vertexTextures:R,floatFragmentTextures:L,floatVertexTextures:W,maxSamples:F}}function jS(r){const e=this;let n=null,s=0,a=!1,c=!1;const f=new qr,u=new gt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,y){const S=p.length!==0||y||s!==0||a;return a=y,s=p.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(p,y){n=v(p,y,0)},this.setState=function(p,y,S){const w=p.clippingPlanes,A=p.clipIntersection,x=p.clipShadows,_=r.get(p);if(!a||w===null||w.length===0||c&&!x)c?v(null):g();else{const D=c?0:s,R=D*4;let L=_.clippingState||null;h.value=L,L=v(w,y,R,S);for(let W=0;W!==R;++W)L[W]=n[W];_.clippingState=L,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function g(){h.value!==n&&(h.value=n,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(p,y,S,w){const A=p!==null?p.length:0;let x=null;if(A!==0){if(x=h.value,w!==!0||x===null){const _=S+A*4,D=y.matrixWorldInverse;u.getNormalMatrix(D),(x===null||x.length<_)&&(x=new Float32Array(_));for(let R=0,L=S;R!==A;++R,L+=4)f.copy(p[R]).applyMatrix4(D,u),f.normal.toArray(x,L),x[L+3]=f.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}function YS(r){let e=new WeakMap;function n(f,u){return u===ud?f.mapping=$s:u===dd&&(f.mapping=Ks),f}function s(f){if(f&&f.isTexture){const u=f.mapping;if(u===ud||u===dd)if(e.has(f)){const h=e.get(f).texture;return n(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const g=new sx(h.height);return g.fromEquirectangularTexture(r,f),e.set(f,g),f.addEventListener("dispose",a),n(g.texture,f.mapping)}else return null}}return f}function a(f){const u=f.target;u.removeEventListener("dispose",a);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}class Ag extends Eg{constructor(e=-1,n=1,s=1,a=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=a,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,a,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=s-e,f=s+e,u=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,f=c+g*this.view.width,u-=v*this.view.offsetY,h=u-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ws=4,fm=[.125,.215,.35,.446,.526,.582],Zr=20,$u=new Ag,hm=new St;let Ku=null,Zu=0,Qu=0;const $r=(1+Math.sqrt(5))/2,Hs=1/$r,pm=[new J(1,1,1),new J(-1,1,1),new J(1,1,-1),new J(-1,1,-1),new J(0,$r,Hs),new J(0,$r,-Hs),new J(Hs,0,$r),new J(-Hs,0,$r),new J($r,Hs,0),new J(-$r,Hs,0)];class mm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,s=.1,a=100){Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,s,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,Zu,Qu),e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$s||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel();const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:jo,format:hi,colorSpace:Xi,depthBuffer:!1},a=gm(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gm(e,n,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qS(c)),this._blurMaterial=$S(c,e,n)}return a}_compileMaterial(e){const n=new Ei(this._lodPlanes[0],e);this._renderer.compile(n,$u)}_sceneToCubeUV(e,n,s,a){const u=new Yn(90,1,n,s),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,p=v.autoClear,y=v.toneMapping;v.getClearColor(hm),v.toneMapping=Mr,v.autoClear=!1;const S=new xg({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),w=new Ei(new Ko,S);let A=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,A=!0):(S.color.copy(hm),A=!0);for(let _=0;_<6;_++){const D=_%3;D===0?(u.up.set(0,h[_],0),u.lookAt(g[_],0,0)):D===1?(u.up.set(0,0,h[_]),u.lookAt(0,g[_],0)):(u.up.set(0,h[_],0),u.lookAt(0,0,g[_]));const R=this._cubeSize;El(a,D*R,_>2?R:0,R,R),v.setRenderTarget(a),A&&v.render(w,u),v.render(e,u)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=y,v.autoClear=p,e.background=x}_textureToCubeUV(e,n){const s=this._renderer,a=e.mapping===$s||e.mapping===Ks;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=_m()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());const c=a?this._cubemapMaterial:this._equirectMaterial,f=new Ei(this._lodPlanes[0],c),u=c.uniforms;u.envMap.value=e;const h=this._cubeSize;El(n,0,0,3*h,2*h),s.setRenderTarget(n),s.render(f,$u)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),f=pm[(a-1)%pm.length];this._blur(e,a-1,a,c,f)}n.autoClear=s}_blur(e,n,s,a,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,s,a,"latitudinal",c),this._halfBlur(f,e,s,s,a,"longitudinal",c)}_halfBlur(e,n,s,a,c,f,u){const h=this._renderer,g=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,p=new Ei(this._lodPlanes[a],g),y=g.uniforms,S=this._sizeLods[s]-1,w=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Zr-1),A=c/w,x=isFinite(c)?1+Math.floor(v*A):Zr;x>Zr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Zr}`);const _=[];let D=0;for(let O=0;O<Zr;++O){const de=O/A,Me=Math.exp(-de*de/2);_.push(Me),O===0?D+=Me:O<x&&(D+=2*Me)}for(let O=0;O<_.length;O++)_[O]=_[O]/D;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=_,y.latitudinal.value=f==="latitudinal",u&&(y.poleAxis.value=u);const{_lodMax:R}=this;y.dTheta.value=w,y.mipInt.value=R-s;const L=this._sizeLods[a],W=3*L*(a>R-Ws?a-R+Ws:0),F=4*(this._cubeSize-L);El(n,W,F,3*L,2*L),h.setRenderTarget(n),h.render(p,$u)}}function qS(r){const e=[],n=[],s=[];let a=r;const c=r-Ws+1+fm.length;for(let f=0;f<c;f++){const u=Math.pow(2,a);n.push(u);let h=1/u;f>r-Ws?h=fm[f-r+Ws-1]:f===0&&(h=0),s.push(h);const g=1/(u-2),v=-g,p=1+g,y=[v,v,p,v,p,p,v,v,p,p,v,p],S=6,w=6,A=3,x=2,_=1,D=new Float32Array(A*w*S),R=new Float32Array(x*w*S),L=new Float32Array(_*w*S);for(let F=0;F<S;F++){const O=F%3*2/3-1,de=F>2?0:-1,Me=[O,de,0,O+2/3,de,0,O+2/3,de+1,0,O,de,0,O+2/3,de+1,0,O,de+1,0];D.set(Me,A*w*F),R.set(y,x*w*F);const E=[F,F,F,F,F,F];L.set(E,_*w*F)}const W=new Ar;W.setAttribute("position",new wi(D,A)),W.setAttribute("uv",new wi(R,x)),W.setAttribute("faceIndex",new wi(L,_)),e.push(W),a>Ws&&a--}return{lodPlanes:e,sizeLods:n,sigmas:s}}function gm(r,e,n){const s=new ns(r,e,n);return s.texture.mapping=Ul,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function El(r,e,n,s,a){r.viewport.set(e,n,s,a),r.scissor.set(e,n,s,a)}function $S(r,e,n){const s=new Float32Array(Zr),a=new J(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Cd(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function vm(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cd(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function _m(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Cd(){return`

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
	`}function KS(r){let e=new WeakMap,n=null;function s(u){if(u&&u.isTexture){const h=u.mapping,g=h===ud||h===dd,v=h===$s||h===Ks;if(g||v)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let p=e.get(u);return n===null&&(n=new mm(r)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),e.set(u,p),p.texture}else{if(e.has(u))return e.get(u).texture;{const p=u.image;if(g&&p&&p.height>0||v&&p&&a(p)){n===null&&(n=new mm(r));const y=g?n.fromEquirectangular(u):n.fromCubemap(u);return e.set(u,y),u.addEventListener("dispose",c),y.texture}else return null}}}return u}function a(u){let h=0;const g=6;for(let v=0;v<g;v++)u[v]!==void 0&&h++;return h===g}function c(u){const h=u.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function ZS(r){const e={};function n(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return n(s)!==null},init:function(s){s.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(s){const a=n(s);return a===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function QS(r,e,n,s){const a={},c=new WeakMap;function f(p){const y=p.target;y.index!==null&&e.remove(y.index);for(const w in y.attributes)e.remove(y.attributes[w]);for(const w in y.morphAttributes){const A=y.morphAttributes[w];for(let x=0,_=A.length;x<_;x++)e.remove(A[x])}y.removeEventListener("dispose",f),delete a[y.id];const S=c.get(y);S&&(e.remove(S),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function u(p,y){return a[y.id]===!0||(y.addEventListener("dispose",f),a[y.id]=!0,n.memory.geometries++),y}function h(p){const y=p.attributes;for(const w in y)e.update(y[w],r.ARRAY_BUFFER);const S=p.morphAttributes;for(const w in S){const A=S[w];for(let x=0,_=A.length;x<_;x++)e.update(A[x],r.ARRAY_BUFFER)}}function g(p){const y=[],S=p.index,w=p.attributes.position;let A=0;if(S!==null){const D=S.array;A=S.version;for(let R=0,L=D.length;R<L;R+=3){const W=D[R+0],F=D[R+1],O=D[R+2];y.push(W,F,F,O,O,W)}}else if(w!==void 0){const D=w.array;A=w.version;for(let R=0,L=D.length/3-1;R<L;R+=3){const W=R+0,F=R+1,O=R+2;y.push(W,F,F,O,O,W)}}else return;const x=new(hg(y)?Sg:yg)(y,1);x.version=A;const _=c.get(p);_&&e.remove(_),c.set(p,x)}function v(p){const y=c.get(p);if(y){const S=p.index;S!==null&&y.version<S.version&&g(p)}else g(p);return c.get(p)}return{get:u,update:h,getWireframeAttribute:v}}function JS(r,e,n,s){const a=s.isWebGL2;let c;function f(S){c=S}let u,h;function g(S){u=S.type,h=S.bytesPerElement}function v(S,w){r.drawElements(c,w,u,S*h),n.update(w,c,1)}function p(S,w,A){if(A===0)return;let x,_;if(a)x=r,_="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[_](c,w,u,S*h,A),n.update(w,c,A)}function y(S,w,A){if(A===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<A;_++)this.render(S[_]/h,w[_]);else{x.multiDrawElementsWEBGL(c,w,0,u,S,0,A);let _=0;for(let D=0;D<A;D++)_+=w[D];n.update(_,c,1)}}this.setMode=f,this.setIndex=g,this.render=v,this.renderInstances=p,this.renderMultiDraw=y}function eM(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,u){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=u*(c/3);break;case r.LINES:n.lines+=u*(c/2);break;case r.LINE_STRIP:n.lines+=u*(c-1);break;case r.LINE_LOOP:n.lines+=u*c;break;case r.POINTS:n.points+=u*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:s}}function tM(r,e){return r[0]-e[0]}function nM(r,e){return Math.abs(e[1])-Math.abs(r[1])}function iM(r,e,n){const s={},a=new Float32Array(8),c=new WeakMap,f=new Wt,u=[];for(let g=0;g<8;g++)u[g]=[g,0];function h(g,v,p){const y=g.morphTargetInfluences;if(e.isWebGL2===!0){const w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,A=w!==void 0?w.length:0;let x=c.get(v);if(x===void 0||x.count!==A){let Q=function(){fe.dispose(),c.delete(v),v.removeEventListener("dispose",Q)};var S=Q;x!==void 0&&x.texture.dispose();const R=v.morphAttributes.position!==void 0,L=v.morphAttributes.normal!==void 0,W=v.morphAttributes.color!==void 0,F=v.morphAttributes.position||[],O=v.morphAttributes.normal||[],de=v.morphAttributes.color||[];let Me=0;R===!0&&(Me=1),L===!0&&(Me=2),W===!0&&(Me=3);let E=v.attributes.position.count*Me,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const le=new Float32Array(E*I*4*A),fe=new gg(le,E,I,A);fe.type=Vi,fe.needsUpdate=!0;const z=Me*4;for(let j=0;j<A;j++){const oe=F[j],k=O[j],$=de[j],X=E*I*4*j;for(let b=0;b<oe.count;b++){const H=b*z;R===!0&&(f.fromBufferAttribute(oe,b),le[X+H+0]=f.x,le[X+H+1]=f.y,le[X+H+2]=f.z,le[X+H+3]=0),L===!0&&(f.fromBufferAttribute(k,b),le[X+H+4]=f.x,le[X+H+5]=f.y,le[X+H+6]=f.z,le[X+H+7]=0),W===!0&&(f.fromBufferAttribute($,b),le[X+H+8]=f.x,le[X+H+9]=f.y,le[X+H+10]=f.z,le[X+H+11]=$.itemSize===4?f.w:1)}}x={count:A,texture:fe,size:new Et(E,I)},c.set(v,x),v.addEventListener("dispose",Q)}let _=0;for(let R=0;R<y.length;R++)_+=y[R];const D=v.morphTargetsRelative?1:1-_;p.getUniforms().setValue(r,"morphTargetBaseInfluence",D),p.getUniforms().setValue(r,"morphTargetInfluences",y),p.getUniforms().setValue(r,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const w=y===void 0?0:y.length;let A=s[v.id];if(A===void 0||A.length!==w){A=[];for(let L=0;L<w;L++)A[L]=[L,0];s[v.id]=A}for(let L=0;L<w;L++){const W=A[L];W[0]=L,W[1]=y[L]}A.sort(nM);for(let L=0;L<8;L++)L<w&&A[L][1]?(u[L][0]=A[L][0],u[L][1]=A[L][1]):(u[L][0]=Number.MAX_SAFE_INTEGER,u[L][1]=0);u.sort(tM);const x=v.morphAttributes.position,_=v.morphAttributes.normal;let D=0;for(let L=0;L<8;L++){const W=u[L],F=W[0],O=W[1];F!==Number.MAX_SAFE_INTEGER&&O?(x&&v.getAttribute("morphTarget"+L)!==x[F]&&v.setAttribute("morphTarget"+L,x[F]),_&&v.getAttribute("morphNormal"+L)!==_[F]&&v.setAttribute("morphNormal"+L,_[F]),a[L]=O,D+=O):(x&&v.hasAttribute("morphTarget"+L)===!0&&v.deleteAttribute("morphTarget"+L),_&&v.hasAttribute("morphNormal"+L)===!0&&v.deleteAttribute("morphNormal"+L),a[L]=0)}const R=v.morphTargetsRelative?1:1-D;p.getUniforms().setValue(r,"morphTargetBaseInfluence",R),p.getUniforms().setValue(r,"morphTargetInfluences",a)}}return{update:h}}function rM(r,e,n,s){let a=new WeakMap;function c(h){const g=s.render.frame,v=h.geometry,p=e.get(h,v);if(a.get(p)!==g&&(e.update(p),a.set(p,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),a.get(h)!==g&&(n.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,g))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==g&&(y.update(),a.set(y,g))}return p}function f(){a=new WeakMap}function u(h){const g=h.target;g.removeEventListener("dispose",u),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:c,dispose:f}}class bg extends Bn{constructor(e,n,s,a,c,f,u,h,g,v){if(v=v!==void 0?v:es,v!==es&&v!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===es&&(s=yr),s===void 0&&v===Zs&&(s=Jr),super(null,a,c,f,u,h,v,s,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=u!==void 0?u:An,this.minFilter=h!==void 0?h:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Rg=new Bn,Cg=new bg(1,1);Cg.compareFunction=fg;const Pg=new gg,Lg=new H0,Dg=new wg,xm=[],ym=[],Sm=new Float32Array(16),Mm=new Float32Array(9),Em=new Float32Array(4);function to(r,e,n){const s=r[0];if(s<=0||s>0)return r;const a=e*n;let c=xm[a];if(c===void 0&&(c=new Float32Array(a),xm[a]=c),e!==0){s.toArray(c,0);for(let f=1,u=0;f!==e;++f)u+=n,r[f].toArray(c,u)}return c}function nn(r,e){if(r.length!==e.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==e[n])return!1;return!0}function rn(r,e){for(let n=0,s=e.length;n<s;n++)r[n]=e[n]}function zl(r,e){let n=ym[e];n===void 0&&(n=new Int32Array(e),ym[e]=n);for(let s=0;s!==e;++s)n[s]=r.allocateTextureUnit();return n}function sM(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function oM(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;r.uniform2fv(this.addr,e),rn(n,e)}}function aM(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;r.uniform3fv(this.addr,e),rn(n,e)}}function lM(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;r.uniform4fv(this.addr,e),rn(n,e)}}function cM(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(nn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,s))return;Em.set(s),r.uniformMatrix2fv(this.addr,!1,Em),rn(n,s)}}function uM(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(nn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,s))return;Mm.set(s),r.uniformMatrix3fv(this.addr,!1,Mm),rn(n,s)}}function dM(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(nn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,s))return;Sm.set(s),r.uniformMatrix4fv(this.addr,!1,Sm),rn(n,s)}}function fM(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function hM(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;r.uniform2iv(this.addr,e),rn(n,e)}}function pM(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;r.uniform3iv(this.addr,e),rn(n,e)}}function mM(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;r.uniform4iv(this.addr,e),rn(n,e)}}function gM(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function vM(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;r.uniform2uiv(this.addr,e),rn(n,e)}}function _M(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;r.uniform3uiv(this.addr,e),rn(n,e)}}function xM(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;r.uniform4uiv(this.addr,e),rn(n,e)}}function yM(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);const c=this.type===r.SAMPLER_2D_SHADOW?Cg:Rg;n.setTexture2D(e||c,a)}function SM(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTexture3D(e||Lg,a)}function MM(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTextureCube(e||Dg,a)}function EM(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTexture2DArray(e||Pg,a)}function wM(r){switch(r){case 5126:return sM;case 35664:return oM;case 35665:return aM;case 35666:return lM;case 35674:return cM;case 35675:return uM;case 35676:return dM;case 5124:case 35670:return fM;case 35667:case 35671:return hM;case 35668:case 35672:return pM;case 35669:case 35673:return mM;case 5125:return gM;case 36294:return vM;case 36295:return _M;case 36296:return xM;case 35678:case 36198:case 36298:case 36306:case 35682:return yM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return MM;case 36289:case 36303:case 36311:case 36292:return EM}}function TM(r,e){r.uniform1fv(this.addr,e)}function AM(r,e){const n=to(e,this.size,2);r.uniform2fv(this.addr,n)}function bM(r,e){const n=to(e,this.size,3);r.uniform3fv(this.addr,n)}function RM(r,e){const n=to(e,this.size,4);r.uniform4fv(this.addr,n)}function CM(r,e){const n=to(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function PM(r,e){const n=to(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function LM(r,e){const n=to(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function DM(r,e){r.uniform1iv(this.addr,e)}function NM(r,e){r.uniform2iv(this.addr,e)}function IM(r,e){r.uniform3iv(this.addr,e)}function UM(r,e){r.uniform4iv(this.addr,e)}function FM(r,e){r.uniform1uiv(this.addr,e)}function OM(r,e){r.uniform2uiv(this.addr,e)}function kM(r,e){r.uniform3uiv(this.addr,e)}function zM(r,e){r.uniform4uiv(this.addr,e)}function BM(r,e,n){const s=this.cache,a=e.length,c=zl(n,a);nn(s,c)||(r.uniform1iv(this.addr,c),rn(s,c));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||Rg,c[f])}function HM(r,e,n){const s=this.cache,a=e.length,c=zl(n,a);nn(s,c)||(r.uniform1iv(this.addr,c),rn(s,c));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||Lg,c[f])}function GM(r,e,n){const s=this.cache,a=e.length,c=zl(n,a);nn(s,c)||(r.uniform1iv(this.addr,c),rn(s,c));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||Dg,c[f])}function VM(r,e,n){const s=this.cache,a=e.length,c=zl(n,a);nn(s,c)||(r.uniform1iv(this.addr,c),rn(s,c));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||Pg,c[f])}function WM(r){switch(r){case 5126:return TM;case 35664:return AM;case 35665:return bM;case 35666:return RM;case 35674:return CM;case 35675:return PM;case 35676:return LM;case 5124:case 35670:return DM;case 35667:case 35671:return NM;case 35668:case 35672:return IM;case 35669:case 35673:return UM;case 5125:return FM;case 36294:return OM;case 36295:return kM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return HM;case 35680:case 36300:case 36308:case 36293:return GM;case 36289:case 36303:case 36311:case 36292:return VM}}class XM{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.setValue=wM(n.type)}}class jM{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=WM(n.type)}}class YM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const a=this.seq;for(let c=0,f=a.length;c!==f;++c){const u=a[c];u.setValue(e,n[u.id],s)}}}const Ju=/(\w+)(\])?(\[|\.)?/g;function wm(r,e){r.seq.push(e),r.map[e.id]=e}function qM(r,e,n){const s=r.name,a=s.length;for(Ju.lastIndex=0;;){const c=Ju.exec(s),f=Ju.lastIndex;let u=c[1];const h=c[2]==="]",g=c[3];if(h&&(u=u|0),g===void 0||g==="["&&f+2===a){wm(n,g===void 0?new XM(u,r,e):new jM(u,r,e));break}else{let p=n.map[u];p===void 0&&(p=new YM(u),wm(n,p)),n=p}}}class Rl{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const c=e.getActiveUniform(n,a),f=e.getUniformLocation(n,c.name);qM(c,f,this)}}setValue(e,n,s,a){const c=this.map[n];c!==void 0&&c.setValue(e,s,a)}setOptional(e,n,s){const a=n[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,n,s,a){for(let c=0,f=n.length;c!==f;++c){const u=n[c],h=s[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,a)}}static seqWithValue(e,n){const s=[];for(let a=0,c=e.length;a!==c;++a){const f=e[a];f.id in n&&s.push(f)}return s}}function Tm(r,e,n){const s=r.createShader(e);return r.shaderSource(s,n),r.compileShader(s),s}const $M=37297;let KM=0;function ZM(r,e){const n=r.split(`
`),s=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=a;f<c;f++){const u=f+1;s.push(`${u===e?">":" "} ${u}: ${n[f]}`)}return s.join(`
`)}function QM(r){const e=Ft.getPrimaries(Ft.workingColorSpace),n=Ft.getPrimaries(r);let s;switch(e===n?s="":e===Dl&&n===Ll?s="LinearDisplayP3ToLinearSRGB":e===Ll&&n===Dl&&(s="LinearSRGBToLinearDisplayP3"),r){case Xi:case Fl:return[s,"LinearTransferOETF"];case fn:case Ad:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[s,"LinearTransferOETF"]}}function Am(r,e,n){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+ZM(r.getShaderSource(e),f)}else return a}function JM(r,e){const n=QM(e);return`vec4 ${r}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function eE(r,e){let n;switch(e){case d0:n="Linear";break;case f0:n="Reinhard";break;case h0:n="OptimizedCineon";break;case p0:n="ACESFilmic";break;case g0:n="AgX";break;case m0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function tE(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xs).join(`
`)}function nE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function iE(r){const e=[];for(const n in r){const s=r[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function rE(r,e){const n={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const c=r.getActiveAttrib(e,a),f=c.name;let u=1;c.type===r.FLOAT_MAT2&&(u=2),c.type===r.FLOAT_MAT3&&(u=3),c.type===r.FLOAT_MAT4&&(u=4),n[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:u}}return n}function Xs(r){return r!==""}function bm(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sE=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(r){return r.replace(sE,aE)}const oE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function aE(r,e){let n=ht[e];if(n===void 0){const s=oE.get(e);if(s!==void 0)n=ht[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return vd(n)}const lE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cm(r){return r.replace(lE,cE)}function cE(r,e,n,s){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function Pm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;return r.isWebGL2&&(e+=`precision ${r.precision} sampler3D;
		precision ${r.precision} sampler2DArray;
		precision ${r.precision} sampler2DShadow;
		precision ${r.precision} samplerCubeShadow;
		precision ${r.precision} sampler2DArrayShadow;
		precision ${r.precision} isampler2D;
		precision ${r.precision} isampler3D;
		precision ${r.precision} isamplerCube;
		precision ${r.precision} isampler2DArray;
		precision ${r.precision} usampler2D;
		precision ${r.precision} usampler3D;
		precision ${r.precision} usamplerCube;
		precision ${r.precision} usampler2DArray;
		`),r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uE(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===eg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===z_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function dE(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case $s:case Ks:e="ENVMAP_TYPE_CUBE";break;case Ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fE(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function hE(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case tg:e="ENVMAP_BLENDING_MULTIPLY";break;case c0:e="ENVMAP_BLENDING_MIX";break;case u0:e="ENVMAP_BLENDING_ADD";break}return e}function pE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:s,maxMip:n}}function mE(r,e,n,s){const a=r.getContext(),c=n.defines;let f=n.vertexShader,u=n.fragmentShader;const h=uE(n),g=dE(n),v=fE(n),p=hE(n),y=pE(n),S=n.isWebGL2?"":tE(n),w=nE(n),A=iE(c),x=a.createProgram();let _,D,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Xs).join(`
`),_.length>0&&(_+=`
`),D=[S,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Xs).join(`
`),D.length>0&&(D+=`
`)):(_=[Pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),D=[S,Pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",n.envMap?"#define "+p:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?ht.tonemapping_pars_fragment:"",n.toneMapping!==Mr?eE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,JM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xs).join(`
`)),f=vd(f),f=bm(f,n),f=Rm(f,n),u=vd(u),u=bm(u,n),u=Rm(u,n),f=Cm(f),u=Cm(u),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[w,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,D=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D);const L=R+_+f,W=R+D+u,F=Tm(a,a.VERTEX_SHADER,L),O=Tm(a,a.FRAGMENT_SHADER,W);a.attachShader(x,F),a.attachShader(x,O),n.index0AttributeName!==void 0?a.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function de(le){if(r.debug.checkShaderErrors){const fe=a.getProgramInfoLog(x).trim(),z=a.getShaderInfoLog(F).trim(),Q=a.getShaderInfoLog(O).trim();let j=!0,oe=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,x,F,O);else{const k=Am(a,F,"vertex"),$=Am(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+le.name+`
Material Type: `+le.type+`

Program Info Log: `+fe+`
`+k+`
`+$)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(z===""||Q==="")&&(oe=!1);oe&&(le.diagnostics={runnable:j,programLog:fe,vertexShader:{log:z,prefix:_},fragmentShader:{log:Q,prefix:D}})}a.deleteShader(F),a.deleteShader(O),Me=new Rl(a,x),E=rE(a,x)}let Me;this.getUniforms=function(){return Me===void 0&&de(this),Me};let E;this.getAttributes=function(){return E===void 0&&de(this),E};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=a.getProgramParameter(x,$M)),I},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=O,this}let gE=0;class vE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new _E(e),n.set(e,s)),s}}class _E{constructor(e){this.id=gE++,this.code=e,this.usedTimes=0}}function xE(r,e,n,s,a,c,f){const u=new vg,h=new vE,g=new Set,v=[],p=a.isWebGL2,y=a.logarithmicDepthBuffer,S=a.vertexTextures;let w=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return g.add(E),E===0?"uv":`uv${E}`}function _(E,I,le,fe,z){const Q=fe.fog,j=z.geometry,oe=E.isMeshStandardMaterial?fe.environment:null,k=(E.isMeshStandardMaterial?n:e).get(E.envMap||oe),$=k&&k.mapping===Ul?k.image.height:null,X=A[E.type];E.precision!==null&&(w=a.getMaxPrecision(E.precision),w!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",w,"instead."));const b=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,H=b!==void 0?b.length:0;let Y=0;j.morphAttributes.position!==void 0&&(Y=1),j.morphAttributes.normal!==void 0&&(Y=2),j.morphAttributes.color!==void 0&&(Y=3);let V,re,ce,Ee;if(X){const wt=Si[X];V=wt.vertexShader,re=wt.fragmentShader}else V=E.vertexShader,re=E.fragmentShader,h.update(E),ce=h.getVertexShaderID(E),Ee=h.getFragmentShaderID(E);const xe=r.getRenderTarget(),_e=z.isInstancedMesh===!0,Ye=z.isBatchedMesh===!0,qe=!!E.map,q=!!E.matcap,At=!!k,Ve=!!E.aoMap,Ke=!!E.lightMap,ze=!!E.bumpMap,xt=!!E.normalMap,rt=!!E.displacementMap,P=!!E.emissiveMap,T=!!E.metalnessMap,te=!!E.roughnessMap,pe=E.anisotropy>0,me=E.clearcoat>0,Se=E.iridescence>0,He=E.sheen>0,Ae=E.transmission>0,Ue=pe&&!!E.anisotropyMap,$e=me&&!!E.clearcoatMap,st=me&&!!E.clearcoatNormalMap,he=me&&!!E.clearcoatRoughnessMap,vt=Se&&!!E.iridescenceMap,ot=Se&&!!E.iridescenceThicknessMap,tt=He&&!!E.sheenColorMap,je=He&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,nt=!!E.specularColorMap,Mt=!!E.specularIntensityMap,bt=Ae&&!!E.transmissionMap,et=Ae&&!!E.thicknessMap,Rt=!!E.gradientMap,N=!!E.alphaMap,we=E.alphaTest>0,ue=!!E.alphaHash,be=!!E.extensions;let Pe=Mr;E.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Pe=r.toneMapping);const at={isWebGL2:p,shaderID:X,shaderType:E.type,shaderName:E.name,vertexShader:V,fragmentShader:re,defines:E.defines,customVertexShaderID:ce,customFragmentShaderID:Ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:w,batching:Ye,instancing:_e,instancingColor:_e&&z.instanceColor!==null,supportsVertexTextures:S,outputColorSpace:xe===null?r.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Xi,alphaToCoverage:!!E.alphaToCoverage,map:qe,matcap:q,envMap:At,envMapMode:At&&k.mapping,envMapCubeUVHeight:$,aoMap:Ve,lightMap:Ke,bumpMap:ze,normalMap:xt,displacementMap:S&&rt,emissiveMap:P,normalMapObjectSpace:xt&&E.normalMapType===b0,normalMapTangentSpace:xt&&E.normalMapType===dg,metalnessMap:T,roughnessMap:te,anisotropy:pe,anisotropyMap:Ue,clearcoat:me,clearcoatMap:$e,clearcoatNormalMap:st,clearcoatRoughnessMap:he,iridescence:Se,iridescenceMap:vt,iridescenceThicknessMap:ot,sheen:He,sheenColorMap:tt,sheenRoughnessMap:je,specularMap:Oe,specularColorMap:nt,specularIntensityMap:Mt,transmission:Ae,transmissionMap:bt,thicknessMap:et,gradientMap:Rt,opaque:E.transparent===!1&&E.blending===js&&E.alphaToCoverage===!1,alphaMap:N,alphaTest:we,alphaHash:ue,combine:E.combine,mapUv:qe&&x(E.map.channel),aoMapUv:Ve&&x(E.aoMap.channel),lightMapUv:Ke&&x(E.lightMap.channel),bumpMapUv:ze&&x(E.bumpMap.channel),normalMapUv:xt&&x(E.normalMap.channel),displacementMapUv:rt&&x(E.displacementMap.channel),emissiveMapUv:P&&x(E.emissiveMap.channel),metalnessMapUv:T&&x(E.metalnessMap.channel),roughnessMapUv:te&&x(E.roughnessMap.channel),anisotropyMapUv:Ue&&x(E.anisotropyMap.channel),clearcoatMapUv:$e&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:st&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:je&&x(E.sheenRoughnessMap.channel),specularMapUv:Oe&&x(E.specularMap.channel),specularColorMapUv:nt&&x(E.specularColorMap.channel),specularIntensityMapUv:Mt&&x(E.specularIntensityMap.channel),transmissionMapUv:bt&&x(E.transmissionMap.channel),thicknessMapUv:et&&x(E.thicknessMap.channel),alphaMapUv:N&&x(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(xt||pe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(qe||N),fog:!!Q,useFog:E.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:Y,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&le.length>0,shadowMapType:r.shadowMap.type,toneMapping:Pe,useLegacyLights:r._useLegacyLights,decodeVideoTexture:qe&&E.map.isVideoTexture===!0&&Ft.getTransfer(E.map.colorSpace)===Ht,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Gi,flipSided:E.side===zn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:be&&E.extensions.derivatives===!0,extensionFragDepth:be&&E.extensions.fragDepth===!0,extensionDrawBuffers:be&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:be&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:be&&E.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:be&&E.extensions.multiDraw===!0&&s.has("WEBGL_multi_draw"),rendererExtensionFragDepth:p||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return at.vertexUv1s=g.has(1),at.vertexUv2s=g.has(2),at.vertexUv3s=g.has(3),g.clear(),at}function D(E){const I=[];if(E.shaderID?I.push(E.shaderID):(I.push(E.customVertexShaderID),I.push(E.customFragmentShaderID)),E.defines!==void 0)for(const le in E.defines)I.push(le),I.push(E.defines[le]);return E.isRawShaderMaterial===!1&&(R(I,E),L(I,E),I.push(r.outputColorSpace)),I.push(E.customProgramCacheKey),I.join()}function R(E,I){E.push(I.precision),E.push(I.outputColorSpace),E.push(I.envMapMode),E.push(I.envMapCubeUVHeight),E.push(I.mapUv),E.push(I.alphaMapUv),E.push(I.lightMapUv),E.push(I.aoMapUv),E.push(I.bumpMapUv),E.push(I.normalMapUv),E.push(I.displacementMapUv),E.push(I.emissiveMapUv),E.push(I.metalnessMapUv),E.push(I.roughnessMapUv),E.push(I.anisotropyMapUv),E.push(I.clearcoatMapUv),E.push(I.clearcoatNormalMapUv),E.push(I.clearcoatRoughnessMapUv),E.push(I.iridescenceMapUv),E.push(I.iridescenceThicknessMapUv),E.push(I.sheenColorMapUv),E.push(I.sheenRoughnessMapUv),E.push(I.specularMapUv),E.push(I.specularColorMapUv),E.push(I.specularIntensityMapUv),E.push(I.transmissionMapUv),E.push(I.thicknessMapUv),E.push(I.combine),E.push(I.fogExp2),E.push(I.sizeAttenuation),E.push(I.morphTargetsCount),E.push(I.morphAttributeCount),E.push(I.numDirLights),E.push(I.numPointLights),E.push(I.numSpotLights),E.push(I.numSpotLightMaps),E.push(I.numHemiLights),E.push(I.numRectAreaLights),E.push(I.numDirLightShadows),E.push(I.numPointLightShadows),E.push(I.numSpotLightShadows),E.push(I.numSpotLightShadowsWithMaps),E.push(I.numLightProbes),E.push(I.shadowMapType),E.push(I.toneMapping),E.push(I.numClippingPlanes),E.push(I.numClipIntersection),E.push(I.depthPacking)}function L(E,I){u.disableAll(),I.isWebGL2&&u.enable(0),I.supportsVertexTextures&&u.enable(1),I.instancing&&u.enable(2),I.instancingColor&&u.enable(3),I.matcap&&u.enable(4),I.envMap&&u.enable(5),I.normalMapObjectSpace&&u.enable(6),I.normalMapTangentSpace&&u.enable(7),I.clearcoat&&u.enable(8),I.iridescence&&u.enable(9),I.alphaTest&&u.enable(10),I.vertexColors&&u.enable(11),I.vertexAlphas&&u.enable(12),I.vertexUv1s&&u.enable(13),I.vertexUv2s&&u.enable(14),I.vertexUv3s&&u.enable(15),I.vertexTangents&&u.enable(16),I.anisotropy&&u.enable(17),I.alphaHash&&u.enable(18),I.batching&&u.enable(19),E.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.skinning&&u.enable(4),I.morphTargets&&u.enable(5),I.morphNormals&&u.enable(6),I.morphColors&&u.enable(7),I.premultipliedAlpha&&u.enable(8),I.shadowMapEnabled&&u.enable(9),I.useLegacyLights&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.alphaToCoverage&&u.enable(20),E.push(u.mask)}function W(E){const I=A[E.type];let le;if(I){const fe=Si[I];le=tx.clone(fe.uniforms)}else le=E.uniforms;return le}function F(E,I){let le;for(let fe=0,z=v.length;fe<z;fe++){const Q=v[fe];if(Q.cacheKey===I){le=Q,++le.usedTimes;break}}return le===void 0&&(le=new mE(r,I,E,c),v.push(le)),le}function O(E){if(--E.usedTimes===0){const I=v.indexOf(E);v[I]=v[v.length-1],v.pop(),E.destroy()}}function de(E){h.remove(E)}function Me(){h.dispose()}return{getParameters:_,getProgramCacheKey:D,getUniforms:W,acquireProgram:F,releaseProgram:O,releaseShaderCache:de,programs:v,dispose:Me}}function yE(){let r=new WeakMap;function e(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function n(c){r.delete(c)}function s(c,f,u){r.get(c)[f]=u}function a(){r=new WeakMap}return{get:e,remove:n,update:s,dispose:a}}function SE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Lm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Dm(){const r=[];let e=0;const n=[],s=[],a=[];function c(){e=0,n.length=0,s.length=0,a.length=0}function f(p,y,S,w,A,x){let _=r[e];return _===void 0?(_={id:p.id,object:p,geometry:y,material:S,groupOrder:w,renderOrder:p.renderOrder,z:A,group:x},r[e]=_):(_.id=p.id,_.object=p,_.geometry=y,_.material=S,_.groupOrder=w,_.renderOrder=p.renderOrder,_.z=A,_.group=x),e++,_}function u(p,y,S,w,A,x){const _=f(p,y,S,w,A,x);S.transmission>0?s.push(_):S.transparent===!0?a.push(_):n.push(_)}function h(p,y,S,w,A,x){const _=f(p,y,S,w,A,x);S.transmission>0?s.unshift(_):S.transparent===!0?a.unshift(_):n.unshift(_)}function g(p,y){n.length>1&&n.sort(p||SE),s.length>1&&s.sort(y||Lm),a.length>1&&a.sort(y||Lm)}function v(){for(let p=e,y=r.length;p<y;p++){const S=r[p];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:s,transparent:a,init:c,push:u,unshift:h,finish:v,sort:g}}function ME(){let r=new WeakMap;function e(s,a){const c=r.get(s);let f;return c===void 0?(f=new Dm,r.set(s,[f])):a>=c.length?(f=new Dm,c.push(f)):f=c[a],f}function n(){r=new WeakMap}return{get:e,dispose:n}}function EE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new St};break;case"SpotLight":n={position:new J,direction:new J,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new St,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new St,groundColor:new St};break;case"RectAreaLight":n={color:new St,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=n,n}}}function wE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let TE=0;function AE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bE(r,e){const n=new EE,s=wE(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)a.probe.push(new J);const c=new J,f=new Jt,u=new Jt;function h(v,p){let y=0,S=0,w=0;for(let le=0;le<9;le++)a.probe[le].set(0,0,0);let A=0,x=0,_=0,D=0,R=0,L=0,W=0,F=0,O=0,de=0,Me=0;v.sort(AE);const E=p===!0?Math.PI:1;for(let le=0,fe=v.length;le<fe;le++){const z=v[le],Q=z.color,j=z.intensity,oe=z.distance,k=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)y+=Q.r*j*E,S+=Q.g*j*E,w+=Q.b*j*E;else if(z.isLightProbe){for(let $=0;$<9;$++)a.probe[$].addScaledVector(z.sh.coefficients[$],j);Me++}else if(z.isDirectionalLight){const $=n.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity*E),z.castShadow){const X=z.shadow,b=s.get(z);b.shadowBias=X.bias,b.shadowNormalBias=X.normalBias,b.shadowRadius=X.radius,b.shadowMapSize=X.mapSize,a.directionalShadow[A]=b,a.directionalShadowMap[A]=k,a.directionalShadowMatrix[A]=z.shadow.matrix,L++}a.directional[A]=$,A++}else if(z.isSpotLight){const $=n.get(z);$.position.setFromMatrixPosition(z.matrixWorld),$.color.copy(Q).multiplyScalar(j*E),$.distance=oe,$.coneCos=Math.cos(z.angle),$.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),$.decay=z.decay,a.spot[_]=$;const X=z.shadow;if(z.map&&(a.spotLightMap[O]=z.map,O++,X.updateMatrices(z),z.castShadow&&de++),a.spotLightMatrix[_]=X.matrix,z.castShadow){const b=s.get(z);b.shadowBias=X.bias,b.shadowNormalBias=X.normalBias,b.shadowRadius=X.radius,b.shadowMapSize=X.mapSize,a.spotShadow[_]=b,a.spotShadowMap[_]=k,F++}_++}else if(z.isRectAreaLight){const $=n.get(z);$.color.copy(Q).multiplyScalar(j),$.halfWidth.set(z.width*.5,0,0),$.halfHeight.set(0,z.height*.5,0),a.rectArea[D]=$,D++}else if(z.isPointLight){const $=n.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity*E),$.distance=z.distance,$.decay=z.decay,z.castShadow){const X=z.shadow,b=s.get(z);b.shadowBias=X.bias,b.shadowNormalBias=X.normalBias,b.shadowRadius=X.radius,b.shadowMapSize=X.mapSize,b.shadowCameraNear=X.camera.near,b.shadowCameraFar=X.camera.far,a.pointShadow[x]=b,a.pointShadowMap[x]=k,a.pointShadowMatrix[x]=z.shadow.matrix,W++}a.point[x]=$,x++}else if(z.isHemisphereLight){const $=n.get(z);$.skyColor.copy(z.color).multiplyScalar(j*E),$.groundColor.copy(z.groundColor).multiplyScalar(j*E),a.hemi[R]=$,R++}}D>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Re.LTC_FLOAT_1,a.rectAreaLTC2=Re.LTC_FLOAT_2):(a.rectAreaLTC1=Re.LTC_HALF_1,a.rectAreaLTC2=Re.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Re.LTC_FLOAT_1,a.rectAreaLTC2=Re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Re.LTC_HALF_1,a.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=y,a.ambient[1]=S,a.ambient[2]=w;const I=a.hash;(I.directionalLength!==A||I.pointLength!==x||I.spotLength!==_||I.rectAreaLength!==D||I.hemiLength!==R||I.numDirectionalShadows!==L||I.numPointShadows!==W||I.numSpotShadows!==F||I.numSpotMaps!==O||I.numLightProbes!==Me)&&(a.directional.length=A,a.spot.length=_,a.rectArea.length=D,a.point.length=x,a.hemi.length=R,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=W,a.pointShadowMap.length=W,a.spotShadow.length=F,a.spotShadowMap.length=F,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=W,a.spotLightMatrix.length=F+O-de,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=de,a.numLightProbes=Me,I.directionalLength=A,I.pointLength=x,I.spotLength=_,I.rectAreaLength=D,I.hemiLength=R,I.numDirectionalShadows=L,I.numPointShadows=W,I.numSpotShadows=F,I.numSpotMaps=O,I.numLightProbes=Me,a.version=TE++)}function g(v,p){let y=0,S=0,w=0,A=0,x=0;const _=p.matrixWorldInverse;for(let D=0,R=v.length;D<R;D++){const L=v[D];if(L.isDirectionalLight){const W=a.directional[y];W.direction.setFromMatrixPosition(L.matrixWorld),c.setFromMatrixPosition(L.target.matrixWorld),W.direction.sub(c),W.direction.transformDirection(_),y++}else if(L.isSpotLight){const W=a.spot[w];W.position.setFromMatrixPosition(L.matrixWorld),W.position.applyMatrix4(_),W.direction.setFromMatrixPosition(L.matrixWorld),c.setFromMatrixPosition(L.target.matrixWorld),W.direction.sub(c),W.direction.transformDirection(_),w++}else if(L.isRectAreaLight){const W=a.rectArea[A];W.position.setFromMatrixPosition(L.matrixWorld),W.position.applyMatrix4(_),u.identity(),f.copy(L.matrixWorld),f.premultiply(_),u.extractRotation(f),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),W.halfWidth.applyMatrix4(u),W.halfHeight.applyMatrix4(u),A++}else if(L.isPointLight){const W=a.point[S];W.position.setFromMatrixPosition(L.matrixWorld),W.position.applyMatrix4(_),S++}else if(L.isHemisphereLight){const W=a.hemi[x];W.direction.setFromMatrixPosition(L.matrixWorld),W.direction.transformDirection(_),x++}}}return{setup:h,setupView:g,state:a}}function Nm(r,e){const n=new bE(r,e),s=[],a=[];function c(){s.length=0,a.length=0}function f(p){s.push(p)}function u(p){a.push(p)}function h(p){n.setup(s,p)}function g(p){n.setupView(s,p)}return{init:c,state:{lightsArray:s,shadowsArray:a,lights:n},setupLights:h,setupLightsView:g,pushLight:f,pushShadow:u}}function RE(r,e){let n=new WeakMap;function s(c,f=0){const u=n.get(c);let h;return u===void 0?(h=new Nm(r,e),n.set(c,[h])):f>=u.length?(h=new Nm(r,e),u.push(h)):h=u[f],h}function a(){n=new WeakMap}return{get:s,dispose:a}}class CE extends eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PE extends eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const LE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DE=`uniform sampler2D shadow_pass;
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
}`;function NE(r,e,n){let s=new Rd;const a=new Et,c=new Et,f=new Wt,u=new CE({depthPacking:A0}),h=new PE,g={},v=n.maxTextureSize,p={[wr]:zn,[zn]:wr,[Gi]:Gi},y=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:LE,fragmentShader:DE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const w=new Ar;w.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ei(w,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eg;let _=this.type;this.render=function(F,O,de){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const Me=r.getRenderTarget(),E=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),le=r.state;le.setBlending(Sr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const fe=_!==Hi&&this.type===Hi,z=_===Hi&&this.type!==Hi;for(let Q=0,j=F.length;Q<j;Q++){const oe=F[Q],k=oe.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const $=k.getFrameExtents();if(a.multiply($),c.copy(k.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(c.x=Math.floor(v/$.x),a.x=c.x*$.x,k.mapSize.x=c.x),a.y>v&&(c.y=Math.floor(v/$.y),a.y=c.y*$.y,k.mapSize.y=c.y)),k.map===null||fe===!0||z===!0){const b=this.type!==Hi?{minFilter:An,magFilter:An}:{};k.map!==null&&k.map.dispose(),k.map=new ns(a.x,a.y,b),k.map.texture.name=oe.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const X=k.getViewportCount();for(let b=0;b<X;b++){const H=k.getViewport(b);f.set(c.x*H.x,c.y*H.y,c.x*H.z,c.y*H.w),le.viewport(f),k.updateMatrices(oe,b),s=k.getFrustum(),L(O,de,k.camera,oe,this.type)}k.isPointLightShadow!==!0&&this.type===Hi&&D(k,de),k.needsUpdate=!1}_=this.type,x.needsUpdate=!1,r.setRenderTarget(Me,E,I)};function D(F,O){const de=e.update(A);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ns(a.x,a.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(O,null,de,y,A,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(O,null,de,S,A,null)}function R(F,O,de,Me){let E=null;const I=de.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(I!==void 0)E=I;else if(E=de.isPointLight===!0?h:u,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const le=E.uuid,fe=O.uuid;let z=g[le];z===void 0&&(z={},g[le]=z);let Q=z[fe];Q===void 0&&(Q=E.clone(),z[fe]=Q,O.addEventListener("dispose",W)),E=Q}if(E.visible=O.visible,E.wireframe=O.wireframe,Me===Hi?E.side=O.shadowSide!==null?O.shadowSide:O.side:E.side=O.shadowSide!==null?O.shadowSide:p[O.side],E.alphaMap=O.alphaMap,E.alphaTest=O.alphaTest,E.map=O.map,E.clipShadows=O.clipShadows,E.clippingPlanes=O.clippingPlanes,E.clipIntersection=O.clipIntersection,E.displacementMap=O.displacementMap,E.displacementScale=O.displacementScale,E.displacementBias=O.displacementBias,E.wireframeLinewidth=O.wireframeLinewidth,E.linewidth=O.linewidth,de.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const le=r.properties.get(E);le.light=de}return E}function L(F,O,de,Me,E){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&E===Hi)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,F.matrixWorld);const fe=e.update(F),z=F.material;if(Array.isArray(z)){const Q=fe.groups;for(let j=0,oe=Q.length;j<oe;j++){const k=Q[j],$=z[k.materialIndex];if($&&$.visible){const X=R(F,$,Me,E);F.onBeforeShadow(r,F,O,de,fe,X,k),r.renderBufferDirect(de,null,fe,X,F,k),F.onAfterShadow(r,F,O,de,fe,X,k)}}}else if(z.visible){const Q=R(F,z,Me,E);F.onBeforeShadow(r,F,O,de,fe,Q,null),r.renderBufferDirect(de,null,fe,Q,F,null),F.onAfterShadow(r,F,O,de,fe,Q,null)}}const le=F.children;for(let fe=0,z=le.length;fe<z;fe++)L(le[fe],O,de,Me,E)}function W(F){F.target.removeEventListener("dispose",W);for(const de in g){const Me=g[de],E=F.target.uuid;E in Me&&(Me[E].dispose(),delete Me[E])}}}function IE(r,e,n){const s=n.isWebGL2;function a(){let N=!1;const we=new Wt;let ue=null;const be=new Wt(0,0,0,0);return{setMask:function(Pe){ue!==Pe&&!N&&(r.colorMask(Pe,Pe,Pe,Pe),ue=Pe)},setLocked:function(Pe){N=Pe},setClear:function(Pe,at,wt,pt,It){It===!0&&(Pe*=pt,at*=pt,wt*=pt),we.set(Pe,at,wt,pt),be.equals(we)===!1&&(r.clearColor(Pe,at,wt,pt),be.copy(we))},reset:function(){N=!1,ue=null,be.set(-1,0,0,0)}}}function c(){let N=!1,we=null,ue=null,be=null;return{setTest:function(Pe){Pe?_e(r.DEPTH_TEST):Ye(r.DEPTH_TEST)},setMask:function(Pe){we!==Pe&&!N&&(r.depthMask(Pe),we=Pe)},setFunc:function(Pe){if(ue!==Pe){switch(Pe){case n0:r.depthFunc(r.NEVER);break;case i0:r.depthFunc(r.ALWAYS);break;case r0:r.depthFunc(r.LESS);break;case Cl:r.depthFunc(r.LEQUAL);break;case s0:r.depthFunc(r.EQUAL);break;case o0:r.depthFunc(r.GEQUAL);break;case a0:r.depthFunc(r.GREATER);break;case l0:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ue=Pe}},setLocked:function(Pe){N=Pe},setClear:function(Pe){be!==Pe&&(r.clearDepth(Pe),be=Pe)},reset:function(){N=!1,we=null,ue=null,be=null}}}function f(){let N=!1,we=null,ue=null,be=null,Pe=null,at=null,wt=null,pt=null,It=null;return{setTest:function(_t){N||(_t?_e(r.STENCIL_TEST):Ye(r.STENCIL_TEST))},setMask:function(_t){we!==_t&&!N&&(r.stencilMask(_t),we=_t)},setFunc:function(_t,Dt,Ut){(ue!==_t||be!==Dt||Pe!==Ut)&&(r.stencilFunc(_t,Dt,Ut),ue=_t,be=Dt,Pe=Ut)},setOp:function(_t,Dt,Ut){(at!==_t||wt!==Dt||pt!==Ut)&&(r.stencilOp(_t,Dt,Ut),at=_t,wt=Dt,pt=Ut)},setLocked:function(_t){N=_t},setClear:function(_t){It!==_t&&(r.clearStencil(_t),It=_t)},reset:function(){N=!1,we=null,ue=null,be=null,Pe=null,at=null,wt=null,pt=null,It=null}}}const u=new a,h=new c,g=new f,v=new WeakMap,p=new WeakMap;let y={},S={},w=new WeakMap,A=[],x=null,_=!1,D=null,R=null,L=null,W=null,F=null,O=null,de=null,Me=new St(0,0,0),E=0,I=!1,le=null,fe=null,z=null,Q=null,j=null;const oe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,$=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=$>=2);let b=null,H={};const Y=r.getParameter(r.SCISSOR_BOX),V=r.getParameter(r.VIEWPORT),re=new Wt().fromArray(Y),ce=new Wt().fromArray(V);function Ee(N,we,ue,be){const Pe=new Uint8Array(4),at=r.createTexture();r.bindTexture(N,at),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let wt=0;wt<ue;wt++)s&&(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)?r.texImage3D(we,0,r.RGBA,1,1,be,0,r.RGBA,r.UNSIGNED_BYTE,Pe):r.texImage2D(we+wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pe);return at}const xe={};xe[r.TEXTURE_2D]=Ee(r.TEXTURE_2D,r.TEXTURE_2D,1),xe[r.TEXTURE_CUBE_MAP]=Ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(xe[r.TEXTURE_2D_ARRAY]=Ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xe[r.TEXTURE_3D]=Ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),h.setClear(1),g.setClear(0),_e(r.DEPTH_TEST),h.setFunc(Cl),rt(!1),P(fp),_e(r.CULL_FACE),ze(Sr);function _e(N){y[N]!==!0&&(r.enable(N),y[N]=!0)}function Ye(N){y[N]!==!1&&(r.disable(N),y[N]=!1)}function qe(N,we){return S[N]!==we?(r.bindFramebuffer(N,we),S[N]=we,s&&(N===r.DRAW_FRAMEBUFFER&&(S[r.FRAMEBUFFER]=we),N===r.FRAMEBUFFER&&(S[r.DRAW_FRAMEBUFFER]=we)),!0):!1}function q(N,we){let ue=A,be=!1;if(N)if(ue=w.get(we),ue===void 0&&(ue=[],w.set(we,ue)),N.isWebGLMultipleRenderTargets){const Pe=N.texture;if(ue.length!==Pe.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let at=0,wt=Pe.length;at<wt;at++)ue[at]=r.COLOR_ATTACHMENT0+at;ue.length=Pe.length,be=!0}}else ue[0]!==r.COLOR_ATTACHMENT0&&(ue[0]=r.COLOR_ATTACHMENT0,be=!0);else ue[0]!==r.BACK&&(ue[0]=r.BACK,be=!0);be&&(n.isWebGL2?r.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function At(N){return x!==N?(r.useProgram(N),x=N,!0):!1}const Ve={[Kr]:r.FUNC_ADD,[H_]:r.FUNC_SUBTRACT,[G_]:r.FUNC_REVERSE_SUBTRACT};if(s)Ve[gp]=r.MIN,Ve[vp]=r.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Ve[gp]=N.MIN_EXT,Ve[vp]=N.MAX_EXT)}const Ke={[V_]:r.ZERO,[W_]:r.ONE,[X_]:r.SRC_COLOR,[ld]:r.SRC_ALPHA,[Z_]:r.SRC_ALPHA_SATURATE,[$_]:r.DST_COLOR,[Y_]:r.DST_ALPHA,[j_]:r.ONE_MINUS_SRC_COLOR,[cd]:r.ONE_MINUS_SRC_ALPHA,[K_]:r.ONE_MINUS_DST_COLOR,[q_]:r.ONE_MINUS_DST_ALPHA,[Q_]:r.CONSTANT_COLOR,[J_]:r.ONE_MINUS_CONSTANT_COLOR,[e0]:r.CONSTANT_ALPHA,[t0]:r.ONE_MINUS_CONSTANT_ALPHA};function ze(N,we,ue,be,Pe,at,wt,pt,It,_t){if(N===Sr){_===!0&&(Ye(r.BLEND),_=!1);return}if(_===!1&&(_e(r.BLEND),_=!0),N!==B_){if(N!==D||_t!==I){if((R!==Kr||F!==Kr)&&(r.blendEquation(r.FUNC_ADD),R=Kr,F=Kr),_t)switch(N){case js:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hp:r.blendFunc(r.ONE,r.ONE);break;case pp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case mp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case js:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hp:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case pp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case mp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}L=null,W=null,O=null,de=null,Me.set(0,0,0),E=0,D=N,I=_t}return}Pe=Pe||we,at=at||ue,wt=wt||be,(we!==R||Pe!==F)&&(r.blendEquationSeparate(Ve[we],Ve[Pe]),R=we,F=Pe),(ue!==L||be!==W||at!==O||wt!==de)&&(r.blendFuncSeparate(Ke[ue],Ke[be],Ke[at],Ke[wt]),L=ue,W=be,O=at,de=wt),(pt.equals(Me)===!1||It!==E)&&(r.blendColor(pt.r,pt.g,pt.b,It),Me.copy(pt),E=It),D=N,I=!1}function xt(N,we){N.side===Gi?Ye(r.CULL_FACE):_e(r.CULL_FACE);let ue=N.side===zn;we&&(ue=!ue),rt(ue),N.blending===js&&N.transparent===!1?ze(Sr):ze(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),h.setFunc(N.depthFunc),h.setTest(N.depthTest),h.setMask(N.depthWrite),u.setMask(N.colorWrite);const be=N.stencilWrite;g.setTest(be),be&&(g.setMask(N.stencilWriteMask),g.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),g.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),te(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):Ye(r.SAMPLE_ALPHA_TO_COVERAGE)}function rt(N){le!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),le=N)}function P(N){N!==O_?(_e(r.CULL_FACE),N!==fe&&(N===fp?r.cullFace(r.BACK):N===k_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ye(r.CULL_FACE),fe=N}function T(N){N!==z&&(k&&r.lineWidth(N),z=N)}function te(N,we,ue){N?(_e(r.POLYGON_OFFSET_FILL),(Q!==we||j!==ue)&&(r.polygonOffset(we,ue),Q=we,j=ue)):Ye(r.POLYGON_OFFSET_FILL)}function pe(N){N?_e(r.SCISSOR_TEST):Ye(r.SCISSOR_TEST)}function me(N){N===void 0&&(N=r.TEXTURE0+oe-1),b!==N&&(r.activeTexture(N),b=N)}function Se(N,we,ue){ue===void 0&&(b===null?ue=r.TEXTURE0+oe-1:ue=b);let be=H[ue];be===void 0&&(be={type:void 0,texture:void 0},H[ue]=be),(be.type!==N||be.texture!==we)&&(b!==ue&&(r.activeTexture(ue),b=ue),r.bindTexture(N,we||xe[N]),be.type=N,be.texture=we)}function He(){const N=H[b];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Ae(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $e(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function je(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(N){re.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),re.copy(N))}function Mt(N){ce.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),ce.copy(N))}function bt(N,we){let ue=p.get(we);ue===void 0&&(ue=new WeakMap,p.set(we,ue));let be=ue.get(N);be===void 0&&(be=r.getUniformBlockIndex(we,N.name),ue.set(N,be))}function et(N,we){const be=p.get(we).get(N);v.get(we)!==be&&(r.uniformBlockBinding(we,be,N.__bindingPointIndex),v.set(we,be))}function Rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),s===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),y={},b=null,H={},S={},w=new WeakMap,A=[],x=null,_=!1,D=null,R=null,L=null,W=null,F=null,O=null,de=null,Me=new St(0,0,0),E=0,I=!1,le=null,fe=null,z=null,Q=null,j=null,re.set(0,0,r.canvas.width,r.canvas.height),ce.set(0,0,r.canvas.width,r.canvas.height),u.reset(),h.reset(),g.reset()}return{buffers:{color:u,depth:h,stencil:g},enable:_e,disable:Ye,bindFramebuffer:qe,drawBuffers:q,useProgram:At,setBlending:ze,setMaterial:xt,setFlipSided:rt,setCullFace:P,setLineWidth:T,setPolygonOffset:te,setScissorTest:pe,activeTexture:me,bindTexture:Se,unbindTexture:He,compressedTexImage2D:Ae,compressedTexImage3D:Ue,texImage2D:je,texImage3D:Oe,updateUBOMapping:bt,uniformBlockBinding:et,texStorage2D:ot,texStorage3D:tt,texSubImage2D:$e,texSubImage3D:st,compressedTexSubImage2D:he,compressedTexSubImage3D:vt,scissor:nt,viewport:Mt,reset:Rt}}function UE(r,e,n,s,a,c,f){const u=a.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let p;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,T){return S?new OffscreenCanvas(P,T):Il("canvas")}function A(P,T,te,pe){let me=1;if((P.width>pe||P.height>pe)&&(me=pe/Math.max(P.width,P.height)),me<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const Se=T?gd:Math.floor,He=Se(me*P.width),Ae=Se(me*P.height);p===void 0&&(p=w(He,Ae));const Ue=te?w(He,Ae):p;return Ue.width=He,Ue.height=Ae,Ue.getContext("2d").drawImage(P,0,0,He,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+He+"x"+Ae+")."),Ue}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function x(P){return Yp(P.width)&&Yp(P.height)}function _(P){return u?!1:P.wrapS!==fi||P.wrapT!==fi||P.minFilter!==An&&P.minFilter!==kn}function D(P,T){return P.generateMipmaps&&T&&P.minFilter!==An&&P.minFilter!==kn}function R(P){r.generateMipmap(P)}function L(P,T,te,pe,me=!1){if(u===!1)return T;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Se=T;if(T===r.RED&&(te===r.FLOAT&&(Se=r.R32F),te===r.HALF_FLOAT&&(Se=r.R16F),te===r.UNSIGNED_BYTE&&(Se=r.R8)),T===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(Se=r.R8UI),te===r.UNSIGNED_SHORT&&(Se=r.R16UI),te===r.UNSIGNED_INT&&(Se=r.R32UI),te===r.BYTE&&(Se=r.R8I),te===r.SHORT&&(Se=r.R16I),te===r.INT&&(Se=r.R32I)),T===r.RG&&(te===r.FLOAT&&(Se=r.RG32F),te===r.HALF_FLOAT&&(Se=r.RG16F),te===r.UNSIGNED_BYTE&&(Se=r.RG8)),T===r.RGBA){const He=me?Pl:Ft.getTransfer(pe);te===r.FLOAT&&(Se=r.RGBA32F),te===r.HALF_FLOAT&&(Se=r.RGBA16F),te===r.UNSIGNED_BYTE&&(Se=He===Ht?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT_4_4_4_4&&(Se=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(Se=r.RGB5_A1)}return(Se===r.R16F||Se===r.R32F||Se===r.RG16F||Se===r.RG32F||Se===r.RGBA16F||Se===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function W(P,T,te){return D(P,te)===!0||P.isFramebufferTexture&&P.minFilter!==An&&P.minFilter!==kn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function F(P){return P===An||P===_p||P===zo?r.NEAREST:r.LINEAR}function O(P){const T=P.target;T.removeEventListener("dispose",O),Me(T),T.isVideoTexture&&v.delete(T)}function de(P){const T=P.target;T.removeEventListener("dispose",de),I(T)}function Me(P){const T=s.get(P);if(T.__webglInit===void 0)return;const te=P.source,pe=y.get(te);if(pe){const me=pe[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&E(P),Object.keys(pe).length===0&&y.delete(te)}s.remove(P)}function E(P){const T=s.get(P);r.deleteTexture(T.__webglTexture);const te=P.source,pe=y.get(te);delete pe[T.__cacheKey],f.memory.textures--}function I(P){const T=P.texture,te=s.get(P),pe=s.get(T);if(pe.__webglTexture!==void 0&&(r.deleteTexture(pe.__webglTexture),f.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(te.__webglFramebuffer[me]))for(let Se=0;Se<te.__webglFramebuffer[me].length;Se++)r.deleteFramebuffer(te.__webglFramebuffer[me][Se]);else r.deleteFramebuffer(te.__webglFramebuffer[me]);te.__webglDepthbuffer&&r.deleteRenderbuffer(te.__webglDepthbuffer[me])}else{if(Array.isArray(te.__webglFramebuffer))for(let me=0;me<te.__webglFramebuffer.length;me++)r.deleteFramebuffer(te.__webglFramebuffer[me]);else r.deleteFramebuffer(te.__webglFramebuffer);if(te.__webglDepthbuffer&&r.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&r.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let me=0;me<te.__webglColorRenderbuffer.length;me++)te.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(te.__webglColorRenderbuffer[me]);te.__webglDepthRenderbuffer&&r.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let me=0,Se=T.length;me<Se;me++){const He=s.get(T[me]);He.__webglTexture&&(r.deleteTexture(He.__webglTexture),f.memory.textures--),s.remove(T[me])}s.remove(T),s.remove(P)}let le=0;function fe(){le=0}function z(){const P=le;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),le+=1,P}function Q(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function j(P,T){const te=s.get(P);if(P.isVideoTexture&&xt(P),P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(te,P,T);return}}n.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+T)}function oe(P,T){const te=s.get(P);if(P.version>0&&te.__version!==P.version){re(te,P,T);return}n.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+T)}function k(P,T){const te=s.get(P);if(P.version>0&&te.__version!==P.version){re(te,P,T);return}n.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+T)}function $(P,T){const te=s.get(P);if(P.version>0&&te.__version!==P.version){ce(te,P,T);return}n.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+T)}const X={[fd]:r.REPEAT,[fi]:r.CLAMP_TO_EDGE,[hd]:r.MIRRORED_REPEAT},b={[An]:r.NEAREST,[_p]:r.NEAREST_MIPMAP_NEAREST,[zo]:r.NEAREST_MIPMAP_LINEAR,[kn]:r.LINEAR,[wu]:r.LINEAR_MIPMAP_NEAREST,[Qr]:r.LINEAR_MIPMAP_LINEAR},H={[R0]:r.NEVER,[I0]:r.ALWAYS,[C0]:r.LESS,[fg]:r.LEQUAL,[P0]:r.EQUAL,[N0]:r.GEQUAL,[L0]:r.GREATER,[D0]:r.NOTEQUAL};function Y(P,T,te){if(T.type===Vi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===kn||T.magFilter===wu||T.magFilter===zo||T.magFilter===Qr||T.minFilter===kn||T.minFilter===wu||T.minFilter===zo||T.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),te?(r.texParameteri(P,r.TEXTURE_WRAP_S,X[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,X[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,X[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,b[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,b[T.minFilter])):(r.texParameteri(P,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(P,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==fi||T.wrapT!==fi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,r.TEXTURE_MAG_FILTER,F(T.magFilter)),r.texParameteri(P,r.TEXTURE_MIN_FILTER,F(T.minFilter)),T.minFilter!==An&&T.minFilter!==kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,H[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const pe=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===An||T.minFilter!==zo&&T.minFilter!==Qr||T.type===Vi&&e.has("OES_texture_float_linear")===!1||u===!1&&T.type===jo&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||s.get(T).__currentAnisotropy)&&(r.texParameterf(P,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy)}}function V(P,T){let te=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",O));const pe=T.source;let me=y.get(pe);me===void 0&&(me={},y.set(pe,me));const Se=Q(T);if(Se!==P.__cacheKey){me[Se]===void 0&&(me[Se]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,te=!0),me[Se].usedTimes++;const He=me[P.__cacheKey];He!==void 0&&(me[P.__cacheKey].usedTimes--,He.usedTimes===0&&E(T)),P.__cacheKey=Se,P.__webglTexture=me[Se].texture}return te}function re(P,T,te){let pe=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=r.TEXTURE_3D);const me=V(P,T),Se=T.source;n.bindTexture(pe,P.__webglTexture,r.TEXTURE0+te);const He=s.get(Se);if(Se.version!==He.__version||me===!0){n.activeTexture(r.TEXTURE0+te);const Ae=Ft.getPrimaries(Ft.workingColorSpace),Ue=T.colorSpace===ni?null:Ft.getPrimaries(T.colorSpace),$e=T.colorSpace===ni||Ae===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const st=_(T)&&x(T.image)===!1;let he=A(T.image,st,!1,a.maxTextureSize);he=rt(T,he);const vt=x(he)||u,ot=c.convert(T.format,T.colorSpace);let tt=c.convert(T.type),je=L(T.internalFormat,ot,tt,T.colorSpace,T.isVideoTexture);Y(pe,T,vt);let Oe;const nt=T.mipmaps,Mt=u&&T.isVideoTexture!==!0&&je!==cg,bt=He.__version===void 0||me===!0,et=Se.dataReady,Rt=W(T,he,vt);if(T.isDepthTexture)je=r.DEPTH_COMPONENT,u?T.type===Vi?je=r.DEPTH_COMPONENT32F:T.type===yr?je=r.DEPTH_COMPONENT24:T.type===Jr?je=r.DEPTH24_STENCIL8:je=r.DEPTH_COMPONENT16:T.type===Vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===es&&je===r.DEPTH_COMPONENT&&T.type!==Td&&T.type!==yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=yr,tt=c.convert(T.type)),T.format===Zs&&je===r.DEPTH_COMPONENT&&(je=r.DEPTH_STENCIL,T.type!==Jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Jr,tt=c.convert(T.type))),bt&&(Mt?n.texStorage2D(r.TEXTURE_2D,1,je,he.width,he.height):n.texImage2D(r.TEXTURE_2D,0,je,he.width,he.height,0,ot,tt,null));else if(T.isDataTexture)if(nt.length>0&&vt){Mt&&bt&&n.texStorage2D(r.TEXTURE_2D,Rt,je,nt[0].width,nt[0].height);for(let N=0,we=nt.length;N<we;N++)Oe=nt[N],Mt?et&&n.texSubImage2D(r.TEXTURE_2D,N,0,0,Oe.width,Oe.height,ot,tt,Oe.data):n.texImage2D(r.TEXTURE_2D,N,je,Oe.width,Oe.height,0,ot,tt,Oe.data);T.generateMipmaps=!1}else Mt?(bt&&n.texStorage2D(r.TEXTURE_2D,Rt,je,he.width,he.height),et&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,he.width,he.height,ot,tt,he.data)):n.texImage2D(r.TEXTURE_2D,0,je,he.width,he.height,0,ot,tt,he.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Mt&&bt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,je,nt[0].width,nt[0].height,he.depth);for(let N=0,we=nt.length;N<we;N++)Oe=nt[N],T.format!==hi?ot!==null?Mt?et&&n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,N,0,0,0,Oe.width,Oe.height,he.depth,ot,Oe.data,0,0):n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,N,je,Oe.width,Oe.height,he.depth,0,Oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?et&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,N,0,0,0,Oe.width,Oe.height,he.depth,ot,tt,Oe.data):n.texImage3D(r.TEXTURE_2D_ARRAY,N,je,Oe.width,Oe.height,he.depth,0,ot,tt,Oe.data)}else{Mt&&bt&&n.texStorage2D(r.TEXTURE_2D,Rt,je,nt[0].width,nt[0].height);for(let N=0,we=nt.length;N<we;N++)Oe=nt[N],T.format!==hi?ot!==null?Mt?et&&n.compressedTexSubImage2D(r.TEXTURE_2D,N,0,0,Oe.width,Oe.height,ot,Oe.data):n.compressedTexImage2D(r.TEXTURE_2D,N,je,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?et&&n.texSubImage2D(r.TEXTURE_2D,N,0,0,Oe.width,Oe.height,ot,tt,Oe.data):n.texImage2D(r.TEXTURE_2D,N,je,Oe.width,Oe.height,0,ot,tt,Oe.data)}else if(T.isDataArrayTexture)Mt?(bt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,je,he.width,he.height,he.depth),et&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ot,tt,he.data)):n.texImage3D(r.TEXTURE_2D_ARRAY,0,je,he.width,he.height,he.depth,0,ot,tt,he.data);else if(T.isData3DTexture)Mt?(bt&&n.texStorage3D(r.TEXTURE_3D,Rt,je,he.width,he.height,he.depth),et&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ot,tt,he.data)):n.texImage3D(r.TEXTURE_3D,0,je,he.width,he.height,he.depth,0,ot,tt,he.data);else if(T.isFramebufferTexture){if(bt)if(Mt)n.texStorage2D(r.TEXTURE_2D,Rt,je,he.width,he.height);else{let N=he.width,we=he.height;for(let ue=0;ue<Rt;ue++)n.texImage2D(r.TEXTURE_2D,ue,je,N,we,0,ot,tt,null),N>>=1,we>>=1}}else if(nt.length>0&&vt){Mt&&bt&&n.texStorage2D(r.TEXTURE_2D,Rt,je,nt[0].width,nt[0].height);for(let N=0,we=nt.length;N<we;N++)Oe=nt[N],Mt?et&&n.texSubImage2D(r.TEXTURE_2D,N,0,0,ot,tt,Oe):n.texImage2D(r.TEXTURE_2D,N,je,ot,tt,Oe);T.generateMipmaps=!1}else Mt?(bt&&n.texStorage2D(r.TEXTURE_2D,Rt,je,he.width,he.height),et&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,ot,tt,he)):n.texImage2D(r.TEXTURE_2D,0,je,ot,tt,he);D(T,vt)&&R(pe),He.__version=Se.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ce(P,T,te){if(T.image.length!==6)return;const pe=V(P,T),me=T.source;n.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+te);const Se=s.get(me);if(me.version!==Se.__version||pe===!0){n.activeTexture(r.TEXTURE0+te);const He=Ft.getPrimaries(Ft.workingColorSpace),Ae=T.colorSpace===ni?null:Ft.getPrimaries(T.colorSpace),Ue=T.colorSpace===ni||He===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const $e=T.isCompressedTexture||T.image[0].isCompressedTexture,st=T.image[0]&&T.image[0].isDataTexture,he=[];for(let N=0;N<6;N++)!$e&&!st?he[N]=A(T.image[N],!1,!0,a.maxCubemapSize):he[N]=st?T.image[N].image:T.image[N],he[N]=rt(T,he[N]);const vt=he[0],ot=x(vt)||u,tt=c.convert(T.format,T.colorSpace),je=c.convert(T.type),Oe=L(T.internalFormat,tt,je,T.colorSpace),nt=u&&T.isVideoTexture!==!0,Mt=Se.__version===void 0||pe===!0,bt=me.dataReady;let et=W(T,vt,ot);Y(r.TEXTURE_CUBE_MAP,T,ot);let Rt;if($e){nt&&Mt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,et,Oe,vt.width,vt.height);for(let N=0;N<6;N++){Rt=he[N].mipmaps;for(let we=0;we<Rt.length;we++){const ue=Rt[we];T.format!==hi?tt!==null?nt?bt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,we,0,0,ue.width,ue.height,tt,ue.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,we,Oe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?bt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,we,0,0,ue.width,ue.height,tt,je,ue.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,we,Oe,ue.width,ue.height,0,tt,je,ue.data)}}}else{Rt=T.mipmaps,nt&&Mt&&(Rt.length>0&&et++,n.texStorage2D(r.TEXTURE_CUBE_MAP,et,Oe,he[0].width,he[0].height));for(let N=0;N<6;N++)if(st){nt?bt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,he[N].width,he[N].height,tt,je,he[N].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Oe,he[N].width,he[N].height,0,tt,je,he[N].data);for(let we=0;we<Rt.length;we++){const be=Rt[we].image[N].image;nt?bt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,we+1,0,0,be.width,be.height,tt,je,be.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,we+1,Oe,be.width,be.height,0,tt,je,be.data)}}else{nt?bt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,tt,je,he[N]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Oe,tt,je,he[N]);for(let we=0;we<Rt.length;we++){const ue=Rt[we];nt?bt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,we+1,0,0,tt,je,ue.image[N]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,we+1,Oe,tt,je,ue.image[N])}}}D(T,ot)&&R(r.TEXTURE_CUBE_MAP),Se.__version=me.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ee(P,T,te,pe,me,Se){const He=c.convert(te.format,te.colorSpace),Ae=c.convert(te.type),Ue=L(te.internalFormat,He,Ae,te.colorSpace);if(!s.get(T).__hasExternalTextures){const st=Math.max(1,T.width>>Se),he=Math.max(1,T.height>>Se);me===r.TEXTURE_3D||me===r.TEXTURE_2D_ARRAY?n.texImage3D(me,Se,Ue,st,he,T.depth,0,He,Ae,null):n.texImage2D(me,Se,Ue,st,he,0,He,Ae,null)}n.bindFramebuffer(r.FRAMEBUFFER,P),ze(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,me,s.get(te).__webglTexture,0,Ke(T)):(me===r.TEXTURE_2D||me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,me,s.get(te).__webglTexture,Se),n.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(P,T,te){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let pe=u===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(te||ze(T)){const me=T.depthTexture;me&&me.isDepthTexture&&(me.type===Vi?pe=r.DEPTH_COMPONENT32F:me.type===yr&&(pe=r.DEPTH_COMPONENT24));const Se=Ke(T);ze(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,pe,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,pe,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,pe,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){const pe=Ke(T);te&&ze(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,r.DEPTH24_STENCIL8,T.width,T.height):ze(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pe,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,P)}else{const pe=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let me=0;me<pe.length;me++){const Se=pe[me],He=c.convert(Se.format,Se.colorSpace),Ae=c.convert(Se.type),Ue=L(Se.internalFormat,He,Ae,Se.colorSpace),$e=Ke(T);te&&ze(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,Ue,T.width,T.height):ze(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$e,Ue,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ue,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _e(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j(T.depthTexture,0);const pe=s.get(T.depthTexture).__webglTexture,me=Ke(T);if(T.depthTexture.format===es)ze(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,pe,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,pe,0);else if(T.depthTexture.format===Zs)ze(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,pe,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Ye(P){const T=s.get(P),te=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");_e(T.__webglFramebuffer,P)}else if(te){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]=r.createRenderbuffer(),xe(T.__webglDepthbuffer[pe],P,!1)}else n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),xe(T.__webglDepthbuffer,P,!1);n.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(P,T,te){const pe=s.get(P);T!==void 0&&Ee(pe.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&Ye(P)}function q(P){const T=P.texture,te=s.get(P),pe=s.get(T);P.addEventListener("dispose",de),P.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=T.version,f.memory.textures++);const me=P.isWebGLCubeRenderTarget===!0,Se=P.isWebGLMultipleRenderTargets===!0,He=x(P)||u;if(me){te.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(u&&T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[Ae]=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)te.__webglFramebuffer[Ae][Ue]=r.createFramebuffer()}else te.__webglFramebuffer[Ae]=r.createFramebuffer()}else{if(u&&T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)te.__webglFramebuffer[Ae]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Se)if(a.drawBuffers){const Ae=P.texture;for(let Ue=0,$e=Ae.length;Ue<$e;Ue++){const st=s.get(Ae[Ue]);st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture(),f.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&P.samples>0&&ze(P)===!1){const Ae=Se?T:[T];te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Ae.length;Ue++){const $e=Ae[Ue];te.__webglColorRenderbuffer[Ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[Ue]);const st=c.convert($e.format,$e.colorSpace),he=c.convert($e.type),vt=L($e.internalFormat,st,he,$e.colorSpace,P.isXRRenderTarget===!0),ot=Ke(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,vt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,te.__webglColorRenderbuffer[Ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),xe(te.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(me){n.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),Y(r.TEXTURE_CUBE_MAP,T,He);for(let Ae=0;Ae<6;Ae++)if(u&&T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)Ee(te.__webglFramebuffer[Ae][Ue],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ue);else Ee(te.__webglFramebuffer[Ae],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);D(T,He)&&R(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){const Ae=P.texture;for(let Ue=0,$e=Ae.length;Ue<$e;Ue++){const st=Ae[Ue],he=s.get(st);n.bindTexture(r.TEXTURE_2D,he.__webglTexture),Y(r.TEXTURE_2D,st,He),Ee(te.__webglFramebuffer,P,st,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,0),D(st,He)&&R(r.TEXTURE_2D)}n.unbindTexture()}else{let Ae=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(u?Ae=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Ae,pe.__webglTexture),Y(Ae,T,He),u&&T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)Ee(te.__webglFramebuffer[Ue],P,T,r.COLOR_ATTACHMENT0,Ae,Ue);else Ee(te.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,Ae,0);D(T,He)&&R(Ae),n.unbindTexture()}P.depthBuffer&&Ye(P)}function At(P){const T=x(P)||u,te=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let pe=0,me=te.length;pe<me;pe++){const Se=te[pe];if(D(Se,T)){const He=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ae=s.get(Se).__webglTexture;n.bindTexture(He,Ae),R(He),n.unbindTexture()}}}function Ve(P){if(u&&P.samples>0&&ze(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],te=P.width,pe=P.height;let me=r.COLOR_BUFFER_BIT;const Se=[],He=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=s.get(P),Ue=P.isWebGLMultipleRenderTargets===!0;if(Ue)for(let $e=0;$e<T.length;$e++)n.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let $e=0;$e<T.length;$e++){Se.push(r.COLOR_ATTACHMENT0+$e),P.depthBuffer&&Se.push(He);const st=Ae.__ignoreDepthValues!==void 0?Ae.__ignoreDepthValues:!1;if(st===!1&&(P.depthBuffer&&(me|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&(me|=r.STENCIL_BUFFER_BIT)),Ue&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[$e]),st===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[He]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[He])),Ue){const he=s.get(T[$e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,he,0)}r.blitFramebuffer(0,0,te,pe,0,0,te,pe,me,r.NEAREST),g&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Se)}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ue)for(let $e=0;$e<T.length;$e++){n.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[$e]);const st=s.get(T[$e]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,st,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}}function Ke(P){return Math.min(a.maxSamples,P.samples)}function ze(P){const T=s.get(P);return u&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xt(P){const T=f.render.frame;v.get(P)!==T&&(v.set(P,T),P.update())}function rt(P,T){const te=P.colorSpace,pe=P.format,me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===pd||te!==Xi&&te!==ni&&(Ft.getTransfer(te)===Ht?u===!1?e.has("EXT_sRGB")===!0&&pe===hi?(P.format=pd,P.minFilter=kn,P.generateMipmaps=!1):T=pg.sRGBToLinear(T):(pe!==hi||me!==Er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}this.allocateTextureUnit=z,this.resetTextureUnits=fe,this.setTexture2D=j,this.setTexture2DArray=oe,this.setTexture3D=k,this.setTextureCube=$,this.rebindTextures=qe,this.setupRenderTarget=q,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ze}function FE(r,e,n){const s=n.isWebGL2;function a(c,f=ni){let u;const h=Ft.getTransfer(f);if(c===Er)return r.UNSIGNED_BYTE;if(c===rg)return r.UNSIGNED_SHORT_4_4_4_4;if(c===sg)return r.UNSIGNED_SHORT_5_5_5_1;if(c===v0)return r.BYTE;if(c===_0)return r.SHORT;if(c===Td)return r.UNSIGNED_SHORT;if(c===ig)return r.INT;if(c===yr)return r.UNSIGNED_INT;if(c===Vi)return r.FLOAT;if(c===jo)return s?r.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(c===x0)return r.ALPHA;if(c===hi)return r.RGBA;if(c===y0)return r.LUMINANCE;if(c===S0)return r.LUMINANCE_ALPHA;if(c===es)return r.DEPTH_COMPONENT;if(c===Zs)return r.DEPTH_STENCIL;if(c===pd)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(c===M0)return r.RED;if(c===og)return r.RED_INTEGER;if(c===E0)return r.RG;if(c===ag)return r.RG_INTEGER;if(c===lg)return r.RGBA_INTEGER;if(c===Tu||c===Au||c===bu||c===Ru)if(h===Ht)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(c===Tu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(c===Au)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(c===bu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(c===Ru)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(c===Tu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(c===Au)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(c===bu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(c===Ru)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(c===xp||c===yp||c===Sp||c===Mp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(c===xp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(c===yp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(c===Sp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(c===Mp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(c===cg)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(c===Ep||c===wp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(c===Ep)return h===Ht?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(c===wp)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(c===Tp||c===Ap||c===bp||c===Rp||c===Cp||c===Pp||c===Lp||c===Dp||c===Np||c===Ip||c===Up||c===Fp||c===Op||c===kp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(c===Tp)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(c===Ap)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(c===bp)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(c===Rp)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(c===Cp)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(c===Pp)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(c===Lp)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(c===Dp)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(c===Np)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(c===Ip)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(c===Up)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(c===Fp)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(c===Op)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(c===kp)return h===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(c===Cu||c===zp||c===Bp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(c===Cu)return h===Ht?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(c===zp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(c===Bp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(c===w0||c===Hp||c===Gp||c===Vp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(c===Cu)return u.COMPRESSED_RED_RGTC1_EXT;if(c===Hp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(c===Gp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(c===Vp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return c===Jr?s?r.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):r[c]!==void 0?r[c]:null}return{convert:a}}class OE extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wl extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kE={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let a=null,c=null,f=null;const u=this._targetRay,h=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){f=!0;for(const A of e.hand.values()){const x=n.getJointPose(A,s),_=this._getHandJoint(g,A);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const v=g.joints["index-finger-tip"],p=g.joints["thumb-tip"],y=v.position.distanceTo(p.position),S=.02,w=.005;g.inputState.pinching&&y>S+w?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&y<=S-w&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,s),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(a=n.getPose(e.targetRaySpace,s),a===null&&c!==null&&(a=c),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(kE)))}return u!==null&&(u.visible=a!==null),h!==null&&(h.visible=c!==null),g!==null&&(g.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new wl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}const zE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,s){if(this.texture===null){const a=new Bn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=s.depthNear||n.depthFar!=s.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}render(e,n){if(this.texture!==null){if(this.mesh===null){const s=n.cameras[0].viewport,a=new Tr({extensions:{fragDepth:!0},vertexShader:zE,fragmentShader:BE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:s.z},depthHeight:{value:s.w}}});this.mesh=new Ei(new kl(20,20),a)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class GE extends Js{constructor(e,n){super();const s=this;let a=null,c=1,f=null,u="local-floor",h=1,g=null,v=null,p=null,y=null,S=null,w=null;const A=new HE,x=n.getContextAttributes();let _=null,D=null;const R=[],L=[],W=new Et;let F=null;const O=new Yn;O.layers.enable(1),O.viewport=new Wt;const de=new Yn;de.layers.enable(2),de.viewport=new Wt;const Me=[O,de],E=new OE;E.layers.enable(1),E.layers.enable(2);let I=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let re=R[V];return re===void 0&&(re=new ed,R[V]=re),re.getTargetRaySpace()},this.getControllerGrip=function(V){let re=R[V];return re===void 0&&(re=new ed,R[V]=re),re.getGripSpace()},this.getHand=function(V){let re=R[V];return re===void 0&&(re=new ed,R[V]=re),re.getHandSpace()};function fe(V){const re=L.indexOf(V.inputSource);if(re===-1)return;const ce=R[re];ce!==void 0&&(ce.update(V.inputSource,V.frame,g||f),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function z(){a.removeEventListener("select",fe),a.removeEventListener("selectstart",fe),a.removeEventListener("selectend",fe),a.removeEventListener("squeeze",fe),a.removeEventListener("squeezestart",fe),a.removeEventListener("squeezeend",fe),a.removeEventListener("end",z),a.removeEventListener("inputsourceschange",Q);for(let V=0;V<R.length;V++){const re=L[V];re!==null&&(L[V]=null,R[V].disconnect(re))}I=null,le=null,A.reset(),e.setRenderTarget(_),S=null,y=null,p=null,a=null,D=null,Y.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(W.width,W.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){c=V,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){u=V,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||f},this.setReferenceSpace=function(V){g=V},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return p},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(V){if(a=V,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",fe),a.addEventListener("selectstart",fe),a.addEventListener("selectend",fe),a.addEventListener("squeeze",fe),a.addEventListener("squeezestart",fe),a.addEventListener("squeezeend",fe),a.addEventListener("end",z),a.addEventListener("inputsourceschange",Q),x.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(W),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:a.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(a,n,re),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new ns(S.framebufferWidth,S.framebufferHeight,{format:hi,type:Er,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let re=null,ce=null,Ee=null;x.depth&&(Ee=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=x.stencil?Zs:es,ce=x.stencil?Jr:yr);const xe={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:c};p=new XRWebGLBinding(a,n),y=p.createProjectionLayer(xe),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),D=new ns(y.textureWidth,y.textureHeight,{format:hi,type:Er,depthTexture:new bg(y.textureWidth,y.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const _e=e.properties.get(D);_e.__ignoreDepthValues=y.ignoreDepthValues}D.isXRRenderTarget=!0,this.setFoveation(h),g=null,f=await a.requestReferenceSpace(u),Y.setContext(a),Y.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function Q(V){for(let re=0;re<V.removed.length;re++){const ce=V.removed[re],Ee=L.indexOf(ce);Ee>=0&&(L[Ee]=null,R[Ee].disconnect(ce))}for(let re=0;re<V.added.length;re++){const ce=V.added[re];let Ee=L.indexOf(ce);if(Ee===-1){for(let _e=0;_e<R.length;_e++)if(_e>=L.length){L.push(ce),Ee=_e;break}else if(L[_e]===null){L[_e]=ce,Ee=_e;break}if(Ee===-1)break}const xe=R[Ee];xe&&xe.connect(ce)}}const j=new J,oe=new J;function k(V,re,ce){j.setFromMatrixPosition(re.matrixWorld),oe.setFromMatrixPosition(ce.matrixWorld);const Ee=j.distanceTo(oe),xe=re.projectionMatrix.elements,_e=ce.projectionMatrix.elements,Ye=xe[14]/(xe[10]-1),qe=xe[14]/(xe[10]+1),q=(xe[9]+1)/xe[5],At=(xe[9]-1)/xe[5],Ve=(xe[8]-1)/xe[0],Ke=(_e[8]+1)/_e[0],ze=Ye*Ve,xt=Ye*Ke,rt=Ee/(-Ve+Ke),P=rt*-Ve;re.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(P),V.translateZ(rt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const T=Ye+rt,te=qe+rt,pe=ze-P,me=xt+(Ee-P),Se=q*qe/te*T,He=At*qe/te*T;V.projectionMatrix.makePerspective(pe,me,Se,He,T,te),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function $(V,re){re===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(re.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(a===null)return;A.texture!==null&&(V.near=A.depthNear,V.far=A.depthFar),E.near=de.near=O.near=V.near,E.far=de.far=O.far=V.far,(I!==E.near||le!==E.far)&&(a.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,le=E.far,O.near=I,O.far=le,de.near=I,de.far=le,O.updateProjectionMatrix(),de.updateProjectionMatrix(),V.updateProjectionMatrix());const re=V.parent,ce=E.cameras;$(E,re);for(let Ee=0;Ee<ce.length;Ee++)$(ce[Ee],re);ce.length===2?k(E,O,de):E.projectionMatrix.copy(O.projectionMatrix),X(V,E,re)};function X(V,re,ce){ce===null?V.matrix.copy(re.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply(re.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(re.projectionMatrix),V.projectionMatrixInverse.copy(re.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=md*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function(V){h=V,y!==null&&(y.fixedFoveation=V),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=V)},this.hasDepthSensing=function(){return A.texture!==null};let b=null;function H(V,re){if(v=re.getViewerPose(g||f),w=re,v!==null){const ce=v.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let Ee=!1;ce.length!==E.cameras.length&&(E.cameras.length=0,Ee=!0);for(let _e=0;_e<ce.length;_e++){const Ye=ce[_e];let qe=null;if(S!==null)qe=S.getViewport(Ye);else{const At=p.getViewSubImage(y,Ye);qe=At.viewport,_e===0&&(e.setRenderTargetTextures(D,At.colorTexture,y.ignoreDepthValues?void 0:At.depthStencilTexture),e.setRenderTarget(D))}let q=Me[_e];q===void 0&&(q=new Yn,q.layers.enable(_e),q.viewport=new Wt,Me[_e]=q),q.matrix.fromArray(Ye.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(Ye.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(qe.x,qe.y,qe.width,qe.height),_e===0&&(E.matrix.copy(q.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Ee===!0&&E.cameras.push(q)}const xe=a.enabledFeatures;if(xe&&xe.includes("depth-sensing")){const _e=p.getDepthInformation(ce[0]);_e&&_e.isValid&&_e.texture&&A.init(e,_e,a.renderState)}}for(let ce=0;ce<R.length;ce++){const Ee=L[ce],xe=R[ce];Ee!==null&&xe!==void 0&&xe.update(Ee,re,g||f)}A.render(e,E),b&&b(V,re),re.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:re}),w=null}const Y=new Tg;Y.setAnimationLoop(H),this.setAnimationLoop=function(V){b=V},this.dispose=function(){}}}function VE(r,e){function n(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function s(x,_){_.color.getRGB(x.fogColor.value,Mg(r)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function a(x,_,D,R,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(x,_):_.isMeshToonMaterial?(c(x,_),p(x,_)):_.isMeshPhongMaterial?(c(x,_),v(x,_)):_.isMeshStandardMaterial?(c(x,_),y(x,_),_.isMeshPhysicalMaterial&&S(x,_,L)):_.isMeshMatcapMaterial?(c(x,_),w(x,_)):_.isMeshDepthMaterial?c(x,_):_.isMeshDistanceMaterial?(c(x,_),A(x,_)):_.isMeshNormalMaterial?c(x,_):_.isLineBasicMaterial?(f(x,_),_.isLineDashedMaterial&&u(x,_)):_.isPointsMaterial?h(x,_,D,R):_.isSpriteMaterial?g(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,n(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,n(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===zn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,n(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===zn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,n(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,n(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const D=e.get(_).envMap;if(D&&(x.envMap.value=D,x.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap){x.lightMap.value=_.lightMap;const R=r._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=_.lightMapIntensity*R,n(_.lightMap,x.lightMapTransform)}_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,x.aoMapTransform))}function f(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,n(_.map,x.mapTransform))}function u(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,D,R){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*D,x.scale.value=R*.5,_.map&&(x.map.value=_.map,n(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,n(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function v(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function p(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function y(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,x.roughnessMapTransform)),e.get(_).envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,D){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===zn&&x.clearcoatNormalScale.value.negate())),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=D.texture,x.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,_){_.matcap&&(x.matcap.value=_.matcap)}function A(x,_){const D=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(D.matrixWorld),x.nearDistance.value=D.shadow.camera.near,x.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function WE(r,e,n,s){let a={},c={},f=[];const u=n.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(D,R){const L=R.program;s.uniformBlockBinding(D,L)}function g(D,R){let L=a[D.id];L===void 0&&(w(D),L=v(D),a[D.id]=L,D.addEventListener("dispose",x));const W=R.program;s.updateUBOMapping(D,W);const F=e.render.frame;c[D.id]!==F&&(y(D),c[D.id]=F)}function v(D){const R=p();D.__bindingPointIndex=R;const L=r.createBuffer(),W=D.__size,F=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,W,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,R,L),L}function p(){for(let D=0;D<u;D++)if(f.indexOf(D)===-1)return f.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(D){const R=a[D.id],L=D.uniforms,W=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,R);for(let F=0,O=L.length;F<O;F++){const de=Array.isArray(L[F])?L[F]:[L[F]];for(let Me=0,E=de.length;Me<E;Me++){const I=de[Me];if(S(I,F,Me,W)===!0){const le=I.__offset,fe=Array.isArray(I.value)?I.value:[I.value];let z=0;for(let Q=0;Q<fe.length;Q++){const j=fe[Q],oe=A(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,r.bufferSubData(r.UNIFORM_BUFFER,le+z,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,z),z+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,le,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(D,R,L,W){const F=D.value,O=R+"_"+L;if(W[O]===void 0)return typeof F=="number"||typeof F=="boolean"?W[O]=F:W[O]=F.clone(),!0;{const de=W[O];if(typeof F=="number"||typeof F=="boolean"){if(de!==F)return W[O]=F,!0}else if(de.equals(F)===!1)return de.copy(F),!0}return!1}function w(D){const R=D.uniforms;let L=0;const W=16;for(let O=0,de=R.length;O<de;O++){const Me=Array.isArray(R[O])?R[O]:[R[O]];for(let E=0,I=Me.length;E<I;E++){const le=Me[E],fe=Array.isArray(le.value)?le.value:[le.value];for(let z=0,Q=fe.length;z<Q;z++){const j=fe[z],oe=A(j),k=L%W;k!==0&&W-k<oe.boundary&&(L+=W-k),le.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=L,L+=oe.storage}}}const F=L%W;return F>0&&(L+=W-F),D.__size=L,D.__cache={},this}function A(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),R}function x(D){const R=D.target;R.removeEventListener("dispose",x);const L=f.indexOf(R.__bindingPointIndex);f.splice(L,1),r.deleteBuffer(a[R.id]),delete a[R.id],delete c[R.id]}function _(){for(const D in a)r.deleteBuffer(a[D]);f=[],a={},c={}}return{bind:h,update:g,dispose:_}}class Ng{constructor(e={}){const{canvas:n=F0(),context:s=null,depth:a=!0,stencil:c=!0,alpha:f=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let y;s!==null?y=s.getContextAttributes().alpha:y=f;const S=new Uint32Array(4),w=new Int32Array(4);let A=null,x=null;const _=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this._useLegacyLights=!1,this.toneMapping=Mr,this.toneMappingExposure=1;const R=this;let L=!1,W=0,F=0,O=null,de=-1,Me=null;const E=new Wt,I=new Wt;let le=null;const fe=new St(0);let z=0,Q=n.width,j=n.height,oe=1,k=null,$=null;const X=new Wt(0,0,Q,j),b=new Wt(0,0,Q,j);let H=!1;const Y=new Rd;let V=!1,re=!1,ce=null;const Ee=new Jt,xe=new Et,_e=new J,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return O===null?oe:1}let q=s;function At(C,Z){for(let se=0;se<C.length;se++){const ae=C[se],ie=n.getContext(ae,Z);if(ie!==null)return ie}return null}try{const C={alpha:!0,depth:a,stencil:c,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wd}`),n.addEventListener("webglcontextlost",Rt,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",we,!1),q===null){const Z=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&Z.shift(),q=At(Z,C),q===null)throw At(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ve,Ke,ze,xt,rt,P,T,te,pe,me,Se,He,Ae,Ue,$e,st,he,vt,ot,tt,je,Oe,nt,Mt;function bt(){Ve=new ZS(q),Ke=new XS(q,Ve,e),Ve.init(Ke),Oe=new FE(q,Ve,Ke),ze=new IE(q,Ve,Ke),xt=new eM(q),rt=new yE,P=new UE(q,Ve,ze,rt,Ke,Oe,xt),T=new YS(R),te=new KS(R),pe=new lx(q,Ke),nt=new VS(q,Ve,pe,Ke),me=new QS(q,pe,xt,nt),Se=new rM(q,me,pe,xt),ot=new iM(q,Ke,P),st=new jS(rt),He=new xE(R,T,te,Ve,Ke,nt,st),Ae=new VE(R,rt),Ue=new ME,$e=new RE(Ve,Ke),vt=new GS(R,T,te,ze,Se,y,h),he=new NE(R,Se,Ke),Mt=new WE(q,xt,Ke,ze),tt=new WS(q,Ve,xt,Ke),je=new JS(q,Ve,xt,Ke),xt.programs=He.programs,R.capabilities=Ke,R.extensions=Ve,R.properties=rt,R.renderLists=Ue,R.shadowMap=he,R.state=ze,R.info=xt}bt();const et=new GE(R,q);this.xr=et,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const C=Ve.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ve.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(C){C!==void 0&&(oe=C,this.setSize(Q,j,!1))},this.getSize=function(C){return C.set(Q,j)},this.setSize=function(C,Z,se=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=C,j=Z,n.width=Math.floor(C*oe),n.height=Math.floor(Z*oe),se===!0&&(n.style.width=C+"px",n.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(Q*oe,j*oe).floor()},this.setDrawingBufferSize=function(C,Z,se){Q=C,j=Z,oe=se,n.width=Math.floor(C*se),n.height=Math.floor(Z*se),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(X)},this.setViewport=function(C,Z,se,ae){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,Z,se,ae),ze.viewport(E.copy(X).multiplyScalar(oe).floor())},this.getScissor=function(C){return C.copy(b)},this.setScissor=function(C,Z,se,ae){C.isVector4?b.set(C.x,C.y,C.z,C.w):b.set(C,Z,se,ae),ze.scissor(I.copy(b).multiplyScalar(oe).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(C){ze.setScissorTest(H=C)},this.setOpaqueSort=function(C){k=C},this.setTransparentSort=function(C){$=C},this.getClearColor=function(C){return C.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(C=!0,Z=!0,se=!0){let ae=0;if(C){let ie=!1;if(O!==null){const Le=O.texture.format;ie=Le===lg||Le===ag||Le===og}if(ie){const Le=O.texture.type,Xe=Le===Er||Le===yr||Le===Td||Le===Jr||Le===rg||Le===sg,Je=vt.getClearColor(),Fe=vt.getClearAlpha(),dt=Je.r,lt=Je.g,ct=Je.b;Xe?(S[0]=dt,S[1]=lt,S[2]=ct,S[3]=Fe,q.clearBufferuiv(q.COLOR,0,S)):(w[0]=dt,w[1]=lt,w[2]=ct,w[3]=Fe,q.clearBufferiv(q.COLOR,0,w))}else ae|=q.COLOR_BUFFER_BIT}Z&&(ae|=q.DEPTH_BUFFER_BIT),se&&(ae|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Rt,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",we,!1),Ue.dispose(),$e.dispose(),rt.dispose(),T.dispose(),te.dispose(),Se.dispose(),nt.dispose(),Mt.dispose(),He.dispose(),et.dispose(),et.removeEventListener("sessionstart",It),et.removeEventListener("sessionend",_t),ce&&(ce.dispose(),ce=null),Dt.stop()};function Rt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const C=xt.autoReset,Z=he.enabled,se=he.autoUpdate,ae=he.needsUpdate,ie=he.type;bt(),xt.autoReset=C,he.enabled=Z,he.autoUpdate=se,he.needsUpdate=ae,he.type=ie}function we(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ue(C){const Z=C.target;Z.removeEventListener("dispose",ue),be(Z)}function be(C){Pe(C),rt.remove(C)}function Pe(C){const Z=rt.get(C).programs;Z!==void 0&&(Z.forEach(function(se){He.releaseProgram(se)}),C.isShaderMaterial&&He.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,se,ae,ie,Le){Z===null&&(Z=Ye);const Xe=ie.isMesh&&ie.matrixWorld.determinant()<0,Je=Hl(C,Z,se,ae,ie);ze.setMaterial(ae,Xe);let Fe=se.index,dt=1;if(ae.wireframe===!0){if(Fe=me.getWireframeAttribute(se),Fe===void 0)return;dt=2}const lt=se.drawRange,ct=se.attributes.position;let Ot=lt.start*dt,Sn=(lt.start+lt.count)*dt;Le!==null&&(Ot=Math.max(Ot,Le.start*dt),Sn=Math.min(Sn,(Le.start+Le.count)*dt)),Fe!==null?(Ot=Math.max(Ot,0),Sn=Math.min(Sn,Fe.count)):ct!=null&&(Ot=Math.max(Ot,0),Sn=Math.min(Sn,ct.count));const $t=Sn-Ot;if($t<0||$t===1/0)return;nt.setup(ie,ae,Je,se,Fe);let Rn,Tt=tt;if(Fe!==null&&(Rn=pe.get(Fe),Tt=je,Tt.setIndex(Rn)),ie.isMesh)ae.wireframe===!0?(ze.setLineWidth(ae.wireframeLinewidth*qe()),Tt.setMode(q.LINES)):Tt.setMode(q.TRIANGLES);else if(ie.isLine){let ft=ae.linewidth;ft===void 0&&(ft=1),ze.setLineWidth(ft*qe()),ie.isLineSegments?Tt.setMode(q.LINES):ie.isLineLoop?Tt.setMode(q.LINE_LOOP):Tt.setMode(q.LINE_STRIP)}else ie.isPoints?Tt.setMode(q.POINTS):ie.isSprite&&Tt.setMode(q.TRIANGLES);if(ie.isBatchedMesh)Tt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)Tt.renderInstances(Ot,$t,ie.count);else if(se.isInstancedBufferGeometry){const ft=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Mn=Math.min(se.instanceCount,ft);Tt.renderInstances(Ot,$t,Mn)}else Tt.render(Ot,$t)};function at(C,Z,se){C.transparent===!0&&C.side===Gi&&C.forceSinglePass===!1?(C.side=zn,C.needsUpdate=!0,ji(C,Z,se),C.side=wr,C.needsUpdate=!0,ji(C,Z,se),C.side=Gi):ji(C,Z,se)}this.compile=function(C,Z,se=null){se===null&&(se=C),x=$e.get(se),x.init(),D.push(x),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Z.layers)&&(x.pushLight(ie),ie.castShadow&&x.pushShadow(ie))}),C!==se&&C.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Z.layers)&&(x.pushLight(ie),ie.castShadow&&x.pushShadow(ie))}),x.setupLights(R._useLegacyLights);const ae=new Set;return C.traverse(function(ie){const Le=ie.material;if(Le)if(Array.isArray(Le))for(let Xe=0;Xe<Le.length;Xe++){const Je=Le[Xe];at(Je,se,ie),ae.add(Je)}else at(Le,se,ie),ae.add(Le)}),D.pop(),x=null,ae},this.compileAsync=function(C,Z,se=null){const ae=this.compile(C,Z,se);return new Promise(ie=>{function Le(){if(ae.forEach(function(Xe){rt.get(Xe).currentProgram.isReady()&&ae.delete(Xe)}),ae.size===0){ie(C);return}setTimeout(Le,10)}Ve.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let wt=null;function pt(C){wt&&wt(C)}function It(){Dt.stop()}function _t(){Dt.start()}const Dt=new Tg;Dt.setAnimationLoop(pt),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(C){wt=C,et.setAnimationLoop(C),C===null?Dt.stop():Dt.start()},et.addEventListener("sessionstart",It),et.addEventListener("sessionend",_t),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(Z),Z=et.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,Z,O),x=$e.get(C,D.length),x.init(),D.push(x),Ee.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Y.setFromProjectionMatrix(Ee),re=this.localClippingEnabled,V=st.init(this.clippingPlanes,re),A=Ue.get(C,_.length),A.init(),_.push(A),Ut(C,Z,0,R.sortObjects),A.finish(),R.sortObjects===!0&&A.sort(k,$),this.info.render.frame++,V===!0&&st.beginShadows();const se=x.state.shadowsArray;if(he.render(se,C,Z),V===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1)&&vt.render(A,C),x.setupLights(R._useLegacyLights),Z.isArrayCamera){const ae=Z.cameras;for(let ie=0,Le=ae.length;ie<Le;ie++){const Xe=ae[ie];br(A,C,Xe,Xe.viewport)}}else br(A,C,Z);O!==null&&(P.updateMultisampleRenderTarget(O),P.updateRenderTargetMipmap(O)),C.isScene===!0&&C.onAfterRender(R,C,Z),nt.resetDefaultState(),de=-1,Me=null,D.pop(),D.length>0?x=D[D.length-1]:x=null,_.pop(),_.length>0?A=_[_.length-1]:A=null};function Ut(C,Z,se,ae){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){ae&&_e.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ee);const Xe=Se.update(C),Je=C.material;Je.visible&&A.push(C,Xe,Je,se,_e.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){const Xe=Se.update(C),Je=C.material;if(ae&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),_e.copy(C.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),_e.copy(Xe.boundingSphere.center)),_e.applyMatrix4(C.matrixWorld).applyMatrix4(Ee)),Array.isArray(Je)){const Fe=Xe.groups;for(let dt=0,lt=Fe.length;dt<lt;dt++){const ct=Fe[dt],Ot=Je[ct.materialIndex];Ot&&Ot.visible&&A.push(C,Xe,Ot,se,_e.z,ct)}}else Je.visible&&A.push(C,Xe,Je,se,_e.z,null)}}const Le=C.children;for(let Xe=0,Je=Le.length;Xe<Je;Xe++)Ut(Le[Xe],Z,se,ae)}function br(C,Z,se,ae){const ie=C.opaque,Le=C.transmissive,Xe=C.transparent;x.setupLightsView(se),V===!0&&st.setGlobalState(R.clippingPlanes,se),Le.length>0&&yn(ie,Le,Z,se),ae&&ze.viewport(E.copy(ae)),ie.length>0&&pi(ie,Z,se),Le.length>0&&pi(Le,Z,se),Xe.length>0&&pi(Xe,Z,se),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function yn(C,Z,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;const Le=Ke.isWebGL2;ce===null&&(ce=new ns(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")?jo:Er,minFilter:Qr,samples:Le?4:0})),R.getDrawingBufferSize(xe),Le?ce.setSize(xe.x,xe.y):ce.setSize(gd(xe.x),gd(xe.y));const Xe=R.getRenderTarget();R.setRenderTarget(ce),R.getClearColor(fe),z=R.getClearAlpha(),z<1&&R.setClearColor(16777215,.5),R.clear();const Je=R.toneMapping;R.toneMapping=Mr,pi(C,se,ae),P.updateMultisampleRenderTarget(ce),P.updateRenderTargetMipmap(ce);let Fe=!1;for(let dt=0,lt=Z.length;dt<lt;dt++){const ct=Z[dt],Ot=ct.object,Sn=ct.geometry,$t=ct.material,Rn=ct.group;if($t.side===Gi&&Ot.layers.test(ae.layers)){const Tt=$t.side;$t.side=zn,$t.needsUpdate=!0,Rr(Ot,se,ae,Sn,$t,Rn),$t.side=Tt,$t.needsUpdate=!0,Fe=!0}}Fe===!0&&(P.updateMultisampleRenderTarget(ce),P.updateRenderTargetMipmap(ce)),R.setRenderTarget(Xe),R.setClearColor(fe,z),R.toneMapping=Je}function pi(C,Z,se){const ae=Z.isScene===!0?Z.overrideMaterial:null;for(let ie=0,Le=C.length;ie<Le;ie++){const Xe=C[ie],Je=Xe.object,Fe=Xe.geometry,dt=ae===null?Xe.material:ae,lt=Xe.group;Je.layers.test(se.layers)&&Rr(Je,Z,se,Fe,dt,lt)}}function Rr(C,Z,se,ae,ie,Le){C.onBeforeRender(R,Z,se,ae,ie,Le),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(R,Z,se,ae,C,Le),ie.transparent===!0&&ie.side===Gi&&ie.forceSinglePass===!1?(ie.side=zn,ie.needsUpdate=!0,R.renderBufferDirect(se,Z,ae,ie,C,Le),ie.side=wr,ie.needsUpdate=!0,R.renderBufferDirect(se,Z,ae,ie,C,Le),ie.side=Gi):R.renderBufferDirect(se,Z,ae,ie,C,Le),C.onAfterRender(R,Z,se,ae,ie,Le)}function ji(C,Z,se){Z.isScene!==!0&&(Z=Ye);const ae=rt.get(C),ie=x.state.lights,Le=x.state.shadowsArray,Xe=ie.state.version,Je=He.getParameters(C,ie.state,Le,Z,se),Fe=He.getProgramCacheKey(Je);let dt=ae.programs;ae.environment=C.isMeshStandardMaterial?Z.environment:null,ae.fog=Z.fog,ae.envMap=(C.isMeshStandardMaterial?te:T).get(C.envMap||ae.environment),dt===void 0&&(C.addEventListener("dispose",ue),dt=new Map,ae.programs=dt);let lt=dt.get(Fe);if(lt!==void 0){if(ae.currentProgram===lt&&ae.lightsStateVersion===Xe)return Qo(C,Je),lt}else Je.uniforms=He.getUniforms(C),C.onBuild(se,Je,R),C.onBeforeCompile(Je,R),lt=He.acquireProgram(Je,Fe),dt.set(Fe,lt),ae.uniforms=Je.uniforms;const ct=ae.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ct.clippingPlanes=st.uniform),Qo(C,Je),ae.needsLights=Jo(C),ae.lightsStateVersion=Xe,ae.needsLights&&(ct.ambientLightColor.value=ie.state.ambient,ct.lightProbe.value=ie.state.probe,ct.directionalLights.value=ie.state.directional,ct.directionalLightShadows.value=ie.state.directionalShadow,ct.spotLights.value=ie.state.spot,ct.spotLightShadows.value=ie.state.spotShadow,ct.rectAreaLights.value=ie.state.rectArea,ct.ltc_1.value=ie.state.rectAreaLTC1,ct.ltc_2.value=ie.state.rectAreaLTC2,ct.pointLights.value=ie.state.point,ct.pointLightShadows.value=ie.state.pointShadow,ct.hemisphereLights.value=ie.state.hemi,ct.directionalShadowMap.value=ie.state.directionalShadowMap,ct.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,ct.spotShadowMap.value=ie.state.spotShadowMap,ct.spotLightMatrix.value=ie.state.spotLightMatrix,ct.spotLightMap.value=ie.state.spotLightMap,ct.pointShadowMap.value=ie.state.pointShadowMap,ct.pointShadowMatrix.value=ie.state.pointShadowMatrix),ae.currentProgram=lt,ae.uniformsList=null,lt}function Zo(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=Rl.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Qo(C,Z){const se=rt.get(C);se.outputColorSpace=Z.outputColorSpace,se.batching=Z.batching,se.instancing=Z.instancing,se.instancingColor=Z.instancingColor,se.skinning=Z.skinning,se.morphTargets=Z.morphTargets,se.morphNormals=Z.morphNormals,se.morphColors=Z.morphColors,se.morphTargetsCount=Z.morphTargetsCount,se.numClippingPlanes=Z.numClippingPlanes,se.numIntersection=Z.numClipIntersection,se.vertexAlphas=Z.vertexAlphas,se.vertexTangents=Z.vertexTangents,se.toneMapping=Z.toneMapping}function Hl(C,Z,se,ae,ie){Z.isScene!==!0&&(Z=Ye),P.resetTextureUnits();const Le=Z.fog,Xe=ae.isMeshStandardMaterial?Z.environment:null,Je=O===null?R.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Xi,Fe=(ae.isMeshStandardMaterial?te:T).get(ae.envMap||Xe),dt=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,lt=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),ct=!!se.morphAttributes.position,Ot=!!se.morphAttributes.normal,Sn=!!se.morphAttributes.color;let $t=Mr;ae.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&($t=R.toneMapping);const Rn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Tt=Rn!==void 0?Rn.length:0,ft=rt.get(ae),Mn=x.state.lights;if(V===!0&&(re===!0||C!==Me)){const Cn=C===Me&&ae.id===de;st.setState(ae,C,Cn)}let Gt=!1;ae.version===ft.__version?(ft.needsLights&&ft.lightsStateVersion!==Mn.state.version||ft.outputColorSpace!==Je||ie.isBatchedMesh&&ft.batching===!1||!ie.isBatchedMesh&&ft.batching===!0||ie.isInstancedMesh&&ft.instancing===!1||!ie.isInstancedMesh&&ft.instancing===!0||ie.isSkinnedMesh&&ft.skinning===!1||!ie.isSkinnedMesh&&ft.skinning===!0||ie.isInstancedMesh&&ft.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ft.instancingColor===!1&&ie.instanceColor!==null||ft.envMap!==Fe||ae.fog===!0&&ft.fog!==Le||ft.numClippingPlanes!==void 0&&(ft.numClippingPlanes!==st.numPlanes||ft.numIntersection!==st.numIntersection)||ft.vertexAlphas!==dt||ft.vertexTangents!==lt||ft.morphTargets!==ct||ft.morphNormals!==Ot||ft.morphColors!==Sn||ft.toneMapping!==$t||Ke.isWebGL2===!0&&ft.morphTargetsCount!==Tt)&&(Gt=!0):(Gt=!0,ft.__version=ae.version);let bi=ft.currentProgram;Gt===!0&&(bi=ji(ae,Z,ie));let ea=!1,mi=!1,Yi=!1;const Yt=bi.getUniforms(),qn=ft.uniforms;if(ze.useProgram(bi.program)&&(ea=!0,mi=!0,Yi=!0),ae.id!==de&&(de=ae.id,mi=!0),ea||Me!==C){Yt.setValue(q,"projectionMatrix",C.projectionMatrix),Yt.setValue(q,"viewMatrix",C.matrixWorldInverse);const Cn=Yt.map.cameraPosition;Cn!==void 0&&Cn.setValue(q,_e.setFromMatrixPosition(C.matrixWorld)),Ke.logarithmicDepthBuffer&&Yt.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Yt.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),Me!==C&&(Me=C,mi=!0,Yi=!0)}if(ie.isSkinnedMesh){Yt.setOptional(q,ie,"bindMatrix"),Yt.setOptional(q,ie,"bindMatrixInverse");const Cn=ie.skeleton;Cn&&(Ke.floatVertexTextures?(Cn.boneTexture===null&&Cn.computeBoneTexture(),Yt.setValue(q,"boneTexture",Cn.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ie.isBatchedMesh&&(Yt.setOptional(q,ie,"batchingTexture"),Yt.setValue(q,"batchingTexture",ie._matricesTexture,P));const ro=se.morphAttributes;if((ro.position!==void 0||ro.normal!==void 0||ro.color!==void 0&&Ke.isWebGL2===!0)&&ot.update(ie,se,bi),(mi||ft.receiveShadow!==ie.receiveShadow)&&(ft.receiveShadow=ie.receiveShadow,Yt.setValue(q,"receiveShadow",ie.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(qn.envMap.value=Fe,qn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),mi&&(Yt.setValue(q,"toneMappingExposure",R.toneMappingExposure),ft.needsLights&&Ai(qn,Yi),Le&&ae.fog===!0&&Ae.refreshFogUniforms(qn,Le),Ae.refreshMaterialUniforms(qn,ae,oe,j,ce),Rl.upload(q,Zo(ft),qn,P)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Rl.upload(q,Zo(ft),qn,P),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Yt.setValue(q,"center",ie.center),Yt.setValue(q,"modelViewMatrix",ie.modelViewMatrix),Yt.setValue(q,"normalMatrix",ie.normalMatrix),Yt.setValue(q,"modelMatrix",ie.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Cn=ae.uniformsGroups;for(let Cr=0,ta=Cn.length;Cr<ta;Cr++)if(Ke.isWebGL2){const is=Cn[Cr];Mt.update(is,bi),Mt.bind(is,bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bi}function Ai(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function Jo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(C,Z,se){rt.get(C.texture).__webglTexture=Z,rt.get(C.depthTexture).__webglTexture=se;const ae=rt.get(C);ae.__hasExternalTextures=!0,ae.__hasExternalTextures&&(ae.__autoAllocateDepthBuffer=se===void 0,ae.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,Z){const se=rt.get(C);se.__webglFramebuffer=Z,se.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(C,Z=0,se=0){O=C,W=Z,F=se;let ae=!0,ie=null,Le=!1,Xe=!1;if(C){const Fe=rt.get(C);Fe.__useDefaultFramebuffer!==void 0?(ze.bindFramebuffer(q.FRAMEBUFFER,null),ae=!1):Fe.__webglFramebuffer===void 0?P.setupRenderTarget(C):Fe.__hasExternalTextures&&P.rebindTextures(C,rt.get(C.texture).__webglTexture,rt.get(C.depthTexture).__webglTexture);const dt=C.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(Xe=!0);const lt=rt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(lt[Z])?ie=lt[Z][se]:ie=lt[Z],Le=!0):Ke.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?ie=rt.get(C).__webglMultisampledFramebuffer:Array.isArray(lt)?ie=lt[se]:ie=lt,E.copy(C.viewport),I.copy(C.scissor),le=C.scissorTest}else E.copy(X).multiplyScalar(oe).floor(),I.copy(b).multiplyScalar(oe).floor(),le=H;if(ze.bindFramebuffer(q.FRAMEBUFFER,ie)&&Ke.drawBuffers&&ae&&ze.drawBuffers(C,ie),ze.viewport(E),ze.scissor(I),ze.setScissorTest(le),Le){const Fe=rt.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe.__webglTexture,se)}else if(Xe){const Fe=rt.get(C.texture),dt=Z||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Fe.__webglTexture,se||0,dt)}de=-1},this.readRenderTargetPixels=function(C,Z,se,ae,ie,Le,Xe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=rt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(Je=Je[Xe]),Je){ze.bindFramebuffer(q.FRAMEBUFFER,Je);try{const Fe=C.texture,dt=Fe.format,lt=Fe.type;if(dt!==hi&&Oe.convert(dt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ct=lt===jo&&(Ve.has("EXT_color_buffer_half_float")||Ke.isWebGL2&&Ve.has("EXT_color_buffer_float"));if(lt!==Er&&Oe.convert(lt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(lt===Vi&&(Ke.isWebGL2||Ve.has("OES_texture_float")||Ve.has("WEBGL_color_buffer_float")))&&!ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-ae&&se>=0&&se<=C.height-ie&&q.readPixels(Z,se,ae,ie,Oe.convert(dt),Oe.convert(lt),Le)}finally{const Fe=O!==null?rt.get(O).__webglFramebuffer:null;ze.bindFramebuffer(q.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(C,Z,se=0){const ae=Math.pow(2,-se),ie=Math.floor(Z.image.width*ae),Le=Math.floor(Z.image.height*ae);P.setTexture2D(Z,0),q.copyTexSubImage2D(q.TEXTURE_2D,se,0,0,C.x,C.y,ie,Le),ze.unbindTexture()},this.copyTextureToTexture=function(C,Z,se,ae=0){const ie=Z.image.width,Le=Z.image.height,Xe=Oe.convert(se.format),Je=Oe.convert(se.type);P.setTexture2D(se,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,se.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,se.unpackAlignment),Z.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,ae,C.x,C.y,ie,Le,Xe,Je,Z.image.data):Z.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,ae,C.x,C.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Xe,Z.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,ae,C.x,C.y,Xe,Je,Z.image),ae===0&&se.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),ze.unbindTexture()},this.copyTextureToTexture3D=function(C,Z,se,ae,ie=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=C.max.x-C.min.x+1,Xe=C.max.y-C.min.y+1,Je=C.max.z-C.min.z+1,Fe=Oe.convert(ae.format),dt=Oe.convert(ae.type);let lt;if(ae.isData3DTexture)P.setTexture3D(ae,0),lt=q.TEXTURE_3D;else if(ae.isDataArrayTexture||ae.isCompressedArrayTexture)P.setTexture2DArray(ae,0),lt=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,ae.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,ae.unpackAlignment);const ct=q.getParameter(q.UNPACK_ROW_LENGTH),Ot=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Sn=q.getParameter(q.UNPACK_SKIP_PIXELS),$t=q.getParameter(q.UNPACK_SKIP_ROWS),Rn=q.getParameter(q.UNPACK_SKIP_IMAGES),Tt=se.isCompressedTexture?se.mipmaps[ie]:se.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Tt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Tt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,C.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,C.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,C.min.z),se.isDataTexture||se.isData3DTexture?q.texSubImage3D(lt,ie,Z.x,Z.y,Z.z,Le,Xe,Je,Fe,dt,Tt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(lt,ie,Z.x,Z.y,Z.z,Le,Xe,Je,Fe,Tt.data)):q.texSubImage3D(lt,ie,Z.x,Z.y,Z.z,Le,Xe,Je,Fe,dt,Tt),q.pixelStorei(q.UNPACK_ROW_LENGTH,ct),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ot),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Sn),q.pixelStorei(q.UNPACK_SKIP_ROWS,$t),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Rn),ie===0&&ae.generateMipmaps&&q.generateMipmap(lt),ze.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),ze.unbindTexture()},this.resetState=function(){W=0,F=0,O=null,ze.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ad?"display-p3":"srgb",n.unpackColorSpace=Ft.workingColorSpace===Fl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===fn?ts:ug}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ts?fn:Xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class XE extends Ng{}XE.prototype.isWebGL1Renderer=!0;class jE extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Pd extends Ar{constructor(e=1,n=32,s=16,a=0,c=Math.PI*2,f=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:s,phiStart:a,phiLength:c,thetaStart:f,thetaLength:u},n=Math.max(3,Math.floor(n)),s=Math.max(2,Math.floor(s));const h=Math.min(f+u,Math.PI);let g=0;const v=[],p=new J,y=new J,S=[],w=[],A=[],x=[];for(let _=0;_<=s;_++){const D=[],R=_/s;let L=0;_===0&&f===0?L=.5/n:_===s&&h===Math.PI&&(L=-.5/n);for(let W=0;W<=n;W++){const F=W/n;p.x=-e*Math.cos(a+F*c)*Math.sin(f+R*u),p.y=e*Math.cos(f+R*u),p.z=e*Math.sin(a+F*c)*Math.sin(f+R*u),w.push(p.x,p.y,p.z),y.copy(p).normalize(),A.push(y.x,y.y,y.z),x.push(F+L,1-R),D.push(g++)}v.push(D)}for(let _=0;_<s;_++)for(let D=0;D<n;D++){const R=v[_][D+1],L=v[_][D],W=v[_+1][D],F=v[_+1][D+1];(_!==0||f>0)&&S.push(R,L,F),(_!==s-1||h<Math.PI)&&S.push(L,W,F)}this.setIndex(S),this.setAttribute("position",new Ti(w,3)),this.setAttribute("normal",new Ti(A,3)),this.setAttribute("uv",new Ti(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class YE extends eo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dg,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qE extends YE{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new St(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new St(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new St(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ld extends xn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const td=new Jt,Im=new J,Um=new J;class Ig{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rd,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,s=this.matrix;Im.setFromMatrixPosition(e.matrixWorld),n.position.copy(Im),Um.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Um),n.updateMatrixWorld(),td.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(td)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fm=new Jt,Xo=new J,nd=new J;class $E extends Ig{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(e,n=0){const s=this.camera,a=this.matrix,c=e.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),Xo.setFromMatrixPosition(e.matrixWorld),s.position.copy(Xo),nd.copy(s.position),nd.add(this._cubeDirections[n]),s.up.copy(this._cubeUps[n]),s.lookAt(nd),s.updateMatrixWorld(),a.makeTranslation(-Xo.x,-Xo.y,-Xo.z),Fm.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fm)}}class Tl extends Ld{constructor(e,n,s=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=a,this.shadow=new $E}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class KE extends Ig{constructor(){super(new Ag(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ZE extends Ld{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new KE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class QE extends Ld{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);function Om(r,e){if(typeof r=="function")return r(e);r!=null&&(r.current=e)}function JE(...r){return e=>{let n=!1;const s=r.map(a=>{const c=Om(a,e);return!n&&typeof c=="function"&&(n=!0),c});if(n)return()=>{for(let a=0;a<s.length;a++){const c=s[a];typeof c=="function"?c():Om(r[a],null)}}}}var Ug=ut.forwardRef((r,e)=>{const{children:n,...s}=r,a=ut.Children.toArray(n),c=a.find(tw);if(c){const f=c.props.children,u=a.map(h=>h===c?ut.Children.count(f)>1?ut.Children.only(null):ut.isValidElement(f)?f.props.children:null:h);return Lt.jsx(_d,{...s,ref:e,children:ut.isValidElement(f)?ut.cloneElement(f,void 0,u):null})}return Lt.jsx(_d,{...s,ref:e,children:n})});Ug.displayName="Slot";var _d=ut.forwardRef((r,e)=>{const{children:n,...s}=r;if(ut.isValidElement(n)){const a=iw(n),c=nw(s,n.props);return n.type!==ut.Fragment&&(c.ref=e?JE(e,a):a),ut.cloneElement(n,c)}return ut.Children.count(n)>1?ut.Children.only(null):null});_d.displayName="SlotClone";var ew=({children:r})=>Lt.jsx(Lt.Fragment,{children:r});function tw(r){return ut.isValidElement(r)&&r.type===ew}function nw(r,e){const n={...e};for(const s in e){const a=r[s],c=e[s];/^on[A-Z]/.test(s)?a&&c?n[s]=(...u)=>{c(...u),a(...u)}:a&&(n[s]=a):s==="style"?n[s]={...a,...c}:s==="className"&&(n[s]=[a,c].filter(Boolean).join(" "))}return{...r,...n}}function iw(r){var s,a;let e=(s=Object.getOwnPropertyDescriptor(r.props,"ref"))==null?void 0:s.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?r.ref:(e=(a=Object.getOwnPropertyDescriptor(r,"ref"))==null?void 0:a.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?r.props.ref:r.props.ref||r.ref)}function Fg(r){var e,n,s="";if(typeof r=="string"||typeof r=="number")s+=r;else if(typeof r=="object")if(Array.isArray(r)){var a=r.length;for(e=0;e<a;e++)r[e]&&(n=Fg(r[e]))&&(s&&(s+=" "),s+=n)}else for(n in r)r[n]&&(s&&(s+=" "),s+=n);return s}function Og(){for(var r,e,n=0,s="",a=arguments.length;n<a;n++)(r=arguments[n])&&(e=Fg(r))&&(s&&(s+=" "),s+=e);return s}const km=r=>typeof r=="boolean"?`${r}`:r===0?"0":r,zm=Og,rw=(r,e)=>n=>{var s;if((e==null?void 0:e.variants)==null)return zm(r,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:a,defaultVariants:c}=e,f=Object.keys(a).map(g=>{const v=n==null?void 0:n[g],p=c==null?void 0:c[g];if(v===null)return null;const y=km(v)||km(p);return a[g][y]}),u=n&&Object.entries(n).reduce((g,v)=>{let[p,y]=v;return y===void 0||(g[p]=y),g},{}),h=e==null||(s=e.compoundVariants)===null||s===void 0?void 0:s.reduce((g,v)=>{let{class:p,className:y,...S}=v;return Object.entries(S).every(w=>{let[A,x]=w;return Array.isArray(x)?x.includes({...c,...u}[A]):{...c,...u}[A]===x})?[...g,p,y]:g},[]);return zm(r,f,h,n==null?void 0:n.class,n==null?void 0:n.className)},Dd="-",sw=r=>{const e=aw(r),{conflictingClassGroups:n,conflictingClassGroupModifiers:s}=r;return{getClassGroupId:f=>{const u=f.split(Dd);return u[0]===""&&u.length!==1&&u.shift(),kg(u,e)||ow(f)},getConflictingClassGroupIds:(f,u)=>{const h=n[f]||[];return u&&s[f]?[...h,...s[f]]:h}}},kg=(r,e)=>{var f;if(r.length===0)return e.classGroupId;const n=r[0],s=e.nextPart.get(n),a=s?kg(r.slice(1),s):void 0;if(a)return a;if(e.validators.length===0)return;const c=r.join(Dd);return(f=e.validators.find(({validator:u})=>u(c)))==null?void 0:f.classGroupId},Bm=/^\[(.+)\]$/,ow=r=>{if(Bm.test(r)){const e=Bm.exec(r)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},aw=r=>{const{theme:e,classGroups:n}=r,s={nextPart:new Map,validators:[]};for(const a in n)xd(n[a],s,a,e);return s},xd=(r,e,n,s)=>{r.forEach(a=>{if(typeof a=="string"){const c=a===""?e:Hm(e,a);c.classGroupId=n;return}if(typeof a=="function"){if(lw(a)){xd(a(s),e,n,s);return}e.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([c,f])=>{xd(f,Hm(e,c),n,s)})})},Hm=(r,e)=>{let n=r;return e.split(Dd).forEach(s=>{n.nextPart.has(s)||n.nextPart.set(s,{nextPart:new Map,validators:[]}),n=n.nextPart.get(s)}),n},lw=r=>r.isThemeGetter,cw=r=>{if(r<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,s=new Map;const a=(c,f)=>{n.set(c,f),e++,e>r&&(e=0,s=n,n=new Map)};return{get(c){let f=n.get(c);if(f!==void 0)return f;if((f=s.get(c))!==void 0)return a(c,f),f},set(c,f){n.has(c)?n.set(c,f):a(c,f)}}},yd="!",Sd=":",uw=Sd.length,dw=r=>{const{prefix:e,experimentalParseClassName:n}=r;let s=a=>{const c=[];let f=0,u=0,h=0,g;for(let w=0;w<a.length;w++){let A=a[w];if(f===0&&u===0){if(A===Sd){c.push(a.slice(h,w)),h=w+uw;continue}if(A==="/"){g=w;continue}}A==="["?f++:A==="]"?f--:A==="("?u++:A===")"&&u--}const v=c.length===0?a:a.substring(h),p=fw(v),y=p!==v,S=g&&g>h?g-h:void 0;return{modifiers:c,hasImportantModifier:y,baseClassName:p,maybePostfixModifierPosition:S}};if(e){const a=e+Sd,c=s;s=f=>f.startsWith(a)?c(f.substring(a.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:f,maybePostfixModifierPosition:void 0}}if(n){const a=s;s=c=>n({className:c,parseClassName:a})}return s},fw=r=>r.endsWith(yd)?r.substring(0,r.length-1):r.startsWith(yd)?r.substring(1):r,hw=r=>{const e=Object.fromEntries(r.orderSensitiveModifiers.map(s=>[s,!0]));return s=>{if(s.length<=1)return s;const a=[];let c=[];return s.forEach(f=>{f[0]==="["||e[f]?(a.push(...c.sort(),f),c=[]):c.push(f)}),a.push(...c.sort()),a}},pw=r=>({cache:cw(r.cacheSize),parseClassName:dw(r),sortModifiers:hw(r),...sw(r)}),mw=/\s+/,gw=(r,e)=>{const{parseClassName:n,getClassGroupId:s,getConflictingClassGroupIds:a,sortModifiers:c}=e,f=[],u=r.trim().split(mw);let h="";for(let g=u.length-1;g>=0;g-=1){const v=u[g],{isExternal:p,modifiers:y,hasImportantModifier:S,baseClassName:w,maybePostfixModifierPosition:A}=n(v);if(p){h=v+(h.length>0?" "+h:h);continue}let x=!!A,_=s(x?w.substring(0,A):w);if(!_){if(!x){h=v+(h.length>0?" "+h:h);continue}if(_=s(w),!_){h=v+(h.length>0?" "+h:h);continue}x=!1}const D=c(y).join(":"),R=S?D+yd:D,L=R+_;if(f.includes(L))continue;f.push(L);const W=a(_,x);for(let F=0;F<W.length;++F){const O=W[F];f.push(R+O)}h=v+(h.length>0?" "+h:h)}return h};function vw(){let r=0,e,n,s="";for(;r<arguments.length;)(e=arguments[r++])&&(n=zg(e))&&(s&&(s+=" "),s+=n);return s}const zg=r=>{if(typeof r=="string")return r;let e,n="";for(let s=0;s<r.length;s++)r[s]&&(e=zg(r[s]))&&(n&&(n+=" "),n+=e);return n};function _w(r,...e){let n,s,a,c=f;function f(h){const g=e.reduce((v,p)=>p(v),r());return n=pw(g),s=n.cache.get,a=n.cache.set,c=u,u(h)}function u(h){const g=s(h);if(g)return g;const v=gw(h,n);return a(h,v),v}return function(){return c(vw.apply(null,arguments))}}const cn=r=>{const e=n=>n[r]||[];return e.isThemeGetter=!0,e},Bg=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Hg=/^\((?:(\w[\w-]*):)?(.+)\)$/i,xw=/^\d+\/\d+$/,yw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Sw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Mw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ew=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ww=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Gs=r=>xw.test(r),yt=r=>!!r&&!Number.isNaN(Number(r)),jr=r=>!!r&&Number.isInteger(Number(r)),Gm=r=>r.endsWith("%")&&yt(r.slice(0,-1)),xr=r=>yw.test(r),Tw=()=>!0,Aw=r=>Sw.test(r)&&!Mw.test(r),Nd=()=>!1,bw=r=>Ew.test(r),Rw=r=>ww.test(r),Cw=r=>!Ne(r)&&!Ie(r),Pw=r=>no(r,Wg,Nd),Ne=r=>Bg.test(r),Yr=r=>no(r,Xg,Aw),id=r=>no(r,Hw,yt),Lw=r=>no(r,Gg,Nd),Dw=r=>no(r,Vg,Rw),Nw=r=>no(r,Nd,bw),Ie=r=>Hg.test(r),Al=r=>io(r,Xg),Iw=r=>io(r,Gw),Uw=r=>io(r,Gg),Fw=r=>io(r,Wg),Ow=r=>io(r,Vg),kw=r=>io(r,Vw,!0),no=(r,e,n)=>{const s=Bg.exec(r);return s?s[1]?e(s[1]):n(s[2]):!1},io=(r,e,n=!1)=>{const s=Hg.exec(r);return s?s[1]?e(s[1]):n:!1},Gg=r=>r==="position",zw=new Set(["image","url"]),Vg=r=>zw.has(r),Bw=new Set(["length","size","percentage"]),Wg=r=>Bw.has(r),Xg=r=>r==="length",Hw=r=>r==="number",Gw=r=>r==="family-name",Vw=r=>r==="shadow",Ww=()=>{const r=cn("color"),e=cn("font"),n=cn("text"),s=cn("font-weight"),a=cn("tracking"),c=cn("leading"),f=cn("breakpoint"),u=cn("container"),h=cn("spacing"),g=cn("radius"),v=cn("shadow"),p=cn("inset-shadow"),y=cn("drop-shadow"),S=cn("blur"),w=cn("perspective"),A=cn("aspect"),x=cn("ease"),_=cn("animate"),D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],R=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],L=()=>["auto","hidden","clip","visible","scroll"],W=()=>["auto","contain","none"],F=()=>[Gs,"px","full","auto",Ie,Ne,h],O=()=>[jr,"none","subgrid",Ie,Ne],de=()=>["auto",{span:["full",jr,Ie,Ne]},Ie,Ne],Me=()=>[jr,"auto",Ie,Ne],E=()=>["auto","min","max","fr",Ie,Ne],I=()=>[Ie,Ne,h],le=()=>["start","end","center","between","around","evenly","stretch","baseline"],fe=()=>["start","end","center","stretch"],z=()=>[Ie,Ne,h],Q=()=>["px",...z()],j=()=>["px","auto",...z()],oe=()=>[Gs,"auto","px","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",Ie,Ne,h],k=()=>[r,Ie,Ne],$=()=>[Gm,Yr],X=()=>["","none","full",g,Ie,Ne],b=()=>["",yt,Al,Yr],H=()=>["solid","dashed","dotted","double"],Y=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>["","none",S,Ie,Ne],re=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Ie,Ne],ce=()=>["none",yt,Ie,Ne],Ee=()=>["none",yt,Ie,Ne],xe=()=>[yt,Ie,Ne],_e=()=>[Gs,"full","px",Ie,Ne,h];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[xr],breakpoint:[xr],color:[Tw],container:[xr],"drop-shadow":[xr],ease:["in","out","in-out"],font:[Cw],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[xr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[xr],shadow:[xr],spacing:[yt],text:[xr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Gs,Ne,Ie,A]}],container:["container"],columns:[{columns:[yt,Ne,Ie,u]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...R(),Ne,Ie]}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:F()}],"inset-x":[{"inset-x":F()}],"inset-y":[{"inset-y":F()}],start:[{start:F()}],end:[{end:F()}],top:[{top:F()}],right:[{right:F()}],bottom:[{bottom:F()}],left:[{left:F()}],visibility:["visible","invisible","collapse"],z:[{z:[jr,"auto",Ie,Ne]}],basis:[{basis:[Gs,"full","auto",Ie,Ne,u,h]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[yt,Gs,"auto","initial","none",Ne]}],grow:[{grow:["",yt,Ie,Ne]}],shrink:[{shrink:["",yt,Ie,Ne]}],order:[{order:[jr,"first","last","none",Ie,Ne]}],"grid-cols":[{"grid-cols":O()}],"col-start-end":[{col:de()}],"col-start":[{"col-start":Me()}],"col-end":[{"col-end":Me()}],"grid-rows":[{"grid-rows":O()}],"row-start-end":[{row:de()}],"row-start":[{"row-start":Me()}],"row-end":[{"row-end":Me()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":E()}],"auto-rows":[{"auto-rows":E()}],gap:[{gap:I()}],"gap-x":[{"gap-x":I()}],"gap-y":[{"gap-y":I()}],"justify-content":[{justify:[...le(),"normal"]}],"justify-items":[{"justify-items":[...fe(),"normal"]}],"justify-self":[{"justify-self":["auto",...fe()]}],"align-content":[{content:["normal",...le()]}],"align-items":[{items:[...fe(),"baseline"]}],"align-self":[{self:["auto",...fe(),"baseline"]}],"place-content":[{"place-content":le()}],"place-items":[{"place-items":[...fe(),"baseline"]}],"place-self":[{"place-self":["auto",...fe()]}],p:[{p:Q()}],px:[{px:Q()}],py:[{py:Q()}],ps:[{ps:Q()}],pe:[{pe:Q()}],pt:[{pt:Q()}],pr:[{pr:Q()}],pb:[{pb:Q()}],pl:[{pl:Q()}],m:[{m:j()}],mx:[{mx:j()}],my:[{my:j()}],ms:[{ms:j()}],me:[{me:j()}],mt:[{mt:j()}],mr:[{mr:j()}],mb:[{mb:j()}],ml:[{ml:j()}],"space-x":[{"space-x":z()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":z()}],"space-y-reverse":["space-y-reverse"],size:[{size:oe()}],w:[{w:[u,"screen",...oe()]}],"min-w":[{"min-w":[u,"screen","none",...oe()]}],"max-w":[{"max-w":[u,"screen","none","prose",{screen:[f]},...oe()]}],h:[{h:["screen",...oe()]}],"min-h":[{"min-h":["screen","none",...oe()]}],"max-h":[{"max-h":["screen",...oe()]}],"font-size":[{text:["base",n,Al,Yr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,Ie,id]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Gm,Ne]}],"font-family":[{font:[Iw,Ne,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,Ie,Ne]}],"line-clamp":[{"line-clamp":[yt,"none",Ie,id]}],leading:[{leading:[Ie,Ne,c,h]}],"list-image":[{"list-image":["none",Ie,Ne]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Ie,Ne]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:k()}],"text-color":[{text:k()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...H(),"wavy"]}],"text-decoration-thickness":[{decoration:[yt,"from-font","auto",Ie,Yr]}],"text-decoration-color":[{decoration:k()}],"underline-offset":[{"underline-offset":[yt,"auto",Ie,Ne]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:["px",...z()]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ie,Ne]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ie,Ne]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...R(),Uw,Lw]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",Fw,Pw]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},jr,Ie,Ne],radial:["",Ie,Ne],conic:[jr,Ie,Ne]},Ow,Dw]}],"bg-color":[{bg:k()}],"gradient-from-pos":[{from:$()}],"gradient-via-pos":[{via:$()}],"gradient-to-pos":[{to:$()}],"gradient-from":[{from:k()}],"gradient-via":[{via:k()}],"gradient-to":[{to:k()}],rounded:[{rounded:X()}],"rounded-s":[{"rounded-s":X()}],"rounded-e":[{"rounded-e":X()}],"rounded-t":[{"rounded-t":X()}],"rounded-r":[{"rounded-r":X()}],"rounded-b":[{"rounded-b":X()}],"rounded-l":[{"rounded-l":X()}],"rounded-ss":[{"rounded-ss":X()}],"rounded-se":[{"rounded-se":X()}],"rounded-ee":[{"rounded-ee":X()}],"rounded-es":[{"rounded-es":X()}],"rounded-tl":[{"rounded-tl":X()}],"rounded-tr":[{"rounded-tr":X()}],"rounded-br":[{"rounded-br":X()}],"rounded-bl":[{"rounded-bl":X()}],"border-w":[{border:b()}],"border-w-x":[{"border-x":b()}],"border-w-y":[{"border-y":b()}],"border-w-s":[{"border-s":b()}],"border-w-e":[{"border-e":b()}],"border-w-t":[{"border-t":b()}],"border-w-r":[{"border-r":b()}],"border-w-b":[{"border-b":b()}],"border-w-l":[{"border-l":b()}],"divide-x":[{"divide-x":b()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":b()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...H(),"hidden","none"]}],"divide-style":[{divide:[...H(),"hidden","none"]}],"border-color":[{border:k()}],"border-color-x":[{"border-x":k()}],"border-color-y":[{"border-y":k()}],"border-color-s":[{"border-s":k()}],"border-color-e":[{"border-e":k()}],"border-color-t":[{"border-t":k()}],"border-color-r":[{"border-r":k()}],"border-color-b":[{"border-b":k()}],"border-color-l":[{"border-l":k()}],"divide-color":[{divide:k()}],"outline-style":[{outline:[...H(),"none","hidden"]}],"outline-offset":[{"outline-offset":[yt,Ie,Ne]}],"outline-w":[{outline:["",yt,Al,Yr]}],"outline-color":[{outline:[r]}],shadow:[{shadow:["","none",v,kw,Nw]}],"shadow-color":[{shadow:k()}],"inset-shadow":[{"inset-shadow":["none",Ie,Ne,p]}],"inset-shadow-color":[{"inset-shadow":k()}],"ring-w":[{ring:b()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:k()}],"ring-offset-w":[{"ring-offset":[yt,Yr]}],"ring-offset-color":[{"ring-offset":k()}],"inset-ring-w":[{"inset-ring":b()}],"inset-ring-color":[{"inset-ring":k()}],opacity:[{opacity:[yt,Ie,Ne]}],"mix-blend":[{"mix-blend":[...Y(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Y()}],filter:[{filter:["","none",Ie,Ne]}],blur:[{blur:V()}],brightness:[{brightness:[yt,Ie,Ne]}],contrast:[{contrast:[yt,Ie,Ne]}],"drop-shadow":[{"drop-shadow":["","none",y,Ie,Ne]}],grayscale:[{grayscale:["",yt,Ie,Ne]}],"hue-rotate":[{"hue-rotate":[yt,Ie,Ne]}],invert:[{invert:["",yt,Ie,Ne]}],saturate:[{saturate:[yt,Ie,Ne]}],sepia:[{sepia:["",yt,Ie,Ne]}],"backdrop-filter":[{"backdrop-filter":["","none",Ie,Ne]}],"backdrop-blur":[{"backdrop-blur":V()}],"backdrop-brightness":[{"backdrop-brightness":[yt,Ie,Ne]}],"backdrop-contrast":[{"backdrop-contrast":[yt,Ie,Ne]}],"backdrop-grayscale":[{"backdrop-grayscale":["",yt,Ie,Ne]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[yt,Ie,Ne]}],"backdrop-invert":[{"backdrop-invert":["",yt,Ie,Ne]}],"backdrop-opacity":[{"backdrop-opacity":[yt,Ie,Ne]}],"backdrop-saturate":[{"backdrop-saturate":[yt,Ie,Ne]}],"backdrop-sepia":[{"backdrop-sepia":["",yt,Ie,Ne]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":z()}],"border-spacing-x":[{"border-spacing-x":z()}],"border-spacing-y":[{"border-spacing-y":z()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Ie,Ne]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[yt,"initial",Ie,Ne]}],ease:[{ease:["linear","initial",x,Ie,Ne]}],delay:[{delay:[yt,Ie,Ne]}],animate:[{animate:["none",_,Ie,Ne]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[w,Ie,Ne]}],"perspective-origin":[{"perspective-origin":re()}],rotate:[{rotate:ce()}],"rotate-x":[{"rotate-x":ce()}],"rotate-y":[{"rotate-y":ce()}],"rotate-z":[{"rotate-z":ce()}],scale:[{scale:Ee()}],"scale-x":[{"scale-x":Ee()}],"scale-y":[{"scale-y":Ee()}],"scale-z":[{"scale-z":Ee()}],"scale-3d":["scale-3d"],skew:[{skew:xe()}],"skew-x":[{"skew-x":xe()}],"skew-y":[{"skew-y":xe()}],transform:[{transform:[Ie,Ne,"","none","gpu","cpu"]}],"transform-origin":[{origin:re()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:_e()}],"translate-x":[{"translate-x":_e()}],"translate-y":[{"translate-y":_e()}],"translate-z":[{"translate-z":_e()}],"translate-none":["translate-none"],accent:[{accent:k()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:k()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ie,Ne]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":z()}],"scroll-mx":[{"scroll-mx":z()}],"scroll-my":[{"scroll-my":z()}],"scroll-ms":[{"scroll-ms":z()}],"scroll-me":[{"scroll-me":z()}],"scroll-mt":[{"scroll-mt":z()}],"scroll-mr":[{"scroll-mr":z()}],"scroll-mb":[{"scroll-mb":z()}],"scroll-ml":[{"scroll-ml":z()}],"scroll-p":[{"scroll-p":z()}],"scroll-px":[{"scroll-px":z()}],"scroll-py":[{"scroll-py":z()}],"scroll-ps":[{"scroll-ps":z()}],"scroll-pe":[{"scroll-pe":z()}],"scroll-pt":[{"scroll-pt":z()}],"scroll-pr":[{"scroll-pr":z()}],"scroll-pb":[{"scroll-pb":z()}],"scroll-pl":[{"scroll-pl":z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ie,Ne]}],fill:[{fill:["none",...k()]}],"stroke-w":[{stroke:[yt,Al,Yr,id]}],stroke:[{stroke:["none",...k()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}},Xw=_w(Ww);function jg(...r){return Xw(Og(r))}const jw=rw("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Yg=ut.forwardRef(({className:r,variant:e,size:n,asChild:s=!1,...a},c)=>{const f=s?Ug:"button";return Lt.jsx(f,{className:jg(jw({variant:e,size:n,className:r})),ref:c,...a})});Yg.displayName="Button";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qg=(...r)=>r.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=ut.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:a="",children:c,iconNode:f,...u},h)=>ut.createElement("svg",{ref:h,...qw,width:e,height:e,stroke:r,strokeWidth:s?Number(n)*24/Number(e):n,className:qg("lucide",a),...u},[...f.map(([g,v])=>ut.createElement(g,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=(r,e)=>{const n=ut.forwardRef(({className:s,...a},c)=>ut.createElement($w,{ref:c,iconNode:e,className:qg(`lucide-${Yw(r)}`,s),...a}));return n.displayName=`${r}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Zw=Bl("Info",Kw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Jw=Bl("LoaderCircle",Qw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]],Vm=Bl("MousePointer2",eT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],nT=Bl("Power",tT);var iT=Jm();const rT=Qm(iT);function sT(r){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",e.appendChild(n),n.styleSheet?n.styleSheet.cssText=r:n.appendChild(document.createTextNode(r))}const oT=r=>{switch(r){case"success":return cT;case"info":return dT;case"warning":return uT;case"error":return fT;default:return null}},aT=Array(12).fill(0),lT=({visible:r,className:e})=>Ce.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":r},Ce.createElement("div",{className:"sonner-spinner"},aT.map((n,s)=>Ce.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${s}`})))),cT=Ce.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Ce.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),uT=Ce.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},Ce.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),dT=Ce.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Ce.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),fT=Ce.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},Ce.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),hT=Ce.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},Ce.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),Ce.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),pT=()=>{const[r,e]=Ce.useState(document.hidden);return Ce.useEffect(()=>{const n=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),r};let Md=1;class mT{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{const n=this.subscribers.indexOf(e);this.subscribers.splice(n,1)}),this.publish=e=>{this.subscribers.forEach(n=>n(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var n;const{message:s,...a}=e,c=typeof(e==null?void 0:e.id)=="number"||((n=e.id)==null?void 0:n.length)>0?e.id:Md++,f=this.toasts.find(h=>h.id===c),u=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(c)&&this.dismissedToasts.delete(c),f?this.toasts=this.toasts.map(h=>h.id===c?(this.publish({...h,...e,id:c,title:s}),{...h,...e,id:c,dismissible:u,title:s}):h):this.addToast({title:s,...a,dismissible:u,id:c}),c},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(n=>{this.subscribers.forEach(s=>s({id:n.id,dismiss:!0}))}),requestAnimationFrame(()=>this.subscribers.forEach(n=>n({id:e,dismiss:!0}))),e),this.message=(e,n)=>this.create({...n,message:e}),this.error=(e,n)=>this.create({...n,message:e,type:"error"}),this.success=(e,n)=>this.create({...n,type:"success",message:e}),this.info=(e,n)=>this.create({...n,type:"info",message:e}),this.warning=(e,n)=>this.create({...n,type:"warning",message:e}),this.loading=(e,n)=>this.create({...n,type:"loading",message:e}),this.promise=(e,n)=>{if(!n)return;let s;n.loading!==void 0&&(s=this.create({...n,promise:e,type:"loading",message:n.loading,description:typeof n.description!="function"?n.description:void 0}));const a=Promise.resolve(e instanceof Function?e():e);let c=s!==void 0,f;const u=a.then(async g=>{if(f=["resolve",g],Ce.isValidElement(g))c=!1,this.create({id:s,type:"default",message:g});else if(vT(g)&&!g.ok){c=!1;const p=typeof n.error=="function"?await n.error(`HTTP error! status: ${g.status}`):n.error,y=typeof n.description=="function"?await n.description(`HTTP error! status: ${g.status}`):n.description,S=typeof p=="object"?p:{message:p};this.create({id:s,type:"error",description:y,...S})}else if(g instanceof Error){c=!1;const p=typeof n.error=="function"?await n.error(g):n.error,y=typeof n.description=="function"?await n.description(g):n.description,S=typeof p=="object"?p:{message:p};this.create({id:s,type:"error",description:y,...S})}else if(n.success!==void 0){c=!1;const p=typeof n.success=="function"?await n.success(g):n.success,y=typeof n.description=="function"?await n.description(g):n.description,S=typeof p=="object"?p:{message:p};this.create({id:s,type:"success",description:y,...S})}}).catch(async g=>{if(f=["reject",g],n.error!==void 0){c=!1;const v=typeof n.error=="function"?await n.error(g):n.error,p=typeof n.description=="function"?await n.description(g):n.description,y=typeof v=="object"?v:{message:v};this.create({id:s,type:"error",description:p,...y})}}).finally(()=>{c&&(this.dismiss(s),s=void 0),n.finally==null||n.finally.call(n)}),h=()=>new Promise((g,v)=>u.then(()=>f[0]==="reject"?v(f[1]):g(f[1])).catch(v));return typeof s!="string"&&typeof s!="number"?{unwrap:h}:Object.assign(s,{unwrap:h})},this.custom=(e,n)=>{const s=(n==null?void 0:n.id)||Md++;return this.create({jsx:e(s),id:s,...n}),s},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const On=new mT,gT=(r,e)=>{const n=(e==null?void 0:e.id)||Md++;return On.addToast({title:r,...e,id:n}),n},vT=r=>r&&typeof r=="object"&&"ok"in r&&typeof r.ok=="boolean"&&"status"in r&&typeof r.status=="number",_T=gT,xT=()=>On.toasts,yT=()=>On.getActiveToasts(),Wm=Object.assign(_T,{success:On.success,info:On.info,warning:On.warning,error:On.error,custom:On.custom,message:On.message,promise:On.promise,dismiss:On.dismiss,loading:On.loading},{getHistory:xT,getToasts:yT});sT("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function bl(r){return r.label!==void 0}const ST=3,MT="24px",ET="16px",Xm=4e3,wT=356,TT=14,AT=45,bT=200;function yi(...r){return r.filter(Boolean).join(" ")}function RT(r){const[e,n]=r.split("-"),s=[];return e&&s.push(e),n&&s.push(n),s}const CT=r=>{var e,n,s,a,c,f,u,h,g;const{invert:v,toast:p,unstyled:y,interacting:S,setHeights:w,visibleToasts:A,heights:x,index:_,toasts:D,expanded:R,removeToast:L,defaultRichColors:W,closeButton:F,style:O,cancelButtonStyle:de,actionButtonStyle:Me,className:E="",descriptionClassName:I="",duration:le,position:fe,gap:z,expandByDefault:Q,classNames:j,icons:oe,closeButtonAriaLabel:k="Close toast"}=r,[$,X]=Ce.useState(null),[b,H]=Ce.useState(null),[Y,V]=Ce.useState(!1),[re,ce]=Ce.useState(!1),[Ee,xe]=Ce.useState(!1),[_e,Ye]=Ce.useState(!1),[qe,q]=Ce.useState(!1),[At,Ve]=Ce.useState(0),[Ke,ze]=Ce.useState(0),xt=Ce.useRef(p.duration||le||Xm),rt=Ce.useRef(null),P=Ce.useRef(null),T=_===0,te=_+1<=A,pe=p.type,me=p.dismissible!==!1,Se=p.className||"",He=p.descriptionClassName||"",Ae=Ce.useMemo(()=>x.findIndex(ue=>ue.toastId===p.id)||0,[x,p.id]),Ue=Ce.useMemo(()=>{var ue;return(ue=p.closeButton)!=null?ue:F},[p.closeButton,F]),$e=Ce.useMemo(()=>p.duration||le||Xm,[p.duration,le]),st=Ce.useRef(0),he=Ce.useRef(0),vt=Ce.useRef(0),ot=Ce.useRef(null),[tt,je]=fe.split("-"),Oe=Ce.useMemo(()=>x.reduce((ue,be,Pe)=>Pe>=Ae?ue:ue+be.height,0),[x,Ae]),nt=pT(),Mt=p.invert||v,bt=pe==="loading";he.current=Ce.useMemo(()=>Ae*z+Oe,[Ae,Oe]),Ce.useEffect(()=>{xt.current=$e},[$e]),Ce.useEffect(()=>{V(!0)},[]),Ce.useEffect(()=>{const ue=P.current;if(ue){const be=ue.getBoundingClientRect().height;return ze(be),w(Pe=>[{toastId:p.id,height:be,position:p.position},...Pe]),()=>w(Pe=>Pe.filter(at=>at.toastId!==p.id))}},[w,p.id]),Ce.useLayoutEffect(()=>{if(!Y)return;const ue=P.current,be=ue.style.height;ue.style.height="auto";const Pe=ue.getBoundingClientRect().height;ue.style.height=be,ze(Pe),w(at=>at.find(pt=>pt.toastId===p.id)?at.map(pt=>pt.toastId===p.id?{...pt,height:Pe}:pt):[{toastId:p.id,height:Pe,position:p.position},...at])},[Y,p.title,p.description,w,p.id]);const et=Ce.useCallback(()=>{ce(!0),Ve(he.current),w(ue=>ue.filter(be=>be.toastId!==p.id)),setTimeout(()=>{L(p)},bT)},[p,L,w,he]);Ce.useEffect(()=>{if(p.promise&&pe==="loading"||p.duration===1/0||p.type==="loading")return;let ue;return R||S||nt?(()=>{if(vt.current<st.current){const at=new Date().getTime()-st.current;xt.current=xt.current-at}vt.current=new Date().getTime()})():(()=>{xt.current!==1/0&&(st.current=new Date().getTime(),ue=setTimeout(()=>{p.onAutoClose==null||p.onAutoClose.call(p,p),et()},xt.current))})(),()=>clearTimeout(ue)},[R,S,p,pe,nt,et]),Ce.useEffect(()=>{p.delete&&et()},[et,p.delete]);function Rt(){var ue;if(oe!=null&&oe.loading){var be;return Ce.createElement("div",{className:yi(j==null?void 0:j.loader,p==null||(be=p.classNames)==null?void 0:be.loader,"sonner-loader"),"data-visible":pe==="loading"},oe.loading)}return Ce.createElement(lT,{className:yi(j==null?void 0:j.loader,p==null||(ue=p.classNames)==null?void 0:ue.loader),visible:pe==="loading"})}var N,we;return Ce.createElement("li",{tabIndex:0,ref:P,className:yi(E,Se,j==null?void 0:j.toast,p==null||(e=p.classNames)==null?void 0:e.toast,j==null?void 0:j.default,j==null?void 0:j[pe],p==null||(n=p.classNames)==null?void 0:n[pe]),"data-sonner-toast":"","data-rich-colors":(N=p.richColors)!=null?N:W,"data-styled":!(p.jsx||p.unstyled||y),"data-mounted":Y,"data-promise":!!p.promise,"data-swiped":qe,"data-removed":re,"data-visible":te,"data-y-position":tt,"data-x-position":je,"data-index":_,"data-front":T,"data-swiping":Ee,"data-dismissible":me,"data-type":pe,"data-invert":Mt,"data-swipe-out":_e,"data-swipe-direction":b,"data-expanded":!!(R||Q&&Y),style:{"--index":_,"--toasts-before":_,"--z-index":D.length-_,"--offset":`${re?At:he.current}px`,"--initial-height":Q?"auto":`${Ke}px`,...O,...p.style},onDragEnd:()=>{xe(!1),X(null),ot.current=null},onPointerDown:ue=>{bt||!me||(rt.current=new Date,Ve(he.current),ue.target.setPointerCapture(ue.pointerId),ue.target.tagName!=="BUTTON"&&(xe(!0),ot.current={x:ue.clientX,y:ue.clientY}))},onPointerUp:()=>{var ue,be,Pe;if(_e||!me)return;ot.current=null;const at=Number(((ue=P.current)==null?void 0:ue.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),wt=Number(((be=P.current)==null?void 0:be.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),pt=new Date().getTime()-((Pe=rt.current)==null?void 0:Pe.getTime()),It=$==="x"?at:wt,_t=Math.abs(It)/pt;if(Math.abs(It)>=AT||_t>.11){Ve(he.current),p.onDismiss==null||p.onDismiss.call(p,p),H($==="x"?at>0?"right":"left":wt>0?"down":"up"),et(),Ye(!0);return}else{var Dt,Ut;(Dt=P.current)==null||Dt.style.setProperty("--swipe-amount-x","0px"),(Ut=P.current)==null||Ut.style.setProperty("--swipe-amount-y","0px")}q(!1),xe(!1),X(null)},onPointerMove:ue=>{var be,Pe,at;if(!ot.current||!me||((be=window.getSelection())==null?void 0:be.toString().length)>0)return;const pt=ue.clientY-ot.current.y,It=ue.clientX-ot.current.x;var _t;const Dt=(_t=r.swipeDirections)!=null?_t:RT(fe);!$&&(Math.abs(It)>1||Math.abs(pt)>1)&&X(Math.abs(It)>Math.abs(pt)?"x":"y");let Ut={x:0,y:0};const br=yn=>1/(1.5+Math.abs(yn)/20);if($==="y"){if(Dt.includes("top")||Dt.includes("bottom"))if(Dt.includes("top")&&pt<0||Dt.includes("bottom")&&pt>0)Ut.y=pt;else{const yn=pt*br(pt);Ut.y=Math.abs(yn)<Math.abs(pt)?yn:pt}}else if($==="x"&&(Dt.includes("left")||Dt.includes("right")))if(Dt.includes("left")&&It<0||Dt.includes("right")&&It>0)Ut.x=It;else{const yn=It*br(It);Ut.x=Math.abs(yn)<Math.abs(It)?yn:It}(Math.abs(Ut.x)>0||Math.abs(Ut.y)>0)&&q(!0),(Pe=P.current)==null||Pe.style.setProperty("--swipe-amount-x",`${Ut.x}px`),(at=P.current)==null||at.style.setProperty("--swipe-amount-y",`${Ut.y}px`)}},Ue&&!p.jsx&&pe!=="loading"?Ce.createElement("button",{"aria-label":k,"data-disabled":bt,"data-close-button":!0,onClick:bt||!me?()=>{}:()=>{et(),p.onDismiss==null||p.onDismiss.call(p,p)},className:yi(j==null?void 0:j.closeButton,p==null||(s=p.classNames)==null?void 0:s.closeButton)},(we=oe==null?void 0:oe.close)!=null?we:hT):null,pe||p.icon||p.promise?Ce.createElement("div",{"data-icon":"",className:yi(j==null?void 0:j.icon,p==null||(a=p.classNames)==null?void 0:a.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||Rt():null,p.type!=="loading"?p.icon||(oe==null?void 0:oe[pe])||oT(pe):null):null,Ce.createElement("div",{"data-content":"",className:yi(j==null?void 0:j.content,p==null||(c=p.classNames)==null?void 0:c.content)},Ce.createElement("div",{"data-title":"",className:yi(j==null?void 0:j.title,p==null||(f=p.classNames)==null?void 0:f.title)},p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title),p.description?Ce.createElement("div",{"data-description":"",className:yi(I,He,j==null?void 0:j.description,p==null||(u=p.classNames)==null?void 0:u.description)},typeof p.description=="function"?p.description():p.description):null),Ce.isValidElement(p.cancel)?p.cancel:p.cancel&&bl(p.cancel)?Ce.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||de,onClick:ue=>{bl(p.cancel)&&me&&(p.cancel.onClick==null||p.cancel.onClick.call(p.cancel,ue),et())},className:yi(j==null?void 0:j.cancelButton,p==null||(h=p.classNames)==null?void 0:h.cancelButton)},p.cancel.label):null,Ce.isValidElement(p.action)?p.action:p.action&&bl(p.action)?Ce.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||Me,onClick:ue=>{bl(p.action)&&(p.action.onClick==null||p.action.onClick.call(p.action,ue),!ue.defaultPrevented&&et())},className:yi(j==null?void 0:j.actionButton,p==null||(g=p.classNames)==null?void 0:g.actionButton)},p.action.label):null)};function jm(){if(typeof window>"u"||typeof document>"u")return"ltr";const r=document.documentElement.getAttribute("dir");return r==="auto"||!r?window.getComputedStyle(document.documentElement).direction:r}function PT(r,e){const n={};return[r,e].forEach((s,a)=>{const c=a===1,f=c?"--mobile-offset":"--offset",u=c?ET:MT;function h(g){["top","right","bottom","left"].forEach(v=>{n[`${f}-${v}`]=typeof g=="number"?`${g}px`:g})}typeof s=="number"||typeof s=="string"?h(s):typeof s=="object"?["top","right","bottom","left"].forEach(g=>{s[g]===void 0?n[`${f}-${g}`]=u:n[`${f}-${g}`]=typeof s[g]=="number"?`${s[g]}px`:s[g]}):h(u)}),n}const $g=Ce.forwardRef(function(e,n){const{invert:s,position:a="bottom-right",hotkey:c=["altKey","KeyT"],expand:f,closeButton:u,className:h,offset:g,mobileOffset:v,theme:p="light",richColors:y,duration:S,style:w,visibleToasts:A=ST,toastOptions:x,dir:_=jm(),gap:D=TT,icons:R,containerAriaLabel:L="Notifications"}=e,[W,F]=Ce.useState([]),O=Ce.useMemo(()=>Array.from(new Set([a].concat(W.filter(b=>b.position).map(b=>b.position)))),[W,a]),[de,Me]=Ce.useState([]),[E,I]=Ce.useState(!1),[le,fe]=Ce.useState(!1),[z,Q]=Ce.useState(p!=="system"?p:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),j=Ce.useRef(null),oe=c.join("+").replace(/Key/g,"").replace(/Digit/g,""),k=Ce.useRef(null),$=Ce.useRef(!1),X=Ce.useCallback(b=>{F(H=>{var Y;return(Y=H.find(V=>V.id===b.id))!=null&&Y.delete||On.dismiss(b.id),H.filter(({id:V})=>V!==b.id)})},[]);return Ce.useEffect(()=>On.subscribe(b=>{if(b.dismiss){const H=W.map(Y=>Y.id===b.id?{...Y,delete:!0}:Y);requestAnimationFrame(()=>{F(H)});return}setTimeout(()=>{rT.flushSync(()=>{F(H=>{const Y=H.findIndex(V=>V.id===b.id);return Y!==-1?[...H.slice(0,Y),{...H[Y],...b},...H.slice(Y+1)]:[b,...H]})})})}),[W]),Ce.useEffect(()=>{if(p!=="system"){Q(p);return}if(p==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?Q("dark"):Q("light")),typeof window>"u")return;const b=window.matchMedia("(prefers-color-scheme: dark)");try{b.addEventListener("change",({matches:H})=>{Q(H?"dark":"light")})}catch{b.addListener(({matches:Y})=>{try{Q(Y?"dark":"light")}catch(V){console.error(V)}})}},[p]),Ce.useEffect(()=>{W.length<=1&&I(!1)},[W]),Ce.useEffect(()=>{const b=H=>{var Y;if(c.every(ce=>H[ce]||H.code===ce)){var re;I(!0),(re=j.current)==null||re.focus()}H.code==="Escape"&&(document.activeElement===j.current||(Y=j.current)!=null&&Y.contains(document.activeElement))&&I(!1)};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[c]),Ce.useEffect(()=>{if(j.current)return()=>{k.current&&(k.current.focus({preventScroll:!0}),k.current=null,$.current=!1)}},[j.current]),Ce.createElement("section",{ref:n,"aria-label":`${L} ${oe}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},O.map((b,H)=>{var Y;const[V,re]=b.split("-");return W.length?Ce.createElement("ol",{key:b,dir:_==="auto"?jm():_,tabIndex:-1,ref:j,className:h,"data-sonner-toaster":!0,"data-sonner-theme":z,"data-y-position":V,"data-lifted":E&&W.length>1&&!f,"data-x-position":re,style:{"--front-toast-height":`${((Y=de[0])==null?void 0:Y.height)||0}px`,"--width":`${wT}px`,"--gap":`${D}px`,...w,...PT(g,v)},onBlur:ce=>{$.current&&!ce.currentTarget.contains(ce.relatedTarget)&&($.current=!1,k.current&&(k.current.focus({preventScroll:!0}),k.current=null))},onFocus:ce=>{ce.target instanceof HTMLElement&&ce.target.dataset.dismissible==="false"||$.current||($.current=!0,k.current=ce.relatedTarget)},onMouseEnter:()=>I(!0),onMouseMove:()=>I(!0),onMouseLeave:()=>{le||I(!1)},onDragEnd:()=>I(!1),onPointerDown:ce=>{ce.target instanceof HTMLElement&&ce.target.dataset.dismissible==="false"||fe(!0)},onPointerUp:()=>fe(!1)},W.filter(ce=>!ce.position&&H===0||ce.position===b).map((ce,Ee)=>{var xe,_e;return Ce.createElement(CT,{key:ce.id,icons:R,index:Ee,toast:ce,defaultRichColors:y,duration:(xe=x==null?void 0:x.duration)!=null?xe:S,className:x==null?void 0:x.className,descriptionClassName:x==null?void 0:x.descriptionClassName,invert:s,visibleToasts:A,closeButton:(_e=x==null?void 0:x.closeButton)!=null?_e:u,interacting:le,position:b,style:x==null?void 0:x.style,unstyled:x==null?void 0:x.unstyled,classNames:x==null?void 0:x.classNames,cancelButtonStyle:x==null?void 0:x.cancelButtonStyle,actionButtonStyle:x==null?void 0:x.actionButtonStyle,closeButtonAriaLabel:x==null?void 0:x.closeButtonAriaLabel,removeToast:X,toasts:W.filter(Ye=>Ye.position==ce.position),heights:de.filter(Ye=>Ye.position==ce.position),setHeights:Me,expandByDefault:f,gap:D,expanded:E,swipeDirections:e.swipeDirections})})):null}))}),LT=()=>(ut.useEffect(()=>(document.body.style.backgroundColor="#E0F7FA",document.body.style.color="#2D3748",document.body.style.margin="0",document.body.style.overflow="hidden",()=>{document.body.style.backgroundColor="",document.body.style.color="",document.body.style.margin="",document.body.style.overflow=""}),[]),null),Ym=()=>{const r=window.innerWidth/window.innerHeight;let e=25,n=rd;window.innerWidth<768?(e=15,n=Math.floor(rd*.6)):window.innerWidth<1024&&(e=20,n=Math.floor(rd*.8));const s=e/r*.8,a=e*.6,c=s*.6;return{containerWidth:e,containerHeight:s,usableWidth:a,usableHeight:c,particleCount:n}},qm=[16731469,16766720,64154,2003199,16738740,16747520,8190976,49151],rd=600,$m=.06,DT=.12,Km=1.2,sd=.02,od=.97,ad=.01,NT=3e-4,Zm=.01,Vs=(r,e,n)=>Math.min(Math.max(r,e),n),IT=()=>{const r=ut.useRef(null),e=ut.useRef([]),n=ut.useRef({x:0,y:0}),s=ut.useRef(null),a=ut.useRef(null),c=ut.useRef(null),f=ut.useRef(null),[u,h]=ut.useState(!0),g=ut.useRef(u),[v,p]=ut.useState(!0),[y,S]=ut.useState({width:window.innerWidth,height:window.innerHeight}),w=ut.useRef(0);ut.useEffect(()=>{g.current=u},[u]);const A=ut.useCallback(()=>{const _=Date.now();_-w.current>300&&(w.current=_,h(D=>{const R=!D;return R?Wm.success("Repulsion Effect Enabled",{description:"Particles will now react to your cursor.",icon:Lt.jsx(Vm,{className:"text-blue-600"}),duration:2e3,position:"top-right"}):Wm.info("Repulsion Effect Disabled",{description:"Particles will gently return to their original positions.",icon:Lt.jsx(Vm,{className:"text-gray-600"}),duration:2e3,position:"top-right"}),R}))},[]);ut.useEffect(()=>{const _=new jE,D=window.innerWidth/window.innerHeight,R=new Yn(75,D,.1,1e3),L=new Ng({antialias:!0,alpha:!0});L.setClearColor(new St("#E0F7FA"),1),L.setSize(window.innerWidth,window.innerHeight),L.setPixelRatio(window.devicePixelRatio),r.current&&r.current.appendChild(L.domElement),a.current=_,c.current=R,s.current=L;const{containerWidth:W,containerHeight:F,usableWidth:O,usableHeight:de,particleCount:Me}=Ym();S({width:W,height:F});const E=[];let I=0;const le=()=>{I++,I>=Me&&setTimeout(()=>p(!1),500)};for(let Y=0;Y<Me;Y++){const V=Math.random()*Math.PI*2,re=Math.sqrt(Math.random())*Math.min(O,de)*.5,ce=Math.cos(V)*re,Ee=Math.sin(V)*re-.5,xe=(Math.random()-.5)*2,_e=$m+Math.random()*(DT-$m),Ye=new Pd(_e,32,32),qe=qm[Math.floor(Math.random()*qm.length)],q=new qE({color:qe,metalness:.2,roughness:.1,clearcoat:1,clearcoatRoughness:.1,reflectivity:1,emissive:new St(qe).multiplyScalar(.5),emissiveIntensity:.8}),At=new Ei(Ye,q);At.position.set(ce,Ee,xe),At.userData={vx:0,vy:0,vz:0,originalX:ce,originalY:Ee,originalZ:xe,radius:_e,color:qe},_.add(At),E.push(At),le()}e.current=E;const fe=new QE(4210752,1.5);_.add(fe);const z=new Tl(16777215,1.8,100);z.position.set(5,5,5),_.add(z);const Q=new ZE(16777215,1);Q.position.set(-5,5,5),_.add(Q);const j=new Tl(4286945,1,100);j.position.set(0,-10,-5),_.add(j);const oe=new Tl(65407,.8,100);oe.position.set(-10,5,-5),_.add(oe);const k=new Tl(16729344,.8,100);k.position.set(10,5,-5),_.add(k),R.position.set(0,0,5),R.lookAt(0,0,0);const $=Y=>{if(!(r.current instanceof HTMLDivElement))return;const V=r.current.getBoundingClientRect();n.current.x=(Y.clientX-V.left)/window.innerWidth*2-1,n.current.y=-((Y.clientY-V.top)/window.innerHeight)*2+1};window.addEventListener("mousemove",$);let X;const b=()=>{c.current&&(E.forEach(Y=>{const{originalX:V,originalY:re,originalZ:ce}=Y.userData;if(c.current){const Ee=new J(n.current.x,n.current.y,.5);Ee.unproject(c.current);const xe=c.current.position,_e=Ee.sub(xe).normalize(),Ye=-xe.z/_e.z,qe=xe.clone().add(_e.multiplyScalar(Ye)),q=qe.x-Y.position.x,At=qe.y-Y.position.y,Ve=Math.sqrt(q*q+At*At);if(Ve<Km&&g.current){const ze=Math.pow(1-Ve/Km,2)*.1,xt=Math.atan2(At,q);Y.userData.vx-=Math.cos(xt)*ze*(1+Y.position.z*.5),Y.userData.vy-=Math.sin(xt)*ze*(1+Y.position.z*.5),Y.userData.vz+=(Math.random()-.5)*.001}Y.userData.vx+=(V-Y.position.x)*ad,Y.userData.vy+=(re-Y.position.y)*ad,Y.userData.vz+=(ce-Y.position.z)*ad*.5,Y.userData.vy+=NT*(1-Y.position.z*.5),Y.userData.vx*=od,Y.userData.vy*=od,Y.userData.vz*=od;const Ke=Math.sqrt(Y.userData.vx**2+Y.userData.vy**2);if(Ke>.001){const ze=Zm*Ke;Y.userData.vx-=Y.userData.vx/Ke*ze,Y.userData.vy-=Y.userData.vy/Ke*ze}Y.userData.vz*=1-Zm,Y.userData.vx=Vs(Y.userData.vx,-.02,sd),Y.userData.vy=Vs(Y.userData.vy,-.02,sd),Y.userData.vz=Vs(Y.userData.vz,-.02/2,sd/2),Y.position.x+=Y.userData.vx,Y.position.y+=Y.userData.vy,Y.position.z=Vs(Y.position.z+Y.userData.vz,-.5,.5),Y.position.x=Vs(Y.position.x,-y.width/2,y.width/2),Y.position.y=Vs(Y.position.y,-y.height/2,y.height/2),Y.rotation.x+=.001*(1+Math.abs(Y.userData.vx)),Y.rotation.y+=.001*(1+Math.abs(Y.userData.vy))}}),E.sort((Y,V)=>V.position.z-Y.position.z),s.current&&a.current&&c.current&&s.current.render(a.current,c.current),X=requestAnimationFrame(b))};b();const H=()=>{if(!c.current||!s.current)return;const Y=window.innerWidth/window.innerHeight;c.current.aspect=Y,c.current.updateProjectionMatrix(),s.current.setSize(window.innerWidth,window.innerHeight);const{containerWidth:V,containerHeight:re}=Ym();S({width:V,height:re})};return window.addEventListener("resize",H),()=>{window.removeEventListener("mousemove",$),window.removeEventListener("resize",H),X&&cancelAnimationFrame(X),r.current&&L.domElement&&r.current.removeChild(L.domElement),E.forEach(Y=>{Y.geometry.dispose(),Y.material instanceof eo&&Y.material.dispose(),_.remove(Y)}),L.dispose()}},[]),ut.useEffect(()=>{const _=D=>{D.key===" "&&!v&&(D.preventDefault(),A())};return window.addEventListener("keydown",_),()=>{window.removeEventListener("keydown",_)}},[v,A]),ut.useEffect(()=>{!v&&f.current&&f.current.focus()},[v]);const x=_=>{(_.key==="Enter"||_.key===" ")&&(_.preventDefault(),A())};return Lt.jsxs("div",{className:"relative w-full h-screen overflow-hidden",role:"region","aria-label":"Interactive Particle Animation",children:[Lt.jsx(LT,{}),Lt.jsx($g,{position:"top-right",richColors:!0,"aria-live":"polite"})," ",Lt.jsx("div",{className:"absolute top-6 left-0 right-0 z-10 px-4",children:Lt.jsx("div",{className:"flex flex-col-reverse sm:flex-row items-center justify-center max-w-6xl mx-auto gap-4 relative",children:Lt.jsxs("div",{className:"w-full sm:w-auto mb-4 sm:mb-0 text-center",children:[Lt.jsx("h1",{className:"text-gray-800 text-xl sm:text-2xl md:text-3xl font-bold bg-white/80 backdrop-blur-sm py-2 px-4 rounded-lg shadow-md",children:"Interactive Particle Cluster"}),Lt.jsxs("p",{className:"mt-2 flex items-center gap-2 font-medium text-sm sm:text-base whitespace-nowrap  bg-white/80 backdrop-blur-sm py-1 px-3 rounded-md shadow-sm",children:[Lt.jsx(Zw,{className:"w-4 h-4 text-blue-600 flex-shrink-0","aria-hidden":"true"})," ",Lt.jsx("span",{className:"truncate",children:"Move your mouse near the particles to see them react!"})]})]})})}),v&&Lt.jsxs("div",{className:"absolute inset-0 flex items-center justify-center z-50 bg-gray-900/75 backdrop-blur-sm","aria-live":"polite",children:[" ",Lt.jsxs("div",{className:"flex flex-col items-center gap-4",children:[Lt.jsx(Jw,{className:"w-12 h-12 text-white animate-spin","aria-hidden":"true"})," ",Lt.jsx("div",{className:"text-white text-lg font-medium",children:"Loading Particle Cluster..."})]})]}),Lt.jsx("div",{ref:r,className:"absolute inset-0","aria-hidden":v})," ",Lt.jsxs("div",{className:"fixed bottom-6 right-6 z-10 group",children:[Lt.jsxs(Yg,{ref:f,variant:"outline",className:jg("text-gray-800 bg-white/90 backdrop-blur-md hover:bg-gray-100 border border-gray-300","flex items-center gap-2 shadow-lg transition-all duration-300 text-sm sm:text-base w-full sm:w-auto",u?"ring-2 ring-blue-400/90 ring-offset-0 bg-white shadow-[0_0_15px_rgba(59,130,246,0.5)]":""),onClick:A,onKeyDown:x,tabIndex:0,role:"button","aria-pressed":u,"aria-label":`Toggle Repulsion Effect. Currently ${u?"Enabled":"Disabled"}`,children:[Lt.jsx(nT,{className:`w-4 h-4 ${u?"text-blue-600":"text-gray-600"}`,"aria-hidden":"true"}),Lt.jsxs("span",{children:["Repulsion Effect ",u?"ON":"OFF"]})]}),Lt.jsx("div",{className:"absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none sm:left-0 sm:translate-x-0",children:Lt.jsx("div",{className:"bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap",children:"Press Space to toggle"})})]})]})};var UT=(r,e,n,s,a,c,f,u)=>{let h=document.documentElement,g=["light","dark"];function v(S){(Array.isArray(r)?r:[r]).forEach(w=>{let A=w==="class",x=A&&c?a.map(_=>c[_]||_):a;A?(h.classList.remove(...x),h.classList.add(S)):h.setAttribute(w,S)}),p(S)}function p(S){u&&g.includes(S)&&(h.style.colorScheme=S)}function y(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(s)v(s);else try{let S=localStorage.getItem(e)||n,w=f&&S==="system"?y():S;v(w)}catch{}},FT=ut.createContext(void 0),OT={setTheme:r=>{},themes:[]},kT=()=>{var r;return(r=ut.useContext(FT))!=null?r:OT};ut.memo(({forcedTheme:r,storageKey:e,attribute:n,enableSystem:s,enableColorScheme:a,defaultTheme:c,value:f,themes:u,nonce:h,scriptProps:g})=>{let v=JSON.stringify([n,e,c,r,u,f,s,a]).slice(1,-1);return ut.createElement("script",{...g,suppressHydrationWarning:!0,nonce:typeof window>"u"?h:"",dangerouslySetInnerHTML:{__html:`(${UT.toString()})(${v})`}})});const zT=({...r})=>{const{theme:e="system"}=kT();return Lt.jsx($g,{theme:e,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...r})};F_.createRoot(document.getElementById("root")).render(Lt.jsxs(ut.StrictMode,{children:[Lt.jsx(zT,{}),Lt.jsx(IT,{})]}));
