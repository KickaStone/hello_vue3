<script setup lang="ts" name="Details">
  import {useRoute} from "vue-router";
  const route = useRoute();
  console.log(route);
</script>


<template>
  <li>ID: {{ route.params.id }}</li>
  <li>Title: {{ route.params.title }}</li>
  <li>Content: {{ route.params.content }}</li>
</template>

<style scoped>

</style>