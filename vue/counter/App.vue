<script setup>
import { ref } from 'vue';

// カウントの初期値
const count = ref(0);
</script>

<template>
  <div>
    <h1>Vue Counter</h1>
    <p>Count: {{ count }}</p>

    <button @click="count--">-1</button>
    <button @click="count++">+1</button>
    <button @click="count = 0">Reset</button>
  </div>
</template>
