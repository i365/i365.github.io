(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{184:function(t,e,n){var content=n(190);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("7af81187",content,!0,{sourceMap:!1})},185:function(t,e,n){var content=n(192);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("cb806632",content,!0,{sourceMap:!1})},186:function(t,e,n){var content=n(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("273ffb25",content,!0,{sourceMap:!1})},187:function(t,e,n){var content=n(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("188f1a36",content,!0,{sourceMap:!1})},188:function(t,e,n){var content=n(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("b9c77f44",content,!0,{sourceMap:!1})},189:function(t,e,n){"use strict";var o=n(184);n.n(o).a},190:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".carbon_ad{background-color:#fff;font-size:13px;overflow:hidden;margin-bottom:15px;height:106px}@media (min-width:625px){.carbon_ad{float:right;width:125px;margin-left:25px;height:auto}}@media (min-width:1280px){.carbon_ad{position:fixed;bottom:30px;right:30px;margin-bottom:0}}.carbon_ad .vuejobs{display:block;width:130px;height:100px;background-image:url(/vuejobs.png)}.carbon_ad .carbon-img{display:inline-block;float:left;margin-right:10px}@media (min-width:625px){.carbon_ad .carbon-img{float:none;margin-right:0}}.carbon_ad .carbon-text{color:#34495e;text-decoration:none}.carbon_ad .carbon-text:hover{text-decoration:none}@media (min-width:625px){.carbon_ad .carbon-text{display:inline-block;margin-top:5px}}@media (min-width:625px){.carbon_ad .carbon-wrap{display:inline-block;margin-bottom:5px;line-height:normal}}.carbon_ad .carbon-poweredby{color:#7f8c8d;display:block}",""])},191:function(t,e,n){"use strict";var o=n(185);n.n(o).a},192:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".ad_blocked,.cf_ad{background-color:#fff;overflow:hidden;padding-bottom:15px;height:140px}@media (min-width:625px){.ad_blocked,.cf_ad{float:right;width:150px;padding-left:25px;height:auto}}@media (min-width:1280px){.ad_blocked,.cf_ad{position:fixed;bottom:30px;right:30px;padding-bottom:0;height:auto}}.ad_blocked #cf,.ad_blocked #cf .cf-wrapper,.cf_ad #cf,.cf_ad #cf .cf-wrapper{width:auto!important}.ad_blocked #cf .cf-text,.cf_ad #cf .cf-text{font-size:13px!important}.ad_blocked #cf .cf-img-wrapper,.ad_blocked .img-wrapper,.cf_ad #cf .cf-img-wrapper,.cf_ad .img-wrapper{float:left;margin-right:10px}@media (min-width:625px){.ad_blocked #cf .cf-img-wrapper,.ad_blocked .img-wrapper,.cf_ad #cf .cf-img-wrapper,.cf_ad .img-wrapper{float:none;margin-right:0}}.ad_blocked .text-wrapper,.cf_ad .text-wrapper{font-size:13px}",""])},193:function(t,e,n){"use strict";var o={mounted:function(){if(-1!==["en","fr"].indexOf(this.$store.state.locale)&&this.$refs.carbonads){var script=document.createElement("script");script.setAttribute("type","text/javascript"),script.setAttribute("src","//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=nuxtjsorg"),script.setAttribute("id","_carbonads_js"),this.$refs.carbonads.appendChild(script)}}},r=(n(189),n(3)),c={data:function(){return{displayCarbon:!1}},mounted:function(){},beforeDestroy:function(){},methods:{cardbonFallback:function(t){}},components:{CarbonAds:Object(r.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"carbonads",staticClass:"carbon_ad"})},[],!1,null,null,null).exports}},d=(n(191),Object(r.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,null,null));e.a=d.exports},194:function(t,e,n){"use strict";var o={props:["content"],mounted:function(){this.$nextTick(this.addListeners)},beforeDestroy:function(){this.removeListeners()},watch:{content:"contentUpdated"},methods:{navigate:function(t){for(var e=t.target,i=0;i<5&&!(e instanceof HTMLAnchorElement)&&e.parentNode;)e=e.parentNode,i++;if(e instanceof HTMLAnchorElement){var n=e.getAttribute("href");n&&"/"===n[0]?(t.preventDefault(),this.$router.push(n)):this.$ga&&this.$ga("send","event","Outbound Link","click",e.href)}},contentUpdated:function(){var t=this;this.removeListeners(),this.$nextTick(function(){t.addListeners()})},addListeners:function(){this._links=this.$el.getElementsByTagName("a");for(var i=0;i<this._links.length;i++)this._links[i].addEventListener("click",this.navigate,!1)},removeListeners:function(){for(var i=0;i<this._links.length;i++)this._links[i].removeEventListener("click",this.navigate,!1);this._links=[]}}},r=n(3),component=Object(r.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{domProps:{innerHTML:this._s(this.content)}})},[],!1,null,null,null);e.a=component.exports},195:function(t,e,n){"use strict";e.a={data:function(){return{isIntersecting:!1}},mounted:function(){var t=this;if(!window.IntersectionObserver)return console.warn("IntersectionObserver polyfill is required.");this.__observer=new window.IntersectionObserver(function(e){e.forEach(function(e){var n=e.intersectionRatio;e.target;n>0&&(t.isIntersecting=!0,t.__observer.disconnect())})}),this.__observer.observe(this.$el)},beforeDestroy:function(){this.__observer&&(this.__observer.disconnect(),delete this.__observer)}}},197:function(t,e,n){"use strict";var o=n(186);n.n(o).a},198:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,'.bsa-cpc{font-size:1em;background-color:#f8f8f8}.bsa-cpc a._default_{text-align:left;display:block;padding:10px 15px 12px;margin-top:20px;color:#666;font-weight:400;line-height:18px}.bsa-cpc a._default_:hover{text-decoration:none}.bsa-cpc a._default_ .default-description,.bsa-cpc a._default_ .default-image,.bsa-cpc a._default_ .default-title{display:inline;vertical-align:middle;margin-right:6px}.bsa-cpc a._default_ .default-image img{height:20px;border-radius:3px;vertical-align:middle;position:relative;top:-1px}.bsa-cpc a._default_ .default-title{font-weight:600}.bsa-cpc a._default_ .default-description:after{font-size:.85em;content:"Sponsored";color:#1c90f3;border:1px solid #1c90f3;border-radius:3px;padding:0 4px 1px;margin-left:6px}.bsa-cpc .default-ad{display:none}',""])},199:function(t,e,n){"use strict";var o=n(187);n.n(o).a},200:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".contribute[data-v-0253eebc]{margin-top:30px;border-top:1px solid #e5e5e5}.contribute p[data-v-0253eebc]{color:#7f8c8d;padding-top:15px;padding-bottom:0;margin:0;font-size:14px}",""])},201:function(t,e,n){"use strict";var o=n(188);n.n(o).a},202:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".responsiveVideo[data-v-2d87bd0c]{width:100%;height:0;padding-bottom:56.25%;overflow:hidden;position:relative;margin:30px 0;background:#000}.responsiveVideo embed[data-v-2d87bd0c],.responsiveVideo iframe[data-v-2d87bd0c],.responsiveVideo object[data-v-2d87bd0c]{width:100%;height:100%;position:absolute;top:0;left:0}.responsiveVideo span[data-v-2d87bd0c]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:30px;text-align:center;line-height:40px;color:#fff}",""])},203:function(t,e,n){"use strict";var o={mounted:function(){"en"===this.$store.state.locale&&this.$refs.carbonadsText&&this.loadScript()},methods:{loadScript:function(){var script=document.createElement("script");script.setAttribute("type","text/javascript"),this.$refs.carbonadsText.appendChild(script),script.onload=this.scriptLoaded,script.setAttribute("src","//m.servedby-buysellads.com/monetization.js")},scriptLoaded:function(){if("undefined"==typeof _bsa)return console.warn("Could not load Carbon Ads Text");window._bsa.init("default","CKYD62QW","placement:nuxtjsorg",{target:".bsa-cpc",align:"horizontal",disable_css:"true"})}}},r=(n(197),n(3)),c={props:["docLink"],components:{CarbonAdsText:Object(r.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"carbonadsText"},[e("div",{staticClass:"bsa-cpc"})])},[],!1,null,null,null).exports}},d=(n(199),Object(r.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contribute"},[n("carbon-ads-text"),t._v(" "),n("p",[t._v(t._s(t.$store.state.lang.guide.contribute)+" "),n("a",{attrs:{href:t.docLink,target:"_blank",rel:"noopener"}},[t._v(t._s(t.$store.state.lang.guide.edit_on_github))])])],1)},[],!1,null,"0253eebc",null));e.a=d.exports},204:function(t,e,n){"use strict";var o={mixins:[n(195).a],props:{src:{type:String,required:!0}}},r=(n(201),n(3)),component=Object(r.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"responsiveVideo"},[this.isIntersecting&&this.src?e("iframe",{attrs:{src:this.src,frameborder:"0",allowfullscreen:"",webkitallowfullscreen:"",mozallowfullscreen:"",title:"Responsive video"}}):e("span",[this._v("Loading video...")])])},[],!1,null,"2d87bd0c",null);e.a=component.exports},271:function(t,e,n){"use strict";n.r(e);n(16);var o=n(2),r=n(204),c=n(193),d=n(194),l=n(203),f={asyncData:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,o,r,c,data,d,path,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$docs,o=e.route,r=e.store,c=e.error,data={attrs:{},body:"",docLink:""},d=o.params.slug||"index",path="/".concat(r.state.lang.iso,"/guide/").concat(d),t.prev=4,t.next=7,n.get(path);case 7:l=t.sent,t.next=15;break;case 10:if(t.prev=10,t.t0=t.catch(4),404===t.t0.response.status){t.next=14;break}return t.abrupt("return",c({statusCode:500,message:r.state.lang.text.an_error_occurred}));case 14:return t.abrupt("return",c({statusCode:404,message:r.state.lang.text.api_page_not_found}));case 15:return data.attrs=l.attrs,data.body=l.body,data.docLink="https://github.com/nuxt/docs/blob/master".concat(path,".md"),"ru"===r.state.lang.iso?data.docLink="https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru".concat(path,".md"):"cn"===r.state.lang.iso&&(data.docLink="https://github.com/o2team/i18n-cn-nuxtjs-docs/blob/dev".concat(path,".md")),data.attrs.title||console.error("[/".concat(path,"] ").concat(r.state.lang.text.please_define_title,".")),data.attrs.description||console.error("[/".concat(path,"] ").concat(r.state.lang.text.please_define_description,".")),t.abrupt("return",data);case 22:case"end":return t.stop()}},t,null,[[4,10]])}));return function(e){return t.apply(this,arguments)}}(),scrollToTop:!0,head:function(){return{title:this.attrs.title,titleTemplate:"%s - Nuxt.js",meta:[{hid:"description",name:"description",content:this.attrs.description}]}},components:{ResponsiveVideo:r.a,CodeFundAds:c.a,HtmlParser:d.a,Contribute:l.a}},h=n(3),component=Object(h.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AD"),t._v(" "),n("code-fund-ads",{key:t.$route.params.slug}),t._v(" "),n("h1",[t._v(t._s(t.attrs.title))]),t._v(" "),t.attrs.youtube?n("responsive-video",{attrs:{src:t.attrs.youtube}}):t._e(),t._v(" "),n("html-parser",{attrs:{content:t.body}}),t._v(" "),n("contribute",{attrs:{"doc-link":t.docLink}}),t._v(" "),n("AD")],1)},[],!1,null,null,null);e.default=component.exports}}]);