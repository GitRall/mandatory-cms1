<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    appHeader: Header
  }
}
</script>

<style>
*{
  font-family: 'Raleway', sans-serif;
  font-size: 62.5%;
}
body{
  margin: 0;
  background: #fefefe;
}
</style>
