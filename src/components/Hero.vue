<template lang='pug'>
.hero
  .hero__video-container
    .hero__overlay
    iframe(src='//player.vimeo.com/video/170963719?api=1&background=1')
  .hero__content
    .hero__logo
      img(src='../assets/img/kh-logo.png')
</template>

<style lang='stylus'>
.hero
  position relative
  max-height 80vh
  overflow hidden
  background #666
  .hero__content
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    z-index 30
    display flex
    align-items center
    justify-content center
    .hero__logo
      width 20rem
      height 20rem
      max-width 70%
      max-height 70%
      text-align center
      img
        height auto
        max-width 100%
        max-height 100%
  .hero__video-container
    position relative
    padding-bottom 56.25%
    height 0
    .hero__overlay
      background rgba(0,0,0,0.1)
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      z-index 20
    iframe
      display block
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      z-index 10
      width 100%
      height 100%
      margin 0
      padding 0
      border 0
</style>

<script>
export default {
  name: 'Hero',
  data() {
    return {
    }
  },
  methods: {
  },
  created() {
  },
  beforeRouteUpdate(to, from, next) {
  }
}
</script>
