<script lang="ts">
  import Person from "./components/Person.vue";
  import Car from "./components/Car.vue"
  export default {
    name: 'App', // Component name,
    components:{Person, Car}
  }
</script>

<template>
  <Person/>
  <Car/>
</template>

<style scoped>
</style>