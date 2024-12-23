<script setup lang="ts" name="Father">
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";

</script>

<template>
  <div class="father">
    <h3>Father component</h3>

    <Child1 />
    <Child2 />
  </div>

</template>

<style scoped>
.father {
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border-radius: 10px;
}

</style>