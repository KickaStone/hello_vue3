<script setup lang="ts">
  import {ref} from "vue";

  // data
  let car = ref({brand: "BWM", price: 100000000})
  let games = ref([
    {id:'game1', name:'Super Mario'},
      {id:'game2', name:'Steel'},
      {id:'game3', name:'Steel'},
  ])

  // methods
  function changePrice(){
    car.value.price += 100; // .value
    console.log(car)
  }

  function changeGameName(){
    games.value[0].name = 'Super Mario 2'; // `ref` <=> .value
  }
</script>

<template>
  <div class="car">
    <h2>A {{car.brand}} car, price ${{car.price}}.</h2>
    <button @click="changePrice">Change Price</button>

    <ul>
      <li v-for="g in games" :key="g.id">{{g.name}}</li>
    </ul>
    <button @click="changeGameName">Change the first game's name</button>
  </div>
</template>

<style scoped>

</style>