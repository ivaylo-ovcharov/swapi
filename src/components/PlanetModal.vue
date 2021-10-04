<template>
  <div>
    <BaseModal
      :modal-open="openModal"
      headline="Planet details"
      @closeModal="closeModal()"
    >
      <LineralProgress v-if="getPlanetLoading" />
      <div v-if="!getPlanetLoading">
        <p>Planet name: {{ checkForUnknown(getPlanet.name) }}</p>
        <p>Planet diameter: {{ checkForUnknown(getPlanet.diameter) }}</p>
        <p>Planet climate: {{ checkForUnknown(getPlanet.climate) }}</p>
        <p>Planet population: {{ checkForUnknown(getPlanet.population) }}</p>
      </div>
      <div class="py-4">
        <div class="flex flex-wrap justify-end space-x-2">
          <Button @click="closeModal()">
            Got it!
          </Button>
        </div>
      </div>
    </BaseModal>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import BaseModal from '@/components/BaseModal.vue'
import LineralProgress from '@/components/LineralProgress.vue'
import Button from '@/components/Button.vue'


export default {
    name: "PlanetModal",
    components: {
        BaseModal,
        LineralProgress,
        Button
    },
    props: {
        selectedPlanet: {
            type: String,
            required: false,
            default: () => ''
        }
    },
    emits: ['reset-planet'],
    data() {
        return {
            openModal: false
        }
    },
    computed: {
        ...mapGetters(['getPlanet', 'getPlanetLoading']),
    },
    watch: {
        selectedPlanet: function (val) {
            if (val !== '') {
                this.openModal = true
                this.fetchPlanet(val)
            }
           
        }
    },
    methods: {
        ...mapActions(['fetchPlanet']),
        closeModal () {
           this.openModal = false
           this.$emit('reset-planet') 
        },
        checkForUnknown(value) {
            return value === 'unknown' ? '-' : value
        }
    },
}
</script>