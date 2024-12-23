<script setup lang="ts" name="Father">

import Child from "./Child.vue";

import {ref} from 'vue';

// data
let car = ref('Benz');
let toy = ref('');

// receive data from child
function getToy(value: string){
  console.log('father', value);
  toy.value = value;
}
</script>

<template>
  <div class="father">
    <h3>Father component</h3>
    <h4>Car: {{car}}</h4>
    <h4 v-show="toy">Child's toy: {{ toy }}</h4>
    <Child :car="car" :sendToy="getToy"/>
  </div>

</template>

<style scoped>
.father {
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border-radius: 10px;
}
</style>