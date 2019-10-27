<template>
  <div class="day-card">
    <div class="day-card__top">
      <div class="day-card__day">{{ new Date(day.dt * 1000).toLocaleString('en-us', { weekday: 'long'}) }}</div>
      <div class="day-card__date">
        {{ new Date(day.dt * 1000).toLocaleString('en-us', { month: 'long'}) }}
        {{ new Date(day.dt * 1000).getDate()}}
      </div>
    </div>
    <div class="day-card__middle">
      <div class="day-card__temp">{{ Math.round(day.main.temp) }}<small>ºF</small></div>
      <span class="day-card__icon">
       <svg-icon :icon="day.weather[0].main.toLowerCase()"/>
      </span>
    </div>
    <div class="day-card__bottom">
      <div class="day-card-info">
        <div class="day-card-info__item">
          <div class="day-card-info__title">{{ day.clouds.all }}<small>%</small></div>
          <div class="day-card-info__txt">Clouds</div>
        </div>
        <div class="day-card-info__item">
          <div class="day-card-info__title">{{ Math.round(day.main.pressure) }}</div>
          <div class="day-card-info__txt">Pressure</div>
        </div>
        <div class="day-card-info__item">
          <div class="day-card-info__title">{{ day.main.humidity }}<small>%</small></div>
          <div class="day-card-info__txt">Humidity</div>
        </div>
        <div class="day-card-info__item">
          <div class="day-card-info__title">{{ day.wind.speed }}<small>m/s</small></div>
          <div class="day-card-info__txt">Wind Speed</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DayCard',
  props: {
    day: Object
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/components/day-card";
</style>
