(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[18],{149:function(e,t,a){e.exports=a.p+"static/media/defaultImage.4e62dd19.png"},507:function(e,t,a){"use strict";a.r(t);var n=a(30),r=a(42),l=a(0),s=a.n(l),c=a(51),o=a(11),i=a(535),m=a(532),u=a(491),E=a(509),g=a(537),d=a(303),p=a.n(d),f=a(12),h=a(498),v=a.n(h),b=a(149),w=a.n(b),N=Object(c.b)((function(e){return{user:e.user}}),{setCurrentStore:o.v})((function(e){return s.a.createElement("div",{className:"ui card",onClick:function(){f.a.push("store/detail/".concat(e.store.id)),e.setCurrentStore(e.store)}},s.a.createElement("div",{className:"image"},e.store.image&&s.a.createElement("img",{src:e.store.image,alt:""}),!e.store.image&&s.a.createElement("img",{src:w.a,alt:""})),s.a.createElement("div",{className:"content"},function(){if(e.user.user_id===e.store.user_id)return s.a.createElement("i",{className:"right floated user icon"})}(),s.a.createElement("div",{className:"header"},e.store.name),s.a.createElement("div",{className:"description"},e.store.description)),s.a.createElement("div",{className:"extra content"},s.a.createElement("span",{className:"right floated"},"Created in ",v()(e.store.creation_date).year()),s.a.createElement("span",null,s.a.createElement("i",{className:"box icon"}),e.store.items.length," Items")))})),O=function(e){var t=e.tittle,a=e.message;return s.a.createElement("div",{className:"ui message"},s.a.createElement("div",{className:"header"},t),s.a.createElement("p",null,a))},C=a(529),j=a(304),I=function(){return s.a.createElement(C.a,null,s.a.createElement(j.a,null,s.a.createElement(j.a.Image,null)),s.a.createElement(C.a.Content,null,s.a.createElement(C.a.Header,null,s.a.createElement(j.a,null,s.a.createElement(j.a.Header,null,s.a.createElement(j.a.Line,null)))),s.a.createElement(C.a.Description,null,s.a.createElement(j.a,null,s.a.createElement(j.a.Paragraph,null,s.a.createElement(j.a.Line,null),s.a.createElement(j.a.Line,null))))),s.a.createElement(C.a.Content,{extra:!0},s.a.createElement(j.a,null,s.a.createElement(j.a.Paragraph,null,s.a.createElement(j.a.Line,null)))))},S=function(e){var t=e.stores;if(e.loading){return s.a.createElement(C.a.Group,null,[1,2,3].map((function(e){return s.a.createElement(I,{key:e})})))}return t.length>0?s.a.createElement("div",{className:"ui link cards"}," ",function(e){return e.map((function(e){return s.a.createElement(N,{key:e.id,store:e})}))}(t)," "):s.a.createElement(O,{tittle:"Sorry",message:"We have not found any stores !"})},k=a(50);t.default=Object(c.b)((function(e){return{store:e.store,user:e.user}}),(function(e){return{fetchStores:function(t){return e(Object(o.m)(t))},fetchOwnStores:function(t){return e(Object(o.g)(t))}}}))((function(e){var t,a,c,o=Object(k.b)().t,d=Object(l.useState)("all"),h=Object(r.a)(d,2),v=h[0],b=h[1],w=Object(l.useState)(""),N=Object(r.a)(w,2),O=N[0],C=N[1];Object(l.useEffect)((function(){"all"===v?e.fetchStores(e.store.stores.pagination):e.fetchOwnStores(e.store.stores.pagination)}),[v]);var j=function(e,t){var a=t.name;b(a)};!0===e.user.isLoggedIn&&(a=s.a.createElement(i.a.Item,{name:"own",active:"own"===v,onClick:j},o("modules.store.nav.own","Own")),c=s.a.createElement(i.a.Item,null,s.a.createElement(m.a,{onClick:function(){f.a.push("".concat(e.match.path,"/new"))}},s.a.createElement("i",{className:"plus icon"}),o("form.buttons.new","New"))));return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,{attached:"top",tabular:!0},s.a.createElement(i.a.Item,(t={name:"all",active:!0},Object(n.a)(t,"active","all"===v),Object(n.a)(t,"onClick",j),t),o("modules.store.nav.all","All")),a,s.a.createElement(i.a.Menu,{position:"right"},s.a.createElement(i.a.Item,{className:"big-screen-component "},s.a.createElement(u.a,{type:"text",transparent:!0,icon:{name:"search",link:!0},placeholder:o("modules.store.nav.searchstores","Search stores..."),onChange:function(e){C(e.target.value)}})),c)),s.a.createElement(E.a,{attached:"bottom"},s.a.createElement(S,{stores:O.length>0?p.a.filter(e.store.stores.list,(function(e){var t=e.name.toLowerCase().search(O),a=e.description.toLowerCase().search(O);return-1!==t||-1!==a})):e.store.stores.list,loading:e.store.loading}),s.a.createElement("br",null),e.store.stores.pagination&&s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement(g.a,{boundaryRange:0,ellipsisItem:null,firstItem:null,lastItem:null,siblingRange:1,activePage:e.store.stores.pagination.page,onPageChange:function(t,a){var n=a.activePage,r=e.store.stores.pagination;r.page=n,e.fetchStores(r)},totalPages:e.store.stores.pagination.pages}))))}))}}]);
//# sourceMappingURL=18.6f92de6e.chunk.js.map