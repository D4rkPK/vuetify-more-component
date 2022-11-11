<div>
  <a href="https://www.npmjs.com/package/vuetify-more-component">
  <img src="https://img.shields.io/npm/dt/vuetify-more-component"       
  alt="NPM downloads">
  </a>
  <a href="https://www.npmjs.com/package/vuetify-more-component">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  </a>
</div>

#### See on [NPM](https://www.npmjs.com/package/vuetify-more-component)

# vuetify-more-component
More components for vuetify. 
#### Add new components like:
- **DigitalTimePicker:** simpler and more minimalistic version of Vuetify's v-time-picker.
- **LoadingOverlay:** a customizable overlay that indicates that the process or page is loading.
- **PdfViewer:** customizable component that allows viewing any PDF encoded in Base64, up to 512MB!.

### Digital Time Picker
###### Default Component
<div style="display:flex;flex-flow:row wrap;align-items:center;">
  <a href="https://www.npmjs.com/package/vuetify-more-component">
    <img
      style="width: 300px"
      align="center"
      src="https://i.postimg.cc/kMHJjLP2/ezgif-4-7048178763.gif"
      alt="digitalTimePicker_img">
  </a>
</div>

###### Custom Component
<div style="display:flex;flex-flow:row wrap;align-items:center;">
  <a href="https://www.npmjs.com/package/vuetify-more-component">
    <img
      style="width: 300px"
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
<div style="display:flex; flex-flow:row wrap; align-items:center;">
<a href='https://www.npmjs.com/package/vuetify-more-component'>
    <img
      style="width: 200px"
      align="center"
      src="https://i.postimg.cc/CM9ZZR1r/ezgif-4-b3002c050e.gif"
      alt="digitalTimePicker_img">
</a>
</div>

### PDF Viewer
###### Default Component
<div style="display:flex; flex-flow:row wrap; align-items:center;">
<a href='https://www.npmjs.com/package/vuetify-more-component'>
    <img
      style="width: 500px"
      align="center"
      src="https://i.postimg.cc/zBjfq19Z/Default.png"
      alt="PDFViewer_img">
</a>
</div>

###### Custom Example 1
<div style="display:flex; flex-flow:row wrap; align-items:center;">
<a href='https://www.npmjs.com/package/vuetify-more-component'>
    <img
      style="width: 500px"
      align="center"
      src="https://i.postimg.cc/xT94kVhp/custom-header-1.png"
      alt="PDFViewer_img">
</a>
</div>

###### Custom Example 2
<div style="display:flex; flex-flow:row wrap; align-items:center;">
<a href='https://www.npmjs.com/package/vuetify-more-component'>
    <img
      style="width: 500px"
      align="center"
      src="https://i.postimg.cc/YqjQDXWq/custom-header-2.png"
      alt="PDFViewer_img">
</a>
</div>

##### It can display entire books and PDFs larger than 400mb!
<div style="display:flex; flex-flow:row wrap; align-items:center;">
<a href='https://www.npmjs.com/package/vuetify-more-component'>
    <img
      style="width: 500px"
      align="center"
      src="https://i.postimg.cc/zBqvYhsJ/Opera-Captura-de-pantalla-2022-11-10-082330-localhost.png"
      alt="PDFViewer_img">
</a>
</div>
<br />
<div style="display:flex; flex-flow:row wrap; align-items:center;">
<a href='https://www.npmjs.com/package/vuetify-more-component'>
    <img
      style="width: 700px"
      align="center"
      src="https://i.postimg.cc/BQfNf33Q/Captura-de-pantalla-2022-11-10-152739.png"
      alt="PDFViewer_img">
</a>
</div>

## Installation

```bash
npm install vuetify-more-component@latest
```

## Usage

```javascript
import { loadingOverlay,  digitalTimePicker, pdfViewer } from "vuetify-more-component";

export default {
  components: {
    digitalTimePicker,
    loadingOverlay,
    pdfViewer
  },
  data() {
    return {
      /* loadingOverlay*/
      loadingStatus: false,

      /* digitalTimePicker */
      time: "00:00",
      menu: null,

      /* pdfViewer */
      dialogStatus: false, // send the state to show the visualizer
      pdf: "", // send base64 encoded pdf in format data:application/pdf;base64,
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

  <!-- PDF VIEWER -->

  <!-- DEFAULT -->
  <pdfViewer
    :dialogStatus="dialogStatus"
    @closePdfViewer="dialogStatus = false"
    :pdf="pdf"
  ></pdfViewer>
  <!-- CUSTOM -->
  <pdfViewer
    :dialogStatus="dialogStatus" 
    @closePdfViewer="dialogStatus = false"
    :pdf="pdf" 
    :documentName="'Document name'"
    :btnCloseName="'Back'"
    :btnCloseColor="'#E65100'"
    :typeBtnClose="'text'"
    :hideBtnClose="false" 
    :hideIconClose="true"
  ></pdfViewer>
  
</template>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.