<script setup lang="ts" name="Child">
import GrandChild from './GrandChild.vue';

// No Modification
</script>

<template>
  <div class="child">
    <h3>Child component</h3>
    <GrandChild></GrandChild>
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