import Authors from './components/Authors.vue';
import Home from './components/Home.vue';
import Blog from './components/Blog.vue';

export const routes = [
  { path: '', component: Home, name: 'home' },
  { path: '/blog', component: Blog, name: 'blog' },
  { path: '/authors', component: Authors, name: 'authors' }
]
