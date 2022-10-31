# 业务代码

## 函数封装

### 获取query参数

```js
getParameterByName(name) {
  name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]')
  const regex = new RegExp(`[\\?&]${name}=([^&#]*)`)
  const results = regex.exec(location.search)
  return results == null ? '' : decodeURIComponent(results[1])
}
getParameterByName('id')
```

## 插件

### postcss-px-to-viewport

```js
mediaQuery: true,
landscape: true,
landscapeWidth: 900
```

配置宽屏后跑不起来的话，小写a换成大写A

![image-20221031181414400](https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/image-20221031181414400.png)
