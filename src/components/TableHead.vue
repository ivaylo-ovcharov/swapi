<template>
  <thead
    v-if="headers && headers.length"
    class="text-xs font-semibold uppercase text-textDark bg-tableSortBackground border-t border-b border-tableBorder"
  >
    <tr>
      <th 
        v-for="(header, headerIndex) in headers"
        :key="headerIndex" 
        class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px"
      >
        <div class="font-semibold text-left">
          {{ header.name }}
        </div>
      </th>
    </tr>
  </thead>
</template>
<script>
export default {
    name: "TableHead",
    props: {
        headers: {
            type: String,
            required: false,
            default: () => ''
        },
    }
}
</script>