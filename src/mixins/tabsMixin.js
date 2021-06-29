const tabMixin = {
    inject: ['tabsBus'],
    data() {
        return {
            tabPanes: []
        }
    },
    created () {
        this.getTabProps()
        console.log(this.tabsBus,'this.tabsBus')
    },
    methods: {
        getTabProps () {
            this.tabsBus.$on('getTabProps', (data) => {
                console.log(data,'data')
                this.tabPanes.push(data)
            })
        }
    }
}

export default tabMixin