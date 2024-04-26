import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(JSON.parse(localStorage.getItem("counter")) || 0);
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++;
    localStorage.setItem("counter", JSON.stringify(count.value));
  }
  function reset() {
    count.value = 0;
    localStorage.setItem("counter", JSON.stringify(count.value));
  }

  return { count, doubleCount, increment, reset }
})
