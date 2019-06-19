window.__NUXT__=function(e,t,n,a,o,s,i,r,l,c,d,p,u,m,h,g,f,y,b,w,v,k,x,j,S,_,H,C,T,P,A,N,D,V,z,M,R,B,E,G){return{layout:"default",data:[{},{attrs:{title:"API: The generate Property",description:"Configure the generation of your universal web application to a static web application."},body:'<h1><a id="the-generate-property" class="anchor" aria-hidden="true" href="#the-generate-property"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>The generate Property</h1><ul>\n<li>Type: <code>Object</code></li>\n</ul>\n<blockquote>\n<p>Configure the generation of your universal web application to a static web application.</p>\n</blockquote>\n<p>When launching <code>nuxt generate</code> or calling <code>nuxt.generate()</code>, Nuxt.js will use the configuration defined in the <code>generate</code> property.</p>\n<h2><a id="dir" class="anchor" aria-hidden="true" href="#dir"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>dir</h2><ul>\n<li>Type: <code>String</code></li>\n<li>Default: <code>&#39;dist&#39;</code></li>\n</ul>\n<p>Directory name created by <code>nuxt generate</code>.</p>\n<h2><a id="devtools" class="anchor" aria-hidden="true" href="#devtools"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>devtools</h2><ul>\n<li>Type: <code>boolean</code></li>\n<li>Default: <code>false</code></li>\n</ul>\n<p>Configure whether to allow <a href="https://github.com/vuejs/vue-devtools">vue-devtools</a> inspection.</p>\n<p>If you already activated through nuxt.config.js or otherwise, devtools enable regardless of the flag.</p>\n<h2><a id="fallback" class="anchor" aria-hidden="true" href="#fallback"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>fallback</h2><ul>\n<li>Type: <code>String</code> or <code>Boolean</code></li>\n<li>Default: <code>&#39;200.html&#39;</code></li>\n</ul>\n<p>The path to the SPA fallback. This file can be used when doing deploys of generated sites to static hosting. It falls back to <code>mode: &#39;spa&#39;</code> when a route isn&#39;t generated.</p>\n<h2><a id="interval" class="anchor" aria-hidden="true" href="#interval"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>interval</h2><ul>\n<li>Type: <code>Number</code></li>\n<li>Default: <code>0</code></li>\n</ul>\n<p>Interval between two render cycles to avoid flooding a potential API with API calls from the web application.</p>\n<h2><a id="minify" class="anchor" aria-hidden="true" href="#minify"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>minify</h2><ul>\n<li><strong>Deprecated!</strong></li>\n<li>Use <a href="/api/configuration-build#html-minify">build.html.minify</a> instead</li>\n</ul>\n<h2><a id="routes" class="anchor" aria-hidden="true" href="#routes"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>routes</h2><ul>\n<li>Type: <code>Array</code></li>\n</ul>\n<p><a href="/guide/routing#dynamic-routes">Dynamic routes</a> are ignored by the <code>generate</code> command.</p>\n<p>Example:</p>\n<pre><code class="hljs bash">-| pages/\n---| index.vue\n---| users/\n-----| _id.vue</code></pre><p>Only the route <code>/</code> will be generated by Nuxt.js.</p>\n<p>If you want Nuxt.js to generate routes with dynamic params, you need to set an array of dynamic routes.</p>\n<p>We add routes for <code>/users/:id</code> in <code>nuxt.config.js</code>:</p>\n<pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">generate</span>: {\n    <span class="hljs-attr">routes</span>: [\n      <span class="hljs-string">\'/users/1\'</span>,\n      <span class="hljs-string">\'/users/2\'</span>,\n      <span class="hljs-string">\'/users/3\'</span>\n    ]\n  }\n}</code></pre><p>Then when we launch <code>nuxt generate</code>:</p>\n<pre><code class="hljs bash">[nuxt] Generating...\n[...]\nnuxt:render Rendering url / +154ms\nnuxt:render Rendering url /users/1 +12ms\nnuxt:render Rendering url /users/2 +33ms\nnuxt:render Rendering url /users/3 +7ms\nnuxt:generate Generate file: /index.html +21ms\nnuxt:generate Generate file: /users/1/index.html +31ms\nnuxt:generate Generate file: /users/2/index.html +15ms\nnuxt:generate Generate file: /users/3/index.html +23ms\nnuxt:generate HTML Files generated <span class="hljs-keyword">in</span> 7.6s +6ms\n[nuxt] Generate <span class="hljs-keyword">done</span></code></pre><p>Great, but what if we have <strong>dynamic params</strong>?</p>\n<ol>\n<li>Use a <code>Function</code> which returns a <code>Promise</code>.</li>\n<li>Use a <code>Function</code> with a <code>callback(err, params)</code>.</li>\n</ol>\n<h3><a id="function-which-returns-a-promise" class="anchor" aria-hidden="true" href="#function-which-returns-a-promise"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Function which returns a Promise</h3><p><code>nuxt.config.js</code></p>\n<pre><code class="hljs js"><span class="hljs-keyword">import</span> axios <span class="hljs-keyword">from</span> <span class="hljs-string">\'axios\'</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">generate</span>: {\n    <span class="hljs-attr">routes</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n      <span class="hljs-keyword">return</span> axios.get(<span class="hljs-string">\'https://my-api/users\'</span>)\n      .then(<span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {\n        <span class="hljs-keyword">return</span> res.data.map(<span class="hljs-function">(<span class="hljs-params">user</span>) =&gt;</span> {\n          <span class="hljs-keyword">return</span> <span class="hljs-string">\'/users/\'</span> + user.id\n        })\n      })\n    }\n  }\n}</code></pre><h3><a id="function-with-a-callback" class="anchor" aria-hidden="true" href="#function-with-a-callback"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Function with a callback</h3><p><code>nuxt.config.js</code></p>\n<pre><code class="hljs js"><span class="hljs-keyword">import</span> axios <span class="hljs-keyword">from</span> <span class="hljs-string">\'axios\'</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">generate</span>: {\n    <span class="hljs-attr">routes</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">callback</span>) </span>{\n      axios.get(<span class="hljs-string">\'https://my-api/users\'</span>)\n      .then(<span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {\n        <span class="hljs-keyword">const</span> routes = res.data.map(<span class="hljs-function">(<span class="hljs-params">user</span>) =&gt;</span> {\n          <span class="hljs-keyword">return</span> <span class="hljs-string">\'/users/\'</span> + user.id\n        })\n        callback(<span class="hljs-literal">null</span>, routes)\n      })\n      .catch(callback)\n    }\n  }\n}</code></pre><h3><a id="speeding-up-dynamic-route-generation-with-code-payload-code-" class="anchor" aria-hidden="true" href="#speeding-up-dynamic-route-generation-with-code-payload-code-"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Speeding up dynamic route generation with <code>payload</code></h3><p>In the example above, we&#39;re using the <code>user.id</code> from the server to generate the routes but tossing out the rest of the data. Typically, we need to fetch it again from inside the <code>/users/_id.vue</code>. While we can do that, we&#39;ll probably need to set the <code>generate.interval</code> to something like <code>100</code> in order not to flood the server with calls. Because this will increase the run time of the generate script, it would be preferable to pass along the entire <code>user</code> object to the context in <code>_id.vue</code>. We do that by modifying the code above to this:</p>\n<p><code>nuxt.config.js</code></p>\n<pre><code class="hljs js"><span class="hljs-keyword">import</span> axios <span class="hljs-keyword">from</span> <span class="hljs-string">\'axios\'</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">generate</span>: {\n    <span class="hljs-attr">routes</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n      <span class="hljs-keyword">return</span> axios.get(<span class="hljs-string">\'https://my-api/users\'</span>)\n      .then(<span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {\n        <span class="hljs-keyword">return</span> res.data.map(<span class="hljs-function">(<span class="hljs-params">user</span>) =&gt;</span> {\n          <span class="hljs-keyword">return</span> {\n            <span class="hljs-attr">route</span>: <span class="hljs-string">\'/users/\'</span> + user.id,\n            <span class="hljs-attr">payload</span>: user\n          }\n        })\n      })\n    }\n  }\n}</code></pre><p>Now we can access the <code>payload</code> from <code>/users/_id.vue</code> like so:</p>\n<pre><code class="hljs js"><span class="hljs-keyword">async</span> asyncData ({ params, error, payload }) {\n  <span class="hljs-keyword">if</span> (payload) <span class="hljs-keyword">return</span> { <span class="hljs-attr">user</span>: payload }\n  <span class="hljs-keyword">else</span> <span class="hljs-keyword">return</span> { <span class="hljs-attr">user</span>: <span class="hljs-keyword">await</span> backend.fetchUser(params.id) }\n}</code></pre><h2><a id="subfolders" class="anchor" aria-hidden="true" href="#subfolders"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>subFolders</h2><ul>\n<li>Type: <code>Boolean</code></li>\n<li>Default: <code>true</code></li>\n</ul>\n<p>By default, running <code>nuxt generate</code> will create a directory for each route &amp; serve an <code>index.html</code> file.</p>\n<p>Example:</p>\n<pre><code class="hljs bash">-| dist/\n---| index.html\n---| about/\n-----| index.html\n---| products/\n-----| item/\n-------| index.html</code></pre><p>When set to false, HTML files are generated according to the route path:</p>\n<pre><code class="hljs bash">-| dist/\n---| index.html\n---| about.html\n---| products/\n-----| item.html</code></pre><p><em>Note: this option could be useful using <a href="https://netlify.com">Netlify</a> or any static hosting using HTML fallbacks.</em></p>\n<h2><a id="concurrency" class="anchor" aria-hidden="true" href="#concurrency"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>concurrency</h2><ul>\n<li>Type: <code>Number</code></li>\n<li>Default: <code>500</code></li>\n</ul>\n<p>The generation of routes are concurrent, <code>generate.concurrency</code> specifies the amount of routes that run in one thread.</p>\n',docLink:"https://github.com/nuxt/docs/blob/master/en/api/configuration-generate.md"}],error:null,state:{filled:e,docVersion:v,ghVersion:"v2.8.1",visibleHeader:!1,visibleAffix:!1,locale:"en",lang:{iso:"en",docVersion:v,links:{api:"API",blog:"Blog",chat:"Chat",documentation:"Documentation",download:"Download",examples:"Examples",ecosystem:"Ecosystem",faq:"FAQ",get_started:"get started",github:"GitHub",guide:"Guide",homepage:"Home page",live_demo:"Live Demo",live_edit:"Live Edit",tidelift_short:"GET PROFESSIONAL SUPPORT",official_support:"GET OFFICIAL SUPPORT ⛑",tidelift:"GET PROFESSIONAL SUPPORT FOR NUXT",twitter:"Twitter",vuejs:"Vue.js",vue_jobs:"Vue Jobs"},text:{an_error_occurred:"An error occurred",api_page_not_found:"API page not found",example_file:"Example Files",please_wait:"Please wait...",please_define_title:"Please define a title in the front matter",please_define_description:"Please define a description in the front matter",search:"Search",version:"Version"},homepage:{title:"The Vue.js Framework",meta:{title:"Nuxt.js - The Vue.js Framework",description:"Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable. Nuxt.js can produce Universal, Single Page and Static Generated Applications."},welcome:{app_types_prefix:"For ",app_types:["Universal Applications","Static Generated Applications","Single Page Applications","Desktop Applications","Mobile Applications","Progressive Web Apps"],app_types_suffix:"."},codesandbox_title:"Play with Nuxt.js online",codesandbox_open:"Open on CodeSandBox.io",codesandbox_examples:"See more examples",backer_partners:"Partners",backer_become_a_partner:"Become A Partner",backer_sponsors:S,backer_become_a_sponsor:"Become A Sponsor",backer_backers:"Backers",backer_become_a_backer:"Become A Backer",backer_foundations:"Foundations"},sponsors:{title:S,become:"Support us and",become_partner:"become a partner"},footer:{authors:"Made by Chopin Brothers"},guide:{release_notes:D,contribute:"Caught a mistake or want to contribute to the documentation?",edit_on_github:"Edit this page on GitHub!"},examples:{source_code:"Source Code"}},menu:{examples:[{title:"Essentials",links:[{name:V,to:""},{name:"SEO HTML Head",to:"/seo-html-head"}]},{title:"Customization",links:[{name:"Custom Loading",to:"/custom-loading"},{name:"Custom Page Loading",to:"/custom-page-loading"},{name:"Custom Routes",to:"/custom-routes"},{name:"Global CSS",to:"/global-css"},{name:l,to:"/layouts"},{name:c,to:"/middleware"},{name:d,to:"/named-views"},{name:p,to:"/nested-routes"},{name:u,to:m},{name:"Routes transitions",to:"/routes-transitions"}]},{title:"Advanced",links:[{name:h,to:g},{name:"Auth Routes",to:"/auth-routes"},{name:"Auth External API (JWT)",to:"/auth-external-jwt"},{name:a,to:y},{name:"i18n",to:"/i18n"},{name:"Testing",to:"/testing"}]},{title:"TypeScript",links:[{name:V,to:b},{name:a,to:"/typescript-vuex"}]}],api:[{title:"Essential",links:[{name:"Context",to:"/context"}]},{title:w,links:[{name:"asyncData",to:"/"},{name:"fetch",to:"/pages-fetch"},{name:G,to:"/pages-head"},{name:"key",to:"/pages-key"},{name:"layout",to:"/pages-layout"},{name:k,to:"/pages-loading"},{name:x,to:"/pages-middleware"},{name:"scrollToTop",to:"/pages-scrolltotop"},{name:j,to:"/pages-transition",contents:[{name:"String",to:"#string"},{name:"Object",to:"#object"},{name:"Function",to:"#function"}]},{name:"validate",to:"/pages-validate"},{name:"watchQuery",to:"/pages-watchquery"}]},{title:"Components",links:[{name:"nuxt",to:"/components-nuxt"},{name:"nuxt-child",to:"/components-nuxt-child"},{name:"nuxt-link",to:"/components-nuxt-link"},{name:"no-ssr",to:"/components-no-ssr"}]},{title:"Utils",links:[{name:"$nuxt",to:"/$nuxt"}]},{title:o,links:[{name:"build",to:"/configuration-build",contents:[{name:"analyze",to:"#analyze"},{name:"babel",to:"#babel"},{name:"cache",to:"#cache"},{name:"crossorigin",to:"#crossorigin"},{name:"cssSourceMap",to:"#csssourcemap"},{name:"devMiddleware",to:"#devmiddleware"},{name:_,to:H},{name:"extend",to:"#extend"},{name:"extractCSS",to:"#extractcss"},{name:"filenames",to:"#filenames"},{name:"friendlyErrors",to:"#friendlyerrors"},{name:"hardSource",to:"#hardsource"},{name:"hotMiddleware",to:"#hotmiddleware"},{name:"html.minify",to:"#html-minify"},{name:"indicator",to:"#indicator"},{name:"loaders",to:"#loaders"},{name:"optimization",to:"#optimization"},{name:"optimizeCSS",to:"#optimizecss"},{name:"parallel",to:"#parallel"},{name:C,to:"#plugins"},{name:"postcss",to:"#postcss"},{name:"profile",to:"#profile"},{name:"publicPath",to:"#publicpath"},{name:"quiet",to:"#quiet"},{name:"splitChunks",to:"#splitchunks"},{name:"ssr",to:P},{name:"styleResources",to:"#styleresources"},{name:"templates",to:"#templates"},{name:"terser",to:"#terser"},{name:"transpile",to:"#transpile"},{name:"typescript",to:"#typescript"},{name:"vueLoader",to:"#vueloader"},{name:A,to:"#watch"}]},{name:"buildDir",to:"/configuration-builddir"},{name:"css",to:"/configuration-css"},{name:"dev",to:"/configuration-dev"},{name:"env",to:"/configuration-env"},{name:"generate",to:"/configuration-generate",contents:[{name:"dir",to:"#dir"},{name:_,to:H},{name:s,to:i},{name:"interval",to:"#interval"},{name:"minify",to:"#minify"},{name:"routes",to:"#routes"},{name:"subFolders",to:"#subfolders"},{name:"concurrency",to:"#concurrency"}]},{name:G,to:"/configuration-head"},{name:"hooks",to:"/configuration-hooks"},{name:"ignore",to:"/configuration-ignore"},{name:k,to:"/configuration-loading",contents:[{name:"Disable the Progress Bar",to:"#disable-the-progress-bar"},{name:"Customize the Progress Bar",to:"#customize-the-progress-bar"},{name:"Use a Custom Loading Component",to:"#use-a-custom-loading-component"},{name:"Internals of the Progress Bar",to:"#internals-of-the-progress-bar"}]},{name:"loadingIndicator",to:"/configuration-loading-indicator"},{name:z,to:"/configuration-mode"},{name:"modern",to:"/configuration-modern"},{name:"modules",to:"/configuration-modules"},{name:"modulesDir",to:"/configuration-modulesdir"},{name:C,to:"/configuration-plugins"},{name:M,to:"/configuration-render",contents:[{name:"bundleRenderer",to:"#bundlerenderer"},{name:"etag",to:"#etag"},{name:"compressor",to:"#compressor"},{name:s,to:i},{name:"http2",to:"#http2"},{name:"injectScripts",to:"#injectscripts"},{name:"resourceHints",to:"#resourcehints"},{name:"ssr",to:P},{name:"ssrLog",to:"#ssrlog"},{name:"static",to:R},{name:"dist",to:"#dist"},{name:"csp",to:"#csp"}]},{name:"rootDir",to:"/configuration-rootdir"},{name:"router",to:"/configuration-router",contents:[{name:"base",to:"#base"},{name:"routeNameSplitter",to:"#routenamesplitter"},{name:"extendRoutes",to:"#extendroutes"},{name:s,to:i},{name:"linkActiveClass",to:"#linkactiveclass"},{name:"linkExactActiveClass",to:"#linkexactactiveclass"},{name:"linkPrefetchedClass",to:"#linkprefetchedclass"},{name:x,to:B},{name:z,to:"#mode"},{name:"parseQuery / stringifyQuery",to:"#parsequery-stringifyquery"},{name:"prefetchLinks",to:"#prefetchlinks"},{name:"scrollBehavior",to:"#scrollbehavior"}]},{name:"server",to:"/configuration-server"},{name:"serverMiddleware",to:"/configuration-servermiddleware"},{name:"srcDir",to:"/configuration-srcdir"},{name:"dir",to:"/configuration-dir"},{name:j,to:"/configuration-transition"},{name:"vue.config",to:"/configuration-vue-config"},{name:A,to:"/configuration-watch"},{name:"globalName",to:"/configuration-global-name"},{name:"watchers",to:"/configuration-watchers",contents:[{name:"chokidar",to:"#chokidar"},{name:"webpack",to:E}]}]},{title:"Programmatically",links:[{name:"Usage",to:"/nuxt"},{name:M,to:"/nuxt-render"},{name:"renderRoute",to:"/nuxt-render-route"},{name:"renderAndGetWindow",to:"/nuxt-render-and-get-window"}]},{title:"Internals",links:[{name:"Intro",to:"/internals"},{name:"Nuxt",to:"/internals-nuxt"},{name:"Renderer",to:"/internals-renderer"},{name:"Module Container",to:"/internals-module-container"},{name:"Builder",to:"/internals-builder"},{name:"Generator",to:"/internals-generator"}]}],faq:[{title:o,links:[{name:"How to use external resources?",to:""},{name:"How to use pre-processors?",to:"/pre-processors"},{name:"How to use JSX?",to:"/jsx"},{name:"How to add PostCSS plugins?",to:"/postcss-plugins"},{name:"How to extend webpack config?",to:"/extend-webpack"},{name:"How to add webpack plugins?",to:"/webpack-plugins"},{name:"How to edit HOST and PORT?",to:"/host-port"},{name:"How to use cached components?",to:"/cached-components"},{name:"How to use Google Analytics?",to:"/google-analytics"},{name:"How to share cross origin resource?",to:"/http-proxy"},{name:"How to extend Webpack config to load audio files?",to:"/webpack-audio-files"}]},{title:"Development",links:[{name:"window/document undefined?",to:"/window-document-undefined"},{name:"Why a CSS Flash appears?",to:"/css-flash"},{name:"Async data in components?",to:"/async-data-components"},{name:"Duplicated Meta Tags?",to:"/duplicated-meta-tags"},{name:"iOS and phone numbers",to:"/ios-phone-numbers"}]},{title:"Deployment",links:[{name:"Deploy on AWS w/ S3 and Cloudfront",to:"/deployment-aws-s3-cloudfront"},{name:"Deploy on Azure Portal",to:"/deployment-azure-portal"},{name:"Deploy on Dokku",to:"/dokku-deployment"},{name:"Deploy on GitHub",to:"/github-pages"},{name:"Deploy on Google App Engine",to:"/appengine-deployment"},{name:"Deploy on Heroku",to:"/heroku-deployment"},{name:"Deploy on Netlify",to:"/netlify-deployment"},{name:"Deploy on Now",to:"/now-deployment"},{name:"Deploy on Surge",to:"/surge-deployment"},{name:"Using nginx as a proxy",to:"/nginx-proxy"}]}],guide:[{title:"Prologue",links:[{to:"",name:r,contents:[{to:"#what-is-nuxt-js-",name:"What is Nuxt.js?"},{to:"#how-it-works",name:"How it Works"},{to:"#features",name:"Features"},{to:"#schema",name:"Schema"},{to:"#server-rendered-universal-ssr-",name:"Server Rendered"},{to:"#single-page-applications-spa-",name:"Single Page Application"},{to:"#static-generated-pre-rendering-",name:"Static Generated"}]},{to:"/contribution-guide",name:"Contribution Guide"},{to:"/release-notes",name:D}]},{title:"Getting Started",links:[{to:"/installation",name:"Installation",contents:[{to:"#using-nuxt-js-starter-template",name:"Using Nuxt.js starter template"},{to:"#starting-from-scratch",name:"Starting from scratch"}]},{to:"/directory-structure",name:"Directory Structure",contents:[{to:"#directories",name:"Directories"},{to:"#aliases",name:"Aliases"}]},{to:"/configuration",name:o},{to:"/routing",name:"Routing",contents:[{to:"#basic-routes",name:"Basic Routes"},{to:"#dynamic-routes",name:"Dynamic Routes"},{to:"#nested-routes",name:p},{to:"#dynamic-nested-routes",name:"Dynamic Nested Routes"},{to:"#named-views",name:d},{to:"#transitions",name:"Transitions"},{to:B,name:c}]},{to:"/views",name:"Views",contents:[{to:"#document",name:"Document"},{to:"#layouts",name:l},{to:"#pages",name:w},{to:"#html-head",name:"HTML Head"}]},{to:g,name:h,contents:[{to:"#the-asyncdata-method",name:"The asyncData Method"},{to:"#the-context",name:"The Context"},{to:"#handling-errors",name:"Handling Errors"}]},{to:"/assets",name:"Assets",contents:[{to:E,name:"Webpack"},{to:R,name:"Static"}]},{to:m,name:u,contents:[{to:"#external-packages",name:"External Packages"},{to:"#vue-plugins",name:"Vue Plugins"},{to:"#inject-in-root-amp-context",name:"Inject in $root & context"},{to:"#client-side-only",name:"Client-side only"}]},{to:"/modules",name:"Modules",contents:[{to:"#introduction",name:r},{to:"#list-of-nuxt-js-modules",name:"List of Nuxt.js modules"},{to:"#write-a-basic-module",name:"Write a basic Module"},{to:"#async-modules",name:"Async Modules"},{to:"#common-snippets",name:"Common Snippets"},{to:"#run-tasks-on-specific-hooks",name:"Run Tasks on Specific hooks"},{to:"#module-package-commands",name:"Module package commands"}]},{to:y,name:a,contents:[{to:"#activate-the-store",name:"Activate the Store"},{to:"#modules-mode",name:"Modules mode"},{to:"#the-fetch-method",name:"The fetch Method"},{to:"#the-nuxtserverinit-action",name:"The nuxtServerInit Action"},{to:"#classic-mode",name:"Classic mode"}]},{to:b,name:"TypeScript Support",contents:[{to:"#get-started",name:"Get started"},{to:"#from-javascript-to-typescript",name:"From JavaScript to TypeScript"},{to:"#linting-with-eslint",name:"Linting with ESLint"}]},{to:"/commands",name:"Commands and Deployment",contents:[{to:"#list-of-commands",name:"List of Commands"},{to:"#development-environment",name:"Development Enviroment"},{to:"#production-deployment",name:"Production Deployment"}]},{to:"/development-tools",name:"Development Tools",contents:[{to:"#end-to-end-testing",name:"End-to-End Testing"},{to:"#eslint-and-prettier",name:"ESLint and Prettier"}]}]}]},homepage:{index:{attrs:{fallback:e},body:""},backers:{attrs:{title:"Support the Team",fallback:e},body:"Nuxt.js is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. Your donations directly support office hours, continued enhancements, and most importantly, great documentation and learning material.<br>"},modes_single_page_app:{attrs:{title:"Single Page App",content_title:"Single Page Application (SPA)",fallback:e},body:"Don&#39;t need SSR or Static Site Generation but still want to profit from the benefits that Nuxt provides?\nAre you slowly transitioning your app and want to start lightweight? Then the traditional SPA mode will\nlikely be your choice.\nThe outcome will be a typical Vue SPA as you know it but influenced by your Nuxt configuration and the\nframework itself.<br>"},modes_server_side_rendering:{attrs:{title:"Server Side Rendered",content_title:"Server Side Rendered (Universal)",fallback:e},body:"The most popular mode for Nuxt. With SSR, also called &quot;universal&quot; or &quot;isomorphic&quot; mode, a Node.js server\nwill be used to deliver HTML based on your Vue components to the client instead of the pure javascript.\nUsing SSR will lead to a large SEO boost, better UX and more opportunities (compared to a traditional Vue SPA).<br><br>\nBecause implementing SSR on your own can be really tedious, Nuxt.js gives you full support out of the box\nand will take care of common pitfalls.<br>"},modes_statically_generated:{attrs:{title:"Statically Generated",content_title:"Statically Generated (Pre-Rendering)",fallback:e},body:'Static Site Generation is a very hot topic right now! Instead of switching to another framework and\nspending time to get used to it, why not killing two birds with one stone?\n<span style="color: #777">(only proverbial 🐦🐦)</span><br><br>\nNuxt.js supports generating a static website based on your Vue application. It is the &quot;best of both worlds&quot;\nas you don&#39;t need a server but still have SEO benefits because Nuxt will pre-render all pages and include\nthe necessary HTML. Also, you can deploy the resulting page easily to Netlify or GitHub pages.<br>'},modes:{attrs:{title:"Rendering modes",fallback:e},body:"NO CONTENTS<br>"},welcome_figure:{attrs:{title:"Welcome figure - video",fallback:e},body:'Video produced by <a href="https://www.vuemastery.com" target="_blank" rel="noopener">Vue Mastery</a>, download their free <a href="https://www.vuemastery.com/nuxt-cheat-sheet/" target="_blank" rel="noopener">Nuxt Cheat Sheet</a>.<br>'},welcome:{attrs:{title:'The <span class="nWelcome_Content_Title_Primary">Vue.js</span> Framework',fallback:e},body:"Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable.<br>"},why_modular:{attrs:{title:"Modular",fallback:e},body:"Nuxt is based on a powerful modular architecture. You can choose from more than 50 modules to make your development faster and easier. You don&#39;t have to reinvent the wheel to get PWA benefits, add Google Analytics to your page or generate a sitemap.<br>"},why_enjoyable:{attrs:{title:"Enjoyable",fallback:e},body:"Our main focus is the Developer Experience. We love Nuxt.js and continuously improve the framework so you love it too! 💚<br>Expect appealing solutions, descriptive error messages, powerful defaults and detailed documentation. If questions or problems come up, our helpful community will help you out.<br>"},why_performant:{attrs:{title:"Performant",fallback:e},body:"With Nuxt.js, your application will be optimized out of the box.\nWe do our best to build performant applications by utilizing Vue.js and Node.js best practices.\nTo squeeze every unnecessary bit out of your app Nuxt includes a bundle analyzer and lots of opportunities to fine-tune your app.<br>"},why:{attrs:{title:"Why Nuxt?",fallback:e},body:""}},adBlocked:!1},serverRendered:e}}(!0,0,0,"Vuex Store","Configuration","fallback","#fallback","Introduction","Layouts","Middleware","Named Views","Nested Routes","Plugins","/plugins","Async Data","/async-data",0,"/vuex-store","/typescript","Pages","2.8.X","loading","middleware","transition","Sponsors","devtools","#devtools","plugins",0,"#ssr","watch",0,"Release Notes","Hello World","mode","render","#static","#middleware","#webpack","head")