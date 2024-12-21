<script setup lang="ts">
  import {onMounted} from "vue";
  import {useRouter} from "vue-router";

  const router = useRouter();
  onMounted(() => {
    setTimeout(() => {
      router.push("/news"); // push, path
    },3000)})
</script>

<template>
<h2>Home</h2>
</template>

<style scoped>

</style>