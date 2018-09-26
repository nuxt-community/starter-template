<template>
  <a href="#main">Skip to content</a>
  <main id="main">
    <nuxt/>
  </main>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
[href="#main"]
  left: 5px
  position: absolute
  top: 100%

  &:focus
    top: 5px
</style>
