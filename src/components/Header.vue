<template>
  <header class="sticky top-0 bg-header border-b border-headerBorder z-30">
    <div class="px-8 sm:px-8 lg:px-8">
      <div class="flex items-center justify-between h-16 -mb-px">
        <!-- Header: Left side -->
        <img
          v-if="getTheme === 'light'"
          src="@/assets/logo-dark.svg"
          style="width: 60px"
        >
        <img
          v-if="getTheme === 'dark'"
          src="@/assets/logo-white.svg"
          style="width: 60px"
        >
        
        <div
          v-if="getTheme === 'light'"
          @click="changeTheme('dark')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-moon-stars cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#597e8d"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
            <path d="M19 11h2m-1 -1v2" />
          </svg>
        </div>
        <div
          v-if="getTheme === 'dark'"
          @click="changeTheme('light')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brightness-up cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#597e8d"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <circle
              cx="12"
              cy="12"
              r="3"
            />
            <line
              x1="12"
              y1="5"
              x2="12"
              y2="3"
            />
            <line
              x1="17"
              y1="7"
              x2="18.4"
              y2="5.6"
            />
            <line
              x1="19"
              y1="12"
              x2="21"
              y2="12"
            />
            <line
              x1="17"
              y1="17"
              x2="18.4"
              y2="18.4"
            />
            <line
              x1="12"
              y1="19"
              x2="12"
              y2="21"
            />
            <line
              x1="7"
              y1="17"
              x2="5.6"
              y2="18.4"
            />
            <line
              x1="6"
              y1="12"
              x2="4"
              y2="12"
            />
            <line
              x1="7"
              y1="7"
              x2="5.6"
              y2="5.6"
            />
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Header",
  computed: {
      ...mapGetters(['getTheme']),
  },
  methods: {
    ...mapActions(['changeTheme']),
  },
};
</script>