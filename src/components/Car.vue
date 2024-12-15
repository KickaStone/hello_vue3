<script setup lang="ts">
import {reactive, ref} from "vue";

  // data
  let car = reactive({brand: "BWM", price: 100000000})
  let sum = ref(0);

  // methods
  function changePrice(){
    car.price += 100; // .value
    console.log(car)
  }

  function changeSum(){
    sum.value += 100;
  }

  function changeCar(){
    // car = {brand: "Benz", price: 100000000} // not working
    // car = reactive({brand: "Benz", price: 100000000}) // still not working
    Object.assign(car, {brand: "Benz", price: 100000000}) // ok
  }
</script>

<template>
  <div class="car">
    <h2>A {{car.brand}} car, price ${{car.price}}.</h2>
    <button @click="changePrice">Change Price</button>

    <h2>Sum is {{sum}}</h2>
    <button @click="changeSum">Change sum</button>

    <button @click="changeCar">Change Car</button>
  </div>
</template>

<style scoped>
button{
  margin: 0 10px;
}
</style>