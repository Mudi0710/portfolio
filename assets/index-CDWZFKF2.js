(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();function Hn(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const he={},Zt=[],dt=()=>{},ho=()=>!1,zs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Js=e=>e.startsWith("onUpdate:"),Ee=Object.assign,Vn=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Kl=Object.prototype.hasOwnProperty,oe=(e,t)=>Kl.call(e,t),H=Array.isArray,es=e=>Ts(e)==="[object Map]",go=e=>Ts(e)==="[object Set]",_i=e=>Ts(e)==="[object Date]",W=e=>typeof e=="function",be=e=>typeof e=="string",_t=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",mo=e=>(le(e)||W(e))&&W(e.then)&&W(e.catch),vo=Object.prototype.toString,Ts=e=>vo.call(e),Wl=e=>Ts(e).slice(8,-1),bo=e=>Ts(e)==="[object Object]",Kn=e=>be(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_s=Hn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qs=e=>{const t=Object.create(null);return(s=>t[s]||(t[s]=e(s)))},ql=/-\w/g,Ue=Qs(e=>e.replace(ql,t=>t.slice(1).toUpperCase())),Gl=/\B([A-Z])/g,Gt=Qs(e=>e.replace(Gl,"-$1").toLowerCase()),Ys=Qs(e=>e.charAt(0).toUpperCase()+e.slice(1)),pn=Qs(e=>e?`on${Ys(e)}`:""),pt=(e,t)=>!Object.is(e,t),dn=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},yo=(e,t,s,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:s})},Xl=e=>{const t=parseFloat(e);return isNaN(t)?e:t},zl=e=>{const t=be(e)?Number(e):NaN;return isNaN(t)?e:t};let hi;const Zs=()=>hi||(hi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wn(e){if(H(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],i=be(n)?Zl(n):Wn(n);if(i)for(const o in i)t[o]=i[o]}return t}else if(be(e)||le(e))return e}const Jl=/;(?![^(]*\))/g,Ql=/:([^]+)/,Yl=/\/\*[^]*?\*\//g;function Zl(e){const t={};return e.replace(Yl,"").split(Jl).forEach(s=>{if(s){const n=s.split(Ql);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function we(e){let t="";if(be(e))t=e;else if(H(e))for(let s=0;s<e.length;s++){const n=we(e[s]);n&&(t+=n+" ")}else if(le(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const er="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tr=Hn(er);function So(e){return!!e||e===""}function sr(e,t){if(e.length!==t.length)return!1;let s=!0;for(let n=0;s&&n<e.length;n++)s=qn(e[n],t[n]);return s}function qn(e,t){if(e===t)return!0;let s=_i(e),n=_i(t);if(s||n)return s&&n?e.getTime()===t.getTime():!1;if(s=_t(e),n=_t(t),s||n)return e===t;if(s=H(e),n=H(t),s||n)return s&&n?sr(e,t):!1;if(s=le(e),n=le(t),s||n){if(!s||!n)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const l in e){const r=e.hasOwnProperty(l),a=t.hasOwnProperty(l);if(r&&!a||!r&&a||!qn(e[l],t[l]))return!1}}return String(e)===String(t)}const Ao=e=>!!(e&&e.__v_isRef===!0),q=e=>be(e)?e:e==null?"":H(e)||le(e)&&(e.toString===vo||!W(e.toString))?Ao(e)?q(e.value):JSON.stringify(e,wo,2):String(e),wo=(e,t)=>Ao(t)?wo(e,t.value):es(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,i],o)=>(s[un(n,o)+" =>"]=i,s),{})}:go(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>un(s))}:_t(t)?un(t):le(t)&&!H(t)&&!bo(t)?String(t):t,un=(e,t="")=>{var s;return _t(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};let Be;class nr{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Be,!t&&Be&&(this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=Be;try{return Be=this,t()}finally{Be=s}}}on(){++this._on===1&&(this.prevScope=Be,Be=this)}off(){this._on>0&&--this._on===0&&(Be=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(this.effects.length=0,s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function ir(){return Be}let _e;const fn=new WeakSet;class Eo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Be&&Be.active&&Be.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fn.has(this)&&(fn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||xo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gi(this),Io(this);const t=_e,s=Je;_e=this,Je=!0;try{return this.fn()}finally{Po(this),_e=t,Je=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)zn(t);this.deps=this.depsTail=void 0,gi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xn(this)&&this.run()}get dirty(){return xn(this)}}let Co=0,hs,gs;function xo(e,t=!1){if(e.flags|=8,t){e.next=gs,gs=e;return}e.next=hs,hs=e}function Gn(){Co++}function Xn(){if(--Co>0)return;if(gs){let t=gs;for(gs=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;hs;){let t=hs;for(hs=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=s}}if(e)throw e}function Io(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Po(e){let t,s=e.depsTail,n=s;for(;n;){const i=n.prevDep;n.version===-1?(n===s&&(s=i),zn(n),or(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}e.deps=t,e.depsTail=s}function xn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ro(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ro(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===As)||(e.globalVersion=As,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!xn(e))))return;e.flags|=2;const t=e.dep,s=_e,n=Je;_e=e,Je=!0;try{Io(e);const i=e.fn(e._value);(t.version===0||pt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{_e=s,Je=n,Po(e),e.flags&=-3}}function zn(e,t=!1){const{dep:s,prevSub:n,nextSub:i}=e;if(n&&(n.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=n,e.nextSub=void 0),s.subs===e&&(s.subs=n,!n&&s.computed)){s.computed.flags&=-5;for(let o=s.computed.deps;o;o=o.nextDep)zn(o,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function or(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let Je=!0;const To=[];function wt(){To.push(Je),Je=!1}function Et(){const e=To.pop();Je=e===void 0?!0:e}function gi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=_e;_e=void 0;try{t()}finally{_e=s}}}let As=0;class lr{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Jn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!_e||!Je||_e===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==_e)s=this.activeLink=new lr(_e,this),_e.deps?(s.prevDep=_e.depsTail,_e.depsTail.nextDep=s,_e.depsTail=s):_e.deps=_e.depsTail=s,ko(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const n=s.nextDep;n.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=n),s.prevDep=_e.depsTail,s.nextDep=void 0,_e.depsTail.nextDep=s,_e.depsTail=s,_e.deps===s&&(_e.deps=n)}return s}trigger(t){this.version++,As++,this.notify(t)}notify(t){Gn();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{Xn()}}}function ko(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)ko(n)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const In=new WeakMap,Kt=Symbol(""),Pn=Symbol(""),ws=Symbol("");function Re(e,t,s){if(Je&&_e){let n=In.get(e);n||In.set(e,n=new Map);let i=n.get(s);i||(n.set(s,i=new Jn),i.map=n,i.key=s),i.track()}}function St(e,t,s,n,i,o){const l=In.get(e);if(!l){As++;return}const r=a=>{a&&a.trigger()};if(Gn(),t==="clear")l.forEach(r);else{const a=H(e),d=a&&Kn(s);if(a&&s==="length"){const c=Number(n);l.forEach((f,h)=>{(h==="length"||h===ws||!_t(h)&&h>=c)&&r(f)})}else switch((s!==void 0||l.has(void 0))&&r(l.get(s)),d&&r(l.get(ws)),t){case"add":a?d&&r(l.get("length")):(r(l.get(Kt)),es(e)&&r(l.get(Pn)));break;case"delete":a||(r(l.get(Kt)),es(e)&&r(l.get(Pn)));break;case"set":es(e)&&r(l.get(Kt));break}}Xn()}function Jt(e){const t=ee(e);return t===e?t:(Re(t,"iterate",ws),qe(e)?t:t.map(Qe))}function en(e){return Re(e=ee(e),"iterate",ws),e}function at(e,t){return Ct(e)?ns(Wt(e)?Qe(t):t):Qe(t)}const rr={__proto__:null,[Symbol.iterator](){return _n(this,Symbol.iterator,e=>at(this,e))},concat(...e){return Jt(this).concat(...e.map(t=>H(t)?Jt(t):t))},entries(){return _n(this,"entries",e=>(e[1]=at(this,e[1]),e))},every(e,t){return gt(this,"every",e,t,void 0,arguments)},filter(e,t){return gt(this,"filter",e,t,s=>s.map(n=>at(this,n)),arguments)},find(e,t){return gt(this,"find",e,t,s=>at(this,s),arguments)},findIndex(e,t){return gt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return gt(this,"findLast",e,t,s=>at(this,s),arguments)},findLastIndex(e,t){return gt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return gt(this,"forEach",e,t,void 0,arguments)},includes(...e){return hn(this,"includes",e)},indexOf(...e){return hn(this,"indexOf",e)},join(e){return Jt(this).join(e)},lastIndexOf(...e){return hn(this,"lastIndexOf",e)},map(e,t){return gt(this,"map",e,t,void 0,arguments)},pop(){return cs(this,"pop")},push(...e){return cs(this,"push",e)},reduce(e,...t){return mi(this,"reduce",e,t)},reduceRight(e,...t){return mi(this,"reduceRight",e,t)},shift(){return cs(this,"shift")},some(e,t){return gt(this,"some",e,t,void 0,arguments)},splice(...e){return cs(this,"splice",e)},toReversed(){return Jt(this).toReversed()},toSorted(e){return Jt(this).toSorted(e)},toSpliced(...e){return Jt(this).toSpliced(...e)},unshift(...e){return cs(this,"unshift",e)},values(){return _n(this,"values",e=>at(this,e))}};function _n(e,t,s){const n=en(e),i=n[t]();return n!==e&&!qe(e)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.done||(o.value=s(o.value)),o}),i}const ar=Array.prototype;function gt(e,t,s,n,i,o){const l=en(e),r=l!==e&&!qe(e),a=l[t];if(a!==ar[t]){const f=a.apply(e,o);return r?Qe(f):f}let d=s;l!==e&&(r?d=function(f,h){return s.call(this,at(e,f),h,e)}:s.length>2&&(d=function(f,h){return s.call(this,f,h,e)}));const c=a.call(l,d,n);return r&&i?i(c):c}function mi(e,t,s,n){const i=en(e),o=i!==e&&!qe(e);let l=s,r=!1;i!==e&&(o?(r=n.length===0,l=function(d,c,f){return r&&(r=!1,d=at(e,d)),s.call(this,d,at(e,c),f,e)}):s.length>3&&(l=function(d,c,f){return s.call(this,d,c,f,e)}));const a=i[t](l,...n);return r?at(e,a):a}function hn(e,t,s){const n=ee(e);Re(n,"iterate",ws);const i=n[t](...s);return(i===-1||i===!1)&&Zn(s[0])?(s[0]=ee(s[0]),n[t](...s)):i}function cs(e,t,s=[]){wt(),Gn();const n=ee(e)[t].apply(e,s);return Xn(),Et(),n}const cr=Hn("__proto__,__v_isRef,__isVue"),jo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(_t));function pr(e){_t(e)||(e=String(e));const t=ee(this);return Re(t,"has",e),t.hasOwnProperty(e)}class Do{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,n){if(s==="__v_skip")return t.__v_skip;const i=this._isReadonly,o=this._isShallow;if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return o;if(s==="__v_raw")return n===(i?o?yr:Uo:o?$o:Mo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const l=H(t);if(!i){let a;if(l&&(a=rr[s]))return a;if(s==="hasOwnProperty")return pr}const r=Reflect.get(t,s,ke(t)?t:n);if((_t(s)?jo.has(s):cr(s))||(i||Re(t,"get",s),o))return r;if(ke(r)){const a=l&&Kn(s)?r:r.value;return i&&le(a)?Tn(a):a}return le(r)?i?Tn(r):tn(r):r}}class Oo extends Do{constructor(t=!1){super(!1,t)}set(t,s,n,i){let o=t[s];const l=H(t)&&Kn(s);if(!this._isShallow){const d=Ct(o);if(!qe(n)&&!Ct(n)&&(o=ee(o),n=ee(n)),!l&&ke(o)&&!ke(n))return d||(o.value=n),!0}const r=l?Number(s)<t.length:oe(t,s),a=Reflect.set(t,s,n,ke(t)?t:i);return t===ee(i)&&(r?pt(n,o)&&St(t,"set",s,n):St(t,"add",s,n)),a}deleteProperty(t,s){const n=oe(t,s);t[s];const i=Reflect.deleteProperty(t,s);return i&&n&&St(t,"delete",s,void 0),i}has(t,s){const n=Reflect.has(t,s);return(!_t(s)||!jo.has(s))&&Re(t,"has",s),n}ownKeys(t){return Re(t,"iterate",H(t)?"length":Kt),Reflect.ownKeys(t)}}class dr extends Do{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const ur=new Oo,fr=new dr,_r=new Oo(!0);const Rn=e=>e,Ds=e=>Reflect.getPrototypeOf(e);function hr(e,t,s){return function(...n){const i=this.__v_raw,o=ee(i),l=es(o),r=e==="entries"||e===Symbol.iterator&&l,a=e==="keys"&&l,d=i[e](...n),c=s?Rn:t?ns:Qe;return!t&&Re(o,"iterate",a?Pn:Kt),Ee(Object.create(d),{next(){const{value:f,done:h}=d.next();return h?{value:f,done:h}:{value:r?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function Os(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function gr(e,t){const s={get(i){const o=this.__v_raw,l=ee(o),r=ee(i);e||(pt(i,r)&&Re(l,"get",i),Re(l,"get",r));const{has:a}=Ds(l),d=t?Rn:e?ns:Qe;if(a.call(l,i))return d(o.get(i));if(a.call(l,r))return d(o.get(r));o!==l&&o.get(i)},get size(){const i=this.__v_raw;return!e&&Re(ee(i),"iterate",Kt),i.size},has(i){const o=this.__v_raw,l=ee(o),r=ee(i);return e||(pt(i,r)&&Re(l,"has",i),Re(l,"has",r)),i===r?o.has(i):o.has(i)||o.has(r)},forEach(i,o){const l=this,r=l.__v_raw,a=ee(r),d=t?Rn:e?ns:Qe;return!e&&Re(a,"iterate",Kt),r.forEach((c,f)=>i.call(o,d(c),d(f),l))}};return Ee(s,e?{add:Os("add"),set:Os("set"),delete:Os("delete"),clear:Os("clear")}:{add(i){const o=ee(this),l=Ds(o),r=ee(i),a=!t&&!qe(i)&&!Ct(i)?r:i;return l.has.call(o,a)||pt(i,a)&&l.has.call(o,i)||pt(r,a)&&l.has.call(o,r)||(o.add(a),St(o,"add",a,a)),this},set(i,o){!t&&!qe(o)&&!Ct(o)&&(o=ee(o));const l=ee(this),{has:r,get:a}=Ds(l);let d=r.call(l,i);d||(i=ee(i),d=r.call(l,i));const c=a.call(l,i);return l.set(i,o),d?pt(o,c)&&St(l,"set",i,o):St(l,"add",i,o),this},delete(i){const o=ee(this),{has:l,get:r}=Ds(o);let a=l.call(o,i);a||(i=ee(i),a=l.call(o,i)),r&&r.call(o,i);const d=o.delete(i);return a&&St(o,"delete",i,void 0),d},clear(){const i=ee(this),o=i.size!==0,l=i.clear();return o&&St(i,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(i=>{s[i]=hr(i,e,t)}),s}function Qn(e,t){const s=gr(e,t);return(n,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(oe(s,i)&&i in n?s:n,i,o)}const mr={get:Qn(!1,!1)},vr={get:Qn(!1,!0)},br={get:Qn(!0,!1)};const Mo=new WeakMap,$o=new WeakMap,Uo=new WeakMap,yr=new WeakMap;function Sr(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ar(e){return e.__v_skip||!Object.isExtensible(e)?0:Sr(Wl(e))}function tn(e){return Ct(e)?e:Yn(e,!1,ur,mr,Mo)}function Lo(e){return Yn(e,!1,_r,vr,$o)}function Tn(e){return Yn(e,!0,fr,br,Uo)}function Yn(e,t,s,n,i){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=Ar(e);if(o===0)return e;const l=i.get(e);if(l)return l;const r=new Proxy(e,o===2?n:s);return i.set(e,r),r}function Wt(e){return Ct(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ct(e){return!!(e&&e.__v_isReadonly)}function qe(e){return!!(e&&e.__v_isShallow)}function Zn(e){return e?!!e.__v_raw:!1}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function wr(e){return!oe(e,"__v_skip")&&Object.isExtensible(e)&&yo(e,"__v_skip",!0),e}const Qe=e=>le(e)?tn(e):e,ns=e=>le(e)?Tn(e):e;function ke(e){return e?e.__v_isRef===!0:!1}function Ie(e){return No(e,!1)}function Er(e){return No(e,!0)}function No(e,t){return ke(e)?e:new Cr(e,t)}class Cr{constructor(t,s){this.dep=new Jn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:ee(t),this._value=s?t:Qe(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,n=this.__v_isShallow||qe(t)||Ct(t);t=n?t:ee(t),pt(t,s)&&(this._rawValue=t,this._value=n?t:Qe(t),this.dep.trigger())}}function ue(e){return ke(e)?e.value:e}const xr={get:(e,t,s)=>t==="__v_raw"?e:ue(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const i=e[t];return ke(i)&&!ke(s)?(i.value=s,!0):Reflect.set(e,t,s,n)}};function Bo(e){return Wt(e)?e:new Proxy(e,xr)}class Ir{constructor(t,s,n){this.fn=t,this.setter=s,this._value=void 0,this.dep=new Jn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=As-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return xo(this,!0),!0}get value(){const t=this.dep.track();return Ro(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Pr(e,t,s=!1){let n,i;return W(e)?n=e:(n=e.get,i=e.set),new Ir(n,i,s)}const Ms={},Bs=new WeakMap;let Ft;function Rr(e,t=!1,s=Ft){if(s){let n=Bs.get(s);n||Bs.set(s,n=[]),n.push(e)}}function Tr(e,t,s=he){const{immediate:n,deep:i,once:o,scheduler:l,augmentJob:r,call:a}=s,d=O=>i?O:qe(O)||i===!1||i===0?Dt(O,1):Dt(O);let c,f,h,m,b=!1,v=!1;if(ke(e)?(f=()=>e.value,b=qe(e)):Wt(e)?(f=()=>d(e),b=!0):H(e)?(v=!0,b=e.some(O=>Wt(O)||qe(O)),f=()=>e.map(O=>{if(ke(O))return O.value;if(Wt(O))return d(O);if(W(O))return a?a(O,2):O()})):W(e)?t?f=a?()=>a(e,2):e:f=()=>{if(h){wt();try{h()}finally{Et()}}const O=Ft;Ft=c;try{return a?a(e,3,[m]):e(m)}finally{Ft=O}}:f=dt,t&&i){const O=f,G=i===!0?1/0:i;f=()=>Dt(O(),G)}const C=ir(),I=()=>{c.stop(),C&&C.active&&Vn(C.effects,c)};if(o&&t){const O=t;t=(...G)=>{O(...G),I()}}let R=v?new Array(e.length).fill(Ms):Ms;const U=O=>{if(!(!(c.flags&1)||!c.dirty&&!O))if(t){const G=c.run();if(i||b||(v?G.some((te,Q)=>pt(te,R[Q])):pt(G,R))){h&&h();const te=Ft;Ft=c;try{const Q=[G,R===Ms?void 0:v&&R[0]===Ms?[]:R,m];R=G,a?a(t,3,Q):t(...Q)}finally{Ft=te}}}else c.run()};return r&&r(U),c=new Eo(f),c.scheduler=l?()=>l(U,!1):U,m=O=>Rr(O,!1,c),h=c.onStop=()=>{const O=Bs.get(c);if(O){if(a)a(O,4);else for(const G of O)G();Bs.delete(c)}},t?n?U(!0):R=c.run():l?l(U.bind(null,!0),!0):c.run(),I.pause=c.pause.bind(c),I.resume=c.resume.bind(c),I.stop=I,I}function Dt(e,t=1/0,s){if(t<=0||!le(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,ke(e))Dt(e.value,t,s);else if(H(e))for(let n=0;n<e.length;n++)Dt(e[n],t,s);else if(go(e)||es(e))e.forEach(n=>{Dt(n,t,s)});else if(bo(e)){for(const n in e)Dt(e[n],t,s);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Dt(e[n],t,s)}return e}function ks(e,t,s,n){try{return n?e(...n):e()}catch(i){sn(i,t,s)}}function Ye(e,t,s,n){if(W(e)){const i=ks(e,t,s,n);return i&&mo(i)&&i.catch(o=>{sn(o,t,s)}),i}if(H(e)){const i=[];for(let o=0;o<e.length;o++)i.push(Ye(e[o],t,s,n));return i}}function sn(e,t,s,n=!0){const i=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||he;if(t){let r=t.parent;const a=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${s}`;for(;r;){const c=r.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,a,d)===!1)return}r=r.parent}if(o){wt(),ks(o,null,10,[e,a,d]),Et();return}}kr(e,s,i,n,l)}function kr(e,t,s,n=!0,i=!1){if(i)throw e;console.error(e)}const Me=[];let lt=-1;const ts=[];let kt=null,Qt=0;const Fo=Promise.resolve();let Fs=null;function is(e){const t=Fs||Fo;return e?t.then(this?e.bind(this):e):t}function jr(e){let t=lt+1,s=Me.length;for(;t<s;){const n=t+s>>>1,i=Me[n],o=Es(i);o<e||o===e&&i.flags&2?t=n+1:s=n}return t}function ei(e){if(!(e.flags&1)){const t=Es(e),s=Me[Me.length-1];!s||!(e.flags&2)&&t>=Es(s)?Me.push(e):Me.splice(jr(t),0,e),e.flags|=1,Ho()}}function Ho(){Fs||(Fs=Fo.then(Ko))}function Dr(e){H(e)?ts.push(...e):kt&&e.id===-1?kt.splice(Qt+1,0,e):e.flags&1||(ts.push(e),e.flags|=1),Ho()}function vi(e,t,s=lt+1){for(;s<Me.length;s++){const n=Me[s];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;Me.splice(s,1),s--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Vo(e){if(ts.length){const t=[...new Set(ts)].sort((s,n)=>Es(s)-Es(n));if(ts.length=0,kt){kt.push(...t);return}for(kt=t,Qt=0;Qt<kt.length;Qt++){const s=kt[Qt];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}kt=null,Qt=0}}const Es=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ko(e){try{for(lt=0;lt<Me.length;lt++){const t=Me[lt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ks(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;lt<Me.length;lt++){const t=Me[lt];t&&(t.flags&=-2)}lt=-1,Me.length=0,Vo(),Fs=null,(Me.length||ts.length)&&Ko()}}let Xe=null,Wo=null;function Hs(e){const t=Xe;return Xe=e,Wo=e&&e.type.__scopeId||null,t}function pe(e,t=Xe,s){if(!t||e._n)return e;const n=(...i)=>{n._d&&Ws(-1);const o=Hs(t);let l;try{l=e(...i)}finally{Hs(o),n._d&&Ws(1)}return l};return n._n=!0,n._c=!0,n._d=!0,n}function Ut(e,t,s,n){const i=e.dirs,o=t&&t.dirs;for(let l=0;l<i.length;l++){const r=i[l];o&&(r.oldValue=o[l].value);let a=r.dir[n];a&&(wt(),Ye(a,s,8,[e.el,r,e,t]),Et())}}function $s(e,t){if(Te){let s=Te.provides;const n=Te.parent&&Te.parent.provides;n===s&&(s=Te.provides=Object.create(n)),s[e]=t}}function ut(e,t,s=!1){const n=xl();if(n||ss){let i=ss?ss._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return s&&W(t)?t.call(n&&n.proxy):t}}const Or=Symbol.for("v-scx"),Mr=()=>ut(Or);function qt(e,t,s){return qo(e,t,s)}function qo(e,t,s=he){const{immediate:n,deep:i,flush:o,once:l}=s,r=Ee({},s),a=t&&n||!t&&o!=="post";let d;if(Is){if(o==="sync"){const m=Mr();d=m.__watcherHandles||(m.__watcherHandles=[])}else if(!a){const m=()=>{};return m.stop=dt,m.resume=dt,m.pause=dt,m}}const c=Te;r.call=(m,b,v)=>Ye(m,c,b,v);let f=!1;o==="post"?r.scheduler=m=>{Ne(m,c&&c.suspense)}:o!=="sync"&&(f=!0,r.scheduler=(m,b)=>{b?m():ei(m)}),r.augmentJob=m=>{t&&(m.flags|=4),f&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const h=Tr(e,t,r);return Is&&(d?d.push(h):a&&h()),h}function $r(e,t,s){const n=this.proxy,i=be(e)?e.includes(".")?Go(n,e):()=>n[e]:e.bind(n,n);let o;W(t)?o=t:(o=t.handler,s=t);const l=js(this),r=qo(i,o.bind(n),s);return l(),r}function Go(e,t){const s=t.split(".");return()=>{let n=e;for(let i=0;i<s.length&&n;i++)n=n[s[i]];return n}}const Ur=Symbol("_vte"),Xo=e=>e.__isTeleport,rt=Symbol("_leaveCb"),ps=Symbol("_enterCb");function Lr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return It(()=>{e.isMounted=!0}),nl(()=>{e.isUnmounting=!0}),e}const We=[Function,Array],zo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:We,onEnter:We,onAfterEnter:We,onEnterCancelled:We,onBeforeLeave:We,onLeave:We,onAfterLeave:We,onLeaveCancelled:We,onBeforeAppear:We,onAppear:We,onAfterAppear:We,onAppearCancelled:We},Jo=e=>{const t=e.subTree;return t.component?Jo(t.component):t},Nr={name:"BaseTransition",props:zo,setup(e,{slots:t}){const s=xl(),n=Lr();return()=>{const i=t.default&&Zo(t.default(),!0);if(!i||!i.length)return;const o=Qo(i),l=ee(e),{mode:r}=l;if(n.isLeaving)return gn(o);const a=bi(o);if(!a)return gn(o);let d=kn(a,l,n,s,f=>d=f);a.type!==$e&&Cs(a,d);let c=s.subTree&&bi(s.subTree);if(c&&c.type!==$e&&!Ht(c,a)&&Jo(s).type!==$e){let f=kn(c,l,n,s);if(Cs(c,f),r==="out-in"&&a.type!==$e)return n.isLeaving=!0,f.afterLeave=()=>{n.isLeaving=!1,s.job.flags&8||s.update(),delete f.afterLeave,c=void 0},gn(o);r==="in-out"&&a.type!==$e?f.delayLeave=(h,m,b)=>{const v=Yo(n,c);v[String(c.key)]=c,h[rt]=()=>{m(),h[rt]=void 0,delete d.delayedLeave,c=void 0},d.delayedLeave=()=>{b(),delete d.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return o}}};function Qo(e){let t=e[0];if(e.length>1){for(const s of e)if(s.type!==$e){t=s;break}}return t}const Br=Nr;function Yo(e,t){const{leavingVNodes:s}=e;let n=s.get(t.type);return n||(n=Object.create(null),s.set(t.type,n)),n}function kn(e,t,s,n,i){const{appear:o,mode:l,persisted:r=!1,onBeforeEnter:a,onEnter:d,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:m,onAfterLeave:b,onLeaveCancelled:v,onBeforeAppear:C,onAppear:I,onAfterAppear:R,onAppearCancelled:U}=t,O=String(e.key),G=Yo(s,e),te=(V,z)=>{V&&Ye(V,n,9,z)},Q=(V,z)=>{const re=z[1];te(V,z),H(V)?V.every(M=>M.length<=1)&&re():V.length<=1&&re()},Ce={mode:l,persisted:r,beforeEnter(V){let z=a;if(!s.isMounted)if(o)z=C||a;else return;V[rt]&&V[rt](!0);const re=G[O];re&&Ht(e,re)&&re.el[rt]&&re.el[rt](),te(z,[V])},enter(V){if(G[O]===e)return;let z=d,re=c,M=f;if(!s.isMounted)if(o)z=I||d,re=R||c,M=U||f;else return;let se=!1;V[ps]=Fe=>{se||(se=!0,Fe?te(M,[V]):te(re,[V]),Ce.delayedLeave&&Ce.delayedLeave(),V[ps]=void 0)};const xe=V[ps].bind(null,!1);z?Q(z,[V,xe]):xe()},leave(V,z){const re=String(e.key);if(V[ps]&&V[ps](!0),s.isUnmounting)return z();te(h,[V]);let M=!1;V[rt]=xe=>{M||(M=!0,z(),xe?te(v,[V]):te(b,[V]),V[rt]=void 0,G[re]===e&&delete G[re])};const se=V[rt].bind(null,!1);G[re]=e,m?Q(m,[V,se]):se()},clone(V){const z=kn(V,t,s,n,i);return i&&i(z),z}};return Ce}function gn(e){if(nn(e))return e=Mt(e),e.children=null,e}function bi(e){if(!nn(e))return Xo(e.type)&&e.children?Qo(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:s}=e;if(s){if(t&16)return s[0];if(t&32&&W(s.default))return s.default()}}function Cs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Cs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Zo(e,t=!1,s){let n=[],i=0;for(let o=0;o<e.length;o++){let l=e[o];const r=s==null?l.key:String(s)+String(l.key!=null?l.key:o);l.type===Y?(l.patchFlag&128&&i++,n=n.concat(Zo(l.children,t,r))):(t||l.type!==$e)&&n.push(r!=null?Mt(l,{key:r}):l)}if(i>1)for(let o=0;o<n.length;o++)n[o].patchFlag=-2;return n}function el(e,t){return W(e)?Ee({name:e.name},t,{setup:e}):e}function tl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function yi(e,t){let s;return!!((s=Object.getOwnPropertyDescriptor(e,t))&&!s.configurable)}const Vs=new WeakMap;function ms(e,t,s,n,i=!1){if(H(e)){e.forEach((v,C)=>ms(v,t&&(H(t)?t[C]:t),s,n,i));return}if(vs(n)&&!i){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&ms(e,t,s,n.component.subTree);return}const o=n.shapeFlag&4?ii(n.component):n.el,l=i?null:o,{i:r,r:a}=e,d=t&&t.r,c=r.refs===he?r.refs={}:r.refs,f=r.setupState,h=ee(f),m=f===he?ho:v=>yi(c,v)?!1:oe(h,v),b=(v,C)=>!(C&&yi(c,C));if(d!=null&&d!==a){if(Si(t),be(d))c[d]=null,m(d)&&(f[d]=null);else if(ke(d)){const v=t;b(d,v.k)&&(d.value=null),v.k&&(c[v.k]=null)}}if(W(a))ks(a,r,12,[l,c]);else{const v=be(a),C=ke(a);if(v||C){const I=()=>{if(e.f){const R=v?m(a)?f[a]:c[a]:b()||!e.k?a.value:c[e.k];if(i)H(R)&&Vn(R,o);else if(H(R))R.includes(o)||R.push(o);else if(v)c[a]=[o],m(a)&&(f[a]=c[a]);else{const U=[o];b(a,e.k)&&(a.value=U),e.k&&(c[e.k]=U)}}else v?(c[a]=l,m(a)&&(f[a]=l)):C&&(b(a,e.k)&&(a.value=l),e.k&&(c[e.k]=l))};if(l){const R=()=>{I(),Vs.delete(e)};R.id=-1,Vs.set(e,R),Ne(R,s)}else Si(e),I()}}}function Si(e){const t=Vs.get(e);t&&(t.flags|=8,Vs.delete(e))}Zs().requestIdleCallback;Zs().cancelIdleCallback;const vs=e=>!!e.type.__asyncLoader,nn=e=>e.type.__isKeepAlive;function Fr(e,t){sl(e,"a",t)}function Hr(e,t){sl(e,"da",t)}function sl(e,t,s=Te){const n=e.__wdc||(e.__wdc=()=>{let i=s;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(on(t,n,s),s){let i=s.parent;for(;i&&i.parent;)nn(i.parent.vnode)&&Vr(n,t,s,i),i=i.parent}}function Vr(e,t,s,n){const i=on(t,e,n,!0);rs(()=>{Vn(n[t],i)},s)}function on(e,t,s=Te,n=!1){if(s){const i=s[e]||(s[e]=[]),o=t.__weh||(t.__weh=(...l)=>{wt();const r=js(s),a=Ye(t,s,e,l);return r(),Et(),a});return n?i.unshift(o):i.push(o),o}}const xt=e=>(t,s=Te)=>{(!Is||e==="sp")&&on(e,(...n)=>t(...n),s)},Kr=xt("bm"),It=xt("m"),Wr=xt("bu"),qr=xt("u"),nl=xt("bum"),rs=xt("um"),Gr=xt("sp"),Xr=xt("rtg"),zr=xt("rtc");function Jr(e,t=Te){on("ec",e,t)}const il="components";function ln(e,t){return ll(il,e,!0,t)||e}const ol=Symbol.for("v-ndc");function Qr(e){return be(e)?ll(il,e,!1)||e:e||ol}function ll(e,t,s=!0,n=!1){const i=Xe||Te;if(i){const o=i.type;{const r=Ma(o,!1);if(r&&(r===t||r===Ue(t)||r===Ys(Ue(t))))return o}const l=Ai(i[e]||o[e],t)||Ai(i.appContext[e],t);return!l&&n?o:l}}function Ai(e,t){return e&&(e[t]||e[Ue(t)]||e[Ys(Ue(t))])}function me(e,t,s,n){let i;const o=s,l=H(e);if(l||be(e)){const r=l&&Wt(e);let a=!1,d=!1;r&&(a=!qe(e),d=Ct(e),e=en(e)),i=new Array(e.length);for(let c=0,f=e.length;c<f;c++)i[c]=t(a?d?ns(Qe(e[c])):Qe(e[c]):e[c],c,void 0,o)}else if(typeof e=="number"){i=new Array(e);for(let r=0;r<e;r++)i[r]=t(r+1,r,void 0,o)}else if(le(e))if(e[Symbol.iterator])i=Array.from(e,(r,a)=>t(r,a,void 0,o));else{const r=Object.keys(e);i=new Array(r.length);for(let a=0,d=r.length;a<d;a++){const c=r[a];i[a]=t(e[c],c,a,o)}}else i=[];return i}const jn=e=>e?Il(e)?ii(e):jn(e.parent):null,bs=Ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>jn(e.parent),$root:e=>jn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>al(e),$forceUpdate:e=>e.f||(e.f=()=>{ei(e.update)}),$nextTick:e=>e.n||(e.n=is.bind(e.proxy)),$watch:e=>$r.bind(e)}),mn=(e,t)=>e!==he&&!e.__isScriptSetup&&oe(e,t),Yr={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:n,data:i,props:o,accessCache:l,type:r,appContext:a}=e;if(t[0]!=="$"){const h=l[t];if(h!==void 0)switch(h){case 1:return n[t];case 2:return i[t];case 4:return s[t];case 3:return o[t]}else{if(mn(n,t))return l[t]=1,n[t];if(i!==he&&oe(i,t))return l[t]=2,i[t];if(oe(o,t))return l[t]=3,o[t];if(s!==he&&oe(s,t))return l[t]=4,s[t];Dn&&(l[t]=0)}}const d=bs[t];let c,f;if(d)return t==="$attrs"&&Re(e.attrs,"get",""),d(e);if((c=r.__cssModules)&&(c=c[t]))return c;if(s!==he&&oe(s,t))return l[t]=4,s[t];if(f=a.config.globalProperties,oe(f,t))return f[t]},set({_:e},t,s){const{data:n,setupState:i,ctx:o}=e;return mn(i,t)?(i[t]=s,!0):n!==he&&oe(n,t)?(n[t]=s,!0):oe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:i,props:o,type:l}},r){let a;return!!(s[r]||e!==he&&r[0]!=="$"&&oe(e,r)||mn(t,r)||oe(o,r)||oe(n,r)||oe(bs,r)||oe(i.config.globalProperties,r)||(a=l.__cssModules)&&a[r])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:oe(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function wi(e){return H(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let Dn=!0;function Zr(e){const t=al(e),s=e.proxy,n=e.ctx;Dn=!1,t.beforeCreate&&Ei(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:l,watch:r,provide:a,inject:d,created:c,beforeMount:f,mounted:h,beforeUpdate:m,updated:b,activated:v,deactivated:C,beforeDestroy:I,beforeUnmount:R,destroyed:U,unmounted:O,render:G,renderTracked:te,renderTriggered:Q,errorCaptured:Ce,serverPrefetch:V,expose:z,inheritAttrs:re,components:M,directives:se,filters:xe}=t;if(d&&ea(d,n,null),l)for(const ae in l){const ne=l[ae];W(ne)&&(n[ae]=ne.bind(s))}if(i){const ae=i.call(s,s);le(ae)&&(e.data=tn(ae))}if(Dn=!0,o)for(const ae in o){const ne=o[ae],ht=W(ne)?ne.bind(s,s):W(ne.get)?ne.get.bind(s,s):dt,Pt=!W(ne)&&W(ne.set)?ne.set.bind(s):dt,tt=ve({get:ht,set:Pt});Object.defineProperty(n,ae,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Le=>tt.value=Le})}if(r)for(const ae in r)rl(r[ae],n,s,ae);if(a){const ae=W(a)?a.call(s):a;Reflect.ownKeys(ae).forEach(ne=>{$s(ne,ae[ne])})}c&&Ei(c,e,"c");function ye(ae,ne){H(ne)?ne.forEach(ht=>ae(ht.bind(s))):ne&&ae(ne.bind(s))}if(ye(Kr,f),ye(It,h),ye(Wr,m),ye(qr,b),ye(Fr,v),ye(Hr,C),ye(Jr,Ce),ye(zr,te),ye(Xr,Q),ye(nl,R),ye(rs,O),ye(Gr,V),H(z))if(z.length){const ae=e.exposed||(e.exposed={});z.forEach(ne=>{Object.defineProperty(ae,ne,{get:()=>s[ne],set:ht=>s[ne]=ht,enumerable:!0})})}else e.exposed||(e.exposed={});G&&e.render===dt&&(e.render=G),re!=null&&(e.inheritAttrs=re),M&&(e.components=M),se&&(e.directives=se),V&&tl(e)}function ea(e,t,s=dt){H(e)&&(e=On(e));for(const n in e){const i=e[n];let o;le(i)?"default"in i?o=ut(i.from||n,i.default,!0):o=ut(i.from||n):o=ut(i),ke(o)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):t[n]=o}}function Ei(e,t,s){Ye(H(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function rl(e,t,s,n){let i=n.includes(".")?Go(s,n):()=>s[n];if(be(e)){const o=t[e];W(o)&&qt(i,o)}else if(W(e))qt(i,e.bind(s));else if(le(e))if(H(e))e.forEach(o=>rl(o,t,s,n));else{const o=W(e.handler)?e.handler.bind(s):t[e.handler];W(o)&&qt(i,o,e)}}function al(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:l}}=e.appContext,r=o.get(t);let a;return r?a=r:!i.length&&!s&&!n?a=t:(a={},i.length&&i.forEach(d=>Ks(a,d,l,!0)),Ks(a,t,l)),le(t)&&o.set(t,a),a}function Ks(e,t,s,n=!1){const{mixins:i,extends:o}=t;o&&Ks(e,o,s,!0),i&&i.forEach(l=>Ks(e,l,s,!0));for(const l in t)if(!(n&&l==="expose")){const r=ta[l]||s&&s[l];e[l]=r?r(e[l],t[l]):t[l]}return e}const ta={data:Ci,props:xi,emits:xi,methods:fs,computed:fs,beforeCreate:je,created:je,beforeMount:je,mounted:je,beforeUpdate:je,updated:je,beforeDestroy:je,beforeUnmount:je,destroyed:je,unmounted:je,activated:je,deactivated:je,errorCaptured:je,serverPrefetch:je,components:fs,directives:fs,watch:na,provide:Ci,inject:sa};function Ci(e,t){return t?e?function(){return Ee(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function sa(e,t){return fs(On(e),On(t))}function On(e){if(H(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function je(e,t){return e?[...new Set([].concat(e,t))]:t}function fs(e,t){return e?Ee(Object.create(null),e,t):t}function xi(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:Ee(Object.create(null),wi(e),wi(t??{})):t}function na(e,t){if(!e)return t;if(!t)return e;const s=Ee(Object.create(null),e);for(const n in t)s[n]=je(e[n],t[n]);return s}function cl(){return{app:null,config:{isNativeTag:ho,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ia=0;function oa(e,t){return function(n,i=null){W(n)||(n=Ee({},n)),i!=null&&!le(i)&&(i=null);const o=cl(),l=new WeakSet,r=[];let a=!1;const d=o.app={_uid:ia++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:Ua,get config(){return o.config},set config(c){},use(c,...f){return l.has(c)||(c&&W(c.install)?(l.add(c),c.install(d,...f)):W(c)&&(l.add(c),c(d,...f))),d},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),d},component(c,f){return f?(o.components[c]=f,d):o.components[c]},directive(c,f){return f?(o.directives[c]=f,d):o.directives[c]},mount(c,f,h){if(!a){const m=d._ceVNode||X(n,i);return m.appContext=o,h===!0?h="svg":h===!1&&(h=void 0),e(m,c,h),a=!0,d._container=c,c.__vue_app__=d,ii(m.component)}},onUnmount(c){r.push(c)},unmount(){a&&(Ye(r,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(c,f){return o.provides[c]=f,d},runWithContext(c){const f=ss;ss=d;try{return c()}finally{ss=f}}};return d}}let ss=null;const la=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ue(t)}Modifiers`]||e[`${Gt(t)}Modifiers`];function ra(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||he;let i=s;const o=t.startsWith("update:"),l=o&&la(n,t.slice(7));l&&(l.trim&&(i=s.map(c=>be(c)?c.trim():c)),l.number&&(i=s.map(Xl)));let r,a=n[r=pn(t)]||n[r=pn(Ue(t))];!a&&o&&(a=n[r=pn(Gt(t))]),a&&Ye(a,e,6,i);const d=n[r+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,Ye(d,e,6,i)}}const aa=new WeakMap;function pl(e,t,s=!1){const n=s?aa:t.emitsCache,i=n.get(e);if(i!==void 0)return i;const o=e.emits;let l={},r=!1;if(!W(e)){const a=d=>{const c=pl(d,t,!0);c&&(r=!0,Ee(l,c))};!s&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!o&&!r?(le(e)&&n.set(e,null),null):(H(o)?o.forEach(a=>l[a]=null):Ee(l,o),le(e)&&n.set(e,l),l)}function rn(e,t){return!e||!zs(t)?!1:(t=t.slice(2).replace(/Once$/,""),oe(e,t[0].toLowerCase()+t.slice(1))||oe(e,Gt(t))||oe(e,t))}function Ii(e){const{type:t,vnode:s,proxy:n,withProxy:i,propsOptions:[o],slots:l,attrs:r,emit:a,render:d,renderCache:c,props:f,data:h,setupState:m,ctx:b,inheritAttrs:v}=e,C=Hs(e);let I,R;try{if(s.shapeFlag&4){const O=i||n,G=O;I=ct(d.call(G,O,c,f,m,h,b)),R=r}else{const O=t;I=ct(O.length>1?O(f,{attrs:r,slots:l,emit:a}):O(f,null)),R=t.props?r:ca(r)}}catch(O){ys.length=0,sn(O,e,1),I=X($e)}let U=I;if(R&&v!==!1){const O=Object.keys(R),{shapeFlag:G}=U;O.length&&G&7&&(o&&O.some(Js)&&(R=pa(R,o)),U=Mt(U,R,!1,!0))}return s.dirs&&(U=Mt(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(s.dirs):s.dirs),s.transition&&Cs(U,s.transition),I=U,Hs(C),I}const ca=e=>{let t;for(const s in e)(s==="class"||s==="style"||zs(s))&&((t||(t={}))[s]=e[s]);return t},pa=(e,t)=>{const s={};for(const n in e)(!Js(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function da(e,t,s){const{props:n,children:i,component:o}=e,{props:l,children:r,patchFlag:a}=t,d=o.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&a>=0){if(a&1024)return!0;if(a&16)return n?Pi(n,l,d):!!l;if(a&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(dl(l,n,h)&&!rn(d,h))return!0}}}else return(i||r)&&(!r||!r.$stable)?!0:n===l?!1:n?l?Pi(n,l,d):!0:!!l;return!1}function Pi(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const o=n[i];if(dl(t,e,o)&&!rn(s,o))return!0}return!1}function dl(e,t,s){const n=e[s],i=t[s];return s==="style"&&le(n)&&le(i)?!qn(n,i):n!==i}function ua({vnode:e,parent:t,suspense:s},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=n,e=i),i===e)(e=t.vnode).el=n,t=t.parent;else break}s&&s.activeBranch===e&&(s.vnode.el=n)}const ul={},fl=()=>Object.create(ul),_l=e=>Object.getPrototypeOf(e)===ul;function fa(e,t,s,n=!1){const i={},o=fl();e.propsDefaults=Object.create(null),hl(e,t,i,o);for(const l in e.propsOptions[0])l in i||(i[l]=void 0);s?e.props=n?i:Lo(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function _a(e,t,s,n){const{props:i,attrs:o,vnode:{patchFlag:l}}=e,r=ee(i),[a]=e.propsOptions;let d=!1;if((n||l>0)&&!(l&16)){if(l&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(rn(e.emitsOptions,h))continue;const m=t[h];if(a)if(oe(o,h))m!==o[h]&&(o[h]=m,d=!0);else{const b=Ue(h);i[b]=Mn(a,r,b,m,e,!1)}else m!==o[h]&&(o[h]=m,d=!0)}}}else{hl(e,t,i,o)&&(d=!0);let c;for(const f in r)(!t||!oe(t,f)&&((c=Gt(f))===f||!oe(t,c)))&&(a?s&&(s[f]!==void 0||s[c]!==void 0)&&(i[f]=Mn(a,r,f,void 0,e,!0)):delete i[f]);if(o!==r)for(const f in o)(!t||!oe(t,f))&&(delete o[f],d=!0)}d&&St(e.attrs,"set","")}function hl(e,t,s,n){const[i,o]=e.propsOptions;let l=!1,r;if(t)for(let a in t){if(_s(a))continue;const d=t[a];let c;i&&oe(i,c=Ue(a))?!o||!o.includes(c)?s[c]=d:(r||(r={}))[c]=d:rn(e.emitsOptions,a)||(!(a in n)||d!==n[a])&&(n[a]=d,l=!0)}if(o){const a=ee(s),d=r||he;for(let c=0;c<o.length;c++){const f=o[c];s[f]=Mn(i,a,f,d[f],e,!oe(d,f))}}return l}function Mn(e,t,s,n,i,o){const l=e[s];if(l!=null){const r=oe(l,"default");if(r&&n===void 0){const a=l.default;if(l.type!==Function&&!l.skipFactory&&W(a)){const{propsDefaults:d}=i;if(s in d)n=d[s];else{const c=js(i);n=d[s]=a.call(null,t),c()}}else n=a;i.ce&&i.ce._setProp(s,n)}l[0]&&(o&&!r?n=!1:l[1]&&(n===""||n===Gt(s))&&(n=!0))}return n}const ha=new WeakMap;function gl(e,t,s=!1){const n=s?ha:t.propsCache,i=n.get(e);if(i)return i;const o=e.props,l={},r=[];let a=!1;if(!W(e)){const c=f=>{a=!0;const[h,m]=gl(f,t,!0);Ee(l,h),m&&r.push(...m)};!s&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!o&&!a)return le(e)&&n.set(e,Zt),Zt;if(H(o))for(let c=0;c<o.length;c++){const f=Ue(o[c]);Ri(f)&&(l[f]=he)}else if(o)for(const c in o){const f=Ue(c);if(Ri(f)){const h=o[c],m=l[f]=H(h)||W(h)?{type:h}:Ee({},h),b=m.type;let v=!1,C=!0;if(H(b))for(let I=0;I<b.length;++I){const R=b[I],U=W(R)&&R.name;if(U==="Boolean"){v=!0;break}else U==="String"&&(C=!1)}else v=W(b)&&b.name==="Boolean";m[0]=v,m[1]=C,(v||oe(m,"default"))&&r.push(f)}}const d=[l,r];return le(e)&&n.set(e,d),d}function Ri(e){return e[0]!=="$"&&!_s(e)}const ti=e=>e==="_"||e==="_ctx"||e==="$stable",si=e=>H(e)?e.map(ct):[ct(e)],ga=(e,t,s)=>{if(t._n)return t;const n=pe((...i)=>si(t(...i)),s);return n._c=!1,n},ml=(e,t,s)=>{const n=e._ctx;for(const i in e){if(ti(i))continue;const o=e[i];if(W(o))t[i]=ga(i,o,n);else if(o!=null){const l=si(o);t[i]=()=>l}}},vl=(e,t)=>{const s=si(t);e.slots.default=()=>s},bl=(e,t,s)=>{for(const n in t)(s||!ti(n))&&(e[n]=t[n])},ma=(e,t,s)=>{const n=e.slots=fl();if(e.vnode.shapeFlag&32){const i=t._;i?(bl(n,t,s),s&&yo(n,"_",i,!0)):ml(t,n)}else t&&vl(e,t)},va=(e,t,s)=>{const{vnode:n,slots:i}=e;let o=!0,l=he;if(n.shapeFlag&32){const r=t._;r?s&&r===1?o=!1:bl(i,t,s):(o=!t.$stable,ml(t,i)),l=t}else t&&(vl(e,t),l={default:1});if(o)for(const r in i)!ti(r)&&l[r]==null&&delete i[r]},Ne=wa;function ba(e){return ya(e)}function ya(e,t){const s=Zs();s.__VUE__=!0;const{insert:n,remove:i,patchProp:o,createElement:l,createText:r,createComment:a,setText:d,setElementText:c,parentNode:f,nextSibling:h,setScopeId:m=dt,insertStaticContent:b}=e,v=(p,_,g,y=null,w=null,S=null,T=void 0,P=null,x=!!_.dynamicChildren)=>{if(p===_)return;p&&!Ht(p,_)&&(y=A(p),Le(p,w,S,!0),p=null),_.patchFlag===-2&&(x=!1,_.dynamicChildren=null);const{type:E,ref:F,shapeFlag:j}=_;switch(E){case an:C(p,_,g,y);break;case $e:I(p,_,g,y);break;case Us:p==null&&R(_,g,y,T);break;case Y:M(p,_,g,y,w,S,T,P,x);break;default:j&1?G(p,_,g,y,w,S,T,P,x):j&6?se(p,_,g,y,w,S,T,P,x):(j&64||j&128)&&E.process(p,_,g,y,w,S,T,P,x,N)}F!=null&&w?ms(F,p&&p.ref,S,_||p,!_):F==null&&p&&p.ref!=null&&ms(p.ref,null,S,p,!0)},C=(p,_,g,y)=>{if(p==null)n(_.el=r(_.children),g,y);else{const w=_.el=p.el;_.children!==p.children&&d(w,_.children)}},I=(p,_,g,y)=>{p==null?n(_.el=a(_.children||""),g,y):_.el=p.el},R=(p,_,g,y)=>{[p.el,p.anchor]=b(p.children,_,g,y,p.el,p.anchor)},U=({el:p,anchor:_},g,y)=>{let w;for(;p&&p!==_;)w=h(p),n(p,g,y),p=w;n(_,g,y)},O=({el:p,anchor:_})=>{let g;for(;p&&p!==_;)g=h(p),i(p),p=g;i(_)},G=(p,_,g,y,w,S,T,P,x)=>{if(_.type==="svg"?T="svg":_.type==="math"&&(T="mathml"),p==null)te(_,g,y,w,S,T,P,x);else{const E=p.el&&p.el._isVueCE?p.el:null;try{E&&E._beginPatch(),V(p,_,w,S,T,P,x)}finally{E&&E._endPatch()}}},te=(p,_,g,y,w,S,T,P)=>{let x,E;const{props:F,shapeFlag:j,transition:B,dirs:K}=p;if(x=p.el=l(p.type,S,F&&F.is,F),j&8?c(x,p.children):j&16&&Ce(p.children,x,null,y,w,vn(p,S),T,P),K&&Ut(p,null,y,"created"),Q(x,p,p.scopeId,T,y),F){for(const de in F)de!=="value"&&!_s(de)&&o(x,de,null,F[de],S,y);"value"in F&&o(x,"value",null,F.value,S),(E=F.onVnodeBeforeMount)&&ot(E,y,p)}K&&Ut(p,null,y,"beforeMount");const Z=Sa(w,B);Z&&B.beforeEnter(x),n(x,_,g),((E=F&&F.onVnodeMounted)||Z||K)&&Ne(()=>{E&&ot(E,y,p),Z&&B.enter(x),K&&Ut(p,null,y,"mounted")},w)},Q=(p,_,g,y,w)=>{if(g&&m(p,g),y)for(let S=0;S<y.length;S++)m(p,y[S]);if(w){let S=w.subTree;if(_===S||wl(S.type)&&(S.ssContent===_||S.ssFallback===_)){const T=w.vnode;Q(p,T,T.scopeId,T.slotScopeIds,w.parent)}}},Ce=(p,_,g,y,w,S,T,P,x=0)=>{for(let E=x;E<p.length;E++){const F=p[E]=P?yt(p[E]):ct(p[E]);v(null,F,_,g,y,w,S,T,P)}},V=(p,_,g,y,w,S,T)=>{const P=_.el=p.el;let{patchFlag:x,dynamicChildren:E,dirs:F}=_;x|=p.patchFlag&16;const j=p.props||he,B=_.props||he;let K;if(g&&Lt(g,!1),(K=B.onVnodeBeforeUpdate)&&ot(K,g,_,p),F&&Ut(_,p,g,"beforeUpdate"),g&&Lt(g,!0),(j.innerHTML&&B.innerHTML==null||j.textContent&&B.textContent==null)&&c(P,""),E?z(p.dynamicChildren,E,P,g,y,vn(_,w),S):T||ne(p,_,P,null,g,y,vn(_,w),S,!1),x>0){if(x&16)re(P,j,B,g,w);else if(x&2&&j.class!==B.class&&o(P,"class",null,B.class,w),x&4&&o(P,"style",j.style,B.style,w),x&8){const Z=_.dynamicProps;for(let de=0;de<Z.length;de++){const fe=Z[de],Se=j[fe],Pe=B[fe];(Pe!==Se||fe==="value")&&o(P,fe,Se,Pe,w,g)}}x&1&&p.children!==_.children&&c(P,_.children)}else!T&&E==null&&re(P,j,B,g,w);((K=B.onVnodeUpdated)||F)&&Ne(()=>{K&&ot(K,g,_,p),F&&Ut(_,p,g,"updated")},y)},z=(p,_,g,y,w,S,T)=>{for(let P=0;P<_.length;P++){const x=p[P],E=_[P],F=x.el&&(x.type===Y||!Ht(x,E)||x.shapeFlag&198)?f(x.el):g;v(x,E,F,null,y,w,S,T,!0)}},re=(p,_,g,y,w)=>{if(_!==g){if(_!==he)for(const S in _)!_s(S)&&!(S in g)&&o(p,S,_[S],null,w,y);for(const S in g){if(_s(S))continue;const T=g[S],P=_[S];T!==P&&S!=="value"&&o(p,S,P,T,w,y)}"value"in g&&o(p,"value",_.value,g.value,w)}},M=(p,_,g,y,w,S,T,P,x)=>{const E=_.el=p?p.el:r(""),F=_.anchor=p?p.anchor:r("");let{patchFlag:j,dynamicChildren:B,slotScopeIds:K}=_;K&&(P=P?P.concat(K):K),p==null?(n(E,g,y),n(F,g,y),Ce(_.children||[],g,F,w,S,T,P,x)):j>0&&j&64&&B&&p.dynamicChildren&&p.dynamicChildren.length===B.length?(z(p.dynamicChildren,B,g,w,S,T,P),(_.key!=null||w&&_===w.subTree)&&yl(p,_,!0)):ne(p,_,g,F,w,S,T,P,x)},se=(p,_,g,y,w,S,T,P,x)=>{_.slotScopeIds=P,p==null?_.shapeFlag&512?w.ctx.activate(_,g,y,T,x):xe(_,g,y,w,S,T,x):Fe(p,_,x)},xe=(p,_,g,y,w,S,T)=>{const P=p.component=Ta(p,y,w);if(nn(p)&&(P.ctx.renderer=N),ka(P,!1,T),P.asyncDep){if(w&&w.registerDep(P,ye,T),!p.el){const x=P.subTree=X($e);I(null,x,_,g),p.placeholder=x.el}}else ye(P,p,_,g,w,S,T)},Fe=(p,_,g)=>{const y=_.component=p.component;if(da(p,_,g))if(y.asyncDep&&!y.asyncResolved){ae(y,_,g);return}else y.next=_,y.update();else _.el=p.el,y.vnode=_},ye=(p,_,g,y,w,S,T)=>{const P=()=>{if(p.isMounted){let{next:j,bu:B,u:K,parent:Z,vnode:de}=p;{const nt=Sl(p);if(nt){j&&(j.el=de.el,ae(p,j,T)),nt.asyncDep.then(()=>{Ne(()=>{p.isUnmounted||E()},w)});return}}let fe=j,Se;Lt(p,!1),j?(j.el=de.el,ae(p,j,T)):j=de,B&&dn(B),(Se=j.props&&j.props.onVnodeBeforeUpdate)&&ot(Se,Z,j,de),Lt(p,!0);const Pe=Ii(p),st=p.subTree;p.subTree=Pe,v(st,Pe,f(st.el),A(st),p,w,S),j.el=Pe.el,fe===null&&ua(p,Pe.el),K&&Ne(K,w),(Se=j.props&&j.props.onVnodeUpdated)&&Ne(()=>ot(Se,Z,j,de),w)}else{let j;const{el:B,props:K}=_,{bm:Z,m:de,parent:fe,root:Se,type:Pe}=p,st=vs(_);Lt(p,!1),Z&&dn(Z),!st&&(j=K&&K.onVnodeBeforeMount)&&ot(j,fe,_),Lt(p,!0);{Se.ce&&Se.ce._hasShadowRoot()&&Se.ce._injectChildStyle(Pe,p.parent?p.parent.type:void 0);const nt=p.subTree=Ii(p);v(null,nt,g,y,p,w,S),_.el=nt.el}if(de&&Ne(de,w),!st&&(j=K&&K.onVnodeMounted)){const nt=_;Ne(()=>ot(j,fe,nt),w)}(_.shapeFlag&256||fe&&vs(fe.vnode)&&fe.vnode.shapeFlag&256)&&p.a&&Ne(p.a,w),p.isMounted=!0,_=g=y=null}};p.scope.on();const x=p.effect=new Eo(P);p.scope.off();const E=p.update=x.run.bind(x),F=p.job=x.runIfDirty.bind(x);F.i=p,F.id=p.uid,x.scheduler=()=>ei(F),Lt(p,!0),E()},ae=(p,_,g)=>{_.component=p;const y=p.vnode.props;p.vnode=_,p.next=null,_a(p,_.props,y,g),va(p,_.children,g),wt(),vi(p),Et()},ne=(p,_,g,y,w,S,T,P,x=!1)=>{const E=p&&p.children,F=p?p.shapeFlag:0,j=_.children,{patchFlag:B,shapeFlag:K}=_;if(B>0){if(B&128){Pt(E,j,g,y,w,S,T,P,x);return}else if(B&256){ht(E,j,g,y,w,S,T,P,x);return}}K&8?(F&16&&Ke(E,w,S),j!==E&&c(g,j)):F&16?K&16?Pt(E,j,g,y,w,S,T,P,x):Ke(E,w,S,!0):(F&8&&c(g,""),K&16&&Ce(j,g,y,w,S,T,P,x))},ht=(p,_,g,y,w,S,T,P,x)=>{p=p||Zt,_=_||Zt;const E=p.length,F=_.length,j=Math.min(E,F);let B;for(B=0;B<j;B++){const K=_[B]=x?yt(_[B]):ct(_[B]);v(p[B],K,g,null,w,S,T,P,x)}E>F?Ke(p,w,S,!0,!1,j):Ce(_,g,y,w,S,T,P,x,j)},Pt=(p,_,g,y,w,S,T,P,x)=>{let E=0;const F=_.length;let j=p.length-1,B=F-1;for(;E<=j&&E<=B;){const K=p[E],Z=_[E]=x?yt(_[E]):ct(_[E]);if(Ht(K,Z))v(K,Z,g,null,w,S,T,P,x);else break;E++}for(;E<=j&&E<=B;){const K=p[j],Z=_[B]=x?yt(_[B]):ct(_[B]);if(Ht(K,Z))v(K,Z,g,null,w,S,T,P,x);else break;j--,B--}if(E>j){if(E<=B){const K=B+1,Z=K<F?_[K].el:y;for(;E<=B;)v(null,_[E]=x?yt(_[E]):ct(_[E]),g,Z,w,S,T,P,x),E++}}else if(E>B)for(;E<=j;)Le(p[E],w,S,!0),E++;else{const K=E,Z=E,de=new Map;for(E=Z;E<=B;E++){const He=_[E]=x?yt(_[E]):ct(_[E]);He.key!=null&&de.set(He.key,E)}let fe,Se=0;const Pe=B-Z+1;let st=!1,nt=0;const as=new Array(Pe);for(E=0;E<Pe;E++)as[E]=0;for(E=K;E<=j;E++){const He=p[E];if(Se>=Pe){Le(He,w,S,!0);continue}let it;if(He.key!=null)it=de.get(He.key);else for(fe=Z;fe<=B;fe++)if(as[fe-Z]===0&&Ht(He,_[fe])){it=fe;break}it===void 0?Le(He,w,S,!0):(as[it-Z]=E+1,it>=nt?nt=it:st=!0,v(He,_[it],g,null,w,S,T,P,x),Se++)}const di=st?Aa(as):Zt;for(fe=di.length-1,E=Pe-1;E>=0;E--){const He=Z+E,it=_[He],ui=_[He+1],fi=He+1<F?ui.el||Al(ui):y;as[E]===0?v(null,it,g,fi,w,S,T,P,x):st&&(fe<0||E!==di[fe]?tt(it,g,fi,2):fe--)}}},tt=(p,_,g,y,w=null)=>{const{el:S,type:T,transition:P,children:x,shapeFlag:E}=p;if(E&6){tt(p.component.subTree,_,g,y);return}if(E&128){p.suspense.move(_,g,y);return}if(E&64){T.move(p,_,g,N);return}if(T===Y){n(S,_,g);for(let j=0;j<x.length;j++)tt(x[j],_,g,y);n(p.anchor,_,g);return}if(T===Us){U(p,_,g);return}if(y!==2&&E&1&&P)if(y===0)P.beforeEnter(S),n(S,_,g),Ne(()=>P.enter(S),w);else{const{leave:j,delayLeave:B,afterLeave:K}=P,Z=()=>{p.ctx.isUnmounted?i(S):n(S,_,g)},de=()=>{S._isLeaving&&S[rt](!0),j(S,()=>{Z(),K&&K()})};B?B(S,Z,de):de()}else n(S,_,g)},Le=(p,_,g,y=!1,w=!1)=>{const{type:S,props:T,ref:P,children:x,dynamicChildren:E,shapeFlag:F,patchFlag:j,dirs:B,cacheIndex:K,memo:Z}=p;if(j===-2&&(w=!1),P!=null&&(wt(),ms(P,null,g,p,!0),Et()),K!=null&&(_.renderCache[K]=void 0),F&256){_.ctx.deactivate(p);return}const de=F&1&&B,fe=!vs(p);let Se;if(fe&&(Se=T&&T.onVnodeBeforeUnmount)&&ot(Se,_,p),F&6)$t(p.component,g,y);else{if(F&128){p.suspense.unmount(g,y);return}de&&Ut(p,null,_,"beforeUnmount"),F&64?p.type.remove(p,_,g,N,y):E&&!E.hasOnce&&(S!==Y||j>0&&j&64)?Ke(E,_,g,!1,!0):(S===Y&&j&384||!w&&F&16)&&Ke(x,_,g),y&&Xt(p)}const Pe=Z!=null&&K==null;(fe&&(Se=T&&T.onVnodeUnmounted)||de||Pe)&&Ne(()=>{Se&&ot(Se,_,p),de&&Ut(p,null,_,"unmounted"),Pe&&(p.el=null)},g)},Xt=p=>{const{type:_,el:g,anchor:y,transition:w}=p;if(_===Y){zt(g,y);return}if(_===Us){O(p);return}const S=()=>{i(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(p.shapeFlag&1&&w&&!w.persisted){const{leave:T,delayLeave:P}=w,x=()=>T(g,S);P?P(p.el,S,x):x()}else S()},zt=(p,_)=>{let g;for(;p!==_;)g=h(p),i(p),p=g;i(_)},$t=(p,_,g)=>{const{bum:y,scope:w,job:S,subTree:T,um:P,m:x,a:E}=p;Ti(x),Ti(E),y&&dn(y),w.stop(),S&&(S.flags|=8,Le(T,p,_,g)),P&&Ne(P,_),Ne(()=>{p.isUnmounted=!0},_)},Ke=(p,_,g,y=!1,w=!1,S=0)=>{for(let T=S;T<p.length;T++)Le(p[T],_,g,y,w)},A=p=>{if(p.shapeFlag&6)return A(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const _=h(p.anchor||p.el),g=_&&_[Ur];return g?h(g):_};let $=!1;const k=(p,_,g)=>{let y;p==null?_._vnode&&(Le(_._vnode,null,null,!0),y=_._vnode.component):v(_._vnode||null,p,_,null,null,null,g),_._vnode=p,$||($=!0,vi(y),Vo(),$=!1)},N={p:v,um:Le,m:tt,r:Xt,mt:xe,mc:Ce,pc:ne,pbc:z,n:A,o:e};return{render:k,hydrate:void 0,createApp:oa(k)}}function vn({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function Lt({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Sa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function yl(e,t,s=!1){const n=e.children,i=t.children;if(H(n)&&H(i))for(let o=0;o<n.length;o++){const l=n[o];let r=i[o];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=i[o]=yt(i[o]),r.el=l.el),!s&&r.patchFlag!==-2&&yl(l,r)),r.type===an&&(r.patchFlag===-1&&(r=i[o]=yt(r)),r.el=l.el),r.type===$e&&!r.el&&(r.el=l.el)}}function Aa(e){const t=e.slice(),s=[0];let n,i,o,l,r;const a=e.length;for(n=0;n<a;n++){const d=e[n];if(d!==0){if(i=s[s.length-1],e[i]<d){t[n]=i,s.push(n);continue}for(o=0,l=s.length-1;o<l;)r=o+l>>1,e[s[r]]<d?o=r+1:l=r;d<e[s[o]]&&(o>0&&(t[n]=s[o-1]),s[o]=n)}}for(o=s.length,l=s[o-1];o-- >0;)s[o]=l,l=t[l];return s}function Sl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Sl(t)}function Ti(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Al(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Al(t.subTree):null}const wl=e=>e.__isSuspense;function wa(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Dr(e)}const Y=Symbol.for("v-fgt"),an=Symbol.for("v-txt"),$e=Symbol.for("v-cmt"),Us=Symbol.for("v-stc"),ys=[];let Ve=null;function D(e=!1){ys.push(Ve=e?null:[])}function Ea(){ys.pop(),Ve=ys[ys.length-1]||null}let xs=1;function Ws(e,t=!1){xs+=e,e<0&&Ve&&t&&(Ve.hasOnce=!0)}function El(e){return e.dynamicChildren=xs>0?Ve||Zt:null,Ea(),xs>0&&Ve&&Ve.push(e),e}function L(e,t,s,n,i,o){return El(u(e,t,s,n,i,o,!0))}function Ze(e,t,s,n,i){return El(X(e,t,s,n,i,!0))}function qs(e){return e?e.__v_isVNode===!0:!1}function Ht(e,t){return e.type===t.type&&e.key===t.key}const Cl=({key:e})=>e??null,Ls=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?be(e)||ke(e)||W(e)?{i:Xe,r:e,k:t,f:!!s}:e:null);function u(e,t=null,s=null,n=0,i=null,o=e===Y?0:1,l=!1,r=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Cl(t),ref:t&&Ls(t),scopeId:Wo,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Xe};return r?(ni(a,s),o&128&&e.normalize(a)):s&&(a.shapeFlag|=be(s)?8:16),xs>0&&!l&&Ve&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&Ve.push(a),a}const X=Ca;function Ca(e,t=null,s=null,n=0,i=null,o=!1){if((!e||e===ol)&&(e=$e),qs(e)){const r=Mt(e,t,!0);return s&&ni(r,s),xs>0&&!o&&Ve&&(r.shapeFlag&6?Ve[Ve.indexOf(e)]=r:Ve.push(r)),r.patchFlag=-2,r}if($a(e)&&(e=e.__vccOpts),t){t=xa(t);let{class:r,style:a}=t;r&&!be(r)&&(t.class=we(r)),le(a)&&(Zn(a)&&!H(a)&&(a=Ee({},a)),t.style=Wn(a))}const l=be(e)?1:wl(e)?128:Xo(e)?64:le(e)?4:W(e)?2:0;return u(e,t,s,n,i,l,o,!0)}function xa(e){return e?Zn(e)||_l(e)?Ee({},e):e:null}function Mt(e,t,s=!1,n=!1){const{props:i,ref:o,patchFlag:l,children:r,transition:a}=e,d=t?Ia(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Cl(d),ref:t&&t.ref?s&&o?H(o)?o.concat(Ls(t)):[o,Ls(t)]:Ls(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Y?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mt(e.ssContent),ssFallback:e.ssFallback&&Mt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&n&&Cs(c,a.clone(c)),c}function ce(e=" ",t=0){return X(an,null,e,t)}function ft(e,t){const s=X(Us,null,e);return s.staticCount=t,s}function ze(e="",t=!1){return t?(D(),Ze($e,null,e)):X($e,null,e)}function ct(e){return e==null||typeof e=="boolean"?X($e):H(e)?X(Y,null,e.slice()):qs(e)?yt(e):X(an,null,String(e))}function yt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Mt(e)}function ni(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(H(t))s=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),ni(e,i()),i._c&&(i._d=!0));return}else{s=32;const i=t._;!i&&!_l(t)?t._ctx=Xe:i===3&&Xe&&(Xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:Xe},s=32):(t=String(t),n&64?(s=16,t=[ce(t)]):s=8);e.children=t,e.shapeFlag|=s}function Ia(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=we([t.class,n.class]));else if(i==="style")t.style=Wn([t.style,n.style]);else if(zs(i)){const o=t[i],l=n[i];l&&o!==l&&!(H(o)&&o.includes(l))?t[i]=o?[].concat(o,l):l:l==null&&o==null&&!Js(i)&&(t[i]=l)}else i!==""&&(t[i]=n[i])}return t}function ot(e,t,s,n=null){Ye(e,t,7,[s,n])}const Pa=cl();let Ra=0;function Ta(e,t,s){const n=e.type,i=(t?t.appContext:e.appContext)||Pa,o={uid:Ra++,vnode:e,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new nr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gl(n,i),emitsOptions:pl(n,i),emit:null,emitted:null,propsDefaults:he,inheritAttrs:n.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=ra.bind(null,o),e.ce&&e.ce(o),o}let Te=null;const xl=()=>Te||Xe;let Gs,$n;{const e=Zs(),t=(s,n)=>{let i;return(i=e[s])||(i=e[s]=[]),i.push(n),o=>{i.length>1?i.forEach(l=>l(o)):i[0](o)}};Gs=t("__VUE_INSTANCE_SETTERS__",s=>Te=s),$n=t("__VUE_SSR_SETTERS__",s=>Is=s)}const js=e=>{const t=Te;return Gs(e),e.scope.on(),()=>{e.scope.off(),Gs(t)}},ki=()=>{Te&&Te.scope.off(),Gs(null)};function Il(e){return e.vnode.shapeFlag&4}let Is=!1;function ka(e,t=!1,s=!1){t&&$n(t);const{props:n,children:i}=e.vnode,o=Il(e);fa(e,n,o,t),ma(e,i,s||t);const l=o?ja(e,t):void 0;return t&&$n(!1),l}function ja(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Yr);const{setup:n}=s;if(n){wt();const i=e.setupContext=n.length>1?Oa(e):null,o=js(e),l=ks(n,e,0,[e.props,i]),r=mo(l);if(Et(),o(),(r||e.sp)&&!vs(e)&&tl(e),r){if(l.then(ki,ki),t)return l.then(a=>{ji(e,a)}).catch(a=>{sn(a,e,0)});e.asyncDep=l}else ji(e,l)}else Pl(e)}function ji(e,t,s){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=Bo(t)),Pl(e)}function Pl(e,t,s){const n=e.type;e.render||(e.render=n.render||dt);{const i=js(e);wt();try{Zr(e)}finally{Et(),i()}}}const Da={get(e,t){return Re(e,"get",""),e[t]}};function Oa(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,Da),slots:e.slots,emit:e.emit,expose:t}}function ii(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Bo(wr(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in bs)return bs[s](e)},has(t,s){return s in t||s in bs}})):e.proxy}function Ma(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function $a(e){return W(e)&&"__vccOpts"in e}const ve=(e,t)=>Pr(e,t,Is);function oi(e,t,s){try{Ws(-1);const n=arguments.length;return n===2?le(t)&&!H(t)?qs(t)?X(e,null,[t]):X(e,t):X(e,null,t):(n>3?s=Array.prototype.slice.call(arguments,2):n===3&&qs(s)&&(s=[s]),X(e,t,s))}finally{Ws(1)}}const Ua="3.5.31";let Un;const Di=typeof window<"u"&&window.trustedTypes;if(Di)try{Un=Di.createPolicy("vue",{createHTML:e=>e})}catch{}const Rl=Un?e=>Un.createHTML(e):e=>e,La="http://www.w3.org/2000/svg",Na="http://www.w3.org/1998/Math/MathML",bt=typeof document<"u"?document:null,Oi=bt&&bt.createElement("template"),Ba={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const i=t==="svg"?bt.createElementNS(La,e):t==="mathml"?bt.createElementNS(Na,e):s?bt.createElement(e,{is:s}):bt.createElement(e);return e==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:e=>bt.createTextNode(e),createComment:e=>bt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,n,i,o){const l=s?s.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),s),!(i===o||!(i=i.nextSibling)););else{Oi.innerHTML=Rl(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const r=Oi.content;if(n==="svg"||n==="mathml"){const a=r.firstChild;for(;a.firstChild;)r.appendChild(a.firstChild);r.removeChild(a)}t.insertBefore(r,s)}return[l?l.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},Rt="transition",ds="animation",Ps=Symbol("_vtc"),Tl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Fa=Ee({},zo,Tl),Ha=e=>(e.displayName="Transition",e.props=Fa,e),Va=Ha((e,{slots:t})=>oi(Br,Ka(e),t)),Nt=(e,t=[])=>{H(e)?e.forEach(s=>s(...t)):e&&e(...t)},Mi=e=>e?H(e)?e.some(t=>t.length>1):e.length>1:!1;function Ka(e){const t={};for(const M in e)M in Tl||(t[M]=e[M]);if(e.css===!1)return t;const{name:s="v",type:n,duration:i,enterFromClass:o=`${s}-enter-from`,enterActiveClass:l=`${s}-enter-active`,enterToClass:r=`${s}-enter-to`,appearFromClass:a=o,appearActiveClass:d=l,appearToClass:c=r,leaveFromClass:f=`${s}-leave-from`,leaveActiveClass:h=`${s}-leave-active`,leaveToClass:m=`${s}-leave-to`}=e,b=Wa(i),v=b&&b[0],C=b&&b[1],{onBeforeEnter:I,onEnter:R,onEnterCancelled:U,onLeave:O,onLeaveCancelled:G,onBeforeAppear:te=I,onAppear:Q=R,onAppearCancelled:Ce=U}=t,V=(M,se,xe,Fe)=>{M._enterCancelled=Fe,Bt(M,se?c:r),Bt(M,se?d:l),xe&&xe()},z=(M,se)=>{M._isLeaving=!1,Bt(M,f),Bt(M,m),Bt(M,h),se&&se()},re=M=>(se,xe)=>{const Fe=M?Q:R,ye=()=>V(se,M,xe);Nt(Fe,[se,ye]),$i(()=>{Bt(se,M?a:o),mt(se,M?c:r),Mi(Fe)||Ui(se,n,v,ye)})};return Ee(t,{onBeforeEnter(M){Nt(I,[M]),mt(M,o),mt(M,l)},onBeforeAppear(M){Nt(te,[M]),mt(M,a),mt(M,d)},onEnter:re(!1),onAppear:re(!0),onLeave(M,se){M._isLeaving=!0;const xe=()=>z(M,se);mt(M,f),M._enterCancelled?(mt(M,h),Bi(M)):(Bi(M),mt(M,h)),$i(()=>{M._isLeaving&&(Bt(M,f),mt(M,m),Mi(O)||Ui(M,n,C,xe))}),Nt(O,[M,xe])},onEnterCancelled(M){V(M,!1,void 0,!0),Nt(U,[M])},onAppearCancelled(M){V(M,!0,void 0,!0),Nt(Ce,[M])},onLeaveCancelled(M){z(M),Nt(G,[M])}})}function Wa(e){if(e==null)return null;if(le(e))return[bn(e.enter),bn(e.leave)];{const t=bn(e);return[t,t]}}function bn(e){return zl(e)}function mt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e[Ps]||(e[Ps]=new Set)).add(t)}function Bt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const s=e[Ps];s&&(s.delete(t),s.size||(e[Ps]=void 0))}function $i(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let qa=0;function Ui(e,t,s,n){const i=e._endId=++qa,o=()=>{i===e._endId&&n()};if(s!=null)return setTimeout(o,s);const{type:l,timeout:r,propCount:a}=Ga(e,t);if(!l)return n();const d=l+"end";let c=0;const f=()=>{e.removeEventListener(d,h),o()},h=m=>{m.target===e&&++c>=a&&f()};setTimeout(()=>{c<a&&f()},r+1),e.addEventListener(d,h)}function Ga(e,t){const s=window.getComputedStyle(e),n=b=>(s[b]||"").split(", "),i=n(`${Rt}Delay`),o=n(`${Rt}Duration`),l=Li(i,o),r=n(`${ds}Delay`),a=n(`${ds}Duration`),d=Li(r,a);let c=null,f=0,h=0;t===Rt?l>0&&(c=Rt,f=l,h=o.length):t===ds?d>0&&(c=ds,f=d,h=a.length):(f=Math.max(l,d),c=f>0?l>d?Rt:ds:null,h=c?c===Rt?o.length:a.length:0);const m=c===Rt&&/\b(?:transform|all)(?:,|$)/.test(n(`${Rt}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:m}}function Li(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((s,n)=>Ni(s)+Ni(e[n])))}function Ni(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Bi(e){return(e?e.ownerDocument:document).body.offsetHeight}function Xa(e,t,s){const n=e[Ps];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const Fi=Symbol("_vod"),za=Symbol("_vsh"),Ja=Symbol(""),Qa=/(?:^|;)\s*display\s*:/;function Ya(e,t,s){const n=e.style,i=be(s);let o=!1;if(s&&!i){if(t)if(be(t))for(const l of t.split(";")){const r=l.slice(0,l.indexOf(":")).trim();s[r]==null&&Ns(n,r,"")}else for(const l in t)s[l]==null&&Ns(n,l,"");for(const l in s)l==="display"&&(o=!0),Ns(n,l,s[l])}else if(i){if(t!==s){const l=n[Ja];l&&(s+=";"+l),n.cssText=s,o=Qa.test(s)}}else t&&e.removeAttribute("style");Fi in e&&(e[Fi]=o?n.display:"",e[za]&&(n.display="none"))}const Hi=/\s*!important$/;function Ns(e,t,s){if(H(s))s.forEach(n=>Ns(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=Za(e,t);Hi.test(s)?e.setProperty(Gt(n),s.replace(Hi,""),"important"):e[n]=s}}const Vi=["Webkit","Moz","ms"],yn={};function Za(e,t){const s=yn[t];if(s)return s;let n=Ue(t);if(n!=="filter"&&n in e)return yn[t]=n;n=Ys(n);for(let i=0;i<Vi.length;i++){const o=Vi[i]+n;if(o in e)return yn[t]=o}return t}const Ki="http://www.w3.org/1999/xlink";function Wi(e,t,s,n,i,o=tr(t)){n&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(Ki,t.slice(6,t.length)):e.setAttributeNS(Ki,t,s):s==null||o&&!So(s)?e.removeAttribute(t):e.setAttribute(t,o?"":_t(s)?String(s):s)}function qi(e,t,s,n,i){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?Rl(s):s);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const r=o==="OPTION"?e.getAttribute("value")||"":e.value,a=s==null?e.type==="checkbox"?"on":"":String(s);(r!==a||!("_value"in e))&&(e.value=a),s==null&&e.removeAttribute(t),e._value=s;return}let l=!1;if(s===""||s==null){const r=typeof e[t];r==="boolean"?s=So(s):s==null&&r==="string"?(s="",l=!0):r==="number"&&(s=0,l=!0)}try{e[t]=s}catch{}l&&e.removeAttribute(i||t)}function ec(e,t,s,n){e.addEventListener(t,s,n)}function tc(e,t,s,n){e.removeEventListener(t,s,n)}const Gi=Symbol("_vei");function sc(e,t,s,n,i=null){const o=e[Gi]||(e[Gi]={}),l=o[t];if(n&&l)l.value=n;else{const[r,a]=nc(t);if(n){const d=o[t]=lc(n,i);ec(e,r,d,a)}else l&&(tc(e,r,l,a),o[t]=void 0)}}const Xi=/(?:Once|Passive|Capture)$/;function nc(e){let t;if(Xi.test(e)){t={};let n;for(;n=e.match(Xi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Gt(e.slice(2)),t]}let Sn=0;const ic=Promise.resolve(),oc=()=>Sn||(ic.then(()=>Sn=0),Sn=Date.now());function lc(e,t){const s=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=s.attached)return;Ye(rc(n,s.value),t,5,[n])};return s.value=e,s.attached=oc(),s}function rc(e,t){if(H(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>i=>!i._stopped&&n&&n(i))}else return t}const zi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ac=(e,t,s,n,i,o)=>{const l=i==="svg";t==="class"?Xa(e,n,l):t==="style"?Ya(e,s,n):zs(t)?Js(t)||sc(e,t,s,n,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):cc(e,t,n,l))?(qi(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Wi(e,t,n,l,o,t!=="value")):e._isVueCE&&(pc(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!be(n)))?qi(e,Ue(t),n,o,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Wi(e,t,n,l))};function cc(e,t,s,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&zi(t)&&W(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return zi(t)&&be(s)?!1:t in e}function pc(e,t){const s=e._def.props;if(!s)return!1;const n=Ue(t);return Array.isArray(s)?s.some(i=>Ue(i)===n):Object.keys(s).some(i=>Ue(i)===n)}const dc=["ctrl","shift","alt","meta"],uc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>dc.some(s=>e[`${s}Key`]&&!t.includes(s))},Xs=(e,t)=>{if(!e)return e;const s=e._withMods||(e._withMods={}),n=t.join(".");return s[n]||(s[n]=((i,...o)=>{for(let l=0;l<t.length;l++){const r=uc[t[l]];if(r&&r(i,t))return}return e(i,...o)}))},fc=Ee({patchProp:ac},Ba);let Ji;function _c(){return Ji||(Ji=ba(fc))}const hc=((...e)=>{const t=_c().createApp(...e),{mount:s}=t;return t.mount=n=>{const i=mc(n);if(!i)return;const o=t._component;!W(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const l=s(i,!1,gc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),l},t});function gc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function mc(e){return be(e)?document.querySelector(e):e}const Yt=typeof document<"u";function kl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function vc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&kl(e.default)}const ie=Object.assign;function An(e,t){const s={};for(const n in t){const i=t[n];s[n]=et(i)?i.map(e):e(i)}return s}const Ss=()=>{},et=Array.isArray;function Qi(e,t){const s={};for(const n in e)s[n]=n in t?t[n]:e[n];return s}let ge=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const jl=Symbol("");ge.MATCHER_NOT_FOUND+"",ge.NAVIGATION_GUARD_REDIRECT+"",ge.NAVIGATION_ABORTED+"",ge.NAVIGATION_CANCELLED+"",ge.NAVIGATION_DUPLICATED+"";function os(e,t){return ie(new Error,{type:e,[jl]:!0},t)}function vt(e,t){return e instanceof Error&&jl in e&&(t==null||!!(e.type&t))}const bc=["params","query","hash"];function yc(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const s of bc)s in e&&(t[s]=e[s]);return JSON.stringify(t,null,2)}const Sc=Symbol(""),Yi=Symbol(""),li=Symbol(""),ri=Symbol(""),Ln=Symbol("");function ai(e){return ut(ri)}const Dl=/#/g,Ac=/&/g,wc=/\//g,Ec=/=/g,Cc=/\?/g,Ol=/\+/g,xc=/%5B/g,Ic=/%5D/g,Ml=/%5E/g,Pc=/%60/g,$l=/%7B/g,Rc=/%7C/g,Ul=/%7D/g,Tc=/%20/g;function ci(e){return e==null?"":encodeURI(""+e).replace(Rc,"|").replace(xc,"[").replace(Ic,"]")}function kc(e){return ci(e).replace($l,"{").replace(Ul,"}").replace(Ml,"^")}function Nn(e){return ci(e).replace(Ol,"%2B").replace(Tc,"+").replace(Dl,"%23").replace(Ac,"%26").replace(Pc,"`").replace($l,"{").replace(Ul,"}").replace(Ml,"^")}function jc(e){return Nn(e).replace(Ec,"%3D")}function Dc(e){return ci(e).replace(Dl,"%23").replace(Cc,"%3F")}function Oc(e){return Dc(e).replace(wc,"%2F")}function Rs(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Mc=/\/$/,$c=e=>e.replace(Mc,"");function wn(e,t,s="/"){let n,i={},o="",l="";const r=t.indexOf("#");let a=t.indexOf("?");return a=r>=0&&a>r?-1:a,a>=0&&(n=t.slice(0,a),o=t.slice(a,r>0?r:t.length),i=e(o.slice(1))),r>=0&&(n=n||t.slice(0,r),l=t.slice(r,t.length)),n=Bc(n??t,s),{fullPath:n+o+l,path:n,query:i,hash:Rs(l)}}function Uc(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function Zi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Lc(e,t,s){const n=t.matched.length-1,i=s.matched.length-1;return n>-1&&n===i&&ls(t.matched[n],s.matched[i])&&Ll(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function ls(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ll(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var s in e)if(!Nc(e[s],t[s]))return!1;return!0}function Nc(e,t){return et(e)?eo(e,t):et(t)?eo(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function eo(e,t){return et(t)?e.length===t.length&&e.every((s,n)=>s===t[n]):e.length===1&&e[0]===t}function Bc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),n=e.split("/"),i=n[n.length-1];(i===".."||i===".")&&n.push("");let o=s.length-1,l,r;for(l=0;l<n.length;l++)if(r=n[l],r!==".")if(r==="..")o>1&&o--;else break;return s.slice(0,o).join("/")+"/"+n.slice(l).join("/")}const Tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Bn=(function(e){return e.pop="pop",e.push="push",e})({}),En=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Fc(e){if(!e)if(Yt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),$c(e)}const Hc=/^[^#]+#/;function Vc(e,t){return e.replace(Hc,"#")+t}function Kc(e,t){const s=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-s.left-(t.left||0),top:n.top-s.top-(t.top||0)}}const cn=()=>({left:window.scrollX,top:window.scrollY});function Wc(e){let t;if("el"in e){const s=e.el,n=typeof s=="string"&&s.startsWith("#"),i=typeof s=="string"?n?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!i)return;t=Kc(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function to(e,t){return(history.state?history.state.position-t:-1)+e}const Fn=new Map;function qc(e,t){Fn.set(e,t)}function Gc(e){const t=Fn.get(e);return Fn.delete(e),t}function Xc(e){return typeof e=="string"||e&&typeof e=="object"}function Nl(e){return typeof e=="string"||typeof e=="symbol"}function zc(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<s.length;++n){const i=s[n].replace(Ol," "),o=i.indexOf("="),l=Rs(o<0?i:i.slice(0,o)),r=o<0?null:Rs(i.slice(o+1));if(l in t){let a=t[l];et(a)||(a=t[l]=[a]),a.push(r)}else t[l]=r}return t}function so(e){let t="";for(let s in e){const n=e[s];if(s=jc(s),n==null){n!==void 0&&(t+=(t.length?"&":"")+s);continue}(et(n)?n.map(i=>i&&Nn(i)):[n&&Nn(n)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+s,i!=null&&(t+="="+i))})}return t}function Jc(e){const t={};for(const s in e){const n=e[s];n!==void 0&&(t[s]=et(n)?n.map(i=>i==null?null:""+i):n==null?n:""+n)}return t}function us(){let e=[];function t(n){return e.push(n),()=>{const i=e.indexOf(n);i>-1&&e.splice(i,1)}}function s(){e=[]}return{add:t,list:()=>e.slice(),reset:s}}function jt(e,t,s,n,i,o=l=>l()){const l=n&&(n.enterCallbacks[i]=n.enterCallbacks[i]||[]);return()=>new Promise((r,a)=>{const d=h=>{h===!1?a(os(ge.NAVIGATION_ABORTED,{from:s,to:t})):h instanceof Error?a(h):Xc(h)?a(os(ge.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(l&&n.enterCallbacks[i]===l&&typeof h=="function"&&l.push(h),r())},c=o(()=>e.call(n&&n.instances[i],t,s,d));let f=Promise.resolve(c);e.length<3&&(f=f.then(d)),f.catch(h=>a(h))})}function Cn(e,t,s,n,i=o=>o()){const o=[];for(const l of e)for(const r in l.components){let a=l.components[r];if(!(t!=="beforeRouteEnter"&&!l.instances[r]))if(kl(a)){const d=(a.__vccOpts||a)[t];d&&o.push(jt(d,s,n,l,r,i))}else{let d=a();o.push(()=>d.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${r}" at "${l.path}"`);const f=vc(c)?c.default:c;l.mods[r]=c,l.components[r]=f;const h=(f.__vccOpts||f)[t];return h&&jt(h,s,n,l,r,i)()}))}}return o}function Qc(e,t){const s=[],n=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let l=0;l<o;l++){const r=t.matched[l];r&&(e.matched.find(d=>ls(d,r))?n.push(r):s.push(r));const a=e.matched[l];a&&(t.matched.find(d=>ls(d,a))||i.push(a))}return[s,n,i]}let Yc=()=>location.protocol+"//"+location.host;function Bl(e,t){const{pathname:s,search:n,hash:i}=t,o=e.indexOf("#");if(o>-1){let l=i.includes(e.slice(o))?e.slice(o).length:1,r=i.slice(l);return r[0]!=="/"&&(r="/"+r),Zi(r,"")}return Zi(s,e)+n+i}function Zc(e,t,s,n){let i=[],o=[],l=null;const r=({state:h})=>{const m=Bl(e,location),b=s.value,v=t.value;let C=0;if(h){if(s.value=m,t.value=h,l&&l===b){l=null;return}C=v?h.position-v.position:0}else n(m);i.forEach(I=>{I(s.value,b,{delta:C,type:Bn.pop,direction:C?C>0?En.forward:En.back:En.unknown})})};function a(){l=s.value}function d(h){i.push(h);const m=()=>{const b=i.indexOf(h);b>-1&&i.splice(b,1)};return o.push(m),m}function c(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ie({},h.state,{scroll:cn()}),"")}}function f(){for(const h of o)h();o=[],window.removeEventListener("popstate",r),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",r),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:a,listen:d,destroy:f}}function no(e,t,s,n=!1,i=!1){return{back:e,current:t,forward:s,replaced:n,position:window.history.length,scroll:i?cn():null}}function ep(e){const{history:t,location:s}=window,n={value:Bl(e,s)},i={value:t.state};i.value||o(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(a,d,c){const f=e.indexOf("#"),h=f>-1?(s.host&&document.querySelector("base")?e:e.slice(f))+a:Yc()+e+a;try{t[c?"replaceState":"pushState"](d,"",h),i.value=d}catch(m){console.error(m),s[c?"replace":"assign"](h)}}function l(a,d){o(a,ie({},t.state,no(i.value.back,a,i.value.forward,!0),d,{position:i.value.position}),!0),n.value=a}function r(a,d){const c=ie({},i.value,t.state,{forward:a,scroll:cn()});o(c.current,c,!0),o(a,ie({},no(n.value,a,null),{position:c.position+1},d),!1),n.value=a}return{location:n,state:i,push:r,replace:l}}function tp(e){e=Fc(e);const t=ep(e),s=Zc(e,t.state,t.location,t.replace);function n(o,l=!0){l||s.pauseListeners(),history.go(o)}const i=ie({location:"",base:e,go:n,createHref:Vc.bind(null,e)},t,s);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function sp(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),tp(e)}let Vt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ae=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ae||{});const np={type:Vt.Static,value:""},ip=/[a-zA-Z0-9_]/;function op(e){if(!e)return[[]];if(e==="/")return[[np]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${s})/"${d}": ${m}`)}let s=Ae.Static,n=s;const i=[];let o;function l(){o&&i.push(o),o=[]}let r=0,a,d="",c="";function f(){d&&(s===Ae.Static?o.push({type:Vt.Static,value:d}):s===Ae.Param||s===Ae.ParamRegExp||s===Ae.ParamRegExpEnd?(o.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),o.push({type:Vt.Param,value:d,regexp:c,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),d="")}function h(){d+=a}for(;r<e.length;){if(a=e[r++],a==="\\"&&s!==Ae.ParamRegExp){n=s,s=Ae.EscapeNext;continue}switch(s){case Ae.Static:a==="/"?(d&&f(),l()):a===":"?(f(),s=Ae.Param):h();break;case Ae.EscapeNext:h(),s=n;break;case Ae.Param:a==="("?s=Ae.ParamRegExp:ip.test(a)?h():(f(),s=Ae.Static,a!=="*"&&a!=="?"&&a!=="+"&&r--);break;case Ae.ParamRegExp:a===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+a:s=Ae.ParamRegExpEnd:c+=a;break;case Ae.ParamRegExpEnd:f(),s=Ae.Static,a!=="*"&&a!=="?"&&a!=="+"&&r--,c="";break;default:t("Unknown state");break}}return s===Ae.ParamRegExp&&t(`Unfinished custom RegExp for param "${d}"`),f(),l(),i}const io="[^/]+?",lp={sensitive:!1,strict:!1,start:!0,end:!0};var De=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(De||{});const rp=/[.+*?^${}()[\]/\\]/g;function ap(e,t){const s=ie({},lp,t),n=[];let i=s.start?"^":"";const o=[];for(const d of e){const c=d.length?[]:[De.Root];s.strict&&!d.length&&(i+="/");for(let f=0;f<d.length;f++){const h=d[f];let m=De.Segment+(s.sensitive?De.BonusCaseSensitive:0);if(h.type===Vt.Static)f||(i+="/"),i+=h.value.replace(rp,"\\$&"),m+=De.Static;else if(h.type===Vt.Param){const{value:b,repeatable:v,optional:C,regexp:I}=h;o.push({name:b,repeatable:v,optional:C});const R=I||io;if(R!==io){m+=De.BonusCustomRegExp;try{new RegExp(`(${R})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${b}" (${R}): `+O.message)}}let U=v?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;f||(U=C&&d.length<2?`(?:/${U})`:"/"+U),C&&(U+="?"),i+=U,m+=De.Dynamic,C&&(m+=De.BonusOptional),v&&(m+=De.BonusRepeatable),R===".*"&&(m+=De.BonusWildcard)}c.push(m)}n.push(c)}if(s.strict&&s.end){const d=n.length-1;n[d][n[d].length-1]+=De.BonusStrict}s.strict||(i+="/?"),s.end?i+="$":s.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const l=new RegExp(i,s.sensitive?"":"i");function r(d){const c=d.match(l),f={};if(!c)return null;for(let h=1;h<c.length;h++){const m=c[h]||"",b=o[h-1];f[b.name]=m&&b.repeatable?m.split("/"):m}return f}function a(d){let c="",f=!1;for(const h of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const m of h)if(m.type===Vt.Static)c+=m.value;else if(m.type===Vt.Param){const{value:b,repeatable:v,optional:C}=m,I=b in d?d[b]:"";if(et(I)&&!v)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const R=et(I)?I.join("/"):I;if(!R)if(C)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);c+=R}}return c||"/"}return{re:l,score:n,keys:o,parse:r,stringify:a}}function cp(e,t){let s=0;for(;s<e.length&&s<t.length;){const n=t[s]-e[s];if(n)return n;s++}return e.length<t.length?e.length===1&&e[0]===De.Static+De.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===De.Static+De.Segment?1:-1:0}function Fl(e,t){let s=0;const n=e.score,i=t.score;for(;s<n.length&&s<i.length;){const o=cp(n[s],i[s]);if(o)return o;s++}if(Math.abs(i.length-n.length)===1){if(oo(n))return 1;if(oo(i))return-1}return i.length-n.length}function oo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const pp={strict:!1,end:!0,sensitive:!1};function dp(e,t,s){const n=ap(op(e.path),s),i=ie(n,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function up(e,t){const s=[],n=new Map;t=Qi(pp,t);function i(f){return n.get(f)}function o(f,h,m){const b=!m,v=ro(f);v.aliasOf=m&&m.record;const C=Qi(t,f),I=[v];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const G of O)I.push(ro(ie({},v,{components:m?m.record.components:v.components,path:G,aliasOf:m?m.record:v})))}let R,U;for(const O of I){const{path:G}=O;if(h&&G[0]!=="/"){const te=h.record.path,Q=te[te.length-1]==="/"?"":"/";O.path=h.record.path+(G&&Q+G)}if(R=dp(O,h,C),m?m.alias.push(R):(U=U||R,U!==R&&U.alias.push(R),b&&f.name&&!ao(R)&&l(f.name)),Hl(R)&&a(R),v.children){const te=v.children;for(let Q=0;Q<te.length;Q++)o(te[Q],R,m&&m.children[Q])}m=m||R}return U?()=>{l(U)}:Ss}function l(f){if(Nl(f)){const h=n.get(f);h&&(n.delete(f),s.splice(s.indexOf(h),1),h.children.forEach(l),h.alias.forEach(l))}else{const h=s.indexOf(f);h>-1&&(s.splice(h,1),f.record.name&&n.delete(f.record.name),f.children.forEach(l),f.alias.forEach(l))}}function r(){return s}function a(f){const h=hp(f,s);s.splice(h,0,f),f.record.name&&!ao(f)&&n.set(f.record.name,f)}function d(f,h){let m,b={},v,C;if("name"in f&&f.name){if(m=n.get(f.name),!m)throw os(ge.MATCHER_NOT_FOUND,{location:f});C=m.record.name,b=ie(lo(h.params,m.keys.filter(U=>!U.optional).concat(m.parent?m.parent.keys.filter(U=>U.optional):[]).map(U=>U.name)),f.params&&lo(f.params,m.keys.map(U=>U.name))),v=m.stringify(b)}else if(f.path!=null)v=f.path,m=s.find(U=>U.re.test(v)),m&&(b=m.parse(v),C=m.record.name);else{if(m=h.name?n.get(h.name):s.find(U=>U.re.test(h.path)),!m)throw os(ge.MATCHER_NOT_FOUND,{location:f,currentLocation:h});C=m.record.name,b=ie({},h.params,f.params),v=m.stringify(b)}const I=[];let R=m;for(;R;)I.unshift(R.record),R=R.parent;return{name:C,path:v,params:b,matched:I,meta:_p(I)}}e.forEach(f=>o(f));function c(){s.length=0,n.clear()}return{addRoute:o,resolve:d,removeRoute:l,clearRoutes:c,getRoutes:r,getRecordMatcher:i}}function lo(e,t){const s={};for(const n of t)n in e&&(s[n]=e[n]);return s}function ro(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:fp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function fp(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const n in e.components)t[n]=typeof s=="object"?s[n]:s;return t}function ao(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function _p(e){return e.reduce((t,s)=>ie(t,s.meta),{})}function hp(e,t){let s=0,n=t.length;for(;s!==n;){const o=s+n>>1;Fl(e,t[o])<0?n=o:s=o+1}const i=gp(e);return i&&(n=t.lastIndexOf(i,n-1)),n}function gp(e){let t=e;for(;t=t.parent;)if(Hl(t)&&Fl(e,t)===0)return t}function Hl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function co(e){const t=ut(li),s=ut(ri),n=ve(()=>{const a=ue(e.to);return t.resolve(a)}),i=ve(()=>{const{matched:a}=n.value,{length:d}=a,c=a[d-1],f=s.matched;if(!c||!f.length)return-1;const h=f.findIndex(ls.bind(null,c));if(h>-1)return h;const m=po(a[d-2]);return d>1&&po(c)===m&&f[f.length-1].path!==m?f.findIndex(ls.bind(null,a[d-2])):h}),o=ve(()=>i.value>-1&&yp(s.params,n.value.params)),l=ve(()=>i.value>-1&&i.value===s.matched.length-1&&Ll(s.params,n.value.params));function r(a={}){if(bp(a)){const d=t[ue(e.replace)?"replace":"push"](ue(e.to)).catch(Ss);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:n,href:ve(()=>n.value.href),isActive:o,isExactActive:l,navigate:r}}function mp(e){return e.length===1?e[0]:e}const vp=el({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:co,setup(e,{slots:t}){const s=tn(co(e)),{options:n}=ut(li),i=ve(()=>({[uo(e.activeClass,n.linkActiveClass,"router-link-active")]:s.isActive,[uo(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const o=t.default&&mp(t.default(s));return e.custom?o:oi("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:i.value},o)}}}),Oe=vp;function bp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function yp(e,t){for(const s in t){const n=t[s],i=e[s];if(typeof n=="string"){if(n!==i)return!1}else if(!et(i)||i.length!==n.length||n.some((o,l)=>o.valueOf()!==i[l].valueOf()))return!1}return!0}function po(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const uo=(e,t,s)=>e??t??s,Sp=el({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const n=ut(Ln),i=ve(()=>e.route||n.value),o=ut(Yi,0),l=ve(()=>{let d=ue(o);const{matched:c}=i.value;let f;for(;(f=c[d])&&!f.components;)d++;return d}),r=ve(()=>i.value.matched[l.value]);$s(Yi,ve(()=>l.value+1)),$s(Sc,r),$s(Ln,i);const a=Ie();return qt(()=>[a.value,r.value,e.name],([d,c,f],[h,m,b])=>{c&&(c.instances[f]=d,m&&m!==c&&d&&d===h&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),d&&c&&(!m||!ls(c,m)||!h)&&(c.enterCallbacks[f]||[]).forEach(v=>v(d))},{flush:"post"}),()=>{const d=i.value,c=e.name,f=r.value,h=f&&f.components[c];if(!h)return fo(s.default,{Component:h,route:d});const m=f.props[c],b=m?m===!0?d.params:typeof m=="function"?m(d):m:null,C=oi(h,ie({},b,t,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(f.instances[c]=null)},ref:a}));return fo(s.default,{Component:C,route:d})||C}}});function fo(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const Ap=Sp;function wp(e){const t=up(e.routes,e),s=e.parseQuery||zc,n=e.stringifyQuery||so,i=e.history,o=us(),l=us(),r=us(),a=Er(Tt);let d=Tt;Yt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=An.bind(null,A=>""+A),f=An.bind(null,Oc),h=An.bind(null,Rs);function m(A,$){let k,N;return Nl(A)?(k=t.getRecordMatcher(A),N=$):N=A,t.addRoute(N,k)}function b(A){const $=t.getRecordMatcher(A);$&&t.removeRoute($)}function v(){return t.getRoutes().map(A=>A.record)}function C(A){return!!t.getRecordMatcher(A)}function I(A,$){if($=ie({},$||a.value),typeof A=="string"){const g=wn(s,A,$.path),y=t.resolve({path:g.path},$),w=i.createHref(g.fullPath);return ie(g,y,{params:h(y.params),hash:Rs(g.hash),redirectedFrom:void 0,href:w})}let k;if(A.path!=null)k=ie({},A,{path:wn(s,A.path,$.path).path});else{const g=ie({},A.params);for(const y in g)g[y]==null&&delete g[y];k=ie({},A,{params:f(g)}),$.params=f($.params)}const N=t.resolve(k,$),J=A.hash||"";N.params=c(h(N.params));const p=Uc(n,ie({},A,{hash:kc(J),path:N.path})),_=i.createHref(p);return ie({fullPath:p,hash:J,query:n===so?Jc(A.query):A.query||{}},N,{redirectedFrom:void 0,href:_})}function R(A){return typeof A=="string"?wn(s,A,a.value.path):ie({},A)}function U(A,$){if(d!==A)return os(ge.NAVIGATION_CANCELLED,{from:$,to:A})}function O(A){return Q(A)}function G(A){return O(ie(R(A),{replace:!0}))}function te(A,$){const k=A.matched[A.matched.length-1];if(k&&k.redirect){const{redirect:N}=k;let J=typeof N=="function"?N(A,$):N;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=R(J):{path:J},J.params={}),ie({query:A.query,hash:A.hash,params:J.path!=null?{}:A.params},J)}}function Q(A,$){const k=d=I(A),N=a.value,J=A.state,p=A.force,_=A.replace===!0,g=te(k,N);if(g)return Q(ie(R(g),{state:typeof g=="object"?ie({},J,g.state):J,force:p,replace:_}),$||k);const y=k;y.redirectedFrom=$;let w;return!p&&Lc(n,N,k)&&(w=os(ge.NAVIGATION_DUPLICATED,{to:y,from:N}),tt(N,N,!0,!1)),(w?Promise.resolve(w):z(y,N)).catch(S=>vt(S)?vt(S,ge.NAVIGATION_GUARD_REDIRECT)?S:Pt(S):ne(S,y,N)).then(S=>{if(S){if(vt(S,ge.NAVIGATION_GUARD_REDIRECT))return Q(ie({replace:_},R(S.to),{state:typeof S.to=="object"?ie({},J,S.to.state):J,force:p}),$||y)}else S=M(y,N,!0,_,J);return re(y,N,S),S})}function Ce(A,$){const k=U(A,$);return k?Promise.reject(k):Promise.resolve()}function V(A){const $=zt.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(A):A()}function z(A,$){let k;const[N,J,p]=Qc(A,$);k=Cn(N.reverse(),"beforeRouteLeave",A,$);for(const g of N)g.leaveGuards.forEach(y=>{k.push(jt(y,A,$))});const _=Ce.bind(null,A,$);return k.push(_),Ke(k).then(()=>{k=[];for(const g of o.list())k.push(jt(g,A,$));return k.push(_),Ke(k)}).then(()=>{k=Cn(J,"beforeRouteUpdate",A,$);for(const g of J)g.updateGuards.forEach(y=>{k.push(jt(y,A,$))});return k.push(_),Ke(k)}).then(()=>{k=[];for(const g of p)if(g.beforeEnter)if(et(g.beforeEnter))for(const y of g.beforeEnter)k.push(jt(y,A,$));else k.push(jt(g.beforeEnter,A,$));return k.push(_),Ke(k)}).then(()=>(A.matched.forEach(g=>g.enterCallbacks={}),k=Cn(p,"beforeRouteEnter",A,$,V),k.push(_),Ke(k))).then(()=>{k=[];for(const g of l.list())k.push(jt(g,A,$));return k.push(_),Ke(k)}).catch(g=>vt(g,ge.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function re(A,$,k){r.list().forEach(N=>V(()=>N(A,$,k)))}function M(A,$,k,N,J){const p=U(A,$);if(p)return p;const _=$===Tt,g=Yt?history.state:{};k&&(N||_?i.replace(A.fullPath,ie({scroll:_&&g&&g.scroll},J)):i.push(A.fullPath,J)),a.value=A,tt(A,$,k,_),Pt()}let se;function xe(){se||(se=i.listen((A,$,k)=>{if(!$t.listening)return;const N=I(A),J=te(N,$t.currentRoute.value);if(J){Q(ie(J,{replace:!0,force:!0}),N).catch(Ss);return}d=N;const p=a.value;Yt&&qc(to(p.fullPath,k.delta),cn()),z(N,p).catch(_=>vt(_,ge.NAVIGATION_ABORTED|ge.NAVIGATION_CANCELLED)?_:vt(_,ge.NAVIGATION_GUARD_REDIRECT)?(Q(ie(R(_.to),{force:!0}),N).then(g=>{vt(g,ge.NAVIGATION_ABORTED|ge.NAVIGATION_DUPLICATED)&&!k.delta&&k.type===Bn.pop&&i.go(-1,!1)}).catch(Ss),Promise.reject()):(k.delta&&i.go(-k.delta,!1),ne(_,N,p))).then(_=>{_=_||M(N,p,!1),_&&(k.delta&&!vt(_,ge.NAVIGATION_CANCELLED)?i.go(-k.delta,!1):k.type===Bn.pop&&vt(_,ge.NAVIGATION_ABORTED|ge.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),re(N,p,_)}).catch(Ss)}))}let Fe=us(),ye=us(),ae;function ne(A,$,k){Pt(A);const N=ye.list();return N.length?N.forEach(J=>J(A,$,k)):console.error(A),Promise.reject(A)}function ht(){return ae&&a.value!==Tt?Promise.resolve():new Promise((A,$)=>{Fe.add([A,$])})}function Pt(A){return ae||(ae=!A,xe(),Fe.list().forEach(([$,k])=>A?k(A):$()),Fe.reset()),A}function tt(A,$,k,N){const{scrollBehavior:J}=e;if(!Yt||!J)return Promise.resolve();const p=!k&&Gc(to(A.fullPath,0))||(N||!k)&&history.state&&history.state.scroll||null;return is().then(()=>J(A,$,p)).then(_=>_&&Wc(_)).catch(_=>ne(_,A,$))}const Le=A=>i.go(A);let Xt;const zt=new Set,$t={currentRoute:a,listening:!0,addRoute:m,removeRoute:b,clearRoutes:t.clearRoutes,hasRoute:C,getRoutes:v,resolve:I,options:e,push:O,replace:G,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:o.add,beforeResolve:l.add,afterEach:r.add,onError:ye.add,isReady:ht,install(A){A.component("RouterLink",Oe),A.component("RouterView",Ap),A.config.globalProperties.$router=$t,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>ue(a)}),Yt&&!Xt&&a.value===Tt&&(Xt=!0,O(i.location).catch(N=>{}));const $={};for(const N in Tt)Object.defineProperty($,N,{get:()=>a.value[N],enumerable:!0});A.provide(li,$t),A.provide(ri,Lo($)),A.provide(Ln,a);const k=A.unmount;zt.add(A),A.unmount=function(){zt.delete(A),zt.size<1&&(d=Tt,se&&se(),se=null,a.value=Tt,Xt=!1,ae=!1),k()}}};function Ke(A){return A.reduce(($,k)=>$.then(()=>V(k)),Promise.resolve())}return $t}const Ep={class:"header"},Cp={class:"container header__inner"},xp={class:"header__right"},Ip=["aria-label","title"],Pp={key:0,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Rp={key:1,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Tp=["aria-expanded"],kp={__name:"Header",setup(e){const t=Ie(!1),s=Ie(!1),n=()=>{t.value=!t.value},i=()=>{t.value=!1},o=()=>{s.value=!s.value,s.value?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.removeAttribute("data-theme"),localStorage.setItem("theme","light"))},l=()=>{localStorage.getItem("theme")==="dark"?(s.value=!0,document.documentElement.setAttribute("data-theme","dark")):(s.value=!1,document.documentElement.removeAttribute("data-theme"))};return It(()=>{l()}),qt(t,r=>{document.body.style.overflow=r?"hidden":""}),(r,a)=>(D(),L("header",Ep,[u("div",Cp,[X(ue(Oe),{to:"/",class:"header__logo",onClick:i},{default:pe(()=>[...a[0]||(a[0]=[ce(" Nomis Yang ",-1)])]),_:1}),u("nav",{class:we(["header__nav",{"header__nav--open":t.value}])},[X(ue(Oe),{to:"/",class:"header__nav-link",onClick:i},{default:pe(()=>[...a[1]||(a[1]=[ce("Home",-1)])]),_:1}),X(ue(Oe),{to:"/projects",class:"header__nav-link",onClick:i},{default:pe(()=>[...a[2]||(a[2]=[ce("Projects",-1)])]),_:1}),X(ue(Oe),{to:"/leadership",class:"header__nav-link",onClick:i},{default:pe(()=>[...a[3]||(a[3]=[ce("Leadership",-1)])]),_:1}),X(ue(Oe),{to:"/about",class:"header__nav-link",onClick:i},{default:pe(()=>[...a[4]||(a[4]=[ce("About",-1)])]),_:1})],2),u("div",xp,[u("button",{class:"header__theme-toggle",onClick:o,"aria-label":s.value?"切換為淺色模式":"切換為深色模式",title:s.value?"切換為淺色模式":"切換為深色模式"},[s.value?(D(),L("svg",Pp,[...a[5]||(a[5]=[ft('<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',9)])])):(D(),L("svg",Rp,[...a[6]||(a[6]=[u("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},null,-1)])]))],8,Ip),u("a",{href:"/portfolio/resume.pdf",target:"_blank",class:"header__cv-btn",onClick:i}," Download CV "),u("button",{class:we(["header__hamburger",{"header__hamburger--open":t.value}]),onClick:n,"aria-expanded":t.value},[...a[7]||(a[7]=[u("span",null,null,-1),u("span",null,null,-1),u("span",null,null,-1)])],10,Tp)])])]))}},pi=(e,t)=>{const s=e.__vccOpts||e;for(const[n,i]of t)s[n]=i;return s},jp={},Dp={class:"footer"};function Op(e,t){return D(),L("footer",Dp,[...t[0]||(t[0]=[ft('<div class="container footer__inner"><div class="footer__ai"><span class="footer__ai-label">For AI</span><a href="https://mudi0710.github.io/portfolio/portfolio-content.html" target="_blank" rel="noopener noreferrer" class="footer__ai-link">完整內容</a><span class="footer__ai-sep">·</span><a href="https://mudi0710.github.io/portfolio/llms.txt" target="_blank" rel="noopener noreferrer" class="footer__ai-link">摘要版</a></div><p class="footer__copy">© 2026 Nomis. All rights reserved.</p><div class="footer__right"><a href="https://www.linkedin.com/in/nomis-yang/" target="_blank" rel="noopener noreferrer" class="footer__linkedin" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a><a href="mailto:nomis820710@gmail.com" class="footer__email">nomis820710@gmail.com</a></div></div>',1)])])}const Mp=pi(jp,[["render",Op]]),$p={__name:"BackToTop",setup(e){const t=Ie(!1),s=()=>{t.value=window.scrollY>400},n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return It(()=>window.addEventListener("scroll",s)),rs(()=>window.removeEventListener("scroll",s)),(i,o)=>(D(),L("button",{class:we(["back-to-top",{"back-to-top--visible":t.value}]),onClick:n,"aria-label":"回到頂部"},[...o[0]||(o[0]=[u("i",{class:"fa-solid fa-arrow-up"},null,-1)])],2))}},Up={__name:"App",setup(e){return(t,s)=>{const n=ln("RouterView");return D(),L(Y,null,[X(kp),u("main",null,[X(n,null,{default:pe(({Component:i})=>[X(Va,{name:"fade",mode:"out-in"},{default:pe(()=>[(D(),Ze(Qr(i)))]),_:2},1024)]),_:1})]),X(Mp),X($p)],64)}}},Lp=pi(Up,[["__scopeId","data-v-91c92250"]]),Np="/portfolio/images/general/hero-photo.jpg",Bp="/portfolio/images/general/avatar-Enn.png",Fp="/portfolio/images/general/avatar-Jenny.png",At=[{id:"bd-portal-demo-report",title:"顛覆 Form 表單的邊界：獨立主導業務銷售工具 Demo Report 的從 0 到 1 設計",description:"業務團隊用 Xmind 整理客戶學習資訊，但心智圖輸出只是一張圖檔，資料無法被內部系統收回再利用。我在 PM 資源幾乎缺席的情況下，獨立完成 UX 研究、UI 設計、Prototype 與切版，並透過業務銷售流程的深度研究，將原始需求從「心智圖系統」重新定位為「陪伴業務完整銷售旅程的數位報告工具」，更首創將 Form 表單與心智圖操作邏輯融合的後台設計，讓大主管直呼「從來沒想過 Form 表單可以做成這樣」。",cover:"/images/projects/bd-portal-demo-report/cover.png",hashtags:["研究驅動設計","產品重新定位","創新互動設計"],tags:["UIUX","Research","Frontend","Cross-functional","Information Architecture"],metrics:[{value:"29",label:"工作天獨立完成"},{value:"0→1",label:"全流程主導"},{value:"2 端",label:"前台報告＋後台表單"}],category:["uiux","frontend"],content:`
    <!-- 角色資訊 -->
    <div class="pd-info">
      <div class="pd-info__item pd-info__item--company">
        <span class="pd-info__label">公司</span>
        <span class="pd-info__value">三貝德數位文創股份有限公司</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">產品</span>
        <span class="pd-info__value">BD Portal — Demo Report 學習適性報告</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">職稱</span>
        <span class="pd-info__value">UIUX Designer（獨立主導，跨 PM 職責）</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">時間</span>
        <!--<span class="pd-info__value">2023.08 – 2023.10（約 29 個工作天）</span> -->
        <span class="pd-info__value">約 29 個工作天</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">負責範圍</span>
        <span class="pd-info__value">UX 研究、資訊架構、UI 設計、Prototype、前端切版（前台報告頁 + 後台 BD Portal 表單）</span>
      </div>
    </div>

    <!-- Prototype 連結 -->
    <h2>成品</h2>
    <p>你可以直接體驗互動原型：</p>
    <div>
      <a
        href="https://www.figma.com/proto/8zSW6z2o9Z4gEPVNFDNgVA/Prototype---SCRM---Demo-Report-%E5%AD%B8%E7%BF%92%E9%81%A9%E6%80%A7%E5%A0%B1%E5%91%8A?node-id=1-4599&viewport=565%2C526%2C0.13&t=vDnLQEhN1ueQozon-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A4599&page-id=1%3A4598"
        target="_blank"
        class="pd-cta">
        → 查看 Figma Prototype (Web)
      </a>
      <a
        href="https://www.figma.com/proto/8zSW6z2o9Z4gEPVNFDNgVA/Prototype---SCRM---Demo-Report-%E5%AD%B8%E7%BF%92%E9%81%A9%E6%80%A7%E5%A0%B1%E5%91%8A?node-id=1-7931&viewport=565%2C646%2C0.43&t=HVHzIr8jekUs143l-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A7931&page-id=1%3A7837"
        target="_blank"
        class="pd-cta">
        → 查看 Figma Prototype (Mobile)
      </a>
    </div>

    <!-- 背景與挑戰 -->
    <h2>背景與挑戰</h2>

    <p>這個專案的起點，來自業務主管向研發部提出的一個需求：「能不能在內部系統 BD Portal 裡，做一套心智圖系統，讓業務可以直接在系統中操作，把客戶的訪談資料保存下來？」</p>

    <p>業務團隊長期使用 Xmind 整理學生的學習狀況，包含強弱科分佈、學習斷點、補強建議。但這套做法有幾個根本限制：</p>
    <ol>
      <li><strong>每位業務的整理方式與視覺品質參差不齊，對家長呈現的專業感缺乏一致性。</strong></li>
      <li><strong>Xmind 輸出的只是一張圖，資料無法被系統收回再利用。</strong></li>
      <li><strong>資訊整理完後，也難以直接銜接到 BD Portal 的後續流程。</strong></li>
    </ol>

    <img src="/portfolio/images/projects/bd-portal-demo-report/img-1.png" alt="業務用 Xmind 繪製的心智圖，並在訪談後提供給客戶" />

    <img src="/portfolio/images/projects/bd-portal-demo-report/img-2.png" alt="業務用 Xmind 繪製的心智圖，並在訪談後提供給客戶" />

    <p>原始需求同時包含一個面向客戶的前台頁面，業務主管期待業務填入訪談內容後，系統自動產出一份學習適性報告，以 Landing Page 連結形式傳送給家長。</p>

    <p>當時 PM（我的直系大主管）與代理 PM（設計主管）工作量均已滿載，專案的前期工作幾乎完全由我一人承擔。我從接到任務的第一刻就清楚：<strong>這是一個單人專案，從理解需求、研究使用者、規劃設計，到 UI 繪製與切版，必須全部自己處理。</strong></p>

    <!-- 設計過程 -->
    <h2>設計過程</h2>

    <h3>洞察一：先用 5W1H 快速建立 Domain Know-How</h3>

    <p>接到專案時，我手上的資訊極為有限，只知道「要把 Xmind 放進 BD Portal」。<strong>面對資訊真空，我用 5W1H 框架快速梳理專案輪廓</strong>：使用者是誰（業務、家長、學生）、為什麼啟動這個專案（對內整合流程、對外提升品牌專業感）、在哪些時機點會使用（電訪、Demo、試讀）、產品出現在什麼載具上（Web + 手機，需考量 RWD）......。這個過程讓我在沒有 PM 主動梳理需求的情況下，迅速建立起對這個專案的基本認識。</p>

    <img src="/portfolio/images/projects/bd-portal-demo-report/img-3.png" alt="我用 5W1H 框架快速梳理專案輪廓，協助我迅速建立起對這個專案的基本認識。" />

    <h3>洞察二：訪談業務，發現心智圖有「生命週期」</h3>

    <p>為了更深入理解業務的實際工作方式，我主動邀請業務團隊核心成員進行訪談，這次訪談讓我發現了一個關鍵洞察：<strong>心智圖並不是一次性的產物，它跟著整個銷售流程在演化。</strong></p>

    <p>我將訪談結果整理成一張研究彙整表，橫跨三個銷售階段分析業務行為、接觸目標、聯繫時間與心智圖生命週期：</p>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">Stage 1 - 電訪：初次見面</span>
        <p>業務介紹產品、了解客戶狀況與需求，時間細碎且可能中斷，心智圖在此階段是「初次見面」的輔助工具。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">Stage 2 - Demo：共同完成，深度解析</span>
        <p>業務展示產品、展現專業感，有完整時間深入交流，業務與客戶共同完成心智圖的填寫，是整個銷售流程中信任建立的關鍵時刻。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">Stage 3 - 試讀：評估工具，業務角色的延伸</span>
        <p>進入七天試讀期，業務以人與系統持續關懷客戶，心智圖此時成為家長評估是否購買的重要依據，也是業務角色在不在場時的延伸。</p>
      </div>
    </div>

    <img src="/portfolio/images/projects/bd-portal-demo-report/img-4.png" alt="業務銷售三階段示意圖：第一次接觸（電訪）、第二次接觸（Demo）、第三次接觸（試讀七天），心智圖在每個階段扮演不同角色" />

    <h3>關鍵轉折：從「心智圖系統」到「陪伴整個銷售旅程的數位報告」</h3>

    <p>這個生命週期的發現，讓我意識到 Demo Report 不應該只是把 Xmind 搬進系統，而是<strong>應該在不同銷售階段，都能回應業務當下的需求，產生對應的商業價值。</strong>我從研究彙整表中提煉出四個直接影響後續設計的關鍵洞察：</p>

    <img src="/portfolio/images/projects/bd-portal-demo-report/img-5.png" alt="研究彙整表，從業務行為、接觸目標、聯繫時間、心智圖生命週期四個維度分析三個銷售階段，並標注四個關鍵設計洞察（紅字）" />

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">「輔助業務介紹產品」→ 加入試讀帳號資訊、官方資源連結、顧問師的一段話</span>
        <p>在試讀階段，報告本身可以成為業務的替身：</p>
        <ol>
          <li>我在「體驗資訊」頁面加入試讀帳號、密碼與平台連結，讓家長能直接開始體驗產品。</li>
          <li>在「關於我們」頁面放上產品官網、社群媒體、客服電話等官方連結，讓家長在有疑問時能自行找到解答，不必每次都等業務回覆，降低業務的溝通負荷，同時提升家長的自助體驗。</li>
          <li>加上顧問師親筆書寫的一段信，讓業務不在場時，這份報告仍能持續與客戶產生連結。</li>
        </ol>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">「編排清晰、專業簡潔」 + 「專屬感，可重複檢視」→ Landing Page 改為 Dashboard</span>
        <p>這個決定有一部分來自現實的推力：因為我當時視覺設計能力有限，初版 Landing Page 大量的空白填補不起來，整體視覺表現偏弱。而 Dashboard 的分頁結構，讓每個畫面聚焦單一主題，空白反而成為呼吸空間，視覺上自然合理；Tab 切換增加了互動與停留時間；對家長而言，這份可隨時回來查閱的專屬報告，也因此更有儀式感與可重複查閱的價值。<strong>這是一次把視覺設計的限制，轉化為對使用者更有價值的設計決策。</strong></p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">「允許空白欄位，取消必填」→ 後台表單全面取消必填限制</span>
        <p>業務在不同階段與客戶接觸的深度不同，並不是每次都能收集到完整資訊，強制必填反而會打斷業務的作業節奏；取消必填限制，讓業務在任何階段都能彈性填入當下掌握的資訊，隨著銷售推進再逐步補齊。</p>
      </div>
    </div>

    <img src="/portfolio/images/projects/bd-portal-demo-report/img-6.png" alt="前台初版手繪 Wireframe" />

    <img src="/portfolio/images/projects/bd-portal-demo-report/img-7.png" alt="前台初版 Landing Page UI，一頁式設計，視覺留白過多，為後續改版提供對比" />

    <h3>突破：顛覆 Form 表單的邊界</h3>

    <p>在後台 BD Portal 的設計上，我面臨了一個技術層面的根本限制：<strong>市面上的心智圖套件，無法將使用者填入的文字資料寫回系統</strong>，輸出的都是純圖片，資料無法被後端收回再利用，這讓「把心智圖放進系統」的原始需求在技術上根本無法實現。</p>

    <p>此外，大主管看過初版表單後，認為欄位過多、介面太冗長，希望我縮減。他們預期的解法，是把一排 2 個 input 改成 4 個，這種解法雖然能夠提升空間利用性，但操作方式沒有改變。</p>

    <img src="/portfolio/images/projects/bd-portal-demo-report/img-8.png" alt="梳理業務心智圖的共通點，定義出明確的系統規格，作為工程端建立資料庫架構的基石。" />

    <img src="/portfolio/images/projects/bd-portal-demo-report/img-9.png" alt="過於冗長的 BD Portal 後台初版表單 Wireframe" />

    <p>我給出的答案，是完全不同的方向：<strong>把 Form 表單的編輯模式，做成心智圖的操作邏輯。</strong></p>

    <p>透過 Vue.js 的動態控制，我實現了點擊「+」可以新增子節點欄位、點擊「-」可以刪除的互動方式，讓整張表單的操作體驗貼近業務原本熟悉的 Xmind，但填入的每一筆資料，都能被系統結構化地收回儲存。這個設計同時解決了技術限制與操作體驗兩個問題，也讓設計主管與大主管都說出：「從來沒想過 Form 表單可以做成這樣！」</p>

    <img src="/portfolio/images/projects/bd-portal-demo-report/img-10.png" alt="BD Portal 後台表單，以心智圖節點結構呈現，每個層級可透過 +/- 按鈕動態新增或刪除欄位" />

    <h3>突發狀況：螢幕分享下的資訊安全問題</h3>

    <p>訪談中我發現，業務在進行 Demo 時，會將螢幕畫面即時分享給客戶同步觀看。這意味著，如果業務直接在 BD Portal 中填寫資料，客戶有可能看見內部系統的機密畫面。</p>

    <p>解法簡單而精準：將後台填寫頁面設定為以 <code>target="_blank"</code> 開啟新分頁，徹底將填寫介面與 BD Portal 主系統的畫面隔離。業務在分享螢幕時，只需確保前台報告頁在主視窗即可，內部系統資訊完全不會暴露。</p>

    <!-- 最終設計 -->
    <h2>最終設計</h2>

    <h3>前台：學習適性報告 Dashboard</h3>

    <p>最終的前台報告以 Dashboard 形式呈現，左側固定導覽列，右側主內容區依分頁切換，右欄常駐學生個人資訊與學習指標雷達圖，讓家長在任何頁面都能看到孩子的基本輪廓。</p>

    <img src="/portfolio/images/projects/bd-portal-demo-report/img-11.png" alt="最終版 Dashboard — 心智圖表頁，主內容區呈現可縮放的互動式心智圖，右側常駐個人資訊與雷達圖" />

    <img src="/portfolio/images/projects/bd-portal-demo-report/img-12.png" alt="最終版 Dashboard — 適性分析頁，呈現顧問師的發現與建議，分個人特質、時間運用、學習方式等維度" />

    <img src="/portfolio/images/projects/bd-portal-demo-report/img-13.png" alt="最終版 Dashboard — 體驗資訊頁，呈現試讀期間、試讀帳號、試讀密碼與立即體驗 CTA 按鈕" />

    <img src="/portfolio/images/projects/bd-portal-demo-report/img-14.png" alt="最終版 Dashboard — 關於我們頁，呈現顧問師親筆信與產品官方連結、客服資訊" />

    <h3>後台：BD Portal 心智圖式表單</h3>

    <p>後台表單以心智圖節點結構組織所有填寫欄位，業務可依照銷售進度彈性填入，所有欄位均取消必填限制。點擊「+」新增子節點、點擊「-」刪除，操作邏輯與 Xmind 一脈相承，但每一筆填入的資料都能被系統結構化地收回儲存。</p>

    <video width="752" height="423" controls poster="/portfolio/images/projects/bd-portal-demo-report/img-15.png">
      <source src="/portfolio/images/projects/bd-portal-demo-report/video-1.mp4" type="video/mp4">
        您的瀏覽器不支援 HTML5 影片播放。(BD Portal 後台心智圖式表單完整畫面，以節點展開結構呈現所有填寫欄位。)
    </video>

    <!-- 最終成果 -->
    <h2>最終成果</h2>

    <p>Demo Report 成功落地上線，並在業務單位與副董層級獲得高度評價——設計主管在上線後主動回饋：「Demo Report 在業務單位和副董那邊的評價都很好。」這份肯定來自於它不只是一個更好看的心智圖，而是一套真正理解業務銷售流程後，重新定義的數位報告體驗。</p>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">超出原始需求的產品定位</span>
        <p>從「把心智圖放進系統」出發，最終交付的是一套能陪伴業務走完整個銷售旅程的數位工具，從電訪、Demo，到試讀期間的持續關懷，每個階段都有對應的設計支撐。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">首創心智圖式 Form 表單</span>
        <p>突破市面上心智圖套件無法將資料寫回系統的技術限制，以 Vue.js 動態控制實現節點式表單操作，讓資料結構化儲存與心智圖操作體驗同時成立。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">獲得高階主管的高度肯定</span>
        <p>設計主管直接回饋業務單位與副董的正面評價；大主管與設計主管在看到後台表單設計時，均表示「從來沒想過 Form 表單可以做成這樣」。</p>
      </div>
    </div>

    <p>值得誠實說明的是，Demo Report 雖然成功落地，但最終並未被業務團隊實際採用。推測原因有二：其一，新工具需要業務大主管主導推動才能改變既有習慣，而這件事並未發生；其二，當時公司內部歷經數波業務人力異動，團隊重心放在人員穩定與業績，內部流程規範的推動因此擱置。這個結果提醒了我：一個設計的落地，不只取決於設計本身的品質，也取決於組織推動的意志與時機。</p>

    <!-- 影響力 -->
    <h2>影響力</h2>

    <div class="pd-impact">
      <div class="pd-impact__item">
        <span class="pd-impact__level">公司層面</span>
        <ul>
          <li>Demo Report 在業務單位與副董層級均獲得高度評價，證明設計部有能力獨立主導從研究到交付的完整產品設計流程，無需仰賴 PM 全程帶領。</li>
          <li>首創的心智圖式 Form 表單設計，為後續 BD Portal 的功能迭代提供了一種新的互動設計思路。</li>
        </ul>
      </div>
      <div class="pd-impact__item">
        <span class="pd-impact__level">團隊層面</span>
        <ul>
          <li>專案結束後，我在設計雙週會中主動整理這次專案的完整歷程並進行分享，主題聚焦在「UX 研究如何影響 UI 設計決策」，獲得主管與同事的正面回饋，這次分享也促成了設計部內部更多平行經驗交流的可能性。</li>
        </ul>
      </div>
      <div class="pd-impact__item">
        <span class="pd-impact__level">個人層面</span>
        <ul>
          <li>這是我在這間公司第一個真正意義上獨立主導的專案，從理解模糊需求、主動發起使用者研究、重新定義產品定位，到 UI 設計與切版，完整走過一次從 0 到 1 的產品設計流程。</li>
          <li>這個專案讓我第一次深刻感受到：<strong>設計師可以不只是需求的執行者，而是透過研究與洞察，主動賦予產品更大價值的人。</strong>當我把「把心智圖放進系統」的需求，轉化為「陪伴業務走完整個銷售旅程的數位報告」時，我意識到這才是設計師真正能創造的影響力。</li>
          <li>我也學到了視覺設計限制不一定是障礙，當初版 Landing Page 的大量空白讓我陷入困境時，是使用者研究給了我改版的方向與底氣，讓我能把視覺上的缺點，轉化為對使用者更有價值的設計決策。</li>
        </ul>
      </div>
    </div>
  `},{id:"ai-smartbag-learning-goal",title:"客服需求降低 80%：從數據出發，重新定義 K12 學生的 AI 學習目標設定體驗",description:"舊版學習計劃操作繁瑣、精準度不足，且高度依賴客服人工協助。我透過業務訪談與後台數據分析，挖掘出「學生每日平均觀看影片僅 22 分鐘」的關鍵洞察，設計出以目標為導向的三步驟 AI 快速建立路徑，讓 90% 的學生選擇使用，並大幅釋放客服人力。",cover:"/images/projects/ai-smartbag-learning-goal/cover.png",hashtags:["數據驅動設計","產品思維","系統複雜度化簡"],tags:["UIUX","AI","Cross-functional","Information Architecture"],metrics:[{value:"80%",label:"客服需求減少"},{value:"90%",label:"學生主動採用"},{value:"3 步驟",label:"完成目標設定"}],category:["uiux","ai"],content:`
    <!-- 成效數字 -->
    <div class="pd-metrics">
      <div class="pd-metric">
        <span class="pd-metric__number">80%</span>
        <span class="pd-metric__label">客服相關需求減少</span>
      </div>
      <div class="pd-metric">
        <span class="pd-metric__number">90%</span>
        <span class="pd-metric__label">學生選擇 AI 快速建立路徑</span>
      </div>
      <div class="pd-metric">
        <span class="pd-metric__number">3 步驟</span>
        <span class="pd-metric__label">完成學習目標設定<br/>（原需 7+ 次點擊）</span>
      </div>
    </div>

    <!-- 角色資訊 -->
    <div class="pd-info">
      <div class="pd-info__item pd-info__item--company">
        <span class="pd-info__label">公司</span>
        <span class="pd-info__value">三貝德數位文創股份有限公司</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">產品</span>
        <span class="pd-info__value">AI 智能書包 — 學習目標</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">職稱</span>
        <span class="pd-info__value">UIUX Designer（跨 PM 協助）</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">時間</span>
                <!--<span class="pd-info__value">2023.11 – 2023.12（約三週）</span> -->
        <span class="pd-info__value">約 15 個工作天</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">負責範圍</span>
        <span class="pd-info__value">資訊架構梳理、UX 規劃、Wireframe、Prototype</span>
      </div>
    </div>

    <!-- 背景與挑戰 -->
    <h2>背景與挑戰</h2>

    <p>AI 智能書包是三貝德從 0 到 1 全新打造的 K12 數位學習 App，整合課程、題庫、AI 解惑、學習分析等模組。「學習目標」是其中承擔學習規劃核心任務的功能，也是從舊版 Web 平台「學習計劃」功能全面重新設計的成果。</p>

    <p>當時，我以 UIUX Designer 身份跨組協助專案唯一的 PM，負責整個功能的資訊架構梳理、UX 規劃與 Wireframe，在約三週的工作天內完成設計交付。</p>

    <h3>舊版的三大核心痛點</h3>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">精準度不足</span>
        <p>學生安排學習計劃時，最細只能選到課層架構第七層「章節」，無法精準指定想看的單一知識點影片。若想精準安排，必須聯絡業務，再轉由客服管家在後台手動操作，流程冗長，若業務或客服未上班則遙遙無期。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">操作過於繁瑣</span>
        <p>舊版安排一個學習計劃需要超過七次點擊，主管明確要求新版必須大幅降低操作門檻，讓學習規劃真正易於執行。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">商業限制複雜</span>
        <p>公司提供多種產品組合供家長、學生選購，購買內容直接影響 App 內可顯示的領域與科目，設計必須在授權範圍內動態呈現，大幅增加了功能設計的複雜度。</p>
      </div>
    </div>

    <img src="/portfolio/images/projects/ai-smartbag-learning-goal/img-1.png" alt="舊版學習計劃精準度不足，最細只能選到課層架構第七層「章節」；安排一個學習計劃需要超過七次點擊" />

    <p>除此之外，新功能還面臨一個概念層次的根本挑戰：我們希望將學生的思維模式從「先因後果（我要補哪個章節）」翻轉為「倒果為因（我的目標是什麼，AI 幫我規劃）」。這不只是操作流程的改變，而是整個心智模型的重新建立。</p>

    <!-- 設計過程 -->
    <h2>設計過程</h2>

    <h3>洞察一：雙線研究，同步摸清邊界</h3>

    <p>我從兩條線同步展開研究：一方面訪談業務團隊，因為他們長期負責銷售與售後關懷，是距離學生需求與家長期待最近的人；另一方面，我與研發工程師逐一確認所有相關的資料結構與 API，包含既有的與開發週期內可實作的。</p>

    <p>擁有資料結構與資訊架構的背景，讓我在設計初期就能清楚掌握「系統能做什麼」的邊界，避免設計出無法實作的方案。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-goal/img-2.png" alt="Wireframe - 學習目標首頁" />

    <h3>洞察二：22 分鐘，讓計劃從紙上談兵變得可執行</h3>

    <p>從後台數據分析中，我發現一個關鍵洞察：<strong>80% 的學生每天觀看影片的時間平均僅有 22 分鐘</strong>。這個數字雖然看似普通，卻成為整個設計的核心依據——<strong>它回答了「一個合理、可執行的學習計劃，究竟應該安排多少內容」這個問題</strong>。</p>

    <p>基於此洞察，學習計劃的時間估算全部以影片時長為準，並預設每日學習時間下限為 20 分鐘，讓系統生成的計劃貼近學生的真實學習行為，而非空洞的理想目標。</p>

    <h3>關鍵轉折：從「進階設定」到「快速建立」</h3>

    <p>設計初期，我先完整梳理了功能邏輯較複雜的「進階設定」路徑——讓學生可以自由選擇任意知識點影片加入計劃。然而在第一次專案會議中，主管提出了一個關鍵提醒：「功能應該要讓使用者覺得好用，而不是越來越複雜。」</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-goal/img-3.png" alt="Wireframe - 學習目標進階設定 Step 1" />

    <img src="/portfolio/images/projects/ai-smartbag-learning-goal/img-4.png" alt="Wireframe - 學習目標進階設定 Step 2" />

    <img src="/portfolio/images/projects/ai-smartbag-learning-goal/img-5.png" alt="Wireframe - 學習目標進階設定 Step 3" />

    <p>當下我感到有些挫折，但在重新梳理思路後，我意識到這個順序其實有其必要性：<strong>必須先把最複雜的邏輯搞清楚，才能知道哪些可以被簡化、哪些是不可或缺的核心</strong>。這個反思讓我更有把握地設計出「三步驟快速建立」路徑，並讓兩條路徑各自服務不同的使用者類型：</p>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">快速建立（主路徑）</span>
        <p>針對大多數學生設計，三步驟完成設定：選擇學習步調、選擇學習目標、選擇學習科目，AI 自動依據學生程度、學習表現、弱科等數據生成最適學習路徑。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">進階設定（次路徑）</span>
        <p>針對對學習有高度掌控需求的「學霸型」學生，提供更細緻的自由設定空間，可精準選擇至第九層知識點影片。</p>
      </div>
    </div>

    <!-- 最終設計 -->
    <h2>最終設計</h2>

    <h3>步驟一：學習步調設定</h3>

    <p>學生設定每週哪幾天可以讀書、每次讀書多久，系統即時計算每週學習總時數，並對應顯示四種「角色屬性」：<strong>佛系學生、勤奮學子、資優菁英、天才學霸</strong>。這個設計除了讓計劃安排有所依據，也透過角色標籤帶來被動激勵效果，讓學生意識到自己投入的程度，進而產生想要更努力的動力。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-goal/img-6.png" alt="快速建立 (主路徑) - Step 1. 學習步調選擇畫面，包含設定每週哪幾天可以讀書、每次讀書多久" />
    <img src="/portfolio/images/projects/ai-smartbag-learning-goal/img-7.png" alt="四種角色屬性：佛系學生、勤奮學子、資優菁英、天才學霸" />

    <h3>步驟二：學習目標選擇</h3>

    <p>對應課層架構第二層「領域」，同時也對應學生的購買授權範圍，僅顯示已購買的選項。為了讓選擇更貼近學生的真實學習動機，我將生硬的產品名稱重新以文案包裝，例如將「108 課綱全科」包裝為「穩健札實的基礎學程」、「會考 A++ 追分計劃」包裝為「全局掌握的大考戰略」，讓選項從系統語言轉化為學生語言。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-goal/img-8.png" alt="快速建立 (主路徑) - Step 2. 學習目標選擇畫面，含文案包裝的五種領域選項" />

    <h3>步驟三：學習科目選擇</h3>

    <p>同樣依授權範圍動態顯示可選科目，學生可複選，畫面設計簡潔清晰，降低選擇負擔。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-goal/img-9.png" alt="Step 3. 學習科目選擇畫面" />

    <h3>計劃預覽：日曆模式與週曆模式</h3>

    <p>三步驟完成後，AI 自動生成學習計劃，學生可切換「只看單日」（週曆模式，顯示每日的知識點影片列表）或「一次看全部」（月曆模式，鳥瞰整體計劃分佈）。計劃上方同時顯示「已安排時數」與「本日預計學習時數」，讓執行狀況一目了然。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-goal/img-10.png" alt="計劃預覽 - 週曆模式 (一次看一天)" />
    <img src="/portfolio/images/projects/ai-smartbag-learning-goal/img-11.png" alt="計劃預覽 - 月曆模式 (一次看全部)" />

    <!-- 最終成果 -->
    <h2>最終成果</h2>

    <div class="pd-metrics">
      <div class="pd-metric">
        <span class="pd-metric__number">80%</span>
        <span class="pd-metric__label">客服相關需求減少<br/>大幅降低人力成本</span>
      </div>
      <div class="pd-metric">
        <span class="pd-metric__number">90%</span>
        <span class="pd-metric__label">學生主動選擇<br/>AI 快速建立路徑</span>
      </div>
      <div class="pd-metric">
        <span class="pd-metric__number">第 9 層</span>
        <span class="pd-metric__label">學生首次可自主安排<br/>至知識點影片<br/>（原僅至第 7 層章節）</span>
      </div>
    </div>

    <!-- 影響力 -->
    <h2>影響力</h2>

    <div class="pd-impact">
      <div class="pd-impact__item">
        <span class="pd-impact__level">公司層面</span>
        <ul>
          <li>「三步驟快速建立學習目標」成為 AI 智能書包上線後的主打功能亮點，這個路徑在設計初期並不在規劃之內，而是在梳理複雜邏輯後才得以提煉出來。</li>
          <li>客服管家團隊幾乎不再需要手動處理學習計劃安排需求，相關工作量降低約 80%，直接釋放人力成本。</li>
        </ul>
      </div>
      <div class="pd-impact__item">
        <span class="pd-impact__level">團隊層面</span>
        <ul>
          <li>此專案改變了公司對設計團隊的定位認知：設計師不再只是負責視覺呈現，而是具備 UX 規劃與產品思維的夥伴。</li>
          <li>往後的產品開發流程中，主管與 PM 開始主動納入 UX 設計師的意見；團隊內的設計師也受到鼓舞，更願意主動提出 UX 層面的改善建議，甚至反向與 PM 討論更合理的功能規劃方向。</li>
        </ul>
      </div>
      <div class="pd-impact__item">
        <span class="pd-impact__level">個人層面</span>
        <ul>
          <li>這是我第一次深刻體會到資訊架構與資料層級對 UIUX 設計的決定性影響，設計師若能掌握這層知識，可以在設計早期就避免走冤枉路。</li>
          <li>透過這個專案，我更清楚如何在商業限制、技術邊界與使用者體驗之間取得平衡，並將其轉化為對使用者有價值的設計決策。</li>
        </ul>
      </div>
    </div>
  `},{id:"ai-smartbag-learning-report",title:"從數據羅列到數據洞察：重新設計 K12 家長的三維度學習報告",description:"前一版學習報告被大主管打槍，原因是日、週、月三份報告只差在時間範圍，本質上只是數據的重複堆疊。我接手後，借鑑數據分析師的思維切入，系統性梳理所有可用數據素材，設計出三種截然不同的敘事邏輯——讓日報告說執行細節、週報告說行為洞察、月報告說成長故事。最終成為 AI 智能書包主打亮點功能，有效解決家長痛點，成為業務銷售的關鍵說服工具。",cover:"/images/projects/ai-smartbag-learning-report/cover.png",hashtags:["數據洞察設計","資訊架構","跨角色協作"],tags:["UIUX","Cross-functional","Information Architecture"],metrics:[{value:"15",label:"工作天完成"},{value:"3",label:"維度報告架構"},{value:"0→1",label:"主打亮點功能"}],category:["uiux"],content:`
    <!-- 角色資訊 -->
    <div class="pd-info">
      <div class="pd-info__item pd-info__item--company">
        <span class="pd-info__label">公司</span>
        <span class="pd-info__value">三貝德數位文創股份有限公司</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">產品</span>
        <span class="pd-info__value">AI 智能書包 — 學習報告（官網功能）</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">職稱</span>
        <span class="pd-info__value">UIUX Designer（跨 PM 協助）</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">時間</span>
        <!-- <span class="pd-info__value">2023.11 – 2024.01（約 15 個工作天）/span> -->
        <span class="pd-info__value">約 15 個工作天</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">負責範圍</span>
        <span class="pd-info__value">資訊架構梳理、UX 規劃、Wireframe、規格邏輯撰寫、文案撰寫</span>
      </div>
    </div>

    <!-- 背景與挑戰 -->
    <h2>背景與挑戰</h2>

    <p>「學習報告」是 AI 智能書包針對家長設計的核心功能，以獨立官網的形式呈現，並整合 LINE OA 推播通知，讓家長隨時掌握孩子的學習狀況。商業目標明確：「讓家長覺得錢花得值得，即便人在外工作，也能即時了解孩子今天學了什麼、學得怎麼樣」。</p>

    <p>然而，這個功能在我接手之前，已經由 PM 與設計主管共同規劃出第一版，並被大主管否定。被打槍的原因一針見血：<strong>「日、週、月三份報告，本質上只是同一套數據在不同時間維度的重複呈現」</strong>，看起來像三份一樣的報告換了個日期範圍，既不能體現 AI 的差異化價值，也無法真正幫助家長理解孩子的學習狀況。</p>

    <p>由於我在前一個專案「<strong><a href="https://mudi0710.github.io/portfolio/#/projects/ai-smartbag-learning-goal" target="_blank">學習目標</a></strong>」中的表現受到肯定，PM 與設計主管將這個棘手的案子交給我重新接手。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-report/img-1.png" alt="第一版學習報告 UI，三個維度呈現相似的數據結構" />

    <!-- 設計過程 -->
    <h2>設計過程</h2>

    <h3>洞察一：借鑑數據分析師思維，找到問題的根</h3>

    <p>我先與 PM 和設計主管進行專案交接訪談，了解前一版被否定的來龍去脈與會議討論紀錄。這次我沒有另外訪談業務，因為需求來源相當直接：大主管本身就是家長身份，他對功能的期待，就是最真實的使用者需求。</p>

    <p>破題的靈感，來自我在社群上偶然看到的一個數據分析師案例。他在研究一組客訴數據時發現：「80% 的客訴，其實來自同一位客人」。這個故事讓我理解，<strong>數據真正的價值不在於「呈現」，而在於「洞察」</strong>——從數字背後找到真正重要的訊息。我把這個思維直接套用到學習報告的設計上，立刻看見了舊版的問題所在：「它缺少的不是數據，而是數據被詮釋之後的意義」。</p>

    <h3>洞察二：系統性盤點素材，在限制中找到可能性</h3>

    <p>有了方向之後，我在 FigJam 展開了一張大型梳理表格，將所有可能的數據面向逐一列出，包含：孩子資料切換、計劃進度與執行率、今日／本週／本月動態、學習趨勢、對孩子的觀察與建議、個人特質觀察……等超過十個面向，並用表格標記每個數據在「日、週、月」三個維度中是否適合呈現。</p>

    <p>與此同時，我<strong>主動與研發工程師逐一確認現有 API 能提供哪些數據，以及哪些交叉運算在技術上可行</strong>。由於我有前端開發的學習背景，我能夠理解數據結構與 API 的運作邏輯，讓我在設計早期就清楚知道「哪些想法做得到、哪些需要協調」，而不是設計出無法實作的方案。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-report/img-2.png" alt="FigJam 數據面向梳理表格，橫軸為日週月維度，縱軸為各數據類型" />

    <h3>關鍵框架：三種維度，三種敘事邏輯</h3>

    <p>梳理完所有素材後，我確立了整份學習報告的核心設計框架：<strong>三個時間維度，各自承載不同的故事任務。</strong></p>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">日報告：執行細節</span>
        <p>「今天孩子具體做了什麼？」以最細粒度呈現每日學習行為，包含計劃達成率、每個知識點影片的觀看時長、隨堂練習與考卷測驗的詳細數據，讓家長看見孩子今天真實的學習過程。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">週報告：行為洞察</span>
        <p>「這一週孩子的學習狀態如何？」從行為模式切入，呈現孩子的學習節奏、計劃達成率，並與全國同年級學生比較，讓家長理解孩子在這個時間尺度下的學習動能與相對位置。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">月報告：成長觀察</span>
        <p>「這一個月孩子有沒有真正進步？」拉長視角，以科目雷達圖、PR 值、知識點掌握數等維度，呈現孩子的學習成長趨勢，並提供具有溫度的觀察與建議，協助家長用更全局的眼光看待孩子的學習歷程。</p>
      </div>
    </div>

    <!-- 最終設計 -->
    <h2>最終設計</h2>

    <h3>日報告：從兩區塊合一，解決資訊重複問題</h3>

    <p>初版 wireframe 將「課程觀看」與「答題數據（隨堂練習 + 考卷測驗）」分成兩個獨立區塊。但我意識到，在「<strong><a href="https://mudi0710.github.io/portfolio/#/projects/ai-smartbag-learning-goal" target="_blank">學習目標</a></strong>」的計劃邏輯中，每一個學習單元本來就包含知識點影片、隨堂練習與考卷測驗，它們對應的是同一個學習範圍。若分開呈現，家長會看到同樣的課程名稱出現兩次，反而造成困惑。</p>

    <p>因此我在 Final 版中將其合而為一，以學習單元為主軸，整合所有對應數據。</p>

    <p>日報告同時引入四種學習標籤：延遲學習、當日學習、提前學習、額外學習，讓家長一眼就能理解孩子的學習行為是否符合計劃節奏。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-report/img-3.png" alt="日報告最終 Wireframe，學習單元整合觀看數據與測驗數據，並標示四種學習標籤" />

    <h3>週報告：以角色屬性為洞察增添溫度</h3>

    <p>原本規劃的「黃金學習時間」圖表（折線圖 + 瀑布圖），在與研發團隊協調後因開發複雜度過高而暫緩。為了不讓週報告的洞察深度因此打折，我引入了「<strong><a href="https://mudi0710.github.io/portfolio/#/projects/ai-smartbag-learning-goal" target="_blank">學習目標</a></strong>」功能中已有的角色屬性系統——<strong>佛系學生、勤奮學子、資優菁英、天才學霸</strong>——依據孩子本週的學習投入程度自動對應，為冰冷的時數數據加入一層有趣的人格標籤，讓家長在看數字的同時，也能感受到孩子學習狀態的整體氛圍。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-report/img-4.png" alt="週報告最終 Wireframe，包含學習計劃達成率、全國比較圖、學習內容細項與角色屬性標籤" />

    <h3>月報告：多維圖表呈現成長軌跡</h3>

    <p>月報告以「孩子這個月有沒有真正成長」為敘事核心，整合了環形圖、雷達圖、圓餅圖與堆疊長條圖等多種視覺化形式，讓各面向的數據以最直觀的方式被理解。每個圖表背後都有對應的洞察文字，說明數據代表的意義，而非讓家長自己解讀數字。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-report/img-5.png" alt="月報告最終 Wireframe，包含學習目標達成率、PR 值、科目雷達圖、知識點圓餅圖與考卷成長分析" />

    <h3>帶有溫度的建議文案</h3>

    <p>報告中所有的「觀察與建議」文字，全部由我自行定義。我先梳理出各種數據條件的組合情境，例如：計劃達成率偏低、成績出現退步、強弱科差距擴大，再為每種情境撰寫對應的洞察語句，並制定文案口吻規則，交由工程師實作為條件判斷邏輯，讓系統在不同數據狀態下自動帶入對應的建議文字。</p>

    <p>這套規則的撰寫，借助了我過去人資工作的背景：熟悉如何將評估結果轉化為帶有正向、鼓勵語氣的溝通語言，確保家長在任何情境下收到的都是有溫度的洞察，而不是制式化的數字堆疊。</p>

    <!-- 最終成果 -->
    <h2>最終成果</h2>

    <p>「學習報告」成功從「被打槍的初稿」翻身為 AI 智能書包上線後的主打亮點功能之一。雖然此功能屬於從 0 到 1 的全新開發，尚無可對比的量化指標，但從內部與市場反應可以看見明確的影響：</p>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">成為產品主打亮點</span>
        <p>「學習報告」在產品上線後被列為主要行銷功能，展示了 AI 智能書包相較於傳統補教平台的差異化價值。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">有效解決家長痛點</span>
        <p>根據業務回饋，「學習報告」直接回應了家長最核心的不安：「我付了錢，但我不知道孩子到底有沒有在學、學得怎樣。」這份可視化的報告，讓家長在外工作時也能即時掌握孩子的學習狀況。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">成為業務銷售的關鍵說服工具</span>
        <p>業務在向家長推廣時，「學習報告」成為打動家長購買意願的重要亮點，協助業務更有說服力地傳遞產品價值。</p>
      </div>
    </div>

    <img src="/portfolio/images/projects/ai-smartbag-learning-report/img-6.png" alt="「學習報告」在產品上線後被列為主要行銷功能，展示了 AI 智能書包相較於傳統補教平台的差異化價值。" />

    <!-- 影響力 -->
    <h2>影響力</h2>

    <div class="pd-impact">
      <div class="pd-impact__item">
        <span class="pd-impact__level">公司層面</span>
        <ul>
          <li>「學習報告」從一個被否定的草稿，成為 AI 智能書包對外主打的差異化功能，直接強化了產品在市場上的說服力與競爭定位。</li>
          <li>透過 LINE OA 推播整合，讓家長在不需主動開啟 App 的情況下也能接收學習通知，擴大了產品觸及家長的頻率與深度。</li>
        </ul>
      </div>
      <div class="pd-impact__item">
        <span class="pd-impact__level">團隊層面</span>
        <ul>
          <li>這個專案進一步確立了設計師在跨功能專案中的主導角色：不只是視覺執行，而是能夠從資訊架構、數據邏輯、文案撰寫到功能規劃一手包辦。</li>
          <li>「日報告說什麼、週報告說什麼、月報告說什麼」的框架思維，被內部團隊採納為往後設計多維度報告功能的參考基準。</li>
        </ul>
      </div>
      <div class="pd-impact__item">
        <span class="pd-impact__level">個人層面</span>
        <ul>
          <li>這是我第一次系統性地將「數據分析師思維」應用在 UX 設計中——從盤點數據素材、確認技術可行性，到設計出有意義的洞察呈現，完整走過一次數據導向的設計流程。</li>
          <li>透過研究大量圖表類型與適用情境，我建立了自己對資料視覺化設計的判斷力，也更清楚如何在複雜的資訊中找到真正對使用者有價值的那條線。</li>
          <li>這個專案也讓我更確信：設計師若能跨越視覺邊界，理解數據、技術與商業，才能在資源與時程的限制下，做出真正有影響力的設計決策。</li>
        </ul>
      </div>
    </div>
  `},{id:"ai-smartbag-edu-psych-quiz",title:"用研究方法做設計：從 30+ 篇文獻到 64 種結果的 K12 教育心理測驗",description:"「適性報告」需要一個讓學生真正投入的心理測驗，我在識別版權與高授權成本的風險後，以心理學背景主動切入，研究 30+ 篇文獻、融合兩套學習風格理論，設計出兼具科學性與故事沉浸感的測驗體驗，獲得「默默就做完了」的高完成度回饋。",cover:"/images/projects/ai-smartbag-edu-psych-quiz/cover.png",hashtags:["研究驅動設計","沉浸式體驗","跨職能主導"],tags:["UIUX","Research","Frontend","AI","Cross-functional"],metrics:[{value:"64",label:"種測驗結果類型"},{value:"30+",label:"篇文獻研究"},{value:"51",label:"工作天完成"}],category:["uiux"],content:`
    <!-- 角色資訊 -->
    <div class="pd-info">
      <div class="pd-info__item pd-info__item--company">
        <span class="pd-info__label">公司</span>
        <span class="pd-info__value">三貝德數位文創股份有限公司</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">產品</span>
        <span class="pd-info__value">AI 智能書包 — 教育心理測驗（WebView）</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">職稱</span>
        <span class="pd-info__value">UIUX Designer（跨 PM 協助、指揮設計師）</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">時間</span>
        <!-- <span class="pd-info__value">2024.01 – 2024.05（共 51 個工作天）</span> -->
        <span class="pd-info__value">共 51 個工作天</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">負責範圍</span>
        <span class="pd-info__value">UX 研究、文獻分析、題目設計與改編、A/B 預試、Wireframe、Prototype、切版與動態特效實作</span>
      </div>
    </div>

    <!-- 體驗連結 -->
    <h2>成品</h2>
    <p>你可以直接進入測驗體驗：</p>
    <a
      href="https://ai100.com.tw/EduPsyQuiz/MySuperPower"
      target="_blank"
      class="pd-cta">
      → 探索我的學習超能力
    </a>

    <!-- 背景與挑戰 -->
    <h2>背景與挑戰</h2>

    <p>「教育心理測驗」是 AI 智能書包「學習分析」模組下「適性報告」功能的核心子功能。適性報告原本只有「科目表現」這個偏靜態的學習分析頁面，<strong>PM 認為僅靠強、弱科數據，難以真正吸引學生主動探索自己的學習風格，因此提出加入一個互動式心理測驗的構想，讓「適性報告」這個功能真正活起來。</strong></p>

    <p>這個專案從 0 到 1，以 App 內嵌網頁的形式呈現，主要服務對象是 K12 學生。由於 PM 工作量已滿，設計部連續第三次承接了跨 PM 的全權主導任務，而這次是我第一次同時擔任設計規劃者與協作指揮者的雙重角色——除了獨立完成所有 UX 研究與切版實作，也負責帶領另一位設計師 Aimee 分工完成視覺美術設定。</p>

    <img src="/portfolio/images/projects/ai-smartbag-edu-psych-quiz/img-1.png" alt="教育心理測驗中間頁，主視覺為宇宙星球的登錄場景，畫面中間富有故事文案以及「繼續前進」按鈕" />

    <!-- 設計過程 -->
    <h2>設計過程</h2>

    <h3>洞察一：識別風險，從授權死路轉向文獻自研</h3>

    <p>PM 最初詢問具有心理系背景的我，是否有合適的現成測驗可以直接使用。我確實找到了一份相當符合 K12 受眾需求的工具：「學習適應量表（增訂版）」。但在評估後，我主動向 PM 提出暫緩，理由是：「正式心理測驗具備版權，未經授權使用將面臨法律風險；且其商業授權多採『按次或按人頭計費』，這意味著用戶數越多、成本就越高。從長遠的營運成本來看，這條路並不划算」。</p>

    <p>識別風險之後，我想到了另一條路：我在大學期間受過量化與質化的教育研究方法訓練，寫過小論文，教育心理學正是我熟悉的領域。<strong>走文獻自研這條路，不僅完全免費，也能確保測驗的學術嚴謹性。對一個教育產業的品牌來說，是不可輕忽的信任基礎。</strong></p>

    <h3>洞察二：研究三套理論，找到可以突破限制的組合</h3>

    <p>我以「學習風格」為關鍵字，系統性閱讀了 30+ 篇教育心理學文獻與論文，最終鎖定三套主流理論進行深入評估：</p>

    <div class="pd-callout">
    <div class="pd-callout__item">
      <span class="pd-callout__title">Kolb 體驗學習圈理論（David Kolb, 1984）</span>
      <p>將學習者依「具體經驗、省思觀察、抽象概念、主動驗證」四個維度分為四種學習風格，並可延伸推導出人格特質與職業傾向。學術引用量高、計分方式完整，最符合心理測驗「測完有個角色」的體驗期待，是我的首選。</p>
    </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">VARK 學習風格理論（Neil Fleming, 1987）</span>
        <p>將學習者分為視覺、聽覺、讀寫、動覺四種類型，強調感官偏好對學習效率的影響。概念直觀易懂，但測驗結果對於趣味心理測驗的期待而言，豐富度略嫌不足。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">Felder-Soloman 四維學習風格模型（Richard Felder & Barbara Soloman, 1988）</span>
        <p>從「行為、感知、處理、理解」四大面向切入，每個面向各有兩種傾向，測驗結果可組合出 16 種學習特質，適合作為細緻的雷達圖分析依據。</p>
      </div>
    </div>

    <p>我原本確定以 Kolb 理論為主，但在提案時主管提出了更高期待：<strong>「測驗結果至少要有 8 種，最好能到 16 種。」</strong>面對這個挑戰，我沒有降低學術標準去硬拆 Kolb 的 4 種結果，而是重新審視三套理論的組合可能性，這才靈光一閃：</p>

    <p>若將 Kolb（4 種人格）× Felder-Soloman（16 種特質組合）加以整合，測驗結果的理論上限可達 <strong>64 種</strong>——完全超出主管的期待，且每一種結果都有紮實的學術根據支撐。</p>

    <img src="/portfolio/images/projects/ai-smartbag-edu-psych-quiz/img-2.png" alt="Kolb 與 Felder-Soloman 理論對照圖，展示四大學習偏好面向與人格類型的對應關係" />

    <!-- FigJam -->
    <p>你可以探索當時的研究白板：</p>
    <a
      href="https://www.figma.com/board/lEdD8bLdmhhlAZnxlR9eF4/%E3%80%90%E5%B7%A5%E4%BD%9C%E3%80%91%E6%99%BA%E8%83%BD%E6%9B%B8%E5%8C%85-App---%E6%95%99%E8%82%B2%E5%BF%83%E7%90%86%E6%B8%AC%E9%A9%97-UX-%E8%A8%AD%E8%A8%88?node-id=0-1&t=J74nE8opBbTKW9IW-1"
      target="_blank"
      class="pd-cta">
      → 前往 FigJam 畫布
    </a>

    <h3>關鍵挑戰：56 題變 22 題，生硬題目變故事情境</h3>

    <p>兩套理論加總原有 56 道題目（Kolb 12 題 + Felder-Soloman 44 題），直接使用根本不可行！題目太多、語言太生硬，連成人受測者都覺得難以回答，更何況是 K12 學生，且我們的目標是將測驗時間控制在 5～10 分鐘內。</p>

    <p>為了做出有依據的題目精簡，<strong>我逐題分析每道題目對應的測驗面向與計分邏輯，理解哪些題目可以在不影響信、效度的前提下合併或刪減</strong>。</p>
    
    <p><strong>最終將題目壓縮至 22 題：Kolb 保留 10 題、Felder-Soloman 保留 12 題。</strong></p>

    <p>與此同時，我決定<strong>將題目全面改編為故事情境題，融入 PM 最初規劃的 App IP「曼特」的宇宙世界觀</strong>。這個舉動讓 PM 非常感動，她說沒想到我如此在意她最初的故事設定，並用如此有溫度的方式將它延伸出去。改編過程中，我以原始題目與曼特世界觀為素材，借助 ChatGPT 進行初版融合，再由我與 Aimee 分別負責上、下半部的內容調整與潤稿。</p>

    <h3>A/B 預試：用研究方法驗證設計決策</h3>

    <p>由於兩套理論的原始選項格式不同：Kolb 每題 4 個選項，Felder-Soloman 每題 2 個選項。<strong>若直接混用，受測者在答題過程中會感受到明顯的體驗斷層。</strong>為了解決這個問題，我設計了一次內部 A/B 預試：</p>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">A 卷</span>
        <p>前後半部題目統一為 2 個選項，體驗一致；但擔心壓縮 Kolb 題目的選項會影響測驗準確度。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">B 卷</span>
        <p>前半部 Kolb 題目維持 4 個選項，後半部 Felder-Soloman 題目為 2 個選項，保留原始格式；但體驗不一致。</p>
      </div>
    </div>

    <p>我邀請 14 位內部團隊成員分兩天分別完成 A、B 兩卷（為排除學習效應，一半人先測 A 卷，另一半先測 B 卷）。預試結果顯示，A、B 兩卷的測驗結果分佈並無顯著差異——這意味著將 Kolb 題目縮減為 2 個選項，並不會影響測驗的信效度。基於體驗一致性，我們最終選定 A 卷版本。</p>

    <!-- 最終設計 -->
    <h2>最終設計</h2>

    <h3>前導頁：宇宙感動態封面</h3>

    <p>測驗入口的主視覺以「曼特宇宙」為主題，呈現充滿星球與星雲的深宇宙場景，標題「探索我的學習超能力」以大字呈現，底部的「即刻啟程」按鈕是整個頁面最耗費工程量的細節：我將按鈕拆解為多層圖層疊合，運用 GSAP 動態特效套件，搭配 CSS <code>Filter</code> 與自定義 <code>Animation</code>，做出旋轉光環、發光脈衝等複合動態效果，讓學生在點擊之前就能感受到這個測驗的沉浸感。</p>

    <img src="/portfolio/images/projects/ai-smartbag-edu-psych-quiz/img-3.png" alt="教育心理測驗前導頁封面，主視覺為宇宙星球場景，標題「探索我的學習超能力」，底部有動態「即刻啟程」按鈕" />

    <h3>測驗結果頁：64 種結果，每一種都有靈魂</h3>

    <p>測驗完成後，學生會看到一張完整的結果卡，呈現他們的學習人格角色名稱、專屬 hashtag、人格描述，以及「學習超能力雷達圖」、「適合從事領域」、「專注學習場所」、「學習效率小物」、「曼特宇宙生存指南」等多個維度的個人化洞察。</p>

    <p>四種 Kolb 人格角色各自配有一張以機械手為造型基底的賽博龐克風格插圖，這是 Aimee 在角色形象卡關許久後想到的解法。由於 App IP「曼特」本身是非人物形象，以「手」作為角色基底，既呼應了 IP 精神，又能快速延伸出四種截然不同的角色個性，大幅降低了插圖的製作成本與時程壓力。</p>

    <img src="/portfolio/images/projects/ai-smartbag-edu-psych-quiz/img-4.png" alt="測驗結果頁 App 截圖，呈現「時空穿越者」角色卡，包含人格描述、雷達圖與學習建議" />

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">時空穿越者</span>
        <p>活在當下、點子王，具備豐富的文化學知識與絕對美感，適合設計師、輔導師、表演家等創意型職業。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">賽博策畫師</span>
        <p>觀察敏銳、未雨綢繆，擅長分析問題本質，是優秀的風險管理軍師，適合心理師、教育家、研究員。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">機械建構者</span>
        <p>博學多聞、邏輯超群，鑽研理論到無我境界，適合工程師、技術士、醫師等高度分析性職業。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">引力操控師</span>
        <p>活力充沛、天生領袖，勇於嘗試新鮮事物，視失敗為成長養分，適合專案管理、行銷企劃、業務員。</p>
      </div>
    </div>

    <img src="/portfolio/images/projects/ai-smartbag-edu-psych-quiz/img-5.png" alt="四種學習人格角色卡並排，從左至右：引力操控師、賽博策畫師、時空穿越者、機械建構者，各自配有賽博龐克風格機械手插圖" />

    <!-- 最終成果 -->
    <h2>最終成果</h2>

    <p>「教育心理測驗」是一個從 0 到 1 的全新體驗設計，尚無可對比的量化指標，但從內外部的質性回饋可以看見明確的影響：</p>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">學生與家長反應熱烈</span>
        <p>根據外部業務回饋，學生與家長普遍覺得測驗「挺好玩、挺有趣」，對產品整體好感度有明顯提升。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">內部預試獲得高度肯定</span>
        <p>A/B 預試期間，內部測試者給出「有故事包裝很引人入勝，默默就做完了，很有沉浸的感覺」的回饋，驗證了故事情境改編的體驗設計方向是正確的。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">為公司節省授權成本、規避法律風險</span>
        <p>以文獻自研取代購買現成測驗，在零授權費用的前提下，產出了一套有學術依據、可商業使用的教育心理測驗，同時避免了版權授權的潛在法律風險。</p>
      </div>
    </div>

    <!-- 影響力 -->
    <h2>影響力</h2>

    <div class="pd-impact">
      <div class="pd-impact__item">
        <span class="pd-impact__level">公司層面</span>
        <ul>
          <li>以文獻自研方式取代授權購買，在零額外成本下為公司產出了一套兼具科學性與趣味性的教育心理測驗，同時成功規避了使用第三方測驗工具可能引發的版權與法律風險。</li>
          <li>測驗融合了 IP「曼特」的宇宙世界觀，讓一個原本孤立的功能，成為強化品牌故事與產品識別的有機延伸。</li>
        </ul>
      </div>
      <div class="pd-impact__item">
        <span class="pd-impact__level">團隊層面</span>
        <ul>
          <li>設計部門再一次展示了跨越視覺邊界的能力——從文獻研究、理論選擇、題目設計，到預試驗證與前端實作，設計師主導了整個產品從研究到上線的完整流程，進一步確立了設計部在公司內作為策略夥伴的定位。</li>
        </ul>
      </div>
      <div class="pd-impact__item">
        <span class="pd-impact__level">個人層面</span>
        <ul>
          <li>這是我第一次在設計專案中擔任協作指揮者的角色，負責將腦中天馬行空的世界觀梳理成清楚的設計方向，再傳遞給 Aimee，讓她能進入我的思考框架並延伸執行。這個過程讓我深刻體會到，不同設計職能之間的 1 + 1 > 2 化學反應，這並非理所當然，而是需要清晰的溝通與信任才能實現。</li>
          <li>這個專案也是我第一次將心理學的學術背景完整應用在設計決策中，從文獻選題、理論評估、題目改編到預試驗證，走完了一套完整的研究驅動設計流程，讓我更確信<strong>跨領域的知識積累，是設計師在複雜問題中找到突破口的核心競爭力</strong>。</li>
        </ul>
      </div>
    </div>
  `},{id:"ai-smartbag-epub-production",title:"1,780 份 EPUB：用設計系統與 Excel 工具，讓不可能的量產任務成真",description:"2,130 份紙本教材需轉型為 EPUB 流式排版，手動處理一份需耗費一至兩天，在緊湊時程下幾乎不可能完成。我主動暫停手邊工作，自主研發一套 HTML/CSS 設計系統與 Excel 半自動化轉譯工具，將工讀生的產出速度提升至每日 4～5 份，讓這個原本瀕臨廢棄的專案重新看見曙光。",cover:"/images/projects/ai-smartbag-epub-production/cover.png",hashtags:["設計系統","流程工程化","工具開發"],tags:["Frontend","Cross-functional","Information Architecture"],metrics:[{value:"1,780",label:"份 EPUB 完成"},{value:"4 – 5×",label:"產出速度提升"},{value:"1 週",label:"開發工具系統"}],category:["frontend"],content:`
    <!-- 成效數字 -->
    <div class="pd-metrics">
      <div class="pd-metric">
        <span class="pd-metric__number">1,780 份</span>
        <span class="pd-metric__label">EPUB 完成轉製<br/>（共 2,130 份）</span>
      </div>
      <div class="pd-metric">
        <span class="pd-metric__number">4～5 倍</span>
        <span class="pd-metric__label">工讀生產出速度<br/>較手動處理提升</span>
      </div>
      <div class="pd-metric">
        <span class="pd-metric__number">1 週</span>
        <span class="pd-metric__label">獨立開發設計系統<br/>與半自動化工具</span>
      </div>
    </div>

    <!-- 角色資訊 -->
    <div class="pd-info">
      <div class="pd-info__item pd-info__item--company">
        <span class="pd-info__label">公司</span>
        <span class="pd-info__value">三貝德數位文創股份有限公司</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">產品</span>
        <span class="pd-info__value">AI 智能書包 — EPUB 數位教材製作</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">職稱</span>
        <span class="pd-info__value">UIUX Designer（跨部門支援、工具開發）</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">時間</span>
        <!-- <span class="pd-info__value">2023.10 – 2025.12（約兩年兩個月）</span> -->
        <span class="pd-info__value">2023.10 – 2025.12（約兩年兩個月）</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">負責範圍</span>
        <span class="pd-info__value">HTML/CSS 設計系統開發、Excel 半自動化工具開發、工讀生工作流程規劃與協作</span>
      </div>
    </div>

    <!-- 背景與挑戰 -->
    <h2>背景與挑戰</h2>

    <p>2023 年 9 月，公司計畫將 K12 國中與高中共 2,130 份紙本教材，全面轉型為流式排版的 EPUB 格式，以符合跨載體閱讀需求，並作為 AI 智能書包數位教材模組的核心內容基礎。</p>

    <p>然而，這個任務面臨一個結構性困境：<strong>公司內部唯一具備技術能力的研發部門，人力必須全數投入產品開發；編輯部門缺乏 HTML/CSS 技術背景，無法自行處理 EPUB 的程式碼結構</strong>。於是，任務在 2023 年 10 月落到了設計部，由我與另一位設計師 Claudia 共同承接。</p>

    <p>EPUB 本身是以 HTML + CSS 為底層結構的格式，理論上，由工作職責包含切版的 UIUX 設計師來處理是可行的。但現實遠比預期複雜，編輯部提供的 InDesign 檔案，因圖層命名或其他因素，由設計師 Aimee 轉出的 EPUB 再拆解為 HTML 後，結構幾乎全部都是亂碼：<strong>「CSS 選擇器清一色是無意義的中文命名，有序清單充斥著罕見字亂碼，根本無從辨識規律」</strong>。</p>

    <p>在這樣的狀況下，處理一份 EPUB 需要耗費我們 1 到 1.5 天的時間。換算下來，2,130 份教材若全靠人工逐一處理，不僅時程根本來不及，雙人作業也會因各自對排版的判斷略有差異，導致最終成果難以維持視覺一致性。</p>

    <img src="/portfolio/images/projects/ai-smartbag-epub-production/img-1.png" alt="原始 EPUB 拆解後的 HTML 結構，充斥中文命名的 CSS 選擇器與亂碼" />

    <!-- 設計過程 -->
    <h2>設計過程</h2>

    <h3>洞察一：受不了亂碼，決定從源頭建立秩序</h3>

    <p>在與 Claudia 持續埋頭處理亂碼的過程中，我越來越清楚地意識到「這樣下去不是辦法」，<strong>問題的根本不在於我們處理得不夠努力，而在於我們缺少一套讓所有人都能依循的規則與標準。</strong></p>

    <p>轉機來自一個上午的地毯式研究，我把各科目的紙本教材通通翻過一遍，逐一記錄編輯部美編人員在排版上的處理邏輯，試圖從中找出跨科目、跨單元的共通結構。這次研究讓我確認了一件事：<strong>教材雖然內容各異，但排版元素其實有規律可循</strong>，段落的主次層級、圖片與文字的對應關係、有序與無序清單的呈現方式，背後都有一套可以被定義的邏輯。</p>

    <p>帶著這個洞察，我向設計主管提出了一個大膽的請求：「<strong>請給我一個禮拜的時間，讓我先停下手邊的 EPUB 製作，專注開發一套共用的 EPUB 公版設計系統。</strong>」主管對這個想法抱持著鼓勵嘗試的態度，當下便同意讓我放下既有排程，全力投入。</p>

    <h3>洞察二：用前端設計系統思維，重建 EPUB 的底層結構</h3>

    <p>接下來的一週，我從頭建立了一套完整的 EPUB 設計系統。</p>

    <p>在 HTML 架構上，我以巢狀結構區分段落的主從層級，讓每一份教材的語意結構都能被清楚對應。在 CSS 上，我將樣式拆分為<strong>三支各司其職的檔案</strong>：</p>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">root.css</span>
        <p>統一定義所有文字大小、顏色、間距等設計變數，確保視覺規格全局一致，只需修改變數即可同步更新所有樣式。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">global.css</span>
        <p>收錄彈性調整用的通用選擇器（如 w-50、w-100），提供製作者在特殊情境下的快速調整空間，而不破壞主結構。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">structure.css</span>
        <p>定義 HTML 主結構的完整排版規則，採 BEM 命名模式撰寫語意化選擇器，並嚴格規範除我以外的成員不得任意修改，確保設計系統的穩定性。</p>
      </div>
    </div>

    <img src="/portfolio/images/projects/ai-smartbag-epub-production/img-2.png" alt="原始 EPUB 拆解後的 HTML 結構，充斥中文命名的 CSS 選擇器與亂碼" />

    <h3>關鍵突破：Excel 半自動化轉譯工具</h3>

    <p>設計系統建立後，<strong>我面對的下一個問題是：即使有了標準的 HTML 結構，要讓沒有深度前端經驗的夥伴，或工讀生正確手刻 HTML，依然是一道不小的門檻。</strong></p>

    <p>這時，我想到了過去在工作中練就的 Excel 函式能力。我著手開發了一套「<strong>Excel 半自動化轉譯工具</strong>」：製作者只需將純文字內容依照段落主次，依序貼入對應欄位，再透過簡單的下拉選單選擇內容類型（如標題層級、有序/無序清單、圖片標注），Excel 就會自動透過函式邏輯，在右側欄位即時組出符合設計系統規範的完整 HTML 語法。<strong>製作者只需複製輸出結果，貼入 Visual Studio Code 即可完成一份結構正確、樣式一致的 EPUB 頁面。</strong></p>

    <p>這套工具同時解決了原本讓我們最頭痛的亂碼有序清單問題：題目與選項的結構邏輯，也全部被納入工具的自動組合範疇內。</p>

    <img src="/portfolio/images/projects/ai-smartbag-epub-production/img-3.png" alt="Excel 半自動化轉譯工具介面，左側為純文字輸入欄位，右側即時產出對應的 HTML 語法" />

    <p>一週後，工具完成了，設計主管看到成果的當下說：「天啊！我看到希望了！」</p>

    <h3>流程建立：工讀生招募與協作規劃</h3>
 
    <p>有了設計系統與工具，下一步是將這套流程擴充為可持續運作的產能機制，這一階段，<strong>我同時扮演了三個角色：知識整理者、流程設計者，以及招募規劃者。</strong></p>
 
    <p>首先，<strong>我在 Notion 建立了一套完整的操作規範文件</strong>，涵蓋 HTML 結構規則、CSS 命名慣例、Excel 工具使用說明，以及各科目常見排版情境的處理方式。這份文件的目標不只是讓工讀生能夠上手，更是讓這套知識技能能夠在公司內部沉澱下來、持續流傳，即便製作人員異動，整套系統依然能夠穩定運作。</p>
 
    <p>在招募環節，<strong>我發揮了過去在人資工作累積的經驗，主動協助規劃工讀生的工作內容描述、技能需求條件，以及面試評估方式</strong>，確保招募到的人選具備足夠的基礎前端能力，能夠在這套工具輔助下獨立作業，而不需要耗費大量時間培訓。</p>
 
    <p><strong>最終招募到兩位工讀生，每位平均每天可完成 4 至 5 份 EPUB，相較於過去手動處理的效率提升了 4 到 5 倍以上。</strong></p>

    <img src="/portfolio/images/projects/ai-smartbag-epub-production/img-4.png" alt="Notion 操作指引文件，供工讀生參照使用 Excel 工具與 VS Code 完成 EPUB 製作" />

    <!-- 最終成果 -->
    <h2>最終成果</h2>

    <p>截至 2025 年 12 月底與工讀生的合作結束為止，團隊共完成了 2,130 份中的 1,780 份 EPUB 轉製。受限於公司政策調整，剩餘部分目前暫緩處理，但整體專案已從「幾乎不可能在時程內完成」推進至「超過八成完成」的階段。</p>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">量產效率大幅提升</span>
        <p>日均產出從原本的「不到 1 份」提升至 4～5 份，整體製作效率提升 4 到 5 倍，讓龐大的轉製工程在有限人力下得以持續推進。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">視覺一致性全面建立</span>
        <p>透過設計系統規範，每一份 EPUB 的排版結構與視覺風格都達到高度一致，解決了雙人甚至多人作業時，因判斷差異導致的品質不穩問題。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">讓不可能變成可能</span>
        <p>在教育出版領域，將含有大量圖片、表格與複雜段落結構的 K12 教材，全面轉型為流式排版的 EPUB，本身即是一項不小的創舉，圖片必須隨段落流動而非作為裝飾，這對排版系統的設計要求遠比文學類出版物更高。</p>
      </div>
    </div>

    <img src="/portfolio/images/projects/ai-smartbag-epub-production/img-5.png" alt="流式 EPUB 實際閱讀介面，具有豐富圖片與表格，排版難度遠高於文學類出版物" />

    <!-- 影響力 -->
    <h2>影響力</h2>

    <div class="pd-impact">
      <div class="pd-impact__item">
        <span class="pd-impact__level">公司層面</span>
        <ul>
          <li>將紙本教材轉為流式 EPUB 從「不可能」變為「可行」，直接支撐了 AI 智能書包數位教材模組的內容基礎，讓產品得以如期推進。</li>
          <li>在 K12 教育出版領域，成功建立了一套可處理圖文並茂、結構複雜教材的 EPUB 量產流程，具有一定的行業創新意義。</li>
        </ul>
      </div>
      <div class="pd-impact__item">
        <span class="pd-impact__level">團隊層面</span>
        <ul>
          <li>設計部跨部門承接了原本編輯部無力執行的技術任務，以工具開發與流程設計取代蠻力，直接展示了設計部的技術產能與跨職能價值。</li>
          <li>正是因為這套系統讓製作流程變得標準化、可複製，公司才真正看見將任務交由工讀生執行的可行性，也因此釋放了設計師的人力，讓設計師得以專注在更核心的產品設計工作上。</li>
          <li>Excel 工具與 Notion 操作指引的建立，讓工讀生能夠在最短學習曲線內上手作業，形成一套可持續擴充的製作流程，不再依賴個別成員的技術判斷。</li>
        </ul>
      </div>
      <div class="pd-impact__item">
        <span class="pd-impact__level">個人層面</span>
        <ul>
          <li>這是我第一次<strong>深刻體會到設計系統的真正價值，它不只是讓視覺一致，更是讓不同人在不同時間點，都能依循同一套標準做出品質穩定的成果。</strong></li>
          <li>這個專案也讓我意識到，跨職涯的技術積累——從人資磨練出的 Excel 函式能力，到設計工作培養的前端直覺——在面對複雜挑戰時，往往能產生意想不到的組合力量。</li>
          <li>更重要的是，我第一次清楚地看見自己的行動力對團隊的直接影響：<strong>一個主動提出並獨立完成的工具，改變了整個團隊的工作模式</strong>，也讓一個幾乎要被放棄的任務重新看見了完成的可能。</li>
        </ul>
      </div>
    </div>
  `},{id:"elementary-king-ai-mv",title:"成本降低 99.7%：一人 15 天用 AI 完成傳統團隊 120 萬的動畫 MV",description:"公司尾牙業務表揚大會需要造勢影片，我在無預算、無團隊、無動畫背景的條件下，自主規劃 12 階段 AI 製作流程，獨立完成一部含 6 個角色的 3D 動畫 MV。影片現場引爆掌聲，董事長當場轉發集團主管群，並直接強化公司全面導入 AI 工具的決策。",cover:"/images/projects/elementary-king-ai-mv/cover.png",hashtags:["AI-Native Workflow","跨職能執行力","ROI 極大化"],tags:["AI","Cross-functional"],metrics:[{value:"99.7%",label:"製作成本降低"},{value:"15 天",label:"完成 120 萬規格"},{value:"1,000+",label:"張分鏡圖產出"}],category:["ai"],content:`
    <!-- 成效數字 -->
    <div class="pd-metrics">
      <div class="pd-metric">
        <span class="pd-metric__number">99.7%</span>
        <span class="pd-metric__label">製作成本降低<br/>（3,000 vs 預估 120 萬）</span>
      </div>
      <div class="pd-metric">
        <span class="pd-metric__number">15 天</span>
        <span class="pd-metric__label">實際工作天<br/>（傳統外包需 2–3 個月）</span>
      </div>
      <div class="pd-metric">
        <span class="pd-metric__number">1,000+</span>
        <span class="pd-metric__label">張分鏡圖產出<br/>131 支影片素材</span>
      </div>
    </div>

    <!-- 角色資訊 -->
    <div class="pd-info">
      <div class="pd-info__item pd-info__item--company">
        <span class="pd-info__label">公司</span>
        <span class="pd-info__value">三貝德數位文創股份有限公司</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">產品</span>
        <span class="pd-info__value">小學王五代 — 前導動畫 MV</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">職稱</span>
        <span class="pd-info__value">設計主任（自發性主導，跨職能獨立執行）</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">時間</span>
        <!-- <span class="pd-info__value">2026.01.05 – 2026.02.10（實際工作天約 15 天）</span> -->
        <span class="pd-info__value">約 15 個工作天</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">負責範圍</span>
        <span class="pd-info__value">故事企劃、腳本撰寫、文字分鏡、AI 視覺生成、角色設定、場景合成、影片製作、音樂生成、剪輯輸出</span>
      </div>
    </div>

    <!-- 成品 -->
    <h2>成品</h2>

    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; margin: 1.5rem 0; border: 1px solid var(--color-border, #2a3a5c);">
      <iframe
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        src="https://www.youtube.com/embed/WE0CFdOcznQ?si=vzb5cBUViLqQOk2Q"
        title="小學王五代前導 AI 動畫 MV"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
    </div>

    <!-- 背景與挑戰 -->
    <h2>背景與挑戰</h2>

    <p>每年公司尾牙的下午場「業務表揚大會」，是研發與產品團隊向業務夥伴展示新年度產品藍圖的重要場合，目標是鼓舞士氣、為業務團隊注入信心。副總經理明確要求：現場氣氛必須熱鬧生動、讓業務情緒激昂，這個重責大任最終落在我身上。</p>

    <p>往年的慣例是排演小短劇，將產品特點融入演出，雖然有效，但形式已漸趨老套。我不想重複這條路，一方面是認為演戲形式已讓人審美疲乏，另一方面，我判斷有機會用更有衝擊力的方式呈現「小學王五代」即將上線的產品價值。</p>

    <p>然而，這個任務的執行難度遠超表面：<strong>我同時肩負著所有尾牙輸出物的設計統籌、多位長官的簡報製作、既有數位產品開發進度的把關，以及各種突發需求的協調處理。</strong>可用的時間極度壓縮，更沒有任何額外預算或專職人力可以動用。</p>

    <p>在這樣的條件下，我決定走一條沒有人走過的路：<strong>用 AI 工具，一個人做出一部動畫 MV。</strong></p>

    <!-- 設計過程 -->
    <h2>設計過程</h2>

    <h3>洞察一：策略思維先行，一魚三吃的任務設計</h3>

    <p>在動手之前，我先確立了這個專案的多重價值定位——它不只是一個尾牙表演節目，而是一次可以同時達成三個目標的戰略行動：</p>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">目標一：尾牙現場造勢</span>
        <p>作為業務表揚大會的研發部開場前導影片，為業務夥伴建立對「小學王五代」的期待感與情感連結。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">目標二：產品行銷鋪路</span>
        <p>為 2026 年 6 月上線的「小學王五代 Web」預先建立品牌認知，影片可直接轉作對外行銷素材使用。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">目標三：建立個人 AI 工作流</span>
        <p>藉這個真實專案系統性地摸索 AI 影片製作的工具鏈與方法論，將學習成果沉澱為可複用的工作流程。</p>
      </div>
    </div>

    <h3>洞察二：角色一致性是最大技術壁壘</h3>

    <p>這部 MV 的故事設定極為複雜：一位真人小女孩在現實世界中睡著，「小學王」IP 角色雷德從螢幕穿越而出，從 2D 形象立體化為 3D，邀請小女孩穿越時空之門，進入「小學王五代」的世界——而小女孩進入後，自身形象也從真人轉變為 3D 動畫風格。</p>

    <p>這個設定意味著，<strong>我必須在整部影片中同時控制 6 個視覺形象高度具體的角色，且涵蓋真人與動畫兩種截然不同的視覺風格</strong>。而這 5 個 IP 人物最原始的素材，僅有一張 2D 向量美術圖，沒有任何多角度設定。</p>

    <img src="/portfolio/images/projects/elementary-king-ai-mv/img-1.png" alt="這 5 個 IP 人物最原始的素材，僅有一張 2D 向量美術圖，沒有任何多角度設定" />

    <p>為了從根本解決角色一致性問題，我參照傳統動畫製作中「角色設定表」的概念，系統性地建立了完整的角色視覺資料庫：</p>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">步驟一：IP 多角度視圖生成</span>
        <p>利用 Nano Banana Pro 將 5 位 2D IP 生成偽 3D 多角度視圖，涵蓋正面、側面、背面、45 度正側面、45 度背側面、仰角、俯角等完整角度。</p>
      </div>

      <img src="/portfolio/images/projects/elementary-king-ai-mv/img-2.png" alt="利用 Nano Banana Pro 將 5 位 2D IP 生成偽 3D 多角度視圖，涵蓋正面、側面、背面、45 度正側面、45 度背側面、仰角、俯角等完整角度" />

      <div class="pd-callout__item">
        <span class="pd-callout__title">步驟二：真人小女孩形象建立</span>
        <p>生成「視覺年齡 10 歲的台灣小女孩」形象，逐步修調細節至滿意，再將真人版本轉換為 3D 動畫風格，確保兩種形象之間的視覺連貫性。</p>
      </div>

      <img src="/portfolio/images/projects/elementary-king-ai-mv/img-3.png" alt="生成「視覺年齡 10 歲的台灣小女孩」形象，逐步修調細節至滿意，再將真人版本轉換為 3D 動畫風格，確保兩種形象之間的視覺連貫性。" />

      <div class="pd-callout__item">
        <span class="pd-callout__title">步驟三：豐富表情素材庫</span>
        <p>針對所有角色生成至少 12 種表情變化，包含喜、怒、哀、樂等完整情緒光譜，建立後續影片合成所需的完整素材庫。</p>
      </div>

      <img src="/portfolio/images/projects/elementary-king-ai-mv/img-4.png" alt="針對所有角色生成至少 12 種表情變化，包含喜、怒、哀、樂等完整情緒光譜，建立後續影片合成所需的完整素材庫。" />

    </div>

    <p>傳統做法中，設計師處理每個表情動作平均需要 1–2 天；這套流程讓我在極短時間內產出了完整的角色設定素材，這是 15 天完成專案的關鍵前提。</p>

    <h3>關鍵轉折：燒掉 2 萬點數換來的方法論</h3>

    <p>專案初期，我嘗試直接將 IP 形象丟入 AI 影片模型，以文字指令描述動作與場景，期望一步到位產出影片素材。結果失敗率極高！生成的影片中，角色形象嚴重失真，點數卻以每次 1,000 點的速度快速消耗。</p>

    <p>公司的 Freepik 訂閱方案每年提供 21 萬 AI 生成點數，專案開始前僅剩約 15 萬。在前期實驗階段，我就燒掉了 2 萬點，系統顯示已用點數突破 8 萬的那一刻，我意識到<strong>若不改變方法，影片在完成前，點數就會被我燒光。</strong></p>

    <p>這個資源壓力迫使我重新審視整個製作邏輯，最終找到了 Freepik 平台上唯一支援七張參考圖輸入的影片生成模型 Kling O1，並倒推出一套「前製優先」的工作流——先將所有視覺素材在靜態階段處理到位，再餵給影片模型，以最大化每次生成的成功率。</p>

    <p>這個過程讓我提煉出一條核心方法論：<strong>「給 AI 的指令越單純，成功率越高。」</strong></p>

    <h3>分鏡圖製作：佔用 2/3 時間的核心工程</h3>

    <p>確立方法論後，整個製作流程進入最耗時也最關鍵的分鏡圖生成階段，這個環節佔據了超過三分之二的工作時間：</p>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">場景圖優先生成</span>
        <p>根據 Gemini 提供的文字分鏡，逐一生成場景圖，並透過 Nano Banana Pro 的水平旋轉功能與 Figma 內建 AI 處理物件位置，取得所需的多角度場景視圖。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">人物與場景分層合成</span>
        <p>將場景圖與 IP 角色素材同時輸入 Nano Banana Pro，進行精準合成。Nano Banana Pro 與 Google Mixboard 交錯使用——前者為主要合成工具，後者在需要多張參考圖且無浮水印的情境下啟用。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">單一指令微調</span>
        <p>合成完成後，針對細節進行單點微調，例如「將 A 角色的手放下、微笑改為大笑、其餘元素維持不動」。遵循「指令越單純、成功率越高」的原則，微調成功率維持在 90% 以上。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">Figma 製造運鏡分鏡</span>
        <p>將同一張合成圖放入 Figma 複製並裁切，模擬推鏡、拉鏡等運鏡效果，無需重新生成即可製造視角變化。</p>
      </div>
    </div>

    <p>這套流程最終產出了約 1,000 張分鏡圖，並千挑萬選其中 99 張作為後續影片生成的視覺底稿。</p>

    <img src="/portfolio/images/projects/elementary-king-ai-mv/img-5.png" alt="千挑萬選的 99 張分鏡圖與備用分鏡稿。" />

    <h3>影片生成、音樂製作與最終剪輯</h3>

    <p>以 Kling O1 模型將靜態分鏡圖轉換為動態影像，共生成 131 支短影片素材，篩選後保留 24 支精華片段進入最終剪輯。歌詞部分以 ChatGPT 輔助撰寫，音樂則透過 Suno 生成，並與影片進行節奏對位、轉場處理與調色，最終輸出約 2 分鐘的完整動畫 MV。</p>

    <img src="/portfolio/images/projects/elementary-king-ai-mv/img-6.png" alt="Kling O1 生成的動態短影片素材。" />

    <p>專案執行過程中，PM Jenny 協助處理部分分鏡的初稿與詞曲發想；設計師 Aimee 負責製作 MV 封面圖。最終影片的核心視覺內容均由我統一把關與重製，以確保整體風格與品質的一致性。</p>

    <!-- 最終成果 -->
    <h2>最終成果</h2>

    <p>2026 年 2 月 11 日尾牙下午場，這部動畫 MV 在業務表揚大會現場播出，引發了超乎預期的強烈迴響：</p>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">現場反應超出預期</span>
        <p>影片播畢獲得全場熱烈掌聲，業務夥伴們在現場不斷表達讚賞與敬佩；副總經理在前一晚私下看到影片時，激動不已，深受感動。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">董事長即時轉發集團主管群</span>
        <p>董事長在現場看完後，當場將影片轉發至集團其他公司的主管群組，並在尾牙隔天召集設計主任與編輯部主管開會，討論未來運用 AI 製作教學影片的可能性。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">影響力持續發酵</span>
        <p>過年後首場公司內部主管會議，副總經理主動將影片再次播放給未出席下午場的內勤主管們觀看，影片持續作為公司 AI 能力的具體展示案例流傳。</p>
      </div>
    </div>

    <div class="pd-metrics">
      <div class="pd-metric">
        <span class="pd-metric__number">$ 3,000</span>
        <span class="pd-metric__label">實際製作成本<br/>（含 AI 軟體訂閱）</span>
      </div>
      <div class="pd-metric">
        <span class="pd-metric__number">$ 120 萬</span>
        <span class="pd-metric__label">傳統外包預估成本<br/>（廣告業 PM 行情評估）</span>
      </div>
      <div class="pd-metric">
        <span class="pd-metric__number">400x</span>
        <span class="pd-metric__label">製作速度提升<br/>（15 天 vs 2–3 個月）</span>
      </div>
    </div>

    <!-- 影響力 -->
    <h2>影響力</h2>

    <div class="pd-impact">
      <div class="pd-impact__item">
        <span class="pd-impact__level">公司層面</span>
        <ul>
          <li>這部 MV 成為公司 AI 轉型的具體觸媒，直接推動了全公司 AI 工具的大規模導入，從設計部延伸至研發部與新成立的市場部。</li>
          <li>研發部開始以 AI 配合 MCP 預先切版，再交回設計部完善細節，大幅改變了設計與研發的協作工作流程。</li>
          <li>市場部啟動「金牌業務」計劃，目標是以 AI 打造協助業務團隊的系列工具，公司整體的 AI 戰略因此加速落地。</li>
          <li>影片同時作為「小學王五代 Web」的前導行銷素材，為 2026 年 6 月的產品上線預先鋪路。</li>
        </ul>
      </div>
      <div class="pd-impact__item">
        <span class="pd-impact__level">團隊層面</span>
        <ul>
          <li>驗證了設計部在 AI 時代的跨職能價值：不只是視覺執行，而是能夠獨立主導從企劃、製作到交付的完整創作流程。</li>
          <li>這套 12 階段的 AI 製作工作流，成為團隊往後規劃 AI 影片專案時的參考基準。</li>
        </ul>
      </div>
      <div class="pd-impact__item">
        <span class="pd-impact__level">個人層面</span>
        <ul>
          <li>這個專案讓我真實驗證了「AI 可以跨越專業邊界」這件事。我完全不具備 3D 建模、IP 識別設計、詞曲創作的背景，卻能獨立產出一部包含這些元素的動畫 MV，大幅提升了我在 AI 時代的自信心與執行底氣。</li>
          <li>從「給 AI 指令越單純，成功率越高」到「前製資產越豐富，生成品質越穩定」，我在這個專案中建立了一套可複用的 AI-Native 工作方法論。</li>
          <li>我開始將 AI 視為策略夥伴而非工具，把想法丟給它激盪、讓它延伸與修正，再由人做最終的判斷與把關。面對充滿挑戰的任務，我不再畏懼，而是視之為驗證新方法的機會。</li>
        </ul>
      </div>
    </div>
  `},{id:"bd-portal-scss-system",title:"從一天到一小時：為 BD Portal 建立可擴展的 SCSS 架構系統",description:"接手一個前期 CSS 結構混亂、難以維護的 CRM 系統，在上線前 9 個工作天緊急加入，主導建立一套五層 SCSS 模組化架構，將新頁面的切版時間從一天壓縮至一小時以內，並沿用至系統後續所有開發階段。",cover:"/images/projects/bd-portal-scss-system/cover.png",hashtags:["SCSS 架構設計","前端系統思維","跨設計師協作"],tags:["Frontend"],metrics:[{value:"90%+",label:"新頁面切版時間縮短"},{value:"22 個",label:"模組化 SCSS 檔案"},{value:"4 階段",label:"系統持續沿用開發"}],category:["frontend"],content:`
    <!-- 成效數字 -->
    <div class="pd-metrics">
      <div class="pd-metric">
        <span class="pd-metric__number">90%+</span>
        <span class="pd-metric__label">新頁面切版時間縮短<br/>（一天 → 一小時以內）</span>
      </div>
      <div class="pd-metric">
        <span class="pd-metric__number">22 個</span>
        <span class="pd-metric__label">模組化 SCSS 檔案<br/>從零建立完整架構</span>
      </div>
      <div class="pd-metric">
        <span class="pd-metric__number">4 階段</span>
        <span class="pd-metric__label">系統持續沿用<br/>支撐整個系統開發週期</span>
      </div>
    </div>

    <!-- 角色資訊 -->
    <div class="pd-info">
      <div class="pd-info__item">
        <span class="pd-info__label">公司</span>
        <span class="pd-info__value">三貝德數位文創股份有限公司</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">產品</span>
        <span class="pd-info__value">BD Portal — 業務銷售管理內部系統</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">職稱</span>
        <span class="pd-info__value">UIUX Designer（臨危受命，跨職能執行）</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">時間</span>
        <span class="pd-info__value">2023/04 – 2024/05（貫穿系統四個開發階段）</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">負責範圍</span>
        <span class="pd-info__value">SCSS 架構設計、切版實作、跨設計師協作規範制定</span>
      </div>
    </div>

    <!-- 背景與挑戰 -->
    <h2>背景與挑戰</h2>

    <p>BD Portal 是公司從零打造的業務銷售管理平台。在這個平台存在之前，業務團隊的日常作業分散在多個不同工具之間：名單管理靠 CRM、訂單靠另一套訂單系統、直購流程又是另一個入口，客戶追蹤靠 Google 試算表，各系統之間互不相通。<strong>BD Portal 的目標，就是把這些散落的流程全部集中到一個平台，讓業務從開發名單、預約 Demo、成交訂單到客戶關懷，都能在同一個地方完成。</strong></p>

    <p>2023 年 4 月底，系統第一階段功能即將在 5 月 15 日上線，但開發進度落後，原負責規劃 UI 與切版的主設計師在專案初期缺乏大型系統開發經驗，導致 CSS 結構在快速迭代中逐漸失控：命名混亂、樣式散落在不同檔案、Element UI 與 Bootstrap 組件交錯混用，同樣的畫面在不同頁面卻有完全不同的 HTML 結構。</p>

    <p>我在上線前 9 個工作天被臨時邀請加入這個專案。</p>

    <img src="/portfolio/images/projects/bd-portal-scss-system/img-1.png" alt="BD Portal 系統畫面：Dashboard 首頁，整合本月預約率、出席率、成交率與公告訊息" />

    <!-- 設計過程 -->
    <h2>設計過程</h2>

    <h3>洞察一：問題不在於寫得不夠努力，而在於缺少一套共同語言</h3>

    <p>加入後我沒有急著補切版進度，而是先把整個 code base 看過一遍。我看到的不是「某個人寫錯了」，而是一個系統性的問題：這是主設計師第一次負責這種規模的系統，前期本來就很難想得很全面，遇到狀況才寫一個 CSS 出來是正常的。但問題是，如果不在這個時間點建立秩序，後面只會越來越亂。</p>

    <p>我決定做兩件事：<strong>一邊完成緊急的切版交付，一邊同步制定一套兩個人都能遵循的 CSS 規範</strong>，讓後面的開發不再靠個人記憶，而是靠系統。</p>

    <h3>洞察二：架構要能反映「改動的頻率」，不是只反映「功能的分類」</h3>

    <p>制定規範時，最難的不是要不要分檔，而是要怎麼分。我和主設計師討論了一段時間，最後確立了一個核心原則：<strong>越穩定的東西越往上放，越容易改動的越往下放</strong>，改動時只影響對應的層，不會牽連其他地方。</p>

    <p>最終我們建立了一套五層架構，共 22 個模組化 SCSS 檔案：</p>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">第一層：變數層（Variables）</span>
        <p>色票、互動狀態、樣式變數｜定義設計系統的原子單位，是整個系統的設計語言基礎。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">第二層：基礎層（Base）</span>
        <p>全站 reset 與基本元素設定｜可以被後面的層覆蓋。確保所有頁面的起點一致。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">第三層：全局層（Global）</span>
        <p>間距系統（p&m 系列）、動畫，以及修改第三方套件 ElementUI 預設樣式的規則｜跨所有頁面共用，改一次全部生效。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">第四層：元件層（Component）</span>
        <p>Header、SideBar、表單、Dialog 等可複用的 UI 元件｜與頁面無關，獨立維護。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">第五層：頁面層（Page）</span>
        <p>每個功能模組的專屬樣式｜只影響對應頁面、不會外溢，頻繁修改也不會波及其他地方。</p>
      </div>
    </div>

    <img src="/portfolio/images/projects/bd-portal-scss-system/img-2.png" alt="SCSS 架構五層分層示意圖，由變數層到頁面層" />

    <h3>洞察三：規範要能落地，就要讓另一個人也能看懂、願意遵守</h3>

    <p>架構設計好之後，我的另一個挑戰是：如何讓和我一起協作的主設計師真的用這套系統，而不是各寫各的。</p>

    <p>我選擇的方式不是強迫，而是<strong>用清楚的文件說明每個決策背後的理由，並在討論過程中讓她參與決定命名規則。</strong>她比我更了解原本的專案脈絡，我比她更懂 SCSS 架構，兩個人的優勢剛好互補。過程中我也刻意留意，不讓她感覺自己被糾正，而是讓她感覺我們是在一起解決一個共同的問題。</p>

    <!-- 最終設計 -->
    <h2>最終設計</h2>

    <p>第一階段順利在 2023/05/15 上線，切版在 05/12 完成，保留了三天緩衝做 debug 與優化。這套 SCSS 架構也從第一階段開始，一直沿用到系統的第四個開發階段。</p>

    <p>在第四階段的手機版 UX 優化中，我在元件層新增了一個 <code>rwdTable</code> CSS 選擇器：只要在表格元件上套用這個 class，表格在手機版就會自動轉為卡片式排版，基本上不需要額外調整，頂多花 10 分鐘處理個別差異。這是這套架構設計的延伸體現，也是當初建立元件層時就預期要支援的擴充方式。</p>

    <video width="752" height="423" controls poster="/portfolio/images/projects/bd-portal-scss-system/img-3.png">
      <source src="/portfolio/images/projects/bd-portal-scss-system/video-1.mp4" type="video/mp4">
        您的瀏覽器不支援 HTML5 影片播放。(BD Portal 名單管理頁面頁面，手機版 Table RWD 優化。)
    </video>

    <!-- 最終成果 -->
    <h2>最終成果</h2>

    <div class="pd-metrics">
      <div class="pd-metric">
        <span class="pd-metric__number">90%+</span>
        <span class="pd-metric__label">新頁面切版時間縮短<br/>（一天 → 一小時以內）</span>
      </div>
      <div class="pd-metric">
        <span class="pd-metric__number">10 分鐘</span>
        <span class="pd-metric__label">rwdTable 元件<br/>完成手機版表格轉換</span>
      </div>
      <div class="pd-metric">
        <span class="pd-metric__number">4 階段</span>
        <span class="pd-metric__label">架構持續沿用<br/>支撐系統完整開發週期</span>
      </div>
    </div>

    <!-- 影響力 -->
    <h2>影響力</h2>

    <div class="pd-impact">
      <div class="pd-impact__item">
        <span class="pd-impact__level">公司層面</span>
        <ul>
          <li>BD Portal 系統順利在第一階段如期上線，並在後續三個開發階段持續迭代，成為公司業務團隊的核心工作工具。</li>
          <li><strong>SCSS 架構的建立讓系統在長達一年以上的迭代過程中，維持了可維護的代碼品質</strong>，避免了「改一個地方、壞一片」的技術債問題。</li>
        </ul>
      </div>
      <div class="pd-impact__item">
        <span class="pd-impact__level">團隊層面</span>
        <ul>
          <li>透過文件化的 CSS 修改規則，讓兩位設計師在同一套規範下協作，解決了命名不一致、樣式互相干擾的問題。</li>
          <li>架構建立後，<strong>新頁面的切版時間從原本的一天以上，縮短至一小時以內</strong>，顯著提升了設計部的前端產能。</li>
          <li>第四階段新增的 <code>rwdTable</code> CSS 選擇器與樣式，讓手機版表格適配從重複勞動變成一次性解決，後續類似頁面不需再重新處理。</li>
        </ul>
      </div>
      <div class="pd-impact__item">
        <span class="pd-impact__level">個人層面</span>
        <ul>
          <li>這是我第一次在時程壓力下主導一個複雜系統的前端架構設計，讓我體會到<strong>「在混亂中建立秩序」比「在空白處建立秩序」更難，也更有價值。</strong></li>
          <li>協作過程中，如何在自己主導的同時讓對方感受到被尊重，是我在這個專案裡學到的重要功課。技術可以強勢，但人的合作必須對等。</li>
          <li>這也是我第一次真正理解「設計系統」的意義，<strong>它不只是讓視覺一致，更是讓不同人在不同時間點，都能依循同一套標準持續擴充，而不依賴任何個人的記憶。</strong></li>
        </ul>
      </div>
    </div>
  `},{id:"osm-rwd-scss-function",title:"從 60 分鐘到 5 分鐘：自研 SCSS 函式解決複雜插畫 Hero 的 RWD 定位難題",description:"臨危受命接手未完成的切版，同時面對 Bootstrap 5 轉 Vue.js 環境遷移、課表爆版問題與複雜浮動插畫的 RWD 定位三重挑戰。在時間壓力下自研 rwdSize SCSS @function，將單一元素的斷點定位時間從 60 分鐘壓縮至 5 分鐘內，並推廣至設計團隊，成為後續 3 個以上專案的共用切版工具。",cover:"/images/projects/osm-rwd-scss-function/cover.png",hashtags:["技術自驅力","SCSS 工具開發","RWD 系統化"],tags:["Frontend"],metrics:[{value:"92%+",label:"定位時間縮短"},{value:"3+",label:"專案共用工具"},{value:"8 天",label:"實際工作天"}],category:["frontend"],content:`
    <!-- 成效數字 -->
    <div class="pd-metrics">
      <div class="pd-metric">
        <span class="pd-metric__number">92%+</span>
        <span class="pd-metric__label">元素定位時間縮短<br/>（60 分鐘 → 5 分鐘以內）</span>
      </div>
      <div class="pd-metric">
        <span class="pd-metric__number">3 個以上</span>
        <span class="pd-metric__label">後續專案採用<br/>rwdSize 共用工具</span>
      </div>
      <div class="pd-metric">
        <span class="pd-metric__number">8 天</span>
        <span class="pd-metric__label">實際工作天<br/>（含環境遷移與工具研發）</span>
      </div>
    </div>

    <!-- 角色資訊 -->
    <div class="pd-info">
      <div class="pd-info__item pd-info__item--company">
        <span class="pd-info__label">公司</span>
        <span class="pd-info__value">三貝德數位文創股份有限公司</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">產品</span>
        <span class="pd-info__value">橙色的科學書屋 — 課程官網</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">職稱</span>
        <span class="pd-info__value">UIUX Designer（臨危受命，跨職能執行）</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">時間</span>
        <!-- <span class="pd-info__value">2023.07.25 – 2023.08.04（約 8 個工作天）</span> -->
        <span class="pd-info__value">約 8 個工作天</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">負責範圍</span>
        <span class="pd-info__value">Vue.js 環境切版、RWD 響應式實作、SCSS 工具研發</span>
      </div>
    </div>

        <!-- Stage 連結 -->
    <h2>成品</h2>
    <p>正式站台已下線，你可以透過 Stage 環境瀏覽網站成果：</p>
    <a
      href="https://stage-osm.go100.com.tw/"
      target="_blank"
      class="pd-cta">
      → 瀏覽橙色的科學書屋（Stage）
    </a>

    <!-- 背景與挑戰 -->
    <h2>背景與挑戰</h2>

    <p>「橙色的科學書屋」是升學王旗下柯良澄老師的線上直播自然科課程官網，所有插畫均由設計主管親手繪製，再以 Illustrator 精修製作，視覺風格溫暖且充滿童趣。主管原本自己主導這個專案，並為了精進自己的切版能力，最初以純 HTML 語法進行開發。</p>

    <p>然而身為設計主管，她的工作時間高度破碎，會議接連不斷，難以持續專注於一個專案的開發。隨著上線時限逼近，她評估自己無法在截止日前完成，因此在 2023 年 7 月 24 日緊急將專案移交給我接手。</p>

    <p>接手當下，這個任務面臨的不只是「繼續完成切版」，而是三個同時爆發的挑戰：</p>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">挑戰一：環境遷移</span>
        <p>研發工程師要求將切版環境從純 HTML 轉換為 Vue.js，兩種環境的語法結構與切版思維完全不同，遷移需要額外的時間成本。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">挑戰二：資料結構限制</span>
        <p>接手後發現「課表、章節」的資料並非個別儲存，而是直接存成一個字串再以 CSS 斷行。這個做法在長字串情境下會出現嚴重的爆版問題，視覺上完全無法接受。向研發工程師反應後，對方以「小專案、排程趕」為由拒絕重新設計資料庫。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">挑戰三：複雜浮動插畫的 RWD 定位</span>
        <p>Hero 區塊有大量以 <code>position: absolute;</code> 定位的手繪插畫元素散落在畫面各處：顯微鏡、恐龍、燒杯、植物、書本、星球...，每個元素在不同斷點下，都需要維持與設計稿相近的相對位置與比例，傳統手動計算的方式極為耗時。</p>
      </div>
    </div>

    <img src="/portfolio/images/projects/osm-rwd-scss-function/img-1.png" alt="橙色的科學書屋 Hero 區塊，不同斷點的 UI 設計稿，大量手繪插畫元素以 absolute 定位散落在主視覺各處" />

    <!-- 設計過程 -->
    <h2>設計過程</h2>

    <h3>洞察一：研發拒絕配合，前端能力派上用場</h3>

    <p><strong>面對課表字串爆版的問題，我沒有因為「研發說不改」就睜一隻眼閉一隻眼。</strong>身為一個擁有前端開發背景的設計師，我相信自己有能力在不動資料庫的前提下，從前端找到出路。</p>

    <p>我憑藉過去學習前端的記憶，想到可以在 Vue.js 模板中使用 JavaScript 的 <code>.split()</code> 方法，將字串切割後重組為陣列，再用 <code>&lt;ul&gt;</code> 和 <code>&lt;li&gt;</code> 跑迴圈渲染。藉助 Google 查找與 ChatGPT 輔助驗證，最終成功讓課表的排版呈現符合設計稿的樣式，在不更動資料庫結構的情況下，徹底解決了爆版問題。</p>

    <img src="/portfolio/images/projects/osm-rwd-scss-function/img-2.png" alt="課表章節排版 Before / After 對比，左側為字串爆版狀態，右側為 .split() 重組後的正確排版" />

    <img src="/portfolio/images/projects/osm-rwd-scss-function/img-3.png" alt="使用 JavaScript 的 .split() 函式將字串轉為陣列" />

    <h3>洞察二：在時間壓力下，逼出更聰明的解法</h3>

    <p>切到 Hero 區塊時，我意識到麻煩來了。那些飄浮在畫面各處的手繪插畫元素，每一個都需要在六個以上的斷點分別設定 <code>top</code>、<code>left</code>、<code>width</code> 的數值。傳統做法是逐一手動計算，調整、預覽、再微調，光是一個元素就要花上將近一個小時，而 Hero 區塊的浮動元素多達十幾個。</p>

    <p>時程已經非常緊迫，我開始思考：<strong>有沒有更聰明、一勞永逸的方式？</strong>印象中曾看過介紹 CSS <code>calc()</code> 搭配 <code>vw</code> 做流體縮放的文章，我重新找出來研讀，理解了其中的數學邏輯後，開始在腦中設計一套公式：</p>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">核心公式邏輯</span>
        <p>利用 <code>100vw</code> 獲取當前螢幕寬度，以 <code>calc()</code> 計算元素在最小與最大螢幕尺寸之間的線性插值，讓元素的尺寸與位置隨螢幕寬度<strong>連續縮放</strong>，而非在固定斷點間跳變。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">封裝為 SCSS @function</span>
        <p>將公式封裝成 SCSS 的 <code>@function rwdSize($minS, $maxS, $minP, $maxP)</code>，使用者只需傳入「最小螢幕時的尺寸」與「最大螢幕時的尺寸」兩個必填參數，即可在任何 CSS 屬性上直接調用，省去所有手動計算的步驟。</p>
      </div>
    </div>

    <img src="/portfolio/images/projects/osm-rwd-scss-function/img-4.png" alt="rwdSize 核心公式邏輯" />

    <img src="/portfolio/images/projects/osm-rwd-scss-function/img-5.png" alt="rwdSize SCSS @function 完整程式碼，包含 px 與 % 單位的雙模式支援" />

    <p>有了這套 function，每個浮動元素的所有斷點定位，只需要在設計稿上量出兩個尺寸、填入函式，就能讓元素在螢幕縮放時保持與設計稿幾乎一致的相對位置與比例。原本需要近一小時的工作，縮短至 5 分鐘以內。</p>

    <!-- 最終設計 -->
    <h2>最終設計</h2>

    <p>最終完成的官網涵蓋完整的課程介紹頁，包含 Hero 主視覺、課程特色說明、柯老師介紹、教學互動片段、課表一覽（含上下學期切換）、Q&A 伸縮選單、學生見證輪播，以及頁尾聯絡資訊，全站完整支援 RWD 響應式呈現。</p>

    <a
    href="https://stage-osm.go100.com.tw/"
    target="_blank"
    class="pd-cta">
    → 瀏覽橙色的科學書屋（Stage）
    </a>
    <p>※ 小提示：在瀏覽的同時，推薦你透過<strong>拖曳縮放瀏覽器視窗</strong>欣賞元素定位的成果。</p>

    <!-- 最終成果 -->
    <h2>最終成果</h2>

    <div class="pd-metrics">
      <div class="pd-metric">
        <span class="pd-metric__number">92%+</span>
        <span class="pd-metric__label">元素 RWD 定位時間縮短<br/>（60 分鐘 → 5 分鐘以內）</span>
      </div>
      <div class="pd-metric">
        <span class="pd-metric__number">3 個以上</span>
        <span class="pd-metric__label">後續專案採用<br/>rwdSize 作為共用工具</span>
      </div>
    </div>

    <p>官網如期完成上線。更重要的是，這個專案讓我在時間壓力下研發出的 <code>rwdSize</code> SCSS <code>@function</code>，<strong>在整理成文件後分享給設計團隊，成為往後多個專案處理複雜 RWD 定位時的共用工具。</strong>當我在分享時，用滑鼠拖曳縮放瀏覽器視窗，展示 Hero 元素的流體縮放效果，每位設計師都驚呼：「怎麼可以這麼絲滑！」</p>

    <p>值得誠實說明的是，官網在上線營運一段時間後，因課程的商業成績未如預期，最終決定停止營運、關閉正式站台。這是商業層面的決策，與設計和技術本身無關。但這個結果也提醒了我：一個產品的生命週期，不只取決於它被做得多好，也取決於市場時機與商業條件。</p>

    <!-- 影響力 -->
    <h2>影響力</h2>

    <div class="pd-impact">
      <div class="pd-impact__item">
        <span class="pd-impact__level">團隊層面</span>
        <ul>
          <li><code>rwdSize</code> SCSS <code>@function</code> 在整理成知識文件後推廣至設計團隊，成為後續至少三個專案的共用切版工具，讓所有設計師在面對複雜的浮動元素 RWD 定位時，都能以更系統化、更高效的方式處理，不再依賴耗時的手動試誤。</li>
          <li>這是設計部第一次將個人在專案中自研的前端工具，沉澱為可被整個團隊共用的知識資產。</li>
        </ul>
      </div>
      <div class="pd-impact__item">
        <span class="pd-impact__level">個人層面</span>
        <ul>
          <li>這是我第一次接手他人寫過的 code，也是第一次在時程壓力下完成 Bootstrap 5 到 Vue.js 的環境遷移。過程中雖然一度因為環境切換的複雜度出現頭痛症狀，但最終如期交付，讓我對自己的前端能力建立了更紮實的信心。</li>
          <li>這個專案讓我意識到，設計師的前端能力不只是執行工具，更是在技術限制與時程壓力下，為使用者體驗把關的底氣。當研發說「不改」，<strong>是前端知識讓我能夠找到另一條路；當時程說「來不及」，是工程直覺讓我研究出更聰明的解法。</strong></li>
          <li>有趣的是，我在專案的回顧心得中寫道：「對 SCSS 變數與函式的應用還是很弱」；而就是在同一個專案裡，我研發出了後來被整個團隊採用的 SCSS <code>@function</code>。這個反差讓我深刻體會到：「有時候成長就發生在你還沒意識到的當下」。</li>
        </ul>
      </div>
    </div>
  `}];function Ge(e){return"/portfolio/"+e.replace(/^\//,"")}const Hp={class:"home"},Vp={class:"hero"},Kp={class:"container hero__inner"},Wp={class:"hero__content"},qp={class:"hero__title"},Gp={class:"hero__title-name"},Xp={class:"hero__cta"},zp={class:"projects-preview section"},Jp={class:"container"},Qp={class:"projects-preview__top"},Yp={class:"projects-grid"},Zp={class:"project-card__img"},ed=["src","alt"],td={class:"project-card__body"},sd={class:"project-card__tags"},nd={class:"project-card__title"},id={class:"project-card__desc"},od={class:"section leadership-preview"},ld={class:"container"},rd={class:"leadership__inner"},ad={class:"leadership__left"},cd={class:"leadership__articles"},_o="Nomis",pd={__name:"Home",setup(e){const t=ve(()=>At.slice(0,4)),s=Ie(""),n=Ie(!1),i=Ie(!1);return It(()=>{setTimeout(()=>{let d=0;const c=()=>{d<_o.length?(s.value+=_o[d],d++,setTimeout(c,110)):setTimeout(()=>{n.value=!0,setTimeout(()=>{i.value=!0},900)},200)};c()},600)}),(o,l)=>(D(),L("div",Hp,[u("section",Vp,[l[8]||(l[8]=u("div",{class:"hero__bg-text","aria-hidden":"true"},"DESIGNER",-1)),u("div",Kp,[u("div",Wp,[l[4]||(l[4]=u("p",{class:"hero__eyebrow"},"UIUX Designer · Web Slicing · Cross-functional",-1)),u("h1",qp,[l[0]||(l[0]=u("span",{class:"hero__title-line"},"Hi, I'm",-1)),u("span",Gp,[ce(q(s.value),1),u("em",{class:we(["hero__title-dot",{"hero__title-dot--visible":n.value}])},".",2),u("span",{class:we(["hero__cursor",{"hero__cursor--hidden":i.value}]),"aria-hidden":"true"},"|",2)])]),l[5]||(l[5]=u("p",{class:"hero__desc"},[ce(" 橫跨 UIUX、前端與設計策略的複合型設計師。"),u("br"),ce(" 我用數據驗證設計決策，也能在資源不足的情況下，"),u("br"),ce(" 獨立推進專案，讓成果落地。 ")],-1)),u("div",Xp,[X(ue(Oe),{to:"/projects",class:"btn btn--primary"},{default:pe(()=>[...l[1]||(l[1]=[ce("View Work",-1)])]),_:1}),X(ue(Oe),{to:"/about",class:"btn btn--ghost"},{default:pe(()=>[...l[2]||(l[2]=[ce("About Me",-1)])]),_:1}),l[3]||(l[3]=u("a",{href:"https://www.linkedin.com/in/nomis-yang/",target:"_blank",class:"btn"},"LinkedIn",-1))]),l[6]||(l[6]=ft('<div class="hero__stats"><div class="hero__stat"><span class="hero__stat-num">3+</span><span class="hero__stat-label">Years UIUX Design</span></div><div class="hero__stat"><span class="hero__stat-num">6+</span><span class="hero__stat-label">B2B / B2C Products</span></div><div class="hero__stat"><span class="hero__stat-num">80%</span><span class="hero__stat-label">Cost Optimization</span></div></div>',1))]),l[7]||(l[7]=u("div",{class:"hero__photo"},[u("div",{class:"hero__photo-frame"},[u("img",{src:Np,alt:"Nomis Yang"}),u("div",{class:"hero__photo-tag"},[u("span",null,"✦"),ce(" UIUX · Research · Frontend ")])])],-1))]),l[9]||(l[9]=u("div",{class:"hero__scroll-hint"},[u("span",null,"Scroll"),u("div",{class:"hero__scroll-line"})],-1))]),u("section",zp,[u("div",Jp,[u("div",Qp,[l[11]||(l[11]=u("div",{class:"section__header"},[u("p",{class:"section__label"},"Selected Work"),u("h2",{class:"section__title"},"Projects")],-1)),X(ue(Oe),{to:"/projects",class:"btn btn--ghost projects-preview__all-btn"},{default:pe(()=>[...l[10]||(l[10]=[ce("View All →",-1)])]),_:1})]),u("div",Yp,[(D(!0),L(Y,null,me(t.value,(r,a)=>(D(),Ze(ue(Oe),{key:r.id,to:`/projects/${r.id}`,class:we(["project-card",{"project-card--wide":a===2}])},{default:pe(()=>[u("div",Zp,[u("img",{src:ue(Ge)(r.cover),alt:r.title,loading:"lazy"},null,8,ed),l[12]||(l[12]=u("div",{class:"project-card__overlay"},[u("span",{class:"project-card__cta-text"},"View Case Study →")],-1))]),u("div",td,[u("div",sd,[(D(!0),L(Y,null,me(r.tags,d=>(D(),L("span",{key:d,class:"tag"},q(d),1))),128))]),u("h3",nd,q(r.title),1),u("p",id,q(r.description),1)])]),_:2},1032,["to","class"]))),128))])])]),l[20]||(l[20]=ft('<section class="skills section"><div class="container"><div class="section__header"><p class="section__label">Contribution</p><h2 class="section__title">我能為你的團隊帶來什麼</h2></div><div class="bento"><div class="bento__card bento__card--hero"><div class="bento__eyebrow">核心能力</div><h3 class="bento__title">研究驅動的產品設計</h3><p class="bento__desc">從使用者訪談、數據分析到最終設計決策，讓證據說話，而不是靠直覺猜測使用者要什麼。</p><ul class="bento__list"><li>使用者訪談 &amp; 易用性測試</li><li>數據判讀 &amp; A/B 測試規劃</li><li>競品分析 &amp; 研究報告</li><li>從洞察到設計決策的完整流程</li></ul></div><div class="bento__card"><div class="bento__eyebrow">執行廣度</div><h3 class="bento__title">跨職能執行力</h3><p class="bento__desc">從 UX 研究、UI 設計到前端切版，能獨立一手包辦，確保設計落地不失真。</p><ul class="bento__list"><li>資訊架構 &amp; 互動設計</li><li>Vue.js / SCSS / RWD</li><li>Prototype 製作與驗證</li></ul></div><div class="bento__card"><div class="bento__eyebrow">領導深度</div><h3 class="bento__title">設計領導<br>與制度建立</h3><p class="bento__desc">用制度取代靠感覺，讓設計團隊的運作可被量化、可被傳承。</p><ul class="bento__list"><li>OKR 績效系統設計</li><li>設計師職能模型建立</li><li>跨部門協作制度化</li></ul></div><div class="bento__card bento__card--sm"><div class="bento__eyebrow">工具應用</div><h3 class="bento__title">AI 工作流</h3><p class="bento__desc">成本降低 99.7%，獨立完成傳統需要整個製作團隊的動畫專案。</p></div><div class="bento__card bento__card--sm"><div class="bento__eyebrow">溝通能力</div><h3 class="bento__title">跨部門協作</h3><p class="bento__desc">在產品、工程與商業目標之間建立共識，推動設計決策真正落地。</p></div><div class="bento__card bento__card--sm"><div class="bento__eyebrow">持續成長</div><h3 class="bento__title">自驅學習</h3><p class="bento__desc">主動研發 SCSS 工具、建立知識文件，在限制中找到更聰明的解法。</p></div></div></div></section>',1)),u("section",od,[u("div",ld,[u("div",rd,[u("div",ad,[l[14]||(l[14]=u("p",{class:"section__label"},"Leadership",-1)),l[15]||(l[15]=u("h2",{class:"leadership__title"},[ce("設計領導力的"),u("br"),ce("實踐與反思")],-1)),l[16]||(l[16]=u("p",{class:"leadership__desc"}," 在我當上主管之後，我發現設計能力只是起點。這裡記錄的，是我如何用制度取代靠感覺、用數據取代靠記憶、在資源不足的情況下，仍然讓團隊往前走的真實歷程。 ",-1)),X(ue(Oe),{to:"/leadership",class:"btn btn--primary"},{default:pe(()=>[...l[13]||(l[13]=[ce("閱讀更多文章 →",-1)])]),_:1})]),u("div",cd,[X(ue(Oe),{to:"/leadership/impossible-deadline-two-weeks",class:"leadership__article"},{default:pe(()=>[...l[17]||(l[17]=[u("div",{class:"leadership__article-num"},"01",-1),u("div",{class:"leadership__article-body"},[u("span",{class:"leadership__article-tag"},"專案決策過程"),u("h4",{class:"leadership__article-title"},"我們如何在兩週內，完成一個不可能的任務")],-1),u("span",{class:"leadership__article-arrow"},"→",-1)])]),_:1}),X(ue(Oe),{to:"/leadership/design-request-collaboration-guide",class:"leadership__article"},{default:pe(()=>[...l[18]||(l[18]=[u("div",{class:"leadership__article-num"},"02",-1),u("div",{class:"leadership__article-body"},[u("span",{class:"leadership__article-tag"},"帶團隊的方法論"),u("h4",{class:"leadership__article-title"},"當全公司都把設計師當通靈師，我決定立一條規矩")],-1),u("span",{class:"leadership__article-arrow"},"→",-1)])]),_:1}),X(ue(Oe),{to:"/leadership/design-team-okr-performance-system",class:"leadership__article"},{default:pe(()=>[...l[19]||(l[19]=[u("div",{class:"leadership__article-num"},"03",-1),u("div",{class:"leadership__article-body"},[u("span",{class:"leadership__article-tag"},"設計團隊管理心得"),u("h4",{class:"leadership__article-title"},"當 KPI 無法衡量設計師：我如何為設計部打造 OKR 績效系統")],-1),u("span",{class:"leadership__article-arrow"},"→",-1)])]),_:1})])])])]),l[21]||(l[21]=ft('<section class="testimonials section"><div class="container"><div class="section__header"><p class="section__label">Recommendations</p><h2 class="section__title">他們這樣說</h2></div><div class="testimonials__grid"><div class="testimonial__card"><span class="testimonial__quote">&quot;</span><h4 class="testimonial__title">整合創意與執行力，承諾準時、品質穩定</h4><p class="testimonial__content"> 我在 Samebest 與 Nomis 合作過多個專案，他兼具創意與執行力，能整合多方觀點、帶動團隊朝共同目標前進。他曾主導一檔行銷專案，設計有趣的心理測驗並包裝成宇宙冒險世界觀，在專案限制下仍精準落地並帶來良好推廣成效。與他合作總令人安心：承諾準時、品質穩定。真心推薦給重視學習與成長的團隊。 </p><div class="testimonial__author"><img src="'+Bp+'" alt="Enn Tang" class="testimonial__avatar"><div><p class="testimonial__name">Enn Tang</p><p class="testimonial__role">2024 年 5 月・Design Lead・直接主管</p></div></div></div><div class="testimonial__card"><span class="testimonial__quote">&quot;</span><h4 class="testimonial__title">具備產品思維，跨部門協作精準對齊設計與市場需求</h4><p class="testimonial__content"> 我與 Nomis 密切合作了多個數位產品專案。他具備極強的產品思維，總能從 UI/UX 角度提出精準的建議，協助團隊將設計與市場需求完美對齊。他曾在「學習紀錄」功能中，運用優異的數據視覺化能力，將繁雜數據轉為直觀介面，精準解決家長端痛點。在跨部門協作上，他不帶本位主義，總能透過溝通激發團隊綜效，且對專案里程碑與交付物的品質把控極度精準。他是一位嚴以律己、善於整合資源的優秀設計主管，真心推薦給任何重視交付品質與團隊協作的企業。 </p><div class="testimonial__author"><img src="'+Fp+'" alt="Jenny Yu" class="testimonial__avatar"><div><p class="testimonial__name">Jenny Yu</p><p class="testimonial__role">2026 年 5 月・Project Manager・跨團隊夥伴</p></div></div></div></div></div></section>',1))]))}},dd={class:"project-card-v__hashtags"},ud={class:"project-card-v__cover"},fd=["src","alt"],_d={class:"project-card-v__body"},hd={class:"project-card-v__tags"},gd={class:"project-card-v__title"},md={class:"project-card-v__desc"},vd={key:0,class:"project-card-v__metrics"},bd={class:"project-card-v__metric-value"},yd={class:"project-card-v__metric-label"},Sd={__name:"ProjectCard",props:{project:{type:Object,required:!0}},setup(e){return(t,s)=>(D(),Ze(ue(Oe),{to:`/projects/${e.project.id}`,class:"project-card-v"},{default:pe(()=>[u("div",dd,[(D(!0),L(Y,null,me(e.project.hashtags,n=>(D(),L("span",{key:n,class:"project-card-v__hashtag"}," ✦ "+q(n),1))),128))]),u("div",ud,[u("img",{src:ue(Ge)(e.project.cover),alt:e.project.title,loading:"lazy"},null,8,fd),s[0]||(s[0]=u("div",{class:"project-card-v__overlay"},[u("span",{class:"project-card-v__cta"},"查看案例 →")],-1))]),u("div",_d,[u("div",hd,[(D(!0),L(Y,null,me(e.project.tags,n=>(D(),L("span",{key:n,class:"tag"},q(n),1))),128))]),u("h3",gd,q(e.project.title),1),u("p",md,q(e.project.description),1),e.project.metrics&&e.project.metrics.length?(D(),L("div",vd,[(D(!0),L(Y,null,me(e.project.metrics,n=>(D(),L("div",{key:n.label,class:"project-card-v__metric"},[u("span",bd,q(n.value),1),u("span",yd,q(n.label),1)]))),128))])):ze("",!0)])]),_:1},8,["to"]))}},Ad={class:"projects-page"},wd={class:"projects-hero section"},Ed={class:"container projects-hero__inner"},Cd={class:"projects-hero__right"},xd={class:"projects-hero__filters"},Id=["onClick"],Pd={class:"projects-list section"},Rd={class:"container"},Td={class:"projects-list__grid"},kd={key:0,class:"projects-list__empty"},jd={__name:"Projects",setup(e){const t=ai(),s=["All",...new Set(At.flatMap(o=>o.tags))],n=Ie("All");It(()=>{const o=t.query.tag;o&&s.includes(o)&&(n.value=o)});const i=ve(()=>n.value==="All"?At:At.filter(o=>o.tags.includes(n.value)));return(o,l)=>(D(),L("div",Ad,[u("section",wd,[u("div",Ed,[l[1]||(l[1]=u("div",{class:"projects-hero__left"},[u("p",{class:"projects-hero__label"},"My Work"),u("h1",{class:"projects-hero__title"},"Projects"),u("p",{class:"projects-hero__desc"}," 橫跨 UIUX 設計、前端切版與 AI 產品設計的實戰專案，每個專案都有可量化的成效與完整的設計思考過程。 ")],-1)),u("div",Cd,[l[0]||(l[0]=u("p",{class:"projects-hero__filter-label"},"Filter by",-1)),u("div",xd,[(D(),L(Y,null,me(s,r=>u("button",{key:r,class:we(["projects-hero__filter",{"projects-hero__filter--active":n.value===r}]),onClick:a=>n.value=r},q(r),11,Id)),64))])])])]),u("section",Pd,[u("div",Rd,[u("div",Td,[(D(!0),L(Y,null,me(i.value,r=>(D(),Ze(Sd,{key:r.id,project:r},null,8,["project"]))),128))]),i.value.length===0?(D(),L("p",kd," 目前沒有符合此分類的專案。 ")):ze("",!0)])])]))}},Dd={key:0,class:"project-detail"},Od={class:"project-detail-hero section"},Md={class:"container"},$d={class:"project-detail-hero__hashtags"},Ud={class:"project-detail-hero__title"},Ld={class:"project-detail-hero__desc"},Nd={class:"project-detail-hero__tags"},Bd={class:"project-detail-cover"},Fd={class:"container"},Hd=["src","alt"],Vd={class:"project-detail-content section"},Kd={class:"container project-detail-content__layout"},Wd=["innerHTML"],qd={class:"toc-sidebar"},Gd={class:"toc-sidebar__toc"},Xd={class:"toc-sidebar__list"},zd=["onClick"],Jd={class:"toc-float__panel"},Qd={class:"toc-float__list"},Yd=["onClick"],Zd={class:"project-detail-nav section"},eu={class:"container"},tu={class:"project-detail-nav__inner"},su={class:"project-detail-nav__arrows"},nu={class:"project-detail-nav__arrow-title"},iu={class:"project-detail-nav__arrow-title"},ou={key:1,class:"project-detail-notfound section"},lu={class:"container"},ru={__name:"ProjectDetail",setup(e){const t=ai(),s=ve(()=>At.find(b=>b.id===t.params.id)),n=ve(()=>At.findIndex(b=>b.id===t.params.id)),i=ve(()=>n.value>0?At[n.value-1]:null),o=ve(()=>n.value<At.length-1?At[n.value+1]:null),l=Ie([]),r=Ie(""),a=Ie(null),d=Ie(!1),c=()=>{if(!a.value)return;const b=a.value.querySelectorAll("h2, h3");l.value=Array.from(b).map((v,C)=>{const I=`heading-${C}`;return v.id=I,{id:I,text:v.textContent,level:v.tagName}}),f()},f=()=>{a.value&&a.value.querySelectorAll(".pd-info").forEach(b=>{const v=Array.from(b.querySelectorAll(".pd-info__item")).filter(C=>getComputedStyle(C).display!=="none");v.forEach(C=>C.classList.remove("pd-info__item--full")),v.length%2!==0&&v[v.length-1].classList.add("pd-info__item--full")})},h=()=>{if(!a.value)return;const b=a.value.querySelectorAll("h2, h3");let v="";b.forEach(C=>{C.getBoundingClientRect().top<=350&&(v=C.id)}),r.value=v},m=b=>{const v=document.getElementById(b);v&&v.scrollIntoView({behavior:"smooth",block:"start"})};return It(()=>{is(()=>{c(),window.addEventListener("scroll",h)})}),rs(()=>{window.removeEventListener("scroll",h)}),qt(s,()=>{is(()=>c())}),(b,v)=>{const C=ln("RouterLink");return s.value?(D(),L("div",Dd,[u("section",Od,[u("div",Md,[X(C,{to:"/projects",class:"project-detail-hero__back"},{default:pe(()=>[...v[1]||(v[1]=[ce("← 返回 Projects",-1)])]),_:1}),u("div",$d,[(D(!0),L(Y,null,me(s.value.hashtags,I=>(D(),L("span",{key:I,class:"project-detail-hero__hashtag"},"#"+q(I),1))),128))]),u("h1",Ud,q(s.value.title),1),u("p",Ld,q(s.value.description),1),u("div",Nd,[(D(!0),L(Y,null,me(s.value.tags,I=>(D(),L("span",{key:I,class:"tag"},q(I),1))),128))])])]),u("div",Bd,[u("div",Fd,[u("img",{src:ue(Ge)(s.value.cover),alt:s.value.title,class:"project-detail-cover__img"},null,8,Hd)])]),u("section",Vd,[u("div",Kd,[u("div",{class:"project-detail-content__body",ref_key:"contentRef",ref:a,innerHTML:s.value.content},null,8,Wd),u("aside",qd,[u("div",Gd,[v[2]||(v[2]=u("p",{class:"toc-sidebar__title"},"目錄",-1)),u("ul",Xd,[(D(!0),L(Y,null,me(l.value,I=>(D(),L("li",{key:I.id,class:we(["toc-sidebar__item",{"toc-sidebar__item--h3":I.level==="H3"}])},[u("a",{onClick:Xs(R=>m(I.id),["prevent"]),href:"#",class:we(["toc-sidebar__link",{"toc-sidebar__link--active":r.value===I.id}])},q(I.text),11,zd)],2))),128))])]),v[3]||(v[3]=ft('<div class="toc-sidebar__contact"><p class="toc-sidebar__contact-title">Contact</p><div class="toc-sidebar__contact-links"><a href="mailto:nomis820710@gmail.com" class="toc-sidebar__contact-link"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> nomis820710@gmail.com </a><a href="https://www.linkedin.com/in/nomis-yang/" target="_blank" rel="noopener noreferrer" class="toc-sidebar__contact-link"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn ↗ </a></div></div>',1))])])]),u("div",{class:we(["toc-float",{"toc-float--open":d.value}])},[u("button",{class:"toc-float__toggle",onClick:v[0]||(v[0]=I=>d.value=!d.value),"aria-label":"目錄"},[...v[4]||(v[4]=[u("i",{class:"fa-solid fa-list"},null,-1)])]),u("div",Jd,[v[5]||(v[5]=u("p",{class:"toc-float__title"},"目錄",-1)),u("ul",Qd,[(D(!0),L(Y,null,me(l.value,I=>(D(),L("li",{key:I.id,class:we({"toc-float__item--h3":I.level==="H3"})},[u("a",{onClick:Xs(R=>{m(I.id),d.value=!1},["prevent"]),href:"#"},q(I.text),9,Yd)],2))),128))])])],2),u("section",Zd,[u("div",eu,[u("div",tu,[X(C,{to:"/projects",class:"btn btn--secondary project-detail-nav__back"},{default:pe(()=>[...v[6]||(v[6]=[ce(" ← 查看所有專案 ",-1)])]),_:1}),u("div",su,[i.value?(D(),Ze(C,{key:0,to:`/projects/${i.value.id}`,class:"project-detail-nav__arrow"},{default:pe(()=>[v[7]||(v[7]=u("span",{class:"project-detail-nav__arrow-dir"},"← 上一篇",-1)),u("span",nu,q(i.value.title),1)]),_:1},8,["to"])):ze("",!0),o.value?(D(),Ze(C,{key:1,to:`/projects/${o.value.id}`,class:"project-detail-nav__arrow project-detail-nav__arrow--next"},{default:pe(()=>[v[8]||(v[8]=u("span",{class:"project-detail-nav__arrow-dir"},"下一篇 →",-1)),u("span",iu,q(o.value.title),1)]),_:1},8,["to"])):ze("",!0)])])])])])):(D(),L("div",ou,[u("div",lu,[v[10]||(v[10]=u("h1",null,"找不到此專案",-1)),X(C,{to:"/projects",class:"btn btn--primary"},{default:pe(()=>[...v[9]||(v[9]=[ce("返回 Projects",-1)])]),_:1})])]))}}},au={class:"article-card__cover"},cu=["src","alt"],pu={class:"article-card__body"},du={class:"article-card__hashtags"},uu={class:"article-card__title"},fu={class:"article-card__desc"},_u={class:"article-card__date"},hu={__name:"ArticleCard",props:{article:{type:Object,required:!0}},setup(e){return(t,s)=>{const n=ln("RouterLink");return D(),Ze(n,{to:`/leadership/${e.article.id}`,class:"article-card"},{default:pe(()=>[u("div",au,[u("img",{src:ue(Ge)(e.article.cover),alt:e.article.title},null,8,cu)]),u("div",pu,[u("div",du,[(D(!0),L(Y,null,me(e.article.hashtags,i=>(D(),L("span",{key:i,class:"article-card__hashtag"}," #"+q(i),1))),128))]),u("h3",uu,q(e.article.title),1),u("p",fu,q(e.article.description),1),u("p",_u,q(e.article.date),1)]),s[0]||(s[0]=u("div",{class:"article-card__cta"}," 閱讀文章 → ",-1))]),_:1},8,["to"])}}},Ot=[{id:"equal-treatment-trap",title:"我以為一視同仁是公平，這機會卻差點壓垮了她",description:"把同一份標準套在每個人身上，不一定是公平，有時候是一種忽視。這篇文章分享我如何在一個新手設計師的第一個獨立 UIUX 專案中，從「太晚發現問題」到「找到適合她的工作方式」。",cover:"/images/articles/equal-treatment-trap/cover.png",hashtags:["工作拆解","因材施教","設計師成長"],tags:["個人成長反思","設計團隊管理心得","專案決策過程"],date:"2026-02-06",content:`
    <p>我在帶設計團隊的過程中，一直有一個原則：對每個人用同樣的標準。不偏心、不特例、不因為誰資深就放寬、因為誰資淺就降低期待。</p>

    <p><strong>我以為這是公平，直到有一天，我意識到自己用這份「公平」，差點壓垮了一個正在努力的人。</strong></p>

    <h2>她是一個平面設計底子很好的設計師</h2>

    <p>在設計部成立之前，她一直在行銷部做行銷美編，本科出身、多年經驗，設計感和品牌美感的掌握都是團隊裡數一數二的。加入設計部之後，她開始嘗試往 UIUX 領域發展。</p>

    <p>過去兩年，她的主要工作仍以平面視覺為主，偶爾接一個獨立的 Landing Page、或參與 App 的小功能迭代，那些都還算在她熟悉的範圍內。</p>

    <p>「小學王五代」，是她第一個獨立負責的 UIUX 專案。</p>

    <h2>我為什麼把這個專案交給她</h2>

    <p>在我接手設計主管這個角色之後，我一直有一個想法：<strong>我希望每位設計師，都能在這間公司至少留下一個屬於自己的代表作。</strong></p>

    <p>「小學王五代」是公司 2026 年的重點產品重構案，從小學王四代的視覺改版出發，逐漸升級成新版 Web 的完整重建。這個案子規模不小，但功能脈絡清楚，公司也有既有的同類型產品可以參考。</p>

    <p>我安排她主責 UIUX 設計，心裡的盤算是：有參考產品、有團隊支援，她可以一邊做、一邊學，這是一個給她歷練的機會。</p>

    <p>我也做好了心理準備，知道把這個大專案派給新手，對她和對我都是挑戰。</p>

    <p>但這個挑戰，遠遠超出我的預期。</p>

    <h2>她開始跟不上了</h2>

    <p>一開始，她還能在我給的時間內完成任務：登入頁、首頁，都順利交付；進入「看課程」之後，開始有些微的 delay，但還在容許範圍。</p>

    <p>直到「做練習」這個功能，她嚴重拖延了。</p>

    <p>進度壓縮到後面的模組，整個排程都被影響，我必須停下來，正視這件事。</p>

    <h2>那次嚴肅的對話</h2>

    <p>我找她談了一次，語氣不是指責，但很直接。我想知道，她到底遇到了什麼？</p>

    <div class="ad-callout">
      <div class="ad-callout__item">
        <span class="ad-callout__title">她說了很多，我一條一條聽完：</span>
        <ul>
          <li><strong>Logo 設計拖垮了她：</strong>她同時在跑一個老闆完全沒給方向的 Logo 專案，設計到心力交瘁。有半年以上的時間，她每天上午畫 Logo、下午畫 UI，兩種截然不同的設計邏輯反覆切換，光是進入狀態就要消耗大量心力。</li>
          <li><strong>這是她第一個獨立負責的 UIUX 專案：</strong>她過去幾乎沒有機會和工程師深度協作，對 HTML、CSS 理解有限，不懂程式邏輯，所以理解產品的資訊架構和功能運作，對她來說要花比別人多很多的時間。</li>
          <li><strong>UI 和 UX 同時進行，讓她一直在打架：</strong>她常常把畫面做得很漂亮，切版的設計師告訴她 RWD 在不同斷點下行不通，必須回頭重設計；又或者 UI 已經完成了 80%，才去問工程師，才發現某個功能因為 API 限制根本無法實現。</li>
        </ul>
      </div>
    </div>

    <p>聽完之後，我沉默了一下。</p>

    <p>不是她不夠努力，而是她一直在撐著，用她能做到的方式盡力推進。只是這個「撐」，已經撐太久了，疲態開始慢慢滲進工作表現裡。</p>

    <blockquote>視覺設計是她最大的優點，在這個專案裡，卻也成了她最深的絆腳石。她太習慣把畫面做漂亮，卻還沒有足夠的工程語感去判斷什麼能做、什麼不能做，於是大量的設計能量，都消耗在後來必須推翻的決策上。</blockquote>

    <h2>我意識到，我太晚看見她了</h2>

    <p>那場對話之後，我有一種很清楚的自責感。</p>

    <p>我把她安排進這個專案，給她同樣的工作節奏、同樣的交付標準，就像我對待其他設計師一樣。我以為這是公平，但我忘了一件事：<strong>公平不是給所有人一樣的東西，而是給每個人他們真正需要的東西。</strong></p>

    <p>我用一視同仁的方式對待她，但我忽略了<strong>她的起點和其他人不同，她面對的難度也不一樣。</strong></p>

    <h2>那份排程，是我給她的一個調整</h2>

    <p>我決定重新規劃她的工作方式。</p>

    <p>首先，我給她每個任務更多的時間，大約比原本多一週，讓她不需要一直在追趕的壓力下工作。其次，我請她把 UI 和 UX 拆開來做。</p>

    <p>我要求她<strong>先畫 Wireframe</strong>，黑白、簡單就好，不需要處理任何視覺。這個階段只有一個任務：想清楚架構、操作邏輯，以及不同裝置斷點下的呈現方式。Wireframe 畫完，先開會過稿、修改確認，<strong>再進入 UI、處理視覺。</strong></p>

    <p>這份排程，就是這樣產生的。每個模組分開列，標記 Wireframe 和 UI 的時間區間，並且插入幾個固定的會議節點，作為確認進度的檢查點。</p>

    <img src="/portfolio/images/articles/equal-treatment-trap/img-1.png" alt="為設計師重新規劃的 Design Schedule，包含 Wireframe 與 UI 兩個階段" />

    <h2>她開始不一樣了</h2>

    <p>這個新的工作方式跑起來之後，一切順多了。</p>

    <p>她不再糾結於視覺，因為 Wireframe 階段根本沒有視覺的工作；她也不再畫了一半才發現架構有問題，因為在進入 UI 之前，架構已經被確認過了。</p>

    <p>她說：「這樣分確實清楚多了」。<strong>我幫她看清了自己的盲點，用一個適合她的方式重新安排工作，反而讓她成長得更快</strong>，甚至發生一件令我意想不到的事。</p>

    <p>在 Wireframe 階段，她開始主動提出兩版不同的 UX 操作方式供我選擇，每一版都有她自己的設計邏輯與考量，這件事在之前從未發生過。</p>

    <p>那個瞬間，我才意識到：<strong>她一直都有設計思考的能力，只是之前的工作方式，讓她沒有空間把它發揮出來。</strong></p>

    <h2>我後來想清楚的事</h2>

    <p>如果要說這件事讓我最大的收穫是什麼，不是「我幫她解決了問題」，而是<strong>我更清楚看到自己身為主管的責任邊界在哪裡。</strong></p>

    <p>我在這件事上表現出來的，不是很厲害的管理技巧，而是一些其實很基本、但我差點忽略的事：<strong>用心聽她說了什麼、理解她的處境而不是急著評判、在專案時程允許的範圍內，找到一個對她和對專案都說得過去的平衡點。</strong></p>

    <p>溝通也是。她在那場對話裡是帶著情緒的，有點自我懷疑、有點疲憊，也有點不確定我會怎麼反應。我沒有急著給建議，而是先讓她說完，讓她知道我理解她的難處，然後我們才一起想怎麼走下去。</p>

    <p>但我也很自責，我應該更早介入的。</p>

    <p>如果一開始就把 Wireframe 和 UI 分開，讓她先打穩架構再進視覺，後來補設計債、重做元件、處理一致性問題的時間，可能可以省下很多。投機取巧，最終還是要還的，只是換了個時間點、換了個代價。</p>

    <blockquote>一視同仁，是一種很容易讓主管安心的幻覺。它讓我覺得自己很公平，卻讓我忘了去看，每個人站在不同的起點上，需要的其實不一樣。</blockquote>

    <p>我現在會更常問自己：我給的是「對大家都一樣的東西」，還是<strong>「這個人現在真正需要的東西」</strong>？這兩個問題，聽起來很像，但答案差很遠。</p>
  `},{id:"design-team-okr-performance-system",title:"當 KPI 無法衡量設計師：我如何為設計部打造一套 OKR 績效系統",description:"我發現公司的 KPI 制度無法真正衡量設計師的工作表現，所以我決定主動做出改變。這篇文章記錄了我從發現問題、提案、到實際落地一整套 OKR 績效系統的完整歷程。",cover:"/images/articles/design-team-okr-performance-system/cover.png",hashtags:["績效制度設計","行為指標量化","管理成本優化"],tags:["設計團隊管理心得","帶團隊的方法論"],date:"2026-01-31",content:`
    <p>在我進入這間公司之後，我發現了一個現象：每半年一次的績效考核，只是大家填完表格、主管約談走個流程，然後就結束了。沒有人真的知道，這半年「做得好」的標準是什麼；而「做得不夠好」的地方，也很少有人說得清楚。</p>

    <p><strong>KPI 像是「先射箭再畫靶」，考核時間到了，大家才開始回想這半年做了什麼。</strong>而設計師的工作，用量化指標來衡量本來就已經很困難，加上公司缺乏數據基礎、設計任務五花八門，原本的 KPI 框架幾乎無從下手。</p>

    <p>但讓我真正決定要做點什麼的，源自於我的人資經驗，我見識過良好績效制度的強大，深知績效考核做得好，可以讓一個團隊脫胎換骨；做得不好，只是每半年讓人填一次無意義的表格。</p>

    <h2>KPI 為什麼衡量不了設計師？</h2>

    <p>帶著這個想法，我開始大量研究設計師績效考核的方法。網路上的討論幾乎都指向同一個結論：<strong>KPI 很難衡量設計師的工作表現</strong>。用退件次數？這取決於需求方的喜好和設計師的人緣，不夠科學；用圖層數量？這太荒謬了，驗收時難道要一個一個數？</p>

    <p>更何況，我們公司的設計師什麼都要做，從平面設計、Landing Page、UIUX、網頁切版，到識別設計，任務五花八門，KPI 列下來可能幾十項。更何況公司沒有穩定的數據收集機制，又如 Landing Page 的轉換率根本無法公平比較，有的設計師可能整個半年都沒接到相關需求，這類數據根本不存在。</p>

    <p>這些問題讓我意識到，<strong>與其硬要把設計工作指標塞進一個不適合的框架，不如重新設計一套真正能反映設計師行為的評估方式。</strong></p>

    <blockquote>真正有效的績效指標，不是「能不能量化」，而是「量化的東西有沒有意義」。</blockquote>

    <h2>在不推翻制度的前提下，找到破口</h2>

    <p>我很快想到了 Google 廣泛使用的 OKR。<strong>OKR 強調的是「行為指標」，而不是數字達成率，這似乎更適合創意型工作的評估方式。</strong>但我面臨了一個現實限制：公司有既有的績效制度，我不能直接用 OKR 取代 KPI。</p>

    <p>這個限制，反而讓我想出了一個更有趣的做法：<strong>在不影響公司績效規範的前提下，讓每月的 OKR 能夠回應每半年的 KPI</strong>。兩套制度不是對立的，而是讓 OKR 補足 KPI 做不到的事：<strong>更短的評核週期、更具體的目標、更高的員工參與度</strong>。</p>

    <p>我把方案整理成一份提案簡報，主動找大主管報告。他的第一句話是：「這是我進來這間公司後，一直想做但一直沒空做的事。」<strong>那一刻，我知道方向對了。</strong></p>

    <img src="/portfolio/images/articles/design-team-okr-performance-system/img-1.png" alt="在不影響公司績效規範的前提下，讓每月的 OKR 能夠回應每半年的 KPI" />

    <h2>設計一套真正適合設計師的行為指標</h2>

    <p>提案通過之後，才是真正困難的開始。<strong>我把整套績效框架拆成五個維度</strong>，比重設計上也精確對應人資規範的 4~6 項要求：</p>

    <div class="ad-callout">
      <div class="ad-callout__item">
        <span class="ad-callout__title">工作表現（80%）</span>
        <p>任務如期交付率（30%）、設計品質與細節（30%）、充分考慮使用者體驗（20%）</p>
      </div>
      <div class="ad-callout__item">
        <span class="ad-callout__title">團隊貢獻與個人成長（20%）</span>
        <p>有效幫助團隊合作與學習（10%）、突破自我技能持續成長（10%）</p>
      </div>
    </div>

    <img src="/portfolio/images/articles/design-team-okr-performance-system/img-2.png" alt="公司 KPI 指標對應設計團隊 OKR" />

    <p><strong>最頭痛的部分，是「設計品質與細節」以及「充分考慮使用者體驗」的行為指標要怎麼設定。</strong>我們的設計師會接到的任務類型差異極大，平面設計、Landing Page、介面設計、網頁切版、識別設計，每種任務的驗收邏輯完全不同。</p>

    <p>於是<strong>我把這兩個大指標，再依照真實會接到的設計專案，細拆成五個子類別，並針對每種設計任務的特性，特別設計對應的行為指標。</strong>在這個過程中，我還特地與設計師們開會，共識出每種任務合理的製作時間與品質標準，確保指標的公平性是建立在大家都認可的基礎上。</p>

    <p>OKR 的評分採用「紅綠燈」制度，我參考官方框架將分數區間設定為：紅燈（0.0~0.3）、黃燈（0.4~0.6）、綠燈（0.7~1.0），以 0.7 作為基礎達標線，再依每個 KR 的特性細緻調整對應的行為描述與分數。</p>

    <!-- OKR 範本 -->
    <a
      href="https://www.notion.so/f643e29e7e9941a88332a3f9b80e17e4?v=7fba55f9267c49a4b81c38e9e39c1310&source=copy_link"
      target="_blank"
      style="display: inline-block; margin-top: 8px; padding: 10px 24px; background: linear-gradient(135deg, #6C63FF, #3ECFCF); color: #fff; border-radius: 8px; font-weight: bold; text-decoration: none; letter-spacing: 0.05em;">
      → 查看初版 OKR 績效指標
    </a>

    <h2>誰來填、誰來評？一個管理成本的設計決策</h2>

    <p><strong>每個月，我會為每位設計師建立一份專屬的 Google Sheet 試算表，並開放彼此的編輯權限。</strong>我主要負責評分「設計品質與細節」和「充分考慮使用者體驗」這兩個主觀性較高的項目；設計師則負責自填「任務如期交付率」、「有效幫助團隊合作與學習」、「突破自我技能持續成長」的相關行為紀錄。</p>

    <p>這個分工不是偶然的。我原本想全部自己填，但只要一忙起來，評分就會隨著時間延長而有偏誤。後來我意識到，可以客觀追溯的部分，例如：「交付時間可以從 Slack 或 Jira 工單查到；團隊貢獻與個人進修的行為，表單中也都可以直接記錄」，這些部分交給設計師自填，既釋放了我的管理成本，也讓他們更有自主性，更有意識地了解到：<strong>自己每一個日常行為，都與績效有直接關係。</strong></p>

    <blockquote>讓人自己記錄自己的行為，本身就是一種讓人變得更自覺的管理設計。</blockquote>

    <h2>系統上線後，混亂消失了</h2>

    <p>這套系統在 2025 年 1 月正式上線。除了 OKR 表格之外，我<strong>同步搭配 Google Calendar，為每位設計師建立一個專屬的工作行事曆，將每個人手上的任務時程視覺化</strong>，並讓設計師們彼此共享。這樣不只<strong>能清楚看到每位設計師當前的設計能量投入在哪個專案上，在遇到急件插隊時，我也能更合理地調配任務分配，而不是憑感覺或靠記憶。</strong></p>

    <p>系統上線初期，設計師們都愣住了，表示資訊量太大、一下子無法吸收。但實際執行之後，每個人都給予了正面的回饋。<strong>他們說：「以前那種混亂、緊張的工作氛圍真的消失了」</strong>；他們可以非常有系統、有邏輯地知道自己該做什麼，能更好地安排自己的工作節奏，也降低了許多工作中的不確定性與意外事件帶來的不安全感。</p>

    <p>更重要的是，<strong>有了明確的行為指標，每個人都用相同的標準被評量，沒有不公平、沒有黑箱，只有實力與努力。</strong>他們告訴我，這樣的運作方式讓他們更願意為公司、為團隊、也為自己的成長而賣力。</p>

    <img src="/portfolio/images/articles/design-team-okr-performance-system/img-3.png" alt="運用 Google Calendar 將專案時程視覺化" />

    <h2>跑了一年，我學到的事</h2>

    <p>當然，這套系統並不完美。有些指標在實際執行時才發現根本難以落地，例如：「網頁切版的 Code Review，我後期根本沒有時間逐一審查；有些外部需求因為老闆給不出明確方向，設計師必須『通靈』，相關的修改次數指標幾乎失去了評分意義」。跑了一年，我深刻體會到：<strong>績效指標不是設計完就結束的，它需要隨著團隊的真實狀況持續迭代調整</strong>。</p>

    <p>但回頭看，這一年多的驗證讓我更加確信一件事：<strong>績效指標設計得好，真的能省下大量的管理成本</strong>。當每個人都清楚知道「好的標準是什麼」，他們就不需要等主管提醒，自然會朝著目標前進；當每個人的努力都被看見，整個團隊的氛圍也會變得更有秩序、更有動力。</p>

    <p>如果你正在帶一個團隊，或者正準備建立屬於自己部門的績效制度，我真心建議：<strong>不要把「績效管理」當成一件行政作業，而是把它當成一個設計題目來面對</strong>。因為<strong>當你認真思考「什麼樣的行為值得被鼓勵」，你其實已經在定義這個團隊的文化了。</strong></p>
  `},{id:"team-feedback-letter",title:"我用 360 度評核，給團隊夥伴寄了一封信",description:"當了主管之後，我報名了一堂管理課，不是因為不會，而是想驗證自己走的路是否正確。這篇文章關於我如何用 360 度評核的概念，做了一件讓整個團隊都沒預料到的事。",cover:"/images/articles/team-feedback-letter/cover.png",hashtags:["360度回饋機制","匿名問卷設計","團隊正向文化"],tags:["設計團隊管理心得","帶團隊的方法論"],date:"2025-07-25",content:`
    <p>當了主管之後，我報名了一堂管理課。</p>

    <p>不是因為不會，而是想驗證我這一年多來在公司裡帶團隊的方式，到底是不是走在正確的道路上。那堂課是勞動力發展署補助的「企業主管團隊管理實務班」，每個週日上整整一天，從六月上到七月。這已經是我第二次上這位老師的課了，第一次是還在做人資的時候，當時收穫了許多職場真實案例與實務處理方法。正因為如此，當了主管的我又回來了。</p>

    <h2>360 度評核，吸引我的不是工具本身</h2>

    <p>課程中複習到績效管理，老師介紹了 KPI、OKR、360 度評核幾種方式，她說 360 度評核雖然理想，但實際操作困難，能做到兩到三個維度已經很不錯了。</p>

    <p>但吸引我的不是這個工具有多完整，而是它剛好解決了一個我心裡藏很久的問題：<strong>我在夥伴眼中，是個怎麼樣的主管？</strong></p>

    <p>我們團隊關係很好，平常什麼都聊，但關係越好，有些話反而越難直說。不是大家不真誠，而是人之常情，當彼此太熟悉，讚美容易被當成客套，批評又怕傷感情，真實的回饋就這樣卡在中間說不出口。</p>

    <blockquote>360 度評核給了我一個引子，讓我可以用一個有點正式、但又不太正式的方式，問出那些平常問不到的答案。</blockquote>

    <h2>我做了一點小小的改變</h2>

    <p>我在設計雙週會上和夥伴們分享了這個工具，也告訴她們我打算把它用在這次的半年績效考核中；但我沒有說的是，我偷偷改了它的用途。</p>

    <p>傳統的 360 度評核是為了績效打分數，但我設計的五個題目，目的只有一個：讓大家說出平常比較不好意思說的話。</p>

    <div class="ad-callout">
      <div class="ad-callout__item">
        <span class="ad-callout__title">問卷的五個題目</span>
        <ol>
          <li>在合作過程中，我欣賞你的一件事是……</li>
          <li>你讓我印象深刻的一個瞬間或貢獻是……</li>
          <li>我學到的一件事，來自於你……</li>
          <li>如果有一件事我能建議你繼續保持，那就是……</li>
          <li>如果你想要在未來更進一步，我會鼓勵你……</li>
        </ol>
      </div>
    </div>

    <p><strong>我在日常相處中觀察到，其實每個夥伴對自己的標準都很高，往往很清楚別人哪裡好，卻很少看到自己的優點。我希望這份問卷，能讓每個人得到一份「別人眼中的我」。</strong></p>

    <p>為了讓大家能放心說真話，我用 SurveyCake 做了匿名問卷，每個人一份，各自獨立。每位夥伴需要為其他三位填寫，填寫時間是兩週。紙本我也考慮過，但筆跡辨識度太高，匿名就破功了。</p>

    <h2>她們不知道的是，我還有一個計畫</h2>

    <p>問卷收回來之後，我把每個人收到的所有回饋整理起來，重新排版，設計成一封信的形式。每個人的信，我都選了一個我心中對她的印象主題色，彩色列印、裝進信封。</p>

    <p>在 7 月 25 日的設計雙週會，我把信封帶來了，還有四個從樓下路易莎買來的小蛋糕。</p>

    <p>大家一開始都愣住了，她們覺得好精緻、好有儀式感，信封都還沒拆，大家就紛紛拿出手機拍照，然後我們拍了一張合照，紀念這個時刻。</p>

    <img src="/portfolio/images/articles/team-feedback-letter/img-1.png" alt="設計團隊收到信封的合照" />

    <h2>那封信，也有一封是寫給我的</h2>

    <p>我也收到了一封，夥伴們為我填了同一份問卷。</p>

    <p>說實話，在這之前，我一直覺得自己做得不夠好——帶團隊這件事，我沒有受過正統訓練，很多決定都是邊做邊想，不確定對不對。</p>

    <p>但看完那封信，我第一次比較清楚地知道，她們眼中的我是什麼樣子。</p>

    <blockquote>「無論周遭環境多混亂，你總是秉持冷靜、沉著的情緒，堅定解決眼前的議題，如同在亂流中穩穩駕駛的機長，穩固團隊核心。」</blockquote>

    <p>我沒想到她們這樣看我，我以為我只是在努力不讓事情失控，但<strong>在她們眼中，那叫做穩定、那叫做領導</strong>。這個落差，讓我重新思考了一件事：<strong>有時候，自己以為只是在努力撐著，但對團隊來說，那就是一種安全感的來源。</strong></p>

    <h2>讓我意外的，是那場雙週會</h2>

    <p>拆信之後，我們自發地做了一件事：<strong>大家以某位夥伴為主角，其他人輪流說出欣賞這位夥伴的地方，問她一些心路歷程，或者討教某個能力是怎麼培養的，然後換下一位。</strong></p>

    <p>那不是我事先設計的環節，但它自然發生了。</p>

    <p>我後來想，這可能才是這整件事最重要的結果。360 度評核給了一個結構，讓大家有個理由說出平常不會說的話，而當那些話被說出來，空間就不一樣了。</p>

    <blockquote>有時候，團隊需要的不是一個新工具，而是一個開口的理由。</blockquote>

    <h2>如果你也想試試看</h2>

    <p>這件事操作上不複雜，但有幾個細節我覺得值得注意。匿名是必要的，不只是為了保護填寫者，更是為了讓回饋的品質更真實。題目的設計要以正向為主，這不是要迴避批評，而是因為大多數團隊平常已經有太多批評了，反而缺少的是被看見的機會。最後，交付的方式很重要，信封和蛋糕聽起來很小，但儀式感決定了這件事在大家心中的重量。</p>

    <p>我是一個相信「設計不只是做介面」的人，<strong>帶團隊，也是一種需要用心設計的事。</strong></p>
  `},{id:"design-request-collaboration-guide",title:"當全公司都把設計師當通靈師，我決定立一條規矩",description:"設計師不是不夠專業，是需求方從來不知道怎麼給需求。這篇文章記錄了我如何從一張拖了一週才結案的 DM，決定用一份正式指南改變整個公司的設計協作文化。",cover:"/images/articles/design-request-collaboration-guide/cover.png",hashtags:["需求規格制度化","跨部門協作重建","設計資源保護"],tags:["帶團隊的方法論","專案決策過程"],date:"2025-06-01",content:`
    <p>有一段時間，設計部幾乎每個禮拜都有「急件」。</p>

    <p>不是公司的業務真的那麼緊迫，而是需求方在最後一刻才想到設計這件事，然後拿著「很急，明天就要」這句話，要求設計師排開手上所有案子、優先處理。</p>

    <p>我後來意識到，<strong>這不是個人素質的問題，而是一個系統性的漏洞</strong>：整個公司沒有人告訴大家，設計需求應該怎麼給、需要哪些資訊、設計師需要多少時間。在這個框架不存在的情況下，一切都靠設計師自己吸收。</p>

    <h2>從 UIUX 團隊，到全公司的設計部</h2>

    <p><strong>2023 年 3 月，設計部成立時，我們接收到的定位很清楚：隸屬於研發資訊處，主力是數位產品的 UIUX 設計</strong>，偶爾協助行銷 Landing Page、活動 Banner 或海報、產品包裝...等平面設計需求，是可接受的範圍。</p>

    <p>但大約<strong>在 2024 年下半年，一切開始改變，設計部從研發底下獨立出來，升格為全公司的設計部。</strong>需求的來源更多，類型更雜：線下活動主視覺、活動輸出物、展場帳篷設計、遊樂設施列車外觀、IP 人物三視圖、Unity 3D 環境美術、各種場合的簡報製作......幾乎什麼都有。</p>

    <p>知道這個消息時，我是憂喜參半的：設計部能見度變高、代表成長空間變大；但隱約也知道，這會帶來很多我們還沒準備好的東西。</p>

    <p>果然，隨著需求量增加，問題也跟著浮現：<strong>需求往往經過很多手傳遞，資訊在每一層都被稀釋，最後落到設計師手上時，幾乎什麼都沒有。</strong>最讓我印象深刻的，是公司與產品 Logo 的重新設計案：老闆說要重做，但品牌新方向是什麼、期待什麼風格、想傳遞什麼感覺，層層問下去都問不出答案，得到的只有「你們先自由發揮，出三版再說」。那個案子從 2025 年初啟動，到我寫這篇文章為止，我們已經做了快 12 款 Logo，還沒結案。</p>

    <h2>那一張拖了一週的 DM</h2>

    <p>真正讓我決定要做些什麼的，是 2025 年 2 月發生的一件事。</p>

    <p>公司一位直屬董事長的特助，給了設計部一個「做一張線下活動 DM」的需求，我們按照流程，確認了主標、副標、活動內容，簡單確認了風格方向，然後讓設計師開工。</p>

    <p>四個小時後，他發來一批額外的活動文案說要加進去，並附上幾張解析度極低、明顯是截圖自其他文宣的圖片，要求放到設計稿裡。那些新需求，直接讓設計師前面做的排版全部廢掉，從頭來過。</p>

    <p>交出初稿之後，他又說要加上主辦單位、協辦單位、聯絡人等附屬資訊，並要求更換某幾張圖片，同時再次修改活動文案。</p>

    <p>一張原本一天內就能完成的 DM，最後拖了超過一週才結案。而且從一開始，他就說「很急，明天要用」，設計師為此排開其他專案插隊處理，結果換來的是一次又一次的需求異動。</p>

    <p>身為主管的我，無法接受的不是需求本身的修改，而是<strong>這種工作方式在拖累整個設計部的工作量能，也在扯公司的後腿。</strong></p>

    <h2>對比：同一個時期，另一個「很急」的案子</h2>

    <p>幾乎就在同一段時間，行銷部發來一個需求：一週內完成一份 20 頁的產品介紹文宣。</p>

    <p>但他們給需求的方式完全不同，他們用一份 Google Slide 把每一頁的文案、風格期待、排版參考、視覺方向，完完整整全部整理好，一次交給設計部。我當時派了兩位設計師，一人負責 10 頁並行推進，結果不只準時完成，還提前一天交付。</p>

    <p>同樣的「很急」，差這麼多。<strong>問題出在哪裡，不言而喻。</strong></p>

    <blockquote>設計師的速度，從來不是瓶頸；需求是否清楚，才是問題根本。</blockquote>

    <h2>先嘗試溝通，但效果有限</h2>

    <p>其實在做指南之前，我已經嘗試過直接溝通。我用委婉謙讓的方式，讓需求方了解設計師作業的難處，也把行銷部那套有效的發需求方式，分享給其他部門參考，希望他們可以跟著做。</p>

    <p>但效果有限，口頭說說，隔一個案子又回到原點。我慢慢意識到，<strong>這件事需要被提升到「內部規範」的層次</strong>，才會被真正重視，才有機會改變整個協作文化。</p>

    <h2>把「好的協作方式」變成一份正式文件</h2>

    <p>我花了一段時間，把設計部對需求方的期待，整理成一份<strong>《設計需求提交合作指南》</strong>。</p>

    <img src="/portfolio/images/articles/design-request-collaboration-guide/img-1.png" alt="設計需求提交合作指南" />

    <p>裡面包含幾個核心內容：<strong>需求提交的完整流程</strong>（從開 Jira 工單、到設計執行、到發稿結案）、<strong>各項設計的基本工時</strong>（讓大家在發需求前先考量時程，降低急件頻率）、以及一份詳細的<strong>「發需求注意事項」</strong>，說明設計需求應包含哪些資訊，需求背景、設計尺寸、期待風格、最終文案、圖片素材、期待交期，缺一不可，並用真實案例說明「這樣做」和「那樣做」的差別。</p>

    <p>為了讓大家更有感，我在指南裡放了兩個真實案例的截圖對比：一個是需求方用手繪稿標注文案位置與風格期待的小卡需求，另一個是用 Google Slide 拆頁標注的 DM 需求。有了這些範本，「怎樣算是給清楚了」就不再是抽象的要求。</p>

    <img src="/portfolio/images/articles/design-request-collaboration-guide/img-2.png" alt="設計需求提交優良範例 - 小卡" />

    <img src="/portfolio/images/articles/design-request-collaboration-guide/img-3.png" alt="設計需求提交優良範例 - DM" />

    <p>指南用 Canva 製作，輸出成 PDF，上傳到公司的 NAS 雲端公槽，在主管會議上正式發布。各單位主管的反應都是正面的，總經理室也表示支持。</p>

    <h2>那位特助，後來怎麼了？</h2>

    <p>指南發布後，我在後續幾次與特助的協作中，態度比過去更堅定：除非需求確認完整，否則設計師不開工，因為手上還有其他案子在進行。這個立場，我說了幾次，他後來真的開始在發需求前整理好資訊，溝通也順了很多。</p>

    <p>這件事讓我體會到，有時候<strong>「建立規範」和「堅持執行」必須同時存在</strong>。光有規範，沒有人認真執行，文件只是一張廢紙；光靠個別溝通，沒有制度支撐，每次都要重新拉鋸。兩件事要一起做，才有效。</p>

    <h2>幾個月後，設計師說：焦慮變少了</h2>

    <p>指南上線後，變化是慢慢發生的。</p>

    <p>2025 年下半年，設計師們開始反映，急件變少了。<strong>各單位在開 Jira 工單前，會先來找我討論需求的組成，確認還缺什麼資訊，甚至開始嘗試理解設計師的語言，問我「需求這樣給，設計師方便作業嗎？」。</strong></p>

    <p>讓我印象最深的，是助理後來的轉變。有一次特助又帶著一個不完整的董事長需求過來，助理主動擋在前面，協助進一步釐清需求細節，確認齊全之後才轉發給設計部。這個動作不是我要求的，是她自己做的。</p>

    <p>那一刻，我知道這件事真的有效了。<strong>不只是流程改變了，是整個公司對設計協作的認知在慢慢改變。</strong></p>

    <blockquote>你無法要求每個人都懂設計，但你可以讓每個人知道，設計師需要什麼。</blockquote>

    <h2>設計部的資源，值得被認真保護</h2>

    <p>回頭看這件事，我覺得它的意義不只是「讓流程順了」。</p>

    <p>更深的層次，是<strong>設計部的工作資源第一次被放在一個正式的框架裡被討論、被尊重。</strong>設計師的時間、精力、注意力，是有限的；如果這些資源被不完整的需求、臨時的異動、以及隨意插隊的急件一點一點消耗掉，最終損失的不只是效率，而是設計師對工作的熱情。</p>

    <p>我相信，一個讓設計師能夠好好工作的環境，才是持續產出好設計的前提。而這份指南，就是我用來保護這個環境的方式。</p>
  `},{id:"uiux-designer-competency-map",title:"當設計師問我「我該往哪裡走」，我決定親手畫一張地圖",description:"設計師不是能力不夠，而是從來沒有人告訴他們，自己站在哪裡？一個半路出家的設計主管，如何用人資背景為團隊建立職能模型，讓成長這件事變得有憑有據。",cover:"/images/articles/uiux-designer-competency-map/cover.png",hashtags:["職能模型建立","能力可視化","人資思維跨界應用"],tags:["個人成長反思","帶團隊的方法論"],date:"2025-03-15",content:`
    <p>在我升任設計主管後的第二次績效考核，大概是 2024 年底，我和每一位設計師都問了同一個問題：</p>

    <blockquote>「你對未來的職涯規劃是什麼？」</blockquote>

    <p>有人回答得很篤定做了這麼多類型的設計任務，最有熱情的是 UIUX 與識別設計，未來就往這兩個方向走；有人說做平面設計做久了，很確定自己想轉往數位產品領域發展。但也有人沉默了一下，然後說：「我看到大家都有自己擅長的領域，很羨慕⋯⋯但我不知道自己該往哪裡發展，也不知道怎麼進步。」</p>

    <p>那句話讓我停住了。</p>

    <p>不是因為這位設計師能力不好，而是恰恰相反。在我的觀察裡，她的能力遠比她自己認知的還要紮實。<strong>問題不在於「不夠好」，而在於她沒有一張地圖，不知道自己站在哪裡。</strong></p>

    <p>進一步深談之後，我發現這不是個案。<strong>幾乎所有人都有同樣的困惑：「對自己的專業能力處於哪個階段，沒有明確的概念」。</strong>設計師普遍謙虛，容易低估自己，但謙虛背後，其實藏著一種真實的迷茫。</p>

    <h2>這個問題，其實早就存在了</h2>

    <p>這樣的困惑，並不是在績效面談那天才浮出水面的，而是在日常工作的交流與相處中，慢慢累積出來的線索。</p>

    <p>我們設計部的夥伴們背景各不相同：有人天生對平面美感敏銳，有人擅長拆解使用者邏輯，有人在切版與動效上如魚得水。這種差異讓大家既好奇彼此，也在工作中互相請益。而<strong>每當有人問起「你這個能力是怎麼學來的？」的背後，隱藏的其實是另一個更深的問題：「我到底要怎麼學，才能像你一樣？」</strong></p>

    <p>部門裡的關係一直都很好，大家會聊過去的成長歷程，也會聊對未來的想像。而<strong>身為主管，我很在意夥伴能否在工作中得到真正的成長與價值感</strong>，所以在分派任務時，我會考量：<strong>「這個任務對這位夥伴來說，有沒有成長的空間？」</strong></p>

    <p>但即便如此，我仍然意識到一件事：光是「給對的任務」，還不夠。夥伴們需要的，是一個能讓他們看清自己能力落點、知道下一步該往哪裡走的參照框架。</p>

    <h2>我有人資背景，這一次它成了關鍵</h2>

    <p>我是半路出家的設計師，在進入設計這個領域之前，有一段人資的工作背景。很多時候，這段經歷讓我覺得自己在設計的世界裡格格不入，但這一次，它成了最重要的底氣。</p>

    <p>我幾乎是在看見問題的同時，就想到了解法：結合人資在績效考核中常用的「<strong>行為錨定評定量表</strong>（Behaviorally Anchored Rating Scales，BARS）」，以及職涯發展中廣泛使用的「<strong>職能模型</strong>（Competency Model）」，將兩者融合，打造一份專屬於我們公司設計師的職涯發展工具。</p>

    <p>我給它取了一個名字：<strong>《UIUX 設計師職涯發展階梯》</strong>。</p>

    <img src="/portfolio/images/articles/uiux-designer-competency-map/img-1.png" alt="UIUX 設計師職涯發展階梯" />

    <h2>做出這份東西，比我想像的難很多</h2>

    <p>說起來容易，做起來是另一回事。</p>

    <p>為了讓這份職能模型真正貼近我們公司的實際工作內容，<strong>我翻閱了大量的網路資料，跨領域參考不同職業、不同產業的職能框架</strong>，交叉比對之後，再逐一融入公司對設計師的期待與真實的任務情境，才慢慢拼出這份屬於我們的版本。</p>

    <p><strong>其中最痛苦的部分，是 Medium Designer 與 Senior Designer 這兩個層級的撰寫。</strong>因為當時的我，入行大約只有一年多快兩年，說白了，我還是個 Junior，我憑什麼定義一個資深設計師應該具備什麼樣的能力與影響力？</p>

    <p>但好在，這是一個資訊容易取得的時代，也是 AI 協作的時代。<strong>我大量研究、廣泛搜集，積極運用 AI 討論與修正，並把草稿拿給我最信任的前設計主管過目</strong>，因為她是我當時認識的人當中，最資深的設計師。她給了我很大的肯定，沒有提出什麼修改意見。我不確定這代表我做得夠嚴謹，還是她相信我、決定放手讓我去做，但不管哪一種，對那個階段的我來說，都是很重要的支撐。</p>

    <h2>為什麼我覺得這件事值得做</h2>

    <p>這份職能模型的核心，是兩個層次的目的。</p>

    <div class="ad-callout">
      <div class="ad-callout__item">
        <span class="ad-callout__title">對設計師個人來說</span>
        <p>它是一張清晰的地圖，讓每個人知道自己現在在哪、還差什麼、可以往哪個方向努力。<strong>設計師不再只能憑感覺衡量自己的進步，而是有具體的能力描述可以對照。</strong></p>
      </div>
      <div class="ad-callout__item">
        <span class="ad-callout__title">對組織而言</span>
        <p>它讓「能力晉升」這件事有了憑據。在這份職能模型建立之前，設計師的能力到底到了哪個層級、薪資是否應該調整，往往是主觀判斷、說不清楚。<strong>有了這套架構，未來無論是能力晉升的評估，還是薪資談判的依據，都有一個客觀、透明、可被討論的標準可以參照。</strong>這對設計師是公平的，對公司的人才管理也是一種制度的建立。</p>
      </div>
    </div>

    <blockquote>我等於是在幫公司梳理一套原本不存在的制度，而這件事，是我主動發起的。</blockquote>

    <h2>夥伴們的反應，讓我覺得一切都值得</h2>

    <p>這份職能模型完成之後，我正式在團隊內分享說明。夥伴們的反應讓我印象很深，大家像是拿到一份心理測驗一樣，逐條勾選符合自己現況的能力描述，邊看邊討論。</p>

    <p>有人說：「原來我已經到這個程度了，比我以為的還要高。」有人說：「這一欄我還差得遠，但至少現在知道要補什麼了。」更多人說，<strong>這份東西很大程度地幫助他們釐清了職涯方向，讓迷茫有了一個具體的出口。</strong></p>

    <p>後來，我也把這份職能模型整合進 <strong><a href="https://mudi0710.github.io/portfolio/#/leadership/design-team-okr-performance-system" target="_blank">OKR</a></strong> 的 Google Sheet 中，作為「突破自我技能持續成長」這個個人成長指標的自我評核補充資料，讓每一次的績效回顧都能與職涯發展連結在一起。</p>

    <h2>那些沒有白費的歷練</h2>

    <p>做完這件事之後，我有一種很深的感受。</p>

    <p>我一直覺得自己是個「半路出家的設計師」，過去的人資經歷、那些在不同領域積累的工作經驗，在設計的世界裡有時候反而像是一種負擔，讓我覺得自己少走了很多該走的路。</p>

    <p>但這一次，我才真正意識到<strong>那些經歷，一點都沒有白費</strong>。它們早已悄悄內化成我看待問題的方式、解決問題的直覺、以及在關鍵時刻讓我知道該往哪裡走的底氣。每一段看似繞路的歷程，都在為此刻的我提供養分。</p>

    <p>而那份為了夥伴們親手畫出來的地圖，也讓我更確定：<strong>我很願意為了團隊的成長，持續做這樣的事</strong>。</p>

    <blockquote>好的主管不一定是走最直的路來的，但一定是那個願意把走過的彎路，變成讓別人少走彎路的地圖的人。</blockquote>
  `},{id:"impossible-deadline-two-weeks",title:"我們如何在兩週內，完成一個不可能的任務",description:"老闆踩死的 deadline、PM 規劃一個月才丟來的需求，但最後設計部不只準時交付，還讓我看見一件更重要的事：真正讓任務得以完成的力量，早在這個專案之前就已經存在了。",cover:"/images/articles/impossible-deadline-two-weeks/cover.png",hashtags:["任務拆解與同步推進","自主分工設計","長期信任感積累"],tags:["帶團隊的方法論","專案決策過程"],date:"2025-02-24",content:`
    <p>2025 年 2 月 11 日，一場普通的主管會議，PM 宣布了一件不普通的事。</p>
 
    <p>老闆要求在「星空未來國際學校」的產品裡，新增一套「金幣機制」：讓幼童在各星球學習時累積星星幣，作為驅動學習的獎勵系統。需求本身不複雜，但後面那句話讓我和研發部主管同時傻眼：</p>
 
    <blockquote>「老闆要求 2 月 24 日要看到可以在 Web 上直接操作的功能。UI 設計、切版、功能，全部要到位。而且，還要動態效果！」</blockquote>
 
    <p><strong>距離 2 月 24 日只剩兩週，而這個需求，PM 已經規劃了一個多月。</strong></p>
 
    <h2>我們試著爭取，但沒有成功</h2>
 
    <p>當場，我和研發部主管都試圖爭取更長的時間，大家手上都有進行中的專案，deadline 一個接著一個，兩週內從零完成設計到功能上線，幾乎不可能。</p>
 
    <p>但 PM 說：「老闆踩得很硬，沒有退路。」</p>
 
    <p>說實話，那個當下我心裡很不舒服，一個月才規劃出來的需求，丟給兩個部門要求兩週內完成。<strong>但抱怨解決不了問題，當天下班回家，我把情緒放下，開始想怎麼做。</strong></p>
 
    <h2>先把任務拆開，再讓時間重疊</h2>
 
    <p>我把這個任務拆成四個獨立的工作包：</p>
 
    <ul>
      <li><strong>UI 設計稿 & UX 流程：</strong>首頁調整、金星與木星的新介面、獲幣與寶箱彈窗設計</li>
      <li><strong>靜態素材設計：</strong>金幣、寶箱（開／關／滿）、獎勵彈窗圖片</li>
      <li><strong>WebView 切版：</strong>靜態 UI 實作、動態效果、防呆機制</li>
      <li><strong>動態素材製作：</strong>金幣旋轉、寶箱顫抖、寶箱開啟動畫（.lottie 檔）</li>
    </ul>
 
    <p>四個工作包，剛好對應設計部四位夥伴。但更重要的是，我打破了以往線性接力的作業方式，讓各工作同步推進：UI 設計從 2/13(四) 開始，靜態素材與切版從 2/14(五) 同時跟上，動圖製作從 2/17(一) 並行，讓設計部在 2/19(三) 前完成所有交付，把 2/20(四) 到 2/24(一) 完整留給研發部。</p>
 
    <img src="/portfolio/images/articles/impossible-deadline-two-weeks/img-1.png" alt="金幣機制專案時程規劃甘特圖" />
 
    <h2>我做了一個和平常不一樣的決定</h2>
 
    <p>隔天，我召集四位夥伴開會，說明這個緊急專案。而手上原有的案子，在大主管同意下暫時往後移。</p>
 
    <p>任務分好了，我心裡也有最理想的人員分配：讓最擅長的人做最擅長的事，這是最安全的選擇。但就在那個當下，我決定不這樣做。</p>
 
    <blockquote>我把四個工作包攤開，說：「你們來選。」</blockquote>
 
    <p>一方面，前陣子大家一直重複做自己最擅長的事，難免會覺得疲乏；另一方面，我想說，<strong>也許這個高壓的時間點，反而是個讓人成長的機會。</strong></p>
 
    <p>我沒說出心裡的分配，就讓他們選了。</p>
 
    <h2>結果，我完全沒料到</h2>
 
    <p>UIUX 經驗最少的 Aimee，第一個舉手，選了 UI 設計；</p>
 
    <p>Grace 想起 Aimee 之前做的 IP 人物 Lottie 動畫，說她想試試從來沒碰過的動圖製作；</p>
 
    <p>平面視覺不是 Claudia 的強項，但她果斷選了靜態素材設計；</p>
 
    <p>Daniel 最擅長切版，但這次的 WebView 動態效果是他沒嘗試過的，他說：「我想挑戰。」</p>
 
    <p><strong>四個人，全部選了自己最不擅長的任務，沒有一個人選了自己的舒適圈。</strong></p>
 
    <div class="ad-callout">
      <div class="ad-callout__item">
        <span class="ad-callout__title">我當下的感受</span>
        <p>不是擔心，而是感動。他們敢這樣選，是因為知道身邊有彼此可以互相幫助。</p>
      </div>
    </div>
 
    <p>更讓我意外的是後來發生的事：<strong>Aimee 接下 UI 設計之後，竟然自發地扮演起小 PM 的角色，主動向其他三位提需求，說她需要什麼素材、什麼格式、什麼時間點交付，把大家往同一個目標帶。</strong></p>
 
    <p>這個角色，完全不在我的計畫裡，是她自己長出來的。</p>
 
    <h2>我們準時交付了，但這不是最重要的事</h2>
 
    <p>設計部在 2/19(三) 完成所有交付，研發部從 2/20(四) 接手，2/24(一) 如期上線。那個當初看起來不可能的任務，我們做到了。</p>
 
    <p>但事後我一直在想，讓這一切得以發生的關鍵，到底是什麼？</p>
 
    <p>不是那份時程表，不是讓他們自己選任務，這些都是工具。<strong>真正的關鍵，是一個更早就存在的東西。</strong></p>
 
    <img src="/portfolio/images/articles/impossible-deadline-two-weeks/img-2.png" alt="UI - 金幣機制" />

    <img src="/portfolio/images/articles/impossible-deadline-two-weeks/img-3.png" alt="UI - 金幣機制規則說明" />

    <img src="/portfolio/images/articles/impossible-deadline-two-weeks/img-4.png" alt="Lottie 動態分鏡 - 01" />

    <img src="/portfolio/images/articles/impossible-deadline-two-weeks/img-5.png" alt="Lottie 動態分鏡 - 02" />

    <img src="/portfolio/images/articles/impossible-deadline-two-weeks/img-6.png" alt="Lottie 動態分鏡 - 03" />

    <img src="/portfolio/images/articles/impossible-deadline-two-weeks/img-7.png" alt="Lottie 動態分鏡 - 04" />

    <h2>種子，早就種下了</h2>
 
    <p><strong>我們設計部每兩週辦一次「設計雙週會」</strong>，時間是每個隔週週五上午 10 點到 12 點半。<strong>我們會在雙週會上分享設計新知、個人生活、職涯方向、專案回顧，偶爾也吐吐苦水，是每個人都很珍惜的時間。</strong></p>
 
    <p>而這個會議某部分的形式，其實是我還沒當上主管時就開始推動的。當時我做完 <strong><a href="https://mudi0710.github.io/portfolio/#/projects/bd-portal-demo-report" target="_blank">Demo Report</a></strong> 專案，主動整理了一份回顧簡報，找前設計主管說我想在雙週會上分享。分享完之後，我提了一個期待：<strong>「希望大家都可以在這裡分享自己的專案歷程，讓彼此知道對方做了什麼、遇到什麼瓶頸、有什麼洞察。我們每個人背景都不一樣，有設計本科、有財金系、有心理系、有當過人資的，這樣互相學習，成長速度會更快。」</strong></p>
 
    <p>後來，大家真的開始這樣做了。每個專案結束，夥伴們會自動整理一份簡報來分享。</p>
 
    <p>等我當上主管，我把這個會議視為必須堅持的事，就算有臨時狀況，我也會把它延期或提前補上，不讓它消失。</p>
 
    <blockquote>我沒想到，這個長期堅持的習慣，會在最緊繃的時刻變成我最強的後援。</blockquote>
 
    <p>正是因為我們在雙週會上深度認識彼此，<strong>大家才知道誰擅長什麼、在哪裡卡關可以找誰求助</strong>；正是因為這個安全感，他們才<strong>敢在最緊繃的時刻選擇挑戰自己</strong>；正是因為這份信任，Aimee 才能自然地站出來扛起協調的角色，而不需要我指派。</p>
 
    <h2>管理這件事，很多時候是在種樹</h2>
 
    <p>那兩週，我做了很多事：拆解任務、規劃時程、協調跨部門節奏，但讓任務真正完成的力量，不是這些。</p>
 
    <p>是一個每兩週辦一次、看起來只是聊天分享的會議。是一群願意在最難的時候選擇成長而不是安全的夥伴。是一種<strong>「你不會的，我來教你；我卡住了，你來幫我」</strong>的默契。</p>
 
    <p>這些東西，不是在緊急時刻長出來的，是平常，一點一點積累的。</p>
 
    <p>我何德何能，有這樣一群夥伴。</p>
  `}],gu={class:"leadership-page"},mu={class:"leadership-hero section"},vu={class:"container leadership-hero__inner"},bu={class:"leadership-hero__right"},yu={class:"leadership-hero__filters"},Su=["onClick"],Au={class:"leadership-list section"},wu={class:"container"},Eu={class:"leadership-list__grid"},Cu={key:0,class:"leadership-list__empty"},xu={__name:"Leadership",setup(e){const t=["All",...new Set(Ot.flatMap(i=>i.tags))],s=Ie("All"),n=ve(()=>s.value==="All"?Ot:Ot.filter(i=>i.tags.includes(s.value)));return(i,o)=>(D(),L("div",gu,[u("section",mu,[u("div",vu,[o[1]||(o[1]=u("div",{class:"leadership-hero__left"},[u("p",{class:"leadership-hero__label"},"My Thoughts"),u("h1",{class:"leadership-hero__title"},"Leadership"),u("p",{class:"leadership-hero__desc"}," 記錄我在設計管理路上真實發生的事：那些摸索過的方法論、踩過的決策、帶人時的觀察，以及在過程中慢慢長出來的反思。 ")],-1)),u("div",bu,[o[0]||(o[0]=u("p",{class:"leadership-hero__filter-label"},"Filter by",-1)),u("div",yu,[(D(),L(Y,null,me(t,l=>u("button",{key:l,class:we(["leadership-hero__filter",{"leadership-hero__filter--active":s.value===l}]),onClick:r=>s.value=l},q(l),11,Su)),64))])])])]),u("section",Au,[u("div",wu,[u("div",Eu,[(D(!0),L(Y,null,me(n.value,l=>(D(),Ze(hu,{key:l.id,article:l},null,8,["article"]))),128))]),n.value.length===0?(D(),L("p",Cu," 目前沒有符合此分類的文章。 ")):ze("",!0)])])]))}},Iu={key:0,class:"article-detail"},Pu={class:"article-detail-hero section"},Ru={class:"container"},Tu={class:"article-detail-hero__hashtags"},ku={class:"article-detail-hero__title"},ju={class:"article-detail-hero__desc"},Du={class:"article-detail-hero__date"},Ou={class:"article-detail-cover"},Mu={class:"container"},$u=["src","alt"],Uu={class:"article-detail-content section"},Lu={class:"container article-detail-content__layout"},Nu=["innerHTML"],Bu={class:"article-toc-sidebar"},Fu={class:"article-toc-sidebar__toc"},Hu={class:"article-toc-sidebar__list"},Vu=["onClick"],Ku={class:"article-toc-float__panel"},Wu={class:"article-toc-float__list"},qu=["onClick"],Gu={class:"article-detail-nav section"},Xu={class:"container"},zu={class:"article-detail-nav__inner"},Ju={class:"article-detail-nav__arrows"},Qu={class:"article-detail-nav__arrow-title"},Yu={class:"article-detail-nav__arrow-title"},Zu={key:1,class:"article-detail-notfound section"},ef={class:"container"},tf={__name:"ArticleDetail",setup(e){const t=ai(),s=ve(()=>Ot.find(m=>m.id===t.params.id)),n=ve(()=>Ot.findIndex(m=>m.id===t.params.id)),i=ve(()=>n.value>0?Ot[n.value-1]:null),o=ve(()=>n.value<Ot.length-1?Ot[n.value+1]:null),l=Ie([]),r=Ie(""),a=Ie(null),d=Ie(!1),c=()=>{if(!a.value)return;const m=a.value.querySelectorAll("h2, h3");l.value=Array.from(m).map((b,v)=>{const C=`article-heading-${v}`;return b.id=C,{id:C,text:b.textContent,level:b.tagName}})},f=()=>{if(!a.value)return;const m=a.value.querySelectorAll("h2, h3");let b="";m.forEach(v=>{v.getBoundingClientRect().top<=350&&(b=v.id)}),r.value=b},h=m=>{const b=document.getElementById(m);b&&b.scrollIntoView({behavior:"smooth",block:"start"})};return It(()=>{is(()=>{c(),window.addEventListener("scroll",f)})}),rs(()=>{window.removeEventListener("scroll",f)}),qt(s,()=>{is(()=>c())}),(m,b)=>{const v=ln("RouterLink");return s.value?(D(),L("div",Iu,[u("section",Pu,[u("div",Ru,[X(v,{to:"/leadership",class:"article-detail-hero__back"},{default:pe(()=>[...b[1]||(b[1]=[ce("← 返回 Leadership",-1)])]),_:1}),u("div",Tu,[(D(!0),L(Y,null,me(s.value.hashtags,C=>(D(),L("span",{key:C,class:"article-detail-hero__hashtag"},"#"+q(C),1))),128))]),u("h1",ku,q(s.value.title),1),u("p",ju,q(s.value.description),1),u("p",Du,q(s.value.date),1)])]),u("div",Ou,[u("div",Mu,[u("img",{src:ue(Ge)(s.value.cover),alt:s.value.title,class:"article-detail-cover__img"},null,8,$u)])]),u("section",Uu,[u("div",Lu,[u("div",{class:"article-detail-content__body",ref_key:"contentRef",ref:a,innerHTML:s.value.content},null,8,Nu),u("aside",Bu,[u("div",Fu,[b[2]||(b[2]=u("p",{class:"article-toc-sidebar__title"},"目錄",-1)),u("ul",Hu,[(D(!0),L(Y,null,me(l.value,C=>(D(),L("li",{key:C.id,class:we(["article-toc-sidebar__item",{"article-toc-sidebar__item--h3":C.level==="H3"}])},[u("a",{onClick:Xs(I=>h(C.id),["prevent"]),href:"#",class:we(["article-toc-sidebar__link",{"article-toc-sidebar__link--active":r.value===C.id}])},q(C.text),11,Vu)],2))),128))])]),b[3]||(b[3]=ft('<div class="article-toc-sidebar__contact"><p class="article-toc-sidebar__contact-title">Contact</p><div class="article-toc-sidebar__contact-links"><a href="mailto:nomis820710@gmail.com" class="article-toc-sidebar__contact-link"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> nomis820710@gmail.com </a><a href="https://www.linkedin.com/in/nomis-yang/" target="_blank" rel="noopener noreferrer" class="article-toc-sidebar__contact-link"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn ↗ </a></div></div>',1))])])]),u("div",{class:we(["article-toc-float",{"article-toc-float--open":d.value}])},[u("button",{class:"article-toc-float__toggle",onClick:b[0]||(b[0]=C=>d.value=!d.value),"aria-label":"目錄"},[...b[4]||(b[4]=[u("i",{class:"fa-solid fa-list"},null,-1)])]),u("div",Ku,[b[5]||(b[5]=u("p",{class:"article-toc-float__title"},"目錄",-1)),u("ul",Wu,[(D(!0),L(Y,null,me(l.value,C=>(D(),L("li",{key:C.id,class:we({"article-toc-float__item--h3":C.level==="H3"})},[u("a",{onClick:Xs(I=>{h(C.id),d.value=!1},["prevent"]),href:"#"},q(C.text),9,qu)],2))),128))])])],2),u("section",Gu,[u("div",Xu,[u("div",zu,[X(v,{to:"/leadership",class:"btn btn--secondary article-detail-nav__back"},{default:pe(()=>[...b[6]||(b[6]=[ce(" ← 查看所有文章 ",-1)])]),_:1}),u("div",Ju,[i.value?(D(),Ze(v,{key:0,to:`/leadership/${i.value.id}`,class:"article-detail-nav__arrow"},{default:pe(()=>[b[7]||(b[7]=u("span",{class:"article-detail-nav__arrow-dir"},"← 上一篇",-1)),u("span",Qu,q(i.value.title),1)]),_:1},8,["to"])):ze("",!0),o.value?(D(),Ze(v,{key:1,to:`/leadership/${o.value.id}`,class:"article-detail-nav__arrow article-detail-nav__arrow--next"},{default:pe(()=>[b[8]||(b[8]=u("span",{class:"article-detail-nav__arrow-dir"},"下一篇 →",-1)),u("span",Yu,q(o.value.title),1)]),_:1},8,["to"])):ze("",!0)])])])])])):(D(),L("div",Zu,[u("div",ef,[b[10]||(b[10]=u("h1",null,"找不到此文章",-1)),X(v,{to:"/leadership",class:"btn btn--primary"},{default:pe(()=>[...b[9]||(b[9]=[ce("返回 Leadership",-1)])]),_:1})])]))}}},sf={__name:"StoryCanvas",setup(e){const t=Ie(null);let s=null;return It(()=>{const n=t.value,i=n.getContext("2d"),o=()=>{n.width=n.offsetWidth,n.height=n.offsetHeight};o(),window.addEventListener("resize",o);const l=2e3,r=800,a=()=>({x:(Math.random()-.5)*2,y:(Math.random()-.5)*2,z:Math.random()*r,pz:null}),d=Array.from({length:l},a);d.forEach(h=>{h.pz=h.z});const c=1.5,f=()=>{const h=n.width,m=n.height,b=h/2,v=m/2;i.fillStyle="rgba(10, 14, 26, 0.25)",i.fillRect(0,0,h,m),d.forEach(C=>{if(C.pz=C.z,C.z-=c,C.z<=1){Object.assign(C,a()),C.pz=C.z;return}const I=r/C.z,R=b+C.x*I*(h/2),U=v+C.y*I*(m/2),O=r/C.pz,G=b+C.x*O*(h/2),te=v+C.y*O*(m/2),Q=1-C.z/r,Ce=Math.pow(Q,1.5),V=Math.max(.3,Q*2.2),z=i.createLinearGradient(G,te,R,U);if(z.addColorStop(0,"rgba(100,160,255,0)"),z.addColorStop(1,`rgba(200,225,255,${Ce*.95})`),i.beginPath(),i.moveTo(G,te),i.lineTo(R,U),i.strokeStyle=z,i.lineWidth=V,i.lineCap="round",i.stroke(),Q>.6){const re=(Q-.6)/.4;i.beginPath(),i.arc(R,U,V*1.2,0,Math.PI*2),i.fillStyle=`rgba(220,235,255,${re*.9})`,i.fill()}}),s=requestAnimationFrame(f)};rs(()=>{cancelAnimationFrame(s),window.removeEventListener("resize",o)}),f()}),(n,i)=>(D(),L("canvas",{ref_key:"canvasRef",ref:t,class:"story-canvas"},null,512))}},nf=pi(sf,[["__scopeId","data-v-3f74bc40"]]),of={class:"about-page"},lf={class:"about-hero section"},rf={class:"container about-hero__inner"},af={class:"about-hero__image"},cf=["src"],pf={class:"about-experience section"},df={class:"container"},uf={class:"about-experience__list"},ff={class:"about-experience__left"},_f={class:"about-experience__period"},hf={class:"about-experience__right"},gf={class:"about-experience__role"},mf={class:"about-experience__company"},vf=["innerHTML"],bf={key:0,class:"about-experience__highlights"},yf=["innerHTML"],Sf={class:"about-story section"},Af={class:"container"},wf={class:"about-story__timeline"},Ef={class:"about-story__image"},Cf=["src","alt"],xf={class:"about-story__content"},If={class:"about-story__period"},Pf={class:"about-story__role"},Rf={class:"about-story__tags"},Tf=["innerHTML"],kf={class:"about-extras section"},jf={class:"container"},Df={class:"about-extras__grid"},Of={class:"about-extras__image"},Mf=["src","alt"],$f={class:"about-extras__content"},Uf={class:"about-extras__name"},Lf={class:"about-extras__icon"},Nf={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},Bf={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},Ff={key:2,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},Hf=["innerHTML"],Vf={__name:"About",setup(e){const t=[{period:"2024.06 - 現在",role:"設計主管",company:"三貝德數位文創股份有限公司",desc:"帶領設計團隊，負責公司多項 B2B、B2C 教育產品（Web、App、AI 應用）的體驗品質、設計策略與跨部門協作，並主導設計系統建立與流程制度化。",highlights:["團隊管理與人才培育：建立 <strong>OKR 績效系統</strong>、UIUX 職涯發展階梯與 1:1 教練式輔導機制，系統化提升團隊產能與個人成長路徑。","產品體驗統籌：主導多項 Web / App 數位產品的使用者體驗品質，以數據驅動推動體驗優化，<strong>AI 學習目標改版後客服需求降低 80%</strong>。","設計系統與流程制度化：建置公司級 <strong>Design System</strong>，並制定跨部門協作規範，標準化設計交付流程。","跨部門協作：在嚴峻時程下<strong>統籌多線並行</strong>的設計任務，與產品、工程、測試團隊建立高效協作模式。"]},{period:"2023.03 - 2024.05",role:"UIUX 設計師",company:"三貝德數位文創股份有限公司",desc:"負責平台教育產品的 UI/UX 設計、前端切版與教材流程優化，打造一致且可延展的產品體驗。",highlights:["產品設計：<strong>獨立主導多項功能從 0 到 1</strong> 的完整設計流程，涵蓋 UX 研究、資訊架構、UI 設計與 Prototype，並透過使用者訪談與數據分析驅動設計決策。","前端切版：Vue.js 環境支援切版、RWD 與 API 串接，<strong>自研 SCSS 工具提升開發效率</strong>，並建立 EPUB 量產系統將手工排版轉為半自動化流程。","跨職能協作：在 PM 資源不足的情況下<strong>獨立承擔前期研究到交付的全流程</strong>，並跨部門推動設計規格落地。"]}],s=[{period:"2016 - 2017",title:"主管特別助理",image:Ge("/images/general/story/story-1.jpg"),tags:["跨部門協作","多線並行","方向感建立","利害關係人溝通"],desc:"在六星集擔任總經理特別助理，每天的工作是把老闆的行程、跨部門的需求、商務會議與大型活動全部兜在一起。這段經歷讓我第一次真實體會到<strong>「在不確定的情況下讓事情發生」</strong>是什麼感覺。我學會了如何在多條線並行時保持清醒、如何在沒有完整資訊下做出判斷。這兩件事後來不只成了我在設計專案裡最常用的底層能力，<strong>也讓我在帶團隊時，能在混亂中給出清楚的方向，讓每個人知道自己該做什麼、為什麼這樣做。</strong>"},{period:"2017 - 2019",title:"行政會計專員",image:Ge("/images/general/story/story-2.jpg"),tags:["系統性思維","制度建立","資訊架構"],desc:"在伊甸社會福利基金會負責財會、人事與政府專案申請，同時管理超過 1,000 件中心財產。這份工作教會我一件事：<strong>複雜的資訊必須被整理成有結構的系統，才能被追蹤、被執行、被傳承。</strong>這個觀念後來直接影響了我設計資訊架構的方式，<strong>也成了我建立 OKR 績效制度、Design System 和設計需求協作規範的底層思維</strong>——讓團隊的運作不再靠記憶和感覺，而是有制度可以依循。"},{period:"2019 - 2020",title:"專案管理師",image:Ge("/images/general/story/story-3.jpg"),tags:["商業目標理解","說服力","利害關係人溝通"],desc:"在鉅微管理顧問負責超過 40 家企業客戶的年度專案，每一個客戶都有不同的產業背景、不同的內部問題、不同的決策者。這段經歷讓我學會<strong>在短時間內理解對方真正的需求、找到讓他們願意買單的語言</strong>，並把方案包裝成讓人信服的提案。這個能力後來讓我在做設計提案時，能同時說服老闆、工程師和業務，<strong>讓設計決策不只被理解，而是被真正支持。</strong>"},{period:"2020 - 2021",title:"人資專員・培訓專員",image:Ge("/images/general/story/story-4.jpg"),tags:["人才培育","知識拆解","同理心"],desc:"在啟諾科技從人資做到培訓，取得 <strong>TTT（Train the Trainer）企業內部講師資格</strong>後，自行開發並主講《有效提升溝通力》課程，滿意度達 5/5 滿分。這段經歷讓我真正理解：要讓別人「學會」一件事，<strong>必須先把複雜的知識拆解成對方能吸收的結構。</strong>這個能力後來幫助我設計更清晰的使用者引導流程，也讓我在帶設計師時，<strong>能把抽象的設計原則轉化成具體可執行的行動，這正是人才培育最核心的事。</strong>"}],n=[{icon:"film",image:"/images/general/extras/extras-1.jpg",name:"職場劇迷",desc:"《穿著 Prada 的惡魔》、《高年級實習生》、《正青春》、《歡樂頌》......我的片單大多是職場劇。比起純粹娛樂，我更著迷於劇中人<strong>如何在壓力與博弈裡做決定、如何拿捏關係與界限</strong>。這些情節讓我對「人」的行為模式有更細膩的觀察，也悄悄影響了我處理<strong>利害關係人與跨部門協作</strong>的方式。"},{icon:"bike",image:"/images/general/extras/extras-2.jpg",name:"飛輪騎士",desc:"跟著教練一節一節加重阻力，不讓自己輕易找退路——飛輪對我來說不只是運動，更是一種<strong>和自己談判的過程</strong>。每次撐過那個最想放棄的瞬間，都會提醒我：真正的進步不在舒適區裡。這個習慣讓我<strong>在高壓的專案週期裡，依然能保持清醒和能量</strong>。"},{icon:"book",image:"/images/general/extras/extras-3.jpg",name:"心靈讀者",desc:"我偏愛心理與成長類的書，特別喜歡鄧惠文醫師的作品，她擅長把複雜的情感結構說得清晰又有溫度。閱讀對我來說是一種<strong>反射性思考</strong>的練習：把別人整理好的洞見，對照自己的經驗重新消化。這個習慣讓我更能<strong>理解使用者行為背後的心理動機</strong>，也讓我在設計決策時，不只看見功能，也看見情緒。"}];return(i,o)=>(D(),L("div",of,[u("section",lf,[u("div",rf,[o[0]||(o[0]=ft('<div class="about-hero__content"><p class="about-hero__label">About Me</p><h1 class="about-hero__title">嗨，我是 Nomis！</h1><p class="about-hero__desc"> 我是一位橫跨 <strong>UIUX 設計、前端切版與系統思維</strong>的複合型設計師。入行前做過人資、讀過社會心理、跑過企業培訓，這些跨領域的歷程不是繞路，而是讓我在每一個設計決策裡，都能同時看見使用者、團隊與商業三個層面。 </p><p class="about-hero__desc"> 在三貝德擔任設計師期間，我能在資源不足的情況下獨立推進：PM 缺席時獨立完成從 UX 研究到前端切版的全流程；工具不夠用時自己研發 SCSS 工具、建立 EPUB 量產系統。<strong>我相信設計師最大的競爭力，不是工具用得多熟，而是在限制裡找到更多可能與更聰明的解法。</strong></p><p class="about-hero__desc"> 我也把同樣的系統性思維延伸到更大的範疇：建立 OKR 績效系統、UIUX 職涯發展階梯、設計需求協作指南，<strong>讓團隊的運作不再靠感覺，而是有制度可以依循、有數據可以追蹤。</strong>這種「讓複雜的事情變得可被依循」的能力，是我目前最想持續深化的方向。 </p></div>',1)),u("div",af,[u("img",{src:ue(Ge)("/images/general/avatar.png"),alt:"Nomis",class:"about-hero__avatar"},null,8,cf)])])]),u("section",pf,[u("div",df,[o[1]||(o[1]=u("h2",{class:"about-experience__title"},"工作經驗",-1)),u("div",uf,[(D(),L(Y,null,me(t,l=>u("div",{key:l.company+l.role,class:"about-experience__item"},[u("div",ff,[u("p",_f,q(l.period),1)]),u("div",hf,[u("h3",gf,q(l.role),1),u("p",mf,q(l.company),1),u("p",{class:"about-experience__desc",innerHTML:l.desc},null,8,vf),l.highlights?(D(),L("ul",bf,[(D(!0),L(Y,null,me(l.highlights,r=>(D(),L("li",{key:r,innerHTML:r},null,8,yf))),128))])):ze("",!0)])])),64))]),o[2]||(o[2]=u("div",{class:"about-experience__footer"},[u("a",{href:"https://www.linkedin.com/in/nomis-yang/",target:"_blank",rel:"noopener noreferrer",class:"btn btn--ghost"}," 在 LinkedIn 查看完整經歷 ↗ ")],-1))])]),u("section",Sf,[X(nf),u("div",Af,[o[3]||(o[3]=u("p",{class:"about-story__label"},"My Story",-1)),o[4]||(o[4]=u("h2",{class:"about-story__title"},[ce("那些看似無關的工作，"),u("br"),ce("如何一步步讓我成為 UIUX 設計師與設計主管")],-1)),o[5]||(o[5]=u("p",{class:"about-story__intro"},[ce(" 在成為 UIUX 設計師之前，我做過助理、跑過財會、管過人資、辦過企業培訓。"),u("br"),ce(" 這些看起來和設計毫無關係的工作，卻在我不知道的時候，悄悄建立了我最核心的設計能力。 ")],-1)),u("div",wf,[(D(),L(Y,null,me(s,l=>u("div",{class:"about-story__item",key:l.title},[u("div",Ef,[u("img",{src:l.image,alt:l.title},null,8,Cf)]),u("div",xf,[u("p",If,q(l.period),1),u("h3",Pf,q(l.title),1),u("div",Rf,[(D(!0),L(Y,null,me(l.tags,r=>(D(),L("span",{key:r,class:"about-story__tag"},q(r),1))),128))]),u("p",{class:"about-story__desc",innerHTML:l.desc},null,8,Tf)])])),64))])])]),u("section",kf,[u("div",jf,[o[9]||(o[9]=u("p",{class:"about-extras__label"},"Beyond Work",-1)),o[10]||(o[10]=u("h2",{class:"about-extras__title"},"設計之外，我還是⋯⋯",-1)),u("div",Df,[(D(),L(Y,null,me(n,l=>u("div",{key:l.name,class:"about-extras__card"},[u("div",Of,[u("img",{src:ue(Ge)(l.image),alt:l.name},null,8,Mf)]),u("div",$f,[u("h3",Uf,[u("span",Lf,[l.icon==="film"?(D(),L("svg",Nf,[...o[6]||(o[6]=[ft('<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',8)])])):ze("",!0),l.icon==="bike"?(D(),L("svg",Bf,[...o[7]||(o[7]=[ft('<circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="18.5" cy="17.5" r="3.5"></circle><path d="M15 6a1 1 0 0 0-1-1h-1"></path><path d="M8.5 17.5 12 10l2.5 4H8.5z" stroke-linejoin="round"></path><path d="m12 10 2-4h3"></path>',5)])])):ze("",!0),l.icon==="book"?(D(),L("svg",Ff,[...o[8]||(o[8]=[u("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},null,-1),u("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},null,-1)])])):ze("",!0)]),ce(" "+q(l.name),1)]),u("p",{class:"about-extras__desc",innerHTML:l.desc},null,8,Hf)])])),64))])])])]))}},Kf=wp({history:sp(),routes:[{path:"/",name:"home",component:pd},{path:"/projects",name:"projects",component:jd},{path:"/projects/:id",name:"project-detail",component:ru},{path:"/leadership",name:"leadership",component:xu},{path:"/leadership/:id",name:"article-detail",component:tf},{path:"/about",name:"about",component:Vf}],scrollBehavior(e,t,s){return s||{top:0}}}),Vl=hc(Lp);Vl.use(Kf);Vl.mount("#app");
