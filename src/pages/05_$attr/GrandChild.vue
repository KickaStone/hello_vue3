<script setup lang="ts">
  defineProps(['a', 'b', 'c', 'd', 'x', 'y', 'updateA'])
</script>

<template>
  <div class="grand-child">
    <h3>Grand Child component</h3>
    <h4>Receives from grandfather</h4>
    <h4>a = {{a}}</h4>
    <h4>b = {{b}}</h4>
    <h4>c = {{c}}</h4>
    <h4>d = {{d}}</h4>
    <h4>x, y = {{x}}, {{y}}</h4>
    <button @click="updateA(1)">Add 1 to grandfather's "a"</button>
  </div>
</template>

<style scoped>
.grand-child {
  background-color: yellow;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px black;
  margin-top: 10px;
}
</style>