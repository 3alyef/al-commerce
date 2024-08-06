<template>
  <div>
    <span>
      <v-icon
        name="ri-shopping-cart-line"
        v-if="itemsSelected.length <= 0"
      />
      <v-icon
        name="ri-shopping-cart-fill"
        v-else
      />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ShopCar',
  setup() {
    const itemsSelected = ref<string[]>([]); // Use um array se for uma lista de itens

    return {
      itemsSelected,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
