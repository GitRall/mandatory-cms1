<template lang="html">
  <div class="blog-post">
    <div class="title-wrapper">
      <h4 class="title">{{ blogPost.title }}</h4>
      <span class="author">{{ blogPost.author[0].display }}</span>
      <span class="published">{{ blogPost.published_on}}</span>
    </div>
    <div class="content-wrapper">
      <vue-simple-markdown class="markdown-content" :source="shortenedBlogBody"></vue-simple-markdown>
      <!-- {{ shortenedBlogBody }} -->
    </div>
  </div>
</template>

<script>

export default {
  props: {
    blogPost: Object
  },
  computed: {
    shortenedBlogBody(){
      if(this.blogPost.body.length > 100){
        return this.blogPost.body.substring(0, 100) + '...';
      }
      else{
        return this.blogPost.body.substring(0, 100);
      }
    }
  }
}
</script>

<style lang="css" scoped>
.blog-post{
  width: 50%;
  /* min-height: 200px; */
  margin: 30px 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border-radius: 10px;
  background: #fff;
  padding: 40px 30px;
  box-sizing: border-box;
}
.title-wrapper{
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #91c4ff;
}
.title{
  font-size: 2.4rem;
  margin: 0 10px 0 0;
  color: #1fb4ff;
}
.author{
  font-size: 1.4rem;
  border-left: 2px solid #91c4ff;
  padding: 0 10px 0 10px;
  color: #888;
}
.published{
  border-left: 2px solid #91c4ff;
  font-size: 1.4rem;
  padding: 0 0 0 10px;
  color: #888
}
.content-wrapper{
  padding: 30px 0 0 0;
  color: #999;
}
.markdown-content{
  font-size: 1.6rem;
}
</style>

<style>
.markdown-content *{
  font-size: 1.6rem;
}
.markdown-content img{
  max-width: 100%;
  /* max-height: 100px; */
}
</style>
