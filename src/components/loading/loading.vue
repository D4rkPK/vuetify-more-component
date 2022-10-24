<template>
  <v-dialog persistent v-model="Loading">
    <v-overlay>
      <!-- :color any color #FFFF -->
    <v-card width="250" :color="BackgroundColor" >
      <v-card-text class="text-center p-0 pt-5">
        <span class="span_loading" >{{TitleName}}</span><br/>

        <!-- type: ellipsis, ripple, roller, squares, -->
        <div :class="Type"><div></div><div></div><div></div><div></div></div>
      </v-card-text>
    </v-card>
  </v-overlay>
  </v-dialog>
</template>
<script src="./loading.js"></script>
<style scoped src="./loading.css"></style>