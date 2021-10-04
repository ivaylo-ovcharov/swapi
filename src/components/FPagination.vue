<template>
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
    <nav class="mb-4 sm:order-1" role="navigation" aria-label="Navigation">
      <ul class="flex justify-center">
        <li class="ml-3 first:ml-0">
          <f-button @click="$emit('prev-page')" outlined :disabled="disablePrevButton">&lt;- Previous</f-button>
        </li>
        <li class="ml-3 first:ml-0">
          <f-button @click="$emit('next-page')" outlined :disabled="disableNextButton"> Next -&gt; </f-button>
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
import FButton from '@/components/FButton.vue'

export default {
  name: 'FPagination',
  components: {
    FButton,
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