<script setup lang="ts">
import {useTalkStore} from "../store/talk.ts";

const talkStore = useTalkStore();

</script>

<template>
  <div class="talk">
    <button @click="talkStore.getATalk()">Get a love words</button>
    <ul>
      <li v-for="wd in talkStore.wordList" :key="wd.id"> {{ wd.title }}</li>
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