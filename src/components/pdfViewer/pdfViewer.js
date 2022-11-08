export default {
    data() {
        return {
            Src: null,
            DocumentName: null,
            Base64: null,
            DialogStatus: false,
            Pdf: null,
        }
    },
    props: ['pdf', 'dialogStatus', 'documentName'],
    created() {
        this.DocumentName = this.documentName;
        this.Pdf = this.pdf;
        this.DialogStatus = this.dialogStatus;
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

        closePdfViewer() {
            this.DialogStatus = false;
            this.$emit('closePdfViewer', false);
        },
    },
}