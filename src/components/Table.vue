<template>
  <div>
    <div class="w-full bg-tableBackground shadow-lg rounded-sm border border-tableBorder">
      <header
        v-if="headline"
        class="px-5 py-4"
      >
        <h2 class="font-semibold text-primaryText">
          {{ headline }}
        </h2>
      </header>
    
      <div class="overflow-x-auto">                
        <LineralProgress v-if="loading" />
        <table class="table-auto w-full">
          <TableHead :headers="headers" />
          
          <tbody class="text-sm divide-y divide-tableBorder">
            <tr 
              v-for="(item, itemIndex) in items"
              :key="itemIndex"
              class="hover:bg-tableRowHover"
            >
              <td 
                v-for="(header, headerIndex) in headers"
                :key="headerIndex" 
                class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px text-primaryText"
              >
                <slot
                  :name="header.val"
                  :item="item[header.val]"
                >
                  <span>{{ item[header.val] === 'unknown' ? '-' : item[header.val] }}</span> 
                </slot>
              </td>
            </tr>
          </tbody>
        </table>
        <TableNoData v-if="items && !items.length" />
      </div>
    </div>
    <div class="mt-8">
      <Pagination
        :page="page" 
        :items-per-page="10" 
        :items-count="count"
        @nextPage="nextPage"
        @prevPage="prevPage"
      />
    </div>
  </div>
</template>
<script>
import TableHead from '@/components/TableHead.vue'
import TableNoData from '@/components/TableNoData.vue'
import Pagination from '@/components/Pagination.vue'
import LineralProgress from '@/components/LineralProgress.vue'

export default {
  name: 'Table',
   components: {
    Pagination,
    LineralProgress,
    TableHead,
    TableNoData
  },
  props: {
    headline: {
        type: String,
        required: false,
        default: () => ''
    },
    headers: {
        type: Object,
        required: true
    },
    items: {
        type: Object,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    page: {
        type: Number,
        required: true
    },
    loading: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  emits: ['change-page'],
  methods: {
    nextPage () {
      this.$emit('change-page', this.page + 1)
    },
    prevPage () {
      this.$emit('change-page', this.page - 1)
    }
  }
}
</script>