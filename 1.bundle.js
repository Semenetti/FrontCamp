(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{137:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var r=t(27),a=t(19),i=t(0),c=t.n(i),o=t(14),u=(t(3),t(4)),l=t(12),s=t(13);c.a.Component;c.a.Component;var f=function(e,n){return"function"==typeof e?e(n):e},p=function(e,n){return"string"==typeof e?Object(o.c)(e,null,null,n):e},v=function(e){return e},d=c.a.forwardRef;void 0===d&&(d=v);var g=d((function(e,n){var t=e.innerRef,r=e.navigate,a=e.onClick,i=Object(l.a)(e,["innerRef","navigate","onClick"]),o=i.target,s=Object(u.a)({},i,{onClick:function(e){try{a&&a(e)}catch(n){throw e.preventDefault(),n}e.defaultPrevented||0!==e.button||o&&"_self"!==o||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return s.ref=v!==d&&n||t,c.a.createElement("a",s)}));var m=d((function(e,n){var t=e.component,a=void 0===t?g:t,i=e.replace,o=e.to,m=e.innerRef,b=Object(l.a)(e,["component","replace","to","innerRef"]);return c.a.createElement(r.e.Consumer,null,(function(e){e||Object(s.a)(!1);var t=e.history,r=p(f(o,e.location),e.location),l=r?t.createHref(r):"",g=Object(u.a)({},b,{href:l,navigate:function(){var n=f(o,e.location);(i?t.replace:t.push)(n)}});return v!==d?g.ref=n||m:g.innerRef=m,c.a.createElement(a,g)}))})),b=function(e){return e},h=c.a.forwardRef;void 0===h&&(h=b);h((function(e,n){var t=e["aria-current"],a=void 0===t?"page":t,i=e.activeClassName,o=void 0===i?"active":i,v=e.activeStyle,d=e.className,g=e.exact,j=e.isActive,O=e.location,y=e.strict,x=e.style,E=e.to,w=e.innerRef,R=Object(l.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to","innerRef"]);return c.a.createElement(r.e.Consumer,null,(function(e){e||Object(s.a)(!1);var t=O||e.location,i=p(f(E,t),t),l=i.pathname,k=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),C=k?Object(r.f)(t.pathname,{path:k,exact:g,strict:y}):null,S=!!(j?j(C,t):C),A=S?function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return e})).join(" ")}(d,o):d,P=S?Object(u.a)({},x,{},v):x,z=Object(u.a)({"aria-current":S&&a||null,className:A,style:P,to:i},R);return b!==h?z.ref=n||w:z.innerRef=w,c.a.createElement(m,z)}))}))},138:function(e,n,t){"use strict";var r=t(6),a=t.n(r);function i(){var e=a()(["\n  display: grid;\n  grid-gap: 5px;\n  grid-template-columns: auto auto;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n"]);return i=function(){return e},e}var c=t(7).b.div(i());n.a=c},139:function(e,n,t){var r=t(140);e.exports=function(e,n){if(null==e)return{};var t,a,i=r(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}},140:function(e,n){e.exports=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}},141:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(3),c=t.n(i),o=t(23),u=t.p+"ac0fb16f4d871f3c45094dca70c5a202.png",l=t(6),s=t.n(l),f=t(7);function p(){var e=s()(["\n  cursor: pointer;\n  width: 30px;\n"]);return p=function(){return e},e}var v=f.b.img(p()),d=function(e){var n=e.executeAction;return a.a.createElement(v,{src:u,alt:"Search",onClick:function(){n()}})};d.propTypes={executeAction:c.a.func};var g=d,m=t(37);function b(){var e=s()(["\n    font-size: 16px;\n  "]);return b=function(){return e},e}function h(){var e=s()(["\n    font-size: 20px;\n  "]);return h=function(){return e},e}function j(){var e=s()(["\n  font-size: 26px;\n\n  ",";\n\n  ",";\n"]);return j=function(){return e},e}var O=f.b.h1(j(),Object(m.a)(h()),Object(m.b)(b())),y=t(138),x=t(52),E=t(51),w=function(e){var n=e.resetSearchAngRedirect,t=e.isVideoListPath;return a.a.createElement(y.a,null,a.a.createElement(O,null,"Video app"),!t&&a.a.createElement(g,{executeAction:n}))};w.propTypes={resetSearchAngRedirect:c.a.func,isVideoListPath:c.a.bool};var R=Object(o.c)((function(e){return{isVideoListPath:Object(x.a)(e)}}),(function(e){return{resetSearchAngRedirect:function(){return e(Object(E.c)())}}}))(w);n.a=R},142:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(3),c=t.n(i),o=t(23),u=t(6),l=t.n(u),s=t(7),f=t(37);function p(){var e=l()(["\n    grid-template-columns: repeat(1, 1fr);\n    font-size: 20px;\n  "]);return p=function(){return e},e}function v(){var e=l()(["\n    grid-template-columns: repeat(3, 1fr);\n    font-size: 24px;\n  "]);return v=function(){return e},e}function d(){var e=l()(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 5px;\n  font-size: 20px;\n  padding: 5px;\n\n  ",";\n\n  ",";\n"]);return d=function(){return e},e}var g=s.b.section(d(),Object(f.a)(v()),Object(f.b)(p())),m=t(137);function b(){var e=l()(["\n  display: grid;\n  grid-gap: 12px;\n  align-content: start;\n  padding: 4px;\n  font-family: 'Open Sans', sans-serif;\n  border-radius: 10px;\n  background-color: #fff;\n  border: 1px solid rgba(218, 220, 224, 0.5);\n  box-shadow: 0 20px 20px -20px $main-color;\n  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);\n  cursor: pointer;\n  &:hover {\n    transform: scale(1.02);\n    box-shadow: 0 2px 2px #00183a;\n  }\n"]);return b=function(){return e},e}var h=Object(s.b)(m.a)(b()),j=function(e){var n=e.posterPath,t=e.title,r=e.year,i=e.subTitle,c=e.to,o=e.description;return a.a.createElement(h,{to:c},a.a.createElement("img",{src:n,alt:t}),a.a.createElement("h4",null,t),a.a.createElement("span",null,i),a.a.createElement("p",null,o),a.a.createElement("p",null,r))};j.propTypes={posterPath:c.a.string,title:c.a.string,year:c.a.string,subTitle:c.a.string,to:c.a.string,description:c.a.string};var O=j,y=t(38),x=function(e){var n=e.movies;return a.a.createElement(g,null,n.length?n.map((function(e){var n=e.id,t=e.title,r=e.release_date,i=e.poster_path,c=e.genres;return a.a.createElement(O,{key:n,to:"/film/".concat(n),posterPath:i,title:t,description:c.join(" "),year:r})})):"No films found")};x.propTypes={id:c.a.string,title:c.a.string,release_date:c.a.string,poster_path:c.a.string,genres:c.a.array};var E=Object(o.c)((function(e){return{movies:Object(y.b)(e)}}),null)(x);n.a=E},143:function(e,n,t){"use strict";var r=t(6),a=t.n(r),i=t(7),c=t.p+"026da05f24f7afe479bcb7ce276c470f.jpg";function o(){var e=a()(["\n  display: grid;\n  grid-gap: 10px;\n  justify-content: center;\n  align-content: center;\n\n  padding: 10px;\n  min-height: 200px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n"]);return o=function(){return e},e}var u=i.b.header(o(),c);n.a=u},144:function(e,n,t){"use strict";var r=t(139),a=t.n(r),i=t(0),c=t.n(i),o=(t(3),t(23)),u=t(27),l=t(54),s=t(8),f=t(5),p=t.n(f),v=function(e){return p()(e,"uiState")},d=Object(s.a)([v],(function(e){return p()(e,"fetching",!1)})),g=Object(s.a)([v],(function(e){return p()(e,"error",null)}));n.a=function(e){return Object(u.h)(Object(o.c)((function(e){return{fetching:d(e),error:g(e)}}),null)((function(n){var t=n.error,r=n.fetching,i=(n.dispatch,a()(n,["error","fetching","dispatch"]));return c.a.createElement(c.a.Fragment,null,r&&c.a.createElement(l.a,null),t&&c.a.createElement("span",null,"Нешта здохла... =\\"),c.a.createElement(e,i))})))}},145:function(e,n,t){"use strict";var r=t(6),a=t.n(r);function i(){var e=a()(["\n  display: grid;\n  align-items: center;\n  background-color: grey;\n  min-height: 55px;\n  padding: 10px;\n"]);return i=function(){return e},e}var c=t(7).b.section(i());n.a=c},146:function(e,n,t){"use strict";var r=t(6),a=t.n(r),i=t(7),c=t(37);function o(){var e=a()(["\n    font-size: 12px;\n  "]);return o=function(){return e},e}function u(){var e=a()(["\n    font-size: 14px;\n  "]);return u=function(){return e},e}function l(){var e=a()(["\n  font-size: 16px;\n  color: white;\n\n  ",";\n\n  ",";\n"]);return l=function(){return e},e}var s=i.b.h5(l(),Object(c.a)(u()),Object(c.b)(o()));n.a=s},148:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(3),c=t.n(i),o=t(23),u=t(27),l=t(144),s=t(143),f=t(145),p=t(141),v=t(146),d=t(53),g=function(e){var n=e.genres;return a.a.createElement(v.a,null,"Films by the same ",n.join(", ")," ",1===n.length?"genre":"genres")};g.propTypes={genres:c.a.array};var m=Object(o.c)((function(e){return{genres:Object(d.a)(e)}}),null)(g),b=t(138),h=function(e){var n=e.posterPath,t=e.title,r=e.rating,i=e.releaseDate,c=e.overview;return a.a.createElement(b.a,null,a.a.createElement("div",null,a.a.createElement("img",{src:n})),a.a.createElement("div",null,a.a.createElement("h2",null,t," "),a.a.createElement("p",null,"Rating: ",r," Release date: ",i),a.a.createElement("p",null,c)))};h.propTypes={posterPath:c.a.string,title:c.a.string,rating:c.a.number,releaseDate:c.a.string,overview:c.a.string};var j=Object(o.c)((function(e){return{posterPath:Object(d.c)(e),title:Object(d.f)(e),rating:Object(d.d)(e),releaseDate:Object(d.e)(e),overview:Object(d.b)(e)}}),null)(h),O=t(142),y=t(51),x=function(e){var n=e.fetchCurrentVideoAndSimilarFilms,t=Object(u.g)().id;return Object(r.useEffect)((function(){window.scrollTo(0,0),n(t)}),[t]),a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a,null),a.a.createElement(s.a,null,a.a.createElement(j,null)),a.a.createElement(f.a,null,a.a.createElement(m,null)),a.a.createElement(O.a,null))};x.propTypes={fetchCurrentVideoAndSimilarFilms:c.a.func.isRequired};var E=Object(l.a)(Object(o.c)(null,(function(e){return{fetchCurrentVideoAndSimilarFilms:function(n){return e(Object(y.b)(n))}}}))(x));n.default=E}}]);