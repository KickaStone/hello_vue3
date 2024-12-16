<template>
  <div class="person">

  </div>
</template>

<script lang="ts" setup name="Person">
  import {type Person, type Persons} from "../types"
  import {reactive} from "vue";
  // let person: Person = {id: 'safdj', name:'Bob', age:50}

  // let personList: Person[] = [ // ok
  // let personList: Array<Person> = [  // also ok
  // let personList: Persons = reactive([
  //   {id: 'safdj', name:'Bob', age:50},
  //   {id: 'safdjsd', name:'Bob1', age:51},
  //   {id: 'safdjqwe', name:'Bob2', age:52}
  // ]);

  let personList = reactive<Persons>([
    {id: 'safdj', name:'Bob', age:50},
    {id: 'safdjsd', name:'Bob1', age:51},
    {id: 'safdjqwe', name:'Bob2', age:52, gender: 'Male'}, // gender?
  ]);
  console.log(personList);


</script>

<style lang="css" scoped>
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