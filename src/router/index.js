import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Wallpapers from '@/components/wallpapers/Wallpapers'
import WallpaperSingle from '@/components/wallpapers/WallpaperSingle'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/wallpapers',
      name: 'wallpaper.index',
      component: Wallpapers
    },
    {
      path: '/wallpaper/:id',
      name: 'wallpaper.single',
      component: WallpaperSingle
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },

    {
      path: '*',
      redirect: '404'
    }

  ]
})
