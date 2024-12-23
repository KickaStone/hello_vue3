<script setup lang="ts" name="Child">
  // import {ref, onMounted} from "vue";
  // child's data

  import {ref} from "vue";

  let toy = ref("Toy car");

  const emit = defineEmits([
      'send-toy' // declare event
  ])

  // onMounted(() => {
  //   console.log('child mounted, waiting...')
  //   setTimeout(()=>{
  //     emit('haha')
  //   }, 3000)
  // })
</script>

<template>
  <div class="child">
    <h3>Child component</h3>
    <h4>Toy: {{toy }}</h4>
    <button @click="emit('send-toy', toy)">Send toy via custom event</button>
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