<template lang="html">
  <div class="authors-container">
    <div class="authors-wrapper">
      <app-author v-for="author in authors" :key="author._id" :author="author"></app-author>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Author from './Author.vue';

export default {
  data(){
    return {
      authors: []
    }
  },
  components: {
    appAuthor: Author
  },
  created(){
    const cockpitToken = '2c8e037afef7c0fd1e68d119cfeb7d';
    axios.post(`http://localhost:8080/api/collections/get/authors?token=${cockpitToken}`)
      .then((res) => {
        this.authors = res.data.entries;
      })
  }
}
</script>

<style lang="css" scoped>
.authors-container{
  display: flex;
  justify-content: center;
  padding: 100px 0 30px 0;
}
.authors-wrapper{
  width: 60%;
}
</style>
