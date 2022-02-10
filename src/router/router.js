import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Inbox',
    component: () => import('@/views/pages/inbox/Inbox.vue'),
  },
  {
    path: '/workspaces',
    name: 'Workspaces',
    component: () => import('@/views/pages/workspaces/Workspaces.vue'),
  },
  {
    path: '/dashboard/:dashboardId',
    name: 'Dashboard',
    component: () => import('@/views/pages/dashboard/Dashboard.vue'),
  },
  {
    path: '/board/:boardId',
    name: 'Board',
    component: () => import('@/views/pages/board/Board.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
