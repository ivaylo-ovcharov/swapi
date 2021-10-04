<template>
  <div >
    <button :class="classes" :disabled="disabled">
      <div v-if="loading" class="pr-2">
        <svg class="animate-spin w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 16 16">
          <path d="M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
        </svg>
      </div>
      <slot />
    </button>
  </div>
</template>
<script>
export default {
  name: 'FButton',
   props: {
    outlined: {
      type: Boolean,
      required: false,
      default: () => false
    },
    color: {
      type: String,
      required: false,
      default: () => 'primary',
      validator (val) {
        return ['primary', 'danger', 'success'].includes(val)
      }
    },
    loading: {
      type: Boolean,
      required: false,
      default: () => false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: () => false
    },
    size: {
      type: String,
      required: false,
      default: 'regular',
      validator (val) {
        return ['x-small', 'small', 'regular', 'large', 'x-large'].includes(val)
      }
    }
  },
  data() {
    return {
      colorMapper: [
        {
          name: "primary",
          class: "bg-primary hover:bg-primaryHover text-white",
          outlinedClass: 'bg-buttonBackground border-buttonBorder text-primary'
        }
      ],
      sizeMapper: [
        {
          name: 'x-small',
          class: "btn-xs"
        },
        {
          name: 'small',
          class: "btn-sm"
        },
        {
          name: 'regular',
          class: "btn"
        }
      ]
    }
  },
  computed: {
    classes () {
      let clas = []

      const sizeClasses = this.getSizeClasses()
      clas.push(sizeClasses)
      
      const colorClasses = this.getColorClasses()
      clas.push(colorClasses)
      
      return clas.join(' ')
    }
  },
  methods: {
    getSizeClasses() {
      return this.sizeMapper.find(size => size.name === this.size).class
    },
    getColorClasses() {
      const findColor = this.colorMapper.find(color => color.name === this.color)
      let classes
      if (this.disabled) {
        classes = ' bg-buttonBackground border-buttonBorder text-buttonDisabledText cursor-not-allowed'
      } else {
        classes = this.outlined ? findColor.outlinedClass : findColor.class
      }
      return classes
    }
  }
}
</script>

