webpackJsonp([2],{"2QDb":function(e,t){},FJQj:function(e,t,i){e.exports=i.p+"static/img/service2.cb9ffd1.jpg"},PwBN:function(e,t,i){e.exports=i.p+"static/img/service1.b3faff6.jpg"},R742:function(e,t,i){e.exports=i.p+"static/img/service3.af5de0b.jpg"},UW51:function(e,t,i){e.exports=i.p+"static/img/service4.d1fe54a.jpg"},X7sC:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("q4TV"),c={name:"Service",data:function(){return{serviceList:[{id:"section-1",title:"软件定制开发",eng_title:"Customize App",img:i("PwBN")},{id:"section-2",title:"IT外包服务",eng_title:"Outsourcing",img:i("FJQj")},{id:"section-3",title:"网上商城建设",eng_title:"eCommerce Site",img:i("R742")},{id:"section-4",title:"iOS应用定制开发",eng_title:"iOS App Dev",img:i("UW51")}]}},mounted:function(){console.log("aa"),(new s.WOW).init()},methods:{ServiceClick:function(e){this.$router.push({name:"servicedetail",params:{id:e}})}}},n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"Service"}},[e._m(0),e._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"Service-container row"},e._l(e.serviceList,function(t,s){return i("div",{key:s,staticClass:"Service-item col-xs-12 col-sm-6 col-md-3 wow slideInUp",on:{click:function(i){return e.ServiceClick(t.id)}}},[i("div",{staticClass:"Service-item-wrapper"},[i("div",{staticClass:"Service-item-top"},[i("h4",[e._v(e._s(t.title))]),e._v(" "),i("i"),e._v(" "),i("p",[e._v(e._s(t.eng_title))])]),e._v(" "),i("div",{staticClass:"Service-item-img"},[i("img",{attrs:{src:t.img,alt:"服务"}})]),e._v(" "),i("div",{staticClass:"Service-item-border"})])])}),0)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container text-center"},[t("h3",[this._v("我们的服务")]),this._v(" "),t("p",{staticStyle:{color:"#b2b2b2"}},[this._v("The Best Service You Never See")])])}]};var r=i("VU/8")(c,n,!1,function(e){i("2QDb")},"data-v-0d58fe6a",null);t.default=r.exports}});
//# sourceMappingURL=2.bf9a0812dda7edce66fe.js.map