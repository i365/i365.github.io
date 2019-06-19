window.__NUXT__=function(e,n,t,a,s,o,i,l,r,c,p,d,u,m,h,g,f,b,w,y,v,j,S,k,x,C,_,A,E,N,T,D,H,P,R,W,O,F,M,q){return{layout:"default",data:[{},{attrs:{title:"AWS: S3+Cloudfront Deployment",description:"Static Hosting on AWS with S3 and Cloudfront"},body:'<h1><a id="how-to-deploy-on-aws-w-s3-and-cloudfront" class="anchor" aria-hidden="true" href="#how-to-deploy-on-aws-w-s3-and-cloudfront"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>How to Deploy on AWS w/ S3 and Cloudfront</h1><p>AWS is Amazon Web Services.<br>S3 is their static storage which can be configured for Static Site Hosting.\nCloudfront is their CDN (content delivery network)</p>\n<p>Hosting a <strong>static generated</strong> Nuxt app on AWS w/ S3 + Cloudfront is powerful and cheap.</p>\n<blockquote>\n<p>AWS is a death by 1000 paper cuts.  If we missed a step, please submit a PR to update this document.</p>\n</blockquote>\n<h2><a id="overview" class="anchor" aria-hidden="true" href="#overview"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Overview</h2><p>We&#39;ll host super cheap with some AWS services.  Briefly:</p>\n<ul>\n<li>S3 <ul>\n<li>cloud data &quot;bucket&quot; for our website files</li>\n<li>can be configured to host static websites</li>\n</ul>\n</li>\n<li>CloudFront <ul>\n<li>a CDN (content delivery network)</li>\n<li>offers free HTTPS certs</li>\n<li>Makes your site load faster</li>\n</ul>\n</li>\n</ul>\n<p>We&#39;ll push the site like this:</p>\n<pre><code class="hljs ">Nuxt Generate -> Local folder -> AWS S3 Bucket -> AWS Cloudfront CDN -> Browser\n  [      nuxt generate       ]    [         gulp deploy          ]\n  [                         deploy.sh                            ]</code></pre><p>First, we&#39;ll generate the site with <code>nuxt generate</code>.\nThen, we&#39;ll use <a href="https://gulpjs.com/">Gulp</a> to publish the files to a S3 bucket and invalidate a CloudFront CDN.</p>\n<ul>\n<li><a href="https://www.npmjs.com/package/gulp">gulp</a></li>\n<li><a href="https://www.npmjs.com/package/gulp-awspublish">gulp-awspublish</a></li>\n<li><a href="https://www.npmjs.com/package/gulp-cloudfront-invalidate-aws-publish">gulp-cloudfront-invalidate-aws-publish</a></li>\n<li><a href="https://www.npmjs.com/package/concurrent-transform">concurrent-transform</a> (for parallel uploads)</li>\n</ul>\n<p>Our deploy script needs these environment variables set:</p>\n<ul>\n<li>AWS_BUCKET_NAME=&quot;example.com&quot; </li>\n<li>AWS_CLOUDFRONT=&quot;UPPERCASE&quot;</li>\n<li>AWS_ACCESS_KEY_ID=&quot;key&quot; </li>\n<li>AWS_SECRET_ACCESS_KEY=&quot;secret&quot; </li>\n</ul>\n<p>We&#39;ll have these files: </p>\n<pre><code class="hljs ">deploy.sh       -  run `nuxt generate` and `gulp deploy`\ngulpfile.js     -  `gulp deploy` code to push files to S3 and invalidate CloudFront</code></pre><h2><a id="setting-it-up" class="anchor" aria-hidden="true" href="#setting-it-up"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Setting it up</h2><ol>\n<li>Make a S3 bucket and configure it for static site hosting</li>\n<li>Create a CloudFront distribution</li>\n<li>Configure security access</li>\n<li>Setup build script in your project</li>\n</ol>\n<h3><a id="1-aws-setup-your-s3-bucket" class="anchor" aria-hidden="true" href="#1-aws-setup-your-s3-bucket"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>1. AWS: Setup your S3 bucket</h3><h3><a id="2-aws-setup-your-cloudfront-distribution" class="anchor" aria-hidden="true" href="#2-aws-setup-your-cloudfront-distribution"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>2. AWS: Setup your CloudFront Distribution</h3><p>For steps 1. and 2, follow this <a href="https://reidweb.com/2017/02/06/cloudfront-cdn-tutorial/">tutorial to setup your S3 and CloudFront</a></p>\n<p>You should now have this data:</p>\n<ul>\n<li>AWS_BUCKET_NAME=&quot;example.com&quot; </li>\n<li>AWS_CLOUDFRONT=&quot;UPPERCASE&quot;</li>\n</ul>\n<h3><a id="3-aws-configure-security-access" class="anchor" aria-hidden="true" href="#3-aws-configure-security-access"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>3. AWS: Configure security access</h3><p>For step 3, we need to create a user that can:</p>\n<ul>\n<li>Update the bucket contents</li>\n<li>Invalidate the CloudFront distribution (propagates changes to users faster)</li>\n</ul>\n<p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html">Create a programmatic user with this policy</a>:</p>\n<blockquote>\n<p>NOTE: replace 2x <code>example.com</code> with your S3 bucket name below.  This policy allows pushing to the specified bucket, and invalidating any CloudFront distribution.</p>\n</blockquote>\n<pre><code class="hljs json">{\n    <span class="hljs-attr">"Version"</span>: <span class="hljs-string">"2012-10-17"</span>,\n    <span class="hljs-attr">"Statement"</span>: [ {\n            <span class="hljs-attr">"Effect"</span>: <span class="hljs-string">"Allow"</span>,\n            <span class="hljs-attr">"Action"</span>: [ <span class="hljs-string">"s3:ListBucket"</span> ],\n            <span class="hljs-attr">"Resource"</span>: [\n                <span class="hljs-string">"arn:aws:s3:::example.com"</span>\n            ]\n        }, {\n            <span class="hljs-attr">"Effect"</span>: <span class="hljs-string">"Allow"</span>,\n            <span class="hljs-attr">"Action"</span>: [\n                <span class="hljs-string">"s3:PutObject"</span>,\n                <span class="hljs-string">"s3:PutObjectAcl"</span>,\n                <span class="hljs-string">"s3:GetObject"</span>,\n                <span class="hljs-string">"s3:GetObjectAcl"</span>,\n                <span class="hljs-string">"s3:DeleteObject"</span>,\n                <span class="hljs-string">"s3:ListMultipartUploadParts"</span>,\n                <span class="hljs-string">"s3:AbortMultipartUpload"</span>\n            ],\n            <span class="hljs-attr">"Resource"</span>: [\n                <span class="hljs-string">"arn:aws:s3:::example.com/*"</span>\n            ]\n        }, {\n            <span class="hljs-attr">"Effect"</span>: <span class="hljs-string">"Allow"</span>,\n            <span class="hljs-attr">"Action"</span>: [\n                <span class="hljs-string">"cloudfront:CreateInvalidation"</span>,\n                <span class="hljs-string">"cloudfront:GetInvalidation"</span>,\n                <span class="hljs-string">"cloudfront:ListInvalidations"</span>,\n                <span class="hljs-string">"cloudfront:UnknownOperation"</span>\n            ],\n            <span class="hljs-attr">"Resource"</span>: <span class="hljs-string">"*"</span>\n        }\n    ]\n}</code></pre><p>Then <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html">get an access key and secret</a>.</p>\n<p>You should now have this data:</p>\n<ul>\n<li>AWS_ACCESS_KEY_ID=&quot;key&quot; </li>\n<li>AWS_SECRET_ACCESS_KEY=&quot;secret&quot; </li>\n</ul>\n<h3><a id="4-laptop-setup-your-project-39-s-build-script" class="anchor" aria-hidden="true" href="#4-laptop-setup-your-project-39-s-build-script"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>4. Laptop: Setup your project&#39;s build script</h3><p>4.1) Create a <code>deploy.sh</code> script.  See optional <a href="https://github.com/creationix/nvm">nvm (node version manager)</a>.</p>\n<pre><code class="hljs bash"><span class="hljs-meta">#!/bin/bash\n</span>\n<span class="hljs-built_in">export</span> AWS_ACCESS_KEY_ID=<span class="hljs-string">"key"</span> \n<span class="hljs-built_in">export</span> AWS_SECRET_ACCESS_KEY=<span class="hljs-string">"secret"</span> \n<span class="hljs-built_in">export</span> AWS_BUCKET_NAME=<span class="hljs-string">"example.com"</span> \n<span class="hljs-built_in">export</span> AWS_CLOUDFRONT=<span class="hljs-string">"UPPERCASE"</span>\n\n<span class="hljs-comment"># Load nvm (node version manager), install node (version in .nvmrc), and npm install packages</span>\n[ -s <span class="hljs-string">"<span class="hljs-variable">$HOME</span>/.nvm/nvm.sh"</span> ] &amp;&amp; <span class="hljs-built_in">source</span> <span class="hljs-string">"<span class="hljs-variable">$HOME</span>/.nvm/nvm.sh"</span> &amp;&amp; nvm use\n<span class="hljs-comment"># Npm install if not already.</span>\n[ ! -d <span class="hljs-string">"node_modules"</span> ] &amp;&amp; npm install\n\nnpm run generate\ngulp deploy</code></pre><p>4.2) Make <code>deploy.sh</code> runnable and DON&#39;T CHECK INTO GIT (deploy.sh has secrets in it)</p>\n<pre><code class="hljs bash">chmod +x deploy.sh\n<span class="hljs-built_in">echo</span> <span class="hljs-string">"\n# Don\'t commit build files\nnode_modules\ndist\n.nuxt\n.awspublish\ndeploy.sh\n"</span> &gt;&gt; .gitignore</code></pre><p>4.3) Add Gulp to your project and to your command line </p>\n<pre><code class="hljs bash">npm install --save-dev gulp gulp-awspublish gulp-cloudfront-invalidate-aws-publish concurrent-transform\nnpm install -g gulp</code></pre><p>4.4) Create a <code>gulpfile.js</code> with the build script</p>\n<pre><code class="hljs javascript"><span class="hljs-keyword">var</span> gulp = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'gulp\'</span>);\n<span class="hljs-keyword">var</span> awspublish = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'gulp-awspublish\'</span>);\n<span class="hljs-keyword">var</span> cloudfront = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'gulp-cloudfront-invalidate-aws-publish\'</span>);\n<span class="hljs-keyword">var</span> parallelize = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'concurrent-transform\'</span>);\n\n<span class="hljs-comment">// https://docs.aws.amazon.com/cli/latest/userguide/cli-environment.html</span>\n\n<span class="hljs-keyword">var</span> config = {\n\n  <span class="hljs-comment">// Required</span>\n  params: { \n    <span class="hljs-attr">Bucket</span>: process.env.AWS_BUCKET_NAME\n  },\n  <span class="hljs-attr">credentials</span>: {\n    <span class="hljs-attr">accessKeyId</span>: process.env.AWS_ACCESS_KEY_ID,\n    <span class="hljs-attr">secretAccessKey</span>: process.env.AWS_SECRET_ACCESS_KEY,\n    <span class="hljs-attr">signatureVersion</span>: <span class="hljs-string">\'v3\'</span>\n  },\n\n  <span class="hljs-comment">// Optional</span>\n  deleteOldVersions: <span class="hljs-literal">false</span>,                 <span class="hljs-comment">// NOT FOR PRODUCTION</span>\n  distribution: process.env.AWS_CLOUDFRONT, <span class="hljs-comment">// CloudFront distribution ID</span>\n  region: process.env.AWS_DEFAULT_REGION,\n  <span class="hljs-attr">headers</span>: { <span class="hljs-comment">/*\'Cache-Control\': \'max-age=315360000, no-transform, public\',*/</span> },\n\n  <span class="hljs-comment">// Sensible Defaults - gitignore these Files and Dirs</span>\n  distDir: <span class="hljs-string">\'dist\'</span>,\n  <span class="hljs-attr">indexRootPath</span>: <span class="hljs-literal">true</span>,\n  <span class="hljs-attr">cacheFileName</span>: <span class="hljs-string">\'.awspublish\'</span>,\n  <span class="hljs-attr">concurrentUploads</span>: <span class="hljs-number">10</span>,\n  <span class="hljs-attr">wait</span>: <span class="hljs-literal">true</span>,  <span class="hljs-comment">// wait for CloudFront invalidation to complete (about 30-60 seconds)</span>\n}\n\ngulp.task(<span class="hljs-string">\'deploy\'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-comment">// create a new publisher using S3 options</span>\n  <span class="hljs-comment">// http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property</span>\n  <span class="hljs-keyword">var</span> publisher = awspublish.create(config);\n\n  <span class="hljs-keyword">var</span> g = gulp.src(<span class="hljs-string">\'./\'</span> + config.distDir + <span class="hljs-string">\'/**\'</span>);\n    <span class="hljs-comment">// publisher will add Content-Length, Content-Type and headers specified above</span>\n    <span class="hljs-comment">// If not specified it will set x-amz-acl to public-read by default</span>\n  g = g.pipe(parallelize(publisher.publish(config.headers), config.concurrentUploads))\n\n  <span class="hljs-comment">// Invalidate CDN</span>\n  <span class="hljs-keyword">if</span> (config.distribution) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'Configured with CloudFront distribution\'</span>);\n    g = g.pipe(cloudfront(config));\n  } <span class="hljs-keyword">else</span> {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'No CloudFront distribution configured - skipping CDN invalidation\'</span>);\n  }\n\n  <span class="hljs-comment">// Delete removed files</span>\n  <span class="hljs-keyword">if</span> (config.deleteOldVersions) g = g.pipe(publisher.sync());\n  <span class="hljs-comment">// create a cache file to speed up consecutive uploads</span>\n  g = g.pipe(publisher.cache());\n  <span class="hljs-comment">// print upload updates to console</span>\n  g = g.pipe(awspublish.reporter());\n  <span class="hljs-keyword">return</span> g;\n});</code></pre><p>4.5) Deploy and debug</p>\n<p>Run it:</p>\n<pre><code class="hljs bash">./deploy.sh</code></pre><p>You should get an output similar to this:</p>\n<pre><code class="hljs bash">$ ./deploy.sh                                                                                                                 \n\nFound <span class="hljs-string">\'/home/michael/scm/example.com/www/.nvmrc\'</span> with version &lt;8&gt;\nNow using node v8.11.2 (npm v5.6.0)\n\n&gt; example.com@1.0.0 generate /home/michael/scm/example.com/www\n&gt; nuxt generate\n\n  nuxt:generate Generating... +0ms\n  nuxt:build App root: /home/michael/scm/example.com/www +0ms\n  nuxt:build Generating /home/michael/scm/example.com/www/.nuxt files... +0ms\n  nuxt:build Generating files... +36ms\n  nuxt:build Generating routes... +10ms\n  nuxt:build Building files... +24ms\n  ████████████████████ 100% \n\nBuild completed <span class="hljs-keyword">in</span> 7.009s\n\n\n\n DONE  Compiled successfully <span class="hljs-keyword">in</span> 7013ms                                                                                                                                     21:25:22\n\nHash: 421d017116d2d95dd1e3\nVersion: webpack 3.12.0\nTime: 7013ms\n                                   Asset     Size  Chunks             Chunk Names\n     pages/index.ef923f795c1cecc9a444.js  10.6 kB       0  [emitted]  pages/index\n layouts/default.87a49937c330bdd31953.js  2.69 kB       1  [emitted]  layouts/default\npages/our-values.f60c731d5c3081769fd9.js  3.03 kB       2  [emitted]  pages/our-values\n   pages/join-us.835077c4e6b55ed1bba4.js   1.3 kB       3  [emitted]  pages/join-us\n       pages/how.75f8cb5bc24e38bca3b3.js  2.59 kB       4  [emitted]  pages/how\n             app.6dbffe6ac4383bd30a92.js   202 kB       5  [emitted]  app\n          vendor.134043c361c9ad199c6d.js  6.31 kB       6  [emitted]  vendor\n        manifest.421d017116d2d95dd1e3.js  1.59 kB       7  [emitted]  manifest\n + 3 hidden assets\nHash: 9fd206f4b4e571e9571f\nVersion: webpack 3.12.0\nTime: 2239ms\n             Asset    Size  Chunks             Chunk Names\nserver-bundle.json  306 kB          [emitted]  \n  nuxt: Call generate:distRemoved hooks (1) +0ms\n  nuxt:generate Destination folder cleaned +10s\n  nuxt: Call generate:distCopied hooks (1) +8ms\n  nuxt:generate Static &amp; build files copied +7ms\n  nuxt:render Rendering url /our-values +0ms\n  nuxt:render Rendering url /how +67ms\n  nuxt:render Rendering url /join-us +1ms\n  nuxt:render Rendering url / +0ms\n  nuxt: Call generate:page hooks (1) +913ms\n  nuxt: Call generate:page hooks (1) +205ms\n  nuxt: Call generate:page hooks (1) +329ms\n  nuxt: Call generate:page hooks (1) +361ms\n  nuxt:generate Generate file: /our-values/index.html +2s\n  nuxt:generate Generate file: /how/index.html +0ms\n  nuxt:generate Generate file: /join-us/index.html +0ms\n  nuxt:generate Generate file: /index.html +0ms\n  nuxt:render Rendering url / +2s\n  nuxt: Call generate:<span class="hljs-keyword">done</span> hooks (1) +4ms\n  nuxt:generate HTML Files generated <span class="hljs-keyword">in</span> 11.8s +5ms\n  nuxt:generate Generate <span class="hljs-keyword">done</span> +0ms\n[21:25:27] Using gulpfile ~/scm/example.com/www/gulpfile.js\n[21:25:27] Starting <span class="hljs-string">\'deploy\'</span>...\nConfigured with CloudFront distribution\n[21:25:27] [cache]  README.md\n[21:25:27] [cache]  android-chrome-192x192.png\n[21:25:27] [cache]  android-chrome-512x512.png\n[21:25:27] [cache]  apple-touch-icon.png\n[21:25:27] [cache]  browserconfig.xml\n[21:25:27] [cache]  favicon-16x16.png\n[21:25:27] [cache]  favicon-32x32.png\n[21:25:27] [cache]  favicon.ico\n[21:25:27] [cache]  favicon.svg\n[21:25:27] [cache]  logo-branches.svg\n[21:25:27] [cache]  logo-small.svg\n[21:25:27] [cache]  logo.svg\n[21:25:27] [cache]  mstile-150x150.png\n[21:25:27] [cache]  og-image.jpg\n[21:25:27] [cache]  safari-pinned-tab.svg\n[21:25:27] [cache]  site.webmanifest\n[21:25:28] [create] _nuxt/manifest.421d017116d2d95dd1e3.js\n[21:25:29] [update] 200.html\n[21:25:30] [create] videos/flag.jpg\n[21:25:30] [create] _nuxt/vendor.134043c361c9ad199c6d.js\n[21:25:34] [create] videos/flag.mp4\n[21:25:34] [cache]  _nuxt/pages/how.75f8cb5bc24e38bca3b3.js\n[21:25:34] [cache]  _nuxt/pages/join-us.835077c4e6b55ed1bba4.js\n[21:25:34] [cache]  _nuxt/pages/our-values.f60c731d5c3081769fd9.js\n[21:25:36] [update] our-values/index.html\n[21:25:36] [create] _nuxt/layouts/default.87a49937c330bdd31953.js\n[21:25:36] [create] _nuxt/app.6dbffe6ac4383bd30a92.js\n[21:25:37] [create] _nuxt/pages/index.ef923f795c1cecc9a444.js\n[21:25:38] [update] join-us/index.html\n[21:25:38] [update] how/index.html\n[21:25:43] [create] videos/flag.webm\n[21:25:43] [update] index.html\n[21:25:43] CloudFront invalidation created: I16NXXXXX4JDOA\n[21:26:09] Finished <span class="hljs-string">\'deploy\'</span> after 42 s</code></pre><p>Note that the <code>CloudFront invalidation created: XXXX</code> is the only output from the CloudFront invalidation npm package.  If you don&#39;t see that, it&#39;s not working.  </p>\n',docLink:"https://github.com/nuxt/docs/blob/master/en/faq/deployment-aws-s3-cloudfront.md"}],error:null,state:{filled:e,docVersion:v,ghVersion:"v2.8.1",visibleHeader:!1,visibleAffix:!1,locale:"en",lang:{iso:"en",docVersion:v,links:{api:"API",blog:"Blog",chat:"Chat",documentation:"Documentation",download:"Download",examples:"Examples",ecosystem:"Ecosystem",faq:"FAQ",get_started:"get started",github:"GitHub",guide:"Guide",homepage:"Home page",live_demo:"Live Demo",live_edit:"Live Edit",tidelift_short:"GET PROFESSIONAL SUPPORT",official_support:"GET OFFICIAL SUPPORT ⛑",tidelift:"GET PROFESSIONAL SUPPORT FOR NUXT",twitter:"Twitter",vuejs:"Vue.js",vue_jobs:"Vue Jobs"},text:{an_error_occurred:"An error occurred",api_page_not_found:"API page not found",example_file:"Example Files",please_wait:"Please wait...",please_define_title:"Please define a title in the front matter",please_define_description:"Please define a description in the front matter",search:"Search",version:"Version"},homepage:{title:"The Vue.js Framework",meta:{title:"Nuxt.js - The Vue.js Framework",description:"Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable. Nuxt.js can produce Universal, Single Page and Static Generated Applications."},welcome:{app_types_prefix:"For ",app_types:["Universal Applications","Static Generated Applications","Single Page Applications","Desktop Applications","Mobile Applications","Progressive Web Apps"],app_types_suffix:"."},codesandbox_title:"Play with Nuxt.js online",codesandbox_open:"Open on CodeSandBox.io",codesandbox_examples:"See more examples",backer_partners:"Partners",backer_become_a_partner:"Become A Partner",backer_sponsors:x,backer_become_a_sponsor:"Become A Sponsor",backer_backers:"Backers",backer_become_a_backer:"Become A Backer",backer_foundations:"Foundations"},sponsors:{title:x,become:"Support us and",become_partner:"become a partner"},footer:{authors:"Made by Chopin Brothers"},guide:{release_notes:H,contribute:"Caught a mistake or want to contribute to the documentation?",edit_on_github:"Edit this page on GitHub!"},examples:{source_code:"Source Code"}},menu:{examples:[{title:"Essentials",links:[{name:P,to:""},{name:"SEO HTML Head",to:"/seo-html-head"}]},{title:"Customization",links:[{name:"Custom Loading",to:"/custom-loading"},{name:"Custom Page Loading",to:"/custom-page-loading"},{name:"Custom Routes",to:"/custom-routes"},{name:"Global CSS",to:"/global-css"},{name:r,to:"/layouts"},{name:c,to:"/middleware"},{name:p,to:"/named-views"},{name:d,to:"/nested-routes"},{name:u,to:m},{name:"Routes transitions",to:"/routes-transitions"}]},{title:"Advanced",links:[{name:h,to:g},{name:"Auth Routes",to:"/auth-routes"},{name:"Auth External API (JWT)",to:"/auth-external-jwt"},{name:a,to:b},{name:"i18n",to:"/i18n"},{name:"Testing",to:"/testing"}]},{title:"TypeScript",links:[{name:P,to:w},{name:a,to:"/typescript-vuex"}]}],api:[{title:"Essential",links:[{name:"Context",to:"/context"}]},{title:y,links:[{name:"asyncData",to:"/"},{name:"fetch",to:"/pages-fetch"},{name:q,to:"/pages-head"},{name:"key",to:"/pages-key"},{name:"layout",to:"/pages-layout"},{name:j,to:"/pages-loading"},{name:S,to:"/pages-middleware"},{name:"scrollToTop",to:"/pages-scrolltotop"},{name:k,to:"/pages-transition",contents:[{name:"String",to:"#string"},{name:"Object",to:"#object"},{name:"Function",to:"#function"}]},{name:"validate",to:"/pages-validate"},{name:"watchQuery",to:"/pages-watchquery"}]},{title:"Components",links:[{name:"nuxt",to:"/components-nuxt"},{name:"nuxt-child",to:"/components-nuxt-child"},{name:"nuxt-link",to:"/components-nuxt-link"},{name:"no-ssr",to:"/components-no-ssr"}]},{title:"Utils",links:[{name:"$nuxt",to:"/$nuxt"}]},{title:s,links:[{name:"build",to:"/configuration-build",contents:[{name:"analyze",to:"#analyze"},{name:"babel",to:"#babel"},{name:"cache",to:"#cache"},{name:"crossorigin",to:"#crossorigin"},{name:"cssSourceMap",to:"#csssourcemap"},{name:"devMiddleware",to:"#devmiddleware"},{name:C,to:_},{name:"extend",to:"#extend"},{name:"extractCSS",to:"#extractcss"},{name:"filenames",to:"#filenames"},{name:"friendlyErrors",to:"#friendlyerrors"},{name:"hardSource",to:"#hardsource"},{name:"hotMiddleware",to:"#hotmiddleware"},{name:"html.minify",to:"#html-minify"},{name:"indicator",to:"#indicator"},{name:"loaders",to:"#loaders"},{name:"optimization",to:"#optimization"},{name:"optimizeCSS",to:"#optimizecss"},{name:"parallel",to:"#parallel"},{name:A,to:"#plugins"},{name:"postcss",to:"#postcss"},{name:"profile",to:"#profile"},{name:"publicPath",to:"#publicpath"},{name:"quiet",to:"#quiet"},{name:"splitChunks",to:"#splitchunks"},{name:"ssr",to:N},{name:"styleResources",to:"#styleresources"},{name:"templates",to:"#templates"},{name:"terser",to:"#terser"},{name:"transpile",to:"#transpile"},{name:"typescript",to:"#typescript"},{name:"vueLoader",to:"#vueloader"},{name:T,to:"#watch"}]},{name:"buildDir",to:"/configuration-builddir"},{name:"css",to:"/configuration-css"},{name:"dev",to:"/configuration-dev"},{name:"env",to:"/configuration-env"},{name:"generate",to:"/configuration-generate",contents:[{name:"dir",to:"#dir"},{name:C,to:_},{name:o,to:i},{name:"interval",to:"#interval"},{name:"minify",to:"#minify"},{name:"routes",to:"#routes"},{name:"subFolders",to:"#subfolders"},{name:"concurrency",to:"#concurrency"}]},{name:q,to:"/configuration-head"},{name:"hooks",to:"/configuration-hooks"},{name:"ignore",to:"/configuration-ignore"},{name:j,to:"/configuration-loading",contents:[{name:"Disable the Progress Bar",to:"#disable-the-progress-bar"},{name:"Customize the Progress Bar",to:"#customize-the-progress-bar"},{name:"Use a Custom Loading Component",to:"#use-a-custom-loading-component"},{name:"Internals of the Progress Bar",to:"#internals-of-the-progress-bar"}]},{name:"loadingIndicator",to:"/configuration-loading-indicator"},{name:R,to:"/configuration-mode"},{name:"modern",to:"/configuration-modern"},{name:"modules",to:"/configuration-modules"},{name:"modulesDir",to:"/configuration-modulesdir"},{name:A,to:"/configuration-plugins"},{name:W,to:"/configuration-render",contents:[{name:"bundleRenderer",to:"#bundlerenderer"},{name:"etag",to:"#etag"},{name:"compressor",to:"#compressor"},{name:o,to:i},{name:"http2",to:"#http2"},{name:"injectScripts",to:"#injectscripts"},{name:"resourceHints",to:"#resourcehints"},{name:"ssr",to:N},{name:"ssrLog",to:"#ssrlog"},{name:"static",to:O},{name:"dist",to:"#dist"},{name:"csp",to:"#csp"}]},{name:"rootDir",to:"/configuration-rootdir"},{name:"router",to:"/configuration-router",contents:[{name:"base",to:"#base"},{name:"routeNameSplitter",to:"#routenamesplitter"},{name:"extendRoutes",to:"#extendroutes"},{name:o,to:i},{name:"linkActiveClass",to:"#linkactiveclass"},{name:"linkExactActiveClass",to:"#linkexactactiveclass"},{name:"linkPrefetchedClass",to:"#linkprefetchedclass"},{name:S,to:F},{name:R,to:"#mode"},{name:"parseQuery / stringifyQuery",to:"#parsequery-stringifyquery"},{name:"prefetchLinks",to:"#prefetchlinks"},{name:"scrollBehavior",to:"#scrollbehavior"}]},{name:"server",to:"/configuration-server"},{name:"serverMiddleware",to:"/configuration-servermiddleware"},{name:"srcDir",to:"/configuration-srcdir"},{name:"dir",to:"/configuration-dir"},{name:k,to:"/configuration-transition"},{name:"vue.config",to:"/configuration-vue-config"},{name:T,to:"/configuration-watch"},{name:"globalName",to:"/configuration-global-name"},{name:"watchers",to:"/configuration-watchers",contents:[{name:"chokidar",to:"#chokidar"},{name:"webpack",to:M}]}]},{title:"Programmatically",links:[{name:"Usage",to:"/nuxt"},{name:W,to:"/nuxt-render"},{name:"renderRoute",to:"/nuxt-render-route"},{name:"renderAndGetWindow",to:"/nuxt-render-and-get-window"}]},{title:"Internals",links:[{name:"Intro",to:"/internals"},{name:"Nuxt",to:"/internals-nuxt"},{name:"Renderer",to:"/internals-renderer"},{name:"Module Container",to:"/internals-module-container"},{name:"Builder",to:"/internals-builder"},{name:"Generator",to:"/internals-generator"}]}],faq:[{title:s,links:[{name:"How to use external resources?",to:""},{name:"How to use pre-processors?",to:"/pre-processors"},{name:"How to use JSX?",to:"/jsx"},{name:"How to add PostCSS plugins?",to:"/postcss-plugins"},{name:"How to extend webpack config?",to:"/extend-webpack"},{name:"How to add webpack plugins?",to:"/webpack-plugins"},{name:"How to edit HOST and PORT?",to:"/host-port"},{name:"How to use cached components?",to:"/cached-components"},{name:"How to use Google Analytics?",to:"/google-analytics"},{name:"How to share cross origin resource?",to:"/http-proxy"},{name:"How to extend Webpack config to load audio files?",to:"/webpack-audio-files"}]},{title:"Development",links:[{name:"window/document undefined?",to:"/window-document-undefined"},{name:"Why a CSS Flash appears?",to:"/css-flash"},{name:"Async data in components?",to:"/async-data-components"},{name:"Duplicated Meta Tags?",to:"/duplicated-meta-tags"},{name:"iOS and phone numbers",to:"/ios-phone-numbers"}]},{title:"Deployment",links:[{name:"Deploy on AWS w/ S3 and Cloudfront",to:"/deployment-aws-s3-cloudfront"},{name:"Deploy on Azure Portal",to:"/deployment-azure-portal"},{name:"Deploy on Dokku",to:"/dokku-deployment"},{name:"Deploy on GitHub",to:"/github-pages"},{name:"Deploy on Google App Engine",to:"/appengine-deployment"},{name:"Deploy on Heroku",to:"/heroku-deployment"},{name:"Deploy on Netlify",to:"/netlify-deployment"},{name:"Deploy on Now",to:"/now-deployment"},{name:"Deploy on Surge",to:"/surge-deployment"},{name:"Using nginx as a proxy",to:"/nginx-proxy"}]}],guide:[{title:"Prologue",links:[{to:"",name:l,contents:[{to:"#what-is-nuxt-js-",name:"What is Nuxt.js?"},{to:"#how-it-works",name:"How it Works"},{to:"#features",name:"Features"},{to:"#schema",name:"Schema"},{to:"#server-rendered-universal-ssr-",name:"Server Rendered"},{to:"#single-page-applications-spa-",name:"Single Page Application"},{to:"#static-generated-pre-rendering-",name:"Static Generated"}]},{to:"/contribution-guide",name:"Contribution Guide"},{to:"/release-notes",name:H}]},{title:"Getting Started",links:[{to:"/installation",name:"Installation",contents:[{to:"#using-nuxt-js-starter-template",name:"Using Nuxt.js starter template"},{to:"#starting-from-scratch",name:"Starting from scratch"}]},{to:"/directory-structure",name:"Directory Structure",contents:[{to:"#directories",name:"Directories"},{to:"#aliases",name:"Aliases"}]},{to:"/configuration",name:s},{to:"/routing",name:"Routing",contents:[{to:"#basic-routes",name:"Basic Routes"},{to:"#dynamic-routes",name:"Dynamic Routes"},{to:"#nested-routes",name:d},{to:"#dynamic-nested-routes",name:"Dynamic Nested Routes"},{to:"#named-views",name:p},{to:"#transitions",name:"Transitions"},{to:F,name:c}]},{to:"/views",name:"Views",contents:[{to:"#document",name:"Document"},{to:"#layouts",name:r},{to:"#pages",name:y},{to:"#html-head",name:"HTML Head"}]},{to:g,name:h,contents:[{to:"#the-asyncdata-method",name:"The asyncData Method"},{to:"#the-context",name:"The Context"},{to:"#handling-errors",name:"Handling Errors"}]},{to:"/assets",name:"Assets",contents:[{to:M,name:"Webpack"},{to:O,name:"Static"}]},{to:m,name:u,contents:[{to:"#external-packages",name:"External Packages"},{to:"#vue-plugins",name:"Vue Plugins"},{to:"#inject-in-root-amp-context",name:"Inject in $root & context"},{to:"#client-side-only",name:"Client-side only"}]},{to:"/modules",name:"Modules",contents:[{to:"#introduction",name:l},{to:"#list-of-nuxt-js-modules",name:"List of Nuxt.js modules"},{to:"#write-a-basic-module",name:"Write a basic Module"},{to:"#async-modules",name:"Async Modules"},{to:"#common-snippets",name:"Common Snippets"},{to:"#run-tasks-on-specific-hooks",name:"Run Tasks on Specific hooks"},{to:"#module-package-commands",name:"Module package commands"}]},{to:b,name:a,contents:[{to:"#activate-the-store",name:"Activate the Store"},{to:"#modules-mode",name:"Modules mode"},{to:"#the-fetch-method",name:"The fetch Method"},{to:"#the-nuxtserverinit-action",name:"The nuxtServerInit Action"},{to:"#classic-mode",name:"Classic mode"}]},{to:w,name:"TypeScript Support",contents:[{to:"#get-started",name:"Get started"},{to:"#from-javascript-to-typescript",name:"From JavaScript to TypeScript"},{to:"#linting-with-eslint",name:"Linting with ESLint"}]},{to:"/commands",name:"Commands and Deployment",contents:[{to:"#list-of-commands",name:"List of Commands"},{to:"#development-environment",name:"Development Enviroment"},{to:"#production-deployment",name:"Production Deployment"}]},{to:"/development-tools",name:"Development Tools",contents:[{to:"#end-to-end-testing",name:"End-to-End Testing"},{to:"#eslint-and-prettier",name:"ESLint and Prettier"}]}]}]},homepage:{index:{attrs:{fallback:e},body:""},backers:{attrs:{title:"Support the Team",fallback:e},body:"Nuxt.js is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. Your donations directly support office hours, continued enhancements, and most importantly, great documentation and learning material.<br>"},modes_single_page_app:{attrs:{title:"Single Page App",content_title:"Single Page Application (SPA)",fallback:e},body:"Don&#39;t need SSR or Static Site Generation but still want to profit from the benefits that Nuxt provides?\nAre you slowly transitioning your app and want to start lightweight? Then the traditional SPA mode will\nlikely be your choice.\nThe outcome will be a typical Vue SPA as you know it but influenced by your Nuxt configuration and the\nframework itself.<br>"},modes_server_side_rendering:{attrs:{title:"Server Side Rendered",content_title:"Server Side Rendered (Universal)",fallback:e},body:"The most popular mode for Nuxt. With SSR, also called &quot;universal&quot; or &quot;isomorphic&quot; mode, a Node.js server\nwill be used to deliver HTML based on your Vue components to the client instead of the pure javascript.\nUsing SSR will lead to a large SEO boost, better UX and more opportunities (compared to a traditional Vue SPA).<br><br>\nBecause implementing SSR on your own can be really tedious, Nuxt.js gives you full support out of the box\nand will take care of common pitfalls.<br>"},modes_statically_generated:{attrs:{title:"Statically Generated",content_title:"Statically Generated (Pre-Rendering)",fallback:e},body:'Static Site Generation is a very hot topic right now! Instead of switching to another framework and\nspending time to get used to it, why not killing two birds with one stone?\n<span style="color: #777">(only proverbial 🐦🐦)</span><br><br>\nNuxt.js supports generating a static website based on your Vue application. It is the &quot;best of both worlds&quot;\nas you don&#39;t need a server but still have SEO benefits because Nuxt will pre-render all pages and include\nthe necessary HTML. Also, you can deploy the resulting page easily to Netlify or GitHub pages.<br>'},modes:{attrs:{title:"Rendering modes",fallback:e},body:"NO CONTENTS<br>"},welcome_figure:{attrs:{title:"Welcome figure - video",fallback:e},body:'Video produced by <a href="https://www.vuemastery.com" target="_blank" rel="noopener">Vue Mastery</a>, download their free <a href="https://www.vuemastery.com/nuxt-cheat-sheet/" target="_blank" rel="noopener">Nuxt Cheat Sheet</a>.<br>'},welcome:{attrs:{title:'The <span class="nWelcome_Content_Title_Primary">Vue.js</span> Framework',fallback:e},body:"Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable.<br>"},why_modular:{attrs:{title:"Modular",fallback:e},body:"Nuxt is based on a powerful modular architecture. You can choose from more than 50 modules to make your development faster and easier. You don&#39;t have to reinvent the wheel to get PWA benefits, add Google Analytics to your page or generate a sitemap.<br>"},why_enjoyable:{attrs:{title:"Enjoyable",fallback:e},body:"Our main focus is the Developer Experience. We love Nuxt.js and continuously improve the framework so you love it too! 💚<br>Expect appealing solutions, descriptive error messages, powerful defaults and detailed documentation. If questions or problems come up, our helpful community will help you out.<br>"},why_performant:{attrs:{title:"Performant",fallback:e},body:"With Nuxt.js, your application will be optimized out of the box.\nWe do our best to build performant applications by utilizing Vue.js and Node.js best practices.\nTo squeeze every unnecessary bit out of your app Nuxt includes a bundle analyzer and lots of opportunities to fine-tune your app.<br>"},why:{attrs:{title:"Why Nuxt?",fallback:e},body:""}},adBlocked:!1},serverRendered:e}}(!0,0,0,"Vuex Store","Configuration","fallback","#fallback","Introduction","Layouts","Middleware","Named Views","Nested Routes","Plugins","/plugins","Async Data","/async-data",0,"/vuex-store","/typescript","Pages","2.8.X","loading","middleware","transition","Sponsors","devtools","#devtools","plugins",0,"#ssr","watch",0,"Release Notes","Hello World","mode","render","#static","#middleware","#webpack","head")