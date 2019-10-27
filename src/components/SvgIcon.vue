<template>
  <svg viewBox="0 0 20 20" class="icon">
    <use v-bind:xlink:href="'/icon/icons.svg' + href"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    icon: String
  },
  computed: {
    href () {
      return `#${this.icon}`
    }
  }
}
</script>
