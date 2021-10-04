<template>
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
    <nav
      class="mb-4 sm:order-1"
      role="navigation"
      aria-label="Navigation"
    >
      <ul class="flex justify-center">
        <li class="ml-3 first:ml-0">
          <Button
            outlined
            :disabled="disablePrevButton"
            @click="$emit('prev-page')"
          >
            &lt;- Previous
          </Button>
        </li>
        <li class="ml-3 first:ml-0">
          <Button
            outlined
            :disabled="disableNextButton"
            @click="$emit('next-page')"
          >
            Next -&gt;
          </Button>
        </li>
      </ul>
    </nav>
    <div class="text-sm text-primaryText text-center sm:text-left">
      Showing 
      <span class="font-medium text-textDark">{{ showingFrom }}</span> to <span class="font-medium text-textDark">{{ showingTo }}</span> of 
      <span class="font-medium text-textDark">{{ itemsCount }}</span> results
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'FPagination',
  components: {
    Button,
  },
  props: {
    page: {
      type: Number,
      required: false,
      default: () => 1
    },
    itemsPerPage: {
      type: Number,
      required: false,
      default: () => 20
    },
    itemsCount: {
      type: Number,
      required: false,
      default: () => 500
    },
  },
  emits: ['prev-page', 'next-page'],
  computed: {
      showingFrom () {
          return this.itemsCount === 0 ? 0 :  1 + ( this.page - 1 ) * this.itemsPerPage
      },
      showingTo () {
          return this.disableNextButton ?  this.itemsCount : this.page * this.itemsPerPage
      },
      disableNextButton () {
          return this.itemsCount < this.page * this.itemsPerPage
      },
      disablePrevButton () {
          return this.page === 1
      }
  }
}
</script>