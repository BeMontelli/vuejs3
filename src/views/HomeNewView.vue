<script setup>
import {ref, reactive, computed, watch} from "vue";

const h1desc = "Hello";
const inputval = ref("val");
const inputvalnb = ref(12);

const user = reactive({
  name: "Name",
  age: 18,
});

const process = (e) => {
  console.log(e.target.name+" changed with val: "+e.target.value);
};

const sentence = computed(() => {
  const years = (user.age > 1) ? "years" : "year";
  return "Hello, I'm "+user.name+" & I'm "+user.age+" "+years+" old.";
});

watch(inputval, (newVal, oldVal) => { // watch ref() simple var
  console.log(newVal, oldVal);
});

watch(() => user.age, // watch reactive() property
    (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
</script>

<template>
  <main>
    <!-- HOME comment -->
    <h1>HOME : {{ h1desc }}</h1>

    <input type="text" v-model="inputval">
    <p>Display value : {{ inputval }}</p>

    <input type="number" v-model="inputvalnb">
    <p>Display value : {{ inputvalnb }}</p>

    <hr>

    <input name="name" type="text" v-model="user.name" v-on:change="process">
    <p class="bold"
       :class="{'adult':user.age >= 18,'child':user.age <= 10,}"
    >{{ user.name }}</p>

    <input name="age" type="number" v-model="user.age" v-on:change="process">
    <p class="bold"
       :class="{'adult':user.age >= 18,'child':user.age <= 10,}"
    >Age : {{ user.age }}</p>

    <div v-if="user.age >= 18" class="adult">User adult</div>
    <div v-else-if="user.age > 10">User teenager</div>
    <div v-else class="child">User child</div>

    <p>{{ sentence }}</p>
  </main>
</template>

<style scoped>
  .bold{
    font-weight: bold;
  }
  .adult{
    color: deepskyblue;
  }
  .child{
    color: pink;
  }
</style>