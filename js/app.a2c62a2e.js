(function(e){function t(t){for(var a,o,i=t[0],c=t[1],l=t[2],u=0,m=[];u<i.length;u++)o=i[u],r[o]&&m.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r={app:0},s=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"efbd7c9a","chunk-09c4ded6":"7ec8b913","chunk-176bc395":"1bcb5b00"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,"chunk-09c4ded6":1,"chunk-176bc395":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"6cc656a7","chunk-09c4ded6":"3291b0a2","chunk-176bc395":"49d7a741"}[e]+".css",r=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){l=m[i],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.request=a,delete o[e],p.parentNode.removeChild(p),n(s)},p.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){o[e]=0}));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e),l=function(t){u.onerror=u.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");s.type=a,s.request=o,n[1](s)}r[e]=void 0}};var m=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/portal-mobile/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0414":function(e,t,n){"use strict";var a=n("861a"),o=n.n(a);o.a},"052c":function(e,t,n){"use strict";var a=n("7659"),o=n.n(a);o.a},"0e13":function(e,t,n){},"171e":function(e,t,n){"use strict";var a=n("8a18"),o=n.n(a);o.a},"1ede":function(e,t,n){},"2b78":function(e,t,n){"use strict";var a=n("c8ea"),o=n.n(a);o.a},"2eef":function(e,t,n){"use strict";var a=n("4569"),o=n.n(a);o.a},3710:function(e,t,n){"use strict";var a=n("a328"),o=n.n(a);o.a},4569:function(e,t,n){},4687:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"row"},[n("i-col",{staticClass:"logo",attrs:{span:"6"}},[n("img",{attrs:{alt:"Cake logo",src:"https://via.placeholder.com/120x50"}})]),n("i-col",{staticClass:"icons",attrs:{span:"18"}},[n("Button",{attrs:{type:"text"},on:{click:function(t){e.$store.commit("openDrawerPage",{type:"search"})}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"search"}})],1),n("Button",{attrs:{type:"text"}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"heart"},on:{click:function(t){e.$store.commit("openDrawerPage",{type:"favorite"})}}})],1)],1)],1)},o=[],r=(n("cadf"),n("551c"),n("097d"),{name:"HeaderTitle",components:{}}),s=r,i=(n("0414"),n("2877")),c=Object(i["a"])(s,a,o,!1,null,"07d71201",null);c.options.__file="HeaderTitle.vue";t["a"]=c.exports},4727:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"announcement"},[n("font-awesome-icon",{staticClass:"fa-2x icon",attrs:{icon:"bullhorn"}}),n("div",{staticClass:"marquee"},[n("div",{staticClass:"news"},e._l(e.asyncCount,function(t){return n("span",{key:t},[e._v("即日起 任何品項的【"+e._s(t)+"】通通88折起")])}),0)])],1)},o=[],r={name:"Announcement",components:{},mounted:function(){this.asyncCount=["麵包"]},data:function(){return{asyncCount:"麵包"}}},s=r,i=(n("fe3b"),n("2877")),c=Object(i["a"])(s,a,o,!1,null,"2d9d314a",null);c.options.__file="Announcement.vue";t["a"]=c.exports},"4bc1":function(e,t,n){},"53fa":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-col",{attrs:{span:8}},[n("div",[n("img",{staticClass:"game-img",attrs:{src:e.img},on:{click:function(t){e.$store.commit("openDrawerPage",{type:"game-detail",name:e.name,gameId:e.name})}}}),n("Row",{staticClass:"text-area",attrs:{type:"flex",justify:"space-around"}},[n("i-col",{staticClass:"text",attrs:{span:12}},[e._v(e._s(e.name))]),n("i-col",{staticClass:"icon",attrs:{span:12}},[n("font-awesome-icon",{attrs:{icon:[e.isFavorite?"far":"fas","heart"]}})],1)],1)],1)])},o=[],r={name:"GameBox",props:{name:String,img:String,isFavorite:Boolean}},s=r,i=(n("2eef"),n("2877")),c=Object(i["a"])(s,a,o,!1,null,"6a68d138",null);c.options.__file="GameBox.vue";t["a"]=c.exports},"5a9e":function(e,t,n){"use strict";var a=n("4bc1"),o=n.n(a);o.a},"5c48":function(e,t,n){},7659:function(e,t,n){},"7c55":function(e,t,n){"use strict";var a=n("5c48"),o=n.n(a);o.a},"847a":function(e,t,n){"use strict";var a=n("0e13"),o=n.n(a);o.a},"861a":function(e,t,n){},8975:function(e,t,n){"use strict";var a=n("1ede"),o=n.n(a);o.a},"8a0f":function(e,t,n){"use strict";var a=n("a510"),o=n.n(a);o.a},"8a18":function(e,t,n){},9112:function(e,t,n){},"9e55":function(e,t,n){},"9ee1":function(e,t,n){},a328:function(e,t,n){},a510:function(e,t,n){},b2be:function(e,t,n){"use strict";var a=n("9112"),o=n.n(a);o.a},c8ea:function(e,t,n){},cd22:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("footer-button"),n("multi-drawer"),e.loading?n("Spin",{attrs:{fix:"",size:"large"}}):e._e()],1)},r=[],s=n("a4bb"),i=n.n(s),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"tab",attrs:{type:"flex",justify:"space-around"}},[n("i-col",{attrs:{span:"4"}},[n("Button",{staticClass:"btn",attrs:{type:"text",to:"/",long:""},on:{click:function(t){e.scrollTop()}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"gamepad"}}),n("div",[e._v(e._s(e.$t("commodity")))])],1)],1),n("i-col",{attrs:{span:"4"}},[n("Button",{staticClass:"btn",attrs:{type:"text",to:"/wallet",long:""}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"money-bill-alt"}}),n("div",[e._v(e._s(e.$t("financial")))])],1)],1),n("i-col",{attrs:{span:"4"}},[n("Button",{staticClass:"btn",attrs:{type:"text",long:""},on:{click:function(t){e.$store.commit("openDrawerPage",{type:"login"})}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"phone-volume"}}),n("div",[e._v(e._s(e.$t("login")))])],1)],1),n("i-col",{attrs:{span:"4"}},[n("Button",{staticClass:"btn",attrs:{type:"text",to:"/promotion",long:""}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"gift"}}),n("div",[e._v(e._s(e.$t("promotion")))])],1)],1),n("i-col",{attrs:{span:"4"}},[n("Button",{staticClass:"btn",attrs:{type:"text",to:"/account",long:""}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"user"}}),n("div",[e._v(e._s(e.$t("info")))])],1)],1)],1)},l=[],u={name:"FooterButton",components:{},methods:{scrollTop:function(){var e=document.documentElement,t=setInterval(n,2);function n(){0===e.scrollTop?clearInterval(t):e.scrollTop=e.scrollTop-10}}}},m=u,p=(n("171e"),n("2877")),d=Object(p["a"])(m,c,l,!1,null,"fd297714",null);d.options.__file="FooterButton.vue";var g=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.pageList,function(t){return n("Drawer",{key:t.type,style:{zIndex:1e3+t.zIndex,position:"relative"},attrs:{closable:!1,width:"100"},on:{"on-close":function(n){e.close(t.type)}},model:{value:t.open,callback:function(n){e.$set(t,"open",n)},expression:"list.open"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("v-touch",{on:{swiperight:function(n){e.$store.commit("closeDrawerPage",t.type)}}},[n("h1",[n("Button",{attrs:{type:"text"},on:{click:function(n){e.$store.commit("closeDrawerPage",t.type)}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"angle-left"}})],1),e._v("\n          "+e._s(t.name)+"\n        ")],1)])],1),n("v-touch",{attrs:{tag:"body","swipe-options":{threshold:180}},on:{swiperight:function(n){e.$store.commit("closeDrawerPage",t.type)}}},[n("drawer-"+t.type,{tag:"component"})],1)],1)}),1)},h=[],v=n("cebc"),b=n("2f62"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search"},[n("i-input",{attrs:{placeholder:"請輸入遊戲名稱",size:"large"}},[n("font-awesome-icon",{staticClass:"fa-2x icon",attrs:{slot:"prefix",icon:"search"},slot:"prefix"})],1),n("h3",[e._v("熱門搜尋")]),e._l(e.hotSearch,function(t){return n("Tag",{key:t.index,attrs:{color:"magenta"}},[e._v(e._s(t.name))])})],2)},_=[],w={name:"DrawerSearch",components:{},data:function(){return{hotSearch:[]}},mounted:function(){var e=this;this.axios.get("https://next.json-generator.com/api/json/get/EJshu2xCr").then(function(t){console.log(t),e.hotSearch=t.ReturnObject},function(){console.log("fail")})}},x=w,k=(n("ef4b"),Object(p["a"])(x,y,_,!1,null,"36cda9da",null));k.options.__file="Search.vue";var C=k.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("我的最愛")]),n("Button",{attrs:{type:"primary"},on:{click:function(t){e.$store.commit("openDrawerPage",{type:"game-list"})}}},[e._v("到遊戲逛逛")])],1)},F=[],S={name:"DrawerFavorite",components:{},data:function(){return{}}},j=S,L=(n("8a0f"),Object(p["a"])(j,$,F,!1,null,"08d1d2e6",null));L.options.__file="Favorite.vue";var O=L.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$store.state.login.loginStatus?n("div",[n("h1",[e._v("安安 "+e._s(e.$store.state.login.user))]),n("Button",{attrs:{type:"primary"},on:{click:function(t){e.logOut()}}},[e._v("登出")])],1):n("tabs",{model:{value:e.key,callback:function(t){e.key=t},expression:"key"}},[n("tab-pane",{attrs:{label:"會員登入",name:"login"}},[n("v-touch",{attrs:{tag:"body"},on:{swipeleft:function(t){e.key="register"}}},[n("font-awesome-icon",{staticClass:"fa-10x login-icon",attrs:{icon:"user-circle"}}),n("Form",{ref:"loginForm",attrs:{model:e.loginForm,rules:e.loginRuleValidate},nativeOn:{submit:function(t){t.preventDefault(),e.loginSubmit("loginForm")}}},[n("FormItem",{attrs:{prop:"user"}},[n("i-input",{attrs:{placeholder:"帳號",clearable:""},model:{value:e.loginForm.user,callback:function(t){e.$set(e.loginForm,"user",t)},expression:"loginForm.user"}})],1),n("FormItem",{attrs:{prop:"password"}},[n("i-input",{attrs:{type:"password",placeholder:"密碼",clearable:""},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),n("FormItem",{attrs:{prop:"code"}},[n("i-input",{attrs:{placeholder:"驗證碼",clearable:""},model:{value:e.loginForm.code,callback:function(t){e.$set(e.loginForm,"code",t)},expression:"loginForm.code"}})],1),n("FormItem",[n("Button",{attrs:{"html-type":"submit",type:"primary",disabled:e.$store.state.login.signing,long:""}},[e._v("\n              "+e._s(e.$store.state.login.signing?"登入中...":"登入")+"\n            ")])],1),n("FormItem",[n("Button",{attrs:{type:"info",long:""}},[e._v("忘記密碼?")])],1)],1)],1)],1),n("tab-pane",{attrs:{label:"立即註冊",name:"register"}},[n("v-touch",{attrs:{tag:"body"},on:{swiperight:function(t){e.key="login"}}},[n("Form",{ref:"registerForm",attrs:{model:e.registerForm,rules:e.registerRuleValidate},nativeOn:{submit:function(t){return t.preventDefault(),e.registerSubmit(t)}}},[n("FormItem",{attrs:{prop:"Referrer"}},[n("i-input",{attrs:{placeholder:"推薦人",clearable:""},model:{value:e.registerForm.referrer,callback:function(t){e.$set(e.registerForm,"referrer",t)},expression:"registerForm.referrer"}})],1),n("FormItem",{attrs:{prop:"user"}},[n("i-input",{attrs:{placeholder:"會員帳號 需字母開頭 限數字和底線",clearable:""},model:{value:e.registerForm.user,callback:function(t){e.$set(e.registerForm,"user",t)},expression:"registerForm.user"}})],1),n("FormItem",{attrs:{prop:"password"}},[n("i-input",{attrs:{type:"password",placeholder:"會員密碼",clearable:""},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}})],1),n("FormItem",{attrs:{prop:"checkPsd"}},[n("i-input",{attrs:{type:"password",placeholder:"確認密碼",clearable:""},model:{value:e.registerForm.checkPsd,callback:function(t){e.$set(e.registerForm,"checkPsd",t)},expression:"registerForm.checkPsd"}})],1),n("FormItem",{attrs:{prop:"withdrawalPsd"}},[n("i-input",{attrs:{placeholder:"取款密碼",clearable:""},model:{value:e.registerForm.withdrawalPsd,callback:function(t){e.$set(e.registerForm,"withdrawalPsd",t)},expression:"registerForm.withdrawalPsd"}})],1),n("FormItem",{attrs:{prop:"realName"}},[n("i-input",{attrs:{placeholder:"真實姓名 需與提款銀行戶口相同",clearable:""},model:{value:e.registerForm.realName,callback:function(t){e.$set(e.registerForm,"realName",t)},expression:"registerForm.realName"}})],1),n("FormItem",{attrs:{prop:"code"}},[n("i-input",{attrs:{placeholder:"驗證碼",clearable:""},model:{value:e.registerForm.code,callback:function(t){e.$set(e.registerForm,"code",t)},expression:"registerForm.code"}})],1),n("FormItem",[n("Button",{attrs:{"html-type":"submit",type:"primary",long:""}},[e._v("送出")])],1)],1)],1)],1)],1)],1)},T=[],I=(n("7f7f"),{name:"DrawerLogin",components:{},data:function(){return{key:"login",loginForm:{user:"",password:"",code:""},registerForm:{referrer:"",user:"",password:"",checkPsd:"",withdrawalPsd:"",realName:"",code:""},registerRuleValidate:{referrer:[{required:!0,type:"string",message:"The referrer cannot be empty",trigger:"blur"}],user:[{required:!0,type:"string",message:"The user cannot be empty",trigger:"blur"}],password:[{required:!0,type:"string",message:"The password cannot be empty",trigger:"blur"}],checkPsd:[{required:!0,type:"string",message:"The check password cannot be empty",trigger:"blur"}],withdrawalPsd:[{required:!0,type:"integer",message:"The withdrawal password name cannot be empty",trigger:"blur"}],realName:[{required:!0,type:"string",message:"The real name cannot be empty",trigger:"blur"}],code:[{required:!0,type:"integer",message:"The code cannot be empty",trigger:"blur"}]},loginRuleValidate:{user:[{required:!0,message:"The user cannot be empty",trigger:"blur"}],password:[{required:!0,message:"The password cannot be empty",trigger:"blur"}],code:[{type:"string",required:!0,message:"The code cannot be empty",trigger:"blur"}]}}},methods:{loginSubmit:function(e){var t=this;this.$store.commit("updateSigning"),this.$refs[e].validate(function(e){e?t.axios.post("/api/json/get/V1lUCe3gL",{Account:t.loginForm.user,Password:t.loginForm.password}).then(function(e){var n=e.ReturnObject;t.$store.dispatch("updateLogin",{user:t.loginForm.user,token:n}),t.$Message.success("登入成功!");var a=t.$store.state.login.destinationPage;a&&(t.$router.push(a),t.$store.commit("recordDestinationPage",""),t.$store.commit("closeDrawerPage","login")),t.$store.commit("updateSigning")},function(){t.$Message.error("帳號密碼錯誤!"),t.$store.commit("updateSigning")}):t.$store.commit("updateSigning")})},registerSubmit:function(){},logOut:function(){this.$store.dispatch("submitLogout"),this.loginForm={user:"",password:"",code:""},this.$Message.success("登出成功!")}}}),D=I,E=(n("8975"),Object(p["a"])(D,P,T,!1,null,"30dfdab4",null));E.options.__file="Login.vue";var B=E.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game-detail"},[n("img",{attrs:{src:"https://via.placeholder.com/140x140"}}),e.loginStatus?n("Button",{attrs:{type:"primary",long:""}},[e._v("進入遊戲")]):n("Button",{attrs:{type:"primary",long:""},on:{click:function(t){e.$store.commit("openDrawerPage",{type:"login"})}}},[e._v("登入註冊")]),n("ul",[n("li",[n("font-awesome-icon",{staticClass:"fa-2x icon",attrs:{icon:"gamepad"}}),n("p",[e._v("電子大廳")])],1),n("li",[n("font-awesome-icon",{staticClass:"fa-2x icon",attrs:{icon:["fas","heart"]}}),n("p",[e._v("加入最愛")])],1),e.loginStatus?e._e():n("li",[n("font-awesome-icon",{staticClass:"fa-2x icon",attrs:{icon:"child"}}),n("p",[e._v("我要試玩")])],1)])],1)},R=[],q={name:"DrawerGameDetail",components:{},data:function(){return{}},computed:Object(v["a"])({},Object(b["b"])({gameId:function(e){return e.drawer.gameId},loginStatus:function(e){return e.login.loginStatus}})),mounted:function(){console.log(this.gameId)}},z=q,N=(n("847a"),Object(p["a"])(z,G,R,!1,null,"7b6d15a3",null));N.options.__file="GameDetail.vue";var U=N.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Row",e._l(e.getList,function(e,t){return n("game-box",{key:t,attrs:{name:e.name,isFavorite:e.isFavorite,img:e.img}})}),1)],1)},A=[],W=n("53fa"),V={name:"DrawerGameList",components:{GameBox:W["a"]},data:function(){return{list:[]}},computed:Object(v["a"])({},Object(b["b"])({gameListCatrgory:function(e){return e.drawer.gameListCatrgory},getList:function(){return JSON.parse(sessionStorage.getItem("GameList_"+this.gameListCatrgory))}}))},J=V,H=(n("052c"),Object(p["a"])(J,M,A,!1,null,"23992b2a",null));H.options.__file="GameList.vue";var Y=H.exports,K={name:"MultiDrawer",components:{DrawerSearch:C,DrawerFavorite:O,DrawerLogin:B,DrawerGameDetail:U,DrawerGameList:Y},data:function(){return{}},computed:Object(v["a"])({},Object(b["b"])({pageList:function(e){return e.drawer.pageList}})),methods:{close:function(e){this.$store.commit("closeDrawerPage",e)}}},Q=K,X=(n("b2be"),Object(p["a"])(Q,f,h,!1,null,"149b1330",null));X.options.__file="MultiDrawer.vue";var Z=X.exports,ee={name:"app",components:{FooterButton:g,MultiDrawer:Z},computed:{loading:function(){return 0===i()(this.$i18n.getLocaleMessage(this.$i18n.locale)).length}}},te=ee,ne=(n("7c55"),Object(p["a"])(te,o,r,!1,null,null,null));ne.options.__file="App.vue";var ae=ne.exports,oe=n("bc3a"),re=n.n(oe),se=n("a7fe"),ie=n.n(se),ce=function(){var e=re.a.create({baseURL:"https://next.json-generator.com"});return a["default"].use(ie.a,e),e},le=n("0e44"),ue=n("795b"),me=n.n(ue),pe={state:{signing:!1,loginStatus:!1,user:"",meidon:"",destinationPage:"",token:""},getters:{},mutations:{updateSigning:function(e){e.signing=!e.signing},updateLoginStatus:function(e){e.loginStatus=!e.loginStatus},updateUser:function(e,t){e.user=t.user},recordDestinationPage:function(e,t){e.destinationPage=t},updateToken:function(e,t){e.token=t.token}},actions:{checkLogin:function(e){return new me.a(function(t){setTimeout(function(){e.commit("updateSigning"),t()},2e3)})},submitLogin:function(e,t){return e.dispatch("checkLogin").then(function(){e.commit("updateLoginStatus"),e.commit("updateUser",t)})},submitLogout:function(e){e.commit("updateLoginStatus"),e.commit("updateUser",{user:""}),e.commit("updateToken",{token:""})},updateLogin:function(e,t){e.commit("updateLoginStatus"),e.commit("updateUser",{user:t.user}),e.commit("updateToken",{token:t.token})}}},de=["搜尋","收藏夾","登入註冊","遊戲","遊戲列表"],ge={state:{zIndexCounter:0,pageList:["search","favorite","login","game-detail","game-list"].map(function(e,t){return{name:de[t],type:e,open:!1,zIndex:0}}),gameListCatrgory:"",gameId:""},mutations:{openDrawerPage:function(e,t){e.gameId=t.gameId?t.gameId:e.gameId,e.gameListCatrgory=t.category?t.category:e.gameListCatrgory,e.pageList.some(function(n){if(n.type===t.type)return e.zIndexCounter++,n.zIndex=e.zIndexCounter,n.open=!0,n.name=t.name?t.name:n.name,!0})},closeDrawerPage:function(e,t){e.pageList.some(function(e){if(e.type===t)return e.open=!1,!0})}},actions:{}},fe={state:{version:{},message:{}},getters:{},mutations:{updateLocale:function(e,t){a["default"].set(e.version,t.locale,t.version),a["default"].set(e.message,t.locale,t.message)}},actions:{}};a["default"].use(b["a"]);var he=new b["a"].Store({modules:{login:pe,drawer:ge,i18n:fe},plugins:[Object(le["a"])({storage:{getItem:function(e){return localStorage.getItem(e)},setItem:function(e,t){return localStorage.setItem(e,t)},removeItem:function(e){return localStorage.removeItem(e)}},paths:["login.loginStatus","login.user","login.token","i18n.version","i18n.message"]})]}),ve=n("8c4f"),be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("header-title"),n("announcement"),n("slide"),n("game-type"),n("subject",{attrs:{msg:"熱門蛋糕",type:"hot"}}),n("game-grid",{attrs:{type:"hot"}}),n("subject",{attrs:{msg:"新進蛋糕",type:"new"}}),n("game-grid",{attrs:{type:"new"}}),n("category",{attrs:{title:"奶油蛋糕"}}),n("category",{attrs:{title:"草莓蛋糕"}}),n("category",{attrs:{title:"香草蛋糕"}})],1)},ye=[],_e=n("4687"),we=n("4727"),xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-touch",{on:{swipeleft:function(t){e.changeSlide(e.index+1)},swiperight:function(t){e.changeSlide(e.index-1)}}},[n("Carousel",{attrs:{loop:"",autoplay:"",height:200},model:{value:e.index,callback:function(t){e.index=t},expression:"index"}},e._l(e.demo1_list,function(e,t){return n("CarouselItem",{key:t},[n("Row",[n("i-col",{attrs:{span:"24"}},[n("img",{staticClass:"demo-carousel",attrs:{src:e.img}})])],1)],1)}),1)],1)],1)},ke=[],Ce=["https://via.placeholder.com/300x200","https://via.placeholder.com/300x200","https://via.placeholder.com/300x200"],$e=Ce.map(function(e){return{url:"javascript:",img:e}}),Fe={name:"Slide",components:{},data:function(){return{demo1_list:$e,index:0}},methods:{changeSlide:function(e){this.index=e>=0&&e<this.demo1_list.length?e:this.index}}},Se=Fe,je=(n("3710"),Object(p["a"])(Se,xe,ke,!1,null,"45b58456",null));je.options.__file="Slide.vue";var Le=je.exports,Oe=n("e2ba"),Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[n("span",{staticClass:"text"},[e._v(e._s(e.msg))]),n("span",{staticClass:"more",on:{click:function(t){e.$store.commit("openDrawerPage",{type:"game-list",name:e.msg,category:e.type})}}},[e._v("\n      更多\n      >\n    ")])])])},Te=[],Ie={name:"Subject",props:["msg","type"]},De=Ie,Ee=(n("cea5"),Object(p["a"])(De,Pe,Te,!1,null,"163950d1",null));Ee.options.__file="Subject.vue";var Be=Ee.exports,Ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game-grid"},[n("v-touch",{on:{swipeleft:function(t){e.changeSlide(e.index+1)},swiperight:function(t){e.changeSlide(e.index-1)}}},[e.gameList.length?n("Carousel",{attrs:{dots:"outside",arrow:"never"},model:{value:e.index,callback:function(t){e.index=t},expression:"index"}},e._l(e.gameList,function(t,a){return n("CarouselItem",{key:a,staticClass:"carouse-item"},[n("Row",e._l(t,function(e,t){return n("game-box",{key:t,attrs:{name:e.name,isFavorite:e.isFavorite,img:e.img}})}),1)],1)}),1):n("Spin")],1)],1)},Re=[],qe=n("f499"),ze=n.n(qe),Ne={name:"GameGrid",props:["type"],components:{GameBox:W["a"]},data:function(){return{gameList:[],index:0}},methods:{changeSlide:function(e){this.index=e>=0&&e<this.gameList.length?e:this.index}},mounted:function(){var e=this,t="NynTtqEAr";"hot"===this.type&&(t="4JUPPpc1L"),this.axios.get("https://next.json-generator.com/api/json/get/"+t).then(function(t){var n=t.ReturnObject;sessionStorage.setItem("GameList_"+e.type,ze()(n));for(var a=[],o=6,r=0;r<n.length;r+=o){var s=n.slice(r,r+o);a.push(s)}e.gameList=[].concat(a)})}},Ue=Ne,Me=(n("e867"),Object(p["a"])(Ue,Ge,Re,!1,null,"7e0745c8",null));Me.options.__file="GameGrid.vue";var Ae=Me.exports,We=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"outer"},[n("h1",[e._v(e._s(e.title))]),n("div",{staticClass:"scroll"},[n("div",{staticClass:"box"},e._l(e.asyncCount,function(t,a){return n("div",{key:a,staticClass:"box-item"},[n("img",{attrs:{src:"https://via.placeholder.com/70x70"}}),n("br"),n("span",[e._v(e._s(t.name))])])}),0)])])},Ve=[],Je={name:"Category",props:["title"],components:{},data:function(){return{asyncCount:[{name:"麵包",icon:"birthday-cake"},{name:"蛋糕",icon:"gamepad"},{name:"禮盒",icon:"money-bill-alt"},{name:"餐盒",icon:"gift"},{name:"點心",icon:"gift"},{name:"茶會",icon:"gift"}]}}},He=Je,Ye=(n("2b78"),Object(p["a"])(He,We,Ve,!1,null,"126045b6",null));Ye.options.__file="Category.vue";var Ke=Ye.exports,Qe={name:"home",components:{HeaderTitle:_e["a"],Announcement:we["a"],Slide:Le,GameType:Oe["a"],Subject:Be,GameGrid:Ae,Category:Ke}},Xe=Qe,Ze=Object(p["a"])(Xe,be,ye,!1,null,null,null);Ze.options.__file="Home.vue";var et=Ze.exports,tt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"account"},[n("h1",[e._v("Account Info")]),n("p",[n("label",[e._v("User:")]),e._v("\n    "+e._s(e.user)+"\n  ")]),n("Select",{on:{"on-change":function(t){e.changeLanguage()}},model:{value:e.$i18n.locale,callback:function(t){e.$set(e.$i18n,"locale",t)},expression:"$i18n.locale"}},e._l(e.languages,function(t,a){return n("Option",{key:a,attrs:{value:t.locale}},[e._v(e._s(t.name))])}),1)],1)},nt=[],at=(n("7514"),n("a925"));a["default"].use(at["a"]);var ot=new at["a"]({locale:"zh-TW",fallbackLocale:"zh-TW"}),rt=[{locale:"en-US",name:"English",api:"https://next.json-generator.com/api/json/get/VkzYRLKxU"},{locale:"zh-TW",name:"繁體中文",api:"https://next.json-generator.com/api/json/get/V1UCCUYlU"}];function st(e,t){var n=ot.locale,a=e.state.i18n.message[n];if(ot.setLocaleMessage(n,a),!a){var o=rt.find(function(e){return e.locale===n}).api;t.get(o).then(function(t){var a=t.ReturnObject;ot.setLocaleMessage(n,a.message),e.commit("updateLocale",{locale:ot.locale,version:a.version,message:a.message})},function(e){alert(e)})}}var it=ot,ct=rt,lt=st,ut={name:"account",data:function(){return{user:this.$store.state.login.user,languages:ct}},methods:{changeLanguage:function(){lt(this.$store,this.axios)}}},mt=ut,pt=Object(p["a"])(mt,tt,nt,!1,null,null,null);pt.options.__file="Account.vue";var dt=pt.exports,gt=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ft=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notfound"},[n("h1",[e._v("Page Not Found!!!")])])}],ht={},vt=Object(p["a"])(ht,gt,ft,!1,null,null,null);vt.options.__file="NotFound.vue";var bt=vt.exports,yt=function(e,t){a["default"].use(ve["a"]);var o=new ve["a"]({mode:"history",base:"/portal-mobile/",routes:[{path:"/",name:"home",component:et},{path:"/wallet",name:"wallet",component:function(){return n.e("chunk-176bc395").then(n.bind(null,"4dd7"))}},{path:"/promotion",name:"promotion",component:function(){return n.e("about").then(n.bind(null,"bc7c"))}},{path:"/account",name:"account",component:dt,meta:{}},{path:"/lobby",name:"lobby",component:function(){return n.e("chunk-09c4ded6").then(n.bind(null,"417e"))}},{path:"*",name:"notfound",component:bt}]});return o.beforeEach(function(t,n,a){var o=t.meta.requiredLogin||!1;o&&!e.state.login.loginStatus?(e.commit("openDrawerPage",{type:"login"}),e.commit("recordDestinationPage",t.path)):a()}),t.interceptors.response.use(function(e){return e.data.IsSuccess?e.data:me.a.reject(e.data.ErrorMessage)},function(e){var t=[{status:401,msg:"Unauthorized",callback:function(){alert("閒置過久，請重新登入"),o.push("notfound")}},{status:404,msg:"Not Found",callback:function(){}},{status:500,msg:"Internal Server Error",callback:function(){alert("操作頻繁，請稍後嘗試")}}],n=t.filter(function(t){return t.status===e.response.status})[0]||{msg:e.response.statusText,callback:function(){}};return n.callback(),me.a.reject(n.msg)}),o},_t=n("ca95"),wt=n.n(_t),xt=function(){wt.a.registerCustomEvent("doubletap",{type:"tap",taps:2}),a["default"].config.productionTip=!1,a["default"].use(wt.a,{name:"v-touch"}),wt.a.config.swipe={direction:"horizontal"}},kt=n("e069"),Ct=n.n(kt);n("cd22");a["default"].use(Ct.a);var $t=n("ecee"),Ft=n("b702"),St=n("ad3d");$t["c"].add(Ft["a"]),a["default"].component("font-awesome-icon",St["a"]);var jt=n("c074");$t["c"].add(jt["a"]),a["default"].component("font-awesome-icon",St["a"]);var Lt=ce(),Ot=yt(he,Lt);xt(),new a["default"]({router:Ot,store:he,i18n:it,created:function(){lt(he,Lt)},render:function(e){return e(ae)}}).$mount("#app")},cea5:function(e,t,n){"use strict";var a=n("9ee1"),o=n.n(a);o.a},daf7:function(e,t,n){},db4b:function(e,t,n){},e2ba:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Affix",{attrs:{"offset-top":0}},[n("div",{staticClass:"scroll"},[n("div",{staticClass:"row",style:{width:e.rowWidth+"px"}},e._l(e.items,function(t,a){return n("div",{key:a,staticClass:"item",class:{"un-select":!!e.gameType&&e.gameType!=t.type},style:{width:e.itemWidth+"px"},attrs:{span:5}},[n("a",{attrs:{href:"lobby?gameType="+t.type}},[n("font-awesome-icon",{staticClass:"icon fa-3x fa-fw",attrs:{icon:t.icon}}),n("br"),n("span",[e._v(e._s(t.name))])],1)])}),0)])])],1)},o=[],r={name:"GameType",components:{},data:function(){return{items:[],rowWidth:null,itemWidth:null,gameType:""}},mounted:function(){var e=this;this.gameType=this.$route.query.gameType,this.itemWidth=screen.width/4,this.axios.get("https://next.json-generator.com/api/json/get/Ek2ac14xU").then(function(t){e.items=t.ReturnObject,e.rowWidth=e.itemWidth*e.items.length})}},s=r,i=(n("5a9e"),n("2877")),c=Object(i["a"])(s,a,o,!1,null,"57e99374",null);c.options.__file="GameType.vue";t["a"]=c.exports},e867:function(e,t,n){"use strict";var a=n("daf7"),o=n.n(a);o.a},ef4b:function(e,t,n){"use strict";var a=n("db4b"),o=n.n(a);o.a},fe3b:function(e,t,n){"use strict";var a=n("9e55"),o=n.n(a);o.a}});
//# sourceMappingURL=app.a2c62a2e.js.map