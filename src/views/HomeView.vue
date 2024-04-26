<script setup>
import { titleviewStore } from '@/stores/titleview'
const titleview = titleviewStore();
titleview.set("Home Old");

import TheWelcome from '@/components/TheWelcome.vue'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>

  <HelloWorld msg="You did it!">
    <h2>YOOOOOO !!</h2>
  </HelloWorld>

  <main>
    <TheWelcome />
  </main>
</template>
