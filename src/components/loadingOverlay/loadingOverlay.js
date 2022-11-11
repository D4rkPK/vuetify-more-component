export default {
    data() {
        return {
            Loading: false,
            TitleName: null,
            SubtitleName: null,
            Type: null,
            BackgroundColor: null,
            TitleColor: null,
            SubtitleColor: null,
            Color1: null,
            Color2: null,
            Color3: null,
            Color4: null,
        }
    },
    props: ['loading', 'titleName', 'subtitleName', 'type', 'backgroundColor', 'titleColor', 'subtitleColor', 'color1', 'color2', 'color3', 'color4'],
    created() {
        this.Loading = this.loading;
        this.TitleName = !this.titleName || this.titleName == '' ? 'LOADING' : this.titleName;
        this.SubtitleName = !this.subtitleName || this.subtitleName == '' ? ' ' : this.subtitleName;
        this.Type = !this.type || this.type == '' ? 'ellipsis' : this.type;
        this.BackgroundColor = !this.backgroundColor || this.backgroundColor == '' ? '#1e1e1e' : this.backgroundColor;
        this.TitleColor = !this.titleColor || this.titleColor == '' ? '#ffffff' : this.titleColor;
        this.SubtitleColor = !this.subtitleColor || this.subtitleColor == '' ? '#9E9E9E' : this.subtitleColor;
        this.Color1 = !this.color1 || this.color1 == '' ? '#ffffff' : this.color1;
        this.Color2 = !this.color2 || this.color2 == '' ? '#ffffff' : this.color2;
        this.Color3 = !this.color3 || this.color3 == '' ? '#ffffff' : this.color3;
        this.Color4 = !this.color4 || this.color4 == '' ? '#ffffff' : this.color4;
    },

    watch: {
        loading: function (val) {
            this.Loading = val;
        },
    },
}