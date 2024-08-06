<template>
  <div class="logoContainer">
    <img class="eLogo" alt="e-commerce logo" src="@/assets/logo-main.svg"/>
    <h1>AL.commerce.com</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LogoContainer',
});
</script>

<style scoped lang="scss">
@import "@/styles/variables";
.logoContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5em;

  h1 {
    color: white;
    font-size: 17px;
    font-family: Kavivanar;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .eLogo {
    aspect-ratio: 1/1;
    width: 4em;
  }
}
</style>
