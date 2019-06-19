window.__NUXT__=function(e,n,t,s,a,o,l,r,i,c,p,d,m,u,h,g,f,y,j,b,w,v,k,x,S,_,A,N,P,T,C,H,D,E,R,L,V,q,M,G,W){return{layout:"default",data:[{},{attrs:{title:w,description:"Nuxt.js helps you to make your web development enjoyable."},body:'<blockquote>\n<p>Testing your application is part of the web development. Nuxt.js helps you to make it as easy as possible.</p>\n</blockquote>\n<h2><a id="end-to-end-testing" class="anchor" aria-hidden="true" href="#end-to-end-testing"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>End-to-End Testing</h2><p><a href="https://github.com/avajs/ava">AVA</a> is a powerful JavaScript testing framework, mixed with <a href="https://github.com/tmpvar/jsdom">jsdom</a>, we can use them to do end-to-end testing easily.</p>\n<p>First, we need to add AVA and jsdom as development dependencies:</p>\n<pre><code class="hljs bash">npm install --save-dev ava jsdom</code></pre><p>Then add a test script to our <code>package.json</code> and configure AVA to compile files that we import into our tests.</p>\n<pre><code class="hljs javascript"><span class="hljs-string">"scripts"</span>: {\n  <span class="hljs-string">"test"</span>: <span class="hljs-string">"ava"</span>,\n},\n<span class="hljs-string">"ava"</span>: {\n  <span class="hljs-string">"require"</span>: [\n    <span class="hljs-string">"babel-register"</span>\n  ]\n},\n<span class="hljs-string">"babel"</span>: {\n  <span class="hljs-string">"presets"</span>: [\n    <span class="hljs-string">"env"</span>\n  ]\n}</code></pre><p>We are going to write our tests in the <code>test</code> folder:</p>\n<pre><code class="hljs bash">mkdir <span class="hljs-built_in">test</span></code></pre><p>Let&#39;s say we have a page in <code>pages/index.vue</code>:</p>\n<pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"red"</span>&gt;</span>Hello {{ name }}!<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> { <span class="hljs-attr">name</span>: <span class="hljs-string">\'world\'</span> }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">\n<span class="hljs-selector-class">.red</span> {\n  <span class="hljs-attribute">color</span>: red;\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></code></pre><p>When we launch our app with <code>npm run dev</code> and open <a href="http://localhost:3000">http://localhost:3000</a>, we can see our red <code>Hello world!</code> title.</p>\n<p>We add our test file <code>test/index.test.js</code>:</p>\n<pre><code class="hljs js"><span class="hljs-keyword">import</span> test <span class="hljs-keyword">from</span> <span class="hljs-string">\'ava\'</span>\n<span class="hljs-keyword">import</span> { Nuxt, Builder } <span class="hljs-keyword">from</span> <span class="hljs-string">\'nuxt\'</span>\n<span class="hljs-keyword">import</span> { resolve } <span class="hljs-keyword">from</span> <span class="hljs-string">\'path\'</span>\n\n<span class="hljs-comment">// We keep a reference to Nuxt so we can close</span>\n<span class="hljs-comment">// the server at the end of the test</span>\n<span class="hljs-keyword">let</span> nuxt = <span class="hljs-literal">null</span>\n\n<span class="hljs-comment">// Init Nuxt.js and start listening on localhost:4000</span>\ntest.before(<span class="hljs-string">\'Init Nuxt.js\'</span>, <span class="hljs-keyword">async</span> t =&gt; {\n  <span class="hljs-keyword">const</span> rootDir = resolve(__dirname, <span class="hljs-string">\'..\'</span>)\n  <span class="hljs-keyword">let</span> config = {}\n  <span class="hljs-keyword">try</span> { config = <span class="hljs-built_in">require</span>(resolve(rootDir, <span class="hljs-string">\'nuxt.config.js\'</span>)) } <span class="hljs-keyword">catch</span> (e) {}\n  config.rootDir = rootDir <span class="hljs-comment">// project folder</span>\n  config.dev = <span class="hljs-literal">false</span> <span class="hljs-comment">// production build</span>\n  config.mode = <span class="hljs-string">\'universal\'</span> <span class="hljs-comment">// Isomorphic application</span>\n  nuxt = <span class="hljs-keyword">new</span> Nuxt(config)\n  <span class="hljs-keyword">await</span> <span class="hljs-keyword">new</span> Builder(nuxt).build()\n  nuxt.listen(<span class="hljs-number">4000</span>, <span class="hljs-string">\'localhost\'</span>)\n})\n\n<span class="hljs-comment">// Example of testing only generated html</span>\ntest(<span class="hljs-string">\'Route / exits and render HTML\'</span>, <span class="hljs-keyword">async</span> t =&gt; {\n  <span class="hljs-keyword">let</span> context = {}\n  <span class="hljs-keyword">const</span> { html } = <span class="hljs-keyword">await</span> nuxt.renderRoute(<span class="hljs-string">\'/\'</span>, context)\n  t.true(html.includes(<span class="hljs-string">\'&lt;h1 class="red"&gt;Hello world!&lt;/h1&gt;\'</span>))\n})\n\n<span class="hljs-comment">// Example of testing via DOM checking</span>\ntest(<span class="hljs-string">\'Route / exists and renders HTML with CSS applied\'</span>, <span class="hljs-keyword">async</span> t =&gt; {\n  <span class="hljs-keyword">const</span> <span class="hljs-built_in">window</span> = <span class="hljs-keyword">await</span> nuxt.renderAndGetWindow(<span class="hljs-string">\'http://localhost:4000/\'</span>)\n  <span class="hljs-keyword">const</span> element = <span class="hljs-built_in">window</span>.document.querySelector(<span class="hljs-string">\'.red\'</span>)\n  t.not(element, <span class="hljs-literal">null</span>)\n  t.is(element.textContent, <span class="hljs-string">\'Hello world!\'</span>)\n  t.is(element.className, <span class="hljs-string">\'red\'</span>)\n  t.is(<span class="hljs-built_in">window</span>.getComputedStyle(element).color, <span class="hljs-string">\'red\'</span>)\n})\n\n<span class="hljs-comment">// Close the Nuxt server</span>\ntest.after(<span class="hljs-string">\'Closing server\'</span>, t =&gt; {\n  nuxt.close()\n})</code></pre><p>We can now launch our tests:</p>\n<pre><code class="hljs bash">npm <span class="hljs-built_in">test</span></code></pre><p>jsdom has some limitations because it does not use a browser. However, it will cover most of our tests. If you want to use a browser to test your application, you might want to check out <a href="http://nightwatchjs.org">Nightwatch.js</a>.</p>\n<h2><a id="eslint-and-prettier" class="anchor" aria-hidden="true" href="#eslint-and-prettier"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>ESLint and Prettier</h2><blockquote>\n<p><a href="http://eslint.org">ESLint</a> is a great tool to keep your code clean.</p>\n</blockquote>\n<blockquote>\n<p><a href="https://prettier.io">Prettier</a> is a very popular code formatter.</p>\n</blockquote>\n<p>You can add ESLint with Prettier pretty easily with Nuxt.js, first, you need to add the npm dependencies:</p>\n<pre><code class="hljs bash">npm install --save-dev babel-eslint eslint eslint-config-prettier eslint-loader eslint-plugin-vue eslint-plugin-prettier prettier</code></pre><p>Then, you can configure ESLint via a <code>.eslintrc.js</code> file in your root project directory:</p>\n<pre><code class="hljs js"><span class="hljs-built_in">module</span>.exports = {\n  <span class="hljs-attr">root</span>: <span class="hljs-literal">true</span>,\n  <span class="hljs-attr">env</span>: {\n    <span class="hljs-attr">browser</span>: <span class="hljs-literal">true</span>,\n    <span class="hljs-attr">node</span>: <span class="hljs-literal">true</span>\n  },\n  <span class="hljs-attr">parserOptions</span>: {\n    <span class="hljs-attr">parser</span>: <span class="hljs-string">\'babel-eslint\'</span>\n  },\n  <span class="hljs-attr">extends</span>: [\n    <span class="hljs-string">"eslint:recommended"</span>,\n    <span class="hljs-comment">// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention</span>\n    <span class="hljs-comment">// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.</span>\n    <span class="hljs-string">"plugin:vue/recommended"</span>,\n    <span class="hljs-string">"plugin:prettier/recommended"</span>\n  ],\n  <span class="hljs-comment">// required to lint *.vue files</span>\n  plugins: [\n    <span class="hljs-string">\'vue\'</span>\n  ],\n  <span class="hljs-comment">// add your custom rules here</span>\n  rules: {\n    <span class="hljs-string">"semi"</span>: [<span class="hljs-number">2</span>, <span class="hljs-string">"never"</span>],\n    <span class="hljs-string">"no-console"</span>: <span class="hljs-string">"off"</span>,\n    <span class="hljs-string">"vue/max-attributes-per-line"</span>: <span class="hljs-string">"off"</span>,\n    <span class="hljs-string">"prettier/prettier"</span>: [<span class="hljs-string">"error"</span>, { <span class="hljs-string">"semi"</span>: <span class="hljs-literal">false</span> }]\n  }\n}</code></pre><p>Then, you can add <code>lint</code> and <code>lintfix</code> scripts to your <code>package.json</code>:</p>\n<pre><code class="hljs js"><span class="hljs-string">"scripts"</span>: {\n  <span class="hljs-string">"lint"</span>: <span class="hljs-string">"eslint --ext .js,.vue --ignore-path .gitignore ."</span>,\n  <span class="hljs-string">"lintfix"</span>: <span class="hljs-string">"eslint --fix --ext .js,.vue --ignore-path .gitignore ."</span>\n}</code></pre><p>You can now launch <code>lint</code> to check for errors:</p>\n<pre><code class="hljs bash">npm run lint</code></pre><p>or <code>lintfix</code> to also fix those which are doable</p>\n<pre><code class="hljs bash">npm run lintfix</code></pre><p>ESLint will lint all of your JavaScript and Vue files while ignoring your ignored files defined in your <code>.gitignore</code>.</p>\n<p>It is also recommended to enable ESLint hot reloading mode via webpack. This way ESLint will run on save during <code>npm run dev</code>. Just add the following to your <code>nuxt.config.js</code>:</p>\n<pre><code class="hljs js">...\n  <span class="hljs-comment">/*\n   ** Build configuration\n  */</span>\n  build: {\n   <span class="hljs-comment">/*\n    ** You can extend webpack config here\n   */</span>\n   extend(config, ctx) {\n      <span class="hljs-comment">// Run ESLint on save</span>\n      <span class="hljs-keyword">if</span> (ctx.isDev &amp;&amp; ctx.isClient) {\n        config.module.rules.push({\n          <span class="hljs-attr">enforce</span>: <span class="hljs-string">"pre"</span>,\n          <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\\.(js|vue)$/</span>,\n          <span class="hljs-attr">loader</span>: <span class="hljs-string">"eslint-loader"</span>,\n          <span class="hljs-attr">exclude</span>: <span class="hljs-regexp">/(node_modules)/</span>\n        })\n      }\n    }\n  }</code></pre><div class="Alert Alert--orange">\n\n<p>One best practice is to add also <code>&quot;precommit&quot;: &quot;npm run lint&quot;</code> in your package.json to lint your code automatically before commiting your code.</p>\n</div>\n',docLink:"https://github.com/nuxt/docs/blob/master/en/guide/development-tools.md"}],error:null,state:{filled:e,docVersion:m,ghVersion:"v2.8.1",visibleHeader:!1,visibleAffix:!1,locale:"en",lang:{iso:"en",docVersion:m,links:{api:"API",blog:"Blog",chat:"Chat",documentation:"Documentation",download:"Download",examples:"Examples",ecosystem:"Ecosystem",faq:"FAQ",get_started:"get started",github:"GitHub",guide:"Guide",homepage:"Home page",live_demo:"Live Demo",live_edit:"Live Edit",tidelift_short:"GET PROFESSIONAL SUPPORT",official_support:"GET OFFICIAL SUPPORT ⛑",tidelift:"GET PROFESSIONAL SUPPORT FOR NUXT",twitter:"Twitter",vuejs:"Vue.js",vue_jobs:"Vue Jobs"},text:{an_error_occurred:"An error occurred",api_page_not_found:"API page not found",example_file:"Example Files",please_wait:"Please wait...",please_define_title:"Please define a title in the front matter",please_define_description:"Please define a description in the front matter",search:"Search",version:"Version"},homepage:{title:"The Vue.js Framework",meta:{title:"Nuxt.js - The Vue.js Framework",description:"Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable. Nuxt.js can produce Universal, Single Page and Static Generated Applications."},welcome:{app_types_prefix:"For ",app_types:["Universal Applications","Static Generated Applications","Single Page Applications","Desktop Applications","Mobile Applications","Progressive Web Apps"],app_types_suffix:"."},codesandbox_title:"Play with Nuxt.js online",codesandbox_open:"Open on CodeSandBox.io",codesandbox_examples:"See more examples",backer_partners:"Partners",backer_become_a_partner:"Become A Partner",backer_sponsors:P,backer_become_a_sponsor:"Become A Sponsor",backer_backers:"Backers",backer_become_a_backer:"Become A Backer",backer_foundations:"Foundations"},sponsors:{title:P,become:"Support us and",become_partner:"become a partner"},footer:{authors:"Made by Chopin Brothers"},guide:{release_notes:q,contribute:"Caught a mistake or want to contribute to the documentation?",edit_on_github:"Edit this page on GitHub!"},examples:{source_code:"Source Code"}},menu:{api:[{title:"Essential",links:[{name:"Context",to:"/context"}]},{title:r,links:[{name:"asyncData",to:"/"},{name:"fetch",to:"/pages-fetch"},{name:i,to:"/pages-head"},{name:"key",to:"/pages-key"},{name:"layout",to:"/pages-layout"},{name:c,to:"/pages-loading"},{name:p,to:"/pages-middleware"},{name:"scrollToTop",to:"/pages-scrolltotop"},{name:d,to:"/pages-transition",contents:[{name:"String",to:"#string"},{name:"Object",to:"#object"},{name:"Function",to:"#function"}]},{name:"validate",to:"/pages-validate"},{name:"watchQuery",to:"/pages-watchquery"}]},{title:"Components",links:[{name:"nuxt",to:"/components-nuxt"},{name:"nuxt-child",to:"/components-nuxt-child"},{name:"nuxt-link",to:"/components-nuxt-link"},{name:"no-ssr",to:"/components-no-ssr"}]},{title:"Utils",links:[{name:"$nuxt",to:"/$nuxt"}]},{title:a,links:[{name:"build",to:"/configuration-build",contents:[{name:"analyze",to:"#analyze"},{name:"babel",to:"#babel"},{name:"cache",to:"#cache"},{name:"crossorigin",to:"#crossorigin"},{name:"cssSourceMap",to:"#csssourcemap"},{name:"devMiddleware",to:"#devmiddleware"},{name:u,to:h},{name:"extend",to:"#extend"},{name:"extractCSS",to:"#extractcss"},{name:"filenames",to:"#filenames"},{name:"friendlyErrors",to:"#friendlyerrors"},{name:"hardSource",to:"#hardsource"},{name:"hotMiddleware",to:"#hotmiddleware"},{name:"html.minify",to:"#html-minify"},{name:"indicator",to:"#indicator"},{name:"loaders",to:"#loaders"},{name:"optimization",to:"#optimization"},{name:"optimizeCSS",to:"#optimizecss"},{name:"parallel",to:"#parallel"},{name:g,to:"#plugins"},{name:"postcss",to:"#postcss"},{name:"profile",to:"#profile"},{name:"publicPath",to:"#publicpath"},{name:"quiet",to:"#quiet"},{name:"splitChunks",to:"#splitchunks"},{name:"ssr",to:y},{name:"styleResources",to:"#styleresources"},{name:"templates",to:"#templates"},{name:"terser",to:"#terser"},{name:"transpile",to:"#transpile"},{name:"typescript",to:"#typescript"},{name:"vueLoader",to:"#vueloader"},{name:j,to:"#watch"}]},{name:"buildDir",to:"/configuration-builddir"},{name:"css",to:"/configuration-css"},{name:"dev",to:"/configuration-dev"},{name:"env",to:"/configuration-env"},{name:"generate",to:"/configuration-generate",contents:[{name:"dir",to:"#dir"},{name:u,to:h},{name:t,to:o},{name:"interval",to:"#interval"},{name:"minify",to:"#minify"},{name:"routes",to:"#routes"},{name:"subFolders",to:"#subfolders"},{name:"concurrency",to:"#concurrency"}]},{name:i,to:"/configuration-head"},{name:"hooks",to:"/configuration-hooks"},{name:"ignore",to:"/configuration-ignore"},{name:c,to:"/configuration-loading",contents:[{name:"Disable the Progress Bar",to:"#disable-the-progress-bar"},{name:"Customize the Progress Bar",to:"#customize-the-progress-bar"},{name:"Use a Custom Loading Component",to:"#use-a-custom-loading-component"},{name:"Internals of the Progress Bar",to:"#internals-of-the-progress-bar"}]},{name:"loadingIndicator",to:"/configuration-loading-indicator"},{name:k,to:"/configuration-mode"},{name:"modern",to:"/configuration-modern"},{name:"modules",to:"/configuration-modules"},{name:"modulesDir",to:"/configuration-modulesdir"},{name:g,to:"/configuration-plugins"},{name:x,to:"/configuration-render",contents:[{name:"bundleRenderer",to:"#bundlerenderer"},{name:"etag",to:"#etag"},{name:"compressor",to:"#compressor"},{name:t,to:o},{name:"http2",to:"#http2"},{name:"injectScripts",to:"#injectscripts"},{name:"resourceHints",to:"#resourcehints"},{name:"ssr",to:y},{name:"ssrLog",to:"#ssrlog"},{name:"static",to:S},{name:"dist",to:"#dist"},{name:"csp",to:"#csp"}]},{name:"rootDir",to:"/configuration-rootdir"},{name:"router",to:"/configuration-router",contents:[{name:"base",to:"#base"},{name:"routeNameSplitter",to:"#routenamesplitter"},{name:"extendRoutes",to:"#extendroutes"},{name:t,to:o},{name:"linkActiveClass",to:"#linkactiveclass"},{name:"linkExactActiveClass",to:"#linkexactactiveclass"},{name:"linkPrefetchedClass",to:"#linkprefetchedclass"},{name:p,to:_},{name:k,to:"#mode"},{name:"parseQuery / stringifyQuery",to:"#parsequery-stringifyquery"},{name:"prefetchLinks",to:"#prefetchlinks"},{name:"scrollBehavior",to:"#scrollbehavior"}]},{name:"server",to:"/configuration-server"},{name:"serverMiddleware",to:"/configuration-servermiddleware"},{name:"srcDir",to:"/configuration-srcdir"},{name:"dir",to:"/configuration-dir"},{name:d,to:"/configuration-transition"},{name:"vue.config",to:"/configuration-vue-config"},{name:j,to:"/configuration-watch"},{name:"globalName",to:"/configuration-global-name"},{name:"watchers",to:"/configuration-watchers",contents:[{name:"chokidar",to:"#chokidar"},{name:"webpack",to:A}]}]},{title:"Programmatically",links:[{name:"Usage",to:"/nuxt"},{name:x,to:"/nuxt-render"},{name:"renderRoute",to:"/nuxt-render-route"},{name:"renderAndGetWindow",to:"/nuxt-render-and-get-window"}]},{title:"Internals",links:[{name:"Intro",to:"/internals"},{name:"Nuxt",to:"/internals-nuxt"},{name:"Renderer",to:"/internals-renderer"},{name:"Module Container",to:"/internals-module-container"},{name:"Builder",to:"/internals-builder"},{name:"Generator",to:"/internals-generator"}]}],examples:[{title:"Essentials",links:[{name:N,to:""},{name:"SEO HTML Head",to:"/seo-html-head"}]},{title:"Customization",links:[{name:"Custom Loading",to:"/custom-loading"},{name:"Custom Page Loading",to:"/custom-page-loading"},{name:"Custom Routes",to:"/custom-routes"},{name:"Global CSS",to:"/global-css"},{name:T,to:"/layouts"},{name:C,to:"/middleware"},{name:H,to:"/named-views"},{name:D,to:"/nested-routes"},{name:E,to:R},{name:"Routes transitions",to:"/routes-transitions"}]},{title:"Advanced",links:[{name:L,to:V},{name:"Auth Routes",to:"/auth-routes"},{name:"Auth External API (JWT)",to:"/auth-external-jwt"},{name:l,to:M},{name:"i18n",to:"/i18n"},{name:"Testing",to:"/testing"}]},{title:"TypeScript",links:[{name:N,to:G},{name:l,to:"/typescript-vuex"}]}],guide:[{title:"Prologue",links:[{to:"",name:W,contents:[{to:"#what-is-nuxt-js-",name:"What is Nuxt.js?"},{to:"#how-it-works",name:"How it Works"},{to:"#features",name:"Features"},{to:"#schema",name:"Schema"},{to:"#server-rendered-universal-ssr-",name:"Server Rendered"},{to:"#single-page-applications-spa-",name:"Single Page Application"},{to:"#static-generated-pre-rendering-",name:"Static Generated"}]},{to:"/contribution-guide",name:"Contribution Guide"},{to:"/release-notes",name:q}]},{title:"Getting Started",links:[{to:"/installation",name:"Installation",contents:[{to:"#using-nuxt-js-starter-template",name:"Using Nuxt.js starter template"},{to:"#starting-from-scratch",name:"Starting from scratch"}]},{to:"/directory-structure",name:"Directory Structure",contents:[{to:"#directories",name:"Directories"},{to:"#aliases",name:"Aliases"}]},{to:"/configuration",name:a},{to:"/routing",name:"Routing",contents:[{to:"#basic-routes",name:"Basic Routes"},{to:"#dynamic-routes",name:"Dynamic Routes"},{to:"#nested-routes",name:D},{to:"#dynamic-nested-routes",name:"Dynamic Nested Routes"},{to:"#named-views",name:H},{to:"#transitions",name:"Transitions"},{to:_,name:C}]},{to:"/views",name:"Views",contents:[{to:"#document",name:"Document"},{to:"#layouts",name:T},{to:"#pages",name:r},{to:"#html-head",name:"HTML Head"}]},{to:V,name:L,contents:[{to:"#the-asyncdata-method",name:"The asyncData Method"},{to:"#the-context",name:"The Context"},{to:"#handling-errors",name:"Handling Errors"}]},{to:"/assets",name:"Assets",contents:[{to:A,name:"Webpack"},{to:S,name:"Static"}]},{to:R,name:E,contents:[{to:"#external-packages",name:"External Packages"},{to:"#vue-plugins",name:"Vue Plugins"},{to:"#inject-in-root-amp-context",name:"Inject in $root & context"},{to:"#client-side-only",name:"Client-side only"}]},{to:"/modules",name:"Modules",contents:[{to:"#introduction",name:W},{to:"#list-of-nuxt-js-modules",name:"List of Nuxt.js modules"},{to:"#write-a-basic-module",name:"Write a basic Module"},{to:"#async-modules",name:"Async Modules"},{to:"#common-snippets",name:"Common Snippets"},{to:"#run-tasks-on-specific-hooks",name:"Run Tasks on Specific hooks"},{to:"#module-package-commands",name:"Module package commands"}]},{to:M,name:l,contents:[{to:"#activate-the-store",name:"Activate the Store"},{to:"#modules-mode",name:"Modules mode"},{to:"#the-fetch-method",name:"The fetch Method"},{to:"#the-nuxtserverinit-action",name:"The nuxtServerInit Action"},{to:"#classic-mode",name:"Classic mode"}]},{to:G,name:"TypeScript Support",contents:[{to:"#get-started",name:"Get started"},{to:"#from-javascript-to-typescript",name:"From JavaScript to TypeScript"},{to:"#linting-with-eslint",name:"Linting with ESLint"}]},{to:"/commands",name:"Commands and Deployment",contents:[{to:"#list-of-commands",name:"List of Commands"},{to:"#development-environment",name:"Development Enviroment"},{to:"#production-deployment",name:"Production Deployment"}]},{to:"/development-tools",name:w,contents:[{to:"#end-to-end-testing",name:"End-to-End Testing"},{to:"#eslint-and-prettier",name:"ESLint and Prettier"}]}]}],faq:[{title:a,links:[{name:"How to use external resources?",to:""},{name:"How to use pre-processors?",to:"/pre-processors"},{name:"How to use JSX?",to:"/jsx"},{name:"How to add PostCSS plugins?",to:"/postcss-plugins"},{name:"How to extend webpack config?",to:"/extend-webpack"},{name:"How to add webpack plugins?",to:"/webpack-plugins"},{name:"How to edit HOST and PORT?",to:"/host-port"},{name:"How to use cached components?",to:"/cached-components"},{name:"How to use Google Analytics?",to:"/google-analytics"},{name:"How to share cross origin resource?",to:"/http-proxy"},{name:"How to extend Webpack config to load audio files?",to:"/webpack-audio-files"}]},{title:"Development",links:[{name:"window/document undefined?",to:"/window-document-undefined"},{name:"Why a CSS Flash appears?",to:"/css-flash"},{name:"Async data in components?",to:"/async-data-components"},{name:"Duplicated Meta Tags?",to:"/duplicated-meta-tags"},{name:"iOS and phone numbers",to:"/ios-phone-numbers"}]},{title:"Deployment",links:[{name:"Deploy on AWS w/ S3 and Cloudfront",to:"/deployment-aws-s3-cloudfront"},{name:"Deploy on Azure Portal",to:"/deployment-azure-portal"},{name:"Deploy on Dokku",to:"/dokku-deployment"},{name:"Deploy on GitHub",to:"/github-pages"},{name:"Deploy on Google App Engine",to:"/appengine-deployment"},{name:"Deploy on Heroku",to:"/heroku-deployment"},{name:"Deploy on Netlify",to:"/netlify-deployment"},{name:"Deploy on Now",to:"/now-deployment"},{name:"Deploy on Surge",to:"/surge-deployment"},{name:"Using nginx as a proxy",to:"/nginx-proxy"}]}]},homepage:{backers:{attrs:{title:"Support the Team",fallback:e},body:"Nuxt.js is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. Your donations directly support office hours, continued enhancements, and most importantly, great documentation and learning material.<br>"},modes_server_side_rendering:{attrs:{title:"Server Side Rendered",content_title:"Server Side Rendered (Universal)",fallback:e},body:"The most popular mode for Nuxt. With SSR, also called &quot;universal&quot; or &quot;isomorphic&quot; mode, a Node.js server\nwill be used to deliver HTML based on your Vue components to the client instead of the pure javascript.\nUsing SSR will lead to a large SEO boost, better UX and more opportunities (compared to a traditional Vue SPA).<br><br>\nBecause implementing SSR on your own can be really tedious, Nuxt.js gives you full support out of the box\nand will take care of common pitfalls.<br>"},index:{attrs:{fallback:e},body:""},modes_single_page_app:{attrs:{title:"Single Page App",content_title:"Single Page Application (SPA)",fallback:e},body:"Don&#39;t need SSR or Static Site Generation but still want to profit from the benefits that Nuxt provides?\nAre you slowly transitioning your app and want to start lightweight? Then the traditional SPA mode will\nlikely be your choice.\nThe outcome will be a typical Vue SPA as you know it but influenced by your Nuxt configuration and the\nframework itself.<br>"},modes_statically_generated:{attrs:{title:"Statically Generated",content_title:"Statically Generated (Pre-Rendering)",fallback:e},body:'Static Site Generation is a very hot topic right now! Instead of switching to another framework and\nspending time to get used to it, why not killing two birds with one stone?\n<span style="color: #777">(only proverbial 🐦🐦)</span><br><br>\nNuxt.js supports generating a static website based on your Vue application. It is the &quot;best of both worlds&quot;\nas you don&#39;t need a server but still have SEO benefits because Nuxt will pre-render all pages and include\nthe necessary HTML. Also, you can deploy the resulting page easily to Netlify or GitHub pages.<br>'},modes:{attrs:{title:"Rendering modes",fallback:e},body:"NO CONTENTS<br>"},welcome_figure:{attrs:{title:"Welcome figure - video",fallback:e},body:'Video produced by <a href="https://www.vuemastery.com" target="_blank" rel="noopener">Vue Mastery</a>, download their free <a href="https://www.vuemastery.com/nuxt-cheat-sheet/" target="_blank" rel="noopener">Nuxt Cheat Sheet</a>.<br>'},welcome:{attrs:{title:'The <span class="nWelcome_Content_Title_Primary">Vue.js</span> Framework',fallback:e},body:"Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable.<br>"},why_enjoyable:{attrs:{title:"Enjoyable",fallback:e},body:"Our main focus is the Developer Experience. We love Nuxt.js and continuously improve the framework so you love it too! 💚<br>Expect appealing solutions, descriptive error messages, powerful defaults and detailed documentation. If questions or problems come up, our helpful community will help you out.<br>"},why_modular:{attrs:{title:"Modular",fallback:e},body:"Nuxt is based on a powerful modular architecture. You can choose from more than 50 modules to make your development faster and easier. You don&#39;t have to reinvent the wheel to get PWA benefits, add Google Analytics to your page or generate a sitemap.<br>"},why_performant:{attrs:{title:"Performant",fallback:e},body:"With Nuxt.js, your application will be optimized out of the box.\nWe do our best to build performant applications by utilizing Vue.js and Node.js best practices.\nTo squeeze every unnecessary bit out of your app Nuxt includes a bundle analyzer and lots of opportunities to fine-tune your app.<br>"},why:{attrs:{title:"Why Nuxt?",fallback:e},body:""}},adBlocked:!1},serverRendered:e}}(!0,0,"fallback",0,"Configuration","#fallback","Vuex Store","Pages","head","loading","middleware","transition","2.8.X","devtools","#devtools","plugins",0,"#ssr","watch",0,"Development Tools",0,"mode","render","#static","#middleware","#webpack","Hello World","Sponsors","Layouts","Middleware","Named Views","Nested Routes","Plugins","/plugins","Async Data","/async-data","Release Notes","/vuex-store","/typescript","Introduction")