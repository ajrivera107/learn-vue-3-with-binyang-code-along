import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import BlogPosts from "@/views/BlogPosts.vue";
import About from "@/views/About.vue";
import BlogPost from "@/views/BlogPost.vue";
import BlogPostsGreeting from "@/views/BlogPostsGreeting.vue";
import NotFound from "@/views/NotFound.vue";
import Ads from "@/views/Ads.vue";
import Login from "@/views/Login.vue";
import MainLayout from "@/views/MainLayout.vue";
import { isAuthenticated } from "@/apis/auth";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'mainLayout',
      component: MainLayout,
      redirect: { name: 'home' },
      children: [
         { path: "/home", name: "home", component: Home },
    {
      path: "/blogPosts",
      name: "blogPosts",
      component: BlogPosts,
      redirect: { name: "blogPostsGreeting" },
      children: [
        { path: "", name: "blogPostsGreeting", component: BlogPostsGreeting },
        {
          path: "/blogPosts/:id(\\d+)",
          name: "blogPost",
          components: { default: BlogPost, sidebar: Ads },
        },
      ],
    },
      ],
    },
   
    { path:'/about', name: 'about', component: About },
    { path :'login', name: 'login', component: Login },
    { path: '/:pathMatch(.*)*', name:'notFound', component: NotFound },
  ],
});

router.beforeEach((to, from) => {
  console.log(from.name, '->', to.name)
  if(to.name === 'blogPost' && !isAuthenticated.value) {
    return { name: 'login', query: { redirect: to.fullPath }}
  }
})

export default router;
