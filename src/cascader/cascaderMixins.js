const cascaderMixins = {
    props: {
        value: {
            type: Array,
            default: () => []
        },
        level: {
            type: Number,
            default: 0
        },
        source: {
            type: Array,
            default: () => []
        },
        height: {
            type: [Number, String],
            default: 150
        },
        lazyLoad: {
            type: Function
        },
        options: {
            type: Object,
            default: () => {
                return {
                    value: '',
                    label: '',
                    children: '',
                    isLeaf: ''
                }
            }
        }
    },
    computed: {
        newValue: {
            get: function () {
                return this.value
            },
            set: function (value) {
                this.$emit('input', value)
            }
        },
        valueName() {
            return this.options.value || 'value'
        },
        childrenName() {
            return this.options.children || 'children'
        },
        isLeafName() {
            return this.options.isLeaf || 'isLeaf'
        },
        labelName() {
            return this.options.label || 'name'
        }
    }
}

export default cascaderMixins
