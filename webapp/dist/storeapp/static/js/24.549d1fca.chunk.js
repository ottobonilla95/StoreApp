(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[24],{533:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(113),o=t(42),l=t(51),u=t(112),s=t(12),i=t(535),m=t(528),p=t(306),E=t(532),g=t(13),b=t(525),h=function(e){return r.a.createElement(b.a,{open:e.open},r.a.createElement(b.a.Header,null,"Error!"),r.a.createElement(b.a.Content,null,r.a.createElement("p",null,e.Message)),r.a.createElement(b.a.Actions,null,r.a.createElement(E.a,{onClick:function(){e.closeErrorModal()},positive:!0,labelPosition:"right",icon:"checkmark",content:"Aceptar"})))},d=t(50),f=Object(l.b)((function(e){return{user:e.user}}),(function(e){return{signOut:function(){return e(Object(g.j)())},signInSuccess:function(a){return e(Object(g.i)(a))}}}))((function(e){var a=Object(d.b)().t;localStorage.getItem("user")&&!e.user.isLoggedIn&&e.signInSuccess(JSON.parse(localStorage.getItem("user")));var t=Object(n.useState)(!1),c=Object(o.a)(t,2),l=c[0],g=c[1];Object(n.useEffect)((function(){e.user.loginError&&g(!0)}),[e.user.loginError]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{Message:e.user.loginError,open:l,closeErrorModal:function(){g(!1)}}),r.a.createElement(i.a,{inverted:!0,className:"nav-menu"},r.a.createElement(u.a,{className:"item",to:"/dashboard/app/home",activeClassName:"active"},a("modules.navbar.home","Home")),r.a.createElement(u.a,{className:"item",to:"/dashboard/app/store",activeClassName:"active"},a("modules.navbar.store","Store")),r.a.createElement(i.a.Menu,{position:"right"},e.user.isLoggedIn&&r.a.createElement(m.a,{item:!0,text:e.user.username},r.a.createElement(m.a.Menu,null,r.a.createElement(m.a.Item,{onClick:function(){s.a.push("/dashboard/app/account/basicinfo")}},r.a.createElement(p.a,{name:"user"})," ",a("modules.navbar.account","Account")),r.a.createElement(m.a.Item,{onClick:function(){e.signOut()}},r.a.createElement(p.a,{name:"log out"}),a("modules.navbar.logout","Log out")))),!0!==e.user.isLoggedIn&&r.a.createElement(i.a.Item,null,r.a.createElement(E.a,{primary:!0,onClick:function(){s.a.push("/dashboard/user/signin")}},a("modules.navbar.signin","Sign In"))),!0!==e.user.isLoggedIn&&r.a.createElement(i.a.Item,null,r.a.createElement(E.a,{onClick:function(){s.a.push("/signup")}},a("modules.navbar.signup","Sign up"))))),e.children)}));t.d(a,"App",(function(){return O}));var v=r.a.lazy((function(){return t.e(22).then(t.bind(null,521))})),I=r.a.lazy((function(){return t.e(15).then(t.bind(null,522))})),O=function(e){return r.a.createElement(f,null,r.a.createElement("div",{className:"ui container"},r.a.createElement(c.b,{path:"".concat(e.match.path,"/"),exact:!0},r.a.createElement(c.a,{to:"".concat(e.match.path,"/app")})),r.a.createElement(c.b,{path:"".concat(e.match.path,"/app"),component:v}),r.a.createElement(c.b,{path:"".concat(e.match.path,"/user"),component:I})))};a.default=O}}]);
//# sourceMappingURL=24.549d1fca.chunk.js.map