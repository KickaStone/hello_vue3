<template>
  <div class="container-fluid wrapper" >
    <h1 class="title align-content-center">Vue: communication between components</h1>
    <div class="row">
      <div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
        <router-link active-class="active" class="list-group-item" to="/props">1.Props</router-link>
        <router-link active-class="active" class="list-group-item" to="/events">2.Custom Events</router-link>
        <router-link active-class="active" class="list-group-item" to="/mitt">3.mitt</router-link>
        <router-link active-class="active" class="list-group-item" to="/vmodel">4.v-model</router-link>
        <router-link active-class="active" class="list-group-item" to="/attrs">5.$attrs</router-link>
        <router-link active-class="active" class="list-group-item" to="/refs">6.$refs and $parent</router-link>
        <router-link active-class="active" class="list-group-item" to="/provide-inject">7.provide-inject</router-link>
        <router-link active-class="active" class="list-group-item" to="/pinia">8.pinia</router-link>
        <router-link active-class="active" class="list-group-item" to="/slot">9.slot</router-link>
        <router-link active-class="active" class="list-group-item" to="/scoped_slots">9.scoped_slots</router-link>
      </div>
      <div class="col-xl-9 col-md-9 col-lg-9 col-xl-9">
        <div class="panel-body">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>