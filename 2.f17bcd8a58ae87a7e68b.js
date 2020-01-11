(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(n,e,t){"use strict";t.d(e,"a",(function(){return v}));var r=t(27),a=t(20),c=t(0),o=t.n(c),u=t(14),i=(t(3),t(4)),l=t(12),s=t(13);o.a.Component;o.a.Component;var f=function(n,e){return"function"==typeof n?n(e):n},p=function(n,e){return"string"==typeof n?Object(u.c)(n,null,null,e):n},d=function(n){return n},g=o.a.forwardRef;void 0===g&&(g=d);var b=g((function(n,e){var t=n.innerRef,r=n.navigate,a=n.onClick,c=Object(l.a)(n,["innerRef","navigate","onClick"]),u=c.target,s=Object(i.a)({},c,{onClick:function(n){try{a&&a(n)}catch(e){throw n.preventDefault(),e}n.defaultPrevented||0!==n.button||u&&"_self"!==u||function(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}(n)||(n.preventDefault(),r())}});return s.ref=d!==g&&e||t,o.a.createElement("a",s)}));var v=g((function(n,e){var t=n.component,a=void 0===t?b:t,c=n.replace,u=n.to,v=n.innerRef,m=Object(l.a)(n,["component","replace","to","innerRef"]);return o.a.createElement(r.e.Consumer,null,(function(n){n||Object(s.a)(!1);var t=n.history,r=p(f(u,n.location),n.location),l=r?t.createHref(r):"",b=Object(i.a)({},m,{href:l,navigate:function(){var e=f(u,n.location);(c?t.replace:t.push)(e)}});return d!==g?b.ref=e||v:b.innerRef=v,o.a.createElement(a,b)}))})),m=function(n){return n},h=o.a.forwardRef;void 0===h&&(h=m);h((function(n,e){var t=n["aria-current"],a=void 0===t?"page":t,c=n.activeClassName,u=void 0===c?"active":c,d=n.activeStyle,g=n.className,b=n.exact,y=n.isActive,O=n.location,x=n.strict,E=n.style,j=n.to,V=n.innerRef,k=Object(l.a)(n,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to","innerRef"]);return o.a.createElement(r.e.Consumer,null,(function(n){n||Object(s.a)(!1);var t=O||n.location,c=p(f(j,t),t),l=c.pathname,w=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),S=w?Object(r.f)(t.pathname,{path:w,exact:b,strict:x}):null,T=!!(y?y(S,t):S),R=T?function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.filter((function(n){return n})).join(" ")}(g,u):g,A=T?Object(i.a)({},E,{},d):E,z=Object(i.a)({"aria-current":T&&a||null,className:R,style:A,to:c},k);return m!==h?z.ref=e||V:z.innerRef=V,o.a.createElement(v,z)}))}))},138:function(n,e,t){"use strict";var r=t(6),a=t.n(r);function c(){var n=a()(["\n  background-color: grey;\n"]);return c=function(){return n},n}var o=t(7).b.section(c());e.a=o},139:function(n,e,t){var r=t(140);n.exports=function(n,e){if(null==n)return{};var t,a,c=r(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(c[t]=n[t])}return c}},140:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,a={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}},141:function(n,e,t){"use strict";var r=t(0),a=t.n(r),c=t(3),o=t.n(c),u=t(24),i=t(6),l=t.n(i),s=t(7),f=t(39);function p(){var n=l()(["\n    grid-template-columns: repeat(1, 1fr);\n    font-size: 20px;\n  "]);return p=function(){return n},n}function d(){var n=l()(["\n    grid-template-columns: repeat(3, 1fr);\n    font-size: 24px;\n  "]);return d=function(){return n},n}function g(){var n=l()(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 5px;\n  font-size: 20px;\n  padding: 5px;\n\n  ",";\n\n  ",";\n"]);return g=function(){return n},n}var b=s.b.section(g(),Object(f.a)(d()),Object(f.b)(p())),v=t(137);function m(){var n=l()(["\n  display: grid;\n  grid-gap: 12px;\n  align-content: start;\n  padding: 4px;\n  font-family: 'Open Sans', sans-serif;\n  border-radius: 10px;\n  background-color: #fff;\n  border: 1px solid rgba(218, 220, 224, 0.5);\n  box-shadow: 0 20px 20px -20px $main-color;\n  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);\n  cursor: pointer;\n  &:hover {\n    transform: scale(1.02);\n    box-shadow: 0 2px 2px #00183a;\n  }\n"]);return m=function(){return n},n}var h=Object(s.b)(v.a)(m()),y=function(n){var e=n.posterPath,t=n.title,r=n.year,c=n.subTitle,o=n.to,u=n.description;return a.a.createElement(h,{to:o},a.a.createElement("img",{src:e,alt:t}),a.a.createElement("h4",null,t),a.a.createElement("span",null,c),a.a.createElement("p",null,u),a.a.createElement("p",null,r))};y.propTypes={posterPath:o.a.string,title:o.a.string,year:o.a.string,subTitle:o.a.string,to:o.a.string,description:o.a.string};var O=y,x=t(28),E=(t(2),function(n){var e=n.movies;return a.a.createElement(b,null,e.length?e.map((function(n){var e=n.id,t=n.title,r=n.release_date,c=n.poster_path,o=n.genres;return a.a.createElement(O,{key:e,to:"/film/".concat(e),posterPath:c,title:t,description:o.join(" "),year:r})})):"No films found")});E.propTypes={id:o.a.string,title:o.a.string,release_date:o.a.string,poster_path:o.a.string,genres:o.a.array};var j=Object(u.c)((function(n){return{movies:Object(x.b)(n)}}),null)(E);e.a=j},142:function(n,e,t){"use strict";var r=t(6),a=t.n(r),c=t(7),o=t.p+"026da05f24f7afe479bcb7ce276c470f.jpg";function u(){var n=a()(["\n  padding: 10px 0 0;\n  text-align: center;\n  min-height: 200px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n"]);return u=function(){return n},n}var i=c.b.header(u(),o);e.a=i},143:function(n,e,t){"use strict";var r=t(139),a=t.n(r),c=t(0),o=t.n(c),u=(t(3),t(24)),i=t(27),l=t(53),s=t(8),f=t(5),p=t.n(f),d=function(n){return p()(n,"uiState")},g=Object(s.a)([d],(function(n){return p()(n,"fetching",!1)})),b=Object(s.a)([d],(function(n){return p()(n,"error",null)}));e.a=function(n){return Object(i.h)(Object(u.c)((function(n){return{fetching:g(n),error:b(n)}}),null)((function(e){var t=e.error,r=e.fetching,c=(e.dispatch,a()(e,["error","fetching","dispatch"]));return o.a.createElement(o.a.Fragment,null,r&&o.a.createElement(l.a,null),t&&o.a.createElement("span",null,"Нешта здохла... =\\"),o.a.createElement(n,c))})))}},144:function(n,e,t){"use strict";var r=t(6),a=t.n(r),c=t(7),o=t(39);function u(){var n=a()(["\n    font-size: 16px;\n  "]);return u=function(){return n},n}function i(){var n=a()(["\n    font-size: 18px;\n  "]);return i=function(){return n},n}function l(){var n=a()(["\n  font-size: 20px;\n  color: white;\n\n  ",";\n\n  ",";\n"]);return l=function(){return n},n}var s=c.b.h5(l(),Object(o.a)(i()),Object(o.b)(u()));e.a=s},145:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(3),o=t.n(c),u=t(24),i=t(143),l=t(142),s=t(6),f=t.n(s),p=t(7),d=t(39);function g(){var n=f()(["\n    font-size: 20px;\n  "]);return g=function(){return n},n}function b(){var n=f()(["\n    font-size: 26px;\n  "]);return b=function(){return n},n}function v(){var n=f()(["\n  font-size: 36px;\n\n  ",";\n\n  ",";\n"]);return v=function(){return n},n}var m=p.b.h1(v(),Object(d.a)(b()),Object(d.b)(g())),h=t(138);function y(){var n=f()(["\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 800;\n  font-size: 18px;\n  line-height: 24px;\n  outline: none;\n  background-color: #004db9;\n  border: 0;\n  border-radius: 4px;\n  color: white;\n  padding: 15px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  &:disabled {\n    cursor: not-allowed;\n    background-color: #7792b8;\n  }\n\n  &:hover:not(:disabled) {\n    background-color: #00183a;\n  }\n\n  &:active {\n    background-color: #004db9;\n    opacity: 0.7;\n  }\n"]);return y=function(){return n},n}var O=p.b.button(y());O.propTypes={btnTitle:o.a.string,executeAction:o.a.func};var x=function(n){var e=n.btnTitle,t=n.executeAction;return a.a.createElement(O,{type:"submit",onClick:function(n){t()},onKeyUp:function(n){"Enter"===n.key&&t()}},e)},E=t(10),j=function(n){var e=n.createSearchAndRedirect;return a.a.createElement(x,{btnTitle:"Search",executeAction:e})};j.propTypes={createSearchAndRedirect:o.a.func};var V=Object(u.c)(null,(function(n){return{createSearchAndRedirect:function(){return n(Object(E.h)())}}}))(j);function k(){var n=f()(["\n  padding: 5px 10px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 20px;\n  background: white;\n  border: 1px solid rgba(31, 64, 111, 0.2);\n  border-radius: 4px;\n\n  &:focus {\n    border-color: #004db9;\n  }\n"]);return k=function(){return n},n}var w=p.b.input(k()),S=function(n){var e=n.inputValue,t=n.executeActionByEnter,r=n.setInputValue;return a.a.createElement(w,{type:"text",value:e,onChange:function(n){var e=n.target.value;r(e)},onKeyUp:function(n){"Enter"===n.key&&t()}})};S.propTypes={inputValue:o.a.string,executeActionByEnter:o.a.func,setInputValue:o.a.func};var T=S,R=t(28),A=t(2),z=function(n){var e=n.searchValue,t=n.setSearchValue,r=n.createSearchAndRedirect;return a.a.createElement(T,{inputValue:e,executeActionByEnter:r,setInputValue:t})};z.propTypes={searchValue:o.a.string,setSearchValue:o.a.func,createSearchAndRedirect:o.a.func};var B=Object(u.c)((function(n){return{searchValue:Object(R.d)(n)}}),(function(n){return{setSearchValue:function(e){return n(E.k[A.a.SEARCH](e))},createSearchAndRedirect:function(){return n(Object(E.h)())}}}))(z);function C(){var n=f()(["\n  font-size: 20px;\n"]);return C=function(){return n},n}function N(){var n=f()(["\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  background-color: #454545;\n  color: white;\n  padding: 5px 10px;\n  border-radius: 3px;\n  transition: all 0.3s ease-out;\n"]);return N=function(){return n},n}function I(){var n=f()(["\n  visibility: hidden;\n  height: 0;\n  width: 0;\n\n  &:checked + label {\n    background-color: #58ba83;\n  }\n"]);return I=function(){return n},n}function K(){var n=f()(["\n  display: grid;\n  grid-gap: 5px;\n  grid-auto-flow: rows;\n  grid-template-columns: auto;\n  justify-content: center;\n  align-content: center;\n"]);return K=function(){return n},n}var P=p.b.div(K()),_=p.b.input(I()),F=p.b.label(N()),H=p.b.h2(C()),M=function(n){var e=n.togglerTitle,t=n.selectedValue,r=n.togglerOptions,c=n.setToggleValue,o=function(n){var e=n.target.value;c(e)};return a.a.createElement(P,null,a.a.createElement(H,null,e),r.map((function(n,e){var r=n.code,c=n.text;return a.a.createElement(a.a.Fragment,{key:"".concat(r).concat(e)},a.a.createElement(_,{type:"radio",name:r,id:"".concat(r).concat(e),value:r,checked:t===r,onChange:o}),a.a.createElement(F,{htmlFor:"".concat(r).concat(e)},c))})))};M.propTypes={togglerTitle:o.a.string,selectedValue:o.a.string,togglerOptions:o.a.array,setToggleValue:o.a.func};var Y=M,D=function(n){var e=n.searchByValue,t=n.setSearchByValue;return a.a.createElement(Y,{togglerTitle:"SEARCH BY",selectedValue:e,togglerOptions:A.g,setToggleValue:t})};D.propTypes={searchByValue:o.a.string,setSearchByValue:o.a.func};var U=Object(u.c)((function(n){return{searchByValue:Object(R.c)(n)}}),(function(n){return{setSearchByValue:function(e){return n(E.k[A.a.SEARCH_BY](e))}}}))(D),$=t(144),J=function(n){var e=n.total;return a.a.createElement($.a,null,e," ",1===e?"movie was":"movies were"," found")};J.propTypes={total:o.a.number};var q=Object(u.c)((function(n){return{total:Object(R.f)(n)}}),null)(J),G=function(n){var e=n.sortValue,t=n.sortByValue;return a.a.createElement(Y,{togglerTitle:"SORT BY",selectedValue:e,togglerOptions:A.i,setToggleValue:t})};G.propTypes={sortValue:o.a.string,sortByValue:o.a.func};var L=Object(u.c)((function(n){return{sortValue:Object(R.e)(n)}}),(function(n){return{sortByValue:function(e){return n(Object(E.j)(e))}}}))(G),Q=t(141),W=function(n){var e=n.fetchMovies;return Object(r.useEffect)((function(){e()})),a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,null,a.a.createElement(m,null,"FIND YOUR MOVIE"),a.a.createElement(B,null),a.a.createElement(U,null),a.a.createElement(V,null)),a.a.createElement(h.a,null,a.a.createElement(q,null),a.a.createElement(L,null)),a.a.createElement(Q.a,null))};W.propTypes={fetchMovies:o.a.func};var X=Object(i.a)(Object(u.c)(null,(function(n){return{fetchMovies:function(){return n(Object(E.i)())}}}))(W));e.default=X}}]);
//# sourceMappingURL=2.f17bcd8a58ae87a7e68b.js.map