(this["webpackJsonpreact-redux-blogapp"]=this["webpackJsonpreact-redux-blogapp"]||[]).push([[0],{45:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(18),s=n.n(r),o=(n(45),n(3)),i=n(13),j=n(11),p=n(16),l=n.n(p),O=n(24),d=n(25),b=n.n(d),u=function(e){return function(){var t=Object(O.a)(l.a.mark((function t(n){var a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"POKEMON_LIST_LOADING"}),15,a=15*e-15,t.next=6,b.a.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(15,"&offset=").concat(a));case 6:c=t.sent,n({type:"POKEMON_LIST_SUCCESS",payload:c.data}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:"POKEMON_LIST_FAIL"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},h=n(15),m=n.n(h),g=n(1),x=function(e){var t=e.match.params.pokemon,n=Object(j.b)(),c=Object(j.c)((function(e){return e.Pokemon}));console.log(t),Object(a.useEffect)((function(){var e;n((e=t,function(){var t=Object(O.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"POKEMON_MULTIPLE_LOADING"}),t.next=4,b.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e));case 4:a=t.sent,n({type:"POKEMON_MULTIPLE_SUCCESS",payload:a.data,pokemonName:e}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n({type:"POKEMON_MULTIPLE_FAIL"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))}),[]);return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:t}),function(){if(!m.a.isEmpty(c.data[t])){var e=c.data[t];return Object(g.jsxs)("div",{className:"pokemon-wrapper",children:[Object(g.jsxs)("div",{className:"item",children:[Object(g.jsx)("h1",{children:"Sprites"}),Object(g.jsx)("img",{src:e.sprites.front_default,alt:""}),Object(g.jsx)("img",{src:e.sprites.back_default,alt:""}),Object(g.jsx)("img",{src:e.sprites.front_shiny,alt:""}),Object(g.jsx)("img",{src:e.sprites.back_shiny,alt:""})]}),Object(g.jsxs)("div",{className:"item",children:[Object(g.jsx)("h1",{children:"Stats"}),e.stats.map((function(e){return Object(g.jsxs)("p",{children:[e.stat.name," ",e.base_stat]})}))]}),Object(g.jsxs)("div",{className:"item",children:[Object(g.jsx)("h1",{children:"Abilities"}),e.abilities.map((function(e){return Object(g.jsx)("p",{children:e.ability.name})}))]})]})}return c.loading?Object(g.jsx)("p",{children:"Loading..."}):""!==c.errorMsg?Object(g.jsx)("p",{children:c.errorMsg}):Object(g.jsx)("p",{children:"error getting pokemon"})}()]})},f=n(40),v=n(37),M=n.n(v),L=function(e){var t=Object(a.useState)(""),n=Object(f.a)(t,2),c=n[0],r=n[1],s=Object(j.b)(),o=Object(j.c)((function(e){return e.PokemonList}));console.log(o),Object(a.useEffect)((function(){p(1)}),[]);var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;s(u(e))};return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"search-wrapper",children:[Object(g.jsx)("p",{children:"Search : "}),Object(g.jsx)("input",{type:"text",onChange:function(e){return r(e.target.value)}}),Object(g.jsx)("button",{onClick:function(){return e.history.push("/pokemon/".concat(c))},children:"Search"})]}),m.a.isEmpty(o.data)?o.loading?Object(g.jsx)("p",{children:"Loading..."}):""!==o.errorMsg?Object(g.jsx)("p",{children:o.errorMsg}):Object(g.jsx)("p",{children:"unable to get data"}):Object(g.jsx)("div",{className:"list-wrapper",children:o.data.map((function(e){return Object(g.jsxs)("div",{className:"pokemon-item",children:[Object(g.jsx)("p",{children:e.name}),Object(g.jsx)(i.b,{to:"/pokemon/".concat(e.name),children:"View"})]})}))}),!m.a.isEmpty(o.data)&&Object(g.jsx)(M.a,{pageCount:Math.ceil(o.count/15),pageRangeDisplayed:2,marginPagesDisplayed:1,onPageChange:function(e){return p(e.selected+1)},containerClassName:"pagination"})]})};var k=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("nav",{children:Object(g.jsx)(i.c,{to:"/",children:"Search"})}),Object(g.jsxs)(o.d,{children:[Object(g.jsx)(o.b,{path:"/",exact:!0,component:L}),Object(g.jsx)(o.b,{path:"/pokemon/:pokemon",exact:!0,component:x}),Object(g.jsx)(o.a,{to:"/"})]})]})},_=n(10),E=n(38),y=n(39),N=n(4),S={loading:!1,data:[],errorMsg:"",count:0},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POKEMON_LIST_LOADING":return Object(N.a)(Object(N.a)({},e),{},{loading:!0,errorMsg:""});case"POKEMON_LIST_FAIL":return Object(N.a)(Object(N.a)({},e),{},{loading:!1,errorMsg:"unable to get pokemon"});case"POKEMON_LIST_SUCCESS":return Object(N.a)(Object(N.a)({},e),{},{loading:!1,data:t.payload.results,errorMsg:"",count:t.payload.count});default:return e}},I=n(20),w={loading:!1,data:{},errorMsg:""},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POKEMON_MULTIPLE_LOADING":return Object(N.a)(Object(N.a)({},e),{},{loading:!0,errorMsg:""});case"POKEMON_MULTIPLE_FAIL":return Object(N.a)(Object(N.a)({},e),{},{loading:!1,errorMsg:"unable to find pokemon"});case"POKEMON_MULTIPLE_SUCCESS":return Object(N.a)(Object(N.a)({},e),{},{loading:!1,errorMsg:"",data:Object(N.a)(Object(N.a)({},e.data),{},Object(I.a)({},t.pokemonName,t.payload))});default:return e}},T=Object(_.combineReducers)({PokemonList:P,Pokemon:C}),K=Object(_.createStore)(T,Object(E.composeWithDevTools)(Object(_.applyMiddleware)(y.a)));s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(i.a,{children:Object(g.jsx)(j.a,{store:K,children:Object(g.jsx)(k,{})})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.e3767714.chunk.js.map