"use strict";(self.webpackChunkhw_05_movies=self.webpackChunkhw_05_movies||[]).push([[550],{8550:function(n,t,r){r.r(t),r.d(t,{default:function(){return g}});var e=r(5861),a=r(885),i=r(7757),c=r.n(i),o=r(1454),u=r(4172),s=r(7596),p=r(502),f=r(2791),d=r(9687),l=r(2840),x=r(184);function g(){var n=(0,f.useState)([]),t=(0,a.Z)(n,2),r=t[0],i=t[1],g=(0,f.useState)(!1),m=(0,a.Z)(g,2),h=m[0],v=m[1],b=(0,f.useState)(null),Z=(0,a.Z)(b,2),w=Z[0],y=Z[1];(0,f.useEffect)((function(){var n=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(!0),n.prev=1,n.next=4,(0,u.Vk)();case 4:0===(t=n.sent).results.length||i(t.results),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),y(n.t0);case 12:return n.prev=12,v(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,8,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[]);var j=Boolean(r.length);return(0,x.jsxs)(l.i,{children:[(0,x.jsx)(l.D,{children:"Trending today"}),(0,x.jsx)(s.Ix,{position:"top-right",autoClose:5e3}),h&&(0,x.jsx)(o.Z,{}),w&&(0,x.jsx)(p.Z,{text:"Please, try again later"}),j&&(0,x.jsx)(d.Z,{items:r})]})}},2840:function(n,t,r){r.d(t,{D:function(){return u},i:function(){return o}});var e,a,i=r(168),c=r(6444),o=c.ZP.div(e||(e=(0,i.Z)(["\n  background-color: #00bcd4de;\n  margin: 12px 24px;\n  border-radius: 4px;  \n"]))),u=c.ZP.h2(a||(a=(0,i.Z)(["\n    margin: 12px 24px;\n    font-size: 20px;\n    font-weight: 500;\n    color: #ffffff;\n"])))},1454:function(n,t,r){r.d(t,{Z:function(){return p}});r(2791);var e,a=r(5243),i=r(168),c=r(6444).ZP.div(e||(e=(0,i.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),o=r(4164),u=r(184),s=document.querySelector("#modal-root");function p(n){return(0,o.createPortal)((0,u.jsx)(c,{children:(0,u.jsx)(a.W0,{height:100,width:100,radius:5,color:"#4fa94d",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})}),s)}},9687:function(n,t,r){r.d(t,{Z:function(){return b}});r(2791);var e,a,i,c,o,u=r(168),s=r(6444),p=s.ZP.ul(e||(e=(0,u.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));\n  grid-gap: 5px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),f=s.ZP.div(a||(a=(0,u.Z)(["\n    \n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    border-radius: 4px;\n"]))),d=s.ZP.li(i||(i=(0,u.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  margin: 5px;\n  background-color: #fff;\n"]))),l=s.ZP.img(c||(c=(0,u.Z)(["\n  width: 30%;\n  height: 100px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 2px;\n\n  &:hover {\n    /* transform: scale(1.03); */\n    cursor: pointer;\n  }\n"]))),x=s.ZP.p(o||(o=(0,u.Z)(["\n  margin-left: 5px;\n"]))),g=r(6731),m=r(7689),h=r(184);function v(n){var t=n.movieId,r=n.img,e=n.title,a=(0,m.TH)();return(0,h.jsx)(d,{children:(0,h.jsx)(g.rU,{to:"/movies/".concat(t),state:{from:a},children:(0,h.jsxs)(f,{children:[r?(0,h.jsx)(l,{src:"https://image.tmdb.org/t/p/w342".concat(r),alt:e}):(0,h.jsx)(l,{src:"http://dummyimage.com/100x150/99cccc.gif&text=Not+image! "}),(0,h.jsx)(x,{children:e})]})})},t)}function b(n){var t=n.items;return(0,h.jsx)(p,{children:t.map((function(n){var t=n.id,r=n.backdrop_path,e=n.title,a=n.poster_path,i=r||a;return(0,h.jsx)(v,{movieId:t,img:i,title:e},t)}))})}},502:function(n,t,r){r.d(t,{Z:function(){return o}});r(2791);var e,a=r(168),i=r(6444).ZP.p(e||(e=(0,a.Z)(["\ndisplay: inline-block;\n    font-size: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 12px 24px;\n"]))),c=r(184);function o(n){var t=n.text;return(0,c.jsx)(i,{children:t})}},4172:function(n,t,r){r.d(t,{M1:function(){return g},Pg:function(){return l},Vk:function(){return d},gH:function(){return x},tx:function(){return m}});var e=r(5861),a=r(7757),i=r.n(a),c=r(4569),o=r.n(c),u=r(2007),s=r.n(u),p="/movie/",f=o().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"2bec22f10b981066f1b82ccd0874c542",page:1}}),d=function(){var n=(0,e.Z)(i().mark((function n(){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.get("".concat("/trending/movie/day"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.get("".concat(p).concat(t,"?"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(i().mark((function n(t,r){var e,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.get("".concat("/search/movie?","?"),{params:{page:r,query:t}});case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),g=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.get("".concat(p).concat(t).concat("/credits","?"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.get("".concat(p).concat(t).concat("/reviews","?"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();l.PropTypes={id:s().number},x.PropTypes={page:s().number,query:s().string.isRequired},g.PropTypes={id:s().number},m.PropTypes={id:s().number}}}]);
//# sourceMappingURL=550.e6f8b15a.chunk.js.map