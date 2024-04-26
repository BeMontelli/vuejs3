import {ref, computed} from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from "@vueuse/core"

export const useCounterStore = defineStore('counter', () => {
  const count = ref(useLocalStorage("counter"),0);
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++;
  }
  function reset() {
    count.value = 0;
  }

  return { count, doubleCount, increment, reset }
})
