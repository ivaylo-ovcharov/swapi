<template>
  <div>
    <f-base-modal
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
          <FButton @click="closeModal()">
            Got it!
          </FButton>
        </div>
      </div>
    </f-base-modal>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import FBaseModal from '@/components/FBaseModal.vue'
import LineralProgress from '@/components/LineralProgress.vue'
import FButton from '@/components/FButton.vue'


export default {
    name: "PlanetModal",
    components: {
        FBaseModal,
        LineralProgress,
        FButton
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
        ...mapGetters(['getPlanet', 'getPlanetLoading', 'getPlanetCache', 'getPlanetError']),
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