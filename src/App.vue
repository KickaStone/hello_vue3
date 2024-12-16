<script lang="ts" setup name="App">
  import Person from "./components/Person.vue";
  import {reactive} from "vue";
  import type {Persons} from "./types";

  let personList = reactive<Persons>([
    {id: 'safdj', name:'Bob', age:50},
    {id: 'safdjsd', name:'Bob1', age:51},
    {id: 'safdjqwe', name:'Bob2', age:52, gender: 'Male'}, // gender?
  ]);
</script>
<template>
  <Person a="data" :list="personList"/>
  <Person />
</template>

<style scoped>
</style>