(this["webpackJsonppicas-y-fijas"]=this["webpackJsonppicas-y-fijas"]||[]).push([[0],{119:function(t,e,n){},120:function(t,e,n){},127:function(t,e){},129:function(t,e){},140:function(t,e){},142:function(t,e){},169:function(t,e){},171:function(t,e){},172:function(t,e){},177:function(t,e){},179:function(t,e){},185:function(t,e){},187:function(t,e){},206:function(t,e){},218:function(t,e){},221:function(t,e){},225:function(t,e,n){"use strict";n.r(e);var c=n(5),a=n.n(c),s=n(112),i=n.n(s),o=(n(119),n(114)),u=n(12),r=(n(120),n(113)),j=n.n(r),b=n(2);function f(t){return j()(t).toString()}var l=function(){var t=Object(c.useState)(""),e=Object(u.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(["","","",""]),i=Object(u.a)(s,2),r=i[0],j=i[1],l=Object(c.useState)(["","","",""]),h=Object(u.a)(l,2),O=h[0],d=h[1],m=Object(c.useState)(0),p=Object(u.a)(m,2),g=p[0],x=p[1],v=Object(c.useState)(0),y=Object(u.a)(v,2),S=y[0],k=y[1],N=Object(c.useState)(!1),C=Object(u.a)(N,2),M=C[0],w=C[1],F=Object(c.useState)("Intenta adivinar la combinaci\xf3n"),I=Object(u.a)(F,2),E=I[0],R=I[1],D=[Object(c.useRef)(),Object(c.useRef)(),Object(c.useRef)(),Object(c.useRef)()];return Object(c.useEffect)((function(){var t=function(t,e){for(t=t.toString();t.length<e;)t="0"+t;return t}(Math.floor(1e4*Math.random()),4);a(f(t));var e=["","","",""];t.split("").forEach((function(t,n){e[n]=f(t)})),j(e)}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{src:"pawel-czerwinski-fPN1w7bIuNU-unsplash.jpg",alt:"",className:"background-image"}),Object(b.jsxs)("div",{className:"main",children:[M?S||g?4===S?Object(b.jsx)("h1",{children:"\xa1Has ganado!"}):Object(b.jsxs)("h1",{children:["Hay ",Object(b.jsx)("b",{children:g})," picas y ",Object(b.jsx)("b",{children:S})," fijas"]}):Object(b.jsx)("h1",{children:"No hay picas ni fijas"}):Object(b.jsx)("h1",{children:E}),Object(b.jsx)("div",{className:"number-input",children:[0,1,2,3].map((function(t){return Object(b.jsx)("input",{type:"number",className:"form-control",value:O[t],min:"0",max:"9",maxLength:"1",onKeyUp:function(e){!function(t,e){var n=Object(o.a)(O);t.key.match("^\\d+$")?(n[e]=t.key,e+1<=3&&D[Math.abs(e+1)%4].current.focus()):8===t.keyCode?(n[e]="",e-1>=0&&""===t.target.value&&D[Math.abs(e-1)%4].current.focus()):37===t.keyCode?D[Math.abs(e-1)%4].current.focus():39===t.keyCode&&D[Math.abs(e+1)%4].current.focus(),d(n)}(e,t)},onChange:function(){},ref:D[t]},t)}))}),Object(b.jsx)("button",{className:"btn btn-try",onClick:function(){!function(t,e){w(!0);var n=0,c=0;t.forEach((function(t,a){var s=f(t);e.includes(s)&&(s===e[a]?n+=1:c+=1)})),x(c),k(n),4!==O.join("").length&&(w(!1),R("Debes ingresar todos los numeros"))}(O,r)},children:"Intentar"}),Object(b.jsxs)("div",{className:"bottom",children:[Object(b.jsx)("small",{children:"MD5 de la combinaci\xf3n: "}),Object(b.jsx)("span",{className:"hash",children:n.toUpperCase()})]})]})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,226)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),s(t),i(t)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(l,{})}),document.getElementById("root")),h()}},[[225,1,2]]]);
//# sourceMappingURL=main.73b3e69f.chunk.js.map