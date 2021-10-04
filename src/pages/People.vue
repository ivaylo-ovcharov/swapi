<template>
  <div class="p-8">
       <div class="sm:flex sm:justify-between sm:items-center mb-8">
        <div class="mb-4 sm:mb-0">
          <h1 class="text-2xl md:text-3xl text-primaryText font-bold">People ✨</h1>
        </div>

        <Search @search="onSearch" :value="search" placeholder="ex: Luke Skywalker"/>          
      </div>
      <Table :headers="headers" :count="getPeopleCount" :items="getPeople" headline="People" :page="page" @changePage="changePage" :loading="getPeopleLoading">
        <template v-slot:name="{item}">
          <b>{{ item }}</b>
        </template>
        <template v-slot:created="{item}">
          <span> {{ humanReadableDate(item) }} </span>
        </template>
        <template v-slot:edited="{item}">
          <span> {{ humanReadableDate(item) }} </span>
        </template>
        <template v-slot:homeworld="{item}">
          <a @click="openPlanet(item)" class="cursor-pointer text-primary font-bold hover:text-primaryHover">Planet</a>
        </template>
      </Table>
      <PlanetModal :selectedPlanet="selectedPlanet" @resetPlanet="selectedPlanet = ''"/>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import Table from '@/components/Table.vue'
import Search from '@/components/Search.vue'
import PlanetModal from '@/components/PlanetModal.vue'
import { humanReadableDate } from '@/lib/dateFormatter.js'

export default {
  name: 'People',
   data() {
    return {
      page: 1,
      search: '',
      selectedPlanet: '',
      headers: [
        {
          name: 'Name',
          val: 'name',
        },
        {
          name: 'Mass',
          val: 'mass'
        },
        {
          name: 'Height',
          val: 'height'
        },
        {
          name: 'Created',
          val: 'created'
        },
        {
          name: 'Edited',
          val: 'edited'
        },
        {
          name: 'Planet',
          val: 'homeworld'
        }
      ]
    }
  },
  computed: {
      ...mapGetters(['getPeople', 'getPeopleCount', 'getPeopleLoading']),
  },
  methods: {
    ...mapActions(['fetchPeople']),
    humanReadableDate,
    openPlanet(planet) {
      this.selectedPlanet = planet
    },
    changePage (page) {
      this.page = page
    },
    onSearch (value) {
      this.page = 1
      this.search = value
    }
  },
  mounted() {
    this.$watch(
      (vm) => [vm.page, vm.search],
      (val) => {
        this.fetchPeople({
          page: this.page,
          search: this.search
        })
      },
      {
        immediate: true,
        deep: true,
      }
    );
  },
  components: {
    Table,
    PlanetModal,
    Search
  }
}
</script>
