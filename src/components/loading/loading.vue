<template>
  <v-dialog persistent v-model="dialogLoading">
    <v-overlay>
      <!-- :color any color #FFFF -->
    <v-card width="250" :color="backgroundColor" >
      <v-card-text class="text-center p-0 pt-5">
        <span class="span_loading" >{{TitleName}}</span><br/>

        <!-- type: lds-ellipsis , lds-ripple, lds-roller , ldio-sv0dslv7wbc , -->
        <div :class="type"><div></div><div></div><div></div><div></div></div>
      </v-card-text>
    </v-card>
  </v-overlay>
  </v-dialog>
</template>
<script src="./loading.js"></script>
<style scoped src="./loading.css"></style>