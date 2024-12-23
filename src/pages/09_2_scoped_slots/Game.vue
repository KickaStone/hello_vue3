<script setup lang="ts" name="Game">
  import {reactive} from "vue";

  let games = reactive([
    {id: '01', name: 'LOL'},
    {id: '02', name: 'DNF'},
    {id: '03', name: 'Red Alter'},
  ]);

</script>

<template>
<div class="game">

  <h2>Hot Games</h2>
  <slot :gameList="games" x="1" y="2"></slot>
</div>
</template>

<style scoped>
.game {
  width: 200px;
  height: 300px;
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

h2 {
  margin-top: 10px;
  background-color: orange;
  font-size: 20px;
  text-align: center;
}

</style>