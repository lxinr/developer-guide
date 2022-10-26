# 业务代码

## 获取query参数

```js
getParameterByName(name) {
  name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]')
  const regex = new RegExp(`[\\?&]${name}=([^&#]*)`)
  const results = regex.exec(location.search)
  return results == null ? '' : decodeURIComponent(results[1])
}
getParameterByName('id')
```
