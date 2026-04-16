import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import BlogPosts from "@/views/BlogPosts.vue";
import About from "@/views/About.vue";
import BlogPost from "@/views/BlogPost.vue";
import BlogPostsGreeting from "@/views/BlogPostsGreeting.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    {
      path: "/blogPosts",
      name: "blogPosts",
      component: BlogPosts,
      redirect: { name: "blogPostsGreeting" },
      children: [
        { path: "", name: "blogPostsGreeting", component: BlogPostsGreeting },
        { path: "/blogPosts/:id(\\d+)", name: "blogPost", component: BlogPost },
      ],
    },
    { path: "/about", name: "about", component: About },
    { path: '/:pathMatch(.*)*', name: "notFound", component: NotFound },
  ],
});

export default router;
