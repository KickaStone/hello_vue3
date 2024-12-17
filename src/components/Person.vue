<template>
  <div class="person">
    <h2>Sum is {{sum}}, 10x sum: {{ bigSum }}</h2>
    <button @click="add">Sum + 1</button>
    <hr>
    <img v-for="(dog, index) in dogList" :src="dog" :key="index" alt="dog pictures"> <br>
    <button @click="getDogs">Get a new dog</button>
  </div>
</template>

<script lang="ts" setup name="Person">

  import useSum from "../hooks/useSum.ts";
  import useDog from "../hooks/useDog.ts";

  const {sum, add, bigSum} = useSum();
  const {dogList, getDogs} = useDog();

// import {ref, reactive} from "vue";
// import axios from 'axios';
//
// // API: https://dog.ceo/api/breed/pembroke/images/random
// // response :
// // {"message":"https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_7292.jpg","status":"success"}
// let dogList = reactive([
//     'https:\\/\\/images.dog.ceo\\/breeds\\/pembroke\\/n02113023_7292.jpg'
// ])
//
// let sum = ref(0);
//
// function add() {
//   sum.value++;
// }
//
// async function getDogs(){
//   try{
//     await axios.get('https://dog.ceo/api/breed/pembroke/images/random').then(res => {
//       console.log(res.data.message);
//       dogList.push(res.data.message);
//     })
//   }catch(err){
//     console.log(err)
//     alert(err)
//   }
// }
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
img{
  height: 100px;
}
</style>