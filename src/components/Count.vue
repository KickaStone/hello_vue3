<script setup lang="ts">
import {ref, toRefs} from "vue";
import {useCountStore} from "../store/count.ts";
import {storeToRefs} from "pinia";

const countStore = useCountStore();

let n = ref(1);
// let { sum, a, b, c } = toRefs(countStore); // do not write this way, will parse all params
let {sum, a, b, c, bigSum, bigSumV2, bigSumV3} = storeToRefs(countStore);
console.log(toRefs(countStore));
console.log(storeToRefs(countStore));
console.log(bigSum.value)
console.log(bigSumV2.value);
console.log(bigSumV3.value);


function addToCount(x: number) {
  countStore.increment(x);
}
</script>

<template>
  <div class="count">
    <h2>Count is : {{ sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="addToCount(n)">Add</button>
    <button @click="addToCount(-n)">Minus</button>
    <br>
    <h2>TEST</h2>
    <p>a:{{ a }}, b:{{ b }}, c:{{ c }}</p>
  </div>
</template>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select, button {
  height: 25px;
  margin: 0 5px;
}

</style>