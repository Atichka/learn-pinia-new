import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  
  // Actions
  const increment = () => {
    count.value++
  }
  
  const decrement = () => {
    count.value--
  }
  
  // Getters
  const oddOrEven = computed(() => {
    if (count.value % 2 === 0) return 'even'
    return 'odd'
  })
  
  return { count, increment, decrement, oddOrEven }
})