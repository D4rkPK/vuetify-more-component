<template>
  <v-dialog persistent v-model="dialogLoading">
    <v-overlay>
    <v-card width="250" color=#323232>
      <v-card-text class="text-center p-0 pt-5">
        <span class="span_loading">{{TitleName}}</span><br/>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </v-card-text>
    </v-card>
  </v-overlay>
  </v-dialog>
</template>
<script src="./loading.js"></script>
<style scoped src="./loading.css"></style>