# vuetify-more-component
More components for vuetify. 
#### Add new components like:
- DigitalTimePicker
- LoadingOverlay

#### See on [NPM](https://www.npmjs.com/package/vuetify-more-component)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#)

#### Digital Time Picker
<div style="display:flex;flex-flow:row wrap;align-items:center">
  <a href="https://www.npmjs.com/package/vuetify-more-component">
    <img
      align="center"
      src="https://i.postimg.cc/zvjz3Wj7/time.gif"
      alt="digitalTimePicker_img">
  </a>
</div>

#### Loading Overlay
<div style="display:flex; flex-flow:row wrap; align-items:center">
<a href='https://www.npmjs.com/package/vuetify-more-component'>
    <img
      align="center"
      src="https://i.postimg.cc/mzYvnPV2/loading.gif"
      alt="digitalTimePicker_img">
</a>
</div>


## Installation

```bash
npm install --save-dev vuetify-more-component@latest
```

## Usage

```javascript
import { loadingOverlay,  digitalTimePicker} from "vuetify-more-component";

export default {
  components: {
    digitalTimePicker,
    loadingOverlay
  },
  data() {
    return {
      loadingStatus: false,
      time: "00:00",
      menu: null,
    }
  },
}
```

```html
<template>
  <div>
    <!-- Loading Overlay -->
    <!-- *DEFAULT -->
    <loadingOverlay :loading="loadingStatus"/> 
    <!-- *CUSTOM -->
    <loadingOverlay :loading="loadingStatus" :titleName="'PLEASE WAIT'" :type="'roller'" :backgroundColor="'#1565C0'" /> 
    <!-- TYPES: ellipsis, ripple, roller, squares, -->
  </div>
  <!-- Digital Time Picker -->
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="time"
          label="Select time"
          required
          prepend-icon="mdi-clock-time-four-outline"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <digitalTimePicker
        v-model="time"
        :TitleName="'Select Time'"
        :Hour="'HOUR'"
        :Minute="'MIN'"
      ></digitalTimePicker>
    </v-menu>
  </div>
</template>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.