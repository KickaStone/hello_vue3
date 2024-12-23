<script setup lang="ts" name="Child">
import GrandChild from './GrandChild.vue';
// defineProps(['a'])
// b,c,d are in attrs

</script>

<template>
  <div class="child">
    <h3>Child component</h3>
<!--    <h4>Receive father's a = {{a}}</h4>-->
<!--    <h4>Others: {{ $attrs}}</h4>-->

<!--    pass to grand child-->
    <GrandChild v-bind="$attrs"/>
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