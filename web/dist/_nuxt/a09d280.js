(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{keyword:""}},methods:{onSearch:function(t){t.preventDefault(),this.$router.push({path:"/products/search/".concat(this.keyword)})}}},o=r(56),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"header-- shadow-sm_ position-fixed"},[e("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[e("div",{staticClass:"container"},[e("b-navbar-brand",{attrs:{href:"/"}},[t._v("Serverless CMS DEMO HELLO")]),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{href:"/"}},[t._v("首页展示")]),t._v(" "),e("b-nav-item",{attrs:{href:"/products"}},[t._v("产品展示")]),t._v(" "),e("b-nav-item",{attrs:{href:"/about"}},[t._v("关于我们")]),t._v(" "),e("b-nav-item",{attrs:{href:"/contact"}},[t._v("联系我们")])],1),t._v(" "),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-form",[e("b-form-input",{attrs:{size:"md",placeholder:"请输入关键字"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),t._v(" "),e("b-button",{attrs:{size:"md",type:"submit"},on:{click:t.onSearch}},[t._v("搜索")])],1)],1)],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(140).default})},141:function(t,e,r){"use strict";r.r(e);r(309);var n=r(56),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("footer",{staticClass:"footer--"},[t("div",{staticClass:"container"},[t("div",{staticClass:"footer--copyright"})])])}],!1,null,"98462ffa",null);e.default=component.exports;installComponents(component,{Footer:r(141).default})},181:function(t,e,r){"use strict";e.a=function(t){var e=t.$http;e.onRequest((function(t){console.log("Making request to "+JSON.stringify(t.url))})),e.onError((function(t){500===t.statusCode&&alert("Request Error!")}))}},231:function(t,e,r){var content=r(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("7feaf21c",content,!0,{sourceMap:!1})},256:function(t,e,r){"use strict";var n=r(140),o=r(141),d={components:{Header:n.default,Footer:o.default}},c=r(56),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("Header"),t._v(" "),e("nuxt"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:r(140).default,Footer:r(141).default})},258:function(t,e,r){r(259),t.exports=r(260)},307:function(t,e,r){var content=r(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("4d39c70b",content,!0,{sourceMap:!1})},308:function(t,e,r){var n=r(82)(!1);n.push([t.i,"body,html{font-size:14px;color:#42494f;background-color:#f4f7fa}.page-link,a{color:#17a2b8}.btn-primary,.list-group-item.active,.page-item.active .page-link{background-color:#17a2b8;border-color:#17a2b8}.card-text{line-height:1.8}.header--{position:relative;z-index:999;width:100%}.header-- .navbar-brand{padding-top:10px;padding-bottom:10px}.header-- .nav-item{padding-left:20px;padding-right:20px}.main--{padding-top:80px}.main--,.main--banner{margin-bottom:20px}.main--banner .card,.main--banner .card-img{border-radius:10px}.main--banner .card-body{display:flex;justify-content:center;align-items:center;align-content:center;flex-wrap:wrap;text-shadow:1px 1px 2px #333}.main--banner .card-body .card-title{font-size:2rem}.main--banner .card-body .card-text{font-size:1.2rem}.main--banner .card-body .card-text,.main--banner .card-body .card-title{width:100%;text-align:center}.main--rich__text{font-size:16px}.main--rich__text h1{margin:20px 0 30px;text-align:center}.main--rich__text .detail--pic{margin:20px 0}.main--rich__text img{float:left;margin:0 20px 20px 0;max-width:40%}.main--rich__text .rich--img__wide{float:none;margin:0 auto;max-width:100%;width:100%}.product--list{padding:10px 0}.product--list .card{margin-bottom:30px;border:none}.home--banner{margin-bottom:20px}.home--banner,.home--feature{border-radius:10px;overflow:hidden}.home--feature .card{padding:20px 40px;border:none}.home--feature .card h4{margin-bottom:30px}.home--feature .card-body,.home--feature .card-body .col-md-6{display:flex;justify-content:center;align-items:center}.home--feature .card img{margin-bottom:20px;max-width:90%}.home--product{margin-top:20px;border:none;border-radius:10px}",""]),t.exports=n},309:function(t,e,r){"use strict";r(231)},310:function(t,e,r){var n=r(82)(!1);n.push([t.i,".footer--[data-v-98462ffa]{padding:20px 0 10px;border-top:1px solid #ebebeb;text-align:center;background-color:#fafafa}",""]),t.exports=n},311:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n}));var n=function(){return{staticHost:"http://hanxie-modernweb-registery.oss.devsapp.net/"}}}},[[258,15,1,16]]]);