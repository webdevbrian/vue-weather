<template>
  <router-link :to="{ name: 'CityDetail', params: { id: city.id, slug: city.name.toLowerCase() }}" class="weather-card">
    <img :src="require(`@/assets/img/${this.city.name.toLowerCase()}-cover.jpg`)" alt="london weather" class="weather-card__cover">
    <div class="weather-card__cnt">
      <div class="weather-card__top">
        <div>
          <span class="weather-card__temp">{{ Math.round(city.main.temp) }}<small>ºF</small></span>
          <span class="weather-card__name">{{ city.name }}, {{ city.sys.country }}</span>
        </div>
        <span class="weather-card__icon">
          <svg-icon :icon="city.weather[0].main.toLowerCase()"/>
        </span>
      </div>
      <div class="weather-card-info">
        <div class="weather-card-info__item">
          <div class="weather-card-info__title">{{ city.clouds.all }}<small>%</small></div>
          <div class="weather-card-info__txt">Clouds</div>
        </div>

        <div class="weather-card-info__item">
          <div class="weather-card-info__title">{{ city.main.humidity }}<small>%</small></div>
          <div class="weather-card-info__txt">Humidity</div>
        </div>

        <div class="weather-card-info__item">
          <div class="weather-card-info__title">{{ city.wind.speed }}<small>m/s</small></div>
          <div class="weather-card-info__txt">Wind Speed</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'WeatherCard',
  props: {
    city: Object
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/components/weather-card";
</style>
