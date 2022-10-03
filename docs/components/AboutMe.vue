<script setup lang='ts'>
const imgs: Array<string> = [
    'https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/Playmaker-logo.png',
    'https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/Expressionist-logo.png',
    'https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/Visionary-logo.png',
    'https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/Activist-logo.png',
    'https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/Dreamer-logo.png',
    'https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/Innovator-logo.png'
  ]
</script>
<template>
  <div class="outbox">
    <img width="100"  class="logo" style="margin-right: 20px;" v-for="(item, index) in imgs" :key="index" :src="item" :title="item" alt="404">
  </div>
</template>

<style lang='scss' scoped>
@media (max-width: 768px) {
  .logo {
    width: 50%;
  }
}

@media (min-width: 960px) {
  .outbox {
    display: flex;
  }
}
</style>
