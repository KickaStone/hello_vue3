<script setup lang="ts" name="Father">

import Child from "./Child.vue";
import {ref} from "vue";

// function test(value: number, c:Event) {
//   console.log("test", value, c);
// }

let toy = ref('');
// let str = ref('some text');
function getToy(value: string) {
  console.log('xyz called', value, 'received');
  toy.value = value;
}
</script>

<template>
  <div class="father">
    <h3>Father component</h3>
<!--    <h4>{{ str }}</h4>-->
<!--    <button @click="str = $event">Change text</button>-->

<!--    <button @click="test(10, $event)">Test</button>-->
<!--    <br>-->
<!--    <button @click="">Click to get child's toy</button>-->
<!--    event bind -->
    <h4 v-show="toy">Child's toy: {{ toy }}</h4>
    <Child @send-toy="getToy"/>
  </div>

</template>

<style scoped>
.father {
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border-radius: 10px;
}


</style>