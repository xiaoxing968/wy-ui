const layoutMixins = {
    props: {
        height: {
            type: [Number, String],
            default: 60,
            validator (value) {
                return !isNaN(Number(value))
            }
        },
        width: {
            type: [Number, String],
            default: 200,
            validator (value) {
                return !isNaN(Number(value))
            }
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