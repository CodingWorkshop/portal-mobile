(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],u=0,m=[];u<s.length;u++)o=s[u],r[o]&&m.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function s(t){return c.p+"js/"+({lobby:"lobby",promotion:"promotion",wallet:"wallet"}[t]||t)+"."+{lobby:"e0d74f03",promotion:"18c92f4d",wallet:"2413e957"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={lobby:1,promotion:1,wallet:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var a="css/"+({lobby:"lobby",promotion:"promotion",wallet:"wallet"}[t]||t)+"."+{lobby:"3291b0a2",promotion:"cd30b66c",wallet:"49d7a741"}[t]+".css",r=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){l=m[s],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.request=a,delete o[t],p.parentNode.removeChild(p),n(i)},p.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){o[t]=0}));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t),l=function(e){u.onerror=u.onload=null,clearTimeout(m);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[t]=void 0}};var m=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/portal-mobile/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0414":function(t,e,n){"use strict";var a=n("861a"),o=n.n(a);o.a},"052c":function(t,e,n){"use strict";var a=n("7659"),o=n.n(a);o.a},"0e13":function(t,e,n){},"171e":function(t,e,n){"use strict";var a=n("8a18"),o=n.n(a);o.a},"2b78":function(t,e,n){"use strict";var a=n("c8ea"),o=n.n(a);o.a},"2eef":function(t,e,n){"use strict";var a=n("4569"),o=n.n(a);o.a},"2f6e":function(t,e,n){"use strict";var a=n("f635"),o=n.n(a);o.a},3710:function(t,e,n){"use strict";var a=n("a328"),o=n.n(a);o.a},4569:function(t,e,n){},4687:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Row",{staticClass:"row"},[n("i-col",{staticClass:"logo",attrs:{span:"6"}},[n("img",{attrs:{alt:"Cake logo",src:"https://via.placeholder.com/120x50"}})]),n("i-col",{staticClass:"icons",attrs:{span:"18"}},[n("Button",{attrs:{type:"text"},on:{click:function(e){t.$store.commit("openDrawerPage",{type:"search"})}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"search"}})],1),n("Button",{attrs:{type:"text"}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"heart"},on:{click:function(e){t.$store.commit("openDrawerPage",{type:"favorite"})}}})],1)],1)],1)},o=[],r={name:"HeaderTitle",components:{}},i=r,s=(n("0414"),n("2877")),c=Object(s["a"])(i,a,o,!1,null,"07d71201",null);c.options.__file="HeaderTitle.vue";e["a"]=c.exports},4727:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"announcement"},[n("font-awesome-icon",{staticClass:"fa-2x icon",attrs:{icon:"bullhorn"}}),n("div",{staticClass:"marquee"},[n("div",{staticClass:"news"},t._l(t.asyncCount,function(e){return n("span",{key:e},[t._v("即日起 任何品項的【"+t._s(e)+"】通通88折起")])}),0)])],1)},o=[],r={name:"Announcement",components:{},mounted:function(){this.asyncCount=["麵包"]},data:function(){return{asyncCount:"麵包"}}},i=r,s=(n("fe3b"),n("2877")),c=Object(s["a"])(i,a,o,!1,null,"2d9d314a",null);c.options.__file="Announcement.vue";e["a"]=c.exports},"4bc1":function(t,e,n){},"53fa":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i-col",{attrs:{span:8}},[n("div",[n("img",{staticClass:"game-img",attrs:{src:t.img},on:{click:function(e){t.$store.commit("openDrawerPage",{type:"game-detail",name:t.name,gameId:t.name})}}}),n("Row",{staticClass:"text-area",attrs:{type:"flex",justify:"space-around"}},[n("i-col",{staticClass:"text",attrs:{span:12}},[t._v(t._s(t.name))]),n("i-col",{staticClass:"icon",attrs:{span:12}},[n("font-awesome-icon",{attrs:{icon:[t.isFavorite?"far":"fas","heart"]}})],1)],1)],1)])},o=[],r={name:"GameBox",props:{name:String,img:String,isFavorite:Boolean}},i=r,s=(n("2eef"),n("2877")),c=Object(s["a"])(i,a,o,!1,null,"6a68d138",null);c.options.__file="GameBox.vue";e["a"]=c.exports},"5a9e":function(t,e,n){"use strict";var a=n("4bc1"),o=n.n(a);o.a},"5c48":function(t,e,n){},7659:function(t,e,n){},"7a16":function(t,e,n){"use strict";var a=n("cae3"),o=n.n(a);o.a},"7c55":function(t,e,n){"use strict";var a=n("5c48"),o=n.n(a);o.a},"847a":function(t,e,n){"use strict";var a=n("0e13"),o=n.n(a);o.a},"861a":function(t,e,n){},"8a0f":function(t,e,n){"use strict";var a=n("a510"),o=n.n(a);o.a},"8a18":function(t,e,n){},9112:function(t,e,n){},"9e55":function(t,e,n){},"9ee1":function(t,e,n){},a10b:function(t,e,n){"use strict";var a=n("adb5"),o=n.n(a);o.a},a328:function(t,e,n){},a510:function(t,e,n){},adb5:function(t,e,n){},b2be:function(t,e,n){"use strict";var a=n("9112"),o=n.n(a);o.a},c8ea:function(t,e,n){},cae3:function(t,e,n){},cd22:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("footer-button"),n("multi-drawer"),t.loading?n("Spin",{attrs:{fix:"",size:"large"}}):t._e()],1)},r=[],i=n("d225"),s=n("b0b4"),c=n("308d"),l=n("6bb5"),u=n("4e2b"),m=n("9ab4"),p=n("60a3"),d=n("a4bb"),f=n.n(d),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Row",{staticClass:"tab",attrs:{type:"flex",justify:"space-around"}},[n("i-col",{attrs:{span:"4"}},[n("Button",{staticClass:"btn",attrs:{type:"text",to:"/",long:""},on:{click:function(e){t.scrollTop()}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"gamepad"}}),n("div",[t._v(t._s(t.$t("commodity")))])],1)],1),n("i-col",{attrs:{span:"4"}},[n("Button",{staticClass:"btn",attrs:{type:"text",to:"/wallet",long:""}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"money-bill-alt"}}),n("div",[t._v(t._s(t.$t("financial")))])],1)],1),n("i-col",{attrs:{span:"4"}},[n("Button",{staticClass:"btn",attrs:{type:"text",long:""},on:{click:function(e){t.$store.commit("openDrawerPage",{type:"login"})}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"phone-volume"}}),n("div",[t._v(t._s(t.$t("login")))])],1)],1),n("i-col",{attrs:{span:"4"}},[n("Button",{staticClass:"btn",attrs:{type:"text",to:"/promotion",long:""}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"gift"}}),n("div",[t._v(t._s(t.$t("promotion")))])],1)],1),n("i-col",{attrs:{span:"4"}},[n("Button",{staticClass:"btn",attrs:{type:"text",to:"/account",long:""}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"user"}}),n("div",[t._v(t._s(t.$t("info")))])],1)],1)],1)},h=[],v={name:"FooterButton",components:{},methods:{scrollTop:function(){var t=document.documentElement,e=setInterval(n,2);function n(){0===t.scrollTop?clearInterval(e):t.scrollTop=t.scrollTop-10}}}},b=v,y=(n("171e"),n("2877")),_=Object(y["a"])(b,g,h,!1,null,"fd297714",null);_.options.__file="FooterButton.vue";var w=_.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.pageList,function(e){return n("Drawer",{key:e.type,style:{zIndex:1e3+e.zIndex,position:"relative"},attrs:{closable:!1,width:"100"},on:{"on-close":function(n){t.close(e.type)}},model:{value:e.open,callback:function(n){t.$set(e,"open",n)},expression:"list.open"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("v-touch",{on:{swiperight:function(n){t.$store.commit("closeDrawerPage",e.type)}}},[n("h1",[n("Button",{attrs:{type:"text"},on:{click:function(n){t.$store.commit("closeDrawerPage",e.type)}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"angle-left"}})],1),t._v("\n          "+t._s(e.name)+"\n        ")],1)])],1),n("v-touch",{attrs:{tag:"body","swipe-options":{threshold:180}},on:{swiperight:function(n){t.$store.commit("closeDrawerPage",e.type)}}},[n("drawer-"+e.type,{tag:"component"})],1)],1)}),1)},j=[],k=n("cebc"),O=n("2f62"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("i-input",{attrs:{placeholder:"請輸入遊戲名稱",size:"large"}},[n("font-awesome-icon",{staticClass:"fa-2x icon",attrs:{slot:"prefix",icon:"search"},slot:"prefix"})],1),n("h3",[t._v("熱門搜尋")]),t._l(t.hotSearch,function(e){return n("Tag",{key:e.index,attrs:{color:"magenta"}},[t._v(t._s(e.name))])})],2)},S=[],$={name:"DrawerSearch",components:{},data:function(){return{hotSearch:[]}},mounted:function(){var t=this;this.axios.get("https://next.json-generator.com/api/json/get/EJshu2xCr").then(function(e){console.log(e),t.hotSearch=e.ReturnObject},function(){console.log("fail")})}},L=$,P=(n("ef4b"),Object(y["a"])(L,C,S,!1,null,"36cda9da",null));P.options.__file="Search.vue";var F=P.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("我的最愛")]),n("Button",{attrs:{type:"primary"},on:{click:function(e){t.$store.commit("openDrawerPage",{type:"game-list"})}}},[t._v("到遊戲逛逛")])],1)},E=[],T={name:"DrawerFavorite",components:{},data:function(){return{}}},D=T,R=(n("8a0f"),Object(y["a"])(D,I,E,!1,null,"08d1d2e6",null));R.options.__file="Favorite.vue";var B,M,G=R.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$store.state.login.loginStatus?n("div",[n("h1",[t._v("安安 "+t._s(t.$store.state.login.user))]),n("Button",{attrs:{type:"primary"},on:{click:function(e){t.logOut()}}},[t._v("登出")])],1):n("tabs",{model:{value:t.key,callback:function(e){t.key=e},expression:"key"}},[n("tab-pane",{attrs:{label:"會員登入",name:"login"}},[n("v-touch",{attrs:{tag:"body"},on:{swipeleft:function(e){t.key="register"}}},[n("font-awesome-icon",{staticClass:"fa-10x login-icon",attrs:{icon:"user-circle"}}),n("Form",{ref:"loginForm",attrs:{model:t.loginForm,rules:t.loginRuleValidate},nativeOn:{submit:function(e){e.preventDefault(),t.loginSubmit("loginForm")}}},[n("FormItem",{attrs:{prop:"user"}},[n("i-input",{attrs:{placeholder:"帳號",clearable:""},model:{value:t.loginForm.user,callback:function(e){t.$set(t.loginForm,"user",e)},expression:"loginForm.user"}})],1),n("FormItem",{attrs:{prop:"password"}},[n("i-input",{attrs:{type:"password",placeholder:"密碼",clearable:""},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1),n("FormItem",{attrs:{prop:"code"}},[n("i-input",{attrs:{placeholder:"驗證碼",clearable:""},model:{value:t.loginForm.code,callback:function(e){t.$set(t.loginForm,"code",e)},expression:"loginForm.code"}})],1),n("FormItem",[n("Button",{attrs:{"html-type":"submit",type:"primary",disabled:t.$store.state.login.signing,long:""}},[t._v("\n              "+t._s(t.$store.state.login.signing?"登入中...":"登入")+"\n            ")])],1),n("FormItem",[n("Button",{attrs:{type:"info",long:""}},[t._v("忘記密碼?")])],1)],1)],1)],1),n("tab-pane",{attrs:{label:"立即註冊",name:"register"}},[n("v-touch",{attrs:{tag:"body"},on:{swiperight:function(e){t.key="login"}}},[n("Form",{ref:"registerForm",attrs:{model:t.registerForm},nativeOn:{submit:function(e){e.preventDefault(),t.registerSubmit("registerForm")}}},[t._l(t.registerList,function(e,a){return n("form-input",{key:a,attrs:{detail:e,modelForm:t.registerForm}})}),n("FormItem",[n("Button",{attrs:{"html-type":"submit",type:"primary",long:""}},[t._v("送出")])],1)],2)],1)],1)],1)],1)},A=[],U=(n("7f7f"),{name:"FormInput",props:{detail:Object,modelForm:Object},render:function(t){return t("FormItem",{props:{prop:this.detail.model,required:this.detail.isRequired}},[t("i-input",{props:{},attrs:{placeholder:this.detail.placeholder,maxlength:this.detail.maxlength?this.detail.maxlength:null,type:this.detail.type,clearable:!0,value:this.modelForm[this.detail.model]}})])},data:function(){return{}},methods:{},mounted:function(){}}),N=U,q=(n("7a16"),Object(y["a"])(N,B,M,!1,null,"5ef5407c",null));q.options.__file="FormInput.vue";var W=q.exports,Q=[{name:"推薦人",model:"Referrer",placeholder:"請輸入推薦人",type:"text"},{name:"會員帳號",model:"Account",placeholder:"請輸入會員帳號 需字母開頭 限數字和底線",type:"text",maxlength:15,pattern:"/^[a-zA-Z]|d+/"},{name:"會員密碼",model:"Password",placeholder:"請輸入會員密碼",type:"password",pattern:"/[a-zA-Z]|d+/"},{name:"確認密碼",model:"CheckPsd",placeholder:"請再確認密碼",type:"password"},{name:"取款密碼",model:"MoneyPassword",placeholder:"請輸入取款密碼",type:"password"},{name:"真實姓名",model:"Name",placeholder:"請輸入真實姓名 需與提款銀行戶口相同",type:"text"},{name:"手機號碼",model:"Mobile",placeholder:"請輸入手機號碼",type:"text",pattern:"/[0-9]/"},{name:"電子信箱",model:"Email",placeholder:"請輸入電子信箱",type:"email"},{name:"性別",model:"Sex",placeholder:"請輸入性別",type:"text"},{name:"生日",model:"Birthday",placeholder:"請輸入生日",type:"date"},{name:"QQ",model:"QQ",placeholder:"請輸入QQ",type:"text"},{name:"微信",model:"IdNumber",placeholder:"請輸入微信",type:"text"}],J={name:"DrawerLogin",components:{FormInput:W},data:function(){return{key:"login",masterRule:[],loginForm:{user:"",password:"",code:""},loginRuleValidate:{user:[{required:!0,message:"The user cannot be empty",trigger:"blur"}],password:[{required:!0,message:"The password cannot be empty",trigger:"blur"}],code:[{type:"string",required:!0,message:"The code cannot be empty",trigger:"blur"}]},registerForm:{Referrer:"",Account:"",Password:"",CheckPsd:"",MoneyPassword:"",Name:"",Mobile:"",Email:"",Sex:"",Birthday:"",QQ:"",IdNumber:""},registerList:[]}},methods:{loginSubmit:function(t){var e=this;this.$store.commit("updateSigning"),this.$refs[t].validate(function(t){t?e.axios.post("/api/json/get/V1lUCe3gL",{Account:e.loginForm.user,Password:e.loginForm.password}).then(function(t){var n=t.ReturnObject;e.$store.dispatch("updateLogin",{user:e.loginForm.user,token:n}),e.$Message.success("登入成功!");var a=e.$store.state.login.destinationPage;a&&(e.$router.push(a),e.$store.commit("recordDestinationPage",""),e.$store.commit("closeDrawerPage","login")),e.$store.commit("updateSigning")},function(){e.$Message.error("帳號密碼錯誤!"),e.$store.commit("updateSigning")}):e.$store.commit("updateSigning")})},registerSubmit:function(t){var e=this;this.$refs[t].validate(function(t){console.log(e.registerForm),t?e.$Message.success("成功!"):e.$Message.success("失敗!")})},logOut:function(){this.$store.dispatch("submitLogout"),this.loginForm={user:"",password:"",code:""},this.$Message.success("登出成功!")}},mounted:function(){var t=this;this.axios.get("https://next.json-generator.com/api/json/get/V1bIvscJU").then(function(e){t.masterRule=e.ReturnObject,Q.forEach(function(e){e.isRequired=void 0==t.masterRule["IsRequired_"+e.name]||t.masterRule["IsRequired_"+e.name],e.isShow=void 0==t.masterRule["IsShow_"+e.name]||t.masterRule["IsShow_"+e.name]}),t.registerList=Q.filter(function(t){return 1==t.isShow})})}},V=J,H=(n("2f6e"),Object(y["a"])(V,z,A,!1,null,"402e7cd8",null));H.options.__file="Login.vue";var X=H.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-detail"},[n("img",{attrs:{src:"https://via.placeholder.com/140x140"}}),t.loginStatus?n("Button",{attrs:{type:"primary",long:""}},[t._v("進入遊戲")]):n("Button",{attrs:{type:"primary",long:""},on:{click:function(e){t.$store.commit("openDrawerPage",{type:"login"})}}},[t._v("登入註冊")]),n("ul",[n("li",[n("font-awesome-icon",{staticClass:"fa-2x icon",attrs:{icon:"gamepad"}}),n("p",[t._v("電子大廳")])],1),n("li",[n("font-awesome-icon",{staticClass:"fa-2x icon",attrs:{icon:["fas","heart"]}}),n("p",[t._v("加入最愛")])],1),t.loginStatus?t._e():n("li",[n("font-awesome-icon",{staticClass:"fa-2x icon",attrs:{icon:"child"}}),n("p",[t._v("我要試玩")])],1)])],1)},Z=[],K={name:"DrawerGameDetail",components:{},data:function(){return{}},computed:Object(k["a"])({},Object(O["b"])({gameId:function(t){return t.drawer.gameId},loginStatus:function(t){return t.login.loginStatus}})),mounted:function(){console.log(this.gameId)}},tt=K,et=(n("847a"),Object(y["a"])(tt,Y,Z,!1,null,"7b6d15a3",null));et.options.__file="GameDetail.vue";var nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Row",t._l(t.getList,function(t,e){return n("game-box",{key:e,attrs:{name:t.name,isFavorite:t.isFavorite,img:t.img}})}),1)],1)},ot=[],rt=n("53fa"),it={name:"DrawerGameList",components:{GameBox:rt["a"]},data:function(){return{list:[]}},computed:Object(k["a"])({},Object(O["b"])({gameListCatrgory:function(t){return t.drawer.gameListCatrgory},getList:function(){return JSON.parse(sessionStorage.getItem("GameList_"+this.gameListCatrgory))}}))},st=it,ct=(n("052c"),Object(y["a"])(st,at,ot,!1,null,"23992b2a",null));ct.options.__file="GameList.vue";var lt=ct.exports,ut={name:"MultiDrawer",components:{DrawerSearch:F,DrawerFavorite:G,DrawerLogin:X,DrawerGameDetail:nt,DrawerGameList:lt},data:function(){return{}},computed:Object(k["a"])({},Object(O["b"])({pageList:function(t){return t.drawer.pageList}})),methods:{close:function(t){this.$store.commit("closeDrawerPage",t)}}},mt=ut,pt=(n("b2be"),Object(y["a"])(mt,x,j,!1,null,"149b1330",null));pt.options.__file="MultiDrawer.vue";var dt=pt.exports,ft=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"loading",get:function(){return 0===f()(this.$i18n.getLocaleMessage(this.$i18n.locale)).length}}]),e}(p["c"]);ft=m["a"]([Object(p["a"])({name:"app",components:{FooterButton:w,MultiDrawer:dt}})],ft);var gt=ft,ht=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"created",value:function(){}}]),e}(Object(p["b"])(gt));ht=m["a"]([p["a"]],ht);var vt=ht,bt=vt,yt=(n("7c55"),Object(y["a"])(bt,o,r,!1,null,null,null));yt.options.__file="App.vue";var _t=yt.exports,wt=n("d847"),xt=n.n(wt),jt=n("795b"),kt=n.n(jt),Ot=n("bc3a"),Ct=n.n(Ot),St=Ct.a.create({baseURL:"https://next.json-generator.com"}),$t=function(){function t(){Object(i["a"])(this,t)}return Object(s["a"])(t,[{key:"get",value:function(t,e){return St.get(t,e).then(function(t){return t.data.IsSuccess?kt.a.resolve(t.data):kt.a.reject(t.data.ErrorMessage)})}},{key:"post",value:function(t,e){return St.post(t,e).then(function(t){return t.data.IsSuccess?kt.a.resolve(t.data):kt.a.reject(t.data.ErrorMessage)})}}]),t}(),Lt=Ct.a.create({baseURL:"https://next.json-generator.com"}),Pt=function(){function t(){Object(i["a"])(this,t)}return Object(s["a"])(t,[{key:"get",value:function(t,e){return Lt.get(t,e).then(function(t){return t.data.IsSuccess?kt.a.resolve(t.data):kt.a.reject(t.data.ErrorMessage)})}},{key:"post",value:function(t,e){return Lt.post(t,e).then(function(t){return t.data.IsSuccess?kt.a.resolve(t.data):kt.a.reject(t.data.ErrorMessage)})}}]),t}(),Ft=function t(){Object(i["a"])(this,t),this.install=function(t,e){var n=new $t,a=new Pt;xt()(t.prototype,{axios:{get:function(){return n}},$http:{get:function(){return n}},jwt:{get:function(){return a}}})}},It=function(t){return St.interceptors.response.use(function(t){return t},function(e){var n=[{status:401,msg:"Unauthorized",callback:function(){alert("閒置過久，請重新登入"),t.push("notfound")}},{status:404,msg:"Not Found",callback:function(){}},{status:500,msg:"Internal Server Error",callback:function(){alert("操作頻繁，請稍後嘗試")}}],a=n.filter(function(t){return t.status===e.response.status})[0]||{msg:e.response.statusText,callback:function(){}};return a.callback(),kt.a.reject(a.msg)}),a["default"].use(new Ft),St},Et=n("0e44"),Tt=n("6fc5"),Dt=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.signing=!1,t.loginStatus=!1,t.user="",t.meidon="",t.destinationPage="",t.token="",t}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"updateSigning",value:function(){this.signing=!this.signing}},{key:"updateLoginStatus",value:function(){this.loginStatus=!this.loginStatus}},{key:"updateUser",value:function(t){this.user=t.user}},{key:"recordDestinationPage",value:function(t){this.destinationPage=t}},{key:"updateToken",value:function(t){this.token=t.token}},{key:"checkLogin",value:function(t){return new kt.a(function(e){setTimeout(function(){t.commit("updateSigning"),e()},2e3)})}},{key:"submitLogin",value:function(t,e){return t.dispatch("checkLogin").then(function(){t.commit("updateLoginStatus"),t.commit("updateUser",e)})}},{key:"submitLogout",value:function(t){t.commit("updateLoginStatus"),t.commit("updateUser",{user:""}),t.commit("updateToken",{token:""})}},{key:"updateLogin",value:function(t,e){t.commit("updateLoginStatus"),t.commit("updateUser",{user:e.user}),t.commit("updateToken",{token:e.token})}}]),e}(Tt["d"]);m["a"]([Tt["c"]],Dt.prototype,"updateSigning",null),m["a"]([Tt["c"]],Dt.prototype,"updateLoginStatus",null),m["a"]([Tt["c"]],Dt.prototype,"updateUser",null),m["a"]([Tt["c"]],Dt.prototype,"recordDestinationPage",null),m["a"]([Tt["c"]],Dt.prototype,"updateToken",null),m["a"]([Tt["a"]],Dt.prototype,"checkLogin",null),m["a"]([Tt["a"]],Dt.prototype,"submitLogin",null),m["a"]([Tt["a"]],Dt.prototype,"submitLogout",null),m["a"]([Tt["a"]],Dt.prototype,"updateLogin",null),Dt=m["a"]([Tt["b"]],Dt);var Rt=Dt,Bt=["搜尋","收藏夾","登入註冊","遊戲","遊戲列表"],Mt=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).call(this,{})),t.zIndexCounter=0,t.pageList=[],t.gameListCatrgory="",t.gameId="",t.pageList=["search","favorite","login","game-detail","game-list"].map(function(t,e){return{name:Bt[e],type:t,open:!1,zIndex:0}}),t}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"openDrawerPage",value:function(t){var e=this;this.gameId=t.gameId?t.gameId:this.gameId,this.gameListCatrgory=t.category?t.category:this.gameListCatrgory,this.pageList.some(function(n){var a=n.type===t.type;return a&&(e.zIndexCounter++,n.zIndex=e.zIndexCounter,n.open=!0,n.name=t.name?t.name:n.name),a})}},{key:"closeDrawerPage",value:function(t){this.pageList.some(function(e){var n=e.type===t;return n&&(e.open=!1),n})}}]),e}(Tt["d"]);m["a"]([Tt["c"]],Mt.prototype,"openDrawerPage",null),m["a"]([Tt["c"]],Mt.prototype,"closeDrawerPage",null),Mt=m["a"]([Tt["b"]],Mt);var Gt=Mt,zt=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.version={},t.message={},t}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"updateLocale",value:function(t){a["default"].set(this.version,t.locale,t.version),a["default"].set(this.message,t.locale,t.message)}}]),e}(Tt["d"]);m["a"]([Tt["c"]],zt.prototype,"updateLocale",null),zt=m["a"]([Tt["b"]],zt);var At=zt;a["default"].use(O["a"]);var Ut=new O["a"].Store({modules:{login:Rt,drawer:Gt,i18n:At},plugins:[Object(Et["a"])({storage:{getItem:function(t){return localStorage.getItem(t)},setItem:function(t,e){return localStorage.setItem(t,e)},removeItem:function(t){return localStorage.removeItem(t)}},paths:["login.loginStatus","login.user","login.token","i18n.version","i18n.message"]})]}),Nt=Ut,qt=n("8c4f"),Wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("header-title"),n("announcement"),n("slide"),n("game-type"),n("subject",{attrs:{msg:"熱門蛋糕",type:"hot"}}),n("game-grid",{attrs:{type:"hot"}}),n("subject",{attrs:{msg:"新進蛋糕",type:"new"}}),n("game-grid",{attrs:{type:"new"}}),n("category",{attrs:{title:"奶油蛋糕"}}),n("category",{attrs:{title:"草莓蛋糕"}}),n("category",{attrs:{title:"香草蛋糕"}})],1)},Qt=[],Jt=n("4687"),Vt=n("4727"),Ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-touch",{on:{swipeleft:function(e){t.changeSlide(t.index+1)},swiperight:function(e){t.changeSlide(t.index-1)}}},[n("Carousel",{attrs:{loop:"",autoplay:"",height:200},model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},t._l(t.demo1_list,function(t,e){return n("CarouselItem",{key:e},[n("Row",[n("i-col",{attrs:{span:"24"}},[n("img",{staticClass:"demo-carousel",attrs:{src:t.img}})])],1)],1)}),1)],1)],1)},Xt=[],Yt=["https://via.placeholder.com/300x200","https://via.placeholder.com/300x200","https://via.placeholder.com/300x200"],Zt=Yt.map(function(t){return{url:"javascript:",img:t}}),Kt={name:"Slide",components:{},data:function(){return{demo1_list:Zt,index:0}},methods:{changeSlide:function(t){this.index=t>=0&&t<this.demo1_list.length?t:this.index}}},te=Kt,ee=(n("3710"),Object(y["a"])(te,Ht,Xt,!1,null,"45b58456",null));ee.options.__file="Slide.vue";var ne=ee.exports,ae=n("e2ba"),oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[n("span",{staticClass:"text"},[t._v(t._s(t.msg))]),n("span",{staticClass:"more",on:{click:function(e){t.$store.commit("openDrawerPage",{type:"game-list",name:t.msg,category:t.type})}}},[t._v("\n      更多\n      >\n    ")])])])},re=[],ie={name:"Subject",props:["msg","type"]},se=ie,ce=(n("cea5"),Object(y["a"])(se,oe,re,!1,null,"163950d1",null));ce.options.__file="Subject.vue";var le=ce.exports,ue=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-grid"},[n("v-touch",{on:{swipeleft:function(e){t.changeSlide(t.index+1)},swiperight:function(e){t.changeSlide(t.index-1)}}},[t.gameList.length?n("Carousel",{attrs:{dots:"outside",arrow:"never"},model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},t._l(t.gameList,function(e,a){return n("CarouselItem",{key:a,staticClass:"carouse-item"},[n("Row",t._l(e,function(t,e){return n("game-box",{key:e,attrs:{name:t.name,isFavorite:t.isFavorite,img:t.img}})}),1)],1)}),1):n("Spin")],1)],1)},me=[],pe=n("f499"),de=n.n(pe),fe={name:"GameGrid",props:["type"],components:{GameBox:rt["a"]},data:function(){return{gameList:[],index:0}},methods:{changeSlide:function(t){this.index=t>=0&&t<this.gameList.length?t:this.index}},mounted:function(){var t=this,e="NynTtqEAr";"hot"===this.type&&(e="4JUPPpc1L"),this.axios.get("https://next.json-generator.com/api/json/get/"+e).then(function(e){var n=e.ReturnObject;sessionStorage.setItem("GameList_"+t.type,de()(n));for(var a=[],o=6,r=0;r<n.length;r+=o){var i=n.slice(r,r+o);a.push(i)}t.gameList=[].concat(a)})}},ge=fe,he=(n("e867"),Object(y["a"])(ge,ue,me,!1,null,"7e0745c8",null));he.options.__file="GameGrid.vue";var ve=he.exports,be=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"outer"},[n("h1",[t._v(t._s(t.title))]),n("div",{staticClass:"scroll"},[n("div",{staticClass:"box"},t._l(t.asyncCount,function(e,a){return n("div",{key:a,staticClass:"box-item"},[n("img",{attrs:{src:"https://via.placeholder.com/70x70"}}),n("br"),n("span",[t._v(t._s(e.name))])])}),0)])])},ye=[],_e={name:"Category",props:["title"],components:{},data:function(){return{asyncCount:[{name:"麵包",icon:"birthday-cake"},{name:"蛋糕",icon:"gamepad"},{name:"禮盒",icon:"money-bill-alt"},{name:"餐盒",icon:"gift"},{name:"點心",icon:"gift"},{name:"茶會",icon:"gift"}]}}},we=_e,xe=(n("2b78"),Object(y["a"])(we,be,ye,!1,null,"126045b6",null));xe.options.__file="Category.vue";var je=xe.exports,ke={name:"home",components:{HeaderTitle:Jt["a"],Announcement:Vt["a"],Slide:ne,GameType:ae["a"],Subject:le,GameGrid:ve,Category:je}},Oe=ke,Ce=Object(y["a"])(Oe,Wt,Qt,!1,null,null,null);Ce.options.__file="Home.vue";var Se=Ce.exports,$e=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"account"},[n("h1",[t._v("Account Info")]),n("p",[n("label",[t._v("User:")]),t._v("\n    "+t._s(t.user)+"\n  ")]),n("Select",{on:{"on-change":function(e){t.changeLanguage()}},model:{value:t.$i18n.locale,callback:function(e){t.$set(t.$i18n,"locale",e)},expression:"$i18n.locale"}},t._l(t.languages,function(e,a){return n("Option",{key:a,attrs:{value:e.locale}},[t._v(t._s(e.name))])}),1)],1)},Le=[],Pe=(n("7514"),n("a925"));a["default"].use(Pe["a"]);var Fe=new Pe["a"]({locale:"zh-TW",fallbackLocale:"zh-TW"}),Ie=[{locale:"en-US",name:"English",api:"https://next.json-generator.com/api/json/get/VkzYRLKxU"},{locale:"zh-TW",name:"繁體中文",api:"https://next.json-generator.com/api/json/get/V1UCCUYlU"}];function Ee(t,e){var n=Fe.locale,a=t.state.i18n.message[n];if(Fe.setLocaleMessage(n,a),!a){var o=(Ie.find(function(t){return t.locale===n})||Ie[0]).api;e.get(o).then(function(e){var a=e.data.ReturnObject;Fe.setLocaleMessage(n,a.message),t.commit("updateLocale",{locale:Fe.locale,version:a.version,message:a.message})},function(t){alert(t)})}}var Te=Fe,De=Ie,Re=Ee,Be={name:"account",data:function(){return{user:this.$store.state.login.user,languages:De}},methods:{changeLanguage:function(){Re(this.$store,this.axios)}}},Me=Be,Ge=Object(y["a"])(Me,$e,Le,!1,null,null,null);Ge.options.__file="Account.vue";var ze=Ge.exports,Ae=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ue=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notfound"},[n("h1",[t._v("Page Not Found!!!")])])}],Ne={},qe=Object(y["a"])(Ne,Ae,Ue,!1,null,null,null);qe.options.__file="NotFound.vue";var We=qe.exports,Qe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{directives:[{name:"touch",rawName:"v-touch:touchstart",value:t.downFunc,expression:"downFunc",arg:"touchstart"},{name:"touch",rawName:"v-touch:touchmove",value:t.moveFunc,expression:"moveFunc",arg:"touchmove"},{name:"touch",rawName:"v-touch:touchend",value:t.endFunc,expression:"endFunc",arg:"touchend"}]},[t._t("default")],2)},Je=[],Ve={name:"SlideOptimizing",props:["pageLength"],data:function(t){return{currentPageIndex:0,slideTouchPoint:0,slidePercent:0,clientWidth:0,changePageCriticality:40,tabsArr:["page1","page2","page3","page4"]}},methods:{downFunc:function(t){this.slideTouchPoint=t.touches[0].clientX},moveFunc:function(t){var e=t.touches[0].clientX,n=e-this.slideTouchPoint;this.slidePercent=n/this.clientWidth*100;var a=-100*this.currentPageIndex,o=a+this.slidePercent,r=150;this._animateSlide(o,r)},endFunc:function(){this._slideReset();var t=-100*this.currentPageIndex,e=500;this._animateSlide(t,e)},_animateSlide:function(t,e){var n=document.getElementsByClassName("ivu-tabs-content")[0];window.requestAnimationFrame(function(){n.style.transition="".concat(e,"ms"),n.style.transform="translate3d(".concat(t,"%,0,0)")})},_slideReset:function(){var t=this.slidePercent,e=this.changePageCriticality,n=t<-e,a=t>e;n&&(this.currentPageIndex=this.currentPageIndex+1),a&&(this.currentPageIndex=this.currentPageIndex-1);var o=this.currentPageIndex<0,r=this.currentPageIndex>this.pageLength-1;o&&(this.currentPageIndex=0),r&&(this.currentPageIndex=this.pageLength-1),this.slidePercent=0}},mounted:function(){this.clientWidth=this.$el.clientWidth}},He=Ve,Xe=(n("a10b"),Object(y["a"])(He,Qe,Je,!1,null,"6b9fa96e",null));Xe.options.__file="SlideOptimizing.vue";var Ye=Xe.exports;a["default"].use(qt["a"]);var Ze=new qt["a"]({mode:"history",base:"/portal-mobile/",routes:[{path:"/",name:"home",component:Se},{path:"/wallet",name:"wallet",component:function(){return n.e("wallet").then(n.bind(null,"4dd7"))}},{path:"/promotion",name:"promotion",component:function(){return n.e("promotion").then(n.bind(null,"bc7c"))}},{path:"/account",name:"account",component:ze,meta:{}},{path:"/lobby",name:"lobby",component:function(){return n.e("lobby").then(n.bind(null,"417e"))}},{path:"/slide",name:"SlideOptimizing",component:Ye},{path:"*",name:"notfound",component:We}]}),Ke=function(t){return Ze.beforeEach(function(e,n,a){var o=e.meta.requiredLogin||!1,r=o&&!t.state.login.loginStatus;r?(t.commit("openDrawerPage",{type:"login"}),t.commit("recordDestinationPage",e.path)):a()}),Ze},tn=n("56dd"),en=n("ca95");en.registerCustomEvent("doubletap",{type:"tap",taps:2}),a["default"].config.productionTip=!1,a["default"].use(en,{name:"v-touch"}),a["default"].use(tn),en.config.swipe={direction:"horizontal"};var nn=n("e069"),an=n.n(nn);n("cd22");a["default"].use(an.a);var on=n("ecee"),rn=n("b702"),sn=n("ad3d");on["c"].add(rn["a"]),a["default"].component("font-awesome-icon",sn["a"]);var cn=n("c074");on["c"].add(cn["a"]),a["default"].component("font-awesome-icon",sn["a"]),a["default"].config.productionTip=!1;var ln=Ke(Nt),un=It(ln);new a["default"]({router:ln,store:Nt,i18n:Te,created:function(){Re(Nt,un)},render:function(t){return t(_t)}}).$mount("#app")},cea5:function(t,e,n){"use strict";var a=n("9ee1"),o=n.n(a);o.a},daf7:function(t,e,n){},db4b:function(t,e,n){},e2ba:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Affix",{attrs:{"offset-top":0}},[n("div",{staticClass:"scroll"},[n("div",{staticClass:"row",style:{width:t.rowWidth+"px"}},t._l(t.items,function(e,a){return n("div",{key:a,staticClass:"item",class:{"un-select":!!t.gameType&&t.gameType!=e.type},style:{width:t.itemWidth+"px"},attrs:{span:5}},[n("a",{attrs:{href:"lobby?gameType="+e.type}},[n("font-awesome-icon",{staticClass:"icon fa-3x fa-fw",attrs:{icon:e.icon}}),n("br"),n("span",[t._v(t._s(e.name))])],1)])}),0)])])],1)},o=[],r={name:"GameType",components:{},data:function(){return{items:[],rowWidth:null,itemWidth:null,gameType:""}},mounted:function(){var t=this;this.gameType=this.$route.query.gameType,this.itemWidth=screen.width/4,this.axios.get("https://next.json-generator.com/api/json/get/Ek2ac14xU").then(function(e){t.items=e.ReturnObject,t.rowWidth=t.itemWidth*t.items.length})}},i=r,s=(n("5a9e"),n("2877")),c=Object(s["a"])(i,a,o,!1,null,"57e99374",null);c.options.__file="GameType.vue";e["a"]=c.exports},e867:function(t,e,n){"use strict";var a=n("daf7"),o=n.n(a);o.a},ef4b:function(t,e,n){"use strict";var a=n("db4b"),o=n.n(a);o.a},f635:function(t,e,n){},fe3b:function(t,e,n){"use strict";var a=n("9e55"),o=n.n(a);o.a}});
//# sourceMappingURL=app.106e771a.js.map