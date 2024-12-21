<script setup lang="ts">
  import axios from "axios";
  import {nanoid} from "nanoid";

  import {useTalkStore} from "../store/talk.ts";

  const talkStore = useTalkStore();
  console.log(talkStore.wordList);


  // let wordsList = reactive([
  //   {id: 'w1', title: "saflsafsjdfla"},
  //   {id: 'w2', title: "saflsafsjdflasdafsd"},
  //   {id: 'w3', title: "saflsafsjdfladsfadsfadsf"}
  // ])

  async function getLoveWords(){
    // let res = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
    let {data:{content}} = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
    // console.log(res);
    let obj = {id: nanoid(), title:content};
    console.log(obj);
    talkStore.wordList.unshift(obj);
  }
</script>

<template>
  <div class="talk">
    <button @click="getLoveWords">Get a love words</button>
    <ul>
      <li v-for="wd in talkStore.wordList" :key="wd.id"> {{ wd.title }}</li>
    </ul>
  </div>
</template>

<style scoped>
  .talk{
    background-color: pink;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }

</style>