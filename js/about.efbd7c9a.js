(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"5f63":function(t,o,n){},8914:function(t,o,n){"use strict";var e=n("5f63"),l=n.n(e);l.a},bc7c:function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"all"},[n("h1",[t._v("優惠活動")]),n("div",{staticClass:"cell-group"},[n("CellGroup",[n("cell",{staticClass:"cell",attrs:{title:"站長推薦",to:"/components/button",target:"_blank",label:"優惠辦理大廳站"}})],1)],1),n("Select",{staticClass:"select",model:{value:t.promotion,callback:function(o){t.promotion=o},expression:"promotion"}},t._l(t.list,function(o,e){return n("Option",{key:e,attrs:{value:o.value}},[t._v(t._s(o.label))])}),1),n("div",t._l(t.list[this.promotion].promot,function(t,o){return n("img",{key:o,attrs:{src:t}})}),0)],1)},l=[],s={name:"promotion",methods:{},data:function(){return{promotion:0,list:[{label:"所有優惠",value:0,promot:[]}]}},mounted:function(){var t=this;this.axios.get("https://next.json-generator.com/api/json/get/41s54pKJU").then(function(o){t.list=o.ReturnObject})}},i=s,a=(n("8914"),n("2877")),r=Object(a["a"])(i,e,l,!1,null,"25781bc4",null);r.options.__file="Promotion.vue";o["default"]=r.exports}}]);
//# sourceMappingURL=about.efbd7c9a.js.map