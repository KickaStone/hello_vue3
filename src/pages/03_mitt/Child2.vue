<script setup lang="ts" name="Child2">
import {onUnmounted, ref} from "vue";
  import emitter from "../../utils/emitter.ts";

  let computer = ref("🖥️iPad")
  let toy = ref("");
  // bind event to emitter
  emitter.on('send-toy', (value: string) => {
    console.log('send-toy', value, "to child2");
    toy.value = value;
  });

  // unbind event, save memory
  onUnmounted(()=>{
    emitter.off('send-toy');
  })
</script>

<template>
  <div class="child">
    <h3>Child2 component</h3>
    <h4>Toy: {{ computer }}</h4>
    <h4 v-show="toy">Get child1's toy: {{ toy }}</h4>
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