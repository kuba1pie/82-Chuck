<template>
  <section class="shadow-2 rounded-borders">
    <CategoriesList />
  </section>
  <JokeDialog />
</template>
<script setup lang="ts">
import { useChuckStore } from "@/stores/ChuckStore";

useChuckStore();
</script>
