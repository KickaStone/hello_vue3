<script setup lang="ts" name="Child">
  import {ref} from "vue";
  // child's data
  let toy = ref("Baby");

  // receive data from father component
  // let props = defineProps(['car', 'sendToy'])
  defineProps(['car', 'sendToy'])

</script>

<template>
  <div class="child">
    <h3>Child component</h3>
    <h4>Toy: {{toy}}</h4>
    <h4>Father's car: {{car}}</h4>
    <button @click="sendToy(toy)">Give father toy</button>
  </div>
</template>

<style scoped>
.child {
  background-color: skyblue;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px black;
}
</style>