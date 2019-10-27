<template>
  <button class="button"
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
  </button>
</template>

<script>
export default {
  name: 'VueButton',
  props: {
    iconPosition: {
      type: String,
      default: 'left'
    },
    icon: String,
    title: String
  }
}
</script>

<style lang="scss">
@import "../assets/scss/components/buttons";
</style>
