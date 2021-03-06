import Vue from 'vue'
import Router from 'vue-router'
const Map = resolve => require(['@/components/Map.vue'], resolve)
const Google = resolve => require(['@/components/google.vue'], resolve)
const General = resolve => require(['@/components/General.vue'], resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: Map
    },
    {
      path: '/google',
      name: 'Google',
      component: Google
    },
    {
      path: '/general',
      name: 'General',
      component: General
    }
  ]
})
