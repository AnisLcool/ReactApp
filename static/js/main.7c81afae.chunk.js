(this.webpackJsonprobo=this.webpackJsonprobo||[]).push([[0],[,,,,,,,,function(e,a,t){},,,,,,,,,,function(e,a,t){e.exports=t(45)},,,,,function(e,a,t){},,,,,,function(e,a,t){var n={"./ahri.jpg":30,"./ashe.jpg":31,"./ekko.jpg":32,"./ezreal.jpg":33,"./jayce.jpg":34,"./jhin.jpg":35,"./jinx.jpg":36,"./kaisa.jpg":37,"./kassadin.jpg":38,"./kayle.jpg":39,"./lucian.jpg":40,"./miss fortune.jpg":41,"./yasuo.jpg":42,"./ziggz.jpg":43,"./zoe.jpg":44};function r(e){var a=i(e);return t(a)}function i(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=29},function(e,a,t){e.exports=t.p+"static/media/ahri.9721e8ec.jpg"},function(e,a,t){e.exports=t.p+"static/media/ashe.84749ed2.jpg"},function(e,a,t){e.exports=t.p+"static/media/ekko.e443c5b9.jpg"},function(e,a,t){e.exports=t.p+"static/media/ezreal.fe3d7267.jpg"},function(e,a,t){e.exports=t.p+"static/media/jayce.e33abeb5.jpg"},function(e,a,t){e.exports=t.p+"static/media/jhin.1916b8e0.jpg"},function(e,a,t){e.exports=t.p+"static/media/jinx.105be1ca.jpg"},function(e,a,t){e.exports=t.p+"static/media/kaisa.b8d987c3.jpg"},function(e,a,t){e.exports=t.p+"static/media/kassadin.9663a70c.jpg"},function(e,a,t){e.exports=t.p+"static/media/kayle.57823065.jpg"},function(e,a,t){e.exports=t.p+"static/media/lucian.9594f31d.jpg"},function(e,a,t){e.exports=t.p+"static/media/miss fortune.521b6e7d.jpg"},function(e,a,t){e.exports=t.p+"static/media/yasuo.06751873.jpg"},function(e,a,t){e.exports=t.p+"static/media/ziggz.7af61b15.jpg"},function(e,a,t){e.exports=t.p+"static/media/zoe.04eb8df1.jpg"},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(2),s=t.n(i),c=(t(23),t(3)),o=t(4),l=t(6),u=t(7),p=t(5),m=(t(8),t(9),function(e){var a=e.name,n=e.origin,i=e.classs,s=e.tier;return r.a.createElement("div",{className:"galactic dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:t(29)("./".concat(a.toLowerCase(),".jpg")),alt:"lol_champ",width:"200px",height:"340px"}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",{className:"origin"},"Origin ~ ",n),r.a.createElement("p",{className:"class"},"Class ~ ",i),r.a.createElement("p",{className:"tier"},"Tier ~ ",s)))}),g=function(e){var a=e.champs.map((function(e,a){return r.a.createElement(m,{key:a,name:e.name,origin:e.origin,classs:e.class,tier:e.tier})}));return r.a.createElement("div",null,a)},d=function(e){var a=e.searchChange;return r.a.createElement("div",{className:"pa2 tc"},r.a.createElement("input",{className:"pa3 ba b--green",style:{background:"#86C1ED",borderRadius:"20px"},type:"search",placeholder:"search Champions...",onChange:a}))},h=[{name:"Ahri",origin:"Star Guardian",class:"Sorcerer",tier:2},{name:"Ekko",origin:"Cybernetic",class:"Infiltrator",tier:5},{name:"Ezreal",origin:"Chrono",class:"Blaster",tier:3},{name:"Jayce",origin:"Space Pirate",class:"Vanguard",tier:3},{name:"Jhin",origin:"Dark Star",class:"Sniper",tier:4},{name:"Jinx",origin:"Rebel",class:"Blaster",tier:4},{name:"Kaisa",origin:"Valkyrie",class:"Infiltrator",tier:2},{name:"Lucian",origin:"Cybernetic",class:"Blaster",tier:2},{name:"Yasuo",origin:"Rebel",class:"Blademaster",tier:2},{name:"Kayle",origin:"Valkyrie",class:"Blademaster",tier:4},{name:"Ziggz",origin:"Rebel",class:"Demolitionist",tier:1},{name:"Ashe",origin:"Celestial",class:"Sniper",tier:3},{name:"Kassadin",origin:"Celestial",class:"Mana-Reaver",tier:3},{name:"Zoe",origin:"Star Guardian",class:"Sorcerer",tier:1},{name:"Miss Fortune",origin:"Valkyrie",class:"Blaster",tier:5}].sort((function(e,a){return e.name>a.name?1:-1})),f=function(e){return r.a.createElement("div",null,e.children)},j=function(e){Object(u.a)(t,e);var a=Object(l.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={hasError:!1},n}return Object(o.a)(t,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops, an error occured"):this.props.children}}]),t}(n.Component),E=function(e){Object(u.a)(t,e);var a=Object(l.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={champions:[]},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({champions:h})}},{key:"render",value:function(){var e=this.props,a=e.searchField,t=e.onSearchChange,n=this.state.champions.filter((function(e){return e.name.toLowerCase().includes(a)}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"TFT Galaxy Champions"),r.a.createElement(d,{searchChange:t}),r.a.createElement(f,null,r.a.createElement(j,null,r.a.createElement(g,{champs:n}))))}}]),t}(n.Component),b=Object(p.b)((function(e){return{searchField:e.searchField}}),(function(e){return{onSearchChange:function(a){return e((t=a.target.value,console.log("text : ",t),{type:"CHANGE_SEARCH_FIELD",payload:t}));var t}}}))(E),v=t(16),y=t(1),k={searchField:""},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:a.payload});default:return e}},x={isPending:!1,data:[],error:""},O=t(17);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=Object(v.createLogger)(),w=Object(y.d)(C,Object(y.a)(O.a,S));Object(y.c)({searchChamps:C,requestData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"REQUEST_DATA_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_DATA_SUCCESS":return Object.assign({},e,{data:a.payload,isPending:!1});case"REQUEST_DATA_FAILED":return Object.assign({},e,{error:a.payload,isPending:!1});default:return e}}});s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",null,r.a.createElement(p.a,{store:w},r.a.createElement(b,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.7c81afae.chunk.js.map