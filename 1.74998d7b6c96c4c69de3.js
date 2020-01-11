(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{137:function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var r=t(27),a=t(20),c=t(0),i=t.n(c),o=t(14),u=(t(3),t(4)),l=t(12),f=t(13);i.a.Component;i.a.Component;var s=function(e,n){return"function"==typeof e?e(n):e},p=function(e,n){return"string"==typeof e?Object(o.c)(e,null,null,n):e},m=function(e){return e},v=i.a.forwardRef;void 0===v&&(v=m);var b=v((function(e,n){var t=e.innerRef,r=e.navigate,a=e.onClick,c=Object(l.a)(e,["innerRef","navigate","onClick"]),o=c.target,f=Object(u.a)({},c,{onClick:function(e){try{a&&a(e)}catch(n){throw e.preventDefault(),n}e.defaultPrevented||0!==e.button||o&&"_self"!==o||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return f.ref=m!==v&&n||t,i.a.createElement("a",f)}));var g=v((function(e,n){var t=e.component,a=void 0===t?b:t,c=e.replace,o=e.to,g=e.innerRef,d=Object(l.a)(e,["component","replace","to","innerRef"]);return i.a.createElement(r.e.Consumer,null,(function(e){e||Object(f.a)(!1);var t=e.history,r=p(s(o,e.location),e.location),l=r?t.createHref(r):"",b=Object(u.a)({},d,{href:l,navigate:function(){var n=s(o,e.location);(c?t.replace:t.push)(n)}});return m!==v?b.ref=n||g:b.innerRef=g,i.a.createElement(a,b)}))})),d=function(e){return e},h=i.a.forwardRef;void 0===h&&(h=d);h((function(e,n){var t=e["aria-current"],a=void 0===t?"page":t,c=e.activeClassName,o=void 0===c?"active":c,m=e.activeStyle,v=e.className,b=e.exact,O=e.isActive,j=e.location,y=e.strict,E=e.style,x=e.to,w=e.innerRef,R=Object(l.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to","innerRef"]);return i.a.createElement(r.e.Consumer,null,(function(e){e||Object(f.a)(!1);var t=j||e.location,c=p(s(x,t),t),l=c.pathname,k=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),C=k?Object(r.f)(t.pathname,{path:k,exact:b,strict:y}):null,S=!!(O?O(C,t):C),A=S?function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return e})).join(" ")}(v,o):v,T=S?Object(u.a)({},E,{},m):E,z=Object(u.a)({"aria-current":S&&a||null,className:A,style:T,to:c},R);return d!==h?z.ref=n||w:z.innerRef=w,i.a.createElement(g,z)}))}))},138:function(e,n,t){"use strict";var r=t(6),a=t.n(r);function c(){var e=a()(["\n  background-color: grey;\n"]);return c=function(){return e},e}var i=t(7).b.section(c());n.a=i},139:function(e,n,t){var r=t(140);e.exports=function(e,n){if(null==e)return{};var t,a,c=r(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}},140:function(e,n){e.exports=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}},141:function(e,n,t){"use strict";var r=t(0),a=t.n(r),c=t(3),i=t.n(c),o=t(24),u=t(6),l=t.n(u),f=t(7),s=t(39);function p(){var e=l()(["\n    grid-template-columns: repeat(1, 1fr);\n    font-size: 20px;\n  "]);return p=function(){return e},e}function m(){var e=l()(["\n    grid-template-columns: repeat(3, 1fr);\n    font-size: 24px;\n  "]);return m=function(){return e},e}function v(){var e=l()(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 5px;\n  font-size: 20px;\n  padding: 5px;\n\n  ",";\n\n  ",";\n"]);return v=function(){return e},e}var b=f.b.section(v(),Object(s.a)(m()),Object(s.b)(p())),g=t(137);function d(){var e=l()(["\n  display: grid;\n  grid-gap: 12px;\n  align-content: start;\n  padding: 4px;\n  font-family: 'Open Sans', sans-serif;\n  border-radius: 10px;\n  background-color: #fff;\n  border: 1px solid rgba(218, 220, 224, 0.5);\n  box-shadow: 0 20px 20px -20px $main-color;\n  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);\n  cursor: pointer;\n  &:hover {\n    transform: scale(1.02);\n    box-shadow: 0 2px 2px #00183a;\n  }\n"]);return d=function(){return e},e}var h=Object(f.b)(g.a)(d()),O=function(e){var n=e.posterPath,t=e.title,r=e.year,c=e.subTitle,i=e.to,o=e.description;return a.a.createElement(h,{to:i},a.a.createElement("img",{src:n,alt:t}),a.a.createElement("h4",null,t),a.a.createElement("span",null,c),a.a.createElement("p",null,o),a.a.createElement("p",null,r))};O.propTypes={posterPath:i.a.string,title:i.a.string,year:i.a.string,subTitle:i.a.string,to:i.a.string,description:i.a.string};var j=O,y=t(28),E=(t(2),function(e){var n=e.movies;return a.a.createElement(b,null,n.length?n.map((function(e){var n=e.id,t=e.title,r=e.release_date,c=e.poster_path,i=e.genres;return a.a.createElement(j,{key:n,to:"/film/".concat(n),posterPath:c,title:t,description:i.join(" "),year:r})})):"No films found")});E.propTypes={id:i.a.string,title:i.a.string,release_date:i.a.string,poster_path:i.a.string,genres:i.a.array};var x=Object(o.c)((function(e){return{movies:Object(y.b)(e)}}),null)(E);n.a=x},142:function(e,n,t){"use strict";var r=t(6),a=t.n(r),c=t(7),i=t.p+"026da05f24f7afe479bcb7ce276c470f.jpg";function o(){var e=a()(["\n  padding: 10px 0 0;\n  text-align: center;\n  min-height: 200px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n"]);return o=function(){return e},e}var u=c.b.header(o(),i);n.a=u},143:function(e,n,t){"use strict";var r=t(139),a=t.n(r),c=t(0),i=t.n(c),o=(t(3),t(24)),u=t(27),l=t(53),f=t(8),s=t(5),p=t.n(s),m=function(e){return p()(e,"uiState")},v=Object(f.a)([m],(function(e){return p()(e,"fetching",!1)})),b=Object(f.a)([m],(function(e){return p()(e,"error",null)}));n.a=function(e){return Object(u.h)(Object(o.c)((function(e){return{fetching:v(e),error:b(e)}}),null)((function(n){var t=n.error,r=n.fetching,c=(n.dispatch,a()(n,["error","fetching","dispatch"]));return i.a.createElement(i.a.Fragment,null,r&&i.a.createElement(l.a,null),t&&i.a.createElement("span",null,"Нешта здохла... =\\"),i.a.createElement(e,c))})))}},144:function(e,n,t){"use strict";var r=t(6),a=t.n(r),c=t(7),i=t(39);function o(){var e=a()(["\n    font-size: 16px;\n  "]);return o=function(){return e},e}function u(){var e=a()(["\n    font-size: 18px;\n  "]);return u=function(){return e},e}function l(){var e=a()(["\n  font-size: 20px;\n  color: white;\n\n  ",";\n\n  ",";\n"]);return l=function(){return e},e}var f=c.b.h5(l(),Object(i.a)(u()),Object(i.b)(o()));n.a=f},146:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(3),i=t.n(c),o=t(24),u=t(27),l=t(143),f=t(142),s=t(138),p=t.p+"ac0fb16f4d871f3c45094dca70c5a202.png",m=t(6),v=t.n(m);function b(){var e=v()(["\n  cursor: pointer;\n  width: 30px;\n"]);return b=function(){return e},e}var g=t(7).b.img(b()),d=function(e){var n=e.executeAction;return a.a.createElement(g,{src:p,alt:"Search",onClick:function(){n()}})};d.propTypes={executeAction:i.a.func};var h=d,O=t(51),j=function(e){var n=e.resetSearchAngRedirect;return a.a.createElement(h,{executeAction:n})};j.propTypes={resetSearchAngRedirect:i.a.func};var y=Object(o.c)(null,(function(e){return{resetSearchAngRedirect:function(){return e(Object(O.c)())}}}))(j),E=t(144),x=t(52),w=function(e){var n=e.genres;return a.a.createElement(E.a,null,"Films by the same ",n.join(", ")," ",1===n.length?"genre":"genres")};w.propTypes={genres:i.a.array};var R=Object(o.c)((function(e){return{genres:Object(x.a)(e)}}),null)(w),k=function(e){var n=e.posterPath,t=e.title,r=e.rating,c=e.releaseDate,i=e.overview;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("img",{src:n})),a.a.createElement("div",null,a.a.createElement("h2",null,t," "),a.a.createElement("p",null,"Rating: ",r," Release date: ",c),a.a.createElement("p",null,i)))};k.propTypes={};var C=Object(o.c)((function(e){return{posterPath:Object(x.c)(e),title:Object(x.f)(e),rating:Object(x.d)(e),releaseDate:Object(x.e)(e),overview:Object(x.b)(e)}}),null)(k),S=t(141),A=function(e){var n=e.fetchCurrentVideoAndSimilarFilms,t=Object(u.g)().id;return Object(r.useEffect)((function(){window.scrollTo(0,0),n(t)}),[t]),a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,null,a.a.createElement(y,null),a.a.createElement(C,null)),a.a.createElement(s.a,null,a.a.createElement(R,null)),a.a.createElement(S.a,null))};A.propTypes={fetchCurrentVideoAndSimilarFilms:i.a.func.isRequired};var T=Object(l.a)(Object(o.c)(null,(function(e){return{fetchCurrentVideoAndSimilarFilms:function(n){return e(Object(O.b)(n))}}}))(A));n.default=T}}]);
//# sourceMappingURL=1.74998d7b6c96c4c69de3.js.map