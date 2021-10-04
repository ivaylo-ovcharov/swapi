<template>
  <!-- Modal backdrop -->
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-out duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="modalOpen"
      class="fixed inset-0 bg-gray-900 bg-opacity-30 z-50 transition-opacity"
      aria-hidden="true"
    />
  </transition>
  <transition
    enter-active-class="transition ease-in-out duration-200"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in-out duration-200"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div
      v-show="modalOpen"
      :id="id"
      class="fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref="modalContent"
        class="bg-buttonBackground rounded shadow-lg overflow-auto max-w-lg w-full max-h-full"
      >
        <div
          class="px-5 py-3"
          :class="headline && 'border-b border-modalBorder'"
        >
          <div class="flex justify-between items-center">
            <div class="font-semibold text-primaryText">
              {{ headline }}
            </div>
          </div>
        </div>
        <div class="px-5 pt-4 pb-1">
          <div class="text-sm">
            <div class="font-medium text-primaryText mb-2">
              <slot name="title" />
            </div>
            <div class="space-y-2">
              <slot name="description" />
            </div>
          </div>
          <slot /> 
        </div>
        
        <div>
          <div class="flex flex-wrap justify-end space-x-2">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'FBaseModal',
  // eslint-disable-next-line vue/require-prop-types
  props: ['id', 'modalOpen', 'headline'],
  emits: ['close-modal'],
  setup(props, { emit }) {

    const modalContent = ref(null)

    const clickHandler = ({ target }) => {
      if (!props.modalOpen || modalContent.value.contains(target)) return
    }

    const keyHandler = ({ keyCode }) => {
      if (!props.modalOpen || keyCode !== 27) return
      emit('close-modal')
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    return {
      modalContent,
    }
  }  
}
</script>