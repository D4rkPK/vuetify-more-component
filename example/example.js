import { loadingOverlay,  digitalTimePicker} from "vuetify-more-component";

export default {
  components: {
    digitalTimePicker,
    loadingOverlay
  },
  data() {
    return {
      loadingStatus: true,
      time: "00:00",
      menu: null,
    }
  },
}