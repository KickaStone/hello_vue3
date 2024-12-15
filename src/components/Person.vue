<script lang="ts" setup name="Person">
import {reactive, toRef, toRefs} from 'vue'
  // data
  let person = reactive({name: 'Mike', age: 18, tel: "1234353"})

  // let {name, age} = person;
  let {name, age} = toRefs(person)  // use `toRefs`. Responsive object to responsive variables
  let nl = toRef(person, 'age')

  // methods
  // function changeName(){ person.name = 'Bob'}
  // function changeAge(){ person.age += 1}
  function showTel(){ alert(person.tel) }

  function c1(){
    // name += '~'   // only change the `name` local variable, not responsive
    name.value += '~'
    console.log(name)
  }
  function c2(){
    age.value += 1
    nl.value += 1
    console.log(age,nl)
  }
</script>

<template>
  <div class="person">
    <h2>name:{{person.name }}</h2>
    <h2>age:{{person.age}}</h2>
    <button @click="c1">Change Name</button>
    <button @click="c2">Change Age</button>
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