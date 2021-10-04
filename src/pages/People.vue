<template>
  <div class="p-8">
    <div class="sm:flex sm:justify-between sm:items-center mb-8">
      <HeadTitle title="People" />
      <Search
        :value="search"
        placeholder="ex: Luke Skywalker"
        @search="onSearch"
      />          
    </div>
    <Table
      headline="Find your favourite characters"
      :headers="headers"
      :count="getPeopleCount"
      :items="getPeople"
      :page="page"
      :loading="getPeopleLoading"
      @changePage="changePage"
    >
      <template #name="{item}">
        <b>{{ item }}</b>
      </template>
      <template #created="{item}">
        <span> {{ humanReadableDate(item) }} </span>
      </template>
      <template #edited="{item}">
        <span> {{ humanReadableDate(item) }} </span>
      </template>
      <template #homeworld="{item}">
        <a
          class="cursor-pointer text-primary font-bold hover:text-primaryHover"
          @click="openPlanet(item)"
        >
          Planet
        </a>
      </template>
    </Table>
    <PlanetModal
      :selected-planet="selectedPlanet"
      @resetPlanet="selectedPlanet = ''"
    />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import HeadTitle from '@/components/HeadTitle.vue'
import Table from '@/components/Table.vue'
import Search from '@/components/Search.vue'
import PlanetModal from '@/components/PlanetModal.vue'
import { humanReadableDate } from '@/lib/dateFormatter.js'

export default {
  name: 'People',
  components: {
    Table,
    PlanetModal,
    HeadTitle,
    Search
  },
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
  mounted() {
    this.$watch(
      (vm) => [vm.page, vm.search],
      () => {
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
  }
}
</script>
