import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const titleviewStore = defineStore('titleview', () => {
  const name = ref("");
  function set(val) {
    name.value = val;
  }
  function reset() {
    name.value = "";
  }

  return { name, set, reset }
})
