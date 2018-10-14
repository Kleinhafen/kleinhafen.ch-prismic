<template lang="pug">
  .home
    hero

    .page-container.page-supersection
      .page-section
        h1 {{$prismic.richTextAsPlain(home.page_title)}}
        prismic-rich-text.coltext.coltext--2(:field='home.page_summary')

      .page-section
        .offer-list-intro
          h2 {{$prismic.richTextAsPlain(home.plans_title)}}
        .plan-list.offer-list
          .offer(v-for='plan in plans')
            .offer__image(:style='{"background-image": "url(" + plan.image.url + ")"}')
            h3
              div(v-for='word in $prismic.richTextAsPlain(plan.name).split(" ")') {{word}}
            prismic-rich-text.offer__description(:field='plan.description')
            button
              prismic-rich-text(:field='plan.price_text')
            ul
              li(v-for='advantageItem in plan.advantages')
                | {{$prismic.richTextAsPlain(advantageItem.advantage)}}
        .booker
          button.btn--outline Book a one-hour personal tour in Kleinhafen

      .page-section
        .offer-list-intro
          h2 {{$prismic.richTextAsPlain(home.rooms_title)}}
          prismic-rich-text(:field='home.rooms_summary')
        .room-list.offer-list
          .offer(v-for='room in rooms')
            .offer__image(:style='{"background-image": "url(" + room.main_image.url + ")"}')
            h3 {{$prismic.richTextAsPlain(room.name)}}
            prismic-rich-text.offer__description(:field='room.summary')
            button
              prismic-rich-text(:field='room.price_summary')
            ul
              li(v-for='advantageItem in room.advantages')
                | {{$prismic.richTextAsPlain(advantageItem.advantage)}}

      .page-section
        h2 {{$prismic.richTextAsPlain(home.about_title)}}
        prismic-rich-text(:field='home.about_summary')
        .people-list
          .person
            img(src='../assets/img/people/Subing-Ben.jpg')
            .person__name Subing Ben
          .person
            img(src='../assets/img/people/Indre-Grumbinaite.jpg')
            .person__name Indre Grumbinaite
          .person
            img(src='../assets/img/people/Safak-Korkut.jpg')
            .person__name Safak Korkut
          .person
            img(src='../assets/img/people/Priska-Olivetti.jpg')
            .person__name Priska Olivetti

        .booker
          button.btn--outline Read articles about Kleinhafen

      .page-section
        .placeholder instagram goes here
        .booker
          button.btn--outline Follow us on Instagram
</template>

<style lang="stylus" scoped>
  .home
    .placeholder
      display flex
      align-items center
      justify-content center
      height 30rem
      margin-bottom 1.5rem
      background rebeccapurple
      color white
    .offer-list-intro
      margin-bottom 2rem
      h2
        margin-bottom 1rem
      & >>> p
        max-width 30rem
    .offer-list
      display flex
      margin 0 -1rem
      .offer
        flex 0 0 calc(33% - 2rem)
        width calc(33% - 2rem)
        padding 0 1rem
        h3
          font-size 1.1rem
          margin-bottom 1rem
        .offer__image
          height 13rem
          margin-bottom 1.5rem
          background-size cover
          background-position center
        .offer__description
          margin-bottom 1.5rem
          min-height 5rem
        button
          margin-bottom 1.5rem
    .booker
      margin-top 1.5rem
      text-align center
    .people-list
      display flex
      margin 0 -1rem
      margin-top 1.5rem
      .person
        flex 1 0
        padding 0 1rem
        img
          display block
          max-width 100%
          margin-bottom 1.5rem
        .person__name
          font-size 0.9rem
</style>

<script>
  import Prismic from 'prismic-javascript'
  import Hero from './Hero'
  import {sortBy} from 'lodash'

  export default {
    name: 'Home',
    components: {Hero},
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
          this.plans = sortBy(planDocs.results.map((d) => d.data), 'order')
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
