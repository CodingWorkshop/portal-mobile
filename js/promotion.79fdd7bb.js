(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promotion"],{"21be":function(t,e,n){"use strict";var a=n("7130"),o=n.n(a);o.a},7130:function(t,e,n){},bc7c:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"all"},[n("h1",[t._v("優惠活動")]),n("div",{staticClass:"cell-group"},[n("CellGroup",[n("cell",{staticClass:"cell",attrs:{title:"站長推薦",to:"/components/button",target:"_blank",label:"優惠辦理大廳站"}})],1)],1),n("Select",{staticClass:"select",model:{value:t.promotion,callback:function(e){t.promotion=e},expression:"promotion"}},t._l(t.list,function(e,a){return n("Option",{key:a,attrs:{value:e.value}},[t._v(t._s(e.label))])}),1),n("div",t._l(t.list[this.promotion].promot,function(t,e){return n("img",{key:e,attrs:{src:t}})}),0)],1)},o=[],i=n("d225"),c=n("b0b4"),s=n("308d"),l=n("6bb5"),r=n("4e2b"),u=n("9ab4"),b=n("60a3"),p=(n("cadf"),n("551c"),n("097d"),function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.promotion=0,t.list=[{label:"所有優惠",value:0,promot:[]}],t}return Object(r["a"])(e,t),Object(c["a"])(e,[{key:"mounted",value:function(){var t=this;this.axios.get("https://next.json-generator.com/api/json/get/41s54pKJU").then(function(e){t.list=e.ReturnObject})}}]),e}(b["c"]));p=u["a"]([b["a"]],p);var v=p,f=function(t){function e(){return Object(i["a"])(this,e),Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(r["a"])(e,t),Object(c["a"])(e,[{key:"created",value:function(){}}]),e}(Object(b["b"])(v));f=u["a"]([b["a"]],f);var j=f,m=j,d=(n("21be"),n("2877")),h=Object(d["a"])(m,a,o,!1,null,"50a6aed0",null);h.options.__file="Promotion.vue";e["default"]=h.exports}}]);
//# sourceMappingURL=promotion.79fdd7bb.js.map