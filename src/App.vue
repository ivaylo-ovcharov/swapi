<template>
  <AppLayout>
    <div :class="`flex h-screen overflow-hidden theme-${getTheme}`">
      <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-body text-primaryText">
        <Header
          :sidebar-open="sidebarOpen"
          @toggle-sidebar="sidebarOpen = !sidebarOpen"
      />
          <router-view />
      </div>
    </div>
  </AppLayout>
</template>

<script>
import Header from '@/components/Header.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
  },
  computed: {
      ...mapGetters(['getTheme']),
  },
}
</script>