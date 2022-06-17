<script setup lang="ts">
import TheHomeVue from "./views/TheHome.vue";

import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

import { useChuckStore } from "@/stores/ChuckStore";

useChuckStore();
</script>

<template>
  <TheHeader />
  <TheHomeVue />
  <TheFooter />
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap')
html, body
  font-family: 'Source Sans Pro', sans-serif
</style>
