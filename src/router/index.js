import Vue from 'vue'
import Router from 'vue-router'
import Friends from '@/components/Friends'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends
    },
  ]
})
