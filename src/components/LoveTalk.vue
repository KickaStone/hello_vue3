<script setup lang="ts">
import {useTalkStore} from "../store/talk.ts";
import {storeToRefs} from "pinia";

const talkStore = useTalkStore();
let {wordList} = storeToRefs(talkStore);
talkStore.$subscribe((mutation, state)=>{ // like `watch`
  console.log("talk store changed"); // detect changes
  console.log(mutation);
  console.log(state);

  localStorage.setItem("talkList", JSON.stringify(state.wordList));
})

</script>

<template>
  <div class="talk">
    <button @click="talkStore.getATalk()">Get a love words</button>
    <ul>
      <li v-for="wd in wordList" :key="wd.id"> {{ wd.title }}</li>
    </ul>
  </div>
</template>

<style scoped>
.talk {
  background-color: pink;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

</style>