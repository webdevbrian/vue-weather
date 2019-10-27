<template>
  <div class="detail">
    <container v-if="details">
      <div class="detail__inner">
        <div class="detail__header">
          <div class="detail__title">
            <strong class="strong">{{ details.city.name }}, {{ details.city.country}}</strong>
            Future Weather Forecast
          </div>
          <v-link
            class="detail__back button--secondary"
            icon="arrow-left"
            :to="{ name: 'Home' }"
            title="Back"
          />
        </div>
        <div class="detail__list">
          <DayCard
            v-for="day in filteredDays" :key="day.id"
            :day="day"
          />
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import DayCard from '@/components/DayCard'
import axios from 'axios'
import { log } from 'util'
export default {
  name: 'CityDetail',
  components: {
    DayCard
  },
  data () {
    return {
      details: null
    }
  },
  methods: {
    getCityDetails () {
      let self = this
      axios.get(`/forecast?id=${this.$route.params.id}`)
        .then(response => {
          self.details = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  computed: {
    filteredDays () {
      return this.details.list.filter((item) => {
        const date = new Date(item.dt * 1000)
        return date.getHours() === 11
      })
    }
  },
  created () {
    this.getCityDetails()
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/variables";
  .detail {
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__back {
      font-weight: 700;
      font-size: 17px;
      .button__icon {
        font-size: 1.4em;
      }
    }
    &__inner {
      padding: 50px 0;
      @include bp(tablet-small) {
        padding: 25px 0;
      }
    }
    &__title {
      font-weight: 400;
      font-size: 21px;
      color: #5a6e96;
      @include bp(tablet-small) {
        font-size: 15px;
      }

      @include bp(mobile) {
        font-size: 13px;
      }

      .strong {
        font-size: 1.5em;
        font-weight: 700;
        color: #3d76d8;
        margin-right: 5px;
        @include bp(mobile) {
          display: block;
          margin-bottom: 5px;
        }
      }
    }
    &__list {
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;

      @include bp(tablet-small) {
        margin-top: 25px;
        justify-content: center;
      }
    }
  }
</style>
