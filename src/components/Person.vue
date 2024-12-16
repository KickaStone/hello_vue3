<template>
  <div class="person">
    <h2>Temperature: {{temp}}</h2>
    <h2>Height: {{height}}</h2>
    <button @click="changeTemp">changeTemp</button>
    <button @click="changeHeight">changeHeight</button>
  </div>
</template>

<script lang="ts" setup>
  import {ref, watch, watchEffect} from "vue";

  let temp = ref(0);
  let height = ref(0);

  function changeTemp() {
    temp.value  += 10;
  }

  function changeHeight() {
    height.value += 10;
  }

  // watch([temp, height], (value)=>{
  //   // get latest temperature and height
  //   let [newTemp, newHeight] = value;
  //   console.log(newTemp, newHeight);
  //   if(newTemp >= 60 || newHeight >= 80){
  //     console.log('Send a request to server....');
  //   }
  // })
  watchEffect(() => {
    if(temp.value > 60 || height.value > 80){
      console.log('Send a request to server....')
    }
  })
</script>

<style lang="css">
.person{
  background-color: lightblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button{
  margin: 0 5px
}
</style>