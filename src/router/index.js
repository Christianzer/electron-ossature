import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from "@/layouts/Menu";
import login from "@/views/login";
Vue.use(VueRouter)

function guardMyroute (to, from, next) {
  var isAuthenticated = false
  isAuthenticated = !!localStorage.getItem('LoggedUser');
  if (isAuthenticated) {
    next() // allow to enter route
  } else {
    next('/login') // go to '/login';
  }
}

const routes = [
  {
    path: '*',
    redirect: 'dashboard'
  },
  {
    path: '/login',
    name: 'Login',
    component: login
  },
  {
    path: '/',
    redirect: 'dashboard',
    component: Menu,
    //beforeEnter: guardMyroute,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/components/admin/index.vue')
      },
    
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
