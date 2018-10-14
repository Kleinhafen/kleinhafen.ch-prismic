<template lang="pug">
  .footer
    .grid
      .impressum
        p
          | Kleinhafen
          br
          | Südquaistrasse 14, 4056 Basel
          br
          | 061 535 31 86
          br
          | ahoi@kleinhafen.ch
        button.btn--outline Contact
      .subscribe
        h3 Subscribe
        p Sign up with your email address for updates and news.
        .form
          .form-group
            input(type='text' placeholder='Email Address')
            button.btn--outline Submit
        small We respect your privacy.
      .bois
        .socials
          a.social(href='http://instagram.com/kleinhafen')
            img(src='../assets/img/social/instagram.svg')
          a.social(href='https://twitter.com/kleinhafenbasel')
            img(src='../assets/img/social/twitter.svg')
          a.social(href='http://www.meetup.com/de-DE/Kleinhafen-inspiriert-arbeiten/')
            img(src='../assets/img/social/meetup.svg')
          a.social(href='https://www.facebook.com/kleinhafen/')
            img(src='../assets/img/social/facebook.svg')
        .cowoch
          a(href='http://www.coworking.ch/')
            img(src='../assets/img/cowoch.png')
</template>

<style lang="stylus" scoped>
  @import '../assets/css/colors.styl'

  .footer
    display flex
    flex-direction column
    justify-content center
    align-items center
    padding 6rem
    background color-kh
    .socials
      display flex
      justify-content flex-start
      margin 0 -0.5rem
      .social
        display block
        margin 0 0.5rem
        &, img
          width 24px
          height 24px
    .subscribe, .impressum
      max-width 20rem
    .cowoch
      margin-top 2rem
      img
        height 4rem
</style>

<script>
  export default {
    name: 'PageFooter',
  }
</script>
