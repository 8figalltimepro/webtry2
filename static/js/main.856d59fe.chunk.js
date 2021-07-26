(this["webpackJsonpmovie-web"]=this["webpackJsonpmovie-web"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(13),a=n.n(c),o=(n(12),n(2)),i=n.n(o),u=n(4),l=n(3),p=(n(20),n(0));function d(e){return Object(p.jsx)("span",{className:"arrow",dangerouslySetInnerHTML:{__html:'\n            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather '.concat(e.left?"left":"",'"}>\n                <line x1="5" y1="12" x2="19" y2="12"></line>\n                <polyline points="12 5 19 12 12 19"></polyline>\n            </svg>\n        ')}})}n(22);function h(e){var t=e.onSubmit,n=e.placeholder,r=s.a.useState(""),c=Object(l.a)(r,2),a=c[0],o=c[1];return Object(p.jsxs)("form",{className:"inputBar",onSubmit:function(e){return e.preventDefault(),t(a),!1},children:[Object(p.jsx)("input",{type:"text",className:"inputTextBox",id:"inputTextBox",placeholder:n,value:a,onChange:function(e){return o(e.target.value)},required:!0}),Object(p.jsx)("button",{className:"inputSearchButton",children:Object(p.jsxs)("span",{className:"text",children:["Search",Object(p.jsx)("span",{className:"arrow",children:Object(p.jsx)(d,{})})]})})]})}var f=n(5),j=s.a.createContext(null);function v(e){var t=s.a.useState("search"),n=Object(l.a)(t,2),r=n[0],c=n[1],a=s.a.useState(""),o=Object(l.a)(a,2),i=o[0],u=o[1],d=s.a.useState({title:"",slug:"",type:"",episodes:[],seasons:[]}),h=Object(l.a)(d,2),v=h[0],b=h[1];return Object(p.jsx)(j.Provider,{value:{navigate:function(e){c(e)},page:r,setStreamUrl:u,streamUrl:i,streamData:v,setStreamData:function(e){b((function(t){return Object(f.a)(Object(f.a)({},t),e)}))}},children:e.children})}function b(e){return s.a.useContext(j)}n(23);function m(e){var t=b().navigate,n=e.size||"big",r=e.accentLink||"",s=e.accent||"";return Object(p.jsxs)("div",{children:[s.length>0?Object(p.jsxs)("p",{onClick:function(){return r.length>0&&t(r)},className:"title-accent ".concat(r.length>0?"title-accent-link":""),children:[r.length>0?Object(p.jsx)(d,{left:!0}):null,s]}):null,Object(p.jsx)("h1",{className:"title "+(n?"title-size-"+n:""),children:e.children})]})}n(24);function x(e){var t=s.a.useState(!1),n=Object(l.a)(t,2),r=n[0],c=n[1],a=s.a.useRef(null),o=s.a.useState(0),i=Object(l.a)(o,2),u=i[0],d=i[1];return s.a.useEffect((function(){(null===a||void 0===a?void 0:a.current)&&(c(e.show),d(a.current.clientHeight))}),[e.show,a]),Object(p.jsx)("div",{className:"card-wrapper ".concat(e.fullWidth?"full":""),style:{height:e.doTransition?r?u:0:"initial"},children:Object(p.jsx)("div",{className:"card ".concat(r?"show":""," ").concat(e.doTransition?"doTransition":""),ref:a,children:e.children})})}n(25);function g(e){var t=e.children;return Object(p.jsx)("div",{class:"errorBanner",children:t})}n(26),n(27);function O(e){var t=e.percentage;return t&&t>3&&(t=Math.max(20,t<90?t:100)),t>0?Object(p.jsx)("div",{class:"progressBar",children:Object(p.jsx)("div",{class:"progressBarInner",style:{width:"".concat(t,"%")}})}):Object(p.jsx)(s.a.Fragment,{})}function y(e){var t,n,r,s,c=JSON.parse(localStorage.getItem("video-progress")||"{}"),a=null;"movie"===e.type&&((t=null===c||void 0===c||null===(n=c[e.source])||void 0===n||null===(r=n.movie)||void 0===r||null===(s=r[e.slug])||void 0===s?void 0:s.full)&&(a=Math.floor(t.currentlyAt/t.totalDuration*100)));return Object(p.jsxs)("div",{className:"movieRow",onClick:function(){return e.onClick&&e.onClick()},children:[Object(p.jsxs)("div",{className:"left",children:[e.title,"\xa0",Object(p.jsxs)("span",{className:"year",children:["(",e.year,")"]})]}),Object(p.jsxs)("div",{className:"watch",children:[Object(p.jsxs)("p",{children:["Watch ",e.type]}),Object(p.jsx)(d,{})]}),Object(p.jsx)(O,{percentage:a})]})}n(28);function w(e){return Object(p.jsxs)("div",{className:"progress ".concat(e.show?"":"hide"," ").concat(e.failed?"failed":""),children:[e.text&&e.text.length>0?Object(p.jsx)("p",{children:e.text}):null,Object(p.jsx)("div",{className:"bar",children:Object(p.jsx)("div",{className:"bar-inner",style:{width:(e.progress/e.steps*100).toFixed(0)+"%"}})})]})}var S=n(14),k=n(11),N=n.n(k),T="".concat("https://movie-web-proxy.herokuapp.com","/https://lookmovie.io");function E(){return(E=Object(u.a)(i.a.mark((function e(t,n){var r,s,c,a,o,u,l,p,d,h,f,j,v,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(T,"/").concat(n,"s/search/?q=").concat(encodeURIComponent(t)),e.next=3,fetch(r).then((function(e){return e.text()}));case 3:if(s=e.sent,c=new DOMParser,a=c.parseFromString(s,"text/html"),o=Array.from(a.querySelectorAll(".movie-item-style-1")),u=o.map((function(e){return{type:n,title:e.querySelector("h6 a").innerText.trim(),year:e.querySelector(".year").innerText.trim(),slug:e.querySelector("a").href.split("/").pop()}})),l=new S.a(u,{threshold:.3,distance:200,keys:["title"]}),0!==(p=l.search(t.toString()).map((function(e){return e.item}))).length){e.next=12;break}return e.abrupt("return",{options:[]});case 12:if(!(p.length>1)){e.next=18;break}return d={options:[]},p.forEach((function(e){return d.options.push({title:e.title,slug:e.slug,type:e.type,year:e.year,source:"lookmovie"})})),e.abrupt("return",d);case 18:return h=p[0],f=h.title,j=h.slug,v=h.type,b=h.year,e.abrupt("return",{options:[{title:f,slug:j,type:v,year:b,source:"lookmovie"}]});case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return M.apply(this,arguments)}function M(){return(M=Object(u.a)(i.a.mark((function e(t){var n,r,s,c,a,o,u,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t);case 2:return n=e.sent,r=Math.floor(Date.now()/1e3),s="","movie"===t.type?s="".concat(T,"/manifests/movies/json/").concat(t.id,"/").concat(r,"/").concat(n,"/master.m3u8"):"show"===t.type&&(s="".concat(T,"/manifests/shows/json/").concat(n,"/").concat(r,"/").concat(t.id,"/master.m3u8")),e.next=8,fetch(s).then((function(e){return e.json()}));case 8:for(c=e.sent,a="",o=0,u=["1080p","1080","720p","720","480p","480","auto"];o<u.length;o++)!c[l=u[o]]||c[l].includes("dummy")||c[l].includes("earth-1984")||a||(a=c[l]);return e.abrupt("return",a.startsWith("/")?"".concat(T).concat(a):a);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return P.apply(this,arguments)}function P(){return(P=Object(u.a)(i.a.mark((function e(t){var n,r,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="","movie"===t.type?r="".concat(T,"/api/v1/security/movie-access?id_movie=").concat(t.id,"&token=1&sk=&step=1"):"show"===t.type&&(r="".concat(T,"/api/v1/security/show-access?slug=").concat(t.slug,"&token=&step=2")),e.next=4,fetch(r).then((function(e){return e.json()}));case 4:if(s=e.sent,!(c=null===s||void 0===s||null===(n=s.data)||void 0===n?void 0:n.accessToken)){e.next=8;break}return e.abrupt("return",c);case 8:return e.abrupt("return","Invalid type provided in config");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(u.a)(i.a.mark((function e(t){var n,r,s,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(T,"/shows/view/").concat(t),e.next=3,fetch(n).then((function(e){return e.text()}));case 3:return r=e.sent,s=N.a.parse("{"+r.slice(r.indexOf("show_storage")).split("};")[0].split("= {")[1].trim()+"}"),c=[],a=[],s.seasons.forEach((function(e){c.includes(e.season)||c.push(e.season),a[e.season]||(a[e.season]=[]),a[e.season].push(e.episode)})),e.abrupt("return",{seasons:c,episodes:a});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return(U=Object(u.a)(i.a.mark((function e(t,n,r,s){var c,a,o,u,l,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(T,"/").concat(n,"s/view/").concat(t),e.next=3,fetch(c).then((function(e){return e.text()}));case 3:if(a=e.sent,o=N.a.parse("{"+a.slice(a.indexOf("".concat(n,"_storage"))).split("};")[0].split("= {")[1].trim()+"}"),u="","movie"===n?u=o.id_movie:"show"===n&&(l=o.seasons.find((function(e){return e.season===r&&e.episode===s})))&&(u=l.id_episode),""!==u){e.next=9;break}return e.abrupt("return",{url:""});case 9:return e.next=11,C({slug:t,id:u,type:n});case 11:return p=e.sent,e.abrupt("return",{url:p});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q={findContent:function(e,t){return E.apply(this,arguments)},getStreamUrl:function(e,t,n,r){return U.apply(this,arguments)},getEpisodes:function(e){return D.apply(this,arguments)}},B={62:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",95:"!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"};function W(e){var t=function(e){for(var t=[/}\('([\s\S]*)', *(\d+), *(\d+), *'([\s\S]*)'\.split\('\|'\), *(\d+), *([\s\S]*)\)\)/,/}\('([\s\S]*)', *(\d+), *(\d+), *'([\s\S]*)'\.split\('\|'\)/],n=0;n<t.length;++n){var r;if(r=t[n].exec(e))return[r[1],r[4].split("|"),parseInt(r[2]),parseInt(r[3])]}throw new Error("Could not make sense of p.a.c.k.e.r data (unexpected code structure)")}(e),n=t[0],r=t[1],s=t[2],c=t[3];if(c!==r.length)throw new Error("Malformed p.a.c.k.e.r. symtab. ("+c+" != "+r.length+")");var a=function(e){if(2<=e<=36)return function(t){return parseInt(t,e)};var t={},n=B[e];if(!n)throw new Error("Unsupported encoding");for(;0<n.length;++n)t[n[0]]=0;return function(n){return n.split("").reverse().reduce((function(n,r){return Math.pow(e,r)*t[n]}))}}(s);return n.replace(/\b\w+\b/g,(function(e){return r[a(e)]||e}))}var _="https://movie-web-proxy.herokuapp.com/",A="".concat(_,"https://gomo.to"),F="".concat(A,"/movie"),V="".concat(A,"/decoding_v3.php");function H(){return(H=Object(u.a)(i.a.mark((function e(t,n){var r,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"movie"===n){e.next=3;break}return e.abrupt("return");case 3:return r=t.toLowerCase(),e.next=6,fetch("".concat(_,"https://v2.sg.media-imdb.com/suggestion/").concat(r.slice(0,1),"/").concat(r,".json")).then((function(e){return e.json()}));case 6:if(s=e.sent,c=[],s.d.forEach((function(e){e.id.startsWith("tt")&&"TV series"!==e.q&&"TV mini-series"!==e.q&&"video game"!==e.q&&"TV movie"!==e.q&&"TV special"!==e.q&&c.push({title:e.l,slug:e.id,type:"movie",year:e.y,source:"gomostream"})})),!(c.length>1)){e.next=13;break}return e.abrupt("return",{options:c});case 13:return e.abrupt("return",{options:[c[0]]});case 14:e.next=20;break;case 16:throw e.prev=16,e.t0=e.catch(0),console.error(e.t0),new Error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function J(){return(J=Object(u.a)(i.a.mark((function e(t,n,r,s){var c,a,o,u,l,p,d,h,f,j,v,b,m,x,g;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("movie"===n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("".concat(F,"/").concat(t)).then((function(e){return e.text()}));case 4:if("Movie not available."!==(o=e.sent)){e.next=7;break}return e.abrupt("return",{url:""});case 7:return u=null===(c=o.match(/var tc = '(.+)';/))||void 0===c?void 0:c[1],l=null===(a=o.match(/"_token": "(.+)",/))||void 0===a?void 0:a[1],(p=new FormData).append("tokenCode",u),p.append("_token",l),e.next=14,fetch(V,{method:"POST",body:p,headers:{"x-token":u.slice(5,13).split("").reverse().join("")+"13574199"}}).then((function(e){return e.json()}));case 14:return d=e.sent,h=d.find((function(e){return e.includes("gomo.to")})),e.next=18,fetch("".concat(_).concat(h)).then((function(e){return e.text()}));case 18:if(f=e.sent,j=new DOMParser,"File was deleted"!==(v=j.parseFromString(f,"text/html")).body.innerText){e.next=23;break}return e.abrupt("return",{url:""});case 23:return b=v.querySelectorAll("script")[8].innerHTML,(m=W(b).split("")).splice(0,43),x=m.findIndex((function(e){return'"'===e})),g=m.slice(0,x).join(""),e.abrupt("return",{url:g});case 29:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L={findContent:function(e,t){return H.apply(this,arguments)},getStreamUrl:function(e,t,n,r){return J.apply(this,arguments)}};function R(e,t){return z.apply(this,arguments)}function z(){return(z=Object(u.a)(i.a.mark((function e(t,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={options:[]},e.next=3,Promise.all([q.findContent(t,n),L.findContent(t,n)]);case 3:return e.sent.forEach((function(e){e&&e.options&&e.options.forEach((function(e){e&&r.options.push(e)}))})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e,t,n,r,s){return X.apply(this,arguments)}function X(){return(X=Object(u.a)(i.a.mark((function e(t,n,r,s,c){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r,e.next="lookmovie"===e.t0?3:"gomostream"===e.t0?6:9;break;case 3:return e.next=5,q.getStreamUrl(t,n,s,c);case 5:return e.abrupt("return",e.sent);case 6:return e.next=8,L.getStreamUrl(t,n,s,c);case 8:return e.abrupt("return",e.sent);case 9:return e.abrupt("return");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e,t){return K.apply(this,arguments)}function K(){return(K=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n,e.next="lookmovie"===e.t0?3:(e.t0,6);break;case 3:return e.next=5,q.getEpisodes(t);case 5:return e.abrupt("return",e.sent);case 6:return e.abrupt("return");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(29);function Q(e){var t=e.setType,n=e.choices,r=e.selected,s=e.noWrap,c=void 0!==s&&s,a=n.findIndex((function(e){return e.value===r})),o={opacity:-1!==a?1:0,transform:"translateX(".concat(-1!==a?7*a:0,"rem)")};return Object(p.jsxs)("div",{className:"typeSelector ".concat(c?"nowrap":""),children:[n.map((function(e){return Object(p.jsx)("div",{className:"choice ".concat(r===e.value?"selected":""),onClick:function(){return t(e.value)},children:e.label},e.value)})),Object(p.jsx)("div",{className:"selectedBar",style:o})]})}n(30);function Z(){var e=b(),t=e.navigate,n=e.setStreamUrl,r=e.setStreamData,c=s.a.useState([]),a=Object(l.a)(c,2),o=a[0],f=a[1],j=s.a.useState(0),v=Object(l.a)(j,2),O=v[0],S=v[1],k=s.a.useState(""),N=Object(l.a)(k,2),T=N[0],E=N[1],C=s.a.useState(!1),M=Object(l.a)(C,2),I=M[0],P=M[1],D=s.a.useState(!1),U=Object(l.a)(D,2),q=U[0],B=U[1],W=s.a.useState(!1),_=Object(l.a)(W,2),A=_[0],F=_[1],V=s.a.useState("movie"),H=Object(l.a)(V,2),J=H[0],L=H[1],z=function(e){S(4),E(e),P(!0)};function X(e,t,n,r){return K.apply(this,arguments)}function K(){return(K=Object(u.a)(i.a.mark((function e(s,c,a,o){var u,l,p,d,h,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n(""),e.prev=1,S(2),E('Getting stream for "'.concat(s,'"')),u=[],l=[],"show"!==a){e.next=12;break}return e.next=9,Y(c,o);case 9:p=e.sent,u=p.seasons,l=p.episodes;case 12:if(d="","movie"!==a){e.next=21;break}return e.next=16,G(c,a,o);case 16:if(h=e.sent,""!==(f=h.url)){e.next=20;break}return e.abrupt("return",z("Not found: ".concat(s)));case 20:d=f;case 21:S(4),n(d),r({title:s,type:a,seasons:u,episodes:l,slug:c,source:o}),E("Streaming..."),t("movie"),e.next=32;break;case 28:e.prev=28,e.t0=e.catch(1),console.error(e.t0),z("Failed to get stream");case 32:case"end":return e.stop()}}),e,null,[[1,28]])})))).apply(this,arguments)}function Z(){return(Z=Object(u.a)(i.a.mark((function e(t,n){var r,s,c,a,o,u,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!1),E("Searching for ".concat(n,' "').concat(t,'"')),S(1),B(!1),e.prev=4,e.next=7,R(t,n);case 7:if(r=e.sent,0!==(s=r.options).length){e.next=13;break}return e.abrupt("return",z("Could not find that ".concat(n)));case 13:if(!(s.length>1)){e.next=19;break}return S(2),E("Choose your ".concat(n)),f(s),B(!0),e.abrupt("return");case 19:c=s[0],a=c.title,o=c.slug,u=c.type,l=c.source,X(a,o,u,l),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(4),console.error(e.t0),z("Failed to watch ".concat(n));case 27:case"end":return e.stop()}}),e,null,[[4,23]])})))).apply(this,arguments)}return s.a.useEffect((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://movie-web-proxy.herokuapp.com",e.next=3,fetch("https://movie-web-proxy.herokuapp.com").catch((function(){F("Our content provider is currently offline, apologies.")}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(p.jsxs)("div",{className:"cardView",children:[Object(p.jsxs)(x,{children:[A?Object(p.jsx)(g,{children:A}):"",Object(p.jsx)(m,{accent:"Because watching content legally is boring",children:"What do you wanna watch?"}),Object(p.jsx)(Q,{setType:function(e){return L(e)},choices:[{label:"Movie",value:"movie"},{label:"TV Show",value:"show"}],noWrap:!0,selected:J}),Object(p.jsx)(h,{placeholder:"movie"===J?"Hamilton":"Atypical",onSubmit:function(e){return function(e,t){return Z.apply(this,arguments)}(e,J)}}),Object(p.jsx)(w,{show:O>0,failed:I,progress:O,steps:4,text:T})]}),Object(p.jsxs)(x,{show:q,doTransition:!0,children:[Object(p.jsxs)(m,{size:"medium",children:["Whoops, there are a few ",J,"s like that"]}),Object.entries(o.reduce((function(e,t){return e[t.source]||(e[t.source]=[]),e[t.source].push(t),e}),{})).map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"source",children:e[0]}),e[1].map((function(e,t){return Object(p.jsx)(y,{title:e.title,slug:e.slug,type:e.type,year:e.year,source:e.source,onClick:function(){B(!1),X(e.title,e.slug,e.type,e.source)}},t)}))]},e[0])}))]}),Object(p.jsx)("div",{className:"topRightCredits",children:Object(p.jsxs)("a",{href:"https://github.com/JamesHawkinss/movie-web",target:"_blank",rel:"noreferrer",children:["Check it out on GitHub ",Object(p.jsx)(d,{})]})})]})}function $(e){return Object(p.jsx)("div",{className:"cardView",children:Object(p.jsx)(x,{children:Object(p.jsx)(m,{accent:"How did you end up here?",children:"Oopsie doopsie"})})})}var ee=n(9),te=n.n(ee);n(31);function ne(e){return Object(p.jsx)("div",{className:"videoPlaceholder",children:Object(p.jsx)("div",{className:"videoPlaceholderBox",children:Object(p.jsx)("p",{children:e.children})})})}n(32);function re(e){var t=e.streamUrl,n=e.loading,r=e.setProgress,c=s.a.useRef(null),a=s.a.useState(!1),o=Object(l.a)(a,2),i=o[0],u=o[1];return s.a.useEffect((function(){if(!t.endsWith(".mp4")){if(u(!1),!c||!c.current||!t||0===t.length||n)return;var e=new te.a;if(!te.a.isSupported()&&c.current.canPlayType("application/vnd.apple.mpegurl"))return void(c.current.src=t);if(!te.a.isSupported())return void u(!0);e.attachMedia(c.current),e.loadSource(t)}}),[c,t,n]),i?Object(p.jsx)(ne,{children:"Your browser is not supported"}):n?Object(p.jsx)(ne,{children:"Loading episode..."}):t&&0!==t.length?t.endsWith(".mp4")?Object(p.jsx)("video",{className:"videoElement",ref:c,controls:!0,autoPlay:!0,onProgress:r,children:Object(p.jsx)("source",{src:t,type:"video/mp4"})}):Object(p.jsx)("video",{className:"videoElement",ref:c,controls:!0,autoPlay:!0,onProgress:r}):Object(p.jsx)(ne,{children:"No video selected"})}n(33);function se(e){var t=e.setType,n=e.choices,r=e.selected;return Object(p.jsx)("div",{className:"numberSelector",children:n.map((function(e){return Object(p.jsx)("div",{className:"choiceWrapper",children:Object(p.jsxs)("div",{className:"choice ".concat(r&&r===e.value?"selected":""),onClick:function(){return t(e.value)},children:[e.label,Object(p.jsx)(O,{percentage:e.percentage})]})},e.value)}))})}n(34);function ce(e){var t=e.setSeason,n=e.setEpisode,r=e.seasons,s=e.season,c=e.episodes,a=e.currentSeason,o=e.currentEpisode,i=(e.slug,e.source),u=c.map((function(e){var t,n,r,c=JSON.parse(localStorage.getItem("video-progress")||"{}"),a=0,o=0,u=null===c||void 0===c||null===(t=c[i])||void 0===t||null===(n=t.show)||void 0===n||null===(r=n.slug)||void 0===r?void 0:r["".concat(s,"-").concat(e)];u&&(a=u.currentlyAt,o=u.totalDuration);var l=Math.round(a/o*100);return{value:e.toString(),label:e,percentage:l}}));return Object(p.jsxs)("div",{className:"episodeSelector",children:[Object(p.jsx)(Q,{setType:t,choices:r.map((function(e){return{value:e.toString(),label:"Season ".concat(e)}})),selected:a}),Object(p.jsx)("br",{}),Object(p.jsx)(se,{setType:function(e){return n({episode:e,season:a})},choices:u,selected:o.season===a?o.episode:null})]})}n(35);function ae(e){var t=b(),n=t.streamUrl,r=t.streamData,c=t.setStreamUrl,a=s.a.useState("1"),o=Object(l.a)(a,2),i=o[0],u=o[1],d=s.a.useState([]),h=Object(l.a)(d,2),f=h[0],j=h[1],v=s.a.useState([]),g=Object(l.a)(v,2),O=g[0],y=g[1],w=s.a.useState({episode:null,season:null}),S=Object(l.a)(w,2),k=S[0],N=S[1],T=s.a.useState(!1),E=Object(l.a)(T,2),C=E[0],M=E[1];s.a.useEffect((function(){y(r.episodes[i])}),[i,r.episodes]),s.a.useEffect((function(){"show"===r.type&&(j(r.seasons),u(r.seasons[0]),N({episode:r.episodes[r.seasons[0]][0],season:r.seasons[0]}),y(r.episodes[r.seasons[0]]))}),[r]),s.a.useEffect((function(){var e=!1;return"show"!==r.type?function(){e=!0}:k.episode?(M(!0),G(r.slug,r.type,r.source,k.season,k.episode).then((function(t){var n=t.url;e||(c(n),M(!1))})).catch((function(t){e||console.error(t)})),function(){e=!0}):(M(!1),void c(""))}),[k,r,c]);return Object(p.jsx)("div",{className:"cardView showType-".concat(r.type),children:Object(p.jsxs)(x,{fullWidth:!0,children:[Object(p.jsx)(m,{accent:"Return to home",accentLink:"search",children:r.title}),"show"===r.type?Object(p.jsxs)(m,{size:"small",children:["Season ",k.season,": Episode ",k.episode]}):void 0,Object(p.jsx)(re,{streamUrl:n,loading:C,setProgress:function(e){var t=JSON.parse(localStorage.getItem("video-progress")||"{}");t[r.source]||(t[r.source]={}),t[r.source][r.type]||(t[r.source][r.type]={}),t[r.source][r.type][r.slug]||(t[r.source][r.type][r.slug]={});var n="show"===r.type?"".concat(i,"-").concat(k.episode):"full";t[r.source][r.type][r.slug][n]={currentlyAt:Math.floor(e.currentTarget.currentTime),totalDuration:Math.floor(e.currentTarget.duration),updatedAt:Date.now()},"show"===r.type&&(t[r.source][r.type][r.slug][n].show={season:i,episode:k.episode}),localStorage.setItem("video-progress",JSON.stringify(t))}}),"show"===r.type?Object(p.jsx)(ce,{setSeason:u,setEpisode:N,season:i,seasons:f,episodes:O,slug:r.slug,currentSeason:i,currentEpisode:k,source:r.source}):""]})})}function oe(){var e=b().page;return"search"===e?Object(p.jsx)(Z,{}):"movie"===e?Object(p.jsx)(ae,{}):Object(p.jsx)($,{})}var ie=function(){return Object(p.jsx)(v,{children:Object(p.jsx)(oe,{})})};a.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(ie,{})}),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.856d59fe.chunk.js.map