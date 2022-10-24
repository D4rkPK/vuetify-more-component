export default {
    data() {
        return {
            Loading: false,
            TitleName: null,
            Type: null,
            BackgroundColor: null,
        }
    },
    props: ['loading', 'titleName','type','backgroundColor'],
    
    watch: {
        loading: function (val) {
            this.Loading = val;
        },
    },
    created() {
        this.Loading = this.loading;
        this.TitleName = !this.titleName || this.titleName == '' ? 'LOADING' : this.titleName;
        this.Type = !this.type || this.type == '' ? 'ellipsis' : this.type;
        this.BackgroundColor = !this.backgroundColor || this.backgroundColor == '' ? '#1e1e1e' : this.backgroundColor;
    },
}