<template>
  <div class="wrapper">
    <h1 class="title">{{$prismic.richTextAsPlain(fields.title)}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Event',
  data() {
    return {
      documentId: '',
      fields: {
        title: null,
      }
    }
  },
  methods: {
    getContent(uid) {
      this.$prismic.client.getByUID('event', uid)
        .then((document) => {
          if (document) {
            this.documentId = document.id
            this.fields.title = document.data.title
          } else {
            this.$router.push({name: 'not-found'})
          }
        })
    }
  },
  created() {
    this.getContent(this.$route.params.uid)
  },
  beforeRouteUpdate(to, from, next) {
    this.getContent(to.params.uid)
    next()
  }
}
</script>

<style>
.wrapper {
  max-width: 820px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 10px;
  font-family: Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.title {
  font-size: 32px;
}
</style>
