<script setup lang="ts">
  import {reactive} from "vue";

  const newsList = reactive([
    {id: 'news1', title: "Breaking: Major Event Unfolds", content: "In a surprising turn of events, details are emerging about a significant incident that has caught the public's attention."},
    {id: 'news1', title: "BLocal Hero Saves the Day", content: "A local resident has been praised for their bravery after intervening in a crisis situation."},
    {id: 'news1', title: "New Discoveries in Science", content: "Researchers have made groundbreaking discoveries that could change our understanding of the universe."},
    {id: 'news1', title: "Sports Team Wins Championship", content: "In an exciting finale, the local sports team clinched the championship title against all odds."},
  ]);

</script>

<template>
  <div class="news">
<!--    display news titles -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <RouterLink to="/news/details"> {{news.title}}</RouterLink>
      </li>
    </ul>
<!--    display news content -->
    <RouterView></RouterView>
  </div>
</template>

<style scoped>

</style>