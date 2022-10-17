"use strict";(self.webpackChunkhw_05_movies=self.webpackChunkhw_05_movies||[]).push([[490],{4490:function(n,e,r){r.r(e),r.d(e,{default:function(){return v}});var t=r(5861),i=r(885),a=r(7757),c=r.n(a),o=r(2791),s=r(4172),u=r(7689),p=r(6731),d=r(1454),l=r(502),x=r(787),f=r(184);function v(){var n,e,r=(0,o.useState)(null),a=(0,i.Z)(r,2),v=a[0],h=a[1],g=(0,o.useState)(!1),b=(0,i.Z)(g,2),m=b[0],j=b[1],w=(0,o.useState)(null),y=(0,i.Z)(w,2),Z=y[0],k=y[1],P=(0,u.UO)().movieId,z=(0,u.TH)(),S=z.pathname.includes("cast")?"/movies/".concat(P):"/movies/".concat(P,"/cast"),_=z.pathname.includes("reviews")?"/movies/".concat(P):"/movies/".concat(P,"/reviews"),T=null!==(n=null===z||void 0===z||null===(e=z.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";if((0,o.useEffect)((function(){var n=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,j(!0),k(null),n.next=5,(0,s.Pg)(P);case 5:e=n.sent,h(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),k(n.t0);case 12:return n.prev=12,j(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[P]),!v)return null;var q=v.poster_path,C=v.title,E=v.vote_average,J=v.overview,L=v.genres.map((function(n){return n.name})).join(", ");return(0,f.jsxs)("div",{children:[m&&(0,f.jsx)(d.Z,{}),Z&&(0,f.jsx)(l.Z,{text:"Please, try again later"}),(0,f.jsxs)("div",{children:[(0,f.jsx)(x.jJ,{to:T,children:"Go back"}),(0,f.jsx)(x.im,{children:(0,f.jsxs)(x.i1,{children:[q?(0,f.jsx)(x.Ei,{src:"https://image.tmdb.org/t/p/w342".concat(q),alt:v.title}):(0,f.jsx)(x.Ei,{src:"http://dummyimage.com/100x150/99cccc.gif&text=Not+image! "}),(0,f.jsx)(x.DK,{children:(0,f.jsxs)(x.Wf,{children:[(0,f.jsx)("h2",{children:C}),(0,f.jsxs)("p",{children:["User Score: ",(E/10*100).toFixed(0)," %"]}),(0,f.jsx)("h3",{children:"Overviev"}),(0,f.jsx)("p",{children:J}),(0,f.jsx)("h4",{children:"Genres"}),(0,f.jsx)("p",{children:L})]})})]})}),(0,f.jsxs)(x.aV,{children:[(0,f.jsx)(x.jJ,{children:(0,f.jsx)(p.OL,{to:S,state:{from:T},children:"Cast"})}),(0,f.jsx)(x.jJ,{children:(0,f.jsx)(p.OL,{to:_,state:{from:T},children:"Reviews"})})]}),(0,f.jsx)(o.Suspense,{fallback:null,children:(0,f.jsx)(u.j3,{})})]})]})}},787:function(n,e,r){r.d(e,{DK:function(){return g},Ei:function(){return h},Wf:function(){return b},aV:function(){return m},i1:function(){return v},im:function(){return f},jJ:function(){return x}});var t,i,a,c,o,s,u,p=r(168),d=r(6444),l=r(6731),x=(0,d.ZP)(l.rU)(t||(t=(0,p.Z)(["\n  display: inline-block;\n  margin-left: 24px;\n  padding: 5px;\n  border: 0;\n  top: 70px;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  background-color: #fff;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 4px;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n    background-color: #00bcd4de;\n    border-radius: 4px;\n    box-shadow: 0px 2px 4px -1px \n        rgb(0 0 0 / 20%), 0px 4px 5px 0px \n        rgb(0 0 0 / 14%), 0px 1px 10px 0px \n        rgb(0 0 0 / 12%);\n  }  \n"]))),f=d.ZP.div(i||(i=(0,p.Z)(["\n    border-bottom: 1px solid #211e1e;\n    background-position: right -200px top;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background: linear-gradient(to bottom right, \n        rgb(0 188 212 / 87%), rgb(0 188 212 / 50%));\n    color: #ffffff;\n    border-radius: 4px;\n    margin: 12px 24px;\n    box-shadow: 0px 2px 4px -1px \n        rgb(0 0 0 / 20%), 0px 4px 5px 0px \n        rgb(0 0 0 / 14%), 0px 1px 10px 0px \n        rgb(0 0 0 / 12%);\n"]))),v=d.ZP.div(a||(a=(0,p.Z)(["\n    padding: 30px 40px;\n    display: flex;\n    flex-wrap: nowrap;\n"]))),h=d.ZP.img(c||(c=(0,p.Z)(["\n    display: block;\n    min-width: 300px;\n    width: 300px;\n    height: 450px;\n    position: relative;\n    top: 0;\n    left: 0;\n    border-radius: 4px;\n"]))),g=d.ZP.div(o||(o=(0,p.Z)(["\n    display: flex;\n"]))),b=d.ZP.div(s||(s=(0,p.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    box-sizing: border-box;\n    padding-left: 40px;\n"]))),m=d.ZP.ul(u||(u=(0,p.Z)(["\n    /* margin: 12px 24px; */\n    display: flex;\n    align-items: center;\n"])))},1454:function(n,e,r){r.d(e,{Z:function(){return p}});r(2791);var t,i=r(5243),a=r(168),c=r(6444).ZP.div(t||(t=(0,a.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),o=r(4164),s=r(184),u=document.querySelector("#modal-root");function p(n){return(0,o.createPortal)((0,s.jsx)(c,{children:(0,s.jsx)(i.W0,{height:100,width:100,radius:5,color:"#4fa94d",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})}),u)}},502:function(n,e,r){r.d(e,{Z:function(){return o}});r(2791);var t,i=r(168),a=r(6444).ZP.p(t||(t=(0,i.Z)(["\ndisplay: inline-block;\n    font-size: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 12px 24px;\n"]))),c=r(184);function o(n){var e=n.text;return(0,c.jsx)(a,{children:e})}},4172:function(n,e,r){r.d(e,{M1:function(){return v},Pg:function(){return x},Vk:function(){return l},gH:function(){return f},tx:function(){return h}});var t=r(5861),i=r(7757),a=r.n(i),c=r(4569),o=r.n(c),s=r(2007),u=r.n(s),p="/movie/",d=o().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"2bec22f10b981066f1b82ccd0874c542",page:1}}),l=function(){var n=(0,t.Z)(a().mark((function n(){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.get("".concat("/trending/movie/day"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.get("".concat(p).concat(e,"?"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(a().mark((function n(e,r){var t,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.get("".concat("/search/movie?","?"),{params:{page:r,query:e}});case 2:return t=n.sent,i=t.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),v=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.get("".concat(p).concat(e).concat("/credits","?"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.get("".concat(p).concat(e).concat("/reviews","?"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();x.PropTypes={id:u().number},f.PropTypes={page:u().number,query:u().string.isRequired},v.PropTypes={id:u().number},h.PropTypes={id:u().number}}}]);
//# sourceMappingURL=490.afaa1ddc.chunk.js.map