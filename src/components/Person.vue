<script lang="ts">
  export default {
    name: 'Person',
    setup(){
      // data
      let name = 'Bob';  // name is not Responsive
      let age = 50;      // age is not Responsive
      let tel = '1234567890';

      // setup function : this = undefined

      // methods
      function changeName(){ name = 'Mike'}
      function changeAge(){ age = age + 1 }
      function showTel(){ alert(tel) }

      return {name, age, tel, changeName, changeAge, showTel};
      // return () => "haha" // return a render function
    }
  }
</script>

<template>
  <div class="person">
    <h2>name:{{name}}</h2>
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