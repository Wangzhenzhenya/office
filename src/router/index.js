import Vue from 'vue'
import Router from 'vue-router'
import office from '@/components/office'
import login from '@/components/common/login'
import register from '@/components/common/register'
import regi from '@/components/common/regi'
import home from '@/components/page/home'
import tel from '@/components/page/tel'
import error from '@/components/common/error'
import self from '@/components/page/self'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/office',
      name: 'office',
      component: office,
      children:[
        {path:'h1',component:home}
      ]
    },
    {
      path:'*',
      component:error
    },
    {
      path: '/home',
      name:home,
      component: home
    },
    {
      path:'/self',
      name:self,
      component:self
    },
    {
      path:'/',
      name:'login',
      component:login,
      alias:'/login'
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/regi',
      name:'reg',
      component:regi
    },
    {
      path: '/tel',
      name: 'tel',
      component: tel
    }
  ]
})
