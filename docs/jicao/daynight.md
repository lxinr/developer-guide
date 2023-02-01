# Day & Night

## OSS

### [PicGo](https://support.typora.io/Upload-Image/#picgo-core-command-line-opensource)
Config PicGo-Core
Please edit config.json at following location
  - Linux / macOS → <u>~/.picgo/config.json</u>
  - Windows → <u>C:\Users\klaus\ .picgo\config.json</u>

[选择 PicGo-Core (Command line)下载或更新](https://picgo.github.io/PicGo-Core-Doc/zh/guide/config.html#%E9%BB%98%E8%AE%A4%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)
```bash
# 在此目录下 C:\Users\klaus\AppData\Roaming\Typora\picgo\win64
.\picgo.exe set uploader
.\picgo.exe use uploader
```

```json
# area（区域查询）https://help.aliyun.com/document_detail/31837.html
{
  "picBed": {
    "current": "aliyun",
    "aliyun": {
      "accessKeyId": "**************************",
      "accessKeySecret": "**************************",
      "bucket": "ulooklikeamovie",
      "area": "oss-cn-beijing",
      "path": "img/",
      "customUrl": "",
      "options": ""
    },
    "uploader": "aliyun",
    "transformer": "path"
  },
  "picgoPlugins": {}
}
```
