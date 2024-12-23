<script setup lang="ts" name="Father">
/*
* The data is on the child's side,
* but the structure generated based on the data is decided by the father.
* */
import Game from "./Game.vue";
</script>


<template>
  <div class="father">
    <h3>Father component</h3>
    <div class="content">
      <Game>
        <template v-slot="params">
          <!--       <span>{{a}}</span>-->
          <ul>
            <li v-for="g in params.gameList" :key="g.id">{{ g.name }}</li>
          </ul>
        </template>
      </Game>
      <Game>
        <template v-slot="params">
          <!--       <span>{{a}}</span>-->
          <ol>
            <li v-for="g in params.gameList" :key="g.id">{{ g.name }}</li>
          </ol>
        </template>
      </Game>
      <Game>
        <template v-slot="{gameList}">
          <!--       <span>{{a}}</span>-->
          <ol>
            <li v-for="g in gameList" :key="g.id">{{ g.name }}</li>
          </ol>
        </template>
      </Game>
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
</style>