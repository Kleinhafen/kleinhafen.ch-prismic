<template lang='pug'>
.home
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

<style lang='stylus'>
</style>
