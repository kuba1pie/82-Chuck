<template>
  <q-dialog v-model="store.modal">
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">The joke</div>
        <q-space />
        <q-btn
          icon="close"
          flat
          round
          dense
          v-close-popup
          color="blue"
          @click="store.modal = false"
        />
      </q-card-section>
      <q-card-section
        style="text-align: center; font-size: 1.8em; color: #222; padding: 2em"
      >
        {{ store.jokeValue }}
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { useChuckStore } from "@/stores/ChuckStore";
const store = useChuckStore();
</script>
