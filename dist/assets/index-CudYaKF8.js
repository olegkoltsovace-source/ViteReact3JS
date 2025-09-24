(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ef={exports:{}},po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function gS(){if(N_)return po;N_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return po.Fragment=e,po.jsx=i,po.jsxs=i,po}var O_;function vS(){return O_||(O_=1,Ef.exports=gS()),Ef.exports}var yo=vS(),Tf={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function SS(){if(P_)return oe;P_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function M(D,J,vt){this.props=D,this.context=J,this.refs=C,this.updater=vt||y}M.prototype.isReactComponent={},M.prototype.setState=function(D,J){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,J,"setState")},M.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function g(){}g.prototype=M.prototype;function I(D,J,vt){this.props=D,this.context=J,this.refs=C,this.updater=vt||y}var P=I.prototype=new g;P.constructor=I,b(P,M.prototype),P.isPureReactComponent=!0;var U=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function F(D,J,vt,xt,Dt,Ft){return vt=Ft.ref,{$$typeof:o,type:D,key:J,ref:vt!==void 0?vt:null,props:Ft}}function K(D,J){return F(D.type,J,void 0,void 0,void 0,D.props)}function w(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function R(D){var J={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(vt){return J[vt]})}var V=/\/+/g;function nt(D,J){return typeof D=="object"&&D!==null&&D.key!=null?R(""+D.key):J.toString(36)}function ut(){}function gt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(ut,ut):(D.status="pending",D.then(function(J){D.status==="pending"&&(D.status="fulfilled",D.value=J)},function(J){D.status==="pending"&&(D.status="rejected",D.reason=J)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function lt(D,J,vt,xt,Dt){var Ft=typeof D;(Ft==="undefined"||Ft==="boolean")&&(D=null);var tt=!1;if(D===null)tt=!0;else switch(Ft){case"bigint":case"string":case"number":tt=!0;break;case"object":switch(D.$$typeof){case o:case e:tt=!0;break;case _:return tt=D._init,lt(tt(D._payload),J,vt,xt,Dt)}}if(tt)return Dt=Dt(D),tt=xt===""?"."+nt(D,0):xt,U(Dt)?(vt="",tt!=null&&(vt=tt.replace(V,"$&/")+"/"),lt(Dt,J,vt,"",function(Kt){return Kt})):Dt!=null&&(w(Dt)&&(Dt=K(Dt,vt+(Dt.key==null||D&&D.key===Dt.key?"":(""+Dt.key).replace(V,"$&/")+"/")+tt)),J.push(Dt)),1;tt=0;var mt=xt===""?".":xt+":";if(U(D))for(var At=0;At<D.length;At++)xt=D[At],Ft=mt+nt(xt,At),tt+=lt(xt,J,vt,Ft,Dt);else if(At=x(D),typeof At=="function")for(D=At.call(D),At=0;!(xt=D.next()).done;)xt=xt.value,Ft=mt+nt(xt,At++),tt+=lt(xt,J,vt,Ft,Dt);else if(Ft==="object"){if(typeof D.then=="function")return lt(gt(D),J,vt,xt,Dt);throw J=String(D),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return tt}function O(D,J,vt){if(D==null)return D;var xt=[],Dt=0;return lt(D,xt,"","",function(Ft){return J.call(vt,Ft,Dt++)}),xt}function Z(D){if(D._status===-1){var J=D._result;J=J(),J.then(function(vt){(D._status===0||D._status===-1)&&(D._status=1,D._result=vt)},function(vt){(D._status===0||D._status===-1)&&(D._status=2,D._result=vt)}),D._status===-1&&(D._status=0,D._result=J)}if(D._status===1)return D._result.default;throw D._result}var q=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function St(){}return oe.Children={map:O,forEach:function(D,J,vt){O(D,function(){J.apply(this,arguments)},vt)},count:function(D){var J=0;return O(D,function(){J++}),J},toArray:function(D){return O(D,function(J){return J})||[]},only:function(D){if(!w(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},oe.Component=M,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=I,oe.StrictMode=r,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,oe.__COMPILER_RUNTIME={__proto__:null,c:function(D){return z.H.useMemoCache(D)}},oe.cache=function(D){return function(){return D.apply(null,arguments)}},oe.cloneElement=function(D,J,vt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var xt=b({},D.props),Dt=D.key,Ft=void 0;if(J!=null)for(tt in J.ref!==void 0&&(Ft=void 0),J.key!==void 0&&(Dt=""+J.key),J)!G.call(J,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&J.ref===void 0||(xt[tt]=J[tt]);var tt=arguments.length-2;if(tt===1)xt.children=vt;else if(1<tt){for(var mt=Array(tt),At=0;At<tt;At++)mt[At]=arguments[At+2];xt.children=mt}return F(D.type,Dt,void 0,void 0,Ft,xt)},oe.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},oe.createElement=function(D,J,vt){var xt,Dt={},Ft=null;if(J!=null)for(xt in J.key!==void 0&&(Ft=""+J.key),J)G.call(J,xt)&&xt!=="key"&&xt!=="__self"&&xt!=="__source"&&(Dt[xt]=J[xt]);var tt=arguments.length-2;if(tt===1)Dt.children=vt;else if(1<tt){for(var mt=Array(tt),At=0;At<tt;At++)mt[At]=arguments[At+2];Dt.children=mt}if(D&&D.defaultProps)for(xt in tt=D.defaultProps,tt)Dt[xt]===void 0&&(Dt[xt]=tt[xt]);return F(D,Ft,void 0,void 0,null,Dt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(D){return{$$typeof:d,render:D}},oe.isValidElement=w,oe.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:Z}},oe.memo=function(D,J){return{$$typeof:p,type:D,compare:J===void 0?null:J}},oe.startTransition=function(D){var J=z.T,vt={};z.T=vt;try{var xt=D(),Dt=z.S;Dt!==null&&Dt(vt,xt),typeof xt=="object"&&xt!==null&&typeof xt.then=="function"&&xt.then(St,q)}catch(Ft){q(Ft)}finally{z.T=J}},oe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},oe.use=function(D){return z.H.use(D)},oe.useActionState=function(D,J,vt){return z.H.useActionState(D,J,vt)},oe.useCallback=function(D,J){return z.H.useCallback(D,J)},oe.useContext=function(D){return z.H.useContext(D)},oe.useDebugValue=function(){},oe.useDeferredValue=function(D,J){return z.H.useDeferredValue(D,J)},oe.useEffect=function(D,J,vt){var xt=z.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xt.useEffect(D,J)},oe.useId=function(){return z.H.useId()},oe.useImperativeHandle=function(D,J,vt){return z.H.useImperativeHandle(D,J,vt)},oe.useInsertionEffect=function(D,J){return z.H.useInsertionEffect(D,J)},oe.useLayoutEffect=function(D,J){return z.H.useLayoutEffect(D,J)},oe.useMemo=function(D,J){return z.H.useMemo(D,J)},oe.useOptimistic=function(D,J){return z.H.useOptimistic(D,J)},oe.useReducer=function(D,J,vt){return z.H.useReducer(D,J,vt)},oe.useRef=function(D){return z.H.useRef(D)},oe.useState=function(D){return z.H.useState(D)},oe.useSyncExternalStore=function(D,J,vt){return z.H.useSyncExternalStore(D,J,vt)},oe.useTransition=function(){return z.H.useTransition()},oe.version="19.1.1",oe}var B_;function Kh(){return B_||(B_=1,Tf.exports=SS()),Tf.exports}var z_=Kh(),Af={exports:{}},mo={},bf={exports:{}},Rf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function xS(){return I_||(I_=1,(function(o){function e(O,Z){var q=O.length;O.push(Z);t:for(;0<q;){var St=q-1>>>1,D=O[St];if(0<l(D,Z))O[St]=Z,O[q]=D,q=St;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var Z=O[0],q=O.pop();if(q!==Z){O[0]=q;t:for(var St=0,D=O.length,J=D>>>1;St<J;){var vt=2*(St+1)-1,xt=O[vt],Dt=vt+1,Ft=O[Dt];if(0>l(xt,q))Dt<D&&0>l(Ft,xt)?(O[St]=Ft,O[Dt]=q,St=Dt):(O[St]=xt,O[vt]=q,St=vt);else if(Dt<D&&0>l(Ft,q))O[St]=Ft,O[Dt]=q,St=Dt;else break t}}return Z}function l(O,Z){var q=O.sortIndex-Z.sortIndex;return q!==0?q:O.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,v=null,x=3,y=!1,b=!1,C=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=O)r(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function z(O){if(C=!1,U(O),!b)if(i(m)!==null)b=!0,G||(G=!0,nt());else{var Z=i(p);Z!==null&&lt(z,Z.startTime-O)}}var G=!1,F=-1,K=5,w=-1;function R(){return M?!0:!(o.unstable_now()-w<K)}function V(){if(M=!1,G){var O=o.unstable_now();w=O;var Z=!0;try{t:{b=!1,C&&(C=!1,I(F),F=-1),y=!0;var q=x;try{e:{for(U(O),v=i(m);v!==null&&!(v.expirationTime>O&&R());){var St=v.callback;if(typeof St=="function"){v.callback=null,x=v.priorityLevel;var D=St(v.expirationTime<=O);if(O=o.unstable_now(),typeof D=="function"){v.callback=D,U(O),Z=!0;break e}v===i(m)&&r(m),U(O)}else r(m);v=i(m)}if(v!==null)Z=!0;else{var J=i(p);J!==null&&lt(z,J.startTime-O),Z=!1}}break t}finally{v=null,x=q,y=!1}Z=void 0}}finally{Z?nt():G=!1}}}var nt;if(typeof P=="function")nt=function(){P(V)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,gt=ut.port2;ut.port1.onmessage=V,nt=function(){gt.postMessage(null)}}else nt=function(){g(V,0)};function lt(O,Z){F=g(function(){O(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(O){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var q=x;x=Z;try{return O()}finally{x=q}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(O,Z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=x;x=O;try{return Z()}finally{x=q}},o.unstable_scheduleCallback=function(O,Z,q){var St=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?St+q:St):q=St,O){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=q+D,O={id:_++,callback:Z,priorityLevel:O,startTime:q,expirationTime:D,sortIndex:-1},q>St?(O.sortIndex=q,e(p,O),i(m)===null&&O===i(p)&&(C?(I(F),F=-1):C=!0,lt(z,q-St))):(O.sortIndex=D,e(m,O),b||y||(b=!0,G||(G=!0,nt()))),O},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(O){var Z=x;return function(){var q=x;x=Z;try{return O.apply(this,arguments)}finally{x=q}}}})(Rf)),Rf}var F_;function MS(){return F_||(F_=1,bf.exports=xS()),bf.exports}var Cf={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function yS(){if(H_)return Tn;H_=1;var o=Kh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Tn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},Tn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Tn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Tn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Tn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Tn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Tn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Tn.requestFormReset=function(m){r.d.r(m)},Tn.unstable_batchedUpdates=function(m,p){return m(p)},Tn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.1.1",Tn}var G_;function ES(){if(G_)return Cf.exports;G_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Cf.exports=yS(),Cf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function TS(){if(V_)return mo;V_=1;var o=MS(),e=Kh(),i=ES();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),t;if(f===s)return d(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var S=!1,T=u.child;T;){if(T===a){S=!0,a=u,s=f;break}if(T===s){S=!0,s=u,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,s=u;break}if(T===s){S=!0,s=f,a=u;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),P=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function nt(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Symbol.for("react.client.reference");function gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ut?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case M:return"Profiler";case C:return"StrictMode";case z:return"Suspense";case G:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case P:return(t.displayName||"Context")+".Provider";case I:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:gt(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return gt(t(n))}catch{}}return null}var lt=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},St=[],D=-1;function J(t){return{current:t}}function vt(t){0>D||(t.current=St[D],St[D]=null,D--)}function xt(t,n){D++,St[D]=t.current,t.current=n}var Dt=J(null),Ft=J(null),tt=J(null),mt=J(null);function At(t,n){switch(xt(tt,n),xt(Ft,t),xt(Dt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?o_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=o_(n),t=l_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}vt(Dt),xt(Dt,t)}function Kt(){vt(Dt),vt(Ft),vt(tt)}function Wt(t){t.memoizedState!==null&&xt(mt,t);var n=Dt.current,a=l_(n,t.type);n!==a&&(xt(Ft,t),xt(Dt,a))}function he(t){Ft.current===t&&(vt(Dt),vt(Ft)),mt.current===t&&(vt(mt),lo._currentValue=q)}var $e=Object.prototype.hasOwnProperty,B=o.unstable_scheduleCallback,Ce=o.unstable_cancelCallback,ae=o.unstable_shouldYield,ee=o.unstable_requestPaint,Ot=o.unstable_now,Ie=o.unstable_getCurrentPriorityLevel,Gt=o.unstable_ImmediatePriority,re=o.unstable_UserBlockingPriority,ke=o.unstable_NormalPriority,Xe=o.unstable_LowPriority,L=o.unstable_IdlePriority,E=o.log,$=o.unstable_setDisableYieldValue,ct=null,dt=null;function ot(t){if(typeof E=="function"&&$(t),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ct,t)}catch{}}var Pt=Math.clz32?Math.clz32:qt,bt=Math.log,kt=Math.LN2;function qt(t){return t>>>=0,t===0?32:31-(bt(t)/kt|0)|0}var Mt=256,Ut=4194304;function Zt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Vt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=Zt(s):(S&=T,S!==0?u=Zt(S):a||(a=T&~t,a!==0&&(u=Zt(a))))):(T=s&~f,T!==0?u=Zt(T):S!==0?u=Zt(S):a||(a=s&~t,a!==0&&(u=Zt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ct(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function se(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var t=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),t}function Tt(){var t=Ut;return Ut<<=1,(Ut&62914560)===0&&(Ut=4194304),t}function Rt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Bt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function yt(t,n,a,s,u,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,N=t.expirationTimes,Q=t.hiddenUpdates;for(a=S&~a;0<a;){var ft=31-Pt(a),pt=1<<ft;T[ft]=0,N[ft]=-1;var et=Q[ft];if(et!==null)for(Q[ft]=null,ft=0;ft<et.length;ft++){var it=et[ft];it!==null&&(it.lane&=-536870913)}a&=~pt}s!==0&&_t(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function _t(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function Ht(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function ie(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ae(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xe(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:R_(t.type))}function ri(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var rn=Math.random().toString(36).slice(2),sn="__reactFiber$"+rn,qe="__reactProps$"+rn,_i="__reactContainer$"+rn,pr="__reactEvents$"+rn,Lo="__reactListeners$"+rn,mr="__reactHandles$"+rn,xs="__reactResources$"+rn,gi="__reactMarker$"+rn;function _r(t){delete t[sn],delete t[qe],delete t[pr],delete t[Lo],delete t[mr]}function Ci(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[_i]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=h_(t);t!==null;){if(a=t[sn])return a;t=h_(t)}return n}t=a,a=t.parentNode}return null}function ta(t){if(t=t[sn]||t[_i]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Pa(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ea(t){var n=t[xs];return n||(n=t[xs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[gi]=!0}var No=new Set,Oo={};function A(t,n){X(t,n),X(t+"Capture",n)}function X(t,n){for(Oo[t]=n,t=0;t<n.length;t++)No.add(n[t])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},Y={};function Et(t){return $e.call(Y,t)?!0:$e.call(rt,t)?!1:at.test(t)?Y[t]=!0:(rt[t]=!0,!1)}function wt(t,n,a){if(Et(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function zt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Lt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var Qt,$t;function Xt(t){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+t+$t}var ue=!1;function Me(t,n){if(!t||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(it){var et=it}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(it){et=it}t.call(pt.prototype)}}else{try{throw Error()}catch(it){et=it}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(it){if(it&&et&&typeof it.stack=="string")return[it.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var N=S.split(`
`),Q=T.split(`
`);for(u=s=0;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(s===N.length||u===Q.length)for(s=N.length-1,u=Q.length-1;1<=s&&0<=u&&N[s]!==Q[u];)u--;for(;1<=s&&0<=u;s--,u--)if(N[s]!==Q[u]){if(s!==1||u!==1)do if(s--,u--,0>u||N[s]!==Q[u]){var ft=`
`+N[s].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=s&&0<=u);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Xt(a):""}function Ge(t){switch(t.tag){case 26:case 27:case 5:return Xt(t.type);case 16:return Xt("Lazy");case 13:return Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return Me(t.type,!1);case 11:return Me(t.type.render,!1);case 1:return Me(t.type,!0);case 31:return Xt("Activity");default:return""}}function we(t){try{var n="";do n+=Ge(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ce(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function He(t){var n=jt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function me(t){t._valueTracker||(t._valueTracker=He(t))}function Mn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=jt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function si(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Rn=/[\n"\\]/g;function hn(t){return t.replace(Rn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Be(t,n,a,s,u,f,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ce(n)):t.value!==""+ce(n)&&(t.value=""+ce(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?yn(t,S,ce(n)):a!=null?yn(t,S,ce(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ce(T):t.removeAttribute("name")}function Cn(t,n,a,s,u,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ce(a):"",n=n!=null?""+ce(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function yn(t,n,a){n==="number"&&si(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ye(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ce(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function gn(t,n,a){if(n!=null&&(n=""+ce(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ce(a):""}function gr(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(lt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ce(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function Un(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var pv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function od(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||pv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ld(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&od(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&od(t,f,n[f])}function Mu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_v=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Po(t){return _v.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var yu=null;function Eu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vr=null,Sr=null;function ud(t){var n=ta(t);if(n&&(t=n.stateNode)){var a=t[qe]||null;t:switch(t=n.stateNode,n.type){case"input":if(Be(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[qe]||null;if(!u)throw Error(r(90));Be(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Mn(s)}break t;case"textarea":gn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ye(t,!!a.multiple,n,!1)}}}var Tu=!1;function cd(t,n,a){if(Tu)return t(n,a);Tu=!0;try{var s=t(n);return s}finally{if(Tu=!1,(vr!==null||Sr!==null)&&(xl(),vr&&(n=vr,t=Sr,Sr=vr=null,ud(n),t)))for(n=0;n<t.length;n++)ud(t[n])}}function Ms(t,n){var a=t.stateNode;if(a===null)return null;var s=a[qe]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(wi)try{var ys={};Object.defineProperty(ys,"passive",{get:function(){Au=!0}}),window.addEventListener("test",ys,ys),window.removeEventListener("test",ys,ys)}catch{Au=!1}var na=null,bu=null,Bo=null;function fd(){if(Bo)return Bo;var t,n=bu,a=n.length,s,u="value"in na?na.value:na.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===u[f-s];s++);return Bo=u.slice(t,1<s?1-s:void 0)}function zo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Io(){return!0}function hd(){return!1}function Ln(t){function n(a,s,u,f,S){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Io:hd,this.isPropagationStopped=hd,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),n}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fo=Ln(Ba),Es=_({},Ba,{view:0,detail:0}),gv=Ln(Es),Ru,Cu,Ts,Ho=_({},Es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ts&&(Ts&&t.type==="mousemove"?(Ru=t.screenX-Ts.screenX,Cu=t.screenY-Ts.screenY):Cu=Ru=0,Ts=t),Ru)},movementY:function(t){return"movementY"in t?t.movementY:Cu}}),dd=Ln(Ho),vv=_({},Ho,{dataTransfer:0}),Sv=Ln(vv),xv=_({},Es,{relatedTarget:0}),wu=Ln(xv),Mv=_({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),yv=Ln(Mv),Ev=_({},Ba,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tv=Ln(Ev),Av=_({},Ba,{data:0}),pd=Ln(Av),bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Cv[t])?!!n[t]:!1}function Du(){return wv}var Dv=_({},Es,{key:function(t){if(t.key){var n=bv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(t){return t.type==="keypress"?zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Uv=Ln(Dv),Lv=_({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),md=Ln(Lv),Nv=_({},Es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),Ov=Ln(Nv),Pv=_({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bv=Ln(Pv),zv=_({},Ho,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Iv=Ln(zv),Fv=_({},Ba,{newState:0,oldState:0}),Hv=Ln(Fv),Gv=[9,13,27,32],Uu=wi&&"CompositionEvent"in window,As=null;wi&&"documentMode"in document&&(As=document.documentMode);var Vv=wi&&"TextEvent"in window&&!As,_d=wi&&(!Uu||As&&8<As&&11>=As),gd=" ",vd=!1;function Sd(t,n){switch(t){case"keyup":return Gv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xr=!1;function kv(t,n){switch(t){case"compositionend":return xd(n);case"keypress":return n.which!==32?null:(vd=!0,gd);case"textInput":return t=n.data,t===gd&&vd?null:t;default:return null}}function Xv(t,n){if(xr)return t==="compositionend"||!Uu&&Sd(t,n)?(t=fd(),Bo=bu=na=null,xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _d&&n.locale!=="ko"?null:n.data;default:return null}}var Wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Md(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Wv[t.type]:n==="textarea"}function yd(t,n,a,s){vr?Sr?Sr.push(s):Sr=[s]:vr=s,n=bl(n,"onChange"),0<n.length&&(a=new Fo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var bs=null,Rs=null;function qv(t){n_(t,0)}function Go(t){var n=Pa(t);if(Mn(n))return t}function Ed(t,n){if(t==="change")return n}var Td=!1;if(wi){var Lu;if(wi){var Nu="oninput"in document;if(!Nu){var Ad=document.createElement("div");Ad.setAttribute("oninput","return;"),Nu=typeof Ad.oninput=="function"}Lu=Nu}else Lu=!1;Td=Lu&&(!document.documentMode||9<document.documentMode)}function bd(){bs&&(bs.detachEvent("onpropertychange",Rd),Rs=bs=null)}function Rd(t){if(t.propertyName==="value"&&Go(Rs)){var n=[];yd(n,Rs,t,Eu(t)),cd(qv,n)}}function Yv(t,n,a){t==="focusin"?(bd(),bs=n,Rs=a,bs.attachEvent("onpropertychange",Rd)):t==="focusout"&&bd()}function Zv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Go(Rs)}function Kv(t,n){if(t==="click")return Go(n)}function jv(t,n){if(t==="input"||t==="change")return Go(n)}function Qv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Fn=typeof Object.is=="function"?Object.is:Qv;function Cs(t,n){if(Fn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!$e.call(n,u)||!Fn(t[u],n[u]))return!1}return!0}function Cd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wd(t,n){var a=Cd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Cd(a)}}function Dd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Dd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ud(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=si(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=si(t.document)}return n}function Ou(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Jv=wi&&"documentMode"in document&&11>=document.documentMode,Mr=null,Pu=null,ws=null,Bu=!1;function Ld(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bu||Mr==null||Mr!==si(s)||(s=Mr,"selectionStart"in s&&Ou(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ws&&Cs(ws,s)||(ws=s,s=bl(Pu,"onSelect"),0<s.length&&(n=new Fo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Mr)))}function za(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var yr={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},zu={},Nd={};wi&&(Nd=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function Ia(t){if(zu[t])return zu[t];if(!yr[t])return t;var n=yr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Nd)return zu[t]=n[a];return t}var Od=Ia("animationend"),Pd=Ia("animationiteration"),Bd=Ia("animationstart"),$v=Ia("transitionrun"),t0=Ia("transitionstart"),e0=Ia("transitioncancel"),zd=Ia("transitionend"),Id=new Map,Iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Iu.push("scrollEnd");function oi(t,n){Id.set(t,n),A(n,[t])}var Fd=new WeakMap;function Kn(t,n){if(typeof t=="object"&&t!==null){var a=Fd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:we(n)},Fd.set(t,n),n)}return{value:t,source:n,stack:we(n)}}var jn=[],Er=0,Fu=0;function Vo(){for(var t=Er,n=Fu=Er=0;n<t;){var a=jn[n];jn[n++]=null;var s=jn[n];jn[n++]=null;var u=jn[n];jn[n++]=null;var f=jn[n];if(jn[n++]=null,s!==null&&u!==null){var S=s.pending;S===null?u.next=u:(u.next=S.next,S.next=u),s.pending=u}f!==0&&Hd(a,u,f)}}function ko(t,n,a,s){jn[Er++]=t,jn[Er++]=n,jn[Er++]=a,jn[Er++]=s,Fu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Hu(t,n,a,s){return ko(t,n,a,s),Xo(t)}function Tr(t,n){return ko(t,null,null,n),Xo(t)}function Hd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Pt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Xo(t){if(50<to)throw to=0,qc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ar={};function n0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,n,a,s){return new n0(t,n,a,s)}function Gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Di(t,n){var a=t.alternate;return a===null?(a=Hn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Gd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Wo(t,n,a,s,u,f){var S=0;if(s=t,typeof t=="function")Gu(t)&&(S=1);else if(typeof t=="string")S=aS(t,a,Dt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Hn(31,a,n,u),t.elementType=w,t.lanes=f,t;case b:return Fa(a.children,u,f,n);case C:S=8,u|=24;break;case M:return t=Hn(12,a,n,u|2),t.elementType=M,t.lanes=f,t;case z:return t=Hn(13,a,n,u),t.elementType=z,t.lanes=f,t;case G:return t=Hn(19,a,n,u),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case g:case P:S=10;break t;case I:S=9;break t;case U:S=11;break t;case F:S=14;break t;case K:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Hn(S,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Fa(t,n,a,s){return t=Hn(7,t,s,n),t.lanes=a,t}function Vu(t,n,a){return t=Hn(6,t,null,n),t.lanes=a,t}function ku(t,n,a){return n=Hn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var br=[],Rr=0,qo=null,Yo=0,Qn=[],Jn=0,Ha=null,Ui=1,Li="";function Ga(t,n){br[Rr++]=Yo,br[Rr++]=qo,qo=t,Yo=n}function Vd(t,n,a){Qn[Jn++]=Ui,Qn[Jn++]=Li,Qn[Jn++]=Ha,Ha=t;var s=Ui;t=Li;var u=32-Pt(s)-1;s&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var S=u-u%5;f=(s&(1<<S)-1).toString(32),s>>=S,u-=S,Ui=1<<32-Pt(n)+u|a<<u|s,Li=f+t}else Ui=1<<f|a<<u|s,Li=t}function Xu(t){t.return!==null&&(Ga(t,1),Vd(t,1,0))}function Wu(t){for(;t===qo;)qo=br[--Rr],br[Rr]=null,Yo=br[--Rr],br[Rr]=null;for(;t===Ha;)Ha=Qn[--Jn],Qn[Jn]=null,Li=Qn[--Jn],Qn[Jn]=null,Ui=Qn[--Jn],Qn[Jn]=null}var wn=null,Ze=null,Te=!1,Va=null,vi=!1,qu=Error(r(519));function ka(t){var n=Error(r(418,""));throw Ls(Kn(n,t)),qu}function kd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[sn]=t,n[qe]=s,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<no.length;a++)ge(no[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Cn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),me(n);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),gr(n,s.value,s.defaultValue,s.children),me(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||s_(n.textContent,a)?(s.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),s.onScroll!=null&&ge("scroll",n),s.onScrollEnd!=null&&ge("scrollend",n),s.onClick!=null&&(n.onclick=Rl),n=!0):n=!1,n||ka(t)}function Xd(t){for(wn=t.return;wn;)switch(wn.tag){case 5:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:wn=wn.return}}function Ds(t){if(t!==wn)return!1;if(!Te)return Xd(t),Te=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||uf(t.type,t.memoizedProps)),a=!a),a&&Ze&&ka(t),Xd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Ze=ui(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Ze=null}}else n===27?(n=Ze,va(t.type)?(t=df,df=null,Ze=t):Ze=n):Ze=wn?ui(t.stateNode.nextSibling):null;return!0}function Us(){Ze=wn=null,Te=!1}function Wd(){var t=Va;return t!==null&&(Pn===null?Pn=t:Pn.push.apply(Pn,t),Va=null),t}function Ls(t){Va===null?Va=[t]:Va.push(t)}var Yu=J(null),Xa=null,Ni=null;function ia(t,n,a){xt(Yu,n._currentValue),n._currentValue=a}function Oi(t){t._currentValue=Yu.current,vt(Yu)}function Zu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Ku(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var N=0;N<n.length;N++)if(T.context===n[N]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Zu(f.return,a,t),s||(S=null);break t}f=T.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Zu(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Ns(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=u.type;Fn(u.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(u===mt.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(lo):t=[lo])}u=u.return}t!==null&&Ku(n,t,a,s),n.flags|=262144}function Zo(t){for(t=t.firstContext;t!==null;){if(!Fn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Wa(t){Xa=t,Ni=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function En(t){return qd(Xa,t)}function Ko(t,n){return Xa===null&&Wa(t),qd(t,n)}function qd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ni===null){if(t===null)throw Error(r(308));Ni=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ni=Ni.next=n;return a}var i0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},a0=o.unstable_scheduleCallback,r0=o.unstable_NormalPriority,on={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new i0,data:new Map,refCount:0}}function Os(t){t.refCount--,t.refCount===0&&a0(r0,function(){t.controller.abort()})}var Ps=null,Qu=0,Cr=0,wr=null;function s0(t,n){if(Ps===null){var a=Ps=[];Qu=0,Cr=$c(),wr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Qu++,n.then(Yd,Yd),n}function Yd(){if(--Qu===0&&Ps!==null){wr!==null&&(wr.status="fulfilled");var t=Ps;Ps=null,Cr=0,wr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function o0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Zd=O.S;O.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&s0(t,n),Zd!==null&&Zd(t,n)};var qa=J(null);function Ju(){var t=qa.current;return t!==null?t:Fe.pooledCache}function jo(t,n){n===null?xt(qa,qa.current):xt(qa,n.pool)}function Kd(){var t=Ju();return t===null?null:{parent:on._currentValue,pool:t}}var Bs=Error(r(460)),jd=Error(r(474)),Qo=Error(r(542)),$u={then:function(){}};function Qd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jo(){}function Jd(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Jo,Jo),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,tp(t),t;default:if(typeof n.status=="string")n.then(Jo,Jo);else{if(t=Fe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,tp(t),t}throw zs=n,Bs}}var zs=null;function $d(){if(zs===null)throw Error(r(459));var t=zs;return zs=null,t}function tp(t){if(t===Bs||t===Qo)throw Error(r(483))}var aa=!1;function tc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ec(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function sa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(be&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Xo(t),Hd(t,null,a),n}return ko(t,s,n,a),Xo(t)}function Is(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ht(t,a)}}function nc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var ic=!1;function Fs(){if(ic){var t=wr;if(t!==null)throw t}}function Hs(t,n,a,s){ic=!1;var u=t.updateQueue;aa=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var N=T,Q=N.next;N.next=null,S===null?f=Q:S.next=Q,S=N;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,T=ft.lastBaseUpdate,T!==S&&(T===null?ft.firstBaseUpdate=Q:T.next=Q,ft.lastBaseUpdate=N))}if(f!==null){var pt=u.baseState;S=0,ft=Q=N=null,T=f;do{var et=T.lane&-536870913,it=et!==T.lane;if(it?(Se&et)===et:(s&et)===et){et!==0&&et===Cr&&(ic=!0),ft!==null&&(ft=ft.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ne=t,Jt=T;et=n;var Le=a;switch(Jt.tag){case 1:if(ne=Jt.payload,typeof ne=="function"){pt=ne.call(Le,pt,et);break t}pt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=Jt.payload,et=typeof ne=="function"?ne.call(Le,pt,et):ne,et==null)break t;pt=_({},pt,et);break t;case 2:aa=!0}}et=T.callback,et!==null&&(t.flags|=64,it&&(t.flags|=8192),it=u.callbacks,it===null?u.callbacks=[et]:it.push(et))}else it={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ft===null?(Q=ft=it,N=pt):ft=ft.next=it,S|=et;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;it=T,T=it.next,it.next=null,u.lastBaseUpdate=it,u.shared.pending=null}}while(!0);ft===null&&(N=pt),u.baseState=N,u.firstBaseUpdate=Q,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),pa|=S,t.lanes=S,t.memoizedState=pt}}function ep(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function np(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ep(a[t],n)}var Dr=J(null),$o=J(0);function ip(t,n){t=Gi,xt($o,t),xt(Dr,n),Gi=t|n.baseLanes}function ac(){xt($o,Gi),xt(Dr,Dr.current)}function rc(){Gi=$o.current,vt(Dr),vt($o)}var oa=0,de=null,De=null,en=null,tl=!1,Ur=!1,Ya=!1,el=0,Gs=0,Lr=null,l0=0;function je(){throw Error(r(321))}function sc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Fn(t[a],n[a]))return!1;return!0}function oc(t,n,a,s,u,f){return oa=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Hp:Gp,Ya=!1,f=a(s,u),Ya=!1,Ur&&(f=rp(n,a,s,u)),ap(t),f}function ap(t){O.H=ol;var n=De!==null&&De.next!==null;if(oa=0,en=De=de=null,tl=!1,Gs=0,Lr=null,n)throw Error(r(300));t===null||dn||(t=t.dependencies,t!==null&&Zo(t)&&(dn=!0))}function rp(t,n,a,s){de=t;var u=0;do{if(Ur&&(Lr=null),Gs=0,Ur=!1,25<=u)throw Error(r(301));if(u+=1,en=De=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=m0,f=n(a,s)}while(Ur);return f}function u0(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?Vs(n):n,t=t.useState()[0],(De!==null?De.memoizedState:null)!==t&&(de.flags|=1024),n}function lc(){var t=el!==0;return el=0,t}function uc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function cc(t){if(tl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}tl=!1}oa=0,en=De=de=null,Ur=!1,Gs=el=0,Lr=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?de.memoizedState=en=t:en=en.next=t,en}function nn(){if(De===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var n=en===null?de.memoizedState:en.next;if(n!==null)en=n,De=t;else{if(t===null)throw de.alternate===null?Error(r(467)):Error(r(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},en===null?de.memoizedState=en=t:en=en.next=t}return en}function fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vs(t){var n=Gs;return Gs+=1,Lr===null&&(Lr=[]),t=Jd(Lr,t,n),n=de,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Hp:Gp),t}function nl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Vs(t);if(t.$$typeof===P)return En(t)}throw Error(r(438,String(t)))}function hc(t){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=de.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=fc(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=R;return n.index++,a}function Pi(t,n){return typeof n=="function"?n(t):n}function il(t){var n=nn();return dc(n,De,t)}function dc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=S=null,N=null,Q=n,ft=!1;do{var pt=Q.lane&-536870913;if(pt!==Q.lane?(Se&pt)===pt:(oa&pt)===pt){var et=Q.revertLane;if(et===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),pt===Cr&&(ft=!0);else if((oa&et)===et){Q=Q.next,et===Cr&&(ft=!0);continue}else pt={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},N===null?(T=N=pt,S=f):N=N.next=pt,de.lanes|=et,pa|=et;pt=Q.action,Ya&&a(f,pt),f=Q.hasEagerState?Q.eagerState:a(f,pt)}else et={lane:pt,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},N===null?(T=N=et,S=f):N=N.next=et,de.lanes|=pt,pa|=pt;Q=Q.next}while(Q!==null&&Q!==n);if(N===null?S=f:N.next=T,!Fn(f,t.memoizedState)&&(dn=!0,ft&&(a=wr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=N,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function pc(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=t(f,S.action),S=S.next;while(S!==u);Fn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function sp(t,n,a){var s=de,u=nn(),f=Te;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Fn((De||u).memoizedState,a);S&&(u.memoizedState=a,dn=!0),u=u.queue;var T=up.bind(null,s,u,t);if(ks(2048,8,T,[t]),u.getSnapshot!==n||S||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,Nr(9,al(),lp.bind(null,s,u,a,n),null),Fe===null)throw Error(r(349));f||(oa&124)!==0||op(s,n,a)}return a}function op(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=fc(),de.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function lp(t,n,a,s){n.value=a,n.getSnapshot=s,cp(n)&&fp(t)}function up(t,n,a){return a(function(){cp(n)&&fp(t)})}function cp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Fn(t,a)}catch{return!0}}function fp(t){var n=Tr(t,2);n!==null&&Wn(n,t,2)}function mc(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),Ya){ot(!0);try{a()}finally{ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:t},n}function hp(t,n,a,s){return t.baseState=a,dc(t,De,typeof s=="function"?s:Pi)}function c0(t,n,a,s,u){if(sl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,dp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function dp(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=O.T,S={};O.T=S;try{var T=a(u,s),N=O.S;N!==null&&N(S,T),pp(t,n,T)}catch(Q){_c(t,n,Q)}finally{O.T=f}}else try{f=a(u,s),pp(t,n,f)}catch(Q){_c(t,n,Q)}}function pp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){mp(t,n,s)},function(s){return _c(t,n,s)}):mp(t,n,a)}function mp(t,n,a){n.status="fulfilled",n.value=a,_p(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,dp(t,a)))}function _c(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,_p(n),n=n.next;while(n!==s)}t.action=null}function _p(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function gp(t,n){return n}function vp(t,n){if(Te){var a=Fe.formState;if(a!==null){t:{var s=de;if(Te){if(Ze){e:{for(var u=Ze,f=vi;u.nodeType!==8;){if(!f){u=null;break e}if(u=ui(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=ui(u.nextSibling),s=u.data==="F!";break t}}ka(s)}s=!1}s&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gp,lastRenderedState:n},a.queue=s,a=zp.bind(null,de,s),s.dispatch=a,s=mc(!1),f=Mc.bind(null,de,!1,s.queue),s=Nn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=c0.bind(null,de,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Sp(t){var n=nn();return xp(n,De,t)}function xp(t,n,a){if(n=dc(t,n,gp)[0],t=il(Pi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Vs(n)}catch(S){throw S===Bs?Qo:S}else s=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Nr(9,al(),f0.bind(null,u,a),null)),[s,f,t]}function f0(t,n){t.action=n}function Mp(t){var n=nn(),a=De;if(a!==null)return xp(n,a,t);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Nr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=de.updateQueue,n===null&&(n=fc(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function al(){return{destroy:void 0,resource:void 0}}function yp(){return nn().memoizedState}function rl(t,n,a,s){var u=Nn();s=s===void 0?null:s,de.flags|=t,u.memoizedState=Nr(1|n,al(),a,s)}function ks(t,n,a,s){var u=nn();s=s===void 0?null:s;var f=u.memoizedState.inst;De!==null&&s!==null&&sc(s,De.memoizedState.deps)?u.memoizedState=Nr(n,f,a,s):(de.flags|=t,u.memoizedState=Nr(1|n,f,a,s))}function Ep(t,n){rl(8390656,8,t,n)}function Tp(t,n){ks(2048,8,t,n)}function Ap(t,n){return ks(4,2,t,n)}function bp(t,n){return ks(4,4,t,n)}function Rp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Cp(t,n,a){a=a!=null?a.concat([t]):null,ks(4,4,Rp.bind(null,n,t),a)}function gc(){}function wp(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&sc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Dp(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&sc(n,s[1]))return s[0];if(s=t(),Ya){ot(!0);try{t()}finally{ot(!1)}}return a.memoizedState=[s,n],s}function vc(t,n,a){return a===void 0||(oa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Nm(),de.lanes|=t,pa|=t,a)}function Up(t,n,a,s){return Fn(a,n)?a:Dr.current!==null?(t=vc(t,a,s),Fn(t,n)||(dn=!0),t):(oa&42)===0?(dn=!0,t.memoizedState=a):(t=Nm(),de.lanes|=t,pa|=t,n)}function Lp(t,n,a,s,u){var f=Z.p;Z.p=f!==0&&8>f?f:8;var S=O.T,T={};O.T=T,Mc(t,!1,n,a);try{var N=u(),Q=O.S;if(Q!==null&&Q(T,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var ft=o0(N,s);Xs(t,n,ft,Xn(t))}else Xs(t,n,s,Xn(t))}catch(pt){Xs(t,n,{then:function(){},status:"rejected",reason:pt},Xn())}finally{Z.p=f,O.T=S}}function h0(){}function Sc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Np(t).queue;Lp(t,u,n,q,a===null?h0:function(){return Op(t),a(s)})}function Np(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Op(t){var n=Np(t).next.queue;Xs(t,n,{},Xn())}function xc(){return En(lo)}function Pp(){return nn().memoizedState}function Bp(){return nn().memoizedState}function d0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Xn();t=ra(a);var s=sa(n,t,a);s!==null&&(Wn(s,n,a),Is(s,n,a)),n={cache:ju()},t.payload=n;return}n=n.return}}function p0(t,n,a){var s=Xn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},sl(t)?Ip(n,a):(a=Hu(t,n,a,s),a!==null&&(Wn(a,t,s),Fp(a,n,s)))}function zp(t,n,a){var s=Xn();Xs(t,n,a,s)}function Xs(t,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(sl(t))Ip(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(u.hasEagerState=!0,u.eagerState=T,Fn(T,S))return ko(t,n,u,0),Fe===null&&Vo(),!1}catch{}finally{}if(a=Hu(t,n,u,s),a!==null)return Wn(a,t,s),Fp(a,n,s),!0}return!1}function Mc(t,n,a,s){if(s={lane:2,revertLane:$c(),action:s,hasEagerState:!1,eagerState:null,next:null},sl(t)){if(n)throw Error(r(479))}else n=Hu(t,a,s,2),n!==null&&Wn(n,t,2)}function sl(t){var n=t.alternate;return t===de||n!==null&&n===de}function Ip(t,n){Ur=tl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Fp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ht(t,a)}}var ol={readContext:En,use:nl,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je},Hp={readContext:En,use:nl,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:En,useEffect:Ep,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,rl(4194308,4,Rp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return rl(4194308,4,t,n)},useInsertionEffect:function(t,n){rl(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var s=t();if(Ya){ot(!0);try{t()}finally{ot(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Nn();if(a!==void 0){var u=a(n);if(Ya){ot(!0);try{a(n)}finally{ot(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=p0.bind(null,de,t),[s.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=mc(t);var n=t.queue,a=zp.bind(null,de,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:gc,useDeferredValue:function(t,n){var a=Nn();return vc(a,t,n)},useTransition:function(){var t=mc(!1);return t=Lp.bind(null,de,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=de,u=Nn();if(Te){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Fe===null)throw Error(r(349));(Se&124)!==0||op(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Ep(up.bind(null,s,f,t),[t]),s.flags|=2048,Nr(9,al(),lp.bind(null,s,f,a,n),null),a},useId:function(){var t=Nn(),n=Fe.identifierPrefix;if(Te){var a=Li,s=Ui;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=el++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=l0++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:xc,useFormState:vp,useActionState:vp,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Mc.bind(null,de,!0,a),a.dispatch=n,[t,n]},useMemoCache:hc,useCacheRefresh:function(){return Nn().memoizedState=d0.bind(null,de)}},Gp={readContext:En,use:nl,useCallback:wp,useContext:En,useEffect:Tp,useImperativeHandle:Cp,useInsertionEffect:Ap,useLayoutEffect:bp,useMemo:Dp,useReducer:il,useRef:yp,useState:function(){return il(Pi)},useDebugValue:gc,useDeferredValue:function(t,n){var a=nn();return Up(a,De.memoizedState,t,n)},useTransition:function(){var t=il(Pi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:Vs(t),n]},useSyncExternalStore:sp,useId:Pp,useHostTransitionStatus:xc,useFormState:Sp,useActionState:Sp,useOptimistic:function(t,n){var a=nn();return hp(a,De,t,n)},useMemoCache:hc,useCacheRefresh:Bp},m0={readContext:En,use:nl,useCallback:wp,useContext:En,useEffect:Tp,useImperativeHandle:Cp,useInsertionEffect:Ap,useLayoutEffect:bp,useMemo:Dp,useReducer:pc,useRef:yp,useState:function(){return pc(Pi)},useDebugValue:gc,useDeferredValue:function(t,n){var a=nn();return De===null?vc(a,t,n):Up(a,De.memoizedState,t,n)},useTransition:function(){var t=pc(Pi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:Vs(t),n]},useSyncExternalStore:sp,useId:Pp,useHostTransitionStatus:xc,useFormState:Mp,useActionState:Mp,useOptimistic:function(t,n){var a=nn();return De!==null?hp(a,De,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:hc,useCacheRefresh:Bp},Or=null,Ws=0;function ll(t){var n=Ws;return Ws+=1,Or===null&&(Or=[]),Jd(Or,t,n)}function qs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ul(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Vp(t){var n=t._init;return n(t._payload)}function kp(t){function n(W,H){if(t){var j=W.deletions;j===null?(W.deletions=[H],W.flags|=16):j.push(H)}}function a(W,H){if(!t)return null;for(;H!==null;)n(W,H),H=H.sibling;return null}function s(W){for(var H=new Map;W!==null;)W.key!==null?H.set(W.key,W):H.set(W.index,W),W=W.sibling;return H}function u(W,H){return W=Di(W,H),W.index=0,W.sibling=null,W}function f(W,H,j){return W.index=j,t?(j=W.alternate,j!==null?(j=j.index,j<H?(W.flags|=67108866,H):j):(W.flags|=67108866,H)):(W.flags|=1048576,H)}function S(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function T(W,H,j,ht){return H===null||H.tag!==6?(H=Vu(j,W.mode,ht),H.return=W,H):(H=u(H,j),H.return=W,H)}function N(W,H,j,ht){var It=j.type;return It===b?ft(W,H,j.props.children,ht,j.key):H!==null&&(H.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===K&&Vp(It)===H.type)?(H=u(H,j.props),qs(H,j),H.return=W,H):(H=Wo(j.type,j.key,j.props,null,W.mode,ht),qs(H,j),H.return=W,H)}function Q(W,H,j,ht){return H===null||H.tag!==4||H.stateNode.containerInfo!==j.containerInfo||H.stateNode.implementation!==j.implementation?(H=ku(j,W.mode,ht),H.return=W,H):(H=u(H,j.children||[]),H.return=W,H)}function ft(W,H,j,ht,It){return H===null||H.tag!==7?(H=Fa(j,W.mode,ht,It),H.return=W,H):(H=u(H,j),H.return=W,H)}function pt(W,H,j){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Vu(""+H,W.mode,j),H.return=W,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case x:return j=Wo(H.type,H.key,H.props,null,W.mode,j),qs(j,H),j.return=W,j;case y:return H=ku(H,W.mode,j),H.return=W,H;case K:var ht=H._init;return H=ht(H._payload),pt(W,H,j)}if(lt(H)||nt(H))return H=Fa(H,W.mode,j,null),H.return=W,H;if(typeof H.then=="function")return pt(W,ll(H),j);if(H.$$typeof===P)return pt(W,Ko(W,H),j);ul(W,H)}return null}function et(W,H,j,ht){var It=H!==null?H.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return It!==null?null:T(W,H,""+j,ht);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case x:return j.key===It?N(W,H,j,ht):null;case y:return j.key===It?Q(W,H,j,ht):null;case K:return It=j._init,j=It(j._payload),et(W,H,j,ht)}if(lt(j)||nt(j))return It!==null?null:ft(W,H,j,ht,null);if(typeof j.then=="function")return et(W,H,ll(j),ht);if(j.$$typeof===P)return et(W,H,Ko(W,j),ht);ul(W,j)}return null}function it(W,H,j,ht,It){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return W=W.get(j)||null,T(H,W,""+ht,It);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case x:return W=W.get(ht.key===null?j:ht.key)||null,N(H,W,ht,It);case y:return W=W.get(ht.key===null?j:ht.key)||null,Q(H,W,ht,It);case K:var pe=ht._init;return ht=pe(ht._payload),it(W,H,j,ht,It)}if(lt(ht)||nt(ht))return W=W.get(j)||null,ft(H,W,ht,It,null);if(typeof ht.then=="function")return it(W,H,j,ll(ht),It);if(ht.$$typeof===P)return it(W,H,j,Ko(H,ht),It);ul(H,ht)}return null}function ne(W,H,j,ht){for(var It=null,pe=null,Yt=H,te=H=0,mn=null;Yt!==null&&te<j.length;te++){Yt.index>te?(mn=Yt,Yt=null):mn=Yt.sibling;var ye=et(W,Yt,j[te],ht);if(ye===null){Yt===null&&(Yt=mn);break}t&&Yt&&ye.alternate===null&&n(W,Yt),H=f(ye,H,te),pe===null?It=ye:pe.sibling=ye,pe=ye,Yt=mn}if(te===j.length)return a(W,Yt),Te&&Ga(W,te),It;if(Yt===null){for(;te<j.length;te++)Yt=pt(W,j[te],ht),Yt!==null&&(H=f(Yt,H,te),pe===null?It=Yt:pe.sibling=Yt,pe=Yt);return Te&&Ga(W,te),It}for(Yt=s(Yt);te<j.length;te++)mn=it(Yt,W,te,j[te],ht),mn!==null&&(t&&mn.alternate!==null&&Yt.delete(mn.key===null?te:mn.key),H=f(mn,H,te),pe===null?It=mn:pe.sibling=mn,pe=mn);return t&&Yt.forEach(function(Ea){return n(W,Ea)}),Te&&Ga(W,te),It}function Jt(W,H,j,ht){if(j==null)throw Error(r(151));for(var It=null,pe=null,Yt=H,te=H=0,mn=null,ye=j.next();Yt!==null&&!ye.done;te++,ye=j.next()){Yt.index>te?(mn=Yt,Yt=null):mn=Yt.sibling;var Ea=et(W,Yt,ye.value,ht);if(Ea===null){Yt===null&&(Yt=mn);break}t&&Yt&&Ea.alternate===null&&n(W,Yt),H=f(Ea,H,te),pe===null?It=Ea:pe.sibling=Ea,pe=Ea,Yt=mn}if(ye.done)return a(W,Yt),Te&&Ga(W,te),It;if(Yt===null){for(;!ye.done;te++,ye=j.next())ye=pt(W,ye.value,ht),ye!==null&&(H=f(ye,H,te),pe===null?It=ye:pe.sibling=ye,pe=ye);return Te&&Ga(W,te),It}for(Yt=s(Yt);!ye.done;te++,ye=j.next())ye=it(Yt,W,te,ye.value,ht),ye!==null&&(t&&ye.alternate!==null&&Yt.delete(ye.key===null?te:ye.key),H=f(ye,H,te),pe===null?It=ye:pe.sibling=ye,pe=ye);return t&&Yt.forEach(function(_S){return n(W,_S)}),Te&&Ga(W,te),It}function Le(W,H,j,ht){if(typeof j=="object"&&j!==null&&j.type===b&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case x:t:{for(var It=j.key;H!==null;){if(H.key===It){if(It=j.type,It===b){if(H.tag===7){a(W,H.sibling),ht=u(H,j.props.children),ht.return=W,W=ht;break t}}else if(H.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===K&&Vp(It)===H.type){a(W,H.sibling),ht=u(H,j.props),qs(ht,j),ht.return=W,W=ht;break t}a(W,H);break}else n(W,H);H=H.sibling}j.type===b?(ht=Fa(j.props.children,W.mode,ht,j.key),ht.return=W,W=ht):(ht=Wo(j.type,j.key,j.props,null,W.mode,ht),qs(ht,j),ht.return=W,W=ht)}return S(W);case y:t:{for(It=j.key;H!==null;){if(H.key===It)if(H.tag===4&&H.stateNode.containerInfo===j.containerInfo&&H.stateNode.implementation===j.implementation){a(W,H.sibling),ht=u(H,j.children||[]),ht.return=W,W=ht;break t}else{a(W,H);break}else n(W,H);H=H.sibling}ht=ku(j,W.mode,ht),ht.return=W,W=ht}return S(W);case K:return It=j._init,j=It(j._payload),Le(W,H,j,ht)}if(lt(j))return ne(W,H,j,ht);if(nt(j)){if(It=nt(j),typeof It!="function")throw Error(r(150));return j=It.call(j),Jt(W,H,j,ht)}if(typeof j.then=="function")return Le(W,H,ll(j),ht);if(j.$$typeof===P)return Le(W,H,Ko(W,j),ht);ul(W,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,H!==null&&H.tag===6?(a(W,H.sibling),ht=u(H,j),ht.return=W,W=ht):(a(W,H),ht=Vu(j,W.mode,ht),ht.return=W,W=ht),S(W)):a(W,H)}return function(W,H,j,ht){try{Ws=0;var It=Le(W,H,j,ht);return Or=null,It}catch(Yt){if(Yt===Bs||Yt===Qo)throw Yt;var pe=Hn(29,Yt,null,W.mode);return pe.lanes=ht,pe.return=W,pe}finally{}}}var Pr=kp(!0),Xp=kp(!1),$n=J(null),Si=null;function la(t){var n=t.alternate;xt(ln,ln.current&1),xt($n,t),Si===null&&(n===null||Dr.current!==null||n.memoizedState!==null)&&(Si=t)}function Wp(t){if(t.tag===22){if(xt(ln,ln.current),xt($n,t),Si===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Si=t)}}else ua()}function ua(){xt(ln,ln.current),xt($n,$n.current)}function Bi(t){vt($n),Si===t&&(Si=null),vt(ln)}var ln=J(0);function cl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||hf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function yc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ec={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Xn(),u=ra(s);u.payload=n,a!=null&&(u.callback=a),n=sa(t,u,s),n!==null&&(Wn(n,t,s),Is(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Xn(),u=ra(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=sa(t,u,s),n!==null&&(Wn(n,t,s),Is(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Xn(),s=ra(a);s.tag=2,n!=null&&(s.callback=n),n=sa(t,s,a),n!==null&&(Wn(n,t,a),Is(n,t,a))}};function qp(t,n,a,s,u,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Cs(a,s)||!Cs(u,f):!0}function Yp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Ec.enqueueReplaceState(n,n.state,null)}function Za(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var fl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Zp(t){fl(t)}function Kp(t){console.error(t)}function jp(t){fl(t)}function hl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Qp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tc(t,n,a){return a=ra(a),a.tag=3,a.payload={element:null},a.callback=function(){hl(t,n)},a}function Jp(t){return t=ra(t),t.tag=3,t}function $p(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Qp(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Qp(n,a,s),typeof u!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function _0(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ns(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 13:return Si===null?Zc():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===$u?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),jc(t,s,u)),!1;case 22:return a.flags|=65536,s===$u?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),jc(t,s,u)),!1}throw Error(r(435,a.tag))}return jc(t,s,u),Zc(),!1}if(Te)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==qu&&(t=Error(r(422),{cause:s}),Ls(Kn(t,a)))):(s!==qu&&(n=Error(r(423),{cause:s}),Ls(Kn(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Kn(s,a),u=Tc(t.stateNode,s,u),nc(t,u),Ke!==4&&(Ke=2)),!1;var f=Error(r(520),{cause:s});if(f=Kn(f,a),$s===null?$s=[f]:$s.push(f),Ke!==4&&(Ke=2),n===null)return!0;s=Kn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Tc(a.stateNode,s,t),nc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ma===null||!ma.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Jp(u),$p(u,t,a,s),nc(a,u),!1}a=a.return}while(a!==null);return!1}var tm=Error(r(461)),dn=!1;function vn(t,n,a,s){n.child=t===null?Xp(n,null,a,s):Pr(n,t.child,a,s)}function em(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return Wa(n),s=oc(t,n,a,S,f,u),T=lc(),t!==null&&!dn?(uc(t,n,u),zi(t,n,u)):(Te&&T&&Xu(n),n.flags|=1,vn(t,n,s,u),n.child)}function nm(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Gu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,im(t,n,f,s,u)):(t=Wo(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Lc(t,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Cs,a(S,s)&&t.ref===n.ref)return zi(t,n,u)}return n.flags|=1,t=Di(f,s),t.ref=n.ref,t.return=n,n.child=t}function im(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Cs(f,s)&&t.ref===n.ref)if(dn=!1,n.pendingProps=s=f,Lc(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,zi(t,n,u)}return Ac(t,n,a,s,u)}function am(t,n,a){var s=n.pendingProps,u=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(u=n.child=t.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return rm(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&jo(n,f!==null?f.cachePool:null),f!==null?ip(n,f):ac(),Wp(n);else return n.lanes=n.childLanes=536870912,rm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(jo(n,f.cachePool),ip(n,f),ua(),n.memoizedState=null):(t!==null&&jo(n,null),ac(),ua());return vn(t,n,u,a),n.child}function rm(t,n,a,s){var u=Ju();return u=u===null?null:{parent:on._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&jo(n,null),ac(),Wp(n),t!==null&&Ns(t,n,s,!0),null}function dl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ac(t,n,a,s,u){return Wa(n),a=oc(t,n,a,s,void 0,u),s=lc(),t!==null&&!dn?(uc(t,n,u),zi(t,n,u)):(Te&&s&&Xu(n),n.flags|=1,vn(t,n,a,u),n.child)}function sm(t,n,a,s,u,f){return Wa(n),n.updateQueue=null,a=rp(n,s,a,u),ap(t),s=lc(),t!==null&&!dn?(uc(t,n,f),zi(t,n,f)):(Te&&s&&Xu(n),n.flags|=1,vn(t,n,a,f),n.child)}function om(t,n,a,s,u){if(Wa(n),n.stateNode===null){var f=Ar,S=a.contextType;typeof S=="object"&&S!==null&&(f=En(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ec,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},tc(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?En(S):Ar,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(yc(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Ec.enqueueReplaceState(f,f.state,null),Hs(n,s,f,u),Fs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,N=Za(a,T);f.props=N;var Q=f.context,ft=a.contextType;S=Ar,typeof ft=="object"&&ft!==null&&(S=En(ft));var pt=a.getDerivedStateFromProps;ft=typeof pt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Q!==S)&&Yp(n,f,s,S),aa=!1;var et=n.memoizedState;f.state=et,Hs(n,s,f,u),Fs(),Q=n.memoizedState,T||et!==Q||aa?(typeof pt=="function"&&(yc(n,a,pt,s),Q=n.memoizedState),(N=aa||qp(n,a,N,s,et,Q,S))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=S,s=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,ec(t,n),S=n.memoizedProps,ft=Za(a,S),f.props=ft,pt=n.pendingProps,et=f.context,Q=a.contextType,N=Ar,typeof Q=="object"&&Q!==null&&(N=En(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==pt||et!==N)&&Yp(n,f,s,N),aa=!1,et=n.memoizedState,f.state=et,Hs(n,s,f,u),Fs();var it=n.memoizedState;S!==pt||et!==it||aa||t!==null&&t.dependencies!==null&&Zo(t.dependencies)?(typeof T=="function"&&(yc(n,a,T,s),it=n.memoizedState),(ft=aa||qp(n,a,ft,s,et,it,N)||t!==null&&t.dependencies!==null&&Zo(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,it,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,it,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=N,s=ft):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,dl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Pr(n,t.child,null,u),n.child=Pr(n,null,a,u)):vn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=zi(t,n,u),t}function lm(t,n,a,s){return Us(),n.flags|=256,vn(t,n,a,s),n.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rc(t){return{baseLanes:t,cachePool:Kd()}}function Cc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ti),t}function um(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Te){if(u?la(n):ua(),Te){var T=Ze,N;if(N=T){t:{for(N=T,T=vi;N.nodeType!==8;){if(!T){T=null;break t}if(N=ui(N.nextSibling),N===null){T=null;break t}}T=N}T!==null?(n.memoizedState={dehydrated:T,treeContext:Ha!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},N=Hn(18,null,null,0),N.stateNode=T,N.return=n,n.child=N,wn=n,Ze=null,N=!0):N=!1}N||ka(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return hf(T)?n.lanes=32:n.lanes=536870912,null;Bi(n)}return T=s.children,s=s.fallback,u?(ua(),u=n.mode,T=pl({mode:"hidden",children:T},u),s=Fa(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,u=n.child,u.memoizedState=Rc(a),u.childLanes=Cc(t,S,a),n.memoizedState=bc,s):(la(n),wc(n,T))}if(N=t.memoizedState,N!==null&&(T=N.dehydrated,T!==null)){if(f)n.flags&256?(la(n),n.flags&=-257,n=Dc(t,n,a)):n.memoizedState!==null?(ua(),n.child=t.child,n.flags|=128,n=null):(ua(),u=s.fallback,T=n.mode,s=pl({mode:"visible",children:s.children},T),u=Fa(u,T,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,Pr(n,t.child,null,a),s=n.child,s.memoizedState=Rc(a),s.childLanes=Cc(t,S,a),n.memoizedState=bc,n=u);else if(la(n),hf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var Q=S.dgst;S=Q,s=Error(r(419)),s.stack="",s.digest=S,Ls({value:s,source:null,stack:null}),n=Dc(t,n,a)}else if(dn||Ns(t,n,a,!1),S=(a&t.childLanes)!==0,dn||S){if(S=Fe,S!==null&&(s=a&-a,s=(s&42)!==0?1:ie(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==N.retryLane))throw N.retryLane=s,Tr(t,s),Wn(S,t,s),tm;T.data==="$?"||Zc(),n=Dc(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=N.treeContext,Ze=ui(T.nextSibling),wn=n,Te=!0,Va=null,vi=!1,t!==null&&(Qn[Jn++]=Ui,Qn[Jn++]=Li,Qn[Jn++]=Ha,Ui=t.id,Li=t.overflow,Ha=n),n=wc(n,s.children),n.flags|=4096);return n}return u?(ua(),u=s.fallback,T=n.mode,N=t.child,Q=N.sibling,s=Di(N,{mode:"hidden",children:s.children}),s.subtreeFlags=N.subtreeFlags&65011712,Q!==null?u=Di(Q,u):(u=Fa(u,T,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,T=t.child.memoizedState,T===null?T=Rc(a):(N=T.cachePool,N!==null?(Q=on._currentValue,N=N.parent!==Q?{parent:Q,pool:Q}:N):N=Kd(),T={baseLanes:T.baseLanes|a,cachePool:N}),u.memoizedState=T,u.childLanes=Cc(t,S,a),n.memoizedState=bc,s):(la(n),a=t.child,t=a.sibling,a=Di(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function wc(t,n){return n=pl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function pl(t,n){return t=Hn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Dc(t,n,a){return Pr(n,t.child,null,a),t=wc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function cm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Zu(t.return,n,a)}function Uc(t,n,a,s,u){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=u)}function fm(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;if(vn(t,n,s.children,a),s=ln.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cm(t,a,n);else if(t.tag===19)cm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(xt(ln,s),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&cl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Uc(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&cl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Uc(n,!0,a,null,f);break;case"together":Uc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function zi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),pa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ns(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Di(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Di(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Lc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Zo(t)))}function g0(t,n,a){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),ia(n,on,t.memoizedState.cache),Us();break;case 27:case 5:Wt(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:ia(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(la(n),n.flags|=128,null):(a&n.child.childLanes)!==0?um(t,n,a):(la(n),t=zi(t,n,a),t!==null?t.sibling:null);la(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ns(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return fm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(ln,ln.current),s)break;return null;case 22:case 23:return n.lanes=0,am(t,n,a);case 24:ia(n,on,t.memoizedState.cache)}return zi(t,n,a)}function hm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!Lc(t,a)&&(n.flags&128)===0)return dn=!1,g0(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,Te&&(n.flags&1048576)!==0&&Vd(n,Yo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")Gu(s)?(t=Za(s,t),n.tag=1,n=om(null,n,s,t,a)):(n.tag=0,n=Ac(null,n,s,t,a));else{if(s!=null){if(u=s.$$typeof,u===U){n.tag=11,n=em(null,n,s,t,a);break t}else if(u===F){n.tag=14,n=nm(null,n,s,t,a);break t}}throw n=gt(s)||s,Error(r(306,n,""))}}return n;case 0:return Ac(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Za(s,n.pendingProps),om(t,n,s,u,a);case 3:t:{if(At(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,ec(t,n),Hs(n,s,null,a);var S=n.memoizedState;if(s=S.cache,ia(n,on,s),s!==f.cache&&Ku(n,[on],a,!0),Fs(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=lm(t,n,s,a);break t}else if(s!==u){u=Kn(Error(r(424)),n),Ls(u),n=lm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=ui(t.firstChild),wn=n,Te=!0,Va=null,vi=!0,a=Xp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Us(),s===u){n=zi(t,n,a);break t}vn(t,n,s,a)}n=n.child}return n;case 26:return dl(t,n),t===null?(a=__(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,t=n.pendingProps,s=Cl(tt.current).createElement(a),s[sn]=n,s[qe]=t,xn(s,a,t),tn(s),n.stateNode=s):n.memoizedState=__(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Wt(n),t===null&&Te&&(s=n.stateNode=d_(n.type,n.pendingProps,tt.current),wn=n,vi=!0,u=Ze,va(n.type)?(df=u,Ze=ui(s.firstChild)):Ze=u),vn(t,n,n.pendingProps.children,a),dl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Te&&((u=s=Ze)&&(s=W0(s,n.type,n.pendingProps,vi),s!==null?(n.stateNode=s,wn=n,Ze=ui(s.firstChild),vi=!1,u=!0):u=!1),u||ka(n)),Wt(n),u=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,uf(u,f)?s=null:S!==null&&uf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=oc(t,n,u0,null,null,a),lo._currentValue=u),dl(t,n),vn(t,n,s,a),n.child;case 6:return t===null&&Te&&((t=a=Ze)&&(a=q0(a,n.pendingProps,vi),a!==null?(n.stateNode=a,wn=n,Ze=null,t=!0):t=!1),t||ka(n)),null;case 13:return um(t,n,a);case 4:return At(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Pr(n,null,s,a):vn(t,n,s,a),n.child;case 11:return em(t,n,n.type,n.pendingProps,a);case 7:return vn(t,n,n.pendingProps,a),n.child;case 8:return vn(t,n,n.pendingProps.children,a),n.child;case 12:return vn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ia(n,n.type,s.value),vn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Wa(n),u=En(u),s=s(u),n.flags|=1,vn(t,n,s,a),n.child;case 14:return nm(t,n,n.type,n.pendingProps,a);case 15:return im(t,n,n.type,n.pendingProps,a);case 19:return fm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=pl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Di(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return am(t,n,a);case 24:return Wa(n),s=En(on),t===null?(u=Ju(),u===null&&(u=Fe,f=ju(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},tc(n),ia(n,on,u)):((t.lanes&a)!==0&&(ec(t,n),Hs(n,null,null,a),Fs()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ia(n,on,s)):(s=f.cache,ia(n,on,s),s!==u.cache&&Ku(n,[on],a,!0))),vn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ii(t){t.flags|=4}function dm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!M_(n)){if(n=$n.current,n!==null&&((Se&4194048)===Se?Si!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==Si))throw zs=$u,jd;t.flags|=8192}}function ml(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Tt():536870912,t.lanes|=n,Fr|=n)}function Ys(t,n){if(!Te)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function v0(t,n,a){var s=n.pendingProps;switch(Wu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Oi(on),Kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ds(n)?Ii(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wd())),We(n),null;case 26:return a=n.memoizedState,t===null?(Ii(n),a!==null?(We(n),dm(n,a)):(We(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Ii(n),We(n),dm(n,a)):(We(n),n.flags&=-16777217):(t.memoizedProps!==s&&Ii(n),We(n),n.flags&=-16777217),null;case 27:he(n),a=tt.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ii(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}t=Dt.current,Ds(n)?kd(n):(t=d_(u,s,a),n.stateNode=t,Ii(n))}return We(n),null;case 5:if(he(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ii(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}if(t=Dt.current,Ds(n))kd(n);else{switch(u=Cl(tt.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}t[sn]=n,t[qe]=s;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;t:switch(xn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Ii(n)}}return We(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ii(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=tt.current,Ds(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=wn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||s_(t.nodeValue,a)),t||ka(n)}else t=Cl(t).createTextNode(s),t[sn]=n,n.stateNode=t}return We(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ds(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[sn]=n}else Us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),u=!1}else u=Wd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Bi(n),n):(Bi(n),null)}if(Bi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),ml(n,n.updateQueue),We(n),null;case 4:return Kt(),t===null&&af(n.stateNode.containerInfo),We(n),null;case 10:return Oi(n.type),We(n),null;case 19:if(vt(ln),u=n.memoizedState,u===null)return We(n),null;if(s=(n.flags&128)!==0,f=u.rendering,f===null)if(s)Ys(u,!1);else{if(Ke!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=cl(t),f!==null){for(n.flags|=128,Ys(u,!1),t=f.updateQueue,n.updateQueue=t,ml(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Gd(a,t),a=a.sibling;return xt(ln,ln.current&1|2),n.child}t=t.sibling}u.tail!==null&&Ot()>vl&&(n.flags|=128,s=!0,Ys(u,!1),n.lanes=4194304)}else{if(!s)if(t=cl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,ml(n,t),Ys(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Te)return We(n),null}else 2*Ot()-u.renderingStartTime>vl&&a!==536870912&&(n.flags|=128,s=!0,Ys(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(t=u.last,t!==null?t.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ot(),n.sibling=null,t=ln.current,xt(ln,s?t&1|2:t&1),n):(We(n),null);case 22:case 23:return Bi(n),rc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&ml(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&vt(qa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Oi(on),We(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function S0(t,n){switch(Wu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Oi(on),Kt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 13:if(Bi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Us()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return vt(ln),null;case 4:return Kt(),null;case 10:return Oi(n.type),null;case 22:case 23:return Bi(n),rc(),t!==null&&vt(qa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Oi(on),null;case 25:return null;default:return null}}function pm(t,n){switch(Wu(n),n.tag){case 3:Oi(on),Kt();break;case 26:case 27:case 5:he(n);break;case 4:Kt();break;case 13:Bi(n);break;case 19:vt(ln);break;case 10:Oi(n.type);break;case 22:case 23:Bi(n),rc(),t!==null&&vt(qa);break;case 24:Oi(on)}}function Zs(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==u)}}catch(T){ze(n,n.return,T)}}function ca(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,u=n;var N=a,Q=T;try{Q()}catch(ft){ze(u,N,ft)}}}s=s.next}while(s!==f)}}catch(ft){ze(n,n.return,ft)}}function mm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{np(n,a)}catch(s){ze(t,t.return,s)}}}function _m(t,n,a){a.props=Za(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){ze(t,n,s)}}function Ks(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){ze(t,n,u)}}function xi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){ze(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(t,n,u)}else a.current=null}function gm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){ze(t,t.return,u)}}function Nc(t,n,a){try{var s=t.stateNode;H0(s,t.type,a,n),s[qe]=n}catch(u){ze(t,t.return,u)}}function vm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&va(t.type)||t.tag===4}function Oc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||vm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&va(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Rl));else if(s!==4&&(s===27&&va(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Pc(t,n,a),t=t.sibling;t!==null;)Pc(t,n,a),t=t.sibling}function _l(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(_l(t,n,a),t=t.sibling;t!==null;)_l(t,n,a),t=t.sibling}function Sm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);xn(n,s,a),n[sn]=t,n[qe]=a}catch(f){ze(t,t.return,f)}}var Fi=!1,Qe=!1,Bc=!1,xm=typeof WeakSet=="function"?WeakSet:Set,pn=null;function x0(t,n){if(t=t.containerInfo,of=Ol,t=Ud(t),Ou(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,N=-1,Q=0,ft=0,pt=t,et=null;e:for(;;){for(var it;pt!==a||u!==0&&pt.nodeType!==3||(T=S+u),pt!==f||s!==0&&pt.nodeType!==3||(N=S+s),pt.nodeType===3&&(S+=pt.nodeValue.length),(it=pt.firstChild)!==null;)et=pt,pt=it;for(;;){if(pt===t)break e;if(et===a&&++Q===u&&(T=S),et===f&&++ft===s&&(N=S),(it=pt.nextSibling)!==null)break;pt=et,et=pt.parentNode}pt=it}a=T===-1||N===-1?null:{start:T,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(lf={focusedElem:t,selectionRange:a},Ol=!1,pn=n;pn!==null;)if(n=pn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,pn=t;else for(;pn!==null;){switch(n=pn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ne=Za(a.type,u,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(ne,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){ze(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ff(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ff(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,pn=t;break}pn=n.return}}function Mm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:fa(t,a),s&4&&Zs(5,a);break;case 1:if(fa(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){ze(a,a.return,S)}else{var u=Za(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){ze(a,a.return,S)}}s&64&&mm(a),s&512&&Ks(a,a.return);break;case 3:if(fa(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{np(t,n)}catch(S){ze(a,a.return,S)}}break;case 27:n===null&&s&4&&Sm(a);case 26:case 5:fa(t,a),n===null&&s&4&&gm(a),s&512&&Ks(a,a.return);break;case 12:fa(t,a);break;case 13:fa(t,a),s&4&&Tm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=w0.bind(null,a),Y0(t,a))));break;case 22:if(s=a.memoizedState!==null||Fi,!s){n=n!==null&&n.memoizedState!==null||Qe,u=Fi;var f=Qe;Fi=s,(Qe=n)&&!f?ha(t,a,(a.subtreeFlags&8772)!==0):fa(t,a),Fi=u,Qe=f}break;case 30:break;default:fa(t,a)}}function ym(t){var n=t.alternate;n!==null&&(t.alternate=null,ym(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&_r(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ve=null,On=!1;function Hi(t,n,a){for(a=a.child;a!==null;)Em(t,n,a),a=a.sibling}function Em(t,n,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:Qe||xi(a,n),Hi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||xi(a,n);var s=Ve,u=On;va(a.type)&&(Ve=a.stateNode,On=!1),Hi(t,n,a),ao(a.stateNode),Ve=s,On=u;break;case 5:Qe||xi(a,n);case 6:if(s=Ve,u=On,Ve=null,Hi(t,n,a),Ve=s,On=u,Ve!==null)if(On)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{Ve.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:Ve!==null&&(On?(t=Ve,f_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ho(t)):f_(Ve,a.stateNode));break;case 4:s=Ve,u=On,Ve=a.stateNode.containerInfo,On=!0,Hi(t,n,a),Ve=s,On=u;break;case 0:case 11:case 14:case 15:Qe||ca(2,a,n),Qe||ca(4,a,n),Hi(t,n,a);break;case 1:Qe||(xi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&_m(a,n,s)),Hi(t,n,a);break;case 21:Hi(t,n,a);break;case 22:Qe=(s=Qe)||a.memoizedState!==null,Hi(t,n,a),Qe=s;break;default:Hi(t,n,a)}}function Tm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ho(t)}catch(a){ze(n,n.return,a)}}function M0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new xm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new xm),n;default:throw Error(r(435,t.tag))}}function zc(t,n){var a=M0(t);n.forEach(function(s){var u=D0.bind(null,t,s);a.has(s)||(a.add(s),s.then(u,u))})}function Gn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(va(T.type)){Ve=T.stateNode,On=!1;break t}break;case 5:Ve=T.stateNode,On=!1;break t;case 3:case 4:Ve=T.stateNode.containerInfo,On=!0;break t}T=T.return}if(Ve===null)throw Error(r(160));Em(f,S,u),Ve=null,On=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Am(n,t),n=n.sibling}var li=null;function Am(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gn(n,t),Vn(t),s&4&&(ca(3,t,t.return),Zs(3,t),ca(5,t,t.return));break;case 1:Gn(n,t),Vn(t),s&512&&(Qe||a===null||xi(a,a.return)),s&64&&Fi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=li;if(Gn(n,t),Vn(t),s&512&&(Qe||a===null||xi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[gi]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),xn(f,s,a),f[sn]=t,tn(f),s=f;break t;case"link":var S=S_("link","href",u).get(s+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=u.createElement(s),xn(f,s,a),u.head.appendChild(f);break;case"meta":if(S=S_("meta","content",u).get(s+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=u.createElement(s),xn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[sn]=t,tn(f),s=f}t.stateNode=s}else x_(u,t.type,t.stateNode);else t.stateNode=v_(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?x_(u,t.type,t.stateNode):v_(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Nc(t,t.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,t),Vn(t),s&512&&(Qe||a===null||xi(a,a.return)),a!==null&&s&4&&Nc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,t),Vn(t),s&512&&(Qe||a===null||xi(a,a.return)),t.flags&32){u=t.stateNode;try{Un(u,"")}catch(it){ze(t,t.return,it)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Nc(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Bc=!0);break;case 6:if(Gn(n,t),Vn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(it){ze(t,t.return,it)}}break;case 3:if(Ul=null,u=li,li=wl(n.containerInfo),Gn(n,t),li=u,Vn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ho(n.containerInfo)}catch(it){ze(t,t.return,it)}Bc&&(Bc=!1,bm(t));break;case 4:s=li,li=wl(t.stateNode.containerInfo),Gn(n,t),Vn(t),li=s;break;case 12:Gn(n,t),Vn(t);break;case 13:Gn(n,t),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kc=Ot()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,zc(t,s)));break;case 22:u=t.memoizedState!==null;var N=a!==null&&a.memoizedState!==null,Q=Fi,ft=Qe;if(Fi=Q||u,Qe=ft||N,Gn(n,t),Qe=ft,Fi=Q,Vn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||N||Fi||Qe||Ka(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){N=a=n;try{if(f=N.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=N.stateNode;var pt=N.memoizedProps.style,et=pt!=null&&pt.hasOwnProperty("display")?pt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(it){ze(N,N.return,it)}}}else if(n.tag===6){if(a===null){N=n;try{N.stateNode.nodeValue=u?"":N.memoizedProps}catch(it){ze(N,N.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,zc(t,a))));break;case 19:Gn(n,t),Vn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,zc(t,s)));break;case 30:break;case 21:break;default:Gn(n,t),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(vm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Oc(t);_l(t,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(Un(S,""),a.flags&=-33);var T=Oc(t);_l(t,T,S);break;case 3:case 4:var N=a.stateNode.containerInfo,Q=Oc(t);Pc(t,Q,N);break;default:throw Error(r(161))}}catch(ft){ze(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function bm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;bm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function fa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Mm(t,n.alternate,n),n=n.sibling}function Ka(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ca(4,n,n.return),Ka(n);break;case 1:xi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&_m(n,n.return,a),Ka(n);break;case 27:ao(n.stateNode);case 26:case 5:xi(n,n.return),Ka(n);break;case 22:n.memoizedState===null&&Ka(n);break;case 30:Ka(n);break;default:Ka(n)}t=t.sibling}}function ha(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ha(u,f,a),Zs(4,f);break;case 1:if(ha(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){ze(s,s.return,Q)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var N=u.shared.hiddenCallbacks;if(N!==null)for(u.shared.hiddenCallbacks=null,u=0;u<N.length;u++)ep(N[u],T)}catch(Q){ze(s,s.return,Q)}}a&&S&64&&mm(f),Ks(f,f.return);break;case 27:Sm(f);case 26:case 5:ha(u,f,a),a&&s===null&&S&4&&gm(f),Ks(f,f.return);break;case 12:ha(u,f,a);break;case 13:ha(u,f,a),a&&S&4&&Tm(u,f);break;case 22:f.memoizedState===null&&ha(u,f,a),Ks(f,f.return);break;case 30:break;default:ha(u,f,a)}n=n.sibling}}function Ic(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Os(a))}function Fc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Os(t))}function Mi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Rm(t,n,a,s),n=n.sibling}function Rm(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,s),u&2048&&Zs(9,n);break;case 1:Mi(t,n,a,s);break;case 3:Mi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Os(t)));break;case 12:if(u&2048){Mi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(N){ze(n,n.return,N)}}else Mi(t,n,a,s);break;case 13:Mi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(t,n,a,s):js(t,n):f._visibility&2?Mi(t,n,a,s):(f._visibility|=2,Br(t,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&Ic(S,n);break;case 24:Mi(t,n,a,s),u&2048&&Fc(n.alternate,n);break;default:Mi(t,n,a,s)}}function Br(t,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,T=a,N=s,Q=S.flags;switch(S.tag){case 0:case 11:case 15:Br(f,S,T,N,u),Zs(8,S);break;case 23:break;case 22:var ft=S.stateNode;S.memoizedState!==null?ft._visibility&2?Br(f,S,T,N,u):js(f,S):(ft._visibility|=2,Br(f,S,T,N,u)),u&&Q&2048&&Ic(S.alternate,S);break;case 24:Br(f,S,T,N,u),u&&Q&2048&&Fc(S.alternate,S);break;default:Br(f,S,T,N,u)}n=n.sibling}}function js(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:js(a,s),u&2048&&Ic(s.alternate,s);break;case 24:js(a,s),u&2048&&Fc(s.alternate,s);break;default:js(a,s)}n=n.sibling}}var Qs=8192;function zr(t){if(t.subtreeFlags&Qs)for(t=t.child;t!==null;)Cm(t),t=t.sibling}function Cm(t){switch(t.tag){case 26:zr(t),t.flags&Qs&&t.memoizedState!==null&&sS(li,t.memoizedState,t.memoizedProps);break;case 5:zr(t);break;case 3:case 4:var n=li;li=wl(t.stateNode.containerInfo),zr(t),li=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Qs,Qs=16777216,zr(t),Qs=n):zr(t));break;default:zr(t)}}function wm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Js(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Um(s,t)}wm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dm(t),t=t.sibling}function Dm(t){switch(t.tag){case 0:case 11:case 15:Js(t),t.flags&2048&&ca(9,t,t.return);break;case 3:Js(t);break;case 12:Js(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,gl(t)):Js(t);break;default:Js(t)}}function gl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Um(s,t)}wm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ca(8,n,n.return),gl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,gl(n));break;default:gl(n)}t=t.sibling}}function Um(t,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:ca(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Os(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,pn=s;else t:for(a=t;pn!==null;){s=pn;var u=s.sibling,f=s.return;if(ym(s),s===a){pn=null;break t}if(u!==null){u.return=f,pn=u;break t}pn=f}}}var y0={getCacheForType:function(t){var n=En(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},E0=typeof WeakMap=="function"?WeakMap:Map,be=0,Fe=null,_e=null,Se=0,Re=0,kn=null,da=!1,Ir=!1,Hc=!1,Gi=0,Ke=0,pa=0,ja=0,Gc=0,ti=0,Fr=0,$s=null,Pn=null,Vc=!1,kc=0,vl=1/0,Sl=null,ma=null,Sn=0,_a=null,Hr=null,Gr=0,Xc=0,Wc=null,Lm=null,to=0,qc=null;function Xn(){if((be&2)!==0&&Se!==0)return Se&-Se;if(O.T!==null){var t=Cr;return t!==0?t:$c()}return xe()}function Nm(){ti===0&&(ti=(Se&536870912)===0||Te?k():536870912);var t=$n.current;return t!==null&&(t.flags|=32),ti}function Wn(t,n,a){(t===Fe&&(Re===2||Re===9)||t.cancelPendingCommit!==null)&&(Vr(t,0),ga(t,Se,ti,!1)),Bt(t,a),((be&2)===0||t!==Fe)&&(t===Fe&&((be&2)===0&&(ja|=a),Ke===4&&ga(t,Se,ti,!1)),yi(t))}function Om(t,n,a){if((be&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Ct(t,n),u=s?b0(t,n):Kc(t,n,!0),f=s;do{if(u===0){Ir&&!s&&ga(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!T0(a)){u=Kc(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=t;u=$s;var N=T.current.memoizedState.isDehydrated;if(N&&(Vr(T,S).flags|=256),S=Kc(T,S,!1),S!==2){if(Hc&&!N){T.errorRecoveryDisabledLanes|=f,ja|=f,u=4;break t}f=Pn,Pn=u,f!==null&&(Pn===null?Pn=f:Pn.push.apply(Pn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){Vr(t,0),ga(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ga(s,n,ti,!da);break t;case 2:Pn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=kc+300-Ot(),10<u)){if(ga(s,n,ti,!da),Vt(s,0,!0)!==0)break t;s.timeoutHandle=u_(Pm.bind(null,s,a,Pn,Sl,Vc,n,ti,ja,Fr,da,f,2,-0,0),u);break t}Pm(s,a,Pn,Sl,Vc,n,ti,ja,Fr,da,f,0,-0,0)}}break}while(!0);yi(t)}function Pm(t,n,a,s,u,f,S,T,N,Q,ft,pt,et,it){if(t.timeoutHandle=-1,pt=n.subtreeFlags,(pt&8192||(pt&16785408)===16785408)&&(oo={stylesheets:null,count:0,unsuspend:rS},Cm(n),pt=oS(),pt!==null)){t.cancelPendingCommit=pt(Vm.bind(null,t,n,f,a,s,u,S,T,N,ft,1,et,it)),ga(t,f,S,!Q);return}Vm(t,n,f,a,s,u,S,T,N)}function T0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Fn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ga(t,n,a,s){n&=~Gc,n&=~ja,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),S=1<<f;s[f]=-1,u&=~S}a!==0&&_t(t,a,n)}function xl(){return(be&6)===0?(eo(0),!1):!0}function Yc(){if(_e!==null){if(Re===0)var t=_e.return;else t=_e,Ni=Xa=null,cc(t),Or=null,Ws=0,t=_e;for(;t!==null;)pm(t.alternate,t),t=t.return;_e=null}}function Vr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,V0(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Yc(),Fe=t,_e=a=Di(t.current,null),Se=n,Re=0,kn=null,da=!1,Ir=Ct(t,n),Hc=!1,Fr=ti=Gc=ja=pa=Ke=0,Pn=$s=null,Vc=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Pt(s),f=1<<u;n|=t[u],s&=~f}return Gi=n,Vo(),a}function Bm(t,n){de=null,O.H=ol,n===Bs||n===Qo?(n=$d(),Re=3):n===jd?(n=$d(),Re=4):Re=n===tm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kn=n,_e===null&&(Ke=1,hl(t,Kn(n,t.current)))}function zm(){var t=O.H;return O.H=ol,t===null?ol:t}function Im(){var t=O.A;return O.A=y0,t}function Zc(){Ke=4,da||(Se&4194048)!==Se&&$n.current!==null||(Ir=!0),(pa&134217727)===0&&(ja&134217727)===0||Fe===null||ga(Fe,Se,ti,!1)}function Kc(t,n,a){var s=be;be|=2;var u=zm(),f=Im();(Fe!==t||Se!==n)&&(Sl=null,Vr(t,n)),n=!1;var S=Ke;t:do try{if(Re!==0&&_e!==null){var T=_e,N=kn;switch(Re){case 8:Yc(),S=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var Q=Re;if(Re=0,kn=null,kr(t,T,N,Q),a&&Ir){S=0;break t}break;default:Q=Re,Re=0,kn=null,kr(t,T,N,Q)}}A0(),S=Ke;break}catch(ft){Bm(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Ni=Xa=null,be=s,O.H=u,O.A=f,_e===null&&(Fe=null,Se=0,Vo()),S}function A0(){for(;_e!==null;)Fm(_e)}function b0(t,n){var a=be;be|=2;var s=zm(),u=Im();Fe!==t||Se!==n?(Sl=null,vl=Ot()+500,Vr(t,n)):Ir=Ct(t,n);t:do try{if(Re!==0&&_e!==null){n=_e;var f=kn;e:switch(Re){case 1:Re=0,kn=null,kr(t,n,f,1);break;case 2:case 9:if(Qd(f)){Re=0,kn=null,Hm(n);break}n=function(){Re!==2&&Re!==9||Fe!==t||(Re=7),yi(t)},f.then(n,n);break t;case 3:Re=7;break t;case 4:Re=5;break t;case 7:Qd(f)?(Re=0,kn=null,Hm(n)):(Re=0,kn=null,kr(t,n,f,7));break;case 5:var S=null;switch(_e.tag){case 26:S=_e.memoizedState;case 5:case 27:var T=_e;if(!S||M_(S)){Re=0,kn=null;var N=T.sibling;if(N!==null)_e=N;else{var Q=T.return;Q!==null?(_e=Q,Ml(Q)):_e=null}break e}}Re=0,kn=null,kr(t,n,f,5);break;case 6:Re=0,kn=null,kr(t,n,f,6);break;case 8:Yc(),Ke=6;break t;default:throw Error(r(462))}}R0();break}catch(ft){Bm(t,ft)}while(!0);return Ni=Xa=null,O.H=s,O.A=u,be=a,_e!==null?0:(Fe=null,Se=0,Vo(),Ke)}function R0(){for(;_e!==null&&!ae();)Fm(_e)}function Fm(t){var n=hm(t.alternate,t,Gi);t.memoizedProps=t.pendingProps,n===null?Ml(t):_e=n}function Hm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=sm(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=sm(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:cc(n);default:pm(a,n),n=_e=Gd(n,Gi),n=hm(a,n,Gi)}t.memoizedProps=t.pendingProps,n===null?Ml(t):_e=n}function kr(t,n,a,s){Ni=Xa=null,cc(n),Or=null,Ws=0;var u=n.return;try{if(_0(t,u,n,a,Se)){Ke=1,hl(t,Kn(a,t.current)),_e=null;return}}catch(f){if(u!==null)throw _e=u,f;Ke=1,hl(t,Kn(a,t.current)),_e=null;return}n.flags&32768?(Te||s===1?t=!0:Ir||(Se&536870912)!==0?t=!1:(da=t=!0,(s===2||s===9||s===3||s===6)&&(s=$n.current,s!==null&&s.tag===13&&(s.flags|=16384))),Gm(n,t)):Ml(n)}function Ml(t){var n=t;do{if((n.flags&32768)!==0){Gm(n,da);return}t=n.return;var a=v0(n.alternate,n,Gi);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=t}while(n!==null);Ke===0&&(Ke=5)}function Gm(t,n){do{var a=S0(t.alternate,t);if(a!==null){a.flags&=32767,_e=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_e=t;return}_e=t=a}while(t!==null);Ke=6,_e=null}function Vm(t,n,a,s,u,f,S,T,N){t.cancelPendingCommit=null;do yl();while(Sn!==0);if((be&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Fu,yt(t,a,f,S,T,N),t===Fe&&(_e=Fe=null,Se=0),Hr=n,_a=t,Gr=a,Xc=f,Wc=u,Lm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,U0(ke,function(){return Ym(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,u=Z.p,Z.p=2,S=be,be|=4;try{x0(t,n,a)}finally{be=S,Z.p=u,O.T=s}}Sn=1,km(),Xm(),Wm()}}function km(){if(Sn===1){Sn=0;var t=_a,n=Hr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=Z.p;Z.p=2;var u=be;be|=4;try{Am(n,t);var f=lf,S=Ud(t.containerInfo),T=f.focusedElem,N=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&Dd(T.ownerDocument.documentElement,T)){if(N!==null&&Ou(T)){var Q=N.start,ft=N.end;if(ft===void 0&&(ft=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(ft,T.value.length);else{var pt=T.ownerDocument||document,et=pt&&pt.defaultView||window;if(et.getSelection){var it=et.getSelection(),ne=T.textContent.length,Jt=Math.min(N.start,ne),Le=N.end===void 0?Jt:Math.min(N.end,ne);!it.extend&&Jt>Le&&(S=Le,Le=Jt,Jt=S);var W=wd(T,Jt),H=wd(T,Le);if(W&&H&&(it.rangeCount!==1||it.anchorNode!==W.node||it.anchorOffset!==W.offset||it.focusNode!==H.node||it.focusOffset!==H.offset)){var j=pt.createRange();j.setStart(W.node,W.offset),it.removeAllRanges(),Jt>Le?(it.addRange(j),it.extend(H.node,H.offset)):(j.setEnd(H.node,H.offset),it.addRange(j))}}}}for(pt=[],it=T;it=it.parentNode;)it.nodeType===1&&pt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<pt.length;T++){var ht=pt[T];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Ol=!!of,lf=of=null}finally{be=u,Z.p=s,O.T=a}}t.current=n,Sn=2}}function Xm(){if(Sn===2){Sn=0;var t=_a,n=Hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=Z.p;Z.p=2;var u=be;be|=4;try{Mm(t,n.alternate,n)}finally{be=u,Z.p=s,O.T=a}}Sn=3}}function Wm(){if(Sn===4||Sn===3){Sn=0,ee();var t=_a,n=Hr,a=Gr,s=Lm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,Hr=_a=null,qm(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ma=null),Ae(a),n=n.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,u=Z.p,Z.p=2,O.T=null;try{for(var f=t.onRecoverableError,S=0;S<s.length;S++){var T=s[S];f(T.value,{componentStack:T.stack})}}finally{O.T=n,Z.p=u}}(Gr&3)!==0&&yl(),yi(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===qc?to++:(to=0,qc=t):to=0,eo(0)}}function qm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Os(n)))}function yl(t){return km(),Xm(),Wm(),Ym()}function Ym(){if(Sn!==5)return!1;var t=_a,n=Xc;Xc=0;var a=Ae(Gr),s=O.T,u=Z.p;try{Z.p=32>a?32:a,O.T=null,a=Wc,Wc=null;var f=_a,S=Gr;if(Sn=0,Hr=_a=null,Gr=0,(be&6)!==0)throw Error(r(331));var T=be;if(be|=4,Dm(f.current),Rm(f,f.current,S,a),be=T,eo(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ct,f)}catch{}return!0}finally{Z.p=u,O.T=s,qm(t,n)}}function Zm(t,n,a){n=Kn(a,n),n=Tc(t.stateNode,n,2),t=sa(t,n,2),t!==null&&(Bt(t,2),yi(t))}function ze(t,n,a){if(t.tag===3)Zm(t,t,a);else for(;n!==null;){if(n.tag===3){Zm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ma===null||!ma.has(s))){t=Kn(a,t),a=Jp(2),s=sa(n,a,2),s!==null&&($p(a,s,n,t),Bt(s,2),yi(s));break}}n=n.return}}function jc(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new E0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Hc=!0,u.add(a),t=C0.bind(null,t,n,a),n.then(t,t))}function C0(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Fe===t&&(Se&a)===a&&(Ke===4||Ke===3&&(Se&62914560)===Se&&300>Ot()-kc?(be&2)===0&&Vr(t,0):Gc|=a,Fr===Se&&(Fr=0)),yi(t)}function Km(t,n){n===0&&(n=Tt()),t=Tr(t,n),t!==null&&(Bt(t,n),yi(t))}function w0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Km(t,a)}function D0(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Km(t,a)}function U0(t,n){return B(t,n)}var El=null,Xr=null,Qc=!1,Tl=!1,Jc=!1,Qa=0;function yi(t){t!==Xr&&t.next===null&&(Xr===null?El=Xr=t:Xr=Xr.next=t),Tl=!0,Qc||(Qc=!0,N0())}function eo(t,n){if(!Jc&&Tl){Jc=!0;do for(var a=!1,s=El;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var S=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=u&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,$m(s,f))}else f=Se,f=Vt(s,s===Fe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ct(s,f)||(a=!0,$m(s,f));s=s.next}while(a);Jc=!1}}function L0(){jm()}function jm(){Tl=Qc=!1;var t=0;Qa!==0&&(G0()&&(t=Qa),Qa=0);for(var n=Ot(),a=null,s=El;s!==null;){var u=s.next,f=Qm(s,n);f===0?(s.next=null,a===null?El=u:a.next=u,u===null&&(Xr=a)):(a=s,(t!==0||(f&3)!==0)&&(Tl=!0)),s=u}eo(t)}function Qm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Pt(f),T=1<<S,N=u[S];N===-1?((T&a)===0||(T&s)!==0)&&(u[S]=se(T,n)):N<=n&&(t.expiredLanes|=T),f&=~T}if(n=Fe,a=Se,a=Vt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Re===2||Re===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ce(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ct(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Ce(s),Ae(a)){case 2:case 8:a=re;break;case 32:a=ke;break;case 268435456:a=L;break;default:a=ke}return s=Jm.bind(null,t),a=B(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Ce(s),t.callbackPriority=2,t.callbackNode=null,2}function Jm(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(yl()&&t.callbackNode!==a)return null;var s=Se;return s=Vt(t,t===Fe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Om(t,s,n),Qm(t,Ot()),t.callbackNode!=null&&t.callbackNode===a?Jm.bind(null,t):null)}function $m(t,n){if(yl())return null;Om(t,n,!0)}function N0(){k0(function(){(be&6)!==0?B(Gt,L0):jm()})}function $c(){return Qa===0&&(Qa=k()),Qa}function t_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Po(""+t)}function e_(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function O0(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=t_((u[qe]||null).action),S=s.submitter;S&&(n=(n=S[qe]||null)?t_(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new Fo("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Qa!==0){var N=S?e_(u,S):new FormData(u);Sc(a,{pending:!0,data:N,method:u.method,action:f},null,N)}}else typeof f=="function"&&(T.preventDefault(),N=S?e_(u,S):new FormData(u),Sc(a,{pending:!0,data:N,method:u.method,action:f},f,N))},currentTarget:u}]})}}for(var tf=0;tf<Iu.length;tf++){var ef=Iu[tf],P0=ef.toLowerCase(),B0=ef[0].toUpperCase()+ef.slice(1);oi(P0,"on"+B0)}oi(Od,"onAnimationEnd"),oi(Pd,"onAnimationIteration"),oi(Bd,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi($v,"onTransitionRun"),oi(t0,"onTransitionStart"),oi(e0,"onTransitionCancel"),oi(zd,"onTransitionEnd"),X("onMouseEnter",["mouseout","mouseover"]),X("onMouseLeave",["mouseout","mouseover"]),X("onPointerEnter",["pointerout","pointerover"]),X("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(no));function n_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],N=T.instance,Q=T.currentTarget;if(T=T.listener,N!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ft){fl(ft)}u.currentTarget=null,f=N}else for(S=0;S<s.length;S++){if(T=s[S],N=T.instance,Q=T.currentTarget,T=T.listener,N!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ft){fl(ft)}u.currentTarget=null,f=N}}}}function ge(t,n){var a=n[pr];a===void 0&&(a=n[pr]=new Set);var s=t+"__bubble";a.has(s)||(i_(n,t,2,!1),a.add(s))}function nf(t,n,a){var s=0;n&&(s|=4),i_(a,t,s,n)}var Al="_reactListening"+Math.random().toString(36).slice(2);function af(t){if(!t[Al]){t[Al]=!0,No.forEach(function(a){a!=="selectionchange"&&(z0.has(a)||nf(a,!1,t),nf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Al]||(n[Al]=!0,nf("selectionchange",!1,n))}}function i_(t,n,a,s){switch(R_(n)){case 2:var u=cS;break;case 8:u=fS;break;default:u=vf}a=u.bind(null,n,a,t),u=void 0,!Au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function rf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===u)break;if(S===4)for(S=s.return;S!==null;){var N=S.tag;if((N===3||N===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;T!==null;){if(S=Ci(T),S===null)return;if(N=S.tag,N===5||N===6||N===26||N===27){s=f=S;continue t}T=T.parentNode}}s=s.return}cd(function(){var Q=f,ft=Eu(a),pt=[];t:{var et=Id.get(t);if(et!==void 0){var it=Fo,ne=t;switch(t){case"keypress":if(zo(a)===0)break t;case"keydown":case"keyup":it=Uv;break;case"focusin":ne="focus",it=wu;break;case"focusout":ne="blur",it=wu;break;case"beforeblur":case"afterblur":it=wu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=Ov;break;case Od:case Pd:case Bd:it=yv;break;case zd:it=Bv;break;case"scroll":case"scrollend":it=gv;break;case"wheel":it=Iv;break;case"copy":case"cut":case"paste":it=Tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=md;break;case"toggle":case"beforetoggle":it=Hv}var Jt=(n&4)!==0,Le=!Jt&&(t==="scroll"||t==="scrollend"),W=Jt?et!==null?et+"Capture":null:et;Jt=[];for(var H=Q,j;H!==null;){var ht=H;if(j=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||j===null||W===null||(ht=Ms(H,W),ht!=null&&Jt.push(io(H,ht,j))),Le)break;H=H.return}0<Jt.length&&(et=new it(et,ne,null,a,ft),pt.push({event:et,listeners:Jt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",it=t==="mouseout"||t==="pointerout",et&&a!==yu&&(ne=a.relatedTarget||a.fromElement)&&(Ci(ne)||ne[_i]))break t;if((it||et)&&(et=ft.window===ft?ft:(et=ft.ownerDocument)?et.defaultView||et.parentWindow:window,it?(ne=a.relatedTarget||a.toElement,it=Q,ne=ne?Ci(ne):null,ne!==null&&(Le=c(ne),Jt=ne.tag,ne!==Le||Jt!==5&&Jt!==27&&Jt!==6)&&(ne=null)):(it=null,ne=Q),it!==ne)){if(Jt=dd,ht="onMouseLeave",W="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=md,ht="onPointerLeave",W="onPointerEnter",H="pointer"),Le=it==null?et:Pa(it),j=ne==null?et:Pa(ne),et=new Jt(ht,H+"leave",it,a,ft),et.target=Le,et.relatedTarget=j,ht=null,Ci(ft)===Q&&(Jt=new Jt(W,H+"enter",ne,a,ft),Jt.target=j,Jt.relatedTarget=Le,ht=Jt),Le=ht,it&&ne)e:{for(Jt=it,W=ne,H=0,j=Jt;j;j=Wr(j))H++;for(j=0,ht=W;ht;ht=Wr(ht))j++;for(;0<H-j;)Jt=Wr(Jt),H--;for(;0<j-H;)W=Wr(W),j--;for(;H--;){if(Jt===W||W!==null&&Jt===W.alternate)break e;Jt=Wr(Jt),W=Wr(W)}Jt=null}else Jt=null;it!==null&&a_(pt,et,it,Jt,!1),ne!==null&&Le!==null&&a_(pt,Le,ne,Jt,!0)}}t:{if(et=Q?Pa(Q):window,it=et.nodeName&&et.nodeName.toLowerCase(),it==="select"||it==="input"&&et.type==="file")var It=Ed;else if(Md(et))if(Td)It=jv;else{It=Zv;var pe=Yv}else it=et.nodeName,!it||it.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?Q&&Mu(Q.elementType)&&(It=Ed):It=Kv;if(It&&(It=It(t,Q))){yd(pt,It,a,ft);break t}pe&&pe(t,et,Q),t==="focusout"&&Q&&et.type==="number"&&Q.memoizedProps.value!=null&&yn(et,"number",et.value)}switch(pe=Q?Pa(Q):window,t){case"focusin":(Md(pe)||pe.contentEditable==="true")&&(Mr=pe,Pu=Q,ws=null);break;case"focusout":ws=Pu=Mr=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,Ld(pt,a,ft);break;case"selectionchange":if(Jv)break;case"keydown":case"keyup":Ld(pt,a,ft)}var Yt;if(Uu)t:{switch(t){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else xr?Sd(t,a)&&(te="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(_d&&a.locale!=="ko"&&(xr||te!=="onCompositionStart"?te==="onCompositionEnd"&&xr&&(Yt=fd()):(na=ft,bu="value"in na?na.value:na.textContent,xr=!0)),pe=bl(Q,te),0<pe.length&&(te=new pd(te,t,null,a,ft),pt.push({event:te,listeners:pe}),Yt?te.data=Yt:(Yt=xd(a),Yt!==null&&(te.data=Yt)))),(Yt=Vv?kv(t,a):Xv(t,a))&&(te=bl(Q,"onBeforeInput"),0<te.length&&(pe=new pd("onBeforeInput","beforeinput",null,a,ft),pt.push({event:pe,listeners:te}),pe.data=Yt)),O0(pt,t,Q,a,ft)}n_(pt,n)})}function io(t,n,a){return{instance:t,listener:n,currentTarget:a}}function bl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ms(t,a),u!=null&&s.unshift(io(t,u,f)),u=Ms(t,n),u!=null&&s.push(io(t,u,f))),t.tag===3)return s;t=t.return}return[]}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function a_(t,n,a,s,u){for(var f=n._reactName,S=[];a!==null&&a!==s;){var T=a,N=T.alternate,Q=T.stateNode;if(T=T.tag,N!==null&&N===s)break;T!==5&&T!==26&&T!==27||Q===null||(N=Q,u?(Q=Ms(a,f),Q!=null&&S.unshift(io(a,Q,N))):u||(Q=Ms(a,f),Q!=null&&S.push(io(a,Q,N)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var I0=/\r\n?/g,F0=/\u0000|\uFFFD/g;function r_(t){return(typeof t=="string"?t:""+t).replace(I0,`
`).replace(F0,"")}function s_(t,n){return n=r_(n),r_(t)===n}function Rl(){}function Ue(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Un(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Un(t,""+s);break;case"className":zt(t,"class",s);break;case"tabIndex":zt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(t,a,s);break;case"style":ld(t,s,f);break;case"data":if(n!=="object"){zt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Po(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ue(t,n,"name",u.name,u,null),Ue(t,n,"formEncType",u.formEncType,u,null),Ue(t,n,"formMethod",u.formMethod,u,null),Ue(t,n,"formTarget",u.formTarget,u,null)):(Ue(t,n,"encType",u.encType,u,null),Ue(t,n,"method",u.method,u,null),Ue(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Po(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Rl);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Po(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ge("beforetoggle",t),ge("toggle",t),wt(t,"popover",s);break;case"xlinkActuate":Lt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Lt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Lt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Lt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Lt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Lt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Lt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Lt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Lt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":wt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=mv.get(a)||a,wt(t,a,s))}}function sf(t,n,a,s,u,f){switch(a){case"style":ld(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Un(t,s):(typeof s=="number"||typeof s=="bigint")&&Un(t,""+s);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Rl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[qe]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):wt(t,a,s)}}}function xn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(t,n,f,S,a,null)}}u&&Ue(t,n,"srcSet",a.srcSet,a,null),s&&Ue(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var T=f=S=u=null,N=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":u=ft;break;case"type":S=ft;break;case"checked":N=ft;break;case"defaultChecked":Q=ft;break;case"value":f=ft;break;case"defaultValue":T=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Ue(t,n,s,ft,a,null)}}Cn(t,f,T,N,Q,S,u,!1),me(t);return;case"select":ge("invalid",t),s=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:Ue(t,n,u,T,a,null)}n=f,a=S,t.multiple=!!s,n!=null?Ye(t,!!s,n,!1):a!=null&&Ye(t,!!s,a,!0);return;case"textarea":ge("invalid",t),f=u=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ue(t,n,S,T,a,null)}gr(t,s,u,f),me(t);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(s=a[N],s!=null))switch(N){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ue(t,n,N,s,a,null)}return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(s=0;s<no.length;s++)ge(no[s],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(t,n,Q,s,a,null)}return;default:if(Mu(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&sf(t,n,ft,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ue(t,n,T,s,a,null))}function H0(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,T=null,N=null,Q=null,ft=null;for(it in a){var pt=a[it];if(a.hasOwnProperty(it)&&pt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":N=pt;default:s.hasOwnProperty(it)||Ue(t,n,it,null,s,pt)}}for(var et in s){var it=s[et];if(pt=a[et],s.hasOwnProperty(et)&&(it!=null||pt!=null))switch(et){case"type":f=it;break;case"name":u=it;break;case"checked":Q=it;break;case"defaultChecked":ft=it;break;case"value":S=it;break;case"defaultValue":T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==pt&&Ue(t,n,et,it,s,pt)}}Be(t,S,T,N,Q,ft,f,u);return;case"select":it=S=T=et=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":it=N;default:s.hasOwnProperty(f)||Ue(t,n,f,null,s,N)}for(u in s)if(f=s[u],N=a[u],s.hasOwnProperty(u)&&(f!=null||N!=null))switch(u){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==N&&Ue(t,n,u,f,s,N)}n=T,a=S,s=it,et!=null?Ye(t,!!a,et,!1):!!s!=!!a&&(n!=null?Ye(t,!!a,n,!0):Ye(t,!!a,a?[]:"",!1));return;case"textarea":it=et=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ue(t,n,T,null,s,u)}for(S in s)if(u=s[S],f=a[S],s.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":et=u;break;case"defaultValue":it=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ue(t,n,S,u,s,f)}gn(t,et,it);return;case"option":for(var ne in a)if(et=a[ne],a.hasOwnProperty(ne)&&et!=null&&!s.hasOwnProperty(ne))switch(ne){case"selected":t.selected=!1;break;default:Ue(t,n,ne,null,s,et)}for(N in s)if(et=s[N],it=a[N],s.hasOwnProperty(N)&&et!==it&&(et!=null||it!=null))switch(N){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ue(t,n,N,et,s,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)et=a[Jt],a.hasOwnProperty(Jt)&&et!=null&&!s.hasOwnProperty(Jt)&&Ue(t,n,Jt,null,s,et);for(Q in s)if(et=s[Q],it=a[Q],s.hasOwnProperty(Q)&&et!==it&&(et!=null||it!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Ue(t,n,Q,et,s,it)}return;default:if(Mu(n)){for(var Le in a)et=a[Le],a.hasOwnProperty(Le)&&et!==void 0&&!s.hasOwnProperty(Le)&&sf(t,n,Le,void 0,s,et);for(ft in s)et=s[ft],it=a[ft],!s.hasOwnProperty(ft)||et===it||et===void 0&&it===void 0||sf(t,n,ft,et,s,it);return}}for(var W in a)et=a[W],a.hasOwnProperty(W)&&et!=null&&!s.hasOwnProperty(W)&&Ue(t,n,W,null,s,et);for(pt in s)et=s[pt],it=a[pt],!s.hasOwnProperty(pt)||et===it||et==null&&it==null||Ue(t,n,pt,et,s,it)}var of=null,lf=null;function Cl(t){return t.nodeType===9?t:t.ownerDocument}function o_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function l_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function uf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cf=null;function G0(){var t=window.event;return t&&t.type==="popstate"?t===cf?!1:(cf=t,!0):(cf=null,!1)}var u_=typeof setTimeout=="function"?setTimeout:void 0,V0=typeof clearTimeout=="function"?clearTimeout:void 0,c_=typeof Promise=="function"?Promise:void 0,k0=typeof queueMicrotask=="function"?queueMicrotask:typeof c_<"u"?function(t){return c_.resolve(null).then(t).catch(X0)}:u_;function X0(t){setTimeout(function(){throw t})}function va(t){return t==="head"}function f_(t,n){var a=n,s=0,u=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=t.ownerDocument;if(a&1&&ao(S.documentElement),a&2&&ao(S.body),a&4)for(a=S.head,ao(a),S=a.firstChild;S;){var T=S.nextSibling,N=S.nodeName;S[gi]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(u===0){t.removeChild(f),ho(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);ho(n)}function ff(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ff(a),_r(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function W0(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[gi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function q0(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function hf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Y0(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var df=null;function h_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function d_(t,n,a){switch(n=Cl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ao(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);_r(t)}var ei=new Map,p_=new Set;function wl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Vi=Z.d;Z.d={f:Z0,r:K0,D:j0,C:Q0,L:J0,m:$0,X:eS,S:tS,M:nS};function Z0(){var t=Vi.f(),n=xl();return t||n}function K0(t){var n=ta(t);n!==null&&n.tag===5&&n.type==="form"?Op(n):Vi.r(t)}var qr=typeof document>"u"?null:document;function m_(t,n,a){var s=qr;if(s&&typeof n=="string"&&n){var u=hn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),p_.has(u)||(p_.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),xn(n,"link",t),tn(n),s.head.appendChild(n)))}}function j0(t){Vi.D(t),m_("dns-prefetch",t,null)}function Q0(t,n){Vi.C(t,n),m_("preconnect",t,n)}function J0(t,n,a){Vi.L(t,n,a);var s=qr;if(s&&t&&n){var u='link[rel="preload"][as="'+hn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+hn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+hn(a.imageSizes)+'"]')):u+='[href="'+hn(t)+'"]';var f=u;switch(n){case"style":f=Yr(t);break;case"script":f=Zr(t)}ei.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ei.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(ro(f))||n==="script"&&s.querySelector(so(f))||(n=s.createElement("link"),xn(n,"link",t),tn(n),s.head.appendChild(n)))}}function $0(t,n){Vi.m(t,n);var a=qr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+hn(s)+'"][href="'+hn(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Zr(t)}if(!ei.has(f)&&(t=_({rel:"modulepreload",href:t},n),ei.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(so(f)))return}s=a.createElement("link"),xn(s,"link",t),tn(s),a.head.appendChild(s)}}}function tS(t,n,a){Vi.S(t,n,a);var s=qr;if(s&&t){var u=ea(s).hoistableStyles,f=Yr(t);n=n||"default";var S=u.get(f);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(ro(f)))T.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ei.get(f))&&pf(t,a);var N=S=s.createElement("link");tn(N),xn(N,"link",t),N._p=new Promise(function(Q,ft){N.onload=Q,N.onerror=ft}),N.addEventListener("load",function(){T.loading|=1}),N.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Dl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},u.set(f,S)}}}function eS(t,n){Vi.X(t,n);var a=qr;if(a&&t){var s=ea(a).hoistableScripts,u=Zr(t),f=s.get(u);f||(f=a.querySelector(so(u)),f||(t=_({src:t,async:!0},n),(n=ei.get(u))&&mf(t,n),f=a.createElement("script"),tn(f),xn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function nS(t,n){Vi.M(t,n);var a=qr;if(a&&t){var s=ea(a).hoistableScripts,u=Zr(t),f=s.get(u);f||(f=a.querySelector(so(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=ei.get(u))&&mf(t,n),f=a.createElement("script"),tn(f),xn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function __(t,n,a,s){var u=(u=tt.current)?wl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Yr(a.href),a=ea(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Yr(a.href);var f=ea(u).hoistableStyles,S=f.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=u.querySelector(ro(t)))&&!f._p&&(S.instance=f,S.state.loading=5),ei.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ei.set(t,a),f||iS(u,t,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Zr(a),a=ea(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Yr(t){return'href="'+hn(t)+'"'}function ro(t){return'link[rel="stylesheet"]['+t+"]"}function g_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function iS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),xn(n,"link",a),tn(n),t.head.appendChild(n))}function Zr(t){return'[src="'+hn(t)+'"]'}function so(t){return"script[async]"+t}function v_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+hn(a.href)+'"]');if(s)return n.instance=s,tn(s),s;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),tn(s),xn(s,"style",u),Dl(s,a.precedence,t),n.instance=s;case"stylesheet":u=Yr(a.href);var f=t.querySelector(ro(u));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;s=g_(a),(u=ei.get(u))&&pf(s,u),f=(t.ownerDocument||t).createElement("link"),tn(f);var S=f;return S._p=new Promise(function(T,N){S.onload=T,S.onerror=N}),xn(f,"link",s),n.state.loading|=4,Dl(f,a.precedence,t),n.instance=f;case"script":return f=Zr(a.src),(u=t.querySelector(so(f)))?(n.instance=u,tn(u),u):(s=a,(u=ei.get(f))&&(s=_({},a),mf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),tn(u),xn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Dl(s,a.precedence,t));return n.instance}function Dl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function pf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function mf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ul=null;function S_(t,n,a){if(Ul===null){var s=new Map,u=Ul=new Map;u.set(a,s)}else u=Ul,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[gi]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var T=s.get(S);T?T.push(f):s.set(S,[f])}}return s}function x_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function aS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function M_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var oo=null;function rS(){}function sS(t,n,a){if(oo===null)throw Error(r(475));var s=oo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Yr(a.href),f=t.querySelector(ro(u));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Ll.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,tn(f);return}f=t.ownerDocument||t,a=g_(a),(u=ei.get(u))&&pf(a,u),f=f.createElement("link"),tn(f);var S=f;S._p=new Promise(function(T,N){S.onload=T,S.onerror=N}),xn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Ll.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function oS(){if(oo===null)throw Error(r(475));var t=oo;return t.stylesheets&&t.count===0&&_f(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&_f(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ll(){if(this.count--,this.count===0){if(this.stylesheets)_f(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Nl=null;function _f(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Nl=new Map,n.forEach(lS,t),Nl=null,Ll.call(t))}function lS(t,n){if(!(n.state.loading&4)){var a=Nl.get(t);if(a)var s=a.get(null);else{a=new Map,Nl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,u),a.set(S,u),this.count++,s=Ll.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var lo={$$typeof:P,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function uS(t,n,a,s,u,f,S,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function y_(t,n,a,s,u,f,S,T,N,Q,ft,pt){return t=new uS(t,n,a,S,T,N,Q,pt),n=1,f===!0&&(n|=24),f=Hn(3,null,null,n),t.current=f,f.stateNode=t,n=ju(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},tc(f),t}function E_(t){return t?(t=Ar,t):Ar}function T_(t,n,a,s,u,f){u=E_(u),s.context===null?s.context=u:s.pendingContext=u,s=ra(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=sa(t,s,n),a!==null&&(Wn(a,t,n),Is(a,t,n))}function A_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function gf(t,n){A_(t,n),(t=t.alternate)&&A_(t,n)}function b_(t){if(t.tag===13){var n=Tr(t,67108864);n!==null&&Wn(n,t,67108864),gf(t,67108864)}}var Ol=!0;function cS(t,n,a,s){var u=O.T;O.T=null;var f=Z.p;try{Z.p=2,vf(t,n,a,s)}finally{Z.p=f,O.T=u}}function fS(t,n,a,s){var u=O.T;O.T=null;var f=Z.p;try{Z.p=8,vf(t,n,a,s)}finally{Z.p=f,O.T=u}}function vf(t,n,a,s){if(Ol){var u=Sf(s);if(u===null)rf(t,n,s,Pl,a),C_(t,s);else if(dS(u,t,n,a,s))s.stopPropagation();else if(C_(t,s),n&4&&-1<hS.indexOf(t)){for(;u!==null;){var f=ta(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Zt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var N=1<<31-Pt(S);T.entanglements[1]|=N,S&=~N}yi(f),(be&6)===0&&(vl=Ot()+500,eo(0))}}break;case 13:T=Tr(f,2),T!==null&&Wn(T,f,2),xl(),gf(f,2)}if(f=Sf(s),f===null&&rf(t,n,s,Pl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else rf(t,n,s,null,a)}}function Sf(t){return t=Eu(t),xf(t)}var Pl=null;function xf(t){if(Pl=null,t=Ci(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Pl=t,null}function R_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ie()){case Gt:return 2;case re:return 8;case ke:case Xe:return 32;case L:return 268435456;default:return 32}default:return 32}}var Mf=!1,Sa=null,xa=null,Ma=null,uo=new Map,co=new Map,ya=[],hS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function C_(t,n){switch(t){case"focusin":case"focusout":Sa=null;break;case"dragenter":case"dragleave":xa=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(n.pointerId)}}function fo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ta(n),n!==null&&b_(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function dS(t,n,a,s,u){switch(n){case"focusin":return Sa=fo(Sa,t,n,a,s,u),!0;case"dragenter":return xa=fo(xa,t,n,a,s,u),!0;case"mouseover":return Ma=fo(Ma,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return uo.set(f,fo(uo.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,co.set(f,fo(co.get(f)||null,t,n,a,s,u)),!0}return!1}function w_(t){var n=Ci(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,ri(t.priority,function(){if(a.tag===13){var s=Xn();s=ie(s);var u=Tr(a,s);u!==null&&Wn(u,a,s),gf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Sf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);yu=s,a.target.dispatchEvent(s),yu=null}else return n=ta(a),n!==null&&b_(n),t.blockedOn=a,!1;n.shift()}return!0}function D_(t,n,a){Bl(t)&&a.delete(n)}function pS(){Mf=!1,Sa!==null&&Bl(Sa)&&(Sa=null),xa!==null&&Bl(xa)&&(xa=null),Ma!==null&&Bl(Ma)&&(Ma=null),uo.forEach(D_),co.forEach(D_)}function zl(t,n){t.blockedOn===n&&(t.blockedOn=null,Mf||(Mf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,pS)))}var Il=null;function U_(t){Il!==t&&(Il=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Il===t&&(Il=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(xf(s||a)===null)continue;break}var f=ta(a);f!==null&&(t.splice(n,3),n-=3,Sc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ho(t){function n(N){return zl(N,t)}Sa!==null&&zl(Sa,t),xa!==null&&zl(xa,t),Ma!==null&&zl(Ma,t),uo.forEach(n),co.forEach(n);for(var a=0;a<ya.length;a++){var s=ya[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<ya.length&&(a=ya[0],a.blockedOn===null);)w_(a),a.blockedOn===null&&ya.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],S=u[qe]||null;if(typeof f=="function")S||U_(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[qe]||null)T=S.formAction;else if(xf(u)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),U_(a)}}}function yf(t){this._internalRoot=t}Fl.prototype.render=yf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Xn();T_(a,s,t,n,null,null)},Fl.prototype.unmount=yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;T_(t.current,2,null,t,null,null),xl(),n[_i]=null}};function Fl(t){this._internalRoot=t}Fl.prototype.unstable_scheduleHydration=function(t){if(t){var n=xe();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ya.length&&n!==0&&n<ya[a].priority;a++);ya.splice(a,0,t),a===0&&w_(t)}};var L_=e.version;if(L_!=="19.1.1")throw Error(r(527,L_,"19.1.1"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var mS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{ct=Hl.inject(mS),dt=Hl}catch{}}return mo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Zp,f=Kp,S=jp,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=y_(t,1,!1,null,null,a,s,u,f,S,T,null),t[_i]=n.current,af(t),new yf(n)},mo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Zp,S=Kp,T=jp,N=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),n=y_(t,1,!0,n,a??null,s,u,f,S,T,N,Q),n.context=E_(null),a=n.current,s=Xn(),s=ie(s),u=ra(s),u.callback=null,sa(a,u,s),a=s,n.current.lanes=a,Bt(n,a),yi(n),t[_i]=n.current,af(t),new Fl(n)},mo.version="19.1.1",mo}var k_;function AS(){if(k_)return Af.exports;k_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Af.exports=TS(),Af.exports}var bS=AS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jh="180",RS=0,X_=1,CS=2,Fg=1,wS=2,Zi=3,Na=0,zn=1,Ki=2,Ua=0,cs=1,W_=2,q_=3,Y_=4,DS=5,sr=100,US=101,LS=102,NS=103,OS=104,PS=200,BS=201,zS=202,IS=203,sh=204,oh=205,FS=206,HS=207,GS=208,VS=209,kS=210,XS=211,WS=212,qS=213,YS=214,lh=0,uh=1,ch=2,hs=3,fh=4,hh=5,dh=6,ph=7,Hg=0,ZS=1,KS=2,La=0,jS=1,QS=2,JS=3,$S=4,tx=5,ex=6,nx=7,Gg=300,ds=301,ps=302,mh=303,_h=304,gu=306,gh=1e3,lr=1001,vh=1002,mi=1003,ix=1004,Gl=1005,Ti=1006,wf=1007,ur=1008,Ji=1009,Vg=1010,kg=1011,Eo=1012,Qh=1013,fr=1014,ji=1015,Co=1016,Jh=1017,$h=1018,To=1020,Xg=35902,Wg=35899,qg=1021,Yg=1022,pi=1023,Ao=1026,bo=1027,Zg=1028,td=1029,Kg=1030,ed=1031,nd=1033,uu=33776,cu=33777,fu=33778,hu=33779,Sh=35840,xh=35841,Mh=35842,yh=35843,Eh=36196,Th=37492,Ah=37496,bh=37808,Rh=37809,Ch=37810,wh=37811,Dh=37812,Uh=37813,Lh=37814,Nh=37815,Oh=37816,Ph=37817,Bh=37818,zh=37819,Ih=37820,Fh=37821,Hh=36492,Gh=36494,Vh=36495,kh=36283,Xh=36284,Wh=36285,qh=36286,ax=3200,rx=3201,sx=0,ox=1,Da="",ii="srgb",ms="srgb-linear",pu="linear",Ne="srgb",Kr=7680,Z_=519,lx=512,ux=513,cx=514,jg=515,fx=516,hx=517,dx=518,px=519,K_=35044,j_="300 es",Ai=2e3,mu=2001;class gs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Df=Math.PI/180,Yh=180/Math.PI;function wo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function ve(o,e,i){return Math.max(e,Math.min(i,o))}function mx(o,e){return(o%e+e)%e}function Uf(o,e,i){return(1-i)*o+i*e}function _o(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,i=0){Pe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Do{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],v=r[l+3];const x=c[h+0],y=c[h+1],b=c[h+2],C=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=y,e[i+2]=b,e[i+3]=C;return}if(v!==C||m!==x||p!==y||_!==b){let M=1-d;const g=m*x+p*y+_*b+v*C,I=g>=0?1:-1,P=1-g*g;if(P>Number.EPSILON){const z=Math.sqrt(P),G=Math.atan2(z,g*I);M=Math.sin(M*G)/z,d=Math.sin(d*G)/z}const U=d*I;if(m=m*M+x*U,p=p*M+y*U,_=_*M+b*U,v=v*M+C*U,M===1-d){const z=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=z,p*=z,_*=z,v*=z}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],v=c[h],x=c[h+1],y=c[h+2],b=c[h+3];return e[i]=d*b+_*v+m*y-p*x,e[i+1]=m*b+_*x+p*v-d*y,e[i+2]=p*b+_*y+d*x-m*v,e[i+3]=_*b-d*v-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),v=d(c/2),x=m(r/2),y=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=x*_*v+p*y*b,this._y=p*y*v-x*_*b,this._z=p*_*b+x*y*v,this._w=p*_*v-x*y*b;break;case"YXZ":this._x=x*_*v+p*y*b,this._y=p*y*v-x*_*b,this._z=p*_*b-x*y*v,this._w=p*_*v+x*y*b;break;case"ZXY":this._x=x*_*v-p*y*b,this._y=p*y*v+x*_*b,this._z=p*_*b+x*y*v,this._w=p*_*v-x*y*b;break;case"ZYX":this._x=x*_*v-p*y*b,this._y=p*y*v+x*_*b,this._z=p*_*b-x*y*v,this._w=p*_*v+x*y*b;break;case"YZX":this._x=x*_*v+p*y*b,this._y=p*y*v+x*_*b,this._z=p*_*b-x*y*v,this._w=p*_*v-x*y*b;break;case"XZY":this._x=x*_*v-p*y*b,this._y=p*y*v-x*_*b,this._z=p*_*b+x*y*v,this._w=p*_*v+x*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],x=r+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ve(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-r*p,this._z=c*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),v=Math.sin((1-i)*_)/p,x=Math.sin(i*_)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(e=0,i=0,r=0){st.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Q_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Q_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),_=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+m*p+h*v-d*_,this.y=r+m*_+d*p-c*v,this.z=l+m*v+c*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Lf.copy(this).projectOnVector(e),this.sub(Lf)}reflect(e){return this.sub(Lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lf=new st,Q_=new Do;class le{constructor(e,i,r,l,c,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],v=r[7],x=r[2],y=r[5],b=r[8],C=l[0],M=l[3],g=l[6],I=l[1],P=l[4],U=l[7],z=l[2],G=l[5],F=l[8];return c[0]=h*C+d*I+m*z,c[3]=h*M+d*P+m*G,c[6]=h*g+d*U+m*F,c[1]=p*C+_*I+v*z,c[4]=p*M+_*P+v*G,c[7]=p*g+_*U+v*F,c[2]=x*C+y*I+b*z,c[5]=x*M+y*P+b*G,c[8]=x*g+y*U+b*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-r*c*_+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=_*h-d*p,x=d*m-_*c,y=p*c-h*m,b=i*v+r*x+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(l*p-_*r)*C,e[2]=(d*r-l*h)*C,e[3]=x*C,e[4]=(_*i-l*m)*C,e[5]=(l*c-d*i)*C,e[6]=y*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Nf.makeScale(e,i)),this}rotate(e){return this.premultiply(Nf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Nf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nf=new le;function Qg(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function _u(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function _x(){const o=_u("canvas");return o.style.display="block",o}const J_={};function Ro(o){o in J_||(J_[o]=!0,console.warn(o))}function gx(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const $_=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tg=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vx(){const o={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ne&&(l.r=Qi(l.r),l.g=Qi(l.g),l.b=Qi(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ne&&(l.r=fs(l.r),l.g=fs(l.g),l.b=fs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Da?pu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ro("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ro("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[ms]:{primaries:e,whitePoint:r,transfer:pu,toXYZ:$_,fromXYZ:tg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:e,whitePoint:r,transfer:Ne,toXYZ:$_,fromXYZ:tg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),o}const Ee=vx();function Qi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let jr;class Sx{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{jr===void 0&&(jr=_u("canvas")),jr.width=e.width,jr.height=e.height;const l=jr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=jr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=_u("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Qi(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Qi(i[r]/255)*255):i[r]=Qi(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xx=0;class id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=wo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Of(l[h].image)):c.push(Of(l[h]))}else c=Of(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Of(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Sx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mx=0;const Pf=new st;class In extends gs{constructor(e=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=lr,l=lr,c=Ti,h=ur,d=pi,m=Ji,p=In.DEFAULT_ANISOTROPY,_=Da){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=wo(),this.name="",this.source=new id(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pf).x}get height(){return this.source.getSize(Pf).y}get depth(){return this.source.getSize(Pf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gh:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gh:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Gg;In.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,i=0,r=0,l=1){Je.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],_=m[4],v=m[8],x=m[1],y=m[5],b=m[9],C=m[2],M=m[6],g=m[10];if(Math.abs(_-x)<.01&&Math.abs(v-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+C)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,U=(y+1)/2,z=(g+1)/2,G=(_+x)/4,F=(v+C)/4,K=(b+M)/4;return P>U&&P>z?P<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(P),l=G/r,c=F/r):U>z?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=G/l,c=K/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=F/c,l=K/c),this.set(r,l,c,i),this}let I=Math.sqrt((M-b)*(M-b)+(v-C)*(v-C)+(x-_)*(x-_));return Math.abs(I)<.001&&(I=1),this.x=(M-b)/I,this.y=(v-C)/I,this.z=(x-_)/I,this.w=Math.acos((p+y+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this.w=ve(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this.w=ve(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yx extends gs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Je(0,0,e,i),this.scissorTest=!1,this.viewport=new Je(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new In(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new id(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hr extends yx{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Jg extends In{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=mi,this.minFilter=mi,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ex extends In{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=mi,this.minFilter=mi,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uo{constructor(e=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,ci):ci.fromBufferAttribute(c,h),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Vl.copy(r.boundingBox)),Vl.applyMatrix4(e.matrixWorld),this.union(Vl)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),kl.subVectors(this.max,go),Qr.subVectors(e.a,go),Jr.subVectors(e.b,go),$r.subVectors(e.c,go),Ta.subVectors(Jr,Qr),Aa.subVectors($r,Jr),Ja.subVectors(Qr,$r);let i=[0,-Ta.z,Ta.y,0,-Aa.z,Aa.y,0,-Ja.z,Ja.y,Ta.z,0,-Ta.x,Aa.z,0,-Aa.x,Ja.z,0,-Ja.x,-Ta.y,Ta.x,0,-Aa.y,Aa.x,0,-Ja.y,Ja.x,0];return!Bf(i,Qr,Jr,$r,kl)||(i=[1,0,0,0,1,0,0,0,1],!Bf(i,Qr,Jr,$r,kl))?!1:(Xl.crossVectors(Ta,Aa),i=[Xl.x,Xl.y,Xl.z],Bf(i,Qr,Jr,$r,kl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ki=[new st,new st,new st,new st,new st,new st,new st,new st],ci=new st,Vl=new Uo,Qr=new st,Jr=new st,$r=new st,Ta=new st,Aa=new st,Ja=new st,go=new st,kl=new st,Xl=new st,$a=new st;function Bf(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){$a.fromArray(o,c);const d=l.x*Math.abs($a.x)+l.y*Math.abs($a.y)+l.z*Math.abs($a.z),m=e.dot($a),p=i.dot($a),_=r.dot($a);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Tx=new Uo,vo=new st,zf=new st;class ad{constructor(e=new st,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Tx.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);const i=vo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(vo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(zf)),this.expandByPoint(vo.copy(e.center).sub(zf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xi=new st,If=new st,Wl=new st,ba=new st,Ff=new st,ql=new st,Hf=new st;class Ax{constructor(e=new st,i=new st(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Xi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,i),Xi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){If.copy(e).add(i).multiplyScalar(.5),Wl.copy(i).sub(e).normalize(),ba.copy(this.origin).sub(If);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Wl),d=ba.dot(this.direction),m=-ba.dot(Wl),p=ba.lengthSq(),_=Math.abs(1-h*h);let v,x,y,b;if(_>0)if(v=h*m-d,x=h*d-m,b=c*_,v>=0)if(x>=-b)if(x<=b){const C=1/_;v*=C,x*=C,y=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x<=-b?(v=Math.max(0,-(-h*c+d)),x=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p):x<=b?(v=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(v=Math.max(0,-(h*c+d)),x=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p);else x=h>0?-c:c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(If).addScaledVector(Wl,x),y}intersectSphere(e,i){Xi.subVectors(e.center,this.origin);const r=Xi.dot(this.direction),l=Xi.dot(Xi)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),_>=0?(c=(e.min.y-x.y)*_,h=(e.max.y-x.y)*_):(c=(e.max.y-x.y)*_,h=(e.min.y-x.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,i,r,l,c){Ff.subVectors(i,e),ql.subVectors(r,e),Hf.crossVectors(Ff,ql);let h=this.direction.dot(Hf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ba.subVectors(this.origin,e);const m=d*this.direction.dot(ql.crossVectors(ba,ql));if(m<0)return null;const p=d*this.direction.dot(Ff.cross(ba));if(p<0||m+p>h)return null;const _=-d*ba.dot(Hf);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(e,i,r,l,c,h,d,m,p,_,v,x,y,b,C,M){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,_,v,x,y,b,C,M)}set(e,i,r,l,c,h,d,m,p,_,v,x,y,b,C,M){const g=this.elements;return g[0]=e,g[4]=i,g[8]=r,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=_,g[10]=v,g[14]=x,g[3]=y,g[7]=b,g[11]=C,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ts.setFromMatrixColumn(e,0).length(),c=1/ts.setFromMatrixColumn(e,1).length(),h=1/ts.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=h*_,y=h*v,b=d*_,C=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=y+b*p,i[5]=x-C*p,i[9]=-d*m,i[2]=C-x*p,i[6]=b+y*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*_,y=m*v,b=p*_,C=p*v;i[0]=x+C*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=y*d-b,i[6]=C+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*_,y=m*v,b=p*_,C=p*v;i[0]=x-C*d,i[4]=-h*v,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*_,i[9]=C-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*_,y=h*v,b=d*_,C=d*v;i[0]=m*_,i[4]=b*p-y,i[8]=x*p+C,i[1]=m*v,i[5]=C*p+x,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*_,i[4]=C-x*v,i[8]=b*v+y,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*v+b,i[10]=x-C*v}else if(e.order==="XZY"){const x=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=x*v+C,i[5]=h*_,i[9]=y*v-b,i[2]=b*v-y,i[6]=d*_,i[10]=C*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bx,e,Rx)}lookAt(e,i,r){const l=this.elements;return qn.subVectors(e,i),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Ra.crossVectors(r,qn),Ra.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Ra.crossVectors(r,qn)),Ra.normalize(),Yl.crossVectors(qn,Ra),l[0]=Ra.x,l[4]=Yl.x,l[8]=qn.x,l[1]=Ra.y,l[5]=Yl.y,l[9]=qn.y,l[2]=Ra.z,l[6]=Yl.z,l[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],v=r[5],x=r[9],y=r[13],b=r[2],C=r[6],M=r[10],g=r[14],I=r[3],P=r[7],U=r[11],z=r[15],G=l[0],F=l[4],K=l[8],w=l[12],R=l[1],V=l[5],nt=l[9],ut=l[13],gt=l[2],lt=l[6],O=l[10],Z=l[14],q=l[3],St=l[7],D=l[11],J=l[15];return c[0]=h*G+d*R+m*gt+p*q,c[4]=h*F+d*V+m*lt+p*St,c[8]=h*K+d*nt+m*O+p*D,c[12]=h*w+d*ut+m*Z+p*J,c[1]=_*G+v*R+x*gt+y*q,c[5]=_*F+v*V+x*lt+y*St,c[9]=_*K+v*nt+x*O+y*D,c[13]=_*w+v*ut+x*Z+y*J,c[2]=b*G+C*R+M*gt+g*q,c[6]=b*F+C*V+M*lt+g*St,c[10]=b*K+C*nt+M*O+g*D,c[14]=b*w+C*ut+M*Z+g*J,c[3]=I*G+P*R+U*gt+z*q,c[7]=I*F+P*V+U*lt+z*St,c[11]=I*K+P*nt+U*O+z*D,c[15]=I*w+P*ut+U*Z+z*J,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],v=e[6],x=e[10],y=e[14],b=e[3],C=e[7],M=e[11],g=e[15];return b*(+c*m*v-l*p*v-c*d*x+r*p*x+l*d*y-r*m*y)+C*(+i*m*y-i*p*x+c*h*x-l*h*y+l*p*_-c*m*_)+M*(+i*p*v-i*d*y-c*h*v+r*h*y+c*d*_-r*p*_)+g*(-l*d*_-i*m*v+i*d*x+l*h*v-r*h*x+r*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=e[9],x=e[10],y=e[11],b=e[12],C=e[13],M=e[14],g=e[15],I=v*M*p-C*x*p+C*m*y-d*M*y-v*m*g+d*x*g,P=b*x*p-_*M*p-b*m*y+h*M*y+_*m*g-h*x*g,U=_*C*p-b*v*p+b*d*y-h*C*y-_*d*g+h*v*g,z=b*v*m-_*C*m-b*d*x+h*C*x+_*d*M-h*v*M,G=i*I+r*P+l*U+c*z;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/G;return e[0]=I*F,e[1]=(C*x*c-v*M*c-C*l*y+r*M*y+v*l*g-r*x*g)*F,e[2]=(d*M*c-C*m*c+C*l*p-r*M*p-d*l*g+r*m*g)*F,e[3]=(v*m*c-d*x*c-v*l*p+r*x*p+d*l*y-r*m*y)*F,e[4]=P*F,e[5]=(_*M*c-b*x*c+b*l*y-i*M*y-_*l*g+i*x*g)*F,e[6]=(b*m*c-h*M*c-b*l*p+i*M*p+h*l*g-i*m*g)*F,e[7]=(h*x*c-_*m*c+_*l*p-i*x*p-h*l*y+i*m*y)*F,e[8]=U*F,e[9]=(b*v*c-_*C*c-b*r*y+i*C*y+_*r*g-i*v*g)*F,e[10]=(h*C*c-b*d*c+b*r*p-i*C*p-h*r*g+i*d*g)*F,e[11]=(_*d*c-h*v*c-_*r*p+i*v*p+h*r*y-i*d*y)*F,e[12]=z*F,e[13]=(_*C*l-b*v*l+b*r*x-i*C*x-_*r*M+i*v*M)*F,e[14]=(b*d*l-h*C*l-b*r*m+i*C*m+h*r*M-i*d*M)*F,e[15]=(h*v*l-_*d*l+_*r*m-i*v*m-h*r*x+i*d*x)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,_=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,v=d+d,x=c*p,y=c*_,b=c*v,C=h*_,M=h*v,g=d*v,I=m*p,P=m*_,U=m*v,z=r.x,G=r.y,F=r.z;return l[0]=(1-(C+g))*z,l[1]=(y+U)*z,l[2]=(b-P)*z,l[3]=0,l[4]=(y-U)*G,l[5]=(1-(x+g))*G,l[6]=(M+I)*G,l[7]=0,l[8]=(b+P)*F,l[9]=(M-I)*F,l[10]=(1-(x+C))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=ts.set(l[0],l[1],l[2]).length();const h=ts.set(l[4],l[5],l[6]).length(),d=ts.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],fi.copy(this);const p=1/c,_=1/h,v=1/d;return fi.elements[0]*=p,fi.elements[1]*=p,fi.elements[2]*=p,fi.elements[4]*=_,fi.elements[5]*=_,fi.elements[6]*=_,fi.elements[8]*=v,fi.elements[9]*=v,fi.elements[10]*=v,i.setFromRotationMatrix(fi),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Ai,m=!1){const p=this.elements,_=2*c/(i-e),v=2*c/(r-l),x=(i+e)/(i-e),y=(r+l)/(r-l);let b,C;if(m)b=c/(h-c),C=h*c/(h-c);else if(d===Ai)b=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===mu)b=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Ai,m=!1){const p=this.elements,_=2/(i-e),v=2/(r-l),x=-(i+e)/(i-e),y=-(r+l)/(r-l);let b,C;if(m)b=1/(h-c),C=h/(h-c);else if(d===Ai)b=-2/(h-c),C=-(h+c)/(h-c);else if(d===mu)b=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ts=new st,fi=new un,bx=new st(0,0,0),Rx=new st(1,1,1),Ra=new st,Yl=new st,qn=new st,eg=new un,ng=new Do;class $i{constructor(e=0,i=0,r=0,l=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return eg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return ng.setFromEuler(this),this.setFromQuaternion(ng,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class $g{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cx=0;const ig=new st,es=new Do,Wi=new un,Zl=new st,So=new st,wx=new st,Dx=new Do,ag=new st(1,0,0),rg=new st(0,1,0),sg=new st(0,0,1),og={type:"added"},Ux={type:"removed"},ns={type:"childadded",child:null},Gf={type:"childremoved",child:null};class Zn extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const e=new st,i=new $i,r=new Do,l=new st(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new le}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $g,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return es.setFromAxisAngle(e,i),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,i){return es.setFromAxisAngle(e,i),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(ag,e)}rotateY(e){return this.rotateOnAxis(rg,e)}rotateZ(e){return this.rotateOnAxis(sg,e)}translateOnAxis(e,i){return ig.copy(e).applyQuaternion(this.quaternion),this.position.add(ig.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(ag,e)}translateY(e){return this.translateOnAxis(rg,e)}translateZ(e){return this.translateOnAxis(sg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Zl.copy(e):Zl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(So,Zl,this.up):Wi.lookAt(Zl,So,this.up),this.quaternion.setFromRotationMatrix(Wi),l&&(Wi.extractRotation(l.matrixWorld),es.setFromRotationMatrix(Wi),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(og),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Ux),Gf.child=e,this.dispatchEvent(Gf),Gf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(og),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,wx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,Dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),v=h(e.shapes),x=h(e.skeletons),y=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Zn.DEFAULT_UP=new st(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new st,qi=new st,Vf=new st,Yi=new st,is=new st,as=new st,lg=new st,kf=new st,Xf=new st,Wf=new st,qf=new Je,Yf=new Je,Zf=new Je;class di{constructor(e=new st,i=new st,r=new st){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),hi.subVectors(e,i),l.cross(hi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){hi.subVectors(l,i),qi.subVectors(r,i),Vf.subVectors(e,i);const h=hi.dot(hi),d=hi.dot(qi),m=hi.dot(Vf),p=qi.dot(qi),_=qi.dot(Vf),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const x=1/v,y=(p*m-d*_)*x,b=(h*_-d*m)*x;return c.set(1-y-b,b,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,Yi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Yi.x),m.addScaledVector(h,Yi.y),m.addScaledVector(d,Yi.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return qf.setScalar(0),Yf.setScalar(0),Zf.setScalar(0),qf.fromBufferAttribute(e,i),Yf.fromBufferAttribute(e,r),Zf.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(qf,c.x),h.addScaledVector(Yf,c.y),h.addScaledVector(Zf,c.z),h}static isFrontFacing(e,i,r,l){return hi.subVectors(r,i),qi.subVectors(e,i),hi.cross(qi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),hi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return di.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;is.subVectors(l,r),as.subVectors(c,r),kf.subVectors(e,r);const m=is.dot(kf),p=as.dot(kf);if(m<=0&&p<=0)return i.copy(r);Xf.subVectors(e,l);const _=is.dot(Xf),v=as.dot(Xf);if(_>=0&&v<=_)return i.copy(l);const x=m*v-_*p;if(x<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(is,h);Wf.subVectors(e,c);const y=is.dot(Wf),b=as.dot(Wf);if(b>=0&&y<=b)return i.copy(c);const C=y*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(as,d);const M=_*b-y*v;if(M<=0&&v-_>=0&&y-b>=0)return lg.subVectors(c,l),d=(v-_)/(v-_+(y-b)),i.copy(l).addScaledVector(lg,d);const g=1/(M+C+x);return h=C*g,d=x*g,i.copy(r).addScaledVector(is,h).addScaledVector(as,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ca={h:0,s:0,l:0},Kl={h:0,s:0,l:0};function Kf(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Oe{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ee.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ee.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ee.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ee.workingColorSpace){if(e=mx(e,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Kf(h,c,e+1/3),this.g=Kf(h,c,e),this.b=Kf(h,c,e-1/3)}return Ee.colorSpaceToWorking(this,l),this}setStyle(e,i=ii){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ii){const r=tv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Ee.workingToColorSpace(bn.copy(this),e),Math.round(ve(bn.r*255,0,255))*65536+Math.round(ve(bn.g*255,0,255))*256+Math.round(ve(bn.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ee.workingColorSpace){Ee.workingToColorSpace(bn.copy(this),i);const r=bn.r,l=bn.g,c=bn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=_<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Ee.workingColorSpace){return Ee.workingToColorSpace(bn.copy(this),i),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=ii){Ee.workingToColorSpace(bn.copy(this),e);const i=bn.r,r=bn.g,l=bn.b;return e!==ii?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ca),this.setHSL(Ca.h+e,Ca.s+i,Ca.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ca),e.getHSL(Kl);const r=Uf(Ca.h,Kl.h,i),l=Uf(Ca.s,Kl.s,i),c=Uf(Ca.l,Kl.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Oe;Oe.NAMES=tv;let Lx=0;class vu extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=cs,this.side=Na,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=oh,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(r.blending=this.blending),this.side!==Na&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sh&&(r.blendSrc=this.blendSrc),this.blendDst!==oh&&(r.blendDst=this.blendDst),this.blendEquation!==sr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Z_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rd extends vu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=Hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new st,jl=new Pe;let Nx=0;class Ri{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nx++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=K_,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)jl.fromBufferAttribute(this,i),jl.applyMatrix3(e),this.setXY(i,jl.x,jl.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(e),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(e),this.setXYZ(i,an.x,an.y,an.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=_o(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=_o(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=_o(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=_o(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=_o(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),c=Bn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==K_&&(e.usage=this.usage),e}}class ev extends Ri{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class nv extends Ri{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class cr extends Ri{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Ox=0;const ni=new un,jf=new Zn,rs=new st,Yn=new Uo,xo=new Uo,_n=new st;class dr extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qg(e)?nv:ev)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new le().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,i,r){return ni.makeTranslation(e,i,r),this.applyMatrix4(ni),this}scale(e,i,r){return ni.makeScale(e,i,r),this.applyMatrix4(ni),this}lookAt(e){return jf.lookAt(e),jf.updateMatrix(),this.applyMatrix4(jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new cr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Uo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Yn.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ad);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(e){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];xo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Yn.min,xo.min),Yn.expandByPoint(_n),_n.addVectors(Yn.max,xo.max),Yn.expandByPoint(_n)):(Yn.expandByPoint(xo.min),Yn.expandByPoint(xo.max))}Yn.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)_n.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)_n.fromBufferAttribute(d,p),m&&(rs.fromBufferAttribute(e,p),_n.add(rs)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<r.count;K++)d[K]=new st,m[K]=new st;const p=new st,_=new st,v=new st,x=new Pe,y=new Pe,b=new Pe,C=new st,M=new st;function g(K,w,R){p.fromBufferAttribute(r,K),_.fromBufferAttribute(r,w),v.fromBufferAttribute(r,R),x.fromBufferAttribute(c,K),y.fromBufferAttribute(c,w),b.fromBufferAttribute(c,R),_.sub(p),v.sub(p),y.sub(x),b.sub(x);const V=1/(y.x*b.y-b.x*y.y);isFinite(V)&&(C.copy(_).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(V),M.copy(v).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(V),d[K].add(C),d[w].add(C),d[R].add(C),m[K].add(M),m[w].add(M),m[R].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let K=0,w=I.length;K<w;++K){const R=I[K],V=R.start,nt=R.count;for(let ut=V,gt=V+nt;ut<gt;ut+=3)g(e.getX(ut+0),e.getX(ut+1),e.getX(ut+2))}const P=new st,U=new st,z=new st,G=new st;function F(K){z.fromBufferAttribute(l,K),G.copy(z);const w=d[K];P.copy(w),P.sub(z.multiplyScalar(z.dot(w))).normalize(),U.crossVectors(G,w);const V=U.dot(m[K])<0?-1:1;h.setXYZW(K,P.x,P.y,P.z,V)}for(let K=0,w=I.length;K<w;++K){const R=I[K],V=R.start,nt=R.count;for(let ut=V,gt=V+nt;ut<gt;ut+=3)F(e.getX(ut+0)),F(e.getX(ut+1)),F(e.getX(ut+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new st,c=new st,h=new st,d=new st,m=new st,p=new st,_=new st,v=new st;if(e)for(let x=0,y=e.count;x<y;x+=3){const b=e.getX(x+0),C=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),d.add(_),m.add(_),p.add(_),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,v=d.normalized,x=new p.constructor(m.length*_);let y=0,b=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*_;for(let g=0;g<_;g++)x[b++]=p[y++]}return new Ri(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new dr,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const x=p[_],y=e(x,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,x=p.length;v<x;v++){const y=p[v];_.push(y.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let x=0,y=v.length;x<y;x++)_.push(v[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ug=new un,tr=new Ax,Ql=new ad,cg=new st,Jl=new st,$l=new st,tu=new st,Qf=new st,eu=new st,fg=new st,nu=new st;class bi extends Zn{constructor(e=new dr,i=new rd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){eu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],v=c[m];_!==0&&(Qf.fromBufferAttribute(v,e),h?eu.addScaledVector(Qf,_):eu.addScaledVector(Qf.sub(i),_))}i.add(eu)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ql.copy(r.boundingSphere),Ql.applyMatrix4(c),tr.copy(e.ray).recast(e.near),!(Ql.containsPoint(tr.origin)===!1&&(tr.intersectSphere(Ql,cg)===null||tr.origin.distanceToSquared(cg)>(e.far-e.near)**2))&&(ug.copy(c).invert(),tr.copy(e.ray).applyMatrix4(ug),!(r.boundingBox!==null&&tr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,tr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=x.length;b<C;b++){const M=x[b],g=h[M.materialIndex],I=Math.max(M.start,y.start),P=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=I,z=P;U<z;U+=3){const G=d.getX(U),F=d.getX(U+1),K=d.getX(U+2);l=iu(this,g,e,r,p,_,v,G,F,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=b,g=C;M<g;M+=3){const I=d.getX(M),P=d.getX(M+1),U=d.getX(M+2);l=iu(this,h,e,r,p,_,v,I,P,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=x.length;b<C;b++){const M=x[b],g=h[M.materialIndex],I=Math.max(M.start,y.start),P=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=I,z=P;U<z;U+=3){const G=U,F=U+1,K=U+2;l=iu(this,g,e,r,p,_,v,G,F,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=b,g=C;M<g;M+=3){const I=M,P=M+1,U=M+2;l=iu(this,h,e,r,p,_,v,I,P,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Px(o,e,i,r,l,c,h,d){let m;if(e.side===zn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===Na,d),m===null)return null;nu.copy(d),nu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(nu);return p<i.near||p>i.far?null:{distance:p,point:nu.clone(),object:o}}function iu(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,Jl),o.getVertexPosition(m,$l),o.getVertexPosition(p,tu);const _=Px(o,e,i,r,Jl,$l,tu,fg);if(_){const v=new st;di.getBarycoord(fg,Jl,$l,tu,v),l&&(_.uv=di.getInterpolatedAttribute(l,d,m,p,v,new Pe)),c&&(_.uv1=di.getInterpolatedAttribute(c,d,m,p,v,new Pe)),h&&(_.normal=di.getInterpolatedAttribute(h,d,m,p,v,new st),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new st,materialIndex:0};di.getNormal(Jl,$l,tu,x.normal),_.face=x,_.barycoord=v}return _}class vs extends dr{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],v=[];let x=0,y=0;b("z","y","x",-1,-1,r,i,e,h,c,0),b("z","y","x",1,-1,r,i,-e,h,c,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new cr(p,3)),this.setAttribute("normal",new cr(_,3)),this.setAttribute("uv",new cr(v,2));function b(C,M,g,I,P,U,z,G,F,K,w){const R=U/F,V=z/K,nt=U/2,ut=z/2,gt=G/2,lt=F+1,O=K+1;let Z=0,q=0;const St=new st;for(let D=0;D<O;D++){const J=D*V-ut;for(let vt=0;vt<lt;vt++){const xt=vt*R-nt;St[C]=xt*I,St[M]=J*P,St[g]=gt,p.push(St.x,St.y,St.z),St[C]=0,St[M]=0,St[g]=G>0?1:-1,_.push(St.x,St.y,St.z),v.push(vt/F),v.push(1-D/K),Z+=1}}for(let D=0;D<K;D++)for(let J=0;J<F;J++){const vt=x+J+lt*D,xt=x+J+lt*(D+1),Dt=x+(J+1)+lt*(D+1),Ft=x+(J+1)+lt*D;m.push(vt,xt,Ft),m.push(xt,Dt,Ft),q+=6}d.addGroup(y,q,w),y+=q,x+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Dn(o){const e={};for(let i=0;i<o.length;i++){const r=_s(o[i]);for(const l in r)e[l]=r[l]}return e}function Bx(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function iv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ee.workingColorSpace}const zx={clone:_s,merge:Dn};var Ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oa extends vu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ix,this.fragmentShader=Fx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=Bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class av extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wa=new st,hg=new Pe,dg=new Pe;class ai extends av{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Yh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Df*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yh*2*Math.atan(Math.tan(Df*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wa.x,wa.y).multiplyScalar(-e/wa.z),wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(wa.x,wa.y).multiplyScalar(-e/wa.z)}getViewSize(e,i){return this.getViewBounds(e,hg,dg),i.subVectors(dg,hg)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Df*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ss=-90,os=1;class Hx extends Zn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ai(ss,os,e,i);l.layers=this.layers,this.add(l);const c=new ai(ss,os,e,i);c.layers=this.layers,this.add(c);const h=new ai(ss,os,e,i);h.layers=this.layers,this.add(h);const d=new ai(ss,os,e,i);d.layers=this.layers,this.add(d);const m=new ai(ss,os,e,i);m.layers=this.layers,this.add(m);const p=new ai(ss,os,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ai)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===mu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(v,x,y),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class rv extends In{constructor(e=[],i=ds,r,l,c,h,d,m,p,_){super(e,i,r,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gx extends hr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new rv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new vs(5,5,5),c=new Oa({name:"CubemapFromEquirect",uniforms:_s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:Ua});c.uniforms.tEquirect.value=i;const h=new bi(l,c),d=i.minFilter;return i.minFilter===ur&&(i.minFilter=Ti),new Hx(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class au extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vx={type:"move"};class Jf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new au,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new au,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new au,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),g=this._getHandJoint(p,C);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=_.position.distanceTo(v.position),y=.02,b=.005;p.inputState.pinching&&x>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Vx)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new au;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class kx extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const $f=new st,Xx=new st,Wx=new le;class ar{constructor(e=new st(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=$f.subVectors(r,i).cross(Xx.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta($f),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Wx.getNormalMatrix(e),l=this.coplanarPoint($f).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new ad,qx=new Pe(.5,.5),ru=new st;class sv{constructor(e=new ar,i=new ar,r=new ar,l=new ar,c=new ar,h=new ar){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ai,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],v=c[5],x=c[6],y=c[7],b=c[8],C=c[9],M=c[10],g=c[11],I=c[12],P=c[13],U=c[14],z=c[15];if(l[0].setComponents(p-h,y-_,g-b,z-I).normalize(),l[1].setComponents(p+h,y+_,g+b,z+I).normalize(),l[2].setComponents(p+d,y+v,g+C,z+P).normalize(),l[3].setComponents(p-d,y-v,g-C,z-P).normalize(),r)l[4].setComponents(m,x,M,U).normalize(),l[5].setComponents(p-m,y-x,g-M,z-U).normalize();else if(l[4].setComponents(p-m,y-x,g-M,z-U).normalize(),i===Ai)l[5].setComponents(p+m,y+x,g+M,z+U).normalize();else if(i===mu)l[5].setComponents(m,x,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),er.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){er.center.set(0,0,0);const i=qx.distanceTo(e.center);return er.radius=.7071067811865476+i,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(ru.x=l.normal.x>0?e.max.x:e.min.x,ru.y=l.normal.y>0?e.max.y:e.min.y,ru.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(ru)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ov extends In{constructor(e,i,r=fr,l,c,h,d=mi,m=mi,p,_=Ao,v=1){if(_!==Ao&&_!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,c,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new id(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class lv extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Su extends dr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,v=e/d,x=i/m,y=[],b=[],C=[],M=[];for(let g=0;g<_;g++){const I=g*x-h;for(let P=0;P<p;P++){const U=P*v-c;b.push(U,-I,0),C.push(0,0,1),M.push(P/d),M.push(1-g/m)}}for(let g=0;g<m;g++)for(let I=0;I<d;I++){const P=I+p*g,U=I+p*(g+1),z=I+1+p*(g+1),G=I+1+p*g;y.push(P,U,G),y.push(U,z,G)}this.setIndex(y),this.setAttribute("position",new cr(b,3)),this.setAttribute("normal",new cr(C,3)),this.setAttribute("uv",new cr(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Su(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yx extends vu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ax,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zx extends vu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kx extends av{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class jx extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function pg(o,e,i,r){const l=Qx(r);switch(i){case qg:return o*e;case Zg:return o*e/l.components*l.byteLength;case td:return o*e/l.components*l.byteLength;case Kg:return o*e*2/l.components*l.byteLength;case ed:return o*e*2/l.components*l.byteLength;case Yg:return o*e*3/l.components*l.byteLength;case pi:return o*e*4/l.components*l.byteLength;case nd:return o*e*4/l.components*l.byteLength;case uu:case cu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case fu:case hu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xh:case yh:return Math.max(o,16)*Math.max(e,8)/4;case Sh:case Mh:return Math.max(o,8)*Math.max(e,8)/2;case Eh:case Th:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ah:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case wh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case zh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Hh:case Gh:case Vh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case kh:case Xh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Wh:case qh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Qx(o){switch(o){case Ji:case Vg:return{byteLength:1,components:1};case Eo:case kg:case Co:return{byteLength:2,components:1};case Jh:case $h:return{byteLength:2,components:4};case fr:case Qh:case ji:return{byteLength:4,components:1};case Xg:case Wg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Jx(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const _=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,_);else{v.sort((y,b)=>y.start-b.start);let x=0;for(let y=1;y<v.length;y++){const b=v[x],C=v[y];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++x,v[x]=C)}v.length=x+1;for(let y=0,b=v.length;y<b;y++){const C=v[y];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var $x=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tM=`#ifdef USE_ALPHAHASH
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
#endif`,eM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rM=`#ifdef USE_AOMAP
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
#endif`,sM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oM=`#ifdef USE_BATCHING
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
#endif`,lM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hM=`#ifdef USE_IRIDESCENCE
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
#endif`,dM=`#ifdef USE_BUMPMAP
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
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yM=`#define PI 3.141592653589793
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
} // validated`,EM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TM=`vec3 transformedNormal = objectNormal;
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
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wM="gl_FragColor = linearToOutputTexel( gl_FragColor );",DM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UM=`#ifdef USE_ENVMAP
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
#endif`,LM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NM=`#ifdef USE_ENVMAP
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
#endif`,OM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HM=`#ifdef USE_GRADIENTMAP
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
}`,GM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XM=`uniform bool receiveShadow;
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
#endif`,WM=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,qM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jM=`PhysicalMaterial material;
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
#endif`,QM=`struct PhysicalMaterial {
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
}`,JM=`
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
#endif`,$M=`#if defined( RE_IndirectDiffuse )
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
#endif`,ty=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ey=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ay=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ly=`#if defined( USE_POINTS_UV )
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
#endif`,uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
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
#endif`,my=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_y=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,My=`#ifdef USE_NORMALMAP
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
#endif`,yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ey=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,by=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ry=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,By=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zy=`float getShadowMask() {
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
}`,Iy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fy=`#ifdef USE_SKINNING
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
#endif`,Hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gy=`#ifdef USE_SKINNING
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
#endif`,Vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#ifdef USE_TRANSMISSION
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$y=`uniform sampler2D t2D;
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
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aE=`#include <common>
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
}`,rE=`#if DEPTH_PACKING == 3200
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
}`,sE=`#define DISTANCE
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
}`,oE=`#define DISTANCE
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
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`uniform float scale;
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
}`,fE=`uniform vec3 diffuse;
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
}`,hE=`#include <common>
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
}`,dE=`uniform vec3 diffuse;
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
}`,pE=`#define LAMBERT
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
}`,mE=`#define LAMBERT
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
}`,_E=`#define MATCAP
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
}`,gE=`#define MATCAP
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
}`,vE=`#define NORMAL
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
}`,SE=`#define NORMAL
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
}`,xE=`#define PHONG
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
}`,ME=`#define PHONG
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
}`,yE=`#define STANDARD
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
}`,EE=`#define STANDARD
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
}`,TE=`#define TOON
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
}`,AE=`#define TOON
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
}`,bE=`uniform float size;
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
}`,RE=`uniform vec3 diffuse;
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
}`,CE=`#include <common>
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
}`,wE=`uniform vec3 color;
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
}`,DE=`uniform float rotation;
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
}`,UE=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:$x,alphahash_pars_fragment:tM,alphamap_fragment:eM,alphamap_pars_fragment:nM,alphatest_fragment:iM,alphatest_pars_fragment:aM,aomap_fragment:rM,aomap_pars_fragment:sM,batching_pars_vertex:oM,batching_vertex:lM,begin_vertex:uM,beginnormal_vertex:cM,bsdfs:fM,iridescence_fragment:hM,bumpmap_pars_fragment:dM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:_M,clipping_planes_vertex:gM,color_fragment:vM,color_pars_fragment:SM,color_pars_vertex:xM,color_vertex:MM,common:yM,cube_uv_reflection_fragment:EM,defaultnormal_vertex:TM,displacementmap_pars_vertex:AM,displacementmap_vertex:bM,emissivemap_fragment:RM,emissivemap_pars_fragment:CM,colorspace_fragment:wM,colorspace_pars_fragment:DM,envmap_fragment:UM,envmap_common_pars_fragment:LM,envmap_pars_fragment:NM,envmap_pars_vertex:OM,envmap_physical_pars_fragment:WM,envmap_vertex:PM,fog_vertex:BM,fog_pars_vertex:zM,fog_fragment:IM,fog_pars_fragment:FM,gradientmap_pars_fragment:HM,lightmap_pars_fragment:GM,lights_lambert_fragment:VM,lights_lambert_pars_fragment:kM,lights_pars_begin:XM,lights_toon_fragment:qM,lights_toon_pars_fragment:YM,lights_phong_fragment:ZM,lights_phong_pars_fragment:KM,lights_physical_fragment:jM,lights_physical_pars_fragment:QM,lights_fragment_begin:JM,lights_fragment_maps:$M,lights_fragment_end:ty,logdepthbuf_fragment:ey,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:ay,map_fragment:ry,map_pars_fragment:sy,map_particle_fragment:oy,map_particle_pars_fragment:ly,metalnessmap_fragment:uy,metalnessmap_pars_fragment:cy,morphinstance_vertex:fy,morphcolor_vertex:hy,morphnormal_vertex:dy,morphtarget_pars_vertex:py,morphtarget_vertex:my,normal_fragment_begin:_y,normal_fragment_maps:gy,normal_pars_fragment:vy,normal_pars_vertex:Sy,normal_vertex:xy,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:yy,clearcoat_normal_fragment_maps:Ey,clearcoat_pars_fragment:Ty,iridescence_pars_fragment:Ay,opaque_fragment:by,packing:Ry,premultiplied_alpha_fragment:Cy,project_vertex:wy,dithering_fragment:Dy,dithering_pars_fragment:Uy,roughnessmap_fragment:Ly,roughnessmap_pars_fragment:Ny,shadowmap_pars_fragment:Oy,shadowmap_pars_vertex:Py,shadowmap_vertex:By,shadowmask_pars_fragment:zy,skinbase_vertex:Iy,skinning_pars_vertex:Fy,skinning_vertex:Hy,skinnormal_vertex:Gy,specularmap_fragment:Vy,specularmap_pars_fragment:ky,tonemapping_fragment:Xy,tonemapping_pars_fragment:Wy,transmission_fragment:qy,transmission_pars_fragment:Yy,uv_pars_fragment:Zy,uv_pars_vertex:Ky,uv_vertex:jy,worldpos_vertex:Qy,background_vert:Jy,background_frag:$y,backgroundCube_vert:tE,backgroundCube_frag:eE,cube_vert:nE,cube_frag:iE,depth_vert:aE,depth_frag:rE,distanceRGBA_vert:sE,distanceRGBA_frag:oE,equirect_vert:lE,equirect_frag:uE,linedashed_vert:cE,linedashed_frag:fE,meshbasic_vert:hE,meshbasic_frag:dE,meshlambert_vert:pE,meshlambert_frag:mE,meshmatcap_vert:_E,meshmatcap_frag:gE,meshnormal_vert:vE,meshnormal_frag:SE,meshphong_vert:xE,meshphong_frag:ME,meshphysical_vert:yE,meshphysical_frag:EE,meshtoon_vert:TE,meshtoon_frag:AE,points_vert:bE,points_frag:RE,shadow_vert:CE,shadow_frag:wE,sprite_vert:DE,sprite_frag:UE},Nt={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ei={basic:{uniforms:Dn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Dn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Dn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Dn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Dn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Dn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Dn([Nt.points,Nt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Dn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Dn([Nt.common,Nt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Dn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Dn([Nt.sprite,Nt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Dn([Nt.common,Nt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Dn([Nt.lights,Nt.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ei.physical={uniforms:Dn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const su={r:0,b:0,g:0},nr=new $i,LE=new un;function NE(o,e,i,r,l,c,h){const d=new Oe(0);let m=c===!0?0:1,p,_,v=null,x=0,y=null;function b(P){let U=P.isScene===!0?P.background:null;return U&&U.isTexture&&(U=(P.backgroundBlurriness>0?i:e).get(U)),U}function C(P){let U=!1;const z=b(P);z===null?g(d,m):z&&z.isColor&&(g(z,1),U=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(P,U){const z=b(U);z&&(z.isCubeTexture||z.mapping===gu)?(_===void 0&&(_=new bi(new vs(1,1,1),new Oa({name:"BackgroundCubeMaterial",uniforms:_s(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(G,F,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),nr.copy(U.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),_.material.uniforms.envMap.value=z,_.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(LE.makeRotationFromEuler(nr)),_.material.toneMapped=Ee.getTransfer(z.colorSpace)!==Ne,(v!==z||x!==z.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,v=z,x=z.version,y=o.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new bi(new Su(2,2),new Oa({name:"BackgroundMaterial",uniforms:_s(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Na,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ee.getTransfer(z.colorSpace)!==Ne,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||x!==z.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,v=z,x=z.version,y=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function g(P,U){P.getRGB(su,iv(o)),r.buffers.color.setClear(su.r,su.g,su.b,U,h)}function I(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,U=1){d.set(P),m=U,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,g(d,m)},render:C,addToRenderList:M,dispose:I}}function OE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(R,V,nt,ut,gt){let lt=!1;const O=v(ut,nt,V);c!==O&&(c=O,p(c.object)),lt=y(R,ut,nt,gt),lt&&b(R,ut,nt,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,U(R,V,nt,ut),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function v(R,V,nt){const ut=nt.wireframe===!0;let gt=r[R.id];gt===void 0&&(gt={},r[R.id]=gt);let lt=gt[V.id];lt===void 0&&(lt={},gt[V.id]=lt);let O=lt[ut];return O===void 0&&(O=x(m()),lt[ut]=O),O}function x(R){const V=[],nt=[],ut=[];for(let gt=0;gt<i;gt++)V[gt]=0,nt[gt]=0,ut[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:nt,attributeDivisors:ut,object:R,attributes:{},index:null}}function y(R,V,nt,ut){const gt=c.attributes,lt=V.attributes;let O=0;const Z=nt.getAttributes();for(const q in Z)if(Z[q].location>=0){const D=gt[q];let J=lt[q];if(J===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),D===void 0||D.attribute!==J||J&&D.data!==J.data)return!0;O++}return c.attributesNum!==O||c.index!==ut}function b(R,V,nt,ut){const gt={},lt=V.attributes;let O=0;const Z=nt.getAttributes();for(const q in Z)if(Z[q].location>=0){let D=lt[q];D===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(D=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(D=R.instanceColor));const J={};J.attribute=D,D&&D.data&&(J.data=D.data),gt[q]=J,O++}c.attributes=gt,c.attributesNum=O,c.index=ut}function C(){const R=c.newAttributes;for(let V=0,nt=R.length;V<nt;V++)R[V]=0}function M(R){g(R,0)}function g(R,V){const nt=c.newAttributes,ut=c.enabledAttributes,gt=c.attributeDivisors;nt[R]=1,ut[R]===0&&(o.enableVertexAttribArray(R),ut[R]=1),gt[R]!==V&&(o.vertexAttribDivisor(R,V),gt[R]=V)}function I(){const R=c.newAttributes,V=c.enabledAttributes;for(let nt=0,ut=V.length;nt<ut;nt++)V[nt]!==R[nt]&&(o.disableVertexAttribArray(nt),V[nt]=0)}function P(R,V,nt,ut,gt,lt,O){O===!0?o.vertexAttribIPointer(R,V,nt,gt,lt):o.vertexAttribPointer(R,V,nt,ut,gt,lt)}function U(R,V,nt,ut){C();const gt=ut.attributes,lt=nt.getAttributes(),O=V.defaultAttributeValues;for(const Z in lt){const q=lt[Z];if(q.location>=0){let St=gt[Z];if(St===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(St=R.instanceColor)),St!==void 0){const D=St.normalized,J=St.itemSize,vt=e.get(St);if(vt===void 0)continue;const xt=vt.buffer,Dt=vt.type,Ft=vt.bytesPerElement,tt=Dt===o.INT||Dt===o.UNSIGNED_INT||St.gpuType===Qh;if(St.isInterleavedBufferAttribute){const mt=St.data,At=mt.stride,Kt=St.offset;if(mt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<q.locationSize;Wt++)g(q.location+Wt,mt.meshPerAttribute);R.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Wt=0;Wt<q.locationSize;Wt++)M(q.location+Wt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let Wt=0;Wt<q.locationSize;Wt++)P(q.location+Wt,J/q.locationSize,Dt,D,At*Ft,(Kt+J/q.locationSize*Wt)*Ft,tt)}else{if(St.isInstancedBufferAttribute){for(let mt=0;mt<q.locationSize;mt++)g(q.location+mt,St.meshPerAttribute);R.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let mt=0;mt<q.locationSize;mt++)M(q.location+mt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let mt=0;mt<q.locationSize;mt++)P(q.location+mt,J/q.locationSize,Dt,D,J*Ft,J/q.locationSize*mt*Ft,tt)}}else if(O!==void 0){const D=O[Z];if(D!==void 0)switch(D.length){case 2:o.vertexAttrib2fv(q.location,D);break;case 3:o.vertexAttrib3fv(q.location,D);break;case 4:o.vertexAttrib4fv(q.location,D);break;default:o.vertexAttrib1fv(q.location,D)}}}}I()}function z(){K();for(const R in r){const V=r[R];for(const nt in V){const ut=V[nt];for(const gt in ut)_(ut[gt].object),delete ut[gt];delete V[nt]}delete r[R]}}function G(R){if(r[R.id]===void 0)return;const V=r[R.id];for(const nt in V){const ut=V[nt];for(const gt in ut)_(ut[gt].object),delete ut[gt];delete V[nt]}delete r[R.id]}function F(R){for(const V in r){const nt=r[V];if(nt[R.id]===void 0)continue;const ut=nt[R.id];for(const gt in ut)_(ut[gt].object),delete ut[gt];delete nt[R.id]}}function K(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:w,dispose:z,releaseStatesOfGeometry:G,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:M,disableUnusedAttributes:I}}function PE(o,e,i){let r;function l(p){r=p}function c(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,v){v!==0&&(o.drawArraysInstanced(r,p,_,v),i.update(_,r,v))}function d(p,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,v);let y=0;for(let b=0;b<v;b++)y+=_[b];i.update(y,r,1)}function m(p,_,v,x){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],_[b],x[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,v);let b=0;for(let C=0;C<v;C++)b+=_[C]*x[C];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function BE(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==pi&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const K=F===Co&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ji&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ji&&!K)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=b>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:U,vertexTextures:z,maxSamples:G}}function zE(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new ar,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||l;return l=x,r=v.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=_(v,x,0)},this.setState=function(v,x,y){const b=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,g=o.get(v);if(!l||b===null||b.length===0||c&&!M)c?_(null):p();else{const I=c?0:r,P=I*4;let U=g.clippingState||null;m.value=U,U=_(b,x,P,y);for(let z=0;z!==P;++z)U[z]=i[z];g.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,y,b){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=m.value,b!==!0||M===null){const g=y+C*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(M===null||M.length<g)&&(M=new Float32Array(g));for(let P=0,U=y;P!==C;++P,U+=4)h.copy(v[P]).applyMatrix4(I,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function IE(o){let e=new WeakMap;function i(h,d){return d===mh?h.mapping=ds:d===_h&&(h.mapping=ps),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===mh||d===_h)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Gx(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const us=4,mg=[.125,.215,.35,.446,.526,.582],or=20,th=new Kx,_g=new Oe;let eh=null,nh=0,ih=0,ah=!1;const rr=(1+Math.sqrt(5))/2,ls=1/rr,gg=[new st(-rr,ls,0),new st(rr,ls,0),new st(-ls,0,rr),new st(ls,0,rr),new st(0,rr,-ls),new st(0,rr,ls),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)],FE=new st;class vg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=FE}=c;eh=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(eh,nh,ih),this._renderer.xr.enabled=ah,e.scissorTest=!1,ou(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ds||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eh=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Co,format:pi,colorSpace:ms,depthBuffer:!1},l=Sg(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sg(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HE(c)),this._blurMaterial=GE(c,e,i)}return l}_compileMaterial(e){const i=new bi(this._lodPlanes[0],e);this._renderer.compile(i,th)}_sceneToCubeUV(e,i,r,l,c){const m=new ai(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(_g),v.toneMapping=La,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const C=new rd({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),M=new bi(new vs,C);let g=!1;const I=e.background;I?I.isColor&&(C.color.copy(I),e.background=null,g=!0):(C.color.copy(_g),g=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[P],c.y,c.z)):U===1?(m.up.set(0,0,p[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[P],c.z)):(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[P]));const z=this._cubeSize;ou(l,U*z,P>2?z:0,z,z),v.setRenderTarget(l),g&&v.render(M,m),v.render(e,m)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=y,v.autoClear=x,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ds||e.mapping===ps;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xg());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new bi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;ou(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,th)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=gg[(l-c-1)%gg.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new bi(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*or-1),C=c/b,M=isFinite(c)?1+Math.floor(_*C):or;M>or&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${or}`);const g=[];let I=0;for(let F=0;F<or;++F){const K=F/C,w=Math.exp(-K*K/2);g.push(w),F===0?I+=w:F<M&&(I+=2*w)}for(let F=0;F<g.length;F++)g[F]=g[F]/I;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:P}=this;x.dTheta.value=b,x.mipInt.value=P-r;const U=this._sizeLods[l],z=3*U*(l>P-us?l-P+us:0),G=4*(this._cubeSize-U);ou(i,z,G,3*U,2*U),m.setRenderTarget(i),m.render(v,th)}}function HE(o){const e=[],i=[],r=[];let l=o;const c=o-us+1+mg.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-us?m=mg[h-o+us-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,v=1+p,x=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,b=6,C=3,M=2,g=1,I=new Float32Array(C*b*y),P=new Float32Array(M*b*y),U=new Float32Array(g*b*y);for(let G=0;G<y;G++){const F=G%3*2/3-1,K=G>2?0:-1,w=[F,K,0,F+2/3,K,0,F+2/3,K+1,0,F,K,0,F+2/3,K+1,0,F,K+1,0];I.set(w,C*b*G),P.set(x,M*b*G);const R=[G,G,G,G,G,G];U.set(R,g*b*G)}const z=new dr;z.setAttribute("position",new Ri(I,C)),z.setAttribute("uv",new Ri(P,M)),z.setAttribute("faceIndex",new Ri(U,g)),e.push(z),l>us&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function Sg(o,e,i){const r=new hr(o,e,i);return r.texture.mapping=gu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ou(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function GE(o,e,i){const r=new Float32Array(or),l=new st(0,1,0);return new Oa({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:sd(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function xg(){return new Oa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sd(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Mg(){return new Oa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function sd(){return`

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
	`}function VE(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===mh||m===_h,_=m===ds||m===ps;if(p||_){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new vg(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new vg(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function kE(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ro("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function XE(o,e,i,r){const l={},c=new WeakMap;function h(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const y=c.get(x);y&&(e.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function p(v){const x=[],y=v.index,b=v.attributes.position;let C=0;if(y!==null){const I=y.array;C=y.version;for(let P=0,U=I.length;P<U;P+=3){const z=I[P+0],G=I[P+1],F=I[P+2];x.push(z,G,G,F,F,z)}}else if(b!==void 0){const I=b.array;C=b.version;for(let P=0,U=I.length/3-1;P<U;P+=3){const z=P+0,G=P+1,F=P+2;x.push(z,G,G,F,F,z)}}else return;const M=new(Qg(x)?nv:ev)(x,1);M.version=C;const g=c.get(v);g&&e.remove(g),c.set(v,M)}function _(v){const x=c.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function WE(o,e,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,y){o.drawElements(r,y,c,x*h),i.update(y,r,1)}function p(x,y,b){b!==0&&(o.drawElementsInstanced(r,y,c,x*h,b),i.update(y,r,b))}function _(x,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,x,0,b);let M=0;for(let g=0;g<b;g++)M+=y[g];i.update(M,r,1)}function v(x,y,b,C){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let g=0;g<x.length;g++)p(x[g]/h,y[g],C[g]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,x,0,C,0,b);let g=0;for(let I=0;I<b;I++)g+=y[I]*C[I];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function qE(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function YE(o,e,i){const r=new WeakMap,l=new Je;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let R=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),C===!0&&(U=2),M===!0&&(U=3);let z=d.attributes.position.count*U,G=1;z>e.maxTextureSize&&(G=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const F=new Float32Array(z*G*4*v),K=new Jg(F,z,G,v);K.type=ji,K.needsUpdate=!0;const w=U*4;for(let V=0;V<v;V++){const nt=g[V],ut=I[V],gt=P[V],lt=z*G*4*V;for(let O=0;O<nt.count;O++){const Z=O*w;b===!0&&(l.fromBufferAttribute(nt,O),F[lt+Z+0]=l.x,F[lt+Z+1]=l.y,F[lt+Z+2]=l.z,F[lt+Z+3]=0),C===!0&&(l.fromBufferAttribute(ut,O),F[lt+Z+4]=l.x,F[lt+Z+5]=l.y,F[lt+Z+6]=l.z,F[lt+Z+7]=0),M===!0&&(l.fromBufferAttribute(gt,O),F[lt+Z+8]=l.x,F[lt+Z+9]=l.y,F[lt+Z+10]=l.z,F[lt+Z+11]=gt.itemSize===4?l.w:1)}}x={count:v,texture:K,size:new Pe(z,G)},r.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function ZE(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,v=e.get(m,_);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const cv=new In,yg=new ov(1,1),fv=new Jg,hv=new Ex,dv=new rv,Eg=[],Tg=[],Ag=new Float32Array(16),bg=new Float32Array(9),Rg=new Float32Array(4);function Ss(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=Eg[l];if(c===void 0&&(c=new Float32Array(l),Eg[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function cn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function fn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function xu(o,e){let i=Tg[e];i===void 0&&(i=new Int32Array(e),Tg[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function KE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function jE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2fv(this.addr,e),fn(i,e)}}function QE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(cn(i,e))return;o.uniform3fv(this.addr,e),fn(i,e)}}function JE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4fv(this.addr,e),fn(i,e)}}function $E(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),fn(i,e)}else{if(cn(i,r))return;Rg.set(r),o.uniformMatrix2fv(this.addr,!1,Rg),fn(i,r)}}function tT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),fn(i,e)}else{if(cn(i,r))return;bg.set(r),o.uniformMatrix3fv(this.addr,!1,bg),fn(i,r)}}function eT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),fn(i,e)}else{if(cn(i,r))return;Ag.set(r),o.uniformMatrix4fv(this.addr,!1,Ag),fn(i,r)}}function nT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function iT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2iv(this.addr,e),fn(i,e)}}function aT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(cn(i,e))return;o.uniform3iv(this.addr,e),fn(i,e)}}function rT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4iv(this.addr,e),fn(i,e)}}function sT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function oT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2uiv(this.addr,e),fn(i,e)}}function lT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(cn(i,e))return;o.uniform3uiv(this.addr,e),fn(i,e)}}function uT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4uiv(this.addr,e),fn(i,e)}}function cT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(yg.compareFunction=jg,c=yg):c=cv,i.setTexture2D(e||c,l)}function fT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||hv,l)}function hT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||dv,l)}function dT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||fv,l)}function pT(o){switch(o){case 5126:return KE;case 35664:return jE;case 35665:return QE;case 35666:return JE;case 35674:return $E;case 35675:return tT;case 35676:return eT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return aT;case 35669:case 35673:return rT;case 5125:return sT;case 36294:return oT;case 36295:return lT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return cT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return dT}}function mT(o,e){o.uniform1fv(this.addr,e)}function _T(o,e){const i=Ss(e,this.size,2);o.uniform2fv(this.addr,i)}function gT(o,e){const i=Ss(e,this.size,3);o.uniform3fv(this.addr,i)}function vT(o,e){const i=Ss(e,this.size,4);o.uniform4fv(this.addr,i)}function ST(o,e){const i=Ss(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function xT(o,e){const i=Ss(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function MT(o,e){const i=Ss(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function yT(o,e){o.uniform1iv(this.addr,e)}function ET(o,e){o.uniform2iv(this.addr,e)}function TT(o,e){o.uniform3iv(this.addr,e)}function AT(o,e){o.uniform4iv(this.addr,e)}function bT(o,e){o.uniform1uiv(this.addr,e)}function RT(o,e){o.uniform2uiv(this.addr,e)}function CT(o,e){o.uniform3uiv(this.addr,e)}function wT(o,e){o.uniform4uiv(this.addr,e)}function DT(o,e,i){const r=this.cache,l=e.length,c=xu(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),fn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||cv,c[h])}function UT(o,e,i){const r=this.cache,l=e.length,c=xu(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),fn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||hv,c[h])}function LT(o,e,i){const r=this.cache,l=e.length,c=xu(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),fn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||dv,c[h])}function NT(o,e,i){const r=this.cache,l=e.length,c=xu(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),fn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||fv,c[h])}function OT(o){switch(o){case 5126:return mT;case 35664:return _T;case 35665:return gT;case 35666:return vT;case 35674:return ST;case 35675:return xT;case 35676:return MT;case 5124:case 35670:return yT;case 35667:case 35671:return ET;case 35668:case 35672:return TT;case 35669:case 35673:return AT;case 5125:return bT;case 36294:return RT;case 36295:return CT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return NT}}class PT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=pT(i.type)}}class BT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=OT(i.type)}}class zT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const rh=/(\w+)(\])?(\[|\.)?/g;function Cg(o,e){o.seq.push(e),o.map[e.id]=e}function IT(o,e,i){const r=o.name,l=r.length;for(rh.lastIndex=0;;){const c=rh.exec(r),h=rh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Cg(i,p===void 0?new PT(d,o,e):new BT(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new zT(d),Cg(i,v)),i=v}}}class du{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);IT(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function wg(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const FT=37297;let HT=0;function GT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Dg=new le;function VT(o){Ee._getMatrix(Dg,Ee.workingColorSpace,o);const e=`mat3( ${Dg.elements.map(i=>i.toFixed(4))} )`;switch(Ee.getTransfer(o)){case pu:return[e,"LinearTransferOETF"];case Ne:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Ug(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+GT(o.getShaderSource(e),d)}else return c}function kT(o,e){const i=VT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function XT(o,e){let i;switch(e){case jS:i="Linear";break;case QS:i="Reinhard";break;case JS:i="Cineon";break;case $S:i="ACESFilmic";break;case ex:i="AgX";break;case nx:i="Neutral";break;case tx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const lu=new st;function WT(){Ee.getLuminanceCoefficients(lu);const o=lu.x.toFixed(4),e=lu.y.toFixed(4),i=lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function YT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function ZT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Mo(o){return o!==""}function Lg(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ng(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(o){return o.replace(KT,QT)}const jT=new Map;function QT(o,e){let i=fe[e];if(i===void 0){const r=jT.get(e);if(r!==void 0)i=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Zh(i)}const JT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Og(o){return o.replace(JT,$T)}function $T(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Pg(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Fg?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===wS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function eA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ds:case ps:e="ENVMAP_TYPE_CUBE";break;case gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ps:e="ENVMAP_MODE_REFRACTION";break}return e}function iA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Hg:e="ENVMAP_BLENDING_MULTIPLY";break;case ZS:e="ENVMAP_BLENDING_MIX";break;case KS:e="ENVMAP_BLENDING_ADD";break}return e}function aA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function rA(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=tA(i),p=eA(i),_=nA(i),v=iA(i),x=aA(i),y=qT(i),b=YT(c),C=l.createProgram();let M,g,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Mo).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Mo).join(`
`),g.length>0&&(g+=`
`)):(M=[Pg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),g=[Pg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==La?"#define TONE_MAPPING":"",i.toneMapping!==La?fe.tonemapping_pars_fragment:"",i.toneMapping!==La?XT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,kT("linearToOutputTexel",i.outputColorSpace),WT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Mo).join(`
`)),h=Zh(h),h=Lg(h,i),h=Ng(h,i),d=Zh(d),d=Lg(d,i),d=Ng(d,i),h=Og(h),d=Og(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",i.glslVersion===j_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===j_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const P=I+M+h,U=I+g+d,z=wg(l,l.VERTEX_SHADER,P),G=wg(l,l.FRAGMENT_SHADER,U);l.attachShader(C,z),l.attachShader(C,G),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(V){if(o.debug.checkShaderErrors){const nt=l.getProgramInfoLog(C)||"",ut=l.getShaderInfoLog(z)||"",gt=l.getShaderInfoLog(G)||"",lt=nt.trim(),O=ut.trim(),Z=gt.trim();let q=!0,St=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,z,G);else{const D=Ug(l,z,"vertex"),J=Ug(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+D+`
`+J)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(O===""||Z==="")&&(St=!1);St&&(V.diagnostics={runnable:q,programLog:lt,vertexShader:{log:O,prefix:M},fragmentShader:{log:Z,prefix:g}})}l.deleteShader(z),l.deleteShader(G),K=new du(l,C),w=ZT(l,C)}let K;this.getUniforms=function(){return K===void 0&&F(this),K};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,FT)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=HT++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=G,this}let sA=0;class oA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new lA(e),i.set(e,r)),r}}class lA{constructor(e){this.id=sA++,this.code=e,this.usedTimes=0}}function uA(o,e,i,r,l,c,h){const d=new $g,m=new oA,p=new Set,_=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,R,V,nt,ut){const gt=nt.fog,lt=ut.geometry,O=w.isMeshStandardMaterial?nt.environment:null,Z=(w.isMeshStandardMaterial?i:e).get(w.envMap||O),q=Z&&Z.mapping===gu?Z.image.height:null,St=b[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const D=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,J=D!==void 0?D.length:0;let vt=0;lt.morphAttributes.position!==void 0&&(vt=1),lt.morphAttributes.normal!==void 0&&(vt=2),lt.morphAttributes.color!==void 0&&(vt=3);let xt,Dt,Ft,tt;if(St){const xe=Ei[St];xt=xe.vertexShader,Dt=xe.fragmentShader}else xt=w.vertexShader,Dt=w.fragmentShader,m.update(w),Ft=m.getVertexShaderID(w),tt=m.getFragmentShaderID(w);const mt=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),Kt=ut.isInstancedMesh===!0,Wt=ut.isBatchedMesh===!0,he=!!w.map,$e=!!w.matcap,B=!!Z,Ce=!!w.aoMap,ae=!!w.lightMap,ee=!!w.bumpMap,Ot=!!w.normalMap,Ie=!!w.displacementMap,Gt=!!w.emissiveMap,re=!!w.metalnessMap,ke=!!w.roughnessMap,Xe=w.anisotropy>0,L=w.clearcoat>0,E=w.dispersion>0,$=w.iridescence>0,ct=w.sheen>0,dt=w.transmission>0,ot=Xe&&!!w.anisotropyMap,Pt=L&&!!w.clearcoatMap,bt=L&&!!w.clearcoatNormalMap,kt=L&&!!w.clearcoatRoughnessMap,qt=$&&!!w.iridescenceMap,Mt=$&&!!w.iridescenceThicknessMap,Ut=ct&&!!w.sheenColorMap,Zt=ct&&!!w.sheenRoughnessMap,Vt=!!w.specularMap,Ct=!!w.specularColorMap,se=!!w.specularIntensityMap,k=dt&&!!w.transmissionMap,Tt=dt&&!!w.thicknessMap,Rt=!!w.gradientMap,Bt=!!w.alphaMap,yt=w.alphaTest>0,_t=!!w.alphaHash,Ht=!!w.extensions;let ie=La;w.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Ae={shaderID:St,shaderType:w.type,shaderName:w.name,vertexShader:xt,fragmentShader:Dt,defines:w.defines,customVertexShaderID:Ft,customFragmentShaderID:tt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Wt,batchingColor:Wt&&ut._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&ut.instanceColor!==null,instancingMorph:Kt&&ut.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:mt===null?o.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:ms,alphaToCoverage:!!w.alphaToCoverage,map:he,matcap:$e,envMap:B,envMapMode:B&&Z.mapping,envMapCubeUVHeight:q,aoMap:Ce,lightMap:ae,bumpMap:ee,normalMap:Ot,displacementMap:x&&Ie,emissiveMap:Gt,normalMapObjectSpace:Ot&&w.normalMapType===ox,normalMapTangentSpace:Ot&&w.normalMapType===sx,metalnessMap:re,roughnessMap:ke,anisotropy:Xe,anisotropyMap:ot,clearcoat:L,clearcoatMap:Pt,clearcoatNormalMap:bt,clearcoatRoughnessMap:kt,dispersion:E,iridescence:$,iridescenceMap:qt,iridescenceThicknessMap:Mt,sheen:ct,sheenColorMap:Ut,sheenRoughnessMap:Zt,specularMap:Vt,specularColorMap:Ct,specularIntensityMap:se,transmission:dt,transmissionMap:k,thicknessMap:Tt,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===cs&&w.alphaToCoverage===!1,alphaMap:Bt,alphaTest:yt,alphaHash:_t,combine:w.combine,mapUv:he&&C(w.map.channel),aoMapUv:Ce&&C(w.aoMap.channel),lightMapUv:ae&&C(w.lightMap.channel),bumpMapUv:ee&&C(w.bumpMap.channel),normalMapUv:Ot&&C(w.normalMap.channel),displacementMapUv:Ie&&C(w.displacementMap.channel),emissiveMapUv:Gt&&C(w.emissiveMap.channel),metalnessMapUv:re&&C(w.metalnessMap.channel),roughnessMapUv:ke&&C(w.roughnessMap.channel),anisotropyMapUv:ot&&C(w.anisotropyMap.channel),clearcoatMapUv:Pt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:bt&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&C(w.sheenRoughnessMap.channel),specularMapUv:Vt&&C(w.specularMap.channel),specularColorMapUv:Ct&&C(w.specularColorMap.channel),specularIntensityMapUv:se&&C(w.specularIntensityMap.channel),transmissionMapUv:k&&C(w.transmissionMap.channel),thicknessMapUv:Tt&&C(w.thicknessMap.channel),alphaMapUv:Bt&&C(w.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Ot||Xe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!lt.attributes.uv&&(he||Bt),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:At,skinning:ut.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:vt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:he&&w.map.isVideoTexture===!0&&Ee.getTransfer(w.map.colorSpace)===Ne,decodeVideoTextureEmissive:Gt&&w.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(w.emissiveMap.colorSpace)===Ne,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ki,flipSided:w.side===zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ht&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&w.extensions.multiDraw===!0||Wt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ae.vertexUv1s=p.has(1),Ae.vertexUv2s=p.has(2),Ae.vertexUv3s=p.has(3),p.clear(),Ae}function g(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)R.push(V),R.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(I(R,w),P(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function I(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function P(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function U(w){const R=b[w.type];let V;if(R){const nt=Ei[R];V=zx.clone(nt.uniforms)}else V=w.uniforms;return V}function z(w,R){let V;for(let nt=0,ut=_.length;nt<ut;nt++){const gt=_[nt];if(gt.cacheKey===R){V=gt,++V.usedTimes;break}}return V===void 0&&(V=new rA(o,R,w,c),_.push(V)),V}function G(w){if(--w.usedTimes===0){const R=_.indexOf(w);_[R]=_[_.length-1],_.pop(),w.destroy()}}function F(w){m.remove(w)}function K(){m.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:U,acquireProgram:z,releaseProgram:G,releaseShaderCache:F,programs:_,dispose:K}}function cA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function fA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Bg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function zg(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(v,x,y,b,C,M){let g=o[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:y,groupOrder:b,renderOrder:v.renderOrder,z:C,group:M},o[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=y,g.groupOrder=b,g.renderOrder=v.renderOrder,g.z=C,g.group=M),e++,g}function d(v,x,y,b,C,M){const g=h(v,x,y,b,C,M);y.transmission>0?r.push(g):y.transparent===!0?l.push(g):i.push(g)}function m(v,x,y,b,C,M){const g=h(v,x,y,b,C,M);y.transmission>0?r.unshift(g):y.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,x){i.length>1&&i.sort(v||fA),r.length>1&&r.sort(x||Bg),l.length>1&&l.sort(x||Bg)}function _(){for(let v=e,x=o.length;v<x;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function hA(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new zg,o.set(r,[h])):l>=c.length?(h=new zg,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function dA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new st,color:new Oe};break;case"SpotLight":i={position:new st,direction:new st,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":i={color:new Oe,position:new st,halfWidth:new st,halfHeight:new st};break}return o[e.id]=i,i}}}function pA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let mA=0;function _A(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function gA(o){const e=new dA,i=pA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new st);const l=new st,c=new un,h=new un;function d(p){let _=0,v=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,b=0,C=0,M=0,g=0,I=0,P=0,U=0,z=0,G=0,F=0;p.sort(_A);for(let w=0,R=p.length;w<R;w++){const V=p[w],nt=V.color,ut=V.intensity,gt=V.distance,lt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=nt.r*ut,v+=nt.g*ut,x+=nt.b*ut;else if(V.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(V.sh.coefficients[O],ut);F++}else if(V.isDirectionalLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Z=V.shadow,q=i.get(V);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.directionalShadow[y]=q,r.directionalShadowMap[y]=lt,r.directionalShadowMatrix[y]=V.shadow.matrix,I++}r.directional[y]=O,y++}else if(V.isSpotLight){const O=e.get(V);O.position.setFromMatrixPosition(V.matrixWorld),O.color.copy(nt).multiplyScalar(ut),O.distance=gt,O.coneCos=Math.cos(V.angle),O.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),O.decay=V.decay,r.spot[C]=O;const Z=V.shadow;if(V.map&&(r.spotLightMap[z]=V.map,z++,Z.updateMatrices(V),V.castShadow&&G++),r.spotLightMatrix[C]=Z.matrix,V.castShadow){const q=i.get(V);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.spotShadow[C]=q,r.spotShadowMap[C]=lt,U++}C++}else if(V.isRectAreaLight){const O=e.get(V);O.color.copy(nt).multiplyScalar(ut),O.halfWidth.set(V.width*.5,0,0),O.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=O,M++}else if(V.isPointLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),O.distance=V.distance,O.decay=V.decay,V.castShadow){const Z=V.shadow,q=i.get(V);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,r.pointShadow[b]=q,r.pointShadowMap[b]=lt,r.pointShadowMatrix[b]=V.shadow.matrix,P++}r.point[b]=O,b++}else if(V.isHemisphereLight){const O=e.get(V);O.skyColor.copy(V.color).multiplyScalar(ut),O.groundColor.copy(V.groundColor).multiplyScalar(ut),r.hemi[g]=O,g++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const K=r.hash;(K.directionalLength!==y||K.pointLength!==b||K.spotLength!==C||K.rectAreaLength!==M||K.hemiLength!==g||K.numDirectionalShadows!==I||K.numPointShadows!==P||K.numSpotShadows!==U||K.numSpotMaps!==z||K.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=M,r.point.length=b,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=U+z-G,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=F,K.directionalLength=y,K.pointLength=b,K.spotLength=C,K.rectAreaLength=M,K.hemiLength=g,K.numDirectionalShadows=I,K.numPointShadows=P,K.numSpotShadows=U,K.numSpotMaps=z,K.numLightProbes=F,r.version=mA++)}function m(p,_){let v=0,x=0,y=0,b=0,C=0;const M=_.matrixWorldInverse;for(let g=0,I=p.length;g<I;g++){const P=p[g];if(P.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),v++}else if(P.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(P.isRectAreaLight){const U=r.rectArea[b];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(M),h.identity(),c.copy(P.matrixWorld),c.premultiply(M),h.extractRotation(c),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(P.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(M),x++}else if(P.isHemisphereLight){const U=r.hemi[C];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:r}}function Ig(o){const e=new gA(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function vA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new Ig(o),e.set(l,[d])):c>=h.length?(d=new Ig(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const SA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xA=`uniform sampler2D shadow_pass;
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
}`;function MA(o,e,i){let r=new sv;const l=new Pe,c=new Pe,h=new Je,d=new Yx({depthPacking:rx}),m=new Zx,p={},_=i.maxTextureSize,v={[Na]:zn,[zn]:Na,[Ki]:Ki},x=new Oa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:SA,fragmentShader:xA}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const b=new dr;b.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new bi(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fg;let g=this.type;this.render=function(G,F,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),nt=o.state;nt.setBlending(Ua),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const ut=g!==Zi&&this.type===Zi,gt=g===Zi&&this.type!==Zi;for(let lt=0,O=G.length;lt<O;lt++){const Z=G[lt],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const St=q.getFrameExtents();if(l.multiply(St),c.copy(q.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/St.x),l.x=c.x*St.x,q.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/St.y),l.y=c.y*St.y,q.mapSize.y=c.y)),q.map===null||ut===!0||gt===!0){const J=this.type!==Zi?{minFilter:mi,magFilter:mi}:{};q.map!==null&&q.map.dispose(),q.map=new hr(l.x,l.y,J),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const D=q.getViewportCount();for(let J=0;J<D;J++){const vt=q.getViewport(J);h.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),nt.viewport(h),q.updateMatrices(Z,J),r=q.getFrustum(),U(F,K,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===Zi&&I(q,K),q.needsUpdate=!1}g=this.type,M.needsUpdate=!1,o.setRenderTarget(w,R,V)};function I(G,F){const K=e.update(C);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new hr(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(F,null,K,x,C,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(F,null,K,y,C,null)}function P(G,F,K,w){let R=null;const V=K.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(V!==void 0)R=V;else if(R=K.isPointLight===!0?m:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const nt=R.uuid,ut=F.uuid;let gt=p[nt];gt===void 0&&(gt={},p[nt]=gt);let lt=gt[ut];lt===void 0&&(lt=R.clone(),gt[ut]=lt,F.addEventListener("dispose",z)),R=lt}if(R.visible=F.visible,R.wireframe=F.wireframe,w===Zi?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:v[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,K.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const nt=o.properties.get(R);nt.light=K}return R}function U(G,F,K,w,R){if(G.visible===!1)return;if(G.layers.test(F.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&R===Zi)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,G.matrixWorld);const ut=e.update(G),gt=G.material;if(Array.isArray(gt)){const lt=ut.groups;for(let O=0,Z=lt.length;O<Z;O++){const q=lt[O],St=gt[q.materialIndex];if(St&&St.visible){const D=P(G,St,w,R);G.onBeforeShadow(o,G,F,K,ut,D,q),o.renderBufferDirect(K,null,ut,D,G,q),G.onAfterShadow(o,G,F,K,ut,D,q)}}}else if(gt.visible){const lt=P(G,gt,w,R);G.onBeforeShadow(o,G,F,K,ut,lt,null),o.renderBufferDirect(K,null,ut,lt,G,null),G.onAfterShadow(o,G,F,K,ut,lt,null)}}const nt=G.children;for(let ut=0,gt=nt.length;ut<gt;ut++)U(nt[ut],F,K,w,R)}function z(G){G.target.removeEventListener("dispose",z);for(const K in p){const w=p[K],R=G.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const yA={[lh]:uh,[ch]:dh,[fh]:ph,[hs]:hh,[uh]:lh,[dh]:ch,[ph]:fh,[hh]:hs};function EA(o,e){function i(){let k=!1;const Tt=new Je;let Rt=null;const Bt=new Je(0,0,0,0);return{setMask:function(yt){Rt!==yt&&!k&&(o.colorMask(yt,yt,yt,yt),Rt=yt)},setLocked:function(yt){k=yt},setClear:function(yt,_t,Ht,ie,Ae){Ae===!0&&(yt*=ie,_t*=ie,Ht*=ie),Tt.set(yt,_t,Ht,ie),Bt.equals(Tt)===!1&&(o.clearColor(yt,_t,Ht,ie),Bt.copy(Tt))},reset:function(){k=!1,Rt=null,Bt.set(-1,0,0,0)}}}function r(){let k=!1,Tt=!1,Rt=null,Bt=null,yt=null;return{setReversed:function(_t){if(Tt!==_t){const Ht=e.get("EXT_clip_control");_t?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Tt=_t;const ie=yt;yt=null,this.setClear(ie)}},getReversed:function(){return Tt},setTest:function(_t){_t?mt(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(_t){Rt!==_t&&!k&&(o.depthMask(_t),Rt=_t)},setFunc:function(_t){if(Tt&&(_t=yA[_t]),Bt!==_t){switch(_t){case lh:o.depthFunc(o.NEVER);break;case uh:o.depthFunc(o.ALWAYS);break;case ch:o.depthFunc(o.LESS);break;case hs:o.depthFunc(o.LEQUAL);break;case fh:o.depthFunc(o.EQUAL);break;case hh:o.depthFunc(o.GEQUAL);break;case dh:o.depthFunc(o.GREATER);break;case ph:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){yt!==_t&&(Tt&&(_t=1-_t),o.clearDepth(_t),yt=_t)},reset:function(){k=!1,Rt=null,Bt=null,yt=null,Tt=!1}}}function l(){let k=!1,Tt=null,Rt=null,Bt=null,yt=null,_t=null,Ht=null,ie=null,Ae=null;return{setTest:function(xe){k||(xe?mt(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(xe){Tt!==xe&&!k&&(o.stencilMask(xe),Tt=xe)},setFunc:function(xe,ri,rn){(Rt!==xe||Bt!==ri||yt!==rn)&&(o.stencilFunc(xe,ri,rn),Rt=xe,Bt=ri,yt=rn)},setOp:function(xe,ri,rn){(_t!==xe||Ht!==ri||ie!==rn)&&(o.stencilOp(xe,ri,rn),_t=xe,Ht=ri,ie=rn)},setLocked:function(xe){k=xe},setClear:function(xe){Ae!==xe&&(o.clearStencil(xe),Ae=xe)},reset:function(){k=!1,Tt=null,Rt=null,Bt=null,yt=null,_t=null,Ht=null,ie=null,Ae=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},x=new WeakMap,y=[],b=null,C=!1,M=null,g=null,I=null,P=null,U=null,z=null,G=null,F=new Oe(0,0,0),K=0,w=!1,R=null,V=null,nt=null,ut=null,gt=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Z=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=Z>=2);let St=null,D={};const J=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),xt=new Je().fromArray(J),Dt=new Je().fromArray(vt);function Ft(k,Tt,Rt,Bt){const yt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(k,_t),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ht=0;Ht<Rt;Ht++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Tt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Tt+Ht,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return _t}const tt={};tt[o.TEXTURE_2D]=Ft(o.TEXTURE_2D,o.TEXTURE_2D,1),tt[o.TEXTURE_CUBE_MAP]=Ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[o.TEXTURE_2D_ARRAY]=Ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),tt[o.TEXTURE_3D]=Ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),mt(o.DEPTH_TEST),h.setFunc(hs),ee(!1),Ot(X_),mt(o.CULL_FACE),Ce(Ua);function mt(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function At(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function Kt(k,Tt){return v[k]!==Tt?(o.bindFramebuffer(k,Tt),v[k]=Tt,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Tt),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Wt(k,Tt){let Rt=y,Bt=!1;if(k){Rt=x.get(Tt),Rt===void 0&&(Rt=[],x.set(Tt,Rt));const yt=k.textures;if(Rt.length!==yt.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Ht=yt.length;_t<Ht;_t++)Rt[_t]=o.COLOR_ATTACHMENT0+_t;Rt.length=yt.length,Bt=!0}}else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(Rt)}function he(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const $e={[sr]:o.FUNC_ADD,[US]:o.FUNC_SUBTRACT,[LS]:o.FUNC_REVERSE_SUBTRACT};$e[NS]=o.MIN,$e[OS]=o.MAX;const B={[PS]:o.ZERO,[BS]:o.ONE,[zS]:o.SRC_COLOR,[sh]:o.SRC_ALPHA,[kS]:o.SRC_ALPHA_SATURATE,[GS]:o.DST_COLOR,[FS]:o.DST_ALPHA,[IS]:o.ONE_MINUS_SRC_COLOR,[oh]:o.ONE_MINUS_SRC_ALPHA,[VS]:o.ONE_MINUS_DST_COLOR,[HS]:o.ONE_MINUS_DST_ALPHA,[XS]:o.CONSTANT_COLOR,[WS]:o.ONE_MINUS_CONSTANT_COLOR,[qS]:o.CONSTANT_ALPHA,[YS]:o.ONE_MINUS_CONSTANT_ALPHA};function Ce(k,Tt,Rt,Bt,yt,_t,Ht,ie,Ae,xe){if(k===Ua){C===!0&&(At(o.BLEND),C=!1);return}if(C===!1&&(mt(o.BLEND),C=!0),k!==DS){if(k!==M||xe!==w){if((g!==sr||U!==sr)&&(o.blendEquation(o.FUNC_ADD),g=sr,U=sr),xe)switch(k){case cs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case W_:o.blendFunc(o.ONE,o.ONE);break;case q_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Y_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case cs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case W_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case q_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Y_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}I=null,P=null,z=null,G=null,F.set(0,0,0),K=0,M=k,w=xe}return}yt=yt||Tt,_t=_t||Rt,Ht=Ht||Bt,(Tt!==g||yt!==U)&&(o.blendEquationSeparate($e[Tt],$e[yt]),g=Tt,U=yt),(Rt!==I||Bt!==P||_t!==z||Ht!==G)&&(o.blendFuncSeparate(B[Rt],B[Bt],B[_t],B[Ht]),I=Rt,P=Bt,z=_t,G=Ht),(ie.equals(F)===!1||Ae!==K)&&(o.blendColor(ie.r,ie.g,ie.b,Ae),F.copy(ie),K=Ae),M=k,w=!1}function ae(k,Tt){k.side===Ki?At(o.CULL_FACE):mt(o.CULL_FACE);let Rt=k.side===zn;Tt&&(Rt=!Rt),ee(Rt),k.blending===cs&&k.transparent===!1?Ce(Ua):Ce(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const Bt=k.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Gt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?mt(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){R!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),R=k)}function Ot(k){k!==RS?(mt(o.CULL_FACE),k!==V&&(k===X_?o.cullFace(o.BACK):k===CS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),V=k}function Ie(k){k!==nt&&(O&&o.lineWidth(k),nt=k)}function Gt(k,Tt,Rt){k?(mt(o.POLYGON_OFFSET_FILL),(ut!==Tt||gt!==Rt)&&(o.polygonOffset(Tt,Rt),ut=Tt,gt=Rt)):At(o.POLYGON_OFFSET_FILL)}function re(k){k?mt(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function ke(k){k===void 0&&(k=o.TEXTURE0+lt-1),St!==k&&(o.activeTexture(k),St=k)}function Xe(k,Tt,Rt){Rt===void 0&&(St===null?Rt=o.TEXTURE0+lt-1:Rt=St);let Bt=D[Rt];Bt===void 0&&(Bt={type:void 0,texture:void 0},D[Rt]=Bt),(Bt.type!==k||Bt.texture!==Tt)&&(St!==Rt&&(o.activeTexture(Rt),St=Rt),o.bindTexture(k,Tt||tt[k]),Bt.type=k,Bt.texture=Tt)}function L(){const k=D[St];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(k){xt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),xt.copy(k))}function Zt(k){Dt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Dt.copy(k))}function Vt(k,Tt){let Rt=p.get(Tt);Rt===void 0&&(Rt=new WeakMap,p.set(Tt,Rt));let Bt=Rt.get(k);Bt===void 0&&(Bt=o.getUniformBlockIndex(Tt,k.name),Rt.set(k,Bt))}function Ct(k,Tt){const Bt=p.get(Tt).get(k);m.get(Tt)!==Bt&&(o.uniformBlockBinding(Tt,Bt,k.__bindingPointIndex),m.set(Tt,Bt))}function se(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},St=null,D={},v={},x=new WeakMap,y=[],b=null,C=!1,M=null,g=null,I=null,P=null,U=null,z=null,G=null,F=new Oe(0,0,0),K=0,w=!1,R=null,V=null,nt=null,ut=null,gt=null,xt.set(0,0,o.canvas.width,o.canvas.height),Dt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:mt,disable:At,bindFramebuffer:Kt,drawBuffers:Wt,useProgram:he,setBlending:Ce,setMaterial:ae,setFlipSided:ee,setCullFace:Ot,setLineWidth:Ie,setPolygonOffset:Gt,setScissorTest:re,activeTexture:ke,bindTexture:Xe,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:qt,texImage3D:Mt,updateUBOMapping:Vt,uniformBlockBinding:Ct,texStorage2D:bt,texStorage3D:kt,texSubImage2D:ct,texSubImage3D:dt,compressedTexSubImage2D:ot,compressedTexSubImage3D:Pt,scissor:Ut,viewport:Zt,reset:se}}function TA(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pe,_=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return y?new OffscreenCanvas(L,E):_u("canvas")}function C(L,E,$){let ct=1;const dt=Xe(L);if((dt.width>$||dt.height>$)&&(ct=$/Math.max(dt.width,dt.height)),ct<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ot=Math.floor(ct*dt.width),Pt=Math.floor(ct*dt.height);v===void 0&&(v=b(ot,Pt));const bt=E?b(ot,Pt):v;return bt.width=ot,bt.height=Pt,bt.getContext("2d").drawImage(L,0,0,ot,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+ot+"x"+Pt+")."),bt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),L;return L}function M(L){return L.generateMipmaps}function g(L){o.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(L,E,$,ct,dt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ot=E;if(E===o.RED&&($===o.FLOAT&&(ot=o.R32F),$===o.HALF_FLOAT&&(ot=o.R16F),$===o.UNSIGNED_BYTE&&(ot=o.R8)),E===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.R8UI),$===o.UNSIGNED_SHORT&&(ot=o.R16UI),$===o.UNSIGNED_INT&&(ot=o.R32UI),$===o.BYTE&&(ot=o.R8I),$===o.SHORT&&(ot=o.R16I),$===o.INT&&(ot=o.R32I)),E===o.RG&&($===o.FLOAT&&(ot=o.RG32F),$===o.HALF_FLOAT&&(ot=o.RG16F),$===o.UNSIGNED_BYTE&&(ot=o.RG8)),E===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.RG8UI),$===o.UNSIGNED_SHORT&&(ot=o.RG16UI),$===o.UNSIGNED_INT&&(ot=o.RG32UI),$===o.BYTE&&(ot=o.RG8I),$===o.SHORT&&(ot=o.RG16I),$===o.INT&&(ot=o.RG32I)),E===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ot=o.RGB16UI),$===o.UNSIGNED_INT&&(ot=o.RGB32UI),$===o.BYTE&&(ot=o.RGB8I),$===o.SHORT&&(ot=o.RGB16I),$===o.INT&&(ot=o.RGB32I)),E===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ot=o.RGBA16UI),$===o.UNSIGNED_INT&&(ot=o.RGBA32UI),$===o.BYTE&&(ot=o.RGBA8I),$===o.SHORT&&(ot=o.RGBA16I),$===o.INT&&(ot=o.RGBA32I)),E===o.RGB&&($===o.UNSIGNED_INT_5_9_9_9_REV&&(ot=o.RGB9_E5),$===o.UNSIGNED_INT_10F_11F_11F_REV&&(ot=o.R11F_G11F_B10F)),E===o.RGBA){const Pt=dt?pu:Ee.getTransfer(ct);$===o.FLOAT&&(ot=o.RGBA32F),$===o.HALF_FLOAT&&(ot=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ot=Pt===Ne?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(ot=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ot=o.RGB5_A1)}return(ot===o.R16F||ot===o.R32F||ot===o.RG16F||ot===o.RG32F||ot===o.RGBA16F||ot===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ot}function U(L,E){let $;return L?E===null||E===fr||E===To?$=o.DEPTH24_STENCIL8:E===ji?$=o.DEPTH32F_STENCIL8:E===Eo&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===fr||E===To?$=o.DEPTH_COMPONENT24:E===ji?$=o.DEPTH_COMPONENT32F:E===Eo&&($=o.DEPTH_COMPONENT16),$}function z(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==mi&&L.minFilter!==Ti?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function G(L){const E=L.target;E.removeEventListener("dispose",G),K(E),E.isVideoTexture&&_.delete(E)}function F(L){const E=L.target;E.removeEventListener("dispose",F),R(E)}function K(L){const E=r.get(L);if(E.__webglInit===void 0)return;const $=L.source,ct=x.get($);if(ct){const dt=ct[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&w(L),Object.keys(ct).length===0&&x.delete($)}r.remove(L)}function w(L){const E=r.get(L);o.deleteTexture(E.__webglTexture);const $=L.source,ct=x.get($);delete ct[E.__cacheKey],h.memory.textures--}function R(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let dt=0;dt<E.__webglFramebuffer[ct].length;dt++)o.deleteFramebuffer(E.__webglFramebuffer[ct][dt]);else o.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)o.deleteFramebuffer(E.__webglFramebuffer[ct]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=L.textures;for(let ct=0,dt=$.length;ct<dt;ct++){const ot=r.get($[ct]);ot.__webglTexture&&(o.deleteTexture(ot.__webglTexture),h.memory.textures--),r.remove($[ct])}r.remove(L)}let V=0;function nt(){V=0}function ut(){const L=V;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),V+=1,L}function gt(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function lt(L,E){const $=r.get(L);if(L.isVideoTexture&&re(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const ct=L.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt($,L,E);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+E)}function O(L,E){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){tt($,L,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+E)}function Z(L,E){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){tt($,L,E);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+E)}function q(L,E){const $=r.get(L);if(L.version>0&&$.__version!==L.version){mt($,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+E)}const St={[gh]:o.REPEAT,[lr]:o.CLAMP_TO_EDGE,[vh]:o.MIRRORED_REPEAT},D={[mi]:o.NEAREST,[ix]:o.NEAREST_MIPMAP_NEAREST,[Gl]:o.NEAREST_MIPMAP_LINEAR,[Ti]:o.LINEAR,[wf]:o.LINEAR_MIPMAP_NEAREST,[ur]:o.LINEAR_MIPMAP_LINEAR},J={[lx]:o.NEVER,[px]:o.ALWAYS,[ux]:o.LESS,[jg]:o.LEQUAL,[cx]:o.EQUAL,[dx]:o.GEQUAL,[fx]:o.GREATER,[hx]:o.NOTEQUAL};function vt(L,E){if(E.type===ji&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ti||E.magFilter===wf||E.magFilter===Gl||E.magFilter===ur||E.minFilter===Ti||E.minFilter===wf||E.minFilter===Gl||E.minFilter===ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,St[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,St[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,St[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,D[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,D[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===mi||E.minFilter!==Gl&&E.minFilter!==ur||E.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function xt(L,E){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",G));const ct=E.source;let dt=x.get(ct);dt===void 0&&(dt={},x.set(ct,dt));const ot=gt(E);if(ot!==L.__cacheKey){dt[ot]===void 0&&(dt[ot]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,$=!0),dt[ot].usedTimes++;const Pt=dt[L.__cacheKey];Pt!==void 0&&(dt[L.__cacheKey].usedTimes--,Pt.usedTimes===0&&w(E)),L.__cacheKey=ot,L.__webglTexture=dt[ot].texture}return $}function Dt(L,E,$){return Math.floor(Math.floor(L/$)/E)}function Ft(L,E,$,ct){const ot=L.updateRanges;if(ot.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,$,ct,E.data);else{ot.sort((Mt,Ut)=>Mt.start-Ut.start);let Pt=0;for(let Mt=1;Mt<ot.length;Mt++){const Ut=ot[Pt],Zt=ot[Mt],Vt=Ut.start+Ut.count,Ct=Dt(Zt.start,E.width,4),se=Dt(Ut.start,E.width,4);Zt.start<=Vt+1&&Ct===se&&Dt(Zt.start+Zt.count-1,E.width,4)===Ct?Ut.count=Math.max(Ut.count,Zt.start+Zt.count-Ut.start):(++Pt,ot[Pt]=Zt)}ot.length=Pt+1;const bt=o.getParameter(o.UNPACK_ROW_LENGTH),kt=o.getParameter(o.UNPACK_SKIP_PIXELS),qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Ut=ot.length;Mt<Ut;Mt++){const Zt=ot[Mt],Vt=Math.floor(Zt.start/4),Ct=Math.ceil(Zt.count/4),se=Vt%E.width,k=Math.floor(Vt/E.width),Tt=Ct,Rt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,se),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,se,k,Tt,Rt,$,ct,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,bt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,qt)}}function tt(L,E,$){let ct=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=o.TEXTURE_3D);const dt=xt(L,E),ot=E.source;i.bindTexture(ct,L.__webglTexture,o.TEXTURE0+$);const Pt=r.get(ot);if(ot.version!==Pt.__version||dt===!0){i.activeTexture(o.TEXTURE0+$);const bt=Ee.getPrimaries(Ee.workingColorSpace),kt=E.colorSpace===Da?null:Ee.getPrimaries(E.colorSpace),qt=E.colorSpace===Da||bt===kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Mt=C(E.image,!1,l.maxTextureSize);Mt=ke(E,Mt);const Ut=c.convert(E.format,E.colorSpace),Zt=c.convert(E.type);let Vt=P(E.internalFormat,Ut,Zt,E.colorSpace,E.isVideoTexture);vt(ct,E);let Ct;const se=E.mipmaps,k=E.isVideoTexture!==!0,Tt=Pt.__version===void 0||dt===!0,Rt=ot.dataReady,Bt=z(E,Mt);if(E.isDepthTexture)Vt=U(E.format===bo,E.type),Tt&&(k?i.texStorage2D(o.TEXTURE_2D,1,Vt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Ut,Zt,null));else if(E.isDataTexture)if(se.length>0){k&&Tt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,se[0].width,se[0].height);for(let yt=0,_t=se.length;yt<_t;yt++)Ct=se[yt],k?Rt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Ut,Zt,Ct.data):i.texImage2D(o.TEXTURE_2D,yt,Vt,Ct.width,Ct.height,0,Ut,Zt,Ct.data);E.generateMipmaps=!1}else k?(Tt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,Mt.width,Mt.height),Rt&&Ft(E,Mt,Ut,Zt)):i.texImage2D(o.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Ut,Zt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Vt,se[0].width,se[0].height,Mt.depth);for(let yt=0,_t=se.length;yt<_t;yt++)if(Ct=se[yt],E.format!==pi)if(Ut!==null)if(k){if(Rt)if(E.layerUpdates.size>0){const Ht=pg(Ct.width,Ct.height,E.format,E.type);for(const ie of E.layerUpdates){const Ae=Ct.data.subarray(ie*Ht/Ct.data.BYTES_PER_ELEMENT,(ie+1)*Ht/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ie,Ct.width,Ct.height,1,Ut,Ae)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ct.width,Ct.height,Mt.depth,Ut,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Vt,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Rt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ct.width,Ct.height,Mt.depth,Ut,Zt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Vt,Ct.width,Ct.height,Mt.depth,0,Ut,Zt,Ct.data)}else{k&&Tt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,se[0].width,se[0].height);for(let yt=0,_t=se.length;yt<_t;yt++)Ct=se[yt],E.format!==pi?Ut!==null?k?Rt&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Ut,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Vt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Rt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Ut,Zt,Ct.data):i.texImage2D(o.TEXTURE_2D,yt,Vt,Ct.width,Ct.height,0,Ut,Zt,Ct.data)}else if(E.isDataArrayTexture)if(k){if(Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Vt,Mt.width,Mt.height,Mt.depth),Rt)if(E.layerUpdates.size>0){const yt=pg(Mt.width,Mt.height,E.format,E.type);for(const _t of E.layerUpdates){const Ht=Mt.data.subarray(_t*yt/Mt.data.BYTES_PER_ELEMENT,(_t+1)*yt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Ut,Zt,Ht)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ut,Zt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,Mt.width,Mt.height,Mt.depth,0,Ut,Zt,Mt.data);else if(E.isData3DTexture)k?(Tt&&i.texStorage3D(o.TEXTURE_3D,Bt,Vt,Mt.width,Mt.height,Mt.depth),Rt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ut,Zt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Vt,Mt.width,Mt.height,Mt.depth,0,Ut,Zt,Mt.data);else if(E.isFramebufferTexture){if(Tt)if(k)i.texStorage2D(o.TEXTURE_2D,Bt,Vt,Mt.width,Mt.height);else{let yt=Mt.width,_t=Mt.height;for(let Ht=0;Ht<Bt;Ht++)i.texImage2D(o.TEXTURE_2D,Ht,Vt,yt,_t,0,Ut,Zt,null),yt>>=1,_t>>=1}}else if(se.length>0){if(k&&Tt){const yt=Xe(se[0]);i.texStorage2D(o.TEXTURE_2D,Bt,Vt,yt.width,yt.height)}for(let yt=0,_t=se.length;yt<_t;yt++)Ct=se[yt],k?Rt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ut,Zt,Ct):i.texImage2D(o.TEXTURE_2D,yt,Vt,Ut,Zt,Ct);E.generateMipmaps=!1}else if(k){if(Tt){const yt=Xe(Mt);i.texStorage2D(o.TEXTURE_2D,Bt,Vt,yt.width,yt.height)}Rt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ut,Zt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Vt,Ut,Zt,Mt);M(E)&&g(ct),Pt.__version=ot.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function mt(L,E,$){if(E.image.length!==6)return;const ct=xt(L,E),dt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+$);const ot=r.get(dt);if(dt.version!==ot.__version||ct===!0){i.activeTexture(o.TEXTURE0+$);const Pt=Ee.getPrimaries(Ee.workingColorSpace),bt=E.colorSpace===Da?null:Ee.getPrimaries(E.colorSpace),kt=E.colorSpace===Da||Pt===bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const qt=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Ut=[];for(let _t=0;_t<6;_t++)!qt&&!Mt?Ut[_t]=C(E.image[_t],!0,l.maxCubemapSize):Ut[_t]=Mt?E.image[_t].image:E.image[_t],Ut[_t]=ke(E,Ut[_t]);const Zt=Ut[0],Vt=c.convert(E.format,E.colorSpace),Ct=c.convert(E.type),se=P(E.internalFormat,Vt,Ct,E.colorSpace),k=E.isVideoTexture!==!0,Tt=ot.__version===void 0||ct===!0,Rt=dt.dataReady;let Bt=z(E,Zt);vt(o.TEXTURE_CUBE_MAP,E);let yt;if(qt){k&&Tt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,se,Zt.width,Zt.height);for(let _t=0;_t<6;_t++){yt=Ut[_t].mipmaps;for(let Ht=0;Ht<yt.length;Ht++){const ie=yt[Ht];E.format!==pi?Vt!==null?k?Rt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,0,0,ie.width,ie.height,Vt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,se,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,0,0,ie.width,ie.height,Vt,Ct,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,se,ie.width,ie.height,0,Vt,Ct,ie.data)}}}else{if(yt=E.mipmaps,k&&Tt){yt.length>0&&Bt++;const _t=Xe(Ut[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,se,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ut[_t].width,Ut[_t].height,Vt,Ct,Ut[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Ut[_t].width,Ut[_t].height,0,Vt,Ct,Ut[_t].data);for(let Ht=0;Ht<yt.length;Ht++){const Ae=yt[Ht].image[_t].image;k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,0,0,Ae.width,Ae.height,Vt,Ct,Ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,se,Ae.width,Ae.height,0,Vt,Ct,Ae.data)}}else{k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Vt,Ct,Ut[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Vt,Ct,Ut[_t]);for(let Ht=0;Ht<yt.length;Ht++){const ie=yt[Ht];k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,0,0,Vt,Ct,ie.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,se,Vt,Ct,ie.image[_t])}}}M(E)&&g(o.TEXTURE_CUBE_MAP),ot.__version=dt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function At(L,E,$,ct,dt,ot){const Pt=c.convert($.format,$.colorSpace),bt=c.convert($.type),kt=P($.internalFormat,Pt,bt,$.colorSpace),qt=r.get(E),Mt=r.get($);if(Mt.__renderTarget=E,!qt.__hasExternalTextures){const Ut=Math.max(1,E.width>>ot),Zt=Math.max(1,E.height>>ot);dt===o.TEXTURE_3D||dt===o.TEXTURE_2D_ARRAY?i.texImage3D(dt,ot,kt,Ut,Zt,E.depth,0,Pt,bt,null):i.texImage2D(dt,ot,kt,Ut,Zt,0,Pt,bt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Gt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ct,dt,Mt.__webglTexture,0,Ie(E)):(dt===o.TEXTURE_2D||dt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ct,dt,Mt.__webglTexture,ot),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Kt(L,E,$){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const ct=E.depthTexture,dt=ct&&ct.isDepthTexture?ct.type:null,ot=U(E.stencilBuffer,dt),Pt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,bt=Ie(E);Gt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,bt,ot,E.width,E.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,bt,ot,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ot,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,L)}else{const ct=E.textures;for(let dt=0;dt<ct.length;dt++){const ot=ct[dt],Pt=c.convert(ot.format,ot.colorSpace),bt=c.convert(ot.type),kt=P(ot.internalFormat,Pt,bt,ot.colorSpace),qt=Ie(E);$&&Gt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,kt,E.width,E.height):Gt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,kt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,kt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Wt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=r.get(E.depthTexture);ct.__renderTarget=E,(!ct.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),lt(E.depthTexture,0);const dt=ct.__webglTexture,ot=Ie(E);if(E.depthTexture.format===Ao)Gt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0);else if(E.depthTexture.format===bo)Gt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function he(L){const E=r.get(L),$=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ct=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){const dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",dt)};ct.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=ct}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const ct=L.texture.mipmaps;ct&&ct.length>0?Wt(E.__webglFramebuffer[0],L):Wt(E.__webglFramebuffer,L)}else if($){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=o.createRenderbuffer(),Kt(E.__webglDepthbuffer[ct],L,!1);else{const dt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer[ct];o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,ot)}}else{const ct=L.texture.mipmaps;if(ct&&ct.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Kt(E.__webglDepthbuffer,L,!1);else{const dt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,ot)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function $e(L,E,$){const ct=r.get(L);E!==void 0&&At(ct.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&he(L)}function B(L){const E=L.texture,$=r.get(L),ct=r.get(E);L.addEventListener("dispose",F);const dt=L.textures,ot=L.isWebGLCubeRenderTarget===!0,Pt=dt.length>1;if(Pt||(ct.__webglTexture===void 0&&(ct.__webglTexture=o.createTexture()),ct.__version=E.version,h.memory.textures++),ot){$.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[bt]=[];for(let kt=0;kt<E.mipmaps.length;kt++)$.__webglFramebuffer[bt][kt]=o.createFramebuffer()}else $.__webglFramebuffer[bt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let bt=0;bt<E.mipmaps.length;bt++)$.__webglFramebuffer[bt]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let bt=0,kt=dt.length;bt<kt;bt++){const qt=r.get(dt[bt]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&Gt(L)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let bt=0;bt<dt.length;bt++){const kt=dt[bt];$.__webglColorRenderbuffer[bt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[bt]);const qt=c.convert(kt.format,kt.colorSpace),Mt=c.convert(kt.type),Ut=P(kt.internalFormat,qt,Mt,kt.colorSpace,L.isXRRenderTarget===!0),Zt=Ie(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Ut,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+bt,o.RENDERBUFFER,$.__webglColorRenderbuffer[bt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),Kt($.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ot){i.bindTexture(o.TEXTURE_CUBE_MAP,ct.__webglTexture),vt(o.TEXTURE_CUBE_MAP,E);for(let bt=0;bt<6;bt++)if(E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)At($.__webglFramebuffer[bt][kt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,kt);else At($.__webglFramebuffer[bt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);M(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let bt=0,kt=dt.length;bt<kt;bt++){const qt=dt[bt],Mt=r.get(qt);let Ut=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ut=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,Mt.__webglTexture),vt(Ut,qt),At($.__webglFramebuffer,L,qt,o.COLOR_ATTACHMENT0+bt,Ut,0),M(qt)&&g(Ut)}i.unbindTexture()}else{let bt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(bt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(bt,ct.__webglTexture),vt(bt,E),E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)At($.__webglFramebuffer[kt],L,E,o.COLOR_ATTACHMENT0,bt,kt);else At($.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,bt,0);M(E)&&g(bt),i.unbindTexture()}L.depthBuffer&&he(L)}function Ce(L){const E=L.textures;for(let $=0,ct=E.length;$<ct;$++){const dt=E[$];if(M(dt)){const ot=I(L),Pt=r.get(dt).__webglTexture;i.bindTexture(ot,Pt),g(ot),i.unbindTexture()}}}const ae=[],ee=[];function Ot(L){if(L.samples>0){if(Gt(L)===!1){const E=L.textures,$=L.width,ct=L.height;let dt=o.COLOR_BUFFER_BIT;const ot=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(L),bt=E.length>1;if(bt)for(let qt=0;qt<E.length;qt++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const kt=L.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let qt=0;qt<E.length;qt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(dt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(dt|=o.STENCIL_BUFFER_BIT)),bt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[qt]);const Mt=r.get(E[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,$,ct,0,0,$,ct,dt,o.NEAREST),m===!0&&(ae.length=0,ee.length=0,ae.push(o.COLOR_ATTACHMENT0+qt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ae.push(ot),ee.push(ot),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ee)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),bt)for(let qt=0;qt<E.length;qt++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[qt]);const Mt=r.get(E[qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ie(L){return Math.min(l.maxSamples,L.samples)}function Gt(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function re(L){const E=h.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function ke(L,E){const $=L.colorSpace,ct=L.format,dt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==ms&&$!==Da&&(Ee.getTransfer($)===Ne?(ct!==pi||dt!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function Xe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ut,this.resetTextureUnits=nt,this.setTexture2D=lt,this.setTexture2DArray=O,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=$e,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Gt}function AA(o,e){function i(r,l=Da){let c;const h=Ee.getTransfer(l);if(r===Ji)return o.UNSIGNED_BYTE;if(r===Jh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===$h)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Xg)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Wg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Vg)return o.BYTE;if(r===kg)return o.SHORT;if(r===Eo)return o.UNSIGNED_SHORT;if(r===Qh)return o.INT;if(r===fr)return o.UNSIGNED_INT;if(r===ji)return o.FLOAT;if(r===Co)return o.HALF_FLOAT;if(r===qg)return o.ALPHA;if(r===Yg)return o.RGB;if(r===pi)return o.RGBA;if(r===Ao)return o.DEPTH_COMPONENT;if(r===bo)return o.DEPTH_STENCIL;if(r===Zg)return o.RED;if(r===td)return o.RED_INTEGER;if(r===Kg)return o.RG;if(r===ed)return o.RG_INTEGER;if(r===nd)return o.RGBA_INTEGER;if(r===uu||r===cu||r===fu||r===hu)if(h===Ne)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===uu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===uu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===cu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===hu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sh||r===xh||r===Mh||r===yh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Sh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Eh||r===Th||r===Ah)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Eh||r===Th)return h===Ne?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ah)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bh||r===Rh||r===Ch||r===wh||r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===Bh||r===zh||r===Ih||r===Fh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===bh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ch)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Oh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ph)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ih)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Fh)return h===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hh||r===Gh||r===Vh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Hh)return h===Ne?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===kh||r===Xh||r===Wh||r===qh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===kh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Xh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===To?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const bA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RA=`
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

}`;class CA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new lv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Oa({vertexShader:bA,fragmentShader:RA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bi(new Su(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wA extends gs{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,v=null,x=null,y=null,b=null;const C=typeof XRWebGLBinding<"u",M=new CA,g={},I=i.getContextAttributes();let P=null,U=null;const z=[],G=[],F=new Pe;let K=null;const w=new ai;w.viewport=new Je;const R=new ai;R.viewport=new Je;const V=[w,R],nt=new jx;let ut=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let mt=z[tt];return mt===void 0&&(mt=new Jf,z[tt]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(tt){let mt=z[tt];return mt===void 0&&(mt=new Jf,z[tt]=mt),mt.getGripSpace()},this.getHand=function(tt){let mt=z[tt];return mt===void 0&&(mt=new Jf,z[tt]=mt),mt.getHandSpace()};function lt(tt){const mt=G.indexOf(tt.inputSource);if(mt===-1)return;const At=z[mt];At!==void 0&&(At.update(tt.inputSource,tt.frame,p||h),At.dispatchEvent({type:tt.type,data:tt.inputSource}))}function O(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",Z);for(let tt=0;tt<z.length;tt++){const mt=G[tt];mt!==null&&(G[tt]=null,z[tt].disconnect(mt))}ut=null,gt=null,M.reset();for(const tt in g)delete g[tt];e.setRenderTarget(P),y=null,x=null,v=null,l=null,U=null,Ft.stop(),r.isPresenting=!1,e.setPixelRatio(K),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",O),l.addEventListener("inputsourceschange",Z),I.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Kt=null,Wt=null;I.depth&&(Wt=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=I.stencil?bo:Ao,Kt=I.stencil?To:fr);const he={colorFormat:i.RGBA8,depthFormat:Wt,scaleFactor:c};v=this.getBinding(),x=v.createProjectionLayer(he),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new hr(x.textureWidth,x.textureHeight,{format:pi,type:Ji,depthTexture:new ov(x.textureWidth,x.textureHeight,Kt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const At={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new hr(y.framebufferWidth,y.framebufferHeight,{format:pi,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ft.setContext(l),Ft.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Z(tt){for(let mt=0;mt<tt.removed.length;mt++){const At=tt.removed[mt],Kt=G.indexOf(At);Kt>=0&&(G[Kt]=null,z[Kt].disconnect(At))}for(let mt=0;mt<tt.added.length;mt++){const At=tt.added[mt];let Kt=G.indexOf(At);if(Kt===-1){for(let he=0;he<z.length;he++)if(he>=G.length){G.push(At),Kt=he;break}else if(G[he]===null){G[he]=At,Kt=he;break}if(Kt===-1)break}const Wt=z[Kt];Wt&&Wt.connect(At)}}const q=new st,St=new st;function D(tt,mt,At){q.setFromMatrixPosition(mt.matrixWorld),St.setFromMatrixPosition(At.matrixWorld);const Kt=q.distanceTo(St),Wt=mt.projectionMatrix.elements,he=At.projectionMatrix.elements,$e=Wt[14]/(Wt[10]-1),B=Wt[14]/(Wt[10]+1),Ce=(Wt[9]+1)/Wt[5],ae=(Wt[9]-1)/Wt[5],ee=(Wt[8]-1)/Wt[0],Ot=(he[8]+1)/he[0],Ie=$e*ee,Gt=$e*Ot,re=Kt/(-ee+Ot),ke=re*-ee;if(mt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(ke),tt.translateZ(re),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Wt[10]===-1)tt.projectionMatrix.copy(mt.projectionMatrix),tt.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Xe=$e+re,L=B+re,E=Ie-ke,$=Gt+(Kt-ke),ct=Ce*B/L*Xe,dt=ae*B/L*Xe;tt.projectionMatrix.makePerspective(E,$,ct,dt,Xe,L),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function J(tt,mt){mt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(mt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let mt=tt.near,At=tt.far;M.texture!==null&&(M.depthNear>0&&(mt=M.depthNear),M.depthFar>0&&(At=M.depthFar)),nt.near=R.near=w.near=mt,nt.far=R.far=w.far=At,(ut!==nt.near||gt!==nt.far)&&(l.updateRenderState({depthNear:nt.near,depthFar:nt.far}),ut=nt.near,gt=nt.far),nt.layers.mask=tt.layers.mask|6,w.layers.mask=nt.layers.mask&3,R.layers.mask=nt.layers.mask&5;const Kt=tt.parent,Wt=nt.cameras;J(nt,Kt);for(let he=0;he<Wt.length;he++)J(Wt[he],Kt);Wt.length===2?D(nt,w,R):nt.projectionMatrix.copy(w.projectionMatrix),vt(tt,nt,Kt)};function vt(tt,mt,At){At===null?tt.matrix.copy(mt.matrixWorld):(tt.matrix.copy(At.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(mt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(mt.projectionMatrix),tt.projectionMatrixInverse.copy(mt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Yh*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(tt){m=tt,x!==null&&(x.fixedFoveation=tt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(nt)},this.getCameraTexture=function(tt){return g[tt]};let xt=null;function Dt(tt,mt){if(_=mt.getViewerPose(p||h),b=mt,_!==null){const At=_.views;y!==null&&(e.setRenderTargetFramebuffer(U,y.framebuffer),e.setRenderTarget(U));let Kt=!1;At.length!==nt.cameras.length&&(nt.cameras.length=0,Kt=!0);for(let B=0;B<At.length;B++){const Ce=At[B];let ae=null;if(y!==null)ae=y.getViewport(Ce);else{const Ot=v.getViewSubImage(x,Ce);ae=Ot.viewport,B===0&&(e.setRenderTargetTextures(U,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(U))}let ee=V[B];ee===void 0&&(ee=new ai,ee.layers.enable(B),ee.viewport=new Je,V[B]=ee),ee.matrix.fromArray(Ce.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Ce.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ae.x,ae.y,ae.width,ae.height),B===0&&(nt.matrix.copy(ee.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),Kt===!0&&nt.cameras.push(ee)}const Wt=l.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const B=v.getDepthInformation(At[0]);B&&B.isValid&&B.texture&&M.init(B,l.renderState)}if(Wt&&Wt.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let B=0;B<At.length;B++){const Ce=At[B].camera;if(Ce){let ae=g[Ce];ae||(ae=new lv,g[Ce]=ae);const ee=v.getCameraImage(Ce);ae.sourceTexture=ee}}}}for(let At=0;At<z.length;At++){const Kt=G[At],Wt=z[At];Kt!==null&&Wt!==void 0&&Wt.update(Kt,mt,p||h)}xt&&xt(tt,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),b=null}const Ft=new uv;Ft.setAnimationLoop(Dt),this.setAnimationLoop=function(tt){xt=tt},this.dispose=function(){}}}const ir=new $i,DA=new un;function UA(o,e){function i(M,g){M.matrixAutoUpdate===!0&&M.updateMatrix(),g.value.copy(M.matrix)}function r(M,g){g.color.getRGB(M.fogColor.value,iv(o)),g.isFog?(M.fogNear.value=g.near,M.fogFar.value=g.far):g.isFogExp2&&(M.fogDensity.value=g.density)}function l(M,g,I,P,U){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(M,g):g.isMeshToonMaterial?(c(M,g),v(M,g)):g.isMeshPhongMaterial?(c(M,g),_(M,g)):g.isMeshStandardMaterial?(c(M,g),x(M,g),g.isMeshPhysicalMaterial&&y(M,g,U)):g.isMeshMatcapMaterial?(c(M,g),b(M,g)):g.isMeshDepthMaterial?c(M,g):g.isMeshDistanceMaterial?(c(M,g),C(M,g)):g.isMeshNormalMaterial?c(M,g):g.isLineBasicMaterial?(h(M,g),g.isLineDashedMaterial&&d(M,g)):g.isPointsMaterial?m(M,g,I,P):g.isSpriteMaterial?p(M,g):g.isShadowMaterial?(M.color.value.copy(g.color),M.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(M,g){M.opacity.value=g.opacity,g.color&&M.diffuse.value.copy(g.color),g.emissive&&M.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.bumpMap&&(M.bumpMap.value=g.bumpMap,i(g.bumpMap,M.bumpMapTransform),M.bumpScale.value=g.bumpScale,g.side===zn&&(M.bumpScale.value*=-1)),g.normalMap&&(M.normalMap.value=g.normalMap,i(g.normalMap,M.normalMapTransform),M.normalScale.value.copy(g.normalScale),g.side===zn&&M.normalScale.value.negate()),g.displacementMap&&(M.displacementMap.value=g.displacementMap,i(g.displacementMap,M.displacementMapTransform),M.displacementScale.value=g.displacementScale,M.displacementBias.value=g.displacementBias),g.emissiveMap&&(M.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,M.emissiveMapTransform)),g.specularMap&&(M.specularMap.value=g.specularMap,i(g.specularMap,M.specularMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest);const I=e.get(g),P=I.envMap,U=I.envMapRotation;P&&(M.envMap.value=P,ir.copy(U),ir.x*=-1,ir.y*=-1,ir.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),M.envMapRotation.value.setFromMatrix4(DA.makeRotationFromEuler(ir)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=g.reflectivity,M.ior.value=g.ior,M.refractionRatio.value=g.refractionRatio),g.lightMap&&(M.lightMap.value=g.lightMap,M.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,M.lightMapTransform)),g.aoMap&&(M.aoMap.value=g.aoMap,M.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,M.aoMapTransform))}function h(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform))}function d(M,g){M.dashSize.value=g.dashSize,M.totalSize.value=g.dashSize+g.gapSize,M.scale.value=g.scale}function m(M,g,I,P){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.size.value=g.size*I,M.scale.value=P*.5,g.map&&(M.map.value=g.map,i(g.map,M.uvTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function p(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.rotation.value=g.rotation,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function _(M,g){M.specular.value.copy(g.specular),M.shininess.value=Math.max(g.shininess,1e-4)}function v(M,g){g.gradientMap&&(M.gradientMap.value=g.gradientMap)}function x(M,g){M.metalness.value=g.metalness,g.metalnessMap&&(M.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,M.metalnessMapTransform)),M.roughness.value=g.roughness,g.roughnessMap&&(M.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,M.roughnessMapTransform)),g.envMap&&(M.envMapIntensity.value=g.envMapIntensity)}function y(M,g,I){M.ior.value=g.ior,g.sheen>0&&(M.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),M.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(M.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,M.sheenColorMapTransform)),g.sheenRoughnessMap&&(M.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,M.sheenRoughnessMapTransform))),g.clearcoat>0&&(M.clearcoat.value=g.clearcoat,M.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(M.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,M.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(M.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===zn&&M.clearcoatNormalScale.value.negate())),g.dispersion>0&&(M.dispersion.value=g.dispersion),g.iridescence>0&&(M.iridescence.value=g.iridescence,M.iridescenceIOR.value=g.iridescenceIOR,M.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(M.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,M.iridescenceMapTransform)),g.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),g.transmission>0&&(M.transmission.value=g.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(M.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,M.transmissionMapTransform)),M.thickness.value=g.thickness,g.thicknessMap&&(M.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=g.attenuationDistance,M.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(M.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(M.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=g.specularIntensity,M.specularColor.value.copy(g.specularColor),g.specularColorMap&&(M.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,M.specularColorMapTransform)),g.specularIntensityMap&&(M.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,g){g.matcap&&(M.matcap.value=g.matcap)}function C(M,g){const I=e.get(g).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function LA(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,P){const U=P.program;r.uniformBlockBinding(I,U)}function p(I,P){let U=l[I.id];U===void 0&&(b(I),U=_(I),l[I.id]=U,I.addEventListener("dispose",M));const z=P.program;r.updateUBOMapping(I,z);const G=e.render.frame;c[I.id]!==G&&(x(I),c[I.id]=G)}function _(I){const P=v();I.__bindingPointIndex=P;const U=o.createBuffer(),z=I.__size,G=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,z,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,U),U}function v(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const P=l[I.id],U=I.uniforms,z=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let G=0,F=U.length;G<F;G++){const K=Array.isArray(U[G])?U[G]:[U[G]];for(let w=0,R=K.length;w<R;w++){const V=K[w];if(y(V,G,w,z)===!0){const nt=V.__offset,ut=Array.isArray(V.value)?V.value:[V.value];let gt=0;for(let lt=0;lt<ut.length;lt++){const O=ut[lt],Z=C(O);typeof O=="number"||typeof O=="boolean"?(V.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,nt+gt,V.__data)):O.isMatrix3?(V.__data[0]=O.elements[0],V.__data[1]=O.elements[1],V.__data[2]=O.elements[2],V.__data[3]=0,V.__data[4]=O.elements[3],V.__data[5]=O.elements[4],V.__data[6]=O.elements[5],V.__data[7]=0,V.__data[8]=O.elements[6],V.__data[9]=O.elements[7],V.__data[10]=O.elements[8],V.__data[11]=0):(O.toArray(V.__data,gt),gt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,nt,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(I,P,U,z){const G=I.value,F=P+"_"+U;if(z[F]===void 0)return typeof G=="number"||typeof G=="boolean"?z[F]=G:z[F]=G.clone(),!0;{const K=z[F];if(typeof G=="number"||typeof G=="boolean"){if(K!==G)return z[F]=G,!0}else if(K.equals(G)===!1)return K.copy(G),!0}return!1}function b(I){const P=I.uniforms;let U=0;const z=16;for(let F=0,K=P.length;F<K;F++){const w=Array.isArray(P[F])?P[F]:[P[F]];for(let R=0,V=w.length;R<V;R++){const nt=w[R],ut=Array.isArray(nt.value)?nt.value:[nt.value];for(let gt=0,lt=ut.length;gt<lt;gt++){const O=ut[gt],Z=C(O),q=U%z,St=q%Z.boundary,D=q+St;U+=St,D!==0&&z-D<Z.storage&&(U+=z-D),nt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=U,U+=Z.storage}}}const G=U%z;return G>0&&(U+=z-G),I.__size=U,I.__cache={},this}function C(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function M(I){const P=I.target;P.removeEventListener("dispose",M);const U=h.indexOf(P.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function g(){for(const I in l)o.deleteBuffer(l[I]);h=[],l={},c={}}return{bind:m,update:p,dispose:g}}class NA{constructor(e={}){const{canvas:i=_x(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const b=new Uint32Array(4),C=new Int32Array(4);let M=null,g=null;const I=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=La,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let z=!1;this._outputColorSpace=ii;let G=0,F=0,K=null,w=-1,R=null;const V=new Je,nt=new Je;let ut=null;const gt=new Oe(0);let lt=0,O=i.width,Z=i.height,q=1,St=null,D=null;const J=new Je(0,0,O,Z),vt=new Je(0,0,O,Z);let xt=!1;const Dt=new sv;let Ft=!1,tt=!1;const mt=new un,At=new st,Kt=new Je,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function $e(){return K===null?q:1}let B=r;function Ce(A,X){return i.getContext(A,X)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${jh}`),i.addEventListener("webglcontextlost",Rt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",yt,!1),B===null){const X="webgl2";if(B=Ce(X,A),B===null)throw Ce(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ae,ee,Ot,Ie,Gt,re,ke,Xe,L,E,$,ct,dt,ot,Pt,bt,kt,qt,Mt,Ut,Zt,Vt,Ct,se;function k(){ae=new kE(B),ae.init(),Vt=new AA(B,ae),ee=new BE(B,ae,e,Vt),Ot=new EA(B,ae),ee.reversedDepthBuffer&&x&&Ot.buffers.depth.setReversed(!0),Ie=new qE(B),Gt=new cA,re=new TA(B,ae,Ot,Gt,ee,Vt,Ie),ke=new IE(U),Xe=new VE(U),L=new Jx(B),Ct=new OE(B,L),E=new XE(B,L,Ie,Ct),$=new ZE(B,E,L,Ie),Mt=new YE(B,ee,re),bt=new zE(Gt),ct=new uA(U,ke,Xe,ae,ee,Ct,bt),dt=new UA(U,Gt),ot=new hA,Pt=new vA(ae),qt=new NE(U,ke,Xe,Ot,$,y,m),kt=new MA(U,$,ee),se=new LA(B,Ie,ee,Ot),Ut=new PE(B,ae,Ie),Zt=new WE(B,ae,Ie),Ie.programs=ct.programs,U.capabilities=ee,U.extensions=ae,U.properties=Gt,U.renderLists=ot,U.shadowMap=kt,U.state=Ot,U.info=Ie}k();const Tt=new wA(U,B);this.xr=Tt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(O,Z,!1))},this.getSize=function(A){return A.set(O,Z)},this.setSize=function(A,X,at=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,Z=X,i.width=Math.floor(A*q),i.height=Math.floor(X*q),at===!0&&(i.style.width=A+"px",i.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(O*q,Z*q).floor()},this.setDrawingBufferSize=function(A,X,at){O=A,Z=X,q=at,i.width=Math.floor(A*at),i.height=Math.floor(X*at),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,X,at,rt){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,X,at,rt),Ot.viewport(V.copy(J).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,X,at,rt){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,X,at,rt),Ot.scissor(nt.copy(vt).multiplyScalar(q).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(A){Ot.setScissorTest(xt=A)},this.setOpaqueSort=function(A){St=A},this.setTransparentSort=function(A){D=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,at=!0){let rt=0;if(A){let Y=!1;if(K!==null){const Et=K.texture.format;Y=Et===nd||Et===ed||Et===td}if(Y){const Et=K.texture.type,wt=Et===Ji||Et===fr||Et===Eo||Et===To||Et===Jh||Et===$h,zt=qt.getClearColor(),Lt=qt.getClearAlpha(),Qt=zt.r,$t=zt.g,Xt=zt.b;wt?(b[0]=Qt,b[1]=$t,b[2]=Xt,b[3]=Lt,B.clearBufferuiv(B.COLOR,0,b)):(C[0]=Qt,C[1]=$t,C[2]=Xt,C[3]=Lt,B.clearBufferiv(B.COLOR,0,C))}else rt|=B.COLOR_BUFFER_BIT}X&&(rt|=B.DEPTH_BUFFER_BIT),at&&(rt|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Rt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",yt,!1),qt.dispose(),ot.dispose(),Pt.dispose(),Gt.dispose(),ke.dispose(),Xe.dispose(),$.dispose(),Ct.dispose(),se.dispose(),ct.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",rn),Tt.removeEventListener("sessionend",sn),qe.stop()};function Rt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const A=Ie.autoReset,X=kt.enabled,at=kt.autoUpdate,rt=kt.needsUpdate,Y=kt.type;k(),Ie.autoReset=A,kt.enabled=X,kt.autoUpdate=at,kt.needsUpdate=rt,kt.type=Y}function yt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _t(A){const X=A.target;X.removeEventListener("dispose",_t),Ht(X)}function Ht(A){ie(A),Gt.remove(A)}function ie(A){const X=Gt.get(A).programs;X!==void 0&&(X.forEach(function(at){ct.releaseProgram(at)}),A.isShaderMaterial&&ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,at,rt,Y,Et){X===null&&(X=Wt);const wt=Y.isMesh&&Y.matrixWorld.determinant()<0,zt=ta(A,X,at,rt,Y);Ot.setMaterial(rt,wt);let Lt=at.index,Qt=1;if(rt.wireframe===!0){if(Lt=E.getWireframeAttribute(at),Lt===void 0)return;Qt=2}const $t=at.drawRange,Xt=at.attributes.position;let ue=$t.start*Qt,Me=($t.start+$t.count)*Qt;Et!==null&&(ue=Math.max(ue,Et.start*Qt),Me=Math.min(Me,(Et.start+Et.count)*Qt)),Lt!==null?(ue=Math.max(ue,0),Me=Math.min(Me,Lt.count)):Xt!=null&&(ue=Math.max(ue,0),Me=Math.min(Me,Xt.count));const Ge=Me-ue;if(Ge<0||Ge===1/0)return;Ct.setup(Y,rt,zt,at,Lt);let we,ce=Ut;if(Lt!==null&&(we=L.get(Lt),ce=Zt,ce.setIndex(we)),Y.isMesh)rt.wireframe===!0?(Ot.setLineWidth(rt.wireframeLinewidth*$e()),ce.setMode(B.LINES)):ce.setMode(B.TRIANGLES);else if(Y.isLine){let jt=rt.linewidth;jt===void 0&&(jt=1),Ot.setLineWidth(jt*$e()),Y.isLineSegments?ce.setMode(B.LINES):Y.isLineLoop?ce.setMode(B.LINE_LOOP):ce.setMode(B.LINE_STRIP)}else Y.isPoints?ce.setMode(B.POINTS):Y.isSprite&&ce.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Ro("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))ce.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const jt=Y._multiDrawStarts,He=Y._multiDrawCounts,me=Y._multiDrawCount,Mn=Lt?L.get(Lt).bytesPerElement:1,si=Gt.get(rt).currentProgram.getUniforms();for(let Rn=0;Rn<me;Rn++)si.setValue(B,"_gl_DrawID",Rn),ce.render(jt[Rn]/Mn,He[Rn])}else if(Y.isInstancedMesh)ce.renderInstances(ue,Ge,Y.count);else if(at.isInstancedBufferGeometry){const jt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,He=Math.min(at.instanceCount,jt);ce.renderInstances(ue,Ge,He)}else ce.render(ue,Ge)};function Ae(A,X,at){A.transparent===!0&&A.side===Ki&&A.forceSinglePass===!1?(A.side=zn,A.needsUpdate=!0,gi(A,X,at),A.side=Na,A.needsUpdate=!0,gi(A,X,at),A.side=Ki):gi(A,X,at)}this.compile=function(A,X,at=null){at===null&&(at=A),g=Pt.get(at),g.init(X),P.push(g),at.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),A!==at&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const rt=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Et=Y.material;if(Et)if(Array.isArray(Et))for(let wt=0;wt<Et.length;wt++){const zt=Et[wt];Ae(zt,at,Y),rt.add(zt)}else Ae(Et,at,Y),rt.add(Et)}),g=P.pop(),rt},this.compileAsync=function(A,X,at=null){const rt=this.compile(A,X,at);return new Promise(Y=>{function Et(){if(rt.forEach(function(wt){Gt.get(wt).currentProgram.isReady()&&rt.delete(wt)}),rt.size===0){Y(A);return}setTimeout(Et,10)}ae.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let xe=null;function ri(A){xe&&xe(A)}function rn(){qe.stop()}function sn(){qe.start()}const qe=new uv;qe.setAnimationLoop(ri),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(A){xe=A,Tt.setAnimationLoop(A),A===null?qe.stop():qe.start()},Tt.addEventListener("sessionstart",rn),Tt.addEventListener("sessionend",sn),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(X),X=Tt.getCamera()),A.isScene===!0&&A.onBeforeRender(U,A,X,K),g=Pt.get(A,P.length),g.init(X),P.push(g),mt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Dt.setFromProjectionMatrix(mt,Ai,X.reversedDepth),tt=this.localClippingEnabled,Ft=bt.init(this.clippingPlanes,tt),M=ot.get(A,I.length),M.init(),I.push(M),Tt.enabled===!0&&Tt.isPresenting===!0){const Et=U.xr.getDepthSensingMesh();Et!==null&&_i(Et,X,-1/0,U.sortObjects)}_i(A,X,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(St,D),he=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,he&&qt.addToRenderList(M,A),this.info.render.frame++,Ft===!0&&bt.beginShadows();const at=g.state.shadowsArray;kt.render(at,A,X),Ft===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,Y=M.transmissive;if(g.setupLights(),X.isArrayCamera){const Et=X.cameras;if(Y.length>0)for(let wt=0,zt=Et.length;wt<zt;wt++){const Lt=Et[wt];Lo(rt,Y,A,Lt)}he&&qt.render(A);for(let wt=0,zt=Et.length;wt<zt;wt++){const Lt=Et[wt];pr(M,A,Lt,Lt.viewport)}}else Y.length>0&&Lo(rt,Y,A,X),he&&qt.render(A),pr(M,A,X);K!==null&&F===0&&(re.updateMultisampleRenderTarget(K),re.updateRenderTargetMipmap(K)),A.isScene===!0&&A.onAfterRender(U,A,X),Ct.resetDefaultState(),w=-1,R=null,P.pop(),P.length>0?(g=P[P.length-1],Ft===!0&&bt.setGlobalState(U.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?M=I[I.length-1]:M=null};function _i(A,X,at,rt){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Dt.intersectsSprite(A)){rt&&Kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(mt);const wt=$.update(A),zt=A.material;zt.visible&&M.push(A,wt,zt,at,Kt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Dt.intersectsObject(A))){const wt=$.update(A),zt=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Kt.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Kt.copy(wt.boundingSphere.center)),Kt.applyMatrix4(A.matrixWorld).applyMatrix4(mt)),Array.isArray(zt)){const Lt=wt.groups;for(let Qt=0,$t=Lt.length;Qt<$t;Qt++){const Xt=Lt[Qt],ue=zt[Xt.materialIndex];ue&&ue.visible&&M.push(A,wt,ue,at,Kt.z,Xt)}}else zt.visible&&M.push(A,wt,zt,at,Kt.z,null)}}const Et=A.children;for(let wt=0,zt=Et.length;wt<zt;wt++)_i(Et[wt],X,at,rt)}function pr(A,X,at,rt){const Y=A.opaque,Et=A.transmissive,wt=A.transparent;g.setupLightsView(at),Ft===!0&&bt.setGlobalState(U.clippingPlanes,at),rt&&Ot.viewport(V.copy(rt)),Y.length>0&&mr(Y,X,at),Et.length>0&&mr(Et,X,at),wt.length>0&&mr(wt,X,at),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function Lo(A,X,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[rt.id]===void 0&&(g.state.transmissionRenderTarget[rt.id]=new hr(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?Co:Ji,minFilter:ur,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));const Et=g.state.transmissionRenderTarget[rt.id],wt=rt.viewport||V;Et.setSize(wt.z*U.transmissionResolutionScale,wt.w*U.transmissionResolutionScale);const zt=U.getRenderTarget(),Lt=U.getActiveCubeFace(),Qt=U.getActiveMipmapLevel();U.setRenderTarget(Et),U.getClearColor(gt),lt=U.getClearAlpha(),lt<1&&U.setClearColor(16777215,.5),U.clear(),he&&qt.render(at);const $t=U.toneMapping;U.toneMapping=La;const Xt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),g.setupLightsView(rt),Ft===!0&&bt.setGlobalState(U.clippingPlanes,rt),mr(A,at,rt),re.updateMultisampleRenderTarget(Et),re.updateRenderTargetMipmap(Et),ae.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let Me=0,Ge=X.length;Me<Ge;Me++){const we=X[Me],ce=we.object,jt=we.geometry,He=we.material,me=we.group;if(He.side===Ki&&ce.layers.test(rt.layers)){const Mn=He.side;He.side=zn,He.needsUpdate=!0,xs(ce,at,rt,jt,He,me),He.side=Mn,He.needsUpdate=!0,ue=!0}}ue===!0&&(re.updateMultisampleRenderTarget(Et),re.updateRenderTargetMipmap(Et))}U.setRenderTarget(zt,Lt,Qt),U.setClearColor(gt,lt),Xt!==void 0&&(rt.viewport=Xt),U.toneMapping=$t}function mr(A,X,at){const rt=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Et=A.length;Y<Et;Y++){const wt=A[Y],zt=wt.object,Lt=wt.geometry,Qt=wt.group;let $t=wt.material;$t.allowOverride===!0&&rt!==null&&($t=rt),zt.layers.test(at.layers)&&xs(zt,X,at,Lt,$t,Qt)}}function xs(A,X,at,rt,Y,Et){A.onBeforeRender(U,X,at,rt,Y,Et),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(U,X,at,rt,A,Et),Y.transparent===!0&&Y.side===Ki&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,U.renderBufferDirect(at,X,rt,Y,A,Et),Y.side=Na,Y.needsUpdate=!0,U.renderBufferDirect(at,X,rt,Y,A,Et),Y.side=Ki):U.renderBufferDirect(at,X,rt,Y,A,Et),A.onAfterRender(U,X,at,rt,Y,Et)}function gi(A,X,at){X.isScene!==!0&&(X=Wt);const rt=Gt.get(A),Y=g.state.lights,Et=g.state.shadowsArray,wt=Y.state.version,zt=ct.getParameters(A,Y.state,Et,X,at),Lt=ct.getProgramCacheKey(zt);let Qt=rt.programs;rt.environment=A.isMeshStandardMaterial?X.environment:null,rt.fog=X.fog,rt.envMap=(A.isMeshStandardMaterial?Xe:ke).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",_t),Qt=new Map,rt.programs=Qt);let $t=Qt.get(Lt);if($t!==void 0){if(rt.currentProgram===$t&&rt.lightsStateVersion===wt)return Ci(A,zt),$t}else zt.uniforms=ct.getUniforms(A),A.onBeforeCompile(zt,U),$t=ct.acquireProgram(zt,Lt),Qt.set(Lt,$t),rt.uniforms=zt.uniforms;const Xt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xt.clippingPlanes=bt.uniform),Ci(A,zt),rt.needsLights=ea(A),rt.lightsStateVersion=wt,rt.needsLights&&(Xt.ambientLightColor.value=Y.state.ambient,Xt.lightProbe.value=Y.state.probe,Xt.directionalLights.value=Y.state.directional,Xt.directionalLightShadows.value=Y.state.directionalShadow,Xt.spotLights.value=Y.state.spot,Xt.spotLightShadows.value=Y.state.spotShadow,Xt.rectAreaLights.value=Y.state.rectArea,Xt.ltc_1.value=Y.state.rectAreaLTC1,Xt.ltc_2.value=Y.state.rectAreaLTC2,Xt.pointLights.value=Y.state.point,Xt.pointLightShadows.value=Y.state.pointShadow,Xt.hemisphereLights.value=Y.state.hemi,Xt.directionalShadowMap.value=Y.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xt.spotShadowMap.value=Y.state.spotShadowMap,Xt.spotLightMatrix.value=Y.state.spotLightMatrix,Xt.spotLightMap.value=Y.state.spotLightMap,Xt.pointShadowMap.value=Y.state.pointShadowMap,Xt.pointShadowMatrix.value=Y.state.pointShadowMatrix),rt.currentProgram=$t,rt.uniformsList=null,$t}function _r(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=du.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Ci(A,X){const at=Gt.get(A);at.outputColorSpace=X.outputColorSpace,at.batching=X.batching,at.batchingColor=X.batchingColor,at.instancing=X.instancing,at.instancingColor=X.instancingColor,at.instancingMorph=X.instancingMorph,at.skinning=X.skinning,at.morphTargets=X.morphTargets,at.morphNormals=X.morphNormals,at.morphColors=X.morphColors,at.morphTargetsCount=X.morphTargetsCount,at.numClippingPlanes=X.numClippingPlanes,at.numIntersection=X.numClipIntersection,at.vertexAlphas=X.vertexAlphas,at.vertexTangents=X.vertexTangents,at.toneMapping=X.toneMapping}function ta(A,X,at,rt,Y){X.isScene!==!0&&(X=Wt),re.resetTextureUnits();const Et=X.fog,wt=rt.isMeshStandardMaterial?X.environment:null,zt=K===null?U.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ms,Lt=(rt.isMeshStandardMaterial?Xe:ke).get(rt.envMap||wt),Qt=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,$t=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Xt=!!at.morphAttributes.position,ue=!!at.morphAttributes.normal,Me=!!at.morphAttributes.color;let Ge=La;rt.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ge=U.toneMapping);const we=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ce=we!==void 0?we.length:0,jt=Gt.get(rt),He=g.state.lights;if(Ft===!0&&(tt===!0||A!==R)){const Ye=A===R&&rt.id===w;bt.setState(rt,A,Ye)}let me=!1;rt.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==He.state.version||jt.outputColorSpace!==zt||Y.isBatchedMesh&&jt.batching===!1||!Y.isBatchedMesh&&jt.batching===!0||Y.isBatchedMesh&&jt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&jt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&jt.instancing===!1||!Y.isInstancedMesh&&jt.instancing===!0||Y.isSkinnedMesh&&jt.skinning===!1||!Y.isSkinnedMesh&&jt.skinning===!0||Y.isInstancedMesh&&jt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&jt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&jt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&jt.instancingMorph===!1&&Y.morphTexture!==null||jt.envMap!==Lt||rt.fog===!0&&jt.fog!==Et||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==bt.numPlanes||jt.numIntersection!==bt.numIntersection)||jt.vertexAlphas!==Qt||jt.vertexTangents!==$t||jt.morphTargets!==Xt||jt.morphNormals!==ue||jt.morphColors!==Me||jt.toneMapping!==Ge||jt.morphTargetsCount!==ce)&&(me=!0):(me=!0,jt.__version=rt.version);let Mn=jt.currentProgram;me===!0&&(Mn=gi(rt,X,Y));let si=!1,Rn=!1,hn=!1;const Be=Mn.getUniforms(),Cn=jt.uniforms;if(Ot.useProgram(Mn.program)&&(si=!0,Rn=!0,hn=!0),rt.id!==w&&(w=rt.id,Rn=!0),si||R!==A){Ot.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Be.setValue(B,"projectionMatrix",A.projectionMatrix),Be.setValue(B,"viewMatrix",A.matrixWorldInverse);const gn=Be.map.cameraPosition;gn!==void 0&&gn.setValue(B,At.setFromMatrixPosition(A.matrixWorld)),ee.logarithmicDepthBuffer&&Be.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Be.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Rn=!0,hn=!0)}if(Y.isSkinnedMesh){Be.setOptional(B,Y,"bindMatrix"),Be.setOptional(B,Y,"bindMatrixInverse");const Ye=Y.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),Be.setValue(B,"boneTexture",Ye.boneTexture,re))}Y.isBatchedMesh&&(Be.setOptional(B,Y,"batchingTexture"),Be.setValue(B,"batchingTexture",Y._matricesTexture,re),Be.setOptional(B,Y,"batchingIdTexture"),Be.setValue(B,"batchingIdTexture",Y._indirectTexture,re),Be.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Be.setValue(B,"batchingColorTexture",Y._colorsTexture,re));const yn=at.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Mt.update(Y,at,Mn),(Rn||jt.receiveShadow!==Y.receiveShadow)&&(jt.receiveShadow=Y.receiveShadow,Be.setValue(B,"receiveShadow",Y.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Cn.envMap.value=Lt,Cn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&X.environment!==null&&(Cn.envMapIntensity.value=X.environmentIntensity),Rn&&(Be.setValue(B,"toneMappingExposure",U.toneMappingExposure),jt.needsLights&&Pa(Cn,hn),Et&&rt.fog===!0&&dt.refreshFogUniforms(Cn,Et),dt.refreshMaterialUniforms(Cn,rt,q,Z,g.state.transmissionRenderTarget[A.id]),du.upload(B,_r(jt),Cn,re)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(du.upload(B,_r(jt),Cn,re),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Be.setValue(B,"center",Y.center),Be.setValue(B,"modelViewMatrix",Y.modelViewMatrix),Be.setValue(B,"normalMatrix",Y.normalMatrix),Be.setValue(B,"modelMatrix",Y.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Ye=rt.uniformsGroups;for(let gn=0,gr=Ye.length;gn<gr;gn++){const Un=Ye[gn];se.update(Un,Mn),se.bind(Un,Mn)}}return Mn}function Pa(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function ea(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,X,at){const rt=Gt.get(A);rt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Gt.get(A.texture).__webglTexture=X,Gt.get(A.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const at=Gt.get(A);at.__webglFramebuffer=X,at.__useDefaultFramebuffer=X===void 0};const tn=B.createFramebuffer();this.setRenderTarget=function(A,X=0,at=0){K=A,G=X,F=at;let rt=!0,Y=null,Et=!1,wt=!1;if(A){const Lt=Gt.get(A);if(Lt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(B.FRAMEBUFFER,null),rt=!1;else if(Lt.__webglFramebuffer===void 0)re.setupRenderTarget(A);else if(Lt.__hasExternalTextures)re.rebindTextures(A,Gt.get(A.texture).__webglTexture,Gt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xt=A.depthTexture;if(Lt.__boundDepthTexture!==Xt){if(Xt!==null&&Gt.has(Xt)&&(A.width!==Xt.image.width||A.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(A)}}const Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(wt=!0);const $t=Gt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[X])?Y=$t[X][at]:Y=$t[X],Et=!0):A.samples>0&&re.useMultisampledRTT(A)===!1?Y=Gt.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?Y=$t[at]:Y=$t,V.copy(A.viewport),nt.copy(A.scissor),ut=A.scissorTest}else V.copy(J).multiplyScalar(q).floor(),nt.copy(vt).multiplyScalar(q).floor(),ut=xt;if(at!==0&&(Y=tn),Ot.bindFramebuffer(B.FRAMEBUFFER,Y)&&rt&&Ot.drawBuffers(A,Y),Ot.viewport(V),Ot.scissor(nt),Ot.setScissorTest(ut),Et){const Lt=Gt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Lt.__webglTexture,at)}else if(wt){const Lt=X;for(let Qt=0;Qt<A.textures.length;Qt++){const $t=Gt.get(A.textures[Qt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Qt,$t.__webglTexture,at,Lt)}}else if(A!==null&&at!==0){const Lt=Gt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Lt.__webglTexture,at)}w=-1},this.readRenderTargetPixels=function(A,X,at,rt,Y,Et,wt,zt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt){Ot.bindFramebuffer(B.FRAMEBUFFER,Lt);try{const Qt=A.textures[zt],$t=Qt.format,Xt=Qt.type;if(!ee.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-rt&&at>=0&&at<=A.height-Y&&(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+zt),B.readPixels(X,at,rt,Y,Vt.convert($t),Vt.convert(Xt),Et))}finally{const Qt=K!==null?Gt.get(K).__webglFramebuffer:null;Ot.bindFramebuffer(B.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(A,X,at,rt,Y,Et,wt,zt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt)if(X>=0&&X<=A.width-rt&&at>=0&&at<=A.height-Y){Ot.bindFramebuffer(B.FRAMEBUFFER,Lt);const Qt=A.textures[zt],$t=Qt.format,Xt=Qt.type;if(!ee.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ue),B.bufferData(B.PIXEL_PACK_BUFFER,Et.byteLength,B.STREAM_READ),A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+zt),B.readPixels(X,at,rt,Y,Vt.convert($t),Vt.convert(Xt),0);const Me=K!==null?Gt.get(K).__webglFramebuffer:null;Ot.bindFramebuffer(B.FRAMEBUFFER,Me);const Ge=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await gx(B,Ge,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ue),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Et),B.deleteBuffer(ue),B.deleteSync(Ge),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,at=0){const rt=Math.pow(2,-at),Y=Math.floor(A.image.width*rt),Et=Math.floor(A.image.height*rt),wt=X!==null?X.x:0,zt=X!==null?X.y:0;re.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,at,0,0,wt,zt,Y,Et),Ot.unbindTexture()};const No=B.createFramebuffer(),Oo=B.createFramebuffer();this.copyTextureToTexture=function(A,X,at=null,rt=null,Y=0,Et=null){Et===null&&(Y!==0?(Ro("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Y,Y=0):Et=0);let wt,zt,Lt,Qt,$t,Xt,ue,Me,Ge;const we=A.isCompressedTexture?A.mipmaps[Et]:A.image;if(at!==null)wt=at.max.x-at.min.x,zt=at.max.y-at.min.y,Lt=at.isBox3?at.max.z-at.min.z:1,Qt=at.min.x,$t=at.min.y,Xt=at.isBox3?at.min.z:0;else{const yn=Math.pow(2,-Y);wt=Math.floor(we.width*yn),zt=Math.floor(we.height*yn),A.isDataArrayTexture?Lt=we.depth:A.isData3DTexture?Lt=Math.floor(we.depth*yn):Lt=1,Qt=0,$t=0,Xt=0}rt!==null?(ue=rt.x,Me=rt.y,Ge=rt.z):(ue=0,Me=0,Ge=0);const ce=Vt.convert(X.format),jt=Vt.convert(X.type);let He;X.isData3DTexture?(re.setTexture3D(X,0),He=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(re.setTexture2DArray(X,0),He=B.TEXTURE_2D_ARRAY):(re.setTexture2D(X,0),He=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const me=B.getParameter(B.UNPACK_ROW_LENGTH),Mn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),si=B.getParameter(B.UNPACK_SKIP_PIXELS),Rn=B.getParameter(B.UNPACK_SKIP_ROWS),hn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,we.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,we.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Qt),B.pixelStorei(B.UNPACK_SKIP_ROWS,$t),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xt);const Be=A.isDataArrayTexture||A.isData3DTexture,Cn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const yn=Gt.get(A),Ye=Gt.get(X),gn=Gt.get(yn.__renderTarget),gr=Gt.get(Ye.__renderTarget);Ot.bindFramebuffer(B.READ_FRAMEBUFFER,gn.__webglFramebuffer),Ot.bindFramebuffer(B.DRAW_FRAMEBUFFER,gr.__webglFramebuffer);for(let Un=0;Un<Lt;Un++)Be&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Gt.get(A).__webglTexture,Y,Xt+Un),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Gt.get(X).__webglTexture,Et,Ge+Un)),B.blitFramebuffer(Qt,$t,wt,zt,ue,Me,wt,zt,B.DEPTH_BUFFER_BIT,B.NEAREST);Ot.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||Gt.has(A)){const yn=Gt.get(A),Ye=Gt.get(X);Ot.bindFramebuffer(B.READ_FRAMEBUFFER,No),Ot.bindFramebuffer(B.DRAW_FRAMEBUFFER,Oo);for(let gn=0;gn<Lt;gn++)Be?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,yn.__webglTexture,Y,Xt+gn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,yn.__webglTexture,Y),Cn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ye.__webglTexture,Et,Ge+gn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ye.__webglTexture,Et),Y!==0?B.blitFramebuffer(Qt,$t,wt,zt,ue,Me,wt,zt,B.COLOR_BUFFER_BIT,B.NEAREST):Cn?B.copyTexSubImage3D(He,Et,ue,Me,Ge+gn,Qt,$t,wt,zt):B.copyTexSubImage2D(He,Et,ue,Me,Qt,$t,wt,zt);Ot.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Cn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(He,Et,ue,Me,Ge,wt,zt,Lt,ce,jt,we.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(He,Et,ue,Me,Ge,wt,zt,Lt,ce,we.data):B.texSubImage3D(He,Et,ue,Me,Ge,wt,zt,Lt,ce,jt,we):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Et,ue,Me,wt,zt,ce,jt,we.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Et,ue,Me,we.width,we.height,ce,we.data):B.texSubImage2D(B.TEXTURE_2D,Et,ue,Me,wt,zt,ce,jt,we);B.pixelStorei(B.UNPACK_ROW_LENGTH,me),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Mn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,si),B.pixelStorei(B.UNPACK_SKIP_ROWS,Rn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,hn),Et===0&&X.generateMipmaps&&B.generateMipmap(He),Ot.unbindTexture()},this.initRenderTarget=function(A){Gt.get(A).__webglFramebuffer===void 0&&re.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?re.setTextureCube(A,0):A.isData3DTexture?re.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?re.setTexture2DArray(A,0):re.setTexture2D(A,0),Ot.unbindTexture()},this.resetState=function(){G=0,F=0,K=null,Ot.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ee._getUnpackColorSpace()}}const OA=()=>{const o=z_.useRef(null);return z_.useEffect(()=>{const e=o.current.clientWidth,i=o.current.clientHeight,r=new kx,l=new ai(75,e/i,.1,1e3);l.position.z=2;const c=new NA({antialias:!0});c.setSize(e,i),o.current.appendChild(c.domElement);const h=new vs,d=new rd({color:65280}),m=new bi(h,d);r.add(m);let p;const _=()=>{m.rotation.x+=.01,m.rotation.y+=.01,c.render(r,l),p=requestAnimationFrame(_)};return _(),()=>{cancelAnimationFrame(p),c.dispose(),o.current.removeChild(c.domElement)}},[]),yo.jsx("div",{ref:o,style:{width:"100vw",height:"100vh"}})},PA=()=>yo.jsxs("div",{style:{width:"100vw",height:"100vh",margin:0},children:[yo.jsx("h1",{style:{position:"absolute",zIndex:1,color:"#fff",margin:20},children:"ThreeJS + React Starter"}),yo.jsx(OA,{})]}),BA=bS.createRoot(document.getElementById("root"));BA.render(yo.jsx(PA,{}));
