<script setup lang="ts" name="Child1">
import {ref} from "vue";

let toy = ref('car');
let ipad = ref('ipad');
let allowance = ref(0);

function changeParentsHouse(parent: any) {
  console.log('c1 parent: ', parent);
  parent.house = 'No house';
}

defineExpose({toy, ipad, allowance});
</script>

<template>
  <div class="child">
    <h3>Child1 component</h3>
    <h4>toy: {{ toy }}</h4>
    <h4>ipad: {{ ipad }}</h4>
    <h4>allowance: ${{ allowance }}</h4>
    <button class="btn btn-primary" @click="changeParentsHouse($parent)">change house</button>
  </div>
</template>

<style scoped>
.child {
  background-color: pink;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px black;
  margin-top: 10px;
}
</style>