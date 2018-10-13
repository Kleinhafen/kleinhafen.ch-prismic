<template lang="pug">
#app
  .nav
    span ABOUT US
  router-view
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style lang="stylus">
@import "./assets/css/prismic-edit-button.css"

color-kh = #67f1af

html, body
  margin 0
  padding 0
  border 0
  box-sizing border-box

h1, h2, h3, h4, h5, h6
  font-weight normal
  font-family Europa, Helvetica, sans-serif

h1
  font-size 3rem

.nav
  position fixed
  top 0
  left 0
  right 0
  z-index 100
  display flex
  align-items center
  justify-content center
  height 2.5rem
  background color-kh
  font-family Europa, Helvetica, sans-serif
  text-transform uppercase
  font-size 0.9rem
</style>
