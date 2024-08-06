<template>
  <div class="sub-header">
    <LogoContainer />
    <AdressHeader :cep="cep" :city="city"/>
    <SearchContainer :category="category" :search="search" />
    <LoginComponent />
    <ShopCar />
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  width: 100%;
  padding: 5px 17px;
  background-color: $tsl-3-dark;

}

</style>
