<template>
  <Header />
  <router-view/>
</template>

<style lang="scss">
@import "./styles/globals.scss";

#app {
  font-family: Arial, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}

</style>

<script lang="ts">
import Header from '@/components/Header/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<!--
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
-->
