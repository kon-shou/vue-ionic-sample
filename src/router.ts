import Vue from 'vue';
import { IonicVueRouter } from '@modus/ionic-vue';
import routes from 'vue-auto-routing';
import { createRouterLayout } from 'vue-router-layout';

Vue.use(IonicVueRouter);

// 悲しみ
// const RouterLayout = createRouterLayout((layout) => {
//   return import('@/layouts/' + layout + '.vue');
// });

export default new IonicVueRouter({
  // @see node_modules/@modus/ionic-vue/src/router.ts
  direction: 1,
  viewCount: 0,
  mode: 'history',
  routes: routes.map((route) => {
    return { ...route, path: '/' + route.path };
  }),
});
