<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  count.value--
}
</script>

<template>
  <div class="counter">
    <h2>计数器</h2>
    <p class="count" data-testid="count">{{ count }}</p>
    <div class="buttons">
      <button @click="decrement" data-testid="decrement-btn">-</button>
      <button @click="increment" data-testid="increment-btn">+</button>
    </div>
  </div>
</template>

<style scoped>
.counter {
  text-align: center;
  padding: 20px;
}

.count {
  font-size: 2rem;
  font-weight: bold;
}

.buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
}

button {
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>

