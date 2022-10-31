import{_ as a,o as l,c as p,b as s,d as n,a as o}from"./app.1d405b9c.js";const m=JSON.parse('{"title":"Nginx","titleTemplate":"\u53CD\u5411\u4EE3\u7406","description":"","frontmatter":{"title":"Nginx","titleTemplate":"\u53CD\u5411\u4EE3\u7406"},"headers":[{"level":2,"title":"Quick Start","slug":"quick-start","link":"#quick-start","children":[]},{"level":2,"title":"Nginx\u7B80\u4ECB","slug":"nginx\u7B80\u4ECB","link":"#nginx\u7B80\u4ECB","children":[]},{"level":2,"title":"\u5E38\u7528\u547D\u4EE4","slug":"\u5E38\u7528\u547D\u4EE4","link":"#\u5E38\u7528\u547D\u4EE4","children":[]},{"level":2,"title":"\u6B63\u5411\u4EE3\u7406","slug":"\u6B63\u5411\u4EE3\u7406","link":"#\u6B63\u5411\u4EE3\u7406","children":[]},{"level":2,"title":"\u53CD\u5411\u4EE3\u7406","slug":"\u53CD\u5411\u4EE3\u7406","link":"#\u53CD\u5411\u4EE3\u7406","children":[{"level":3,"title":"nginx.conf","slug":"nginx-conf","link":"#nginx-conf","children":[]},{"level":3,"title":"include myvhost/8888.conf;","slug":"include-myvhost-8888-conf","link":"#include-myvhost-8888-conf","children":[]}]},{"level":2,"title":"\u8D1F\u8F7D\u5747\u8861","slug":"\u8D1F\u8F7D\u5747\u8861","link":"#\u8D1F\u8F7D\u5747\u8861","children":[{"level":3,"title":"server [parameters]","slug":"server-parameters","link":"#server-parameters","children":[]},{"level":3,"title":"\u5206\u914D\u7B56\u7565","slug":"\u5206\u914D\u7B56\u7565","link":"#\u5206\u914D\u7B56\u7565","children":[]},{"level":3,"title":"include myvhost/upstream.conf","slug":"include-myvhost-upstream-conf","link":"#include-myvhost-upstream-conf","children":[]}]},{"level":2,"title":"\u52A8\u9759\u5206\u79BB","slug":"\u52A8\u9759\u5206\u79BB","link":"#\u52A8\u9759\u5206\u79BB","children":[{"level":3,"title":"alias","slug":"alias","link":"#alias","children":[]},{"level":3,"title":"root","slug":"root","link":"#root","children":[]},{"level":3,"title":"\u{1F202}\uFE0F","slug":"\u{1F202}\uFE0F","link":"#\u{1F202}\uFE0F","children":[]}]},{"level":2,"title":"502 Bad Gateway","slug":"_502-bad-gateway","link":"#_502-bad-gateway","children":[]}],"relativePath":"network/nginx.md","lastUpdated":1667225989000}'),e={name:"network/nginx.md"},t=s("h1",{id:"nginx",tabindex:"-1"},[n("Nginx "),s("a",{class:"header-anchor",href:"#nginx","aria-hidden":"true"},"#")],-1),c=s("h2",{id:"quick-start",tabindex:"-1"},[n("Quick Start "),s("a",{class:"header-anchor",href:"#quick-start","aria-hidden":"true"},"#")],-1),r=s("iframe",{src:"//player.bilibili.com/player.html?aid=680452541&bvid=BV18S4y1T7Gv&cid=478784385&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ",-1),i=o(`<p>ppt\u8D44\u6599\u8BF7\u8F6C\u81F3<a href="/developer-guide/guide/connect-me.html#email">About Me</a>\u53D1\u9001\u90AE\u4EF6\u83B7\u53D6</p><h2 id="nginx\u7B80\u4ECB" tabindex="-1">Nginx\u7B80\u4ECB <a class="header-anchor" href="#nginx\u7B80\u4ECB" aria-hidden="true">#</a></h2><blockquote><p><a href="https://docshome.gitbook.io/nginx-docs/" target="_blank" rel="noreferrer">Nginx</a>\u662F\u7531\u4FC4\u7F57\u65AF\u7684\u7A0B\u5E8F\u5458Igor Sysoev\u6240\u5F00\u53D1\uFF0C\u7B2C\u4E00\u4E2A\u516C\u5F00\u7248\u672C0.1.0\u53D1\u5E03\u4E8E2004\u5E7410\u67084\u65E5\u3002Nginx\u662F\u4E00\u4E2A\u9AD8\u6027\u80FD\u7684HTTP\u548C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u4E5F\u662F\u4E00\u4E2AIMAP/POP3/SMTP\u4EE3\u7406\u670D\u52A1\u5668\u3002Nginx\u662F\u7531C\u8BED\u8A00\u7F16\u5199\u7684\uFF0C\u4E5F\u6709\u4EBA\u7528C++\u91CD\u5199\u4E86Nginx\uFF0C\u540D\u4E3ATengine\u3002Nginx\u7684\u7279\u70B9\u662F\u5360\u6709\u5185\u5B58\u5C11\uFF0C\u5E76\u53D1\u80FD\u529B\u5F3A\uFF0C\u4E8B\u5B9E\u4E0ANginx\u7684\u5E76\u53D1\u80FD\u529B\u5728\u540C\u7C7B\u578B\u7684\u7F51\u9875\u670D\u52A1\u5668\u4E2D\u8868\u73B0\u8F83\u597D\uFF0C\u4E2D\u56FD\u5927\u9646\u4F7F\u7528nginx\u7F51\u7AD9\u7528\u6237\u5DF2\u7ECF\u8D85\u8FC750%\u3002--- \u6765\u81EAGithub Copilot</p></blockquote><p>Nginx\u542F\u52A8\u540E\uFF0C\u5728Linux\u7CFB\u7EDF\u4E2D\u6709\u4E24\u4E2A\u8FDB\u7A0B\uFF0C\u4E00\u4E2A\u4E3Amaster\uFF0C\u4E00\u4E2A\u4E3Aworker\u3002master\u4F5C\u4E3A\u7BA1\u7406\u5458\u4E0D\u53C2\u4E0E\u4EFB\u4F55\u5DE5\u4F5C\uFF0C\u53EA\u8D1F\u8D23\u7BA1\u7406worker\u8FDB\u7A0B\uFF0C\u7ED9\u591A\u4E2Aworker\u5206\u914D\u4E0D\u540C\u7684\u4EFB\u52A1\uFF08worker\u4E00\u822C\u914D\u7F6E\u591A\u4E2A\uFF09\uFF0Cworker\u8FDB\u7A0B\u8D1F\u8D23\u5904\u7406\u8BF7\u6C42\u3002</p><p><img src="https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/1666370176643.png" alt=""></p><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1">\u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a></h2><div class="language-powershell"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u68C0\u67E580\u7AEF\u53E3\u662F\u5426\u88AB\u5360\u7528\u7684\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;">netstat </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ano </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> findstr </span><span style="color:#F78C6C;">0.0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">0.0</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;"> \u6216 netstat </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ano </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> findstr </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">80</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># windows\u67E5\u770Bnginx\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">tasklist </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">fi  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">imagename eq nginx.exe</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u6620\u50CF\u540D\u79F0          PID \u4F1A\u8BDD\u540D                \u4F1A\u8BDD</span><span style="color:#676E95;">#       \u5185\u5B58\u4F7F\u7528</span></span>
<span class="line"><span style="color:#89DDFF;">===========</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">========</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">================</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===========</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">============</span></span>
<span class="line"><span style="color:#82AAFF;">nginx.exe</span><span style="color:#A6ACCD;">       </span><span style="color:#F78C6C;">6276</span><span style="color:#A6ACCD;"> Console                    </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">948</span><span style="color:#A6ACCD;"> K</span></span>
<span class="line"><span style="color:#82AAFF;">nginx.exe</span><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">24500</span><span style="color:#A6ACCD;"> Console                    </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">324</span><span style="color:#A6ACCD;"> K</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6740\u6389nginx\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">taskkill </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">f </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">pid </span><span style="color:#F78C6C;">6276</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">pid </span><span style="color:#F78C6C;">24500</span></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u547D\u4EE4\u4F7F\u7528\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">tasklist </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">?</span></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u6240\u6709\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">tasklist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">nginx </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">V</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">t </span><span style="color:#676E95;"># \u9A8C\u8BC1\u914D\u7F6E\u662F\u5426\u6B63\u786E</span></span>
<span class="line"><span style="color:#A6ACCD;">start nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">s reload </span><span style="color:#676E95;"># nginx.conf\u4FEE\u6539\u540E\u9700\u6267\u884C\uFF0C\u4F7F\u4FEE\u6539\u751F\u6548(\u5728cmd\u4E0B\u6267\u884C)</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">s stop </span><span style="color:#676E95;"># \u5FEB\u901F\u505C\u6B62</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">s quit </span><span style="color:#676E95;"># \u5B8C\u6574\u6709\u5E8F\u7684\u505C\u6B62</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6B63\u5411\u4EE3\u7406" tabindex="-1">\u6B63\u5411\u4EE3\u7406 <a class="header-anchor" href="#\u6B63\u5411\u4EE3\u7406" aria-hidden="true">#</a></h2><p><a href="https://cloud.tencent.com/developer/article/2072869" target="_blank" rel="noreferrer">\u6B63\u5411\u4EE3\u7406\u548C\u53CD\u5411\u4EE3\u7406</a> \u21E2 \u4EE3\u7406\uFF0C\u89C6\u4F5C\u4E2D\u4ECB\u4EBA\uFF0C<strong style="color:#9b2ebd;">\u672C\u8D28\u4E0A\u662F\u670D\u52A1\u5668</strong>\u3002</p><p><strong style="color:orange;">\u6B63\u5411\u4EE3\u7406\u4EE3\u7406\u7684\u662F\u5BA2\u6237\u7AEF</strong></p><p>\u5BA2\u6237\u7AEF\u5411\u4EE3\u7406\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\uFF0C\u4EE3\u7406\u670D\u52A1\u5668\u518D\u5411\u76EE\u6807\u670D\u52A1\u5668\u8F6C\u53D1\u8BF7\u6C42\uFF0C\u7136\u540E\u5C06\u76EE\u6807\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u54CD\u5E94\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002\u5927\u9646\u7528\u6237\u901A\u8FC7\u4EE3\u7406\u670D\u52A1\u5668\u79D1\u5B66\u4E0A\u7F51\uFF0C\u5C31\u662F\u6B63\u5411\u4EE3\u7406\u3002</p><ul><li>\u80FD\u591F\u9690\u85CF\u771F\u5B9E\u7684\u5BA2\u6237\u7AEF\u4FE1\u606F\uFF1A\u5BF9\u4E8Egoogle\u670D\u52A1\u5668\u6765\u8BF4\uFF0C\u5B83\u53EA\u77E5\u9053\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u5E76\u4E0D\u77E5\u9053\u5BA2\u6237\u7AEF</li></ul><h2 id="\u53CD\u5411\u4EE3\u7406" tabindex="-1">\u53CD\u5411\u4EE3\u7406 <a class="header-anchor" href="#\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a></h2><p><strong style="color:green;">\u53CD\u5411\u4EE3\u7406\u4EE3\u7406\u7684\u662F\u670D\u52A1\u5668</strong></p><p>\u5C06Nginx\u4F5C\u4E3A\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u6211\u4EEC\u8BBF\u95EE<strong style="color:pink;">\u767E\u5EA6</strong>\u65F6\uFF0C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u4F1A\u5C06\u6211\u4EEC\u7684\u8BBF\u95EE\u8BF7\u6C42\u8F6C\u53D1\u5230\u771F\u5B9E\u7684\u670D\u52A1\u5668\u4E0A\u3002\u6240\u4EE5\uFF0C\u53CD\u5411\u4EE3\u7406\u9690\u85CF\u4E86\u771F\u5B9E\u7684\u670D\u52A1\u5668\u5730\u5740\u4FE1\u606F\u3002\u4ECE\u6211\u4EEC\uFF08\u5BA2\u6237\u7AEF\uFF09\u7684\u89D2\u5EA6\u770B\uFF0C\u5E76\u4E0D\u77E5\u9053\u6211\u4EEC\u521A\u624D\u8BBF\u95EE\u7684\u5176\u5B9E\u662F\u4EE3\u7406\u670D\u52A1\u5668\u3002</p><ul><li><p><a href="/developer-guide/network/nginx.html#\u8D1F\u8F7D\u5747\u8861">\u8D1F\u8F7D\u5747\u8861</a>\uFF1A\u53CD\u5411\u4EE3\u7406\u7684\u4E3B\u8981\u5E94\u7528\u662F\u8D1F\u8F7D\u5747\u8861</p></li><li><p>\u4FDD\u62A4\u5185\u7F51\u5B89\u5168\uFF1A\u53CD\u5411\u4EE3\u7406\u9690\u85CF\u4E86\u771F\u5B9E\u7684\u670D\u52A1\u5668\u4FE1\u606F</p></li><li><p>\u7F13\u5B58\u670D\u52A1\u5668\u4FE1\u606F\uFF0C\u51CF\u5C11\u670D\u52A1\u5668\u7684\u538B\u529B</p></li></ul><h3 id="nginx-conf" tabindex="-1">nginx.conf <a class="header-anchor" href="#nginx-conf" aria-hidden="true">#</a></h3><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">#user root;</span></span>
<span class="line"><span style="color:#676E95;">#worker_processes 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">error_log </span><span style="color:#A6ACCD;">logs/error.log</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">error_log </span><span style="color:#A6ACCD;">logs/error.log</span><span style="color:#89DDFF;"> notice;</span></span>
<span class="line"><span style="color:#89DDFF;">error_log </span><span style="color:#A6ACCD;">logs/error.log info</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">events</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> worker_connections </span><span style="color:#A6ACCD;">1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">http</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> include </span><span style="color:#A6ACCD;">mime.types</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> default_type </span><span style="color:#A6ACCD;">application/octet-stream</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> log_format </span><span style="color:#A6ACCD;">main </span><span style="color:#C3E88D;">&#39;</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#C3E88D;"> - </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_user</span><span style="color:#C3E88D;"> [</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">time_local</span><span style="color:#C3E88D;">] &quot;</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request</span><span style="color:#C3E88D;">&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#C3E88D;">&#39;</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">status</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">body_bytes_sent</span><span style="color:#C3E88D;"> &quot;</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_referer</span><span style="color:#C3E88D;">&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#C3E88D;">&#39;&quot;</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_user_agent</span><span style="color:#C3E88D;">&quot; &quot;</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_x_forwarded_for</span><span style="color:#C3E88D;">&quot;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> access_log </span><span style="color:#A6ACCD;">logs/access.log</span><span style="color:#89DDFF;"> main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> sendfile </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#tcp_nopush     on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> keepalive_timeout </span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">65</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># gzip  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> include </span><span style="color:#A6ACCD;">myvhost/*.conf</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;"> localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> charset </span><span style="color:#A6ACCD;">     utf-8</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">  html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> index </span><span style="color:#A6ACCD;"> index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="include-myvhost-8888-conf" tabindex="-1">include myvhost/8888.conf; <a class="header-anchor" href="#include-myvhost-8888-conf" aria-hidden="true">#</a></h3><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">8888</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://www.baidu.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8D1F\u8F7D\u5747\u8861" tabindex="-1">\u8D1F\u8F7D\u5747\u8861 <a class="header-anchor" href="#\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a></h2><p>\u5C06nginx\u7528\u4E8E\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u5C06\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u5206\u53D1\u5230(\u540E\u7AEF)\u591A\u4E2A(Tomcat)\u670D\u52A1\u5668\u4E0A\uFF0C\u4ECE\u800C\u63D0\u9AD8\u670D\u52A1\u5668\u7684\u5E76\u53D1\u80FD\u529B\uFF0C\u8FBE\u5230\u8D1F\u8F7D\u5747\u8861\u7684\u76EE\u7684\u3002</p><h3 id="server-parameters" tabindex="-1">server [parameters] <a class="header-anchor" href="#server-parameters" aria-hidden="true">#</a></h3><p><img src="https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/1666627598851.png" alt=""></p><h3 id="\u5206\u914D\u7B56\u7565" tabindex="-1">\u5206\u914D\u7B56\u7565 <a class="header-anchor" href="#\u5206\u914D\u7B56\u7565" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">none\uFF08\u8F6E\u8BE2\uFF09\` \`weight\uFF08\u6743\u91CD\uFF09\` \`ip_hash\uFF08\u8BBF\u95EEip\uFF09\` \`fair\uFF08\u54CD\u5E94\u65F6\u95F4\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/1666601444021.png" alt=""></p><h3 id="include-myvhost-upstream-conf" tabindex="-1">include myvhost/upstream.conf <a class="header-anchor" href="#include-myvhost-upstream-conf" aria-hidden="true">#</a></h3><p>\u6709\u95EE\u9898\uFF0C\u5F85\u9A8C\u8BC1</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u8BED\u6CD5\uFF1A upstream name { server address [parameters];...}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">upstream</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">multi_host </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">server</span><span style="color:#A6ACCD;"> baidu.com </span><span style="color:#A6ACCD;">max_fails</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    listen      </span><span style="color:#F78C6C;">10081</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_buffer_size </span><span style="color:#A6ACCD;">64k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_buffers </span><span style="color:#A6ACCD;">32 </span><span style="color:#F78C6C;">32k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_busy_buffers_size </span><span style="color:#A6ACCD;">128k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Real-IP       </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Forwarded-For </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_http_version </span><span style="color:#A6ACCD;">1.1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://multi_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u52A8\u9759\u5206\u79BB" tabindex="-1">\u52A8\u9759\u5206\u79BB <a class="header-anchor" href="#\u52A8\u9759\u5206\u79BB" aria-hidden="true">#</a></h2><div class="language-powershell"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ tree</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500conf</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500myvhost </span><span style="color:#676E95;"># \u81EA\u5B9A\u4E49\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500contrib</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500docs</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500html</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500logs</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500my_images_host </span><span style="color:#676E95;"># \u81EA\u5B9A\u4E49\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500temp</span></span>
<span class="line"></span></code></pre></div><h3 id="alias" tabindex="-1">alias <a class="header-anchor" href="#alias" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">localhost:9999/static\` \`localhost:9999/static/nice.png</span></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 9999;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name localhost;  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    location /static/ {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        # \u8BF7\u6C42\u5730\u5740 localhost:9999/static/nice.png</span></span>
<span class="line"><span style="color:#A6ACCD;">        # nginx\u4F1A\u8F6C\u5316\u4E3AC:/A/nginx/my_images_host/nice.png</span></span>
<span class="line"><span style="color:#A6ACCD;">        # \u53EF\u4EE5\u770B\u51FAalias\u662F\u628Alocation\u540E\u9762\u7684/static/\u53BB\u6389\uFF0C\u62FC\u63A5\u5230alias\u540E\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;">        alias C:/A/nginx/my_images_host/;</span></span>
<span class="line"><span style="color:#A6ACCD;">        autoindex on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="root" tabindex="-1">root <a class="header-anchor" href="#root" aria-hidden="true">#</a></h3><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">9999</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">localhost</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/static/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># \u8BF7\u6C42\u5730\u5740 localhost:9999/static/l.png</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># nginx\u4F1A\u8F6C\u5316\u4E3AC:/A/nginx/my_images_host/static/l.png</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># \u53EF\u4EE5\u770B\u51FAroot\u662F\u628Alocation\u76F4\u63A5\u62FC\u63A5\u5230root\u540E\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">C:/A/nginx/my_images_host/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> autoindex </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u{1F202}\uFE0F" tabindex="-1">\u{1F202}\uFE0F <a class="header-anchor" href="#\u{1F202}\uFE0F" aria-hidden="true">#</a></h3><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">9999</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># \u5B58\u653E\u9759\u6001\u6587\u4EF6\u7684\u6587\u4EF6\u76EE\u5F55\uFF0Clinux\u4E0B\u5E94\u8BE5\u9700\u8981\u52A0 /\uFF0C\u5F62\u5982/xxx/xxx;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># root my_images_host;  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> index </span><span style="color:#A6ACCD;">index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># location /static/</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/static </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># \u7B49\u540C root C:/A/nginx/my_images_host/;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># root\u53EF\u4EE5\u914D\u7F6E\u5230\u5916\u8FB9</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">my_images_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> autoindex </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="_502-bad-gateway" tabindex="-1">502 Bad Gateway <a class="header-anchor" href="#_502-bad-gateway" aria-hidden="true">#</a></h2><p><a href="https://www.keycdn.com/support/502-bad-gateway" target="_blank" rel="noreferrer">How to Solve 502 Bad Gateway Issues? - KeyCDN Support</a></p>`,40),C=[t,c,r,i];function y(D,A,F,d,h,g){return l(),p("div",null,C)}const x=a(e,[["render",y]]);export{m as __pageData,x as default};
