<script lang="ts" setup name="App">
  import Person from "./components/Person.vue";
  import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue";
  let isShow = ref(true);

  console.log("App created")

  onBeforeMount(()=>{
    console.log("App beforeMount")
  });

  onMounted(()=>{
    console.log("App mounted")
  })

  onBeforeUpdate(function () {
    console.log("App beforeUpdate")
  })

  onUpdated(()=>{
    console.log("App updated")
  })

  onBeforeUnmount(()=>{
    console.log("App beforeUmounted")
  })

  onUnmounted(()=>{
    console.log("App unmounted")
  })
</script>
<template>
  <Person v-if="isShow"/>
</template>

<style scoped>
</style>