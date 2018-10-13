<template lang='pug'>
.home
  .hero
    .hero__video-container
      .hero__overlay
      iframe(src='//player.vimeo.com/video/170963719?api=1&background=1')
    .hero__content
      .hero__logo
        img(src='../assets/img/kh-logo.png')
  h1 {{$prismic.richTextAsPlain(home.page_title)}}
  prismic-rich-text(:field='home.page_summary')
  h2 {{$prismic.richTextAsPlain(home.plans_title)}}
  .plans
    .plan(v-for='plan in plans')
      img(:src='plan.image.url' height='100' width='100')
      h3 {{$prismic.richTextAsPlain(plan.name)}}
      prismic-rich-text(:field='plan.description')
      button
        prismic-rich-text(:field='plan.price_text')
      ul
        li(v-for='advantageItem in plan.advantages')
          | {{$prismic.richTextAsPlain(advantageItem.advantage)}}
  h2 {{$prismic.richTextAsPlain(home.rooms_title)}}
  prismic-rich-text(:field='home.rooms_summary')
  .rooms
    .room(v-for='room in rooms')
      img(:src='room.main_image.url' height='100' width='100')
      h3 {{$prismic.richTextAsPlain(room.name)}}
      prismic-rich-text(:field='room.summary')
      button
        prismic-rich-text(:field='room.price_summary')
      ul
        li(v-for='advantageItem in room.advantages')
          | {{$prismic.richTextAsPlain(advantageItem.advantage)}}
  h2 {{$prismic.richTextAsPlain(home.about_title)}}
  prismic-rich-text(:field='home.about_summary')
</template>

<style lang='stylus'>
.home
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
import Prismic from 'prismic-javascript'

export default {
  name: 'Home',
  data() {
    return {
      home: {},
      plans: [],
      rooms: [],
    }
  },
  methods: {
    panic() {
      this.$router.push({name: 'not-found'})
    },
    getContent(uid) {
      Promise.all([
        this.$prismic.client.getSingle('home'),
        this.$prismic.client.query(
          Prismic.Predicates.at('document.type', 'plan')
        ),
        this.$prismic.client.query(
          Prismic.Predicates.at('document.type', 'room')
        ),
      ]).then(([homeDoc, planDocs, roomDocs]) => {
        if (!homeDoc || !planDocs) { return this.panic() }
        this.home = homeDoc.data
        this.plans = planDocs.results.map((d) => d.data)
        this.rooms = roomDocs.results.map((d) => d.data)
      })
    }
  },
  created() {
    this.getContent()
  },
  beforeRouteUpdate(to, from, next) {
    this.getContent()
    next()
  }
}
</script>
