export default {
    data() {
        return {
            /* Time Picker */
            hour: 0,
            minHour: 0,
            maxHour: 23,

            minute: 0,
            minMinute: 0,
            maxMinute: 59,

            TitleName: null,
            LblHour: null,
            LblMinute: null,
            BtnClear: null,
            BtnNow: null,
            HideBtnClear: false,
            HideBtnNow: false,
            BackgroundColor: null,
            /* /Time Picker */
        }
    },
    props: ['titleName', 'lblHour', 'lblMinute', 'btnClear', 'btnNow', 'hideBtnClear', 'hideBtnNow', 'backgroundColor'],
    created() {
        this.TitleName = !this.titleName || this.titleName == '' ? 'Select Time' : this.titleName;
        this.LblHour = !this.lblHour || this.lblHour == '' ? 'HOUR' : this.lblHour;
        this.LblMinute = !this.lblMinute || this.lblMinute == '' ? 'MIN' : this.lblMinute;
        this.BtnClear = !this.btnClear || this.btnClear == '' ? 'CLEAR' : this.btnClear;
        this.BtnNow = !this.btnNow || this.btnNow == '' ? 'NOW' : this.btnNow;
        this.HideBtnClear = !this.hideBtnClear ? false : this.hideBtnClear;
        this.HideBtnNow = !this.hideBtnNow ? false : this.hideBtnNow;
        this.BackgroundColor = !this.backgroundColor || this.backgroundColor == '' ? '#1976d2' : this.backgroundColor;
    },

    computed: {
        hourModel: {
            get() {
                return this.forceTwoDigits(this.hour);
            },
            set(v) {
                this.hour = Number(v);
            },
        },
        minuteModel: {
            get() {
                return this.forceTwoDigits(this.minute);
            },
            set(v) {
                this.minute = Number(v);
            },
        },
        fullTimeModel: {
            get() {
                return `${this.hourModel}:${this.minuteModel}`;
            },
            set(v) {
                const [h, m] = v.split(":");
                this.hourModel = h;
                this.minuteModel = m;
            },
        },
    },

    watch: {
        fullTimeModel(v) {
            this.$emit("input", v);
        },
        hour: function (hour) {
            this.$nextTick(() => {
                if (hour < this.minHour) this.hour = this.minHour;
                if (hour > this.maxHour) this.hour = this.maxHour;
            });
        },
        minute: function (minute) {
            this.$nextTick(() => {
                if (minute < this.minMinute) this.minute = this.minMinute;
                if (minute > this.maxMinute) this.minute = this.maxMinute;
            });
        },
    },

    methods: {
        forceTwoDigits(num) {
            return (num < 10 ? "0" : "") + num;
        },
        onAddHourClicked() {
            this.hour < this.maxHour ? (this.hour += 1) : (this.hour = this.minHour);
        },
        onSubtractHourClicked() {
            this.hour > this.minHour ? (this.hour -= 1) : (this.hour = this.maxHour);
        },
        onAddMinuteClicked() {
            this.minute < this.maxMinute
                ? (this.minute += 1)
                : (this.minute = this.minMinute);
        },
        onSubtractMinuteClicked() {
            this.minute > this.minMinute
                ? (this.minute -= 1)
                : (this.minute = this.maxMinute);
        },
        getNowTime() {
            const now = new Date();
            this.hour = now.getHours();
            this.minute = now.getMinutes();
        },
        clearTime() {
            this.hour = 0;
            this.minute = 0;
        },
    },
}