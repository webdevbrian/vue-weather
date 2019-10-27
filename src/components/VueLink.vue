<template>
  <router-link :to="to" class="button"
    :class="{ 'icon-left' : iconPosition === 'left' }">
    <span class="button__wrp">
      <span class="button__icon" v-if="iconPosition === 'left' && icon">
        <svg-icon :icon="icon" />
      </span>
      <span class="button__title">{{ title }}</span>
      <span class="button__icon" v-if="iconPosition === 'right' && icon">
        <svg-icon :icon="icon" />
      </span>
    </span>
  </router-link>
</template>

<script>
export default {
  name: 'VueLink',
  props: {
    iconPosition: {
      type: String,
      default: 'left'
    },
    icon: String,
    title: String,
    to: [String, Object]
  }
}
</script>

<style lang="scss">
@import "../assets/scss/components/buttons";
</style>
