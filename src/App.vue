<template>
  <nav-bar></nav-bar>

  <div class="container pt-4 mx-auto">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>

import NavBar from './components/NavBar';

export default {
    components: {
      NavBar
    }
}
</script>

<style>
.router-link-active{
  color: black;
  font-weight: bold;
}

.router-link-exact-active{
  color: black;
  font-weight: bold;
}

.container{
  max-width: 1280px !important;
}
</style>
