(this.webpackJsonpbenchmark=this.webpackJsonpbenchmark||[]).push([[0],{131:function(e,t,a){e.exports=a(177)},136:function(e,t,a){},137:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),l=(a(136),a(18)),i=a(19),u=a(21),s=a(20),m=(a(137),a(12)),p=a.n(m),h=a(22),d=function(){var e=Object(h.a)(p.a.mark((function e(t,a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.removeItem("token"),e.next=3,fetch("http://localhost:8000/api/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:a})});case 3:return n=e.sent,console.log(n),e.next=7,n.json();case 7:return(r=e.sent).token&&localStorage.setItem("token",r.token),e.abrupt("return",n.ok);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(h.a)(p.a.mark((function e(t,a,n){var r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/user/register/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,name:a,password:n})});case 2:return r=e.sent,e.next=5,r.json();case 5:return(o=e.sent).email&o.name&&(localStorage.setItem("username",o.email),localStorage.setItem("name",o.name)),e.abrupt("return",r.ok);case 8:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),b=function(){localStorage.removeItem("token")},g=a(228),E=a(225),v=a(230),y=a(179),j=a(231),O=a(13),k=a(14),w=Object(E.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),S=function(){var e=w(),t=Object(k.g)();return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{position:"static",style:{background:"#2A3D45"}},r.a.createElement(v.a,null,r.a.createElement(y.a,{variant:"h6",className:e.title},"Benchmark"),r.a.createElement(j.a,{component:O.b,to:"/",color:"inherit"},"Home"),r.a.createElement(j.a,{onClick:function(){b(),window.alert("Logout Successful!"),t.push("/login")},color:"inherit"},"Logout"))))},C=a(58),x=a.n(C),N=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handle_logout=function(){b(),n.props.history.push("/login")},n.state={name:void 0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getName()}},{key:"getName",value:function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({name:"john doe"});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(S,null)),r.a.createElement("h2",null,this.state.name," this our Dashboard"),r.a.createElement("form",{action:"/login",method:"get"},r.a.createElement("input",{type:"submit",value:"Login",name:"Submit",id:"form_login"})),r.a.createElement("form",{action:"/signup",method:"get"},r.a.createElement("input",{type:"submit",value:"SignUp",name:"Submit",id:"form_signup"})),r.a.createElement("button",{onClick:this.handle_logout},"Logout"))}}]),a}(n.Component),B=a(79),P=a(42),I=Object(E.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),D=function(e){var t=I();return r.a.createElement("div",{className:t.root},r.a.createElement(g.a,{position:"static",style:{background:"#2A3D45"}},r.a.createElement(v.a,null,r.a.createElement(y.a,{variant:"h6",className:t.title},"Benchmark"),r.a.createElement(j.a,{component:O.b,to:"/",color:"inherit",className:t.menuButton},"Home"),r.a.createElement(j.a,{component:O.b,to:"/about",color:"inherit",className:t.menuButton},"About"),r.a.createElement(j.a,{component:O.b,to:"/evaluation",color:"inherit",className:t.menuButton},"Evaluation"),r.a.createElement(j.a,{component:O.b,to:"/submit",color:"inherit",className:t.menuButton},"Submit"),r.a.createElement(j.a,{component:O.b,to:"/dataset",color:"inherit",className:t.menuButton},"Dataset"),r.a.createElement(j.a,{component:O.b,to:"/license",color:"inherit",className:t.menuButton},"License"),r.a.createElement(j.a,{component:O.b,to:e.btnLink,color:"inherit"},e.btnName))))},T=a(232),L=a(178),A=a(247),F=a(236),W=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",authflag:1},n.handleChange=n.handleChange.bind(Object(P.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(P.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState((function(e){var n=Object(B.a)({},e);return n[t]=a,n}))}},{key:"handleSubmit",value:function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,d(this.state.username,this.state.password);case 3:e.sent?this.props.history.push({pathname:"/Dashboard",state:{name:this.state.username}}):alert("Incorrect Credentials!");case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(D,{btnName:"Signup",btnLink:"/signup"})),r.a.createElement(T.a,{container:!0,spacing:0,justify:"center",direction:"row"},r.a.createElement(T.a,{item:!0},r.a.createElement(T.a,{container:!0,direction:"column",justify:"center",spacing:2,className:"login-form"},r.a.createElement(L.a,{variant:"elevation",elevation:2,className:"login-background"},r.a.createElement(T.a,{item:!0,style:{paddingBottom:"15px"}},r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign in to your account")),r.a.createElement(T.a,{item:!0},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(T.a,{container:!0,direction:"column",spacing:2},r.a.createElement(T.a,{item:!0},r.a.createElement(A.a,{type:"email",label:"Email",fullWidth:!0,name:"username",variant:"outlined",color:"primary",value:this.state.username,onChange:this.handleChange,required:!0,autoFocus:!0})),r.a.createElement(T.a,{item:!0},r.a.createElement(A.a,{type:"password",label:"Password",fullWidth:!0,name:"password",variant:"outlined",value:this.state.password,onChange:this.handleChange,required:!0})),r.a.createElement(T.a,{item:!0},r.a.createElement(j.a,{variant:"contained",style:{backgroundColor:"#1b998b",color:"#ffffff"},type:"submit",className:"button-block"},"Submit"))))),r.a.createElement(T.a,{item:!0,style:{marginTop:"10px"}},r.a.createElement(F.a,{href:"/signup",variant:"body2"},"New User? Create Account")))))))}}]),a}(r.a.Component),q=function(){return r.a.createElement("div",{className:"show-body"},"Error 404 - Page Not found")},H=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={name:"",username:"",password:"",authflag:1},n.handleChange=n.handleChange.bind(Object(P.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(P.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState((function(e){var n=Object(B.a)({},e);return n[t]=a,n}))}},{key:"handleSubmit",value:function(){var e=Object(h.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,f(this.state.username,this.state.name,this.state.password);case 3:a=e.sent,console.log(a),a?(n=this.props.history,alert("New Account Created, Please login again!"),n.push("/login")):alert("Incorrect Credentials!");case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(D,{btnName:"Login",btnLink:"/login"})),r.a.createElement(T.a,{container:!0,spacing:0,justify:"center",direction:"row"},r.a.createElement(T.a,{item:!0},r.a.createElement(T.a,{container:!0,direction:"column",justify:"center",spacing:2,className:"login-form"},r.a.createElement(L.a,{variant:"elevation",elevation:2,className:"login-background"},r.a.createElement(T.a,{item:!0,style:{paddingBottom:"15px"}},r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign up to create Account")),r.a.createElement(T.a,{item:!0},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(T.a,{container:!0,direction:"column",spacing:2},r.a.createElement(T.a,{item:!0},r.a.createElement(A.a,{type:"text",label:"Name",fullWidth:!0,name:"name",variant:"outlined",color:"primary",value:this.state.name,onChange:this.handleChange,required:!0,autoFocus:!0})),r.a.createElement(T.a,{item:!0},r.a.createElement(A.a,{type:"email",label:"Email",fullWidth:!0,name:"username",variant:"outlined",color:"primary",value:this.state.username,onChange:this.handleChange,required:!0,autoFocus:!0})),r.a.createElement(T.a,{item:!0},r.a.createElement(A.a,{type:"password",label:"Password",fullWidth:!0,name:"password",variant:"outlined",value:this.state.password,onChange:this.handleChange,required:!0})),r.a.createElement(T.a,{item:!0},r.a.createElement(j.a,{variant:"contained",style:{backgroundColor:"#1b998b",color:"#ffffff"},type:"submit",className:"button-block"},"Submit"))))),r.a.createElement(T.a,{item:!0,style:{marginTop:"10px"}},r.a.createElement(F.a,{href:"#",variant:"body2"},"Forgot Password?")))))))}}]),a}(r.a.Component),M=a(116),R=function(e){var t=e.component,a=Object(M.a)(e,["component"]);return r.a.createElement(k.b,Object.assign({},a,{render:function(e){return"undefined"!==localStorage.getItem("token")&&void 0!==typeof localStorage.getItem("token")&&null!==localStorage.getItem("token")?r.a.createElement(t,e):r.a.createElement(k.a,{to:"/login"})}}))},G=a(37),_=a(250),z=a(115),J=Object(E.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),U=function(e){var t=J(),a=Object(n.useState)(void 0),o=Object(G.a)(a,2),c=o[0],l=o[1],i=Object(n.useState)(null),u=Object(G.a)(i,2),s=u[0],m=u[1],d=Boolean(s),f=Object(k.g)(),E=function(){f.push("/dashboard"),m(null)};return Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{"undefined"===localStorage.getItem("token")||void 0===typeof localStorage.getItem("token")||null===localStorage.getItem("token")?l(!1):l(!0)}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("render"),function(){e.apply(this,arguments)}()}),[c]),r.a.createElement("div",{className:t.root},r.a.createElement(g.a,{position:"static",style:{background:"#2A3D45"}},r.a.createElement(v.a,null,r.a.createElement(y.a,{variant:"h6",className:t.title},"Benchmark"),r.a.createElement(j.a,{component:O.b,to:"/",color:"inherit",className:t.menuButton},"Home"),r.a.createElement(j.a,{component:O.b,to:"/about",color:"inherit",className:t.menuButton},"About"),r.a.createElement(j.a,{component:O.b,to:"/evaluation",color:"inherit",className:t.menuButton},"Evaluation"),r.a.createElement(j.a,{component:O.b,to:"/submit",color:"inherit",className:t.menuButton},"Submit"),r.a.createElement(j.a,{component:O.b,to:"/dataset",color:"inherit",className:t.menuButton},"Dataset"),r.a.createElement(j.a,{component:O.b,to:"/license",color:"inherit",className:t.menuButton},"License"),!0===c?r.a.createElement(j.a,{onClick:function(){b(),window.alert("Logout Successful!"),f.push("/login")},color:"inherit"},"Logout"):r.a.createElement(j.a,{component:O.b,to:"/login",color:"inherit"},"Login / Signup"),r.a.createElement("div",null,r.a.createElement(j.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit"},"Account"),r.a.createElement(z.a,{id:"menu-appbar",anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:E},r.a.createElement(_.a,{onClick:E},"Dashboard"),r.a.createElement(_.a,{onClick:E},"Logout"))))))},K=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(U,null)),r.a.createElement("h2",null,"Hello this our HomePage"),r.a.createElement("div",null))}}]),a}(n.Component);function $(){return r.a.createElement("div",null,r.a.createElement(U,null),r.a.createElement("div",{style:{textAlign:"center",marginTop:"50px"}},r.a.createElement("p",null,"Prof. Philippos Mordohai"),r.a.createElement("p",null,"Assistants: "),r.a.createElement("p",null,"Deep Kakadia"),r.a.createElement("p",null,"Parth Parab")))}var Q=a(241),V=a(242),X=a(239),Y=a(240),Z=a(237),ee=a(246),te=a(238),ae=a(248);function ne(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var re=[{id:"fileName",numeric:!1,disablePadding:!0,label:"File Name"},{id:"charCount",numeric:!0,disablePadding:!1,label:"Character Count"}];function oe(e){var t=e.classes,a=e.order,n=e.orderBy,o=e.onRequestSort;return r.a.createElement(Z.a,null,r.a.createElement(te.a,null,r.a.createElement(X.a,null),re.map((function(e){return r.a.createElement(X.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:n===e.id&&a},r.a.createElement(ae.a,{active:n===e.id,direction:n===e.id?a:"asc",onClick:(c=e.id,function(e){o(e,c)})},e.label,n===e.id?r.a.createElement("span",{className:t.visuallyHidden},"desc"===a?"sorted descending":"sorted ascending"):null));var c}))))}var ce=Object(E.a)((function(e){return{root:{width:"100%"},paper:{width:"90%",marginBottom:e.spacing(2),marginLeft:"70px",marginTop:"70px"},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function le(){var e=ce(),t=r.a.useState("asc"),a=Object(G.a)(t,2),o=a[0],c=a[1],l=r.a.useState("charCount"),i=Object(G.a)(l,2),u=i[0],s=i[1],m=r.a.useState(0),d=Object(G.a)(m,2),f=d[0],b=d[1],g=r.a.useState(5),E=Object(G.a)(g,2),v=E[0],y=E[1],j=r.a.useState([]),O=Object(G.a)(j,2),k=O[0],w=O[1];Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{x.a.get("http://localhost:8000/api/evaluation/").then((function(e){w(e.data.evaluationData)}))}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("render"),function(){e.apply(this,arguments)}()}),[]);var S=v-Math.min(v,k.length-f*v);return r.a.createElement("div",{className:e.root},r.a.createElement(U,null),r.a.createElement(L.a,{className:e.paper},r.a.createElement(Y.a,null,r.a.createElement(Q.a,{className:e.table,"aria-labelledby":"tableTitle","aria-label":"enhanced table"},r.a.createElement(oe,{classes:e,order:o,orderBy:u,onRequestSort:function(e,t){c(u===t&&"asc"===o?"desc":"asc"),s(t)},rowCount:k.length}),r.a.createElement(V.a,null,function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(k,function(e,t){return"desc"===e?function(e,a){return ne(e,a,t)}:function(e,a){return-ne(e,a,t)}}(o,u)).slice(f*v,f*v+v).map((function(e){return console.log(e),r.a.createElement(te.a,{hover:!0,tabIndex:-1,key:e._id},r.a.createElement(X.a,null),r.a.createElement(X.a,{component:"th",scope:"row",padding:"none"},e.fileName),r.a.createElement(X.a,{align:"right"},e.charCount))})),S>0&&r.a.createElement(te.a,null,r.a.createElement(X.a,{colSpan:6}))))),r.a.createElement(ee.a,{rowsPerPageOptions:[5,10,25],component:"div",count:k.length,rowsPerPage:v,page:f,onChangePage:function(e,t){b(t)},onChangeRowsPerPage:function(e){y(parseInt(e.target.value,10)),b(0)}})))}function ie(){return r.a.createElement("div",null,r.a.createElement(U,null),r.a.createElement("div",{style:{textAlign:"center",marginTop:"50px"}},"MIT LICENSE"))}var ue=a(105),se=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-wrapper"},Object(ue.loremIpsum)({p:3}).map((function(e){return r.a.createElement("div",{className:"text",key:e},e)})))}}]),a}(n.Component),me=a(114),pe=a(78),he=a.n(pe),de=a(5),fe=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).addData=function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.a.post("http://localhost:8000/api/evaluation/",t).then((function(e){console.log(e.data)}),(function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={open:!1,files:[],count:void 0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"handleSave",value:function(e){var t=this;this.setState({files:e,open:!1},(function(){var a=new FileReader;a.onload=function(){t.setState({count:a.result.substring(0).length});var n={fileName:e[0].name,charCount:a.result.substring(0).length};t.addData(n)},a.readAsText(t.state.files[0])}))}},{key:"handleOpen",value:function(){this.setState({open:!0})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{style:{textAlign:"center",marginTop:"50px"}},r.a.createElement(j.a,{variant:"contained",color:"default",className:e.button,startIcon:r.a.createElement(he.a,null),onClick:this.handleOpen.bind(this)},"Upload File"),r.a.createElement(me.a,{open:this.state.open,onSave:this.handleSave.bind(this),acceptedFiles:[".pdf,.zip,.txt"],maxFileSize:5e6,onClose:this.handleClose.bind(this)}),void 0===this.state.count?r.a.createElement("p",null):r.a.createElement("div",null,r.a.createElement("p",null,"Total word count: "),r.a.createElement("p",null,this.state.count)))}}]),a}(n.Component),be=Object(de.a)((function(e){return{button:{margin:e.spacing(1)}}}),{withTheme:!0})(fe),ge=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U,null),r.a.createElement(be,null))}}]),a}(n.Component);function Ee(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{style:{textAlign:"center",marginTop:"50px"}},r.a.createElement("p",null,"Work in Progress")))}var ve=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O.a,null,r.a.createElement(k.d,null,r.a.createElement(R,{exact:!0,path:"/dashboard",component:N}),r.a.createElement(R,{exact:!0,path:"/submit",component:ge}),r.a.createElement(R,{exact:!0,path:"/editprofile",component:Ee}),r.a.createElement(k.b,{exact:!0,path:"/",component:K}),r.a.createElement(k.b,{exact:!0,path:"/about",component:$}),r.a.createElement(k.b,{exact:!0,path:"/evaluation",component:le}),r.a.createElement(k.b,{exact:!0,path:"/license",component:ie}),r.a.createElement(k.b,{exact:!0,path:"/dataset",component:se}),r.a.createElement(k.b,{exact:!0,path:"/login",component:W}),r.a.createElement(k.b,{exact:!0,path:"/signup",component:H}),r.a.createElement(k.b,{component:q}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[131,1,2]]]);
//# sourceMappingURL=main.00573a49.chunk.js.map