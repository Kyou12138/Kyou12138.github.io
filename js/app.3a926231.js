(function(t){function e(e){for(var a,o,c=e[0],r=e[1],l=e[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},s={app:0},i=[];function c(t){return r.p+"js/"+({about:"about",blog:"blog",blogdetail:"blogdetail",home:"home",message:"message",project:"project"}[t]||t)+"."+{about:"9c35ca8d",blog:"591e061a",blogdetail:"3cc52d9a",home:"d7a15afe",message:"4998b719",project:"ef4e6c40"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n={about:1,blog:1,blogdetail:1,home:1,message:1,project:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({about:"about",blog:"blog",blogdetail:"blogdetail",home:"home",message:"message",project:"project"}[t]||t)+"."+{about:"cb6555fc",blog:"b6e3300e",blogdetail:"fd98befc",home:"59c7b26f",message:"db14a7a7",project:"62180057"}[t]+".css",s=r.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],p=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(p===a||p===s))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],p=l.getAttribute("data-href");if(p===a||p===s)return e()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var a=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],u.parentNode.removeChild(u),n(i)},u.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(u)})).then((function(){o[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=i);var l,p=document.createElement("script");p.charset="utf-8",p.timeout=120,r.nc&&p.setAttribute("nonce",r.nc),p.src=c(t);var d=new Error;l=function(e){p.onerror=p.onload=null,clearTimeout(u);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}s[t]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:p})}),12e4);p.onerror=p.onload=l,document.head.appendChild(p)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=p;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"008b":function(t,e,n){},"0212":function(t,e,n){"use strict";n("7042")},"02db":function(t,e,n){"use strict";n("df12")},"077b":function(t,e,n){"use strict";n("13cc")},"0c6d":function(t,e,n){"use strict";var a=n("cebe"),o=n.n(a),s=n("ed08");const i=o.a.create();i.interceptors.response.use(t=>0!==t.data.code?(Object(s["c"])({content:t.data.msg,type:"error",duration:1500}),null):t.data.data),e["a"]=i},"13cc":function(t,e,n){},"1a64":function(t,e,n){"use strict";n("abfc")},"2c81":function(t,e,n){t.exports=n.p+"img/404.5b8a38c7.jpg"},"2ee2":function(t,e,n){},3818:function(t,e,n){"use strict";n("008b")},4045:function(t,e,n){t.exports=n.p+"img/loading.6cc04d10.svg"},4174:function(t,e,n){t.exports=n.p+"img/default.969421d9.gif"},"4b51":function(t,e,n){},"507a":function(t,e,n){"use strict";n("2ee2")},"536b":function(t,e,n){t.exports={message:"showMessage-module_message_3v7H3","message-info":"showMessage-module_message-info_1ZW3l","message-success":"showMessage-module_message-success_gMWiM","message-warn":"showMessage-module_message-warn_1Jfh3","message-error":"showMessage-module_message-error_2UIr3",icon:"showMessage-module_icon_3nHuj"}},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("8bbf"),o=n.n(a),s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[e("Layout",{scopedSlots:t._u([{key:"left",fn:function(){return[e("div",{staticClass:"aside"},[e("SiteAside")],1)]},proxy:!0},{key:"default",fn:function(){return[e("RouterView")]},proxy:!0}])}),e("ToTop")],1)},i=[],c=n("5849"),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"site-aside-container"},[t.data?[e("Avatar",{attrs:{url:t.data.avatar}}),e("h1",{staticClass:"title"},[t._v(t._s(t.data.siteTitle))])]:t._e(),e("Menu"),t.data?e("Contact"):t._e(),t.data?e("p",{staticClass:"footer"},[t._v(t._s(t.data.icp))]):t._e()],2)},l=[],p=n("77c0"),d=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"menu-container"},t._l(t.menus,(function(n){return e("RouterLink",{key:n.url,attrs:{to:{name:n.routeName},"active-class":"selected",exact:n.exact}},[e("div",{staticClass:"icon"},[e("Icon",{attrs:{type:n.icon}})],1),e("span",[t._v(t._s(n.name))])])})),1)},u=[],m=n("d010"),g={components:{Icon:m["a"]},data(){return{menus:[{routeName:"Home",name:"首页",icon:"home",exact:!0},{routeName:"Blog",name:"文章",icon:"blog",exact:!1},{routeName:"About",name:"关于",icon:"about",exact:!0},{routeName:"Project",name:"项目&效果",icon:"code",exact:!0},{routeName:"Message",name:"留言板",icon:"chat",exact:!0}]}},methods:{}},h=g,f=(n("ea57"),n("2877")),b=Object(f["a"])(h,d,u,!1,null,"a6f1ea74",null),y=b.exports,v=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"contact-container"},[e("li",[e("a",{attrs:{target:"_blank",href:t.data.github}},[e("div",{staticClass:"icon"},[e("Icon",{attrs:{type:"github"}})],1),e("span",[t._v(t._s(t.data.githubName))])])]),e("li",[e("a",{attrs:{href:"mailto:"+t.data.mail}},[e("div",{staticClass:"icon"},[e("Icon",{attrs:{type:"mail"}})],1),e("span",[t._v(t._s(t.data.mail))])])]),e("li",[e("a",{attrs:{href:`tencent://message/?Menu=yes&uin=${t.data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`}},[e("div",{staticClass:"icon"},[e("Icon",{attrs:{type:"qq"}})],1),e("span",[t._v(t._s(t.data.qq))])]),e("div",{staticClass:"pop"},[e("img",{attrs:{src:""+t.data.qqQrCode}})])]),e("li",[e("a",[e("div",{staticClass:"icon weixin"},[e("Icon",{attrs:{type:"weixin"}})],1),e("span",[t._v(t._s(t.data.weixin))])]),e("div",{staticClass:"pop"},[e("img",{attrs:{src:""+t.data.weixinQrCode}})])])])},j=[],w=n("5880"),C={components:{Icon:m["a"]},computed:{...Object(w["mapState"])("setting",["data"])}},x=C,_=(n("077b"),Object(f["a"])(x,v,j,!1,null,"4b0ee2f8",null)),O=_.exports,S={components:{Avatar:p["a"],Menu:y,Contact:O},computed:{...Object(w["mapState"])("setting",["data"])}},T=S,k=(n("6bc0"),Object(f["a"])(T,r,l,!1,null,"12984cc5",null)),A=k.exports,q=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"to-top-container",on:{click:t.handleClick}},[t._v("Top")])},M=[],P={data(){return{show:!1}},methods:{handleScroll(t){this.show=!!t&&t.scrollTop>=500},handleClick(){this.$bus.$emit("setMainScroll",0)}},created(){this.$bus.$on("mainScroll",this.handleScroll)},beforeDestroy(){this.$bus.$off("mainScroll",this.handleScroll)}},z=P,D=(n("1a64"),Object(f["a"])(z,q,M,!1,null,"5241cdcb",null)),$=D.exports,N={components:{Layout:c["a"],SiteAside:A,ToTop:$}},L=N,H=(n("02db"),Object(f["a"])(L,s,i,!1,null,"256ffe65",null)),R=H.exports,E=(n("4b51"),n("6389")),I=n.n(E),J=(n("a5d8"),function(){var t=this;t._self._c;return t._m(0)}),B=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"not-found-container"},[e("img",{attrs:{src:n("2c81"),alt:""}})])}],K={},V=K,G=(n("0212"),Object(f["a"])(V,J,B,!1,null,"08021f01",null)),W=G.exports,Q=n("323e");function U(t){return async()=>{Object(Q["start"])();const e=await t();return Object(Q["done"])(),e}}Object(Q["configure"])({trickleSpeed:20,showSpinner:!1});var F=[{name:"Home",path:"/",component:U(()=>n.e("home").then(n.bind(null,"16c0"))),meta:{title:"首页"}},{name:"About",path:"/about",component:U(()=>n.e("about").then(n.bind(null,"0737"))),meta:{title:"关于我"}},{name:"Blog",path:"/article",component:U(()=>n.e("blog").then(n.bind(null,"3b5d"))),meta:{title:"文章"}},{name:"CategoryBlog",path:"/article/cate/:categoryId",component:U(()=>n.e("blog").then(n.bind(null,"3b5d"))),meta:{title:"文章"}},{name:"BlogDetail",path:"/article/:id",component:U(()=>n.e("blogdetail").then(n.bind(null,"ccf9"))),meta:{title:"文章详情"}},{name:"Project",path:"/project",component:U(()=>n.e("project").then(n.bind(null,"34fb"))),meta:{title:"项目&效果"}},{name:"Message",path:"/message",component:U(()=>n.e("message").then(n.bind(null,"8fc4"))),meta:{title:"留言板"}},{name:"NotFound",path:"*",component:W}],X=n("ed08");window.VueRouter||o.a.use(I.a);const Y=new I.a({routes:F,mode:"history"});Y.afterEach((t,e)=>{t.meta.title&&X["d"].setRouteTitle(t.meta.title)});var Z=Y,tt=n("96eb"),et=n.n(tt);et.a.mock("/api/banner","get",{code:0,msg:"",data:[{id:"2",midImg:"/img/1-1.png",bigImg:"/img/1-2.png",title:"血火同源",description:"如果我回头，一切都完了"},{id:"1",midImg:"/img/2-1.png",bigImg:"/img/2-2.png",title:"凛冬将至",description:"人唯有恐惧的时候方能勇敢"},{id:"3",midImg:"/img/3-1.png",bigImg:"/img/3-2.png",title:"听我怒吼",description:"兰尼斯特有债必偿"}]});var nt=n("b383"),at=n.n(nt);et.a.mock("/api/blogtype","get",{code:0,msg:"","data|10-20":[{"id|+1":1,name:"分类@id","articleCount|0-300":0,"order|+1":1}]}),et.a.mock(/^\/api\/blog(\?.+)?$/,"get",(function(t){const e=at.a.parse(t.url),n={"total|2000-3000":0,["rows|"+(e.limit||10)]:[{id:"@guid",title:"@ctitle(1, 50)",description:"@cparagraph(1, 10)",category:{"id|1-10":0,name:"分类@id"},"scanNumber|0-3000":0,"commentNumber|0-300":30,"thumb|1":["@image(300x250, @color, #fff, @natural)"],createDate:"@date('T')"}]};return et.a.mock({code:0,msg:"",data:n})})),et.a.mock(/^\/api\/blog\/[^/]+$/,"get",{code:0,msg:"",data:{id:"@guid",title:"CORS跨域方案详解",category:{"id|1-10":1,name:"分类@id"},description:"@cparagraph(1, 10)","scanNumber|0-10000":0,"commentNumber|0-100":0,createDate:"@date('T')",toc:[{name:"概述",anchor:"article-md-title-1"},{name:"简单请求",anchor:"article-md-title-2",children:[{name:"简单请求的判定",anchor:"article-md-title-3"},{name:"简单请求的交互规范",anchor:"article-md-title-4"}]},{name:"需要预检的请求",anchor:"article-md-title-5"},{name:"附带身份凭证的请求",anchor:"article-md-title-6"},{name:"一个额外的补充",anchor:"article-md-title-7"}],"thumb|1":[et.a.Random.image("300x250","#000","#fff","Random Image"),null],htmlContent:'<blockquote>\n  <p>阅读本文，你需要首先知道：</p><ol>\n  <li>浏览器的同源策略</li>\n  <li>跨域问题</li>\n  <li>JSONP原理</li>\n  <li>cookie原理</li>\n  </ol>\n  </blockquote>\n  <p>JSONP并不是一个好的跨域解决方案，它至少有着下面两个严重问题：</p><ol>\n  <li><strong>会打乱服务器的消息格式</strong>：JSONP要求服务器响应一段JS代码，但在非跨域的情况下，服务器又需要响应一个正常的JSON格式</li>\n  <li><strong>只能完成GET请求</strong>：JSONP的原理会要求浏览器端生成一个<code>script</code>元素，而<code>script</code>元素发出的请求只能是<code>get</code>请求</li>\n  </ol>\n  <p>所以，CORS是一种更好的跨域解决方案。</p><h1 id="article-md-title-1">概述</h1><p><code>CORS</code>是基于<code>http1.1</code>的一种跨域解决方案，它的全称是<strong>C</strong>ross-<strong>O</strong>rigin <strong>R</strong>esource <strong>S</strong>haring，跨域资源共享。</p><p>它的总体思路是：<strong>如果浏览器要跨域访问服务器的资源，需要获得服务器的允许</strong></p><figure class="markdown-image">\n        \n        <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421152122793.png" title="image-20200421152122793" alt="image-20200421152122793">\n        <figcaption>image-20200421152122793</figcaption>\n    \n      </figure><p>而要知道，一个请求可以附带很多信息，从而会对服务器造成不同程度的影响</p><p>比如有的请求只是获取一些新闻，有的请求会改动服务器的数据</p><p>针对不同的请求，CORS规定了三种不同的交互模式，分别是：</p><ul>\n  <li><strong>简单请求</strong></li>\n  <li><strong>需要预检的请求</strong></li>\n  <li><strong>附带身份凭证的请求</strong></li>\n  </ul>\n  <p>这三种模式从上到下层层递进，请求可以做的事越来越多，要求也越来越严格。</p><p>下面分别说明三种请求模式的具体规范。</p><h1 id="article-md-title-2">简单请求</h1><p>当浏览器端运行了一段ajax代码（无论是使用XMLHttpRequest还是fetch api），浏览器会首先判断它属于哪一种请求模式</p><h2 id="article-md-title-3">简单请求的判定</h2><p>当请求<strong>同时满足</strong>以下条件时，浏览器会认为它是一个简单请求：</p><ol>\n  <li><p><strong>请求方法属于下面的一种：</strong></p><ul>\n  <li>get</li>\n  <li>post</li>\n  <li>head</li>\n  </ul>\n  </li>\n  <li><p><strong>请求头仅包含安全的字段，常见的安全字段如下：</strong></p><ul>\n  <li><code>Accept</code></li>\n  <li><code>Accept-Language</code></li>\n  <li><code>Content-Language</code></li>\n  <li><code>Content-Type</code></li>\n  <li><code>DPR</code></li>\n  <li><code>Downlink</code></li>\n  <li><code>Save-Data</code></li>\n  <li><code>Viewport-Width</code></li>\n  <li><code>Width</code></li>\n  </ul>\n  </li>\n  <li><p><strong>请求头如果包含<code>Content-Type</code>，仅限下面的值之一：</strong></p><ul>\n  <li><code>text/plain</code></li>\n  <li><code>multipart/form-data</code></li>\n  <li><code>application/x-www-form-urlencoded</code></li>\n  </ul>\n  </li>\n  </ol>\n  <p>如果以上三个条件同时满足，浏览器判定为简单请求。</p><p>下面是一些例子：</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);\n  \n  <span class="hljs-comment">// 请求方法不满足要求，不是简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">method</span>:<span class="hljs-string">"PUT"</span>\n  })\n  \n  <span class="hljs-comment">// 加入了额外的请求头，不是简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">headers</span>:{\n      <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>\n    }\n  })\n  \n  <span class="hljs-comment">// 简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>\n  })\n  \n  <span class="hljs-comment">// content-type不满足要求，不是简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n    <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>,\n    <span class="hljs-attr">headers</span>: {\n      <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n    }\n  })</code></pre>\n  <h2 id="article-md-title-4">简单请求的交互规范</h2><p>当浏览器判定某个<strong>ajax跨域请求</strong>是<strong>简单请求</strong>时，会发生以下的事情</p><ol>\n  <li><strong>请求头中会自动添加<code>Origin</code>字段</strong></li>\n  </ol>\n  <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);</code></pre>\n  <p>请求发出后，请求头会是下面的格式：</p><pre><code>GET /api/news/ HTTP/1.1\n  Host: crossdomain.com\n  Connection: keep-alive\n  ...\n  Referer: http://my.com/index.html\n  Origin: http://my.com</code></pre><p>看到最后一行没，<code>Origin</code>字段会告诉服务器，是哪个源地址在跨域请求</p><ol start="2">\n  <li><strong>服务器响应头中应包含<code>Access-Control-Allow-Origin</code></strong></li>\n  </ol>\n  <p>当服务器收到请求后，如果允许该请求跨域访问，需要在响应头中添加<code>Access-Control-Allow-Origin</code>字段</p><p>该字段的值可以是：</p><ul>\n  <li>*：表示我很开放，什么人我都允许访问</li>\n  <li>具体的源：比如<code>http://my.com</code>，表示我就允许你访问</li>\n  </ul>\n  <blockquote>\n  <p>实际上，这两个值对于客户端<code>http://my.com</code>而言，都一样，因为客户端才不会管其他源服务器允不允许，就关心自己是否被允许</p><p>当然，服务器也可以维护一个可被允许的源列表，如果请求的<code>Origin</code>命中该列表，才响应<code>*</code>或具体的源</p><p><strong>为了避免后续的麻烦，强烈推荐响应具体的源</strong></p></blockquote>\n  <p>假设服务器做出了以下的响应：</p><pre><code>HTTP/1.1 200 OK\n  Date: Tue, 21 Apr 2020 08:03:35 GMT\n  ...\n  Access-Control-Allow-Origin: http://my.com\n  ...\n  \n  消息体中的数据</code></pre><p>当浏览器看到服务器允许自己访问后，高兴的像一个两百斤的孩子，于是，它就把响应顺利的交给js，以完成后续的操作</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n        \n        <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421162846480.png" title="image-20200421162846480" alt="image-20200421162846480">\n        <figcaption>image-20200421162846480</figcaption>\n    \n      </figure><h1 id="article-md-title-5">需要预检的请求</h1><p>简单的请求对服务器的威胁不大，所以允许使用上述的简单交互即可完成。</p><p>但是，如果浏览器不认为这是一种简单请求，就会按照下面的流程进行：</p><ol>\n  <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n  <li><strong>服务器允许</strong></li>\n  <li><strong>浏览器发送真实请求</strong></li>\n  <li><strong>服务器完成真实的响应</strong></li>\n  </ol>\n  <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 需要预检的请求</span>\n  fetch(<span class="hljs-string">"http://crossdomain.com/api/user"</span>, {\n    <span class="hljs-attr">method</span>:<span class="hljs-string">"POST"</span>, <span class="hljs-comment">// post 请求</span>\n    <span class="hljs-attr">headers</span>:{  <span class="hljs-comment">// 设置请求头</span>\n      <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>,\n      <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>,\n      <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n    },\n    <span class="hljs-attr">body</span>: <span class="hljs-built_in">JSON</span>.stringify({ <span class="hljs-attr">name</span>: <span class="hljs-string">"袁小进"</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">18</span> }) <span class="hljs-comment">// 设置请求体</span>\n  });</code></pre>\n  <p>浏览器发现它不是一个简单请求，则会按照下面的流程与服务器交互</p><ol>\n  <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n  </ol>\n  <pre><code>OPTIONS /api/user HTTP/1.1\n  Host: crossdomain.com\n  ...\n  Origin: http://my.com\n  Access-Control-Request-Method: POST\n  Access-Control-Request-Headers: a, b, content-type</code></pre><p>可以看出，这并非我们想要发出的真实请求，请求中不包含我们的响应头，也没有消息体。</p><p>这是一个预检请求，它的目的是询问服务器，是否允许后续的真实请求。</p><p>预检请求<strong>没有请求体</strong>，它包含了后续真实请求要做的事情</p><p>预检请求有以下特征：</p><ul>\n  <li>请求方法为<code>OPTIONS</code></li>\n  <li>没有请求体</li>\n  <li>请求头中包含<ul>\n  <li><code>Origin</code>：请求的源，和简单请求的含义一致</li>\n  <li><code>Access-Control-Request-Method</code>：后续的真实请求将使用的请求方法</li>\n  <li><code>Access-Control-Request-Headers</code>：后续的真实请求会改动的请求头</li>\n  </ul>\n  </li>\n  </ul>\n  <ol start="2">\n  <li><strong>服务器允许</strong></li>\n  </ol>\n  <p>服务器收到预检请求后，可以检查预检请求中包含的信息，如果允许这样的请求，需要响应下面的消息格式</p><pre><code>HTTP/1.1 200 OK\n  Date: Tue, 21 Apr 2020 08:03:35 GMT\n  ...\n  Access-Control-Allow-Origin: http://my.com\n  Access-Control-Allow-Methods: POST\n  Access-Control-Allow-Headers: a, b, content-type\n  Access-Control-Max-Age: 86400\n  ...</code></pre><p>对于预检请求，不需要响应任何的消息体，只需要在响应头中添加：</p><ul>\n  <li><code>Access-Control-Allow-Origin</code>：和简单请求一样，表示允许的源</li>\n  <li><code>Access-Control-Allow-Methods</code>：表示允许的后续真实的请求方法</li>\n  <li><code>Access-Control-Allow-Headers</code>：表示允许改动的请求头</li>\n  <li><code>Access-Control-Max-Age</code>：告诉浏览器，多少秒内，对于同样的请求源、方法、头，都不需要再发送预检请求了</li>\n  </ul>\n  <ol start="3">\n  <li><strong>浏览器发送真实请求</strong></li>\n  </ol>\n  <p>预检被服务器允许后，浏览器就会发送真实请求了，上面的代码会发生下面的请求数据</p><pre><code>POST /api/user HTTP/1.1\n  Host: crossdomain.com\n  Connection: keep-alive\n  ...\n  Referer: http://my.com/index.html\n  Origin: http://my.com\n  \n  {"name": "袁小进", "age": 18 }</code></pre><ol start="4">\n  <li><strong>服务器响应真实请求</strong></li>\n  </ol>\n  <pre><code>HTTP/1.1 200 OK\n  Date: Tue, 21 Apr 2020 08:03:35 GMT\n  ...\n  Access-Control-Allow-Origin: http://my.com\n  ...\n  \n  添加用户成功</code></pre><p>可以看出，当完成预检之后，后续的处理与简单请求相同</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n        \n        <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421165913320.png" title="image-20200421165913320" alt="image-20200421165913320">\n        <figcaption>image-20200421165913320</figcaption>\n    \n      </figure><h1 id="article-md-title-6">附带身份凭证的请求</h1><p>默认情况下，ajax的跨域请求并不会附带cookie，这样一来，某些需要权限的操作就无法进行</p><p>不过可以通过简单的配置就可以实现附带cookie</p><pre><code class="language-js"><span class="hljs-comment">// xhr</span>\n  <span class="hljs-keyword">var</span> xhr = <span class="hljs-keyword">new</span> XMLHttpRequest();\n  xhr.withCredentials = <span class="hljs-literal">true</span>;\n  \n  <span class="hljs-comment">// fetch api</span>\n  fetch(url, {\n    <span class="hljs-attr">credentials</span>: <span class="hljs-string">"include"</span>\n  })</code></pre>\n  <p>这样一来，该跨域的ajax请求就是一个<em>附带身份凭证的请求</em></p><p>当一个请求需要附带cookie时，无论它是简单请求，还是预检请求，都会在请求头中添加<code>cookie</code>字段</p><p>而服务器响应时，需要明确告知客户端：服务器允许这样的凭据</p><p>告知的方式也非常的简单，只需要在响应头中添加：<code>Access-Control-Allow-Credentials: true</code>即可</p><p>对于一个附带身份凭证的请求，若服务器没有明确告知，浏览器仍然视为跨域被拒绝。</p><p>另外要特别注意的是：<strong>对于附带身份凭证的请求，服务器不得设置 <code>Access-Control-Allow-Origin 的值为*</code></strong>。这就是为什么不推荐使用*的原因</p><h1 id="article-md-title-7">一个额外的补充</h1><p>在跨域访问时，JS只能拿到一些最基本的响应头，如：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头。</p><p><code>Access-Control-Expose-Headers</code>头让服务器把允许浏览器访问的头放入白名单，例如：</p><pre><code>Access-Control-Expose-Headers: authorization, a, b</code></pre><p>这样JS就能够访问指定的响应头了。</p>'}}),et.a.mock("/api/comment","post",{code:0,msg:"",data:{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}}),et.a.mock(/^\/api\/comment\/?(\?.+)?$/,"get",(function(t){const e=at.a.parse(t.url);return et.a.mock({code:0,msg:"",data:{total:52,["rows|"+(e.limit||10)]:[{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["/img/avatar/avatar6.jpg","/img/avatar/avatar4.jpg","/img/avatar/avatar8.jpg","/img/avatar/avatar2.jpg"]}]}})})),et.a.mock("/api/setting","get",{code:0,msg:"",data:{avatar:"/img/avatar.jpg",siteTitle:"Kyou的空间",github:"https://github.com/Kyou12138",qq:"1129057944",qqQrCode:"/img/qqcode.png",weixin:"Kyou0203",weixinQrCode:"/img/wxcode.png",mail:"kyou12138@gmail.com",icp:"TEST",githubName:"Kyou",favicon:"/img/my.ico"}}),et.a.mock("/api/about","get",{code:0,msg:"",data:"/pages/resume.html"}),et.a.mock(/^\/api\/project\/?$/,"get",{code:0,msg:"","data|10-20":[{id:"@uuid",name:"@ctitle(1, 10)","url|1":["@url",null],"github|1":["@url",null],"description|1-4":["@cparagraph(1, 5)"],thumb:"@image(300x250, @color, #fff, @natural)"}]}),et.a.mock("/api/message","post",{code:0,msg:"",data:{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}}),et.a.mock(/^\/api\/message\/?(\?.+)?$/,"get",(function(t){const e=at.a.parse(t.url);return et.a.mock({code:0,msg:"",data:{total:52,["rows|"+(e.limit||10)]:[{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}]}})})),et.a.setup({timeout:"1000-2000"});const ot=new o.a({});o.a.prototype.$bus=ot;var st=ot,it=n("0c6d");async function ct(){return await it["a"].get("/api/banner")}var rt={namespaced:!0,state:{loading:!1,data:[]},mutations:{setLoading(t,e){t.loading=e},setData(t,e){t.data=e}},actions:{async fetchBanner(t){if(t.state.data.length)return;t.commit("setLoading",!0);const e=await ct();t.commit("setData",e),t.commit("setLoading",!1)}}};async function lt(){return await it["a"].get("/api/setting")}var pt={namespaced:!0,state:{loading:!1,data:[]},mutations:{setLoading(t,e){t.loading=e},setData(t,e){t.data=e}},actions:{async fetchSetting(t){t.commit("setLoading",!0);const e=await lt();if(t.commit("setData",e),t.commit("setLoading",!1),e.favicon){let t=document.querySelector("link[ref='shortcut icon']");if(t)return;t=document.createElement("link"),t.rel="shortcut icon",t.type="images/x-icon",t.href=e.favicon,document.querySelector("head").appendChild(t)}e.siteTitle&&X["d"].setSiteTitle(e.siteTitle)}}};async function dt(){return await it["a"].get("/api/about")}var ut={namespaced:!0,state:{loading:!1,data:""},mutations:{setLoading(t,e){t.loading=e},setData(t,e){t.data=e}},actions:{async fetchAbout(t){if(t.state.data)return;t.commit("setLoading",!0);const e=await dt();t.commit("setData",e),t.commit("setLoading",!1)}}};async function mt(){return await it["a"].get("/api/project")}var gt={namespaced:!0,state:{loading:!1,data:[]},mutations:{setLoading(t,e){t.loading=e},setData(t,e){t.data=e}},actions:{async fetchProject(t){if(t.state.data.length)return;t.commit("setLoading",!0);const e=await mt();t.commit("setData",e),t.commit("setLoading",!1)}}};window.Vuex||Object(w["install"])(o.a);var ht=new w["Store"]({modules:{banner:rt,setting:pt,about:ut,project:gt},strict:!0}),ft=n("4045"),bt=n.n(ft),yt=n("5c5c"),vt=n.n(yt);function jt(t){return t.querySelector("img[data-role=loading]")}function wt(){const t=document.createElement("img");return t.className=vt.a.loading,t.src=bt.a,t.dataset.role="loading",t}var Ct=function(t,e){let n=jt(t);e.value?n||(n=wt(),t.appendChild(n)):n&&n.remove()},xt=(n("14d9"),n("e9f5"),n("910d"),n("4174")),_t=n.n(xt);let Ot=[];function St(t){t.dom.src=_t.a;const e=t.dom.getBoundingClientRect(),n=document.documentElement.clientHeight,a=e.height||150;if(e.top>=-a&&e.top<=n){const e=new Image;e.onload=()=>{t.dom.src=t.src},e.src=t.src,Ot=Ot.filter(e=>e!==t)}}function Tt(){for(const t of Ot)St(t)}function kt(t){Tt()}st.$on("mainScroll",Object(X["a"])(kt,50));var At={inserted(t,e){const n={dom:t,src:e.value};Ot.push(n),St(n)},unbind(t){Ot=Ot.filter(e=>e.dom!==t)}};ht.dispatch("setting/fetchSetting"),o.a.prototype.$showMessage=X["c"],o.a.directive("loading",Ct),o.a.directive("lazy",At),new o.a({router:Z,store:ht,render:t=>t(R)}).$mount("#app")},5849:function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"layout-container"},[e("div",{staticClass:"left"},[t._t("left")],2),e("div",{staticClass:"main"},[t._t("default")],2),e("div",{staticClass:"right"},[t._t("right")],2)])},o=[],s={},i=s,c=(n("7fc6"),n("2877")),r=Object(c["a"])(i,a,o,!1,null,"151015f4",null);e["a"]=r.exports},5880:function(t,e){t.exports=Vuex},"5c5c":function(t,e,n){t.exports={loading:"loading-module_loading_1dKWw"}},6389:function(t,e){t.exports=VueRouter},"6bc0":function(t,e,n){"use strict";n("9b45")},7042:function(t,e,n){},"77c0":function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return e("img",{staticClass:"avatar-container",style:{width:t.size+"px",height:t.size+"px"},attrs:{src:t.url}})},o=[],s={props:{url:{type:String},size:{type:Number,default:150}}},i=s,c=(n("507a"),n("2877")),r=Object(c["a"])(i,a,o,!1,null,"5eaadbb9",null);e["a"]=r.exports},"7fc6":function(t,e,n){"use strict";n("8fea")},"8bbf":function(t,e){t.exports=Vue},"8ea2":function(t,e,n){},"8fea":function(t,e,n){},"9b45":function(t,e,n){},abfc:function(t,e,n){},cebe:function(t,e){t.exports=axios},d010:function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return e("i",{staticClass:"iconfont icon-container",class:t.fontClass})},o=[];const s={home:"iconzhuye",success:"iconzhengque",error:"iconcuowu",close:"iconguanbi",warn:"iconjinggao",info:"iconxinxi",blog:"iconblog",code:"iconcode",about:"iconset_about_hov",weixin:"iconweixin",mail:"iconemail",github:"icongithub",qq:"iconsign_qq",arrowUp:"iconiconfonticonfonti2copy",arrowDown:"iconiconfonticonfonti2",empty:"iconempty",chat:"iconliuyan"};Object.keys(s);var i={props:{type:{type:String,required:!0}},computed:{fontClass(){return s[this.type]}}},c=i,r=(n("3818"),n("2877")),l=Object(r["a"])(c,a,o,!1,null,"1fe8716f",null);e["a"]=l.exports},df12:function(t,e,n){},ea57:function(t,e,n){"use strict";n("8ea2")},ed08:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return h}));var a=n("8bbf"),o=n.n(a),s=function(t,e){let n=new o.a({render:n=>n(t,{props:e})});return n.$mount(),n.$el},i=n("d010"),c=n("536b"),r=n.n(c),l=function(t){const e=t.content||"",n=t.type||"info",a=t.duration||2e3,o=t.container||document.body,c=document.createElement("div"),l=s(i["a"],{type:n});c.innerHTML=`<span class='${r.a.icon}'>${l.outerHTML}</span><div>${e}</div>`,console.log(r.a),c.className=`${r.a.message} ${r.a["message-"+n]}`,o!==document.body&&"static"===getComputedStyle(o).position&&(o.style.position="relative"),o.appendChild(c),c.clientHeight,c.style.transform="translate(-50%, -50%)",c.style.opacity=1,setTimeout(()=>{c.style.transform="translate(-50%, -50%) translateY(25px)",c.style.opacity=0,c.addEventListener("transitionend",(function(){c.remove(),t.callback&&t.callback()}),{once:!0})},a)},p=function(t,e=!0){const n=new Date(+t);let a=`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}`;if(e){const t=n.getHours().toString().padStart(2,"0"),e=n.getMinutes().toString().padStart(2,"0"),o=n.getSeconds().toString().padStart(2,"0");a+=` ${t}:${e}:${o}`}return a},d=function(t,e){let n=null;return function(...a){clearTimeout(n),n=setTimeout(()=>{t(...a)},e)}},u="",m="";function g(){document.title=u||m?u&&!m?u:!u&&m?m:`${u}-${m}`:"loading..."}var h={setRouteTitle(t){u=t,g()},setSiteTitle(t){m=t,g()}}}});