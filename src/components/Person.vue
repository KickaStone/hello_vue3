<template>
  <div class="person">
    <h2>Sum is {{sum}}</h2>
    <button @click="add">Sum + 1</button>
  </div>
</template>

<script lang="ts" setup name="Person">

import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue";

let sum = ref(0);

function add(){
  sum.value++;
}

console.log("\tPerson created")

onBeforeMount(()=>{
  console.log("\tPerson beforeMount")
});

onMounted(()=>{
  console.log("\tPerson mounted")
})

onBeforeUpdate(function () {
  console.log("\tPerson beforeUpdate")
})

onUpdated(()=>{
  console.log("\tPerson updated")
})

onBeforeUnmount(()=>{
  console.log("\tPerson beforeUmounted")
})

onUnmounted(()=>{
  console.log("\tPerson unmounted")
})

</script>

<style lang="css" scoped>
.person{
  background-color: lightblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
}
button{
  margin: 0 5px
}
</style>