# vuetify-more-component
More components for vuetify. 
#### Add new components like:
- DigitalTimePicker
- LoadingOverlay

#### See on [NPM](https://www.npmjs.com/package/vuetify-more-component)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#)

### Digital Time Picker
###### Default Component
<div style="display:flex;flex-flow:row wrap;align-items:center; max-width: 300px">
  <a href="https://www.npmjs.com/package/vuetify-more-component">
    <img
      align="center"
      src="https://i.postimg.cc/kMHJjLP2/ezgif-4-7048178763.gif"
      alt="digitalTimePicker_img">
  </a>
</div>

###### Custom Component
<div style="display:flex;flex-flow:row wrap;align-items:center; max-width: 300px">
  <a href="https://www.npmjs.com/package/vuetify-more-component">
    <img
      align="center"
      src="https://i.postimg.cc/NMgqMkqq/image.png"
      alt="digitalTimePicker_img">
  </a>
</div>

### Loading Overlay
###### Default Component
<div style="display:flex; flex-flow:row wrap; align-items:center">
<a href='https://www.npmjs.com/package/vuetify-more-component'>
    <img
      align="center"
      src="https://i.postimg.cc/mzYvnPV2/loading.gif"
      alt="digitalTimePicker_img">
</a>
</div>
###### Custom Component
<div style="display:flex; flex-flow:row wrap; align-items:center; max-width: 200px">
<a href='https://www.npmjs.com/package/vuetify-more-component'>
    <img
      align="center"
      src="https://i.postimg.cc/CM9ZZR1r/ezgif-4-b3002c050e.gif"
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
    <!-- LOADING OVERLAY -->

    <!-- DEFAULT -->
    <loadingOverlay :loading="loadingStatus"/> 
    <!-- CUSTOM -->
    <loadingOverlay
      :loading="loadingStatus"
      :titleName="'LOADING'"
      :titleColor="'#FF9800'"
      :subtitleName="'Please wait'"
      :subtitleColor="'#FFE0B2'"
      :type="'ripples'"
      :backgroundColor="'#151515'"
      :color1="'#E65100'"
      :color2="'#EF6C00'"
      :color3="'#F57C00'"
      :color4="'#FB8C00'"
    />
    <!-- TYPES: ellipsis, ripples, roller, squares, -->
  </div>

  <!-- DIGITAL TIME PICKER -->
  
  <!-- DEFAULT -->
  <div>
    <v-menu
      ref="menu"
      v-model="menu2"
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
      ></digitalTimePicker>
    </v-menu>
  </div>
  <!-- CUSTOM -->
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
        :titleName="'Custom Title'"
        :lblHour="'HR'"
        :lblMinute="'MIN'"
        :hideBtnClear="false"
        :hideBtnNow="false"
        :btnClear="'Delete'"
        :btnNow="'Current'"
        :backgroundColor="'#E65100'"
      ></digitalTimePicker>
    </v-menu>
  </div>


</template>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.