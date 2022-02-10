<template>
  <div id="app">
    <SidebarMenu />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import '@/assets/min-css/layout.min.css';

export default {
  components: {
    SidebarMenu: () => import('@/views/layout/SidebarMenu.vue'),
  },
};
</script>
