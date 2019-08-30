import AuthorDetails from './components/AuthorDetails.vue';
import Authors from './components/Authors.vue';
import Home from './components/Home.vue';
import Blog from './components/Blog.vue';

export const routes = [
  { path: '', component: Home, name: 'home' },
  { path: '/blog/:id', component: Blog, name: 'blog' },
  { path: '/authors', component: Authors, name: 'authors' },
  { path: '/author/:id', component: AuthorDetails, name: 'author' }
]
