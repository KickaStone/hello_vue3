<script lang="ts" setup name="App">
  import Person from "./components/Person.vue";
  import {ref} from "vue";

  let title = ref()
  let person = ref()

  function showLog(){
    console.log(title.value)
  }

  function showPerson(){
    console.log(person.value)
  }
</script>
<template>
  <h2 ref="title">title</h2>
  <button @click="showLog">showTitleByRef</button>
  <Person ref='person'/>
  <button @click="showPerson">showPerson</button>
</template>

<style scoped>
</style>