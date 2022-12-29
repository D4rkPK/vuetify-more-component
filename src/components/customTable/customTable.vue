<template>
  <v-row>
    <v-col lg="12" md="12" sm="12">
      <span style="font-size: 1.3rem; font-weight: bold">
        {{ TitleTable }}
      </span>
    </v-col>

    <v-col style="display: inline-flex">
      <v-text-field
        v-model="Search"
        append-icon="mdi-magnify"
        :label="Text_field_label"
        single-line
        hide-details
        style="margin-right: 50px; margin-left: 50px"

      ></v-text-field>

      <v-btn class="m-2" @click="exportPdf()" fab small :color="Btn_color_pdf"
      
        ><v-icon>picture_as_pdf</v-icon></v-btn
      >

      <v-btn class="m-2" @click="exportExcel()" fab small :color="Btn_color_excel"
        ><v-icon>table_chart</v-icon></v-btn
      >
    </v-col>
  </v-row>
</template>
  <script  src="./customTable.js"/>