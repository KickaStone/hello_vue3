<script setup lang="ts" name="Child2">
  import {ref} from "vue";

  let book = ref("Math")
  let pencil = ref("Pencil")
  let allowance = ref(0);

  defineExpose({book, pencil, allowance})
</script>

<template>
  <div class="child">
    <h3>Child2 component</h3>
    <h4>book: {{book}}</h4>
    <h4>pencil: {{pencil}}</h4>
    <h4>allowance: ${{ allowance }} </h4>

  </div>
</template>

<style scoped>
.child {
  background-color: greenyellow;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px black;
  margin-top: 10px;
}
</style>