(this.webpackJsonpjournalapp=this.webpackJsonpjournalapp||[]).push([[0],{173:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(37),r=n.n(c),s=n(15),i=n(27),o=n(0),u=n.n(o),l=n(1),j=n(12),d=n(33),b=n(14),p=n(64),O=n(24),f=n(25);Object(p.a)({apiKey:"AIzaSyD3gSAvFIyqfq2hkSF9ylscYF0SuyQg2N4",authDomain:"journal-app-7544e.firebaseapp.com",projectId:"journal-app-7544e",storageBucket:"journal-app-7544e.appspot.com",messagingSenderId:"777955661892",appId:"1:777955661892:web:6ec4e31e24e923fdf80411"});var h=Object(O.f)(),m=new f.a,x=n(29),v=n.n(x),g="[Auth] Login",_="[Auth] Logout",y="[UI] Set Error",N="[UI] Remove Error",w="[UI] Start loading",k="[UI] Finish loading",S="[Notes] New note",C="[Notes] Set active note",E="[Notes] Load notes",I="[Notes] Updated note",L="[Notes] Delete notes",D="[Notes] Logout Cleaning",U=function(e){return{type:y,payload:e}},A=function(){return{type:k}},R=n(13),F=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)(Object(O.b)(h,"".concat(t,"/journal/notes")));case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(R.a)({id:e.id},e.data()))})),console.log(a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://api.cloudinary.com/v1_1/di2rpghps/upload",(n=new FormData).append("upload_preset","React-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("http://api.cloudinary.com/v1_1/di2rpghps/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.next=17,a.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),q=function(e,t){return{type:C,payload:Object(R.a)({id:e},t)}},T=function(e,t){return{type:S,payload:Object(R.a)({id:e},t)}},z=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(e);case 2:a=t.sent,n(B(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},B=function(e){return{type:E,payload:e}},G=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,a){var c,r,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(R.a)({},e)).id,s=Object(O.d)(h,"".concat(c,"/journal/notes/").concat(e.id)),t.next=7,Object(O.g)(s,r);case 7:n(J(e.id,e)),v.a.fire("Saved",e.title,"success");case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},J=function(e,t){return{type:I,payload:{id:e,note:Object(R.a)({id:e},t)}}},W=function(e){return{type:L,payload:e}},X=function(e,t){return function(n){n({type:w});var a=Object(f.c)();Object(f.d)(a,e,t).then((function(e){var t=e.user;n(K(t.uid,t.displayName)),n(A())})).catch((function(e){console.log(e),n(A()),v.a.fire("Error",e.message,"error")}))}},K=function(e,t){return{type:g,payload:{uid:e,displayName:t}}},M=function(){return{type:_}},Q=n(4),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(j.a)(t,2),c=n[0],r=n[1],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},i=function(e){var t=e.target;r(Object(R.a)(Object(R.a)({},c),{},Object(Q.a)({},t.name,t.value)))};return[c,i,s]},Y=n(7),H=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active;return Object(Y.jsxs)("div",{className:"notes__appbar",children:[Object(Y.jsx)("span",{children:"28 de agosto 2020"}),Object(Y.jsx)("input",{type:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&(console.log(n),e(function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,a){var c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,v.a.fire({title:"Uploading...",text:"please wait",allowOutsideClick:!1,willOpen:function(){v.a.showLoading()}}),t.next=4,P(e);case 4:r=t.sent,c.url=r,n(G(c)),v.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n)))},id:"fileSelector",name:"file"}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(Y.jsx)("button",{className:"btn",onClick:function(){e(G(t))},children:"Save"})]})]})},Z=function(){var e=Object(s.c)((function(e){return e.notes})).active,t=V(e),n=Object(j.a)(t,3),c=n[0],r=n[1],i=n[2],o=c.body,d=c.title,b=c.id,p=Object(a.useRef)(e.id),f=Object(s.b)();Object(a.useEffect)((function(){e.id!==p.current&&(i(e),p.current=e.id)}),[e,i]),Object(a.useEffect)((function(){f(q(c.id,Object(R.a)({},c)))}),[c,f]);return Object(Y.jsxs)("div",{className:"notes__main-content",children:[Object(Y.jsx)(H,{}),Object(Y.jsxs)("div",{className:"notes__content",children:[Object(Y.jsx)("input",{type:"text",placeholder:"  some Awesome title",className:"notes__title-input",autoComplete:"off",value:d,name:"title",onChange:r}),Object(Y.jsx)("textarea",{placeholder:"What happend today",className:"notes__textarea",value:o,onChange:r,name:"body"}),e.url&&Object(Y.jsx)("div",{className:"notes__image",children:Object(Y.jsx)("img",{src:e.url,alt:"casa"})})]}),Object(Y.jsx)("button",{className:"btn btn-danger",onClick:function(){f(function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,a){var c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,r=Object(O.d)(h,"".concat(c,"/journal/notes/").concat(e)),t.next=4,Object(O.c)(r);case 4:n(W(e));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(b))},children:"Delete"})]})},$=function(){return Object(Y.jsxs)("div",{className:"nothing__main-content",children:[Object(Y.jsxs)("p",{children:["Select something",Object(Y.jsx)("br",{}),"pr create an entry!"]}),Object(Y.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},ee=n(65),te=n.n(ee),ne=function(e){var t=e.id,n=e.date,a=e.title,c=e.body,r=e.url,i=te()(n),o=Object(s.b)();return Object(Y.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn animate__faster",onClick:function(){o(q(t,{id:t,date:n,title:a,body:c,url:r}))},children:[r&&Object(Y.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(Y.jsxs)("div",{className:"journal__entry-body",children:[Object(Y.jsx)("p",{className:"journal__entry-title",children:a}),Object(Y.jsx)("p",{className:"journal__entry-content",children:c})]}),Object(Y.jsxs)("div",{className:"journal__entry-date-box",children:[Object(Y.jsx)("span",{children:i.format("dddd")}),Object(Y.jsx)("h4",{children:i.format("Do")}),Object(Y.jsx)("h4",{children:"28"})]})]})},ae=function(){var e=Object(s.c)((function(e){return e.notes})).notes;return Object(Y.jsx)("div",{className:"journal__entries ",children:e.map((function(e){return Object(Y.jsx)(ne,Object(R.a)({},e),e.id)}))})},ce=function(){var e=Object(s.c)((function(e){return e.auth})).name,t=Object(s.b)();return Object(Y.jsxs)("aside",{className:"journal__sidebar",children:[Object(Y.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(Y.jsxs)("h3",{className:"mt-5",children:[Object(Y.jsx)("i",{className:"far fa-moon"}),Object(Y.jsxs)("span",{children:[" ",e]})]}),Object(Y.jsx)("button",{onClick:function(){t(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(f.c)(),e.next=3,Object(f.f)(n);case 3:t(M()),t({type:D});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},className:"btn",children:"Logout"})]}),Object(Y.jsxs)("div",{className:"journal__new-entry",onClick:function(){t(function(){var e=Object(l.a)(u.a.mark((function e(t,n){var a,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,Object(O.a)(Object(O.b)(h,"".concat(a,"/journal/notes")),c);case 4:r=e.sent,t(q(r.id,c)),t(T(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(Y.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(Y.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(Y.jsx)(ae,{})]})},re=function(){var e=Object(s.c)((function(e){return e.notes})).active;return Object(Y.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(Y.jsx)(ce,{}),Object(Y.jsx)("main",{children:e?Object(Y.jsx)(Z,{}):Object(Y.jsx)($,{})})]})},se=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).loading,n=V({email:"juane@gmail.com",password:"123456"}),a=Object(j.a)(n,2),c=a[0],r=a[1],o=c.email,u=c.password;return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h3",{className:"auth__title",children:"Login"}),Object(Y.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(X(o,u))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(Y.jsx)("input",{type:"\r ",placeholder:"Email",name:"email",className:"auth__input",value:o,onChange:r}),Object(Y.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:u,onChange:r}),Object(Y.jsx)("button",{className:"btn btn-primary btn-block",disabled:t,type:"submit",children:"login"}),Object(Y.jsxs)("div",{className:"auth__social-network",children:[Object(Y.jsx)("p",{children:"Login with social networks"}),Object(Y.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){var t=Object(f.c)();Object(f.e)(t,m).then((function(t){var n=t.user;e(K(n.uid,n.displayName))}))}))},children:[Object(Y.jsx)("div",{className:"google-icon-wrapper",children:Object(Y.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(Y.jsx)("p",{className:"btn-text",children:Object(Y.jsx)("b",{children:"Sign in with google"})})]})]}),Object(Y.jsx)(i.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},ie=n(66),oe=n.n(ie),ue=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).msgError,n=V({name:"juan",email:"juan@gmail.com",password:"123456",password2:"123456"}),a=Object(j.a)(n,2),c=a[0],r=a[1],o=c.name,d=c.email,b=c.password,p=c.password2,O=function(){return 0===o.length?(e(U("Name is required")),!1):oe.a.isEmail(d)?p!==b||b.length<5?(e(U("password should  match ans more than 6 charcters")),!1):(e({type:N}),!0):(e(U("email no valido")),!1)};return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h3",{className:"auth__title",children:"Register"}),Object(Y.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log(o,d,b,p),O()&&e(function(e,t,n){return function(a){var c=Object(f.c)();Object(f.b)(c,e,t).then(function(){var e=Object(l.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,Object(f.g)(c,{displayName:n});case 3:a(K(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),v.a.fire("Error",e.message,"error")}))}}(d,b,o))},className:"animate__animated animate__fadeIn animate__faster",children:[t&&Object(Y.jsx)("div",{className:"auth__alert-error",children:t}),Object(Y.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",value:o,onChange:r}),Object(Y.jsx)("input",{type:"\r ",placeholder:"Email",name:"email",className:"auth__input",value:d,onChange:r}),Object(Y.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:b,onChange:r}),Object(Y.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:p,onChange:r}),Object(Y.jsx)("button",{className:"btn btn-primary btn-block mb-5",type:"submit",children:"Register"}),Object(Y.jsx)(i.b,{to:"/auth/login",className:"link mt-5",children:"Alredy registered?"})]})]})},le=function(){return Object(Y.jsx)("div",{className:"auth__main",children:Object(Y.jsx)("div",{className:"auth__box-container",children:Object(Y.jsxs)(b.d,{children:[Object(Y.jsx)(b.b,{path:"login",element:Object(Y.jsx)(se,{}),children:" "}),Object(Y.jsx)(b.b,{path:"register",element:Object(Y.jsx)(ue,{})})]})})})},je=function(e){var t=e.isLoggedIn,n=e.children;return t?n:Object(Y.jsx)(b.a,{to:"/auth/login"})},de=function(e){var t=e.isLoggedIn,n=e.children;return t?Object(Y.jsx)(b.a,{to:"/"}):n},be=function(){var e=Object(a.useState)(!0),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),i=Object(j.a)(r,2),o=i[0],p=i[1],O=Object(s.b)();return Object(a.useEffect)((function(){var e=Object(d.c)();Object(d.d)(e,function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(null===t||void 0===t?void 0:t.uid)?(O(K(t.uid,t.displayName)),p(!0),O(z(t.uid))):p(!1),c(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[O,c,p]),n?Object(Y.jsx)("h1",{children:"Wait..."}):Object(Y.jsxs)(b.d,{children:[Object(Y.jsx)(b.b,{path:"/auth/*",element:Object(Y.jsx)(de,{isLoggedIn:o,children:Object(Y.jsx)(le,{})})}),Object(Y.jsx)(b.b,{path:"/",element:Object(Y.jsx)(je,{isLoggedIn:o,children:Object(Y.jsx)(re,{})})})]})},pe=n(67),Oe=n(35),fe={loading:!1,msgError:null},he=n(18),me={notes:[],active:null},xe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Oe.c,ve=Object(Oe.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{uid:t.payload.uid,name:t.payload.displayName};case _:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(R.a)(Object(R.a)({},e),{},{msgError:t.payload});case N:return Object(R.a)(Object(R.a)({},e),{},{msgError:null});case w:return Object(R.a)(Object(R.a)({},e),{},{loading:!0});case k:return Object(R.a)(Object(R.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(R.a)(Object(R.a)({},e),{},{active:Object(R.a)({},t.payload)});case S:return Object(R.a)(Object(R.a)({},e),{},{notes:[t.payload].concat(Object(he.a)(e.notes))});case E:return Object(R.a)(Object(R.a)({},e),{},{notes:Object(he.a)(t.payload)});case I:return Object(R.a)(Object(R.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case L:return Object(R.a)(Object(R.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case D:return Object(R.a)(Object(R.a)({},e),{},{active:null,notes:[]});default:return e}}}),ge=Object(Oe.d)(ve,xe(Object(Oe.a)(pe.a))),_e=function(){return Object(Y.jsx)(i.a,{children:Object(Y.jsx)(s.a,{store:ge,children:Object(Y.jsx)(be,{})})})};n(173);r.a.render(Object(Y.jsx)(_e,{}),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.58e8f7b4.chunk.js.map