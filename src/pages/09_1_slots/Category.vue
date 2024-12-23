<script setup lang="ts" name="Category">
</script>

<template>
  <div class="category">
    <slot name="s1">DefaultValue1</slot>
    <slot name="s2">DefaultValue2</slot>
  </div>

</template>

<style scoped>

.category {
  background-color: skyblue;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px black;
  margin-top: 10px;
  width: 200px;
  height: 300px;
}

</style>