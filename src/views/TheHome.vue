<template>
  <section class="shadow-2 rounded-borders">
    <CategoriesList />
  </section>
  <JokeDialog />
</template>
<script setup lang="ts">
import CategoriesList from "@/components/Home/CategoriesList.vue";
import JokeDialog from "@/components/Home/JokeDialog.vue";

import { useChuckStore } from "@/stores/ChuckStore";

useChuckStore();
</script>
