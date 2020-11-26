(this["webpackJsonpintegers-ui"]=this["webpackJsonpintegers-ui"]||[]).push([[0],{146:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(0),c=n.n(a),s=n(21),i=n.n(s),u=(n(64),n(65),n(15)),o=n(8),b=n.n(o),d=n(10),l=n(163),p=n(165),j=n(170),h=n(171),O=n(169),g=n(166),f=n(168),S=n(167),x=n(51),v=n.n(x),m=function(e){var t=e.title,n=e.onSubmit,c=e.isPending,s=e.children,i=e.hasError,o=C(),b=Object(a.useState)(""),d=Object(u.a)(b,2),S=d[0],x=d[1],m=Object(a.useState)(!0),E=Object(u.a)(m,2),I=E[0],U=E[1],k=Object(a.useState)(""),w=Object(u.a)(k,2),N=w[0],P=w[1],y=Object(a.useState)(!0),T=Object(u.a)(y,2),_=T[0],F=T[1],R=Object(a.useCallback)((function(e,t){var n=!0;return v.a.isEmail(e)?U(!0):(U(!1),n=!1),t.length<3?(F(!1),n=!1):F(!0),n}),[U,F]),A=Object(a.useCallback)((function(e){e.preventDefault(),R(S,N)&&n(S,N)}),[S,N,n,R]);return Object(r.jsx)("form",{className:o.form,onSubmit:A,children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(p.a,{variant:"h4",className:o.heading,children:t}),i&&Object(r.jsx)(p.a,{className:o.error,children:"Failed to ".concat(t.toLowerCase(),".")}),Object(r.jsxs)(j.a,{className:o.control,error:!I,children:[Object(r.jsx)(h.a,{htmlFor:"email-input",children:"Email address"}),Object(r.jsx)(O.a,{id:"email-input","aria-describedby":"email-validation",onChange:function(e){return x(e.target.value)}}),!I&&Object(r.jsx)(g.a,{id:"email-validation",children:"Please enter a valid email."})]}),Object(r.jsxs)(j.a,{className:o.control,error:!_,children:[Object(r.jsx)(h.a,{htmlFor:"password-input",children:"Password"}),Object(r.jsx)(O.a,{id:"password-input",type:"password","aria-describedby":"password-validation",onChange:function(e){return P(e.target.value)}}),!_&&Object(r.jsx)(g.a,{id:"password-validation",children:"Password must be at least 3 characters."})]}),Object(r.jsx)(f.a,{className:o.button,type:"submit",disabled:c,children:"Submit"}),s]})})},C=Object(S.a)({form:{width:400,backgroundColor:"#d3d3d3",borderRadius:30,padding:30},heading:{color:"black"},control:{paddingBottom:20},button:{backgroundColor:"#3b5998",color:"white","&:hover":{backgroundColor:"#3b5998"},marginBottom:30},error:{color:"red"}}),E=Object(a.createContext)({}),I=n(34),U=n.n(I),k="auth",w=function(){return U.a.get(k)},N=function(e){U.a.set(k,e)},P=function(){var e=Object(d.a)(b.a.mark((function e(t,n){var r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://integers-as-a-service.herokuapp.com/v1","/accounts"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})});case 2:if(201===(r=e.sent).status){e.next=5;break}throw new Error;case 5:return e.next=7,r.json();case 7:return a=e.sent,N(a.data.attributes.token),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(b.a.mark((function e(t,n){var r,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://integers-as-a-service.herokuapp.com/v1","/auth"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})});case 2:if(201===(r=e.sent).status){e.next=7;break}throw(a=new Error).status=r.status,a;case 7:return e.next=9,r.json();case 9:return c=e.sent,N(c.data.attributes.token),e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=Object(d.a)(b.a.mark((function e(){var t,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://integers-as-a-service.herokuapp.com/v1","/current"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(w())}});case 2:if(200===(t=e.sent).status){e.next=7;break}throw(n=new Error).status=t.status,n;case 7:return e.next=9,t.json();case 9:return r=e.sent,e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(d.a)(b.a.mark((function e(){var t,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://integers-as-a-service.herokuapp.com/v1","/next"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(w())}});case 2:if(201===(t=e.sent).status){e.next=7;break}throw(n=new Error).status=t.status,n;case 7:return e.next=9,t.json();case 9:return r=e.sent,e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(d.a)(b.a.mark((function e(t){var n,r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://integers-as-a-service.herokuapp.com/v1","/current"),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(w())},body:JSON.stringify({current:t})});case 2:if(200===(n=e.sent).status){e.next=7;break}throw(r=new Error).status=n.status,r;case 7:return e.next=9,n.json();case 9:return a=e.sent,e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(e){var t=e.navToSignIn,n=A(),c=Object(a.useContext)(E),s=c.globalState,i=c.dispatch,u=Object(a.useCallback)(function(){var e=Object(d.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i({type:"SIGN_UP_REQUEST"}),e.prev=1,e.next=4,P(t,n);case 4:i({type:"SIGN_UP_SUCCESS"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),i({type:"SIGN_UP_FAIL"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),[i]);return Object(r.jsx)(m,{title:"Sign Up",onSubmit:u,isPending:s.signUpPending,hasError:s.signUpFailed,children:Object(r.jsx)(f.a,{className:n.navButton,onClick:t,children:"Sign In"})})},A=Object(S.a)({navButton:{backgroundColor:"#2f2f2f",color:"white"}}),B=function(e){var t=e.navToSignUp,n=G(),c=Object(a.useContext)(E),s=c.globalState,i=c.dispatch,u=Object(a.useCallback)(function(){var e=Object(d.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i({type:"SIGN_IN_REQUEST"}),e.prev=1,e.next=4,y(t,n);case 4:i({type:"SIGN_IN_SUCCESS"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),i({type:"SIGN_IN_FAIL"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),[i]);return Object(r.jsx)(m,{title:"Sign In",onSubmit:u,isPending:s.signInPending,hasError:s.signInFailed,children:Object(r.jsx)(f.a,{className:n.navButton,onClick:t,children:"Sign Up"})})},G=Object(S.a)({navButton:{backgroundColor:"#2f2f2f",color:"white"}}),L=function(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)(r.Fragment,{children:[n&&Object(r.jsx)(R,{navToSignIn:function(){return c(!1)}}),!n&&Object(r.jsx)(B,{navToSignUp:function(){return c(!0)}})]})},Q=n(172),D=function(){var e=Object(a.useContext)(E),t=e.globalState,n=e.dispatch,c=X(),s=Object(a.useCallback)(Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"CURRENT_REQUEST"}),e.prev=1,e.next=4,T();case 4:t=e.sent,n({type:"CURRENT_SUCCESS",value:t.data.attributes.current}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n({type:"CURRENT_FAIL"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),[n]);return Object(a.useEffect)((function(){s()}),[s]),Object(r.jsxs)("div",{className:c.currentBlock,children:[Object(r.jsx)(p.a,{className:c.text,children:"Current Integer:"}),Object(r.jsx)(p.a,{children:t.currentInt})]})},X=Object(S.a)({currentBlock:{display:"flex",paddingBottom:20},text:{paddingRight:20}}),J=function(){var e=Object(a.useContext)(E).dispatch,t=z(),n=Object(a.useCallback)(Object(d.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"NEXT_REQUEST"}),t.prev=1,t.next=4,_();case 4:n=t.sent,e({type:"NEXT_SUCCESS",value:n.data.attributes.current}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e({type:"NEXT_FAIL"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),[e]);return Object(r.jsx)(f.a,{className:t.button,onClick:n,children:"Generate Next"})},z=Object(S.a)({button:{backgroundColor:"#3b5998",color:"white","&:hover":{backgroundColor:"#3b5998"},marginBottom:20}}),M=function(){var e=Object(a.useContext)(E).dispatch,t=Object(a.useState)(),n=Object(u.a)(t,2),c=n[0],s=n[1],i=q(),o=Object(a.useCallback)(Object(d.a)(b.a.mark((function t(){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e({type:"UPDATE_REQUEST"}),t.prev=1,n=parseInt(c,10)){t.next=6;break}return e({type:"UPDATE_FAIL"}),t.abrupt("return");case 6:return t.next=8,F(n);case 8:r=t.sent,e({type:"UPDATE_SUCCESS",value:r.data.attributes.current}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),e({type:"UPDATE_FAIL"});case 15:case"end":return t.stop()}}),t,null,[[1,12]])}))),[e,c]);return Object(r.jsxs)("div",{className:i.currentBlock,children:[Object(r.jsx)(f.a,{className:i.button,onClick:o,children:"Set Current"}),Object(r.jsx)(O.a,{type:"number",onChange:function(e){s(e.target.value)}})]})},q=Object(S.a)({currentBlock:{display:"flex"},button:{backgroundColor:"#3b5998",color:"white","&:hover":{backgroundColor:"#3b5998"},marginRight:15}}),H=function(){var e=K();return Object(r.jsxs)(Q.a,{className:e.container,children:[Object(r.jsx)(D,{}),Object(r.jsx)(J,{}),Object(r.jsx)(M,{})]})},K=Object(S.a)({container:{width:350,height:200,padding:30}}),V=function(){var e=Object(a.useContext)(E).globalState;return Object(r.jsxs)("div",{className:"App-body",children:[Object(r.jsx)("p",{children:"Let's generate some integers!"}),!e.isSignedIn&&Object(r.jsx)(L,{}),e.isSignedIn&&Object(r.jsx)(H,{})]})},W=n(6),Y={signUpPending:!1,signUpSuccess:!1,signUpFailed:!1,signInPending:!1,signInSuccess:!1,signInFailed:!1,isSignedIn:!1,nextPending:!1,nextSuccess:!1,nextFailed:!1,currentPending:!1,currentSuccess:!1,currentFailed:!1,updatePending:!0,updateSuccess:!1,updateFailed:!1,currentInt:null},Z={SIGN_UP_REQUEST:function(e){return Object(W.a)(Object(W.a)({},e),{},{signUpPending:!0,signUpSuccess:!1,signUpFailed:!1})},SIGN_UP_SUCCESS:function(e){return Object(W.a)(Object(W.a)({},e),{},{signUpPending:!1,signUpSuccess:!0,isSignedIn:!0})},SIGN_UP_FAIL:function(e){return Object(W.a)(Object(W.a)({},e),{},{signUpPending:!1,signUpFailed:!0,isSignedIn:!1})},SIGN_IN_REQUEST:function(e){return Object(W.a)(Object(W.a)({},e),{},{signInPending:!0,signInSuccess:!1,signInFailed:!1})},SIGN_IN_SUCCESS:function(e){return Object(W.a)(Object(W.a)({},e),{},{signInPending:!1,signInSuccess:!0,isSignedIn:!0})},SIGN_IN_FAIL:function(e){return Object(W.a)(Object(W.a)({},e),{},{signInPending:!1,signInFailed:!0,isSignedIn:!1})}},$={NEXT_REQUEST:function(e){return Object(W.a)(Object(W.a)({},e),{},{nextPending:!0,nextSuccess:!1,nextFailed:!1})},NEXT_SUCCESS:function(e,t){return Object(W.a)(Object(W.a)({},e),{},{nextPending:!1,nextSuccess:!0,currentInt:t.value})},NEXT_FAIL:function(e){return Object(W.a)(Object(W.a)({},e),{},{nextPending:!1,nextFailed:!0})},CURRENT_REQUEST:function(e){return Object(W.a)(Object(W.a)({},e),{},{currentPending:!0,currentSuccess:!1,currentFailed:!1})},CURRENT_SUCCESS:function(e,t){return Object(W.a)(Object(W.a)({},e),{},{currentPending:!1,currentSuccess:!0,currentInt:t.value})},CURRENT_FAIL:function(e){return Object(W.a)(Object(W.a)({},e),{},{currentPending:!1,currentFailed:!0})},UPDATE_REQUEST:function(e){return Object(W.a)(Object(W.a)({},e),{},{updatePending:!0,updateSuccess:!1,updateFailed:!1})},UPDATE_SUCCESS:function(e,t){return Object(W.a)(Object(W.a)({},e),{},{updatePending:!1,updateSuccess:!0,currentInt:t.value})},UPDATE_FAIL:function(e){return Object(W.a)(Object(W.a)({},e),{},{updatePending:!1,updateFailed:!0})}},ee=Object(W.a)(Object(W.a)({},Z),$),te=function(e,t){var n=ee[t.type](e,t);return console.log(n),n},ne=function(){var e=Object(a.useReducer)(te,Y),t=Object(u.a)(e,2);return{globalState:t[0],dispatch:t[1]}},re=function(e){var t=e.children;return Object(r.jsx)(E.Provider,{value:ne(),children:t})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(re,{children:Object(r.jsx)(V,{})})}),document.getElementById("root"))},64:function(e,t,n){},65:function(e,t,n){}},[[146,1,2]]]);
//# sourceMappingURL=main.fde7c6d8.chunk.js.map