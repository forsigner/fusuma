(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{131:function(e,t,n){"use strict";var r=n(2),o=n.n(r),i=n(92),a=n.n(i),u=(n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(132)),s=n.n(u);n(335);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",function(){return m});var m=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=f(this,p(t).call(this))).state={currentIndex:0},window.slide||setTimeout(function(){window.slide=new window.WebSlides({loop:!0,showIndex:!0,navigateOnScroll:!1}),window.slide.el.addEventListener("ws:slide-change",function(t){e.props.onChangeSlideIndex&&e.props.onChangeSlideIndex(t.detail.currentSlide0),e.setState({currentIndex:t.detail.currentSlide0})})},0),e}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){a.a.highlightAll()}},{key:"componentDidUpdate",value:function(){a.a.highlightAll()}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.hash!==e.hash||!window.slide}},{key:"render",value:function(){var e=this,t=this.props,n=t.slides,r=t.lazyload,i=void 0!==r&&r;return o.a.createElement("article",{className:void 0,id:"webslides"},n.map(function(t,n){var r=t.slide,a=t.fusumaProps;return o.a.createElement("section",{key:n,className:s()("aligncenter",a.classes,a.sectionTitle?"section-title":void 0)},e.state.currentIndex>=n-5&&e.state.currentIndex<=n+5||!i?o.a.createElement(r,null):o.a.createElement("div",null))}))}}])&&l(n.prototype,r),i&&l(n,i),t}()},133:function(e,t,n){n(134),e.exports=n(343)},336:function(e,t,n){var r=n(337);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(63)(r,o);r.locals&&(e.exports=r.locals)},337:function(e,t,n){},338:function(e,t,n){var r=n(339);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(63)(r,o);r.locals&&(e.exports=r.locals)},339:function(e,t,n){},340:function(e,t,n){var r={"./0-title.md":341,"./01-many-pages.md":342};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=340},341:function(e,t,n){"use strict";n.r(t),n.d(t,"slides",function(){return s}),n.d(t,"fusumaProps",function(){return c}),n.d(t,"default",function(){return p});var r=n(2),o=n.n(r),i=n(3);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=[function(e){return Object(i.a)(o.a.Fragment,null,Object(i.a)("h2",null,"issues"))}],c=[{}],l={slides:s},f="wrapper";function p(e){var t=e.components,n=u(e,["components"]);return Object(i.a)(f,a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h2",null,"issues"))}p.isMDXComponent=!0},342:function(e,t,n){"use strict";n.r(t),n.d(t,"slides",function(){return s}),n.d(t,"fusumaProps",function(){return c}),n.d(t,"default",function(){return p});var r=n(2),o=n.n(r),i=n(3);function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=[function(e){return Object(i.a)(o.a.Fragment,null,Object(i.a)("p",null,Object(i.a)("a",u({parentName:"p"},{href:"https://github.com/hiroppy/fusuma/issues/110"}),"https://github.com/hiroppy/fusuma/issues/110")),Object(i.a)("h1",null,"1"))},function(e){return Object(i.a)(o.a.Fragment,null,Object(i.a)("h1",null,"2"))},function(e){return Object(i.a)(o.a.Fragment,null,Object(i.a)("h1",null,"3"))},function(e){return Object(i.a)(o.a.Fragment,null,Object(i.a)("h1",null,"4"))},function(e){return Object(i.a)(o.a.Fragment,null,Object(i.a)("h1",null,"5"))},function(e){return Object(i.a)(o.a.Fragment,null,Object(i.a)("h1",null,"6"))},function(e){return Object(i.a)(o.a.Fragment,null,Object(i.a)("h1",null,"7"))}],c=[{},{},{},{},{},{},{}],l={slides:s},f="wrapper";function p(e){var t=e.components,n=a(e,["components"]);return Object(i.a)(f,u({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,Object(i.a)("a",u({parentName:"p"},{href:"https://github.com/hiroppy/fusuma/issues/110"}),"https://github.com/hiroppy/fusuma/issues/110")),Object(i.a)("h1",null,"1"),Object(i.a)("hr",null),Object(i.a)("h1",null,"2"),Object(i.a)("hr",null),Object(i.a)("h1",null,"3"),Object(i.a)("hr",null),Object(i.a)("h1",null,"4"),Object(i.a)("hr",null),Object(i.a)("h1",null,"5"),Object(i.a)("hr",null),Object(i.a)("h1",null,"6"),Object(i.a)("hr",null),Object(i.a)("h1",null,"7"))}p.isMDXComponent=!0},343:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),i=n(127),a=n(130),u=n(131);function s(){return location.search.includes("presenter=host")?"host":location.search.includes("presenter=view")?"view":"common"}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){v(e,t,n[t])})}return e}function f(e,t,n,r,o,i,a){try{var u=e[i](a),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,o)}function p(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){f(i,r,o,a,u,"next",e)}function u(e){f(i,r,o,a,u,"throw",e)}a(void 0)})}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){function t(e){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=m(t).call(this,e),n=!o||"object"!==c(o)&&"function"!=typeof o?h(r):o,v(h(n),"changeSidebarState",function(){var e="false"!==n.params.get("sidebar")&&"common"===n.mode;n.setState({isSidebar:e})}),v(h(n),"goTo",function(e){window.slide&&window.slide.goToSlide(e)}),v(h(n),"onSetSidebarOpen",function(e){var t=e.isOpen;n.state.isOpenSidebar!==t&&n.setState({isOpenSidebar:t})}),v(h(n),"onChangeSlideIndex",function(e){n.state.isSidebar&&n.setState({currentIndex:e})}),v(h(n),"onRunPresentationMode",function(){window.slide=null,n.routeMode("host")}),v(h(n),"terminate",function(){window.slide=null,n.routeMode("common")});var i=new URL(window.location.href),a=i.hash.match(/^#slide=(.+?)$/);return a=null!==a?a[1]-1:0,n.state={isSidebar:!0,isOpenSidebar:!1,slides:[],contentsList:[],currentIndex:a,SidebarComponent:null,CommentsListComponent:null},n.params=i.searchParams,n.ContentComponent=null,n.isLive=n.params.get("isLive"),n.routeMode(),n}var r,i,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o.a.Component),r=t,i=[{key:"componentDidMount",value:function(){var e=p(regeneratorRuntime.mark(function e(){var r,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.changeSidebarState(),r=t.createProps(this.props.slides),this.setState(l({},r)),!this.state.isSidebar){e.next=9;break}return e.next=6,Promise.all([n.e(1),n.e(0)]).then(n.bind(null,374));case 6:o=e.sent,i=o.SidebarComponent,this.setState({SidebarComponent:i});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"setupLive",value:function(){var e=p(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(8),n.e(2)]).then(n.bind(null,375));case 2:t=e.sent,r=t.CommentsList,this.setState({CommentsListComponent:r});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"routeMode",value:function(){var e=p(regeneratorRuntime.mark(function e(t){var r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==this.mode?(this.mode=t||s(),this.changeSidebarState()):this.mode=t||s(),"common"!==this.mode){e.next=5;break}this.ContentComponent=u.a,e.next=17;break;case 5:if("view"!==this.mode){e.next=11;break}return e.next=8,n.e(4).then(n.bind(null,376));case 8:e.t0=e.sent,e.next=14;break;case 11:return e.next=13,Promise.all([n.e(1),n.e(0)]).then(n.bind(null,377));case 13:e.t0=e.sent;case 14:r=e.t0,o=r.default,this.ContentComponent=o;case 17:"host"===this.mode&&this.setState({isOpenSidebar:!1,CommentsListComponent:null});case 18:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,this.state.isSidebar&&o.a.createElement(o.a.Fragment,null,this.state.SidebarComponent&&o.a.createElement(this.state.SidebarComponent,{goTo:this.goTo,isOpen:this.state.isOpenSidebar,terminate:this.terminate,contents:this.state.contentsList,onStateChange:this.onSetSidebarOpen,currentIndex:this.state.currentIndex,runPresentationMode:this.onRunPresentationMode}),o.a.createElement(a.e,{className:"btn-sidebar",onClick:function(){return e.onSetSidebarOpen({isOpen:!0})}})),this.ContentComponent&&o.a.createElement(this.ContentComponent,{hash:this.props.hash,slides:this.state.slides,terminate:this.terminate,onChangeSlideIndex:this.onChangeSlideIndex}),this.state.CommentsListComponent&&o.a.createElement(this.state.CommentsListComponent,null))}}],f=[{key:"getDerivedStateFromProps",value:function(e,t){}},{key:"createProps",value:function(e){var t=e.map(function(e){return e.slides}).flat(),n=e.map(function(e){return e.fusumaProps}).flat(),r={};return n.reduce(function(e,t,n){var r=t.sectionTitle;return r&&e.push({title:r,index:n+1}),e},r.contentsList=[]),r.slides=t.map(function(e,t){var i,a,u=n[t];return{slide:u.contents?(i={list:r.contentsList},a=i.list,function(){return o.a.createElement("div",{class:"toc size-70 aligncenter"},o.a.createElement("ol",null,a.map(function(e,t){var n=e.index,r=e.title;return o.a.createElement("li",{key:t},o.a.createElement("a",{href:"#slide=".concat(n),title:r},o.a.createElement("span",{class:"chapter"},r),o.a.createElement("span",{class:"toc-page"},n)))})))}):e,fusumaProps:u}}),r}}],i&&d(r.prototype,i),f&&d(r,f),t}();function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(i.render)(o.a.createElement(y,{slides:e,hash:t}),document.getElementById("root"))}function g(e){return{id:(t=e).id,slides:t.keys().sort().map(function(e){return t(e)})};var t}var w;n(336),n(338);function j(e,t,n,r,o,i,a){try{var u=e[i](a),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,o)}(w=regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return O(g(n(340)).slides),e.next=6,n.e(6).then(n.bind(null,373));case 6:t=e.sent,(0,t.setTargetBlank)();case 9:case"end":return e.stop()}},e)}),function(){var e=this,t=arguments;return new Promise(function(n,r){var o=w.apply(e,t);function i(e){j(o,n,r,i,a,"next",e)}function a(e){j(o,n,r,i,a,"throw",e)}i(void 0)})})()}},[[133,5,7]],[1,0]]);