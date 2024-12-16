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
import {reactive, watch} from 'vue';

let person = reactive({name: 'bob', age:18});

function changeName() {
  person.name  = 'Alice';
}

function changeAge() {
  person.age += 1;
}

function changePerson() {
  Object.assign(person, {name:"Mark", age: 18});
}

watch(person, (newValue) => {
  console.log(newValue);
}) // watch reactive object, default { deep: true }, and cannot disable

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