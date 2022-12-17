import{_ as a,o as l,c as p,b as s,d as n,a as o}from"./app.c8968311.js";const m=JSON.parse('{"title":"Nginx","titleTemplate":"反向代理","description":"","frontmatter":{"title":"Nginx","titleTemplate":"反向代理"},"headers":[{"level":2,"title":"Quick Start","slug":"quick-start","link":"#quick-start","children":[]},{"level":2,"title":"Nginx简介","slug":"nginx简介","link":"#nginx简介","children":[]},{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":2,"title":"正向代理","slug":"正向代理","link":"#正向代理","children":[]},{"level":2,"title":"反向代理","slug":"反向代理","link":"#反向代理","children":[{"level":3,"title":"nginx.conf","slug":"nginx-conf","link":"#nginx-conf","children":[]},{"level":3,"title":"include myvhost/8888.conf;","slug":"include-myvhost-8888-conf","link":"#include-myvhost-8888-conf","children":[]}]},{"level":2,"title":"负载均衡","slug":"负载均衡","link":"#负载均衡","children":[{"level":3,"title":"server [parameters]","slug":"server-parameters","link":"#server-parameters","children":[]},{"level":3,"title":"分配策略","slug":"分配策略","link":"#分配策略","children":[]},{"level":3,"title":"include myvhost/upstream.conf","slug":"include-myvhost-upstream-conf","link":"#include-myvhost-upstream-conf","children":[]}]},{"level":2,"title":"动静分离","slug":"动静分离","link":"#动静分离","children":[{"level":3,"title":"alias","slug":"alias","link":"#alias","children":[]},{"level":3,"title":"root","slug":"root","link":"#root","children":[]},{"level":3,"title":"🈂️","slug":"サ️","link":"#サ️","children":[]}]},{"level":2,"title":"502 Bad Gateway","slug":"_502-bad-gateway","link":"#_502-bad-gateway","children":[]}],"relativePath":"network/nginx.md","lastUpdated":1671300246000}'),e={name:"network/nginx.md"},t=s("h1",{id:"nginx",tabindex:"-1"},[n("Nginx "),s("a",{class:"header-anchor",href:"#nginx","aria-hidden":"true"},"#")],-1),c=s("h2",{id:"quick-start",tabindex:"-1"},[n("Quick Start "),s("a",{class:"header-anchor",href:"#quick-start","aria-hidden":"true"},"#")],-1),r=s("iframe",{src:"//player.bilibili.com/player.html?aid=680452541&bvid=BV18S4y1T7Gv&cid=478784385&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ",-1),i=o(`<p>ppt资料请转至<a href="/developer-guide/guide/connect-me.html#email">About Me</a>发送邮件获取</p><h2 id="nginx简介" tabindex="-1">Nginx简介 <a class="header-anchor" href="#nginx简介" aria-hidden="true">#</a></h2><blockquote><p><a href="https://docshome.gitbook.io/nginx-docs/" target="_blank" rel="noreferrer">Nginx</a>是由俄罗斯的程序员Igor Sysoev所开发，第一个公开版本0.1.0发布于2004年10月4日。Nginx是一个高性能的HTTP和反向代理服务器，也是一个IMAP/POP3/SMTP代理服务器。Nginx是由C语言编写的，也有人用C++重写了Nginx，名为Tengine。Nginx的特点是占有内存少，并发能力强，事实上Nginx的并发能力在同类型的网页服务器中表现较好，中国大陆使用nginx网站用户已经超过50%。--- 来自Github Copilot</p></blockquote><p>Nginx启动后，在Linux系统中有两个进程，一个为master，一个为worker。master作为管理员不参与任何工作，只负责管理worker进程，给多个worker分配不同的任务（worker一般配置多个），worker进程负责处理请求。</p><p><img src="https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/1666370176643.png" alt=""></p><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-hidden="true">#</a></h2><div class="language-powershell"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 检查80端口是否被占用的命令</span></span>
<span class="line"><span style="color:#A6ACCD;">netstat </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ano </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> findstr </span><span style="color:#F78C6C;">0.0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">0.0</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;"> 或 netstat </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ano </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> findstr </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">80</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># windows查看nginx进程</span></span>
<span class="line"><span style="color:#A6ACCD;">tasklist </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">fi  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">imagename eq nginx.exe</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">映像名称          PID 会话名                会话</span><span style="color:#676E95;">#       内存使用</span></span>
<span class="line"><span style="color:#89DDFF;">===========</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">========</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">================</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===========</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">============</span></span>
<span class="line"><span style="color:#82AAFF;">nginx.exe</span><span style="color:#A6ACCD;">       </span><span style="color:#F78C6C;">6276</span><span style="color:#A6ACCD;"> Console                    </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">948</span><span style="color:#A6ACCD;"> K</span></span>
<span class="line"><span style="color:#82AAFF;">nginx.exe</span><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">24500</span><span style="color:#A6ACCD;"> Console                    </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">324</span><span style="color:#A6ACCD;"> K</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 杀掉nginx进程</span></span>
<span class="line"><span style="color:#A6ACCD;">taskkill </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">f </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">pid </span><span style="color:#F78C6C;">6276</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">pid </span><span style="color:#F78C6C;">24500</span></span>
<span class="line"><span style="color:#676E95;"># 查看命令使用方法</span></span>
<span class="line"><span style="color:#A6ACCD;">tasklist </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">?</span></span>
<span class="line"><span style="color:#676E95;"># 查看所有进程</span></span>
<span class="line"><span style="color:#A6ACCD;">tasklist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">nginx </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">V</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">t </span><span style="color:#676E95;"># 验证配置是否正确</span></span>
<span class="line"><span style="color:#A6ACCD;">start nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">s reload </span><span style="color:#676E95;"># nginx.conf修改后需执行，使修改生效(在cmd下执行)</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">s stop </span><span style="color:#676E95;"># 快速停止</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">s quit </span><span style="color:#676E95;"># 完整有序的停止</span></span>
<span class="line"></span></code></pre></div><h2 id="正向代理" tabindex="-1">正向代理 <a class="header-anchor" href="#正向代理" aria-hidden="true">#</a></h2><p><a href="https://cloud.tencent.com/developer/article/2072869" target="_blank" rel="noreferrer">正向代理和反向代理</a> ⇢ 代理，视作中介人，<strong style="color:#9b2ebd;">本质上是服务器</strong>。</p><p><strong style="color:orange;">正向代理代理的是客户端</strong></p><p>客户端向代理服务器发送请求，代理服务器再向目标服务器转发请求，然后将目标服务器返回的响应返回给客户端。你通过代理服务器Scientific Internet access，就是正向代理。</p><ul><li>能够隐藏真实的客户端信息：对于你想要进入的服务器来说，它只知道代理服务器，并不知道客户端</li></ul><h2 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-hidden="true">#</a></h2><p><strong style="color:green;">反向代理代理的是服务器</strong></p><p>将Nginx作为反向代理服务器，我们访问<strong style="color:pink;">百度</strong>时，反向代理服务器会将我们的访问请求转发到真实的服务器上。所以，反向代理隐藏了真实的服务器地址信息。从我们（客户端）的角度看，并不知道我们刚才访问的其实是代理服务器。</p><ul><li><p><a href="/developer-guide/network/nginx.html#负载均衡">负载均衡</a>：反向代理的主要应用是负载均衡</p></li><li><p>保护内网安全：反向代理隐藏了真实的服务器信息</p></li><li><p>缓存服务器信息，减少服务器的压力</p></li></ul><h3 id="nginx-conf" tabindex="-1">nginx.conf <a class="header-anchor" href="#nginx-conf" aria-hidden="true">#</a></h3><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">#user root;</span></span>
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
<span class="line"><span style="color:#A6ACCD;">                </span></span>
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
<span class="line"></span></code></pre></div><h2 id="负载均衡" tabindex="-1">负载均衡 <a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a></h2><p>将nginx用于反向代理服务器，将客户端的请求分发到(后端)多个(Tomcat)服务器上，从而提高服务器的并发能力，达到负载均衡的目的。</p><h3 id="server-parameters" tabindex="-1">server [parameters] <a class="header-anchor" href="#server-parameters" aria-hidden="true">#</a></h3><p><img src="https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/1666627598851.png" alt=""></p><h3 id="分配策略" tabindex="-1">分配策略 <a class="header-anchor" href="#分配策略" aria-hidden="true">#</a></h3><p><code>none（轮询）</code> <code>weight（权重）</code> <code>ip_hash（访问ip）</code> <code>fair（响应时间）</code></p><p><img src="https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/1666601444021.png" alt=""></p><h3 id="include-myvhost-upstream-conf" tabindex="-1">include myvhost/upstream.conf <a class="header-anchor" href="#include-myvhost-upstream-conf" aria-hidden="true">#</a></h3><p>有问题，待验证</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 语法： upstream name { server address [parameters];...}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">upstream</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">multi_host </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">server</span><span style="color:#A6ACCD;"> baidu.com </span><span style="color:#A6ACCD;">max_fails</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	listen		</span><span style="color:#F78C6C;">10081</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">	server_name	</span><span style="color:#A6ACCD;">localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	   </span><span style="color:#89DDFF;"> proxy_buffer_size </span><span style="color:#A6ACCD;">64k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_buffers </span><span style="color:#A6ACCD;">32 </span><span style="color:#F78C6C;">32k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_busy_buffers_size </span><span style="color:#A6ACCD;">128k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Real-IP       </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">X-Forwarded-For </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> proxy_http_version </span><span style="color:#A6ACCD;">1.1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">	proxy_pass </span><span style="color:#A6ACCD;">http://multi_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="动静分离" tabindex="-1">动静分离 <a class="header-anchor" href="#动静分离" aria-hidden="true">#</a></h2><div class="language-powershell"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ tree</span></span>
<span class="line"><span style="color:#A6ACCD;">├─conf</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─myvhost </span><span style="color:#676E95;"># 自定义文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;">├─contrib</span></span>
<span class="line"><span style="color:#A6ACCD;">├─docs</span></span>
<span class="line"><span style="color:#A6ACCD;">├─html</span></span>
<span class="line"><span style="color:#A6ACCD;">├─logs</span></span>
<span class="line"><span style="color:#A6ACCD;">├─my_images_host </span><span style="color:#676E95;"># 自定义文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;">└─temp</span></span>
<span class="line"></span></code></pre></div><h3 id="alias" tabindex="-1">alias <a class="header-anchor" href="#alias" aria-hidden="true">#</a></h3><p><code>localhost:9999/static</code> <code>localhost:9999/static/nice.png</code></p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">	listen </span><span style="color:#A6ACCD;">9999</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">	server_name </span><span style="color:#A6ACCD;">localhost</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">	</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/static/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;"># 请求地址 localhost:9999/static/nice.png</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;"># nginx会转化为C:/A/nginx/my_images_host/nice.png</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;"># 可以看出alias是把location后面的/static/去掉，拼接到alias后面</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">	alias </span><span style="color:#A6ACCD;">C:/A/nginx/my_images_host/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">	autoindex </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="root" tabindex="-1">root <a class="header-anchor" href="#root" aria-hidden="true">#</a></h3><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">	listen </span><span style="color:#A6ACCD;">9999</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">	server_name </span><span style="color:#A6ACCD;">localhost</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">	</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/static/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;"># 请求地址 localhost:9999/static/l.png</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;"># nginx会转化为C:/A/nginx/my_images_host/static/l.png</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;"># 可以看出root是把location直接拼接到root后面</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">	root </span><span style="color:#A6ACCD;">C:/A/nginx/my_images_host/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">	autoindex </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="サ️" tabindex="-1">🈂️ <a class="header-anchor" href="#サ️" aria-hidden="true">#</a></h3><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">	listen </span><span style="color:#A6ACCD;">9999</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">	server_name </span><span style="color:#A6ACCD;">localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># 存放静态文件的文件目录，linux下应该需要加 /，形如/xxx/xxx;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># root my_images_host;  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">	root </span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">	index </span><span style="color:#A6ACCD;">index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># location /static/</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/static </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># 等同 root C:/A/nginx/my_images_host/;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># root可以配置到外边</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">	root </span><span style="color:#A6ACCD;">my_images_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">	autoindex </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="_502-bad-gateway" tabindex="-1">502 Bad Gateway <a class="header-anchor" href="#_502-bad-gateway" aria-hidden="true">#</a></h2><p><a href="https://www.keycdn.com/support/502-bad-gateway" target="_blank" rel="noreferrer">How to Solve 502 Bad Gateway Issues? - KeyCDN Support</a></p>`,41),C=[t,c,r,i];function y(D,A,F,d,h,g){return l(),p("div",null,C)}const x=a(e,[["render",y]]);export{m as __pageData,x as default};
