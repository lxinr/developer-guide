---
title: Nginx
titleTemplate: 反向代理
---

# Nginx

## Quick Start

<iframe src="//player.bilibili.com/player.html?aid=680452541&bvid=BV18S4y1T7Gv&cid=478784385&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

ppt资料请转至[About Me](/guide/connect-me#email)发送邮件获取

## Nginx简介

> [Nginx](https://docshome.gitbook.io/nginx-docs/)是由俄罗斯的程序员Igor Sysoev所开发，第一个公开版本0.1.0发布于2004年10月4日。Nginx是一个高性能的HTTP和反向代理服务器，也是一个IMAP/POP3/SMTP代理服务器。Nginx是由C语言编写的，也有人用C++重写了Nginx，名为Tengine。Nginx的特点是占有内存少，并发能力强，事实上Nginx的并发能力在同类型的网页服务器中表现较好，中国大陆使用nginx网站用户已经超过50%。--- 来自Github Copilot

Nginx启动后，在Linux系统中有两个进程，一个为master，一个为worker。master作为管理员不参与任何工作，只负责管理worker进程，给多个worker分配不同的任务（worker一般配置多个），worker进程负责处理请求。

![](https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/1666370176643.png)

## 常用命令

```powershell
# 检查80端口是否被占用的命令
netstat -ano | findstr 0.0.0.0:80 或 netstat -ano | findstr "80"

# windows查看nginx进程
tasklist /fi  "imagename eq nginx.exe"

映像名称          PID 会话名                会话#       内存使用
=========== ======== ================ =========== ============
nginx.exe       6276 Console                    3      8,948 K
nginx.exe      24500 Console                    3      9,324 K

# 杀掉nginx进程
taskkill /f /pid 6276 /pid 24500
# 查看命令使用方法
tasklist /?
# 查看所有进程
tasklist

nginx -V
nginx -t # 验证配置是否正确
start nginx
nginx -s reload # nginx.conf修改后需执行，使修改生效(在cmd下执行)
nginx -s stop # 快速停止
nginx -s quit # 完整有序的停止
```

## 正向代理

[正向代理和反向代理](https://cloud.tencent.com/developer/article/2072869) ⇢ 代理，视作中介人，<strong style="color:#9b2ebd;">本质上是服务器</strong>。

<strong style="color:orange;">正向代理代理的是客户端</strong>

客户端向代理服务器发送请求，代理服务器再向目标服务器转发请求，然后将目标服务器返回的响应返回给客户端。大陆用户通过代理服务器科学上网，就是正向代理。

- 能够隐藏真实的客户端信息：对于google服务器来说，它只知道代理服务器，并不知道客户端

## 反向代理

<strong style="color:green;">反向代理代理的是服务器</strong>

将Nginx作为反向代理服务器，我们访问<strong style="color:pink;">百度</strong>时，反向代理服务器会将我们的访问请求转发到真实的服务器上。所以，反向代理隐藏了真实的服务器地址信息。从我们（客户端）的角度看，并不知道我们刚才访问的其实是代理服务器。

- [负载均衡](/network/nginx#负载均衡)：反向代理的主要应用是负载均衡

- 保护内网安全：反向代理隐藏了真实的服务器信息

- 缓存服务器信息，减少服务器的压力

<!-- ### nginx.conf

```nginx
#user root;
#worker_processes 1

error_log logs/error.log;
error_log logs/error.log notice;
error_log logs/error.log info;

events {
    worker_connections 1024;
}


http {
    include mime.types;
    default_type application/octet-stream;
                
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    access_log logs/access.log main;

    sendfile on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    # gzip  on;

    include myvhost/*.conf;

    server {

        listen       80;
        server_name  localhost;
        charset      utf-8;

        location / {
            root   html;
            index  index.html index.htm;
        }

    }

}
```

### include myvhost/8888.conf;

```nginx
server {

    listen 8888;
    server_name localhost;

    location / {
        proxy_pass http://www.baidu.com;
    }

}
```

## 负载均衡

将nginx用于反向代理服务器，将客户端的请求分发到(后端)多个(Tomcat)服务器上，从而提高服务器的并发能力，达到负载均衡的目的。

### server [parameters]

![](https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/1666627598851.png)

### 分配策略

```
none（轮询）` `weight（权重）` `ip_hash（访问ip）` `fair（响应时间）
```

![](https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/1666601444021.png)

### include myvhost/upstream.conf

有问题，待验证

```nginx
# 语法： upstream name { server address [parameters];...}

upstream multi_host {
    server baidu.com max_fails=0;
}

server {

    listen      10081;
    server_name localhost;

    location / {
        proxy_buffer_size 64k;
        proxy_buffers 32 32k;
        proxy_busy_buffers_size 128k;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP       $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_http_version 1.1;
        proxy_pass http://multi_host;
    }

}
```

## 动静分离

```powershell
$ tree
├─conf
│  └─myvhost # 自定义文件夹
├─contrib
├─docs
├─html
├─logs
├─my_images_host # 自定义文件夹
└─temp
```

### alias

```
localhost:9999/static` `localhost:9999/static/nice.png
server {

    listen 9999;
    server_name localhost;  

    location /static/ {

        # 请求地址 localhost:9999/static/nice.png
        # nginx会转化为C:/A/nginx/my_images_host/nice.png
        # 可以看出alias是把location后面的/static/去掉，拼接到alias后面
        alias C:/A/nginx/my_images_host/;
        autoindex on;

    }
    
}
```

### root

```nginx
server {

    listen 9999;
    server_name localhost;  

    location /static/ {

        # 请求地址 localhost:9999/static/l.png
        # nginx会转化为C:/A/nginx/my_images_host/static/l.png
        # 可以看出root是把location直接拼接到root后面
        root C:/A/nginx/my_images_host/;
        autoindex on;

    }
    
}
```

### 🈂️

```nginx
server {

    listen 9999;
    server_name localhost;

    # 存放静态文件的文件目录，linux下应该需要加 /，形如/xxx/xxx;
    # root my_images_host;  

    location / {
        root html;
        index index.html;
    }

    # location /static/
    location /static {
        # 等同 root C:/A/nginx/my_images_host/;
        # root可以配置到外边
        root my_images_host;
        autoindex on;
    }
    
}
``` -->

## 502 Bad Gateway

[How to Solve 502 Bad Gateway Issues? - KeyCDN Support](https://www.keycdn.com/support/502-bad-gateway)
