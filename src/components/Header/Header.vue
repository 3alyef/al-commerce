<template>
  <header class="header">
    <div class="sub-header">
      <div class="logoContainer">
        <img class="eLogo" alt="e-commerce logo" src="@/assets/logo-main.svg"/>
        <h1>AL.commerce.com</h1>
      </div>
    </div>
    <div>
      <!--Links-->
      <button>
        <v-icon name="co-hamburger-menu" />
        <h3>Todos</h3>
      </button>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderComponent',
});
</script>

<style scoped lang="scss">
@import "@/styles/variables";
.header {
  display: flex;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: $tsl-1;
  flex-direction: column;

  .sub-header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    background-color: $tsl-3-dark;
  }
}

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
}

.eLogo {
  aspect-ratio: 1/1;
  width: 4em;
}
</style>
