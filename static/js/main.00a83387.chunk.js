(this.webpackJsonpcalculadora=this.webpackJsonpcalculadora||[]).push([[0],[,,,,,,,,,function(c,e,t){},function(c,e,t){},function(c,e,t){},,function(c,e,t){},function(c,e,t){"use strict";t.r(e);var a=t(1),l=t(4),s=t.n(l),j=(t(9),t(2)),i=(t(10),t(11),t(0)),n=function(c){return Object(i.jsx)("button",{onClick:function(){return c.click&&c.click(c.value)},className:c.class,children:c.value})},u=(t(13),function(c){return Object(i.jsx)("div",{id:"display",children:c.res})}),o=function(){var c=Object(a.useState)(!1),e=Object(j.a)(c,2),t=e[0],l=e[1],s=Object(a.useState)(1),o=Object(j.a)(s,2),b=o[0],r=o[1],O=Object(a.useState)(""),k=Object(j.a)(O,2),x=k[0],d=k[1],v=Object(a.useState)(0),p=Object(j.a)(v,2),f=p[0],h=p[1],S=Object(a.useState)(0),g=Object(j.a)(S,2),m=g[0],w=g[1],y=Object(a.useState)("0"),C=Object(j.a)(y,2),F=C[0],J=C[1];function A(c){try{if("."==c&&F.includes("."))return}catch(e){}1==t&&J(F=""),"0"==F&&(F=""),J(F+=c),l(t=!1)}function B(c){if(1===b)h(f=parseFloat(F)),console.log(f,m);else switch(w(m=parseFloat(F)),console.log(f,m),x){case"+":h(f+=m),console.log("somou");break;case"-":h(f-=m);break;case"*":h(f*=m);break;case"/":h(f/=m)}J(F=f),l(t=!0),r(b=2),d(x=c),console.log(f,m)}return Object(i.jsx)("div",{id:"back",children:Object(i.jsxs)("section",{id:"calculadora",children:[Object(i.jsx)(u,{id:"res",res:F}),Object(i.jsx)(n,{click:function(){return r(b=1),J(F=0),h(f=0),w(m=0),d(x=""),void l(t=!1)},class:"triple",value:"AC"}),Object(i.jsx)(n,{click:B,class:"operation",value:"+"}),Object(i.jsx)(n,{value:"7",click:A}),Object(i.jsx)(n,{value:"8",click:A}),Object(i.jsx)(n,{value:"9",click:A}),Object(i.jsx)(n,{click:B,class:"operation",value:"-"}),Object(i.jsx)(n,{value:"4",click:A}),Object(i.jsx)(n,{value:"5",click:A}),Object(i.jsx)(n,{value:"6",click:A}),Object(i.jsx)(n,{click:B,class:"operation",value:"*"}),Object(i.jsx)(n,{value:"1",click:A}),Object(i.jsx)(n,{value:"2",click:A}),Object(i.jsx)(n,{value:"3",click:A}),Object(i.jsx)(n,{click:B,class:"operation",value:"/"}),Object(i.jsx)(n,{class:"double",value:"0",click:A}),Object(i.jsx)(n,{value:".",click:A}),Object(i.jsx)(n,{click:B,class:"operation",value:"="})]})})},b=function(c){return Object(i.jsxs)("div",{id:"app",children:[Object(i.jsx)("h1",{children:"Calculadora"}),Object(i.jsx)(o,{})]})};s.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.00a83387.chunk.js.map