/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{221:function(t,e,r){var content=r(265);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(7).default)("7129e301",content,!0,{sourceMap:!1})},263:function(t,e,r){!function(t){"use strict";var e={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:""},srcset:{type:String},intersectionOptions:{type:Object,default:function(){return{}}},usePicture:{type:Boolean,default:!1}},inheritAttrs:!1,data:function(){return{observer:null,intersected:!1,loaded:!1}},computed:{srcImage:function(){return this.intersected?this.src:this.srcPlaceholder},srcsetImage:function(){return!(!this.intersected||!this.srcset)&&this.srcset}},methods:{load:function(){this.$el.getAttribute("src")!==this.srcPlaceholder&&(this.loaded=!0,this.$emit("load"))}},render:function(t){var img=t("img",{attrs:{src:this.srcImage,srcset:this.srcsetImage},domProps:this.$attrs,class:{"v-lazy-image":!0,"v-lazy-image-loaded":this.loaded},on:{load:this.load}});return this.usePicture?t("picture",{on:{load:this.load}},this.intersected?[this.$slots.default,img]:[]):img},mounted:function(){var t=this;"IntersectionObserver"in window?(this.observer=new IntersectionObserver(function(e){var image=e[0];image.isIntersecting&&(t.intersected=!0,t.observer.disconnect(),t.$emit("intersect"))},this.intersectionOptions),this.observer.observe(this.$el)):console.error("v-lazy-image: this browser doesn't support IntersectionObserver. Please use this polyfill to make it work https://github.com/w3c/IntersectionObserver/tree/master/polyfill.")},destroyed:function(){this.observer.disconnect()}},r={install:function(t,r){t.component("VLazyImage",e)}};t.default=e,t.VLazyImagePlugin=r,Object.defineProperty(t,"__esModule",{value:!0})}(e)},264:function(t,e,r){"use strict";var n=r(221);r.n(n).a},265:function(t,e,r){(t.exports=r(6)(!1)).push([t.i,".nBackers{z-index:100;position:relative;box-shadow:0 0 1px 0 rgba(10,31,68,.08),0 1px 1px 0 rgba(10,31,68,.08);text-align:center;padding:5rem 1rem 0}@media (min-width:992px){.nBackers{padding:8rem 0 0}}.nBackers_Title{margin-top:0;color:#0a1f44;font-size:2rem;font-weight:400;line-height:normal}.nBackers_Title span{padding-bottom:10px;border-bottom:4px solid #42b883;border-radius:4px}.nBackers_Description{padding:3rem 0;font-size:16px}.nBackers_Group{padding-bottom:6rem}.nBackers_Group_Title{margin:0;color:#53627c;font-size:1.75rem;font-weight:400}.nBackers_Group_Content{padding:3rem 0}.nBackers_Group_Content img{max-width:100%}.nBackers_Group_Content_Link{display:inline-block;margin-right:30px;margin-bottom:30px}.nBackers_Group_Content_Link_Image{height:64px}.nBackers_Group_Content_Link:last-child{margin-right:0}.nBackers_Group_Action_Button{color:#53627c;display:inline-block;padding:1rem 2rem;text-decoration:none;text-transform:uppercase;letter-spacing:.5px;font-weight:600;box-shadow:0 0 1px 0 rgba(10,31,68,.08),0 1px 1px 0 rgba(10,31,68,.08);border-radius:4px;margin-right:30px;background-color:#fcfcfd}.nBackers_Group_Action_Button:last-child{margin-right:0}.nBackers_Group_Action_Button:hover{text-decoration:none;color:#0a1f44;box-shadow:0 0 1px 0 rgba(10,31,68,.08),0 3px 4px 0 rgba(10,31,68,.1)}.nBackers_Group_Action_Button--green{color:#fcfcfd;background-color:#42b883}.nBackers_Group_Action_Button--green:hover{color:#fff}",""])},279:function(t,e,r){"use strict";r.r(e);var n=r(263),o={components:{VLazyImage:r.n(n).a}},c=(r(264),r(3)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"nBackers"},[r("div",{staticClass:"container"},[r("h2",{staticClass:"nBackers_Title"},[r("span",[t._v(t._s(t.$store.state.homepage.backers.attrs.title))])]),t._v(" "),r("p",{staticClass:"nBackers_Description",domProps:{innerHTML:t._s(t.$store.state.homepage.backers.body)}}),t._v(" "),r("div",{staticClass:"nBackers_Group"},[r("h3",{staticClass:"nBackers_Group_Title"},[t._v(t._s(t.$store.state.lang.homepage.backer_partners))]),t._v(" "),r("div",{staticClass:"nBackers_Group_Content"},[r("a",{staticClass:"nBackers_Group_Content_Link",attrs:{href:"https://www.storyblok.com/?ref=nuxt",target:"_blank",rel:"noopener"}},[r("v-lazy-image",{staticClass:"nBackers_Group_Content_Link_Image",attrs:{src:"/storyblok-logo.svg",alt:"Storyblok.com"}})],1),t._v(" "),r("a",{staticClass:"nBackers_Group_Content_Link",attrs:{href:"https://www.vuemastery.com/?ref=nuxt",target:"_blank",rel:"noopener"}},[r("v-lazy-image",{staticClass:"nBackers_Group_Content_Link_Image",attrs:{src:"/vueMastery-brand.svg",alt:"VueMastery.com"}})],1),t._v(" "),r("a",{staticClass:"nBackers_Group_Content_Link",attrs:{href:"https://yakaz.com/",target:"_blank",rel:"noopener"}},[r("v-lazy-image",{staticClass:"nBackers_Group_Content_Link_Image",attrs:{src:"/yakaz-partner.png",srcset:"/yakaz-partner-2x.png 2x",alt:"Yakaz.com"}})],1),t._v(" "),r("a",{staticClass:"nBackers_Group_Content_Link",attrs:{href:"https://vueschool.io/?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=banner&utm_campaign=Open%20Collective",target:"_blank",rel:"noopener"}},[r("v-lazy-image",{staticClass:"nBackers_Group_Content_Link_Image",attrs:{src:"/vueschool.png",srcset:"/vueschool-2x.png 2x",alt:"VueSchool.io"}})],1),t._v(" "),r("a",{staticClass:"nBackers_Group_Content_Link",attrs:{href:"https://shipshape.io/?ref=nuxt",target:"_blank",rel:"noopener"}},[r("v-lazy-image",{staticClass:"nBackers_Group_Content_Link_Image",attrs:{src:"/shipshape-logo.svg",alt:"Shipshape.io"}})],1),t._v(" "),r("a",{staticClass:"nBackers_Group_Content_Link",attrs:{href:"https://hapijs.com/?ref=nuxt",target:"_blank",rel:"noopener"}},[r("v-lazy-image",{staticClass:"nBackers_Group_Content_Link_Image",attrs:{src:"/hapi-logo.svg",alt:"Hapi JS"}})],1),t._v(" "),r("a",{staticClass:"nBackers_Group_Content_Link",attrs:{href:"https://blokt.com/?ref=nuxt",target:"_blank",rel:"noopener"}},[r("v-lazy-image",{staticClass:"nBackers_Group_Content_Link_Image",attrs:{src:"/blokt-logo.png",alt:"Blokt"}})],1)]),t._v(" "),r("div",{staticClass:"nBackers_Group_Action"},[r("a",{staticClass:"nBackers_Group_Action_Button nBackers_Group_Action_Button--green",attrs:{href:"https://opencollective.com/nuxtjs",target:"_blank",rel:"noopener"}},[t._v("\n          "+t._s(t.$store.state.lang.homepage.backer_become_a_partner)+"\n        ")])])]),t._v(" "),r("div",{staticClass:"nBackers_Group"},[r("h3",{staticClass:"nBackers_Group_Title"},[t._v(t._s(t.$store.state.lang.homepage.backer_sponsors))]),t._v(" "),r("div",{staticClass:"nBackers_Group_Content"},[r("v-lazy-image",{attrs:{alt:"Nuxt Sponsors","src-placeholder":"/oc-loading.svg",src:"https://opencollective.com/nuxtjs/tiers/sponsors.svg?avatarHeight=64&width=1155&button=false"}})],1),t._v(" "),r("div",{staticClass:"nBackers_Group_Action"},[r("a",{staticClass:"nBackers_Group_Action_Button nBackers_Group_Action_Button--green",attrs:{href:"https://opencollective.com/nuxtjs",target:"_blank",rel:"noopener"}},[t._v("\n          "+t._s(t.$store.state.lang.homepage.backer_become_a_sponsor)+"\n        ")])])]),t._v(" "),r("div",{staticClass:"nBackers_Group"},[r("h3",{staticClass:"nBackers_Group_Title"},[t._v(t._s(t.$store.state.lang.homepage.backer_backers))]),t._v(" "),r("div",{staticClass:"nBackers_Group_Content"},[r("v-lazy-image",{attrs:{alt:"Nuxt Backers","src-placeholder":"/oc-loading.svg",src:"https://opencollective.com/nuxtjs/tiers/backers.svg?width=1155&button=false"}})],1),t._v(" "),r("div",{staticClass:"nBackers_Group_Action"},[r("a",{staticClass:"nBackers_Group_Action_Button nBackers_Group_Action_Button--green",attrs:{href:"https://opencollective.com/nuxtjs",target:"_blank",rel:"noopener"}},[t._v("\n          "+t._s(t.$store.state.lang.homepage.backer_become_a_backer)+"\n        ")])])]),t._v(" "),r("div",{staticClass:"nBackers_Group"},[r("h3",{staticClass:"nBackers_Group_Title"},[t._v(t._s(t.$store.state.lang.homepage.backer_foundations))]),t._v(" "),r("div",{staticClass:"nBackers_Group_Content"},[r("a",{staticClass:"nBackers_Group_Content_Link",attrs:{href:"https://www.shuttleworthfoundation.org",target:"_blank",rel:"noopener"}},[r("v-lazy-image",{staticClass:"nBackers_Group_Content_Link_Image",attrs:{src:"/shuttleworth-funded.png",srcset:"/shuttleworth-funded-2x.png 2x",alt:"shuttleworth funded"}})],1)])])])])},[],!1,null,null,null);e.default=component.exports}}]);