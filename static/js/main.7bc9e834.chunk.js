(this.webpackJsonpmoviecards=this.webpackJsonpmoviecards||[]).push([[0],{15:function(e,t,a){},32:function(e,t){},33:function(e,t,a){e.exports=a(62)},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),i=a.n(c),l=a(10),o=a(8),s=a(29),u=a(7),m=a(5),p=a.n(m),d=a(11),f=a(13),v=a.n(f),E=(a(15),function(e){var t=e.movie,a=t.poster_path,n=t.title,c=t.overview,i=t.vote_average,l=t.id,o=e.movie.details,s=o.release_date,u=o.runtime,m=o.genres,p="https://image.tmdb.org/t/p/original".concat(a);return r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"poster-container"},r.a.createElement("div",{className:"rating"},r.a.createElement("h2",null,r.a.createElement("i",{className:"fas fa-star"}),i)),r.a.createElement("div",{className:"runtime"},r.a.createElement("h2",null,r.a.createElement("i",{className:"fas fa-stopwatch"}),u+" min")),r.a.createElement("img",{src:p,onClick:function(){return e.handleMovieClick(l)},alt:"".concat(n," poster")})),r.a.createElement("div",{className:"moviedata-container"},r.a.createElement("div",null,r.a.createElement("h4",null,s.substr(0,4),m.map((function(e){return e.name+", "}))),r.a.createElement("h1",null,n)),r.a.createElement("p",null,c)))}),b=function(e){return r.a.createElement("div",null,r.a.createElement("button",{onClick:e.onClick},e.buttonTitle))},g=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],i=a[1];return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit(c)}},r.a.createElement("input",{type:"text",placeholder:"Search...",name:"search",autoComplete:"off",onChange:function(e){i(e.target.value)}}),r.a.createElement("button",{type:"submit"},r.a.createElement("i",{className:"fas fa-search"}))))},h=function(e){return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){}}))},y=function(e){var t="0aecc06bb4fadb06b5f071fef0c2ce6d",a=Object(u.f)(),n=e.movies,c=e.isLoading,i=e.searchRequest,l=e.searchComplete,o=e.handleMovieClick,s=function(){var e=Object(d.a)(p.a.mark((function e(a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.next=3,v.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(t,"&language=en-US&query=").concat(a,"&page=1&include_adult=false"));case 3:return n=e.sent,e.next=6,Promise.all(n.data.results.map(function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t.id);case 2:t.details=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return e.abrupt("return",l(n.data.results));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(p.a.mark((function e(a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://api.themoviedb.org/3/movie/".concat(a,"?api_key=").concat(t,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"header-container"},r.a.createElement(b,{buttonTitle:"My Favorites"}),r.a.createElement(b,{buttonTitle:"Upcoming Movies"}),r.a.createElement(b,{buttonTitle:"Popular Movies",onClick:function(){return a.push("/popular")}})),r.a.createElement(g,{onSubmit:s}),c&&r.a.createElement("span",null,"loading..."),r.a.createElement(h,{movieIDList:null}),r.a.createElement("div",{className:"master-container"},console.log(n),n.map((function(e){return r.a.createElement(E,{movie:e,loading:c,handleMovieClick:o})}))))},O=(a(61),function(e){var t="0aecc06bb4fadb06b5f071fef0c2ce6d",a=e.clickedMovieState.movie,c=e.isLoading,i=Object(n.useState)({cast:[],castIsLoading:!0}),s=Object(o.a)(i,2),u=s[0],m=s[1];Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://api.themoviedb.org/3/movie/".concat(a.id,"/credits?api_key=").concat(t));case 2:(n=e.sent).data.cast.splice(4),m({cast:n.data.cast,castIsLoading:!1});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,a.id]);var f={margin:"0 .25em 0em .25em",display:"flex",flexFlow:"column"},E={alignSelf:"center",borderRadius:"50%",boxShadow:"0px 0px 20px 0px rgba(0, 0, 0, 0.27)",height:"auto",width:"3em"},b={fontSize:".7em",margin:".25em",padding:0,textAlign:"center"},g={fontSize:".7em",margin:0,padding:0,textAlign:"center",color:"grey"};return r.a.createElement("div",{className:"container"},c?"Loading Placeholder":r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{className:"top-image",src:"https://image.tmdb.org/t/p/original/"+a.backdrop_path,alt:"".concat(a.title,' + " backdrop"')}),r.a.createElement("h1",{className:"title-text"},a.title),r.a.createElement(l.b,{to:"/"},"Temp Back Link")),r.a.createElement("div",{className:"info-container"},r.a.createElement("h3",null,'"',a.details.tagline,'"'),r.a.createElement("div",{className:"cast-container"},u.cast.map((function(e){return r.a.createElement("div",{style:f},r.a.createElement("img",{style:E,src:"https://image.tmdb.org/t/p/w500"+e.profile_path,alt:"Cast member: ".concat(e.name)}),r.a.createElement("p",{style:b},e.character),r.a.createElement("p",{style:g},e.name))}))),r.a.createElement("p",null,"Plot: ",r.a.createElement("br",null)," ",a.overview),r.a.createElement("div",{className:"footer-details"},r.a.createElement("p",null,"Release Date: ",r.a.createElement("br",null),a.release_date),r.a.createElement("p",null,"Budget:",r.a.createElement("br",null)," ","$ "+a.details.budget.toLocaleString()),r.a.createElement("a",{href:"https://www.imdb.com/title/".concat(a.details.imdb_id)},r.a.createElement("i",{className:"fab fa-imdb fa-2x"}))))))}),k=a(32),w=a.n(k);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S={isLoading:!0,movies:[]},C=function(e,t){switch(t.type){case N:return x({},e,{isLoading:!0});case L:return x({},e,{isLoading:!1,movies:t.payload});default:return e}},N="MOVIE_SEARCH_REQUEST",L="MOVIE_SEARCH_COMPLETE",_=function(){var e=Object(n.useReducer)(C,S),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)({movie:[],isClicked:!1}),l=Object(o.a)(i,2),s=l[0],m=l[1],p=Object(u.f)(),d=function(){return c({type:N})},f=function(e){return c({type:L,payload:e})},v=function(e){var t=E.find((function(t){return t.id===e}));m({movie:t,isClicked:!0}),p.push("/moviepage")},E=a.movies,b=a.isLoading;return r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",render:function(){return r.a.createElement(y,{movies:E,isLoading:b,searchRequest:d,searchComplete:f,handleMovieClick:v})}}),r.a.createElement(u.a,{path:"/moviepage",render:function(){return r.a.createElement(O,{clickedMovieState:s,isLoading:b})}}),r.a.createElement(u.a,{path:"/favorites",component:h}),r.a.createElement(u.a,{path:"/popular",render:function(){return r.a.createElement(w.a,{clickedMovieState:s,isLoading:b})}}))};i.a.render(r.a.createElement(l.a,null,r.a.createElement(_,null)),document.querySelector("#root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.7bc9e834.chunk.js.map