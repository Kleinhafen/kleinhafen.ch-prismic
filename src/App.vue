<template lang="pug">
#app
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
</style>
