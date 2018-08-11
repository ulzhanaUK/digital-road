import Vue from 'vue'
import Router from 'vue-router'
const Map = resolve => require(['@/components/Map.vue'], resolve)
const Project = resolve => require(['@/components/Project.vue'], resolve)
const Contact = resolve => require(['@/components/Contact.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: Map
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
