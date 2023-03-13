import { createRouter, createWebHistory } from 'vue-router'

// make all paths and names lowercase for consistency
const routes = [
  {
    path: '/',
    props: true,
    component: () => import('../components/homePage.vue')
  },
  {
    path: '/intakeform',
    name: 'intakeform',
    props: true,
    //navigation gaurds are put in place in every path to ensure unauthorized users
    // don't gain access to certain pages depending on if they're a viewer or editor
    beforeEnter(to, from, next){
      if (sessionStorage.getItem('editLogin')== true){
        next();
      }
      else{
        next('/login');
      }

    },

    component: () => import('../components/intakeForm.vue')
  },
  {
    path: '/findclient',
    name: 'findclient',
    beforeEnter(to, from, next){
      if (sessionStorage.getItem('editLogin') == true || sessionStorage.getItem('viewLogin') == true){
        next();
      }
      else{
        next('/login');
      
      }

    },

    component: () => import('../components/findClient.vue')
  },
  {
    path: '/updateclient/:id',
    name: 'updateclient',
    props: true,
    beforeEnter(to, from, next){
      if (sessionStorage.getItem('editLogin')== true){
        next();
      }
      else{
        next('/login');
      }

    },
    component: () => import('../components/updateClient.vue')
  },
  {
    path: '/eventform',
    name: 'eventform',
    beforeEnter(to, from, next){
      if (sessionStorage.getItem('editLogin')== true){
        next();
      }
      else{
        next('/login');
      }

    },
    component: () => import('../components/eventForm.vue')
  },
  {
    path: '/findevents',
    name: 'findevents',
    beforeEnter(to, from, next){
      if (sessionStorage.getItem('editLogin') == true || sessionStorage.getItem('viewLogin') == true){
        next();
      }
      else{
        next('/login');
      
      }

    },
    component: () => import('../components/findEvents.vue')
  },
  {
    path: '/eventdetails/:id',
    name: 'eventdetails',
    props: true,
    beforeEnter(to, from, next){
      if (sessionStorage.getItem('editLogin')== true){
        next();
      }
      else{
        next('/login');
      }

    },
    component: () => import('../components/eventDetails.vue')
  },
  {

    path: '/login',
    name: 'login',
    component: () => import('../components/login.vue')
  },
  {
    path: '/serviceIntake',
    name: 'serviceIntake',
    props: true,
    beforeEnter(to, from, next){
      if (sessionStorage.getItem('editLogin')== true){
        next();
      }
      else{
        next('/login');
      }

    },
    component: () => import('../components/serviceIntake.vue')
  },
  {
    path: '/services',
    name: 'services',
    props: true,
    beforeEnter(to, from, next){
      if (sessionStorage.getItem('editLogin')== true){
        next();
      }
      else{
        next('/login');
      }

    },
    component: () => import('../components/services.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
