(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{184:function(e,t,n){var content=n(190);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("7af81187",content,!0,{sourceMap:!1})},185:function(e,t,n){var content=n(192);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("cb806632",content,!0,{sourceMap:!1})},189:function(e,t,n){"use strict";var r=n(184);n.n(r).a},190:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".carbon_ad{background-color:#fff;font-size:13px;overflow:hidden;margin-bottom:15px;height:106px}@media (min-width:625px){.carbon_ad{float:right;width:125px;margin-left:25px;height:auto}}@media (min-width:1280px){.carbon_ad{position:fixed;bottom:30px;right:30px;margin-bottom:0}}.carbon_ad .vuejobs{display:block;width:130px;height:100px;background-image:url(/vuejobs.png)}.carbon_ad .carbon-img{display:inline-block;float:left;margin-right:10px}@media (min-width:625px){.carbon_ad .carbon-img{float:none;margin-right:0}}.carbon_ad .carbon-text{color:#34495e;text-decoration:none}.carbon_ad .carbon-text:hover{text-decoration:none}@media (min-width:625px){.carbon_ad .carbon-text{display:inline-block;margin-top:5px}}@media (min-width:625px){.carbon_ad .carbon-wrap{display:inline-block;margin-bottom:5px;line-height:normal}}.carbon_ad .carbon-poweredby{color:#7f8c8d;display:block}",""])},191:function(e,t,n){"use strict";var r=n(185);n.n(r).a},192:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".ad_blocked,.cf_ad{background-color:#fff;overflow:hidden;padding-bottom:15px;height:140px}@media (min-width:625px){.ad_blocked,.cf_ad{float:right;width:150px;padding-left:25px;height:auto}}@media (min-width:1280px){.ad_blocked,.cf_ad{position:fixed;bottom:30px;right:30px;padding-bottom:0;height:auto}}.ad_blocked #cf,.ad_blocked #cf .cf-wrapper,.cf_ad #cf,.cf_ad #cf .cf-wrapper{width:auto!important}.ad_blocked #cf .cf-text,.cf_ad #cf .cf-text{font-size:13px!important}.ad_blocked #cf .cf-img-wrapper,.ad_blocked .img-wrapper,.cf_ad #cf .cf-img-wrapper,.cf_ad .img-wrapper{float:left;margin-right:10px}@media (min-width:625px){.ad_blocked #cf .cf-img-wrapper,.ad_blocked .img-wrapper,.cf_ad #cf .cf-img-wrapper,.cf_ad .img-wrapper{float:none;margin-right:0}}.ad_blocked .text-wrapper,.cf_ad .text-wrapper{font-size:13px}",""])},193:function(e,t,n){"use strict";var r={mounted:function(){if(-1!==["en","fr"].indexOf(this.$store.state.locale)&&this.$refs.carbonads){var script=document.createElement("script");script.setAttribute("type","text/javascript"),script.setAttribute("src","//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=nuxtjsorg"),script.setAttribute("id","_carbonads_js"),this.$refs.carbonads.appendChild(script)}}},o=(n(189),n(3)),c={data:function(){return{displayCarbon:!1}},mounted:function(){},beforeDestroy:function(){},methods:{cardbonFallback:function(e){}},components:{CarbonAds:Object(o.a)(r,function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"carbonads",staticClass:"carbon_ad"})},[],!1,null,null,null).exports}},d=(n(191),Object(o.a)(c,function(){var e=this.$createElement;return(this._self._c||e)("div")},[],!1,null,null,null));t.a=d.exports},194:function(e,t,n){"use strict";var r={props:["content"],mounted:function(){this.$nextTick(this.addListeners)},beforeDestroy:function(){this.removeListeners()},watch:{content:"contentUpdated"},methods:{navigate:function(e){for(var t=e.target,i=0;i<5&&!(t instanceof HTMLAnchorElement)&&t.parentNode;)t=t.parentNode,i++;if(t instanceof HTMLAnchorElement){var n=t.getAttribute("href");n&&"/"===n[0]?(e.preventDefault(),this.$router.push(n)):this.$ga&&this.$ga("send","event","Outbound Link","click",t.href)}},contentUpdated:function(){var e=this;this.removeListeners(),this.$nextTick(function(){e.addListeners()})},addListeners:function(){this._links=this.$el.getElementsByTagName("a");for(var i=0;i<this._links.length;i++)this._links[i].addEventListener("click",this.navigate,!1)},removeListeners:function(){for(var i=0;i<this._links.length;i++)this._links[i].removeEventListener("click",this.navigate,!1);this._links=[]}}},o=n(3),component=Object(o.a)(r,function(){var e=this.$createElement;return(this._self._c||e)("div",{domProps:{innerHTML:this._s(this.content)}})},[],!1,null,null,null);t.a=component.exports},211:function(e,t,n){var content=n(244);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("0ad26d55",content,!0,{sourceMap:!1})},243:function(e,t,n){"use strict";var r=n(211);n.n(r).a},244:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".Release__Date[data-v-6211d084]{display:block;font-size:16px}",""])},272:function(e,t,n){"use strict";n.r(t);n(16);var r=n(2),o=n(193),c=n(194),d=["January","February","March","April","May","June","July","August","September","October","November","December"],l={asyncData:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t){var n,r,data;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$docs,r=t.isDev,t.store,data={releases:[],isDev:r},e.next=4,n.get("/releases");case 4:return data.releases=e.sent,e.abrupt("return",data);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),head:function(){return{title:"Release Notes",titleTemplate:"%s - Nuxt.js",meta:[{hid:"description",name:"description",content:"Nuxt.js release notes from Github."}]}},filters:{dateFormat:function(e){var s=(e=new Date(e)).getDate()+" "+d[e.getMonth()];return e.getFullYear()<(new Date).getFullYear()&&(s+=" "+e.getFullYear()),s}},components:{CodeFundAds:o.a,HtmlParser:c.a}},f=(n(243),n(3)),component=Object(f.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isDev||" en "!==e.$store.state.locale?e._e():n("code-fund-ads",{key:e.$route.params.slug}),e._v(" "),n("h1",[e._v(e._s(e.$store.state.lang.guide.release_notes))]),e._v(" "),e._l(e.releases,function(t){return n("div",{key:t.name},[n("h2",[n("a",{staticClass:"anchor",attrs:{id:t.name,href:"#"+t.name,"aria-hidden":"true"}},[e._v(e._s(t.name))]),e._v(" "),n("span",{staticClass:"Release__Date"},[e._v("\n        Released on\n        "),n("time",{attrs:{datetime:t.date,title:new Date(t.date).toString()}},[e._v(e._s(e._f("dateFormat")(t.date)))])])]),e._v(" "),n("html-parser",{staticClass:"Release__Content",domProps:{innerHTML:e._s(t.body)}})],1)})],2)},[],!1,null,"6211d084",null);t.default=component.exports}}]);