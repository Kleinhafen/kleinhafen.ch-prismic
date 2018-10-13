<template lang='pug'>
.home
  h1 {{$prismic.richTextAsPlain(home.page_title)}}
  p {{$prismic.richTextAsPlain(home.page_summary)}}
  h2 {{$prismic.richTextAsPlain(home.rooms_title)}}
  p {{$prismic.richTextAsPlain(home.rooms_summary)}}
  h2 {{$prismic.richTextAsPlain(home.about_title)}}
  p {{$prismic.richTextAsPlain(home.about_summary)}}
</template>

<script>
const Prismic = require('prismic-javascript')

export default {
  name: 'Home',
  data() {
    return {
      home: {
        page_title: null,
        page_summary: null,
        rooms_title: null,
        rooms_summary: null,
        about_title: null,
        about_summary: null,
      }
    }
  },
  methods: {
    panic() {
      this.$router.push({name: 'not-found'})
    },
    getContent(uid) {
      this.$prismic.client.getSingle('home').then(doc => {
        if (!doc) { return this.panic() }
        this.home = doc.data
      })
    }
  },
  created() {
    this.getContent()
    this.$prismic.client.query(Prismic.Predicates.at('document.type', 'event')).then(docs => {
      console.log(docs)
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.getContent()
    next()
  }
}
</script>

<style lang='stylus'>
</style>
