(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1214:function(t,o,r){var content=r(1255);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(110).default)("f048070c",content,!0,{sourceMap:!1})},1254:function(t,o,r){"use strict";var e=r(1214);r.n(e).a},1255:function(t,o,r){(o=r(109)(!1)).push([t.i,".eshop-breadcrumb[data-v-14dd6598]{margin:45.33333px 0 20px;border-bottom:1px solid #ddd}.eshop-flexCenter[data-v-14dd6598]{display:flex;justify-content:center;align-items:center}.eshop-danger[data-v-14dd6598]{color:red}.eshop-cart-trow[data-v-14dd6598]:hover{background-color:#e6d6c6}.eshop-cart-tfooter>.eshop-cart-trow[data-v-14dd6598]:hover,.eshop-cart-thead>.eshop-cart-trow[data-v-14dd6598]:hover{background-color:#fff}.eshop-cart[data-v-14dd6598]{background-color:#f2f2f2;margin-top:68px;min-height:calc(100vh - 68px)}.eshop-cart-content[data-v-14dd6598]{overflow:hidden;max-width:1440px;margin:0 auto;padding:0 10px}.eshop-cart-title[data-v-14dd6598]{margin:20px 0}.eshop-cart-trow[data-v-14dd6598]{background-color:#fff;margin:20px 0;cursor:pointer}.eshop-cart-tcol[data-v-14dd6598]{padding:0 10px;height:100%}.eshop-cart-tbody[data-v-14dd6598],.eshop-cart-tfooter[data-v-14dd6598],.eshop-cart-thead[data-v-14dd6598]{overflow:hidden}.eshop-cart-thead>.eshop-cart-trow[data-v-14dd6598]{height:56px;line-height:56px}.eshop-cart-tbody>.eshop-cart-trow[data-v-14dd6598],.eshop-cart-tfooter>.eshop-cart-trow[data-v-14dd6598]{height:100px;line-height:100px}.eshop-cart-textRight[data-v-14dd6598]{text-align:right;line-height:normal}.eshop-cart-number[data-v-14dd6598]{color:red;font-size:1.3em}",""]),t.exports=o},1278:function(t,o,r){"use strict";r.r(o);var e={name:"Hello",data:function(){return{}},computed:{orders:function(){return this.$store.state.order},userInfo:function(){return this.$store.state.user.userInfo?this.$store.state.user.userInfo:{}}},created:function(){this.$store.dispatch("order/fetchOrderData",{userId:this.userInfo.id,current:1,size:10}),this.$store.dispatch("order/fetchOrderTotal",{userId:this.userInfo.id})},mounted:function(){},methods:{toOrderInfo:function(t){this.$router.push({path:"/orderInfo",query:{orderId:t}})}},components:{}},c=(r(1254),r(59)),component=Object(c.a)(e,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"eshop-cart"},[r("div",{staticClass:"eshop-cart-content"},[r("h1",{staticClass:"eshop-cart-title"},[t._v("订单列表")]),t._v(" "),r("a-spin",{attrs:{spinning:t.orders.fetching}},[r("a-icon",{staticStyle:{"font-size":"24px"},attrs:{slot:"indicator",type:"loading",spin:""},slot:"indicator"}),t._v(" "),r("div",[r("div",{staticClass:"eshop-cart-thead"},[r("a-row",{staticClass:"eshop-cart-trow"},[r("a-col",{staticClass:"eshop-cart-tcol",attrs:{span:4}},[t._v("订单号")]),t._v(" "),r("a-col",{staticClass:"eshop-cart-tcol",attrs:{span:10}},[t._v("收获地址")]),t._v(" "),r("a-col",{staticClass:"eshop-cart-tcol",attrs:{span:3}},[t._v("收货人")]),t._v(" "),r("a-col",{staticClass:"eshop-cart-tcol",attrs:{span:3}},[t._v("\n                    总价\n                ")]),t._v(" "),r("a-col",{staticClass:"eshop-cart-tcol",attrs:{span:4}},[t._v("支付状态")])],1)],1),t._v(" "),r("div",{staticClass:"eshop-cart-tbody"},t._l(t.orders.orderItems,(function(o){return r("div",{key:o.id,staticClass:"eshop-cart-trow",on:{click:function(r){return t.toOrderInfo(o.id)}}},[r("a-row",[r("a-col",{staticClass:"eshop-cart-tcol",attrs:{span:4}},[t._v(t._s(o.id))]),t._v(" "),r("a-col",{staticClass:"eshop-cart-tcol",attrs:{span:10}},[t._v(t._s(o.address))]),t._v(" "),r("a-col",{staticClass:"eshop-cart-tcol",attrs:{span:3}},[t._v(t._s(o.name))]),t._v(" "),r("a-col",{staticClass:"eshop-cart-tcol",attrs:{span:3}},[t._v("\n                    "+t._s(o.price)+"\n                ")]),t._v(" "),r("a-col",{staticClass:"eshop-cart-tcol",attrs:{span:4}},[t._v(t._s(o.pay?"已支付":"未支付"))])],1)],1)})),0)])],1),t._v(" "),r("div",{staticClass:"eshop-cart-tfooter",style:{display:"flex",justifyContent:"flex-end"}},[r("a-pagination",{attrs:{current:t.orders.current,total:t.orders.total}})],1)],1)])}),[],!1,null,"14dd6598",null);o.default=component.exports}}]);