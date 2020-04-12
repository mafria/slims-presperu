import Vue from 'vue'
import Router from 'vue-router'
import Mainsect from '../sections/Mainsect.js'
import Presensisect from '../sections/Presensisect.js'
import Reconfigsect from '../sections/Reconfigsect.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mainsect',
      component: Mainsect
    },
    {
      path: '/presensi',
      name: 'Presensisect',
      component: Presensisect
    },
    {
      path: '/reconfig',
      name: 'Reconfigsect',
      component: Reconfigsect
    }
  ]
})
