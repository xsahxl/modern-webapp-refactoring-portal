(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3,4],{363:function(t,e,r){"use strict";r.r(e);r(27);var n=r(21),c=(r(75),{data:function(){return{list:[],categoryId:""}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.params.category,n=void 0===r?"":r,t.categoryId=n,e.next=4,t.$http.$get("api/product-categories");case 4:c=e.sent,o=c.data,data=void 0===o?[]:o,t.list=data;case 8:case"end":return e.stop()}}),e)})))()}}),o=r(56),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("b-card",{attrs:{header:"产品分类"}},[e("b-list-group",t._l(t.list,(function(r,n){return e("b-list-group-item",{key:n,attrs:{to:{name:"products-categories-category",params:{category:r.route||r.id}},active:t.categoryId&&(r.route===t.categoryId||r.id===t.categoryId)}},[t._v(t._s(r.name))])})),1)],1)}),[],!1,null,null,null);e.default=component.exports},364:function(t,e,r){t.exports=r.p+"img/banner2.1e94d9b.jpg"},365:function(t,e,r){"use strict";r.r(e);r(27),r(4),r(66);var n=r(21),c=(r(75),r(16),r(12),r(22),r(15),{components:{ProductCategory:r(363).default},data:function(){return{list:[],pages:1,currentPage:1,perPage:3,category:"",items:[{text:"首页",href:"/"},{text:"产品展示",active:!0}],listTitle:"产品列表",categoryDetail:{}}},head:function(){return{title:this.categoryDetail.name||this.listTitle,meta:[{hid:"description",name:"description",content:this.categoryDetail.description||"默认产品描述"}]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,l,d,m,v,f,h,y,_,x,w,k,C,data,P;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.$route.params,n=r.category,c=void 0===n?"":n,o=r.page,l=void 0===o?1:o,d=r.keyword,m=void 0===d?"":d,t.currentPage=l,t.category=c,v=6,f=c,!c){e.next=14;break}return e.next=8,t.$http.$get("api/product-categories/".concat(c));case 8:h=e.sent,y=h.id,_=h.name,t.categoryDetail=h,f=y||"",t.items.push({text:_,active:!0}),t.listTitle=_;case 14:return m&&(t.listTitle="搜索：".concat(m),v=1e3),e.next=17,t.$http.$get("api/products",{searchParams:{category:f,limit:v,page:l,keyword:m}});case 17:x=e.sent,w=x.total,k=void 0===w?0:w,C=x.data,data=void 0===C?[]:C,t.list=data.map((function(t){var e=t.pic;return e&&(t.pic=e.replace("public/","")),t})),P=Math.ceil(k/v),t.pages=P>=1?P:1;case 25:case"end":return e.stop()}}),e)})))()},computed:{staticHost:function(){return this.$store.state.staticHost}},created:function(){},methods:{linkGen:function(t){return{path:this.category?1===t?"/products/categories/".concat(this.category):"/products/categories/".concat(this.category,"/page/").concat(t):1===t?"/products":"/products/page/".concat(t)}}}}),o=r(56),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"main--"},[e("div",{staticClass:"main--banner"},[e("b-card",{attrs:{overlay:"","img-src":r(364),"img-alt":"产品介绍","text-variant":"white",title:t.categoryDetail.name||"产品介绍"}},[e("b-card-text",[t._v("\n        "+t._s(t.categoryDetail.description||"相比其他浏览器，我们简化了浏览处理功能，搭配内置广告拦截功能，实现更快速的网页加载体验。")+"\n      ")])],1)],1),t._v(" "),e("div",{staticClass:"main--breadcrumb"},[e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("b-breadcrumb",{attrs:{items:t.items}})],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-3"},[e("product-category")],1),t._v(" "),e("div",{staticClass:"col"},[e("b-card",{attrs:{title:t.listTitle}},[e("div",{staticClass:"row product--list"},t._l(t.list,(function(r,n){return e("div",{key:n,staticClass:"col-md-6"},[e("b-card",{attrs:{title:r.name,"img-src":t.staticHost+r.pic,"img-alt":r.name,"img-top":"",tag:"article"}},[e("b-button",{attrs:{to:{name:"products-detail-id",params:{id:r.route||r.id}},variant:"primary"}},[t._v("查看详情")])],1)],1)})),0),t._v(" "),t.list.length>0?e("b-pagination-nav",{attrs:{"link-gen":t.linkGen,"number-of-pages":t.pages,"use-router":""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e(),t._v(" "),t.list.length<=0?e("b-jumbotron",{attrs:{header:"抱歉",lead:"暂没有，您可以"}},[e("b-button",{attrs:{variant:"primary",to:{path:"/products"}}},[t._v("查看全部")])],1):t._e()],1)],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductCategory:r(363).default})},374:function(t,e,r){"use strict";r.r(e);var n={head:{title:"产品展示",meta:[{hid:"description",name:"description",content:"相比其他浏览器，我们简化了浏览处理功能，搭配内置广告拦截功能，实现更快速的网页加载体验。"}]}},c=r(56),component=Object(c.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"container"},[t("ProductList")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductList:r(365).default})}}]);