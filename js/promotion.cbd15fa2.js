(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promotion"],{"21be":function(t,e,a){"use strict";var n=a("a83d"),o=a.n(n);o.a},a83d:function(t,e,a){},bc7c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all"},[a("h1",[t._v("優惠活動")]),a("div",{staticClass:"cell-group"},[a("CellGroup",[a("cell",{staticClass:"cell",attrs:{title:"站長推薦",to:"/components/button",target:"_blank",label:"優惠辦理大廳站"}})],1)],1),a("Select",{staticClass:"select",model:{value:t.promotion,callback:function(e){t.promotion=e},expression:"promotion"}},t._l(t.list,function(e,n){return a("Option",{key:n,attrs:{value:e.value}},[t._v(t._s(e.label))])}),1),a("div",t._l(t.list[this.promotion].promot,function(t,e){return a("img",{key:e,attrs:{src:t}})}),0)],1)},o=[],i=a("d225"),c=a("b0b4"),s=a("308d"),l=a("6bb5"),r=a("4e2b"),u=a("9ab4"),b=a("60a3"),p=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.promotion=0,t.list=[{label:"所有優惠",value:0,promot:[]}],t}return Object(r["a"])(e,t),Object(c["a"])(e,[{key:"mounted",value:function(){var t=this;this.axios.get("https://next.json-generator.com/api/json/get/41s54pKJU").then(function(e){t.list=e.ReturnObject})}}]),e}(b["c"]);p=u["a"]([b["a"]],p);var v=p,f=function(t){function e(){return Object(i["a"])(this,e),Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(r["a"])(e,t),Object(c["a"])(e,[{key:"created",value:function(){}}]),e}(Object(b["b"])(v));f=u["a"]([b["a"]],f);var j=f,m=j,d=(a("21be"),a("2877")),h=Object(d["a"])(m,n,o,!1,null,"50a6aed0",null);h.options.__file="Promotion.vue";e["default"]=h.exports}}]);
//# sourceMappingURL=promotion.cbd15fa2.js.map