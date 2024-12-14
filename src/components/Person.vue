<script lang="ts" setup name="Person">
  import {ref} from 'vue'
  let name = ref('Bob');  // name is Responsive
  let age = ref(19);      // age is Responsive
  let tel = '1234567890';

  // methods
  function changeName(){ name.value = 'Mike'}
  function changeAge(){ age.value = age.value + 1 }
  function showTel(){ alert(tel) }
</script>

<template>
  <div class="person">
    <h2>name:{{name}}</h2>
<!--  not name.value  -->
    <h2>age:{{age}}</h2>
    <button @click="changeName">Change Name</button>
    <button @click="changeAge">Change Age</button>
    <button @click="showTel">Show telephone</button>
  </div>
</template>

<style scoped>
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