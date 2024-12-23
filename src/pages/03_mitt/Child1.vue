<script setup lang="ts" name="Child1">
  import {ref} from "vue";
  import emitter from "../../utils/emitter.ts";
  let toy = ref("🚗Toy car");

</script>

<template>
  <div class="child">
    <h3>Child1 component</h3>
    <h4>Toy: {{toy}}</h4>
    <button @click="emitter.emit('send-toy', toy)">Give toy to child2</button>
  </div>
</template>

<style scoped>
.child {
  background-color: pink;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px black;
  margin-top: 10px;
}
</style>