<template>
  <div id="app">
    <Header />
    <div class="wrapper">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900');
  @import "assets/scss/normalize";
  @import "assets/scss/global";
</style>
