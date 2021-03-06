import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
};
const router= new Router({
  routes: [
    {
      path:'/login',
      name:'login',
      component:()=>import('@/views/login')
    },
    {
      path:'/invite',
      name:'invite',
      component:()=>import('@/views/invite')
    },
    {
      path:'/',
      name:'layout',
      component:()=>import('@/views/layout'),
      redirect:'/home',
      children:[
        {
          path:'home',
          name:'home',
          component:()=>import('@/views/home')
        },
        {
          path:'personSet',
          name:'personSet',
          component:()=>import('@/views/personSet')
        },
        {
          path:'projectDetail/:projectId',
          name:'projectDetail',
          component:()=>import('@/views/sublayout'),
          redirect:'/projectDetail/:projectId/building',
          children:[
            {
              path:'building',
              name:'building',
              component:()=>import('@/views/building')

            },
            {
              path:'BOM',
              name:'BOM',
              component:()=>import('@/views/BOM')
            },
            {
              path:'file',
              name:'file',
              component:()=>import('@/views/file')
            },{
              path:'issue',
              name:'issue',
              component:()=>import('@/views/issue')
            },
            {
              path:'member',
              name:'member',
              component:()=>import('@/views/member')
            },
            {
              path:'statics',
              name:'statics',
              component:()=>import('@/views/statics')
            },
          ]
        },
      ]
    },
    {
      path:'/inviteInProject',
      name:'inviteInProject',
      component:()=>import('@/views/invite')

    },
    {
      path:'*',
      component:()=>import('@/views/404')
    }
  ]
});
import  store from '../store'
router.beforeEach((to,from,next)=>{
     if(!store.state.isLogin&&to.path!=='/login'){
           next('/login')
     }else{
        next();
     }
});
export default router;

