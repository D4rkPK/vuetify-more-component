<template>
  <v-card> 
    <v-card-title :style="{backgroundColor: BackgroundColor}" class="white--text">{{ TitleName }}</v-card-title>

    <v-card-text class="pt-4 pb-1">
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
            <span>{{ LblHour }}</span>
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
              <span>{{ LblMinute }}</span>
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
      <div class="d-flex justify-end pt-2">
        <v-btn color="secondary" :hidden="HideBtnClear" text @click="clearTime()">{{BtnClear}}</v-btn>
        <v-btn :color="BackgroundColor" :hidden="HideBtnNow" text @click="getNowTime()">{{BtnNow}}</v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script src="./digitalTimePicker.js"></script>
<style scoped src="./digitalTimePicker.css"></style>