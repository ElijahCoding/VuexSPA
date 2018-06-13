import Vue from 'vue'
import Router from 'vue-router'
import { routes as routes } from '../app'

Vue.use(Router)

const router = new Router({
  routes: routes
})

// registering beforeEach

export default router
