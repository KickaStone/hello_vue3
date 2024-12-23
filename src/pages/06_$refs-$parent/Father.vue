<script setup lang="ts" name="mitt">
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
import {ref} from "vue";

let house = ref('Apartment');
let c1 = ref();

/*let obj = reactive({
  a:1,
  b:2,
  c:ref(3)
})


console.log(obj.a);
console.log(obj.b);
console.log(obj.c); // Automatic unpacking c (c in reactive object)

function changeToy(){
  console.log(c1.value);
  c1.value.toy = 'sports car';
}*/

// get all children's ref
function giveAllowance(refs: {[key: string]:any}){
  console.log(refs)
  for (let key in refs){
    console.log("key:", key);
    console.log(refs[key]);
    refs[key].allowance += 10;
  }
}

defineExpose({house})
</script>

<template>
  <div class="father">
    <h3>Father component</h3>
    <h4>House: {{house}}</h4>
    <button class="btn btn-primary" @click="changeToy">Modify c1's toy</button>
    <br>
    <button class="btn btn-primary" @click="giveAllowance($refs)">giveAllowance</button>
    <Child1 ref="c1"/>
    <Child2 ref="c2"/>

  </div>

</template>

<style scoped>
.father {
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border-radius: 10px;
}
button{
  margin-top: 5px;
  width: 300px;
}
</style>