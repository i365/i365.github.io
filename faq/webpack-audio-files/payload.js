window.__NUXT__=function(e,t,o,n,a,s,i,r,l,c,m,d,u,p,g,h,f,b,y,w,k,x,v,S,j,_,A,P,T,N,C,D,H,R,E,G,M,V,L,q,W){return{layout:"default",data:[{},{attrs:{title:"Loading audio files from assets directory",description:b},body:'<h1><a id="how-to-extend-webpack-config-to-load-audio-files-" class="anchor" aria-hidden="true" href="#how-to-extend-webpack-config-to-load-audio-files-"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>How to extend Webpack config to load audio files?</h1><p>Audio files should be processed by <code>file-loader</code>. This loader is already included in the default Webpack configuration, but it is not set up to handle audio files. You need to extend its default configuration in <code>nuxt.config.js</code>:</p>\n<pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">build</span>: {\n    extend(config, ctx) {\n      config.module.rules.push({\n        <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\\.(ogg|mp3|wav|mpe?g)$/i</span>,\n        <span class="hljs-attr">loader</span>: <span class="hljs-string">\'file-loader\'</span>,\n        <span class="hljs-attr">options</span>: {\n          <span class="hljs-attr">name</span>: <span class="hljs-string">\'[path][name].[ext]\'</span>,\n        },\n      })\n    },\n  }\n}</code></pre><p>You can now import audio files like this <code>&lt;audio :src=&quot;require(&#39;@/assets/water.mp3&#39;)&quot; controls&gt;&lt;/audio&gt;</code>.</p>\n<p>If you only want to write: <code>&lt;audio src=&quot;@/assets/water.mp3&quot; controls&gt;&lt;/audio&gt;</code>, you need to tell <code>vue-loader</code> to automatically require your audio files when you reference them with the <code>src</code> attribute:</p>\n<pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n   <span class="hljs-attr">build</span>: {\n    <span class="hljs-attr">loaders</span>: {\n      <span class="hljs-attr">vue</span>: {\n        <span class="hljs-attr">transformAssetUrls</span>: {\n          <span class="hljs-attr">audio</span>: <span class="hljs-string">\'src\'</span>,\n        },\n      },\n    },\n\n    extend(config, ctx) {\n      config.module.rules.push({\n        <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\\.(ogg|mp3|wav|mpe?g)$/i</span>,\n        <span class="hljs-attr">loader</span>: <span class="hljs-string">\'file-loader\'</span>,\n        <span class="hljs-attr">options</span>: {\n          <span class="hljs-attr">name</span>: <span class="hljs-string">\'[path][name].[ext]\'</span>,\n        },\n      })\n    },\n  },\n}</code></pre>',docLink:"https://github.com/nuxt/docs/blob/master/en/faq/webpack-audio-files.md"}],error:null,state:{filled:e,docVersion:l,ghVersion:"v2.8.1",visibleHeader:!1,visibleAffix:!1,locale:"en",lang:{iso:"en",docVersion:l,links:{api:"API",blog:"Blog",chat:"Chat",documentation:"Documentation",download:"Download",examples:"Examples",ecosystem:"Ecosystem",faq:"FAQ",get_started:"get started",github:"GitHub",guide:"Guide",homepage:"Home page",live_demo:"Live Demo",live_edit:"Live Edit",tidelift_short:"GET PROFESSIONAL SUPPORT",official_support:"GET OFFICIAL SUPPORT ⛑",tidelift:"GET PROFESSIONAL SUPPORT FOR NUXT",twitter:"Twitter",vuejs:"Vue.js",vue_jobs:"Vue Jobs"},text:{an_error_occurred:"An error occurred",api_page_not_found:"API page not found",example_file:"Example Files",please_wait:"Please wait...",please_define_title:"Please define a title in the front matter",please_define_description:"Please define a description in the front matter",search:"Search",version:"Version"},homepage:{title:"The Vue.js Framework",meta:{title:"Nuxt.js - The Vue.js Framework",description:"Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable. Nuxt.js can produce Universal, Single Page and Static Generated Applications."},welcome:{app_types_prefix:"For ",app_types:["Universal Applications","Static Generated Applications","Single Page Applications","Desktop Applications","Mobile Applications","Progressive Web Apps"],app_types_suffix:"."},codesandbox_title:"Play with Nuxt.js online",codesandbox_open:"Open on CodeSandBox.io",codesandbox_examples:"See more examples",backer_partners:"Partners",backer_become_a_partner:"Become A Partner",backer_sponsors:_,backer_become_a_sponsor:"Become A Sponsor",backer_backers:"Backers",backer_become_a_backer:"Become A Backer",backer_foundations:"Foundations"},sponsors:{title:_,become:"Support us and",become_partner:"become a partner"},footer:{authors:"Made by Chopin Brothers"},guide:{release_notes:R,contribute:"Caught a mistake or want to contribute to the documentation?",edit_on_github:"Edit this page on GitHub!"},examples:{source_code:"Source Code"}},menu:{examples:[{title:"Essentials",links:[{name:E,to:""},{name:"SEO HTML Head",to:"/seo-html-head"}]},{title:"Customization",links:[{name:"Custom Loading",to:"/custom-loading"},{name:"Custom Page Loading",to:"/custom-page-loading"},{name:"Custom Routes",to:"/custom-routes"},{name:"Global CSS",to:"/global-css"},{name:c,to:"/layouts"},{name:m,to:"/middleware"},{name:d,to:"/named-views"},{name:u,to:"/nested-routes"},{name:p,to:g},{name:"Routes transitions",to:"/routes-transitions"}]},{title:"Advanced",links:[{name:h,to:f},{name:"Auth Routes",to:"/auth-routes"},{name:"Auth External API (JWT)",to:"/auth-external-jwt"},{name:n,to:y},{name:"i18n",to:"/i18n"},{name:"Testing",to:"/testing"}]},{title:"TypeScript",links:[{name:E,to:w},{name:n,to:"/typescript-vuex"}]}],api:[{title:"Essential",links:[{name:"Context",to:"/context"}]},{title:r,links:[{name:"asyncData",to:"/"},{name:"fetch",to:"/pages-fetch"},{name:x,to:"/pages-head"},{name:"key",to:"/pages-key"},{name:"layout",to:"/pages-layout"},{name:v,to:"/pages-loading"},{name:S,to:"/pages-middleware"},{name:"scrollToTop",to:"/pages-scrolltotop"},{name:j,to:"/pages-transition",contents:[{name:"String",to:"#string"},{name:"Object",to:"#object"},{name:"Function",to:"#function"}]},{name:"validate",to:"/pages-validate"},{name:"watchQuery",to:"/pages-watchquery"}]},{title:"Components",links:[{name:"nuxt",to:"/components-nuxt"},{name:"nuxt-child",to:"/components-nuxt-child"},{name:"nuxt-link",to:"/components-nuxt-link"},{name:"no-ssr",to:"/components-no-ssr"}]},{title:"Utils",links:[{name:"$nuxt",to:"/$nuxt"}]},{title:a,links:[{name:"build",to:"/configuration-build",contents:[{name:"analyze",to:"#analyze"},{name:"babel",to:"#babel"},{name:"cache",to:"#cache"},{name:"crossorigin",to:"#crossorigin"},{name:"cssSourceMap",to:"#csssourcemap"},{name:"devMiddleware",to:"#devmiddleware"},{name:A,to:P},{name:"extend",to:"#extend"},{name:"extractCSS",to:"#extractcss"},{name:"filenames",to:"#filenames"},{name:"friendlyErrors",to:"#friendlyerrors"},{name:"hardSource",to:"#hardsource"},{name:"hotMiddleware",to:"#hotmiddleware"},{name:"html.minify",to:"#html-minify"},{name:"indicator",to:"#indicator"},{name:"loaders",to:"#loaders"},{name:"optimization",to:"#optimization"},{name:"optimizeCSS",to:"#optimizecss"},{name:"parallel",to:"#parallel"},{name:T,to:"#plugins"},{name:"postcss",to:"#postcss"},{name:"profile",to:"#profile"},{name:"publicPath",to:"#publicpath"},{name:"quiet",to:"#quiet"},{name:"splitChunks",to:"#splitchunks"},{name:"ssr",to:C},{name:"styleResources",to:"#styleresources"},{name:"templates",to:"#templates"},{name:"terser",to:"#terser"},{name:"transpile",to:"#transpile"},{name:"typescript",to:"#typescript"},{name:"vueLoader",to:"#vueloader"},{name:D,to:"#watch"}]},{name:"buildDir",to:"/configuration-builddir"},{name:"css",to:"/configuration-css"},{name:"dev",to:"/configuration-dev"},{name:"env",to:"/configuration-env"},{name:"generate",to:"/configuration-generate",contents:[{name:"dir",to:"#dir"},{name:A,to:P},{name:s,to:i},{name:"interval",to:"#interval"},{name:"minify",to:"#minify"},{name:"routes",to:"#routes"},{name:"subFolders",to:"#subfolders"},{name:"concurrency",to:"#concurrency"}]},{name:x,to:"/configuration-head"},{name:"hooks",to:"/configuration-hooks"},{name:"ignore",to:"/configuration-ignore"},{name:v,to:"/configuration-loading",contents:[{name:"Disable the Progress Bar",to:"#disable-the-progress-bar"},{name:"Customize the Progress Bar",to:"#customize-the-progress-bar"},{name:"Use a Custom Loading Component",to:"#use-a-custom-loading-component"},{name:"Internals of the Progress Bar",to:"#internals-of-the-progress-bar"}]},{name:"loadingIndicator",to:"/configuration-loading-indicator"},{name:G,to:"/configuration-mode"},{name:"modern",to:"/configuration-modern"},{name:"modules",to:"/configuration-modules"},{name:"modulesDir",to:"/configuration-modulesdir"},{name:T,to:"/configuration-plugins"},{name:M,to:"/configuration-render",contents:[{name:"bundleRenderer",to:"#bundlerenderer"},{name:"etag",to:"#etag"},{name:"compressor",to:"#compressor"},{name:s,to:i},{name:"http2",to:"#http2"},{name:"injectScripts",to:"#injectscripts"},{name:"resourceHints",to:"#resourcehints"},{name:"ssr",to:C},{name:"ssrLog",to:"#ssrlog"},{name:"static",to:V},{name:"dist",to:"#dist"},{name:"csp",to:"#csp"}]},{name:"rootDir",to:"/configuration-rootdir"},{name:"router",to:"/configuration-router",contents:[{name:"base",to:"#base"},{name:"routeNameSplitter",to:"#routenamesplitter"},{name:"extendRoutes",to:"#extendroutes"},{name:s,to:i},{name:"linkActiveClass",to:"#linkactiveclass"},{name:"linkExactActiveClass",to:"#linkexactactiveclass"},{name:"linkPrefetchedClass",to:"#linkprefetchedclass"},{name:S,to:L},{name:G,to:"#mode"},{name:"parseQuery / stringifyQuery",to:"#parsequery-stringifyquery"},{name:"prefetchLinks",to:"#prefetchlinks"},{name:"scrollBehavior",to:"#scrollbehavior"}]},{name:"server",to:"/configuration-server"},{name:"serverMiddleware",to:"/configuration-servermiddleware"},{name:"srcDir",to:"/configuration-srcdir"},{name:"dir",to:"/configuration-dir"},{name:j,to:"/configuration-transition"},{name:"vue.config",to:"/configuration-vue-config"},{name:D,to:"/configuration-watch"},{name:"globalName",to:"/configuration-global-name"},{name:"watchers",to:"/configuration-watchers",contents:[{name:"chokidar",to:"#chokidar"},{name:"webpack",to:q}]}]},{title:"Programmatically",links:[{name:"Usage",to:"/nuxt"},{name:M,to:"/nuxt-render"},{name:"renderRoute",to:"/nuxt-render-route"},{name:"renderAndGetWindow",to:"/nuxt-render-and-get-window"}]},{title:"Internals",links:[{name:"Intro",to:"/internals"},{name:"Nuxt",to:"/internals-nuxt"},{name:"Renderer",to:"/internals-renderer"},{name:"Module Container",to:"/internals-module-container"},{name:"Builder",to:"/internals-builder"},{name:"Generator",to:"/internals-generator"}]}],faq:[{title:a,links:[{name:"How to use external resources?",to:""},{name:"How to use pre-processors?",to:"/pre-processors"},{name:"How to use JSX?",to:"/jsx"},{name:"How to add PostCSS plugins?",to:"/postcss-plugins"},{name:"How to extend webpack config?",to:"/extend-webpack"},{name:"How to add webpack plugins?",to:"/webpack-plugins"},{name:"How to edit HOST and PORT?",to:"/host-port"},{name:"How to use cached components?",to:"/cached-components"},{name:"How to use Google Analytics?",to:"/google-analytics"},{name:"How to share cross origin resource?",to:"/http-proxy"},{name:b,to:"/webpack-audio-files"}]},{title:"Development",links:[{name:"window/document undefined?",to:"/window-document-undefined"},{name:"Why a CSS Flash appears?",to:"/css-flash"},{name:"Async data in components?",to:"/async-data-components"},{name:"Duplicated Meta Tags?",to:"/duplicated-meta-tags"},{name:"iOS and phone numbers",to:"/ios-phone-numbers"}]},{title:"Deployment",links:[{name:"Deploy on AWS w/ S3 and Cloudfront",to:"/deployment-aws-s3-cloudfront"},{name:"Deploy on Azure Portal",to:"/deployment-azure-portal"},{name:"Deploy on Dokku",to:"/dokku-deployment"},{name:"Deploy on GitHub",to:"/github-pages"},{name:"Deploy on Google App Engine",to:"/appengine-deployment"},{name:"Deploy on Heroku",to:"/heroku-deployment"},{name:"Deploy on Netlify",to:"/netlify-deployment"},{name:"Deploy on Now",to:"/now-deployment"},{name:"Deploy on Surge",to:"/surge-deployment"},{name:"Using nginx as a proxy",to:"/nginx-proxy"}]}],guide:[{title:"Prologue",links:[{to:"",name:W,contents:[{to:"#what-is-nuxt-js-",name:"What is Nuxt.js?"},{to:"#how-it-works",name:"How it Works"},{to:"#features",name:"Features"},{to:"#schema",name:"Schema"},{to:"#server-rendered-universal-ssr-",name:"Server Rendered"},{to:"#single-page-applications-spa-",name:"Single Page Application"},{to:"#static-generated-pre-rendering-",name:"Static Generated"}]},{to:"/contribution-guide",name:"Contribution Guide"},{to:"/release-notes",name:R}]},{title:"Getting Started",links:[{to:"/installation",name:"Installation",contents:[{to:"#using-nuxt-js-starter-template",name:"Using Nuxt.js starter template"},{to:"#starting-from-scratch",name:"Starting from scratch"}]},{to:"/directory-structure",name:"Directory Structure",contents:[{to:"#directories",name:"Directories"},{to:"#aliases",name:"Aliases"}]},{to:"/configuration",name:a},{to:"/routing",name:"Routing",contents:[{to:"#basic-routes",name:"Basic Routes"},{to:"#dynamic-routes",name:"Dynamic Routes"},{to:"#nested-routes",name:u},{to:"#dynamic-nested-routes",name:"Dynamic Nested Routes"},{to:"#named-views",name:d},{to:"#transitions",name:"Transitions"},{to:L,name:m}]},{to:"/views",name:"Views",contents:[{to:"#document",name:"Document"},{to:"#layouts",name:c},{to:"#pages",name:r},{to:"#html-head",name:"HTML Head"}]},{to:f,name:h,contents:[{to:"#the-asyncdata-method",name:"The asyncData Method"},{to:"#the-context",name:"The Context"},{to:"#handling-errors",name:"Handling Errors"}]},{to:"/assets",name:"Assets",contents:[{to:q,name:"Webpack"},{to:V,name:"Static"}]},{to:g,name:p,contents:[{to:"#external-packages",name:"External Packages"},{to:"#vue-plugins",name:"Vue Plugins"},{to:"#inject-in-root-amp-context",name:"Inject in $root & context"},{to:"#client-side-only",name:"Client-side only"}]},{to:"/modules",name:"Modules",contents:[{to:"#introduction",name:W},{to:"#list-of-nuxt-js-modules",name:"List of Nuxt.js modules"},{to:"#write-a-basic-module",name:"Write a basic Module"},{to:"#async-modules",name:"Async Modules"},{to:"#common-snippets",name:"Common Snippets"},{to:"#run-tasks-on-specific-hooks",name:"Run Tasks on Specific hooks"},{to:"#module-package-commands",name:"Module package commands"}]},{to:y,name:n,contents:[{to:"#activate-the-store",name:"Activate the Store"},{to:"#modules-mode",name:"Modules mode"},{to:"#the-fetch-method",name:"The fetch Method"},{to:"#the-nuxtserverinit-action",name:"The nuxtServerInit Action"},{to:"#classic-mode",name:"Classic mode"}]},{to:w,name:"TypeScript Support",contents:[{to:"#get-started",name:"Get started"},{to:"#from-javascript-to-typescript",name:"From JavaScript to TypeScript"},{to:"#linting-with-eslint",name:"Linting with ESLint"}]},{to:"/commands",name:"Commands and Deployment",contents:[{to:"#list-of-commands",name:"List of Commands"},{to:"#development-environment",name:"Development Enviroment"},{to:"#production-deployment",name:"Production Deployment"}]},{to:"/development-tools",name:"Development Tools",contents:[{to:"#end-to-end-testing",name:"End-to-End Testing"},{to:"#eslint-and-prettier",name:"ESLint and Prettier"}]}]}]},homepage:{index:{attrs:{fallback:e},body:""},backers:{attrs:{title:"Support the Team",fallback:e},body:"Nuxt.js is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. Your donations directly support office hours, continued enhancements, and most importantly, great documentation and learning material.<br>"},modes_single_page_app:{attrs:{title:"Single Page App",content_title:"Single Page Application (SPA)",fallback:e},body:"Don&#39;t need SSR or Static Site Generation but still want to profit from the benefits that Nuxt provides?\nAre you slowly transitioning your app and want to start lightweight? Then the traditional SPA mode will\nlikely be your choice.\nThe outcome will be a typical Vue SPA as you know it but influenced by your Nuxt configuration and the\nframework itself.<br>"},modes_server_side_rendering:{attrs:{title:"Server Side Rendered",content_title:"Server Side Rendered (Universal)",fallback:e},body:"The most popular mode for Nuxt. With SSR, also called &quot;universal&quot; or &quot;isomorphic&quot; mode, a Node.js server\nwill be used to deliver HTML based on your Vue components to the client instead of the pure javascript.\nUsing SSR will lead to a large SEO boost, better UX and more opportunities (compared to a traditional Vue SPA).<br><br>\nBecause implementing SSR on your own can be really tedious, Nuxt.js gives you full support out of the box\nand will take care of common pitfalls.<br>"},modes_statically_generated:{attrs:{title:"Statically Generated",content_title:"Statically Generated (Pre-Rendering)",fallback:e},body:'Static Site Generation is a very hot topic right now! Instead of switching to another framework and\nspending time to get used to it, why not killing two birds with one stone?\n<span style="color: #777">(only proverbial 🐦🐦)</span><br><br>\nNuxt.js supports generating a static website based on your Vue application. It is the &quot;best of both worlds&quot;\nas you don&#39;t need a server but still have SEO benefits because Nuxt will pre-render all pages and include\nthe necessary HTML. Also, you can deploy the resulting page easily to Netlify or GitHub pages.<br>'},modes:{attrs:{title:"Rendering modes",fallback:e},body:"NO CONTENTS<br>"},welcome_figure:{attrs:{title:"Welcome figure - video",fallback:e},body:'Video produced by <a href="https://www.vuemastery.com" target="_blank" rel="noopener">Vue Mastery</a>, download their free <a href="https://www.vuemastery.com/nuxt-cheat-sheet/" target="_blank" rel="noopener">Nuxt Cheat Sheet</a>.<br>'},welcome:{attrs:{title:'The <span class="nWelcome_Content_Title_Primary">Vue.js</span> Framework',fallback:e},body:"Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable.<br>"},why_modular:{attrs:{title:"Modular",fallback:e},body:"Nuxt is based on a powerful modular architecture. You can choose from more than 50 modules to make your development faster and easier. You don&#39;t have to reinvent the wheel to get PWA benefits, add Google Analytics to your page or generate a sitemap.<br>"},why_enjoyable:{attrs:{title:"Enjoyable",fallback:e},body:"Our main focus is the Developer Experience. We love Nuxt.js and continuously improve the framework so you love it too! 💚<br>Expect appealing solutions, descriptive error messages, powerful defaults and detailed documentation. If questions or problems come up, our helpful community will help you out.<br>"},why_performant:{attrs:{title:"Performant",fallback:e},body:"With Nuxt.js, your application will be optimized out of the box.\nWe do our best to build performant applications by utilizing Vue.js and Node.js best practices.\nTo squeeze every unnecessary bit out of your app Nuxt includes a bundle analyzer and lots of opportunities to fine-tune your app.<br>"},why:{attrs:{title:"Why Nuxt?",fallback:e},body:""}},adBlocked:!1},serverRendered:e}}(!0,0,0,"Vuex Store","Configuration","fallback","#fallback","Pages","2.8.X","Layouts","Middleware","Named Views","Nested Routes","Plugins","/plugins","Async Data","/async-data","How to extend Webpack config to load audio files?","/vuex-store","/typescript",0,"head","loading","middleware","transition","Sponsors","devtools","#devtools","plugins",0,"#ssr","watch",0,"Release Notes","Hello World","mode","render","#static","#middleware","#webpack","Introduction")