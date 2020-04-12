import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from "../views/Layout"

import Home from '../views/Home'
import Mine from "../views/Mine"
import Search from "../views/Search"
import Topic from "../views/Topic"
import Player from "../views/Player"

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:"active",
  routes: [
    {
      path:"/",
      name:"Layout",
      component:Layout,
      children:[
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path:"mine",
          name:"Mine",
          component:Mine
        },
        {
          path:"search",
          component:Search
        },
        {
          path:"topic",
          component:Topic
        }
      ]
    },
    {
      path:"/player/:songid",
      name:"Player",
      component:Player,
      props:true
    }
  ]
})

export default router
