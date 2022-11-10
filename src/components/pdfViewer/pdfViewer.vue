<template>
  <v-dialog v-model="DialogStatus" scrollable :retain-focus="false">
    <v-card>
      <v-card-title style="background-color: #323639">
        <span class="text-h5 ml-6 mt-2" style="color: white; font-weight: bold">
          {{ DocumentName }}
        </span>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-btn
            :color="BtnCloseColor"
            :text="Text"
            :outlined="Outlined"
            @click="closePdfViewer()"
          >
            <v-icon :style="{ color: BtnCloseColor }" style="font-weight: bold" :hidden="HideIconClose"
              >mdi-close
            </v-icon>
            <strong :hidden="HideBtnClose">
              {{ BtnCloseName }}
            </strong>
          </v-btn>

        </v-card-actions>
      </v-card-title>
      <iframe :src="Src" style="width: 100%; height: 100vh; border: none">
      </iframe>
    </v-card>
  </v-dialog>
</template>

<script src="./pdfViewer.js"></script>