import"./styles-2b8d6e7a.js";function jr(n,e){return function(){return n.apply(e,arguments)}}const{toString:Ps}=Object.prototype,{getPrototypeOf:hi}=Object,xn=(n=>e=>{const t=Ps.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),ge=n=>(n=n.toLowerCase(),e=>xn(e)===n),kn=n=>e=>typeof e===n,{isArray:dt}=Array,Nt=kn("undefined");function Os(n){return n!==null&&!Nt(n)&&n.constructor!==null&&!Nt(n.constructor)&&se(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Hr=ge("ArrayBuffer");function Ls(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&Hr(n.buffer),e}const Ds=kn("string"),se=kn("function"),$r=kn("number"),_n=n=>n!==null&&typeof n=="object",Ms=n=>n===!0||n===!1,Qt=n=>{if(xn(n)!=="object")return!1;const e=hi(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},Fs=ge("Date"),Bs=ge("File"),zs=ge("Blob"),Us=ge("FileList"),Vs=n=>_n(n)&&se(n.pipe),Ws=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||se(n.append)&&((e=xn(n))==="formdata"||e==="object"&&se(n.toString)&&n.toString()==="[object FormData]"))},js=ge("URLSearchParams"),Hs=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ft(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),dt(n))for(i=0,r=n.length;i<r;i++)e.call(null,n[i],i,n);else{const o=t?Object.getOwnPropertyNames(n):Object.keys(n),s=o.length;let a;for(i=0;i<s;i++)a=o[i],e.call(null,n[a],a,n)}}function qr(n,e){e=e.toLowerCase();const t=Object.keys(n);let i=t.length,r;for(;i-- >0;)if(r=t[i],e===r.toLowerCase())return r;return null}const Xr=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Kr=n=>!Nt(n)&&n!==Xr;function Yn(){const{caseless:n}=Kr(this)&&this||{},e={},t=(i,r)=>{const o=n&&qr(e,r)||r;Qt(e[o])&&Qt(i)?e[o]=Yn(e[o],i):Qt(i)?e[o]=Yn({},i):dt(i)?e[o]=i.slice():e[o]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Ft(arguments[i],t);return e}const $s=(n,e,t,{allOwnKeys:i}={})=>(Ft(e,(r,o)=>{t&&se(r)?n[o]=jr(r,t):n[o]=r},{allOwnKeys:i}),n),qs=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),Xs=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},Ks=(n,e,t,i)=>{let r,o,s;const a={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),o=r.length;o-- >0;)s=r[o],(!i||i(s,n,e))&&!a[s]&&(e[s]=n[s],a[s]=!0);n=t!==!1&&hi(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},Gs=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},Js=n=>{if(!n)return null;if(dt(n))return n;let e=n.length;if(!$r(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},Ys=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&hi(Uint8Array)),Qs=(n,e)=>{const i=(n&&n[Symbol.iterator]).call(n);let r;for(;(r=i.next())&&!r.done;){const o=r.value;e.call(n,o[0],o[1])}},Zs=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},ea=ge("HTMLFormElement"),ta=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,r){return i.toUpperCase()+r}),Zi=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),na=ge("RegExp"),Gr=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};Ft(t,(r,o)=>{e(r,o,n)!==!1&&(i[o]=r)}),Object.defineProperties(n,i)},ia=n=>{Gr(n,(e,t)=>{if(se(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(se(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},ra=(n,e)=>{const t={},i=r=>{r.forEach(o=>{t[o]=!0})};return dt(n)?i(n):i(String(n).split(e)),t},oa=()=>{},sa=(n,e)=>(n=+n,Number.isFinite(n)?n:e),Ln="abcdefghijklmnopqrstuvwxyz",er="0123456789",Jr={DIGIT:er,ALPHA:Ln,ALPHA_DIGIT:Ln+Ln.toUpperCase()+er},aa=(n=16,e=Jr.ALPHA_DIGIT)=>{let t="";const{length:i}=e;for(;n--;)t+=e[Math.random()*i|0];return t};function ca(n){return!!(n&&se(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const la=n=>{const e=new Array(10),t=(i,r)=>{if(_n(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const o=dt(i)?[]:{};return Ft(i,(s,a)=>{const c=t(s,r+1);!Nt(c)&&(o[a]=c)}),e[r]=void 0,o}}return i};return t(n,0)},ua=ge("AsyncFunction"),da=n=>n&&(_n(n)||se(n))&&se(n.then)&&se(n.catch),m={isArray:dt,isArrayBuffer:Hr,isBuffer:Os,isFormData:Ws,isArrayBufferView:Ls,isString:Ds,isNumber:$r,isBoolean:Ms,isObject:_n,isPlainObject:Qt,isUndefined:Nt,isDate:Fs,isFile:Bs,isBlob:zs,isRegExp:na,isFunction:se,isStream:Vs,isURLSearchParams:js,isTypedArray:Ys,isFileList:Us,forEach:Ft,merge:Yn,extend:$s,trim:Hs,stripBOM:qs,inherits:Xs,toFlatObject:Ks,kindOf:xn,kindOfTest:ge,endsWith:Gs,toArray:Js,forEachEntry:Qs,matchAll:Zs,isHTMLForm:ea,hasOwnProperty:Zi,hasOwnProp:Zi,reduceDescriptors:Gr,freezeMethods:ia,toObjectSet:ra,toCamelCase:ta,noop:oa,toFiniteNumber:sa,findKey:qr,global:Xr,isContextDefined:Kr,ALPHABET:Jr,generateString:aa,isSpecCompliantForm:ca,toJSONObject:la,isAsyncFn:ua,isThenable:da};function P(n,e,t,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),r&&(this.response=r)}m.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:m.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Yr=P.prototype,Qr={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Qr[n]={value:n}});Object.defineProperties(P,Qr);Object.defineProperty(Yr,"isAxiosError",{value:!0});P.from=(n,e,t,i,r,o)=>{const s=Object.create(Yr);return m.toFlatObject(n,s,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),P.call(s,n.message,e,t,i,r),s.cause=n,s.name=n.name,o&&Object.assign(s,o),s};const fa=null;function Qn(n){return m.isPlainObject(n)||m.isArray(n)}function Zr(n){return m.endsWith(n,"[]")?n.slice(0,-2):n}function tr(n,e,t){return n?n.concat(e).map(function(r,o){return r=Zr(r),!t&&o?"["+r+"]":r}).join(t?".":""):e}function ha(n){return m.isArray(n)&&!n.some(Qn)}const ma=m.toFlatObject(m,{},null,function(e){return/^is[A-Z]/.test(e)});function En(n,e,t){if(!m.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=m.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,z){return!m.isUndefined(z[w])});const i=t.metaTokens,r=t.visitor||h,o=t.dots,s=t.indexes,c=(t.Blob||typeof Blob<"u"&&Blob)&&m.isSpecCompliantForm(e);if(!m.isFunction(r))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(m.isDate(y))return y.toISOString();if(!c&&m.isBlob(y))throw new P("Blob is not supported. Use a Buffer instead.");return m.isArrayBuffer(y)||m.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function h(y,w,z){let F=y;if(y&&!z&&typeof y=="object"){if(m.endsWith(w,"{}"))w=i?w:w.slice(0,-2),y=JSON.stringify(y);else if(m.isArray(y)&&ha(y)||(m.isFileList(y)||m.endsWith(w,"[]"))&&(F=m.toArray(y)))return w=Zr(w),F.forEach(function(U,ye){!(m.isUndefined(U)||U===null)&&e.append(s===!0?tr([w],ye,o):s===null?w:w+"[]",u(U))}),!1}return Qn(y)?!0:(e.append(tr(z,w,o),u(y)),!1)}const p=[],E=Object.assign(ma,{defaultVisitor:h,convertValue:u,isVisitable:Qn});function g(y,w){if(!m.isUndefined(y)){if(p.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));p.push(y),m.forEach(y,function(F,X){(!(m.isUndefined(F)||F===null)&&r.call(e,F,m.isString(X)?X.trim():X,w,E))===!0&&g(F,w?w.concat(X):[X])}),p.pop()}}if(!m.isObject(n))throw new TypeError("data must be an object");return g(n),e}function nr(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function mi(n,e){this._pairs=[],n&&En(n,this,e)}const eo=mi.prototype;eo.append=function(e,t){this._pairs.push([e,t])};eo.toString=function(e){const t=e?function(i){return e.call(this,i,nr)}:nr;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function pa(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function to(n,e,t){if(!e)return n;const i=t&&t.encode||pa,r=t&&t.serialize;let o;if(r?o=r(e,t):o=m.isURLSearchParams(e)?e.toString():new mi(e,t).toString(i),o){const s=n.indexOf("#");s!==-1&&(n=n.slice(0,s)),n+=(n.indexOf("?")===-1?"?":"&")+o}return n}class ga{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){m.forEach(this.handlers,function(i){i!==null&&e(i)})}}const ir=ga,no={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ya=typeof URLSearchParams<"u"?URLSearchParams:mi,ba=typeof FormData<"u"?FormData:null,wa=typeof Blob<"u"?Blob:null,va=(()=>{let n;return typeof navigator<"u"&&((n=navigator.product)==="ReactNative"||n==="NativeScript"||n==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),xa=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),he={isBrowser:!0,classes:{URLSearchParams:ya,FormData:ba,Blob:wa},isStandardBrowserEnv:va,isStandardBrowserWebWorkerEnv:xa,protocols:["http","https","file","blob","url","data"]};function ka(n,e){return En(n,new he.classes.URLSearchParams,Object.assign({visitor:function(t,i,r,o){return he.isNode&&m.isBuffer(t)?(this.append(i,t.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}function _a(n){return m.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Ea(n){const e={},t=Object.keys(n);let i;const r=t.length;let o;for(i=0;i<r;i++)o=t[i],e[o]=n[o];return e}function io(n){function e(t,i,r,o){let s=t[o++];const a=Number.isFinite(+s),c=o>=t.length;return s=!s&&m.isArray(r)?r.length:s,c?(m.hasOwnProp(r,s)?r[s]=[r[s],i]:r[s]=i,!a):((!r[s]||!m.isObject(r[s]))&&(r[s]=[]),e(t,i,r[s],o)&&m.isArray(r[s])&&(r[s]=Ea(r[s])),!a)}if(m.isFormData(n)&&m.isFunction(n.entries)){const t={};return m.forEachEntry(n,(i,r)=>{e(_a(i),r,t,0)}),t}return null}const Ia={"Content-Type":void 0};function Ta(n,e,t){if(m.isString(n))try{return(e||JSON.parse)(n),m.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const In={transitional:no,adapter:["xhr","http"],transformRequest:[function(e,t){const i=t.getContentType()||"",r=i.indexOf("application/json")>-1,o=m.isObject(e);if(o&&m.isHTMLForm(e)&&(e=new FormData(e)),m.isFormData(e))return r&&r?JSON.stringify(io(e)):e;if(m.isArrayBuffer(e)||m.isBuffer(e)||m.isStream(e)||m.isFile(e)||m.isBlob(e))return e;if(m.isArrayBufferView(e))return e.buffer;if(m.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(o){if(i.indexOf("application/x-www-form-urlencoded")>-1)return ka(e,this.formSerializer).toString();if((a=m.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return En(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),Ta(e)):e}],transformResponse:[function(e){const t=this.transitional||In.transitional,i=t&&t.forcedJSONParsing,r=this.responseType==="json";if(e&&m.isString(e)&&(i&&!this.responseType||r)){const s=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(s)throw a.name==="SyntaxError"?P.from(a,P.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:he.classes.FormData,Blob:he.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};m.forEach(["delete","get","head"],function(e){In.headers[e]={}});m.forEach(["post","put","patch"],function(e){In.headers[e]=m.merge(Ia)});const pi=In,Sa=m.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Na=n=>{const e={};let t,i,r;return n&&n.split(`
`).forEach(function(s){r=s.indexOf(":"),t=s.substring(0,r).trim().toLowerCase(),i=s.substring(r+1).trim(),!(!t||e[t]&&Sa[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},rr=Symbol("internals");function wt(n){return n&&String(n).trim().toLowerCase()}function Zt(n){return n===!1||n==null?n:m.isArray(n)?n.map(Zt):String(n)}function Aa(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const Ca=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Dn(n,e,t,i,r){if(m.isFunction(i))return i.call(this,e,t);if(r&&(e=t),!!m.isString(e)){if(m.isString(i))return e.indexOf(i)!==-1;if(m.isRegExp(i))return i.test(e)}}function Ra(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function Pa(n,e){const t=m.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(r,o,s){return this[i].call(this,e,r,o,s)},configurable:!0})})}class Tn{constructor(e){e&&this.set(e)}set(e,t,i){const r=this;function o(a,c,u){const h=wt(c);if(!h)throw new Error("header name must be a non-empty string");const p=m.findKey(r,h);(!p||r[p]===void 0||u===!0||u===void 0&&r[p]!==!1)&&(r[p||c]=Zt(a))}const s=(a,c)=>m.forEach(a,(u,h)=>o(u,h,c));return m.isPlainObject(e)||e instanceof this.constructor?s(e,t):m.isString(e)&&(e=e.trim())&&!Ca(e)?s(Na(e),t):e!=null&&o(t,e,i),this}get(e,t){if(e=wt(e),e){const i=m.findKey(this,e);if(i){const r=this[i];if(!t)return r;if(t===!0)return Aa(r);if(m.isFunction(t))return t.call(this,r,i);if(m.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=wt(e),e){const i=m.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||Dn(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let r=!1;function o(s){if(s=wt(s),s){const a=m.findKey(i,s);a&&(!t||Dn(i,i[a],a,t))&&(delete i[a],r=!0)}}return m.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let i=t.length,r=!1;for(;i--;){const o=t[i];(!e||Dn(this,this[o],o,e,!0))&&(delete this[o],r=!0)}return r}normalize(e){const t=this,i={};return m.forEach(this,(r,o)=>{const s=m.findKey(i,o);if(s){t[s]=Zt(r),delete t[o];return}const a=e?Ra(o):String(o).trim();a!==o&&delete t[o],t[a]=Zt(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return m.forEach(this,(i,r)=>{i!=null&&i!==!1&&(t[r]=e&&m.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[rr]=this[rr]={accessors:{}}).accessors,r=this.prototype;function o(s){const a=wt(s);i[a]||(Pa(r,s),i[a]=!0)}return m.isArray(e)?e.forEach(o):o(e),this}}Tn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);m.freezeMethods(Tn.prototype);m.freezeMethods(Tn);const Te=Tn;function Mn(n,e){const t=this||pi,i=e||t,r=Te.from(i.headers);let o=i.data;return m.forEach(n,function(a){o=a.call(t,o,r.normalize(),e?e.status:void 0)}),r.normalize(),o}function ro(n){return!!(n&&n.__CANCEL__)}function Bt(n,e,t){P.call(this,n??"canceled",P.ERR_CANCELED,e,t),this.name="CanceledError"}m.inherits(Bt,P,{__CANCEL__:!0});function Oa(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new P("Request failed with status code "+t.status,[P.ERR_BAD_REQUEST,P.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const La=he.isStandardBrowserEnv?function(){return{write:function(t,i,r,o,s,a){const c=[];c.push(t+"="+encodeURIComponent(i)),m.isNumber(r)&&c.push("expires="+new Date(r).toGMTString()),m.isString(o)&&c.push("path="+o),m.isString(s)&&c.push("domain="+s),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(t){const i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Da(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Ma(n,e){return e?n.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):n}function oo(n,e){return n&&!Da(e)?Ma(n,e):e}const Fa=he.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let i;function r(o){let s=o;return e&&(t.setAttribute("href",s),s=t.href),t.setAttribute("href",s),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=r(window.location.href),function(s){const a=m.isString(s)?r(s):s;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}();function Ba(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function za(n,e){n=n||10;const t=new Array(n),i=new Array(n);let r=0,o=0,s;return e=e!==void 0?e:1e3,function(c){const u=Date.now(),h=i[o];s||(s=u),t[r]=c,i[r]=u;let p=o,E=0;for(;p!==r;)E+=t[p++],p=p%n;if(r=(r+1)%n,r===o&&(o=(o+1)%n),u-s<e)return;const g=h&&u-h;return g?Math.round(E*1e3/g):void 0}}function or(n,e){let t=0;const i=za(50,250);return r=>{const o=r.loaded,s=r.lengthComputable?r.total:void 0,a=o-t,c=i(a),u=o<=s;t=o;const h={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&u?(s-o)/c:void 0,event:r};h[e?"download":"upload"]=!0,n(h)}}const Ua=typeof XMLHttpRequest<"u",Va=Ua&&function(n){return new Promise(function(t,i){let r=n.data;const o=Te.from(n.headers).normalize(),s=n.responseType;let a;function c(){n.cancelToken&&n.cancelToken.unsubscribe(a),n.signal&&n.signal.removeEventListener("abort",a)}m.isFormData(r)&&(he.isStandardBrowserEnv||he.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(n.auth){const g=n.auth.username||"",y=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";o.set("Authorization","Basic "+btoa(g+":"+y))}const h=oo(n.baseURL,n.url);u.open(n.method.toUpperCase(),to(h,n.params,n.paramsSerializer),!0),u.timeout=n.timeout;function p(){if(!u)return;const g=Te.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),w={data:!s||s==="text"||s==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:g,config:n,request:u};Oa(function(F){t(F),c()},function(F){i(F),c()},w),u=null}if("onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){u&&(i(new P("Request aborted",P.ECONNABORTED,n,u)),u=null)},u.onerror=function(){i(new P("Network Error",P.ERR_NETWORK,n,u)),u=null},u.ontimeout=function(){let y=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const w=n.transitional||no;n.timeoutErrorMessage&&(y=n.timeoutErrorMessage),i(new P(y,w.clarifyTimeoutError?P.ETIMEDOUT:P.ECONNABORTED,n,u)),u=null},he.isStandardBrowserEnv){const g=(n.withCredentials||Fa(h))&&n.xsrfCookieName&&La.read(n.xsrfCookieName);g&&o.set(n.xsrfHeaderName,g)}r===void 0&&o.setContentType(null),"setRequestHeader"in u&&m.forEach(o.toJSON(),function(y,w){u.setRequestHeader(w,y)}),m.isUndefined(n.withCredentials)||(u.withCredentials=!!n.withCredentials),s&&s!=="json"&&(u.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&u.addEventListener("progress",or(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",or(n.onUploadProgress)),(n.cancelToken||n.signal)&&(a=g=>{u&&(i(!g||g.type?new Bt(null,n,u):g),u.abort(),u=null)},n.cancelToken&&n.cancelToken.subscribe(a),n.signal&&(n.signal.aborted?a():n.signal.addEventListener("abort",a)));const E=Ba(h);if(E&&he.protocols.indexOf(E)===-1){i(new P("Unsupported protocol "+E+":",P.ERR_BAD_REQUEST,n));return}u.send(r||null)})},en={http:fa,xhr:Va};m.forEach(en,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const Wa={getAdapter:n=>{n=m.isArray(n)?n:[n];const{length:e}=n;let t,i;for(let r=0;r<e&&(t=n[r],!(i=m.isString(t)?en[t.toLowerCase()]:t));r++);if(!i)throw i===!1?new P(`Adapter ${t} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(m.hasOwnProp(en,t)?`Adapter '${t}' is not available in the build`:`Unknown adapter '${t}'`);if(!m.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:en};function Fn(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Bt(null,n)}function sr(n){return Fn(n),n.headers=Te.from(n.headers),n.data=Mn.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Wa.getAdapter(n.adapter||pi.adapter)(n).then(function(i){return Fn(n),i.data=Mn.call(n,n.transformResponse,i),i.headers=Te.from(i.headers),i},function(i){return ro(i)||(Fn(n),i&&i.response&&(i.response.data=Mn.call(n,n.transformResponse,i.response),i.response.headers=Te.from(i.response.headers))),Promise.reject(i)})}const ar=n=>n instanceof Te?n.toJSON():n;function st(n,e){e=e||{};const t={};function i(u,h,p){return m.isPlainObject(u)&&m.isPlainObject(h)?m.merge.call({caseless:p},u,h):m.isPlainObject(h)?m.merge({},h):m.isArray(h)?h.slice():h}function r(u,h,p){if(m.isUndefined(h)){if(!m.isUndefined(u))return i(void 0,u,p)}else return i(u,h,p)}function o(u,h){if(!m.isUndefined(h))return i(void 0,h)}function s(u,h){if(m.isUndefined(h)){if(!m.isUndefined(u))return i(void 0,u)}else return i(void 0,h)}function a(u,h,p){if(p in e)return i(u,h);if(p in n)return i(void 0,u)}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,h)=>r(ar(u),ar(h),!0)};return m.forEach(Object.keys(Object.assign({},n,e)),function(h){const p=c[h]||r,E=p(n[h],e[h],h);m.isUndefined(E)&&p!==a||(t[h]=E)}),t}const so="1.4.0",gi={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{gi[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const cr={};gi.transitional=function(e,t,i){function r(o,s){return"[Axios v"+so+"] Transitional option '"+o+"'"+s+(i?". "+i:"")}return(o,s,a)=>{if(e===!1)throw new P(r(s," has been removed"+(t?" in "+t:"")),P.ERR_DEPRECATED);return t&&!cr[s]&&(cr[s]=!0,console.warn(r(s," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(o,s,a):!0}};function ja(n,e,t){if(typeof n!="object")throw new P("options must be an object",P.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const o=i[r],s=e[o];if(s){const a=n[o],c=a===void 0||s(a,o,n);if(c!==!0)throw new P("option "+o+" must be "+c,P.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new P("Unknown option "+o,P.ERR_BAD_OPTION)}}const Zn={assertOptions:ja,validators:gi},Oe=Zn.validators;class an{constructor(e){this.defaults=e,this.interceptors={request:new ir,response:new ir}}request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=st(this.defaults,t);const{transitional:i,paramsSerializer:r,headers:o}=t;i!==void 0&&Zn.assertOptions(i,{silentJSONParsing:Oe.transitional(Oe.boolean),forcedJSONParsing:Oe.transitional(Oe.boolean),clarifyTimeoutError:Oe.transitional(Oe.boolean)},!1),r!=null&&(m.isFunction(r)?t.paramsSerializer={serialize:r}:Zn.assertOptions(r,{encode:Oe.function,serialize:Oe.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s;s=o&&m.merge(o.common,o[t.method]),s&&m.forEach(["delete","get","head","post","put","patch","common"],y=>{delete o[y]}),t.headers=Te.concat(s,o);const a=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(t)===!1||(c=c&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let h,p=0,E;if(!c){const y=[sr.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,u),E=y.length,h=Promise.resolve(t);p<E;)h=h.then(y[p++],y[p++]);return h}E=a.length;let g=t;for(p=0;p<E;){const y=a[p++],w=a[p++];try{g=y(g)}catch(z){w.call(this,z);break}}try{h=sr.call(this,g)}catch(y){return Promise.reject(y)}for(p=0,E=u.length;p<E;)h=h.then(u[p++],u[p++]);return h}getUri(e){e=st(this.defaults,e);const t=oo(e.baseURL,e.url);return to(t,e.params,e.paramsSerializer)}}m.forEach(["delete","get","head","options"],function(e){an.prototype[e]=function(t,i){return this.request(st(i||{},{method:e,url:t,data:(i||{}).data}))}});m.forEach(["post","put","patch"],function(e){function t(i){return function(o,s,a){return this.request(st(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}an.prototype[e]=t(),an.prototype[e+"Form"]=t(!0)});const tn=an;class yi{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(o){t=o});const i=this;this.promise.then(r=>{if(!i._listeners)return;let o=i._listeners.length;for(;o-- >0;)i._listeners[o](r);i._listeners=null}),this.promise.then=r=>{let o;const s=new Promise(a=>{i.subscribe(a),o=a}).then(r);return s.cancel=function(){i.unsubscribe(o)},s},e(function(o,s,a){i.reason||(i.reason=new Bt(o,s,a),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new yi(function(r){e=r}),cancel:e}}}const Ha=yi;function $a(n){return function(t){return n.apply(null,t)}}function qa(n){return m.isObject(n)&&n.isAxiosError===!0}const ei={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ei).forEach(([n,e])=>{ei[e]=n});const Xa=ei;function ao(n){const e=new tn(n),t=jr(tn.prototype.request,e);return m.extend(t,tn.prototype,e,{allOwnKeys:!0}),m.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return ao(st(n,r))},t}const q=ao(pi);q.Axios=tn;q.CanceledError=Bt;q.CancelToken=Ha;q.isCancel=ro;q.VERSION=so;q.toFormData=En;q.AxiosError=P;q.Cancel=q.CanceledError;q.all=function(e){return Promise.all(e)};q.spread=$a;q.isAxiosError=qa;q.mergeConfig=st;q.AxiosHeaders=Te;q.formToJSON=n=>io(m.isHTMLForm(n)?new FormData(n):n);q.HttpStatusCode=Xa;q.default=q;const bi=q;var Bn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gt(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var co={exports:{}};(function(n,e){(function(t){n.exports=t()})(function(){return function t(i,r,o){function s(u,h){if(!r[u]){if(!i[u]){var p=typeof Gt=="function"&&Gt;if(!h&&p)return p(u,!0);if(a)return a(u,!0);var E=new Error("Cannot find module '"+u+"'");throw E.code="MODULE_NOT_FOUND",E}var g=r[u]={exports:{}};i[u][0].call(g.exports,function(y){return s(i[u][1][y]||y)},g,g.exports,t,i,r,o)}return r[u].exports}for(var a=typeof Gt=="function"&&Gt,c=0;c<o.length;c++)s(o[c]);return s}({1:[function(t,i,r){Object.defineProperty(r,"__esModule",{value:!0}),r.create=r.visible=void 0;var o=function(c){var u=arguments.length>1&&arguments[1]!==void 0&&arguments[1],h=document.createElement("div");return h.innerHTML=c.trim(),u===!0?h.children:h.firstChild},s=function(c,u){var h=c.children;return h.length===1&&h[0].tagName===u},a=function(c){return(c=c||document.querySelector(".basicLightbox"))!=null&&c.ownerDocument.body.contains(c)===!0};r.visible=a,r.create=function(c,u){var h=function(g,y){var w=o(`
		<div class="basicLightbox `.concat(y.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),z=w.querySelector(".basicLightbox__placeholder");g.forEach(function(ye){return z.appendChild(ye)});var F=s(z,"IMG"),X=s(z,"VIDEO"),U=s(z,"IFRAME");return F===!0&&w.classList.add("basicLightbox--img"),X===!0&&w.classList.add("basicLightbox--video"),U===!0&&w.classList.add("basicLightbox--iframe"),w}(c=function(g){var y=typeof g=="string",w=g instanceof HTMLElement==1;if(y===!1&&w===!1)throw new Error("Content must be a DOM element/node or string");return y===!0?Array.from(o(g,!0)):g.tagName==="TEMPLATE"?[g.content.cloneNode(!0)]:Array.from(g.children)}(c),u=function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((g=Object.assign({},g)).closable==null&&(g.closable=!0),g.className==null&&(g.className=""),g.onShow==null&&(g.onShow=function(){}),g.onClose==null&&(g.onClose=function(){}),typeof g.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof g.className!="string")throw new Error("Property `className` must be a string");if(typeof g.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof g.onClose!="function")throw new Error("Property `onClose` must be a function");return g}(u)),p=function(g){return u.onClose(E)!==!1&&function(y,w){return y.classList.remove("basicLightbox--visible"),setTimeout(function(){return a(y)===!1||y.parentElement.removeChild(y),w()},410),!0}(h,function(){if(typeof g=="function")return g(E)})};u.closable===!0&&h.addEventListener("click",function(g){g.target===h&&p()});var E={element:function(){return h},visible:function(){return a(h)},show:function(g){return u.onShow(E)!==!1&&function(y,w){return document.body.appendChild(y),setTimeout(function(){requestAnimationFrame(function(){return y.classList.add("basicLightbox--visible"),w()})},10),!0}(h,function(){if(typeof g=="function")return g(E)})},close:p};return E}},{}]},{},[1])(1)})})(co);var wi=co.exports;function Ka({_id:n,book_image:e,title:t,author:i,description:r,buy_links:[o,s,a,c,u]}={}){return`
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
  `}let kt,ke,vi=!1,tt=null;const zn={books_showcase:document.querySelector(".books-showcase")};zn&&zn.books_showcase&&zn.books_showcase.addEventListener("click",Ga);async function Ga(n){const e=n.target.closest(".js-book-item");if(e){const{id:t}=e.dataset;try{const i=await Ja(t),r=Ka(i);Ya(r);const o=document.querySelector(".modal-window-conteiner");o.dataset.book=JSON.stringify(i),kt=o.querySelector(".added-modal-window"),ke=o.querySelector(".add-delete-book-btn");const s=JSON.parse(localStorage.getItem("KEY"))??[],a=i._id;fo(a,s)?(kt.classList.remove("after"),ke.classList.add("small"),ke.textContent="remove from the shopping list"):(kt.classList.add("after"),ke.classList.remove("small"),ke.textContent="Add to shopping list"),o.addEventListener("click",Qa)}catch(i){console.error(i)}}else return}async function Ja(n){const e="https://books-backend.p.goit.global/books/";return(await bi.get(`${e}${n}`)).data}function Ya(n){tt=wi.create(n),tt.element().querySelector(".btn-close").addEventListener("click",()=>{xi()}),tt.element().addEventListener("click",uo),tt.show(),document.documentElement.style.overflow="hidden",vi=!0,document.addEventListener("keydown",lo)}function xi(){tt.close(),document.documentElement.style.overflow="auto",vi=!1,document.removeEventListener("keydown",lo),tt.element().removeEventListener("click",uo)}function lo(n){n.key==="Escape"&&vi&&xi()}function uo(n){n.target===n.currentTarget&&xi()}function fo(n,e){return e.some(t=>t._id===n)}function Qa(n){if(!n.target.classList.contains("add-delete-book-btn"))return;const e=n.target.closest(".modal-window-conteiner").dataset.id,t=JSON.parse(localStorage.getItem("KEY"))??[],i=JSON.parse(n.target.closest(".modal-window-conteiner").dataset.book);if(fo(e,t)){const r=t.filter(o=>o._id!==e);localStorage.setItem("KEY",JSON.stringify(r)),kt.classList.add("after"),ke.classList.remove("small"),ke.textContent="Add to shopping list"}else t.push(i),localStorage.setItem("KEY",JSON.stringify(t)),kt.classList.remove("after"),ke.classList.add("small"),ke.textContent="remove from the shopping list"}var Za={exports:{}};(function(n){(function(e,t){n.exports=t(e)})(typeof Bn>"u"?typeof window>"u"?Bn:window:Bn,function(e){if(typeof e>"u"&&typeof e.document>"u")return!1;var t,i,r,o,s,a=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,c='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',u={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},h={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},p={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},E={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},g={Show:"Show",Ask:"Ask",Prompt:"Prompt"},y={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},w={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},z={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},F={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse"},X={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},U=function(l){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+l+a)},ye=function(l){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3",`
`+l+a)},be=function(l){return l||(l="head"),e.document[l]!==null||(U(`
Notiflix needs to be appended to the "<`+l+'>" element, but you called it before the "<'+l+'>" element has been created.'),!1)},we=function(l,d){if(!be("head"))return!1;if(l()!==null&&!e.document.getElementById(d)){var f=e.document.createElement("style");f.id=d,f.innerHTML=l(),e.document.head.appendChild(f)}},L=function(){var l={},d=!1,f=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(d=arguments[0],f++);for(var v=function(k){for(var S in k)Object.prototype.hasOwnProperty.call(k,S)&&(l[S]=d&&Object.prototype.toString.call(k[S])==="[object Object]"?L(l[S],k[S]):k[S])};f<arguments.length;f++)v(arguments[f]);return l},K=function(l){var d=e.document.createElement("div");return d.innerHTML=l,d.textContent||d.innerText||""},gt=function(l,d){l||(l="110px"),d||(d="#32c682");var f='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+l+'" height="'+l+'" fill="'+d+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return f},Cn=function(l,d){l||(l="110px"),d||(d="#ff5549");var f='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+l+'" height="'+l+'" fill="'+d+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return f},gs=function(l,d){l||(l="110px"),d||(d="#eebf31");var f='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+l+'" height="'+l+'" fill="'+d+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return f},ys=function(l,d){l||(l="110px"),d||(d="#26c0d3");var f='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+l+'" height="'+l+'" fill="'+d+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return f},Wi=function(l,d){l||(l="60px"),d||(d="#32c682");var f='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+d+'" width="'+l+'" height="'+l+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';return f},ji=function(l,d){l||(l="60px"),d||(d="#32c682");var f='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+d+'" width="'+l+'" height="'+l+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';return f},Hi=function(l,d){l||(l="60px"),d||(d="#32c682");var f='<svg xmlns="http://www.w3.org/2000/svg" width="'+l+'" height="'+l+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+l+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+l+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+d+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';return f},$i=function(l,d){l||(l="60px"),d||(d="#32c682");var f='<svg xmlns="http://www.w3.org/2000/svg" fill="'+d+'" width="'+l+'" height="'+l+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';return f},qi=function(l,d){l||(l="60px"),d||(d="#32c682");var f='<svg xmlns="http://www.w3.org/2000/svg" fill="'+d+'" width="'+l+'" height="'+l+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';return f},Xi=function(l,d){l||(l="60px"),d||(d="#32c682");var f='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+d+'" width="'+l+'" height="'+l+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';return f},bs=function(l,d,f){l||(l="60px"),d||(d="#f8f8f8"),f||(f="#32c682");var v='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+l+'" height="'+l+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+d+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+f+'" stroke="'+f+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';return v},ws=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},$t=0,qt=function(l,d,f,v){if(!be("body"))return!1;t||Z.Notify.init({});var k=L(!0,t,{});if(typeof f=="object"&&!Array.isArray(f)||typeof v=="object"&&!Array.isArray(v)){var S={};typeof f=="object"?S=f:typeof v=="object"&&(S=v),t=L(!0,t,S)}var I=t[l.toLocaleLowerCase("en")];$t++,typeof d!="string"&&(d="Notiflix "+l),t.plainText&&(d=K(d)),!t.plainText&&d.length>t.messageMaxLength&&(t=L(!0,t,{closeButton:!0,messageMaxLength:150}),d='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),d.length>t.messageMaxLength&&(d=d.substring(0,t.messageMaxLength)+"..."),t.fontAwesomeIconStyle==="shadow"&&(I.fontAwesomeIconColor=I.background),t.cssAnimation||(t.cssAnimationDuration=0);var b=e.document.getElementById(h.wrapID)||e.document.createElement("div");if(b.id=h.wrapID,b.style.width=t.width,b.style.zIndex=t.zindex,b.style.opacity=t.opacity,t.position==="center-center"?(b.style.left=t.distance,b.style.top=t.distance,b.style.right=t.distance,b.style.bottom=t.distance,b.style.margin="auto",b.classList.add("nx-flex-center-center"),b.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",b.style.display="flex",b.style.flexWrap="wrap",b.style.flexDirection="column",b.style.justifyContent="center",b.style.alignItems="center",b.style.pointerEvents="none"):t.position==="center-top"?(b.style.left=t.distance,b.style.right=t.distance,b.style.top=t.distance,b.style.bottom="auto",b.style.margin="auto"):t.position==="center-bottom"?(b.style.left=t.distance,b.style.right=t.distance,b.style.bottom=t.distance,b.style.top="auto",b.style.margin="auto"):t.position==="right-bottom"?(b.style.right=t.distance,b.style.bottom=t.distance,b.style.top="auto",b.style.left="auto"):t.position==="left-top"?(b.style.left=t.distance,b.style.top=t.distance,b.style.right="auto",b.style.bottom="auto"):t.position==="left-bottom"?(b.style.left=t.distance,b.style.bottom=t.distance,b.style.top="auto",b.style.right="auto"):(b.style.right=t.distance,b.style.top=t.distance,b.style.left="auto",b.style.bottom="auto"),t.backOverlay){var C=e.document.getElementById(h.overlayID)||e.document.createElement("div");C.id=h.overlayID,C.style.width="100%",C.style.height="100%",C.style.position="fixed",C.style.zIndex=t.zindex-1,C.style.left=0,C.style.top=0,C.style.right=0,C.style.bottom=0,C.style.background=I.backOverlayColor||t.backOverlayColor,C.className=t.cssAnimation?"nx-with-animation":"",C.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(h.overlayID)||e.document.body.appendChild(C)}e.document.getElementById(h.wrapID)||e.document.body.appendChild(b);var x=e.document.createElement("div");x.id=t.ID+"-"+$t,x.className=t.className+" "+I.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&typeof f!="function"?"nx-with-close-button":"")+" "+(typeof f=="function"?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),x.style.fontSize=t.fontSize,x.style.color=I.textColor,x.style.background=I.background,x.style.borderRadius=t.borderRadius,x.style.pointerEvents="all",t.rtl&&(x.setAttribute("dir","rtl"),x.classList.add("nx-rtl-on")),x.style.fontFamily='"'+t.fontFamily+'", '+c,t.cssAnimation&&(x.style.animationDuration=t.cssAnimationDuration+"ms");var B="";if(t.closeButton&&typeof f!="function"&&(B='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+I.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),!t.useIcon)x.innerHTML='<span class="nx-message">'+d+"</span>"+(t.closeButton?B:"");else if(t.useFontAwesome)x.innerHTML='<i style="color:'+I.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+I.fontAwesomeClassName+" "+(t.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+d+"</span>"+(t.closeButton?B:"");else{var j="";l===u.Success?j='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+I.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':l===u.Failure?j='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+I.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':l===u.Warning?j='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+I.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':l===u.Info&&(j='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+I.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),x.innerHTML=j+'<span class="nx-message nx-with-icon">'+d+"</span>"+(t.closeButton?B:"")}if(t.position==="left-bottom"||t.position==="right-bottom"){var $=e.document.getElementById(h.wrapID);$.insertBefore(x,$.firstChild)}else e.document.getElementById(h.wrapID).appendChild(x);var W=e.document.getElementById(x.id);if(W){var R,H,O=function(){W.classList.add("nx-remove");var T=e.document.getElementById(h.overlayID);T&&0>=b.childElementCount&&T.classList.add("nx-remove"),clearTimeout(R)},ce=function(){if(W&&W.parentNode!==null&&W.parentNode.removeChild(W),0>=b.childElementCount&&b.parentNode!==null){b.parentNode.removeChild(b);var T=e.document.getElementById(h.overlayID);T&&T.parentNode!==null&&T.parentNode.removeChild(T)}clearTimeout(H)};if(t.closeButton&&typeof f!="function"){var le=e.document.getElementById(x.id).querySelector("span.nx-close-button");le.addEventListener("click",function(){O();var T=setTimeout(function(){ce(),clearTimeout(T)},t.cssAnimationDuration)})}if((typeof f=="function"||t.clickToClose)&&W.addEventListener("click",function(){typeof f=="function"&&f(),O();var T=setTimeout(function(){ce(),clearTimeout(T)},t.cssAnimationDuration)}),!t.closeButton&&typeof f!="function"){var ee=function(){R=setTimeout(function(){O()},t.timeout),H=setTimeout(function(){ce()},t.timeout+t.cssAnimationDuration)};ee(),t.pauseOnHover&&(W.addEventListener("mouseenter",function(){W.classList.add("nx-paused"),clearTimeout(R),clearTimeout(H)}),W.addEventListener("mouseleave",function(){W.classList.remove("nx-paused"),ee()}))}}if(t.showOnlyTheLastOne&&0<$t)for(var te,V=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+$t+"])"),Pe=0;Pe<V.length;Pe++)te=V[Pe],te.parentNode!==null&&te.parentNode.removeChild(te);t=L(!0,t,k)},vs=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},Xt=function(l,d,f,v,k,S){if(!be("body"))return!1;i||Z.Report.init({});var I={};if(typeof k=="object"&&!Array.isArray(k)||typeof S=="object"&&!Array.isArray(S)){var b={};typeof k=="object"?b=k:typeof S=="object"&&(b=S),I=L(!0,i,{}),i=L(!0,i,b)}var C=i[l.toLocaleLowerCase("en")];typeof d!="string"&&(d="Notiflix "+l),typeof f!="string"&&(l===p.Success?f='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':l===p.Failure?f='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':l===p.Warning?f='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':l===p.Info&&(f='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),typeof v!="string"&&(v="Okay"),i.plainText&&(d=K(d),f=K(f),v=K(v)),i.plainText||(d.length>i.titleMaxLength&&(d="Possible HTML Tags Error",f='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',v="Okay"),f.length>i.messageMaxLength&&(d="Possible HTML Tags Error",f='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',v="Okay"),v.length>i.buttonMaxLength&&(d="Possible HTML Tags Error",f='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',v="Okay")),d.length>i.titleMaxLength&&(d=d.substring(0,i.titleMaxLength)+"..."),f.length>i.messageMaxLength&&(f=f.substring(0,i.messageMaxLength)+"..."),v.length>i.buttonMaxLength&&(v=v.substring(0,i.buttonMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var x=e.document.createElement("div");x.id=E.ID,x.className=i.className,x.style.zIndex=i.zindex,x.style.borderRadius=i.borderRadius,x.style.fontFamily='"'+i.fontFamily+'", '+c,i.rtl&&(x.setAttribute("dir","rtl"),x.classList.add("nx-rtl-on")),x.style.display="flex",x.style.flexWrap="wrap",x.style.flexDirection="column",x.style.alignItems="center",x.style.justifyContent="center";var B="",j=i.backOverlayClickToClose===!0;i.backOverlay&&(B='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+(j?" nx-report-click-to-close":"")+'" style="background:'+(C.backOverlayColor||i.backOverlayColor)+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var $="";if(l===p.Success?$=gt(i.svgSize,C.svgColor):l===p.Failure?$=Cn(i.svgSize,C.svgColor):l===p.Warning?$=gs(i.svgSize,C.svgColor):l===p.Info&&($=ys(i.svgSize,C.svgColor)),x.innerHTML=B+'<div class="'+i.className+"-content"+(i.cssAnimation?" nx-with-animation ":"")+" nx-"+i.cssAnimationStyle+'" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+'ms;"><div style="width:'+i.svgSize+"; height:"+i.svgSize+';" class="'+i.className+'-icon">'+$+'</div><h5 class="'+i.className+'-title" style="font-weight:500; font-size:'+i.titleFontSize+"; color:"+C.titleColor+';">'+d+'</h5><p class="'+i.className+'-message" style="font-size:'+i.messageFontSize+"; color:"+C.messageColor+';">'+f+'</p><a id="NXReportButton" class="'+i.className+'-button" style="font-weight:500; font-size:'+i.buttonFontSize+"; background:"+C.buttonBackground+"; color:"+C.buttonColor+';">'+v+"</a></div>",!e.document.getElementById(x.id)){e.document.body.appendChild(x);var W=function(){var O=e.document.getElementById(x.id);O.classList.add("nx-remove");var ce=setTimeout(function(){O.parentNode!==null&&O.parentNode.removeChild(O),clearTimeout(ce)},i.cssAnimationDuration)},R=e.document.getElementById("NXReportButton");if(R.addEventListener("click",function(){typeof k=="function"&&k(),W()}),B&&j){var H=e.document.querySelector(".nx-report-click-to-close");H.addEventListener("click",function(){W()})}}i=L(!0,i,I)},xs=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},Rn=function(l,d,f,v,k,S,I,b,C){if(!be("body"))return!1;r||Z.Confirm.init({});var x=L(!0,r,{});typeof C!="object"||Array.isArray(C)||(r=L(!0,r,C)),typeof d!="string"&&(d="Notiflix Confirm"),typeof f!="string"&&(f="Do you agree with me?"),typeof k!="string"&&(k="Yes"),typeof S!="string"&&(S="No"),typeof I!="function"&&(I=void 0),typeof b!="function"&&(b=void 0),r.plainText&&(d=K(d),f=K(f),k=K(k),S=K(S)),r.plainText||(d.length>r.titleMaxLength&&(d="Possible HTML Tags Error",f='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',k="Okay",S="..."),f.length>r.messageMaxLength&&(d="Possible HTML Tags Error",f='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',k="Okay",S="..."),(k.length||S.length)>r.buttonsMaxLength&&(d="Possible HTML Tags Error",f='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',k="Okay",S="...")),d.length>r.titleMaxLength&&(d=d.substring(0,r.titleMaxLength)+"..."),f.length>r.messageMaxLength&&(f=f.substring(0,r.messageMaxLength)+"..."),k.length>r.buttonsMaxLength&&(k=k.substring(0,r.buttonsMaxLength)+"..."),S.length>r.buttonsMaxLength&&(S=S.substring(0,r.buttonsMaxLength)+"..."),r.cssAnimation||(r.cssAnimationDuration=0);var B=e.document.createElement("div");B.id=y.ID,B.className=r.className+(r.cssAnimation?" nx-with-animation nx-"+r.cssAnimationStyle:""),B.style.zIndex=r.zindex,B.style.padding=r.distance,r.rtl&&(B.setAttribute("dir","rtl"),B.classList.add("nx-rtl-on"));var j=typeof r.position=="string"?r.position.trim():"center";B.classList.add("nx-position-"+j),B.style.fontFamily='"'+r.fontFamily+'", '+c;var $="";r.backOverlay&&($='<div class="'+r.className+"-overlay"+(r.cssAnimation?" nx-with-animation":"")+'" style="background:'+r.backOverlayColor+";animation-duration:"+r.cssAnimationDuration+'ms;"></div>');var W="";typeof I=="function"&&(W='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+r.cancelButtonColor+";background:"+r.cancelButtonBackground+";font-size:"+r.buttonsFontSize+';">'+S+"</a>");var R="",H=null,O=void 0;if(l===g.Ask||l===g.Prompt){H=v||"";var ce=l===g.Ask||200<H.length?Math.ceil(1.5*H.length):250,le=l===g.Prompt?'value="'+H+'"':"";R='<div><input id="NXConfirmValidationInput" type="text" '+le+' maxlength="'+ce+'" style="font-size:'+r.messageFontSize+";border-radius: "+r.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(B.innerHTML=$+'<div class="'+r.className+'-content" style="width:'+r.width+"; background:"+r.backgroundColor+"; animation-duration:"+r.cssAnimationDuration+"ms; border-radius: "+r.borderRadius+';"><div class="'+r.className+'-head"><h5 style="color:'+r.titleColor+";font-size:"+r.titleFontSize+';">'+d+'</h5><div style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+f+R+'</div></div><div class="'+r.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+(typeof I=="function"?"":" nx-full")+'" style="color:'+r.okButtonColor+";background:"+r.okButtonBackground+";font-size:"+r.buttonsFontSize+';">'+k+"</a>"+W+"</div></div>",!e.document.getElementById(B.id)){e.document.body.appendChild(B);var ee=e.document.getElementById(B.id),te=e.document.getElementById("NXConfirmButtonOk"),V=e.document.getElementById("NXConfirmValidationInput");if(V&&(V.focus(),V.setSelectionRange(0,(V.value||"").length),V.addEventListener("keyup",function(T){var et=T.target.value;if(l===g.Ask&&et!==H)T.preventDefault(),V.classList.add("nx-validation-failure"),V.classList.remove("nx-validation-success");else{l===g.Ask&&(V.classList.remove("nx-validation-failure"),V.classList.add("nx-validation-success"));var yt=(T.key||"").toLocaleLowerCase("en")==="enter"||T.keyCode===13;yt&&te.dispatchEvent(new Event("click"))}})),te.addEventListener("click",function(T){if(l===g.Ask&&H&&V){var et=(V.value||"").toString();if(et!==H)return V.focus(),V.classList.add("nx-validation-failure"),T.stopPropagation(),T.preventDefault(),T.returnValue=!1,T.cancelBubble=!0,!1;V.classList.remove("nx-validation-failure")}typeof I=="function"&&(l===g.Prompt&&V&&(O=V.value||""),I(O)),ee.classList.add("nx-remove");var yt=setTimeout(function(){ee.parentNode!==null&&(ee.parentNode.removeChild(ee),clearTimeout(yt))},r.cssAnimationDuration)}),typeof I=="function"){var Pe=e.document.getElementById("NXConfirmButtonCancel");Pe.addEventListener("click",function(){typeof b=="function"&&(l===g.Prompt&&V&&(O=V.value||""),b(O)),ee.classList.add("nx-remove");var T=setTimeout(function(){ee.parentNode!==null&&(ee.parentNode.removeChild(ee),clearTimeout(T))},r.cssAnimationDuration)})}}r=L(!0,r,x)},ks=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},ve=function(l,d,f,v,k){if(!be("body"))return!1;o||Z.Loading.init({});var S=L(!0,o,{});if(typeof d=="object"&&!Array.isArray(d)||typeof f=="object"&&!Array.isArray(f)){var I={};typeof d=="object"?I=d:typeof f=="object"&&(I=f),o=L(!0,o,I)}var b="";if(typeof d=="string"&&0<d.length&&(b=d),v){b=b.length>o.messageMaxLength?K(b).toString().substring(0,o.messageMaxLength)+"...":K(b).toString();var C="";0<b.length&&(C='<p id="'+o.messageID+'" class="nx-loading-message" style="color:'+o.messageColor+";font-size:"+o.messageFontSize+';">'+b+"</p>"),o.cssAnimation||(o.cssAnimationDuration=0);var x="";if(l===w.Standard)x=Wi(o.svgSize,o.svgColor);else if(l===w.Hourglass)x=ji(o.svgSize,o.svgColor);else if(l===w.Circle)x=Hi(o.svgSize,o.svgColor);else if(l===w.Arrows)x=$i(o.svgSize,o.svgColor);else if(l===w.Dots)x=qi(o.svgSize,o.svgColor);else if(l===w.Pulse)x=Xi(o.svgSize,o.svgColor);else if(l===w.Custom&&o.customSvgCode!==null&&o.customSvgUrl===null)x=o.customSvgCode||"";else if(l===w.Custom&&o.customSvgUrl!==null&&o.customSvgCode===null)x='<img class="nx-custom-loading-icon" width="'+o.svgSize+'" height="'+o.svgSize+'" src="'+o.customSvgUrl+'" alt="Notiflix">';else{if(l===w.Custom&&(o.customSvgUrl===null||o.customSvgCode===null))return U('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;x=bs(o.svgSize,"#f8f8f8","#32c682")}var B=parseInt((o.svgSize||"").replace(/[^0-9]/g,"")),j=e.innerWidth,$=B>=j?j-40+"px":B+"px",W='<div style="width:'+$+"; height:"+$+';" class="'+o.className+"-icon"+(0<b.length?" nx-with-message":"")+'">'+x+"</div>",R=e.document.createElement("div");if(R.id=z.ID,R.className=o.className+(o.cssAnimation?" nx-with-animation":"")+(o.clickToClose?" nx-loading-click-to-close":""),R.style.zIndex=o.zindex,R.style.background=o.backgroundColor,R.style.animationDuration=o.cssAnimationDuration+"ms",R.style.fontFamily='"'+o.fontFamily+'", '+c,R.style.display="flex",R.style.flexWrap="wrap",R.style.flexDirection="column",R.style.alignItems="center",R.style.justifyContent="center",o.rtl&&(R.setAttribute("dir","rtl"),R.classList.add("nx-rtl-on")),R.innerHTML=W+C,!e.document.getElementById(R.id)&&(e.document.body.appendChild(R),o.clickToClose)){var H=e.document.getElementById(R.id);H.addEventListener("click",function(){R.classList.add("nx-remove");var le=setTimeout(function(){R.parentNode!==null&&(R.parentNode.removeChild(R),clearTimeout(le))},o.cssAnimationDuration)})}}else if(e.document.getElementById(z.ID))var O=e.document.getElementById(z.ID),ce=setTimeout(function(){O.classList.add("nx-remove");var le=setTimeout(function(){O.parentNode!==null&&(O.parentNode.removeChild(O),clearTimeout(le))},o.cssAnimationDuration);clearTimeout(ce)},k);o=L(!0,o,S)},_s=function(l){typeof l!="string"&&(l="");var d=e.document.getElementById(z.ID);if(d)if(0<l.length){l=l.length>o.messageMaxLength?K(l).substring(0,o.messageMaxLength)+"...":K(l);var f=d.getElementsByTagName("p")[0];if(f)f.innerHTML=l;else{var v=e.document.createElement("p");v.id=o.messageID,v.className="nx-loading-message nx-loading-message-new",v.style.color=o.messageColor,v.style.fontSize=o.messageFontSize,v.innerHTML=l,d.appendChild(v)}}else U("Where is the new message?")},Es=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},Pn=0,je=function(l,d,f,v,k,S){var I;if(Array.isArray(f)){if(1>f.length)return U("Array of HTMLElements should contains at least one HTMLElement."),!1;I=f}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,f)){if(1>f.length)return U("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;I=Array.prototype.slice.call(f)}else{var b=typeof f!="string"||1>(f||"").length||(f||"").length===1&&((f||"")[0]==="#"||(f||"")[0]===".");if(b)return U("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var C=e.document.querySelectorAll(f);if(1>C.length)return U('You called the "Notiflix.Block..." function with "'+f+'" selector, but there is no such element(s) in the document.'),!1;I=C}s||Z.Block.init({});var x=L(!0,s,{});if(typeof v=="object"&&!Array.isArray(v)||typeof k=="object"&&!Array.isArray(k)){var B={};typeof v=="object"?B=v:typeof k=="object"&&(B=k),s=L(!0,s,B)}var j="";typeof v=="string"&&0<v.length&&(j=v),s.cssAnimation||(s.cssAnimationDuration=0);var $=X.className;typeof s.className=="string"&&($=s.className.trim());var W=typeof s.querySelectorLimit=="number"?s.querySelectorLimit:200,R=(I||[]).length>=W?W:I.length,H="nx-block-temporary-position";if(l){for(var O,ce=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],le=0;le<R;le++)if(O=I[le],O){if(-1<ce.indexOf(O.tagName.toLocaleLowerCase("en")))break;var ee=O.querySelectorAll("[id^="+X.ID+"]");if(1>ee.length){var te="";d&&(d===F.Hourglass?te=ji(s.svgSize,s.svgColor):d===F.Circle?te=Hi(s.svgSize,s.svgColor):d===F.Arrows?te=$i(s.svgSize,s.svgColor):d===F.Dots?te=qi(s.svgSize,s.svgColor):d===F.Pulse?te=Xi(s.svgSize,s.svgColor):te=Wi(s.svgSize,s.svgColor));var V='<span class="'+$+'-icon" style="width:'+s.svgSize+";height:"+s.svgSize+';">'+te+"</span>",Pe="";0<j.length&&(j=j.length>s.messageMaxLength?K(j).substring(0,s.messageMaxLength)+"...":K(j),Pe='<span style="font-size:'+s.messageFontSize+";color:"+s.messageColor+';" class="'+$+'-message">'+j+"</span>"),Pn++;var T=e.document.createElement("div");T.id=X.ID+"-"+Pn,T.className=$+(s.cssAnimation?" nx-with-animation":""),T.style.position=s.position,T.style.zIndex=s.zindex,T.style.background=s.backgroundColor,T.style.animationDuration=s.cssAnimationDuration+"ms",T.style.fontFamily='"'+s.fontFamily+'", '+c,T.style.display="flex",T.style.flexWrap="wrap",T.style.flexDirection="column",T.style.alignItems="center",T.style.justifyContent="center",s.rtl&&(T.setAttribute("dir","rtl"),T.classList.add("nx-rtl-on")),T.innerHTML=V+Pe;var et=e.getComputedStyle(O).getPropertyValue("position"),yt=typeof et=="string"?et.toLocaleLowerCase("en"):"relative",Ki=Math.round(1.25*parseInt(s.svgSize))+40,Is=O.offsetHeight||0,On="";Ki>Is&&(On="min-height:"+Ki+"px;");var Gi="";Gi=O.getAttribute("id")?"#"+O.getAttribute("id"):O.classList[0]?"."+O.classList[0]:(O.tagName||"").toLocaleLowerCase("en");var Ji="",Yi=-1>=["absolute","relative","fixed","sticky"].indexOf(yt);if(Yi||0<On.length){if(!be("head"))return!1;Yi&&(Ji="position:relative!important;");var Ts='<style id="Style-'+X.ID+"-"+Pn+'">'+Gi+"."+H+"{"+Ji+On+"}</style>",Qi=e.document.createRange();Qi.selectNode(e.document.head);var Ss=Qi.createContextualFragment(Ts);e.document.head.appendChild(Ss),O.classList.add(H)}O.appendChild(T)}}}else var Ns=function(G){var oe=setTimeout(function(){G.parentNode!==null&&G.parentNode.removeChild(G);var bt=G.getAttribute("id"),Kt=e.document.getElementById("Style-"+bt);Kt&&Kt.parentNode!==null&&Kt.parentNode.removeChild(Kt),clearTimeout(oe)},s.cssAnimationDuration)},As=function(G){if(G&&0<G.length)for(var oe,bt=0;bt<G.length;bt++)oe=G[bt],oe&&(oe.classList.add("nx-remove"),Ns(oe));else ye(typeof f=="string"?'"Notiflix.Block.remove();" function called with "'+f+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+f+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},Cs=function(G){var oe=setTimeout(function(){G.classList.remove(H),clearTimeout(oe)},s.cssAnimationDuration+300)},Rs=setTimeout(function(){for(var G,oe=0;oe<R;oe++)G=I[oe],G&&(Cs(G),ee=G.querySelectorAll("[id^="+X.ID+"]"),As(ee));clearTimeout(Rs)},S);s=L(!0,s,x)},Z={Notify:{init:function(l){t=L(!0,h,l),we(ws,"NotiflixNotifyInternalCSS")},merge:function(l){return t?void(t=L(!0,t,l)):(U("You have to initialize the Notify module before call Merge function."),!1)},success:function(l,d,f){qt(u.Success,l,d,f)},failure:function(l,d,f){qt(u.Failure,l,d,f)},warning:function(l,d,f){qt(u.Warning,l,d,f)},info:function(l,d,f){qt(u.Info,l,d,f)}},Report:{init:function(l){i=L(!0,E,l),we(vs,"NotiflixReportInternalCSS")},merge:function(l){return i?void(i=L(!0,i,l)):(U("You have to initialize the Report module before call Merge function."),!1)},success:function(l,d,f,v,k){Xt(p.Success,l,d,f,v,k)},failure:function(l,d,f,v,k){Xt(p.Failure,l,d,f,v,k)},warning:function(l,d,f,v,k){Xt(p.Warning,l,d,f,v,k)},info:function(l,d,f,v,k){Xt(p.Info,l,d,f,v,k)}},Confirm:{init:function(l){r=L(!0,y,l),we(xs,"NotiflixConfirmInternalCSS")},merge:function(l){return r?void(r=L(!0,r,l)):(U("You have to initialize the Confirm module before call Merge function."),!1)},show:function(l,d,f,v,k,S,I){Rn(g.Show,l,d,null,f,v,k,S,I)},ask:function(l,d,f,v,k,S,I,b){Rn(g.Ask,l,d,f,v,k,S,I,b)},prompt:function(l,d,f,v,k,S,I,b){Rn(g.Prompt,l,d,f,v,k,S,I,b)}},Loading:{init:function(l){o=L(!0,z,l),we(ks,"NotiflixLoadingInternalCSS")},merge:function(l){return o?void(o=L(!0,o,l)):(U("You have to initialize the Loading module before call Merge function."),!1)},standard:function(l,d){ve(w.Standard,l,d,!0,0)},hourglass:function(l,d){ve(w.Hourglass,l,d,!0,0)},circle:function(l,d){ve(w.Circle,l,d,!0,0)},arrows:function(l,d){ve(w.Arrows,l,d,!0,0)},dots:function(l,d){ve(w.Dots,l,d,!0,0)},pulse:function(l,d){ve(w.Pulse,l,d,!0,0)},custom:function(l,d){ve(w.Custom,l,d,!0,0)},notiflix:function(l,d){ve(w.Notiflix,l,d,!0,0)},remove:function(l){typeof l!="number"&&(l=0),ve(null,null,null,!1,l)},change:function(l){_s(l)}},Block:{init:function(l){s=L(!0,X,l),we(Es,"NotiflixBlockInternalCSS")},merge:function(l){return s?void(s=L(!0,s,l)):(U('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(l,d,f){je(!0,F.Standard,l,d,f)},hourglass:function(l,d,f){je(!0,F.Hourglass,l,d,f)},circle:function(l,d,f){je(!0,F.Circle,l,d,f)},arrows:function(l,d,f){je(!0,F.Arrows,l,d,f)},dots:function(l,d,f){je(!0,F.Dots,l,d,f)},pulse:function(l,d,f){je(!0,F.Pulse,l,d,f)},remove:function(l,d){typeof d!="number"&&(d=0),je(!1,null,l,null,null,d)}}};return typeof e.Notiflix=="object"?L(!0,e.Notiflix,{Notify:Z.Notify,Report:Z.Report,Confirm:Z.Confirm,Loading:Z.Loading,Block:Z.Block}):{Notify:Z.Notify,Report:Z.Report,Confirm:Z.Confirm,Loading:Z.Loading,Block:Z.Block}})})(Za);const nt={categoryList:document.querySelector(".js-category-list"),books_showcase:document.querySelector(".books-showcase"),btnSeeMore:document.querySelector(".btnSeeMore")};bi.defaults.baseURL="https://books-backend.p.goit.global/books";async function ki(n){return bi.get(n).then(e=>{if(e.status!==200)throw new Error(e.Error);return e.data})}function ec(){return ki("/category-list ")}function tc(n){return n.map(({list_name:e})=>`
    <li>${e}</li>
    `).sort((e,t)=>e.localeCompare(t)).join("")}function nc(){ec().then(n=>{nt.categoryList.innerHTML=tc(n)}).catch(n=>{console.log(n)})}nc();function ho(n){return n.map(({_id:e,book_image:t,title:i,author:r})=>`
   <li data-id = '${e}' class = 'js-book-item'>
        <img src="${t}" alt="" />
        <p>${i}</p>
        <p>${r}</p>
      </li>`).join("")}function ic(n){return"<h1>Best Sellers Books</h1>"+n.map(({list_name:e,books:t})=>`
    <h2>${e}</h2> 
<div>
    <ul>`+ho(t)+`
    </ul>
    <button type="button" class="btnSeeMore">See more</button>
</div>`).join("")}function rc(){oc().then(n=>{nt.books_showcase.innerHTML=ic(n)}).catch(n=>{console.log(n)})}rc();function oc(){return ki("/top-books")}function sc(n){ac(n).then(e=>{nt.books_showcase.innerHTML=cc(e,n)}).catch(e=>{console.log(e)})}function ac(n){return ki(`/category?category=${n}`)}function cc(n,e){return`<h1>${e}</h1><div>
    <ul>`+ho(n)+`</ul>
</div>`}nt&&nt.categoryList&&nt.categoryList.addEventListener("click",lc);function lc(n){n.preventDefault(),sc(n.target.textContent)}let mo=document.getElementById("switchMode"),cn=document.querySelector(".logo");cn.innerHTML=`<svg class="logo">
        <use href="./img/spryte.svg#icon-logo-light" height="28px"></use>
      </svg>`;localStorage.getItem("theme")=="true"&&(theme.setAttribute("href","./css/dark-mode.css"),mo.checked=!0,cn.innerHTML=`<svg class="logo">
        <use href="./img/spryte.svg#icon-logo-dark" height="28px"></use>
      </svg>`);mo.onchange=function(){let n=document.getElementById("theme");this.checked?(localStorage.setItem("theme",!0),n.setAttribute("href","./css/dark-mode.css"),cn.innerHTML=`<svg class="logo">
        <use href="/img/spryte.svg#icon-logo-dark" height="28px"></use>
      </svg>`):(localStorage.setItem("theme",!1),n.setAttribute("href","./css/light-mode.css"),cn.innerHTML=`<svg class="logo">
        <use href="/img/spryte.svg#icon-logo-light" height="28px"></use>
      </svg>`)};let uc=document.querySelector(".menu-btn"),dc=document.querySelector(".tupe-out");uc.addEventListener("click",fc);function fc(){dc.classList.toggle("tupe-out_active")}const _t=wi.create(`<div class="modal">
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
`,{onShow:()=>document.addEventListener("keydown",ln),onClose:()=>document.removeEventListener("keydown",ln)}),it=wi.create(`<div class="modal">
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
`,{onShow:()=>document.addEventListener("keydown",ln),onClose:()=>document.removeEventListener("keydown",ln)});function ln(n){const e="Escape";n.code===e&&(_t.close(),it.close())}/**
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
 */const po=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},hc=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=n[t++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=n[t++],s=n[t++],a=n[t++],c=((r&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const o=n[t++],s=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|s&63)}}return e.join("")},go={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const o=n[r],s=r+1<n.length,a=s?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,h=o>>2,p=(o&3)<<4|a>>4;let E=(a&15)<<2|u>>6,g=u&63;c||(g=64,s||(E=64)),i.push(t[h],t[p],t[E],t[g])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(po(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):hc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const o=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const p=r<n.length?t[n.charAt(r)]:64;if(++r,o==null||a==null||u==null||p==null)throw new mc;const E=o<<2|a>>4;if(i.push(E),u!==64){const g=a<<4&240|u>>2;if(i.push(g),p!==64){const y=u<<6&192|p;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pc=function(n){const e=po(n);return go.encodeByteArray(e,!0)},un=function(n){return pc(n).replace(/\./g,"")},yo=function(n){try{return go.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yc=()=>gc().__FIREBASE_DEFAULTS__,bc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&yo(n[1]);return e&&JSON.parse(e)},_i=()=>{try{return yc()||bc()||wc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bo=n=>{var e,t;return(t=(e=_i())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},vc=n=>{const e=bo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},wo=()=>{var n;return(n=_i())===null||n===void 0?void 0:n.config},vo=n=>{var e;return(e=_i())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class xc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function kc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[un(JSON.stringify(t)),un(JSON.stringify(s)),a].join(".")}/**
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
 */function Q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _c(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Q())}function Ec(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ic(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tc(){const n=Q();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Sc(){try{return typeof indexedDB=="object"}catch{return!1}}function Nc(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const Ac="FirebaseError";class Re extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Ac,Object.setPrototypeOf(this,Re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zt.prototype.create)}}class zt{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],s=o?Cc(o,i):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new Re(r,a,i)}}function Cc(n,e){return n.replace(Rc,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Rc=/\{\$([^}]+)}/g;function Pc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function dn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const o=n[r],s=e[r];if(lr(o)&&lr(s)){if(!dn(o,s))return!1}else if(o!==s)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function lr(n){return n!==null&&typeof n=="object"}/**
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
 */function Ut(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function vt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,o]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(o)}}),e}function xt(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Oc(n,e){const t=new Lc(n,e);return t.subscribe.bind(t)}class Lc{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Dc(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Un),r.error===void 0&&(r.error=Un),r.complete===void 0&&(r.complete=Un);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dc(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Un(){}/**
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
 */function fe(n){return n&&n._delegate?n._delegate:n}class Xe{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const He="[DEFAULT]";/**
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
 */class Mc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new xc;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bc(e))try{this.getOrInitializeService({instanceIdentifier:He})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(e=He){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=He){return this.instances.has(e)}getOptions(e=He){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);i===a&&s.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);const s=this.instances.get(r);return s&&e(s,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Fc(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=He){return this.component?this.component.multipleInstances?e:He:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fc(n){return n===He?void 0:n}function Bc(n){return n.instantiationMode==="EAGER"}/**
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
 */class zc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Mc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const Uc={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Vc=D.INFO,Wc={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},jc=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=Wc[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ei{constructor(e){this.name=e,this._logLevel=Vc,this._logHandler=jc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Uc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const Hc=(n,e)=>e.some(t=>n instanceof t);let ur,dr;function $c(){return ur||(ur=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qc(){return dr||(dr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xo=new WeakMap,ti=new WeakMap,ko=new WeakMap,Vn=new WeakMap,Ii=new WeakMap;function Xc(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",s)},o=()=>{t(ze(n.result)),r()},s=()=>{i(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",s)});return e.then(t=>{t instanceof IDBCursor&&xo.set(t,n)}).catch(()=>{}),Ii.set(e,n),e}function Kc(n){if(ti.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",s),n.removeEventListener("abort",s)},o=()=>{t(),r()},s=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",s),n.addEventListener("abort",s)});ti.set(n,e)}let ni={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ti.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ko.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ze(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Gc(n){ni=n(ni)}function Jc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Wn(this),e,...t);return ko.set(i,e.sort?e.sort():[e]),ze(i)}:qc().includes(n)?function(...e){return n.apply(Wn(this),e),ze(xo.get(this))}:function(...e){return ze(n.apply(Wn(this),e))}}function Yc(n){return typeof n=="function"?Jc(n):(n instanceof IDBTransaction&&Kc(n),Hc(n,$c())?new Proxy(n,ni):n)}function ze(n){if(n instanceof IDBRequest)return Xc(n);if(Vn.has(n))return Vn.get(n);const e=Yc(n);return e!==n&&(Vn.set(n,e),Ii.set(e,n)),e}const Wn=n=>Ii.get(n);function Qc(n,e,{blocked:t,upgrade:i,blocking:r,terminated:o}={}){const s=indexedDB.open(n,e),a=ze(s);return i&&s.addEventListener("upgradeneeded",c=>{i(ze(s.result),c.oldVersion,c.newVersion,ze(s.transaction),c)}),t&&s.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Zc=["get","getKey","getAll","getAllKeys","count"],el=["put","add","delete","clear"],jn=new Map;function fr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(jn.get(e))return jn.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=el.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Zc.includes(t)))return;const o=async function(s,...a){const c=this.transaction(s,r?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&c.done]))[0]};return jn.set(e,o),o}Gc(n=>({...n,get:(e,t,i)=>fr(e,t)||n.get(e,t,i),has:(e,t)=>!!fr(e,t)||n.has(e,t)}));/**
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
 */class tl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(nl(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function nl(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ii="@firebase/app",hr="0.9.15";/**
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
 */const Ke=new Ei("@firebase/app"),il="@firebase/app-compat",rl="@firebase/analytics-compat",ol="@firebase/analytics",sl="@firebase/app-check-compat",al="@firebase/app-check",cl="@firebase/auth",ll="@firebase/auth-compat",ul="@firebase/database",dl="@firebase/database-compat",fl="@firebase/functions",hl="@firebase/functions-compat",ml="@firebase/installations",pl="@firebase/installations-compat",gl="@firebase/messaging",yl="@firebase/messaging-compat",bl="@firebase/performance",wl="@firebase/performance-compat",vl="@firebase/remote-config",xl="@firebase/remote-config-compat",kl="@firebase/storage",_l="@firebase/storage-compat",El="@firebase/firestore",Il="@firebase/firestore-compat",Tl="firebase",Sl="10.1.0";/**
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
 */const ri="[DEFAULT]",Nl={[ii]:"fire-core",[il]:"fire-core-compat",[ol]:"fire-analytics",[rl]:"fire-analytics-compat",[al]:"fire-app-check",[sl]:"fire-app-check-compat",[cl]:"fire-auth",[ll]:"fire-auth-compat",[ul]:"fire-rtdb",[dl]:"fire-rtdb-compat",[fl]:"fire-fn",[hl]:"fire-fn-compat",[ml]:"fire-iid",[pl]:"fire-iid-compat",[gl]:"fire-fcm",[yl]:"fire-fcm-compat",[bl]:"fire-perf",[wl]:"fire-perf-compat",[vl]:"fire-rc",[xl]:"fire-rc-compat",[kl]:"fire-gcs",[_l]:"fire-gcs-compat",[El]:"fire-fst",[Il]:"fire-fst-compat","fire-js":"fire-js",[Tl]:"fire-js-all"};/**
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
 */const fn=new Map,oi=new Map;function Al(n,e){try{n.container.addComponent(e)}catch(t){Ke.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function at(n){const e=n.name;if(oi.has(e))return Ke.debug(`There were multiple attempts to register component ${e}.`),!1;oi.set(e,n);for(const t of fn.values())Al(t,n);return!0}function Ti(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Cl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ue=new zt("app","Firebase",Cl);/**
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
 */class Rl{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}}/**
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
 */const ft=Sl;function _o(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:ri,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Ue.create("bad-app-name",{appName:String(r)});if(t||(t=wo()),!t)throw Ue.create("no-options");const o=fn.get(r);if(o){if(dn(t,o.options)&&dn(i,o.config))return o;throw Ue.create("duplicate-app",{appName:r})}const s=new zc(r);for(const c of oi.values())s.addComponent(c);const a=new Rl(t,i,s);return fn.set(r,a),a}function Eo(n=ri){const e=fn.get(n);if(!e&&n===ri&&wo())return _o();if(!e)throw Ue.create("no-app",{appName:n});return e}function Ve(n,e,t){var i;let r=(i=Nl[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const o=r.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${r}" with version "${e}":`];o&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ke.warn(a.join(" "));return}at(new Xe(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Pl="firebase-heartbeat-database",Ol=1,At="firebase-heartbeat-store";let Hn=null;function Io(){return Hn||(Hn=Qc(Pl,Ol,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(At)}}}).catch(n=>{throw Ue.create("idb-open",{originalErrorMessage:n.message})})),Hn}async function Ll(n){try{return await(await Io()).transaction(At).objectStore(At).get(To(n))}catch(e){if(e instanceof Re)Ke.warn(e.message);else{const t=Ue.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ke.warn(t.message)}}}async function mr(n,e){try{const i=(await Io()).transaction(At,"readwrite");await i.objectStore(At).put(e,To(n)),await i.done}catch(t){if(t instanceof Re)Ke.warn(t.message);else{const i=Ue.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ke.warn(i.message)}}}function To(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Dl=1024,Ml=30*24*60*60*1e3;class Fl{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new zl(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=pr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=Ml}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pr(),{heartbeatsToSend:t,unsentEntries:i}=Bl(this._heartbeatsCache.heartbeats),r=un(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function pr(){return new Date().toISOString().substring(0,10)}function Bl(n,e=Dl){const t=[];let i=n.slice();for(const r of n){const o=t.find(s=>s.agent===r.agent);if(o){if(o.dates.push(r.date),gr(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),gr(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class zl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sc()?Nc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ll(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return mr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return mr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function gr(n){return un(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ul(n){at(new Xe("platform-logger",e=>new tl(e),"PRIVATE")),at(new Xe("heartbeat",e=>new Fl(e),"PRIVATE")),Ve(ii,hr,n),Ve(ii,hr,"esm2017"),Ve("fire-js","")}Ul("");var Vl="firebase",Wl="10.1.0";/**
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
 */Ve(Vl,Wl,"app");/**
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
 */class ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ne.UNAUTHENTICATED=new ne(null),ne.GOOGLE_CREDENTIALS=new ne("google-credentials-uid"),ne.FIRST_PARTY=new ne("first-party-uid"),ne.MOCK_USER=new ne("mock-user");/**
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
 */let ht="10.1.0";/**
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
 */const ct=new Ei("@firebase/firestore");function hn(n,...e){if(ct.logLevel<=D.DEBUG){const t=e.map(Ni);ct.debug(`Firestore (${ht}): ${n}`,...t)}}function Si(n,...e){if(ct.logLevel<=D.ERROR){const t=e.map(Ni);ct.error(`Firestore (${ht}): ${n}`,...t)}}function So(n,...e){if(ct.logLevel<=D.WARN){const t=e.map(Ni);ct.warn(`Firestore (${ht}): ${n}`,...t)}}function Ni(n){if(typeof n=="string")return n;try{/**
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
 */function We(n="Unexpected state"){const e=`FIRESTORE (${ht}) INTERNAL ASSERTION FAILED: `+n;throw Si(e),new Error(e)}function re(n,e){n||We()}function jl(n,e){return n}/**
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
 */const yr="ok",Hl="cancelled",Et="unknown",M="invalid-argument",$l="deadline-exceeded",ql="not-found",Xl="permission-denied",si="unauthenticated",Kl="resource-exhausted",lt="failed-precondition",Gl="aborted",Jl="out-of-range",Yl="unimplemented",Ql="internal",Zl="unavailable";class N extends Re{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class No{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ne.UNAUTHENTICATED))}shutdown(){}}class tu{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class nu{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(re(typeof e.accessToken=="string"),new No(e.accessToken,new ne(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class iu{constructor(e,t,i){this.t=e,this.i=t,this.o=i,this.type="FirstParty",this.user=ne.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class ru{constructor(e,t,i){this.t=e,this.i=t,this.o=i}getToken(){return Promise.resolve(new iu(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ou{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class su{constructor(e){this.h=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(re(typeof e.token=="string"),new ou(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class au{constructor(e,t,i,r,o,s,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=r,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Ct{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ct("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ct&&e.projectId===this.projectId&&e.database===this.database}}class Rt{constructor(e,t,i){t===void 0?t=0:t>e.length&&We(),i===void 0?i=e.length-t:i>e.length-t&&We(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Rt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Rt?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let r=0;r<i;r++){const o=e.get(r),s=t.get(r);if(o<s)return-1;if(o>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Y extends Rt{construct(e,t,i){return new Y(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new N(M,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(r=>r.length>0))}return new Y(t)}static emptyPath(){return new Y([])}}const cu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class De extends Rt{construct(e,t,i){return new De(e,t,i)}static isValidIdentifier(e){return cu.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),De.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new De(["__name__"])}static fromServerFormat(e){const t=[];let i="",r=0;const o=()=>{if(i.length===0)throw new N(M,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let s=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new N(M,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new N(M,"Path has invalid escape sequence: "+e);i+=c,r+=2}else a==="`"?(s=!s,r++):a!=="."||s?(i+=a,r++):(o(),r++)}if(o(),s)throw new N(M,"Unterminated ` in path: "+e);return new De(t)}static emptyPath(){return new De([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Y.fromString(e))}static fromName(e){return new de(Y.fromString(e).popFirst(5))}static empty(){return new de(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Y.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Y(e.slice()))}}/**
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
 */function lu(n,e,t){if(!t)throw new N(M,`Function ${n}() cannot be called with an empty ${e}.`)}function br(n){if(!de.isDocumentKey(n))throw new N(M,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function uu(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":We()}function Ao(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new N(M,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=uu(n);throw new N(M,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Co(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */let Jt=null;function du(){return Jt===null?Jt=function(){return 268435456+Math.round(2147483648*Math.random())}():Jt++,"0x"+Jt.toString(16)}function wr(n){return n===0&&1/n==-1/0}/**
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
 */const fu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var vr,A;function xr(n){if(n===void 0)return Si("RPC_ERROR","HTTP error has no status"),Et;switch(n){case 200:return yr;case 400:return lt;case 401:return si;case 403:return Xl;case 404:return ql;case 409:return Gl;case 416:return Jl;case 429:return Kl;case 499:return Hl;case 500:return Et;case 501:return Yl;case 503:return Zl;case 504:return $l;default:return n>=200&&n<300?yr:n>=400&&n<500?lt:n>=500&&n<600?Ql:Et}}/**
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
 */(A=vr||(vr={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";class hu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.m=i+"://"+t.host,this.A=`projects/${r}/databases/${o}`,this.T=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${o}`}get P(){return!1}R(t,i,r,o,s){const a=du(),c=this.I(t,i);hn("RestConnection",`Sending RPC '${t}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(u,o,s),this.p(t,c,u,r).then(h=>(hn("RestConnection",`Received RPC '${t}' ${a}: `,h),h),h=>{throw So("RestConnection",`RPC '${t}' ${a} failed with error: `,h,"url: ",c,"request:",r),h})}g(t,i,r,o,s,a){return this.R(t,i,r,o,s)}V(t,i,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ht}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,s)=>t[s]=o),r&&r.headers.forEach((o,s)=>t[s]=o)}I(t,i){const r=fu[t];return`${this.m}/v1/${i}:${r}`}}{constructor(e,t){super(e),this.F=t}v(e,t){throw new Error("Not supported by FetchConnection")}async p(e,t,i,r){var o;const s=JSON.stringify(r);let a;try{a=await this.F(t,{method:"POST",headers:i,body:s})}catch(c){const u=c;throw new N(xr(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);const u=(o=c==null?void 0:c.error)===null||o===void 0?void 0:o.message;throw new N(xr(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}/**
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
 */function mu(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class pu{static C(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=mu(40);for(let o=0;o<r.length;++o)i.length<20&&r[o]<t&&(i+=e.charAt(r[o]%e.length))}return i}}function Pt(n,e){return n<e?-1:n>e?1:0}function gu(n,e,t){return n.length===e.length&&n.every((i,r)=>t(i,e[r]))}/**
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
 */function kr(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ai(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
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
 */class yu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new yu("Invalid base64 string: "+o):o}}(e);return new Ae(t)}static fromUint8Array(e){const t=function(r){let o="";for(let s=0;s<r.length;++s)o+=String.fromCharCode(r[s]);return o}(e);return new Ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const bu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ot(n){if(re(!!n),typeof n=="string"){let e=0;const t=bu.exec(n);if(re(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ie(n.seconds),nanos:ie(n.nanos)}}function ie(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ai(n){return typeof n=="string"?Ae.fromBase64String(n):Ae.fromUint8Array(n)}/**
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
 */class Se{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(M,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(M,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new N(M,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(M,"Timestamp seconds out of range: "+e)}static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new Se(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pt(this.nanoseconds,e.nanoseconds):Pt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function Ro(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Po(n){const e=n.mapValue.fields.__previous_value__;return Ro(e)?Po(e):e}function ci(n){const e=Ot(n.mapValue.fields.__local_write_time__.timestampValue);return new Se(e.seconds,e.nanos)}function li(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ro(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:We()}function ui(n,e){if(n===e)return!0;const t=li(n);if(t!==li(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ci(n).isEqual(ci(e));case 3:return function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const s=Ot(r.timestampValue),a=Ot(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,o){return ai(r.bytesValue).isEqual(ai(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,o){return ie(r.geoPointValue.latitude)===ie(o.geoPointValue.latitude)&&ie(r.geoPointValue.longitude)===ie(o.geoPointValue.longitude)}(n,e);case 2:return function(r,o){if("integerValue"in r&&"integerValue"in o)return ie(r.integerValue)===ie(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){const s=ie(r.doubleValue),a=ie(o.doubleValue);return s===a?wr(s)===wr(a):isNaN(s)&&isNaN(a)}return!1}(n,e);case 9:return gu(n.arrayValue.values||[],e.arrayValue.values||[],ui);case 10:return function(r,o){const s=r.mapValue.fields||{},a=o.mapValue.fields||{};if(kr(s)!==kr(a))return!1;for(const c in s)if(s.hasOwnProperty(c)&&(a[c]===void 0||!ui(s[c],a[c])))return!1;return!0}(n,e);default:return We()}}function $n(n){return!!n&&"mapValue"in n}function It(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ai(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=It(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=It(n.arrayValue.values[t]);return e}return Object.assign({},n)}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Se(0,0))}static max(){return new J(new Se(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class _e{constructor(e){this.value=e}static empty(){return new _e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!$n(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=It(t)}setAll(e){let t=De.emptyPath(),i={},r=[];e.forEach((s,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,i,r),i={},r=[],t=a.popLast()}s?i[a.lastSegment()]=It(s):r.push(a.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,i,r)}delete(e){const t=this.field(e.popLast());$n(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ui(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=t.mapValue.fields[e.get(i)];$n(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,i){Ai(t,(r,o)=>e[r]=o);for(const r of i)delete e[r]}clone(){return new _e(It(this.value))}}/**
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
 */class xe{constructor(e,t,i,r,o,s,a){this.key=e,this.documentType=t,this.version=i,this.readTime=r,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new xe(e,0,J.min(),J.min(),J.min(),_e.empty(),0)}static newFoundDocument(e,t,i,r){return new xe(e,1,t,J.min(),i,r,0)}static newNoDocument(e,t){return new xe(e,2,t,J.min(),J.min(),_e.empty(),0)}static newUnknownDocument(e,t){return new xe(e,3,t,J.min(),J.min(),_e.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_e.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wu{constructor(e,t=null,i=[],r=[],o=null,s="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=c,this.q=null,this.B=null,this.startAt,this.endAt}}class vu{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function qn(n){return re(!!n),J.fromTimestamp(function(t){const i=Ot(t);return new Se(i.seconds,i.nanos)}(n))}function xu(n,e){return function(i){return new Y(["projects",i.projectId,"databases",i.database])}(n).child("documents").child(e).canonicalString()}function ku(n,e){return xu(n.databaseId,e.path)}function _r(n,e){const t=function(r){const o=Y.fromString(r);return re(Oo(o)),o}(e);if(t.get(1)!==n.databaseId.projectId)throw new N(M,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new N(M,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new de(function(r){return re(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}(t))}function _u(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Eu(n,e){return"found"in e?function(i,r){re(!!r.found),r.found.name,r.found.updateTime;const o=_r(i,r.found.name),s=qn(r.found.updateTime),a=r.found.createTime?qn(r.found.createTime):J.min(),c=new _e({mapValue:{fields:r.found.fields}});return xe.newFoundDocument(o,s,a,c)}(n,e):"missing"in e?function(i,r){re(!!r.missing),re(!!r.readTime);const o=_r(i,r.missing),s=qn(r.readTime);return xe.newNoDocument(o,s)}(n,e):We()}function Oo(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function Iu(n){return new vu(n,!0)}/**
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
 */class Tu extends class{}{constructor(e,t,i,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=r,this.Z=!1}X(){if(this.Z)throw new N(lt,"The client has already been terminated.")}R(e,t,i){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.R(e,t,i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===si&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new N(Et,r.toString())})}g(e,t,i,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.g(e,t,i,o,s,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===si&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(Et,o.toString())})}terminate(){this.Z=!0}}async function Su(n,e){const t=jl(n),i=_u(t.serializer)+"/documents",r={documents:e.map(c=>ku(t.serializer,c))},o=await t.g("BatchGetDocuments",i,r,e.length),s=new Map;o.forEach(c=>{const u=Eu(t.serializer,c);s.set(u.key.toString(),u)});const a=[];return e.forEach(c=>{const u=s.get(c.toString());re(!!u),a.push(u)}),a}/**
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
 */const Tt=new Map;function Nu(n){if(n._terminated)throw new N(lt,"The client has already been terminated.");if(!Tt.has(n)){hn("ComponentProvider","Initializing Datastore");const e=function(o){return new hu(o,fetch.bind(null))}(function(o,s,a,c){return new au(o,s,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Co(c.experimentalLongPollingOptions),c.useFetchStreams)}(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),t=Iu(n._databaseId),i=function(o,s,a,c){return new Tu(o,s,a,c)}(n._authCredentials,n._appCheckCredentials,e,t);Tt.set(n,i)}return Tt.get(n)}class Er{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new N(M,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(M,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(o,s,a,c){if(s===!0&&c===!0)throw new N(M,`${o} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Co((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(M,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(M,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(M,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ci{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Er({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(lt,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(lt,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Er(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new eu;switch(i.type){case"firstParty":return new ru(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new N(M,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Tt.get(t);i&&(hn("ComponentProvider","Removing Datastore"),Tt.delete(t),i.terminate())}(this),Promise.resolve()}}function Au(n,e){const t=typeof n=="object"?n:Eo(),i=typeof n=="string"?n:e||"(default)",r=Ti(t,"firestore/lite").getImmediate({identifier:i});if(!r._initialized){const o=vc("firestore");o&&Cu(r,...o)}return r}function Cu(n,e,t,i={}){var r;const o=(n=Ao(n,Ci))._getSettings(),s=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&So("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),i.mockUserToken){let a,c;if(typeof i.mockUserToken=="string")a=i.mockUserToken,c=ne.MOCK_USER;else{a=kc(i.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new N(M,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ne(u)}n._authCredentials=new tu(new No(a,c))}}/**
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
 */class Ri{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ri(this.firestore,e,this._query)}}class Ne{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}}class Lt extends Ri{constructor(e,t,i){super(e,t,function(o){return new wu(o)}(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new de(e))}withConverter(e){return new Lt(this.firestore,e,this._path)}}function Ru(n,e,...t){if(n=fe(n),arguments.length===1&&(e=pu.C()),lu("doc","path",e),n instanceof Ci){const i=Y.fromString(e,...t);return br(i),new Ne(n,null,new de(i))}{if(!(n instanceof Ne||n instanceof Lt))throw new N(M,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Y.fromString(e,...t));return br(i),new Ne(n.firestore,n instanceof Lt?n.converter:null,new de(i))}}/**
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
 */class mn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mn(Ae.fromBase64String(e))}catch(t){throw new N(M,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mn(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Lo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(M,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new De(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Pu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(M,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(M,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pt(this._lat,e._lat)||Pt(this._long,e._long)}}const Ou=new RegExp("[~\\*/\\[\\]]");function Lu(n,e,t){if(e.search(Ou)>=0)throw Ir(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Lo(...e.split("."))._internalPath}catch{throw Ir(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ir(n,e,t,i,r){const o=i&&!i.isEmpty(),s=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${i}`),s&&(c+=` in document ${r}`),c+=")"),new N(M,a+n+c)}/**
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
 */class Do{constructor(e,t,i,r,o){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Du(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Mu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Du extends Do{data(){return super.data()}}function Mu(n,e){return typeof e=="string"?Lu(n,e):e instanceof Lo?e._internalPath:e._delegate._internalPath}class Fu extends class{convertValue(t,i="none"){switch(li(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ie(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,i);case 5:return t.stringValue;case 6:return this.convertBytes(ai(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,i);case 10:return this.convertObject(t.mapValue,i);default:throw We()}}convertObject(t,i){return this.convertObjectMap(t.fields,i)}convertObjectMap(t,i="none"){const r={};return Ai(t,(o,s)=>{r[o]=this.convertValue(s,i)}),r}convertGeoPoint(t){return new Pu(ie(t.latitude),ie(t.longitude))}convertArray(t,i){return(t.values||[]).map(r=>this.convertValue(r,i))}convertServerTimestamp(t,i){switch(i){case"previous":const r=Po(t);return r==null?null:this.convertValue(r,i);case"estimate":return this.convertTimestamp(ci(t));default:return null}}convertTimestamp(t){const i=Ot(t);return new Se(i.seconds,i.nanos)}convertDocumentKey(t,i){const r=Y.fromString(t);re(Oo(r));const o=new Ct(r.get(1),r.get(3)),s=new de(r.popFirst(5));return o.isEqual(i)||Si(`Document ${s} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),s}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new mn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,t)}}function Bu(n){const e=Nu((n=Ao(n,Ne)).firestore),t=new Fu(n.firestore);return Su(e,[n._key]).then(i=>{re(i.length===1);const r=i[0];return new Do(n.firestore,t,n._key,r.isFoundDocument()?r:null,n.converter)})}(function(){(function(t){ht=t})(`${ft}_lite`),at(new Xe("firestore/lite",(e,{instanceIdentifier:t,options:i})=>{const r=e.getProvider("app").getImmediate(),o=new Ci(new nu(e.getProvider("auth-internal")),new su(e.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new N(M,'"projectId" not provided in firebase.initializeApp.');return new Ct(a.options.projectId,c)}(r,t),r);return i&&o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ve("firestore-lite","4.1.0",""),Ve("firestore-lite","4.1.0","esm2017")})();function Pi(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function Mo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zu=Mo,Fo=new zt("auth","Firebase",Mo());/**
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
 */const pn=new Ei("@firebase/auth");function Uu(n,...e){pn.logLevel<=D.WARN&&pn.warn(`Auth (${ft}): ${n}`,...e)}function nn(n,...e){pn.logLevel<=D.ERROR&&pn.error(`Auth (${ft}): ${n}`,...e)}/**
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
 */function ae(n,...e){throw Oi(n,...e)}function me(n,...e){return Oi(n,...e)}function Bo(n,e,t){const i=Object.assign(Object.assign({},zu()),{[e]:t});return new zt("auth","Firebase",i).create(e,{appName:n.name})}function Vu(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&ae(n,"argument-error"),Bo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Oi(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Fo.create(n,...e)}function _(n,e,...t){if(!n)throw Oi(e,...t)}function Ee(n){const e="INTERNAL ASSERTION FAILED: "+n;throw nn(e),new Error(e)}function Ce(n,e){n||Ee(e)}/**
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
 */function di(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Wu(){return Tr()==="http:"||Tr()==="https:"}function Tr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function ju(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wu()||Ec()||"connection"in navigator)?navigator.onLine:!0}function Hu(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Vt{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ce(t>e,"Short delay should be less than long delay!"),this.isMobile=_c()||Ic()}get(){return ju()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Li(n,e){Ce(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class zo{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $u={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qu=new Vt(3e4,6e4);function mt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Qe(n,e,t,i,r={}){return Uo(n,r,async()=>{let o={},s={};i&&(e==="GET"?s=i:o={body:JSON.stringify(i)});const a=Ut(Object.assign({key:n.config.apiKey},s)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),zo.fetch()(Vo(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))})}async function Uo(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},$u),e);try{const r=new Xu(n),o=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Yt(n,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yt(n,"credential-already-in-use",s);if(c==="EMAIL_EXISTS")throw Yt(n,"email-already-in-use",s);if(c==="USER_DISABLED")throw Yt(n,"user-disabled",s);const h=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Bo(n,h,u);ae(n,h)}}catch(r){if(r instanceof Re)throw r;ae(n,"network-request-failed",{message:String(r)})}}async function Wt(n,e,t,i,r={}){const o=await Qe(n,e,t,i,r);return"mfaPendingCredential"in o&&ae(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Vo(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?Li(n.config,r):`${n.config.apiScheme}://${r}`}class Xu{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(me(this.auth,"network-request-failed")),qu.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yt(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=me(n,e,i);return r.customData._tokenResponse=t,r}/**
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
 */async function Ku(n,e){return Qe(n,"POST","/v1/accounts:delete",e)}async function Gu(n,e){return Qe(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function St(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ju(n,e=!1){const t=fe(n),i=await t.getIdToken(e),r=Di(i);_(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:St(Xn(r.auth_time)),issuedAtTime:St(Xn(r.iat)),expirationTime:St(Xn(r.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Xn(n){return Number(n)*1e3}function Di(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return nn("JWT malformed, contained fewer than 3 sections"),null;try{const r=yo(t);return r?JSON.parse(r):(nn("Failed to decode base64 JWT payload"),null)}catch(r){return nn("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Yu(n){const e=Di(n);return _(e,"internal-error"),_(typeof e.exp<"u","internal-error"),_(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ut(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Re&&Qu(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Qu({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Zu{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=St(this.lastLoginAt),this.creationTime=St(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gn(n){var e;const t=n.auth,i=await n.getIdToken(),r=await ut(n,Gu(t,{idToken:i}));_(r==null?void 0:r.users.length,t,"internal-error");const o=r.users[0];n._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?nd(o.providerUserInfo):[],a=td(n.providerData,s),c=n.isAnonymous,u=!(n.email&&o.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Wo(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function ed(n){const e=fe(n);await gn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function td(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function nd(n){return n.map(e=>{var{providerId:t}=e,i=Pi(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function id(n,e){const t=await Uo(n,{},async()=>{const i=Ut({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=n.config,s=Vo(n,r,"/v1/token",`key=${o}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zo.fetch()(s,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class Dt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(typeof e.idToken<"u","internal-error"),_(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:o}=await id(e,t);this.updateTokensAndExpiration(i,r,Number(o))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:o}=t,s=new Dt;return i&&(_(typeof i=="string","internal-error",{appName:e}),s.refreshToken=i),r&&(_(typeof r=="string","internal-error",{appName:e}),s.accessToken=r),o&&(_(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dt,this.toJSON())}_performRefresh(){return Ee("not implemented")}}/**
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
 */function Le(n,e){_(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qe{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,o=Pi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Wo(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await ut(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ju(this,e)}reload(){return ed(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await gn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ut(this,Ku(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,o,s,a,c,u,h;const p=(i=t.displayName)!==null&&i!==void 0?i:void 0,E=(r=t.email)!==null&&r!==void 0?r:void 0,g=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=t.photoURL)!==null&&s!==void 0?s:void 0,w=(a=t.tenantId)!==null&&a!==void 0?a:void 0,z=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,F=(u=t.createdAt)!==null&&u!==void 0?u:void 0,X=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:U,emailVerified:ye,isAnonymous:be,providerData:we,stsTokenManager:L}=t;_(U&&L,e,"internal-error");const K=Dt.fromJSON(this.name,L);_(typeof U=="string",e,"internal-error"),Le(p,e.name),Le(E,e.name),_(typeof ye=="boolean",e,"internal-error"),_(typeof be=="boolean",e,"internal-error"),Le(g,e.name),Le(y,e.name),Le(w,e.name),Le(z,e.name),Le(F,e.name),Le(X,e.name);const gt=new qe({uid:U,auth:e,email:E,emailVerified:ye,displayName:p,isAnonymous:be,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:K,createdAt:F,lastLoginAt:X});return we&&Array.isArray(we)&&(gt.providerData=we.map(Cn=>Object.assign({},Cn))),z&&(gt._redirectEventId=z),gt}static async _fromIdTokenResponse(e,t,i=!1){const r=new Dt;r.updateFromServerResponse(t);const o=new qe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await gn(o),o}}/**
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
 */const Sr=new Map;function Ie(n){Ce(n instanceof Function,"Expected a class definition");let e=Sr.get(n);return e?(Ce(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Sr.set(n,e),e)}/**
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
 */class jo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jo.type="NONE";const Nr=jo;/**
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
 */function rn(n,e,t){return`firebase:${n}:${e}:${t}`}class rt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:o}=this.auth;this.fullUserKey=rn(this.userKey,r.apiKey,o),this.fullPersistenceKey=rn("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new rt(Ie(Nr),e,i);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=r[0]||Ie(Nr);const s=rn(i,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(s);if(h){const p=qe._fromJSON(e,h);u!==o&&(a=p),o=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new rt(o,e,i):(o=c[0],a&&await o._set(s,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new rt(o,e,i))}}/**
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
 */function Ar(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ho(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ko(e))return"Blackberry";if(Go(e))return"Webos";if(Mi(e))return"Safari";if((e.includes("chrome/")||$o(e))&&!e.includes("edge/"))return"Chrome";if(Xo(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ho(n=Q()){return/firefox\//i.test(n)}function Mi(n=Q()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $o(n=Q()){return/crios\//i.test(n)}function qo(n=Q()){return/iemobile/i.test(n)}function Xo(n=Q()){return/android/i.test(n)}function Ko(n=Q()){return/blackberry/i.test(n)}function Go(n=Q()){return/webos/i.test(n)}function Sn(n=Q()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function rd(n=Q()){var e;return Sn(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function od(){return Tc()&&document.documentMode===10}function Jo(n=Q()){return Sn(n)||Xo(n)||Go(n)||Ko(n)||/windows phone/i.test(n)||qo(n)}function sd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Yo(n,e=[]){let t;switch(n){case"Browser":t=Ar(Q());break;case"Worker":t=`${Ar(Q())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ft}/${i}`}async function Qo(n,e){return Qe(n,"GET","/v2/recaptchaConfig",mt(n,e))}function Cr(n){return n!==void 0&&n.enterprise!==void 0}class Zo{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function ad(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function es(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const o=me("internal-error");o.customData=r,t(o)},i.type="text/javascript",i.charset="UTF-8",ad().appendChild(i)})}function cd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const ld="https://www.google.com/recaptcha/enterprise.js?render=",ud="recaptcha-enterprise",dd="NO_RECAPTCHA";class ts{constructor(e){this.type=ud,this.auth=Ze(e)}async verify(e="verify",t=!1){async function i(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{Qo(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Zo(c);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(c=>{a(c)})})}function r(o,s,a){const c=window.grecaptcha;Cr(c)?c.enterprise.ready(()=>{c.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(dd)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{i(this.auth).then(a=>{if(!t&&Cr(window.grecaptcha))r(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}es(ld+a).then(()=>{r(a,o,s)}).catch(c=>{s(c)})}}).catch(a=>{s(a)})})}}async function yn(n,e,t,i=!1){const r=new ts(n);let o;try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const s=Object.assign({},e);return i?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
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
 */class fd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=o=>new Promise((s,a)=>{try{const c=e(o);s(c)}catch(c){a(c)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class hd{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rr(this),this.idTokenSubscription=new Rr(this),this.beforeStateQueue=new fd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ie(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await rt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let r=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!s||s===a)&&(c!=null&&c.user)&&(r=c.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await gn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hu()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?fe(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ie(e))})}async initializeRecaptchaConfig(){const e=await Qo(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Zo(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new ts(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zt("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ie(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await rt.create(this,[Ie(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return _(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof t=="function"?e.addObserver(t,i,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Uu(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ze(n){return fe(n)}class Rr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Oc(t=>this.observer=t)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function md(n,e){const t=Ti(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),o=t.getOptions();if(dn(o,e??{}))return r;ae(r,"already-initialized")}return t.initialize({options:e})}function pd(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ie);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function gd(n,e,t){const i=Ze(n);_(i._canInitEmulator,i,"emulator-config-failed"),_(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),o=ns(e),{host:s,port:a}=yd(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${o}//${s}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||bd()}function ns(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function yd(n){const e=ns(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const o=r[1];return{host:o,port:Pr(i.substr(o.length+1))}}else{const[o,s]=i.split(":");return{host:o,port:Pr(s)}}}function Pr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function bd(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Fi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ee("not implemented")}_getIdTokenResponse(e){return Ee("not implemented")}_linkToIdToken(e,t){return Ee("not implemented")}_getReauthenticationResolver(e){return Ee("not implemented")}}async function wd(n,e){return Qe(n,"POST","/v1/accounts:update",e)}/**
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
 */async function Kn(n,e){return Wt(n,"POST","/v1/accounts:signInWithPassword",mt(n,e))}/**
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
 */async function vd(n,e){return Wt(n,"POST","/v1/accounts:signInWithEmailLink",mt(n,e))}async function xd(n,e){return Wt(n,"POST","/v1/accounts:signInWithEmailLink",mt(n,e))}/**
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
 */class Mt extends Fi{constructor(e,t,i,r=null){super("password",i),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Mt(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Mt(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const r=await yn(e,i,"signInWithPassword");return Kn(e,r)}else return Kn(e,i).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const o=await yn(e,i,"signInWithPassword");return Kn(e,o)}else return Promise.reject(r)});case"emailLink":return vd(e,{email:this._email,oobCode:this._password});default:ae(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return wd(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xd(e,{idToken:t,email:this._email,oobCode:this._password});default:ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ot(n,e){return Wt(n,"POST","/v1/accounts:signInWithIdp",mt(n,e))}/**
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
 */const kd="http://localhost";class Ge extends Fi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ge(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ae("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,o=Pi(t,["providerId","signInMethod"]);if(!i||!r)return null;const s=new Ge(i,r);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return ot(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ot(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ot(e,t)}buildRequest(){const e={requestUri:kd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ut(t)}return e}}/**
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
 */function _d(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ed(n){const e=vt(xt(n)).link,t=e?vt(xt(e)).deep_link_id:null,i=vt(xt(n)).deep_link_id;return(i?vt(xt(i)).link:null)||i||t||e||n}class Bi{constructor(e){var t,i,r,o,s,a;const c=vt(xt(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,h=(i=c.oobCode)!==null&&i!==void 0?i:null,p=_d((r=c.mode)!==null&&r!==void 0?r:null);_(u&&h&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=h,this.continueUrl=(o=c.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=c.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Ed(e);try{return new Bi(t)}catch{return null}}}/**
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
 */class pt{constructor(){this.providerId=pt.PROVIDER_ID}static credential(e,t){return Mt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Bi.parseLink(t);return _(i,"argument-error"),Mt._fromEmailAndCode(e,i.code,i.tenantId)}}pt.PROVIDER_ID="password";pt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class zi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jt extends zi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Me extends jt{constructor(){super("facebook.com")}static credential(e){return Ge._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Me.credential(e.oauthAccessToken)}catch{return null}}}Me.FACEBOOK_SIGN_IN_METHOD="facebook.com";Me.PROVIDER_ID="facebook.com";/**
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
 */class ue extends jt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ge._fromParams({providerId:ue.PROVIDER_ID,signInMethod:ue.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ue.credentialFromTaggedObject(e)}static credentialFromError(e){return ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ue.credential(t,i)}catch{return null}}}ue.GOOGLE_SIGN_IN_METHOD="google.com";ue.PROVIDER_ID="google.com";/**
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
 */class Fe extends jt{constructor(){super("github.com")}static credential(e){return Ge._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch{return null}}}Fe.GITHUB_SIGN_IN_METHOD="github.com";Fe.PROVIDER_ID="github.com";/**
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
 */class Be extends jt{constructor(){super("twitter.com")}static credential(e,t){return Ge._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Be.credential(t,i)}catch{return null}}}Be.TWITTER_SIGN_IN_METHOD="twitter.com";Be.PROVIDER_ID="twitter.com";/**
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
 */async function Gn(n,e){return Wt(n,"POST","/v1/accounts:signUp",mt(n,e))}/**
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
 */class Je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const o=await qe._fromIdTokenResponse(e,i,r),s=Or(i);return new Je({user:o,providerId:s,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=Or(i);return new Je({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function Or(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class bn extends Re{constructor(e,t,i,r){var o;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,bn.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new bn(e,t,i,r)}}function is(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?bn._fromErrorAndOperation(n,o,e,i):o})}async function Id(n,e,t=!1){const i=await ut(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Je._forOperation(n,"link",i)}/**
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
 */async function Td(n,e,t=!1){const{auth:i}=n,r="reauthenticate";try{const o=await ut(n,is(i,r,e,n),t);_(o.idToken,i,"internal-error");const s=Di(o.idToken);_(s,i,"internal-error");const{sub:a}=s;return _(n.uid===a,i,"user-mismatch"),Je._forOperation(n,r,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&ae(i,"user-mismatch"),o}}/**
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
 */async function rs(n,e,t=!1){const i="signIn",r=await is(n,i,e),o=await Je._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(o.user),o}async function Sd(n,e){return rs(Ze(n),e)}async function Nd(n,e,t){var i;const r=Ze(n),o={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let s;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const u=await yn(r,o,"signUpPassword");s=Gn(r,u)}else s=Gn(r,o).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const h=await yn(r,o,"signUpPassword");return Gn(r,h)}else return Promise.reject(u)});const a=await s.catch(u=>Promise.reject(u)),c=await Je._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function Ad(n,e,t){return Sd(fe(n),pt.credential(e,t))}/**
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
 */async function Cd(n,e){return Qe(n,"POST","/v1/accounts:update",e)}/**
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
 */async function Rd(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=fe(n),o={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},s=await ut(i,Cd(i.auth,o));i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null;const a=i.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(s)}function Pd(n,e,t,i){return fe(n).onIdTokenChanged(e,t,i)}function Od(n,e,t){return fe(n).beforeAuthStateChanged(e,t)}function Ld(n,e,t,i){return fe(n).onAuthStateChanged(e,t,i)}function Dd(n){return fe(n).signOut()}const wn="__sak";/**
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
 */class os{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(wn,"1"),this.storage.removeItem(wn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Md(){const n=Q();return Mi(n)||Sn(n)}const Fd=1e3,Bd=10;class ss extends os{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Md()&&sd(),this.fallbackToPolling=Jo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((s,a,c)=>{this.notifyListeners(s,c)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(i);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const s=this.storage.getItem(i);!t&&this.localCache[i]===s||this.notifyListeners(i,s)},o=this.storage.getItem(i);od()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Bd):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Fd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ss.type="LOCAL";const zd=ss;/**
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
 */class as extends os{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}as.type="SESSION";const cs=as;/**
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
 */function Ud(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Nn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new Nn(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:o}=t.data,s=this.handlersMap[r];if(!(s!=null&&s.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(s).map(async u=>u(t.origin,o)),c=await Ud(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nn.receivers=[];/**
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
 */function Ui(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Vd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,s;return new Promise((a,c)=>{const u=Ui("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},i);s={messageChannel:r,onMessage(p){const E=p;if(E.data.eventId===u)switch(E.data.status){case"ack":clearTimeout(h),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(E.data.response);break;default:clearTimeout(h),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function pe(){return window}function Wd(n){pe().location.href=n}/**
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
 */function ls(){return typeof pe().WorkerGlobalScope<"u"&&typeof pe().importScripts=="function"}async function jd(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hd(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function $d(){return ls()?self:null}/**
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
 */const us="firebaseLocalStorageDb",qd=1,vn="firebaseLocalStorage",ds="fbase_key";class Ht{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function An(n,e){return n.transaction([vn],e?"readwrite":"readonly").objectStore(vn)}function Xd(){const n=indexedDB.deleteDatabase(us);return new Ht(n).toPromise()}function fi(){const n=indexedDB.open(us,qd);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(vn,{keyPath:ds})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(vn)?e(i):(i.close(),await Xd(),e(await fi()))})})}async function Lr(n,e,t){const i=An(n,!0).put({[ds]:e,value:t});return new Ht(i).toPromise()}async function Kd(n,e){const t=An(n,!1).get(e),i=await new Ht(t).toPromise();return i===void 0?null:i.value}function Dr(n,e){const t=An(n,!0).delete(e);return new Ht(t).toPromise()}const Gd=800,Jd=3;class fs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Jd)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ls()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nn._getInstance($d()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await jd(),!this.activeServiceWorker)return;this.sender=new Vd(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fi();return await Lr(e,wn,"1"),await Dr(e,wn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Lr(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Kd(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=An(r,!1).getAll();return new Ht(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:r,value:o}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fs.type="LOCAL";const Yd=fs;new Vt(3e4,6e4);/**
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
 */function hs(n,e){return e?Ie(e):(_(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Vi extends Fi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ot(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ot(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ot(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Qd(n){return rs(n.auth,new Vi(n),n.bypassAuthState)}function Zd(n){const{auth:e,user:t}=n;return _(t,e,"internal-error"),Td(t,new Vi(n),n.bypassAuthState)}async function ef(n){const{auth:e,user:t}=n;return _(t,e,"internal-error"),Id(t,new Vi(n),n.bypassAuthState)}/**
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
 */class ms{constructor(e,t,i,r,o=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qd;case"linkViaPopup":case"linkViaRedirect":return ef;case"reauthViaPopup":case"reauthViaRedirect":return Zd;default:ae(this.auth,"internal-error")}}resolve(e){Ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tf=new Vt(2e3,1e4);async function nf(n,e,t){const i=Ze(n);Vu(n,e,zi);const r=hs(i,t);return new $e(i,"signInViaPopup",e,r).executeNotNull()}class $e extends ms{constructor(e,t,i,r,o){super(e,t,r,o),this.provider=i,this.authWindow=null,this.pollId=null,$e.currentPopupAction&&$e.currentPopupAction.cancel(),$e.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){Ce(this.filter.length===1,"Popup operations only handle one event");const e=Ui();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$e.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tf.get())};e()}}$e.currentPopupAction=null;/**
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
 */const rf="pendingRedirect",on=new Map;class of extends ms{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=on.get(this.auth._key());if(!e){try{const i=await sf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}on.set(this.auth._key(),e)}return this.bypassAuthState||on.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sf(n,e){const t=lf(e),i=cf(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function af(n,e){on.set(n._key(),e)}function cf(n){return Ie(n._redirectPersistence)}function lf(n){return rn(rf,n.config.apiKey,n.name)}async function uf(n,e,t=!1){const i=Ze(n),r=hs(i,e),s=await new of(i,r,t).execute();return s&&!t&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,e)),s}/**
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
 */const df=10*60*1e3;class ff{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!ps(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(me(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=df&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mr(e))}saveEventToCache(e){this.cachedEventUids.add(Mr(e)),this.lastProcessedEventTime=Date.now()}}function Mr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ps({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ps(n);default:return!1}}/**
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
 */async function mf(n,e={}){return Qe(n,"GET","/v1/projects",e)}/**
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
 */const pf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gf=/^https?/;async function yf(n){if(n.config.emulator)return;const{authorizedDomains:e}=await mf(n);for(const t of e)try{if(bf(t))return}catch{}ae(n,"unauthorized-domain")}function bf(n){const e=di(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const s=new URL(n);return s.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&s.hostname===i}if(!gf.test(t))return!1;if(pf.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const wf=new Vt(3e4,6e4);function Fr(){const n=pe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function vf(n){return new Promise((e,t)=>{var i,r,o;function s(){Fr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fr(),t(me(n,"network-request-failed"))},timeout:wf.get()})}if(!((r=(i=pe().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((o=pe().gapi)===null||o===void 0)&&o.load)s();else{const a=cd("iframefcb");return pe()[a]=()=>{gapi.load?s():t(me(n,"network-request-failed"))},es(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw sn=null,e})}let sn=null;function xf(n){return sn=sn||vf(n),sn}/**
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
 */const kf=new Vt(5e3,15e3),_f="__/auth/iframe",Ef="emulator/auth/iframe",If={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sf(n){const e=n.config;_(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Li(e,Ef):`https://${n.config.authDomain}/${_f}`,i={apiKey:e.apiKey,appName:n.name,v:ft},r=Tf.get(n.config.apiHost);r&&(i.eid=r);const o=n._getFrameworks();return o.length&&(i.fw=o.join(",")),`${t}?${Ut(i).slice(1)}`}async function Nf(n){const e=await xf(n),t=pe().gapi;return _(t,n,"internal-error"),e.open({where:document.body,url:Sf(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:If,dontclear:!0},i=>new Promise(async(r,o)=>{await i.restyle({setHideOnLeave:!1});const s=me(n,"network-request-failed"),a=pe().setTimeout(()=>{o(s)},kf.get());function c(){pe().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{o(s)})}))}/**
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
 */const Af={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cf=500,Rf=600,Pf="_blank",Of="http://localhost";class Br{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Lf(n,e,t,i=Cf,r=Rf){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Af),{width:i.toString(),height:r.toString(),top:o,left:s}),u=Q().toLowerCase();t&&(a=$o(u)?Pf:t),Ho(u)&&(e=e||Of,c.scrollbars="yes");const h=Object.entries(c).reduce((E,[g,y])=>`${E}${g}=${y},`,"");if(rd(u)&&a!=="_self")return Df(e||"",a),new Br(null);const p=window.open(e||"",a,h);_(p,n,"popup-blocked");try{p.focus()}catch{}return new Br(p)}function Df(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Mf="__/auth/handler",Ff="emulator/auth/handler",Bf=encodeURIComponent("fac");async function zr(n,e,t,i,r,o){_(n.config.authDomain,n,"auth-domain-config-required"),_(n.config.apiKey,n,"invalid-api-key");const s={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ft,eventId:r};if(e instanceof zi){e.setDefaultLanguage(n.languageCode),s.providerId=e.providerId||"",Pc(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries(o||{}))s[h]=p}if(e instanceof jt){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(s.scopes=h.join(","))}n.tenantId&&(s.tid=n.tenantId);const a=s;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await n._getAppCheckToken(),u=c?`#${Bf}=${encodeURIComponent(c)}`:"";return`${zf(n)}?${Ut(a).slice(1)}${u}`}function zf({config:n}){return n.emulator?Li(n,Ff):`https://${n.authDomain}/${Mf}`}/**
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
 */const Jn="webStorageSupport";class Uf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cs,this._completeRedirectFn=uf,this._overrideRedirectResult=af}async _openPopup(e,t,i,r){var o;Ce((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await zr(e,t,i,di(),r);return Lf(e,s,Ui())}async _openRedirect(e,t,i,r){await this._originValidation(e);const o=await zr(e,t,i,di(),r);return Wd(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:o}=this.eventManagers[t];return r?Promise.resolve(r):(Ce(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Nf(e),i=new ff(e);return t.register("authEvent",r=>(_(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Jn,{type:Jn},r=>{var o;const s=(o=r==null?void 0:r[0])===null||o===void 0?void 0:o[Jn];s!==void 0&&t(!!s),ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jo()||Mi()||Sn()}}const Vf=Uf;var Ur="@firebase/auth",Vr="1.1.0";/**
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
 */class Wf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jf(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Hf(n){at(new Xe("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=i.options;_(s&&!s.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:s,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yo(n)},u=new hd(i,r,o,c);return pd(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),at(new Xe("auth-internal",e=>{const t=Ze(e.getProvider("auth").getImmediate());return(i=>new Wf(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ve(Ur,Vr,jf(n)),Ve(Ur,Vr,"esm2017")}/**
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
 */const $f=5*60,qf=vo("authIdTokenMaxAge")||$f;let Wr=null;const Xf=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>qf)return;const r=t==null?void 0:t.token;Wr!==r&&(Wr=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Kf(n=Eo()){const e=Ti(n,"auth");if(e.isInitialized())return e.getImmediate();const t=md(n,{popupRedirectResolver:Vf,persistence:[Yd,zd,cs]}),i=vo("authTokenSyncURL");if(i){const o=Xf(i);Od(t,o,()=>o(t.currentUser)),Pd(t,s=>o(s))}const r=bo("auth");return r&&gd(t,`http://${r}`),t}Hf("Browser");const Gf={apiKey:"AIzaSyCJ7bTyjKvQtJTxa9hFVg3AHb0bG9xVu8w",authDomain:"lets-do-it-bookshelf.firebaseapp.com",projectId:"lets-do-it-bookshelf",storageBucket:"lets-do-it-bookshelf.appspot.com",messagingSenderId:"961226885770",appId:"1:961226885770:web:a9fbb77bee4dd760353b73"},Jf=_o(Gf),Yf=Au(Jf);async function Qf(n){const e=Ru(Yf,"users",n),t=await Bu(e);if(t.exists())return console.log("Document data:",t.data()),t.data();console.log("No such document!")}const Ye=Kf();Ld(Ye,n=>{if(n){const e=n.uid;console.log(e,n),Zf(n),Qf(e).then(t=>{})}else document.querySelector(".sing-wrap").style.display="",document.querySelector(".log-out-wrap").style.display="none"});function Zf(n){const e=document.querySelector(".user-text");e.textContent=n.displayName,document.querySelector(".user-image img").src=n.photoURL??"/img/noimage.png",document.querySelector(".user-image img").alt=n.displayName,document.querySelector(".log-out-wrap").style.display="",document.querySelector(".sing-wrap").style.display="none"}function eh(){signUpForm.email.value.length<6||Nd(Ye,signUpForm.email.value,signUpForm.password.value).then(n=>{const e=n.user,t=th();oh(signUpForm.name.value,t),_t.close(),console.log(e)}).catch(n=>{n.code,n.message,console.dir(n)})}function th(n=null){return null}function nh(){signInForm.email.value.length<6||Ad(Ye,signInForm.email.value,signInForm.password.value).then(n=>{const e=n.user;console.log(e),it.close()}).catch(n=>{const e=n.code,t=n.message;console.dir(n,e,t),alert(t)})}function ih(){const n=new ue;nf(Ye,n).then(e=>{ue.credentialFromResult(e).accessToken,e.user,it.close()}).catch(e=>{e.code,e.message,e.customData.email,ue.credentialFromError(e)})}function rh(){Dd(Ye).then(()=>{}).catch(n=>{})}function oh(n=null,e=null){Rd(Ye.currentUser,{displayName:n,photoURL:e}).then(()=>{document.querySelector(".user-name").textContent=n,document.querySelector(".user-image img").src=e??"/img/noimage.png",console.log(Ye.currentUser)}).catch(t=>{})}document.addEventListener("click",sh);function sh(n){n.target.closest(".modal-close-btn")&&(_t.close(),it.close()),n.target.closest("[data-sign-up]")&&(_t.show(),it.close()),n.target.closest("[data-sign-in]")&&(_t.close(),it.show()),n.target.closest(".log-out-btn")&&rh(),n.target.closest(".sign-in-btn")&&nh(),n.target.closest("[data-g-sign-in]")&&ih(),n.target.closest(".sign-up-btn")&&eh()}
