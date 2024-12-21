<script setup lang="ts" name="Details">
  defineProps(['id', 'title', 'content'])
</script>


<template>
  <li>ID: {{ id }}</li>
  <li>Title: {{ title }}</li>
  <li>Content: {{ content }}</li>
</template>

<style scoped>

</style>