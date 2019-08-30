<template lang="html">
  <div class="author-wrapper">
    <img :src="`http://localhost:8080/${author.avatar.path}`" alt="">
    <div class="text-wrapper">
      <router-link class="author-name" tag="h4" :to="{ name: 'author', params: { id: author._id } }">{{ author.name }}</router-link>
      <p class="author-description">{{ shortenedAuthorDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: Object
  },
  computed: {
    shortenedAuthorDescription(){
      return this.author.description.length > 100 ? this.author.description.substring(0, 100) + '...' : this.author.description.substring(0, 100);
    }
  }
}
</script>

<style lang="css" scoped>
.author-wrapper{
  display: flex;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border-radius: 10px;
  margin: 30px 0;
  padding: 15px;
}
img{
  max-width: 150px;
}
.text-wrapper{
  padding: 10px 0 0 30px;
}
.author-name{
  font-size: 2.4rem;
  margin: 0;
  color: #1fb4ff;
  cursor: pointer;
}
.author-description{
  margin-top: 30px;
  font-size: 1.6rem;
  color: #333;
}
</style>
