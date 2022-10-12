<template>
  <v-card>
    <v-card-title class="primary white--text">{{TitleName}}</v-card-title>
    <v-card-text class="pt-4">
      <v-layout justify-center align-center>
        <v-layout align-center justify-center style="max-width: 100px">
          <v-layout column align-center>
            <v-btn
              icon
              class="my-0"
              style="position: relative; bottom: 4px"
              @click="onAddHourClicked"
            >
              <v-icon large>keyboard_arrow_up</v-icon>
            </v-btn>
            <v-text-field
              v-model="hourModel"
              style="width: 40px"
              class="pt-0 my-0 no-underline centered-input"
              type="number"
              @wheel="$event.target.blur()"
              hide-spin-buttons
              :min="minHour"
              :max="maxHour"
              step="1"
              required
              hide-details
            ></v-text-field>
            <span>{{Hour}}</span>
            <v-btn
              icon
              class="my-0"
              style="position: relative; top: 8px"
              @click="onSubtractHourClicked"
            >
              <v-icon large>keyboard_arrow_down</v-icon>
            </v-btn>
          </v-layout>

          <div
            class="grey--text"
            style="font-size: 18px; position: relative; bottom: 2px"
          >
            :
          </div>
          <v-layout align-center>
            <v-layout column align-center>
              <v-btn
                icon
                class="my-0"
                style="position: relative; bottom: 4px"
                @click="onAddMinuteClicked"
              >
                <v-icon large>keyboard_arrow_up</v-icon>
              </v-btn>
              <v-text-field
                v-model="minuteModel"
                style="width: 40px"
                class="pt-0 my-0 no-underline centered-input"
                type="number"
                hide-spin-buttons
                :min="minMinute"
                :max="maxMinute"
                step="1"
                required
                hide-details
              ></v-text-field>
              <span>{{Minute}}</span>
              <v-btn
                icon
                class="my-0"
                style="position: relative; top: 8px"
                @click="onSubtractMinuteClicked"
              >
                <v-icon large>keyboard_arrow_down</v-icon>
              </v-btn>
            </v-layout>
          </v-layout>
        </v-layout>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script src="./digitalTimePicker.js"></script>
<style scoped src="./digitalTimePicker.css"></style>