<script setup lang="ts">
import Counter from './components/Counter.vue'
import { multiply } from './utils/multiply'
</script>

<template>
  <div class="app">
    <h1>Vue App</h1>
    <Counter />
    <p>3 × 4 = {{ multiply(3, 4) }}</p>
  </div>
</template>

<style>
.app {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>

