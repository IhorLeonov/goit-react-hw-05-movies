"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[286],{3286:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c,u=e(5861),o=e(9439),i=e(7757),s=e.n(i),p=e(7689),f=e(2791),h=e(6309),l=e(168),d=e(6444),v=d.ZP.ul(r||(r=(0,l.Z)(["\n  margin-top: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  justify-content: center;\n"]))),x=d.ZP.li(a||(a=(0,l.Z)(["\n  margin-top: 15px;\n"]))),g=d.ZP.p(c||(c=(0,l.Z)(["\n  margin-top: 15px;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 265px;\n"]))),m=e(184),w=function(){var n=(0,p.UO)().movieId,t=(0,f.useState)([]),e=(0,o.Z)(t,2),r=e[0],a=e[1],c=(0,f.useState)(!1),i=(0,o.Z)(c,2),l=i[0],d=i[1],w=(0,p.bx)(),Z=(0,o.Z)(w,1)[0];return(0,f.useEffect)((function(){d(!0);var t=new AbortController,e={signal:t.signal};function r(){return(r=(0,u.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,h.d_)(n,e);case 3:r=t.sent,a(r.cast),d(!1),t.next=13;break;case 8:if(t.prev=8,t.t0=t.catch(0),"ERR_CANCELED"!==t.t0.code){t.next=12;break}return t.abrupt("return");case 12:console.log("Error");case 13:return t.prev=13,t.finish(13);case 15:case"end":return t.stop()}}),t,null,[[0,8,13,15]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){return t.abort()}}),[n]),(0,m.jsx)(m.Fragment,{children:Z&&(0,m.jsxs)(v,{children:[r.length>0&&r.map((function(n){var t=n.id,e=n.profile_path,r=n.name,a=n.character;return(0,m.jsxs)(x,{children:[(0,m.jsx)("div",{children:e?(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e),alt:"Poster ".concat(r),width:"280px",height:"420px"}):(0,m.jsxs)("p",{children:["Photo ",r," must be here"]})}),(0,m.jsx)(g,{children:r}),(0,m.jsxs)(g,{children:["Character: ",a]})]},t)})),0===r.length&&!l&&(0,m.jsx)("p",{children:"We don't have any information about cast for this movies."})]})})}},6309:function(n,t,e){e.d(t,{Cp:function(){return s},MS:function(){return d},Ox:function(){return f},Pt:function(){return p},d_:function(){return h},tx:function(){return l}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),o="https://api.themoviedb.org/3/",i="a59dfea75e9e40e203f0819879862061",s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"trending/movie/day?api_key=").concat(i,"&page=1"),n.next=3,u.Z.get(e,t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(t,"&page=1&language=en-US&include_adult=false"),n.next=3,u.Z.get(r,e);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"),n.next=3,u.Z.get(r,e);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"),n.next=3,u.Z.get(r,e);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"),n.next=3,u.Z.get(r,e);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o,"movie/").concat(t,"/videos?api_key=").concat(i),n.next=3,u.Z.get(r,e);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=286.f3c646d6.chunk.js.map