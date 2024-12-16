<template>
  <div class="person">
    <h2>{{person.name}}</h2>
    <h2>{{person.age}}</h2>

  <button @click="changeName">Change Name</button>
  <button @click="changeAge">Change Age</button>
  <button @click="changePerson">Change Person</button>
  </div>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue';

let person = ref({name: 'bob', age:18});

function changeName() {
  person.value.name  = 'Alice';
}

function changeAge() {
  person.value.age += 1;
}

function changePerson() {
  person.value = {name: 'Bob', age: 18};
}

// watch(person, (newValue) => { // only care about person's address
//   console.log(newValue);
// })

let stopWatch = watch(person, (newValue) => { // also care about the
  console.log(newValue);
  if (person.value.age > 20){
    // stop the watcher
    stopWatch()
  }
}, {deep: true, immediate: true});

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