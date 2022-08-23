(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(7),a=c.n(i),s=(c(12),c(13),c(1)),n=(c(14),c(15),c(0)),l=function(e){var t=e.movie;return Object(n.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(n.jsx)("div",{className:"card-image",children:Object(n.jsx)("figure",{className:"image is-4by3",children:Object(n.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsxs)("div",{className:"media",children:[Object(n.jsx)("div",{className:"media-left",children:Object(n.jsx)("figure",{className:"image is-48x48",children:Object(n.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(n.jsx)("div",{className:"media-content",children:Object(n.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(n.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},r=function(e){var t=e.movies;return Object(n.jsx)("div",{className:"movies",children:t.map((function(e){return Object(n.jsx)(l,{movie:e},e.imdbId)}))})},o=c(2),d=(c(17),function(){return Object(n.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(n.jsx)("div",{className:"Loader__content"})})});c(18);function j(e){return fetch("".concat("https://www.omdbapi.com/?i=tt3896198&apikey=9841355e","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}var b=function(e){var t=e.onAdd,c=e.onClear,i=e.isDisabled,a=Object(s.useState)(""),r=Object(o.a)(a,2),b=r[0],m=r[1],u=Object(s.useState)(!1),v=Object(o.a)(u,2),h=v[0],O=v[1],x=Object(s.useState)(!1),f=Object(o.a)(x,2),p=f[0],N=f[1],g=Object(s.useState)(null),y=Object(o.a)(g,2),C=y[0],S=y[1],w=Object(s.useCallback)((function(e){e.preventDefault(),N(!0),j(b).then((function(e){"Error"in e?O(!0):S({title:e.Title,description:e.Plot,imgUrl:"N/A"===e.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":e.Poster,imdbUrl:"https://imdb.com/title".concat(e.imdbID),imdbId:e.imdbID})})).finally((function(){return N(!1)}))}),[b,j]),I=Object(s.useCallback)((function(e){O(!1),m(e.currentTarget.value)}),[b]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{className:"find-movie",onSubmit:w,children:[Object(n.jsxs)("div",{className:"field",children:[Object(n.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(n.jsx)("div",{className:"control",children:Object(n.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:b,onChange:I})}),h&&Object(n.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(n.jsxs)("div",{className:"field is-grouped",children:[Object(n.jsx)("div",{className:"control",children:Object(n.jsx)("button",{"data-cy":"searchButton",type:"submit",className:"button is-light",disabled:0===b.length,children:"Find a movie"})}),Object(n.jsx)("div",{className:"control",children:Object(n.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",disabled:null===C,onClick:function(){C&&t(C),S(null),m(""),O(!1)},children:"Add to the list"})})]}),Object(n.jsx)("div",{className:"control",children:Object(n.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:c,disabled:i,children:"Clear local storage"})})]}),Object(n.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(n.jsx)("h2",{className:"title",children:"Preview"}),p&&Object(n.jsx)(d,{}),C&&!p&&Object(n.jsx)(l,{movie:C})]})]})},m=c(6),u=function(){var e=function(e,t){var c,i=localStorage.getItem(e);c=null===i?t:JSON.parse(i);var a=Object(s.useState)(c),n=Object(o.a)(a,2),l=n[0],r=n[1];return{allMovies:l,setAllMovies:function(t){r((function(e){return[].concat(Object(m.a)(e),[t])})),localStorage.setItem(e,JSON.stringify([].concat(Object(m.a)(l),[t])))}}}("movies",[]),t=e.allMovies,c=e.setAllMovies,i=0===t.length;return Object(n.jsxs)("div",{className:"page",children:[Object(n.jsx)("div",{className:"page-content",children:Object(n.jsx)(r,{movies:t})}),Object(n.jsx)("div",{className:"sidebar",children:Object(n.jsx)(b,{onAdd:function(e){t.some((function(t){return t.title===e.title}))||c(e)},onClear:function(){localStorage.clear()},isDisabled:i})})]})};a.a.render(Object(n.jsx)(u,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.a6d22974.chunk.js.map