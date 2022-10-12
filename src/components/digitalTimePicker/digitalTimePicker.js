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
            /* /Time Picker */
        }
    },
    props: ['TitleName', 'Hour', 'Minute'],
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
    },
}