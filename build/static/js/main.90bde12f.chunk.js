(this["webpackJsonpRealtime-chat"]=this["webpackJsonpRealtime-chat"]||[]).push([[0],{122:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(28),o=t.n(i);t(86),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(33),c=t(22),l=t(71),m=t.n(l),u=t(29),p=t(30),g=t(34),d=t(31),h=t(35),f=t(142),E=t(141),b=t(140),w=t(137),v=t(53),y=t.n(v),k=t(134),x=t(138),L=t(139),j=t(50),O=function(e){return{main:Object(j.a)({width:"auto",display:"block",marginLeft:3*e.spacing(1),marginRight:3*e.spacing(1)},e.breakpoints.up(400+3*e.spacing(1)*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing(1),"px ").concat(3*e.spacing(1),"px ").concat(3*e.spacing(1),"px")},form:{width:"100%",marginTop:e.spacing(1)},submit:{marginTop:3*e.spacing(1)},noAccountHeader:{width:"100%"},signUpLink:{width:"100%",textDecoration:"none",color:"#303f9f",fontWeight:"bolder"},errorText:{color:"red",textAlign:"center"}}},C=t(58),N=t.n(C),S=function(e){function a(){var e;return Object(u.a)(this,a),(e=Object(g.a)(this,Object(d.a)(a).call(this))).submitLogin=function(a){a.preventDefault(),N.a.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then((function(){e.props.history.push("/Realtime-chat/dashboard")}),(function(a){switch(a.code){case"auth/wrong-password":e.setState({LoginError:"\u5bc6\u78bc\u8f38\u5165\u932f\u8aa4\uff01"});break;case"auth/invalid-email":e.setState({LoginError:"\u4fe1\u7bb1\u683c\u5f0f\u8f38\u5165\u932f\u8aa4\uff01"});break;case"auth/user-not-found":e.setState({LoginError:"\u6b64\u4fe1\u7bb1\u5c1a\u672a\u8a3b\u518a\uff01"})}console.log(a)}))},e.userTyping=function(a,t){switch(a){case"email":e.setState({email:t.target.value});break;case"password":e.setState({password:t.target.value})}},e.state={email:null,password:null,LoginError:""},e}return Object(h.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement("main",{className:a.main},r.a.createElement(k.a,null),r.a.createElement(w.a,{className:a.paper},r.a.createElement(x.a,{component:"h1",variant:"h5"},"\u767b\u5165\uff01"),r.a.createElement("form",{onSubmit:function(a){return e.submitLogin(a)},className:a.form},r.a.createElement(f.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(E.a,{htmlFor:"login-email-input"},"\u8acb\u8f38\u5165\u4fe1\u7bb1"),r.a.createElement(b.a,{autoComplete:"email",onChange:function(a){return e.userTyping("email",a)},autoFocus:!0,id:"login-email-input"})),r.a.createElement(f.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(E.a,{htmlFor:"login-password-input"},"\u8acb\u8f38\u5165\u5bc6\u78bc"),r.a.createElement(b.a,{type:"password",onChange:function(a){return e.userTyping("password",a)},id:"login-password-input"})),r.a.createElement(L.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"\u767b\u5165")),this.state.LoginError?r.a.createElement(x.a,{className:a.errorText},this.state.LoginError):null,r.a.createElement(x.a,{className:a.noAccountHeader},"\u9084\u6c92\u6709\u5e33\u865f\uff1f"),r.a.createElement(s.b,{className:a.signUpLink,to:"/Realtime-chat/signup"},"\u99ac\u4e0a\u53bb\u8a3b\u518a")))}}]),a}(n.Component),T=y()(O)(S),W=function(e){return{main:Object(j.a)({width:"auto",display:"block",marginLeft:3*e.spacing(1),marginRight:3*e.spacing(1)},e.breakpoints.up(400+3*e.spacing(1)*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing(1),"px ").concat(3*e.spacing(1),"px ").concat(3*e.spacing(1),"px")},form:{width:"100%",marginTop:e.spacing(1)},submit:{marginTop:3*e.spacing(1)},hasAccountHeader:{width:"100%"},logInLink:{width:"100%",textDecoration:"none",color:"#303f9f",fontWeight:"bolder"},errorText:{color:"red",textAlign:"center"}}},R=t(58),I=function(e){function a(){var e;return Object(u.a)(this,a),(e=Object(g.a)(this,Object(d.a)(a).call(this))).userTyping=function(a,t){switch(a){case"email":e.setState({email:t.target.value});break;case"password":e.setState({password:t.target.value});break;case"passwordConfirmation":e.setState({passwordConfirmation:t.target.value})}},e.submitSignup=function(a){a.preventDefault(),e.formIsValid()?R.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(a){console.log(a);var t={uid:a.user.uid,email:a.user.email};R.firestore().collection("users").doc(e.state.email).set(t).then((function(){e.props.history.push("/Realtime-chat/login")}),(function(a){console.log(a),e.setState({signupError:"Failed to add user!"})}))}),(function(a){console.log(a),e.setState({signupError:"Failed to add user!"})})):e.setState({signupError:"\u5bc6\u78bc\u78ba\u8a8d\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u8f38\u5165\uff01"})},e.formIsValid=function(){return e.state.password===e.state.passwordConfirmation},e.state={email:null,password:null,passwordConfirmation:null,signupError:""},e}return Object(h.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement("main",{className:a.main},r.a.createElement(k.a,null),r.a.createElement(w.a,{className:a.paper},r.a.createElement(x.a,{component:"h1",variant:"h5"},"\u8a3b\u518a!"),r.a.createElement("form",{onSubmit:function(a){return e.submitSignup(a)},className:a.form},r.a.createElement(f.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(E.a,{htmlFor:"signup-email-input"},"\u8acb\u8f38\u5165\u4fe1\u7bb1"),r.a.createElement(b.a,{autoComplete:"email",onChange:function(a){return e.userTyping("email",a)},autoFocus:!0,id:"signup-email-input"})),r.a.createElement(f.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(E.a,{htmlFor:"signup-password-input"},"\u8acb\u8f38\u5165\u5bc6\u78bc"),r.a.createElement(b.a,{type:"password",onChange:function(a){return e.userTyping("password",a)},id:"signup-password-input"})),r.a.createElement(f.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(E.a,{htmlFor:"signup-password-confirmation-input"},"\u518d\u6b21\u78ba\u8a8d\u5bc6\u78bc"),r.a.createElement(b.a,{type:"password",onChange:function(a){return e.userTyping("passwordConfirmation",a)},id:"signup-password-confirmation-input"})),r.a.createElement(L.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"\u8a3b\u518a")),this.state.signupError?r.a.createElement(x.a,{className:a.errorText},this.state.signupError):null,r.a.createElement(x.a,{className:a.hasAccountHeader},"\u5df2\u7d93\u6709\u5e33\u865f\u4e86\uff1f"),r.a.createElement(s.b,{className:a.logInLink,to:"/Realtime-chat/login"},"\u99ac\u4e0a\u53bb\u767b\u5165")))}}]),a}(n.Component),A=y()(W)(I),F=function(e){function a(){return Object(u.a)(this,a),Object(g.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),a}(n.Component);m.a.initializeApp({apiKey:"AIzaSyCcyufPWaWOcLvbBPgBArNMH5Q_gi9oBAY",authDomain:"realtime-chat-2598f.firebaseapp.com",databaseURL:"https://realtime-chat-2598f.firebaseio.com",projectId:"realtime-chat-2598f",storageBucket:"realtime-chat-2598f.appspot.com",messagingSenderId:"644826752739",appId:"1:644826752739:web:9912f44a709048c9e947d6",measurementId:"G-MB5NYNLCK2"});var B=r.a.createElement(s.a,null,r.a.createElement("div",{id:"routing-container"},r.a.createElement(c.a,{path:"/Realtime-chat/login",component:T}),r.a.createElement(c.a,{path:"/Realtime-chat/signup",component:A}),r.a.createElement(c.a,{path:"/Realtime-chat/dashboard",component:F})));o.a.render(B,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,a,t){e.exports=t(122)},86:function(e,a,t){}},[[81,1,2]]]);
//# sourceMappingURL=main.90bde12f.chunk.js.map