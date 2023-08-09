import{g as ot,s as J,h as Y,l as lt,i as ct,j as ut,r as ft,u as pt,k as ht,o as gt,m as dt,n as vt,p as mt,a as xt,b as yt,c as Et,d as Pt}from"./auth_user_bar-a434c4f0.js";var q={exports:{}};/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */(function(x,M){(function(m,e){x.exports=e()})(window,function(){return function(l){var m={};function e(s){if(m[s])return m[s].exports;var n=m[s]={i:s,l:!1,exports:{}};return l[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=l,e.c=m,e.d=function(s,n,f){e.o(s,n)||Object.defineProperty(s,n,{enumerable:!0,get:f})},e.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},e.t=function(s,n){if(n&1&&(s=e(s)),n&8||n&4&&typeof s=="object"&&s&&s.__esModule)return s;var f=Object.create(null);if(e.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:s}),n&2&&typeof s!="string")for(var p in s)e.d(f,p,(function(a){return s[a]}).bind(null,p));return f},e.n=function(s){var n=s&&s.__esModule?function(){return s.default}:function(){return s};return e.d(n,"a",n),n},e.o=function(s,n){return Object.prototype.hasOwnProperty.call(s,n)},e.p="dist",e(e.s=10)}([function(l,m,e){function s(n,f){var p=Object.prototype.hasOwnProperty,a,u,g,_;for(g=1,_=arguments.length;g<_;g+=1){a=arguments[g];for(u in a)p.call(a,u)&&(n[u]=a[u])}return n}l.exports=s},function(l,m,e){function s(n){return n===void 0}l.exports=s},function(l,m,e){function s(n){return n instanceof Array}l.exports=s},function(l,m,e){var s=e(2),n=e(17),f=e(6);function p(a,u,g){s(a)?n(a,u,g):f(a,u,g)}l.exports=p},function(l,m,e){function s(n){return typeof n=="string"||n instanceof String}l.exports=s},function(l,m,e){function s(n){return n instanceof Function}l.exports=s},function(l,m,e){function s(n,f,p){var a;p=p||null;for(a in n)if(n.hasOwnProperty(a)&&f.call(p,n[a],a,n)===!1)break}l.exports=s},function(l,m,e){var s=e(18),n=e(0);function f(p,a){var u;return a||(a=p,p=null),u=a.init||function(){},p&&s(u,p),a.hasOwnProperty("static")&&(n(u,a.static),delete a.static),n(u.prototype,a),u}l.exports=f},function(l,m,e){var s=e(2);function n(f,p,a){var u,g;if(a=a||0,!s(p))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(p,f,a);for(g=p.length,u=a;a>=0&&u<g;u+=1)if(p[u]===f)return u;return-1}l.exports=n},function(l,m,e){var s=e(29),n=e(30),f=e(5),p={capitalizeFirstLetter:function(a){return a.substring(0,1).toUpperCase()+a.substring(1,a.length)},isContained:function(a,u){return u?a===u?!0:u.contains(a):!1},createElementByTemplate:function(a,u){var g=document.createElement("div"),_=f(a)?a(u):s(a,u);return g.innerHTML=_,g.firstChild},bind:function(a,u){var g=Array.prototype.slice,_;return a.bind?a.bind.apply(a,g.call(arguments,1)):(_=g.call(arguments,2),function(){return a.apply(u,_.length?_.concat(g.call(arguments)):arguments)})},sendHostName:function(){n("pagination","UA-129987462-1")}};l.exports=p},function(l,m,e){e(11),l.exports=e(12)},function(l,m,e){},function(l,m,e){var s=e(13),n=e(7),f=e(0),p=e(1),a=e(20),u=e(9),g={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},_=n({init:function(r,t){this._options=f({},g,t),this._currentPage=0,this._view=new a(r,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(r){this._currentPage=r||this._options.page},_getLastPage:function(){var r=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return r||1},_getPageIndex:function(r){var t,i;return this._options.centerAlign?(t=Math.floor(this._options.visiblePages/2),i=r-t,i=Math.max(i,1),i=Math.min(i,this._getLastPage()-this._options.visiblePages+1),i):Math.ceil(r/this._options.visiblePages)},_getRelativePage:function(r){var t=r==="prev",i=this.getCurrentPage();return t?i-1:i+1},_getMorePageIndex:function(r){var t=this._getPageIndex(this.getCurrentPage()),i=this._options.visiblePages,o=r==="prev",h;return this._options.centerAlign?h=o?t-1:t+i:h=o?(t-1)*i:t*i+1,h},_convertToValidPage:function(r){var t=this._getLastPage();return r=Math.max(r,1),r=Math.min(r,t),r},_paginate:function(r){var t=this._makeViewData(r||this._options.page);this._setCurrentPage(r),this._view.update(t)},_makeViewData:function(r){var t={},i=this._getLastPage(),o=this._getPageIndex(r),h=this._getPageIndex(i),b=this._getEdge(r);return t.leftPageNumber=b.left,t.rightPageNumber=b.right,t.prevMore=o>1,t.nextMore=o<h,t.page=r,t.currentPageIndex=r,t.lastPage=i,t.lastPageListIndex=i,t},_getEdge:function(r){var t,i,o,h=this._getLastPage(),b=this._options.visiblePages,L=this._getPageIndex(r);return this._options.centerAlign?(o=Math.floor(b/2),t=Math.max(r-o,1),i=t+b-1,i>h&&(t=Math.max(h-b+1,1),i=h)):(t=(L-1)*b+1,i=L*b,i=Math.min(i,h)),{left:t,right:i}},_onClickHandler:function(r,t){switch(r){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(r){p(r)&&(r=this._options.totalItems),this._options.totalItems=r,this._paginate(1)},movePageTo:function(r){r=this._convertToValidPage(r),this.invoke("beforeMove",{page:r})&&(this._paginate(r),this.fire("afterMove",{page:r}))},setTotalItems:function(r){this._options.totalItems=r},setItemsPerPage:function(r){this._options.itemsPerPage=r},getCurrentPage:function(){return this._currentPage||this._options.page}});s.mixin(_),l.exports=_},function(l,m,e){var s=e(0),n=e(14),f=e(4),p=e(16),a=e(2),u=e(5),g=e(3),_=/\s+/g;function r(){this.events=null,this.contexts=null}r.mixin=function(t){s(t.prototype,r.prototype)},r.prototype._getHandlerItem=function(t,i){var o={handler:t};return i&&(o.context=i),o},r.prototype._safeEvent=function(t){var i=this.events,o;return i||(i=this.events={}),t&&(o=i[t],o||(o=[],i[t]=o),i=o),i},r.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},r.prototype._indexOfContext=function(t){for(var i=this._safeContext(),o=0;i[o];){if(t===i[o][0])return o;o+=1}return-1},r.prototype._memorizeContext=function(t){var i,o;n(t)&&(i=this._safeContext(),o=this._indexOfContext(t),o>-1?i[o][1]+=1:i.push([t,1]))},r.prototype._forgetContext=function(t){var i,o;n(t)&&(i=this._safeContext(),o=this._indexOfContext(t),o>-1&&(i[o][1]-=1,i[o][1]<=0&&i.splice(o,1)))},r.prototype._bindEvent=function(t,i,o){var h=this._safeEvent(t);this._memorizeContext(o),h.push(this._getHandlerItem(i,o))},r.prototype.on=function(t,i,o){var h=this;f(t)?(t=t.split(_),g(t,function(b){h._bindEvent(b,i,o)})):p(t)&&(o=i,g(t,function(b,L){h.on(L,b,o)}))},r.prototype.once=function(t,i,o){var h=this;if(p(t)){o=i,g(t,function(L,c){h.once(c,L,o)});return}function b(){i.apply(o,arguments),h.off(t,b,o)}this.on(t,b,o)},r.prototype._spliceMatches=function(t,i){var o=0,h;if(a(t))for(h=t.length;o<h;o+=1)i(t[o])===!0&&(t.splice(o,1),h-=1,o-=1)},r.prototype._matchHandler=function(t){var i=this;return function(o){var h=t===o.handler;return h&&i._forgetContext(o.context),h}},r.prototype._matchContext=function(t){var i=this;return function(o){var h=t===o.context;return h&&i._forgetContext(o.context),h}},r.prototype._matchHandlerAndContext=function(t,i){var o=this;return function(h){var b=t===h.handler,L=i===h.context,c=b&&L;return c&&o._forgetContext(h.context),c}},r.prototype._offByEventName=function(t,i){var o=this,h=u(i),b=o._matchHandler(i);t=t.split(_),g(t,function(L){var c=o._safeEvent(L);h?o._spliceMatches(c,b):(g(c,function(d){o._forgetContext(d.context)}),o.events[L]=[])})},r.prototype._offByHandler=function(t){var i=this,o=this._matchHandler(t);g(this._safeEvent(),function(h){i._spliceMatches(h,o)})},r.prototype._offByObject=function(t,i){var o=this,h;this._indexOfContext(t)<0?g(t,function(b,L){o.off(L,b)}):f(i)?(h=this._matchContext(t),o._spliceMatches(this._safeEvent(i),h)):u(i)?(h=this._matchHandlerAndContext(i,t),g(this._safeEvent(),function(b){o._spliceMatches(b,h)})):(h=this._matchContext(t),g(this._safeEvent(),function(b){o._spliceMatches(b,h)}))},r.prototype.off=function(t,i){f(t)?this._offByEventName(t,i):arguments.length?u(t)?this._offByHandler(t):p(t)&&this._offByObject(t,i):(this.events={},this.contexts=[])},r.prototype.fire=function(t){this.invoke.apply(this,arguments)},r.prototype.invoke=function(t){var i,o,h,b;if(!this.hasListener(t))return!0;for(i=this._safeEvent(t),o=Array.prototype.slice.call(arguments,1),h=0;i[h];){if(b=i[h],b.handler.apply(b.context,o)===!1)return!1;h+=1}return!0},r.prototype.hasListener=function(t){return this.getListenerLength(t)>0},r.prototype.getListenerLength=function(t){var i=this._safeEvent(t);return i.length},l.exports=r},function(l,m,e){var s=e(1),n=e(15);function f(p){return!s(p)&&!n(p)}l.exports=f},function(l,m,e){function s(n){return n===null}l.exports=s},function(l,m,e){function s(n){return n===Object(n)}l.exports=s},function(l,m,e){function s(n,f,p){var a=0,u=n.length;for(p=p||null;a<u&&f.call(p,n[a],a,n)!==!1;a+=1);}l.exports=s},function(l,m,e){var s=e(19);function n(f,p){var a=s(p.prototype);a.constructor=f,f.prototype=a}l.exports=n},function(l,m,e){function s(n){function f(){}return f.prototype=n,new f}l.exports=s},function(l,m,e){var s=e(3),n=e(7),f=e(21),p=e(22),a=e(24),u=e(25),g=e(0),_=e(4),r=e(28),t=e(9),i={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},o=["first","prev","next","last"],h=["prev","next"],b="The container element is invalid.",L=n({init:function(c,d,S){this._containerElement=null,this._firstItemClassName=d.firstItemClassName,this._lastItemClassName=d.lastItemClassName,this._template=g({},i,d.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(c),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(S)},_setRootElement:function(c){if(_(c)?c=document.getElementById(c)||document.querySelector(c):c.jquery&&(c=c[0]),!r(c))throw new Error(b);this._containerElement=c},_setMoveButtons:function(){s(o,function(c){this._buttons[c]=t.createElementByTemplate(this._template.moveButton,{type:c})},this)},_setDisabledMoveButtons:function(){s(o,function(c){var d="disabled"+t.capitalizeFirstLetter(c);this._buttons[d]=t.createElementByTemplate(this._template.disabledMoveButton,{type:c})},this)},_setMoreButtons:function(){s(h,function(c){var d=c+"More";this._buttons[d]=t.createElementByTemplate(this._template.moreButton,{type:c})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(c){var d;c.page>1?d=this._buttons.first:d=this._buttons.disabledFirst,this._getContainerElement().appendChild(d)},_appendPrevButton:function(c){var d;c.currentPageIndex>1?d=this._buttons.prev:d=this._buttons.disabledPrev,this._getContainerElement().appendChild(d)},_appendNextButton:function(c){var d;c.currentPageIndex<c.lastPageListIndex?d=this._buttons.next:d=this._buttons.disabledNext,this._getContainerElement().appendChild(d)},_appendLastButton:function(c){var d;c.page<c.lastPage?d=this._buttons.last:d=this._buttons.disabledLast,this._getContainerElement().appendChild(d)},_appendPrevMoreButton:function(c){var d;c.prevMore&&(d=this._buttons.prevMore,u(d,this._firstItemClassName),this._getContainerElement().appendChild(d))},_appendNextMoreButton:function(c){var d;c.nextMore&&(d=this._buttons.nextMore,u(d,this._lastItemClassName),this._getContainerElement().appendChild(d))},_appendPages:function(c){var d=c.leftPageNumber,S=c.rightPageNumber,O,N;for(N=d;N<=S;N+=1)N===c.page?O=t.createElementByTemplate(this._template.currentPage,{page:N}):(O=t.createElementByTemplate(this._template.page,{page:N}),this._enabledPageElements.push(O)),N===d&&!c.prevMore&&u(O,this._firstItemClassName),N===S&&!c.nextMore&&u(O,this._lastItemClassName),this._getContainerElement().appendChild(O)},_attachClickEvent:function(c){var d=this._getContainerElement();p(d,"click",function(S){var O=f(S),N,F;a(S),F=this._getButtonType(O),F||(N=this._getPageNumber(O)),c(F,N)},this)},_getButtonType:function(c){var d,S=this._buttons;return s(S,function(O,N){return t.isContained(c,O)?(d=N,!1):!0},this),d},_getPageNumber:function(c){var d=this._findPageElement(c),S;return d&&(S=parseInt(d.innerText,10)),S},_findPageElement:function(c){for(var d=0,S=this._enabledPageElements.length,O;d<S;d+=1)if(O=this._enabledPageElements[d],t.isContained(c,O))return O;return null},_empty:function(){this._enabledPageElements=[],s(this._buttons,function(c,d){this._buttons[d]=c.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(c){this._empty(),this._appendFirstButton(c),this._appendPrevButton(c),this._appendPrevMoreButton(c),this._appendPages(c),this._appendNextMoreButton(c),this._appendNextButton(c),this._appendLastButton(c)}});l.exports=L},function(l,m,e){function s(n){return n.target||n.srcElement}l.exports=s},function(l,m,e){var s=e(4),n=e(3),f=e(23);function p(g,_,r,t){if(s(_)){n(_.split(/\s+/g),function(i){a(g,i,r,t)});return}n(_,function(i,o){a(g,o,i,r)})}function a(g,_,r,t){function i(o){r.call(t||g,o||window.event)}"addEventListener"in g?g.addEventListener(_,i):"attachEvent"in g&&g.attachEvent("on"+_,i),u(g,_,r,i)}function u(g,_,r,t){var i=f(g,_),o=!1;n(i,function(h){return h.handler===r?(o=!0,!1):!0}),o||i.push({handler:r,wrappedHandler:t})}l.exports=p},function(l,m,e){var s="_feEventKey";function n(f,p){var a=f[s],u;return a||(a=f[s]={}),u=a[p],u||(u=a[p]=[]),u}l.exports=n},function(l,m,e){function s(n){if(n.preventDefault){n.preventDefault();return}n.returnValue=!1}l.exports=s},function(l,m,e){var s=e(3),n=e(8),f=e(26),p=e(27);function a(u){var g=Array.prototype.slice.call(arguments,1),_=u.classList,r=[],t;if(_){s(g,function(i){u.classList.add(i)});return}t=f(u),t&&(g=[].concat(t.split(/\s+/),g)),s(g,function(i){n(i,r)<0&&r.push(i)}),p(u,r)}l.exports=a},function(l,m,e){var s=e(1);function n(f){return!f||!f.className?"":s(f.className.baseVal)?f.className:f.className.baseVal}l.exports=n},function(l,m,e){var s=e(2),n=e(1);function f(p,a){if(a=s(a)?a.join(" "):a,a=a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),n(p.className.baseVal)){p.className=a;return}p.className.baseVal=a}l.exports=f},function(l,m,e){function s(n){return typeof HTMLElement=="object"?n&&(n instanceof HTMLElement||!!n.nodeType):!!(n&&n.nodeType)}l.exports=s},function(l,m,e){var s=e(8),n=e(3),f=e(2),p=e(4),a=e(0),u=/{{\s?|\s?}}/g,g=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,_=/\[\s?|\s?\]/,r=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,t=/\./,i=/^["']\w+["']$/,o=/"|'/g,h=/^-?\d+\.?\d*$/,b=2,L={if:N,each:F,with:nt},c="a".split(/a/).length===3,d=function(){return c?function(v,y){return v.split(y)}:function(v,y){var E=[],P=0,C,I;for(y.global||(y=new RegExp(y,"g")),C=y.exec(v);C!==null;)I=C.index,E.push(v.slice(P,I)),P=I+C[0].length,C=y.exec(v);return E.push(v.slice(P)),E}}();function S(v,y){var E,P=y[v];return v==="true"?P=!0:v==="false"?P=!1:i.test(v)?P=v.replace(o,""):g.test(v)?(E=v.split(_),P=S(E[0],y)[S(E[1],y)]):r.test(v)?(E=v.split(t),P=S(E[0],y)[E[1]]):h.test(v)&&(P=parseFloat(v)),P}function O(v,y){var E=[v],P=[],C=0,I=0;return n(y,function(B,T){B.indexOf("if")===0?C+=1:B==="/if"?C-=1:!C&&(B.indexOf("elseif")===0||B==="else")&&(E.push(B==="else"?["true"]:B.split(" ").slice(1)),P.push(y.slice(I,T)),I=T+1)}),P.push(y.slice(I)),{exps:E,sourcesInsideIf:P}}function N(v,y,E){var P=O(v,y),C=!1,I="";return n(P.exps,function(B,T){return C=$(B,E),C&&(I=U(P.sourcesInsideIf[T],E)),!C}),I}function F(v,y,E){var P=$(v,E),C=f(P)?"@index":"@key",I={},B="";return n(P,function(T,H){I[C]=H,I["@this"]=T,a(E,I),B+=U(y.slice(),E)}),B}function nt(v,y,E){var P=s("as",v),C=v[P+1],I=$(v.slice(0,P),E),B={};return B[C]=I,U(y,a(E,B))||""}function it(v,y,E){var P=v.splice(y+1,E-y);return P.pop(),P}function st(v,y,E){for(var P=L[v],C=1,I=0,B,T=I+b,H=y[T];C&&p(H);)H.indexOf(v)===0?C+=1:H.indexOf("/"+v)===0&&(C-=1,B=T),T+=b,H=y[T];if(C)throw Error(v+" needs {{/"+v+"}} expression.");return y[I]=P(y[I].split(" ").slice(1),it(y,I,B),E),y}function $(v,y){var E=S(v[0],y);return E instanceof Function?rt(E,v.slice(1),y):E}function rt(v,y,E){var P=[];return n(y,function(C){P.push(S(C,E))}),v.apply(null,P)}function U(v,y){for(var E=1,P=v[E],C,I,B;p(P);)C=P.split(" "),I=C[0],L[I]?(B=st(I,v.splice(E,v.length-E),y),v=v.concat(B)):v[E]=$(C,y),E+=b,P=v[E];return v.join("")}function at(v,y){return U(d(v,u),y)}l.exports=at},function(l,m,e){var s=e(1),n=e(31),f=7*24*60*60*1e3;function p(u){var g=new Date().getTime();return g-u>f}function a(u,g){var _="https://www.google-analytics.com/collect",r=location.hostname,t="event",i="use",o="TOAST UI "+u+" for "+r+": Statistics",h=window.localStorage.getItem(o);!s(window.tui)&&window.tui.usageStatistics===!1||h&&!p(h)||(window.localStorage.setItem(o,new Date().getTime()),setTimeout(function(){(document.readyState==="interactive"||document.readyState==="complete")&&n(_,{v:1,t,tid:g,cid:r,dp:r,dh:u,el:u,ec:i})},1e3))}l.exports=a},function(l,m,e){var s=e(6);function n(f,p){var a=document.createElement("img"),u="";return s(p,function(g,_){u+="&"+_+"="+g}),u=u.substring(1),a.src=f+"?"+u,a.style.display="none",document.body.appendChild(a),document.body.removeChild(a),a}l.exports=n}])})})(q);var bt=q.exports;const _t=ot(bt);const G=document.querySelector(".loader");document.addEventListener("click",Ct);function Ct(x){if(document.querySelectorAll(".form-input").forEach(l=>l.classList.remove("invalid")),x.target.closest(".modal-close-btn")&&modalsClose(),x.target.closest("[data-sign-up]")&&(J.show(),Y.close()),x.target.closest("[data-sign-in]")&&(J.close(),Y.show()),x.target.closest(".log-out-btn")&&lt(),x.target.closest(".sign-in-btn")&&ct(),x.target.closest("[data-g-sign-in]")&&ut(),x.target.closest(".sign-up-btn")&&ft(),x.target.closest(".shopping-card-bin-link")){const l=x.target.closest(".shopping-list-item").dataset.id;pt(l)}}const It=ht();gt(It,x=>{x?(x.uid,dt(x),St(x).then(()=>{})):(vt(),Bt())});async function Mt(x){const M=`https://books-backend.p.goit.global/books/${x}`,l=await fetch(M);return l.ok||console.log("Error API book"),await l.json()}let A=JSON.parse(localStorage.getItem("KEY"))??[];async function St(x){G.style.display="inline-block",mt(x.uid).then(M=>{A=A.filter(m=>M.includes(m._id)),localStorage.setItem("KEY",JSON.stringify(A));let l=!0;M.forEach((m,e)=>{A.find(({_id:n})=>n==m)||(l=!1,Mt(m).then(n=>{A.push(n),localStorage.setItem("KEY",JSON.stringify(A)),z(A.slice(0,3)),G.style.display="none"}).catch(n=>console.log(n.message)))}),l&&(z(A.slice(0,3)),G.style.display="none")}).catch(M=>{console.dir(M)})}function Bt(){document.querySelector(".shop-page").style.display="none";let x=location.pathname.split("/");console.log(x),x[x.length-1]==="shopping-list.html"&&(x[x.length-1]="index.html",console.log(x),location.href=x.join("/"))}const Lt="/team-13-we-can-do-it-JS/assets/spryte-821f2fad.svg#icon-trash",V=document.querySelector("#tui-pagination-container");V.style.cssText="display:none!important";const X=document.querySelector(".shopping-list"),D=document.querySelector(".shopping-title"),Z=document.querySelector(".empty-shopping-list-wrap"),W=document.querySelector(".support-ukr-shopping-list");document.querySelector(".loader");let tt=JSON.parse(localStorage.getItem("KEY"))??[],R=3,j=1,k=(j-1)*R,w=k+R,Q=tt.slice(k,w),K=document.querySelector(".visible"),Ot=et();function et(){return window.matchMedia("(min-width: 768px)").matches?K.textContent="3":K.textContent="2",Number(K.textContent)}let Nt={totalItems:tt.length,itemsPerPage:R,visiblePages:Ot,page:j,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"},Tt=new _t(V,Nt);et();function z(x){let M=JSON.parse(localStorage.getItem("KEY"))??[];X.innerHTML="",x=M.slice(k,w),M.length?(Z.style.display="none",V.style.display="block",W.style.marginBottom="337px",D.classList.replace("empty-title-margin","full-title-margin"),X.insertAdjacentHTML("beforeend",At(x))):(Z.style.display="block",V.style.cssText="display:none!important",W.style.marginBottom="184px",D.classList.replace("full-title-margin","empty-title-margin"))}Tt.on("beforeMove",x=>{let M=JSON.parse(localStorage.getItem("KEY"))??[];j=x.page,k=(j-1)*R,w=k+R;const l=M.slice(k,w);z(l)});function At(x){return x.map(({_id:M,book_image:l,title:m,list_name:e,author:s,description:n,buy_links:[f,p,a]})=>`
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
    <p class="shopping-card-description">${n}
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
</li>`).join("")}X.addEventListener("click",x=>{(x.target.classList.contains("shopping-card-bin-link")||x.target.classList.contains("img-bin-icon")||x.target.classList.contains("img-bin-use"))&&kt(x)});function kt(x){let M=JSON.parse(localStorage.getItem("KEY"))??[];const{id:l}=x.target.closest(".shopping-list-item").dataset,m=M.findIndex(e=>e._id===l);M.splice(m,1),localStorage.setItem("KEY",JSON.stringify(M)),Q=M.slice(k,w),z(Q)}
