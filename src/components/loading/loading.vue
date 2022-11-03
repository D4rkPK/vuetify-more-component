<template>
  <v-dialog persistent v-model="Loading">
    <v-overlay>
      <!-- :color any color #FFFF -->
      <v-card width="250" :color="BackgroundColor">
        <v-card-text class="text-center p-0 pt-5">
          <!-- Title -->
          <div>
            <span class="title_loading" :style="{color: TitleColor}">{{ TitleName }}</span>
          </div>
           <!-- Subtitle -->
          <div v-if="SubtitleName != ' '">
            <span class="subtitle_loading" :style="{color: SubtitleColor}">{{ SubtitleName }}</span>
          </div>
          <!-- type: ellipsis, ripple, roller, squares, -->
          <div :class="Type">
            <div :style="{ backgroundColor: Color1 }"></div>
            <div :style="{ backgroundColor: Color2 }"></div>
            <div :style="{ backgroundColor: Color3 }"></div>
            <div :style="{ backgroundColor: Color4 }"></div>
          </div>
        </v-card-text>
      </v-card>
    </v-overlay>
  </v-dialog>
</template>
<script src="./loading.js"></script>
<style scoped src="./loading.css"></style>