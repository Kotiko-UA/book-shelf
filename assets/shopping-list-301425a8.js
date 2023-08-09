import{g as ot,s as X,h as J,l as lt,i as ut,j as ct,r as ft,u as pt,k as ht,o as gt,m as dt,n as vt,p as mt,a as xt,b as yt,c as Et,d as Pt}from"./auth_user_bar-ca782ac8.js";var Q={exports:{}};/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */(function(x,M){(function(m,e){x.exports=e()})(window,function(){return function(l){var m={};function e(s){if(m[s])return m[s].exports;var i=m[s]={i:s,l:!1,exports:{}};return l[s].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=l,e.c=m,e.d=function(s,i,f){e.o(s,i)||Object.defineProperty(s,i,{enumerable:!0,get:f})},e.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},e.t=function(s,i){if(i&1&&(s=e(s)),i&8||i&4&&typeof s=="object"&&s&&s.__esModule)return s;var f=Object.create(null);if(e.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:s}),i&2&&typeof s!="string")for(var p in s)e.d(f,p,(function(a){return s[a]}).bind(null,p));return f},e.n=function(s){var i=s&&s.__esModule?function(){return s.default}:function(){return s};return e.d(i,"a",i),i},e.o=function(s,i){return Object.prototype.hasOwnProperty.call(s,i)},e.p="dist",e(e.s=10)}([function(l,m,e){function s(i,f){var p=Object.prototype.hasOwnProperty,a,c,g,_;for(g=1,_=arguments.length;g<_;g+=1){a=arguments[g];for(c in a)p.call(a,c)&&(i[c]=a[c])}return i}l.exports=s},function(l,m,e){function s(i){return i===void 0}l.exports=s},function(l,m,e){function s(i){return i instanceof Array}l.exports=s},function(l,m,e){var s=e(2),i=e(17),f=e(6);function p(a,c,g){s(a)?i(a,c,g):f(a,c,g)}l.exports=p},function(l,m,e){function s(i){return typeof i=="string"||i instanceof String}l.exports=s},function(l,m,e){function s(i){return i instanceof Function}l.exports=s},function(l,m,e){function s(i,f,p){var a;p=p||null;for(a in i)if(i.hasOwnProperty(a)&&f.call(p,i[a],a,i)===!1)break}l.exports=s},function(l,m,e){var s=e(18),i=e(0);function f(p,a){var c;return a||(a=p,p=null),c=a.init||function(){},p&&s(c,p),a.hasOwnProperty("static")&&(i(c,a.static),delete a.static),i(c.prototype,a),c}l.exports=f},function(l,m,e){var s=e(2);function i(f,p,a){var c,g;if(a=a||0,!s(p))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(p,f,a);for(g=p.length,c=a;a>=0&&c<g;c+=1)if(p[c]===f)return c;return-1}l.exports=i},function(l,m,e){var s=e(29),i=e(30),f=e(5),p={capitalizeFirstLetter:function(a){return a.substring(0,1).toUpperCase()+a.substring(1,a.length)},isContained:function(a,c){return c?a===c?!0:c.contains(a):!1},createElementByTemplate:function(a,c){var g=document.createElement("div"),_=f(a)?a(c):s(a,c);return g.innerHTML=_,g.firstChild},bind:function(a,c){var g=Array.prototype.slice,_;return a.bind?a.bind.apply(a,g.call(arguments,1)):(_=g.call(arguments,2),function(){return a.apply(c,_.length?_.concat(g.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};l.exports=p},function(l,m,e){e(11),l.exports=e(12)},function(l,m,e){},function(l,m,e){var s=e(13),i=e(7),f=e(0),p=e(1),a=e(20),c=e(9),g={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},_=i({init:function(r,t){this._options=f({},g,t),this._currentPage=0,this._view=new a(r,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(r){this._currentPage=r||this._options.page},_getLastPage:function(){var r=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return r||1},_getPageIndex:function(r){var t,n;return this._options.centerAlign?(t=Math.floor(this._options.visiblePages/2),n=r-t,n=Math.max(n,1),n=Math.min(n,this._getLastPage()-this._options.visiblePages+1),n):Math.ceil(r/this._options.visiblePages)},_getRelativePage:function(r){var t=r==="prev",n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(r){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,o=r==="prev",h;return this._options.centerAlign?h=o?t-1:t+n:h=o?(t-1)*n:t*n+1,h},_convertToValidPage:function(r){var t=this._getLastPage();return r=Math.max(r,1),r=Math.min(r,t),r},_paginate:function(r){var t=this._makeViewData(r||this._options.page);this._setCurrentPage(r),this._view.update(t)},_makeViewData:function(r){var t={},n=this._getLastPage(),o=this._getPageIndex(r),h=this._getPageIndex(n),b=this._getEdge(r);return t.leftPageNumber=b.left,t.rightPageNumber=b.right,t.prevMore=o>1,t.nextMore=o<h,t.page=r,t.currentPageIndex=r,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(r){var t,n,o,h=this._getLastPage(),b=this._options.visiblePages,L=this._getPageIndex(r);return this._options.centerAlign?(o=Math.floor(b/2),t=Math.max(r-o,1),n=t+b-1,n>h&&(t=Math.max(h-b+1,1),n=h)):(t=(L-1)*b+1,n=L*b,n=Math.min(n,h)),{left:t,right:n}},_onClickHandler:function(r,t){switch(r){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(r){p(r)&&(r=this._options.totalItems),this._options.totalItems=r,this._paginate(1)},movePageTo:function(r){r=this._convertToValidPage(r),this.invoke("beforeMove",{page:r})&&(this._paginate(r),this.fire("afterMove",{page:r}))},setTotalItems:function(r){this._options.totalItems=r},setItemsPerPage:function(r){this._options.itemsPerPage=r},getCurrentPage:function(){return this._currentPage||this._options.page}});s.mixin(_),l.exports=_},function(l,m,e){var s=e(0),i=e(14),f=e(4),p=e(16),a=e(2),c=e(5),g=e(3),_=/\s+/g;function r(){this.events=null,this.contexts=null}r.mixin=function(t){s(t.prototype,r.prototype)},r.prototype._getHandlerItem=function(t,n){var o={handler:t};return n&&(o.context=n),o},r.prototype._safeEvent=function(t){var n=this.events,o;return n||(n=this.events={}),t&&(o=n[t],o||(o=[],n[t]=o),n=o),n},r.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},r.prototype._indexOfContext=function(t){for(var n=this._safeContext(),o=0;n[o];){if(t===n[o][0])return o;o+=1}return-1},r.prototype._memorizeContext=function(t){var n,o;i(t)&&(n=this._safeContext(),o=this._indexOfContext(t),o>-1?n[o][1]+=1:n.push([t,1]))},r.prototype._forgetContext=function(t){var n,o;i(t)&&(n=this._safeContext(),o=this._indexOfContext(t),o>-1&&(n[o][1]-=1,n[o][1]<=0&&n.splice(o,1)))},r.prototype._bindEvent=function(t,n,o){var h=this._safeEvent(t);this._memorizeContext(o),h.push(this._getHandlerItem(n,o))},r.prototype.on=function(t,n,o){var h=this;f(t)?(t=t.split(_),g(t,function(b){h._bindEvent(b,n,o)})):p(t)&&(o=n,g(t,function(b,L){h.on(L,b,o)}))},r.prototype.once=function(t,n,o){var h=this;if(p(t)){o=n,g(t,function(L,u){h.once(u,L,o)});return}function b(){n.apply(o,arguments),h.off(t,b,o)}this.on(t,b,o)},r.prototype._spliceMatches=function(t,n){var o=0,h;if(a(t))for(h=t.length;o<h;o+=1)n(t[o])===!0&&(t.splice(o,1),h-=1,o-=1)},r.prototype._matchHandler=function(t){var n=this;return function(o){var h=t===o.handler;return h&&n._forgetContext(o.context),h}},r.prototype._matchContext=function(t){var n=this;return function(o){var h=t===o.context;return h&&n._forgetContext(o.context),h}},r.prototype._matchHandlerAndContext=function(t,n){var o=this;return function(h){var b=t===h.handler,L=n===h.context,u=b&&L;return u&&o._forgetContext(h.context),u}},r.prototype._offByEventName=function(t,n){var o=this,h=c(n),b=o._matchHandler(n);t=t.split(_),g(t,function(L){var u=o._safeEvent(L);h?o._spliceMatches(u,b):(g(u,function(d){o._forgetContext(d.context)}),o.events[L]=[])})},r.prototype._offByHandler=function(t){var n=this,o=this._matchHandler(t);g(this._safeEvent(),function(h){n._spliceMatches(h,o)})},r.prototype._offByObject=function(t,n){var o=this,h;this._indexOfContext(t)<0?g(t,function(b,L){o.off(L,b)}):f(n)?(h=this._matchContext(t),o._spliceMatches(this._safeEvent(n),h)):c(n)?(h=this._matchHandlerAndContext(n,t),g(this._safeEvent(),function(b){o._spliceMatches(b,h)})):(h=this._matchContext(t),g(this._safeEvent(),function(b){o._spliceMatches(b,h)}))},r.prototype.off=function(t,n){f(t)?this._offByEventName(t,n):arguments.length?c(t)?this._offByHandler(t):p(t)&&this._offByObject(t,n):(this.events={},this.contexts=[])},r.prototype.fire=function(t){this.invoke.apply(this,arguments)},r.prototype.invoke=function(t){var n,o,h,b;if(!this.hasListener(t))return!0;for(n=this._safeEvent(t),o=Array.prototype.slice.call(arguments,1),h=0;n[h];){if(b=n[h],b.handler.apply(b.context,o)===!1)return!1;h+=1}return!0},r.prototype.hasListener=function(t){return this.getListenerLength(t)>0},r.prototype.getListenerLength=function(t){var n=this._safeEvent(t);return n.length},l.exports=r},function(l,m,e){var s=e(1),i=e(15);function f(p){return!s(p)&&!i(p)}l.exports=f},function(l,m,e){function s(i){return i===null}l.exports=s},function(l,m,e){function s(i){return i===Object(i)}l.exports=s},function(l,m,e){function s(i,f,p){var a=0,c=i.length;for(p=p||null;a<c&&f.call(p,i[a],a,i)!==!1;a+=1);}l.exports=s},function(l,m,e){var s=e(19);function i(f,p){var a=s(p.prototype);a.constructor=f,f.prototype=a}l.exports=i},function(l,m,e){function s(i){function f(){}return f.prototype=i,new f}l.exports=s},function(l,m,e){var s=e(3),i=e(7),f=e(21),p=e(22),a=e(24),c=e(25),g=e(0),_=e(4),r=e(28),t=e(9),n={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},o=["first","prev","next","last"],h=["prev","next"],b="The container element is invalid.",L=i({init:function(u,d,S){this._containerElement=null,this._firstItemClassName=d.firstItemClassName,this._lastItemClassName=d.lastItemClassName,this._template=g({},n,d.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(u),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(S)},_setRootElement:function(u){if(_(u)?u=document.getElementById(u)||document.querySelector(u):u.jquery&&(u=u[0]),!r(u))throw new Error(b);this._containerElement=u},_setMoveButtons:function(){s(o,function(u){this._buttons[u]=t.createElementByTemplate(this._template.moveButton,{type:u})},this)},_setDisabledMoveButtons:function(){s(o,function(u){var d="disabled"+t.capitalizeFirstLetter(u);this._buttons[d]=t.createElementByTemplate(this._template.disabledMoveButton,{type:u})},this)},_setMoreButtons:function(){s(h,function(u){var d=u+"More";this._buttons[d]=t.createElementByTemplate(this._template.moreButton,{type:u})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(u){var d;u.page>1?d=this._buttons.first:d=this._buttons.disabledFirst,this._getContainerElement().appendChild(d)},_appendPrevButton:function(u){var d;u.currentPageIndex>1?d=this._buttons.prev:d=this._buttons.disabledPrev,this._getContainerElement().appendChild(d)},_appendNextButton:function(u){var d;u.currentPageIndex<u.lastPageListIndex?d=this._buttons.next:d=this._buttons.disabledNext,this._getContainerElement().appendChild(d)},_appendLastButton:function(u){var d;u.page<u.lastPage?d=this._buttons.last:d=this._buttons.disabledLast,this._getContainerElement().appendChild(d)},_appendPrevMoreButton:function(u){var d;u.prevMore&&(d=this._buttons.prevMore,c(d,this._firstItemClassName),this._getContainerElement().appendChild(d))},_appendNextMoreButton:function(u){var d;u.nextMore&&(d=this._buttons.nextMore,c(d,this._lastItemClassName),this._getContainerElement().appendChild(d))},_appendPages:function(u){var d=u.leftPageNumber,S=u.rightPageNumber,O,N;for(N=d;N<=S;N+=1)N===u.page?O=t.createElementByTemplate(this._template.currentPage,{page:N}):(O=t.createElementByTemplate(this._template.page,{page:N}),this._enabledPageElements.push(O)),N===d&&!u.prevMore&&c(O,this._firstItemClassName),N===S&&!u.nextMore&&c(O,this._lastItemClassName),this._getContainerElement().appendChild(O)},_attachClickEvent:function(u){var d=this._getContainerElement();p(d,"click",function(S){var O=f(S),N,F;a(S),F=this._getButtonType(O),F||(N=this._getPageNumber(O)),u(F,N)},this)},_getButtonType:function(u){var d,S=this._buttons;return s(S,function(O,N){return t.isContained(u,O)?(d=N,!1):!0},this),d},_getPageNumber:function(u){var d=this._findPageElement(u),S;return d&&(S=parseInt(d.innerText,10)),S},_findPageElement:function(u){for(var d=0,S=this._enabledPageElements.length,O;d<S;d+=1)if(O=this._enabledPageElements[d],t.isContained(u,O))return O;return null},_empty:function(){this._enabledPageElements=[],s(this._buttons,function(u,d){this._buttons[d]=u.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(u){this._empty(),this._appendFirstButton(u),this._appendPrevButton(u),this._appendPrevMoreButton(u),this._appendPages(u),this._appendNextMoreButton(u),this._appendNextButton(u),this._appendLastButton(u)}});l.exports=L},function(l,m,e){function s(i){return i.target||i.srcElement}l.exports=s},function(l,m,e){var s=e(4),i=e(3),f=e(23);function p(g,_,r,t){if(s(_)){i(_.split(/\s+/g),function(n){a(g,n,r,t)});return}i(_,function(n,o){a(g,o,n,r)})}function a(g,_,r,t){function n(o){r.call(t||g,o||window.event)}"addEventListener"in g?g.addEventListener(_,n):"attachEvent"in g&&g.attachEvent("on"+_,n),c(g,_,r,n)}function c(g,_,r,t){var n=f(g,_),o=!1;i(n,function(h){return h.handler===r?(o=!0,!1):!0}),o||n.push({handler:r,wrappedHandler:t})}l.exports=p},function(l,m,e){var s="_feEventKey";function i(f,p){var a=f[s],c;return a||(a=f[s]={}),c=a[p],c||(c=a[p]=[]),c}l.exports=i},function(l,m,e){function s(i){if(i.preventDefault){i.preventDefault();return}i.returnValue=!1}l.exports=s},function(l,m,e){var s=e(3),i=e(8),f=e(26),p=e(27);function a(c){var g=Array.prototype.slice.call(arguments,1),_=c.classList,r=[],t;if(_){s(g,function(n){c.classList.add(n)});return}t=f(c),t&&(g=[].concat(t.split(/\s+/),g)),s(g,function(n){i(n,r)<0&&r.push(n)}),p(c,r)}l.exports=a},function(l,m,e){var s=e(1);function i(f){return!f||!f.className?"":s(f.className.baseVal)?f.className:f.className.baseVal}l.exports=i},function(l,m,e){var s=e(2),i=e(1);function f(p,a){if(a=s(a)?a.join(" "):a,a=a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(p.className.baseVal)){p.className=a;return}p.className.baseVal=a}l.exports=f},function(l,m,e){function s(i){return typeof HTMLElement=="object"?i&&(i instanceof HTMLElement||!!i.nodeType):!!(i&&i.nodeType)}l.exports=s},function(l,m,e){var s=e(8),i=e(3),f=e(2),p=e(4),a=e(0),c=/{{\s?|\s?}}/g,g=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,_=/\[\s?|\s?\]/,r=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,t=/\./,n=/^["']\w+["']$/,o=/"|'/g,h=/^-?\d+\.?\d*$/,b=2,L={if:N,each:F,with:nt},u="a".split(/a/).length===3,d=function(){return u?function(v,y){return v.split(y)}:function(v,y){var E=[],P=0,C,I;for(y.global||(y=new RegExp(y,"g")),C=y.exec(v);C!==null;)I=C.index,E.push(v.slice(P,I)),P=I+C[0].length,C=y.exec(v);return E.push(v.slice(P)),E}}();function S(v,y){var E,P=y[v];return v==="true"?P=!0:v==="false"?P=!1:n.test(v)?P=v.replace(o,""):g.test(v)?(E=v.split(_),P=S(E[0],y)[S(E[1],y)]):r.test(v)?(E=v.split(t),P=S(E[0],y)[E[1]]):h.test(v)&&(P=parseFloat(v)),P}function O(v,y){var E=[v],P=[],C=0,I=0;return i(y,function(B,T){B.indexOf("if")===0?C+=1:B==="/if"?C-=1:!C&&(B.indexOf("elseif")===0||B==="else")&&(E.push(B==="else"?["true"]:B.split(" ").slice(1)),P.push(y.slice(I,T)),I=T+1)}),P.push(y.slice(I)),{exps:E,sourcesInsideIf:P}}function N(v,y,E){var P=O(v,y),C=!1,I="";return i(P.exps,function(B,T){return C=$(B,E),C&&(I=U(P.sourcesInsideIf[T],E)),!C}),I}function F(v,y,E){var P=$(v,E),C=f(P)?"@index":"@key",I={},B="";return i(P,function(T,H){I[C]=H,I["@this"]=T,a(E,I),B+=U(y.slice(),E)}),B}function nt(v,y,E){var P=s("as",v),C=v[P+1],I=$(v.slice(0,P),E),B={};return B[C]=I,U(y,a(E,B))||""}function it(v,y,E){var P=v.splice(y+1,E-y);return P.pop(),P}function st(v,y,E){for(var P=L[v],C=1,I=0,B,T=I+b,H=y[T];C&&p(H);)H.indexOf(v)===0?C+=1:H.indexOf("/"+v)===0&&(C-=1,B=T),T+=b,H=y[T];if(C)throw Error(v+" needs {{/"+v+"}} expression.");return y[I]=P(y[I].split(" ").slice(1),it(y,I,B),E),y}function $(v,y){var E=S(v[0],y);return E instanceof Function?rt(E,v.slice(1),y):E}function rt(v,y,E){var P=[];return i(y,function(C){P.push(S(C,E))}),v.apply(null,P)}function U(v,y){for(var E=1,P=v[E],C,I,B;p(P);)C=P.split(" "),I=C[0],L[I]?(B=st(I,v.splice(E,v.length-E),y),v=v.concat(B)):v[E]=$(C,y),E+=b,P=v[E];return v.join("")}function at(v,y){return U(d(v,c),y)}l.exports=at},function(l,m,e){var s=e(1),i=e(31),f=7*24*60*60*1e3;function p(c){var g=new Date().getTime();return g-c>f}function a(c,g){var _="https://www.google-analytics.com/collect",r=location.hostname,t="event",n="use",o="TOAST UI "+c+" for "+r+": Statistics",h=window.localStorage.getItem(o);!s(window.tui)&&window.tui.usageStatistics===!1||h&&!p(h)||(window.localStorage.setItem(o,new Date().getTime()),setTimeout(function(){(document.readyState==="interactive"||document.readyState==="complete")&&i(_,{v:1,t,tid:g,cid:r,dp:r,dh:c,el:c,ec:n})},1e3))}l.exports=a},function(l,m,e){var s=e(6);function i(f,p){var a=document.createElement("img"),c="";return s(p,function(g,_){c+="&"+_+"="+g}),c=c.substring(1),a.src=f+"?"+c,a.style.display="none",document.body.appendChild(a),document.body.removeChild(a),a}l.exports=i}])})})(Q);var bt=Q.exports;const _t=ot(bt);document.addEventListener("click",Ct);function Ct(x){if(document.querySelectorAll(".form-input").forEach(l=>l.classList.remove("invalid")),x.target.closest(".modal-close-btn")&&modalsClose(),x.target.closest("[data-sign-up]")&&(X.show(),J.close()),x.target.closest("[data-sign-in]")&&(X.close(),J.show()),x.target.closest(".log-out-btn")&&lt(),x.target.closest(".sign-in-btn")&&ut(),x.target.closest("[data-g-sign-in]")&&ct(),x.target.closest(".sign-up-btn")&&ft(),x.target.closest(".shopping-card-bin-link")){const l=x.target.closest(".shopping-list-item").dataset.id;pt(l)}}const It=ht();gt(It,x=>{x?(x.uid,dt(x),St(x).then(()=>{})):(vt(),Bt())});async function Mt(x){const M=`https://books-backend.p.goit.global/books/${x}`,l=await fetch(M);return l.ok||console.log("Error API book"),await l.json()}let A=JSON.parse(localStorage.getItem("KEY"))??[];async function St(x){mt(x.uid).then(M=>{A=A.filter(l=>M.includes(l._id)),localStorage.setItem("KEY",JSON.stringify(A)),j(A.slice(0,3)),M.forEach(l=>{const m=A.find(({_id:e})=>e==l);console.log(!m),m||Mt(l).then(e=>{A.push(e),localStorage.setItem("KEY",JSON.stringify(A)),j(A.slice(0,3))}).catch(e=>console.log(e.message))})}).catch(M=>{console.dir(M)})}function Bt(){document.querySelector(".shop-page").style.display="none";let x=location.pathname.split("/");console.log(x),x[x.length-1]==="shopping-list.html"&&(x[x.length-1]="index.html",console.log(x),location.href=x.join("/"))}const Lt="/team-13-we-can-do-it-JS/assets/spryte-821f2fad.svg#icon-trash",G=document.querySelector(".shopping-list"),Y=document.querySelector(".shopping-title"),D=document.querySelector(".empty-shopping-list-wrap"),K=document.querySelector("#tui-pagination-container"),Z=document.querySelector(".support-ukr-shopping-list");document.querySelector(".loader");let q=JSON.parse(localStorage.getItem("KEY"))??[],R=3,V=1,k=(V-1)*R,w=k+R,W=q.slice(k,w),z=document.querySelector(".visible"),Ot=tt();function tt(){return window.matchMedia("(min-width: 768px)").matches?z.textContent="3":z.textContent="2",Number(z.textContent)}let Nt={totalItems:q.length,itemsPerPage:R,visiblePages:Ot,page:V,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"},et=new _t(K,Nt);tt();function j(x){let M=JSON.parse(localStorage.getItem("KEY"))??[];et.reset(M.length),G.innerHTML="",x=M.slice(k,w),M.length?(D.style.display="none",K.style.display="block",Z.style.marginBottom="337px",Y.classList.replace("empty-title-margin","full-title-margin"),G.insertAdjacentHTML("beforeend",Tt(x))):(D.style.display="block",K.style.display="none",Z.style.marginBottom="184px",Y.classList.replace("full-title-margin","empty-title-margin"))}et.on("beforeMove",x=>{let M=JSON.parse(localStorage.getItem("KEY"))??[];V=x.page,k=(V-1)*R,w=k+R;const l=M.slice(k,w);j(l)});function Tt(x){return x.map(({_id:M,book_image:l,title:m,list_name:e,author:s,description:i,buy_links:[f,p,a]})=>`
  <li class="shopping-list-item" data-id=${M} >
  <img
    src="${l}"
    alt="book's image"
    class="shopping-card-img"
  />
  <div class="right-part-wrap">
    <div class="shopping-card-bin-wrap">
     <div>
        <h4 class="shopping-card-tittle">${m}</h4>
        <p class="shopping-card-genre">${e}</p>
     </div>
     <button type="button" class="shopping-card-bin-link">
          <svg class="img-bin-icon">
            <use class="img-bin-use" href="${Lt}"></use>
          </svg>
      </button>
    </div>
    <p class="shopping-card-description">${i}
    </p>
    <div class="botton-wrap">
        <p class="shopping-card-author">${s}</p>
              <ul class="markets-list-shopping">
              <li>
                <a href="${f.url}">
                  <img src="${xt} alt="${e}" class="icon-amazon light-theme-amazon hover">
                  <img src="${yt}" alt="${e}" class="icon-amazon dark-theme-amazon hover">

                </a>
              </li>
              <li>
                <a href="${p.url}">
                  <img src="${Et}" alt="${e}" class="icon-apple-book hover">
                </a>
              </li>
              <li>
                <a href="${a.url}">
                <img src="${Pt}" alt="${e}" class="icon-book-shop hover">
                </a>
    </div>
  </div>
</li>`).join("")}G.addEventListener("click",x=>{(x.target.classList.contains("shopping-card-bin-link")||x.target.classList.contains("img-bin-icon")||x.target.classList.contains("img-bin-use"))&&At(x)});function At(x){let M=JSON.parse(localStorage.getItem("KEY"))??[];const{id:l}=x.target.closest(".shopping-list-item").dataset,m=M.findIndex(e=>e._id===l);M.splice(m,1),localStorage.setItem("KEY",JSON.stringify(M)),W=M.slice(k,w),j(W)}