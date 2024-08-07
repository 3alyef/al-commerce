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
  gap: 10px;
  width: 100%;
  padding: 5px 2.5px;
  background-color: $tsl-3-dark;

  .firstSec {
    width: 100%;
  }

  .shopSec, .firstSec {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
  }

  .searchSec {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em 0em;
  }

  .shopSec {
    gap: 20px;
  }

  @media(max-width: 860px) {
    .firstSec  {
      justify-content: flex-start;
    }
  }

  @media (max-width: 980px) {
    .firstSec {
      gap: 0px;
    }
  }

  @media (max-width: 1115px) {
    .shopSec {
      gap: 10px;
    }
  }

}

@media (max-width: 460px) {
  .sub-header {
    justify-content: flex-start;
    grid-template-columns: 12% 50% 15%;
    gap: 30px;
    padding-left: 3px;
  }
}

@media (max-width: 580px) and (min-width: 460px) {
  .sub-header {
    justify-content: flex-start;
    grid-template-columns: 10% 50% 15%;
    gap: 40px;
    padding-left: 15px;
  }
}

@media (max-width: 750px) and (min-width: 580px) {
  .sub-header {
    grid-template-columns: 20% 50% 12%;
    gap: 0px;
  }
}

@media (max-width: 858px) and (min-width: 750px){
  .sub-header {
    grid-template-columns: 25% auto 12%;
  }
}

@media (max-width: 1115px) and (min-width: 858px) {
  .sub-header {
    grid-template-columns: 37% auto 12%;
  }
}

</style>
