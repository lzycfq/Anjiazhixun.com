import Vue from 'vue'
import Router from 'vue-router'
import show from '@/components/show'
import MOGUJIE from '@/components/MOGUJIE'
import SHOP from '@/components/SHOP'
Vue.use(Router)

export default new Router({
	 routes: [
    {
      path: '/',
      name: 'SHOP',
      component: SHOP

    }
  ],
  
})
