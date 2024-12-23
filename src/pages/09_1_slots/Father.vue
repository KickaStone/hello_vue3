<script setup lang="ts" name="Father">
import Category from "./Category.vue"
import {reactive, ref} from "vue";

let games = reactive([
  {id: '01', name: 'LOL'},
  {id: '02', name: 'DNF'},
  {id: '03', name: 'Red Alter'},
]);

let imgUrl = ref('https://www.mytvsuper.com/tc/scoopplus/thumbor/s-piH5dmdqwurMMd0rn41thWSjQ=/960x540/filters:quality(70):water(10)/public/article/images/202410/86d371fb-30ea-4e51-841f-a2b68565062f.png');
let videoUrl = ref('https://www.bilibili.com/bangumi/play/ep1115676');
</script>

<template>
  <div class="father">
    <h3>Father component</h3>
    <div class="content">
      <Category>
        <template v-slot:s2>
          <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
          </ul>
        </template>
        <template v-slot:s1>
          <h2>Hot game</h2>
        </template>
      </Category>
      <Category title="Food City">
        <template v-slot:s1>
          <h2>Food City</h2>
        </template>
        <template v-slot:s2>
        <img :src="imgUrl">
        </template>
      </Category>
      <Category>
        <template #s1>
          <h2>Today Video</h2>
        </template>
        <template v-slot:s2>
        <a :href="videoUrl">Bilibili</a>

        </template>
      </Category>
    </div>
  </div>

</template>

<style scoped>
.father {
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border-radius: 10px;
}

.content {
  display: flex;
  justify-content: space-evenly;
}

h2 {
  background-color: orange;
  font-size: 20px;
  text-align: center;
}


img {
  width: 100%;
}


</style>