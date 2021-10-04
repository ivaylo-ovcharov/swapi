<template>
  <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
    <div class="relative">
      <input
        class="form-input pl-9 bg-white placeholder-inputPlaceholder bg-input border-inputBorder text-inputText"
        type="search"
        :placeholder="placeholder"
        :value="value"
        @input="onInput"
      >
      <button
        class="absolute inset-0 right-auto group"
        type="submit"
        aria-label="Search"
      >
        <Fa
          icon="search"
          class="w-4 h-4 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 mr-2"
        />
      </button>
    </div>
  </div> 
</template>
<script>
export default {
    name: "Search",
    props: {
        placeholder: {
            type: String,
            required: false,
            default: () => ''
        },
        value: {
            type: String,
            required: false,
            default: () => ''
        }
    },
    emits: ['search'],
    methods: {
        onInput(event) {
            setTimeout(() => {
                this.$emit('search', event.target.value);
            }, 100);
        }
    }
}
</script>