<script setup lang="ts">
  import {ref, computed} from "vue";

  let firstName = ref("Alice")
  let lastName = ref("E")

  //vue2 computed attributes
  // export default {
  //   computed:{
  //
  //   }
  // }

  // In Vue 3, a computed attribute (also known as a computed property) is a feature that allows you to define a property on your Vue component that automatically calculates its value based on other data properties
  // feature1: cached
  // feature2: dynamic
  // feature3: function
  // let fullName = computed(()=>{  // read only
  //   return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + ' ' + lastName.value
  // })
  let fullName = computed({ // read and write
    get(){
        return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + ' ' + lastName.value
    },
    set(val){
      console.log('set', val)
      // add logic to change firstname and lastname
      firstName.value = val.split(' ')[0]
      lastName.value = val.split(' ')[1]
    }
  })

  function changeFullName(){
    fullName.value = "A B"
    console.log(fullName)
  }

</script>

<template>
  <div class="person">
    First Name <input type="text" v-model="firstName"/> <br>
    Last Name <input type="text" v-model="lastName"/> <br>
    Full Name <span>{{ fullName }}</span> <br>
    <button @click="changeFullName">Change Full Name</button>
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