<template>
  <div class="person">
    <h2>Current Sum is {{ sum }}</h2>
    <button @click="changeSum">Sum + 1</button>
  </div>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue';

let sum = ref(0);

const y = ref(0);
const x = ref(0);

function changeSum(){
  sum.value += 1;
}

watch(sum, (newValue, oldValue)=>{
  console.log('sum is changed', oldValue, '->', newValue);
})

watch([x, ()=>y.value], ([newX, newY])=>{
  console.log(`x is ${newX}, y is ${newY}`);
})

</script>

<style lang="css">
.person{
  background-color: lightblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button{
  margin: 0 5px
}
</style>