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
      meta: {auth:true , AMode:false}
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
    {
      path: '/edit-attendence',
      name: 'edit-attendence',
      
      component: () => import('../views/edit-attendence.vue'),
      meta: {auth:true}
    },
    {
      path: '/view-sheet',
      name: 'view-sheet',
      
      component: () => import('../views/view-sheet.vue'),
      meta: {auth:true}
    },
    {
      path: '/admin',
      name: 'admin',
      
      component: () => import('../views/admin/home.vue'),
      meta: {auth:true , AMode:true}
    },
    {
      path: '/admin/servants-actions',
      name: 'admin/servants-actions',
      
      component: () => import('../views/admin/servants-actions.vue'),
      meta: {auth:true , AMode:true}
    },
    {
      path: '/admin/servants-actions/add',
      name: '/admin/servants-actions',
      
      component: () => import('../views/admin/ser-new-action.vue'),
      meta: {auth:true , AMode:true}
    },
    {
      path: '/admin/servants-actions/view',
      name: '/admin/servants-actions-view',
      
      component: () => import('../views/admin/view-action.vue'),
      meta: {auth:true , AMode:true}
    },
    {
      path: '/admin/servants-actions/view-sing',
      name: '/admin/servants-actions-view-sing',
      
      component: () => import('../views/admin/view-action-sing.vue'),
      meta: {auth:true , AMode:true}
    },
    {
      path: '/admin/classes/attendence-dates',
      name: '/admin/classes-attendence-dates',
      
      component: () => import('../views/admin/view-events-classes.vue'),
      meta: {auth:true , AMode:true}
    },
    {
      path: '/admin/classes/attendence-classes-sing-date',
      name: '/admin/attendence-classes-sing-date',
      
      component: () => import('../views/admin/view-all-classes.vue'),
      meta: {auth:true , AMode:true}
    },
    {
      path: '/admin/classes/attendence-sing-class-date',
      name: '/admin/attendence-sing-class-date',
      
      component: () => import('../views/admin/view-class-date-sing.vue'),
      meta: {auth:true , AMode:true}
    },
  ]
})

router.beforeEach((to,from,next) => {
  const UserAuthRouter = AuthUser()
  console.log("user mode" , UserAuthRouter.getAMode , "meta admin" , to.meta.AMode || false)
  console.log(UserAuthRouter.getUserAuth)
  if(to.meta.auth && !UserAuthRouter.getUserAuth) {
    next('/login')
  } else if (!to.meta.auth && UserAuthRouter.getUserAuth) {
    next('/')
  }
  else {
    if((to.meta.AMode || false) != (UserAuthRouter.getAMode || false) && UserAuthRouter.getUserAuth) {
      if(UserAuthRouter.getAMode) {
        next('/admin')
      }else {
        next('/')
      }
    }else {
      next()
    }
  }
 
} )
export default router
