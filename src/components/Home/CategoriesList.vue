<template>
  <div class="q-pa-md doc-container">
    <div class="row items-center q-gutter-sm">
      <q-btn
        v-for="item in store.categories"
        v-bind:key="item"
        outline
        rounded
        color="primary"
        :label="item"
        @click="getJoke(item)"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useChuckStore } from "@/stores/ChuckStore";
const store = useChuckStore();
store.fetchCategories();

function getJoke(categoryName: string) {
  fetch("https://api.chucknorris.io/jokes/random?category=" + categoryName)
    .then((response) => response.json())
    .then((data) => (store.jokeValue = data.value));
  store.modal = true;
}
</script>
