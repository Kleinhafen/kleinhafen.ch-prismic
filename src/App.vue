<template lang="pug">
  #app
    .nav
      span ABOUT US
    router-view
    page-footer
</template>

<script>
  import PageFooter from './components/PageFooter'

  export default {
    name: 'App',
    components: {PageFooter},
  }
</script>

<style lang="stylus">
  @import './assets/css/prismic-edit-button.css'
  @import './assets/css/colors.styl'

  *
    box-sizing border-box

  html, body
    margin 0
    padding 0
    border 0
    font-family Europa, Helvetica, sans-serif
    font-size 18px
    line-height 1.5

  h1, h2, h3, h4, h5, h6
    margin-top 0
    margin-bottom 0.8em
    font-weight normal
    font-family Europa, Helvetica, sans-serif
    text-transform uppercase

  h1
    font-size 1.4rem
    margin-bottom 1.5rem

  h2
    font-size 1.7rem
    margin-bottom 1.5rem

  p
    margin-top 0
    margin-bottom 1rem
    &:last-child
      margin-bottom 0

  input
    display block
    border 0
    padding 0.5rem 1rem
    background white

  button
    display flex
    align-items center
    justify-content center
    width 100%
    padding 1.5rem
    background color-kh
    color black
    border 0
    text-align center
    font-size 0.9rem
    font-family Europa, Helvetica, sans-serif
    letter-spacing 2px
    text-transform uppercase
    cursor pointer
    transition all 200ms ease-in-out
    p
      margin-bottom 0
    &:hover
      background darken(color-kh, 15%)
    &.btn--outline
      display inline-block
      width auto
      padding 0.5rem 2rem
      border 2px solid black
      background transparent
      font-size 0.7rem
      &:hover
        background black
        color white

  .form
    input, button
      height 3rem
    .form-group
      display flex
      flex-wrap wrap
      margin 0 -0.5rem
      margin-bottom 1.5rem
      input
        flex 2
      button
        flex 1
      input, button
        margin 0 0.5rem

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

  .page-container
    max-width 1100px
    margin 0 auto

  .page-supersection
    padding 4rem 0

  .page-section
    margin-bottom 3rem
    &:last-child
      margin-bottom 0

  .grid
    display grid
    width 100%
    grid-template-columns repeat(auto-fit, minmax(200px, 1fr))
    grid-column-gap 4rem

  .coltext
    &.coltext--2
      columns auto 2
      column-gap 2rem
</style>
