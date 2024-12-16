<template>
  <div class="person">
    <ul>
      <li v-for="person in list" :key="person.id">
        Name: {{ person.name }} -- Age: {{ person.age }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {Persons} from "../types";
  // defineProps(['a', 'personList']);
  // let data = defineProps(['a', 'list'])

  // receive + type
  // let data = defineProps<{list: Persons}>();

  // receive + type + optional
  // let data = defineProps<{list?: Persons}>();

  // receive + type + optional + default value
  let data = withDefaults(defineProps<{list?: Persons, a?:string}>(), {
    list:()=>[ // Person[]
      {
        id: 'retakjsldf',
        name: "Person",
        age: 30
      }
    ]
  })

  console.log(data["list"])
  console.log(data["a"])
</script>

<style lang="css" scoped>
.person{
  background-color: lightblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
}
button{
  margin: 0 5px
}
</style>