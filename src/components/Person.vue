<template>
  <div class="person">
    <h2 ref="title">title1</h2>
    <button @click="showLog">showTitle1ByRef</button>
  </div>
</template>

<script lang="ts" setup>
  import {ref} from "vue";

  let a = ref(0);
  let b = ref(1);
  let c = ref(2);

  let title = ref()
  let person = ref()
  function showLog(){
    console.log(title.value);
  }

  defineExpose({a, b});
</script>

<style lang="css" scoped>
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