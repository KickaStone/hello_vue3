<script setup lang="ts" name="MyInput">
defineProps(['pwd', 'name'])
const emit = defineEmits(['update:pwd', 'update:name'])
</script>

<template>
  <input type="text" :value="name" @input="emit('update:name', (<HTMLInputElement>$event.target).value)"/><br>
  <input type="text" :value="pwd" @input="emit('update:pwd', (<HTMLInputElement>$event.target).value)"/>
</template>

<style scoped>
  input{
    border: 2px solid black;
    background-image: linear-gradient(90deg, black, white);
    height: 30px;
    font-size: 20px;
    color: white;
  }
</style>