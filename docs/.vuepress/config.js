module.exports = {
    base:'/wy-ui/',
    title: 'Hi Wu',
    description: 'Vue的UI框架',
    themeConfig: {
        head: [
            ['link', { rel: 'icon', href: '/logo.png' }]
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
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
                ]
            }
        ]
    }
}