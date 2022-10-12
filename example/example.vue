<template>
  <div>
    <!-- Loading Overlay -->
    <loadingOverlay :loading="loadingStatus" />
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

<script src="./example.js"></script>