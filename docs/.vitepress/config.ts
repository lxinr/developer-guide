import footnote from 'markdown-it-footnote'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Develop Manual',  // 标签页左侧及  导航栏左侧指向起始页的标题，themeConfig.siteTitle可以覆盖该标题
  titleTemplate: '开发手册', // The suffix for the title.  https://vitepress.vuejs.org/config/app-configs.html#titletemplate
  base: '/developer-guide/',
  description: '开发手册', // This will render as a <meta> tag in the page HTML
  lastUpdated: true,
  appearance: true, // 增加 DarkMode
  head: [
    ['link', { rel: 'icon', href: 'https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/favicon.ico' }]
  ],
  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },
  themeConfig: {
    // logo: 'https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/logo_01.png',
    logo: 'https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/RED-AssassinS.png',
    // logo: 'https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/AssassinS-1.png',
    // logo: 'https://ulooklikeamovie.oss-cn-beijing.aliyuncs.com/img/TEXT-AssassinS.png',
    siteTitle: 'ASSASSINS CREED', // 导航栏左侧指向起始页的标题
    // siteTitle: false, // 导航栏左侧指向起始页的标题
    nav: nav(),
    sidebar: {
      '/frontend/': sidebarFrontend(),
      '/backend/': sidebarBackend(),
      '/database/': sidebarDatabase(),
      '/network/': sidebarNetWork()
    },
    outline: 'deep', // 右侧大纲标题层级
    // outlineTitle: '本页大纲', // 右侧导航栏顶部文字 customize the title of the right sidebar (on the top of outline links)
    outlineTitle: 'THIS POST WILL COVER', // 右侧导航栏顶部文字 customize the title of the right sidebar (on the top of outline links)
    socialLinks: [
      { icon: 'github', link: 'https://github.com/beierzhijin/developer-guide' },
      {
        icon: {
          svg: '<svg t="1661271776783" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7499" width="200" height="200"><path d="M64 192.384C64 121.472 121.408 64 192.384 64h639.232C902.528 64 960 121.408 960 192.384v639.232A128.32 128.32 0 0 1 831.616 960H192.384A128.32 128.32 0 0 1 64 831.616V192.384zM256 256l28.416 28.416 28.48 28.48 28.416 28.416v312.96L256 739.52V768h455.104L768 568.896l-28.416 28.416-28.48 28.48-28.416 28.416H455.04V341.312l28.48-28.416L512 284.416 540.416 256H256z" fill="#5bd2fe" p-id="7500"></path></svg>'
        },
        link: 'https://viphimself.vip/'
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Klaus Lau'
    },
    editLink: {
      pattern: 'https://github.com/beierzhijin/full-stack-docs/edit/main/docs/:path',
      text: '在 GitHub 中 编辑此页'
    },
    lastUpdatedText: '最近更新时间',
    // algolia搜索
    algolia: {},
    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})


function nav() {
  return [
    {
      text: 'Frontend',
      activeMatch: `^/frontend/`,
      items: [
        { text: 'Web', link: '/frontend/web/site' },
        {
          text: 'Feast',
          items: [
            { text: 'typescript ', link: '/frontend/feast/typescript' },
            { text: 'package manage', link: '/frontend/feast/package-manage' }
          ]
        },
        {
          text: 'Framework',
          items: [
            { text: 'Vue', link: '/frontend/vue/vuejs' },
            { text: 'React', link: '/frontend/react/reactjs' },
            { text: 'SoildJS', link: '/frontend/solid/solidjs' },
          ]
        }
      ]
    },
    {
      text: 'Backend',
      activeMatch: `^/backend/`,
      items: [
        {
          text: 'Java',
          items: [
            { text: 'OOP', link: '/backend/java/OOP' }
          ]
        },
        { text: 'Linux', link: '/backend/container/Linux' },
        { text: 'Containers', link: '/backend/container/podman' },
      ]
    },
    {
      text: 'Database',
      activeMatch: `^/database/`,
      items: [
        { text: 'MySQL', link: '/database/mysql' },
      ]
    },
    {
      text: 'Network',
      activeMatch: `^/network/`,
      items: [
        { text: 'Nginx', link: '/network/nginx' },
      ]
    }
  ]
}

function sidebarFrontend() {
  return [
    {
      text: 'Web',
      collapsible: true,
      items: [
        { text: 'create a site', link: '/frontend/web/site' },
        { text: 'css', link: '/frontend/web/css' },
        { text: 'creative power', link: '/frontend/web/creativity' },
        { text: '大屏', link: '/frontend/web/big-screen' },
      ]
    },
    {
      text: 'Feast',
      collapsible: true,
      items: [
        { text: 'typescript', link: '/frontend/feast/typescript' },
        { text: 'package manager', link: '/frontend/feast/package-manage' },
        { text: 'plugins', link: '/frontend/feast/plugins' }
      ]
    },
    {
      text: 'JavaScript Framework',
      collapsible: true,
      items: [
        { text: 'vue', link: '/frontend/vue/vuejs' },
        { text: 'react', link: '/frontend/react/reactjs' },
        { text: 'soildjs', link: '/frontend/solid/solidjs' }
      ]
    },
    {
      text: 'AeMiTuoFo',
      collapsible: true,
      items: [
        { text: 'error', link: '/frontend/service/error' },
        { text: '业务代码', link: '/frontend/service/useful' }
      ]
    },
  ]
}

function sidebarBackend() {
  return [
    {
      text: 'Java',
      collapsible: true,
      items: [
        { text: 'OOP', link: '/backend/java/OOP' },
        { text: 'biyi', link: '/backend/java/biyi' },
        { text: 'SpringBoot', link: '/backend/java/springboot' },
        { text: 'IDEA', link: '/backend/java/IDEA' }
      ]
    },
    {
      text: 'Linux',
      collapsible: true,
      items: [
        { text: '基础', link: '/backend/container/Linux' },
        { text: 'vim', link: '/backend/container/vim' },
        {
          text: 'Containers',
          collapsible: true,
          items: [
            { text: 'Podman', link: '/backend/container/podman' },
          ]
        },

      ]
    },

  ]
}

function sidebarDatabase() {
  return [
    {
      text: 'Database',
      collapsible: true,
      items: [
        { text: 'mysql', link: '/database/mysql' },
      ]
    }
  ]
}

function sidebarNetWork() {
  return [
    {
      text: 'Network',
      collapsible: true,
      items: [
        { text: 'nginx', link: '/network/nginx' },
      ]
    }
  ]
}

