(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cdc4da6e"],{"0bfb":function(t,e,n){"use strict";var i=n("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"11e9":function(t,e,n){var i=n("52a7"),o=n("4630"),a=n("6821"),r=n("6a99"),s=n("69a8"),c=n("c69a"),l=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?l:function(t,e){if(t=a(t),e=r(e,!0),c)try{return l(t,e)}catch(n){}if(s(t,e))return o(!i.f.call(t,e),t[e])}},"11eb":function(t,e,n){},"1f85":function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return s}),n.d(e,"c",function(){return l});var i=n("4660"),o=!1;if(!i["d"])try{var a={};Object.defineProperty(a,"passive",{get:function(){o=!0}}),window.addEventListener("test-passive",null,a)}catch(u){}function r(t,e,n,a){void 0===a&&(a=!1),i["d"]||t.addEventListener(e,n,!!o&&{capture:!1,passive:a})}function s(t,e,n){i["d"]||t.removeEventListener(e,n)}function c(t){t.stopPropagation()}function l(t,e){("boolean"!==typeof t.cancelable||t.cancelable)&&t.preventDefault(),e&&c(t)}},2546:function(t,e,n){},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"41af":function(t,e,n){"use strict";var i={zIndex:2e3,lockCount:0,stack:[],get top(){return this.stack[this.stack.length-1]}},o=n("7231"),a=n("6e6d");function r(t){return"string"===typeof t?document.querySelector(t):t()}function s(t){var e=t.afterPortal;return a["a"].extend({props:{getContainer:[String,Function]},watch:{getContainer:function(){this.portal()}},mounted:function(){this.getContainer&&this.portal()},methods:{portal:function(){var t,n=this.getContainer;n?t=r(n):this.$parent&&(t=this.$parent.$el),t&&t!==this.$el.parentNode&&t.appendChild(this.$el),e&&e.call(this)}}})}var c=n("1f85"),l=n("f9c5"),u=n("23c4"),h=n.n(u),f=n("10eb"),d=n("4660"),p=n("da98"),v=Object(f["a"])("overlay"),b=v[0],m=v[1];function g(t){Object(c["c"])(t,!0)}function y(t,e,n,i){var o=Object(l["a"])({zIndex:e.zIndex},e.customStyle);return Object(d["b"])(e.duration)&&(o.animationDuration=e.duration+"s"),t("transition",{attrs:{name:"van-fade"}},[t("div",h()([{directives:[{name:"show",value:e.visible}],style:o,class:[m(),e.className],on:{touchmove:g}},Object(p["b"])(i,!0)]))])}y.props={zIndex:Number,className:null,visible:Boolean,customStyle:Object,duration:{type:Number,default:null}};var O,w=b(y),S={className:"",customStyle:{}};function j(){if(i.top){var t=i.top.vm;t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}function k(){if(O||(O=Object(p["c"])(w,{on:{click:j}})),i.top){var t=i.top,e=t.vm,n=t.config,o=e.$el,a=o&&o.parentNode?o.parentNode:document.body;a&&a.appendChild(O.$el),Object(l["a"])(O,S,n,{visible:!0})}else O.visible=!1}function x(t,e){i.stack.some(function(e){return e.vm===t})||(i.stack.push({vm:t,config:e}),k())}function C(t){var e=i.stack;e.length&&(i.top.vm===t?(e.pop(),k()):i.stack=e.filter(function(e){return e.vm!==t}))}function B(t,e){void 0===e&&(e=window);var n=t;while(n&&"HTML"!==n.tagName&&"BODY"!==n.tagName&&1===n.nodeType&&n!==e){var i=window.getComputedStyle(n),o=i.overflowY;if("scroll"===o||"auto"===o)return n;n=n.parentNode}return e}n.d(e,"a",function(){return I});var I={mixins:[o["a"],s({afterPortal:function(){this.overlay&&k()}})],props:{value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[String,Number],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}},data:function(){return{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(t){var e=t?"open":"close";this.inited=this.inited||this.value,this[e](),this.$emit(e)},overlay:function(){this.renderOverlay()}},mounted:function(){this.value&&this.open()},activated:function(){this.value&&this.open()},beforeDestroy:function(){this.close(),this.getContainer&&this.$parent&&this.$parent.$el&&this.$parent.$el.appendChild(this.$el)},deactivated:function(){this.close()},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(i.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.lockScroll&&(Object(c["b"])(document,"touchstart",this.touchStart),Object(c["b"])(document,"touchmove",this.onTouchMove),i.lockCount||document.body.classList.add("van-overflow-hidden"),i.lockCount++))},close:function(){this.opened&&(this.lockScroll&&(i.lockCount--,Object(c["a"])(document,"touchstart",this.touchStart),Object(c["a"])(document,"touchmove",this.onTouchMove),i.lockCount||document.body.classList.remove("van-overflow-hidden")),this.opened=!1,C(this),this.$emit("input",!1))},onTouchMove:function(t){this.touchMove(t);var e=this.deltaY>0?"10":"01",n=B(t.target,this.$el),i=n.scrollHeight,o=n.offsetHeight,a=n.scrollTop,r="11";0===a?r=o>=i?"00":"01":a+o>=i&&(r="10"),"11"===r||"vertical"!==this.direction||parseInt(r,2)&parseInt(e,2)||Object(c["c"])(t,!0)},renderOverlay:function(){!this.$isServer&&this.value&&(this.overlay?x(this,{zIndex:i.zIndex++,duration:this.duration,className:this.overlayClass,customStyle:this.overlayStyle}):C(this),this.updateZIndex())},updateZIndex:function(){var t=this;this.$nextTick(function(){t.$el.style.zIndex=i.zIndex++})}}}},"44c3":function(t,e,n){},"47a5":function(t,e,n){},5400:function(t,e,n){},5816:function(t,e,n){"use strict";n("4e9f"),n("5cc58"),n("58bb"),n("44c3")},"5cc58":function(t,e,n){},"5dbc":function(t,e,n){var i=n("d3f4"),o=n("8b97").set;t.exports=function(t,e,n){var a,r=e.constructor;return r!==n&&"function"==typeof r&&(a=r.prototype)!==n.prototype&&i(a)&&o&&o(t,a),t}},"60af":function(t,e,n){"use strict";n("4e9f"),n("58bb")},6135:function(t,e,n){"use strict";var i=n("23c4"),o=n.n(i),a=n("10eb"),r=n("da98"),s=Object(a["a"])("cell-group"),c=s[0],l=s[1];function u(t,e,n,i){var a=t("div",o()([{class:[l(),{"van-hairline--top-bottom":e.border}]},Object(r["b"])(i,!0)]),[n.default&&n.default()]);return e.title?t("div",[t("div",{class:l("title")},[e.title]),a]):a}u.props={title:String,border:{type:Boolean,default:!0}},e["a"]=c(u)},"6b54":function(t,e,n){"use strict";n("3846");var i=n("cb7c"),o=n("0bfb"),a=n("9e1e"),r="toString",s=/./[r],c=function(t){n("2aba")(RegExp.prototype,r,t,!0)};n("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?c(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?o.call(t):void 0)}):s.name!=r&&c(function(){return s.call(this)})},"6b9b":function(t,e,n){"use strict";var i=n("ff64"),o=n.n(i);o.a},7231:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("6e6d"),o=10;function a(t,e){return t>e&&t>o?"horizontal":e>t&&e>o?"vertical":""}var r=i["a"].extend({data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var e=t.touches[0];this.deltaX=e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||a(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}})},7578:function(t,e,n){},"75c4":function(t,e,n){"use strict";var i=n("23c4"),o=n.n(i),a=n("10eb"),r=n("b189"),s="#c9c9c9",c=n("da98"),l=Object(a["a"])("loading"),u=l[0],h=l[1];function f(t,e){if("spinner"===e.type){for(var n=[],i=0;i<12;i++)n.push(t("i"));return n}return t("svg",{class:h("circular"),attrs:{viewBox:"25 25 50 50"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])}function d(t,e,n){if(n.default){var i=e.textSize&&{fontSize:Object(r["a"])(e.textSize)};return t("span",{class:h("text"),style:i},[n.default()])}}function p(t,e,n,i){var a=e.color,s=e.size,l=e.type,u={color:a};if(s){var p=Object(r["a"])(s);u.width=p,u.height=p}return t("div",o()([{class:h([l,{vertical:e.vertical}])},Object(c["b"])(i,!0)]),[t("span",{class:h("spinner",l),style:u},[f(t,e)]),d(t,e,n)])}p.props={size:[String,Number],textSize:[String,Number],vertical:Boolean,type:{type:String,default:"circular"},color:{type:String,default:s}};e["a"]=u(p)},"8b97":function(t,e,n){var i=n("d3f4"),o=n("cb7c"),a=function(t,e){if(o(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:a}},9093:function(t,e,n){var i=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,o)}},"9c9a":function(t,e,n){"use strict";n("4e9f"),n("58bb")},"9cec":function(t,e,n){"use strict";var i=n("c30e"),o=n.n(i);o.a},a097:function(t,e,n){},a33e:function(t,e,n){"use strict";var i=n("f9c5"),o=n("6e6d"),a=n("10eb"),r=n("4660"),s=n("41af"),c=n("acff"),l=n("75c4"),u=Object(a["a"])("toast"),h=u[0],f=u[1],d=h({mixins:[s["a"]],props:{icon:String,className:null,loadingType:String,forbidClick:Boolean,message:[String,Number],type:{type:String,default:"text"},position:{type:String,default:"middle"},lockScroll:{type:Boolean,default:!1}},data:function(){return{clickable:!1}},mounted:function(){this.toggleClickable()},destroyed:function(){this.toggleClickable()},watch:{value:function(){this.toggleClickable()},forbidClick:function(){this.toggleClickable()}},methods:{toggleClickable:function(){var t=this.value&&this.forbidClick;if(this.clickable!==t){this.clickable=t;var e=t?"add":"remove";document.body.classList[e]("van-toast--unclickable")}},onAfterEnter:function(){this.$emit("opened"),this.onOpened&&this.onOpened()},onAfterLeave:function(){this.$emit("closed")}},render:function(t){var e=this.type,n=this.icon,i=this.message,o=this.loadingType,a=n||"success"===e||"fail"===e;function s(){return a?t(c["a"],{class:f("icon"),attrs:{name:n||e}}):"loading"===e?t(l["a"],{class:f("loading"),attrs:{color:"white",type:o}}):void 0}function u(){if(Object(r["b"])(i)&&""!==i)return"html"===e?t("div",{class:f("text"),domProps:{innerHTML:i}}):t("div",{class:f("text")},[i])}return t("transition",{attrs:{name:"van-fade"},on:{afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[t("div",{directives:[{name:"show",value:this.value}],class:[f([this.position,{text:!a&&"loading"!==e}]),this.className]},[s(),u()])])}}),p={icon:"",type:"text",mask:!1,value:!0,message:"",className:"",onClose:null,onOpened:null,duration:3e3,position:"middle",forbidClick:!1,loadingType:void 0,getContainer:"body",overlayStyle:null},v=[],b=!1,m=Object(i["a"])({},p);function g(t){return Object(r["c"])(t)?t:{message:t}}function y(){if(r["d"])return{};if(!v.length||b){var t=new(o["a"].extend(d))({el:document.createElement("div")});v.push(t)}return v[v.length-1]}function O(t){return t=Object(i["a"])({},t),t.overlay=t.mask,delete t.mask,delete t.duration,t}function w(t){void 0===t&&(t={});var e=y();return e.value&&e.updateZIndex(),t=Object(i["a"])({},m,g(t),{clear:function(){e.value=!1,t.onClose&&t.onClose(),b&&!r["d"]&&e.$on("closed",function(){clearTimeout(e.timer),v=v.filter(function(t){return t!==e});var t=e.$el.parentNode;t&&t.removeChild(e.$el),e.$destroy()})}}),Object(i["a"])(e,O(t)),clearTimeout(e.timer),t.duration>0&&(e.timer=setTimeout(function(){e.clear()},t.duration)),e}var S=function(t){return function(e){return w(Object(i["a"])({type:t},g(e)))}};["loading","success","fail"].forEach(function(t){w[t]=S(t)}),w.clear=function(t){v.length&&(t?(v.forEach(function(t){t.clear()}),v=[]):b?v.shift().clear():v[0].clear())},w.setDefaultOptions=function(t){Object(i["a"])(m,t)},w.resetDefaultOptions=function(){m=Object(i["a"])({},p)},w.allowMultiple=function(t){void 0===t&&(t=!0),b=t},w.install=function(){o["a"].use(d)},o["a"].prototype.$toast=w;e["a"]=w},a349:function(t,e,n){"use strict";var i=n("0dc9"),o=n("591a"),a=u("computed",o["e"]),r=u("computed",o["c"]),s=u("methods",o["b"]),c=u("methods",o["d"]);function l(t,e){function n(e){function n(n,i){if("string"===typeof i){var o=i,a=n;return e(o,{namespace:t})(a,o)}var r=n,s=f(i||{},{namespace:t});return e(r,s)}return n}return e?(console.warn("[vuex-class] passing the 2nd argument to `namespace` function is deprecated. pass only namespace string instead."),n(e)):{State:n(a),Getter:n(r),Mutation:n(c),Action:n(s)}}function u(t,e){function n(n,o){return Object(i["a"])(function(i,a){i[t]||(i[t]={});var r,s=(r={},r[a]=n,r);i[t][a]=void 0!==o?e(o,s)[a]:e(s)[a]})}function o(t,e){if("string"===typeof e){var i=e,o=t;return n(i,void 0)(o,i)}var a=h(e),r=t;return n(r,a)}return o}function h(t){var e=t&&t.namespace;if("string"===typeof e)return"/"!==e[e.length-1]?e+"/":e}function f(t,e){var n={};return[t,e].forEach(function(t){Object.keys(t).forEach(function(e){n[e]=t[e]})}),n}n.d(e,"a",function(){return l})},aa6b:function(t,e,n){},aa77:function(t,e,n){var i=n("5ca1"),o=n("be13"),a=n("79e5"),r=n("fdef"),s="["+r+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),h=function(t,e,n){var o={},s=a(function(){return!!r[t]()||c[t]()!=c}),l=o[t]=s?e(f):r[t];n&&(o[n]=l),i(i.P+i.F*s,"String",o)},f=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=h},bb51:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"header"},[n("swiper",{attrs:{imgs:t.swiperImgsData}})],1),n("div",{staticClass:"body"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.skeletonShow,expression:"skeletonShow"}],staticClass:"skeleton"},[n("van-skeleton",{attrs:{row:3,"row-width":"160"}}),n("van-skeleton",{attrs:{row:3,"row-width":"160"}}),n("van-skeleton",{attrs:{row:3,"row-width":"160"}})],1),n("van-grid",{directives:[{name:"show",rawName:"v-show",value:!t.skeletonShow,expression:"!skeletonShow"}],attrs:{border:!1,"column-num":3}},t._l(t.gridItems,function(e,i){return n("van-grid-item",{key:i},[n("div",{on:{click:function(n){return t.toGoDetail(e)}}},[n("grid-content",{attrs:{iconStr:"percy-icon-"+e.icon,msg:e.name,number:e.inform}})],1)])}),1)],1)])},o=[],a=n("bd86"),r=(n("4e9f"),n("58bb"),n("11eb"),n("f9c5")),s=n("10eb"),c=n("b189"),l=n("6e6d");function u(t,e){var n,i;void 0===e&&(e={});var o=e.indexKey||"index";return l["a"].extend({inject:(n={},n[t]={default:null},n),computed:(i={parent:function(){return this[t]}},i[o]=function(){return this.bindRelation(),this.parent.children.indexOf(this)},i),created:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter(function(e){return e!==t}))},methods:{bindRelation:function(){if(this.parent){var t=this.parent.children;if(-1===t.indexOf(this)){var e=this.parent.slots().indexOf(this.$vnode);-1===e?t.push(this):t.splice(e,0,this)}}}}})}function h(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}var f=n("e57a"),d=n("acff"),p=Object(s["a"])("grid-item"),v=p[0],b=p[1],m=v({mixins:[u("vanGrid")],props:Object(r["a"])({},f["c"],{icon:String,text:String}),computed:{style:function(){var t=this.parent,e=t.square,n=t.gutter,i=t.columnNum,o=100/i+"%",a={flexBasis:o};if(e)a.paddingTop=o;else if(n){var r=Object(c["a"])(n);a.paddingRight=r,this.index>=i&&(a.marginTop=r)}return a},contentStyle:function(){var t=this.parent,e=t.square,n=t.gutter;if(e&&n){var i=Object(c["a"])(n);return{right:i,bottom:i,height:"auto"}}}},methods:{onClick:function(t){this.$emit("click",t),Object(f["b"])(this.$router,this)},renderContent:function(){var t=this.$createElement,e=this.slots();return e||[this.slots("icon")||this.icon&&t(d["a"],{attrs:{name:this.icon},class:b("icon")}),this.slots("text")||this.text&&t("span",{class:b("text")},[this.text])]}},render:function(t){var e=this.parent,n=e.center,i=e.border,o=e.square,a=e.gutter,r=e.clickable;return t("div",{class:[b({square:o})],style:this.style,on:{click:this.onClick}},[t("div",{style:this.contentStyle,class:[b("content",{center:n,square:o,clickable:r,surround:i&&a}),{"van-hairline":i}]},[this.renderContent()])])}}),g=(n("a097"),n("23c4")),y=n.n(g),O=n("da98"),w=Object(s["a"])("skeleton"),S=w[0],j=w[1],k="100%",x="60%";function C(t,e,n,i){if(!e.loading)return n.default&&n.default();function o(){if(e.title)return t("h3",{class:j("title"),style:{width:Object(c["a"])(e.titleWidth)}})}function a(){var n=[],i=e.rowWidth;function o(t){return i===k&&t===e.row-1?x:Array.isArray(i)?i[t]:i}for(var a=0;a<e.row;a++)n.push(t("div",{class:j("row"),style:{width:Object(c["a"])(o(a))}}));return n}function r(){if(e.avatar){var n=Object(c["a"])(e.avatarSize);return t("div",{class:j("avatar",e.avatarShape),style:{width:n,height:n}})}}return t("div",y()([{class:j({animate:e.animate})},Object(O["b"])(i)]),[r(),t("div",{class:j("content")},[o(),a()])])}C.props={row:Number,title:Boolean,avatar:Boolean,loading:{type:Boolean,default:!0},animate:{type:Boolean,default:!0},avatarSize:{type:String,default:"32px"},avatarShape:{type:String,default:"round"},titleWidth:{type:[Number,String],default:"40%"},rowWidth:{type:[Number,String,Array],default:k}};var B=S(C),I=(n("aa6b"),Object(s["a"])("grid")),N=I[0],T=I[1],$=N({mixins:[h("vanGrid")],props:{gutter:[Number,String],square:Boolean,clickable:Boolean,columnNum:{type:Number,default:4},center:{type:Boolean,default:!0},border:{type:Boolean,default:!0}},computed:{style:function(){var t=this.gutter;if(t)return{paddingLeft:Object(c["a"])(t)}}},render:function(t){return t("div",{style:this.style,class:[T(),{"van-hairline--top":this.border&&!this.gutter}]},[this.slots()])}}),z=(n("d58c"),n("6135")),E=(n("9c9a"),n("cf2c")),A=(n("7f7f"),n("5cc58"),n("2546"),n("41af")),_=n("1f85");function P(t){function e(){this.binded||(t.call(this,_["b"],!0),this.binded=!0)}function n(){this.binded&&(t.call(this,_["a"],!1),this.binded=!1)}return{mounted:e,activated:e,deactivated:n,beforeDestroy:n}}var R=l["a"].extend({mixins:[P(function(t,e){this.onPopstate(e)})],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.onPopstate(t)}},methods:{onPopstate:function(t){if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var e=t?_["b"]:_["a"];e(window,"popstate",this.close)}}}}),D=n("75c4"),M=Object(s["a"])("button"),L=M[0],Y=M[1];function X(t,e,n,i){var o=e.tag,a=e.icon,r=e.type,s=e.disabled,c=e.loading,l=e.hairline,u=e.loadingText;function h(t){c||s||(Object(O["a"])(i,"click",t),Object(f["a"])(i))}function p(t){Object(O["a"])(i,"touchstart",t)}var v=[Y([r,e.size,{disabled:s,hairline:l,block:e.block,plain:e.plain,round:e.round,square:e.square}]),{"van-hairline--surround":l}];function b(){var i,o=[];return c?o.push(t(D["a"],{class:Y("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"default"===r?void 0:""}})):a&&o.push(t(d["a"],{attrs:{name:a},class:Y("icon")})),i=c?u:n.default?n.default():e.text,i&&o.push(t("span",{class:Y("text")},[i])),o}return t(o,y()([{class:v,attrs:{type:e.nativeType,disabled:s},on:{click:h,touchstart:p}},Object(O["b"])(i)]),[b()])}X.props=Object(r["a"])({},f["c"],{text:String,icon:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}});var q,G=L(X),F=Object(s["a"])("dialog"),H=F[0],W=F[1],V=F[2],U=H({mixins:[A["a"],R],props:{title:String,message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,function(n){!1!==n&&e.onClose(t),e.loading[t]=!1})):this.onClose(t)},onClose:function(t){this.close(),this.callback&&this.callback(t)}},render:function(t){var e,n=this;if(this.shouldRender){var i=this.title,o=this.message,a=this.messageAlign,r=this.slots(),s=i&&t("div",{class:W("header",{isolated:!o&&!r})},[i]),c=(r||o)&&t("div",{class:W("content")},[r||t("div",{domProps:{innerHTML:o},class:W("message",(e={"has-title":i},e[a]=a,e))})]),l=this.showCancelButton&&this.showConfirmButton,u=t("div",{class:["van-hairline--top",W("footer",{buttons:l})]},[this.showCancelButton&&t(G,{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||V("cancel")},class:W("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){n.handleAction("cancel")}}}),this.showConfirmButton&&t(G,{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||V("confirm")},class:[W("confirm"),{"van-hairline--left":l}],style:{color:this.confirmButtonColor},on:{click:function(){n.handleAction("confirm")}}})]);return t("transition",{attrs:{name:"van-dialog-bounce"}},[t("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":i||o},class:[W(),this.className]},[s,c,u])])}}}),Z=n("4660");function J(t){return document.body.contains(t)}function K(){q&&q.$destroy(),q=new(l["a"].extend(U))({el:document.createElement("div"),propsData:{lazyRender:!1}}),q.$on("input",function(t){q.value=t})}function Q(t){return Z["d"]?Promise.resolve():new Promise(function(e,n){q&&J(q.$el)||K(),Object(r["a"])(q,Q.currentOptions,t,{resolve:e,reject:n})})}Q.defaultOptions={value:!0,title:"",message:"",overlay:!0,className:"",lockScroll:!0,beforeClose:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){q["confirm"===t?"resolve":"reject"](t)}},Q.alert=Q,Q.confirm=function(t){return Q(Object(r["a"])({showCancelButton:!0},t))},Q.close=function(){q&&(q.value=!1)},Q.setDefaultOptions=function(t){Object(r["a"])(Q.currentOptions,t)},Q.resetDefaultOptions=function(){Q.currentOptions=Object(r["a"])({},Q.defaultOptions)},Q.resetDefaultOptions(),Q.install=function(){l["a"].use(U)},Q.Component=U,l["a"].prototype.$dialog=Q;var tt=Q,et=(n("5816"),n("a33e")),nt=(n("6b54"),n("96cf"),n("3b8d")),it=n("d225"),ot=n("b0b4"),at=n("308d"),rt=n("6bb5"),st=n("4e2b"),ct=n("9ab4"),lt=n("50fb"),ut=n("a349"),ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid-content-wrap"},[n("div",[n("van-icon",{class:[t.iconStr,t.iconfont],attrs:{info:t.number}})],1),n("div",[t._v(t._s(t.msg))])])},ft=[],dt=(n("60af"),n("c5f6"),function(t){function e(){var t;return Object(it["a"])(this,e),t=Object(at["a"])(this,Object(rt["a"])(e).apply(this,arguments)),t.iconfont="iconfont",t}return Object(st["a"])(e,t),e}(lt["c"]));ct["a"]([Object(lt["b"])()],dt.prototype,"iconStr",void 0),ct["a"]([Object(lt["b"])(Number)],dt.prototype,"number",void 0),ct["a"]([Object(lt["b"])(String)],dt.prototype,"msg",void 0),dt=ct["a"]([Object(lt["a"])({components:Object(a["a"])({},d["a"].name,d["a"])})],dt);var pt=dt,vt=pt,bt=(n("ca0f"),n("2877")),mt=Object(bt["a"])(vt,ht,ft,!1,null,"64c9178c",null),gt=mt.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-swipe",{staticClass:"header-swipe",attrs:{autoplay:3e3}},t._l(t.imgs,function(t,e){return n("van-swipe-item",{key:e},[n("img",{attrs:{src:t.src}})])}),1)},Ot=[],wt=(n("5400"),Object(s["a"])("swipe-item")),St=wt[0],jt=wt[1],kt=St({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(t){var e=this.$parent,n=e.vertical,i=e.computedWidth,o=e.computedHeight,a={width:i+"px",height:n?o+"px":"100%",transform:"translate"+(n?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:jt(),style:a,on:Object(r["a"])({},this.$listeners)},[this.slots()])}}),xt=(n("7578"),n("7231"));function Ct(t,e,n){return Math.min(Math.max(t,e),n)}var Bt,It=Object(s["a"])("swipe"),Nt=It[0],Tt=It[1],$t=Nt({mixins:[xt["a"],P(function(t,e){t(window,"resize",this.onResize,!0),e?this.initialize():this.clear()})],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,initialSwipe:Number,indicatorColor:String,loop:{type:Boolean,default:!0},touchable:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},duration:{type:Number,default:500}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,e=this.vertical?"height":"width",n=this.vertical?"width":"height";return t={},t[e]=this.trackSize+"px",t[n]=this[n]?this[n]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){var t=this.$el.getBoundingClientRect();return(this.vertical?t.height:t.width)-this.size*this.count}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var e=this.$el.getBoundingClientRect();this.computedWidth=this.width||e.width,this.computedHeight=this.height||e.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach(function(t){t.offset=0}),this.autoPlay()},onResize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(_["c"])(t,!0),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:t>0?this.delta>0?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var e=this.active,n=this.count;return t?this.loop?Ct(e+t,-1,n):Ct(e+t,0,n-1):e},getTargetOffset:function(t,e){var n=t*this.size;this.loop||(n=Math.min(n,-this.minOffset));var i=Math.round(e-n);return this.loop||(i=Ct(i,this.minOffset,0)),i},move:function(t){var e=t.pace,n=void 0===e?0:e,i=t.offset,o=void 0===i?0:i,a=t.emitChange,r=this.loop,s=this.count,c=this.active,l=this.swipes,u=this.trackSize,h=this.minOffset;if(!(s<=1)){var f=this.getTargetActive(n),d=this.getTargetOffset(f,o);if(r){if(l[0]){var p=d<h;l[0].offset=p?u:0}if(l[s-1]){var v=d>0;l[s-1].offset=v?-u:0}}this.active=f,this.offset=d,a&&f!==c&&this.$emit("change",this.activeIndicator)}},swipeTo:function(t){var e=this;this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),setTimeout(function(){e.swiping=!1,e.move({pace:t%e.count-e.active,emitChange:!0})},30)},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,e=this.autoplay;e&&this.count>1&&(this.clear(),this.timer=setTimeout(function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),setTimeout(function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()},30)},e))},renderIndicator:function(){var t=this,e=this.$createElement,n=this.count,i=this.activeIndicator,o=this.slots("indicator");return o||(this.showIndicators&&n>1?e("div",{class:Tt("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(n)).map(function(n,o){return e("i",{class:Tt("indicator",{active:o===i}),style:o===i?t.indicatorStyle:null})})]):void 0)}},render:function(t){return t("div",{class:Tt()},[t("div",{ref:"track",style:this.trackStyle,class:Tt("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),this.renderIndicator()])}}),zt=function(t){function e(){return Object(it["a"])(this,e),Object(at["a"])(this,Object(rt["a"])(e).apply(this,arguments))}return Object(st["a"])(e,t),e}(lt["c"]);ct["a"]([Object(lt["b"])()],zt.prototype,"imgs",void 0),ct["a"]([Object(lt["b"])(String)],zt.prototype,"msg",void 0),zt=ct["a"]([Object(lt["a"])({components:(Bt={},Object(a["a"])(Bt,$t.name,$t),Object(a["a"])(Bt,kt.name,kt),Bt)})],zt);var Et,At=zt,_t=At,Pt=(n("6b9b"),Object(bt["a"])(_t,yt,Ot,!1,null,"51f26249",null)),Rt=Pt.exports,Dt=Object(ut["a"])("home"),Mt=function(t){function e(){var t;return Object(it["a"])(this,e),t=Object(at["a"])(this,Object(rt["a"])(e).apply(this,arguments)),t.skeletonShow=!0,t.swiperImgsData=[],t.gridItems=null,t}return Object(st["a"])(e,t),Object(ot["a"])(e,[{key:"getSwipers",value:function(){var t=Object(nt["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(0!==this.getterSwiperImgs.length){t.next=12;break}return t.prev=1,t.next=4,this.actionSwiperImgs({type:1});case 4:this.swiperImgsData=this.getterSwiperImgs,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),console.log(t.t0);case 10:t.next=14;break;case 12:console.log("VUEX内获取图片信息！"),this.swiperImgsData=this.getterSwiperImgs;case 14:case"end":return t.stop()}},t,this,[[1,7]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"getLists",value:function(){var t=Object(nt["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.actionGridItems();case 3:e=t.sent,console.log("Request当前List信息 ==>",e),this.gridItems=e,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"skeletonNotShow",value:function(){var t=Object(nt["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.skeletonShow=!1,"[object String]"===Object.prototype.toString.call(this.getterSwiperImgs)&&et["a"].fail(this.getterSwiperImgs);case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"created",value:function(){this.testTytpe(),this.getSwipers(),this.getLists(),setTimeout(this.skeletonNotShow,1e3)}},{key:"toGoDetail",value:function(t){var e=this;console.log("toGoDetail ==>",t),tt.confirm({title:t.name,message:"".concat(t.name,"(").concat(t.icon,")离开？")}).then(function(){e.$router.push({path:"/another",query:{type:t.icon,name:t.name}})}).catch(function(){})}},{key:"testTytpe",value:function(){var t;(function(t){t[t["age"]=0]="age",t[t["name"]=1]="name",t[t["sex"]=2]="sex"})(t||(t={}));var e=function(t){console.log(t.key)};e({key:1,age:23,count:"23"});function n(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return t+" "+n.join(" ")}n("潇洒",1,3,4)}}]),e}(lt["c"]);ct["a"]([Dt.Action("swiperImgs")],Mt.prototype,"actionSwiperImgs",void 0),ct["a"]([Dt.Action("getGridItems")],Mt.prototype,"actionGridItems",void 0),ct["a"]([Dt.Getter("swiperImgs")],Mt.prototype,"getterSwiperImgs",void 0),Mt=ct["a"]([Object(lt["a"])({components:(Et={},Object(a["a"])(Et,E["a"].name,E["a"]),Object(a["a"])(Et,z["a"].name,z["a"]),Object(a["a"])(Et,$.name,$),Object(a["a"])(Et,B.name,B),Object(a["a"])(Et,m.name,m),Object(a["a"])(Et,"GridContent",gt),Object(a["a"])(Et,"Swiper",Rt),Et)})],Mt);var Lt=Mt,Yt=Lt,Xt=(n("9cec"),Object(bt["a"])(Yt,i,o,!1,null,"c3be2290",null));e["default"]=Xt.exports},c30e:function(t,e,n){},c5f6:function(t,e,n){"use strict";var i=n("7726"),o=n("69a8"),a=n("2d95"),r=n("5dbc"),s=n("6a99"),c=n("79e5"),l=n("9093").f,u=n("11e9").f,h=n("86cc").f,f=n("aa77").trim,d="Number",p=i[d],v=p,b=p.prototype,m=a(n("2aeb")(b))==d,g="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():f(e,3);var n,i,o,a=e.charCodeAt(0);if(43===a||45===a){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+e}for(var r,c=e.slice(2),l=0,u=c.length;l<u;l++)if(r=c.charCodeAt(l),r<48||r>o)return NaN;return parseInt(c,i)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(m?c(function(){b.valueOf.call(n)}):a(n)!=d)?r(new v(y(e)),n,p):y(e)};for(var O,w=n("9e1e")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;w.length>S;S++)o(v,O=w[S])&&!o(p,O)&&h(p,O,u(v,O));p.prototype=b,b.constructor=p,n("2aba")(i,d,p)}},ca0f:function(t,e,n){"use strict";var i=n("47a5"),o=n.n(i);o.a},cf2c:function(t,e,n){"use strict";var i=n("f9c5"),o=n("23c4"),a=n.n(o),r=n("10eb"),s=n("4660"),c={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[String,Number],value:[String,Number],label:[String,Number],arrowDirection:String,border:{type:Boolean,default:!0}},l=n("da98"),u=n("e57a"),h=n("acff"),f=Object(r["a"])("cell"),d=f[0],p=f[1];function v(t,e,n,i){var o=e.icon,r=e.size,c=e.title,f=e.label,d=e.value,v=e.isLink,b=e.arrowDirection,m=n.title||Object(s["b"])(c),g=n.default||Object(s["b"])(d),y=n.label||Object(s["b"])(f),O=y&&t("div",{class:[p("label"),e.labelClass]},[n.label?n.label():f]),w=m&&t("div",{class:[p("title"),e.titleClass],style:e.titleStyle},[n.title?n.title():t("span",[c]),O]),S=g&&t("div",{class:[p("value",{alone:!n.title&&!c}),e.valueClass]},[n.default?n.default():t("span",[d])]),j=n.icon?n.icon():o&&t(h["a"],{class:p("left-icon"),attrs:{name:o}}),k=n["right-icon"],x=k?k():v&&t(h["a"],{class:p("right-icon"),attrs:{name:b?"arrow-"+b:"arrow"}});function C(t){Object(l["a"])(i,"click",t),Object(u["a"])(i)}var B={center:e.center,required:e.required,borderless:!e.border,clickable:v||e.clickable};return r&&(B[r]=r),t("div",a()([{class:p(B),on:{click:C}},Object(l["b"])(i)]),[j,w,S,x,n.extra&&n.extra()])}v.props=Object(i["a"])({},c,u["c"]);e["a"]=d(v)},d58c:function(t,e,n){"use strict";n("4e9f")},e57a:function(t,e,n){"use strict";function i(t,e){var n=e.to,i=e.url,o=e.replace;n&&t?t[o?"replace":"push"](n):i&&(o?location.replace(i):location.href=i)}function o(t){i(t.parent&&t.parent.$router,t.props)}n.d(e,"b",function(){return i}),n.d(e,"a",function(){return o}),n.d(e,"c",function(){return a});var a={url:String,replace:Boolean,to:[String,Object]}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},ff64:function(t,e,n){}}]);
//# sourceMappingURL=chunk-cdc4da6e.9b04c3b0.js.map