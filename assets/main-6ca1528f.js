(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function Qr(n,e){return function(){return n.apply(e,arguments)}}const{toString:Ms}=Object.prototype,{getPrototypeOf:Si}=Object,Ln=(n=>e=>{const t=Ms.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Ce=n=>(n=n.toLowerCase(),e=>Ln(e)===n),Dn=n=>e=>typeof e===n,{isArray:kt}=Array,Ut=Dn("undefined");function Bs(n){return n!==null&&!Ut(n)&&n.constructor!==null&&!Ut(n.constructor)&&ye(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Zr=Ce("ArrayBuffer");function Fs(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&Zr(n.buffer),e}const zs=Dn("string"),ye=Dn("function"),eo=Dn("number"),Mn=n=>n!==null&&typeof n=="object",Us=n=>n===!0||n===!1,dn=n=>{if(Ln(n)!=="object")return!1;const e=Si(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},Vs=Ce("Date"),Ws=Ce("File"),Hs=Ce("Blob"),js=Ce("FileList"),$s=n=>Mn(n)&&ye(n.pipe),qs=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||ye(n.append)&&((e=Ln(n))==="formdata"||e==="object"&&ye(n.toString)&&n.toString()==="[object FormData]"))},Xs=Ce("URLSearchParams"),Gs=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Kt(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),kt(n))for(i=0,r=n.length;i<r;i++)e.call(null,n[i],i,n);else{const o=t?Object.getOwnPropertyNames(n):Object.keys(n),s=o.length;let a;for(i=0;i<s;i++)a=o[i],e.call(null,n[a],a,n)}}function to(n,e){e=e.toLowerCase();const t=Object.keys(n);let i=t.length,r;for(;i-- >0;)if(r=t[i],e===r.toLowerCase())return r;return null}const no=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),io=n=>!Ut(n)&&n!==no;function di(){const{caseless:n}=io(this)&&this||{},e={},t=(i,r)=>{const o=n&&to(e,r)||r;dn(e[o])&&dn(i)?e[o]=di(e[o],i):dn(i)?e[o]=di({},i):kt(i)?e[o]=i.slice():e[o]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Kt(arguments[i],t);return e}const Ks=(n,e,t,{allOwnKeys:i}={})=>(Kt(e,(r,o)=>{t&&ye(r)?n[o]=Qr(r,t):n[o]=r},{allOwnKeys:i}),n),Js=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),Ys=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},Qs=(n,e,t,i)=>{let r,o,s;const a={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),o=r.length;o-- >0;)s=r[o],(!i||i(s,n,e))&&!a[s]&&(e[s]=n[s],a[s]=!0);n=t!==!1&&Si(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},Zs=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},ea=n=>{if(!n)return null;if(kt(n))return n;let e=n.length;if(!eo(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},ta=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&Si(Uint8Array)),na=(n,e)=>{const i=(n&&n[Symbol.iterator]).call(n);let r;for(;(r=i.next())&&!r.done;){const o=r.value;e.call(n,o[0],o[1])}},ia=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},ra=Ce("HTMLFormElement"),oa=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,r){return i.toUpperCase()+r}),ar=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),sa=Ce("RegExp"),ro=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};Kt(t,(r,o)=>{e(r,o,n)!==!1&&(i[o]=r)}),Object.defineProperties(n,i)},aa=n=>{ro(n,(e,t)=>{if(ye(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(ye(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},ca=(n,e)=>{const t={},i=r=>{r.forEach(o=>{t[o]=!0})};return kt(n)?i(n):i(String(n).split(e)),t},la=()=>{},ua=(n,e)=>(n=+n,Number.isFinite(n)?n:e),Gn="abcdefghijklmnopqrstuvwxyz",cr="0123456789",oo={DIGIT:cr,ALPHA:Gn,ALPHA_DIGIT:Gn+Gn.toUpperCase()+cr},da=(n=16,e=oo.ALPHA_DIGIT)=>{let t="";const{length:i}=e;for(;n--;)t+=e[Math.random()*i|0];return t};function fa(n){return!!(n&&ye(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const ha=n=>{const e=new Array(10),t=(i,r)=>{if(Mn(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const o=kt(i)?[]:{};return Kt(i,(s,a)=>{const l=t(s,r+1);!Ut(l)&&(o[a]=l)}),e[r]=void 0,o}}return i};return t(n,0)},pa=Ce("AsyncFunction"),ma=n=>n&&(Mn(n)||ye(n))&&ye(n.then)&&ye(n.catch),b={isArray:kt,isArrayBuffer:Zr,isBuffer:Bs,isFormData:qs,isArrayBufferView:Fs,isString:zs,isNumber:eo,isBoolean:Us,isObject:Mn,isPlainObject:dn,isUndefined:Ut,isDate:Vs,isFile:Ws,isBlob:Hs,isRegExp:sa,isFunction:ye,isStream:$s,isURLSearchParams:Xs,isTypedArray:ta,isFileList:js,forEach:Kt,merge:di,extend:Ks,trim:Gs,stripBOM:Js,inherits:Ys,toFlatObject:Qs,kindOf:Ln,kindOfTest:Ce,endsWith:Zs,toArray:ea,forEachEntry:na,matchAll:ia,isHTMLForm:ra,hasOwnProperty:ar,hasOwnProp:ar,reduceDescriptors:ro,freezeMethods:aa,toObjectSet:ca,toCamelCase:oa,noop:la,toFiniteNumber:ua,findKey:to,global:no,isContextDefined:io,ALPHABET:oo,generateString:da,isSpecCompliantForm:fa,toJSONObject:ha,isAsyncFn:pa,isThenable:ma};function j(n,e,t,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),r&&(this.response=r)}b.inherits(j,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:b.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const so=j.prototype,ao={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{ao[n]={value:n}});Object.defineProperties(j,ao);Object.defineProperty(so,"isAxiosError",{value:!0});j.from=(n,e,t,i,r,o)=>{const s=Object.create(so);return b.toFlatObject(n,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),j.call(s,n.message,e,t,i,r),s.cause=n,s.name=n.name,o&&Object.assign(s,o),s};const ga=null;function fi(n){return b.isPlainObject(n)||b.isArray(n)}function co(n){return b.endsWith(n,"[]")?n.slice(0,-2):n}function lr(n,e,t){return n?n.concat(e).map(function(r,o){return r=co(r),!t&&o?"["+r+"]":r}).join(t?".":""):e}function ya(n){return b.isArray(n)&&!n.some(fi)}const ba=b.toFlatObject(b,{},null,function(e){return/^is[A-Z]/.test(e)});function Bn(n,e,t){if(!b.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=b.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,v){return!b.isUndefined(v[p])});const i=t.metaTokens,r=t.visitor||f,o=t.dots,s=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&b.isSpecCompliantForm(e);if(!b.isFunction(r))throw new TypeError("visitor must be a function");function c(u){if(u===null)return"";if(b.isDate(u))return u.toISOString();if(!l&&b.isBlob(u))throw new j("Blob is not supported. Use a Buffer instead.");return b.isArrayBuffer(u)||b.isTypedArray(u)?l&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function f(u,p,v){let w=u;if(u&&!v&&typeof u=="object"){if(b.endsWith(p,"{}"))p=i?p:p.slice(0,-2),u=JSON.stringify(u);else if(b.isArray(u)&&ya(u)||(b.isFileList(u)||b.endsWith(p,"[]"))&&(w=b.toArray(u)))return p=co(p),w.forEach(function(O,_){!(b.isUndefined(O)||O===null)&&e.append(s===!0?lr([p],_,o):s===null?p:p+"[]",c(O))}),!1}return fi(u)?!0:(e.append(lr(v,p,o),c(u)),!1)}const g=[],x=Object.assign(ba,{defaultVisitor:f,convertValue:c,isVisitable:fi});function h(u,p){if(!b.isUndefined(u)){if(g.indexOf(u)!==-1)throw Error("Circular reference detected in "+p.join("."));g.push(u),b.forEach(u,function(w,T){(!(b.isUndefined(w)||w===null)&&r.call(e,w,b.isString(T)?T.trim():T,p,x))===!0&&h(w,p?p.concat(T):[T])}),g.pop()}}if(!b.isObject(n))throw new TypeError("data must be an object");return h(n),e}function ur(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Ci(n,e){this._pairs=[],n&&Bn(n,this,e)}const lo=Ci.prototype;lo.append=function(e,t){this._pairs.push([e,t])};lo.toString=function(e){const t=e?function(i){return e.call(this,i,ur)}:ur;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function va(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function uo(n,e,t){if(!e)return n;const i=t&&t.encode||va,r=t&&t.serialize;let o;if(r?o=r(e,t):o=b.isURLSearchParams(e)?e.toString():new Ci(e,t).toString(i),o){const s=n.indexOf("#");s!==-1&&(n=n.slice(0,s)),n+=(n.indexOf("?")===-1?"?":"&")+o}return n}class wa{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){b.forEach(this.handlers,function(i){i!==null&&e(i)})}}const dr=wa,fo={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},xa=typeof URLSearchParams<"u"?URLSearchParams:Ci,_a=typeof FormData<"u"?FormData:null,ka=typeof Blob<"u"?Blob:null,Ea=(()=>{let n;return typeof navigator<"u"&&((n=navigator.product)==="ReactNative"||n==="NativeScript"||n==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ia=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Ie={isBrowser:!0,classes:{URLSearchParams:xa,FormData:_a,Blob:ka},isStandardBrowserEnv:Ea,isStandardBrowserWebWorkerEnv:Ia,protocols:["http","https","file","blob","url","data"]};function Ta(n,e){return Bn(n,new Ie.classes.URLSearchParams,Object.assign({visitor:function(t,i,r,o){return Ie.isNode&&b.isBuffer(t)?(this.append(i,t.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}function Sa(n){return b.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Ca(n){const e={},t=Object.keys(n);let i;const r=t.length;let o;for(i=0;i<r;i++)o=t[i],e[o]=n[o];return e}function ho(n){function e(t,i,r,o){let s=t[o++];const a=Number.isFinite(+s),l=o>=t.length;return s=!s&&b.isArray(r)?r.length:s,l?(b.hasOwnProp(r,s)?r[s]=[r[s],i]:r[s]=i,!a):((!r[s]||!b.isObject(r[s]))&&(r[s]=[]),e(t,i,r[s],o)&&b.isArray(r[s])&&(r[s]=Ca(r[s])),!a)}if(b.isFormData(n)&&b.isFunction(n.entries)){const t={};return b.forEachEntry(n,(i,r)=>{e(Sa(i),r,t,0)}),t}return null}const Na={"Content-Type":void 0};function Aa(n,e,t){if(b.isString(n))try{return(e||JSON.parse)(n),b.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const Fn={transitional:fo,adapter:["xhr","http"],transformRequest:[function(e,t){const i=t.getContentType()||"",r=i.indexOf("application/json")>-1,o=b.isObject(e);if(o&&b.isHTMLForm(e)&&(e=new FormData(e)),b.isFormData(e))return r&&r?JSON.stringify(ho(e)):e;if(b.isArrayBuffer(e)||b.isBuffer(e)||b.isStream(e)||b.isFile(e)||b.isBlob(e))return e;if(b.isArrayBufferView(e))return e.buffer;if(b.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(o){if(i.indexOf("application/x-www-form-urlencoded")>-1)return Ta(e,this.formSerializer).toString();if((a=b.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Bn(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),Aa(e)):e}],transformResponse:[function(e){const t=this.transitional||Fn.transitional,i=t&&t.forcedJSONParsing,r=this.responseType==="json";if(e&&b.isString(e)&&(i&&!this.responseType||r)){const s=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(s)throw a.name==="SyntaxError"?j.from(a,j.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ie.classes.FormData,Blob:Ie.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};b.forEach(["delete","get","head"],function(e){Fn.headers[e]={}});b.forEach(["post","put","patch"],function(e){Fn.headers[e]=b.merge(Na)});const Ni=Fn,Ra=b.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Pa=n=>{const e={};let t,i,r;return n&&n.split(`
`).forEach(function(s){r=s.indexOf(":"),t=s.substring(0,r).trim().toLowerCase(),i=s.substring(r+1).trim(),!(!t||e[t]&&Ra[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},fr=Symbol("internals");function Rt(n){return n&&String(n).trim().toLowerCase()}function fn(n){return n===!1||n==null?n:b.isArray(n)?n.map(fn):String(n)}function Oa(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const La=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Kn(n,e,t,i,r){if(b.isFunction(i))return i.call(this,e,t);if(r&&(e=t),!!b.isString(e)){if(b.isString(i))return e.indexOf(i)!==-1;if(b.isRegExp(i))return i.test(e)}}function Da(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function Ma(n,e){const t=b.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(r,o,s){return this[i].call(this,e,r,o,s)},configurable:!0})})}class zn{constructor(e){e&&this.set(e)}set(e,t,i){const r=this;function o(a,l,c){const f=Rt(l);if(!f)throw new Error("header name must be a non-empty string");const g=b.findKey(r,f);(!g||r[g]===void 0||c===!0||c===void 0&&r[g]!==!1)&&(r[g||l]=fn(a))}const s=(a,l)=>b.forEach(a,(c,f)=>o(c,f,l));return b.isPlainObject(e)||e instanceof this.constructor?s(e,t):b.isString(e)&&(e=e.trim())&&!La(e)?s(Pa(e),t):e!=null&&o(t,e,i),this}get(e,t){if(e=Rt(e),e){const i=b.findKey(this,e);if(i){const r=this[i];if(!t)return r;if(t===!0)return Oa(r);if(b.isFunction(t))return t.call(this,r,i);if(b.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Rt(e),e){const i=b.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||Kn(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let r=!1;function o(s){if(s=Rt(s),s){const a=b.findKey(i,s);a&&(!t||Kn(i,i[a],a,t))&&(delete i[a],r=!0)}}return b.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let i=t.length,r=!1;for(;i--;){const o=t[i];(!e||Kn(this,this[o],o,e,!0))&&(delete this[o],r=!0)}return r}normalize(e){const t=this,i={};return b.forEach(this,(r,o)=>{const s=b.findKey(i,o);if(s){t[s]=fn(r),delete t[o];return}const a=e?Da(o):String(o).trim();a!==o&&delete t[o],t[a]=fn(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return b.forEach(this,(i,r)=>{i!=null&&i!==!1&&(t[r]=e&&b.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[fr]=this[fr]={accessors:{}}).accessors,r=this.prototype;function o(s){const a=Rt(s);i[a]||(Ma(r,s),i[a]=!0)}return b.isArray(e)?e.forEach(o):o(e),this}}zn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);b.freezeMethods(zn.prototype);b.freezeMethods(zn);const De=zn;function Jn(n,e){const t=this||Ni,i=e||t,r=De.from(i.headers);let o=i.data;return b.forEach(n,function(a){o=a.call(t,o,r.normalize(),e?e.status:void 0)}),r.normalize(),o}function po(n){return!!(n&&n.__CANCEL__)}function Jt(n,e,t){j.call(this,n??"canceled",j.ERR_CANCELED,e,t),this.name="CanceledError"}b.inherits(Jt,j,{__CANCEL__:!0});function Ba(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new j("Request failed with status code "+t.status,[j.ERR_BAD_REQUEST,j.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const Fa=Ie.isStandardBrowserEnv?function(){return{write:function(t,i,r,o,s,a){const l=[];l.push(t+"="+encodeURIComponent(i)),b.isNumber(r)&&l.push("expires="+new Date(r).toGMTString()),b.isString(o)&&l.push("path="+o),b.isString(s)&&l.push("domain="+s),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){const i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function za(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Ua(n,e){return e?n.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):n}function mo(n,e){return n&&!za(e)?Ua(n,e):e}const Va=Ie.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let i;function r(o){let s=o;return e&&(t.setAttribute("href",s),s=t.href),t.setAttribute("href",s),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=r(window.location.href),function(s){const a=b.isString(s)?r(s):s;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}();function Wa(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function Ha(n,e){n=n||10;const t=new Array(n),i=new Array(n);let r=0,o=0,s;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),f=i[o];s||(s=c),t[r]=l,i[r]=c;let g=o,x=0;for(;g!==r;)x+=t[g++],g=g%n;if(r=(r+1)%n,r===o&&(o=(o+1)%n),c-s<e)return;const h=f&&c-f;return h?Math.round(x*1e3/h):void 0}}function hr(n,e){let t=0;const i=Ha(50,250);return r=>{const o=r.loaded,s=r.lengthComputable?r.total:void 0,a=o-t,l=i(a),c=o<=s;t=o;const f={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&c?(s-o)/l:void 0,event:r};f[e?"download":"upload"]=!0,n(f)}}const ja=typeof XMLHttpRequest<"u",$a=ja&&function(n){return new Promise(function(t,i){let r=n.data;const o=De.from(n.headers).normalize(),s=n.responseType;let a;function l(){n.cancelToken&&n.cancelToken.unsubscribe(a),n.signal&&n.signal.removeEventListener("abort",a)}b.isFormData(r)&&(Ie.isStandardBrowserEnv||Ie.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(n.auth){const h=n.auth.username||"",u=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";o.set("Authorization","Basic "+btoa(h+":"+u))}const f=mo(n.baseURL,n.url);c.open(n.method.toUpperCase(),uo(f,n.params,n.paramsSerializer),!0),c.timeout=n.timeout;function g(){if(!c)return;const h=De.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),p={data:!s||s==="text"||s==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:h,config:n,request:c};Ba(function(w){t(w),l()},function(w){i(w),l()},p),c=null}if("onloadend"in c?c.onloadend=g:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(g)},c.onabort=function(){c&&(i(new j("Request aborted",j.ECONNABORTED,n,c)),c=null)},c.onerror=function(){i(new j("Network Error",j.ERR_NETWORK,n,c)),c=null},c.ontimeout=function(){let u=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const p=n.transitional||fo;n.timeoutErrorMessage&&(u=n.timeoutErrorMessage),i(new j(u,p.clarifyTimeoutError?j.ETIMEDOUT:j.ECONNABORTED,n,c)),c=null},Ie.isStandardBrowserEnv){const h=(n.withCredentials||Va(f))&&n.xsrfCookieName&&Fa.read(n.xsrfCookieName);h&&o.set(n.xsrfHeaderName,h)}r===void 0&&o.setContentType(null),"setRequestHeader"in c&&b.forEach(o.toJSON(),function(u,p){c.setRequestHeader(p,u)}),b.isUndefined(n.withCredentials)||(c.withCredentials=!!n.withCredentials),s&&s!=="json"&&(c.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&c.addEventListener("progress",hr(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",hr(n.onUploadProgress)),(n.cancelToken||n.signal)&&(a=h=>{c&&(i(!h||h.type?new Jt(null,n,c):h),c.abort(),c=null)},n.cancelToken&&n.cancelToken.subscribe(a),n.signal&&(n.signal.aborted?a():n.signal.addEventListener("abort",a)));const x=Wa(f);if(x&&Ie.protocols.indexOf(x)===-1){i(new j("Unsupported protocol "+x+":",j.ERR_BAD_REQUEST,n));return}c.send(r||null)})},hn={http:ga,xhr:$a};b.forEach(hn,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const qa={getAdapter:n=>{n=b.isArray(n)?n:[n];const{length:e}=n;let t,i;for(let r=0;r<e&&(t=n[r],!(i=b.isString(t)?hn[t.toLowerCase()]:t));r++);if(!i)throw i===!1?new j(`Adapter ${t} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(b.hasOwnProp(hn,t)?`Adapter '${t}' is not available in the build`:`Unknown adapter '${t}'`);if(!b.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:hn};function Yn(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Jt(null,n)}function pr(n){return Yn(n),n.headers=De.from(n.headers),n.data=Jn.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),qa.getAdapter(n.adapter||Ni.adapter)(n).then(function(i){return Yn(n),i.data=Jn.call(n,n.transformResponse,i),i.headers=De.from(i.headers),i},function(i){return po(i)||(Yn(n),i&&i.response&&(i.response.data=Jn.call(n,n.transformResponse,i.response),i.response.headers=De.from(i.response.headers))),Promise.reject(i)})}const mr=n=>n instanceof De?n.toJSON():n;function bt(n,e){e=e||{};const t={};function i(c,f,g){return b.isPlainObject(c)&&b.isPlainObject(f)?b.merge.call({caseless:g},c,f):b.isPlainObject(f)?b.merge({},f):b.isArray(f)?f.slice():f}function r(c,f,g){if(b.isUndefined(f)){if(!b.isUndefined(c))return i(void 0,c,g)}else return i(c,f,g)}function o(c,f){if(!b.isUndefined(f))return i(void 0,f)}function s(c,f){if(b.isUndefined(f)){if(!b.isUndefined(c))return i(void 0,c)}else return i(void 0,f)}function a(c,f,g){if(g in e)return i(c,f);if(g in n)return i(void 0,c)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(c,f)=>r(mr(c),mr(f),!0)};return b.forEach(Object.keys(Object.assign({},n,e)),function(f){const g=l[f]||r,x=g(n[f],e[f],f);b.isUndefined(x)&&g!==a||(t[f]=x)}),t}const go="1.4.0",Ai={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Ai[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const gr={};Ai.transitional=function(e,t,i){function r(o,s){return"[Axios v"+go+"] Transitional option '"+o+"'"+s+(i?". "+i:"")}return(o,s,a)=>{if(e===!1)throw new j(r(s," has been removed"+(t?" in "+t:"")),j.ERR_DEPRECATED);return t&&!gr[s]&&(gr[s]=!0,console.warn(r(s," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(o,s,a):!0}};function Xa(n,e,t){if(typeof n!="object")throw new j("options must be an object",j.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const o=i[r],s=e[o];if(s){const a=n[o],l=a===void 0||s(a,o,n);if(l!==!0)throw new j("option "+o+" must be "+l,j.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new j("Unknown option "+o,j.ERR_BAD_OPTION)}}const hi={assertOptions:Xa,validators:Ai},He=hi.validators;class wn{constructor(e){this.defaults=e,this.interceptors={request:new dr,response:new dr}}request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=bt(this.defaults,t);const{transitional:i,paramsSerializer:r,headers:o}=t;i!==void 0&&hi.assertOptions(i,{silentJSONParsing:He.transitional(He.boolean),forcedJSONParsing:He.transitional(He.boolean),clarifyTimeoutError:He.transitional(He.boolean)},!1),r!=null&&(b.isFunction(r)?t.paramsSerializer={serialize:r}:hi.assertOptions(r,{encode:He.function,serialize:He.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s;s=o&&b.merge(o.common,o[t.method]),s&&b.forEach(["delete","get","head","post","put","patch","common"],u=>{delete o[u]}),t.headers=De.concat(s,o);const a=[];let l=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(t)===!1||(l=l&&p.synchronous,a.unshift(p.fulfilled,p.rejected))});const c=[];this.interceptors.response.forEach(function(p){c.push(p.fulfilled,p.rejected)});let f,g=0,x;if(!l){const u=[pr.bind(this),void 0];for(u.unshift.apply(u,a),u.push.apply(u,c),x=u.length,f=Promise.resolve(t);g<x;)f=f.then(u[g++],u[g++]);return f}x=a.length;let h=t;for(g=0;g<x;){const u=a[g++],p=a[g++];try{h=u(h)}catch(v){p.call(this,v);break}}try{f=pr.call(this,h)}catch(u){return Promise.reject(u)}for(g=0,x=c.length;g<x;)f=f.then(c[g++],c[g++]);return f}getUri(e){e=bt(this.defaults,e);const t=mo(e.baseURL,e.url);return uo(t,e.params,e.paramsSerializer)}}b.forEach(["delete","get","head","options"],function(e){wn.prototype[e]=function(t,i){return this.request(bt(i||{},{method:e,url:t,data:(i||{}).data}))}});b.forEach(["post","put","patch"],function(e){function t(i){return function(o,s,a){return this.request(bt(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}wn.prototype[e]=t(),wn.prototype[e+"Form"]=t(!0)});const pn=wn;class Ri{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(o){t=o});const i=this;this.promise.then(r=>{if(!i._listeners)return;let o=i._listeners.length;for(;o-- >0;)i._listeners[o](r);i._listeners=null}),this.promise.then=r=>{let o;const s=new Promise(a=>{i.subscribe(a),o=a}).then(r);return s.cancel=function(){i.unsubscribe(o)},s},e(function(o,s,a){i.reason||(i.reason=new Jt(o,s,a),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new Ri(function(r){e=r}),cancel:e}}}const Ga=Ri;function Ka(n){return function(t){return n.apply(null,t)}}function Ja(n){return b.isObject(n)&&n.isAxiosError===!0}const pi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pi).forEach(([n,e])=>{pi[e]=n});const Ya=pi;function yo(n){const e=new pn(n),t=Qr(pn.prototype.request,e);return b.extend(t,pn.prototype,e,{allOwnKeys:!0}),b.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return yo(bt(n,r))},t}const re=yo(Ni);re.Axios=pn;re.CanceledError=Jt;re.CancelToken=Ga;re.isCancel=po;re.VERSION=go;re.toFormData=Bn;re.AxiosError=j;re.Cancel=re.CanceledError;re.all=function(e){return Promise.all(e)};re.spread=Ka;re.isAxiosError=Ja;re.mergeConfig=bt;re.AxiosHeaders=De;re.formToJSON=n=>ho(b.isHTMLForm(n)?new FormData(n):n);re.HttpStatusCode=Ya;re.default=re;const Pi=re;var Qn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function an(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var bo={exports:{}};(function(n,e){(function(t){n.exports=t()})(function(){return function t(i,r,o){function s(c,f){if(!r[c]){if(!i[c]){var g=typeof an=="function"&&an;if(!f&&g)return g(c,!0);if(a)return a(c,!0);var x=new Error("Cannot find module '"+c+"'");throw x.code="MODULE_NOT_FOUND",x}var h=r[c]={exports:{}};i[c][0].call(h.exports,function(u){return s(i[c][1][u]||u)},h,h.exports,t,i,r,o)}return r[c].exports}for(var a=typeof an=="function"&&an,l=0;l<o.length;l++)s(o[l]);return s}({1:[function(t,i,r){Object.defineProperty(r,"__esModule",{value:!0}),r.create=r.visible=void 0;var o=function(l){var c=arguments.length>1&&arguments[1]!==void 0&&arguments[1],f=document.createElement("div");return f.innerHTML=l.trim(),c===!0?f.children:f.firstChild},s=function(l,c){var f=l.children;return f.length===1&&f[0].tagName===c},a=function(l){return(l=l||document.querySelector(".basicLightbox"))!=null&&l.ownerDocument.body.contains(l)===!0};r.visible=a,r.create=function(l,c){var f=function(h,u){var p=o(`
		<div class="basicLightbox `.concat(u.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),v=p.querySelector(".basicLightbox__placeholder");h.forEach(function(_){return v.appendChild(_)});var w=s(v,"IMG"),T=s(v,"VIDEO"),O=s(v,"IFRAME");return w===!0&&p.classList.add("basicLightbox--img"),T===!0&&p.classList.add("basicLightbox--video"),O===!0&&p.classList.add("basicLightbox--iframe"),p}(l=function(h){var u=typeof h=="string",p=h instanceof HTMLElement==1;if(u===!1&&p===!1)throw new Error("Content must be a DOM element/node or string");return u===!0?Array.from(o(h,!0)):h.tagName==="TEMPLATE"?[h.content.cloneNode(!0)]:Array.from(h.children)}(l),c=function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((h=Object.assign({},h)).closable==null&&(h.closable=!0),h.className==null&&(h.className=""),h.onShow==null&&(h.onShow=function(){}),h.onClose==null&&(h.onClose=function(){}),typeof h.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof h.className!="string")throw new Error("Property `className` must be a string");if(typeof h.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof h.onClose!="function")throw new Error("Property `onClose` must be a function");return h}(c)),g=function(h){return c.onClose(x)!==!1&&function(u,p){return u.classList.remove("basicLightbox--visible"),setTimeout(function(){return a(u)===!1||u.parentElement.removeChild(u),p()},410),!0}(f,function(){if(typeof h=="function")return h(x)})};c.closable===!0&&f.addEventListener("click",function(h){h.target===f&&g()});var x={element:function(){return f},visible:function(){return a(f)},show:function(h){return c.onShow(x)!==!1&&function(u,p){return document.body.appendChild(u),setTimeout(function(){requestAnimationFrame(function(){return u.classList.add("basicLightbox--visible"),p()})},10),!0}(f,function(){if(typeof h=="function")return h(x)})},close:g};return x}},{}]},{},[1])(1)})})(bo);var Oi=bo.exports;function Qa({_id:n,book_image:e,title:t,author:i,description:r,buy_links:[o,s,a,l,c]}={}){return`
    <div data-id=${n} class="modal-window-conteiner">
      <button class = "btn-close">
        <svg class="icon-close">
          <use href="./img/spryte.svg#icon-close ">
        </svg>
      </button>
      <div class="mw-content-conteiner">
        <div class="mw-image-conteiner">
          <img class="book-img-modal-window" src="${e}" alt="" />
        </div>
        <div class="mw-data-conteiner">
          <h2 class="book-title-modal">${t}</h2>
          <p class="author-modal-window">${i}</p>
          <p class="desc-modal-window">${r}</p>
          <ul class="markets-list-modal-window">
            <li>
              <a href="${o.url}">
                <img class = "img-market"src="/img/amazon.png" alt="${t}">
              </a>
            </li>
            <li>
              <a href="${s.url}">
                <img class = "img-market" src="/img/book-market.png" alt="${t}">
              </a>
            </li>
            <li>
              <a href="${a.url}">
                <img class = "img-market" src="/img/book-shelf.png" alt="${t}">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class = "add-shopping">
        <button class="add-delete-book-btn">Add to shopping list</button>
      </div>
      <div class = "text-conteiner">
      <p class="added-modal-window after">
        Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
      </p></div>
    </div>
  `}let Lt,Re,Li=!1,ht=null;const Zn={books_showcase:document.querySelector(".books-showcase")};Zn&&Zn.books_showcase&&Zn.books_showcase.addEventListener("click",Za);async function Za(n){const e=n.target.closest(".js-book-item");if(e){const{id:t}=e.dataset;try{const i=await ec(t),r=Qa(i);tc(r);const o=document.querySelector(".modal-window-conteiner");o.dataset.book=JSON.stringify(i),Lt=o.querySelector(".added-modal-window"),Re=o.querySelector(".add-delete-book-btn");const s=JSON.parse(localStorage.getItem("KEY"))??[],a=i._id;xo(a,s)?(Lt.classList.remove("after"),Re.classList.add("small"),Re.textContent="remove from the shopping list"):(Lt.classList.add("after"),Re.classList.remove("small"),Re.textContent="Add to shopping list"),o.addEventListener("click",nc)}catch(i){console.error(i)}}else return}async function ec(n){const e="https://books-backend.p.goit.global/books/";return(await Pi.get(`${e}${n}`)).data}function tc(n){ht=Oi.create(n),ht.element().querySelector(".btn-close").addEventListener("click",()=>{Di()}),ht.element().addEventListener("click",wo),ht.show(),document.documentElement.style.overflow="hidden",Li=!0,document.addEventListener("keydown",vo)}function Di(){ht.close(),document.documentElement.style.overflow="auto",Li=!1,document.removeEventListener("keydown",vo),ht.element().removeEventListener("click",wo)}function vo(n){n.key==="Escape"&&Li&&Di()}function wo(n){n.target===n.currentTarget&&Di()}function xo(n,e){return e.some(t=>t._id===n)}function nc(n){if(!n.target.classList.contains("add-delete-book-btn"))return;const e=n.target.closest(".modal-window-conteiner").dataset.id,t=JSON.parse(localStorage.getItem("KEY"))??[],i=JSON.parse(n.target.closest(".modal-window-conteiner").dataset.book);if(xo(e,t)){const r=t.filter(o=>o._id!==e);localStorage.setItem("KEY",JSON.stringify(r)),Lt.classList.add("after"),Re.classList.remove("small"),Re.textContent="Add to shopping list"}else t.push(i),localStorage.setItem("KEY",JSON.stringify(t)),Lt.classList.remove("after"),Re.classList.add("small"),Re.textContent="remove from the shopping list"}var ic={exports:{}};(function(n){(function(e,t){n.exports=t(e)})(typeof Qn>"u"?typeof window>"u"?Qn:window:Qn,function(e){if(typeof e>"u"&&typeof e.document>"u")return!1;var t,i,r,o,s,a=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,l='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',c={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},f={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},g={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},x={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},h={Show:"Show",Ask:"Ask",Prompt:"Prompt"},u={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},p={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},v={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},w={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse"},T={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},O=function(d){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+d+a)},_=function(d){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3",`
`+d+a)},E=function(d){return d||(d="head"),e.document[d]!==null||(O(`
Notiflix needs to be appended to the "<`+d+'>" element, but you called it before the "<'+d+'>" element has been created.'),!1)},X=function(d,m){if(!E("head"))return!1;if(d()!==null&&!e.document.getElementById(m)){var y=e.document.createElement("style");y.id=m,y.innerHTML=d(),e.document.head.appendChild(y)}},N=function(){var d={},m=!1,y=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(m=arguments[0],y++);for(var S=function(A){for(var F in A)Object.prototype.hasOwnProperty.call(A,F)&&(d[F]=m&&Object.prototype.toString.call(A[F])==="[object Object]"?N(d[F],A[F]):A[F])};y<arguments.length;y++)S(arguments[y]);return d},$=function(d){var m=e.document.createElement("div");return m.innerHTML=d,m.textContent||m.innerText||""},ve=function(d,m){d||(d="110px"),m||(m="#32c682");var y='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+d+'" height="'+d+'" fill="'+m+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return y},Ct=function(d,m){d||(d="110px"),m||(m="#ff5549");var y='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+d+'" height="'+d+'" fill="'+m+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return y},Hn=function(d,m){d||(d="110px"),m||(m="#eebf31");var y='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+d+'" height="'+d+'" fill="'+m+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return y},jn=function(d,m){d||(d="110px"),m||(m="#26c0d3");var y='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+d+'" height="'+d+'" fill="'+m+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return y},Ze=function(d,m){d||(d="60px"),m||(m="#32c682");var y='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+m+'" width="'+d+'" height="'+d+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';return y},rn=function(d,m){d||(d="60px"),m||(m="#32c682");var y='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+m+'" width="'+d+'" height="'+d+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';return y},et=function(d,m){d||(d="60px"),m||(m="#32c682");var y='<svg xmlns="http://www.w3.org/2000/svg" width="'+d+'" height="'+d+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+d+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+d+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+m+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';return y},on=function(d,m){d||(d="60px"),m||(m="#32c682");var y='<svg xmlns="http://www.w3.org/2000/svg" fill="'+m+'" width="'+d+'" height="'+d+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';return y},I=function(d,m){d||(d="60px"),m||(m="#32c682");var y='<svg xmlns="http://www.w3.org/2000/svg" fill="'+m+'" width="'+d+'" height="'+d+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';return y},P=function(d,m){d||(d="60px"),m||(m="#32c682");var y='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+m+'" width="'+d+'" height="'+d+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';return y},L=function(d,m,y){d||(d="60px"),m||(m="#f8f8f8"),y||(y="#32c682");var S='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+d+'" height="'+d+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+m+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+y+'" stroke="'+y+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';return S},B=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},V=0,G=function(d,m,y,S){if(!E("body"))return!1;t||ue.Notify.init({});var A=N(!0,t,{});if(typeof y=="object"&&!Array.isArray(y)||typeof S=="object"&&!Array.isArray(S)){var F={};typeof y=="object"?F=y:typeof S=="object"&&(F=S),t=N(!0,t,F)}var D=t[d.toLocaleLowerCase("en")];V++,typeof m!="string"&&(m="Notiflix "+d),t.plainText&&(m=$(m)),!t.plainText&&m.length>t.messageMaxLength&&(t=N(!0,t,{closeButton:!0,messageMaxLength:150}),m='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),m.length>t.messageMaxLength&&(m=m.substring(0,t.messageMaxLength)+"..."),t.fontAwesomeIconStyle==="shadow"&&(D.fontAwesomeIconColor=D.background),t.cssAnimation||(t.cssAnimationDuration=0);var k=e.document.getElementById(f.wrapID)||e.document.createElement("div");if(k.id=f.wrapID,k.style.width=t.width,k.style.zIndex=t.zindex,k.style.opacity=t.opacity,t.position==="center-center"?(k.style.left=t.distance,k.style.top=t.distance,k.style.right=t.distance,k.style.bottom=t.distance,k.style.margin="auto",k.classList.add("nx-flex-center-center"),k.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",k.style.display="flex",k.style.flexWrap="wrap",k.style.flexDirection="column",k.style.justifyContent="center",k.style.alignItems="center",k.style.pointerEvents="none"):t.position==="center-top"?(k.style.left=t.distance,k.style.right=t.distance,k.style.top=t.distance,k.style.bottom="auto",k.style.margin="auto"):t.position==="center-bottom"?(k.style.left=t.distance,k.style.right=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.margin="auto"):t.position==="right-bottom"?(k.style.right=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.left="auto"):t.position==="left-top"?(k.style.left=t.distance,k.style.top=t.distance,k.style.right="auto",k.style.bottom="auto"):t.position==="left-bottom"?(k.style.left=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.right="auto"):(k.style.right=t.distance,k.style.top=t.distance,k.style.left="auto",k.style.bottom="auto"),t.backOverlay){var W=e.document.getElementById(f.overlayID)||e.document.createElement("div");W.id=f.overlayID,W.style.width="100%",W.style.height="100%",W.style.position="fixed",W.style.zIndex=t.zindex-1,W.style.left=0,W.style.top=0,W.style.right=0,W.style.bottom=0,W.style.background=D.backOverlayColor||t.backOverlayColor,W.className=t.cssAnimation?"nx-with-animation":"",W.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(f.overlayID)||e.document.body.appendChild(W)}e.document.getElementById(f.wrapID)||e.document.body.appendChild(k);var C=e.document.createElement("div");C.id=t.ID+"-"+V,C.className=t.className+" "+D.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&typeof y!="function"?"nx-with-close-button":"")+" "+(typeof y=="function"?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),C.style.fontSize=t.fontSize,C.style.color=D.textColor,C.style.background=D.background,C.style.borderRadius=t.borderRadius,C.style.pointerEvents="all",t.rtl&&(C.setAttribute("dir","rtl"),C.classList.add("nx-rtl-on")),C.style.fontFamily='"'+t.fontFamily+'", '+l,t.cssAnimation&&(C.style.animationDuration=t.cssAnimationDuration+"ms");var Y="";if(t.closeButton&&typeof y!="function"&&(Y='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+D.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),!t.useIcon)C.innerHTML='<span class="nx-message">'+m+"</span>"+(t.closeButton?Y:"");else if(t.useFontAwesome)C.innerHTML='<i style="color:'+D.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+D.fontAwesomeClassName+" "+(t.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+m+"</span>"+(t.closeButton?Y:"");else{var te="";d===c.Success?te='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+D.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':d===c.Failure?te='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+D.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':d===c.Warning?te='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+D.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':d===c.Info&&(te='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+D.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),C.innerHTML=te+'<span class="nx-message nx-with-icon">'+m+"</span>"+(t.closeButton?Y:"")}if(t.position==="left-bottom"||t.position==="right-bottom"){var ie=e.document.getElementById(f.wrapID);ie.insertBefore(C,ie.firstChild)}else e.document.getElementById(f.wrapID).appendChild(C);var ee=e.document.getElementById(C.id);if(ee){var H,ne,q=function(){ee.classList.add("nx-remove");var M=e.document.getElementById(f.overlayID);M&&0>=k.childElementCount&&M.classList.add("nx-remove"),clearTimeout(H)},we=function(){if(ee&&ee.parentNode!==null&&ee.parentNode.removeChild(ee),0>=k.childElementCount&&k.parentNode!==null){k.parentNode.removeChild(k);var M=e.document.getElementById(f.overlayID);M&&M.parentNode!==null&&M.parentNode.removeChild(M)}clearTimeout(ne)};if(t.closeButton&&typeof y!="function"){var xe=e.document.getElementById(C.id).querySelector("span.nx-close-button");xe.addEventListener("click",function(){q();var M=setTimeout(function(){we(),clearTimeout(M)},t.cssAnimationDuration)})}if((typeof y=="function"||t.clickToClose)&&ee.addEventListener("click",function(){typeof y=="function"&&y(),q();var M=setTimeout(function(){we(),clearTimeout(M)},t.cssAnimationDuration)}),!t.closeButton&&typeof y!="function"){var de=function(){H=setTimeout(function(){q()},t.timeout),ne=setTimeout(function(){we()},t.timeout+t.cssAnimationDuration)};de(),t.pauseOnHover&&(ee.addEventListener("mouseenter",function(){ee.classList.add("nx-paused"),clearTimeout(H),clearTimeout(ne)}),ee.addEventListener("mouseleave",function(){ee.classList.remove("nx-paused"),de()}))}}if(t.showOnlyTheLastOne&&0<V)for(var fe,Q=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+V+"])"),We=0;We<Q.length;We++)fe=Q[We],fe.parentNode!==null&&fe.parentNode.removeChild(fe);t=N(!0,t,A)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},oe=function(d,m,y,S,A,F){if(!E("body"))return!1;i||ue.Report.init({});var D={};if(typeof A=="object"&&!Array.isArray(A)||typeof F=="object"&&!Array.isArray(F)){var k={};typeof A=="object"?k=A:typeof F=="object"&&(k=F),D=N(!0,i,{}),i=N(!0,i,k)}var W=i[d.toLocaleLowerCase("en")];typeof m!="string"&&(m="Notiflix "+d),typeof y!="string"&&(d===g.Success?y='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':d===g.Failure?y='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':d===g.Warning?y='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':d===g.Info&&(y='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),typeof S!="string"&&(S="Okay"),i.plainText&&(m=$(m),y=$(y),S=$(S)),i.plainText||(m.length>i.titleMaxLength&&(m="Possible HTML Tags Error",y='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',S="Okay"),y.length>i.messageMaxLength&&(m="Possible HTML Tags Error",y='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',S="Okay"),S.length>i.buttonMaxLength&&(m="Possible HTML Tags Error",y='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',S="Okay")),m.length>i.titleMaxLength&&(m=m.substring(0,i.titleMaxLength)+"..."),y.length>i.messageMaxLength&&(y=y.substring(0,i.messageMaxLength)+"..."),S.length>i.buttonMaxLength&&(S=S.substring(0,i.buttonMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var C=e.document.createElement("div");C.id=x.ID,C.className=i.className,C.style.zIndex=i.zindex,C.style.borderRadius=i.borderRadius,C.style.fontFamily='"'+i.fontFamily+'", '+l,i.rtl&&(C.setAttribute("dir","rtl"),C.classList.add("nx-rtl-on")),C.style.display="flex",C.style.flexWrap="wrap",C.style.flexDirection="column",C.style.alignItems="center",C.style.justifyContent="center";var Y="",te=i.backOverlayClickToClose===!0;i.backOverlay&&(Y='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+(te?" nx-report-click-to-close":"")+'" style="background:'+(W.backOverlayColor||i.backOverlayColor)+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var ie="";if(d===g.Success?ie=ve(i.svgSize,W.svgColor):d===g.Failure?ie=Ct(i.svgSize,W.svgColor):d===g.Warning?ie=Hn(i.svgSize,W.svgColor):d===g.Info&&(ie=jn(i.svgSize,W.svgColor)),C.innerHTML=Y+'<div class="'+i.className+"-content"+(i.cssAnimation?" nx-with-animation ":"")+" nx-"+i.cssAnimationStyle+'" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+'ms;"><div style="width:'+i.svgSize+"; height:"+i.svgSize+';" class="'+i.className+'-icon">'+ie+'</div><h5 class="'+i.className+'-title" style="font-weight:500; font-size:'+i.titleFontSize+"; color:"+W.titleColor+';">'+m+'</h5><p class="'+i.className+'-message" style="font-size:'+i.messageFontSize+"; color:"+W.messageColor+';">'+y+'</p><a id="NXReportButton" class="'+i.className+'-button" style="font-weight:500; font-size:'+i.buttonFontSize+"; background:"+W.buttonBackground+"; color:"+W.buttonColor+';">'+S+"</a></div>",!e.document.getElementById(C.id)){e.document.body.appendChild(C);var ee=function(){var q=e.document.getElementById(C.id);q.classList.add("nx-remove");var we=setTimeout(function(){q.parentNode!==null&&q.parentNode.removeChild(q),clearTimeout(we)},i.cssAnimationDuration)},H=e.document.getElementById("NXReportButton");if(H.addEventListener("click",function(){typeof A=="function"&&A(),ee()}),Y&&te){var ne=e.document.querySelector(".nx-report-click-to-close");ne.addEventListener("click",function(){ee()})}}i=N(!0,i,D)},Ve=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},$n=function(d,m,y,S,A,F,D,k,W){if(!E("body"))return!1;r||ue.Confirm.init({});var C=N(!0,r,{});typeof W!="object"||Array.isArray(W)||(r=N(!0,r,W)),typeof m!="string"&&(m="Notiflix Confirm"),typeof y!="string"&&(y="Do you agree with me?"),typeof A!="string"&&(A="Yes"),typeof F!="string"&&(F="No"),typeof D!="function"&&(D=void 0),typeof k!="function"&&(k=void 0),r.plainText&&(m=$(m),y=$(y),A=$(A),F=$(F)),r.plainText||(m.length>r.titleMaxLength&&(m="Possible HTML Tags Error",y='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',A="Okay",F="..."),y.length>r.messageMaxLength&&(m="Possible HTML Tags Error",y='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',A="Okay",F="..."),(A.length||F.length)>r.buttonsMaxLength&&(m="Possible HTML Tags Error",y='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',A="Okay",F="...")),m.length>r.titleMaxLength&&(m=m.substring(0,r.titleMaxLength)+"..."),y.length>r.messageMaxLength&&(y=y.substring(0,r.messageMaxLength)+"..."),A.length>r.buttonsMaxLength&&(A=A.substring(0,r.buttonsMaxLength)+"..."),F.length>r.buttonsMaxLength&&(F=F.substring(0,r.buttonsMaxLength)+"..."),r.cssAnimation||(r.cssAnimationDuration=0);var Y=e.document.createElement("div");Y.id=u.ID,Y.className=r.className+(r.cssAnimation?" nx-with-animation nx-"+r.cssAnimationStyle:""),Y.style.zIndex=r.zindex,Y.style.padding=r.distance,r.rtl&&(Y.setAttribute("dir","rtl"),Y.classList.add("nx-rtl-on"));var te=typeof r.position=="string"?r.position.trim():"center";Y.classList.add("nx-position-"+te),Y.style.fontFamily='"'+r.fontFamily+'", '+l;var ie="";r.backOverlay&&(ie='<div class="'+r.className+"-overlay"+(r.cssAnimation?" nx-with-animation":"")+'" style="background:'+r.backOverlayColor+";animation-duration:"+r.cssAnimationDuration+'ms;"></div>');var ee="";typeof D=="function"&&(ee='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+r.cancelButtonColor+";background:"+r.cancelButtonBackground+";font-size:"+r.buttonsFontSize+';">'+F+"</a>");var H="",ne=null,q=void 0;if(d===h.Ask||d===h.Prompt){ne=S||"";var we=d===h.Ask||200<ne.length?Math.ceil(1.5*ne.length):250,xe=d===h.Prompt?'value="'+ne+'"':"";H='<div><input id="NXConfirmValidationInput" type="text" '+xe+' maxlength="'+we+'" style="font-size:'+r.messageFontSize+";border-radius: "+r.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(Y.innerHTML=ie+'<div class="'+r.className+'-content" style="width:'+r.width+"; background:"+r.backgroundColor+"; animation-duration:"+r.cssAnimationDuration+"ms; border-radius: "+r.borderRadius+';"><div class="'+r.className+'-head"><h5 style="color:'+r.titleColor+";font-size:"+r.titleFontSize+';">'+m+'</h5><div style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+y+H+'</div></div><div class="'+r.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+(typeof D=="function"?"":" nx-full")+'" style="color:'+r.okButtonColor+";background:"+r.okButtonBackground+";font-size:"+r.buttonsFontSize+';">'+A+"</a>"+ee+"</div></div>",!e.document.getElementById(Y.id)){e.document.body.appendChild(Y);var de=e.document.getElementById(Y.id),fe=e.document.getElementById("NXConfirmButtonOk"),Q=e.document.getElementById("NXConfirmValidationInput");if(Q&&(Q.focus(),Q.setSelectionRange(0,(Q.value||"").length),Q.addEventListener("keyup",function(M){var ft=M.target.value;if(d===h.Ask&&ft!==ne)M.preventDefault(),Q.classList.add("nx-validation-failure"),Q.classList.remove("nx-validation-success");else{d===h.Ask&&(Q.classList.remove("nx-validation-failure"),Q.classList.add("nx-validation-success"));var Nt=(M.key||"").toLocaleLowerCase("en")==="enter"||M.keyCode===13;Nt&&fe.dispatchEvent(new Event("click"))}})),fe.addEventListener("click",function(M){if(d===h.Ask&&ne&&Q){var ft=(Q.value||"").toString();if(ft!==ne)return Q.focus(),Q.classList.add("nx-validation-failure"),M.stopPropagation(),M.preventDefault(),M.returnValue=!1,M.cancelBubble=!0,!1;Q.classList.remove("nx-validation-failure")}typeof D=="function"&&(d===h.Prompt&&Q&&(q=Q.value||""),D(q)),de.classList.add("nx-remove");var Nt=setTimeout(function(){de.parentNode!==null&&(de.parentNode.removeChild(de),clearTimeout(Nt))},r.cssAnimationDuration)}),typeof D=="function"){var We=e.document.getElementById("NXConfirmButtonCancel");We.addEventListener("click",function(){typeof k=="function"&&(d===h.Prompt&&Q&&(q=Q.value||""),k(q)),de.classList.add("nx-remove");var M=setTimeout(function(){de.parentNode!==null&&(de.parentNode.removeChild(de),clearTimeout(M))},r.cssAnimationDuration)})}}r=N(!0,r,C)},Ts=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},Ne=function(d,m,y,S,A){if(!E("body"))return!1;o||ue.Loading.init({});var F=N(!0,o,{});if(typeof m=="object"&&!Array.isArray(m)||typeof y=="object"&&!Array.isArray(y)){var D={};typeof m=="object"?D=m:typeof y=="object"&&(D=y),o=N(!0,o,D)}var k="";if(typeof m=="string"&&0<m.length&&(k=m),S){k=k.length>o.messageMaxLength?$(k).toString().substring(0,o.messageMaxLength)+"...":$(k).toString();var W="";0<k.length&&(W='<p id="'+o.messageID+'" class="nx-loading-message" style="color:'+o.messageColor+";font-size:"+o.messageFontSize+';">'+k+"</p>"),o.cssAnimation||(o.cssAnimationDuration=0);var C="";if(d===p.Standard)C=Ze(o.svgSize,o.svgColor);else if(d===p.Hourglass)C=rn(o.svgSize,o.svgColor);else if(d===p.Circle)C=et(o.svgSize,o.svgColor);else if(d===p.Arrows)C=on(o.svgSize,o.svgColor);else if(d===p.Dots)C=I(o.svgSize,o.svgColor);else if(d===p.Pulse)C=P(o.svgSize,o.svgColor);else if(d===p.Custom&&o.customSvgCode!==null&&o.customSvgUrl===null)C=o.customSvgCode||"";else if(d===p.Custom&&o.customSvgUrl!==null&&o.customSvgCode===null)C='<img class="nx-custom-loading-icon" width="'+o.svgSize+'" height="'+o.svgSize+'" src="'+o.customSvgUrl+'" alt="Notiflix">';else{if(d===p.Custom&&(o.customSvgUrl===null||o.customSvgCode===null))return O('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;C=L(o.svgSize,"#f8f8f8","#32c682")}var Y=parseInt((o.svgSize||"").replace(/[^0-9]/g,"")),te=e.innerWidth,ie=Y>=te?te-40+"px":Y+"px",ee='<div style="width:'+ie+"; height:"+ie+';" class="'+o.className+"-icon"+(0<k.length?" nx-with-message":"")+'">'+C+"</div>",H=e.document.createElement("div");if(H.id=v.ID,H.className=o.className+(o.cssAnimation?" nx-with-animation":"")+(o.clickToClose?" nx-loading-click-to-close":""),H.style.zIndex=o.zindex,H.style.background=o.backgroundColor,H.style.animationDuration=o.cssAnimationDuration+"ms",H.style.fontFamily='"'+o.fontFamily+'", '+l,H.style.display="flex",H.style.flexWrap="wrap",H.style.flexDirection="column",H.style.alignItems="center",H.style.justifyContent="center",o.rtl&&(H.setAttribute("dir","rtl"),H.classList.add("nx-rtl-on")),H.innerHTML=ee+W,!e.document.getElementById(H.id)&&(e.document.body.appendChild(H),o.clickToClose)){var ne=e.document.getElementById(H.id);ne.addEventListener("click",function(){H.classList.add("nx-remove");var xe=setTimeout(function(){H.parentNode!==null&&(H.parentNode.removeChild(H),clearTimeout(xe))},o.cssAnimationDuration)})}}else if(e.document.getElementById(v.ID))var q=e.document.getElementById(v.ID),we=setTimeout(function(){q.classList.add("nx-remove");var xe=setTimeout(function(){q.parentNode!==null&&(q.parentNode.removeChild(q),clearTimeout(xe))},o.cssAnimationDuration);clearTimeout(we)},A);o=N(!0,o,F)},Ss=function(d){typeof d!="string"&&(d="");var m=e.document.getElementById(v.ID);if(m)if(0<d.length){d=d.length>o.messageMaxLength?$(d).substring(0,o.messageMaxLength)+"...":$(d);var y=m.getElementsByTagName("p")[0];if(y)y.innerHTML=d;else{var S=e.document.createElement("p");S.id=o.messageID,S.className="nx-loading-message nx-loading-message-new",S.style.color=o.messageColor,S.style.fontSize=o.messageFontSize,S.innerHTML=d,m.appendChild(S)}}else O("Where is the new message?")},Cs=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},qn=0,tt=function(d,m,y,S,A,F){var D;if(Array.isArray(y)){if(1>y.length)return O("Array of HTMLElements should contains at least one HTMLElement."),!1;D=y}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,y)){if(1>y.length)return O("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;D=Array.prototype.slice.call(y)}else{var k=typeof y!="string"||1>(y||"").length||(y||"").length===1&&((y||"")[0]==="#"||(y||"")[0]===".");if(k)return O("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var W=e.document.querySelectorAll(y);if(1>W.length)return O('You called the "Notiflix.Block..." function with "'+y+'" selector, but there is no such element(s) in the document.'),!1;D=W}s||ue.Block.init({});var C=N(!0,s,{});if(typeof S=="object"&&!Array.isArray(S)||typeof A=="object"&&!Array.isArray(A)){var Y={};typeof S=="object"?Y=S:typeof A=="object"&&(Y=A),s=N(!0,s,Y)}var te="";typeof S=="string"&&0<S.length&&(te=S),s.cssAnimation||(s.cssAnimationDuration=0);var ie=T.className;typeof s.className=="string"&&(ie=s.className.trim());var ee=typeof s.querySelectorLimit=="number"?s.querySelectorLimit:200,H=(D||[]).length>=ee?ee:D.length,ne="nx-block-temporary-position";if(d){for(var q,we=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],xe=0;xe<H;xe++)if(q=D[xe],q){if(-1<we.indexOf(q.tagName.toLocaleLowerCase("en")))break;var de=q.querySelectorAll("[id^="+T.ID+"]");if(1>de.length){var fe="";m&&(m===w.Hourglass?fe=rn(s.svgSize,s.svgColor):m===w.Circle?fe=et(s.svgSize,s.svgColor):m===w.Arrows?fe=on(s.svgSize,s.svgColor):m===w.Dots?fe=I(s.svgSize,s.svgColor):m===w.Pulse?fe=P(s.svgSize,s.svgColor):fe=Ze(s.svgSize,s.svgColor));var Q='<span class="'+ie+'-icon" style="width:'+s.svgSize+";height:"+s.svgSize+';">'+fe+"</span>",We="";0<te.length&&(te=te.length>s.messageMaxLength?$(te).substring(0,s.messageMaxLength)+"...":$(te),We='<span style="font-size:'+s.messageFontSize+";color:"+s.messageColor+';" class="'+ie+'-message">'+te+"</span>"),qn++;var M=e.document.createElement("div");M.id=T.ID+"-"+qn,M.className=ie+(s.cssAnimation?" nx-with-animation":""),M.style.position=s.position,M.style.zIndex=s.zindex,M.style.background=s.backgroundColor,M.style.animationDuration=s.cssAnimationDuration+"ms",M.style.fontFamily='"'+s.fontFamily+'", '+l,M.style.display="flex",M.style.flexWrap="wrap",M.style.flexDirection="column",M.style.alignItems="center",M.style.justifyContent="center",s.rtl&&(M.setAttribute("dir","rtl"),M.classList.add("nx-rtl-on")),M.innerHTML=Q+We;var ft=e.getComputedStyle(q).getPropertyValue("position"),Nt=typeof ft=="string"?ft.toLocaleLowerCase("en"):"relative",nr=Math.round(1.25*parseInt(s.svgSize))+40,Ns=q.offsetHeight||0,Xn="";nr>Ns&&(Xn="min-height:"+nr+"px;");var ir="";ir=q.getAttribute("id")?"#"+q.getAttribute("id"):q.classList[0]?"."+q.classList[0]:(q.tagName||"").toLocaleLowerCase("en");var rr="",or=-1>=["absolute","relative","fixed","sticky"].indexOf(Nt);if(or||0<Xn.length){if(!E("head"))return!1;or&&(rr="position:relative!important;");var As='<style id="Style-'+T.ID+"-"+qn+'">'+ir+"."+ne+"{"+rr+Xn+"}</style>",sr=e.document.createRange();sr.selectNode(e.document.head);var Rs=sr.createContextualFragment(As);e.document.head.appendChild(Rs),q.classList.add(ne)}q.appendChild(M)}}}else var Ps=function(se){var ge=setTimeout(function(){se.parentNode!==null&&se.parentNode.removeChild(se);var At=se.getAttribute("id"),sn=e.document.getElementById("Style-"+At);sn&&sn.parentNode!==null&&sn.parentNode.removeChild(sn),clearTimeout(ge)},s.cssAnimationDuration)},Os=function(se){if(se&&0<se.length)for(var ge,At=0;At<se.length;At++)ge=se[At],ge&&(ge.classList.add("nx-remove"),Ps(ge));else _(typeof y=="string"?'"Notiflix.Block.remove();" function called with "'+y+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+y+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},Ls=function(se){var ge=setTimeout(function(){se.classList.remove(ne),clearTimeout(ge)},s.cssAnimationDuration+300)},Ds=setTimeout(function(){for(var se,ge=0;ge<H;ge++)se=D[ge],se&&(Ls(se),de=se.querySelectorAll("[id^="+T.ID+"]"),Os(de));clearTimeout(Ds)},F);s=N(!0,s,C)},ue={Notify:{init:function(d){t=N(!0,f,d),X(B,"NotiflixNotifyInternalCSS")},merge:function(d){return t?void(t=N(!0,t,d)):(O("You have to initialize the Notify module before call Merge function."),!1)},success:function(d,m,y){G(c.Success,d,m,y)},failure:function(d,m,y){G(c.Failure,d,m,y)},warning:function(d,m,y){G(c.Warning,d,m,y)},info:function(d,m,y){G(c.Info,d,m,y)}},Report:{init:function(d){i=N(!0,x,d),X(Z,"NotiflixReportInternalCSS")},merge:function(d){return i?void(i=N(!0,i,d)):(O("You have to initialize the Report module before call Merge function."),!1)},success:function(d,m,y,S,A){oe(g.Success,d,m,y,S,A)},failure:function(d,m,y,S,A){oe(g.Failure,d,m,y,S,A)},warning:function(d,m,y,S,A){oe(g.Warning,d,m,y,S,A)},info:function(d,m,y,S,A){oe(g.Info,d,m,y,S,A)}},Confirm:{init:function(d){r=N(!0,u,d),X(Ve,"NotiflixConfirmInternalCSS")},merge:function(d){return r?void(r=N(!0,r,d)):(O("You have to initialize the Confirm module before call Merge function."),!1)},show:function(d,m,y,S,A,F,D){$n(h.Show,d,m,null,y,S,A,F,D)},ask:function(d,m,y,S,A,F,D,k){$n(h.Ask,d,m,y,S,A,F,D,k)},prompt:function(d,m,y,S,A,F,D,k){$n(h.Prompt,d,m,y,S,A,F,D,k)}},Loading:{init:function(d){o=N(!0,v,d),X(Ts,"NotiflixLoadingInternalCSS")},merge:function(d){return o?void(o=N(!0,o,d)):(O("You have to initialize the Loading module before call Merge function."),!1)},standard:function(d,m){Ne(p.Standard,d,m,!0,0)},hourglass:function(d,m){Ne(p.Hourglass,d,m,!0,0)},circle:function(d,m){Ne(p.Circle,d,m,!0,0)},arrows:function(d,m){Ne(p.Arrows,d,m,!0,0)},dots:function(d,m){Ne(p.Dots,d,m,!0,0)},pulse:function(d,m){Ne(p.Pulse,d,m,!0,0)},custom:function(d,m){Ne(p.Custom,d,m,!0,0)},notiflix:function(d,m){Ne(p.Notiflix,d,m,!0,0)},remove:function(d){typeof d!="number"&&(d=0),Ne(null,null,null,!1,d)},change:function(d){Ss(d)}},Block:{init:function(d){s=N(!0,T,d),X(Cs,"NotiflixBlockInternalCSS")},merge:function(d){return s?void(s=N(!0,s,d)):(O('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(d,m,y){tt(!0,w.Standard,d,m,y)},hourglass:function(d,m,y){tt(!0,w.Hourglass,d,m,y)},circle:function(d,m,y){tt(!0,w.Circle,d,m,y)},arrows:function(d,m,y){tt(!0,w.Arrows,d,m,y)},dots:function(d,m,y){tt(!0,w.Dots,d,m,y)},pulse:function(d,m,y){tt(!0,w.Pulse,d,m,y)},remove:function(d,m){typeof m!="number"&&(m=0),tt(!1,null,d,null,null,m)}}};return typeof e.Notiflix=="object"?N(!0,e.Notiflix,{Notify:ue.Notify,Report:ue.Report,Confirm:ue.Confirm,Loading:ue.Loading,Block:ue.Block}):{Notify:ue.Notify,Report:ue.Report,Confirm:ue.Confirm,Loading:ue.Loading,Block:ue.Block}})})(ic);const pt={categoryList:document.querySelector(".js-category-list"),books_showcase:document.querySelector(".books-showcase"),btnSeeMore:document.querySelector(".btnSeeMore")};Pi.defaults.baseURL="https://books-backend.p.goit.global/books";async function Mi(n){return Pi.get(n).then(e=>{if(e.status!==200)throw new Error(e.Error);return e.data})}function rc(){return Mi("/category-list ")}function oc(n){return n.map(({list_name:e})=>`
    <li>${e}</li>
    `).sort((e,t)=>e.localeCompare(t)).join("")}function sc(){rc().then(n=>{pt.categoryList.innerHTML=oc(n)}).catch(n=>{console.log(n)})}sc();function _o(n){return n.map(({_id:e,book_image:t,title:i,author:r})=>`
   <li data-id = '${e}' class = 'js-book-item'>
        <img src="${t}" alt="" />
        <p>${i}</p>
        <p>${r}</p>
      </li>`).join("")}function ac(n){return"<h1>Best Sellers Books</h1>"+n.map(({list_name:e,books:t})=>`
    <h2>${e}</h2> 
<div>
    <ul>`+_o(t)+`
    </ul>
    <button type="button" class="btnSeeMore">See more</button>
</div>`).join("")}function cc(){lc().then(n=>{pt.books_showcase.innerHTML=ac(n)}).catch(n=>{console.log(n)})}cc();function lc(){return Mi("/top-books")}function uc(n){dc(n).then(e=>{pt.books_showcase.innerHTML=fc(e,n)}).catch(e=>{console.log(e)})}function dc(n){return Mi(`/category?category=${n}`)}function fc(n,e){return`<h1>${e}</h1><div>
    <ul>`+_o(n)+`</ul>
</div>`}pt&&pt.categoryList&&pt.categoryList.addEventListener("click",hc);function hc(n){n.preventDefault(),uc(n.target.textContent)}var pc={exports:{}};/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */(function(n,e){(function(i,r){n.exports=r()})(window,function(){return function(t){var i={};function r(o){if(i[o])return i[o].exports;var s=i[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=t,r.c=i,r.d=function(o,s,a){r.o(o,s)||Object.defineProperty(o,s,{enumerable:!0,get:a})},r.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},r.t=function(o,s){if(s&1&&(o=r(o)),s&8||s&4&&typeof o=="object"&&o&&o.__esModule)return o;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:o}),s&2&&typeof o!="string")for(var l in o)r.d(a,l,(function(c){return o[c]}).bind(null,l));return a},r.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(s,"a",s),s},r.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},r.p="dist",r(r.s=10)}([function(t,i,r){function o(s,a){var l=Object.prototype.hasOwnProperty,c,f,g,x;for(g=1,x=arguments.length;g<x;g+=1){c=arguments[g];for(f in c)l.call(c,f)&&(s[f]=c[f])}return s}t.exports=o},function(t,i,r){function o(s){return s===void 0}t.exports=o},function(t,i,r){function o(s){return s instanceof Array}t.exports=o},function(t,i,r){var o=r(2),s=r(17),a=r(6);function l(c,f,g){o(c)?s(c,f,g):a(c,f,g)}t.exports=l},function(t,i,r){function o(s){return typeof s=="string"||s instanceof String}t.exports=o},function(t,i,r){function o(s){return s instanceof Function}t.exports=o},function(t,i,r){function o(s,a,l){var c;l=l||null;for(c in s)if(s.hasOwnProperty(c)&&a.call(l,s[c],c,s)===!1)break}t.exports=o},function(t,i,r){var o=r(18),s=r(0);function a(l,c){var f;return c||(c=l,l=null),f=c.init||function(){},l&&o(f,l),c.hasOwnProperty("static")&&(s(f,c.static),delete c.static),s(f.prototype,c),f}t.exports=a},function(t,i,r){var o=r(2);function s(a,l,c){var f,g;if(c=c||0,!o(l))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(l,a,c);for(g=l.length,f=c;c>=0&&f<g;f+=1)if(l[f]===a)return f;return-1}t.exports=s},function(t,i,r){var o=r(29),s=r(30),a=r(5),l={capitalizeFirstLetter:function(c){return c.substring(0,1).toUpperCase()+c.substring(1,c.length)},isContained:function(c,f){return f?c===f?!0:f.contains(c):!1},createElementByTemplate:function(c,f){var g=document.createElement("div"),x=a(c)?c(f):o(c,f);return g.innerHTML=x,g.firstChild},bind:function(c,f){var g=Array.prototype.slice,x;return c.bind?c.bind.apply(c,g.call(arguments,1)):(x=g.call(arguments,2),function(){return c.apply(f,x.length?x.concat(g.call(arguments)):arguments)})},sendHostName:function(){s("pagination","UA-129987462-1")}};t.exports=l},function(t,i,r){r(11),t.exports=r(12)},function(t,i,r){},function(t,i,r){var o=r(13),s=r(7),a=r(0),l=r(1),c=r(20),f=r(9),g={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},x=s({init:function(h,u){this._options=a({},g,u),this._currentPage=0,this._view=new c(h,this._options,f.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&f.sendHostName()},_setCurrentPage:function(h){this._currentPage=h||this._options.page},_getLastPage:function(){var h=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return h||1},_getPageIndex:function(h){var u,p;return this._options.centerAlign?(u=Math.floor(this._options.visiblePages/2),p=h-u,p=Math.max(p,1),p=Math.min(p,this._getLastPage()-this._options.visiblePages+1),p):Math.ceil(h/this._options.visiblePages)},_getRelativePage:function(h){var u=h==="prev",p=this.getCurrentPage();return u?p-1:p+1},_getMorePageIndex:function(h){var u=this._getPageIndex(this.getCurrentPage()),p=this._options.visiblePages,v=h==="prev",w;return this._options.centerAlign?w=v?u-1:u+p:w=v?(u-1)*p:u*p+1,w},_convertToValidPage:function(h){var u=this._getLastPage();return h=Math.max(h,1),h=Math.min(h,u),h},_paginate:function(h){var u=this._makeViewData(h||this._options.page);this._setCurrentPage(h),this._view.update(u)},_makeViewData:function(h){var u={},p=this._getLastPage(),v=this._getPageIndex(h),w=this._getPageIndex(p),T=this._getEdge(h);return u.leftPageNumber=T.left,u.rightPageNumber=T.right,u.prevMore=v>1,u.nextMore=v<w,u.page=h,u.currentPageIndex=h,u.lastPage=p,u.lastPageListIndex=p,u},_getEdge:function(h){var u,p,v,w=this._getLastPage(),T=this._options.visiblePages,O=this._getPageIndex(h);return this._options.centerAlign?(v=Math.floor(T/2),u=Math.max(h-v,1),p=u+T-1,p>w&&(u=Math.max(w-T+1,1),p=w)):(u=(O-1)*T+1,p=O*T,p=Math.min(p,w)),{left:u,right:p}},_onClickHandler:function(h,u){switch(h){case"first":u=1;break;case"prev":u=this._getRelativePage("prev");break;case"next":u=this._getRelativePage("next");break;case"prevMore":u=this._getMorePageIndex("prev");break;case"nextMore":u=this._getMorePageIndex("next");break;case"last":u=this._getLastPage();break;default:if(!u)return}this.movePageTo(u)},reset:function(h){l(h)&&(h=this._options.totalItems),this._options.totalItems=h,this._paginate(1)},movePageTo:function(h){h=this._convertToValidPage(h),this.invoke("beforeMove",{page:h})&&(this._paginate(h),this.fire("afterMove",{page:h}))},setTotalItems:function(h){this._options.totalItems=h},setItemsPerPage:function(h){this._options.itemsPerPage=h},getCurrentPage:function(){return this._currentPage||this._options.page}});o.mixin(x),t.exports=x},function(t,i,r){var o=r(0),s=r(14),a=r(4),l=r(16),c=r(2),f=r(5),g=r(3),x=/\s+/g;function h(){this.events=null,this.contexts=null}h.mixin=function(u){o(u.prototype,h.prototype)},h.prototype._getHandlerItem=function(u,p){var v={handler:u};return p&&(v.context=p),v},h.prototype._safeEvent=function(u){var p=this.events,v;return p||(p=this.events={}),u&&(v=p[u],v||(v=[],p[u]=v),p=v),p},h.prototype._safeContext=function(){var u=this.contexts;return u||(u=this.contexts=[]),u},h.prototype._indexOfContext=function(u){for(var p=this._safeContext(),v=0;p[v];){if(u===p[v][0])return v;v+=1}return-1},h.prototype._memorizeContext=function(u){var p,v;s(u)&&(p=this._safeContext(),v=this._indexOfContext(u),v>-1?p[v][1]+=1:p.push([u,1]))},h.prototype._forgetContext=function(u){var p,v;s(u)&&(p=this._safeContext(),v=this._indexOfContext(u),v>-1&&(p[v][1]-=1,p[v][1]<=0&&p.splice(v,1)))},h.prototype._bindEvent=function(u,p,v){var w=this._safeEvent(u);this._memorizeContext(v),w.push(this._getHandlerItem(p,v))},h.prototype.on=function(u,p,v){var w=this;a(u)?(u=u.split(x),g(u,function(T){w._bindEvent(T,p,v)})):l(u)&&(v=p,g(u,function(T,O){w.on(O,T,v)}))},h.prototype.once=function(u,p,v){var w=this;if(l(u)){v=p,g(u,function(O,_){w.once(_,O,v)});return}function T(){p.apply(v,arguments),w.off(u,T,v)}this.on(u,T,v)},h.prototype._spliceMatches=function(u,p){var v=0,w;if(c(u))for(w=u.length;v<w;v+=1)p(u[v])===!0&&(u.splice(v,1),w-=1,v-=1)},h.prototype._matchHandler=function(u){var p=this;return function(v){var w=u===v.handler;return w&&p._forgetContext(v.context),w}},h.prototype._matchContext=function(u){var p=this;return function(v){var w=u===v.context;return w&&p._forgetContext(v.context),w}},h.prototype._matchHandlerAndContext=function(u,p){var v=this;return function(w){var T=u===w.handler,O=p===w.context,_=T&&O;return _&&v._forgetContext(w.context),_}},h.prototype._offByEventName=function(u,p){var v=this,w=f(p),T=v._matchHandler(p);u=u.split(x),g(u,function(O){var _=v._safeEvent(O);w?v._spliceMatches(_,T):(g(_,function(E){v._forgetContext(E.context)}),v.events[O]=[])})},h.prototype._offByHandler=function(u){var p=this,v=this._matchHandler(u);g(this._safeEvent(),function(w){p._spliceMatches(w,v)})},h.prototype._offByObject=function(u,p){var v=this,w;this._indexOfContext(u)<0?g(u,function(T,O){v.off(O,T)}):a(p)?(w=this._matchContext(u),v._spliceMatches(this._safeEvent(p),w)):f(p)?(w=this._matchHandlerAndContext(p,u),g(this._safeEvent(),function(T){v._spliceMatches(T,w)})):(w=this._matchContext(u),g(this._safeEvent(),function(T){v._spliceMatches(T,w)}))},h.prototype.off=function(u,p){a(u)?this._offByEventName(u,p):arguments.length?f(u)?this._offByHandler(u):l(u)&&this._offByObject(u,p):(this.events={},this.contexts=[])},h.prototype.fire=function(u){this.invoke.apply(this,arguments)},h.prototype.invoke=function(u){var p,v,w,T;if(!this.hasListener(u))return!0;for(p=this._safeEvent(u),v=Array.prototype.slice.call(arguments,1),w=0;p[w];){if(T=p[w],T.handler.apply(T.context,v)===!1)return!1;w+=1}return!0},h.prototype.hasListener=function(u){return this.getListenerLength(u)>0},h.prototype.getListenerLength=function(u){var p=this._safeEvent(u);return p.length},t.exports=h},function(t,i,r){var o=r(1),s=r(15);function a(l){return!o(l)&&!s(l)}t.exports=a},function(t,i,r){function o(s){return s===null}t.exports=o},function(t,i,r){function o(s){return s===Object(s)}t.exports=o},function(t,i,r){function o(s,a,l){var c=0,f=s.length;for(l=l||null;c<f&&a.call(l,s[c],c,s)!==!1;c+=1);}t.exports=o},function(t,i,r){var o=r(19);function s(a,l){var c=o(l.prototype);c.constructor=a,a.prototype=c}t.exports=s},function(t,i,r){function o(s){function a(){}return a.prototype=s,new a}t.exports=o},function(t,i,r){var o=r(3),s=r(7),a=r(21),l=r(22),c=r(24),f=r(25),g=r(0),x=r(4),h=r(28),u=r(9),p={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},v=["first","prev","next","last"],w=["prev","next"],T="The container element is invalid.",O=s({init:function(_,E,X){this._containerElement=null,this._firstItemClassName=E.firstItemClassName,this._lastItemClassName=E.lastItemClassName,this._template=g({},p,E.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(_),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(X)},_setRootElement:function(_){if(x(_)?_=document.getElementById(_)||document.querySelector(_):_.jquery&&(_=_[0]),!h(_))throw new Error(T);this._containerElement=_},_setMoveButtons:function(){o(v,function(_){this._buttons[_]=u.createElementByTemplate(this._template.moveButton,{type:_})},this)},_setDisabledMoveButtons:function(){o(v,function(_){var E="disabled"+u.capitalizeFirstLetter(_);this._buttons[E]=u.createElementByTemplate(this._template.disabledMoveButton,{type:_})},this)},_setMoreButtons:function(){o(w,function(_){var E=_+"More";this._buttons[E]=u.createElementByTemplate(this._template.moreButton,{type:_})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(_){var E;_.page>1?E=this._buttons.first:E=this._buttons.disabledFirst,this._getContainerElement().appendChild(E)},_appendPrevButton:function(_){var E;_.currentPageIndex>1?E=this._buttons.prev:E=this._buttons.disabledPrev,this._getContainerElement().appendChild(E)},_appendNextButton:function(_){var E;_.currentPageIndex<_.lastPageListIndex?E=this._buttons.next:E=this._buttons.disabledNext,this._getContainerElement().appendChild(E)},_appendLastButton:function(_){var E;_.page<_.lastPage?E=this._buttons.last:E=this._buttons.disabledLast,this._getContainerElement().appendChild(E)},_appendPrevMoreButton:function(_){var E;_.prevMore&&(E=this._buttons.prevMore,f(E,this._firstItemClassName),this._getContainerElement().appendChild(E))},_appendNextMoreButton:function(_){var E;_.nextMore&&(E=this._buttons.nextMore,f(E,this._lastItemClassName),this._getContainerElement().appendChild(E))},_appendPages:function(_){var E=_.leftPageNumber,X=_.rightPageNumber,N,$;for($=E;$<=X;$+=1)$===_.page?N=u.createElementByTemplate(this._template.currentPage,{page:$}):(N=u.createElementByTemplate(this._template.page,{page:$}),this._enabledPageElements.push(N)),$===E&&!_.prevMore&&f(N,this._firstItemClassName),$===X&&!_.nextMore&&f(N,this._lastItemClassName),this._getContainerElement().appendChild(N)},_attachClickEvent:function(_){var E=this._getContainerElement();l(E,"click",function(X){var N=a(X),$,ve;c(X),ve=this._getButtonType(N),ve||($=this._getPageNumber(N)),_(ve,$)},this)},_getButtonType:function(_){var E,X=this._buttons;return o(X,function(N,$){return u.isContained(_,N)?(E=$,!1):!0},this),E},_getPageNumber:function(_){var E=this._findPageElement(_),X;return E&&(X=parseInt(E.innerText,10)),X},_findPageElement:function(_){for(var E=0,X=this._enabledPageElements.length,N;E<X;E+=1)if(N=this._enabledPageElements[E],u.isContained(_,N))return N;return null},_empty:function(){this._enabledPageElements=[],o(this._buttons,function(_,E){this._buttons[E]=_.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(_){this._empty(),this._appendFirstButton(_),this._appendPrevButton(_),this._appendPrevMoreButton(_),this._appendPages(_),this._appendNextMoreButton(_),this._appendNextButton(_),this._appendLastButton(_)}});t.exports=O},function(t,i,r){function o(s){return s.target||s.srcElement}t.exports=o},function(t,i,r){var o=r(4),s=r(3),a=r(23);function l(g,x,h,u){if(o(x)){s(x.split(/\s+/g),function(p){c(g,p,h,u)});return}s(x,function(p,v){c(g,v,p,h)})}function c(g,x,h,u){function p(v){h.call(u||g,v||window.event)}"addEventListener"in g?g.addEventListener(x,p):"attachEvent"in g&&g.attachEvent("on"+x,p),f(g,x,h,p)}function f(g,x,h,u){var p=a(g,x),v=!1;s(p,function(w){return w.handler===h?(v=!0,!1):!0}),v||p.push({handler:h,wrappedHandler:u})}t.exports=l},function(t,i,r){var o="_feEventKey";function s(a,l){var c=a[o],f;return c||(c=a[o]={}),f=c[l],f||(f=c[l]=[]),f}t.exports=s},function(t,i,r){function o(s){if(s.preventDefault){s.preventDefault();return}s.returnValue=!1}t.exports=o},function(t,i,r){var o=r(3),s=r(8),a=r(26),l=r(27);function c(f){var g=Array.prototype.slice.call(arguments,1),x=f.classList,h=[],u;if(x){o(g,function(p){f.classList.add(p)});return}u=a(f),u&&(g=[].concat(u.split(/\s+/),g)),o(g,function(p){s(p,h)<0&&h.push(p)}),l(f,h)}t.exports=c},function(t,i,r){var o=r(1);function s(a){return!a||!a.className?"":o(a.className.baseVal)?a.className:a.className.baseVal}t.exports=s},function(t,i,r){var o=r(2),s=r(1);function a(l,c){if(c=o(c)?c.join(" "):c,c=c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),s(l.className.baseVal)){l.className=c;return}l.className.baseVal=c}t.exports=a},function(t,i,r){function o(s){return typeof HTMLElement=="object"?s&&(s instanceof HTMLElement||!!s.nodeType):!!(s&&s.nodeType)}t.exports=o},function(t,i,r){var o=r(8),s=r(3),a=r(2),l=r(4),c=r(0),f=/{{\s?|\s?}}/g,g=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,x=/\[\s?|\s?\]/,h=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,u=/\./,p=/^["']\w+["']$/,v=/"|'/g,w=/^-?\d+\.?\d*$/,T=2,O={if:$,each:ve,with:Ct},_="a".split(/a/).length===3,E=function(){return _?function(I,P){return I.split(P)}:function(I,P){var L=[],B=0,V,G;for(P.global||(P=new RegExp(P,"g")),V=P.exec(I);V!==null;)G=V.index,L.push(I.slice(B,G)),B=G+V[0].length,V=P.exec(I);return L.push(I.slice(B)),L}}();function X(I,P){var L,B=P[I];return I==="true"?B=!0:I==="false"?B=!1:p.test(I)?B=I.replace(v,""):g.test(I)?(L=I.split(x),B=X(L[0],P)[X(L[1],P)]):h.test(I)?(L=I.split(u),B=X(L[0],P)[L[1]]):w.test(I)&&(B=parseFloat(I)),B}function N(I,P){var L=[I],B=[],V=0,G=0;return s(P,function(Z,oe){Z.indexOf("if")===0?V+=1:Z==="/if"?V-=1:!V&&(Z.indexOf("elseif")===0||Z==="else")&&(L.push(Z==="else"?["true"]:Z.split(" ").slice(1)),B.push(P.slice(G,oe)),G=oe+1)}),B.push(P.slice(G)),{exps:L,sourcesInsideIf:B}}function $(I,P,L){var B=N(I,P),V=!1,G="";return s(B.exps,function(Z,oe){return V=Ze(Z,L),V&&(G=et(B.sourcesInsideIf[oe],L)),!V}),G}function ve(I,P,L){var B=Ze(I,L),V=a(B)?"@index":"@key",G={},Z="";return s(B,function(oe,Ve){G[V]=Ve,G["@this"]=oe,c(L,G),Z+=et(P.slice(),L)}),Z}function Ct(I,P,L){var B=o("as",I),V=I[B+1],G=Ze(I.slice(0,B),L),Z={};return Z[V]=G,et(P,c(L,Z))||""}function Hn(I,P,L){var B=I.splice(P+1,L-P);return B.pop(),B}function jn(I,P,L){for(var B=O[I],V=1,G=0,Z,oe=G+T,Ve=P[oe];V&&l(Ve);)Ve.indexOf(I)===0?V+=1:Ve.indexOf("/"+I)===0&&(V-=1,Z=oe),oe+=T,Ve=P[oe];if(V)throw Error(I+" needs {{/"+I+"}} expression.");return P[G]=B(P[G].split(" ").slice(1),Hn(P,G,Z),L),P}function Ze(I,P){var L=X(I[0],P);return L instanceof Function?rn(L,I.slice(1),P):L}function rn(I,P,L){var B=[];return s(P,function(V){B.push(X(V,L))}),I.apply(null,B)}function et(I,P){for(var L=1,B=I[L],V,G,Z;l(B);)V=B.split(" "),G=V[0],O[G]?(Z=jn(G,I.splice(L,I.length-L),P),I=I.concat(Z)):I[L]=Ze(V,P),L+=T,B=I[L];return I.join("")}function on(I,P){return et(E(I,f),P)}t.exports=on},function(t,i,r){var o=r(1),s=r(31),a=7*24*60*60*1e3;function l(f){var g=new Date().getTime();return g-f>a}function c(f,g){var x="https://www.google-analytics.com/collect",h=location.hostname,u="event",p="use",v="TOAST UI "+f+" for "+h+": Statistics",w=window.localStorage.getItem(v);!o(window.tui)&&window.tui.usageStatistics===!1||w&&!l(w)||(window.localStorage.setItem(v,new Date().getTime()),setTimeout(function(){(document.readyState==="interactive"||document.readyState==="complete")&&s(x,{v:1,t:u,tid:g,cid:h,dp:h,dh:f,el:f,ec:p})},1e3))}t.exports=c},function(t,i,r){var o=r(6);function s(a,l){var c=document.createElement("img"),f="";return o(l,function(g,x){f+="&"+x+"="+g}),f=f.substring(1),c.src=a+"?"+f,c.style.display="none",document.body.appendChild(c),document.body.removeChild(c),c}t.exports=s}])})})(pc);const yr=document.querySelector(".shopping-list"),mc=document.querySelector(".shopping-title"),cn=document.querySelector(".empty-shopping-list-wrap");let mn=JSON.parse(localStorage.getItem("KEY"))??[];ko();function ko(){(JSON.parse(localStorage.getItem("KEY"))??[]).length?(cn&&(cn.style.display="none"),mc.classList.replace("empty-title-margin","full-title-margin")):cn&&(cn.style.display="block")}yr&&yr.insertAdjacentHTML("beforeend",gc(mn));function gc(n){return n.map(({_id:e,book_image:t,title:i,list_name:r,author:o,description:s,buy_links:[a,l,c]})=>`
  <li class="shopping-list-item" data-id=${e} >
  <img
    src="${t}"
    alt="book's image"
    class="shopping-card-img"
  />
  <div class="right-part-wrap">
    <div class="shopping-card-bin-wrap">
     <div>
        <h4 class="shopping-card-tittle">${i}</h4>

        <p class="shopping-card-genre">${r}</p>
     </div>
     <button type="button" class="shopping-card-bin-link">
          <svg class="img-bin-icon">
            <use href="../img/spryte.svg#icon-trash"></use>
          </svg>
      </button>
    </div>

    <p class="shopping-card-description">${s}
    </p>
    <div class="botton-wrap">
        <p class="shopping-card-author">${o}</p>


              <ul class="markets-list-shopping">
              <li>
                <a href="${a.url}">
                  <img src="../../img/amazon.png" alt="${r}" class="icon-amazon">
                </a>
              </li>
              <li>
                <a href="${l.url}">
                  <img src="../../img/book-market.png" alt="${r}" class="icon-apple-book">
                </a>
              </li>
              <li>
                <a href="${c.url}">
                <img src="/img/book-shelf.png" alt="${r}" class="icon-book-shop">
                </a>
    </div>
  </div>
</li> `).join(" ")}const yc=document.querySelectorAll(".shopping-card-bin-link");yc.forEach(function(n){n.addEventListener("click",bc)});function bc(n){const{id:e}=n.target.closest(".shopping-list-item").dataset,t=mn.findIndex(r=>r._id===e);mn.splice(t,1),localStorage.setItem("KEY",JSON.stringify(mn)),n.target.closest(".shopping-list-item").remove(),ko()}let Eo=document.getElementById("switchMode"),xn=document.querySelector(".logo");xn.innerHTML=`<svg class="logo">
        <use href="./img/spryte.svg#icon-logo-light" height="28px"></use>
      </svg>`;localStorage.getItem("theme")=="true"&&(theme.setAttribute("href","./css/dark-mode.css"),Eo.checked=!0,xn.innerHTML=`<svg class="logo">
        <use href="./img/spryte.svg#icon-logo-dark" height="28px"></use>
      </svg>`);Eo.onchange=function(){let n=document.getElementById("theme");this.checked?(localStorage.setItem("theme",!0),n.setAttribute("href","./css/dark-mode.css"),xn.innerHTML=`<svg class="logo">
        <use href="/img/spryte.svg#icon-logo-dark" height="28px"></use>
      </svg>`):(localStorage.setItem("theme",!1),n.setAttribute("href","./css/light-mode.css"),xn.innerHTML=`<svg class="logo">
        <use href="/img/spryte.svg#icon-logo-light" height="28px"></use>
      </svg>`)};let vc=document.querySelector(".menu-btn"),wc=document.querySelector(".tupe-out");vc.addEventListener("click",xc);function xc(){wc.classList.toggle("tupe-out_active")}const Dt=Oi.create(`<div class="modal">
    <button type="button" class="modal-close-btn">
      <svg class="icon-close" width="28" height="28">
        <use href="img/spryte.svg#icon-close"></use>
      </svg>
    </button>

    <div class="form-wraper">
      <form class="form" id="signUpForm" autocomplete="off">
        <div class="form-field">
          <input
            id="name"
            class="form-input"
            type="text"
            name="name"
            minlength="2"
            required
            autofocus
            placeholder=" "
            title="Djon Smit"
          />

          <label for="name" class="form-label">Name* </label>
        </div>

        <div class="form-field">
          <input
            id="email"
            class="form-input"
            type="email"
            name="email"
            required
            placeholder=" "
          />

          <label for="email" class="form-label">Email* </label>
          <svg class="icon" width="28" height="28">
            <use href="img/spryte.svg#icon-mail"></use>
          </svg>

        </div>
        <div class="form-field">
          <input
            id="password"
            class="form-input"
            type="password"
            name="password"
            required
            placeholder=" "
            minlength="6"
          />

          <label for="password" class="form-label">Password* </label>
          <svg class="icon" width="28" height="28">
            <use href="img/spryte.svg#icon-lock"></use>
          </svg>

        </div>

        <button class="form-button sign-up-btn" type="button">Sign up</button>
      </form>
      <div class="wraper-min-btn">
        <button class="sign-min-btn active" type="button" data-sign-up>sign up</button>
        <button class="sign-min-btn" type="button" data-sign-in>sign in</button>
      </div>
       <button class="sign-min-btn sign-google-btn" type="button" data-g-sign-in>
            <svg class="icon-google"" width="28" height="28">
                <use href="img/spryte.svg#icon-google"></use>
            </svg>
        Sign in with Google
       </button>
    </div>
  </div>
`,{onShow:()=>document.addEventListener("keydown",_n),onClose:()=>document.removeEventListener("keydown",_n)}),mt=Oi.create(`<div class="modal">
    <button type="button" class="modal-close-btn">
      <svg class="icon-close" width="28" height="28">
        <use href="img/spryte.svg#icon-close"></use>
      </svg>
    </button>

    <div class="form-wraper">
      <form class="form" id="signInForm" autocomplete="off">

        <div class="form-field">
          <input
            id="email"
            class="form-input"
            type="email"
            name="email"
            required
            placeholder=" "
          />

          <label for="email" class="form-label">Email* </label>
          <svg class="icon" width="28" height="28">
            <use href="img/spryte.svg#icon-mail"></use>
          </svg>

        </div>
        <div class="form-field">
          <input
            id="password"
            class="form-input"
            type="password"
            name="password"
            required
            placeholder=" "
            minlength="6"
          />

          <label for="password" class="form-label">Password* </label>
          <svg class="icon" width="28" height="28">
            <use href="img/spryte.svg#icon-lock"></use>
          </svg>

        </div>

        <button class="form-button sign-in-btn" type="button">Sign in</button>
      </form>
      <div class="wraper-min-btn">
        <button class="sign-min-btn" type="button" data-sign-up>sign up</button>
        <button class="sign-min-btn active" type="button" data-sign-in>sign in</button>
      </div>
      <button class="sign-min-btn sign-google-btn" type="button" data-g-sign-in>
            <svg class="icon-google" width="28" height="28">
                <use href="img/spryte.svg#icon-google"></use>
            </svg>
         Sign in with Google
       </button>

    </div>
  </div>
`,{onShow:()=>document.addEventListener("keydown",_n),onClose:()=>document.removeEventListener("keydown",_n)});function _n(n){const e="Escape";n.code===e&&(Dt.close(),mt.close())}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},_c=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=n[t++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=n[t++],s=n[t++],a=n[t++],l=((r&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const o=n[t++],s=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|s&63)}}return e.join("")},To={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const o=n[r],s=r+1<n.length,a=s?n[r+1]:0,l=r+2<n.length,c=l?n[r+2]:0,f=o>>2,g=(o&3)<<4|a>>4;let x=(a&15)<<2|c>>6,h=c&63;l||(h=64,s||(x=64)),i.push(t[f],t[g],t[x],t[h])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Io(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_c(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const o=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const c=r<n.length?t[n.charAt(r)]:64;++r;const g=r<n.length?t[n.charAt(r)]:64;if(++r,o==null||a==null||c==null||g==null)throw new kc;const x=o<<2|a>>4;if(i.push(x),c!==64){const h=a<<4&240|c>>2;if(i.push(h),g!==64){const u=c<<6&192|g;i.push(u)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class kc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ec=function(n){const e=Io(n);return To.encodeByteArray(e,!0)},kn=function(n){return Ec(n).replace(/\./g,"")},So=function(n){try{return To.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=()=>Ic().__FIREBASE_DEFAULTS__,Sc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Cc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&So(n[1]);return e&&JSON.parse(e)},Bi=()=>{try{return Tc()||Sc()||Cc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Co=n=>{var e,t;return(t=(e=Bi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Nc=n=>{const e=Co(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},No=()=>{var n;return(n=Bi())===null||n===void 0?void 0:n.config},Ao=n=>{var e;return(e=Bi())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[kn(JSON.stringify(t)),kn(JSON.stringify(s)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function Oc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Lc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dc(){const n=le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Mc(){try{return typeof indexedDB=="object"}catch{return!1}}function Bc(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="FirebaseError";class Ue extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Fc,Object.setPrototypeOf(this,Ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yt.prototype.create)}}class Yt{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],s=o?zc(o,i):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new Ue(r,a,i)}}function zc(n,e){return n.replace(Uc,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Uc=/\{\$([^}]+)}/g;function Vc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function En(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const o=n[r],s=e[r];if(br(o)&&br(s)){if(!En(o,s))return!1}else if(o!==s)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function br(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Pt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,o]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(o)}}),e}function Ot(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Wc(n,e){const t=new Hc(n,e);return t.subscribe.bind(t)}class Hc{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");jc(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=ei),r.error===void 0&&(r.error=ei),r.complete===void 0&&(r.complete=ei);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jc(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ei(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n){return n&&n._delegate?n._delegate:n}class ot{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Ac;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xc(e))try{this.getOrInitializeService({instanceIdentifier:nt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(e=nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nt){return this.instances.has(e)}getOptions(e=nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);i===a&&s.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);const s=this.instances.get(r);return s&&e(s,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:qc(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=nt){return this.component?this.component.multipleInstances?e:nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qc(n){return n===nt?void 0:n}function Xc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $c(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Kc={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Jc=K.INFO,Yc={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Qc=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=Yc[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fi{constructor(e){this.name=e,this._logLevel=Jc,this._logHandler=Qc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const Zc=(n,e)=>e.some(t=>n instanceof t);let vr,wr;function el(){return vr||(vr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tl(){return wr||(wr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ro=new WeakMap,mi=new WeakMap,Po=new WeakMap,ti=new WeakMap,zi=new WeakMap;function nl(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",s)},o=()=>{t(Ke(n.result)),r()},s=()=>{i(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",s)});return e.then(t=>{t instanceof IDBCursor&&Ro.set(t,n)}).catch(()=>{}),zi.set(e,n),e}function il(n){if(mi.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",s),n.removeEventListener("abort",s)},o=()=>{t(),r()},s=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",s),n.addEventListener("abort",s)});mi.set(n,e)}let gi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return mi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Po.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ke(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function rl(n){gi=n(gi)}function ol(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ni(this),e,...t);return Po.set(i,e.sort?e.sort():[e]),Ke(i)}:tl().includes(n)?function(...e){return n.apply(ni(this),e),Ke(Ro.get(this))}:function(...e){return Ke(n.apply(ni(this),e))}}function sl(n){return typeof n=="function"?ol(n):(n instanceof IDBTransaction&&il(n),Zc(n,el())?new Proxy(n,gi):n)}function Ke(n){if(n instanceof IDBRequest)return nl(n);if(ti.has(n))return ti.get(n);const e=sl(n);return e!==n&&(ti.set(n,e),zi.set(e,n)),e}const ni=n=>zi.get(n);function al(n,e,{blocked:t,upgrade:i,blocking:r,terminated:o}={}){const s=indexedDB.open(n,e),a=Ke(s);return i&&s.addEventListener("upgradeneeded",l=>{i(Ke(s.result),l.oldVersion,l.newVersion,Ke(s.transaction),l)}),t&&s.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const cl=["get","getKey","getAll","getAllKeys","count"],ll=["put","add","delete","clear"],ii=new Map;function xr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ii.get(e))return ii.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=ll.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||cl.includes(t)))return;const o=async function(s,...a){const l=this.transaction(s,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),r&&l.done]))[0]};return ii.set(e,o),o}rl(n=>({...n,get:(e,t,i)=>xr(e,t)||n.get(e,t,i),has:(e,t)=>!!xr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dl(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function dl(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yi="@firebase/app",_r="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new Fi("@firebase/app"),fl="@firebase/app-compat",hl="@firebase/analytics-compat",pl="@firebase/analytics",ml="@firebase/app-check-compat",gl="@firebase/app-check",yl="@firebase/auth",bl="@firebase/auth-compat",vl="@firebase/database",wl="@firebase/database-compat",xl="@firebase/functions",_l="@firebase/functions-compat",kl="@firebase/installations",El="@firebase/installations-compat",Il="@firebase/messaging",Tl="@firebase/messaging-compat",Sl="@firebase/performance",Cl="@firebase/performance-compat",Nl="@firebase/remote-config",Al="@firebase/remote-config-compat",Rl="@firebase/storage",Pl="@firebase/storage-compat",Ol="@firebase/firestore",Ll="@firebase/firestore-compat",Dl="firebase",Ml="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="[DEFAULT]",Bl={[yi]:"fire-core",[fl]:"fire-core-compat",[pl]:"fire-analytics",[hl]:"fire-analytics-compat",[gl]:"fire-app-check",[ml]:"fire-app-check-compat",[yl]:"fire-auth",[bl]:"fire-auth-compat",[vl]:"fire-rtdb",[wl]:"fire-rtdb-compat",[xl]:"fire-fn",[_l]:"fire-fn-compat",[kl]:"fire-iid",[El]:"fire-iid-compat",[Il]:"fire-fcm",[Tl]:"fire-fcm-compat",[Sl]:"fire-perf",[Cl]:"fire-perf-compat",[Nl]:"fire-rc",[Al]:"fire-rc-compat",[Rl]:"fire-gcs",[Pl]:"fire-gcs-compat",[Ol]:"fire-fst",[Ll]:"fire-fst-compat","fire-js":"fire-js",[Dl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new Map,vi=new Map;function Fl(n,e){try{n.container.addComponent(e)}catch(t){st.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vt(n){const e=n.name;if(vi.has(e))return st.debug(`There were multiple attempts to register component ${e}.`),!1;vi.set(e,n);for(const t of In.values())Fl(t,n);return!0}function Ui(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Je=new Yt("app","Firebase",zl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Je.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=Ml;function Oo(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:bi,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Je.create("bad-app-name",{appName:String(r)});if(t||(t=No()),!t)throw Je.create("no-options");const o=In.get(r);if(o){if(En(t,o.options)&&En(i,o.config))return o;throw Je.create("duplicate-app",{appName:r})}const s=new Gc(r);for(const l of vi.values())s.addComponent(l);const a=new Ul(t,i,s);return In.set(r,a),a}function Lo(n=bi){const e=In.get(n);if(!e&&n===bi&&No())return Oo();if(!e)throw Je.create("no-app",{appName:n});return e}function Ye(n,e,t){var i;let r=(i=Bl[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const o=r.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${r}" with version "${e}":`];o&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),st.warn(a.join(" "));return}vt(new ot(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="firebase-heartbeat-database",Wl=1,Vt="firebase-heartbeat-store";let ri=null;function Do(){return ri||(ri=al(Vl,Wl,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Vt)}}}).catch(n=>{throw Je.create("idb-open",{originalErrorMessage:n.message})})),ri}async function Hl(n){try{return await(await Do()).transaction(Vt).objectStore(Vt).get(Mo(n))}catch(e){if(e instanceof Ue)st.warn(e.message);else{const t=Je.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});st.warn(t.message)}}}async function kr(n,e){try{const i=(await Do()).transaction(Vt,"readwrite");await i.objectStore(Vt).put(e,Mo(n)),await i.done}catch(t){if(t instanceof Ue)st.warn(t.message);else{const i=Je.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});st.warn(i.message)}}}function Mo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=1024,$l=30*24*60*60*1e3;class ql{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Gl(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Er();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=$l}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Er(),{heartbeatsToSend:t,unsentEntries:i}=Xl(this._heartbeatsCache.heartbeats),r=kn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Er(){return new Date().toISOString().substring(0,10)}function Xl(n,e=jl){const t=[];let i=n.slice();for(const r of n){const o=t.find(s=>s.agent===r.agent);if(o){if(o.dates.push(r.date),Ir(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Ir(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Gl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mc()?Bc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Hl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return kr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return kr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ir(n){return kn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(n){vt(new ot("platform-logger",e=>new ul(e),"PRIVATE")),vt(new ot("heartbeat",e=>new ql(e),"PRIVATE")),Ye(yi,_r,n),Ye(yi,_r,"esm2017"),Ye("fire-js","")}Kl("");var Jl="firebase",Yl="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye(Jl,Yl,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}he.UNAUTHENTICATED=new he(null),he.GOOGLE_CREDENTIALS=new he("google-credentials-uid"),he.FIRST_PARTY=new he("first-party-uid"),he.MOCK_USER=new he("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let It="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new Fi("@firebase/firestore");function Tn(n,...e){if(wt.logLevel<=K.DEBUG){const t=e.map(Wi);wt.debug(`Firestore (${It}): ${n}`,...t)}}function Vi(n,...e){if(wt.logLevel<=K.ERROR){const t=e.map(Wi);wt.error(`Firestore (${It}): ${n}`,...t)}}function Bo(n,...e){if(wt.logLevel<=K.WARN){const t=e.map(Wi);wt.warn(`Firestore (${It}): ${n}`,...t)}}function Wi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n="Unexpected state"){const e=`FIRESTORE (${It}) INTERNAL ASSERTION FAILED: `+n;throw Vi(e),new Error(e)}function me(n,e){n||Qe()}function Ql(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="ok",Zl="cancelled",Mt="unknown",J="invalid-argument",eu="deadline-exceeded",tu="not-found",nu="permission-denied",wi="unauthenticated",iu="resource-exhausted",xt="failed-precondition",ru="aborted",ou="out-of-range",su="unimplemented",au="internal",cu="unavailable";class z extends Ue{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(he.UNAUTHENTICATED))}shutdown(){}}class uu{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class du{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(me(typeof e.accessToken=="string"),new Fo(e.accessToken,new he(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class fu{constructor(e,t,i){this.t=e,this.i=t,this.o=i,this.type="FirstParty",this.user=he.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class hu{constructor(e,t,i){this.t=e,this.i=t,this.o=i}getToken(){return Promise.resolve(new fu(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(he.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mu{constructor(e){this.h=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(me(typeof e.token=="string"),new pu(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,t,i,r,o,s,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=r,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Wt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Wt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wt&&e.projectId===this.projectId&&e.database===this.database}}class Ht{constructor(e,t,i){t===void 0?t=0:t>e.length&&Qe(),i===void 0?i=e.length-t:i>e.length-t&&Qe(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Ht.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ht?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let r=0;r<i;r++){const o=e.get(r),s=t.get(r);if(o<s)return-1;if(o>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ce extends Ht{construct(e,t,i){return new ce(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new z(J,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(r=>r.length>0))}return new ce(t)}static emptyPath(){return new ce([])}}const yu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Ht{construct(e,t,i){return new $e(e,t,i)}static isValidIdentifier(e){return yu.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const t=[];let i="",r=0;const o=()=>{if(i.length===0)throw new z(J,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let s=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new z(J,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(J,"Path has invalid escape sequence: "+e);i+=l,r+=2}else a==="`"?(s=!s,r++):a!=="."||s?(i+=a,r++):(o(),r++)}if(o(),s)throw new z(J,"Unterminated ` in path: "+e);return new $e(t)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.path=e}static fromPath(e){return new ke(ce.fromString(e))}static fromName(e){return new ke(ce.fromString(e).popFirst(5))}static empty(){return new ke(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ke(new ce(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(n,e,t){if(!t)throw new z(J,`Function ${n}() cannot be called with an empty ${e}.`)}function Sr(n){if(!ke.isDocumentKey(n))throw new z(J,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function vu(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Qe()}function zo(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new z(J,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=vu(n);throw new z(J,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln=null;function wu(){return ln===null?ln=function(){return 268435456+Math.round(2147483648*Math.random())}():ln++,"0x"+ln.toString(16)}function Cr(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nr,U;function Ar(n){if(n===void 0)return Vi("RPC_ERROR","HTTP error has no status"),Mt;switch(n){case 200:return Tr;case 400:return xt;case 401:return wi;case 403:return nu;case 404:return tu;case 409:return ru;case 416:return ou;case 429:return iu;case 499:return Zl;case 500:return Mt;case 501:return su;case 503:return cu;case 504:return eu;default:return n>=200&&n<300?Tr:n>=400&&n<500?xt:n>=500&&n<600?au:Mt}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(U=Nr||(Nr={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";class _u extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.m=i+"://"+t.host,this.A=`projects/${r}/databases/${o}`,this.T=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${o}`}get P(){return!1}R(t,i,r,o,s){const a=wu(),l=this.I(t,i);Tn("RestConnection",`Sending RPC '${t}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(c,o,s),this.p(t,l,c,r).then(f=>(Tn("RestConnection",`Received RPC '${t}' ${a}: `,f),f),f=>{throw Bo("RestConnection",`RPC '${t}' ${a} failed with error: `,f,"url: ",l,"request:",r),f})}g(t,i,r,o,s,a){return this.R(t,i,r,o,s)}V(t,i,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+It}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,s)=>t[s]=o),r&&r.headers.forEach((o,s)=>t[s]=o)}I(t,i){const r=xu[t];return`${this.m}/v1/${i}:${r}`}}{constructor(e,t){super(e),this.F=t}v(e,t){throw new Error("Not supported by FetchConnection")}async p(e,t,i,r){var o;const s=JSON.stringify(r);let a;try{a=await this.F(t,{method:"POST",headers:i,body:s})}catch(l){const c=l;throw new z(Ar(c.status),"Request failed with error: "+c.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const c=(o=l==null?void 0:l.error)===null||o===void 0?void 0:o.message;throw new z(Ar(a.status),`Request failed with error: ${c??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{static C(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=ku(40);for(let o=0;o<r.length;++o)i.length<20&&r[o]<t&&(i+=e.charAt(r[o]%e.length))}return i}}function jt(n,e){return n<e?-1:n>e?1:0}function Iu(n,e,t){return n.length===e.length&&n.every((i,r)=>t(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Hi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Tu("Invalid base64 string: "+o):o}}(e);return new Fe(t)}static fromUint8Array(e){const t=function(r){let o="";for(let s=0;s<r.length;++s)o+=String.fromCharCode(r[s]);return o}(e);return new Fe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return jt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const Su=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(n){if(me(!!n),typeof n=="string"){let e=0;const t=Su.exec(n);if(me(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:pe(n.seconds),nanos:pe(n.nanos)}}function pe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xi(n){return typeof n=="string"?Fe.fromBase64String(n):Fe.fromUint8Array(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(J,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(J,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new z(J,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(J,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new Me(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?jt(this.nanoseconds,e.nanoseconds):jt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Wo(n){const e=n.mapValue.fields.__previous_value__;return Vo(e)?Wo(e):e}function _i(n){const e=$t(n.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}function ki(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Vo(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:Qe()}function Ei(n,e){if(n===e)return!0;const t=ki(n);if(t!==ki(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return _i(n).isEqual(_i(e));case 3:return function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const s=$t(r.timestampValue),a=$t(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,o){return xi(r.bytesValue).isEqual(xi(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,o){return pe(r.geoPointValue.latitude)===pe(o.geoPointValue.latitude)&&pe(r.geoPointValue.longitude)===pe(o.geoPointValue.longitude)}(n,e);case 2:return function(r,o){if("integerValue"in r&&"integerValue"in o)return pe(r.integerValue)===pe(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){const s=pe(r.doubleValue),a=pe(o.doubleValue);return s===a?Cr(s)===Cr(a):isNaN(s)&&isNaN(a)}return!1}(n,e);case 9:return Iu(n.arrayValue.values||[],e.arrayValue.values||[],Ei);case 10:return function(r,o){const s=r.mapValue.fields||{},a=o.mapValue.fields||{};if(Rr(s)!==Rr(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!Ei(s[l],a[l])))return!1;return!0}(n,e);default:return Qe()}}function oi(n){return!!n&&"mapValue"in n}function Bt(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Hi(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Bt(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Bt(n.arrayValue.values[t]);return e}return Object.assign({},n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Me(0,0))}static max(){return new ae(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.value=e}static empty(){return new Pe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!oi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bt(t)}setAll(e){let t=$e.emptyPath(),i={},r=[];e.forEach((s,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,i,r),i={},r=[],t=a.popLast()}s?i[a.lastSegment()]=Bt(s):r.push(a.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,i,r)}delete(e){const t=this.field(e.popLast());oi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ei(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=t.mapValue.fields[e.get(i)];oi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,i){Hi(t,(r,o)=>e[r]=o);for(const r of i)delete e[r]}clone(){return new Pe(Bt(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t,i,r,o,s,a){this.key=e,this.documentType=t,this.version=i,this.readTime=r,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Ae(e,0,ae.min(),ae.min(),ae.min(),Pe.empty(),0)}static newFoundDocument(e,t,i,r){return new Ae(e,1,t,ae.min(),i,r,0)}static newNoDocument(e,t){return new Ae(e,2,t,ae.min(),ae.min(),Pe.empty(),0)}static newUnknownDocument(e,t){return new Ae(e,3,t,ae.min(),ae.min(),Pe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t=null,i=[],r=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.q=null,this.B=null,this.startAt,this.endAt}}class Nu{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function si(n){return me(!!n),ae.fromTimestamp(function(t){const i=$t(t);return new Me(i.seconds,i.nanos)}(n))}function Au(n,e){return function(i){return new ce(["projects",i.projectId,"databases",i.database])}(n).child("documents").child(e).canonicalString()}function Ru(n,e){return Au(n.databaseId,e.path)}function Pr(n,e){const t=function(r){const o=ce.fromString(r);return me(Ho(o)),o}(e);if(t.get(1)!==n.databaseId.projectId)throw new z(J,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new z(J,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ke(function(r){return me(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}(t))}function Pu(n){return new ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ou(n,e){return"found"in e?function(i,r){me(!!r.found),r.found.name,r.found.updateTime;const o=Pr(i,r.found.name),s=si(r.found.updateTime),a=r.found.createTime?si(r.found.createTime):ae.min(),l=new Pe({mapValue:{fields:r.found.fields}});return Ae.newFoundDocument(o,s,a,l)}(n,e):"missing"in e?function(i,r){me(!!r.missing),me(!!r.readTime);const o=Pr(i,r.missing),s=si(r.readTime);return Ae.newNoDocument(o,s)}(n,e):Qe()}function Ho(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(n){return new Nu(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends class{}{constructor(e,t,i,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=r,this.Z=!1}X(){if(this.Z)throw new z(xt,"The client has already been terminated.")}R(e,t,i){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.R(e,t,i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===wi&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(Mt,r.toString())})}g(e,t,i,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.g(e,t,i,o,s,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===wi&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(Mt,o.toString())})}terminate(){this.Z=!0}}async function Mu(n,e){const t=Ql(n),i=Pu(t.serializer)+"/documents",r={documents:e.map(l=>Ru(t.serializer,l))},o=await t.g("BatchGetDocuments",i,r,e.length),s=new Map;o.forEach(l=>{const c=Ou(t.serializer,l);s.set(c.key.toString(),c)});const a=[];return e.forEach(l=>{const c=s.get(l.toString());me(!!c),a.push(c)}),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new Map;function Bu(n){if(n._terminated)throw new z(xt,"The client has already been terminated.");if(!Ft.has(n)){Tn("ComponentProvider","Initializing Datastore");const e=function(o){return new _u(o,fetch.bind(null))}(function(o,s,a,l){return new gu(o,s,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Uo(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),t=Lu(n._databaseId),i=function(o,s,a,l){return new Du(o,s,a,l)}(n._authCredentials,n._appCheckCredentials,e,t);Ft.set(n,i)}return Ft.get(n)}class Or{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new z(J,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(J,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(o,s,a,l){if(s===!0&&l===!0)throw new z(J,`${o} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uo((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new z(J,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new z(J,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new z(J,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ji{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Or({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(xt,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(xt,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Or(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new lu;switch(i.type){case"firstParty":return new hu(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new z(J,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Ft.get(t);i&&(Tn("ComponentProvider","Removing Datastore"),Ft.delete(t),i.terminate())}(this),Promise.resolve()}}function Fu(n,e){const t=typeof n=="object"?n:Lo(),i=typeof n=="string"?n:e||"(default)",r=Ui(t,"firestore/lite").getImmediate({identifier:i});if(!r._initialized){const o=Nc("firestore");o&&zu(r,...o)}return r}function zu(n,e,t,i={}){var r;const o=(n=zo(n,ji))._getSettings(),s=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Bo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=he.MOCK_USER;else{a=Rc(i.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new z(J,"mockUserToken must contain 'sub' or 'user_id' field!");l=new he(c)}n._authCredentials=new uu(new Fo(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new $i(this.firestore,e,this._query)}}class Be{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}}class qt extends $i{constructor(e,t,i){super(e,t,function(o){return new Cu(o)}(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new ke(e))}withConverter(e){return new qt(this.firestore,e,this._path)}}function Uu(n,e,...t){if(n=Ee(n),arguments.length===1&&(e=Eu.C()),bu("doc","path",e),n instanceof ji){const i=ce.fromString(e,...t);return Sr(i),new Be(n,null,new ke(i))}{if(!(n instanceof Be||n instanceof qt))throw new z(J,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ce.fromString(e,...t));return Sr(i),new Be(n.firestore,n instanceof qt?n.converter:null,new ke(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(Fe.fromBase64String(e))}catch(t){throw new z(J,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Sn(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(J,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(J,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(J,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return jt(this._lat,e._lat)||jt(this._long,e._long)}}const Wu=new RegExp("[~\\*/\\[\\]]");function Hu(n,e,t){if(e.search(Wu)>=0)throw Lr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new jo(...e.split("."))._internalPath}catch{throw Lr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Lr(n,e,t,i,r){const o=i&&!i.isEmpty(),s=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${i}`),s&&(l+=` in document ${r}`),l+=")"),new z(J,a+n+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,t,i,r,o){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ju(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($u("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ju extends $o{data(){return super.data()}}function $u(n,e){return typeof e=="string"?Hu(n,e):e instanceof jo?e._internalPath:e._delegate._internalPath}class qu extends class{convertValue(t,i="none"){switch(ki(t)){case 0:return null;case 1:return t.booleanValue;case 2:return pe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,i);case 5:return t.stringValue;case 6:return this.convertBytes(xi(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,i);case 10:return this.convertObject(t.mapValue,i);default:throw Qe()}}convertObject(t,i){return this.convertObjectMap(t.fields,i)}convertObjectMap(t,i="none"){const r={};return Hi(t,(o,s)=>{r[o]=this.convertValue(s,i)}),r}convertGeoPoint(t){return new Vu(pe(t.latitude),pe(t.longitude))}convertArray(t,i){return(t.values||[]).map(r=>this.convertValue(r,i))}convertServerTimestamp(t,i){switch(i){case"previous":const r=Wo(t);return r==null?null:this.convertValue(r,i);case"estimate":return this.convertTimestamp(_i(t));default:return null}}convertTimestamp(t){const i=$t(t);return new Me(i.seconds,i.nanos)}convertDocumentKey(t,i){const r=ce.fromString(t);me(Ho(r));const o=new Wt(r.get(1),r.get(3)),s=new ke(r.popFirst(5));return o.isEqual(i)||Vi(`Document ${s} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),s}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,t)}}function Xu(n){const e=Bu((n=zo(n,Be)).firestore),t=new qu(n.firestore);return Mu(e,[n._key]).then(i=>{me(i.length===1);const r=i[0];return new $o(n.firestore,t,n._key,r.isFoundDocument()?r:null,n.converter)})}(function(){(function(t){It=t})(`${Et}_lite`),vt(new ot("firestore/lite",(e,{instanceIdentifier:t,options:i})=>{const r=e.getProvider("app").getImmediate(),o=new ji(new du(e.getProvider("auth-internal")),new mu(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new z(J,'"projectId" not provided in firebase.initializeApp.');return new Wt(a.options.projectId,l)}(r,t),r);return i&&o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ye("firestore-lite","4.1.0",""),Ye("firestore-lite","4.1.0","esm2017")})();function qi(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function qo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gu=qo,Xo=new Yt("auth","Firebase",qo());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Fi("@firebase/auth");function Ku(n,...e){Cn.logLevel<=K.WARN&&Cn.warn(`Auth (${Et}): ${n}`,...e)}function gn(n,...e){Cn.logLevel<=K.ERROR&&Cn.error(`Auth (${Et}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(n,...e){throw Xi(n,...e)}function Te(n,...e){return Xi(n,...e)}function Go(n,e,t){const i=Object.assign(Object.assign({},Gu()),{[e]:t});return new Yt("auth","Firebase",i).create(e,{appName:n.name})}function Ju(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&be(n,"argument-error"),Go(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xi(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Xo.create(n,...e)}function R(n,e,...t){if(!n)throw Xi(e,...t)}function Oe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw gn(e),new Error(e)}function ze(n,e){n||Oe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Yu(){return Dr()==="http:"||Dr()==="https:"}function Dr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yu()||Oc()||"connection"in navigator)?navigator.onLine:!0}function Zu(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t){this.shortDelay=e,this.longDelay=t,ze(t>e,"Short delay should be less than long delay!"),this.isMobile=Pc()||Lc()}get(){return Qu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n,e){ze(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Oe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Oe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Oe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=new Zt(3e4,6e4);function Tt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ut(n,e,t,i,r={}){return Jo(n,r,async()=>{let o={},s={};i&&(e==="GET"?s=i:o={body:JSON.stringify(i)});const a=Qt(Object.assign({key:n.config.apiKey},s)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Ko.fetch()(Yo(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function Jo(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},ed),e);try{const r=new nd(n),o=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw un(n,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw un(n,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw un(n,"email-already-in-use",s);if(l==="USER_DISABLED")throw un(n,"user-disabled",s);const f=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Go(n,f,c);be(n,f)}}catch(r){if(r instanceof Ue)throw r;be(n,"network-request-failed",{message:String(r)})}}async function en(n,e,t,i,r={}){const o=await ut(n,e,t,i,r);return"mfaPendingCredential"in o&&be(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Yo(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?Gi(n.config,r):`${n.config.apiScheme}://${r}`}class nd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Te(this.auth,"network-request-failed")),td.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function un(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=Te(n,e,i);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function id(n,e){return ut(n,"POST","/v1/accounts:delete",e)}async function rd(n,e){return ut(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function od(n,e=!1){const t=Ee(n),i=await t.getIdToken(e),r=Ki(i);R(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:zt(ai(r.auth_time)),issuedAtTime:zt(ai(r.iat)),expirationTime:zt(ai(r.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ai(n){return Number(n)*1e3}function Ki(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return gn("JWT malformed, contained fewer than 3 sections"),null;try{const r=So(t);return r?JSON.parse(r):(gn("Failed to decode base64 JWT payload"),null)}catch(r){return gn("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function sd(n){const e=Ki(n);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _t(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ue&&ad(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function ad({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zt(this.lastLoginAt),this.creationTime=zt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(n){var e;const t=n.auth,i=await n.getIdToken(),r=await _t(n,rd(t,{idToken:i}));R(r==null?void 0:r.users.length,t,"internal-error");const o=r.users[0];n._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?dd(o.providerUserInfo):[],a=ud(n.providerData,s),l=n.isAnonymous,c=!(n.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?c:!1,g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Qo(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function ld(n){const e=Ee(n);await Nn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ud(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function dd(n){return n.map(e=>{var{providerId:t}=e,i=qi(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fd(n,e){const t=await Jo(n,{},async()=>{const i=Qt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=n.config,s=Yo(n,r,"/v1/token",`key=${o}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ko.fetch()(s,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return R(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:o}=await fd(e,t);this.updateTokensAndExpiration(i,r,Number(o))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:o}=t,s=new Xt;return i&&(R(typeof i=="string","internal-error",{appName:e}),s.refreshToken=i),r&&(R(typeof r=="string","internal-error",{appName:e}),s.accessToken=r),o&&(R(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xt,this.toJSON())}_performRefresh(){return Oe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n,e){R(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class rt{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,o=qi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Qo(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await _t(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return od(this,e)}reload(){return ld(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Nn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _t(this,id(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,o,s,a,l,c,f;const g=(i=t.displayName)!==null&&i!==void 0?i:void 0,x=(r=t.email)!==null&&r!==void 0?r:void 0,h=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,u=(s=t.photoURL)!==null&&s!==void 0?s:void 0,p=(a=t.tenantId)!==null&&a!==void 0?a:void 0,v=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=t.createdAt)!==null&&c!==void 0?c:void 0,T=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:O,emailVerified:_,isAnonymous:E,providerData:X,stsTokenManager:N}=t;R(O&&N,e,"internal-error");const $=Xt.fromJSON(this.name,N);R(typeof O=="string",e,"internal-error"),je(g,e.name),je(x,e.name),R(typeof _=="boolean",e,"internal-error"),R(typeof E=="boolean",e,"internal-error"),je(h,e.name),je(u,e.name),je(p,e.name),je(v,e.name),je(w,e.name),je(T,e.name);const ve=new rt({uid:O,auth:e,email:x,emailVerified:_,displayName:g,isAnonymous:E,photoURL:u,phoneNumber:h,tenantId:p,stsTokenManager:$,createdAt:w,lastLoginAt:T});return X&&Array.isArray(X)&&(ve.providerData=X.map(Ct=>Object.assign({},Ct))),v&&(ve._redirectEventId=v),ve}static async _fromIdTokenResponse(e,t,i=!1){const r=new Xt;r.updateFromServerResponse(t);const o=new rt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Nn(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Map;function Le(n){ze(n instanceof Function,"Expected a class definition");let e=Mr.get(n);return e?(ze(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Mr.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zo.type="NONE";const Br=Zo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(n,e,t){return`firebase:${n}:${e}:${t}`}class gt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:o}=this.auth;this.fullUserKey=yn(this.userKey,r.apiKey,o),this.fullPersistenceKey=yn("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new gt(Le(Br),e,i);const r=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=r[0]||Le(Br);const s=yn(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const f=await c._get(s);if(f){const g=rt._fromJSON(e,f);c!==o&&(a=g),o=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new gt(o,e,i):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new gt(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ns(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(es(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rs(e))return"Blackberry";if(os(e))return"Webos";if(Ji(e))return"Safari";if((e.includes("chrome/")||ts(e))&&!e.includes("edge/"))return"Chrome";if(is(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function es(n=le()){return/firefox\//i.test(n)}function Ji(n=le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ts(n=le()){return/crios\//i.test(n)}function ns(n=le()){return/iemobile/i.test(n)}function is(n=le()){return/android/i.test(n)}function rs(n=le()){return/blackberry/i.test(n)}function os(n=le()){return/webos/i.test(n)}function Un(n=le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function hd(n=le()){var e;return Un(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pd(){return Dc()&&document.documentMode===10}function ss(n=le()){return Un(n)||is(n)||os(n)||rs(n)||/windows phone/i.test(n)||ns(n)}function md(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(n,e=[]){let t;switch(n){case"Browser":t=Fr(le());break;case"Worker":t=`${Fr(le())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Et}/${i}`}async function cs(n,e){return ut(n,"GET","/v2/recaptchaConfig",Tt(n,e))}function zr(n){return n!==void 0&&n.enterprise!==void 0}class ls{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function us(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const o=Te("internal-error");o.customData=r,t(o)},i.type="text/javascript",i.charset="UTF-8",gd().appendChild(i)})}function yd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const bd="https://www.google.com/recaptcha/enterprise.js?render=",vd="recaptcha-enterprise",wd="NO_RECAPTCHA";class ds{constructor(e){this.type=vd,this.auth=dt(e)}async verify(e="verify",t=!1){async function i(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{cs(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new ls(l);return o.tenantId==null?o._agentRecaptchaConfig=c:o._tenantRecaptchaConfigs[o.tenantId]=c,s(c.siteKey)}}).catch(l=>{a(l)})})}function r(o,s,a){const l=window.grecaptcha;zr(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(c=>{s(c)}).catch(()=>{s(wd)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{i(this.auth).then(a=>{if(!t&&zr(window.grecaptcha))r(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}us(bd+a).then(()=>{r(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function An(n,e,t,i=!1){const r=new ds(n);let o;try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const s=Object.assign({},e);return i?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ur(this),this.idTokenSubscription=new Ur(this),this.beforeStateQueue=new xd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Le(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await gt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let r=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(r=l.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Nn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zu()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ee(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Le(e))})}async initializeRecaptchaConfig(){const e=await cs(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new ls(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new ds(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yt("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Le(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await gt.create(this,[Le(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return R(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof t=="function"?e.addObserver(t,i,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=as(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Ku(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function dt(n){return Ee(n)}class Ur{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wc(t=>this.observer=t)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(n,e){const t=Ui(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),o=t.getOptions();if(En(o,e??{}))return r;be(r,"already-initialized")}return t.initialize({options:e})}function Ed(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Le);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Id(n,e,t){const i=dt(n);R(i._canInitEmulator,i,"emulator-config-failed"),R(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),o=fs(e),{host:s,port:a}=Td(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${o}//${s}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Sd()}function fs(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Td(n){const e=fs(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const o=r[1];return{host:o,port:Vr(i.substr(o.length+1))}}else{const[o,s]=i.split(":");return{host:o,port:Vr(s)}}}function Vr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Sd(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Oe("not implemented")}_getIdTokenResponse(e){return Oe("not implemented")}_linkToIdToken(e,t){return Oe("not implemented")}_getReauthenticationResolver(e){return Oe("not implemented")}}async function Cd(n,e){return ut(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(n,e){return en(n,"POST","/v1/accounts:signInWithPassword",Tt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nd(n,e){return en(n,"POST","/v1/accounts:signInWithEmailLink",Tt(n,e))}async function Ad(n,e){return en(n,"POST","/v1/accounts:signInWithEmailLink",Tt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Yi{constructor(e,t,i,r=null){super("password",i),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Gt(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Gt(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const r=await An(e,i,"signInWithPassword");return ci(e,r)}else return ci(e,i).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const o=await An(e,i,"signInWithPassword");return ci(e,o)}else return Promise.reject(r)});case"emailLink":return Nd(e,{email:this._email,oobCode:this._password});default:be(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Cd(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ad(e,{idToken:t,email:this._email,oobCode:this._password});default:be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(n,e){return en(n,"POST","/v1/accounts:signInWithIdp",Tt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="http://localhost";class at extends Yi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new at(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):be("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,o=qi(t,["providerId","signInMethod"]);if(!i||!r)return null;const s=new at(i,r);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return yt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,yt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yt(e,t)}buildRequest(){const e={requestUri:Rd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Od(n){const e=Pt(Ot(n)).link,t=e?Pt(Ot(e)).deep_link_id:null,i=Pt(Ot(n)).deep_link_id;return(i?Pt(Ot(i)).link:null)||i||t||e||n}class Qi{constructor(e){var t,i,r,o,s,a;const l=Pt(Ot(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(i=l.oobCode)!==null&&i!==void 0?i:null,g=Pd((r=l.mode)!==null&&r!==void 0?r:null);R(c&&f&&g,"argument-error"),this.apiKey=c,this.operation=g,this.code=f,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Od(e);try{return new Qi(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(){this.providerId=St.PROVIDER_ID}static credential(e,t){return Gt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Qi.parseLink(t);return R(i,"argument-error"),Gt._fromEmailAndCode(e,i.code,i.tenantId)}}St.PROVIDER_ID="password";St.EMAIL_PASSWORD_SIGN_IN_METHOD="password";St.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Zi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends tn{constructor(){super("facebook.com")}static credential(e){return at._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qe.credential(e.oauthAccessToken)}catch{return null}}}qe.FACEBOOK_SIGN_IN_METHOD="facebook.com";qe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends tn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return at._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _e.credentialFromTaggedObject(e)}static credentialFromError(e){return _e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return _e.credential(t,i)}catch{return null}}}_e.GOOGLE_SIGN_IN_METHOD="google.com";_e.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends tn{constructor(){super("github.com")}static credential(e){return at._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch{return null}}}Xe.GITHUB_SIGN_IN_METHOD="github.com";Xe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends tn{constructor(){super("twitter.com")}static credential(e,t){return at._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ge.credential(t,i)}catch{return null}}}Ge.TWITTER_SIGN_IN_METHOD="twitter.com";Ge.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(n,e){return en(n,"POST","/v1/accounts:signUp",Tt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const o=await rt._fromIdTokenResponse(e,i,r),s=Wr(i);return new ct({user:o,providerId:s,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=Wr(i);return new ct({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function Wr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Ue{constructor(e,t,i,r){var o;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Rn.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Rn(e,t,i,r)}}function hs(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Rn._fromErrorAndOperation(n,o,e,i):o})}async function Ld(n,e,t=!1){const i=await _t(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ct._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dd(n,e,t=!1){const{auth:i}=n,r="reauthenticate";try{const o=await _t(n,hs(i,r,e,n),t);R(o.idToken,i,"internal-error");const s=Ki(o.idToken);R(s,i,"internal-error");const{sub:a}=s;return R(n.uid===a,i,"user-mismatch"),ct._forOperation(n,r,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&be(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(n,e,t=!1){const i="signIn",r=await hs(n,i,e),o=await ct._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(o.user),o}async function Md(n,e){return ps(dt(n),e)}async function Bd(n,e,t){var i;const r=dt(n),o={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let s;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const c=await An(r,o,"signUpPassword");s=li(r,c)}else s=li(r,o).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const f=await An(r,o,"signUpPassword");return li(r,f)}else return Promise.reject(c)});const a=await s.catch(c=>Promise.reject(c)),l=await ct._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function Fd(n,e,t){return Md(Ee(n),St.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zd(n,e){return ut(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ud(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Ee(n),o={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},s=await _t(i,zd(i.auth,o));i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(s)}function Vd(n,e,t,i){return Ee(n).onIdTokenChanged(e,t,i)}function Wd(n,e,t){return Ee(n).beforeAuthStateChanged(e,t)}function Hd(n,e,t,i){return Ee(n).onAuthStateChanged(e,t,i)}function jd(n){return Ee(n).signOut()}const Pn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Pn,"1"),this.storage.removeItem(Pn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(){const n=le();return Ji(n)||Un(n)}const qd=1e3,Xd=10;class gs extends ms{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$d()&&md(),this.fallbackToPolling=ss(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(i);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const s=this.storage.getItem(i);!t&&this.localCache[i]===s||this.notifyListeners(i,s)},o=this.storage.getItem(i);pd()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Xd):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},qd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gs.type="LOCAL";const Gd=gs;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends ms{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ys.type="SESSION";const bs=ys;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new Vn(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:o}=t.data,s=this.handlersMap[r];if(!(s!=null&&s.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(s).map(async c=>c(t.origin,o)),l=await Kd(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const c=er("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},i);s={messageChannel:r,onMessage(g){const x=g;if(x.data.eventId===c)switch(x.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(x.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return window}function Yd(n){Se().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(){return typeof Se().WorkerGlobalScope<"u"&&typeof Se().importScripts=="function"}async function Qd(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zd(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ef(){return vs()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="firebaseLocalStorageDb",tf=1,On="firebaseLocalStorage",xs="fbase_key";class nn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wn(n,e){return n.transaction([On],e?"readwrite":"readonly").objectStore(On)}function nf(){const n=indexedDB.deleteDatabase(ws);return new nn(n).toPromise()}function Ti(){const n=indexedDB.open(ws,tf);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(On,{keyPath:xs})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(On)?e(i):(i.close(),await nf(),e(await Ti()))})})}async function Hr(n,e,t){const i=Wn(n,!0).put({[xs]:e,value:t});return new nn(i).toPromise()}async function rf(n,e){const t=Wn(n,!1).get(e),i=await new nn(t).toPromise();return i===void 0?null:i.value}function jr(n,e){const t=Wn(n,!0).delete(e);return new nn(t).toPromise()}const of=800,sf=3;class _s{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ti(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>sf)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vn._getInstance(ef()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Qd(),!this.activeServiceWorker)return;this.sender=new Jd(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Zd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ti();return await Hr(e,Pn,"1"),await jr(e,Pn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Hr(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>rf(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>jr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=Wn(r,!1).getAll();return new nn(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:r,value:o}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),of)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_s.type="LOCAL";const af=_s;new Zt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(n,e){return e?Le(e):(R(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Yi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cf(n){return ps(n.auth,new tr(n),n.bypassAuthState)}function lf(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),Dd(t,new tr(n),n.bypassAuthState)}async function uf(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),Ld(t,new tr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t,i,r,o=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cf;case"linkViaPopup":case"linkViaRedirect":return uf;case"reauthViaPopup":case"reauthViaRedirect":return lf;default:be(this.auth,"internal-error")}}resolve(e){ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=new Zt(2e3,1e4);async function ff(n,e,t){const i=dt(n);Ju(n,e,Zi);const r=ks(i,t);return new it(i,"signInViaPopup",e,r).executeNotNull()}class it extends Es{constructor(e,t,i,r,o){super(e,t,r,o),this.provider=i,this.authWindow=null,this.pollId=null,it.currentPopupAction&&it.currentPopupAction.cancel(),it.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){ze(this.filter.length===1,"Popup operations only handle one event");const e=er();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Te(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,it.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Te(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,df.get())};e()}}it.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf="pendingRedirect",bn=new Map;class pf extends Es{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=bn.get(this.auth._key());if(!e){try{const i=await mf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}bn.set(this.auth._key(),e)}return this.bypassAuthState||bn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mf(n,e){const t=bf(e),i=yf(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function gf(n,e){bn.set(n._key(),e)}function yf(n){return Le(n._redirectPersistence)}function bf(n){return yn(hf,n.config.apiKey,n.name)}async function vf(n,e,t=!1){const i=dt(n),r=ks(i,e),s=await new pf(i,r,t).execute();return s&&!t&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=10*60*1e3;class xf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_f(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Is(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Te(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wf&&this.cachedEventUids.clear(),this.cachedEventUids.has($r(e))}saveEventToCache(e){this.cachedEventUids.add($r(e)),this.lastProcessedEventTime=Date.now()}}function $r(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Is({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _f(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Is(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kf(n,e={}){return ut(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,If=/^https?/;async function Tf(n){if(n.config.emulator)return;const{authorizedDomains:e}=await kf(n);for(const t of e)try{if(Sf(t))return}catch{}be(n,"unauthorized-domain")}function Sf(n){const e=Ii(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const s=new URL(n);return s.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&s.hostname===i}if(!If.test(t))return!1;if(Ef.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=new Zt(3e4,6e4);function qr(){const n=Se().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Nf(n){return new Promise((e,t)=>{var i,r,o;function s(){qr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qr(),t(Te(n,"network-request-failed"))},timeout:Cf.get()})}if(!((r=(i=Se().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((o=Se().gapi)===null||o===void 0)&&o.load)s();else{const a=yd("iframefcb");return Se()[a]=()=>{gapi.load?s():t(Te(n,"network-request-failed"))},us(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw vn=null,e})}let vn=null;function Af(n){return vn=vn||Nf(n),vn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=new Zt(5e3,15e3),Pf="__/auth/iframe",Of="emulator/auth/iframe",Lf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Df=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mf(n){const e=n.config;R(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Gi(e,Of):`https://${n.config.authDomain}/${Pf}`,i={apiKey:e.apiKey,appName:n.name,v:Et},r=Df.get(n.config.apiHost);r&&(i.eid=r);const o=n._getFrameworks();return o.length&&(i.fw=o.join(",")),`${t}?${Qt(i).slice(1)}`}async function Bf(n){const e=await Af(n),t=Se().gapi;return R(t,n,"internal-error"),e.open({where:document.body,url:Mf(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lf,dontclear:!0},i=>new Promise(async(r,o)=>{await i.restyle({setHideOnLeave:!1});const s=Te(n,"network-request-failed"),a=Se().setTimeout(()=>{o(s)},Rf.get());function l(){Se().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zf=500,Uf=600,Vf="_blank",Wf="http://localhost";class Xr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Hf(n,e,t,i=zf,r=Uf){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ff),{width:i.toString(),height:r.toString(),top:o,left:s}),c=le().toLowerCase();t&&(a=ts(c)?Vf:t),es(c)&&(e=e||Wf,l.scrollbars="yes");const f=Object.entries(l).reduce((x,[h,u])=>`${x}${h}=${u},`,"");if(hd(c)&&a!=="_self")return jf(e||"",a),new Xr(null);const g=window.open(e||"",a,f);R(g,n,"popup-blocked");try{g.focus()}catch{}return new Xr(g)}function jf(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f="__/auth/handler",qf="emulator/auth/handler",Xf=encodeURIComponent("fac");async function Gr(n,e,t,i,r,o){R(n.config.authDomain,n,"auth-domain-config-required"),R(n.config.apiKey,n,"invalid-api-key");const s={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Et,eventId:r};if(e instanceof Zi){e.setDefaultLanguage(n.languageCode),s.providerId=e.providerId||"",Vc(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries(o||{}))s[f]=g}if(e instanceof tn){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(s.scopes=f.join(","))}n.tenantId&&(s.tid=n.tenantId);const a=s;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await n._getAppCheckToken(),c=l?`#${Xf}=${encodeURIComponent(l)}`:"";return`${Gf(n)}?${Qt(a).slice(1)}${c}`}function Gf({config:n}){return n.emulator?Gi(n,qf):`https://${n.authDomain}/${$f}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="webStorageSupport";class Kf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bs,this._completeRedirectFn=vf,this._overrideRedirectResult=gf}async _openPopup(e,t,i,r){var o;ze((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Gr(e,t,i,Ii(),r);return Hf(e,s,er())}async _openRedirect(e,t,i,r){await this._originValidation(e);const o=await Gr(e,t,i,Ii(),r);return Yd(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:o}=this.eventManagers[t];return r?Promise.resolve(r):(ze(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Bf(e),i=new xf(e);return t.register("authEvent",r=>(R(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ui,{type:ui},r=>{var o;const s=(o=r==null?void 0:r[0])===null||o===void 0?void 0:o[ui];s!==void 0&&t(!!s),be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Tf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ss()||Ji()||Un()}}const Jf=Kf;var Kr="@firebase/auth",Jr="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Zf(n){vt(new ot("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=i.options;R(s&&!s.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:s,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:as(n)},c=new _d(i,r,o,l);return Ed(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),vt(new ot("auth-internal",e=>{const t=dt(e.getProvider("auth").getImmediate());return(i=>new Yf(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(Kr,Jr,Qf(n)),Ye(Kr,Jr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=5*60,th=Ao("authIdTokenMaxAge")||eh;let Yr=null;const nh=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>th)return;const r=t==null?void 0:t.token;Yr!==r&&(Yr=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function ih(n=Lo()){const e=Ui(n,"auth");if(e.isInitialized())return e.getImmediate();const t=kd(n,{popupRedirectResolver:Jf,persistence:[af,Gd,bs]}),i=Ao("authTokenSyncURL");if(i){const o=nh(i);Wd(t,o,()=>o(t.currentUser)),Vd(t,s=>o(s))}const r=Co("auth");return r&&Id(t,`http://${r}`),t}Zf("Browser");const rh={apiKey:"AIzaSyCJ7bTyjKvQtJTxa9hFVg3AHb0bG9xVu8w",authDomain:"lets-do-it-bookshelf.firebaseapp.com",projectId:"lets-do-it-bookshelf",storageBucket:"lets-do-it-bookshelf.appspot.com",messagingSenderId:"961226885770",appId:"1:961226885770:web:a9fbb77bee4dd760353b73"},oh=Oo(rh),sh=Fu(oh);async function ah(n){const e=Uu(sh,"users",n),t=await Xu(e);if(t.exists())return console.log("Document data:",t.data()),t.data();console.log("No such document!")}const lt=ih();Hd(lt,n=>{if(n){const e=n.uid;console.log(e,n),ch(n),ah(e).then(t=>{})}else document.querySelector(".sing-wrap").style.display="",document.querySelector(".log-out-wrap").style.display="none"});function ch(n){const e=document.querySelector(".user-text");e.textContent=n.displayName,document.querySelector(".user-image img").src=n.photoURL??"/img/noimage.png",document.querySelector(".user-image img").alt=n.displayName,document.querySelector(".log-out-wrap").style.display="",document.querySelector(".sing-wrap").style.display="none"}function lh(){signUpForm.email.value.length<6||Bd(lt,signUpForm.email.value,signUpForm.password.value).then(n=>{const e=n.user,t=uh();ph(signUpForm.name.value,t),Dt.close(),console.log(e)}).catch(n=>{n.code,n.message,console.dir(n)})}function uh(n=null){return null}function dh(){signInForm.email.value.length<6||Fd(lt,signInForm.email.value,signInForm.password.value).then(n=>{const e=n.user;console.log(e),mt.close()}).catch(n=>{const e=n.code,t=n.message;console.dir(n,e,t),alert(t)})}function fh(){const n=new _e;ff(lt,n).then(e=>{_e.credentialFromResult(e).accessToken,e.user,mt.close()}).catch(e=>{e.code,e.message,e.customData.email,_e.credentialFromError(e)})}function hh(){jd(lt).then(()=>{}).catch(n=>{})}function ph(n=null,e=null){Ud(lt.currentUser,{displayName:n,photoURL:e}).then(()=>{document.querySelector(".user-name").textContent=n,document.querySelector(".user-image img").src=e??"/img/noimage.png",console.log(lt.currentUser)}).catch(t=>{})}document.addEventListener("click",mh);function mh(n){n.target.closest(".modal-close-btn")&&(Dt.close(),mt.close()),n.target.closest("[data-sign-up]")&&(Dt.show(),mt.close()),n.target.closest("[data-sign-in]")&&(Dt.close(),mt.show()),n.target.closest(".log-out-btn")&&hh(),n.target.closest(".sign-in-btn")&&dh(),n.target.closest("[data-g-sign-in]")&&fh(),n.target.closest(".sign-up-btn")&&lh()}
