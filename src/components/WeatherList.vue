<template>
  <div class="weather-list" v-if="cities">
    <weather-card
      v-for="(city, $index) in cities.list" :key="city.id"
      :city="city"
      :class="{ primary : $index === 0 || $index === 1 }"
    />
  </div>
</template>

<script>
import WeatherCard from '@/components/WeatherCard'
import axios from 'axios'
export default {
  name: 'WeatherList',
  components: {
    WeatherCard
  },
  data () {
    return {
      cities: null
    }
  },
  methods: {
    getCityDetails () {
      let self = this
      axios.get('/group?id=2643743,2759794,2988507,3054643,2950159')
        .then(response => {
          self.cities = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  created () {
    this.getCityDetails()
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/scss/variables";
  .weather-list {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 50px 0;
    @include bp(mobile) {
      padding: 25px 0;
    }
  }
</style>
