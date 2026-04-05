(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();function kn(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const pe={},qt=[],ot=()=>{},fr=()=>!1,qs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Xs=e=>e.startsWith("onUpdate:"),ye=Object.assign,Hn=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Ko=Object.prototype.hasOwnProperty,ie=(e,t)=>Ko.call(e,t),k=Array.isArray,Xt=e=>Ps(e)==="[object Map]",pr=e=>Ps(e)==="[object Set]",fi=e=>Ps(e)==="[object Date]",W=e=>typeof e=="function",he=e=>typeof e=="string",at=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",dr=e=>(oe(e)||W(e))&&W(e.then)&&W(e.catch),hr=Object.prototype.toString,Ps=e=>hr.call(e),Wo=e=>Ps(e).slice(8,-1),_r=e=>Ps(e)==="[object Object]",Vn=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fs=kn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zs=e=>{const t=Object.create(null);return(s=>t[s]||(t[s]=e(s)))},Go=/-\w/g,$e=zs(e=>e.replace(Go,t=>t.slice(1).toUpperCase())),qo=/\B([A-Z])/g,Ft=zs(e=>e.replace(qo,"-$1").toLowerCase()),Js=zs(e=>e.charAt(0).toUpperCase()+e.slice(1)),an=zs(e=>e?`on${Js(e)}`:""),rt=(e,t)=>!Object.is(e,t),cn=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},gr=(e,t,s,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:s})},Xo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},zo=e=>{const t=he(e)?Number(e):NaN;return isNaN(t)?e:t};let pi;const Ys=()=>pi||(pi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kn(e){if(k(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],i=he(n)?Zo(n):Kn(n);if(i)for(const r in i)t[r]=i[r]}return t}else if(he(e)||oe(e))return e}const Jo=/;(?![^(]*\))/g,Yo=/:([^]+)/,Qo=/\/\*[^]*?\*\//g;function Zo(e){const t={};return e.replace(Qo,"").split(Jo).forEach(s=>{if(s){const n=s.split(Yo);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function ct(e){let t="";if(he(e))t=e;else if(k(e))for(let s=0;s<e.length;s++){const n=ct(e[s]);n&&(t+=n+" ")}else if(oe(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const el="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tl=kn(el);function mr(e){return!!e||e===""}function sl(e,t){if(e.length!==t.length)return!1;let s=!0;for(let n=0;s&&n<e.length;n++)s=Wn(e[n],t[n]);return s}function Wn(e,t){if(e===t)return!0;let s=fi(e),n=fi(t);if(s||n)return s&&n?e.getTime()===t.getTime():!1;if(s=at(e),n=at(t),s||n)return e===t;if(s=k(e),n=k(t),s||n)return s&&n?sl(e,t):!1;if(s=oe(e),n=oe(t),s||n){if(!s||!n)return!1;const i=Object.keys(e).length,r=Object.keys(t).length;if(i!==r)return!1;for(const o in e){const l=e.hasOwnProperty(o),a=t.hasOwnProperty(o);if(l&&!a||!l&&a||!Wn(e[o],t[o]))return!1}}return String(e)===String(t)}const vr=e=>!!(e&&e.__v_isRef===!0),Z=e=>he(e)?e:e==null?"":k(e)||oe(e)&&(e.toString===hr||!W(e.toString))?vr(e)?Z(e.value):JSON.stringify(e,br,2):String(e),br=(e,t)=>vr(t)?br(e,t.value):Xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,i],r)=>(s[un(n,r)+" =>"]=i,s),{})}:pr(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>un(s))}:at(t)?un(t):oe(t)&&!k(t)&&!_r(t)?String(t):t,un=(e,t="")=>{var s;return at(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};let De;class nl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=De,!t&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=De;try{return De=this,t()}finally{De=s}}}on(){++this._on===1&&(this.prevScope=De,De=this)}off(){this._on>0&&--this._on===0&&(De=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(this.effects.length=0,s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function il(){return De}let fe;const fn=new WeakSet;class yr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,De&&De.active&&De.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fn.has(this)&&(fn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Er(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,di(this),xr(this);const t=fe,s=Ge;fe=this,Ge=!0;try{return this.fn()}finally{Cr(this),fe=t,Ge=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Xn(t);this.deps=this.depsTail=void 0,di(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Cn(this)&&this.run()}get dirty(){return Cn(this)}}let Ar=0,ps,ds;function Er(e,t=!1){if(e.flags|=8,t){e.next=ds,ds=e;return}e.next=ps,ps=e}function Gn(){Ar++}function qn(){if(--Ar>0)return;if(ds){let t=ds;for(ds=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;ps;){let t=ps;for(ps=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=s}}if(e)throw e}function xr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Cr(e){let t,s=e.depsTail,n=s;for(;n;){const i=n.prevDep;n.version===-1?(n===s&&(s=i),Xn(n),rl(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}e.deps=t,e.depsTail=s}function Cn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Sr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Sr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ys)||(e.globalVersion=ys,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Cn(e))))return;e.flags|=2;const t=e.dep,s=fe,n=Ge;fe=e,Ge=!0;try{xr(e);const i=e.fn(e._value);(t.version===0||rt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{fe=s,Ge=n,Cr(e),e.flags&=-3}}function Xn(e,t=!1){const{dep:s,prevSub:n,nextSub:i}=e;if(n&&(n.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=n,e.nextSub=void 0),s.subs===e&&(s.subs=n,!n&&s.computed)){s.computed.flags&=-5;for(let r=s.computed.deps;r;r=r.nextDep)Xn(r,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function rl(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let Ge=!0;const Rr=[];function vt(){Rr.push(Ge),Ge=!1}function bt(){const e=Rr.pop();Ge=e===void 0?!0:e}function di(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=fe;fe=void 0;try{t()}finally{fe=s}}}let ys=0;class ol{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!fe||!Ge||fe===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==fe)s=this.activeLink=new ol(fe,this),fe.deps?(s.prevDep=fe.depsTail,fe.depsTail.nextDep=s,fe.depsTail=s):fe.deps=fe.depsTail=s,wr(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const n=s.nextDep;n.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=n),s.prevDep=fe.depsTail,s.nextDep=void 0,fe.depsTail.nextDep=s,fe.depsTail=s,fe.deps===s&&(fe.deps=n)}return s}trigger(t){this.version++,ys++,this.notify(t)}notify(t){Gn();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{qn()}}}function wr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)wr(n)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const Sn=new WeakMap,Ut=Symbol(""),Rn=Symbol(""),As=Symbol("");function Se(e,t,s){if(Ge&&fe){let n=Sn.get(e);n||Sn.set(e,n=new Map);let i=n.get(s);i||(n.set(s,i=new zn),i.map=n,i.key=s),i.track()}}function gt(e,t,s,n,i,r){const o=Sn.get(e);if(!o){ys++;return}const l=a=>{a&&a.trigger()};if(Gn(),t==="clear")o.forEach(l);else{const a=k(e),p=a&&Vn(s);if(a&&s==="length"){const c=Number(n);o.forEach((u,h)=>{(h==="length"||h===As||!at(h)&&h>=c)&&l(u)})}else switch((s!==void 0||o.has(void 0))&&l(o.get(s)),p&&l(o.get(As)),t){case"add":a?p&&l(o.get("length")):(l(o.get(Ut)),Xt(e)&&l(o.get(Rn)));break;case"delete":a||(l(o.get(Ut)),Xt(e)&&l(o.get(Rn)));break;case"set":Xt(e)&&l(o.get(Ut));break}}qn()}function Vt(e){const t=ee(e);return t===e?t:(Se(t,"iterate",As),Ve(e)?t:t.map(qe))}function Qs(e){return Se(e=ee(e),"iterate",As),e}function nt(e,t){return yt(e)?Zt(Bt(e)?qe(t):t):qe(t)}const ll={__proto__:null,[Symbol.iterator](){return pn(this,Symbol.iterator,e=>nt(this,e))},concat(...e){return Vt(this).concat(...e.map(t=>k(t)?Vt(t):t))},entries(){return pn(this,"entries",e=>(e[1]=nt(this,e[1]),e))},every(e,t){return ft(this,"every",e,t,void 0,arguments)},filter(e,t){return ft(this,"filter",e,t,s=>s.map(n=>nt(this,n)),arguments)},find(e,t){return ft(this,"find",e,t,s=>nt(this,s),arguments)},findIndex(e,t){return ft(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ft(this,"findLast",e,t,s=>nt(this,s),arguments)},findLastIndex(e,t){return ft(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ft(this,"forEach",e,t,void 0,arguments)},includes(...e){return dn(this,"includes",e)},indexOf(...e){return dn(this,"indexOf",e)},join(e){return Vt(this).join(e)},lastIndexOf(...e){return dn(this,"lastIndexOf",e)},map(e,t){return ft(this,"map",e,t,void 0,arguments)},pop(){return os(this,"pop")},push(...e){return os(this,"push",e)},reduce(e,...t){return hi(this,"reduce",e,t)},reduceRight(e,...t){return hi(this,"reduceRight",e,t)},shift(){return os(this,"shift")},some(e,t){return ft(this,"some",e,t,void 0,arguments)},splice(...e){return os(this,"splice",e)},toReversed(){return Vt(this).toReversed()},toSorted(e){return Vt(this).toSorted(e)},toSpliced(...e){return Vt(this).toSpliced(...e)},unshift(...e){return os(this,"unshift",e)},values(){return pn(this,"values",e=>nt(this,e))}};function pn(e,t,s){const n=Qs(e),i=n[t]();return n!==e&&!Ve(e)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=s(r.value)),r}),i}const al=Array.prototype;function ft(e,t,s,n,i,r){const o=Qs(e),l=o!==e&&!Ve(e),a=o[t];if(a!==al[t]){const u=a.apply(e,r);return l?qe(u):u}let p=s;o!==e&&(l?p=function(u,h){return s.call(this,nt(e,u),h,e)}:s.length>2&&(p=function(u,h){return s.call(this,u,h,e)}));const c=a.call(o,p,n);return l&&i?i(c):c}function hi(e,t,s,n){const i=Qs(e),r=i!==e&&!Ve(e);let o=s,l=!1;i!==e&&(r?(l=n.length===0,o=function(p,c,u){return l&&(l=!1,p=nt(e,p)),s.call(this,p,nt(e,c),u,e)}):s.length>3&&(o=function(p,c,u){return s.call(this,p,c,u,e)}));const a=i[t](o,...n);return l?nt(e,a):a}function dn(e,t,s){const n=ee(e);Se(n,"iterate",As);const i=n[t](...s);return(i===-1||i===!1)&&Qn(s[0])?(s[0]=ee(s[0]),n[t](...s)):i}function os(e,t,s=[]){vt(),Gn();const n=ee(e)[t].apply(e,s);return qn(),bt(),n}const cl=kn("__proto__,__v_isRef,__isVue"),Pr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(at));function ul(e){at(e)||(e=String(e));const t=ee(this);return Se(t,"has",e),t.hasOwnProperty(e)}class Ir{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,n){if(s==="__v_skip")return t.__v_skip;const i=this._isReadonly,r=this._isShallow;if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return r;if(s==="__v_raw")return n===(i?r?yl:$r:r?Or:jr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=k(t);if(!i){let a;if(o&&(a=ll[s]))return a;if(s==="hasOwnProperty")return ul}const l=Reflect.get(t,s,we(t)?t:n);if((at(s)?Pr.has(s):cl(s))||(i||Se(t,"get",s),r))return l;if(we(l)){const a=o&&Vn(s)?l:l.value;return i&&oe(a)?Pn(a):a}return oe(l)?i?Pn(l):Zs(l):l}}class Tr extends Ir{constructor(t=!1){super(!1,t)}set(t,s,n,i){let r=t[s];const o=k(t)&&Vn(s);if(!this._isShallow){const p=yt(r);if(!Ve(n)&&!yt(n)&&(r=ee(r),n=ee(n)),!o&&we(r)&&!we(n))return p||(r.value=n),!0}const l=o?Number(s)<t.length:ie(t,s),a=Reflect.set(t,s,n,we(t)?t:i);return t===ee(i)&&(l?rt(n,r)&&gt(t,"set",s,n):gt(t,"add",s,n)),a}deleteProperty(t,s){const n=ie(t,s);t[s];const i=Reflect.deleteProperty(t,s);return i&&n&&gt(t,"delete",s,void 0),i}has(t,s){const n=Reflect.has(t,s);return(!at(s)||!Pr.has(s))&&Se(t,"has",s),n}ownKeys(t){return Se(t,"iterate",k(t)?"length":Ut),Reflect.ownKeys(t)}}class fl extends Ir{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const pl=new Tr,dl=new fl,hl=new Tr(!0);const wn=e=>e,js=e=>Reflect.getPrototypeOf(e);function _l(e,t,s){return function(...n){const i=this.__v_raw,r=ee(i),o=Xt(r),l=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,p=i[e](...n),c=s?wn:t?Zt:qe;return!t&&Se(r,"iterate",a?Rn:Ut),ye(Object.create(p),{next(){const{value:u,done:h}=p.next();return h?{value:u,done:h}:{value:l?[c(u[0]),c(u[1])]:c(u),done:h}}})}}function Os(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function gl(e,t){const s={get(i){const r=this.__v_raw,o=ee(r),l=ee(i);e||(rt(i,l)&&Se(o,"get",i),Se(o,"get",l));const{has:a}=js(o),p=t?wn:e?Zt:qe;if(a.call(o,i))return p(r.get(i));if(a.call(o,l))return p(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!e&&Se(ee(i),"iterate",Ut),i.size},has(i){const r=this.__v_raw,o=ee(r),l=ee(i);return e||(rt(i,l)&&Se(o,"has",i),Se(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=ee(l),p=t?wn:e?Zt:qe;return!e&&Se(a,"iterate",Ut),l.forEach((c,u)=>i.call(r,p(c),p(u),o))}};return ye(s,e?{add:Os("add"),set:Os("set"),delete:Os("delete"),clear:Os("clear")}:{add(i){const r=ee(this),o=js(r),l=ee(i),a=!t&&!Ve(i)&&!yt(i)?l:i;return o.has.call(r,a)||rt(i,a)&&o.has.call(r,i)||rt(l,a)&&o.has.call(r,l)||(r.add(a),gt(r,"add",a,a)),this},set(i,r){!t&&!Ve(r)&&!yt(r)&&(r=ee(r));const o=ee(this),{has:l,get:a}=js(o);let p=l.call(o,i);p||(i=ee(i),p=l.call(o,i));const c=a.call(o,i);return o.set(i,r),p?rt(r,c)&&gt(o,"set",i,r):gt(o,"add",i,r),this},delete(i){const r=ee(this),{has:o,get:l}=js(r);let a=o.call(r,i);a||(i=ee(i),a=o.call(r,i)),l&&l.call(r,i);const p=r.delete(i);return a&&gt(r,"delete",i,void 0),p},clear(){const i=ee(this),r=i.size!==0,o=i.clear();return r&&gt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{s[i]=_l(i,e,t)}),s}function Jn(e,t){const s=gl(e,t);return(n,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(ie(s,i)&&i in n?s:n,i,r)}const ml={get:Jn(!1,!1)},vl={get:Jn(!1,!0)},bl={get:Jn(!0,!1)};const jr=new WeakMap,Or=new WeakMap,$r=new WeakMap,yl=new WeakMap;function Al(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function El(e){return e.__v_skip||!Object.isExtensible(e)?0:Al(Wo(e))}function Zs(e){return yt(e)?e:Yn(e,!1,pl,ml,jr)}function Mr(e){return Yn(e,!1,hl,vl,Or)}function Pn(e){return Yn(e,!0,dl,bl,$r)}function Yn(e,t,s,n,i){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=El(e);if(r===0)return e;const o=i.get(e);if(o)return o;const l=new Proxy(e,r===2?n:s);return i.set(e,l),l}function Bt(e){return yt(e)?Bt(e.__v_raw):!!(e&&e.__v_isReactive)}function yt(e){return!!(e&&e.__v_isReadonly)}function Ve(e){return!!(e&&e.__v_isShallow)}function Qn(e){return e?!!e.__v_raw:!1}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function xl(e){return!ie(e,"__v_skip")&&Object.isExtensible(e)&&gr(e,"__v_skip",!0),e}const qe=e=>oe(e)?Zs(e):e,Zt=e=>oe(e)?Pn(e):e;function we(e){return e?e.__v_isRef===!0:!1}function Ke(e){return Nr(e,!1)}function Cl(e){return Nr(e,!0)}function Nr(e,t){return we(e)?e:new Sl(e,t)}class Sl{constructor(t,s){this.dep=new zn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:ee(t),this._value=s?t:qe(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,n=this.__v_isShallow||Ve(t)||yt(t);t=n?t:ee(t),rt(t,s)&&(this._rawValue=t,this._value=n?t:qe(t),this.dep.trigger())}}function Ce(e){return we(e)?e.value:e}const Rl={get:(e,t,s)=>t==="__v_raw"?e:Ce(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const i=e[t];return we(i)&&!we(s)?(i.value=s,!0):Reflect.set(e,t,s,n)}};function Dr(e){return Bt(e)?e:new Proxy(e,Rl)}class wl{constructor(t,s,n){this.fn=t,this.setter=s,this._value=void 0,this.dep=new zn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ys-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return Er(this,!0),!0}get value(){const t=this.dep.track();return Sr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Pl(e,t,s=!1){let n,i;return W(e)?n=e:(n=e.get,i=e.set),new wl(n,i,s)}const $s={},Us=new WeakMap;let Nt;function Il(e,t=!1,s=Nt){if(s){let n=Us.get(s);n||Us.set(s,n=[]),n.push(e)}}function Tl(e,t,s=pe){const{immediate:n,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=s,p=j=>i?j:Ve(j)||i===!1||i===0?wt(j,1):wt(j);let c,u,h,_,R=!1,x=!1;if(we(e)?(u=()=>e.value,R=Ve(e)):Bt(e)?(u=()=>p(e),R=!0):k(e)?(x=!0,R=e.some(j=>Bt(j)||Ve(j)),u=()=>e.map(j=>{if(we(j))return j.value;if(Bt(j))return p(j);if(W(j))return a?a(j,2):j()})):W(e)?t?u=a?()=>a(e,2):e:u=()=>{if(h){vt();try{h()}finally{bt()}}const j=Nt;Nt=c;try{return a?a(e,3,[_]):e(_)}finally{Nt=j}}:u=ot,t&&i){const j=u,G=i===!0?1/0:i;u=()=>wt(j(),G)}const $=il(),w=()=>{c.stop(),$&&$.active&&Hn($.effects,c)};if(r&&t){const j=t;t=(...G)=>{j(...G),w()}}let C=x?new Array(e.length).fill($s):$s;const M=j=>{if(!(!(c.flags&1)||!c.dirty&&!j))if(t){const G=c.run();if(i||R||(x?G.some((Y,J)=>rt(Y,C[J])):rt(G,C))){h&&h();const Y=Nt;Nt=c;try{const J=[G,C===$s?void 0:x&&C[0]===$s?[]:C,_];C=G,a?a(t,3,J):t(...J)}finally{Nt=Y}}}else c.run()};return l&&l(M),c=new yr(u),c.scheduler=o?()=>o(M,!1):M,_=j=>Il(j,!1,c),h=c.onStop=()=>{const j=Us.get(c);if(j){if(a)a(j,4);else for(const G of j)G();Us.delete(c)}},t?n?M(!0):C=c.run():o?o(M.bind(null,!0),!0):c.run(),w.pause=c.pause.bind(c),w.resume=c.resume.bind(c),w.stop=w,w}function wt(e,t=1/0,s){if(t<=0||!oe(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,we(e))wt(e.value,t,s);else if(k(e))for(let n=0;n<e.length;n++)wt(e[n],t,s);else if(pr(e)||Xt(e))e.forEach(n=>{wt(n,t,s)});else if(_r(e)){for(const n in e)wt(e[n],t,s);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&wt(e[n],t,s)}return e}function Is(e,t,s,n){try{return n?e(...n):e()}catch(i){en(i,t,s)}}function Xe(e,t,s,n){if(W(e)){const i=Is(e,t,s,n);return i&&dr(i)&&i.catch(r=>{en(r,t,s)}),i}if(k(e)){const i=[];for(let r=0;r<e.length;r++)i.push(Xe(e[r],t,s,n));return i}}function en(e,t,s,n=!0){const i=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||pe;if(t){let l=t.parent;const a=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${s}`;for(;l;){const c=l.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,a,p)===!1)return}l=l.parent}if(r){vt(),Is(r,null,10,[e,a,p]),bt();return}}jl(e,s,i,n,o)}function jl(e,t,s,n=!0,i=!1){if(i)throw e;console.error(e)}const Te=[];let tt=-1;const zt=[];let St=null,Kt=0;const Lr=Promise.resolve();let Bs=null;function Fs(e){const t=Bs||Lr;return e?t.then(this?e.bind(this):e):t}function Ol(e){let t=tt+1,s=Te.length;for(;t<s;){const n=t+s>>>1,i=Te[n],r=Es(i);r<e||r===e&&i.flags&2?t=n+1:s=n}return t}function Zn(e){if(!(e.flags&1)){const t=Es(e),s=Te[Te.length-1];!s||!(e.flags&2)&&t>=Es(s)?Te.push(e):Te.splice(Ol(t),0,e),e.flags|=1,Ur()}}function Ur(){Bs||(Bs=Lr.then(Fr))}function $l(e){k(e)?zt.push(...e):St&&e.id===-1?St.splice(Kt+1,0,e):e.flags&1||(zt.push(e),e.flags|=1),Ur()}function _i(e,t,s=tt+1){for(;s<Te.length;s++){const n=Te[s];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;Te.splice(s,1),s--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Br(e){if(zt.length){const t=[...new Set(zt)].sort((s,n)=>Es(s)-Es(n));if(zt.length=0,St){St.push(...t);return}for(St=t,Kt=0;Kt<St.length;Kt++){const s=St[Kt];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}St=null,Kt=0}}const Es=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Fr(e){try{for(tt=0;tt<Te.length;tt++){const t=Te[tt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Is(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;tt<Te.length;tt++){const t=Te[tt];t&&(t.flags&=-2)}tt=-1,Te.length=0,Br(),Bs=null,(Te.length||zt.length)&&Fr()}}let We=null,kr=null;function ks(e){const t=We;return We=e,kr=e&&e.type.__scopeId||null,t}function ge(e,t=We,s){if(!t||e._n)return e;const n=(...i)=>{n._d&&Ks(-1);const r=ks(t);let o;try{o=e(...i)}finally{ks(r),n._d&&Ks(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function jt(e,t,s,n){const i=e.dirs,r=t&&t.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[n];a&&(vt(),Xe(a,s,8,[e.el,l,e,t]),bt())}}function Ms(e,t){if(Re){let s=Re.provides;const n=Re.parent&&Re.parent.provides;n===s&&(s=Re.provides=Object.create(n)),s[e]=t}}function lt(e,t,s=!1){const n=Co();if(n||Yt){let i=Yt?Yt._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return s&&W(t)?t.call(n&&n.proxy):t}}const Ml=Symbol.for("v-scx"),Nl=()=>lt(Ml);function Jt(e,t,s){return Hr(e,t,s)}function Hr(e,t,s=pe){const{immediate:n,deep:i,flush:r,once:o}=s,l=ye({},s),a=t&&n||!t&&r!=="post";let p;if(Ss){if(r==="sync"){const _=Nl();p=_.__watcherHandles||(_.__watcherHandles=[])}else if(!a){const _=()=>{};return _.stop=ot,_.resume=ot,_.pause=ot,_}}const c=Re;l.call=(_,R,x)=>Xe(_,c,R,x);let u=!1;r==="post"?l.scheduler=_=>{Ne(_,c&&c.suspense)}:r!=="sync"&&(u=!0,l.scheduler=(_,R)=>{R?_():Zn(_)}),l.augmentJob=_=>{t&&(_.flags|=4),u&&(_.flags|=2,c&&(_.id=c.uid,_.i=c))};const h=Tl(e,t,l);return Ss&&(p?p.push(h):a&&h()),h}function Dl(e,t,s){const n=this.proxy,i=he(e)?e.includes(".")?Vr(n,e):()=>n[e]:e.bind(n,n);let r;W(t)?r=t:(r=t.handler,s=t);const o=Ts(this),l=Hr(i,r.bind(n),s);return o(),l}function Vr(e,t){const s=t.split(".");return()=>{let n=e;for(let i=0;i<s.length&&n;i++)n=n[s[i]];return n}}const Ll=Symbol("_vte"),Kr=e=>e.__isTeleport,st=Symbol("_leaveCb"),ls=Symbol("_enterCb");function Ul(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ss(()=>{e.isMounted=!0}),Zr(()=>{e.isUnmounting=!0}),e}const He=[Function,Array],Wr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:He,onEnter:He,onAfterEnter:He,onEnterCancelled:He,onBeforeLeave:He,onLeave:He,onAfterLeave:He,onLeaveCancelled:He,onBeforeAppear:He,onAppear:He,onAfterAppear:He,onAppearCancelled:He},Gr=e=>{const t=e.subTree;return t.component?Gr(t.component):t},Bl={name:"BaseTransition",props:Wr,setup(e,{slots:t}){const s=Co(),n=Ul();return()=>{const i=t.default&&zr(t.default(),!0);if(!i||!i.length)return;const r=qr(i),o=ee(e),{mode:l}=o;if(n.isLeaving)return hn(r);const a=gi(r);if(!a)return hn(r);let p=In(a,o,n,s,u=>p=u);a.type!==je&&xs(a,p);let c=s.subTree&&gi(s.subTree);if(c&&c.type!==je&&!Dt(c,a)&&Gr(s).type!==je){let u=In(c,o,n,s);if(xs(c,u),l==="out-in"&&a.type!==je)return n.isLeaving=!0,u.afterLeave=()=>{n.isLeaving=!1,s.job.flags&8||s.update(),delete u.afterLeave,c=void 0},hn(r);l==="in-out"&&a.type!==je?u.delayLeave=(h,_,R)=>{const x=Xr(n,c);x[String(c.key)]=c,h[st]=()=>{_(),h[st]=void 0,delete p.delayedLeave,c=void 0},p.delayedLeave=()=>{R(),delete p.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return r}}};function qr(e){let t=e[0];if(e.length>1){for(const s of e)if(s.type!==je){t=s;break}}return t}const Fl=Bl;function Xr(e,t){const{leavingVNodes:s}=e;let n=s.get(t.type);return n||(n=Object.create(null),s.set(t.type,n)),n}function In(e,t,s,n,i){const{appear:r,mode:o,persisted:l=!1,onBeforeEnter:a,onEnter:p,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:_,onAfterLeave:R,onLeaveCancelled:x,onBeforeAppear:$,onAppear:w,onAfterAppear:C,onAppearCancelled:M}=t,j=String(e.key),G=Xr(s,e),Y=(H,X)=>{H&&Xe(H,n,9,X)},J=(H,X)=>{const le=X[1];Y(H,X),k(H)?H.every(N=>N.length<=1)&&le():H.length<=1&&le()},Ae={mode:o,persisted:l,beforeEnter(H){let X=a;if(!s.isMounted)if(r)X=$||a;else return;H[st]&&H[st](!0);const le=G[j];le&&Dt(e,le)&&le.el[st]&&le.el[st](),Y(X,[H])},enter(H){if(G[j]===e)return;let X=p,le=c,N=u;if(!s.isMounted)if(r)X=w||p,le=C||c,N=M||u;else return;let te=!1;H[ls]=Ue=>{te||(te=!0,Ue?Y(N,[H]):Y(le,[H]),Ae.delayedLeave&&Ae.delayedLeave(),H[ls]=void 0)};const Ee=H[ls].bind(null,!1);X?J(X,[H,Ee]):Ee()},leave(H,X){const le=String(e.key);if(H[ls]&&H[ls](!0),s.isUnmounting)return X();Y(h,[H]);let N=!1;H[st]=Ee=>{N||(N=!0,X(),Ee?Y(x,[H]):Y(R,[H]),H[st]=void 0,G[le]===e&&delete G[le])};const te=H[st].bind(null,!1);G[le]=e,_?J(_,[H,te]):te()},clone(H){const X=In(H,t,s,n,i);return i&&i(X),X}};return Ae}function hn(e){if(tn(e))return e=It(e),e.children=null,e}function gi(e){if(!tn(e))return Kr(e.type)&&e.children?qr(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:s}=e;if(s){if(t&16)return s[0];if(t&32&&W(s.default))return s.default()}}function xs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,xs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function zr(e,t=!1,s){let n=[],i=0;for(let r=0;r<e.length;r++){let o=e[r];const l=s==null?o.key:String(s)+String(o.key!=null?o.key:r);o.type===re?(o.patchFlag&128&&i++,n=n.concat(zr(o.children,t,l))):(t||o.type!==je)&&n.push(l!=null?It(o,{key:l}):o)}if(i>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function Jr(e,t){return W(e)?ye({name:e.name},t,{setup:e}):e}function Yr(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function mi(e,t){let s;return!!((s=Object.getOwnPropertyDescriptor(e,t))&&!s.configurable)}const Hs=new WeakMap;function hs(e,t,s,n,i=!1){if(k(e)){e.forEach((x,$)=>hs(x,t&&(k(t)?t[$]:t),s,n,i));return}if(_s(n)&&!i){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&hs(e,t,s,n.component.subTree);return}const r=n.shapeFlag&4?ni(n.component):n.el,o=i?null:r,{i:l,r:a}=e,p=t&&t.r,c=l.refs===pe?l.refs={}:l.refs,u=l.setupState,h=ee(u),_=u===pe?fr:x=>mi(c,x)?!1:ie(h,x),R=(x,$)=>!($&&mi(c,$));if(p!=null&&p!==a){if(vi(t),he(p))c[p]=null,_(p)&&(u[p]=null);else if(we(p)){const x=t;R(p,x.k)&&(p.value=null),x.k&&(c[x.k]=null)}}if(W(a))Is(a,l,12,[o,c]);else{const x=he(a),$=we(a);if(x||$){const w=()=>{if(e.f){const C=x?_(a)?u[a]:c[a]:R()||!e.k?a.value:c[e.k];if(i)k(C)&&Hn(C,r);else if(k(C))C.includes(r)||C.push(r);else if(x)c[a]=[r],_(a)&&(u[a]=c[a]);else{const M=[r];R(a,e.k)&&(a.value=M),e.k&&(c[e.k]=M)}}else x?(c[a]=o,_(a)&&(u[a]=o)):$&&(R(a,e.k)&&(a.value=o),e.k&&(c[e.k]=o))};if(o){const C=()=>{w(),Hs.delete(e)};C.id=-1,Hs.set(e,C),Ne(C,s)}else vi(e),w()}}}function vi(e){const t=Hs.get(e);t&&(t.flags|=8,Hs.delete(e))}Ys().requestIdleCallback;Ys().cancelIdleCallback;const _s=e=>!!e.type.__asyncLoader,tn=e=>e.type.__isKeepAlive;function kl(e,t){Qr(e,"a",t)}function Hl(e,t){Qr(e,"da",t)}function Qr(e,t,s=Re){const n=e.__wdc||(e.__wdc=()=>{let i=s;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(sn(t,n,s),s){let i=s.parent;for(;i&&i.parent;)tn(i.parent.vnode)&&Vl(n,t,s,i),i=i.parent}}function Vl(e,t,s,n){const i=sn(t,e,n,!0);ns(()=>{Hn(n[t],i)},s)}function sn(e,t,s=Re,n=!1){if(s){const i=s[e]||(s[e]=[]),r=t.__weh||(t.__weh=(...o)=>{vt();const l=Ts(s),a=Xe(t,s,e,o);return l(),bt(),a});return n?i.unshift(r):i.push(r),r}}const At=e=>(t,s=Re)=>{(!Ss||e==="sp")&&sn(e,(...n)=>t(...n),s)},Kl=At("bm"),ss=At("m"),Wl=At("bu"),Gl=At("u"),Zr=At("bum"),ns=At("um"),ql=At("sp"),Xl=At("rtg"),zl=At("rtc");function Jl(e,t=Re){sn("ec",e,t)}const eo="components";function is(e,t){return so(eo,e,!0,t)||e}const to=Symbol.for("v-ndc");function Yl(e){return he(e)?so(eo,e,!1)||e:e||to}function so(e,t,s=!0,n=!1){const i=We||Re;if(i){const r=i.type;{const l=Na(r,!1);if(l&&(l===t||l===$e(t)||l===Js($e(t))))return r}const o=bi(i[e]||r[e],t)||bi(i.appContext[e],t);return!o&&n?r:o}}function bi(e,t){return e&&(e[t]||e[$e(t)]||e[Js($e(t))])}function be(e,t,s,n){let i;const r=s,o=k(e);if(o||he(e)){const l=o&&Bt(e);let a=!1,p=!1;l&&(a=!Ve(e),p=yt(e),e=Qs(e)),i=new Array(e.length);for(let c=0,u=e.length;c<u;c++)i[c]=t(a?p?Zt(qe(e[c])):qe(e[c]):e[c],c,void 0,r)}else if(typeof e=="number"){i=new Array(e);for(let l=0;l<e;l++)i[l]=t(l+1,l,void 0,r)}else if(oe(e))if(e[Symbol.iterator])i=Array.from(e,(l,a)=>t(l,a,void 0,r));else{const l=Object.keys(e);i=new Array(l.length);for(let a=0,p=l.length;a<p;a++){const c=l[a];i[a]=t(e[c],c,a,r)}}else i=[];return i}const Tn=e=>e?So(e)?ni(e):Tn(e.parent):null,gs=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Tn(e.parent),$root:e=>Tn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>io(e),$forceUpdate:e=>e.f||(e.f=()=>{Zn(e.update)}),$nextTick:e=>e.n||(e.n=Fs.bind(e.proxy)),$watch:e=>Dl.bind(e)}),_n=(e,t)=>e!==pe&&!e.__isScriptSetup&&ie(e,t),Ql={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:n,data:i,props:r,accessCache:o,type:l,appContext:a}=e;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return n[t];case 2:return i[t];case 4:return s[t];case 3:return r[t]}else{if(_n(n,t))return o[t]=1,n[t];if(i!==pe&&ie(i,t))return o[t]=2,i[t];if(ie(r,t))return o[t]=3,r[t];if(s!==pe&&ie(s,t))return o[t]=4,s[t];jn&&(o[t]=0)}}const p=gs[t];let c,u;if(p)return t==="$attrs"&&Se(e.attrs,"get",""),p(e);if((c=l.__cssModules)&&(c=c[t]))return c;if(s!==pe&&ie(s,t))return o[t]=4,s[t];if(u=a.config.globalProperties,ie(u,t))return u[t]},set({_:e},t,s){const{data:n,setupState:i,ctx:r}=e;return _n(i,t)?(i[t]=s,!0):n!==pe&&ie(n,t)?(n[t]=s,!0):ie(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:i,props:r,type:o}},l){let a;return!!(s[l]||e!==pe&&l[0]!=="$"&&ie(e,l)||_n(t,l)||ie(r,l)||ie(n,l)||ie(gs,l)||ie(i.config.globalProperties,l)||(a=o.__cssModules)&&a[l])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:ie(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function yi(e){return k(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let jn=!0;function Zl(e){const t=io(e),s=e.proxy,n=e.ctx;jn=!1,t.beforeCreate&&Ai(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:p,created:c,beforeMount:u,mounted:h,beforeUpdate:_,updated:R,activated:x,deactivated:$,beforeDestroy:w,beforeUnmount:C,destroyed:M,unmounted:j,render:G,renderTracked:Y,renderTriggered:J,errorCaptured:Ae,serverPrefetch:H,expose:X,inheritAttrs:le,components:N,directives:te,filters:Ee}=t;if(p&&ea(p,n,null),o)for(const ae in o){const se=o[ae];W(se)&&(n[ae]=se.bind(s))}if(i){const ae=i.call(s,s);oe(ae)&&(e.data=Zs(ae))}if(jn=!0,r)for(const ae in r){const se=r[ae],ut=W(se)?se.bind(s,s):W(se.get)?se.get.bind(s,s):ot,Et=!W(se)&&W(se.set)?se.set.bind(s):ot,Je=Oe({get:ut,set:Et});Object.defineProperty(n,ae,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Me=>Je.value=Me})}if(l)for(const ae in l)no(l[ae],n,s,ae);if(a){const ae=W(a)?a.call(s):a;Reflect.ownKeys(ae).forEach(se=>{Ms(se,ae[se])})}c&&Ai(c,e,"c");function _e(ae,se){k(se)?se.forEach(ut=>ae(ut.bind(s))):se&&ae(se.bind(s))}if(_e(Kl,u),_e(ss,h),_e(Wl,_),_e(Gl,R),_e(kl,x),_e(Hl,$),_e(Jl,Ae),_e(zl,Y),_e(Xl,J),_e(Zr,C),_e(ns,j),_e(ql,H),k(X))if(X.length){const ae=e.exposed||(e.exposed={});X.forEach(se=>{Object.defineProperty(ae,se,{get:()=>s[se],set:ut=>s[se]=ut,enumerable:!0})})}else e.exposed||(e.exposed={});G&&e.render===ot&&(e.render=G),le!=null&&(e.inheritAttrs=le),N&&(e.components=N),te&&(e.directives=te),H&&Yr(e)}function ea(e,t,s=ot){k(e)&&(e=On(e));for(const n in e){const i=e[n];let r;oe(i)?"default"in i?r=lt(i.from||n,i.default,!0):r=lt(i.from||n):r=lt(i),we(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[n]=r}}function Ai(e,t,s){Xe(k(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function no(e,t,s,n){let i=n.includes(".")?Vr(s,n):()=>s[n];if(he(e)){const r=t[e];W(r)&&Jt(i,r)}else if(W(e))Jt(i,e.bind(s));else if(oe(e))if(k(e))e.forEach(r=>no(r,t,s,n));else{const r=W(e.handler)?e.handler.bind(s):t[e.handler];W(r)&&Jt(i,r,e)}}function io(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,l=r.get(t);let a;return l?a=l:!i.length&&!s&&!n?a=t:(a={},i.length&&i.forEach(p=>Vs(a,p,o,!0)),Vs(a,t,o)),oe(t)&&r.set(t,a),a}function Vs(e,t,s,n=!1){const{mixins:i,extends:r}=t;r&&Vs(e,r,s,!0),i&&i.forEach(o=>Vs(e,o,s,!0));for(const o in t)if(!(n&&o==="expose")){const l=ta[o]||s&&s[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const ta={data:Ei,props:xi,emits:xi,methods:us,computed:us,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:us,directives:us,watch:na,provide:Ei,inject:sa};function Ei(e,t){return t?e?function(){return ye(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function sa(e,t){return us(On(e),On(t))}function On(e){if(k(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function Pe(e,t){return e?[...new Set([].concat(e,t))]:t}function us(e,t){return e?ye(Object.create(null),e,t):t}function xi(e,t){return e?k(e)&&k(t)?[...new Set([...e,...t])]:ye(Object.create(null),yi(e),yi(t??{})):t}function na(e,t){if(!e)return t;if(!t)return e;const s=ye(Object.create(null),e);for(const n in t)s[n]=Pe(e[n],t[n]);return s}function ro(){return{app:null,config:{isNativeTag:fr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ia=0;function ra(e,t){return function(n,i=null){W(n)||(n=ye({},n)),i!=null&&!oe(i)&&(i=null);const r=ro(),o=new WeakSet,l=[];let a=!1;const p=r.app={_uid:ia++,_component:n,_props:i,_container:null,_context:r,_instance:null,version:La,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&W(c.install)?(o.add(c),c.install(p,...u)):W(c)&&(o.add(c),c(p,...u))),p},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),p},component(c,u){return u?(r.components[c]=u,p):r.components[c]},directive(c,u){return u?(r.directives[c]=u,p):r.directives[c]},mount(c,u,h){if(!a){const _=p._ceVNode||q(n,i);return _.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),e(_,c,h),a=!0,p._container=c,c.__vue_app__=p,ni(_.component)}},onUnmount(c){l.push(c)},unmount(){a&&(Xe(l,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(c,u){return r.provides[c]=u,p},runWithContext(c){const u=Yt;Yt=p;try{return c()}finally{Yt=u}}};return p}}let Yt=null;const oa=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${$e(t)}Modifiers`]||e[`${Ft(t)}Modifiers`];function la(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||pe;let i=s;const r=t.startsWith("update:"),o=r&&oa(n,t.slice(7));o&&(o.trim&&(i=s.map(c=>he(c)?c.trim():c)),o.number&&(i=s.map(Xo)));let l,a=n[l=an(t)]||n[l=an($e(t))];!a&&r&&(a=n[l=an(Ft(t))]),a&&Xe(a,e,6,i);const p=n[l+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Xe(p,e,6,i)}}const aa=new WeakMap;function oo(e,t,s=!1){const n=s?aa:t.emitsCache,i=n.get(e);if(i!==void 0)return i;const r=e.emits;let o={},l=!1;if(!W(e)){const a=p=>{const c=oo(p,t,!0);c&&(l=!0,ye(o,c))};!s&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!l?(oe(e)&&n.set(e,null),null):(k(r)?r.forEach(a=>o[a]=null):ye(o,r),oe(e)&&n.set(e,o),o)}function nn(e,t){return!e||!qs(t)?!1:(t=t.slice(2).replace(/Once$/,""),ie(e,t[0].toLowerCase()+t.slice(1))||ie(e,Ft(t))||ie(e,t))}function Ci(e){const{type:t,vnode:s,proxy:n,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:p,renderCache:c,props:u,data:h,setupState:_,ctx:R,inheritAttrs:x}=e,$=ks(e);let w,C;try{if(s.shapeFlag&4){const j=i||n,G=j;w=it(p.call(G,j,c,u,_,h,R)),C=l}else{const j=t;w=it(j.length>1?j(u,{attrs:l,slots:o,emit:a}):j(u,null)),C=t.props?l:ca(l)}}catch(j){ms.length=0,en(j,e,1),w=q(je)}let M=w;if(C&&x!==!1){const j=Object.keys(C),{shapeFlag:G}=M;j.length&&G&7&&(r&&j.some(Xs)&&(C=ua(C,r)),M=It(M,C,!1,!0))}return s.dirs&&(M=It(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(s.dirs):s.dirs),s.transition&&xs(M,s.transition),w=M,ks($),w}const ca=e=>{let t;for(const s in e)(s==="class"||s==="style"||qs(s))&&((t||(t={}))[s]=e[s]);return t},ua=(e,t)=>{const s={};for(const n in e)(!Xs(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function fa(e,t,s){const{props:n,children:i,component:r}=e,{props:o,children:l,patchFlag:a}=t,p=r.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&a>=0){if(a&1024)return!0;if(a&16)return n?Si(n,o,p):!!o;if(a&8){const c=t.dynamicProps;for(let u=0;u<c.length;u++){const h=c[u];if(lo(o,n,h)&&!nn(p,h))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:n===o?!1:n?o?Si(n,o,p):!0:!!o;return!1}function Si(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const r=n[i];if(lo(t,e,r)&&!nn(s,r))return!0}return!1}function lo(e,t,s){const n=e[s],i=t[s];return s==="style"&&oe(n)&&oe(i)?!Wn(n,i):n!==i}function pa({vnode:e,parent:t,suspense:s},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=n,e=i),i===e)(e=t.vnode).el=n,t=t.parent;else break}s&&s.activeBranch===e&&(s.vnode.el=n)}const ao={},co=()=>Object.create(ao),uo=e=>Object.getPrototypeOf(e)===ao;function da(e,t,s,n=!1){const i={},r=co();e.propsDefaults=Object.create(null),fo(e,t,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);s?e.props=n?i:Mr(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function ha(e,t,s,n){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,l=ee(i),[a]=e.propsOptions;let p=!1;if((n||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let u=0;u<c.length;u++){let h=c[u];if(nn(e.emitsOptions,h))continue;const _=t[h];if(a)if(ie(r,h))_!==r[h]&&(r[h]=_,p=!0);else{const R=$e(h);i[R]=$n(a,l,R,_,e,!1)}else _!==r[h]&&(r[h]=_,p=!0)}}}else{fo(e,t,i,r)&&(p=!0);let c;for(const u in l)(!t||!ie(t,u)&&((c=Ft(u))===u||!ie(t,c)))&&(a?s&&(s[u]!==void 0||s[c]!==void 0)&&(i[u]=$n(a,l,u,void 0,e,!0)):delete i[u]);if(r!==l)for(const u in r)(!t||!ie(t,u))&&(delete r[u],p=!0)}p&&gt(e.attrs,"set","")}function fo(e,t,s,n){const[i,r]=e.propsOptions;let o=!1,l;if(t)for(let a in t){if(fs(a))continue;const p=t[a];let c;i&&ie(i,c=$e(a))?!r||!r.includes(c)?s[c]=p:(l||(l={}))[c]=p:nn(e.emitsOptions,a)||(!(a in n)||p!==n[a])&&(n[a]=p,o=!0)}if(r){const a=ee(s),p=l||pe;for(let c=0;c<r.length;c++){const u=r[c];s[u]=$n(i,a,u,p[u],e,!ie(p,u))}}return o}function $n(e,t,s,n,i,r){const o=e[s];if(o!=null){const l=ie(o,"default");if(l&&n===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&W(a)){const{propsDefaults:p}=i;if(s in p)n=p[s];else{const c=Ts(i);n=p[s]=a.call(null,t),c()}}else n=a;i.ce&&i.ce._setProp(s,n)}o[0]&&(r&&!l?n=!1:o[1]&&(n===""||n===Ft(s))&&(n=!0))}return n}const _a=new WeakMap;function po(e,t,s=!1){const n=s?_a:t.propsCache,i=n.get(e);if(i)return i;const r=e.props,o={},l=[];let a=!1;if(!W(e)){const c=u=>{a=!0;const[h,_]=po(u,t,!0);ye(o,h),_&&l.push(..._)};!s&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!r&&!a)return oe(e)&&n.set(e,qt),qt;if(k(r))for(let c=0;c<r.length;c++){const u=$e(r[c]);Ri(u)&&(o[u]=pe)}else if(r)for(const c in r){const u=$e(c);if(Ri(u)){const h=r[c],_=o[u]=k(h)||W(h)?{type:h}:ye({},h),R=_.type;let x=!1,$=!0;if(k(R))for(let w=0;w<R.length;++w){const C=R[w],M=W(C)&&C.name;if(M==="Boolean"){x=!0;break}else M==="String"&&($=!1)}else x=W(R)&&R.name==="Boolean";_[0]=x,_[1]=$,(x||ie(_,"default"))&&l.push(u)}}const p=[o,l];return oe(e)&&n.set(e,p),p}function Ri(e){return e[0]!=="$"&&!fs(e)}const ei=e=>e==="_"||e==="_ctx"||e==="$stable",ti=e=>k(e)?e.map(it):[it(e)],ga=(e,t,s)=>{if(t._n)return t;const n=ge((...i)=>ti(t(...i)),s);return n._c=!1,n},ho=(e,t,s)=>{const n=e._ctx;for(const i in e){if(ei(i))continue;const r=e[i];if(W(r))t[i]=ga(i,r,n);else if(r!=null){const o=ti(r);t[i]=()=>o}}},_o=(e,t)=>{const s=ti(t);e.slots.default=()=>s},go=(e,t,s)=>{for(const n in t)(s||!ei(n))&&(e[n]=t[n])},ma=(e,t,s)=>{const n=e.slots=co();if(e.vnode.shapeFlag&32){const i=t._;i?(go(n,t,s),s&&gr(n,"_",i,!0)):ho(t,n)}else t&&_o(e,t)},va=(e,t,s)=>{const{vnode:n,slots:i}=e;let r=!0,o=pe;if(n.shapeFlag&32){const l=t._;l?s&&l===1?r=!1:go(i,t,s):(r=!t.$stable,ho(t,i)),o=t}else t&&(_o(e,t),o={default:1});if(r)for(const l in i)!ei(l)&&o[l]==null&&delete i[l]},Ne=xa;function ba(e){return ya(e)}function ya(e,t){const s=Ys();s.__VUE__=!0;const{insert:n,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:p,setElementText:c,parentNode:u,nextSibling:h,setScopeId:_=ot,insertStaticContent:R}=e,x=(f,d,g,v=null,A=null,b=null,I=void 0,P=null,S=!!d.dynamicChildren)=>{if(f===d)return;f&&!Dt(f,d)&&(v=y(f),Me(f,A,b,!0),f=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:E,ref:F,shapeFlag:O}=d;switch(E){case rn:$(f,d,g,v);break;case je:w(f,d,g,v);break;case Ns:f==null&&C(d,g,v,I);break;case re:N(f,d,g,v,A,b,I,P,S);break;default:O&1?G(f,d,g,v,A,b,I,P,S):O&6?te(f,d,g,v,A,b,I,P,S):(O&64||O&128)&&E.process(f,d,g,v,A,b,I,P,S,L)}F!=null&&A?hs(F,f&&f.ref,b,d||f,!d):F==null&&f&&f.ref!=null&&hs(f.ref,null,b,f,!0)},$=(f,d,g,v)=>{if(f==null)n(d.el=l(d.children),g,v);else{const A=d.el=f.el;d.children!==f.children&&p(A,d.children)}},w=(f,d,g,v)=>{f==null?n(d.el=a(d.children||""),g,v):d.el=f.el},C=(f,d,g,v)=>{[f.el,f.anchor]=R(f.children,d,g,v,f.el,f.anchor)},M=({el:f,anchor:d},g,v)=>{let A;for(;f&&f!==d;)A=h(f),n(f,g,v),f=A;n(d,g,v)},j=({el:f,anchor:d})=>{let g;for(;f&&f!==d;)g=h(f),i(f),f=g;i(d)},G=(f,d,g,v,A,b,I,P,S)=>{if(d.type==="svg"?I="svg":d.type==="math"&&(I="mathml"),f==null)Y(d,g,v,A,b,I,P,S);else{const E=f.el&&f.el._isVueCE?f.el:null;try{E&&E._beginPatch(),H(f,d,A,b,I,P,S)}finally{E&&E._endPatch()}}},Y=(f,d,g,v,A,b,I,P)=>{let S,E;const{props:F,shapeFlag:O,transition:U,dirs:V}=f;if(S=f.el=o(f.type,b,F&&F.is,F),O&8?c(S,f.children):O&16&&Ae(f.children,S,null,v,A,gn(f,b),I,P),V&&jt(f,null,v,"created"),J(S,f,f.scopeId,I,v),F){for(const ce in F)ce!=="value"&&!fs(ce)&&r(S,ce,null,F[ce],b,v);"value"in F&&r(S,"value",null,F.value,b),(E=F.onVnodeBeforeMount)&&et(E,v,f)}V&&jt(f,null,v,"beforeMount");const Q=Aa(A,U);Q&&U.beforeEnter(S),n(S,d,g),((E=F&&F.onVnodeMounted)||Q||V)&&Ne(()=>{E&&et(E,v,f),Q&&U.enter(S),V&&jt(f,null,v,"mounted")},A)},J=(f,d,g,v,A)=>{if(g&&_(f,g),v)for(let b=0;b<v.length;b++)_(f,v[b]);if(A){let b=A.subTree;if(d===b||yo(b.type)&&(b.ssContent===d||b.ssFallback===d)){const I=A.vnode;J(f,I,I.scopeId,I.slotScopeIds,A.parent)}}},Ae=(f,d,g,v,A,b,I,P,S=0)=>{for(let E=S;E<f.length;E++){const F=f[E]=P?_t(f[E]):it(f[E]);x(null,F,d,g,v,A,b,I,P)}},H=(f,d,g,v,A,b,I)=>{const P=d.el=f.el;let{patchFlag:S,dynamicChildren:E,dirs:F}=d;S|=f.patchFlag&16;const O=f.props||pe,U=d.props||pe;let V;if(g&&Ot(g,!1),(V=U.onVnodeBeforeUpdate)&&et(V,g,d,f),F&&jt(d,f,g,"beforeUpdate"),g&&Ot(g,!0),(O.innerHTML&&U.innerHTML==null||O.textContent&&U.textContent==null)&&c(P,""),E?X(f.dynamicChildren,E,P,g,v,gn(d,A),b):I||se(f,d,P,null,g,v,gn(d,A),b,!1),S>0){if(S&16)le(P,O,U,g,A);else if(S&2&&O.class!==U.class&&r(P,"class",null,U.class,A),S&4&&r(P,"style",O.style,U.style,A),S&8){const Q=d.dynamicProps;for(let ce=0;ce<Q.length;ce++){const ue=Q[ce],me=O[ue],xe=U[ue];(xe!==me||ue==="value")&&r(P,ue,me,xe,A,g)}}S&1&&f.children!==d.children&&c(P,d.children)}else!I&&E==null&&le(P,O,U,g,A);((V=U.onVnodeUpdated)||F)&&Ne(()=>{V&&et(V,g,d,f),F&&jt(d,f,g,"updated")},v)},X=(f,d,g,v,A,b,I)=>{for(let P=0;P<d.length;P++){const S=f[P],E=d[P],F=S.el&&(S.type===re||!Dt(S,E)||S.shapeFlag&198)?u(S.el):g;x(S,E,F,null,v,A,b,I,!0)}},le=(f,d,g,v,A)=>{if(d!==g){if(d!==pe)for(const b in d)!fs(b)&&!(b in g)&&r(f,b,d[b],null,A,v);for(const b in g){if(fs(b))continue;const I=g[b],P=d[b];I!==P&&b!=="value"&&r(f,b,P,I,A,v)}"value"in g&&r(f,"value",d.value,g.value,A)}},N=(f,d,g,v,A,b,I,P,S)=>{const E=d.el=f?f.el:l(""),F=d.anchor=f?f.anchor:l("");let{patchFlag:O,dynamicChildren:U,slotScopeIds:V}=d;V&&(P=P?P.concat(V):V),f==null?(n(E,g,v),n(F,g,v),Ae(d.children||[],g,F,A,b,I,P,S)):O>0&&O&64&&U&&f.dynamicChildren&&f.dynamicChildren.length===U.length?(X(f.dynamicChildren,U,g,A,b,I,P),(d.key!=null||A&&d===A.subTree)&&mo(f,d,!0)):se(f,d,g,F,A,b,I,P,S)},te=(f,d,g,v,A,b,I,P,S)=>{d.slotScopeIds=P,f==null?d.shapeFlag&512?A.ctx.activate(d,g,v,I,S):Ee(d,g,v,A,b,I,S):Ue(f,d,S)},Ee=(f,d,g,v,A,b,I)=>{const P=f.component=Ta(f,v,A);if(tn(f)&&(P.ctx.renderer=L),ja(P,!1,I),P.asyncDep){if(A&&A.registerDep(P,_e,I),!f.el){const S=P.subTree=q(je);w(null,S,d,g),f.placeholder=S.el}}else _e(P,f,d,g,A,b,I)},Ue=(f,d,g)=>{const v=d.component=f.component;if(fa(f,d,g))if(v.asyncDep&&!v.asyncResolved){ae(v,d,g);return}else v.next=d,v.update();else d.el=f.el,v.vnode=d},_e=(f,d,g,v,A,b,I)=>{const P=()=>{if(f.isMounted){let{next:O,bu:U,u:V,parent:Q,vnode:ce}=f;{const Qe=vo(f);if(Qe){O&&(O.el=ce.el,ae(f,O,I)),Qe.asyncDep.then(()=>{Ne(()=>{f.isUnmounted||E()},A)});return}}let ue=O,me;Ot(f,!1),O?(O.el=ce.el,ae(f,O,I)):O=ce,U&&cn(U),(me=O.props&&O.props.onVnodeBeforeUpdate)&&et(me,Q,O,ce),Ot(f,!0);const xe=Ci(f),Ye=f.subTree;f.subTree=xe,x(Ye,xe,u(Ye.el),y(Ye),f,A,b),O.el=xe.el,ue===null&&pa(f,xe.el),V&&Ne(V,A),(me=O.props&&O.props.onVnodeUpdated)&&Ne(()=>et(me,Q,O,ce),A)}else{let O;const{el:U,props:V}=d,{bm:Q,m:ce,parent:ue,root:me,type:xe}=f,Ye=_s(d);Ot(f,!1),Q&&cn(Q),!Ye&&(O=V&&V.onVnodeBeforeMount)&&et(O,ue,d),Ot(f,!0);{me.ce&&me.ce._hasShadowRoot()&&me.ce._injectChildStyle(xe,f.parent?f.parent.type:void 0);const Qe=f.subTree=Ci(f);x(null,Qe,g,v,f,A,b),d.el=Qe.el}if(ce&&Ne(ce,A),!Ye&&(O=V&&V.onVnodeMounted)){const Qe=d;Ne(()=>et(O,ue,Qe),A)}(d.shapeFlag&256||ue&&_s(ue.vnode)&&ue.vnode.shapeFlag&256)&&f.a&&Ne(f.a,A),f.isMounted=!0,d=g=v=null}};f.scope.on();const S=f.effect=new yr(P);f.scope.off();const E=f.update=S.run.bind(S),F=f.job=S.runIfDirty.bind(S);F.i=f,F.id=f.uid,S.scheduler=()=>Zn(F),Ot(f,!0),E()},ae=(f,d,g)=>{d.component=f;const v=f.vnode.props;f.vnode=d,f.next=null,ha(f,d.props,v,g),va(f,d.children,g),vt(),_i(f),bt()},se=(f,d,g,v,A,b,I,P,S=!1)=>{const E=f&&f.children,F=f?f.shapeFlag:0,O=d.children,{patchFlag:U,shapeFlag:V}=d;if(U>0){if(U&128){Et(E,O,g,v,A,b,I,P,S);return}else if(U&256){ut(E,O,g,v,A,b,I,P,S);return}}V&8?(F&16&&ke(E,A,b),O!==E&&c(g,O)):F&16?V&16?Et(E,O,g,v,A,b,I,P,S):ke(E,A,b,!0):(F&8&&c(g,""),V&16&&Ae(O,g,v,A,b,I,P,S))},ut=(f,d,g,v,A,b,I,P,S)=>{f=f||qt,d=d||qt;const E=f.length,F=d.length,O=Math.min(E,F);let U;for(U=0;U<O;U++){const V=d[U]=S?_t(d[U]):it(d[U]);x(f[U],V,g,null,A,b,I,P,S)}E>F?ke(f,A,b,!0,!1,O):Ae(d,g,v,A,b,I,P,S,O)},Et=(f,d,g,v,A,b,I,P,S)=>{let E=0;const F=d.length;let O=f.length-1,U=F-1;for(;E<=O&&E<=U;){const V=f[E],Q=d[E]=S?_t(d[E]):it(d[E]);if(Dt(V,Q))x(V,Q,g,null,A,b,I,P,S);else break;E++}for(;E<=O&&E<=U;){const V=f[O],Q=d[U]=S?_t(d[U]):it(d[U]);if(Dt(V,Q))x(V,Q,g,null,A,b,I,P,S);else break;O--,U--}if(E>O){if(E<=U){const V=U+1,Q=V<F?d[V].el:v;for(;E<=U;)x(null,d[E]=S?_t(d[E]):it(d[E]),g,Q,A,b,I,P,S),E++}}else if(E>U)for(;E<=O;)Me(f[E],A,b,!0),E++;else{const V=E,Q=E,ce=new Map;for(E=Q;E<=U;E++){const Be=d[E]=S?_t(d[E]):it(d[E]);Be.key!=null&&ce.set(Be.key,E)}let ue,me=0;const xe=U-Q+1;let Ye=!1,Qe=0;const rs=new Array(xe);for(E=0;E<xe;E++)rs[E]=0;for(E=V;E<=O;E++){const Be=f[E];if(me>=xe){Me(Be,A,b,!0);continue}let Ze;if(Be.key!=null)Ze=ce.get(Be.key);else for(ue=Q;ue<=U;ue++)if(rs[ue-Q]===0&&Dt(Be,d[ue])){Ze=ue;break}Ze===void 0?Me(Be,A,b,!0):(rs[Ze-Q]=E+1,Ze>=Qe?Qe=Ze:Ye=!0,x(Be,d[Ze],g,null,A,b,I,P,S),me++)}const ai=Ye?Ea(rs):qt;for(ue=ai.length-1,E=xe-1;E>=0;E--){const Be=Q+E,Ze=d[Be],ci=d[Be+1],ui=Be+1<F?ci.el||bo(ci):v;rs[E]===0?x(null,Ze,g,ui,A,b,I,P,S):Ye&&(ue<0||E!==ai[ue]?Je(Ze,g,ui,2):ue--)}}},Je=(f,d,g,v,A=null)=>{const{el:b,type:I,transition:P,children:S,shapeFlag:E}=f;if(E&6){Je(f.component.subTree,d,g,v);return}if(E&128){f.suspense.move(d,g,v);return}if(E&64){I.move(f,d,g,L);return}if(I===re){n(b,d,g);for(let O=0;O<S.length;O++)Je(S[O],d,g,v);n(f.anchor,d,g);return}if(I===Ns){M(f,d,g);return}if(v!==2&&E&1&&P)if(v===0)P.beforeEnter(b),n(b,d,g),Ne(()=>P.enter(b),A);else{const{leave:O,delayLeave:U,afterLeave:V}=P,Q=()=>{f.ctx.isUnmounted?i(b):n(b,d,g)},ce=()=>{b._isLeaving&&b[st](!0),O(b,()=>{Q(),V&&V()})};U?U(b,Q,ce):ce()}else n(b,d,g)},Me=(f,d,g,v=!1,A=!1)=>{const{type:b,props:I,ref:P,children:S,dynamicChildren:E,shapeFlag:F,patchFlag:O,dirs:U,cacheIndex:V,memo:Q}=f;if(O===-2&&(A=!1),P!=null&&(vt(),hs(P,null,g,f,!0),bt()),V!=null&&(d.renderCache[V]=void 0),F&256){d.ctx.deactivate(f);return}const ce=F&1&&U,ue=!_s(f);let me;if(ue&&(me=I&&I.onVnodeBeforeUnmount)&&et(me,d,f),F&6)Tt(f.component,g,v);else{if(F&128){f.suspense.unmount(g,v);return}ce&&jt(f,null,d,"beforeUnmount"),F&64?f.type.remove(f,d,g,L,v):E&&!E.hasOnce&&(b!==re||O>0&&O&64)?ke(E,d,g,!1,!0):(b===re&&O&384||!A&&F&16)&&ke(S,d,g),v&&kt(f)}const xe=Q!=null&&V==null;(ue&&(me=I&&I.onVnodeUnmounted)||ce||xe)&&Ne(()=>{me&&et(me,d,f),ce&&jt(f,null,d,"unmounted"),xe&&(f.el=null)},g)},kt=f=>{const{type:d,el:g,anchor:v,transition:A}=f;if(d===re){Ht(g,v);return}if(d===Ns){j(f);return}const b=()=>{i(g),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(f.shapeFlag&1&&A&&!A.persisted){const{leave:I,delayLeave:P}=A,S=()=>I(g,b);P?P(f.el,b,S):S()}else b()},Ht=(f,d)=>{let g;for(;f!==d;)g=h(f),i(f),f=g;i(d)},Tt=(f,d,g)=>{const{bum:v,scope:A,job:b,subTree:I,um:P,m:S,a:E}=f;wi(S),wi(E),v&&cn(v),A.stop(),b&&(b.flags|=8,Me(I,f,d,g)),P&&Ne(P,d),Ne(()=>{f.isUnmounted=!0},d)},ke=(f,d,g,v=!1,A=!1,b=0)=>{for(let I=b;I<f.length;I++)Me(f[I],d,g,v,A)},y=f=>{if(f.shapeFlag&6)return y(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const d=h(f.anchor||f.el),g=d&&d[Ll];return g?h(g):d};let D=!1;const T=(f,d,g)=>{let v;f==null?d._vnode&&(Me(d._vnode,null,null,!0),v=d._vnode.component):x(d._vnode||null,f,d,null,null,null,g),d._vnode=f,D||(D=!0,_i(v),Br(),D=!1)},L={p:x,um:Me,m:Je,r:kt,mt:Ee,mc:Ae,pc:se,pbc:X,n:y,o:e};return{render:T,hydrate:void 0,createApp:ra(T)}}function gn({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function Ot({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Aa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function mo(e,t,s=!1){const n=e.children,i=t.children;if(k(n)&&k(i))for(let r=0;r<n.length;r++){const o=n[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=_t(i[r]),l.el=o.el),!s&&l.patchFlag!==-2&&mo(o,l)),l.type===rn&&(l.patchFlag===-1&&(l=i[r]=_t(l)),l.el=o.el),l.type===je&&!l.el&&(l.el=o.el)}}function Ea(e){const t=e.slice(),s=[0];let n,i,r,o,l;const a=e.length;for(n=0;n<a;n++){const p=e[n];if(p!==0){if(i=s[s.length-1],e[i]<p){t[n]=i,s.push(n);continue}for(r=0,o=s.length-1;r<o;)l=r+o>>1,e[s[l]]<p?r=l+1:o=l;p<e[s[r]]&&(r>0&&(t[n]=s[r-1]),s[r]=n)}}for(r=s.length,o=s[r-1];r-- >0;)s[r]=o,o=t[o];return s}function vo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:vo(t)}function wi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function bo(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?bo(t.subTree):null}const yo=e=>e.__isSuspense;function xa(e,t){t&&t.pendingBranch?k(e)?t.effects.push(...e):t.effects.push(e):$l(e)}const re=Symbol.for("v-fgt"),rn=Symbol.for("v-txt"),je=Symbol.for("v-cmt"),Ns=Symbol.for("v-stc"),ms=[];let Fe=null;function B(e=!1){ms.push(Fe=e?null:[])}function Ca(){ms.pop(),Fe=ms[ms.length-1]||null}let Cs=1;function Ks(e,t=!1){Cs+=e,e<0&&Fe&&t&&(Fe.hasOnce=!0)}function Ao(e){return e.dynamicChildren=Cs>0?Fe||qt:null,Ca(),Cs>0&&Fe&&Fe.push(e),e}function K(e,t,s,n,i,r){return Ao(m(e,t,s,n,i,r,!0))}function Pt(e,t,s,n,i){return Ao(q(e,t,s,n,i,!0))}function Ws(e){return e?e.__v_isVNode===!0:!1}function Dt(e,t){return e.type===t.type&&e.key===t.key}const Eo=({key:e})=>e??null,Ds=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?he(e)||we(e)||W(e)?{i:We,r:e,k:t,f:!!s}:e:null);function m(e,t=null,s=null,n=0,i=null,r=e===re?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Eo(t),ref:t&&Ds(t),scopeId:kr,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:We};return l?(si(a,s),r&128&&e.normalize(a)):s&&(a.shapeFlag|=he(s)?8:16),Cs>0&&!o&&Fe&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Fe.push(a),a}const q=Sa;function Sa(e,t=null,s=null,n=0,i=null,r=!1){if((!e||e===to)&&(e=je),Ws(e)){const l=It(e,t,!0);return s&&si(l,s),Cs>0&&!r&&Fe&&(l.shapeFlag&6?Fe[Fe.indexOf(e)]=l:Fe.push(l)),l.patchFlag=-2,l}if(Da(e)&&(e=e.__vccOpts),t){t=Ra(t);let{class:l,style:a}=t;l&&!he(l)&&(t.class=ct(l)),oe(a)&&(Qn(a)&&!k(a)&&(a=ye({},a)),t.style=Kn(a))}const o=he(e)?1:yo(e)?128:Kr(e)?64:oe(e)?4:W(e)?2:0;return m(e,t,s,n,i,o,r,!0)}function Ra(e){return e?Qn(e)||uo(e)?ye({},e):e:null}function It(e,t,s=!1,n=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=e,p=t?wa(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Eo(p),ref:t&&t.ref?s&&r?k(r)?r.concat(Ds(t)):[r,Ds(t)]:Ds(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==re?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&It(e.ssContent),ssFallback:e.ssFallback&&It(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&n&&xs(c,a.clone(c)),c}function Le(e=" ",t=0){return q(rn,null,e,t)}function Qt(e,t){const s=q(Ns,null,e);return s.staticCount=t,s}function xo(e="",t=!1){return t?(B(),Pt(je,null,e)):q(je,null,e)}function it(e){return e==null||typeof e=="boolean"?q(je):k(e)?q(re,null,e.slice()):Ws(e)?_t(e):q(rn,null,String(e))}function _t(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:It(e)}function si(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(k(t))s=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),si(e,i()),i._c&&(i._d=!0));return}else{s=32;const i=t._;!i&&!uo(t)?t._ctx=We:i===3&&We&&(We.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:We},s=32):(t=String(t),n&64?(s=16,t=[Le(t)]):s=8);e.children=t,e.shapeFlag|=s}function wa(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=ct([t.class,n.class]));else if(i==="style")t.style=Kn([t.style,n.style]);else if(qs(i)){const r=t[i],o=n[i];o&&r!==o&&!(k(r)&&r.includes(o))?t[i]=r?[].concat(r,o):o:o==null&&r==null&&!Xs(i)&&(t[i]=o)}else i!==""&&(t[i]=n[i])}return t}function et(e,t,s,n=null){Xe(e,t,7,[s,n])}const Pa=ro();let Ia=0;function Ta(e,t,s){const n=e.type,i=(t?t.appContext:e.appContext)||Pa,r={uid:Ia++,vnode:e,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new nl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:po(n,i),emitsOptions:oo(n,i),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:n.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=la.bind(null,r),e.ce&&e.ce(r),r}let Re=null;const Co=()=>Re||We;let Gs,Mn;{const e=Ys(),t=(s,n)=>{let i;return(i=e[s])||(i=e[s]=[]),i.push(n),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Gs=t("__VUE_INSTANCE_SETTERS__",s=>Re=s),Mn=t("__VUE_SSR_SETTERS__",s=>Ss=s)}const Ts=e=>{const t=Re;return Gs(e),e.scope.on(),()=>{e.scope.off(),Gs(t)}},Pi=()=>{Re&&Re.scope.off(),Gs(null)};function So(e){return e.vnode.shapeFlag&4}let Ss=!1;function ja(e,t=!1,s=!1){t&&Mn(t);const{props:n,children:i}=e.vnode,r=So(e);da(e,n,r,t),ma(e,i,s||t);const o=r?Oa(e,t):void 0;return t&&Mn(!1),o}function Oa(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ql);const{setup:n}=s;if(n){vt();const i=e.setupContext=n.length>1?Ma(e):null,r=Ts(e),o=Is(n,e,0,[e.props,i]),l=dr(o);if(bt(),r(),(l||e.sp)&&!_s(e)&&Yr(e),l){if(o.then(Pi,Pi),t)return o.then(a=>{Ii(e,a)}).catch(a=>{en(a,e,0)});e.asyncDep=o}else Ii(e,o)}else Ro(e)}function Ii(e,t,s){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=Dr(t)),Ro(e)}function Ro(e,t,s){const n=e.type;e.render||(e.render=n.render||ot);{const i=Ts(e);vt();try{Zl(e)}finally{bt(),i()}}}const $a={get(e,t){return Se(e,"get",""),e[t]}};function Ma(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,$a),slots:e.slots,emit:e.emit,expose:t}}function ni(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Dr(xl(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in gs)return gs[s](e)},has(t,s){return s in t||s in gs}})):e.proxy}function Na(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function Da(e){return W(e)&&"__vccOpts"in e}const Oe=(e,t)=>Pl(e,t,Ss);function ii(e,t,s){try{Ks(-1);const n=arguments.length;return n===2?oe(t)&&!k(t)?Ws(t)?q(e,null,[t]):q(e,t):q(e,null,t):(n>3?s=Array.prototype.slice.call(arguments,2):n===3&&Ws(s)&&(s=[s]),q(e,t,s))}finally{Ks(1)}}const La="3.5.31";let Nn;const Ti=typeof window<"u"&&window.trustedTypes;if(Ti)try{Nn=Ti.createPolicy("vue",{createHTML:e=>e})}catch{}const wo=Nn?e=>Nn.createHTML(e):e=>e,Ua="http://www.w3.org/2000/svg",Ba="http://www.w3.org/1998/Math/MathML",ht=typeof document<"u"?document:null,ji=ht&&ht.createElement("template"),Fa={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const i=t==="svg"?ht.createElementNS(Ua,e):t==="mathml"?ht.createElementNS(Ba,e):s?ht.createElement(e,{is:s}):ht.createElement(e);return e==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:e=>ht.createTextNode(e),createComment:e=>ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,n,i,r){const o=s?s.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),s),!(i===r||!(i=i.nextSibling)););else{ji.innerHTML=wo(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const l=ji.content;if(n==="svg"||n==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,s)}return[o?o.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},xt="transition",as="animation",Rs=Symbol("_vtc"),Po={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ka=ye({},Wr,Po),Ha=e=>(e.displayName="Transition",e.props=ka,e),Va=Ha((e,{slots:t})=>ii(Fl,Ka(e),t)),$t=(e,t=[])=>{k(e)?e.forEach(s=>s(...t)):e&&e(...t)},Oi=e=>e?k(e)?e.some(t=>t.length>1):e.length>1:!1;function Ka(e){const t={};for(const N in e)N in Po||(t[N]=e[N]);if(e.css===!1)return t;const{name:s="v",type:n,duration:i,enterFromClass:r=`${s}-enter-from`,enterActiveClass:o=`${s}-enter-active`,enterToClass:l=`${s}-enter-to`,appearFromClass:a=r,appearActiveClass:p=o,appearToClass:c=l,leaveFromClass:u=`${s}-leave-from`,leaveActiveClass:h=`${s}-leave-active`,leaveToClass:_=`${s}-leave-to`}=e,R=Wa(i),x=R&&R[0],$=R&&R[1],{onBeforeEnter:w,onEnter:C,onEnterCancelled:M,onLeave:j,onLeaveCancelled:G,onBeforeAppear:Y=w,onAppear:J=C,onAppearCancelled:Ae=M}=t,H=(N,te,Ee,Ue)=>{N._enterCancelled=Ue,Mt(N,te?c:l),Mt(N,te?p:o),Ee&&Ee()},X=(N,te)=>{N._isLeaving=!1,Mt(N,u),Mt(N,_),Mt(N,h),te&&te()},le=N=>(te,Ee)=>{const Ue=N?J:C,_e=()=>H(te,N,Ee);$t(Ue,[te,_e]),$i(()=>{Mt(te,N?a:r),pt(te,N?c:l),Oi(Ue)||Mi(te,n,x,_e)})};return ye(t,{onBeforeEnter(N){$t(w,[N]),pt(N,r),pt(N,o)},onBeforeAppear(N){$t(Y,[N]),pt(N,a),pt(N,p)},onEnter:le(!1),onAppear:le(!0),onLeave(N,te){N._isLeaving=!0;const Ee=()=>X(N,te);pt(N,u),N._enterCancelled?(pt(N,h),Li(N)):(Li(N),pt(N,h)),$i(()=>{N._isLeaving&&(Mt(N,u),pt(N,_),Oi(j)||Mi(N,n,$,Ee))}),$t(j,[N,Ee])},onEnterCancelled(N){H(N,!1,void 0,!0),$t(M,[N])},onAppearCancelled(N){H(N,!0,void 0,!0),$t(Ae,[N])},onLeaveCancelled(N){X(N),$t(G,[N])}})}function Wa(e){if(e==null)return null;if(oe(e))return[mn(e.enter),mn(e.leave)];{const t=mn(e);return[t,t]}}function mn(e){return zo(e)}function pt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e[Rs]||(e[Rs]=new Set)).add(t)}function Mt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const s=e[Rs];s&&(s.delete(t),s.size||(e[Rs]=void 0))}function $i(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ga=0;function Mi(e,t,s,n){const i=e._endId=++Ga,r=()=>{i===e._endId&&n()};if(s!=null)return setTimeout(r,s);const{type:o,timeout:l,propCount:a}=qa(e,t);if(!o)return n();const p=o+"end";let c=0;const u=()=>{e.removeEventListener(p,h),r()},h=_=>{_.target===e&&++c>=a&&u()};setTimeout(()=>{c<a&&u()},l+1),e.addEventListener(p,h)}function qa(e,t){const s=window.getComputedStyle(e),n=R=>(s[R]||"").split(", "),i=n(`${xt}Delay`),r=n(`${xt}Duration`),o=Ni(i,r),l=n(`${as}Delay`),a=n(`${as}Duration`),p=Ni(l,a);let c=null,u=0,h=0;t===xt?o>0&&(c=xt,u=o,h=r.length):t===as?p>0&&(c=as,u=p,h=a.length):(u=Math.max(o,p),c=u>0?o>p?xt:as:null,h=c?c===xt?r.length:a.length:0);const _=c===xt&&/\b(?:transform|all)(?:,|$)/.test(n(`${xt}Property`).toString());return{type:c,timeout:u,propCount:h,hasTransform:_}}function Ni(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((s,n)=>Di(s)+Di(e[n])))}function Di(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Li(e){return(e?e.ownerDocument:document).body.offsetHeight}function Xa(e,t,s){const n=e[Rs];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const Ui=Symbol("_vod"),za=Symbol("_vsh"),Ja=Symbol(""),Ya=/(?:^|;)\s*display\s*:/;function Qa(e,t,s){const n=e.style,i=he(s);let r=!1;if(s&&!i){if(t)if(he(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();s[l]==null&&Ls(n,l,"")}else for(const o in t)s[o]==null&&Ls(n,o,"");for(const o in s)o==="display"&&(r=!0),Ls(n,o,s[o])}else if(i){if(t!==s){const o=n[Ja];o&&(s+=";"+o),n.cssText=s,r=Ya.test(s)}}else t&&e.removeAttribute("style");Ui in e&&(e[Ui]=r?n.display:"",e[za]&&(n.display="none"))}const Bi=/\s*!important$/;function Ls(e,t,s){if(k(s))s.forEach(n=>Ls(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=Za(e,t);Bi.test(s)?e.setProperty(Ft(n),s.replace(Bi,""),"important"):e[n]=s}}const Fi=["Webkit","Moz","ms"],vn={};function Za(e,t){const s=vn[t];if(s)return s;let n=$e(t);if(n!=="filter"&&n in e)return vn[t]=n;n=Js(n);for(let i=0;i<Fi.length;i++){const r=Fi[i]+n;if(r in e)return vn[t]=r}return t}const ki="http://www.w3.org/1999/xlink";function Hi(e,t,s,n,i,r=tl(t)){n&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(ki,t.slice(6,t.length)):e.setAttributeNS(ki,t,s):s==null||r&&!mr(s)?e.removeAttribute(t):e.setAttribute(t,r?"":at(s)?String(s):s)}function Vi(e,t,s,n,i){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?wo(s):s);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?e.getAttribute("value")||"":e.value,a=s==null?e.type==="checkbox"?"on":"":String(s);(l!==a||!("_value"in e))&&(e.value=a),s==null&&e.removeAttribute(t),e._value=s;return}let o=!1;if(s===""||s==null){const l=typeof e[t];l==="boolean"?s=mr(s):s==null&&l==="string"?(s="",o=!0):l==="number"&&(s=0,o=!0)}try{e[t]=s}catch{}o&&e.removeAttribute(i||t)}function ec(e,t,s,n){e.addEventListener(t,s,n)}function tc(e,t,s,n){e.removeEventListener(t,s,n)}const Ki=Symbol("_vei");function sc(e,t,s,n,i=null){const r=e[Ki]||(e[Ki]={}),o=r[t];if(n&&o)o.value=n;else{const[l,a]=nc(t);if(n){const p=r[t]=oc(n,i);ec(e,l,p,a)}else o&&(tc(e,l,o,a),r[t]=void 0)}}const Wi=/(?:Once|Passive|Capture)$/;function nc(e){let t;if(Wi.test(e)){t={};let n;for(;n=e.match(Wi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ft(e.slice(2)),t]}let bn=0;const ic=Promise.resolve(),rc=()=>bn||(ic.then(()=>bn=0),bn=Date.now());function oc(e,t){const s=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=s.attached)return;Xe(lc(n,s.value),t,5,[n])};return s.value=e,s.attached=rc(),s}function lc(e,t){if(k(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>i=>!i._stopped&&n&&n(i))}else return t}const Gi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ac=(e,t,s,n,i,r)=>{const o=i==="svg";t==="class"?Xa(e,n,o):t==="style"?Qa(e,s,n):qs(t)?Xs(t)||sc(e,t,s,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):cc(e,t,n,o))?(Vi(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Hi(e,t,n,o,r,t!=="value")):e._isVueCE&&(uc(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!he(n)))?Vi(e,$e(t),n,r,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Hi(e,t,n,o))};function cc(e,t,s,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Gi(t)&&W(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Gi(t)&&he(s)?!1:t in e}function uc(e,t){const s=e._def.props;if(!s)return!1;const n=$e(t);return Array.isArray(s)?s.some(i=>$e(i)===n):Object.keys(s).some(i=>$e(i)===n)}const fc=["ctrl","shift","alt","meta"],pc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>fc.some(s=>e[`${s}Key`]&&!t.includes(s))},qi=(e,t)=>{if(!e)return e;const s=e._withMods||(e._withMods={}),n=t.join(".");return s[n]||(s[n]=((i,...r)=>{for(let o=0;o<t.length;o++){const l=pc[t[o]];if(l&&l(i,t))return}return e(i,...r)}))},dc=ye({patchProp:ac},Fa);let Xi;function hc(){return Xi||(Xi=ba(dc))}const _c=((...e)=>{const t=hc().createApp(...e),{mount:s}=t;return t.mount=n=>{const i=mc(n);if(!i)return;const r=t._component;!W(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=s(i,!1,gc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t});function gc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function mc(e){return he(e)?document.querySelector(e):e}const Wt=typeof document<"u";function Io(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function vc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Io(e.default)}const ne=Object.assign;function yn(e,t){const s={};for(const n in t){const i=t[n];s[n]=ze(i)?i.map(e):e(i)}return s}const vs=()=>{},ze=Array.isArray;function zi(e,t){const s={};for(const n in e)s[n]=n in t?t[n]:e[n];return s}let de=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const To=Symbol("");de.MATCHER_NOT_FOUND+"",de.NAVIGATION_GUARD_REDIRECT+"",de.NAVIGATION_ABORTED+"",de.NAVIGATION_CANCELLED+"",de.NAVIGATION_DUPLICATED+"";function es(e,t){return ne(new Error,{type:e,[To]:!0},t)}function dt(e,t){return e instanceof Error&&To in e&&(t==null||!!(e.type&t))}const bc=["params","query","hash"];function yc(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const s of bc)s in e&&(t[s]=e[s]);return JSON.stringify(t,null,2)}const Ac=Symbol(""),Ji=Symbol(""),ri=Symbol(""),oi=Symbol(""),Dn=Symbol("");function jo(e){return lt(oi)}const Oo=/#/g,Ec=/&/g,xc=/\//g,Cc=/=/g,Sc=/\?/g,$o=/\+/g,Rc=/%5B/g,wc=/%5D/g,Mo=/%5E/g,Pc=/%60/g,No=/%7B/g,Ic=/%7C/g,Do=/%7D/g,Tc=/%20/g;function li(e){return e==null?"":encodeURI(""+e).replace(Ic,"|").replace(Rc,"[").replace(wc,"]")}function jc(e){return li(e).replace(No,"{").replace(Do,"}").replace(Mo,"^")}function Ln(e){return li(e).replace($o,"%2B").replace(Tc,"+").replace(Oo,"%23").replace(Ec,"%26").replace(Pc,"`").replace(No,"{").replace(Do,"}").replace(Mo,"^")}function Oc(e){return Ln(e).replace(Cc,"%3D")}function $c(e){return li(e).replace(Oo,"%23").replace(Sc,"%3F")}function Mc(e){return $c(e).replace(xc,"%2F")}function ws(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Nc=/\/$/,Dc=e=>e.replace(Nc,"");function An(e,t,s="/"){let n,i={},r="",o="";const l=t.indexOf("#");let a=t.indexOf("?");return a=l>=0&&a>l?-1:a,a>=0&&(n=t.slice(0,a),r=t.slice(a,l>0?l:t.length),i=e(r.slice(1))),l>=0&&(n=n||t.slice(0,l),o=t.slice(l,t.length)),n=Fc(n??t,s),{fullPath:n+r+o,path:n,query:i,hash:ws(o)}}function Lc(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function Yi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Uc(e,t,s){const n=t.matched.length-1,i=s.matched.length-1;return n>-1&&n===i&&ts(t.matched[n],s.matched[i])&&Lo(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function ts(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Lo(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var s in e)if(!Bc(e[s],t[s]))return!1;return!0}function Bc(e,t){return ze(e)?Qi(e,t):ze(t)?Qi(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function Qi(e,t){return ze(t)?e.length===t.length&&e.every((s,n)=>s===t[n]):e.length===1&&e[0]===t}function Fc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),n=e.split("/"),i=n[n.length-1];(i===".."||i===".")&&n.push("");let r=s.length-1,o,l;for(o=0;o<n.length;o++)if(l=n[o],l!==".")if(l==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+n.slice(o).join("/")}const Ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Un=(function(e){return e.pop="pop",e.push="push",e})({}),En=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function kc(e){if(!e)if(Wt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Dc(e)}const Hc=/^[^#]+#/;function Vc(e,t){return e.replace(Hc,"#")+t}function Kc(e,t){const s=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-s.left-(t.left||0),top:n.top-s.top-(t.top||0)}}const on=()=>({left:window.scrollX,top:window.scrollY});function Wc(e){let t;if("el"in e){const s=e.el,n=typeof s=="string"&&s.startsWith("#"),i=typeof s=="string"?n?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!i)return;t=Kc(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Zi(e,t){return(history.state?history.state.position-t:-1)+e}const Bn=new Map;function Gc(e,t){Bn.set(e,t)}function qc(e){const t=Bn.get(e);return Bn.delete(e),t}function Xc(e){return typeof e=="string"||e&&typeof e=="object"}function Uo(e){return typeof e=="string"||typeof e=="symbol"}function zc(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<s.length;++n){const i=s[n].replace($o," "),r=i.indexOf("="),o=ws(r<0?i:i.slice(0,r)),l=r<0?null:ws(i.slice(r+1));if(o in t){let a=t[o];ze(a)||(a=t[o]=[a]),a.push(l)}else t[o]=l}return t}function er(e){let t="";for(let s in e){const n=e[s];if(s=Oc(s),n==null){n!==void 0&&(t+=(t.length?"&":"")+s);continue}(ze(n)?n.map(i=>i&&Ln(i)):[n&&Ln(n)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+s,i!=null&&(t+="="+i))})}return t}function Jc(e){const t={};for(const s in e){const n=e[s];n!==void 0&&(t[s]=ze(n)?n.map(i=>i==null?null:""+i):n==null?n:""+n)}return t}function cs(){let e=[];function t(n){return e.push(n),()=>{const i=e.indexOf(n);i>-1&&e.splice(i,1)}}function s(){e=[]}return{add:t,list:()=>e.slice(),reset:s}}function Rt(e,t,s,n,i,r=o=>o()){const o=n&&(n.enterCallbacks[i]=n.enterCallbacks[i]||[]);return()=>new Promise((l,a)=>{const p=h=>{h===!1?a(es(de.NAVIGATION_ABORTED,{from:s,to:t})):h instanceof Error?a(h):Xc(h)?a(es(de.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(o&&n.enterCallbacks[i]===o&&typeof h=="function"&&o.push(h),l())},c=r(()=>e.call(n&&n.instances[i],t,s,p));let u=Promise.resolve(c);e.length<3&&(u=u.then(p)),u.catch(h=>a(h))})}function xn(e,t,s,n,i=r=>r()){const r=[];for(const o of e)for(const l in o.components){let a=o.components[l];if(!(t!=="beforeRouteEnter"&&!o.instances[l]))if(Io(a)){const p=(a.__vccOpts||a)[t];p&&r.push(Rt(p,s,n,o,l,i))}else{let p=a();r.push(()=>p.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const u=vc(c)?c.default:c;o.mods[l]=c,o.components[l]=u;const h=(u.__vccOpts||u)[t];return h&&Rt(h,s,n,o,l,i)()}))}}return r}function Yc(e,t){const s=[],n=[],i=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const l=t.matched[o];l&&(e.matched.find(p=>ts(p,l))?n.push(l):s.push(l));const a=e.matched[o];a&&(t.matched.find(p=>ts(p,a))||i.push(a))}return[s,n,i]}let Qc=()=>location.protocol+"//"+location.host;function Bo(e,t){const{pathname:s,search:n,hash:i}=t,r=e.indexOf("#");if(r>-1){let o=i.includes(e.slice(r))?e.slice(r).length:1,l=i.slice(o);return l[0]!=="/"&&(l="/"+l),Yi(l,"")}return Yi(s,e)+n+i}function Zc(e,t,s,n){let i=[],r=[],o=null;const l=({state:h})=>{const _=Bo(e,location),R=s.value,x=t.value;let $=0;if(h){if(s.value=_,t.value=h,o&&o===R){o=null;return}$=x?h.position-x.position:0}else n(_);i.forEach(w=>{w(s.value,R,{delta:$,type:Un.pop,direction:$?$>0?En.forward:En.back:En.unknown})})};function a(){o=s.value}function p(h){i.push(h);const _=()=>{const R=i.indexOf(h);R>-1&&i.splice(R,1)};return r.push(_),_}function c(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ne({},h.state,{scroll:on()}),"")}}function u(){for(const h of r)h();r=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:a,listen:p,destroy:u}}function tr(e,t,s,n=!1,i=!1){return{back:e,current:t,forward:s,replaced:n,position:window.history.length,scroll:i?on():null}}function eu(e){const{history:t,location:s}=window,n={value:Bo(e,s)},i={value:t.state};i.value||r(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(a,p,c){const u=e.indexOf("#"),h=u>-1?(s.host&&document.querySelector("base")?e:e.slice(u))+a:Qc()+e+a;try{t[c?"replaceState":"pushState"](p,"",h),i.value=p}catch(_){console.error(_),s[c?"replace":"assign"](h)}}function o(a,p){r(a,ne({},t.state,tr(i.value.back,a,i.value.forward,!0),p,{position:i.value.position}),!0),n.value=a}function l(a,p){const c=ne({},i.value,t.state,{forward:a,scroll:on()});r(c.current,c,!0),r(a,ne({},tr(n.value,a,null),{position:c.position+1},p),!1),n.value=a}return{location:n,state:i,push:l,replace:o}}function tu(e){e=kc(e);const t=eu(e),s=Zc(e,t.state,t.location,t.replace);function n(r,o=!0){o||s.pauseListeners(),history.go(r)}const i=ne({location:"",base:e,go:n,createHref:Vc.bind(null,e)},t,s);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function su(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),tu(e)}let Lt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var ve=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(ve||{});const nu={type:Lt.Static,value:""},iu=/[a-zA-Z0-9_]/;function ru(e){if(!e)return[[]];if(e==="/")return[[nu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(_){throw new Error(`ERR (${s})/"${p}": ${_}`)}let s=ve.Static,n=s;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,p="",c="";function u(){p&&(s===ve.Static?r.push({type:Lt.Static,value:p}):s===ve.Param||s===ve.ParamRegExp||s===ve.ParamRegExpEnd?(r.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Lt.Param,value:p,regexp:c,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),p="")}function h(){p+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&s!==ve.ParamRegExp){n=s,s=ve.EscapeNext;continue}switch(s){case ve.Static:a==="/"?(p&&u(),o()):a===":"?(u(),s=ve.Param):h();break;case ve.EscapeNext:h(),s=n;break;case ve.Param:a==="("?s=ve.ParamRegExp:iu.test(a)?h():(u(),s=ve.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case ve.ParamRegExp:a===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+a:s=ve.ParamRegExpEnd:c+=a;break;case ve.ParamRegExpEnd:u(),s=ve.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--,c="";break;default:t("Unknown state");break}}return s===ve.ParamRegExp&&t(`Unfinished custom RegExp for param "${p}"`),u(),o(),i}const sr="[^/]+?",ou={sensitive:!1,strict:!1,start:!0,end:!0};var Ie=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ie||{});const lu=/[.+*?^${}()[\]/\\]/g;function au(e,t){const s=ne({},ou,t),n=[];let i=s.start?"^":"";const r=[];for(const p of e){const c=p.length?[]:[Ie.Root];s.strict&&!p.length&&(i+="/");for(let u=0;u<p.length;u++){const h=p[u];let _=Ie.Segment+(s.sensitive?Ie.BonusCaseSensitive:0);if(h.type===Lt.Static)u||(i+="/"),i+=h.value.replace(lu,"\\$&"),_+=Ie.Static;else if(h.type===Lt.Param){const{value:R,repeatable:x,optional:$,regexp:w}=h;r.push({name:R,repeatable:x,optional:$});const C=w||sr;if(C!==sr){_+=Ie.BonusCustomRegExp;try{new RegExp(`(${C})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${R}" (${C}): `+j.message)}}let M=x?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;u||(M=$&&p.length<2?`(?:/${M})`:"/"+M),$&&(M+="?"),i+=M,_+=Ie.Dynamic,$&&(_+=Ie.BonusOptional),x&&(_+=Ie.BonusRepeatable),C===".*"&&(_+=Ie.BonusWildcard)}c.push(_)}n.push(c)}if(s.strict&&s.end){const p=n.length-1;n[p][n[p].length-1]+=Ie.BonusStrict}s.strict||(i+="/?"),s.end?i+="$":s.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,s.sensitive?"":"i");function l(p){const c=p.match(o),u={};if(!c)return null;for(let h=1;h<c.length;h++){const _=c[h]||"",R=r[h-1];u[R.name]=_&&R.repeatable?_.split("/"):_}return u}function a(p){let c="",u=!1;for(const h of e){(!u||!c.endsWith("/"))&&(c+="/"),u=!1;for(const _ of h)if(_.type===Lt.Static)c+=_.value;else if(_.type===Lt.Param){const{value:R,repeatable:x,optional:$}=_,w=R in p?p[R]:"";if(ze(w)&&!x)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const C=ze(w)?w.join("/"):w;if(!C)if($)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):u=!0);else throw new Error(`Missing required param "${R}"`);c+=C}}return c||"/"}return{re:o,score:n,keys:r,parse:l,stringify:a}}function cu(e,t){let s=0;for(;s<e.length&&s<t.length;){const n=t[s]-e[s];if(n)return n;s++}return e.length<t.length?e.length===1&&e[0]===Ie.Static+Ie.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ie.Static+Ie.Segment?1:-1:0}function Fo(e,t){let s=0;const n=e.score,i=t.score;for(;s<n.length&&s<i.length;){const r=cu(n[s],i[s]);if(r)return r;s++}if(Math.abs(i.length-n.length)===1){if(nr(n))return 1;if(nr(i))return-1}return i.length-n.length}function nr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const uu={strict:!1,end:!0,sensitive:!1};function fu(e,t,s){const n=au(ru(e.path),s),i=ne(n,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function pu(e,t){const s=[],n=new Map;t=zi(uu,t);function i(u){return n.get(u)}function r(u,h,_){const R=!_,x=rr(u);x.aliasOf=_&&_.record;const $=zi(t,u),w=[x];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const G of j)w.push(rr(ne({},x,{components:_?_.record.components:x.components,path:G,aliasOf:_?_.record:x})))}let C,M;for(const j of w){const{path:G}=j;if(h&&G[0]!=="/"){const Y=h.record.path,J=Y[Y.length-1]==="/"?"":"/";j.path=h.record.path+(G&&J+G)}if(C=fu(j,h,$),_?_.alias.push(C):(M=M||C,M!==C&&M.alias.push(C),R&&u.name&&!or(C)&&o(u.name)),ko(C)&&a(C),x.children){const Y=x.children;for(let J=0;J<Y.length;J++)r(Y[J],C,_&&_.children[J])}_=_||C}return M?()=>{o(M)}:vs}function o(u){if(Uo(u)){const h=n.get(u);h&&(n.delete(u),s.splice(s.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=s.indexOf(u);h>-1&&(s.splice(h,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return s}function a(u){const h=_u(u,s);s.splice(h,0,u),u.record.name&&!or(u)&&n.set(u.record.name,u)}function p(u,h){let _,R={},x,$;if("name"in u&&u.name){if(_=n.get(u.name),!_)throw es(de.MATCHER_NOT_FOUND,{location:u});$=_.record.name,R=ne(ir(h.params,_.keys.filter(M=>!M.optional).concat(_.parent?_.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&ir(u.params,_.keys.map(M=>M.name))),x=_.stringify(R)}else if(u.path!=null)x=u.path,_=s.find(M=>M.re.test(x)),_&&(R=_.parse(x),$=_.record.name);else{if(_=h.name?n.get(h.name):s.find(M=>M.re.test(h.path)),!_)throw es(de.MATCHER_NOT_FOUND,{location:u,currentLocation:h});$=_.record.name,R=ne({},h.params,u.params),x=_.stringify(R)}const w=[];let C=_;for(;C;)w.unshift(C.record),C=C.parent;return{name:$,path:x,params:R,matched:w,meta:hu(w)}}e.forEach(u=>r(u));function c(){s.length=0,n.clear()}return{addRoute:r,resolve:p,removeRoute:o,clearRoutes:c,getRoutes:l,getRecordMatcher:i}}function ir(e,t){const s={};for(const n of t)n in e&&(s[n]=e[n]);return s}function rr(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:du(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function du(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const n in e.components)t[n]=typeof s=="object"?s[n]:s;return t}function or(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function hu(e){return e.reduce((t,s)=>ne(t,s.meta),{})}function _u(e,t){let s=0,n=t.length;for(;s!==n;){const r=s+n>>1;Fo(e,t[r])<0?n=r:s=r+1}const i=gu(e);return i&&(n=t.lastIndexOf(i,n-1)),n}function gu(e){let t=e;for(;t=t.parent;)if(ko(t)&&Fo(e,t)===0)return t}function ko({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function lr(e){const t=lt(ri),s=lt(oi),n=Oe(()=>{const a=Ce(e.to);return t.resolve(a)}),i=Oe(()=>{const{matched:a}=n.value,{length:p}=a,c=a[p-1],u=s.matched;if(!c||!u.length)return-1;const h=u.findIndex(ts.bind(null,c));if(h>-1)return h;const _=ar(a[p-2]);return p>1&&ar(c)===_&&u[u.length-1].path!==_?u.findIndex(ts.bind(null,a[p-2])):h}),r=Oe(()=>i.value>-1&&yu(s.params,n.value.params)),o=Oe(()=>i.value>-1&&i.value===s.matched.length-1&&Lo(s.params,n.value.params));function l(a={}){if(bu(a)){const p=t[Ce(e.replace)?"replace":"push"](Ce(e.to)).catch(vs);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:n,href:Oe(()=>n.value.href),isActive:r,isExactActive:o,navigate:l}}function mu(e){return e.length===1?e[0]:e}const vu=Jr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:lr,setup(e,{slots:t}){const s=Zs(lr(e)),{options:n}=lt(ri),i=Oe(()=>({[cr(e.activeClass,n.linkActiveClass,"router-link-active")]:s.isActive,[cr(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=t.default&&mu(t.default(s));return e.custom?r:ii("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:i.value},r)}}}),Gt=vu;function bu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function yu(e,t){for(const s in t){const n=t[s],i=e[s];if(typeof n=="string"){if(n!==i)return!1}else if(!ze(i)||i.length!==n.length||n.some((r,o)=>r.valueOf()!==i[o].valueOf()))return!1}return!0}function ar(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const cr=(e,t,s)=>e??t??s,Au=Jr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const n=lt(Dn),i=Oe(()=>e.route||n.value),r=lt(Ji,0),o=Oe(()=>{let p=Ce(r);const{matched:c}=i.value;let u;for(;(u=c[p])&&!u.components;)p++;return p}),l=Oe(()=>i.value.matched[o.value]);Ms(Ji,Oe(()=>o.value+1)),Ms(Ac,l),Ms(Dn,i);const a=Ke();return Jt(()=>[a.value,l.value,e.name],([p,c,u],[h,_,R])=>{c&&(c.instances[u]=p,_&&_!==c&&p&&p===h&&(c.leaveGuards.size||(c.leaveGuards=_.leaveGuards),c.updateGuards.size||(c.updateGuards=_.updateGuards))),p&&c&&(!_||!ts(c,_)||!h)&&(c.enterCallbacks[u]||[]).forEach(x=>x(p))},{flush:"post"}),()=>{const p=i.value,c=e.name,u=l.value,h=u&&u.components[c];if(!h)return ur(s.default,{Component:h,route:p});const _=u.props[c],R=_?_===!0?p.params:typeof _=="function"?_(p):_:null,$=ii(h,ne({},R,t,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(u.instances[c]=null)},ref:a}));return ur(s.default,{Component:$,route:p})||$}}});function ur(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const Eu=Au;function xu(e){const t=pu(e.routes,e),s=e.parseQuery||zc,n=e.stringifyQuery||er,i=e.history,r=cs(),o=cs(),l=cs(),a=Cl(Ct);let p=Ct;Wt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=yn.bind(null,y=>""+y),u=yn.bind(null,Mc),h=yn.bind(null,ws);function _(y,D){let T,L;return Uo(y)?(T=t.getRecordMatcher(y),L=D):L=y,t.addRoute(L,T)}function R(y){const D=t.getRecordMatcher(y);D&&t.removeRoute(D)}function x(){return t.getRoutes().map(y=>y.record)}function $(y){return!!t.getRecordMatcher(y)}function w(y,D){if(D=ne({},D||a.value),typeof y=="string"){const g=An(s,y,D.path),v=t.resolve({path:g.path},D),A=i.createHref(g.fullPath);return ne(g,v,{params:h(v.params),hash:ws(g.hash),redirectedFrom:void 0,href:A})}let T;if(y.path!=null)T=ne({},y,{path:An(s,y.path,D.path).path});else{const g=ne({},y.params);for(const v in g)g[v]==null&&delete g[v];T=ne({},y,{params:u(g)}),D.params=u(D.params)}const L=t.resolve(T,D),z=y.hash||"";L.params=c(h(L.params));const f=Lc(n,ne({},y,{hash:jc(z),path:L.path})),d=i.createHref(f);return ne({fullPath:f,hash:z,query:n===er?Jc(y.query):y.query||{}},L,{redirectedFrom:void 0,href:d})}function C(y){return typeof y=="string"?An(s,y,a.value.path):ne({},y)}function M(y,D){if(p!==y)return es(de.NAVIGATION_CANCELLED,{from:D,to:y})}function j(y){return J(y)}function G(y){return j(ne(C(y),{replace:!0}))}function Y(y,D){const T=y.matched[y.matched.length-1];if(T&&T.redirect){const{redirect:L}=T;let z=typeof L=="function"?L(y,D):L;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=C(z):{path:z},z.params={}),ne({query:y.query,hash:y.hash,params:z.path!=null?{}:y.params},z)}}function J(y,D){const T=p=w(y),L=a.value,z=y.state,f=y.force,d=y.replace===!0,g=Y(T,L);if(g)return J(ne(C(g),{state:typeof g=="object"?ne({},z,g.state):z,force:f,replace:d}),D||T);const v=T;v.redirectedFrom=D;let A;return!f&&Uc(n,L,T)&&(A=es(de.NAVIGATION_DUPLICATED,{to:v,from:L}),Je(L,L,!0,!1)),(A?Promise.resolve(A):X(v,L)).catch(b=>dt(b)?dt(b,de.NAVIGATION_GUARD_REDIRECT)?b:Et(b):se(b,v,L)).then(b=>{if(b){if(dt(b,de.NAVIGATION_GUARD_REDIRECT))return J(ne({replace:d},C(b.to),{state:typeof b.to=="object"?ne({},z,b.to.state):z,force:f}),D||v)}else b=N(v,L,!0,d,z);return le(v,L,b),b})}function Ae(y,D){const T=M(y,D);return T?Promise.reject(T):Promise.resolve()}function H(y){const D=Ht.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(y):y()}function X(y,D){let T;const[L,z,f]=Yc(y,D);T=xn(L.reverse(),"beforeRouteLeave",y,D);for(const g of L)g.leaveGuards.forEach(v=>{T.push(Rt(v,y,D))});const d=Ae.bind(null,y,D);return T.push(d),ke(T).then(()=>{T=[];for(const g of r.list())T.push(Rt(g,y,D));return T.push(d),ke(T)}).then(()=>{T=xn(z,"beforeRouteUpdate",y,D);for(const g of z)g.updateGuards.forEach(v=>{T.push(Rt(v,y,D))});return T.push(d),ke(T)}).then(()=>{T=[];for(const g of f)if(g.beforeEnter)if(ze(g.beforeEnter))for(const v of g.beforeEnter)T.push(Rt(v,y,D));else T.push(Rt(g.beforeEnter,y,D));return T.push(d),ke(T)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),T=xn(f,"beforeRouteEnter",y,D,H),T.push(d),ke(T))).then(()=>{T=[];for(const g of o.list())T.push(Rt(g,y,D));return T.push(d),ke(T)}).catch(g=>dt(g,de.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function le(y,D,T){l.list().forEach(L=>H(()=>L(y,D,T)))}function N(y,D,T,L,z){const f=M(y,D);if(f)return f;const d=D===Ct,g=Wt?history.state:{};T&&(L||d?i.replace(y.fullPath,ne({scroll:d&&g&&g.scroll},z)):i.push(y.fullPath,z)),a.value=y,Je(y,D,T,d),Et()}let te;function Ee(){te||(te=i.listen((y,D,T)=>{if(!Tt.listening)return;const L=w(y),z=Y(L,Tt.currentRoute.value);if(z){J(ne(z,{replace:!0,force:!0}),L).catch(vs);return}p=L;const f=a.value;Wt&&Gc(Zi(f.fullPath,T.delta),on()),X(L,f).catch(d=>dt(d,de.NAVIGATION_ABORTED|de.NAVIGATION_CANCELLED)?d:dt(d,de.NAVIGATION_GUARD_REDIRECT)?(J(ne(C(d.to),{force:!0}),L).then(g=>{dt(g,de.NAVIGATION_ABORTED|de.NAVIGATION_DUPLICATED)&&!T.delta&&T.type===Un.pop&&i.go(-1,!1)}).catch(vs),Promise.reject()):(T.delta&&i.go(-T.delta,!1),se(d,L,f))).then(d=>{d=d||N(L,f,!1),d&&(T.delta&&!dt(d,de.NAVIGATION_CANCELLED)?i.go(-T.delta,!1):T.type===Un.pop&&dt(d,de.NAVIGATION_ABORTED|de.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),le(L,f,d)}).catch(vs)}))}let Ue=cs(),_e=cs(),ae;function se(y,D,T){Et(y);const L=_e.list();return L.length?L.forEach(z=>z(y,D,T)):console.error(y),Promise.reject(y)}function ut(){return ae&&a.value!==Ct?Promise.resolve():new Promise((y,D)=>{Ue.add([y,D])})}function Et(y){return ae||(ae=!y,Ee(),Ue.list().forEach(([D,T])=>y?T(y):D()),Ue.reset()),y}function Je(y,D,T,L){const{scrollBehavior:z}=e;if(!Wt||!z)return Promise.resolve();const f=!T&&qc(Zi(y.fullPath,0))||(L||!T)&&history.state&&history.state.scroll||null;return Fs().then(()=>z(y,D,f)).then(d=>d&&Wc(d)).catch(d=>se(d,y,D))}const Me=y=>i.go(y);let kt;const Ht=new Set,Tt={currentRoute:a,listening:!0,addRoute:_,removeRoute:R,clearRoutes:t.clearRoutes,hasRoute:$,getRoutes:x,resolve:w,options:e,push:j,replace:G,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:_e.add,isReady:ut,install(y){y.component("RouterLink",Gt),y.component("RouterView",Eu),y.config.globalProperties.$router=Tt,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Ce(a)}),Wt&&!kt&&a.value===Ct&&(kt=!0,j(i.location).catch(L=>{}));const D={};for(const L in Ct)Object.defineProperty(D,L,{get:()=>a.value[L],enumerable:!0});y.provide(ri,Tt),y.provide(oi,Mr(D)),y.provide(Dn,a);const T=y.unmount;Ht.add(y),y.unmount=function(){Ht.delete(y),Ht.size<1&&(p=Ct,te&&te(),te=null,a.value=Ct,kt=!1,ae=!1),T()}}};function ke(y){return y.reduce((D,T)=>D.then(()=>H(T)),Promise.resolve())}return Tt}const Cu={class:"header"},Su={class:"container header__inner"},Ru=["aria-expanded"],wu={__name:"Header",setup(e){const t=Ke(!1),s=()=>{t.value=!t.value},n=()=>{t.value=!1};return Jt(t,i=>{document.body.style.overflow=i?"hidden":""}),(i,r)=>(B(),K("header",Cu,[m("div",Su,[q(Ce(Gt),{to:"/",class:"header__logo",onClick:n},{default:ge(()=>[...r[0]||(r[0]=[Le(" Nomis ",-1)])]),_:1}),m("nav",{class:ct(["header__nav",{"header__nav--open":t.value}])},[q(Ce(Gt),{to:"/",class:"header__nav-link",onClick:n},{default:ge(()=>[...r[1]||(r[1]=[Le("Home",-1)])]),_:1}),q(Ce(Gt),{to:"/projects",class:"header__nav-link",onClick:n},{default:ge(()=>[...r[2]||(r[2]=[Le("Projects",-1)])]),_:1}),q(Ce(Gt),{to:"/leadership",class:"header__nav-link",onClick:n},{default:ge(()=>[...r[3]||(r[3]=[Le("Leadership",-1)])]),_:1}),q(Ce(Gt),{to:"/about",class:"header__nav-link",onClick:n},{default:ge(()=>[...r[4]||(r[4]=[Le("About",-1)])]),_:1}),m("a",{href:"/resume.pdf",target:"_blank",class:"header__nav-link header__nav-link--resume",onClick:n},"Resume")],2),m("button",{class:ct(["header__hamburger",{"header__hamburger--open":t.value}]),onClick:s,"aria-expanded":t.value},[...r[5]||(r[5]=[m("span",null,null,-1),m("span",null,null,-1),m("span",null,null,-1)])],10,Ru)])]))}},ln=(e,t)=>{const s=e.__vccOpts||e;for(const[n,i]of t)s[n]=i;return s},Pu={},Iu={class:"footer"};function Tu(e,t){return B(),K("footer",Iu,[...t[0]||(t[0]=[m("div",{class:"container footer__inner"},[m("p",{class:"footer__copy"},"© 2026 Nomis. All rights reserved."),m("a",{href:"mailto:nomis820710@gmail.com",class:"footer__email"},"nomis820710@gmail.com")],-1)])])}const ju=ln(Pu,[["render",Tu]]),Ou={__name:"BackToTop",setup(e){const t=Ke(!1),s=()=>{t.value=window.scrollY>400},n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return ss(()=>window.addEventListener("scroll",s)),ns(()=>window.removeEventListener("scroll",s)),(i,r)=>(B(),K("button",{class:ct(["back-to-top",{"back-to-top--visible":t.value}]),onClick:n,"aria-label":"回到頂部"},[...r[0]||(r[0]=[m("i",{class:"fa-solid fa-arrow-up"},null,-1)])],2))}},$u={__name:"App",setup(e){return(t,s)=>{const n=is("RouterView");return B(),K(re,null,[q(wu),m("main",null,[q(n,null,{default:ge(({Component:i})=>[q(Va,{name:"fade",mode:"out-in"},{default:ge(()=>[(B(),Pt(Yl(i)))]),_:2},1024)]),_:1})]),q(ju),q(Ou)],64)}}},Mu=ln($u,[["__scopeId","data-v-91c92250"]]),Nu="/portfolio/images/general/hero-photo.jpg",Du="/portfolio/images/general/avatar-chen.jpg",Lu="/portfolio/images/general/avatar-liao.jpg";function mt(e){return"/portfolio/"+e.replace(/^\//,"")}const Uu={class:"project-card__cover"},Bu=["src","alt"],Fu={class:"project-card__body"},ku={class:"project-card__hashtags"},Hu={class:"project-card__title"},Vu={class:"project-card__desc"},Ku={class:"project-card__tags"},Ho={__name:"ProjectCard",props:{project:{type:Object,required:!0}},setup(e){return(t,s)=>{const n=is("RouterLink");return B(),Pt(n,{to:`/projects/${e.project.id}`,class:"project-card"},{default:ge(()=>[m("div",Uu,[m("img",{src:Ce(mt)(e.project.cover),alt:e.project.title},null,8,Bu)]),m("div",Fu,[m("div",ku,[(B(!0),K(re,null,be(e.project.hashtags,i=>(B(),K("span",{key:i,class:"project-card__hashtag"}," #"+Z(i),1))),128))]),m("h3",Hu,Z(e.project.title),1),m("p",Vu,Z(e.project.description),1),m("div",Ku,[(B(!0),K(re,null,be(e.project.tags,i=>(B(),K("span",{key:i,class:"project-card__tag"},Z(i),1))),128))])]),s[0]||(s[0]=m("div",{class:"project-card__cta"}," 查看專案 → ",-1))]),_:1},8,["to"])}}},bs=[{id:"ai-smartbag-learning-report",title:"從數據羅列到數據洞察：重新設計 K12 家長的三維度學習報告",description:"前一版學習報告被大主管打槍，原因是日、週、月三份報告只差在時間範圍，本質上只是數據的重複堆疊。我接手後，借鑑數據分析師的思維切入，系統性梳理所有可用數據素材，設計出三種截然不同的敘事邏輯——讓日報告說執行細節、週報告說行為洞察、月報告說成長故事。最終成為 AI 智能書包主打亮點功能，有效解決家長痛點，成為業務銷售的關鍵說服工具。",cover:"/images/projects/project-1.jpg",hashtags:["數據洞察設計","資訊架構","跨角色協作"],tags:["UIUX","Cross-functional","Information Architecture"],category:["uiux"],content:`
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
  `}],Wu={__name:"HeroCanvas",setup(e){const t=Ke(null);let s=null;return ss(()=>{const n=t.value,i=n.getContext("2d"),r=()=>{n.width=n.offsetWidth,n.height=n.offsetHeight};r(),window.addEventListener("resize",r);const l=Array.from({length:80},()=>({x:Math.random()*n.width,y:Math.random()*n.height,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*2+1}));let a=0;const p=()=>{n.width=n.offsetWidth,n.height=n.offsetHeight;const c=n.width,u=n.height;i.clearRect(0,0,c,u),a+=.005;const h=(Math.sin(a)+1)/2,_=i.createRadialGradient(c*.15,u*.5,0,c*.15,u*.5,c*.55);_.addColorStop(0,`rgba(79,142,247,${.25+h*.12})`),_.addColorStop(1,"transparent"),i.fillStyle=_,i.fillRect(0,0,c,u);const R=i.createRadialGradient(c*.85,u*.2,0,c*.85,u*.2,c*.45);R.addColorStop(0,`rgba(124,95,247,${.15+h*.1})`),R.addColorStop(1,"transparent"),i.fillStyle=R,i.fillRect(0,0,c,u);const x=i.createRadialGradient(c*.6,u*.8,0,c*.6,u*.8,c*.3);x.addColorStop(0,`rgba(79,142,247,${.08+h*.06})`),x.addColorStop(1,"transparent"),i.fillStyle=x,i.fillRect(0,0,c,u),l.forEach(w=>{w.x+=w.vx,w.y+=w.vy,(w.x<0||w.x>c)&&(w.vx*=-1),(w.y<0||w.y>u)&&(w.vy*=-1)});const $=130;for(let w=0;w<l.length;w++)for(let C=w+1;C<l.length;C++){const M=l[w].x-l[C].x,j=l[w].y-l[C].y,G=Math.sqrt(M*M+j*j);if(G<$){const Y=(1-G/$)*.35;i.beginPath(),i.moveTo(l[w].x,l[w].y),i.lineTo(l[C].x,l[C].y),i.strokeStyle=`rgba(79,142,247,${Y})`,i.lineWidth=.8,i.stroke()}}l.forEach(w=>{i.beginPath(),i.arc(w.x,w.y,w.r,0,Math.PI*2),i.fillStyle="rgba(79,142,247,0.65)",i.fill()}),s=requestAnimationFrame(p)};ns(()=>{cancelAnimationFrame(s),window.removeEventListener("resize",r)}),p()}),(n,i)=>(B(),K("canvas",{ref_key:"canvasRef",ref:t,class:"hero-canvas"},null,512))}},Gu=ln(Wu,[["__scopeId","data-v-92edd766"]]),qu={class:"home"},Xu={class:"hero section"},zu={class:"projects-preview section"},Ju={class:"container"},Yu={class:"projects-preview__grid"},Qu={class:"leadership-preview section"},Zu={class:"container leadership-preview__inner"},ef={class:"leadership-preview__content"},tf={class:"leadership-preview__articles"},sf={class:"skills section"},nf={class:"container"},rf={class:"skills__grid"},of={class:"skills__card-title"},lf={class:"skills__card-list"},af={class:"skills__card-tags"},cf={__name:"Home",setup(e){const t=[{title:"UIUX 設計",items:["使用者研究","資訊架構","互動設計","視覺設計"],tags:[{label:"查看 UIUX 專案",link:"/projects?tag=UIUX"}]},{title:"前端切版",items:["Vue.js","HTML / CSS","RWD","SCSS"],tags:[{label:"查看切版專案",link:"/projects?tag=Frontend"}]},{title:"設計策略",items:["競品分析","A/B 測試","數據分析","設計系統"],tags:[{label:"查看相關專案",link:"/projects?tag=Growth Design"}]},{title:"設計領導",items:["團隊管理","跨部門協作","設計評審","人才培育"],tags:[{label:"閱讀 Leadership 文章",link:"/leadership"}]},{title:"AI 產品設計",items:["AI 框架制定","AI 互動設計","信任設計","Prompt 設計"],tags:[{label:"查看 AI 專案",link:"/projects?tag=AI"}]},{title:"溝通與協作",items:["利害關係人溝通","設計提案","跨文化協作","衝突處理"],tags:[{label:"閱讀 Leadership 文章",link:"/leadership"}]},{title:"使用者研究",items:["使用者訪談","易用性測試","問卷設計","研究報告"],tags:[{label:"查看研究相關專案",link:"/projects?tag=Research"}]},{title:"數據驅動設計",items:["數據判讀","A/B 測試規劃","轉換率優化","成效追蹤"],tags:[{label:"查看相關專案",link:"/projects?tag=A/B Testing"}]},{title:"成長心態",items:["快速學習","主動解決問題","接受回饋","持續優化"],tags:[{label:"閱讀我的反思文章",link:"/leadership"}]}];return(s,n)=>{const i=is("RouterLink");return B(),K("div",qu,[m("section",Xu,[q(Gu),n[0]||(n[0]=Qt('<div class="container hero__inner"><div class="hero__content"><h1 class="hero__title">嗨，我是 Nomis！</h1><p class="hero__subtitle">UIUX 設計師・前端工程師・設計主管</p><p class="hero__desc"> 擅長以數據驅動設計決策，打造以使用者為中心的產品體驗，跨文化協作與跨部門溝通是我的強項。 </p><div class="hero__cta"><a href="/portfolio/resume.pdf" target="_blank" class="btn btn--primary">下載履歷</a><a href="https://www.linkedin.com/in/" target="_blank" class="btn btn--secondary">LinkedIn</a><a href="mailto:nomis820710@gmail.com" class="btn btn--secondary">聯絡我</a></div></div><div class="hero__photo"><img src="'+Nu+'" alt="Nomis Yang"></div></div>',1))]),n[10]||(n[10]=Qt('<section class="features section"><div class="container features__grid"><div class="features__item"><h3 class="features__title">跨領域設計能力</h3><p class="features__desc"> 橫跨 UIUX 設計、前端切版與設計管理，能從使用者研究、視覺設計到程式實作一手包辦，確保設計落地不失真。 </p></div><div class="features__item"><h3 class="features__title">數據驅動的設計決策</h3><p class="features__desc"> 習慣以數據佐證設計方向，透過 A/B 測試、使用者訪談與競品分析，持續優化產品體驗並創造可量化的成效。 </p></div><div class="features__item"><h3 class="features__title">跨部門協作與領導</h3><p class="features__desc"> 具備帶領設計團隊的實戰經驗，善於在產品、工程與商業目標之間建立共識，推動專案從 0 到 1 順利落地。 </p></div></div></section>',1)),m("section",zu,[m("div",Ju,[m("div",Yu,[(B(!0),K(re,null,be(Ce(bs),r=>(B(),Pt(Ho,{key:r.id,project:r},null,8,["project"]))),128))])])]),m("section",Qu,[m("div",Zu,[m("div",ef,[n[2]||(n[2]=m("p",{class:"leadership-preview__label"},"Leadership",-1)),n[3]||(n[3]=m("h2",{class:"leadership-preview__title"},"設計領導力的實踐與反思",-1)),n[4]||(n[4]=m("p",{class:"leadership-preview__desc"}," 從個人貢獻者到帶領團隊，我持續記錄在設計管理路上的觀察與學習。 包含團隊管理心得、專案決策過程、帶人的方法論，以及個人成長反思。 ",-1)),q(i,{to:"/leadership",class:"btn btn--primary"},{default:ge(()=>[...n[1]||(n[1]=[Le(" 閱讀更多文章 → ",-1)])]),_:1})]),m("div",tf,[q(i,{to:"/leadership/psychological-safety",class:"leadership-preview__article"},{default:ge(()=>[...n[5]||(n[5]=[m("p",{class:"leadership-preview__article-tag"},"帶團隊的方法論",-1),m("h4",{class:"leadership-preview__article-title"},"如何在設計評審中建立心理安全感",-1),m("p",{class:"leadership-preview__article-cta"},"閱讀文章 →",-1)])]),_:1}),q(i,{to:"/leadership/design-vs-business",class:"leadership-preview__article"},{default:ge(()=>[...n[6]||(n[6]=[m("p",{class:"leadership-preview__article-tag"},"專案決策過程",-1),m("h4",{class:"leadership-preview__article-title"},"當設計目標與商業目標衝突時，我怎麼做決定",-1),m("p",{class:"leadership-preview__article-cta"},"閱讀文章 →",-1)])]),_:1}),q(i,{to:"/leadership/designer-to-lead",class:"leadership-preview__article"},{default:ge(()=>[...n[7]||(n[7]=[m("p",{class:"leadership-preview__article-tag"},"個人成長反思",-1),m("h4",{class:"leadership-preview__article-title"},"從設計師到設計主管：角色轉換的第一年",-1),m("p",{class:"leadership-preview__article-cta"},"閱讀文章 →",-1)])]),_:1})])])]),m("section",sf,[m("div",nf,[n[8]||(n[8]=m("p",{class:"skills__label"},"How I Contribute",-1)),n[9]||(n[9]=m("h2",{class:"skills__title"},"我如何用專業技能貢獻",-1)),m("div",rf,[(B(),K(re,null,be(t,r=>m("div",{key:r.title,class:"skills__card"},[m("h4",of,Z(r.title),1),m("ul",lf,[(B(!0),K(re,null,be(r.items,o=>(B(),K("li",{key:o},Z(o),1))),128))]),m("div",af,[(B(!0),K(re,null,be(r.tags,o=>(B(),Pt(i,{key:o.label,to:o.link,class:"skills__card-tag"},{default:ge(()=>[Le(Z(o.label),1)]),_:2},1032,["to"]))),128))])])),64))])])]),n[11]||(n[11]=Qt('<section class="testimonials section"><div class="container"><p class="testimonials__label">Recommendations</p><h2 class="testimonials__title">他們這樣說</h2><div class="testimonials__grid"><div class="testimonials__card"><p class="testimonials__card-title">執行力與溝通能力超乎預期，對回饋保持開放</p><p class="testimonials__card-content"> Nomis 是一位充滿熱情的 UIUX 設計師，以創新思維和快速適應新挑戰的能力著稱。 她的執行速度與溝通品質持續超乎預期，是團隊中不可或缺的夥伴。 對回饋始終保持開放，持續尋求改進，對團隊的成功貢獻良多。 </p><div class="testimonials__card-author"><img src="'+Du+'" alt="陳大明" class="testimonials__card-avatar"><div><p class="testimonials__card-name">陳大明</p><p class="testimonials__card-role">2024年6月・iOS 工程師・直接主管</p></div></div></div><div class="testimonials__card"><p class="testimonials__card-title">能理解並轉化使用者需求為直覺且美觀的設計</p><p class="testimonials__card-content"> 與 Nomis 共事是非常愉快的經驗。她始終展現出理解並將使用者需求轉化為直覺且視覺吸引力設計的能力。 她的創意和解決問題的技巧在應對專案挑戰時發揮了關鍵作用。 支持性的個性與強大的溝通技巧營造了積極的協作環境，是可靠又具創新力的夥伴。 </p><div class="testimonials__card-author"><img src="'+Lu+'" alt="廖小華" class="testimonials__card-avatar"><div><p class="testimonials__card-name">廖小華</p><p class="testimonials__card-role">2024年6月・產品經理・同團隊成員</p></div></div></div></div></div></section>',1))])}}},uf={class:"projects-page"},ff={class:"projects-list section"},pf={class:"container"},df={class:"projects-list__filters"},hf=["onClick"],_f={class:"projects-list__grid"},gf={key:0,class:"projects-list__empty"},mf={__name:"Projects",setup(e){const t=["All",...new Set(bs.flatMap(i=>i.tags))],s=Ke("All"),n=Oe(()=>s.value==="All"?bs:bs.filter(i=>i.tags.includes(s.value)));return(i,r)=>(B(),K("div",uf,[r[0]||(r[0]=Qt('<section class="projects-hero section"><div class="container"><p class="projects-hero__label">My Work</p><h1 class="projects-hero__title">Projects</h1><p class="projects-hero__desc"> 橫跨 UIUX 設計、前端切版與 AI 產品設計的實戰專案，每個專案都有可量化的成效與完整的設計思考過程。 </p></div></section>',1)),m("section",ff,[m("div",pf,[m("div",df,[(B(),K(re,null,be(t,o=>m("button",{key:o,class:ct(["projects-list__filter",{"projects-list__filter--active":s.value===o}]),onClick:l=>s.value=o},Z(o),11,hf)),64))]),m("div",_f,[(B(!0),K(re,null,be(n.value,o=>(B(),Pt(Ho,{key:o.id,project:o},null,8,["project"]))),128))]),n.value.length===0?(B(),K("p",gf," 目前沒有符合此分類的專案。 ")):xo("",!0)])])]))}},vf={key:0,class:"project-detail"},bf={class:"project-detail-hero section"},yf={class:"container"},Af={class:"project-detail-hero__hashtags"},Ef={class:"project-detail-hero__title"},xf={class:"project-detail-hero__desc"},Cf={class:"project-detail-hero__tags"},Sf={class:"project-detail-cover"},Rf={class:"container"},wf=["src","alt"],Pf={class:"project-detail-content section"},If={class:"container project-detail-content__layout"},Tf={class:"toc-float__panel"},jf={class:"toc-float__list"},Of=["onClick"],$f={class:"toc-sidebar"},Mf={class:"toc-sidebar__list"},Nf=["onClick"],Df=["innerHTML"],Lf={class:"project-detail-nav section"},Uf={class:"container"},Bf={key:1,class:"project-detail-notfound section"},Ff={class:"container"},kf={__name:"ProjectDetail",setup(e){const t=jo(),s=Oe(()=>bs.find(c=>c.id===t.params.id)),n=Ke([]),i=Ke(""),r=Ke(null),o=Ke(!1),l=()=>{if(!r.value)return;const c=r.value.querySelectorAll("h2, h3");n.value=Array.from(c).map((u,h)=>{const _=`heading-${h}`;return u.id=_,{id:_,text:u.textContent,level:u.tagName}})},a=()=>{if(!r.value)return;const c=r.value.querySelectorAll("h2, h3");let u="";c.forEach(h=>{h.getBoundingClientRect().top<=120&&(u=h.id)}),i.value=u},p=c=>{const u=document.getElementById(c);u&&u.scrollIntoView({behavior:"smooth",block:"start"})};return ss(()=>{Fs(()=>{l(),window.addEventListener("scroll",a)})}),ns(()=>{window.removeEventListener("scroll",a)}),Jt(s,()=>{Fs(()=>l())}),(c,u)=>{const h=is("RouterLink");return s.value?(B(),K("div",vf,[m("section",bf,[m("div",yf,[q(h,{to:"/projects",class:"project-detail-hero__back"},{default:ge(()=>[...u[1]||(u[1]=[Le("← 返回 Projects",-1)])]),_:1}),m("div",Af,[(B(!0),K(re,null,be(s.value.hashtags,_=>(B(),K("span",{key:_,class:"project-detail-hero__hashtag"},"#"+Z(_),1))),128))]),m("h1",Ef,Z(s.value.title),1),m("p",xf,Z(s.value.description),1),m("div",Cf,[(B(!0),K(re,null,be(s.value.tags,_=>(B(),K("span",{key:_,class:"project-detail-hero__tag"},Z(_),1))),128))])])]),m("div",Sf,[m("div",Rf,[m("img",{src:Ce(mt)(s.value.cover),alt:s.value.title,class:"project-detail-cover__img"},null,8,wf)])]),m("section",Pf,[m("div",If,[m("div",{class:ct(["toc-float",{"toc-float--open":o.value}])},[m("button",{class:"toc-float__toggle",onClick:u[0]||(u[0]=_=>o.value=!o.value),"aria-label":"目錄"},[...u[2]||(u[2]=[m("i",{class:"fa-solid fa-list"},null,-1)])]),m("div",Tf,[u[3]||(u[3]=m("p",{class:"toc-float__title"},"目錄",-1)),m("ul",jf,[(B(!0),K(re,null,be(n.value,_=>(B(),K("li",{key:_.id},[m("a",{onClick:qi(R=>{p(_.id),o.value=!1},["prevent"]),href:"#"},Z(_.text),9,Of)]))),128))])])],2),m("aside",$f,[u[4]||(u[4]=m("p",{class:"toc-sidebar__title"},"目錄",-1)),m("ul",Mf,[(B(!0),K(re,null,be(n.value,_=>(B(),K("li",{key:_.id,class:"toc-sidebar__item"},[m("a",{onClick:qi(R=>p(_.id),["prevent"]),href:"#",class:ct(["toc-sidebar__link",{"toc-sidebar__link--active":i.value===_.id}])},Z(_.text),11,Nf)]))),128))])]),m("div",{class:"project-detail-content__body",ref_key:"contentRef",ref:r,innerHTML:s.value.content},null,8,Df)])]),m("section",Lf,[m("div",Uf,[q(h,{to:"/projects",class:"btn btn--secondary"},{default:ge(()=>[...u[5]||(u[5]=[Le("← 查看所有專案",-1)])]),_:1})])])])):(B(),K("div",Bf,[m("div",Ff,[u[7]||(u[7]=m("h1",null,"找不到此專案",-1)),q(h,{to:"/projects",class:"btn btn--primary"},{default:ge(()=>[...u[6]||(u[6]=[Le("返回 Projects",-1)])]),_:1})])]))}}},Hf={class:"article-card__cover"},Vf=["src","alt"],Kf={class:"article-card__body"},Wf={class:"article-card__hashtags"},Gf={class:"article-card__title"},qf={class:"article-card__desc"},Xf={class:"article-card__date"},zf={__name:"ArticleCard",props:{article:{type:Object,required:!0}},setup(e){return(t,s)=>{const n=is("RouterLink");return B(),Pt(n,{to:`/leadership/${e.article.id}`,class:"article-card"},{default:ge(()=>[m("div",Hf,[m("img",{src:Ce(mt)(e.article.cover),alt:e.article.title},null,8,Vf)]),m("div",Kf,[m("div",Wf,[(B(!0),K(re,null,be(e.article.hashtags,i=>(B(),K("span",{key:i,class:"article-card__hashtag"}," #"+Z(i),1))),128))]),m("h3",Gf,Z(e.article.title),1),m("p",qf,Z(e.article.description),1),m("p",Xf,Z(e.article.date),1)]),s[0]||(s[0]=m("div",{class:"article-card__cta"}," 閱讀文章 → ",-1))]),_:1},8,["to"])}}},Fn=[{id:"psychological-safety",title:"如何在設計評審中建立心理安全感",description:"設計評審常常讓設計師感到焦慮與防禦。這篇文章分享我如何透過具體的主持技巧，讓評審從「批判場」變成「共創場」。",cover:"/images/articles/article-1.jpg",hashtags:["帶團隊的方法論"],tags:["帶團隊的方法論"],date:"2024-12-01",content:"<p>文章內容待補...</p>"},{id:"design-vs-business",title:"當設計目標與商業目標衝突時，我怎麼做決定",description:"設計師最難的不是做設計，而是在各方利益衝突時做出有依據的決定。這篇文章記錄我的決策框架。",cover:"/images/articles/article-2.jpg",hashtags:["專案決策過程"],tags:["專案決策過程"],date:"2024-11-15",content:"<p>文章內容待補...</p>"},{id:"designer-to-lead",title:"從設計師到設計主管：角色轉換的第一年",description:"當你從做設計變成管設計的人，最大的挑戰不是技術，而是心態。這篇文章記錄我第一年最真實的掙扎與學習。",cover:"/images/articles/article-3.jpg",hashtags:["個人成長反思"],tags:["個人成長反思"],date:"2024-10-20",content:`
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
`}],Jf={class:"leadership-page"},Yf={class:"leadership-list section"},Qf={class:"container"},Zf={class:"leadership-list__filters"},ep=["onClick"],tp={class:"leadership-list__grid"},sp={key:0,class:"leadership-list__empty"},np={__name:"Leadership",setup(e){const t=["All","設計團隊管理心得","專案決策過程","帶團隊的方法論","個人成長反思"],s=Ke("All"),n=Oe(()=>s.value==="All"?Fn:Fn.filter(i=>i.tags.includes(s.value)));return(i,r)=>(B(),K("div",Jf,[r[0]||(r[0]=Qt('<section class="leadership-hero section"><div class="container"><p class="leadership-hero__label">My Thoughts</p><h1 class="leadership-hero__title">Leadership</h1><p class="leadership-hero__desc"> 記錄我在設計管理路上的觀察與學習，包含團隊管理心得、專案決策過程、帶人的方法論，以及個人成長反思。 </p></div></section>',1)),m("section",Yf,[m("div",Qf,[m("div",Zf,[(B(),K(re,null,be(t,o=>m("button",{key:o,class:ct(["leadership-list__filter",{"leadership-list__filter--active":s.value===o}]),onClick:l=>s.value=o},Z(o),11,ep)),64))]),m("div",tp,[(B(!0),K(re,null,be(n.value,o=>(B(),Pt(zf,{key:o.id,article:o},null,8,["article"]))),128))]),n.value.length===0?(B(),K("p",sp," 目前沒有符合此分類的文章。 ")):xo("",!0)])])]))}},ip={key:0,class:"article-detail"},rp={class:"article-detail-hero section"},op={class:"container"},lp={class:"article-detail-hero__hashtags"},ap={class:"article-detail-hero__title"},cp={class:"article-detail-hero__desc"},up={class:"article-detail-hero__date"},fp={class:"article-detail-cover"},pp={class:"container"},dp=["src","alt"],hp={class:"article-detail-content section"},_p={class:"container article-detail-content__inner"},gp=["innerHTML"],mp={class:"article-detail-nav section"},vp={class:"container"},bp={key:1,class:"article-detail-notfound section"},yp={class:"container"},Ap={__name:"ArticleDetail",setup(e){const t=jo(),s=Oe(()=>Fn.find(n=>n.id===t.params.id));return(n,i)=>{const r=is("RouterLink");return s.value?(B(),K("div",ip,[m("section",rp,[m("div",op,[q(r,{to:"/leadership",class:"article-detail-hero__back"},{default:ge(()=>[...i[0]||(i[0]=[Le(" ← 返回 Leadership ",-1)])]),_:1}),m("div",lp,[(B(!0),K(re,null,be(s.value.hashtags,o=>(B(),K("span",{key:o,class:"article-detail-hero__hashtag"}," #"+Z(o),1))),128))]),m("h1",ap,Z(s.value.title),1),m("p",cp,Z(s.value.description),1),m("p",up,Z(s.value.date),1)])]),m("div",fp,[m("div",pp,[m("img",{src:Ce(mt)(s.value.cover),alt:s.value.title,class:"article-detail-cover__img"},null,8,dp)])]),m("section",hp,[m("div",_p,[m("div",{class:"article-detail-content__body",innerHTML:s.value.content},null,8,gp)])]),m("section",mp,[m("div",vp,[q(r,{to:"/leadership",class:"btn btn--secondary"},{default:ge(()=>[...i[1]||(i[1]=[Le(" ← 查看所有文章 ",-1)])]),_:1})])])])):(B(),K("div",bp,[m("div",yp,[i[3]||(i[3]=m("h1",null,"找不到此文章",-1)),q(r,{to:"/leadership",class:"btn btn--primary"},{default:ge(()=>[...i[2]||(i[2]=[Le("返回 Leadership",-1)])]),_:1})])]))}}},Ep={__name:"StoryCanvas",setup(e){const t=Ke(null);let s=null;return ss(()=>{const n=t.value,i=n.getContext("2d"),r=()=>{n.width=n.offsetWidth,n.height=n.offsetHeight};r(),window.addEventListener("resize",r);const o=2e3,l=800,a=()=>({x:(Math.random()-.5)*2,y:(Math.random()-.5)*2,z:Math.random()*l,pz:null}),p=Array.from({length:o},a);p.forEach(h=>{h.pz=h.z});const c=1.5,u=()=>{const h=n.width,_=n.height,R=h/2,x=_/2;i.fillStyle="rgba(10, 14, 26, 0.25)",i.fillRect(0,0,h,_),p.forEach($=>{if($.pz=$.z,$.z-=c,$.z<=1){Object.assign($,a()),$.pz=$.z;return}const w=l/$.z,C=R+$.x*w*(h/2),M=x+$.y*w*(_/2),j=l/$.pz,G=R+$.x*j*(h/2),Y=x+$.y*j*(_/2),J=1-$.z/l,Ae=Math.pow(J,1.5),H=Math.max(.3,J*2.2),X=i.createLinearGradient(G,Y,C,M);if(X.addColorStop(0,"rgba(100,160,255,0)"),X.addColorStop(1,`rgba(200,225,255,${Ae*.95})`),i.beginPath(),i.moveTo(G,Y),i.lineTo(C,M),i.strokeStyle=X,i.lineWidth=H,i.lineCap="round",i.stroke(),J>.6){const le=(J-.6)/.4;i.beginPath(),i.arc(C,M,H*1.2,0,Math.PI*2),i.fillStyle=`rgba(220,235,255,${le*.9})`,i.fill()}}),s=requestAnimationFrame(u)};ns(()=>{cancelAnimationFrame(s),window.removeEventListener("resize",r)}),u()}),(n,i)=>(B(),K("canvas",{ref_key:"canvasRef",ref:t,class:"story-canvas"},null,512))}},xp=ln(Ep,[["__scopeId","data-v-3f74bc40"]]),Cp={class:"about-page"},Sp={class:"about-hero section"},Rp={class:"container about-hero__inner"},wp={class:"about-hero__image"},Pp=["src"],Ip={class:"about-experience section"},Tp={class:"container"},jp={class:"about-experience__list"},Op={class:"about-experience__left"},$p={class:"about-experience__period"},Mp={class:"about-experience__right"},Np={class:"about-experience__role"},Dp={class:"about-experience__company"},Lp={class:"about-experience__desc"},Up={class:"about-story section"},Bp={class:"container"},Fp={class:"about-story__timeline"},kp={class:"about-story__image"},Hp=["src","alt"],Vp={class:"about-story__content"},Kp={class:"about-story__period"},Wp={class:"about-story__role"},Gp={class:"about-story__tags"},qp={class:"about-story__desc"},Xp={__name:"About",setup(e){const t=[{period:"2023 - 現在",role:"UIUX 設計主管",company:"某某科技公司",desc:"帶領設計團隊，負責產品設計策略制定、設計系統建立與跨部門協作。"},{period:"2021 - 2023",role:"UIUX 設計師",company:"MixerBox",desc:"負責 AI 產品的 UIUX 設計，主導多項 A/B 測試，成功提升訂閱轉換率 32%+。"},{period:"2019 - 2021",role:"前端工程師暨視覺設計師",company:"某某設計公司",desc:"負責網站前端切版與視覺設計，累積跨領域的設計與開發實務經驗。"}],s=[{period:"2016 - 2018",title:"視覺設計師",image:mt("/images/general/story/story-1.jpg"),tags:["品牌視覺","平面設計","美感養成"],desc:"從最基礎的視覺語言出發，學會如何用顏色、字型、排版傳達品牌個性。這個階段讓我建立了扎實的美感基礎，也讓我開始對「設計如何影響使用者感受」產生好奇。"},{period:"2018 - 2020",title:"UI 設計師",image:mt("/images/general/story/story-2.jpg"),tags:["介面設計","設計系統","跨部門協作"],desc:"開始接觸數位產品設計，學習如何在螢幕上建立清晰的視覺層次。與工程師合作的過程中，我意識到設計不只是好看，更要能被實作，這驅動我學習前端切版。"},{period:"2020 - 2022",title:"UIUX 設計師",image:mt("/images/general/story/story-3.jpg"),tags:["使用者研究","A/B 測試","數據驅動設計"],desc:"真正走進使用者的世界。透過訪談、測試、數據分析來驗證設計決策，讓我理解「好設計」的定義不是設計師說了算，而是使用者用腳投票的結果。"},{period:"2022 - 現在",title:"設計主管",image:mt("/images/general/story/story-4.jpg"),tags:["團隊管理","設計策略","跨部門影響力"],desc:"角色轉換讓我重新定義「貢獻」的意義。從做好一個設計，到讓整個團隊都能做好設計。管理是一門全新的學問，但也是我目前覺得最有意義的挑戰。"}];return(n,i)=>(B(),K("div",Cp,[m("section",Sp,[m("div",Rp,[i[0]||(i[0]=Qt('<div class="about-hero__content"><p class="about-hero__label">About Me</p><h1 class="about-hero__title">嗨，我是 Nomis！</h1><p class="about-hero__desc"> 我是一位橫跨 UIUX 設計、前端切版與設計管理的複合型設計師。 我相信好的設計不只是好看，而是能解決真實問題、創造可量化的商業價值。 </p><p class="about-hero__desc"> 目前專注於 AI 產品設計領域，對於如何在 AI 時代設計出讓使用者信任、願意使用的產品體驗，有深入的研究與實踐。 </p></div>',1)),m("div",wp,[m("img",{src:Ce(mt)("/images/general/avatar.jpg"),alt:"Nomis",class:"about-hero__avatar"},null,8,Pp)])])]),m("section",Ip,[m("div",Tp,[i[1]||(i[1]=m("h2",{class:"about-experience__title"},"工作經驗",-1)),m("div",jp,[(B(),K(re,null,be(t,r=>m("div",{key:r.company,class:"about-experience__item"},[m("div",Op,[m("p",$p,Z(r.period),1)]),m("div",Mp,[m("h3",Np,Z(r.role),1),m("p",Dp,Z(r.company),1),m("p",Lp,Z(r.desc),1)])])),64))])])]),m("section",Up,[q(xp),m("div",Bp,[i[2]||(i[2]=m("p",{class:"about-story__label"},"My Story",-1)),i[3]||(i[3]=m("h2",{class:"about-story__title"},"我如何成為 UIUX 設計師暨設計主管",-1)),i[4]||(i[4]=m("p",{class:"about-story__intro"}," 我的設計之路從視覺出發，一路走向 UIUX、前端，再到帶領設計團隊。 每個階段都讓我對「設計」這件事有更深的理解。 ",-1)),m("div",Fp,[(B(),K(re,null,be(s,r=>m("div",{class:"about-story__item",key:r.title},[m("div",kp,[m("img",{src:r.image,alt:r.title},null,8,Hp)]),m("div",Vp,[m("p",Kp,Z(r.period),1),m("h3",Wp,Z(r.title),1),m("div",Gp,[(B(!0),K(re,null,be(r.tags,o=>(B(),K("span",{key:o,class:"about-story__tag"},Z(o),1))),128))]),m("p",qp,Z(r.desc),1)])])),64))])])])]))}},zp=xu({history:su(),routes:[{path:"/",name:"home",component:cf},{path:"/projects",name:"projects",component:mf},{path:"/projects/:id",name:"project-detail",component:kf},{path:"/leadership",name:"leadership",component:np},{path:"/leadership/:id",name:"article-detail",component:Ap},{path:"/about",name:"about",component:Xp}],scrollBehavior(e,t,s){return s||{top:0}}}),Vo=_c(Mu);Vo.use(zp);Vo.mount("#app");
