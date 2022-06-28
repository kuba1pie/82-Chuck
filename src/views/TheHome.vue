<template>
  <section class="shadow-2 rounded-borders">
    <h2 style="text-align: center">Select category to see the joke</h2>
    <CategoriesList />
  </section>
  <JokeDialog />
</template>
<script setup lang="ts">
import CategoriesList from "@/components/Home/CategoriesList.vue";
import JokeDialog from "@/components/Home/JokeDialog.vue";
</script>
