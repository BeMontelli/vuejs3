<script setup>
import {ref, reactive} from "vue";

const h1desc = "Hello";
const inputval = ref("val");
const inputvalnb = ref(12);

const user = reactive({
  name: "name",
  age: 18,
});

const process = (e) => {
  console.log(e.target.name+" changed with val: "+e.target.value);
};
</script>

<template>
  <main>
    <h1>HOME : {{ h1desc }}</h1>

    <input type="text" v-model="inputval">
    <p>Display value : {{ inputval }}</p>

    <input type="number" v-model="inputvalnb">
    <p>Display value : {{ inputvalnb }}</p>

    <hr>

    <input name="name" type="text" v-model="user.name" v-on:change="process">
    <p>Name : {{ user.name }}</p>

    <input name="age" type="number" v-model="user.age" v-on:change="process">
    <p>Age : {{ user.age }}</p>

    <div v-if="user.age >= 18">User adult</div>
    <div v-else-if="user.age > 10">User teenager</div>
    <div v-else>User child</div>
  </main>
</template>
