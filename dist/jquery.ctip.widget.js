/*
 *  jquery-boilerplate - v4.1.0
 *  A jump-start for jQuery plugins development.
 *  http://jqueryboilerplate.com
 *
 *  Made by Zeno Rocha
 *  Under MIT License
 */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i(t.L=t.L||{})}(this,function(t){"use strict";function i(t){var i,e,n,o;for(e=1,n=arguments.length;e<n;e++){o=arguments[e];for(i in o)t[i]=o[i]}return t}function e(t,i){var e=Array.prototype.slice;if(t.bind)return t.bind.apply(t,e.call(arguments,1));var n=e.call(arguments,2);return function(){return t.apply(i,n.length?n.concat(e.call(arguments)):arguments)}}function n(t){return t._leaflet_id=t._leaflet_id||++di,t._leaflet_id}function o(t,i,e){var n,o,s,r;return r=function(){n=!1,o&&(s.apply(e,o),o=!1)},s=function(){n?o=arguments:(t.apply(e,arguments),setTimeout(r,i),n=!0)}}function s(t,i,e){var n=i[1],o=i[0],s=n-o;return t===n&&e?t:((t-o)%s+s)%s+o}function r(){return!1}function a(t,i){var e=Math.pow(10,i||5);return Math.round(t*e)/e}function h(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function u(t){return h(t).split(/\s+/)}function l(t,i){t.hasOwnProperty("options")||(t.options=t.options?_i(t.options):{});for(var e in i)t.options[e]=i[e];return t.options}function c(t,i,e){var n=[];for(var o in t)n.push(encodeURIComponent(e?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(i&&i.indexOf("?")!==-1?"&":"?")+n.join("&")}function _(t,i){return t.replace(pi,function(t,e){var n=i[e];if(void 0===n)throw new Error("No value provided for variable "+t);return"function"==typeof n&&(n=n(i)),n})}function d(t,i){for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1}function p(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}function m(t){var i=+new Date,e=Math.max(0,16-(i-gi));return gi=i+e,window.setTimeout(t,e)}function f(t,i,n){return n&&vi===m?void t.call(i):vi.call(window,e(t,i))}function g(t){t&&yi.call(window,t)}function v(){}function y(t){if(L&&L.Mixin){t=mi(t)?t:[t];for(var i=0;i<t.length;i++)t[i]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}}function x(t,i,e){this.x=e?Math.round(t):t,this.y=e?Math.round(i):i}function w(t,i,e){return t instanceof x?t:mi(t)?new x(t[0],t[1]):void 0===t||null===t?t:"object"==typeof t&&"x"in t&&"y"in t?new x(t.x,t.y):new x(t,i,e)}function P(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function b(t,i){return!t||t instanceof P?t:new P(t,i)}function T(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function z(t,i){return t instanceof T?t:new T(t,i)}function M(t,i,e){if(isNaN(t)||isNaN(i))throw new Error("Invalid LatLng object: ("+t+", "+i+")");this.lat=+t,this.lng=+i,void 0!==e&&(this.alt=+e)}function C(t,i,e){return t instanceof M?t:mi(t)&&"object"!=typeof t[0]?3===t.length?new M(t[0],t[1],t[2]):2===t.length?new M(t[0],t[1]):null:void 0===t||null===t?t:"object"==typeof t&&"lat"in t?new M(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===i?null:new M(t,i,e)}function Z(t,i,e,n){return mi(t)?(this._a=t[0],this._b=t[1],this._c=t[2],void(this._d=t[3])):(this._a=t,this._b=i,this._c=e,void(this._d=n))}function E(t,i,e,n){return new Z(t,i,e,n)}function S(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t,i){var e,n,o,s,r,a,h="";for(e=0,o=t.length;e<o;e++){for(r=t[e],n=0,s=r.length;n<s;n++)a=r[n],h+=(n?"L":"M")+a.x+" "+a.y;h+=i?re?"z":"x":""}return h||"M0 0"}function B(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}function I(t,i,e,n){return"touchstart"===i?O(t,e,n):"touchmove"===i?W(t,e,n):"touchend"===i&&H(t,e,n),this}function A(t,i,e){var n=t["_leaflet_"+i+e];return"touchstart"===i?t.removeEventListener(ue,n,!1):"touchmove"===i?t.removeEventListener(le,n,!1):"touchend"===i&&(t.removeEventListener(ce,n,!1),t.removeEventListener(_e,n,!1)),this}function O(t,i,n){var o=e(function(t){if("mouse"!==t.pointerType&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE){if(!(de.indexOf(t.target.tagName)<0))return;$(t)}j(t,i)});t["_leaflet_touchstart"+n]=o,t.addEventListener(ue,o,!1),me||(document.documentElement.addEventListener(ue,R,!0),document.documentElement.addEventListener(le,D,!0),document.documentElement.addEventListener(ce,N,!0),document.documentElement.addEventListener(_e,N,!0),me=!0)}function R(t){pe[t.pointerId]=t,fe++}function D(t){pe[t.pointerId]&&(pe[t.pointerId]=t)}function N(t){delete pe[t.pointerId],fe--}function j(t,i){t.touches=[];for(var e in pe)t.touches.push(pe[e]);t.changedTouches=[t],i(t)}function W(t,i,e){var n=function(t){(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons)&&j(t,i)};t["_leaflet_touchmove"+e]=n,t.addEventListener(le,n,!1)}function H(t,i,e){var n=function(t){j(t,i)};t["_leaflet_touchend"+e]=n,t.addEventListener(ce,n,!1),t.addEventListener(_e,n,!1)}function F(t,i,e){function n(t){var i;if(te){if(!Ai||"mouse"===t.pointerType)return;i=fe}else i=t.touches.length;if(!(i>1)){var e=Date.now(),n=e-(s||e);r=t.touches?t.touches[0]:t,a=n>0&&n<=h,s=e}}function o(t){if(a&&!r.cancelBubble){if(te){if(!Ai||"mouse"===t.pointerType)return;var e,n,o={};for(n in r)e=r[n],o[n]=e&&e.bind?e.bind(r):e;r=o}r.type="dblclick",i(r),s=null}}var s,r,a=!1,h=250;return t[ye+ge+e]=n,t[ye+ve+e]=o,t[ye+"dblclick"+e]=i,t.addEventListener(ge,n,!1),t.addEventListener(ve,o,!1),t.addEventListener("dblclick",i,!1),this}function U(t,i){var e=t[ye+ge+i],n=t[ye+ve+i],o=t[ye+"dblclick"+i];return t.removeEventListener(ge,e,!1),t.removeEventListener(ve,n,!1),Ai||t.removeEventListener("dblclick",o,!1),this}function V(t,i,e,n){if("object"==typeof i)for(var o in i)q(t,o,i[o],e);else{i=u(i);for(var s=0,r=i.length;s<r;s++)q(t,i[s],e,n)}return this}function G(t,i,e,n){if("object"==typeof i)for(var o in i)K(t,o,i[o],e);else if(i){i=u(i);for(var s=0,r=i.length;s<r;s++)K(t,i[s],e,n)}else{for(var a in t[xe])K(t,a,t[xe][a]);delete t[xe]}}function q(t,i,e,o){var s=i+n(e)+(o?"_"+n(o):"");if(t[xe]&&t[xe][s])return this;var r=function(i){return e.call(o||t,i||window.event)},a=r;te&&0===i.indexOf("touch")?I(t,i,r,s):!ie||"dblclick"!==i||!F||te&&ji?"addEventListener"in t?"mousewheel"===i?t.addEventListener("onwheel"in t?"wheel":"mousewheel",r,!1):"mouseenter"===i||"mouseleave"===i?(r=function(i){i=i||window.event,ot(t,i)&&a(i)},t.addEventListener("mouseenter"===i?"mouseover":"mouseout",r,!1)):("click"===i&&Ri&&(r=function(t){st(t,a)}),t.addEventListener(i,r,!1)):"attachEvent"in t&&t.attachEvent("on"+i,r):F(t,r,s),t[xe]=t[xe]||{},t[xe][s]=r}function K(t,i,e,o){var s=i+n(e)+(o?"_"+n(o):""),r=t[xe]&&t[xe][s];return r?(te&&0===i.indexOf("touch")?A(t,i,s):ie&&"dblclick"===i&&U?U(t,s):"removeEventListener"in t?"mousewheel"===i?t.removeEventListener("onwheel"in t?"wheel":"mousewheel",r,!1):t.removeEventListener("mouseenter"===i?"mouseover":"mouseleave"===i?"mouseout":i,r,!1):"detachEvent"in t&&t.detachEvent("on"+i,r),void(t[xe][s]=null)):this}function Y(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,nt(t),this}function X(t){return q(t,"mousewheel",Y)}function J(t){return V(t,"mousedown touchstart dblclick",Y),q(t,"click",et),this}function $(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Q(t){return $(t),Y(t),this}function tt(t,i){if(!i)return new x(t.clientX,t.clientY);var e=i.getBoundingClientRect();return new x(t.clientX-e.left-i.clientLeft,t.clientY-e.top-i.clientTop)}function it(t){return Ai?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/we:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}function et(t){Le[t.type]=!0}function nt(t){var i=Le[t.type];return Le[t.type]=!1,i}function ot(t,i){var e=i.relatedTarget;if(!e)return!0;try{for(;e&&e!==t;)e=e.parentNode}catch(t){return!1}return e!==t}function st(t,i){var e=t.timeStamp||t.originalEvent&&t.originalEvent.timeStamp,n=zi&&e-zi;return n&&n>100&&n<500||t.target._simulatedClick&&!t._simulated?void Q(t):(zi=e,void i(t))}function rt(t){return"string"==typeof t?document.getElementById(t):t}function at(t,i){var e=t.style[i]||t.currentStyle&&t.currentStyle[i];if((!e||"auto"===e)&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);e=n?n[i]:null}return"auto"===e?null:e}function ht(t,i,e){var n=document.createElement(t);return n.className=i||"",e&&e.appendChild(n),n}function ut(t){var i=t.parentNode;i&&i.removeChild(t)}function lt(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function ct(t){var i=t.parentNode;i.lastChild!==t&&i.appendChild(t)}function _t(t){var i=t.parentNode;i.firstChild!==t&&i.insertBefore(t,i.firstChild)}function dt(t,i){if(void 0!==t.classList)return t.classList.contains(i);var e=gt(t);return e.length>0&&new RegExp("(^|\\s)"+i+"(\\s|$)").test(e)}function pt(t,i){if(void 0!==t.classList)for(var e=u(i),n=0,o=e.length;n<o;n++)t.classList.add(e[n]);else if(!dt(t,i)){var s=gt(t);ft(t,(s?s+" ":"")+i)}}function mt(t,i){void 0!==t.classList?t.classList.remove(i):ft(t,h((" "+gt(t)+" ").replace(" "+i+" "," ")))}function ft(t,i){void 0===t.className.baseVal?t.className=i:t.className.baseVal=i}function gt(t){return void 0===t.className.baseVal?t.className:t.className.baseVal}function vt(t,i){"opacity"in t.style?t.style.opacity=i:"filter"in t.style&&yt(t,i)}function yt(t,i){var e=!1,n="DXImageTransform.Microsoft.Alpha";try{e=t.filters.item(n)}catch(t){if(1===i)return}i=Math.round(100*i),e?(e.Enabled=100!==i,e.Opacity=i):t.style.filter+=" progid:"+n+"(opacity="+i+")"}function xt(t){for(var i=document.documentElement.style,e=0;e<t.length;e++)if(t[e]in i)return t[e];return!1}function wt(t,i,e){var n=i||new x(0,0);t.style[be]=(Gi?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(e?" scale("+e+")":"")}function Lt(t,i){t._leaflet_pos=i,Yi?wt(t,i):(t.style.left=i.x+"px",t.style.top=i.y+"px")}function Pt(t){return t._leaflet_pos||new x(0,0)}function bt(){V(window,"dragstart",$)}function Tt(){G(window,"dragstart",$)}function zt(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(Mt(),Ce=t,Ze=t.style.outline,t.style.outline="none",V(window,"keydown",Mt))}function Mt(){Ce&&(Ce.style.outline=Ze,Ce=void 0,Ze=void 0,G(window,"keydown",Mt))}function Ct(t,i){return new ke(t,i)}function Zt(t,i){if(!i||!t.length)return t.slice();var e=i*i;return t=It(t,e),t=kt(t,e)}function Et(t,i,e){return Math.sqrt(Nt(t,i,e,!0))}function St(t,i,e){return Nt(t,i,e)}function kt(t,i){var e=t.length,n=typeof Uint8Array!=void 0+""?Uint8Array:Array,o=new n(e);o[0]=o[e-1]=1,Bt(t,o,i,0,e-1);var s,r=[];for(s=0;s<e;s++)o[s]&&r.push(t[s]);return r}function Bt(t,i,e,n,o){var s,r,a,h=0;for(r=n+1;r<=o-1;r++)a=Nt(t[r],t[n],t[o],!0),a>h&&(s=r,h=a);h>e&&(i[s]=1,Bt(t,i,e,n,s),Bt(t,i,e,s,o))}function It(t,i){for(var e=[t[0]],n=1,o=0,s=t.length;n<s;n++)Dt(t[n],t[o])>i&&(e.push(t[n]),o=n);return o<s-1&&e.push(t[s-1]),e}function At(t,i,e,n,o){var s,r,a,h=n?Fe:Rt(t,e),u=Rt(i,e);for(Fe=u;;){if(!(h|u))return[t,i];if(h&u)return!1;s=h||u,r=Ot(t,i,s,e,o),a=Rt(r,e),s===h?(t=r,h=a):(i=r,u=a)}}function Ot(t,i,e,n,o){var s,r,a=i.x-t.x,h=i.y-t.y,u=n.min,l=n.max;return 8&e?(s=t.x+a*(l.y-t.y)/h,r=l.y):4&e?(s=t.x+a*(u.y-t.y)/h,r=u.y):2&e?(s=l.x,r=t.y+h*(l.x-t.x)/a):1&e&&(s=u.x,r=t.y+h*(u.x-t.x)/a),new x(s,r,o)}function Rt(t,i){var e=0;return t.x<i.min.x?e|=1:t.x>i.max.x&&(e|=2),t.y<i.min.y?e|=4:t.y>i.max.y&&(e|=8),e}function Dt(t,i){var e=i.x-t.x,n=i.y-t.y;return e*e+n*n}function Nt(t,i,e,n){var o,s=i.x,r=i.y,a=e.x-s,h=e.y-r,u=a*a+h*h;return u>0&&(o=((t.x-s)*a+(t.y-r)*h)/u,o>1?(s=e.x,r=e.y):o>0&&(s+=a*o,r+=h*o)),a=t.x-s,h=t.y-r,n?a*a+h*h:new x(s,r)}function jt(t){return!mi(t[0])||"object"!=typeof t[0][0]&&"undefined"!=typeof t[0][0]}function Wt(t,i,e){var n,o,s,r,a,h,u,l,c,_=[1,4,2,8];for(o=0,u=t.length;o<u;o++)t[o]._code=Rt(t[o],i);for(r=0;r<4;r++){for(l=_[r],n=[],o=0,u=t.length,s=u-1;o<u;s=o++)a=t[o],h=t[s],a._code&l?h._code&l||(c=Ot(h,a,l,i,e),c._code=Rt(c,i),n.push(c)):(h._code&l&&(c=Ot(h,a,l,i,e),c._code=Rt(c,i),n.push(c)),n.push(a));t=n}return t}function Ht(t){return new cn(t)}function Ft(t,i){return new pn(t,i)}function Ut(t,i){return new fn(t,i)}function Vt(t,i,e){return new gn(t,i,e)}function Gt(t,i){return new vn(t,i)}function qt(t,i){return new yn(t,i)}function Kt(t,i){var e,n,o,s,r="Feature"===t.type?t.geometry:t,a=r?r.coordinates:null,h=[],u=i&&i.pointToLayer,l=i&&i.coordsToLatLng||Yt;if(!a&&!r)return null;switch(r.type){case"Point":return e=l(a),u?u(t,e):new pn(e);case"MultiPoint":for(o=0,s=a.length;o<s;o++)e=l(a[o]),h.push(u?u(t,e):new pn(e));return new un(h);case"LineString":case"MultiLineString":return n=Xt(a,"LineString"===r.type?0:1,l),new vn(n,i);case"Polygon":case"MultiPolygon":return n=Xt(a,"Polygon"===r.type?1:2,l),new yn(n,i);case"GeometryCollection":for(o=0,s=r.geometries.length;o<s;o++){var c=Kt({geometry:r.geometries[o],type:"Feature",properties:t.properties},i);c&&h.push(c)}return new un(h);default:throw new Error("Invalid GeoJSON object.")}}function Yt(t){return new M(t[1],t[0],t[2])}function Xt(t,i,e){for(var n,o=[],s=0,r=t.length;s<r;s++)n=i?Xt(t[s],i-1,e):(e||Yt)(t[s]),o.push(n);return o}function Jt(t,i){return i="number"==typeof i?i:6,void 0!==t.alt?[a(t.lng,i),a(t.lat,i),a(t.alt,i)]:[a(t.lng,i),a(t.lat,i)]}function $t(t,i,e,n){for(var o=[],s=0,r=t.length;s<r;s++)o.push(i?$t(t[s],i-1,e,n):Jt(t[s],n));return!i&&e&&o.push(o[0]),o}function Qt(t,e){return t.feature?i({},t.feature,{geometry:e}):ti(e)}function ti(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}function ii(t,i){return new xn(t,i)}function ei(t,i,e){return new Tn(t,i,e)}function ni(t){return new Sn(t)}function oi(t){return new kn(t)}function si(t,i){return new Bn(t,i)}function ri(t,i){return new In(t,i)}function ai(t){return se?new On(t):null}function hi(t){return re||ae?new jn(t):null}function ui(t,i){return new Wn(t,i)}function li(){return window.L=Yn,this}var ci="1.1.0",_i=Object.create||function(){function t(){}return function(i){return t.prototype=i,new t}}(),di=0,pi=/\{ *([\w_\-]+) *\}/g,mi=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},fi="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",gi=0,vi=window.requestAnimationFrame||p("RequestAnimationFrame")||m,yi=window.cancelAnimationFrame||p("CancelAnimationFrame")||p("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)},xi=(Object.freeze||Object)({extend:i,create:_i,bind:e,lastId:di,stamp:n,throttle:o,wrapNum:s,falseFn:r,formatNum:a,trim:h,splitWords:u,setOptions:l,getParamString:c,template:_,isArray:mi,indexOf:d,emptyImageUrl:fi,requestFn:vi,cancelFn:yi,requestAnimFrame:f,cancelAnimFrame:g});v.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},n=e.__super__=this.prototype,o=_i(n);o.constructor=e,e.prototype=o;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&"__super__"!==s&&(e[s]=this[s]);return t.statics&&(i(e,t.statics),delete t.statics),t.includes&&(y(t.includes),i.apply(null,[o].concat(t.includes)),delete t.includes),o.options&&(t.options=i(_i(o.options),t.options)),i(o,t),o._initHooks=[],o.callInitHooks=function(){if(!this._initHooksCalled){n.callInitHooks&&n.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,i=o._initHooks.length;t<i;t++)o._initHooks[t].call(this)}},e},v.include=function(t){return i(this.prototype,t),this},v.mergeOptions=function(t){return i(this.prototype.options,t),this},v.addInitHook=function(t){var i=Array.prototype.slice.call(arguments,1),e="function"==typeof t?t:function(){this[t].apply(this,i)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(e),this};var wi={on:function(t,i,e){if("object"==typeof t)for(var n in t)this._on(n,t[n],i);else{t=u(t);for(var o=0,s=t.length;o<s;o++)this._on(t[o],i,e)}return this},off:function(t,i,e){if(t)if("object"==typeof t)for(var n in t)this._off(n,t[n],i);else{t=u(t);for(var o=0,s=t.length;o<s;o++)this._off(t[o],i,e)}else delete this._events;return this},_on:function(t,i,e){this._events=this._events||{};var n=this._events[t];n||(n=[],this._events[t]=n),e===this&&(e=void 0);for(var o={fn:i,ctx:e},s=n,r=0,a=s.length;r<a;r++)if(s[r].fn===i&&s[r].ctx===e)return;s.push(o)},_off:function(t,i,e){var n,o,s;if(this._events&&(n=this._events[t])){if(!i){for(o=0,s=n.length;o<s;o++)n[o].fn=r;return void delete this._events[t]}if(e===this&&(e=void 0),n)for(o=0,s=n.length;o<s;o++){var a=n[o];if(a.ctx===e&&a.fn===i)return a.fn=r,this._firingCount&&(this._events[t]=n=n.slice()),void n.splice(o,1)}}},fire:function(t,e,n){if(!this.listens(t,n))return this;var o=i({},e,{type:t,target:this});if(this._events){var s=this._events[t];if(s){this._firingCount=this._firingCount+1||1;for(var r=0,a=s.length;r<a;r++){var h=s[r];h.fn.call(h.ctx||this,o)}this._firingCount--}}return n&&this._propagateEvent(o),this},listens:function(t,i){var e=this._events&&this._events[t];if(e&&e.length)return!0;if(i)for(var n in this._eventParents)if(this._eventParents[n].listens(t,i))return!0;return!1},once:function(t,i,n){if("object"==typeof t){for(var o in t)this.once(o,t[o],i);return this}var s=e(function(){this.off(t,i,n).off(t,s,n)},this);return this.on(t,i,n).on(t,s,n)},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[n(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[n(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,i({layer:t.target},t),!0)}};wi.addEventListener=wi.on,wi.removeEventListener=wi.clearAllEventListeners=wi.off,wi.addOneTimeEventListener=wi.once,wi.fireEvent=wi.fire,wi.hasEventListeners=wi.listens;var Li=v.extend(wi);x.prototype={clone:function(){return new x(this.x,this.y)},add:function(t){return this.clone()._add(w(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(w(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new x(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new x(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},distanceTo:function(t){t=w(t);var i=t.x-this.x,e=t.y-this.y;return Math.sqrt(i*i+e*e)},equals:function(t){return t=w(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=w(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+a(this.x)+", "+a(this.y)+")"}},P.prototype={extend:function(t){return t=w(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new x((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new x(this.min.x,this.max.y)},getTopRight:function(){return new x(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var i,e;return t="number"==typeof t[0]||t instanceof x?w(t):b(t),t instanceof P?(i=t.min,e=t.max):i=e=t,i.x>=this.min.x&&e.x<=this.max.x&&i.y>=this.min.y&&e.y<=this.max.y},intersects:function(t){t=b(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>=i.x&&n.x<=e.x,r=o.y>=i.y&&n.y<=e.y;return s&&r},overlaps:function(t){t=b(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>i.x&&n.x<e.x,r=o.y>i.y&&n.y<e.y;return s&&r},isValid:function(){return!(!this.min||!this.max)}},T.prototype={extend:function(t){var i,e,n=this._southWest,o=this._northEast;if(t instanceof M)i=t,e=t;else{if(!(t instanceof T))return t?this.extend(C(t)||z(t)):this;if(i=t._southWest,e=t._northEast,!i||!e)return this}return n||o?(n.lat=Math.min(i.lat,n.lat),n.lng=Math.min(i.lng,n.lng),o.lat=Math.max(e.lat,o.lat),o.lng=Math.max(e.lng,o.lng)):(this._southWest=new M(i.lat,i.lng),this._northEast=new M(e.lat,e.lng)),this},pad:function(t){var i=this._southWest,e=this._northEast,n=Math.abs(i.lat-e.lat)*t,o=Math.abs(i.lng-e.lng)*t;return new T(new M(i.lat-n,i.lng-o),new M(e.lat+n,e.lng+o))},getCenter:function(){return new M((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new M(this.getNorth(),this.getWest())},getSouthEast:function(){return new M(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof M||"lat"in t?C(t):z(t);var i,e,n=this._southWest,o=this._northEast;return t instanceof T?(i=t.getSouthWest(),e=t.getNorthEast()):i=e=t,i.lat>=n.lat&&e.lat<=o.lat&&i.lng>=n.lng&&e.lng<=o.lng},intersects:function(t){t=z(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>=i.lat&&n.lat<=e.lat,r=o.lng>=i.lng&&n.lng<=e.lng;return s&&r},overlaps:function(t){t=z(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>i.lat&&n.lat<e.lat,r=o.lng>i.lng&&n.lng<e.lng;return s&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,i){return!!t&&(t=z(t),this._southWest.equals(t.getSouthWest(),i)&&this._northEast.equals(t.getNorthEast(),i))},isValid:function(){return!(!this._southWest||!this._northEast)}},M.prototype={equals:function(t,i){if(!t)return!1;t=C(t);var e=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return e<=(void 0===i?1e-9:i)},toString:function(t){return"LatLng("+a(this.lat,t)+", "+a(this.lng,t)+")"},distanceTo:function(t){return bi.distance(this,C(t))},wrap:function(){return bi.wrapLatLng(this)},toBounds:function(t){var i=180*t/40075017,e=i/Math.cos(Math.PI/180*this.lat);return z([this.lat-i,this.lng-e],[this.lat+i,this.lng+e])},clone:function(){return new M(this.lat,this.lng,this.alt)}};var Pi={latLngToPoint:function(t,i){var e=this.projection.project(t),n=this.scale(i);return this.transformation._transform(e,n)},pointToLatLng:function(t,i){var e=this.scale(i),n=this.transformation.untransform(t,e);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var i=this.projection.bounds,e=this.scale(t),n=this.transformation.transform(i.min,e),o=this.transformation.transform(i.max,e);return new P(n,o)},infinite:!1,wrapLatLng:function(t){var i=this.wrapLng?s(t.lng,this.wrapLng,!0):t.lng,e=this.wrapLat?s(t.lat,this.wrapLat,!0):t.lat,n=t.alt;return new M(e,i,n)},wrapLatLngBounds:function(t){var i=t.getCenter(),e=this.wrapLatLng(i),n=i.lat-e.lat,o=i.lng-e.lng;if(0===n&&0===o)return t;var s=t.getSouthWest(),r=t.getNorthEast(),a=new M(s.lat-n,s.lng-o),h=new M(r.lat-n,r.lng-o);return new T(a,h)}},bi=i({},Pi,{wrapLng:[-180,180],R:6371e3,distance:function(t,i){var e=Math.PI/180,n=t.lat*e,o=i.lat*e,s=Math.sin(n)*Math.sin(o)+Math.cos(n)*Math.cos(o)*Math.cos((i.lng-t.lng)*e);return this.R*Math.acos(Math.min(s,1))}}),Ti={R:6378137,MAX_LATITUDE:85.0511287798,project:function(t){var i=Math.PI/180,e=this.MAX_LATITUDE,n=Math.max(Math.min(e,t.lat),-e),o=Math.sin(n*i);return new x(this.R*t.lng*i,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var i=180/Math.PI;return new M((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*i,t.x*i/this.R)},bounds:function(){var t=6378137*Math.PI;return new P([-t,-t],[t,t])}()};Z.prototype={transform:function(t,i){return this._transform(t.clone(),i)},_transform:function(t,i){return i=i||1,t.x=i*(this._a*t.x+this._b),t.y=i*(this._c*t.y+this._d),t},untransform:function(t,i){return i=i||1,new x((t.x/i-this._b)/this._a,(t.y/i-this._d)/this._c)}};var zi,Mi,Ci,Zi,Ei=i({},bi,{code:"EPSG:3857",projection:Ti,transformation:function(){var t=.5/(Math.PI*Ti.R);return E(t,.5,-t,.5)}()}),Si=i({},Ei,{code:"EPSG:900913"}),ki=document.documentElement.style,Bi="ActiveXObject"in window,Ii=Bi&&!document.addEventListener,Ai="msLaunchUri"in navigator&&!("documentMode"in document),Oi=B("webkit"),Ri=B("android"),Di=B("android 2")||B("android 3"),Ni=!!window.opera,ji=B("chrome"),Wi=B("gecko")&&!Oi&&!Ni&&!Bi,Hi=!ji&&B("safari"),Fi=B("phantom"),Ui="OTransition"in ki,Vi=0===navigator.platform.indexOf("Win"),Gi=Bi&&"transition"in ki,qi="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Di,Ki="MozPerspective"in ki,Yi=!window.L_DISABLE_3D&&(Gi||qi||Ki)&&!Ui&&!Fi,Xi="undefined"!=typeof orientation||B("mobile"),Ji=Xi&&Oi,$i=Xi&&qi,Qi=!window.PointerEvent&&window.MSPointerEvent,te=!(!window.PointerEvent&&!Qi),ie=!window.L_NO_TOUCH&&(te||"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),ee=Xi&&Ni,ne=Xi&&Wi,oe=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,se=function(){return!!document.createElement("canvas").getContext}(),re=!(!document.createElementNS||!S("svg").createSVGRect),ae=!re&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(t){return!1}}(),he=(Object.freeze||Object)({ie:Bi,ielt9:Ii,edge:Ai,webkit:Oi,android:Ri,android23:Di,opera:Ni,chrome:ji,gecko:Wi,safari:Hi,phantom:Fi,opera12:Ui,win:Vi,ie3d:Gi,webkit3d:qi,gecko3d:Ki,any3d:Yi,mobile:Xi,mobileWebkit:Ji,mobileWebkit3d:$i,msPointer:Qi,pointer:te,touch:ie,mobileOpera:ee,mobileGecko:ne,retina:oe,canvas:se,svg:re,vml:ae}),ue=Qi?"MSPointerDown":"pointerdown",le=Qi?"MSPointerMove":"pointermove",ce=Qi?"MSPointerUp":"pointerup",_e=Qi?"MSPointerCancel":"pointercancel",de=["INPUT","SELECT","OPTION"],pe={},me=!1,fe=0,ge=Qi?"MSPointerDown":te?"pointerdown":"touchstart",ve=Qi?"MSPointerUp":te?"pointerup":"touchend",ye="_leaflet_",xe="_leaflet_events",we=Vi&&ji?2*window.devicePixelRatio:Wi?window.devicePixelRatio:1,Le={},Pe=(Object.freeze||Object)({on:V,off:G,stopPropagation:Y,disableScrollPropagation:X,disableClickPropagation:J,preventDefault:$,stop:Q,getMousePosition:tt,getWheelDelta:it,fakeStop:et,skipped:nt,isExternalTarget:ot,addListener:V,removeListener:G}),be=xt(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]),Te=xt(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),ze="webkitTransition"===Te||"OTransition"===Te?Te+"End":"transitionend";if("onselectstart"in document)Mi=function(){V(window,"selectstart",$)},Ci=function(){G(window,"selectstart",$)};else{var Me=xt(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Mi=function(){if(Me){var t=document.documentElement.style;Zi=t[Me],t[Me]="none"}},Ci=function(){Me&&(document.documentElement.style[Me]=Zi,Zi=void 0)}}var Ce,Ze,Ee=(Object.freeze||Object)({TRANSFORM:be,TRANSITION:Te,TRANSITION_END:ze,get:rt,getStyle:at,create:ht,remove:ut,empty:lt,toFront:ct,toBack:_t,hasClass:dt,addClass:pt,removeClass:mt,setClass:ft,getClass:gt,setOpacity:vt,testProp:xt,setTransform:wt,setPosition:Lt,getPosition:Pt,disableTextSelection:Mi,enableTextSelection:Ci,disableImageDrag:bt,enableImageDrag:Tt,preventOutline:zt,restoreOutline:Mt}),Se=Li.extend({run:function(t,i,e,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=e||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Pt(t),this._offset=i.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=f(this._animate,this),this._step()},_step:function(t){var i=+new Date-this._startTime,e=1e3*this._duration;i<e?this._runFrame(this._easeOut(i/e),t):(this._runFrame(1),this._complete())},_runFrame:function(t,i){var e=this._startPos.add(this._offset.multiplyBy(t));i&&e._round(),Lt(this._el,e),this.fire("step")},_complete:function(){g(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),ke=Li.extend({options:{crs:Ei,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,i){i=l(this,i),this._initContainer(t),this._initLayout(),this._onResize=e(this._onResize,this),this._initEvents(),i.maxBounds&&this.setMaxBounds(i.maxBounds),void 0!==i.zoom&&(this._zoom=this._limitZoom(i.zoom)),i.center&&void 0!==i.zoom&&this.setView(C(i.center),i.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this.callInitHooks(),this._zoomAnimated=Te&&Yi&&!ee&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),V(this._proxy,ze,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,n){if(e=void 0===e?this._zoom:this._limitZoom(e),t=this._limitCenter(C(t),e,this.options.maxBounds),n=n||{},this._stop(),this._loaded&&!n.reset&&n!==!0){void 0!==n.animate&&(n.zoom=i({animate:n.animate},n.zoom),n.pan=i({animate:n.animate,duration:n.duration},n.pan));var o=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan);if(o)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e),this},setZoom:function(t,i){return this._loaded?this.setView(this.getCenter(),t,{zoom:i}):(this._zoom=t,this)},zoomIn:function(t,i){return t=t||(Yi?this.options.zoomDelta:1),this.setZoom(this._zoom+t,i)},zoomOut:function(t,i){return t=t||(Yi?this.options.zoomDelta:1),this.setZoom(this._zoom-t,i)},setZoomAround:function(t,i,e){var n=this.getZoomScale(i),o=this.getSize().divideBy(2),s=t instanceof x?t:this.latLngToContainerPoint(t),r=s.subtract(o).multiplyBy(1-1/n),a=this.containerPointToLatLng(o.add(r));return this.setView(a,i,{zoom:e})},_getBoundsCenterZoom:function(t,i){i=i||{},t=t.getBounds?t.getBounds():z(t);var e=w(i.paddingTopLeft||i.padding||[0,0]),n=w(i.paddingBottomRight||i.padding||[0,0]),o=this.getBoundsZoom(t,!1,e.add(n));if(o="number"==typeof i.maxZoom?Math.min(i.maxZoom,o):o,o===1/0)return{center:t.getCenter(),zoom:o};var s=n.subtract(e).divideBy(2),r=this.project(t.getSouthWest(),o),a=this.project(t.getNorthEast(),o),h=this.unproject(r.add(a).divideBy(2).add(s),o);return{center:h,zoom:o}},fitBounds:function(t,i){if(t=z(t),!t.isValid())throw new Error("Bounds are not valid.");var e=this._getBoundsCenterZoom(t,i);return this.setView(e.center,e.zoom,i)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,i){return this.setView(t,this._zoom,{pan:i})},panBy:function(t,i){if(t=w(t).round(),i=i||{},!t.x&&!t.y)return this.fire("moveend");if(i.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Se,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),i.noMoveStart||this.fire("movestart"),
i.animate!==!1){pt(this._mapPane,"leaflet-pan-anim");var e=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,e,i.duration||.25,i.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,i,e){function n(t){var i=t?-1:1,e=t?g:m,n=g*g-m*m+i*x*x*v*v,o=2*e*x*v,s=n/o,r=Math.sqrt(s*s+1)-s,a=r<1e-9?-18:Math.log(r);return a}function o(t){return(Math.exp(t)-Math.exp(-t))/2}function s(t){return(Math.exp(t)+Math.exp(-t))/2}function r(t){return o(t)/s(t)}function a(t){return m*(s(w)/s(w+y*t))}function h(t){return m*(s(w)*r(w+y*t)-o(w))/x}function u(t){return 1-Math.pow(1-t,1.5)}function l(){var e=(Date.now()-L)/b,n=u(e)*P;e<=1?(this._flyToFrame=f(l,this),this._move(this.unproject(c.add(_.subtract(c).multiplyBy(h(n)/v)),p),this.getScaleZoom(m/a(n),p),{flyTo:!0})):this._move(t,i)._moveEnd(!0)}if(e=e||{},e.animate===!1||!Yi)return this.setView(t,i,e);this._stop();var c=this.project(this.getCenter()),_=this.project(t),d=this.getSize(),p=this._zoom;t=C(t),i=void 0===i?p:i;var m=Math.max(d.x,d.y),g=m*this.getZoomScale(p,i),v=_.distanceTo(c)||1,y=1.42,x=y*y,w=n(0),L=Date.now(),P=(n(1)-w)/y,b=e.duration?1e3*e.duration:1e3*P*.8;return this._moveStart(!0),l.call(this),this},flyToBounds:function(t,i){var e=this._getBoundsCenterZoom(t,i);return this.flyTo(e.center,e.zoom,i)},setMaxBounds:function(t){return t=z(t),t.isValid()?(this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this.off("moveend",this._panInsideMaxBounds))},setMinZoom:function(t){return this.options.minZoom=t,this._loaded&&this.getZoom()<this.options.minZoom?this.setZoom(t):this},setMaxZoom:function(t){return this.options.maxZoom=t,this._loaded&&this.getZoom()>this.options.maxZoom?this.setZoom(t):this},panInsideBounds:function(t,i){this._enforcingBounds=!0;var e=this.getCenter(),n=this._limitCenter(e,this._zoom,z(t));return e.equals(n)||this.panTo(n,i),this._enforcingBounds=!1,this},invalidateSize:function(t){if(!this._loaded)return this;t=i({animate:!1,pan:!0},t===!0?{animate:!0}:t);var n=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var o=this.getSize(),s=n.divideBy(2).round(),r=o.divideBy(2).round(),a=s.subtract(r);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(e(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:n,newSize:o})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=i({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var n=e(this._handleGeolocationResponse,this),o=e(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(n,o,t):navigator.geolocation.getCurrentPosition(n,o,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var i=t.code,e=t.message||(1===i?"permission denied":2===i?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:i,message:"Geolocation error: "+e+"."})},_handleGeolocationResponse:function(t){var i=t.coords.latitude,e=t.coords.longitude,n=new M(i,e),o=n.toBounds(t.coords.accuracy),s=this._locateOptions;if(s.setView){var r=this.getBoundsZoom(o);this.setView(n,s.maxZoom?Math.min(r,s.maxZoom):r)}var a={latlng:n,bounds:o,timestamp:t.timestamp};for(var h in t.coords)"number"==typeof t.coords[h]&&(a[h]=t.coords[h]);this.fire("locationfound",a)},addHandler:function(t,i){if(!i)return this;var e=this[t]=new i(this);return this._handlers.push(e),this.options[t]&&e.enable(),this},remove:function(){if(this._initEvents(!0),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}ut(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)ut(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,i){var e="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),n=ht("div",e,i||this._mapPane);return t&&(this._panes[t]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),i=this.unproject(t.getBottomLeft()),e=this.unproject(t.getTopRight());return new T(i,e)},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,i,e){t=z(t),e=w(e||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),r=t.getNorthWest(),a=t.getSouthEast(),h=this.getSize().subtract(e),u=b(this.project(a,n),this.project(r,n)).getSize(),l=Yi?this.options.zoomSnap:1,c=h.x/u.x,_=h.y/u.y,d=i?Math.max(c,_):Math.min(c,_);return n=this.getScaleZoom(d,n),l&&(n=Math.round(n/(l/100))*(l/100),n=i?Math.ceil(n/l)*l:Math.floor(n/l)*l),Math.max(o,Math.min(s,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new x(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,i){var e=this._getTopLeftPoint(t,i);return new P(e,e.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,i){var e=this.options.crs;return i=void 0===i?this._zoom:i,e.scale(t)/e.scale(i)},getScaleZoom:function(t,i){var e=this.options.crs;i=void 0===i?this._zoom:i;var n=e.zoom(t*e.scale(i));return isNaN(n)?1/0:n},project:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.latLngToPoint(C(t),i)},unproject:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.pointToLatLng(w(t),i)},layerPointToLatLng:function(t){var i=w(t).add(this.getPixelOrigin());return this.unproject(i)},latLngToLayerPoint:function(t){var i=this.project(C(t))._round();return i._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(C(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(z(t))},distance:function(t,i){return this.options.crs.distance(C(t),C(i))},containerPointToLayerPoint:function(t){return w(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return w(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var i=this.containerPointToLayerPoint(w(t));return this.layerPointToLatLng(i)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)))},mouseEventToContainerPoint:function(t){return tt(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var i=this._container=rt(t);if(!i)throw new Error("Map container not found.");if(i._leaflet_id)throw new Error("Map container is already initialized.");V(i,"scroll",this._onScroll,this),this._containerId=n(i)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&Yi,pt(t,"leaflet-container"+(ie?" leaflet-touch":"")+(oe?" leaflet-retina":"")+(Ii?" leaflet-oldie":"")+(Hi?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var i=at(t,"position");"absolute"!==i&&"relative"!==i&&"fixed"!==i&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Lt(this._mapPane,new x(0,0)),this.createPane("tilePane"),this.createPane("shadowPane"),this.createPane("overlayPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(pt(t.markerPane,"leaflet-zoom-hide"),pt(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,i){Lt(this._mapPane,new x(0,0));var e=!this._loaded;this._loaded=!0,i=this._limitZoom(i),this.fire("viewprereset");var n=this._zoom!==i;this._moveStart(n)._move(t,i)._moveEnd(n),this.fire("viewreset"),e&&this.fire("load")},_moveStart:function(t){return t&&this.fire("zoomstart"),this.fire("movestart")},_move:function(t,i,e){void 0===i&&(i=this._zoom);var n=this._zoom!==i;return this._zoom=i,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),(n||e&&e.pinch)&&this.fire("zoom",e),this.fire("move",e)},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return g(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){Lt(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[n(this._container)]=this;var i=t?G:V;i(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress",this._handleDOMEvent,this),this.options.trackResize&&i(window,"resize",this._onResize,this),Yi&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){g(this._resizeRequest),this._resizeRequest=f(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,i){for(var e,o=[],s="mouseout"===i||"mouseover"===i,r=t.target||t.srcElement,a=!1;r;){if(e=this._targets[n(r)],e&&("click"===i||"preclick"===i)&&!t._simulated&&this._draggableMoved(e)){a=!0;break}if(e&&e.listens(i,!0)){if(s&&!ot(r,t))break;if(o.push(e),s)break}if(r===this._container)break;r=r.parentNode}return o.length||a||s||!ot(r,t)||(o=[this]),o},_handleDOMEvent:function(t){if(this._loaded&&!nt(t)){var i=t.type;"mousedown"!==i&&"keypress"!==i||zt(t.target||t.srcElement),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,n){if("click"===t.type){var o=i({},t);o.type="preclick",this._fireDOMEvent(o,o.type,n)}if(!t._stopped&&(n=(n||[]).concat(this._findEventTargets(t,e)),n.length)){var s=n[0];"contextmenu"===e&&s.listens(e,!0)&&$(t);var r={originalEvent:t};if("keypress"!==t.type){var a=s.options&&"icon"in s.options;r.containerPoint=a?this.latLngToContainerPoint(s.getLatLng()):this.mouseEventToContainerPoint(t),r.layerPoint=this.containerPointToLayerPoint(r.containerPoint),r.latlng=a?s.getLatLng():this.layerPointToLatLng(r.layerPoint)}for(var h=0;h<n.length;h++)if(n[h].fire(e,r,!0),r.originalEvent._stopped||n[h].options.bubblingMouseEvents===!1&&d(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,i=this._handlers.length;t<i;t++)this._handlers[t].disable()},whenReady:function(t,i){return this._loaded?t.call(i||this,{target:this}):this.on("load",t,i),this},_getMapPanePos:function(){return Pt(this._mapPane)||new x(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,i){var e=t&&void 0!==i?this._getNewPixelOrigin(t,i):this.getPixelOrigin();return e.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,i){var e=this.getSize()._divideBy(2);return this.project(t,i)._subtract(e)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return this.project(t,i)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return b([this.project(t.getSouthWest(),i)._subtract(n),this.project(t.getNorthWest(),i)._subtract(n),this.project(t.getSouthEast(),i)._subtract(n),this.project(t.getNorthEast(),i)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,i,e){if(!e)return t;var n=this.project(t,i),o=this.getSize().divideBy(2),s=new P(n.subtract(o),n.add(o)),r=this._getBoundsOffset(s,e,i);return r.round().equals([0,0])?t:this.unproject(n.add(r),i)},_limitOffset:function(t,i){if(!i)return t;var e=this.getPixelBounds(),n=new P(e.min.add(t),e.max.add(t));return t.add(this._getBoundsOffset(n,i))},_getBoundsOffset:function(t,i,e){var n=b(this.project(i.getNorthEast(),e),this.project(i.getSouthWest(),e)),o=n.min.subtract(t.min),s=n.max.subtract(t.max),r=this._rebound(o.x,-s.x),a=this._rebound(o.y,-s.y);return new x(r,a)},_rebound:function(t,i){return t+i>0?Math.round(t-i)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(i))},_limitZoom:function(t){var i=this.getMinZoom(),e=this.getMaxZoom(),n=Yi?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(i,Math.min(e,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){mt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,i){var e=this._getCenterOffset(t)._floor();return!((i&&i.animate)!==!0&&!this.getSize().contains(e))&&(this.panBy(e,i),!0)},_createAnimProxy:function(){var t=this._proxy=ht("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var i=be,e=this._proxy.style[i];wt(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),e===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",function(){var t=this.getCenter(),i=this.getZoom();wt(this._proxy,this.project(t,i),this.getZoomScale(i,1))},this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){ut(this._proxy),delete this._proxy},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,i,e){if(this._animatingZoom)return!0;if(e=e||{},!this._zoomAnimated||e.animate===!1||this._nothingToAnimate()||Math.abs(i-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(i),o=this._getCenterOffset(t)._divideBy(1-1/n);return!(e.animate!==!0&&!this.getSize().contains(o))&&(f(function(){this._moveStart(!0)._animateZoom(t,i,!0)},this),!0)},_animateZoom:function(t,i,n,o){n&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=i,pt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:i,noUpdate:o}),setTimeout(e(this._onZoomTransitionEnd,this),250)},_onZoomTransitionEnd:function(){this._animatingZoom&&(mt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom),f(function(){this._moveEnd(!0)},this))}}),Be=v.extend({options:{position:"topright"},initialize:function(t){l(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var i=this._map;return i&&i.removeControl(this),this.options.position=t,i&&i.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var i=this._container=this.onAdd(t),e=this.getPosition(),n=t._controlCorners[e];return pt(i,"leaflet-control"),e.indexOf("bottom")!==-1?n.insertBefore(i,n.firstChild):n.appendChild(i),this},remove:function(){return this._map?(ut(this._container),this.onRemove&&this.onRemove(this._map),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),Ie=function(t){return new Be(t)};ke.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){function t(t,o){var s=e+t+" "+e+o;i[t+o]=ht("div",s,n)}var i=this._controlCorners={},e="leaflet-",n=this._controlContainer=ht("div",e+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)ut(this._controlCorners[t]);ut(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Ae=Be.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,i,e,n){return e<n?-1:n<e?1:0}},initialize:function(t,i,e){l(this,e),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in i)this._addLayer(i[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return Be.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,i){return this._addLayer(t,i),this._map?this._update():this},addOverlay:function(t,i){return this._addLayer(t,i,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var i=this._getLayer(n(t));return i&&this._layers.splice(this._layers.indexOf(i),1),this._map?this._update():this},expand:function(){pt(this._container,"leaflet-control-layers-expanded"),this._form.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._form.clientHeight?(pt(this._form,"leaflet-control-layers-scrollbar"),this._form.style.height=t+"px"):mt(this._form,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return mt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",i=this._container=ht("div",t),n=this.options.collapsed;i.setAttribute("aria-haspopup",!0),J(i),X(i);var o=this._form=ht("form",t+"-list");n&&(this._map.on("click",this.collapse,this),Ri||V(i,{mouseenter:this.expand,mouseleave:this.collapse},this));var s=this._layersLink=ht("a",t+"-toggle",i);s.href="#",s.title="Layers",ie?(V(s,"click",Q),V(s,"click",this.expand,this)):V(s,"focus",this.expand,this),V(o,"click",function(){setTimeout(e(this._onInputClick,this),0)},this),n||this.expand(),this._baseLayersList=ht("div",t+"-base",o),this._separator=ht("div",t+"-separator",o),this._overlaysList=ht("div",t+"-overlays",o),i.appendChild(o)},_getLayer:function(t){for(var i=0;i<this._layers.length;i++)if(this._layers[i]&&n(this._layers[i].layer)===t)return this._layers[i]},_addLayer:function(t,i,e){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:i,overlay:e}),this.options.sortLayers&&this._layers.sort(L.bind(function(t,i){return this.options.sortFunction(t.layer,i.layer,t.name,i.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;lt(this._baseLayersList),lt(this._overlaysList),this._layerControlInputs=[];var t,i,e,n,o=0;for(e=0;e<this._layers.length;e++)n=this._layers[e],this._addItem(n),i=i||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=i&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var i=this._getLayer(n(t.target)),e=i.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;e&&this._map.fire(e,i)},_createRadioElement:function(t,i){var e='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(i?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=e,n.firstChild},_addItem:function(t){var i,e=document.createElement("label"),o=this._map.hasLayer(t.layer);t.overlay?(i=document.createElement("input"),i.type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=o):i=this._createRadioElement("leaflet-base-layers",o),this._layerControlInputs.push(i),i.layerId=n(t.layer),V(i,"click",this._onInputClick,this);var s=document.createElement("span");s.innerHTML=" "+t.name;var r=document.createElement("div");e.appendChild(r),r.appendChild(i),r.appendChild(s);var a=t.overlay?this._overlaysList:this._baseLayersList;return a.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){var t,i,e,n=this._layerControlInputs,o=[],s=[];this._handlingClick=!0;for(var r=n.length-1;r>=0;r--)t=n[r],i=this._getLayer(t.layerId).layer,e=this._map.hasLayer(i),t.checked&&!e?o.push(i):!t.checked&&e&&s.push(i);for(r=0;r<s.length;r++)this._map.removeLayer(s[r]);for(r=0;r<o.length;r++)this._map.addLayer(o[r]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var t,i,e=this._layerControlInputs,n=this._map.getZoom(),o=e.length-1;o>=0;o--)t=e[o],i=this._getLayer(t.layerId).layer,t.disabled=void 0!==i.options.minZoom&&n<i.options.minZoom||void 0!==i.options.maxZoom&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expand:function(){return this.expand()},_collapse:function(){return this.collapse()}}),Oe=function(t,i,e){return new Ae(t,i,e)},Re=Be.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"&#x2212;",zoomOutTitle:"Zoom out"},onAdd:function(t){var i="leaflet-control-zoom",e=ht("div",i+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,i+"-in",e,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,i+"-out",e,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),e},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,i,e,n,o){var s=ht("a",e,n);return s.innerHTML=t,s.href="#",s.title=i,s.setAttribute("role","button"),s.setAttribute("aria-label",i),J(s),V(s,"click",Q),V(s,"click",o,this),V(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var t=this._map,i="leaflet-disabled";mt(this._zoomInButton,i),mt(this._zoomOutButton,i),(this._disabled||t._zoom===t.getMinZoom())&&pt(this._zoomOutButton,i),(this._disabled||t._zoom===t.getMaxZoom())&&pt(this._zoomInButton,i)}});ke.mergeOptions({zoomControl:!0}),ke.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Re,this.addControl(this.zoomControl))});var De=function(t){return new Re(t)},Ne=Be.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var i="leaflet-control-scale",e=ht("div",i),n=this.options;return this._addScales(n,i+"-line",e),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),e},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,i,e){t.metric&&(this._mScale=ht("div",i,e)),t.imperial&&(this._iScale=ht("div",i,e))},_update:function(){var t=this._map,i=t.getSize().y/2,e=t.distance(t.containerPointToLatLng([0,i]),t.containerPointToLatLng([this.options.maxWidth,i]));this._updateScales(e)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var i=this._getRoundNum(t),e=i<1e3?i+" m":i/1e3+" km";this._updateScale(this._mScale,e,i/t)},_updateImperial:function(t){var i,e,n,o=3.2808399*t;o>5280?(i=o/5280,e=this._getRoundNum(i),this._updateScale(this._iScale,e+" mi",e/i)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,i,e){t.style.width=Math.round(this.options.maxWidth*e)+"px",t.innerHTML=i},_getRoundNum:function(t){var i=Math.pow(10,(Math.floor(t)+"").length-1),e=t/i;return e=e>=10?10:e>=5?5:e>=3?3:e>=2?2:1,i*e}}),je=function(t){return new Ne(t)},We=Be.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){l(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=ht("div","leaflet-control-attribution"),J(this._container);for(var i in t._layers)t._layers[i].getAttribution&&this.addAttribution(t._layers[i].getAttribution());return this._update(),this._container},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var i in this._attributions)this._attributions[i]&&t.push(i);var e=[];this.options.prefix&&e.push(this.options.prefix),t.length&&e.push(t.join(", ")),this._container.innerHTML=e.join(" | ")}}});ke.mergeOptions({attributionControl:!0}),ke.addInitHook(function(){this.options.attributionControl&&(new We).addTo(this)});var He=function(t){return new We(t)};Be.Layers=Ae,Be.Zoom=Re,Be.Scale=Ne,Be.Attribution=We,Ie.layers=Oe,Ie.zoom=De,Ie.scale=je,Ie.attribution=He;var Fe,Ue=v.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}}),Ve={Events:wi},Ge=!1,qe=ie?"touchstart mousedown":"mousedown",Ke={mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},Ye={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"},Xe=Li.extend({options:{clickTolerance:3},initialize:function(t,i,e,n){l(this,n),this._element=t,this._dragStartTarget=i||t,this._preventOutline=e},enable:function(){this._enabled||(V(this._dragStartTarget,qe,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(L.Draggable._dragging===this&&this.finishDrag(),G(this._dragStartTarget,qe,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(!t._simulated&&this._enabled&&(this._moved=!1,!dt(this._element,"leaflet-zoom-anim")&&!(Ge||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(Ge=this,this._preventOutline&&zt(this._element),bt(),Mi(),this._moving)))){this.fire("down");var i=t.touches?t.touches[0]:t;this._startPoint=new x(i.clientX,i.clientY),V(document,Ye[t.type],this._onMove,this),V(document,Ke[t.type],this._onUp,this)}},_onMove:function(t){if(!t._simulated&&this._enabled){if(t.touches&&t.touches.length>1)return void(this._moved=!0);var i=t.touches&&1===t.touches.length?t.touches[0]:t,e=new x(i.clientX,i.clientY),n=e.subtract(this._startPoint);(n.x||n.y)&&(Math.abs(n.x)+Math.abs(n.y)<this.options.clickTolerance||($(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=Pt(this._element).subtract(n),pt(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),pt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(n),this._moving=!0,g(this._animRequest),this._lastEvent=t,this._animRequest=f(this._updatePosition,this,!0)))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),Lt(this._element,this._newPos),this.fire("drag",t)},_onUp:function(t){!t._simulated&&this._enabled&&this.finishDrag()},finishDrag:function(){mt(document.body,"leaflet-dragging"),this._lastTarget&&(mt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null);for(var t in Ye)G(document,Ye[t],this._onMove,this),G(document,Ke[t],this._onUp,this);Tt(),Ci(),this._moved&&this._moving&&(g(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1,Ge=!1}}),Je=(Object.freeze||Object)({simplify:Zt,pointToSegmentDistance:Et,closestPointOnSegment:St,clipSegment:At,_getEdgeIntersection:Ot,_getBitCode:Rt,_sqClosestPointOnSegment:Nt,_flat:jt}),$e=(Object.freeze||Object)({clipPolygon:Wt}),Qe={project:function(t){return new x(t.lng,t.lat)},unproject:function(t){return new M(t.y,t.x)},bounds:new P([-180,-90],[180,90])},tn={R:6378137,R_MINOR:6356752.314245179,bounds:new P([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var i=Math.PI/180,e=this.R,n=t.lat*i,o=this.R_MINOR/e,s=Math.sqrt(1-o*o),r=s*Math.sin(n),a=Math.tan(Math.PI/4-n/2)/Math.pow((1-r)/(1+r),s/2);return n=-e*Math.log(Math.max(a,1e-10)),new x(t.lng*i*e,n)},unproject:function(t){for(var i,e=180/Math.PI,n=this.R,o=this.R_MINOR/n,s=Math.sqrt(1-o*o),r=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(r),h=0,u=.1;h<15&&Math.abs(u)>1e-7;h++)i=s*Math.sin(a),i=Math.pow((1-i)/(1+i),s/2),u=Math.PI/2-2*Math.atan(r*i)-a,a+=u;return new M(a*e,t.x*e/n)}},en=(Object.freeze||Object)({LonLat:Qe,Mercator:tn,SphericalMercator:Ti}),nn=i({},bi,{code:"EPSG:3395",projection:tn,transformation:function(){var t=.5/(Math.PI*tn.R);return E(t,.5,-t,.5)}()}),on=i({},bi,{code:"EPSG:4326",projection:Qe,transformation:E(1/180,1,-1/180,.5)}),sn=i({},Pi,{projection:Qe,transformation:E(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,i){var e=i.lng-t.lng,n=i.lat-t.lat;return Math.sqrt(e*e+n*n)},infinite:!0});Pi.Earth=bi,Pi.EPSG3395=nn,Pi.EPSG3857=Ei,Pi.EPSG900913=Si,Pi.EPSG4326=on,Pi.Simple=sn;var rn=Li.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){
return this._map._targets[n(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[n(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var i=t.target;if(i.hasLayer(this)){if(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents){var e=this.getEvents();i.on(e,this),this.once("remove",function(){i.off(e,this)},this)}this.onAdd(i),this.getAttribution&&i.attributionControl&&i.attributionControl.addAttribution(this.getAttribution()),this.fire("add"),i.fire("layeradd",{layer:this})}}});ke.include({addLayer:function(t){var i=n(t);return this._layers[i]?this:(this._layers[i]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var i=n(t);return this._layers[i]?(this._loaded&&t.onRemove(this),t.getAttribution&&this.attributionControl&&this.attributionControl.removeAttribution(t.getAttribution()),delete this._layers[i],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return!!t&&n(t)in this._layers},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},_addLayers:function(t){t=t?mi(t)?t:[t]:[];for(var i=0,e=t.length;i<e;i++)this.addLayer(t[i])},_addZoomLimit:function(t){!isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[n(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var i=n(t);this._zoomBoundLayers[i]&&(delete this._zoomBoundLayers[i],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,i=-(1/0),e=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=void 0===o.minZoom?t:Math.min(t,o.minZoom),i=void 0===o.maxZoom?i:Math.max(i,o.maxZoom)}this._layersMaxZoom=i===-(1/0)?void 0:i,this._layersMinZoom=t===1/0?void 0:t,e!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var an=rn.extend({initialize:function(t){this._layers={};var i,e;if(t)for(i=0,e=t.length;i<e;i++)this.addLayer(t[i])},addLayer:function(t){var i=this.getLayerId(t);return this._layers[i]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var i=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[i]&&this._map.removeLayer(this._layers[i]),delete this._layers[i],this},hasLayer:function(t){return!!t&&(t in this._layers||this.getLayerId(t)in this._layers)},clearLayers:function(){for(var t in this._layers)this.removeLayer(this._layers[t]);return this},invoke:function(t){var i,e,n=Array.prototype.slice.call(arguments,1);for(i in this._layers)e=this._layers[i],e[t]&&e[t].apply(e,n);return this},onAdd:function(t){for(var i in this._layers)t.addLayer(this._layers[i])},onRemove:function(t){for(var i in this._layers)t.removeLayer(this._layers[i])},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];for(var i in this._layers)t.push(this._layers[i]);return t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return n(t)}}),hn=function(t){return new an(t)},un=an.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),an.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),an.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new T;for(var i in this._layers){var e=this._layers[i];t.extend(e.getBounds?e.getBounds():e.getLatLng())}return t}}),ln=function(t){return new un(t)},cn=v.extend({initialize:function(t){l(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,i){var e=this._getIconUrl(t);if(!e){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(e,i&&"IMG"===i.tagName?i:null);return this._setIconStyles(n,t),n},_setIconStyles:function(t,i){var e=this.options,n=e[i+"Size"];"number"==typeof n&&(n=[n,n]);var o=w(n),s=w("shadow"===i&&e.shadowAnchor||e.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+i+" "+(e.className||""),s&&(t.style.marginLeft=-s.x+"px",t.style.marginTop=-s.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,i){return i=i||document.createElement("img"),i.src=t,i},_getIconUrl:function(t){return oe&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}}),_n=cn.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return _n.imagePath||(_n.imagePath=this._detectIconPath()),(this.options.imagePath||_n.imagePath)+cn.prototype._getIconUrl.call(this,t)},_detectIconPath:function(){var t=ht("div","leaflet-default-icon-path",document.body),i=at(t,"background-image")||at(t,"backgroundImage");return document.body.removeChild(t),i=null===i||0!==i.indexOf("url")?"":i.replace(/^url\([\"\']?/,"").replace(/marker-icon\.png[\"\']?\)$/,"")}}),dn=Ue.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Xe(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),pt(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&mt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(t){var i=this._marker,e=i._shadow,n=Pt(i._icon),o=i._map.layerPointToLatLng(n);e&&Lt(e,n),i._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,i.fire("move",t).fire("drag",t)},_onDragEnd:function(t){delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),pn=rn.extend({options:{icon:new _n,interactive:!0,draggable:!1,keyboard:!0,title:"",alt:"",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",bubblingMouseEvents:!1},initialize:function(t,i){l(this,i),this._latlng=C(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var i=this._latlng;return this._latlng=C(t),this.update(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,i="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),e=t.icon.createIcon(this._icon),n=!1;e!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(e.title=t.title),t.alt&&(e.alt=t.alt)),pt(e,i),t.keyboard&&(e.tabIndex="0"),this._icon=e,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex});var o=t.icon.createShadow(this._shadow),s=!1;o!==this._shadow&&(this._removeShadow(),s=!0),o&&(pt(o,i),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&s&&this.getPane("shadowPane").appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),ut(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&ut(this._shadow),this._shadow=null},_setPos:function(t){Lt(this._icon,t),this._shadow&&Lt(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(i)},_initInteraction:function(){if(this.options.interactive&&(pt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),dn)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new dn(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;vt(this._icon,t),this._shadow&&vt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor||[0,0]},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor||[0,0]}}),mn=rn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return l(this,t),this._renderer&&this._renderer._updateStyle(this),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(ie?10:0)}}),fn=mn.extend({options:{fill:!0,radius:10},initialize:function(t,i){l(this,i),this._latlng=C(t),this._radius=this.options.radius},setLatLng:function(t){return this._latlng=C(t),this.redraw(),this.fire("move",{latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var i=t&&t.radius||this._radius;return mn.prototype.setStyle.call(this,t),this.setRadius(i),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,i=this._radiusY||t,e=this._clickTolerance(),n=[t+e,i+e];this._pxBounds=new P(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}}),gn=fn.extend({initialize:function(t,e,n){if("number"==typeof e&&(e=i({},n,{radius:e})),l(this,e),this._latlng=C(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new T(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:mn.prototype.setStyle,_project:function(){var t=this._latlng.lng,i=this._latlng.lat,e=this._map,n=e.options.crs;if(n.distance===bi.distance){var o=Math.PI/180,s=this._mRadius/bi.R/o,r=e.project([i+s,t]),a=e.project([i-s,t]),h=r.add(a).divideBy(2),u=e.unproject(h).lat,l=Math.acos((Math.cos(s*o)-Math.sin(i*o)*Math.sin(u*o))/(Math.cos(i*o)*Math.cos(u*o)))/o;(isNaN(l)||0===l)&&(l=s/Math.cos(Math.PI/180*i)),this._point=h.subtract(e.getPixelOrigin()),this._radius=isNaN(l)?0:Math.max(Math.round(h.x-e.project([u,t-l]).x),1),this._radiusY=Math.max(Math.round(h.y-r.y),1)}else{var c=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=e.latLngToLayerPoint(this._latlng),this._radius=this._point.x-e.latLngToLayerPoint(c).x}this._updateBounds()}}),vn=mn.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,i){l(this,i),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var i,e,n=1/0,o=null,s=Nt,r=0,a=this._parts.length;r<a;r++)for(var h=this._parts[r],u=1,l=h.length;u<l;u++){i=h[u-1],e=h[u];var c=s(t,i,e,!0);c<n&&(n=c,o=s(t,i,e))}return o&&(o.distance=Math.sqrt(n)),o},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a=this._rings[0],h=a.length;if(!h)return null;for(t=0,i=0;t<h-1;t++)i+=a[t].distanceTo(a[t+1])/2;if(0===i)return this._map.layerPointToLatLng(a[0]);for(t=0,n=0;t<h-1;t++)if(o=a[t],s=a[t+1],e=o.distanceTo(s),n+=e,n>i)return r=(n-i)/e,this._map.layerPointToLatLng([s.x-r*(s.x-o.x),s.y-r*(s.y-o.y)])},getBounds:function(){return this._bounds},addLatLng:function(t,i){return i=i||this._defaultShape(),t=C(t),i.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new T,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return jt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var i=[],e=jt(t),n=0,o=t.length;n<o;n++)e?(i[n]=C(t[n]),this._bounds.extend(i[n])):i[n]=this._convertLatLngs(t[n]);return i},_project:function(){var t=new P;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t);var i=this._clickTolerance(),e=new x(i,i);this._bounds.isValid()&&t.isValid()&&(t.min._subtract(e),t.max._add(e),this._pxBounds=t)},_projectLatlngs:function(t,i,e){var n,o,s=t[0]instanceof M,r=t.length;if(s){for(o=[],n=0;n<r;n++)o[n]=this._map.latLngToLayerPoint(t[n]),e.extend(o[n]);i.push(o)}else for(n=0;n<r;n++)this._projectLatlngs(t[n],i,e)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t)){if(this.options.noClip)return void(this._parts=this._rings);var i,e,n,o,s,r,a,h=this._parts;for(i=0,n=0,o=this._rings.length;i<o;i++)for(a=this._rings[i],e=0,s=a.length;e<s-1;e++)r=At(a[e],a[e+1],t,e,!0),r&&(h[n]=h[n]||[],h[n].push(r[0]),r[1]===a[e+1]&&e!==s-2||(h[n].push(r[1]),n++))}},_simplifyPoints:function(){for(var t=this._parts,i=this.options.smoothFactor,e=0,n=t.length;e<n;e++)t[e]=Zt(t[e],i)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,i){var e,n,o,s,r,a,h=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(e=0,s=this._parts.length;e<s;e++)for(a=this._parts[e],n=0,r=a.length,o=r-1;n<r;o=n++)if((i||0!==n)&&Et(t,a[o],a[n])<=h)return!0;return!1}}),yn=vn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a,h,u=this._rings[0],l=u.length;if(!l)return null;for(s=r=a=0,t=0,i=l-1;t<l;i=t++)e=u[t],n=u[i],o=e.y*n.x-n.y*e.x,r+=(e.x+n.x)*o,a+=(e.y+n.y)*o,s+=3*o;return h=0===s?u[0]:[r/s,a/s],this._map.layerPointToLatLng(h)},_convertLatLngs:function(t){var i=vn.prototype._convertLatLngs.call(this,t),e=i.length;return e>=2&&i[0]instanceof M&&i[0].equals(i[e-1])&&i.pop(),i},_setLatLngs:function(t){vn.prototype._setLatLngs.call(this,t),jt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return jt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,i=this.options.weight,e=new x(i,i);if(t=new P(t.min.subtract(e),t.max.add(e)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t)){if(this.options.noClip)return void(this._parts=this._rings);for(var n,o=0,s=this._rings.length;o<s;o++)n=Wt(this._rings[o],t,!0),n.length&&this._parts.push(n)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var i,e,n,o,s,r,a,h,u=!1;if(!this._pxBounds.contains(t))return!1;for(o=0,a=this._parts.length;o<a;o++)for(i=this._parts[o],s=0,h=i.length,r=h-1;s<h;r=s++)e=i[s],n=i[r],e.y>t.y!=n.y>t.y&&t.x<(n.x-e.x)*(t.y-e.y)/(n.y-e.y)+e.x&&(u=!u);return u||vn.prototype._containsPoint.call(this,t,!0)}}),xn=un.extend({initialize:function(t,i){l(this,i),this._layers={},t&&this.addData(t)},addData:function(t){var i,e,n,o=mi(t)?t:t.features;if(o){for(i=0,e=o.length;i<e;i++)n=o[i],(n.geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var s=this.options;if(s.filter&&!s.filter(t))return this;var r=Kt(t,s);return r?(r.feature=ti(t),r.defaultOptions=r.options,this.resetStyle(r),s.onEachFeature&&s.onEachFeature(t,r),this.addLayer(r)):this},resetStyle:function(t){return t.options=i({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this},setStyle:function(t){return this.eachLayer(function(i){this._setLayerStyle(i,t)},this)},_setLayerStyle:function(t,i){"function"==typeof i&&(i=i(t.feature)),t.setStyle&&t.setStyle(i)}}),wn={toGeoJSON:function(t){return Qt(this,{type:"Point",coordinates:Jt(this.getLatLng(),t)})}};pn.include(wn),gn.include(wn),fn.include(wn),vn.include({toGeoJSON:function(t){var i=!jt(this._latlngs),e=$t(this._latlngs,i?1:0,!1,t);return Qt(this,{type:(i?"Multi":"")+"LineString",coordinates:e})}}),yn.include({toGeoJSON:function(t){var i=!jt(this._latlngs),e=i&&!jt(this._latlngs[0]),n=$t(this._latlngs,e?2:i?1:0,!0,t);return i||(n=[n]),Qt(this,{type:(e?"Multi":"")+"Polygon",coordinates:n})}}),an.include({toMultiPoint:function(t){var i=[];return this.eachLayer(function(e){i.push(e.toGeoJSON(t).geometry.coordinates)}),Qt(this,{type:"MultiPoint",coordinates:i})},toGeoJSON:function(t){var i=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===i)return this.toMultiPoint(t);var e="GeometryCollection"===i,n=[];return this.eachLayer(function(i){if(i.toGeoJSON){var o=i.toGeoJSON(t);if(e)n.push(o.geometry);else{var s=ti(o);"FeatureCollection"===s.type?n.push.apply(n,s.features):n.push(s)}}}),e?Qt(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});var Ln=ii,Pn=rn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,i,e){this._url=t,this._bounds=z(i),l(this,e)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(pt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){ut(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&ct(this._image),this},bringToBack:function(){return this._map&&_t(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=t,this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._image=ht("img","leaflet-image-layer "+(this._zoomAnimated?"leaflet-zoom-animated":"")+(this.options.className||""));t.onselectstart=r,t.onmousemove=r,t.onload=e(this.fire,this,"load"),t.onerror=e(this._overlayOnError,this,"error"),this.options.crossOrigin&&(t.crossOrigin=""),this.options.zIndex&&this._updateZIndex(),t.src=this._url,t.alt=this.options.alt},_animateZoom:function(t){var i=this._map.getZoomScale(t.zoom),e=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;wt(this._image,e,i)},_reset:function(){var t=this._image,i=new P(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),e=i.getSize();Lt(t,i.min),t.style.width=e.x+"px",t.style.height=e.y+"px"},_updateOpacity:function(){vt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)}}),bn=function(t,i,e){return new Pn(t,i,e)},Tn=Pn.extend({options:{autoplay:!0,loop:!0},_initImage:function(){var t=this._image=ht("video","leaflet-image-layer "+(this._zoomAnimated?"leaflet-zoom-animated":""));t.onselectstart=r,t.onmousemove=r,t.onloadeddata=e(this.fire,this,"load"),mi(this._url)||(this._url=[this._url]),t.autoplay=!!this.options.autoplay,t.loop=!!this.options.loop;for(var i=0;i<this._url.length;i++){var n=ht("source");n.src=this._url[i],t.appendChild(n)}}}),zn=rn.extend({options:{offset:[0,7],className:"",pane:"popupPane"},initialize:function(t,i){l(this,t),this._source=i},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&vt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&vt(this._container,1),this.bringToFront()},onRemove:function(t){t._fadeAnimated?(vt(this._container,0),this._removeTimeout=setTimeout(e(ut,void 0,this._container),200)):ut(this._container)},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=C(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ct(this._container),this},bringToBack:function(){return this._map&&_t(this._container),this},_updateContent:function(){if(this._content){var t=this._contentNode,i="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof i)t.innerHTML=i;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(i)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),i=w(this.options.offset),e=this._getAnchor();this._zoomAnimated?Lt(this._container,t.add(e)):i=i.add(t).add(e);var n=this._containerBottom=-i.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+i.x;this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}}),Mn=zn.extend({options:{maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,className:""},openOn:function(t){return t.openPopup(this),this},onAdd:function(t){zn.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof mn||this._source.on("preclick",Y))},onRemove:function(t){zn.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof mn||this._source.off("preclick",Y))},getEvents:function(){var t=zn.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t="leaflet-popup",i=this._container=ht("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),e=this._wrapper=ht("div",t+"-content-wrapper",i);if(this._contentNode=ht("div",t+"-content",e),J(e),X(this._contentNode),V(e,"contextmenu",Y),this._tipContainer=ht("div",t+"-tip-container",i),this._tip=ht("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=ht("a",t+"-close-button",i);n.href="#close",n.innerHTML="&#215;",V(n,"click",this._onCloseButtonClick,this)}},_updateLayout:function(){var t=this._contentNode,i=t.style;i.width="",i.whiteSpace="nowrap";var e=t.offsetWidth;e=Math.min(e,this.options.maxWidth),e=Math.max(e,this.options.minWidth),i.width=e+1+"px",i.whiteSpace="",i.height="";var n=t.offsetHeight,o=this.options.maxHeight,s="leaflet-popup-scrolled";o&&n>o?(i.height=o+"px",pt(t,s)):mt(t,s),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),e=this._getAnchor();Lt(this._container,i.add(e))},_adjustPan:function(){if(!(!this.options.autoPan||this._map._panAnim&&this._map._panAnim._inProgress)){var t=this._map,i=parseInt(at(this._container,"marginBottom"),10)||0,e=this._container.offsetHeight+i,n=this._containerWidth,o=new x(this._containerLeft,-e-this._containerBottom);o._add(Pt(this._container));var s=t.layerPointToContainerPoint(o),r=w(this.options.autoPanPadding),a=w(this.options.autoPanPaddingTopLeft||r),h=w(this.options.autoPanPaddingBottomRight||r),u=t.getSize(),l=0,c=0;s.x+n+h.x>u.x&&(l=s.x+n-u.x+h.x),s.x-l-a.x<0&&(l=s.x-a.x),s.y+e+h.y>u.y&&(c=s.y+e-u.y+h.y),s.y-c-a.y<0&&(c=s.y-a.y),(l||c)&&t.fire("autopanstart").panBy([l,c])}},_onCloseButtonClick:function(t){this._close(),Q(t)},_getAnchor:function(){return w(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Cn=function(t,i){return new Mn(t,i)};ke.mergeOptions({closePopupOnClick:!0}),ke.include({openPopup:function(t,i,e){return t instanceof Mn||(t=new Mn(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:(this._popup&&this._popup.options.autoClose&&this.closePopup(),this._popup=t,this.addLayer(t))},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&this.removeLayer(t),this}}),rn.include({bindPopup:function(t,i){return t instanceof Mn?(l(t,i),this._popup=t,t._source=this):(this._popup&&!i||(this._popup=new Mn(i,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t,i){if(t instanceof rn||(i=t,t=this),t instanceof un)for(var e in this._layers){t=this._layers[e];break}return i||(i=t.getCenter?t.getCenter():t.getLatLng()),this._popup&&this._map&&(this._popup._source=t,this._popup.update(),this._map.openPopup(this._popup,i)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(t){return this._popup&&(this._popup._map?this.closePopup():this.openPopup(t)),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var i=t.layer||t.target;if(this._popup&&this._map)return Q(t),i instanceof mn?void this.openPopup(t.layer||t.target,t.latlng):void(this._map.hasLayer(this._popup)&&this._popup._source===i?this.closePopup():this.openPopup(i,t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});var Zn=zn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,interactive:!1,opacity:.9},onAdd:function(t){zn.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&this._source.fire("tooltipopen",{tooltip:this},!0)},onRemove:function(t){zn.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&this._source.fire("tooltipclose",{tooltip:this},!0)},getEvents:function(){var t=zn.prototype.getEvents.call(this);return ie&&!this.options.permanent&&(t.preclick=this._close),t},_close:function(){this._map&&this._map.closeTooltip(this)},_initLayout:function(){var t="leaflet-tooltip",i=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=ht("div",i)},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var i=this._map,e=this._container,n=i.latLngToContainerPoint(i.getCenter()),o=i.layerPointToContainerPoint(t),s=this.options.direction,r=e.offsetWidth,a=e.offsetHeight,h=w(this.options.offset),u=this._getAnchor();"top"===s?t=t.add(w(-r/2+h.x,-a+h.y+u.y,!0)):"bottom"===s?t=t.subtract(w(r/2-h.x,-h.y,!0)):"center"===s?t=t.subtract(w(r/2+h.x,a/2-u.y+h.y,!0)):"right"===s||"auto"===s&&o.x<n.x?(s="right",t=t.add(w(h.x+u.x,u.y-a/2+h.y,!0))):(s="left",t=t.subtract(w(r+u.x-h.x,a/2-u.y-h.y,!0))),mt(e,"leaflet-tooltip-right"),mt(e,"leaflet-tooltip-left"),mt(e,"leaflet-tooltip-top"),mt(e,"leaflet-tooltip-bottom"),pt(e,"leaflet-tooltip-"+s),Lt(e,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&vt(this._container,t)},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(i)},_getAnchor:function(){return w(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),En=function(t,i){return new Zn(t,i)};ke.include({openTooltip:function(t,i,e){return t instanceof Zn||(t=new Zn(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:this.addLayer(t)},closeTooltip:function(t){return t&&this.removeLayer(t),this}}),rn.include({bindTooltip:function(t,i){return t instanceof Zn?(l(t,i),this._tooltip=t,t._source=this):(this._tooltip&&!i||(this._tooltip=new Zn(i,this)),this._tooltip.setContent(t)),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){
if(t||!this._tooltipHandlersAdded){var i=t?"off":"on",e={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?e.add=this._openTooltip:(e.mouseover=this._openTooltip,e.mouseout=this.closeTooltip,this._tooltip.options.sticky&&(e.mousemove=this._moveTooltip),ie&&(e.click=this._openTooltip)),this[i](e),this._tooltipHandlersAdded=!t}},openTooltip:function(t,i){if(t instanceof rn||(i=t,t=this),t instanceof un)for(var e in this._layers){t=this._layers[e];break}return i||(i=t.getCenter?t.getCenter():t.getLatLng()),this._tooltip&&this._map&&(this._tooltip._source=t,this._tooltip.update(),this._map.openTooltip(this._tooltip,i),this._tooltip.options.interactive&&this._tooltip._container&&(pt(this._tooltip._container,"leaflet-clickable"),this.addInteractiveTarget(this._tooltip._container))),this},closeTooltip:function(){return this._tooltip&&(this._tooltip._close(),this._tooltip.options.interactive&&this._tooltip._container&&(mt(this._tooltip._container,"leaflet-clickable"),this.removeInteractiveTarget(this._tooltip._container))),this},toggleTooltip:function(t){return this._tooltip&&(this._tooltip._map?this.closeTooltip():this.openTooltip(t)),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_openTooltip:function(t){var i=t.layer||t.target;this._tooltip&&this._map&&this.openTooltip(i,this._tooltip.options.sticky?t.latlng:void 0)},_moveTooltip:function(t){var i,e,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),e=this._map.containerPointToLayerPoint(i),n=this._map.layerPointToLatLng(e)),this._tooltip.setLatLng(n)}});var Sn=cn.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:document.createElement("div"),e=this.options;if(i.innerHTML=e.html!==!1?e.html:"",e.bgPos){var n=w(e.bgPos);i.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(i,"icon"),i},createShadow:function(){return null}});cn.Default=_n;var kn=rn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Xi,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){l(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView(),this._update()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),ut(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=null},bringToFront:function(){return this._map&&(ct(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(_t(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){return this._map&&(this._removeAllTiles(),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=o(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof x?t:new x(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var i,e=this.getPane().children,n=-t(-(1/0),1/0),o=0,s=e.length;o<s;o++)i=e[o].style.zIndex,e[o]!==this._container&&i&&(n=t(n,+i));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Ii){vt(this._container,this.options.opacity);var t=+new Date,i=!1,e=!1;for(var n in this._tiles){var o=this._tiles[n];if(o.current&&o.loaded){var s=Math.min(1,(t-o.loaded)/200);vt(o.el,s),s<1?i=!0:(o.active?e=!0:this._onOpaqueTile(o),o.active=!0)}}e&&!this._noPrune&&this._pruneTiles(),i&&(g(this._fadeFrame),this._fadeFrame=f(this._updateOpacity,this))}},_onOpaqueTile:r,_initContainer:function(){this._container||(this._container=ht("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,i=this.options.maxZoom;if(void 0!==t){for(var e in this._levels)this._levels[e].el.children.length||e===t?(this._levels[e].el.style.zIndex=i-Math.abs(t-e),this._onUpdateLevel(e)):(ut(this._levels[e].el),this._removeTilesAtZoom(e),this._onRemoveLevel(e),delete this._levels[e]);var n=this._levels[t],o=this._map;return n||(n=this._levels[t]={},n.el=ht("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=i,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),r(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:r,_onRemoveLevel:r,_onCreateLevel:r,_pruneTiles:function(){if(this._map){var t,i,e=this._map.getZoom();if(e>this.options.maxZoom||e<this.options.minZoom)return void this._removeAllTiles();for(t in this._tiles)i=this._tiles[t],i.retain=i.current;for(t in this._tiles)if(i=this._tiles[t],i.current&&!i.active){var n=i.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var i in this._tiles)this._tiles[i].coords.z===t&&this._removeTile(i)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)ut(this._levels[t].el),this._onRemoveLevel(t),delete this._levels[t];this._removeAllTiles(),this._tileZoom=null},_retainParent:function(t,i,e,n){var o=Math.floor(t/2),s=Math.floor(i/2),r=e-1,a=new x(+o,+s);a.z=+r;var h=this._tileCoordsToKey(a),u=this._tiles[h];return u&&u.active?(u.retain=!0,!0):(u&&u.loaded&&(u.retain=!0),r>n&&this._retainParent(o,s,r,n))},_retainChildren:function(t,i,e,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*i;s<2*i+2;s++){var r=new x(o,s);r.z=e+1;var a=this._tileCoordsToKey(r),h=this._tiles[a];h&&h.active?h.retain=!0:(h&&h.loaded&&(h.retain=!0),e+1<n&&this._retainChildren(o,s,e+1,n))}},_resetView:function(t){var i=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),i,i)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var i=this.options;return void 0!==i.minNativeZoom&&t<i.minNativeZoom?i.minNativeZoom:void 0!==i.maxNativeZoom&&i.maxNativeZoom<t?i.maxNativeZoom:t},_setView:function(t,i,e,n){var o=this._clampZoom(Math.round(i));(void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom)&&(o=void 0);var s=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!s||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),e||this._pruneTiles(),this._noPrune=!!e),this._setZoomTransforms(t,i)},_setZoomTransforms:function(t,i){for(var e in this._levels)this._setZoomTransform(this._levels[e],t,i)},_setZoomTransform:function(t,i,e){var n=this._map.getZoomScale(e,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i,e)).round();Yi?wt(t.el,o,n):Lt(t.el,o)},_resetGrid:function(){var t=this._map,i=t.options.crs,e=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=i.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,i.wrapLng[0]],n).x/e.x),Math.ceil(t.project([0,i.wrapLng[1]],n).x/e.y)],this._wrapY=i.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([i.wrapLat[0],0],n).y/e.x),Math.ceil(t.project([i.wrapLat[1],0],n).y/e.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var i=this._map,e=i._animatingZoom?Math.max(i._animateToZoom,i.getZoom()):i.getZoom(),n=i.getZoomScale(e,this._tileZoom),o=i.project(t,this._tileZoom).floor(),s=i.getSize().divideBy(2*n);return new P(o.subtract(s),o.add(s))},_update:function(t){var i=this._map;if(i){var e=this._clampZoom(i.getZoom());if(void 0===t&&(t=i.getCenter()),void 0!==this._tileZoom){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),s=o.getCenter(),r=[],a=this.options.keepBuffer,h=new P(o.getBottomLeft().subtract([a,-a]),o.getTopRight().add([a,-a]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var u in this._tiles){var l=this._tiles[u].coords;l.z===this._tileZoom&&h.contains(new x(l.x,l.y))||(this._tiles[u].current=!1)}if(Math.abs(e-this._tileZoom)>1)return void this._setView(t,e);for(var c=o.min.y;c<=o.max.y;c++)for(var _=o.min.x;_<=o.max.x;_++){var d=new x(_,c);d.z=this._tileZoom,this._isValidTile(d)&&(this._tiles[this._tileCoordsToKey(d)]||r.push(d))}if(r.sort(function(t,i){return t.distanceTo(s)-i.distanceTo(s)}),0!==r.length){this._loading||(this._loading=!0,this.fire("loading"));var p=document.createDocumentFragment();for(_=0;_<r.length;_++)this._addTile(r[_],p);this._level.el.appendChild(p)}}}},_isValidTile:function(t){var i=this._map.options.crs;if(!i.infinite){var e=this._globalTileRange;if(!i.wrapLng&&(t.x<e.min.x||t.x>e.max.x)||!i.wrapLat&&(t.y<e.min.y||t.y>e.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return z(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToBounds:function(t){var i=this._map,e=this.getTileSize(),n=t.scaleBy(e),o=n.add(e),s=i.unproject(n,t.z),r=i.unproject(o,t.z),a=new T(s,r);return this.options.noWrap||i.wrapLatLngBounds(a),a},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var i=t.split(":"),e=new x(+i[0],+i[1]);return e.z=+i[2],e},_removeTile:function(t){var i=this._tiles[t];i&&(ut(i.el),delete this._tiles[t],this.fire("tileunload",{tile:i.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){pt(t,"leaflet-tile");var i=this.getTileSize();t.style.width=i.x+"px",t.style.height=i.y+"px",t.onselectstart=r,t.onmousemove=r,Ii&&this.options.opacity<1&&vt(t,this.options.opacity),Ri&&!Di&&(t.style.WebkitBackfaceVisibility="hidden")},_addTile:function(t,i){var n=this._getTilePos(t),o=this._tileCoordsToKey(t),s=this.createTile(this._wrapCoords(t),e(this._tileReady,this,t));this._initTile(s),this.createTile.length<2&&f(e(this._tileReady,this,t,null,s)),Lt(s,n),this._tiles[o]={el:s,coords:t,current:!0},i.appendChild(s),this.fire("tileloadstart",{tile:s,coords:t})},_tileReady:function(t,i,n){if(this._map){i&&this.fire("tileerror",{error:i,tile:n,coords:t});var o=this._tileCoordsToKey(t);n=this._tiles[o],n&&(n.loaded=+new Date,this._map._fadeAnimated?(vt(n.el,0),g(this._fadeFrame),this._fadeFrame=f(this._updateOpacity,this)):(n.active=!0,this._pruneTiles()),i||(pt(n.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:n.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Ii||!this._map._fadeAnimated?f(this._pruneTiles,this):setTimeout(e(this._pruneTiles,this),250)))}},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var i=new x(this._wrapX?s(t.x,this._wrapX):t.x,this._wrapY?s(t.y,this._wrapY):t.y);return i.z=t.z,i},_pxBoundsToTileRange:function(t){var i=this.getTileSize();return new P(t.min.unscaleBy(i).floor(),t.max.unscaleBy(i).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}}),Bn=kn.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1},initialize:function(t,i){this._url=t,i=l(this,i),i.detectRetina&&oe&&i.maxZoom>0&&(i.tileSize=Math.floor(i.tileSize/2),i.zoomReverse?(i.zoomOffset--,i.minZoom++):(i.zoomOffset++,i.maxZoom--),i.minZoom=Math.max(0,i.minZoom)),"string"==typeof i.subdomains&&(i.subdomains=i.subdomains.split("")),Ri||this.on("tileunload",this._onTileRemove)},setUrl:function(t,i){return this._url=t,i||this.redraw(),this},createTile:function(t,i){var n=document.createElement("img");return V(n,"load",e(this._tileOnLoad,this,i,n)),V(n,"error",e(this._tileOnError,this,i,n)),this.options.crossOrigin&&(n.crossOrigin=""),n.alt="",n.setAttribute("role","presentation"),n.src=this.getTileUrl(t),n},getTileUrl:function(t){var e={r:oe?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var n=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=n),e["-y"]=n}return _(this._url,i(e,this.options))},_tileOnLoad:function(t,i){Ii?setTimeout(e(t,this,null,i),0):t(null,i)},_tileOnError:function(t,i,e){var n=this.options.errorTileUrl;n&&i.src!==n&&(i.src=n),t(e,i)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,i=this.options.maxZoom,e=this.options.zoomReverse,n=this.options.zoomOffset;return e&&(t=i-t),t+n},_getSubdomain:function(t){var i=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[i]},_abortLoading:function(){var t,i;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&(i=this._tiles[t].el,i.onload=r,i.onerror=r,i.complete||(i.src=fi,ut(i)))}}),In=Bn.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var n=i({},this.defaultWmsParams);for(var o in e)o in this.options||(n[o]=e[o]);e=l(this,e),n.width=n.height=e.tileSize*(e.detectRetina&&oe?2:1),this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var i=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[i]=this._crs.code,Bn.prototype.onAdd.call(this,t)},getTileUrl:function(t){var i=this._tileCoordsToBounds(t),e=this._crs.project(i.getNorthWest()),n=this._crs.project(i.getSouthEast()),o=(this._wmsVersion>=1.3&&this._crs===on?[n.y,e.x,e.y,n.x]:[e.x,n.y,n.x,e.y]).join(","),s=Bn.prototype.getTileUrl.call(this,t);return s+c(this.wmsParams,s,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+o},setParams:function(t,e){return i(this.wmsParams,t),e||this.redraw(),this}});Bn.WMS=In,si.wms=ri;var An=rn.extend({options:{padding:.1},initialize:function(t){l(this,t),n(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&pt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,i){var e=this._map.getZoomScale(i,this._zoom),n=Pt(this._container),o=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,i),r=this._map.project(t,i),a=r.subtract(s),h=o.multiplyBy(-e).add(n).add(o).subtract(a);Yi?wt(this._container,h,e):Lt(this._container,h)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,i=this._map.getSize(),e=this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();this._bounds=new P(e,e.add(i.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),On=An.extend({getEvents:function(){var t=An.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){An.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");V(t,"mousemove",o(this._onMouseMove,32,this),this),V(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),V(t,"mouseout",this._handleMouseOut,this),this._ctx=t.getContext("2d")},_destroyContainer:function(){delete this._ctx,ut(this._container),G(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var i in this._layers)t=this._layers[i],t._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){this._drawnLayers={},An.prototype._update.call(this);var t=this._bounds,i=this._container,e=t.getSize(),n=oe?2:1;Lt(i,t.min),i.width=n*e.x,i.height=n*e.y,i.style.width=e.x+"px",i.style.height=e.y+"px",oe&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){An.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[n(t)]=t;var i=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=i),this._drawLast=i,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var i=t._order,e=i.next,n=i.prev;e?e.prev=n:this._drawLast=n,n?n.next=e:this._drawFirst=e,delete t._order,delete this._layers[L.stamp(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(t.options.dashArray){var i,e=t.options.dashArray.split(","),n=[];for(i=0;i<e.length;i++)n.push(Number(e[i]));t.options._dashArray=n}},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||f(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var i=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new P,this._redrawBounds.extend(t._pxBounds.min.subtract([i,i])),this._redrawBounds.extend(t._pxBounds.max.add([i,i]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var i=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,i.x,i.y)}else this._ctx.clearRect(0,0,this._container.width,this._container.height)},_draw:function(){var t,i=this._redrawBounds;if(this._ctx.save(),i){var e=i.getSize();this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,e.x,e.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!i||t._pxBounds&&t._pxBounds.intersects(i))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,i){if(this._drawing){var e,n,o,s,r=t._parts,a=r.length,h=this._ctx;if(a){for(this._drawnLayers[t._leaflet_id]=t,h.beginPath(),e=0;e<a;e++){for(n=0,o=r[e].length;n<o;n++)s=r[e][n],h[n?"lineTo":"moveTo"](s.x,s.y);i&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){if(this._drawing&&!t._empty()){var i=t._point,e=this._ctx,n=t._radius,o=(t._radiusY||n)/n;this._drawnLayers[t._leaflet_id]=t,1!==o&&(e.save(),e.scale(1,o)),e.beginPath(),e.arc(i.x,i.y/o,n,0,2*Math.PI,!1),1!==o&&e.restore(),this._fillStroke(e,t)}},_fillStroke:function(t,i){var e=i.options;e.fill&&(t.globalAlpha=e.fillOpacity,t.fillStyle=e.fillColor||e.color,t.fill(e.fillRule||"evenodd")),e.stroke&&0!==e.weight&&(t.setLineDash&&t.setLineDash(i.options&&i.options._dashArray||[]),t.globalAlpha=e.opacity,t.lineWidth=e.weight,t.strokeStyle=e.color,t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.stroke())},_onClick:function(t){for(var i,e,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)i=o.layer,i.options.interactive&&i._containsPoint(n)&&!this._map._draggableMoved(i)&&(e=i);e&&(et(t),this._fireEvent([e],t))},_onMouseMove:function(t){if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){var i=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,i)}},_handleMouseOut:function(t){var i=this._hoveredLayer;i&&(mt(this._container,"leaflet-interactive"),this._fireEvent([i],t,"mouseout"),this._hoveredLayer=null)},_handleMouseHover:function(t,i){for(var e,n,o=this._drawFirst;o;o=o.next)e=o.layer,e.options.interactive&&e._containsPoint(i)&&(n=e);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(pt(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._hoveredLayer&&this._fireEvent([this._hoveredLayer],t)},_fireEvent:function(t,i,e){this._map._fireDOMEvent(i,e||i.type,t)},_bringToFront:function(t){var i=t._order,e=i.next,n=i.prev;e&&(e.prev=n,n?n.next=e:e&&(this._drawFirst=e),i.prev=this._drawLast,this._drawLast.next=i,i.next=null,this._drawLast=i,this._requestRedraw(t))},_bringToBack:function(t){var i=t._order,e=i.next,n=i.prev;n&&(n.next=e,e?e.prev=n:n&&(this._drawLast=n),i.prev=null,i.next=this._drawFirst,this._drawFirst.prev=i,this._drawFirst=i,this._requestRedraw(t))}}),Rn=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),Dn={_initContainer:function(){this._container=ht("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(An.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var i=t._container=Rn("shape");pt(i,"leaflet-vml-shape "+(this.options.className||"")),i.coordsize="1 1",t._path=Rn("path"),i.appendChild(t._path),this._updateStyle(t),this._layers[n(t)]=t},_addPath:function(t){var i=t._container;this._container.appendChild(i),t.options.interactive&&t.addInteractiveTarget(i)},_removePath:function(t){var i=t._container;ut(i),t.removeInteractiveTarget(i),delete this._layers[n(t)]},_updateStyle:function(t){var i=t._stroke,e=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(i||(i=t._stroke=Rn("stroke")),o.appendChild(i),i.weight=n.weight+"px",i.color=n.color,i.opacity=n.opacity,n.dashArray?i.dashStyle=mi(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):i.dashStyle="",i.endcap=n.lineCap.replace("butt","flat"),i.joinstyle=n.lineJoin):i&&(o.removeChild(i),t._stroke=null),n.fill?(e||(e=t._fill=Rn("fill")),o.appendChild(e),e.color=n.fillColor||n.color,e.opacity=n.fillOpacity):e&&(o.removeChild(e),t._fill=null)},_updateCircle:function(t){var i=t._point.round(),e=Math.round(t._radius),n=Math.round(t._radiusY||e);this._setPath(t,t._empty()?"M0 0":"AL "+i.x+","+i.y+" "+e+","+n+" 0,23592600")},_setPath:function(t,i){t._path.v=i},_bringToFront:function(t){ct(t._container)},_bringToBack:function(t){_t(t._container)}},Nn=ae?Rn:S,jn=An.extend({getEvents:function(){var t=An.prototype.getEvents.call(this);return t.zoomstart=this._onZoomStart,t},_initContainer:function(){this._container=Nn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Nn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){ut(this._container),G(this._container),delete this._container,delete this._rootGroup},_onZoomStart:function(){this._update()},_update:function(){if(!this._map._animatingZoom||!this._bounds){An.prototype._update.call(this);var t=this._bounds,i=t.getSize(),e=this._container;this._svgSize&&this._svgSize.equals(i)||(this._svgSize=i,e.setAttribute("width",i.x),e.setAttribute("height",i.y)),Lt(e,t.min),e.setAttribute("viewBox",[t.min.x,t.min.y,i.x,i.y].join(" ")),this.fire("update")}},_initPath:function(t){var i=t._path=Nn("path");t.options.className&&pt(i,t.options.className),t.options.interactive&&pt(i,"leaflet-interactive"),this._updateStyle(t),this._layers[n(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){ut(t._path),t.removeInteractiveTarget(t._path),delete this._layers[n(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var i=t._path,e=t.options;i&&(e.stroke?(i.setAttribute("stroke",e.color),i.setAttribute("stroke-opacity",e.opacity),i.setAttribute("stroke-width",e.weight),i.setAttribute("stroke-linecap",e.lineCap),i.setAttribute("stroke-linejoin",e.lineJoin),e.dashArray?i.setAttribute("stroke-dasharray",e.dashArray):i.removeAttribute("stroke-dasharray"),e.dashOffset?i.setAttribute("stroke-dashoffset",e.dashOffset):i.removeAttribute("stroke-dashoffset")):i.setAttribute("stroke","none"),e.fill?(i.setAttribute("fill",e.fillColor||e.color),i.setAttribute("fill-opacity",e.fillOpacity),i.setAttribute("fill-rule",e.fillRule||"evenodd")):i.setAttribute("fill","none"))},_updatePoly:function(t,i){this._setPath(t,k(t._parts,i))},_updateCircle:function(t){var i=t._point,e=t._radius,n=t._radiusY||e,o="a"+e+","+n+" 0 1,0 ",s=t._empty()?"M0 0":"M"+(i.x-e)+","+i.y+o+2*e+",0 "+o+2*-e+",0 ";this._setPath(t,s)},_setPath:function(t,i){t._path.setAttribute("d",i)},_bringToFront:function(t){ct(t._path)},_bringToBack:function(t){_t(t._path)}});ae&&jn.include(Dn),ke.include({getRenderer:function(t){var i=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return i||(i=this._renderer=this.options.preferCanvas&&ai()||hi()),this.hasLayer(i)||this.addLayer(i),i},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var i=this._paneRenderers[t];return void 0===i&&(i=jn&&hi({pane:t})||On&&ai({pane:t}),this._paneRenderers[t]=i),i}});var Wn=yn.extend({initialize:function(t,i){yn.prototype.initialize.call(this,this._boundsToLatLngs(t),i)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=z(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});jn.create=Nn,jn.pointsToPath=k,xn.geometryToLayer=Kt,xn.coordsToLatLng=Yt,xn.coordsToLatLngs=Xt,xn.latLngToCoords=Jt,xn.latLngsToCoords=$t,xn.getFeature=Qt,xn.asFeature=ti,ke.mergeOptions({boxZoom:!0});var Hn=Ue.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){V(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){G(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){ut(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){return!(!t.shiftKey||1!==t.which&&1!==t.button)&&(this._clearDeferredResetState(),this._resetState(),Mi(),bt(),this._startPoint=this._map.mouseEventToContainerPoint(t),void V(document,{contextmenu:Q,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this))},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=ht("div","leaflet-zoom-box",this._container),pt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var i=new P(this._point,this._startPoint),e=i.getSize();Lt(this._box,i.min),this._box.style.width=e.x+"px",this._box.style.height=e.y+"px"},_finish:function(){this._moved&&(ut(this._box),mt(this._container,"leaflet-crosshair")),Ci(),Tt(),G(document,{contextmenu:Q,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(e(this._resetState,this),0);var i=new T(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(i).fire("boxzoomend",{boxZoomBounds:i})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}});ke.addInitHook("addHandler","boxZoom",Hn),ke.mergeOptions({doubleClickZoom:!0});var Fn=Ue.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var i=this._map,e=i.getZoom(),n=i.options.zoomDelta,o=t.originalEvent.shiftKey?e-n:e+n;"center"===i.options.doubleClickZoom?i.setZoom(o):i.setZoomAround(t.containerPoint,o)}});ke.addInitHook("addHandler","doubleClickZoom",Fn),ke.mergeOptions({dragging:!0,inertia:!Di,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Un=Ue.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Xe(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}pt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){mt(this._map._container,"leaflet-grab"),mt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var i=z(this._map.options.maxBounds);this._offsetLimit=b(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var i=this._lastTime=+new Date,e=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(e),this._times.push(i),i-this._times[0]>50&&(this._positions.shift(),this._times.shift())}this._map.fire("move",t).fire("drag",t)},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),i=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=i.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,i){return t-(t-i)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),i=this._offsetLimit;t.x<i.min.x&&(t.x=this._viscousLimit(t.x,i.min.x)),t.y<i.min.y&&(t.y=this._viscousLimit(t.y,i.min.y)),t.x>i.max.x&&(t.x=this._viscousLimit(t.x,i.max.x)),t.y>i.max.y&&(t.y=this._viscousLimit(t.y,i.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,i=Math.round(t/2),e=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-i+e)%t+i-e,s=(n+i+e)%t-i-e,r=Math.abs(o+e)<Math.abs(s+e)?o:s;
this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=r},_onDragEnd:function(t){var i=this._map,e=i.options,n=!e.inertia||this._times.length<2;if(i.fire("dragend",t),n)i.fire("moveend");else{var o=this._lastPos.subtract(this._positions[0]),s=(this._lastTime-this._times[0])/1e3,r=e.easeLinearity,a=o.multiplyBy(r/s),h=a.distanceTo([0,0]),u=Math.min(e.inertiaMaxSpeed,h),l=a.multiplyBy(u/h),c=u/(e.inertiaDeceleration*r),_=l.multiplyBy(-c/2).round();_.x||_.y?(_=i._limitOffset(_,i.options.maxBounds),f(function(){i.panBy(_,{duration:c,easeLinearity:r,noMoveStart:!0,animate:!0})})):i.fire("moveend")}}});ke.addInitHook("addHandler","dragging",Un),ke.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Vn=Ue.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),V(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),G(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,i=document.documentElement,e=t.scrollTop||i.scrollTop,n=t.scrollLeft||i.scrollLeft;this._map._container.focus(),window.scrollTo(n,e)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var i,e,n=this._panKeys={},o=this.keyCodes;for(i=0,e=o.left.length;i<e;i++)n[o.left[i]]=[-1*t,0];for(i=0,e=o.right.length;i<e;i++)n[o.right[i]]=[t,0];for(i=0,e=o.down.length;i<e;i++)n[o.down[i]]=[0,t];for(i=0,e=o.up.length;i<e;i++)n[o.up[i]]=[0,-1*t]},_setZoomDelta:function(t){var i,e,n=this._zoomKeys={},o=this.keyCodes;for(i=0,e=o.zoomIn.length;i<e;i++)n[o.zoomIn[i]]=t;for(i=0,e=o.zoomOut.length;i<e;i++)n[o.zoomOut[i]]=-t},_addHooks:function(){V(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){G(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var i,e=t.keyCode,n=this._map;if(e in this._panKeys){if(n._panAnim&&n._panAnim._inProgress)return;i=this._panKeys[e],t.shiftKey&&(i=w(i).multiplyBy(3)),n.panBy(i),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds)}else if(e in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else{if(27!==e||!n._popup)return;n.closePopup()}Q(t)}}});ke.addInitHook("addHandler","keyboard",Vn),ke.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Gn=Ue.extend({addHooks:function(){V(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){G(this._map._container,"mousewheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var i=it(t),n=this._map.options.wheelDebounceTime;this._delta+=i,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var o=Math.max(n-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(e(this._performZoom,this),o),Q(t)},_performZoom:function(){var t=this._map,i=t.getZoom(),e=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(4*this._map.options.wheelPxPerZoomLevel),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,s=e?Math.ceil(o/e)*e:o,r=t._limitZoom(i+(this._delta>0?s:-s))-i;this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(i+r):t.setZoomAround(this._lastMousePos,i+r))}});ke.addInitHook("addHandler","scrollWheelZoom",Gn),ke.mergeOptions({tap:!0,tapTolerance:15});var qn=Ue.extend({addHooks:function(){V(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){G(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if($(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],n=i.target;this._startPos=this._newPos=new x(i.clientX,i.clientY),n.tagName&&"a"===n.tagName.toLowerCase()&&pt(n,"leaflet-active"),this._holdTimeout=setTimeout(e(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),this._simulateEvent("mousedown",i),V(document,{touchmove:this._onMove,touchend:this._onUp},this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),G(document,{touchmove:this._onMove,touchend:this._onUp},this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],e=i.target;e&&e.tagName&&"a"===e.tagName.toLowerCase()&&mt(e,"leaflet-active"),this._simulateEvent("mouseup",i),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var i=t.touches[0];this._newPos=new x(i.clientX,i.clientY),this._simulateEvent("mousemove",i)},_simulateEvent:function(t,i){var e=document.createEvent("MouseEvents");e._simulated=!0,i.target._simulatedClick=!0,e.initMouseEvent(t,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),i.target.dispatchEvent(e)}});ie&&!te&&ke.addInitHook("addHandler","tap",qn),ke.mergeOptions({touchZoom:ie&&!Di,bounceAtZoomLimits:!0});var Kn=Ue.extend({addHooks:function(){pt(this._map._container,"leaflet-touch-zoom"),V(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){mt(this._map._container,"leaflet-touch-zoom"),G(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var e=i.mouseEventToContainerPoint(t.touches[0]),n=i.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=i.getSize()._divideBy(2),this._startLatLng=i.containerPointToLatLng(this._centerPoint),"center"!==i.options.touchZoom&&(this._pinchStartLatLng=i.containerPointToLatLng(e.add(n)._divideBy(2))),this._startDist=e.distanceTo(n),this._startZoom=i.getZoom(),this._moved=!1,this._zooming=!0,i._stop(),V(document,"touchmove",this._onTouchMove,this),V(document,"touchend",this._onTouchEnd,this),$(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var i=this._map,n=i.mouseEventToContainerPoint(t.touches[0]),o=i.mouseEventToContainerPoint(t.touches[1]),s=n.distanceTo(o)/this._startDist;if(this._zoom=i.getScaleZoom(s,this._startZoom),!i.options.bounceAtZoomLimits&&(this._zoom<i.getMinZoom()&&s<1||this._zoom>i.getMaxZoom()&&s>1)&&(this._zoom=i._limitZoom(this._zoom)),"center"===i.options.touchZoom){if(this._center=this._startLatLng,1===s)return}else{var r=n._add(o)._divideBy(2)._subtract(this._centerPoint);if(1===s&&0===r.x&&0===r.y)return;this._center=i.unproject(i.project(this._pinchStartLatLng,this._zoom).subtract(r),this._zoom)}this._moved||(i._moveStart(!0),this._moved=!0),g(this._animRequest);var a=e(i._move,i,this._center,this._zoom,{pinch:!0,round:!1});this._animRequest=f(a,this,!0),$(t)}},_onTouchEnd:function(){return this._moved&&this._zooming?(this._zooming=!1,g(this._animRequest),G(document,"touchmove",this._onTouchMove),G(document,"touchend",this._onTouchEnd),void(this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom)))):void(this._zooming=!1)}});ke.addInitHook("addHandler","touchZoom",Kn),ke.BoxZoom=Hn,ke.DoubleClickZoom=Fn,ke.Drag=Un,ke.Keyboard=Vn,ke.ScrollWheelZoom=Gn,ke.Tap=qn,ke.TouchZoom=Kn;var Yn=window.L;window.L=t,t.version=ci,t.noConflict=li,t.Control=Be,t.control=Ie,t.Browser=he,t.Evented=Li,t.Mixin=Ve,t.Util=xi,t.Class=v,t.Handler=Ue,t.extend=i,t.bind=e,t.stamp=n,t.setOptions=l,t.DomEvent=Pe,t.DomUtil=Ee,t.PosAnimation=Se,t.Draggable=Xe,t.LineUtil=Je,t.PolyUtil=$e,t.Point=x,t.point=w,t.Bounds=P,t.bounds=b,t.Transformation=Z,t.transformation=E,t.Projection=en,t.LatLng=M,t.latLng=C,t.LatLngBounds=T,t.latLngBounds=z,t.CRS=Pi,t.GeoJSON=xn,t.geoJSON=ii,t.geoJson=Ln,t.Layer=rn,t.LayerGroup=an,t.layerGroup=hn,t.FeatureGroup=un,t.featureGroup=ln,t.ImageOverlay=Pn,t.imageOverlay=bn,t.VideoOverlay=Tn,t.videoOverlay=ei,t.DivOverlay=zn,t.Popup=Mn,t.popup=Cn,t.Tooltip=Zn,t.tooltip=En,t.Icon=cn,t.icon=Ht,t.DivIcon=Sn,t.divIcon=ni,t.Marker=pn,t.marker=Ft,t.TileLayer=Bn,t.tileLayer=si,t.GridLayer=kn,t.gridLayer=oi,t.SVG=jn,t.svg=hi,t.Renderer=An,t.Canvas=On,t.canvas=ai,t.Path=mn,t.CircleMarker=fn,t.circleMarker=Ut,t.Circle=gn,t.circle=Vt,t.Polyline=vn,t.polyline=Gt,t.Polygon=yn,t.polygon=qt,t.Rectangle=Wn,t.rectangle=ui,t.Map=ke,t.map=Ct});
//# sourceMappingURL=leaflet.js.map
/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.mapboxgl = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):t.glMatrix=r()}(this,function(){"use strict";function t(){var t=new Float32Array(3);return t[0]=0,t[1]=0,t[2]=0,t}function r(t,r,n){var e=r[0],a=r[1],o=r[2];return t[0]=e*n[0]+a*n[3]+o*n[6],t[1]=e*n[1]+a*n[4]+o*n[7],t[2]=e*n[2]+a*n[5]+o*n[8],t}function n(){var t=new Float32Array(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function e(t,r,n){var e=r[0],a=r[1],o=r[2],u=r[3];return t[0]=n[0]*e+n[4]*a+n[8]*o+n[12]*u,t[1]=n[1]*e+n[5]*a+n[9]*o+n[13]*u,t[2]=n[2]*e+n[6]*a+n[10]*o+n[14]*u,t[3]=n[3]*e+n[7]*a+n[11]*o+n[15]*u,t}function a(){var t=new Float32Array(4);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function o(t,r,n){var e=r[0],a=r[1],o=r[2],u=r[3],i=Math.sin(n),c=Math.cos(n);return t[0]=e*c+o*i,t[1]=a*c+u*i,t[2]=e*-i+o*c,t[3]=a*-i+u*c,t}function u(t,r,n){var e=r[0],a=r[1],o=r[2],u=r[3],i=n[0],c=n[1];return t[0]=e*i,t[1]=a*i,t[2]=o*c,t[3]=u*c,t}function i(){var t=new Float32Array(9);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function c(t,r){var n=Math.sin(r),e=Math.cos(r);return t[0]=e,t[1]=n,t[2]=0,t[3]=-n,t[4]=e,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function f(){var t=new Float32Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function v(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function s(t,r){var n=r[0],e=r[1],a=r[2],o=r[3],u=r[4],i=r[5],c=r[6],f=r[7],v=r[8],s=r[9],l=r[10],M=r[11],h=r[12],m=r[13],y=r[14],d=r[15],p=n*i-e*u,w=n*c-a*u,A=n*f-o*u,F=e*c-a*i,x=e*f-o*i,b=a*f-o*c,g=v*m-s*h,j=v*y-l*h,R=v*d-M*h,X=s*y-l*m,Z=s*d-M*m,k=l*d-M*y,q=p*k-w*Z+A*X+F*R-x*j+b*g;return q?(q=1/q,t[0]=(i*k-c*Z+f*X)*q,t[1]=(a*Z-e*k-o*X)*q,t[2]=(m*b-y*x+d*F)*q,t[3]=(l*x-s*b-M*F)*q,t[4]=(c*R-u*k-f*j)*q,t[5]=(n*k-a*R+o*j)*q,t[6]=(y*A-h*b-d*w)*q,t[7]=(v*b-l*A+M*w)*q,t[8]=(u*Z-i*R+f*g)*q,t[9]=(e*R-n*Z-o*g)*q,t[10]=(h*x-m*A+d*p)*q,t[11]=(s*A-v*x-M*p)*q,t[12]=(i*j-u*X-c*g)*q,t[13]=(n*X-e*j+a*g)*q,t[14]=(m*w-h*F-y*p)*q,t[15]=(v*F-s*w+l*p)*q,t):null}function l(t,r,n){var e=r[0],a=r[1],o=r[2],u=r[3],i=r[4],c=r[5],f=r[6],v=r[7],s=r[8],l=r[9],M=r[10],h=r[11],m=r[12],y=r[13],d=r[14],p=r[15],w=n[0],A=n[1],F=n[2],x=n[3];return t[0]=w*e+A*i+F*s+x*m,t[1]=w*a+A*c+F*l+x*y,t[2]=w*o+A*f+F*M+x*d,t[3]=w*u+A*v+F*h+x*p,w=n[4],A=n[5],F=n[6],x=n[7],t[4]=w*e+A*i+F*s+x*m,t[5]=w*a+A*c+F*l+x*y,t[6]=w*o+A*f+F*M+x*d,t[7]=w*u+A*v+F*h+x*p,w=n[8],A=n[9],F=n[10],x=n[11],t[8]=w*e+A*i+F*s+x*m,t[9]=w*a+A*c+F*l+x*y,t[10]=w*o+A*f+F*M+x*d,t[11]=w*u+A*v+F*h+x*p,w=n[12],A=n[13],F=n[14],x=n[15],t[12]=w*e+A*i+F*s+x*m,t[13]=w*a+A*c+F*l+x*y,t[14]=w*o+A*f+F*M+x*d,t[15]=w*u+A*v+F*h+x*p,t}function M(t,r,n){var e,a,o,u,i,c,f,v,s,l,M,h,m=n[0],y=n[1],d=n[2];return r===t?(t[12]=r[0]*m+r[4]*y+r[8]*d+r[12],t[13]=r[1]*m+r[5]*y+r[9]*d+r[13],t[14]=r[2]*m+r[6]*y+r[10]*d+r[14],t[15]=r[3]*m+r[7]*y+r[11]*d+r[15]):(e=r[0],a=r[1],o=r[2],u=r[3],i=r[4],c=r[5],f=r[6],v=r[7],s=r[8],l=r[9],M=r[10],h=r[11],t[0]=e,t[1]=a,t[2]=o,t[3]=u,t[4]=i,t[5]=c,t[6]=f,t[7]=v,t[8]=s,t[9]=l,t[10]=M,t[11]=h,t[12]=e*m+i*y+s*d+r[12],t[13]=a*m+c*y+l*d+r[13],t[14]=o*m+f*y+M*d+r[14],t[15]=u*m+v*y+h*d+r[15]),t}function h(t,r,n){var e=n[0],a=n[1],o=n[2];return t[0]=r[0]*e,t[1]=r[1]*e,t[2]=r[2]*e,t[3]=r[3]*e,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=r[7]*a,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=r[11]*o,t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],t}function m(t,r,n){var e=Math.sin(n),a=Math.cos(n),o=r[4],u=r[5],i=r[6],c=r[7],f=r[8],v=r[9],s=r[10],l=r[11];return r!==t&&(t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t[4]=o*a+f*e,t[5]=u*a+v*e,t[6]=i*a+s*e,t[7]=c*a+l*e,t[8]=f*a-o*e,t[9]=v*a-u*e,t[10]=s*a-i*e,t[11]=l*a-c*e,t}function y(t,r,n){var e=Math.sin(n),a=Math.cos(n),o=r[0],u=r[1],i=r[2],c=r[3],f=r[4],v=r[5],s=r[6],l=r[7];return r!==t&&(t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t[0]=o*a+f*e,t[1]=u*a+v*e,t[2]=i*a+s*e,t[3]=c*a+l*e,t[4]=f*a-o*e,t[5]=v*a-u*e,t[6]=s*a-i*e,t[7]=l*a-c*e,t}function d(t,r,n,e,a){var o=1/Math.tan(r/2),u=1/(e-a);return t[0]=o/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(a+e)*u,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*a*e*u,t[15]=0,t}function p(t,r,n,e,a,o,u){var i=1/(r-n),c=1/(e-a),f=1/(o-u);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(r+n)*i,t[13]=(a+e)*c,t[14]=(u+o)*f,t[15]=1,t}var w=(t(),n(),{vec3:{transformMat3:r},vec4:{transformMat4:e},mat2:{create:a,rotate:o,scale:u},mat3:{create:i,fromRotation:c},mat4:{create:f,identity:v,translate:M,scale:h,multiply:l,perspective:d,rotateX:m,rotateZ:y,invert:s,ortho:p}});return w});
},{}],2:[function(_dereq_,module,exports){
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ShelfPack=e()}(this,function(){function t(t,e,i){i=i||{},this.w=t||64,this.h=e||64,this.autoResize=!!i.autoResize,this.shelves=[],this.freebins=[],this.stats={},this.bins={},this.maxId=0}function e(t,e,i){this.x=0,this.y=t,this.w=this.free=e,this.h=i}function i(t,e,i,s,h,n,r){this.id=t,this.x=e,this.y=i,this.w=s,this.h=h,this.maxw=n||s,this.maxh=r||h,this.refcount=0}return t.prototype.pack=function(t,e){t=[].concat(t),e=e||{};for(var i,s,h,n,r=[],f=0;f<t.length;f++)if(i=t[f].w||t[f].width,s=t[f].h||t[f].height,h=t[f].id,i&&s){if(n=this.packOne(i,s,h),!n)continue;e.inPlace&&(t[f].x=n.x,t[f].y=n.y,t[f].id=n.id),r.push(n)}if(this.shelves.length>0){for(var o=0,a=0,u=0;u<this.shelves.length;u++){var l=this.shelves[u];a+=l.h,o=Math.max(l.w-l.free,o)}this.resize(o,a)}return r},t.prototype.packOne=function(t,i,s){var h,n,r,f,o={freebin:-1,shelf:-1,waste:1/0},a=0;if("string"==typeof s||"number"==typeof s){if(h=this.getBin(s))return this.ref(h),h;"number"==typeof s&&(this.maxId=Math.max(s,this.maxId))}else s=++this.maxId;for(f=0;f<this.freebins.length;f++){if(h=this.freebins[f],i===h.maxh&&t===h.maxw)return this.allocFreebin(f,t,i,s);i>h.maxh||t>h.maxw||i<=h.maxh&&t<=h.maxw&&(r=h.maxw*h.maxh-t*i,r<o.waste&&(o.waste=r,o.freebin=f))}for(f=0;f<this.shelves.length;f++)if(n=this.shelves[f],a+=n.h,!(t>n.free)){if(i===n.h)return this.allocShelf(f,t,i,s);i>n.h||i<n.h&&(r=(n.h-i)*t,r<o.waste&&(o.freebin=-1,o.waste=r,o.shelf=f))}if(o.freebin!==-1)return this.allocFreebin(o.freebin,t,i,s);if(o.shelf!==-1)return this.allocShelf(o.shelf,t,i,s);if(i<=this.h-a&&t<=this.w)return n=new e(a,this.w,i),this.allocShelf(this.shelves.push(n)-1,t,i,s);if(this.autoResize){var u,l,c,p;return u=l=this.h,c=p=this.w,(c<=u||t>c)&&(p=2*Math.max(t,c)),(u<c||i>u)&&(l=2*Math.max(i,u)),this.resize(p,l),this.packOne(t,i,s)}return null},t.prototype.allocFreebin=function(t,e,i,s){var h=this.freebins.splice(t,1)[0];return h.id=s,h.w=e,h.h=i,h.refcount=0,this.bins[s]=h,this.ref(h),h},t.prototype.allocShelf=function(t,e,i,s){var h=this.shelves[t],n=h.alloc(e,i,s);return this.bins[s]=n,this.ref(n),n},t.prototype.getBin=function(t){return this.bins[t]},t.prototype.ref=function(t){if(1===++t.refcount){var e=t.h;this.stats[e]=(0|this.stats[e])+1}return t.refcount},t.prototype.unref=function(t){return 0===t.refcount?0:(0===--t.refcount&&(this.stats[t.h]--,delete this.bins[t.id],this.freebins.push(t)),t.refcount)},t.prototype.clear=function(){this.shelves=[],this.freebins=[],this.stats={},this.bins={},this.maxId=0},t.prototype.resize=function(t,e){this.w=t,this.h=e;for(var i=0;i<this.shelves.length;i++)this.shelves[i].resize(t);return!0},e.prototype.alloc=function(t,e,s){if(t>this.free||e>this.h)return null;var h=this.x;return this.x+=t,this.free-=t,new i(s,h,this.y,t,e,t,this.h)},e.prototype.resize=function(t){return this.free+=t-this.w,this.w=t,!0},t});
},{}],3:[function(_dereq_,module,exports){
function UnitBezier(t,i,e,r){this.cx=3*t,this.bx=3*(e-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*i,this.by=3*(r-i)-this.cy,this.ay=1-this.cy-this.by,this.p1x=t,this.p1y=r,this.p2x=e,this.p2y=r}module.exports=UnitBezier,UnitBezier.prototype.sampleCurveX=function(t){return((this.ax*t+this.bx)*t+this.cx)*t},UnitBezier.prototype.sampleCurveY=function(t){return((this.ay*t+this.by)*t+this.cy)*t},UnitBezier.prototype.sampleCurveDerivativeX=function(t){return(3*this.ax*t+2*this.bx)*t+this.cx},UnitBezier.prototype.solveCurveX=function(t,i){"undefined"==typeof i&&(i=1e-6);var e,r,s,h,n;for(s=t,n=0;n<8;n++){if(h=this.sampleCurveX(s)-t,Math.abs(h)<i)return s;var u=this.sampleCurveDerivativeX(s);if(Math.abs(u)<1e-6)break;s-=h/u}if(e=0,r=1,s=t,s<e)return e;if(s>r)return r;for(;e<r;){if(h=this.sampleCurveX(s),Math.abs(h-t)<i)return s;t>h?e=s:r=s,s=.5*(r-e)+e}return s},UnitBezier.prototype.solve=function(t,i){return this.sampleCurveY(this.solveCurveX(t,i))};
},{}],4:[function(_dereq_,module,exports){
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.WhooTS=e.WhooTS||{})}(this,function(e){function t(e,t,r,n,i,s){s=s||{};var f=e+"?"+["bbox="+o(r,n,i),"format="+(s.format||"image/png"),"service="+(s.service||"WMS"),"version="+(s.version||"1.1.1"),"request="+(s.request||"GetMap"),"srs="+(s.srs||"EPSG:3857"),"width="+(s.width||256),"height="+(s.height||256),"layers="+t].join("&");return f}function o(e,t,o){t=Math.pow(2,o)-t-1;var n=r(256*e,256*t,o),i=r(256*(e+1),256*(t+1),o);return n[0]+","+n[1]+","+i[0]+","+i[1]}function r(e,t,o){var r=2*Math.PI*6378137/256/Math.pow(2,o),n=e*r-2*Math.PI*6378137/2,i=t*r-2*Math.PI*6378137/2;return[n,i]}e.getURL=t,e.getTileBBox=o,e.getMercCoords=r,Object.defineProperty(e,"__esModule",{value:!0})});
},{}],5:[function(_dereq_,module,exports){
"use strict";function earcut(e,n,r){r=r||2;var t=n&&n.length,i=t?n[0]*r:e.length,x=linkedList(e,0,i,r,!0),a=[];if(!x)return a;var o,l,u,s,v,f,y;if(t&&(x=eliminateHoles(e,n,x,r)),e.length>80*r){o=u=e[0],l=s=e[1];for(var d=r;d<i;d+=r)v=e[d],f=e[d+1],v<o&&(o=v),f<l&&(l=f),v>u&&(u=v),f>s&&(s=f);y=Math.max(u-o,s-l)}return earcutLinked(x,a,r,o,l,y),a}function linkedList(e,n,r,t,i){var x,a;if(i===signedArea(e,n,r,t)>0)for(x=n;x<r;x+=t)a=insertNode(x,e[x],e[x+1],a);else for(x=r-t;x>=n;x-=t)a=insertNode(x,e[x],e[x+1],a);return a&&equals(a,a.next)&&(removeNode(a),a=a.next),a}function filterPoints(e,n){if(!e)return e;n||(n=e);var r,t=e;do if(r=!1,t.steiner||!equals(t,t.next)&&0!==area(t.prev,t,t.next))t=t.next;else{if(removeNode(t),t=n=t.prev,t===t.next)return null;r=!0}while(r||t!==n);return n}function earcutLinked(e,n,r,t,i,x,a){if(e){!a&&x&&indexCurve(e,t,i,x);for(var o,l,u=e;e.prev!==e.next;)if(o=e.prev,l=e.next,x?isEarHashed(e,t,i,x):isEar(e))n.push(o.i/r),n.push(e.i/r),n.push(l.i/r),removeNode(e),e=l.next,u=l.next;else if(e=l,e===u){a?1===a?(e=cureLocalIntersections(e,n,r),earcutLinked(e,n,r,t,i,x,2)):2===a&&splitEarcut(e,n,r,t,i,x):earcutLinked(filterPoints(e),n,r,t,i,x,1);break}}}function isEar(e){var n=e.prev,r=e,t=e.next;if(area(n,r,t)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(pointInTriangle(n.x,n.y,r.x,r.y,t.x,t.y,i.x,i.y)&&area(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function isEarHashed(e,n,r,t){var i=e.prev,x=e,a=e.next;if(area(i,x,a)>=0)return!1;for(var o=i.x<x.x?i.x<a.x?i.x:a.x:x.x<a.x?x.x:a.x,l=i.y<x.y?i.y<a.y?i.y:a.y:x.y<a.y?x.y:a.y,u=i.x>x.x?i.x>a.x?i.x:a.x:x.x>a.x?x.x:a.x,s=i.y>x.y?i.y>a.y?i.y:a.y:x.y>a.y?x.y:a.y,v=zOrder(o,l,n,r,t),f=zOrder(u,s,n,r,t),y=e.nextZ;y&&y.z<=f;){if(y!==e.prev&&y!==e.next&&pointInTriangle(i.x,i.y,x.x,x.y,a.x,a.y,y.x,y.y)&&area(y.prev,y,y.next)>=0)return!1;y=y.nextZ}for(y=e.prevZ;y&&y.z>=v;){if(y!==e.prev&&y!==e.next&&pointInTriangle(i.x,i.y,x.x,x.y,a.x,a.y,y.x,y.y)&&area(y.prev,y,y.next)>=0)return!1;y=y.prevZ}return!0}function cureLocalIntersections(e,n,r){var t=e;do{var i=t.prev,x=t.next.next;!equals(i,x)&&intersects(i,t,t.next,x)&&locallyInside(i,x)&&locallyInside(x,i)&&(n.push(i.i/r),n.push(t.i/r),n.push(x.i/r),removeNode(t),removeNode(t.next),t=e=x),t=t.next}while(t!==e);return t}function splitEarcut(e,n,r,t,i,x){var a=e;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&isValidDiagonal(a,o)){var l=splitPolygon(a,o);return a=filterPoints(a,a.next),l=filterPoints(l,l.next),earcutLinked(a,n,r,t,i,x),void earcutLinked(l,n,r,t,i,x)}o=o.next}a=a.next}while(a!==e)}function eliminateHoles(e,n,r,t){var i,x,a,o,l,u=[];for(i=0,x=n.length;i<x;i++)a=n[i]*t,o=i<x-1?n[i+1]*t:e.length,l=linkedList(e,a,o,t,!1),l===l.next&&(l.steiner=!0),u.push(getLeftmost(l));for(u.sort(compareX),i=0;i<u.length;i++)eliminateHole(u[i],r),r=filterPoints(r,r.next);return r}function compareX(e,n){return e.x-n.x}function eliminateHole(e,n){if(n=findHoleBridge(e,n)){var r=splitPolygon(n,e);filterPoints(r,r.next)}}function findHoleBridge(e,n){var r,t=n,i=e.x,x=e.y,a=-(1/0);do{if(x<=t.y&&x>=t.next.y){var o=t.x+(x-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=i&&o>a){if(a=o,o===i){if(x===t.y)return t;if(x===t.next.y)return t.next}r=t.x<t.next.x?t:t.next}}t=t.next}while(t!==n);if(!r)return null;if(i===a)return r.prev;var l,u=r,s=r.x,v=r.y,f=1/0;for(t=r.next;t!==u;)i>=t.x&&t.x>=s&&pointInTriangle(x<v?i:a,x,s,v,x<v?a:i,x,t.x,t.y)&&(l=Math.abs(x-t.y)/(i-t.x),(l<f||l===f&&t.x>r.x)&&locallyInside(t,e)&&(r=t,f=l)),t=t.next;return r}function indexCurve(e,n,r,t){var i=e;do null===i.z&&(i.z=zOrder(i.x,i.y,n,r,t)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,sortLinked(i)}function sortLinked(e){var n,r,t,i,x,a,o,l,u=1;do{for(r=e,e=null,x=null,a=0;r;){for(a++,t=r,o=0,n=0;n<u&&(o++,t=t.nextZ,t);n++);for(l=u;o>0||l>0&&t;)0===o?(i=t,t=t.nextZ,l--):0!==l&&t?r.z<=t.z?(i=r,r=r.nextZ,o--):(i=t,t=t.nextZ,l--):(i=r,r=r.nextZ,o--),x?x.nextZ=i:e=i,i.prevZ=x,x=i;r=t}x.nextZ=null,u*=2}while(a>1);return e}function zOrder(e,n,r,t,i){return e=32767*(e-r)/i,n=32767*(n-t)/i,e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),n=16711935&(n|n<<8),n=252645135&(n|n<<4),n=858993459&(n|n<<2),n=1431655765&(n|n<<1),e|n<<1}function getLeftmost(e){var n=e,r=e;do n.x<r.x&&(r=n),n=n.next;while(n!==e);return r}function pointInTriangle(e,n,r,t,i,x,a,o){return(i-a)*(n-o)-(e-a)*(x-o)>=0&&(e-a)*(t-o)-(r-a)*(n-o)>=0&&(r-a)*(x-o)-(i-a)*(t-o)>=0}function isValidDiagonal(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!intersectsPolygon(e,n)&&locallyInside(e,n)&&locallyInside(n,e)&&middleInside(e,n)}function area(e,n,r){return(n.y-e.y)*(r.x-n.x)-(n.x-e.x)*(r.y-n.y)}function equals(e,n){return e.x===n.x&&e.y===n.y}function intersects(e,n,r,t){return!!(equals(e,n)&&equals(r,t)||equals(e,t)&&equals(r,n))||area(e,n,r)>0!=area(e,n,t)>0&&area(r,t,e)>0!=area(r,t,n)>0}function intersectsPolygon(e,n){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==n.i&&r.next.i!==n.i&&intersects(r,r.next,e,n))return!0;r=r.next}while(r!==e);return!1}function locallyInside(e,n){return area(e.prev,e,e.next)<0?area(e,n,e.next)>=0&&area(e,e.prev,n)>=0:area(e,n,e.prev)<0||area(e,e.next,n)<0}function middleInside(e,n){var r=e,t=!1,i=(e.x+n.x)/2,x=(e.y+n.y)/2;do r.y>x!=r.next.y>x&&i<(r.next.x-r.x)*(x-r.y)/(r.next.y-r.y)+r.x&&(t=!t),r=r.next;while(r!==e);return t}function splitPolygon(e,n){var r=new Node(e.i,e.x,e.y),t=new Node(n.i,n.x,n.y),i=e.next,x=n.prev;return e.next=n,n.prev=e,r.next=i,i.prev=r,t.next=r,r.prev=t,x.next=t,t.prev=x,t}function insertNode(e,n,r,t){var i=new Node(e,n,r);return t?(i.next=t.next,i.prev=t,t.next.prev=i,t.next=i):(i.prev=i,i.next=i),i}function removeNode(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Node(e,n,r){this.i=e,this.x=n,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function signedArea(e,n,r,t){for(var i=0,x=n,a=r-t;x<r;x+=t)i+=(e[a]-e[x])*(e[x+1]+e[a+1]),a=x;return i}module.exports=earcut,earcut.deviation=function(e,n,r,t){var i=n&&n.length,x=i?n[0]*r:e.length,a=Math.abs(signedArea(e,0,x,r));if(i)for(var o=0,l=n.length;o<l;o++){var u=n[o]*r,s=o<l-1?n[o+1]*r:e.length;a-=Math.abs(signedArea(e,u,s,r))}var v=0;for(o=0;o<t.length;o+=3){var f=t[o]*r,y=t[o+1]*r,d=t[o+2]*r;v+=Math.abs((e[f]-e[d])*(e[y+1]-e[f+1])-(e[f]-e[y])*(e[d+1]-e[f+1]))}return 0===a&&0===v?0:Math.abs((v-a)/a)},earcut.flatten=function(e){for(var n=e[0][0].length,r={vertices:[],holes:[],dimensions:n},t=0,i=0;i<e.length;i++){for(var x=0;x<e[i].length;x++)for(var a=0;a<n;a++)r.vertices.push(e[i][x][a]);i>0&&(t+=e[i-1].length,r.holes.push(t))}return r};
},{}],6:[function(_dereq_,module,exports){
function geometry(r){if("Polygon"===r.type)return polygonArea(r.coordinates);if("MultiPolygon"===r.type){for(var e=0,n=0;n<r.coordinates.length;n++)e+=polygonArea(r.coordinates[n]);return e}return null}function polygonArea(r){var e=0;if(r&&r.length>0){e+=Math.abs(ringArea(r[0]));for(var n=1;n<r.length;n++)e-=Math.abs(ringArea(r[n]))}return e}function ringArea(r){var e=0;if(r.length>2){for(var n,t,o=0;o<r.length-1;o++)n=r[o],t=r[o+1],e+=rad(t[0]-n[0])*(2+Math.sin(rad(n[1]))+Math.sin(rad(t[1])));e=e*wgs84.RADIUS*wgs84.RADIUS/2}return e}function rad(r){return r*Math.PI/180}var wgs84=_dereq_("wgs84");module.exports.geometry=geometry,module.exports.ring=ringArea;
},{"wgs84":42}],7:[function(_dereq_,module,exports){
function rewind(r,e){switch(r&&r.type||null){case"FeatureCollection":return r.features=r.features.map(curryOuter(rewind,e)),r;case"Feature":return r.geometry=rewind(r.geometry,e),r;case"Polygon":case"MultiPolygon":return correct(r,e);default:return r}}function curryOuter(r,e){return function(n){return r(n,e)}}function correct(r,e){return"Polygon"===r.type?r.coordinates=correctRings(r.coordinates,e):"MultiPolygon"===r.type&&(r.coordinates=r.coordinates.map(curryOuter(correctRings,e))),r}function correctRings(r,e){e=!!e,r[0]=wind(r[0],!e);for(var n=1;n<r.length;n++)r[n]=wind(r[n],e);return r}function wind(r,e){return cw(r)===e?r:r.reverse()}function cw(r){return geojsonArea.ring(r)>=0}var geojsonArea=_dereq_("geojson-area");module.exports=rewind;
},{"geojson-area":6}],8:[function(_dereq_,module,exports){
"use strict";function clip(e,r,t,n,u,i,l,s){if(t/=r,n/=r,l>=t&&s<=n)return e;if(l>n||s<t)return null;for(var h=[],p=0;p<e.length;p++){var a,c,o=e[p],f=o.geometry,g=o.type;if(a=o.min[u],c=o.max[u],a>=t&&c<=n)h.push(o);else if(!(a>n||c<t)){var v=1===g?clipPoints(f,t,n,u):clipGeometry(f,t,n,u,i,3===g);v.length&&h.push(createFeature(o.tags,g,v,o.id))}}return h.length?h:null}function clipPoints(e,r,t,n){for(var u=[],i=0;i<e.length;i++){var l=e[i],s=l[n];s>=r&&s<=t&&u.push(l)}return u}function clipGeometry(e,r,t,n,u,i){for(var l=[],s=0;s<e.length;s++){var h,p,a,c=0,o=0,f=null,g=e[s],v=g.area,m=g.dist,w=g.outer,S=g.length,d=[];for(p=0;p<S-1;p++)h=f||g[p],f=g[p+1],c=o||h[n],o=f[n],c<r?o>t?(d.push(u(h,f,r),u(h,f,t)),i||(d=newSlice(l,d,v,m,w))):o>=r&&d.push(u(h,f,r)):c>t?o<r?(d.push(u(h,f,t),u(h,f,r)),i||(d=newSlice(l,d,v,m,w))):o<=t&&d.push(u(h,f,t)):(d.push(h),o<r?(d.push(u(h,f,r)),i||(d=newSlice(l,d,v,m,w))):o>t&&(d.push(u(h,f,t)),i||(d=newSlice(l,d,v,m,w))));h=g[S-1],c=h[n],c>=r&&c<=t&&d.push(h),a=d[d.length-1],i&&a&&(d[0][0]!==a[0]||d[0][1]!==a[1])&&d.push(d[0]),newSlice(l,d,v,m,w)}return l}function newSlice(e,r,t,n,u){return r.length&&(r.area=t,r.dist=n,void 0!==u&&(r.outer=u),e.push(r)),[]}module.exports=clip;var createFeature=_dereq_("./feature");
},{"./feature":10}],9:[function(_dereq_,module,exports){
"use strict";function convert(e,t){var r=[];if("FeatureCollection"===e.type)for(var o=0;o<e.features.length;o++)convertFeature(r,e.features[o],t);else"Feature"===e.type?convertFeature(r,e,t):convertFeature(r,{geometry:e},t);return r}function convertFeature(e,t,r){if(null!==t.geometry){var o,a,i,n,u=t.geometry,c=u.type,l=u.coordinates,s=t.properties,p=t.id;if("Point"===c)e.push(createFeature(s,1,[projectPoint(l)],p));else if("MultiPoint"===c)e.push(createFeature(s,1,project(l),p));else if("LineString"===c)e.push(createFeature(s,2,[project(l,r)],p));else if("MultiLineString"===c||"Polygon"===c){for(i=[],o=0;o<l.length;o++)n=project(l[o],r),"Polygon"===c&&(n.outer=0===o),i.push(n);e.push(createFeature(s,"Polygon"===c?3:2,i,p))}else if("MultiPolygon"===c){for(i=[],o=0;o<l.length;o++)for(a=0;a<l[o].length;a++)n=project(l[o][a],r),n.outer=0===a,i.push(n);e.push(createFeature(s,3,i,p))}else{if("GeometryCollection"!==c)throw new Error("Input data is not a valid GeoJSON object.");for(o=0;o<u.geometries.length;o++)convertFeature(e,{geometry:u.geometries[o],properties:s},r)}}}function project(e,t){for(var r=[],o=0;o<e.length;o++)r.push(projectPoint(e[o]));return t&&(simplify(r,t),calcSize(r)),r}function projectPoint(e){var t=Math.sin(e[1]*Math.PI/180),r=e[0]/360+.5,o=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return o=o<0?0:o>1?1:o,[r,o,0]}function calcSize(e){for(var t,r,o=0,a=0,i=0;i<e.length-1;i++)t=r||e[i],r=e[i+1],o+=t[0]*r[1]-r[0]*t[1],a+=Math.abs(r[0]-t[0])+Math.abs(r[1]-t[1]);e.area=Math.abs(o/2),e.dist=a}module.exports=convert;var simplify=_dereq_("./simplify"),createFeature=_dereq_("./feature");
},{"./feature":10,"./simplify":12}],10:[function(_dereq_,module,exports){
"use strict";function createFeature(e,t,a,n){var r={id:n||null,type:t,geometry:a,tags:e||null,min:[1/0,1/0],max:[-(1/0),-(1/0)]};return calcBBox(r),r}function calcBBox(e){var t=e.geometry,a=e.min,n=e.max;if(1===e.type)calcRingBBox(a,n,t);else for(var r=0;r<t.length;r++)calcRingBBox(a,n,t[r]);return e}function calcRingBBox(e,t,a){for(var n,r=0;r<a.length;r++)n=a[r],e[0]=Math.min(n[0],e[0]),t[0]=Math.max(n[0],t[0]),e[1]=Math.min(n[1],e[1]),t[1]=Math.max(n[1],t[1])}module.exports=createFeature;
},{}],11:[function(_dereq_,module,exports){
"use strict";function geojsonvt(e,t){return new GeoJSONVT(e,t)}function GeoJSONVT(e,t){t=this.options=extend(Object.create(this.options),t);var i=t.debug;i&&console.time("preprocess data");var o=1<<t.maxZoom,n=convert(e,t.tolerance/(o*t.extent));this.tiles={},this.tileCoords=[],i&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",t.indexMaxZoom,t.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),n=wrap(n,t.buffer/t.extent,intersectX),n.length&&this.splitTile(n,0,0,0),i&&(n.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)))}function toID(e,t,i){return 32*((1<<e)*i+t)+e}function intersectX(e,t,i){return[i,(i-e[0])*(t[1]-e[1])/(t[0]-e[0])+e[1],1]}function intersectY(e,t,i){return[(i-e[1])*(t[0]-e[0])/(t[1]-e[1])+e[0],i,1]}function extend(e,t){for(var i in t)e[i]=t[i];return e}function isClippedSquare(e,t,i){var o=e.source;if(1!==o.length)return!1;var n=o[0];if(3!==n.type||n.geometry.length>1)return!1;var r=n.geometry[0].length;if(5!==r)return!1;for(var s=0;s<r;s++){var l=transform.point(n.geometry[0][s],t,e.z2,e.x,e.y);if(l[0]!==-i&&l[0]!==t+i||l[1]!==-i&&l[1]!==t+i)return!1}return!0}module.exports=geojsonvt;var convert=_dereq_("./convert"),transform=_dereq_("./transform"),clip=_dereq_("./clip"),wrap=_dereq_("./wrap"),createTile=_dereq_("./tile");GeoJSONVT.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,solidChildren:!1,tolerance:3,extent:4096,buffer:64,debug:0},GeoJSONVT.prototype.splitTile=function(e,t,i,o,n,r,s){for(var l=[e,t,i,o],a=this.options,u=a.debug,c=null;l.length;){o=l.pop(),i=l.pop(),t=l.pop(),e=l.pop();var p=1<<t,d=toID(t,i,o),m=this.tiles[d],f=t===a.maxZoom?0:a.tolerance/(p*a.extent);if(!m&&(u>1&&console.time("creation"),m=this.tiles[d]=createTile(e,p,i,o,f,t===a.maxZoom),this.tileCoords.push({z:t,x:i,y:o}),u)){u>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",t,i,o,m.numFeatures,m.numPoints,m.numSimplified),console.timeEnd("creation"));var h="z"+t;this.stats[h]=(this.stats[h]||0)+1,this.total++}if(m.source=e,n){if(t===a.maxZoom||t===n)continue;var x=1<<n-t;if(i!==Math.floor(r/x)||o!==Math.floor(s/x))continue}else if(t===a.indexMaxZoom||m.numPoints<=a.indexMaxPoints)continue;if(a.solidChildren||!isClippedSquare(m,a.extent,a.buffer)){m.source=null,u>1&&console.time("clipping");var g,v,M,T,b,y,S=.5*a.buffer/a.extent,Z=.5-S,q=.5+S,w=1+S;g=v=M=T=null,b=clip(e,p,i-S,i+q,0,intersectX,m.min[0],m.max[0]),y=clip(e,p,i+Z,i+w,0,intersectX,m.min[0],m.max[0]),b&&(g=clip(b,p,o-S,o+q,1,intersectY,m.min[1],m.max[1]),v=clip(b,p,o+Z,o+w,1,intersectY,m.min[1],m.max[1])),y&&(M=clip(y,p,o-S,o+q,1,intersectY,m.min[1],m.max[1]),T=clip(y,p,o+Z,o+w,1,intersectY,m.min[1],m.max[1])),u>1&&console.timeEnd("clipping"),e.length&&(l.push(g||[],t+1,2*i,2*o),l.push(v||[],t+1,2*i,2*o+1),l.push(M||[],t+1,2*i+1,2*o),l.push(T||[],t+1,2*i+1,2*o+1))}else n&&(c=t)}return c},GeoJSONVT.prototype.getTile=function(e,t,i){var o=this.options,n=o.extent,r=o.debug,s=1<<e;t=(t%s+s)%s;var l=toID(e,t,i);if(this.tiles[l])return transform.tile(this.tiles[l],n);r>1&&console.log("drilling down to z%d-%d-%d",e,t,i);for(var a,u=e,c=t,p=i;!a&&u>0;)u--,c=Math.floor(c/2),p=Math.floor(p/2),a=this.tiles[toID(u,c,p)];if(!a||!a.source)return null;if(r>1&&console.log("found parent tile z%d-%d-%d",u,c,p),isClippedSquare(a,n,o.buffer))return transform.tile(a,n);r>1&&console.time("drilling down");var d=this.splitTile(a.source,u,c,p,e,t,i);if(r>1&&console.timeEnd("drilling down"),null!==d){var m=1<<e-d;l=toID(d,Math.floor(t/m),Math.floor(i/m))}return this.tiles[l]?transform.tile(this.tiles[l],n):null};
},{"./clip":8,"./convert":9,"./tile":13,"./transform":14,"./wrap":15}],12:[function(_dereq_,module,exports){
"use strict";function simplify(t,i){var e,p,r,s,o=i*i,f=t.length,u=0,n=f-1,g=[];for(t[u][2]=1,t[n][2]=1;n;){for(p=0,e=u+1;e<n;e++)r=getSqSegDist(t[e],t[u],t[n]),r>p&&(s=e,p=r);p>o?(t[s][2]=p,g.push(u),g.push(s),u=s):(n=g.pop(),u=g.pop())}}function getSqSegDist(t,i,e){var p=i[0],r=i[1],s=e[0],o=e[1],f=t[0],u=t[1],n=s-p,g=o-r;if(0!==n||0!==g){var l=((f-p)*n+(u-r)*g)/(n*n+g*g);l>1?(p=s,r=o):l>0&&(p+=n*l,r+=g*l)}return n=f-p,g=u-r,n*n+g*g}module.exports=simplify;
},{}],13:[function(_dereq_,module,exports){
"use strict";function createTile(e,n,r,i,t,u){for(var a={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:r,y:i,z2:n,transformed:!1,min:[2,1],max:[-1,0]},m=0;m<e.length;m++){a.numFeatures++,addFeature(a,e[m],t,u);var s=e[m].min,l=e[m].max;s[0]<a.min[0]&&(a.min[0]=s[0]),s[1]<a.min[1]&&(a.min[1]=s[1]),l[0]>a.max[0]&&(a.max[0]=l[0]),l[1]>a.max[1]&&(a.max[1]=l[1])}return a}function addFeature(e,n,r,i){var t,u,a,m,s=n.geometry,l=n.type,o=[],f=r*r;if(1===l)for(t=0;t<s.length;t++)o.push(s[t]),e.numPoints++,e.numSimplified++;else for(t=0;t<s.length;t++)if(a=s[t],i||!(2===l&&a.dist<r||3===l&&a.area<f)){var d=[];for(u=0;u<a.length;u++)m=a[u],(i||m[2]>f)&&(d.push(m),e.numSimplified++),e.numPoints++;3===l&&rewind(d,a.outer),o.push(d)}else e.numPoints+=a.length;if(o.length){var g={geometry:o,type:l,tags:n.tags||null};null!==n.id&&(g.id=n.id),e.features.push(g)}}function rewind(e,n){var r=signedArea(e);r<0===n&&e.reverse()}function signedArea(e){for(var n,r,i=0,t=0,u=e.length,a=u-1;t<u;a=t++)n=e[t],r=e[a],i+=(r[0]-n[0])*(n[1]+r[1]);return i}module.exports=createTile;
},{}],14:[function(_dereq_,module,exports){
"use strict";function transformTile(r,t){if(r.transformed)return r;var n,e,o,f=r.z2,a=r.x,s=r.y;for(n=0;n<r.features.length;n++){var i=r.features[n],u=i.geometry,m=i.type;if(1===m)for(e=0;e<u.length;e++)u[e]=transformPoint(u[e],t,f,a,s);else for(e=0;e<u.length;e++){var l=u[e];for(o=0;o<l.length;o++)l[o]=transformPoint(l[o],t,f,a,s)}}return r.transformed=!0,r}function transformPoint(r,t,n,e,o){var f=Math.round(t*(r[0]*n-e)),a=Math.round(t*(r[1]*n-o));return[f,a]}exports.tile=transformTile,exports.point=transformPoint;
},{}],15:[function(_dereq_,module,exports){
"use strict";function wrap(r,e,t){var o=r,a=clip(r,1,-1-e,e,0,t,-1,2),s=clip(r,1,1-e,2+e,0,t,-1,2);return(a||s)&&(o=clip(r,1,-e,1+e,0,t,-1,2)||[],a&&(o=shiftFeatureCoords(a,1).concat(o)),s&&(o=o.concat(shiftFeatureCoords(s,-1)))),o}function shiftFeatureCoords(r,e){for(var t=[],o=0;o<r.length;o++){var a,s=r[o],i=s.type;if(1===i)a=shiftCoords(s.geometry,e);else{a=[];for(var u=0;u<s.geometry.length;u++)a.push(shiftCoords(s.geometry[u],e))}t.push(createFeature(s.tags,i,a,s.id))}return t}function shiftCoords(r,e){var t=[];t.area=r.area,t.dist=r.dist;for(var o=0;o<r.length;o++)t.push([r[o][0]+e,r[o][1],r[o][2]]);return t}var clip=_dereq_("./clip"),createFeature=_dereq_("./feature");module.exports=wrap;
},{"./clip":8,"./feature":10}],16:[function(_dereq_,module,exports){
"use strict";function GridIndex(t,r,e){var s=this.cells=[];if(t instanceof ArrayBuffer){this.arrayBuffer=t;var i=new Int32Array(this.arrayBuffer);t=i[0],r=i[1],e=i[2],this.d=r+2*e;for(var h=0;h<this.d*this.d;h++){var n=i[NUM_PARAMS+h],o=i[NUM_PARAMS+h+1];s.push(n===o?null:i.subarray(n,o))}var l=i[NUM_PARAMS+s.length],a=i[NUM_PARAMS+s.length+1];this.keys=i.subarray(l,a),this.bboxes=i.subarray(a),this.insert=this._insertReadonly}else{this.d=r+2*e;for(var d=0;d<this.d*this.d;d++)s.push([]);this.keys=[],this.bboxes=[]}this.n=r,this.extent=t,this.padding=e,this.scale=r/t,this.uid=0;var f=e/r*t;this.min=-f,this.max=t+f}module.exports=GridIndex;var NUM_PARAMS=3;GridIndex.prototype.insert=function(t,r,e,s,i){this._forEachCell(r,e,s,i,this._insertCell,this.uid++),this.keys.push(t),this.bboxes.push(r),this.bboxes.push(e),this.bboxes.push(s),this.bboxes.push(i)},GridIndex.prototype._insertReadonly=function(){throw"Cannot insert into a GridIndex created from an ArrayBuffer."},GridIndex.prototype._insertCell=function(t,r,e,s,i,h){this.cells[i].push(h)},GridIndex.prototype.query=function(t,r,e,s){var i=this.min,h=this.max;if(t<=i&&r<=i&&h<=e&&h<=s)return Array.prototype.slice.call(this.keys);var n=[],o={};return this._forEachCell(t,r,e,s,this._queryCell,n,o),n},GridIndex.prototype._queryCell=function(t,r,e,s,i,h,n){var o=this.cells[i];if(null!==o)for(var l=this.keys,a=this.bboxes,d=0;d<o.length;d++){var f=o[d];if(void 0===n[f]){var u=4*f;t<=a[u+2]&&r<=a[u+3]&&e>=a[u+0]&&s>=a[u+1]?(n[f]=!0,h.push(l[f])):n[f]=!1}}},GridIndex.prototype._forEachCell=function(t,r,e,s,i,h,n){for(var o=this._convertToCellCoord(t),l=this._convertToCellCoord(r),a=this._convertToCellCoord(e),d=this._convertToCellCoord(s),f=o;f<=a;f++)for(var u=l;u<=d;u++){var y=this.d*u+f;if(i.call(this,t,r,e,s,y,h,n))return}},GridIndex.prototype._convertToCellCoord=function(t){return Math.max(0,Math.min(this.d-1,Math.floor(t*this.scale)+this.padding))},GridIndex.prototype.toArrayBuffer=function(){if(this.arrayBuffer)return this.arrayBuffer;for(var t=this.cells,r=NUM_PARAMS+this.cells.length+1+1,e=0,s=0;s<this.cells.length;s++)e+=this.cells[s].length;var i=new Int32Array(r+e+this.keys.length+this.bboxes.length);i[0]=this.extent,i[1]=this.n,i[2]=this.padding;for(var h=r,n=0;n<t.length;n++){var o=t[n];i[NUM_PARAMS+n]=h,i.set(o,h),h+=o.length}return i[NUM_PARAMS+t.length]=h,i.set(this.keys,h),h+=this.keys.length,i[NUM_PARAMS+t.length+1]=h,i.set(this.bboxes,h),h+=this.bboxes.length,i.buffer};
},{}],17:[function(_dereq_,module,exports){
exports.read=function(a,o,t,r,h){var M,p,w=8*h-r-1,f=(1<<w)-1,e=f>>1,i=-7,N=t?h-1:0,n=t?-1:1,s=a[o+N];for(N+=n,M=s&(1<<-i)-1,s>>=-i,i+=w;i>0;M=256*M+a[o+N],N+=n,i-=8);for(p=M&(1<<-i)-1,M>>=-i,i+=r;i>0;p=256*p+a[o+N],N+=n,i-=8);if(0===M)M=1-e;else{if(M===f)return p?NaN:(s?-1:1)*(1/0);p+=Math.pow(2,r),M-=e}return(s?-1:1)*p*Math.pow(2,M-r)},exports.write=function(a,o,t,r,h,M){var p,w,f,e=8*M-h-1,i=(1<<e)-1,N=i>>1,n=23===h?Math.pow(2,-24)-Math.pow(2,-77):0,s=r?0:M-1,u=r?1:-1,l=o<0||0===o&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(w=isNaN(o)?1:0,p=i):(p=Math.floor(Math.log(o)/Math.LN2),o*(f=Math.pow(2,-p))<1&&(p--,f*=2),o+=p+N>=1?n/f:n*Math.pow(2,1-N),o*f>=2&&(p++,f/=2),p+N>=i?(w=0,p=i):p+N>=1?(w=(o*f-1)*Math.pow(2,h),p+=N):(w=o*Math.pow(2,N-1)*Math.pow(2,h),p=0));h>=8;a[t+s]=255&w,s+=u,w/=256,h-=8);for(p=p<<h|w,e+=h;e>0;a[t+s]=255&p,s+=u,p/=256,e-=8);a[t+s-u]|=128*l};
},{}],18:[function(_dereq_,module,exports){
"use strict";function kdbush(t,i,e,s,n){return new KDBush(t,i,e,s,n)}function KDBush(t,i,e,s,n){i=i||defaultGetX,e=e||defaultGetY,n=n||Array,this.nodeSize=s||64,this.points=t,this.ids=new n(t.length),this.coords=new n(2*t.length);for(var r=0;r<t.length;r++)this.ids[r]=r,this.coords[2*r]=i(t[r]),this.coords[2*r+1]=e(t[r]);sort(this.ids,this.coords,this.nodeSize,0,this.ids.length-1,0)}function defaultGetX(t){return t[0]}function defaultGetY(t){return t[1]}var sort=_dereq_("./sort"),range=_dereq_("./range"),within=_dereq_("./within");module.exports=kdbush,KDBush.prototype={range:function(t,i,e,s){return range(this.ids,this.coords,t,i,e,s,this.nodeSize)},within:function(t,i,e){return within(this.ids,this.coords,t,i,e,this.nodeSize)}};
},{"./range":19,"./sort":20,"./within":21}],19:[function(_dereq_,module,exports){
"use strict";function range(p,r,s,u,h,e,o){for(var a,t,n=[0,p.length-1,0],f=[];n.length;){var l=n.pop(),v=n.pop(),g=n.pop();if(v-g<=o)for(var i=g;i<=v;i++)a=r[2*i],t=r[2*i+1],a>=s&&a<=h&&t>=u&&t<=e&&f.push(p[i]);else{var c=Math.floor((g+v)/2);a=r[2*c],t=r[2*c+1],a>=s&&a<=h&&t>=u&&t<=e&&f.push(p[c]);var d=(l+1)%2;(0===l?s<=a:u<=t)&&(n.push(g),n.push(c-1),n.push(d)),(0===l?h>=a:e>=t)&&(n.push(c+1),n.push(v),n.push(d))}}return f}module.exports=range;
},{}],20:[function(_dereq_,module,exports){
"use strict";function sortKD(t,a,o,s,r,e){if(!(r-s<=o)){var f=Math.floor((s+r)/2);select(t,a,f,s,r,e%2),sortKD(t,a,o,s,f-1,e+1),sortKD(t,a,o,f+1,r,e+1)}}function select(t,a,o,s,r,e){for(;r>s;){if(r-s>600){var f=r-s+1,p=o-s+1,w=Math.log(f),m=.5*Math.exp(2*w/3),n=.5*Math.sqrt(w*m*(f-m)/f)*(p-f/2<0?-1:1),c=Math.max(s,Math.floor(o-p*m/f+n)),h=Math.min(r,Math.floor(o+(f-p)*m/f+n));select(t,a,o,c,h,e)}var i=a[2*o+e],l=s,M=r;for(swapItem(t,a,s,o),a[2*r+e]>i&&swapItem(t,a,s,r);l<M;){for(swapItem(t,a,l,M),l++,M--;a[2*l+e]<i;)l++;for(;a[2*M+e]>i;)M--}a[2*s+e]===i?swapItem(t,a,s,M):(M++,swapItem(t,a,M,r)),M<=o&&(s=M+1),o<=M&&(r=M-1)}}function swapItem(t,a,o,s){swap(t,o,s),swap(a,2*o,2*s),swap(a,2*o+1,2*s+1)}function swap(t,a,o){var s=t[a];t[a]=t[o],t[o]=s}module.exports=sortKD;
},{}],21:[function(_dereq_,module,exports){
"use strict";function within(s,p,r,t,u,h){for(var i=[0,s.length-1,0],o=[],n=u*u;i.length;){var e=i.pop(),a=i.pop(),f=i.pop();if(a-f<=h)for(var v=f;v<=a;v++)sqDist(p[2*v],p[2*v+1],r,t)<=n&&o.push(s[v]);else{var l=Math.floor((f+a)/2),c=p[2*l],q=p[2*l+1];sqDist(c,q,r,t)<=n&&o.push(s[l]);var D=(e+1)%2;(0===e?r-u<=c:t-u<=q)&&(i.push(f),i.push(l-1),i.push(D)),(0===e?r+u>=c:t+u>=q)&&(i.push(l+1),i.push(a),i.push(D))}}return o}function sqDist(s,p,r,t){var u=s-r,h=p-t;return u*u+h*h}module.exports=within;
},{}],22:[function(_dereq_,module,exports){
"use strict";function isSupported(e){return!!(isBrowser()&&isArraySupported()&&isFunctionSupported()&&isObjectSupported()&&isJSONSupported()&&isWorkerSupported()&&isUint8ClampedArraySupported()&&isWebGLSupportedCached(e&&e.failIfMajorPerformanceCaveat))}function isBrowser(){return"undefined"!=typeof window&&"undefined"!=typeof document}function isArraySupported(){return Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray}function isFunctionSupported(){return Function.prototype&&Function.prototype.bind}function isObjectSupported(){return Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions}function isJSONSupported(){return"JSON"in window&&"parse"in JSON&&"stringify"in JSON}function isWorkerSupported(){return"Worker"in window}function isUint8ClampedArraySupported(){return"Uint8ClampedArray"in window}function isWebGLSupportedCached(e){return void 0===isWebGLSupportedCache[e]&&(isWebGLSupportedCache[e]=isWebGLSupported(e)),isWebGLSupportedCache[e]}function isWebGLSupported(e){var t=document.createElement("canvas"),r=Object.create(isSupported.webGLContextAttributes);return r.failIfMajorPerformanceCaveat=e,t.probablySupportsContext?t.probablySupportsContext("webgl",r)||t.probablySupportsContext("experimental-webgl",r):t.supportsContext?t.supportsContext("webgl",r)||t.supportsContext("experimental-webgl",r):t.getContext("webgl",r)||t.getContext("experimental-webgl",r)}"undefined"!=typeof module&&module.exports?module.exports=isSupported:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=isSupported);var isWebGLSupportedCache={};isSupported.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0};
},{}],23:[function(_dereq_,module,exports){
(function (process){
function normalizeArray(r,t){for(var e=0,n=r.length-1;n>=0;n--){var s=r[n];"."===s?r.splice(n,1):".."===s?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}function filter(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,splitPath=function(r){return splitPathRe.exec(r).slice(1)};exports.resolve=function(){for(var r="",t=!1,e=arguments.length-1;e>=-1&&!t;e--){var n=e>=0?arguments[e]:process.cwd();if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,t="/"===n.charAt(0))}return r=normalizeArray(filter(r.split("/"),function(r){return!!r}),!t).join("/"),(t?"/":"")+r||"."},exports.normalize=function(r){var t=exports.isAbsolute(r),e="/"===substr(r,-1);return r=normalizeArray(filter(r.split("/"),function(r){return!!r}),!t).join("/"),r||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r},exports.isAbsolute=function(r){return"/"===r.charAt(0)},exports.join=function(){var r=Array.prototype.slice.call(arguments,0);return exports.normalize(filter(r,function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r}).join("/"))},exports.relative=function(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=exports.resolve(r).substr(1),t=exports.resolve(t).substr(1);for(var n=e(r.split("/")),s=e(t.split("/")),i=Math.min(n.length,s.length),o=i,u=0;u<i;u++)if(n[u]!==s[u]){o=u;break}for(var l=[],u=o;u<n.length;u++)l.push("..");return l=l.concat(s.slice(o)),l.join("/")},exports.sep="/",exports.delimiter=":",exports.dirname=function(r){var t=splitPath(r),e=t[0],n=t[1];return e||n?(n&&(n=n.substr(0,n.length-1)),e+n):"."},exports.basename=function(r,t){var e=splitPath(r)[2];return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e},exports.extname=function(r){return splitPath(r)[3]};var substr="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)};
}).call(this,_dereq_('_process'))

},{"_process":27}],24:[function(_dereq_,module,exports){
"use strict";function Buffer(t){var e;t&&t.length&&(e=t,t=e.length);var r=new Uint8Array(t||0);return e&&r.set(e),r.readUInt32LE=BufferMethods.readUInt32LE,r.writeUInt32LE=BufferMethods.writeUInt32LE,r.readInt32LE=BufferMethods.readInt32LE,r.writeInt32LE=BufferMethods.writeInt32LE,r.readFloatLE=BufferMethods.readFloatLE,r.writeFloatLE=BufferMethods.writeFloatLE,r.readDoubleLE=BufferMethods.readDoubleLE,r.writeDoubleLE=BufferMethods.writeDoubleLE,r.toString=BufferMethods.toString,r.write=BufferMethods.write,r.slice=BufferMethods.slice,r.copy=BufferMethods.copy,r._isBuffer=!0,r}function encodeString(t){for(var e,r,n=t.length,i=[],o=0;o<n;o++){if(e=t.charCodeAt(o),e>55295&&e<57344){if(!r){e>56319||o+1===n?i.push(239,191,189):r=e;continue}if(e<56320){i.push(239,191,189),r=e;continue}e=r-55296<<10|e-56320|65536,r=null}else r&&(i.push(239,191,189),r=null);e<128?i.push(e):e<2048?i.push(e>>6|192,63&e|128):e<65536?i.push(e>>12|224,e>>6&63|128,63&e|128):i.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}return i}module.exports=Buffer;var ieee754=_dereq_("ieee754"),BufferMethods,lastStr,lastStrEncoded;BufferMethods={readUInt32LE:function(t){return(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},writeUInt32LE:function(t,e){this[e]=t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24},readInt32LE:function(t){return(this[t]|this[t+1]<<8|this[t+2]<<16)+(this[t+3]<<24)},readFloatLE:function(t){return ieee754.read(this,t,!0,23,4)},readDoubleLE:function(t){return ieee754.read(this,t,!0,52,8)},writeFloatLE:function(t,e){return ieee754.write(this,t,e,!0,23,4)},writeDoubleLE:function(t,e){return ieee754.write(this,t,e,!0,52,8)},toString:function(t,e,r){var n="",i="";e=e||0,r=Math.min(this.length,r||this.length);for(var o=e;o<r;o++){var u=this[o];u<=127?(n+=decodeURIComponent(i)+String.fromCharCode(u),i=""):i+="%"+u.toString(16)}return n+=decodeURIComponent(i)},write:function(t,e){for(var r=t===lastStr?lastStrEncoded:encodeString(t),n=0;n<r.length;n++)this[e+n]=r[n]},slice:function(t,e){return this.subarray(t,e)},copy:function(t,e){e=e||0;for(var r=0;r<this.length;r++)t[e+r]=this[r]}},BufferMethods.writeInt32LE=BufferMethods.writeUInt32LE,Buffer.byteLength=function(t){return lastStr=t,lastStrEncoded=encodeString(t),lastStrEncoded.length},Buffer.isBuffer=function(t){return!(!t||!t._isBuffer)};
},{"ieee754":17}],25:[function(_dereq_,module,exports){
(function (global){
"use strict";function Pbf(t){this.buf=Buffer.isBuffer(t)?t:new Buffer(t||0),this.pos=0,this.length=this.buf.length}function readVarintRemainder(t,i){var e,r=i.buf;if(e=r[i.pos++],t+=268435456*(127&e),e<128)return t;if(e=r[i.pos++],t+=34359738368*(127&e),e<128)return t;if(e=r[i.pos++],t+=4398046511104*(127&e),e<128)return t;if(e=r[i.pos++],t+=562949953421312*(127&e),e<128)return t;if(e=r[i.pos++],t+=72057594037927940*(127&e),e<128)return t;if(e=r[i.pos++],t+=0x8000000000000000*(127&e),e<128)return t;throw new Error("Expected varint not more than 10 bytes")}function writeBigVarint(t,i){i.realloc(10);for(var e=i.pos+10;t>=1;){if(i.pos>=e)throw new Error("Given varint doesn't fit into 10 bytes");var r=255&t;i.buf[i.pos++]=r|(t>=128?128:0),t/=128}}function reallocForRawMessage(t,i,e){var r=i<=16383?1:i<=2097151?2:i<=268435455?3:Math.ceil(Math.log(i)/(7*Math.LN2));e.realloc(r);for(var s=e.pos-1;s>=t;s--)e.buf[s+r]=e.buf[s]}function writePackedVarint(t,i){for(var e=0;e<t.length;e++)i.writeVarint(t[e])}function writePackedSVarint(t,i){for(var e=0;e<t.length;e++)i.writeSVarint(t[e])}function writePackedFloat(t,i){for(var e=0;e<t.length;e++)i.writeFloat(t[e])}function writePackedDouble(t,i){for(var e=0;e<t.length;e++)i.writeDouble(t[e])}function writePackedBoolean(t,i){for(var e=0;e<t.length;e++)i.writeBoolean(t[e])}function writePackedFixed32(t,i){for(var e=0;e<t.length;e++)i.writeFixed32(t[e])}function writePackedSFixed32(t,i){for(var e=0;e<t.length;e++)i.writeSFixed32(t[e])}function writePackedFixed64(t,i){for(var e=0;e<t.length;e++)i.writeFixed64(t[e])}function writePackedSFixed64(t,i){for(var e=0;e<t.length;e++)i.writeSFixed64(t[e])}module.exports=Pbf;var Buffer=global.Buffer||_dereq_("./buffer");Pbf.Varint=0,Pbf.Fixed64=1,Pbf.Bytes=2,Pbf.Fixed32=5;var SHIFT_LEFT_32=4294967296,SHIFT_RIGHT_32=1/SHIFT_LEFT_32,POW_2_63=Math.pow(2,63);Pbf.prototype={destroy:function(){this.buf=null},readFields:function(t,i,e){for(e=e||this.length;this.pos<e;){var r=this.readVarint(),s=r>>3,n=this.pos;t(s,i,this),this.pos===n&&this.skip(r)}return i},readMessage:function(t,i){return this.readFields(t,i,this.readVarint()+this.pos)},readFixed32:function(){var t=this.buf.readUInt32LE(this.pos);return this.pos+=4,t},readSFixed32:function(){var t=this.buf.readInt32LE(this.pos);return this.pos+=4,t},readFixed64:function(){var t=this.buf.readUInt32LE(this.pos)+this.buf.readUInt32LE(this.pos+4)*SHIFT_LEFT_32;return this.pos+=8,t},readSFixed64:function(){var t=this.buf.readUInt32LE(this.pos)+this.buf.readInt32LE(this.pos+4)*SHIFT_LEFT_32;return this.pos+=8,t},readFloat:function(){var t=this.buf.readFloatLE(this.pos);return this.pos+=4,t},readDouble:function(){var t=this.buf.readDoubleLE(this.pos);return this.pos+=8,t},readVarint:function(){var t,i,e=this.buf;return i=e[this.pos++],t=127&i,i<128?t:(i=e[this.pos++],t|=(127&i)<<7,i<128?t:(i=e[this.pos++],t|=(127&i)<<14,i<128?t:(i=e[this.pos++],t|=(127&i)<<21,i<128?t:readVarintRemainder(t,this))))},readVarint64:function(){var t=this.pos,i=this.readVarint();if(i<POW_2_63)return i;for(var e=this.pos-2;255===this.buf[e];)e--;e<t&&(e=t),i=0;for(var r=0;r<e-t+1;r++){var s=127&~this.buf[t+r];i+=r<4?s<<7*r:s*Math.pow(2,7*r)}return-i-1},readSVarint:function(){var t=this.readVarint();return t%2===1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,i=this.buf.toString("utf8",this.pos,t);return this.pos=t,i},readBytes:function(){var t=this.readVarint()+this.pos,i=this.buf.slice(this.pos,t);return this.pos=t,i},readPackedVarint:function(){for(var t=this.readVarint()+this.pos,i=[];this.pos<t;)i.push(this.readVarint());return i},readPackedSVarint:function(){for(var t=this.readVarint()+this.pos,i=[];this.pos<t;)i.push(this.readSVarint());return i},readPackedBoolean:function(){for(var t=this.readVarint()+this.pos,i=[];this.pos<t;)i.push(this.readBoolean());return i},readPackedFloat:function(){for(var t=this.readVarint()+this.pos,i=[];this.pos<t;)i.push(this.readFloat());return i},readPackedDouble:function(){for(var t=this.readVarint()+this.pos,i=[];this.pos<t;)i.push(this.readDouble());return i},readPackedFixed32:function(){for(var t=this.readVarint()+this.pos,i=[];this.pos<t;)i.push(this.readFixed32());return i},readPackedSFixed32:function(){for(var t=this.readVarint()+this.pos,i=[];this.pos<t;)i.push(this.readSFixed32());return i},readPackedFixed64:function(){for(var t=this.readVarint()+this.pos,i=[];this.pos<t;)i.push(this.readFixed64());return i},readPackedSFixed64:function(){for(var t=this.readVarint()+this.pos,i=[];this.pos<t;)i.push(this.readSFixed64());return i},skip:function(t){var i=7&t;if(i===Pbf.Varint)for(;this.buf[this.pos++]>127;);else if(i===Pbf.Bytes)this.pos=this.readVarint()+this.pos;else if(i===Pbf.Fixed32)this.pos+=4;else{if(i!==Pbf.Fixed64)throw new Error("Unimplemented type: "+i);this.pos+=8}},writeTag:function(t,i){this.writeVarint(t<<3|i)},realloc:function(t){for(var i=this.length||16;i<this.pos+t;)i*=2;if(i!==this.length){var e=new Buffer(i);this.buf.copy(e),this.buf=e,this.length=i}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.slice(0,this.length)},writeFixed32:function(t){this.realloc(4),this.buf.writeUInt32LE(t,this.pos),this.pos+=4},writeSFixed32:function(t){this.realloc(4),this.buf.writeInt32LE(t,this.pos),this.pos+=4},writeFixed64:function(t){this.realloc(8),this.buf.writeInt32LE(t&-1,this.pos),this.buf.writeUInt32LE(Math.floor(t*SHIFT_RIGHT_32),this.pos+4),this.pos+=8},writeSFixed64:function(t){this.realloc(8),this.buf.writeInt32LE(t&-1,this.pos),this.buf.writeInt32LE(Math.floor(t*SHIFT_RIGHT_32),this.pos+4),this.pos+=8},writeVarint:function(t){return t=+t,t>268435455?void writeBigVarint(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),void(t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127)))))},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t)},writeBoolean:function(t){this.writeVarint(Boolean(t))},writeString:function(t){t=String(t);var i=Buffer.byteLength(t);this.writeVarint(i),this.realloc(i),this.buf.write(t,this.pos),this.pos+=i},writeFloat:function(t){this.realloc(4),this.buf.writeFloatLE(t,this.pos),this.pos+=4},writeDouble:function(t){this.realloc(8),this.buf.writeDoubleLE(t,this.pos),this.pos+=8},writeBytes:function(t){var i=t.length;this.writeVarint(i),this.realloc(i);for(var e=0;e<i;e++)this.buf[this.pos++]=t[e]},writeRawMessage:function(t,i){this.pos++;var e=this.pos;t(i,this);var r=this.pos-e;r>=128&&reallocForRawMessage(e,r,this),this.pos=e-1,this.writeVarint(r),this.pos+=r},writeMessage:function(t,i,e){this.writeTag(t,Pbf.Bytes),this.writeRawMessage(i,e)},writePackedVarint:function(t,i){this.writeMessage(t,writePackedVarint,i)},writePackedSVarint:function(t,i){this.writeMessage(t,writePackedSVarint,i)},writePackedBoolean:function(t,i){this.writeMessage(t,writePackedBoolean,i)},writePackedFloat:function(t,i){this.writeMessage(t,writePackedFloat,i)},writePackedDouble:function(t,i){this.writeMessage(t,writePackedDouble,i)},writePackedFixed32:function(t,i){this.writeMessage(t,writePackedFixed32,i)},writePackedSFixed32:function(t,i){this.writeMessage(t,writePackedSFixed32,i)},writePackedFixed64:function(t,i){this.writeMessage(t,writePackedFixed64,i)},writePackedSFixed64:function(t,i){this.writeMessage(t,writePackedSFixed64,i)},writeBytesField:function(t,i){this.writeTag(t,Pbf.Bytes),this.writeBytes(i)},writeFixed32Field:function(t,i){this.writeTag(t,Pbf.Fixed32),this.writeFixed32(i)},writeSFixed32Field:function(t,i){this.writeTag(t,Pbf.Fixed32),this.writeSFixed32(i)},writeFixed64Field:function(t,i){this.writeTag(t,Pbf.Fixed64),this.writeFixed64(i)},writeSFixed64Field:function(t,i){this.writeTag(t,Pbf.Fixed64),this.writeSFixed64(i)},writeVarintField:function(t,i){this.writeTag(t,Pbf.Varint),this.writeVarint(i)},writeSVarintField:function(t,i){this.writeTag(t,Pbf.Varint),this.writeSVarint(i)},writeStringField:function(t,i){this.writeTag(t,Pbf.Bytes),this.writeString(i)},writeFloatField:function(t,i){this.writeTag(t,Pbf.Fixed32),this.writeFloat(i)},writeDoubleField:function(t,i){this.writeTag(t,Pbf.Fixed64),this.writeDouble(i)},writeBooleanField:function(t,i){this.writeVarintField(t,Boolean(i))}};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./buffer":24}],26:[function(_dereq_,module,exports){
"use strict";function Point(t,n){this.x=t,this.y=n}module.exports=Point,Point.prototype={clone:function(){return new Point(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var n=t.x-this.x,i=t.y-this.y;return n*n+i*i},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,n){return Math.atan2(this.x*n-this.y*t,this.x*t+this.y*n)},_matMult:function(t){var n=t[0]*this.x+t[1]*this.y,i=t[2]*this.x+t[3]*this.y;return this.x=n,this.y=i,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y;return this.y=this.x,this.x=-t,this},_rotate:function(t){var n=Math.cos(t),i=Math.sin(t),s=n*this.x-i*this.y,r=i*this.x+n*this.y;return this.x=s,this.y=r,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},Point.convert=function(t){return t instanceof Point?t:Array.isArray(t)?new Point(t[0],t[1]):t};
},{}],27:[function(_dereq_,module,exports){
function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(e){if(cachedSetTimeout===setTimeout)return setTimeout(e,0);if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout)return cachedSetTimeout=setTimeout,setTimeout(e,0);try{return cachedSetTimeout(e,0)}catch(t){try{return cachedSetTimeout.call(null,e,0)}catch(t){return cachedSetTimeout.call(this,e,0)}}}function runClearTimeout(e){if(cachedClearTimeout===clearTimeout)return clearTimeout(e);if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout)return cachedClearTimeout=clearTimeout,clearTimeout(e);try{return cachedClearTimeout(e)}catch(t){try{return cachedClearTimeout.call(null,e)}catch(t){return cachedClearTimeout.call(this,e)}}}function cleanUpNextTick(){draining&&currentQueue&&(draining=!1,currentQueue.length?queue=currentQueue.concat(queue):queueIndex=-1,queue.length&&drainQueue())}function drainQueue(){if(!draining){var e=runTimeout(cleanUpNextTick);draining=!0;for(var t=queue.length;t;){for(currentQueue=queue,queue=[];++queueIndex<t;)currentQueue&&currentQueue[queueIndex].run();queueIndex=-1,t=queue.length}currentQueue=null,draining=!1,runClearTimeout(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}var process=module.exports={},cachedSetTimeout,cachedClearTimeout;!function(){try{cachedSetTimeout="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){cachedSetTimeout=defaultSetTimout}try{cachedClearTimeout="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){cachedClearTimeout=defaultClearTimeout}}();var queue=[],draining=!1,currentQueue,queueIndex=-1;process.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var u=1;u<arguments.length;u++)t[u-1]=arguments[u];queue.push(new Item(e,t)),1!==queue.length||draining||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",process.versions={},process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.binding=function(e){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(e){throw new Error("process.chdir is not supported")},process.umask=function(){return 0};
},{}],28:[function(_dereq_,module,exports){
"use strict";function partialSort(a,t,r,o,p){for(r=r||0,o=o||a.length-1,p=p||defaultCompare;o>r;){if(o-r>600){var f=o-r+1,e=t-r+1,l=Math.log(f),s=.5*Math.exp(2*l/3),i=.5*Math.sqrt(l*s*(f-s)/f)*(e-f/2<0?-1:1),n=Math.max(r,Math.floor(t-e*s/f+i)),h=Math.min(o,Math.floor(t+(f-e)*s/f+i));partialSort(a,t,n,h,p)}var u=a[t],M=r,w=o;for(swap(a,r,t),p(a[o],u)>0&&swap(a,r,o);M<w;){for(swap(a,M,w),M++,w--;p(a[M],u)<0;)M++;for(;p(a[w],u)>0;)w--}0===p(a[r],u)?swap(a,r,w):(w++,swap(a,w,o)),w<=t&&(r=w+1),t<=w&&(o=w-1)}}function swap(a,t,r){var o=a[t];a[t]=a[r],a[r]=o}function defaultCompare(a,t){return a<t?-1:a>t?1:0}module.exports=partialSort;
},{}],29:[function(_dereq_,module,exports){
"use strict";function supercluster(t){return new SuperCluster(t)}function SuperCluster(t){this.options=extend(Object.create(this.options),t),this.trees=new Array(this.options.maxZoom+1)}function createCluster(t,e,o,n){return{x:t,y:e,zoom:1/0,id:n,numPoints:o}}function createPointCluster(t,e){var o=t.geometry.coordinates;return createCluster(lngX(o[0]),latY(o[1]),1,e)}function getClusterJSON(t){return{type:"Feature",properties:getClusterProperties(t),geometry:{type:"Point",coordinates:[xLng(t.x),yLat(t.y)]}}}function getClusterProperties(t){var e=t.numPoints,o=e>=1e4?Math.round(e/1e3)+"k":e>=1e3?Math.round(e/100)/10+"k":e;return{cluster:!0,point_count:e,point_count_abbreviated:o}}function lngX(t){return t/360+.5}function latY(t){var e=Math.sin(t*Math.PI/180),o=.5-.25*Math.log((1+e)/(1-e))/Math.PI;return o<0?0:o>1?1:o}function xLng(t){return 360*(t-.5)}function yLat(t){var e=(180-360*t)*Math.PI/180;return 360*Math.atan(Math.exp(e))/Math.PI-90}function extend(t,e){for(var o in e)t[o]=e[o];return t}function getX(t){return t.x}function getY(t){return t.y}var kdbush=_dereq_("kdbush");module.exports=supercluster,SuperCluster.prototype={options:{minZoom:0,maxZoom:16,radius:40,extent:512,nodeSize:64,log:!1},load:function(t){var e=this.options.log;e&&console.time("total time");var o="prepare "+t.length+" points";e&&console.time(o),this.points=t;var n=t.map(createPointCluster);e&&console.timeEnd(o);for(var r=this.options.maxZoom;r>=this.options.minZoom;r--){var i=+Date.now();this.trees[r+1]=kdbush(n,getX,getY,this.options.nodeSize,Float32Array),n=this._cluster(n,r),e&&console.log("z%d: %d clusters in %dms",r,n.length,+Date.now()-i)}return this.trees[this.options.minZoom]=kdbush(n,getX,getY,this.options.nodeSize,Float32Array),e&&console.timeEnd("total time"),this},getClusters:function(t,e){for(var o=this.trees[this._limitZoom(e)],n=o.range(lngX(t[0]),latY(t[3]),lngX(t[2]),latY(t[1])),r=[],i=0;i<n.length;i++){var s=o.points[n[i]];r.push(s.id!==-1?this.points[s.id]:getClusterJSON(s))}return r},getTile:function(t,e,o){var n=this.trees[this._limitZoom(t)],r=Math.pow(2,t),i=this.options.extent,s=this.options.radius,u=s/i,a=(o-u)/r,h=(o+1+u)/r,l={features:[]};return this._addTileFeatures(n.range((e-u)/r,a,(e+1+u)/r,h),n.points,e,o,r,l),0===e&&this._addTileFeatures(n.range(1-u/r,a,1,h),n.points,r,o,r,l),e===r-1&&this._addTileFeatures(n.range(0,a,u/r,h),n.points,-1,o,r,l),l.features.length?l:null},_addTileFeatures:function(t,e,o,n,r,i){for(var s=0;s<t.length;s++){var u=e[t[s]];i.features.push({type:1,geometry:[[Math.round(this.options.extent*(u.x*r-o)),Math.round(this.options.extent*(u.y*r-n))]],tags:u.id!==-1?this.points[u.id].properties:getClusterProperties(u)})}},_limitZoom:function(t){return Math.max(this.options.minZoom,Math.min(t,this.options.maxZoom+1))},_cluster:function(t,e){for(var o=[],n=this.options.radius/(this.options.extent*Math.pow(2,e)),r=0;r<t.length;r++){var i=t[r];if(!(i.zoom<=e)){i.zoom=e;for(var s=this.trees[e+1],u=s.within(i.x,i.y,n),a=!1,h=i.numPoints,l=i.x*h,p=i.y*h,m=0;m<u.length;m++){var c=s.points[u[m]];e<c.zoom&&(a=!0,c.zoom=e,l+=c.x*c.numPoints,p+=c.y*c.numPoints,h+=c.numPoints)}o.push(a?createCluster(l/h,p/h,h,-1):i)}}return o}};
},{"kdbush":18}],30:[function(_dereq_,module,exports){
"use strict";function TinyQueue(t,i){if(!(this instanceof TinyQueue))return new TinyQueue(t,i);if(this.data=t||[],this.length=this.data.length,this.compare=i||defaultCompare,t)for(var a=Math.floor(this.length/2);a>=0;a--)this._down(a)}function defaultCompare(t,i){return t<i?-1:t>i?1:0}function swap(t,i,a){var n=t[i];t[i]=t[a],t[a]=n}module.exports=TinyQueue,TinyQueue.prototype={push:function(t){this.data.push(t),this.length++,this._up(this.length-1)},pop:function(){var t=this.data[0];return this.data[0]=this.data[this.length-1],this.length--,this.data.pop(),this._down(0),t},peek:function(){return this.data[0]},_up:function(t){for(var i=this.data,a=this.compare;t>0;){var n=Math.floor((t-1)/2);if(!(a(i[t],i[n])<0))break;swap(i,n,t),t=n}},_down:function(t){for(var i=this.data,a=this.compare,n=this.length;;){var e=2*t+1,h=e+1,s=t;if(e<n&&a(i[e],i[s])<0&&(s=e),h<n&&a(i[h],i[s])<0&&(s=h),s===t)return;swap(i,s,t),t=s}}};
},{}],31:[function(_dereq_,module,exports){
"function"==typeof Object.create?module.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:module.exports=function(t,e){t.super_=e;var o=function(){};o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t};
},{}],32:[function(_dereq_,module,exports){
module.exports=function(o){return o&&"object"==typeof o&&"function"==typeof o.copy&&"function"==typeof o.fill&&"function"==typeof o.readUInt8};
},{}],33:[function(_dereq_,module,exports){
(function (process,global){
function inspect(e,r){var t={seen:[],stylize:stylizeNoColor};return arguments.length>=3&&(t.depth=arguments[2]),arguments.length>=4&&(t.colors=arguments[3]),isBoolean(r)?t.showHidden=r:r&&exports._extend(t,r),isUndefined(t.showHidden)&&(t.showHidden=!1),isUndefined(t.depth)&&(t.depth=2),isUndefined(t.colors)&&(t.colors=!1),isUndefined(t.customInspect)&&(t.customInspect=!0),t.colors&&(t.stylize=stylizeWithColor),formatValue(t,e,t.depth)}function stylizeWithColor(e,r){var t=inspect.styles[r];return t?"["+inspect.colors[t][0]+"m"+e+"["+inspect.colors[t][1]+"m":e}function stylizeNoColor(e,r){return e}function arrayToHash(e){var r={};return e.forEach(function(e,t){r[e]=!0}),r}function formatValue(e,r,t){if(e.customInspect&&r&&isFunction(r.inspect)&&r.inspect!==exports.inspect&&(!r.constructor||r.constructor.prototype!==r)){var n=r.inspect(t,e);return isString(n)||(n=formatValue(e,n,t)),n}var i=formatPrimitive(e,r);if(i)return i;var o=Object.keys(r),s=arrayToHash(o);if(e.showHidden&&(o=Object.getOwnPropertyNames(r)),isError(r)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return formatError(r);if(0===o.length){if(isFunction(r)){var u=r.name?": "+r.name:"";return e.stylize("[Function"+u+"]","special")}if(isRegExp(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(isDate(r))return e.stylize(Date.prototype.toString.call(r),"date");if(isError(r))return formatError(r)}var c="",a=!1,l=["{","}"];if(isArray(r)&&(a=!0,l=["[","]"]),isFunction(r)){var p=r.name?": "+r.name:"";c=" [Function"+p+"]"}if(isRegExp(r)&&(c=" "+RegExp.prototype.toString.call(r)),isDate(r)&&(c=" "+Date.prototype.toUTCString.call(r)),isError(r)&&(c=" "+formatError(r)),0===o.length&&(!a||0==r.length))return l[0]+c+l[1];if(t<0)return isRegExp(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special");e.seen.push(r);var f;return f=a?formatArray(e,r,t,s,o):o.map(function(n){return formatProperty(e,r,t,s,n,a)}),e.seen.pop(),reduceToSingleString(f,c,l)}function formatPrimitive(e,r){if(isUndefined(r))return e.stylize("undefined","undefined");if(isString(r)){var t="'"+JSON.stringify(r).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(t,"string")}return isNumber(r)?e.stylize(""+r,"number"):isBoolean(r)?e.stylize(""+r,"boolean"):isNull(r)?e.stylize("null","null"):void 0}function formatError(e){return"["+Error.prototype.toString.call(e)+"]"}function formatArray(e,r,t,n,i){for(var o=[],s=0,u=r.length;s<u;++s)hasOwnProperty(r,String(s))?o.push(formatProperty(e,r,t,n,String(s),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(formatProperty(e,r,t,n,i,!0))}),o}function formatProperty(e,r,t,n,i,o){var s,u,c;if(c=Object.getOwnPropertyDescriptor(r,i)||{value:r[i]},c.get?u=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(u=e.stylize("[Setter]","special")),hasOwnProperty(n,i)||(s="["+i+"]"),u||(e.seen.indexOf(c.value)<0?(u=isNull(t)?formatValue(e,c.value,null):formatValue(e,c.value,t-1),u.indexOf("\n")>-1&&(u=o?u.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+u.split("\n").map(function(e){return"   "+e}).join("\n"))):u=e.stylize("[Circular]","special")),isUndefined(s)){if(o&&i.match(/^\d+$/))return u;s=JSON.stringify(""+i),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+u}function reduceToSingleString(e,r,t){var n=0,i=e.reduce(function(e,r){return n++,r.indexOf("\n")>=0&&n++,e+r.replace(/\u001b\[\d\d?m/g,"").length+1},0);return i>60?t[0]+(""===r?"":r+"\n ")+" "+e.join(",\n  ")+" "+t[1]:t[0]+r+" "+e.join(", ")+" "+t[1]}function isArray(e){return Array.isArray(e)}function isBoolean(e){return"boolean"==typeof e}function isNull(e){return null===e}function isNullOrUndefined(e){return null==e}function isNumber(e){return"number"==typeof e}function isString(e){return"string"==typeof e}function isSymbol(e){return"symbol"==typeof e}function isUndefined(e){return void 0===e}function isRegExp(e){return isObject(e)&&"[object RegExp]"===objectToString(e)}function isObject(e){return"object"==typeof e&&null!==e}function isDate(e){return isObject(e)&&"[object Date]"===objectToString(e)}function isError(e){return isObject(e)&&("[object Error]"===objectToString(e)||e instanceof Error)}function isFunction(e){return"function"==typeof e}function isPrimitive(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||"undefined"==typeof e}function objectToString(e){return Object.prototype.toString.call(e)}function pad(e){return e<10?"0"+e.toString(10):e.toString(10)}function timestamp(){var e=new Date,r=[pad(e.getHours()),pad(e.getMinutes()),pad(e.getSeconds())].join(":");return[e.getDate(),months[e.getMonth()],r].join(" ")}function hasOwnProperty(e,r){return Object.prototype.hasOwnProperty.call(e,r)}var formatRegExp=/%[sdj%]/g;exports.format=function(e){if(!isString(e)){for(var r=[],t=0;t<arguments.length;t++)r.push(inspect(arguments[t]));return r.join(" ")}for(var t=1,n=arguments,i=n.length,o=String(e).replace(formatRegExp,function(e){if("%%"===e)return"%";if(t>=i)return e;switch(e){case"%s":return String(n[t++]);case"%d":return Number(n[t++]);case"%j":try{return JSON.stringify(n[t++])}catch(e){return"[Circular]"}default:return e}}),s=n[t];t<i;s=n[++t])o+=isNull(s)||!isObject(s)?" "+s:" "+inspect(s);return o},exports.deprecate=function(e,r){function t(){if(!n){if(process.throwDeprecation)throw new Error(r);process.traceDeprecation?console.trace(r):console.error(r),n=!0}return e.apply(this,arguments)}if(isUndefined(global.process))return function(){return exports.deprecate(e,r).apply(this,arguments)};if(process.noDeprecation===!0)return e;var n=!1;return t};var debugs={},debugEnviron;exports.debuglog=function(e){if(isUndefined(debugEnviron)&&(debugEnviron=process.env.NODE_DEBUG||""),e=e.toUpperCase(),!debugs[e])if(new RegExp("\\b"+e+"\\b","i").test(debugEnviron)){var r=process.pid;debugs[e]=function(){var t=exports.format.apply(exports,arguments);console.error("%s %d: %s",e,r,t)}}else debugs[e]=function(){};return debugs[e]},exports.inspect=inspect,inspect.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},inspect.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},exports.isArray=isArray,exports.isBoolean=isBoolean,exports.isNull=isNull,exports.isNullOrUndefined=isNullOrUndefined,exports.isNumber=isNumber,exports.isString=isString,exports.isSymbol=isSymbol,exports.isUndefined=isUndefined,exports.isRegExp=isRegExp,exports.isObject=isObject,exports.isDate=isDate,exports.isError=isError,exports.isFunction=isFunction,exports.isPrimitive=isPrimitive,exports.isBuffer=_dereq_("./support/isBuffer");var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];exports.log=function(){console.log("%s - %s",timestamp(),exports.format.apply(exports,arguments))},exports.inherits=_dereq_("inherits"),exports._extend=function(e,r){if(!r||!isObject(r))return e;for(var t=Object.keys(r),n=t.length;n--;)e[t[n]]=r[t[n]];return e};
}).call(this,_dereq_('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./support/isBuffer":32,"_process":27,"inherits":31}],34:[function(_dereq_,module,exports){
module.exports.VectorTile=_dereq_("./lib/vectortile.js"),module.exports.VectorTileFeature=_dereq_("./lib/vectortilefeature.js"),module.exports.VectorTileLayer=_dereq_("./lib/vectortilelayer.js");
},{"./lib/vectortile.js":35,"./lib/vectortilefeature.js":36,"./lib/vectortilelayer.js":37}],35:[function(_dereq_,module,exports){
"use strict";function VectorTile(e,r){this.layers=e.readFields(readTile,{},r)}function readTile(e,r,i){if(3===e){var t=new VectorTileLayer(i,i.readVarint()+i.pos);t.length&&(r[t.name]=t)}}var VectorTileLayer=_dereq_("./vectortilelayer");module.exports=VectorTile;
},{"./vectortilelayer":37}],36:[function(_dereq_,module,exports){
"use strict";function VectorTileFeature(e,t,r,i,a){this.properties={},this.extent=r,this.type=0,this._pbf=e,this._geometry=-1,this._keys=i,this._values=a,e.readFields(readFeature,this,t)}function readFeature(e,t,r){1==e?t.id=r.readVarint():2==e?readTag(r,t):3==e?t.type=r.readVarint():4==e&&(t._geometry=r.pos)}function readTag(e,t){for(var r=e.readVarint()+e.pos;e.pos<r;){var i=t._keys[e.readVarint()],a=t._values[e.readVarint()];t.properties[i]=a}}function classifyRings(e){var t=e.length;if(t<=1)return[e];for(var r,i,a=[],o=0;o<t;o++){var n=signedArea(e[o]);0!==n&&(void 0===i&&(i=n<0),i===n<0?(r&&a.push(r),r=[e[o]]):r.push(e[o]))}return r&&a.push(r),a}function signedArea(e){for(var t,r,i=0,a=0,o=e.length,n=o-1;a<o;n=a++)t=e[a],r=e[n],i+=(r.x-t.x)*(t.y+r.y);return i}var Point=_dereq_("point-geometry");module.exports=VectorTileFeature,VectorTileFeature.types=["Unknown","Point","LineString","Polygon"],VectorTileFeature.prototype.loadGeometry=function(){var e=this._pbf;e.pos=this._geometry;for(var t,r=e.readVarint()+e.pos,i=1,a=0,o=0,n=0,s=[];e.pos<r;){if(!a){var p=e.readVarint();i=7&p,a=p>>3}if(a--,1===i||2===i)o+=e.readSVarint(),n+=e.readSVarint(),1===i&&(t&&s.push(t),t=[]),t.push(new Point(o,n));else{if(7!==i)throw new Error("unknown command "+i);t&&t.push(t[0].clone())}}return t&&s.push(t),s},VectorTileFeature.prototype.bbox=function(){var e=this._pbf;e.pos=this._geometry;for(var t=e.readVarint()+e.pos,r=1,i=0,a=0,o=0,n=1/0,s=-(1/0),p=1/0,h=-(1/0);e.pos<t;){if(!i){var u=e.readVarint();r=7&u,i=u>>3}if(i--,1===r||2===r)a+=e.readSVarint(),o+=e.readSVarint(),a<n&&(n=a),a>s&&(s=a),o<p&&(p=o),o>h&&(h=o);else if(7!==r)throw new Error("unknown command "+r)}return[n,p,s,h]},VectorTileFeature.prototype.toGeoJSON=function(e,t,r){function i(e){for(var t=0;t<e.length;t++){var r=e[t],i=180-360*(r.y+p)/n;e[t]=[360*(r.x+s)/n-180,360/Math.PI*Math.atan(Math.exp(i*Math.PI/180))-90]}}var a,o,n=this.extent*Math.pow(2,r),s=this.extent*e,p=this.extent*t,h=this.loadGeometry(),u=VectorTileFeature.types[this.type];switch(this.type){case 1:var d=[];for(a=0;a<h.length;a++)d[a]=h[a][0];h=d,i(h);break;case 2:for(a=0;a<h.length;a++)i(h[a]);break;case 3:for(h=classifyRings(h),a=0;a<h.length;a++)for(o=0;o<h[a].length;o++)i(h[a][o])}1===h.length?h=h[0]:u="Multi"+u;var f={type:"Feature",geometry:{type:u,coordinates:h},properties:this.properties};return"id"in this&&(f.id=this.id),f};
},{"point-geometry":26}],37:[function(_dereq_,module,exports){
"use strict";function VectorTileLayer(e,t){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],e.readFields(readLayer,this,t),this.length=this._features.length}function readLayer(e,t,r){15===e?t.version=r.readVarint():1===e?t.name=r.readString():5===e?t.extent=r.readVarint():2===e?t._features.push(r.pos):3===e?t._keys.push(r.readString()):4===e&&t._values.push(readValueMessage(r))}function readValueMessage(e){for(var t=null,r=e.readVarint()+e.pos;e.pos<r;){var a=e.readVarint()>>3;t=1===a?e.readString():2===a?e.readFloat():3===a?e.readDouble():4===a?e.readVarint64():5===a?e.readVarint():6===a?e.readSVarint():7===a?e.readBoolean():null}return t}var VectorTileFeature=_dereq_("./vectortilefeature.js");module.exports=VectorTileLayer,VectorTileLayer.prototype.feature=function(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];var t=this._pbf.readVarint()+this._pbf.pos;return new VectorTileFeature(this._pbf,t,this.extent,this._keys,this._values)};
},{"./vectortilefeature.js":36}],38:[function(_dereq_,module,exports){
function fromVectorTileJs(e){var r=[];for(var o in e.layers)r.push(prepareLayer(e.layers[o]));var t=new Pbf;return vtpb.tile.write({layers:r},t),t.finish()}function fromGeojsonVt(e){var r={};for(var o in e)r[o]=new GeoJSONWrapper(e[o].features),r[o].name=o;return fromVectorTileJs({layers:r})}function prepareLayer(e){for(var r={name:e.name||"",version:e.version||1,extent:e.extent||4096,keys:[],values:[],features:[]},o={},t={},n=0;n<e.length;n++){var a=e.feature(n);a.geometry=encodeGeometry(a.loadGeometry());var u=[];for(var s in a.properties){var i=o[s];"undefined"==typeof i&&(r.keys.push(s),i=r.keys.length-1,o[s]=i);var p=wrapValue(a.properties[s]),l=t[p.key];"undefined"==typeof l&&(r.values.push(p),l=r.values.length-1,t[p.key]=l),u.push(i),u.push(l)}a.tags=u,r.features.push(a)}return r}function command(e,r){return(r<<3)+(7&e)}function zigzag(e){return e<<1^e>>31}function encodeGeometry(e){for(var r=[],o=0,t=0,n=e.length,a=0;a<n;a++){var u=e[a];r.push(command(1,1));for(var s=0;s<u.length;s++){1===s&&r.push(command(2,u.length-1));var i=u[s].x-o,p=u[s].y-t;r.push(zigzag(i),zigzag(p)),o+=i,t+=p}}return r}function wrapValue(e){var r,o=typeof e;return"string"===o?r={string_value:e}:"boolean"===o?r={bool_value:e}:"number"===o?r=e%1!==0?{double_value:e}:e<0?{sint_value:e}:{uint_value:e}:(e=JSON.stringify(e),r={string_value:e}),r.key=o+":"+e,r}var Pbf=_dereq_("pbf"),vtpb=_dereq_("./vector-tile-pb"),GeoJSONWrapper=_dereq_("./lib/geojson_wrapper");module.exports=fromVectorTileJs,module.exports.fromVectorTileJs=fromVectorTileJs,module.exports.fromGeojsonVt=fromGeojsonVt,module.exports.GeoJSONWrapper=GeoJSONWrapper;
},{"./lib/geojson_wrapper":39,"./vector-tile-pb":40,"pbf":25}],39:[function(_dereq_,module,exports){
"use strict";function GeoJSONWrapper(e){this.features=e,this.length=e.length}function FeatureWrapper(e){this.id="number"==typeof e.id?e.id:void 0,this.type=e.type,this.rawGeometry=1===e.type?[e.geometry]:e.geometry,this.properties=e.tags,this.extent=4096}var Point=_dereq_("point-geometry"),VectorTileFeature=_dereq_("vector-tile").VectorTileFeature;module.exports=GeoJSONWrapper,GeoJSONWrapper.prototype.feature=function(e){return new FeatureWrapper(this.features[e])},FeatureWrapper.prototype.loadGeometry=function(){var e=this.rawGeometry;this.geometry=[];for(var t=0;t<e.length;t++){for(var r=e[t],o=[],a=0;a<r.length;a++)o.push(new Point(r[a][0],r[a][1]));this.geometry.push(o)}return this.geometry},FeatureWrapper.prototype.bbox=function(){this.geometry||this.loadGeometry();for(var e=this.geometry,t=1/0,r=-(1/0),o=1/0,a=-(1/0),i=0;i<e.length;i++)for(var p=e[i],n=0;n<p.length;n++){var h=p[n];t=Math.min(t,h.x),r=Math.max(r,h.x),o=Math.min(o,h.y),a=Math.max(a,h.y)}return[t,o,r,a]},FeatureWrapper.prototype.toGeoJSON=VectorTileFeature.prototype.toGeoJSON;
},{"point-geometry":26,"vector-tile":34}],40:[function(_dereq_,module,exports){
"use strict";function readTile(e,r){return e.readFields(readTileField,{layers:[]},r)}function readTileField(e,r,i){3===e&&r.layers.push(readLayer(i,i.readVarint()+i.pos))}function writeTile(e,r){var i;if(void 0!==e.layers)for(i=0;i<e.layers.length;i++)r.writeMessage(3,writeLayer,e.layers[i])}function readValue(e,r){return e.readFields(readValueField,{},r)}function readValueField(e,r,i){1===e?r.string_value=i.readString():2===e?r.float_value=i.readFloat():3===e?r.double_value=i.readDouble():4===e?r.int_value=i.readVarint():5===e?r.uint_value=i.readVarint():6===e?r.sint_value=i.readSVarint():7===e&&(r.bool_value=i.readBoolean())}function writeValue(e,r){void 0!==e.string_value&&r.writeStringField(1,e.string_value),void 0!==e.float_value&&r.writeFloatField(2,e.float_value),void 0!==e.double_value&&r.writeDoubleField(3,e.double_value),void 0!==e.int_value&&r.writeVarintField(4,e.int_value),void 0!==e.uint_value&&r.writeVarintField(5,e.uint_value),void 0!==e.sint_value&&r.writeSVarintField(6,e.sint_value),void 0!==e.bool_value&&r.writeBooleanField(7,e.bool_value)}function readFeature(e,r){var i=e.readFields(readFeatureField,{},r);return void 0===i.type&&(i.type="Unknown"),i}function readFeatureField(e,r,i){1===e?r.id=i.readVarint():2===e?r.tags=i.readPackedVarint():3===e?r.type=i.readVarint():4===e&&(r.geometry=i.readPackedVarint())}function writeFeature(e,r){void 0!==e.id&&r.writeVarintField(1,e.id),void 0!==e.tags&&r.writePackedVarint(2,e.tags),void 0!==e.type&&r.writeVarintField(3,e.type),void 0!==e.geometry&&r.writePackedVarint(4,e.geometry)}function readLayer(e,r){return e.readFields(readLayerField,{features:[],keys:[],values:[]},r)}function readLayerField(e,r,i){15===e?r.version=i.readVarint():1===e?r.name=i.readString():2===e?r.features.push(readFeature(i,i.readVarint()+i.pos)):3===e?r.keys.push(i.readString()):4===e?r.values.push(readValue(i,i.readVarint()+i.pos)):5===e&&(r.extent=i.readVarint())}function writeLayer(e,r){void 0!==e.version&&r.writeVarintField(15,e.version),void 0!==e.name&&r.writeStringField(1,e.name);var i;if(void 0!==e.features)for(i=0;i<e.features.length;i++)r.writeMessage(2,writeFeature,e.features[i]);if(void 0!==e.keys)for(i=0;i<e.keys.length;i++)r.writeStringField(3,e.keys[i]);if(void 0!==e.values)for(i=0;i<e.values.length;i++)r.writeMessage(4,writeValue,e.values[i]);void 0!==e.extent&&r.writeVarintField(5,e.extent)}var tile=exports.tile={read:readTile,write:writeTile};tile.GeomType={Unknown:0,Point:1,LineString:2,Polygon:3},tile.value={read:readValue,write:writeValue},tile.feature={read:readFeature,write:writeFeature},tile.layer={read:readLayer,write:writeLayer};
},{}],41:[function(_dereq_,module,exports){
var bundleFn=arguments[3],sources=arguments[4],cache=arguments[5],stringify=JSON.stringify;module.exports=function(r,e){function t(r){d[r]=!0;for(var e in sources[r][1]){var n=sources[r][1][e];d[n]||t(n)}}for(var n,o=Object.keys(cache),a=0,i=o.length;a<i;a++){var s=o[a],u=cache[s].exports;if(u===r||u&&u.default===r){n=s;break}}if(!n){n=Math.floor(Math.pow(16,8)*Math.random()).toString(16);for(var f={},a=0,i=o.length;a<i;a++){var s=o[a];f[s]=s}sources[n]=[Function(["require","module","exports"],"("+r+")(self)"),f]}var c=Math.floor(Math.pow(16,8)*Math.random()).toString(16),l={};l[n]=n,sources[c]=[Function(["require"],"var f = require("+stringify(n)+");(f.default ? f.default : f)(self);"),l];var d={};t(c);var g="("+bundleFn+")({"+Object.keys(d).map(function(r){return stringify(r)+":["+sources[r][0]+","+stringify(sources[r][1])+"]"}).join(",")+"},{},["+stringify(c)+"])",v=window.URL||window.webkitURL||window.mozURL||window.msURL,w=new Blob([g],{type:"text/javascript"});if(e&&e.bare)return w;var h=v.createObjectURL(w),b=new Worker(h);return b.objectURL=h,b};
},{}],42:[function(_dereq_,module,exports){
module.exports.RADIUS=6378137,module.exports.FLATTENING=1/298.257223563,module.exports.POLAR_RADIUS=6356752.3142;
},{}],43:[function(_dereq_,module,exports){
module.exports={"version":"0.35.1"}
},{}],44:[function(_dereq_,module,exports){
"use strict";function serializePaintVertexArrays(r,e){var t={};for(var a in r){var i=r[a].paintVertexArray;if(0!==i.length){var n=i.serialize(e),s=i.constructor.serialize();t[a]={array:n,type:s}}}return t}var ProgramConfiguration=_dereq_("./program_configuration"),createVertexArrayType=_dereq_("./vertex_array_type"),Segment=function(r,e){this.vertexOffset=r,this.primitiveOffset=e,this.vertexLength=0,this.primitiveLength=0},ArrayGroup=function(r,e,t){var a=this;this.globalProperties={zoom:t};var i=createVertexArrayType(r.layoutAttributes);this.layoutVertexArray=new i;var n=r.elementArrayType;n&&(this.elementArray=new n);var s=r.elementArrayType2;s&&(this.elementArray2=new s),this.layerData={};for(var y=0,o=e;y<o.length;y+=1){var p=o[y],l=ProgramConfiguration.createDynamic(r.paintAttributes||[],p,t);a.layerData[p.id]={layer:p,programConfiguration:l,paintVertexArray:new l.PaintVertexArray,paintPropertyStatistics:l.createPaintPropertyStatistics()}}this.segments=[],this.segments2=[]};ArrayGroup.prototype.prepareSegment=function(r){var e=this.segments[this.segments.length-1];return(!e||e.vertexLength+r>ArrayGroup.MAX_VERTEX_ARRAY_LENGTH)&&(e=new Segment(this.layoutVertexArray.length,this.elementArray.length),this.segments.push(e)),e},ArrayGroup.prototype.prepareSegment2=function(r){var e=this.segments2[this.segments2.length-1];return(!e||e.vertexLength+r>ArrayGroup.MAX_VERTEX_ARRAY_LENGTH)&&(e=new Segment(this.layoutVertexArray.length,this.elementArray2.length),this.segments2.push(e)),e},ArrayGroup.prototype.populatePaintArrays=function(r){var e=this;for(var t in e.layerData){var a=e.layerData[t];0!==a.paintVertexArray.bytesPerElement&&a.programConfiguration.populatePaintArray(a.layer,a.paintVertexArray,a.paintPropertyStatistics,e.layoutVertexArray.length,e.globalProperties,r)}},ArrayGroup.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},ArrayGroup.prototype.serialize=function(r){return{layoutVertexArray:this.layoutVertexArray.serialize(r),elementArray:this.elementArray&&this.elementArray.serialize(r),elementArray2:this.elementArray2&&this.elementArray2.serialize(r),paintVertexArrays:serializePaintVertexArrays(this.layerData,r),segments:this.segments,segments2:this.segments2}},ArrayGroup.MAX_VERTEX_ARRAY_LENGTH=Math.pow(2,16)-1,module.exports=ArrayGroup;
},{"./program_configuration":58,"./vertex_array_type":60}],45:[function(_dereq_,module,exports){
"use strict";var ArrayGroup=_dereq_("./array_group"),BufferGroup=_dereq_("./buffer_group"),util=_dereq_("../util/util"),Bucket=function(r,t){this.zoom=r.zoom,this.overscaling=r.overscaling,this.layers=r.layers,this.index=r.index,r.arrays?this.buffers=new BufferGroup(t,r.layers,r.zoom,r.arrays):this.arrays=new ArrayGroup(t,r.layers,r.zoom)};Bucket.prototype.populate=function(r,t){for(var e=this,i=0,a=r;i<a.length;i+=1){var u=a[i];e.layers[0].filter(u)&&(e.addFeature(u),t.featureIndex.insert(u,e.index))}},Bucket.prototype.getPaintPropertyStatistics=function(){return util.mapObject(this.arrays.layerData,function(r){return r.paintPropertyStatistics})},Bucket.prototype.isEmpty=function(){return this.arrays.isEmpty()},Bucket.prototype.serialize=function(r){return{zoom:this.zoom,layerIds:this.layers.map(function(r){return r.id}),arrays:this.arrays.serialize(r)}},Bucket.prototype.destroy=function(){this.buffers&&(this.buffers.destroy(),this.buffers=null)},module.exports=Bucket,Bucket.deserialize=function(r,t){if(t){for(var e={},i=0,a=r;i<a.length;i+=1){var u=a[i],o=u.layerIds.map(function(r){return t.getLayer(r)}).filter(Boolean);if(0!==o.length)for(var s=o[0].createBucket(util.extend({layers:o},u)),n=0,f=o;n<f.length;n+=1){var y=f[n];e[y.id]=s}}return e}};
},{"../util/util":214,"./array_group":44,"./buffer_group":52}],46:[function(_dereq_,module,exports){
"use strict";function addCircleVertex(e,r,t,c,i){e.emplaceBack(2*r+(c+1)/2,2*t+(i+1)/2)}var Bucket=_dereq_("../bucket"),createElementArrayType=_dereq_("../element_array_type"),loadGeometry=_dereq_("../load_geometry"),EXTENT=_dereq_("../extent"),circleInterface={layoutAttributes:[{name:"a_pos",components:2,type:"Int16"}],elementArrayType:createElementArrayType(),paintAttributes:[{property:"circle-color",type:"Uint8"},{property:"circle-radius",type:"Uint16",multiplier:10},{property:"circle-blur",type:"Uint16",multiplier:10},{property:"circle-opacity",type:"Uint8",multiplier:255},{property:"circle-stroke-color",type:"Uint8"},{property:"circle-stroke-width",type:"Uint16",multiplier:10},{property:"circle-stroke-opacity",type:"Uint8",multiplier:255}]},CircleBucket=function(e){function r(r){e.call(this,r,circleInterface)}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.addFeature=function(e){for(var r=this.arrays,t=0,c=loadGeometry(e);t<c.length;t+=1)for(var i=c[t],a=0,p=i;a<p.length;a+=1){var l=p[a],o=l.x,y=l.y;if(!(o<0||o>=EXTENT||y<0||y>=EXTENT)){var n=r.prepareSegment(4),u=n.vertexLength;addCircleVertex(r.layoutVertexArray,o,y,-1,-1),addCircleVertex(r.layoutVertexArray,o,y,1,-1),addCircleVertex(r.layoutVertexArray,o,y,1,1),addCircleVertex(r.layoutVertexArray,o,y,-1,1),r.elementArray.emplaceBack(u,u+1,u+2),r.elementArray.emplaceBack(u,u+3,u+2),n.vertexLength+=4,n.primitiveLength+=2}}r.populatePaintArrays(e.properties)},r}(Bucket);CircleBucket.programInterface=circleInterface,module.exports=CircleBucket;
},{"../bucket":45,"../element_array_type":53,"../extent":54,"../load_geometry":56}],47:[function(_dereq_,module,exports){
"use strict";var Bucket=_dereq_("../bucket"),createElementArrayType=_dereq_("../element_array_type"),loadGeometry=_dereq_("../load_geometry"),earcut=_dereq_("earcut"),classifyRings=_dereq_("../../util/classify_rings"),EARCUT_MAX_RINGS=500,fillInterface={layoutAttributes:[{name:"a_pos",components:2,type:"Int16"}],elementArrayType:createElementArrayType(3),elementArrayType2:createElementArrayType(2),paintAttributes:[{property:"fill-color",type:"Uint8"},{property:"fill-outline-color",type:"Uint8"},{property:"fill-opacity",type:"Uint8",multiplier:255}]},FillBucket=function(e){function t(t){e.call(this,t,fillInterface)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.addFeature=function(e){for(var t=this.arrays,r=0,a=classifyRings(loadGeometry(e),EARCUT_MAX_RINGS);r<a.length;r+=1){for(var l=a[r],n=0,p=0,i=l;p<i.length;p+=1){var o=i[p];n+=o.length}for(var y=t.prepareSegment(n),c=y.vertexLength,u=[],s=[],g=0,h=l;g<h.length;g+=1){var m=h[g];if(0!==m.length){m!==l[0]&&s.push(u.length/2);var f=t.prepareSegment2(m.length),A=f.vertexLength;t.layoutVertexArray.emplaceBack(m[0].x,m[0].y),t.elementArray2.emplaceBack(A+m.length-1,A),u.push(m[0].x),u.push(m[0].y);for(var v=1;v<m.length;v++)t.layoutVertexArray.emplaceBack(m[v].x,m[v].y),t.elementArray2.emplaceBack(A+v-1,A+v),u.push(m[v].x),u.push(m[v].y);f.vertexLength+=m.length,f.primitiveLength+=m.length}}for(var _=earcut(u,s),k=0;k<_.length;k+=3)t.elementArray.emplaceBack(c+_[k],c+_[k+1],c+_[k+2]);y.vertexLength+=n,y.primitiveLength+=_.length/3}t.populatePaintArrays(e.properties)},t}(Bucket);FillBucket.programInterface=fillInterface,module.exports=FillBucket;
},{"../../util/classify_rings":197,"../bucket":45,"../element_array_type":53,"../load_geometry":56,"earcut":5}],48:[function(_dereq_,module,exports){
"use strict";function addVertex(e,t,r,a,n,o,i,y){e.emplaceBack(t,r,2*Math.floor(a*FACTOR)+i,n*FACTOR*2,o*FACTOR*2,Math.round(y))}function isBoundaryEdge(e,t){return e.x===t.x&&(e.x<0||e.x>EXTENT)||e.y===t.y&&(e.y<0||e.y>EXTENT)}var Bucket=_dereq_("../bucket"),createElementArrayType=_dereq_("../element_array_type"),loadGeometry=_dereq_("../load_geometry"),EXTENT=_dereq_("../extent"),earcut=_dereq_("earcut"),classifyRings=_dereq_("../../util/classify_rings"),EARCUT_MAX_RINGS=500,fillExtrusionInterface={layoutAttributes:[{name:"a_pos",components:2,type:"Int16"},{name:"a_normal",components:3,type:"Int16"},{name:"a_edgedistance",components:1,type:"Int16"}],elementArrayType:createElementArrayType(3),paintAttributes:[{property:"fill-extrusion-base",type:"Uint16"},{property:"fill-extrusion-height",type:"Uint16"},{property:"fill-extrusion-color",type:"Uint8"}]},FACTOR=Math.pow(2,13),FillExtrusionBucket=function(e){function t(t){e.call(this,t,fillExtrusionInterface)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.addFeature=function(e){for(var t=this.arrays,r=0,a=classifyRings(loadGeometry(e),EARCUT_MAX_RINGS);r<a.length;r+=1){for(var n=a[r],o=0,i=0,y=n;i<y.length;i+=1){var l=y[i];o+=l.length}for(var u=t.prepareSegment(5*o),p=[],s=[],c=[],x=0,f=n;x<f.length;x+=1){var d=f[x];if(0!==d.length){d!==n[0]&&s.push(p.length/2);for(var m=0,h=0;h<d.length;h++){var g=d[h];if(addVertex(t.layoutVertexArray,g.x,g.y,0,0,1,1,0),c.push(u.vertexLength++),h>=1){var A=d[h-1];if(!isBoundaryEdge(g,A)){var E=g.sub(A)._perp()._unit();addVertex(t.layoutVertexArray,g.x,g.y,E.x,E.y,0,0,m),addVertex(t.layoutVertexArray,g.x,g.y,E.x,E.y,0,1,m),m+=A.dist(g),addVertex(t.layoutVertexArray,A.x,A.y,E.x,E.y,0,0,m),addVertex(t.layoutVertexArray,A.x,A.y,E.x,E.y,0,1,m);var v=u.vertexLength;t.elementArray.emplaceBack(v,v+1,v+2),t.elementArray.emplaceBack(v+1,v+2,v+3),u.vertexLength+=4,u.primitiveLength+=2}}p.push(g.x),p.push(g.y)}}}for(var _=earcut(p,s),T=0;T<_.length;T+=3)t.elementArray.emplaceBack(c[_[T]],c[_[T+1]],c[_[T+2]]);u.primitiveLength+=_.length/3}t.populatePaintArrays(e.properties)},t}(Bucket);FillExtrusionBucket.programInterface=fillExtrusionInterface,module.exports=FillExtrusionBucket;
},{"../../util/classify_rings":197,"../bucket":45,"../element_array_type":53,"../extent":54,"../load_geometry":56,"earcut":5}],49:[function(_dereq_,module,exports){
"use strict";function addLineVertex(e,t,r,i,a,n,d){e.emplaceBack(t.x<<1|i,t.y<<1|a,Math.round(EXTRUDE_SCALE*r.x)+128,Math.round(EXTRUDE_SCALE*r.y)+128,(0===n?0:n<0?-1:1)+1|(d*LINE_DISTANCE_SCALE&63)<<2,d*LINE_DISTANCE_SCALE>>6)}var Bucket=_dereq_("../bucket"),createElementArrayType=_dereq_("../element_array_type"),loadGeometry=_dereq_("../load_geometry"),EXTENT=_dereq_("../extent"),VectorTileFeature=_dereq_("vector-tile").VectorTileFeature,EXTRUDE_SCALE=63,COS_HALF_SHARP_CORNER=Math.cos(37.5*(Math.PI/180)),SHARP_CORNER_OFFSET=15,LINE_DISTANCE_BUFFER_BITS=15,LINE_DISTANCE_SCALE=.5,MAX_LINE_DISTANCE=Math.pow(2,LINE_DISTANCE_BUFFER_BITS-1)/LINE_DISTANCE_SCALE,lineInterface={layoutAttributes:[{name:"a_pos",components:2,type:"Int16"},{name:"a_data",components:4,type:"Uint8"}],paintAttributes:[{property:"line-color",type:"Uint8"},{property:"line-blur",multiplier:10,type:"Uint8"},{property:"line-opacity",multiplier:10,type:"Uint8"},{property:"line-gap-width",multiplier:10,type:"Uint8",name:"a_gapwidth"},{property:"line-offset",multiplier:1,type:"Int8"}],elementArrayType:createElementArrayType()},LineBucket=function(e){function t(t){e.call(this,t,lineInterface)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.addFeature=function(e){for(var t=this,r=this.layers[0].layout,i=r["line-join"],a=r["line-cap"],n=r["line-miter-limit"],d=r["line-round-limit"],s=0,u=loadGeometry(e,LINE_DISTANCE_BUFFER_BITS);s<u.length;s+=1){var l=u[s];t.addLine(l,e,i,a,n,d)}},t.prototype.addLine=function(e,t,r,i,a,n){for(var d=this,s=t.properties,u="Polygon"===VectorTileFeature.types[t.type],l=e.length;l>=2&&e[l-1].equals(e[l-2]);)l--;if(!(l<(u?3:2))){"bevel"===r&&(a=1.05);var o=SHARP_CORNER_OFFSET*(EXTENT/(512*this.overscaling)),p=e[0],c=this.arrays,_=c.prepareSegment(10*l);this.distance=0;var h,y,m,E,x,C,v,f=i,A=u?"butt":i,L=!0;this.e1=this.e2=this.e3=-1,u&&(h=e[l-2],x=p.sub(h)._unit()._perp());for(var S=0;S<l;S++)if(m=u&&S===l-1?e[1]:e[S+1],!m||!e[S].equals(m)){x&&(E=x),h&&(y=h),h=e[S],x=m?m.sub(h)._unit()._perp():E,E=E||x;var V=E.add(x);0===V.x&&0===V.y||V._unit();var I=V.x*x.x+V.y*x.y,T=0!==I?1/I:1/0,N=I<COS_HALF_SHARP_CORNER&&y&&m;if(N&&S>0){var b=h.dist(y);if(b>2*o){var R=h.sub(h.sub(y)._mult(o/b)._round());d.distance+=R.dist(y),d.addCurrentVertex(R,d.distance,E.mult(1),0,0,!1,_),y=R}}var g=y&&m,F=g?r:m?f:A;if(g&&"round"===F&&(T<n?F="miter":T<=2&&(F="fakeround")),"miter"===F&&T>a&&(F="bevel"),"bevel"===F&&(T>2&&(F="flipbevel"),T<a&&(F="miter")),y&&(d.distance+=h.dist(y)),"miter"===F)V._mult(T),d.addCurrentVertex(h,d.distance,V,0,0,!1,_);else if("flipbevel"===F){if(T>100)V=x.clone().mult(-1);else{var B=E.x*x.y-E.y*x.x>0?-1:1,k=T*E.add(x).mag()/E.sub(x).mag();V._perp()._mult(k*B)}d.addCurrentVertex(h,d.distance,V,0,0,!1,_),d.addCurrentVertex(h,d.distance,V.mult(-1),0,0,!1,_)}else if("bevel"===F||"fakeround"===F){var D=E.x*x.y-E.y*x.x>0,P=-Math.sqrt(T*T-1);if(D?(v=0,C=P):(C=0,v=P),L||d.addCurrentVertex(h,d.distance,E,C,v,!1,_),"fakeround"===F){for(var U=Math.floor(8*(.5-(I-.5))),q=void 0,M=0;M<U;M++)q=x.mult((M+1)/(U+1))._add(E)._unit(),d.addPieSliceVertex(h,d.distance,q,D,_);d.addPieSliceVertex(h,d.distance,V,D,_);for(var O=U-1;O>=0;O--)q=E.mult((O+1)/(U+1))._add(x)._unit(),d.addPieSliceVertex(h,d.distance,q,D,_)}m&&d.addCurrentVertex(h,d.distance,x,-C,-v,!1,_)}else"butt"===F?(L||d.addCurrentVertex(h,d.distance,E,0,0,!1,_),m&&d.addCurrentVertex(h,d.distance,x,0,0,!1,_)):"square"===F?(L||(d.addCurrentVertex(h,d.distance,E,1,1,!1,_),d.e1=d.e2=-1),m&&d.addCurrentVertex(h,d.distance,x,-1,-1,!1,_)):"round"===F&&(L||(d.addCurrentVertex(h,d.distance,E,0,0,!1,_),d.addCurrentVertex(h,d.distance,E,1,1,!0,_),d.e1=d.e2=-1),m&&(d.addCurrentVertex(h,d.distance,x,-1,-1,!0,_),d.addCurrentVertex(h,d.distance,x,0,0,!1,_)));if(N&&S<l-1){var X=h.dist(m);if(X>2*o){var H=h.add(m.sub(h)._mult(o/X)._round());d.distance+=H.dist(h),d.addCurrentVertex(H,d.distance,x.mult(1),0,0,!1,_),h=H}}L=!1}c.populatePaintArrays(s)}},t.prototype.addCurrentVertex=function(e,t,r,i,a,n,d){var s,u=n?1:0,l=this.arrays,o=l.layoutVertexArray,p=l.elementArray;s=r.clone(),i&&s._sub(r.perp()._mult(i)),addLineVertex(o,e,s,u,0,i,t),this.e3=d.vertexLength++,this.e1>=0&&this.e2>=0&&(p.emplaceBack(this.e1,this.e2,this.e3),d.primitiveLength++),this.e1=this.e2,this.e2=this.e3,s=r.mult(-1),a&&s._sub(r.perp()._mult(a)),addLineVertex(o,e,s,u,1,-a,t),this.e3=d.vertexLength++,this.e1>=0&&this.e2>=0&&(p.emplaceBack(this.e1,this.e2,this.e3),d.primitiveLength++),this.e1=this.e2,this.e2=this.e3,t>MAX_LINE_DISTANCE/2&&(this.distance=0,this.addCurrentVertex(e,this.distance,r,i,a,n,d))},t.prototype.addPieSliceVertex=function(e,t,r,i,a){var n=i?1:0;r=r.mult(i?-1:1);var d=this.arrays,s=d.layoutVertexArray,u=d.elementArray;addLineVertex(s,e,r,0,n,0,t),this.e3=a.vertexLength++,this.e1>=0&&this.e2>=0&&(u.emplaceBack(this.e1,this.e2,this.e3),a.primitiveLength++),i?this.e2=this.e3:this.e1=this.e3},t}(Bucket);LineBucket.programInterface=lineInterface,module.exports=LineBucket;
},{"../bucket":45,"../element_array_type":53,"../extent":54,"../load_geometry":56,"vector-tile":34}],50:[function(_dereq_,module,exports){
"use strict";function addVertex(e,t,o,a,i,r,n,s,l,c,u,y){e.emplaceBack(t,o,Math.round(64*a),Math.round(64*i),r/4,n/4,packUint8ToFloat(10*(u||0),y%256),packUint8ToFloat(10*(l||0),10*Math.min(c||25,25)),s?s[0]:void 0,s?s[1]:void 0,s?s[2]:void 0)}function addCollisionBoxVertex(e,t,o,a,i){return e.emplaceBack(t.x,t.y,Math.round(o.x),Math.round(o.y),10*a,10*i)}function getSizeData(e,t,o){var a={isFeatureConstant:t.isLayoutValueFeatureConstant(o),isZoomConstant:t.isLayoutValueZoomConstant(o)};if(a.isFeatureConstant&&(a.layoutSize=t.getLayoutValue(o,{zoom:e+1})),!a.isZoomConstant){for(var i=t.getLayoutValueStopZoomLevels(o),r=0;r<i.length&&i[r]<=e;)r++;r=Math.max(0,r-1);for(var n=r;n<i.length&&i[n]<e+1;)n++;n=Math.min(i.length-1,n),a.coveringZoomRange=[i[r],i[n]],t.isLayoutValueFeatureConstant(o)&&(a.coveringStopValues=[t.getLayoutValue(o,{zoom:i[r]}),t.getLayoutValue(o,{zoom:i[n]})]),a.functionBase=t.getLayoutProperty(o).base,"undefined"==typeof a.functionBase&&(a.functionBase=1),a.functionType=t.getLayoutProperty(o).type||"exponential"}return a}function getSizeAttributeDeclarations(e,t){return e.isLayoutValueZoomConstant(t)&&!e.isLayoutValueFeatureConstant(t)?[{name:"a_size",components:1,type:"Uint16"}]:e.isLayoutValueZoomConstant(t)||e.isLayoutValueFeatureConstant(t)?[]:[{name:"a_size",components:3,type:"Uint16"}]}function getSizeVertexData(e,t,o,a,i){return e.isLayoutValueZoomConstant(a)&&!e.isLayoutValueFeatureConstant(a)?[10*e.getLayoutValue(a,{},i)]:e.isLayoutValueZoomConstant(a)||e.isLayoutValueFeatureConstant(a)?null:[10*e.getLayoutValue(a,{zoom:o[0]},i),10*e.getLayoutValue(a,{zoom:o[1]},i),10*e.getLayoutValue(a,{zoom:1+t},i)]}var Point=_dereq_("point-geometry"),ArrayGroup=_dereq_("../array_group"),BufferGroup=_dereq_("../buffer_group"),createElementArrayType=_dereq_("../element_array_type"),EXTENT=_dereq_("../extent"),packUint8ToFloat=_dereq_("../../shaders/encode_attribute").packUint8ToFloat,Anchor=_dereq_("../../symbol/anchor"),getAnchors=_dereq_("../../symbol/get_anchors"),resolveTokens=_dereq_("../../util/token"),Quads=_dereq_("../../symbol/quads"),Shaping=_dereq_("../../symbol/shaping"),transformText=_dereq_("../../symbol/transform_text"),mergeLines=_dereq_("../../symbol/mergelines"),clipLine=_dereq_("../../symbol/clip_line"),util=_dereq_("../../util/util"),scriptDetection=_dereq_("../../util/script_detection"),loadGeometry=_dereq_("../load_geometry"),CollisionFeature=_dereq_("../../symbol/collision_feature"),findPoleOfInaccessibility=_dereq_("../../util/find_pole_of_inaccessibility"),classifyRings=_dereq_("../../util/classify_rings"),VectorTileFeature=_dereq_("vector-tile").VectorTileFeature,shapeText=Shaping.shapeText,shapeIcon=Shaping.shapeIcon,WritingMode=Shaping.WritingMode,getGlyphQuads=Quads.getGlyphQuads,getIconQuads=Quads.getIconQuads,elementArrayType=createElementArrayType(),layoutAttributes=[{name:"a_pos_offset",components:4,type:"Int16"},{name:"a_data",components:4,type:"Uint16"}],symbolInterfaces={glyph:{layoutAttributes:layoutAttributes,elementArrayType:elementArrayType,paintAttributes:[{name:"a_fill_color",property:"text-color",type:"Uint8"},{name:"a_halo_color",property:"text-halo-color",type:"Uint8"},{name:"a_halo_width",property:"text-halo-width",type:"Uint16",multiplier:10},{name:"a_halo_blur",property:"text-halo-blur",type:"Uint16",multiplier:10},{name:"a_opacity",property:"text-opacity",type:"Uint8",multiplier:255}]},icon:{layoutAttributes:layoutAttributes,elementArrayType:elementArrayType,paintAttributes:[{name:"a_fill_color",property:"icon-color",type:"Uint8"},{name:"a_halo_color",property:"icon-halo-color",type:"Uint8"},{name:"a_halo_width",property:"icon-halo-width",type:"Uint16",multiplier:10},{name:"a_halo_blur",property:"icon-halo-blur",type:"Uint16",multiplier:10},{name:"a_opacity",property:"icon-opacity",type:"Uint8",multiplier:255}]},collisionBox:{layoutAttributes:[{name:"a_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"},{name:"a_data",components:2,type:"Uint8"}],elementArrayType:createElementArrayType(2)}},SymbolBucket=function(e){var t=this;this.collisionBoxArray=e.collisionBoxArray,this.zoom=e.zoom,this.overscaling=e.overscaling,this.layers=e.layers,this.index=e.index,this.sdfIcons=e.sdfIcons,this.iconsNeedLinear=e.iconsNeedLinear,this.fontstack=e.fontstack;var o=this.layers[0];if(this.symbolInterfaces={glyph:util.extend({},symbolInterfaces.glyph,{layoutAttributes:[].concat(symbolInterfaces.glyph.layoutAttributes,getSizeAttributeDeclarations(o,"text-size"))}),icon:util.extend({},symbolInterfaces.icon,{layoutAttributes:[].concat(symbolInterfaces.icon.layoutAttributes,getSizeAttributeDeclarations(o,"icon-size"))}),collisionBox:util.extend({},symbolInterfaces.collisionBox,{layoutAttributes:[].concat(symbolInterfaces.collisionBox.layoutAttributes)})},e.arrays){this.buffers={};for(var a in e.arrays)e.arrays[a]&&(t.buffers[a]=new BufferGroup(t.symbolInterfaces[a],e.layers,e.zoom,e.arrays[a]));this.textSizeData=e.textSizeData,this.iconSizeData=e.iconSizeData}else this.textSizeData=getSizeData(this.zoom,o,"text-size"),this.iconSizeData=getSizeData(this.zoom,o,"icon-size")};SymbolBucket.prototype.populate=function(e,t){var o=this,a=this.layers[0],i=a.layout,r=i["text-font"],n=(!a.isLayoutValueFeatureConstant("text-field")||i["text-field"])&&r,s=!a.isLayoutValueFeatureConstant("icon-image")||i["icon-image"];if(this.features=[],n||s){for(var l=t.iconDependencies,c=t.glyphDependencies,u=c[r]=c[r]||{},y={zoom:this.zoom},p=0;p<e.length;p++){var m=e[p];if(a.filter(m)){var h=void 0;n&&(h=a.getLayoutValue("text-field",y,m.properties),a.isLayoutValueFeatureConstant("text-field")&&(h=resolveTokens(m.properties,h)),h=transformText(h,a,y,m.properties));var x=void 0;if(s&&(x=a.getLayoutValue("icon-image",y,m.properties),a.isLayoutValueFeatureConstant("icon-image")&&(x=resolveTokens(m.properties,x))),(h||x)&&(o.features.push({text:h,icon:x,index:p,sourceLayerIndex:m.sourceLayerIndex,geometry:loadGeometry(m),properties:m.properties,type:VectorTileFeature.types[m.type]}),x&&(l[x]=!0),h))for(var d=0;d<h.length;d++)u[h.charCodeAt(d)]=!0}}"line"===i["symbol-placement"]&&(this.features=mergeLines(this.features))}},SymbolBucket.prototype.isEmpty=function(){return this.arrays.icon.isEmpty()&&this.arrays.glyph.isEmpty()&&this.arrays.collisionBox.isEmpty()},SymbolBucket.prototype.getPaintPropertyStatistics=function(){for(var e=this,t={},o=0,a=e.layers;o<a.length;o+=1){var i=a[o];t[i.id]=util.extend({},e.arrays.icon.layerData[i.id].paintPropertyStatistics,e.arrays.glyph.layerData[i.id].paintPropertyStatistics)}return t},SymbolBucket.prototype.serialize=function(e){return{zoom:this.zoom,layerIds:this.layers.map(function(e){return e.id}),sdfIcons:this.sdfIcons,iconsNeedLinear:this.iconsNeedLinear,textSizeData:this.textSizeData,iconSizeData:this.iconSizeData,fontstack:this.fontstack,arrays:util.mapObject(this.arrays,function(t){return t.isEmpty()?null:t.serialize(e)})}},SymbolBucket.prototype.destroy=function(){this.buffers&&(this.buffers.icon&&this.buffers.icon.destroy(),this.buffers.glyph&&this.buffers.glyph.destroy(),this.buffers.collisionBox&&this.buffers.collisionBox.destroy(),this.buffers=null)},SymbolBucket.prototype.createArrays=function(){var e=this;this.arrays=util.mapObject(this.symbolInterfaces,function(t){return new ArrayGroup(t,e.layers,e.zoom)})},SymbolBucket.prototype.prepare=function(e,t){var o=this;this.symbolInstances=[];var a=512*this.overscaling;this.tilePixelRatio=EXTENT/a,this.compareText={},this.iconsNeedLinear=!1;var i=this.layers[0].layout,r=.5,n=.5;switch(i["text-anchor"]){case"right":case"top-right":case"bottom-right":r=1;break;case"left":case"top-left":case"bottom-left":r=0}switch(i["text-anchor"]){case"bottom":case"bottom-right":case"bottom-left":n=1;break;case"top":case"top-right":case"top-left":n=0}for(var s="right"===i["text-justify"]?1:"left"===i["text-justify"]?0:.5,l=24,c=i["text-line-height"]*l,u="line"!==i["symbol-placement"]?i["text-max-width"]*l:0,y=i["text-letter-spacing"]*l,p=this.fontstack=i["text-font"].join(","),m="map"===i["text-rotation-alignment"]&&"line"===i["symbol-placement"],h=0,x=o.features;h<x.length;h+=1){var d=x[h],g=void 0;if(d.text){var f=scriptDetection.allowsVerticalWritingMode(d.text),b=o.layers[0].getLayoutValue("text-offset",{zoom:o.zoom},d.properties).map(function(e){return e*l});g={},g[WritingMode.horizontal]=shapeText(d.text,e[p],u,c,r,n,s,y,b,l,WritingMode.horizontal),g[WritingMode.vertical]=f&&m&&shapeText(d.text,e[p],u,c,r,n,s,y,b,l,WritingMode.vertical)}else g={};var v=void 0;if(d.icon){var S=t[d.icon],I=o.layers[0].getLayoutValue("icon-offset",{zoom:o.zoom},d.properties);v=shapeIcon(S,I),S&&(void 0===o.sdfIcons?o.sdfIcons=S.sdf:o.sdfIcons!==S.sdf&&util.warnOnce("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"),1!==S.pixelRatio?o.iconsNeedLinear=!0:0===i["icon-rotate"]&&o.layers[0].isLayoutValueFeatureConstant("icon-rotate")||(o.iconsNeedLinear=!0))}(g[WritingMode.horizontal]||v)&&o.addFeature(d,g,v)}},SymbolBucket.prototype.addFeature=function(e,t,o){var a=this,i=this.layers[0].getLayoutValue("text-size",{zoom:this.zoom+1},e.properties),r=this.layers[0].getLayoutValue("icon-size",{zoom:this.zoom+1},e.properties),n=this.layers[0].getLayoutValue("text-size",{zoom:18},e.properties);void 0===n&&(n=i);var s=this.layers[0].layout,l=24,c=i/l,u=this.tilePixelRatio*c,y=this.tilePixelRatio*n/l,p=this.tilePixelRatio*r,m=this.tilePixelRatio*s["symbol-spacing"],h=s["symbol-avoid-edges"],x=s["text-padding"]*this.tilePixelRatio,d=s["icon-padding"]*this.tilePixelRatio,g=s["text-max-angle"]/180*Math.PI,f="map"===s["text-rotation-alignment"]&&"line"===s["symbol-placement"],b="map"===s["icon-rotation-alignment"]&&"line"===s["symbol-placement"],v=s["text-allow-overlap"]||s["icon-allow-overlap"]||s["text-ignore-placement"]||s["icon-ignore-placement"],S=s["symbol-placement"],I=m/2,z=function(i,r){var n=!(r.x<0||r.x>EXTENT||r.y<0||r.y>EXTENT);if(!h||n){var s=n||v;a.addSymbolInstance(r,i,t,o,a.layers[0],s,a.collisionBoxArray,e.index,e.sourceLayerIndex,a.index,u,x,f,p,d,b,{zoom:a.zoom},e.properties)}};if("line"===S)for(var B=0,M=clipLine(e.geometry,0,0,EXTENT,EXTENT);B<M.length;B+=1)for(var L=M[B],A=getAnchors(L,m,g,t[WritingMode.vertical]||t[WritingMode.horizontal],o,l,y,a.overscaling,EXTENT),T=0,V=A;T<V.length;T+=1){var _=V[T],k=t[WritingMode.horizontal];k&&a.anchorIsTooClose(k.text,I,_)||z(L,_)}else if("Polygon"===e.type)for(var C=0,E=classifyRings(e.geometry,0);C<E.length;C+=1){var P=E[C],F=findPoleOfInaccessibility(P,16);z(P[0],new Anchor(F.x,F.y,0))}else if("LineString"===e.type)for(var w=0,D=e.geometry;w<D.length;w+=1){var N=D[w];z(N,new Anchor(N[0].x,N[0].y,0))}else if("Point"===e.type)for(var q=0,U=e.geometry;q<U.length;q+=1)for(var W=U[q],Q=0,R=W;Q<R.length;Q+=1){var Z=R[Q];z([Z],new Anchor(Z.x,Z.y,0))}},SymbolBucket.prototype.anchorIsTooClose=function(e,t,o){var a=this.compareText;if(e in a){for(var i=a[e],r=i.length-1;r>=0;r--)if(o.dist(i[r])<t)return!0}else a[e]=[];return a[e].push(o),!1},SymbolBucket.prototype.place=function(e,t){var o=this;this.createArrays();var a=this.layers[0],i=a.layout,r=e.maxScale,n="map"===i["text-rotation-alignment"]&&"line"===i["symbol-placement"],s="map"===i["icon-rotation-alignment"]&&"line"===i["symbol-placement"],l=i["text-allow-overlap"]||i["icon-allow-overlap"]||i["text-ignore-placement"]||i["icon-ignore-placement"];if(l){var c=e.angle,u=Math.sin(c),y=Math.cos(c);this.symbolInstances.sort(function(e,t){var o=u*e.anchor.x+y*e.anchor.y|0,a=u*t.anchor.x+y*t.anchor.y|0;return o-a||t.featureIndex-e.featureIndex})}for(var p=0,m=o.symbolInstances;p<m.length;p+=1){var h=m[p],x={boxStartIndex:h.textBoxStartIndex,boxEndIndex:h.textBoxEndIndex},d={boxStartIndex:h.iconBoxStartIndex,boxEndIndex:h.iconBoxEndIndex},g=!(h.textBoxStartIndex===h.textBoxEndIndex),f=!(h.iconBoxStartIndex===h.iconBoxEndIndex),b=i["text-optional"]||!g,v=i["icon-optional"]||!f,S=g?e.placeCollisionFeature(x,i["text-allow-overlap"],i["symbol-avoid-edges"]):e.minScale,I=f?e.placeCollisionFeature(d,i["icon-allow-overlap"],i["symbol-avoid-edges"]):e.minScale;if(b||v?!v&&S?S=Math.max(I,S):!b&&I&&(I=Math.max(I,S)):I=S=Math.max(I,S),g&&(e.insertCollisionFeature(x,S,i["text-ignore-placement"]),S<=r)){var z=getSizeVertexData(a,o.zoom,o.textSizeData.coveringZoomRange,"text-size",h.featureProperties);o.addSymbols(o.arrays.glyph,h.glyphQuads,S,z,i["text-keep-upright"],n,e.angle,h.featureProperties,h.writingModes)}if(f&&(e.insertCollisionFeature(d,I,i["icon-ignore-placement"]),I<=r)){var B=getSizeVertexData(a,o.zoom,o.iconSizeData.coveringZoomRange,"icon-size",h.featureProperties);o.addSymbols(o.arrays.icon,h.iconQuads,I,B,i["icon-keep-upright"],s,e.angle,h.featureProperties)}}t&&this.addToDebugBuffers(e)},SymbolBucket.prototype.addSymbols=function(e,t,o,a,i,r,n,s,l){for(var c=e.elementArray,u=e.layoutVertexArray,y=this.zoom,p=Math.max(Math.log(o)/Math.LN2+y,0),m=0,h=t;m<h.length;m+=1){var x=h[m],d=(x.anchorAngle+n+Math.PI)%(2*Math.PI);if(l&WritingMode.vertical){if(r&&x.writingMode===WritingMode.vertical){if(i&&r&&d<=5*Math.PI/4||d>7*Math.PI/4)continue}else if(i&&r&&d<=3*Math.PI/4||d>5*Math.PI/4)continue}else if(i&&r&&(d<=Math.PI/2||d>3*Math.PI/2))continue;var g=x.tl,f=x.tr,b=x.bl,v=x.br,S=x.tex,I=x.anchorPoint,z=Math.max(y+Math.log(x.minScale)/Math.LN2,p),B=Math.min(y+Math.log(x.maxScale)/Math.LN2,25);if(!(B<=z)){z===p&&(z=0);var M=Math.round(x.glyphAngle/(2*Math.PI)*256),L=e.prepareSegment(4),A=L.vertexLength;addVertex(u,I.x,I.y,g.x,g.y,S.x,S.y,a,z,B,p,M),addVertex(u,I.x,I.y,f.x,f.y,S.x+S.w,S.y,a,z,B,p,M),addVertex(u,I.x,I.y,b.x,b.y,S.x,S.y+S.h,a,z,B,p,M),addVertex(u,I.x,I.y,v.x,v.y,S.x+S.w,S.y+S.h,a,z,B,p,M),c.emplaceBack(A,A+1,A+2),c.emplaceBack(A+1,A+2,A+3),L.vertexLength+=4,L.primitiveLength+=2}}e.populatePaintArrays(s)},SymbolBucket.prototype.addToDebugBuffers=function(e){for(var t=this,o=this.arrays.collisionBox,a=o.layoutVertexArray,i=o.elementArray,r=-e.angle,n=e.yStretch,s=0,l=t.symbolInstances;s<l.length;s+=1){var c=l[s];c.textCollisionFeature={boxStartIndex:c.textBoxStartIndex,boxEndIndex:c.textBoxEndIndex},c.iconCollisionFeature={boxStartIndex:c.iconBoxStartIndex,boxEndIndex:c.iconBoxEndIndex};for(var u=0;u<2;u++){var y=c[0===u?"textCollisionFeature":"iconCollisionFeature"];if(y)for(var p=y.boxStartIndex;p<y.boxEndIndex;p++){var m=t.collisionBoxArray.get(p),h=m.anchorPoint,x=new Point(m.x1,m.y1*n)._rotate(r),d=new Point(m.x2,m.y1*n)._rotate(r),g=new Point(m.x1,m.y2*n)._rotate(r),f=new Point(m.x2,m.y2*n)._rotate(r),b=Math.max(0,Math.min(25,t.zoom+Math.log(m.maxScale)/Math.LN2)),v=Math.max(0,Math.min(25,t.zoom+Math.log(m.placementScale)/Math.LN2)),S=o.prepareSegment(4),I=S.vertexLength;addCollisionBoxVertex(a,h,x,b,v),addCollisionBoxVertex(a,h,d,b,v),addCollisionBoxVertex(a,h,f,b,v),addCollisionBoxVertex(a,h,g,b,v),i.emplaceBack(I,I+1),i.emplaceBack(I+1,I+2),i.emplaceBack(I+2,I+3),i.emplaceBack(I+3,I),S.vertexLength+=4,S.primitiveLength+=4}}}},SymbolBucket.prototype.addSymbolInstance=function(e,t,o,a,i,r,n,s,l,c,u,y,p,m,h,x,d,g){var f,b,v=[],S=[];for(var I in o){var z=parseInt(I,10);o[z]&&(S=S.concat(r?getGlyphQuads(e,o[z],u,t,i,p,d,g):[]),f=new CollisionFeature(n,t,e,s,l,c,o[z],u,y,p,!1))}var B=f?f.boxStartIndex:this.collisionBoxArray.length,M=f?f.boxEndIndex:this.collisionBoxArray.length;a&&(v=r?getIconQuads(e,a,m,t,i,x,o[WritingMode.horizontal],d,g):[],b=new CollisionFeature(n,t,e,s,l,c,a,m,h,x,!0));var L=b?b.boxStartIndex:this.collisionBoxArray.length,A=b?b.boxEndIndex:this.collisionBoxArray.length;M>SymbolBucket.MAX_INSTANCES&&util.warnOnce("Too many symbols being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907"),A>SymbolBucket.MAX_INSTANCES&&util.warnOnce("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907");var T=(o[WritingMode.vertical]?WritingMode.vertical:0)|(o[WritingMode.horizontal]?WritingMode.horizontal:0);this.symbolInstances.push({textBoxStartIndex:B,textBoxEndIndex:M,iconBoxStartIndex:L,iconBoxEndIndex:A,glyphQuads:S,iconQuads:v,anchor:e,featureIndex:s,featureProperties:g,writingModes:T})},SymbolBucket.programInterfaces=symbolInterfaces,SymbolBucket.MAX_INSTANCES=65535,module.exports=SymbolBucket;
},{"../../shaders/encode_attribute":81,"../../symbol/anchor":159,"../../symbol/clip_line":161,"../../symbol/collision_feature":163,"../../symbol/get_anchors":165,"../../symbol/mergelines":168,"../../symbol/quads":169,"../../symbol/shaping":170,"../../symbol/transform_text":172,"../../util/classify_rings":197,"../../util/find_pole_of_inaccessibility":203,"../../util/script_detection":211,"../../util/token":213,"../../util/util":214,"../array_group":44,"../buffer_group":52,"../element_array_type":53,"../extent":54,"../load_geometry":56,"point-geometry":26,"vector-tile":34}],51:[function(_dereq_,module,exports){
"use strict";var AttributeType={Int8:"BYTE",Uint8:"UNSIGNED_BYTE",Int16:"SHORT",Uint16:"UNSIGNED_SHORT"},Buffer=function(t,e,r){this.arrayBuffer=t.arrayBuffer,this.length=t.length,this.attributes=e.members,this.itemSize=e.bytesPerElement,this.type=r,this.arrayType=e};Buffer.fromStructArray=function(t,e){return new Buffer(t.serialize(),t.constructor.serialize(),e)},Buffer.prototype.bind=function(t){var e=t[this.type];this.buffer?t.bindBuffer(e,this.buffer):(this.gl=t,this.buffer=t.createBuffer(),t.bindBuffer(e,this.buffer),t.bufferData(e,this.arrayBuffer,t.STATIC_DRAW),this.arrayBuffer=null)},Buffer.prototype.enableAttributes=function(t,e){for(var r=this,f=0;f<this.attributes.length;f++){var i=r.attributes[f],u=e[i.name];void 0!==u&&t.enableVertexAttribArray(u)}},Buffer.prototype.setVertexAttribPointers=function(t,e,r){for(var f=this,i=0;i<this.attributes.length;i++){var u=f.attributes[i],s=e[u.name];void 0!==s&&t.vertexAttribPointer(s,u.components,t[AttributeType[u.type]],!1,f.arrayType.bytesPerElement,u.offset+(f.arrayType.bytesPerElement*r||0))}},Buffer.prototype.destroy=function(){this.buffer&&this.gl.deleteBuffer(this.buffer)},Buffer.BufferType={VERTEX:"ARRAY_BUFFER",ELEMENT:"ELEMENT_ARRAY_BUFFER"},module.exports=Buffer;
},{}],52:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util"),Buffer=_dereq_("./buffer"),ProgramConfiguration=_dereq_("./program_configuration"),createVertexArrayType=_dereq_("./vertex_array_type"),VertexArrayObject=_dereq_("../render/vertex_array_object"),BufferGroup=function(e,r,t,a){var f=this,u=createVertexArrayType(e.layoutAttributes);this.layoutVertexBuffer=new Buffer(a.layoutVertexArray,u.serialize(),Buffer.BufferType.VERTEX),a.elementArray&&(this.elementBuffer=new Buffer(a.elementArray,e.elementArrayType.serialize(),Buffer.BufferType.ELEMENT)),a.elementArray2&&(this.elementBuffer2=new Buffer(a.elementArray2,e.elementArrayType2.serialize(),Buffer.BufferType.ELEMENT)),this.layerData={};for(var n=0,i=r;n<i.length;n+=1){var s=i[n],o=a.paintVertexArrays&&a.paintVertexArrays[s.id],y=ProgramConfiguration.createDynamic(e.paintAttributes||[],s,t),l=o?new Buffer(o.array,o.type,Buffer.BufferType.VERTEX):null;f.layerData[s.id]={programConfiguration:y,paintVertexBuffer:l}}this.segments=a.segments,this.segments2=a.segments2;for(var m=0,B=[f.segments,f.segments2];m<B.length;m+=1)for(var p=B[m],g=0,v=p||[];g<v.length;g+=1){var h=v[g];h.vaos=util.mapObject(f.layerData,function(){return new VertexArrayObject})}};BufferGroup.prototype.destroy=function(){var e=this;this.layoutVertexBuffer.destroy(),this.elementBuffer&&this.elementBuffer.destroy(),this.elementBuffer2&&this.elementBuffer2.destroy();for(var r in e.layerData){var t=e.layerData[r].paintVertexBuffer;t&&t.destroy()}for(var a=0,f=[e.segments,e.segments2];a<f.length;a+=1)for(var u=f[a],n=0,i=u||[];n<i.length;n+=1){var s=i[n];for(var o in s.vaos)s.vaos[o].destroy()}},module.exports=BufferGroup;
},{"../render/vertex_array_object":80,"../util/util":214,"./buffer":51,"./program_configuration":58,"./vertex_array_type":60}],53:[function(_dereq_,module,exports){
"use strict";function createElementArrayType(e){return createStructArrayType({members:[{type:"Uint16",name:"vertices",components:e||3}]})}var createStructArrayType=_dereq_("../util/struct_array");module.exports=createElementArrayType;
},{"../util/struct_array":212}],54:[function(_dereq_,module,exports){
"use strict";module.exports=8192;
},{}],55:[function(_dereq_,module,exports){
"use strict";function translateDistance(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}function topDownFeatureComparator(e,t){return t-e}function getLineWidth(e,t){return t>0?t+2*e:e}function translate(e,t,r,i,a){if(!t[0]&&!t[1])return e;t=Point.convert(t),"viewport"===r&&t._rotate(-i);for(var n=[],s=0;s<e.length;s++){for(var o=e[s],l=[],u=0;u<o.length;u++)l.push(o[u].sub(t._mult(a)));n.push(l)}return n}function offsetLine(e,t){for(var r=[],i=new Point(0,0),a=0;a<e.length;a++){for(var n=e[a],s=[],o=0;o<n.length;o++){var l=n[o-1],u=n[o],c=n[o+1],y=0===o?i:u.sub(l)._unit()._perp(),f=o===n.length-1?i:c.sub(u)._unit()._perp(),h=y._add(f)._unit(),d=h.x*f.x+h.y*f.y;h._mult(1/d),s.push(h._mult(t)._add(u))}r.push(s)}return r}var Point=_dereq_("point-geometry"),loadGeometry=_dereq_("./load_geometry"),EXTENT=_dereq_("./extent"),featureFilter=_dereq_("../style-spec/feature_filter"),createStructArrayType=_dereq_("../util/struct_array"),Grid=_dereq_("grid-index"),DictionaryCoder=_dereq_("../util/dictionary_coder"),vt=_dereq_("vector-tile"),Protobuf=_dereq_("pbf"),GeoJSONFeature=_dereq_("../util/vectortile_to_geojson"),arraysIntersect=_dereq_("../util/util").arraysIntersect,intersection=_dereq_("../util/intersection_tests"),multiPolygonIntersectsBufferedMultiPoint=intersection.multiPolygonIntersectsBufferedMultiPoint,multiPolygonIntersectsMultiPolygon=intersection.multiPolygonIntersectsMultiPolygon,multiPolygonIntersectsBufferedMultiLine=intersection.multiPolygonIntersectsBufferedMultiLine,FeatureIndexArray=createStructArrayType({members:[{type:"Uint32",name:"featureIndex"},{type:"Uint16",name:"sourceLayerIndex"},{type:"Uint16",name:"bucketIndex"}]}),FeatureIndex=function(e,t,r){if(e.grid){var i=e,a=t;e=i.coord,t=i.overscaling,this.grid=new Grid(i.grid),this.featureIndexArray=new FeatureIndexArray(i.featureIndexArray),this.rawTileData=a,this.bucketLayerIDs=i.bucketLayerIDs,this.paintPropertyStatistics=i.paintPropertyStatistics}else this.grid=new Grid(EXTENT,16,0),this.featureIndexArray=new FeatureIndexArray;this.coord=e,this.overscaling=t,this.x=e.x,this.y=e.y,this.z=e.z-Math.log(t)/Math.LN2,this.setCollisionTile(r)};FeatureIndex.prototype.insert=function(e,t){var r=this,i=this.featureIndexArray.length;this.featureIndexArray.emplaceBack(e.index,e.sourceLayerIndex,t);for(var a=loadGeometry(e),n=0;n<a.length;n++){for(var s=a[n],o=[1/0,1/0,-(1/0),-(1/0)],l=0;l<s.length;l++){var u=s[l];o[0]=Math.min(o[0],u.x),o[1]=Math.min(o[1],u.y),o[2]=Math.max(o[2],u.x),o[3]=Math.max(o[3],u.y)}r.grid.insert(i,o[0],o[1],o[2],o[3])}},FeatureIndex.prototype.setCollisionTile=function(e){this.collisionTile=e},FeatureIndex.prototype.serialize=function(e){var t=this.grid.toArrayBuffer();return e&&e.push(t),{coord:this.coord,overscaling:this.overscaling,grid:t,featureIndexArray:this.featureIndexArray.serialize(e),bucketLayerIDs:this.bucketLayerIDs,paintPropertyStatistics:this.paintPropertyStatistics}},FeatureIndex.prototype.query=function(e,t){var r=this;this.vtLayers||(this.vtLayers=new vt.VectorTile(new Protobuf(this.rawTileData)).layers,this.sourceLayerCoder=new DictionaryCoder(this.vtLayers?Object.keys(this.vtLayers).sort():["_geojsonTileLayer"]));var i={},a=e.params||{},n=EXTENT/e.tileSize/e.scale,s=featureFilter(a.filter),o=0;for(var l in t)if(r.hasLayer(l)){var u=t[l],c=0;if("line"===u.type){var y=getLineWidth(r.getPaintValue("line-width",u),r.getPaintValue("line-gap-width",u)),f=r.getPaintValue("line-offset",u),h=r.getPaintValue("line-translate",u);c=y/2+Math.abs(f)+translateDistance(h)}else"fill"===u.type?c=translateDistance(r.getPaintValue("fill-translate",u)):"fill-extrusion"===u.type?c=translateDistance(r.getPaintValue("fill-extrusion-translate",u)):"circle"===u.type&&(c=r.getPaintValue("circle-radius",u)+translateDistance(r.getPaintValue("circle-translate",u)));o=Math.max(o,c*n)}for(var d=e.queryGeometry.map(function(e){return e.map(function(e){return new Point(e.x,e.y)})}),g=1/0,p=1/0,v=-(1/0),x=-(1/0),P=0;P<d.length;P++)for(var I=d[P],m=0;m<I.length;m++){var L=I[m];g=Math.min(g,L.x),p=Math.min(p,L.y),v=Math.max(v,L.x),x=Math.max(x,L.y)}var M=this.grid.query(g-o,p-o,v+o,x+o);M.sort(topDownFeatureComparator),this.filterMatching(i,M,this.featureIndexArray,d,s,a.layers,t,e.bearing,n);var b=this.collisionTile.queryRenderedSymbols(d,e.scale);return b.sort(),this.filterMatching(i,b,this.collisionTile.collisionBoxArray,d,s,a.layers,t,e.bearing,n),i},FeatureIndex.prototype.filterMatching=function(e,t,r,i,a,n,s,o,l){for(var u,c=this,y=0;y<t.length;y++){var f=t[y];if(f!==u){u=f;var h=r.get(f),d=c.bucketLayerIDs[h.bucketIndex];if(!n||arraysIntersect(n,d)){var g=c.sourceLayerCoder.decode(h.sourceLayerIndex),p=c.vtLayers[g],v=p.feature(h.featureIndex);if(a(v))for(var x=null,P=0;P<d.length;P++){var I=d[P];if(!(n&&n.indexOf(I)<0)){var m=s[I];if(m){var L=void 0;if("symbol"!==m.type)if(x||(x=loadGeometry(v)),"line"===m.type){L=translate(i,c.getPaintValue("line-translate",m,v),c.getPaintValue("line-translate-anchor",m,v),o,l);var M=l/2*getLineWidth(c.getPaintValue("line-width",m,v),c.getPaintValue("line-gap-width",m,v)),b=c.getPaintValue("line-offset",m,v);if(b&&(x=offsetLine(x,b*l)),!multiPolygonIntersectsBufferedMultiLine(L,x,M))continue}else if("fill"===m.type||"fill-extrusion"===m.type){var V=m.type;if(L=translate(i,c.getPaintValue(V+"-translate",m,v),c.getPaintValue(V+"-translate-anchor",m,v),o,l),!multiPolygonIntersectsMultiPolygon(L,x))continue}else if("circle"===m.type){L=translate(i,c.getPaintValue("circle-translate",m,v),c.getPaintValue("circle-translate-anchor",m,v),o,l);var w=c.getPaintValue("circle-radius",m,v)*l;if(!multiPolygonIntersectsBufferedMultiPoint(L,x,w))continue}var F=new GeoJSONFeature(v,c.z,c.x,c.y);F.layer=m.serialize();var _=e[I];void 0===_&&(_=e[I]=[]),_.push(F)}}}}}}},FeatureIndex.prototype.hasLayer=function(e){var t=this;for(var r in t.bucketLayerIDs)for(var i=0,a=t.bucketLayerIDs[r];i<a.length;i+=1){var n=a[i];if(e===n)return!0}return!1},FeatureIndex.prototype.getPaintValue=function(e,t,r){var i=t.isPaintValueFeatureConstant(e);if(i||r){var a=r?r.properties:{};return t.getPaintValue(e,{zoom:this.z},a)}return this.paintPropertyStatistics[t.id][e].max},module.exports=FeatureIndex;
},{"../style-spec/feature_filter":105,"../util/dictionary_coder":199,"../util/intersection_tests":207,"../util/struct_array":212,"../util/util":214,"../util/vectortile_to_geojson":215,"./extent":54,"./load_geometry":56,"grid-index":16,"pbf":25,"point-geometry":26,"vector-tile":34}],56:[function(_dereq_,module,exports){
"use strict";function createBounds(e){return{min:-1*Math.pow(2,e-1),max:Math.pow(2,e-1)-1}}var util=_dereq_("../util/util"),EXTENT=_dereq_("./extent"),boundsLookup={15:createBounds(15),16:createBounds(16)};module.exports=function(e,t){for(var r=boundsLookup[t||16],o=EXTENT/e.extent,u=e.loadGeometry(),n=0;n<u.length;n++)for(var a=u[n],i=0;i<a.length;i++){var d=a[i];d.x=Math.round(d.x*o),d.y=Math.round(d.y*o),(d.x<r.min||d.x>r.max||d.y<r.min||d.y>r.max)&&util.warnOnce("Geometry exceeds allowed extent, reduce your vector tile buffer size")}return u};
},{"../util/util":214,"./extent":54}],57:[function(_dereq_,module,exports){
"use strict";var createStructArrayType=_dereq_("../util/struct_array"),PosArray=createStructArrayType({members:[{name:"a_pos",type:"Int16",components:2}]});module.exports=PosArray;
},{"../util/struct_array":212}],58:[function(_dereq_,module,exports){
"use strict";function getPaintAttributeValue(t,r,e,i){if(!t.zoomStops)return r.getPaintValue(t.property,e,i);var a=t.zoomStops.map(function(a){return r.getPaintValue(t.property,util.extend({},e,{zoom:a}),i)});return 1===a.length?a[0]:a}function normalizePaintAttribute(t,r){var e=t.name;e||(e=t.property.replace(r.type+"-","").replace(/-/g,"_"));var i="color"===r._paintSpecifications[t.property].type;return util.extend({name:"a_"+e,components:i?4:1,multiplier:i?255:1,dimensions:i?4:1},t)}var createVertexArrayType=_dereq_("./vertex_array_type"),util=_dereq_("../util/util"),ProgramConfiguration=function(){this.attributes=[],this.uniforms=[],this.interpolationUniforms=[],this.pragmas={vertex:{},fragment:{}},this.cacheKey=""};ProgramConfiguration.createDynamic=function(t,r,e){for(var i=new ProgramConfiguration,a=0,n=t;a<n.length;a+=1){var o=n[a],p=normalizePaintAttribute(o,r),u=p.name.slice(2);r.isPaintValueFeatureConstant(p.property)?i.addZoomAttribute(u,p):r.isPaintValueZoomConstant(p.property)?i.addPropertyAttribute(u,p):i.addZoomAndPropertyAttribute(u,p,r,e)}return i.PaintVertexArray=createVertexArrayType(i.attributes),i},ProgramConfiguration.createStatic=function(t){for(var r=new ProgramConfiguration,e=0,i=t;e<i.length;e+=1){var a=i[e];r.addUniform(a,"u_"+a)}return r},ProgramConfiguration.prototype.addUniform=function(t,r){var e=this.getPragmas(t);e.define.push("uniform {precision} {type} "+r+";"),e.initialize.push("{precision} {type} "+t+" = "+r+";"),this.cacheKey+="/u_"+t},ProgramConfiguration.prototype.addZoomAttribute=function(t,r){this.uniforms.push(r),this.addUniform(t,r.name)},ProgramConfiguration.prototype.addPropertyAttribute=function(t,r){var e=this.getPragmas(t);this.attributes.push(r),e.define.push("varying {precision} {type} "+t+";"),e.vertex.define.push("attribute {precision} {type} "+r.name+";"),e.vertex.initialize.push(t+" = "+r.name+" / "+r.multiplier+".0;"),this.cacheKey+="/a_"+t},ProgramConfiguration.prototype.addZoomAndPropertyAttribute=function(t,r,e,i){var a=this,n=this.getPragmas(t);n.define.push("varying {precision} {type} "+t+";");var o=e.getPaintValueStopZoomLevels(r.property),p=0;if(o.length>4)for(;p<o.length-2&&o[p]<i;)p++;var u="u_"+t+"_t";n.vertex.define.push("uniform lowp float "+u+";"),this.interpolationUniforms.push({name:u,property:r.property,stopOffset:p});for(var s=[],m=0;m<4;m++)s.push(o[Math.min(p+m,o.length-1)]);var f=[];if(1===r.components)this.attributes.push(util.extend({},r,{components:4,zoomStops:s})),n.vertex.define.push("attribute {precision} vec4 "+r.name+";"),f.push(r.name);else for(var g=0;g<4;g++){var h=r.name+g;f.push(h),a.attributes.push(util.extend({},r,{name:h,zoomStops:[s[g]]})),n.vertex.define.push("attribute {precision} {type} "+h+";")}n.vertex.initialize.push(t+" = evaluate_zoom_function_"+r.components+"(            "+f.join(", ")+", "+u+") / "+r.multiplier+".0;"),this.cacheKey+="/z_"+t},ProgramConfiguration.prototype.getPragmas=function(t){return this.pragmas[t]||(this.pragmas[t]={define:[],initialize:[]},this.pragmas[t].fragment={define:[],initialize:[]},this.pragmas[t].vertex={define:[],initialize:[]}),this.pragmas[t]},ProgramConfiguration.prototype.applyPragmas=function(t,r){var e=this;return t.replace(/#pragma mapbox: ([\w]+) ([\w]+) ([\w]+) ([\w]+)/g,function(t,i,a,n,o){return e.pragmas[o][i].concat(e.pragmas[o][r][i]).join("\n").replace(/{type}/g,n).replace(/{precision}/g,a)})},ProgramConfiguration.prototype.createPaintPropertyStatistics=function(){for(var t=this,r={},e=0,i=t.attributes;e<i.length;e+=1){var a=i[e];1===a.dimensions&&(r[a.property]={max:-(1/0)})}return r},ProgramConfiguration.prototype.populatePaintArray=function(t,r,e,i,a,n){var o=this,p=r.length;r.resize(i);for(var u=0,s=o.attributes;u<s.length;u+=1)for(var m=s[u],f=getPaintAttributeValue(m,t,a,n),g=p;g<i;g++){var h=r.get(g);if(4===m.components)for(var l=0;l<4;l++)h[m.name+l]=f[l]*m.multiplier;else h[m.name]=f*m.multiplier;if(1===m.dimensions){var c=e[m.property];c.max=Math.max(c.max,1===m.components?f:Math.max.apply(Math,f))}}},ProgramConfiguration.prototype.setUniforms=function(t,r,e,i){for(var a=this,n=0,o=a.uniforms;n<o.length;n+=1){var p=o[n],u=e.getPaintValue(p.property,i);4===p.components?t.uniform4fv(r[p.name],u):t.uniform1f(r[p.name],u)}for(var s=0,m=a.interpolationUniforms;s<m.length;s+=1){var f=m[s],g=e.getPaintInterpolationT(f.property,i);t.uniform1f(r[f.name],Math.max(0,Math.min(3,g-f.stopOffset)))}},module.exports=ProgramConfiguration;
},{"../util/util":214,"./vertex_array_type":60}],59:[function(_dereq_,module,exports){
"use strict";var createStructArrayType=_dereq_("../util/struct_array"),RasterBoundsArray=createStructArrayType({members:[{name:"a_pos",type:"Int16",components:2},{name:"a_texture_pos",type:"Int16",components:2}]});module.exports=RasterBoundsArray;
},{"../util/struct_array":212}],60:[function(_dereq_,module,exports){
"use strict";function createVertexArrayType(r){return createStructArrayType({members:r,alignment:4})}var createStructArrayType=_dereq_("../util/struct_array");module.exports=createVertexArrayType;
},{"../util/struct_array":212}],61:[function(_dereq_,module,exports){
"use strict";var Coordinate=function(o,t,n){this.column=o,this.row=t,this.zoom=n};Coordinate.prototype.clone=function(){return new Coordinate(this.column,this.row,this.zoom)},Coordinate.prototype.zoomTo=function(o){return this.clone()._zoomTo(o)},Coordinate.prototype.sub=function(o){return this.clone()._sub(o)},Coordinate.prototype._zoomTo=function(o){var t=Math.pow(2,o-this.zoom);return this.column*=t,this.row*=t,this.zoom=o,this},Coordinate.prototype._sub=function(o){return o=o.zoomTo(this.zoom),this.column-=o.column,this.row-=o.row,this},module.exports=Coordinate;
},{}],62:[function(_dereq_,module,exports){
"use strict";var wrap=_dereq_("../util/util").wrap,LngLat=function(t,n){if(isNaN(t)||isNaN(n))throw new Error("Invalid LngLat object: ("+t+", "+n+")");if(this.lng=+t,this.lat=+n,this.lat>90||this.lat<-90)throw new Error("Invalid LngLat latitude value: must be between -90 and 90")};LngLat.prototype.wrap=function(){return new LngLat(wrap(this.lng,-180,180),this.lat)},LngLat.prototype.wrapToBestWorld=function(t){var n=new LngLat(this.lng,this.lat);return Math.abs(this.lng-t.lng)>180&&(t.lng<0?n.lng-=360:n.lng+=360),n},LngLat.prototype.toArray=function(){return[this.lng,this.lat]},LngLat.prototype.toString=function(){return"LngLat("+this.lng+", "+this.lat+")"},LngLat.convert=function(t){if(t instanceof LngLat)return t;if(t&&t.hasOwnProperty("lng")&&t.hasOwnProperty("lat"))return new LngLat(t.lng,t.lat);if(Array.isArray(t)&&2===t.length)return new LngLat(t[0],t[1]);throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")},module.exports=LngLat;
},{"../util/util":214}],63:[function(_dereq_,module,exports){
"use strict";var LngLat=_dereq_("./lng_lat"),LngLatBounds=function(t,n){t&&(n?this.setSouthWest(t).setNorthEast(n):4===t.length?this.setSouthWest([t[0],t[1]]).setNorthEast([t[2],t[3]]):this.setSouthWest(t[0]).setNorthEast(t[1]))};LngLatBounds.prototype.setNorthEast=function(t){return this._ne=LngLat.convert(t),this},LngLatBounds.prototype.setSouthWest=function(t){return this._sw=LngLat.convert(t),this},LngLatBounds.prototype.extend=function(t){var n,e,s=this._sw,o=this._ne;if(t instanceof LngLat)n=t,e=t;else{if(!(t instanceof LngLatBounds))return Array.isArray(t)?t.every(Array.isArray)?this.extend(LngLatBounds.convert(t)):this.extend(LngLat.convert(t)):this;if(n=t._sw,e=t._ne,!n||!e)return this}return s||o?(s.lng=Math.min(n.lng,s.lng),s.lat=Math.min(n.lat,s.lat),o.lng=Math.max(e.lng,o.lng),o.lat=Math.max(e.lat,o.lat)):(this._sw=new LngLat(n.lng,n.lat),this._ne=new LngLat(e.lng,e.lat)),this},LngLatBounds.prototype.getCenter=function(){return new LngLat((this._sw.lng+this._ne.lng)/2,(this._sw.lat+this._ne.lat)/2)},LngLatBounds.prototype.getSouthWest=function(){return this._sw},LngLatBounds.prototype.getNorthEast=function(){return this._ne},LngLatBounds.prototype.getNorthWest=function(){return new LngLat(this.getWest(),this.getNorth())},LngLatBounds.prototype.getSouthEast=function(){return new LngLat(this.getEast(),this.getSouth())},LngLatBounds.prototype.getWest=function(){return this._sw.lng},LngLatBounds.prototype.getSouth=function(){return this._sw.lat},LngLatBounds.prototype.getEast=function(){return this._ne.lng},LngLatBounds.prototype.getNorth=function(){return this._ne.lat},LngLatBounds.prototype.toArray=function(){return[this._sw.toArray(),this._ne.toArray()]},LngLatBounds.prototype.toString=function(){return"LngLatBounds("+this._sw.toString()+", "+this._ne.toString()+")"},LngLatBounds.convert=function(t){return!t||t instanceof LngLatBounds?t:new LngLatBounds(t)},module.exports=LngLatBounds;
},{"./lng_lat":62}],64:[function(_dereq_,module,exports){
"use strict";var LngLat=_dereq_("./lng_lat"),Point=_dereq_("point-geometry"),Coordinate=_dereq_("./coordinate"),util=_dereq_("../util/util"),interp=_dereq_("../util/interpolate"),TileCoord=_dereq_("../source/tile_coord"),EXTENT=_dereq_("../data/extent"),glmatrix=_dereq_("@mapbox/gl-matrix"),vec4=glmatrix.vec4,mat4=glmatrix.mat4,mat2=glmatrix.mat2,Transform=function(t,i,o){this.tileSize=512,this._renderWorldCopies=void 0===o||o,this._minZoom=t||0,this._maxZoom=i||22,this.latRange=[-85.05113,85.05113],this.width=0,this.height=0,this._center=new LngLat(0,0),this.zoom=0,this.angle=0,this._fov=.6435011087932844,this._pitch=0,this._unmodified=!0},prototypeAccessors={minZoom:{},maxZoom:{},renderWorldCopies:{},worldSize:{},centerPoint:{},size:{},bearing:{},pitch:{},fov:{},zoom:{},center:{},unmodified:{},x:{},y:{},point:{}};prototypeAccessors.minZoom.get=function(){return this._minZoom},prototypeAccessors.minZoom.set=function(t){this._minZoom!==t&&(this._minZoom=t,this.zoom=Math.max(this.zoom,t))},prototypeAccessors.maxZoom.get=function(){return this._maxZoom},prototypeAccessors.maxZoom.set=function(t){this._maxZoom!==t&&(this._maxZoom=t,this.zoom=Math.min(this.zoom,t))},prototypeAccessors.renderWorldCopies.get=function(){return this._renderWorldCopies},prototypeAccessors.worldSize.get=function(){return this.tileSize*this.scale},prototypeAccessors.centerPoint.get=function(){return this.size._div(2)},prototypeAccessors.size.get=function(){return new Point(this.width,this.height)},prototypeAccessors.bearing.get=function(){return-this.angle/Math.PI*180},prototypeAccessors.bearing.set=function(t){var i=-util.wrap(t,-180,180)*Math.PI/180;this.angle!==i&&(this._unmodified=!1,this.angle=i,this._calcMatrices(),this.rotationMatrix=mat2.create(),mat2.rotate(this.rotationMatrix,this.rotationMatrix,this.angle))},prototypeAccessors.pitch.get=function(){return this._pitch/Math.PI*180},prototypeAccessors.pitch.set=function(t){var i=util.clamp(t,0,60)/180*Math.PI;this._pitch!==i&&(this._unmodified=!1,this._pitch=i,this._calcMatrices())},prototypeAccessors.fov.get=function(){return this._fov/Math.PI*180},prototypeAccessors.fov.set=function(t){t=Math.max(.01,Math.min(60,t)),this._fov!==t&&(this._unmodified=!1,this._fov=t/180*Math.PI,this._calcMatrices())},prototypeAccessors.zoom.get=function(){return this._zoom},prototypeAccessors.zoom.set=function(t){var i=Math.min(Math.max(t,this.minZoom),this.maxZoom);this._zoom!==i&&(this._unmodified=!1,this._zoom=i,this.scale=this.zoomScale(i),this.tileZoom=Math.floor(i),this.zoomFraction=i-this.tileZoom,this._constrain(),this._calcMatrices())},prototypeAccessors.center.get=function(){return this._center},prototypeAccessors.center.set=function(t){t.lat===this._center.lat&&t.lng===this._center.lng||(this._unmodified=!1,this._center=t,this._constrain(),this._calcMatrices())},Transform.prototype.coveringZoomLevel=function(t){return(t.roundZoom?Math.round:Math.floor)(this.zoom+this.scaleZoom(this.tileSize/t.tileSize))},Transform.prototype.getVisibleWrappedCoordinates=function(t){for(var i=this.pointCoordinate(new Point(0,0),0),o=this.pointCoordinate(new Point(this.width,0),0),e=Math.floor(i.column),r=Math.floor(o.column),n=[t],s=e;s<=r;s++)0!==s&&n.push(new TileCoord(t.z,t.x,t.y,s));return n},Transform.prototype.coveringTiles=function(t){var i=this.coveringZoomLevel(t),o=i;if(i<t.minzoom)return[];i>t.maxzoom&&(i=t.maxzoom);var e=this.pointCoordinate(this.centerPoint,i),r=new Point(e.column-.5,e.row-.5),n=[this.pointCoordinate(new Point(0,0),i),this.pointCoordinate(new Point(this.width,0),i),this.pointCoordinate(new Point(this.width,this.height),i),this.pointCoordinate(new Point(0,this.height),i)];return TileCoord.cover(i,n,t.reparseOverscaled?o:i,this._renderWorldCopies).sort(function(t,i){return r.dist(t)-r.dist(i)})},Transform.prototype.resize=function(t,i){this.width=t,this.height=i,this.pixelsToGLUnits=[2/t,-2/i],this._constrain(),this._calcMatrices()},prototypeAccessors.unmodified.get=function(){return this._unmodified},Transform.prototype.zoomScale=function(t){return Math.pow(2,t)},Transform.prototype.scaleZoom=function(t){return Math.log(t)/Math.LN2},Transform.prototype.project=function(t){return new Point(this.lngX(t.lng),this.latY(t.lat))},Transform.prototype.unproject=function(t){return new LngLat(this.xLng(t.x),this.yLat(t.y))},prototypeAccessors.x.get=function(){return this.lngX(this.center.lng)},prototypeAccessors.y.get=function(){return this.latY(this.center.lat)},prototypeAccessors.point.get=function(){return new Point(this.x,this.y)},Transform.prototype.lngX=function(t){return(180+t)*this.worldSize/360},Transform.prototype.latY=function(t){var i=180/Math.PI*Math.log(Math.tan(Math.PI/4+t*Math.PI/360));return(180-i)*this.worldSize/360},Transform.prototype.xLng=function(t){return 360*t/this.worldSize-180},Transform.prototype.yLat=function(t){var i=180-360*t/this.worldSize;return 360/Math.PI*Math.atan(Math.exp(i*Math.PI/180))-90},Transform.prototype.setLocationAtPoint=function(t,i){var o=this.pointCoordinate(i)._sub(this.pointCoordinate(this.centerPoint));this.center=this.coordinateLocation(this.locationCoordinate(t)._sub(o)),this._renderWorldCopies&&(this.center=this.center.wrap())},Transform.prototype.locationPoint=function(t){return this.coordinatePoint(this.locationCoordinate(t))},Transform.prototype.pointLocation=function(t){return this.coordinateLocation(this.pointCoordinate(t))},Transform.prototype.locationCoordinate=function(t){return new Coordinate(this.lngX(t.lng)/this.tileSize,this.latY(t.lat)/this.tileSize,this.zoom).zoomTo(this.tileZoom)},Transform.prototype.coordinateLocation=function(t){var i=t.zoomTo(this.zoom);return new LngLat(this.xLng(i.column*this.tileSize),this.yLat(i.row*this.tileSize))},Transform.prototype.pointCoordinate=function(t,i){void 0===i&&(i=this.tileZoom);var o=0,e=[t.x,t.y,0,1],r=[t.x,t.y,1,1];vec4.transformMat4(e,e,this.pixelMatrixInverse),vec4.transformMat4(r,r,this.pixelMatrixInverse);var n=e[3],s=r[3],a=e[0]/n,h=r[0]/s,c=e[1]/n,m=r[1]/s,p=e[2]/n,l=r[2]/s,u=p===l?0:(o-p)/(l-p);return new Coordinate(interp(a,h,u)/this.tileSize,interp(c,m,u)/this.tileSize,this.zoom)._zoomTo(i)},Transform.prototype.coordinatePoint=function(t){var i=t.zoomTo(this.zoom),o=[i.column*this.tileSize,i.row*this.tileSize,0,1];return vec4.transformMat4(o,o,this.pixelMatrix),new Point(o[0]/o[3],o[1]/o[3])},Transform.prototype.calculatePosMatrix=function(t,i){var o=t.toCoordinate(i),e=this.worldSize/this.zoomScale(o.zoom),r=mat4.identity(new Float64Array(16));return mat4.translate(r,r,[o.column*e,o.row*e,0]),mat4.scale(r,r,[e/EXTENT,e/EXTENT,1]),mat4.multiply(r,this.projMatrix,r),new Float32Array(r)},Transform.prototype._constrain=function(){if(this.center&&this.width&&this.height&&!this._constraining){this._constraining=!0;var t,i,o,e,r,n,s,a,h=this.size,c=this._unmodified;this.latRange&&(t=this.latY(this.latRange[1]),i=this.latY(this.latRange[0]),r=i-t<h.y?h.y/(i-t):0),this.lngRange&&(o=this.lngX(this.lngRange[0]),e=this.lngX(this.lngRange[1]),n=e-o<h.x?h.x/(e-o):0);var m=Math.max(n||0,r||0);if(m)return this.center=this.unproject(new Point(n?(e+o)/2:this.x,r?(i+t)/2:this.y)),this.zoom+=this.scaleZoom(m),this._unmodified=c,void(this._constraining=!1);if(this.latRange){var p=this.y,l=h.y/2;p-l<t&&(a=t+l),p+l>i&&(a=i-l)}if(this.lngRange){var u=this.x,f=h.x/2;u-f<o&&(s=o+f),u+f>e&&(s=e-f)}void 0===s&&void 0===a||(this.center=this.unproject(new Point(void 0!==s?s:this.x,void 0!==a?a:this.y))),this._unmodified=c,this._constraining=!1}},Transform.prototype._calcMatrices=function(){if(this.height){this.cameraToCenterDistance=.5/Math.tan(this._fov/2)*this.height;var t=this._fov/2,i=Math.PI/2+this._pitch,o=Math.sin(t)*this.cameraToCenterDistance/Math.sin(Math.PI-i-t),e=Math.cos(Math.PI/2-this._pitch)*o+this.cameraToCenterDistance,r=1.01*e,n=new Float64Array(16);mat4.perspective(n,this._fov,this.width/this.height,1,r),mat4.scale(n,n,[1,-1,1]),mat4.translate(n,n,[0,0,-this.cameraToCenterDistance]),mat4.rotateX(n,n,this._pitch),mat4.rotateZ(n,n,this.angle),mat4.translate(n,n,[-this.x,-this.y,0]);var s=this.worldSize/(2*Math.PI*6378137*Math.abs(Math.cos(this.center.lat*(Math.PI/180))));if(mat4.scale(n,n,[1,1,s,1]),this.projMatrix=n,n=mat4.create(),mat4.scale(n,n,[this.width/2,-this.height/2,1]),mat4.translate(n,n,[1,-1,0]),this.pixelMatrix=mat4.multiply(new Float64Array(16),n,this.projMatrix),n=mat4.invert(new Float64Array(16),this.pixelMatrix),!n)throw new Error("failed to invert matrix");this.pixelMatrixInverse=n}},Object.defineProperties(Transform.prototype,prototypeAccessors),module.exports=Transform;
},{"../data/extent":54,"../source/tile_coord":96,"../util/interpolate":206,"../util/util":214,"./coordinate":61,"./lng_lat":62,"@mapbox/gl-matrix":1,"point-geometry":26}],65:[function(_dereq_,module,exports){
"use strict";var browser=_dereq_("./util/browser"),mapboxgl=module.exports={};mapboxgl.version=_dereq_("../package.json").version,mapboxgl.workerCount=Math.max(Math.floor(browser.hardwareConcurrency/2),1),mapboxgl.Map=_dereq_("./ui/map"),mapboxgl.NavigationControl=_dereq_("./ui/control/navigation_control"),mapboxgl.GeolocateControl=_dereq_("./ui/control/geolocate_control"),mapboxgl.AttributionControl=_dereq_("./ui/control/attribution_control"),mapboxgl.ScaleControl=_dereq_("./ui/control/scale_control"),mapboxgl.FullscreenControl=_dereq_("./ui/control/fullscreen_control"),mapboxgl.Popup=_dereq_("./ui/popup"),mapboxgl.Marker=_dereq_("./ui/marker"),mapboxgl.Style=_dereq_("./style/style"),mapboxgl.LngLat=_dereq_("./geo/lng_lat"),mapboxgl.LngLatBounds=_dereq_("./geo/lng_lat_bounds"),mapboxgl.Point=_dereq_("point-geometry"),mapboxgl.Evented=_dereq_("./util/evented"),mapboxgl.supported=_dereq_("./util/browser").supported;var config=_dereq_("./util/config");mapboxgl.config=config;var rtlTextPlugin=_dereq_("./source/rtl_text_plugin");mapboxgl.setRTLTextPlugin=rtlTextPlugin.setRTLTextPlugin,Object.defineProperty(mapboxgl,"accessToken",{get:function(){return config.ACCESS_TOKEN},set:function(o){config.ACCESS_TOKEN=o}});
},{"../package.json":43,"./geo/lng_lat":62,"./geo/lng_lat_bounds":63,"./source/rtl_text_plugin":91,"./style/style":148,"./ui/control/attribution_control":175,"./ui/control/fullscreen_control":176,"./ui/control/geolocate_control":177,"./ui/control/navigation_control":179,"./ui/control/scale_control":180,"./ui/map":189,"./ui/marker":190,"./ui/popup":191,"./util/browser":194,"./util/config":198,"./util/evented":202,"point-geometry":26}],66:[function(_dereq_,module,exports){
"use strict";function drawBackground(r,t,e){var a=r.gl,i=r.transform,n=i.tileSize,o=e.paint["background-color"],l=e.paint["background-pattern"],u=e.paint["background-opacity"],f=!l&&1===o[3]&&1===u;if(r.isOpaquePass===f){a.disable(a.STENCIL_TEST),r.setDepthSublayer(0);var s;l?(s=r.useProgram("fillPattern",r.basicFillProgramConfiguration),pattern.prepare(l,r,s),r.tileExtentPatternVAO.bind(a,s,r.tileExtentBuffer)):(s=r.useProgram("fill",r.basicFillProgramConfiguration),a.uniform4fv(s.u_color,o),r.tileExtentVAO.bind(a,s,r.tileExtentBuffer)),a.uniform1f(s.u_opacity,u);for(var c=i.coveringTiles({tileSize:n}),g=0,p=c;g<p.length;g+=1){var d=p[g];l&&pattern.setTile({coord:d,tileSize:n},r,s),a.uniformMatrix4fv(s.u_matrix,!1,r.transform.calculatePosMatrix(d)),a.drawArrays(a.TRIANGLE_STRIP,0,r.tileExtentBuffer.length)}}}var pattern=_dereq_("./pattern");module.exports=drawBackground;
},{"./pattern":78}],67:[function(_dereq_,module,exports){
"use strict";function drawCircles(e,r,t,a){if(!e.isOpaquePass){var i=e.gl;e.setDepthSublayer(0),e.depthMask(!1),i.disable(i.STENCIL_TEST);for(var s=0;s<a.length;s++){var o=a[s],n=r.getTile(o),f=n.getBucket(t);if(f){var l=f.buffers,m=l.layerData[t.id],u=m.programConfiguration,c=e.useProgram("circle",u);u.setUniforms(i,c,t,{zoom:e.transform.zoom}),"map"===t.paint["circle-pitch-scale"]?(i.uniform1i(c.u_scale_with_map,!0),i.uniform2f(c.u_extrude_scale,e.transform.pixelsToGLUnits[0]*e.transform.cameraToCenterDistance,e.transform.pixelsToGLUnits[1]*e.transform.cameraToCenterDistance)):(i.uniform1i(c.u_scale_with_map,!1),i.uniform2fv(c.u_extrude_scale,e.transform.pixelsToGLUnits)),i.uniform1f(c.u_devicepixelratio,browser.devicePixelRatio),i.uniformMatrix4fv(c.u_matrix,!1,e.translatePosMatrix(o.posMatrix,n,t.paint["circle-translate"],t.paint["circle-translate-anchor"]));for(var p=0,v=l.segments;p<v.length;p+=1){var x=v[p];x.vaos[t.id].bind(i,c,l.layoutVertexBuffer,l.elementBuffer,m.paintVertexBuffer,x.vertexOffset),i.drawElements(i.TRIANGLES,3*x.primitiveLength,i.UNSIGNED_SHORT,3*x.primitiveOffset*2)}}}}}var browser=_dereq_("../util/browser");module.exports=drawCircles;
},{"../util/browser":194}],68:[function(_dereq_,module,exports){
"use strict";function drawCollisionDebug(e,o,r,i){var t=e.gl;t.enable(t.STENCIL_TEST);for(var f=e.useProgram("collisionBox"),l=0;l<i.length;l++){var n=i[l],a=o.getTile(n),s=a.getBucket(r);if(s){var u=s.buffers.collisionBox;if(u){t.uniformMatrix4fv(f.u_matrix,!1,n.posMatrix),e.enableTileClippingMask(n),e.lineWidth(1),t.uniform1f(f.u_scale,Math.pow(2,e.transform.zoom-a.coord.z)),t.uniform1f(f.u_zoom,10*e.transform.zoom),t.uniform1f(f.u_maxzoom,10*(a.coord.z+1));for(var m=0,g=u.segments;m<g.length;m+=1){var v=g[m];v.vaos[r.id].bind(t,f,u.layoutVertexBuffer,u.elementBuffer,null,v.vertexOffset),t.drawElements(t.LINES,2*v.primitiveLength,t.UNSIGNED_SHORT,2*v.primitiveOffset*2)}}}}}module.exports=drawCollisionDebug;
},{}],69:[function(_dereq_,module,exports){
"use strict";function drawDebug(r,e,a){for(var t=0;t<a.length;t++)drawDebugTile(r,e,a[t])}function drawDebugTile(r,e,a){var t=r.gl;t.disable(t.STENCIL_TEST),r.lineWidth(1*browser.devicePixelRatio);var i=a.posMatrix,u=r.useProgram("debug");t.uniformMatrix4fv(u.u_matrix,!1,i),t.uniform4f(u.u_color,1,0,0,1),r.debugVAO.bind(t,u,r.debugBuffer),t.drawArrays(t.LINE_STRIP,0,r.debugBuffer.length);for(var o=createTextVerticies(a.toString(),50,200,5),f=new PosArray,n=0;n<o.length;n+=2)f.emplaceBack(o[n],o[n+1]);var l=Buffer.fromStructArray(f,Buffer.BufferType.VERTEX),m=new VertexArrayObject;m.bind(t,u,l),t.uniform4f(u.u_color,1,1,1,1);for(var s=e.getTile(a).tileSize,g=EXTENT/(Math.pow(2,r.transform.zoom-a.z)*s),x=[[-1,-1],[-1,1],[1,-1],[1,1]],d=0;d<x.length;d++){var b=x[d];t.uniformMatrix4fv(u.u_matrix,!1,mat4.translate([],i,[g*b[0],g*b[1],0])),t.drawArrays(t.LINES,0,l.length)}t.uniform4f(u.u_color,0,0,0,1),t.uniformMatrix4fv(u.u_matrix,!1,i),t.drawArrays(t.LINES,0,l.length)}function createTextVerticies(r,e,a,t){t=t||1;var i,u,o,f,n,l,m,s,g=[];for(i=0,u=r.length;i<u;i++)if(n=simplexFont[r[i]]){for(s=null,o=0,f=n[1].length;o<f;o+=2)n[1][o]===-1&&n[1][o+1]===-1?s=null:(l=e+n[1][o]*t,m=a-n[1][o+1]*t,s&&g.push(s.x,s.y,l,m),s={x:l,y:m});e+=n[0]*t}return g}var browser=_dereq_("../util/browser"),mat4=_dereq_("@mapbox/gl-matrix").mat4,EXTENT=_dereq_("../data/extent"),Buffer=_dereq_("../data/buffer"),VertexArrayObject=_dereq_("./vertex_array_object"),PosArray=_dereq_("../data/pos_array");module.exports=drawDebug;var simplexFont={" ":[16,[]],"!":[10,[5,21,5,7,-1,-1,5,2,4,1,5,0,6,1,5,2]],'"':[16,[4,21,4,14,-1,-1,12,21,12,14]],"#":[21,[11,25,4,-7,-1,-1,17,25,10,-7,-1,-1,4,12,18,12,-1,-1,3,6,17,6]],$:[20,[8,25,8,-4,-1,-1,12,25,12,-4,-1,-1,17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3]],"%":[24,[21,21,3,0,-1,-1,8,21,10,19,10,17,9,15,7,14,5,14,3,16,3,18,4,20,6,21,8,21,10,20,13,19,16,19,19,20,21,21,-1,-1,17,7,15,6,14,4,14,2,16,0,18,0,20,1,21,3,21,5,19,7,17,7]],"&":[26,[23,12,23,13,22,14,21,14,20,13,19,11,17,6,15,3,13,1,11,0,7,0,5,1,4,2,3,4,3,6,4,8,5,9,12,13,13,14,14,16,14,18,13,20,11,21,9,20,8,18,8,16,9,13,11,10,16,3,18,1,20,0,22,0,23,1,23,2]],"'":[10,[5,19,4,20,5,21,6,20,6,18,5,16,4,15]],"(":[14,[11,25,9,23,7,20,5,16,4,11,4,7,5,2,7,-2,9,-5,11,-7]],")":[14,[3,25,5,23,7,20,9,16,10,11,10,7,9,2,7,-2,5,-5,3,-7]],"*":[16,[8,21,8,9,-1,-1,3,18,13,12,-1,-1,13,18,3,12]],"+":[26,[13,18,13,0,-1,-1,4,9,22,9]],",":[10,[6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4]],"-":[26,[4,9,22,9]],".":[10,[5,2,4,1,5,0,6,1,5,2]],"/":[22,[20,25,2,-7]],0:[20,[9,21,6,20,4,17,3,12,3,9,4,4,6,1,9,0,11,0,14,1,16,4,17,9,17,12,16,17,14,20,11,21,9,21]],1:[20,[6,17,8,18,11,21,11,0]],2:[20,[4,16,4,17,5,19,6,20,8,21,12,21,14,20,15,19,16,17,16,15,15,13,13,10,3,0,17,0]],3:[20,[5,21,16,21,10,13,13,13,15,12,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4]],4:[20,[13,21,3,7,18,7,-1,-1,13,21,13,0]],5:[20,[15,21,5,21,4,12,5,13,8,14,11,14,14,13,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4]],6:[20,[16,18,15,20,12,21,10,21,7,20,5,17,4,12,4,7,5,3,7,1,10,0,11,0,14,1,16,3,17,6,17,7,16,10,14,12,11,13,10,13,7,12,5,10,4,7]],7:[20,[17,21,7,0,-1,-1,3,21,17,21]],8:[20,[8,21,5,20,4,18,4,16,5,14,7,13,11,12,14,11,16,9,17,7,17,4,16,2,15,1,12,0,8,0,5,1,4,2,3,4,3,7,4,9,6,11,9,12,13,13,15,14,16,16,16,18,15,20,12,21,8,21]],9:[20,[16,14,15,11,13,9,10,8,9,8,6,9,4,11,3,14,3,15,4,18,6,20,9,21,10,21,13,20,15,18,16,14,16,9,15,4,13,1,10,0,8,0,5,1,4,3]],":":[10,[5,14,4,13,5,12,6,13,5,14,-1,-1,5,2,4,1,5,0,6,1,5,2]],";":[10,[5,14,4,13,5,12,6,13,5,14,-1,-1,6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4]],"<":[24,[20,18,4,9,20,0]],"=":[26,[4,12,22,12,-1,-1,4,6,22,6]],">":[24,[4,18,20,9,4,0]],"?":[18,[3,16,3,17,4,19,5,20,7,21,11,21,13,20,14,19,15,17,15,15,14,13,13,12,9,10,9,7,-1,-1,9,2,8,1,9,0,10,1,9,2]],"@":[27,[18,13,17,15,15,16,12,16,10,15,9,14,8,11,8,8,9,6,11,5,14,5,16,6,17,8,-1,-1,12,16,10,14,9,11,9,8,10,6,11,5,-1,-1,18,16,17,8,17,6,19,5,21,5,23,7,24,10,24,12,23,15,22,17,20,19,18,20,15,21,12,21,9,20,7,19,5,17,4,15,3,12,3,9,4,6,5,4,7,2,9,1,12,0,15,0,18,1,20,2,21,3,-1,-1,19,16,18,8,18,6,19,5]],A:[18,[9,21,1,0,-1,-1,9,21,17,0,-1,-1,4,7,14,7]],B:[21,[4,21,4,0,-1,-1,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,-1,-1,4,11,13,11,16,10,17,9,18,7,18,4,17,2,16,1,13,0,4,0]],C:[21,[18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5]],D:[21,[4,21,4,0,-1,-1,4,21,11,21,14,20,16,18,17,16,18,13,18,8,17,5,16,3,14,1,11,0,4,0]],E:[19,[4,21,4,0,-1,-1,4,21,17,21,-1,-1,4,11,12,11,-1,-1,4,0,17,0]],F:[18,[4,21,4,0,-1,-1,4,21,17,21,-1,-1,4,11,12,11]],G:[21,[18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,18,8,-1,-1,13,8,18,8]],H:[22,[4,21,4,0,-1,-1,18,21,18,0,-1,-1,4,11,18,11]],I:[8,[4,21,4,0]],J:[16,[12,21,12,5,11,2,10,1,8,0,6,0,4,1,3,2,2,5,2,7]],K:[21,[4,21,4,0,-1,-1,18,21,4,7,-1,-1,9,12,18,0]],L:[17,[4,21,4,0,-1,-1,4,0,16,0]],M:[24,[4,21,4,0,-1,-1,4,21,12,0,-1,-1,20,21,12,0,-1,-1,20,21,20,0]],N:[22,[4,21,4,0,-1,-1,4,21,18,0,-1,-1,18,21,18,0]],O:[22,[9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21]],P:[21,[4,21,4,0,-1,-1,4,21,13,21,16,20,17,19,18,17,18,14,17,12,16,11,13,10,4,10]],Q:[22,[9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21,-1,-1,12,4,18,-2]],R:[21,[4,21,4,0,-1,-1,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,4,11,-1,-1,11,11,18,0]],S:[20,[17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3]],T:[16,[8,21,8,0,-1,-1,1,21,15,21]],U:[22,[4,21,4,6,5,3,7,1,10,0,12,0,15,1,17,3,18,6,18,21]],V:[18,[1,21,9,0,-1,-1,17,21,9,0]],W:[24,[2,21,7,0,-1,-1,12,21,7,0,-1,-1,12,21,17,0,-1,-1,22,21,17,0]],X:[20,[3,21,17,0,-1,-1,17,21,3,0]],Y:[18,[1,21,9,11,9,0,-1,-1,17,21,9,11]],Z:[20,[17,21,3,0,-1,-1,3,21,17,21,-1,-1,3,0,17,0]],"[":[14,[4,25,4,-7,-1,-1,5,25,5,-7,-1,-1,4,25,11,25,-1,-1,4,-7,11,-7]],"\\":[14,[0,21,14,-3]],"]":[14,[9,25,9,-7,-1,-1,10,25,10,-7,-1,-1,3,25,10,25,-1,-1,3,-7,10,-7]],"^":[16,[6,15,8,18,10,15,-1,-1,3,12,8,17,13,12,-1,-1,8,17,8,0]],_:[16,[0,-2,16,-2]],"`":[10,[6,21,5,20,4,18,4,16,5,15,6,16,5,17]],a:[19,[15,14,15,0,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],b:[19,[4,21,4,0,-1,-1,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3]],c:[18,[15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],d:[19,[15,21,15,0,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],e:[18,[3,8,15,8,15,10,14,12,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],f:[12,[10,21,8,21,6,20,5,17,5,0,-1,-1,2,14,9,14]],g:[19,[15,14,15,-2,14,-5,13,-6,11,-7,8,-7,6,-6,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],h:[19,[4,21,4,0,-1,-1,4,10,7,13,9,14,12,14,14,13,15,10,15,0]],i:[8,[3,21,4,20,5,21,4,22,3,21,-1,-1,4,14,4,0]],j:[10,[5,21,6,20,7,21,6,22,5,21,-1,-1,6,14,6,-3,5,-6,3,-7,1,-7]],k:[17,[4,21,4,0,-1,-1,14,14,4,4,-1,-1,8,8,15,0]],l:[8,[4,21,4,0]],m:[30,[4,14,4,0,-1,-1,4,10,7,13,9,14,12,14,14,13,15,10,15,0,-1,-1,15,10,18,13,20,14,23,14,25,13,26,10,26,0]],n:[19,[4,14,4,0,-1,-1,4,10,7,13,9,14,12,14,14,13,15,10,15,0]],o:[19,[8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3,16,6,16,8,15,11,13,13,11,14,8,14]],p:[19,[4,14,4,-7,-1,-1,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3]],q:[19,[15,14,15,-7,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],r:[13,[4,14,4,0,-1,-1,4,8,5,11,7,13,9,14,12,14]],s:[17,[14,11,13,13,10,14,7,14,4,13,3,11,4,9,6,8,11,7,13,6,14,4,14,3,13,1,10,0,7,0,4,1,3,3]],t:[12,[5,21,5,4,6,1,8,0,10,0,-1,-1,2,14,9,14]],u:[19,[4,14,4,4,5,1,7,0,10,0,12,1,15,4,-1,-1,15,14,15,0]],v:[16,[2,14,8,0,-1,-1,14,14,8,0]],w:[22,[3,14,7,0,-1,-1,11,14,7,0,-1,-1,11,14,15,0,-1,-1,19,14,15,0]],x:[17,[3,14,14,0,-1,-1,14,14,3,0]],y:[16,[2,14,8,0,-1,-1,14,14,8,0,6,-4,4,-6,2,-7,1,-7]],z:[17,[14,14,3,0,-1,-1,3,14,14,14,-1,-1,3,0,14,0]],"{":[14,[9,25,7,24,6,23,5,21,5,19,6,17,7,16,8,14,8,12,6,10,-1,-1,7,24,6,22,6,20,7,18,8,17,9,15,9,13,8,11,4,9,8,7,9,5,9,3,8,1,7,0,6,-2,6,-4,7,-6,-1,-1,6,8,8,6,8,4,7,2,6,1,5,-1,5,-3,6,-5,7,-6,9,-7]],"|":[8,[4,25,4,-7]],"}":[14,[5,25,7,24,8,23,9,21,9,19,8,17,7,16,6,14,6,12,8,10,-1,-1,7,24,8,22,8,20,7,18,6,17,5,15,5,13,6,11,10,9,6,7,5,5,5,3,6,1,7,0,8,-2,8,-4,7,-6,-1,-1,8,8,6,6,6,4,7,2,8,1,9,-1,9,-3,8,-5,7,-6,5,-7]],"~":[24,[3,6,3,8,4,11,6,12,8,12,10,11,14,8,16,7,18,7,20,8,21,10,-1,-1,3,8,4,10,6,11,8,11,10,10,14,7,16,6,18,6,20,7,21,10,21,12]]};
},{"../data/buffer":51,"../data/extent":54,"../data/pos_array":57,"../util/browser":194,"./vertex_array_object":80,"@mapbox/gl-matrix":1}],70:[function(_dereq_,module,exports){
"use strict";function drawFill(t,e,r,i){var a=t.gl;a.enable(a.STENCIL_TEST);var l=!r.paint["fill-pattern"]&&r.isPaintValueFeatureConstant("fill-color")&&r.isPaintValueFeatureConstant("fill-opacity")&&1===r.paint["fill-color"][3]&&1===r.paint["fill-opacity"];t.isOpaquePass===l&&(t.setDepthSublayer(1),drawFillTiles(t,e,r,i,drawFillTile)),!t.isOpaquePass&&r.paint["fill-antialias"]&&(t.lineWidth(2),t.depthMask(!1),t.setDepthSublayer(r.getPaintProperty("fill-outline-color")?2:0),drawFillTiles(t,e,r,i,drawStrokeTile))}function drawFillTiles(t,e,r,i,a){for(var l=!0,n=0,o=i;n<o.length;n+=1){var f=o[n],s=e.getTile(f),u=s.getBucket(r);u&&(t.enableTileClippingMask(f),a(t,e,r,s,f,u.buffers,l),l=!1)}}function drawFillTile(t,e,r,i,a,l,n){for(var o=t.gl,f=l.layerData[r.id],s=setFillProgram("fill",r.paint["fill-pattern"],t,f,r,i,a,n),u=0,p=l.segments;u<p.length;u+=1){var g=p[u];g.vaos[r.id].bind(o,s,l.layoutVertexBuffer,l.elementBuffer,f.paintVertexBuffer,g.vertexOffset),o.drawElements(o.TRIANGLES,3*g.primitiveLength,o.UNSIGNED_SHORT,3*g.primitiveOffset*2)}}function drawStrokeTile(t,e,r,i,a,l,n){var o=t.gl,f=l.layerData[r.id],s=r.paint["fill-pattern"]&&!r.getPaintProperty("fill-outline-color"),u=setFillProgram("fillOutline",s,t,f,r,i,a,n);o.uniform2f(u.u_world,o.drawingBufferWidth,o.drawingBufferHeight);for(var p=0,g=l.segments2;p<g.length;p+=1){var m=g[p];m.vaos[r.id].bind(o,u,l.layoutVertexBuffer,l.elementBuffer2,f.paintVertexBuffer,m.vertexOffset),o.drawElements(o.LINES,2*m.primitiveLength,o.UNSIGNED_SHORT,2*m.primitiveOffset*2)}}function setFillProgram(t,e,r,i,a,l,n,o){var f,s=r.currentProgram;return e?(f=r.useProgram(t+"Pattern",i.programConfiguration),(o||f!==s)&&(i.programConfiguration.setUniforms(r.gl,f,a,{zoom:r.transform.zoom}),pattern.prepare(a.paint["fill-pattern"],r,f)),pattern.setTile(l,r,f)):(f=r.useProgram(t,i.programConfiguration),(o||f!==s)&&i.programConfiguration.setUniforms(r.gl,f,a,{zoom:r.transform.zoom})),r.gl.uniformMatrix4fv(f.u_matrix,!1,r.translatePosMatrix(n.posMatrix,l,a.paint["fill-translate"],a.paint["fill-translate-anchor"])),f}var pattern=_dereq_("./pattern");module.exports=drawFill;
},{"./pattern":78}],71:[function(_dereq_,module,exports){
"use strict";function draw(e,t,r,i){if(0!==r.paint["fill-extrusion-opacity"]){var a=e.gl;a.disable(a.STENCIL_TEST),a.enable(a.DEPTH_TEST),e.depthMask(!0);var f=new ExtrusionTexture(a,e,r);f.bindFramebuffer(),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT);for(var s=0;s<i.length;s++)drawExtrusion(e,t,r,i[s]);f.unbindFramebuffer(),f.renderToMap()}}function ExtrusionTexture(e,t,r){this.gl=e,this.width=t.width,this.height=t.height,this.painter=t,this.layer=r,this.texture=null,this.fbo=null,this.fbos=this.painter.preFbos[this.width]&&this.painter.preFbos[this.width][this.height]}function drawExtrusion(e,t,r,i){if(!e.isOpaquePass){var a=t.getTile(i),f=a.getBucket(r);if(f){var s=f.buffers,u=e.gl,n=r.paint["fill-extrusion-pattern"],h=s.layerData[r.id],o=h.programConfiguration,E=e.useProgram(n?"fillExtrusionPattern":"fillExtrusion",o);o.setUniforms(u,E,r,{zoom:e.transform.zoom}),n&&(pattern.prepare(n,e,E),pattern.setTile(a,e,E),u.uniform1f(E.u_height_factor,-Math.pow(2,i.z)/a.tileSize/8)),e.gl.uniformMatrix4fv(E.u_matrix,!1,e.translatePosMatrix(i.posMatrix,a,r.paint["fill-extrusion-translate"],r.paint["fill-extrusion-translate-anchor"])),setLight(E,e);for(var T=0,l=s.segments;T<l.length;T+=1){var R=l[T];R.vaos[r.id].bind(u,E,s.layoutVertexBuffer,s.elementBuffer,h.paintVertexBuffer,R.vertexOffset),u.drawElements(u.TRIANGLES,3*R.primitiveLength,u.UNSIGNED_SHORT,3*R.primitiveOffset*2)}}}}function setLight(e,t){var r=t.gl,i=t.style.light,a=i.calculated.position,f=[a.x,a.y,a.z],s=mat3.create();"viewport"===i.calculated.anchor&&mat3.fromRotation(s,-t.transform.angle),vec3.transformMat3(f,f,s),r.uniform3fv(e.u_lightpos,f),r.uniform1f(e.u_lightintensity,i.calculated.intensity),r.uniform3fv(e.u_lightcolor,i.calculated.color.slice(0,3))}var glMatrix=_dereq_("@mapbox/gl-matrix"),Buffer=_dereq_("../data/buffer"),VertexArrayObject=_dereq_("./vertex_array_object"),PosArray=_dereq_("../data/pos_array"),pattern=_dereq_("./pattern"),mat3=glMatrix.mat3,mat4=glMatrix.mat4,vec3=glMatrix.vec3;module.exports=draw,ExtrusionTexture.prototype.bindFramebuffer=function(){var e=this.gl;if(this.texture=this.painter.getViewportTexture(this.width,this.height),e.activeTexture(e.TEXTURE1),this.texture?e.bindTexture(e.TEXTURE_2D,this.texture):(this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,this.width,this.height,0,e.RGBA,e.UNSIGNED_BYTE,null),this.texture.width=this.width,this.texture.height=this.height),this.fbos)this.fbo=this.fbos.pop(),e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture,0);else{this.fbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fbo);var t=e.createRenderbuffer(),r=e.createRenderbuffer();e.bindRenderbuffer(e.RENDERBUFFER,t),e.bindRenderbuffer(e.RENDERBUFFER,r),e.renderbufferStorage(e.RENDERBUFFER,e.RGBA4,this.width,this.height),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,this.width,this.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,t),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture,0)}},ExtrusionTexture.prototype.unbindFramebuffer=function(){this.painter.bindDefaultFramebuffer(),this.fbos?this.fbos.push(this.fbo):(this.painter.preFbos[this.width]||(this.painter.preFbos[this.width]={}),this.painter.preFbos[this.width][this.height]=[this.fbo]),this.painter.saveViewportTexture(this.texture)},ExtrusionTexture.prototype.renderToMap=function(){var e=this.gl,t=this.painter,r=t.useProgram("extrusionTexture");e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture),e.uniform1f(r.u_opacity,this.layer.paint["fill-extrusion-opacity"]),e.uniform1i(r.u_image,1),e.uniformMatrix4fv(r.u_matrix,!1,mat4.ortho(mat4.create(),0,t.width,t.height,0,0,1)),e.disable(e.DEPTH_TEST),e.uniform2f(r.u_world,e.drawingBufferWidth,e.drawingBufferHeight);var i=new PosArray;i.emplaceBack(0,0),i.emplaceBack(1,0),i.emplaceBack(0,1),i.emplaceBack(1,1);var a=Buffer.fromStructArray(i,Buffer.BufferType.VERTEX),f=new VertexArrayObject;f.bind(e,r,a),e.drawArrays(e.TRIANGLE_STRIP,0,4),e.enable(e.DEPTH_TEST)};
},{"../data/buffer":51,"../data/pos_array":57,"./pattern":78,"./vertex_array_object":80,"@mapbox/gl-matrix":1}],72:[function(_dereq_,module,exports){
"use strict";function drawLineTile(e,i,t,r,a,n,o,f,s){var l,u,m,_,p=i.gl,g=a.paint["line-dasharray"],d=a.paint["line-pattern"];if(f||s){var v=1/pixelsToTileUnits(t,1,i.transform.tileZoom);if(g){l=i.lineAtlas.getDash(g.from,"round"===a.layout["line-cap"]),u=i.lineAtlas.getDash(g.to,"round"===a.layout["line-cap"]);var T=l.width*g.fromScale,h=u.width*g.toScale;p.uniform2f(e.u_patternscale_a,v/T,-l.height/2),p.uniform2f(e.u_patternscale_b,v/h,-u.height/2),p.uniform1f(e.u_sdfgamma,i.lineAtlas.width/(256*Math.min(T,h)*browser.devicePixelRatio)/2)}else if(d){if(m=i.spriteAtlas.getPosition(d.from,!0),_=i.spriteAtlas.getPosition(d.to,!0),!m||!_)return;p.uniform2f(e.u_pattern_size_a,m.size[0]*d.fromScale/v,_.size[1]),p.uniform2f(e.u_pattern_size_b,_.size[0]*d.toScale/v,_.size[1])}p.uniform2f(e.u_gl_units_to_pixels,1/i.transform.pixelsToGLUnits[0],1/i.transform.pixelsToGLUnits[1])}f&&(g?(p.uniform1i(e.u_image,0),p.activeTexture(p.TEXTURE0),i.lineAtlas.bind(p),p.uniform1f(e.u_tex_y_a,l.y),p.uniform1f(e.u_tex_y_b,u.y),p.uniform1f(e.u_mix,g.t)):d&&(p.uniform1i(e.u_image,0),p.activeTexture(p.TEXTURE0),i.spriteAtlas.bind(p,!0),p.uniform2fv(e.u_pattern_tl_a,m.tl),p.uniform2fv(e.u_pattern_br_a,m.br),p.uniform2fv(e.u_pattern_tl_b,_.tl),p.uniform2fv(e.u_pattern_br_b,_.br),p.uniform1f(e.u_fade,d.t)),p.uniform1f(e.u_width,a.paint["line-width"])),i.enableTileClippingMask(n);var x=i.translatePosMatrix(n.posMatrix,t,a.paint["line-translate"],a.paint["line-translate-anchor"]);p.uniformMatrix4fv(e.u_matrix,!1,x),p.uniform1f(e.u_ratio,1/pixelsToTileUnits(t,1,i.transform.zoom));for(var b=0,c=r.segments;b<c.length;b+=1){var w=c[b];w.vaos[a.id].bind(p,e,r.layoutVertexBuffer,r.elementBuffer,o.paintVertexBuffer,w.vertexOffset),p.drawElements(p.TRIANGLES,3*w.primitiveLength,p.UNSIGNED_SHORT,3*w.primitiveOffset*2)}}var browser=_dereq_("../util/browser"),pixelsToTileUnits=_dereq_("../source/pixels_to_tile_units");module.exports=function(e,i,t,r){if(!e.isOpaquePass){e.setDepthSublayer(0),e.depthMask(!1);var a=e.gl;if(a.enable(a.STENCIL_TEST),!(t.paint["line-width"]<=0))for(var n,o=t.paint["line-dasharray"]?"lineSDF":t.paint["line-pattern"]?"linePattern":"line",f=!0,s=0,l=r;s<l.length;s+=1){var u=l[s],m=i.getTile(u),_=m.getBucket(t);if(_){var p=_.buffers.layerData[t.id],g=e.currentProgram,d=e.useProgram(o,p.programConfiguration),v=f||d!==g,T=n!==m.coord.z;v&&p.programConfiguration.setUniforms(e.gl,d,t,{zoom:e.transform.zoom}),drawLineTile(d,e,m,_.buffers,t,u,p,v,T),n=m.coord.z,f=!1}}}};
},{"../source/pixels_to_tile_units":88,"../util/browser":194}],73:[function(_dereq_,module,exports){
"use strict";function drawRaster(r,t,e,a){if(!r.isOpaquePass){var i=r.gl;i.enable(i.DEPTH_TEST),r.depthMask(!0),i.depthFunc(i.LESS);for(var o=a.length&&a[0].z,n=0;n<a.length;n++){var u=a[n];r.setDepthSublayer(u.z-o),drawRasterTile(r,t,e,u)}i.depthFunc(i.LEQUAL)}}function drawRasterTile(r,t,e,a){var i=r.gl;i.disable(i.STENCIL_TEST);var o=t.getTile(a),n=r.transform.calculatePosMatrix(a,t.getSource().maxzoom);o.registerFadeDuration(r.style.animationLoop,e.paint["raster-fade-duration"]);var u=r.useProgram("raster");i.uniformMatrix4fv(u.u_matrix,!1,n),i.uniform1f(u.u_brightness_low,e.paint["raster-brightness-min"]),i.uniform1f(u.u_brightness_high,e.paint["raster-brightness-max"]),i.uniform1f(u.u_saturation_factor,saturationFactor(e.paint["raster-saturation"])),i.uniform1f(u.u_contrast_factor,contrastFactor(e.paint["raster-contrast"])),i.uniform3fv(u.u_spin_weights,spinWeights(e.paint["raster-hue-rotate"]));var s,c,f=o.sourceCache&&o.sourceCache.findLoadedParent(a,0,{}),d=getFadeValues(o,f,e,r.transform);i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,o.texture),i.activeTexture(i.TEXTURE1),f?(i.bindTexture(i.TEXTURE_2D,f.texture),s=Math.pow(2,f.coord.z-o.coord.z),c=[o.coord.x*s%1,o.coord.y*s%1]):i.bindTexture(i.TEXTURE_2D,o.texture),i.uniform2fv(u.u_tl_parent,c||[0,0]),i.uniform1f(u.u_scale_parent,s||1),i.uniform1f(u.u_buffer_scale,1),i.uniform1f(u.u_fade_t,d.mix),i.uniform1f(u.u_opacity,d.opacity*e.paint["raster-opacity"]),i.uniform1i(u.u_image0,0),i.uniform1i(u.u_image1,1);var m=o.boundsBuffer||r.rasterBoundsBuffer,p=o.boundsVAO||r.rasterBoundsVAO;p.bind(i,u,m),i.drawArrays(i.TRIANGLE_STRIP,0,m.length)}function spinWeights(r){r*=Math.PI/180;var t=Math.sin(r),e=Math.cos(r);return[(2*e+1)/3,(-Math.sqrt(3)*t-e+1)/3,(Math.sqrt(3)*t-e+1)/3]}function contrastFactor(r){return r>0?1/(1-r):1+r}function saturationFactor(r){return r>0?1-1/(1.001-r):-r}function getFadeValues(r,t,e,a){var i=e.paint["raster-fade-duration"];if(r.sourceCache&&i>0){var o=Date.now(),n=(o-r.timeAdded)/i,u=t?(o-t.timeAdded)/i:-1,s=r.sourceCache.getSource(),c=a.coveringZoomLevel({tileSize:s.tileSize,roundZoom:s.roundZoom}),f=!t||Math.abs(t.coord.z-c)>Math.abs(r.coord.z-c),d=f&&r.refreshedUponExpiration?1:util.clamp(f?n:1-u,0,1);return r.refreshedUponExpiration&&n>=1&&(r.refreshedUponExpiration=!1),t?{opacity:1,mix:1-d}:{opacity:d,mix:0}}return{opacity:1,mix:0}}var util=_dereq_("../util/util");module.exports=drawRaster;
},{"../util/util":214}],74:[function(_dereq_,module,exports){
"use strict";function drawSymbols(t,e,i,o){if(!t.isOpaquePass){var a=!(i.layout["text-allow-overlap"]||i.layout["icon-allow-overlap"]||i.layout["text-ignore-placement"]||i.layout["icon-ignore-placement"]),n=t.gl;a?n.disable(n.STENCIL_TEST):n.enable(n.STENCIL_TEST),t.setDepthSublayer(0),t.depthMask(!1),drawLayerSymbols(t,e,i,o,!1,i.paint["icon-translate"],i.paint["icon-translate-anchor"],i.layout["icon-rotation-alignment"],i.layout["icon-rotation-alignment"]),drawLayerSymbols(t,e,i,o,!0,i.paint["text-translate"],i.paint["text-translate-anchor"],i.layout["text-rotation-alignment"],i.layout["text-pitch-alignment"]),e.map.showCollisionBoxes&&drawCollisionDebug(t,e,i,o)}}function drawLayerSymbols(t,e,i,o,a,n,r,s,l){if(a||!t.style.sprite||t.style.sprite.loaded()){var u=t.gl,m="map"===s,f="map"===l,c=f;c?u.enable(u.DEPTH_TEST):u.disable(u.DEPTH_TEST);for(var p,_,g=0,y=o;g<y.length;g+=1){var d=y[g],T=e.getTile(d),v=T.getBucket(i);if(v){var h=a?v.buffers.glyph:v.buffers.icon;if(h&&h.segments.length){var x=h.layerData[i.id],b=x.programConfiguration,S=a||v.sdfIcons,z=a?v.textSizeData:v.iconSizeData;p&&v.fontstack===_||(p=t.useProgram(S?"symbolSDF":"symbolIcon",b),b.setUniforms(u,p,i,{zoom:t.transform.zoom}),setSymbolDrawState(p,t,i,d.z,a,S,m,f,v.fontstack,v.iconsNeedLinear,z)),t.enableTileClippingMask(d),u.uniformMatrix4fv(p.u_matrix,!1,t.translatePosMatrix(d.posMatrix,T,n,r)),drawTileSymbols(p,b,t,i,T,h,a,S,f),_=v.fontstack}}}c||u.enable(u.DEPTH_TEST)}}function setSymbolDrawState(t,e,i,o,a,n,r,s,l,u,m){var f=e.gl,c=e.transform;if(f.uniform1i(t.u_rotate_with_map,r),f.uniform1i(t.u_pitch_with_map,s),f.activeTexture(f.TEXTURE0),f.uniform1i(t.u_texture,0),f.uniform1f(t.u_is_text,a?1:0),a){var p=l&&e.glyphSource.getGlyphAtlas(l);if(!p)return;p.updateTexture(f),f.uniform2f(t.u_texsize,p.width/4,p.height/4)}else{var _=e.options.rotating||e.options.zooming,g=!i.isLayoutValueFeatureConstant("icon-size")||!i.isLayoutValueZoomConstant("icon-size")||1!==i.getLayoutValue("icon-size",{zoom:c.zoom}),y=g||browser.devicePixelRatio!==e.spriteAtlas.pixelRatio||u,d=s||c.pitch;e.spriteAtlas.bind(f,n||_||y||d),f.uniform2f(t.u_texsize,e.spriteAtlas.width/4,e.spriteAtlas.height/4)}if(f.activeTexture(f.TEXTURE1),e.frameHistory.bind(f),f.uniform1i(t.u_fadetexture,1),f.uniform1f(t.u_zoom,c.zoom),f.uniform1f(t.u_pitch,c.pitch/360*2*Math.PI),f.uniform1f(t.u_bearing,c.bearing/360*2*Math.PI),f.uniform1f(t.u_aspect_ratio,c.width/c.height),f.uniform1i(t.u_is_size_zoom_constant,m.isZoomConstant?1:0),f.uniform1i(t.u_is_size_feature_constant,m.isFeatureConstant?1:0),m.isZoomConstant||m.isFeatureConstant)if(m.isFeatureConstant&&!m.isZoomConstant){var T;if("interval"===m.functionType)T=i.getLayoutValue(a?"text-size":"icon-size",{zoom:c.zoom});else{var v="interval"===m.functionType?0:interpolationFactor(c.zoom,m.functionBase,m.coveringZoomRange[0],m.coveringZoomRange[1]),h=m.coveringStopValues[0],x=m.coveringStopValues[1];T=h+(x-h)*util.clamp(v,0,1)}f.uniform1f(t.u_size,T),f.uniform1f(t.u_layout_size,m.layoutSize)}else m.isFeatureConstant&&m.isZoomConstant&&f.uniform1f(t.u_size,m.layoutSize);else{var b=interpolationFactor(c.zoom,m.functionBase,m.coveringZoomRange[0],m.coveringZoomRange[1]);f.uniform1f(t.u_size_t,util.clamp(b,0,1))}}function drawTileSymbols(t,e,i,o,a,n,r,s,l){var u=i.gl,m=i.transform;if(l){var f=pixelsToTileUnits(a,1,m.zoom);u.uniform2f(t.u_extrude_scale,f,f)}else{var c=m.cameraToCenterDistance;u.uniform2f(t.u_extrude_scale,m.pixelsToGLUnits[0]*c,m.pixelsToGLUnits[1]*c)}if(s){var p=(r?"text":"icon")+"-halo-width",_=!o.isPaintValueFeatureConstant(p)||o.paint[p],g=(l?Math.cos(m._pitch):1)*m.cameraToCenterDistance;u.uniform1f(t.u_gamma_scale,g),_&&(u.uniform1f(t.u_is_halo,1),drawSymbolElements(n,o,u,t)),u.uniform1f(t.u_is_halo,0)}drawSymbolElements(n,o,u,t)}function drawSymbolElements(t,e,i,o){for(var a=t.layerData[e.id],n=a&&a.paintVertexBuffer,r=0,s=t.segments;r<s.length;r+=1){var l=s[r];l.vaos[e.id].bind(i,o,t.layoutVertexBuffer,t.elementBuffer,n,l.vertexOffset),i.drawElements(i.TRIANGLES,3*l.primitiveLength,i.UNSIGNED_SHORT,3*l.primitiveOffset*2)}}var util=_dereq_("../util/util"),browser=_dereq_("../util/browser"),drawCollisionDebug=_dereq_("./draw_collision_debug"),pixelsToTileUnits=_dereq_("../source/pixels_to_tile_units"),interpolationFactor=_dereq_("../style-spec/function").interpolationFactor;module.exports=drawSymbols;
},{"../source/pixels_to_tile_units":88,"../style-spec/function":107,"../util/browser":194,"../util/util":214,"./draw_collision_debug":68}],75:[function(_dereq_,module,exports){
"use strict";var FrameHistory=function(){this.changeTimes=new Float64Array(256),this.changeOpacities=new Uint8Array(256),this.opacities=new Uint8ClampedArray(256),this.array=new Uint8Array(this.opacities.buffer),this.previousZoom=0,this.firstFrame=!0};FrameHistory.prototype.record=function(e,t,i){var r=this;this.firstFrame&&(e=0,this.firstFrame=!1),t=Math.floor(10*t);var a;if(t<this.previousZoom)for(a=t+1;a<=this.previousZoom;a++)r.changeTimes[a]=e,r.changeOpacities[a]=r.opacities[a];else for(a=t;a>this.previousZoom;a--)r.changeTimes[a]=e,r.changeOpacities[a]=r.opacities[a];for(a=0;a<256;a++){var s=e-r.changeTimes[a],o=255*(i?s/i:1);a<=t?r.opacities[a]=r.changeOpacities[a]+o:r.opacities[a]=r.changeOpacities[a]-o}this.changed=!0,this.previousZoom=t},FrameHistory.prototype.bind=function(e){this.texture?(e.bindTexture(e.TEXTURE_2D,this.texture),this.changed&&(e.texSubImage2D(e.TEXTURE_2D,0,0,0,256,1,e.ALPHA,e.UNSIGNED_BYTE,this.array),this.changed=!1)):(this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.ALPHA,256,1,0,e.ALPHA,e.UNSIGNED_BYTE,this.array))},module.exports=FrameHistory;
},{}],76:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util"),LineAtlas=function(t,i){this.width=t,this.height=i,this.nextRow=0,this.bytes=4,this.data=new Uint8Array(this.width*this.height*this.bytes),this.positions={}};LineAtlas.prototype.setSprite=function(t){this.sprite=t},LineAtlas.prototype.getDash=function(t,i){var e=t.join(",")+i;return this.positions[e]||(this.positions[e]=this.addDash(t,i)),this.positions[e]},LineAtlas.prototype.addDash=function(t,i){var e=this,h=i?7:0,s=2*h+1,a=128;if(this.nextRow+s>this.height)return util.warnOnce("LineAtlas out of space"),null;for(var r=0,n=0;n<t.length;n++)r+=t[n];for(var o=this.width/r,E=o/2,T=t.length%2===1,R=-h;R<=h;R++)for(var u=e.nextRow+h+R,d=e.width*u,l=T?-t[t.length-1]:0,x=t[0],A=1,_=0;_<this.width;_++){for(;x<_/o;)l=x,x+=t[A],T&&A===t.length-1&&(x+=t[0]),A++;var p=Math.abs(_-l*o),g=Math.abs(_-x*o),w=Math.min(p,g),D=A%2===1,U=void 0;if(i){var f=h?R/h*(E+1):0;if(D){var X=E-Math.abs(f);U=Math.sqrt(w*w+X*X)}else U=E-Math.sqrt(w*w+f*f)}else U=(D?1:-1)*w;e.data[3+4*(d+_)]=Math.max(0,Math.min(255,U+a))}var v={y:(this.nextRow+h+.5)/this.height,height:2*h/this.height,width:r};return this.nextRow+=s,this.dirty=!0,v},LineAtlas.prototype.bind=function(t){this.texture?(t.bindTexture(t.TEXTURE_2D,this.texture),this.dirty&&(this.dirty=!1,t.texSubImage2D(t.TEXTURE_2D,0,0,0,this.width,this.height,t.RGBA,t.UNSIGNED_BYTE,this.data))):(this.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.texture),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,this.width,this.height,0,t.RGBA,t.UNSIGNED_BYTE,this.data))},module.exports=LineAtlas;
},{"../util/util":214}],77:[function(_dereq_,module,exports){
"use strict";var browser=_dereq_("../util/browser"),mat4=_dereq_("@mapbox/gl-matrix").mat4,FrameHistory=_dereq_("./frame_history"),SourceCache=_dereq_("../source/source_cache"),EXTENT=_dereq_("../data/extent"),pixelsToTileUnits=_dereq_("../source/pixels_to_tile_units"),util=_dereq_("../util/util"),Buffer=_dereq_("../data/buffer"),VertexArrayObject=_dereq_("./vertex_array_object"),RasterBoundsArray=_dereq_("../data/raster_bounds_array"),PosArray=_dereq_("../data/pos_array"),ProgramConfiguration=_dereq_("../data/program_configuration"),shaders=_dereq_("./shaders"),draw={symbol:_dereq_("./draw_symbol"),circle:_dereq_("./draw_circle"),line:_dereq_("./draw_line"),fill:_dereq_("./draw_fill"),"fill-extrusion":_dereq_("./draw_fill_extrusion"),raster:_dereq_("./draw_raster"),background:_dereq_("./draw_background"),debug:_dereq_("./draw_debug")},Painter=function(e,r){this.gl=e,this.transform=r,this.reusableTextures={tiles:{},viewport:null},this.preFbos={},this.frameHistory=new FrameHistory,this.setup(),this.numSublayers=SourceCache.maxUnderzooming+SourceCache.maxOverzooming+1,this.depthEpsilon=1/Math.pow(2,16),this.lineWidthRange=e.getParameter(e.ALIASED_LINE_WIDTH_RANGE),this.basicFillProgramConfiguration=ProgramConfiguration.createStatic(["color","opacity"]),this.emptyProgramConfiguration=new ProgramConfiguration};Painter.prototype.resize=function(e,r){var t=this.gl;this.width=e*browser.devicePixelRatio,this.height=r*browser.devicePixelRatio,t.viewport(0,0,this.width,this.height)},Painter.prototype.setup=function(){var e=this.gl;e.verbose=!0,e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.enable(e.STENCIL_TEST),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),this._depthMask=!1,e.depthMask(!1);var r=new PosArray;r.emplaceBack(0,0),r.emplaceBack(EXTENT,0),r.emplaceBack(0,EXTENT),r.emplaceBack(EXTENT,EXTENT),this.tileExtentBuffer=Buffer.fromStructArray(r,Buffer.BufferType.VERTEX),this.tileExtentVAO=new VertexArrayObject,this.tileExtentPatternVAO=new VertexArrayObject;var t=new PosArray;t.emplaceBack(0,0),t.emplaceBack(EXTENT,0),t.emplaceBack(EXTENT,EXTENT),t.emplaceBack(0,EXTENT),t.emplaceBack(0,0),this.debugBuffer=Buffer.fromStructArray(t,Buffer.BufferType.VERTEX),this.debugVAO=new VertexArrayObject;var i=new RasterBoundsArray;i.emplaceBack(0,0,0,0),i.emplaceBack(EXTENT,0,32767,0),i.emplaceBack(0,EXTENT,0,32767),i.emplaceBack(EXTENT,EXTENT,32767,32767),this.rasterBoundsBuffer=Buffer.fromStructArray(i,Buffer.BufferType.VERTEX),this.rasterBoundsVAO=new VertexArrayObject,this.extTextureFilterAnisotropic=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),this.extTextureFilterAnisotropic&&(this.extTextureFilterAnisotropicMax=e.getParameter(this.extTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT))},Painter.prototype.clearColor=function(){var e=this.gl;e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)},Painter.prototype.clearStencil=function(){var e=this.gl;e.clearStencil(0),e.stencilMask(255),e.clear(e.STENCIL_BUFFER_BIT)},Painter.prototype.clearDepth=function(){var e=this.gl;e.clearDepth(1),this.depthMask(!0),e.clear(e.DEPTH_BUFFER_BIT)},Painter.prototype._renderTileClippingMasks=function(e){var r=this,t=this.gl;t.colorMask(!1,!1,!1,!1),this.depthMask(!1),t.disable(t.DEPTH_TEST),t.enable(t.STENCIL_TEST),t.stencilMask(248),t.stencilOp(t.KEEP,t.KEEP,t.REPLACE);var i=1;this._tileClippingMaskIDs={};for(var a=0,s=e;a<s.length;a+=1){var o=s[a],n=r._tileClippingMaskIDs[o.id]=i++<<3;t.stencilFunc(t.ALWAYS,n,248);var l=r.useProgram("fill",r.basicFillProgramConfiguration);t.uniformMatrix4fv(l.u_matrix,!1,o.posMatrix),r.tileExtentVAO.bind(t,l,r.tileExtentBuffer),t.drawArrays(t.TRIANGLE_STRIP,0,r.tileExtentBuffer.length)}t.stencilMask(0),t.colorMask(!0,!0,!0,!0),this.depthMask(!0),t.enable(t.DEPTH_TEST)},Painter.prototype.enableTileClippingMask=function(e){var r=this.gl;r.stencilFunc(r.EQUAL,this._tileClippingMaskIDs[e.id],248)},Painter.prototype.prepareBuffers=function(){},Painter.prototype.bindDefaultFramebuffer=function(){var e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,null)},Painter.prototype.render=function(e,r){if(this.style=e,this.options=r,this.lineAtlas=e.lineAtlas,this.spriteAtlas=e.spriteAtlas,this.spriteAtlas.setSprite(e.sprite),this.glyphSource=e.glyphSource,this.frameHistory.record(Date.now(),this.transform.zoom,e.getTransition().duration),this.prepareBuffers(),this.clearColor(),this.clearDepth(),this.showOverdrawInspector(r.showOverdrawInspector),this.depthRange=(e._order.length+2)*this.numSublayers*this.depthEpsilon,this.isOpaquePass=!0,this.renderPass(),this.isOpaquePass=!1,this.renderPass(),this.options.showTileBoundaries){var t=this.style.sourceCaches[Object.keys(this.style.sourceCaches)[0]];t&&draw.debug(this,t,t.getVisibleCoordinates())}},Painter.prototype.renderPass=function(){var e,r,t=this,i=this.style._order;this.currentLayer=this.isOpaquePass?i.length-1:0,this.isOpaquePass?this._showOverdrawInspector||this.gl.disable(this.gl.BLEND):this.gl.enable(this.gl.BLEND);for(var a=0;a<i.length;a++){var s=t.style._layers[i[t.currentLayer]];s.source!==(e&&e.id)&&(e=t.style.sourceCaches[s.source],r=[],e&&(e.prepare&&e.prepare(),t.clearStencil(),r=e.getVisibleCoordinates(),e.getSource().isTileClipped&&t._renderTileClippingMasks(r)),t.isOpaquePass||r.reverse()),t.renderLayer(t,e,s,r),t.currentLayer+=t.isOpaquePass?-1:1}},Painter.prototype.depthMask=function(e){e!==this._depthMask&&(this._depthMask=e,this.gl.depthMask(e))},Painter.prototype.renderLayer=function(e,r,t,i){t.isHidden(this.transform.zoom)||("background"===t.type||i.length)&&(this.id=t.id,draw[t.type](e,r,t,i))},Painter.prototype.setDepthSublayer=function(e){var r=1-((1+this.currentLayer)*this.numSublayers+e)*this.depthEpsilon,t=r-1+this.depthRange;this.gl.depthRange(t,r)},Painter.prototype.translatePosMatrix=function(e,r,t,i){if(!t[0]&&!t[1])return e;if("viewport"===i){var a=Math.sin(-this.transform.angle),s=Math.cos(-this.transform.angle);t=[t[0]*s-t[1]*a,t[0]*a+t[1]*s]}var o=[pixelsToTileUnits(r,t[0],this.transform.zoom),pixelsToTileUnits(r,t[1],this.transform.zoom),0],n=new Float32Array(16);return mat4.translate(n,e,o),n},Painter.prototype.saveTileTexture=function(e){var r=this.reusableTextures.tiles[e.size];r?r.push(e):this.reusableTextures.tiles[e.size]=[e]},Painter.prototype.saveViewportTexture=function(e){this.reusableTextures.viewport=e},Painter.prototype.getTileTexture=function(e){var r=this.reusableTextures.tiles[e];return r&&r.length>0?r.pop():null},Painter.prototype.getViewportTexture=function(e,r){var t=this.reusableTextures.viewport;if(t)return t.width===e&&t.height===r?t:(this.gl.deleteTexture(t),void(this.reusableTextures.viewport=null))},Painter.prototype.lineWidth=function(e){this.gl.lineWidth(util.clamp(e,this.lineWidthRange[0],this.lineWidthRange[1]))},Painter.prototype.showOverdrawInspector=function(e){if(e||this._showOverdrawInspector){this._showOverdrawInspector=e;var r=this.gl;if(e){r.blendFunc(r.CONSTANT_COLOR,r.ONE);var t=8,i=1/t;r.blendColor(i,i,i,0),r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT)}else r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA)}},Painter.prototype.createProgram=function(e,r){var t=this.gl,i=t.createProgram(),a=shaders[e],s="#define MAPBOX_GL_JS\n#define DEVICE_PIXEL_RATIO "+browser.devicePixelRatio.toFixed(1)+"\n";this._showOverdrawInspector&&(s+="#define OVERDRAW_INSPECTOR;\n");var o=r.applyPragmas(s+shaders.prelude.fragmentSource+a.fragmentSource,"fragment"),n=r.applyPragmas(s+shaders.prelude.vertexSource+a.vertexSource,"vertex"),l=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(l,o),t.compileShader(l),t.attachShader(i,l);var h=t.createShader(t.VERTEX_SHADER);t.shaderSource(h,n),t.compileShader(h),t.attachShader(i,h),t.linkProgram(i);for(var u=t.getProgramParameter(i,t.ACTIVE_ATTRIBUTES),c={program:i,numAttributes:u},p=0;p<u;p++){var d=t.getActiveAttrib(i,p);c[d.name]=t.getAttribLocation(i,d.name)}for(var f=t.getProgramParameter(i,t.ACTIVE_UNIFORMS),g=0;g<f;g++){var T=t.getActiveUniform(i,g);c[T.name]=t.getUniformLocation(i,T.name)}return c},Painter.prototype._createProgramCached=function(e,r){this.cache=this.cache||{};var t=""+e+(r.cacheKey||"")+(this._showOverdrawInspector?"/overdraw":"");return this.cache[t]||(this.cache[t]=this.createProgram(e,r)),this.cache[t]},Painter.prototype.useProgram=function(e,r){var t=this.gl,i=this._createProgramCached(e,r||this.emptyProgramConfiguration);return this.currentProgram!==i&&(t.useProgram(i.program),this.currentProgram=i),i},module.exports=Painter;
},{"../data/buffer":51,"../data/extent":54,"../data/pos_array":57,"../data/program_configuration":58,"../data/raster_bounds_array":59,"../source/pixels_to_tile_units":88,"../source/source_cache":93,"../util/browser":194,"../util/util":214,"./draw_background":66,"./draw_circle":67,"./draw_debug":69,"./draw_fill":70,"./draw_fill_extrusion":71,"./draw_line":72,"./draw_raster":73,"./draw_symbol":74,"./frame_history":75,"./shaders":79,"./vertex_array_object":80,"@mapbox/gl-matrix":1}],78:[function(_dereq_,module,exports){
"use strict";var pixelsToTileUnits=_dereq_("../source/pixels_to_tile_units");exports.prepare=function(r,t,i){var o=t.gl,e=t.spriteAtlas.getPosition(r.from,!0),_=t.spriteAtlas.getPosition(r.to,!0);e&&_&&(o.uniform1i(i.u_image,0),o.uniform2fv(i.u_pattern_tl_a,e.tl),o.uniform2fv(i.u_pattern_br_a,e.br),o.uniform2fv(i.u_pattern_tl_b,_.tl),o.uniform2fv(i.u_pattern_br_b,_.br),o.uniform1f(i.u_mix,r.t),o.uniform2fv(i.u_pattern_size_a,e.size),o.uniform2fv(i.u_pattern_size_b,_.size),o.uniform1f(i.u_scale_a,r.fromScale),o.uniform1f(i.u_scale_b,r.toScale),o.activeTexture(o.TEXTURE0),t.spriteAtlas.bind(o,!0))},exports.setTile=function(r,t,i){var o=t.gl;o.uniform1f(i.u_tile_units_to_pixels,1/pixelsToTileUnits(r,1,t.transform.tileZoom));var e=Math.pow(2,r.coord.z),_=r.tileSize*Math.pow(2,t.transform.tileZoom)/e,u=_*(r.coord.x+r.coord.w*e),n=_*r.coord.y;o.uniform2f(i.u_pixel_coord_upper,u>>16,n>>16),o.uniform2f(i.u_pixel_coord_lower,65535&u,65535&n)};
},{"../source/pixels_to_tile_units":88}],79:[function(_dereq_,module,exports){
"use strict";var path=_dereq_("path");module.exports={prelude:{fragmentSource:"#ifdef GL_ES\nprecision mediump float;\n#else\n\n#if !defined(lowp)\n#define lowp\n#endif\n\n#if !defined(mediump)\n#define mediump\n#endif\n\n#if !defined(highp)\n#define highp\n#endif\n\n#endif\n",vertexSource:"#ifdef GL_ES\nprecision highp float;\n#else\n\n#if !defined(lowp)\n#define lowp\n#endif\n\n#if !defined(mediump)\n#define mediump\n#endif\n\n#if !defined(highp)\n#define highp\n#endif\n\n#endif\n\nfloat evaluate_zoom_function_1(const vec4 values, const float t) {\n    if (t < 1.0) {\n        return mix(values[0], values[1], t);\n    } else if (t < 2.0) {\n        return mix(values[1], values[2], t - 1.0);\n    } else {\n        return mix(values[2], values[3], t - 2.0);\n    }\n}\nvec4 evaluate_zoom_function_4(const vec4 value0, const vec4 value1, const vec4 value2, const vec4 value3, const float t) {\n    if (t < 1.0) {\n        return mix(value0, value1, t);\n    } else if (t < 2.0) {\n        return mix(value1, value2, t - 1.0);\n    } else {\n        return mix(value2, value3, t - 2.0);\n    }\n}\n\n// Unpack a pair of values that have been packed into a single float.\n// The packed values are assumed to be 8-bit unsigned integers, and are\n// packed like so:\n// packedValue = floor(input[0]) * 256 + input[1],\nvec2 unpack_float(const float packedValue) {\n    int packedIntValue = int(packedValue);\n    int v0 = packedIntValue / 256;\n    return vec2(v0, packedIntValue - v0 * 256);\n}\n\n\n// To minimize the number of attributes needed in the mapbox-gl-native shaders,\n// we encode a 4-component color into a pair of floats (i.e. a vec2) as follows:\n// [ floor(color.r * 255) * 256 + color.g * 255,\n//   floor(color.b * 255) * 256 + color.g * 255 ]\nvec4 decode_color(const vec2 encodedColor) {\n    return vec4(\n        unpack_float(encodedColor[0]) / 255.0,\n        unpack_float(encodedColor[1]) / 255.0\n    );\n}\n\n// Unpack a pair of paint values and interpolate between them.\nfloat unpack_mix_vec2(const vec2 packedValue, const float t) {\n    return mix(packedValue[0], packedValue[1], t);\n}\n\n// Unpack a pair of paint values and interpolate between them.\nvec4 unpack_mix_vec4(const vec4 packedColors, const float t) {\n    vec4 minColor = decode_color(vec2(packedColors[0], packedColors[1]));\n    vec4 maxColor = decode_color(vec2(packedColors[2], packedColors[3]));\n    return mix(minColor, maxColor, t);\n}\n\n// The offset depends on how many pixels are between the world origin and the edge of the tile:\n// vec2 offset = mod(pixel_coord, size)\n//\n// At high zoom levels there are a ton of pixels between the world origin and the edge of the tile.\n// The glsl spec only guarantees 16 bits of precision for highp floats. We need more than that.\n//\n// The pixel_coord is passed in as two 16 bit values:\n// pixel_coord_upper = floor(pixel_coord / 2^16)\n// pixel_coord_lower = mod(pixel_coord, 2^16)\n//\n// The offset is calculated in a series of steps that should preserve this precision:\nvec2 get_pattern_pos(const vec2 pixel_coord_upper, const vec2 pixel_coord_lower,\n    const vec2 pattern_size, const float tile_units_to_pixels, const vec2 pos) {\n\n    vec2 offset = mod(mod(mod(pixel_coord_upper, pattern_size) * 256.0, pattern_size) * 256.0 + pixel_coord_lower, pattern_size);\n    return (tile_units_to_pixels * pos + offset) / pattern_size;\n}\n"},circle:{fragmentSource:"#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\n\nvarying vec2 v_extrude;\nvarying lowp float v_antialiasblur;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize mediump float radius\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize highp vec4 stroke_color\n    #pragma mapbox: initialize mediump float stroke_width\n    #pragma mapbox: initialize lowp float stroke_opacity\n\n    float extrude_length = length(v_extrude);\n    float antialiased_blur = -max(blur, v_antialiasblur);\n\n    float opacity_t = smoothstep(0.0, antialiased_blur, extrude_length - 1.0);\n\n    float color_t = stroke_width < 0.01 ? 0.0 : smoothstep(\n        antialiased_blur,\n        0.0,\n        extrude_length - radius / (radius + stroke_width)\n    );\n\n    gl_FragColor = opacity_t * mix(color * opacity, stroke_color * stroke_opacity, color_t);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform bool u_scale_with_map;\nuniform vec2 u_extrude_scale;\n\nattribute vec2 a_pos;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\n\nvarying vec2 v_extrude;\nvarying lowp float v_antialiasblur;\n\nvoid main(void) {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize mediump float radius\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize highp vec4 stroke_color\n    #pragma mapbox: initialize mediump float stroke_width\n    #pragma mapbox: initialize lowp float stroke_opacity\n\n    // unencode the extrusion vector that we snuck into the a_pos vector\n    v_extrude = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\n\n    vec2 extrude = v_extrude * (radius + stroke_width) * u_extrude_scale;\n    // multiply a_pos by 0.5, since we had it * 2 in order to sneak\n    // in extrusion data\n    gl_Position = u_matrix * vec4(floor(a_pos * 0.5), 0, 1);\n\n    if (u_scale_with_map) {\n        gl_Position.xy += extrude;\n    } else {\n        gl_Position.xy += extrude * gl_Position.w;\n    }\n\n    // This is a minimum blur distance that serves as a faux-antialiasing for\n    // the circle. since blur is a ratio of the circle's size and the intent is\n    // to keep the blur at roughly 1px, the two are inversely related.\n    v_antialiasblur = 1.0 / DEVICE_PIXEL_RATIO / (radius + stroke_width);\n}\n"},collisionBox:{fragmentSource:"uniform float u_zoom;\nuniform float u_maxzoom;\n\nvarying float v_max_zoom;\nvarying float v_placement_zoom;\n\nvoid main() {\n\n    float alpha = 0.5;\n\n    gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0) * alpha;\n\n    if (v_placement_zoom > u_zoom) {\n        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0) * alpha;\n    }\n\n    if (u_zoom >= v_max_zoom) {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0) * alpha * 0.25;\n    }\n\n    if (v_placement_zoom >= u_maxzoom) {\n        gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0) * alpha * 0.2;\n    }\n}\n",vertexSource:"attribute vec2 a_pos;\nattribute vec2 a_extrude;\nattribute vec2 a_data;\n\nuniform mat4 u_matrix;\nuniform float u_scale;\n\nvarying float v_max_zoom;\nvarying float v_placement_zoom;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos + a_extrude / u_scale, 0.0, 1.0);\n\n    v_max_zoom = a_data.x;\n    v_placement_zoom = a_data.y;\n}\n"},debug:{fragmentSource:"uniform highp vec4 u_color;\n\nvoid main() {\n    gl_FragColor = u_color;\n}\n",vertexSource:"attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, step(32767.0, a_pos.x), 1);\n}\n"},fill:{fragmentSource:"#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_FragColor = color * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n}\n"},fillOutline:{fragmentSource:"#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_pos;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 outline_color\n    #pragma mapbox: initialize lowp float opacity\n\n    float dist = length(v_pos - gl_FragCoord.xy);\n    float alpha = smoothstep(1.0, 0.0, dist);\n    gl_FragColor = outline_color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\nuniform vec2 u_world;\n\nvarying vec2 v_pos;\n\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 outline_color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    v_pos = (gl_Position.xy / gl_Position.w + 1.0) / 2.0 * u_world;\n}\n"},fillOutlinePattern:{fragmentSource:"uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec2 v_pos;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a, u_pattern_br_a, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b, u_pattern_br_b, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    // find distance to outline for alpha interpolation\n\n    float dist = length(v_pos - gl_FragCoord.xy);\n    float alpha = smoothstep(1.0, 0.0, dist);\n\n\n    gl_FragColor = mix(color1, color2, u_mix) * alpha * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_world;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec2 v_pos;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, a_pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, a_pos);\n\n    v_pos = (gl_Position.xy / gl_Position.w + 1.0) / 2.0 * u_world;\n}\n"},fillPattern:{fragmentSource:"uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a, u_pattern_br_a, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b, u_pattern_br_b, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    gl_FragColor = mix(color1, color2, u_mix) * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, a_pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, a_pos);\n}\n"},fillExtrusion:{fragmentSource:"varying vec4 v_color;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define highp vec4 color\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n    #pragma mapbox: initialize highp vec4 color\n\n    gl_FragColor = v_color;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec3 u_lightcolor;\nuniform lowp vec3 u_lightpos;\nuniform lowp float u_lightintensity;\n\nattribute vec2 a_pos;\nattribute vec3 a_normal;\nattribute float a_edgedistance;\n\nvarying vec4 v_color;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\n#pragma mapbox: define highp vec4 color\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n    #pragma mapbox: initialize highp vec4 color\n\n    base = max(0.0, base);\n    height = max(0.0, height);\n\n    float ed = a_edgedistance; // use each attrib in order to not trip a VAO assert\n    float t = mod(a_normal.x, 2.0);\n\n    gl_Position = u_matrix * vec4(a_pos, t > 0.0 ? height : base, 1);\n\n    // Relative luminance (how dark/bright is the surface color?)\n    float colorvalue = color.r * 0.2126 + color.g * 0.7152 + color.b * 0.0722;\n\n    v_color = vec4(0.0, 0.0, 0.0, 1.0);\n\n    // Add slight ambient lighting so no extrusions are totally black\n    vec4 ambientlight = vec4(0.03, 0.03, 0.03, 1.0);\n    color += ambientlight;\n\n    // Calculate cos(theta), where theta is the angle between surface normal and diffuse light ray\n    float directional = clamp(dot(a_normal / 16384.0, u_lightpos), 0.0, 1.0);\n\n    // Adjust directional so that\n    // the range of values for highlight/shading is narrower\n    // with lower light intensity\n    // and with lighter/brighter surface colors\n    directional = mix((1.0 - u_lightintensity), max((1.0 - colorvalue + u_lightintensity), 1.0), directional);\n\n    // Add gradient along z axis of side surfaces\n    if (a_normal.y != 0.0) {\n        directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n    }\n\n    // Assign final color based on surface + ambient light color, diffuse light directional, and light color\n    // with lower bounds adjusted to hue of light\n    // so that shading is tinted with the complementary (opposite) color to the light color\n    v_color.r += clamp(color.r * directional * u_lightcolor.r, mix(0.0, 0.3, 1.0 - u_lightcolor.r), 1.0);\n    v_color.g += clamp(color.g * directional * u_lightcolor.g, mix(0.0, 0.3, 1.0 - u_lightcolor.g), 1.0);\n    v_color.b += clamp(color.b * directional * u_lightcolor.b, mix(0.0, 0.3, 1.0 - u_lightcolor.b), 1.0);\n}\n"},fillExtrusionPattern:{fragmentSource:"uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec4 v_lighting;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a, u_pattern_br_a, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b, u_pattern_br_b, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    vec4 mixedColor = mix(color1, color2, u_mix);\n\n    gl_FragColor = mixedColor * v_lighting;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\nuniform float u_height_factor;\n\nuniform vec3 u_lightcolor;\nuniform lowp vec3 u_lightpos;\nuniform lowp float u_lightintensity;\n\nattribute vec2 a_pos;\nattribute vec3 a_normal;\nattribute float a_edgedistance;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec4 v_lighting;\nvarying float v_directional;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n\n    base = max(0.0, base);\n    height = max(0.0, height);\n\n    float t = mod(a_normal.x, 2.0);\n    float z = t > 0.0 ? height : base;\n\n    gl_Position = u_matrix * vec4(a_pos, z, 1);\n\n    vec2 pos = a_normal.x == 1.0 && a_normal.y == 0.0 && a_normal.z == 16384.0\n        ? a_pos // extrusion top\n        : vec2(a_edgedistance, z * u_height_factor); // extrusion side\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, pos);\n\n    v_lighting = vec4(0.0, 0.0, 0.0, 1.0);\n    float directional = clamp(dot(a_normal / 16383.0, u_lightpos), 0.0, 1.0);\n    directional = mix((1.0 - u_lightintensity), max((0.5 + u_lightintensity), 1.0), directional);\n\n    if (a_normal.y != 0.0) {\n        directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n    }\n\n    v_lighting.rgb += clamp(directional * u_lightcolor, mix(vec3(0.0), vec3(0.3), 1.0 - u_lightcolor), vec3(1.0));\n}\n"},extrusionTexture:{fragmentSource:"uniform sampler2D u_image;\nuniform float u_opacity;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_FragColor = texture2D(u_image, v_pos) * u_opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(0.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_world;\nattribute vec2 a_pos;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos * u_world, 0, 1);\n\n    v_pos.x = a_pos.x;\n    v_pos.y = 1.0 - a_pos.y;\n}\n"},line:{fragmentSource:"#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_width2;\nvarying vec2 v_normal;\nvarying float v_gamma_scale;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    gl_FragColor = color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\n// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\nattribute vec2 a_pos;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform mediump float u_width;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize lowp float offset\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n\n    // We store the texture normals in the most insignificant bit\n    // transform y so that 0 => -1 and 1 => 1\n    // In the texture normal, x is 0 if the normal points straight up/down and 1 if it's a round cap\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = mod(a_pos, 2.0);\n    normal.y = sign(normal.y - 0.5);\n    v_normal = normal;\n\n\n    // these transformations used to be applied in the JS and native code bases. \n    // moved them into the shader for clarity and simplicity. \n    gapwidth = gapwidth / 2.0;\n    float width = u_width / 2.0;\n    offset = -1.0 * offset; \n\n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + width * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist = outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    // Remove the texture normal bit to get the position\n    vec2 pos = floor(a_pos * 0.5);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_width2 = vec2(outset, inset);\n}\n"},linePattern:{fragmentSource:"uniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform float u_fade;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_linesofar;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    float x_a = mod(v_linesofar / u_pattern_size_a.x, 1.0);\n    float x_b = mod(v_linesofar / u_pattern_size_b.x, 1.0);\n    float y_a = 0.5 + (v_normal.y * v_width2.s / u_pattern_size_a.y);\n    float y_b = 0.5 + (v_normal.y * v_width2.s / u_pattern_size_b.y);\n    vec2 pos_a = mix(u_pattern_tl_a, u_pattern_br_a, vec2(x_a, y_a));\n    vec2 pos_b = mix(u_pattern_tl_b, u_pattern_br_b, vec2(x_b, y_b));\n\n    vec4 color = mix(texture2D(u_image, pos_a), texture2D(u_image, pos_b), u_fade);\n\n    gl_FragColor = color * alpha * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\n// We scale the distance before adding it to the buffers so that we can store\n// long distances for long segments. Use this value to unscale the distance.\n#define LINE_DISTANCE_SCALE 2.0\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\nattribute vec2 a_pos;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform mediump float u_width;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_linesofar;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float gapwidth\n\nvoid main() {\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float offset\n    #pragma mapbox: initialize mediump float gapwidth\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n    float a_linesofar = (floor(a_data.z / 4.0) + a_data.w * 64.0) * LINE_DISTANCE_SCALE;\n\n    // We store the texture normals in the most insignificant bit\n    // transform y so that 0 => -1 and 1 => 1\n    // In the texture normal, x is 0 if the normal points straight up/down and 1 if it's a round cap\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = mod(a_pos, 2.0);\n    normal.y = sign(normal.y - 0.5);\n    v_normal = normal;\n\n    // these transformations used to be applied in the JS and native code bases. \n    // moved them into the shader for clarity and simplicity. \n    gapwidth = gapwidth / 2.0;\n    float width = u_width / 2.0;\n    offset = -1.0 * offset; \n\n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + width * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist = outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    // Remove the texture normal bit to get the position\n    vec2 pos = floor(a_pos * 0.5);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_linesofar = a_linesofar;\n    v_width2 = vec2(outset, inset);\n}\n"},lineSDF:{fragmentSource:"\nuniform sampler2D u_image;\nuniform float u_sdfgamma;\nuniform float u_mix;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying vec2 v_tex_a;\nvarying vec2 v_tex_b;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    float sdfdist_a = texture2D(u_image, v_tex_a).a;\n    float sdfdist_b = texture2D(u_image, v_tex_b).a;\n    float sdfdist = mix(sdfdist_a, sdfdist_b, u_mix);\n    alpha *= smoothstep(0.5 - u_sdfgamma, 0.5 + u_sdfgamma, sdfdist);\n\n    gl_FragColor = color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\n// We scale the distance before adding it to the buffers so that we can store\n// long distances for long segments. Use this value to unscale the distance.\n#define LINE_DISTANCE_SCALE 2.0\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\nattribute vec2 a_pos;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform vec2 u_patternscale_a;\nuniform float u_tex_y_a;\nuniform vec2 u_patternscale_b;\nuniform float u_tex_y_b;\nuniform vec2 u_gl_units_to_pixels;\nuniform mediump float u_width;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying vec2 v_tex_a;\nvarying vec2 v_tex_b;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize lowp float offset\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n    float a_linesofar = (floor(a_data.z / 4.0) + a_data.w * 64.0) * LINE_DISTANCE_SCALE;\n\n    // We store the texture normals in the most insignificant bit\n    // transform y so that 0 => -1 and 1 => 1\n    // In the texture normal, x is 0 if the normal points straight up/down and 1 if it's a round cap\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = mod(a_pos, 2.0);\n    normal.y = sign(normal.y - 0.5);\n    v_normal = normal;\n\n    // these transformations used to be applied in the JS and native code bases. \n    // moved them into the shader for clarity and simplicity. \n    gapwidth = gapwidth / 2.0;\n    float width = u_width / 2.0;\n    offset = -1.0 * offset;\n \n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + width * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist =outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    // Remove the texture normal bit to get the position\n    vec2 pos = floor(a_pos * 0.5);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_tex_a = vec2(a_linesofar * u_patternscale_a.x, normal.y * u_patternscale_a.y + u_tex_y_a);\n    v_tex_b = vec2(a_linesofar * u_patternscale_b.x, normal.y * u_patternscale_b.y + u_tex_y_b);\n\n    v_width2 = vec2(outset, inset);\n}\n"
},raster:{fragmentSource:"uniform float u_fade_t;\nuniform float u_opacity;\nuniform sampler2D u_image0;\nuniform sampler2D u_image1;\nvarying vec2 v_pos0;\nvarying vec2 v_pos1;\n\nuniform float u_brightness_low;\nuniform float u_brightness_high;\n\nuniform float u_saturation_factor;\nuniform float u_contrast_factor;\nuniform vec3 u_spin_weights;\n\nvoid main() {\n\n    // read and cross-fade colors from the main and parent tiles\n    vec4 color0 = texture2D(u_image0, v_pos0);\n    vec4 color1 = texture2D(u_image1, v_pos1);\n    vec4 color = mix(color0, color1, u_fade_t);\n    color.a *= u_opacity;\n    vec3 rgb = color.rgb;\n\n    // spin\n    rgb = vec3(\n        dot(rgb, u_spin_weights.xyz),\n        dot(rgb, u_spin_weights.zxy),\n        dot(rgb, u_spin_weights.yzx));\n\n    // saturation\n    float average = (color.r + color.g + color.b) / 3.0;\n    rgb += (average - rgb) * u_saturation_factor;\n\n    // contrast\n    rgb = (rgb - 0.5) * u_contrast_factor + 0.5;\n\n    // brightness\n    vec3 u_high_vec = vec3(u_brightness_low, u_brightness_low, u_brightness_low);\n    vec3 u_low_vec = vec3(u_brightness_high, u_brightness_high, u_brightness_high);\n\n    gl_FragColor = vec4(mix(u_high_vec, u_low_vec, rgb) * color.a, color.a);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_tl_parent;\nuniform float u_scale_parent;\nuniform float u_buffer_scale;\n\nattribute vec2 a_pos;\nattribute vec2 a_texture_pos;\n\nvarying vec2 v_pos0;\nvarying vec2 v_pos1;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    v_pos0 = (((a_texture_pos / 32767.0) - 0.5) / u_buffer_scale ) + 0.5;\n    v_pos1 = (v_pos0 * u_scale_parent) + u_tl_parent;\n}\n"},symbolIcon:{fragmentSource:"uniform sampler2D u_texture;\nuniform sampler2D u_fadetexture;\n\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_tex;\nvarying vec2 v_fade_tex;\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    lowp float alpha = texture2D(u_fadetexture, v_fade_tex).a * opacity;\n    gl_FragColor = texture2D(u_texture, v_tex) * alpha;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:'\nattribute vec4 a_pos_offset;\nattribute vec4 a_data;\n\n// icon-size data (see symbol_sdf.vertex.glsl for more)\nattribute vec3 a_size;\nuniform bool u_is_size_zoom_constant;\nuniform bool u_is_size_feature_constant;\nuniform mediump float u_size_t; // used to interpolate between zoom stops when size is a composite function\nuniform mediump float u_size; // used when size is both zoom and feature constant\nuniform mediump float u_layout_size; // used when size is feature constant\n\n#pragma mapbox: define lowp float opacity\n\n// matrix is for the vertex position.\nuniform mat4 u_matrix;\n\nuniform bool u_is_text;\nuniform mediump float u_zoom;\nuniform bool u_rotate_with_map;\nuniform vec2 u_extrude_scale;\n\nuniform vec2 u_texsize;\n\nvarying vec2 v_tex;\nvarying vec2 v_fade_tex;\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 a_pos = a_pos_offset.xy;\n    vec2 a_offset = a_pos_offset.zw;\n\n    vec2 a_tex = a_data.xy;\n    mediump vec2 label_data = unpack_float(a_data[2]);\n    mediump float a_labelminzoom = label_data[0];\n    mediump vec2 a_zoom = unpack_float(a_data[3]);\n    mediump float a_minzoom = a_zoom[0];\n    mediump float a_maxzoom = a_zoom[1];\n\n    float size;\n    // In order to accommodate placing labels around corners in\n    // symbol-placement: line, each glyph in a label could have multiple\n    // "quad"s only one of which should be shown at a given zoom level.\n    // The min/max zoom assigned to each quad is based on the font size at\n    // the vector tile\'s zoom level, which might be different than at the\n    // currently rendered zoom level if text-size is zoom-dependent.\n    // Thus, we compensate for this difference by calculating an adjustment\n    // based on the scale of rendered text size relative to layout text size.\n    mediump float layoutSize;\n    if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = mix(a_size[0], a_size[1], u_size_t) / 10.0;\n        layoutSize = a_size[2] / 10.0;\n    } else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = a_size[0] / 10.0;\n        layoutSize = size;\n    } else if (!u_is_size_zoom_constant && u_is_size_feature_constant) {\n        size = u_size;\n        layoutSize = u_layout_size;\n    } else {\n        size = u_size;\n        layoutSize = u_size;\n    }\n\n    float fontScale = u_is_text ? size / 24.0 : size;\n\n    mediump float zoomAdjust = log2(size / layoutSize);\n    mediump float adjustedZoom = (u_zoom - zoomAdjust) * 10.0;\n    // result: z = 0 if a_minzoom <= adjustedZoom < a_maxzoom, and 1 otherwise\n    mediump float z = 2.0 - step(a_minzoom, adjustedZoom) - (1.0 - step(a_maxzoom, adjustedZoom));\n\n    vec2 extrude = fontScale * u_extrude_scale * (a_offset / 64.0);\n    if (u_rotate_with_map) {\n        gl_Position = u_matrix * vec4(a_pos + extrude, 0, 1);\n        gl_Position.z += z * gl_Position.w;\n    } else {\n        gl_Position = u_matrix * vec4(a_pos, 0, 1) + vec4(extrude, 0, 0);\n    }\n\n    v_tex = a_tex / u_texsize;\n    v_fade_tex = vec2(a_labelminzoom / 255.0, 0.0);\n}\n'},symbolSDF:{fragmentSource:"#define SDF_PX 8.0\n#define EDGE_GAMMA 0.105/DEVICE_PIXEL_RATIO\n\nuniform bool u_is_halo;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\n\nuniform sampler2D u_texture;\nuniform sampler2D u_fadetexture;\nuniform highp float u_gamma_scale;\nuniform bool u_is_text;\n\nvarying vec2 v_tex;\nvarying vec2 v_fade_tex;\nvarying float v_gamma_scale;\nvarying float v_size;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 fill_color\n    #pragma mapbox: initialize highp vec4 halo_color\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float halo_width\n    #pragma mapbox: initialize lowp float halo_blur\n\n    float fontScale = u_is_text ? v_size / 24.0 : v_size;\n\n    lowp vec4 color = fill_color;\n    highp float gamma = EDGE_GAMMA / (fontScale * u_gamma_scale);\n    lowp float buff = (256.0 - 64.0) / 256.0;\n    if (u_is_halo) {\n        color = halo_color;\n        gamma = (halo_blur * 1.19 / SDF_PX + EDGE_GAMMA) / (fontScale * u_gamma_scale);\n        buff = (6.0 - halo_width / fontScale) / SDF_PX;\n    }\n\n    lowp float dist = texture2D(u_texture, v_tex).a;\n    lowp float fade_alpha = texture2D(u_fadetexture, v_fade_tex).a;\n    highp float gamma_scaled = gamma * v_gamma_scale;\n    highp float alpha = smoothstep(buff - gamma_scaled, buff + gamma_scaled, dist) * fade_alpha;\n\n    gl_FragColor = color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"const float PI = 3.141592653589793;\n\nattribute vec4 a_pos_offset;\nattribute vec4 a_data;\n\n// contents of a_size vary based on the type of property value\n// used for {text,icon}-size.\n// For constants, a_size is disabled.\n// For source functions, we bind only one value per vertex: the value of {text,icon}-size evaluated for the current feature.\n// For composite functions:\n// [ text-size(lowerZoomStop, feature),\n//   text-size(upperZoomStop, feature),\n//   layoutSize == text-size(layoutZoomLevel, feature) ]\nattribute vec3 a_size;\nuniform bool u_is_size_zoom_constant;\nuniform bool u_is_size_feature_constant;\nuniform mediump float u_size_t; // used to interpolate between zoom stops when size is a composite function\nuniform mediump float u_size; // used when size is both zoom and feature constant\nuniform mediump float u_layout_size; // used when size is feature constant\n\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\n\n// matrix is for the vertex position.\nuniform mat4 u_matrix;\n\nuniform bool u_is_text;\nuniform mediump float u_zoom;\nuniform bool u_rotate_with_map;\nuniform bool u_pitch_with_map;\nuniform mediump float u_pitch;\nuniform mediump float u_bearing;\nuniform mediump float u_aspect_ratio;\nuniform vec2 u_extrude_scale;\n\nuniform vec2 u_texsize;\n\nvarying vec2 v_tex;\nvarying vec2 v_fade_tex;\nvarying float v_gamma_scale;\nvarying float v_size;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 fill_color\n    #pragma mapbox: initialize highp vec4 halo_color\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float halo_width\n    #pragma mapbox: initialize lowp float halo_blur\n\n    vec2 a_pos = a_pos_offset.xy;\n    vec2 a_offset = a_pos_offset.zw;\n\n    vec2 a_tex = a_data.xy;\n\n    mediump vec2 label_data = unpack_float(a_data[2]);\n    mediump float a_labelminzoom = label_data[0];\n    mediump float a_labelangle = label_data[1];\n\n    mediump vec2 a_zoom = unpack_float(a_data[3]);\n    mediump float a_minzoom = a_zoom[0];\n    mediump float a_maxzoom = a_zoom[1];\n\n    // In order to accommodate placing labels around corners in\n    // symbol-placement: line, each glyph in a label could have multiple\n    // \"quad\"s only one of which should be shown at a given zoom level.\n    // The min/max zoom assigned to each quad is based on the font size at\n    // the vector tile's zoom level, which might be different than at the\n    // currently rendered zoom level if text-size is zoom-dependent.\n    // Thus, we compensate for this difference by calculating an adjustment\n    // based on the scale of rendered text size relative to layout text size.\n    mediump float layoutSize;\n    if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        v_size = mix(a_size[0], a_size[1], u_size_t) / 10.0;\n        layoutSize = a_size[2] / 10.0;\n    } else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        v_size = a_size[0] / 10.0;\n        layoutSize = v_size;\n    } else if (!u_is_size_zoom_constant && u_is_size_feature_constant) {\n        v_size = u_size;\n        layoutSize = u_layout_size;\n    } else {\n        v_size = u_size;\n        layoutSize = u_size;\n    }\n\n    float fontScale = u_is_text ? v_size / 24.0 : v_size;\n\n    mediump float zoomAdjust = log2(v_size / layoutSize);\n    mediump float adjustedZoom = (u_zoom - zoomAdjust) * 10.0;\n    // result: z = 0 if a_minzoom <= adjustedZoom < a_maxzoom, and 1 otherwise\n    // Used below to move the vertex out of the clip space for when the current\n    // zoom is out of the glyph's zoom range.\n    mediump float z = 2.0 - step(a_minzoom, adjustedZoom) - (1.0 - step(a_maxzoom, adjustedZoom));\n\n    // pitch-alignment: map\n    // rotation-alignment: map | viewport\n    if (u_pitch_with_map) {\n        lowp float angle = u_rotate_with_map ? (a_labelangle / 256.0 * 2.0 * PI) : u_bearing;\n        lowp float asin = sin(angle);\n        lowp float acos = cos(angle);\n        mat2 RotationMatrix = mat2(acos, asin, -1.0 * asin, acos);\n        vec2 offset = RotationMatrix * a_offset;\n        vec2 extrude = fontScale * u_extrude_scale * (offset / 64.0);\n        gl_Position = u_matrix * vec4(a_pos + extrude, 0, 1);\n        gl_Position.z += z * gl_Position.w;\n    // pitch-alignment: viewport\n    // rotation-alignment: map\n    } else if (u_rotate_with_map) {\n        // foreshortening factor to apply on pitched maps\n        // as a label goes from horizontal <=> vertical in angle\n        // it goes from 0% foreshortening to up to around 70% foreshortening\n        lowp float pitchfactor = 1.0 - cos(u_pitch * sin(u_pitch * 0.75));\n\n        lowp float lineangle = a_labelangle / 256.0 * 2.0 * PI;\n\n        // use the lineangle to position points a,b along the line\n        // project the points and calculate the label angle in projected space\n        // this calculation allows labels to be rendered unskewed on pitched maps\n        vec4 a = u_matrix * vec4(a_pos, 0, 1);\n        vec4 b = u_matrix * vec4(a_pos + vec2(cos(lineangle),sin(lineangle)), 0, 1);\n        lowp float angle = atan((b[1]/b[3] - a[1]/a[3])/u_aspect_ratio, b[0]/b[3] - a[0]/a[3]);\n        lowp float asin = sin(angle);\n        lowp float acos = cos(angle);\n        mat2 RotationMatrix = mat2(acos, -1.0 * asin, asin, acos);\n\n        vec2 offset = RotationMatrix * (vec2((1.0-pitchfactor)+(pitchfactor*cos(angle*2.0)), 1.0) * a_offset);\n        vec2 extrude = fontScale * u_extrude_scale * (offset / 64.0);\n        gl_Position = u_matrix * vec4(a_pos, 0, 1) + vec4(extrude, 0, 0);\n        gl_Position.z += z * gl_Position.w;\n    // pitch-alignment: viewport\n    // rotation-alignment: viewport\n    } else {\n        vec2 extrude = fontScale * u_extrude_scale * (a_offset / 64.0);\n        gl_Position = u_matrix * vec4(a_pos, 0, 1) + vec4(extrude, 0, 0);\n    }\n\n    v_gamma_scale = gl_Position.w;\n\n    v_tex = a_tex / u_texsize;\n    v_fade_tex = vec2(a_labelminzoom / 255.0, 0.0);\n}\n"}};
},{"path":23}],80:[function(_dereq_,module,exports){
"use strict";var VertexArrayObject=function(){this.boundProgram=null,this.boundVertexBuffer=null,this.boundVertexBuffer2=null,this.boundElementBuffer=null,this.boundVertexOffset=null,this.vao=null};VertexArrayObject.prototype.bind=function(e,t,r,i,n,s){void 0===e.extVertexArrayObject&&(e.extVertexArrayObject=e.getExtension("OES_vertex_array_object"));var o=!this.vao||this.boundProgram!==t||this.boundVertexBuffer!==r||this.boundVertexBuffer2!==n||this.boundElementBuffer!==i||this.boundVertexOffset!==s;!e.extVertexArrayObject||o?(this.freshBind(e,t,r,i,n,s),this.gl=e):e.extVertexArrayObject.bindVertexArrayOES(this.vao)},VertexArrayObject.prototype.freshBind=function(e,t,r,i,n,s){var o,u=t.numAttributes;if(e.extVertexArrayObject)this.vao&&this.destroy(),this.vao=e.extVertexArrayObject.createVertexArrayOES(),e.extVertexArrayObject.bindVertexArrayOES(this.vao),o=0,this.boundProgram=t,this.boundVertexBuffer=r,this.boundVertexBuffer2=n,this.boundElementBuffer=i,this.boundVertexOffset=s;else{o=e.currentNumAttributes||0;for(var b=u;b<o;b++)e.disableVertexAttribArray(b)}r.enableAttributes(e,t),n&&n.enableAttributes(e,t),r.bind(e),r.setVertexAttribPointers(e,t,s),n&&(n.bind(e),n.setVertexAttribPointers(e,t,s)),i&&i.bind(e),e.currentNumAttributes=u},VertexArrayObject.prototype.destroy=function(){this.vao&&(this.gl.extVertexArrayObject.deleteVertexArrayOES(this.vao),this.vao=null)},module.exports=VertexArrayObject;
},{}],81:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util");exports.packUint8ToFloat=function(t,l){return t=util.clamp(Math.floor(t),0,255),l=util.clamp(Math.floor(l),0,255),256*t+l};
},{"../util/util":214}],82:[function(_dereq_,module,exports){
"use strict";var ImageSource=_dereq_("./image_source"),window=_dereq_("../util/window"),CanvasSource=function(t){function i(i,a,s,n){t.call(this,i,a,s,n),this.options=a,this.animate=!a.hasOwnProperty("animate")||a.animate}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.load=function(){if(this.canvas=this.canvas||window.document.getElementById(this.options.canvas),this.width=this.canvas.width,this.height=this.canvas.height,this._hasInvalidDimensions())return this.fire("error",new Error("Canvas dimensions cannot be less than or equal to zero."));var t;this.play=function(){t=this.map.style.animationLoop.set(1/0),this.map._rerender()},this.pause=function(){this.map.style.animationLoop.cancel(t)},this._finishLoading()},i.prototype.getCanvas=function(){return this.canvas},i.prototype.onAdd=function(t){this.map||(this.map=t,this.load(),this.canvas&&this.animate&&this.play())},i.prototype.prepare=function(){var t=!1;this.canvas.width!==this.width&&(this.width=this.canvas.width,t=!0),this.canvas.height!==this.height&&(this.height=this.canvas.height,t=!0),this._hasInvalidDimensions()||this.tile&&this._prepareImage(this.map.painter.gl,this.canvas,t)},i.prototype.serialize=function(){return{type:"canvas",canvas:this.canvas,coordinates:this.coordinates}},i.prototype._hasInvalidDimensions=function(){for(var t=this,i=0,a=[t.canvas.width,t.canvas.height];i<a.length;i+=1){var s=a[i];if(isNaN(s)||s<=0)return!0}return!1},i}(ImageSource);module.exports=CanvasSource;
},{"../util/window":196,"./image_source":86}],83:[function(_dereq_,module,exports){
"use strict";function resolveURL(t){var e=window.document.createElement("a");return e.href=t,e.href}var Evented=_dereq_("../util/evented"),util=_dereq_("../util/util"),window=_dereq_("../util/window"),EXTENT=_dereq_("../data/extent"),GeoJSONSource=function(t){function e(e,o,i,r){t.call(this),o=o||{},this.id=e,this.type="geojson",this.minzoom=0,this.maxzoom=18,this.tileSize=512,this.isTileClipped=!0,this.reparseOverscaled=!0,this.dispatcher=i,this.setEventedParent(r),this._data=o.data,void 0!==o.maxzoom&&(this.maxzoom=o.maxzoom),o.type&&(this.type=o.type);var a=EXTENT/this.tileSize;this.workerOptions=util.extend({source:this.id,cluster:o.cluster||!1,geojsonVtOptions:{buffer:(void 0!==o.buffer?o.buffer:128)*a,tolerance:(void 0!==o.tolerance?o.tolerance:.375)*a,extent:EXTENT,maxZoom:this.maxzoom},superclusterOptions:{maxZoom:Math.min(o.clusterMaxZoom,this.maxzoom-1)||this.maxzoom-1,extent:EXTENT,radius:(o.clusterRadius||50)*a,log:!1}},o.workerOptions)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.load=function(){var t=this;this.fire("dataloading",{dataType:"source"}),this._updateWorkerData(function(e){return e?void t.fire("error",{error:e}):void t.fire("data",{dataType:"source",sourceDataType:"metadata"})})},e.prototype.onAdd=function(t){this.load(),this.map=t},e.prototype.setData=function(t){var e=this;return this._data=t,this.fire("dataloading",{dataType:"source"}),this._updateWorkerData(function(t){return t?e.fire("error",{error:t}):void e.fire("data",{dataType:"source",sourceDataType:"content"})}),this},e.prototype._updateWorkerData=function(t){var e=this,o=util.extend({},this.workerOptions),i=this._data;"string"==typeof i?o.url=resolveURL(i):o.data=JSON.stringify(i),this.workerID=this.dispatcher.send(this.type+".loadData",o,function(o){e._loaded=!0,t(o)})},e.prototype.loadTile=function(t,e){var o=this,i=t.coord.z>this.maxzoom?Math.pow(2,t.coord.z-this.maxzoom):1,r={type:this.type,uid:t.uid,coord:t.coord,zoom:t.coord.z,maxZoom:this.maxzoom,tileSize:this.tileSize,source:this.id,overscaling:i,angle:this.map.transform.angle,pitch:this.map.transform.pitch,showCollisionBoxes:this.map.showCollisionBoxes};t.workerID=this.dispatcher.send("loadTile",r,function(i,r){if(t.unloadVectorData(),!t.aborted)return i?e(i):(t.loadVectorData(r,o.map.painter),t.redoWhenDone&&(t.redoWhenDone=!1,t.redoPlacement(o)),e(null))},this.workerID)},e.prototype.abortTile=function(t){t.aborted=!0},e.prototype.unloadTile=function(t){t.unloadVectorData(),this.dispatcher.send("removeTile",{uid:t.uid,type:this.type,source:this.id},function(){},t.workerID)},e.prototype.onRemove=function(){this.dispatcher.broadcast("removeSource",{type:this.type,source:this.id},function(){})},e.prototype.serialize=function(){return{type:this.type,data:this._data}},e}(Evented);module.exports=GeoJSONSource;
},{"../data/extent":54,"../util/evented":202,"../util/util":214,"../util/window":196}],84:[function(_dereq_,module,exports){
"use strict";var ajax=_dereq_("../util/ajax"),rewind=_dereq_("geojson-rewind"),GeoJSONWrapper=_dereq_("./geojson_wrapper"),vtpbf=_dereq_("vt-pbf"),supercluster=_dereq_("supercluster"),geojsonvt=_dereq_("geojson-vt"),VectorTileWorkerSource=_dereq_("./vector_tile_worker_source"),GeoJSONWorkerSource=function(e){function r(r,t,o){e.call(this,r,t),o&&(this.loadGeoJSON=o),this._geoJSONIndexes={}}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.loadVectorData=function(e,r){var t=e.source,o=e.coord;if(!this._geoJSONIndexes[t])return r(null,null);var n=this._geoJSONIndexes[t].getTile(Math.min(o.z,e.maxZoom),o.x,o.y);if(!n)return r(null,null);var u=new GeoJSONWrapper(n.features);u.name="_geojsonTileLayer";var a=vtpbf({layers:{_geojsonTileLayer:u}});0===a.byteOffset&&a.byteLength===a.buffer.byteLength||(a=new Uint8Array(a)),u.rawData=a.buffer,r(null,u)},r.prototype.loadData=function(e,r){var t=function(t,o){var n=this;return t?r(t):"object"!=typeof o?r(new Error("Input data is not a valid GeoJSON object.")):(rewind(o,!0),void this._indexData(o,e,function(t,o){return t?r(t):(n._geoJSONIndexes[e.source]=o,void r(null))}))}.bind(this);this.loadGeoJSON(e,t)},r.prototype.loadGeoJSON=function(e,r){if(e.url)ajax.getJSON(e.url,r);else{if("string"!=typeof e.data)return r(new Error("Input data is not a valid GeoJSON object."));try{return r(null,JSON.parse(e.data))}catch(e){return r(new Error("Input data is not a valid GeoJSON object."))}}},r.prototype.removeSource=function(e){this._geoJSONIndexes[e.source]&&delete this._geoJSONIndexes[e.source]},r.prototype._indexData=function(e,r,t){try{r.cluster?t(null,supercluster(r.superclusterOptions).load(e.features)):t(null,geojsonvt(e,r.geojsonVtOptions))}catch(e){return t(e)}},r}(VectorTileWorkerSource);module.exports=GeoJSONWorkerSource;
},{"../util/ajax":193,"./geojson_wrapper":85,"./vector_tile_worker_source":98,"geojson-rewind":7,"geojson-vt":11,"supercluster":29,"vt-pbf":38}],85:[function(_dereq_,module,exports){
"use strict";var Point=_dereq_("point-geometry"),VectorTileFeature=_dereq_("vector-tile").VectorTileFeature,EXTENT=_dereq_("../data/extent"),FeatureWrapper=function(e){var t=this;if(this.type=e.type,1===e.type){this.rawGeometry=[];for(var r=0;r<e.geometry.length;r++)t.rawGeometry.push([e.geometry[r]])}else this.rawGeometry=e.geometry;this.properties=e.tags,"id"in e&&!isNaN(e.id)&&(this.id=parseInt(e.id,10)),this.extent=EXTENT};FeatureWrapper.prototype.loadGeometry=function(){var e=this,t=this.rawGeometry;this.geometry=[];for(var r=0;r<t.length;r++){for(var o=t[r],a=[],i=0;i<o.length;i++)a.push(new Point(o[i][0],o[i][1]));e.geometry.push(a)}return this.geometry},FeatureWrapper.prototype.bbox=function(){this.geometry||this.loadGeometry();for(var e=this.geometry,t=1/0,r=-(1/0),o=1/0,a=-(1/0),i=0;i<e.length;i++)for(var p=e[i],n=0;n<p.length;n++){var h=p[n];t=Math.min(t,h.x),r=Math.max(r,h.x),o=Math.min(o,h.y),a=Math.max(a,h.y)}return[t,o,r,a]},FeatureWrapper.prototype.toGeoJSON=function(){VectorTileFeature.prototype.toGeoJSON.call(this)};var GeoJSONWrapper=function(e){this.features=e,this.length=e.length,this.extent=EXTENT};GeoJSONWrapper.prototype.feature=function(e){return new FeatureWrapper(this.features[e])},module.exports=GeoJSONWrapper;
},{"../data/extent":54,"point-geometry":26,"vector-tile":34}],86:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util"),window=_dereq_("../util/window"),TileCoord=_dereq_("./tile_coord"),LngLat=_dereq_("../geo/lng_lat"),Point=_dereq_("point-geometry"),Evented=_dereq_("../util/evented"),ajax=_dereq_("../util/ajax"),EXTENT=_dereq_("../data/extent"),RasterBoundsArray=_dereq_("../data/raster_bounds_array"),Buffer=_dereq_("../data/buffer"),VertexArrayObject=_dereq_("../render/vertex_array_object"),ImageSource=function(t){function e(e,o,r,i){t.call(this),this.id=e,this.dispatcher=r,this.coordinates=o.coordinates,this.type="image",this.minzoom=0,this.maxzoom=22,this.tileSize=512,this.setEventedParent(i),this.options=o}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.load=function(){var t=this;this.fire("dataloading",{dataType:"source"}),this.url=this.options.url,ajax.getImage(this.options.url,function(e,o){return e?t.fire("error",{error:e}):(t.image=o,void t._finishLoading())})},e.prototype._finishLoading=function(){this.map&&(this.setCoordinates(this.coordinates),this.fire("data",{dataType:"source",sourceDataType:"metadata"}))},e.prototype.onAdd=function(t){this.load(),this.map=t,this.image&&this.setCoordinates(this.coordinates)},e.prototype.setCoordinates=function(t){this.coordinates=t;var e=this.map,o=t.map(function(t){return e.transform.locationCoordinate(LngLat.convert(t)).zoomTo(0)}),r=this.centerCoord=util.getCoordinatesCenter(o);return r.column=Math.floor(r.column),r.row=Math.floor(r.row),this.coord=new TileCoord(r.zoom,r.column,r.row),this.minzoom=this.maxzoom=r.zoom,this._tileCoords=o.map(function(t){var e=t.zoomTo(r.zoom);return new Point(Math.round((e.column-r.column)*EXTENT),Math.round((e.row-r.row)*EXTENT))}),this.fire("data",{dataType:"source",sourceDataType:"content"}),this},e.prototype._setTile=function(t){this.tile=t;var e=32767,o=new RasterBoundsArray;o.emplaceBack(this._tileCoords[0].x,this._tileCoords[0].y,0,0),o.emplaceBack(this._tileCoords[1].x,this._tileCoords[1].y,e,0),o.emplaceBack(this._tileCoords[3].x,this._tileCoords[3].y,0,e),o.emplaceBack(this._tileCoords[2].x,this._tileCoords[2].y,e,e),this.tile.buckets={},this.tile.boundsBuffer=Buffer.fromStructArray(o,Buffer.BufferType.VERTEX),this.tile.boundsVAO=new VertexArrayObject},e.prototype.prepare=function(){this.tile&&this.image&&this._prepareImage(this.map.painter.gl,this.image)},e.prototype._prepareImage=function(t,e,o){"loaded"!==this.tile.state?(this.tile.state="loaded",this.tile.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.tile.texture),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e)):o?t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e):(e instanceof window.HTMLVideoElement||e instanceof window.ImageData||e instanceof window.HTMLCanvasElement)&&(t.bindTexture(t.TEXTURE_2D,this.tile.texture),t.texSubImage2D(t.TEXTURE_2D,0,0,0,t.RGBA,t.UNSIGNED_BYTE,e))},e.prototype.loadTile=function(t,e){this.coord&&this.coord.toString()===t.coord.toString()?(this._setTile(t),e(null)):(t.state="errored",e(null))},e.prototype.serialize=function(){return{type:"image",urls:this.url,coordinates:this.coordinates}},e}(Evented);module.exports=ImageSource;
},{"../data/buffer":51,"../data/extent":54,"../data/raster_bounds_array":59,"../geo/lng_lat":62,"../render/vertex_array_object":80,"../util/ajax":193,"../util/evented":202,"../util/util":214,"../util/window":196,"./tile_coord":96,"point-geometry":26}],87:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util"),ajax=_dereq_("../util/ajax"),browser=_dereq_("../util/browser"),normalizeURL=_dereq_("../util/mapbox").normalizeSourceURL;module.exports=function(r,e){var o=function(r,o){if(r)return e(r);var i=util.pick(o,["tiles","minzoom","maxzoom","attribution","mapbox_logo","bounds"]);o.vector_layers&&(i.vectorLayers=o.vector_layers,i.vectorLayerIds=i.vectorLayers.map(function(r){return r.id})),e(null,i)};r.url?ajax.getJSON(normalizeURL(r.url),o):browser.frame(o.bind(null,null,r))};
},{"../util/ajax":193,"../util/browser":194,"../util/mapbox":210,"../util/util":214}],88:[function(_dereq_,module,exports){
"use strict";var EXTENT=_dereq_("../data/extent");module.exports=function(e,t,r){return t*(EXTENT/(e.tileSize*Math.pow(2,r-e.coord.z)))};
},{"../data/extent":54}],89:[function(_dereq_,module,exports){
"use strict";function sortTilesIn(e,r){var o=e.coord,t=r.coord;return o.z-t.z||o.y-t.y||o.w-t.w||o.x-t.x}function mergeRenderedFeatureLayers(e){for(var r=e[0]||{},o=1;o<e.length;o++){var t=e[o];for(var n in t){var a=t[n],i=r[n];if(void 0===i)i=r[n]=a;else for(var u=0;u<a.length;u++)i.push(a[u])}}return r}var TileCoord=_dereq_("./tile_coord");exports.rendered=function(e,r,o,t,n,a){var i=e.tilesIn(o);i.sort(sortTilesIn);for(var u=[],s=0;s<i.length;s++){var d=i[s];d.tile.featureIndex&&u.push(d.tile.featureIndex.query({queryGeometry:d.queryGeometry,scale:d.scale,tileSize:d.tile.tileSize,bearing:a,params:t},r))}return mergeRenderedFeatureLayers(u)},exports.source=function(e,r){for(var o=e.getRenderableIds().map(function(r){return e.getTileByID(r)}),t=[],n={},a=0;a<o.length;a++){var i=o[a],u=new TileCoord(Math.min(i.sourceMaxZoom,i.coord.z),i.coord.x,i.coord.y,0).id;n[u]||(n[u]=!0,i.querySourceFeatures(t,r))}return t};
},{"./tile_coord":96}],90:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util"),ajax=_dereq_("../util/ajax"),Evented=_dereq_("../util/evented"),loadTileJSON=_dereq_("./load_tilejson"),normalizeURL=_dereq_("../util/mapbox").normalizeTileURL,TileBounds=_dereq_("./tile_bounds"),RasterTileSource=function(e){function t(t,i,r,o){e.call(this),this.id=t,this.dispatcher=r,this.setEventedParent(o),this.type="raster",this.minzoom=0,this.maxzoom=22,this.roundZoom=!0,this.scheme="xyz",this.tileSize=512,this._loaded=!1,this.options=i,util.extend(this,util.pick(i,["url","scheme","tileSize"]))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.load=function(){var e=this;this.fire("dataloading",{dataType:"source"}),loadTileJSON(this.options,function(t,i){return t?e.fire("error",t):(util.extend(e,i),e.setBounds(i.bounds),e.fire("data",{dataType:"source",sourceDataType:"metadata"}),void e.fire("data",{dataType:"source",sourceDataType:"content"}))})},t.prototype.onAdd=function(e){this.load(),this.map=e},t.prototype.setBounds=function(e){this.bounds=e,e&&(this.tileBounds=new TileBounds(e,this.minzoom,this.maxzoom))},t.prototype.serialize=function(){return{type:"raster",url:this.url,tileSize:this.tileSize,tiles:this.tiles,bounds:this.bounds}},t.prototype.hasTile=function(e){return!this.tileBounds||this.tileBounds.contains(e,this.maxzoom)},t.prototype.loadTile=function(e,t){function i(i,r){if(delete e.request,e.aborted)return this.state="unloaded",t(null);if(i)return this.state="errored",t(i);this.map._refreshExpiredTiles&&e.setExpiryData(r),delete r.cacheControl,delete r.expires;var o=this.map.painter.gl;e.texture=this.map.painter.getTileTexture(r.width),e.texture?(o.bindTexture(o.TEXTURE_2D,e.texture),o.texSubImage2D(o.TEXTURE_2D,0,0,0,o.RGBA,o.UNSIGNED_BYTE,r)):(e.texture=o.createTexture(),o.bindTexture(o.TEXTURE_2D,e.texture),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR_MIPMAP_NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),this.map.painter.extTextureFilterAnisotropic&&o.texParameterf(o.TEXTURE_2D,this.map.painter.extTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,this.map.painter.extTextureFilterAnisotropicMax),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,r),e.texture.size=r.width),o.generateMipmap(o.TEXTURE_2D),e.state="loaded",t(null)}var r=normalizeURL(e.coord.url(this.tiles,null,this.scheme),this.url,this.tileSize);e.request=ajax.getImage(r,i.bind(this))},t.prototype.abortTile=function(e){e.request&&(e.request.abort(),delete e.request)},t.prototype.unloadTile=function(e){e.texture&&this.map.painter.saveTileTexture(e.texture)},t}(Evented);module.exports=RasterTileSource;
},{"../util/ajax":193,"../util/evented":202,"../util/mapbox":210,"../util/util":214,"./load_tilejson":87,"./tile_bounds":95}],91:[function(_dereq_,module,exports){
"use strict";var ajax=_dereq_("../util/ajax"),Evented=_dereq_("../util/evented"),window=_dereq_("../util/window"),pluginRequested=!1,pluginBlobURL=null;module.exports.evented=new Evented,module.exports.registerForPluginAvailability=function(e){return pluginBlobURL?e(pluginBlobURL,module.exports.errorCallback):module.exports.evented.once("pluginAvailable",e),e},module.exports.setRTLTextPlugin=function(e,l){if(pluginRequested)throw new Error("setRTLTextPlugin cannot be called multiple times.");pluginRequested=!0,module.exports.errorCallback=l,ajax.getArrayBuffer(e,function(e,t){e?l(e):(pluginBlobURL=window.URL.createObjectURL(new window.Blob([t.data]),{type:"text/javascript"}),module.exports.evented.fire("pluginAvailable",{pluginBlobURL:pluginBlobURL,errorCallback:l}))})};
},{"../util/ajax":193,"../util/evented":202,"../util/window":196}],92:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util"),sourceTypes={vector:_dereq_("../source/vector_tile_source"),raster:_dereq_("../source/raster_tile_source"),geojson:_dereq_("../source/geojson_source"),video:_dereq_("../source/video_source"),image:_dereq_("../source/image_source"),canvas:_dereq_("../source/canvas_source")};exports.create=function(e,r,o,u){if(r=new sourceTypes[r.type](e,r,o,u),r.id!==e)throw new Error("Expected Source id to be "+e+" instead of "+r.id);return util.bindAll(["load","abort","unload","serialize","prepare"],r),r},exports.getType=function(e){return sourceTypes[e]},exports.setType=function(e,r){sourceTypes[e]=r};
},{"../source/canvas_source":82,"../source/geojson_source":83,"../source/image_source":86,"../source/raster_tile_source":90,"../source/vector_tile_source":97,"../source/video_source":99,"../util/util":214}],93:[function(_dereq_,module,exports){
"use strict";function coordinateToTilePoint(e,t,o){var i=o.zoomTo(Math.min(e.z,t));return{x:(i.column-(e.x+e.w*Math.pow(2,e.z)))*EXTENT,y:(i.row-e.y)*EXTENT}}function compareKeyZoom(e,t){return e%32-t%32}function isRasterType(e){return"raster"===e||"image"===e||"video"===e}var Source=_dereq_("./source"),Tile=_dereq_("./tile"),Evented=_dereq_("../util/evented"),TileCoord=_dereq_("./tile_coord"),Cache=_dereq_("../util/lru_cache"),Coordinate=_dereq_("../geo/coordinate"),util=_dereq_("../util/util"),EXTENT=_dereq_("../data/extent"),SourceCache=function(e){function t(t,o,i){e.call(this),this.id=t,this.dispatcher=i,this.on("data",function(e){"source"===e.dataType&&"metadata"===e.sourceDataType&&(this._sourceLoaded=!0),this._sourceLoaded&&"source"===e.dataType&&"content"===e.sourceDataType&&(this.reload(),this.transform&&this.update(this.transform))}),this.on("error",function(){this._sourceErrored=!0}),this._source=Source.create(t,o,i,this),this._tiles={},this._cache=new Cache(0,this.unloadTile.bind(this)),this._timers={},this._cacheTimers={},this._isIdRenderable=this._isIdRenderable.bind(this)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.onAdd=function(e){this.map=e,this._source&&this._source.onAdd&&this._source.onAdd(e)},t.prototype.onRemove=function(e){this._source&&this._source.onRemove&&this._source.onRemove(e)},t.prototype.loaded=function(){var e=this;if(this._sourceErrored)return!0;if(!this._sourceLoaded)return!1;for(var t in e._tiles){var o=e._tiles[t];if("loaded"!==o.state&&"errored"!==o.state)return!1}return!0},t.prototype.getSource=function(){return this._source},t.prototype.loadTile=function(e,t){return this._source.loadTile(e,t)},t.prototype.unloadTile=function(e){if(this._source.unloadTile)return this._source.unloadTile(e)},t.prototype.abortTile=function(e){if(this._source.abortTile)return this._source.abortTile(e)},t.prototype.serialize=function(){return this._source.serialize()},t.prototype.prepare=function(){if(this._sourceLoaded&&this._source.prepare)return this._source.prepare()},t.prototype.getIds=function(){return Object.keys(this._tiles).map(Number).sort(compareKeyZoom)},t.prototype.getRenderableIds=function(){return this.getIds().filter(this._isIdRenderable)},t.prototype._isIdRenderable=function(e){return this._tiles[e].hasData()&&!this._coveredTiles[e]},t.prototype.reload=function(){var e=this;this._cache.reset();for(var t in e._tiles)e.reloadTile(t,"reloading")},t.prototype.reloadTile=function(e,t){var o=this._tiles[e];o&&("loading"!==o.state&&(o.state=t),this.loadTile(o,this._tileLoaded.bind(this,o,e,t)))},t.prototype._tileLoaded=function(e,t,o,i){return i?(e.state="errored",void(404!==i.status&&this._source.fire("error",{tile:e,error:i}))):(e.sourceCache=this,e.timeAdded=(new Date).getTime(),"expired"===o&&(e.refreshedUponExpiration=!0),this._setTileReloadTimer(t,e),this._source.fire("data",{dataType:"source",tile:e,coord:e.coord}),void(this.map&&(this.map.painter.tileExtentVAO.vao=null)))},t.prototype.getTile=function(e){return this.getTileByID(e.id)},t.prototype.getTileByID=function(e){return this._tiles[e]},t.prototype.getZoom=function(e){return e.zoom+e.scaleZoom(e.tileSize/this._source.tileSize)},t.prototype.findLoadedChildren=function(e,t,o){var i=this,r=!1;for(var s in i._tiles){var a=i._tiles[s];if(!(o[s]||!a.hasData()||a.coord.z<=e.z||a.coord.z>t)){var n=Math.pow(2,Math.min(a.coord.z,i._source.maxzoom)-Math.min(e.z,i._source.maxzoom));if(Math.floor(a.coord.x/n)===e.x&&Math.floor(a.coord.y/n)===e.y)for(o[s]=!0,r=!0;a&&a.coord.z-1>e.z;){var d=a.coord.parent(i._source.maxzoom).id;a=i._tiles[d],a&&a.hasData()&&(delete o[s],o[d]=!0)}}}return r},t.prototype.findLoadedParent=function(e,t,o){for(var i=this,r=e.z-1;r>=t;r--){e=e.parent(i._source.maxzoom);var s=i._tiles[e.id];if(s&&s.hasData())return o[e.id]=!0,s;if(i._cache.has(e.id))return o[e.id]=!0,i._cache.getWithoutRemoving(e.id)}},t.prototype.updateCacheSize=function(e){var t=Math.ceil(e.width/e.tileSize)+1,o=Math.ceil(e.height/e.tileSize)+1,i=t*o,r=5;this._cache.setMaxSize(Math.floor(i*r))},t.prototype.update=function(e){var o=this;if(this.transform=e,this._sourceLoaded){var i,r,s,a;this.updateCacheSize(e);var n=(this._source.roundZoom?Math.round:Math.floor)(this.getZoom(e)),d=Math.max(n-t.maxOverzooming,this._source.minzoom),c=Math.max(n+t.maxUnderzooming,this._source.minzoom),h={};this._coveredTiles={};var u;for(this.used?this._source.coord?u=e.getVisibleWrappedCoordinates(this._source.coord):(u=e.coveringTiles({tileSize:this._source.tileSize,minzoom:this._source.minzoom,maxzoom:this._source.maxzoom,roundZoom:this._source.roundZoom,reparseOverscaled:this._source.reparseOverscaled}),this._source.hasTile&&(u=u.filter(function(e){return o._source.hasTile(e)}))):u=[],i=0;i<u.length;i++)r=u[i],s=o.addTile(r),h[r.id]=!0,s.hasData()||o.findLoadedChildren(r,c,h)||(a=o.findLoadedParent(r,d,h),a&&o.addTile(a.coord));var l={};if(isRasterType(this._source.type))for(var m=Object.keys(h),p=0;p<m.length;p++){var _=m[p];r=TileCoord.fromID(_),s=o._tiles[_],s&&("undefined"==typeof s.fadeEndTime||s.fadeEndTime>=Date.now())&&(o.findLoadedChildren(r,c,h)&&(h[_]=!0),a=o.findLoadedParent(r,d,l),a&&o.addTile(a.coord))}var f;for(f in l)h[f]||(o._coveredTiles[f]=!0);for(f in l)h[f]=!0;var T=util.keysDifference(this._tiles,h);for(i=0;i<T.length;i++)o.removeTile(+T[i])}},t.prototype.addTile=function(e){var t=this._tiles[e.id];if(t)return t;var o=e.wrapped();t=this._tiles[o.id],t||(t=this._cache.get(o.id),t&&(t.redoPlacement(this._source),this._cacheTimers[o.id]&&(clearTimeout(this._cacheTimers[o.id]),this._cacheTimers[o.id]=void 0,this._setTileReloadTimer(o.id,t))));var i=Boolean(t);if(!i){var r=e.z,s=r>this._source.maxzoom?Math.pow(2,r-this._source.maxzoom):1;t=new Tile(o,this._source.tileSize*s,this._source.maxzoom),this.loadTile(t,this._tileLoaded.bind(this,t,e.id,t.state))}return t.uses++,this._tiles[e.id]=t,i||this._source.fire("dataloading",{tile:t,coord:t.coord,dataType:"source"}),t},t.prototype._setTileReloadTimer=function(e,t){var o=this,i=t.getExpiryTimeout();i&&(this._timers[e]=setTimeout(function(){o.reloadTile(e,"expired"),o._timers[e]=void 0},i))},t.prototype._setCacheInvalidationTimer=function(e,t){var o=this,i=t.getExpiryTimeout();i&&(this._cacheTimers[e]=setTimeout(function(){o._cache.remove(e),o._cacheTimers[e]=void 0},i))},t.prototype.removeTile=function(e){var t=this._tiles[e];if(t&&(t.uses--,delete this._tiles[e],this._timers[e]&&(clearTimeout(this._timers[e]),this._timers[e]=void 0),!(t.uses>0)))if(t.hasData()){var o=t.coord.wrapped().id;this._cache.add(o,t),this._setCacheInvalidationTimer(o,t)}else t.aborted=!0,this.abortTile(t),this.unloadTile(t)},t.prototype.clearTiles=function(){var e=this;for(var t in e._tiles)e.removeTile(t);this._cache.reset()},t.prototype.tilesIn=function(e){for(var t=this,o={},i=this.getIds(),r=1/0,s=1/0,a=-(1/0),n=-(1/0),d=e[0].zoom,c=0;c<e.length;c++){var h=e[c];r=Math.min(r,h.column),s=Math.min(s,h.row),a=Math.max(a,h.column),n=Math.max(n,h.row)}for(var u=0;u<i.length;u++){var l=t._tiles[i[u]],m=TileCoord.fromID(i[u]),p=[coordinateToTilePoint(m,l.sourceMaxZoom,new Coordinate(r,s,d)),coordinateToTilePoint(m,l.sourceMaxZoom,new Coordinate(a,n,d))];if(p[0].x<EXTENT&&p[0].y<EXTENT&&p[1].x>=0&&p[1].y>=0){for(var _=[],f=0;f<e.length;f++)_.push(coordinateToTilePoint(m,l.sourceMaxZoom,e[f]));var T=o[l.coord.id];void 0===T&&(T=o[l.coord.id]={tile:l,coord:m,queryGeometry:[],scale:Math.pow(2,t.transform.zoom-l.coord.z)}),T.queryGeometry.push(_)}}var v=[];for(var y in o)v.push(o[y]);return v},t.prototype.redoPlacement=function(){for(var e=this,t=this.getIds(),o=0;o<t.length;o++){var i=e.getTileByID(t[o]);i.redoPlacement(e._source)}},t.prototype.getVisibleCoordinates=function(){for(var e=this,t=this.getRenderableIds().map(TileCoord.fromID),o=0,i=t;o<i.length;o+=1){var r=i[o];r.posMatrix=e.transform.calculatePosMatrix(r,e._source.maxzoom)}return t},t}(Evented);SourceCache.maxOverzooming=10,SourceCache.maxUnderzooming=3,module.exports=SourceCache;
},{"../data/extent":54,"../geo/coordinate":61,"../util/evented":202,"../util/lru_cache":209,"../util/util":214,"./source":92,"./tile":94,"./tile_coord":96}],94:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util"),Bucket=_dereq_("../data/bucket"),FeatureIndex=_dereq_("../data/feature_index"),vt=_dereq_("vector-tile"),Protobuf=_dereq_("pbf"),GeoJSONFeature=_dereq_("../util/vectortile_to_geojson"),featureFilter=_dereq_("../style-spec/feature_filter"),CollisionTile=_dereq_("../symbol/collision_tile"),CollisionBoxArray=_dereq_("../symbol/collision_box"),CLOCK_SKEW_RETRY_TIMEOUT=3e4,Tile=function(e,t,i){this.coord=e,this.uid=util.uniqueId(),this.uses=0,this.tileSize=t,this.sourceMaxZoom=i,this.buckets={},this.expirationTime=null,this.expiredRequestCount=0,this.state="loading"};Tile.prototype.registerFadeDuration=function(e,t){var i=t+this.timeAdded;i<Date.now()||this.fadeEndTime&&i<this.fadeEndTime||(this.fadeEndTime=i,e.set(this.fadeEndTime-Date.now()))},Tile.prototype.loadVectorData=function(e,t){this.hasData()&&this.unloadVectorData(),this.state="loaded",e&&(e.rawTileData&&(this.rawTileData=e.rawTileData),this.collisionBoxArray=new CollisionBoxArray(e.collisionBoxArray),this.collisionTile=new CollisionTile(e.collisionTile,this.collisionBoxArray),this.featureIndex=new FeatureIndex(e.featureIndex,this.rawTileData,this.collisionTile),this.buckets=Bucket.deserialize(e.buckets,t.style))},Tile.prototype.reloadSymbolData=function(e,t){var i=this;if("unloaded"!==this.state){this.collisionTile=new CollisionTile(e.collisionTile,this.collisionBoxArray),this.featureIndex.setCollisionTile(this.collisionTile);for(var o in i.buckets){var r=i.buckets[o];"symbol"===r.layers[0].type&&(r.destroy(),delete i.buckets[o])}util.extend(this.buckets,Bucket.deserialize(e.buckets,t))}},Tile.prototype.unloadVectorData=function(){var e=this;for(var t in e.buckets)e.buckets[t].destroy();this.buckets={},this.collisionBoxArray=null,this.collisionTile=null,this.featureIndex=null,this.state="unloaded"},Tile.prototype.redoPlacement=function(e){var t=this;if("vector"===e.type||"geojson"===e.type)return"loaded"!==this.state?void(this.redoWhenDone=!0):void(this.collisionTile&&(this.state="reloading",e.dispatcher.send("redoPlacement",{type:e.type,uid:this.uid,source:e.id,angle:e.map.transform.angle,pitch:e.map.transform.pitch,showCollisionBoxes:e.map.showCollisionBoxes},function(i,o){t.reloadSymbolData(o,e.map.style),e.map&&(e.map.painter.tileExtentVAO.vao=null),t.state="loaded",t.redoWhenDone&&(t.redoWhenDone=!1,t.redoPlacement(e))},this.workerID)))},Tile.prototype.getBucket=function(e){return this.buckets[e.id]},Tile.prototype.querySourceFeatures=function(e,t){var i=this;if(this.rawTileData){this.vtLayers||(this.vtLayers=new vt.VectorTile(new Protobuf(this.rawTileData)).layers);var o=this.vtLayers._geojsonTileLayer||this.vtLayers[t.sourceLayer];if(o)for(var r=featureFilter(t&&t.filter),s={z:this.coord.z,x:this.coord.x,y:this.coord.y},a=0;a<o.length;a++){var l=o.feature(a);if(r(l)){var n=new GeoJSONFeature(l,i.coord.z,i.coord.x,i.coord.y);n.tile=s,e.push(n)}}}},Tile.prototype.hasData=function(){return"loaded"===this.state||"reloading"===this.state||"expired"===this.state},Tile.prototype.setExpiryData=function(e){var t=this.expirationTime;if(e.cacheControl){var i=util.parseCacheControl(e.cacheControl);i["max-age"]&&(this.expirationTime=Date.now()+1e3*i["max-age"])}else e.expires&&(this.expirationTime=new Date(e.expires).getTime());if(this.expirationTime){var o=Date.now(),r=!1;if(this.expirationTime>o)r=!1;else if(t)if(this.expirationTime<t)r=!0;else{var s=this.expirationTime-t;s?this.expirationTime=o+Math.max(s,CLOCK_SKEW_RETRY_TIMEOUT):r=!0}else r=!0;r?(this.expiredRequestCount++,this.state="expired"):this.expiredRequestCount=0}},Tile.prototype.getExpiryTimeout=function(){if(this.expirationTime)return this.expiredRequestCount?1e3*(1<<Math.min(this.expiredRequestCount-1,31)):Math.min(this.expirationTime-(new Date).getTime(),Math.pow(2,31)-1)},module.exports=Tile;
},{"../data/bucket":45,"../data/feature_index":55,"../style-spec/feature_filter":105,"../symbol/collision_box":162,"../symbol/collision_tile":164,"../util/util":214,"../util/vectortile_to_geojson":215,"pbf":25,"vector-tile":34}],95:[function(_dereq_,module,exports){
"use strict";var LngLatBounds=_dereq_("../geo/lng_lat_bounds"),clamp=_dereq_("../util/util").clamp,TileBounds=function(t,o,n){this.bounds=LngLatBounds.convert(t),this.minzoom=o||0,this.maxzoom=n||24};TileBounds.prototype.contains=function(t,o){var n=o?Math.min(t.z,o):t.z,i={minX:Math.floor(this.lngX(this.bounds.getWest(),n)),minY:Math.floor(this.latY(this.bounds.getNorth(),n)),maxX:Math.ceil(this.lngX(this.bounds.getEast(),n)),maxY:Math.ceil(this.latY(this.bounds.getSouth(),n))},a=t.x>=i.minX&&t.x<i.maxX&&t.y>=i.minY&&t.y<i.maxY;return a},TileBounds.prototype.lngX=function(t,o){return(t+180)*(Math.pow(2,o)/360)},TileBounds.prototype.latY=function(t,o){var n=clamp(Math.sin(Math.PI/180*t),-.9999,.9999),i=Math.pow(2,o)/(2*Math.PI);return Math.pow(2,o-1)+.5*Math.log((1+n)/(1-n))*-i},module.exports=TileBounds;
},{"../geo/lng_lat_bounds":63,"../util/util":214}],96:[function(_dereq_,module,exports){
"use strict";function edge(t,i){if(t.row>i.row){var o=t;t=i,i=o}return{x0:t.column,y0:t.row,x1:i.column,y1:i.row,dx:i.column-t.column,dy:i.row-t.row}}function scanSpans(t,i,o,r,e){var n=Math.max(o,Math.floor(i.y0)),h=Math.min(r,Math.ceil(i.y1));if(t.x0===i.x0&&t.y0===i.y0?t.x0+i.dy/t.dy*t.dx<i.x1:t.x1-i.dy/t.dy*t.dx<i.x0){var s=t;t=i,i=s}for(var a=t.dx/t.dy,d=i.dx/i.dy,y=t.dx>0,l=i.dx<0,u=n;u<h;u++){var x=a*Math.max(0,Math.min(t.dy,u+y-t.y0))+t.x0,c=d*Math.max(0,Math.min(i.dy,u+l-i.y0))+i.x0;e(Math.floor(c),Math.ceil(x),u)}}function scanTriangle(t,i,o,r,e,n){var h,s=edge(t,i),a=edge(i,o),d=edge(o,t);s.dy>a.dy&&(h=s,s=a,a=h),s.dy>d.dy&&(h=s,s=d,d=h),a.dy>d.dy&&(h=a,a=d,d=h),s.dy&&scanSpans(d,s,r,e,n),a.dy&&scanSpans(d,a,r,e,n)}function getQuadkey(t,i,o){for(var r,e="",n=t;n>0;n--)r=1<<n-1,e+=(i&r?1:0)+(o&r?2:0);return e}var WhooTS=_dereq_("@mapbox/whoots-js"),Coordinate=_dereq_("../geo/coordinate"),TileCoord=function(t,i,o,r){isNaN(r)&&(r=0),this.z=+t,this.x=+i,this.y=+o,this.w=+r,r*=2,r<0&&(r=r*-1-1);var e=1<<this.z;this.id=32*(e*e*r+e*this.y+this.x)+this.z,this.posMatrix=null};TileCoord.prototype.toString=function(){return this.z+"/"+this.x+"/"+this.y},TileCoord.prototype.toCoordinate=function(t){var i=Math.min(this.z,void 0===t?this.z:t),o=Math.pow(2,i),r=this.y,e=this.x+o*this.w;return new Coordinate(e,r,i)},TileCoord.prototype.url=function(t,i,o){var r=WhooTS.getTileBBox(this.x,this.y,this.z),e=getQuadkey(this.z,this.x,this.y);return t[(this.x+this.y)%t.length].replace("{prefix}",(this.x%16).toString(16)+(this.y%16).toString(16)).replace("{z}",Math.min(this.z,i||this.z)).replace("{x}",this.x).replace("{y}","tms"===o?Math.pow(2,this.z)-this.y-1:this.y).replace("{quadkey}",e).replace("{bbox-epsg-3857}",r)},TileCoord.prototype.parent=function(t){return 0===this.z?null:this.z>t?new TileCoord(this.z-1,this.x,this.y,this.w):new TileCoord(this.z-1,Math.floor(this.x/2),Math.floor(this.y/2),this.w)},TileCoord.prototype.wrapped=function(){return new TileCoord(this.z,this.x,this.y,0)},TileCoord.prototype.children=function(t){if(this.z>=t)return[new TileCoord(this.z+1,this.x,this.y,this.w)];var i=this.z+1,o=2*this.x,r=2*this.y;return[new TileCoord(i,o,r,this.w),new TileCoord(i,o+1,r,this.w),new TileCoord(i,o,r+1,this.w),new TileCoord(i,o+1,r+1,this.w)]},TileCoord.cover=function(t,i,o,r){function e(t,i,e){var s,a,d,y;if(e>=0&&e<=n)for(s=t;s<i;s++)a=Math.floor(s/n),d=(s%n+n)%n,0!==a&&r!==!0||(y=new TileCoord(o,d,e,a),h[y.id]=y)}void 0===r&&(r=!0);var n=1<<t,h={};return scanTriangle(i[0],i[1],i[2],0,n,e),scanTriangle(i[2],i[3],i[0],0,n,e),Object.keys(h).map(function(t){return h[t]})},TileCoord.fromID=function(t){var i=t%32,o=1<<i,r=(t-i)/32,e=r%o,n=(r-e)/o%o,h=Math.floor(r/(o*o));return h%2!==0&&(h=h*-1-1),h/=2,new TileCoord(i,e,n,h)},module.exports=TileCoord;
},{"../geo/coordinate":61,"@mapbox/whoots-js":4}],97:[function(_dereq_,module,exports){
"use strict";var Evented=_dereq_("../util/evented"),util=_dereq_("../util/util"),loadTileJSON=_dereq_("./load_tilejson"),normalizeURL=_dereq_("../util/mapbox").normalizeTileURL,TileBounds=_dereq_("./tile_bounds"),VectorTileSource=function(e){function t(t,i,o,r){if(e.call(this),this.id=t,this.dispatcher=o,this.type="vector",this.minzoom=0,this.maxzoom=22,this.scheme="xyz",this.tileSize=512,this.reparseOverscaled=!0,this.isTileClipped=!0,util.extend(this,util.pick(i,["url","scheme","tileSize"])),this._options=util.extend({type:"vector"},i),512!==this.tileSize)throw new Error("vector tile sources must have a tileSize of 512");this.setEventedParent(r)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.load=function(){var e=this;this.fire("dataloading",{dataType:"source"}),loadTileJSON(this._options,function(t,i){return t?void e.fire("error",t):(util.extend(e,i),e.setBounds(i.bounds),e.fire("data",{dataType:"source",sourceDataType:"metadata"}),void e.fire("data",{dataType:"source",sourceDataType:"content"}))})},t.prototype.setBounds=function(e){this.bounds=e,e&&(this.tileBounds=new TileBounds(e,this.minzoom,this.maxzoom))},t.prototype.hasTile=function(e){return!this.tileBounds||this.tileBounds.contains(e,this.maxzoom)},t.prototype.onAdd=function(e){this.load(),this.map=e},t.prototype.serialize=function(){return util.extend({},this._options)},t.prototype.loadTile=function(e,t){function i(i,o){if(!e.aborted){if(i)return t(i);this.map._refreshExpiredTiles&&e.setExpiryData(o),e.loadVectorData(o,this.map.painter),e.redoWhenDone&&(e.redoWhenDone=!1,e.redoPlacement(this)),t(null),e.reloadCallback&&(this.loadTile(e,e.reloadCallback),e.reloadCallback=null)}}var o=e.coord.z>this.maxzoom?Math.pow(2,e.coord.z-this.maxzoom):1,r={url:normalizeURL(e.coord.url(this.tiles,this.maxzoom,this.scheme),this.url),uid:e.uid,coord:e.coord,zoom:e.coord.z,tileSize:this.tileSize*o,type:this.type,source:this.id,overscaling:o,angle:this.map.transform.angle,pitch:this.map.transform.pitch,showCollisionBoxes:this.map.showCollisionBoxes};e.workerID&&"expired"!==e.state?"loading"===e.state?e.reloadCallback=t:this.dispatcher.send("reloadTile",r,i.bind(this),e.workerID):e.workerID=this.dispatcher.send("loadTile",r,i.bind(this))},t.prototype.abortTile=function(e){this.dispatcher.send("abortTile",{uid:e.uid,type:this.type,source:this.id},null,e.workerID)},t.prototype.unloadTile=function(e){e.unloadVectorData(),this.dispatcher.send("removeTile",{uid:e.uid,type:this.type,source:this.id},null,e.workerID)},t}(Evented);module.exports=VectorTileSource;
},{"../util/evented":202,"../util/mapbox":210,"../util/util":214,"./load_tilejson":87,"./tile_bounds":95}],98:[function(_dereq_,module,exports){
"use strict";var ajax=_dereq_("../util/ajax"),vt=_dereq_("vector-tile"),Protobuf=_dereq_("pbf"),WorkerTile=_dereq_("./worker_tile"),util=_dereq_("../util/util"),VectorTileWorkerSource=function(e,r,t){this.actor=e,this.layerIndex=r,t&&(this.loadVectorData=t),this.loading={},this.loaded={}};VectorTileWorkerSource.prototype.loadTile=function(e,r){function t(e,t){return delete this.loading[o][i],e?r(e):t?(a.vectorTile=t,a.parse(t,this.layerIndex,this.actor,function(e,o,i){if(e)return r(e);var a={};t.expires&&(a.expires=t.expires),t.cacheControl&&(a.cacheControl=t.cacheControl),r(null,util.extend({rawTileData:t.rawData},o,a),i)}),this.loaded[o]=this.loaded[o]||{},void(this.loaded[o][i]=a)):r(null,null)}var o=e.source,i=e.uid;this.loading[o]||(this.loading[o]={});var a=this.loading[o][i]=new WorkerTile(e);a.abort=this.loadVectorData(e,t.bind(this))},VectorTileWorkerSource.prototype.reloadTile=function(e,r){function t(e,t){if(this.reloadCallback){var o=this.reloadCallback;delete this.reloadCallback,this.parse(this.vectorTile,a.layerIndex,a.actor,o)}r(e,t)}var o=this.loaded[e.source],i=e.uid,a=this;if(o&&o[i]){var l=o[i];"parsing"===l.status?l.reloadCallback=r:"done"===l.status&&l.parse(l.vectorTile,this.layerIndex,this.actor,t.bind(l))}},VectorTileWorkerSource.prototype.abortTile=function(e){var r=this.loading[e.source],t=e.uid;r&&r[t]&&r[t].abort&&(r[t].abort(),delete r[t])},VectorTileWorkerSource.prototype.removeTile=function(e){var r=this.loaded[e.source],t=e.uid;r&&r[t]&&delete r[t]},VectorTileWorkerSource.prototype.loadVectorData=function(e,r){function t(e,t){if(e)return r(e);var o=new vt.VectorTile(new Protobuf(t.data));o.rawData=t.data,o.cacheControl=t.cacheControl,o.expires=t.expires,r(e,o)}var o=ajax.getArrayBuffer(e.url,t.bind(this));return function(){o.abort()}},VectorTileWorkerSource.prototype.redoPlacement=function(e,r){var t=this.loaded[e.source],o=this.loading[e.source],i=e.uid;if(t&&t[i]){var a=t[i],l=a.redoPlacement(e.angle,e.pitch,e.showCollisionBoxes);l.result&&r(null,l.result,l.transferables)}else o&&o[i]&&(o[i].angle=e.angle)},module.exports=VectorTileWorkerSource;
},{"../util/ajax":193,"../util/util":214,"./worker_tile":101,"pbf":25,"vector-tile":34}],99:[function(_dereq_,module,exports){
"use strict";var ajax=_dereq_("../util/ajax"),ImageSource=_dereq_("./image_source"),VideoSource=function(t){function e(e,o,i,r){t.call(this,e,o,i,r),this.roundZoom=!0,this.type="video",this.options=o}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.load=function(){var t=this,e=this.options;this.urls=e.urls,ajax.getVideo(e.urls,function(e,o){if(e)return t.fire("error",{error:e});t.video=o,t.video.loop=!0;var i;t.video.addEventListener("playing",function(){i=t.map.style.animationLoop.set(1/0),t.map._rerender()}),t.video.addEventListener("pause",function(){t.map.style.animationLoop.cancel(i)}),t.map&&t.video.play(),t._finishLoading()})},e.prototype.getVideo=function(){return this.video},e.prototype.onAdd=function(t){this.map||(this.load(),this.map=t,this.video&&(this.video.play(),this.setCoordinates(this.coordinates)))},e.prototype.prepare=function(){!this.tile||this.video.readyState<2||this._prepareImage(this.map.painter.gl,this.video)},e.prototype.serialize=function(){return{type:"video",urls:this.urls,coordinates:this.coordinates}},e}(ImageSource);module.exports=VideoSource;
},{"../util/ajax":193,"./image_source":86}],100:[function(_dereq_,module,exports){
"use strict";var Actor=_dereq_("../util/actor"),StyleLayerIndex=_dereq_("../style/style_layer_index"),VectorTileWorkerSource=_dereq_("./vector_tile_worker_source"),GeoJSONWorkerSource=_dereq_("./geojson_worker_source"),globalRTLTextPlugin=_dereq_("./rtl_text_plugin"),Worker=function(e){var r=this;this.self=e,this.actor=new Actor(e,this),this.layerIndexes={},this.workerSourceTypes={vector:VectorTileWorkerSource,geojson:GeoJSONWorkerSource},this.workerSources={},this.self.registerWorkerSource=function(e,o){if(r.workerSourceTypes[e])throw new Error('Worker source with name "'+e+'" already registered.');r.workerSourceTypes[e]=o},this.self.registerRTLTextPlugin=function(e){if(globalRTLTextPlugin.applyArabicShaping||globalRTLTextPlugin.processBidirectionalText)throw new Error("RTL text plugin already registered.");globalRTLTextPlugin.applyArabicShaping=e.applyArabicShaping,globalRTLTextPlugin.processBidirectionalText=e.processBidirectionalText}};Worker.prototype.setLayers=function(e,r){this.getLayerIndex(e).replace(r)},Worker.prototype.updateLayers=function(e,r){this.getLayerIndex(e).update(r.layers,r.removedIds,r.symbolOrder)},Worker.prototype.loadTile=function(e,r,o){this.getWorkerSource(e,r.type).loadTile(r,o)},Worker.prototype.reloadTile=function(e,r,o){this.getWorkerSource(e,r.type).reloadTile(r,o)},Worker.prototype.abortTile=function(e,r){this.getWorkerSource(e,r.type).abortTile(r)},Worker.prototype.removeTile=function(e,r){this.getWorkerSource(e,r.type).removeTile(r)},Worker.prototype.removeSource=function(e,r){var o=this.getWorkerSource(e,r.type);void 0!==o.removeSource&&o.removeSource(r)},Worker.prototype.redoPlacement=function(e,r,o){this.getWorkerSource(e,r.type).redoPlacement(r,o)},Worker.prototype.loadWorkerSource=function(e,r,o){try{this.self.importScripts(r.url),o()}catch(e){o(e)}},Worker.prototype.loadRTLTextPlugin=function(e,r,o){try{globalRTLTextPlugin.applyArabicShaping||globalRTLTextPlugin.processBidirectionalText||this.self.importScripts(r)}catch(e){o(e)}},Worker.prototype.getLayerIndex=function(e){var r=this.layerIndexes[e];return r||(r=this.layerIndexes[e]=new StyleLayerIndex),r},Worker.prototype.getWorkerSource=function(e,r){var o=this;if(this.workerSources[e]||(this.workerSources[e]={}),!this.workerSources[e][r]){var t={send:function(r,t,i,n){o.actor.send(r,t,i,n,e)}};this.workerSources[e][r]=new this.workerSourceTypes[r](t,this.getLayerIndex(e))}return this.workerSources[e][r]},module.exports=function(e){return new Worker(e)};
},{"../style/style_layer_index":156,"../util/actor":192,"./geojson_worker_source":84,"./rtl_text_plugin":91,"./vector_tile_worker_source":98}],101:[function(_dereq_,module,exports){
"use strict";function recalculateLayers(e,i){for(var r=0,o=e.layers;r<o.length;r+=1){var t=o[r];t.recalculate(i)}}function serializeBuckets(e,i){return e.filter(function(e){return!e.isEmpty()}).map(function(e){return e.serialize(i)})}var FeatureIndex=_dereq_("../data/feature_index"),CollisionTile=_dereq_("../symbol/collision_tile"),CollisionBoxArray=_dereq_("../symbol/collision_box"),DictionaryCoder=_dereq_("../util/dictionary_coder"),util=_dereq_("../util/util"),WorkerTile=function(e){this.coord=e.coord,this.uid=e.uid,this.zoom=e.zoom,this.tileSize=e.tileSize,this.source=e.source,this.overscaling=e.overscaling,this.angle=e.angle,this.pitch=e.pitch,this.showCollisionBoxes=e.showCollisionBoxes};WorkerTile.prototype.parse=function(e,i,r,o){var t=this;e.layers||(e={layers:{_geojsonTileLayer:e}}),this.status="parsing",this.data=e,this.collisionBoxArray=new CollisionBoxArray;var s=new DictionaryCoder(Object.keys(e.layers).sort()),l=new FeatureIndex(this.coord,this.overscaling);l.bucketLayerIDs={};var n={},a=0,c={featureIndex:l,iconDependencies:{},glyphDependencies:{}},u=i.familiesBySource[this.source];for(var h in u){var y=e.layers[h];if(y){1===y.version&&util.warnOnce('Vector tile source "'+t.source+'" layer "'+h+'" does not use vector tile spec v2 and therefore may have some rendering errors.');for(var d=s.encode(h),p=[],m=0;m<y.length;m++){var v=y.feature(m);v.index=m,v.sourceLayerIndex=d,p.push(v)}for(var f=0,g=u[h];f<g.length;f+=1){var x=g[f],B=x[0];if(!(B.minzoom&&t.zoom<B.minzoom||B.maxzoom&&t.zoom>=B.maxzoom||B.layout&&"none"===B.layout.visibility)){for(var b=0,k=x;b<k.length;b+=1){var z=k[b];z.recalculate(t.zoom)}var C=n[B.id]=B.createBucket({index:a,layers:x,zoom:t.zoom,overscaling:t.overscaling,collisionBoxArray:t.collisionBoxArray});C.populate(p,c),l.bucketLayerIDs[a]=x.map(function(e){return e.id}),a++}}}}var T=function(e){t.status="done",l.paintPropertyStatistics={};for(var i in n)util.extend(l.paintPropertyStatistics,n[i].getPaintPropertyStatistics());var r=[];o(null,{buckets:serializeBuckets(util.values(n),r),featureIndex:l.serialize(r),collisionTile:e.serialize(r),collisionBoxArray:t.collisionBoxArray.serialize()},r)};this.symbolBuckets=[];for(var w=i.symbolOrder.length-1;w>=0;w--){var A=n[i.symbolOrder[w]];A&&t.symbolBuckets.push(A)}if(0===this.symbolBuckets.length)return T(new CollisionTile(this.angle,this.pitch,this.collisionBoxArray));var D=0,I=Object.keys(c.iconDependencies),O=util.mapObject(c.glyphDependencies,function(e){return Object.keys(e).map(Number)}),L=function(e){if(e)return o(e);if(D++,2===D){for(var i=new CollisionTile(t.angle,t.pitch,t.collisionBoxArray),r=0,s=t.symbolBuckets;r<s.length;r+=1){var l=s[r];recalculateLayers(l,t.zoom),l.prepare(O,I),l.place(i,t.showCollisionBoxes)}T(i)}};Object.keys(O).length?r.send("getGlyphs",{uid:this.uid,stacks:O},function(e,i){O=i,L(e)}):L(),I.length?r.send("getIcons",{icons:I},function(e,i){I=i,L(e)}):L()},WorkerTile.prototype.redoPlacement=function(e,i,r){var o=this;if(this.angle=e,this.pitch=i,"done"!==this.status)return{};for(var t=new CollisionTile(this.angle,this.pitch,this.collisionBoxArray),s=0,l=o.symbolBuckets;s<l.length;s+=1){var n=l[s];recalculateLayers(n,o.zoom),n.place(t,r)}var a=[];return{result:{buckets:serializeBuckets(this.symbolBuckets,a),collisionTile:t.serialize(a)},transferables:a}},module.exports=WorkerTile;
},{"../data/feature_index":55,"../symbol/collision_box":162,"../symbol/collision_tile":164,"../util/dictionary_coder":199,"../util/util":214}],102:[function(_dereq_,module,exports){
"use strict";function deref(r,e){var f={};for(var t in r)"ref"!==t&&(f[t]=r[t]);return refProperties.forEach(function(r){r in e&&(f[r]=e[r])}),f}function derefLayers(r){r=r.slice();for(var e=Object.create(null),f=0;f<r.length;f++)e[r[f].id]=r[f];for(var t=0;t<r.length;t++)"ref"in r[t]&&(r[t]=deref(r[t],e[r[t].ref]));return r}var refProperties=_dereq_("./util/ref_properties");module.exports=derefLayers;
},{"./util/ref_properties":124}],103:[function(_dereq_,module,exports){
"use strict";function diffSources(e,r,o,a){e=e||{},r=r||{};var s;for(s in e)e.hasOwnProperty(s)&&(r.hasOwnProperty(s)||(o.push({command:operations.removeSource,args:[s]}),a[s]=!0));for(s in r)r.hasOwnProperty(s)&&(e.hasOwnProperty(s)?isEqual(e[s],r[s])||(o.push({command:operations.removeSource,args:[s]}),o.push({command:operations.addSource,args:[s,r[s]]}),a[s]=!0):o.push({command:operations.addSource,args:[s,r[s]]}))}function diffLayerPropertyChanges(e,r,o,a,s,t){e=e||{},r=r||{};var n;for(n in e)e.hasOwnProperty(n)&&(isEqual(e[n],r[n])||o.push({command:t,args:[a,n,r[n],s]}));for(n in r)r.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(isEqual(e[n],r[n])||o.push({command:t,args:[a,n,r[n],s]}))}function pluckId(e){return e.id}function indexById(e,r){return e[r.id]=r,e}function diffLayers(e,r,o){e=e||[],r=r||[];var a,s,t,n,i,p,m,u=e.map(pluckId),l=r.map(pluckId),y=e.reduce(indexById,{}),c=r.reduce(indexById,{}),d=u.slice(),h=Object.create(null);for(a=0,s=0;a<u.length;a++)t=u[a],c.hasOwnProperty(t)?s++:(o.push({command:operations.removeLayer,args:[t]}),d.splice(d.indexOf(t,s),1));for(a=0,s=0;a<l.length;a++)t=l[l.length-1-a],d[d.length-1-a]!==t&&(y.hasOwnProperty(t)?(o.push({command:operations.removeLayer,args:[t]}),d.splice(d.lastIndexOf(t,d.length-s),1)):s++,p=d[d.length-a],o.push({command:operations.addLayer,args:[c[t],p]}),d.splice(d.length-a,0,t),h[t]=!0);for(a=0;a<l.length;a++)if(t=l[a],n=y[t],i=c[t],!h[t]&&!isEqual(n,i))if(isEqual(n.source,i.source)&&isEqual(n["source-layer"],i["source-layer"])&&isEqual(n.type,i.type)){diffLayerPropertyChanges(n.layout,i.layout,o,t,null,operations.setLayoutProperty),diffLayerPropertyChanges(n.paint,i.paint,o,t,null,operations.setPaintProperty),isEqual(n.filter,i.filter)||o.push({command:operations.setFilter,args:[t,i.filter]}),isEqual(n.minzoom,i.minzoom)&&isEqual(n.maxzoom,i.maxzoom)||o.push({command:operations.setLayerZoomRange,args:[t,i.minzoom,i.maxzoom]});for(m in n)n.hasOwnProperty(m)&&"layout"!==m&&"paint"!==m&&"filter"!==m&&"metadata"!==m&&"minzoom"!==m&&"maxzoom"!==m&&(0===m.indexOf("paint.")?diffLayerPropertyChanges(n[m],i[m],o,t,m.slice(6),operations.setPaintProperty):isEqual(n[m],i[m])||o.push({command:operations.setLayerProperty,args:[t,m,i[m]]}));for(m in i)i.hasOwnProperty(m)&&!n.hasOwnProperty(m)&&"layout"!==m&&"paint"!==m&&"filter"!==m&&"metadata"!==m&&"minzoom"!==m&&"maxzoom"!==m&&(0===m.indexOf("paint.")?diffLayerPropertyChanges(n[m],i[m],o,t,m.slice(6),operations.setPaintProperty):isEqual(n[m],i[m])||o.push({command:operations.setLayerProperty,args:[t,m,i[m]]}))}else o.push({command:operations.removeLayer,args:[t]}),p=d[d.lastIndexOf(t)+1],o.push({command:operations.addLayer,args:[i,p]})}function diffStyles(e,r){if(!e)return[{command:operations.setStyle,args:[r]}];var o=[];try{if(!isEqual(e.version,r.version))return[{command:operations.setStyle,args:[r]}];isEqual(e.center,r.center)||o.push({command:operations.setCenter,args:[r.center]}),isEqual(e.zoom,r.zoom)||o.push({command:operations.setZoom,args:[r.zoom]}),isEqual(e.bearing,r.bearing)||o.push({command:operations.setBearing,args:[r.bearing]}),isEqual(e.pitch,r.pitch)||o.push({command:operations.setPitch,args:[r.pitch]}),isEqual(e.sprite,r.sprite)||o.push({command:operations.setSprite,args:[r.sprite]}),isEqual(e.glyphs,r.glyphs)||o.push({command:operations.setGlyphs,args:[r.glyphs]}),isEqual(e.transition,r.transition)||o.push({command:operations.setTransition,args:[r.transition]}),isEqual(e.light,r.light)||o.push({command:operations.setLight,args:[r.light]});var a={},s=[];diffSources(e.sources,r.sources,s,a);var t=[];e.layers&&e.layers.forEach(function(e){a[e.source]?o.push({command:operations.removeLayer,args:[e.id]}):t.push(e)}),o=o.concat(s),diffLayers(t,r.layers,o)}catch(e){console.warn("Unable to compute style diff:",e),o=[{command:operations.setStyle,args:[r]}]}return o}var isEqual=_dereq_("lodash.isequal"),operations={setStyle:"setStyle",addLayer:"addLayer",removeLayer:"removeLayer",setPaintProperty:"setPaintProperty",setLayoutProperty:"setLayoutProperty",setFilter:"setFilter",addSource:"addSource",removeSource:"removeSource",setLayerZoomRange:"setLayerZoomRange",setLayerProperty:"setLayerProperty",setCenter:"setCenter",setZoom:"setZoom",setBearing:"setBearing",setPitch:"setPitch",setSprite:"setSprite",setGlyphs:"setGlyphs",setTransition:"setTransition",setLight:"setLight"};module.exports=diffStyles,module.exports.operations=operations;
},{"lodash.isequal":116}],104:[function(_dereq_,module,exports){
"use strict";function ValidationError(r,i){this.message=(r?r+": ":"")+format.apply(format,Array.prototype.slice.call(arguments,2)),null!==i&&void 0!==i&&i.__line__&&(this.line=i.__line__)}var format=_dereq_("util").format;module.exports=ValidationError;
},{"util":33}],105:[function(_dereq_,module,exports){
"use strict";function createFilter(e){return new Function("f","var p = (f && f.properties || {}); return "+compile(e))}function compile(e){if(!e)return"true";var i=e[0];if(e.length<=1)return"any"===i?"false":"true";var n="=="===i?compileComparisonOp(e[1],e[2],"===",!1):"!="===i?compileComparisonOp(e[1],e[2],"!==",!1):"<"===i||">"===i||"<="===i||">="===i?compileComparisonOp(e[1],e[2],i,!0):"any"===i?compileLogicalOp(e.slice(1),"||"):"all"===i?compileLogicalOp(e.slice(1),"&&"):"none"===i?compileNegation(compileLogicalOp(e.slice(1),"||")):"in"===i?compileInOp(e[1],e.slice(2)):"!in"===i?compileNegation(compileInOp(e[1],e.slice(2))):"has"===i?compileHasOp(e[1]):"!has"===i?compileNegation(compileHasOp(e[1])):"true";return"("+n+")"}function compilePropertyReference(e){return"$type"===e?"f.type":"$id"===e?"f.id":"p["+JSON.stringify(e)+"]"}function compileComparisonOp(e,i,n,r){var o=compilePropertyReference(e),t="$type"===e?types.indexOf(i):JSON.stringify(i);return(r?"typeof "+o+"=== typeof "+t+"&&":"")+o+n+t}function compileLogicalOp(e,i){return e.map(compile).join(i)}function compileInOp(e,i){"$type"===e&&(i=i.map(function(e){return types.indexOf(e)}));var n=JSON.stringify(i.sort(compare)),r=compilePropertyReference(e);return i.length<=200?n+".indexOf("+r+") !== -1":"function(v, a, i, j) {while (i <= j) { var m = (i + j) >> 1;    if (a[m] === v) return true; if (a[m] > v) j = m - 1; else i = m + 1;}return false; }("+r+", "+n+",0,"+(i.length-1)+")"}function compileHasOp(e){return"$id"===e?'"id" in f':JSON.stringify(e)+" in p"}function compileNegation(e){return"!("+e+")"}function compare(e,i){return e<i?-1:e>i?1:0}module.exports=createFilter;var types=["Unknown","Point","LineString","Polygon"];
},{}],106:[function(_dereq_,module,exports){
"use strict";function xyz2lab(r){return r>t3?Math.pow(r,1/3):r/t2+t0}function lab2xyz(r){return r>t1?r*r*r:t2*(r-t0)}function xyz2rgb(r){return 255*(r<=.0031308?12.92*r:1.055*Math.pow(r,1/2.4)-.055)}function rgb2xyz(r){return r/=255,r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)}function rgbToLab(r){var t=rgb2xyz(r[0]),a=rgb2xyz(r[1]),n=rgb2xyz(r[2]),b=xyz2lab((.4124564*t+.3575761*a+.1804375*n)/Xn),o=xyz2lab((.2126729*t+.7151522*a+.072175*n)/Yn),g=xyz2lab((.0193339*t+.119192*a+.9503041*n)/Zn);return[116*o-16,500*(b-o),200*(o-g),r[3]]}function labToRgb(r){var t=(r[0]+16)/116,a=isNaN(r[1])?t:t+r[1]/500,n=isNaN(r[2])?t:t-r[2]/200;return t=Yn*lab2xyz(t),a=Xn*lab2xyz(a),n=Zn*lab2xyz(n),[xyz2rgb(3.2404542*a-1.5371385*t-.4985314*n),xyz2rgb(-.969266*a+1.8760108*t+.041556*n),xyz2rgb(.0556434*a-.2040259*t+1.0572252*n),r[3]]}function rgbToHcl(r){var t=rgbToLab(r),a=t[0],n=t[1],b=t[2],o=Math.atan2(b,n)*rad2deg;return[o<0?o+360:o,Math.sqrt(n*n+b*b),a,r[3]]}function hclToRgb(r){var t=r[0]*deg2rad,a=r[1],n=r[2];return labToRgb([n,Math.cos(t)*a,Math.sin(t)*a,r[3]])}var Xn=.95047,Yn=1,Zn=1.08883,t0=4/29,t1=6/29,t2=3*t1*t1,t3=t1*t1*t1,deg2rad=Math.PI/180,rad2deg=180/Math.PI;module.exports={lab:{forward:rgbToLab,reverse:labToRgb},hcl:{forward:rgbToHcl,reverse:hclToRgb}};
},{}],107:[function(_dereq_,module,exports){
"use strict";function identityFunction(t){return t}function createFunction(t,e){var o,n="color"===e.type;if(isFunctionDefinition(t)){var r=t.stops&&"object"==typeof t.stops[0][0],a=r||void 0!==t.property,i=r||!a,s=t.type||("interpolated"===e.function?"exponential":"interval");n&&(t=extend({},t),t.stops&&(t.stops=t.stops.map(function(t){return[t[0],parseColor(t[1])]})),t.default?t.default=parseColor(t.default):t.default=parseColor(e.default));var u,p,l;if("exponential"===s)u=evaluateExponentialFunction;else if("interval"===s)u=evaluateIntervalFunction;else if("categorical"===s){u=evaluateCategoricalFunction,p=Object.create(null);for(var c=0,f=t.stops;c<f.length;c+=1){var v=f[c];p[v[0]]=v[1]}l=typeof t.stops[0][0]}else{if("identity"!==s)throw new Error('Unknown function type "'+s+'"');u=evaluateIdentityFunction}var d;if(t.colorSpace&&"rgb"!==t.colorSpace){if(!colorSpaces[t.colorSpace])throw new Error("Unknown color space: "+t.colorSpace);var y=colorSpaces[t.colorSpace];t=JSON.parse(JSON.stringify(t));for(var F=0;F<t.stops.length;F++)t.stops[F]=[t.stops[F][0],y.forward(t.stops[F][1])];d=y.reverse}else d=identityFunction;if(r){for(var h={},g=[],m=0;m<t.stops.length;m++){var C=t.stops[m],S=C[0].zoom;void 0===h[S]&&(h[S]={zoom:S,type:t.type,property:t.property,stops:[]},g.push(S)),h[S].stops.push([C[0].value,C[1]])}for(var T=[],b=0,x=g;b<x.length;b+=1){var E=x[b];T.push([h[E].zoom,createFunction(h[E],e)])}o=function(o,n){return d(evaluateExponentialFunction({stops:T,base:t.base},e,o)(o,n))},o.isFeatureConstant=!1,o.isZoomConstant=!1}else i?(o=function(o){return d(u(t,e,o,p,l))},o.isFeatureConstant=!0,o.isZoomConstant=!1):(o=function(o,n){var r=n[t.property];return void 0===r?coalesce(t.default,e.default):d(u(t,e,r,p,l))},o.isFeatureConstant=!1,o.isZoomConstant=!0)}else n&&t&&(t=parseColor(t)),o=function(){return t},o.isFeatureConstant=!0,o.isZoomConstant=!0;return o}function coalesce(t,e,o){return void 0!==t?t:void 0!==e?e:void 0!==o?o:void 0}function evaluateCategoricalFunction(t,e,o,n,r){var a=typeof o===r?n[o]:void 0;return coalesce(a,t.default,e.default)}function evaluateIntervalFunction(t,e,o){if("number"!==getType(o))return coalesce(t.default,e.default);var n=t.stops.length;if(1===n)return t.stops[0][1];if(o<=t.stops[0][0])return t.stops[0][1];if(o>=t.stops[n-1][0])return t.stops[n-1][1];var r=findStopLessThanOrEqualTo(t.stops,o);return t.stops[r][1]}function evaluateExponentialFunction(t,e,o){var n=void 0!==t.base?t.base:1;if("number"!==getType(o))return coalesce(t.default,e.default);var r=t.stops.length;if(1===r)return t.stops[0][1];if(o<=t.stops[0][0])return t.stops[0][1];if(o>=t.stops[r-1][0])return t.stops[r-1][1];var a=findStopLessThanOrEqualTo(t.stops,o);return interpolate(o,n,t.stops[a][0],t.stops[a+1][0],t.stops[a][1],t.stops[a+1][1])}function evaluateIdentityFunction(t,e,o){return"color"===e.type?o=parseColor(o):getType(o)!==e.type&&(o=void 0),coalesce(o,t.default,e.default)}function findStopLessThanOrEqualTo(t,e){for(var o,n,r=t.length,a=0,i=r-1,s=0;a<=i;){if(s=Math.floor((a+i)/2),o=t[s][0],n=t[s+1][0],e===o||e>o&&e<n)return s;o<e?a=s+1:o>e&&(i=s-1)}return Math.max(s-1,0)}function interpolate(t,e,o,n,r,a){return"function"==typeof r?function(){var i=r.apply(void 0,arguments),s=a.apply(void 0,arguments);if(void 0!==i&&void 0!==s)return interpolate(t,e,o,n,i,s)}:r.length?interpolateArray(t,e,o,n,r,a):interpolateNumber(t,e,o,n,r,a)}function interpolateNumber(t,e,o,n,r,a){var i=interpolationFactor(t,e,o,n);return r+i*(a-r)}function interpolateArray(t,e,o,n,r,a){for(var i=[],s=0;s<r.length;s++)i[s]=interpolateNumber(t,e,o,n,r[s],a[s]);return i}function isFunctionDefinition(t){return"object"==typeof t&&(t.stops||"identity"===t.type)}function interpolationFactor(t,e,o,n){var r=n-o,a=t-o;return 1===e?a/r:(Math.pow(e,a)-1)/(Math.pow(e,r)-1)}var colorSpaces=_dereq_("./color_spaces"),parseColor=_dereq_("../util/parse_color"),extend=_dereq_("../util/extend"),getType=_dereq_("../util/get_type");module.exports=createFunction,module.exports.isFunctionDefinition=isFunctionDefinition,module.exports.interpolationFactor=interpolationFactor,module.exports.findStopLessThanOrEqualTo=findStopLessThanOrEqualTo;
},{"../util/extend":121,"../util/get_type":122,"../util/parse_color":123,"./color_spaces":106}],108:[function(_dereq_,module,exports){
"use strict";function key(r){return stringify(refProperties.map(function(e){return r[e]}))}function groupByLayout(r){for(var e={},t=0;t<r.length;t++){var i=key(r[t]),u=e[i];u||(u=e[i]=[]),u.push(r[t])}var n=[];for(var o in e)n.push(e[o]);return n}var refProperties=_dereq_("./util/ref_properties"),stringify=_dereq_("fast-stable-stringify");module.exports=groupByLayout;
},{"./util/ref_properties":124,"fast-stable-stringify":110}],109:[function(_dereq_,module,exports){
function clamp_css_byte(e){return e=Math.round(e),e<0?0:e>255?255:e}function clamp_css_float(e){return e<0?0:e>1?1:e}function parse_css_int(e){return clamp_css_byte("%"===e[e.length-1]?parseFloat(e)/100*255:parseInt(e))}function parse_css_float(e){return clamp_css_float("%"===e[e.length-1]?parseFloat(e)/100:parseFloat(e))}function css_hue_to_rgb(e,r,l){return l<0?l+=1:l>1&&(l-=1),6*l<1?e+(r-e)*l*6:2*l<1?r:3*l<2?e+(r-e)*(2/3-l)*6:e}function parseCSSColor(e){var r=e.replace(/ /g,"").toLowerCase();if(r in kCSSColorTable)return kCSSColorTable[r].slice();if("#"===r[0]){if(4===r.length){var l=parseInt(r.substr(1),16);return l>=0&&l<=4095?[(3840&l)>>4|(3840&l)>>8,240&l|(240&l)>>4,15&l|(15&l)<<4,1]:null}if(7===r.length){var l=parseInt(r.substr(1),16);return l>=0&&l<=16777215?[(16711680&l)>>16,(65280&l)>>8,255&l,1]:null}return null}var a=r.indexOf("("),t=r.indexOf(")");if(a!==-1&&t+1===r.length){var n=r.substr(0,a),s=r.substr(a+1,t-(a+1)).split(","),o=1;switch(n){case"rgba":if(4!==s.length)return null;o=parse_css_float(s.pop());case"rgb":return 3!==s.length?null:[parse_css_int(s[0]),parse_css_int(s[1]),parse_css_int(s[2]),o];case"hsla":if(4!==s.length)return null;o=parse_css_float(s.pop());case"hsl":if(3!==s.length)return null;var i=(parseFloat(s[0])%360+360)%360/360,u=parse_css_float(s[1]),g=parse_css_float(s[2]),d=g<=.5?g*(u+1):g+u-g*u,c=2*g-d;return[clamp_css_byte(255*css_hue_to_rgb(c,d,i+1/3)),clamp_css_byte(255*css_hue_to_rgb(c,d,i)),clamp_css_byte(255*css_hue_to_rgb(c,d,i-1/3)),o];default:return null}}return null}var kCSSColorTable={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};try{exports.parseCSSColor=parseCSSColor}catch(e){}
},{}],110:[function(_dereq_,module,exports){
function sss(r){var e,t,s,n,u,a;switch(typeof r){case"object":if(null===r)return null;if(isArray(r)){for(s="[",t=r.length-1,e=0;e<t;e++)s+=sss(r[e])+",";return t>-1&&(s+=sss(r[e])),s+"]"}for(n=objKeys(r).sort(),t=n.length,s="{",u=n[e=0],a=t>0&&void 0!==r[u];e<t;)a?(s+='"'+u.replace(strReg,strReplace)+'":'+sss(r[u]),u=n[++e],a=e<t&&void 0!==r[u],a&&(s+=",")):(u=n[++e],a=e<t&&void 0!==r[u]);return s+"}";case"undefined":return null;case"string":return'"'+r.replace(strReg,strReplace)+'"';default:return r}}var toString={}.toString,isArray=Array.isArray||function(r){return"[object Array]"===toString.call(r)},objKeys=Object.keys||function(r){var e=[];for(var t in r)r.hasOwnProperty(t)&&e.push(t);return e},strReg=/[\u0000-\u001f"\\]/g,strReplace=function(r){var e=r.charCodeAt(0);switch(e){case 34:return'\\"';case 92:return"\\\\";case 12:return"\\f";case 10:return"\\n";case 13:return"\\r";case 9:return"\\t";case 8:return"\\b";default:return e>15?"\\u00"+e.toString(16):"\\u000"+e.toString(16)}};module.exports=function(r){if(void 0!==r)return""+sss(r)},module.exports.stringSearch=strReg,module.exports.stringReplace=strReplace;
},{}],111:[function(_dereq_,module,exports){
function isObjectLike(r){return!!r&&"object"==typeof r}function arraySome(r,e){for(var a=-1,t=r.length;++a<t;)if(e(r[a],a,r))return!0;return!1}function baseIsEqual(r,e,a,t,o,n){return r===e||(null==r||null==e||!isObject(r)&&!isObjectLike(e)?r!==r&&e!==e:baseIsEqualDeep(r,e,baseIsEqual,a,t,o,n))}function baseIsEqualDeep(r,e,a,t,o,n,u){var c=isArray(r),s=isArray(e),i=arrayTag,g=arrayTag;c||(i=objToString.call(r),i==argsTag?i=objectTag:i!=objectTag&&(c=isTypedArray(r))),s||(g=objToString.call(e),g==argsTag?g=objectTag:g!=objectTag&&(s=isTypedArray(e)));var b=i==objectTag,l=g==objectTag,f=i==g;if(f&&!c&&!b)return equalByTag(r,e,i);if(!o){var y=b&&hasOwnProperty.call(r,"__wrapped__"),T=l&&hasOwnProperty.call(e,"__wrapped__");if(y||T)return a(y?r.value():r,T?e.value():e,t,o,n,u)}if(!f)return!1;n||(n=[]),u||(u=[]);for(var j=n.length;j--;)if(n[j]==r)return u[j]==e;n.push(r),u.push(e);var p=(c?equalArrays:equalObjects)(r,e,a,t,o,n,u);return n.pop(),u.pop(),p}function equalArrays(r,e,a,t,o,n,u){var c=-1,s=r.length,i=e.length;if(s!=i&&!(o&&i>s))return!1;for(;++c<s;){var g=r[c],b=e[c],l=t?t(o?b:g,o?g:b,c):void 0;if(void 0!==l){if(l)continue;return!1}if(o){if(!arraySome(e,function(r){return g===r||a(g,r,t,o,n,u)}))return!1}else if(g!==b&&!a(g,b,t,o,n,u))return!1}return!0}function equalByTag(r,e,a){switch(a){case boolTag:case dateTag:return+r==+e;case errorTag:return r.name==e.name&&r.message==e.message;case numberTag:return r!=+r?e!=+e:r==+e;case regexpTag:case stringTag:return r==e+""}return!1}function equalObjects(r,e,a,t,o,n,u){var c=keys(r),s=c.length,i=keys(e),g=i.length;if(s!=g&&!o)return!1;for(var b=s;b--;){var l=c[b];if(!(o?l in e:hasOwnProperty.call(e,l)))return!1}for(var f=o;++b<s;){l=c[b];var y=r[l],T=e[l],j=t?t(o?T:y,o?y:T,l):void 0;if(!(void 0===j?a(y,T,t,o,n,u):j))return!1;f||(f="constructor"==l)}if(!f){var p=r.constructor,v=e.constructor;if(p!=v&&"constructor"in r&&"constructor"in e&&!("function"==typeof p&&p instanceof p&&"function"==typeof v&&v instanceof v))return!1}return!0}function isObject(r){var e=typeof r;return!!r&&("object"==e||"function"==e)}var isArray=_dereq_("lodash.isarray"),isTypedArray=_dereq_("lodash.istypedarray"),keys=_dereq_("lodash.keys"),argsTag="[object Arguments]",arrayTag="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",numberTag="[object Number]",objectTag="[object Object]",regexpTag="[object RegExp]",stringTag="[object String]",objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,objToString=objectProto.toString;module.exports=baseIsEqual;
},{"lodash.isarray":115,"lodash.istypedarray":117,"lodash.keys":118}],112:[function(_dereq_,module,exports){
function bindCallback(n,t,r){if("function"!=typeof n)return identity;if(void 0===t)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,c){return n.call(t,r,e,u,c)};case 5:return function(r,e,u,c,i){return n.call(t,r,e,u,c,i)}}return function(){return n.apply(t,arguments)}}function identity(n){return n}module.exports=bindCallback;
},{}],113:[function(_dereq_,module,exports){
function isObjectLike(t){return!!t&&"object"==typeof t}function getNative(t,o){var e=null==t?void 0:t[o];return isNative(e)?e:void 0}function isFunction(t){return isObject(t)&&objToString.call(t)==funcTag}function isObject(t){var o=typeof t;return!!t&&("object"==o||"function"==o)}function isNative(t){return null!=t&&(isFunction(t)?reIsNative.test(fnToString.call(t)):isObjectLike(t)&&reIsHostCtor.test(t))}var funcTag="[object Function]",reIsHostCtor=/^\[object .+?Constructor\]$/,objectProto=Object.prototype,fnToString=Function.prototype.toString,hasOwnProperty=objectProto.hasOwnProperty,objToString=objectProto.toString,reIsNative=RegExp("^"+fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");module.exports=getNative;
},{}],114:[function(_dereq_,module,exports){
function isArguments(t){return isArrayLikeObject(t)&&hasOwnProperty.call(t,"callee")&&(!propertyIsEnumerable.call(t,"callee")||objectToString.call(t)==argsTag)}function isArrayLike(t){return null!=t&&isLength(t.length)&&!isFunction(t)}function isArrayLikeObject(t){return isObjectLike(t)&&isArrayLike(t)}function isFunction(t){var e=isObject(t)?objectToString.call(t):"";return e==funcTag||e==genTag}function isLength(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=MAX_SAFE_INTEGER}function isObject(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function isObjectLike(t){return!!t&&"object"==typeof t}var MAX_SAFE_INTEGER=9007199254740991,argsTag="[object Arguments]",funcTag="[object Function]",genTag="[object GeneratorFunction]",objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,objectToString=objectProto.toString,propertyIsEnumerable=objectProto.propertyIsEnumerable;module.exports=isArguments;
},{}],115:[function(_dereq_,module,exports){
function isObjectLike(t){return!!t&&"object"==typeof t}function getNative(t,r){var e=null==t?void 0:t[r];return isNative(e)?e:void 0}function isLength(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=MAX_SAFE_INTEGER}function isFunction(t){return isObject(t)&&objToString.call(t)==funcTag}function isObject(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function isNative(t){return null!=t&&(isFunction(t)?reIsNative.test(fnToString.call(t)):isObjectLike(t)&&reIsHostCtor.test(t))}var arrayTag="[object Array]",funcTag="[object Function]",reIsHostCtor=/^\[object .+?Constructor\]$/,objectProto=Object.prototype,fnToString=Function.prototype.toString,hasOwnProperty=objectProto.hasOwnProperty,objToString=objectProto.toString,reIsNative=RegExp("^"+fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nativeIsArray=getNative(Array,"isArray"),MAX_SAFE_INTEGER=9007199254740991,isArray=nativeIsArray||function(t){return isObjectLike(t)&&isLength(t.length)&&objToString.call(t)==arrayTag};module.exports=isArray;
},{}],116:[function(_dereq_,module,exports){
function isEqual(a,l,i,e){i="function"==typeof i?bindCallback(i,e,3):void 0;var s=i?i(a,l):void 0;return void 0===s?baseIsEqual(a,l,i):!!s}var baseIsEqual=_dereq_("lodash._baseisequal"),bindCallback=_dereq_("lodash._bindcallback");module.exports=isEqual;
},{"lodash._baseisequal":111,"lodash._bindcallback":112}],117:[function(_dereq_,module,exports){
function isLength(a){return"number"==typeof a&&a>-1&&a%1==0&&a<=MAX_SAFE_INTEGER}function isObjectLike(a){return!!a&&"object"==typeof a}function isTypedArray(a){return isObjectLike(a)&&isLength(a.length)&&!!typedArrayTags[objectToString.call(a)]}var MAX_SAFE_INTEGER=9007199254740991,argsTag="[object Arguments]",arrayTag="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag="[object Function]",mapTag="[object Map]",numberTag="[object Number]",objectTag="[object Object]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",weakMapTag="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0,typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=!1;var objectProto=Object.prototype,objectToString=objectProto.toString;module.exports=isTypedArray;
},{}],118:[function(_dereq_,module,exports){
function baseProperty(e){return function(t){return null==t?void 0:t[e]}}function isArrayLike(e){return null!=e&&isLength(getLength(e))}function isIndex(e,t){return e="number"==typeof e||reIsUint.test(e)?+e:-1,t=null==t?MAX_SAFE_INTEGER:t,e>-1&&e%1==0&&e<t}function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=MAX_SAFE_INTEGER}function shimKeys(e){for(var t=keysIn(e),r=t.length,n=r&&e.length,s=!!n&&isLength(n)&&(isArray(e)||isArguments(e)),o=-1,i=[];++o<r;){var u=t[o];(s&&isIndex(u,n)||hasOwnProperty.call(e,u))&&i.push(u)}return i}function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function keysIn(e){if(null==e)return[];isObject(e)||(e=Object(e));var t=e.length;t=t&&isLength(t)&&(isArray(e)||isArguments(e))&&t||0;for(var r=e.constructor,n=-1,s="function"==typeof r&&r.prototype===e,o=Array(t),i=t>0;++n<t;)o[n]=n+"";for(var u in e)i&&isIndex(u,t)||"constructor"==u&&(s||!hasOwnProperty.call(e,u))||o.push(u);return o}var getNative=_dereq_("lodash._getnative"),isArguments=_dereq_("lodash.isarguments"),isArray=_dereq_("lodash.isarray"),reIsUint=/^\d+$/,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeKeys=getNative(Object,"keys"),MAX_SAFE_INTEGER=9007199254740991,getLength=baseProperty("length"),keys=nativeKeys?function(e){var t=null==e?void 0:e.constructor;return"function"==typeof t&&t.prototype===e||"function"!=typeof e&&isArrayLike(e)?shimKeys(e):isObject(e)?nativeKeys(e):[]}:shimKeys;module.exports=keys;
},{"lodash._getnative":113,"lodash.isarguments":114,"lodash.isarray":115}],119:[function(_dereq_,module,exports){
"use strict";module.exports=_dereq_("./v8.json");
},{"./v8.json":120}],120:[function(_dereq_,module,exports){
module.exports={"$version":8,"$root":{"version":{"required":true,"type":"enum","values":[8]},"name":{"type":"string"},"metadata":{"type":"*"},"center":{"type":"array","value":"number"},"zoom":{"type":"number"},"bearing":{"type":"number","default":0,"period":360,"units":"degrees"},"pitch":{"type":"number","default":0,"units":"degrees"},"light":{"type":"light"},"sources":{"required":true,"type":"sources"},"sprite":{"type":"string"},"glyphs":{"type":"string"},"transition":{"type":"transition"},"layers":{"required":true,"type":"array","value":"layer"}},"sources":{"*":{"type":"source"}},"source":["source_tile","source_geojson","source_video","source_image","source_canvas"],"source_tile":{"type":{"required":true,"type":"enum","values":{"vector":{},"raster":{}}},"url":{"type":"string"},"tiles":{"type":"array","value":"string"},"minzoom":{"type":"number","default":0},"maxzoom":{"type":"number","default":22},"tileSize":{"type":"number","default":512,"units":"pixels"},"*":{"type":"*"}},"source_geojson":{"type":{"required":true,"type":"enum","values":{"geojson":{}}},"data":{"type":"*"},"maxzoom":{"type":"number","default":18},"buffer":{"type":"number","default":128,"maximum":512,"minimum":0},"tolerance":{"type":"number","default":0.375},"cluster":{"type":"boolean","default":false},"clusterRadius":{"type":"number","default":50,"minimum":0},"clusterMaxZoom":{"type":"number"}},"source_video":{"type":{"required":true,"type":"enum","values":{"video":{}}},"urls":{"required":true,"type":"array","value":"string"},"coordinates":{"required":true,"type":"array","length":4,"value":{"type":"array","length":2,"value":"number"}}},"source_image":{"type":{"required":true,"type":"enum","values":{"image":{}}},"url":{"required":true,"type":"string"},"coordinates":{"required":true,"type":"array","length":4,"value":{"type":"array","length":2,"value":"number"}}},"source_canvas":{"type":{"required":true,"type":"enum","values":{"canvas":{}}},"coordinates":{"required":true,"type":"array","length":4,"value":{"type":"array","length":2,"value":"number"}},"animate":{"type":"boolean","default":"true"},"canvas":{"type":"string","required":true}},"layer":{"id":{"type":"string","required":true},"type":{"type":"enum","values":{"fill":{},"line":{},"symbol":{},"circle":{},"fill-extrusion":{},"raster":{},"background":{}}},"metadata":{"type":"*"},"ref":{"type":"string"},"source":{"type":"string"},"source-layer":{"type":"string"},"minzoom":{"type":"number","minimum":0,"maximum":24},"maxzoom":{"type":"number","minimum":0,"maximum":24},"filter":{"type":"filter"},"layout":{"type":"layout"},"paint":{"type":"paint"},"paint.*":{"type":"paint"}},"layout":["layout_fill","layout_line","layout_circle","layout_fill-extrusion","layout_symbol","layout_raster","layout_background"],"layout_background":{"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible"}},"layout_fill":{"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible"}},"layout_circle":{"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible"}},"layout_fill-extrusion":{"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible"}},"layout_line":{"line-cap":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"butt":{},"round":{},"square":{}},"default":"butt"},"line-join":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"bevel":{},"round":{},"miter":{}},"default":"miter"},"line-miter-limit":{"type":"number","default":2,"function":"interpolated","zoom-function":true,"requires":[{"line-join":"miter"}]},"line-round-limit":{"type":"number","default":1.05,"function":"interpolated","zoom-function":true,"requires":[{"line-join":"round"}]},"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible"}},"layout_symbol":{"symbol-placement":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"point":{},"line":{}},"default":"point"},"symbol-spacing":{"type":"number","default":250,"minimum":1,"function":"interpolated","zoom-function":true,"units":"pixels","requires":[{"symbol-placement":"line"}]},"symbol-avoid-edges":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":false},"icon-allow-overlap":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":false,"requires":["icon-image"]},"icon-ignore-placement":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":false,"requires":["icon-image"]},"icon-optional":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":false,"requires":["icon-image","text-field"]},"icon-rotation-alignment":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{},"auto":{}},"default":"auto","requires":["icon-image"]},"icon-size":{"type":"number","default":1,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"requires":["icon-image"]},"icon-text-fit":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"none":{},"width":{},"height":{},"both":{}},"default":"none","requires":["icon-image","text-field"]},"icon-text-fit-padding":{"type":"array","value":"number","length":4,"default":[0,0,0,0],"units":"pixels","function":"interpolated","zoom-function":true,"requires":["icon-image","text-field",{"icon-text-fit":["both","width","height"]}]},"icon-image":{"type":"string","function":"piecewise-constant","zoom-function":true,"property-function":true,"tokens":true},"icon-rotate":{"type":"number","default":0,"period":360,"function":"interpolated","zoom-function":true,"property-function":true,"units":"degrees","requires":["icon-image"]},"icon-padding":{"type":"number","default":2,"minimum":0,"function":"interpolated","zoom-function":true,"units":"pixels","requires":["icon-image"]},"icon-keep-upright":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":false,"requires":["icon-image",{"icon-rotation-alignment":"map"},{"symbol-placement":"line"}]},"icon-offset":{"type":"array","value":"number","length":2,"default":[0,0],"function":"interpolated","zoom-function":true,"property-function":true,"requires":["icon-image"]},"text-pitch-alignment":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{},"auto":{}},"default":"auto","requires":["text-field"]},"text-rotation-alignment":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{},"auto":{}},"default":"auto","requires":["text-field"]},"text-field":{"type":"string","function":"piecewise-constant","zoom-function":true,"property-function":true,"default":"","tokens":true},"text-font":{"type":"array","value":"string","function":"piecewise-constant","zoom-function":true,"default":["Open Sans Regular","Arial Unicode MS Regular"],"requires":["text-field"]},"text-size":{"type":"number","default":16,"minimum":0,"units":"pixels","function":"interpolated","zoom-function":true,"property-function":true,"requires":["text-field"]},"text-max-width":{"type":"number","default":10,"minimum":0,"units":"ems","function":"interpolated","zoom-function":true,"requires":["text-field"]},"text-line-height":{"type":"number","default":1.2,"units":"ems","function":"interpolated","zoom-function":true,"requires":["text-field"]},"text-letter-spacing":{"type":"number","default":0,"units":"ems","function":"interpolated","zoom-function":true,"requires":["text-field"]},"text-justify":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"left":{},"center":{},"right":{}},"default":"center","requires":["text-field"]},"text-anchor":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"center":{},"left":{},"right":{},"top":{},"bottom":{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},"default":"center","requires":["text-field"]},"text-max-angle":{"type":"number","default":45,"units":"degrees","function":"interpolated","zoom-function":true,"requires":["text-field",{"symbol-placement":"line"}]},"text-rotate":{"type":"number","default":0,"period":360,"units":"degrees","function":"interpolated","zoom-function":true,"property-function":true,"requires":["text-field"]},"text-padding":{"type":"number","default":2,"minimum":0,"units":"pixels","function":"interpolated","zoom-function":true,"requires":["text-field"]},"text-keep-upright":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":true,"requires":["text-field",{"text-rotation-alignment":"map"},{"symbol-placement":"line"}]},"text-transform":{"type":"enum","function":"piecewise-constant","zoom-function":true,"property-function":true,"values":{"none":{},"uppercase":{},"lowercase":{}},"default":"none","requires":["text-field"]},"text-offset":{"type":"array","value":"number","units":"ems","function":"interpolated","zoom-function":true,"property-function":true,"length":2,"default":[0,0],"requires":["text-field"]},"text-allow-overlap":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":false,"requires":["text-field"]},"text-ignore-placement":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":false,"requires":["text-field"]},"text-optional":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":false,"requires":["text-field","icon-image"]},"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible"}},"layout_raster":{"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible"}},"filter":{"type":"array","value":"*"},"filter_operator":{"type":"enum","values":{"==":{},"!=":{},">":{},">=":{},"<":{},"<=":{},"in":{},"!in":{},"all":{},"any":{},"none":{},"has":{},"!has":{}}},"geometry_type":{"type":"enum","values":{"Point":{},"LineString":{},"Polygon":{}}},"function":{"stops":{"type":"array","value":"function_stop"},"base":{"type":"number","default":1,"minimum":0},"property":{"type":"string","default":"$zoom"},"type":{"type":"enum","values":{"identity":{},"exponential":{},"interval":{},"categorical":{}},"default":"exponential"},"colorSpace":{"type":"enum","values":{"rgb":{},"lab":{},"hcl":{}},"default":"rgb"},"default":{"type":"*","required":false}},"function_stop":{"type":"array","minimum":0,"maximum":22,"value":["number","color"],"length":2},"light":{"anchor":{"type":"enum","default":"viewport","values":{"map":{},"viewport":{}},"transition":false},"position":{"type":"array","default":[1.15,210,30],"length":3,"value":"number","transition":true,"function":"interpolated","zoom-function":true,"property-function":false},"color":{"type":"color","default":"#ffffff","function":"interpolated","zoom-function":true,"property-function":false,"transition":true},"intensity":{"type":"number","default":0.5,"minimum":0,"maximum":1,"function":"interpolated","zoom-function":true,"property-function":false,"transition":true}},"paint":["paint_fill","paint_line","paint_circle","paint_fill-extrusion","paint_symbol","paint_raster","paint_background"],"paint_fill":{"fill-antialias":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":true},"fill-opacity":{"type":"number","function":"interpolated","zoom-function":true,"property-function":true,"default":1,"minimum":0,"maximum":1,"transition":true},"fill-color":{"type":"color","default":"#000000","function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":[{"!":"fill-pattern"}]},"fill-outline-color":{"type":"color","function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":[{"!":"fill-pattern"},{"fill-antialias":true}]},"fill-translate":{"type":"array","value":"number","length":2,"default":[0,0],"function":"interpolated","zoom-function":true,"transition":true,"units":"pixels"},"fill-translate-anchor":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{}},"default":"map","requires":["fill-translate"]},"fill-pattern":{"type":"string","function":"piecewise-constant","zoom-function":true,"transition":true}},"paint_fill-extrusion":{"fill-extrusion-opacity":{"type":"number","function":"interpolated","zoom-function":true,"property-function":false,"default":1,"minimum":0,"maximum":1,"transition":true},"fill-extrusion-color":{"type":"color","default":"#000000","function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":[{"!":"fill-extrusion-pattern"}]},"fill-extrusion-translate":{"type":"array","value":"number","length":2,"default":[0,0],"function":"interpolated","zoom-function":true,"transition":true,"units":"pixels"},"fill-extrusion-translate-anchor":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{}},"default":"map","requires":["fill-extrusion-translate"]},"fill-extrusion-pattern":{"type":"string","function":"piecewise-constant","zoom-function":true,"transition":true},"fill-extrusion-height":{"type":"number","function":"interpolated","zoom-function":true,"property-function":true,"default":0,"minimum":0,"maximum":65535,"units":"meters","transition":true},"fill-extrusion-base":{"type":"number","function":"interpolated","zoom-function":true,"property-function":true,"default":0,"minimum":0,"maximum":65535,"units":"meters","transition":true,"requires":["fill-extrusion-height"]}},"paint_line":{"line-opacity":{"type":"number","function":"interpolated","zoom-function":true,"property-function":true,"default":1,"minimum":0,"maximum":1,"transition":true},"line-color":{"type":"color","default":"#000000","function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":[{"!":"line-pattern"}]},"line-translate":{"type":"array","value":"number","length":2,"default":[0,0],"function":"interpolated","zoom-function":true,"transition":true,"units":"pixels"},"line-translate-anchor":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{}},"default":"map","requires":["line-translate"]},"line-width":{"type":"number","default":1,"minimum":0,"function":"interpolated","zoom-function":true,"transition":true,"units":"pixels"},"line-gap-width":{"type":"number","default":0,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels"},"line-offset":{"type":"number","default":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels"},"line-blur":{"type":"number","default":0,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels"},"line-dasharray":{"type":"array","value":"number","function":"piecewise-constant","zoom-function":true,"minimum":0,"transition":true,"units":"line widths","requires":[{"!":"line-pattern"}]},"line-pattern":{"type":"string","function":"piecewise-constant","zoom-function":true,"transition":true}},"paint_circle":{"circle-radius":{"type":"number","default":5,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels"},"circle-color":{"type":"color","default":"#000000","function":"interpolated","zoom-function":true,"property-function":true,"transition":true},"circle-blur":{"type":"number","default":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true},"circle-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true},"circle-translate":{"type":"array","value":"number","length":2,"default":[0,0],"function":"interpolated","zoom-function":true,"transition":true,"units":"pixels"},"circle-translate-anchor":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{}},"default":"map","requires":["circle-translate"]},"circle-pitch-scale":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{}},"default":"map"},"circle-stroke-width":{"type":"number","default":0,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels"},"circle-stroke-color":{"type":"color","default":"#000000","function":"interpolated","zoom-function":true,"property-function":true,"transition":true},"circle-stroke-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true}},"paint_symbol":{"icon-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":["icon-image"]},"icon-color":{"type":"color","default":"#000000","function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":["icon-image"]},"icon-halo-color":{"type":"color","default":"rgba(0, 0, 0, 0)","function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":["icon-image"]},"icon-halo-width":{"type":"number","default":0,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels","requires":["icon-image"]},"icon-halo-blur":{"type":"number","default":0,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels","requires":["icon-image"]},"icon-translate":{"type":"array","value":"number","length":2,"default":[0,0],"function":"interpolated","zoom-function":true,"transition":true,"units":"pixels","requires":["icon-image"]},"icon-translate-anchor":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{}},"default":"map","requires":["icon-image","icon-translate"]},"text-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":["text-field"]},"text-color":{"type":"color","default":"#000000","function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":["text-field"]},"text-halo-color":{"type":"color","default":"rgba(0, 0, 0, 0)","function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":["text-field"]},"text-halo-width":{"type":"number","default":0,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels","requires":["text-field"]},"text-halo-blur":{"type":"number","default":0,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels","requires":["text-field"]},"text-translate":{"type":"array","value":"number","length":2,"default":[0,0],"function":"interpolated","zoom-function":true,"transition":true,"units":"pixels","requires":["text-field"]},"text-translate-anchor":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{}},"default":"map","requires":["text-field","text-translate"]}},"paint_raster":{"raster-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"function":"interpolated","zoom-function":true,"transition":true},"raster-hue-rotate":{"type":"number","default":0,"period":360,"function":"interpolated","zoom-function":true,"transition":true,"units":"degrees"},"raster-brightness-min":{"type":"number","function":"interpolated","zoom-function":true,"default":0,"minimum":0,"maximum":1,"transition":true},"raster-brightness-max":{"type":"number","function":"interpolated","zoom-function":true,"default":1,"minimum":0,"maximum":1,"transition":true},"raster-saturation":{"type":"number","default":0,"minimum":-1,"maximum":1,"function":"interpolated","zoom-function":true,"transition":true},"raster-contrast":{"type":"number","default":0,"minimum":-1,"maximum":1,"function":"interpolated","zoom-function":true,"transition":true},"raster-fade-duration":{"type":"number","default":300,"minimum":0,"function":"interpolated","zoom-function":true,"transition":true,"units":"milliseconds"}},"paint_background":{"background-color":{"type":"color","default":"#000000","function":"interpolated","zoom-function":true,"transition":true,"requires":[{"!":"background-pattern"}]},"background-pattern":{"type":"string","function":"piecewise-constant","zoom-function":true,"transition":true},"background-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"function":"interpolated","zoom-function":true,"transition":true}},"transition":{"duration":{"type":"number","default":300,"minimum":0,"units":"milliseconds"},"delay":{"type":"number","default":0,"minimum":0,"units":"milliseconds"}}}
},{}],121:[function(_dereq_,module,exports){
"use strict";module.exports=function(r){for(var t=arguments,e=1;e<arguments.length;e++){var n=t[e];for(var o in n)r[o]=n[o]}return r};
},{}],122:[function(_dereq_,module,exports){
"use strict";module.exports=function(n){return n instanceof Number?"number":n instanceof String?"string":n instanceof Boolean?"boolean":Array.isArray(n)?"array":null===n?"null":typeof n};
},{}],123:[function(_dereq_,module,exports){
"use strict";var parseColorString=_dereq_("csscolorparser").parseCSSColor;module.exports=function(r){if("string"==typeof r){var e=parseColorString(r);if(!e)return;return[e[0]/255*e[3],e[1]/255*e[3],e[2]/255*e[3],e[3]]}return Array.isArray(r)?r:void 0};
},{"csscolorparser":109}],124:[function(_dereq_,module,exports){
"use strict";module.exports=["type","source","source-layer","minzoom","maxzoom","filter","layout"];
},{}],125:[function(_dereq_,module,exports){
"use strict";module.exports=function(n){return n instanceof Number||n instanceof String||n instanceof Boolean?n.valueOf():n};
},{}],126:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),getType=_dereq_("../util/get_type"),extend=_dereq_("../util/extend");module.exports=function(e){var r=_dereq_("./validate_function"),t=_dereq_("./validate_object"),i={"*":function(){return[]},array:_dereq_("./validate_array"),boolean:_dereq_("./validate_boolean"),number:_dereq_("./validate_number"),color:_dereq_("./validate_color"),constants:_dereq_("./validate_constants"),enum:_dereq_("./validate_enum"),filter:_dereq_("./validate_filter"),function:_dereq_("./validate_function"),layer:_dereq_("./validate_layer"),object:_dereq_("./validate_object"),source:_dereq_("./validate_source"),light:_dereq_("./validate_light"),string:_dereq_("./validate_string")},a=e.value,n=e.valueSpec,u=e.key,o=e.styleSpec,l=e.style;if("string"===getType(a)&&"@"===a[0]){if(o.$version>7)return[new ValidationError(u,a,"constants have been deprecated as of v8")];if(!(a in l.constants))return[new ValidationError(u,a,'constant "%s" not found',a)];e=extend({},e,{value:l.constants[a]})}return n.function&&"object"===getType(a)?r(e):n.type&&i[n.type]?i[n.type](e):t(extend({},e,{valueSpec:n.type?o[n.type]:n}))};
},{"../error/validation_error":104,"../util/extend":121,"../util/get_type":122,"./validate_array":127,"./validate_boolean":128,"./validate_color":129,"./validate_constants":130,"./validate_enum":131,"./validate_filter":132,"./validate_function":133,"./validate_layer":135,"./validate_light":137,"./validate_number":138,"./validate_object":139,"./validate_source":142,"./validate_string":143}],127:[function(_dereq_,module,exports){
"use strict";var getType=_dereq_("../util/get_type"),validate=_dereq_("./validate"),ValidationError=_dereq_("../error/validation_error");module.exports=function(e){var r=e.value,t=e.valueSpec,a=e.style,n=e.styleSpec,l=e.key,i=e.arrayElementValidator||validate;if("array"!==getType(r))return[new ValidationError(l,r,"array expected, %s found",getType(r))];if(t.length&&r.length!==t.length)return[new ValidationError(l,r,"array length %d expected, length %d found",t.length,r.length)];if(t["min-length"]&&r.length<t["min-length"])return[new ValidationError(l,r,"array length at least %d expected, length %d found",t["min-length"],r.length)];var o={type:t.value};n.$version<7&&(o.function=t.function),"object"===getType(t.value)&&(o=t.value);for(var u=[],d=0;d<r.length;d++)u=u.concat(i({array:r,arrayIndex:d,value:r[d],valueSpec:o,style:a,styleSpec:n,key:l+"["+d+"]"}));return u};
},{"../error/validation_error":104,"../util/get_type":122,"./validate":126}],128:[function(_dereq_,module,exports){
"use strict";var getType=_dereq_("../util/get_type"),ValidationError=_dereq_("../error/validation_error");module.exports=function(e){var r=e.value,o=e.key,t=getType(r);return"boolean"!==t?[new ValidationError(o,r,"boolean expected, %s found",t)]:[]};
},{"../error/validation_error":104,"../util/get_type":122}],129:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),getType=_dereq_("../util/get_type"),parseCSSColor=_dereq_("csscolorparser").parseCSSColor;module.exports=function(r){var e=r.key,o=r.value,t=getType(o);return"string"!==t?[new ValidationError(e,o,"color expected, %s found",t)]:null===parseCSSColor(o)?[new ValidationError(e,o,'color expected, "%s" found',o)]:[]};
},{"../error/validation_error":104,"../util/get_type":122,"csscolorparser":109}],130:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),getType=_dereq_("../util/get_type");module.exports=function(r){var e=r.key,t=r.value,a=r.styleSpec;if(a.$version>7)return t?[new ValidationError(e,t,"constants have been deprecated as of v8")]:[];var o=getType(t);if("object"!==o)return[new ValidationError(e,t,"object expected, %s found",o)];var n=[];for(var i in t)"@"!==i[0]&&n.push(new ValidationError(e+"."+i,t[i],'constants must start with "@"'));return n};
},{"../error/validation_error":104,"../util/get_type":122}],131:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),unbundle=_dereq_("../util/unbundle_jsonlint");module.exports=function(e){var r=e.key,n=e.value,u=e.valueSpec,o=[];return Array.isArray(u.values)?u.values.indexOf(unbundle(n))===-1&&o.push(new ValidationError(r,n,"expected one of [%s], %s found",u.values.join(", "),n)):Object.keys(u.values).indexOf(unbundle(n))===-1&&o.push(new ValidationError(r,n,"expected one of [%s], %s found",Object.keys(u.values).join(", "),n)),o};
},{"../error/validation_error":104,"../util/unbundle_jsonlint":125}],132:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),validateEnum=_dereq_("./validate_enum"),getType=_dereq_("../util/get_type"),unbundle=_dereq_("../util/unbundle_jsonlint");module.exports=function e(r){var t,a=r.value,n=r.key,l=r.styleSpec,s=[];if("array"!==getType(a))return[new ValidationError(n,a,"array expected, %s found",getType(a))];if(a.length<1)return[new ValidationError(n,a,"filter array must have at least 1 element")];switch(s=s.concat(validateEnum({key:n+"[0]",value:a[0],valueSpec:l.filter_operator,style:r.style,styleSpec:r.styleSpec})),unbundle(a[0])){case"<":case"<=":case">":case">=":a.length>=2&&"$type"===unbundle(a[1])&&s.push(new ValidationError(n,a,'"$type" cannot be use with operator "%s"',a[0]));case"==":case"!=":3!==a.length&&s.push(new ValidationError(n,a,'filter array for operator "%s" must have 3 elements',a[0]));case"in":case"!in":a.length>=2&&(t=getType(a[1]),"string"!==t&&s.push(new ValidationError(n+"[1]",a[1],"string expected, %s found",t)));for(var o=2;o<a.length;o++)t=getType(a[o]),"$type"===unbundle(a[1])?s=s.concat(validateEnum({key:n+"["+o+"]",value:a[o],valueSpec:l.geometry_type,style:r.style,styleSpec:r.styleSpec})):"string"!==t&&"number"!==t&&"boolean"!==t&&s.push(new ValidationError(n+"["+o+"]",a[o],"string, number, or boolean expected, %s found",t));break;case"any":case"all":case"none":for(var i=1;i<a.length;i++)s=s.concat(e({key:n+"["+i+"]",value:a[i],style:r.style,styleSpec:r.styleSpec}));break;case"has":case"!has":t=getType(a[1]),2!==a.length?s.push(new ValidationError(n,a,'filter array for "%s" operator must have 2 elements',a[0])):"string"!==t&&s.push(new ValidationError(n+"[1]",a[1],"string expected, %s found",t))}return s};
},{"../error/validation_error":104,"../util/get_type":122,"../util/unbundle_jsonlint":125,"./validate_enum":131}],133:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),getType=_dereq_("../util/get_type"),validate=_dereq_("./validate"),validateObject=_dereq_("./validate_object"),validateArray=_dereq_("./validate_array"),validateNumber=_dereq_("./validate_number"),unbundle=_dereq_("../util/unbundle_jsonlint");module.exports=function(e){function t(e){if("identity"===p)return[new ValidationError(e.key,e.value,'identity function may not have a "stops" property')];var t=[],a=e.value;return t=t.concat(validateArray({key:e.key,value:a,valueSpec:e.valueSpec,style:e.style,styleSpec:e.styleSpec,arrayElementValidator:r})),"array"===getType(a)&&0===a.length&&t.push(new ValidationError(e.key,a,"array must have at least one stop")),t}function r(e){var t=[],r=e.value,o=e.key;if("array"!==getType(r))return[new ValidationError(o,r,"array expected, %s found",getType(r))];if(2!==r.length)return[new ValidationError(o,r,"array length %d expected, length %d found",2,r.length)];if(c){if("object"!==getType(r[0]))return[new ValidationError(o,r,"object expected, %s found",getType(r[0]))];if(void 0===r[0].zoom)return[new ValidationError(o,r,"object stop key must have zoom")];if(void 0===r[0].value)return[new ValidationError(o,r,"object stop key must have value")];if(l&&l>unbundle(r[0].zoom))return[new ValidationError(o,r[0].zoom,"stop zoom values must appear in ascending order")];unbundle(r[0].zoom)!==l&&(l=unbundle(r[0].zoom),i=void 0,s={}),t=t.concat(validateObject({key:o+"[0]",value:r[0],valueSpec:{zoom:{}},style:e.style,styleSpec:e.styleSpec,objectElementValidators:{zoom:validateNumber,value:a}}))}else t=t.concat(a({key:o+"[0]",value:r[0],valueSpec:{},style:e.style,styleSpec:e.styleSpec}));return t.concat(validate({key:o+"[1]",value:r[1],valueSpec:u,style:e.style,styleSpec:e.styleSpec}))}function a(e){var t=getType(e.value),r=unbundle(e.value);if(n){if(t!==n)return[new ValidationError(e.key,e.value,"%s stop domain type must match previous stop domain type %s",t,n)]}else n=t;if("number"!==t&&"string"!==t&&"boolean"!==t)return[new ValidationError(e.key,e.value,"stop domain value must be a number, string, or boolean")];if("number"!==t&&"categorical"!==p){var a="number expected, %s found";return u["property-function"]&&void 0===p&&(a+='\nIf you intended to use a categorical function, specify `"type": "categorical"`.'),[new ValidationError(e.key,e.value,a,t)]}return"categorical"!==p||"number"!==t||isFinite(r)&&Math.floor(r)===r?"number"===t&&void 0!==i&&r<i?[new ValidationError(e.key,e.value,"stop domain values must appear in ascending order")]:(i=r,"categorical"===p&&r in s?[new ValidationError(e.key,e.value,"stop domain values must be unique")]:(s[r]=!0,[])):[new ValidationError(e.key,e.value,"integer expected, found %s",r)]}function o(e){return validate({key:e.key,value:e.value,valueSpec:u,style:e.style,styleSpec:e.styleSpec})}var n,i,l,u=e.valueSpec,p=unbundle(e.value.type),s={},y="categorical"!==p&&void 0===e.value.property,d=!y,c="array"===getType(e.value.stops)&&"array"===getType(e.value.stops[0])&&"object"===getType(e.value.stops[0][0]),v=validateObject({key:e.key,value:e.value,valueSpec:e.styleSpec.function,style:e.style,styleSpec:e.styleSpec,objectElementValidators:{stops:t,default:o}});return"identity"===p&&y&&v.push(new ValidationError(e.key,e.value,'missing required property "property"')),"identity"===p||e.value.stops||v.push(new ValidationError(e.key,e.value,'missing required property "stops"')),"exponential"===p&&"piecewise-constant"===e.valueSpec.function&&v.push(new ValidationError(e.key,e.value,"exponential functions not supported")),e.styleSpec.$version>=8&&(d&&!e.valueSpec["property-function"]?v.push(new ValidationError(e.key,e.value,"property functions not supported")):y&&!e.valueSpec["zoom-function"]&&v.push(new ValidationError(e.key,e.value,"zoom functions not supported"))),"categorical"!==p&&!c||void 0!==e.value.property||v.push(new ValidationError(e.key,e.value,'"property" property is required')),v};
},{"../error/validation_error":104,"../util/get_type":122,"../util/unbundle_jsonlint":125,"./validate":126,"./validate_array":127,"./validate_number":138,"./validate_object":139}],134:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),validateString=_dereq_("./validate_string");module.exports=function(r){var e=r.value,t=r.key,a=validateString(r);return a.length?a:(e.indexOf("{fontstack}")===-1&&a.push(new ValidationError(t,e,'"glyphs" url must include a "{fontstack}" token')),e.indexOf("{range}")===-1&&a.push(new ValidationError(t,e,'"glyphs" url must include a "{range}" token')),a)};
},{"../error/validation_error":104,"./validate_string":143}],135:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),unbundle=_dereq_("../util/unbundle_jsonlint"),validateObject=_dereq_("./validate_object"),validateFilter=_dereq_("./validate_filter"),validatePaintProperty=_dereq_("./validate_paint_property"),validateLayoutProperty=_dereq_("./validate_layout_property"),extend=_dereq_("../util/extend");module.exports=function(e){var r=[],t=e.value,a=e.key,i=e.style,l=e.styleSpec;t.type||t.ref||r.push(new ValidationError(a,t,'either "type" or "ref" is required'));var u=unbundle(t.type),n=unbundle(t.ref);if(t.id)for(var o=unbundle(t.id),s=0;s<e.arrayIndex;s++){var d=i.layers[s];unbundle(d.id)===o&&r.push(new ValidationError(a,t.id,'duplicate layer id "%s", previously used at line %d',t.id,d.id.__line__))}if("ref"in t){["type","source","source-layer","filter","layout"].forEach(function(e){e in t&&r.push(new ValidationError(a,t[e],'"%s" is prohibited for ref layers',e))});var y;i.layers.forEach(function(e){unbundle(e.id)===n&&(y=e)}),y?y.ref?r.push(new ValidationError(a,t.ref,"ref cannot reference another ref layer")):u=unbundle(y.type):r.push(new ValidationError(a,t.ref,'ref layer "%s" not found',n))}else if("background"!==u)if(t.source){var c=i.sources&&i.sources[t.source],p=c&&unbundle(c.type);c?"vector"===p&&"raster"===u?r.push(new ValidationError(a,t.source,'layer "%s" requires a raster source',t.id)):"raster"===p&&"raster"!==u?r.push(new ValidationError(a,t.source,'layer "%s" requires a vector source',t.id)):"vector"!==p||t["source-layer"]||r.push(new ValidationError(a,t,'layer "%s" must specify a "source-layer"',t.id)):r.push(new ValidationError(a,t.source,'source "%s" not found',t.source))}else r.push(new ValidationError(a,t,'missing required property "source"'));return r=r.concat(validateObject({key:a,value:t,valueSpec:l.layer,style:e.style,styleSpec:e.styleSpec,objectElementValidators:{"*":function(){return[]},filter:validateFilter,layout:function(e){return validateObject({layer:t,key:e.key,value:e.value,style:e.style,styleSpec:e.styleSpec,objectElementValidators:{"*":function(e){return validateLayoutProperty(extend({layerType:u},e))}}})},paint:function(e){return validateObject({layer:t,key:e.key,value:e.value,style:e.style,styleSpec:e.styleSpec,objectElementValidators:{"*":function(e){return validatePaintProperty(extend({layerType:u},e))}}})}}}))};
},{"../error/validation_error":104,"../util/extend":121,"../util/unbundle_jsonlint":125,"./validate_filter":132,"./validate_layout_property":136,"./validate_object":139,"./validate_paint_property":140}],136:[function(_dereq_,module,exports){
"use strict";var validateProperty=_dereq_("./validate_property");module.exports=function(r){return validateProperty(r,"layout")};
},{"./validate_property":141}],137:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),getType=_dereq_("../util/get_type"),validate=_dereq_("./validate");module.exports=function(e){var t=e.value,r=e.styleSpec,a=r.light,i=e.style,n=[],o=getType(t);if(void 0===t)return n;if("object"!==o)return n=n.concat([new ValidationError("light",t,"object expected, %s found",o)]);for(var l in t){var c=l.match(/^(.*)-transition$/);n=c&&a[c[1]]&&a[c[1]].transition?n.concat(validate({key:l,value:t[l],valueSpec:r.transition,style:i,styleSpec:r})):a[l]?n.concat(validate({key:l,value:t[l],valueSpec:a[l],style:i,styleSpec:r})):n.concat([new ValidationError(l,t[l],'unknown property "%s"',l)])}return n};
},{"../error/validation_error":104,"../util/get_type":122,"./validate":126}],138:[function(_dereq_,module,exports){
"use strict";var getType=_dereq_("../util/get_type"),ValidationError=_dereq_("../error/validation_error");module.exports=function(e){var r=e.key,i=e.value,m=e.valueSpec,a=getType(i);return"number"!==a?[new ValidationError(r,i,"number expected, %s found",a)]:"minimum"in m&&i<m.minimum?[new ValidationError(r,i,"%s is less than the minimum value %s",i,m.minimum)]:"maximum"in m&&i>m.maximum?[new ValidationError(r,i,"%s is greater than the maximum value %s",i,m.maximum)]:[]};
},{"../error/validation_error":104,"../util/get_type":122}],139:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),getType=_dereq_("../util/get_type"),validateSpec=_dereq_("./validate");module.exports=function(e){var r=e.key,t=e.value,i=e.valueSpec||{},a=e.objectElementValidators||{},o=e.style,l=e.styleSpec,n=[],u=getType(t);if("object"!==u)return[new ValidationError(r,t,"object expected, %s found",u)];for(var d in t){var p=d.split(".")[0],s=i[p]||i["*"],c=void 0;if(a[p])c=a[p];else if(i[p])c=validateSpec;else if(a["*"])c=a["*"];else{if(!i["*"]){n.push(new ValidationError(r,t[d],'unknown property "%s"',d));continue}c=validateSpec}n=n.concat(c({key:(r?r+".":r)+d,value:t[d],valueSpec:s,style:o,styleSpec:l,object:t,objectKey:d}))}for(var v in i)i[v].required&&void 0===i[v].default&&void 0===t[v]&&n.push(new ValidationError(r,t,'missing required property "%s"',v));return n};
},{"../error/validation_error":104,"../util/get_type":122,"./validate":126}],140:[function(_dereq_,module,exports){
"use strict";var validateProperty=_dereq_("./validate_property");module.exports=function(r){return validateProperty(r,"paint")};
},{"./validate_property":141}],141:[function(_dereq_,module,exports){
"use strict";var validate=_dereq_("./validate"),ValidationError=_dereq_("../error/validation_error"),getType=_dereq_("../util/get_type");module.exports=function(e,t){var r=e.key,i=e.style,a=e.styleSpec,n=e.value,o=e.objectKey,l=a[t+"_"+e.layerType];if(!l)return[];var y=o.match(/^(.*)-transition$/);if("paint"===t&&y&&l[y[1]]&&l[y[1]].transition)return validate({key:r,value:n,valueSpec:a.transition,style:i,styleSpec:a});var p=e.valueSpec||l[o];if(!p)return[new ValidationError(r,n,'unknown property "%s"',o)];var s;if("string"===getType(n)&&p["property-function"]&&!p.tokens&&(s=/^{([^}]+)}$/.exec(n)))return[new ValidationError(r,n,'"%s" does not support interpolation syntax\nUse an identity property function instead: `{ "type": "identity", "property": %s` }`.',o,JSON.stringify(s[1]))];var u=[];return"symbol"===e.layerType&&"text-field"===o&&i&&!i.glyphs&&u.push(new ValidationError(r,n,'use of "text-field" requires a style "glyphs" property')),u.concat(validate({key:e.key,value:n,valueSpec:p,style:i,styleSpec:a}))};
},{"../error/validation_error":104,"../util/get_type":122,"./validate":126}],142:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),unbundle=_dereq_("../util/unbundle_jsonlint"),validateObject=_dereq_("./validate_object"),validateEnum=_dereq_("./validate_enum");module.exports=function(e){var a=e.value,t=e.key,r=e.styleSpec,l=e.style;if(!a.type)return[new ValidationError(t,a,'"type" is required')];var u=unbundle(a.type),i=[];switch(u){case"vector":case"raster":if(i=i.concat(validateObject({key:t,value:a,valueSpec:r.source_tile,style:e.style,styleSpec:r})),"url"in a)for(var s in a)["type","url","tileSize"].indexOf(s)<0&&i.push(new ValidationError(t+"."+s,a[s],'a source with a "url" property may not include a "%s" property',s));return i;case"geojson":return validateObject({key:t,value:a,valueSpec:r.source_geojson,style:l,styleSpec:r});case"video":return validateObject({key:t,value:a,valueSpec:r.source_video,style:l,styleSpec:r});case"image":return validateObject({key:t,value:a,valueSpec:r.source_image,style:l,styleSpec:r});case"canvas":return validateObject({key:t,value:a,valueSpec:r.source_canvas,style:l,styleSpec:r});default:return validateEnum({key:t+".type",value:a.type,valueSpec:{values:["vector","raster","geojson","video","image","canvas"]},style:l,styleSpec:r})}};
},{"../error/validation_error":104,"../util/unbundle_jsonlint":125,"./validate_enum":131,"./validate_object":139}],143:[function(_dereq_,module,exports){
"use strict";var getType=_dereq_("../util/get_type"),ValidationError=_dereq_("../error/validation_error");module.exports=function(r){var e=r.value,t=r.key,i=getType(e);return"string"!==i?[new ValidationError(t,e,"string expected, %s found",i)]:[]};
},{"../error/validation_error":104,"../util/get_type":122}],144:[function(_dereq_,module,exports){
"use strict";function validateStyleMin(e,a){a=a||latestStyleSpec;var t=[];return t=t.concat(validate({key:"",value:e,valueSpec:a.$root,styleSpec:a,style:e,objectElementValidators:{glyphs:validateGlyphsURL,"*":function(){return[]}}})),a.$version>7&&e.constants&&(t=t.concat(validateConstants({key:"constants",value:e.constants,style:e,styleSpec:a}))),sortErrors(t)}function sortErrors(e){return[].concat(e).sort(function(e,a){return e.line-a.line})}function wrapCleanErrors(e){return function(){return sortErrors(e.apply(this,arguments))}}var validateConstants=_dereq_("./validate/validate_constants"),validate=_dereq_("./validate/validate"),latestStyleSpec=_dereq_("./reference/latest"),validateGlyphsURL=_dereq_("./validate/validate_glyphs_url");validateStyleMin.source=wrapCleanErrors(_dereq_("./validate/validate_source")),validateStyleMin.light=wrapCleanErrors(_dereq_("./validate/validate_light")),validateStyleMin.layer=wrapCleanErrors(_dereq_("./validate/validate_layer")),validateStyleMin.filter=wrapCleanErrors(_dereq_("./validate/validate_filter")),validateStyleMin.paintProperty=wrapCleanErrors(_dereq_("./validate/validate_paint_property")),validateStyleMin.layoutProperty=wrapCleanErrors(_dereq_("./validate/validate_layout_property")),module.exports=validateStyleMin;
},{"./reference/latest":119,"./validate/validate":126,"./validate/validate_constants":130,"./validate/validate_filter":132,"./validate/validate_glyphs_url":134,"./validate/validate_layer":135,"./validate/validate_layout_property":136,"./validate/validate_light":137,"./validate/validate_paint_property":140,"./validate/validate_source":142}],145:[function(_dereq_,module,exports){
"use strict";var AnimationLoop=function(){this.n=0,this.times=[]};AnimationLoop.prototype.stopped=function(){return this.times=this.times.filter(function(t){return t.time>=(new Date).getTime()}),!this.times.length},AnimationLoop.prototype.set=function(t){return this.times.push({id:this.n,time:t+(new Date).getTime()}),this.n++},AnimationLoop.prototype.cancel=function(t){this.times=this.times.filter(function(i){return i.id!==t})},module.exports=AnimationLoop;
},{}],146:[function(_dereq_,module,exports){
"use strict";var Evented=_dereq_("../util/evented"),ajax=_dereq_("../util/ajax"),browser=_dereq_("../util/browser"),normalizeURL=_dereq_("../util/mapbox").normalizeSpriteURL,SpritePosition=function(){this.x=0,this.y=0,this.width=0,this.height=0,this.pixelRatio=1,this.sdf=!1},ImageSprite=function(t){function i(i,e){var a=this;t.call(this),this.base=i,this.retina=browser.devicePixelRatio>1,this.setEventedParent(e);var r=this.retina?"@2x":"";ajax.getJSON(normalizeURL(i,r,".json"),function(t,i){return t?void a.fire("error",{error:t}):(a.data=i,void(a.imgData&&a.fire("data",{dataType:"style"})))}),ajax.getImage(normalizeURL(i,r,".png"),function(t,i){if(t)return void a.fire("error",{error:t});a.imgData=browser.getImageData(i);for(var e=0;e<a.imgData.length;e+=4){var r=a.imgData[e+3]/255;a.imgData[e+0]*=r,a.imgData[e+1]*=r,a.imgData[e+2]*=r}a.width=i.width,a.data&&a.fire("data",{dataType:"style"})})}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.toJSON=function(){return this.base},i.prototype.loaded=function(){return!(!this.data||!this.imgData)},i.prototype.resize=function(){var t=this;if(browser.devicePixelRatio>1!==this.retina){var e=new i(this.base);e.on("data",function(){t.data=e.data,t.imgData=e.imgData,t.width=e.width,t.retina=e.retina})}},i.prototype.getSpritePosition=function(t){if(!this.loaded())return new SpritePosition;var i=this.data&&this.data[t];return i&&this.imgData?i:new SpritePosition},i}(Evented);module.exports=ImageSprite;
},{"../util/ajax":193,"../util/browser":194,"../util/evented":202,"../util/mapbox":210}],147:[function(_dereq_,module,exports){
"use strict";var styleSpec=_dereq_("../style-spec/reference/latest"),util=_dereq_("../util/util"),Evented=_dereq_("../util/evented"),validateStyle=_dereq_("./validate_style"),StyleDeclaration=_dereq_("./style_declaration"),StyleTransition=_dereq_("./style_transition"),TRANSITION_SUFFIX="-transition",Light=function(t){function i(i){t.call(this),this.properties=["anchor","color","position","intensity"],this._specifications=styleSpec.light,this.set(i)}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.set=function(t){var i=this;if(!this._validate(validateStyle.light,t)){this._declarations={},this._transitions={},this._transitionOptions={},this.calculated={},t=util.extend({anchor:this._specifications.anchor.default,color:this._specifications.color.default,position:this._specifications.position.default,intensity:this._specifications.intensity.default},t);for(var e=0,o=i.properties;e<o.length;e+=1){var n=o[e];i._declarations[n]=new StyleDeclaration(i._specifications[n],t[n])}return this}},i.prototype.getLight=function(){return{anchor:this.getLightProperty("anchor"),color:this.getLightProperty("color"),position:this.getLightProperty("position"),intensity:this.getLightProperty("intensity")}},i.prototype.getLightProperty=function(t){return util.endsWith(t,TRANSITION_SUFFIX)?this._transitionOptions[t]:this._declarations[t]&&this._declarations[t].value},i.prototype.getLightValue=function(t,i){if("position"===t){var e=this._transitions[t].calculate(i),o=util.sphericalToCartesian(e);return{x:o[0],y:o[1],z:o[2]}}return this._transitions[t].calculate(i)},i.prototype.setLight=function(t){var i=this;if(!this._validate(validateStyle.light,t))for(var e in t){var o=t[e];util.endsWith(e,TRANSITION_SUFFIX)?i._transitionOptions[e]=o:null===o||void 0===o?delete i._declarations[e]:i._declarations[e]=new StyleDeclaration(i._specifications[e],o)}},i.prototype.recalculate=function(t){var i=this;for(var e in i._declarations)i.calculated[e]=i.getLightValue(e,{zoom:t})},i.prototype._applyLightDeclaration=function(t,i,e,o,n){var r=e.transition?this._transitions[t]:void 0,a=this._specifications[t];if(null!==i&&void 0!==i||(i=new StyleDeclaration(a,a.default)),!r||r.declaration.json!==i.json){var s=util.extend({duration:300,delay:0},o,this.getLightProperty(t+TRANSITION_SUFFIX)),l=this._transitions[t]=new StyleTransition(a,i,r,s);l.instant()||(l.loopID=n.set(l.endTime-Date.now())),r&&n.cancel(r.loopID)}},i.prototype.updateLightTransitions=function(t,i,e){var o,n=this;for(o in n._declarations)n._applyLightDeclaration(o,n._declarations[o],t,i,e)},i.prototype._validate=function(t,i){return validateStyle.emitErrors(this,t.call(validateStyle,util.extend({value:i,style:{glyphs:!0,sprite:!0},styleSpec:styleSpec})))},i}(Evented);module.exports=Light;
},{"../style-spec/reference/latest":119,"../util/evented":202,"../util/util":214,"./style_declaration":149,"./style_transition":157,"./validate_style":158}],148:[function(_dereq_,module,exports){
"use strict";var Evented=_dereq_("../util/evented"),StyleLayer=_dereq_("./style_layer"),ImageSprite=_dereq_("./image_sprite"),Light=_dereq_("./light"),GlyphSource=_dereq_("../symbol/glyph_source"),SpriteAtlas=_dereq_("../symbol/sprite_atlas"),LineAtlas=_dereq_("../render/line_atlas"),util=_dereq_("../util/util"),ajax=_dereq_("../util/ajax"),mapbox=_dereq_("../util/mapbox"),browser=_dereq_("../util/browser"),Dispatcher=_dereq_("../util/dispatcher"),AnimationLoop=_dereq_("./animation_loop"),validateStyle=_dereq_("./validate_style"),Source=_dereq_("../source/source"),QueryFeatures=_dereq_("../source/query_features"),SourceCache=_dereq_("../source/source_cache"),styleSpec=_dereq_("../style-spec/reference/latest"),MapboxGLFunction=_dereq_("../style-spec/function"),getWorkerPool=_dereq_("../util/global_worker_pool"),deref=_dereq_("../style-spec/deref"),diff=_dereq_("../style-spec/diff"),rtlTextPlugin=_dereq_("../source/rtl_text_plugin"),supportedDiffOperations=util.pick(diff.operations,["addLayer","removeLayer","setPaintProperty","setLayoutProperty","setFilter","addSource","removeSource","setLayerZoomRange","setLight","setTransition"]),ignoredDiffOperations=util.pick(diff.operations,["setCenter","setZoom","setBearing","setPitch"]),Style=function(e){function t(t,r,i){var o=this;e.call(this),this.map=r,this.animationLoop=r&&r.animationLoop||new AnimationLoop,this.dispatcher=new Dispatcher(getWorkerPool(),this),this.spriteAtlas=new SpriteAtlas(1024,1024),this.spriteAtlas.setEventedParent(this),this.lineAtlas=new LineAtlas(256,512),this._layers={},this._order=[],this.sourceCaches={},this.zoomHistory={},this._loaded=!1,util.bindAll(["_redoPlacement"],this),this._resetUpdates(),i=util.extend({validate:"string"!=typeof t||!mapbox.isMapboxURL(t)},i),this.setEventedParent(r),this.fire("dataloading",{dataType:"style"});var s=this;this._rtlTextPluginCallback=rtlTextPlugin.registerForPluginAvailability(function(e){s.dispatcher.broadcast("loadRTLTextPlugin",e.pluginBlobURL,e.errorCallback);for(var t in s.sourceCaches)s.sourceCaches[t].reload()});var a=function(e,t){if(e)return void o.fire("error",{error:e});if(!i.validate||!validateStyle.emitErrors(o,validateStyle(t))){o._loaded=!0,o.stylesheet=t,o.updateClasses();for(var r in t.sources)o.addSource(r,t.sources[r],i);t.sprite&&(o.sprite=new ImageSprite(t.sprite,o)),o.glyphSource=new GlyphSource(t.glyphs),o._resolve(),o.fire("data",{dataType:"style"}),o.fire("style.load")}};"string"==typeof t?ajax.getJSON(mapbox.normalizeStyleURL(t),a):browser.frame(a.bind(this,null,t)),this.on("data",function(e){if("source"===e.dataType&&"metadata"===e.sourceDataType){var t=o.sourceCaches[e.sourceId].getSource();if(t&&t.vectorLayerIds)for(var r in o._layers){var i=o._layers[r];i.source===t.id&&o._validateLayer(i)}}})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype._validateLayer=function(e){var t=this.sourceCaches[e.source];if(e.sourceLayer&&t){var r=t.getSource();("geojson"===r.type||r.vectorLayerIds&&r.vectorLayerIds.indexOf(e.sourceLayer)===-1)&&this.fire("error",{error:new Error('Source layer "'+e.sourceLayer+'" does not exist on source "'+r.id+'" as specified by style layer "'+e.id+'"')})}},t.prototype.loaded=function(){var e=this;if(!this._loaded)return!1;if(Object.keys(this._updatedSources).length)return!1;for(var t in e.sourceCaches)if(!e.sourceCaches[t].loaded())return!1;return!(this.sprite&&!this.sprite.loaded())},t.prototype._resolve=function(){var e=this,t=deref(this.stylesheet.layers);this._order=t.map(function(e){return e.id}),this._layers={};for(var r=0,i=t;r<i.length;r+=1){var o=i[r];o=StyleLayer.create(o),o.setEventedParent(e,{layer:{id:o.id}}),e._layers[o.id]=o}this.dispatcher.broadcast("setLayers",this._serializeLayers(this._order)),this.light=new Light(this.stylesheet.light)},t.prototype._serializeLayers=function(e){var t=this;return e.map(function(e){return t._layers[e].serialize()})},t.prototype._applyClasses=function(e,t){var r=this;if(this._loaded){e=e||[],t=t||{transition:!0};var i=this.stylesheet.transition||{},o=this._updatedAllPaintProps?this._layers:this._updatedPaintProps;for(var s in o){var a=r._layers[s],n=r._updatedPaintProps[s];if(r._updatedAllPaintProps||n.all)a.updatePaintTransitions(e,t,i,r.animationLoop,r.zoomHistory);else for(var l in n)r._layers[s].updatePaintTransition(l,e,t,i,r.animationLoop,r.zoomHistory)}this.light.updateLightTransitions(t,i,this.animationLoop)}},t.prototype._recalculate=function(e){var t=this;if(this._loaded){for(var r in t.sourceCaches)t.sourceCaches[r].used=!1;this._updateZoomHistory(e);for(var i=0,o=t._order;i<o.length;i+=1){var s=o[i],a=t._layers[s];a.recalculate(e),!a.isHidden(e)&&a.source&&(t.sourceCaches[a.source].used=!0)}this.light.recalculate(e);var n=300;Math.floor(this.z)!==Math.floor(e)&&this.animationLoop.set(n),this.z=e}},t.prototype._updateZoomHistory=function(e){var t=this.zoomHistory;void 0===t.lastIntegerZoom&&(t.lastIntegerZoom=Math.floor(e),t.lastIntegerZoomTime=0,t.lastZoom=e),Math.floor(t.lastZoom)<Math.floor(e)?(t.lastIntegerZoom=Math.floor(e),t.lastIntegerZoomTime=Date.now()):Math.floor(t.lastZoom)>Math.floor(e)&&(t.lastIntegerZoom=Math.floor(e+1),t.lastIntegerZoomTime=Date.now()),t.lastZoom=e},t.prototype._checkLoaded=function(){if(!this._loaded)throw new Error("Style is not done loading")},t.prototype.update=function(e,t){var r=this;if(this._changed){var i=Object.keys(this._updatedLayers),o=Object.keys(this._removedLayers);(i.length||o.length||this._updatedSymbolOrder)&&this._updateWorkerLayers(i,o);for(var s in r._updatedSources){var a=r._updatedSources[s];"reload"===a?r._reloadSource(s):"clear"===a&&r._clearSource(s)}this._applyClasses(e,t),this._resetUpdates(),this.fire("data",{dataType:"style"})}},t.prototype._updateWorkerLayers=function(e,t){var r=this,i=this._updatedSymbolOrder?this._order.filter(function(e){return"symbol"===r._layers[e].type}):null;this.dispatcher.broadcast("updateLayers",{layers:this._serializeLayers(e),removedIds:t,symbolOrder:i})},t.prototype._resetUpdates=function(){this._changed=!1,this._updatedLayers={},this._removedLayers={},this._updatedSymbolOrder=!1,this._updatedSources={},this._updatedPaintProps={},this._updatedAllPaintProps=!1},t.prototype.setState=function(e){var t=this;if(this._checkLoaded(),validateStyle.emitErrors(this,validateStyle(e)))return!1;e=util.extend({},e),e.layers=deref(e.layers);var r=diff(this.serialize(),e).filter(function(e){return!(e.command in ignoredDiffOperations)});if(0===r.length)return!1;var i=r.filter(function(e){return!(e.command in supportedDiffOperations)});if(i.length>0)throw new Error("Unimplemented: "+i.map(function(e){return e.command}).join(", ")+".");return r.forEach(function(e){"setTransition"!==e.command&&t[e.command].apply(t,e.args)}),this.stylesheet=e,!0},t.prototype.addSource=function(e,t,r){var i=this;if(this._checkLoaded(),void 0!==this.sourceCaches[e])throw new Error("There is already a source with this ID");if(!t.type)throw new Error("The type property must be defined, but the only the following properties were given: "+Object.keys(t)+".");var o=["vector","raster","geojson","video","image","canvas"],s=o.indexOf(t.type)>=0;if(!s||!this._validate(validateStyle.source,"sources."+e,t,null,r)){var a=this.sourceCaches[e]=new SourceCache(e,t,this.dispatcher);a.style=this,a.setEventedParent(this,function(){return{isSourceLoaded:i.loaded(),source:a.serialize(),sourceId:e}}),a.onAdd(this.map),this._changed=!0}},t.prototype.removeSource=function(e){if(this._checkLoaded(),void 0===this.sourceCaches[e])throw new Error("There is no source with this ID");var t=this.sourceCaches[e];delete this.sourceCaches[e],delete this._updatedSources[e],t.setEventedParent(null),t.clearTiles(),t.onRemove&&t.onRemove(this.map),this._changed=!0},t.prototype.getSource=function(e){return this.sourceCaches[e]&&this.sourceCaches[e].getSource()},t.prototype.addLayer=function(e,t,r){this._checkLoaded();var i=e.id;if("object"==typeof e.source&&(this.addSource(i,e.source),e=util.extend(e,{source:i})),!this._validate(validateStyle.layer,"layers."+i,e,{arrayIndex:-1},r)){var o=StyleLayer.create(e);this._validateLayer(o),o.setEventedParent(this,{layer:{id:i}});var s=t?this._order.indexOf(t):this._order.length;if(this._order.splice(s,0,i),this._layers[i]=o,this._removedLayers[i]&&o.source){var a=this._removedLayers[i];delete this._removedLayers[i],this._updatedSources[o.source]=a.type!==o.type?"clear":"reload"}this._updateLayer(o),"symbol"===o.type&&(this._updatedSymbolOrder=!0),this.updateClasses(i)}},t.prototype.moveLayer=function(e,t){this._checkLoaded(),this._changed=!0;var r=this._layers[e];if(!r)return void this.fire("error",{error:new Error("The layer '"+e+"' does not exist in the map's style and cannot be moved.")});var i=this._order.indexOf(e);this._order.splice(i,1);var o=t?this._order.indexOf(t):this._order.length;this._order.splice(o,0,e),"symbol"===r.type&&(this._updatedSymbolOrder=!0,r.source&&!this._updatedSources[r.source]&&(this._updatedSources[r.source]="reload"))},t.prototype.removeLayer=function(e){this._checkLoaded();var t=this._layers[e];if(!t)return void this.fire("error",{error:new Error("The layer '"+e+"' does not exist in the map's style and cannot be removed.")});t.setEventedParent(null);var r=this._order.indexOf(e);this._order.splice(r,1),"symbol"===t.type&&(this._updatedSymbolOrder=!0),this._changed=!0,this._removedLayers[e]=t,delete this._layers[e],delete this._updatedLayers[e],delete this._updatedPaintProps[e]},t.prototype.getLayer=function(e){return this._layers[e]},t.prototype.setLayerZoomRange=function(e,t,r){this._checkLoaded();var i=this.getLayer(e);return i?void(i.minzoom===t&&i.maxzoom===r||(null!=t&&(i.minzoom=t),null!=r&&(i.maxzoom=r),this._updateLayer(i))):void this.fire("error",{error:new Error("The layer '"+e+"' does not exist in the map's style and cannot have zoom extent.")})},t.prototype.setFilter=function(e,t){this._checkLoaded();var r=this.getLayer(e);return r?void(null!==t&&void 0!==t&&this._validate(validateStyle.filter,"layers."+r.id+".filter",t)||util.deepEqual(r.filter,t)||(r.filter=util.clone(t),this._updateLayer(r))):void this.fire("error",{error:new Error("The layer '"+e+"' does not exist in the map's style and cannot be filtered.")})},t.prototype.getFilter=function(e){return util.clone(this.getLayer(e).filter)},t.prototype.setLayoutProperty=function(e,t,r){this._checkLoaded();var i=this.getLayer(e);return i?void(util.deepEqual(i.getLayoutProperty(t),r)||(i.setLayoutProperty(t,r),this._updateLayer(i))):void this.fire("error",{error:new Error("The layer '"+e+"' does not exist in the map's style and cannot be styled.")})},t.prototype.getLayoutProperty=function(e,t){return this.getLayer(e).getLayoutProperty(t)},t.prototype.setPaintProperty=function(e,t,r,i){this._checkLoaded();var o=this.getLayer(e);if(!o)return void this.fire("error",{error:new Error("The layer '"+e+"' does not exist in the map's style and cannot be styled.")});if(!util.deepEqual(o.getPaintProperty(t,i),r)){var s=o.isPaintValueFeatureConstant(t);o.setPaintProperty(t,r,i);var a=!(r&&MapboxGLFunction.isFunctionDefinition(r)&&"$zoom"!==r.property&&void 0!==r.property);a&&s||this._updateLayer(o),this.updateClasses(e,t)}},t.prototype.getPaintProperty=function(e,t,r){return this.getLayer(e).getPaintProperty(t,r)},t.prototype.getTransition=function(){return util.extend({duration:300,delay:0},this.stylesheet&&this.stylesheet.transition)},t.prototype.updateClasses=function(e,t){if(this._changed=!0,e){var r=this._updatedPaintProps;r[e]||(r[e]={}),r[e][t||"all"]=!0}else this._updatedAllPaintProps=!0},t.prototype.serialize=function(){var e=this;return util.filterObject({version:this.stylesheet.version,name:this.stylesheet.name,metadata:this.stylesheet.metadata,light:this.stylesheet.light,center:this.stylesheet.center,zoom:this.stylesheet.zoom,bearing:this.stylesheet.bearing,pitch:this.stylesheet.pitch,sprite:this.stylesheet.sprite,glyphs:this.stylesheet.glyphs,transition:this.stylesheet.transition,sources:util.mapObject(this.sourceCaches,function(e){return e.serialize()}),layers:this._order.map(function(t){return e._layers[t].serialize()})},function(e){return void 0!==e})},t.prototype._updateLayer=function(e){this._updatedLayers[e.id]=!0,e.source&&!this._updatedSources[e.source]&&(this._updatedSources[e.source]="reload"),this._changed=!0},t.prototype._flattenRenderedFeatures=function(e){for(var t=this,r=[],i=this._order.length-1;i>=0;i--)for(var o=t._order[i],s=0,a=e;s<a.length;s+=1){var n=a[s],l=n[o];if(l)for(var d=0,u=l;d<u.length;d+=1){var h=u[d];r.push(h)}}return r},t.prototype.queryRenderedFeatures=function(e,t,r,i){var o=this;t&&t.filter&&this._validate(validateStyle.filter,"queryRenderedFeatures.filter",t.filter);var s={};if(t&&t.layers){if(!Array.isArray(t.layers))return void this.fire("error",{error:"parameters.layers must be an Array."});for(var a=0,n=t.layers;a<n.length;a+=1){var l=n[a],d=o._layers[l];if(!d)return void o.fire("error",{error:"The layer '"+l+"' does not exist in the map's style and cannot be queried for features."});s[d.source]=!0}}var u=[];for(var h in o.sourceCaches)if(!t.layers||s[h]){var c=QueryFeatures.rendered(o.sourceCaches[h],o._layers,e,t,r,i);u.push(c)}return this._flattenRenderedFeatures(u)},t.prototype.querySourceFeatures=function(e,t){t&&t.filter&&this._validate(validateStyle.filter,"querySourceFeatures.filter",t.filter);var r=this.sourceCaches[e];return r?QueryFeatures.source(r,t):[]},t.prototype.addSourceType=function(e,t,r){return Source.getType(e)?r(new Error('A source type called "'+e+'" already exists.')):(Source.setType(e,t),t.workerSourceURL?void this.dispatcher.broadcast("loadWorkerSource",{name:e,url:t.workerSourceURL},r):r(null,null))},t.prototype.getLight=function(){return this.light.getLight()},t.prototype.setLight=function(e,t){this._checkLoaded();var r=this.light.getLight(),i=!1;for(var o in e)if(!util.deepEqual(e[o],r[o])){i=!0;break}if(i){var s=this.stylesheet.transition||{};this.light.setLight(e),this.light.updateLightTransitions(t||{transition:!0},s,this.animationLoop)}},t.prototype._validate=function(e,t,r,i,o){return(!o||o.validate!==!1)&&validateStyle.emitErrors(this,e.call(validateStyle,util.extend({key:t,style:this.serialize(),value:r,styleSpec:styleSpec},i)))},t.prototype._remove=function(){var e=this;rtlTextPlugin.evented.off("pluginAvailable",this._rtlTextPluginCallback);for(var t in e.sourceCaches)e.sourceCaches[t].clearTiles();this.dispatcher.remove()},t.prototype._clearSource=function(e){this.sourceCaches[e].clearTiles()},t.prototype._reloadSource=function(e){this.sourceCaches[e].reload()},t.prototype._updateSources=function(e){var t=this;for(var r in t.sourceCaches)t.sourceCaches[r].update(e)},t.prototype._redoPlacement=function(){var e=this;for(var t in e.sourceCaches)e.sourceCaches[t].redoPlacement()},t.prototype.getIcons=function(e,t,r){var i=this,o=function(){i.spriteAtlas.setSprite(i.sprite),i.spriteAtlas.addIcons(t.icons,r)};!this.sprite||this.sprite.loaded()?o():this.sprite.on("data",o)},t.prototype.getGlyphs=function(e,t,r){function i(e,t,i){e&&console.error(e),n[i]=t,a--,0===a&&r(null,n)}var o=this,s=t.stacks,a=Object.keys(s).length,n={};for(var l in s)o.glyphSource.getSimpleGlyphs(l,s[l],t.uid,i)},t}(Evented);module.exports=Style;
},{"../render/line_atlas":76,"../source/query_features":89,"../source/rtl_text_plugin":91,"../source/source":92,"../source/source_cache":93,"../style-spec/deref":102,"../style-spec/diff":103,"../style-spec/function":107,"../style-spec/reference/latest":119,"../symbol/glyph_source":167,"../symbol/sprite_atlas":171,"../util/ajax":193,"../util/browser":194,"../util/dispatcher":200,"../util/evented":202,"../util/global_worker_pool":204,"../util/mapbox":210,"../util/util":214,"./animation_loop":145,"./image_sprite":146,"./light":147,"./style_layer":150,"./validate_style":158}],149:[function(_dereq_,module,exports){
"use strict";var createFunction=_dereq_("../style-spec/function"),util=_dereq_("../util/util"),StyleDeclaration=function(t,i){var o=this;if(this.value=util.clone(i),this.isFunction=createFunction.isFunctionDefinition(i),this.json=JSON.stringify(this.value),this.minimum=t.minimum,this.function=createFunction(this.value,t),this.isFeatureConstant=this.function.isFeatureConstant,this.isZoomConstant=this.function.isZoomConstant,this.isFeatureConstant||this.isZoomConstant){if(!this.isZoomConstant){this.stopZoomLevels=[];for(var n=0,e=o.value.stops;n<e.length;n+=1){var s=e[n];o.stopZoomLevels.indexOf(s[0])<0&&o.stopZoomLevels.push(s[0])}}}else{this.stopZoomLevels=[];for(var u=[],a=0,l=o.value.stops;a<l.length;a+=1){var r=l[a],c=r[0].zoom;o.stopZoomLevels.indexOf(c)<0&&(o.stopZoomLevels.push(c),u.push([c,u.length]))}this._functionInterpolationT=createFunction({type:"exponential",stops:u,base:i.base},{type:"number"})}};StyleDeclaration.prototype.calculate=function(t,i){var o=this.function(t&&t.zoom,i||{});return void 0!==this.minimum&&o<this.minimum?this.minimum:o},StyleDeclaration.prototype.calculateInterpolationT=function(t){return this._functionInterpolationT(t&&t.zoom,{})},module.exports=StyleDeclaration;
},{"../style-spec/function":107,"../util/util":214}],150:[function(_dereq_,module,exports){
"use strict";function getDeclarationValue(t){return t.value}var util=_dereq_("../util/util"),StyleTransition=_dereq_("./style_transition"),StyleDeclaration=_dereq_("./style_declaration"),styleSpec=_dereq_("../style-spec/reference/latest"),validateStyle=_dereq_("./validate_style"),parseColor=_dereq_("./../style-spec/util/parse_color"),Evented=_dereq_("../util/evented"),TRANSITION_SUFFIX="-transition",StyleLayer=function(t){function i(i){var a=this;t.call(this),this.id=i.id,this.metadata=i.metadata,this.type=i.type,this.source=i.source,this.sourceLayer=i["source-layer"],this.minzoom=i.minzoom,this.maxzoom=i.maxzoom,this.filter=i.filter,this.paint={},this.layout={},this._paintSpecifications=styleSpec["paint_"+this.type],this._layoutSpecifications=styleSpec["layout_"+this.type],this._paintTransitions={},this._paintTransitionOptions={},this._paintDeclarations={},this._layoutDeclarations={},this._layoutFunctions={};var e,o,n={validate:!1};for(var r in i){var s=r.match(/^paint(?:\.(.*))?$/);if(s){var l=s[1]||"";for(e in i[r])a.setPaintProperty(e,i[r][e],l,n)}}for(o in i.layout)a.setLayoutProperty(o,i.layout[o],n);for(e in a._paintSpecifications)a.paint[e]=a.getPaintValue(e);for(o in a._layoutSpecifications)a._updateLayoutValue(o)}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.setLayoutProperty=function(t,i,a){if(null==i)delete this._layoutDeclarations[t];else{var e="layers."+this.id+".layout."+t;if(this._validate(validateStyle.layoutProperty,e,t,i,a))return;this._layoutDeclarations[t]=new StyleDeclaration(this._layoutSpecifications[t],i)}this._updateLayoutValue(t)},i.prototype.getLayoutProperty=function(t){return this._layoutDeclarations[t]&&this._layoutDeclarations[t].value},i.prototype.getLayoutValue=function(t,i,a){var e=this._layoutSpecifications[t],o=this._layoutDeclarations[t];return o?o.calculate(i,a):e.default},i.prototype.setPaintProperty=function(t,i,a,e){var o="layers."+this.id+(a?'["paint.'+a+'"].':".paint.")+t;if(util.endsWith(t,TRANSITION_SUFFIX))if(this._paintTransitionOptions[a||""]||(this._paintTransitionOptions[a||""]={}),null===i||void 0===i)delete this._paintTransitionOptions[a||""][t];else{if(this._validate(validateStyle.paintProperty,o,t,i,e))return;this._paintTransitionOptions[a||""][t]=i}else if(this._paintDeclarations[a||""]||(this._paintDeclarations[a||""]={}),null===i||void 0===i)delete this._paintDeclarations[a||""][t];else{if(this._validate(validateStyle.paintProperty,o,t,i,e))return;this._paintDeclarations[a||""][t]=new StyleDeclaration(this._paintSpecifications[t],i)}},i.prototype.getPaintProperty=function(t,i){return i=i||"",util.endsWith(t,TRANSITION_SUFFIX)?this._paintTransitionOptions[i]&&this._paintTransitionOptions[i][t]:this._paintDeclarations[i]&&this._paintDeclarations[i][t]&&this._paintDeclarations[i][t].value},i.prototype.getPaintValue=function(t,i,a){var e=this._paintSpecifications[t],o=this._paintTransitions[t];return o?o.calculate(i,a):"color"===e.type&&e.default?parseColor(e.default):e.default},i.prototype.getPaintValueStopZoomLevels=function(t){var i=this._paintTransitions[t];return i?i.declaration.stopZoomLevels:[]},i.prototype.getLayoutValueStopZoomLevels=function(t){var i=this._layoutDeclarations[t];return i?i.stopZoomLevels:[]},i.prototype.getPaintInterpolationT=function(t,i){var a=this._paintTransitions[t];return a.declaration.calculateInterpolationT(i)},i.prototype.getLayoutInterpolationT=function(t,i){var a=this._layoutDeclarations[t];return a.calculateInterpolationT(i)},i.prototype.isPaintValueFeatureConstant=function(t){var i=this._paintTransitions[t];return!i||i.declaration.isFeatureConstant},i.prototype.isLayoutValueFeatureConstant=function(t){var i=this._layoutDeclarations[t];return!i||i.isFeatureConstant},i.prototype.isPaintValueZoomConstant=function(t){var i=this._paintTransitions[t];return!i||i.declaration.isZoomConstant},i.prototype.isLayoutValueZoomConstant=function(t){var i=this._layoutDeclarations[t];return!i||i.isZoomConstant},i.prototype.isHidden=function(t){return!!(this.minzoom&&t<this.minzoom)||(!!(this.maxzoom&&t>=this.maxzoom)||"none"===this.layout.visibility)},i.prototype.updatePaintTransitions=function(t,i,a,e,o){for(var n=this,r=util.extend({},this._paintDeclarations[""]),s=0;s<t.length;s++)util.extend(r,n._paintDeclarations[t[s]]);var l;for(l in r)n._applyPaintDeclaration(l,r[l],i,a,e,o);for(l in n._paintTransitions)l in r||n._applyPaintDeclaration(l,null,i,a,e,o)},i.prototype.updatePaintTransition=function(t,i,a,e,o,n){for(var r=this,s=this._paintDeclarations[""][t],l=0;l<i.length;l++){var u=r._paintDeclarations[i[l]];u&&u[t]&&(s=u[t])}this._applyPaintDeclaration(t,s,a,e,o,n)},i.prototype.recalculate=function(t){var i=this;for(var a in i._paintTransitions)i.paint[a]=i.getPaintValue(a,{zoom:t});for(var e in i._layoutFunctions)i.layout[e]=i.getLayoutValue(e,{zoom:t})},i.prototype.serialize=function(){var t=this,i={id:this.id,type:this.type,source:this.source,"source-layer":this.sourceLayer,metadata:this.metadata,minzoom:this.minzoom,maxzoom:this.maxzoom,filter:this.filter,layout:util.mapObject(this._layoutDeclarations,getDeclarationValue)};for(var a in t._paintDeclarations){var e=""===a?"paint":"paint."+a;i[e]=util.mapObject(t._paintDeclarations[a],getDeclarationValue)}return util.filterObject(i,function(t,i){return void 0!==t&&!("layout"===i&&!Object.keys(t).length)})},i.prototype._applyPaintDeclaration=function(t,i,a,e,o,n){var r=a.transition?this._paintTransitions[t]:void 0,s=this._paintSpecifications[t];if(null!==i&&void 0!==i||(i=new StyleDeclaration(s,s.default)),!r||r.declaration.json!==i.json){var l=util.extend({duration:300,delay:0},e,this.getPaintProperty(t+TRANSITION_SUFFIX)),u=this._paintTransitions[t]=new StyleTransition(s,i,r,l,n);u.instant()||(u.loopID=o.set(u.endTime-Date.now())),r&&o.cancel(r.loopID)}},i.prototype._updateLayoutValue=function(t){var i=this._layoutDeclarations[t];i&&i.isFunction?this._layoutFunctions[t]=!0:(delete this._layoutFunctions[t],this.layout[t]=this.getLayoutValue(t))},i.prototype._validate=function(t,i,a,e,o){return(!o||o.validate!==!1)&&validateStyle.emitErrors(this,t.call(validateStyle,{key:i,layerType:this.type,objectKey:a,value:e,styleSpec:styleSpec,style:{glyphs:!0,sprite:!0}}))},i}(Evented);module.exports=StyleLayer;var subclasses={circle:_dereq_("./style_layer/circle_style_layer"),fill:_dereq_("./style_layer/fill_style_layer"),"fill-extrusion":_dereq_("./style_layer/fill_extrusion_style_layer"),line:_dereq_("./style_layer/line_style_layer"),symbol:_dereq_("./style_layer/symbol_style_layer")};StyleLayer.create=function(t){var i=subclasses[t.type]||StyleLayer;return new i(t)};
},{"../style-spec/reference/latest":119,"../util/evented":202,"../util/util":214,"./../style-spec/util/parse_color":123,"./style_declaration":149,"./style_layer/circle_style_layer":151,"./style_layer/fill_extrusion_style_layer":152,"./style_layer/fill_style_layer":153,"./style_layer/line_style_layer":154,"./style_layer/symbol_style_layer":155,"./style_transition":157,"./validate_style":158}],151:[function(_dereq_,module,exports){
"use strict";var StyleLayer=_dereq_("../style_layer"),CircleBucket=_dereq_("../../data/bucket/circle_bucket"),CircleStyleLayer=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.createBucket=function(e){return new CircleBucket(e)},t}(StyleLayer);module.exports=CircleStyleLayer;
},{"../../data/bucket/circle_bucket":46,"../style_layer":150}],152:[function(_dereq_,module,exports){
"use strict";var StyleLayer=_dereq_("../style_layer"),FillExtrusionBucket=_dereq_("../../data/bucket/fill_extrusion_bucket"),FillExtrusionStyleLayer=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getPaintValue=function(e,r,o){var l=t.prototype.getPaintValue.call(this,e,r,o);return"fill-extrusion-color"===e&&l&&(l[3]=1),l},e.prototype.createBucket=function(t){return new FillExtrusionBucket(t)},e}(StyleLayer);module.exports=FillExtrusionStyleLayer;
},{"../../data/bucket/fill_extrusion_bucket":48,"../style_layer":150}],153:[function(_dereq_,module,exports){
"use strict";var StyleLayer=_dereq_("../style_layer"),FillBucket=_dereq_("../../data/bucket/fill_bucket"),FillStyleLayer=function(t){function o(){t.apply(this,arguments)}return t&&(o.__proto__=t),o.prototype=Object.create(t&&t.prototype),o.prototype.constructor=o,o.prototype.getPaintValue=function(o,l,e){var i=this;if("fill-outline-color"===o){if(void 0===this.getPaintProperty("fill-outline-color"))return t.prototype.getPaintValue.call(this,"fill-color",l,e);for(var r=this._paintTransitions["fill-outline-color"];r;){var n=r&&r.declaration&&r.declaration.value;if(!n)return t.prototype.getPaintValue.call(i,"fill-color",l,e);r=r.oldTransition}}return t.prototype.getPaintValue.call(this,o,l,e)},o.prototype.getPaintValueStopZoomLevels=function(o){return"fill-outline-color"===o&&void 0===this.getPaintProperty("fill-outline-color")?t.prototype.getPaintValueStopZoomLevels.call(this,"fill-color"):t.prototype.getPaintValueStopZoomLevels.call(this,o)},o.prototype.getPaintInterpolationT=function(o,l){return"fill-outline-color"===o&&void 0===this.getPaintProperty("fill-outline-color")?t.prototype.getPaintInterpolationT.call(this,"fill-color",l):t.prototype.getPaintInterpolationT.call(this,o,l)},o.prototype.isPaintValueFeatureConstant=function(o){return"fill-outline-color"===o&&void 0===this.getPaintProperty("fill-outline-color")?t.prototype.isPaintValueFeatureConstant.call(this,"fill-color"):t.prototype.isPaintValueFeatureConstant.call(this,o)},o.prototype.isPaintValueZoomConstant=function(o){return"fill-outline-color"===o&&void 0===this.getPaintProperty("fill-outline-color")?t.prototype.isPaintValueZoomConstant.call(this,"fill-color"):t.prototype.isPaintValueZoomConstant.call(this,o)},o.prototype.createBucket=function(t){return new FillBucket(t)},o}(StyleLayer);module.exports=FillStyleLayer;
},{"../../data/bucket/fill_bucket":47,"../style_layer":150}],154:[function(_dereq_,module,exports){
"use strict";var StyleLayer=_dereq_("../style_layer"),LineBucket=_dereq_("../../data/bucket/line_bucket"),util=_dereq_("../../util/util"),LineStyleLayer=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.getPaintValue=function(t,r,o){var i=e.prototype.getPaintValue.call(this,t,r,o);if(i&&"line-dasharray"===t){var a=this.getPaintValue("line-width",util.extend({},r,{zoom:Math.floor(r.zoom)}),o);i.fromScale*=a,i.toScale*=a}return i},t.prototype.createBucket=function(e){return new LineBucket(e)},t}(StyleLayer);module.exports=LineStyleLayer;
},{"../../data/bucket/line_bucket":49,"../../util/util":214,"../style_layer":150}],155:[function(_dereq_,module,exports){
"use strict";var StyleLayer=_dereq_("../style_layer"),SymbolBucket=_dereq_("../../data/bucket/symbol_bucket"),SymbolStyleLayer=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getLayoutValue=function(e,o,r){var a=t.prototype.getLayoutValue.call(this,e,o,r);if("auto"!==a)return a;switch(e){case"text-rotation-alignment":case"icon-rotation-alignment":return"line"===this.getLayoutValue("symbol-placement",o,r)?"map":"viewport";case"text-pitch-alignment":return this.getLayoutValue("text-rotation-alignment",o,r);default:return a}},e.prototype.createBucket=function(t){return new SymbolBucket(t)},e}(StyleLayer);module.exports=SymbolStyleLayer;
},{"../../data/bucket/symbol_bucket":50,"../style_layer":150}],156:[function(_dereq_,module,exports){
"use strict";var StyleLayer=_dereq_("./style_layer"),util=_dereq_("../util/util"),featureFilter=_dereq_("../style-spec/feature_filter"),groupByLayout=_dereq_("../style-spec/group_by_layout"),StyleLayerIndex=function(e){e&&this.replace(e)};StyleLayerIndex.prototype.replace=function(e){var r=this;this.symbolOrder=[];for(var t=0,i=e;t<i.length;t+=1){var a=i[t];"symbol"===a.type&&r.symbolOrder.push(a.id)}this._layerConfigs={},this._layers={},this.update(e,[])},StyleLayerIndex.prototype.update=function(e,r,t){for(var i=this,a=0,l=e;a<l.length;a+=1){var y=l[a];i._layerConfigs[y.id]=y;var s=i._layers[y.id]=StyleLayer.create(y);s.updatePaintTransitions({},{transition:!1}),s.filter=featureFilter(s.filter)}for(var o=0,u=r;o<u.length;o+=1){var n=u[o];delete i._layerConfigs[n],delete i._layers[n]}t&&(this.symbolOrder=t),this.familiesBySource={};for(var f=groupByLayout(util.values(this._layerConfigs)),p=0,d=f;p<d.length;p+=1){var h=d[p],c=h.map(function(e){return i._layers[e.id]}),v=c[0];if(!v.layout||"none"!==v.layout.visibility){var _=v.source||"",g=i.familiesBySource[_];g||(g=i.familiesBySource[_]={});var L=v.sourceLayer||"_geojsonTileLayer",m=g[L];m||(m=g[L]=[]),m.push(c)}}},module.exports=StyleLayerIndex;
},{"../style-spec/feature_filter":105,"../style-spec/group_by_layout":108,"../util/util":214,"./style_layer":150}],157:[function(_dereq_,module,exports){
"use strict";function interpZoomTransitioned(t,i,o){if(void 0!==t&&void 0!==i)return{from:t.to,fromScale:t.toScale,to:i.to,toScale:i.toScale,t:o}}var util=_dereq_("../util/util"),interpolate=_dereq_("../util/interpolate"),fakeZoomHistory={lastIntegerZoom:0,lastIntegerZoomTime:0,lastZoom:0},StyleTransition=function(t,i,o,e,a){this.declaration=i,this.startTime=this.endTime=(new Date).getTime(),this.oldTransition=o,this.duration=e.duration||0,this.delay=e.delay||0,this.zoomTransitioned="piecewise-constant"===t.function&&t.transition,this.interp=this.zoomTransitioned?interpZoomTransitioned:interpolate[t.type],this.zoomHistory=a||fakeZoomHistory,this.instant()||(this.endTime=this.startTime+this.duration+this.delay),o&&o.endTime<=this.startTime&&delete o.oldTransition};StyleTransition.prototype.instant=function(){return!this.oldTransition||!this.interp||0===this.duration&&0===this.delay},StyleTransition.prototype.calculate=function(t,i,o){var e=this._calculateTargetValue(t,i);if(this.instant())return e;if(o=o||Date.now(),o>=this.endTime)return e;var a=this.oldTransition.calculate(t,i,this.startTime),n=util.easeCubicInOut((o-this.startTime-this.delay)/this.duration);return this.interp(a,e,n)},StyleTransition.prototype._calculateTargetValue=function(t,i){if(!this.zoomTransitioned)return this.declaration.calculate(t,i);var o=t.zoom,e=this.zoomHistory.lastIntegerZoom,a=o>e?2:.5,n=this.declaration.calculate({zoom:o>e?o-1:o+1},i),r=this.declaration.calculate({zoom:o},i),s=Math.min((Date.now()-this.zoomHistory.lastIntegerZoomTime)/this.duration,1),l=Math.abs(o-e),u=interpolate(s,1,l);return void 0!==n&&void 0!==r?{from:n,fromScale:a,to:r,toScale:1,t:u}:void 0},module.exports=StyleTransition;
},{"../util/interpolate":206,"../util/util":214}],158:[function(_dereq_,module,exports){
"use strict";module.exports=_dereq_("../style-spec/validate_style.min"),module.exports.emitErrors=function(r,e){if(e&&e.length){for(var t=0;t<e.length;t++)r.fire("error",{error:new Error(e[t].message)});return!0}return!1};
},{"../style-spec/validate_style.min":144}],159:[function(_dereq_,module,exports){
"use strict";var Point=_dereq_("point-geometry"),Anchor=function(t){function o(o,e,n,r){t.call(this,o,e),this.angle=n,void 0!==r&&(this.segment=r)}return t&&(o.__proto__=t),o.prototype=Object.create(t&&t.prototype),o.prototype.constructor=o,o.prototype.clone=function(){return new o(this.x,this.y,this.angle,this.segment)},o}(Point);module.exports=Anchor;
},{"point-geometry":26}],160:[function(_dereq_,module,exports){
"use strict";function checkMaxAngle(e,t,a,r,n){if(void 0===t.segment)return!0;for(var i=t,s=t.segment+1,f=0;f>-a/2;){if(s--,s<0)return!1;f-=e[s].dist(i),i=e[s]}f+=e[s].dist(e[s+1]),s++;for(var l=[],o=0;f<a/2;){var u=e[s-1],c=e[s],g=e[s+1];if(!g)return!1;var h=u.angleTo(c)-c.angleTo(g);for(h=Math.abs((h+3*Math.PI)%(2*Math.PI)-Math.PI),l.push({distance:f,angleDelta:h}),o+=h;f-l[0].distance>r;)o-=l.shift().angleDelta;if(o>n)return!1;s++,f+=c.dist(g)}return!0}module.exports=checkMaxAngle;
},{}],161:[function(_dereq_,module,exports){
"use strict";function clipLine(n,x,y,o,e){for(var r=[],t=0;t<n.length;t++)for(var i=n[t],u=void 0,d=0;d<i.length-1;d++){var P=i[d],w=i[d+1];P.x<x&&w.x<x||(P.x<x?P=new Point(x,P.y+(w.y-P.y)*((x-P.x)/(w.x-P.x)))._round():w.x<x&&(w=new Point(x,P.y+(w.y-P.y)*((x-P.x)/(w.x-P.x)))._round()),P.y<y&&w.y<y||(P.y<y?P=new Point(P.x+(w.x-P.x)*((y-P.y)/(w.y-P.y)),y)._round():w.y<y&&(w=new Point(P.x+(w.x-P.x)*((y-P.y)/(w.y-P.y)),y)._round()),P.x>=o&&w.x>=o||(P.x>=o?P=new Point(o,P.y+(w.y-P.y)*((o-P.x)/(w.x-P.x)))._round():w.x>=o&&(w=new Point(o,P.y+(w.y-P.y)*((o-P.x)/(w.x-P.x)))._round()),P.y>=e&&w.y>=e||(P.y>=e?P=new Point(P.x+(w.x-P.x)*((e-P.y)/(w.y-P.y)),e)._round():w.y>=e&&(w=new Point(P.x+(w.x-P.x)*((e-P.y)/(w.y-P.y)),e)._round()),u&&P.equals(u[u.length-1])||(u=[P],r.push(u)),u.push(w)))))}return r}var Point=_dereq_("point-geometry");module.exports=clipLine;
},{"point-geometry":26}],162:[function(_dereq_,module,exports){
"use strict";var createStructArrayType=_dereq_("../util/struct_array"),Point=_dereq_("point-geometry"),CollisionBoxArray=createStructArrayType({members:[{type:"Int16",name:"anchorPointX"},{type:"Int16",name:"anchorPointY"},{type:"Int16",name:"x1"},{type:"Int16",name:"y1"},{type:"Int16",name:"x2"},{type:"Int16",name:"y2"},{type:"Float32",name:"maxScale"},{type:"Uint32",name:"featureIndex"},{type:"Uint16",name:"sourceLayerIndex"},{type:"Uint16",name:"bucketIndex"},{type:"Int16",name:"bbox0"},{type:"Int16",name:"bbox1"},{type:"Int16",name:"bbox2"},{type:"Int16",name:"bbox3"},{type:"Float32",name:"placementScale"}]});Object.defineProperty(CollisionBoxArray.prototype.StructType.prototype,"anchorPoint",{get:function(){return new Point(this.anchorPointX,this.anchorPointY)}}),module.exports=CollisionBoxArray;
},{"../util/struct_array":212,"point-geometry":26}],163:[function(_dereq_,module,exports){
"use strict";var CollisionFeature=function(t,e,i,o,s,a,n,r,l,d,u){var h=n.top*r-l,x=n.bottom*r+l,f=n.left*r-l,m=n.right*r+l;if(this.boxStartIndex=t.length,d){var _=x-h,b=m-f;if(_>0)if(_=Math.max(10*r,_),u){var v=e[i.segment+1].sub(e[i.segment])._unit()._mult(b),c=[i.sub(v),i.add(v)];this._addLineCollisionBoxes(t,c,i,0,b,_,o,s,a)}else this._addLineCollisionBoxes(t,e,i,i.segment,b,_,o,s,a)}else t.emplaceBack(i.x,i.y,f,h,m,x,1/0,o,s,a,0,0,0,0,0);this.boxEndIndex=t.length};CollisionFeature.prototype._addLineCollisionBoxes=function(t,e,i,o,s,a,n,r,l){var d=a/2,u=Math.floor(s/d),h=-a/2,x=this.boxes,f=i,m=o+1,_=h;do{if(m--,m<0)return x;_-=e[m].dist(f),f=e[m]}while(_>-s/2);for(var b=e[m].dist(e[m+1]),v=0;v<u;v++){for(var c=-s/2+v*d;_+b<c;){if(_+=b,m++,m+1>=e.length)return x;b=e[m].dist(e[m+1])}var g=c-_,p=e[m],C=e[m+1],B=C.sub(p)._unit()._mult(g)._add(p)._round(),M=Math.max(Math.abs(c-h)-d/2,0),y=s/2/M;t.emplaceBack(B.x,B.y,-a/2,-a/2,a/2,a/2,y,n,r,l,0,0,0,0,0)}return x},module.exports=CollisionFeature;
},{}],164:[function(_dereq_,module,exports){
"use strict";var Point=_dereq_("point-geometry"),EXTENT=_dereq_("../data/extent"),Grid=_dereq_("grid-index"),intersectionTests=_dereq_("../util/intersection_tests"),CollisionTile=function(t,e,i){if("object"==typeof t){var r=t;i=e,t=r.angle,e=r.pitch,this.grid=new Grid(r.grid),this.ignoredGrid=new Grid(r.ignoredGrid)}else this.grid=new Grid(EXTENT,12,6),this.ignoredGrid=new Grid(EXTENT,12,0);this.minScale=.5,this.maxScale=2,this.angle=t,this.pitch=e;var a=Math.sin(t),o=Math.cos(t);if(this.rotationMatrix=[o,-a,a,o],this.reverseRotationMatrix=[o,a,-a,o],this.yStretch=1/Math.cos(e/180*Math.PI),this.yStretch=Math.pow(this.yStretch,1.3),this.collisionBoxArray=i,0===i.length){i.emplaceBack();var n=32767;i.emplaceBack(0,0,0,-n,0,n,n,0,0,0,0,0,0,0,0,0),i.emplaceBack(EXTENT,0,0,-n,0,n,n,0,0,0,0,0,0,0,0,0),i.emplaceBack(0,0,-n,0,n,0,n,0,0,0,0,0,0,0,0,0),i.emplaceBack(0,EXTENT,-n,0,n,0,n,0,0,0,0,0,0,0,0,0)}this.tempCollisionBox=i.get(0),this.edges=[i.get(1),i.get(2),i.get(3),i.get(4)]};CollisionTile.prototype.serialize=function(t){var e=this.grid.toArrayBuffer(),i=this.ignoredGrid.toArrayBuffer();return t&&(t.push(e),t.push(i)),{angle:this.angle,pitch:this.pitch,grid:e,ignoredGrid:i}},CollisionTile.prototype.placeCollisionFeature=function(t,e,i){for(var r=this,a=this.collisionBoxArray,o=this.minScale,n=this.rotationMatrix,l=this.yStretch,h=t.boxStartIndex;h<t.boxEndIndex;h++){var s=a.get(h),x=s.anchorPoint._matMult(n),c=x.x,g=x.y,y=c+s.x1,d=g+s.y1*l,m=c+s.x2,u=g+s.y2*l;if(s.bbox0=y,s.bbox1=d,s.bbox2=m,s.bbox3=u,!e)for(var p=r.grid.query(y,d,m,u),M=0;M<p.length;M++){var f=a.get(p[M]),v=f.anchorPoint._matMult(n);if(o=r.getPlacementScale(o,x,s,v,f),o>=r.maxScale)return o}if(i){var S=void 0;if(r.angle){var P=r.reverseRotationMatrix,b=new Point(s.x1,s.y1).matMult(P),T=new Point(s.x2,s.y1).matMult(P),w=new Point(s.x1,s.y2).matMult(P),N=new Point(s.x2,s.y2).matMult(P);S=r.tempCollisionBox,S.anchorPointX=s.anchorPoint.x,S.anchorPointY=s.anchorPoint.y,S.x1=Math.min(b.x,T.x,w.x,N.x),S.y1=Math.min(b.y,T.x,w.x,N.x),S.x2=Math.max(b.x,T.x,w.x,N.x),S.y2=Math.max(b.y,T.x,w.x,N.x),S.maxScale=s.maxScale}else S=s;for(var B=0;B<this.edges.length;B++){var G=r.edges[B];if(o=r.getPlacementScale(o,s.anchorPoint,S,G.anchorPoint,G),o>=r.maxScale)return o}}}return o},CollisionTile.prototype.queryRenderedSymbols=function(t,e){var i={},r=[];if(0===t.length||0===this.grid.length&&0===this.ignoredGrid.length)return r;for(var a=this.collisionBoxArray,o=this.rotationMatrix,n=this.yStretch,l=[],h=1/0,s=1/0,x=-(1/0),c=-(1/0),g=0;g<t.length;g++)for(var y=t[g],d=0;d<y.length;d++){var m=y[d].matMult(o);h=Math.min(h,m.x),s=Math.min(s,m.y),x=Math.max(x,m.x),c=Math.max(c,m.y),l.push(m)}for(var u=this.grid.query(h,s,x,c),p=this.ignoredGrid.query(h,s,x,c),M=0;M<p.length;M++)u.push(p[M]);for(var f=Math.pow(2,Math.ceil(Math.log(e)/Math.LN2*10)/10),v=0;v<u.length;v++){var S=a.get(u[v]),P=S.sourceLayerIndex,b=S.featureIndex;if(void 0===i[P]&&(i[P]={}),!i[P][b]&&!(f<S.placementScale||f>S.maxScale)){var T=S.anchorPoint.matMult(o),w=T.x+S.x1/e,N=T.y+S.y1/e*n,B=T.x+S.x2/e,G=T.y+S.y2/e*n,E=[new Point(w,N),new Point(B,N),new Point(B,G),new Point(w,G)];intersectionTests.polygonIntersectsPolygon(l,E)&&(i[P][b]=!0,r.push(u[v]))}}return r},CollisionTile.prototype.getPlacementScale=function(t,e,i,r,a){var o=e.x-r.x,n=e.y-r.y,l=(a.x1-i.x2)/o,h=(a.x2-i.x1)/o,s=(a.y1-i.y2)*this.yStretch/n,x=(a.y2-i.y1)*this.yStretch/n;(isNaN(l)||isNaN(h))&&(l=h=1),(isNaN(s)||isNaN(x))&&(s=x=1);var c=Math.min(Math.max(l,h),Math.max(s,x)),g=a.maxScale,y=i.maxScale;return c>g&&(c=g),c>y&&(c=y),c>t&&c>=a.placementScale&&(t=c),t},CollisionTile.prototype.insertCollisionFeature=function(t,e,i){for(var r=this,a=i?this.ignoredGrid:this.grid,o=this.collisionBoxArray,n=t.boxStartIndex;n<t.boxEndIndex;n++){var l=o.get(n);l.placementScale=e,e<r.maxScale&&a.insert(n,l.bbox0,l.bbox1,l.bbox2,l.bbox3)}},module.exports=CollisionTile;
},{"../data/extent":54,"../util/intersection_tests":207,"grid-index":16,"point-geometry":26}],165:[function(_dereq_,module,exports){
"use strict";function getAnchors(e,r,t,n,a,l,o,i,h){var c=n?.6*l*o:0,s=Math.max(n?n.right-n.left:0,a?a.right-a.left:0),u=0===e[0].x||e[0].x===h||0===e[0].y||e[0].y===h;r-s*o<r/4&&(r=s*o+r/4);var g=2*l,p=u?r/2*i%r:(s/2+g)*o*i%r;return resample(e,p,r,c,t,s*o,u,!1,h)}function resample(e,r,t,n,a,l,o,i,h){for(var c=l/2,s=0,u=0;u<e.length-1;u++)s+=e[u].dist(e[u+1]);for(var g=0,p=r-t,x=[],f=0;f<e.length-1;f++){for(var v=e[f],m=e[f+1],A=v.dist(m),y=m.angleTo(v);p+t<g+A;){p+=t;var d=(p-g)/A,k=interpolate(v.x,m.x,d),q=interpolate(v.y,m.y,d);if(k>=0&&k<h&&q>=0&&q<h&&p-c>=0&&p+c<=s){var M=new Anchor(k,q,y,f)._round();n&&!checkMaxAngle(e,M,l,n,a)||x.push(M)}}g+=A}return i||x.length||o||(x=resample(e,g/2,t,n,a,l,o,!0,h)),x}var interpolate=_dereq_("../util/interpolate"),Anchor=_dereq_("../symbol/anchor"),checkMaxAngle=_dereq_("./check_max_angle");module.exports=getAnchors;
},{"../symbol/anchor":159,"../util/interpolate":206,"./check_max_angle":160}],166:[function(_dereq_,module,exports){
"use strict";var ShelfPack=_dereq_("@mapbox/shelf-pack"),util=_dereq_("../util/util"),SIZE_GROWTH_RATE=4,DEFAULT_SIZE=128,MAX_SIZE=2048,GlyphAtlas=function(){this.width=DEFAULT_SIZE,this.height=DEFAULT_SIZE,this.atlas=new ShelfPack(this.width,this.height),this.index={},this.ids={},this.data=new Uint8Array(this.width*this.height)};GlyphAtlas.prototype.getGlyphs=function(){var t,i,e,h=this,r={};for(var s in h.ids)t=s.split("#"),i=t[0],e=t[1],r[i]||(r[i]=[]),r[i].push(e);return r},GlyphAtlas.prototype.getRects=function(){var t,i,e,h=this,r={};for(var s in h.ids)t=s.split("#"),i=t[0],e=t[1],r[i]||(r[i]={}),r[i][e]=h.index[s];return r},GlyphAtlas.prototype.addGlyph=function(t,i,e,h){var r=this;if(!e)return null;var s=i+"#"+e.id;if(this.index[s])return this.ids[s].indexOf(t)<0&&this.ids[s].push(t),this.index[s];if(!e.bitmap)return null;var a=e.width+2*h,E=e.height+2*h,n=1,l=a+2*n,T=E+2*n;l+=4-l%4,T+=4-T%4;var u=this.atlas.packOne(l,T);if(u||(this.resize(),u=this.atlas.packOne(l,T)),!u)return util.warnOnce("glyph bitmap overflow"),null;this.index[s]=u,this.ids[s]=[t];for(var d=this.data,p=e.bitmap,A=0;A<E;A++)for(var _=r.width*(u.y+A+n)+u.x+n,o=a*A,x=0;x<a;x++)d[_+x]=p[o+x];return this.dirty=!0,u},GlyphAtlas.prototype.resize=function(){var t=this,i=this.width,e=this.height;if(!(i>=MAX_SIZE||e>=MAX_SIZE)){this.texture&&(this.gl&&this.gl.deleteTexture(this.texture),this.texture=null),this.width*=SIZE_GROWTH_RATE,this.height*=SIZE_GROWTH_RATE,this.atlas.resize(this.width,this.height);for(var h=new ArrayBuffer(this.width*this.height),r=0;r<e;r++){var s=new Uint8Array(t.data.buffer,e*r,i),a=new Uint8Array(h,e*r*SIZE_GROWTH_RATE,i);a.set(s)}this.data=new Uint8Array(h)}},GlyphAtlas.prototype.bind=function(t){this.gl=t,this.texture?t.bindTexture(t.TEXTURE_2D,this.texture):(this.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.texture),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,t.ALPHA,this.width,this.height,0,t.ALPHA,t.UNSIGNED_BYTE,null))},GlyphAtlas.prototype.updateTexture=function(t){this.bind(t),this.dirty&&(t.texSubImage2D(t.TEXTURE_2D,0,0,0,this.width,this.height,t.ALPHA,t.UNSIGNED_BYTE,this.data),this.dirty=!1)},module.exports=GlyphAtlas;
},{"../util/util":214,"@mapbox/shelf-pack":2}],167:[function(_dereq_,module,exports){
"use strict";function glyphUrl(t,e,a,l){return l=l||"abc",a.replace("{s}",l[t.length%l.length]).replace("{fontstack}",t).replace("{range}",e)}var normalizeURL=_dereq_("../util/mapbox").normalizeGlyphsURL,ajax=_dereq_("../util/ajax"),verticalizePunctuation=_dereq_("../util/verticalize_punctuation"),Glyphs=_dereq_("../util/glyphs"),GlyphAtlas=_dereq_("../symbol/glyph_atlas"),Protobuf=_dereq_("pbf"),SimpleGlyph=function(t,e,a){var l=1;this.advance=t.advance,this.left=t.left-a-l,this.top=t.top+a+l,this.rect=e},GlyphSource=function(t){this.url=t&&normalizeURL(t),this.atlases={},this.stacks={},this.loading={}};GlyphSource.prototype.getSimpleGlyphs=function(t,e,a,l){var i=this;void 0===this.stacks[t]&&(this.stacks[t]={}),void 0===this.atlases[t]&&(this.atlases[t]=new GlyphAtlas);for(var r={},o=this.stacks[t],s=this.atlases[t],n=3,h={},p=0,u=function(e){var l=Math.floor(e/256);if(o[l]){var i=o[l].glyphs[e],u=s.addGlyph(a,t,i,n);i&&(r[e]=new SimpleGlyph(i,u,n))}else void 0===h[l]&&(h[l]=[],p++),h[l].push(e)},c=0;c<e.length;c++){var y=e[c],f=String.fromCharCode(y);u(y),verticalizePunctuation.lookup[f]&&u(verticalizePunctuation.lookup[f].charCodeAt(0))}p||l(void 0,r,t);var v=function(e,o,u){if(!e)for(var c=i.stacks[t][o]=u.stacks[0],y=0;y<h[o].length;y++){var f=h[o][y],v=c.glyphs[f],d=s.addGlyph(a,t,v,n);v&&(r[f]=new SimpleGlyph(v,d,n))}p--,p||l(void 0,r,t)};for(var d in h)i.loadRange(t,d,v)},GlyphSource.prototype.loadRange=function(t,e,a){if(256*e>65535)return a("glyphs > 65535 not supported");void 0===this.loading[t]&&(this.loading[t]={});var l=this.loading[t];if(l[e])l[e].push(a);else{l[e]=[a];var i=256*e+"-"+(256*e+255),r=glyphUrl(t,i,this.url);ajax.getArrayBuffer(r,function(t,a){for(var i=!t&&new Glyphs(new Protobuf(a.data)),r=0;r<l[e].length;r++)l[e][r](t,e,i);delete l[e]})}},GlyphSource.prototype.getGlyphAtlas=function(t){return this.atlases[t]},module.exports=GlyphSource;
},{"../symbol/glyph_atlas":166,"../util/ajax":193,"../util/glyphs":205,"../util/mapbox":210,"../util/verticalize_punctuation":216,"pbf":25}],168:[function(_dereq_,module,exports){
"use strict";module.exports=function(e){function t(t){g.push(e[t]),l++}function r(e,t,r){var n=u[e];return delete u[e],u[t]=n,g[n].geometry[0].pop(),g[n].geometry[0]=g[n].geometry[0].concat(r[0]),n}function n(e,t,r){var n=i[t];return delete i[t],i[e]=n,g[n].geometry[0].shift(),g[n].geometry[0]=r[0].concat(g[n].geometry[0]),n}function o(e,t,r){var n=r?t[0][t[0].length-1]:t[0][0];return e+":"+n.x+":"+n.y}for(var i={},u={},g=[],l=0,m=0;m<e.length;m++){var y=e[m],c=y.geometry,f=y.text;if(f){var a=o(f,c),s=o(f,c,!0);if(a in u&&s in i&&u[a]!==i[s]){var v=n(a,s,c),d=r(a,s,g[v].geometry);delete i[a],delete u[s],u[o(f,g[d].geometry,!0)]=d,g[v].geometry=null}else a in u?r(a,s,c):s in i?n(a,s,c):(t(m),i[a]=l-1,u[s]=l-1)}else t(m)}return g.filter(function(e){return e.geometry})};
},{}],169:[function(_dereq_,module,exports){
"use strict";function SymbolQuad(t,e,n,a,i,o,l,r,h,c,g){this.anchorPoint=t,this.tl=e,this.tr=n,this.bl=a,this.br=i,this.tex=o,this.anchorAngle=l,this.glyphAngle=r,this.minScale=h,this.maxScale=c,this.writingMode=g}function getIconQuads(t,e,n,a,i,o,l,r,h){var c,g,u,m,s=e.image.rect,d=i.layout,x=1,S=e.left-x,f=S+s.w/e.image.pixelRatio,M=e.top-x,y=M+s.h/e.image.pixelRatio;if("none"!==d["icon-text-fit"]&&l){var P=f-S,p=y-M,w=d["text-size"]/24,v=l.left*w,b=l.right*w,I=l.top*w,_=l.bottom*w,Q=b-v,G=_-I,V=d["icon-text-fit-padding"][0],L=d["icon-text-fit-padding"][1],A=d["icon-text-fit-padding"][2],D=d["icon-text-fit-padding"][3],E="width"===d["icon-text-fit"]?.5*(G-p):0,F="height"===d["icon-text-fit"]?.5*(Q-P):0,q="width"===d["icon-text-fit"]||"both"===d["icon-text-fit"]?Q:P,N="height"===d["icon-text-fit"]||"both"===d["icon-text-fit"]?G:p;c=new Point(v+F-D,I+E-V),g=new Point(v+F+L+q,I+E-V),u=new Point(v+F+L+q,I+E+A+N),m=new Point(v+F-D,I+E+A+N)}else c=new Point(S,M),g=new Point(f,M),u=new Point(f,y),m=new Point(S,y);var R=i.getLayoutValue("icon-rotate",r,h)*Math.PI/180;if(o){var k=a[t.segment];if(t.y===k.y&&t.x===k.x&&t.segment+1<a.length){var z=a[t.segment+1];R+=Math.atan2(t.y-z.y,t.x-z.x)+Math.PI}else R+=Math.atan2(t.y-k.y,t.x-k.x)}if(R){var j=Math.sin(R),B=Math.cos(R),C=[B,-j,j,B];c=c.matMult(C),g=g.matMult(C),m=m.matMult(C),u=u.matMult(C)}return[new SymbolQuad(new Point(t.x,t.y),c,g,m,u,e.image.rect,0,0,minScale,1/0)]}function getGlyphQuads(t,e,n,a,i,o,l,r){for(var h=i.getLayoutValue("text-rotate",l,r)*Math.PI/180,c=i.layout["text-keep-upright"],g=e.positionedGlyphs,u=[],m=0;m<g.length;m++){var s=g[m],d=s.glyph;if(d){var x=d.rect;if(x){var S=(s.x+d.advance/2)*n,f=void 0,M=minScale;o?(f=[],M=getLineGlyphs(f,t,S,a,t.segment,!1),c&&(M=Math.min(M,getLineGlyphs(f,t,S,a,t.segment,!0)))):f=[{anchorPoint:new Point(t.x,t.y),upsideDown:!1,angle:0,maxScale:1/0,minScale:minScale}];var y=s.x+d.left,P=s.y-d.top,p=y+x.w,w=P+x.h,v=new Point(s.x,d.advance/2),b=new Point(y,P),I=new Point(p,P),_=new Point(y,w),Q=new Point(p,w);0!==s.angle&&(b._sub(v)._rotate(s.angle)._add(v),I._sub(v)._rotate(s.angle)._add(v),_._sub(v)._rotate(s.angle)._add(v),Q._sub(v)._rotate(s.angle)._add(v));for(var G=0;G<f.length;G++){var V=f[G],L=b,A=I,D=_,E=Q;if(h){var F=Math.sin(h),q=Math.cos(h),N=[q,-F,F,q];L=L.matMult(N),A=A.matMult(N),D=D.matMult(N),E=E.matMult(N)}var R=Math.max(V.minScale,M),k=(t.angle+(V.upsideDown?Math.PI:0)+2*Math.PI)%(2*Math.PI),z=(V.angle+(V.upsideDown?Math.PI:0)+2*Math.PI)%(2*Math.PI);u.push(new SymbolQuad(V.anchorPoint,L,A,D,E,x,k,z,R,V.maxScale,e.writingMode))}}}}return u}function getLineGlyphs(t,e,n,a,i,o){for(var l=n>=0^o,r=Math.abs(n),h=new Point(e.x,e.y),c=getSegmentEnd(l,a,i),g={anchor:h,end:c,index:i,minScale:getMinScaleForSegment(r,h,c),maxScale:1/0};;){if(insertSegmentGlyph(t,g,l,o),g.minScale<=e.scale)return e.scale;var u=getNextVirtualSegment(g,a,r,l);if(!u)return g.minScale;g=u}}function insertSegmentGlyph(t,e,n,a){var i=Math.atan2(e.end.y-e.anchor.y,e.end.x-e.anchor.x),o=n?i:i+Math.PI;t.push({anchorPoint:e.anchor,upsideDown:a,minScale:e.minScale,maxScale:e.maxScale,angle:(o+2*Math.PI)%(2*Math.PI)})}function getVirtualSegmentAnchor(t,e,n){var a=e.sub(t)._unit();return t.sub(a._mult(n))}function getMinScaleForSegment(t,e,n){var a=e.dist(n);return t/a}function getSegmentEnd(t,e,n){return t?e[n+1]:e[n]}function getNextVirtualSegment(t,e,n,a){for(var i=t.end,o=i,l=t.index;o.equals(i);){if(a&&l+2<e.length)l+=1;else{if(a||0===l)return null;l-=1}o=getSegmentEnd(a,e,l)}var r=getVirtualSegmentAnchor(i,o,t.anchor.dist(t.end));return{anchor:r,end:o,index:l,minScale:getMinScaleForSegment(n,r,o),maxScale:t.minScale}}var Point=_dereq_("point-geometry");module.exports={getIconQuads:getIconQuads,getGlyphQuads:getGlyphQuads,SymbolQuad:SymbolQuad};var minScale=.5;
},{"point-geometry":26}],170:[function(_dereq_,module,exports){
"use strict";function PositionedGlyph(e,t,i,n,r){this.codePoint=e,this.x=t,this.y=i,this.glyph=n||null,this.angle=r}function Shaping(e,t,i,n,r,a,o){this.positionedGlyphs=e,this.text=t,this.top=i,this.bottom=n,this.left=r,this.right=a,this.writingMode=o}function breakLines(e,t){for(var i=[],n=0,r=0,a=t;r<a.length;r+=1){var o=a[r];i.push(e.substring(n,o)),n=o}return n<e.length&&i.push(e.substring(n,e.length)),i}function shapeText(e,t,i,n,r,a,o,s,h,l,c){var u=e.trim();c===WritingMode.vertical&&(u=verticalizePunctuation(u));var d,g=[],p=new Shaping(g,u,h[1],h[1],h[0],h[0],c);return d=rtlTextPlugin.processBidirectionalText?rtlTextPlugin.processBidirectionalText(u,determineLineBreaks(u,s,i,t)):breakLines(u,determineLineBreaks(u,s,i,t)),shapeLines(p,t,d,n,r,a,o,h,c,s,l),!!g.length&&p}function determineAverageLineWidth(e,t,i,n){var r=0;for(var a in e){var o=n[e.charCodeAt(a)];o&&(r+=o.advance+t)}var s=Math.max(1,Math.ceil(r/i));return r/s}function calculateBadness(e,t,i,n){var r=Math.pow(e-t,2);return n?e<t?r/2:2*r:r+Math.abs(i)*i}function calculatePenalty(e,t){var i=0;return 10===e&&(i-=1e4),40!==e&&65288!==e||(i+=50),41!==t&&65289!==t||(i+=50),i}function evaluateBreak(e,t,i,n,r,a){for(var o=null,s=calculateBadness(t,i,r,a),h=0,l=n;h<l.length;h+=1){var c=l[h],u=t-c.x,d=calculateBadness(u,i,r,a)+c.badness;d<=s&&(o=c,s=d)}return{index:e,x:t,priorBreak:o,badness:s}}function leastBadBreaks(e){return e?leastBadBreaks(e.priorBreak).concat(e.index):[]}function determineLineBreaks(e,t,i,n){if(!i)return[];if(!e)return[];for(var r=[],a=determineAverageLineWidth(e,t,i,n),o=0,s=0;s<e.length;s++){var h=e.charCodeAt(s),l=n[h];l&&!whitespace[h]&&(o+=l.advance+t),s<e.length-1&&(breakable[h]||scriptDetection.charAllowsIdeographicBreaking(h))&&r.push(evaluateBreak(s+1,o,a,r,calculatePenalty(h,e.charCodeAt(s+1)),!1))}return leastBadBreaks(evaluateBreak(e.length,o,a,r,0,!0))}function shapeLines(e,t,i,n,r,a,o,s,h,l,c){var u=-17,d=0,g=u,p=0,v=e.positionedGlyphs;for(var f in i){var x=i[f].trim();if(x.length){for(var B=v.length,k=0;k<x.length;k++){var P=x.charCodeAt(k),b=t[P];b&&(scriptDetection.charHasUprightVerticalOrientation(P)&&h!==WritingMode.horizontal?(v.push(new PositionedGlyph(P,d,0,b,-Math.PI/2)),d+=c+l):(v.push(new PositionedGlyph(P,d,g,b,0)),d+=b.advance+l))}if(v.length!==B){var m=d-l;p=Math.max(m,p),justifyLine(v,t,B,v.length-1,o)}d=0,g+=n}else g+=n}align(v,o,r,a,p,n,i.length,s);var y=i.length*n;e.top+=-a*y,e.bottom=e.top+y,e.left+=-r*p,e.right=e.left+p}function justifyLine(e,t,i,n,r){if(r)for(var a=t[e[n].codePoint].advance,o=(e[n].x+a)*r,s=i;s<=n;s++)e[s].x-=o}function align(e,t,i,n,r,a,o,s){for(var h=(t-i)*r+s[0],l=(-n*o+.5)*a+s[1],c=0;c<e.length;c++)e[c].x+=h,e[c].y+=l}function shapeIcon(e,t){if(!e||!e.rect)return null;var i=t[0],n=t[1],r=i-e.width/2,a=r+e.width,o=n-e.height/2,s=o+e.height;return new PositionedIcon(e,o,s,r,a)}function PositionedIcon(e,t,i,n,r){this.image=e,this.top=t,this.bottom=i,this.left=n,this.right=r}var scriptDetection=_dereq_("../util/script_detection"),verticalizePunctuation=_dereq_("../util/verticalize_punctuation"),rtlTextPlugin=_dereq_("../source/rtl_text_plugin"),WritingMode={horizontal:1,vertical:2};module.exports={shapeText:shapeText,shapeIcon:shapeIcon,WritingMode:WritingMode};var whitespace={9:!0,10:!0,11:!0,12:!0,13:!0,32:!0},breakable={10:!0,32:!0,38:!0,40:!0,41:!0,43:!0,45:!0,47:!0,173:!0,183:!0,8203:!0,8208:!0,8211:!0,8231:!0};
},{"../source/rtl_text_plugin":91,"../util/script_detection":211,"../util/verticalize_punctuation":216}],171:[function(_dereq_,module,exports){
"use strict";function copyBitmap(t,i,e,r,a,h,s,o,n,l,p){var f,u,d=r*i+e,g=o*h+s;if(p)for(g-=h,u=-1;u<=l;u++,g+=h)for(d=((u+l)%l+r)*i+e,f=-1;f<=n;f++)a[g+f]=t[d+(f+n)%n];else for(u=0;u<l;u++,d+=i,g+=h)for(f=0;f<n;f++)a[g+f]=t[d+f]}var ShelfPack=_dereq_("@mapbox/shelf-pack"),browser=_dereq_("../util/browser"),util=_dereq_("../util/util"),window=_dereq_("../util/window"),Evented=_dereq_("../util/evented"),SpriteAtlas=function(t){function i(i,e){t.call(this),this.width=i,this.height=e,this.shelfPack=new ShelfPack(i,e),this.images={},this.data=!1,this.texture=0,this.filter=0,this.pixelRatio=1,this.dirty=!0}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.allocateImage=function(t,i){t/=this.pixelRatio,i/=this.pixelRatio;var e=2,r=t+e+(4-(t+e)%4),a=i+e+(4-(i+e)%4),h=this.shelfPack.packOne(r,a);return h?h:(util.warnOnce("SpriteAtlas out of space."),null)},i.prototype.addImage=function(t,i,e){var r,a,h;if(i instanceof window.HTMLImageElement?(r=i.width,a=i.height,i=browser.getImageData(i),h=this.pixelRatio):(r=e.width,a=e.height,h=e.pixelRatio||this.pixelRatio),ArrayBuffer.isView(i)&&(i=new Uint32Array(i.buffer)),!(i instanceof Uint32Array))return this.fire("error",{error:new Error("Image provided in an invalid format. Supported formats are HTMLImageElement, ImageData, and ArrayBufferView.")});if(this.images[t])return this.fire("error",{error:new Error("An image with this name already exists.")});var s=this.allocateImage(r,a);if(!s)return this.fire("error",{error:new Error("There is not enough space to add this image.")});var o={rect:s,width:r/h,height:a/h,sdf:!1,pixelRatio:1};this.images[t]=o,this.copy(i,r,s,{pixelRatio:h,x:0,y:0,width:r,height:a},!1),this.fire("data",{dataType:"style"})},i.prototype.removeImage=function(t){var i=this.images[t];return delete this.images[t],i?(this.shelfPack.unref(i.rect),void this.fire("data",{dataType:"style"})):this.fire("error",{error:new Error("No image with this name exists.")})},i.prototype.getImage=function(t,i){if(this.images[t])return this.images[t];if(!this.sprite)return null;var e=this.sprite.getSpritePosition(t);if(!e.width||!e.height)return null;var r=this.allocateImage(e.width,e.height);if(!r)return null;var a={rect:r,width:e.width/e.pixelRatio,height:e.height/e.pixelRatio,sdf:e.sdf,pixelRatio:e.pixelRatio/this.pixelRatio};if(this.images[t]=a,!this.sprite.imgData)return null;var h=new Uint32Array(this.sprite.imgData.buffer);return this.copy(h,this.sprite.width,r,e,i),a},i.prototype.getPosition=function(t,i){var e=this.getImage(t,i),r=e&&e.rect;if(!r)return null;var a=e.width*e.pixelRatio,h=e.height*e.pixelRatio,s=1;return{size:[e.width,e.height],tl:[(r.x+s)/this.width,(r.y+s)/this.height],br:[(r.x+s+a)/this.width,(r.y+s+h)/this.height]}},i.prototype.allocate=function(){var t=this;if(!this.data){var i=Math.floor(this.width*this.pixelRatio),e=Math.floor(this.height*this.pixelRatio);this.data=new Uint32Array(i*e);for(var r=0;r<this.data.length;r++)t.data[r]=0}},i.prototype.copy=function(t,i,e,r,a){this.allocate();var h=this.data,s=1;copyBitmap(t,i,r.x,r.y,h,this.width*this.pixelRatio,(e.x+s)*this.pixelRatio,(e.y+s)*this.pixelRatio,r.width,r.height,a),this.dirty=!0},i.prototype.setSprite=function(t){t&&(this.pixelRatio=browser.devicePixelRatio>1?2:1,this.canvas&&(this.canvas.width=this.width*this.pixelRatio,this.canvas.height=this.height*this.pixelRatio)),this.sprite=t},i.prototype.addIcons=function(t,i){for(var e=this,r=0;r<t.length;r++)e.getImage(t[r]);i(null,this.images)},i.prototype.bind=function(t,i){var e=!1;this.texture?t.bindTexture(t.TEXTURE_2D,this.texture):(this.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.texture),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),e=!0);var r=i?t.LINEAR:t.NEAREST;r!==this.filter&&(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,r),this.filter=r),this.dirty&&(this.allocate(),e?t.texImage2D(t.TEXTURE_2D,0,t.RGBA,this.width*this.pixelRatio,this.height*this.pixelRatio,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array(this.data.buffer)):t.texSubImage2D(t.TEXTURE_2D,0,0,0,this.width*this.pixelRatio,this.height*this.pixelRatio,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array(this.data.buffer)),this.dirty=!1)},i}(Evented);module.exports=SpriteAtlas;
},{"../util/browser":194,"../util/evented":202,"../util/util":214,"../util/window":196,"@mapbox/shelf-pack":2}],172:[function(_dereq_,module,exports){
"use strict";var rtlTextPlugin=_dereq_("../source/rtl_text_plugin");module.exports=function(e,r,t,a){var l=r.getLayoutValue("text-transform",t,a);return"uppercase"===l?e=e.toLocaleUpperCase():"lowercase"===l&&(e=e.toLocaleLowerCase()),rtlTextPlugin.applyArabicShaping&&(e=rtlTextPlugin.applyArabicShaping(e)),e};
},{"../source/rtl_text_plugin":91}],173:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../util/dom"),Point=_dereq_("point-geometry"),handlers={scrollZoom:_dereq_("./handler/scroll_zoom"),boxZoom:_dereq_("./handler/box_zoom"),dragRotate:_dereq_("./handler/drag_rotate"),dragPan:_dereq_("./handler/drag_pan"),keyboard:_dereq_("./handler/keyboard"),doubleClickZoom:_dereq_("./handler/dblclick_zoom"),touchZoomRotate:_dereq_("./handler/touch_zoom_rotate")};module.exports=function(e,t){function n(e){h("mouseout",e)}function o(t){e.stop(),L=DOM.mousePos(g,t),h("mousedown",t),E=!0}function r(t){var n=e.dragRotate&&e.dragRotate.isActive();p&&!n&&h("contextmenu",p),p=null,E=!1,h("mouseup",t)}function a(t){if(!(e.dragPan&&e.dragPan.isActive()||e.dragRotate&&e.dragRotate.isActive())){for(var n=t.toElement||t.target;n&&n!==g;)n=n.parentNode;n===g&&h("mousemove",t)}}function u(t){e.stop(),f("touchstart",t),!t.touches||t.touches.length>1||(b?(clearTimeout(b),b=null,h("dblclick",t)):b=setTimeout(l,300))}function i(e){f("touchmove",e)}function c(e){f("touchend",e)}function d(e){f("touchcancel",e)}function l(){b=null}function s(e){var t=DOM.mousePos(g,e);t.equals(L)&&h("click",e)}function v(e){h("dblclick",e),e.preventDefault()}function m(t){var n=e.dragRotate&&e.dragRotate.isActive();E||n?E&&(p=t):h("contextmenu",t),t.preventDefault()}function h(t,n){var o=DOM.mousePos(g,n);return e.fire(t,{lngLat:e.unproject(o),point:o,originalEvent:n})}function f(t,n){var o=DOM.touchPos(g,n),r=o.reduce(function(e,t,n,o){return e.add(t.div(o.length))},new Point(0,0));return e.fire(t,{lngLat:e.unproject(r),point:r,lngLats:o.map(function(t){return e.unproject(t)},this),points:o,originalEvent:n})}var g=e.getCanvasContainer(),p=null,E=!1,L=null,b=null;for(var q in handlers)e[q]=new handlers[q](e,t),t.interactive&&t[q]&&e[q].enable(t[q]);g.addEventListener("mouseout",n,!1),g.addEventListener("mousedown",o,!1),g.addEventListener("mouseup",r,!1),g.addEventListener("mousemove",a,!1),g.addEventListener("touchstart",u,!1),g.addEventListener("touchend",c,!1),g.addEventListener("touchmove",i,!1),g.addEventListener("touchcancel",d,!1),g.addEventListener("click",s,!1),g.addEventListener("dblclick",v,!1),g.addEventListener("contextmenu",m,!1)};
},{"../util/dom":201,"./handler/box_zoom":181,"./handler/dblclick_zoom":182,"./handler/drag_pan":183,"./handler/drag_rotate":184,"./handler/keyboard":185,"./handler/scroll_zoom":186,"./handler/touch_zoom_rotate":187,"point-geometry":26}],174:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util"),interpolate=_dereq_("../util/interpolate"),browser=_dereq_("../util/browser"),LngLat=_dereq_("../geo/lng_lat"),LngLatBounds=_dereq_("../geo/lng_lat_bounds"),Point=_dereq_("point-geometry"),Evented=_dereq_("../util/evented"),Camera=function(t){function i(i,e){t.call(this),this.moving=!1,this.transform=i,this._bearingSnap=e.bearingSnap}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.getCenter=function(){return this.transform.center},i.prototype.setCenter=function(t,i){return this.jumpTo({center:t},i),this},i.prototype.panBy=function(t,i,e){return this.panTo(this.transform.center,util.extend({offset:Point.convert(t).mult(-1)},i),e),this},i.prototype.panTo=function(t,i,e){return this.easeTo(util.extend({center:t},i),e)},i.prototype.getZoom=function(){return this.transform.zoom},i.prototype.setZoom=function(t,i){return this.jumpTo({zoom:t},i),this},i.prototype.zoomTo=function(t,i,e){return this.easeTo(util.extend({zoom:t},i),e)},i.prototype.zoomIn=function(t,i){return this.zoomTo(this.getZoom()+1,t,i),this},i.prototype.zoomOut=function(t,i){return this.zoomTo(this.getZoom()-1,t,i),this},i.prototype.getBearing=function(){return this.transform.bearing},i.prototype.setBearing=function(t,i){return this.jumpTo({bearing:t},i),this},i.prototype.rotateTo=function(t,i,e){return this.easeTo(util.extend({bearing:t},i),e)},i.prototype.resetNorth=function(t,i){return this.rotateTo(0,util.extend({duration:1e3},t),i),this},i.prototype.snapToNorth=function(t,i){return Math.abs(this.getBearing())<this._bearingSnap?this.resetNorth(t,i):this},i.prototype.getPitch=function(){return this.transform.pitch},i.prototype.setPitch=function(t,i){return this.jumpTo({pitch:t},i),this},i.prototype.fitBounds=function(t,i,e){if(i=util.extend({padding:{top:0,bottom:0,right:0,left:0},offset:[0,0],maxZoom:this.transform.maxZoom},i),"number"==typeof i.padding){var o=i.padding;i.padding={top:o,bottom:o,right:o,left:o}}if(!util.deepEqual(Object.keys(i.padding).sort(function(t,i){return t<i?-1:t>i?1:0}),["bottom","left","right","top"]))return void util.warnOnce("options.padding must be a positive number, or an Object with keys 'bottom', 'left', 'right', 'top'");t=LngLatBounds.convert(t);var n=[i.padding.left-i.padding.right,i.padding.top-i.padding.bottom],r=Math.min(i.padding.right,i.padding.left),s=Math.min(i.padding.top,i.padding.bottom);i.offset=[i.offset[0]+n[0],i.offset[1]+n[1]];var a=Point.convert(i.offset),h=this.transform,p=h.project(t.getNorthWest()),u=h.project(t.getSouthEast()),c=u.sub(p),g=(h.width-2*r-2*Math.abs(a.x))/c.x,f=(h.height-2*s-2*Math.abs(a.y))/c.y;return f<0||g<0?void util.warnOnce("Map cannot fit within canvas with the given bounds, padding, and/or offset."):(i.center=h.unproject(p.add(u).div(2)),i.zoom=Math.min(h.scaleZoom(h.scale*Math.min(g,f)),i.maxZoom),i.bearing=0,i.linear?this.easeTo(i,e):this.flyTo(i,e))},i.prototype.jumpTo=function(t,i){this.stop();var e=this.transform,o=!1,n=!1,r=!1;return"zoom"in t&&e.zoom!==+t.zoom&&(o=!0,e.zoom=+t.zoom),"center"in t&&(e.center=LngLat.convert(t.center)),"bearing"in t&&e.bearing!==+t.bearing&&(n=!0,e.bearing=+t.bearing),"pitch"in t&&e.pitch!==+t.pitch&&(r=!0,e.pitch=+t.pitch),this.fire("movestart",i).fire("move",i),o&&this.fire("zoomstart",i).fire("zoom",i).fire("zoomend",i),n&&this.fire("rotate",i),r&&this.fire("pitchstart",i).fire("pitch",i).fire("pitchend",i),this.fire("moveend",i)},i.prototype.easeTo=function(t,i){var e=this;this.stop(),t=util.extend({offset:[0,0],duration:500,easing:util.ease},t);var o,n,r=this.transform,s=Point.convert(t.offset),a=this.getZoom(),h=this.getBearing(),p=this.getPitch(),u="zoom"in t?+t.zoom:a,c="bearing"in t?this._normalizeBearing(t.bearing,h):h,g="pitch"in t?+t.pitch:p;"center"in t?(o=LngLat.convert(t.center),n=r.centerPoint.add(s)):"around"in t?(o=LngLat.convert(t.around),n=r.locationPoint(o)):(n=r.centerPoint.add(s),o=r.pointLocation(n));var f=r.locationPoint(o);return t.animate===!1&&(t.duration=0),this.zooming=u!==a,this.rotating=h!==c,this.pitching=g!==p,t.smoothEasing&&0!==t.duration&&(t.easing=this._smoothOutEasing(t.duration)),t.noMoveStart||(this.moving=!0,this.fire("movestart",i)),this.zooming&&this.fire("zoomstart",i),this.pitching&&this.fire("pitchstart",i),clearTimeout(this._onEaseEnd),this._ease(function(t){this.zooming&&(r.zoom=interpolate(a,u,t)),this.rotating&&(r.bearing=interpolate(h,c,t)),this.pitching&&(r.pitch=interpolate(p,g,t)),r.setLocationAtPoint(o,f.add(n.sub(f)._mult(t))),this.fire("move",i),this.zooming&&this.fire("zoom",i),this.rotating&&this.fire("rotate",i),this.pitching&&this.fire("pitch",i)},function(){t.delayEndEvents?e._onEaseEnd=setTimeout(e._easeToEnd.bind(e,i),t.delayEndEvents):e._easeToEnd(i)},t),this},i.prototype._easeToEnd=function(t){var i=this.zooming,e=this.pitching;this.moving=!1,this.zooming=!1,this.rotating=!1,this.pitching=!1,i&&this.fire("zoomend",t),e&&this.fire("pitchend",t),this.fire("moveend",t)},i.prototype.flyTo=function(t,i){function e(t){var i=(y*y-z*z+(t?-1:1)*E*E*_*_)/(2*(t?y:z)*E*_);return Math.log(Math.sqrt(i*i+1)-i)}function o(t){return(Math.exp(t)-Math.exp(-t))/2}function n(t){return(Math.exp(t)+Math.exp(-t))/2}function r(t){return o(t)/n(t)}this.stop(),t=util.extend({offset:[0,0],speed:1.2,curve:1.42,easing:util.ease},t);var s=this.transform,a=Point.convert(t.offset),h=this.getZoom(),p=this.getBearing(),u=this.getPitch(),c="center"in t?LngLat.convert(t.center):this.getCenter(),g="zoom"in t?+t.zoom:h,f="bearing"in t?this._normalizeBearing(t.bearing,p):p,m="pitch"in t?+t.pitch:u;s.renderWorldCopies&&Math.abs(s.center.lng)+Math.abs(c.lng)>180&&(s.center.lng>0&&c.lng<0?c.lng+=360:s.center.lng<0&&c.lng>0&&(c.lng-=360));var d=s.zoomScale(g-h),l=s.point,v="center"in t?s.project(c).sub(a.div(d)):l,b=t.curve,z=Math.max(s.width,s.height),y=z/d,_=v.sub(l).mag();if("minZoom"in t){var M=util.clamp(Math.min(t.minZoom,h,g),s.minZoom,s.maxZoom),T=z/s.zoomScale(M-h);b=Math.sqrt(T/_*2)}var E=b*b,x=e(0),L=function(t){return n(x)/n(x+b*t)},Z=function(t){return z*((n(x)*r(x+b*t)-o(x))/E)/_},w=(e(1)-x)/b;if(Math.abs(_)<1e-6){if(Math.abs(z-y)<1e-6)return this.easeTo(t,i);var P=y<z?-1:1;w=Math.abs(Math.log(y/z))/b,Z=function(){return 0},L=function(t){return Math.exp(P*b*t)}}if("duration"in t)t.duration=+t.duration;else{var j="screenSpeed"in t?+t.screenSpeed/b:+t.speed;t.duration=1e3*w/j}return this.moving=!0,this.zooming=!0,p!==f&&(this.rotating=!0),u!==m&&(this.pitching=!0),this.fire("movestart",i),this.fire("zoomstart",i),this.pitching&&this.fire("pitchstart",i),this._ease(function(t){var e=t*w,o=Z(e),n=1/L(e);s.zoom=h+s.scaleZoom(n),s.center=s.unproject(l.add(v.sub(l).mult(o)).mult(n)),s.renderWorldCopies&&(s.center=s.center.wrap()),this.rotating&&(s.bearing=interpolate(p,f,t)),this.pitching&&(s.pitch=interpolate(u,m,t)),this.fire("move",i),this.fire("zoom",i),this.rotating&&this.fire("rotate",i),this.pitching&&this.fire("pitch",i)},function(){var t=this.pitching;this.moving=!1,this.zooming=!1,this.rotating=!1,this.pitching=!1,t&&this.fire("pitchend",i),this.fire("zoomend",i),this.fire("moveend",i)},t),this},i.prototype.isEasing=function(){return!!this._abortFn},i.prototype.isMoving=function(){return this.moving},i.prototype.stop=function(){return this._abortFn&&(this._abortFn(),this._finishEase()),this},i.prototype._ease=function(t,i,e){this._finishFn=i,this._abortFn=browser.timed(function(i){t.call(this,e.easing(i)),1===i&&this._finishEase()},e.animate===!1?0:e.duration,this)},i.prototype._finishEase=function(){delete this._abortFn;var t=this._finishFn;delete this._finishFn,t.call(this)},i.prototype._normalizeBearing=function(t,i){t=util.wrap(t,-180,180);var e=Math.abs(t-i);return Math.abs(t-360-i)<e&&(t-=360),Math.abs(t+360-i)<e&&(t+=360),t},i.prototype._smoothOutEasing=function(t){var i=util.ease;if(this._prevEase){var e=this._prevEase,o=(Date.now()-e.start)/e.duration,n=e.easing(o+.01)-e.easing(o),r=.27/Math.sqrt(n*n+1e-4)*.01,s=Math.sqrt(.0729-r*r);i=util.bezier(r,s,.25,1)}return this._prevEase={start:(new Date).getTime(),duration:t,easing:i},i},i}(Evented);module.exports=Camera;
},{"../geo/lng_lat":62,"../geo/lng_lat_bounds":63,"../util/browser":194,"../util/evented":202,"../util/interpolate":206,"../util/util":214,"point-geometry":26}],175:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../../util/dom"),util=_dereq_("../../util/util"),AttributionControl=function(t){this.options=t,util.bindAll(["_updateEditLink","_updateData","_updateCompact"],this)};AttributionControl.prototype.getDefaultPosition=function(){return"bottom-right"},AttributionControl.prototype.onAdd=function(t){var i=this.options&&this.options.compact;return this._map=t,this._container=DOM.create("div","mapboxgl-ctrl mapboxgl-ctrl-attrib"),i&&this._container.classList.add("compact"),this._updateAttributions(),this._updateEditLink(),this._map.on("sourcedata",this._updateData),this._map.on("moveend",this._updateEditLink),void 0===i&&(this._map.on("resize",this._updateCompact),this._updateCompact()),this._container},AttributionControl.prototype.onRemove=function(){this._container.parentNode.removeChild(this._container),this._map.off("sourcedata",this._updateData),this._map.off("moveend",this._updateEditLink),this._map.off("resize",this._updateCompact),this._map=void 0},AttributionControl.prototype._updateEditLink=function(){if(this._editLink||(this._editLink=this._container.querySelector(".mapbox-improve-map")),this._editLink){var t=this._map.getCenter();this._editLink.href="https://www.mapbox.com/map-feedback/#/"+t.lng+"/"+t.lat+"/"+Math.round(this._map.getZoom()+1)}},AttributionControl.prototype._updateData=function(t){t&&"metadata"===t.sourceDataType&&(this._updateAttributions(),this._updateEditLink())},AttributionControl.prototype._updateAttributions=function(){if(this._map.style){var t=[],i=this._map.style.sourceCaches;for(var o in i){var n=i[o].getSource();n.attribution&&t.indexOf(n.attribution)<0&&t.push(n.attribution)}t.sort(function(t,i){return t.length-i.length}),t=t.filter(function(i,o){for(var n=o+1;n<t.length;n++)if(t[n].indexOf(i)>=0)return!1;return!0}),this._container.innerHTML=t.join(" | "),this._editLink=null}},AttributionControl.prototype._updateCompact=function(){var t=this._map.getCanvasContainer().offsetWidth<=640;this._container.classList[t?"add":"remove"]("compact")},module.exports=AttributionControl;
},{"../../util/dom":201,"../../util/util":214}],176:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../../util/dom"),util=_dereq_("../../util/util"),window=_dereq_("../../util/window"),FullscreenControl=function(){this._fullscreen=!1,util.bindAll(["_onClickFullscreen","_changeIcon"],this),"onfullscreenchange"in window.document?this._fullscreenchange="fullscreenchange":"onmozfullscreenchange"in window.document?this._fullscreenchange="mozfullscreenchange":"onwebkitfullscreenchange"in window.document?this._fullscreenchange="webkitfullscreenchange":"onmsfullscreenchange"in window.document&&(this._fullscreenchange="MSFullscreenChange")};FullscreenControl.prototype.onAdd=function(e){var n="mapboxgl-ctrl",t=this._container=DOM.create("div",n+" mapboxgl-ctrl-group"),l=this._fullscreenButton=DOM.create("button",n+"-icon "+n+"-fullscreen",this._container);return l.setAttribute("aria-label","Toggle fullscreen"),l.type="button",this._fullscreenButton.addEventListener("click",this._onClickFullscreen),this._mapContainer=e.getContainer(),window.document.addEventListener(this._fullscreenchange,this._changeIcon),t},FullscreenControl.prototype.onRemove=function(){this._container.parentNode.removeChild(this._container),this._map=null,window.document.removeEventListener(this._fullscreenchange,this._changeIcon)},FullscreenControl.prototype._isFullscreen=function(){return this._fullscreen},FullscreenControl.prototype._changeIcon=function(e){if(e.target===this._mapContainer){this._fullscreen=!this._fullscreen;var n="mapboxgl-ctrl";this._fullscreenButton.classList.toggle(n+"-shrink"),this._fullscreenButton.classList.toggle(n+"-fullscreen")}},FullscreenControl.prototype._onClickFullscreen=function(){this._isFullscreen()?window.document.exitFullscreen?window.document.exitFullscreen():window.document.mozCancelFullScreen?window.document.mozCancelFullScreen():window.document.msExitFullscreen?window.document.msExitFullscreen():window.document.webkitCancelFullScreen&&window.document.webkitCancelFullScreen():this._mapContainer.requestFullscreen?this._mapContainer.requestFullscreen():this._mapContainer.mozRequestFullScreen?this._mapContainer.mozRequestFullScreen():this._mapContainer.msRequestFullscreen?this._mapContainer.msRequestFullscreen():this._mapContainer.webkitRequestFullscreen&&this._mapContainer.webkitRequestFullscreen()},module.exports=FullscreenControl;
},{"../../util/dom":201,"../../util/util":214,"../../util/window":196}],177:[function(_dereq_,module,exports){
"use strict";function checkGeolocationSupport(t){void 0!==supportsGeolocation?t(supportsGeolocation):void 0!==window.navigator.permissions?window.navigator.permissions.query({name:"geolocation"}).then(function(o){supportsGeolocation="denied"!==o.state,t(supportsGeolocation)}):(supportsGeolocation=!!window.navigator.geolocation,t(supportsGeolocation))}var Evented=_dereq_("../../util/evented"),DOM=_dereq_("../../util/dom"),window=_dereq_("../../util/window"),util=_dereq_("../../util/util"),defaultGeoPositionOptions={enableHighAccuracy:!1,timeout:6e3},className="mapboxgl-ctrl",supportsGeolocation,GeolocateControl=function(t){function o(o){t.call(this),this.options=o||{},util.bindAll(["_onSuccess","_onError","_finish","_setupUI"],this)}return t&&(o.__proto__=t),o.prototype=Object.create(t&&t.prototype),o.prototype.constructor=o,o.prototype.onAdd=function(t){return this._map=t,this._container=DOM.create("div",className+" "+className+"-group"),checkGeolocationSupport(this._setupUI),this._container},o.prototype.onRemove=function(){this._container.parentNode.removeChild(this._container),this._map=void 0},o.prototype._onSuccess=function(t){this._map.jumpTo({center:[t.coords.longitude,t.coords.latitude],zoom:17,bearing:0,pitch:0}),this.fire("geolocate",t),this._finish()},o.prototype._onError=function(t){this.fire("error",t),this._finish()},o.prototype._finish=function(){this._timeoutId&&clearTimeout(this._timeoutId),this._timeoutId=void 0},o.prototype._setupUI=function(t){t!==!1&&(this._container.addEventListener("contextmenu",function(t){return t.preventDefault()}),this._geolocateButton=DOM.create("button",className+"-icon "+className+"-geolocate",this._container),this._geolocateButton.type="button",this._geolocateButton.setAttribute("aria-label","Geolocate"),this.options.watchPosition&&this._geolocateButton.setAttribute("aria-pressed",!1),this._geolocateButton.addEventListener("click",this._onClickGeolocate.bind(this)))},o.prototype._onClickGeolocate=function(){var t=util.extend(defaultGeoPositionOptions,this.options&&this.options.positionOptions||{});this.options.watchPosition?void 0!==this._geolocationWatchID?(this._geolocateButton.classList.remove("watching"),this._geolocateButton.setAttribute("aria-pressed",!1),window.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0):(this._geolocateButton.classList.add("watching"),this._geolocateButton.setAttribute("aria-pressed",!0),this._geolocationWatchID=window.navigator.geolocation.watchPosition(this._onSuccess,this._onError,t)):(window.navigator.geolocation.getCurrentPosition(this._onSuccess,this._onError,t),this._timeoutId=setTimeout(this._finish,1e4))},o}(Evented);module.exports=GeolocateControl;
},{"../../util/dom":201,"../../util/evented":202,"../../util/util":214,"../../util/window":196}],178:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../../util/dom"),util=_dereq_("../../util/util"),LogoControl=function(){util.bindAll(["_updateLogo"],this)};LogoControl.prototype.onAdd=function(o){return this._map=o,this._container=DOM.create("div","mapboxgl-ctrl"),this._map.on("sourcedata",this._updateLogo),this._updateLogo(),this._container},LogoControl.prototype.onRemove=function(){this._container.parentNode.removeChild(this._container),this._map.off("sourcedata",this._updateLogo)},LogoControl.prototype.getDefaultPosition=function(){return"bottom-left"},LogoControl.prototype._updateLogo=function(o){if(o&&"metadata"===o.sourceDataType)if(!this._container.childNodes.length&&this._logoRequired()){var t=DOM.create("a","mapboxgl-ctrl-logo");t.target="_blank",t.href="https://www.mapbox.com/",t.setAttribute("aria-label","Mapbox logo"),this._container.appendChild(t),this._map.off("data",this._updateLogo)}else this._container.childNodes.length&&!this._logoRequired()&&this.onRemove()},LogoControl.prototype._logoRequired=function(){if(this._map.style){var o=this._map.style.sourceCaches;for(var t in o){var e=o[t].getSource();if(e.mapbox_logo)return!0}return!1}},module.exports=LogoControl;
},{"../../util/dom":201,"../../util/util":214}],179:[function(_dereq_,module,exports){
"use strict";function copyMouseEvent(t){return new window.MouseEvent(t.type,{button:2,buttons:2,bubbles:!0,cancelable:!0,detail:t.detail,view:t.view,screenX:t.screenX,screenY:t.screenY,clientX:t.clientX,clientY:t.clientY,movementX:t.movementX,movementY:t.movementY,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey,metaKey:t.metaKey})}var DOM=_dereq_("../../util/dom"),window=_dereq_("../../util/window"),util=_dereq_("../../util/util"),className="mapboxgl-ctrl",NavigationControl=function(){util.bindAll(["_rotateCompassArrow"],this)};NavigationControl.prototype._rotateCompassArrow=function(){var t="rotate("+this._map.transform.angle*(180/Math.PI)+"deg)";this._compassArrow.style.transform=t},NavigationControl.prototype.onAdd=function(t){return this._map=t,this._container=DOM.create("div",className+" "+className+"-group",t.getContainer()),this._container.addEventListener("contextmenu",this._onContextMenu.bind(this)),this._zoomInButton=this._createButton(className+"-icon "+className+"-zoom-in","Zoom In",t.zoomIn.bind(t)),this._zoomOutButton=this._createButton(className+"-icon "+className+"-zoom-out","Zoom Out",t.zoomOut.bind(t)),this._compass=this._createButton(className+"-icon "+className+"-compass","Reset North",t.resetNorth.bind(t)),this._compassArrow=DOM.create("span",className+"-compass-arrow",this._compass),this._compass.addEventListener("mousedown",this._onCompassDown.bind(this)),this._onCompassMove=this._onCompassMove.bind(this),this._onCompassUp=this._onCompassUp.bind(this),this._map.on("rotate",this._rotateCompassArrow),this._rotateCompassArrow(),this._container},NavigationControl.prototype.onRemove=function(){this._container.parentNode.removeChild(this._container),this._map.off("rotate",this._rotateCompassArrow),this._map=void 0},NavigationControl.prototype._onContextMenu=function(t){t.preventDefault()},NavigationControl.prototype._onCompassDown=function(t){0===t.button&&(DOM.disableDrag(),window.document.addEventListener("mousemove",this._onCompassMove),window.document.addEventListener("mouseup",this._onCompassUp),this._map.getCanvasContainer().dispatchEvent(copyMouseEvent(t)),t.stopPropagation())},NavigationControl.prototype._onCompassMove=function(t){0===t.button&&(this._map.getCanvasContainer().dispatchEvent(copyMouseEvent(t)),t.stopPropagation())},NavigationControl.prototype._onCompassUp=function(t){0===t.button&&(window.document.removeEventListener("mousemove",this._onCompassMove),window.document.removeEventListener("mouseup",this._onCompassUp),DOM.enableDrag(),this._map.getCanvasContainer().dispatchEvent(copyMouseEvent(t)),t.stopPropagation())},NavigationControl.prototype._createButton=function(t,o,e){var n=DOM.create("button",t,this._container);return n.type="button",n.setAttribute("aria-label",o),n.addEventListener("click",function(){e()}),n},module.exports=NavigationControl;
},{"../../util/dom":201,"../../util/util":214,"../../util/window":196}],180:[function(_dereq_,module,exports){
"use strict";function updateScale(t,e,o){var n=o&&o.maxWidth||100,i=t._container.clientHeight/2,a=getDistance(t.unproject([0,i]),t.unproject([n,i]));if(o&&"imperial"===o.unit){var r=3.2808*a;if(r>5280){var l=r/5280;setScale(e,n,l,"mi")}else setScale(e,n,r,"ft")}else setScale(e,n,a,"m")}function setScale(t,e,o,n){var i=getRoundNum(o),a=i/o;"m"===n&&i>=1e3&&(i/=1e3,n="km"),t.style.width=e*a+"px",t.innerHTML=i+n}function getDistance(t,e){var o=6371e3,n=Math.PI/180,i=t.lat*n,a=e.lat*n,r=Math.sin(i)*Math.sin(a)+Math.cos(i)*Math.cos(a)*Math.cos((e.lng-t.lng)*n),l=o*Math.acos(Math.min(r,1));return l}function getRoundNum(t){var e=Math.pow(10,(""+Math.floor(t)).length-1),o=t/e;return o=o>=10?10:o>=5?5:o>=3?3:o>=2?2:1,e*o}var DOM=_dereq_("../../util/dom"),util=_dereq_("../../util/util"),ScaleControl=function(t){this.options=t,util.bindAll(["_onMove"],this)};ScaleControl.prototype.getDefaultPosition=function(){return"bottom-left"},ScaleControl.prototype._onMove=function(){updateScale(this._map,this._container,this.options)},ScaleControl.prototype.onAdd=function(t){return this._map=t,this._container=DOM.create("div","mapboxgl-ctrl mapboxgl-ctrl-scale",t.getContainer()),this._map.on("move",this._onMove),this._onMove(),this._container},ScaleControl.prototype.onRemove=function(){this._container.parentNode.removeChild(this._container),this._map.off("move",this._onMove),this._map=void 0},module.exports=ScaleControl;
},{"../../util/dom":201,"../../util/util":214}],181:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../../util/dom"),LngLatBounds=_dereq_("../../geo/lng_lat_bounds"),util=_dereq_("../../util/util"),window=_dereq_("../../util/window"),BoxZoomHandler=function(o){this._map=o,this._el=o.getCanvasContainer(),this._container=o.getContainer(),util.bindAll(["_onMouseDown","_onMouseMove","_onMouseUp","_onKeyDown"],this)};BoxZoomHandler.prototype.isEnabled=function(){return!!this._enabled},BoxZoomHandler.prototype.isActive=function(){return!!this._active},BoxZoomHandler.prototype.enable=function(){this.isEnabled()||(this._el.addEventListener("mousedown",this._onMouseDown,!1),this._enabled=!0)},BoxZoomHandler.prototype.disable=function(){this.isEnabled()&&(this._el.removeEventListener("mousedown",this._onMouseDown),this._enabled=!1)},BoxZoomHandler.prototype._onMouseDown=function(o){o.shiftKey&&0===o.button&&(window.document.addEventListener("mousemove",this._onMouseMove,!1),window.document.addEventListener("keydown",this._onKeyDown,!1),window.document.addEventListener("mouseup",this._onMouseUp,!1),DOM.disableDrag(),this._startPos=DOM.mousePos(this._el,o),this._active=!0)},BoxZoomHandler.prototype._onMouseMove=function(o){var e=this._startPos,t=DOM.mousePos(this._el,o);this._box||(this._box=DOM.create("div","mapboxgl-boxzoom",this._container),this._container.classList.add("mapboxgl-crosshair"),this._fireEvent("boxzoomstart",o));var n=Math.min(e.x,t.x),i=Math.max(e.x,t.x),s=Math.min(e.y,t.y),r=Math.max(e.y,t.y);DOM.setTransform(this._box,"translate("+n+"px,"+s+"px)"),this._box.style.width=i-n+"px",this._box.style.height=r-s+"px"},BoxZoomHandler.prototype._onMouseUp=function(o){if(0===o.button){var e=this._startPos,t=DOM.mousePos(this._el,o),n=(new LngLatBounds).extend(this._map.unproject(e)).extend(this._map.unproject(t));this._finish(),e.x===t.x&&e.y===t.y?this._fireEvent("boxzoomcancel",o):this._map.fitBounds(n,{linear:!0}).fire("boxzoomend",{originalEvent:o,boxZoomBounds:n})}},BoxZoomHandler.prototype._onKeyDown=function(o){27===o.keyCode&&(this._finish(),this._fireEvent("boxzoomcancel",o))},BoxZoomHandler.prototype._finish=function(){this._active=!1,window.document.removeEventListener("mousemove",this._onMouseMove,!1),window.document.removeEventListener("keydown",this._onKeyDown,!1),window.document.removeEventListener("mouseup",this._onMouseUp,!1),this._container.classList.remove("mapboxgl-crosshair"),this._box&&(this._box.parentNode.removeChild(this._box),this._box=null),DOM.enableDrag()},BoxZoomHandler.prototype._fireEvent=function(o,e){return this._map.fire(o,{originalEvent:e})},module.exports=BoxZoomHandler;
},{"../../geo/lng_lat_bounds":63,"../../util/dom":201,"../../util/util":214,"../../util/window":196}],182:[function(_dereq_,module,exports){
"use strict";var DoubleClickZoomHandler=function(o){this._map=o,this._onDblClick=this._onDblClick.bind(this)};DoubleClickZoomHandler.prototype.isEnabled=function(){return!!this._enabled},DoubleClickZoomHandler.prototype.enable=function(){this.isEnabled()||(this._map.on("dblclick",this._onDblClick),this._enabled=!0)},DoubleClickZoomHandler.prototype.disable=function(){this.isEnabled()&&(this._map.off("dblclick",this._onDblClick),this._enabled=!1)},DoubleClickZoomHandler.prototype._onDblClick=function(o){this._map.zoomTo(this._map.getZoom()+(o.originalEvent.shiftKey?-1:1),{around:o.lngLat},o)},module.exports=DoubleClickZoomHandler;
},{}],183:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../../util/dom"),util=_dereq_("../../util/util"),window=_dereq_("../../util/window"),inertiaLinearity=.3,inertiaEasing=util.bezier(0,0,inertiaLinearity,1),inertiaMaxSpeed=1400,inertiaDeceleration=2500,DragPanHandler=function(t){this._map=t,this._el=t.getCanvasContainer(),util.bindAll(["_onDown","_onMove","_onUp","_onTouchEnd","_onMouseUp"],this)};DragPanHandler.prototype.isEnabled=function(){return!!this._enabled},DragPanHandler.prototype.isActive=function(){return!!this._active},DragPanHandler.prototype.enable=function(){this.isEnabled()||(this._el.classList.add("mapboxgl-touch-drag-pan"),this._el.addEventListener("mousedown",this._onDown),this._el.addEventListener("touchstart",this._onDown),this._enabled=!0)},DragPanHandler.prototype.disable=function(){this.isEnabled()&&(this._el.classList.remove("mapboxgl-touch-drag-pan"),this._el.removeEventListener("mousedown",this._onDown),this._el.removeEventListener("touchstart",this._onDown),this._enabled=!1)},DragPanHandler.prototype._onDown=function(t){this._ignoreEvent(t)||this.isActive()||(t.touches?(window.document.addEventListener("touchmove",this._onMove),window.document.addEventListener("touchend",this._onTouchEnd)):(window.document.addEventListener("mousemove",this._onMove),window.document.addEventListener("mouseup",this._onMouseUp)),window.addEventListener("blur",this._onMouseUp),this._active=!1,this._startPos=this._pos=DOM.mousePos(this._el,t),this._inertia=[[Date.now(),this._pos]])},DragPanHandler.prototype._onMove=function(t){if(!this._ignoreEvent(t)){this.isActive()||(this._active=!0,this._map.moving=!0,this._fireEvent("dragstart",t),this._fireEvent("movestart",t));var e=DOM.mousePos(this._el,t),n=this._map;n.stop(),this._drainInertiaBuffer(),this._inertia.push([Date.now(),e]),n.transform.setLocationAtPoint(n.transform.pointLocation(this._pos),e),this._fireEvent("drag",t),this._fireEvent("move",t),this._pos=e,t.preventDefault()}},DragPanHandler.prototype._onUp=function(t){var e=this;if(this.isActive()){this._active=!1,this._fireEvent("dragend",t),this._drainInertiaBuffer();var n=function(){e._map.moving=!1,e._fireEvent("moveend",t)},i=this._inertia;if(i.length<2)return void n();var o=i[i.length-1],r=i[0],a=o[1].sub(r[1]),s=(o[0]-r[0])/1e3;if(0===s||o[1].equals(r[1]))return void n();var u=a.mult(inertiaLinearity/s),d=u.mag();d>inertiaMaxSpeed&&(d=inertiaMaxSpeed,u._unit()._mult(d));var h=d/(inertiaDeceleration*inertiaLinearity),v=u.mult(-h/2);this._map.panBy(v,{duration:1e3*h,easing:inertiaEasing,noMoveStart:!0},{originalEvent:t})}},DragPanHandler.prototype._onMouseUp=function(t){this._ignoreEvent(t)||(this._onUp(t),window.document.removeEventListener("mousemove",this._onMove),window.document.removeEventListener("mouseup",this._onMouseUp),window.removeEventListener("blur",this._onMouseUp))},DragPanHandler.prototype._onTouchEnd=function(t){this._ignoreEvent(t)||(this._onUp(t),window.document.removeEventListener("touchmove",this._onMove),window.document.removeEventListener("touchend",this._onTouchEnd))},DragPanHandler.prototype._fireEvent=function(t,e){return this._map.fire(t,{originalEvent:e})},DragPanHandler.prototype._ignoreEvent=function(t){var e=this._map;if(e.boxZoom&&e.boxZoom.isActive())return!0;if(e.dragRotate&&e.dragRotate.isActive())return!0;if(t.touches)return t.touches.length>1;if(t.ctrlKey)return!0;var n=1,i=0;return"mousemove"===t.type?t.buttons&0===n:t.button&&t.button!==i},DragPanHandler.prototype._drainInertiaBuffer=function(){for(var t=this._inertia,e=Date.now(),n=160;t.length>0&&e-t[0][0]>n;)t.shift()},module.exports=DragPanHandler;
},{"../../util/dom":201,"../../util/util":214,"../../util/window":196}],184:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../../util/dom"),util=_dereq_("../../util/util"),window=_dereq_("../../util/window"),inertiaLinearity=.25,inertiaEasing=util.bezier(0,0,inertiaLinearity,1),inertiaMaxSpeed=180,inertiaDeceleration=720,DragRotateHandler=function(t,e){this._map=t,this._el=t.getCanvasContainer(),this._bearingSnap=e.bearingSnap,this._pitchWithRotate=e.pitchWithRotate!==!1,util.bindAll(["_onDown","_onMove","_onUp"],this)};DragRotateHandler.prototype.isEnabled=function(){return!!this._enabled},DragRotateHandler.prototype.isActive=function(){return!!this._active},DragRotateHandler.prototype.enable=function(){this.isEnabled()||(this._el.addEventListener("mousedown",this._onDown),this._enabled=!0)},DragRotateHandler.prototype.disable=function(){this.isEnabled()&&(this._el.removeEventListener("mousedown",this._onDown),this._enabled=!1)},DragRotateHandler.prototype._onDown=function(t){this._ignoreEvent(t)||this.isActive()||(window.document.addEventListener("mousemove",this._onMove),window.document.addEventListener("mouseup",this._onUp),window.addEventListener("blur",this._onUp),this._active=!1,this._inertia=[[Date.now(),this._map.getBearing()]],this._startPos=this._pos=DOM.mousePos(this._el,t),this._center=this._map.transform.centerPoint,t.preventDefault())},DragRotateHandler.prototype._onMove=function(t){if(!this._ignoreEvent(t)){this.isActive()||(this._active=!0,this._map.moving=!0,this._fireEvent("rotatestart",t),this._fireEvent("movestart",t),this._pitchWithRotate&&this._fireEvent("pitchstart",t));var e=this._map;e.stop();var i=this._pos,n=DOM.mousePos(this._el,t),r=.8*(i.x-n.x),a=(i.y-n.y)*-.5,o=e.getBearing()-r,s=e.getPitch()-a,h=this._inertia,_=h[h.length-1];this._drainInertiaBuffer(),h.push([Date.now(),e._normalizeBearing(o,_[1])]),e.transform.bearing=o,this._pitchWithRotate&&(this._fireEvent("pitch",t),e.transform.pitch=s),this._fireEvent("rotate",t),this._fireEvent("move",t),this._pos=n}},DragRotateHandler.prototype._onUp=function(t){var e=this;if(!this._ignoreEvent(t)&&(window.document.removeEventListener("mousemove",this._onMove),window.document.removeEventListener("mouseup",this._onUp),window.removeEventListener("blur",this._onUp),this.isActive())){this._active=!1,this._fireEvent("rotateend",t),this._drainInertiaBuffer();var i=this._map,n=i.getBearing(),r=this._inertia,a=function(){Math.abs(n)<e._bearingSnap?i.resetNorth({noMoveStart:!0},{originalEvent:t}):(e._map.moving=!1,e._fireEvent("moveend",t)),e._pitchWithRotate&&e._fireEvent("pitchend",t)};if(r.length<2)return void a();var o=r[0],s=r[r.length-1],h=r[r.length-2],_=i._normalizeBearing(n,h[1]),v=s[1]-o[1],p=v<0?-1:1,d=(s[0]-o[0])/1e3;if(0===v||0===d)return void a();var u=Math.abs(v*(inertiaLinearity/d));u>inertiaMaxSpeed&&(u=inertiaMaxSpeed);var l=u/(inertiaDeceleration*inertiaLinearity),g=p*u*(l/2);_+=g,Math.abs(i._normalizeBearing(_,0))<this._bearingSnap&&(_=i._normalizeBearing(0,_)),i.rotateTo(_,{duration:1e3*l,easing:inertiaEasing,noMoveStart:!0},{originalEvent:t})}},DragRotateHandler.prototype._fireEvent=function(t,e){return this._map.fire(t,{originalEvent:e})},DragRotateHandler.prototype._ignoreEvent=function(t){var e=this._map;if(e.boxZoom&&e.boxZoom.isActive())return!0;if(e.dragPan&&e.dragPan.isActive())return!0;if(t.touches)return t.touches.length>1;var i=t.ctrlKey?1:2,n=t.ctrlKey?0:2,r=t.button;return"undefined"!=typeof InstallTrigger&&2===t.button&&t.ctrlKey&&window.navigator.platform.toUpperCase().indexOf("MAC")>=0&&(r=0),"mousemove"===t.type?t.buttons&0===i:!this.isActive()&&r!==n},DragRotateHandler.prototype._drainInertiaBuffer=function(){for(var t=this._inertia,e=Date.now(),i=160;t.length>0&&e-t[0][0]>i;)t.shift()},module.exports=DragRotateHandler;
},{"../../util/dom":201,"../../util/util":214,"../../util/window":196}],185:[function(_dereq_,module,exports){
"use strict";function easeOut(e){return e*(2-e)}var panStep=100,bearingStep=15,pitchStep=10,KeyboardHandler=function(e){this._map=e,this._el=e.getCanvasContainer(),this._onKeyDown=this._onKeyDown.bind(this)};KeyboardHandler.prototype.isEnabled=function(){return!!this._enabled},KeyboardHandler.prototype.enable=function(){this.isEnabled()||(this._el.addEventListener("keydown",this._onKeyDown,!1),this._enabled=!0)},KeyboardHandler.prototype.disable=function(){this.isEnabled()&&(this._el.removeEventListener("keydown",this._onKeyDown),this._enabled=!1)},KeyboardHandler.prototype._onKeyDown=function(e){if(!(e.altKey||e.ctrlKey||e.metaKey)){var t=0,a=0,n=0,r=0,i=0;switch(e.keyCode){case 61:case 107:case 171:case 187:t=1;break;case 189:case 109:case 173:t=-1;break;case 37:e.shiftKey?a=-1:(e.preventDefault(),r=-1);break;case 39:e.shiftKey?a=1:(e.preventDefault(),r=1);break;case 38:e.shiftKey?n=1:(e.preventDefault(),i=-1);break;case 40:e.shiftKey?n=-1:(i=1,e.preventDefault());break;default:return}var s=this._map,o=s.getZoom(),d={duration:300,delayEndEvents:500,easing:easeOut,zoom:t?Math.round(o)+t*(e.shiftKey?2:1):o,bearing:s.getBearing()+a*bearingStep,pitch:s.getPitch()+n*pitchStep,offset:[-r*panStep,-i*panStep],center:s.getCenter()};s.easeTo(d,{originalEvent:e})}},module.exports=KeyboardHandler;
},{}],186:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../../util/dom"),util=_dereq_("../../util/util"),browser=_dereq_("../../util/browser"),window=_dereq_("../../util/window"),ua=window.navigator.userAgent.toLowerCase(),firefox=ua.indexOf("firefox")!==-1,safari=ua.indexOf("safari")!==-1&&ua.indexOf("chrom")===-1,ScrollZoomHandler=function(e){this._map=e,this._el=e.getCanvasContainer(),util.bindAll(["_onWheel","_onTimeout"],this)};ScrollZoomHandler.prototype.isEnabled=function(){return!!this._enabled},ScrollZoomHandler.prototype.enable=function(e){this.isEnabled()||(this._el.addEventListener("wheel",this._onWheel,!1),this._el.addEventListener("mousewheel",this._onWheel,!1),this._enabled=!0,this._aroundCenter=e&&"center"===e.around)},ScrollZoomHandler.prototype.disable=function(){this.isEnabled()&&(this._el.removeEventListener("wheel",this._onWheel),this._el.removeEventListener("mousewheel",this._onWheel),this._enabled=!1)},ScrollZoomHandler.prototype._onWheel=function(e){var t;"wheel"===e.type?(t=e.deltaY,firefox&&e.deltaMode===window.WheelEvent.DOM_DELTA_PIXEL&&(t/=browser.devicePixelRatio),e.deltaMode===window.WheelEvent.DOM_DELTA_LINE&&(t*=40)):"mousewheel"===e.type&&(t=-e.wheelDeltaY,safari&&(t/=3));var o=browser.now(),i=o-(this._time||0);this._pos=DOM.mousePos(this._el,e),this._time=o,0!==t&&t%4.000244140625===0?this._type="wheel":0!==t&&Math.abs(t)<4?this._type="trackpad":i>400?(this._type=null,this._lastValue=t,this._timeout=setTimeout(this._onTimeout,40)):this._type||(this._type=Math.abs(i*t)<200?"trackpad":"wheel",this._timeout&&(clearTimeout(this._timeout),this._timeout=null,t+=this._lastValue)),e.shiftKey&&t&&(t/=4),this._type&&this._zoom(-t,e),e.preventDefault()},ScrollZoomHandler.prototype._onTimeout=function(){this._type="wheel",this._zoom(-this._lastValue)},ScrollZoomHandler.prototype._zoom=function(e,t){if(0!==e){var o=this._map,i=2/(1+Math.exp(-Math.abs(e/100)));e<0&&0!==i&&(i=1/i);var l=o.ease?o.ease.to:o.transform.scale,s=o.transform.scaleZoom(l*i);o.zoomTo(s,{duration:"wheel"===this._type?200:0,around:this._aroundCenter?o.getCenter():o.unproject(this._pos),delayEndEvents:200,smoothEasing:!0},{originalEvent:t})}},module.exports=ScrollZoomHandler;
},{"../../util/browser":194,"../../util/dom":201,"../../util/util":214,"../../util/window":196}],187:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../../util/dom"),util=_dereq_("../../util/util"),window=_dereq_("../../util/window"),inertiaLinearity=.15,inertiaEasing=util.bezier(0,0,inertiaLinearity,1),inertiaDeceleration=12,inertiaMaxSpeed=2.5,significantScaleThreshold=.15,significantRotateThreshold=4,TouchZoomRotateHandler=function(t){this._map=t,this._el=t.getCanvasContainer(),util.bindAll(["_onStart","_onMove","_onEnd"],this)};TouchZoomRotateHandler.prototype.isEnabled=function(){return!!this._enabled},TouchZoomRotateHandler.prototype.enable=function(t){this.isEnabled()||(this._el.classList.add("mapboxgl-touch-zoom-rotate"),this._el.addEventListener("touchstart",this._onStart,!1),this._enabled=!0,this._aroundCenter=t&&"center"===t.around)},TouchZoomRotateHandler.prototype.disable=function(){this.isEnabled()&&(this._el.classList.remove("mapboxgl-touch-zoom-rotate"),this._el.removeEventListener("touchstart",this._onStart),this._enabled=!1)},TouchZoomRotateHandler.prototype.disableRotation=function(){this._rotationDisabled=!0},TouchZoomRotateHandler.prototype.enableRotation=function(){this._rotationDisabled=!1},TouchZoomRotateHandler.prototype._onStart=function(t){if(2===t.touches.length){var e=DOM.mousePos(this._el,t.touches[0]),o=DOM.mousePos(this._el,t.touches[1]);this._startVec=e.sub(o),this._startScale=this._map.transform.scale,this._startBearing=this._map.transform.bearing,this._gestureIntent=void 0,this._inertia=[],window.document.addEventListener("touchmove",this._onMove,!1),window.document.addEventListener("touchend",this._onEnd,!1)}},TouchZoomRotateHandler.prototype._onMove=function(t){if(2===t.touches.length){var e=DOM.mousePos(this._el,t.touches[0]),o=DOM.mousePos(this._el,t.touches[1]),i=e.add(o).div(2),n=e.sub(o),a=n.mag()/this._startVec.mag(),r=this._rotationDisabled?0:180*n.angleWith(this._startVec)/Math.PI,s=this._map;if(this._gestureIntent){var h={duration:0,around:s.unproject(i)};"rotate"===this._gestureIntent&&(h.bearing=this._startBearing+r),"zoom"!==this._gestureIntent&&"rotate"!==this._gestureIntent||(h.zoom=s.transform.scaleZoom(this._startScale*a)),s.stop(),this._drainInertiaBuffer(),this._inertia.push([Date.now(),a,i]),s.easeTo(h,{originalEvent:t})}else{var u=Math.abs(1-a)>significantScaleThreshold,l=Math.abs(r)>significantRotateThreshold;l?this._gestureIntent="rotate":u&&(this._gestureIntent="zoom"),this._gestureIntent&&(this._startVec=n,this._startScale=s.transform.scale,this._startBearing=s.transform.bearing)}t.preventDefault()}},TouchZoomRotateHandler.prototype._onEnd=function(t){window.document.removeEventListener("touchmove",this._onMove),window.document.removeEventListener("touchend",this._onEnd),this._drainInertiaBuffer();var e=this._inertia,o=this._map;if(e.length<2)return void o.snapToNorth({},{originalEvent:t});var i=e[e.length-1],n=e[0],a=o.transform.scaleZoom(this._startScale*i[1]),r=o.transform.scaleZoom(this._startScale*n[1]),s=a-r,h=(i[0]-n[0])/1e3,u=i[2];if(0===h||a===r)return void o.snapToNorth({},{originalEvent:t});var l=s*inertiaLinearity/h;Math.abs(l)>inertiaMaxSpeed&&(l=l>0?inertiaMaxSpeed:-inertiaMaxSpeed);var d=1e3*Math.abs(l/(inertiaDeceleration*inertiaLinearity)),c=a+l*d/2e3;c<0&&(c=0),o.easeTo({zoom:c,duration:d,easing:inertiaEasing,around:this._aroundCenter?o.getCenter():o.unproject(u)},{originalEvent:t})},TouchZoomRotateHandler.prototype._drainInertiaBuffer=function(){for(var t=this._inertia,e=Date.now(),o=160;t.length>2&&e-t[0][0]>o;)t.shift()},module.exports=TouchZoomRotateHandler;
},{"../../util/dom":201,"../../util/util":214,"../../util/window":196}],188:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util"),window=_dereq_("../util/window"),Hash=function(){util.bindAll(["_onHashChange","_updateHash"],this)};Hash.prototype.addTo=function(t){return this._map=t,window.addEventListener("hashchange",this._onHashChange,!1),this._map.on("moveend",this._updateHash),this},Hash.prototype.remove=function(){return window.removeEventListener("hashchange",this._onHashChange,!1),this._map.off("moveend",this._updateHash),delete this._map,this},Hash.prototype._onHashChange=function(){var t=window.location.hash.replace("#","").split("/");return t.length>=3&&(this._map.jumpTo({center:[+t[2],+t[1]],zoom:+t[0],bearing:+(t[3]||0),pitch:+(t[4]||0)}),!0)},Hash.prototype._updateHash=function(){var t=this._map.getCenter(),e=this._map.getZoom(),a=this._map.getBearing(),h=this._map.getPitch(),i=Math.max(0,Math.ceil(Math.log(e)/Math.LN2)),n="#"+Math.round(100*e)/100+"/"+t.lat.toFixed(i)+"/"+t.lng.toFixed(i);(a||h)&&(n+="/"+Math.round(10*a)/10),h&&(n+="/"+Math.round(h)),window.history.replaceState("","",n)},module.exports=Hash;
},{"../util/util":214,"../util/window":196}],189:[function(_dereq_,module,exports){
"use strict";function removeNode(t){t.parentNode&&t.parentNode.removeChild(t)}var util=_dereq_("../util/util"),browser=_dereq_("../util/browser"),window=_dereq_("../util/window"),DOM=_dereq_("../util/dom"),ajax=_dereq_("../util/ajax"),Style=_dereq_("../style/style"),AnimationLoop=_dereq_("../style/animation_loop"),Painter=_dereq_("../render/painter"),Transform=_dereq_("../geo/transform"),Hash=_dereq_("./hash"),bindHandlers=_dereq_("./bind_handlers"),Camera=_dereq_("./camera"),LngLat=_dereq_("../geo/lng_lat"),LngLatBounds=_dereq_("../geo/lng_lat_bounds"),Point=_dereq_("point-geometry"),AttributionControl=_dereq_("./control/attribution_control"),LogoControl=_dereq_("./control/logo_control"),isSupported=_dereq_("mapbox-gl-supported"),defaultMinZoom=0,defaultMaxZoom=22,defaultOptions={center:[0,0],zoom:0,bearing:0,pitch:0,minZoom:defaultMinZoom,maxZoom:defaultMaxZoom,interactive:!0,scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,bearingSnap:7,hash:!1,attributionControl:!0,failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!1,trackResize:!0,renderWorldCopies:!0,refreshExpiredTiles:!0},Map=function(t){function e(e){var o=this;if(e=util.extend({},defaultOptions,e),null!=e.minZoom&&null!=e.maxZoom&&e.minZoom>e.maxZoom)throw new Error("maxZoom must be greater than minZoom");var i=new Transform(e.minZoom,e.maxZoom,e.renderWorldCopies);if(t.call(this,i,e),this._interactive=e.interactive,this._failIfMajorPerformanceCaveat=e.failIfMajorPerformanceCaveat,this._preserveDrawingBuffer=e.preserveDrawingBuffer,this._trackResize=e.trackResize,this._bearingSnap=e.bearingSnap,this._refreshExpiredTiles=e.refreshExpiredTiles,"string"==typeof e.container){if(this._container=window.document.getElementById(e.container),!this._container)throw new Error("Container '"+e.container+"' not found.")}else this._container=e.container;this.animationLoop=new AnimationLoop,e.maxBounds&&this.setMaxBounds(e.maxBounds),util.bindAll(["_onWindowOnline","_onWindowResize","_contextLost","_contextRestored","_update","_render","_onData","_onDataLoading"],this),this._setupContainer(),this._setupPainter(),this.on("move",this._update.bind(this,!1)),this.on("zoom",this._update.bind(this,!0)),this.on("moveend",function(){o.animationLoop.set(300),o._rerender()}),"undefined"!=typeof window&&(window.addEventListener("online",this._onWindowOnline,!1),window.addEventListener("resize",this._onWindowResize,!1)),bindHandlers(this,e),this._hash=e.hash&&(new Hash).addTo(this),this._hash&&this._hash._onHashChange()||this.jumpTo({center:e.center,zoom:e.zoom,bearing:e.bearing,pitch:e.pitch}),this._classes=[],this.resize(),e.classes&&this.setClasses(e.classes),e.style&&this.setStyle(e.style),e.attributionControl&&this.addControl(new AttributionControl),this.addControl(new LogoControl,e.logoPosition),this.on("style.load",function(){this.transform.unmodified&&this.jumpTo(this.style.stylesheet),this.style.update(this._classes,{transition:!1})}),this.on("data",this._onData),this.on("dataloading",this._onDataLoading)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var o={showTileBoundaries:{},showCollisionBoxes:{},showOverdrawInspector:{},repaint:{},vertices:{}};return e.prototype.addControl=function(t,e){void 0===e&&t.getDefaultPosition&&(e=t.getDefaultPosition()),void 0===e&&(e="top-right");var o=t.onAdd(this),i=this._controlPositions[e];return e.indexOf("bottom")!==-1?i.insertBefore(o,i.firstChild):i.appendChild(o),this},e.prototype.removeControl=function(t){return t.onRemove(this),this},e.prototype.addClass=function(t,e){return util.warnOnce("Style classes are deprecated and will be removed in an upcoming release of Mapbox GL JS."),this._classes.indexOf(t)>=0||""===t?this:(this._classes.push(t),this._classOptions=e,this.style&&this.style.updateClasses(),this._update(!0))},e.prototype.removeClass=function(t,e){util.warnOnce("Style classes are deprecated and will be removed in an upcoming release of Mapbox GL JS.");var o=this._classes.indexOf(t);return o<0||""===t?this:(this._classes.splice(o,1),this._classOptions=e,this.style&&this.style.updateClasses(),this._update(!0))},e.prototype.setClasses=function(t,e){util.warnOnce("Style classes are deprecated and will be removed in an upcoming release of Mapbox GL JS.");for(var o={},i=0;i<t.length;i++)""!==t[i]&&(o[t[i]]=!0);return this._classes=Object.keys(o),this._classOptions=e,this.style&&this.style.updateClasses(),this._update(!0)},e.prototype.hasClass=function(t){return util.warnOnce("Style classes are deprecated and will be removed in an upcoming release of Mapbox GL JS."),this._classes.indexOf(t)>=0},e.prototype.getClasses=function(){return util.warnOnce("Style classes are deprecated and will be removed in an upcoming release of Mapbox GL JS."),this._classes},e.prototype.resize=function(){var t=this._containerDimensions(),e=t[0],o=t[1];return this._resizeCanvas(e,o),this.transform.resize(e,o),this.painter.resize(e,o),this.fire("movestart").fire("move").fire("resize").fire("moveend")},e.prototype.getBounds=function(){var t=new LngLatBounds(this.transform.pointLocation(new Point(0,this.transform.height)),this.transform.pointLocation(new Point(this.transform.width,0)));return(this.transform.angle||this.transform.pitch)&&(t.extend(this.transform.pointLocation(new Point(this.transform.size.x,0))),t.extend(this.transform.pointLocation(new Point(0,this.transform.size.y)))),t},e.prototype.setMaxBounds=function(t){if(t){var e=LngLatBounds.convert(t);this.transform.lngRange=[e.getWest(),e.getEast()],this.transform.latRange=[e.getSouth(),e.getNorth()],this.transform._constrain(),this._update()}else null!==t&&void 0!==t||(this.transform.lngRange=[],this.transform.latRange=[],this._update());return this},e.prototype.setMinZoom=function(t){if(t=null===t||void 0===t?defaultMinZoom:t,t>=defaultMinZoom&&t<=this.transform.maxZoom)return this.transform.minZoom=t,this._update(),this.getZoom()<t&&this.setZoom(t),this;throw new Error("minZoom must be between "+defaultMinZoom+" and the current maxZoom, inclusive")},e.prototype.getMinZoom=function(){return this.transform.minZoom},e.prototype.setMaxZoom=function(t){if(t=null===t||void 0===t?defaultMaxZoom:t,t>=this.transform.minZoom)return this.transform.maxZoom=t,this._update(),this.getZoom()>t&&this.setZoom(t),this;throw new Error("maxZoom must be greater than the current minZoom")},e.prototype.getMaxZoom=function(){return this.transform.maxZoom},e.prototype.project=function(t){return this.transform.locationPoint(LngLat.convert(t))},e.prototype.unproject=function(t){return this.transform.pointLocation(Point.convert(t))},e.prototype.on=function(e,o,i){var r=this;if(void 0===i)return t.prototype.on.call(this,e,o);var s=function(){if("mouseenter"===e||"mouseover"===e){var t=!1,s=function(s){var n=r.queryRenderedFeatures(s.point,{layers:[o]});n.length?t||(t=!0,i.call(r,util.extend({features:n},s,{type:e}))):t=!1},n=function(){t=!1};return{layer:o,listener:i,delegates:{mousemove:s,mouseout:n}}}if("mouseleave"===e||"mouseout"===e){var a=!1,h=function(t){var s=r.queryRenderedFeatures(t.point,{layers:[o]});s.length?a=!0:a&&(a=!1,i.call(r,util.extend({},t,{type:e})))},l=function(t){a&&(a=!1,i.call(r,util.extend({},t,{type:e})))};return{layer:o,listener:i,delegates:{mousemove:h,mouseout:l}}}var u=function(t){var e=r.queryRenderedFeatures(t.point,{layers:[o]});e.length&&i.call(r,util.extend({features:e},t))};return{layer:o,listener:i,delegates:(d={},d[e]=u,d)};var d}();this._delegatedListeners=this._delegatedListeners||{},this._delegatedListeners[e]=this._delegatedListeners[e]||[],this._delegatedListeners[e].push(s);for(var n in s.delegates)r.on(n,s.delegates[n]);return this},e.prototype.off=function(e,o,i){var r=this;if(void 0===i)return t.prototype.off.call(this,e,o);if(this._delegatedListeners&&this._delegatedListeners[e])for(var s=this._delegatedListeners[e],n=0;n<s.length;n++){var a=s[n];if(a.layer===o&&a.listener===i){for(var h in a.delegates)r.off(h,a.delegates[h]);return s.splice(n,1),r}}},e.prototype.queryRenderedFeatures=function(){function t(t){return t instanceof Point||Array.isArray(t)}var e,o={};return 2===arguments.length?(e=arguments[0],o=arguments[1]):1===arguments.length&&t(arguments[0])?e=arguments[0]:1===arguments.length&&(o=arguments[0]),this.style?this.style.queryRenderedFeatures(this._makeQueryGeometry(e),o,this.transform.zoom,this.transform.angle):[]},e.prototype._makeQueryGeometry=function(t){var e=this;void 0===t&&(t=[Point.convert([0,0]),Point.convert([this.transform.width,this.transform.height])]);var o,i=t instanceof Point||"number"==typeof t[0];if(i){var r=Point.convert(t);o=[r]}else{var s=[Point.convert(t[0]),Point.convert(t[1])];o=[s[0],new Point(s[1].x,s[0].y),s[1],new Point(s[0].x,s[1].y),s[0]]}return o=o.map(function(t){return e.transform.pointCoordinate(t)})},e.prototype.querySourceFeatures=function(t,e){return this.style.querySourceFeatures(t,e)},e.prototype.setStyle=function(t,e){var o=(!e||e.diff!==!1)&&this.style&&t&&!(t instanceof Style)&&"string"!=typeof t;if(o)try{return this.style.setState(t)&&this._update(!0),this}catch(t){util.warnOnce("Unable to perform style diff: "+(t.message||t.error||t)+".  Rebuilding the style from scratch.")}return this.style&&(this.style.setEventedParent(null),this.style._remove(),this.off("rotate",this.style._redoPlacement),this.off("pitch",this.style._redoPlacement)),t?(t instanceof Style?this.style=t:this.style=new Style(t,this),this.style.setEventedParent(this,{style:this.style}),this.on("rotate",this.style._redoPlacement),this.on("pitch",this.style._redoPlacement),this):(this.style=null,this)},e.prototype.getStyle=function(){if(this.style)return this.style.serialize()},e.prototype.addSource=function(t,e){return this.style.addSource(t,e),this._update(!0),this},e.prototype.isSourceLoaded=function(t){var e=this.style&&this.style.sourceCaches[t];return void 0===e?void this.fire("error",{error:new Error("There is no source with ID '"+t+"'")}):e.loaded()},e.prototype.addSourceType=function(t,e,o){return this.style.addSourceType(t,e,o)},e.prototype.removeSource=function(t){return this.style.removeSource(t),this._update(!0),this},e.prototype.getSource=function(t){return this.style.getSource(t)},e.prototype.addImage=function(t,e,o){this.style.spriteAtlas.addImage(t,e,o)},e.prototype.removeImage=function(t){this.style.spriteAtlas.removeImage(t)},e.prototype.loadImage=function(t,e){ajax.getImage(t,e)},e.prototype.addLayer=function(t,e){return this.style.addLayer(t,e),this._update(!0),this},e.prototype.moveLayer=function(t,e){return this.style.moveLayer(t,e),this._update(!0),this},e.prototype.removeLayer=function(t){return this.style.removeLayer(t),this._update(!0),this},e.prototype.getLayer=function(t){return this.style.getLayer(t)},e.prototype.setFilter=function(t,e){return this.style.setFilter(t,e),this._update(!0),this},e.prototype.setLayerZoomRange=function(t,e,o){return this.style.setLayerZoomRange(t,e,o),this._update(!0),this},e.prototype.getFilter=function(t){return this.style.getFilter(t)},e.prototype.setPaintProperty=function(t,e,o,i){return this.style.setPaintProperty(t,e,o,i),this._update(!0),this},e.prototype.getPaintProperty=function(t,e,o){return this.style.getPaintProperty(t,e,o)},e.prototype.setLayoutProperty=function(t,e,o){return this.style.setLayoutProperty(t,e,o),this._update(!0),this},e.prototype.getLayoutProperty=function(t,e){return this.style.getLayoutProperty(t,e)},e.prototype.setLight=function(t){return this.style.setLight(t),this._update(!0),this},e.prototype.getLight=function(){return this.style.getLight()},e.prototype.getContainer=function(){return this._container},e.prototype.getCanvasContainer=function(){return this._canvasContainer},e.prototype.getCanvas=function(){return this._canvas},e.prototype._containerDimensions=function(){var t=0,e=0;return this._container&&(t=this._container.offsetWidth||400,e=this._container.offsetHeight||300),[t,e]},e.prototype._setupContainer=function(){var t=this._container;t.classList.add("mapboxgl-map");var e=this._canvasContainer=DOM.create("div","mapboxgl-canvas-container",t);this._interactive&&e.classList.add("mapboxgl-interactive"),this._canvas=DOM.create("canvas","mapboxgl-canvas",e),this._canvas.style.position="absolute",this._canvas.addEventListener("webglcontextlost",this._contextLost,!1),this._canvas.addEventListener("webglcontextrestored",this._contextRestored,!1),this._canvas.setAttribute("tabindex",0),this._canvas.setAttribute("aria-label","Map");var o=this._containerDimensions();this._resizeCanvas(o[0],o[1]);var i=this._controlContainer=DOM.create("div","mapboxgl-control-container",t),r=this._controlPositions={};["top-left","top-right","bottom-left","bottom-right"].forEach(function(t){r[t]=DOM.create("div","mapboxgl-ctrl-"+t,i)})},e.prototype._resizeCanvas=function(t,e){var o=window.devicePixelRatio||1;this._canvas.width=o*t,this._canvas.height=o*e,this._canvas.style.width=t+"px",this._canvas.style.height=e+"px"},e.prototype._setupPainter=function(){var t=util.extend({failIfMajorPerformanceCaveat:this._failIfMajorPerformanceCaveat,preserveDrawingBuffer:this._preserveDrawingBuffer},isSupported.webGLContextAttributes),e=this._canvas.getContext("webgl",t)||this._canvas.getContext("experimental-webgl",t);return e?void(this.painter=new Painter(e,this.transform)):void this.fire("error",{error:new Error("Failed to initialize WebGL")})},e.prototype._contextLost=function(t){t.preventDefault(),this._frameId&&browser.cancelFrame(this._frameId),this.fire("webglcontextlost",{originalEvent:t})},e.prototype._contextRestored=function(t){this._setupPainter(),this.resize(),this._update(),this.fire("webglcontextrestored",{originalEvent:t})},e.prototype.loaded=function(){return!this._styleDirty&&!this._sourcesDirty&&!(!this.style||!this.style.loaded())},e.prototype._update=function(t){return this.style?(this._styleDirty=this._styleDirty||t,this._sourcesDirty=!0,this._rerender(),this):this},e.prototype._render=function(){return this.style&&this._styleDirty&&(this._styleDirty=!1,this.style.update(this._classes,this._classOptions),this._classOptions=null,this.style._recalculate(this.transform.zoom)),this.style&&this._sourcesDirty&&(this._sourcesDirty=!1,this.style._updateSources(this.transform)),this.painter.render(this.style,{showTileBoundaries:this.showTileBoundaries,showOverdrawInspector:this._showOverdrawInspector,rotating:this.rotating,zooming:this.zooming}),this.fire("render"),this.loaded()&&!this._loaded&&(this._loaded=!0,this.fire("load")),this._frameId=null,this.animationLoop.stopped()||(this._styleDirty=!0),(this._sourcesDirty||this._repaint||this._styleDirty)&&this._rerender(),this},e.prototype.remove=function(){this._hash&&this._hash.remove(),browser.cancelFrame(this._frameId),this.setStyle(null),"undefined"!=typeof window&&(window.removeEventListener("resize",this._onWindowResize,!1),window.removeEventListener("online",this._onWindowOnline,!1));var t=this.painter.gl.getExtension("WEBGL_lose_context");t&&t.loseContext(),removeNode(this._canvasContainer),removeNode(this._controlContainer),this._container.classList.remove("mapboxgl-map"),this.fire("remove")},e.prototype._rerender=function(){this.style&&!this._frameId&&(this._frameId=browser.frame(this._render))},e.prototype._onWindowOnline=function(){this._update()},e.prototype._onWindowResize=function(){this._trackResize&&this.stop().resize()._update()},o.showTileBoundaries.get=function(){return!!this._showTileBoundaries},o.showTileBoundaries.set=function(t){this._showTileBoundaries!==t&&(this._showTileBoundaries=t,this._update())},o.showCollisionBoxes.get=function(){return!!this._showCollisionBoxes},o.showCollisionBoxes.set=function(t){this._showCollisionBoxes!==t&&(this._showCollisionBoxes=t,this.style._redoPlacement())},o.showOverdrawInspector.get=function(){return!!this._showOverdrawInspector},o.showOverdrawInspector.set=function(t){this._showOverdrawInspector!==t&&(this._showOverdrawInspector=t,this._update())},o.repaint.get=function(){return!!this._repaint},o.repaint.set=function(t){this._repaint=t,this._update()},o.vertices.get=function(){return!!this._vertices},o.vertices.set=function(t){this._vertices=t,this._update()},e.prototype._onData=function(t){this._update("style"===t.dataType),this.fire(t.dataType+"data",t)},e.prototype._onDataLoading=function(t){this.fire(t.dataType+"dataloading",t)},Object.defineProperties(e.prototype,o),e}(Camera);module.exports=Map;
},{"../geo/lng_lat":62,"../geo/lng_lat_bounds":63,"../geo/transform":64,"../render/painter":77,"../style/animation_loop":145,"../style/style":148,"../util/ajax":193,"../util/browser":194,"../util/dom":201,"../util/util":214,"../util/window":196,"./bind_handlers":173,"./camera":174,"./control/attribution_control":175,"./control/logo_control":178,"./hash":188,"mapbox-gl-supported":22,"point-geometry":26}],190:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../util/dom"),LngLat=_dereq_("../geo/lng_lat"),Point=_dereq_("point-geometry"),Marker=function(t,e){this._offset=Point.convert(e&&e.offset||[0,0]),this._update=this._update.bind(this),this._onMapClick=this._onMapClick.bind(this),t||(t=DOM.create("div")),t.classList.add("mapboxgl-marker"),this._element=t,this._popup=null};Marker.prototype.addTo=function(t){return this.remove(),this._map=t,t.getCanvasContainer().appendChild(this._element),t.on("move",this._update),t.on("moveend",this._update),this._update(),this._map.on("click",this._onMapClick),this},Marker.prototype.remove=function(){return this._map&&(this._map.off("click",this._onMapClick),this._map.off("move",this._update),this._map.off("moveend",this._update),this._map=null),DOM.remove(this._element),this._popup&&this._popup.remove(),this},Marker.prototype.getLngLat=function(){return this._lngLat},Marker.prototype.setLngLat=function(t){return this._lngLat=LngLat.convert(t),this._popup&&this._popup.setLngLat(this._lngLat),this._update(),this},Marker.prototype.getElement=function(){return this._element},Marker.prototype.setPopup=function(t){return this._popup&&(this._popup.remove(),this._popup=null),t&&(this._popup=t,this._popup.setLngLat(this._lngLat)),this},Marker.prototype._onMapClick=function(t){var e=t.originalEvent.target,p=this._element;this._popup&&(e===p||p.contains(e))&&this.togglePopup()},Marker.prototype.getPopup=function(){return this._popup},Marker.prototype.togglePopup=function(){var t=this._popup;t&&(t.isOpen()?t.remove():t.addTo(this._map))},Marker.prototype._update=function(t){if(this._map){var e=this._map.project(this._map.transform.renderWorldCopies?this._lngLat.wrapToBestWorld(this._map.getCenter()):this._lngLat)._add(this._offset);t&&"moveend"!==t.type||(e=e.round()),DOM.setTransform(this._element,"translate("+e.x+"px, "+e.y+"px)")}},module.exports=Marker;
},{"../geo/lng_lat":62,"../util/dom":201,"point-geometry":26}],191:[function(_dereq_,module,exports){
"use strict";function normalizeOffset(t){if(t){if("number"==typeof t){var o=Math.round(Math.sqrt(.5*Math.pow(t,2)));return{top:new Point(0,t),"top-left":new Point(o,o),"top-right":new Point(-o,o),bottom:new Point(0,-t),"bottom-left":new Point(o,-o),"bottom-right":new Point(-o,-o),left:new Point(t,0),right:new Point(-t,0)}}if(isPointLike(t)){var e=Point.convert(t);return{top:e,"top-left":e,"top-right":e,bottom:e,"bottom-left":e,"bottom-right":e,left:e,right:e}}return{top:Point.convert(t.top||[0,0]),"top-left":Point.convert(t["top-left"]||[0,0]),"top-right":Point.convert(t["top-right"]||[0,0]),bottom:Point.convert(t.bottom||[0,0]),"bottom-left":Point.convert(t["bottom-left"]||[0,0]),"bottom-right":Point.convert(t["bottom-right"]||[0,0]),left:Point.convert(t.left||[0,0]),right:Point.convert(t.right||[0,0])}}return normalizeOffset(new Point(0,0))}function isPointLike(t){return t instanceof Point||Array.isArray(t)}var util=_dereq_("../util/util"),Evented=_dereq_("../util/evented"),DOM=_dereq_("../util/dom"),LngLat=_dereq_("../geo/lng_lat"),Point=_dereq_("point-geometry"),window=_dereq_("../util/window"),defaultOptions={closeButton:!0,closeOnClick:!0},Popup=function(t){function o(o){t.call(this),this.options=util.extend(Object.create(defaultOptions),o),util.bindAll(["_update","_onClickClose"],this)}return t&&(o.__proto__=t),o.prototype=Object.create(t&&t.prototype),o.prototype.constructor=o,o.prototype.addTo=function(t){return this._map=t,this._map.on("move",this._update),this.options.closeOnClick&&this._map.on("click",this._onClickClose),this._update(),this},o.prototype.isOpen=function(){return!!this._map},o.prototype.remove=function(){return this._content&&this._content.parentNode&&this._content.parentNode.removeChild(this._content),this._container&&(this._container.parentNode.removeChild(this._container),delete this._container),this._map&&(this._map.off("move",this._update),this._map.off("click",this._onClickClose),delete this._map),this.fire("close"),this},o.prototype.getLngLat=function(){return this._lngLat},o.prototype.setLngLat=function(t){return this._lngLat=LngLat.convert(t),this._update(),this},o.prototype.setText=function(t){return this.setDOMContent(window.document.createTextNode(t))},o.prototype.setHTML=function(t){var o,e=window.document.createDocumentFragment(),n=window.document.createElement("body");for(n.innerHTML=t;;){if(o=n.firstChild,!o)break;e.appendChild(o)}return this.setDOMContent(e)},o.prototype.setDOMContent=function(t){return this._createContent(),this._content.appendChild(t),this._update(),this},o.prototype._createContent=function(){this._content&&this._content.parentNode&&this._content.parentNode.removeChild(this._content),this._content=DOM.create("div","mapboxgl-popup-content",this._container),this.options.closeButton&&(this._closeButton=DOM.create("button","mapboxgl-popup-close-button",this._content),this._closeButton.type="button",this._closeButton.innerHTML="&#215;",this._closeButton.addEventListener("click",this._onClickClose))},o.prototype._update=function(){if(this._map&&this._lngLat&&this._content){this._container||(this._container=DOM.create("div","mapboxgl-popup",this._map.getContainer()),this._tip=DOM.create("div","mapboxgl-popup-tip",this._container),this._container.appendChild(this._content));var t=this.options.anchor,o=normalizeOffset(this.options.offset),e=this._map.project(this._map.transform.renderWorldCopies?this._lngLat.wrapToBestWorld(this._map.getCenter()):this._lngLat).round();if(!t){var n=this._container.offsetWidth,i=this._container.offsetHeight;t=e.y+o.bottom.y<i?["top"]:e.y>this._map.transform.height-i?["bottom"]:[],e.x<n/2?t.push("left"):e.x>this._map.transform.width-n/2&&t.push("right"),t=0===t.length?"bottom":t.join("-")}var r=e.add(o[t]),s={top:"translate(-50%,0)","top-left":"translate(0,0)","top-right":"translate(-100%,0)",bottom:"translate(-50%,-100%)","bottom-left":"translate(0,-100%)","bottom-right":"translate(-100%,-100%)",left:"translate(0,-50%)",right:"translate(-100%,-50%)"},p=this._container.classList;for(var a in s)p.remove("mapboxgl-popup-anchor-"+a);p.add("mapboxgl-popup-anchor-"+t),DOM.setTransform(this._container,s[t]+" translate("+r.x+"px,"+r.y+"px)")}},o.prototype._onClickClose=function(){this.remove()},o}(Evented);module.exports=Popup;
},{"../geo/lng_lat":62,"../util/dom":201,"../util/evented":202,"../util/util":214,"../util/window":196,"point-geometry":26}],192:[function(_dereq_,module,exports){
"use strict";var Actor=function(t,e,a){this.target=t,this.parent=e,this.mapId=a,this.callbacks={},this.callbackID=0,this.receive=this.receive.bind(this),this.target.addEventListener("message",this.receive,!1)};Actor.prototype.send=function(t,e,a,r,s){var i=a?this.mapId+":"+this.callbackID++:null;a&&(this.callbacks[i]=a),this.target.postMessage({targetMapId:s,sourceMapId:this.mapId,type:t,id:String(i),data:e},r)},Actor.prototype.receive=function(t){var e,a=this,r=t.data,s=r.id;if(!r.targetMapId||this.mapId===r.targetMapId){var i=function(t,e,r){a.target.postMessage({sourceMapId:a.mapId,type:"<response>",id:String(s),error:t?String(t):null,data:e},r)};if("<response>"===r.type)e=this.callbacks[r.id],delete this.callbacks[r.id],e&&e(r.error||null,r.data);else if("undefined"!=typeof r.id&&this.parent[r.type])this.parent[r.type](r.sourceMapId,r.data,i);else if("undefined"!=typeof r.id&&this.parent.getWorkerSource){var p=r.type.split("."),d=this.parent.getWorkerSource(r.sourceMapId,p[0]);d[p[1]](r.data,i)}else this.parent[r.type](r.data)}},Actor.prototype.remove=function(){this.target.removeEventListener("message",this.receive,!1)},module.exports=Actor;
},{}],193:[function(_dereq_,module,exports){
"use strict";function sameOrigin(e){var t=window.document.createElement("a");return t.href=e,t.protocol===window.document.location.protocol&&t.host===window.document.location.host}var window=_dereq_("./window"),AJAXError=function(e){function t(t,r){e.call(this,t),this.status=r}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(Error);exports.getJSON=function(e,t){var r=new window.XMLHttpRequest;return r.open("GET",e,!0),r.setRequestHeader("Accept","application/json"),r.onerror=function(e){t(e)},r.onload=function(){if(r.status>=200&&r.status<300&&r.response){var e;try{e=JSON.parse(r.response)}catch(e){return t(e)}t(null,e)}else t(new AJAXError(r.statusText,r.status))},r.send(),r},exports.getArrayBuffer=function(e,t){var r=new window.XMLHttpRequest;return r.open("GET",e,!0),r.responseType="arraybuffer",r.onerror=function(e){t(e)},r.onload=function(){return 0===r.response.byteLength&&200===r.status?t(new Error("http status 200 returned without content.")):void(r.status>=200&&r.status<300&&r.response?t(null,{data:r.response,cacheControl:r.getResponseHeader("Cache-Control"),expires:r.getResponseHeader("Expires")}):t(new AJAXError(r.statusText,r.status)))},r.send(),r};var transparentPngUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";exports.getImage=function(e,t){return exports.getArrayBuffer(e,function(e,r){if(e)return t(e);var n=new window.Image,o=window.URL||window.webkitURL;n.onload=function(){t(null,n),o.revokeObjectURL(n.src)};var s=new window.Blob([new Uint8Array(r.data)],{type:"image/png"});n.cacheControl=r.cacheControl,n.expires=r.expires,n.src=r.data.byteLength?o.createObjectURL(s):transparentPngUrl})},exports.getVideo=function(e,t){var r=window.document.createElement("video");r.onloadstart=function(){t(null,r)};for(var n=0;n<e.length;n++){var o=window.document.createElement("source");sameOrigin(e[n])||(r.crossOrigin="Anonymous"),o.src=e[n],r.appendChild(o)}return r};
},{"./window":196}],194:[function(_dereq_,module,exports){
"use strict";var window=_dereq_("./window");module.exports.now=function(){return window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now.bind(Date)}();var frame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;exports.frame=function(e){return frame(e)};var cancel=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame;exports.cancelFrame=function(e){cancel(e)},exports.timed=function(e,n,t){function o(i){r||(i=module.exports.now(),i>=a+n?e.call(t,1):(e.call(t,(i-a)/n),exports.frame(o)))}if(!n)return e.call(t,1),null;var r=!1,a=module.exports.now();return exports.frame(o),function(){r=!0}},exports.getImageData=function(e){var n=window.document.createElement("canvas"),t=n.getContext("2d");return n.width=e.width,n.height=e.height,t.drawImage(e,0,0,e.width,e.height),t.getImageData(0,0,e.width,e.height).data},exports.supported=_dereq_("mapbox-gl-supported"),exports.hardwareConcurrency=window.navigator.hardwareConcurrency||4,Object.defineProperty(exports,"devicePixelRatio",{get:function(){return window.devicePixelRatio}}),exports.supportsWebp=!1;var webpImgTest=window.document.createElement("img");webpImgTest.onload=function(){exports.supportsWebp=!0},webpImgTest.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=";
},{"./window":196,"mapbox-gl-supported":22}],195:[function(_dereq_,module,exports){
"use strict";var WebWorkify=_dereq_("webworkify"),window=_dereq_("../window"),workerURL=window.URL.createObjectURL(new WebWorkify(_dereq_("../../source/worker"),{bare:!0}));module.exports=function(){return new window.Worker(workerURL)};
},{"../../source/worker":100,"../window":196,"webworkify":41}],196:[function(_dereq_,module,exports){
"use strict";module.exports=self;
},{}],197:[function(_dereq_,module,exports){
"use strict";function compareAreas(e,r){return r.area-e.area}var quickselect=_dereq_("quickselect"),calculateSignedArea=_dereq_("./util").calculateSignedArea;module.exports=function(e,r){var a=e.length;if(a<=1)return[e];for(var t,u,c=[],i=0;i<a;i++){var l=calculateSignedArea(e[i]);0!==l&&(e[i].area=Math.abs(l),void 0===u&&(u=l<0),u===l<0?(t&&c.push(t),t=[e[i]]):t.push(e[i]))}if(t&&c.push(t),r>1)for(var n=0;n<c.length;n++)c[n].length<=r||(quickselect(c[n],r,1,c[n].length-1,compareAreas),c[n]=c[n].slice(0,r));return c};
},{"./util":214,"quickselect":28}],198:[function(_dereq_,module,exports){
"use strict";var config={API_URL:"https://api.mapbox.com",REQUIRE_ACCESS_TOKEN:!0,ACCESS_TOKEN:null};module.exports=config;
},{}],199:[function(_dereq_,module,exports){
"use strict";var DictionaryCoder=function(r){var t=this;this._stringToNumber={},this._numberToString=[];for(var o=0;o<r.length;o++){var i=r[o];t._stringToNumber[i]=o,t._numberToString[o]=i}};DictionaryCoder.prototype.encode=function(r){return this._stringToNumber[r]},DictionaryCoder.prototype.decode=function(r){return this._numberToString[r]},module.exports=DictionaryCoder;
},{}],200:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("./util"),Actor=_dereq_("./actor"),Dispatcher=function(t,r){var o=this;this.workerPool=t,this.actors=[],this.currentActor=0,this.id=util.uniqueId();for(var i=this.workerPool.acquire(this.id),e=0;e<i.length;e++){var s=i[e],c=new Actor(s,r,o.id);c.name="Worker "+e,o.actors.push(c)}};Dispatcher.prototype.broadcast=function(t,r,o){o=o||function(){},util.asyncAll(this.actors,function(o,i){o.send(t,r,i)},o)},Dispatcher.prototype.send=function(t,r,o,i,e){return("number"!=typeof i||isNaN(i))&&(i=this.currentActor=(this.currentActor+1)%this.actors.length),this.actors[i].send(t,r,o,e),i},Dispatcher.prototype.remove=function(){this.actors.forEach(function(t){t.remove()}),this.actors=[],this.workerPool.release(this.id)},module.exports=Dispatcher;
},{"./actor":192,"./util":214}],201:[function(_dereq_,module,exports){
"use strict";function testProp(e){for(var t=0;t<e.length;t++)if(e[t]in docStyle)return e[t];return e[0]}function suppressClick(e){e.preventDefault(),e.stopPropagation(),window.removeEventListener("click",suppressClick,!0)}var Point=_dereq_("point-geometry"),window=_dereq_("./window");exports.create=function(e,t,o){var n=window.document.createElement(e);return t&&(n.className=t),o&&o.appendChild(n),n};var docStyle=window.document.documentElement.style,selectProp=testProp(["userSelect","MozUserSelect","WebkitUserSelect","msUserSelect"]),userSelect;exports.disableDrag=function(){selectProp&&(userSelect=docStyle[selectProp],docStyle[selectProp]="none")},exports.enableDrag=function(){selectProp&&(docStyle[selectProp]=userSelect)};var transformProp=testProp(["transform","WebkitTransform"]);exports.setTransform=function(e,t){e.style[transformProp]=t},exports.suppressClick=function(){window.addEventListener("click",suppressClick,!0),window.setTimeout(function(){window.removeEventListener("click",suppressClick,!0)},0)},exports.mousePos=function(e,t){var o=e.getBoundingClientRect();return t=t.touches?t.touches[0]:t,new Point(t.clientX-o.left-e.clientLeft,t.clientY-o.top-e.clientTop)},exports.touchPos=function(e,t){for(var o=e.getBoundingClientRect(),n=[],r="touchend"===t.type?t.changedTouches:t.touches,s=0;s<r.length;s++)n.push(new Point(r[s].clientX-o.left-e.clientLeft,r[s].clientY-o.top-e.clientTop));return n},exports.remove=function(e){e.parentNode&&e.parentNode.removeChild(e)};
},{"./window":196,"point-geometry":26}],202:[function(_dereq_,module,exports){
"use strict";function _addEventListener(e,t,n){n[e]=n[e]||[],n[e].push(t)}function _removeEventListener(e,t,n){if(n&&n[e]){var i=n[e].indexOf(t);i!==-1&&n[e].splice(i,1)}}var util=_dereq_("./util"),Evented=function(){};Evented.prototype.on=function(e,t){return this._listeners=this._listeners||{},_addEventListener(e,t,this._listeners),this},Evented.prototype.off=function(e,t){return _removeEventListener(e,t,this._listeners),_removeEventListener(e,t,this._oneTimeListeners),this},Evented.prototype.once=function(e,t){return this._oneTimeListeners=this._oneTimeListeners||{},_addEventListener(e,t,this._oneTimeListeners),this},Evented.prototype.fire=function(e,t){var n=this;if(this.listens(e)){t=util.extend({},t,{type:e,target:this});for(var i=this._listeners&&this._listeners[e]?this._listeners[e].slice():[],s=0;s<i.length;s++)i[s].call(n,t);for(var r=this._oneTimeListeners&&this._oneTimeListeners[e]?this._oneTimeListeners[e].slice():[],o=0;o<r.length;o++)r[o].call(n,t),_removeEventListener(e,r[o],n._oneTimeListeners);this._eventedParent&&this._eventedParent.fire(e,util.extend({},t,"function"==typeof this._eventedParentData?this._eventedParentData():this._eventedParentData))}else util.endsWith(e,"error")&&console.error(t&&t.error||t||"Empty error event");return this},Evented.prototype.listens=function(e){return this._listeners&&this._listeners[e]&&this._listeners[e].length>0||this._oneTimeListeners&&this._oneTimeListeners[e]&&this._oneTimeListeners[e].length>0||this._eventedParent&&this._eventedParent.listens(e)},Evented.prototype.setEventedParent=function(e,t){return this._eventedParent=e,this._eventedParentData=t,this},module.exports=Evented;
},{"./util":214}],203:[function(_dereq_,module,exports){
"use strict";function compareMax(e,t){return t.max-e.max}function Cell(e,t,n,r){this.p=new Point(e,t),this.h=n,this.d=pointToPolygonDist(this.p,r),this.max=this.d+this.h*Math.SQRT2}function pointToPolygonDist(e,t){for(var n=!1,r=1/0,o=0;o<t.length;o++)for(var i=t[o],l=0,u=i.length,s=u-1;l<u;s=l++){var a=i[l],h=i[s];a.y>e.y!=h.y>e.y&&e.x<(h.x-a.x)*(e.y-a.y)/(h.y-a.y)+a.x&&(n=!n),r=Math.min(r,distToSegmentSquared(e,a,h))}return(n?1:-1)*Math.sqrt(r)}function getCentroidCell(e){for(var t=0,n=0,r=0,o=e[0],i=0,l=o.length,u=l-1;i<l;u=i++){var s=o[i],a=o[u],h=s.x*a.y-a.x*s.y;n+=(s.x+a.x)*h,r+=(s.y+a.y)*h,t+=3*h}return new Cell(n/t,r/t,0,e)}var Queue=_dereq_("tinyqueue"),Point=_dereq_("point-geometry"),distToSegmentSquared=_dereq_("./intersection_tests").distToSegmentSquared;module.exports=function(e,t,n){t=t||1;for(var r,o,i,l,u=e[0],s=0;s<u.length;s++){var a=u[s];(!s||a.x<r)&&(r=a.x),(!s||a.y<o)&&(o=a.y),(!s||a.x>i)&&(i=a.x),(!s||a.y>l)&&(l=a.y)}var h=i-r,p=l-o,y=Math.min(h,p),x=y/2,d=new Queue(null,compareMax);if(0===y)return[r,o];for(var g=r;g<i;g+=y)for(var f=o;f<l;f+=y)d.push(new Cell(g+x,f+x,x,e));for(var m=getCentroidCell(e),c=d.length;d.length;){var v=d.pop();(v.d>m.d||!m.d)&&(m=v,n&&console.log("found best %d after %d probes",Math.round(1e4*v.d)/1e4,c)),v.max-m.d<=t||(x=v.h/2,d.push(new Cell(v.p.x-x,v.p.y-x,x,e)),d.push(new Cell(v.p.x+x,v.p.y-x,x,e)),d.push(new Cell(v.p.x-x,v.p.y+x,x,e)),d.push(new Cell(v.p.x+x,v.p.y+x,x,e)),c+=4)}return n&&(console.log("num probes: "+c),console.log("best distance: "+m.d)),m.p};
},{"./intersection_tests":207,"point-geometry":26,"tinyqueue":30}],204:[function(_dereq_,module,exports){
"use strict";var WorkerPool=_dereq_("./worker_pool"),globalWorkerPool;module.exports=function(){return globalWorkerPool||(globalWorkerPool=new WorkerPool),globalWorkerPool};
},{"./worker_pool":217}],205:[function(_dereq_,module,exports){
"use strict";function Glyphs(a,e){this.stacks=a.readFields(readFontstacks,[],e)}function readFontstacks(a,e,r){if(1===a){var t=r.readMessage(readFontstack,{glyphs:{}});e.push(t)}}function readFontstack(a,e,r){if(1===a)e.name=r.readString();else if(2===a)e.range=r.readString();else if(3===a){var t=r.readMessage(readGlyph,{});e.glyphs[t.id]=t}}function readGlyph(a,e,r){1===a?e.id=r.readVarint():2===a?e.bitmap=r.readBytes():3===a?e.width=r.readVarint():4===a?e.height=r.readVarint():5===a?e.left=r.readSVarint():6===a?e.top=r.readSVarint():7===a&&(e.advance=r.readVarint())}module.exports=Glyphs;
},{}],206:[function(_dereq_,module,exports){
"use strict";function interpolate(t,e,n){return t*(1-n)+e*n}module.exports=interpolate,interpolate.number=interpolate,interpolate.vec2=function(t,e,n){return[interpolate(t[0],e[0],n),interpolate(t[1],e[1],n)]},interpolate.color=function(t,e,n){return[interpolate(t[0],e[0],n),interpolate(t[1],e[1],n),interpolate(t[2],e[2],n),interpolate(t[3],e[3],n)]},interpolate.array=function(t,e,n){return t.map(function(t,r){return interpolate(t,e[r],n)})};
},{}],207:[function(_dereq_,module,exports){
"use strict";function polygonIntersectsPolygon(n,t){for(var e=0;e<n.length;e++)if(polygonContainsPoint(t,n[e]))return!0;for(var r=0;r<t.length;r++)if(polygonContainsPoint(n,t[r]))return!0;return!!lineIntersectsLine(n,t)}function multiPolygonIntersectsBufferedMultiPoint(n,t,e){for(var r=0;r<n.length;r++)for(var o=n[r],i=0;i<t.length;i++)for(var l=t[i],u=0;u<l.length;u++){var s=l[u];if(polygonContainsPoint(o,s))return!0;if(pointIntersectsBufferedLine(s,o,e))return!0}return!1}function multiPolygonIntersectsMultiPolygon(n,t){if(1===n.length&&1===n[0].length)return multiPolygonContainsPoint(t,n[0][0]);for(var e=0;e<t.length;e++)for(var r=t[e],o=0;o<r.length;o++)if(multiPolygonContainsPoint(n,r[o]))return!0;for(var i=0;i<n.length;i++){for(var l=n[i],u=0;u<l.length;u++)if(multiPolygonContainsPoint(t,l[u]))return!0;for(var s=0;s<t.length;s++)if(lineIntersectsLine(l,t[s]))return!0}return!1}function multiPolygonIntersectsBufferedMultiLine(n,t,e){for(var r=0;r<t.length;r++)for(var o=t[r],i=0;i<n.length;i++){var l=n[i];if(l.length>=3)for(var u=0;u<o.length;u++)if(polygonContainsPoint(l,o[u]))return!0;if(lineIntersectsBufferedLine(l,o,e))return!0}return!1}function lineIntersectsBufferedLine(n,t,e){if(n.length>1){if(lineIntersectsLine(n,t))return!0;for(var r=0;r<t.length;r++)if(pointIntersectsBufferedLine(t[r],n,e))return!0}for(var o=0;o<n.length;o++)if(pointIntersectsBufferedLine(n[o],t,e))return!0;return!1}function lineIntersectsLine(n,t){if(0===n.length||0===t.length)return!1;for(var e=0;e<n.length-1;e++)for(var r=n[e],o=n[e+1],i=0;i<t.length-1;i++){var l=t[i],u=t[i+1];if(lineSegmentIntersectsLineSegment(r,o,l,u))return!0}return!1}function lineSegmentIntersectsLineSegment(n,t,e,r){return isCounterClockwise(n,e,r)!==isCounterClockwise(t,e,r)&&isCounterClockwise(n,t,e)!==isCounterClockwise(n,t,r)}function pointIntersectsBufferedLine(n,t,e){var r=e*e;if(1===t.length)return n.distSqr(t[0])<r;for(var o=1;o<t.length;o++){var i=t[o-1],l=t[o];if(distToSegmentSquared(n,i,l)<r)return!0}return!1}function distToSegmentSquared(n,t,e){var r=t.distSqr(e);if(0===r)return n.distSqr(t);var o=((n.x-t.x)*(e.x-t.x)+(n.y-t.y)*(e.y-t.y))/r;return o<0?n.distSqr(t):o>1?n.distSqr(e):n.distSqr(e.sub(t)._mult(o)._add(t))}function multiPolygonContainsPoint(n,t){for(var e,r,o,i=!1,l=0;l<n.length;l++){e=n[l];for(var u=0,s=e.length-1;u<e.length;s=u++)r=e[u],o=e[s],r.y>t.y!=o.y>t.y&&t.x<(o.x-r.x)*(t.y-r.y)/(o.y-r.y)+r.x&&(i=!i)}return i}function polygonContainsPoint(n,t){for(var e=!1,r=0,o=n.length-1;r<n.length;o=r++){var i=n[r],l=n[o];i.y>t.y!=l.y>t.y&&t.x<(l.x-i.x)*(t.y-i.y)/(l.y-i.y)+i.x&&(e=!e)}return e}var isCounterClockwise=_dereq_("./util").isCounterClockwise;module.exports={multiPolygonIntersectsBufferedMultiPoint:multiPolygonIntersectsBufferedMultiPoint,multiPolygonIntersectsMultiPolygon:multiPolygonIntersectsMultiPolygon,multiPolygonIntersectsBufferedMultiLine:multiPolygonIntersectsBufferedMultiLine,polygonIntersectsPolygon:polygonIntersectsPolygon,distToSegmentSquared:distToSegmentSquared};
},{"./util":214}],208:[function(_dereq_,module,exports){
"use strict";var unicodeBlockLookup={"Latin-1 Supplement":function(n){return n>=128&&n<=255},"Hangul Jamo":function(n){return n>=4352&&n<=4607},"Unified Canadian Aboriginal Syllabics":function(n){return n>=5120&&n<=5759},"Unified Canadian Aboriginal Syllabics Extended":function(n){return n>=6320&&n<=6399},"General Punctuation":function(n){return n>=8192&&n<=8303},"Letterlike Symbols":function(n){return n>=8448&&n<=8527},"Number Forms":function(n){return n>=8528&&n<=8591},"Miscellaneous Technical":function(n){return n>=8960&&n<=9215},"Control Pictures":function(n){return n>=9216&&n<=9279},"Optical Character Recognition":function(n){return n>=9280&&n<=9311},"Enclosed Alphanumerics":function(n){return n>=9312&&n<=9471},"Geometric Shapes":function(n){return n>=9632&&n<=9727},"Miscellaneous Symbols":function(n){return n>=9728&&n<=9983},"Miscellaneous Symbols and Arrows":function(n){return n>=11008&&n<=11263},"CJK Radicals Supplement":function(n){return n>=11904&&n<=12031},"Kangxi Radicals":function(n){return n>=12032&&n<=12255},"Ideographic Description Characters":function(n){return n>=12272&&n<=12287},"CJK Symbols and Punctuation":function(n){return n>=12288&&n<=12351},Hiragana:function(n){return n>=12352&&n<=12447},Katakana:function(n){return n>=12448&&n<=12543},Bopomofo:function(n){return n>=12544&&n<=12591},"Hangul Compatibility Jamo":function(n){return n>=12592&&n<=12687},Kanbun:function(n){return n>=12688&&n<=12703},"Bopomofo Extended":function(n){return n>=12704&&n<=12735},"CJK Strokes":function(n){return n>=12736&&n<=12783},"Katakana Phonetic Extensions":function(n){return n>=12784&&n<=12799},"Enclosed CJK Letters and Months":function(n){return n>=12800&&n<=13055},"CJK Compatibility":function(n){return n>=13056&&n<=13311},"CJK Unified Ideographs Extension A":function(n){return n>=13312&&n<=19903},"Yijing Hexagram Symbols":function(n){return n>=19904&&n<=19967},"CJK Unified Ideographs":function(n){return n>=19968&&n<=40959},"Yi Syllables":function(n){return n>=40960&&n<=42127},"Yi Radicals":function(n){return n>=42128&&n<=42191},"Hangul Jamo Extended-A":function(n){return n>=43360&&n<=43391},"Hangul Syllables":function(n){return n>=44032&&n<=55215},"Hangul Jamo Extended-B":function(n){return n>=55216&&n<=55295},"Private Use Area":function(n){return n>=57344&&n<=63743},"CJK Compatibility Ideographs":function(n){return n>=63744&&n<=64255},"Vertical Forms":function(n){return n>=65040&&n<=65055},"CJK Compatibility Forms":function(n){return n>=65072&&n<=65103},"Small Form Variants":function(n){return n>=65104&&n<=65135},"Halfwidth and Fullwidth Forms":function(n){return n>=65280&&n<=65519}};module.exports=unicodeBlockLookup;
},{}],209:[function(_dereq_,module,exports){
"use strict";var LRUCache=function(t,e){this.max=t,this.onRemove=e,this.reset()};LRUCache.prototype.reset=function(){var t=this;for(var e in t.data)t.onRemove(t.data[e]);return this.data={},this.order=[],this},LRUCache.prototype.add=function(t,e){if(this.has(t))this.order.splice(this.order.indexOf(t),1),this.data[t]=e,this.order.push(t);else if(this.data[t]=e,this.order.push(t),this.order.length>this.max){var r=this.get(this.order[0]);r&&this.onRemove(r)}return this},LRUCache.prototype.has=function(t){return t in this.data},LRUCache.prototype.keys=function(){return this.order},LRUCache.prototype.get=function(t){if(!this.has(t))return null;var e=this.data[t];return delete this.data[t],this.order.splice(this.order.indexOf(t),1),e},LRUCache.prototype.getWithoutRemoving=function(t){if(!this.has(t))return null;var e=this.data[t];return e},LRUCache.prototype.remove=function(t){if(!this.has(t))return this;var e=this.data[t];return delete this.data[t],this.onRemove(e),this.order.splice(this.order.indexOf(t),1),this},LRUCache.prototype.setMaxSize=function(t){var e=this;for(this.max=t;this.order.length>this.max;){var r=e.get(e.order[0]);r&&e.onRemove(r)}return this},module.exports=LRUCache;
},{}],210:[function(_dereq_,module,exports){
"use strict";function makeAPIURL(r,e){var t=parseUrl(config.API_URL);if(r.protocol=t.protocol,r.authority=t.authority,!config.REQUIRE_ACCESS_TOKEN)return formatUrl(r);if(e=e||config.ACCESS_TOKEN,!e)throw new Error("An API access token is required to use Mapbox GL. "+help);if("s"===e[0])throw new Error("Use a public access token (pk.*) with Mapbox GL, not a secret access token (sk.*). "+help);return r.params.push("access_token="+e),formatUrl(r)}function isMapboxURL(r){return 0===r.indexOf("mapbox:")}function replaceTempAccessToken(r){for(var e=0;e<r.length;e++)0===r[e].indexOf("access_token=tk.")&&(r[e]="access_token="+(config.ACCESS_TOKEN||""))}function parseUrl(r){var e=r.match(urlRe);if(!e)throw new Error("Unable to parse URL object");return{protocol:e[1],authority:e[2],path:e[3]||"/",params:e[4]?e[4].split("&"):[]}}function formatUrl(r){var e=r.params.length?"?"+r.params.join("&"):"";return r.protocol+"://"+r.authority+r.path+e}var config=_dereq_("./config"),browser=_dereq_("./browser"),help="See https://www.mapbox.com/api-documentation/#access-tokens";exports.isMapboxURL=isMapboxURL,exports.normalizeStyleURL=function(r,e){if(!isMapboxURL(r))return r;var t=parseUrl(r);return t.path="/styles/v1"+t.path,makeAPIURL(t,e)},exports.normalizeGlyphsURL=function(r,e){if(!isMapboxURL(r))return r;var t=parseUrl(r);return t.path="/fonts/v1"+t.path,makeAPIURL(t,e)},exports.normalizeSourceURL=function(r,e){if(!isMapboxURL(r))return r;var t=parseUrl(r);return t.path="/v4/"+t.authority+".json",t.params.push("secure"),makeAPIURL(t,e)},exports.normalizeSpriteURL=function(r,e,t,o){var a=parseUrl(r);return isMapboxURL(r)?(a.path="/styles/v1"+a.path+"/sprite"+e+t,makeAPIURL(a,o)):(a.path+=""+e+t,formatUrl(a))};var imageExtensionRe=/(\.(png|jpg)\d*)(?=$)/;exports.normalizeTileURL=function(r,e,t){if(!e||!isMapboxURL(e))return r;var o=parseUrl(r),a=browser.devicePixelRatio>=2||512===t?"@2x":"",s=browser.supportsWebp?".webp":"$1";return o.path=o.path.replace(imageExtensionRe,""+a+s),replaceTempAccessToken(o.params),formatUrl(o)};var urlRe=/^(\w+):\/\/([^\/?]+)(\/[^?]+)?\??(.+)?/;
},{"./browser":194,"./config":198}],211:[function(_dereq_,module,exports){
"use strict";var isChar=_dereq_("./is_char_in_unicode_block");module.exports.allowsIdeographicBreaking=function(a){for(var i=0,r=a;i<r.length;i+=1){var s=r[i];if(!exports.charAllowsIdeographicBreaking(s.charCodeAt(0)))return!1}return!0},module.exports.allowsVerticalWritingMode=function(a){for(var i=0,r=a;i<r.length;i+=1){var s=r[i];if(exports.charHasUprightVerticalOrientation(s.charCodeAt(0)))return!0}return!1},module.exports.charAllowsIdeographicBreaking=function(a){return!(a<11904)&&(!!isChar["Bopomofo Extended"](a)||(!!isChar.Bopomofo(a)||(!!isChar["CJK Compatibility Forms"](a)||(!!isChar["CJK Compatibility Ideographs"](a)||(!!isChar["CJK Compatibility"](a)||(!!isChar["CJK Radicals Supplement"](a)||(!!isChar["CJK Strokes"](a)||(!!isChar["CJK Symbols and Punctuation"](a)||(!!isChar["CJK Unified Ideographs Extension A"](a)||(!!isChar["CJK Unified Ideographs"](a)||(!!isChar["Enclosed CJK Letters and Months"](a)||(!!isChar["Halfwidth and Fullwidth Forms"](a)||(!!isChar.Hiragana(a)||(!!isChar["Ideographic Description Characters"](a)||(!!isChar["Kangxi Radicals"](a)||(!!isChar["Katakana Phonetic Extensions"](a)||(!!isChar.Katakana(a)||(!!isChar["Vertical Forms"](a)||(!!isChar["Yi Radicals"](a)||!!isChar["Yi Syllables"](a))))))))))))))))))))},exports.charHasUprightVerticalOrientation=function(a){return 746===a||747===a||!(a<4352)&&(!!isChar["Bopomofo Extended"](a)||(!!isChar.Bopomofo(a)||(!(!isChar["CJK Compatibility Forms"](a)||a>=65097&&a<=65103)||(!!isChar["CJK Compatibility Ideographs"](a)||(!!isChar["CJK Compatibility"](a)||(!!isChar["CJK Radicals Supplement"](a)||(!!isChar["CJK Strokes"](a)||(!(!isChar["CJK Symbols and Punctuation"](a)||a>=12296&&a<=12305||a>=12308&&a<=12319||12336===a)||(!!isChar["CJK Unified Ideographs Extension A"](a)||(!!isChar["CJK Unified Ideographs"](a)||(!!isChar["Enclosed CJK Letters and Months"](a)||(!!isChar["Hangul Compatibility Jamo"](a)||(!!isChar["Hangul Jamo Extended-A"](a)||(!!isChar["Hangul Jamo Extended-B"](a)||(!!isChar["Hangul Jamo"](a)||(!!isChar["Hangul Syllables"](a)||(!!isChar.Hiragana(a)||(!!isChar["Ideographic Description Characters"](a)||(!!isChar.Kanbun(a)||(!!isChar["Kangxi Radicals"](a)||(!!isChar["Katakana Phonetic Extensions"](a)||(!(!isChar.Katakana(a)||12540===a)||(!(!isChar["Halfwidth and Fullwidth Forms"](a)||65288===a||65289===a||65293===a||a>=65306&&a<=65310||65339===a||65341===a||65343===a||a>=65371&&a<=65503||65507===a||a>=65512&&a<=65519)||(!(!isChar["Small Form Variants"](a)||a>=65112&&a<=65118||a>=65123&&a<=65126)||(!!isChar["Unified Canadian Aboriginal Syllabics"](a)||(!!isChar["Unified Canadian Aboriginal Syllabics Extended"](a)||(!!isChar["Vertical Forms"](a)||(!!isChar["Yijing Hexagram Symbols"](a)||(!!isChar["Yi Syllables"](a)||!!isChar["Yi Radicals"](a))))))))))))))))))))))))))))))},exports.charHasNeutralVerticalOrientation=function(a){return!(!isChar["Latin-1 Supplement"](a)||167!==a&&169!==a&&174!==a&&177!==a&&188!==a&&189!==a&&190!==a&&215!==a&&247!==a)||(!(!isChar["General Punctuation"](a)||8214!==a&&8224!==a&&8225!==a&&8240!==a&&8241!==a&&8251!==a&&8252!==a&&8258!==a&&8263!==a&&8264!==a&&8265!==a&&8273!==a)||(!!isChar["Letterlike Symbols"](a)||(!!isChar["Number Forms"](a)||(!(!isChar["Miscellaneous Technical"](a)||!(a>=8960&&a<=8967||a>=8972&&a<=8991||a>=8996&&a<=9e3||9003===a||a>=9085&&a<=9114||a>=9150&&a<=9165||9167===a||a>=9169&&a<=9179||a>=9186&&a<=9215))||(!(!isChar["Control Pictures"](a)||9251===a)||(!!isChar["Optical Character Recognition"](a)||(!!isChar["Enclosed Alphanumerics"](a)||(!!isChar["Geometric Shapes"](a)||(!(!isChar["Miscellaneous Symbols"](a)||a>=9754&&a<=9759)||(!(!isChar["Miscellaneous Symbols and Arrows"](a)||!(a>=11026&&a<=11055||a>=11088&&a<=11097||a>=11192&&a<=11243))||(!!isChar["CJK Symbols and Punctuation"](a)||(!!isChar.Katakana(a)||(!!isChar["Private Use Area"](a)||(!!isChar["CJK Compatibility Forms"](a)||(!!isChar["Small Form Variants"](a)||(!!isChar["Halfwidth and Fullwidth Forms"](a)||(8734===a||8756===a||8757===a||a>=9984&&a<=10087||a>=10102&&a<=10131||65532===a||65533===a)))))))))))))))))},exports.charHasRotatedVerticalOrientation=function(a){return!(exports.charHasUprightVerticalOrientation(a)||exports.charHasNeutralVerticalOrientation(a))};
},{"./is_char_in_unicode_block":208}],212:[function(_dereq_,module,exports){
"use strict";function createStructArrayType(t){var e=JSON.stringify(t);if(structArrayTypeCache[e])return structArrayTypeCache[e];var r=void 0===t.alignment?1:t.alignment,i=0,n=0,a=["Uint8"],o=t.members.map(function(t){a.indexOf(t.type)<0&&a.push(t.type);var e=sizeOf(t.type),o=i=align(i,Math.max(r,e)),s=t.components||1;return n=Math.max(n,e),i+=e*s,{name:t.name,type:t.type,components:s,offset:o}}),s=align(i,Math.max(n,r)),p=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Struct);p.prototype.alignment=r,p.prototype.size=s;for(var y=0,c=o;y<c.length;y+=1)for(var h=c[y],u=0;u<h.components;u++){var f=h.name+(1===h.components?"":u);Object.defineProperty(p.prototype,f,{get:createGetter(h,u),set:createSetter(h,u)})}var m=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(StructArray);return m.prototype.members=o,m.prototype.StructType=p,m.prototype.bytesPerElement=s,m.prototype.emplaceBack=createEmplaceBack(o,s),m.prototype._usedTypes=a,structArrayTypeCache[e]=m,m}function align(t,e){return Math.ceil(t/e)*e}function sizeOf(t){return viewTypes[t].BYTES_PER_ELEMENT}function getArrayViewName(t){return t.toLowerCase()}function createEmplaceBack(t,e){for(var r=[],i=[],n="var i = this.length;\nthis.resize(this.length + 1);\n",a=0,o=t;a<o.length;a+=1){var s=o[a],p=sizeOf(s.type);r.indexOf(p)<0&&(r.push(p),n+="var o"+p.toFixed(0)+" = i * "+(e/p).toFixed(0)+";\n");for(var y=0;y<s.components;y++){var c="v"+i.length,h="o"+p.toFixed(0)+" + "+(s.offset/p+y).toFixed(0);n+="this."+getArrayViewName(s.type)+"["+h+"] = "+c+";\n",i.push(c)}}return n+="return i;",new Function(i.toString(),n)}function createMemberComponentString(t,e){var r="this._pos"+sizeOf(t.type).toFixed(0),i=(t.offset/sizeOf(t.type)+e).toFixed(0),n=r+" + "+i;return"this._structArray."+getArrayViewName(t.type)+"["+n+"]"}function createGetter(t,e){return new Function("return "+createMemberComponentString(t,e)+";")}function createSetter(t,e){return new Function("x",createMemberComponentString(t,e)+" = x;")}module.exports=createStructArrayType;var viewTypes={Int8:Int8Array,Uint8:Uint8Array,Uint8Clamped:Uint8ClampedArray,Int16:Int16Array,Uint16:Uint16Array,Int32:Int32Array,Uint32:Uint32Array,Float32:Float32Array,Float64:Float64Array},Struct=function(t,e){this._structArray=t,this._pos1=e*this.size,this._pos2=this._pos1/2,this._pos4=this._pos1/4,this._pos8=this._pos1/8},DEFAULT_CAPACITY=128,RESIZE_MULTIPLIER=5,StructArray=function(t){this.isTransferred=!1,void 0!==t?(this.arrayBuffer=t.arrayBuffer,this.length=t.length,this.capacity=this.arrayBuffer.byteLength/this.bytesPerElement,this._refreshViews()):(this.capacity=-1,this.resize(0))};StructArray.serialize=function(){return{members:this.prototype.members,alignment:this.prototype.StructType.prototype.alignment,bytesPerElement:this.prototype.bytesPerElement}},StructArray.prototype.serialize=function(t){return this._trim(),t&&(this.isTransferred=!0,t.push(this.arrayBuffer)),{length:this.length,arrayBuffer:this.arrayBuffer}},StructArray.prototype.get=function(t){return new this.StructType(this,t)},StructArray.prototype._trim=function(){this.length!==this.capacity&&(this.capacity=this.length,this.arrayBuffer=this.arrayBuffer.slice(0,this.length*this.bytesPerElement),this._refreshViews())},StructArray.prototype.resize=function(t){if(this.length=t,t>this.capacity){this.capacity=Math.max(t,Math.floor(this.capacity*RESIZE_MULTIPLIER),DEFAULT_CAPACITY),this.arrayBuffer=new ArrayBuffer(this.capacity*this.bytesPerElement);var e=this.uint8;this._refreshViews(),e&&this.uint8.set(e)}},StructArray.prototype._refreshViews=function(){for(var t=this,e=0,r=t._usedTypes;e<r.length;e+=1){var i=r[e];t[getArrayViewName(i)]=new viewTypes[i](t.arrayBuffer)}},StructArray.prototype.toArray=function(t,e){for(var r=this,i=[],n=t;n<e;n++){var a=r.get(n);i.push(a)}return i};var structArrayTypeCache={};
},{}],213:[function(_dereq_,module,exports){
"use strict";function resolveTokens(e,n){return n.replace(/{([^{}]+)}/g,function(n,r){return r in e?e[r]:""})}module.exports=resolveTokens;
},{}],214:[function(_dereq_,module,exports){
"use strict";var UnitBezier=_dereq_("@mapbox/unitbezier"),Coordinate=_dereq_("../geo/coordinate"),Point=_dereq_("point-geometry");exports.easeCubicInOut=function(r){if(r<=0)return 0;if(r>=1)return 1;var e=r*r,t=e*r;return 4*(r<.5?t:3*(r-e)+t-.75)},exports.bezier=function(r,e,t,n){var o=new UnitBezier(r,e,t,n);return function(r){return o.solve(r)}},exports.ease=exports.bezier(.25,.1,.25,1),exports.clamp=function(r,e,t){return Math.min(t,Math.max(e,r))},exports.wrap=function(r,e,t){var n=t-e,o=((r-e)%n+n)%n+e;return o===e?t:o},exports.asyncAll=function(r,e,t){if(!r.length)return t(null,[]);var n=r.length,o=new Array(r.length),a=null;r.forEach(function(r,i){e(r,function(r,e){r&&(a=r),o[i]=e,0===--n&&t(a,o)})})},exports.values=function(r){var e=[];for(var t in r)e.push(r[t]);return e},exports.keysDifference=function(r,e){var t=[];for(var n in r)n in e||t.push(n);return t},exports.extend=function(r,e,t,n){for(var o=arguments,a=1;a<arguments.length;a++){var i=o[a];for(var u in i)r[u]=i[u]}return r},exports.pick=function(r,e){for(var t={},n=0;n<e.length;n++){var o=e[n];o in r&&(t[o]=r[o])}return t};var id=1;exports.uniqueId=function(){return id++},exports.bindAll=function(r,e){r.forEach(function(r){e[r]&&(e[r]=e[r].bind(e))})},exports.getCoordinatesCenter=function(r){for(var e=1/0,t=1/0,n=-(1/0),o=-(1/0),a=0;a<r.length;a++)e=Math.min(e,r[a].column),t=Math.min(t,r[a].row),n=Math.max(n,r[a].column),o=Math.max(o,r[a].row);var i=n-e,u=o-t,s=Math.max(i,u),c=Math.max(0,Math.floor(-Math.log(s)/Math.LN2));return new Coordinate((e+n)/2,(t+o)/2,0).zoomTo(c)},exports.endsWith=function(r,e){return r.indexOf(e,r.length-e.length)!==-1},exports.mapObject=function(r,e,t){var n=this,o={};for(var a in r)o[a]=e.call(t||n,r[a],a,r);return o},exports.filterObject=function(r,e,t){var n=this,o={};for(var a in r)e.call(t||n,r[a],a,r)&&(o[a]=r[a]);return o},exports.deepEqual=function(r,e){if(Array.isArray(r)){if(!Array.isArray(e)||r.length!==e.length)return!1;for(var t=0;t<r.length;t++)if(!exports.deepEqual(r[t],e[t]))return!1;return!0}if("object"==typeof r&&null!==r&&null!==e){if("object"!=typeof e)return!1;var n=Object.keys(r);if(n.length!==Object.keys(e).length)return!1;for(var o in r)if(!exports.deepEqual(r[o],e[o]))return!1;return!0}return r===e},exports.clone=function(r){return Array.isArray(r)?r.map(exports.clone):"object"==typeof r&&r?exports.mapObject(r,exports.clone):r},exports.arraysIntersect=function(r,e){for(var t=0;t<r.length;t++)if(e.indexOf(r[t])>=0)return!0;return!1};var warnOnceHistory={};exports.warnOnce=function(r){warnOnceHistory[r]||("undefined"!=typeof console&&console.warn(r),warnOnceHistory[r]=!0)},exports.isCounterClockwise=function(r,e,t){return(t.y-r.y)*(e.x-r.x)>(e.y-r.y)*(t.x-r.x)},exports.calculateSignedArea=function(r){for(var e=0,t=0,n=r.length,o=n-1,a=void 0,i=void 0;t<n;o=t++)a=r[t],i=r[o],e+=(i.x-a.x)*(a.y+i.y);return e},exports.isClosedPolygon=function(r){if(r.length<4)return!1;var e=r[0],t=r[r.length-1];return!(Math.abs(e.x-t.x)>0||Math.abs(e.y-t.y)>0)&&Math.abs(exports.calculateSignedArea(r))>.01},exports.sphericalToCartesian=function(r){var e=r[0],t=r[1],n=r[2];return t+=90,t*=Math.PI/180,n*=Math.PI/180,[e*Math.cos(t)*Math.sin(n),e*Math.sin(t)*Math.sin(n),e*Math.cos(n)]},exports.parseCacheControl=function(r){var e=/(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,t={};if(r.replace(e,function(r,e,n,o){var a=n||o;return t[e]=!a||a.toLowerCase(),""}),t["max-age"]){var n=parseInt(t["max-age"],10);isNaN(n)?delete t["max-age"]:t["max-age"]=n}return t};
},{"../geo/coordinate":61,"@mapbox/unitbezier":3,"point-geometry":26}],215:[function(_dereq_,module,exports){
"use strict";var Feature=function(e,t,r,o){this.type="Feature",this._vectorTileFeature=e,e._z=t,e._x=r,e._y=o,this.properties=e.properties,null!=e.id&&(this.id=e.id)},prototypeAccessors={geometry:{}};prototypeAccessors.geometry.get=function(){return void 0===this._geometry&&(this._geometry=this._vectorTileFeature.toGeoJSON(this._vectorTileFeature._x,this._vectorTileFeature._y,this._vectorTileFeature._z).geometry),this._geometry},prototypeAccessors.geometry.set=function(e){this._geometry=e},Feature.prototype.toJSON=function(){var e=this,t={geometry:this.geometry};for(var r in e)"_geometry"!==r&&"_vectorTileFeature"!==r&&(t[r]=e[r]);return t},Object.defineProperties(Feature.prototype,prototypeAccessors),module.exports=Feature;
},{}],216:[function(_dereq_,module,exports){
"use strict";var scriptDetection=_dereq_("./script_detection");module.exports=function(t){for(var o="",e=0;e<t.length;e++){var r=t.charCodeAt(e+1)||null,l=t.charCodeAt(e-1)||null,i=(!r||!scriptDetection.charHasRotatedVerticalOrientation(r)||module.exports.lookup[t[e+1]])&&(!l||!scriptDetection.charHasRotatedVerticalOrientation(l)||module.exports.lookup[t[e-1]]);o+=i&&module.exports.lookup[t[e]]?module.exports.lookup[t[e]]:t[e]}return o},module.exports.lookup={"!":"︕","#":"＃",$:"＄","%":"％","&":"＆","(":"︵",")":"︶","*":"＊","+":"＋",",":"︐","-":"︲",".":"・","/":"／",":":"︓",";":"︔","<":"︿","=":"＝",">":"﹀","?":"︖","@":"＠","[":"﹇","\\":"＼","]":"﹈","^":"＾",_:"︳","`":"｀","{":"︷","|":"―","}":"︸","~":"～","¢":"￠","£":"￡","¥":"￥","¦":"￤","¬":"￢","¯":"￣","–":"︲","—":"︱","‘":"﹃","’":"﹄","“":"﹁","”":"﹂","…":"︙","‧":"・","₩":"￦","、":"︑","。":"︒","〈":"︿","〉":"﹀","《":"︽","》":"︾","「":"﹁","」":"﹂","『":"﹃","』":"﹄","【":"︻","】":"︼","〔":"︹","〕":"︺","〖":"︗","〗":"︘","！":"︕","（":"︵","）":"︶","，":"︐","－":"︲","．":"・","：":"︓","；":"︔","＜":"︿","＞":"﹀","？":"︖","［":"﹇","］":"﹈","＿":"︳","｛":"︷","｜":"―","｝":"︸","｟":"︵","｠":"︶","｡":"︒","｢":"﹁","｣":"﹂"};
},{"./script_detection":211}],217:[function(_dereq_,module,exports){
"use strict";var WebWorker=_dereq_("./web_worker"),WorkerPool=function(){this.active={}};WorkerPool.prototype.acquire=function(r){var e=this;if(!this.workers){var o=_dereq_("../").workerCount;for(this.workers=[];this.workers.length<o;)e.workers.push(new WebWorker)}return this.active[r]=!0,this.workers.slice()},WorkerPool.prototype.release=function(r){delete this.active[r],0===Object.keys(this.active).length&&(this.workers.forEach(function(r){r.terminate()}),this.workers=null)},module.exports=WorkerPool;
},{"../":65,"./web_worker":195}]},{},[65])(65)
});


//# sourceMappingURL=mapbox-gl.js.map
L.MapboxGL = L.Layer.extend({
    options: {
      updateInterval: 32
    },

    initialize: function (options) {
        L.setOptions(this, options);

        if (options.accessToken) {
            mapboxgl.accessToken = options.accessToken;
        } else {
            throw new Error('You should provide a Mapbox GL access token as a token option.');
        }

         /**
         * Create a version of `fn` that only fires once every `time` millseconds.
         *
         * @param {Function} fn the function to be throttled
         * @param {number} time millseconds required between function calls
         * @param {*} context the value of `this` with which the function is called
         * @returns {Function} debounced function
         * @private
         */
        var throttle = function (fn, time, context) {
            var lock, args, wrapperFn, later;

            later = function () {
                // reset lock and call if queued
                lock = false;
                if (args) {
                    wrapperFn.apply(context, args);
                    args = false;
                }
            };

            wrapperFn = function () {
                if (lock) {
                    // called too soon, queue to call later
                    args = arguments;

                } else {
                    // call and lock until later
                    fn.apply(context, arguments);
                    setTimeout(later, time);
                    lock = true;
                }
            };

            return wrapperFn;
        };

        // setup throttling the update event when panning
        this._throttledUpdate = throttle(L.Util.bind(this._update, this), this.options.updateInterval);
    },

    onAdd: function (map) {
        if (!this._glContainer) {
            this._initContainer();
        }

        map._panes.tilePane.appendChild(this._glContainer);

        this._initGL();

        this._offset = this._map.containerPointToLayerPoint([0, 0]);

        // work around https://github.com/mapbox/mapbox-gl-leaflet/issues/47
        if (map.options.zoomAnimation) {
            L.DomEvent.on(map._proxy, L.DomUtil.TRANSITION_END, this._transitionEnd, this);
        }
    },

    onRemove: function (map) {
        if (this._map.options.zoomAnimation) {
            L.DomEvent.off(this._map._proxy, L.DomUtil.TRANSITION_END, this._transitionEnd, this);
        }

        map.getPanes().tilePane.removeChild(this._glContainer);
        this._glMap.remove();
        this._glMap = null;
    },

    getEvents: function () {
        return {
            move: this._throttledUpdate, // sensibly throttle updating while panning
            zoomanim: this._animateZoom, // applys the zoom animation to the <canvas>
            zoom: this._pinchZoom, // animate every zoom event for smoother pinch-zooming
            zoomstart: this._zoomStart, // flag starting a zoom to disable panning
            zoomend: this._zoomEnd
        };
    },

    _initContainer: function () {
        var container = this._glContainer = L.DomUtil.create('div', 'leaflet-gl-layer');

        var size = this._map.getSize();
        container.style.width  = size.x + 'px';
        container.style.height = size.y + 'px';
    },

    _initGL: function () {
        var center = this._map.getCenter();

        var options = L.extend({}, this.options, {
            container: this._glContainer,
            interactive: false,
            center: [center.lng, center.lat],
            zoom: this._map.getZoom() - 1,
            attributionControl: false
        });

        this._glMap = new mapboxgl.Map(options);

        // allow GL base map to pan beyond min/max latitudes
        this._glMap.transform.latRange = null;

        if (this._glMap._canvas.canvas) {
            // older versions of mapbox-gl surfaced the canvas differently
            this._glMap._actualCanvas = this._glMap._canvas.canvas;
        } else {
            this._glMap._actualCanvas = this._glMap._canvas;
        }

        // treat child <canvas> element like L.ImageOverlay
        L.DomUtil.addClass(this._glMap._actualCanvas, 'leaflet-image-layer');
        L.DomUtil.addClass(this._glMap._actualCanvas, 'leaflet-zoom-animated');

    },

    _update: function (e) {
        // update the offset so we can correct for it later when we zoom
        this._offset = this._map.containerPointToLayerPoint([0, 0]);

        if (this._zooming) {
          return;
        }

        var size = this._map.getSize(),
            container = this._glContainer,
            gl = this._glMap,
            topLeft = this._map.containerPointToLayerPoint([0, 0]);

        L.DomUtil.setPosition(container, topLeft);

        var center = this._map.getCenter();

        // gl.setView([center.lat, center.lng], this._map.getZoom() - 1, 0);
        // calling setView directly causes sync issues because it uses requestAnimFrame

        var tr = gl.transform;
        tr.center = mapboxgl.LngLat.convert([center.lng, center.lat]);
        tr.zoom = this._map.getZoom() - 1;

        if (gl.transform.width !== size.x || gl.transform.height !== size.y) {
            container.style.width  = size.x + 'px';
            container.style.height = size.y + 'px';
            if (gl._resize !== null && gl._resize !== undefined){
                gl._resize();
            } else {
                gl.resize();
            }
        } else {
            // older versions of mapbox-gl surfaced update publicly
            if (gl._update !== null && gl._update !== undefined){
                gl._update();
            } else {
                gl.update();
            }
        }
    },

    // update the map constantly during a pinch zoom
    _pinchZoom: function (e) {
      this._glMap.jumpTo({
        zoom: this._map.getZoom() - 1,
        center: this._map.getCenter()
      });
    },

    // borrowed from L.ImageOverlay https://github.com/Leaflet/Leaflet/blob/master/src/layer/ImageOverlay.js#L139-L144
    _animateZoom: function (e) {
      var scale = this._map.getZoomScale(e.zoom),
          offset = this._map._latLngToNewLayerPoint(this._map.getBounds().getNorthWest(), e.zoom, e.center);

      L.DomUtil.setTransform(this._glMap._actualCanvas, offset.subtract(this._offset), scale);
    },

    _zoomStart: function (e) {
      this._zooming = true;
    },

    _zoomEnd: function () {
      var scale = this._map.getZoomScale(this._map.getZoom()),
          offset = this._map._latLngToNewLayerPoint(this._map.getBounds().getNorthWest(), this._map.getZoom(), this._map.getCenter());

      L.DomUtil.setTransform(this._glMap._actualCanvas, offset.subtract(this._offset), scale);

      this._zooming = false;
    },

    _transitionEnd: function (e) {
      L.Util.requestAnimFrame(function () {
          var zoom = this._map.getZoom(),
          center = this._map.getCenter(),
          offset = this._map.latLngToContainerPoint(this._map.getBounds().getNorthWest());

          // reset the scale and offset
          L.DomUtil.setTransform(this._glMap._actualCanvas, offset, 1);

          // enable panning once the gl map is ready again
          this._glMap.once('moveend', L.Util.bind(function () {
              this._zoomEnd();
          }, this));

          // update the map position
          this._glMap.jumpTo({
              center: center,
              zoom: zoom - 1
          });
      }, this);
    }
});

L.mapboxGL = function (options) {
    return new L.MapboxGL(options);
};

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;( function( $, window, document, undefined ) {

	"use strict";

		// undefined is used here as the undefined global variable in ECMAScript 3 is
		// mutable (ie. it can be changed by someone else). undefined isn't really being
		// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
		// can no longer be modified.

		// window and document are passed through as local variables rather than global
		// as this (slightly) quickens the resolution process and can be more efficiently
		// minified (especially when both are regularly referenced in your plugin).

		// Create the defaults once
		var pluginName = "ctipWidget",
			defaults = {
				propertyName: "value"
			};


		// The actual plugin constructor
		function Plugin ( element, options ) {
			this.element = element;

			// jQuery has an extend method which merges the contents of two or
			// more objects, storing the result in the first object. The first object
			// is generally empty as we don't want to alter the default options for
			// future instances of the plugin
			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;

			// holds the leaflet map object
			this._map = null;

			// holds the layer data
			this._layerData = [];

			// holds the layer groups
			this._mapLayers = L.layerGroup();

			//holds the jquery layers object
			this._$layers = $(this.element).find(this.settings.layersSelector);

			this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend( Plugin.prototype, {
			init: function() {
				this.initMap();
				this.initLayers();
				this.bindLayers();
			},
			initMap: function( ) {
				
				var mapElem = $(this.element).find(this.settings.mapSelector)[0];
				this._map = L.map(mapElem).setView([this.settings.center.lat, this.settings.center.lng], this.settings.center.zoom);

				/*
				L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
					attribution: "CTIP",
					maxZoom: 18,
					id: "ctip"
				}).addTo(this._map);
				*/

				L.mapboxGL({
					accessToken: "no-token",
					style: this.settings.vectorStyleUrl
				}).addTo(this._map);

				this._mapLayers.addTo(this._map);
			},
			initLayers: function() {
				var _this = this;
				setTimeout(function() { // replace this with the actual ajax call

					// load this from ajax response data
					var layerData = [
						{ 
							"name": "steigers",
							"objects": [
								{"name": "foobar", "type": "point", "geo": [53.219383, 6.566502]},
								{"name": "foobar", "type": "point", "geo": [53.218383, 6.565502]}
							]
						}
					];

					// assign to global scope
					_this._layerData = layerData;
					
					$(_this._layerData).each(function() {
						var layer = this;
						_this.addLayerToPanel(layer);
					});
				}, 1000);
				
			},
			bindLayers: function() {
				var _this = this;
				$(document).on("click", ".layer [type=checkbox]", function() {
					var name = $(this).parents(".layer").data("name");
					if($(this).prop("checked")) {
						console.log("adding layer " + name + " to map");
						_this.addLayerToMap(name);
					} else {
						console.log("removing layer " + name + " from map");
						_this.removeLayerFromMap(name);
					}
				});
			},
			addLayerToPanel: function(layerData) {
				var $layer = $($(this.element).find(this.settings.layerTemplateSelector).html());
				
				$layer.attr("data-name", layerData.name);
				$layer.find("label").html(layerData.name);
				this._$layers.append($layer);
			},
			layerByName: function(name) {
				var layer;
				$(this._layerData).each(function() {
					if(this.name === name) {
						layer = this;
					}
				});
			
				return layer;
			},
			addLayerToMap: function(name) {
				var _this = this;
				var layer = _this.layerByName(name);
				var layerGroup = L.layerGroup();
				
				$(layer.objects).each(function() {
					var object = this;
					switch(object.type) {
						case "point":	
							var marker = L.marker([object.geo[0], object.geo[1]], {
								icon: L.divIcon({
									className: "ctip-icon ctip-icon-" + layer.name
								})
							});
							marker.bindPopup(object.name);
							layerGroup.addLayer(marker);
						break;
					}
				});

				layerGroup.name = name;
				layerGroup.addTo(_this._mapLayers);
			},
			removeLayerFromMap: function(name) {
				var _this = this;
				$(this._mapLayers.getLayers()).each(function() {
					var layerGroup = this;
					
					if(layerGroup.name === name) {
						_this._mapLayers.removeLayer(layerGroup);
					}
				});
			}
		} );

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function( options ) {
			return this.each( function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
					$.data( this, "plugin_" +
						pluginName, new Plugin( this, options ) );
				}
			} );
		};

} )( jQuery, window, document );
