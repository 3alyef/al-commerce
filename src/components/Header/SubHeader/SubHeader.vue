<template>
  <div class="sub-header">
    <span class="firstSec">
      <LogoContainer />
      <AdressHeader :cep="cep" :city="city"/>
    </span>
    <span class="searchSec">
      <SearchContainer :category="category" :search="search" />
    </span>
    <span class="shopSec">
      <LoginComponent />
      <ShopCar />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AdressHeader from './AdressHeader.vue';
import LogoContainer from './LogoContainer.vue';
import SearchContainer from './SearchContainer.vue';
import LoginComponent from './LoginComponent.vue';
import ShopCar from './ShopCar.vue';

export default defineComponent({
  name: 'SubHeader',
  components: {
    AdressHeader,
    LogoContainer,
    SearchContainer,
    LoginComponent,
    ShopCar,
  },
  setup() {
    const city = ref<string>('Cocal');
    const cep = ref<number>(64235000);
    const category = ref<string>('Livros');

    function search() {
      console.log('On search');
    }

    return {
      city,
      cep,
      category,
      search,
    };
  },
});
</script>

<style lang="scss">
@import "@/styles/variables";
.sub-header {
  // display: flex;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: space-evenly;
  //justify-content: center;
  width: 100%;
  padding: 5px 2.5px;
  background-color: $tsl-3-dark;

  .shopSec, .firstSec {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 5px;
  }

  .searchSec {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em 1em;
  }

}

</style>
