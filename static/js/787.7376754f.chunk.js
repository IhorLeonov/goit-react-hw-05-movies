"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[787],{787:function(n,t,e){e.r(t);var r=e(861),a=e(439),c=e(757),u=e.n(c),o=e(689),i=e(791),s=e(719),p=e(184);t.default=function(){var n=(0,o.UO)().movieId,t=(0,i.useState)([]),e=(0,a.Z)(t,2),c=e[0],f=e[1];return(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.tx)(n);case 3:e=t.sent,f(e.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]),(0,p.jsx)("ul",{children:c.length>0?c.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h4",{children:["Author: ",e]}),(0,p.jsx)("p",{children:r})]},t)})):(0,p.jsx)("p",{children:"We don't have any reviews for this movies."})})}},719:function(n,t,e){e.d(t,{Cp:function(){return s},Ox:function(){return f},Pt:function(){return p},d_:function(){return v},tx:function(){return h}});var r=e(861),a=e(757),c=e.n(a),u=e(243),o="https://api.themoviedb.org/3/",i="a59dfea75e9e40e203f0819879862061",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(o,"trending/movie/day?api_key=").concat(i,"&page=1"),n.next=3,u.Z.get(t);case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(t,"&page=1&language=en-US&include_adult=false"),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=787.7376754f.chunk.js.map