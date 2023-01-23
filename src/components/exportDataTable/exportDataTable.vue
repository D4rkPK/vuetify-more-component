<template>
  <v-row>
    <v-col style="display: inline-flex">
      <!-- Search -->
      <v-text-field
        class="ml-2 mr-5"
        v-model="Search"
        append-icon="mdi-magnify"
        :label="LblSearch"
        single-line
        hide-details
      ></v-text-field>

      <!-- PDF -->
      <div :hidden="Hidden_btn_export_pdf">
        <v-tooltip bottom :color="Tooltip_color_pdf">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-on="on"
            v-bind="attrs"
            @click="exportPdf()"
            class="m-2"
            fab
            small
            :color="Btn_color_pdf"
          >
            <v-icon>{{ Btn_icon_pdf }}</v-icon>
          </v-btn>
        </template>
        <span>{{ Tooltip_text_pdf }}</span>
      </v-tooltip>
      </div>

      <!-- EXCEL -->
      <div :hidden="Hidden_btn_export_excel">
        <v-tooltip bottom :color="Tooltip_color_excel">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
          @click="exportExcel()"
          v-on="on"
            v-bind="attrs"
            class="m-2"
            fab
            small
            :color="Btn_color_excel"

           
          >
            <v-icon>{{ Btn_icon_excel }}</v-icon>
          </v-btn>
        </template>
        <span>{{ Tooltip_text_excel }}</span>
      </v-tooltip></div>
      
    </v-col>
  </v-row>
</template>
<script  src="./exportDataTable.js"/>