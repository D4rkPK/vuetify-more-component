export default {
    data() {
        return {
            dialogLoading: false,
        }
    },
    props: ['loading', 'TitleName','type','backgroundColor'],
    
    watch: {
        loading: function (val) {
            this.dialogLoading = val;
        }
    },
    created() {
        this.dialogLoading = this.loading;
    },
}