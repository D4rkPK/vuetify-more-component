export default {
    data() {
        return {
            dialogLoading: false,
        }
    },
    props: ['loading'],
    watch: {
        loading: function (val) {
            this.dialogLoading = val;
        }
    },
    created() {
        this.dialogLoading = this.loading;
    },
}