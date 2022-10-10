<template>
  <v-menu
    ref="horaMenu"
    v-model="horaMenu"
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
        label="Seleccione Hora"
        required
        prepend-icon="mdi-clock-time-four-outline"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <digitalTimePicker v-model="time"></digitalTimePicker>
  </v-menu>
</template>

<script src="./example.js"></script>