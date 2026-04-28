<template>
  <div class="home">
    <Counter />
    <div class="buttons">
      <button @click="storeCounter.decrement()">-</button>
      <button @click="storeCounter.increment()">+</button>
    </div>
  </div>
  <hr>
  <div>
    This counter is: {{ storeCounter.oddOrEven }}
  </div>
  <hr>
  <div>
    <h3>Edit counter:</h3>
    <input 
      v-model="storeCounter.count"
      type="number"
    >
  </div>
</template>

<script setup>
import Counter from '@/components/Counter.vue';
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()

</script>