<template>
     <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
        <div class="relative">
        <input class="form-input pl-9 bg-white placeholder-inputPlaceholder bg-input border-inputBorder text-inputText" type="search" @input="onInput" :placeholder="placeholder" :value="value" />
        <button class="absolute inset-0 right-auto group" type="submit" aria-label="Search">
            <svg class="w-4 h-4 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
            <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
            </svg>
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
    methods: {
        onInput(event) {
            setTimeout(() => {
                this.$emit('search', event.target.value);
            }, 100);
        }
    }
}
</script>