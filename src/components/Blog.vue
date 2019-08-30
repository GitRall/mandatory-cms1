<template lang="html">
  <div class="blog">
    <div class="blog-container" v-if="Object.keys(blog).length">
      <div class="title-wrapper">
        <h3 class="title">{{ blog.title }}</h3>
        <span class="details">Posted on {{ blog.published_on }} by <router-link tag="span" class="author-detail" :to="{ name: 'author', params: { id: blog.author[0]._id } }">{{ blog.author[0].display }}</router-link></span>
      </div>
      <div class="content-wrapper">
        <vue-simple-markdown class="blog-content" :source="blog.body"></vue-simple-markdown>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      blog: {}
    }
  },
  created() {
    const cockpitToken = '2c8e037afef7c0fd1e68d119cfeb7d';
    axios.post(`http://localhost:8080/api/collections/get/articles?token=${cockpitToken}&filter[_id]=${this.$route.params.id}`)
      .then((res) => {
        this.blog = res.data.entries[0];
      })
    }
  }
</script>

<style lang="css" scoped>
.blog{
  display: flex;
  justify-content: center;
  padding: 120px 0 50px 0;
}
.blog-container{
  width: 60%;
}
.title-wrapper{
  border-bottom: 1px solid #91c4ff;
  padding-bottom: 10px;
}
.title{
  font-size: 4.6rem;
  color: #1fb4ff;
  margin: 0 0 10px 0;
}
.details{
  font-size: 1.6rem;
  color: #999;
}
.author-detail{
  font-size: 1.6rem;
  cursor: pointer;
}
.author-detail:hover{
  text-decoration: underline;
  color: #777;
}
.content-wrapper{
  padding: 30px 0;
}
.blog-content{
  font-size: 2rem;
  color: #666;
  word-spacing: 5px;
  letter-spacing: 1px;
  line-height: 30px;
}
</style>
<style media="screen">
.blog-content * {
  font-size: 2rem;
}
.blog-content img{
  max-width: 100%;
}
</style>
