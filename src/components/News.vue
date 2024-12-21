<script setup lang="ts">
  import {reactive} from "vue";
  import {useRouter} from "vue-router";

  const newsList = reactive([
    {id: 'news1', title: "Breaking: Major Event Unfolds", content: "In a surprising turn of events, details are emerging about a significant incident that has caught the public's attention."},
    {id: 'news2', title: "BLocal Hero Saves the Day", content: "A local resident has been praised for their bravery after intervening in a crisis situation."},
    {id: 'news3', title: "New Discoveries in Science", content: "Researchers have made groundbreaking discoveries that could change our understanding of the universe."},
    {id: 'news4', title: "Sports Team Wins Championship", content: "In an exciting finale, the local sports team clinched the championship title against all odds."},
  ]);

  const router = useRouter();

  interface NewsInter{
    id: string;
    title: string,
    content: string;
  }

  function showNewsDetails(news: NewsInter){
    router.push({
      name: 'Details',  // cannot use 'path'
      params: {
        id: news.id,
        title: news.title,
        content: news.content
      }
    })
  }

</script>

<template>
  <div class="news">
<!--    display news titles -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <button @click="showNewsDetails(news)">Check News</button>
        <RouterLink :to="{
          name: 'Details',  // cannot use 'path'
          params: {
            id: news.id,
            title: news.title,
            content: news.content,
          }
        }">
          {{ news.title }}
        </RouterLink>
      </li>
    </ul>
<!--    display news content -->
    <RouterView></RouterView>
  </div>
</template>

<style scoped>

</style>