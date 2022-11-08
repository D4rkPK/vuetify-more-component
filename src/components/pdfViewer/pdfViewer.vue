<template>
  <v-dialog v-model="DialogStatus" scrollable>
    <v-card>
      <v-card-title style="background-color: #323639">
        <span class="text-h5 ml-6 mt-2" style="color: white; font-weight: bold">
          {{ DocumentName }}
        </span>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-btn color="white darken-1" text @click="closePdfViewer()">
            Close
          </v-btn>
        </v-card-actions>
      </v-card-title>
      <iframe :src="Src" style="width: 100%; height: 100vh; border: none">
      </iframe>
    </v-card>
  </v-dialog>
</template>

<script src="./pdfViewer.js"></script>