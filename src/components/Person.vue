<script lang="ts">
  export default {
    name: 'Person',
    data(){
      return {
        name: "Bob",
        age: 35,
        tel: "12345678"
      }
    },
    methods: {
      showTel(){
        alert(this.tel);
      },
      changeName(){
        this.name = "Mike";
      },
      changeAge(){
        this.age = this.age + 1;
      }
    }
  }
</script>

<template>
  <div class="person">
    <h2>name:{{name}}</h2>
    <h2>age:{{age}}</h2>
    <button @click="showTel">Show telephone</button>
    <button @click="changeName">Change Name</button>
    <button @click="changeAge">Change Age</button>
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