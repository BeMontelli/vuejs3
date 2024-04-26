<script setup>
  import { useCounterStore } from '@/stores/counter'
  const counter = useCounterStore();

  import { titleviewStore } from '@/stores/titleview'
  const titleview = titleviewStore();
  titleview.set("About");
</script>

<template>
  <div class="about">
    <div>
      <h1>This is an about page</h1>
      <div>Current Count: {{ counter.count }}</div>
      <div>Double Count is: {{ counter.doubleCount }}</div>

      <button @click="counter.increment()">Increment Counter</button>
      <button @click="counter.reset()">Reset Counter</button>

    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
  }
}
</style>
