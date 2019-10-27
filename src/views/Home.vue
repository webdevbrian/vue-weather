<template>
  <div class="home">
    <container>
      <WeatherList />
    </container>
  </div>
</template>

<script>
import WeatherList from '@/components/WeatherList'
export default {
  name: 'Home',
  components: {
    WeatherList
  }
}
</script>
