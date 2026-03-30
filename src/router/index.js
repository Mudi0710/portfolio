// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import ProjectDetail from '@/views/ProjectDetail.vue'
import Leadership from '@/views/Leadership.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import About from '@/views/About.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/projects/:id',
      name: 'project-detail',
      component: ProjectDetail,
    },
    {
      path: '/leadership',
      name: 'leadership',
      component: Leadership,
    },
    {
      path: '/leadership/:id',
      name: 'article-detail',
      component: ArticleDetail,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

export default router
