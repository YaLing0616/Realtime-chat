(this["webpackJsonpRealtime-chat"]=this["webpackJsonpRealtime-chat"]||[]).push([[0],{127:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(22),o=a.n(i);a(91),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(38),c=a(30),l=a(76),u=a.n(l),m=a(23),p=a(24),h=a(28),d=a(25),g=a(29),f=a(151),b=a(160),E=a(158),w=a(150),C=a(27),y=a.n(C),v=a(147),x=a(58),k=a(152),O=a(54),S=function(e){return{main:Object(O.a)({width:"auto",display:"block",marginLeft:3*e.spacing(1),marginRight:3*e.spacing(1)},e.breakpoints.up(400+3*e.spacing(1)*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing(1),"px ").concat(3*e.spacing(1),"px ").concat(3*e.spacing(1),"px")},form:{width:"100%",marginTop:e.spacing(1)},submit:{marginTop:3*e.spacing(1)},noAccountHeader:{width:"100%"},signUpLink:{width:"100%",textDecoration:"none",color:"#303f9f",fontWeight:"bolder"},errorText:{color:"red",textAlign:"center"}}},j=a(32),N=a.n(j),L=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).submitLogin=function(t){t.preventDefault(),N.a.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then((function(){e.props.history.push("/Realtime-chat/dashboard")}),(function(t){switch(t.code){case"auth/wrong-password":e.setState({LoginError:"\u5bc6\u78bc\u8f38\u5165\u932f\u8aa4\uff01"});break;case"auth/invalid-email":e.setState({LoginError:"\u4fe1\u7bb1\u683c\u5f0f\u8f38\u5165\u932f\u8aa4\uff01"});break;case"auth/user-not-found":e.setState({LoginError:"\u6b64\u4fe1\u7bb1\u5c1a\u672a\u8a3b\u518a\uff01"})}console.log(t)}))},e.userTyping=function(t,a){switch(t){case"email":e.setState({email:a.target.value});break;case"password":e.setState({password:a.target.value})}},e.state={email:null,password:null,LoginError:""},e}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("main",{className:t.main},r.a.createElement(v.a,null),r.a.createElement(w.a,{className:t.paper},r.a.createElement(x.a,{component:"h1",variant:"h5"},"\u767b\u5165\uff01"),r.a.createElement("form",{onSubmit:function(t){return e.submitLogin(t)},className:t.form},r.a.createElement(f.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(b.a,{htmlFor:"login-email-input"},"\u8acb\u8f38\u5165\u4fe1\u7bb1"),r.a.createElement(E.a,{autoComplete:"email",onChange:function(t){return e.userTyping("email",t)},autoFocus:!0,id:"login-email-input"})),r.a.createElement(f.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(b.a,{htmlFor:"login-password-input"},"\u8acb\u8f38\u5165\u5bc6\u78bc"),r.a.createElement(E.a,{type:"password",onChange:function(t){return e.userTyping("password",t)},id:"login-password-input"})),r.a.createElement(k.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"\u767b\u5165")),this.state.LoginError?r.a.createElement(x.a,{className:t.errorText},this.state.LoginError):null,r.a.createElement(x.a,{className:t.noAccountHeader},"\u9084\u6c92\u6709\u5e33\u865f\uff1f"),r.a.createElement(s.b,{className:t.signUpLink,to:"/Realtime-chat/signup"},"\u99ac\u4e0a\u53bb\u8a3b\u518a")))}}]),t}(n.Component),F=y()(S)(L),I=function(e){return{main:Object(O.a)({width:"auto",display:"block",marginLeft:3*e.spacing(1),marginRight:3*e.spacing(1)},e.breakpoints.up(400+3*e.spacing(1)*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing(1),"px ").concat(3*e.spacing(1),"px ").concat(3*e.spacing(1),"px")},form:{width:"100%",marginTop:e.spacing(1)},submit:{marginTop:3*e.spacing(1)},hasAccountHeader:{width:"100%"},logInLink:{width:"100%",textDecoration:"none",color:"#303f9f",fontWeight:"bolder"},errorText:{color:"red",textAlign:"center"}}},R=a(32),T=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).userTyping=function(t,a){switch(t){case"email":e.setState({email:a.target.value});break;case"password":e.setState({password:a.target.value});break;case"passwordConfirmation":e.setState({passwordConfirmation:a.target.value})}},e.submitSignup=function(t){t.preventDefault(),e.formIsValid()?R.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(t){console.log(t);var a={uid:t.user.uid,email:t.user.email};R.firestore().collection("users").doc(e.state.email).set(a).then((function(){e.props.history.push("/Realtime-chat/login")}),(function(t){console.log(t),e.setState({signupError:"Failed to add user!"})}))}),(function(t){console.log(t),e.setState({signupError:"Failed to add user!"})})):e.setState({signupError:"\u5bc6\u78bc\u78ba\u8a8d\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u8f38\u5165\uff01"})},e.formIsValid=function(){return e.state.password===e.state.passwordConfirmation},e.state={email:null,password:null,passwordConfirmation:null,signupError:""},e}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("main",{className:t.main},r.a.createElement(v.a,null),r.a.createElement(w.a,{className:t.paper},r.a.createElement(x.a,{component:"h1",variant:"h5"},"\u8a3b\u518a!"),r.a.createElement("form",{onSubmit:function(t){return e.submitSignup(t)},className:t.form},r.a.createElement(f.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(b.a,{htmlFor:"signup-email-input"},"\u8acb\u8f38\u5165\u4fe1\u7bb1"),r.a.createElement(E.a,{autoComplete:"email",onChange:function(t){return e.userTyping("email",t)},autoFocus:!0,id:"signup-email-input"})),r.a.createElement(f.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(b.a,{htmlFor:"signup-password-input"},"\u8acb\u8f38\u5165\u5bc6\u78bc"),r.a.createElement(E.a,{type:"password",onChange:function(t){return e.userTyping("password",t)},id:"signup-password-input"})),r.a.createElement(f.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(b.a,{htmlFor:"signup-password-confirmation-input"},"\u518d\u6b21\u78ba\u8a8d\u5bc6\u78bc"),r.a.createElement(E.a,{type:"password",onChange:function(t){return e.userTyping("passwordConfirmation",t)},id:"signup-password-confirmation-input"})),r.a.createElement(k.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"\u8a3b\u518a")),this.state.signupError?r.a.createElement(x.a,{className:t.errorText},this.state.signupError):null,r.a.createElement(x.a,{className:t.hasAccountHeader},"\u5df2\u7d93\u6709\u5e33\u865f\u4e86\uff1f"),r.a.createElement(s.b,{className:t.logInLink,to:"/Realtime-chat/login"},"\u99ac\u4e0a\u53bb\u767b\u5165")))}}]),t}(n.Component),W=y()(I)(T),B=function(e){return{root:{backgroundColor:e.palette.background.paper,height:"calc(100% - 35px)",position:"absolute",left:"0",width:"300px",boxShadow:"0px 0px 2px black"},listItem:{cursor:"pointer"},newChatBtn:{borderRadius:"0px"},unreadMessage:{color:"red",position:"absolute",top:"0",right:"5px"}}},A=a(153),D=a(154),q=a(156),H=a(155),P=a(159),M=a(157),U=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).newChat=function(){},a.selectChat=function(e){},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return console.log(this.props.chats),this.props.chats.length>0?r.a.createElement("main",{className:t.root},r.a.createElement(k.a,{variant:"contained",fullWidth:!0,color:"primary",className:t.newChatBtn,onClick:this.newChat},"\u958b\u555f\u65b0\u804a\u5929"),r.a.createElement(A.a,null,this.props.chats.map((function(a,n){return r.a.createElement("div",{key:n},r.a.createElement(D.a,{onClick:function(){return e.selectChat(n)},className:t.listItem,selected:e.props.selectedChatIndex===n,alignItems:"flex-start"},r.a.createElement(H.a,null,r.a.createElement(P.a,{alt:"Remy Sharp"},a.users.filter((function(t){return t!==e.props.userEmail}))[0].split(""))),r.a.createElement(q.a,{primary:a.users.filter((function(t){return t!==e.props.userEmail}))[0],secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{component:"span",color:"textPrimary"},a.messages[a.messages.length-1].message.substring(0,12)))})),r.a.createElement(M.a,null))})))):r.a.createElement("main",{className:t.root},r.a.createElement(k.a,{variant:"contained",fullWidth:!0,color:"primary",className:t.newChatBtn,onClick:this.newChat},"\u958b\u555f\u65b0\u804a\u5929"),r.a.createElement(A.a,null))}}]),t}(n.Component),V=y()(B)(U),z=function(e){return{signOutBtn:{position:"absolute",bottom:"0px",left:"0px",width:"300px",borderRadius:"0px",backgroundColor:"#FF4500",height:"35px",boxShadow:"0px 0px 2px black",color:"white","&:hover":{backgroundColor:"#FF4500",color:"white"}}}},J=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).componentDidMount=function(){N.a.auth().onAuthStateChanged((function(t){t?N.a.firestore().collection("chats").where("users","array-contains",t.email).onSnapshot((function(a){var n=a.docs.map((function(e){return e.data()}));e.setState({email:t.email,chats:n}),console.log(e.state)})):e.props.history.push("/Realtime-chat/login")}))},e.newChatBtnClicked=function(){e.setState({selectedChat:null,newChatFormVisible:!0})},e.selectChat=function(e){},e.signOut=function(){N.a.auth().signOut()},e.state={selectedChat:null,newChatFormVisible:!1,email:null,chats:[]},e}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(V,{history:this.props.history,newChatBtnFn:this.newChatBtnClicked,selectChatFn:this.selectChat,chats:this.state.chats,userEmail:this.state.email,selectedChatIndex:this.state.selectedChat}),r.a.createElement(k.a,{onClick:this.signOut,className:e.signOutBtn},"\u767b\u51fa"))}}]),t}(n.Component),K=y()(z)(J);u.a.initializeApp({apiKey:"AIzaSyCcyufPWaWOcLvbBPgBArNMH5Q_gi9oBAY",authDomain:"realtime-chat-2598f.firebaseapp.com",databaseURL:"https://realtime-chat-2598f.firebaseio.com",projectId:"realtime-chat-2598f",storageBucket:"realtime-chat-2598f.appspot.com",messagingSenderId:"644826752739",appId:"1:644826752739:web:9912f44a709048c9e947d6",measurementId:"G-MB5NYNLCK2"});var Y=r.a.createElement(s.a,null,r.a.createElement("div",{id:"routing-container"},r.a.createElement(c.a,{path:"/Realtime-chat/login",component:F}),r.a.createElement(c.a,{path:"/Realtime-chat/signup",component:W}),r.a.createElement(c.a,{path:"/Realtime-chat/dashboard",component:K})));o.a.render(Y,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){e.exports=a(127)},91:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.13e6ea20.chunk.js.map