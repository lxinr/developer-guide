//vite.config.ts
import { defineConfig } from "vite";
import { SearchPlugin } from "vitepress-plugin-search";


/**
 * 支持中文搜索
 * https://github.com/emersonbottero/vitepress-plugin-search/issues/11#issuecomment-1328150584
 */

/**
 * 分词器来源
 * https://wenjiangs.com/article/segment.html
 * https://github.com/leizongmin/node-segment
 */

var Segment = require('segment');
// 创建实例
var segment = new Segment();
// 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
segment.useDefault();

var options = {
  placeholder: "中国又又又又又赢啦！",
  buttonLabel: "Search",
  previewLength: 10,
  // 采用分词器优化，
  encode: function (str) {
    return segment.doSegment(str, { simple: true });
  },
  tokenize: "forward", // 解决汉字搜索问题。来源：https://github.com/emersonbottero/vitepress-plugin-search/issues/11
}

export default defineConfig({
  plugins: [SearchPlugin(options)],
  // server: {
  //   fs: {
  //     // Allow serving files from one level up to the project root
  //     allow: ["../.."],
  //   },
  // },
});
