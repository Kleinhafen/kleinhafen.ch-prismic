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
  h2 {{$prismic.richTextAsPlain(home.rooms_title)}}
  prismic-rich-text(:field='home.rooms_summary')
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
      ]).then(([homeDoc, planDocs]) => {
        if (!homeDoc || !planDocs) { return this.panic() }
        this.home = homeDoc.data
        this.plans = planDocs.results.map((d) => d.data)
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
