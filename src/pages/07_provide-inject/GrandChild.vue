<script setup lang="ts">
import {inject} from "vue";

let {money, updateMoney} = inject("gf-money", {money:0, updateMoney:(x:number)=>x});
let car = inject("gf-car", {brand: 'Unknown', price: 0});

</script>

<template>
  <div class="grand-child">
    <h3>Grand Child component</h3>
    <h4>Grandfather's money: ${{money}}</h4>
    <h4>Grandfather's car: Brand{{car.brand}}, price ${{car.price}}</h4>
    <button @click="updateMoney(5)">Spend Money</button>
  </div>
</template>

<style scoped>
.grand-child {
  background-color: yellow;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px black;
  margin-top: 10px;
}
</style>