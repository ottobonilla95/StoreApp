(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[16],{229:function(e,t,a){"use strict";var n=a(42),c=a(0),r=a.n(c),l=a(525),o=a(115),i=a.n(o),s=(a(124),a(116)),u=a.n(s),d=(a(18),a(143)),b=a(273),m=a(271),p=a(114),h=a(306),v=a(505),E=a(276);function j(e){var t=e.children,a=e.className,n=e.content,c=u()("sub header",a),l=Object(b.a)(j,e),o=Object(m.a)(j,e);return r.a.createElement(o,i()({},l,{className:c}),p.a.isNil(t)?n:t)}j.handledProps=["as","children","className","content"],j.propTypes={},j.create=Object(E.e)(j,(function(e){return{content:e}}));var O=j;function f(e){var t=e.children,a=e.className,n=e.content,c=u()("content",a),l=Object(b.a)(f,e),o=Object(m.a)(f,e);return r.a.createElement(o,i()({},l,{className:c}),p.a.isNil(t)?n:t)}f.handledProps=["as","children","className","content"],f.propTypes={};var g=f;function N(e){var t=e.attached,a=e.block,n=e.children,c=e.className,l=e.color,o=e.content,s=e.disabled,E=e.dividing,j=e.floated,f=e.icon,y=e.image,k=e.inverted,A=e.size,w=e.sub,C=e.subheader,z=e.textAlign,G=u()("ui",l,A,Object(d.a)(a,"block"),Object(d.a)(s,"disabled"),Object(d.a)(E,"dividing"),Object(d.e)(j,"floated"),Object(d.a)(!0===f,"icon"),Object(d.a)(!0===y,"image"),Object(d.a)(k,"inverted"),Object(d.a)(w,"sub"),Object(d.b)(t,"attached"),Object(d.d)(z),"header",c),K=Object(b.a)(N,e),P=Object(m.a)(N,e);if(!p.a.isNil(n))return r.a.createElement(P,i()({},K,{className:G}),n);var T=h.a.create(f,{autoGenerateKey:!1}),x=v.a.create(y,{autoGenerateKey:!1}),D=O.create(C,{autoGenerateKey:!1});return T||x?r.a.createElement(P,i()({},K,{className:G}),T||x,(o||D)&&r.a.createElement(g,null,o,D)):r.a.createElement(P,i()({},K,{className:G}),o,D)}N.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"],N.propTypes={},N.Content=g,N.Subheader=O;var y=N,k=a(532);t.a=function(e){var t=Object(c.useState)(!1),a=Object(n.a)(t,2),o=a[0],i=a[1],s=function(){i(!1)};return r.a.createElement(l.a,{trigger:r.a.createElement("div",{onClick:function(){return i(!0)}},e.children),basic:!0,size:"small",open:o},r.a.createElement(y,{icon:"archive",content:e.tittle}),r.a.createElement(l.a.Content,null,r.a.createElement("p",null,e.description)),r.a.createElement(l.a.Actions,null,r.a.createElement(k.a,{basic:!0,color:"red",inverted:!0,onClick:function(){s()}},r.a.createElement(h.a,{name:"remove"})," No"),r.a.createElement(k.a,{color:"green",inverted:!0,onClick:function(){e.onAccept(),s()}},r.a.createElement(h.a,{name:"checkmark"})," Yes")))}},524:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(302),l=a(229),o=a(50);t.default=function(e){var t=Object(o.b)().t;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,t("modules.account.account.tittle","Account")),c.a.createElement(r.a,null),c.a.createElement(l.a,{tittle:"Delete Account",description:"Are you sure you want yo delete your account!",onAccept:function(){e.deleteAccount()}},c.a.createElement("button",{className:"ui button negative ".concat(e.account.loading?"loading":""),type:"submit",disabled:e.account.loading},t("modules.account.account.form.buttons.delete-account","Delete Account"))))}}}]);
//# sourceMappingURL=16.3fd4683e.chunk.js.map