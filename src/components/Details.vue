<script setup lang="ts" name="Details">
  import {useRoute} from "vue-router";
  import {toRefs} from "vue";
  const route = useRoute();
  console.log(route);
  let {query} = toRefs(route);
</script>

<template>
  <li>ID: {{ query.id }}</li>
  <li>Title: {{ query.title }}</li>
  <li>Content: {{ query.content }}</li>
</template>

<style scoped>

</style>