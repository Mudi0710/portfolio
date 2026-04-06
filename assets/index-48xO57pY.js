(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=s(i);fetch(i.href,l)}})();function kn(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const fe={},qt=[],rt=()=>{},pl=()=>!1,qs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Xs=e=>e.startsWith("onUpdate:"),ye=Object.assign,Hn=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Vr=Object.prototype.hasOwnProperty,ie=(e,t)=>Vr.call(e,t),k=Array.isArray,Xt=e=>ws(e)==="[object Map]",fl=e=>ws(e)==="[object Set]",pi=e=>ws(e)==="[object Date]",W=e=>typeof e=="function",he=e=>typeof e=="string",at=e=>typeof e=="symbol",re=e=>e!==null&&typeof e=="object",dl=e=>(re(e)||W(e))&&W(e.then)&&W(e.catch),hl=Object.prototype.toString,ws=e=>hl.call(e),Kr=e=>ws(e).slice(8,-1),_l=e=>ws(e)==="[object Object]",Vn=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ps=kn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zs=e=>{const t=Object.create(null);return(s=>t[s]||(t[s]=e(s)))},Wr=/-\w/g,Me=zs(e=>e.replace(Wr,t=>t.slice(1).toUpperCase())),Gr=/\B([A-Z])/g,Ft=zs(e=>e.replace(Gr,"-$1").toLowerCase()),Js=zs(e=>e.charAt(0).toUpperCase()+e.slice(1)),an=zs(e=>e?`on${Js(e)}`:""),lt=(e,t)=>!Object.is(e,t),cn=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},ml=(e,t,s,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:s})},qr=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Xr=e=>{const t=he(e)?Number(e):NaN;return isNaN(t)?e:t};let fi;const Qs=()=>fi||(fi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kn(e){if(k(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],i=he(n)?Yr(n):Kn(n);if(i)for(const l in i)t[l]=i[l]}return t}else if(he(e)||re(e))return e}const zr=/;(?![^(]*\))/g,Jr=/:([^]+)/,Qr=/\/\*[^]*?\*\//g;function Yr(e){const t={};return e.replace(Qr,"").split(zr).forEach(s=>{if(s){const n=s.split(Jr);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function ct(e){let t="";if(he(e))t=e;else if(k(e))for(let s=0;s<e.length;s++){const n=ct(e[s]);n&&(t+=n+" ")}else if(re(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const Zr="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eo=kn(Zr);function gl(e){return!!e||e===""}function to(e,t){if(e.length!==t.length)return!1;let s=!0;for(let n=0;s&&n<e.length;n++)s=Wn(e[n],t[n]);return s}function Wn(e,t){if(e===t)return!0;let s=pi(e),n=pi(t);if(s||n)return s&&n?e.getTime()===t.getTime():!1;if(s=at(e),n=at(t),s||n)return e===t;if(s=k(e),n=k(t),s||n)return s&&n?to(e,t):!1;if(s=re(e),n=re(t),s||n){if(!s||!n)return!1;const i=Object.keys(e).length,l=Object.keys(t).length;if(i!==l)return!1;for(const r in e){const o=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(o&&!a||!o&&a||!Wn(e[r],t[r]))return!1}}return String(e)===String(t)}const vl=e=>!!(e&&e.__v_isRef===!0),Z=e=>he(e)?e:e==null?"":k(e)||re(e)&&(e.toString===hl||!W(e.toString))?vl(e)?Z(e.value):JSON.stringify(e,bl,2):String(e),bl=(e,t)=>vl(t)?bl(e,t.value):Xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,i],l)=>(s[un(n,l)+" =>"]=i,s),{})}:fl(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>un(s))}:at(t)?un(t):re(t)&&!k(t)&&!_l(t)?String(t):t,un=(e,t="")=>{var s;return at(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};let De;class so{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=De,!t&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=De;try{return De=this,t()}finally{De=s}}}on(){++this._on===1&&(this.prevScope=De,De=this)}off(){this._on>0&&--this._on===0&&(De=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(this.effects.length=0,s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function no(){return De}let pe;const pn=new WeakSet;class yl{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,De&&De.active&&De.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pn.has(this)&&(pn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||El(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,di(this),xl(this);const t=pe,s=Ge;pe=this,Ge=!0;try{return this.fn()}finally{Cl(this),pe=t,Ge=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Xn(t);this.deps=this.depsTail=void 0,di(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Cn(this)&&this.run()}get dirty(){return Cn(this)}}let Al=0,fs,ds;function El(e,t=!1){if(e.flags|=8,t){e.next=ds,ds=e;return}e.next=fs,fs=e}function Gn(){Al++}function qn(){if(--Al>0)return;if(ds){let t=ds;for(ds=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;fs;){let t=fs;for(fs=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=s}}if(e)throw e}function xl(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Cl(e){let t,s=e.depsTail,n=s;for(;n;){const i=n.prevDep;n.version===-1?(n===s&&(s=i),Xn(n),io(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}e.deps=t,e.depsTail=s}function Cn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Sl(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Sl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ys)||(e.globalVersion=ys,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Cn(e))))return;e.flags|=2;const t=e.dep,s=pe,n=Ge;pe=e,Ge=!0;try{xl(e);const i=e.fn(e._value);(t.version===0||lt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{pe=s,Ge=n,Cl(e),e.flags&=-3}}function Xn(e,t=!1){const{dep:s,prevSub:n,nextSub:i}=e;if(n&&(n.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=n,e.nextSub=void 0),s.subs===e&&(s.subs=n,!n&&s.computed)){s.computed.flags&=-5;for(let l=s.computed.deps;l;l=l.nextDep)Xn(l,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function io(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let Ge=!0;const Il=[];function vt(){Il.push(Ge),Ge=!1}function bt(){const e=Il.pop();Ge=e===void 0?!0:e}function di(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=pe;pe=void 0;try{t()}finally{pe=s}}}let ys=0;class lo{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!pe||!Ge||pe===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==pe)s=this.activeLink=new lo(pe,this),pe.deps?(s.prevDep=pe.depsTail,pe.depsTail.nextDep=s,pe.depsTail=s):pe.deps=pe.depsTail=s,Pl(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const n=s.nextDep;n.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=n),s.prevDep=pe.depsTail,s.nextDep=void 0,pe.depsTail.nextDep=s,pe.depsTail=s,pe.deps===s&&(pe.deps=n)}return s}trigger(t){this.version++,ys++,this.notify(t)}notify(t){Gn();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{qn()}}}function Pl(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Pl(n)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const Sn=new WeakMap,Ut=Symbol(""),In=Symbol(""),As=Symbol("");function Se(e,t,s){if(Ge&&pe){let n=Sn.get(e);n||Sn.set(e,n=new Map);let i=n.get(s);i||(n.set(s,i=new zn),i.map=n,i.key=s),i.track()}}function mt(e,t,s,n,i,l){const r=Sn.get(e);if(!r){ys++;return}const o=a=>{a&&a.trigger()};if(Gn(),t==="clear")r.forEach(o);else{const a=k(e),f=a&&Vn(s);if(a&&s==="length"){const c=Number(n);r.forEach((u,h)=>{(h==="length"||h===As||!at(h)&&h>=c)&&o(u)})}else switch((s!==void 0||r.has(void 0))&&o(r.get(s)),f&&o(r.get(As)),t){case"add":a?f&&o(r.get("length")):(o(r.get(Ut)),Xt(e)&&o(r.get(In)));break;case"delete":a||(o(r.get(Ut)),Xt(e)&&o(r.get(In)));break;case"set":Xt(e)&&o(r.get(Ut));break}}qn()}function Vt(e){const t=ee(e);return t===e?t:(Se(t,"iterate",As),Ve(e)?t:t.map(qe))}function Ys(e){return Se(e=ee(e),"iterate",As),e}function nt(e,t){return yt(e)?Zt(Bt(e)?qe(t):t):qe(t)}const ro={__proto__:null,[Symbol.iterator](){return fn(this,Symbol.iterator,e=>nt(this,e))},concat(...e){return Vt(this).concat(...e.map(t=>k(t)?Vt(t):t))},entries(){return fn(this,"entries",e=>(e[1]=nt(this,e[1]),e))},every(e,t){return pt(this,"every",e,t,void 0,arguments)},filter(e,t){return pt(this,"filter",e,t,s=>s.map(n=>nt(this,n)),arguments)},find(e,t){return pt(this,"find",e,t,s=>nt(this,s),arguments)},findIndex(e,t){return pt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return pt(this,"findLast",e,t,s=>nt(this,s),arguments)},findLastIndex(e,t){return pt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return pt(this,"forEach",e,t,void 0,arguments)},includes(...e){return dn(this,"includes",e)},indexOf(...e){return dn(this,"indexOf",e)},join(e){return Vt(this).join(e)},lastIndexOf(...e){return dn(this,"lastIndexOf",e)},map(e,t){return pt(this,"map",e,t,void 0,arguments)},pop(){return rs(this,"pop")},push(...e){return rs(this,"push",e)},reduce(e,...t){return hi(this,"reduce",e,t)},reduceRight(e,...t){return hi(this,"reduceRight",e,t)},shift(){return rs(this,"shift")},some(e,t){return pt(this,"some",e,t,void 0,arguments)},splice(...e){return rs(this,"splice",e)},toReversed(){return Vt(this).toReversed()},toSorted(e){return Vt(this).toSorted(e)},toSpliced(...e){return Vt(this).toSpliced(...e)},unshift(...e){return rs(this,"unshift",e)},values(){return fn(this,"values",e=>nt(this,e))}};function fn(e,t,s){const n=Ys(e),i=n[t]();return n!==e&&!Ve(e)&&(i._next=i.next,i.next=()=>{const l=i._next();return l.done||(l.value=s(l.value)),l}),i}const oo=Array.prototype;function pt(e,t,s,n,i,l){const r=Ys(e),o=r!==e&&!Ve(e),a=r[t];if(a!==oo[t]){const u=a.apply(e,l);return o?qe(u):u}let f=s;r!==e&&(o?f=function(u,h){return s.call(this,nt(e,u),h,e)}:s.length>2&&(f=function(u,h){return s.call(this,u,h,e)}));const c=a.call(r,f,n);return o&&i?i(c):c}function hi(e,t,s,n){const i=Ys(e),l=i!==e&&!Ve(e);let r=s,o=!1;i!==e&&(l?(o=n.length===0,r=function(f,c,u){return o&&(o=!1,f=nt(e,f)),s.call(this,f,nt(e,c),u,e)}):s.length>3&&(r=function(f,c,u){return s.call(this,f,c,u,e)}));const a=i[t](r,...n);return o?nt(e,a):a}function dn(e,t,s){const n=ee(e);Se(n,"iterate",As);const i=n[t](...s);return(i===-1||i===!1)&&Yn(s[0])?(s[0]=ee(s[0]),n[t](...s)):i}function rs(e,t,s=[]){vt(),Gn();const n=ee(e)[t].apply(e,s);return qn(),bt(),n}const ao=kn("__proto__,__v_isRef,__isVue"),wl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(at));function co(e){at(e)||(e=String(e));const t=ee(this);return Se(t,"has",e),t.hasOwnProperty(e)}class Rl{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,n){if(s==="__v_skip")return t.__v_skip;const i=this._isReadonly,l=this._isShallow;if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return l;if(s==="__v_raw")return n===(i?l?yo:Ml:l?Ol:jl).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const r=k(t);if(!i){let a;if(r&&(a=ro[s]))return a;if(s==="hasOwnProperty")return co}const o=Reflect.get(t,s,Pe(t)?t:n);if((at(s)?wl.has(s):ao(s))||(i||Se(t,"get",s),l))return o;if(Pe(o)){const a=r&&Vn(s)?o:o.value;return i&&re(a)?wn(a):a}return re(o)?i?wn(o):Zs(o):o}}class Tl extends Rl{constructor(t=!1){super(!1,t)}set(t,s,n,i){let l=t[s];const r=k(t)&&Vn(s);if(!this._isShallow){const f=yt(l);if(!Ve(n)&&!yt(n)&&(l=ee(l),n=ee(n)),!r&&Pe(l)&&!Pe(n))return f||(l.value=n),!0}const o=r?Number(s)<t.length:ie(t,s),a=Reflect.set(t,s,n,Pe(t)?t:i);return t===ee(i)&&(o?lt(n,l)&&mt(t,"set",s,n):mt(t,"add",s,n)),a}deleteProperty(t,s){const n=ie(t,s);t[s];const i=Reflect.deleteProperty(t,s);return i&&n&&mt(t,"delete",s,void 0),i}has(t,s){const n=Reflect.has(t,s);return(!at(s)||!wl.has(s))&&Se(t,"has",s),n}ownKeys(t){return Se(t,"iterate",k(t)?"length":Ut),Reflect.ownKeys(t)}}class uo extends Rl{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const po=new Tl,fo=new uo,ho=new Tl(!0);const Pn=e=>e,js=e=>Reflect.getPrototypeOf(e);function _o(e,t,s){return function(...n){const i=this.__v_raw,l=ee(i),r=Xt(l),o=e==="entries"||e===Symbol.iterator&&r,a=e==="keys"&&r,f=i[e](...n),c=s?Pn:t?Zt:qe;return!t&&Se(l,"iterate",a?In:Ut),ye(Object.create(f),{next(){const{value:u,done:h}=f.next();return h?{value:u,done:h}:{value:o?[c(u[0]),c(u[1])]:c(u),done:h}}})}}function Os(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function mo(e,t){const s={get(i){const l=this.__v_raw,r=ee(l),o=ee(i);e||(lt(i,o)&&Se(r,"get",i),Se(r,"get",o));const{has:a}=js(r),f=t?Pn:e?Zt:qe;if(a.call(r,i))return f(l.get(i));if(a.call(r,o))return f(l.get(o));l!==r&&l.get(i)},get size(){const i=this.__v_raw;return!e&&Se(ee(i),"iterate",Ut),i.size},has(i){const l=this.__v_raw,r=ee(l),o=ee(i);return e||(lt(i,o)&&Se(r,"has",i),Se(r,"has",o)),i===o?l.has(i):l.has(i)||l.has(o)},forEach(i,l){const r=this,o=r.__v_raw,a=ee(o),f=t?Pn:e?Zt:qe;return!e&&Se(a,"iterate",Ut),o.forEach((c,u)=>i.call(l,f(c),f(u),r))}};return ye(s,e?{add:Os("add"),set:Os("set"),delete:Os("delete"),clear:Os("clear")}:{add(i){const l=ee(this),r=js(l),o=ee(i),a=!t&&!Ve(i)&&!yt(i)?o:i;return r.has.call(l,a)||lt(i,a)&&r.has.call(l,i)||lt(o,a)&&r.has.call(l,o)||(l.add(a),mt(l,"add",a,a)),this},set(i,l){!t&&!Ve(l)&&!yt(l)&&(l=ee(l));const r=ee(this),{has:o,get:a}=js(r);let f=o.call(r,i);f||(i=ee(i),f=o.call(r,i));const c=a.call(r,i);return r.set(i,l),f?lt(l,c)&&mt(r,"set",i,l):mt(r,"add",i,l),this},delete(i){const l=ee(this),{has:r,get:o}=js(l);let a=r.call(l,i);a||(i=ee(i),a=r.call(l,i)),o&&o.call(l,i);const f=l.delete(i);return a&&mt(l,"delete",i,void 0),f},clear(){const i=ee(this),l=i.size!==0,r=i.clear();return l&&mt(i,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(i=>{s[i]=_o(i,e,t)}),s}function Jn(e,t){const s=mo(e,t);return(n,i,l)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(ie(s,i)&&i in n?s:n,i,l)}const go={get:Jn(!1,!1)},vo={get:Jn(!1,!0)},bo={get:Jn(!0,!1)};const jl=new WeakMap,Ol=new WeakMap,Ml=new WeakMap,yo=new WeakMap;function Ao(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Eo(e){return e.__v_skip||!Object.isExtensible(e)?0:Ao(Kr(e))}function Zs(e){return yt(e)?e:Qn(e,!1,po,go,jl)}function $l(e){return Qn(e,!1,ho,vo,Ol)}function wn(e){return Qn(e,!0,fo,bo,Ml)}function Qn(e,t,s,n,i){if(!re(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=Eo(e);if(l===0)return e;const r=i.get(e);if(r)return r;const o=new Proxy(e,l===2?n:s);return i.set(e,o),o}function Bt(e){return yt(e)?Bt(e.__v_raw):!!(e&&e.__v_isReactive)}function yt(e){return!!(e&&e.__v_isReadonly)}function Ve(e){return!!(e&&e.__v_isShallow)}function Yn(e){return e?!!e.__v_raw:!1}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function xo(e){return!ie(e,"__v_skip")&&Object.isExtensible(e)&&ml(e,"__v_skip",!0),e}const qe=e=>re(e)?Zs(e):e,Zt=e=>re(e)?wn(e):e;function Pe(e){return e?e.__v_isRef===!0:!1}function Ke(e){return Nl(e,!1)}function Co(e){return Nl(e,!0)}function Nl(e,t){return Pe(e)?e:new So(e,t)}class So{constructor(t,s){this.dep=new zn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:ee(t),this._value=s?t:qe(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,n=this.__v_isShallow||Ve(t)||yt(t);t=n?t:ee(t),lt(t,s)&&(this._rawValue=t,this._value=n?t:qe(t),this.dep.trigger())}}function Ce(e){return Pe(e)?e.value:e}const Io={get:(e,t,s)=>t==="__v_raw"?e:Ce(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const i=e[t];return Pe(i)&&!Pe(s)?(i.value=s,!0):Reflect.set(e,t,s,n)}};function Dl(e){return Bt(e)?e:new Proxy(e,Io)}class Po{constructor(t,s,n){this.fn=t,this.setter=s,this._value=void 0,this.dep=new zn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ys-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&pe!==this)return El(this,!0),!0}get value(){const t=this.dep.track();return Sl(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function wo(e,t,s=!1){let n,i;return W(e)?n=e:(n=e.get,i=e.set),new Po(n,i,s)}const Ms={},Us=new WeakMap;let Nt;function Ro(e,t=!1,s=Nt){if(s){let n=Us.get(s);n||Us.set(s,n=[]),n.push(e)}}function To(e,t,s=fe){const{immediate:n,deep:i,once:l,scheduler:r,augmentJob:o,call:a}=s,f=j=>i?j:Ve(j)||i===!1||i===0?Pt(j,1):Pt(j);let c,u,h,_,I=!1,x=!1;if(Pe(e)?(u=()=>e.value,I=Ve(e)):Bt(e)?(u=()=>f(e),I=!0):k(e)?(x=!0,I=e.some(j=>Bt(j)||Ve(j)),u=()=>e.map(j=>{if(Pe(j))return j.value;if(Bt(j))return f(j);if(W(j))return a?a(j,2):j()})):W(e)?t?u=a?()=>a(e,2):e:u=()=>{if(h){vt();try{h()}finally{bt()}}const j=Nt;Nt=c;try{return a?a(e,3,[_]):e(_)}finally{Nt=j}}:u=rt,t&&i){const j=u,G=i===!0?1/0:i;u=()=>Pt(j(),G)}const M=no(),P=()=>{c.stop(),M&&M.active&&Hn(M.effects,c)};if(l&&t){const j=t;t=(...G)=>{j(...G),P()}}let C=x?new Array(e.length).fill(Ms):Ms;const $=j=>{if(!(!(c.flags&1)||!c.dirty&&!j))if(t){const G=c.run();if(i||I||(x?G.some((Q,J)=>lt(Q,C[J])):lt(G,C))){h&&h();const Q=Nt;Nt=c;try{const J=[G,C===Ms?void 0:x&&C[0]===Ms?[]:C,_];C=G,a?a(t,3,J):t(...J)}finally{Nt=Q}}}else c.run()};return o&&o($),c=new yl(u),c.scheduler=r?()=>r($,!1):$,_=j=>Ro(j,!1,c),h=c.onStop=()=>{const j=Us.get(c);if(j){if(a)a(j,4);else for(const G of j)G();Us.delete(c)}},t?n?$(!0):C=c.run():r?r($.bind(null,!0),!0):c.run(),P.pause=c.pause.bind(c),P.resume=c.resume.bind(c),P.stop=P,P}function Pt(e,t=1/0,s){if(t<=0||!re(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,Pe(e))Pt(e.value,t,s);else if(k(e))for(let n=0;n<e.length;n++)Pt(e[n],t,s);else if(fl(e)||Xt(e))e.forEach(n=>{Pt(n,t,s)});else if(_l(e)){for(const n in e)Pt(e[n],t,s);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Pt(e[n],t,s)}return e}function Rs(e,t,s,n){try{return n?e(...n):e()}catch(i){en(i,t,s)}}function Xe(e,t,s,n){if(W(e)){const i=Rs(e,t,s,n);return i&&dl(i)&&i.catch(l=>{en(l,t,s)}),i}if(k(e)){const i=[];for(let l=0;l<e.length;l++)i.push(Xe(e[l],t,s,n));return i}}function en(e,t,s,n=!0){const i=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||fe;if(t){let o=t.parent;const a=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${s}`;for(;o;){const c=o.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,a,f)===!1)return}o=o.parent}if(l){vt(),Rs(l,null,10,[e,a,f]),bt();return}}jo(e,s,i,n,r)}function jo(e,t,s,n=!0,i=!1){if(i)throw e;console.error(e)}const Te=[];let tt=-1;const zt=[];let St=null,Kt=0;const Ll=Promise.resolve();let Bs=null;function Fs(e){const t=Bs||Ll;return e?t.then(this?e.bind(this):e):t}function Oo(e){let t=tt+1,s=Te.length;for(;t<s;){const n=t+s>>>1,i=Te[n],l=Es(i);l<e||l===e&&i.flags&2?t=n+1:s=n}return t}function Zn(e){if(!(e.flags&1)){const t=Es(e),s=Te[Te.length-1];!s||!(e.flags&2)&&t>=Es(s)?Te.push(e):Te.splice(Oo(t),0,e),e.flags|=1,Ul()}}function Ul(){Bs||(Bs=Ll.then(Fl))}function Mo(e){k(e)?zt.push(...e):St&&e.id===-1?St.splice(Kt+1,0,e):e.flags&1||(zt.push(e),e.flags|=1),Ul()}function _i(e,t,s=tt+1){for(;s<Te.length;s++){const n=Te[s];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;Te.splice(s,1),s--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Bl(e){if(zt.length){const t=[...new Set(zt)].sort((s,n)=>Es(s)-Es(n));if(zt.length=0,St){St.push(...t);return}for(St=t,Kt=0;Kt<St.length;Kt++){const s=St[Kt];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}St=null,Kt=0}}const Es=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Fl(e){try{for(tt=0;tt<Te.length;tt++){const t=Te[tt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Rs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;tt<Te.length;tt++){const t=Te[tt];t&&(t.flags&=-2)}tt=-1,Te.length=0,Bl(),Bs=null,(Te.length||zt.length)&&Fl()}}let We=null,kl=null;function ks(e){const t=We;return We=e,kl=e&&e.type.__scopeId||null,t}function me(e,t=We,s){if(!t||e._n)return e;const n=(...i)=>{n._d&&Ks(-1);const l=ks(t);let r;try{r=e(...i)}finally{ks(l),n._d&&Ks(1)}return r};return n._n=!0,n._c=!0,n._d=!0,n}function jt(e,t,s,n){const i=e.dirs,l=t&&t.dirs;for(let r=0;r<i.length;r++){const o=i[r];l&&(o.oldValue=l[r].value);let a=o.dir[n];a&&(vt(),Xe(a,s,8,[e.el,o,e,t]),bt())}}function $s(e,t){if(Ie){let s=Ie.provides;const n=Ie.parent&&Ie.parent.provides;n===s&&(s=Ie.provides=Object.create(n)),s[e]=t}}function ot(e,t,s=!1){const n=xr();if(n||Qt){let i=Qt?Qt._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return s&&W(t)?t.call(n&&n.proxy):t}}const $o=Symbol.for("v-scx"),No=()=>ot($o);function Jt(e,t,s){return Hl(e,t,s)}function Hl(e,t,s=fe){const{immediate:n,deep:i,flush:l,once:r}=s,o=ye({},s),a=t&&n||!t&&l!=="post";let f;if(Ss){if(l==="sync"){const _=No();f=_.__watcherHandles||(_.__watcherHandles=[])}else if(!a){const _=()=>{};return _.stop=rt,_.resume=rt,_.pause=rt,_}}const c=Ie;o.call=(_,I,x)=>Xe(_,c,I,x);let u=!1;l==="post"?o.scheduler=_=>{Ne(_,c&&c.suspense)}:l!=="sync"&&(u=!0,o.scheduler=(_,I)=>{I?_():Zn(_)}),o.augmentJob=_=>{t&&(_.flags|=4),u&&(_.flags|=2,c&&(_.id=c.uid,_.i=c))};const h=To(e,t,o);return Ss&&(f?f.push(h):a&&h()),h}function Do(e,t,s){const n=this.proxy,i=he(e)?e.includes(".")?Vl(n,e):()=>n[e]:e.bind(n,n);let l;W(t)?l=t:(l=t.handler,s=t);const r=Ts(this),o=Hl(i,l.bind(n),s);return r(),o}function Vl(e,t){const s=t.split(".");return()=>{let n=e;for(let i=0;i<s.length&&n;i++)n=n[s[i]];return n}}const Lo=Symbol("_vte"),Kl=e=>e.__isTeleport,st=Symbol("_leaveCb"),os=Symbol("_enterCb");function Uo(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ss(()=>{e.isMounted=!0}),Zl(()=>{e.isUnmounting=!0}),e}const He=[Function,Array],Wl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:He,onEnter:He,onAfterEnter:He,onEnterCancelled:He,onBeforeLeave:He,onLeave:He,onAfterLeave:He,onLeaveCancelled:He,onBeforeAppear:He,onAppear:He,onAfterAppear:He,onAppearCancelled:He},Gl=e=>{const t=e.subTree;return t.component?Gl(t.component):t},Bo={name:"BaseTransition",props:Wl,setup(e,{slots:t}){const s=xr(),n=Uo();return()=>{const i=t.default&&zl(t.default(),!0);if(!i||!i.length)return;const l=ql(i),r=ee(e),{mode:o}=r;if(n.isLeaving)return hn(l);const a=mi(l);if(!a)return hn(l);let f=Rn(a,r,n,s,u=>f=u);a.type!==je&&xs(a,f);let c=s.subTree&&mi(s.subTree);if(c&&c.type!==je&&!Dt(c,a)&&Gl(s).type!==je){let u=Rn(c,r,n,s);if(xs(c,u),o==="out-in"&&a.type!==je)return n.isLeaving=!0,u.afterLeave=()=>{n.isLeaving=!1,s.job.flags&8||s.update(),delete u.afterLeave,c=void 0},hn(l);o==="in-out"&&a.type!==je?u.delayLeave=(h,_,I)=>{const x=Xl(n,c);x[String(c.key)]=c,h[st]=()=>{_(),h[st]=void 0,delete f.delayedLeave,c=void 0},f.delayedLeave=()=>{I(),delete f.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return l}}};function ql(e){let t=e[0];if(e.length>1){for(const s of e)if(s.type!==je){t=s;break}}return t}const Fo=Bo;function Xl(e,t){const{leavingVNodes:s}=e;let n=s.get(t.type);return n||(n=Object.create(null),s.set(t.type,n)),n}function Rn(e,t,s,n,i){const{appear:l,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:f,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:_,onAfterLeave:I,onLeaveCancelled:x,onBeforeAppear:M,onAppear:P,onAfterAppear:C,onAppearCancelled:$}=t,j=String(e.key),G=Xl(s,e),Q=(H,X)=>{H&&Xe(H,n,9,X)},J=(H,X)=>{const oe=X[1];Q(H,X),k(H)?H.every(N=>N.length<=1)&&oe():H.length<=1&&oe()},Ae={mode:r,persisted:o,beforeEnter(H){let X=a;if(!s.isMounted)if(l)X=M||a;else return;H[st]&&H[st](!0);const oe=G[j];oe&&Dt(e,oe)&&oe.el[st]&&oe.el[st](),Q(X,[H])},enter(H){if(G[j]===e)return;let X=f,oe=c,N=u;if(!s.isMounted)if(l)X=P||f,oe=C||c,N=$||u;else return;let te=!1;H[os]=Ue=>{te||(te=!0,Ue?Q(N,[H]):Q(oe,[H]),Ae.delayedLeave&&Ae.delayedLeave(),H[os]=void 0)};const Ee=H[os].bind(null,!1);X?J(X,[H,Ee]):Ee()},leave(H,X){const oe=String(e.key);if(H[os]&&H[os](!0),s.isUnmounting)return X();Q(h,[H]);let N=!1;H[st]=Ee=>{N||(N=!0,X(),Ee?Q(x,[H]):Q(I,[H]),H[st]=void 0,G[oe]===e&&delete G[oe])};const te=H[st].bind(null,!1);G[oe]=e,_?J(_,[H,te]):te()},clone(H){const X=Rn(H,t,s,n,i);return i&&i(X),X}};return Ae}function hn(e){if(tn(e))return e=Rt(e),e.children=null,e}function mi(e){if(!tn(e))return Kl(e.type)&&e.children?ql(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:s}=e;if(s){if(t&16)return s[0];if(t&32&&W(s.default))return s.default()}}function xs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,xs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function zl(e,t=!1,s){let n=[],i=0;for(let l=0;l<e.length;l++){let r=e[l];const o=s==null?r.key:String(s)+String(r.key!=null?r.key:l);r.type===le?(r.patchFlag&128&&i++,n=n.concat(zl(r.children,t,o))):(t||r.type!==je)&&n.push(o!=null?Rt(r,{key:o}):r)}if(i>1)for(let l=0;l<n.length;l++)n[l].patchFlag=-2;return n}function Jl(e,t){return W(e)?ye({name:e.name},t,{setup:e}):e}function Ql(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function gi(e,t){let s;return!!((s=Object.getOwnPropertyDescriptor(e,t))&&!s.configurable)}const Hs=new WeakMap;function hs(e,t,s,n,i=!1){if(k(e)){e.forEach((x,M)=>hs(x,t&&(k(t)?t[M]:t),s,n,i));return}if(_s(n)&&!i){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&hs(e,t,s,n.component.subTree);return}const l=n.shapeFlag&4?ni(n.component):n.el,r=i?null:l,{i:o,r:a}=e,f=t&&t.r,c=o.refs===fe?o.refs={}:o.refs,u=o.setupState,h=ee(u),_=u===fe?pl:x=>gi(c,x)?!1:ie(h,x),I=(x,M)=>!(M&&gi(c,M));if(f!=null&&f!==a){if(vi(t),he(f))c[f]=null,_(f)&&(u[f]=null);else if(Pe(f)){const x=t;I(f,x.k)&&(f.value=null),x.k&&(c[x.k]=null)}}if(W(a))Rs(a,o,12,[r,c]);else{const x=he(a),M=Pe(a);if(x||M){const P=()=>{if(e.f){const C=x?_(a)?u[a]:c[a]:I()||!e.k?a.value:c[e.k];if(i)k(C)&&Hn(C,l);else if(k(C))C.includes(l)||C.push(l);else if(x)c[a]=[l],_(a)&&(u[a]=c[a]);else{const $=[l];I(a,e.k)&&(a.value=$),e.k&&(c[e.k]=$)}}else x?(c[a]=r,_(a)&&(u[a]=r)):M&&(I(a,e.k)&&(a.value=r),e.k&&(c[e.k]=r))};if(r){const C=()=>{P(),Hs.delete(e)};C.id=-1,Hs.set(e,C),Ne(C,s)}else vi(e),P()}}}function vi(e){const t=Hs.get(e);t&&(t.flags|=8,Hs.delete(e))}Qs().requestIdleCallback;Qs().cancelIdleCallback;const _s=e=>!!e.type.__asyncLoader,tn=e=>e.type.__isKeepAlive;function ko(e,t){Yl(e,"a",t)}function Ho(e,t){Yl(e,"da",t)}function Yl(e,t,s=Ie){const n=e.__wdc||(e.__wdc=()=>{let i=s;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(sn(t,n,s),s){let i=s.parent;for(;i&&i.parent;)tn(i.parent.vnode)&&Vo(n,t,s,i),i=i.parent}}function Vo(e,t,s,n){const i=sn(t,e,n,!0);ns(()=>{Hn(n[t],i)},s)}function sn(e,t,s=Ie,n=!1){if(s){const i=s[e]||(s[e]=[]),l=t.__weh||(t.__weh=(...r)=>{vt();const o=Ts(s),a=Xe(t,s,e,r);return o(),bt(),a});return n?i.unshift(l):i.push(l),l}}const At=e=>(t,s=Ie)=>{(!Ss||e==="sp")&&sn(e,(...n)=>t(...n),s)},Ko=At("bm"),ss=At("m"),Wo=At("bu"),Go=At("u"),Zl=At("bum"),ns=At("um"),qo=At("sp"),Xo=At("rtg"),zo=At("rtc");function Jo(e,t=Ie){sn("ec",e,t)}const er="components";function is(e,t){return sr(er,e,!0,t)||e}const tr=Symbol.for("v-ndc");function Qo(e){return he(e)?sr(er,e,!1)||e:e||tr}function sr(e,t,s=!0,n=!1){const i=We||Ie;if(i){const l=i.type;{const o=Na(l,!1);if(o&&(o===t||o===Me(t)||o===Js(Me(t))))return l}const r=bi(i[e]||l[e],t)||bi(i.appContext[e],t);return!r&&n?l:r}}function bi(e,t){return e&&(e[t]||e[Me(t)]||e[Js(Me(t))])}function be(e,t,s,n){let i;const l=s,r=k(e);if(r||he(e)){const o=r&&Bt(e);let a=!1,f=!1;o&&(a=!Ve(e),f=yt(e),e=Ys(e)),i=new Array(e.length);for(let c=0,u=e.length;c<u;c++)i[c]=t(a?f?Zt(qe(e[c])):qe(e[c]):e[c],c,void 0,l)}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,l)}else if(re(e))if(e[Symbol.iterator])i=Array.from(e,(o,a)=>t(o,a,void 0,l));else{const o=Object.keys(e);i=new Array(o.length);for(let a=0,f=o.length;a<f;a++){const c=o[a];i[a]=t(e[c],c,a,l)}}else i=[];return i}const Tn=e=>e?Cr(e)?ni(e):Tn(e.parent):null,ms=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Tn(e.parent),$root:e=>Tn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ir(e),$forceUpdate:e=>e.f||(e.f=()=>{Zn(e.update)}),$nextTick:e=>e.n||(e.n=Fs.bind(e.proxy)),$watch:e=>Do.bind(e)}),_n=(e,t)=>e!==fe&&!e.__isScriptSetup&&ie(e,t),Yo={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:n,data:i,props:l,accessCache:r,type:o,appContext:a}=e;if(t[0]!=="$"){const h=r[t];if(h!==void 0)switch(h){case 1:return n[t];case 2:return i[t];case 4:return s[t];case 3:return l[t]}else{if(_n(n,t))return r[t]=1,n[t];if(i!==fe&&ie(i,t))return r[t]=2,i[t];if(ie(l,t))return r[t]=3,l[t];if(s!==fe&&ie(s,t))return r[t]=4,s[t];jn&&(r[t]=0)}}const f=ms[t];let c,u;if(f)return t==="$attrs"&&Se(e.attrs,"get",""),f(e);if((c=o.__cssModules)&&(c=c[t]))return c;if(s!==fe&&ie(s,t))return r[t]=4,s[t];if(u=a.config.globalProperties,ie(u,t))return u[t]},set({_:e},t,s){const{data:n,setupState:i,ctx:l}=e;return _n(i,t)?(i[t]=s,!0):n!==fe&&ie(n,t)?(n[t]=s,!0):ie(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:i,props:l,type:r}},o){let a;return!!(s[o]||e!==fe&&o[0]!=="$"&&ie(e,o)||_n(t,o)||ie(l,o)||ie(n,o)||ie(ms,o)||ie(i.config.globalProperties,o)||(a=r.__cssModules)&&a[o])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:ie(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function yi(e){return k(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let jn=!0;function Zo(e){const t=ir(e),s=e.proxy,n=e.ctx;jn=!1,t.beforeCreate&&Ai(t.beforeCreate,e,"bc");const{data:i,computed:l,methods:r,watch:o,provide:a,inject:f,created:c,beforeMount:u,mounted:h,beforeUpdate:_,updated:I,activated:x,deactivated:M,beforeDestroy:P,beforeUnmount:C,destroyed:$,unmounted:j,render:G,renderTracked:Q,renderTriggered:J,errorCaptured:Ae,serverPrefetch:H,expose:X,inheritAttrs:oe,components:N,directives:te,filters:Ee}=t;if(f&&ea(f,n,null),r)for(const ae in r){const se=r[ae];W(se)&&(n[ae]=se.bind(s))}if(i){const ae=i.call(s,s);re(ae)&&(e.data=Zs(ae))}if(jn=!0,l)for(const ae in l){const se=l[ae],ut=W(se)?se.bind(s,s):W(se.get)?se.get.bind(s,s):rt,Et=!W(se)&&W(se.set)?se.set.bind(s):rt,Je=Oe({get:ut,set:Et});Object.defineProperty(n,ae,{enumerable:!0,configurable:!0,get:()=>Je.value,set:$e=>Je.value=$e})}if(o)for(const ae in o)nr(o[ae],n,s,ae);if(a){const ae=W(a)?a.call(s):a;Reflect.ownKeys(ae).forEach(se=>{$s(se,ae[se])})}c&&Ai(c,e,"c");function _e(ae,se){k(se)?se.forEach(ut=>ae(ut.bind(s))):se&&ae(se.bind(s))}if(_e(Ko,u),_e(ss,h),_e(Wo,_),_e(Go,I),_e(ko,x),_e(Ho,M),_e(Jo,Ae),_e(zo,Q),_e(Xo,J),_e(Zl,C),_e(ns,j),_e(qo,H),k(X))if(X.length){const ae=e.exposed||(e.exposed={});X.forEach(se=>{Object.defineProperty(ae,se,{get:()=>s[se],set:ut=>s[se]=ut,enumerable:!0})})}else e.exposed||(e.exposed={});G&&e.render===rt&&(e.render=G),oe!=null&&(e.inheritAttrs=oe),N&&(e.components=N),te&&(e.directives=te),H&&Ql(e)}function ea(e,t,s=rt){k(e)&&(e=On(e));for(const n in e){const i=e[n];let l;re(i)?"default"in i?l=ot(i.from||n,i.default,!0):l=ot(i.from||n):l=ot(i),Pe(l)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>l.value,set:r=>l.value=r}):t[n]=l}}function Ai(e,t,s){Xe(k(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function nr(e,t,s,n){let i=n.includes(".")?Vl(s,n):()=>s[n];if(he(e)){const l=t[e];W(l)&&Jt(i,l)}else if(W(e))Jt(i,e.bind(s));else if(re(e))if(k(e))e.forEach(l=>nr(l,t,s,n));else{const l=W(e.handler)?e.handler.bind(s):t[e.handler];W(l)&&Jt(i,l,e)}}function ir(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:i,optionsCache:l,config:{optionMergeStrategies:r}}=e.appContext,o=l.get(t);let a;return o?a=o:!i.length&&!s&&!n?a=t:(a={},i.length&&i.forEach(f=>Vs(a,f,r,!0)),Vs(a,t,r)),re(t)&&l.set(t,a),a}function Vs(e,t,s,n=!1){const{mixins:i,extends:l}=t;l&&Vs(e,l,s,!0),i&&i.forEach(r=>Vs(e,r,s,!0));for(const r in t)if(!(n&&r==="expose")){const o=ta[r]||s&&s[r];e[r]=o?o(e[r],t[r]):t[r]}return e}const ta={data:Ei,props:xi,emits:xi,methods:us,computed:us,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:us,directives:us,watch:na,provide:Ei,inject:sa};function Ei(e,t){return t?e?function(){return ye(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function sa(e,t){return us(On(e),On(t))}function On(e){if(k(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function we(e,t){return e?[...new Set([].concat(e,t))]:t}function us(e,t){return e?ye(Object.create(null),e,t):t}function xi(e,t){return e?k(e)&&k(t)?[...new Set([...e,...t])]:ye(Object.create(null),yi(e),yi(t??{})):t}function na(e,t){if(!e)return t;if(!t)return e;const s=ye(Object.create(null),e);for(const n in t)s[n]=we(e[n],t[n]);return s}function lr(){return{app:null,config:{isNativeTag:pl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ia=0;function la(e,t){return function(n,i=null){W(n)||(n=ye({},n)),i!=null&&!re(i)&&(i=null);const l=lr(),r=new WeakSet,o=[];let a=!1;const f=l.app={_uid:ia++,_component:n,_props:i,_container:null,_context:l,_instance:null,version:La,get config(){return l.config},set config(c){},use(c,...u){return r.has(c)||(c&&W(c.install)?(r.add(c),c.install(f,...u)):W(c)&&(r.add(c),c(f,...u))),f},mixin(c){return l.mixins.includes(c)||l.mixins.push(c),f},component(c,u){return u?(l.components[c]=u,f):l.components[c]},directive(c,u){return u?(l.directives[c]=u,f):l.directives[c]},mount(c,u,h){if(!a){const _=f._ceVNode||q(n,i);return _.appContext=l,h===!0?h="svg":h===!1&&(h=void 0),e(_,c,h),a=!0,f._container=c,c.__vue_app__=f,ni(_.component)}},onUnmount(c){o.push(c)},unmount(){a&&(Xe(o,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(c,u){return l.provides[c]=u,f},runWithContext(c){const u=Qt;Qt=f;try{return c()}finally{Qt=u}}};return f}}let Qt=null;const ra=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Me(t)}Modifiers`]||e[`${Ft(t)}Modifiers`];function oa(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||fe;let i=s;const l=t.startsWith("update:"),r=l&&ra(n,t.slice(7));r&&(r.trim&&(i=s.map(c=>he(c)?c.trim():c)),r.number&&(i=s.map(qr)));let o,a=n[o=an(t)]||n[o=an(Me(t))];!a&&l&&(a=n[o=an(Ft(t))]),a&&Xe(a,e,6,i);const f=n[o+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Xe(f,e,6,i)}}const aa=new WeakMap;function rr(e,t,s=!1){const n=s?aa:t.emitsCache,i=n.get(e);if(i!==void 0)return i;const l=e.emits;let r={},o=!1;if(!W(e)){const a=f=>{const c=rr(f,t,!0);c&&(o=!0,ye(r,c))};!s&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!l&&!o?(re(e)&&n.set(e,null),null):(k(l)?l.forEach(a=>r[a]=null):ye(r,l),re(e)&&n.set(e,r),r)}function nn(e,t){return!e||!qs(t)?!1:(t=t.slice(2).replace(/Once$/,""),ie(e,t[0].toLowerCase()+t.slice(1))||ie(e,Ft(t))||ie(e,t))}function Ci(e){const{type:t,vnode:s,proxy:n,withProxy:i,propsOptions:[l],slots:r,attrs:o,emit:a,render:f,renderCache:c,props:u,data:h,setupState:_,ctx:I,inheritAttrs:x}=e,M=ks(e);let P,C;try{if(s.shapeFlag&4){const j=i||n,G=j;P=it(f.call(G,j,c,u,_,h,I)),C=o}else{const j=t;P=it(j.length>1?j(u,{attrs:o,slots:r,emit:a}):j(u,null)),C=t.props?o:ca(o)}}catch(j){gs.length=0,en(j,e,1),P=q(je)}let $=P;if(C&&x!==!1){const j=Object.keys(C),{shapeFlag:G}=$;j.length&&G&7&&(l&&j.some(Xs)&&(C=ua(C,l)),$=Rt($,C,!1,!0))}return s.dirs&&($=Rt($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(s.dirs):s.dirs),s.transition&&xs($,s.transition),P=$,ks(M),P}const ca=e=>{let t;for(const s in e)(s==="class"||s==="style"||qs(s))&&((t||(t={}))[s]=e[s]);return t},ua=(e,t)=>{const s={};for(const n in e)(!Xs(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function pa(e,t,s){const{props:n,children:i,component:l}=e,{props:r,children:o,patchFlag:a}=t,f=l.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&a>=0){if(a&1024)return!0;if(a&16)return n?Si(n,r,f):!!r;if(a&8){const c=t.dynamicProps;for(let u=0;u<c.length;u++){const h=c[u];if(or(r,n,h)&&!nn(f,h))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:n===r?!1:n?r?Si(n,r,f):!0:!!r;return!1}function Si(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const l=n[i];if(or(t,e,l)&&!nn(s,l))return!0}return!1}function or(e,t,s){const n=e[s],i=t[s];return s==="style"&&re(n)&&re(i)?!Wn(n,i):n!==i}function fa({vnode:e,parent:t,suspense:s},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=n,e=i),i===e)(e=t.vnode).el=n,t=t.parent;else break}s&&s.activeBranch===e&&(s.vnode.el=n)}const ar={},cr=()=>Object.create(ar),ur=e=>Object.getPrototypeOf(e)===ar;function da(e,t,s,n=!1){const i={},l=cr();e.propsDefaults=Object.create(null),pr(e,t,i,l);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);s?e.props=n?i:$l(i):e.type.props?e.props=i:e.props=l,e.attrs=l}function ha(e,t,s,n){const{props:i,attrs:l,vnode:{patchFlag:r}}=e,o=ee(i),[a]=e.propsOptions;let f=!1;if((n||r>0)&&!(r&16)){if(r&8){const c=e.vnode.dynamicProps;for(let u=0;u<c.length;u++){let h=c[u];if(nn(e.emitsOptions,h))continue;const _=t[h];if(a)if(ie(l,h))_!==l[h]&&(l[h]=_,f=!0);else{const I=Me(h);i[I]=Mn(a,o,I,_,e,!1)}else _!==l[h]&&(l[h]=_,f=!0)}}}else{pr(e,t,i,l)&&(f=!0);let c;for(const u in o)(!t||!ie(t,u)&&((c=Ft(u))===u||!ie(t,c)))&&(a?s&&(s[u]!==void 0||s[c]!==void 0)&&(i[u]=Mn(a,o,u,void 0,e,!0)):delete i[u]);if(l!==o)for(const u in l)(!t||!ie(t,u))&&(delete l[u],f=!0)}f&&mt(e.attrs,"set","")}function pr(e,t,s,n){const[i,l]=e.propsOptions;let r=!1,o;if(t)for(let a in t){if(ps(a))continue;const f=t[a];let c;i&&ie(i,c=Me(a))?!l||!l.includes(c)?s[c]=f:(o||(o={}))[c]=f:nn(e.emitsOptions,a)||(!(a in n)||f!==n[a])&&(n[a]=f,r=!0)}if(l){const a=ee(s),f=o||fe;for(let c=0;c<l.length;c++){const u=l[c];s[u]=Mn(i,a,u,f[u],e,!ie(f,u))}}return r}function Mn(e,t,s,n,i,l){const r=e[s];if(r!=null){const o=ie(r,"default");if(o&&n===void 0){const a=r.default;if(r.type!==Function&&!r.skipFactory&&W(a)){const{propsDefaults:f}=i;if(s in f)n=f[s];else{const c=Ts(i);n=f[s]=a.call(null,t),c()}}else n=a;i.ce&&i.ce._setProp(s,n)}r[0]&&(l&&!o?n=!1:r[1]&&(n===""||n===Ft(s))&&(n=!0))}return n}const _a=new WeakMap;function fr(e,t,s=!1){const n=s?_a:t.propsCache,i=n.get(e);if(i)return i;const l=e.props,r={},o=[];let a=!1;if(!W(e)){const c=u=>{a=!0;const[h,_]=fr(u,t,!0);ye(r,h),_&&o.push(..._)};!s&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!l&&!a)return re(e)&&n.set(e,qt),qt;if(k(l))for(let c=0;c<l.length;c++){const u=Me(l[c]);Ii(u)&&(r[u]=fe)}else if(l)for(const c in l){const u=Me(c);if(Ii(u)){const h=l[c],_=r[u]=k(h)||W(h)?{type:h}:ye({},h),I=_.type;let x=!1,M=!0;if(k(I))for(let P=0;P<I.length;++P){const C=I[P],$=W(C)&&C.name;if($==="Boolean"){x=!0;break}else $==="String"&&(M=!1)}else x=W(I)&&I.name==="Boolean";_[0]=x,_[1]=M,(x||ie(_,"default"))&&o.push(u)}}const f=[r,o];return re(e)&&n.set(e,f),f}function Ii(e){return e[0]!=="$"&&!ps(e)}const ei=e=>e==="_"||e==="_ctx"||e==="$stable",ti=e=>k(e)?e.map(it):[it(e)],ma=(e,t,s)=>{if(t._n)return t;const n=me((...i)=>ti(t(...i)),s);return n._c=!1,n},dr=(e,t,s)=>{const n=e._ctx;for(const i in e){if(ei(i))continue;const l=e[i];if(W(l))t[i]=ma(i,l,n);else if(l!=null){const r=ti(l);t[i]=()=>r}}},hr=(e,t)=>{const s=ti(t);e.slots.default=()=>s},_r=(e,t,s)=>{for(const n in t)(s||!ei(n))&&(e[n]=t[n])},ga=(e,t,s)=>{const n=e.slots=cr();if(e.vnode.shapeFlag&32){const i=t._;i?(_r(n,t,s),s&&ml(n,"_",i,!0)):dr(t,n)}else t&&hr(e,t)},va=(e,t,s)=>{const{vnode:n,slots:i}=e;let l=!0,r=fe;if(n.shapeFlag&32){const o=t._;o?s&&o===1?l=!1:_r(i,t,s):(l=!t.$stable,dr(t,i)),r=t}else t&&(hr(e,t),r={default:1});if(l)for(const o in i)!ei(o)&&r[o]==null&&delete i[o]},Ne=xa;function ba(e){return ya(e)}function ya(e,t){const s=Qs();s.__VUE__=!0;const{insert:n,remove:i,patchProp:l,createElement:r,createText:o,createComment:a,setText:f,setElementText:c,parentNode:u,nextSibling:h,setScopeId:_=rt,insertStaticContent:I}=e,x=(p,d,m,v=null,A=null,b=null,R=void 0,w=null,S=!!d.dynamicChildren)=>{if(p===d)return;p&&!Dt(p,d)&&(v=y(p),$e(p,A,b,!0),p=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:E,ref:F,shapeFlag:O}=d;switch(E){case ln:M(p,d,m,v);break;case je:P(p,d,m,v);break;case Ns:p==null&&C(d,m,v,R);break;case le:N(p,d,m,v,A,b,R,w,S);break;default:O&1?G(p,d,m,v,A,b,R,w,S):O&6?te(p,d,m,v,A,b,R,w,S):(O&64||O&128)&&E.process(p,d,m,v,A,b,R,w,S,L)}F!=null&&A?hs(F,p&&p.ref,b,d||p,!d):F==null&&p&&p.ref!=null&&hs(p.ref,null,b,p,!0)},M=(p,d,m,v)=>{if(p==null)n(d.el=o(d.children),m,v);else{const A=d.el=p.el;d.children!==p.children&&f(A,d.children)}},P=(p,d,m,v)=>{p==null?n(d.el=a(d.children||""),m,v):d.el=p.el},C=(p,d,m,v)=>{[p.el,p.anchor]=I(p.children,d,m,v,p.el,p.anchor)},$=({el:p,anchor:d},m,v)=>{let A;for(;p&&p!==d;)A=h(p),n(p,m,v),p=A;n(d,m,v)},j=({el:p,anchor:d})=>{let m;for(;p&&p!==d;)m=h(p),i(p),p=m;i(d)},G=(p,d,m,v,A,b,R,w,S)=>{if(d.type==="svg"?R="svg":d.type==="math"&&(R="mathml"),p==null)Q(d,m,v,A,b,R,w,S);else{const E=p.el&&p.el._isVueCE?p.el:null;try{E&&E._beginPatch(),H(p,d,A,b,R,w,S)}finally{E&&E._endPatch()}}},Q=(p,d,m,v,A,b,R,w)=>{let S,E;const{props:F,shapeFlag:O,transition:U,dirs:V}=p;if(S=p.el=r(p.type,b,F&&F.is,F),O&8?c(S,p.children):O&16&&Ae(p.children,S,null,v,A,mn(p,b),R,w),V&&jt(p,null,v,"created"),J(S,p,p.scopeId,R,v),F){for(const ce in F)ce!=="value"&&!ps(ce)&&l(S,ce,null,F[ce],b,v);"value"in F&&l(S,"value",null,F.value,b),(E=F.onVnodeBeforeMount)&&et(E,v,p)}V&&jt(p,null,v,"beforeMount");const Y=Aa(A,U);Y&&U.beforeEnter(S),n(S,d,m),((E=F&&F.onVnodeMounted)||Y||V)&&Ne(()=>{E&&et(E,v,p),Y&&U.enter(S),V&&jt(p,null,v,"mounted")},A)},J=(p,d,m,v,A)=>{if(m&&_(p,m),v)for(let b=0;b<v.length;b++)_(p,v[b]);if(A){let b=A.subTree;if(d===b||br(b.type)&&(b.ssContent===d||b.ssFallback===d)){const R=A.vnode;J(p,R,R.scopeId,R.slotScopeIds,A.parent)}}},Ae=(p,d,m,v,A,b,R,w,S=0)=>{for(let E=S;E<p.length;E++){const F=p[E]=w?_t(p[E]):it(p[E]);x(null,F,d,m,v,A,b,R,w)}},H=(p,d,m,v,A,b,R)=>{const w=d.el=p.el;let{patchFlag:S,dynamicChildren:E,dirs:F}=d;S|=p.patchFlag&16;const O=p.props||fe,U=d.props||fe;let V;if(m&&Ot(m,!1),(V=U.onVnodeBeforeUpdate)&&et(V,m,d,p),F&&jt(d,p,m,"beforeUpdate"),m&&Ot(m,!0),(O.innerHTML&&U.innerHTML==null||O.textContent&&U.textContent==null)&&c(w,""),E?X(p.dynamicChildren,E,w,m,v,mn(d,A),b):R||se(p,d,w,null,m,v,mn(d,A),b,!1),S>0){if(S&16)oe(w,O,U,m,A);else if(S&2&&O.class!==U.class&&l(w,"class",null,U.class,A),S&4&&l(w,"style",O.style,U.style,A),S&8){const Y=d.dynamicProps;for(let ce=0;ce<Y.length;ce++){const ue=Y[ce],ge=O[ue],xe=U[ue];(xe!==ge||ue==="value")&&l(w,ue,ge,xe,A,m)}}S&1&&p.children!==d.children&&c(w,d.children)}else!R&&E==null&&oe(w,O,U,m,A);((V=U.onVnodeUpdated)||F)&&Ne(()=>{V&&et(V,m,d,p),F&&jt(d,p,m,"updated")},v)},X=(p,d,m,v,A,b,R)=>{for(let w=0;w<d.length;w++){const S=p[w],E=d[w],F=S.el&&(S.type===le||!Dt(S,E)||S.shapeFlag&198)?u(S.el):m;x(S,E,F,null,v,A,b,R,!0)}},oe=(p,d,m,v,A)=>{if(d!==m){if(d!==fe)for(const b in d)!ps(b)&&!(b in m)&&l(p,b,d[b],null,A,v);for(const b in m){if(ps(b))continue;const R=m[b],w=d[b];R!==w&&b!=="value"&&l(p,b,w,R,A,v)}"value"in m&&l(p,"value",d.value,m.value,A)}},N=(p,d,m,v,A,b,R,w,S)=>{const E=d.el=p?p.el:o(""),F=d.anchor=p?p.anchor:o("");let{patchFlag:O,dynamicChildren:U,slotScopeIds:V}=d;V&&(w=w?w.concat(V):V),p==null?(n(E,m,v),n(F,m,v),Ae(d.children||[],m,F,A,b,R,w,S)):O>0&&O&64&&U&&p.dynamicChildren&&p.dynamicChildren.length===U.length?(X(p.dynamicChildren,U,m,A,b,R,w),(d.key!=null||A&&d===A.subTree)&&mr(p,d,!0)):se(p,d,m,F,A,b,R,w,S)},te=(p,d,m,v,A,b,R,w,S)=>{d.slotScopeIds=w,p==null?d.shapeFlag&512?A.ctx.activate(d,m,v,R,S):Ee(d,m,v,A,b,R,S):Ue(p,d,S)},Ee=(p,d,m,v,A,b,R)=>{const w=p.component=Ta(p,v,A);if(tn(p)&&(w.ctx.renderer=L),ja(w,!1,R),w.asyncDep){if(A&&A.registerDep(w,_e,R),!p.el){const S=w.subTree=q(je);P(null,S,d,m),p.placeholder=S.el}}else _e(w,p,d,m,A,b,R)},Ue=(p,d,m)=>{const v=d.component=p.component;if(pa(p,d,m))if(v.asyncDep&&!v.asyncResolved){ae(v,d,m);return}else v.next=d,v.update();else d.el=p.el,v.vnode=d},_e=(p,d,m,v,A,b,R)=>{const w=()=>{if(p.isMounted){let{next:O,bu:U,u:V,parent:Y,vnode:ce}=p;{const Ye=gr(p);if(Ye){O&&(O.el=ce.el,ae(p,O,R)),Ye.asyncDep.then(()=>{Ne(()=>{p.isUnmounted||E()},A)});return}}let ue=O,ge;Ot(p,!1),O?(O.el=ce.el,ae(p,O,R)):O=ce,U&&cn(U),(ge=O.props&&O.props.onVnodeBeforeUpdate)&&et(ge,Y,O,ce),Ot(p,!0);const xe=Ci(p),Qe=p.subTree;p.subTree=xe,x(Qe,xe,u(Qe.el),y(Qe),p,A,b),O.el=xe.el,ue===null&&fa(p,xe.el),V&&Ne(V,A),(ge=O.props&&O.props.onVnodeUpdated)&&Ne(()=>et(ge,Y,O,ce),A)}else{let O;const{el:U,props:V}=d,{bm:Y,m:ce,parent:ue,root:ge,type:xe}=p,Qe=_s(d);Ot(p,!1),Y&&cn(Y),!Qe&&(O=V&&V.onVnodeBeforeMount)&&et(O,ue,d),Ot(p,!0);{ge.ce&&ge.ce._hasShadowRoot()&&ge.ce._injectChildStyle(xe,p.parent?p.parent.type:void 0);const Ye=p.subTree=Ci(p);x(null,Ye,m,v,p,A,b),d.el=Ye.el}if(ce&&Ne(ce,A),!Qe&&(O=V&&V.onVnodeMounted)){const Ye=d;Ne(()=>et(O,ue,Ye),A)}(d.shapeFlag&256||ue&&_s(ue.vnode)&&ue.vnode.shapeFlag&256)&&p.a&&Ne(p.a,A),p.isMounted=!0,d=m=v=null}};p.scope.on();const S=p.effect=new yl(w);p.scope.off();const E=p.update=S.run.bind(S),F=p.job=S.runIfDirty.bind(S);F.i=p,F.id=p.uid,S.scheduler=()=>Zn(F),Ot(p,!0),E()},ae=(p,d,m)=>{d.component=p;const v=p.vnode.props;p.vnode=d,p.next=null,ha(p,d.props,v,m),va(p,d.children,m),vt(),_i(p),bt()},se=(p,d,m,v,A,b,R,w,S=!1)=>{const E=p&&p.children,F=p?p.shapeFlag:0,O=d.children,{patchFlag:U,shapeFlag:V}=d;if(U>0){if(U&128){Et(E,O,m,v,A,b,R,w,S);return}else if(U&256){ut(E,O,m,v,A,b,R,w,S);return}}V&8?(F&16&&ke(E,A,b),O!==E&&c(m,O)):F&16?V&16?Et(E,O,m,v,A,b,R,w,S):ke(E,A,b,!0):(F&8&&c(m,""),V&16&&Ae(O,m,v,A,b,R,w,S))},ut=(p,d,m,v,A,b,R,w,S)=>{p=p||qt,d=d||qt;const E=p.length,F=d.length,O=Math.min(E,F);let U;for(U=0;U<O;U++){const V=d[U]=S?_t(d[U]):it(d[U]);x(p[U],V,m,null,A,b,R,w,S)}E>F?ke(p,A,b,!0,!1,O):Ae(d,m,v,A,b,R,w,S,O)},Et=(p,d,m,v,A,b,R,w,S)=>{let E=0;const F=d.length;let O=p.length-1,U=F-1;for(;E<=O&&E<=U;){const V=p[E],Y=d[E]=S?_t(d[E]):it(d[E]);if(Dt(V,Y))x(V,Y,m,null,A,b,R,w,S);else break;E++}for(;E<=O&&E<=U;){const V=p[O],Y=d[U]=S?_t(d[U]):it(d[U]);if(Dt(V,Y))x(V,Y,m,null,A,b,R,w,S);else break;O--,U--}if(E>O){if(E<=U){const V=U+1,Y=V<F?d[V].el:v;for(;E<=U;)x(null,d[E]=S?_t(d[E]):it(d[E]),m,Y,A,b,R,w,S),E++}}else if(E>U)for(;E<=O;)$e(p[E],A,b,!0),E++;else{const V=E,Y=E,ce=new Map;for(E=Y;E<=U;E++){const Be=d[E]=S?_t(d[E]):it(d[E]);Be.key!=null&&ce.set(Be.key,E)}let ue,ge=0;const xe=U-Y+1;let Qe=!1,Ye=0;const ls=new Array(xe);for(E=0;E<xe;E++)ls[E]=0;for(E=V;E<=O;E++){const Be=p[E];if(ge>=xe){$e(Be,A,b,!0);continue}let Ze;if(Be.key!=null)Ze=ce.get(Be.key);else for(ue=Y;ue<=U;ue++)if(ls[ue-Y]===0&&Dt(Be,d[ue])){Ze=ue;break}Ze===void 0?$e(Be,A,b,!0):(ls[Ze-Y]=E+1,Ze>=Ye?Ye=Ze:Qe=!0,x(Be,d[Ze],m,null,A,b,R,w,S),ge++)}const ai=Qe?Ea(ls):qt;for(ue=ai.length-1,E=xe-1;E>=0;E--){const Be=Y+E,Ze=d[Be],ci=d[Be+1],ui=Be+1<F?ci.el||vr(ci):v;ls[E]===0?x(null,Ze,m,ui,A,b,R,w,S):Qe&&(ue<0||E!==ai[ue]?Je(Ze,m,ui,2):ue--)}}},Je=(p,d,m,v,A=null)=>{const{el:b,type:R,transition:w,children:S,shapeFlag:E}=p;if(E&6){Je(p.component.subTree,d,m,v);return}if(E&128){p.suspense.move(d,m,v);return}if(E&64){R.move(p,d,m,L);return}if(R===le){n(b,d,m);for(let O=0;O<S.length;O++)Je(S[O],d,m,v);n(p.anchor,d,m);return}if(R===Ns){$(p,d,m);return}if(v!==2&&E&1&&w)if(v===0)w.beforeEnter(b),n(b,d,m),Ne(()=>w.enter(b),A);else{const{leave:O,delayLeave:U,afterLeave:V}=w,Y=()=>{p.ctx.isUnmounted?i(b):n(b,d,m)},ce=()=>{b._isLeaving&&b[st](!0),O(b,()=>{Y(),V&&V()})};U?U(b,Y,ce):ce()}else n(b,d,m)},$e=(p,d,m,v=!1,A=!1)=>{const{type:b,props:R,ref:w,children:S,dynamicChildren:E,shapeFlag:F,patchFlag:O,dirs:U,cacheIndex:V,memo:Y}=p;if(O===-2&&(A=!1),w!=null&&(vt(),hs(w,null,m,p,!0),bt()),V!=null&&(d.renderCache[V]=void 0),F&256){d.ctx.deactivate(p);return}const ce=F&1&&U,ue=!_s(p);let ge;if(ue&&(ge=R&&R.onVnodeBeforeUnmount)&&et(ge,d,p),F&6)Tt(p.component,m,v);else{if(F&128){p.suspense.unmount(m,v);return}ce&&jt(p,null,d,"beforeUnmount"),F&64?p.type.remove(p,d,m,L,v):E&&!E.hasOnce&&(b!==le||O>0&&O&64)?ke(E,d,m,!1,!0):(b===le&&O&384||!A&&F&16)&&ke(S,d,m),v&&kt(p)}const xe=Y!=null&&V==null;(ue&&(ge=R&&R.onVnodeUnmounted)||ce||xe)&&Ne(()=>{ge&&et(ge,d,p),ce&&jt(p,null,d,"unmounted"),xe&&(p.el=null)},m)},kt=p=>{const{type:d,el:m,anchor:v,transition:A}=p;if(d===le){Ht(m,v);return}if(d===Ns){j(p);return}const b=()=>{i(m),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(p.shapeFlag&1&&A&&!A.persisted){const{leave:R,delayLeave:w}=A,S=()=>R(m,b);w?w(p.el,b,S):S()}else b()},Ht=(p,d)=>{let m;for(;p!==d;)m=h(p),i(p),p=m;i(d)},Tt=(p,d,m)=>{const{bum:v,scope:A,job:b,subTree:R,um:w,m:S,a:E}=p;Pi(S),Pi(E),v&&cn(v),A.stop(),b&&(b.flags|=8,$e(R,p,d,m)),w&&Ne(w,d),Ne(()=>{p.isUnmounted=!0},d)},ke=(p,d,m,v=!1,A=!1,b=0)=>{for(let R=b;R<p.length;R++)$e(p[R],d,m,v,A)},y=p=>{if(p.shapeFlag&6)return y(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const d=h(p.anchor||p.el),m=d&&d[Lo];return m?h(m):d};let D=!1;const T=(p,d,m)=>{let v;p==null?d._vnode&&($e(d._vnode,null,null,!0),v=d._vnode.component):x(d._vnode||null,p,d,null,null,null,m),d._vnode=p,D||(D=!0,_i(v),Bl(),D=!1)},L={p:x,um:$e,m:Je,r:kt,mt:Ee,mc:Ae,pc:se,pbc:X,n:y,o:e};return{render:T,hydrate:void 0,createApp:la(T)}}function mn({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function Ot({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Aa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function mr(e,t,s=!1){const n=e.children,i=t.children;if(k(n)&&k(i))for(let l=0;l<n.length;l++){const r=n[l];let o=i[l];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[l]=_t(i[l]),o.el=r.el),!s&&o.patchFlag!==-2&&mr(r,o)),o.type===ln&&(o.patchFlag===-1&&(o=i[l]=_t(o)),o.el=r.el),o.type===je&&!o.el&&(o.el=r.el)}}function Ea(e){const t=e.slice(),s=[0];let n,i,l,r,o;const a=e.length;for(n=0;n<a;n++){const f=e[n];if(f!==0){if(i=s[s.length-1],e[i]<f){t[n]=i,s.push(n);continue}for(l=0,r=s.length-1;l<r;)o=l+r>>1,e[s[o]]<f?l=o+1:r=o;f<e[s[l]]&&(l>0&&(t[n]=s[l-1]),s[l]=n)}}for(l=s.length,r=s[l-1];l-- >0;)s[l]=r,r=t[r];return s}function gr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:gr(t)}function Pi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function vr(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?vr(t.subTree):null}const br=e=>e.__isSuspense;function xa(e,t){t&&t.pendingBranch?k(e)?t.effects.push(...e):t.effects.push(e):Mo(e)}const le=Symbol.for("v-fgt"),ln=Symbol.for("v-txt"),je=Symbol.for("v-cmt"),Ns=Symbol.for("v-stc"),gs=[];let Fe=null;function B(e=!1){gs.push(Fe=e?null:[])}function Ca(){gs.pop(),Fe=gs[gs.length-1]||null}let Cs=1;function Ks(e,t=!1){Cs+=e,e<0&&Fe&&t&&(Fe.hasOnce=!0)}function yr(e){return e.dynamicChildren=Cs>0?Fe||qt:null,Ca(),Cs>0&&Fe&&Fe.push(e),e}function K(e,t,s,n,i,l){return yr(g(e,t,s,n,i,l,!0))}function wt(e,t,s,n,i){return yr(q(e,t,s,n,i,!0))}function Ws(e){return e?e.__v_isVNode===!0:!1}function Dt(e,t){return e.type===t.type&&e.key===t.key}const Ar=({key:e})=>e??null,Ds=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?he(e)||Pe(e)||W(e)?{i:We,r:e,k:t,f:!!s}:e:null);function g(e,t=null,s=null,n=0,i=null,l=e===le?0:1,r=!1,o=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ar(t),ref:t&&Ds(t),scopeId:kl,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:We};return o?(si(a,s),l&128&&e.normalize(a)):s&&(a.shapeFlag|=he(s)?8:16),Cs>0&&!r&&Fe&&(a.patchFlag>0||l&6)&&a.patchFlag!==32&&Fe.push(a),a}const q=Sa;function Sa(e,t=null,s=null,n=0,i=null,l=!1){if((!e||e===tr)&&(e=je),Ws(e)){const o=Rt(e,t,!0);return s&&si(o,s),Cs>0&&!l&&Fe&&(o.shapeFlag&6?Fe[Fe.indexOf(e)]=o:Fe.push(o)),o.patchFlag=-2,o}if(Da(e)&&(e=e.__vccOpts),t){t=Ia(t);let{class:o,style:a}=t;o&&!he(o)&&(t.class=ct(o)),re(a)&&(Yn(a)&&!k(a)&&(a=ye({},a)),t.style=Kn(a))}const r=he(e)?1:br(e)?128:Kl(e)?64:re(e)?4:W(e)?2:0;return g(e,t,s,n,i,r,l,!0)}function Ia(e){return e?Yn(e)||ur(e)?ye({},e):e:null}function Rt(e,t,s=!1,n=!1){const{props:i,ref:l,patchFlag:r,children:o,transition:a}=e,f=t?Pa(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Ar(f),ref:t&&t.ref?s&&l?k(l)?l.concat(Ds(t)):[l,Ds(t)]:Ds(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==le?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Rt(e.ssContent),ssFallback:e.ssFallback&&Rt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&n&&xs(c,a.clone(c)),c}function Le(e=" ",t=0){return q(ln,null,e,t)}function Yt(e,t){const s=q(Ns,null,e);return s.staticCount=t,s}function Er(e="",t=!1){return t?(B(),wt(je,null,e)):q(je,null,e)}function it(e){return e==null||typeof e=="boolean"?q(je):k(e)?q(le,null,e.slice()):Ws(e)?_t(e):q(ln,null,String(e))}function _t(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Rt(e)}function si(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(k(t))s=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),si(e,i()),i._c&&(i._d=!0));return}else{s=32;const i=t._;!i&&!ur(t)?t._ctx=We:i===3&&We&&(We.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:We},s=32):(t=String(t),n&64?(s=16,t=[Le(t)]):s=8);e.children=t,e.shapeFlag|=s}function Pa(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=ct([t.class,n.class]));else if(i==="style")t.style=Kn([t.style,n.style]);else if(qs(i)){const l=t[i],r=n[i];r&&l!==r&&!(k(l)&&l.includes(r))?t[i]=l?[].concat(l,r):r:r==null&&l==null&&!Xs(i)&&(t[i]=r)}else i!==""&&(t[i]=n[i])}return t}function et(e,t,s,n=null){Xe(e,t,7,[s,n])}const wa=lr();let Ra=0;function Ta(e,t,s){const n=e.type,i=(t?t.appContext:e.appContext)||wa,l={uid:Ra++,vnode:e,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new so(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fr(n,i),emitsOptions:rr(n,i),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:n.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=oa.bind(null,l),e.ce&&e.ce(l),l}let Ie=null;const xr=()=>Ie||We;let Gs,$n;{const e=Qs(),t=(s,n)=>{let i;return(i=e[s])||(i=e[s]=[]),i.push(n),l=>{i.length>1?i.forEach(r=>r(l)):i[0](l)}};Gs=t("__VUE_INSTANCE_SETTERS__",s=>Ie=s),$n=t("__VUE_SSR_SETTERS__",s=>Ss=s)}const Ts=e=>{const t=Ie;return Gs(e),e.scope.on(),()=>{e.scope.off(),Gs(t)}},wi=()=>{Ie&&Ie.scope.off(),Gs(null)};function Cr(e){return e.vnode.shapeFlag&4}let Ss=!1;function ja(e,t=!1,s=!1){t&&$n(t);const{props:n,children:i}=e.vnode,l=Cr(e);da(e,n,l,t),ga(e,i,s||t);const r=l?Oa(e,t):void 0;return t&&$n(!1),r}function Oa(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Yo);const{setup:n}=s;if(n){vt();const i=e.setupContext=n.length>1?$a(e):null,l=Ts(e),r=Rs(n,e,0,[e.props,i]),o=dl(r);if(bt(),l(),(o||e.sp)&&!_s(e)&&Ql(e),o){if(r.then(wi,wi),t)return r.then(a=>{Ri(e,a)}).catch(a=>{en(a,e,0)});e.asyncDep=r}else Ri(e,r)}else Sr(e)}function Ri(e,t,s){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:re(t)&&(e.setupState=Dl(t)),Sr(e)}function Sr(e,t,s){const n=e.type;e.render||(e.render=n.render||rt);{const i=Ts(e);vt();try{Zo(e)}finally{bt(),i()}}}const Ma={get(e,t){return Se(e,"get",""),e[t]}};function $a(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,Ma),slots:e.slots,emit:e.emit,expose:t}}function ni(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Dl(xo(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in ms)return ms[s](e)},has(t,s){return s in t||s in ms}})):e.proxy}function Na(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function Da(e){return W(e)&&"__vccOpts"in e}const Oe=(e,t)=>wo(e,t,Ss);function ii(e,t,s){try{Ks(-1);const n=arguments.length;return n===2?re(t)&&!k(t)?Ws(t)?q(e,null,[t]):q(e,t):q(e,null,t):(n>3?s=Array.prototype.slice.call(arguments,2):n===3&&Ws(s)&&(s=[s]),q(e,t,s))}finally{Ks(1)}}const La="3.5.31";let Nn;const Ti=typeof window<"u"&&window.trustedTypes;if(Ti)try{Nn=Ti.createPolicy("vue",{createHTML:e=>e})}catch{}const Ir=Nn?e=>Nn.createHTML(e):e=>e,Ua="http://www.w3.org/2000/svg",Ba="http://www.w3.org/1998/Math/MathML",ht=typeof document<"u"?document:null,ji=ht&&ht.createElement("template"),Fa={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const i=t==="svg"?ht.createElementNS(Ua,e):t==="mathml"?ht.createElementNS(Ba,e):s?ht.createElement(e,{is:s}):ht.createElement(e);return e==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:e=>ht.createTextNode(e),createComment:e=>ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,n,i,l){const r=s?s.previousSibling:t.lastChild;if(i&&(i===l||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),s),!(i===l||!(i=i.nextSibling)););else{ji.innerHTML=Ir(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const o=ji.content;if(n==="svg"||n==="mathml"){const a=o.firstChild;for(;a.firstChild;)o.appendChild(a.firstChild);o.removeChild(a)}t.insertBefore(o,s)}return[r?r.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},xt="transition",as="animation",Is=Symbol("_vtc"),Pr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ka=ye({},Wl,Pr),Ha=e=>(e.displayName="Transition",e.props=ka,e),Va=Ha((e,{slots:t})=>ii(Fo,Ka(e),t)),Mt=(e,t=[])=>{k(e)?e.forEach(s=>s(...t)):e&&e(...t)},Oi=e=>e?k(e)?e.some(t=>t.length>1):e.length>1:!1;function Ka(e){const t={};for(const N in e)N in Pr||(t[N]=e[N]);if(e.css===!1)return t;const{name:s="v",type:n,duration:i,enterFromClass:l=`${s}-enter-from`,enterActiveClass:r=`${s}-enter-active`,enterToClass:o=`${s}-enter-to`,appearFromClass:a=l,appearActiveClass:f=r,appearToClass:c=o,leaveFromClass:u=`${s}-leave-from`,leaveActiveClass:h=`${s}-leave-active`,leaveToClass:_=`${s}-leave-to`}=e,I=Wa(i),x=I&&I[0],M=I&&I[1],{onBeforeEnter:P,onEnter:C,onEnterCancelled:$,onLeave:j,onLeaveCancelled:G,onBeforeAppear:Q=P,onAppear:J=C,onAppearCancelled:Ae=$}=t,H=(N,te,Ee,Ue)=>{N._enterCancelled=Ue,$t(N,te?c:o),$t(N,te?f:r),Ee&&Ee()},X=(N,te)=>{N._isLeaving=!1,$t(N,u),$t(N,_),$t(N,h),te&&te()},oe=N=>(te,Ee)=>{const Ue=N?J:C,_e=()=>H(te,N,Ee);Mt(Ue,[te,_e]),Mi(()=>{$t(te,N?a:l),ft(te,N?c:o),Oi(Ue)||$i(te,n,x,_e)})};return ye(t,{onBeforeEnter(N){Mt(P,[N]),ft(N,l),ft(N,r)},onBeforeAppear(N){Mt(Q,[N]),ft(N,a),ft(N,f)},onEnter:oe(!1),onAppear:oe(!0),onLeave(N,te){N._isLeaving=!0;const Ee=()=>X(N,te);ft(N,u),N._enterCancelled?(ft(N,h),Li(N)):(Li(N),ft(N,h)),Mi(()=>{N._isLeaving&&($t(N,u),ft(N,_),Oi(j)||$i(N,n,M,Ee))}),Mt(j,[N,Ee])},onEnterCancelled(N){H(N,!1,void 0,!0),Mt($,[N])},onAppearCancelled(N){H(N,!0,void 0,!0),Mt(Ae,[N])},onLeaveCancelled(N){X(N),Mt(G,[N])}})}function Wa(e){if(e==null)return null;if(re(e))return[gn(e.enter),gn(e.leave)];{const t=gn(e);return[t,t]}}function gn(e){return Xr(e)}function ft(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e[Is]||(e[Is]=new Set)).add(t)}function $t(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const s=e[Is];s&&(s.delete(t),s.size||(e[Is]=void 0))}function Mi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ga=0;function $i(e,t,s,n){const i=e._endId=++Ga,l=()=>{i===e._endId&&n()};if(s!=null)return setTimeout(l,s);const{type:r,timeout:o,propCount:a}=qa(e,t);if(!r)return n();const f=r+"end";let c=0;const u=()=>{e.removeEventListener(f,h),l()},h=_=>{_.target===e&&++c>=a&&u()};setTimeout(()=>{c<a&&u()},o+1),e.addEventListener(f,h)}function qa(e,t){const s=window.getComputedStyle(e),n=I=>(s[I]||"").split(", "),i=n(`${xt}Delay`),l=n(`${xt}Duration`),r=Ni(i,l),o=n(`${as}Delay`),a=n(`${as}Duration`),f=Ni(o,a);let c=null,u=0,h=0;t===xt?r>0&&(c=xt,u=r,h=l.length):t===as?f>0&&(c=as,u=f,h=a.length):(u=Math.max(r,f),c=u>0?r>f?xt:as:null,h=c?c===xt?l.length:a.length:0);const _=c===xt&&/\b(?:transform|all)(?:,|$)/.test(n(`${xt}Property`).toString());return{type:c,timeout:u,propCount:h,hasTransform:_}}function Ni(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((s,n)=>Di(s)+Di(e[n])))}function Di(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Li(e){return(e?e.ownerDocument:document).body.offsetHeight}function Xa(e,t,s){const n=e[Is];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const Ui=Symbol("_vod"),za=Symbol("_vsh"),Ja=Symbol(""),Qa=/(?:^|;)\s*display\s*:/;function Ya(e,t,s){const n=e.style,i=he(s);let l=!1;if(s&&!i){if(t)if(he(t))for(const r of t.split(";")){const o=r.slice(0,r.indexOf(":")).trim();s[o]==null&&Ls(n,o,"")}else for(const r in t)s[r]==null&&Ls(n,r,"");for(const r in s)r==="display"&&(l=!0),Ls(n,r,s[r])}else if(i){if(t!==s){const r=n[Ja];r&&(s+=";"+r),n.cssText=s,l=Qa.test(s)}}else t&&e.removeAttribute("style");Ui in e&&(e[Ui]=l?n.display:"",e[za]&&(n.display="none"))}const Bi=/\s*!important$/;function Ls(e,t,s){if(k(s))s.forEach(n=>Ls(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=Za(e,t);Bi.test(s)?e.setProperty(Ft(n),s.replace(Bi,""),"important"):e[n]=s}}const Fi=["Webkit","Moz","ms"],vn={};function Za(e,t){const s=vn[t];if(s)return s;let n=Me(t);if(n!=="filter"&&n in e)return vn[t]=n;n=Js(n);for(let i=0;i<Fi.length;i++){const l=Fi[i]+n;if(l in e)return vn[t]=l}return t}const ki="http://www.w3.org/1999/xlink";function Hi(e,t,s,n,i,l=eo(t)){n&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(ki,t.slice(6,t.length)):e.setAttributeNS(ki,t,s):s==null||l&&!gl(s)?e.removeAttribute(t):e.setAttribute(t,l?"":at(s)?String(s):s)}function Vi(e,t,s,n,i){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?Ir(s):s);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const o=l==="OPTION"?e.getAttribute("value")||"":e.value,a=s==null?e.type==="checkbox"?"on":"":String(s);(o!==a||!("_value"in e))&&(e.value=a),s==null&&e.removeAttribute(t),e._value=s;return}let r=!1;if(s===""||s==null){const o=typeof e[t];o==="boolean"?s=gl(s):s==null&&o==="string"?(s="",r=!0):o==="number"&&(s=0,r=!0)}try{e[t]=s}catch{}r&&e.removeAttribute(i||t)}function ec(e,t,s,n){e.addEventListener(t,s,n)}function tc(e,t,s,n){e.removeEventListener(t,s,n)}const Ki=Symbol("_vei");function sc(e,t,s,n,i=null){const l=e[Ki]||(e[Ki]={}),r=l[t];if(n&&r)r.value=n;else{const[o,a]=nc(t);if(n){const f=l[t]=rc(n,i);ec(e,o,f,a)}else r&&(tc(e,o,r,a),l[t]=void 0)}}const Wi=/(?:Once|Passive|Capture)$/;function nc(e){let t;if(Wi.test(e)){t={};let n;for(;n=e.match(Wi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ft(e.slice(2)),t]}let bn=0;const ic=Promise.resolve(),lc=()=>bn||(ic.then(()=>bn=0),bn=Date.now());function rc(e,t){const s=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=s.attached)return;Xe(oc(n,s.value),t,5,[n])};return s.value=e,s.attached=lc(),s}function oc(e,t){if(k(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>i=>!i._stopped&&n&&n(i))}else return t}const Gi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ac=(e,t,s,n,i,l)=>{const r=i==="svg";t==="class"?Xa(e,n,r):t==="style"?Ya(e,s,n):qs(t)?Xs(t)||sc(e,t,s,n,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):cc(e,t,n,r))?(Vi(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Hi(e,t,n,r,l,t!=="value")):e._isVueCE&&(uc(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!he(n)))?Vi(e,Me(t),n,l,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Hi(e,t,n,r))};function cc(e,t,s,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Gi(t)&&W(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Gi(t)&&he(s)?!1:t in e}function uc(e,t){const s=e._def.props;if(!s)return!1;const n=Me(t);return Array.isArray(s)?s.some(i=>Me(i)===n):Object.keys(s).some(i=>Me(i)===n)}const pc=["ctrl","shift","alt","meta"],fc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>pc.some(s=>e[`${s}Key`]&&!t.includes(s))},qi=(e,t)=>{if(!e)return e;const s=e._withMods||(e._withMods={}),n=t.join(".");return s[n]||(s[n]=((i,...l)=>{for(let r=0;r<t.length;r++){const o=fc[t[r]];if(o&&o(i,t))return}return e(i,...l)}))},dc=ye({patchProp:ac},Fa);let Xi;function hc(){return Xi||(Xi=ba(dc))}const _c=((...e)=>{const t=hc().createApp(...e),{mount:s}=t;return t.mount=n=>{const i=gc(n);if(!i)return;const l=t._component;!W(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=s(i,!1,mc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},t});function mc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function gc(e){return he(e)?document.querySelector(e):e}const Wt=typeof document<"u";function wr(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function vc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&wr(e.default)}const ne=Object.assign;function yn(e,t){const s={};for(const n in t){const i=t[n];s[n]=ze(i)?i.map(e):e(i)}return s}const vs=()=>{},ze=Array.isArray;function zi(e,t){const s={};for(const n in e)s[n]=n in t?t[n]:e[n];return s}let de=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Rr=Symbol("");de.MATCHER_NOT_FOUND+"",de.NAVIGATION_GUARD_REDIRECT+"",de.NAVIGATION_ABORTED+"",de.NAVIGATION_CANCELLED+"",de.NAVIGATION_DUPLICATED+"";function es(e,t){return ne(new Error,{type:e,[Rr]:!0},t)}function dt(e,t){return e instanceof Error&&Rr in e&&(t==null||!!(e.type&t))}const bc=["params","query","hash"];function yc(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const s of bc)s in e&&(t[s]=e[s]);return JSON.stringify(t,null,2)}const Ac=Symbol(""),Ji=Symbol(""),li=Symbol(""),ri=Symbol(""),Dn=Symbol("");function Tr(e){return ot(ri)}const jr=/#/g,Ec=/&/g,xc=/\//g,Cc=/=/g,Sc=/\?/g,Or=/\+/g,Ic=/%5B/g,Pc=/%5D/g,Mr=/%5E/g,wc=/%60/g,$r=/%7B/g,Rc=/%7C/g,Nr=/%7D/g,Tc=/%20/g;function oi(e){return e==null?"":encodeURI(""+e).replace(Rc,"|").replace(Ic,"[").replace(Pc,"]")}function jc(e){return oi(e).replace($r,"{").replace(Nr,"}").replace(Mr,"^")}function Ln(e){return oi(e).replace(Or,"%2B").replace(Tc,"+").replace(jr,"%23").replace(Ec,"%26").replace(wc,"`").replace($r,"{").replace(Nr,"}").replace(Mr,"^")}function Oc(e){return Ln(e).replace(Cc,"%3D")}function Mc(e){return oi(e).replace(jr,"%23").replace(Sc,"%3F")}function $c(e){return Mc(e).replace(xc,"%2F")}function Ps(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Nc=/\/$/,Dc=e=>e.replace(Nc,"");function An(e,t,s="/"){let n,i={},l="",r="";const o=t.indexOf("#");let a=t.indexOf("?");return a=o>=0&&a>o?-1:a,a>=0&&(n=t.slice(0,a),l=t.slice(a,o>0?o:t.length),i=e(l.slice(1))),o>=0&&(n=n||t.slice(0,o),r=t.slice(o,t.length)),n=Fc(n??t,s),{fullPath:n+l+r,path:n,query:i,hash:Ps(r)}}function Lc(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function Qi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Uc(e,t,s){const n=t.matched.length-1,i=s.matched.length-1;return n>-1&&n===i&&ts(t.matched[n],s.matched[i])&&Dr(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function ts(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Dr(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var s in e)if(!Bc(e[s],t[s]))return!1;return!0}function Bc(e,t){return ze(e)?Yi(e,t):ze(t)?Yi(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function Yi(e,t){return ze(t)?e.length===t.length&&e.every((s,n)=>s===t[n]):e.length===1&&e[0]===t}function Fc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),n=e.split("/"),i=n[n.length-1];(i===".."||i===".")&&n.push("");let l=s.length-1,r,o;for(r=0;r<n.length;r++)if(o=n[r],o!==".")if(o==="..")l>1&&l--;else break;return s.slice(0,l).join("/")+"/"+n.slice(r).join("/")}const Ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Un=(function(e){return e.pop="pop",e.push="push",e})({}),En=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function kc(e){if(!e)if(Wt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Dc(e)}const Hc=/^[^#]+#/;function Vc(e,t){return e.replace(Hc,"#")+t}function Kc(e,t){const s=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-s.left-(t.left||0),top:n.top-s.top-(t.top||0)}}const rn=()=>({left:window.scrollX,top:window.scrollY});function Wc(e){let t;if("el"in e){const s=e.el,n=typeof s=="string"&&s.startsWith("#"),i=typeof s=="string"?n?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!i)return;t=Kc(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Zi(e,t){return(history.state?history.state.position-t:-1)+e}const Bn=new Map;function Gc(e,t){Bn.set(e,t)}function qc(e){const t=Bn.get(e);return Bn.delete(e),t}function Xc(e){return typeof e=="string"||e&&typeof e=="object"}function Lr(e){return typeof e=="string"||typeof e=="symbol"}function zc(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<s.length;++n){const i=s[n].replace(Or," "),l=i.indexOf("="),r=Ps(l<0?i:i.slice(0,l)),o=l<0?null:Ps(i.slice(l+1));if(r in t){let a=t[r];ze(a)||(a=t[r]=[a]),a.push(o)}else t[r]=o}return t}function el(e){let t="";for(let s in e){const n=e[s];if(s=Oc(s),n==null){n!==void 0&&(t+=(t.length?"&":"")+s);continue}(ze(n)?n.map(i=>i&&Ln(i)):[n&&Ln(n)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+s,i!=null&&(t+="="+i))})}return t}function Jc(e){const t={};for(const s in e){const n=e[s];n!==void 0&&(t[s]=ze(n)?n.map(i=>i==null?null:""+i):n==null?n:""+n)}return t}function cs(){let e=[];function t(n){return e.push(n),()=>{const i=e.indexOf(n);i>-1&&e.splice(i,1)}}function s(){e=[]}return{add:t,list:()=>e.slice(),reset:s}}function It(e,t,s,n,i,l=r=>r()){const r=n&&(n.enterCallbacks[i]=n.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const f=h=>{h===!1?a(es(de.NAVIGATION_ABORTED,{from:s,to:t})):h instanceof Error?a(h):Xc(h)?a(es(de.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(r&&n.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=l(()=>e.call(n&&n.instances[i],t,s,f));let u=Promise.resolve(c);e.length<3&&(u=u.then(f)),u.catch(h=>a(h))})}function xn(e,t,s,n,i=l=>l()){const l=[];for(const r of e)for(const o in r.components){let a=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(wr(a)){const f=(a.__vccOpts||a)[t];f&&l.push(It(f,s,n,r,o,i))}else{let f=a();l.push(()=>f.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${o}" at "${r.path}"`);const u=vc(c)?c.default:c;r.mods[o]=c,r.components[o]=u;const h=(u.__vccOpts||u)[t];return h&&It(h,s,n,r,o,i)()}))}}return l}function Qc(e,t){const s=[],n=[],i=[],l=Math.max(t.matched.length,e.matched.length);for(let r=0;r<l;r++){const o=t.matched[r];o&&(e.matched.find(f=>ts(f,o))?n.push(o):s.push(o));const a=e.matched[r];a&&(t.matched.find(f=>ts(f,a))||i.push(a))}return[s,n,i]}let Yc=()=>location.protocol+"//"+location.host;function Ur(e,t){const{pathname:s,search:n,hash:i}=t,l=e.indexOf("#");if(l>-1){let r=i.includes(e.slice(l))?e.slice(l).length:1,o=i.slice(r);return o[0]!=="/"&&(o="/"+o),Qi(o,"")}return Qi(s,e)+n+i}function Zc(e,t,s,n){let i=[],l=[],r=null;const o=({state:h})=>{const _=Ur(e,location),I=s.value,x=t.value;let M=0;if(h){if(s.value=_,t.value=h,r&&r===I){r=null;return}M=x?h.position-x.position:0}else n(_);i.forEach(P=>{P(s.value,I,{delta:M,type:Un.pop,direction:M?M>0?En.forward:En.back:En.unknown})})};function a(){r=s.value}function f(h){i.push(h);const _=()=>{const I=i.indexOf(h);I>-1&&i.splice(I,1)};return l.push(_),_}function c(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ne({},h.state,{scroll:rn()}),"")}}function u(){for(const h of l)h();l=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:a,listen:f,destroy:u}}function tl(e,t,s,n=!1,i=!1){return{back:e,current:t,forward:s,replaced:n,position:window.history.length,scroll:i?rn():null}}function eu(e){const{history:t,location:s}=window,n={value:Ur(e,s)},i={value:t.state};i.value||l(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(a,f,c){const u=e.indexOf("#"),h=u>-1?(s.host&&document.querySelector("base")?e:e.slice(u))+a:Yc()+e+a;try{t[c?"replaceState":"pushState"](f,"",h),i.value=f}catch(_){console.error(_),s[c?"replace":"assign"](h)}}function r(a,f){l(a,ne({},t.state,tl(i.value.back,a,i.value.forward,!0),f,{position:i.value.position}),!0),n.value=a}function o(a,f){const c=ne({},i.value,t.state,{forward:a,scroll:rn()});l(c.current,c,!0),l(a,ne({},tl(n.value,a,null),{position:c.position+1},f),!1),n.value=a}return{location:n,state:i,push:o,replace:r}}function tu(e){e=kc(e);const t=eu(e),s=Zc(e,t.state,t.location,t.replace);function n(l,r=!0){r||s.pauseListeners(),history.go(l)}const i=ne({location:"",base:e,go:n,createHref:Vc.bind(null,e)},t,s);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function su(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),tu(e)}let Lt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var ve=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(ve||{});const nu={type:Lt.Static,value:""},iu=/[a-zA-Z0-9_]/;function lu(e){if(!e)return[[]];if(e==="/")return[[nu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(_){throw new Error(`ERR (${s})/"${f}": ${_}`)}let s=ve.Static,n=s;const i=[];let l;function r(){l&&i.push(l),l=[]}let o=0,a,f="",c="";function u(){f&&(s===ve.Static?l.push({type:Lt.Static,value:f}):s===ve.Param||s===ve.ParamRegExp||s===ve.ParamRegExpEnd?(l.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),l.push({type:Lt.Param,value:f,regexp:c,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=a}for(;o<e.length;){if(a=e[o++],a==="\\"&&s!==ve.ParamRegExp){n=s,s=ve.EscapeNext;continue}switch(s){case ve.Static:a==="/"?(f&&u(),r()):a===":"?(u(),s=ve.Param):h();break;case ve.EscapeNext:h(),s=n;break;case ve.Param:a==="("?s=ve.ParamRegExp:iu.test(a)?h():(u(),s=ve.Static,a!=="*"&&a!=="?"&&a!=="+"&&o--);break;case ve.ParamRegExp:a===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+a:s=ve.ParamRegExpEnd:c+=a;break;case ve.ParamRegExpEnd:u(),s=ve.Static,a!=="*"&&a!=="?"&&a!=="+"&&o--,c="";break;default:t("Unknown state");break}}return s===ve.ParamRegExp&&t(`Unfinished custom RegExp for param "${f}"`),u(),r(),i}const sl="[^/]+?",ru={sensitive:!1,strict:!1,start:!0,end:!0};var Re=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Re||{});const ou=/[.+*?^${}()[\]/\\]/g;function au(e,t){const s=ne({},ru,t),n=[];let i=s.start?"^":"";const l=[];for(const f of e){const c=f.length?[]:[Re.Root];s.strict&&!f.length&&(i+="/");for(let u=0;u<f.length;u++){const h=f[u];let _=Re.Segment+(s.sensitive?Re.BonusCaseSensitive:0);if(h.type===Lt.Static)u||(i+="/"),i+=h.value.replace(ou,"\\$&"),_+=Re.Static;else if(h.type===Lt.Param){const{value:I,repeatable:x,optional:M,regexp:P}=h;l.push({name:I,repeatable:x,optional:M});const C=P||sl;if(C!==sl){_+=Re.BonusCustomRegExp;try{new RegExp(`(${C})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${I}" (${C}): `+j.message)}}let $=x?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;u||($=M&&f.length<2?`(?:/${$})`:"/"+$),M&&($+="?"),i+=$,_+=Re.Dynamic,M&&(_+=Re.BonusOptional),x&&(_+=Re.BonusRepeatable),C===".*"&&(_+=Re.BonusWildcard)}c.push(_)}n.push(c)}if(s.strict&&s.end){const f=n.length-1;n[f][n[f].length-1]+=Re.BonusStrict}s.strict||(i+="/?"),s.end?i+="$":s.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const r=new RegExp(i,s.sensitive?"":"i");function o(f){const c=f.match(r),u={};if(!c)return null;for(let h=1;h<c.length;h++){const _=c[h]||"",I=l[h-1];u[I.name]=_&&I.repeatable?_.split("/"):_}return u}function a(f){let c="",u=!1;for(const h of e){(!u||!c.endsWith("/"))&&(c+="/"),u=!1;for(const _ of h)if(_.type===Lt.Static)c+=_.value;else if(_.type===Lt.Param){const{value:I,repeatable:x,optional:M}=_,P=I in f?f[I]:"";if(ze(P)&&!x)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const C=ze(P)?P.join("/"):P;if(!C)if(M)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):u=!0);else throw new Error(`Missing required param "${I}"`);c+=C}}return c||"/"}return{re:r,score:n,keys:l,parse:o,stringify:a}}function cu(e,t){let s=0;for(;s<e.length&&s<t.length;){const n=t[s]-e[s];if(n)return n;s++}return e.length<t.length?e.length===1&&e[0]===Re.Static+Re.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Re.Static+Re.Segment?1:-1:0}function Br(e,t){let s=0;const n=e.score,i=t.score;for(;s<n.length&&s<i.length;){const l=cu(n[s],i[s]);if(l)return l;s++}if(Math.abs(i.length-n.length)===1){if(nl(n))return 1;if(nl(i))return-1}return i.length-n.length}function nl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const uu={strict:!1,end:!0,sensitive:!1};function pu(e,t,s){const n=au(lu(e.path),s),i=ne(n,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function fu(e,t){const s=[],n=new Map;t=zi(uu,t);function i(u){return n.get(u)}function l(u,h,_){const I=!_,x=ll(u);x.aliasOf=_&&_.record;const M=zi(t,u),P=[x];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const G of j)P.push(ll(ne({},x,{components:_?_.record.components:x.components,path:G,aliasOf:_?_.record:x})))}let C,$;for(const j of P){const{path:G}=j;if(h&&G[0]!=="/"){const Q=h.record.path,J=Q[Q.length-1]==="/"?"":"/";j.path=h.record.path+(G&&J+G)}if(C=pu(j,h,M),_?_.alias.push(C):($=$||C,$!==C&&$.alias.push(C),I&&u.name&&!rl(C)&&r(u.name)),Fr(C)&&a(C),x.children){const Q=x.children;for(let J=0;J<Q.length;J++)l(Q[J],C,_&&_.children[J])}_=_||C}return $?()=>{r($)}:vs}function r(u){if(Lr(u)){const h=n.get(u);h&&(n.delete(u),s.splice(s.indexOf(h),1),h.children.forEach(r),h.alias.forEach(r))}else{const h=s.indexOf(u);h>-1&&(s.splice(h,1),u.record.name&&n.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function o(){return s}function a(u){const h=_u(u,s);s.splice(h,0,u),u.record.name&&!rl(u)&&n.set(u.record.name,u)}function f(u,h){let _,I={},x,M;if("name"in u&&u.name){if(_=n.get(u.name),!_)throw es(de.MATCHER_NOT_FOUND,{location:u});M=_.record.name,I=ne(il(h.params,_.keys.filter($=>!$.optional).concat(_.parent?_.parent.keys.filter($=>$.optional):[]).map($=>$.name)),u.params&&il(u.params,_.keys.map($=>$.name))),x=_.stringify(I)}else if(u.path!=null)x=u.path,_=s.find($=>$.re.test(x)),_&&(I=_.parse(x),M=_.record.name);else{if(_=h.name?n.get(h.name):s.find($=>$.re.test(h.path)),!_)throw es(de.MATCHER_NOT_FOUND,{location:u,currentLocation:h});M=_.record.name,I=ne({},h.params,u.params),x=_.stringify(I)}const P=[];let C=_;for(;C;)P.unshift(C.record),C=C.parent;return{name:M,path:x,params:I,matched:P,meta:hu(P)}}e.forEach(u=>l(u));function c(){s.length=0,n.clear()}return{addRoute:l,resolve:f,removeRoute:r,clearRoutes:c,getRoutes:o,getRecordMatcher:i}}function il(e,t){const s={};for(const n of t)n in e&&(s[n]=e[n]);return s}function ll(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:du(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function du(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const n in e.components)t[n]=typeof s=="object"?s[n]:s;return t}function rl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function hu(e){return e.reduce((t,s)=>ne(t,s.meta),{})}function _u(e,t){let s=0,n=t.length;for(;s!==n;){const l=s+n>>1;Br(e,t[l])<0?n=l:s=l+1}const i=mu(e);return i&&(n=t.lastIndexOf(i,n-1)),n}function mu(e){let t=e;for(;t=t.parent;)if(Fr(t)&&Br(e,t)===0)return t}function Fr({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ol(e){const t=ot(li),s=ot(ri),n=Oe(()=>{const a=Ce(e.to);return t.resolve(a)}),i=Oe(()=>{const{matched:a}=n.value,{length:f}=a,c=a[f-1],u=s.matched;if(!c||!u.length)return-1;const h=u.findIndex(ts.bind(null,c));if(h>-1)return h;const _=al(a[f-2]);return f>1&&al(c)===_&&u[u.length-1].path!==_?u.findIndex(ts.bind(null,a[f-2])):h}),l=Oe(()=>i.value>-1&&yu(s.params,n.value.params)),r=Oe(()=>i.value>-1&&i.value===s.matched.length-1&&Dr(s.params,n.value.params));function o(a={}){if(bu(a)){const f=t[Ce(e.replace)?"replace":"push"](Ce(e.to)).catch(vs);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:n,href:Oe(()=>n.value.href),isActive:l,isExactActive:r,navigate:o}}function gu(e){return e.length===1?e[0]:e}const vu=Jl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ol,setup(e,{slots:t}){const s=Zs(ol(e)),{options:n}=ot(li),i=Oe(()=>({[cl(e.activeClass,n.linkActiveClass,"router-link-active")]:s.isActive,[cl(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const l=t.default&&gu(t.default(s));return e.custom?l:ii("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:i.value},l)}}}),Gt=vu;function bu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function yu(e,t){for(const s in t){const n=t[s],i=e[s];if(typeof n=="string"){if(n!==i)return!1}else if(!ze(i)||i.length!==n.length||n.some((l,r)=>l.valueOf()!==i[r].valueOf()))return!1}return!0}function al(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const cl=(e,t,s)=>e??t??s,Au=Jl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const n=ot(Dn),i=Oe(()=>e.route||n.value),l=ot(Ji,0),r=Oe(()=>{let f=Ce(l);const{matched:c}=i.value;let u;for(;(u=c[f])&&!u.components;)f++;return f}),o=Oe(()=>i.value.matched[r.value]);$s(Ji,Oe(()=>r.value+1)),$s(Ac,o),$s(Dn,i);const a=Ke();return Jt(()=>[a.value,o.value,e.name],([f,c,u],[h,_,I])=>{c&&(c.instances[u]=f,_&&_!==c&&f&&f===h&&(c.leaveGuards.size||(c.leaveGuards=_.leaveGuards),c.updateGuards.size||(c.updateGuards=_.updateGuards))),f&&c&&(!_||!ts(c,_)||!h)&&(c.enterCallbacks[u]||[]).forEach(x=>x(f))},{flush:"post"}),()=>{const f=i.value,c=e.name,u=o.value,h=u&&u.components[c];if(!h)return ul(s.default,{Component:h,route:f});const _=u.props[c],I=_?_===!0?f.params:typeof _=="function"?_(f):_:null,M=ii(h,ne({},I,t,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(u.instances[c]=null)},ref:a}));return ul(s.default,{Component:M,route:f})||M}}});function ul(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const Eu=Au;function xu(e){const t=fu(e.routes,e),s=e.parseQuery||zc,n=e.stringifyQuery||el,i=e.history,l=cs(),r=cs(),o=cs(),a=Co(Ct);let f=Ct;Wt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=yn.bind(null,y=>""+y),u=yn.bind(null,$c),h=yn.bind(null,Ps);function _(y,D){let T,L;return Lr(y)?(T=t.getRecordMatcher(y),L=D):L=y,t.addRoute(L,T)}function I(y){const D=t.getRecordMatcher(y);D&&t.removeRoute(D)}function x(){return t.getRoutes().map(y=>y.record)}function M(y){return!!t.getRecordMatcher(y)}function P(y,D){if(D=ne({},D||a.value),typeof y=="string"){const m=An(s,y,D.path),v=t.resolve({path:m.path},D),A=i.createHref(m.fullPath);return ne(m,v,{params:h(v.params),hash:Ps(m.hash),redirectedFrom:void 0,href:A})}let T;if(y.path!=null)T=ne({},y,{path:An(s,y.path,D.path).path});else{const m=ne({},y.params);for(const v in m)m[v]==null&&delete m[v];T=ne({},y,{params:u(m)}),D.params=u(D.params)}const L=t.resolve(T,D),z=y.hash||"";L.params=c(h(L.params));const p=Lc(n,ne({},y,{hash:jc(z),path:L.path})),d=i.createHref(p);return ne({fullPath:p,hash:z,query:n===el?Jc(y.query):y.query||{}},L,{redirectedFrom:void 0,href:d})}function C(y){return typeof y=="string"?An(s,y,a.value.path):ne({},y)}function $(y,D){if(f!==y)return es(de.NAVIGATION_CANCELLED,{from:D,to:y})}function j(y){return J(y)}function G(y){return j(ne(C(y),{replace:!0}))}function Q(y,D){const T=y.matched[y.matched.length-1];if(T&&T.redirect){const{redirect:L}=T;let z=typeof L=="function"?L(y,D):L;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=C(z):{path:z},z.params={}),ne({query:y.query,hash:y.hash,params:z.path!=null?{}:y.params},z)}}function J(y,D){const T=f=P(y),L=a.value,z=y.state,p=y.force,d=y.replace===!0,m=Q(T,L);if(m)return J(ne(C(m),{state:typeof m=="object"?ne({},z,m.state):z,force:p,replace:d}),D||T);const v=T;v.redirectedFrom=D;let A;return!p&&Uc(n,L,T)&&(A=es(de.NAVIGATION_DUPLICATED,{to:v,from:L}),Je(L,L,!0,!1)),(A?Promise.resolve(A):X(v,L)).catch(b=>dt(b)?dt(b,de.NAVIGATION_GUARD_REDIRECT)?b:Et(b):se(b,v,L)).then(b=>{if(b){if(dt(b,de.NAVIGATION_GUARD_REDIRECT))return J(ne({replace:d},C(b.to),{state:typeof b.to=="object"?ne({},z,b.to.state):z,force:p}),D||v)}else b=N(v,L,!0,d,z);return oe(v,L,b),b})}function Ae(y,D){const T=$(y,D);return T?Promise.reject(T):Promise.resolve()}function H(y){const D=Ht.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(y):y()}function X(y,D){let T;const[L,z,p]=Qc(y,D);T=xn(L.reverse(),"beforeRouteLeave",y,D);for(const m of L)m.leaveGuards.forEach(v=>{T.push(It(v,y,D))});const d=Ae.bind(null,y,D);return T.push(d),ke(T).then(()=>{T=[];for(const m of l.list())T.push(It(m,y,D));return T.push(d),ke(T)}).then(()=>{T=xn(z,"beforeRouteUpdate",y,D);for(const m of z)m.updateGuards.forEach(v=>{T.push(It(v,y,D))});return T.push(d),ke(T)}).then(()=>{T=[];for(const m of p)if(m.beforeEnter)if(ze(m.beforeEnter))for(const v of m.beforeEnter)T.push(It(v,y,D));else T.push(It(m.beforeEnter,y,D));return T.push(d),ke(T)}).then(()=>(y.matched.forEach(m=>m.enterCallbacks={}),T=xn(p,"beforeRouteEnter",y,D,H),T.push(d),ke(T))).then(()=>{T=[];for(const m of r.list())T.push(It(m,y,D));return T.push(d),ke(T)}).catch(m=>dt(m,de.NAVIGATION_CANCELLED)?m:Promise.reject(m))}function oe(y,D,T){o.list().forEach(L=>H(()=>L(y,D,T)))}function N(y,D,T,L,z){const p=$(y,D);if(p)return p;const d=D===Ct,m=Wt?history.state:{};T&&(L||d?i.replace(y.fullPath,ne({scroll:d&&m&&m.scroll},z)):i.push(y.fullPath,z)),a.value=y,Je(y,D,T,d),Et()}let te;function Ee(){te||(te=i.listen((y,D,T)=>{if(!Tt.listening)return;const L=P(y),z=Q(L,Tt.currentRoute.value);if(z){J(ne(z,{replace:!0,force:!0}),L).catch(vs);return}f=L;const p=a.value;Wt&&Gc(Zi(p.fullPath,T.delta),rn()),X(L,p).catch(d=>dt(d,de.NAVIGATION_ABORTED|de.NAVIGATION_CANCELLED)?d:dt(d,de.NAVIGATION_GUARD_REDIRECT)?(J(ne(C(d.to),{force:!0}),L).then(m=>{dt(m,de.NAVIGATION_ABORTED|de.NAVIGATION_DUPLICATED)&&!T.delta&&T.type===Un.pop&&i.go(-1,!1)}).catch(vs),Promise.reject()):(T.delta&&i.go(-T.delta,!1),se(d,L,p))).then(d=>{d=d||N(L,p,!1),d&&(T.delta&&!dt(d,de.NAVIGATION_CANCELLED)?i.go(-T.delta,!1):T.type===Un.pop&&dt(d,de.NAVIGATION_ABORTED|de.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),oe(L,p,d)}).catch(vs)}))}let Ue=cs(),_e=cs(),ae;function se(y,D,T){Et(y);const L=_e.list();return L.length?L.forEach(z=>z(y,D,T)):console.error(y),Promise.reject(y)}function ut(){return ae&&a.value!==Ct?Promise.resolve():new Promise((y,D)=>{Ue.add([y,D])})}function Et(y){return ae||(ae=!y,Ee(),Ue.list().forEach(([D,T])=>y?T(y):D()),Ue.reset()),y}function Je(y,D,T,L){const{scrollBehavior:z}=e;if(!Wt||!z)return Promise.resolve();const p=!T&&qc(Zi(y.fullPath,0))||(L||!T)&&history.state&&history.state.scroll||null;return Fs().then(()=>z(y,D,p)).then(d=>d&&Wc(d)).catch(d=>se(d,y,D))}const $e=y=>i.go(y);let kt;const Ht=new Set,Tt={currentRoute:a,listening:!0,addRoute:_,removeRoute:I,clearRoutes:t.clearRoutes,hasRoute:M,getRoutes:x,resolve:P,options:e,push:j,replace:G,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:l.add,beforeResolve:r.add,afterEach:o.add,onError:_e.add,isReady:ut,install(y){y.component("RouterLink",Gt),y.component("RouterView",Eu),y.config.globalProperties.$router=Tt,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Ce(a)}),Wt&&!kt&&a.value===Ct&&(kt=!0,j(i.location).catch(L=>{}));const D={};for(const L in Ct)Object.defineProperty(D,L,{get:()=>a.value[L],enumerable:!0});y.provide(li,Tt),y.provide(ri,$l(D)),y.provide(Dn,a);const T=y.unmount;Ht.add(y),y.unmount=function(){Ht.delete(y),Ht.size<1&&(f=Ct,te&&te(),te=null,a.value=Ct,kt=!1,ae=!1),T()}}};function ke(y){return y.reduce((D,T)=>D.then(()=>H(T)),Promise.resolve())}return Tt}const Cu={class:"header"},Su={class:"container header__inner"},Iu=["aria-expanded"],Pu={__name:"Header",setup(e){const t=Ke(!1),s=()=>{t.value=!t.value},n=()=>{t.value=!1};return Jt(t,i=>{document.body.style.overflow=i?"hidden":""}),(i,l)=>(B(),K("header",Cu,[g("div",Su,[q(Ce(Gt),{to:"/",class:"header__logo",onClick:n},{default:me(()=>[...l[0]||(l[0]=[Le(" Nomis ",-1)])]),_:1}),g("nav",{class:ct(["header__nav",{"header__nav--open":t.value}])},[q(Ce(Gt),{to:"/",class:"header__nav-link",onClick:n},{default:me(()=>[...l[1]||(l[1]=[Le("Home",-1)])]),_:1}),q(Ce(Gt),{to:"/projects",class:"header__nav-link",onClick:n},{default:me(()=>[...l[2]||(l[2]=[Le("Projects",-1)])]),_:1}),q(Ce(Gt),{to:"/leadership",class:"header__nav-link",onClick:n},{default:me(()=>[...l[3]||(l[3]=[Le("Leadership",-1)])]),_:1}),q(Ce(Gt),{to:"/about",class:"header__nav-link",onClick:n},{default:me(()=>[...l[4]||(l[4]=[Le("About",-1)])]),_:1}),g("a",{href:"/resume.pdf",target:"_blank",class:"header__nav-link header__nav-link--resume",onClick:n},"Resume")],2),g("button",{class:ct(["header__hamburger",{"header__hamburger--open":t.value}]),onClick:s,"aria-expanded":t.value},[...l[5]||(l[5]=[g("span",null,null,-1),g("span",null,null,-1),g("span",null,null,-1)])],10,Iu)])]))}},on=(e,t)=>{const s=e.__vccOpts||e;for(const[n,i]of t)s[n]=i;return s},wu={},Ru={class:"footer"};function Tu(e,t){return B(),K("footer",Ru,[...t[0]||(t[0]=[g("div",{class:"container footer__inner"},[g("p",{class:"footer__copy"},"© 2026 Nomis. All rights reserved."),g("a",{href:"mailto:nomis820710@gmail.com",class:"footer__email"},"nomis820710@gmail.com")],-1)])])}const ju=on(wu,[["render",Tu]]),Ou={__name:"BackToTop",setup(e){const t=Ke(!1),s=()=>{t.value=window.scrollY>400},n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return ss(()=>window.addEventListener("scroll",s)),ns(()=>window.removeEventListener("scroll",s)),(i,l)=>(B(),K("button",{class:ct(["back-to-top",{"back-to-top--visible":t.value}]),onClick:n,"aria-label":"回到頂部"},[...l[0]||(l[0]=[g("i",{class:"fa-solid fa-arrow-up"},null,-1)])],2))}},Mu={__name:"App",setup(e){return(t,s)=>{const n=is("RouterView");return B(),K(le,null,[q(Pu),g("main",null,[q(n,null,{default:me(({Component:i})=>[q(Va,{name:"fade",mode:"out-in"},{default:me(()=>[(B(),wt(Qo(i)))]),_:2},1024)]),_:1})]),q(ju),q(Ou)],64)}}},$u=on(Mu,[["__scopeId","data-v-91c92250"]]),Nu="/portfolio/images/general/hero-photo.jpg",Du="/portfolio/images/general/avatar-chen.jpg",Lu="/portfolio/images/general/avatar-liao.jpg";function gt(e){return"/portfolio/"+e.replace(/^\//,"")}const Uu={class:"project-card__cover"},Bu=["src","alt"],Fu={class:"project-card__body"},ku={class:"project-card__hashtags"},Hu={class:"project-card__title"},Vu={class:"project-card__desc"},Ku={class:"project-card__tags"},kr={__name:"ProjectCard",props:{project:{type:Object,required:!0}},setup(e){return(t,s)=>{const n=is("RouterLink");return B(),wt(n,{to:`/projects/${e.project.id}`,class:"project-card"},{default:me(()=>[g("div",Uu,[g("img",{src:Ce(gt)(e.project.cover),alt:e.project.title},null,8,Bu)]),g("div",Fu,[g("div",ku,[(B(!0),K(le,null,be(e.project.hashtags,i=>(B(),K("span",{key:i,class:"project-card__hashtag"}," #"+Z(i),1))),128))]),g("h3",Hu,Z(e.project.title),1),g("p",Vu,Z(e.project.description),1),g("div",Ku,[(B(!0),K(le,null,be(e.project.tags,i=>(B(),K("span",{key:i,class:"project-card__tag"},Z(i),1))),128))])]),s[0]||(s[0]=g("div",{class:"project-card__cta"}," 查看專案 → ",-1))]),_:1},8,["to"])}}},bs=[{id:"elementary-king-ai-mv",title:"成本降低 99.7%：一人 15 天用 AI 完成傳統團隊 120 萬的動畫 MV",description:"公司尾牙業務表揚大會需要造勢影片，我在無預算、無團隊、無動畫背景的條件下，自主規劃 12 階段 AI 製作流程，獨立完成一部含 6 個角色的 3D 動畫 MV。影片現場引爆掌聲，董事長當場轉發集團主管群，並直接促成公司全面導入 AI 工具的決策。",cover:"/images/projects/project-3.jpg",hashtags:["AI-Native Workflow","跨職能執行力","ROI 極大化"],tags:["AI","Cross-functional"],category:["ai"],content:`
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
      <div class="pd-info__item">
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
        <span class="pd-info__value">2026.01.05 – 2026.02.10（實際工作天約 15 天）</span>
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

    <p>往年的慣例是製作小短劇，將產品特點融入演出，雖然有效，但形式已漸趨老套。我不想重複這條路，一方面是認為演戲形式已讓人審美疲乏，另一方面，我判斷有機會用更有衝擊力的方式呈現「小學王五代」即將上線的產品價值。</p>

    <p>然而，這個任務的執行難度遠超表面：「我同時肩負著所有尾牙輸出物的設計統籌、多位長官的簡報製作、既有數位產品開發進度的把關，以及各種突發需求的協調處理」。可用的時間極度壓縮，更沒有任何額外預算或專職人力可以動用。</p>

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

    <p>這個設定意味著，我必須在整部影片中同時控制 6 個視覺形象高度具體的角色，且涵蓋真人與動畫兩種截然不同的視覺風格。而這 5 個 IP 人物最原始的素材，僅有一張 2D 向量美術圖，沒有任何多角度設定。</p>

    <p>為了從根本解決角色一致性問題，我參照傳統動畫製作中「角色設定表」的概念，系統性地建立了完整的角色視覺資料庫：</p>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">步驟一：IP 多角度視圖生成</span>
        <p>利用 Nano Banana Pro 將 5 位 2D IP 生成偽 3D 多角度視圖，涵蓋正面、側面、背面、45 度正側面、45 度背側面、仰角、俯角等完整角度。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">步驟二：真人小女孩形象建立</span>
        <p>生成「視覺年齡 10 歲的台灣小女孩」形象，逐步修調細節至滿意，再將真人版本轉換為 3D 動畫風格，確保兩種形象之間的視覺連貫性。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">步驟三：豐富表情素材庫</span>
        <p>針對所有角色生成至少 12 種表情變化，包含喜、怒、哀、樂等完整情緒光譜，建立後續影片合成所需的完整素材庫。</p>
      </div>
    </div>

    <p>傳統做法中，設計師處理每個表情動作平均需要 1–2 天；這套流程讓我在極短時間內產出了完整的角色設定素材，這是 15 天完成專案的關鍵前提。</p>

    <h3>關鍵轉折：燒掉 2 萬點數換來的方法論</h3>

    <p>專案初期，我嘗試直接將 IP 形象丟入 AI 影片模型，以文字指令描述動作與場景，期望一步到位產出影片素材。結果失敗率極高——生成的影片中，角色形象嚴重失真，點數卻以每次 1,000 點的速度快速消耗。</p>

    <p>公司的 Freepik 訂閱方案每年提供 21 萬 AI 生成點數，專案開始前僅剩約 15 萬。在前期實驗階段，我就燒掉了 2 萬點，系統顯示已用點數突破 8 萬的那一刻，我意識到：<strong>若不改變方法，點數燒光時影片還沒做完。</strong></p>

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

    <p>這套流程最終產出了約 1,000 張精美分鏡圖，作為後續影片生成的視覺底稿。</p>

    <h3>影片生成、音樂製作與最終剪輯</h3>

    <p>以 Kling O1 模型將靜態分鏡圖轉換為動態影像，共生成 131 支短影片素材，篩選後保留 24 支精華片段進入最終剪輯。歌詞部分以 ChatGPT 輔助撰寫，音樂則透過 Suno 生成，並與影片進行節奏對位、轉場處理與調色，最終輸出約 2 分鐘的完整動畫 MV。</p>

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
          <li>這個專案讓我真實驗證了「AI 可以跨越專業邊界」這件事——我完全不具備 3D 建模、IP 識別設計、詞曲創作的背景，卻能獨立產出一部包含這些元素的動畫 MV，大幅提升了我在 AI 時代的自信心與執行底氣。</li>
          <li>從「給 AI 指令越單純成功率越高」到「前製資產越豐富生成品質越穩定」，我在這個專案中建立了一套可複用的 AI-Native 工作方法論。</li>
          <li>我開始將 AI 視為策略夥伴而非工具——把想法丟給它激盪、讓它延伸與修正，再由人做最終的判斷與把關。面對充滿挑戰的任務，我不再畏懼，而是視之為驗證新方法的機會。</li>
        </ul>
      </div>
    </div>
  `},{id:"ai-smartbag-learning-report",title:"從數據羅列到數據洞察：重新設計 K12 家長的三維度學習報告",description:"前一版學習報告被大主管打槍，原因是日、週、月三份報告只差在時間範圍，本質上只是數據的重複堆疊。我接手後，借鑑數據分析師的思維切入，系統性梳理所有可用數據素材，設計出三種截然不同的敘事邏輯——讓日報告說執行細節、週報告說行為洞察、月報告說成長故事。最終成為 AI 智能書包主打亮點功能，有效解決家長痛點，成為業務銷售的關鍵說服工具。",cover:"/images/projects/project-1.jpg",hashtags:["數據洞察設計","資訊架構","跨角色協作"],tags:["UIUX","Cross-functional","Information Architecture"],category:["uiux"],content:`
    <!-- 角色資訊 -->
    <div class="pd-info">
      <div class="pd-info__item">
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
        <span class="pd-info__value">2023.11 – 2024.01（約 15 個工作天）</span>
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

    <p>由於我在前一個專案「學習目標」中的表現受到肯定，PM 與設計主管將這個棘手的案子交給我重新接手。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-report/old-version.jpg" alt="前一版學習報告 UI，三個維度呈現相似的數據結構" />

    <!-- 設計過程 -->
    <h2>設計過程</h2>

    <h3>洞察一：借鑑數據分析師思維，找到問題的根</h3>

    <p>我先與 PM 和設計主管進行專案交接訪談，了解前一版被否定的來龍去脈與會議討論紀錄。這次我沒有另外訪談業務，因為需求來源相當直接：大主管本身就是家長身份，他對功能的期待，就是最真實的使用者需求。</p>

    <p>破題的靈感，來自我在社群上偶然看到的一個數據分析師案例。他在研究一組客訴數據時發現：「80% 的客訴，其實來自同一位客人」。這個故事讓我理解，<strong>數據真正的價值不在於「呈現」，而在於「洞察」</strong>——從數字背後找到真正重要的訊息。我把這個思維直接套用到學習報告的設計上，立刻看見了舊版的問題所在：「它缺少的不是數據，而是數據被詮釋之後的意義」。</p>

    <h3>洞察二：系統性盤點素材，在限制中找到可能性</h3>

    <p>有了方向之後，我在 FigJam 展開了一張大型梳理表格，將所有可能的數據面向逐一列出，包含：孩子資料切換、計劃進度與執行率、今日／本週／本月動態、學習趨勢、對孩子的觀察與建議、個人特質觀察……等超過十個面向，並用表格標記每個數據在「日、週、月」三個維度中是否適合呈現。</p>

    <p>與此同時，我主動與研發工程師逐一確認現有 API 能提供哪些數據，以及哪些交叉運算在技術上可行。由於我有前端開發的學習背景，我能夠理解數據結構與 API 的運作邏輯，讓我在設計早期就清楚知道「哪些想法做得到、哪些需要協調」，而不是設計出無法實作的方案。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-report/figjam-mapping.jpg" alt="FigJam 數據面向梳理表格，橫軸為日週月維度，縱軸為各數據類型" />

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

    <p>初版 wireframe 將「課程觀看」與「答題數據（隨堂練習 + 考卷測驗）」分成兩個獨立區塊。但我意識到，在「學習目標」的計劃邏輯中，每一個學習單元本來就包含知識點影片、隨堂練習與考卷測驗，它們對應的是同一個學習範圍。若分開呈現，家長會看到同樣的課程名稱出現兩次，反而造成困惑。因此我在 Final 版中將其合而為一，以學習單元為主軸，整合所有對應數據。</p>

    <p>日報告同時引入四種學習標籤：延遲學習、當日學習、提前學習、額外學習，讓家長一眼就能理解孩子的學習行為是否符合計劃節奏。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-report/day-report.jpg" alt="日報告最終 Wireframe，學習單元整合觀看數據與測驗數據，並標示四種學習標籤" />

    <h3>週報告：以角色屬性為洞察增添溫度</h3>

    <p>原本規劃的「黃金學習時間」圖表（折線圖 + 瀑布圖），在與研發團隊協調後因開發複雜度過高而暫緩。為了不讓週報告的洞察深度因此打折，我引入了「學習目標」功能中已有的角色屬性系統——佛系學生、勤奮學子、資優菁英、天才學霸——依據孩子本週的學習投入程度自動對應，為冰冷的時數數據加入一層有趣的人格標籤，讓家長在看數字的同時，也能感受到孩子學習狀態的整體氛圍。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-report/week-report.jpg" alt="週報告最終 Wireframe，包含學習計劃達成率、全國比較圖、學習內容細項與角色屬性標籤" />

    <h3>月報告：多維圖表呈現成長軌跡</h3>

    <p>月報告以「孩子這個月有沒有真正成長」為敘事核心，整合了環形圖、雷達圖、圓餅圖與堆疊長條圖等多種視覺化形式，讓各面向的數據以最直觀的方式被理解。每個圖表背後都有對應的洞察文字，說明數據代表的意義，而非讓家長自己解讀數字。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-report/month-report.jpg" alt="月報告最終 Wireframe，包含學習目標達成率、PR 值、科目雷達圖、知識點圓餅圖與考卷成長分析" />

    <h3>帶有溫度的建議文案</h3>

    <p>報告中所有的「觀察與建議」文字，全部由我自行定義。我先梳理出各種數據條件的組合情境——例如計劃達成率偏低、成績出現退步、強弱科差距擴大——再為每種情境撰寫對應的洞察語句，並制定文案口吻規則，交由工程師實作為條件判斷邏輯，讓系統在不同數據狀態下自動帶入對應的建議文字。</p>

    <p>這套規則的撰寫，借助了我過去人資工作的背景——我熟悉如何將評估結果轉化為帶有正向、鼓勵語氣的溝通語言，確保家長在任何情境下收到的都是有溫度的洞察，而不是制式化的數字堆疊。</p>

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
  `},{id:"ai-smartbag-learning-goal",title:"客服需求降低 80%：從數據出發，重新定義 K12 學生的 AI 學習目標設定體驗",description:"舊版學習計劃操作繁瑣、精準度不足，且高度依賴客服人工協助。我透過業務訪談與後台數據分析，挖掘出「學生每日平均觀看影片僅 22 分鐘」的關鍵洞察，設計出以目標為導向的三步驟 AI 快速建立路徑，讓 90% 的學生選擇使用，並大幅釋放客服人力。",cover:"/images/projects/project-2.jpg",hashtags:["數據驅動設計","產品思維","系統複雜度化簡"],tags:["UIUX","AI","Cross-functional","Information Architecture"],category:["uiux","ai"],content:`
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
      <div class="pd-info__item">
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
        <span class="pd-info__value">2023.11 – 2023.12（約三週）</span>
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

    <p>除此之外，新功能還面臨一個概念層次的根本挑戰：我們希望將學生的思維模式從「先因後果（我要補哪個章節）」翻轉為「倒果為因（我的目標是什麼，AI 幫我規劃）」——這不只是操作流程的改變，而是整個心智模型的重新建立。</p>

    <!-- 設計過程 -->
    <h2>設計過程</h2>

    <h3>洞察一：雙線研究，同步摸清邊界</h3>

    <p>我從兩條線同步展開研究：一方面訪談業務團隊，因為他們長期負責售後服務，是距離學生需求與家長期待最近的人；另一方面，我與研發工程師逐一確認所有相關的資料結構與 API，包含既有的與開發週期內可實作的。</p>

    <p>擁有資料結構與資訊架構的背景，讓我在設計初期就能清楚掌握「系統能做什麼」的邊界，避免設計出無法實作的方案。</p>

    <h3>洞察二：22 分鐘，讓計劃從紙上談兵變得可執行</h3>

    <p>從後台數據分析中，我發現一個關鍵洞察：80% 的學生每天觀看影片的時間平均僅有 22 分鐘。這個數字雖然看似普通，卻成為整個設計的核心依據——它回答了「一個合理、可執行的學習計劃，究竟應該安排多少內容」這個問題。</p>

    <p>基於此洞察，學習計劃的時間估算全部以影片時長為準，並預設每日學習時間下限為 20 分鐘，讓系統生成的計劃貼近學生的真實學習行為，而非空洞的理想目標。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-goal/wireframe.jpg" alt="學習目標功能 Wireframe 草稿" />

    <h3>關鍵轉折：從「進階設定」到「快速建立」</h3>

    <p>設計初期，我先完整梳理了功能邏輯較複雜的「進階設定」路徑——讓學生可以自由選擇任意知識點影片加入計劃。然而在第一次專案會議中，主管提出了一個關鍵提醒：「功能應該要讓使用者覺得好用，而不是越來越複雜。」</p>

    <p>當下我感到有些挫折，但在重新梳理思路後，我意識到這個順序其實有其必要性：必須先把最複雜的邏輯搞清楚，才能知道哪些可以被簡化、哪些是不可或缺的核心。這個反思讓我更有把握地設計出「三步驟快速建立」路徑，並讓兩條路徑各自服務不同的使用者類型：</p>

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

    <p>學生設定每週哪幾天可以讀書、每次讀書多久，系統即時計算每週學習總時數，並對應顯示四種「角色屬性」：佛系學生、勤奮學子、資優菁英、天才學霸。這個設計除了讓計劃安排有所依據，也透過角色標籤帶來被動激勵效果，讓學生意識到自己投入的程度，進而產生想要更努力的動力。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-goal/step1-pace-fosystem.jpg" alt="學習步調設定 - 佛系學生狀態" />
    <img src="/portfolio/images/projects/ai-smartbag-learning-goal/step1-pace-genius.jpg" alt="學習步調設定 - 天才學霸狀態" />

    <h3>步驟二：學習目標選擇</h3>

    <p>對應課層架構第二層「領域」，同時也對應學生的購買授權範圍，僅顯示已購買的選項。為了讓選擇更貼近學生的真實學習動機，我將生硬的產品名稱重新以文案包裝，例如將「108 課綱全科」包裝為「穩健札實的基礎學程」、「會考 A++ 追分計劃」包裝為「全局掌握的大考戰略」，讓選項從系統語言轉化為學生語言。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-goal/step2-goal.jpg" alt="學習目標選擇畫面，含文案包裝的五種領域選項" />

    <h3>步驟三：學習科目選擇</h3>

    <p>同樣依授權範圍動態顯示可選科目，學生可複選，畫面設計簡潔清晰，降低選擇負擔。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-goal/step3-subject.jpg" alt="學習科目選擇畫面" />

    <h3>計劃預覽：日曆模式與週曆模式</h3>

    <p>三步驟完成後，AI 自動生成學習計劃，學生可切換「只看單日」（週曆模式，顯示每日的知識點影片列表）或「一次看全部」（月曆模式，鳥瞰整體計劃分佈）。計劃上方同時顯示「已安排時數」與「本日預計學習時數」，讓執行狀況一目了然。</p>

    <img src="/portfolio/images/projects/ai-smartbag-learning-goal/preview-day.jpg" alt="計劃預覽 - 週曆模式（一次看一天）" />
    <img src="/portfolio/images/projects/ai-smartbag-learning-goal/preview-all.jpg" alt="計劃預覽 - 月曆模式（一次看全部）" />

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
          <li>這是我第一次深刻體會到資訊架構與資料層級對 UIUX 設計的決定性影響——設計師若能掌握這層知識，可以在設計早期就避免走冤枉路。</li>
          <li>透過這個專案，我更清楚如何在商業限制、技術邊界與使用者體驗之間取得平衡，並將其轉化為對使用者有價值的設計決策。</li>
        </ul>
      </div>
    </div>
  `},{id:"ai-smartbag-edu-psych-quiz",title:"用研究方法做設計：從 30+ 篇文獻到 64 種結果的 K12 教育心理測驗",description:"「適性報告」需要一個讓學生真正投入的心理測驗，我在識別版權與高授權成本的風險後，以教育心理學背景主動切入，研究 30+ 篇文獻、融合兩套學習風格理論，設計出兼具科學性與故事沉浸感的測驗體驗，獲得「默默就做完了」的高完成度回饋。",cover:"/images/projects/project-3.jpg",hashtags:["研究驅動設計","沉浸式體驗","跨職能主導"],tags:["UIUX","Research","AI","Cross-functional","Frontend"],category:["uiux"],content:`
    <!-- 角色資訊 -->
    <div class="pd-info">
      <div class="pd-info__item">
        <span class="pd-info__label">公司</span>
        <span class="pd-info__value">三貝德數位文創股份有限公司</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">產品</span>
        <span class="pd-info__value">AI 智能書包 — 教育心理測驗（App 內 Landing Page）</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">職稱</span>
        <span class="pd-info__value">UIUX Designer（跨 PM 協助、指揮協作設計師）</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">時間</span>
        <span class="pd-info__value">2024.01 – 2024.05（共 51 個工作天）</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">負責範圍</span>
        <span class="pd-info__value">UX 研究、文獻分析、題目設計與改編、A/B 預試、Wireframe、Prototype、切版與動態特效實作</span>
      </div>
    </div>

    <!-- 體驗連結 -->
    <p>你可以直接進入測驗體驗：</p>
    <a
      href="https://ai100.com.tw/EduPsyQuiz/MySuperPower"
      target="_blank"
      style="display: inline-block; margin-top: 8px; padding: 10px 24px; background: linear-gradient(135deg, #6C63FF, #3ECFCF); color: #fff; border-radius: 8px; font-weight: bold; text-decoration: none; letter-spacing: 0.05em;">
      → 探索我的學習超能力
    </a>

    <!-- 背景與挑戰 -->
    <h2>背景與挑戰</h2>

    <p>「教育心理測驗」是 AI 智能書包「學習分析」模組下「適性報告」功能的核心子功能。適性報告原本只有「科目表現」這個偏靜態的學習分析頁面，PM 認為僅靠強、弱科數據，難以真正吸引學生主動探索自己的學習風格，因此提出加入一個互動式心理測驗的構想，讓「適性報告」這個功能真正活起來。</p>

    <p>這個專案從 0 到 1，以 App 內 Landing Page 的形式呈現，主要服務對象是 K12 學生。由於 PM 工作量已滿，設計部連續第三次承接了跨 PM 的全權主導任務，而這次是我第一次同時擔任設計規劃者與協作指揮者的雙重角色——除了獨立完成所有 UX 研究與切版實作，也負責帶領另一位設計師 Aimee 分工完成視覺美術設定。</p>

    <img src="/portfolio/images/projects/ai-smartbag-edu-psych-quiz/cover-intro.jpg" alt="教育心理測驗前導頁封面，主視覺為宇宙星球場景，標題「探索我的學習超能力」，底部有動態「即刻啟程」按鈕" />

    <!-- 設計過程 -->
    <h2>設計過程</h2>

    <h3>洞察一：識別風險，從授權死路轉向文獻自研</h3>

    <p>PM 最初詢問具有心理系背景的我，是否有合適的現成測驗可以直接使用。我確實找到了一份相當符合 K12 受眾需求的工具——「學習適應量表（增訂版）」——但在評估後，我主動向 PM 提出暫緩：「正式心理測驗通常受版權保護，在未授權的狀況下放進產品，可能引發法律風險；加上授權費用會直接墊高開發成本，這條路在商業上並不划算」。</p>

    <p>識別風險之後，我想到了另一條路：我在大學期間受過量化與質化的教育研究方法訓練，寫過小論文，教育心理學正是我熟悉的領域。<strong>走文獻自研這條路，不僅完全免費，也能確保測驗的學術嚴謹性——這對一個教育產業的品牌來說，是不可輕忽的信任基礎。</strong></p>

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

    <p>我原本確定以 Kolb 理論為主，但在提案時主管提出了更高期待：<strong>「測驗結果至少要有 8 種，最好能到 16 種。」</strong>面對這個挑戰，我沒有降低學術標準去硬拆 Kolb 的四種結果，而是重新審視三套理論的組合可能性——這才靈光一閃：</p>

    <p>若將 Kolb（4 種人格）× Felder-Soloman（16 種特質組合）加以整合，測驗結果的理論上限可達 <strong>64 種</strong>——完全超出主管的期待，且每一種結果都有紮實的學術根據支撐。</p>

    <img src="/portfolio/images/projects/ai-smartbag-edu-psych-quiz/theory-comparison.jpg" alt="Kolb 與 Felder-Soloman 理論對照圖，展示四大學習偏好面向與人格類型的對應關係" />

    <h3>關鍵挑戰：56 題變 22 題，生硬題目變故事情境</h3>

    <p>兩套理論加總原有 56 道題目（Kolb 12 題 + Felder-Soloman 44 題），直接使用根本不可行——題目太多、語言太生硬，連成人受測者都覺得難以回答，更何況是 K12 學生。我們的目標是將測驗時間控制在 5～10 分鐘內。</p>

    <p>為了做出有依據的題目精簡，我逐題分析每道題目對應的測驗面向與計分邏輯，理解哪些題目可以在不影響信、效度的前提下合併或刪減。最終將題目壓縮至 22 題：Kolb 保留 10 題、Felder-Soloman 保留 12 題。</p>

    <p>與此同時，我決定將題目全面改編為故事情境題，融入 PM 最初規劃的 App IP「曼特」的宇宙世界觀——這個舉動讓 PM 非常感動，她說沒想到我如此在意她最初的故事設定，並用如此有溫度的方式將它延伸出去。改編過程中，我以原始題目與曼特世界觀為素材，借助 ChatGPT 進行初版融合，再由我與 Aimee 分別負責上、下半部的內容調整與潤稿。</p>

    <h3>A/B 預試：用研究方法驗證設計決策</h3>

    <p>兩套理論的原始選項格式不同——Kolb 每題 4 個選項，Felder-Soloman 每題 2 個選項。若直接混用，受測者在答題過程中會感受到明顯的體驗斷層。為了解決這個問題，我設計了一次內部 A/B 預試：</p>

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

    <p>測驗入口的主視覺以「曼特宇宙」為主題，呈現充滿星球與星雲的深宇宙場景，標題「探索我的學習超能力」以大字呈現，底部的「即刻啟程」按鈕是整個頁面最耗費工程量的細節——我將按鈕拆解為多層圖層疊合，運用 GSAP 動態特效套件，搭配 CSS Filter 與自定義 Animation，做出旋轉光環、發光脈衝等複合動態效果，讓學生在點擊之前就能感受到這個測驗的沉浸感。</p>

    <h3>測驗結果頁：64 種結果，每一種都有靈魂</h3>

    <p>測驗完成後，學生會看到一張完整的結果卡，呈現他們的學習人格角色名稱、專屬 hashtag、人格描述，以及「學習超能力雷達圖」、「適合從事領域」、「專注學習場所」、「學習效率小物」、「曼特宇宙生存指南」等多個維度的個人化洞察。</p>

    <p>四種 Kolb 人格角色各自配有一張以機械手為造型基底的賽博龐克風格插圖，這是 Aimee 在角色形象卡關許久後想到的解法——由於 App IP「曼特」本身是非人物形象，以「手」作為角色基底，既呼應了 IP 精神，又能快速延伸出四種截然不同的角色個性，大幅降低了插圖的製作成本與時程壓力。</p>

    <img src="/portfolio/images/projects/ai-smartbag-edu-psych-quiz/result-screenshot.jpg" alt="測驗結果頁 App 截圖，呈現「時空穿越者」角色卡，包含人格描述、雷達圖與學習建議" />

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

    <img src="/portfolio/images/projects/ai-smartbag-edu-psych-quiz/result-characters.jpg" alt="四種學習人格角色卡並排，從左至右：引力操控師、賽博策畫師、時空穿越者、機械建構者，各自配有賽博龐克風格機械手插圖" />

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
          <li>這是我第一次在設計專案中擔任協作指揮者的角色——負責將腦中天馬行空的世界觀梳理成清楚的設計方向，再傳遞給 Aimee，讓她能進入我的思考框架並延伸執行。這個過程讓我深刻體會到，不同設計職能之間的 1 + 1 > 2 化學反應，並非理所當然，而是需要清晰的溝通與信任才能實現。</li>
          <li>這個專案也是我第一次將教育心理學的學術背景完整應用在設計決策中——從文獻選題、理論評估、題目改編到預試驗證，走完了一套完整的研究驅動設計流程，讓我更確信：跨領域的知識積累，是設計師在複雜問題中找到突破口的核心競爭力。</li>
        </ul>
      </div>
    </div>
  `},{id:"ai-smartbag-epub-production",title:"1,780 份 EPUB：用設計系統與 Excel 工具，讓不可能的量產任務成真",description:"2,130 份紙本教材需轉型為 EPUB 流式排版，手動處理一份需耗費一至兩天，在緊湊時程下幾乎不可能完成。我主動暫停手邊工作，自主研發一套 HTML/CSS 設計系統與 Excel 半自動化轉譯工具，將工讀生的產出速度提升至每日 4～5 份，讓這個原本瀕臨廢棄的專案重新看見曙光。",cover:"/images/projects/project-1.jpg",hashtags:["設計系統","流程工程化","工具開發"],tags:["Frontend","Cross-functional"],category:["frontend"],content:`
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
      <div class="pd-info__item">
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
        <span class="pd-info__value">2023.10 – 2025.12（約兩年兩個月）</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">負責範圍</span>
        <span class="pd-info__value">HTML/CSS 設計系統開發、Excel 半自動化工具開發、工讀生工作流程規劃與協作</span>
      </div>
    </div>

    <!-- 背景與挑戰 -->
    <h2>背景與挑戰</h2>

    <p>2023 年 9 月，公司計畫將 K12 國中與高中共 2130 份紙本教材，全面轉型為流式排版的 EPUB 格式，以符合跨載體閱讀需求，並作為 AI 智能書包數位教材模組的核心內容基礎。</p>

    <p>然而，這個任務面臨一個結構性困境：「公司內部唯一具備技術能力的研發部門，人力必須全數投入產品開發；編輯部門缺乏 HTML/CSS 技術背景，無法自行處理 EPUB 的程式碼結構」。於是，任務在 2023 年 10 月落到了設計部，由我與另一位設計師 Claudia 共同承接。</p>

    <p>EPUB 本身是以 HTML + CSS 為底層結構的格式。理論上，由設計師來處理是可行的——但現實遠比預期複雜。編輯部提供的 InDesign 檔案，因圖層命名或其他因素，由設計師 Aimee 轉出的 EPUB 再拆解為 HTML 後，結構幾乎全部都是亂碼：「CSS 選擇器清一色是無意義的中文命名，有序清單充斥著罕見字亂碼，根本無從辨識規律」。</p>

    <p>在這樣的狀況下，處理一份 EPUB 需要耗費我們 1 到 1.5 天的時間。換算下來，2,130 份教材若全靠人工逐一處理，不僅時程根本來不及，雙人作業也會因各自對排版的判斷略有差異，導致最終成果難以維持視覺一致性。</p>

    <img src="/portfolio/images/projects/ai-smartbag-epub-production/chaos-html.jpg" alt="原始 EPUB 拆解後的 HTML 結構，充斥中文命名的 CSS 選擇器與亂碼" />

    <!-- 設計過程 -->
    <h2>設計過程</h2>

    <h3>洞察一：受不了亂碼，決定從源頭建立秩序</h3>

    <p>在與 Claudia 持續埋頭處理亂碼的過程中，我越來越清楚地意識到：「這樣下去不是辦法」。問題的根本不在於我們處理得不夠努力，而在於我們缺少一套讓所有人都能依循的規則與標準。</p>

    <p>轉機來自一個上午的地毯式研究。我把各科目的紙本教材通通翻過一遍，逐一記錄編輯部美編人員在排版上的處理邏輯，試圖從中找出跨科目、跨單元的共通結構。這次研究讓我確認了一件事：「教材雖然內容各異，但排版元素其實有規律可循——段落的主次層級、圖片與文字的對應關係、有序與無序清單的呈現方式，背後都有一套可以被定義的邏輯」。</p>

    <p>帶著這個洞察，我向設計主管提出了一個大膽的請求：「請給我一個禮拜的時間，讓我先停下手邊的 EPUB 製作，專注開發一套共用的 EPUB 公版設計系統。」主管對這個想法抱持著鼓勵嘗試的態度，當下便同意讓我放下既有排程，全力投入。</p>

    <h3>洞察二：用前端設計系統思維，重建 EPUB 的底層結構</h3>

    <p>接下來的一週，我從頭建立了一套完整的 EPUB 設計系統。</p>

    <p>在 HTML 架構上，我以巢狀結構區分段落的主從層級，讓每一份教材的語意結構都能被清楚對應。在 CSS 上，我將樣式拆分為三支各司其職的檔案：</p>

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

    <h3>關鍵突破：Excel 半自動化轉譯工具</h3>

    <p>設計系統建立後，我面對的下一個問題是：「即使有了標準的 HTML 結構，要讓沒有深度前端經驗的夥伴，或工讀生正確手寫 HTML，依然是一道不小的門檻」。</p>

    <p>這時，我想到了過去在工作中練就的 Excel 函式能力。我著手開發了一套「<strong>Excel 半自動化轉譯工具</strong>」：製作者只需將純文字內容依照段落主次，依序貼入對應欄位，再透過簡單的下拉選單選擇內容類型（如標題層級、有序/無序清單、圖片標注），Excel 就會自動透過函式邏輯，在右側欄位即時組出符合設計系統規範的完整 HTML 語法。製作者只需複製輸出結果，貼入 VS Code 即可完成一份結構正確、樣式一致的 EPUB 頁面。</p>

    <p>這套工具同時解決了原本讓我們最頭痛的亂碼有序清單問題——題目與選項的結構邏輯，也全部被納入工具的自動組合範疇內。</p>

    <img src="/portfolio/images/projects/ai-smartbag-epub-production/excel-tool.jpg" alt="Excel 半自動化轉譯工具介面，左側為純文字輸入欄位，右側即時產出對應的 HTML 語法" />

    <p>一週後，工具完成。設計主管看到成果的當下說：「天啊！我看到希望了！」</p>

    <h3>流程建立：工讀生招募與協作規劃</h3>
 
    <p>有了設計系統與工具，下一步是將這套流程擴充為可持續運作的產能機制。這一階段，我同時扮演了三個角色：知識整理者、流程設計者，以及招募規劃者。</p>
 
    <p>首先，我在 Notion 建立了一套完整的操作規範文件，涵蓋 HTML 結構規則、CSS 命名慣例、Excel 工具使用說明，以及各科目常見排版情境的處理方式。這份文件的目標不只是讓工讀生能夠上手，更是讓這套知識技能能夠在公司內部沉澱下來、持續流傳——即便製作人員異動，整套系統依然能夠穩定運作。</p>
 
    <p>在招募環節，我發揮了過去在人資工作累積的經驗，主動協助規劃工讀生的工作內容描述、技能需求條件，以及面試評估方式，確保招募到的人選具備足夠的基礎前端能力，能夠在這套工具輔助下獨立作業，而不需要耗費大量時間培訓。</p>
 
    <p>最終招募到兩位工讀生，每位平均每天可完成 4 至 5 份 EPUB，相較於過去手動處理的效率提升了 4 到 5 倍以上。</p>

    <img src="/portfolio/images/projects/ai-smartbag-epub-production/notion-guide.jpg" alt="Notion 操作指引文件，供工讀生參照使用 Excel 工具與 VS Code 完成 EPUB 製作" />

    <!-- 最終成果 -->
    <h2>最終成果</h2>

    <p>截至 2025 年 12 月底與工讀生的合作結束為止，團隊共完成了 2130 份中的 1780 份 EPUB 轉製。受限於公司政策調整，剩餘部分目前暫緩處理，但整體專案已從「幾乎不可能在時程內完成」推進至「超過八成完成」的階段。</p>

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
        <p>在教育出版領域，將含有大量圖片、表格與複雜段落結構的 K12 教材，全面轉型為流式排版的 EPUB，本身即是一項不小的創舉——圖片必須隨段落流動而非作為裝飾，這對排版系統的設計要求遠比文學類出版物更高。</p>
      </div>
    </div>

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
          <li>正是因為這套系統讓製作流程變得標準化、可複製，公司才真正看見將任務交由工讀生執行的可行性——也因此釋放了設計師的人力，讓設計師得以專注在更核心的產品設計工作上。</li>
          <li>Excel 工具與 Notion 操作指引的建立，讓工讀生能夠在最短學習曲線內上手作業，形成一套可持續擴充的製作流程，不再依賴個別成員的技術判斷。</li>
        </ul>
      </div>
      <div class="pd-impact__item">
        <span class="pd-impact__level">個人層面</span>
        <ul>
          <li>這是我第一次深刻體會到設計系統的真正價值——它不只是讓視覺一致，更是讓不同人在不同時間點，都能依循同一套標準做出品質穩定的成果。</li>
          <li>這個專案也讓我意識到，跨職涯的技術積累——從人資磨練出的 Excel 函式能力，到設計工作培養的前端直覺——在面對複雜挑戰時，往往能產生意想不到的組合力量。</li>
          <li>更重要的是，我第一次清楚地看見自己的行動力對團隊的直接影響：一個主動提出並獨立完成的工具，改變了整個團隊的工作模式，也讓一個幾乎要被放棄的任務重新看見了完成的可能。</li>
        </ul>
      </div>
    </div>
  `},{id:"bd-portal-demo-report",title:"顛覆 Form 表單的邊界：獨立主導業務銷售工具 Demo Report 的從 0 到 1 設計",description:"業務團隊用 Xmind 整理客戶學習資訊，但輸出只是一張圖，資料無法被系統收回再利用。我在 PM 資源幾乎缺席的情況下，獨立完成 UX 研究、UI 設計、Prototype 與切版，並透過業務銷售流程的深度研究，將原始需求從「心智圖系統」重新定位為陪伴業務完整銷售旅程的數位報告工具，更首創將 Form 表單與心智圖操作邏輯融合的後台設計，讓大主管直呼「從來沒想過 Form 表單可以做成這樣」。",cover:"/images/projects/project-2.jpg",hashtags:["研究驅動設計","產品重新定位","創新互動設計"],tags:["UIUX","Research","Frontend","Cross-functional"],category:["uiux","frontend"],content:`
    <!-- 角色資訊 -->
    <div class="pd-info">
      <div class="pd-info__item">
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
        <span class="pd-info__value">2023.08 – 2023.10（約 29 個工作天）</span>
      </div>
      <div class="pd-info__item">
        <span class="pd-info__label">負責範圍</span>
        <span class="pd-info__value">UX 研究、資訊架構、UI 設計、Prototype、前端切版（前台報告頁 + 後台 BD Portal 表單）</span>
      </div>
    </div>

    <!-- Prototype 連結 -->
    <p>你可以直接體驗互動原型：</p>
    <a
      href="https://www.figma.com/proto/0cmPO9ihERV9mXgZwB3TWV/Prototype---SCRM---Demo-Report-%E5%AD%B8%E7%BF%92%E9%81%A9%E6%80%A7%E5%A0%B1%E5%91%8A?node-id=1-4599&viewport=691%2C619%2C0.17&t=SPhAoeow8hCBJt7o-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A4599&page-id=1%3A4598"
      target="_blank"
      style="display: inline-block; margin-top: 8px; padding: 10px 24px; background: linear-gradient(135deg, #4f8ef7, #7c5ff7); color: #fff; border-radius: 8px; font-weight: bold; text-decoration: none; letter-spacing: 0.05em;">
      → 查看 Figma Prototype
    </a>

    <!-- 背景與挑戰 -->
    <h2>背景與挑戰</h2>

    <p>這個專案的起點，來自業務單位大主管向研發部提出的一個需求：「能不能在內部系統 BD Portal 裡，做一套心智圖系統，讓業務可以直接在系統中操作，把客戶的訪談資料保存下來？」</p>

    <p>業務團隊長期使用 Xmind 整理學生的學習狀況——強弱科分佈、學習斷點、補強建議——但這套做法有幾個根本限制：「每位業務的整理方式與視覺品質參差不齊，對家長呈現的專業感缺乏一致性；Xmind 輸出的只是一張圖，資料無法被系統收回再利用；資訊整理完後，也難以直接銜接到 BD Portal 的後續流程。」</p>

    <p>原始需求同時包含一個面向客戶的前台頁面——業務填入訪談內容後，系統自動產出一份學習適性報告，以連結形式傳送給家長。</p>

    <p>當時 PM（大主管）與代理 PM（設計主管）工作量均已滿載，專案的前期工作幾乎完全由我一人承擔。我從接到任務的第一刻就清楚：這是一個單人專案，從理解需求、研究使用者、規劃設計，到 UI 繪製與切版，必須全部自己扛。</p>

    <!-- 設計過程 -->
    <h2>設計過程</h2>

    <h3>洞察一：先用 5W1H 快速建立 Domain Know-How</h3>

    <p>接到專案時，我手上的資訊極為有限——只知道「要把 Xmind 放進 BD Portal」。面對資訊真空，我用 5W1H 框架快速梳理專案輪廓：使用者是誰（業務、家長、學生）、為什麼啟動這個專案（對內整合流程、對外提升品牌專業感）、在哪些時機點會使用（電訪、Demo、試讀）、產品出現在什麼載具上（Web + 手機，需考量 RWD）。這個過程讓我在沒有 PM 主動梳理需求的情況下，迅速建立起對這個專案的基本認識。</p>

    <h3>洞察二：訪談業務，發現心智圖有「生命週期」</h3>

    <p>為了更深入理解業務的實際工作方式，我主動邀請業務團隊核心成員進行訪談。這次訪談讓我發現了一個關鍵洞察：<strong>心智圖並不是一次性的產物，它跟著整個銷售流程在演化。</strong></p>

    <img src="/portfolio/images/projects/bd-portal-demo-report/sales-lifecycle.jpg" alt="業務銷售三階段示意圖：第一次接觸（電訪）、第二次接觸（Demo）、第三次接觸（試讀七天），心智圖在每個階段扮演不同角色" />

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

    <img src="/portfolio/images/projects/bd-portal-demo-report/research-matrix.jpg" alt="研究彙整表，從業務行為、接觸目標、聯繫時間、心智圖生命週期四個維度分析三個銷售階段，並標注四個關鍵設計洞察（紅字）" />

    <h3>關鍵轉折：從「心智圖系統」到「陪伴整個銷售旅程的數位報告」</h3>

    <p>這個生命週期的發現，讓我意識到 Demo Report 不應該只是把 Xmind 搬進系統——它應該在不同銷售階段，都能回應業務當下的需求，產生對應的商業價值。我從研究彙整表中提煉出四個直接影響後續設計的關鍵洞察：</p>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">「輔助業務介紹產品」→ 加入試讀帳號資訊、官方資源連結、顧問師的一段話</span>
        <p>在試讀階段，報告本身可以成為業務的替身。我在「體驗資訊」頁面加入試讀帳號、密碼與平台連結，讓家長能直接開始體驗產品；在「關於我們」頁面放上產品官網、社群媒體、客服電話等官方連結，讓家長在有疑問時能自行找到解答，不必每次都等業務回覆——降低業務的溝通負荷，同時提升家長的自助體驗。加上顧問師親筆的一段信，讓業務不在場時，這份報告仍能持續與客戶產生連結。</p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">「編排清晰、專業簡潔」＋「專屬感，可重複檢視」→ Landing Page 改為 Dashboard</span>
        <p>這個決定有一部分來自現實的推力：因為我視覺設計能力有限，初版 Landing Page 大量的空白填補不起來，整體視覺表現偏弱。而 Dashboard 的分頁結構，讓每個畫面聚焦單一主題，空白反而成為呼吸空間，視覺上自然合理；Tab 切換增加了互動與停留時間；對家長而言，這份可隨時回來查閱的專屬報告，也因此更有儀式感與可重複查閱的價值。<strong>這是一次把視覺設計的限制，轉化為對使用者更有價值的設計決策。</strong></p>
      </div>
      <div class="pd-callout__item">
        <span class="pd-callout__title">「允許空白欄位，取消必填」→ 後台表單全面取消必填限制</span>
        <p>業務在不同階段與客戶接觸的深度不同，並不是每次都能收集到完整資訊。強制必填反而會打斷業務的作業節奏。取消必填限制，讓業務在任何階段都能彈性填入當下掌握的資訊，隨著銷售推進再逐步補齊。</p>
      </div>
    </div>

    <h3>突破：顛覆 Form 表單的邊界</h3>

    <p>在後台 BD Portal 的設計上，我面臨了一個技術層面的根本限制：<strong>市面上的心智圖套件，無法將使用者填入的文字資料寫回系統</strong>——輸出的都是純圖片，資料無法被後端收回再利用，這讓「把心智圖放進系統」的原始需求在技術上根本無法實現。</p>

    <p>大主管看過初版表單後，認為欄位過多、介面太冗長，希望我縮減。他們預期的解法，大概是把一排 2 個 input 改成 4 個——更緊湊，但本質不變。</p>

    <p>我給出的答案，是完全不同的方向：<strong>把 Form 表單的編輯模式，做成心智圖的操作邏輯。</strong></p>

    <p>透過 Vue.js 的動態控制，我實現了點擊「+」可以新增子節點欄位、點擊「-」可以刪除的互動方式，讓整張表單的操作體驗貼近業務原本熟悉的 Xmind——但填入的每一筆資料，都能被系統結構化地收回儲存。這個設計同時解決了技術限制與操作體驗兩個問題，也讓設計主管與大主管都說出：「從來沒想過 Form 表單可以做成這樣！」</p>

    <img src="/portfolio/images/projects/bd-portal-demo-report/bdp-form.jpg" alt="BD Portal 後台表單，以心智圖節點結構呈現，每個層級可透過 +/- 按鈕動態新增或刪除欄位" />

    <h3>突發狀況：螢幕分享下的資訊安全問題</h3>

    <p>訪談中我發現，業務在進行 Demo 時，會將螢幕畫面即時分享給客戶同步觀看。這意味著，如果業務直接在 BD Portal 中填寫資料，客戶有可能看見內部系統的機密畫面。</p>

    <p>解法簡單而精準：將後台填寫頁面設定為以 <code>target="_blank"</code> 開啟新分頁，徹底將填寫介面與 BD Portal 主系統的畫面隔離。業務在分享螢幕時，只需確保前台報告頁在主視窗即可，內部系統資訊完全不會暴露。</p>

    <!-- 最終設計 -->
    <h2>最終設計</h2>

    <h3>前台：學習適性報告 Dashboard</h3>

    <p>最終的前台報告以 Dashboard 形式呈現，左側固定導覽列，右側主內容區依分頁切換，右欄常駐學生個人資訊與學習指標雷達圖，讓家長在任何頁面都能看到孩子的基本輪廓。</p>

    <img src="/portfolio/images/projects/bd-portal-demo-report/ui-v1-landing.jpg" alt="初版 Landing Page UI，一頁式設計，視覺留白過多，為後續改版提供對比" />

    <img src="/portfolio/images/projects/bd-portal-demo-report/ui-final-mindmap.jpg" alt="最終版 Dashboard — 心智圖表頁，主內容區呈現可縮放的互動式心智圖，右側常駐個人資訊與雷達圖" />

    <img src="/portfolio/images/projects/bd-portal-demo-report/ui-final-analysis.jpg" alt="最終版 Dashboard — 適性分析頁，呈現顧問師的發現與建議，分個人特質、時間運用、學習方式等維度" />

    <img src="/portfolio/images/projects/bd-portal-demo-report/ui-final-trial.jpg" alt="最終版 Dashboard — 體驗資訊頁，呈現試讀期間、試讀帳號、試讀密碼與立即體驗 CTA 按鈕" />

    <img src="/portfolio/images/projects/bd-portal-demo-report/ui-final-about.jpg" alt="最終版 Dashboard — 關於我們頁，呈現顧問師親筆信與產品官方連結、客服資訊" />

    <h3>後台：BD Portal 心智圖式表單</h3>

    <p>後台表單以心智圖節點結構組織所有填寫欄位，業務可依照銷售進度彈性填入，所有欄位均取消必填限制。點擊「+」新增子節點、點擊「-」刪除，操作邏輯與 Xmind 一脈相承，但每一筆填入的資料都能被系統結構化地收回儲存。</p>

    <img src="/portfolio/images/projects/bd-portal-demo-report/bdp-form-full.jpg" alt="BD Portal 後台心智圖式表單完整畫面，以節點展開結構呈現所有填寫欄位" />

    <!-- 最終成果 -->
    <h2>最終成果</h2>

    <p>Demo Report 成功落地上線，並在業務單位與副董層級獲得高度評價——設計主管在上線後主動回饋：「Demo Report 在業務單位和副董那邊的評價都很好。」這份肯定來自於它不只是一個更好看的心智圖，而是一套真正理解業務銷售流程後，重新定義的數位報告體驗。</p>

    <div class="pd-callout">
      <div class="pd-callout__item">
        <span class="pd-callout__title">超出原始需求的產品定位</span>
        <p>從「把心智圖放進系統」出發，最終交付的是一套能陪伴業務走完整個銷售旅程的數位工具——從電訪、Demo，到試讀期間的持續關懷，每個階段都有對應的設計支撐。</p>
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
          <li>專案結束後，我在設計雙週會中主動整理這次專案的完整歷程並進行分享，主題聚焦在「UX 研究如何影響 UI 設計決策」，獲得主管與同事的正面回饋。這次分享也促成了設計部內部更多平行經驗交流的可能性。</li>
        </ul>
      </div>
      <div class="pd-impact__item">
        <span class="pd-impact__level">個人層面</span>
        <ul>
          <li>這是我在這間公司第一個真正意義上獨立主導的專案——從理解模糊需求、主動發起使用者研究、重新定義產品定位，到 UI 設計與切版，完整走過一次從 0 到 1 的產品設計流程。</li>
          <li>這個專案讓我第一次深刻感受到：設計師可以不只是需求的執行者，而是透過研究與洞察，主動賦予產品更大價值的人。當我把「把心智圖放進系統」的需求，轉化為「陪伴業務走完整個銷售旅程的數位報告」時，我意識到這才是設計師真正能創造的影響力。</li>
          <li>我也學到了視覺設計限制不一定是障礙——當初版 Landing Page 的大量空白讓我陷入困境時，是使用者研究給了我改版的方向與底氣，讓我能把視覺上的缺點，轉化為對使用者更有價值的設計決策。</li>
        </ul>
      </div>
    </div>
  `}],Wu={__name:"HeroCanvas",setup(e){const t=Ke(null);let s=null;return ss(()=>{const n=t.value,i=n.getContext("2d"),l=()=>{n.width=n.offsetWidth,n.height=n.offsetHeight};l(),window.addEventListener("resize",l);const o=Array.from({length:80},()=>({x:Math.random()*n.width,y:Math.random()*n.height,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*2+1}));let a=0;const f=()=>{n.width=n.offsetWidth,n.height=n.offsetHeight;const c=n.width,u=n.height;i.clearRect(0,0,c,u),a+=.005;const h=(Math.sin(a)+1)/2,_=i.createRadialGradient(c*.15,u*.5,0,c*.15,u*.5,c*.55);_.addColorStop(0,`rgba(79,142,247,${.25+h*.12})`),_.addColorStop(1,"transparent"),i.fillStyle=_,i.fillRect(0,0,c,u);const I=i.createRadialGradient(c*.85,u*.2,0,c*.85,u*.2,c*.45);I.addColorStop(0,`rgba(124,95,247,${.15+h*.1})`),I.addColorStop(1,"transparent"),i.fillStyle=I,i.fillRect(0,0,c,u);const x=i.createRadialGradient(c*.6,u*.8,0,c*.6,u*.8,c*.3);x.addColorStop(0,`rgba(79,142,247,${.08+h*.06})`),x.addColorStop(1,"transparent"),i.fillStyle=x,i.fillRect(0,0,c,u),o.forEach(P=>{P.x+=P.vx,P.y+=P.vy,(P.x<0||P.x>c)&&(P.vx*=-1),(P.y<0||P.y>u)&&(P.vy*=-1)});const M=130;for(let P=0;P<o.length;P++)for(let C=P+1;C<o.length;C++){const $=o[P].x-o[C].x,j=o[P].y-o[C].y,G=Math.sqrt($*$+j*j);if(G<M){const Q=(1-G/M)*.35;i.beginPath(),i.moveTo(o[P].x,o[P].y),i.lineTo(o[C].x,o[C].y),i.strokeStyle=`rgba(79,142,247,${Q})`,i.lineWidth=.8,i.stroke()}}o.forEach(P=>{i.beginPath(),i.arc(P.x,P.y,P.r,0,Math.PI*2),i.fillStyle="rgba(79,142,247,0.65)",i.fill()}),s=requestAnimationFrame(f)};ns(()=>{cancelAnimationFrame(s),window.removeEventListener("resize",l)}),f()}),(n,i)=>(B(),K("canvas",{ref_key:"canvasRef",ref:t,class:"hero-canvas"},null,512))}},Gu=on(Wu,[["__scopeId","data-v-92edd766"]]),qu={class:"home"},Xu={class:"hero section"},zu={class:"projects-preview section"},Ju={class:"container"},Qu={class:"projects-preview__grid"},Yu={class:"leadership-preview section"},Zu={class:"container leadership-preview__inner"},ep={class:"leadership-preview__content"},tp={class:"leadership-preview__articles"},sp={class:"skills section"},np={class:"container"},ip={class:"skills__grid"},lp={class:"skills__card-title"},rp={class:"skills__card-list"},op={class:"skills__card-tags"},ap={__name:"Home",setup(e){const t=[{title:"UIUX 設計",items:["使用者研究","資訊架構","互動設計","視覺設計"],tags:[{label:"查看 UIUX 專案",link:"/projects?tag=UIUX"}]},{title:"前端切版",items:["Vue.js","HTML / CSS","RWD","SCSS"],tags:[{label:"查看切版專案",link:"/projects?tag=Frontend"}]},{title:"設計策略",items:["競品分析","A/B 測試","數據分析","設計系統"],tags:[{label:"查看相關專案",link:"/projects?tag=Growth Design"}]},{title:"設計領導",items:["團隊管理","跨部門協作","設計評審","人才培育"],tags:[{label:"閱讀 Leadership 文章",link:"/leadership"}]},{title:"AI 產品設計",items:["AI 框架制定","AI 互動設計","信任設計","Prompt 設計"],tags:[{label:"查看 AI 專案",link:"/projects?tag=AI"}]},{title:"溝通與協作",items:["利害關係人溝通","設計提案","跨文化協作","衝突處理"],tags:[{label:"閱讀 Leadership 文章",link:"/leadership"}]},{title:"使用者研究",items:["使用者訪談","易用性測試","問卷設計","研究報告"],tags:[{label:"查看研究相關專案",link:"/projects?tag=Research"}]},{title:"數據驅動設計",items:["數據判讀","A/B 測試規劃","轉換率優化","成效追蹤"],tags:[{label:"查看相關專案",link:"/projects?tag=A/B Testing"}]},{title:"成長心態",items:["快速學習","主動解決問題","接受回饋","持續優化"],tags:[{label:"閱讀我的反思文章",link:"/leadership"}]}];return(s,n)=>{const i=is("RouterLink");return B(),K("div",qu,[g("section",Xu,[q(Gu),n[0]||(n[0]=Yt('<div class="container hero__inner"><div class="hero__content"><h1 class="hero__title">嗨，我是 Nomis！</h1><p class="hero__subtitle">UIUX 設計師・前端工程師・設計主管</p><p class="hero__desc"> 擅長以數據驅動設計決策，打造以使用者為中心的產品體驗，跨文化協作與跨部門溝通是我的強項。 </p><div class="hero__cta"><a href="/portfolio/resume.pdf" target="_blank" class="btn btn--primary">下載履歷</a><a href="https://www.linkedin.com/in/" target="_blank" class="btn btn--secondary">LinkedIn</a><a href="mailto:nomis820710@gmail.com" class="btn btn--secondary">聯絡我</a></div></div><div class="hero__photo"><img src="'+Nu+'" alt="Nomis Yang"></div></div>',1))]),n[10]||(n[10]=Yt('<section class="features section"><div class="container features__grid"><div class="features__item"><h3 class="features__title">跨領域設計能力</h3><p class="features__desc"> 橫跨 UIUX 設計、前端切版與設計管理，能從使用者研究、視覺設計到程式實作一手包辦，確保設計落地不失真。 </p></div><div class="features__item"><h3 class="features__title">數據驅動的設計決策</h3><p class="features__desc"> 習慣以數據佐證設計方向，透過 A/B 測試、使用者訪談與競品分析，持續優化產品體驗並創造可量化的成效。 </p></div><div class="features__item"><h3 class="features__title">跨部門協作與領導</h3><p class="features__desc"> 具備帶領設計團隊的實戰經驗，善於在產品、工程與商業目標之間建立共識，推動專案從 0 到 1 順利落地。 </p></div></div></section>',1)),g("section",zu,[g("div",Ju,[g("div",Qu,[(B(!0),K(le,null,be(Ce(bs),l=>(B(),wt(kr,{key:l.id,project:l},null,8,["project"]))),128))])])]),g("section",Yu,[g("div",Zu,[g("div",ep,[n[2]||(n[2]=g("p",{class:"leadership-preview__label"},"Leadership",-1)),n[3]||(n[3]=g("h2",{class:"leadership-preview__title"},"設計領導力的實踐與反思",-1)),n[4]||(n[4]=g("p",{class:"leadership-preview__desc"}," 從個人貢獻者到帶領團隊，我持續記錄在設計管理路上的觀察與學習。 包含團隊管理心得、專案決策過程、帶人的方法論，以及個人成長反思。 ",-1)),q(i,{to:"/leadership",class:"btn btn--primary"},{default:me(()=>[...n[1]||(n[1]=[Le(" 閱讀更多文章 → ",-1)])]),_:1})]),g("div",tp,[q(i,{to:"/leadership/psychological-safety",class:"leadership-preview__article"},{default:me(()=>[...n[5]||(n[5]=[g("p",{class:"leadership-preview__article-tag"},"帶團隊的方法論",-1),g("h4",{class:"leadership-preview__article-title"},"如何在設計評審中建立心理安全感",-1),g("p",{class:"leadership-preview__article-cta"},"閱讀文章 →",-1)])]),_:1}),q(i,{to:"/leadership/design-vs-business",class:"leadership-preview__article"},{default:me(()=>[...n[6]||(n[6]=[g("p",{class:"leadership-preview__article-tag"},"專案決策過程",-1),g("h4",{class:"leadership-preview__article-title"},"當設計目標與商業目標衝突時，我怎麼做決定",-1),g("p",{class:"leadership-preview__article-cta"},"閱讀文章 →",-1)])]),_:1}),q(i,{to:"/leadership/designer-to-lead",class:"leadership-preview__article"},{default:me(()=>[...n[7]||(n[7]=[g("p",{class:"leadership-preview__article-tag"},"個人成長反思",-1),g("h4",{class:"leadership-preview__article-title"},"從設計師到設計主管：角色轉換的第一年",-1),g("p",{class:"leadership-preview__article-cta"},"閱讀文章 →",-1)])]),_:1})])])]),g("section",sp,[g("div",np,[n[8]||(n[8]=g("p",{class:"skills__label"},"How I Contribute",-1)),n[9]||(n[9]=g("h2",{class:"skills__title"},"我如何用專業技能貢獻",-1)),g("div",ip,[(B(),K(le,null,be(t,l=>g("div",{key:l.title,class:"skills__card"},[g("h4",lp,Z(l.title),1),g("ul",rp,[(B(!0),K(le,null,be(l.items,r=>(B(),K("li",{key:r},Z(r),1))),128))]),g("div",op,[(B(!0),K(le,null,be(l.tags,r=>(B(),wt(i,{key:r.label,to:r.link,class:"skills__card-tag"},{default:me(()=>[Le(Z(r.label),1)]),_:2},1032,["to"]))),128))])])),64))])])]),n[11]||(n[11]=Yt('<section class="testimonials section"><div class="container"><p class="testimonials__label">Recommendations</p><h2 class="testimonials__title">他們這樣說</h2><div class="testimonials__grid"><div class="testimonials__card"><p class="testimonials__card-title">執行力與溝通能力超乎預期，對回饋保持開放</p><p class="testimonials__card-content"> Nomis 是一位充滿熱情的 UIUX 設計師，以創新思維和快速適應新挑戰的能力著稱。 她的執行速度與溝通品質持續超乎預期，是團隊中不可或缺的夥伴。 對回饋始終保持開放，持續尋求改進，對團隊的成功貢獻良多。 </p><div class="testimonials__card-author"><img src="'+Du+'" alt="陳大明" class="testimonials__card-avatar"><div><p class="testimonials__card-name">陳大明</p><p class="testimonials__card-role">2024年6月・iOS 工程師・直接主管</p></div></div></div><div class="testimonials__card"><p class="testimonials__card-title">能理解並轉化使用者需求為直覺且美觀的設計</p><p class="testimonials__card-content"> 與 Nomis 共事是非常愉快的經驗。她始終展現出理解並將使用者需求轉化為直覺且視覺吸引力設計的能力。 她的創意和解決問題的技巧在應對專案挑戰時發揮了關鍵作用。 支持性的個性與強大的溝通技巧營造了積極的協作環境，是可靠又具創新力的夥伴。 </p><div class="testimonials__card-author"><img src="'+Lu+'" alt="廖小華" class="testimonials__card-avatar"><div><p class="testimonials__card-name">廖小華</p><p class="testimonials__card-role">2024年6月・產品經理・同團隊成員</p></div></div></div></div></div></section>',1))])}}},cp={class:"projects-page"},up={class:"projects-list section"},pp={class:"container"},fp={class:"projects-list__filters"},dp=["onClick"],hp={class:"projects-list__grid"},_p={key:0,class:"projects-list__empty"},mp={__name:"Projects",setup(e){const t=["All",...new Set(bs.flatMap(i=>i.tags))],s=Ke("All"),n=Oe(()=>s.value==="All"?bs:bs.filter(i=>i.tags.includes(s.value)));return(i,l)=>(B(),K("div",cp,[l[0]||(l[0]=Yt('<section class="projects-hero section"><div class="container"><p class="projects-hero__label">My Work</p><h1 class="projects-hero__title">Projects</h1><p class="projects-hero__desc"> 橫跨 UIUX 設計、前端切版與 AI 產品設計的實戰專案，每個專案都有可量化的成效與完整的設計思考過程。 </p></div></section>',1)),g("section",up,[g("div",pp,[g("div",fp,[(B(),K(le,null,be(t,r=>g("button",{key:r,class:ct(["projects-list__filter",{"projects-list__filter--active":s.value===r}]),onClick:o=>s.value=r},Z(r),11,dp)),64))]),g("div",hp,[(B(!0),K(le,null,be(n.value,r=>(B(),wt(kr,{key:r.id,project:r},null,8,["project"]))),128))]),n.value.length===0?(B(),K("p",_p," 目前沒有符合此分類的專案。 ")):Er("",!0)])])]))}},gp={key:0,class:"project-detail"},vp={class:"project-detail-hero section"},bp={class:"container"},yp={class:"project-detail-hero__hashtags"},Ap={class:"project-detail-hero__title"},Ep={class:"project-detail-hero__desc"},xp={class:"project-detail-hero__tags"},Cp={class:"project-detail-cover"},Sp={class:"container"},Ip=["src","alt"],Pp={class:"project-detail-content section"},wp={class:"container project-detail-content__layout"},Rp={class:"toc-float__panel"},Tp={class:"toc-float__list"},jp=["onClick"],Op={class:"toc-sidebar"},Mp={class:"toc-sidebar__list"},$p=["onClick"],Np=["innerHTML"],Dp={class:"project-detail-nav section"},Lp={class:"container"},Up={key:1,class:"project-detail-notfound section"},Bp={class:"container"},Fp={__name:"ProjectDetail",setup(e){const t=Tr(),s=Oe(()=>bs.find(c=>c.id===t.params.id)),n=Ke([]),i=Ke(""),l=Ke(null),r=Ke(!1),o=()=>{if(!l.value)return;const c=l.value.querySelectorAll("h2, h3");n.value=Array.from(c).map((u,h)=>{const _=`heading-${h}`;return u.id=_,{id:_,text:u.textContent,level:u.tagName}})},a=()=>{if(!l.value)return;const c=l.value.querySelectorAll("h2, h3");let u="";c.forEach(h=>{h.getBoundingClientRect().top<=120&&(u=h.id)}),i.value=u},f=c=>{const u=document.getElementById(c);u&&u.scrollIntoView({behavior:"smooth",block:"start"})};return ss(()=>{Fs(()=>{o(),window.addEventListener("scroll",a)})}),ns(()=>{window.removeEventListener("scroll",a)}),Jt(s,()=>{Fs(()=>o())}),(c,u)=>{const h=is("RouterLink");return s.value?(B(),K("div",gp,[g("section",vp,[g("div",bp,[q(h,{to:"/projects",class:"project-detail-hero__back"},{default:me(()=>[...u[1]||(u[1]=[Le("← 返回 Projects",-1)])]),_:1}),g("div",yp,[(B(!0),K(le,null,be(s.value.hashtags,_=>(B(),K("span",{key:_,class:"project-detail-hero__hashtag"},"#"+Z(_),1))),128))]),g("h1",Ap,Z(s.value.title),1),g("p",Ep,Z(s.value.description),1),g("div",xp,[(B(!0),K(le,null,be(s.value.tags,_=>(B(),K("span",{key:_,class:"project-detail-hero__tag"},Z(_),1))),128))])])]),g("div",Cp,[g("div",Sp,[g("img",{src:Ce(gt)(s.value.cover),alt:s.value.title,class:"project-detail-cover__img"},null,8,Ip)])]),g("section",Pp,[g("div",wp,[g("div",{class:ct(["toc-float",{"toc-float--open":r.value}])},[g("button",{class:"toc-float__toggle",onClick:u[0]||(u[0]=_=>r.value=!r.value),"aria-label":"目錄"},[...u[2]||(u[2]=[g("i",{class:"fa-solid fa-list"},null,-1)])]),g("div",Rp,[u[3]||(u[3]=g("p",{class:"toc-float__title"},"目錄",-1)),g("ul",Tp,[(B(!0),K(le,null,be(n.value,_=>(B(),K("li",{key:_.id},[g("a",{onClick:qi(I=>{f(_.id),r.value=!1},["prevent"]),href:"#"},Z(_.text),9,jp)]))),128))])])],2),g("aside",Op,[u[4]||(u[4]=g("p",{class:"toc-sidebar__title"},"目錄",-1)),g("ul",Mp,[(B(!0),K(le,null,be(n.value,_=>(B(),K("li",{key:_.id,class:"toc-sidebar__item"},[g("a",{onClick:qi(I=>f(_.id),["prevent"]),href:"#",class:ct(["toc-sidebar__link",{"toc-sidebar__link--active":i.value===_.id}])},Z(_.text),11,$p)]))),128))])]),g("div",{class:"project-detail-content__body",ref_key:"contentRef",ref:l,innerHTML:s.value.content},null,8,Np)])]),g("section",Dp,[g("div",Lp,[q(h,{to:"/projects",class:"btn btn--secondary"},{default:me(()=>[...u[5]||(u[5]=[Le("← 查看所有專案",-1)])]),_:1})])])])):(B(),K("div",Up,[g("div",Bp,[u[7]||(u[7]=g("h1",null,"找不到此專案",-1)),q(h,{to:"/projects",class:"btn btn--primary"},{default:me(()=>[...u[6]||(u[6]=[Le("返回 Projects",-1)])]),_:1})])]))}}},kp={class:"article-card__cover"},Hp=["src","alt"],Vp={class:"article-card__body"},Kp={class:"article-card__hashtags"},Wp={class:"article-card__title"},Gp={class:"article-card__desc"},qp={class:"article-card__date"},Xp={__name:"ArticleCard",props:{article:{type:Object,required:!0}},setup(e){return(t,s)=>{const n=is("RouterLink");return B(),wt(n,{to:`/leadership/${e.article.id}`,class:"article-card"},{default:me(()=>[g("div",kp,[g("img",{src:Ce(gt)(e.article.cover),alt:e.article.title},null,8,Hp)]),g("div",Vp,[g("div",Kp,[(B(!0),K(le,null,be(e.article.hashtags,i=>(B(),K("span",{key:i,class:"article-card__hashtag"}," #"+Z(i),1))),128))]),g("h3",Wp,Z(e.article.title),1),g("p",Gp,Z(e.article.description),1),g("p",qp,Z(e.article.date),1)]),s[0]||(s[0]=g("div",{class:"article-card__cta"}," 閱讀文章 → ",-1))]),_:1},8,["to"])}}},Fn=[{id:"psychological-safety",title:"如何在設計評審中建立心理安全感",description:"設計評審常常讓設計師感到焦慮與防禦。這篇文章分享我如何透過具體的主持技巧，讓評審從「批判場」變成「共創場」。",cover:"/images/articles/article-1.jpg",hashtags:["帶團隊的方法論"],tags:["帶團隊的方法論"],date:"2024-12-01",content:"<p>文章內容待補...</p>"},{id:"design-vs-business",title:"當設計目標與商業目標衝突時，我怎麼做決定",description:"設計師最難的不是做設計，而是在各方利益衝突時做出有依據的決定。這篇文章記錄我的決策框架。",cover:"/images/articles/article-2.jpg",hashtags:["專案決策過程"],tags:["專案決策過程"],date:"2024-11-15",content:"<p>文章內容待補...</p>"},{id:"designer-to-lead",title:"從設計師到設計主管：角色轉換的第一年",description:"當你從做設計變成管設計的人，最大的挑戰不是技術，而是心態。這篇文章記錄我第一年最真實的掙扎與學習。",cover:"/images/articles/article-3.jpg",hashtags:["個人成長反思"],tags:["個人成長反思"],date:"2024-10-20",content:`
  <!-- 前言 -->
  <blockquote>
    這篇文章記錄我從設計師轉換到設計主管的第一年，那些沒有人告訴你的事、那些讓你措手不及的瞬間，以及最終如何找到自己的管理節奏。
  </blockquote>

  <h2>為什麼會成為設計主管？</h2>
  <p>
    老實說，我並沒有刻意規劃要走上管理這條路。在那之前，我更在意的是設計本身——如何做出更好的使用者體驗、如何用數據驗證設計決策。成為主管，是一個機會出現、我選擇接受挑戰的結果。
  </p>
  <p>
    但「接受挑戰」這四個字說起來輕鬆，實際面對的第一年卻遠比我想像的複雜。
  </p>
  <img src="/images/articles/designer-to-lead/intro.jpg" alt="從設計師到設計主管的角色轉換" />

  <h2>第一個衝擊：你不再是做設計的人</h2>
  <p>
    這是最讓我不適應的事。以前，我的成就感來自做出一個好的介面、跑完一輪使用者測試、看著設計稿被工程師完美實作。
  </p>
  <p>
    成為主管之後，我的工作變成了：開會、給回饋、協調資源、處理衝突、寫報告。每天忙得要命，卻找不到「我今天完成了什麼」的感覺。
  </p>
  <p>這個心態的轉換花了我大約三個月。</p>
  <img src="/images/articles/designer-to-lead/role-shift.jpg" alt="角色轉換的衝擊" />

  <div class="ad-callout">
    <div class="ad-callout__item">
      <span class="ad-callout__title">設計師的成就感</span>
      <p>做出好設計、獲得使用者認可、看到數據提升。</p>
    </div>
    <div class="ad-callout__item">
      <span class="ad-callout__title">主管的成就感</span>
      <p>團隊成員成長、流程變得更順、組織因你的決策走得更穩。</p>
    </div>
  </div>

  <h2>我如何重建成就感？</h2>
  <p>
    關鍵轉折是我開始把「團隊的成長」當作自己的 KPI。當我看到一個設計師在我給了回饋之後，下一版設計明顯進步；當我建立的設計評審流程讓大家的溝通效率提升——這些，開始成為我新的成就感來源。
  </p>
  <p>主管的影響力是乘數效應，不是加法。一個主管讓五個人都變好，比自己一個人做好設計的影響力大得多。</p>

  <h2>帶人最難的不是技術，是溝通</h2>
  <p>
    當了主管之後，我才發現溝通的複雜程度遠超預期。不同成員有不同的個性、不同的成長需求、不同的溝通偏好。你要學會在給回饋時不讓對方感到被批評，要學會在衝突中找到雙方都能接受的解法，要學會在高壓的 deadline 下還能維持團隊的士氣。
  </p>
  <img src="/images/articles/designer-to-lead/communication.jpg" alt="設計主管的溝通挑戰" />

  <h3>我學到的三個溝通原則</h3>
  <ul>
    <li><strong>先理解，再建議：</strong>在給回饋之前，先確認自己完全理解對方的設計決策背後的邏輯。</li>
    <li><strong>具體勝過模糊：</strong>「這個設計不太對」不如「這個按鈕的 CTA 文字對目標用戶來說太模糊，可以試試更直接的動詞。」</li>
    <li><strong>公開讚美，私下建議：</strong>讓人在眾人面前丟臉，是消耗信任最快的方式。</li>
  </ul>

  <h2>關於「放手」這件事</h2>
  <p>
    設計師出身的主管，最容易犯的毛病是「手太癢」。看到設計稿有問題，直接改掉，比跟設計師解釋快多了。但這麼做的代價是：設計師沒有成長，而且會漸漸失去主動思考的動力。
  </p>
  <p>
    學會放手，讓設計師在你設定的框架內犯錯、學習，才是真正的培育。這個道理我懂，但做到需要時間。
  </p>
  <img src="/images/articles/designer-to-lead/let-go.jpg" alt="學會放手，讓團隊成長" />

  <h2>第一年的總結</h2>
  <p>成為設計主管的第一年，我學到最重要的三件事：</p>
  <ul>
    <li>主管的核心工作是讓團隊成功，不是讓自己成功。</li>
    <li>溝通能力比設計能力更決定你作為主管的上限。</li>
    <li>你的管理風格需要時間形塑，不要急著複製別人的方式。</li>
  </ul>
  <p>
    如果你是正在思考要不要走上管理職的設計師，或是剛剛接下主管職位還在適應的人——我想告訴你，第一年的不適應是正常的。重要的是保持反思，持續調整。
  </p>

  <blockquote>
    成為主管不是職涯的終點，而是另一種學習的起點。
  </blockquote>
`}],zp={class:"leadership-page"},Jp={class:"leadership-list section"},Qp={class:"container"},Yp={class:"leadership-list__filters"},Zp=["onClick"],ef={class:"leadership-list__grid"},tf={key:0,class:"leadership-list__empty"},sf={__name:"Leadership",setup(e){const t=["All","設計團隊管理心得","專案決策過程","帶團隊的方法論","個人成長反思"],s=Ke("All"),n=Oe(()=>s.value==="All"?Fn:Fn.filter(i=>i.tags.includes(s.value)));return(i,l)=>(B(),K("div",zp,[l[0]||(l[0]=Yt('<section class="leadership-hero section"><div class="container"><p class="leadership-hero__label">My Thoughts</p><h1 class="leadership-hero__title">Leadership</h1><p class="leadership-hero__desc"> 記錄我在設計管理路上的觀察與學習，包含團隊管理心得、專案決策過程、帶人的方法論，以及個人成長反思。 </p></div></section>',1)),g("section",Jp,[g("div",Qp,[g("div",Yp,[(B(),K(le,null,be(t,r=>g("button",{key:r,class:ct(["leadership-list__filter",{"leadership-list__filter--active":s.value===r}]),onClick:o=>s.value=r},Z(r),11,Zp)),64))]),g("div",ef,[(B(!0),K(le,null,be(n.value,r=>(B(),wt(Xp,{key:r.id,article:r},null,8,["article"]))),128))]),n.value.length===0?(B(),K("p",tf," 目前沒有符合此分類的文章。 ")):Er("",!0)])])]))}},nf={key:0,class:"article-detail"},lf={class:"article-detail-hero section"},rf={class:"container"},of={class:"article-detail-hero__hashtags"},af={class:"article-detail-hero__title"},cf={class:"article-detail-hero__desc"},uf={class:"article-detail-hero__date"},pf={class:"article-detail-cover"},ff={class:"container"},df=["src","alt"],hf={class:"article-detail-content section"},_f={class:"container article-detail-content__inner"},mf=["innerHTML"],gf={class:"article-detail-nav section"},vf={class:"container"},bf={key:1,class:"article-detail-notfound section"},yf={class:"container"},Af={__name:"ArticleDetail",setup(e){const t=Tr(),s=Oe(()=>Fn.find(n=>n.id===t.params.id));return(n,i)=>{const l=is("RouterLink");return s.value?(B(),K("div",nf,[g("section",lf,[g("div",rf,[q(l,{to:"/leadership",class:"article-detail-hero__back"},{default:me(()=>[...i[0]||(i[0]=[Le(" ← 返回 Leadership ",-1)])]),_:1}),g("div",of,[(B(!0),K(le,null,be(s.value.hashtags,r=>(B(),K("span",{key:r,class:"article-detail-hero__hashtag"}," #"+Z(r),1))),128))]),g("h1",af,Z(s.value.title),1),g("p",cf,Z(s.value.description),1),g("p",uf,Z(s.value.date),1)])]),g("div",pf,[g("div",ff,[g("img",{src:Ce(gt)(s.value.cover),alt:s.value.title,class:"article-detail-cover__img"},null,8,df)])]),g("section",hf,[g("div",_f,[g("div",{class:"article-detail-content__body",innerHTML:s.value.content},null,8,mf)])]),g("section",gf,[g("div",vf,[q(l,{to:"/leadership",class:"btn btn--secondary"},{default:me(()=>[...i[1]||(i[1]=[Le(" ← 查看所有文章 ",-1)])]),_:1})])])])):(B(),K("div",bf,[g("div",yf,[i[3]||(i[3]=g("h1",null,"找不到此文章",-1)),q(l,{to:"/leadership",class:"btn btn--primary"},{default:me(()=>[...i[2]||(i[2]=[Le("返回 Leadership",-1)])]),_:1})])]))}}},Ef={__name:"StoryCanvas",setup(e){const t=Ke(null);let s=null;return ss(()=>{const n=t.value,i=n.getContext("2d"),l=()=>{n.width=n.offsetWidth,n.height=n.offsetHeight};l(),window.addEventListener("resize",l);const r=2e3,o=800,a=()=>({x:(Math.random()-.5)*2,y:(Math.random()-.5)*2,z:Math.random()*o,pz:null}),f=Array.from({length:r},a);f.forEach(h=>{h.pz=h.z});const c=1.5,u=()=>{const h=n.width,_=n.height,I=h/2,x=_/2;i.fillStyle="rgba(10, 14, 26, 0.25)",i.fillRect(0,0,h,_),f.forEach(M=>{if(M.pz=M.z,M.z-=c,M.z<=1){Object.assign(M,a()),M.pz=M.z;return}const P=o/M.z,C=I+M.x*P*(h/2),$=x+M.y*P*(_/2),j=o/M.pz,G=I+M.x*j*(h/2),Q=x+M.y*j*(_/2),J=1-M.z/o,Ae=Math.pow(J,1.5),H=Math.max(.3,J*2.2),X=i.createLinearGradient(G,Q,C,$);if(X.addColorStop(0,"rgba(100,160,255,0)"),X.addColorStop(1,`rgba(200,225,255,${Ae*.95})`),i.beginPath(),i.moveTo(G,Q),i.lineTo(C,$),i.strokeStyle=X,i.lineWidth=H,i.lineCap="round",i.stroke(),J>.6){const oe=(J-.6)/.4;i.beginPath(),i.arc(C,$,H*1.2,0,Math.PI*2),i.fillStyle=`rgba(220,235,255,${oe*.9})`,i.fill()}}),s=requestAnimationFrame(u)};ns(()=>{cancelAnimationFrame(s),window.removeEventListener("resize",l)}),u()}),(n,i)=>(B(),K("canvas",{ref_key:"canvasRef",ref:t,class:"story-canvas"},null,512))}},xf=on(Ef,[["__scopeId","data-v-3f74bc40"]]),Cf={class:"about-page"},Sf={class:"about-hero section"},If={class:"container about-hero__inner"},Pf={class:"about-hero__image"},wf=["src"],Rf={class:"about-experience section"},Tf={class:"container"},jf={class:"about-experience__list"},Of={class:"about-experience__left"},Mf={class:"about-experience__period"},$f={class:"about-experience__right"},Nf={class:"about-experience__role"},Df={class:"about-experience__company"},Lf={class:"about-experience__desc"},Uf={class:"about-story section"},Bf={class:"container"},Ff={class:"about-story__timeline"},kf={class:"about-story__image"},Hf=["src","alt"],Vf={class:"about-story__content"},Kf={class:"about-story__period"},Wf={class:"about-story__role"},Gf={class:"about-story__tags"},qf={class:"about-story__desc"},Xf={__name:"About",setup(e){const t=[{period:"2023 - 現在",role:"UIUX 設計主管",company:"某某科技公司",desc:"帶領設計團隊，負責產品設計策略制定、設計系統建立與跨部門協作。"},{period:"2021 - 2023",role:"UIUX 設計師",company:"MixerBox",desc:"負責 AI 產品的 UIUX 設計，主導多項 A/B 測試，成功提升訂閱轉換率 32%+。"},{period:"2019 - 2021",role:"前端工程師暨視覺設計師",company:"某某設計公司",desc:"負責網站前端切版與視覺設計，累積跨領域的設計與開發實務經驗。"}],s=[{period:"2016 - 2018",title:"視覺設計師",image:gt("/images/general/story/story-1.jpg"),tags:["品牌視覺","平面設計","美感養成"],desc:"從最基礎的視覺語言出發，學會如何用顏色、字型、排版傳達品牌個性。這個階段讓我建立了扎實的美感基礎，也讓我開始對「設計如何影響使用者感受」產生好奇。"},{period:"2018 - 2020",title:"UI 設計師",image:gt("/images/general/story/story-2.jpg"),tags:["介面設計","設計系統","跨部門協作"],desc:"開始接觸數位產品設計，學習如何在螢幕上建立清晰的視覺層次。與工程師合作的過程中，我意識到設計不只是好看，更要能被實作，這驅動我學習前端切版。"},{period:"2020 - 2022",title:"UIUX 設計師",image:gt("/images/general/story/story-3.jpg"),tags:["使用者研究","A/B 測試","數據驅動設計"],desc:"真正走進使用者的世界。透過訪談、測試、數據分析來驗證設計決策，讓我理解「好設計」的定義不是設計師說了算，而是使用者用腳投票的結果。"},{period:"2022 - 現在",title:"設計主管",image:gt("/images/general/story/story-4.jpg"),tags:["團隊管理","設計策略","跨部門影響力"],desc:"角色轉換讓我重新定義「貢獻」的意義。從做好一個設計，到讓整個團隊都能做好設計。管理是一門全新的學問，但也是我目前覺得最有意義的挑戰。"}];return(n,i)=>(B(),K("div",Cf,[g("section",Sf,[g("div",If,[i[0]||(i[0]=Yt('<div class="about-hero__content"><p class="about-hero__label">About Me</p><h1 class="about-hero__title">嗨，我是 Nomis！</h1><p class="about-hero__desc"> 我是一位橫跨 UIUX 設計、前端切版與設計管理的複合型設計師。 我相信好的設計不只是好看，而是能解決真實問題、創造可量化的商業價值。 </p><p class="about-hero__desc"> 目前專注於 AI 產品設計領域，對於如何在 AI 時代設計出讓使用者信任、願意使用的產品體驗，有深入的研究與實踐。 </p></div>',1)),g("div",Pf,[g("img",{src:Ce(gt)("/images/general/avatar.jpg"),alt:"Nomis",class:"about-hero__avatar"},null,8,wf)])])]),g("section",Rf,[g("div",Tf,[i[1]||(i[1]=g("h2",{class:"about-experience__title"},"工作經驗",-1)),g("div",jf,[(B(),K(le,null,be(t,l=>g("div",{key:l.company,class:"about-experience__item"},[g("div",Of,[g("p",Mf,Z(l.period),1)]),g("div",$f,[g("h3",Nf,Z(l.role),1),g("p",Df,Z(l.company),1),g("p",Lf,Z(l.desc),1)])])),64))])])]),g("section",Uf,[q(xf),g("div",Bf,[i[2]||(i[2]=g("p",{class:"about-story__label"},"My Story",-1)),i[3]||(i[3]=g("h2",{class:"about-story__title"},"我如何成為 UIUX 設計師暨設計主管",-1)),i[4]||(i[4]=g("p",{class:"about-story__intro"}," 我的設計之路從視覺出發，一路走向 UIUX、前端，再到帶領設計團隊。 每個階段都讓我對「設計」這件事有更深的理解。 ",-1)),g("div",Ff,[(B(),K(le,null,be(s,l=>g("div",{class:"about-story__item",key:l.title},[g("div",kf,[g("img",{src:l.image,alt:l.title},null,8,Hf)]),g("div",Vf,[g("p",Kf,Z(l.period),1),g("h3",Wf,Z(l.title),1),g("div",Gf,[(B(!0),K(le,null,be(l.tags,r=>(B(),K("span",{key:r,class:"about-story__tag"},Z(r),1))),128))]),g("p",qf,Z(l.desc),1)])])),64))])])])]))}},zf=xu({history:su(),routes:[{path:"/",name:"home",component:ap},{path:"/projects",name:"projects",component:mp},{path:"/projects/:id",name:"project-detail",component:Fp},{path:"/leadership",name:"leadership",component:sf},{path:"/leadership/:id",name:"article-detail",component:Af},{path:"/about",name:"about",component:Xf}],scrollBehavior(e,t,s){return s||{top:0}}}),Hr=_c($u);Hr.use(zf);Hr.mount("#app");
