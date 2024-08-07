<template>
  <div class="shopCarContainer">
    <span class="carContainer">
      <span class="itemsSelected">
        {{ itemsSelected.length }}
      </span>
      <v-icon
        name="ri-shopping-cart-line" inverse="true"
        v-if="itemsSelected.length <= 0"
        scale="1.7"
      />
      <v-icon
        name="ri-shopping-cart-fill" inverse="true"
        v-else
        scale="1.7"
      />
    </span>
    <p class="carShop">
      Carrinho
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ShopCar',
  setup() {
    const itemsSelected = ref<string[]>(['1item']); // Use um array se for uma lista de itens

    return {
      itemsSelected,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
.shopCarContainer {
  color: $white;
  display: flex;
  justify-content: center;
  align-items: center;

  .carContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .itemsSelected {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: -12px;
      font-size: 17px;
      font-weight: 600;
    }
  }

  p {
    font-size: 16.5px;
    font-weight: 500;
    align-self: flex-end;
  }
}

@media (max-width: 1115px) {
  .carShop {
    display: none;
  }
}
</style>
