<script lang="ts">
  import Person from "./components/Person.vue";
  export default {
    name: 'App', // Component name,
    components:{Person}
  }
</script>

<template>
  <div>
    <h1 class="app">
      Hello World !
      <Person/>
    </h1>
  </div>

</template>

<style scoped>
  .app{
    background-color: lightgray;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }

</style>