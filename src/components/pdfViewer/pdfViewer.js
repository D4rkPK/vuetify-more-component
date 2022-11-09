export default {
    data() {
        return {
            Src: null,
            Base64: null,
            DocumentName: null,
            DialogStatus: false,
            Pdf: null,
            BtnCloseName: null,
            BtnCloseColor: null,
            TypeBtnClose: null,
            HideBtnClose: false,
            HideIconClose: false,
            Text: null,
            Outlined: null,

        }
    },
    props: ['pdf', 'dialogStatus', 'documentName', 'btnCloseName', 'btnCloseColor', 'typeBtnClose', 'hideBtnClose', 'hideIconClose'],
    created() {
        this.DocumentName = this.documentName;
        this.BtnCloseName = !this.btnCloseName || this.btnCloseName == '' ? 'CLOSE' : this.btnCloseName;
        this.BtnCloseColor = !this.btnCloseColor || this.btnCloseColor == '' ? '#ffffff darken' : this.btnCloseColor;
        this.HideBtnClose = !this.hideBtnClose ? false : this.hideBtnClose;
        this.HideIconClose = this.hideIconClose ? true : this.hideIconClose;
        this.Pdf = this.pdf;
        this.DialogStatus = this.dialogStatus;
        this.TypeBtnClose = this.typeBtnCloseFun(this.typeBtnClose);
    },

    watch: {
        pdf: function (val) {
            this.Pdf = val;
        },
        dialogStatus: function (val) {
            this.DialogStatus = val;
            if (val) {
                this.openDialog();
            }
        },
    },

    methods: {
        openDialog() {
            let pdfData = this.base64ToArrayBuffer(this.Pdf);
            let file = new Blob([pdfData], { type: 'application/pdf' });
            let fileUrl = URL.createObjectURL(file);
            this.Src = fileUrl;
        },

        base64ToArrayBuffer(base64) {
            let binary_string = atob(base64.toString().split(",")[1]);
            let len = binary_string.length;
            let bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes.buffer;
        },

        typeBtnCloseFun(val) {
            if (val === 'text') {
                this.Text = true;
                this.Outlined = false;
            } else if (val === 'outlined') {
                this.Text = false;
                this.Outlined = true;
            }
        },

        closePdfViewer() {
            this.DialogStatus = false;
            this.$emit('closePdfViewer', false);
        },
    },
}