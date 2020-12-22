<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from '@/views/Home'
export default {
  components: { Home },
}
</script>

<style lang="scss">
@import 'scss/_vars.scss';
*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  font-size: 10px;
}
body {
  background-color: #efefef;
  color: $colorDark;
  font-size: 1.6rem;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
