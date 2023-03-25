"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[62],{62:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r,a=t(861),c=t(439),i=t(757),s=t.n(i),o=t(87),u=t(689),p=t(791),l=t(719),d=t(168),h=t(128),f=t(444),v=t(184),x=(0,f.ZP)(o.rU)(r||(r=(0,d.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),g=function(e){var n=e.to,t=e.children;return(0,v.jsxs)(x,{to:n,children:[(0,v.jsx)(h.jTe,{size:"24"}),t]})},j=function(){var e,n,t=(0,u.UO)().movieId,r=(0,p.useState)(null),i=(0,c.Z)(r,2),d=i[0],h=i[1],f=null!==(e=null===(n=(0,u.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";if((0,p.useEffect)((function(){function e(){return(e=(0,a.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Ox)(t);case 3:n=e.sent,h(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),d){var x=d.genres,j=d.overview,m=d.poster_path,w=d.release_date,k=d.title,_=d.vote_average;return(0,v.jsxs)("div",{children:[(0,v.jsx)(g,{to:f,children:"Back to movies"}),(0,v.jsx)("div",{children:m?(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(m),alt:"Poster ".concat(k),width:"250px",height:"375px"}):(0,v.jsx)("p",{children:"Poster must be here"})}),(0,v.jsxs)("h2",{children:[k," (",w.slice(0,4),")"]}),(0,v.jsxs)("p",{children:["User score: ",Math.round(10*_),"%"]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:j})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h4",{children:"Genres"}),(0,v.jsx)("p",{children:x.length>0&&x.map((function(e){return e.name})).join(" ")})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,v.jsx)(p.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading page..."}),children:(0,v.jsx)(u.j3,{})})]})}}},719:function(e,n,t){t.d(n,{Cp:function(){return u},Ox:function(){return l},Pt:function(){return p},d_:function(){return d},tx:function(){return h}});var r=t(861),a=t(757),c=t.n(a),i=t(243),s="https://api.themoviedb.org/3/",o="a59dfea75e9e40e203f0819879862061",u=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"trending/movie/day?api_key=").concat(o,"&page=1"),e.next=3,i.Z.get(n);case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(n,"&page=1&language=en-US&include_adult=false"),e.next=3,i.Z.get(t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"movie/").concat(n,"?api_key=").concat(o,"&language=en-US"),e.next=3,i.Z.get(t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"),e.next=3,i.Z.get(t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"),e.next=3,i.Z.get(t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=62.c69d865b.chunk.js.map