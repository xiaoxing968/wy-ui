module.exports = {
    base:'/wy-ui/',
    title: 'Hello Wy-ui',
    description: 'Vue的UI框架',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/get-started/' },
            { text: 'Vue3版本', link: 'http://xxymie.com/#/' },
            { text: 'Github', link: 'https://github.com/xiaoxing968' },
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/introduction/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/grid',
                    '/components/button',
                    '/components/layout',
                    '/components/input',
                    '/components/tabs',
                    '/components/popover',
                    '/components/toast',
                    '/components/cascarder',
                ]
            }
        ]
    }
}