<template lang="html">
  <div class="author-container">
    <div class="author-wrapper" v-if="Object.keys(author).length">
      <div class="left-wrapper">
        <img class="avatar-img" :src="`http://localhost:8080/${author.avatar.path}`" alt="avatar">
        <h3 class="author-name">{{ author.name }}</h3>
      </div>
      <div class="right-wrapper">
        <div class="author-content">
          {{ author.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      author: {}
    }
  },
  created(){
    const cockpitToken = '2c8e037afef7c0fd1e68d119cfeb7d';
    axios.post(`http://localhost:8080/api/collections/get/authors?token=${cockpitToken}&filter[_id]=${this.$route.params.id}`)
      .then((res) => {
        this.author = res.data.entries[0];
      })
    }
}
</script>

<style lang="css" scoped>
.author-container{
  display: flex;
  justify-content: center;
  padding: 120px 0 30px 0;
}
.author-wrapper{
  display: flex;
  width: 60%;
}
.left-wrapper{
  width: 250px;
}
.avatar-img{
  width: 200px;
}
.author-name{
  margin: 10px 0 0 0;
  font-size: 2.4rem;
  color: #1fb4ff;
}
.right-wrapper{
  width: 80%;
  border-left: 2px solid #91c4ff;
}
.author-content{
  padding: 15px;
  font-size: 2rem;
  color: #333;
  word-spacing: 5px;
  letter-spacing: 1px;
  line-height: 30px;
}
</style>
