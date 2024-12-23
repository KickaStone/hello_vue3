<script setup lang="ts" name="GrandChild">
import Child from "./Child.vue";
import {reactive, ref, provide} from "vue";

let car = reactive({
  brand: 'Benz',
  price: 10000000
})

let money = ref(1000);

function updateMoney(value: number) {
  money.value -= value;
}
// provide data to descendants
provide('gf-money', {money, updateMoney}); // do not use money.value
provide('gf-car', car);


</script>

<template>
  <div class="father">
    <h3>Father component</h3>
    <h4>Money: ${{money}}</h4>
    <h4>Car: Brand{{car.brand}}, price ${{car.price}}</h4>
    <Child></Child>
  </div>

</template>

<style scoped>
.father {
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border-radius: 10px;
}


</style>