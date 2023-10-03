import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import { AuthUser } from '../State/Auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('../views/home.vue'),
      meta: {auth:true}
    },
    {
      path: '/new-attendence',
      name: 'new-attendence',

      component: () => import('../views/new-attendence.vue'),
      meta: {auth:true}
    },
    {
      path: '/view-attendence',
      name: 'view-attendence',
      
      component: () => import('../views/view-attendence.vue'),
      meta: {auth:true}
    },
    {
      path: '/view-attendence-sing',
      name: 'view-attendence-sing',
      
      component: () => import('../views/view-attendence-sing.vue'),
      meta: {auth:true}
    },
    {
      path: '/test',
      name: 'test',
      
      component: () => import('../views/testing.vue')
    },
    {
      path: '/login',
      name: 'login',
      
      component: () => import('../views/login.vue'),
      meta: {auth:false}
    },
    {
      path: '/needs-attention',
      name: 'needs-attention',
      
      component: () => import('../views/needs-attention.vue'),
      meta: {auth:true}
    },
  ]
})

router.beforeEach((to,from,next) => {
  const UserAuthRouter = AuthUser()
  console.log(UserAuthRouter.getUserAuth)
  if(to.meta.auth && !UserAuthRouter.getUserAuth) {
    next('/login')
  } else if (!to.meta.auth && UserAuthRouter.getUserAuth) {
    next('/')
  }
  else {
    next()
  }
 
} )
export default router
