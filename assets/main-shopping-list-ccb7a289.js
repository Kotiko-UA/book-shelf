(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var Cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ei(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function lt(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var hr={exports:{}};(function(n,e){(function(t){n.exports=t()})(function(){return function t(r,i,s){function o(l,h){if(!i[l]){if(!r[l]){var g=typeof lt=="function"&&lt;if(!h&&g)return g(l,!0);if(a)return a(l,!0);var v=new Error("Cannot find module '"+l+"'");throw v.code="MODULE_NOT_FOUND",v}var d=i[l]={exports:{}};r[l][0].call(d.exports,function(u){return o(r[l][1][u]||u)},d,d.exports,t,r,i,s)}return i[l].exports}for(var a=typeof lt=="function"&&lt,c=0;c<s.length;c++)o(s[c]);return o}({1:[function(t,r,i){Object.defineProperty(i,"__esModule",{value:!0}),i.create=i.visible=void 0;var s=function(c){var l=arguments.length>1&&arguments[1]!==void 0&&arguments[1],h=document.createElement("div");return h.innerHTML=c.trim(),l===!0?h.children:h.firstChild},o=function(c,l){var h=c.children;return h.length===1&&h[0].tagName===l},a=function(c){return(c=c||document.querySelector(".basicLightbox"))!=null&&c.ownerDocument.body.contains(c)===!0};i.visible=a,i.create=function(c,l){var h=function(d,u){var f=s(`
		<div class="basicLightbox `.concat(u.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),p=f.querySelector(".basicLightbox__placeholder");d.forEach(function(m){return p.appendChild(m)});var _=o(p,"IMG"),w=o(p,"VIDEO"),N=o(p,"IFRAME");return _===!0&&f.classList.add("basicLightbox--img"),w===!0&&f.classList.add("basicLightbox--video"),N===!0&&f.classList.add("basicLightbox--iframe"),f}(c=function(d){var u=typeof d=="string",f=d instanceof HTMLElement==1;if(u===!1&&f===!1)throw new Error("Content must be a DOM element/node or string");return u===!0?Array.from(s(d,!0)):d.tagName==="TEMPLATE"?[d.content.cloneNode(!0)]:Array.from(d.children)}(c),l=function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((d=Object.assign({},d)).closable==null&&(d.closable=!0),d.className==null&&(d.className=""),d.onShow==null&&(d.onShow=function(){}),d.onClose==null&&(d.onClose=function(){}),typeof d.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof d.className!="string")throw new Error("Property `className` must be a string");if(typeof d.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof d.onClose!="function")throw new Error("Property `onClose` must be a function");return d}(l)),g=function(d){return l.onClose(v)!==!1&&function(u,f){return u.classList.remove("basicLightbox--visible"),setTimeout(function(){return a(u)===!1||u.parentElement.removeChild(u),f()},410),!0}(h,function(){if(typeof d=="function")return d(v)})};l.closable===!0&&h.addEventListener("click",function(d){d.target===h&&g()});var v={element:function(){return h},visible:function(){return a(h)},show:function(d){return l.onShow(v)!==!1&&function(u,f){return document.body.appendChild(u),setTimeout(function(){requestAnimationFrame(function(){return u.classList.add("basicLightbox--visible"),f()})},10),!0}(h,function(){if(typeof d=="function")return d(v)})},close:g};return v}},{}]},{},[1])(1)})})(hr);var fr=hr.exports,pr={exports:{}};/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */(function(n,e){(function(r,i){n.exports=i()})(window,function(){return function(t){var r={};function i(s){if(r[s])return r[s].exports;var o=r[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=r,i.d=function(s,o,a){i.o(s,o)||Object.defineProperty(s,o,{enumerable:!0,get:a})},i.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},i.t=function(s,o){if(o&1&&(s=i(s)),o&8||o&4&&typeof s=="object"&&s&&s.__esModule)return s;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:s}),o&2&&typeof s!="string")for(var c in s)i.d(a,c,(function(l){return s[l]}).bind(null,c));return a},i.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(o,"a",o),o},i.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},i.p="dist",i(i.s=10)}([function(t,r,i){function s(o,a){var c=Object.prototype.hasOwnProperty,l,h,g,v;for(g=1,v=arguments.length;g<v;g+=1){l=arguments[g];for(h in l)c.call(l,h)&&(o[h]=l[h])}return o}t.exports=s},function(t,r,i){function s(o){return o===void 0}t.exports=s},function(t,r,i){function s(o){return o instanceof Array}t.exports=s},function(t,r,i){var s=i(2),o=i(17),a=i(6);function c(l,h,g){s(l)?o(l,h,g):a(l,h,g)}t.exports=c},function(t,r,i){function s(o){return typeof o=="string"||o instanceof String}t.exports=s},function(t,r,i){function s(o){return o instanceof Function}t.exports=s},function(t,r,i){function s(o,a,c){var l;c=c||null;for(l in o)if(o.hasOwnProperty(l)&&a.call(c,o[l],l,o)===!1)break}t.exports=s},function(t,r,i){var s=i(18),o=i(0);function a(c,l){var h;return l||(l=c,c=null),h=l.init||function(){},c&&s(h,c),l.hasOwnProperty("static")&&(o(h,l.static),delete l.static),o(h.prototype,l),h}t.exports=a},function(t,r,i){var s=i(2);function o(a,c,l){var h,g;if(l=l||0,!s(c))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(c,a,l);for(g=c.length,h=l;l>=0&&h<g;h+=1)if(c[h]===a)return h;return-1}t.exports=o},function(t,r,i){var s=i(29),o=i(30),a=i(5),c={capitalizeFirstLetter:function(l){return l.substring(0,1).toUpperCase()+l.substring(1,l.length)},isContained:function(l,h){return h?l===h?!0:h.contains(l):!1},createElementByTemplate:function(l,h){var g=document.createElement("div"),v=a(l)?l(h):s(l,h);return g.innerHTML=v,g.firstChild},bind:function(l,h){var g=Array.prototype.slice,v;return l.bind?l.bind.apply(l,g.call(arguments,1)):(v=g.call(arguments,2),function(){return l.apply(h,v.length?v.concat(g.call(arguments)):arguments)})},sendHostName:function(){o("pagination","UA-129987462-1")}};t.exports=c},function(t,r,i){i(11),t.exports=i(12)},function(t,r,i){},function(t,r,i){var s=i(13),o=i(7),a=i(0),c=i(1),l=i(20),h=i(9),g={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},v=o({init:function(d,u){this._options=a({},g,u),this._currentPage=0,this._view=new l(d,this._options,h.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&h.sendHostName()},_setCurrentPage:function(d){this._currentPage=d||this._options.page},_getLastPage:function(){var d=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return d||1},_getPageIndex:function(d){var u,f;return this._options.centerAlign?(u=Math.floor(this._options.visiblePages/2),f=d-u,f=Math.max(f,1),f=Math.min(f,this._getLastPage()-this._options.visiblePages+1),f):Math.ceil(d/this._options.visiblePages)},_getRelativePage:function(d){var u=d==="prev",f=this.getCurrentPage();return u?f-1:f+1},_getMorePageIndex:function(d){var u=this._getPageIndex(this.getCurrentPage()),f=this._options.visiblePages,p=d==="prev",_;return this._options.centerAlign?_=p?u-1:u+f:_=p?(u-1)*f:u*f+1,_},_convertToValidPage:function(d){var u=this._getLastPage();return d=Math.max(d,1),d=Math.min(d,u),d},_paginate:function(d){var u=this._makeViewData(d||this._options.page);this._setCurrentPage(d),this._view.update(u)},_makeViewData:function(d){var u={},f=this._getLastPage(),p=this._getPageIndex(d),_=this._getPageIndex(f),w=this._getEdge(d);return u.leftPageNumber=w.left,u.rightPageNumber=w.right,u.prevMore=p>1,u.nextMore=p<_,u.page=d,u.currentPageIndex=d,u.lastPage=f,u.lastPageListIndex=f,u},_getEdge:function(d){var u,f,p,_=this._getLastPage(),w=this._options.visiblePages,N=this._getPageIndex(d);return this._options.centerAlign?(p=Math.floor(w/2),u=Math.max(d-p,1),f=u+w-1,f>_&&(u=Math.max(_-w+1,1),f=_)):(u=(N-1)*w+1,f=N*w,f=Math.min(f,_)),{left:u,right:f}},_onClickHandler:function(d,u){switch(d){case"first":u=1;break;case"prev":u=this._getRelativePage("prev");break;case"next":u=this._getRelativePage("next");break;case"prevMore":u=this._getMorePageIndex("prev");break;case"nextMore":u=this._getMorePageIndex("next");break;case"last":u=this._getLastPage();break;default:if(!u)return}this.movePageTo(u)},reset:function(d){c(d)&&(d=this._options.totalItems),this._options.totalItems=d,this._paginate(1)},movePageTo:function(d){d=this._convertToValidPage(d),this.invoke("beforeMove",{page:d})&&(this._paginate(d),this.fire("afterMove",{page:d}))},setTotalItems:function(d){this._options.totalItems=d},setItemsPerPage:function(d){this._options.itemsPerPage=d},getCurrentPage:function(){return this._currentPage||this._options.page}});s.mixin(v),t.exports=v},function(t,r,i){var s=i(0),o=i(14),a=i(4),c=i(16),l=i(2),h=i(5),g=i(3),v=/\s+/g;function d(){this.events=null,this.contexts=null}d.mixin=function(u){s(u.prototype,d.prototype)},d.prototype._getHandlerItem=function(u,f){var p={handler:u};return f&&(p.context=f),p},d.prototype._safeEvent=function(u){var f=this.events,p;return f||(f=this.events={}),u&&(p=f[u],p||(p=[],f[u]=p),f=p),f},d.prototype._safeContext=function(){var u=this.contexts;return u||(u=this.contexts=[]),u},d.prototype._indexOfContext=function(u){for(var f=this._safeContext(),p=0;f[p];){if(u===f[p][0])return p;p+=1}return-1},d.prototype._memorizeContext=function(u){var f,p;o(u)&&(f=this._safeContext(),p=this._indexOfContext(u),p>-1?f[p][1]+=1:f.push([u,1]))},d.prototype._forgetContext=function(u){var f,p;o(u)&&(f=this._safeContext(),p=this._indexOfContext(u),p>-1&&(f[p][1]-=1,f[p][1]<=0&&f.splice(p,1)))},d.prototype._bindEvent=function(u,f,p){var _=this._safeEvent(u);this._memorizeContext(p),_.push(this._getHandlerItem(f,p))},d.prototype.on=function(u,f,p){var _=this;a(u)?(u=u.split(v),g(u,function(w){_._bindEvent(w,f,p)})):c(u)&&(p=f,g(u,function(w,N){_.on(N,w,p)}))},d.prototype.once=function(u,f,p){var _=this;if(c(u)){p=f,g(u,function(N,m){_.once(m,N,p)});return}function w(){f.apply(p,arguments),_.off(u,w,p)}this.on(u,w,p)},d.prototype._spliceMatches=function(u,f){var p=0,_;if(l(u))for(_=u.length;p<_;p+=1)f(u[p])===!0&&(u.splice(p,1),_-=1,p-=1)},d.prototype._matchHandler=function(u){var f=this;return function(p){var _=u===p.handler;return _&&f._forgetContext(p.context),_}},d.prototype._matchContext=function(u){var f=this;return function(p){var _=u===p.context;return _&&f._forgetContext(p.context),_}},d.prototype._matchHandlerAndContext=function(u,f){var p=this;return function(_){var w=u===_.handler,N=f===_.context,m=w&&N;return m&&p._forgetContext(_.context),m}},d.prototype._offByEventName=function(u,f){var p=this,_=h(f),w=p._matchHandler(f);u=u.split(v),g(u,function(N){var m=p._safeEvent(N);_?p._spliceMatches(m,w):(g(m,function(y){p._forgetContext(y.context)}),p.events[N]=[])})},d.prototype._offByHandler=function(u){var f=this,p=this._matchHandler(u);g(this._safeEvent(),function(_){f._spliceMatches(_,p)})},d.prototype._offByObject=function(u,f){var p=this,_;this._indexOfContext(u)<0?g(u,function(w,N){p.off(N,w)}):a(f)?(_=this._matchContext(u),p._spliceMatches(this._safeEvent(f),_)):h(f)?(_=this._matchHandlerAndContext(f,u),g(this._safeEvent(),function(w){p._spliceMatches(w,_)})):(_=this._matchContext(u),g(this._safeEvent(),function(w){p._spliceMatches(w,_)}))},d.prototype.off=function(u,f){a(u)?this._offByEventName(u,f):arguments.length?h(u)?this._offByHandler(u):c(u)&&this._offByObject(u,f):(this.events={},this.contexts=[])},d.prototype.fire=function(u){this.invoke.apply(this,arguments)},d.prototype.invoke=function(u){var f,p,_,w;if(!this.hasListener(u))return!0;for(f=this._safeEvent(u),p=Array.prototype.slice.call(arguments,1),_=0;f[_];){if(w=f[_],w.handler.apply(w.context,p)===!1)return!1;_+=1}return!0},d.prototype.hasListener=function(u){return this.getListenerLength(u)>0},d.prototype.getListenerLength=function(u){var f=this._safeEvent(u);return f.length},t.exports=d},function(t,r,i){var s=i(1),o=i(15);function a(c){return!s(c)&&!o(c)}t.exports=a},function(t,r,i){function s(o){return o===null}t.exports=s},function(t,r,i){function s(o){return o===Object(o)}t.exports=s},function(t,r,i){function s(o,a,c){var l=0,h=o.length;for(c=c||null;l<h&&a.call(c,o[l],l,o)!==!1;l+=1);}t.exports=s},function(t,r,i){var s=i(19);function o(a,c){var l=s(c.prototype);l.constructor=a,a.prototype=l}t.exports=o},function(t,r,i){function s(o){function a(){}return a.prototype=o,new a}t.exports=s},function(t,r,i){var s=i(3),o=i(7),a=i(21),c=i(22),l=i(24),h=i(25),g=i(0),v=i(4),d=i(28),u=i(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},p=["first","prev","next","last"],_=["prev","next"],w="The container element is invalid.",N=o({init:function(m,y,D){this._containerElement=null,this._firstItemClassName=y.firstItemClassName,this._lastItemClassName=y.lastItemClassName,this._template=g({},f,y.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(m),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(D)},_setRootElement:function(m){if(v(m)?m=document.getElementById(m)||document.querySelector(m):m.jquery&&(m=m[0]),!d(m))throw new Error(w);this._containerElement=m},_setMoveButtons:function(){s(p,function(m){this._buttons[m]=u.createElementByTemplate(this._template.moveButton,{type:m})},this)},_setDisabledMoveButtons:function(){s(p,function(m){var y="disabled"+u.capitalizeFirstLetter(m);this._buttons[y]=u.createElementByTemplate(this._template.disabledMoveButton,{type:m})},this)},_setMoreButtons:function(){s(_,function(m){var y=m+"More";this._buttons[y]=u.createElementByTemplate(this._template.moreButton,{type:m})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(m){var y;m.page>1?y=this._buttons.first:y=this._buttons.disabledFirst,this._getContainerElement().appendChild(y)},_appendPrevButton:function(m){var y;m.currentPageIndex>1?y=this._buttons.prev:y=this._buttons.disabledPrev,this._getContainerElement().appendChild(y)},_appendNextButton:function(m){var y;m.currentPageIndex<m.lastPageListIndex?y=this._buttons.next:y=this._buttons.disabledNext,this._getContainerElement().appendChild(y)},_appendLastButton:function(m){var y;m.page<m.lastPage?y=this._buttons.last:y=this._buttons.disabledLast,this._getContainerElement().appendChild(y)},_appendPrevMoreButton:function(m){var y;m.prevMore&&(y=this._buttons.prevMore,h(y,this._firstItemClassName),this._getContainerElement().appendChild(y))},_appendNextMoreButton:function(m){var y;m.nextMore&&(y=this._buttons.nextMore,h(y,this._lastItemClassName),this._getContainerElement().appendChild(y))},_appendPages:function(m){var y=m.leftPageNumber,D=m.rightPageNumber,L,M;for(M=y;M<=D;M+=1)M===m.page?L=u.createElementByTemplate(this._template.currentPage,{page:M}):(L=u.createElementByTemplate(this._template.page,{page:M}),this._enabledPageElements.push(L)),M===y&&!m.prevMore&&h(L,this._firstItemClassName),M===D&&!m.nextMore&&h(L,this._lastItemClassName),this._getContainerElement().appendChild(L)},_attachClickEvent:function(m){var y=this._getContainerElement();c(y,"click",function(D){var L=a(D),M,X;l(D),X=this._getButtonType(L),X||(M=this._getPageNumber(L)),m(X,M)},this)},_getButtonType:function(m){var y,D=this._buttons;return s(D,function(L,M){return u.isContained(m,L)?(y=M,!1):!0},this),y},_getPageNumber:function(m){var y=this._findPageElement(m),D;return y&&(D=parseInt(y.innerText,10)),D},_findPageElement:function(m){for(var y=0,D=this._enabledPageElements.length,L;y<D;y+=1)if(L=this._enabledPageElements[y],u.isContained(m,L))return L;return null},_empty:function(){this._enabledPageElements=[],s(this._buttons,function(m,y){this._buttons[y]=m.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(m){this._empty(),this._appendFirstButton(m),this._appendPrevButton(m),this._appendPrevMoreButton(m),this._appendPages(m),this._appendNextMoreButton(m),this._appendNextButton(m),this._appendLastButton(m)}});t.exports=N},function(t,r,i){function s(o){return o.target||o.srcElement}t.exports=s},function(t,r,i){var s=i(4),o=i(3),a=i(23);function c(g,v,d,u){if(s(v)){o(v.split(/\s+/g),function(f){l(g,f,d,u)});return}o(v,function(f,p){l(g,p,f,d)})}function l(g,v,d,u){function f(p){d.call(u||g,p||window.event)}"addEventListener"in g?g.addEventListener(v,f):"attachEvent"in g&&g.attachEvent("on"+v,f),h(g,v,d,f)}function h(g,v,d,u){var f=a(g,v),p=!1;o(f,function(_){return _.handler===d?(p=!0,!1):!0}),p||f.push({handler:d,wrappedHandler:u})}t.exports=c},function(t,r,i){var s="_feEventKey";function o(a,c){var l=a[s],h;return l||(l=a[s]={}),h=l[c],h||(h=l[c]=[]),h}t.exports=o},function(t,r,i){function s(o){if(o.preventDefault){o.preventDefault();return}o.returnValue=!1}t.exports=s},function(t,r,i){var s=i(3),o=i(8),a=i(26),c=i(27);function l(h){var g=Array.prototype.slice.call(arguments,1),v=h.classList,d=[],u;if(v){s(g,function(f){h.classList.add(f)});return}u=a(h),u&&(g=[].concat(u.split(/\s+/),g)),s(g,function(f){o(f,d)<0&&d.push(f)}),c(h,d)}t.exports=l},function(t,r,i){var s=i(1);function o(a){return!a||!a.className?"":s(a.className.baseVal)?a.className:a.className.baseVal}t.exports=o},function(t,r,i){var s=i(2),o=i(1);function a(c,l){if(l=s(l)?l.join(" "):l,l=l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(c.className.baseVal)){c.className=l;return}c.className.baseVal=l}t.exports=a},function(t,r,i){function s(o){return typeof HTMLElement=="object"?o&&(o instanceof HTMLElement||!!o.nodeType):!!(o&&o.nodeType)}t.exports=s},function(t,r,i){var s=i(8),o=i(3),a=i(2),c=i(4),l=i(0),h=/{{\s?|\s?}}/g,g=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,v=/\[\s?|\s?\]/,d=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,u=/\./,f=/^["']\w+["']$/,p=/"|'/g,_=/^-?\d+\.?\d*$/,w=2,N={if:M,each:X,with:Lt},m="a".split(/a/).length===3,y=function(){return m?function(I,E){return I.split(E)}:function(I,E){var T=[],P=0,k,O;for(E.global||(E=new RegExp(E,"g")),k=E.exec(I);k!==null;)O=k.index,T.push(I.slice(P,O)),P=O+k[0].length,k=E.exec(I);return T.push(I.slice(P)),T}}();function D(I,E){var T,P=E[I];return I==="true"?P=!0:I==="false"?P=!1:f.test(I)?P=I.replace(p,""):g.test(I)?(T=I.split(v),P=D(T[0],E)[D(T[1],E)]):d.test(I)?(T=I.split(u),P=D(T[0],E)[T[1]]):_.test(I)&&(P=parseFloat(I)),P}function L(I,E){var T=[I],P=[],k=0,O=0;return o(E,function(x,z){x.indexOf("if")===0?k+=1:x==="/if"?k-=1:!k&&(x.indexOf("elseif")===0||x==="else")&&(T.push(x==="else"?["true"]:x.split(" ").slice(1)),P.push(E.slice(O,z)),O=z+1)}),P.push(E.slice(O)),{exps:T,sourcesInsideIf:P}}function M(I,E,T){var P=L(I,E),k=!1,O="";return o(P.exps,function(x,z){return k=at(x,T),k&&(O=ct(P.sourcesInsideIf[z],T)),!k}),O}function X(I,E,T){var P=at(I,T),k=a(P)?"@index":"@key",O={},x="";return o(P,function(z,Pe){O[k]=Pe,O["@this"]=z,l(T,O),x+=ct(E.slice(),T)}),x}function Lt(I,E,T){var P=s("as",I),k=I[P+1],O=at(I.slice(0,P),T),x={};return x[k]=O,ct(E,l(T,x))||""}function vi(I,E,T){var P=I.splice(E+1,T-E);return P.pop(),P}function yi(I,E,T){for(var P=N[I],k=1,O=0,x,z=O+w,Pe=E[z];k&&c(Pe);)Pe.indexOf(I)===0?k+=1:Pe.indexOf("/"+I)===0&&(k-=1,x=z),z+=w,Pe=E[z];if(k)throw Error(I+" needs {{/"+I+"}} expression.");return E[O]=P(E[O].split(" ").slice(1),vi(E,O,x),T),E}function at(I,E){var T=D(I[0],E);return T instanceof Function?Ii(T,I.slice(1),E):T}function Ii(I,E,T){var P=[];return o(E,function(k){P.push(D(k,T))}),I.apply(null,P)}function ct(I,E){for(var T=1,P=I[T],k,O,x;c(P);)k=P.split(" "),O=k[0],N[O]?(x=yi(O,I.splice(T,I.length-T),E),I=I.concat(x)):I[T]=at(k,E),T+=w,P=I[T];return I.join("")}function bi(I,E){return ct(y(I,h),E)}t.exports=bi},function(t,r,i){var s=i(1),o=i(31),a=7*24*60*60*1e3;function c(h){var g=new Date().getTime();return g-h>a}function l(h,g){var v="https://www.google-analytics.com/collect",d=location.hostname,u="event",f="use",p="TOAST UI "+h+" for "+d+": Statistics",_=window.localStorage.getItem(p);!s(window.tui)&&window.tui.usageStatistics===!1||_&&!c(_)||(window.localStorage.setItem(p,new Date().getTime()),setTimeout(function(){(document.readyState==="interactive"||document.readyState==="complete")&&o(v,{v:1,t:u,tid:g,cid:d,dp:d,dh:h,el:h,ec:f})},1e3))}t.exports=l},function(t,r,i){var s=i(6);function o(a,c){var l=document.createElement("img"),h="";return s(c,function(g,v){h+="&"+v+"="+g}),h=h.substring(1),l.src=a+"?"+h,l.style.display="none",document.body.appendChild(l),document.body.removeChild(l),l}t.exports=o}])})})(pr);var wi=pr.exports;const Ti=Ei(wi);const $e=fr.create(`<div class="modal">
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
            <use href="./img/spryte.svg#icon-mail"></use>
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
            <use href="./img/spryte.svg#icon-lock"></use>
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
                <use href="./img/spryte.svg#icon-google"></use>
            </svg>
        Sign in with Google
       </button>
    </div>
  </div>
`,{onShow:()=>document.addEventListener("keydown",mt),onClose:()=>document.removeEventListener("keydown",mt)}),Ae=fr.create(`<div class="modal">
    <button type="button" class="modal-close-btn">
      <svg class="icon-close" width="28" height="28">
        <use href="./img/spryte.svg#icon-close"></use>
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
            <use href="./img/spryte.svg#icon-mail"></use>
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
            <use href="./img/spryte.svg#icon-lock"></use>
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
                <use href="./img/spryte.svg#icon-google"></use>
            </svg>
         Sign in with Google
       </button>

    </div>
  </div>
`,{onShow:()=>document.addEventListener("keydown",mt),onClose:()=>document.removeEventListener("keydown",mt)});function mt(n){const e="Escape";n.code===e&&($e.close(),Ae.close())}/**
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
 */const gr=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Si=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},mr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,h=s>>2,g=(s&3)<<4|a>>4;let v=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(v=64)),r.push(t[h],t[g],t[v],t[d])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(gr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Si(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const g=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||g==null)throw new Pi;const v=s<<2|a>>4;if(r.push(v),l!==64){const d=a<<4&240|l>>2;if(r.push(d),g!==64){const u=l<<6&192|g;r.push(u)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Pi extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ai=function(n){const e=gr(n);return mr.encodeByteArray(e,!0)},_t=function(n){return Ai(n).replace(/\./g,"")},_r=function(n){try{return mr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ri(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ci=()=>Ri().__FIREBASE_DEFAULTS__,ki=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Oi=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_r(n[1]);return e&&JSON.parse(e)},cn=()=>{try{return Ci()||ki()||Oi()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},vr=n=>{var e,t;return(t=(e=cn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ni=n=>{const e=vr(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},yr=()=>{var n;return(n=cn())===null||n===void 0?void 0:n.config},Ir=n=>{var e;return(e=cn())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Di{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Li(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[_t(JSON.stringify(t)),_t(JSON.stringify(o)),a].join(".")}/**
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
 */function F(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(F())}function Mi(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Vi(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ui(){const n=F();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Fi(){try{return typeof indexedDB=="object"}catch{return!1}}function Bi(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const $i="FirebaseError";class se extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=$i,Object.setPrototypeOf(this,se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tt.prototype.create)}}class tt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Hi(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new se(i,a,r)}}function Hi(n,e){return n.replace(ji,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ji=/\{\$([^}]+)}/g;function zi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function vt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(kn(s)&&kn(o)){if(!vt(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function kn(n){return n!==null&&typeof n=="object"}/**
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
 */function nt(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fe(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Be(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Wi(n,e){const t=new qi(n,e);return t.subscribe.bind(t)}class qi{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Gi(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=xt),i.error===void 0&&(i.error=xt),i.complete===void 0&&(i.complete=xt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gi(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function xt(){}/**
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
 */function G(n){return n&&n._delegate?n._delegate:n}class ye{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const me="[DEFAULT]";/**
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
 */class Ki{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Di;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xi(e))try{this.getOrInitializeService({instanceIdentifier:me})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=me){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=me){return this.instances.has(e)}getOptions(e=me){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ji(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=me){return this.component?this.component.multipleInstances?e:me:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ji(n){return n===me?void 0:n}function Xi(n){return n.instantiationMode==="EAGER"}/**
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
 */class Yi{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ki(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var R;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(R||(R={}));const Qi={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},Zi=R.INFO,es={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},ts=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=es[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ln{constructor(e){this.name=e,this._logLevel=Zi,this._logHandler=ts,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}const ns=(n,e)=>e.some(t=>n instanceof t);let On,Nn;function rs(){return On||(On=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function is(){return Nn||(Nn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const br=new WeakMap,qt=new WeakMap,Er=new WeakMap,Mt=new WeakMap,un=new WeakMap;function ss(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(he(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&br.set(t,n)}).catch(()=>{}),un.set(e,n),e}function os(n){if(qt.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});qt.set(n,e)}let Gt={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return qt.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Er.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return he(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function as(n){Gt=n(Gt)}function cs(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Vt(this),e,...t);return Er.set(r,e.sort?e.sort():[e]),he(r)}:is().includes(n)?function(...e){return n.apply(Vt(this),e),he(br.get(this))}:function(...e){return he(n.apply(Vt(this),e))}}function ls(n){return typeof n=="function"?cs(n):(n instanceof IDBTransaction&&os(n),ns(n,rs())?new Proxy(n,Gt):n)}function he(n){if(n instanceof IDBRequest)return ss(n);if(Mt.has(n))return Mt.get(n);const e=ls(n);return e!==n&&(Mt.set(n,e),un.set(e,n)),e}const Vt=n=>un.get(n);function us(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=he(o);return r&&o.addEventListener("upgradeneeded",c=>{r(he(o.result),c.oldVersion,c.newVersion,he(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const ds=["get","getKey","getAll","getAllKeys","count"],hs=["put","add","delete","clear"],Ut=new Map;function Dn(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ut.get(e))return Ut.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=hs.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ds.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return Ut.set(e,s),s}as(n=>({...n,get:(e,t,r)=>Dn(e,t)||n.get(e,t,r),has:(e,t)=>!!Dn(e,t)||n.has(e,t)}));/**
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
 */class fs{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ps(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ps(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kt="@firebase/app",Ln="0.9.15";/**
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
 */const Ie=new ln("@firebase/app"),gs="@firebase/app-compat",ms="@firebase/analytics-compat",_s="@firebase/analytics",vs="@firebase/app-check-compat",ys="@firebase/app-check",Is="@firebase/auth",bs="@firebase/auth-compat",Es="@firebase/database",ws="@firebase/database-compat",Ts="@firebase/functions",Ss="@firebase/functions-compat",Ps="@firebase/installations",As="@firebase/installations-compat",Rs="@firebase/messaging",Cs="@firebase/messaging-compat",ks="@firebase/performance",Os="@firebase/performance-compat",Ns="@firebase/remote-config",Ds="@firebase/remote-config-compat",Ls="@firebase/storage",xs="@firebase/storage-compat",Ms="@firebase/firestore",Vs="@firebase/firestore-compat",Us="firebase",Fs="10.1.0";/**
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
 */const Jt="[DEFAULT]",Bs={[Kt]:"fire-core",[gs]:"fire-core-compat",[_s]:"fire-analytics",[ms]:"fire-analytics-compat",[ys]:"fire-app-check",[vs]:"fire-app-check-compat",[Is]:"fire-auth",[bs]:"fire-auth-compat",[Es]:"fire-rtdb",[ws]:"fire-rtdb-compat",[Ts]:"fire-fn",[Ss]:"fire-fn-compat",[Ps]:"fire-iid",[As]:"fire-iid-compat",[Rs]:"fire-fcm",[Cs]:"fire-fcm-compat",[ks]:"fire-perf",[Os]:"fire-perf-compat",[Ns]:"fire-rc",[Ds]:"fire-rc-compat",[Ls]:"fire-gcs",[xs]:"fire-gcs-compat",[Ms]:"fire-fst",[Vs]:"fire-fst-compat","fire-js":"fire-js",[Us]:"fire-js-all"};/**
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
 */const yt=new Map,Xt=new Map;function $s(n,e){try{n.container.addComponent(e)}catch(t){Ie.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Oe(n){const e=n.name;if(Xt.has(e))return Ie.debug(`There were multiple attempts to register component ${e}.`),!1;Xt.set(e,n);for(const t of yt.values())$s(t,n);return!0}function dn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Hs={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new tt("app","Firebase",Hs);/**
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
 */class js{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}/**
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
 */const xe=Fs;function wr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fe.create("bad-app-name",{appName:String(i)});if(t||(t=yr()),!t)throw fe.create("no-options");const s=yt.get(i);if(s){if(vt(t,s.options)&&vt(r,s.config))return s;throw fe.create("duplicate-app",{appName:i})}const o=new Yi(i);for(const c of Xt.values())o.addComponent(c);const a=new js(t,r,o);return yt.set(i,a),a}function Tr(n=Jt){const e=yt.get(n);if(!e&&n===Jt&&yr())return wr();if(!e)throw fe.create("no-app",{appName:n});return e}function pe(n,e,t){var r;let i=(r=Bs[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ie.warn(a.join(" "));return}Oe(new ye(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const zs="firebase-heartbeat-database",Ws=1,qe="firebase-heartbeat-store";let Ft=null;function Sr(){return Ft||(Ft=us(zs,Ws,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(qe)}}}).catch(n=>{throw fe.create("idb-open",{originalErrorMessage:n.message})})),Ft}async function qs(n){try{return await(await Sr()).transaction(qe).objectStore(qe).get(Pr(n))}catch(e){if(e instanceof se)Ie.warn(e.message);else{const t=fe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ie.warn(t.message)}}}async function xn(n,e){try{const r=(await Sr()).transaction(qe,"readwrite");await r.objectStore(qe).put(e,Pr(n)),await r.done}catch(t){if(t instanceof se)Ie.warn(t.message);else{const r=fe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ie.warn(r.message)}}}function Pr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Gs=1024,Ks=30*24*60*60*1e3;class Js{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ys(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Mn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Ks}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Mn(),{heartbeatsToSend:t,unsentEntries:r}=Xs(this._heartbeatsCache.heartbeats),i=_t(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Mn(){return new Date().toISOString().substring(0,10)}function Xs(n,e=Gs){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vn(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Vn(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ys{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fi()?Bi().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qs(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return xn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return xn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vn(n){return _t(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Qs(n){Oe(new ye("platform-logger",e=>new fs(e),"PRIVATE")),Oe(new ye("heartbeat",e=>new Js(e),"PRIVATE")),pe(Kt,Ln,n),pe(Kt,Ln,"esm2017"),pe("fire-js","")}Qs("");var Zs="firebase",eo="10.1.0";/**
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
 */pe(Zs,eo,"app");/**
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
 */class B{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}B.UNAUTHENTICATED=new B(null),B.GOOGLE_CREDENTIALS=new B("google-credentials-uid"),B.FIRST_PARTY=new B("first-party-uid"),B.MOCK_USER=new B("mock-user");/**
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
 */let Me="10.1.0";/**
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
 */const Ne=new ln("@firebase/firestore");function It(n,...e){if(Ne.logLevel<=R.DEBUG){const t=e.map(fn);Ne.debug(`Firestore (${Me}): ${n}`,...t)}}function hn(n,...e){if(Ne.logLevel<=R.ERROR){const t=e.map(fn);Ne.error(`Firestore (${Me}): ${n}`,...t)}}function Ar(n,...e){if(Ne.logLevel<=R.WARN){const t=e.map(fn);Ne.warn(`Firestore (${Me}): ${n}`,...t)}}function fn(n){if(typeof n=="string")return n;try{/**
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
 */function ge(n="Unexpected state"){const e=`FIRESTORE (${Me}) INTERNAL ASSERTION FAILED: `+n;throw hn(e),new Error(e)}function H(n,e){n||ge()}function to(n,e){return n}/**
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
 */const Un="ok",no="cancelled",He="unknown",C="invalid-argument",ro="deadline-exceeded",io="not-found",so="permission-denied",Yt="unauthenticated",oo="resource-exhausted",De="failed-precondition",ao="aborted",co="out-of-range",lo="unimplemented",uo="internal",ho="unavailable";class S extends se{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(B.UNAUTHENTICATED))}shutdown(){}}class po{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class go{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(H(typeof e.accessToken=="string"),new Rr(e.accessToken,new B(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class mo{constructor(e,t,r){this.t=e,this.i=t,this.o=r,this.type="FirstParty",this.user=B.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class _o{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new mo(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(B.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yo{constructor(e){this.h=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(H(typeof e.token=="string"),new vo(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class Io{constructor(e,t,r,i,s,o,a,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ge{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ge("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ge&&e.projectId===this.projectId&&e.database===this.database}}class Ke{constructor(e,t,r){t===void 0?t=0:t>e.length&&ge(),r===void 0?r=e.length-t:r>e.length-t&&ge(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ke.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ke?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class U extends Ke{construct(e,t,r){return new U(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new S(C,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new U(t)}static emptyPath(){return new U([])}}const bo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends Ke{construct(e,t,r){return new ae(e,t,r)}static isValidIdentifier(e){return bo.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ae(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new S(C,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new S(C,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new S(C,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new S(C,"Unterminated ` in path: "+e);return new ae(t)}static emptyPath(){return new ae([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(U.fromString(e))}static fromName(e){return new q(U.fromString(e).popFirst(5))}static empty(){return new q(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&U.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return U.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new U(e.slice()))}}/**
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
 */function Eo(n,e,t){if(!t)throw new S(C,`Function ${n}() cannot be called with an empty ${e}.`)}function Fn(n){if(!q.isDocumentKey(n))throw new S(C,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function wo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ge()}function Cr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new S(C,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wo(n);throw new S(C,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function kr(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */let ut=null;function To(){return ut===null?ut=function(){return 268435456+Math.round(2147483648*Math.random())}():ut++,"0x"+ut.toString(16)}function Bn(n){return n===0&&1/n==-1/0}/**
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
 */const So={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var $n,A;function Hn(n){if(n===void 0)return hn("RPC_ERROR","HTTP error has no status"),He;switch(n){case 200:return Un;case 400:return De;case 401:return Yt;case 403:return so;case 404:return io;case 409:return ao;case 416:return co;case 429:return oo;case 499:return no;case 500:return He;case 501:return lo;case 503:return ho;case 504:return ro;default:return n>=200&&n<300?Un:n>=400&&n<500?De:n>=500&&n<600?uo:He}}/**
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
 */(A=$n||($n={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";class Po extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+t.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get P(){return!1}R(t,r,i,s,o){const a=To(),c=this.I(t,r);It("RestConnection",`Sending RPC '${t}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(l,s,o),this.p(t,c,l,i).then(h=>(It("RestConnection",`Received RPC '${t}' ${a}: `,h),h),h=>{throw Ar("RestConnection",`RPC '${t}' ${a} failed with error: `,h,"url: ",c,"request:",i),h})}g(t,r,i,s,o,a){return this.R(t,r,i,s,o)}V(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Me}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}I(t,r){const i=So[t];return`${this.m}/v1/${r}:${i}`}}{constructor(e,t){super(e),this.F=t}v(e,t){throw new Error("Not supported by FetchConnection")}async p(e,t,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(t,{method:"POST",headers:r,body:o})}catch(c){const l=c;throw new S(Hn(l.status),"Request failed with error: "+l.statusText)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);const l=(s=c==null?void 0:c.error)===null||s===void 0?void 0:s.message;throw new S(Hn(a.status),`Request failed with error: ${l??a.statusText}`)}return a.json()}}/**
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
 */function Ao(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Ro{static C(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ao(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function Je(n,e){return n<e?-1:n>e?1:0}function Co(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */function jn(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function pn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
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
 */class ko extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class re{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ko("Invalid base64 string: "+s):s}}(e);return new re(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new re(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Je(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}re.EMPTY_BYTE_STRING=new re("");const Oo=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xe(n){if(H(!!n),typeof n=="string"){let e=0;const t=Oo.exec(n);if(H(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$(n.seconds),nanos:$(n.nanos)}}function $(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Qt(n){return typeof n=="string"?re.fromBase64String(n):re.fromUint8Array(n)}/**
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
 */class te{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new S(C,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new S(C,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new S(C,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new S(C,"Timestamp seconds out of range: "+e)}static now(){return te.fromMillis(Date.now())}static fromDate(e){return te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new te(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Je(this.nanoseconds,e.nanoseconds):Je(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function Or(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Nr(n){const e=n.mapValue.fields.__previous_value__;return Or(e)?Nr(e):e}function Zt(n){const e=Xe(n.mapValue.fields.__local_write_time__.timestampValue);return new te(e.seconds,e.nanos)}function en(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Or(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:ge()}function tn(n,e){if(n===e)return!0;const t=en(n);if(t!==en(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Zt(n).isEqual(Zt(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Xe(i.timestampValue),a=Xe(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Qt(i.bytesValue).isEqual(Qt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return $(i.geoPointValue.latitude)===$(s.geoPointValue.latitude)&&$(i.geoPointValue.longitude)===$(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return $(i.integerValue)===$(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=$(i.doubleValue),a=$(s.doubleValue);return o===a?Bn(o)===Bn(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Co(n.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(jn(o)!==jn(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!tn(o[c],a[c])))return!1;return!0}(n,e);default:return ge()}}function Bt(n){return!!n&&"mapValue"in n}function je(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return pn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=je(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=je(n.arrayValue.values[t]);return e}return Object.assign({},n)}/**
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
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new te(0,0))}static max(){return new V(new te(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Q{constructor(e){this.value=e}static empty(){return new Q({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Bt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=je(t)}setAll(e){let t=ae.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=je(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Bt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Bt(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){pn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Q(je(this.value))}}/**
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
 */class Y{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Y(e,0,V.min(),V.min(),V.min(),Q.empty(),0)}static newFoundDocument(e,t,r,i){return new Y(e,1,t,V.min(),r,i,0)}static newNoDocument(e,t){return new Y(e,2,t,V.min(),V.min(),Q.empty(),0)}static newUnknownDocument(e,t){return new Y(e,3,t,V.min(),V.min(),Q.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(V.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Q.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Q.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Y&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Y(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class No{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.q=null,this.B=null,this.startAt,this.endAt}}class Do{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function $t(n){return H(!!n),V.fromTimestamp(function(t){const r=Xe(t);return new te(r.seconds,r.nanos)}(n))}function Lo(n,e){return function(r){return new U(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function xo(n,e){return Lo(n.databaseId,e.path)}function zn(n,e){const t=function(i){const s=U.fromString(i);return H(Dr(s)),s}(e);if(t.get(1)!==n.databaseId.projectId)throw new S(C,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new S(C,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(function(i){return H(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(t))}function Mo(n){return new U(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vo(n,e){return"found"in e?function(r,i){H(!!i.found),i.found.name,i.found.updateTime;const s=zn(r,i.found.name),o=$t(i.found.updateTime),a=i.found.createTime?$t(i.found.createTime):V.min(),c=new Q({mapValue:{fields:i.found.fields}});return Y.newFoundDocument(s,o,a,c)}(n,e):"missing"in e?function(r,i){H(!!i.missing),H(!!i.readTime);const s=zn(r,i.missing),o=$t(i.readTime);return Y.newNoDocument(s,o)}(n,e):ge()}function Dr(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function Uo(n){return new Do(n,!0)}/**
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
 */class Fo extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.Z=!1}X(){if(this.Z)throw new S(De,"The client has already been terminated.")}R(e,t,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.R(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Yt&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(He,i.toString())})}g(e,t,r,i){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.g(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Yt&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new S(He,s.toString())})}terminate(){this.Z=!0}}async function Bo(n,e){const t=to(n),r=Mo(t.serializer)+"/documents",i={documents:e.map(c=>xo(t.serializer,c))},s=await t.g("BatchGetDocuments",r,i,e.length),o=new Map;s.forEach(c=>{const l=Vo(t.serializer,c);o.set(l.key.toString(),l)});const a=[];return e.forEach(c=>{const l=o.get(c.toString());H(!!l),a.push(l)}),a}/**
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
 */const ze=new Map;function $o(n){if(n._terminated)throw new S(De,"The client has already been terminated.");if(!ze.has(n)){It("ComponentProvider","Initializing Datastore");const e=function(s){return new Po(s,fetch.bind(null))}(function(s,o,a,c){return new Io(s,o,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,kr(c.experimentalLongPollingOptions),c.useFetchStreams)}(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),t=Uo(n._databaseId),r=function(s,o,a,c){return new Fo(s,o,a,c)}(n._authCredentials,n._appCheckCredentials,e,t);ze.set(n,r)}return ze.get(n)}class Wn{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new S(C,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new S(C,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,c){if(o===!0&&c===!0)throw new S(C,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kr((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new S(C,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new S(C,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new S(C,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gn{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wn({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(De,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new S(De,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wn(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fo;switch(r.type){case"firstParty":return new _o(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new S(C,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ze.get(t);r&&(It("ComponentProvider","Removing Datastore"),ze.delete(t),r.terminate())}(this),Promise.resolve()}}function Ho(n,e){const t=typeof n=="object"?n:Tr(),r=typeof n=="string"?n:e||"(default)",i=dn(t,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=Ni("firestore");s&&jo(i,...s)}return i}function jo(n,e,t,r={}){var i;const s=(n=Cr(n,gn))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ar("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=B.MOCK_USER;else{a=Li(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new S(C,"mockUserToken must contain 'sub' or 'user_id' field!");c=new B(l)}n._authCredentials=new po(new Rr(a,c))}}/**
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
 */class mn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mn(this.firestore,e,this._query)}}class ne{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ye(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ne(this.firestore,e,this._key)}}class Ye extends mn{constructor(e,t,r){super(e,t,function(s){return new No(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ne(this.firestore,null,new q(e))}withConverter(e){return new Ye(this.firestore,e,this._path)}}function zo(n,e,...t){if(n=G(n),arguments.length===1&&(e=Ro.C()),Eo("doc","path",e),n instanceof gn){const r=U.fromString(e,...t);return Fn(r),new ne(n,null,new q(r))}{if(!(n instanceof ne||n instanceof Ye))throw new S(C,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(U.fromString(e,...t));return Fn(r),new ne(n.firestore,n instanceof Ye?n.converter:null,new q(r))}}/**
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
 */class bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bt(re.fromBase64String(e))}catch(t){throw new S(C,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new bt(re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Lr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new S(C,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Wo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new S(C,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new S(C,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Je(this._lat,e._lat)||Je(this._long,e._long)}}const qo=new RegExp("[~\\*/\\[\\]]");function Go(n,e,t){if(e.search(qo)>=0)throw qn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Lr(...e.split("."))._internalPath}catch{throw qn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function qn(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new S(C,a+n+c)}/**
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
 */class xr{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ko(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ko extends xr{data(){return super.data()}}function Jo(n,e){return typeof e=="string"?Go(n,e):e instanceof Lr?e._internalPath:e._delegate._internalPath}class Xo extends class{convertValue(t,r="none"){switch(en(t)){case 0:return null;case 1:return t.booleanValue;case 2:return $(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,r);case 5:return t.stringValue;case 6:return this.convertBytes(Qt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,r);case 10:return this.convertObject(t.mapValue,r);default:throw ge()}}convertObject(t,r){return this.convertObjectMap(t.fields,r)}convertObjectMap(t,r="none"){const i={};return pn(t,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertGeoPoint(t){return new Wo($(t.latitude),$(t.longitude))}convertArray(t,r){return(t.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(t,r){switch(r){case"previous":const i=Nr(t);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(Zt(t));default:return null}}convertTimestamp(t){const r=Xe(t);return new te(r.seconds,r.nanos)}convertDocumentKey(t,r){const i=U.fromString(t);H(Dr(i));const s=new Ge(i.get(1),i.get(3)),o=new q(i.popFirst(5));return s.isEqual(r)||hn(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new bt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ne(this.firestore,null,t)}}function Yo(n){const e=$o((n=Cr(n,ne)).firestore),t=new Xo(n.firestore);return Bo(e,[n._key]).then(r=>{H(r.length===1);const i=r[0];return new xr(n.firestore,t,n._key,i.isFoundDocument()?i:null,n.converter)})}(function(){(function(t){Me=t})(`${xe}_lite`),Oe(new ye("firestore/lite",(e,{instanceIdentifier:t,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new gn(new go(e.getProvider("auth-internal")),new yo(e.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new S(C,'"projectId" not provided in firebase.initializeApp.');return new Ge(a.options.projectId,c)}(i,t),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),pe("firestore-lite","4.1.0",""),pe("firestore-lite","4.1.0","esm2017")})();function _n(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Mr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qo=Mr,Vr=new tt("auth","Firebase",Mr());/**
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
 */const Et=new ln("@firebase/auth");function Zo(n,...e){Et.logLevel<=R.WARN&&Et.warn(`Auth (${xe}): ${n}`,...e)}function ht(n,...e){Et.logLevel<=R.ERROR&&Et.error(`Auth (${xe}): ${n}`,...e)}/**
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
 */function j(n,...e){throw vn(n,...e)}function K(n,...e){return vn(n,...e)}function Ur(n,e,t){const r=Object.assign(Object.assign({},Qo()),{[e]:t});return new tt("auth","Firebase",r).create(e,{appName:n.name})}function ea(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&j(n,"argument-error"),Ur(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vn(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Vr.create(n,...e)}function b(n,e,...t){if(!n)throw vn(e,...t)}function Z(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ht(e),new Error(e)}function ie(n,e){n||Z(e)}/**
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
 */function nn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ta(){return Gn()==="http:"||Gn()==="https:"}function Gn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function na(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ta()||Mi()||"connection"in navigator)?navigator.onLine:!0}function ra(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class rt{constructor(e,t){this.shortDelay=e,this.longDelay=t,ie(t>e,"Short delay should be less than long delay!"),this.isMobile=xi()||Vi()}get(){return na()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yn(n,e){ie(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Fr{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Z("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Z("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Z("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ia={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sa=new rt(3e4,6e4);function Ve(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Te(n,e,t,r,i={}){return Br(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=nt(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Fr.fetch()($r(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Br(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ia),e);try{const i=new oa(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw dt(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw dt(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw dt(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw dt(n,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ur(n,h,l);j(n,h)}}catch(i){if(i instanceof se)throw i;j(n,"network-request-failed",{message:String(i)})}}async function it(n,e,t,r,i={}){const s=await Te(n,e,t,r,i);return"mfaPendingCredential"in s&&j(n,"multi-factor-auth-required",{_serverResponse:s}),s}function $r(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?yn(n.config,i):`${n.config.apiScheme}://${i}`}class oa{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(K(this.auth,"network-request-failed")),sa.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function dt(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=K(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function aa(n,e){return Te(n,"POST","/v1/accounts:delete",e)}async function ca(n,e){return Te(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function We(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function la(n,e=!1){const t=G(n),r=await t.getIdToken(e),i=In(r);b(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:We(Ht(i.auth_time)),issuedAtTime:We(Ht(i.iat)),expirationTime:We(Ht(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ht(n){return Number(n)*1e3}function In(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ht("JWT malformed, contained fewer than 3 sections"),null;try{const i=_r(t);return i?JSON.parse(i):(ht("Failed to decode base64 JWT payload"),null)}catch(i){return ht("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ua(n){const e=In(n);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Le(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof se&&da(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function da({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ha{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Hr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=We(this.lastLoginAt),this.creationTime=We(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wt(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Le(n,ca(t,{idToken:r}));b(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ga(s.providerUserInfo):[],a=pa(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Hr(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,g)}async function fa(n){const e=G(n);await wt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pa(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ga(n){return n.map(e=>{var{providerId:t}=e,r=_n(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ma(n,e){const t=await Br(n,{},async()=>{const r=nt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=$r(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Fr.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class Qe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ua(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await ma(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Qe;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qe,this.toJSON())}_performRefresh(){return Z("not implemented")}}/**
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
 */function oe(n,e){b(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ve{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=_n(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ha(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Hr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Le(this,this.stsTokenManager.getToken(this.auth,e));return b(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return la(this,e)}reload(){return fa(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ve(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await wt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Le(this,aa(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,l,h;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(i=t.email)!==null&&i!==void 0?i:void 0,d=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,u=(o=t.photoURL)!==null&&o!==void 0?o:void 0,f=(a=t.tenantId)!==null&&a!==void 0?a:void 0,p=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,_=(l=t.createdAt)!==null&&l!==void 0?l:void 0,w=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:N,emailVerified:m,isAnonymous:y,providerData:D,stsTokenManager:L}=t;b(N&&L,e,"internal-error");const M=Qe.fromJSON(this.name,L);b(typeof N=="string",e,"internal-error"),oe(g,e.name),oe(v,e.name),b(typeof m=="boolean",e,"internal-error"),b(typeof y=="boolean",e,"internal-error"),oe(d,e.name),oe(u,e.name),oe(f,e.name),oe(p,e.name),oe(_,e.name),oe(w,e.name);const X=new ve({uid:N,auth:e,email:v,emailVerified:m,displayName:g,isAnonymous:y,photoURL:u,phoneNumber:d,tenantId:f,stsTokenManager:M,createdAt:_,lastLoginAt:w});return D&&Array.isArray(D)&&(X.providerData=D.map(Lt=>Object.assign({},Lt))),p&&(X._redirectEventId=p),X}static async _fromIdTokenResponse(e,t,r=!1){const i=new Qe;i.updateFromServerResponse(t);const s=new ve({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wt(s),s}}/**
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
 */const Kn=new Map;function ee(n){ie(n instanceof Function,"Expected a class definition");let e=Kn.get(n);return e?(ie(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Kn.set(n,e),e)}/**
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
 */class jr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jr.type="NONE";const Jn=jr;/**
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
 */function ft(n,e,t){return`firebase:${n}:${e}:${t}`}class Re{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ft(this.userKey,i.apiKey,s),this.fullPersistenceKey=ft("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ve._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Re(ee(Jn),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||ee(Jn);const o=ft(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const h=await l._get(o);if(h){const g=ve._fromJSON(e,h);l!==s&&(a=g),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Re(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Re(s,e,r))}}/**
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
 */function Xn(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kr(e))return"Blackberry";if(Jr(e))return"Webos";if(bn(e))return"Safari";if((e.includes("chrome/")||Wr(e))&&!e.includes("edge/"))return"Chrome";if(Gr(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zr(n=F()){return/firefox\//i.test(n)}function bn(n=F()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wr(n=F()){return/crios\//i.test(n)}function qr(n=F()){return/iemobile/i.test(n)}function Gr(n=F()){return/android/i.test(n)}function Kr(n=F()){return/blackberry/i.test(n)}function Jr(n=F()){return/webos/i.test(n)}function Ot(n=F()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function _a(n=F()){var e;return Ot(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function va(){return Ui()&&document.documentMode===10}function Xr(n=F()){return Ot(n)||Gr(n)||Jr(n)||Kr(n)||/windows phone/i.test(n)||qr(n)}function ya(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Yr(n,e=[]){let t;switch(n){case"Browser":t=Xn(F());break;case"Worker":t=`${Xn(F())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xe}/${r}`}async function Qr(n,e){return Te(n,"GET","/v2/recaptchaConfig",Ve(n,e))}function Yn(n){return n!==void 0&&n.enterprise!==void 0}class Zr{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function Ia(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ei(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=K("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Ia().appendChild(r)})}function ba(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Ea="https://www.google.com/recaptcha/enterprise.js?render=",wa="recaptcha-enterprise",Ta="NO_RECAPTCHA";class ti{constructor(e){this.type=wa,this.auth=Se(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Qr(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Zr(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Yn(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(Ta)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Yn(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ei(Ea+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Tt(n,e,t,r=!1){const i=new ti(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Sa{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Pa{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qn(this),this.idTokenSubscription=new Qn(this),this.beforeStateQueue=new Sa(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ee(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Re.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wt(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ra()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?G(e):null;return t&&b(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ee(e))})}async initializeRecaptchaConfig(){const e=await Qr(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Zr(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new ti(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new tt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ee(e)||this._popupRedirectResolver;b(t,this,"argument-error"),this.redirectPersistenceManager=await Re.create(this,[ee(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return b(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Zo(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Se(n){return G(n)}class Qn{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wi(t=>this.observer=t)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Aa(n,e){const t=dn(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(vt(s,e??{}))return i;j(i,"already-initialized")}return t.initialize({options:e})}function Ra(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ee);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ca(n,e,t){const r=Se(n);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=ni(e),{host:o,port:a}=ka(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Oa()}function ni(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ka(n){const e=ni(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Zn(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Zn(o)}}}function Zn(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Oa(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class En{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Z("not implemented")}_getIdTokenResponse(e){return Z("not implemented")}_linkToIdToken(e,t){return Z("not implemented")}_getReauthenticationResolver(e){return Z("not implemented")}}async function Na(n,e){return Te(n,"POST","/v1/accounts:update",e)}/**
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
 */async function jt(n,e){return it(n,"POST","/v1/accounts:signInWithPassword",Ve(n,e))}/**
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
 */async function Da(n,e){return it(n,"POST","/v1/accounts:signInWithEmailLink",Ve(n,e))}async function La(n,e){return it(n,"POST","/v1/accounts:signInWithEmailLink",Ve(n,e))}/**
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
 */class Ze extends En{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ze(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ze(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await Tt(e,r,"signInWithPassword");return jt(e,i)}else return jt(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Tt(e,r,"signInWithPassword");return jt(e,s)}else return Promise.reject(i)});case"emailLink":return Da(e,{email:this._email,oobCode:this._password});default:j(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Na(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return La(e,{idToken:t,email:this._email,oobCode:this._password});default:j(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ce(n,e){return it(n,"POST","/v1/accounts:signInWithIdp",Ve(n,e))}/**
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
 */const xa="http://localhost";class be extends En{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new be(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):j("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=_n(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new be(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ce(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ce(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ce(e,t)}buildRequest(){const e={requestUri:xa,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=nt(t)}return e}}/**
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
 */function Ma(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Va(n){const e=Fe(Be(n)).link,t=e?Fe(Be(e)).deep_link_id:null,r=Fe(Be(n)).deep_link_id;return(r?Fe(Be(r)).link:null)||r||t||e||n}class wn{constructor(e){var t,r,i,s,o,a;const c=Fe(Be(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,g=Ma((i=c.mode)!==null&&i!==void 0?i:null);b(l&&h&&g,"argument-error"),this.apiKey=l,this.operation=g,this.code=h,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Va(e);try{return new wn(t)}catch{return null}}}/**
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
 */class Ue{constructor(){this.providerId=Ue.PROVIDER_ID}static credential(e,t){return Ze._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=wn.parseLink(t);return b(r,"argument-error"),Ze._fromEmailAndCode(e,r.code,r.tenantId)}}Ue.PROVIDER_ID="password";Ue.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ue.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Tn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class st extends Tn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ce extends st{constructor(){super("facebook.com")}static credential(e){return be._fromParams({providerId:ce.PROVIDER_ID,signInMethod:ce.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ce.credentialFromTaggedObject(e)}static credentialFromError(e){return ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ce.credential(e.oauthAccessToken)}catch{return null}}}ce.FACEBOOK_SIGN_IN_METHOD="facebook.com";ce.PROVIDER_ID="facebook.com";/**
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
 */class W extends st{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return be._fromParams({providerId:W.PROVIDER_ID,signInMethod:W.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return W.credentialFromTaggedObject(e)}static credentialFromError(e){return W.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return W.credential(t,r)}catch{return null}}}W.GOOGLE_SIGN_IN_METHOD="google.com";W.PROVIDER_ID="google.com";/**
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
 */class le extends st{constructor(){super("github.com")}static credential(e){return be._fromParams({providerId:le.PROVIDER_ID,signInMethod:le.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return le.credentialFromTaggedObject(e)}static credentialFromError(e){return le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return le.credential(e.oauthAccessToken)}catch{return null}}}le.GITHUB_SIGN_IN_METHOD="github.com";le.PROVIDER_ID="github.com";/**
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
 */class ue extends st{constructor(){super("twitter.com")}static credential(e,t){return be._fromParams({providerId:ue.PROVIDER_ID,signInMethod:ue.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ue.credentialFromTaggedObject(e)}static credentialFromError(e){return ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ue.credential(t,r)}catch{return null}}}ue.TWITTER_SIGN_IN_METHOD="twitter.com";ue.PROVIDER_ID="twitter.com";/**
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
 */async function zt(n,e){return it(n,"POST","/v1/accounts:signUp",Ve(n,e))}/**
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
 */class Ee{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await ve._fromIdTokenResponse(e,r,i),o=er(r);return new Ee({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=er(r);return new Ee({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function er(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class St extends se{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,St.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new St(e,t,r,i)}}function ri(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?St._fromErrorAndOperation(n,s,e,r):s})}async function Ua(n,e,t=!1){const r=await Le(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ee._forOperation(n,"link",r)}/**
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
 */async function Fa(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await Le(n,ri(r,i,e,n),t);b(s.idToken,r,"internal-error");const o=In(s.idToken);b(o,r,"internal-error");const{sub:a}=o;return b(n.uid===a,r,"user-mismatch"),Ee._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&j(r,"user-mismatch"),s}}/**
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
 */async function ii(n,e,t=!1){const r="signIn",i=await ri(n,r,e),s=await Ee._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Ba(n,e){return ii(Se(n),e)}async function $a(n,e,t){var r;const i=Se(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Tt(i,s,"signUpPassword");o=zt(i,l)}else o=zt(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const h=await Tt(i,s,"signUpPassword");return zt(i,h)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await Ee._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Ha(n,e,t){return Ba(G(n),Ue.credential(e,t))}/**
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
 */async function ja(n,e){return Te(n,"POST","/v1/accounts:update",e)}/**
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
 */async function za(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=G(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Le(r,ja(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Wa(n,e,t,r){return G(n).onIdTokenChanged(e,t,r)}function qa(n,e,t){return G(n).beforeAuthStateChanged(e,t)}function Ga(n,e,t,r){return G(n).onAuthStateChanged(e,t,r)}function Ka(n){return G(n).signOut()}const Pt="__sak";/**
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
 */class si{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Pt,"1"),this.storage.removeItem(Pt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Ja(){const n=F();return bn(n)||Ot(n)}const Xa=1e3,Ya=10;class oi extends si{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ja()&&ya(),this.fallbackToPolling=Xr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);va()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ya):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Xa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}oi.type="LOCAL";const Qa=oi;/**
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
 */class ai extends si{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ai.type="SESSION";const ci=ai;/**
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
 */function Za(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Nt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Nt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await Za(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nt.receivers=[];/**
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
 */function Sn(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ec{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Sn("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const v=g;if(v.data.eventId===l)switch(v.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(v.data.response);break;default:clearTimeout(h),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function J(){return window}function tc(n){J().location.href=n}/**
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
 */function li(){return typeof J().WorkerGlobalScope<"u"&&typeof J().importScripts=="function"}async function nc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rc(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ic(){return li()?self:null}/**
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
 */const ui="firebaseLocalStorageDb",sc=1,At="firebaseLocalStorage",di="fbase_key";class ot{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Dt(n,e){return n.transaction([At],e?"readwrite":"readonly").objectStore(At)}function oc(){const n=indexedDB.deleteDatabase(ui);return new ot(n).toPromise()}function rn(){const n=indexedDB.open(ui,sc);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(At,{keyPath:di})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(At)?e(r):(r.close(),await oc(),e(await rn()))})})}async function tr(n,e,t){const r=Dt(n,!0).put({[di]:e,value:t});return new ot(r).toPromise()}async function ac(n,e){const t=Dt(n,!1).get(e),r=await new ot(t).toPromise();return r===void 0?null:r.value}function nr(n,e){const t=Dt(n,!0).delete(e);return new ot(t).toPromise()}const cc=800,lc=3;class hi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>lc)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return li()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nt._getInstance(ic()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await nc(),!this.activeServiceWorker)return;this.sender=new ec(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rn();return await tr(e,Pt,"1"),await nr(e,Pt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>tr(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ac(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Dt(i,!1).getAll();return new ot(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hi.type="LOCAL";const uc=hi;new rt(3e4,6e4);/**
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
 */function fi(n,e){return e?ee(e):(b(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Pn extends En{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ce(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ce(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ce(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function dc(n){return ii(n.auth,new Pn(n),n.bypassAuthState)}function hc(n){const{auth:e,user:t}=n;return b(t,e,"internal-error"),Fa(t,new Pn(n),n.bypassAuthState)}async function fc(n){const{auth:e,user:t}=n;return b(t,e,"internal-error"),Ua(t,new Pn(n),n.bypassAuthState)}/**
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
 */class pi{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dc;case"linkViaPopup":case"linkViaRedirect":return fc;case"reauthViaPopup":case"reauthViaRedirect":return hc;default:j(this.auth,"internal-error")}}resolve(e){ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pc=new rt(2e3,1e4);async function gc(n,e,t){const r=Se(n);ea(n,e,Tn);const i=fi(r,t);return new _e(r,"signInViaPopup",e,i).executeNotNull()}class _e extends pi{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,_e.currentPopupAction&&_e.currentPopupAction.cancel(),_e.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){ie(this.filter.length===1,"Popup operations only handle one event");const e=Sn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(K(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(K(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_e.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(K(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pc.get())};e()}}_e.currentPopupAction=null;/**
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
 */const mc="pendingRedirect",pt=new Map;class _c extends pi{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=pt.get(this.auth._key());if(!e){try{const r=await vc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}pt.set(this.auth._key(),e)}return this.bypassAuthState||pt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vc(n,e){const t=bc(e),r=Ic(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function yc(n,e){pt.set(n._key(),e)}function Ic(n){return ee(n._redirectPersistence)}function bc(n){return ft(mc,n.config.apiKey,n.name)}async function Ec(n,e,t=!1){const r=Se(n),i=fi(r,e),o=await new _c(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const wc=10*60*1e3;class Tc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sc(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!gi(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(K(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wc&&this.cachedEventUids.clear(),this.cachedEventUids.has(rr(e))}saveEventToCache(e){this.cachedEventUids.add(rr(e)),this.lastProcessedEventTime=Date.now()}}function rr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function gi({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sc(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gi(n);default:return!1}}/**
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
 */async function Pc(n,e={}){return Te(n,"GET","/v1/projects",e)}/**
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
 */const Ac=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rc=/^https?/;async function Cc(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Pc(n);for(const t of e)try{if(kc(t))return}catch{}j(n,"unauthorized-domain")}function kc(n){const e=nn(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Rc.test(t))return!1;if(Ac.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Oc=new rt(3e4,6e4);function ir(){const n=J().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Nc(n){return new Promise((e,t)=>{var r,i,s;function o(){ir(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ir(),t(K(n,"network-request-failed"))},timeout:Oc.get()})}if(!((i=(r=J().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=J().gapi)===null||s===void 0)&&s.load)o();else{const a=ba("iframefcb");return J()[a]=()=>{gapi.load?o():t(K(n,"network-request-failed"))},ei(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw gt=null,e})}let gt=null;function Dc(n){return gt=gt||Nc(n),gt}/**
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
 */const Lc=new rt(5e3,15e3),xc="__/auth/iframe",Mc="emulator/auth/iframe",Vc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fc(n){const e=n.config;b(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?yn(e,Mc):`https://${n.config.authDomain}/${xc}`,r={apiKey:e.apiKey,appName:n.name,v:xe},i=Uc.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${nt(r).slice(1)}`}async function Bc(n){const e=await Dc(n),t=J().gapi;return b(t,n,"internal-error"),e.open({where:document.body,url:Fc(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vc,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=K(n,"network-request-failed"),a=J().setTimeout(()=>{s(o)},Lc.get());function c(){J().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const $c={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hc=500,jc=600,zc="_blank",Wc="http://localhost";class sr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qc(n,e,t,r=Hc,i=jc){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},$c),{width:r.toString(),height:i.toString(),top:s,left:o}),l=F().toLowerCase();t&&(a=Wr(l)?zc:t),zr(l)&&(e=e||Wc,c.scrollbars="yes");const h=Object.entries(c).reduce((v,[d,u])=>`${v}${d}=${u},`,"");if(_a(l)&&a!=="_self")return Gc(e||"",a),new sr(null);const g=window.open(e||"",a,h);b(g,n,"popup-blocked");try{g.focus()}catch{}return new sr(g)}function Gc(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Kc="__/auth/handler",Jc="emulator/auth/handler",Xc=encodeURIComponent("fac");async function or(n,e,t,r,i,s){b(n.config.authDomain,n,"auth-domain-config-required"),b(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:xe,eventId:i};if(e instanceof Tn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",zi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,g]of Object.entries(s||{}))o[h]=g}if(e instanceof st){const h=e.getScopes().filter(g=>g!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await n._getAppCheckToken(),l=c?`#${Xc}=${encodeURIComponent(c)}`:"";return`${Yc(n)}?${nt(a).slice(1)}${l}`}function Yc({config:n}){return n.emulator?yn(n,Jc):`https://${n.authDomain}/${Kc}`}/**
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
 */const Wt="webStorageSupport";class Qc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ci,this._completeRedirectFn=Ec,this._overrideRedirectResult=yc}async _openPopup(e,t,r,i){var s;ie((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await or(e,t,r,nn(),i);return qc(e,o,Sn())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await or(e,t,r,nn(),i);return tc(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(ie(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Bc(e),r=new Tc(e);return t.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Wt,{type:Wt},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Wt];o!==void 0&&t(!!o),j(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Cc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Xr()||bn()||Ot()}}const Zc=Qc;var ar="@firebase/auth",cr="1.1.0";/**
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
 */class el{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tl(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function nl(n){Oe(new ye("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yr(n)},l=new Pa(r,i,s,c);return Ra(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Oe(new ye("auth-internal",e=>{const t=Se(e.getProvider("auth").getImmediate());return(r=>new el(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pe(ar,cr,tl(n)),pe(ar,cr,"esm2017")}/**
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
 */const rl=5*60,il=Ir("authIdTokenMaxAge")||rl;let lr=null;const sl=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>il)return;const i=t==null?void 0:t.token;lr!==i&&(lr=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ol(n=Tr()){const e=dn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Aa(n,{popupRedirectResolver:Zc,persistence:[uc,Qa,ci]}),r=Ir("authTokenSyncURL");if(r){const s=sl(r);qa(t,s,()=>s(t.currentUser)),Wa(t,o=>s(o))}const i=vr("auth");return i&&Ca(t,`http://${i}`),t}nl("Browser");const al={apiKey:"AIzaSyCJ7bTyjKvQtJTxa9hFVg3AHb0bG9xVu8w",authDomain:"lets-do-it-bookshelf.firebaseapp.com",projectId:"lets-do-it-bookshelf",storageBucket:"lets-do-it-bookshelf.appspot.com",messagingSenderId:"961226885770",appId:"1:961226885770:web:a9fbb77bee4dd760353b73"},cl=wr(al),ll=Ho(cl);async function ul(n){const e=zo(ll,"users",n),t=await Yo(e);if(t.exists())return console.log("Document data:",t.data()),t.data();console.log("No such document!")}const we=ol();Ga(we,n=>{if(n){const e=n.uid;console.log(e,n),dl(n),ul(e).then(t=>{})}else document.querySelector(".sing-wrap").style.display="",document.querySelector(".log-out-wrap").style.display="none"});function dl(n){const e=document.querySelector(".user-text");e.textContent=n.displayName,document.querySelector(".user-image img").src=n.photoURL??"/img/noimage.png",document.querySelector(".user-image img").alt=n.displayName,document.querySelector(".log-out-wrap").style.display="",document.querySelector(".sing-wrap").style.display="none"}function hl(){signUpForm.email.value.length<6||$a(we,signUpForm.email.value,signUpForm.password.value).then(n=>{const e=n.user,t=fl();_l(signUpForm.name.value,t),$e.close(),console.log(e)}).catch(n=>{n.code,n.message,console.dir(n)})}function fl(n=null){return null}function pl(){signInForm.email.value.length<6||Ha(we,signInForm.email.value,signInForm.password.value).then(n=>{const e=n.user;console.log(e),Ae.close()}).catch(n=>{const e=n.code,t=n.message;console.dir(n,e,t),alert(t)})}function gl(){const n=new W;gc(we,n).then(e=>{W.credentialFromResult(e).accessToken,e.user,Ae.close()}).catch(e=>{e.code,e.message,e.customData.email,W.credentialFromError(e)})}function ml(){Ka(we).then(()=>{}).catch(n=>{})}function _l(n=null,e=null){za(we.currentUser,{displayName:n,photoURL:e}).then(()=>{document.querySelector(".user-name").textContent=n,document.querySelector(".user-image img").src=e??"/img/noimage.png",console.log(we.currentUser)}).catch(t=>{})}document.addEventListener("click",vl);function vl(n){n.target.closest(".modal-close-btn")&&($e.close(),Ae.close()),n.target.closest("[data-sign-up]")&&($e.show(),Ae.close()),n.target.closest("[data-sign-in]")&&($e.close(),Ae.show()),n.target.closest(".log-out-btn")&&ml(),n.target.closest(".sign-in-btn")&&pl(),n.target.closest("[data-g-sign-in]")&&gl(),n.target.closest(".sign-up-btn")&&hl()}let mi=document.getElementById("switchMode"),Rt=document.querySelector(".logo");Rt.innerHTML=`<svg class="logo">
        <use href="./img/spryte.svg#icon-logo-light" height="28px"></use>
      </svg>`;const sn=document.querySelector("body");localStorage.getItem("theme")=="true"&&(sn.classList.add("dark-theme"),mi.checked=!0,Rt.innerHTML=`<svg class="logo">
        <use href="./img/spryte.svg#icon-logo-dark" height="28px"></use>
      </svg>`);mi.onchange=function(){this.checked?(localStorage.setItem("theme",!0),sn.classList.add("dark-theme"),Rt.innerHTML=`<svg class="logo">
        <use href="./img/spryte.svg#icon-logo-dark" height="28px"></use>
      </svg>`):(localStorage.setItem("theme",!1),sn.classList.remove("dark-theme"),Rt.innerHTML=`<svg class="logo">
        <use href="./img/spryte.svg#icon-logo-light" height="28px"></use>
      </svg>`)};let yl=document.querySelector(".menu-btn"),Il=document.querySelector(".tupe-out");yl.addEventListener("click",bl);function bl(){Il.classList.toggle("tupe-out_active")}let An=document.querySelector(".burger-open-mob"),Rn=document.querySelector(".burger-close-mob"),_i=document.querySelector(".mob-menus ");An.addEventListener("click",El);Rn.addEventListener("click",wl);function El(){document.body.classList.toggle("no-scroll"),An.classList.toggle("oupenBur"),_i.classList.toggle("burgActiv"),Rn.classList.toggle("closeBur")}function wl(){document.body.classList.toggle("no-scroll"),An.classList.toggle("oupenBur"),_i.classList.toggle("burgActiv"),Rn.classList.toggle("closeBur")}const on=document.querySelector(".shopping-list"),ur=document.querySelector(".shopping-title"),dr=document.querySelector(".empty-shopping-list-wrap"),Tl=document.querySelector("#tui-pagination-container");let de=JSON.parse(localStorage.getItem("KEY"))??[],et=3,Ct=1,ke=(Ct-1)*et,kt=ke+et,an=de.slice(ke,kt);const Sl={totalItems:de.length,itemsPerPage:et,visiblePages:3,page:Ct,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"},Pl=new Ti(Tl,Sl);Cn(an);function Cn(n){on.innerHTML="",de.length?(dr.style.display="none",ur.classList.replace("empty-title-margin","full-title-margin"),on.insertAdjacentHTML("beforeend",Al(n))):(dr.style.display="block",ur.classList.replace("full-title-margin","empty-title-margin"))}Pl.on("beforeMove",n=>{Ct=n.page,ke=(Ct-1)*et,kt=ke+et;const e=de.slice(ke,kt);Cn(e)});function Al(n){return n.map(({_id:e,book_image:t,title:r,list_name:i,author:s,description:o,buy_links:[a,c,l]})=>`
  <li class="shopping-list-item" data-id=${e} >
  <img
    src="${t}"
    alt="book's image"
    class="shopping-card-img"
  />
  <div class="right-part-wrap">
    <div class="shopping-card-bin-wrap">
     <div>
        <h4 class="shopping-card-tittle">${r}</h4>
        <p class="shopping-card-genre">${i}</p>
     </div>
     <button type="button" class="shopping-card-bin-link">
          <svg class="img-bin-icon">
            <use class="img-bin-use" href="../img/spryte.svg#icon-trash"></use>
          </svg>
      </button>
    </div>
    <p class="shopping-card-description">${o}
    </p>
    <div class="botton-wrap">
        <p class="shopping-card-author">${s}</p>
              <ul class="markets-list-shopping">
              <li>
                <a href="${a.url}">
                  <img src="./img/amazon.png" alt="${i}" class="icon-amazon light-theme-amazon">
                  <img src="./img/amazon-black-theme.png" alt="${i}" class="icon-amazon dark-theme-amazon">

                </a>
              </li>
              <li>
                <a href="${c.url}">
                  <img src="./img/book-market.png" alt="${i}" class="icon-apple-book">
                </a>
              </li>
              <li>
                <a href="${l.url}">
                <img src="./img/book-shelf.png" alt="${i}" class="icon-book-shop">
                </a>
    </div>
  </div>
</li>`).join("")}on.addEventListener("click",n=>{(n.target.classList.contains("shopping-card-bin-link")||n.target.classList.contains("img-bin-icon")||n.target.classList.contains("img-bin-use"))&&Rl(n)});function Rl(n){const{id:e}=n.target.closest(".shopping-list-item").dataset,t=de.findIndex(r=>r._id===e);de.splice(t,1),localStorage.setItem("KEY",JSON.stringify(de)),an=de.slice(ke,kt),Cn(an)}export{fr as b,Cl as c};
