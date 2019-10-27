<template>
  <header class="header">
    <container>
      <div class="header__wrp">
        <router-link to="/" class="header-logo">
          <img src="@/assets/img/weather-logo.png" alt="weather" class="header-logo__img">
          <div class="header-logo__title">Vue Weather</div>
        </router-link>
      </div>
    </container>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
@import "../assets/scss/components/header";
</style>
