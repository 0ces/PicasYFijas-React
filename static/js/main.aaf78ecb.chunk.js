(this["webpackJsonppicas-y-fijas"]=this["webpackJsonppicas-y-fijas"]||[]).push([[0],{119:function(t,e,n){},120:function(t,e,n){},127:function(t,e){},129:function(t,e){},140:function(t,e){},142:function(t,e){},169:function(t,e){},171:function(t,e){},172:function(t,e){},177:function(t,e){},179:function(t,e){},185:function(t,e){},187:function(t,e){},206:function(t,e){},218:function(t,e){},221:function(t,e){},225:function(t,e,n){"use strict";n.r(e);var c=n(4),a=n.n(c),i=n(112),s=n.n(i),o=(n(119),n(114)),r=n(10),u=(n(120),n(113)),j=n.n(u),b=n(2);function f(t){return j()(t).toString()}var l=function(){var t=Object(c.useState)(""),e=Object(r.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)(["","","",""]),s=Object(r.a)(i,2),u=s[0],j=s[1],l=Object(c.useState)(["","","",""]),h=Object(r.a)(l,2),O=h[0],d=h[1],m=Object(c.useState)(0),p=Object(r.a)(m,2),g=p[0],x=p[1],v=Object(c.useState)(0),y=Object(r.a)(v,2),S=y[0],k=y[1],C=Object(c.useState)(!1),M=Object(r.a)(C,2),N=M[0],w=M[1],I=Object(c.useState)("Intenta adivinar la combinaci\xf3n"),F=Object(r.a)(I,2),R=F[0],E=F[1],B=Object(c.useState)(0),D=Object(r.a)(B,2),H=D[0],L=D[1],P=Object(c.useState)(!1),U=Object(r.a)(P,2),z=U[0],J=U[1],T=[Object(c.useRef)(),Object(c.useRef)(),Object(c.useRef)(),Object(c.useRef)()],q=function(){var t=function(){for(var t=["","","",""],e=0;e<t.length;e++){for(var n=Math.floor(10*Math.random()).toString();t.includes(n);)n=Math.floor(10*Math.random()).toString();t[e]=n}return t.join("")}();a(f(t));var e=["","","",""];t.split("").forEach((function(t,n){e[n]=f(t)})),j(e)};function K(t,e){if(z)q(),L(0),x(0),k(0),w(!1),E("Intenta adivinar la combianci\xf3n"),d(["","","",""]),J(!1);else{w(!0);var n=0,c=0;t.forEach((function(t,a){var i=f(t);e.includes(i)&&(i===e[a]?n+=1:c+=1)})),x(c),k(n),4!==O.join("").length?(w(!1),E("Debes ingresar todos los numeros")):L(H+1),4===n&&J(!0)}}return Object(c.useEffect)((function(){q()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{src:"https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=pawel-czerwinski-fPN1w7bIuNU-unsplash.jpg&w=1920",alt:"",className:"background-image"}),Object(b.jsxs)("div",{className:"main",children:[N?S||g?z?Object(b.jsx)("h1",{children:"\xa1Has ganado!"}):Object(b.jsxs)("h1",{children:["Hay ",Object(b.jsx)("b",{children:g})," pica",1===g?"":"s"," y ",Object(b.jsx)("b",{children:S})," fija",1===S?"":"s"]}):Object(b.jsx)("h1",{children:"No hay picas ni fijas"}):Object(b.jsx)("h1",{children:R}),Object(b.jsx)("div",{className:"number-input",children:[0,1,2,3].map((function(t){return Object(b.jsx)("input",{type:"number",className:"form-control",value:O[t],min:"0",max:"9",maxLength:"1",onKeyUp:function(e){!function(t,e){var n=Object(o.a)(O);t.key.match("^\\d+$")?(n[e]=t.key,e+1<=3&&T[Math.abs(e+1)%4].current.focus()):8===t.keyCode?(n[e]="",e-1>=0&&""===t.target.value&&T[Math.abs(e-1)%4].current.focus()):37===t.keyCode?T[Math.abs(e+3)%4].current.focus():39===t.keyCode?T[Math.abs(e+1)%4].current.focus():13===t.keyCode&&K(O,u),d(n)}(e,t)},onChange:function(){},ref:T[t]},t)}))}),Object(b.jsx)("button",{className:"btn btn-try",onClick:function(){K(O,u)},children:z?"Reiniciar":"Intentar"}),H>0?Object(b.jsxs)("small",{style:{marginBottom:"1rem"},children:["Has realizado ",H," intento",1===H?"":"s"]}):null,Object(b.jsxs)("div",{className:"bottom",children:[Object(b.jsx)("small",{children:"MD5 de la combinaci\xf3n: "}),Object(b.jsx)("span",{className:"hash",children:n.toUpperCase()})]})]})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,226)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),i(t),s(t)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(l,{})}),document.getElementById("root")),h()}},[[225,1,2]]]);
//# sourceMappingURL=main.aaf78ecb.chunk.js.map