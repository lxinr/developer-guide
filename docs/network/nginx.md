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


## 502 Bad Gateway

[How to Solve 502 Bad Gateway Issues? - KeyCDN Support](https://www.keycdn.com/support/502-bad-gateway)
