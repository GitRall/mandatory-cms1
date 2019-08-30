<template lang="html">
  <div id="header" :class="{'header-blue': scrollPosition <= 100, 'header-white': scrollPosition > 100}">
    <router-link class="header-link" :class="{'header-link-white': scrollPosition <= 100, 'header-link-blue': scrollPosition > 100}" tag="h1" :to="{ name: 'home' }">Posts</router-link>
    <router-link class="header-link" :class="{'header-link-white': scrollPosition <= 100, 'header-link-blue': scrollPosition > 100}" tag="h1" :to="{ name: 'authors' }">Authors</router-link>
  </div>
</template>

<script>
export default {
  data(){
    return {
      scrollPosition: null
    }
  },
  methods: {
    updateScroll(){
      this.scrollPosition = window.scrollY;
    }
  },
  created(){
    window.addEventListener('scroll', this.updateScroll);
  },
  destroyed(){
    window.removeEventListener('scroll', this.updateScroll);
  }
}
</script>

<style lang="css" scoped>
#header{
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  z-index: 1;
}
.header-blue{
  background-color: #1fb4ff;
  border-bottom: 5px solid #1e9fe0;
  transition: all 0.2s ease-in-out
}
.header-white{
  background-color: #fff;
  border-bottom: 5px solid #91c4ff;
  transition: all 0.2s ease-in-out;
}
.header-link{
  font-size: 2.4rem;
  margin: 0;
  margin-left: 30px;
  cursor: pointer;
}
.header-link-white{
  color: #fff;
}
.header-link-white:hover{
  opacity: 0.9;
}
.header-link-blue{
  color: #1fb4ff;
}
.header-link-blue:hover{
  opacity: 0.8;
}
</style>
