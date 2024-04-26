<script setup>
import { titleviewStore } from '@/stores/titleview'
const titleview = titleviewStore();
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="80" height="80" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/basehome">Home Base</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>

    <div class="title">PAGE : {{titleview.name}}</div>
  </header>
</template>

<style scoped>

</style>
