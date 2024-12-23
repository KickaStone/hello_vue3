<script setup lang="ts" name="Father">
import {ref} from "vue";
import MyInput from "./MyInput.vue";

let username = ref('Bob');
let password = ref('123');
</script>

<template>
  <div class="father">
    <h3>Father component</h3>
    <h4>Username: {{ username }}</h4>
    <h4>Password: {{ password }}</h4>
<!-- 1. v-model used on html tag -->
<!--    <input type="text" v-model="username" />-->
<!-- v-model equals the following code   -->
<!--    <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value" />-->
<!--2. v-model used on components-->
<!--    <MyInput v-model="username"></MyInput>-->
<!-- equals to this code -->
<!--    <MyInput-->
<!--        :modelValue="username"-->
<!--        @update:modelValue="username = $event"-->
<!--    />-->

<!--    change "modelValue"-->
<!--    multiple v-model -->
    <MyInput v-model:name="username" v-model:pwd="password" />
  </div>


</template>

<style scoped>
.father {
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border-radius: 10px;
}


</style>