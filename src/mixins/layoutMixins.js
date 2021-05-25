const layoutMixins = {
    props: {
        height: {
            type: [Number, String],
            default: 60
        },
        width: {
            type: [Number, String],
            default: 200
        }
    },
    methods: {
        fatherDetermine (text = 'w-header') {
            if (this.$parent.$options.name !== 'WContainer') {
                console.error(`<${text}> 父组件只能为 <w-container>!`)
            }
        }
    },
}

export default layoutMixins