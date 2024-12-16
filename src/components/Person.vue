<template>
  <div class="person">
    <h2>Name: {{person.name}}</h2>
    <h2>Age: {{person.age}}</h2>
    <h2>Car: {{ person.car.c1}}, {{ person.car.c2 }}</h2>
    <button @click="changeName">changeName</button>
    <button @click="changeAge">changeAge</button>
    <button @click="changeC1">changeC1</button>
    <button @click="changeC2">changeC2</button>
    <button @click="changeCar">changeCar</button>

  </div>
</template>

<script lang="ts" setup>

import {reactive, watch} from "vue";

let person = reactive({
  name: "BOB",
  age: 18,
  car: {
    c1: 'Benz',
    c2: 'BWM',
  }
})

function changeName() {
  person.name += '~';
}
function changeAge() {
  person.age += 1;
}
function changeCar() {
  person.car = {
    c1: 'Benz2024',
    c2: 'BWM2024',
  }
}
function changeC1(){
  person.car.c1 = 'JEEP';
}

function changeC2(){
  person.car.c2 = 'Audi';
}

// watch(person.name, (newValue)=>{
//   console.log(person, newValue);
// });

// watch a basic variable
// watch(() => person.name, (newValue) => { // watch a getter function
//   console.log(newValue);
// })

watch(() => person.car, (newValue) => {  // best practice
  console.log(newValue)
}, {deep: true})


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