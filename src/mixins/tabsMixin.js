const tabMixin = {
    inject: ['tabsBus'],
    data() {
        return {
            tabPanes: []
        }
    },
    created () {
        this.getTabProps()
    },
    methods: {
        getTabProps () {
            this.tabsBus.$on('getTabProps', (data) => {
                this.tabPanes.push(data)
            })
        }
    },
    computed:{
        tabNavWrapperClasses () {
            let { tabPosition } = this.tabsBus
            return [
                `tab-${tabPosition}`
            ]
        },
        isVertical () {
            let { tabPosition } = this.tabsBus
            return tabPosition === 'left' || tabPosition === 'right'
        }
    }
}

export default tabMixin