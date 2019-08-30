<template lang="html">
  <div id="home-container">
    <app-blog-post v-for="blogPost in getBlogPosts" :blogPost="blogPost" :key="blogPost._id"></app-blog-post>
    <span class="bottom-line" ref="scrolltarget"></span>
    <div class="fab-scroll-top" @click="scrollTop"><i class="material-icons fab-scroll-top__icon">keyboard_arrow_up</i></div>
  </div>
</template>

<script>
import axios from 'axios';
import BlogPost from './BlogPost.vue';

export default {
  data(){
    return {
      observer: null,
    }
  },
  methods: {
    scrollTop(){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    scrollTrigger(){
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting){
            const cockpitToken = '2c8e037afef7c0fd1e68d119cfeb7d';
            axios.post(`http://localhost:8080/api/collections/get/articles?token=${cockpitToken}`, {
              limit: 10,
              skip: this.$store.getters.getSkipAmount,
              sort: { _created: -1 }
            })
            .then((res) => {
              this.$store.dispatch('setBlogPosts', res.data.entries);
              this.$store.dispatch('incrementSkipAmount');
            })
          }
        })
      })
      observer.observe(this.$refs.scrolltarget)
    }
  },
  components: {
    appBlogPost: BlogPost
  },
  computed: {
    getBlogPosts(){
      return this.$store.getters.doneBlogPosts;
    }
  },
  mounted(){
    this.scrollTrigger();
  }
}
</script>

<style lang="css" scoped>
#home-container{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 30px 0;
}
.fab-scroll-top{
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 24px;
  bottom: 24px;
  height: 70px;
  width: 70px;
  background: #1fb4ff;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  cursor: pointer;
}
.fab-scroll-top:hover{
  opacity: 0.9;
}
.fab-scroll-top__icon{
  font-size: 4rem;
  color: #fff;
  user-select: none;
}
.bottom-line{
  width: 60%;
  height: 5px;
  background: #91c4ff;
  border-radius: 50px;
  margin: 30px 0;
}
</style>
