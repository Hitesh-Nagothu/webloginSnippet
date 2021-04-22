(this.webpackJsonpweblogin=this.webpackJsonpweblogin||[]).push([[0],[,,,function(e,n,t){e.exports={login:"Login_login__5LqAR",actions:"Login_actions__37v1F"}},,function(e,n,t){e.exports={control:"Input_control__1Vz_5",invalid:"Input_invalid__167DD"}},,function(e,n,t){e.exports={card:"Card_card__3ncHI"}},function(e,n,t){e.exports={button:"Button_button__3fV6R"}},function(e,n,t){e.exports={home:"Home_home__1eoc-"}},function(e,n,t){e.exports={nav:"Navigation_nav__xefyQ"}},function(e,n,t){e.exports={"main-header":"MainHeader_main-header__xvep5"}},,,,,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var c=t(1),o=t.n(c),i=t(6),a=t.n(i),l=(t(16),t(2)),s=t(7),r=t.n(s),u=t(0),d=function(e){return Object(u.jsx)("div",{className:"".concat(r.a.card," ").concat(e.className),children:e.children})},j=t(8),b=t.n(j),f=function(e){return Object(u.jsx)("button",{type:e.type||"button",className:"".concat(b.a.button," ").concat(e.className),onClick:e.onClick,disabled:e.disabled,children:e.children})},g=o.a.createContext({isLoggedIn:!1,onLogout:function(){},onLogin:function(e,n){}}),v=function(e){var n=Object(c.useState)(!1),t=Object(l.a)(n,2),o=t[0],i=t[1];Object(c.useEffect)((function(){"1"===localStorage.getItem("isLoggedIn")&&i(!0)}),[]);return Object(u.jsx)(g.Provider,{value:{isLoggedIn:o,onLogout:function(){localStorage.removeItem("isLoggedIn"),i(!1)},onLogin:function(){localStorage.setItem("isLoggedIn","1"),i(!0)}},children:e.children})},O=g,h=t(5),x=t.n(h),m=o.a.forwardRef((function(e,n){var t=Object(c.useRef)(),o=function(){t.current.focus()};return Object(c.useImperativeHandle)(n,(function(){return{focus:o}})),Object(u.jsxs)("div",{className:"".concat(x.a.control," ").concat(!1===e.isValid?x.a.invalid:""),children:[Object(u.jsx)("label",{htmlFor:e.id,children:e.label}),Object(u.jsx)("input",{ref:t,type:e.type,id:e.id,value:e.value,onChange:e.onChange,onBlur:e.onBlur})]})})),p=t(3),_=t.n(p),L=function(e,n){return"USER_INPUT"===n.type?{value:n.val,isValid:n.val.includes("@")}:"INPUT_BLUR"===n.type?{value:e.value,isValid:e.value.includes("@")}:{value:"",isValid:!1}},I=function(e,n){return"USER_INPUT"===n.type?{value:n.val,isValid:n.val.trim().length>6}:"INPUT_BLUR"===n.type?{value:e.value,isValid:e.value.trim().length>6}:{value:"",isValid:!1}},N=function(e){var n=Object(c.useState)(!1),t=Object(l.a)(n,2),o=t[0],i=t[1],a=Object(c.useReducer)(L,{value:"",isValid:null}),s=Object(l.a)(a,2),r=s[0],j=s[1],b=Object(c.useReducer)(I,{value:"",isValid:null}),g=Object(l.a)(b,2),v=g[0],h=g[1],x=Object(c.useContext)(O),p=Object(c.useRef)(),N=Object(c.useRef)();Object(c.useEffect)((function(){return console.log("EFFECT RUNNING"),function(){console.log("EFFECT CLEANUP")}}),[]);var U=r.isValid,y=v.isValid;Object(c.useEffect)((function(){var e=setTimeout((function(){console.log("Checking form validity!"),i(U&&y)}),500);return function(){console.log("CLEANUP"),clearTimeout(e)}}),[U,y]);return Object(u.jsx)(d,{className:_.a.login,children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o?x.onLogin(r.value,v.value):U?N.current.focus():p.current.focus()},children:[Object(u.jsx)(m,{ref:p,id:"email",label:"E-Mail",type:"email",isValid:U,value:r.value,onChange:function(e){j({type:"USER_INPUT",val:e.target.value})},onBlur:function(){j({type:"INPUT_BLUR"})}}),Object(u.jsx)(m,{ref:N,id:"password",label:"Password",type:"password",isValid:y,value:v.value,onChange:function(e){h({type:"USER_INPUT",val:e.target.value})},onBlur:function(){h({type:"INPUT_BLUR"})}}),Object(u.jsx)("div",{className:_.a.actions,children:Object(u.jsx)(f,{type:"submit",className:_.a.btn,children:"Login"})})]})})},U=t(9),y=t.n(U),C=function(e){var n=Object(c.useContext)(O);return Object(u.jsxs)(d,{className:y.a.home,children:[Object(u.jsx)("h1",{children:"Welcome back!"}),Object(u.jsx)(f,{onClick:n.onLogout,children:"Logout"})]})},R=t(10),E=t.n(R),V=function(){var e=Object(c.useContext)(O);return Object(u.jsx)("nav",{className:E.a.nav,children:Object(u.jsxs)("ul",{children:[e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Users"})}),e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Admin"})}),e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:e.onLogout,children:"Logout"})})]})})},P=t(11),T=t.n(P),B=function(e){return Object(u.jsxs)("header",{className:T.a["main-header"],children:[Object(u.jsx)("h1",{children:"A Typical Page"}),Object(u.jsx)(V,{})]})};var S=function(){var e=Object(c.useContext)(O);return Object(u.jsxs)(o.a.Fragment,{children:[Object(u.jsx)(B,{}),Object(u.jsxs)("main",{children:[!e.isLoggedIn&&Object(u.jsx)(N,{}),e.isLoggedIn&&Object(u.jsx)(C,{})]})]})};a.a.render(Object(u.jsx)(v,{children:Object(u.jsx)(S,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.19681002.chunk.js.map