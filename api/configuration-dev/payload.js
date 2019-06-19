window.__NUXT__=function(e,t,o,n,a,s,i,r,l,c,d,m,p,u,h,g,f,y,b,w,v,k,x,S,j,_,N,P,T,A,D,C,E,H,R,V,G,M,O,L){return{layout:"default",data:[{},{attrs:{title:"API: The dev Property",description:"Define the development or production mode."},body:'<h1><a id="the-dev-property" class="anchor" aria-hidden="true" href="#the-dev-property"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>The dev Property</h1><ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>true</code></li>\n</ul>\n<blockquote>\n<p>Define the development or production mode of Nuxt.js.</p>\n</blockquote>\n<p>This property is overwritten by <a href="/guide/commands">nuxt commands</a>:</p>\n<ul>\n<li><code>dev</code> is forced to <code>true</code> with <code>nuxt</code></li>\n<li><code>dev</code> is forced to <code>false</code> with <code>nuxt build</code>, <code>nuxt start</code> and <code>nuxt generate</code></li>\n</ul>\n<p>This property should be used when using <a href="/api/nuxt">Nuxt.js programmatically</a>:</p>\n<p>Example:</p>\n<p><code>nuxt.config.js</code></p>\n<pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">dev</span>: (process.env.NODE_ENV !== <span class="hljs-string">\'production\'</span>)\n}</code></pre><p><code>server.js</code></p>\n<pre><code class="hljs js"><span class="hljs-keyword">const</span> { Nuxt, Builder } = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'nuxt\'</span>)\n<span class="hljs-keyword">const</span> app = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'express\'</span>)()\n<span class="hljs-keyword">const</span> port = process.env.PORT || <span class="hljs-number">3000</span>\n\n<span class="hljs-comment">// We instantiate Nuxt.js with the options</span>\n<span class="hljs-keyword">let</span> config = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'./nuxt.config.js\'</span>)\n<span class="hljs-keyword">const</span> nuxt = <span class="hljs-keyword">new</span> Nuxt(config)\napp.use(nuxt.render)\n\n<span class="hljs-comment">// Build only in dev mode</span>\n<span class="hljs-keyword">if</span> (config.dev) {\n  <span class="hljs-keyword">new</span> Builder(nuxt).build()\n}\n\n<span class="hljs-comment">// Listen the server</span>\napp.listen(port, <span class="hljs-string">\'0.0.0.0\'</span>).then(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`Server is listening on port: <span class="hljs-subst">${port}</span>`</span>)\n})</code></pre><p>Then in your <code>package.json</code>:</p>\n<pre><code class="hljs json">{\n  <span class="hljs-attr">"scripts"</span>: {\n    <span class="hljs-attr">"dev"</span>: <span class="hljs-string">"node server.js"</span>,\n    <span class="hljs-attr">"build"</span>: <span class="hljs-string">"nuxt build"</span>,\n    <span class="hljs-attr">"start"</span>: <span class="hljs-string">"cross-env NODE_ENV=production node server.js"</span>\n  }\n}</code></pre><p>Note: You&#39;ll need to run <code>npm install --save-dev cross-env</code> for the above example to work. If you&#39;re <em>not</em> developing on Windows you can leave <code>cross-env</code> out of your <code>start</code> script and set <code>NODE_ENV</code> directly.</p>\n',docLink:"https://github.com/nuxt/docs/blob/master/en/api/configuration-dev.md"}],error:null,state:{filled:e,docVersion:v,ghVersion:"v2.8.1",visibleHeader:!1,visibleAffix:!1,locale:"en",lang:{iso:"en",docVersion:v,links:{api:"API",blog:"Blog",chat:"Chat",documentation:"Documentation",download:"Download",examples:"Examples",ecosystem:"Ecosystem",faq:"FAQ",get_started:"get started",github:"GitHub",guide:"Guide",homepage:"Home page",live_demo:"Live Demo",live_edit:"Live Edit",tidelift_short:"GET PROFESSIONAL SUPPORT",official_support:"GET OFFICIAL SUPPORT ⛑",tidelift:"GET PROFESSIONAL SUPPORT FOR NUXT",twitter:"Twitter",vuejs:"Vue.js",vue_jobs:"Vue Jobs"},text:{an_error_occurred:"An error occurred",api_page_not_found:"API page not found",example_file:"Example Files",please_wait:"Please wait...",please_define_title:"Please define a title in the front matter",please_define_description:"Please define a description in the front matter",search:"Search",version:"Version"},homepage:{title:"The Vue.js Framework",meta:{title:"Nuxt.js - The Vue.js Framework",description:"Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable. Nuxt.js can produce Universal, Single Page and Static Generated Applications."},welcome:{app_types_prefix:"For ",app_types:["Universal Applications","Static Generated Applications","Single Page Applications","Desktop Applications","Mobile Applications","Progressive Web Apps"],app_types_suffix:"."},codesandbox_title:"Play with Nuxt.js online",codesandbox_open:"Open on CodeSandBox.io",codesandbox_examples:"See more examples",backer_partners:"Partners",backer_become_a_partner:"Become A Partner",backer_sponsors:P,backer_become_a_sponsor:"Become A Sponsor",backer_backers:"Backers",backer_become_a_backer:"Become A Backer",backer_foundations:"Foundations"},sponsors:{title:P,become:"Support us and",become_partner:"become a partner"},footer:{authors:"Made by Chopin Brothers"},guide:{release_notes:w,contribute:"Caught a mistake or want to contribute to the documentation?",edit_on_github:"Edit this page on GitHub!"},examples:{source_code:"Source Code"}},menu:{api:[{title:"Essential",links:[{name:"Context",to:"/context"}]},{title:m,links:[{name:"asyncData",to:"/"},{name:"fetch",to:"/pages-fetch"},{name:l,to:"/pages-head"},{name:"key",to:"/pages-key"},{name:"layout",to:"/pages-layout"},{name:S,to:"/pages-loading"},{name:c,to:"/pages-middleware"},{name:"scrollToTop",to:"/pages-scrolltotop"},{name:d,to:"/pages-transition",contents:[{name:"String",to:"#string"},{name:"Object",to:"#object"},{name:"Function",to:"#function"}]},{name:"validate",to:"/pages-validate"},{name:"watchQuery",to:"/pages-watchquery"}]},{title:"Components",links:[{name:"nuxt",to:"/components-nuxt"},{name:"nuxt-child",to:"/components-nuxt-child"},{name:"nuxt-link",to:"/components-nuxt-link"},{name:"no-ssr",to:"/components-no-ssr"}]},{title:"Utils",links:[{name:"$nuxt",to:"/$nuxt"}]},{title:i,links:[{name:"build",to:"/configuration-build",contents:[{name:"analyze",to:"#analyze"},{name:"babel",to:"#babel"},{name:"cache",to:"#cache"},{name:"crossorigin",to:"#crossorigin"},{name:"cssSourceMap",to:"#csssourcemap"},{name:"devMiddleware",to:"#devmiddleware"},{name:p,to:u},{name:"extend",to:"#extend"},{name:"extractCSS",to:"#extractcss"},{name:"filenames",to:"#filenames"},{name:"friendlyErrors",to:"#friendlyerrors"},{name:"hardSource",to:"#hardsource"},{name:"hotMiddleware",to:"#hotmiddleware"},{name:"html.minify",to:"#html-minify"},{name:"indicator",to:"#indicator"},{name:"loaders",to:"#loaders"},{name:"optimization",to:"#optimization"},{name:"optimizeCSS",to:"#optimizecss"},{name:"parallel",to:"#parallel"},{name:h,to:"#plugins"},{name:"postcss",to:"#postcss"},{name:"profile",to:"#profile"},{name:"publicPath",to:"#publicpath"},{name:"quiet",to:"#quiet"},{name:"splitChunks",to:"#splitchunks"},{name:"ssr",to:f},{name:"styleResources",to:"#styleresources"},{name:"templates",to:"#templates"},{name:"terser",to:"#terser"},{name:"transpile",to:"#transpile"},{name:"typescript",to:"#typescript"},{name:"vueLoader",to:"#vueloader"},{name:y,to:"#watch"}]},{name:"buildDir",to:"/configuration-builddir"},{name:"css",to:"/configuration-css"},{name:"dev",to:"/configuration-dev"},{name:"env",to:"/configuration-env"},{name:"generate",to:"/configuration-generate",contents:[{name:"dir",to:"#dir"},{name:p,to:u},{name:s,to:a},{name:"interval",to:"#interval"},{name:"minify",to:"#minify"},{name:"routes",to:"#routes"},{name:"subFolders",to:"#subfolders"},{name:"concurrency",to:"#concurrency"}]},{name:l,to:"/configuration-head"},{name:"hooks",to:"/configuration-hooks"},{name:"ignore",to:"/configuration-ignore"},{name:S,to:"/configuration-loading",contents:[{name:"Disable the Progress Bar",to:"#disable-the-progress-bar"},{name:"Customize the Progress Bar",to:"#customize-the-progress-bar"},{name:"Use a Custom Loading Component",to:"#use-a-custom-loading-component"},{name:"Internals of the Progress Bar",to:"#internals-of-the-progress-bar"}]},{name:"loadingIndicator",to:"/configuration-loading-indicator"},{name:k,to:"/configuration-mode"},{name:"modern",to:"/configuration-modern"},{name:"modules",to:"/configuration-modules"},{name:"modulesDir",to:"/configuration-modulesdir"},{name:h,to:"/configuration-plugins"},{name:x,to:"/configuration-render",contents:[{name:"bundleRenderer",to:"#bundlerenderer"},{name:"etag",to:"#etag"},{name:"compressor",to:"#compressor"},{name:s,to:a},{name:"http2",to:"#http2"},{name:"injectScripts",to:"#injectscripts"},{name:"resourceHints",to:"#resourcehints"},{name:"ssr",to:f},{name:"ssrLog",to:"#ssrlog"},{name:"static",to:r},{name:"dist",to:"#dist"},{name:"csp",to:"#csp"}]},{name:"rootDir",to:"/configuration-rootdir"},{name:"router",to:"/configuration-router",contents:[{name:"base",to:"#base"},{name:"routeNameSplitter",to:"#routenamesplitter"},{name:"extendRoutes",to:"#extendroutes"},{name:s,to:a},{name:"linkActiveClass",to:"#linkactiveclass"},{name:"linkExactActiveClass",to:"#linkexactactiveclass"},{name:"linkPrefetchedClass",to:"#linkprefetchedclass"},{name:c,to:j},{name:k,to:"#mode"},{name:"parseQuery / stringifyQuery",to:"#parsequery-stringifyquery"},{name:"prefetchLinks",to:"#prefetchlinks"},{name:"scrollBehavior",to:"#scrollbehavior"}]},{name:"server",to:"/configuration-server"},{name:"serverMiddleware",to:"/configuration-servermiddleware"},{name:"srcDir",to:"/configuration-srcdir"},{name:"dir",to:"/configuration-dir"},{name:d,to:"/configuration-transition"},{name:"vue.config",to:"/configuration-vue-config"},{name:y,to:"/configuration-watch"},{name:"globalName",to:"/configuration-global-name"},{name:"watchers",to:"/configuration-watchers",contents:[{name:"chokidar",to:"#chokidar"},{name:"webpack",to:_}]}]},{title:"Programmatically",links:[{name:"Usage",to:"/nuxt"},{name:x,to:"/nuxt-render"},{name:"renderRoute",to:"/nuxt-render-route"},{name:"renderAndGetWindow",to:"/nuxt-render-and-get-window"}]},{title:"Internals",links:[{name:"Intro",to:"/internals"},{name:"Nuxt",to:"/internals-nuxt"},{name:"Renderer",to:"/internals-renderer"},{name:"Module Container",to:"/internals-module-container"},{name:"Builder",to:"/internals-builder"},{name:"Generator",to:"/internals-generator"}]}],examples:[{title:"Essentials",links:[{name:N,to:""},{name:"SEO HTML Head",to:"/seo-html-head"}]},{title:"Customization",links:[{name:"Custom Loading",to:"/custom-loading"},{name:"Custom Page Loading",to:"/custom-page-loading"},{name:"Custom Routes",to:"/custom-routes"},{name:"Global CSS",to:"/global-css"},{name:T,to:"/layouts"},{name:A,to:"/middleware"},{name:D,to:"/named-views"},{name:C,to:"/nested-routes"},{name:E,to:H},{name:"Routes transitions",to:"/routes-transitions"}]},{title:"Advanced",links:[{name:R,to:V},{name:"Auth Routes",to:"/auth-routes"},{name:"Auth External API (JWT)",to:"/auth-external-jwt"},{name:n,to:M},{name:"i18n",to:"/i18n"},{name:"Testing",to:"/testing"}]},{title:"TypeScript",links:[{name:N,to:O},{name:n,to:"/typescript-vuex"}]}],guide:[{title:"Prologue",links:[{to:"",name:L,contents:[{to:"#what-is-nuxt-js-",name:"What is Nuxt.js?"},{to:"#how-it-works",name:"How it Works"},{to:"#features",name:"Features"},{to:"#schema",name:"Schema"},{to:"#server-rendered-universal-ssr-",name:"Server Rendered"},{to:"#single-page-applications-spa-",name:"Single Page Application"},{to:"#static-generated-pre-rendering-",name:"Static Generated"}]},{to:"/contribution-guide",name:"Contribution Guide"},{to:"/release-notes",name:w}]},{title:"Getting Started",links:[{to:"/installation",name:"Installation",contents:[{to:"#using-nuxt-js-starter-template",name:"Using Nuxt.js starter template"},{to:"#starting-from-scratch",name:"Starting from scratch"}]},{to:"/directory-structure",name:"Directory Structure",contents:[{to:"#directories",name:"Directories"},{to:"#aliases",name:"Aliases"}]},{to:"/configuration",name:i},{to:"/routing",name:"Routing",contents:[{to:"#basic-routes",name:"Basic Routes"},{to:"#dynamic-routes",name:"Dynamic Routes"},{to:"#nested-routes",name:C},{to:"#dynamic-nested-routes",name:"Dynamic Nested Routes"},{to:"#named-views",name:D},{to:"#transitions",name:"Transitions"},{to:j,name:A}]},{to:"/views",name:"Views",contents:[{to:"#document",name:"Document"},{to:"#layouts",name:T},{to:"#pages",name:m},{to:"#html-head",name:"HTML Head"}]},{to:V,name:R,contents:[{to:"#the-asyncdata-method",name:"The asyncData Method"},{to:"#the-context",name:"The Context"},{to:"#handling-errors",name:"Handling Errors"}]},{to:"/assets",name:"Assets",contents:[{to:_,name:"Webpack"},{to:r,name:"Static"}]},{to:H,name:E,contents:[{to:"#external-packages",name:"External Packages"},{to:"#vue-plugins",name:"Vue Plugins"},{to:"#inject-in-root-amp-context",name:"Inject in $root & context"},{to:"#client-side-only",name:"Client-side only"}]},{to:"/modules",name:"Modules",contents:[{to:"#introduction",name:L},{to:"#list-of-nuxt-js-modules",name:"List of Nuxt.js modules"},{to:"#write-a-basic-module",name:"Write a basic Module"},{to:"#async-modules",name:"Async Modules"},{to:"#common-snippets",name:"Common Snippets"},{to:"#run-tasks-on-specific-hooks",name:"Run Tasks on Specific hooks"},{to:"#module-package-commands",name:"Module package commands"}]},{to:M,name:n,contents:[{to:"#activate-the-store",name:"Activate the Store"},{to:"#modules-mode",name:"Modules mode"},{to:"#the-fetch-method",name:"The fetch Method"},{to:"#the-nuxtserverinit-action",name:"The nuxtServerInit Action"},{to:"#classic-mode",name:"Classic mode"}]},{to:O,name:"TypeScript Support",contents:[{to:"#get-started",name:"Get started"},{to:"#from-javascript-to-typescript",name:"From JavaScript to TypeScript"},{to:"#linting-with-eslint",name:"Linting with ESLint"}]},{to:"/commands",name:"Commands and Deployment",contents:[{to:"#list-of-commands",name:"List of Commands"},{to:"#development-environment",name:"Development Enviroment"},{to:"#production-deployment",name:"Production Deployment"}]},{to:"/development-tools",name:"Development Tools",contents:[{to:"#end-to-end-testing",name:"End-to-End Testing"},{to:"#eslint-and-prettier",name:"ESLint and Prettier"}]}]}],faq:[{title:i,links:[{name:"How to use external resources?",to:""},{name:"How to use pre-processors?",to:"/pre-processors"},{name:"How to use JSX?",to:"/jsx"},{name:"How to add PostCSS plugins?",to:"/postcss-plugins"},{name:"How to extend webpack config?",to:"/extend-webpack"},{name:"How to add webpack plugins?",to:"/webpack-plugins"},{name:"How to edit HOST and PORT?",to:"/host-port"},{name:"How to use cached components?",to:"/cached-components"},{name:"How to use Google Analytics?",to:"/google-analytics"},{name:"How to share cross origin resource?",to:"/http-proxy"},{name:"How to extend Webpack config to load audio files?",to:"/webpack-audio-files"}]},{title:"Development",links:[{name:"window/document undefined?",to:"/window-document-undefined"},{name:"Why a CSS Flash appears?",to:"/css-flash"},{name:"Async data in components?",to:"/async-data-components"},{name:"Duplicated Meta Tags?",to:"/duplicated-meta-tags"},{name:"iOS and phone numbers",to:"/ios-phone-numbers"}]},{title:"Deployment",links:[{name:"Deploy on AWS w/ S3 and Cloudfront",to:"/deployment-aws-s3-cloudfront"},{name:"Deploy on Azure Portal",to:"/deployment-azure-portal"},{name:"Deploy on Dokku",to:"/dokku-deployment"},{name:"Deploy on GitHub",to:"/github-pages"},{name:"Deploy on Google App Engine",to:"/appengine-deployment"},{name:"Deploy on Heroku",to:"/heroku-deployment"},{name:"Deploy on Netlify",to:"/netlify-deployment"},{name:"Deploy on Now",to:"/now-deployment"},{name:"Deploy on Surge",to:"/surge-deployment"},{name:"Using nginx as a proxy",to:"/nginx-proxy"}]}]},homepage:{backers:{attrs:{title:"Support the Team",fallback:e},body:"Nuxt.js is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. Your donations directly support office hours, continued enhancements, and most importantly, great documentation and learning material.<br>"},modes_server_side_rendering:{attrs:{title:"Server Side Rendered",content_title:"Server Side Rendered (Universal)",fallback:e},body:"The most popular mode for Nuxt. With SSR, also called &quot;universal&quot; or &quot;isomorphic&quot; mode, a Node.js server\nwill be used to deliver HTML based on your Vue components to the client instead of the pure javascript.\nUsing SSR will lead to a large SEO boost, better UX and more opportunities (compared to a traditional Vue SPA).<br><br>\nBecause implementing SSR on your own can be really tedious, Nuxt.js gives you full support out of the box\nand will take care of common pitfalls.<br>"},index:{attrs:{fallback:e},body:""},modes_single_page_app:{attrs:{title:"Single Page App",content_title:"Single Page Application (SPA)",fallback:e},body:"Don&#39;t need SSR or Static Site Generation but still want to profit from the benefits that Nuxt provides?\nAre you slowly transitioning your app and want to start lightweight? Then the traditional SPA mode will\nlikely be your choice.\nThe outcome will be a typical Vue SPA as you know it but influenced by your Nuxt configuration and the\nframework itself.<br>"},modes_statically_generated:{attrs:{title:"Statically Generated",content_title:"Statically Generated (Pre-Rendering)",fallback:e},body:'Static Site Generation is a very hot topic right now! Instead of switching to another framework and\nspending time to get used to it, why not killing two birds with one stone?\n<span style="color: #777">(only proverbial 🐦🐦)</span><br><br>\nNuxt.js supports generating a static website based on your Vue application. It is the &quot;best of both worlds&quot;\nas you don&#39;t need a server but still have SEO benefits because Nuxt will pre-render all pages and include\nthe necessary HTML. Also, you can deploy the resulting page easily to Netlify or GitHub pages.<br>'},modes:{attrs:{title:"Rendering modes",fallback:e},body:"NO CONTENTS<br>"},welcome_figure:{attrs:{title:"Welcome figure - video",fallback:e},body:'Video produced by <a href="https://www.vuemastery.com" target="_blank" rel="noopener">Vue Mastery</a>, download their free <a href="https://www.vuemastery.com/nuxt-cheat-sheet/" target="_blank" rel="noopener">Nuxt Cheat Sheet</a>.<br>'},welcome:{attrs:{title:'The <span class="nWelcome_Content_Title_Primary">Vue.js</span> Framework',fallback:e},body:"Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable.<br>"},why_enjoyable:{attrs:{title:"Enjoyable",fallback:e},body:"Our main focus is the Developer Experience. We love Nuxt.js and continuously improve the framework so you love it too! 💚<br>Expect appealing solutions, descriptive error messages, powerful defaults and detailed documentation. If questions or problems come up, our helpful community will help you out.<br>"},why_modular:{attrs:{title:"Modular",fallback:e},body:"Nuxt is based on a powerful modular architecture. You can choose from more than 50 modules to make your development faster and easier. You don&#39;t have to reinvent the wheel to get PWA benefits, add Google Analytics to your page or generate a sitemap.<br>"},why_performant:{attrs:{title:"Performant",fallback:e},body:"With Nuxt.js, your application will be optimized out of the box.\nWe do our best to build performant applications by utilizing Vue.js and Node.js best practices.\nTo squeeze every unnecessary bit out of your app Nuxt includes a bundle analyzer and lots of opportunities to fine-tune your app.<br>"},why:{attrs:{title:"Why Nuxt?",fallback:e},body:""}},adBlocked:!1},serverRendered:e}}(!0,0,0,"Vuex Store","#fallback","fallback","Configuration","#static","head","middleware","transition","Pages","devtools","#devtools","plugins",0,"#ssr","watch",0,"Release Notes","2.8.X","mode","render","loading","#middleware","#webpack","Hello World","Sponsors","Layouts","Middleware","Named Views","Nested Routes","Plugins","/plugins","Async Data","/async-data",0,"/vuex-store","/typescript","Introduction")