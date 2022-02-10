<template>
  <section class="sidebar-menu">
    <div class="content">
      <div class="pages">
        <router-link :to="logoLink">
          <img
            class="logo"
            src="@/assets/flow.png"
            width="100%"
            height="auto"
            alt="logo"
          />
        </router-link>
        <router-link
          :to="link.link"
          v-for="(link, i) in links"
          :key="`sidebar-menu-link-${i}`"
          class="link"
          v-tooltip.right="link.tooltip"
        >
          <mdicon :name="link.icon" />
        </router-link>
      </div>
      <div class="pop-ups"></div>
    </div>
    <NavigationMenu v-if="navigationMenuRouteNames.includes($route.name)" />
  </section>
</template>
<script>
export default {
  components: {
    NavigationMenu: () =>
      import('@/components/layout/navigation-menu/NavigationMenu.vue'),
  },
  data() {
    return {
      logoLink: { name: 'Inbox' },
      baseUrl: `${window.location.origin}/`,
      navigationMenuRouteNames: ['Workspaces', 'Board'],
      links: [
        {
          link: { name: 'Workspaces' },
          icon: 'view-dashboard',
          tooltip: 'Workspaces',
        },
      ],
    };
  },
};
</script>
